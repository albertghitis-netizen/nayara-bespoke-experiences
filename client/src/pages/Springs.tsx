/*
 * NAYARA SPRINGS — Arenal, Costa Rica
 * Visual Identity: "Mineral" palette · Cormorant Garamond · Cinematic motion · Video-first
 */
import { useState } from "react";
import { motion } from "framer-motion";
import OneRainforestSprings from "@/components/OneRainforestSprings";
import NativeVideo from "@/components/NativeVideo";
import { useIsMobile } from "@/hooks/useMobile";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import BlobVideo from "@/components/BlobVideo";
import ByNightCTA from "@/components/ByNightCTA";
import { properties, type Property, type Excursion, type Treatment } from "@/data/properties";
import { costaRicaDining } from "@/data/dining";
import PillarCrossLink from "@/components/PillarCrossLink";
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
  staggerContainer,
  DURATION,
  EASE_CINEMATIC,
  EASE_EDITORIAL,
} from "@/components/motion";
import { LocalBusinessSchema, BreadcrumbListSchema } from "@/components/SEOSchemaEnhanced";

const springs = properties.find((p: Property) => p.id === "springs")!;

/* ═══════════════════════════════════════════════════════════════
   PALETTE — Eucalyptus & Mint
   ═══════════════════════════════════════════════════════════════ */
/* Eucalyptus (cool, silvery green) + Mint (bright, refreshing) */
const PALETTE = {
  primary: "#5F7367",           // Standard Eucalyptus (middle — buttons, accents)
  secondary: "#4B6358",         // Dark Eucalyptus (nav, footer)
  accent: "#3EB489",            // Standard Mint (bright highlights)
  gradientStart: "#F7F5F0",     // Bone (background)
  gradientEnd: "#E8F3EF",       // Light Eucalyptus tint
  text: "#0D0704",           // Super dark brown on light backgrounds
  textSecondary: "#0D0704",
  textTertiary: "#0D070499",
  textLight: "#FFFFFF",        // Super bright white on dark backgrounds
  divider: "#E6DFD5",
};

/* ═══════════════════════════════════════════════════════════════
   CDN ASSETS
   ═══════════════════════════════════════════════════════════════ */
const CDN = {
  heroDesktop: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-hero-compressed_8027ac33.mp4",
  s1: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/6_0a37cc95.jpg",
  s2: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/123_739860cc.jpg",
  s3: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-s3-robe-canopy_c9c365ff.jpg",
  s4: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/61_0020df3e.jpg",
  galleryVideo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-gallery-compressed_6c96d202.mp4",
  gallery5: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Untitleddesign-3_e394353d.jpg",
  gallery6: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Untitleddesign-5_f4b0874c.jpg",
  gallery7: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Untitleddesign-14_6b456af8.jpg",
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
  pillActiveText: "#FFFFFF",    // Super bright white on dark nav
};

const roomCards = [
  { title: "Springs Villa", description: "Freestanding villas with private natural hot spring-fed plunge pools, outdoor garden showers, and floor-to-ceiling windows framing the Arenal Volcano. Each villa is a secluded sanctuary in the rainforest canopy.", tags: ["Private hot spring pool", "Volcano views", "Outdoor shower"] },
  { title: "Springs Grand Villa", description: "Our most expansive villas, offering separate living areas, oversized hot spring pools, and wraparound terraces. Designed for those seeking the ultimate in privacy and space.", tags: ["Grand hot spring pool", "Separate living area", "Wraparound terrace"] },
  { title: "Springs Family Villa", description: "Interconnected villas with shared garden spaces, perfect for families. Each villa maintains its own private hot spring pool while offering easy access to the resort's nature trails.", tags: ["Two bedrooms", "Family-friendly", "Private hot spring pool"] },
];

