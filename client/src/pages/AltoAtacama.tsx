/**
 * NAYARA ALTO ATACAMA — Property Home Page
 * Extended gradient cascade: warm sand → deep earth
 * Every available asset shown — no repeats
 * Varied aspect ratios per section, zero-gap between all elements
 */
import { Fragment, type ReactNode } from "react";
import { motion } from "framer-motion";
import BlobVideo from "@/components/BlobVideo";
import NativeVideo from "@/components/NativeVideo";
import { useIsMobile } from "@/hooks/useMobile";
import Footer from "@/components/Footer";
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

const atacama = properties.find((p: Property) => p.id === "alto-atacama")!;

/* ═══════════════════════════════════════════════════════════════
   PALETTE — Extended "Mars" gradient: warm sand → deep earth
   More sections = more gradient steps
   ═══════════════════════════════════════════════════════════════ */
const COLOR_A = "#F9EBE0"; // light — warm peach sand
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
   Dark:    #6F463D — nav pills, mute btn (desktop), concierge, footer
   Middle:  #B85C3C — blog pills, CTAs, accents, labels, links
   Light:   #F9EBE0 — all page backgrounds
   Text on light: Espresso #3B2B26 (brand)
   Text on dark:  Bone #F9F6F3 (brand)
*/
const DARK = "#6F463D";
const MIDDLE = "#B85C3C";
const LIGHT = "#F9EBE0";
const ESPRESSO = "#1A0F0A";
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
   CDN ASSETS — EVERY Atacama asset, organized by section
   ═══════════════════════════════════════════════════════════════ */
// Removed slow CloudFront CDN — using /manus-storage/ for all media

