/**
 * BlobVideo — Reliable cross-platform video component
 * 
 * Previous approach: fetched video as blob to work around CDN MIME type issues.
 * Problem: blob fetching fails silently on many mobile browsers (Safari, Chrome iOS)
 * because of memory limits, CORS issues, and autoplay restrictions.
 * 
 * New approach: Use direct <video> tag with proper mobile attributes.
 * The CDN now serves correct MIME types, so blob workaround is unnecessary.
 * Added: loading state, error fallback, and mobile-specific attributes.
 */
import { useRef, useState, useEffect } from "react";

interface BlobVideoProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  poster?: string;
  controls?: boolean;
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
}: BlobVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Reset state when src changes
    setIsLoaded(false);
    setHasError(false);

    // Force load on mobile
    video.load();

    // Try to play (mobile browsers may block autoplay)
    const tryPlay = () => {
      if (autoPlay && video.paused) {
        video.play().catch(() => {
          // Autoplay blocked — that's fine on mobile
          // The video will still show the first frame
        });
      }
    };

    video.addEventListener("loadeddata", tryPlay);
    // Also try on canplay for broader compatibility
    video.addEventListener("canplay", tryPlay);

    return () => {
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
    };
  }, [src, autoPlay]);

  // Determine video type from URL
  const getVideoType = (url: string): string => {
    if (url.includes(".mov")) return "video/quicktime";
    if (url.includes(".webm")) return "video/webm";
    return "video/mp4";
  };

  return (
    <>
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
        {/* Fallback: try as mp4 if the primary type fails */}
        {getVideoType(src) !== "video/mp4" && (
          <source src={src} type="video/mp4" />
        )}
      </video>
      {/* Loading placeholder — gradient shimmer while video loads */}
      {!isLoaded && !hasError && (
        <div className={`${className} absolute inset-0 bg-gradient-to-br from-stone-800 via-stone-700 to-stone-900 animate-pulse`} />
      )}
      {/* Error fallback — show gradient background */}
      {hasError && (
        <div className={`${className} absolute inset-0 bg-gradient-to-br from-stone-800 via-stone-700 to-stone-900`} />
      )}
    </>
  );
}
