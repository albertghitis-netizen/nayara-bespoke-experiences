/**
 * NativeVideo — Lightweight native <video> wrapper
 * No blob fetching, no DRM protection. Fast streaming.
 * Optional mute/unmute pill for videos with audio.
 */
import { useRef, useState, useEffect, useCallback } from "react";

interface NativeVideoProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  poster?: string;
  controls?: boolean;
  /** Set true to show the mute/unmute pill on this video */
  hasAudio?: boolean;
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
}: NativeVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showPulse, setShowPulse] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    setIsLoaded(false);
    setHasError(false);
    setIsMuted(true);
    video.load();

    const tryPlay = () => {
      if (autoPlay && video.paused) {
        video.play().catch(() => {});
      }
    };
    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);
    return () => {
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
    };
  }, [src, autoPlay]);

  // Stop the attention pulse after 6 seconds
  useEffect(() => {
    if (!hasAudio) return;
    const timer = setTimeout(() => setShowPulse(false), 6000);
    return () => clearTimeout(timer);
  }, [hasAudio, src]);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    const next = !isMuted;
    video.muted = next;
    setIsMuted(next);
    if (!next && video.paused) {
      video.play().catch(() => {});
    }
  }, [isMuted]);

  const getVideoType = (url: string): string => {
    const lower = url.toLowerCase();
    if (lower.includes(".mov")) return "video/quicktime";
    if (lower.includes(".webm")) return "video/webm";
    return "video/mp4";
  };

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        className={`${className} ${isLoaded ? "" : "opacity-0"} transition-opacity duration-700`}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
        poster={poster}
        preload="metadata"
        controls={controls}
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
        <div className={`${className} absolute inset-0 bg-gradient-to-br from-stone-800 via-stone-700 to-stone-900 animate-pulse`} />
      )}

      {/* Error fallback */}
      {hasError && (
        <div className={`${className} absolute inset-0 bg-gradient-to-br from-stone-800 via-stone-700 to-stone-900`} />
      )}

      {/* Mute / Unmute pill — bottom-left, luxury aesthetic */}
      {hasAudio && isLoaded && (
        <button
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          className="absolute bottom-6 left-6 z-30 hidden md:flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#3a2a1a]/70 backdrop-blur-md border border-white/10 hover:bg-[#3a2a1a]/90 transition-all duration-300 group cursor-pointer"
        >
          {/* Pulse ring — draws attention, then fades */}
          {isMuted && showPulse && (
            <span className="absolute inset-0 rounded-full border border-white/30 animate-ping" />
          )}

          {/* Speaker icon */}
          {isMuted ? (
            <svg
              className="w-4 h-4 text-white/80 group-hover:text-white transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-3.72a.75.75 0 011.28.53v14.88a.75.75 0 01-1.28.53L6.75 14.25H3.75a.75.75 0 01-.75-.75v-3a.75.75 0 01.75-.75h3z"
              />
            </svg>
          ) : (
            <svg
              className="w-4 h-4 text-white/80 group-hover:text-white transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-3.72a.75.75 0 011.28.53v14.88a.75.75 0 01-1.28.53L6.75 15.75H3.75a.75.75 0 01-.75-.75v-6a.75.75 0 01.75-.75h3z"
              />
            </svg>
          )}

          {/* Label */}
          <span
            className="text-white/70 group-hover:text-white text-[10px] tracking-[0.2em] transition-colors"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            {isMuted ? "Sound" : "Mute"}
          </span>
        </button>
      )}
    </div>
  );
}
