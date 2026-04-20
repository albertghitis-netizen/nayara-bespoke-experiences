/**
 * CinematicScroll — Auto-scroll cinematic experience (DESKTOP ONLY)
 *
 * On mobile, this component renders nothing — users scroll manually.
 *
 * Flow:
 * 1. Page loads muted, static — "Enter the [Property]" overlay on hero
 * 2. User clicks CTA → cascade begins, auto-scroll starts, audio unmutes
 * 3. User touches/clicks screen anywhere → scroll stops
 * 4. One fixed Sound pill follows the user (top-left)
 * 5. Sound pill toggles global mute via cascadeAudio manager
 *
 * Audio: Each video in the cascade plays its own audio via NativeVideo.
 * CinematicScroll no longer manages its own audio element — it delegates
 * to the cascadeAudio singleton which coordinates which video is active.
 */

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { getPalette, BRAND } from "@/data/propertyPalettes";
import { cascadeAudio } from "@/lib/cascadeAudio";

interface CinematicScrollProps {
  /** Scroll speed in pixels per frame (~60fps). Default 1.45 */
  speed?: number;
  /** Custom CTA button text. Default "Start Your Adventure" */
  ctaText?: string;
  /** Callback fired when user clicks the CTA button */
  onStart?: () => void;
}

/* Map route prefixes to property slugs */
const ROUTE_TO_SLUG: Record<string, string> = {
  "/alto-atacama": "alto-atacama",
  "/tented-camp": "tented-camp",
  "/gardens": "gardens",
  "/springs": "springs",
  "/hangaroa": "hangaroa",
  "/bocas-del-toro": "bocas-del-toro",
};

export default function CinematicScroll({
  speed = 1.45,
  ctaText = "Start Your Adventure",
  onStart,
}: CinematicScrollProps) {
  const [location] = useLocation();

  /* ── Desktop only — skip on mobile/tablet ── */
  const [isMobile, setIsMobile] = useState(false);

  const [showOverlay, setShowOverlay] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);

  const rafRef = useRef<number | null>(null);
  const scrollingRef = useRef(false);
  const startedAtRef = useRef<number>(0);
  const countdownRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* ── Check mobile on mount + resize ── */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ── Subscribe to cascadeAudio mute state changes ── */
  useEffect(() => {
    const unsub = cascadeAudio.subscribe((muted) => {
      setIsMuted(muted);
    });
    return () => { unsub(); };
  }, []);

  /* ── Determine pill colors from current route ── */
  const propertySlug = Object.entries(ROUTE_TO_SLUG).find(([prefix]) =>
    location.startsWith(prefix)
  )?.[1];

  let pillBg: string;
  let pillText: string;

  if (propertySlug) {
    const palette = getPalette(propertySlug);
    pillBg = `${palette.navPillBg}B3`;
    pillText = palette.navPillText;
  } else {
    pillBg = "rgba(242,235,227,0.75)";
    pillText = BRAND.primaryText;
  }

  /* ── Auto-scroll loop ── */
  const startScrollLoop = useCallback(() => {
    scrollingRef.current = true;

    const step = () => {
      if (!scrollingRef.current) return;

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (window.scrollY >= maxScroll) {
        scrollingRef.current = false;
        setIsScrolling(false);
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

  /* ── Launch the actual experience (called after countdown reaches 0) ── */
  const launchExperience = useCallback(() => {
    setShowOverlay(false);
    setHasStarted(true);
    setIsScrolling(true);
    setIsMuted(false);
    startedAtRef.current = Date.now();
    cascadeAudio.start();
    onStart?.();
    startScrollLoop();
  }, [startScrollLoop, onStart]);

  /* ── Begin experience — start 5-second countdown ── */
  const handleBegin = useCallback(() => {
    setCountdown(5);
    let count = 5;
    countdownRef.current = setInterval(() => {
      count -= 1;
      if (count <= 0) {
        clearInterval(countdownRef.current!);
        countdownRef.current = null;
        setCountdown(null);
        launchExperience();
      } else {
        setCountdown(count);
      }
    }, 1000);
  }, [launchExperience]);

  /* ── Cleanup countdown on unmount ── */
  useEffect(() => {
    return () => {
      if (countdownRef.current) clearInterval(countdownRef.current);
    };
  }, []);

  /* ── Touch/click to stop ── */
  useEffect(() => {
    if (!hasStarted || isMobile) return;

    const handleTouch = (e: TouchEvent | MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-cinematic-control]")) return;

      // Ignore clicks within 600ms of starting
      if (Date.now() - startedAtRef.current < 600) return;

      if (scrollingRef.current) {
        stopScrollLoop();
        setIsScrolling(false);
      }
    };

    window.addEventListener("touchstart", handleTouch, { passive: true });
    window.addEventListener("mousedown", handleTouch);

    return () => {
      window.removeEventListener("touchstart", handleTouch);
      window.removeEventListener("mousedown", handleTouch);
    };
  }, [hasStarted, stopScrollLoop, isMobile]);

  /* ── Mute toggle — delegates to cascadeAudio ── */
  const handleMuteToggle = useCallback(() => {
    const newMuted = cascadeAudio.toggleMute();
    setIsMuted(newMuted);
  }, []);

  /* ── On mobile, render nothing ── */
  if (isMobile) return null;

  return (
    <>
      {/* ── "Enter the [Property]" overlay ── */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ backgroundColor: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
          >
            {countdown === null ? (
              /* ── Initial CTA button ── */
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
                  {ctaText}
                </span>
              </motion.button>
            ) : (
              /* ── Countdown display ── */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4"
              >
                <span
                  className="text-white/60 text-[11px] tracking-[0.35em] uppercase"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                >
                  Enter the Atacama in...
                </span>
                <motion.span
                  key={countdown}
                  initial={{ opacity: 0, scale: 1.4 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-white text-7xl leading-none"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
                >
                  {countdown}
                </motion.span>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Fixed Sound pill (top-left, aligned with nav hamburger & Reserve) ── */}
      {hasStarted && (
        <div className="fixed top-[11px] left-14 z-[55] flex items-center gap-2 pointer-events-none">
          <button
            data-cinematic-control
            onClick={handleMuteToggle}
            className="pointer-events-auto flex items-center justify-center gap-2 h-9 px-4 rounded-full backdrop-blur-md shadow-sm transition-colors cursor-pointer border hover:opacity-90"
            style={{ backgroundColor: pillBg, color: pillText, borderColor: "rgba(255,255,255,0.1)" }}
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
        </div>
      )}
    </>
  );
}
