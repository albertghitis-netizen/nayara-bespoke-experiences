/**
 * CinematicScroll — Auto-scroll cinematic experience (DESKTOP ONLY)
 *
 * Flow:
 * 1. Page loads muted, static — "Ready to Begin" overlay on hero
 * 2. User taps "Ready to Begin" → ambient audio plays, page auto-scrolls
 * 3. User touches screen anywhere → scroll stops, audio pauses
 * 4. One fixed mute button follows the user (top-left, matches brand nav style)
 * 5. Tapping the mute button toggles audio without affecting scroll
 * 6. Disabled on mobile — returns null
 *
 * Audio source: Uses a hidden <video> element to play the hero video's audio
 * track as the ambient soundtrack for the entire page experience.
 */

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/useMobile";

interface CinematicScrollProps {
  /** CDN URL for the audio source — can be an .mp3, .mp4, or video file.
   *  If it's a video, only the audio track is used (video hidden). */
  audioSrc: string;
  /** Scroll speed in pixels per frame (~60fps). Default 1.5 */
  speed?: number;
  /** Brand accent color for the button. Default matches nav pills */
  accentColor?: string;
}

export default function CinematicScroll({
  audioSrc,
  speed = 1.5,
  accentColor = "rgba(58,42,26,0.7)",
}: CinematicScrollProps) {
  const isMobile = useIsMobile();

  const [showOverlay, setShowOverlay] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const mediaRef = useRef<HTMLVideoElement | HTMLAudioElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const scrollingRef = useRef(false);

  /* ── Detect if source is video (mp4/mov/webm) or audio (mp3/wav/ogg) ── */
  const isVideoSource = /\.(mp4|mov|webm|m4v)/i.test(audioSrc);

  /* ── Initialize audio/video element ── */
  useEffect(() => {
    if (isMobile) return;

    let media: HTMLVideoElement | HTMLAudioElement;

    if (isVideoSource) {
      // Create a hidden video element — we only want its audio track
      const video = document.createElement("video");
      video.src = audioSrc;
      video.loop = true;
      video.volume = 0.6;
      video.preload = "auto";
      video.playsInline = true;
      // Hide the video — we only want audio
      video.style.position = "fixed";
      video.style.top = "-9999px";
      video.style.left = "-9999px";
      video.style.width = "1px";
      video.style.height = "1px";
      video.style.opacity = "0";
      video.style.pointerEvents = "none";
      document.body.appendChild(video);
      media = video;
    } else {
      // Standard audio element for .mp3 etc.
      const audio = new Audio(audioSrc);
      audio.loop = true;
      audio.volume = 0.6;
      audio.preload = "auto";
      media = audio;
    }

    mediaRef.current = media;

    return () => {
      media.pause();
      media.src = "";
      if (isVideoSource && media.parentNode) {
        media.parentNode.removeChild(media);
      }
    };
  }, [audioSrc, isMobile, isVideoSource]);

  /* ── Auto-scroll loop ── */
  const startScrollLoop = useCallback(() => {
    scrollingRef.current = true;

    const step = () => {
      if (!scrollingRef.current) return;

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (window.scrollY >= maxScroll) {
        // Reached bottom — stop
        scrollingRef.current = false;
        setIsScrolling(false);
        mediaRef.current?.pause();
        return;
      }

      window.scrollBy(0, speed);
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
  }, [speed]);

  const stopScrollLoop = useCallback(() => {
    scrollingRef.current = false;
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  /* ── Begin experience ── */
  const handleBegin = useCallback(() => {
    setShowOverlay(false);
    setHasStarted(true);
    setIsScrolling(true);
    setIsMuted(false);

    // Start audio (from video or audio element)
    if (mediaRef.current) {
      mediaRef.current.muted = false;
      mediaRef.current.play().catch(() => {
        // Autoplay blocked — continue scroll without audio
      });
    }

    // Start scrolling
    startScrollLoop();
  }, [startScrollLoop]);

  /* ── Touch/click to stop ── */
  useEffect(() => {
    if (isMobile || !hasStarted) return;

    const handleTouch = (e: TouchEvent | MouseEvent) => {
      // Don't stop if tapping the control buttons
      const target = e.target as HTMLElement;
      if (target.closest("[data-cinematic-control]")) return;

      if (scrollingRef.current) {
        // Stop scrolling + pause audio
        stopScrollLoop();
        setIsScrolling(false);
        mediaRef.current?.pause();
      }
    };

    window.addEventListener("touchstart", handleTouch, { passive: true });
    window.addEventListener("mousedown", handleTouch);

    return () => {
      window.removeEventListener("touchstart", handleTouch);
      window.removeEventListener("mousedown", handleTouch);
    };
  }, [hasStarted, stopScrollLoop, isMobile]);

  /* ── Resume button ── */
  const handleResume = useCallback(() => {
    setIsScrolling(true);
    if (mediaRef.current && !isMuted) {
      mediaRef.current.play().catch(() => {});
    }
    startScrollLoop();
  }, [isMuted, startScrollLoop]);

  /* ── Mute toggle ── */
  const handleMuteToggle = useCallback(() => {
    if (!mediaRef.current) return;
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    mediaRef.current.muted = newMuted;
    if (!newMuted && isScrolling) {
      mediaRef.current.play().catch(() => {});
    }
  }, [isMuted, isScrolling]);

  // Desktop only — render nothing on mobile
  if (isMobile) return null;

  return (
    <>
      {/* ── "Ready to Begin" overlay ── */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ backgroundColor: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
          >
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              onClick={handleBegin}
              className="flex flex-col items-center gap-6 group cursor-pointer"
            >
              {/* Play icon circle */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center border border-white/30 group-hover:border-white/60 transition-all duration-500 group-hover:scale-110"
                style={{ backgroundColor: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)" }}
              >
                <svg className="w-8 h-8 text-white/80 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>

              <span
                className="text-white/70 text-[11px] tracking-[0.35em] uppercase group-hover:text-white/90 transition-colors duration-500"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Ready to Begin
              </span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Fixed control bar (top-left, aligned with nav hamburger & Reserve) ── */}
      {hasStarted && (
        <div className="fixed top-[11px] left-14 z-[55] flex items-center gap-2 pointer-events-none">
          {/* Mute/Unmute button — matches nav pill: h-9, rounded-full, same backdrop */}
          <button
            data-cinematic-control
            onClick={handleMuteToggle}
            className="pointer-events-auto flex items-center justify-center gap-2 h-9 px-4 rounded-full backdrop-blur-md shadow-sm transition-colors cursor-pointer border hover:opacity-90"
            style={{ backgroundColor: accentColor, color: "#fff", borderColor: "rgba(255,255,255,0.1)" }}
          >
            {isMuted ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-3.15a.75.75 0 011.28.53v13.74a.75.75 0 01-1.28.53L6.75 14.25H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-3.15a.75.75 0 011.28.53v13.74a.75.75 0 01-1.28.53L6.75 14.25H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
              </svg>
            )}
            <span
              className="text-[10px] tracking-[0.15em] uppercase"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              {isMuted ? "Muted" : "Sound"}
            </span>
          </button>

          {/* Resume button — only shows when paused */}
          <AnimatePresence>
            {!isScrolling && (
              <motion.button
                data-cinematic-control
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={handleResume}
                className="pointer-events-auto flex items-center justify-center gap-2 h-9 px-4 rounded-full backdrop-blur-md shadow-sm transition-colors cursor-pointer border hover:opacity-90"
                style={{ backgroundColor: accentColor, color: "#fff", borderColor: "rgba(255,255,255,0.1)" }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span
                  className="text-[10px] tracking-[0.15em] uppercase"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                >
                  Resume
                </span>
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      )}
    </>
  );
}
