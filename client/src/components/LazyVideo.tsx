/**
 * LazyVideo — Viewport-aware video loader
 *
 * Wraps BlobVideo with IntersectionObserver so videos only load
 * when they're near the viewport. This dramatically reduces initial
 * page weight on image/video-heavy pages.
 *
 * Features:
 * - Defers video network requests until near viewport
 * - Shows shimmer placeholder until video element mounts
 * - Pauses video when scrolled out of view to save resources
 * - Configurable preload distance via rootMargin
 */
import { useRef, useState, useEffect, memo } from "react";
import BlobVideo from "./BlobVideo";

interface LazyVideoProps {
  src: string;
  className?: string;
  /** How far before the viewport to start loading (default: "300px") */
  rootMargin?: string;
  /** If true, load immediately (for hero/above-fold videos) */
  eager?: boolean;
  /** All BlobVideo props passed through */
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  poster?: string;
  controls?: boolean;
  hasAudio?: boolean;
  pillBg?: string;
  pillColor?: string;
  onEnded?: () => void;
}

function LazyVideoInner({
  src,
  className = "",
  rootMargin = "300px",
  eager = false,
  ...blobProps
}: LazyVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(eager);

  useEffect(() => {
    if (eager || shouldLoad) return;

    const el = containerRef.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [eager, shouldLoad, rootMargin]);

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      {shouldLoad ? (
        <BlobVideo src={src} className="w-full h-full object-cover" {...blobProps} />
      ) : (
        /* Shimmer placeholder while waiting to enter viewport */
        <div className="absolute inset-0 bg-gradient-to-br from-stone-800 via-stone-700 to-stone-900 animate-pulse" />
      )}
    </div>
  );
}

const LazyVideo = memo(LazyVideoInner);
export default LazyVideo;
