/*
 * NAYARA GARDENS - Arenal, Costa Rica
 * Visual Identity: "Canopy" palette · Cormorant Garamond · Cinematic motion · Video-first
 */
import { useState, useRef, useEffect } from "react";
import { useCountUp } from "@/hooks/useCountUp";
import { Link } from "wouter";
import { motion } from "framer-motion";
import OneRainforestGardens from "@/components/OneRainforestGardens";
import NativeVideo, { type NativeVideoHandle } from "@/components/NativeVideo";
import { useIsMobile } from "@/hooks/useMobile";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import ByNightCTA from "@/components/ByNightCTA";
import BlobVideo from "@/components/BlobVideo";
import { properties, type Property, type Excursion, type Treatment } from "@/data/properties";
import { costaRicaDining } from "@/data/dining";
import PillarCrossLink from "@/components/PillarCrossLink";
import CrossPropertyCTA from "@/components/CrossPropertyCTA";
import { AwardBadgeStrip } from "@/components/AwardBadges";
import PropertySlider from "@/components/PropertySlider";
import PropertySorter from "@/components/PropertySorter";
import {
  AnimateOnScroll,
  StaggerOnScroll,
  TextReveal,
  MultiLineReveal,
  MediaReveal,
  Parallax,
  DrawLine,
  GradientTransition,
  TintedSection,
  fadeUp,
  fadeIn,
  slideFromLeft,
  slideFromRight,
  scaleReveal,
  staggerContainer,
  DURATION,
  EASE_CINEMATIC,
  EASE_EDITORIAL,
} from "@/components/motion";
import { LocalBusinessSchema, BreadcrumbListSchema } from "@/components/SEOSchemaEnhanced";

const gardens = properties.find((p: Property) => p.id === "gardens")!;

/* ═══════════════════════════════════════════════════════════════
   PALETTE - "Canopy"
   ═══════════════════════════════════════════════════════════════ */
/* Dark Olive palette - warm olive green */
const PALETTE = {
  primary: "#286241",
  secondary: "#1E4D33",
  accent: "#3A7A55",
  gradientStart: "#F6FFEE",
  gradientEnd: "#EDEEE2",
  text: "#1A0F0A",
  textSecondary: "#1A0F0A",
  textTertiary: "#1A0F0A99",
  divider: "#E6DFD5",
};

/* ═══════════════════════════════════════════════════════════════
   CDN ASSETS - Video-first. Photos are fallback.
   ═══════════════════════════════════════════════════════════════ */
const CDN = {
  // Hero
  heroDesktop: "/manus-storage/gardens-hero-with-audio_68878e2b.mp4",

  // Rooms - video replaces s3 photo
  roomsVideo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/gallery-residence-video-v2_2ca0004b.mp4",
  // Rooms landscape
  roomsLandscape: "/manus-storage/gardens-accommodations-horizontal-v4_9c757895.mp4",
  roomsAerial: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/gardens-casita-aerial_e2fb1f8e.jpeg",
  // Experiences section background
  experiencesVideo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hanging-bridges-horizontal_0bf48537.mp4",
  // Sustainability
  sustainabilityVideo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/gardens-waterfall-compressed_d091f130.mp4",

  // Gastronomy
  gastronomyVideo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/gastronomy-hero-edited_3e0a63fa.mp4",
  // Gallery videos
  galleryVideo1: "/manus-storage/gardens-birdwatching-new_c9a2c125.mp4",
  galleryVideo2: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/frog-tour-horizontal_5269da4d.mp4",
  galleryVideo3: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hot-springs-horizontal_2508b725.mp4",
  galleryVideo4: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/gallery-hero-v2_a969e1d4.mp4",
  // Photo fallbacks
  s1: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/5_ac0cb283.jpg",
  s2: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/321D9B07-0FF2-459E-BBA0-623B1062AA25_38485c6d.jpeg",
  s3: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/gardens-s3-casita_4be73573.jpg",
  s4: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/106_d215cd45.jpg",
};

const sectionPadding = "py-20 md:py-32 px-6 md:px-10";
const maxW = "max-w-[1200px] mx-auto";

function SectionLabel({ children, color }: { children: React.ReactNode; color?: string }) {
  return (
    <p
      className="text-[11px] tracking-[0.2em] mb-4"
      style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: color || PALETTE.primary }}
    >
      {children}
    </p>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SLIDER / SORTER PALETTE & DATA
   ═══════════════════════════════════════════════════════════════ */
const SLIDER_PALETTE = {
  bg: PALETTE.gradientEnd,
  text: PALETTE.text,
  textSecondary: PALETTE.textSecondary,
  primary: PALETTE.primary,
  cardBg: "rgba(255,255,255,0.4)",
  cardBorder: `${PALETTE.primary}15`,
  pillBg: `${PALETTE.primary}08`,
  pillActiveBg: PALETTE.primary,
  pillActiveText: "#F7F5F0",
};

const roomCards = [
  { title: "Arenal Casita", description: "Freestanding casitas surrounded by tropical gardens with private plunge pools, outdoor showers, and panoramic Arenal Volcano views. Wake to howler monkeys and fall asleep under a canopy of stars.", tags: ["Private plunge pool", "Volcano views", "Outdoor shower"] },
  { title: "Arenal Suite", description: "Elevated suites offering expansive living spaces with handcrafted furnishings, deep soaking tubs, and wraparound terraces overlooking the rainforest canopy.", tags: ["Wraparound terrace", "Soaking tub", "Rainforest views"] },
  { title: "Family Casita", description: "Spacious two-bedroom casitas designed for families, with interconnected rooms, a shared garden, and easy access to the resort's nature trails and pools.", tags: ["Two bedrooms", "Family-friendly", "Garden access"] },
];

const sustainabilityCards = [
  { title: "Rainforest Conservation", description: "Over 70 acres of protected primary and secondary rainforest surrounding the resort, providing habitat for hundreds of bird species and wildlife." },
  { title: "Organic Gardens", description: "On-site organic gardens supply our five restaurants with fresh herbs, vegetables, and fruits, reducing food miles to nearly zero." },
  { title: "Carbon Neutral Operations", description: "Costa Rica's commitment to carbon neutrality is matched by our own - renewable energy, waste reduction, and reforestation programs." },
  { title: "Community Impact", description: "Employing over 500 local staff and supporting community education, healthcare, and cultural preservation programs in the Arenal region." },
];

const gastronomyCards = (Array.isArray(costaRicaDining) ? costaRicaDining : (costaRicaDining as any).restaurants || [costaRicaDining]).map((r: any) => ({
  title: r.name,
  subtitle: r.cuisine || undefined,
  description: r.description,
  tags: r.atmosphere ? [r.atmosphere] : [],
}));

