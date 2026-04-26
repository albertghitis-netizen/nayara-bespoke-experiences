/**
 * CanvasVideo — Renders video frames onto a <canvas> element.
 * This completely eliminates native browser play buttons because
 * the <video> element is hidden and only the <canvas> is visible.
 * Works on all mobile browsers (iOS Safari, Chrome, Firefox).
 *
 * Accepts an optional `poster` prop — a static image shown instantly
 * while the video downloads and starts playing, eliminating the blank flash.
 */
import { useRef, useEffect, useState } from "react";

interface CanvasVideoProps {
  src: string;
  poster?: string;
  className?: string;
  loop?: boolean;
}

export default function CanvasVideo({ src, poster, className = "", loop = true }: CanvasVideoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const rafRef = useRef<number>(0);
  const [isReady, setIsReady] = useState(false);
  const posterDrawn = useRef(false);

  // Draw poster image immediately on mount (before video loads)
  useEffect(() => {
    if (!poster || posterDrawn.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
      if (isReady) return; // Video already playing, skip poster
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;

      // Draw with object-cover behavior
      const imgRatio = img.width / img.height;
      const canvasRatio = canvas.width / canvas.height;
      let sx = 0, sy = 0, sw = img.width, sh = img.height;
      if (imgRatio > canvasRatio) {
        sw = img.height * canvasRatio;
        sx = (img.width - sw) / 2;
      } else {
        sh = img.width / canvasRatio;
        sy = (img.height - sh) / 2;
      }
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
      posterDrawn.current = true;
    };
    img.src = poster;
  }, [poster, isReady]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Create a hidden video element (not in DOM)
    const video = document.createElement("video");
    video.src = src;
    video.muted = true;
    video.playsInline = true;
    video.loop = loop;
    video.preload = "auto";
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    videoRef.current = video;

    const drawFrame = () => {
      if (video.paused || video.ended) return;

      // Match canvas size to its display size
      const rect = canvas.getBoundingClientRect();
      if (canvas.width !== rect.width || canvas.height !== rect.height) {
        canvas.width = rect.width * window.devicePixelRatio;
        canvas.height = rect.height * window.devicePixelRatio;
      }

      // Draw video frame covering the canvas (object-cover behavior)
      const videoRatio = video.videoWidth / video.videoHeight;
      const canvasRatio = canvas.width / canvas.height;

      let sx = 0, sy = 0, sw = video.videoWidth, sh = video.videoHeight;

      if (videoRatio > canvasRatio) {
        // Video is wider — crop sides
        sw = video.videoHeight * canvasRatio;
        sx = (video.videoWidth - sw) / 2;
      } else {
        // Video is taller — crop top/bottom
        sh = video.videoWidth / canvasRatio;
        sy = (video.videoHeight - sh) / 2;
      }

      ctx.drawImage(video, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
      rafRef.current = requestAnimationFrame(drawFrame);
    };

    const startPlayback = () => {
      video.play().then(() => {
        setIsReady(true);
        drawFrame();
      }).catch(() => {
        // Autoplay blocked — try again on user interaction
        const handleInteraction = () => {
          video.play().then(() => {
            setIsReady(true);
            drawFrame();
          }).catch(() => {});
          document.removeEventListener("touchstart", handleInteraction);
          document.removeEventListener("click", handleInteraction);
        };
        document.addEventListener("touchstart", handleInteraction, { once: true });
        document.addEventListener("click", handleInteraction, { once: true });
      });
    };

    video.addEventListener("loadeddata", startPlayback);
    video.addEventListener("canplay", startPlayback);
    video.addEventListener("error", () => {
      console.error("CanvasVideo: failed to load", src);
    });
    video.load();

    return () => {
      cancelAnimationFrame(rafRef.current);
      video.pause();
      video.removeAttribute("src");
      video.load();
      videoRef.current = null;
    };
  }, [src, loop]);

  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: "block" }}
      />
      {/* Loading shimmer only if no poster is provided */}
      {!isReady && !poster && (
        <div className="absolute inset-0 bg-gradient-to-br from-stone-800 via-stone-700 to-stone-900 animate-pulse" />
      )}
    </div>
  );
}
