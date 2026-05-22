/**
 * NAYARA ALTO ATACAMA , Property Home Page
 * Extended gradient cascade: warm sand → deep earth
 * Every available asset shown , no repeats
 * Varied aspect ratios per section, zero-gap between all elements
 */
import { Fragment, type ReactNode } from "react";
import NightSky from "@/components/NightSky";
import { motion } from "framer-motion";
import BlobVideo from "@/components/BlobVideo";
import RoomSlider, { RoomSliderCard } from "@/components/RoomSlider";
import { BOOKING_URLS } from "@/data/booking";
import NativeVideo from "@/components/NativeVideo";
import { useIsMobile } from "@/hooks/useMobile";
import Footer from "@/components/Footer";
import CrossPropertyCTA from "@/components/CrossPropertyCTA";
import BrandNavigation from "@/components/BrandNavigation";
import { properties, type Property } from "@/data/properties";
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

const atacama = properties.find((p: Property) => p.id === "alto-atacama")!;

/* ═══════════════════════════════════════════════════════════════
   PALETTE , Extended "Mars" gradient: warm sand → deep earth
   More sections = more gradient steps
   ═══════════════════════════════════════════════════════════════ */
const COLOR_A = "#F9EBE0"; // light , warm peach sand
const SECTION_COLORS = [
  COLOR_A, // 0 hero
  COLOR_A, // 1 story
  COLOR_A, // 2 rooms
  COLOR_A, // 3 experiences
  COLOR_A, // 4 sustainability
  COLOR_A, // 5 wellness
  COLOR_A, // 6 a taste of place
  COLOR_A, // 7 desert ingredients
  COLOR_A, // 8 the art of plating
  COLOR_A, // 9 sweet finales
  COLOR_A, // 10 dining & stars
  COLOR_A, // 11 stargazing
  COLOR_A, // 12 landscape
  COLOR_A, // 13 wildlife
  COLOR_A, // 14 adventure
  COLOR_A, // 15 dusk
  COLOR_A, // 16 architecture
  COLOR_A, // 17 the pool
  COLOR_A, // 18 flamingo lagoon
  "#6F463D", // 19 nayara by night
];

/* 3-COLOR SYSTEM
   Dark:    #6F463D , nav pills, mute btn (desktop), concierge, footer
   Middle:  #B85C3C , blog pills, CTAs, accents, labels, links
   Light:   #F9EBE0 , all page backgrounds
   Text on light: Espresso #3B2B26 (brand)
   Text on dark:  Bone #F9F6F3 (brand)
*/
const DARK = "#6F463D";
const MIDDLE = "#B85C3C";
const LIGHT = "#F9EBE0";
const ESPRESSO = "#0D0604";
const BONE = "#FFFFFF";

const PALETTE = {
  text: ESPRESSO,
  textSecondary: ESPRESSO,
  textTertiary: `${ESPRESSO}99`,
  primary: DARK,
  accent: MIDDLE,
  divider: `${DARK}25`,
  lightText: BONE,
};

/* ═══════════════════════════════════════════════════════════════
   CDN ASSETS , EVERY Atacama asset, organized by section
   ═══════════════════════════════════════════════════════════════ */
// Removed slow CloudFront CDN , using /manus-storage/ for all media

const ASSETS = {
  // Hero (clip 1 , horizontal 16:9)
  heroDesktop: "/manus-storage/atacama-hero-new_e54af64d.mp4",
  heroMobile: "/manus-storage/atacama-mobile-hero_ace3858c.mp4",

  // Clip 2 , vertical 3:4
  clip2V: "/manus-storage/atacama-s1-vertical-v3_b6fd3496.mp4",

  // Clip 3 , horizontal 16:9
  clip3H: "/manus-storage/atacama-s2-horizontal-v2_347c0422.mp4",

  // Clip 4 , vertical 3:4
  clip4V: "/manus-storage/atacama-s3-vertical_bf21b975.mp4",

  // Clip 5 , horizontal 16:9
  clip5H: "/manus-storage/atacama-accom-h-final_b8107b28.mp4",

  // Clip 6 , vertical 3:4
  clip6V: "/manus-storage/atacama-s1-vertical_0ae9ef8a.mp4",

  // Clip 7 , horizontal 16:9
  clip7H: "/manus-storage/atacama-geysers-h_d266e1ae.mp4",

  // Clip 8 , vertical 3:4
  clip8V: "/manus-storage/clip8-v-trimmed_452e9341.mp4",

  // Section 1 , Story: cascade desert aerial (cropped, no black bars)
  storyV: "/manus-storage/atacama-cascade-2-vertical_00d76fc3.mp4",
  storyH: "/manus-storage/atacama-cascade-1-hero-h_fbfccdb3.mp4",

  // Section 2 , Rooms: cascade hotel property aerial (cropped, no black bars)
  roomsV: "/manus-storage/atacama-cascade-4-accom-v_cdc03eb9.mp4",
  roomsH: "/manus-storage/atacama-accommodations-h_ce136480.mp4",

  // Section 3 , Experiences: cascade salt flat (cropped, no black bars)
  expV: "/manus-storage/mars-on-earth-vertical-v2_5bb7b544.mp4",
  expH: "/manus-storage/atacama-cascade-3-accom-h_3c07c09a.mp4",

  // Section 4 , Sustainability: cascade flamingos (cropped, no black bars)
  susV: "/manus-storage/desert-stewardship-vertical_9f8a3bfb.mp4",
  susH: "/manus-storage/atacama-sus-h-new_71c95f9c.mp4",

  // Section 5 , Wellness: cascade spa/wellness (cropped, no black bars)
  wellV: "/manus-storage/atacama-cascade-2-vertical_00d76fc3.mp4",
  wellH: "/manus-storage/atacama-cascade-1-hero-h_fbfccdb3.mp4",
  wellH2: "/manus-storage/atacama-wellness-h-v2_f00c123e.mp4",
  wellV2: "/manus-storage/atacama-wellness-v-still_4687073b.jpg",

  // Section 6 , Forest to Table: plated dish H
  gastroV: "/manus-storage/atacama-cascade-2-vertical_00d76fc3.mp4",
  gastroH: "/manus-storage/NayaraAltoAtacama_1_38075f4a.jpg",

  // Section 6b , Desert Ingredients: spice jars V + avocado mousse H
  gastro2V: "/manus-storage/atacama-cascade-4-accom-v_cdc03eb9.mp4",
  gastro2H: "/manus-storage/atacama-accommodations-h_ce136480.mp4",

  // Section 6c , The Art of Plating: tuna sashimi V + beetroot dessert H
  gastro3V: "/manus-storage/5E8F3F4E-BF87-4A5F-BBB2-2737E82CE424_ad01d722.jpeg",
  gastro3H: "/manus-storage/96454375-D840-4B02-AEF7-98893DAD18AA_516b1771.jpeg",

  // Section 6d , Sweet Finales: crostini wine V + honeycomb consommé H
  gastro4V: "/manus-storage/AA6682ED-A08D-4F1E-A869-56222938841C_38b364f9.jpeg",
  gastro4H: "/manus-storage/ACDF665C-3B75-4A15-9806-4E325514B1A9_b1da71b1.JPG",

  // Section 6e , Meringue star dessert (H) + Milky Way bus (V, moved here)
  gastro5V: "/manus-storage/atacama-milkyway-bus_88a347bc.jpg",
  gastro5H: "/manus-storage/5F6D022D-5F89-45EF-93CF-878F0A7BCDEF_c678c03f.JPG",







  // Gallery extras
  heroDesktopPhoto: "/manus-storage/4O1A1949-NayaraAltoAtacama-RainbowValley-byBriceFerreStudio(1)_a94c41d0.jpeg",
  propCard: "/manus-storage/prop-atacama_704b4f26.jpg",
};