const experienceCategories = (gardens.excursionCategories || []).filter((c: { id: string; label: string }) => c.id !== "all");
const experienceCards = gardens.excursions.map((e: Excursion) => ({ title: e.name, description: e.description, category: e.category, tags: e.duration ? [e.duration] : [] }));

const wellnessCategories = (gardens.spaCategories || []).filter((c: { id: string; label: string }) => c.id !== "all");
const wellnessCards = gardens.treatments.map((t: Treatment) => ({ title: t.name, description: t.description, category: t.category, tags: t.duration ? [t.duration] : [] }));

export default function Gardens() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.gradientStart }}>
      <LocalBusinessSchema
        name="Nayara Gardens"
        description="Family-friendly luxury rainforest resort at the foot of Arenal Volcano with lush gardens and nature experiences."
        url="https://nayaragardens.com"
        image="https://nayararesorts.manus.space"
        address={{
          streetAddress: "La Fortuna de San Carlos",
          addressLocality: "La Fortuna",
          addressRegion: "Alajuela",
          addressCountry: "CR",
          postalCode: "4417",
        }}
        geo={{
          latitude: 10.465,
          longitude: -84.643,
        }}
        telephone="+1 888 332 2961"
        email="reservations@nayararesorts.com"
        awards={["Michelin Guide 2 Keys"]}
      />
      <BreadcrumbListSchema items={[
        { name: "Home", url: "https://nayararesorts.manus.space" },
        { name: "Nayara Gardens", url: "https://nayaragardens.com" },
      ]} />
      <BrandNavigation pageType="property" />
      <HeroSection />
      <StorySection />

      {/* ══ EXPERIENCES ══ */}
      <GardensExperiencesSection />

      {/* ══ SUSTAINABILITY ══ */}
      <GardensSustainabilityCascade />

      {/* ══ GASTRONOMY ══ */}
      <GardensGastronomyCascade />

      {/* ══ NAYARA BY NIGHT ══ */}
      <ByNightCTA
        verticalSrc="/manus-storage/gardens-bynight-frog_51f8e4f1.jpg"
        verticalIsVideo={false}
        verticalRatio="3/4"
        bgColor="#0D1A12"
        headline={"Fireflies &\nFrog Song"}
        bodyText="As twilight settles over the Arenal rainforest, the gardens come alive with bioluminescent fireflies and the chorus of red-eyed tree frogs. Join our naturalists for a nocturnal safari through the canopy, or simply listen from your private terrace as the jungle reveals its most intimate secrets."
        textSide="left"
        textLink="#"
        textLinkLabel="Explore Nayara by Night"
      />

      {/* ══ REVIEWS ══ */}
      <ReviewsSection />

      {/* ══ GETTING HERE ══ */}
      <GettingHereSection />

      {/* ══ CTA ══ */}
      <ReserveCTA />
      <CrossPropertyCTA
        suggestions={[
          {
            name: "Nayara Alto Atacama",
            chapter: "Where Desert Meets Sky",
            tagline: "Trade rainforest symphony for desert silence — salt flats, geysers, and the clearest night skies on Earth.",
            route: "/alto-atacama",
            image: "/manus-storage/NayaraAltoAtacama_1_38075f4a.jpg",
            video: "/manus-storage/cta-atacama-ultrawide-v2_7749e836.mp4",
            audienceTag: "Families Welcome",
          },
          {
            name: "Nayara Tented Camp",
            chapter: "The Luxury Tented Camp",
            tagline: "From rainforest village to canopy safari — elevated tents perched on a cliff above the jungle, with wildlife at dawn.",
            route: "/tented-camp",
            image: "/manus-storage/gal-new-aerial-tents_308da834.PNG",
            video: "/manus-storage/cta-tented-ultrawide_99ae6c78.mp4",
            audienceTag: "Families Welcome",
          },
        ]}
        bgColor={PALETTE.gradientEnd}
        textColor={PALETTE.text}
        textSecondaryColor={PALETTE.textTertiary}
        accentColor={PALETTE.primary}
        dividerColor={PALETTE.divider}
      />
      <Footer bgColor="#286241" textColor="#FFFFFF" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO - Full-bleed video, cinematic text reveal
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const isMobile = useIsMobile();
  const mobileHeroImage = "/manus-storage/gardens-mobile-hero-v2_ff0c36d3.jpg";
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        {isMobile ? (
          <img src={mobileHeroImage} alt="Nayara Gardens" className="w-full h-full object-cover" />
        ) : (
          <BlobVideo
          src={CDN.heroDesktop}
          className="w-full h-full object-cover"
          hasAudio={true}
          pillBg="#286241B3"
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
          Family-Friendly Rainforest Adventure
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
   STORY - Cascade layout matching Tented Camp:
   Text left + S1 vertical video right, S2 horizontal video below
   ═══════════════════════════════════════════════════════════════ */
function StorySection() {
  return (
    <section id="story">
      {/* ── Row: Text left + Vertical video right ── */}
      <div className="flex flex-col md:flex-row" style={{ backgroundColor: PALETTE.gradientStart }}>
        {/* Text column */}
        <div
          className="w-full md:w-1/2 flex flex-col justify-center px-8 py-12 md:px-16 lg:px-24 md:order-1"
          style={{ backgroundColor: PALETTE.gradientStart }}
        >
          <AnimateOnScroll variants={fadeUp}>
            <SectionLabel>The Property</SectionLabel>
          </AnimateOnScroll>

          <AnimateOnScroll variants={fadeUp} delay={0.1}>
            <h2 className="mb-6 md:mb-8">
              <span
                className="block text-2xl md:text-[2rem] lg:text-[2.5rem] leading-[1.05] tracking-wide"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
              >
                Rich Wildlife, Bold Discovery
              </span>
              <span
                className="block text-2xl md:text-[2rem] lg:text-[2.5rem] leading-[1.05] tracking-wide"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
              >
                Endless Rainforest
              </span>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll variants={fadeUp} delay={0.2}>
            <p
              className="text-[15px] leading-[1.85] max-w-[480px]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
            >
                The rainforest at the foot of Arenal Volcano is alive with possibility. Toucans, frogs, and howler monkeys share the canopy with your villa, and every trail leads somewhere worth discovering. Nayara Gardens welcomes families and couples alike, with experiences guided by naturalists who know this forest by name.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variants={fadeUp} delay={0.3}>
            <p
              className="text-[15px] leading-[1.85] max-w-[480px] mt-4"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
            >
              The original Nayara — a village of private villas and casitas woven into the rainforest canopy at the foot of Arenal Volcano. Family-friendly, with bespoke excursions from hanging bridges to chocolate tours.
            </p>
          </AnimateOnScroll>
          <div className="mt-6 hidden md:block">
            <video
              src="/manus-storage/badge-gardens-final_d47f3adb.mp4"
              autoPlay
              muted
              playsInline
              className="h-32 lg:h-40 w-auto -ml-10 lg:-ml-14"
            />
          </div>
        </div>

        {/* S1 - Toucan still image right */}
        <div className="w-full md:w-1/2 md:order-2">
          <MediaReveal delay={0.1}>
            <div className="overflow-hidden w-full h-full" style={{ aspectRatio: "3/4" }}>
              <img src="/manus-storage/gardens-s1-toucan-v2_75cc661b.jpg" alt="Toucan in the rainforest canopy" className="w-full h-full object-cover" />
            </div>
          </MediaReveal>
        </div>
      </div>

      {/* S2 — One Rainforest, Three Resorts (compact) */}
      <OneRainforestCompact />

      {/* S3 + S4 — Timed Overlay Experiment (pretending this is Tented Camp Accommodations) */}
      <AccommodationsExperiment />
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ONE RAINFOREST COMPACT — Replaces S2 video
   Three Keys, One Door — compact version without images or dining
   ═══════════════════════════════════════════════════════════════ */
const OR_PROPERTIES = [
  { name: "Tented Camp", tagline: "Clifftop Tents & Suites", route: "/tented-camp", accent: "#868B75" },
  { name: "Gardens", tagline: "Rainforest Casitas & Villas", route: "/gardens", accent: "#286241", current: true },
  { name: "Springs", tagline: "Private Hot Springs Villas", route: "/springs", accent: "#3B6E7B", adultsOnly: true },
];

const OR_STATS = [
  { value: 12, label: "Shared Restaurants", suffix: "" },
  { value: 28, label: "Spa Treatments", suffix: "+" },
  { value: 16, label: "Curated Excursions", suffix: "" },
  { value: 1400, label: "Acres of Rainforest", suffix: "" },
];

function CompactStatCounter({ value, label, suffix, delay }: { value: number; label: string; suffix: string; delay: number }) {
  const [display, ref] = useCountUp({ end: value, duration: 2200, delay, suffix });
  return (
    <div className="text-center">
      <span
        ref={ref as React.RefObject<HTMLSpanElement>}
        className="block text-2xl md:text-3xl tracking-tight"
        style={{ fontFamily: "var(--font-display)", fontWeight: 300, color: "#fff" }}
      >
        {display}
      </span>
      <span
        className="block mt-1 text-[10px] tracking-[0.15em] uppercase"
        style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "rgba(255,255,255,0.7)" }}
      >
        {label}
      </span>
    </div>
  );
}

function OneRainforestCompact() {
  return (
    <div className="relative overflow-hidden px-6 md:px-10 py-20 md:py-28" style={{ backgroundColor: "#1a2e1a" }}>
      {/* Bright image background with light overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/manus-storage/gardens-3keys-bg-v3_d1bbc4d7.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.35)" }} />
      </div>
      <div className="relative z-10 max-w-[1000px] mx-auto">
        {/* Header */}
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.2em] mb-3 uppercase text-center"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "rgba(255,255,255,0.8)" }}
          >
            One Rainforest, Three Resorts
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.1}>
          <h2 className="text-center mb-4">
            <span
              className="text-xl md:text-2xl lg:text-3xl leading-[1.05] tracking-wide"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#fff" }}
            >
              Three Keys, One Door
            </span>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.15}>
          <p
            className="text-[14px] leading-[1.8] max-w-[560px] mx-auto text-center mb-8"
            style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.85)" }}
          >
            Stay at Gardens and the restaurants, spa, hot springs, and experiences of Tented Camp and Springs are all yours.
          </p>
        </AnimateOnScroll>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {OR_STATS.map((stat, i) => (
            <CompactStatCounter key={stat.label} {...stat} delay={i * 150} />
          ))}
        </div>

        {/* Three property cards — text only */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {OR_PROPERTIES.map((prop) => (
            prop.current ? (
              <div
                key={prop.name}
                className="relative px-5 py-4 rounded-sm text-center"
                style={{ backgroundColor: "rgba(40,98,65,0.92)", border: "1px solid #286241" }}
              >
                <span
                  className="absolute top-1 right-3 text-[8px] tracking-[0.15em] uppercase px-2 py-0.5 rounded-full"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: "#1a3d28", backgroundColor: "#e8d5b0" }}
                >
                  You Are Here
                </span>
                <h4
                  className="text-base tracking-wide mb-1"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#fff" }}
                >
                  Nayara {prop.name}
                </h4>
                <p
                  className="text-[11px] tracking-[0.08em] uppercase"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "rgba(255,255,255,0.7)" }}
                >
                  {prop.tagline}
                </p>
              </div>
            ) : (
              <Link
                key={prop.name}
                href={prop.route}
                className="relative block px-5 py-4 rounded-sm text-center transition-colors duration-300 hover:brightness-110"
                style={{ backgroundColor: "rgba(40,98,65,0.85)", border: "1px solid #286241" }}
              >
                {prop.adultsOnly && (
                  <span
                    className="absolute top-1 right-3 text-[8px] tracking-[0.15em] uppercase px-2 py-0.5 rounded-full"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: "#1a3d28", backgroundColor: "#e8d5b0" }}
                  >
                    Adults Only
                  </span>
                )}
                <h4
                  className="text-base tracking-wide mb-1"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#fff" }}
                >
                  Nayara {prop.name}
                </h4>
                <p
                  className="text-[11px] tracking-[0.08em] uppercase"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "rgba(255,255,255,0.7)" }}
                >
                  {prop.tagline}
                </p>
              </Link>
            )
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ACCOMMODATIONS EXPERIMENT — Timed overlay buttons on S3 + S4
   S3: Vertical video (left) with timed overlays + text/room cards (right)
   S4: Horizontal video with timed overlays below
   ═══════════════════════════════════════════════════════════════ */
