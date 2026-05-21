/**
 * LazyImage — Performance-optimized image component
 *
 * Features:
 * - IntersectionObserver-based lazy loading (loads when near viewport)
 * - Smooth fade-in transition on load
 * - Shimmer placeholder while loading
 * - Native loading="lazy" as fallback for browsers without IO support
 * - Configurable root margin for preloading distance
 */
import { useRef, useState, useEffect, memo } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  /** How far before the viewport to start loading (default: "200px") */
  rootMargin?: string;
  /** If true, load immediately without waiting for intersection (for above-fold images) */
  eager?: boolean;
  /** Optional inline styles */
  style?: React.CSSProperties;
  /** Optional onClick handler */
  onClick?: () => void;
}

function LazyImageInner({
  src,
  alt,
  className = "",
  rootMargin = "200px",
  eager = false,
  style,
  onClick,
}: LazyImageProps) {
  const imgRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(eager);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (eager || isInView) return;

    const el = imgRef.current;
    if (!el) return;

    // Check if IntersectionObserver is supported
    if (!("IntersectionObserver" in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [eager, isInView, rootMargin]);

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`} style={style} onClick={onClick}>
      {/* Shimmer placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-stone-200 via-stone-100 to-stone-200 animate-pulse" />
      )}

      {/* Actual image — only rendered when in view */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}

const LazyImage = memo(LazyImageInner);
export default LazyImage;
