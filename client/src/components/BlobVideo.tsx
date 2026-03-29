/**
 * BlobVideo — fetches a video URL as a blob and creates an object URL
 * to bypass CDN MIME type issues (application/octet-stream instead of video/mp4).
 * The browser plays from the blob URL which has the correct type.
 */
import { useEffect, useRef, useState } from "react";

interface BlobVideoProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  poster?: string;
}

export default function BlobVideo({
  src,
  className = "",
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  poster,
}: BlobVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let objectUrl: string | null = null;

    async function fetchVideo() {
      try {
        const response = await fetch(src);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const blob = await response.blob();
        // Create a new blob with explicit video/mp4 type
        const videoBlob = new Blob([blob], { type: "video/mp4" });
        objectUrl = URL.createObjectURL(videoBlob);
        if (!cancelled) {
          setBlobUrl(objectUrl);
        }
      } catch (err) {
        console.error("BlobVideo fetch error:", err);
        if (!cancelled) {
          // Fallback: try using the src directly
          setBlobUrl(src);
          setError(true);
        }
      }
    }

    fetchVideo();

    return () => {
      cancelled = true;
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [src]);

  // Once blob URL is set and video element exists, try to play
  useEffect(() => {
    if (blobUrl && videoRef.current && autoPlay) {
      videoRef.current.play().catch(() => {
        // Autoplay blocked — that's fine, user can interact
      });
    }
  }, [blobUrl, autoPlay]);

  if (!blobUrl) {
    // Show nothing while loading (the gradient background behind will show)
    return null;
  }

  return (
    <video
      ref={videoRef}
      src={blobUrl}
      className={className}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      poster={poster}
    />
  );
}
