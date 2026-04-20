/**
 * NativeVideo — Lightweight native <video> wrapper
 *
 * Sequential playback rules:
 * 1. On mount: preload="auto" + video.load() — buffers silently, stays paused at frame 0
 * 2. START playing: when the previous video is almost gone — this video's top edge
 *    reaches -80px above the viewport top (a sliver of previous still showing)
 * 3. FREEZE on last frame: no loop, no reset — video.ended leaves it on last frame
 * 4. PAUSE when off screen: when fully above (rect.bottom <= 0) or fully below (rect.top >= vh)
 * 5. AUDIO handoff: when this video reaches 50% visibility
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
  loop = false,
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
   * MOUNT EFFECT: Register with cascadeAudio + start buffering
   * Does NOT play — just loads data into the buffer
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
    video.preload = "auto";
    video.load(); // Start buffering immediately — does NOT play

    const onLoaded = () => {
      setIsLoaded(true);

      if (autoStart && hasAudio) {
        // Hero video: activate audio and play immediately
        cascadeAudio.activate(uniqueId);
        video.muted = cascadeAudio.isMuted();
        video.play().catch(() => {});
      }
      // Non-autoStart videos: stay paused at frame 0, waiting for scroll trigger
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
     START: when this video's top edge is within 80px above the viewport top.
            This means the previous video has almost completely scrolled off —
            just a sliver remains — giving a seamless handoff.
     STOP:  when fully off screen (above or below viewport).
     FREEZE: video.ended — no loop, no reset, stays on last frame. */
  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container || autoStart) return;

    let isPlaying = false;
    let rafId: number | null = null;

    const checkPosition = () => {
      const rect = container.getBoundingClientRect();
      const vh = window.innerHeight;

      // Fully off screen — pause (but don't reset)
      const isOffScreen = rect.bottom <= 0 || rect.top >= vh;

      // Start when top edge is 80px above viewport top (sliver of previous still showing)
      const shouldStart = rect.top <= 80 && rect.bottom > 0;

      if (shouldStart && !isPlaying && !video.ended) {
        isPlaying = true;
        if (video.paused) {
          video.play().catch(() => {});
        }
      } else if (isOffScreen && isPlaying) {
        isPlaying = false;
        if (!video.paused) {
          video.pause();
        }
      }
    };

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        checkPosition();
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    checkPosition(); // Check immediately on mount

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [src, autoStart]);

  /* ── AUDIO ACTIVATION at 50% threshold ──
     Audio hands off when this video is half visible — previous is mostly gone. */
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