const sustainabilityCards = [
  { title: "Geothermal Energy", description: "Harnessing the natural geothermal energy of the Arenal Volcano to heat our hot spring pools and reduce our carbon footprint." },
  { title: "Rainforest Corridor Protection", description: "Maintaining a critical wildlife corridor connecting Arenal Volcano National Park to the Monteverde Cloud Forest Reserve." },
  { title: "Water Stewardship", description: "Advanced water recycling systems and natural filtration processes ensure our hot springs remain pristine for generations." },
  { title: "Sustainable Luxury Design", description: "Every villa is built with locally sourced materials and designed to minimize environmental impact while maximizing comfort." },
];

const gastronomyCards = (Array.isArray(costaRicaDining) ? costaRicaDining : (costaRicaDining as any).restaurants || [costaRicaDining]).map((r: any) => ({
  title: r.name,
  subtitle: r.cuisine || undefined,
  description: r.description,
  tags: r.atmosphere ? [r.atmosphere] : [],
}));

const experienceCategories = (springs.excursionCategories || []).filter((c: { id: string; label: string }) => c.id !== "all");
const experienceCards = springs.excursions.map((e: Excursion) => ({ title: e.name, description: e.description, category: e.category, tags: e.duration ? [e.duration] : [] }));

const wellnessCategories = (springs.spaCategories || []).filter((c: { id: string; label: string }) => c.id !== "all");
const wellnessCards = springs.treatments.map((t: Treatment) => ({ title: t.name, description: t.description, category: t.category, tags: t.duration ? [t.duration] : [] }));

