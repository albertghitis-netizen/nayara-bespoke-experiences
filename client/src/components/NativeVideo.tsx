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
}: NativeVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const uniqueId = useId();

  /* ── Register with cascadeAudio manager ── */
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !hasAudio) return;

    cascadeAudio.register(uniqueId, video);
    return () => {
      cascadeAudio.unregister(uniqueId);
    };
  }, [uniqueId, hasAudio, src]);

  /* ── Load video but keep it paused initially ── */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    setIsLoaded(false);
    setHasError(false);

    video.autoplay = false;
    video.load();

    const onLoaded = () => {
      setIsLoaded(true);
      video.pause();
      video.currentTime = 0;
    };

    video.addEventListener("loadeddata", onLoaded);
    return () => {
      video.removeEventListener("loadeddata", onLoaded);
    };
  }, [src]);

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
            }
          } else {
            // Video scrolled out — pause and reset to frame 0
            if (!video.paused) {
              video.pause();
            }
            video.currentTime = 0;
            // Deactivate audio for this video
            if (hasAudio) {
              cascadeAudio.deactivate(uniqueId);
            }
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
      <video
        ref={videoRef}
        className={`${className} ${isLoaded ? "" : "opacity-0"} transition-opacity duration-700`}
        autoPlay={false}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
        poster={poster}
        preload="auto"
        controls={controls}
        // Critical mobile attributes
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
}
