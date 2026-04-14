/**
 * CinematicScroll — Auto-scroll cinematic experience
 *
 * Flow:
 * 1. Page loads muted, static — "Ready to Begin" overlay on hero
 * 2. User taps "Ready to Begin" → ambient audio plays, page auto-scrolls
 * 3. User touches screen anywhere → scroll stops, audio pauses
 * 4. One fixed mute button follows the user (top-left, matches brand nav style)
 * 5. Tapping the mute button toggles audio without affecting scroll
 */

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CinematicScrollProps {
  /** CDN URL for the ambient audio track */
  audioSrc: string;
  /** Scroll speed in pixels per frame (~60fps). Default 1.2 */
  speed?: number;
  /** Brand accent color for the button. Default matches nav pills */
  accentColor?: string;
}

export default function CinematicScroll({
  audioSrc,
  speed = 1.2,
  accentColor = "rgba(58,42,26,0.7)",
}: CinematicScrollProps) {
  const [showOverlay, setShowOverlay] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const scrollingRef = useRef(false);

  /* ── Initialize audio ── */
  useEffect(() => {
    const audio = new Audio(audioSrc);
    audio.loop = true;
    audio.volume = 0.6;
    audio.preload = "auto";
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, [audioSrc]);

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
        audioRef.current?.pause();
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

    // Start audio
    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.play().catch(() => {
        // Autoplay blocked — continue scroll without audio
      });
    }

    // Start scrolling
    startScrollLoop();
  }, [startScrollLoop]);

  /* ── Touch to stop ── */
  useEffect(() => {
    if (!hasStarted) return;

    const handleTouch = (e: TouchEvent | MouseEvent) => {
      // Don't stop if tapping the control buttons
      const target = e.target as HTMLElement;
      if (target.closest("[data-cinematic-control]")) return;

      if (scrollingRef.current) {
        // Stop scrolling + pause audio
        stopScrollLoop();
        setIsScrolling(false);
        audioRef.current?.pause();
      }
    };

    window.addEventListener("touchstart", handleTouch, { passive: true });
    window.addEventListener("mousedown", handleTouch);

    return () => {
      window.removeEventListener("touchstart", handleTouch);
      window.removeEventListener("mousedown", handleTouch);
    };
  }, [hasStarted, stopScrollLoop]);

  /* ── Resume button ── */
  const handleResume = useCallback(() => {
    setIsScrolling(true);
    if (audioRef.current && !isMuted) {
      audioRef.current.play().catch(() => {});
    }
    startScrollLoop();
  }, [isMuted, startScrollLoop]);

  /* ── Mute toggle ── */
  const handleMuteToggle = useCallback(() => {
    if (!audioRef.current) return;
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    audioRef.current.muted = newMuted;
    if (!newMuted && isScrolling) {
      audioRef.current.play().catch(() => {});
    }
  }, [isMuted, isScrolling]);

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

      {/* ── Fixed control bar (top-left, matches Sound pill style) ── */}
      {hasStarted && (
        <div className="fixed top-6 left-20 z-[60] flex items-center gap-3 pointer-events-none">
          {/* Mute/Unmute button */}
          <button
            data-cinematic-control
            onClick={handleMuteToggle}
            className="pointer-events-auto flex items-center gap-2 h-10 px-4 rounded-full backdrop-blur-md shadow-lg transition-all duration-300 hover:opacity-90"
            style={{ backgroundColor: accentColor, color: "#fff" }}
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
                className="pointer-events-auto flex items-center gap-2 h-10 px-4 rounded-full backdrop-blur-md shadow-lg transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: accentColor, color: "#fff" }}
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