export default function Springs() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.gradientStart }}>
      <LocalBusinessSchema
        name="Nayara Springs"
        description="Adults-only luxury resort with private hot springs villas and volcanic spa experiences in the Arenal region."
        url="https://nayarasprings.com"
        image="https://nayararesorts.manus.space"
        address={{
          streetAddress: "La Fortuna de San Carlos",
          addressLocality: "La Fortuna",
          addressRegion: "Alajuela",
          addressCountry: "CR",
          postalCode: "4417",
        }}
        geo={{
          latitude: 10.4645,
          longitude: -84.6425,
        }}
        telephone="+1 888 332 2961"
        email="reservations@nayararesorts.com"
        awards={["Michelin Guide 3 Keys", "Condé Nast Traveler Readers' Choice"]}
      />
      <BreadcrumbListSchema items={[
        { name: "Home", url: "https://nayararesorts.manus.space" },
        { name: "Nayara Springs", url: "https://nayarasprings.com" },
      ]} />
      <BrandNavigation pageType="property" />
      <HeroSection />
      <StorySection />
      <SpringsVillaSection />
      <ExperiencesSection />
      <SustainabilitySection />
      <WellnessSection />
      <GastronomySection />
      <ByNightCTA
        verticalSrc="/manus-storage/AmorLocoNayaraSprings-R5_26625-byBriceFerreStudio(1)_9a4dccd8.jpeg"
        verticalIsVideo={false}
        verticalRatio="3/4"
        horizontalSrc=""
        bgColor="#0D0704"
        headline={"Hot Springs\nUnder Starlight"}
        bodyText="As darkness descends on the Arenal rainforest, the volcanic hot springs take on an ethereal glow. Slip into your private plunge pool beneath a canopy of stars, where the warmth of the earth meets the cool night air. Join our naturalists for a nocturnal frog safari, or simply surrender to the symphony of the jungle after dark."
        textSide="left"
      />
      <ReviewsSection />
      <GettingHereSection />
      <ReserveCTA />

      <Footer bgColor={PALETTE.secondary} textColor="#FFFFFF" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO — Full-bleed video, cinematic text reveal
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const isMobile = useIsMobile();
  const mobileHeroImage = "/manus-storage/springs-mobile-hero_572a69ce.png";
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        {isMobile ? (
          <img src={mobileHeroImage} alt="Nayara Springs" className="w-full h-full object-cover" />
        ) : (
          <BlobVideo
          src={CDN.heroDesktop}
          className="w-full h-full object-cover"
          hasAudio={true}
          pillBg={`${PALETTE.secondary}B3`}
          pillColor="#F7F5F0"/>
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
          Adults-Only Private Hot Springs Villas
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
   STORY — Text left, image right, landscape image below
   ═══════════════════════════════════════════════════════════════ */
function StorySection() {
  return (
    <section id="story">
      {/* ── Row: Text left + S1 vertical video right ── */}
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
                Romance without Distraction
              </span>
              <span
                className="block text-2xl md:text-[2rem] lg:text-[2.5rem] leading-[1.05] tracking-wide"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
              >
                Wellness without Walls
              </span>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll variants={fadeUp} delay={0.2}>
            <p
              className="text-[15px] leading-[1.85] max-w-[480px]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
            >
              Hidden within the rainforest surrounding Arenal Volcano, Nayara Springs is an adults-only Relais &amp; Châteaux retreat built around hot springs, romance, and exceptional dining. Every villa has its own volcanic hot spring plunge pool screened by tropical gardens, and the spa draws its rituals from the geothermal earth and forest botanicals that surround it. Here, privacy is not a perk. It is the entire point.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variants={fadeUp} delay={0.3}>
            <a
              href="https://blog.nayararesorts.com/7-michelin-keys-3-countries-1-commitment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 mt-4 mb-6 px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "12px", letterSpacing: "0.08em", color: "#fff", backgroundColor: PALETTE.primary }}
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
              Read: 7 MICHELIN Keys. 3 Countries. 1 Standard of Excellence
            </a>
          </AnimateOnScroll>

          <div className="mt-8 hidden md:block">
            <video
              src="/manus-storage/badge-animation-final_80c614a1.mp4"
              autoPlay
              muted
              playsInline
              className="h-32 lg:h-40 w-auto -ml-3 lg:-ml-6"
            />
          </div>
        </div>

        {/* S1 — Vertical video right */}
        <div className="w-full md:w-1/2 md:order-2">
          <MediaReveal delay={0.1}>
            <div className="overflow-hidden w-full h-full" style={{ aspectRatio: "3/4" }}>
              <NativeVideo src="/manus-storage/Reel2Luxuryfilmscr-Nayara_9be06e30.mp4" className="w-full h-full object-cover" />
            </div>
          </MediaReveal>
        </div>
      </div>

      {/* ── S2 — Full-width horizontal video (desktop only) ── */}
      <div className="hidden md:block w-full">
        <NativeVideo src="/manus-storage/NayaraResorts-HeroVideo_302b2cc2.mp4" className="w-full object-cover" style={{ aspectRatio: "16/9" }} />
      </div>

    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SPRINGS VILLA — Image left, text right, landscape below
   On tinted background (gradient end)
   ═══════════════════════════════════════════════════════════════ */
function SpringsVillaSection() {
  return (
    <section id="accommodations">
      {/* ── Row: S3 vertical video left + Text right ── */}
      <div className="flex flex-col md:flex-row" style={{ backgroundColor: PALETTE.gradientStart }}>
        {/* S3 — Vertical video left */}
        <div className="w-full md:w-1/2 md:order-1">
          <MediaReveal delay={0.1}>
            <div className="overflow-hidden w-full h-full" style={{ aspectRatio: "3/4" }}>
              <NativeVideo src="/manus-storage/springs-s3-accommodation_9a2a14f0.mp4" className="w-full h-full object-cover" />
            </div>
          </MediaReveal>
        </div>

        {/* Text column right */}
        <div
          className="w-full md:w-1/2 flex flex-col justify-center px-8 py-12 md:px-16 lg:px-24 md:order-2"
          style={{ backgroundColor: PALETTE.gradientStart }}
        >
          <AnimateOnScroll variants={fadeUp}>
            <SectionLabel>Accommodations</SectionLabel>
          </AnimateOnScroll>
          <TextReveal as="h2" className="mb-8" delay={0.1}>
            <span
              className="text-2xl md:text-[2rem] lg:text-[2.5rem] leading-[1.05] tracking-wide"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
            >
              Springs Villa
            </span>
          </TextReveal>
          <AnimateOnScroll variants={fadeUp} delay={0.3}>
            <p
              className="text-[15px] leading-[1.85] max-w-[480px]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
            >
              Each Springs Villa features a private natural hot spring pool fed by volcanic mineral water. Designed for ultimate privacy and relaxation, these intimate sanctuaries offer an unparalleled experience of thermal wellness surrounded by rainforest canopy.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variants={fadeUp} delay={0.4}>
            <a
              href="/springs/rooms/springs-villa"
              className="inline-block mt-8 text-[11px] tracking-[0.15em] transition-opacity hover:opacity-70"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.primary }}
            >
              Explore Springs Villa →
            </a>
          </AnimateOnScroll>
        </div>
      </div>

      {/* ── S4 — Full-width horizontal video (desktop only) ── */}
      <div className="hidden md:block w-full relative">
        <NativeVideo src="/manus-storage/springs-s4-accommodation-horizontal_8d844f9e.mp4" className="w-full object-cover" style={{ aspectRatio: "16/9" }} />
        <div className="absolute bottom-8 left-8 md:left-16">
          <a
            href="/springs/rooms/springs-villa"
            className="inline-block text-[11px] tracking-[0.15em] transition-opacity hover:opacity-70"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "#FFFFFF" }}
          >
            Explore Springs Villa →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   EXPERIENCES — Card grid with category filters
   ═══════════════════════════════════════════════════════════════ */
function ExperiencesSection() {
  return (
    <section id="experiences">
      {/* ── Row: Text left + S5 vertical video right ── */}
      <div className="flex flex-col md:flex-row" style={{ backgroundColor: PALETTE.gradientStart }}>
        {/* Text column */}
        <div
          className="w-full md:w-1/2 flex flex-col justify-center px-8 py-12 md:px-16 lg:px-24 md:order-1"
          style={{ backgroundColor: PALETTE.gradientStart }}
        >
          <AnimateOnScroll variants={fadeUp}>
            <SectionLabel>Experiences</SectionLabel>
          </AnimateOnScroll>
          <TextReveal as="h2" className="mb-8" delay={0.1}>
            <span
              className="text-2xl md:text-[2rem] lg:text-[2.5rem] leading-[1.05] tracking-wide"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
            >
              Arenal Adventures
            </span>
          </TextReveal>
          <AnimateOnScroll variants={fadeUp} delay={0.3}>
            <p
              className="text-[15px] leading-[1.85] max-w-[480px]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
            >
              From hanging bridges suspended above the rainforest canopy to volcanic hot springs hidden in ancient lava flows, every experience at Nayara Springs connects you to the extraordinary natural forces that shape this land.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variants={fadeUp} delay={0.4}>
            <a
              href="/springs/experiences"
              className="inline-block mt-8 text-[11px] tracking-[0.15em] transition-opacity hover:opacity-70"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.primary }}
            >
              Explore Experiences →
            </a>
          </AnimateOnScroll>
        </div>

        {/* S5 — Vertical video right */}
        <div className="w-full md:w-1/2 md:order-2">
          <MediaReveal delay={0.1}>
            <div className="overflow-hidden w-full h-full" style={{ aspectRatio: "3/4" }}>
              <NativeVideo src="/manus-storage/springs-s5-experiences_16b5c78e.mp4" className="w-full h-full object-cover" />
            </div>
          </MediaReveal>
        </div>
      </div>

      {/* ── S6 — Full-width horizontal video (desktop only) ── */}
      <div className="hidden md:block w-full">
        <NativeVideo src="/manus-storage/springs-s6-experiences-horizontal_eb6760c5.mp4" className="w-full object-cover" style={{ aspectRatio: "16/9" }} />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SUSTAINABILITY — Dark overlay with palette accents
   ═══════════════════════════════════════════════════════════════ */
function SustainabilitySection() {
  return (
    <section id="sustainability">
      {/* ── Row: S7 vertical video left + Text right ── */}
      <div className="flex flex-col md:flex-row" style={{ backgroundColor: PALETTE.gradientStart }}>
        {/* S7 — Vertical video left */}
        <div className="w-full md:w-1/2 md:order-1">
          <MediaReveal delay={0.1}>
            <div className="overflow-hidden w-full h-full" style={{ aspectRatio: "3/4" }}>
              <NativeVideo src="/manus-storage/springs-s7-sustainability-vertical_e4e0d280.mp4" className="w-full h-full object-cover" />
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
          <TextReveal as="h2" className="mb-8" delay={0.1}>
            <span
              className="text-2xl md:text-[2rem] lg:text-[2.5rem] leading-[1.05] tracking-wide"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
            >
              Beyond Sustainability
            </span>
          </TextReveal>
          <AnimateOnScroll variants={fadeUp} delay={0.3}>
            <p
              className="text-[15px] leading-[1.85] max-w-[480px]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
            >
              From geothermal energy to rainforest stewardship, every decision at Nayara Springs is guided by our commitment to protect the extraordinary ecosystem that makes this place possible. We work with local communities and conservation organizations to ensure our presence strengthens the land rather than diminishes it.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variants={fadeUp} delay={0.4}>
            <a
              href="/springs/sustainability"
              className="inline-block mt-8 text-[11px] tracking-[0.15em] transition-opacity hover:opacity-70"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.primary }}
            >
              Explore Sustainability →
            </a>
          </AnimateOnScroll>
        </div>
      </div>

      {/* ── S8 — Full-width horizontal video (desktop only) ── */}
      <div className="hidden md:block w-full">
        <NativeVideo src="/manus-storage/springs-s8-sustainability-horizontal_7a9ba7b8.mp4" className="w-full object-cover" style={{ aspectRatio: "16/9" }} />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   WELLNESS — Treatment cards with category filters
   ═══════════════════════════════════════════════════════════════ */
function WellnessSection() {
  return (
    <section id="wellness">
      {/* ── Row: Text left + S9 vertical video right ── */}
      <div className="flex flex-col md:flex-row" style={{ backgroundColor: PALETTE.gradientStart }}>
        {/* Text column */}
        <div
          className="w-full md:w-1/2 flex flex-col justify-center px-8 py-12 md:px-16 lg:px-24 md:order-1"
          style={{ backgroundColor: PALETTE.gradientStart }}
        >
          <AnimateOnScroll variants={fadeUp}>
            <SectionLabel>Wellness</SectionLabel>
          </AnimateOnScroll>
          <TextReveal as="h2" className="mb-8" delay={0.1}>
            <span
              className="text-2xl md:text-[2rem] lg:text-[2.5rem] leading-[1.05] tracking-wide"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
            >
              Nurtured by Nature
            </span>
          </TextReveal>
          <AnimateOnScroll variants={fadeUp} delay={0.3}>
            <p
              className="text-[15px] leading-[1.85] max-w-[480px]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
            >
              The spa at Nayara Springs draws its rituals from the geothermal earth and forest botanicals that surround it. Volcanic mineral waters, indigenous healing traditions, and the stillness of the rainforest converge to create an experience that restores from the inside out.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variants={fadeUp} delay={0.4}>
            <a
              href="/springs/wellness"
              className="inline-block mt-8 text-[11px] tracking-[0.15em] transition-opacity hover:opacity-70"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.primary }}
            >
              Explore Wellness →
            </a>
          </AnimateOnScroll>
        </div>

        {/* S9 — Vertical video right */}
        <div className="w-full md:w-1/2 md:order-2">
          <MediaReveal delay={0.1}>
            <div className="overflow-hidden w-full h-full" style={{ aspectRatio: "3/4" }}>
              <NativeVideo src="/manus-storage/springs-s9-wellness-vertical_af7fc01e.mp4" className="w-full h-full object-cover" />
            </div>
          </MediaReveal>
        </div>
      </div>

      {/* ── S10 — Full-width horizontal video (desktop only) ── */}
      <div className="hidden md:block w-full">
        <NativeVideo src="/manus-storage/springs-s10-wellness-horizontal_220c4487.mp4" className="w-full object-cover" style={{ aspectRatio: "16/9" }} />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   GASTRONOMY — Restaurant cards with DrawLine dividers
   ═══════════════════════════════════════════════════════════════ */
function GastronomySection() {
  return (
    <section id="gastronomy">
      {/* ── Row: Vertical image (bar) left + Text right ── */}
      <div className="flex flex-col md:flex-row" style={{ backgroundColor: PALETTE.gradientStart }}>
        {/* Vertical image left */}
        <div className="w-full md:w-1/2 md:order-1">
          <MediaReveal delay={0.1}>
            <div className="overflow-hidden w-full h-full" style={{ aspectRatio: "3/4" }}>
              <img
                src="/manus-storage/AmorLocoNayaraSprings-R5_26625-byBriceFerreStudio(1)_9a4dccd8.jpeg"
                alt="Amor Loco bar at Nayara Springs"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </MediaReveal>
        </div>

        {/* Text column right */}
        <div
          className="w-full md:w-1/2 flex flex-col justify-center px-8 py-12 md:px-16 lg:px-24 md:order-2"
          style={{ backgroundColor: PALETTE.gradientStart }}
        >
          <AnimateOnScroll variants={fadeUp}>
            <SectionLabel>The Table</SectionLabel>
          </AnimateOnScroll>
          <TextReveal as="h2" className="mb-8" delay={0.1}>
            <span
              className="text-2xl md:text-[2rem] lg:text-[2.5rem] leading-[1.05] tracking-wide"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
            >
              Forest to Table
            </span>
          </TextReveal>
          <AnimateOnScroll variants={fadeUp} delay={0.3}>
            <p
              className="text-[15px] leading-[1.85] max-w-[480px]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
            >
              As a proud Relais & Châteaux property, Nayara Springs upholds the highest standards of culinary excellence. From the volcanic terroir of Arenal to your table, our culinary team transforms locally sourced ingredients into extraordinary dining experiences — each plate a celebration of Costa Rica's biodiversity, crafted with the artistry and precision that define the Relais & Châteaux tradition.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variants={fadeUp} delay={0.4}>
            <a
              href="/springs/gastronomy"
              className="inline-block mt-8 text-[11px] tracking-[0.15em] transition-opacity hover:opacity-70"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.primary }}
            >
              Explore Gastronomy →
            </a>
          </AnimateOnScroll>
        </div>
      </div>

      {/* ── Full-width horizontal image (food, desktop only) ── */}
      <div className="hidden md:block w-full">
        <img
          src="/manus-storage/NayaraAltoAtacama_1_32854bbb.jpg"
          alt="Artisanal cuisine at Nayara"
          className="w-full object-cover"
          style={{ aspectRatio: "16/9" }}
          loading="lazy"
        />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   REVIEWS — Guest pull-quote with stars
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
            Based on 1,400+ reviews on TripAdvisor
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.2}>
          <blockquote>
            <p
              className="text-[17px] md:text-[20px] leading-relaxed italic mb-4"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.text }}
            >
              "Nayara Springs exceeded every expectation. The private hot spring pool in our villa, the impeccable service, and the sheer beauty of the rainforest setting made this the most memorable trip of our lives."
            </p>
            <cite
              className="text-[12px] tracking-[0.08em] not-italic"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
            >
              — Sarah & James, TripAdvisor
            </cite>
          </blockquote>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.3}>
          <a
            href="https://www.tripadvisor.com/Hotel_Review-g309226-d7083061-Reviews-Nayara_Springs-La_Fortuna_de_San_Carlos_Arenal_Volcano_National_Park_Province_of_Alaju.html"
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
            Nayara Springs is located in the Arenal Volcano region of Costa Rica, one of the most accessible luxury destinations in Central America.
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
   RESERVE CTA — "Begin Your Rainforest Adventure"
   ═══════════════════════════════════════════════════════════════ */
function ReserveCTA() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: PALETTE.gradientEnd }}>
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
            Private villas with natural hot spring pools, world-class dining, and the raw beauty of the Arenal rainforest await at Nayara Springs.
          </p>
          <a
            href="/reserve?property=springs"
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
