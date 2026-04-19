/**
 * NativeVideo — Lightweight native <video> wrapper
 *
 * Sequential playback with per-video audio:
 * - Videos start paused (frozen on frame 0)
 * - Play only when 30% visible in viewport via IntersectionObserver
 * - Pause and reset to 0:00 when scrolled out of view
 * - When a video enters viewport, it registers as the active audio source
 * - Previous video's audio cuts off immediately via cascadeAudio manager
 * - Global mute state controlled by CinematicScroll's Sound pill
 *
 * AUDIO FIX: For hasAudio videos, the muted attribute is NOT set via React JSX.
 * Registration and loading are combined into a single effect to prevent race
 * conditions between registration (which sets muted=true) and autoStart
 * (which needs muted=false).
 */
import { useRef, useState, useEffect, useCallback, useId } from "react";
import { cascadeAudio } from "@/lib/cascadeAudio";

interface NativeVideoProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  poster?: string;
  controls?: boolean;
  /** Set true if this video has meaningful audio that should play in the cascade */
  hasAudio?: boolean;
  /** Set true to also show the audio pill on mobile (default: desktop only) */
  mobileAudio?: boolean;
  /** Set true to play immediately on mount with audio (for the hero video after CTA click) */
  autoStart?: boolean;
}

export default function NativeVideo({
  src,
  className = "",
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  poster,
  controls = false,
  hasAudio = false,
  mobileAudio = false,
  autoStart = false,
}: NativeVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const uniqueId = useId();

  /**
   * COMBINED EFFECT: Register + Load + AutoStart
   * This single effect handles everything in the correct order to prevent
   * race conditions between registration and autoStart.
   */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    setIsLoaded(false);
    setHasError(false);

    // Step 1: Register with cascadeAudio (if hasAudio)
    if (hasAudio) {
      cascadeAudio.register(uniqueId, video);
    }

    // Step 2: Load the video
    video.autoplay = false;
    video.muted = true; // Always start muted
    video.load();

    // Step 3: On loaded, either autoStart or freeze at frame 0
    const onLoaded = () => {
      setIsLoaded(true);

      if (autoStart && hasAudio) {
        // Hero video: play immediately with audio
        cascadeAudio.activate(uniqueId);
        // Explicitly ensure unmuted
        video.muted = cascadeAudio.isMuted();
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    };

    video.addEventListener("loadeddata", onLoaded);

    // Step 4: Subscribe to mute state changes (for hasAudio videos)
    let unsub: (() => void) | undefined;
    if (hasAudio) {
      unsub = cascadeAudio.subscribe((globalMuted) => {
        if (cascadeAudio.getActiveId() === uniqueId) {
          video.muted = globalMuted;
        }
      });
    }

    return () => {
      video.removeEventListener("loadeddata", onLoaded);
      if (hasAudio) {
        unsub?.();
        cascadeAudio.unregister(uniqueId);
      }
    };
  }, [src, hasAudio, autoStart, uniqueId]);

  /* ── IntersectionObserver: play when 30% visible, pause+reset when out ── */
  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Video is 30% visible — start playing
            if (video.paused) {
              video.play().catch(() => {});
            }
            // If this video has audio, tell the manager it's now active
            if (hasAudio) {
              cascadeAudio.activate(uniqueId);
              // activate() sets video.muted imperatively
            }
          } else {
            // Video scrolled out — pause and reset to frame 0
            if (!video.paused) {
              video.pause();
            }
            video.currentTime = 0;
            // NOTE: We do NOT call cascadeAudio.deactivate() here.
            // Audio handoff is handled by activate() on the NEXT video.
            // Calling deactivate() here causes a race condition where the
            // hero video gets muted before the next video activates.
            // The video is already paused, so no audio will play from it.
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [src, hasAudio, uniqueId]);

  const getVideoType = (url: string): string => {
    const lower = url.toLowerCase();
    if (lower.includes(".mov")) return "video/quicktime";
    if (lower.includes(".webm")) return "video/webm";
    return "video/mp4";
  };

  /* Tap-to-play fallback for mobile browsers that block autoplay */
  const handleTapToPlay = useCallback(() => {
    const video = videoRef.current;
    if (!video || !video.paused) return;
    video.play().catch(() => {});
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full" onClick={handleTapToPlay}>
      {hasAudio ? (
        /* For hasAudio videos: DO NOT set muted in JSX — controlled imperatively */
        <video
          ref={videoRef}
          className={`${className} ${isLoaded ? "" : "opacity-0"} transition-opacity duration-700`}
          autoPlay={false}
          loop={loop}
          playsInline={playsInline}
          poster={poster}
          preload="auto"
          controls={controls}
          webkit-playsinline="true"
          x-webkit-airplay="allow"
          onLoadedData={() => setIsLoaded(true)}
          onError={() => {
            console.error("Video load error:", src);
            setHasError(true);
          }}
        >
          <source src={src} type={getVideoType(src)} />
          {getVideoType(src) !== "video/mp4" && (
            <source src={src} type="video/mp4" />
          )}
        </video>
      ) : (
        /* For non-audio videos: always muted */
        <video
          ref={videoRef}
          className={`${className} ${isLoaded ? "" : "opacity-0"} transition-opacity duration-700`}
          autoPlay={false}
          muted={true}
          loop={loop}
          playsInline={playsInline}
          poster={poster}
          preload="auto"
          controls={controls}
          webkit-playsinline="true"
          x-webkit-airplay="allow"
          onLoadedData={() => setIsLoaded(true)}
          onError={() => {
            console.error("Video load error:", src);
            setHasError(true);
          }}
        >
          <source src={src} type={getVideoType(src)} />
          {getVideoType(src) !== "video/mp4" && (
            <source src={src} type="video/mp4" />
          )}
        </video>
      )}

      {/* Loading placeholder */}
      {!isLoaded && !hasError && (
        <div className={`${className} absolute inset-0 bg-gradient-to-br from-stone-300 via-stone-200 to-stone-400 animate-pulse`} />
      )}

      {/* Error fallback */}
      {hasError && (
        <div className={`${className} absolute inset-0 bg-gradient-to-br from-stone-300 via-stone-200 to-stone-400`} />
      )}
    </div>
  );
}
