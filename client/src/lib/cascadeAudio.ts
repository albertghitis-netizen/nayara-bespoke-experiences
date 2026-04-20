/**
 * cascadeAudio.ts
 *
 * Single continuous audio track for the entire Atacama cascade.
 * One HTMLAudioElement plays the merged MP3 from start to finish.
 * All cascade videos are muted — audio comes only from here.
 *
 * API:
 *   cascadeAudio.start()      — call inside a user-gesture handler (onStart callback)
 *   cascadeAudio.setMuted(b)  — toggle mute from the pill UI
 *   cascadeAudio.stop()       — stop and reset
 *   cascadeAudio.isMuted      — current mute state
 */

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";
const AUDIO_URL = `${CDN}/manus-storage/atacama_cascade_723eb845.mp3`;

class CascadeAudioManager {
  private el: HTMLAudioElement | null = null;
  private _muted = false;

  private getOrCreate(): HTMLAudioElement {
    if (!this.el) {
      this.el = new Audio(AUDIO_URL);
      this.el.preload = "auto";
      this.el.loop = false;
      this.el.muted = this._muted;
    }
    return this.el;
  }

  /** Call this inside a user-gesture handler so the browser allows playback. */
  start() {
    const audio = this.getOrCreate();
    audio.currentTime = 0;
    audio.muted = this._muted;
    audio.play().catch((err) => {
      console.warn("[cascadeAudio] play() failed:", err);
    });
  }

  /** Toggle mute state — called by the CinematicScroll mute pill. */
  setMuted(muted: boolean) {
    this._muted = muted;
    if (this.el) {
      this.el.muted = muted;
    }
  }

  /** Stop playback and reset position. */
  stop() {
    if (this.el) {
      this.el.pause();
      this.el.currentTime = 0;
    }
  }

  get isMuted(): boolean {
    return this._muted;
  }
}

export const cascadeAudio = new CascadeAudioManager();
