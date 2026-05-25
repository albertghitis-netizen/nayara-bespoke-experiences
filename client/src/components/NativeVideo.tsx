/**
 * NativeVideo — Lightweight native <video> wrapper
 *
 * KEY MOBILE OPTIMIZATION:
 * The <source> tag is NOT rendered until the IntersectionObserver confirms
 * the element is both visible (not display:none) AND near the viewport.
 * This prevents ALL hidden desktop videos from downloading on mobile.
 *
 * Sequential playback rules:
 * 1. On mount: video has NO source — nothing downloads
 * 2. When IntersectionObserver fires AND element is visible: source is injected, video.load() starts
 * 3. START playing: when top edge reaches -80px above viewport top
 * 4. FREEZE on last frame: no loop, no reset
 * 5. PAUSE when off screen
 *
 * Audio: All cascade videos are ALWAYS muted. Audio comes from cascadeAudio's single
 * HTMLAudioElement playing the merged MP3 track.
 */
import { useRef, useState, useEffect, useCallback, forwardRef, useImperativeHandle } from "react";
import { useIsMobile } from "@/hooks/useMobile";

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
  /** When true, don't render video at all on mobile (prevents download) */
  desktopOnly?: boolean;
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
    desktopOnly = false,
  },
  ref
) {
  const isMobile = useIsMobile();
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [shouldLoadSource, setShouldLoadSource] = useState(false);

  // Don't render video at all on mobile if desktopOnly
  const skipVideo = desktopOnly && isMobile;

  useImperativeHandle(ref, () => ({
    getVideoElement: () => videoRef.current,
  }));

  /**
   * INTERSECTION OBSERVER: Only inject <source> when:
   * 1. Element is within 600px of viewport
   * 2. Element is actually visible (not display:none from CSS hiding like hidden md:block)
   *
   * This is the ONLY gate for video downloads. No source = no download.
   */
  useEffect(() => {
    if (skipVideo) return;
    const container = containerRef.current;
    if (!container) return;

    // Check if element or any ancestor is display:none (e.g. hidden md:block on mobile)
    // offsetParent is null for display:none elements (except position:fixed)
    if (container.offsetParent === null && getComputedStyle(container).position !== 'fixed') {
      // Element is hidden — never load the video
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setShouldLoadSource(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Double-check visibility at intersection time (handles dynamic show/hide)
          if (container.offsetParent !== null || getComputedStyle(container).position === 'fixed') {
            setShouldLoadSource(true);
          }
          observer.disconnect();
        }
      },
      { rootMargin: "600px", threshold: 0 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [skipVideo]);

  /**
   * LOAD EFFECT: Once source is injected into DOM, call video.load()
   */
  useEffect(() => {
    if (!shouldLoadSource) return;
    const video = videoRef.current;
    if (!video) return;

    setIsLoaded(false);
    setHasError(false);

    video.autoplay = false;
    video.muted = true;
    video.preload = "auto";
    video.load();

    const onLoaded = () => setIsLoaded(true);
    video.addEventListener("loadeddata", onLoaded);
    return () => video.removeEventListener("loadeddata", onLoaded);
  }, [src, shouldLoadSource]);

  /* ── TIME UPDATE CALLBACK ── */
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !onTimeUpdate) return;

    const handleTimeUpdate = () => {
      onTimeUpdate(video.currentTime, video.duration || 0);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, [src, onTimeUpdate]);

  /* ── SCROLL-BASED PLAY/PAUSE ── */
  useEffect(() => {
    if (!shouldLoadSource) return;
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    let isPlaying = false;
    let rafId: number | null = null;

    const checkPosition = () => {
      const rect = container.getBoundingClientRect();
      const vh = window.innerHeight;

      const isOffScreen = rect.bottom <= 0 || rect.top >= vh;
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
    checkPosition();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [src, shouldLoadSource]);

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

  if (skipVideo) {
    return <div className={`${className} relative w-full h-full`} />;
  }

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
        preload="none"
        controls={controls}
        webkit-playsinline="true"
        x-webkit-airplay="allow"
        onLoadedData={() => setIsLoaded(true)}
        onError={() => {
          console.error("Video load error:", src);
          setHasError(true);
        }}
      >
        {/* SOURCE ONLY INJECTED WHEN VISIBLE + NEAR VIEWPORT */}
        {shouldLoadSource && (
          <>
            <source src={src} type={getVideoType(src)} />
            {getVideoType(src) !== "video/mp4" && (
              <source src={src} type="video/mp4" />
            )}
          </>
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
