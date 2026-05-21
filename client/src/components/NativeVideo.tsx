/**
 * NativeVideo , Lightweight native <video> wrapper
 *
 * Sequential playback rules:
 * 1. On mount: preload="auto" + video.load() , buffers silently, stays paused at frame 0
 * 2. START playing: when the previous video is almost gone , this video's top edge
 *    reaches -80px above the viewport top (a sliver of previous still showing)
 * 3. FREEZE on last frame: no loop, no reset , video.ended leaves it on last frame
 * 4. PAUSE when off screen: when fully above (rect.bottom <= 0) or fully below (rect.top >= vh)
 *
 * Audio: All cascade videos are ALWAYS muted. Audio comes from cascadeAudio's single
 * HTMLAudioElement playing the merged MP3 track. The hasAudio prop has been removed.
 */
import { useRef, useState, useEffect, useCallback, forwardRef, useImperativeHandle } from "react";

interface NativeVideoProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  poster?: string;
  controls?: boolean;
  onTimeUpdate?: (currentTime: number, duration: number) => void;
}

export interface NativeVideoHandle {
  getVideoElement: () => HTMLVideoElement | null;
}

const NativeVideo = forwardRef<NativeVideoHandle, NativeVideoProps>(function NativeVideo(
  {
    src,
    className = "",
    loop = false,
    playsInline = true,
    poster,
    controls = false,
    onTimeUpdate,
  },
  ref
) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useImperativeHandle(ref, () => ({
    getVideoElement: () => videoRef.current,
  }));

  const [isNearViewport, setIsNearViewport] = useState(false);

  /**
   * INTERSECTION OBSERVER: Only start buffering when within 600px of viewport.
   * This prevents all videos on the page from downloading simultaneously.
   */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (!("IntersectionObserver" in window)) {
      setIsNearViewport(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px", threshold: 0 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  /**
   * MOUNT EFFECT: Start buffering only when near viewport
   * Does NOT play , just loads data into the buffer
   */
  useEffect(() => {
    if (!isNearViewport) return;
    const video = videoRef.current;
    if (!video) return;

    setIsLoaded(false);
    setHasError(false);

    video.autoplay = false;
    video.muted = true; // Always muted , audio from cascadeAudio
    video.preload = "auto";
    video.load(); // Start buffering , does NOT play

    const onLoaded = () => {
      setIsLoaded(true);
    };

    video.addEventListener("loadeddata", onLoaded);

    return () => {
      video.removeEventListener("loadeddata", onLoaded);
    };
  }, [src, isNearViewport]);

  /* ── TIME UPDATE CALLBACK ── */
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !onTimeUpdate) return;

    const handleTimeUpdate = () => {
      onTimeUpdate(video.currentTime, video.duration || 0);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [src, onTimeUpdate]);

  /* ── SCROLL-BASED PLAY/PAUSE ──
     START: when this video's top edge is within 80px above the viewport top.
            This means the previous video has almost completely scrolled off ,
            just a sliver remains , giving a seamless handoff.
     STOP:  when fully off screen (above or below viewport).
     FREEZE: video.ended , no loop, no reset, stays on last frame. */
  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    let isPlaying = false;
    let rafId: number | null = null;

    const checkPosition = () => {
      const rect = container.getBoundingClientRect();
      const vh = window.innerHeight;

      // Fully off screen , pause (but don't reset)
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
  }, [src]);

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
      <video
        ref={videoRef}
        className={`${className}`}
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
});

export default NativeVideo;
