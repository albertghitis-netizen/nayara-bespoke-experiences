/**
 * BlobVideo — Reliable cross-platform video component
 *
 * Features:
 * - Direct <video> tag with mobile-optimized attributes
 * - Loading shimmer + error fallback
 * - Optional mute/unmute pill button for videos with audio
 *   (videos autoplay muted; user taps once to hear sound)
 * - Sound pill is FIXED positioned to align with BrandNavigation
 *   (same row as hamburger + reserve: fixed top-2, next to hamburger)
 */
import { useRef, useState, useEffect, useCallback } from "react";

interface BlobVideoProps {
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
  /** Background color for the sound pill (matches page nav pill color). Defaults to espresso. */
  pillBg?: string;
  /** Text/icon color for the sound pill. Defaults to bone. */
  pillColor?: string;
  /** Callback when video playback ends (only fires if loop=false) */
  onEnded?: () => void;
}

export default function BlobVideo({
  src,
  className = "",
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  poster,
  controls = false,
  hasAudio = false,
  pillBg,
  pillColor,
  onEnded,
}: BlobVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showPulse, setShowPulse] = useState(true);

  // Enable audio on all devices (mobile + desktop)
  const effectiveHasAudio = hasAudio;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Reset state when src changes
    setIsLoaded(false);
    setHasError(false);
    setIsMuted(true);

    // Force load on mobile
    video.load();

    // Try to play (mobile browsers may block autoplay)
    const tryPlay = () => {
      if (autoPlay && video.paused) {
        video.play().catch(() => {
          // Autoplay blocked — that's fine on mobile
        });
      }
    };

    // Try play on multiple events for maximum compatibility
    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);
    video.addEventListener("playing", tryPlay);

    // Also try after a short delay
    const timer = setTimeout(tryPlay, 100);

    return () => {
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
      video.removeEventListener("playing", tryPlay);
      clearTimeout(timer);
    };
  }, [src, autoPlay]);

  // Stop the attention pulse after 6 seconds
  useEffect(() => {
    if (!effectiveHasAudio) return;
    const timer = setTimeout(() => setShowPulse(false), 6000);
    return () => clearTimeout(timer);
  }, [effectiveHasAudio, src]);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    const next = !isMuted;
    video.muted = next;
    setIsMuted(next);
    // If unmuting and paused, try to play
    if (!next && video.paused) {
      video.play().catch(() => {});
    }
  }, [isMuted]);

  // Determine video type from URL
  const getVideoType = (url: string): string => {
    if (url.includes(".mov")) return "video/quicktime";
    if (url.includes(".webm")) return "video/webm";
    return "video/mp4";
  };

  /* Pill styling — use provided colors or fall back to brand espresso */
  const bgStyle = pillBg || "rgba(59,43,38,0.8)";
  const fgStyle = pillColor || "#F7F5F0";

  /*
   * Nav alignment reference (from BrandNavigation):
   * nav: fixed top-2 left-0 right-0 z-50 px-3
   * hamburger: w-9 h-9 (36px)
   * So Sound pill sits at: fixed top-2, left = px-3 + w-9 + gap
   * = 12px + 36px + 8px = 56px from left
   * On mobile: same calculation applies
   */

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
        controls={false}
        onLoadedData={() => setIsLoaded(true)}
        onError={() => {
          console.error("Video load error:", src);
          setHasError(true);
        }}
        onEnded={onEnded}
      >
        <source src={src} type={getVideoType(src)} />
        {getVideoType(src) !== "video/mp4" && (
          <source src={src} type="video/mp4" />
        )}
      </video>

      {/* Loading placeholder */}
      {!isLoaded && !hasError && (
        <div
          className={`${className} absolute inset-0 bg-gradient-to-br from-stone-800 via-stone-700 to-stone-900 animate-pulse`}
        />
      )}

      {/* Error fallback */}
      {hasError && (
        <div
          className={`${className} absolute inset-0 bg-gradient-to-br from-stone-800 via-stone-700 to-stone-900`}
        />
      )}

      {/* Mute / Unmute pill — FIXED, aligned with BrandNavigation hamburger */}
      {effectiveHasAudio && (
        <button
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          className="fixed z-50 hidden md:flex lg:flex items-center justify-center rounded-full backdrop-blur-md shadow-sm border cursor-pointer hover:opacity-90 transition-all duration-300 h-9 px-4"
          style={{
            top: "10px",      /* aligned with nav hamburger center */
            left: "56px",     /* px-3 (12px) + w-9 (36px) + 8px gap = 56px */
            backgroundColor: bgStyle,
            borderColor: "rgba(255,255,255,0.1)",
          }}
        >
          {/* Pulse ring — draws attention, then fades */}
          {isMuted && showPulse && (
            <span className="absolute inset-0 rounded-full border animate-ping" style={{ borderColor: `${fgStyle}30` }} />
          )}

          {/* Speaker icon */}
          {isMuted ? (
            <svg
              className="w-3.5 h-3.5 mr-1.5 transition-colors"
              style={{ color: fgStyle }}
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
              className="w-3.5 h-3.5 mr-1.5 transition-colors"
              style={{ color: fgStyle }}
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

          {/* Label — matches Reserve button text style */}
          <span
            className="text-xs tracking-[0.08em] transition-colors"
            style={{ color: fgStyle, fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            {isMuted ? "Sound" : "Mute"}
          </span>
        </button>
      )}
    </div>
  );
}
