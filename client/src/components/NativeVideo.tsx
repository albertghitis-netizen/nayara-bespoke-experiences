/**
 * NativeVideo — Lightweight native <video> wrapper
 *
 * Sequential playback with per-video audio:
 * - Videos start paused (frozen on frame 0)
 * - Play when 30% visible in viewport via IntersectionObserver
 * - Pause and reset to 0:00 when scrolled out of view
 * - AUDIO handoff uses a SEPARATE observer at 80% threshold:
 *   Audio only activates when the video is mostly visible, ensuring
 *   the previous video is nearly or fully off screen before the new
 *   audio begins. This prevents premature handoff.
 * - Previous video's audio cuts off immediately via cascadeAudio manager
 * - Global mute state controlled by CinematicScroll's Sound pill
 *
 * For hasAudio videos, the muted attribute is NOT set via React JSX.
 * It is controlled imperatively by cascadeAudio to prevent React from
 * overriding the muted state on re-renders.
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

  /* ── IntersectionObserver #1: PLAY/PAUSE at 30% threshold ── */
  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const playObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Video is 30% visible — start playing (muted until audio observer fires)
            if (video.paused) {
              video.play().catch(() => {});
            }
          } else {
            // Video scrolled out — pause and reset to frame 0
            if (!video.paused) {
              video.pause();
            }
            video.currentTime = 0;
          }
        });
      },
      { threshold: 0.3 }
    );

    playObserver.observe(container);
    return () => playObserver.disconnect();
  }, [src]);

  /* ── IntersectionObserver #2: AUDIO ACTIVATION at 80% threshold ──
       Only for hasAudio videos. Audio activates when the video is mostly
       visible, ensuring the previous video is nearly/fully off screen. */
  useEffect(() => {
    if (!hasAudio) return;
    const container = containerRef.current;
    if (!container) return;

    const audioObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Video is 80% visible — take over audio
            cascadeAudio.activate(uniqueId);
          }
          // NOTE: No deactivate on exit. Audio handoff is handled by
          // activate() on the NEXT video. The current video is already
          // paused by the play observer, so no audio leaks.
        });
      },
      { threshold: 0.8 }
    );

    audioObserver.observe(container);
    return () => audioObserver.disconnect();
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
    <div ref={containerRef} className="relative w-full h-full block leading-[0]" onClick={handleTapToPlay}>
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