function AccommodationsExperiment() {
  const verticalRef = useRef<NativeVideoHandle>(null);
  const horizontalRef = useRef<NativeVideoHandle>(null);


  const roomLinks = [
    { label: "Arenal Pool Casita", route: "/gardens/rooms/arenal-pool-casita", sqm: "93", guests: "2 Adults + 1 Child" },
    { label: "Rainforest Pool Villa", route: "/gardens/rooms/rainforest-pool-villa", sqm: "186", guests: "2 Adults + 2 Children" },
  ];

  return (
    <>
      {/* ── S3: Vertical video (left) + Text & Room Cards (right) ── */}
      <div className="flex flex-col md:flex-row" style={{ backgroundColor: PALETTE.gradientStart }}>
        {/* S3 vertical video with timed overlay */}
        <div className="w-full md:w-1/2 md:order-1 relative">
          <div className="overflow-hidden w-full h-full" style={{ aspectRatio: "3/4" }}>
            <NativeVideo
              ref={verticalRef}
              src="/manus-storage/gardens-accom-vertical-trimmed_212a6993.mp4"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Explore pill — centered lower */}
          <div className="absolute bottom-[6%] left-0 right-0 flex items-center justify-center z-10">
            <a
              href="/gardens/rooms/arenal-pool-casita"
              className="flex items-center justify-center px-5 py-2 rounded-full backdrop-blur-md shadow-lg transition-colors hover:scale-[1.03] transition-transform"
              style={{
                backgroundColor: "rgba(40,98,65,0.75)",
                fontFamily: "var(--font-body)",
              }}
            >
              <span className="text-white text-[11px] tracking-[0.15em] uppercase font-medium whitespace-nowrap">
                Explore Arenal Pool Casita
              </span>
            </a>
          </div>
        </div>

        {/* Text column + permanent room cards (right) */}
        <div
          className="w-full md:w-1/2 flex flex-col justify-center px-8 py-12 md:px-16 lg:px-24 md:order-2"
          style={{ backgroundColor: PALETTE.gradientStart }}
        >
          <AnimateOnScroll variants={fadeUp}>
            <SectionLabel>Accommodations</SectionLabel>
          </AnimateOnScroll>

          <AnimateOnScroll variants={fadeUp} delay={0.1}>
            <h2 className="mb-6 md:mb-8">
              <span
                className="block text-2xl md:text-[2rem] lg:text-[2.5rem] leading-[1.05] tracking-wide"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
              >
                Private Pool Villas
              </span>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll variants={fadeUp} delay={0.2}>
            <p
              className="text-[15px] leading-[1.85] max-w-[480px] mb-8"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
            >
              Each villa is a private retreat with its own heated plunge pool,
              open-air garden shower, and panoramic views of Arenal Volcano
              framed by lush tropical gardens.
            </p>
          </AnimateOnScroll>

          {/* Room cards with Reserve links underneath each */}
          <AnimateOnScroll variants={fadeUp} delay={0.3}>
            <div className="grid grid-cols-2 gap-3 max-w-[480px]">
              {roomLinks.map((room) => (
                <div key={room.label} className="flex flex-col gap-3">
                  <a
                    href={room.route}
                    className="group relative overflow-hidden rounded-lg p-4 transition-all duration-300 hover:scale-[1.02]"
                    style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
                  >
                    <span
                      className="block text-[13px] tracking-[0.12em] uppercase mb-1"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
                    >
                      {room.label}
                    </span>
                    <span
                      className="block text-[11px] tracking-[0.04em]"
                      style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
                    >
                      {room.sqm} sqm · {room.guests}
                    </span>
                    <span
                      className="absolute bottom-3 right-3 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: PALETTE.textSecondary }}
                    >
                      Explore →
                    </span>
                  </a>
                  <a
                    href="/gardens"
                    className="pl-[18px] text-[11px] tracking-[0.15em] uppercase font-medium underline underline-offset-4 hover:opacity-70 transition-opacity"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: PALETTE.primary,
                    }}
                  >
                    Reserve {room.label.split(" ").pop()}
                  </a>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      {/* ── S4: Horizontal video with timed overlay ── */}
      <div className="relative" style={{ backgroundColor: PALETTE.gradientStart }}>
        <div className="overflow-hidden w-full" style={{ aspectRatio: "16/9" }}>
          <NativeVideo
            ref={horizontalRef}
              src="/manus-storage/gardens-accom-h_3741079f.mp4"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Explore pill — centered lower */}
        <div className="absolute bottom-[6%] left-0 right-0 flex items-center justify-center z-10">
          <a
            href="/gardens/rooms/rainforest-pool-villa"
            className="flex items-center justify-center px-5 py-2 rounded-full backdrop-blur-md shadow-lg transition-colors hover:scale-[1.03] transition-transform"
            style={{
              backgroundColor: "rgba(40,98,65,0.75)",
              fontFamily: "var(--font-body)",
            }}
          >
            <span className="text-white text-[11px] tracking-[0.15em] uppercase font-medium whitespace-nowrap">
              Explore Rainforest Pool Villa
            </span>
          </a>
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ROOMS - Video left, text right, landscape video below
   On tinted background (gradient end)
   ═══════════════════════════════════════════════════════════════ */
function RoomsSection() {
  return (
    <TintedSection backgroundColor={PALETTE.gradientEnd} className={sectionPadding}>
      <div className={maxW}>
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start mb-16">
          {/* Video left - vertical */}
          <div className="md:flex-1 order-2 md:order-1">
            <MediaReveal delay={0.1}>
              <div className="overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <NativeVideo src={CDN.roomsVideo} className="w-full h-full object-cover" />
              </div>
            </MediaReveal>
          </div>
          {/* Text right */}
          <div className="md:flex-1 order-1 md:order-2">
            <AnimateOnScroll variants={fadeUp}>
              <SectionLabel>Accommodations</SectionLabel>
            </AnimateOnScroll>
            <TextReveal as="h2" className="mb-8" delay={0.1}>
              <span
                className="text-2xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-wide"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
              >
                Arenal Casitas
              </span>
            </TextReveal>
            <AnimateOnScroll variants={fadeUp} delay={0.3}>
              <p className="text-[15px] leading-[1.8]" style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}>
                Each freestanding casita is a private sanctuary surrounded by lush tropical gardens. With private plunge pools, outdoor showers, and panoramic volcano views, these accommodations offer an unparalleled blend of luxury and nature immersion. Wake to the sounds of howler monkeys and fall asleep under a canopy of stars.
              </p>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Landscape video below - hidden on mobile */}
        <div className="hidden md:block">
          <MediaReveal delay={0.1}>
            <div className="overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <NativeVideo src={CDN.roomsLandscape} className="w-full h-full object-cover" />
            </div>
          </MediaReveal>
        </div>

        {/* Aerial casita photo */}
        <div className="mt-10 md:mt-16">
          <MediaReveal delay={0.15}>
            <div className="overflow-hidden" style={{ aspectRatio: "16/10" }}>
              <img src={CDN.roomsAerial} alt="Aerial view of a Nayara Gardens casita with private plunge pool" className="w-full h-full object-cover" />
            </div>
          </MediaReveal>
        </div>
      </div>
    </TintedSection>
  );
}

