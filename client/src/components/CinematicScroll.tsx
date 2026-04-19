/**
 * CinematicScroll — Auto-scroll cinematic experience (DESKTOP ONLY)
 *
 * Variable-speed scrolling:
 * - Detects cascade sections marked with data-cascade-h and data-cascade-v
 * - Scrolls faster through H (horizontal 16:9) sections: 3.0 px/frame → ~6s at 1920px
 * - Scrolls slower through V (vertical 3:4 + text) sections: 2.37 px/frame → ~9s at 1920px
 * - Default speed used for hero and non-cascade content
 *
 * Flow:
 * 1. Page loads muted, static — "Start Your Adventure" overlay on hero
 * 2. User taps "Start Your Adventure" → ambient audio plays, page auto-scrolls
 * 3. User touches/clicks screen anywhere → scroll stops, audio pauses
 * 4. One fixed Sound pill follows the user (top-left, matches brand nav pill color)
 * 5. Tapping the Sound pill toggles audio without affecting scroll
 *
 * Audio source: Uses a hidden <video> element to play the hero video's audio
 * track as the ambient soundtrack for the entire page experience.
 */

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { getPalette, BRAND } from "@/data/propertyPalettes";

interface CinematicScrollProps {
  /** CDN URL for the audio source — can be an .mp3, .mp4, or video file.
   *  If it's a video, only the audio track is used (video hidden). */
  audioSrc: string;
  /** Default scroll speed in pixels per frame (~60fps). Used for hero/non-cascade areas. Default 2.0 */
  speed?: number;
  /** Speed for horizontal (16:9) cascade sections. Default 3.0 → ~6s at 1920px */
  speedH?: number;
  /** Speed for vertical (3:4 + text) cascade sections. Default 2.37 → ~9s at 1920px */
  speedV?: number;
  /** Callback fired when user clicks "Start Your Adventure" */
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

/**
 * Determine the current scroll speed based on which cascade section
 * is currently at the top of the viewport.
 */
function getCurrentSpeed(defaultSpeed: number, hSpeed: number, vSpeed: number): number {
  const viewportMid = window.scrollY + window.innerHeight * 0.5;

  // Check all cascade-marked elements
  const hSections = Array.from(document.querySelectorAll("[data-cascade-h]"));
  const vSections = Array.from(document.querySelectorAll("[data-cascade-v]"));

  for (let i = 0; i < hSections.length; i++) {
    const rect = hSections[i].getBoundingClientRect();
    const elTop = window.scrollY + rect.top;
    const elBottom = elTop + rect.height;
    if (viewportMid >= elTop && viewportMid <= elBottom) {
      return hSpeed;
    }
  }

  for (let i = 0; i < vSections.length; i++) {
    const rect = vSections[i].getBoundingClientRect();
    const elTop = window.scrollY + rect.top;
    const elBottom = elTop + rect.height;
    if (viewportMid >= elTop && viewportMid <= elBottom) {
      return vSpeed;
    }
  }

  return defaultSpeed;
}

export default function CinematicScroll({
  audioSrc,
  speed = 2.0,
  speedH = 3.0,
  speedV = 2.37,
  onStart,
}: CinematicScrollProps) {
  const [location] = useLocation();

  /* ── Desktop only — skip on mobile/tablet ── */
  const [isMobile, setIsMobile] = useState(false);

  const [showOverlay, setShowOverlay] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const mediaRef = useRef<HTMLVideoElement | HTMLAudioElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const scrollingRef = useRef(false);

  /* Store speeds in refs so the animation loop always has current values */
  const speedRef = useRef(speed);
  const speedHRef = useRef(speedH);
  const speedVRef = useRef(speedV);
  useEffect(() => { speedRef.current = speed; }, [speed]);
  useEffect(() => { speedHRef.current = speedH; }, [speedH]);
  useEffect(() => { speedVRef.current = speedV; }, [speedV]);

  /* ── Check mobile on mount + resize ── */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ── Determine pill colors from current route ── */
  const propertySlug = Object.entries(ROUTE_TO_SLUG).find(([prefix]) =>
    location.startsWith(prefix)
  )?.[1];

  let pillBg: string;
  let pillText: string;

  if (propertySlug) {
    const palette = getPalette(propertySlug);
    pillBg = `${palette.navPillBg}B3`; // match BrandNavigation opacity
    pillText = palette.navPillText;
  } else {
    // Brand homepage — light pill with dark text
    pillBg = "rgba(242,235,227,0.75)";
    pillText = BRAND.primaryText;
  }

  /* ── Detect if source is video (mp4/mov/webm) or audio (mp3/wav/ogg) ── */
  const isVideoSource = /\.(mp4|mov|webm|m4v)/i.test(audioSrc);

  /* ── Initialize audio/video element ── */
  useEffect(() => {
    if (isMobile) return; // Don't load audio on mobile

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
  }, [audioSrc, isVideoSource, isMobile]);

  /* ── Auto-scroll loop with variable speed ── */
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

      // Dynamically determine speed based on current viewport position
      const currentSpeed = getCurrentSpeed(
        speedRef.current,
        speedHRef.current,
        speedVRef.current
      );

      window.scrollBy(0, currentSpeed);
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
  }, []);

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
    onStart?.();

    // Start audio (from video or audio element)
    if (mediaRef.current) {
      mediaRef.current.muted = false;
      mediaRef.current.play().catch(() => {
        // Autoplay blocked — continue scroll without audio
      });
    }

    // Start scrolling
    startScrollLoop();
  }, [startScrollLoop, onStart]);

  /* ── Touch/click to stop ── */
  useEffect(() => {
    if (!hasStarted || isMobile) return;

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

  /* ── On mobile, render nothing ── */
  if (isMobile) return null;

  return (
    <>
      {/* ── "Start Your Adventure" overlay ── */}
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
                Start Your Adventure
              </span>
            </motion.button>
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
