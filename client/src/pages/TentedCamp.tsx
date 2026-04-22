/**
 * NAYARA TENTED CAMP — Arenal, Costa Rica
 * Option C: Cascade with functional breaks woven in
 * Full-bleed edge-to-edge media, canopy gradient
 * Functional breaks: Reviews pull-quote, Journal link, Getting Here
 * woven between cascade sections — not appended at the end
 */
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NativeVideo from "@/components/NativeVideo";
import { useIsMobile } from "@/hooks/useMobile";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import BlobVideo from "@/components/BlobVideo";
import { AwardBadgeStrip } from "@/components/AwardBadges";

import {
  AnimateOnScroll,
  TextReveal,
  MultiLineReveal,
  MediaReveal,
  fadeUp,
  DURATION,
  EASE_CINEMATIC,
} from "@/components/motion";

/* ═══════════════════════════════════════════════════════════════
   PALETTE — "Canopy" gradient: misty green → deep forest
   ═══════════════════════════════════════════════════════════════ */
/* Olive Tree gradient — warm olive-khaki cascade */
const COLOR_A = "#EDEEE2"; // unified olive tint (was bone #F7F5F0)
const COLOR_B = "#EDEEE2"; // soft olive tint
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
  text: "#3B2B26",
  textSecondary: "#67737C",
  textTertiary: "#9A9086",
  primary: "#868B75",
  secondary: "#525642",
  accent: "#9A9086",
  divider: "#E6DFD5",
};

const display = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)" } as const;

/* ═══════════════════════════════════════════════════════════════
   CDN ASSETS
   ═══════════════════════════════════════════════════════════════ */
const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

const ASSETS = {
  heroDesktop: `${CDN}/tented-hero-new_c2f5b543.mp4`,
  heroMobile: `${CDN}/tented_hero_vertical_0834f0e2.mp4`,

  storyV: "/manus-storage/tented-s1-vertical-new_774e62da.mp4",
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

  // S4 horizontal photo — tented camp sunset plunge pool
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
   CASCADE SECTION — Full-bleed desktop, stacked mobile
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
};