const ASSETS = {
  // Hero (clip 1 — horizontal 16:9)
  heroDesktop: "/manus-storage/cropped_clip1_16x9_c0ed748e.mp4",
  heroMobile: "/manus-storage/cropped_clip1_16x9_c0ed748e.mp4",

  // Clip 2 — vertical 3:4
  clip2V: "/manus-storage/atacama-s1-vertical-v3_b6fd3496.mp4",

  // Clip 3 — horizontal 16:9
  clip3H: "/manus-storage/atacama-s2-horizontal-v2_347c0422.mp4",

  // Clip 4 — vertical 3:4
  clip4V: "/manus-storage/atacama-s3-vertical_bf21b975.mp4",

  // Clip 5 — horizontal 16:9
  clip5H: "/manus-storage/atacama-rooms-drone-h_90dc5f36.mp4",

  // Clip 6 — vertical 3:4
  clip6V: "/manus-storage/atacama-s1-vertical_0ae9ef8a.mp4",

  // Clip 7 — horizontal 16:9
  clip7H: "/manus-storage/atacama-geysers-h_d266e1ae.mp4",

  // Clip 8 — vertical 3:4
  clip8V: "/manus-storage/clip8-v-trimmed_452e9341.mp4",

  // Section 1 — Story: cascade desert aerial (cropped, no black bars)
  storyV: "/manus-storage/atacama-cascade-2-vertical_00d76fc3.mp4",
  storyH: "/manus-storage/atacama-cascade-1-hero-h_fbfccdb3.mp4",

  // Section 2 — Rooms: cascade hotel property aerial (cropped, no black bars)
  roomsV: "/manus-storage/atacama-cascade-4-accom-v_cdc03eb9.mp4",
  roomsH: "/manus-storage/atacama-accommodations-h_ce136480.mp4",

  // Section 3 — Experiences: cascade salt flat (cropped, no black bars)
  expV: "/manus-storage/atacama-cascade-2-vertical_00d76fc3.mp4",
  expH: "/manus-storage/atacama-cascade-3-accom-h_3c07c09a.mp4",

  // Section 4 — Sustainability: cascade flamingos (cropped, no black bars)
  susV: "/manus-storage/atacama-sustainability-v_67bf2c3e.mp4",
  susH: "/manus-storage/atacama-sus-h-new_71c95f9c.mp4",

  // Section 5 — Wellness: cascade spa/wellness (cropped, no black bars)
  wellV: "/manus-storage/atacama-cascade-2-vertical_00d76fc3.mp4",
  wellH: "/manus-storage/atacama-cascade-1-hero-h_fbfccdb3.mp4",
  wellH2: "/manus-storage/atacama-wellness-h-v2_f00c123e.mp4",
  wellV2: "/manus-storage/atacama-wellness-v-still_4687073b.jpg",

  // Section 6 — A Taste of Place: plated dish H
  gastroV: "/manus-storage/atacama-cascade-2-vertical_00d76fc3.mp4",
  gastroH: "/manus-storage/NayaraAltoAtacama_1_38075f4a.jpg",

  // Section 6b — Desert Ingredients: spice jars V + avocado mousse H
  gastro2V: "/manus-storage/atacama-cascade-4-accom-v_cdc03eb9.mp4",
  gastro2H: "/manus-storage/atacama-accommodations-h_ce136480.mp4",

  // Section 6c — The Art of Plating: tuna sashimi V + beetroot dessert H
  gastro3V: "/manus-storage/5E8F3F4E-BF87-4A5F-BBB2-2737E82CE424_ad01d722.jpeg",
  gastro3H: "/manus-storage/96454375-D840-4B02-AEF7-98893DAD18AA_516b1771.jpeg",

  // Section 6d — Sweet Finales: crostini wine V + honeycomb consommé H
  gastro4V: "/manus-storage/AA6682ED-A08D-4F1E-A869-56222938841C_38b364f9.jpeg",
  gastro4H: "/manus-storage/ACDF665C-3B75-4A15-9806-4E325514B1A9_b1da71b1.JPG",

  // Section 6e — Meringue star dessert (H) + Milky Way bus (V, moved here)
  gastro5V: "/manus-storage/atacama-milkyway-bus_88a347bc.jpg",
  gastro5H: "/manus-storage/5F6D022D-5F89-45EF-93CF-878F0A7BCDEF_c678c03f.JPG",







  // Gallery extras
  heroDesktopPhoto: "/manus-storage/4O1A1949-NayaraAltoAtacama-RainbowValley-byBriceFerreStudio(1)_a94c41d0.jpeg",
  propCard: "/manus-storage/prop-atacama_704b4f26.jpg",
};

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
   MEDIA COMPONENT — Handles both video and image with proper ratio
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
  return (
    <div className="overflow-hidden w-full block leading-[0]" style={{ aspectRatio }}>
      <div className="w-full h-full" style={{ transform: 'scale(1.02)' }}>
        {isVideo ? (
          <NativeVideo src={src} className="w-full h-full object-cover" />
        ) : (
          <img src={src} alt={alt} className="w-full h-full object-cover block" loading="lazy" />
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CASCADE TEXT BLOCK — Extracted for flat interleaved rendering
   ═══════════════════════════════════════════════════════════════ */
function CascadeTextBlock({
  label,
  headline,
  description,
  link,
  linkLabel = "Explore More",
  blogLink,
  blogLinkLabel,
  badges,
  badgeImage,
  isDark = false,
  stats,
}: {
  label: string;
  headline: string;
  description: string;
  link?: string;
  linkLabel?: string;
  blogLink?: string;
  blogLinkLabel?: string;
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
        {blogLink && (
          <a
            href={blogLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 mt-2 mb-6 px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
            style={{ ...body, fontWeight: 500, fontSize: "12px", letterSpacing: "0.08em", color: BONE, backgroundColor: PALETTE.accent }}
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
            </svg>
            {blogLinkLabel || "Watch the Film"}
          </a>
        )}
      </AnimateOnScroll>
      {badgeImage && (
        <div className="mt-8 hidden md:block">
          <video src="/manus-storage/badge-atacama-correct_054a7823.mp4" autoPlay muted playsInline className="h-32 lg:h-40 w-auto -ml-8 lg:-ml-10" />
        </div>
      )}
           {badges && (
        <div className="mt-8 hidden md:block">
          <video src="/manus-storage/badge-atacama-correct_054a7823.mp4" autoPlay muted playsInline className="h-32 lg:h-40 w-auto -ml-8 lg:-ml-10" />
        </div>
      )}
    </div>
  );
}
/* ═══════════════════════════════════════════════════════════════
   CASCADE SECTION — Zero-gap, gradient bg, varied ratios (LEGACY — kept for reference))
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
          <a
            href={blogLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 mt-2 mb-6 px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
            style={{ ...body, fontWeight: 500, fontSize: "12px", letterSpacing: "0.08em", color: BONE, backgroundColor: PALETTE.accent }}
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
            </svg>
            {blogLinkLabel || "Watch the Film"}
          </a>
        )}
      </AnimateOnScroll>
      {badgeImage && (
        <div className="mt-8 hidden md:block">
          <video src="/manus-storage/badge-atacama-correct_054a7823.mp4" autoPlay muted playsInline className="h-32 lg:h-40 w-auto -ml-8 lg:-ml-10" />
        </div>
      )}
      {link && (
        <AnimateOnScroll variants={fadeUp} delay={0.4}>
          <a
            href={link}
            className="inline-block text-[11px] tracking-[0.15em] transition-colors hover:opacity-70"
            style={{ ...body, fontWeight: 500, color: PALETTE.accent }}
          >
            {linkLabel} →
          </a>
        </AnimateOnScroll>
      )}
      {badges && (
        <div className="mt-8 hidden md:block">
          <video src="/manus-storage/badge-atacama-correct_054a7823.mp4" autoPlay muted playsInline className="h-32 lg:h-40 w-auto -ml-8 lg:-ml-10" />
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
   SECTION DATA — All 11 cascade sections
   ═══════════════════════════════════════════════════════════════ */
const CASCADE_SECTIONS = [
  {
    label: "The Property",
    headline: "Life in an Oasis",
    description: `${atacama.heroSubtitle} Nayara Alto Atacama is an otherworldly sanctuary in the world's driest desert, where the landscape resembles Mars itself. Surrounded by multicolored mountains, salt flats, and endless horizons, this luxury oasis offers stargazing, desert adventures, and world-class wellness.`,
    vSrc: ASSETS.clip2V,
    hSrc: ASSETS.clip3H,
    vVideo: true, hVideo: true,
    vRatio: "3/4", hRatio: "16/9",

    textSide: "left" as const,
    blogLink: "https://blog.nayararesorts.com/best-place-to-stay-atacama-desert-oasis",
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
    description: "From salt flat expeditions to stargazing under the clearest skies on Earth, every excursion is guided by local experts who reveal the Atacama's hidden wonders.",
    vSrc: ASSETS.clip6V,
    hSrc: ASSETS.clip7H,
    vVideo: true, hVideo: true,
    vRatio: "3/4", hRatio: "16/9",
    textSide: "left" as const,
    blogLink: "https://blog.nayararesorts.com/mars-atacama-final-frontier-of-travel",
    blogLinkLabel: "Read: Why the Atacama Is Mars on Earth",
    badges: false,
    hideH: true,
  },
  {
    label: "Experiences",
    headline: "Rainbow Valley",
    description: "A geological marvel painted in ochre, violet, and gold — the Valle del Arcoiris is one of the Atacama's most surreal landscapes. Walk among mineral-stained hillsides at golden hour and witness colours that seem to belong to another world.",
    vSrc: ASSETS.clip6V,
    hSrc: "/manus-storage/atacama-rainbow-valley-h_5c5c5ff9.mp4",
    vVideo: true, hVideo: true,
    vRatio: "3/4", hRatio: "16/9",
    textSide: "right" as const,
    link: "/alto-atacama/experiences",
    linkLabel: "Follow the Rainbow",
    badges: false,
    hFirst: true,
    hideV: true,
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
    blogLinkLabel: "Watch: Desert Stewardship",
    stats: [
      { value: "100%", label: "Solar Energy" },
      { value: "S Seal", label: "Certified" },
      { value: "0%", label: "Water Waste" },
    ],
    badges: false,
  },
  {
    label: "Wellness",
    headline: "Desert Renewal",
    description: "Our spa draws on ancestral Atacameño healing traditions and the desert's mineral-rich waters. Surrender to treatments designed around the rhythms of this ancient landscape.",
    vSrc: ASSETS.clip8V,
    hSrc: ASSETS.wellH2,
    vVideo: true, hVideo: true,
    vRatio: "3/4", hRatio: "1920/812",
    textSide: "right" as const,
    link: "/alto-atacama/wellness",
    linkLabel: "Explore Nature-Based Wellness",
    badges: false,
  },
  {
    label: "A Taste of Place",
    headline: "A Taste of the Desert",
    description: "Alto Atacama's culinary program transforms the Atacama's ancient terroir into an extraordinary dining experience. Using indigenous ingredients — quinoa, chañar, rica-rica herbs, and Andean potatoes — our chefs craft dishes that honor the land and its people. Every meal is a journey through flavor, altitude, and tradition.",
    vSrc: "/manus-storage/atacama-taste-of-place-vertical_e5fa6f59.jpeg",
    hSrc: "/manus-storage/atacama-restaurant-interior_b3e2536a.jpg",
    vVideo: false, hVideo: false,
    vRatio: "3/4", hRatio: "3/2",
    textSide: "left" as const,
    link: "/alto-atacama/gastronomy",
    linkLabel: "Explore Taste of Place",
    badges: false,
    hFirst: false,
    hideMobileV: true,
  },
  {
    label: "Nayara by Night",
    headline: "The Clearest Skies on Earth",
    description: "At 2,400 meters in the driest desert on the planet, Alto Atacama offers some of the most pristine stargazing conditions anywhere. The Milky Way arcs overhead in impossible detail — no telescope required. Our observatory and guided night excursions reveal constellations, nebulae, and the Southern Cross in breathtaking clarity.",
    vSrc: "/manus-storage/atacama-bynight-telescope_95ffaa70.jpg",
    hSrc: "/manus-storage/atacama-bynight-horizontal_b529e449.mp4",
    vVideo: false, hVideo: true,
    vRatio: "3/4", hRatio: "16/9",
    textSide: "left" as const,
    badges: false,
    isDarkSection: true,
    bgOverride: "#000000",
  },
];

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE — Extended gradient cascade, all touching, color flow
   ═══════════════════════════════════════════════════════════════ */
export default function AltoAtacama() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: SECTION_COLORS[0] }}>
      <BrandNavigation pageType="property" />
      <HeroSection />

      {/* === FLAT INTERLEAVED CASCADE ===
         After Hero(H), the pattern is: V+Text → H → V+Text → H → ...
         Each section contributes one V+Text block and one H block.
         V+Text always comes before its own H, ensuring no H touches H
         and no V touches V. */}
      {CASCADE_SECTIONS.map((section, i) => {
        const bg = (section as any).bgOverride || SECTION_COLORS[i + 1] || SECTION_COLORS[SECTION_COLORS.length - 1];
        const isHidden = (section as any).hideH;
        const isHFirst = (section as any).hFirst;
        const isHideV = (section as any).hideV;

        const isDarkSection = !!(section as any).isDarkSection;

        const VTextRow = isHideV ? null : (
          <div className="hidden md:block relative z-[1]" style={{ marginTop: '-1px' }}>
            <div className="flex">
              {section.textSide === "left" ? (
                <>
                  <div className="w-1/2 flex items-center">
                    <div className="px-10 lg:px-16 xl:px-20 py-16">
                      <CascadeTextBlock
                        label={section.label}
                        headline={section.headline}
                        description={section.description}
                        link={section.link}
                        linkLabel={section.linkLabel}
                        blogLink={(section as any).blogLink}
                        blogLinkLabel={(section as any).blogLinkLabel}
                        badges={section.badges}
                        badgeImage={(section as any).badgeImage}
                        isDark={isDarkSection}
                        stats={(section as any).stats}
                      />
                    </div>
                  </div>
                  <div className="w-1/2">
                    <MediaReveal delay={0.2}>
                      <MediaBlock
                        src={section.vSrc}
                        alt={section.headline}
                        isVideo={section.vVideo}
                        aspectRatio={section.vRatio}

                      />
                    </MediaReveal>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-1/2">
                    <MediaReveal delay={0.2}>
                      <MediaBlock
                        src={section.vSrc}
                        alt={section.headline}
                        isVideo={section.vVideo}
                        aspectRatio={section.vRatio}

                      />
                    </MediaReveal>
                  </div>
                  <div className="w-1/2 flex items-center">
                    <div className="px-10 lg:px-16 xl:px-20 py-16">
                      <CascadeTextBlock
                        label={section.label}
                        headline={section.headline}
                        description={section.description}
                        link={section.link}
                        linkLabel={section.linkLabel}
                        blogLink={(section as any).blogLink}
                        blogLinkLabel={(section as any).blogLinkLabel}
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
                  className="pointer-events-auto inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
                  style={{ ...body, fontWeight: 500, fontSize: "11px", letterSpacing: "0.15em", color: BONE, backgroundColor: MIDDLE, textTransform: "uppercase" }}
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


        return (
          <Fragment key={i}>
            <section style={{ backgroundColor: bg }}>
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
                    link={section.link}
                    linkLabel={section.linkLabel}
                    blogLink={(section as any).blogLink}
                    blogLinkLabel={(section as any).blogLinkLabel}
                    badges={section.badges}
                    badgeImage={(section as any).badgeImage}
                    isDark={isDarkSection}
                    stats={(section as any).stats}
                  />
                </div>
                {!(section as any).hideMobileV && !isHideV && (
                  <MediaReveal delay={0.1}>
                    <MediaBlock
                      src={section.vSrc}
                      alt={section.headline}
                      isVideo={section.vVideo}
                      aspectRatio={section.vRatio}
                    />
                  </MediaReveal>
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
      <Footer bgColor={MIDDLE} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FUNCTIONAL BREAK — Guest Voices (Reviews)
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
              — Carolina, TripAdvisor
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
   HERO — Full-screen video, cinematic text reveal
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const isMobile = useIsMobile();
  const heroVideo = isMobile ? ASSETS.heroMobile : ASSETS.heroDesktop;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <BlobVideo
          src={heroVideo}
          className="w-full h-full object-cover"
          hasAudio={true}
          pillBg={`${MIDDLE}B3`}
          pillColor={BONE}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none" />
      </div>

      {/* H1 overlaid on video — bottom center */}
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
   OPTION A — STRUCTURED TAIL: Getting Here, Awards, Reserve CTA
   These sections live below the cascade, styled to match the gradient
   ═══════════════════════════════════════════════════════════════ */
function GettingHereSection() {
  const routes = [
    { title: "Fly to Calama (CJC)", description: "Daily flights from Santiago to Calama airport. International connections via Santiago (SCL).", icon: "✈" },
    { title: "Complimentary Transfer", description: "Round-trip airport transfers from Calama to the resort, approximately 1 hour through the desert.", icon: "🚐" },
    { title: "San Pedro de Atacama", description: "The nearest town is just 5 minutes from the property — shops, restaurants, and local culture.", icon: "🗺" },
    { title: "Altitude Guidance", description: "At 2,400m elevation, we schedule excursions progressively. Coca tea available throughout the property.", icon: "⛰" },
  ];
  return (
    <section id="getting-here" className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: "#E8D5C4" }}>
      <div className="max-w-[1200px] mx-auto">
        <AnimateOnScroll variants={fadeUp}>
          <SectionLabel>Getting Here</SectionLabel>
        </AnimateOnScroll>
        <TextReveal as="h2" className="mb-3" delay={0.1}>
          <span className="inline-flex items-center gap-3">
            <svg
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
              style={{ width: "clamp(1.6rem, 2.8vw, 2.2rem)", height: "clamp(1.6rem, 2.8vw, 2.2rem)", color: DARK, opacity: 0.7 }}
              aria-hidden="true"
            >
              <path d="M7 12L16 8.5L28 15L37 11.5V35L28 38.5L16 32L7 35.5V12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
              <line x1="16" y1="8.5" x2="16" y2="32" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2.5 2.5"/>
              <line x1="28" y1="15" x2="28" y2="38.5" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2.5 2.5"/>
              <circle cx="22" cy="22" r="2.2" fill="currentColor" opacity="0.55"/>
            </svg>
            <span className="text-2xl md:text-4xl tracking-wide" style={{ ...display, color: PALETTE.text }}>
              Your Journey to the Desert
            </span>
          </span>
        </TextReveal>
        <AnimateOnScroll variants={fadeUp} delay={0.2}>
          <p className="text-[14px] leading-relaxed mb-10 md:mb-14 max-w-xl" style={{ ...body, color: PALETTE.textSecondary }}>
            Nayara Alto Atacama operates on a full-board basis including all meals, open bar, daily guided excursions, and airport transfers.
          </p>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {routes.map((route, i) => (
            <AnimateOnScroll key={i} variants={fadeUp} delay={i * 0.1}>
              <div className="flex gap-4">
                <div
                  className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-lg"
                  style={{ backgroundColor: `${DARK}15`, color: DARK }}
                >
                  {route.icon}
                </div>
                <div>
                  <h3 className="text-[16px] mb-2" style={{ ...display, fontWeight: 500, color: PALETTE.text }}>{route.title}</h3>
                  <p className="text-[13px] leading-relaxed" style={{ ...body, color: PALETTE.textSecondary }}>{route.description}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <AnimateOnScroll variants={fadeUp} delay={0.5}>
          <div className="mt-10 md:mt-14 p-6 rounded-xl" style={{ backgroundColor: `${DARK}08` }}>
            <p className="text-[13px] leading-relaxed" style={{ ...body, color: PALETTE.textSecondary }}>
              <span style={{ fontWeight: 500, color: PALETTE.text }}>Need help planning your journey?</span> Our reservations team can arrange all transfers and domestic flights. Contact us at{" "}
              <a href="mailto:reservations@nayararesorts.com" style={{ color: PALETTE.accent, textDecoration: "underline" }}>reservations@nayararesorts.com</a>{" "}
              or call <a href="tel:+18448652002" style={{ color: PALETTE.accent, textDecoration: "underline" }}>844-865-2002</a>.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

function AwardsSection() {
  const awards = [
    { name: "2 Michelin Keys", description: "An exceptional stay — recognized by the MICHELIN Key guide", year: "2025" },
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
            All-inclusive luxury in the world's driest desert — stargazing, geothermal wellness, and desert explorations await.
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
