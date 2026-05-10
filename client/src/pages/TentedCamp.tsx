/**
 * NAYARA TENTED CAMP , Arenal, Costa Rica
 * Option C: Cascade with functional breaks woven in
 * Full-bleed edge-to-edge media, canopy gradient
 * Functional breaks: Reviews pull-quote, Journal link, Getting Here
 * woven between cascade sections , not appended at the end
 */
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { useCountUp } from "@/hooks/useCountUp";
import NativeVideo from "@/components/NativeVideo";
import { useIsMobile } from "@/hooks/useMobile";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import BlobVideo from "@/components/BlobVideo";
import { AwardBadgeStrip } from "@/components/AwardBadges";
import CrossPropertyCTA from "@/components/CrossPropertyCTA";

import {
  AnimateOnScroll,
  TextReveal,
  MultiLineReveal,
  MediaReveal,
  fadeUp,
  DURATION,
  EASE_CINEMATIC,
} from "@/components/motion";
import { LocalBusinessSchema, BreadcrumbListSchema } from "@/components/SEOSchemaEnhanced";
import RoomSlider, { RoomSliderCard } from "@/components/RoomSlider";
import { BOOKING_URLS } from "@/data/booking";


/* ═══════════════════════════════════════════════════════════════
   PALETTE , "Canopy" gradient: misty green → deep forest
   ═══════════════════════════════════════════════════════════════ */
/* Beyond Reforestation palette , bone + olive green + gravel */
const COLOR_A = "#F7F5F0"; // Bone (primary background)
const COLOR_B = "#EDEEE2"; // Warm olive tint (subtle variation)
const SECTION_COLORS = [
  COLOR_A, // 0 hero
  COLOR_B, // 1 story
  COLOR_A, // 2 accommodations
  COLOR_B, // 3 experiences
  COLOR_A, // 4 sustainability
  COLOR_B, // 5 wellness
  COLOR_A, // 6 gastronomy
  COLOR_B, // 7 adventure
  COLOR_A, // 8 spa
  COLOR_B, // 9 getting here
  COLOR_A, // 10 residence
  COLOR_B, // 11 henry's bar
  COLOR_A, // 12 grand tents
  COLOR_B, // 13 camp life
  COLOR_A, // 14 rainforest mornings
  COLOR_B, // 15 the canopy at dusk
  COLOR_A, // 16 looking for frogs
  COLOR_B, // 17 return-a
  COLOR_A, // 18 return-b
];

const PALETTE = {
  text: "#0D0604",
  textSecondary: "#0D0604",
  textTertiary: "#1A0F0A99",
  primary: "#868B75",
  secondary: "#525642",
  accent: "#9A9086",
  divider: "#E6DFD5",
};
const BONE = "#FFFFFF";
const DARK_SECTION_IDS = ["nayara-by-night"];


const display = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)" } as const;

/* ═══════════════════════════════════════════════════════════════
   CDN ASSETS
   ═══════════════════════════════════════════════════════════════ */
const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

const ASSETS = {
  heroDesktop: "/manus-storage/tented-hero-desktop-new_95c1a076.mp4",
  heroMobile: "/manus-storage/tented-camp-mobile-hero-hq_d5b0c9f4.mp4",

  storyV: "/manus-storage/brand-s1-philosophy_510ddc6e.mp4",
  storyH: `${CDN}/Supersale-8_68853293.jpg`,

  roomsV: `${CDN}/grandtent3_dd3f6902.jpg`,
  roomsH: `${CDN}/Supersale-3_38ac1aa5.jpg`,

  expV: `${CDN}/hanging-bridges-vertical_e6838fa9.mp4`,
  expH: `${CDN}/TentedExperienceVideo_fixed_75e9afca.mp4`,

  wellV: `${CDN}/hot-springs-vertical_52b2b6ec.mp4`,
  wellH: `${CDN}/tented-wellness-video_26fcc290.mp4`,

  gastroV: `${CDN}/atasteofplace_f64f6f71.jpg`,
  gastroH: `${CDN}/Supersale-4_7834ffc2.jpg`,

  wildV: "/manus-storage/tentreel4-v2_c5138302.mp4",
  wildH: `${CDN}/tc-mainpool-vertical_81b6bb28.mp4`,

  // Tent reel videos
  tentReel1: "/manus-storage/tentreel4-v2_c5138302.mp4",
  tentReel2: `${CDN}/nayara-tent-2_791909a6.mp4`,
  tentReel3: `${CDN}/nayara-tent-3_c92dfadc.mp4`,

  advV: `${CDN}/frog-tour-vertical_17b18385.mp4`,
  advH: `${CDN}/wildlife-reel_7c30f53f.mp4`,

  spaV: `${CDN}/4O1A1569-Spa-NayaraTentedCampwithLivLawbyBriceFerreStudio-VancouverPortraitAdventureandAthletePhotographer_0e850f3a.webp`,
  spaH: `${CDN}/hot-springs-horizontal_2508b725.mp4`,

  galleryVideo1: `${CDN}/tc-gallery-video-new_afba07b0.mp4`,
  galleryVideo2: `${CDN}/gallery-residence-video-v2_2ca0004b.mp4`,
  galleryVideo3: `${CDN}/gallery-final-video_7a430890.mp4`,
  galleryImg1: `${CDN}/(Rooms)NayaraTent3copy_54044994.webp`,
  galleryImg2: `${CDN}/HenrysBar_69b1e477.webp`,
  galleryImg3: `${CDN}/12.Residence_17d767d7.webp`,
  galleryImg4: `${CDN}/(Rooms)Residence3_48e06b8c.webp`,
  galleryImg5: `${CDN}/38.jTentDetailpg_b2b74566.webp`,
  galleryImg6: `${CDN}/Grand(1)_0127cf09.webp`,
  galleryImg7: `${CDN}/NewAreaBriceFerre(2)_cf5128c9.webp`,
  galleryImg8: `${CDN}/19B9D444-0A7C-4C29-93A3-A8C0DFDFBD31_aa5cae9d.JPEG`,
  galleryImg9: `${CDN}/Supersale-3_3588efbb.jpg`,

  badges: `${CDN}/award-badges-tented-camp_8aea5e71.webp`,

  // S4 horizontal photo , tented camp sunset plunge pool
  s4Photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tented-camp-sunset-plunge_7573fe67.jpeg",

  // New cascade video
  cascadeNewV: `${CDN}/tented-camp-cascade-new_c993038d.mp4`,
};

/* ═══════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════ */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[11px] tracking-[0.2em] mb-4"
      style={{ ...body, fontWeight: 500, color: PALETTE.primary }}
    >
      {children}
    </p>
  );
}