/* ═══════════════════════════════════════════════════════════════
   EXPERIENCES - Full-width video header, then card grid
   ═══════════════════════════════════════════════════════════════ */
function ExperiencesSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = gardens.excursionCategories || [];
  const filtered = activeCategory === "all" ? gardens.excursions : gardens.excursions.filter((e: Excursion) => e.category === activeCategory);

  return (
    <section id="experiences" className="overflow-hidden">
      {/* Cinematic video header */}
      <Parallax offset={60} className="w-full" style={{ aspectRatio: "2/1" }}>
        <div className="relative w-full aspect-[2/1]">
          <NativeVideo src={CDN.experiencesVideo} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none" />
          <div className="absolute bottom-8 md:bottom-12 left-6 md:left-10 z-10">
            <TextReveal as="h2" delay={0.2}>
              <span className="text-white text-2xl md:text-4xl lg:text-5xl tracking-wide" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
                Arenal Adventures
              </span>
            </TextReveal>
          </div>
        </div>
      </Parallax>

      {/* Card grid */}
      <div className={`${sectionPadding}`} style={{ backgroundColor: PALETTE.gradientStart }}>
        <div className={maxW}>
          {categories.length > 0 && (
            <AnimateOnScroll variants={fadeUp}>
              <div className="flex flex-wrap gap-2 mb-10 md:mb-14">
                {categories.map((cat: { id: string; label: string }) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className="px-5 py-2.5 rounded-full text-[11px] tracking-[0.1em] transition-all duration-500"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 500,
                      backgroundColor: activeCategory === cat.id ? PALETTE.primary : "transparent",
                      color: activeCategory === cat.id ? "#F7F5F0" : PALETTE.textSecondary,
                      border: `1px solid ${activeCategory === cat.id ? PALETTE.primary : PALETTE.divider}`,
                    }}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </AnimateOnScroll>
          )}
          <StaggerOnScroll variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((excursion: Excursion) => (
              <motion.div
                key={excursion.id}
                variants={fadeUp}
                className="p-6 md:p-8 transition-all duration-500 hover:translate-y-[-2px]"
                style={{
                  backgroundColor: "rgba(255,255,255,0.4)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "12px",
                  borderBottom: `2px solid ${PALETTE.divider}`,
                }}
                whileHover={{ borderBottomColor: PALETTE.primary }}
              >
                <h3 className="text-[17px] mb-2" style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: PALETTE.text }}>
                  {excursion.name}
                </h3>
                {excursion.duration && (
                  <p className="text-[11px] tracking-[0.1em] mb-4" style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.accent }}>
                    {excursion.duration}{excursion.price ? ` · ${excursion.price}` : ""}
                  </p>
                )}
                <p className="text-[13px] leading-[1.7]" style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}>
                  {excursion.description}
                </p>
              </motion.div>
            ))}
          </StaggerOnScroll>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SUSTAINABILITY - Video background with overlay cards
   ═══════════════════════════════════════════════════════════════ */