const ATACAMA_ROOMS: RoomSliderCard[] = [
  {
    id: "quitor",
    label: "Quitor",
    tagline: "Adobe-walled retreat nestled against ancient red rock cliffs",
    guests: "2 Adults",
    video: "",
    photo: "/manus-storage/quitor-room_6867de44.jpg",
    mediaLeft: true,
    exploreLink: "/alto-atacama/rooms",
    bookingUrl: BOOKING_URLS["alto-atacama"],
  },
  {
    id: "catarpe",
    label: "Catarpe",
    tagline: "Panoramic desert views with private heated infinity pool",
    guests: "2 Adults",
    video: "",
    photo: "/manus-storage/tilo-bedroom_0dc2bdea.jpeg",
    mediaLeft: true,
    exploreLink: "/alto-atacama/rooms",
    bookingUrl: BOOKING_URLS["alto-atacama"],
  },
  {
    id: "tilo-suite",
    label: "Tilo Suite",
    tagline: "Premium suites with expansive terraces and desert panoramas",
    guests: "2 Adults + 1 Child",
    video: "",
    photo: "/manus-storage/tilo-pool_8ad0bd6b.jpg",
    mediaLeft: true,
    exploreLink: "/alto-atacama/rooms",
    bookingUrl: BOOKING_URLS["alto-atacama"],
  },
];

const display = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)" } as const;

