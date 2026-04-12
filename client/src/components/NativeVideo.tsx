/**
 * NativeVideo — Lightweight native <video> wrapper
 * No blob fetching, no DRM protection. Fast streaming.
 * Optional mute/unmute pill for videos with audio.
 */
import { useRef, useState, useEffect, useCallback } from "react";
import { useLocation } from "wouter";
import { getPalette } from "@/data/propertyPalettes";

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
  /* Property color auto-detect for sound pill */
  const [loc] = useLocation();
  const slug = loc.split("/")[1] || "";
  const propPalette = ["tented-camp", "gardens", "springs", "alto-atacama", "bocas-del-toro", "hangaroa"].includes(slug)
    ? getPalette(slug) : null;
  const pillBgBase = propPalette ? propPalette.navPillBg : null;
  const pillBg = pillBgBase ? `${pillBgBase}B3` : "rgba(242,235,227,0.75)";
  const pillHover = pillBgBase ? `${pillBgBase}E6` : "rgba(242,235,227,0.92)";
  const pillTextColor = propPalette ? "#fff" : "#3a2a1a";
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

  /* Tap-to-play fallback for mobile browsers that block autoplay */
  const handleTapToPlay = useCallback(() => {
    const video = videoRef.current;
    if (!video || !video.paused) return;
    video.play().catch(() => {});
  }, []);

  return (
    <div className="relative w-full h-full" onClick={handleTapToPlay}>
      <video
        ref={videoRef}
        className={`${className} ${isLoaded ? "" : "opacity-0"} transition-opacity duration-700`}
        autoPlay={autoPlay}
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
        <div className={`${className} absolute inset-0 bg-gradient-to-br from-stone-800 via-stone-700 to-stone-900 animate-pulse`} />
      )}

      {/* Error fallback */}
      {hasError && (
        <div className={`${className} absolute inset-0 bg-gradient-to-br from-stone-800 via-stone-700 to-stone-900`} />
      )}

      {/* Mute / Unmute pill — top-left, aligned right of hamburger */}
      {hasAudio && isLoaded && (
        <button
          onClick={(e) => { e.stopPropagation(); toggleMute(); }}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          className={`fixed top-[11px] left-14 z-[60] ${mobileAudio ? 'flex' : 'hidden md:flex'} items-center gap-2 h-9 px-3.5 rounded-full backdrop-blur-md border border-white/10 transition-all duration-300 group cursor-pointer`}
          style={{ backgroundColor: pillBg }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = pillHover)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = pillBg)}
        >
          {/* Pulse ring — draws attention, then fades */}
          {isMuted && showPulse && (
            <span className="absolute inset-0 rounded-full border border-white/30 animate-ping" />
          )}

          {/* Speaker icon */}
          {isMuted ? (
            <svg
              className="w-3.5 h-3.5 transition-colors" style={{ color: pillTextColor }}
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
              className="w-3.5 h-3.5 transition-colors" style={{ color: pillTextColor }}
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
            className="text-[10px] tracking-[0.2em] transition-colors"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: pillTextColor }}
          >
            {isMuted ? "Sound" : "Mute"}
          </span>
        </button>
      )}
    </div>
  );
}