function SustainabilitySection() {
  const initiatives = [
    { title: "Rainforest Conservation", desc: "Over 70 acres of protected primary and secondary rainforest surrounding the resort, providing habitat for hundreds of bird species and wildlife." },
    { title: "Organic Gardens", desc: "On-site organic gardens supply our five restaurants with fresh herbs, vegetables, and fruits, reducing food miles to nearly zero." },
    { title: "Carbon Neutral Operations", desc: "Costa Rica's commitment to carbon neutrality is matched by our own - renewable energy, waste reduction, and reforestation programs." },
    { title: "Community Impact", desc: "Employing over 500 local staff and supporting community education, healthcare, and cultural preservation programs in the Arenal region." },
  ];

  return (
    <TintedSection backgroundColor={PALETTE.gradientEnd}>
      <div className="relative overflow-hidden">
        {/* Background video with heavy overlay */}
        <div className="absolute inset-0">
          <NativeVideo src={CDN.sustainabilityVideo} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(75, 94, 60, 0.85)" }} />
        </div>

        <div className={`relative z-10 ${sectionPadding}`}>
          <div className={maxW}>
            <AnimateOnScroll variants={fadeUp}>
              <SectionLabel color="rgba(255,255,255,0.5)">Sustainability</SectionLabel>
            </AnimateOnScroll>
            <TextReveal as="h2" className="mb-12 md:mb-16" delay={0.1}>
              <span className="text-white text-2xl md:text-4xl lg:text-5xl tracking-wide" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
                Rooted in the Rainforest
              </span>
            </TextReveal>

            <StaggerOnScroll variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
              {initiatives.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="pl-6"
                  style={{ borderLeft: "2px solid rgba(255,255,255,0.2)" }}
                >
                  <h3 className="text-white text-[17px] mb-3" style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}>
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-[14px] leading-[1.7]" style={{ fontFamily: "var(--font-body)" }}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </StaggerOnScroll>

            <AnimateOnScroll variants={fadeUp} delay={0.4}>
              <div className="mt-12">
                <PillarCrossLink pillar="experiences" />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </TintedSection>
  );
}

/* ═══════════════════════════════════════════════════════════════
   WELLNESS - Video header + treatment cards
   ═══════════════════════════════════════════════════════════════ */
function WellnessSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = gardens.spaCategories || [];
  const filtered = activeCategory === "all" ? gardens.treatments : gardens.treatments.filter((t: Treatment) => t.category === activeCategory);

  return (
    <section id="wellness">
      {/* Wellness header - clean, no video */}
      <div className={sectionPadding} style={{ backgroundColor: PALETTE.gradientEnd }}>
        <div className={maxW}>
          <AnimateOnScroll variants={fadeUp}>
            <SectionLabel>Wellness</SectionLabel>
          </AnimateOnScroll>
          <TextReveal as="h2" className="mb-4" delay={0.1}>
            <span className="text-2xl md:text-4xl lg:text-5xl tracking-wide" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}>
              {gardens.theme.spaHeadline.replace("\n", " ")}
            </span>
          </TextReveal>
          <AnimateOnScroll variants={fadeUp} delay={0.2}>
            <p className="text-[15px] leading-[1.8] max-w-2xl" style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}>
              Thermal springs heated by the volcano, open-air spa treatments surrounded by birdsong, and yoga platforms overlooking the forest canopy.
            </p>
          </AnimateOnScroll>
        </div>
      </div>

      <div className={sectionPadding} style={{ backgroundColor: PALETTE.gradientStart }}>
        <div className={maxW}>
          {categories.length > 0 && (
            <AnimateOnScroll variants={fadeUp}>
              <div className="flex flex-wrap gap-2 mb-10 md:mb-14">
                {categories.map((cat: { id: string; label: string }) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className="px-5 py-2.5 rounded-full text-[11px] tracking-[0.1em] transition-all duration-500"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 500,
                      backgroundColor: activeCategory === cat.id ? PALETTE.primary : "transparent",
                      color: activeCategory === cat.id ? "#F7F5F0" : PALETTE.textSecondary,
                      border: `1px solid ${activeCategory === cat.id ? PALETTE.primary : PALETTE.divider}`,
                    }}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </AnimateOnScroll>
          )}
          <StaggerOnScroll variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((treatment: Treatment) => (
              <motion.div
                key={treatment.id}
                variants={fadeUp}
                className="p-6 md:p-8 transition-all duration-500 hover:translate-y-[-2px]"
                style={{
                  backgroundColor: "rgba(255,255,255,0.4)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "12px",
                  borderBottom: `2px solid ${PALETTE.divider}`,
                }}
                whileHover={{ borderBottomColor: PALETTE.primary }}
              >
                <h3 className="text-[17px] mb-2" style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: PALETTE.text }}>
                  {treatment.name}
                </h3>
                <p className="text-[11px] tracking-[0.1em] mb-4" style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.accent }}>
                  {treatment.duration}{treatment.price ? ` · ${treatment.price}` : ""}
                </p>
                <p className="text-[13px] leading-[1.7]" style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}>
                  {treatment.description}
                </p>
              </motion.div>
            ))}
          </StaggerOnScroll>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   GASTRONOMY - Video + restaurant cards
   ═══════════════════════════════════════════════════════════════ */