function MediaBlock({
  src,
  isVideo,
  ratio,
  alt,
  className = "",
  loop = false,
}: {
  src: string;
  isVideo: boolean;
  ratio: string;
  alt?: string;
  className?: string;
  loop?: boolean;
}) {
  if (!src) return null;
  return (
    <div className={`overflow-hidden ${className}`} style={{ aspectRatio: ratio }}>
      {isVideo ? (
        <NativeVideo src={src} className="w-full h-full object-cover" loop={loop} />
      ) : (
        <img src={src} alt={alt || ""} className="w-full h-full object-cover" loading="lazy" />
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CASCADE SECTION , Full-bleed desktop, stacked mobile
   ═══════════════════════════════════════════════════════════════ */
type CascadeSectionData = {
  id: string;
  label: string;
  headline: string;
  body: string;
  verticalSrc: string;
  horizontalSrc: string;
  verticalIsVideo: boolean;
  horizontalIsVideo: boolean;
  verticalRatio: string;
  horizontalRatio: string;
  horizontalFirst?: boolean;
  bgColor: string;
  nextBgColor: string;
  link?: string;
  linkLabel?: string;
  badges?: boolean;
  awards?: string;
  blogUrl?: string;
  blogTitle?: string;
  blogIsRead?: boolean;
  horizontalLoop?: boolean;
  verticalLoop?: boolean;
  mobileVerticalSrc?: string;
  mobileVerticalIsVideo?: boolean;
  verticalOverlayButtons?: { top: { explore: string; reserve: string; exploreLink?: string }; bottom: { explore: string; reserve: string; exploreLink?: string } };
  horizontalOverlayButtons?: { labels: { label: string; link: string; switchAt: number }[]; reserveLabel: string };
  stats?: { label: string; value: string }[];
  roomCards?: { label: string; route: string; sqm: string; guests: string }[];
  hideH?: boolean;
  overlayOnVideo?: boolean;
  textLink?: string;
  textLinkLabel?: string;
};

function CascadeSection({
  section,
  index,
}: {
  section: CascadeSectionData;
  index: number;
}) {
  const isDark = DARK_SECTION_IDS.includes(section.id);
  const textColor = isDark ? BONE : PALETTE.text;
  const textSecondaryColor = isDark ? `${BONE}CC` : PALETTE.textSecondary;
  const accentColor = isDark ? BONE : PALETTE.primary;
  const textLeft = index % 2 === 0;

  const PILL_BG = isDark ? "rgba(0,0,0,0.45)" : "rgba(134,139,117,0.82)";
  const PILL_BORDER = isDark ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.25)";
  /* Track which label index is active for horizontal overlay crossfade */
  const [hLabelIdx, setHLabelIdx] = useState(0);
  const [hVideoEnded, setHVideoEnded] = useState(false);
  const [showBottomPill, setShowBottomPill] = useState(false);
  useEffect(() => {
    if (!section.verticalOverlayButtons) return;
    const timer = setTimeout(() => setShowBottomPill(true), 3000);
    return () => clearTimeout(timer);
  }, [section.verticalOverlayButtons]);
  const handleHTimeUpdate = useCallback((currentTime: number, duration: number) => {
    if (!section.horizontalOverlayButtons) return;
    const labels = section.horizontalOverlayButtons.labels;
    // Find the last label whose switchAt <= currentTime
    let idx = 0;
    for (let i = labels.length - 1; i >= 0; i--) {
      if (currentTime >= labels[i].switchAt) { idx = i; break; }
    }
    setHLabelIdx(idx);
    // Detect video ended (within 0.3s of end or currentTime stopped advancing)
    if (duration > 0 && currentTime >= duration - 0.3) {
      setHVideoEnded(true);
    }
  }, [section.horizontalOverlayButtons]);
  const horizontalBlock = section.horizontalSrc ? (
    <div className="hidden md:block relative z-[2]" style={{ backgroundColor: section.horizontalFirst ? section.bgColor : section.nextBgColor }}>
      <MediaReveal delay={0.05}>
        <div className="relative">
          {section.horizontalIsVideo && section.horizontalOverlayButtons ? (
            <div className="overflow-hidden w-full" style={{ aspectRatio: section.horizontalRatio }}>
              <NativeVideo
                src={section.horizontalSrc}
                className="w-full h-full object-cover"
                loop={section.horizontalLoop}
                onTimeUpdate={handleHTimeUpdate}
              />
            </div>
          ) : (
            <MediaBlock
              src={section.horizontalSrc}
              isVideo={section.horizontalIsVideo}
              ratio={section.horizontalRatio}
              alt={`${section.label} landscape , Nayara Tented Camp`}
              className="w-full"
              loop={section.horizontalLoop}
            />
          )}
          {/* Explore pills overlay , crossfade centered during video, split when ended */}
          {section.horizontalOverlayButtons ? (
            <div className="absolute bottom-[6%] left-0 right-0 z-10 pointer-events-none">
              {hVideoEnded ? (
                /* Video ended: two pills side by side */
                <div className="flex items-center justify-between px-16">
                  <a
                    href={section.horizontalOverlayButtons.labels[0]?.link || "#"}
                    className="pointer-events-auto flex items-center justify-center px-5 py-2 rounded-full backdrop-blur-md shadow-lg transition-transform hover:scale-[1.03]"
                    style={{ backgroundColor: "rgba(134,139,117,0.9)", fontFamily: "var(--font-body)" }}
                  >
                    <span className="text-white text-[11px] tracking-[0.15em] uppercase font-medium whitespace-nowrap">
                      Explore {section.horizontalOverlayButtons.labels[0]?.label}
                    </span>
                  </a>
                  <a
                    href={section.horizontalOverlayButtons.labels[1]?.link || "#"}
                    className="pointer-events-auto flex items-center justify-center px-5 py-2 rounded-full backdrop-blur-md shadow-lg transition-transform hover:scale-[1.03]"
                    style={{ backgroundColor: "rgba(134,139,117,0.9)", fontFamily: "var(--font-body)" }}
                  >
                    <span className="text-white text-[11px] tracking-[0.15em] uppercase font-medium whitespace-nowrap">
                      Explore {section.horizontalOverlayButtons.labels[1]?.label}
                    </span>
                  </a>
                </div>
              ) : (
                /* Video playing: single centered pill, crossfading between labels */
                <div className="flex items-center justify-center">
                  <div className="relative" style={{ minWidth: "200px", height: "36px" }}>
                    {section.horizontalOverlayButtons.labels.map((item, i) => (
                      <a
                        key={item.label}
                        href={item.link}
                        className="pointer-events-auto absolute inset-0 flex items-center justify-center px-5 py-2 rounded-full backdrop-blur-md shadow-lg transition-transform hover:scale-[1.03]"
                        style={{
                          backgroundColor: "rgba(134,139,117,0.9)",
                          fontFamily: "var(--font-body)",
                          opacity: hLabelIdx === i ? 1 : 0,
                          transition: "opacity 0.6s ease",
                          pointerEvents: hLabelIdx === i ? "auto" : "none",
                        }}
                      >
                        <span className="text-white text-[11px] tracking-[0.15em] uppercase font-medium whitespace-nowrap">
                          Explore {item.label}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : section.link && (
            <div className="absolute bottom-[6%] left-0 right-0 flex items-end justify-center pointer-events-none">
              <a
                href={section.link}
                className="pointer-events-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:brightness-110 w-fit"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase" as const,
                  color: "#FFFFFF",
                  backgroundColor: PILL_BG,
                  borderColor: PILL_BORDER,
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                }}
              >
                {section.linkLabel || "Explore More"}
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </MediaReveal>
    </div>
  ) : null;

  /* ── Overlay mode: text overlaid on full-width horizontal ── */
  if (section.overlayOnVideo && section.horizontalSrc) {
    return (
      <section id={section.id}>
        <div className="relative w-full">
          <div style={{ aspectRatio: section.horizontalRatio || "16/9" }}>
            <NativeVideo src={section.horizontalSrc} className="w-full h-full object-cover" loop={section.horizontalLoop} />
          </div>
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          {/* Text overlay */}
          <div className="absolute inset-0 flex flex-col justify-end pb-12 md:pb-16 lg:pb-20 px-8 md:px-16 lg:px-24">
            <AnimateOnScroll variants={fadeUp}>
              <span className="[&_p]:!text-white/70"><SectionLabel>{section.label}</SectionLabel></span>
            </AnimateOnScroll>
            <AnimateOnScroll variants={fadeUp} delay={0.1}>
              <h2 className="mb-4 md:mb-6">
                {section.headline.split("\n").map((line, i) => (
                  <span key={i} className="block text-2xl md:text-[2rem] lg:text-[2.5rem] leading-[1.05] tracking-wide text-white" style={{ ...display }}>{line}</span>
                ))}
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll variants={fadeUp} delay={0.2}>
              <p className="text-[15px] leading-[1.85] max-w-[480px] text-white/85" style={{ ...body }}>
                {section.body.split("\n\n")[0]}
              </p>
            </AnimateOnScroll>
            {section.link && (
              <AnimateOnScroll variants={fadeUp} delay={0.3}>
                <a
                  href={section.link}
                  className="inline-flex items-center gap-2 mt-6 px-4 py-2.5 rounded-full border border-white/40 backdrop-blur-md text-white text-[11px] tracking-[0.15em] uppercase font-medium transition-all hover:bg-white/10 w-fit"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {section.linkLabel || "Explore"}
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                </a>
              </AnimateOnScroll>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={section.id}>
      {/* ── Horizontal FIRST if flagged ── */}
      {section.horizontalFirst && !section.hideH && horizontalBlock}

      {/* ── Row: Vertical media + Text column ── */}
      <div className="flex flex-col md:flex-row md:items-stretch" style={{ backgroundColor: section.bgColor }}>
        {/* Vertical media , on mobile: always after text (order-2), on desktop: alternates */}
        <div className={`w-full md:w-1/2 relative z-[2] order-2 ${textLeft ? "md:order-2" : "md:order-1"}`}>
          {/* Explore pills on vertical media */}
          {section.verticalOverlayButtons && (
            <>
              {section.verticalOverlayButtons.top.explore && section.verticalOverlayButtons.top.explore !== section.verticalOverlayButtons.bottom.explore && (
              <div className="absolute top-[6%] left-0 right-0 z-10 flex items-center justify-center pointer-events-none">
                <a
                  href={section.verticalOverlayButtons.top.exploreLink || "#"}
                  className="pointer-events-auto flex items-center gap-2 px-5 py-2 rounded-full backdrop-blur-md shadow-lg transition-transform hover:scale-[1.03]"
                  style={{ backgroundColor: "rgba(134,139,117,0.9)", fontFamily: "var(--font-body)" }}
                >
                  <span className="text-white text-[11px] tracking-[0.15em] uppercase font-medium whitespace-nowrap">
                    Explore {section.verticalOverlayButtons.top.explore}
                  </span>
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
              )}
              <div
                className="absolute bottom-[6%] left-0 right-0 z-10 flex items-center justify-center pointer-events-none transition-opacity duration-700"
                style={{ opacity: !section.verticalOverlayButtons.top.explore || section.verticalOverlayButtons.top.explore === section.verticalOverlayButtons.bottom.explore ? 1 : (showBottomPill ? 1 : 0) }}
              >
                <a
                  href={section.verticalOverlayButtons.bottom.exploreLink || "#"}
                  className="pointer-events-auto flex items-center gap-2 px-5 py-2 rounded-full backdrop-blur-md shadow-lg transition-transform hover:scale-[1.03]"
                  style={{ backgroundColor: "rgba(134,139,117,0.9)", fontFamily: "var(--font-body)", pointerEvents: (!section.verticalOverlayButtons.top.explore || section.verticalOverlayButtons.top.explore === section.verticalOverlayButtons.bottom.explore || showBottomPill) ? "auto" : "none" }}
                >
                  <span className="text-white text-[11px] tracking-[0.15em] uppercase font-medium whitespace-nowrap">
                    Explore {section.verticalOverlayButtons.bottom.explore}
                  </span>
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </>
          )}
          {section.mobileVerticalSrc ? (
            <>
              {/* Mobile: use mobile-specific vertical */}
              <div className="block md:hidden">
                <MediaReveal delay={0.1}>
                  <MediaBlock
                    src={section.mobileVerticalSrc}
                    isVideo={section.mobileVerticalIsVideo ?? false}
                    ratio={section.verticalRatio}
                    alt={`${section.label} , Nayara Tented Camp`}
                    loop={section.verticalLoop}
                  />
                </MediaReveal>
              </div>
              {/* Desktop: use original vertical */}
              <div className="hidden md:block">
                <MediaReveal delay={0.1}>
                  <MediaBlock
                    src={section.verticalSrc}
                    isVideo={section.verticalIsVideo}
                    ratio={section.verticalRatio}
                    alt={`${section.label} , Nayara Tented Camp`}
                    loop={section.verticalLoop}
                  />
                </MediaReveal>
              </div>
            </>
          ) : (
            <MediaReveal delay={0.1}>
              <MediaBlock
                src={section.verticalSrc}
                isVideo={section.verticalIsVideo}
                ratio={section.verticalRatio}
                alt={`${section.label} , Nayara Tented Camp`}
                loop={section.verticalLoop}
              />
            </MediaReveal>
          )}
        </div>

        {/* Text column */}
        <div
          className={`w-full md:w-1/2 flex flex-col justify-center h-full px-10 py-16 lg:px-16 xl:px-20 order-1 ${
            textLeft ? "md:order-1" : "md:order-2"
          }`}
          style={{ backgroundColor: section.bgColor }}
        >
          <AnimateOnScroll variants={fadeUp}>
            <SectionLabel>{section.label}</SectionLabel>
          </AnimateOnScroll>

          <AnimateOnScroll variants={fadeUp} delay={0.1}>
            <h2 className="mb-6 md:mb-8">
              {section.headline.split("\n").map((line, i) => (
                <span
                  key={i}
                  className="block text-2xl md:text-[2rem] lg:text-[2.5rem] leading-[1.05] tracking-wide"
                  style={{ ...display, color: textColor }}
                >
                  {line}
                </span>
              ))}
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll variants={fadeUp} delay={0.2}>
            <p
              className="text-[15px] leading-[1.85] max-w-[480px] whitespace-pre-line"
              style={{ ...body, color: textSecondaryColor }}
            >
              {section.body}
            </p>
          </AnimateOnScroll>

          {section.textLink && (
            <AnimateOnScroll variants={fadeUp} delay={0.24}>
              <a
                href={section.textLink}
                className="inline-flex items-center gap-1.5 mt-8 text-[12px] tracking-[0.08em] transition-colors hover:opacity-70"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400, color: accentColor }}
              >
                {section.textLinkLabel || "Explore More"}
                <span className="text-[10px]">→</span>
              </a>
            </AnimateOnScroll>
          )}

          {section.stats && section.stats.length > 0 && (
            <AnimateOnScroll variants={fadeUp} delay={0.28}>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 mb-2">
                {section.stats.map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-[18px] font-light tracking-tight" style={{ fontFamily: "var(--font-display)", color: accentColor }}>{stat.value}</span>
                    <span className="text-[10px] tracking-[0.14em] uppercase mt-0.5" style={{ ...body, fontWeight: 500, color: textSecondaryColor, opacity: 0.65 }}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          )}
          {section.roomCards && section.roomCards.length > 0 && (
            <AnimateOnScroll variants={fadeUp} delay={0.3}>
              <div className="grid grid-cols-2 gap-3 max-w-[480px] mt-6">
                {section.roomCards.map((room) => (
                  <div key={room.label} className="flex flex-col gap-3">
                    <a
                      href={room.route}
                      className="group relative overflow-hidden rounded-lg p-4 transition-all duration-300 hover:scale-[1.02]"
                      style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
                    >
                      <span
                        className="block text-[13px] tracking-[0.12em] uppercase mb-1"
                        style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: textColor }}
                      >
                        {room.label}
                      </span>
                      <span
                        className="block text-[11px] tracking-[0.04em]"
                        style={{ fontFamily: "var(--font-body)", color: textSecondaryColor }}
                      >
                        {room.sqm} sqm · {room.guests} guests
                      </span>
                      <span
                        className="absolute bottom-3 right-3 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ color: textSecondaryColor }}
                      >
                        Explore →
                      </span>
                    </a>
                    <a
                      href="/tented-camp"
                      className="pl-[18px] text-[11px] tracking-[0.15em] uppercase font-medium underline underline-offset-4 hover:opacity-70 transition-opacity"
                      style={{
                        fontFamily: "var(--font-body)",
                        color: accentColor,
                      }}
                    >
                      Reserve {room.label}
                    </a>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          )}
          {section.link && !section.horizontalSrc && (
            <AnimateOnScroll variants={fadeUp} delay={0.3}>
              <a
                href={section.link}
                className="inline-flex items-center gap-2 mt-6 px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md w-fit"
                style={{ ...body, fontWeight: 500, fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#FFFFFF", backgroundColor: PALETTE.primary }}
              >
                {section.linkLabel || "Explore More"}
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </AnimateOnScroll>
          )}

          {section.blogUrl && section.blogTitle && (
            <AnimateOnScroll variants={fadeUp} delay={0.35}>
              <a
                href={section.blogUrl}
                target={section.blogUrl.startsWith("http") ? "_blank" : undefined}
                rel={section.blogUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2.5 mt-8 px-4 py-2.5 rounded-full border transition-all duration-300 hover:scale-[1.02] hover:shadow-md w-fit"
                style={{
                  ...body,
                  fontWeight: 500,
                  fontSize: "12px",
                  letterSpacing: "0.08em",
                  color: "#fff",
                  borderColor: "#868B75",
                  backgroundColor: "rgba(134,139,117,0.7)", backdropFilter: "blur(8px)",
                }}
              >
                {section.blogIsRead ? (
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z" />
                  </svg>
                )}
                {section.blogIsRead ? "Read" : "Watch"}: {section.blogTitle}
              </a>
            </AnimateOnScroll>
          )}

          {section.badges && (
            <div className="mt-8 hidden md:block">
              <a
                href="https://www.youtube.com/watch?v=FPxFzOkKhbw" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 mb-6 px-4 py-2.5 rounded-full border transition-all duration-300 hover:scale-[1.02] hover:shadow-md w-fit"
                style={{
                  ...body,
                  fontWeight: 500,
                  fontSize: "12px",
                  letterSpacing: "0.08em",
                  color: "#fff",
                  borderColor: "#868B75",
                  backgroundColor: "rgba(134,139,117,0.7)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {section.blogIsRead ? (
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z" />
                  </svg>
                )}
                <span style={{ display: "inline-block", textAlign: "center", maxWidth: "300px", lineHeight: "1.6", fontSize: "10px", letterSpacing: "0.06em" }}>
                  Listen: Nayara Co-Founder & CEO, Leo Ghitis,<br />on Sustainability with AFAR Podcast
                </span>
              </a>
              <div className="hidden md:block"><video src="/manus-storage/badge-tented-new_2ae8f267.mp4" autoPlay muted playsInline className="h-32 lg:h-40 w-auto -ml-8 lg:-ml-10" /></div>
            </div>
          )}


        </div>
      </div>

      {/* ── Full-width horizontal media AFTER (default) , hidden on mobile ── */}
      {!section.horizontalFirst && !section.hideH && horizontalBlock}
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FUNCTIONAL BREAK , Reviews Pull-Quote
   Woven between Wellness and Gastronomy sections
   ═══════════════════════════════════════════════════════════════ */
function ReviewsBreak({ bgColor }: { bgColor: string }) {
  return (
    <section
      className="py-20 md:py-28 px-8 md:px-16"
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.2em] mb-6"
            style={{ ...body, fontWeight: 500, color: PALETTE.primary }}
          >
            Guest Voices
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.1}>
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5" fill={PALETTE.primary} viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.15}>
          <p
            className="text-[13px] tracking-[0.04em] mb-8"
            style={{ ...body, color: PALETTE.textTertiary }}
          >
            Based on 1,200+ reviews on TripAdvisor
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.2}>
          <blockquote>
            <p
              className="text-[17px] md:text-[20px] leading-relaxed italic mb-4"
              style={{ ...body, color: PALETTE.text }}
            >
              "An extraordinary experience. The tents are beyond luxurious, the staff anticipates every need, and waking up to the sounds of the rainforest with Arenal Volcano in view is something you never forget."
            </p>
            <cite
              className="text-[12px] tracking-[0.08em] not-italic"
              style={{ ...body, color: PALETTE.textTertiary }}
            >
              , Andrew, TripAdvisor
            </cite>
          </blockquote>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.3}>
          <a
            href="https://www.tripadvisor.com/Hotel_Review-g309226-d12099846-Reviews-Nayara_Tented_Camp-La_Fortuna_de_San_Carlos_Arenal_Volcano_National_Park_Province_of_Al.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 text-[11px] tracking-[0.15em] transition-opacity hover:opacity-70"
            style={{ ...body, fontWeight: 500, color: PALETTE.primary }}
          >
            Read All Reviews →
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FUNCTIONAL BREAK , Journal Link
   Woven between Wildlife and Adventure sections
   ═══════════════════════════════════════════════════════════════ */
function JournalBreak({ bgColor }: { bgColor: string }) {
  return (
    <section
      className="py-16 md:py-24 px-8 md:px-16"
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-3xl mx-auto">
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.2em] mb-6"
            style={{ ...body, fontWeight: 500, color: PALETTE.primary }}
          >
            From the Journal
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.1}>
          <a
            href="/blog/adventures-in-flavor"
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 md:p-8 transition-all"
            style={{ borderLeft: `2px solid ${PALETTE.primary}30` }}
          >
            <h3
              className="text-lg md:text-xl leading-snug mb-3 group-hover:opacity-70 transition-opacity"
              style={{ ...display, fontWeight: 400, color: PALETTE.text }}
            >
              Rainforest to Table: Arenal Adventures in Flavor
            </h3>
            <p
              className="text-[14px] leading-relaxed mb-4"
              style={{ ...body, color: PALETTE.textSecondary }}
            >
              How our chefs transform the extraordinary biodiversity of the Arenal rainforest into a culinary journey that celebrates Costa Rica's terroir.
            </p>
            <span
              className="text-[11px] tracking-[0.15em] group-hover:opacity-70 transition-opacity"
              style={{ ...body, fontWeight: 500, color: PALETTE.primary }}
            >
              Read the Story →
            </span>
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FUNCTIONAL BREAK , Getting Here
   After the last cascade section, before gallery
   ═══════════════════════════════════════════════════════════════ */
function GettingHereBreak({ bgColor }: { bgColor: string }) {
  const routes = [
    {
      title: "International Flights",
      description: "Fly into San José (SJO) or Liberia (LIR) international airports. Both receive direct flights from major US and European cities.",
      icon: "✈",
    },
    {
      title: "Domestic Flight",
      description: "Take a short domestic flight from SJO to La Fortuna/Arenal (~30 minutes). The hotel can arrange transfers from the local airstrip.",
      icon: "⏱",
    },
    {
      title: "Private Transfer",
      description: "Arrange a private transfer from San José (~3 hours) or Liberia (~2.5 hours). Scenic drive through the Central Valley with volcano views.",
      icon: "🚐",
    },
    {
      title: "Self-Drive",
      description: "Rent a car at either airport and drive to Arenal. Well-paved roads with clear signage. The journey from SJO takes approximately 3 hours.",
      icon: "🗺",
    },
  ];

  return (
    <section
      id="getting-here"
      className="py-20 md:py-28 px-8 md:px-16"
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-[1000px] mx-auto">
        <AnimateOnScroll variants={fadeUp}>
          <SectionLabel>Getting Here</SectionLabel>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.1}>
          <h2 className="mb-4">
            <span
              className="text-2xl md:text-[2rem] lg:text-[2.5rem] leading-[1.1] tracking-wide"
              style={{ ...display, color: PALETTE.text }}
            >
              Your Journey to Arenal
            </span>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.15}>
          <p
            className="text-[15px] leading-relaxed mb-12 md:mb-16 max-w-xl"
            style={{ ...body, color: PALETTE.textSecondary }}
          >
            Nayara Tented Camp is located in the Arenal Volcano region of Costa Rica, one of the most accessible luxury destinations in Central America.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {routes.map((route, i) => (
            <AnimateOnScroll key={i} variants={fadeUp} delay={0.1 + i * 0.08}>
              <div className="flex gap-5">
                <div
                  className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-lg"
                  style={{ backgroundColor: "#EDEEE2", color: PALETTE.primary }}
                >
                  {route.icon}
                </div>
                <div>
                  <h3
                    className="text-[16px] mb-2"
                    style={{ ...display, fontWeight: 500, color: PALETTE.text }}
                  >
                    {route.title}
                  </h3>
                  <p
                    className="text-[13px] leading-relaxed"
                    style={{ ...body, color: PALETTE.textSecondary }}
                  >
                    {route.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll variants={fadeUp} delay={0.5}>
          <div
            className="mt-12 md:mt-16 p-6"
            style={{ borderLeft: `2px solid ${PALETTE.primary}30` }}
          >
            <p
              className="text-[13px] leading-relaxed"
              style={{ ...body, color: PALETTE.textSecondary }}
            >
              <span style={{ fontWeight: 500, color: PALETTE.text }}>Need help planning your journey?</span>{" "}
              Our reservations team can arrange all transfers and domestic flights. Contact us at{" "}
              <a href="mailto:reservations@nayararesorts.com" className="underline" style={{ color: PALETTE.primary }}>
                reservations@nayararesorts.com
              </a>{" "}
              or call{" "}
              <a href="tel:+18448652002" className="underline" style={{ color: PALETTE.primary }}>
                1-844-865-2002
              </a>.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}


/* ═══════════════════════════════════════════════════════════════
   RESERVE CTA , "Begin Your Rainforest Adventure"
   ═══════════════════════════════════════════════════════════════ */
function ReserveCTA() {
  const tailBg = SECTION_COLORS[SECTION_COLORS.length - 1];
  return (
    <section className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: tailBg }}>
      <div className="max-w-[800px] mx-auto text-center">
        <AnimateOnScroll variants={fadeUp}>
          <TextReveal as="h2" className="mb-6" delay={0.1}>
            <span className="text-2xl md:text-4xl lg:text-5xl tracking-wide" style={{ ...display, color: PALETTE.text }}>
              Begin Your Rainforest Adventure
            </span>
          </TextReveal>
          <p className="text-[15px] leading-[1.8] mb-8" style={{ ...body, color: PALETTE.textSecondary }}>
            Luxury tented suites suspended in the canopy, private volcanic hot springs, and the raw beauty of the Arenal rainforest await.
          </p>
          <a
            href="/reserve?property=tented-camp"
            className="inline-block px-10 py-3.5 rounded-full text-[11px] tracking-[0.2em] transition-all hover:opacity-80"
            style={{ ...body, fontWeight: 500, backgroundColor: PALETTE.primary, color: "#fff" }}
          >
            Reserve Your Stay
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
/* ═══════════════════════════════════════════════════════════════
   ROOM SLIDER DATA
   ═══════════════════════════════════════════════════════════════ */
const TENTED_CAMP_ROOMS: RoomSliderCard[] = [
  {
    id: "nayara-tent",
    label: "Nayara Tent",
    tagline: "Where luxury meets the rainforest canopy",
    sqft: "1,700",
    sqm: "158",
    guests: "2 adults + 2 children",
    video: "/manus-storage/tented-camp-nayara-tent-reel_9f5988c9.mp4",
    exploreLink: "/tented-camp/rooms/nayara-tent",
    bookingUrl: BOOKING_URLS["tented-camp"],
  },
  {
    id: "family-tent",
    label: "Family Tent",
    tagline: "Connected spaces for families who explore together",
    sqft: "2,400",
    sqm: "223",
    guests: "2 adults + 3 children",
    video: "/manus-storage/family-tent-new_90ea0d30.mp4",
    exploreLink: "/tented-camp/rooms/family-tent",
    bookingUrl: BOOKING_URLS["tented-camp"],
  },
  {
    id: "grand-tent",
    label: "Grand Tent",
    tagline: "A private compound in the heart of the jungle",
    sqft: "4,804",
    sqm: "446",
    guests: "4 adults + 2 children",
    video: "/manus-storage/tented-camp-grand-tent-reel_85820c73.mp4",
    exploreLink: "/tented-camp/rooms/grand-tent",
    bookingUrl: BOOKING_URLS["tented-camp"],
  },
  {
    id: "residence",
    label: "Nayara Residence",
    tagline: "The ultimate private estate for multi-generational journeys",
    sqft: "7,664",
    sqm: "712",
    guests: "Up to 12 adults",
    video: "/manus-storage/tc-residence-916_3c5deb23.mp4",
    exploreLink: "/tented-camp/rooms/residence",
    bookingUrl: BOOKING_URLS["tented-camp"],
  },
];

/* ═══════════════════════════════════════════════════════════════
   SECTION DATA , 8 cascade sections
   ═══════════════════════════════════════════════════════════════ */
const SECTIONS_BEFORE_REVIEW: CascadeSectionData[] = [
  {
    id: "story",
    label: "The Camp",
    headline: "Lifted On Stilts\nEye to Eye with Arenal Volcano",
    body: "Where a barren cattle ranch once stood, a thriving rainforest now surrounds you. Open-air tented suites perch on a volcanic clifftop, each with a private plunge pool fed by natural hot springs. The land tells its own story.\n\nClifftop tents and suites perched above the rainforest canopy with unobstructed volcano views. Best Resort in Central America, four of the last five years \u2014 Travel + Leisure.",
    verticalSrc: "/manus-storage/panorama-tented_5635516f.mp4",
    horizontalSrc: "",
    verticalIsVideo: true,
    horizontalIsVideo: false,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    hideH: true,
    bgColor: SECTION_COLORS[1],
    nextBgColor: SECTION_COLORS[1],
    badges: true,
    awards: "tented-camp",
  },
  {
    id: "rooms",
    label: "Accommodations",
    headline: "Life Under\nCanvas",
    body: "Each tented suite is a private sanctuary suspended in the canopy , featuring outdoor rain showers, handcrafted furnishings, and a plunge pool overlooking the volcano. The architecture honors the rainforest while delivering every modern luxury.\n\nFrom the intimate Nayara Tent for couples to the expansive Residence accommodating up to twelve guests, every option is designed with multigenerational travel in mind. The Family Tent and Grand Tent offer generous living spaces for families, while the Residence brings everyone together under one roof , private pools, shared terraces, and room for three generations to create memories side by side.",
    verticalSrc: "/manus-storage/tented-camp-vertical_90bb91f2.mp4",
    mobileVerticalSrc: "/manus-storage/tented-camp-vertical_90bb91f2.mp4",
    mobileVerticalIsVideo: true,
    horizontalSrc: "/manus-storage/tented-camp-horizontal-v2_973b7121.mp4",
    verticalIsVideo: true,
    horizontalIsVideo: true,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    hideH: true,
    bgColor: SECTION_COLORS[1],
    nextBgColor: SECTION_COLORS[3],
    link: "/tented-camp/rooms",
    linkLabel: "Explore Rooms",
    verticalOverlayButtons: {
      top: { explore: "Nayara Tent", reserve: "Reserve", exploreLink: "/tented-camp/rooms/nayara-tent" },
      bottom: { explore: "Family Tent", reserve: "Reserve", exploreLink: "/tented-camp/rooms/family-tent" },
    },
    horizontalOverlayButtons: { labels: [{ label: "Grand Tent", link: "/tented-camp/rooms/grand-tent", switchAt: 0 }, { label: "Residence", link: "/tented-camp/rooms/residence", switchAt: 3 }], reserveLabel: "Reserve" },
    roomCards: [
      { label: "Nayara Tent", route: "/tented-camp/rooms/nayara-tent", sqm: "65", guests: "4" },
      { label: "Family Tent", route: "/tented-camp/rooms/family-tent", sqm: "93", guests: "6" },
      { label: "Grand Tent", route: "/tented-camp/rooms/grand-tent", sqm: "130", guests: "6" },
      { label: "Residence", route: "/tented-camp/rooms/residence", sqm: "186", guests: "12" },
    ],
  },
  {
    id: "experiences",
    label: "Experiences",
    headline: "Discover the Magic\nof the Rainforest",
    body: "Hike through pristine rainforest to Rio Celeste, where two rivers merge to create an impossibly turquoise waterfall sacred to the indigenous Maleku people.",
    verticalSrc: "",
    horizontalSrc: "/manus-storage/gardens-experience-horizontal-v3_3ad62308.mp4",
    verticalIsVideo: true,
    horizontalIsVideo: true,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[4],
    nextBgColor: SECTION_COLORS[5],
    link: "/tented-camp/experiences",
    linkLabel: "Explore Experiences",
    overlayOnVideo: true,
    textLink: "/tented-camp/experiences",
    textLinkLabel: "Explore Bespoke Experiences",
  },
  {
    id: "sustainability",
    label: "Sustainability",
    headline: "Rooted in\nResponsibility",
    body: "What began as a barren cattle ranch is now a thriving 1,400-acre rainforest reserve. Every decision at Tented Camp , from solar-heated pools to zero single-use plastics , is guided by a simple principle: leave the land better than we found it.\n\nOver the past two decades, Nayara has reforested more than 600 acres of degraded pastureland, creating wildlife corridors that allow jaguars, tapirs, and scarlet macaws to move freely between protected areas. The property holds Costa Rica's highest CST 5 sustainability certification and generates 100% of its energy from renewable sources. Guests don't just witness this transformation , they become part of it.",
    verticalSrc: "/manus-storage/tented-sustainability-vertical_51ad5d43.mp4",
    horizontalSrc: "/manus-storage/tented-sustainability-h2_e4fd711d.mp4",
    verticalIsVideo: true,
    horizontalIsVideo: true,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    hideH: true,
    bgColor: SECTION_COLORS[5],
    nextBgColor: SECTION_COLORS[6],
    link: "/tented-camp-sustainability",
    linkLabel: "Explore Beyond Reforestation",
    stats: [
      { value: "100%", label: "Renewable Energy" },
      { value: "CST 5", label: "Certified" },
      { value: "Zero", label: "Single-Use Plastic" },
    ],
    blogUrl: "/journal",
    blogTitle: "Pioneering Sustainable Luxury",
    verticalOverlayButtons: {
      top: { explore: "", reserve: "", exploreLink: "" },
      bottom: { explore: "Our Sloth Sanctuary", reserve: "", exploreLink: "/tented-camp-sustainability" },
    },
  },
  {
    id: "wellness",
    label: "Wellness",
    headline: "Volcanic\nHealing",
    body: "Thermal springs heated by the volcano itself, open-air spa treatments surrounded by birdsong, and yoga platforms overlooking the forest canopy. Wellness at Tented Camp is powered by the earth beneath your feet.\n\nSurrender to the rhythm of the rainforest , from mineral-rich thermal soaks at dawn to guided breathwork sessions as the howler monkeys call through the canopy. Here, healing is not a treatment but a way of being.",
    verticalSrc: "/manus-storage/tented-wellness-vertical-v3_f9c311f7.mp4",
    horizontalSrc: "/manus-storage/tented-wellness-16x9_d70aeb22.mp4",
    verticalIsVideo: true,
    horizontalIsVideo: true,
    verticalRatio: "720/960",
    horizontalRatio: "16/9",
    verticalLoop: true,
    bgColor: SECTION_COLORS[6],
    nextBgColor: SECTION_COLORS[7],
    link: "/costa-rica-wellness",
    linkLabel: "Nurtured by Nature",
    overlayOnVideo: true,
    stats: [
      { value: "7", label: "Thermal Springs" },
      { value: "Open Air", label: "Spa Treatments" },
      { value: "Volcanic", label: "Healing Waters" },
    ],
  },
];

/* ── Review break goes here ── */

const SECTIONS_AFTER_REVIEW: CascadeSectionData[] = [
  {
    id: "gastronomy",
    label: "Forest to Table",
    headline: "Forest\nto Table",
    body: "From Mediterranean-inspired cuisine to the freshest local ingredients, Ayla brings a refined yet relaxed dining experience to the heart of the rainforest. Each dish celebrates Costa Rica's biodiversity with seasonal menus that change with the harvest.\n\nAt Henry's Bar, craft cocktails made with local spirits and tropical botanicals set the tone for unforgettable evenings. Small plates from the garden, a terrace floating above the treetops, and the warm glow of the volcano at sunset , this is where stories are shared and memories are made.",
    verticalSrc: "/manus-storage/Ayla_NayaraTentedCamp_11_ff056724.jpeg",
    horizontalSrc: "/manus-storage/HenrysBar(1)_189a43b4.jpg",
    verticalIsVideo: false,
    horizontalIsVideo: false,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    hideH: true,
    bgColor: SECTION_COLORS[7],
    nextBgColor: SECTION_COLORS[8],
    link: "/tented-camp/gastronomy",
    linkLabel: "Explore Henry's Bar",
    textLink: "/tented-camp/gastronomy",
    textLinkLabel: "Explore Forest to Table",
    verticalOverlayButtons: {
      top: { explore: "Ayla", reserve: "", exploreLink: "#" },
      bottom: { explore: "Ayla", reserve: "", exploreLink: "#" },
    },
  },
  {
    id: "nayara-by-night",
    label: "Nayara by Night",
    headline: "The Jungle\nAfter Dark",
    body: "Join our resident naturalists on a nocturnal frog safari through the rainforest canopy, where red-eyed tree frogs, glass frogs, and poison dart frogs emerge under torchlight. Then follow the fireflies along volcanic trails as the jungle reveals its most intimate secrets , a world that only comes alive after dark.",
    verticalSrc: "/manus-storage/tented-night-frogs-vertical_13b54b09.mp4",
    verticalIsVideo: true,
    verticalRatio: "3/4",
    verticalLoop: true,
    horizontalSrc: "/manus-storage/by-night-horizontal_1b49ceb7.mp4",
    horizontalIsVideo: true,
    horizontalRatio: "16/9",
    horizontalLoop: true,
    overlayOnVideo: true,
    bgColor: "#000000",
    nextBgColor: "#000000",
    textLink: "/curated-excursions",
    textLinkLabel: "Explore Night Frog Tour",
  },
];

/* ── Journal break goes here ── */

const SECTIONS_AFTER_JOURNAL: CascadeSectionData[] = [
  {
    id: "adventure",
    label: "Adventure",
    headline: "Into the\nCanopy",
    body: "Zipline through the treetops, kayak volcanic lakes, or join a night safari to discover the rainforest's nocturnal world. Adventure at Tented Camp is immersive, guided, and unforgettable.",
    verticalSrc: ASSETS.advV,
    horizontalSrc: ASSETS.advH,
    verticalIsVideo: false,
    horizontalIsVideo: false,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[8],
    nextBgColor: SECTION_COLORS[9],
  },
  {
    id: "spa",
    label: "The Spa",
    headline: "Canopy\nSanctuary",
    body: "Suspended between earth and sky, our spa treatments blend ancient Costa Rican traditions with modern wellness. Volcanic mud wraps, rainforest aromatherapy, and thermal soaks restore body and spirit.",
    verticalSrc: ASSETS.spaV,
    horizontalSrc: ASSETS.spaH,
    verticalIsVideo: false,
    horizontalIsVideo: false,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[9],
    nextBgColor: SECTION_COLORS[10],
  },
];

/* ── Gallery assets converted to cascade sections ── */
const SECTIONS_GALLERY: CascadeSectionData[] = [
  {
    id: "residence",
    label: "The Residence",
    headline: "Private\nRetreat",
    body: "Our exclusive Residence offers the ultimate in privacy and space , a standalone villa with its own pool, living areas, and dedicated staff. Designed for families and groups seeking the full Tented Camp experience with complete seclusion.",
    verticalSrc: ASSETS.galleryVideo2,
    horizontalSrc: ASSETS.galleryImg3,
    verticalIsVideo: false,
    horizontalIsVideo: false,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[11],
    nextBgColor: SECTION_COLORS[12],
  },
  {
    id: "henrys-bar",
    label: "Henry's Bar",
    headline: "Cocktails\nAbove the Canopy",
    body: "Named after our founder, Henry's Bar is the social heart of Tented Camp. Craft cocktails made with local spirits, small plates from the garden, and a terrace that floats above the treetops , the perfect place to watch the volcano glow at sunset.",
    verticalSrc: ASSETS.galleryVideo1,
    horizontalSrc: ASSETS.galleryImg2,
    verticalIsVideo: false,
    horizontalIsVideo: false,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[12],
    nextBgColor: SECTION_COLORS[13],
  },
  {
    id: "tented-residence",
    label: "Tented Residence",
    headline: "Canvas &\nVolcano Views",
    body: "The Tented Residence is our most exclusive accommodation , soaring canvas ceilings, handcrafted wood details, and floor-to-ceiling openings that frame the Arenal Volcano. A private estate with multiple bedrooms, dedicated staff, and unparalleled privacy.",
    verticalSrc: ASSETS.galleryImg5,
    horizontalSrc: ASSETS.galleryImg6,
    verticalIsVideo: false,
    horizontalIsVideo: false,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[13],
    nextBgColor: SECTION_COLORS[14],
  },
  {
    id: "camp-life",
    label: "Camp Life",
    headline: "Every Detail\nConsidered",
    body: "From the morning birdsong to the evening fireflies, life at Tented Camp unfolds at nature's pace. Our team anticipates every need , whether it's a private dinner under the stars, a guided night walk, or simply the perfect cup of Costa Rican coffee on your deck.",
    verticalSrc: ASSETS.galleryVideo3,
    horizontalSrc: ASSETS.galleryImg7,
    verticalIsVideo: false,
    horizontalIsVideo: false,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[14],
    nextBgColor: SECTION_COLORS[15],
  },
  {
    id: "rainforest-mornings",
    label: "Rainforest Mornings",
    headline: "First Light\nThrough the Canopy",
    body: "Dawn at Tented Camp is a sensory awakening , howler monkeys call across the valley, mist rises from the volcanic springs, and the first golden light filters through the canopy. Step onto your private deck and watch the rainforest come alive.",
    verticalSrc: ASSETS.cascadeNewV,
    horizontalSrc: ASSETS.galleryImg8,
    verticalIsVideo: false,
    horizontalIsVideo: false,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[15],
    nextBgColor: SECTION_COLORS[16],
  },
  {
    id: "canopy-dusk",
    label: "The Canopy at Dusk",
    headline: "Golden Hour\nAbove the Trees",
    body: "As the sun sets behind Arenal Volcano, the canopy transforms into a theater of color , scarlet macaws return to roost, fireflies begin their nightly dance, and the sky shifts from amber to deep violet. This is the magic hour that defines Tented Camp.",
    verticalSrc: ASSETS.galleryImg9,
    horizontalSrc: ASSETS.galleryImg7,
    verticalIsVideo: false,
    horizontalIsVideo: false,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[16],
    nextBgColor: SECTION_COLORS[17],
  },
  {
    id: "looking-for-frogs",
    label: "Looking for Frogs",
    headline: "Night Safari\nby Torchlight",
    body: "When darkness falls, the real show begins. Armed with headlamps and guided by expert naturalists, guests venture into the rainforest to find red-eyed tree frogs, glass frogs, and the elusive poison dart frog \u2014 tiny jewels glowing against the wet leaves.",
    verticalSrc: `${CDN}/tented-frogs-vertical_3f5476ee.mp4`,
    horizontalSrc: ASSETS.advH,
    verticalIsVideo: true,
    horizontalIsVideo: false,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[17],
    nextBgColor: SECTION_COLORS[18],
  },
  {
    id: "return",
    label: "Until We Return",
    headline: "Until We\nReturn",
    body: "The trail back through the canopy feels different now , slower, more deliberate. Every hanging bridge, every birdsong, every shaft of light through the leaves becomes a memory you\u2019re already holding onto. Tented Camp doesn\u2019t say goodbye. It says: come back.",
    verticalSrc: `${CDN}/tented-return-vertical_1400bdca.mp4`,
    horizontalSrc: ASSETS.galleryVideo3,
    verticalIsVideo: true,
    horizontalIsVideo: false,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[18],
    nextBgColor: SECTION_COLORS[18],
  },
];

/* ═══════════════════════════════════════════════════════════════
   HERO , Cinematic opening video
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const isMobile = useIsMobile();
  const heroVideo = ASSETS.heroDesktop;
  const mobileHeroImage = "/manus-storage/tented-camp-mobile-hero-v2-hq_26d05de5.mp4";
  const mobileHeroIsVideo = true;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        {isMobile ? (
          <NativeVideo src={mobileHeroImage} className="w-full h-full object-cover" loop={false} />
        ) : (
          <BlobVideo
            src={heroVideo}
            className="w-full h-full object-cover"
            hasAudio={true}
            loop={false}
            pillBg="#868B75B3"
            pillColor="#F7F5F0"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none" />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-2xl md:text-[2rem] lg:text-[2.5rem] tracking-wide text-center"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          Luxury Tented Camp Immersed in the Rainforest
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-white/60 text-[11px] md:text-xs tracking-[0.25em] uppercase mt-3"
          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
        >
          Arenal Volcano National Park, Costa Rica
        </motion.p>


      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   GALLERY , Remaining assets
   ═══════════════════════════════════════════════════════════════ */
function GallerySection() {
  const media = [
    { src: ASSETS.galleryVideo1, alt: "Tented Camp experience", isVideo: true },
    { src: ASSETS.galleryVideo2, alt: "Residence tour", isVideo: true },
    { src: ASSETS.galleryVideo3, alt: "Camp overview", isVideo: true },
    { src: ASSETS.galleryImg1, alt: "Tented suite", isVideo: false },
    { src: ASSETS.galleryImg2, alt: "Henry's Bar", isVideo: false },
    { src: ASSETS.galleryImg3, alt: "Residence", isVideo: false },
    { src: ASSETS.galleryImg4, alt: "Residence suite", isVideo: false },
    { src: ASSETS.galleryImg5, alt: "Tent detail", isVideo: false },
    { src: ASSETS.galleryImg6, alt: "Grand tent", isVideo: false },
    { src: ASSETS.galleryImg7, alt: "New area", isVideo: false },
    { src: ASSETS.galleryImg8, alt: "Camp grounds", isVideo: false },
    { src: ASSETS.galleryImg9, alt: "Resort exterior", isVideo: false },
  ];

  return (
    <section
      id="gallery"
      className="py-20 md:py-32 px-6 md:px-10"
      style={{ backgroundColor: SECTION_COLORS[SECTION_COLORS.length - 1] }}
    >
      <div className="max-w-[1200px] mx-auto">
        <AnimateOnScroll variants={fadeUp}>
          <SectionLabel>Gallery</SectionLabel>
        </AnimateOnScroll>
        <TextReveal as="h2" className="mb-12 md:mb-16" delay={0.1}>
          <span
            className="text-2xl md:text-[2rem] lg:text-[2.5rem] tracking-wide"
            style={{ ...display, color: PALETTE.text }}
          >
            Life in the Canopy
          </span>
        </TextReveal>

        <div className="hidden md:grid grid-cols-3 gap-4 md:gap-6">
          {media.map((item, i) => (
            <MediaReveal key={i} delay={i * 0.05}>
              <div className="overflow-hidden" style={{ aspectRatio: "16/10" }}>
                {item.isVideo ? (
                  <NativeVideo src={item.src} className="w-full h-full object-cover" />
                ) : (
                  <img src={item.src} alt={item.alt} className="w-full h-full object-cover" loading="lazy" />
                )}
              </div>
            </MediaReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE , Option C: Cascade with functional breaks woven in
   
   Flow:
   1. Hero
   2. Story → Rooms → Experiences → Wellness (cascade)
   3. ★ Reviews pull-quote break ★
   4. Gastronomy → Wildlife (cascade)
   5. ★ Journal link break ★
   6. Adventure → Spa (cascade)
   7. ★ Getting Here break ★
   8. Gallery
   9. Footer
   ═══════════════════════════════════════════════════════════════ */
/* ═══════════════════════════════════════════════════════════════
   AUTO-SCROLL HOOK
   Smooth requestAnimationFrame scroll at 1.45x base speed.
   Stops when user scrolls/touches or reaches page bottom.
   ═══════════════════════════════════════════════════════════════ */
function useAutoScroll() {
  const isScrollingRef = useRef(false);
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const cleanupRef = useRef<(() => void) | null>(null);
  // Base speed: pixels per millisecond. 1.45 * ~60px/s = 87px/s
  const SPEED = 1.2325 * 60 / 1000; // px per ms (1.45 slowed 15%)

  const stop = useCallback(() => {
    isScrollingRef.current = false;
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
    }
    // Remove interrupt listeners
    if (cleanupRef.current) {
      cleanupRef.current();
      cleanupRef.current = null;
    }
  }, []);

  const start = useCallback(() => {
    if (isScrollingRef.current) return;
    isScrollingRef.current = true;
    lastTimeRef.current = 0;

    const step = (timestamp: number) => {
      if (!isScrollingRef.current) return;
      if (lastTimeRef.current === 0) {
        lastTimeRef.current = timestamp;
        rafRef.current = requestAnimationFrame(step);
        return;
      }
      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;
      const px = delta * SPEED;
      window.scrollBy(0, px);
      // Stop if we've reached the bottom
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 10;
      if (atBottom) {
        stop();
        return;
      }
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);

    // Register interrupt listeners after a grace period so the initial
    // smooth-scroll animation doesn't immediately kill auto-scroll
    setTimeout(() => {
      if (!isScrollingRef.current) return;
      const interrupt = () => stop();
      window.addEventListener("wheel", interrupt, { passive: true });
      window.addEventListener("touchstart", interrupt, { passive: true });
      window.addEventListener("keydown", interrupt, { passive: true });
      cleanupRef.current = () => {
        window.removeEventListener("wheel", interrupt);
        window.removeEventListener("touchstart", interrupt);
        window.removeEventListener("keydown", interrupt);
      };
    }, 500);
  }, [stop, SPEED]);

  // Cleanup on unmount
  useEffect(() => {
    return () => stop();
  }, [stop]);

  return { start, stop, isScrolling: isScrollingRef };
}
export default function TentedCamp() {
  return (
    <div className="relative min-h-screen" style={{ backgroundColor: SECTION_COLORS[0] }}>
      <BrandNavigation pageType="property" sectionNav={[
        { id: "rooms", label: "Private Villas" },
        { id: "experiences", label: "Experiences" },
        { id: "sustainability", label: "Sustainability" },
        { id: "wellness", label: "Wellness" },
        { id: "gastronomy", label: "Gastronomy" },
        { id: "nayara-by-night", label: "By Night" },
        { id: "getting-here", label: "Getting Here" },
      ]} />
      <HeroSection />

      {/* S1: Story (The Camp) */}
      <CascadeSection key={SECTIONS_BEFORE_REVIEW[0].id} section={SECTIONS_BEFORE_REVIEW[0]} index={0} />

      {/* ── One Rainforest, Three Resorts , Three Keys, One Door ── */}
      <OneRainforestCompactTC />

      {/* ── Rooms: Horizontal Slider ── */}
      <RoomSlider
        sectionLabel="Accommodations"
        headline="Luxury Tented Suites"
        description="From intimate canopy retreats to expansive private estates , each tent is a world unto itself."
        rooms={TENTED_CAMP_ROOMS}
        palette={{
          bg: COLOR_A,
          text: PALETTE.text,
          textSecondary: PALETTE.textSecondary,
          primary: PALETTE.primary,
          cardBg: COLOR_B,
          cardBorder: `${PALETTE.primary}20`,
          pillBg: PALETTE.primary,
          pillText: "#FFFFFF",
        }}
      />

      {/* Remaining cascade sections: Experiences → Sustainability → Wellness (skip rooms at index 1) */}
      {SECTIONS_BEFORE_REVIEW.slice(2).map((section, i) => (
        <React.Fragment key={section.id}>
          <CascadeSection section={section} index={i + 2} />
        </React.Fragment>
      ))}
      {SECTIONS_AFTER_REVIEW.map((section, i) => (
        <React.Fragment key={section.id}>
          <CascadeSection
            section={section}
            index={i + SECTIONS_BEFORE_REVIEW.length}
          />
        </React.Fragment>
      ))}

      {/* ★ Reviews below Gastronomy */}
      <ReviewsBreak bgColor={SECTION_COLORS[7]} />

      {/* ★ Getting Here below Reviews */}
      <GettingHereBreak bgColor="#D5D9C4" />
      <ReserveCTA />
      <CrossPropertyCTA
        suggestions={[
          {
            name: "Nayara Alto Atacama",
            chapter: "Where Desert Meets Sky",
            tagline: "From canopy to cosmos , trade rainforest glamping for the driest desert on Earth, with salt flats, geysers, and unmatched stargazing.",
            route: "/alto-atacama",
            image: "/manus-storage/NayaraAltoAtacama_1_38075f4a.jpg",
            video: "/manus-storage/cta-atacama-ultrawide-v2_7749e836.mp4",
            audienceTag: "Families Welcome",
          },
          {
            name: "Nayara Hangaroa",
            chapter: "The Land of Giants",
            tagline: "Two edges of the world , from the rainforest canopy to Easter Island's monumental Moai and Polynesian culture.",
            route: "/hangaroa",
            image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/RapaNui2(1)_179dfb19.jpeg",
            video: "/manus-storage/cta-hangaroa-ultrawide_ed5ffb72.mp4",
            audienceTag: "Families Welcome",
          },
        ]}
        bgColor="#D5D9C4"
        textColor={PALETTE.text}
        textSecondaryColor={PALETTE.textTertiary}
        accentColor={PALETTE.primary}
        dividerColor={PALETTE.divider}
      />
      <Footer bgColor="#868B75" textColor="#FFFFFF" propertyName="Tented Camp" />
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════════
   ONE RAINFOREST — CINEMATIC PANORAMA (TENTED CAMP)
   Three full-height panels side by side, each with a property image.
   Hover expands the panel; property name + tagline appear as overlay.
   On mobile: stacks vertically.
   ═══════════════════════════════════════════════════════════════ */

const CDN_TC = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

const PANORAMA_PANELS = [
  {
    name: "Gardens",
    tagline: "Rainforest Casitas & Villas",
    description: "Intimate casitas and rainforest villas nestled in a 1,400-acre private reserve. Plunge pools, canopy walks, and the sounds of the jungle at your doorstep.",
    badge: null,
    video: "/manus-storage/panel-gardens-16x9_1756d5d5.mp4",
    image: "/manus-storage/poster-gardens_cd7a149e.jpg",
    route: "/gardens",
    accent: "#286241",
  },
  {
    name: "Tented Camp",
    tagline: "Clifftop Tents & Suites",
    description: "Open-air tented suites perched on a volcanic clifftop, each with a private plunge pool fed by natural hot springs and unobstructed views of Arenal Volcano.",
    badge: "You Are Here",
    video: "/manus-storage/panel-tented-16x9-v2_0a79914b.mp4",
    image: "/manus-storage/poster-tented_0bb4a3c9.jpg",
    route: null,
    accent: "#868B75",
  },
  {
    name: "Springs",
    tagline: "Private Hot Springs Villas · Adults Only",
    description: "The world's only Three-Key MICHELIN hotel in Costa Rica. Private volcanic hot spring pools, a floating breakfast, and the most intimate luxury in the rainforest.",
    badge: null,
    video: "/manus-storage/panel-springs-16x9_1ad9b29e.mp4",
    image: "/manus-storage/poster-springs_42fdf73b.jpg",
    route: "/springs",
    accent: "#4B6358",
  },
];

function PanoramaPanel({
  panel,
  index,
  isHovered,
  anyHovered,
  onEnter,
  onLeave,
}: {
  panel: (typeof PANORAMA_PANELS)[number];
  index: number;
  isHovered: boolean;
  anyHovered: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useRef(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inView.current) {
          inView.current = true;
          setTimeout(() => setVisible(true), index * 120);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  // Play on hover, pause on leave (stays on current frame)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isHovered) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isHovered]);

  const inner = (
    <div
      ref={ref}
      className="relative overflow-hidden cursor-pointer"
      style={{
        flex: isHovered ? "1.55 1 0%" : anyHovered ? "0.72 1 0%" : "1 1 0%",
        minHeight: "520px",
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "scale(1.04)",
        transition: `flex 0.7s cubic-bezier(0.77,0,0.175,1), opacity 0.9s ease ${index * 0.12}s, transform 0.9s ease ${index * 0.12}s`,
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* Video background — still on poster until hover, plays on hover */}
      <video
        ref={videoRef}
        src={panel.video}
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: isHovered ? "scale(1.06)" : "scale(1.0)",
          transition: "transform 1.1s cubic-bezier(0.77,0,0.175,1)",
        }}
        poster={panel.image}
      />

      {/* Gradient overlay — always present */}
      <div
        className="absolute inset-0"
        style={{
          background: isHovered
            ? "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.18) 55%, transparent 100%)"
            : "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.08) 60%, transparent 100%)",
          transition: "background 0.6s ease",
        }}
      />

      {/* Vertical divider line (right side, not on last panel) */}
      {index < 2 && (
        <div
          className="absolute top-0 right-0 bottom-0 w-px"
          style={{ backgroundColor: "rgba(255,255,255,0.18)" }}
        />
      )}

      {/* Badge (top-right) */}
      {panel.badge && (
        <div className="absolute top-5 right-5 z-10">
          <span
            className="text-[9px] tracking-[0.18em] uppercase px-3 py-1.5"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              color: "#fff",
              backgroundColor: `${panel.accent}CC`,
              backdropFilter: "blur(6px)",
            }}
          >
            {panel.badge}
          </span>
        </div>
      )}

        {/* Bottom text */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
          <p
            className="text-[10px] tracking-[0.22em] uppercase mb-2"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 500,
              color: "rgba(255,255,255,0.65)",
              opacity: isHovered ? 1 : 0.7,
              transition: "opacity 0.5s ease",
            }}
          >
            {panel.tagline}
          </p>
          <h3
            className="text-xl md:text-2xl lg:text-3xl tracking-wide leading-none"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              color: "#fff",
            }}
          >
            Nayara {panel.name}
          </h3>

          {/* Description — appears on hover */}
          <div
            style={{
              overflow: "hidden",
              maxHeight: isHovered ? "120px" : "0px",
              opacity: isHovered ? 1 : 0,
              transition: "max-height 0.6s ease, opacity 0.5s ease",
            }}
          >
            <p
              className="mt-3 text-[12px] leading-[1.7]"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400, color: "rgba(255,255,255,0.82)" }}
            >
              {panel.description}
            </p>
          </div>

          {/* Explore arrow — only on hover, only for non-current */}
          {panel.route && (
            <div
              style={{
                overflow: "hidden",
                maxHeight: isHovered ? "48px" : "0px",
                opacity: isHovered ? 1 : 0,
                transition: "max-height 0.5s ease, opacity 0.4s ease 0.1s",
              }}
            >
              <p
                className="mt-3 text-[11px] tracking-[0.14em] uppercase flex items-center gap-2"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "rgba(255,255,255,0.85)" }}
              >
                Explore
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </p>
            </div>
          )}
        </div>
    </div>
  );

  return panel.route ? (
    <Link href={panel.route} className="contents">
      {inner}
    </Link>
  ) : (
    <>{inner}</>
  );
}

function OneRainforestCompactTC() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} style={{ backgroundColor: "#EDEEE2" }}>
      {/* ── Header ── */}
      <div
        className="px-6 md:px-10 pt-16 md:pt-20 pb-10 md:pb-12 text-center"
        style={{
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? "none" : "translateY(20px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        <p
          className="text-[10px] tracking-[0.25em] uppercase mb-3"
          style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "rgba(58,42,26,0.55)" }}
        >
          One Rainforest, Three Resorts
        </p>
        <h2
          className="text-2xl md:text-3xl lg:text-4xl tracking-wide"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#3a2a1a" }}
        >
          Three Keys, One Door
        </h2>
        <p
          className="mt-4 text-[13px] md:text-[14px] leading-[1.8] max-w-[520px] mx-auto"
          style={{ fontFamily: "var(--font-body)", color: "rgba(58,42,26,0.7)" }}
        >
          Stay at Tented Camp and the restaurants, spa, hot springs, and experiences of Gardens and Springs are all yours.
        </p>
      </div>

      {/* ── Panorama Panels ── */}
      {/* Desktop: side-by-side flex */}
      <div className="hidden md:flex" style={{ height: "580px" }}>
        {PANORAMA_PANELS.map((panel, i) => (
          <PanoramaPanel
            key={panel.name}
            panel={panel}
            index={i}
            isHovered={hoveredIndex === i}
            anyHovered={hoveredIndex !== null}
            onEnter={() => setHoveredIndex(i)}
            onLeave={() => setHoveredIndex(null)}
          />
        ))}
      </div>

      {/* Mobile: stacked vertically */}
      <div className="flex flex-col md:hidden">
        {PANORAMA_PANELS.map((panel, i) => {
          const inner = (
            <div key={panel.name} className="relative overflow-hidden" style={{ height: "260px" }}>
              <img
                src={panel.image}
                alt={`Nayara ${panel.name}`}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)" }} />
              {panel.badge && (
                <div className="absolute top-4 right-4">
                  <span
                    className="text-[9px] tracking-[0.18em] uppercase px-2.5 py-1"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: "#fff", backgroundColor: `${panel.accent}CC` }}
                  >
                    {panel.badge}
                  </span>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-[9px] tracking-[0.2em] uppercase mb-1" style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "rgba(255,255,255,0.6)" }}>
                  {panel.tagline}
                </p>
                <h3 className="text-lg tracking-wide" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#fff" }}>
                  Nayara {panel.name}
                </h3>
              </div>
            </div>
          );
          return panel.route ? (
            <Link key={panel.name} href={panel.route} className="block">{inner}</Link>
          ) : (
            <div key={panel.name}>{inner}</div>
          );
        })}
      </div>

    </div>
  );
}
