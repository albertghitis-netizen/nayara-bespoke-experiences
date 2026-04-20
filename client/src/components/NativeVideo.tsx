/**
 * NativeVideo — Lightweight native <video> wrapper
 *
 * Sequential playback with per-video audio:
 * - Videos start paused (frozen on frame 0)
 * - Play when the video's TOP EDGE reaches the top of the viewport
 *   (meaning the previous content has fully scrolled off screen)
 * - Pause and reset to 0:00 only when FULLY scrolled out of view
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
   */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    setIsLoaded(false);
    setHasError(false);

    if (hasAudio) {
      cascadeAudio.register(uniqueId, video);
    }

    video.autoplay = false;
    video.muted = true;
    video.load();

    const onLoaded = () => {
      setIsLoaded(true);

      if (autoStart && hasAudio) {
        cascadeAudio.activate(uniqueId);
        video.muted = cascadeAudio.isMuted();
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    };

    video.addEventListener("loadeddata", onLoaded);

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

  /* ── SCROLL-BASED PLAY/PAUSE ──
     Instead of IntersectionObserver thresholds (which fire based on % of element
     visible and cause premature starts), we use a scroll listener that checks
     the video container's position relative to the viewport:
     
     START: when the container's top edge is at or above the top 25% of the viewport
            (meaning the previous content has scrolled mostly off screen)
     STOP:  when the container is completely off screen (above or below viewport)
     
     This gives precise control over when each video starts relative to the scroll. */
  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container || autoStart) return;

    let isPlaying = false;
    let rafId: number | null = null;

    const checkPosition = () => {
      const rect = container.getBoundingClientRect();
      const vh = window.innerHeight;

      // Is ANY part of the container visible?
      const isVisible = rect.bottom > 0 && rect.top < vh;

      // Start playing when the container's top edge enters the top 40% of the viewport.
      // This gives a head-start so the video is already playing when it fills the screen.
      const shouldPlay = rect.top <= vh * 0.4 && rect.bottom > 0;

      if (shouldPlay && !isPlaying) {
        isPlaying = true;
        if (video.paused) {
          video.play().catch(() => {});
        }
      } else if (!isVisible && isPlaying) {
        // Fully off screen — pause and reset
        isPlaying = false;
        if (!video.paused) {
          video.pause();
        }
        video.currentTime = 0;
      }
    };

    // Use passive scroll listener for performance
    const onScroll = () => {
      if (rafId !== null) return; // Throttle to one check per frame
      rafId = requestAnimationFrame(() => {
        rafId = null;
        checkPosition();
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Also check immediately in case the video is already in position
    checkPosition();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [src, autoStart]);

  /* ── AUDIO ACTIVATION at 80% threshold ──
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
            cascadeAudio.activate(uniqueId);
          }
        });
      },
      { threshold: 0.5 }
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