function GastronomySection() {
  const restaurants = Array.isArray(costaRicaDining) ? costaRicaDining : [costaRicaDining];

  return (
    <TintedSection backgroundColor={PALETTE.gradientEnd} className="overflow-hidden">
      {/* Cinematic video header */}
      <Parallax offset={50} className="w-full" style={{ aspectRatio: "2/1" }}>
        <div className="relative w-full aspect-[2/1]">
          <NativeVideo src={CDN.gastronomyVideo} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none" />
          <div className="absolute bottom-8 md:bottom-12 left-6 md:left-10 z-10">
            <TextReveal as="h2" delay={0.2}>
              <span className="text-white text-2xl md:text-4xl lg:text-5xl tracking-wide" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
                Forest to Table
              </span>
            </TextReveal>
          </div>
        </div>
      </Parallax>

      <div className={sectionPadding}>
        <div className={maxW}>
          <StaggerOnScroll variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {restaurants.map((restaurant: any, i: number) => (
              <motion.div key={i} variants={fadeUp}>
                <DrawLine color={PALETTE.primary} className="mb-6" />
                <h3 className="text-[20px] mb-2" style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: PALETTE.text }}>
                  {restaurant.name}
                </h3>
                <p className="text-[11px] tracking-[0.1em] mb-4" style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.accent }}>
                  {restaurant.cuisine}
                </p>
                <p className="text-[14px] leading-[1.8]" style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}>
                  {restaurant.description}
                </p>
              </motion.div>
            ))}
          </StaggerOnScroll>
        </div>
      </div>
    </TintedSection>
  );
}

/* ═══════════════════════════════════════════════════════════════
   GALLERY - All video grid
   ═══════════════════════════════════════════════════════════════ */
function GalleryIntegratedSections() {
  const sections = [
    {
      label: "Wildlife",
      headline: "Life in\nthe Canopy",
      body: "From toucans perched on morning branches to tiny red-eyed tree frogs hidden beneath broad leaves, the rainforest canopy around Nayara Gardens teems with life. Guided nature walks reveal the extraordinary biodiversity of this volcanic landscape.",
      verticalSrc: CDN.galleryVideo1,
      horizontalSrc: CDN.galleryVideo2,
      verticalIsVideo: true,
      horizontalIsVideo: true,
      bg: PALETTE.gradientStart,
    },
    {
      label: "Hot Springs",
      headline: "Volcanic\nWaters",
      body: "Fed by the geothermal energy of Arenal Volcano, the natural hot springs offer a primal connection to the earth. Mineral-rich waters flow through stone pools surrounded by tropical gardens, creating a sanctuary where the heat of the earth meets the cool of the rainforest.",
      verticalSrc: CDN.galleryVideo3,
      horizontalSrc: CDN.galleryVideo4,
      verticalIsVideo: true,
      horizontalIsVideo: true,
      bg: PALETTE.gradientEnd,
    },
  ];

  return (
    <>
      {sections.map((section, i) => {
        const textLeft = i % 2 === 0;
        return (
          <section key={i} style={{ backgroundColor: section.bg }}>
            <div className="flex flex-col md:flex-row">
              <div className={`w-full md:w-1/2 ${textLeft ? "md:order-2" : "md:order-1"}`}>
                <MediaReveal delay={0.1}>
                  <div className="overflow-hidden" style={{ aspectRatio: "3/4" }}>
                    {section.verticalIsVideo ? (
                      <NativeVideo src={section.verticalSrc} className="w-full h-full object-cover" />
                    ) : (
                      <img src={section.verticalSrc} alt="" className="w-full h-full object-cover" loading="lazy" />
                    )}
                  </div>
                </MediaReveal>
              </div>
              <div
                className={`w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-16 md:py-0 ${textLeft ? "md:order-1" : "md:order-2"}`}
              >
                <AnimateOnScroll variants={fadeUp}>
                  <SectionLabel>{section.label}</SectionLabel>
                </AnimateOnScroll>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}>
                  <MultiLineReveal
                    lines={section.headline.split("\n")}
                    className="text-2xl md:text-4xl lg:text-5xl tracking-wide mb-6"
                  />
                </div>
                <AnimateOnScroll variants={fadeUp} delay={0.3}>
                  <p className="text-[15px] leading-[1.8]" style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}>
                    {section.body}
                  </p>
                </AnimateOnScroll>
              </div>
            </div>
            <MediaReveal delay={0.15}>
              <div className="overflow-hidden" style={{ aspectRatio: "21/9" }}>
                {section.horizontalIsVideo ? (
                  <NativeVideo src={section.horizontalSrc} className="w-full h-full object-cover" />
                ) : (
                  <img src={section.horizontalSrc} alt="" className="w-full h-full object-cover" loading="lazy" />
                )}
              </div>
            </MediaReveal>
          </section>
        );
      })}
    </>
  );
}


/* ═══════════════════════════════════════════════════════════════
   REVIEWS — Guest testimonials
   ═══════════════════════════════════════════════════════════════ */
function ReviewsSection() {
  return (
    <section
      className="py-20 md:py-28 px-8 md:px-16"
      style={{ backgroundColor: PALETTE.gradientStart }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.2em] mb-6"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.primary }}
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
            style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
          >
            Based on 2,800+ reviews on TripAdvisor
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.2}>
          <blockquote>
            <p
              className="text-[17px] md:text-[20px] leading-relaxed italic mb-4"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.text }}
            >
              "Nayara Gardens is pure magic — waking up to toucans on your terrace, soaking in volcanic hot springs under the stars, and the most attentive staff we've ever encountered. This place feels like a dream you never want to leave."
            </p>
            <cite
              className="text-[12px] tracking-[0.08em] not-italic"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
            >
              — Michael & Laura, TripAdvisor
            </cite>
          </blockquote>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.3}>
          <a
            href="https://www.tripadvisor.com/Hotel_Review-g309226-d1229779-Reviews-Nayara_Resort_Spa_Gardens-La_Fortuna_de_San_Carlos_Arenal_Volcano_National_Park_Province.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 text-[11px] tracking-[0.15em] transition-opacity hover:opacity-70"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.primary }}
          >
            Read All Reviews →
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   GETTING HERE — Travel routes to Arenal
   ═══════════════════════════════════════════════════════════════ */