function SectionLabel({ children, color }: { children: ReactNode; color?: string }) {
  return (
    <p
      className="text-[11px] tracking-[0.2em] mb-4"
      style={{ ...body, fontWeight: 500, color: color || PALETTE.accent }}
    >
      {children}
    </p>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MEDIA COMPONENT , Handles both video and image with proper ratio
   ═══════════════════════════════════════════════════════════════ */
function MediaBlock({
  src,
  alt,
  isVideo,
  aspectRatio,
}: {
  src: string;
  alt: string;
  isVideo: boolean;
  aspectRatio: string;
}) {
  if (!src) return null;
  return (
    <div className="overflow-hidden w-full block leading-[0]" style={{ aspectRatio }}>
      <div className="w-full h-full" style={{ transform: 'scale(1.02)' }}>
        {isVideo ? (
          <NativeVideo src={src} className="w-full h-full object-cover" />
        ) : (
          <img src={src} alt={alt} className="w-full h-full object-cover block" decoding="async" loading="lazy" />
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CASCADE TEXT BLOCK , Extracted for flat interleaved rendering
   ═══════════════════════════════════════════════════════════════ */
function CascadeTextBlock({
  label,
  headline,
  description,
  link,
  linkLabel = "Explore More",
  blogLink,
  blogLinkLabel,
  blogLinkOnVideo = false,
  badges,
  badgeImage,
  isDark = false,
  stats,
  secondDescription,
}: {
  label: string;
  headline: string;
  description: string;
  secondDescription?: string;
  link?: string;
  linkLabel?: string;
  blogLink?: string;
  blogLinkLabel?: string;
  blogLinkOnVideo?: boolean;
  badges?: boolean;
  badgeImage?: string;
  isDark?: boolean;
  stats?: { value: string; label: string }[];
}) {
  const headlineColor = isDark ? BONE : PALETTE.text;
  const bodyColor = isDark ? `${BONE}CC` : PALETTE.textSecondary;
  const labelColor = isDark ? MIDDLE : PALETTE.accent;
  const linkColor = isDark ? MIDDLE : PALETTE.accent;

  return (
    <div className="flex flex-col justify-center">
      <AnimateOnScroll variants={fadeUp}>
        <SectionLabel color={labelColor}>{label}</SectionLabel>
      </AnimateOnScroll>
      <TextReveal as="h2" className="mb-6" delay={0.1}>
        <span
          className="text-2xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-wide"
          style={{ ...display, color: headlineColor }}
        >
          {headline}
        </span>
      </TextReveal>
      <AnimateOnScroll variants={fadeUp} delay={0.3}>
        <p className="text-[15px] leading-[1.8] mb-6" style={{ ...body, color: bodyColor }}>
          {description}
        </p>
        {secondDescription && (
          <p className="text-[15px] leading-[1.8] mb-6" style={{ ...body, color: bodyColor }}>
            {secondDescription}
          </p>
        )}
        {stats && stats.length > 0 && (
          <div className="flex flex-wrap gap-x-8 gap-y-4 mt-2 mb-8 pt-4 border-t" style={{ borderColor: `${PALETTE.accent}30` }}>
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-[26px] leading-none tracking-tight" style={{ ...display, color: isDark ? BONE : PALETTE.text }}>{stat.value}</span>
                <span className="text-[10px] tracking-[0.14em] uppercase mt-1.5" style={{ ...body, fontWeight: 500, color: isDark ? `${BONE}80` : PALETTE.accent }}>{stat.label}</span>
              </div>
            ))}
          </div>
        )}
        {blogLink && !blogLinkOnVideo && (
          isDark ? (
            /* Starfield pill , black, white outline, twinkling stars */
            <a
              href={blogLink}
              {...(blogLink.startsWith('/') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
              className="relative inline-flex items-center gap-2.5 mt-2 mb-6 px-4 py-2.5 rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.02]"
              style={{ ...body, fontWeight: 500, fontSize: "12px", letterSpacing: "0.08em", color: "#ffffff", background: "rgba(0,0,0,0.15)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.45)" }}
            >
              {/* Dense starfield */}
              {[["10%","3%","1px","0s","2.1s"],["20%","8%","1.5px","0.3s","1.8s"],["5%","15%","1px","0.7s","2.4s"],["80%","12%","1.5px","0.1s","2s"],["90%","6%","1px","0.9s","1.7s"],["35%","18%","2px","0.4s","2.3s"],["65%","22%","1px","1.1s","1.9s"],["15%","28%","1px","0.6s","2.2s"],["50%","25%","1.5px","0.2s","2.5s"],["75%","30%","1px","1.3s","1.6s"],["8%","35%","1px","0.5s","2.1s"],["92%","38%","1.5px","0.8s","2s"],["28%","42%","1px","1.5s","1.8s"],["60%","45%","2px","0.3s","2.4s"],["42%","50%","1px","1.0s","2.2s"],["18%","55%","1.5px","0.7s","1.7s"],["82%","52%","1px","0.2s","2.3s"],["55%","58%","1px","1.4s","2s"],["30%","62%","1.5px","0.5s","1.9s"],["70%","65%","1px","0.9s","2.5s"],["12%","70%","1px","1.2s","2.1s"],["88%","68%","1.5px","0.4s","1.8s"],["45%","72%","2px","0.1s","2.4s"],["22%","78%","1px","1.6s","1.6s"],["68%","75%","1px","0.6s","2.2s"],["38%","82%","1.5px","1.1s","2s"],["78%","85%","1px","0.3s","1.9s"],["5%","88%","1px","0.8s","2.3s"],["52%","90%","1.5px","1.4s","2.1s"],["95%","92%","1px","0.2s","1.7s"],["25%","95%","1px","1.0s","2.5s"],["72%","97%","1.5px","0.5s","1.8s"],["48%","10%","1px","1.3s","2.2s"],["33%","33%","1px","0.7s","2s"],["85%","20%","1px","1.5s","1.9s"],["17%","45%","1.5px","0.4s","2.4s"],["62%","60%","1px","1.2s","1.6s"],["40%","77%","1px","0.6s","2.3s"],["58%","92%","1.5px","0.9s","2.1s"],["3%","60%","1px","1.7s","1.8s"],["97%","45%","1px","0.3s","2.5s"],["43%","5%","1.5px","1.1s","2s"],["77%","48%","1px","0.8s","1.7s"],["20%","92%","1px","0.2s","2.2s"],["88%","75%","1.5px","1.4s","1.9s"]].map(([top, left, size, delay, dur], idx) => (
                <span key={idx} className="absolute rounded-full animate-pulse" style={{ top, left, width: size, height: size, background: "white", opacity: 0.4 + (idx % 4) * 0.15, animationDelay: delay, animationDuration: dur }} />
              ))}
              <svg className="relative w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
              </svg>
              <span className="relative">{blogLinkLabel || "Watch the Film"}</span>
            </a>
          ) : (
            <a
              href={blogLink}
              {...(blogLink.startsWith('/') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
              className="inline-flex items-center gap-2.5 mt-2 mb-6 px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
              style={{ ...body, fontWeight: 500, fontSize: "12px", letterSpacing: "0.08em", color: isDark ? BONE : PALETTE.text, backgroundColor: "transparent", border: isDark ? `1px solid ${BONE}50` : `1px solid ${PALETTE.text}40` }}
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
              </svg>
              {blogLinkLabel || "Watch the Film"}
            </a>
          )
        )}
      </AnimateOnScroll>
      {link && (
        <a
          href={link}
          className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full transition-all duration-300 hover:scale-[1.02] w-fit"
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 500,
            fontSize: "11px",
            letterSpacing: "0.15em",
            textTransform: "uppercase" as const,
            color: isDark ? BONE : PALETTE.text,
            backgroundColor: "transparent",
            border: isDark ? `1px solid ${BONE}50` : `1px solid ${PALETTE.text}40`,
          }}
        >
          {linkLabel}
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </a>
      )}
      {badgeImage && (
        <div className="mt-8 hidden md:block">
          <video src="/manus-storage/badge-atacama-correct_054a7823.mp4" autoPlay muted playsInline preload="metadata" className="h-32 lg:h-40 w-auto -ml-8 lg:-ml-10" />
        </div>
      )}
           {badges && (
        <div className="mt-8 hidden md:block">
          <video src="/manus-storage/badge-atacama-correct_054a7823.mp4" autoPlay muted playsInline preload="metadata" className="h-32 lg:h-40 w-auto -ml-8 lg:-ml-10" />
        </div>
      )}
    </div>
  );
}
/* ═══════════════════════════════════════════════════════════════
   CASCADE SECTION , Zero-gap, gradient bg, varied ratios (LEGACY , kept for reference))
   ═══════════════════════════════════════════════════════════════ */
function CascadeSection({
  label,
  headline,
  description,
  verticalSrc,
  horizontalSrc,
  verticalIsVideo,
  horizontalIsVideo,
  verticalRatio,
  horizontalRatio,
  textSide = "left",
  bgColor,
  link,
  linkLabel = "Explore More",
  blogLink,
  blogLinkLabel,
  badges,
  hideH,
  order = "h-first",
  badgeImage,
}: {
  label: string;
  headline: string;
  description: string;
  verticalSrc: string;
  horizontalSrc: string;
  verticalIsVideo: boolean;
  horizontalIsVideo: boolean;
  verticalRatio: string;
  horizontalRatio: string;
  textSide?: "left" | "right";
  bgColor: string;
  link?: string;
  linkLabel?: string;
  blogLink?: string;
  blogLinkLabel?: string;
  badges?: boolean;
  hideH?: boolean;
  order?: "h-first" | "v-first";
  badgeImage?: string;
}) {
  const VerticalMedia = (
    <MediaBlock
      src={verticalSrc}
      alt={headline}
      isVideo={verticalIsVideo}
      aspectRatio={verticalRatio}
    />
  );

  const HorizontalMedia = (
    <MediaBlock
      src={horizontalSrc}
      alt={headline}
      isVideo={horizontalIsVideo}
      aspectRatio={horizontalRatio}
    />
  );

  const TextBlock = (
    <div className="flex flex-col justify-center">
      <AnimateOnScroll variants={fadeUp}>
        <SectionLabel>{label}</SectionLabel>
      </AnimateOnScroll>
      <TextReveal as="h2" className="mb-6" delay={0.1}>
        <span
          className="text-2xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-wide"
          style={{ ...display, color: PALETTE.text }}
        >
          {headline}
        </span>
      </TextReveal>
      <AnimateOnScroll variants={fadeUp} delay={0.3}>
        <p className="text-[15px] leading-[1.8] mb-6" style={{ ...body, color: PALETTE.textSecondary }}>
          {description}
        </p>
        {blogLink && (
          false ? (
            /* Starfield pill , black, white outline, twinkling stars */
            <a
              href={blogLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2.5 mt-2 mb-6 px-4 py-2.5 rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.02]"
              style={{ ...body, fontWeight: 500, fontSize: "12px", letterSpacing: "0.08em", color: "#ffffff", background: "rgba(0,0,0,0.15)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.45)" }}
            >
              {/* Dense starfield */}
              {[["10%","3%","1px","0s","2.1s"],["20%","8%","1.5px","0.3s","1.8s"],["5%","15%","1px","0.7s","2.4s"],["80%","12%","1.5px","0.1s","2s"],["90%","6%","1px","0.9s","1.7s"],["35%","18%","2px","0.4s","2.3s"],["65%","22%","1px","1.1s","1.9s"],["15%","28%","1px","0.6s","2.2s"],["50%","25%","1.5px","0.2s","2.5s"],["75%","30%","1px","1.3s","1.6s"],["8%","35%","1px","0.5s","2.1s"],["92%","38%","1.5px","0.8s","2s"],["28%","42%","1px","1.5s","1.8s"],["60%","45%","2px","0.3s","2.4s"],["42%","50%","1px","1.0s","2.2s"],["18%","55%","1.5px","0.7s","1.7s"],["82%","52%","1px","0.2s","2.3s"],["55%","58%","1px","1.4s","2s"],["30%","62%","1.5px","0.5s","1.9s"],["70%","65%","1px","0.9s","2.5s"],["12%","70%","1px","1.2s","2.1s"],["88%","68%","1.5px","0.4s","1.8s"],["45%","72%","2px","0.1s","2.4s"],["22%","78%","1px","1.6s","1.6s"],["68%","75%","1px","0.6s","2.2s"],["38%","82%","1.5px","1.1s","2s"],["78%","85%","1px","0.3s","1.9s"],["5%","88%","1px","0.8s","2.3s"],["52%","90%","1.5px","1.4s","2.1s"],["95%","92%","1px","0.2s","1.7s"],["25%","95%","1px","1.0s","2.5s"],["72%","97%","1.5px","0.5s","1.8s"],["48%","10%","1px","1.3s","2.2s"],["33%","33%","1px","0.7s","2s"],["85%","20%","1px","1.5s","1.9s"],["17%","45%","1.5px","0.4s","2.4s"],["62%","60%","1px","1.2s","1.6s"],["40%","77%","1px","0.6s","2.3s"],["58%","92%","1.5px","0.9s","2.1s"],["3%","60%","1px","1.7s","1.8s"],["97%","45%","1px","0.3s","2.5s"],["43%","5%","1.5px","1.1s","2s"],["77%","48%","1px","0.8s","1.7s"],["20%","92%","1px","0.2s","2.2s"],["88%","75%","1.5px","1.4s","1.9s"]].map(([top, left, size, delay, dur], idx) => (
                <span key={idx} className="absolute rounded-full animate-pulse" style={{ top, left, width: size, height: size, background: "white", opacity: 0.4 + (idx % 4) * 0.15, animationDelay: delay, animationDuration: dur }} />
              ))}
              <svg className="relative w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
              </svg>
              <span className="relative">{blogLinkLabel || "Watch the Film"}</span>
            </a>
          ) : (
            <a
              href={blogLink}
              {...(blogLink.startsWith('/') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
              className="inline-flex items-center gap-2.5 mt-2 mb-6 px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
              style={{ ...body, fontWeight: 500, fontSize: "12px", letterSpacing: "0.08em", color: PALETTE.text, backgroundColor: "transparent", border: `1px solid ${PALETTE.text}40` }}
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
              </svg>
              {blogLinkLabel || "Watch the Film"}
            </a>
          )
        )}
      </AnimateOnScroll>
      {badgeImage && (
        <div className="mt-8 hidden md:block">
          <video src="/manus-storage/badge-atacama-correct_054a7823.mp4" autoPlay muted playsInline preload="metadata" className="h-32 lg:h-40 w-auto -ml-8 lg:-ml-10" />
        </div>
      )}
      {link && (
        <AnimateOnScroll variants={fadeUp} delay={0.4}>
          <a
            href={link}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] w-fit"
            style={{ ...body, fontWeight: 500, fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: PALETTE.text, backgroundColor: "rgba(58,42,26,0.08)", borderColor: "rgba(58,42,26,0.25)" }}
          >
            {linkLabel || "Explore"}
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </AnimateOnScroll>
      )}
      {badges && (
        <div className="mt-8 hidden md:block">
          <video src="/manus-storage/badge-atacama-correct_054a7823.mp4" autoPlay muted playsInline preload="metadata" className="h-32 lg:h-40 w-auto -ml-8 lg:-ml-10" />
        </div>
      )}
    </div>
  );

  return (
    <section style={{ backgroundColor: bgColor }}>
      {/* === DESKTOP: Alternating H/V order to prevent same-orientation stacking === */}
      <div className="hidden md:block">
        {/* V+Text first when order is v-first */}
        {order === "v-first" && (
          <div className="flex">
            {textSide === "left" ? (
              <>
                <div className="w-1/2 flex items-center">
                  <div className="px-10 lg:px-16 xl:px-20 py-16">
                    {TextBlock}
                  </div>
                </div>
                <div className="w-1/2">
                  <MediaReveal delay={0.2}>{VerticalMedia}</MediaReveal>
                </div>
              </>
            ) : (
              <>
                <div className="w-1/2">
                  <MediaReveal delay={0.2}>{VerticalMedia}</MediaReveal>
                </div>
                <div className="w-1/2 flex items-center">
                  <div className="px-10 lg:px-16 xl:px-20 py-16">
                    {TextBlock}
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* H row */}
        {!hideH && (
          <div className="w-full block leading-[0]">
            <MediaReveal delay={0.1}>{HorizontalMedia}</MediaReveal>
          </div>
        )}

        {/* V+Text after H when order is h-first */}
        {order === "h-first" && (
          <div className="flex -mt-px">
          {textSide === "left" ? (
            <>
              <div className="w-1/2 flex items-center">
                <div className="px-10 lg:px-16 xl:px-20 py-16">
                  {TextBlock}
                </div>
              </div>
              <div className="w-1/2">
                <MediaReveal delay={0.2}>{VerticalMedia}</MediaReveal>
              </div>
            </>
          ) : (
            <>
              <div className="w-1/2">
                <MediaReveal delay={0.2}>{VerticalMedia}</MediaReveal>
              </div>
              <div className="w-1/2 flex items-center">
                <div className="px-10 lg:px-16 xl:px-20 py-16">
                  {TextBlock}
                </div>
              </div>
            </>
          )}
        </div>
        )}
      </div>

      {/* === MOBILE: Stacked layout (unchanged for now) === */}
      <div className="md:hidden px-5">
        <div className="pt-10 pb-6">{TextBlock}</div>
        <MediaReveal delay={0.1}>{VerticalMedia}</MediaReveal>
      </div>
    </section>
  );
}
/* ═══════════════════════════════════════════════════════════════
   SECTION DATA , All 11 cascade sections
   ═══════════════════════════════════════════════════════════════ */
const CASCADE_SECTIONS = [
  {
    label: "The Property",
    headline: "Life in an Oasis",
    description: `${atacama.heroSubtitle} Nayara Alto Atacama is an otherworldly sanctuary in the world's driest desert, where the landscape resembles Mars itself. Surrounded by multicolored mountains, salt flats, and endless horizons, this luxury oasis offers stargazing, desert adventures, and world-class wellness.`,
    secondDescription: "A desert lodge in the driest desert on Earth, where salt flats, geysers, and the clearest night skies in the Southern Hemisphere converge. Two Michelin Keys.",
    vSrc: ASSETS.clip2V,
    hSrc: "",
    vVideo: true, hVideo: false,
    vRatio: "3/4", hRatio: "16/9",

    textSide: "left" as const,
    blogLink: "/blog/atacama-oasis",
    blogLinkLabel: "Read: Atacama Desert's True Oasis",
    badges: false,
    badgeImage: "/manus-storage/badge-atacama-correct_054a7823.mp4",
  },
  {
    label: "Accommodations",
    headline: "Desert Suites",
    description: "Each suite is a private sanctuary with panoramic desert views, heated infinity pools, and direct access to the Atacama landscape. Designed for ultimate comfort and contemplation.",
    vSrc: ASSETS.clip4V,
    hSrc: ASSETS.clip5H,
    vVideo: true, hVideo: true,
    vRatio: "3/4", hRatio: "16/9",
    textSide: "right" as const,
    link: "/alto-atacama/rooms", linkLabel: "Explore Rooms",
    badges: false,
  },
  {
    label: "Experiences",
    headline: "Mars on Earth",
    description: "NASA scientists have trained here. Geologists call it the closest thing on Earth to the surface of Mars. The Atacama Desert , hyper-arid, mineral-rich, and ancient beyond reckoning , is not a backdrop. It is the experience itself. At Nayara Alto Atacama, every excursion is guided by local experts who have spent lifetimes reading this landscape: its salt crusts, its volcanic craters, its silence.",
    vSrc: ASSETS.expV,
    hSrc: "/manus-storage/mars-on-earth-horizontal_8827fcd2.mp4",
    vVideo: true, hVideo: true,
    vRatio: "3/4", hRatio: "16/9",
    textSide: "left" as const,
    link: "/alto-atacama/experiences",
    linkLabel: "Explore Experiences",
    blogLink: "/blog/atacama-mars",
    blogLinkLabel: "Read: Why the Atacama Is Mars on Earth",
    blogLinkOnVideo: true,
    badges: false,
    overlayOnVideo: true,
  },
  {
    label: "Sustainability",
    headline: "Desert Stewardship",
    description: "As the only luxury hotel in the Atacama certified with the S Seal of Sustainable Tourism, Nayara Alto Atacama proves that even in the harshest environments, luxury and responsibility coexist. Solar energy, adobe architecture, and 100% water reuse honor the desert and its communities.",
    vSrc: ASSETS.susV,
    hSrc: ASSETS.susH,
    vVideo: true, hVideo: true,
    vRatio: "3/4", hRatio: "16/9",
    textSide: "right" as const,
    link: "/alto-atacama/sustainability",
    linkLabel: "Explore Beyond Sustainability",
    blogLink: "https://www.youtube.com/watch?v=6cfkWsqWWc8",
    blogLinkLabel: "Watch Atacama Sustainability",
    blogLinkOnVideo: true,
    blogLinkVariants: [
      { label: "🇺🇸 English", url: "https://www.youtube.com/watch?v=6cfkWsqWWc8" },
      { label: "🇪🇸 Español", url: "https://www.youtube.com/watch?v=H9VxyDgv31U" },
    ],
    stats: [
      { value: "100%", label: "Solar Energy" },
      { value: "S Seal", label: "Certified" },
      { value: "0%", label: "Water Waste" },
    ],
    badges: false,
    hideH: true,
  },
  {
    label: "Wellness",
    headline: "Desert Renewal",
    description: "Our spa draws on ancestral Atacameño healing traditions and the desert's mineral-rich waters. Surrender to treatments designed around the rhythms of this ancient landscape.",
    vSrc: "/manus-storage/atacama-wellness-vertical_7c5980de.mp4",
    hSrc: ASSETS.wellH2,
    vVideo: true, hVideo: true,
    vRatio: "3/4", hRatio: "16/9",
    textSide: "right" as const,
    link: "/alto-atacama/wellness",
    linkLabel: "Explore Nature-Based Wellness",
    badges: false,
    overlayOnVideo: true,
  },
  {
    label: "Gastronomy",
    headline: "Desert to Table",
    description: "Alto Atacama's culinary program transforms the Atacama's ancient terroir into an extraordinary dining experience. Using indigenous ingredients , quinoa, chañar, rica-rica herbs, and Andean potatoes , our chefs craft dishes that honor the land and its people. Every meal is a journey through flavor, altitude, and tradition.",
    vSrc: "/manus-storage/atacama-gastronomy-vertical_7882b831.jpeg",
    hSrc: "/manus-storage/atacama-restaurant-interior_b3e2536a.jpg",
    vVideo: false, hVideo: false,
    vRatio: "3/4", hRatio: "16/9",
    textSide: "left" as const,
    link: "/alto-atacama/gastronomy",
    linkLabel: "Explore Desert to Table",
    badges: false,
    hFirst: false,
    hideH: true,
  },
  {
    label: "By Night",
    headline: "The Clearest Skies on Earth",
    description: "At 2,400 meters in the driest desert on the planet, Alto Atacama offers some of the most pristine stargazing conditions anywhere. The Milky Way arcs overhead in impossible detail , no telescope required. Our observatory and guided night excursions reveal constellations, nebulae, and the Southern Cross in breathtaking clarity.",
    vSrc: "/manus-storage/atacama-bynight-telescope_95ffaa70.jpg",
    hSrc: "/manus-storage/atacama-by-night-horizontal_ae34aea4.mp4",
    vVideo: false, hVideo: true,
    vRatio: "3/4", hRatio: "16/9",
    textSide: "left" as const,
    link: "/alto-atacama/stargazing",
    linkLabel: "Explore On-Site Stargazing",
    badges: false,
    isDarkSection: true,
    bgOverride: "#000000",
    blogLinkInternal: true,
    overlayOnVideo: true,
  },
];

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE , Extended gradient cascade, all touching, color flow
   ═══════════════════════════════════════════════════════════════ */
export default function AltoAtacama() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: SECTION_COLORS[0] }}>
      <LocalBusinessSchema
        name="Nayara Alto Atacama"
        description="Luxury desert resort in the Atacama Desert with stargazing, thermal springs, and adventure experiences."
        url="https://nayaraaltoatacama.com"
        image="https://nayararesorts.manus.space"
        address={{
          streetAddress: "Camino a Socaire s/n",
          addressLocality: "San Pedro de Atacama",
          addressRegion: "Antofagasta",
          addressCountry: "CL",
          postalCode: "1410000",
        }}
        geo={{
          latitude: -22.9127,
          longitude: -68.1988,
        }}
        telephone="+56 55 257 8570"
        email="reservations@nayaraaltoatacama.com"
        awards={["Michelin Guide 2 Keys", "Travel & Leisure World's Best Awards"]}
      />
      <BreadcrumbListSchema items={[
        { name: "Home", url: "https://nayararesorts.manus.space" },
        { name: "Nayara Alto Atacama", url: "https://nayaraaltoatacama.com" },
      ]} />
      <BrandNavigation pageType="property" sectionNav={[
        { id: "accommodations", label: "Private Villas" },
        { id: "experiences", label: "Experiences" },
        { id: "sustainability", label: "Sustainability" },
        { id: "wellness", label: "Wellness" },
        { id: "gastronomy", label: "Gastronomy" },
        { id: "by-night", label: "By Night" },
        { id: "getting-here", label: "Getting Here" },
      ]} />
      <HeroSection />

      {/* === FLAT INTERLEAVED CASCADE ===
         After Hero(H), the pattern is: V+Text → H → V+Text → H → ...
         Each section contributes one V+Text block and one H block.
         V+Text always comes before its own H, ensuring no H touches H
         and no V touches V. */}
      {CASCADE_SECTIONS.map((section, i) => {
        /* Insert RoomSlider after the first section (story) */
        const showRoomSlider = i === 1;
        const bg = (section as any).bgOverride || SECTION_COLORS[i + 1] || SECTION_COLORS[SECTION_COLORS.length - 1];
        const isHidden = (section as any).hideH;
        const isHFirst = (section as any).hFirst;
        const isHideV = (section as any).hideV;

        const isDarkSection = !!(section as any).isDarkSection;
        const isOverlay = !!(section as any).overlayOnVideo;

        const VTextRow = isHideV ? null : (
          <div className="hidden md:block relative z-[1]" style={{ marginTop: '-1px' }}>
            <div className="flex">
              {section.textSide === "left" ? (
                <>
                  <div className="w-1/2 flex items-center relative overflow-hidden">
                    {isDarkSection && <NightSky />}
                    <div className="relative z-10 px-10 lg:px-16 xl:px-20 py-16">
                      <CascadeTextBlock
                        label={section.label}
                        headline={section.headline}
                        description={section.description}
                        secondDescription={(section as any).secondDescription}
                        link={section.link}
                        linkLabel={section.linkLabel}
                        blogLink={(section as any).blogLink}
                        blogLinkLabel={(section as any).blogLinkLabel}
                        blogLinkOnVideo={!!(section as any).blogLinkOnVideo}
                        badges={section.badges}
                        badgeImage={(section as any).badgeImage}
                        isDark={isDarkSection}
                        stats={(section as any).stats}
                      />
                    </div>
                  </div>
                  <div className="w-1/2 relative">
                    <MediaReveal delay={0.2}>
                      <MediaBlock
                        src={section.vSrc}
                        alt={section.headline}
                        isVideo={section.vVideo}
                        aspectRatio={section.vRatio}
                      />
                    </MediaReveal>
                    {(section as any).blogLinkOnVideo && (section as any).blogLink && (
                      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-6 pointer-events-none z-10">
                        <a
                          href={(section as any).blogLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pointer-events-auto inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02]"
                          style={{ ...body, fontWeight: 500, fontSize: "12px", letterSpacing: "0.08em", color: BONE, background: "transparent", border: `1px solid ${BONE}60` }}
                        >
                          <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                          </svg>
                          {(section as any).blogLinkLabel || "Watch the Film"}
                        </a>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="w-1/2 relative">
                    <MediaReveal delay={0.2}>
                      <MediaBlock
                        src={section.vSrc}
                        alt={section.headline}
                        isVideo={section.vVideo}
                        aspectRatio={section.vRatio}
                      />
                    </MediaReveal>
                    {(section as any).blogLinkOnVideo && (section as any).blogLink && (
                      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-6 pointer-events-none z-10">
                        <a
                          href={(section as any).blogLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pointer-events-auto inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02]"
                          style={{ ...body, fontWeight: 500, fontSize: "12px", letterSpacing: "0.08em", color: BONE, background: "transparent", border: `1px solid ${BONE}60` }}
                        >
                          <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                          </svg>
                          {(section as any).blogLinkLabel || "Watch the Film"}
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="w-1/2 flex items-center relative overflow-hidden">
                    {isDarkSection && <NightSky />}
                    <div className="relative z-10 px-10 lg:px-16 xl:px-20 py-16">
                      <CascadeTextBlock
                        label={section.label}
                        headline={section.headline}
                        description={section.description}
                        secondDescription={(section as any).secondDescription}
                        link={section.link}
                        linkLabel={section.linkLabel}
                        blogLink={(section as any).blogLink}
                        blogLinkLabel={(section as any).blogLinkLabel}
                        blogLinkOnVideo={!!(section as any).blogLinkOnVideo}
                        badges={section.badges}
                        badgeImage={(section as any).badgeImage}
                        isDark={isDarkSection}
                        stats={(section as any).stats}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        );

        const HRow = !isHidden ? (
          <div className="hidden md:block w-full relative" style={{ marginTop: '-1px' }}>
            <MediaReveal delay={0.1}>
              <MediaBlock
                src={section.hSrc}
                alt={section.headline}
                isVideo={section.hVideo}
                aspectRatio={section.hRatio}
              />
            </MediaReveal>
            {section.link && (
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center pb-10 pointer-events-none">
                <a
                  href={section.link}
                  className="pointer-events-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-full border backdrop-blur-md transition-all duration-300 hover:scale-[1.03] w-fit"
                  style={{ ...body, fontWeight: 500, fontSize: "11px", letterSpacing: "0.15em", color: "#fff", backgroundColor: "rgba(255,255,255,0.12)", borderColor: "rgba(255,255,255,0.25)", textTransform: "uppercase" }}
                >
                  {section.linkLabel || "Explore More"}
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        ) : null;


        const sectionId = section.label.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

        /* Replace the Accommodations cascade section with the RoomSlider */
        if (showRoomSlider) {
          return (
            <Fragment key={i}>
              <ProgramsSection />
              <div id="accommodations">
                <RoomSlider
                  sectionLabel="Accommodations"
                  headline="Desert Suites"
                  description="Each suite is a private sanctuary with panoramic desert views, heated infinity pools, and direct access to the Atacama landscape."
                  rooms={ATACAMA_ROOMS}
                  forceVideoLeft={true}
                  hideArrows={false}
                  palette={{
                    bg: COLOR_A,
                    text: PALETTE.text,
                    textSecondary: PALETTE.textSecondary,
                    primary: MIDDLE,
                    cardBg: LIGHT,
                    cardBorder: `${MIDDLE}20`,
                    pillBg: MIDDLE,
                    pillText: "#FFFFFF",
                  }}
                />
              </div>
            </Fragment>
          );
        }

        /* === OVERLAY VARIANT: Full-width video with text overlaid === */
        if (isOverlay) {
          return (
            <Fragment key={i}>
              <section id={sectionId} style={{ backgroundColor: bg }}>
                {/* Desktop: Full-width 16:9 video with text overlay */}
                <div className="hidden md:block relative w-full" style={{ marginTop: '-1px' }}>
                  <MediaReveal delay={0.1}>
                    <MediaBlock
                      src={section.hSrc}
                      alt={section.headline}
                      isVideo={section.hVideo}
                      aspectRatio="16/9"
                    />
                  </MediaReveal>
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />
                  {/* Text overlay at bottom-left */}
                  <div className="absolute bottom-0 left-0 right-0 p-10 lg:p-16 xl:p-20 pointer-events-none">
                    <AnimateOnScroll variants={fadeUp}>
                      <SectionLabel color={MIDDLE}>{section.label}</SectionLabel>
                    </AnimateOnScroll>
                    <TextReveal as="h2" className="mb-4" delay={0.1}>
                      <span
                        className="text-2xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-wide"
                        style={{ ...display, color: BONE }}
                      >
                        {section.headline}
                      </span>
                    </TextReveal>
                    <AnimateOnScroll variants={fadeUp} delay={0.3}>
                      <p
                        className="text-[15px] leading-[1.8] max-w-2xl mb-6"
                        style={{ ...body, color: `${BONE}CC` }}
                      >
                        {section.description}
                      </p>
                      {section.link && (
                        <a
                          href={section.link}
                          className="pointer-events-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-full border backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] w-fit"
                          style={{ ...body, fontWeight: 500, fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: BONE, backgroundColor: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.35)" }}
                        >
                          {section.linkLabel || "Explore More"}
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                          </svg>
                        </a>
                      )}
                    </AnimateOnScroll>
                  </div>
                </div>

                {/* MOBILE: Text then vertical (no overlay) */}
                <div className="md:hidden px-5">
                  <div className="pt-10 pb-6">
                    <CascadeTextBlock
                      label={section.label}
                      headline={section.headline}
                      description={section.description}
                      secondDescription={(section as any).secondDescription}
                      link={section.link}
                      linkLabel={section.linkLabel}
                      blogLink={(section as any).blogLink}
                      blogLinkLabel={(section as any).blogLinkLabel}
                      blogLinkOnVideo={!!(section as any).blogLinkOnVideo}
                      badges={section.badges}
                      badgeImage={(section as any).badgeImage}
                      isDark={isDarkSection}
                      stats={(section as any).stats}
                    />
                  </div>
                  <div className="relative">
                    <MediaReveal delay={0.1}>
                      <MediaBlock
                        src={section.vSrc}
                        alt={section.headline}
                        isVideo={section.vVideo}
                        aspectRatio={section.vRatio}
                      />
                    </MediaReveal>
                    {(section as any).blogLinkOnVideo && (section as any).blogLink && (
                      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4 pointer-events-none z-10">
                        <a
                          href={(section as any).blogLink}
                          target={(section as any).blogLink.startsWith("http") ? "_blank" : undefined}
                          rel={(section as any).blogLink.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="pointer-events-auto inline-flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 hover:scale-[1.02]"
                          style={{ ...body, fontWeight: 500, fontSize: "11px", letterSpacing: "0.08em", color: BONE, background: "transparent", border: `1px solid ${BONE}60` }}
                        >
                          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                          </svg>
                          {(section as any).blogLinkLabel || "Read More"}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </section>
            </Fragment>
          );
        }

        return (
          <Fragment key={i}>
            <section id={sectionId} style={{ backgroundColor: bg }}>
              {/* Desktop: H-first or V-first ordering */}
              {isHFirst ? (
                <>{HRow}{VTextRow}</>
              ) : (
                <>{VTextRow}{HRow}</>
              )}

              {/* MOBILE: Stacked */}
              <div className="md:hidden px-5">
                <div className="pt-10 pb-6">
                  <CascadeTextBlock
                    label={section.label}
                    headline={section.headline}
                    description={section.description}
                    secondDescription={(section as any).secondDescription}
                    link={section.link}
                    linkLabel={section.linkLabel}
                    blogLink={(section as any).blogLink}
                    blogLinkLabel={(section as any).blogLinkLabel}
                    blogLinkOnVideo={!!(section as any).blogLinkOnVideo}
                    badges={section.badges}
                    badgeImage={(section as any).badgeImage}
                    isDark={isDarkSection}
                    stats={(section as any).stats}
                  />
                </div>
                {!(section as any).hideMobileV && !isHideV && (
                  <div className="relative">
                    <MediaReveal delay={0.1}>
                      <MediaBlock
                        src={section.vSrc}
                        alt={section.headline}
                        isVideo={section.vVideo}
                        aspectRatio={section.vRatio}
                      />
                    </MediaReveal>
                    {(section as any).blogLinkOnVideo && (section as any).blogLink && (
                      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4 pointer-events-none z-10">
                        <a
                          href={(section as any).blogLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pointer-events-auto inline-flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 hover:scale-[1.02]"
                          style={{ ...body, fontWeight: 500, fontSize: "11px", letterSpacing: "0.08em", color: BONE, background: "transparent", border: `1px solid ${BONE}60` }}
                        >
                          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                          </svg>
                          {(section as any).blogLinkLabel || "Watch the Film"}
                        </a>
                      </div>
                    )}
                  </div>
                )}
                {isHideV && !isHidden && (
                  <MediaReveal delay={0.1}>
                    <MediaBlock
                      src={section.hSrc}
                      alt={section.headline}
                      isVideo={section.hVideo}
                      aspectRatio="16/9"
                    />
                  </MediaReveal>
                )}
              </div>
            </section>
          </Fragment>
        );
      })}



      <ReviewsBreak bgColor={LIGHT} />
      <GettingHereSection />
      <ReserveCTA />
      <CrossPropertyCTA
        suggestions={[
          {
            name: "Nayara Tented Camp",
            chapter: "The Luxury Tented Camp",
            tagline: "From desert silence to canopy safari , elevated tents perched on a cliff above Costa Rica's rainforest, with wildlife at dawn.",
            route: "/tented-camp",
            image: "/manus-storage/gal-new-aerial-tents_308da834.PNG",
            video: "/manus-storage/cta-tented-ultrawide_99ae6c78.mp4",
            audienceTag: "Families Welcome",
          },
          {
            name: "Nayara Bocas del Toro",
            chapter: "The Adults-Only Archipelago",
            tagline: "Desert to archipelago , trade salt flats for Caribbean overwater villas on a solar-powered private island.",
            route: "/bocas-del-toro",
            image: "/manus-storage/bocas-resort-24_5778eea7.jpg",
            video: "/manus-storage/cta-bocas-ultrawide_4b5a9425.mp4",
            audienceTag: "Adults Only",
          },
        ]}
        bgColor="#E8D5C4"
        textColor={PALETTE.text}
        textSecondaryColor={PALETTE.textTertiary}
        accentColor={PALETTE.primary}
        dividerColor={PALETTE.divider}
      />
      <Footer bgColor={MIDDLE} textColor="#FFFFFF" propertyName="Alto Atacama" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   THREE PROGRAMS SECTION
   ═══════════════════════════════════════════════════════════════ */
const PROGRAMS = [
  {
    id: "dream",
    name: "Dream",
    tagline: "Rest & Recharge",
    includes: [
      "Accommodation in selected room type",
      "Daily breakfast",
      "Access to all hotel facilities",
      "Heated outdoor pools",
      "Complimentary Wi-Fi",
    ],
  },
  {
    id: "full-experience",
    name: "Full Experience",
    tagline: "Immersive Discovery",
    includes: [
      "All meals (breakfast, lunch & dinner)",
      "One daily guided excursion",
      "Nightly Andean Astronomy session",
      "Open bar (selected beverages)",
      "Access to all hotel facilities",
      "Heated outdoor pools & spa circuit",
    ],
  },
  {
    id: "private-guided",
    name: "Private Guided Experience",
    tagline: "Ultra-Personalized",
    includes: [
      "All meals with premium wine pairing",
      "Private guide & dedicated vehicle",
      "Fully customized daily itinerary",
      "Priority access to all excursions",
      "Private Andean Astronomy session",
      "Spa treatments included",
      "Airport transfers",
    ],
  },
];

function ProgramsSection() {
  return (
    <section className="py-10 md:py-16 px-6 md:px-10" style={{ backgroundColor: COLOR_A }}>
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.25em] uppercase mb-4 text-center"
            style={{ ...body, fontWeight: 500, color: MIDDLE }}
          >
            Choose Your Journey
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-center mb-4"
            style={{ ...display, color: PALETTE.text }}
          >
            Three Programs
          </h2>
          <p
            className="text-sm md:text-base leading-relaxed text-center max-w-2xl mx-auto mb-8"
            style={{ ...body, color: PALETTE.textTertiary }}
          >
            Every stay at Nayara Alto Atacama is tailored to your rhythm. Choose the level of immersion
            that speaks to you , from peaceful rest to fully guided desert exploration.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {PROGRAMS.map((program, i) => (
            <AnimateOnScroll key={program.id} variants={fadeUp} delay={i * 0.1}>
              <div
                className="p-6 md:p-8 h-full flex flex-col"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderBottom: `3px solid ${MIDDLE}`,
                }}
              >
                <p
                  className="text-[10px] tracking-[0.2em] uppercase mb-3"
                  style={{ ...body, fontWeight: 500, color: MIDDLE }}
                >
                  {program.tagline}
                </p>
                <h3
                  className="text-xl md:text-2xl mb-6"
                  style={{ ...display, color: PALETTE.text }}
                >
                  {program.name}
                </h3>
                <ul className="flex-1 space-y-2 mb-6">
                  {program.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        className="w-4 h-4 mt-0.5 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke={MIDDLE}
                        strokeWidth={1.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span
                        className="text-[13px] leading-relaxed"
                        style={{ ...body, color: PALETTE.textTertiary }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => import("sonner").then(({ toast }) => toast("Reservation , Coming Soon"))}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/40 backdrop-blur-md transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    ...body,
                    fontWeight: 500,
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase" as const,
                    color: "#FFFFFF",
                    backgroundColor: "rgba(255,255,255,0.12)",
                    borderColor: "rgba(255,255,255,0.25)",
                  }}
                >
                  Reserve
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FUNCTIONAL BREAK , Guest Voices (Reviews)
   Matches Tented Camp ReviewsBreak pattern exactly
   ═══════════════════════════════════════════════════════════════ */
function ReviewsBreak({ bgColor }: { bgColor: string }) {
  const isDark = bgColor === DARK;
  const textColor = isDark ? BONE : PALETTE.text;
  const subtleColor = isDark ? `${BONE}80` : PALETTE.textTertiary;
  const accentColor = isDark ? MIDDLE : PALETTE.accent;
  const starColor = isDark ? MIDDLE : DARK;

  return (
    <section
      className="py-20 md:py-28 px-8 md:px-16"
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.2em] mb-6"
            style={{ ...body, fontWeight: 500, color: accentColor }}
          >
            Guest Voices
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.1}>
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5" fill={starColor} viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.15}>
          <p
            className="text-[13px] tracking-[0.04em] mb-8"
            style={{ ...body, color: subtleColor }}
          >
            Based on 800+ reviews on TripAdvisor
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.2}>
          <blockquote>
            <p
              className="text-[17px] md:text-[20px] leading-relaxed italic mb-4"
              style={{ ...body, color: textColor }}
            >
              "A once-in-a-lifetime experience. The desert landscape is otherworldly, the stargazing is beyond anything we've ever seen, and the excursions are perfectly curated. The staff made us feel like family from the moment we arrived."
            </p>
            <cite
              className="text-[12px] tracking-[0.08em] not-italic"
              style={{ ...body, color: subtleColor }}
            >
              , Carolina, TripAdvisor
            </cite>
          </blockquote>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.3}>
          <a
            href="https://www.tripadvisor.com/Hotel_Review-g303681-d1063858-Reviews-Alto_Atacama_Desert_Lodge_Spa-San_Pedro_de_Atacama_Antofagasta_Region.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 text-[11px] tracking-[0.15em] transition-opacity hover:opacity-70"
            style={{ ...body, fontWeight: 500, color: accentColor }}
          >
            Read All Reviews →
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO , Full-screen video, cinematic text reveal
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const isMobile = useIsMobile();
  const heroVideo = ASSETS.heroDesktop;
  const mobileHeroImage = "/manus-storage/atacama-mobile-hero_ace3858c.mp4";

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        {isMobile ? (
          <video src={mobileHeroImage} autoPlay muted loop playsInline preload="metadata" className="w-full h-full object-cover" />
        ) : (
          <BlobVideo
          src={heroVideo}
          className="w-full h-full object-cover"
          hasAudio={true}
          pillBg={`${MIDDLE}B3`}
          pillColor={BONE}
        />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none" />
      </div>

      {/* H1 overlaid on video , bottom center */}
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6 md:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl md:text-3xl lg:text-4xl leading-[0.95] tracking-wide text-center"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: BONE }}
        >
          Luxury Atacama Desert Lodge
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="text-[11px] md:text-xs tracking-[0.25em] uppercase mt-3"
          style={{ fontFamily: "var(--font-body)", fontWeight: 400, color: `${BONE}99` }}
        >
          San Pedro de Atacama, Chile
        </motion.p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   OPTION A , STRUCTURED TAIL: Getting Here, Awards, Reserve CTA
   These sections live below the cascade, styled to match the gradient
   ═══════════════════════════════════════════════════════════════ */
function GettingHereSection() {
  const routes = [
    { title: "Fly to Calama (CJC)", description: "Daily flights from Santiago to Calama airport. International connections via Santiago (SCL).", icon: "✈" },
    { title: "Complimentary Transfer", description: "Round-trip airport transfers from Calama to the resort, approximately 1 hour through the desert.", icon: "🚐" },
    { title: "San Pedro de Atacama", description: "The nearest town is just 5 minutes from the property , shops, restaurants, and local culture.", icon: "🗺" },
    { title: "Altitude Guidance", description: "At 2,400m elevation, we schedule excursions progressively. Coca tea available throughout the property.", icon: "⛰" },
  ];
  return (
    <section id="getting-here" className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: DARK }}>
      <div className="max-w-[1200px] mx-auto">
        <AnimateOnScroll variants={fadeUp}>
          <SectionLabel color={MIDDLE}>Getting Here</SectionLabel>
        </AnimateOnScroll>
        <TextReveal as="h2" className="mb-3" delay={0.1}>
          <span className="inline-flex items-center gap-3">
            <svg
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
              style={{ width: "clamp(1.6rem, 2.8vw, 2.2rem)", height: "clamp(1.6rem, 2.8vw, 2.2rem)", color: BONE, opacity: 0.7 }}
              aria-hidden="true"
            >
              <path d="M7 12L16 8.5L28 15L37 11.5V35L28 38.5L16 32L7 35.5V12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
              <line x1="16" y1="8.5" x2="16" y2="32" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2.5 2.5"/>
              <line x1="28" y1="15" x2="28" y2="38.5" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2.5 2.5"/>
              <circle cx="22" cy="22" r="2.2" fill="currentColor" opacity="0.55"/>
            </svg>
            <span className="text-2xl md:text-4xl tracking-wide" style={{ ...display, color: BONE }}>
              Your Journey to the Desert
            </span>
          </span>
        </TextReveal>
        <AnimateOnScroll variants={fadeUp} delay={0.2}>
          <p className="text-[14px] leading-relaxed mb-10 md:mb-14 max-w-xl" style={{ ...body, color: `${BONE}CC` }}>
            Nayara Alto Atacama operates on a full-board basis including all meals, open bar, daily guided excursions, and airport transfers.
          </p>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {routes.map((route, i) => (
            <AnimateOnScroll key={i} variants={fadeUp} delay={i * 0.1}>
              <div className="flex gap-4">
                <div
                  className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-lg"
                  style={{ backgroundColor: `${BONE}15`, color: BONE }}
                >
                  {route.icon}
                </div>
                <div>
                  <h3 className="text-[16px] mb-2" style={{ ...display, fontWeight: 500, color: BONE }}>{route.title}</h3>
                  <p className="text-[13px] leading-relaxed" style={{ ...body, color: `${BONE}AA` }}>{route.description}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        {/* Google Maps Embed */}
        <AnimateOnScroll variants={fadeUp} delay={0.4}>
          <div className="mt-12 md:mt-16 rounded-xl overflow-hidden" style={{ border: `1px solid ${BONE}20` }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.8!2d-68.2177055!3d-22.8895687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96a9741453570e25%3A0x26ac7784d2e7b34e!2sNayara%20Alto%20Atacama!5e0!3m2!1sen!2scl!4v1700000000000!5m2!1sen!2scl"
              className="w-full h-[280px] md:h-[360px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nayara Alto Atacama Location"
            />
            <div className="px-5 py-4" style={{ backgroundColor: `${BONE}08` }}>
              <p className="text-[12px] tracking-wide" style={{ ...body, color: `${BONE}BB` }}>
                Camino Pukará s/n, Ayllu de Quitor, San Pedro de Atacama, Antofagasta Region, Chile
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.5}>
          <div className="mt-10 md:mt-14 p-6 rounded-xl" style={{ backgroundColor: `${BONE}10`, border: `1px solid ${BONE}20` }}>
            <p className="text-[13px] leading-relaxed" style={{ ...body, color: `${BONE}CC` }}>
              <span style={{ fontWeight: 500, color: BONE }}>Need help planning your journey?</span> Our reservations team can arrange all transfers and domestic flights. Contact us at{" "}
              <a href="mailto:reservations@nayararesorts.com" style={{ color: BONE, textDecoration: "underline" }}>reservations@nayararesorts.com</a>{" "}
              or call <a href="tel:+18448652002" style={{ color: BONE, textDecoration: "underline" }}>844-865-2002</a>.
            </p>
          </div>
        </AnimateOnScroll>

        {/* LocalBusiness Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              name: "Nayara Alto Atacama",
              description: "Luxury desert lodge in Chile's Atacama Desert offering all-inclusive experiences with guided excursions, gourmet dining, and stargazing.",
              url: "https://nayararesorts.manus.space/alto-atacama",
              telephone: "+1-844-865-2002",
              email: "reservations@nayararesorts.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Camino Pukará s/n, Ayllu de Quitor",
                addressLocality: "San Pedro de Atacama",
                addressRegion: "Antofagasta",
                addressCountry: "CL",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -23.1833,
                longitude: -68.1833,
              },
              starRating: {
                "@type": "Rating",
                ratingValue: "5",
              },
              priceRange: "$$$$",
              image: "https://nayararesorts.manus.space/manus-storage/atacama-hero.jpg",
              amenityFeature: [
                { "@type": "LocationFeatureSpecification", name: "All-Inclusive Dining", value: true },
                { "@type": "LocationFeatureSpecification", name: "Guided Excursions", value: true },
                { "@type": "LocationFeatureSpecification", name: "Airport Transfers", value: true },
                { "@type": "LocationFeatureSpecification", name: "Spa & Wellness", value: true },
              ],
            }),
          }}
        />
      </div>
    </section>
  );
}

function AwardsSection() {
  const awards = [
    { name: "2 Michelin Keys", description: "An exceptional stay , recognized by the MICHELIN Key guide", year: "2025" },
    { name: "Distinción Turismo Sustentable", description: "Chile's national sustainable tourism certification", year: "2024" },
    { name: "Virtuoso Best of the Best", description: "Recognized among the world's finest luxury properties", year: "2024" },
  ];
  return (
    <section id="awards" className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: LIGHT }}>
      <div className="max-w-[1200px] mx-auto">
        <AnimateOnScroll variants={fadeUp}>
          <SectionLabel>Recognition</SectionLabel>
        </AnimateOnScroll>
        <TextReveal as="h2" className="mb-10 md:mb-14" delay={0.1}>
          <span className="text-2xl md:text-4xl tracking-wide" style={{ ...display, color: PALETTE.text }}>
            Awards & Distinctions
          </span>
        </TextReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, i) => (
            <AnimateOnScroll key={i} variants={fadeUp} delay={i * 0.15}>
              <div className="p-6 rounded-xl" style={{ backgroundColor: DARK }}>
                <p className="text-[11px] tracking-[0.15em] mb-3" style={{ ...body, fontWeight: 500, color: MIDDLE }}>{award.year}</p>
                <h3 className="text-[18px] mb-2" style={{ ...display, fontWeight: 500, color: BONE }}>{award.name}</h3>
                <p className="text-[13px] leading-relaxed" style={{ ...body, color: `${BONE}CC` }}>{award.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReserveCTA() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: LIGHT }}>
      <div className="max-w-[800px] mx-auto text-center">
        <AnimateOnScroll variants={fadeUp}>
          <TextReveal as="h2" className="mb-6" delay={0.1}>
            <span className="text-2xl md:text-4xl lg:text-5xl tracking-wide" style={{ ...display, color: PALETTE.text }}>
              Begin Your Desert Adventure
            </span>
          </TextReveal>
          <p className="text-[15px] leading-[1.8] mb-8" style={{ ...body, color: PALETTE.textSecondary }}>
            All-inclusive luxury in the world's driest desert , stargazing, geothermal wellness, and desert explorations await.
          </p>
          <a
            href="/reserve?property=alto-atacama"
            className="inline-block px-10 py-3.5 rounded-full text-[11px] tracking-[0.2em] transition-all hover:opacity-80"
            style={{ ...body, fontWeight: 500, backgroundColor: PALETTE.accent, color: BONE }}
          >
            Reserve Your Stay
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
