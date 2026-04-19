/**
 * CascadeAudio — Global audio coordinator for the cascade experience
 *
 * Rules:
 * 1. Only ONE video plays audio at a time
 * 2. When a new video enters viewport and starts, it becomes the active audio source
 * 3. The previous video's audio cuts off immediately
 * 4. One global mute toggle controls whether the active video is audible
 * 5. When muted globally, videos still play visually but with no audio
 *
 * AUDIO FIX: activate() now imperatively sets video.muted on both the
 * previous and new active video, and also calls play() on the new video
 * to ensure the browser's autoplay-with-audio policy is satisfied
 * (the user gesture from clicking "Enter the Atacama" propagates here).
 */

type Listener = (muted: boolean) => void;

class CascadeAudioManager {
  private globalMuted = false;
  private activeVideoId: string | null = null;
  private videos = new Map<string, HTMLVideoElement>();
  private listeners = new Set<Listener>();
  private started = false;

  /** Register a video element with a unique ID */
  register(id: string, video: HTMLVideoElement) {
    this.videos.set(id, video);
    // Start muted — audio only plays when this becomes the active video
    video.muted = true;
    video.volume = 0.7;
  }

  /** Unregister a video element */
  unregister(id: string) {
    this.videos.delete(id);
    if (this.activeVideoId === id) {
      this.activeVideoId = null;
    }
  }

  /** Mark the experience as started (user clicked Enter the Atacama) */
  start() {
    this.started = true;
    this.globalMuted = false;
    this.notifyListeners();
  }

  /** Has the experience started? */
  isStarted() {
    return this.started;
  }

  /** Called when a video enters the viewport and starts playing.
   *  This video becomes the active audio source. */
  activate(id: string) {
    if (!this.started) return;

    // If this is already the active video, just ensure muted state is correct
    if (this.activeVideoId === id) {
      const video = this.videos.get(id);
      if (video) {
        video.muted = this.globalMuted;
      }
      return;
    }

    // Mute the previous active video immediately
    if (this.activeVideoId) {
      const prev = this.videos.get(this.activeVideoId);
      if (prev) {
        prev.muted = true;
      }
    }

    // Set the new active video
    this.activeVideoId = id;
    const video = this.videos.get(id);
    if (video) {
      // Imperatively set muted state
      video.muted = this.globalMuted;

      // If the video is paused, try to play it (user gesture should propagate)
      if (video.paused) {
        video.play().catch(() => {});
      }
    }

    this.notifyListeners();
  }

  /** Called when a video leaves the viewport */
  deactivate(id: string) {
    const video = this.videos.get(id);
    if (video) {
      video.muted = true;
    }
    if (this.activeVideoId === id) {
      this.activeVideoId = null;
    }
  }

  /** Toggle global mute — affects the currently active video */
  toggleMute(): boolean {
    this.globalMuted = !this.globalMuted;

    // Apply to the active video
    if (this.activeVideoId) {
      const video = this.videos.get(this.activeVideoId);
      if (video) {
        video.muted = this.globalMuted;
      }
    }

    this.notifyListeners();
    return this.globalMuted;
  }

  /** Get current mute state */
  isMuted() {
    return this.globalMuted;
  }

  /** Subscribe to mute state changes */
  subscribe(listener: Listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  /** Get the ID of the currently active video (for debugging) */
  getActiveId() {
    return this.activeVideoId;
  }

  /** Get all registered video IDs (for debugging) */
  getRegisteredIds() {
    return Array.from(this.videos.keys());
  }

  private notifyListeners() {
    this.listeners.forEach((fn) => fn(this.globalMuted));
  }
}

// Singleton instance
export const cascadeAudio = new CascadeAudioManager();