function GettingHereSection() {
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
      style={{ backgroundColor: PALETTE.gradientEnd }}
    >
      <div className="max-w-[1000px] mx-auto">
        <AnimateOnScroll variants={fadeUp}>
          <SectionLabel>Getting Here</SectionLabel>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.1}>
          <h2 className="mb-4">
            <span
              className="text-2xl md:text-[2rem] lg:text-[2.5rem] leading-[1.1] tracking-wide"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
            >
              Your Journey to Arenal
            </span>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.15}>
          <p
            className="text-[15px] leading-relaxed mb-12 md:mb-16 max-w-xl"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
          >
            Nayara Gardens is located in the Arenal Volcano region of Costa Rica, one of the most accessible luxury destinations in Central America.
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
                    style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: PALETTE.text }}
                  >
                    {route.title}
                  </h3>
                  <p
                    className="text-[13px] leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
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
              style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
            >
              <span style={{ fontWeight: 500, color: PALETTE.text }}>Need help planning your journey?</span>{" "}
              Our concierge team can arrange private transfers, domestic flights, and multi-destination itineraries throughout Costa Rica.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   RESERVE CTA — Final call to action
   ═══════════════════════════════════════════════════════════════ */
function ReserveCTA() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: "#E8F0DD" }}>
      <div className="max-w-[800px] mx-auto text-center">
        <AnimateOnScroll variants={fadeUp}>
          <TextReveal as="h2" className="mb-6" delay={0.1}>
            <span
              className="text-2xl md:text-4xl lg:text-5xl tracking-wide"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
            >
              Begin Your Rainforest Adventure
            </span>
          </TextReveal>
          <p
            className="text-[15px] leading-[1.8] mb-8"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
          >
            Lush tropical gardens, volcanic hot springs, and the raw beauty of the Arenal rainforest await at Nayara Gardens.
          </p>
          <a
            href="/reserve?property=gardens"
            className="inline-block px-10 py-3.5 rounded-full text-[11px] tracking-[0.2em] transition-all hover:opacity-80"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, backgroundColor: PALETTE.primary, color: "#fff" }}
          >
            Reserve Your Stay
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   EXPERIENCES — Text left + vertical video right, horizontal below
   Alternates from Accommodations (which was image left, text right)
   ═══════════════════════════════════════════════════════════════ */
function GardensExperiencesSection() {
  return (
    <section id="experiences">
      {/* ── Row: Text left + Vertical video right ── */}
      <div className="flex flex-col md:flex-row" style={{ backgroundColor: PALETTE.gradientStart }}>
        {/* Text column */}
        <div
          className="w-full md:w-1/2 flex flex-col justify-center px-8 py-12 md:px-16 lg:px-24 md:order-1"
          style={{ backgroundColor: PALETTE.gradientStart }}
        >
          <AnimateOnScroll variants={fadeUp}>
            <SectionLabel>Experiences</SectionLabel>
          </AnimateOnScroll>

          <AnimateOnScroll variants={fadeUp} delay={0.1}>
            <h2 className="mb-6 md:mb-8">
              <span
                className="block text-2xl md:text-[2rem] lg:text-[2.5rem] leading-[1.05] tracking-wide"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
              >
                Rainforest Adventures
              </span>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll variants={fadeUp} delay={0.2}>
            <p
              className="text-[15px] leading-[1.85] max-w-[480px]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
            >
              Arenal Volcano — a 7,500-year-old stratovolcano rising 5,437 feet from the rainforest floor — shapes everything around it. Its geothermal energy feeds the mineral springs, its eruption history created the lava fields you walk through today, and its mass generates the microclimate that keeps this pocket of Costa Rica impossibly green.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variants={fadeUp} delay={0.25}>
            <p
              className="text-[15px] leading-[1.85] max-w-[480px] mt-4"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
            >
              From hanging bridges suspended above the canopy to guided naturalist walks through the volcano's shadow, each excursion connects your family to the extraordinary forces that define this land. The dawn birdwatching, the waterfall hikes, the night frog tours — these are not amenities added to a room rate. They are the story itself.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variants={fadeUp} delay={0.3}>
            <a
              href="/curated-excursions"
              className="inline-block mt-8 text-[11px] tracking-[0.15em] transition-opacity hover:opacity-70"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.primary }}
            >
              Explore Experiences →
            </a>
          </AnimateOnScroll>
        </div>

        {/* Vertical video right */}
        <div className="w-full md:w-1/2 md:order-2 relative">
          <MediaReveal delay={0.1}>
            <div className="overflow-hidden w-full h-full" style={{ aspectRatio: "3/4" }}>
              <NativeVideo src="/manus-storage/gardens-experience-vertical-v2_bf58516a.mp4" className="w-full h-full object-cover" />
            </div>
          </MediaReveal>
          {/* Explore pill */}
          <div className="absolute bottom-[6%] left-0 right-0 flex items-center justify-center z-10">
            <a
              href="#"
              className="flex items-center gap-2 px-5 py-2 rounded-full backdrop-blur-md shadow-lg transition-transform hover:scale-[1.03]"
              style={{ backgroundColor: "rgba(40,98,65,0.75)", fontFamily: "var(--font-body)" }}
            >
              <span className="text-white text-[11px] tracking-[0.15em] uppercase font-medium whitespace-nowrap">Explore Arenal Volcano Tour</span>
              <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </a>
          </div>
        </div>
      </div>

      {/* ── Full-width horizontal video (desktop only) ── */}
      <div className="hidden md:block w-full relative">
        <div style={{ aspectRatio: "16/9" }}><NativeVideo src="/manus-storage/gardens-experience-horizontal-v3_3ad62308.mp4" className="w-full h-full object-cover" /></div>
        {/* Explore pill */}
        <div className="absolute bottom-[6%] left-0 right-0 flex items-center justify-center z-10">
          <a
            href="#"
            className="flex items-center gap-2 px-5 py-2 rounded-full backdrop-blur-md shadow-lg transition-transform hover:scale-[1.03]"
            style={{ backgroundColor: "rgba(40,98,65,0.75)", fontFamily: "var(--font-body)" }}
          >
            <span className="text-white text-[11px] tracking-[0.15em] uppercase font-medium whitespace-nowrap">Explore La Fortuna Waterfall</span>
            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   GASTRONOMY — Text left + vertical image right, horizontal below
   Alternates from Sustainability (image left → now text left)
   ═══════════════════════════════════════════════════════════════ */
