/**
 * MutePill , Fixed top-left mute/unmute pill for hero sections.
 *
 * Pass a `videoRef` pointing to the hero <video> element.
 * The pill starts muted and toggles the video's own audio on click.
 * Renders nothing on mobile (< 768px).
 */

import { useState, useEffect, RefObject } from "react";
import { useLocation } from "wouter";
import { getPalette, BRAND } from "@/data/propertyPalettes";

/* Map route prefixes to property slugs */
const ROUTE_TO_SLUG: Record<string, string> = {
  "/alto-atacama": "alto-atacama",
  "/tented-camp": "tented-camp",
  "/gardens": "gardens",
  "/springs": "springs",
  "/hangaroa": "hangaroa",
  "/bocas-del-toro": "bocas-del-toro",
};

interface MutePillProps {
  videoRef?: RefObject<HTMLVideoElement | null>;
}

export default function MutePill({ videoRef }: MutePillProps) {
  const [location] = useLocation();
  const [isMuted, setIsMuted] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  /* ── Desktop only ── */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ── Pill colors from route ── */
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

  const handleToggle = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    if (videoRef?.current) {
      videoRef.current.muted = newMuted;
      if (!newMuted) {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  if (isMobile) return null;

  return (
    <div className="fixed top-[10px] left-14 z-[55] flex items-center gap-2 pointer-events-none">
      <button
        onClick={handleToggle}
        className="pointer-events-auto flex items-center justify-center gap-2 h-9 px-4 rounded-full backdrop-blur-md shadow-sm transition-colors cursor-pointer border hover:opacity-90"
        style={{ backgroundColor: pillBg, color: pillText, borderColor: "rgba(255,255,255,0.1)" }}
        aria-label={isMuted ? "Unmute hero video" : "Mute hero video"}
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
  );
}