function CascadeSection({
  section,
  index,
}: {
  section: CascadeSectionData;
  index: number;
}) {
  const textLeft = index % 2 === 0;

  const horizontalBlock = section.horizontalSrc ? (
    <div className="hidden md:block relative z-[2]" style={{ backgroundColor: section.horizontalFirst ? section.bgColor : section.nextBgColor }}>
      <MediaReveal delay={0.05}>
        <MediaBlock
          src={section.horizontalSrc}
          isVideo={section.horizontalIsVideo}
          ratio={section.horizontalRatio}
          alt={`${section.label} landscape — Nayara Tented Camp`}
          className="w-full"
          loop={section.horizontalLoop}
        />
      </MediaReveal>
    </div>
  ) : null;

  return (
    <section id={section.id}>
      {/* ── Horizontal FIRST if flagged ── */}
      {section.horizontalFirst && horizontalBlock}

      {/* ── Row: Vertical media + Text column ── */}
      <div className="flex flex-col md:flex-row" style={{ backgroundColor: section.bgColor }}>
        {/* Vertical media — on mobile: always after text (order-2), on desktop: alternates */}
        <div className={`w-full md:w-1/2 relative z-[2] order-2 ${textLeft ? "md:order-2" : "md:order-1"}`}>
          <MediaReveal delay={0.1}>
            <MediaBlock
              src={section.verticalSrc}
              isVideo={section.verticalIsVideo}
              ratio={section.verticalRatio}
              alt={`${section.label} — Nayara Tented Camp`}
              loop={section.verticalLoop}
            />
          </MediaReveal>
        </div>

        {/* Text column */}
        <div
          className={`w-full md:w-1/2 flex flex-col justify-start px-8 py-12 md:py-20 md:px-16 lg:px-24 order-1 ${
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
                  style={{ ...display, color: PALETTE.text }}
                >
                  {line}
                </span>
              ))}
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll variants={fadeUp} delay={0.2}>
            <p
              className="text-[15px] leading-[1.85] max-w-[480px]"
              style={{ ...body, color: PALETTE.textSecondary }}
            >
              {section.body}
            </p>
          </AnimateOnScroll>

          {section.link && (
            <AnimateOnScroll variants={fadeUp} delay={0.3}>
              <a
                href={section.link}
                className="inline-block mt-6 text-[11px] tracking-[0.15em] transition-colors hover:opacity-70"
                style={{ ...body, fontWeight: 500, color: PALETTE.primary }}
              >
                {section.linkLabel || "Explore More"} →
              </a>
            </AnimateOnScroll>
          )}

          {section.blogUrl && section.blogTitle && (
            <AnimateOnScroll variants={fadeUp} delay={0.35}>
              <a
                href={section.blogUrl}
                target={section.blogUrl.startsWith("http") ? "_blank" : undefined}
                rel={section.blogUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2.5 mt-8 px-6 py-3 rounded-full border transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                style={{
                  ...body,
                  fontWeight: 500,
                  fontSize: "12px",
                  letterSpacing: "0.08em",
                  color: PALETTE.primary,
                  borderColor: `${PALETTE.primary}30`,
                  backgroundColor: `${PALETTE.primary}08`,
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
            <div className="mt-8">
              <a
                href="/long-form-video"
                className="inline-flex items-center gap-2.5 mb-6 px-6 py-3 rounded-full border transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                style={{
                  ...body,
                  fontWeight: 500,
                  fontSize: "12px",
                  letterSpacing: "0.08em",
                  color: "#fff",
                  borderColor: PALETTE.primary,
                  backgroundColor: `${PALETTE.primary}B3`,
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
                Watch: Pioneering Sustainable Luxury with Leo Ghitis
              </a>
              <img
                src="/manus-storage/badge-strip-tented-camp_c759b53d.png"
                alt="Travel + Leisure World's Best Awards, Leading Hotels of the World, Green Globe Certified"
                className="h-24 md:h-32 lg:h-40 w-auto -ml-4 md:-ml-6 lg:-ml-8"
                loading="lazy"
              />
            </div>
          )}


        </div>
      </div>

      {/* ── Full-width horizontal media AFTER (default) — hidden on mobile ── */}
      {!section.horizontalFirst && horizontalBlock}
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FUNCTIONAL BREAK — Reviews Pull-Quote
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
              — Andrew, TripAdvisor
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
   FUNCTIONAL BREAK — Journal Link
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
            href="https://blog.nayararesorts.com/nayara-arenals-adventures-in-flavor"
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
   FUNCTIONAL BREAK — Getting Here
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
                  style={{ backgroundColor: `${PALETTE.primary}10`, color: PALETTE.primary }}
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
   SECTION DATA — 8 cascade sections
   ═══════════════════════════════════════════════════════════════ */
const SECTIONS_BEFORE_REVIEW: CascadeSectionData[] = [
  {
    id: "story",
    label: "The Camp",
    headline: "Lifted On Stilts\nEye to Eye with Arenal Volcano",
    body: "Where a barren cattle ranch once stood, a thriving rainforest now surrounds you. Open-air tented suites perch on a volcanic clifftop, each with a private plunge pool fed by natural hot springs. The land tells its own story.",
    verticalSrc: ASSETS.storyV,
    horizontalSrc: "/manus-storage/tented-camp-mainpool-new_72169ddd.mp4",
    verticalIsVideo: true,
    horizontalIsVideo: true,
    verticalRatio: "3/4",
    horizontalRatio: "1920/1000",
    horizontalLoop: true,
    bgColor: SECTION_COLORS[1],
    nextBgColor: SECTION_COLORS[1],
    badges: true,
    awards: "tented-camp",
  },
  {
    id: "rooms",
    label: "Accommodations",
    headline: "Life Under\nCanvas",
    body: "Each tented suite is a private sanctuary suspended in the canopy — featuring outdoor rain showers, handcrafted furnishings, and a plunge pool overlooking the volcano. The architecture honors the rainforest while delivering every modern luxury.",
    verticalSrc: "/manus-storage/reel-nayara-life-under-canvas_233054e4.mp4",
    horizontalSrc: "/manus-storage/tented-rooms-horizontal_be5c1652.mp4",
    verticalIsVideo: true,
    horizontalIsVideo: true,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[1],
    nextBgColor: SECTION_COLORS[3],
    link: "/tented-camp/rooms",
    linkLabel: "Explore Rooms",
  },
  {
    id: "experiences",
    label: "Experiences",
    headline: "Discover the Magic\nof the Rainforest",
    body: "Cross hanging bridges through the canopy, rappel down waterfalls, or trek to hidden volcanic hot springs. Every experience at Tented Camp connects you to the raw power and beauty of the Arenal rainforest.",
    verticalSrc: "/manus-storage/tented-experiences-vertical_581ed2b2.mp4",
    horizontalSrc: "/manus-storage/tented-experiences-horizontal-new_312e978e.mp4",
    verticalIsVideo: true,
    horizontalIsVideo: true,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[4],
    nextBgColor: SECTION_COLORS[5],
    link: "/tented-camp/experiences",
    linkLabel: "Explore More",
    blogUrl: "https://blog.nayararesorts.com/the-history-and-science-of-private-villas-hot-springs-plunge-pools",
    blogTitle: "The History & Science of Private Hot Springs Plunge Pools",
    blogIsRead: true,
  },
  {
    id: "sustainability",
    label: "Sustainability",
    headline: "Rooted in\nResponsibility",
    body: "What began as a barren cattle ranch is now a thriving 1,400-acre rainforest reserve. Every decision at Tented Camp — from solar-heated pools to zero single-use plastics — is guided by a simple principle: leave the land better than we found it.",
    verticalSrc: "/manus-storage/tented-sustainability-vertical_51ad5d43.mp4",
    horizontalSrc: "/manus-storage/tented-sustainability-h_34a18e2d.mp4",
    verticalIsVideo: true,
    horizontalIsVideo: true,
    verticalRatio: "3/4",
    horizontalRatio: "13/5",
    bgColor: SECTION_COLORS[5],
    nextBgColor: SECTION_COLORS[6],
    link: "/tented-camp/sustainability",
    linkLabel: "Our Commitment",
  },
  {
    id: "wellness",
    label: "Wellness",
    headline: "Volcanic\nHealing",
    body: "Thermal springs heated by the volcano itself, open-air spa treatments surrounded by birdsong, and yoga platforms overlooking the forest canopy. Wellness at Tented Camp is powered by the earth beneath your feet.",
    verticalSrc: "/manus-storage/tented-wellness-vertical-new_e0367ea8.mp4",
    horizontalSrc: "/manus-storage/tented-wellness-horizontal-new_9bb43043.mp4",
    verticalIsVideo: true,
    horizontalIsVideo: true,
    verticalRatio: "720/960",
    horizontalRatio: "13/5",
    verticalLoop: true,
    bgColor: SECTION_COLORS[6],
    nextBgColor: SECTION_COLORS[7],
    link: "/tented-camp/wellness",
    linkLabel: "Explore More",
  },
];

/* ── Review break goes here ── */

const SECTIONS_AFTER_REVIEW: CascadeSectionData[] = [
  {
    id: "gastronomy",
    label: "A Taste of Place",
    headline: "Farm to\nCanopy",
    body: "Our chefs source ingredients from local farms and our own gardens to create cuisine that celebrates Costa Rica's biodiversity. Dine under the stars at Henry's Bar or enjoy a private dinner on your suite deck.",
    verticalSrc: "/manus-storage/Ayla_NayaraTentedCamp_11_ff056724.jpeg",
    horizontalSrc: "/manus-storage/HenrysBar(1)_189a43b4.jpg",
    verticalIsVideo: false,
    horizontalIsVideo: false,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[7],
    nextBgColor: SECTION_COLORS[8],
    link: "/tented-camp/gastronomy",
    linkLabel: "Explore More",
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
    verticalIsVideo: true,
    horizontalIsVideo: true,
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
    horizontalIsVideo: true,
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
    body: "Our exclusive Residence offers the ultimate in privacy and space — a standalone villa with its own pool, living areas, and dedicated staff. Designed for families and groups seeking the full Tented Camp experience with complete seclusion.",
    verticalSrc: ASSETS.galleryVideo2,
    horizontalSrc: ASSETS.galleryImg3,
    verticalIsVideo: true,
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
    body: "Named after our founder, Henry's Bar is the social heart of Tented Camp. Craft cocktails made with local spirits, small plates from the garden, and a terrace that floats above the treetops — the perfect place to watch the volcano glow at sunset.",
    verticalSrc: ASSETS.galleryVideo1,
    horizontalSrc: ASSETS.galleryImg2,
    verticalIsVideo: true,
    horizontalIsVideo: false,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[12],
    nextBgColor: SECTION_COLORS[13],
  },
  {
    id: "grand-tents",
    label: "Grand Tents",
    headline: "Canvas &\nVolcano Views",
    body: "The Grand Tented Suites are our signature accommodation — soaring canvas ceilings, handcrafted wood details, and floor-to-ceiling openings that frame the Arenal Volcano. Each suite includes a private deck with plunge pool and outdoor shower.",
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
    body: "From the morning birdsong to the evening fireflies, life at Tented Camp unfolds at nature's pace. Our team anticipates every need — whether it's a private dinner under the stars, a guided night walk, or simply the perfect cup of Costa Rican coffee on your deck.",
    verticalSrc: ASSETS.galleryVideo3,
    horizontalSrc: ASSETS.galleryImg7,
    verticalIsVideo: true,
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
    body: "Dawn at Tented Camp is a sensory awakening — howler monkeys call across the valley, mist rises from the volcanic springs, and the first golden light filters through the canopy. Step onto your private deck and watch the rainforest come alive.",
    verticalSrc: ASSETS.cascadeNewV,
    horizontalSrc: ASSETS.galleryImg8,
    verticalIsVideo: true,
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
    body: "As the sun sets behind Arenal Volcano, the canopy transforms into a theater of color — scarlet macaws return to roost, fireflies begin their nightly dance, and the sky shifts from amber to deep violet. This is the magic hour that defines Tented Camp.",
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
    horizontalIsVideo: true,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[17],
    nextBgColor: SECTION_COLORS[18],
  },
  {
    id: "return",
    label: "Until We Return",
    headline: "Until We\nReturn",
    body: "The trail back through the canopy feels different now — slower, more deliberate. Every hanging bridge, every birdsong, every shaft of light through the leaves becomes a memory you\u2019re already holding onto. Tented Camp doesn\u2019t say goodbye. It says: come back.",
    verticalSrc: `${CDN}/tented-return-vertical_1400bdca.mp4`,
    horizontalSrc: ASSETS.galleryVideo3,
    verticalIsVideo: true,
    horizontalIsVideo: true,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[18],
    nextBgColor: SECTION_COLORS[18],
  },
];

/* ═══════════════════════════════════════════════════════════════
   HERO — Plays once, then shows "Enter the Rainforest" CTA
   ═══════════════════════════════════════════════════════════════ */
function HeroSection({ onEnterRainforest }: { onEnterRainforest: () => void }) {
  const isMobile = useIsMobile();
  const heroVideo = isMobile ? ASSETS.heroMobile : ASSETS.heroDesktop;
  const [videoEnded, setVideoEnded] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <BlobVideo
          src={heroVideo}
          className="w-full h-full object-cover"
          hasAudio={true}
          loop={false}
          pillBg="#868B75B3"
          pillColor="#F7F5F0"
          onEnded={() => setVideoEnded(true)}
        />
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

        {/* "Enter the Rainforest" CTA — appears when video ends */}
        <AnimatePresence>
          {videoEnded && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              onClick={onEnterRainforest}
              className="mt-8 group relative flex items-center gap-3 px-8 py-3.5 rounded-full border border-white/30 backdrop-blur-md hover:border-white/60 transition-all duration-500 cursor-pointer"
              style={{ backgroundColor: "rgba(134,139,117,0.4)" }}
            >
              <span
                className="text-white text-[11px] md:text-xs tracking-[0.25em] uppercase group-hover:tracking-[0.35em] transition-all duration-500"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Enter the Rainforest
              </span>
              {/* Downward arrow */}
              <svg
                className="w-3.5 h-3.5 text-white/70 group-hover:text-white group-hover:translate-y-0.5 transition-all duration-500"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   GALLERY — Remaining assets
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
   MAIN PAGE — Option C: Cascade with functional breaks woven in
   
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
  const { start: startAutoScroll } = useAutoScroll();

  const handleEnterRainforest = useCallback(() => {
    // Scroll past the hero first, then start auto-scroll
    const heroHeight = window.innerHeight;
    window.scrollTo({ top: heroHeight, behavior: "smooth" });
    // Start auto-scroll after the smooth scroll settles
    setTimeout(() => {
      startAutoScroll();
    }, 800);
  }, [startAutoScroll]);

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: SECTION_COLORS[0] }}>
      <BrandNavigation pageType="property" />
      <HeroSection onEnterRainforest={handleEnterRainforest} />

      {/* Cascade: Story → Rooms → Experiences → Sustainability → Wellness → Gastronomy */}
      {SECTIONS_BEFORE_REVIEW.map((section, i) => (
        <CascadeSection key={section.id} section={section} index={i} />
      ))}
      {SECTIONS_AFTER_REVIEW.map((section, i) => (
        <CascadeSection
          key={section.id}
          section={section}
          index={i + SECTIONS_BEFORE_REVIEW.length}
        />
      ))}

      {/* ★ Reviews below Gastronomy */}
      <ReviewsBreak bgColor={SECTION_COLORS[7]} />

      {/* ★ Getting Here below Reviews */}
      <GettingHereBreak bgColor={SECTION_COLORS[8]} />

      <Footer bgColor="#868B75" />
    </div>
  );
}