function GardensGastronomyCascade() {
  return (
    <section id="gastronomy">
      {/* ── Row: Text left + Vertical image right ── */}
      <div className="flex flex-col md:flex-row" style={{ backgroundColor: "#FAE0E0" }}>
        {/* Text column left */}
        <div
          className="w-full md:w-1/2 flex flex-col justify-center px-8 py-12 md:px-16 lg:px-24 md:order-1"
          style={{ backgroundColor: "#FAE0E0" }}
        >
          <AnimateOnScroll variants={fadeUp}>
            <span
              className="text-[11px] tracking-[0.2em] uppercase mb-6 block"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "#6b4a3a" }}
            >
              Gastronomy
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll variants={fadeUp} delay={0.1}>
            <h2 className="mb-6 md:mb-8">
              <span
                className="block text-2xl md:text-[2rem] lg:text-[2.5rem] leading-[1.05] tracking-wide"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#3a2a1a" }}
              >
                Who Wants Gelato?
              </span>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll variants={fadeUp} delay={0.2}>
            <p
              className="text-[15px] leading-[1.85] max-w-[480px]"
              style={{ fontFamily: "var(--font-body)", color: "#4a3a2a" }}
            >
              Five restaurants, one philosophy: every ingredient tells the story of this land. From volcanic-soil coffee to cacao harvested in the shadow of Arenal, our chefs transform Costa Rica's extraordinary biodiversity into dishes that honor tradition while embracing innovation. Nostalgia Wine Bar and Layla's Ice Cream complete the journey from earth to palate.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variants={fadeUp} delay={0.3}>
            <a
              href="/gastronomy-arenal"
              className="inline-block mt-8 text-[11px] tracking-[0.15em] transition-opacity hover:opacity-70"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "#3a2a1a" }}
            >
              Explore Dining →
            </a>
          </AnimateOnScroll>
        </div>

        {/* Vertical image right */}
        <div className="w-full md:w-1/2 md:order-2 relative">
          <MediaReveal delay={0.1}>
            <div className="overflow-hidden w-full h-full" style={{ aspectRatio: "3/4" }}>
              <img src="/manus-storage/gardens-gastronomy-vertical_e3c5f76c.jpg" alt="Lyla's Gelato" className="w-full h-full object-cover" />
            </div>
          </MediaReveal>
          {/* Explore pill */}
          <div className="absolute bottom-[6%] left-0 right-0 flex items-center justify-center z-10">
            <a
              href="#"
              className="flex items-center gap-2 px-5 py-2 rounded-full backdrop-blur-md shadow-lg transition-transform hover:scale-[1.03]"
              style={{ backgroundColor: "rgba(40,98,65,0.75)", fontFamily: "var(--font-body)" }}
            >
              <span className="text-white text-[11px] tracking-[0.15em] uppercase font-medium whitespace-nowrap">Explore Lyla's Gelato</span>
              <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </a>
          </div>
        </div>
      </div>

      {/* ── Full-width horizontal image (desktop only) ── */}
      <div className="hidden md:block w-full relative">
        <img src="/manus-storage/gardens-gastronomy-horizontal_184cc30e.jpeg" alt="Nostalgia Wine Bar" className="w-full object-cover" style={{ aspectRatio: "16/9" }} />
        {/* Explore pill */}
        <div className="absolute bottom-[6%] left-0 right-0 flex items-center justify-center z-10">
          <a
            href="#"
            className="flex items-center gap-2 px-5 py-2 rounded-full backdrop-blur-md shadow-lg transition-transform hover:scale-[1.03]"
            style={{ backgroundColor: "rgba(40,98,65,0.75)", fontFamily: "var(--font-body)" }}
          >
            <span className="text-white text-[11px] tracking-[0.15em] uppercase font-medium whitespace-nowrap">Explore Nostalgia</span>
            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SUSTAINABILITY — Vertical video left + text right, horizontal below
   Alternates from Experiences (text left → now image left)
   ═══════════════════════════════════════════════════════════════ */
function GardensSustainabilityCascade() {
  return (
    <section id="sustainability">
      {/* ── Row: Vertical video left + Text right ── */}
      <div className="flex flex-col md:flex-row" style={{ backgroundColor: PALETTE.gradientStart }}>
        {/* Vertical video left */}
        <div className="w-full md:w-1/2 md:order-1">
          <MediaReveal delay={0.1}>
            <div className="overflow-hidden w-full h-full" style={{ aspectRatio: "3/4" }}>
              <NativeVideo src="/manus-storage/gardens-sustainability-vertical-v2_a1236efc.mp4" className="w-full h-full object-cover" />
            </div>
          </MediaReveal>
        </div>

        {/* Text column right */}
        <div
          className="w-full md:w-1/2 flex flex-col justify-center px-8 py-12 md:px-16 lg:px-24 md:order-2"
          style={{ backgroundColor: PALETTE.gradientStart }}
        >
          <AnimateOnScroll variants={fadeUp}>
            <SectionLabel>Sustainability</SectionLabel>
          </AnimateOnScroll>

          <AnimateOnScroll variants={fadeUp} delay={0.1}>
            <h2 className="mb-6 md:mb-8">
              <span
                className="block text-2xl md:text-[2rem] lg:text-[2.5rem] leading-[1.05] tracking-wide"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
              >
                Beyond Reforestation
              </span>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll variants={fadeUp} delay={0.2}>
            <p
              className="text-[15px] leading-[1.85] max-w-[480px]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
            >
              From geothermal energy to rainforest stewardship, every decision at Nayara Gardens is guided by our commitment to protect the extraordinary ecosystem that makes this place possible. We work with local communities and conservation organizations to ensure our presence strengthens the land rather than diminishes it.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variants={fadeUp} delay={0.25}>
            <p
              className="text-[15px] leading-[1.85] max-w-[480px] mt-4"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
            >
              Our wildlife corridors connect fragmented habitats across the Arenal region, allowing two- and three-toed sloths, kinkajous, and howler monkeys to move safely between forest patches. These living bridges — planted and maintained by our conservation team — have restored critical migration routes and helped sloth populations thrive in an area where they were once in decline.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variants={fadeUp} delay={0.3}>
            <a
              href="/tented-camp-sustainability"
              className="inline-block mt-8 text-[11px] tracking-[0.15em] transition-opacity hover:opacity-70"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.primary }}
            >
              Explore Sustainability →
            </a>
          </AnimateOnScroll>
        </div>
      </div>

      {/* ── Full-width horizontal video (desktop only) ── */}
      <div className="hidden md:block w-full">
        <div style={{ aspectRatio: "16/9" }}><NativeVideo src="/manus-storage/gardens-sustainability-horizontal_16aa396f.mp4" className="w-full h-full object-cover" /></div>
      </div>
    </section>
  );
}
