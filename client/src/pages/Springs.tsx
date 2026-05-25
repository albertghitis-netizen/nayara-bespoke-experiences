/*
 * NAYARA SPRINGS , Arenal, Costa Rica
 * Visual Identity: "Mineral" palette · Cormorant Garamond · Cinematic motion · Video-first
 */
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { useCountUp } from "@/hooks/useCountUp";
import NativeVideo from "@/components/NativeVideo";
import { useIsMobile } from "@/hooks/useMobile";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import BlobVideo from "@/components/BlobVideo";
import ByNightCTA from "@/components/ByNightCTA";
import { properties, type Property, type Excursion, type Treatment } from "@/data/properties";
import { costaRicaDining } from "@/data/dining";
import PillarCrossLink from "@/components/PillarCrossLink";
import CrossPropertyCTA from "@/components/CrossPropertyCTA";
import { AwardBadgeStrip } from "@/components/AwardBadges";
import PropertySlider from "@/components/PropertySlider";
import RoomSlider, { RoomSliderCard } from "@/components/RoomSlider";
import { BOOKING_URLS } from "@/data/booking";
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
   PALETTE , Ocean Teal
   ═══════════════════════════════════════════════════════════════ */
/* Ocean Teal — deep, mineral, distinct from green properties */
const PALETTE = {
  primary: "#0E6B7E",           // Ocean Teal (buttons, accents)
  secondary: "#0B4F5E",         // Deep Ocean (nav, footer)
  accent: "#3DAFC7",            // Light Teal (bright highlights)
  gradientStart: "#F7F5F0",     // Bone (background)
  gradientEnd: "#E8F3EF",       // Light Eucalyptus tint (original Springs bg)
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
  heroDesktop: "/manus-storage/springs-hero-new_799cdc0f.mp4",
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

const SPRINGS_ROOMS: RoomSliderCard[] = [
  {
    id: "springs-villa",
    label: "Springs Villa",
    tagline: "Private hot spring pool fed by volcanic mineral water",
    description: "Freestanding villas with private natural hot spring-fed plunge pools, outdoor garden showers, and floor-to-ceiling windows framing the Arenal Volcano. Each villa is a secluded sanctuary in the rainforest canopy, designed exclusively for adults seeking the ultimate in privacy and relaxation.",
    sqft: "1,076",
    sqm: "100",
    guests: "2 Adults",
    video: "",
    photo: "/manus-storage/springs-r5-28782-edited_dbb6870b.jpg",
    exploreLink: "/springs/rooms/springs-villa",
    bookingUrl: BOOKING_URLS.springs,
  },
];

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
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.gradientEnd }}>
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
      <BrandNavigation pageType="property" sectionNav={[
        { id: "accommodations", label: "Private Villas" },
        { id: "experiences", label: "Experiences" },
        { id: "sustainability", label: "Sustainability" },
        { id: "wellness", label: "Wellness" },
        { id: "gastronomy", label: "The Table" },
        { id: "by-night", label: "By Night" },
      ]} />
      <HeroSection />
      <StorySection />
      {/* ── Rooms: Horizontal Slider ── */}
      <div id="accommodations">
        <RoomSlider
          sectionLabel="Private Villas"
          headline="Springs Villa"
          description="Each Springs Villa features a private natural hot spring pool fed by volcanic mineral water. Designed for ultimate privacy and relaxation."
          rooms={SPRINGS_ROOMS}
          forceVideoLeft={true}
          palette={{
            bg: PALETTE.gradientEnd,
            text: PALETTE.text,
            textSecondary: PALETTE.textSecondary,
            primary: PALETTE.primary,
            cardBg: PALETTE.gradientStart,
            cardBorder: `${PALETTE.primary}20`,
            pillBg: PALETTE.primary,
            pillText: "#FFFFFF",
          }}
        />
      </div>
      <ExperiencesSection />
      <SustainabilitySection />
      <WellnessSection />
      <GastronomySection />
      <ByNightCTA
        verticalSrc="/manus-storage/gardens-bynight-frog_dd1fb29e.jpg"
        verticalIsVideo={false}
        verticalRatio="3/4"
        horizontalSrc="/manus-storage/6519cc26-f89d-45e9-bff5-08a3a6728e3a_af227a5e.MP4"
        horizontalIsVideo={true}
        horizontalRatio="16/9"
        bgColor="#0D0704"
        headline={"Night Frog\nTour"}
        bodyText="As darkness descends on the rainforest, a hidden world reveals itself. Join our naturalist guides on an intimate nocturnal expedition through the volcanic trails, where dozens of rare frog species emerge under the canopy — their calls creating a symphony that can only be heard after nightfall."
        textSide="left"
        overlayOnVideo={true}
        hideButton={false}
        buttonLabel="Explore Night Frog Tour"
        buttonHref="/springs/experiences"
      />
      <ReviewsSection />
      <GettingHereSection />
      <ReserveCTA />
      <CrossPropertyCTA
        suggestions={[
          {
            name: "Nayara Bocas del Toro",
            chapter: "The Adults-Only Archipelago",
            tagline: "Another adults-only sanctuary , trade volcanic hot springs for Caribbean overwater villas on a solar-powered private island.",
            route: "/bocas-del-toro",
            image: "/manus-storage/439F9FCA-A2F3-4915-9A84-F09142364988_0a08ae7a.jpg",
            audienceTag: "Adults Only",
          },
          {
            name: "Nayara Hangaroa",
            chapter: "The Land of Giants",
            tagline: "From thermal sanctuary to ancient mystery , Moai guardians, Polynesian culture, the most remote island on Earth.",
            route: "/hangaroa",
            image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/RapaNui2(1)_179dfb19.jpeg",
            video: "/manus-storage/cta-hangaroa-ultrawide_ed5ffb72.mp4",
            audienceTag: "Families Welcome",
          },
        ]}
        bgColor={PALETTE.gradientEnd}
        textColor={PALETTE.text}
        textSecondaryColor={PALETTE.textTertiary}
        accentColor={PALETTE.primary}
        dividerColor={PALETTE.divider}
      />
      <Footer bgColor={PALETTE.secondary} textColor="#FFFFFF" propertyName="Springs" nameFontSize="20px" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO , Full-bleed video, cinematic text reveal
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const isMobile = useIsMobile();
  const mobileHeroImage = "/manus-storage/springs-mobile-hero-still_4af3365b.jpg";
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        {isMobile ? (
          <img src={mobileHeroImage} alt="Nayara Springs" className="w-full h-full object-cover" decoding="async" loading="eager" />
        ) : (
          <BlobVideo
          src={CDN.heroDesktop}
          className="w-full h-full object-cover"
          hasAudio={true}
          pillBg={`${PALETTE.secondary}B3`}
          pillColor="#F7F5F0"/>
        )}
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none" />
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
          style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: '13px' }}
        >
          Arenal Volcano National Park, Costa Rica
        </motion.p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   STORY , Text left, image right, landscape image below
   ═══════════════════════════════════════════════════════════════ */
function StorySection() {
  const isMobile = useIsMobile();
  return (
    <section id="story">
      {/* ── Row: Text left + S1 vertical video right ── */}
      <div className="flex flex-col md:flex-row" style={{ backgroundColor: PALETTE.gradientEnd }}>
        {/* Text column */}
        <div
          className="w-full md:w-1/2 flex flex-col justify-center px-8 py-12 md:px-16 lg:px-24 md:order-1"
          style={{ backgroundColor: PALETTE.gradientEnd }}
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

          <AnimateOnScroll variants={fadeUp} delay={0.25}>
            <p
              className="text-[15px] leading-[1.85] max-w-[480px] mt-4"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
            >
              An adults-only retreat where every villa has its own private thermal plunge pool fed by volcanic hot springs. <strong>The only three Michelin Key resort in Central America.</strong>
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variants={fadeUp} delay={0.3}>
            <a
              href="/blog/michelin-keys"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 mt-8 mb-6 px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "12px", letterSpacing: "0.08em", color: "#fff", backgroundColor: PALETTE.primary }}
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
              Read: 7 MICHELIN Keys. 3 Countries. 1 Standard of Excellence
            </a>
          </AnimateOnScroll>

          {!isMobile && (
            <div className="mt-8">
              <video
                src="/manus-storage/springs-badges-v2_0c3ef9e3.webm"
                autoPlay
                muted
                playsInline
                preload="metadata"
                className="h-32 lg:h-40 w-auto -ml-3 lg:-ml-6"
              />
            </div>
          )}
        </div>

        {/* S1 , Vertical video right (desktop only) */}
        {!isMobile && (
          <div className="w-full md:w-1/2 md:order-2">
            <MediaReveal delay={0.1}>
              <div className="overflow-hidden w-full h-full" style={{ aspectRatio: "3/4" }}>
                <NativeVideo src="/manus-storage/springs-s1-new_c5f05977.mp4" className="w-full h-full object-cover" />
              </div>
            </MediaReveal>
          </div>
        )}
      </div>

      {/* ── S2 , One Rainforest, Three Resorts ── */}
      {!isMobile ? (
        <OneRainforestCompactSprings />
      ) : (
      <div className="py-12 px-5" style={{ backgroundColor: "#f7f5f0" }}>
        <AnimateOnScroll variants={fadeUp}>
          <h2 className="text-center mb-8">
            <span className="block text-xl tracking-wide" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#3B2B26" }}>One Rainforest, Three Resorts</span>
          </h2>
        </AnimateOnScroll>
        <div className="flex flex-col gap-6">
          {SPRINGS_PANORAMA_PANELS.map((panel, i) => (
            <AnimateOnScroll key={panel.name} variants={fadeUp} delay={i * 0.1}>
              {panel.route ? (
                <Link href={panel.route} className="block">
                  <div className="relative rounded-lg overflow-hidden">
                    <img src={panel.image} alt={panel.name} className="w-full" style={{ aspectRatio: "4/3", objectFit: "cover" }} decoding="async" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <span className="text-[10px] tracking-[0.2em] uppercase text-white/60 block mb-1" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>{panel.tagline}</span>
                      <span className="text-lg tracking-wide text-white block" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>{panel.name}</span>
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="relative rounded-lg overflow-hidden">
                  <img src={panel.image} alt={panel.name} className="w-full" style={{ aspectRatio: "4/3", objectFit: "cover" }} decoding="async" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-white/60 block mb-1" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>{panel.tagline}</span>
                    <span className="text-lg tracking-wide text-white block" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>{panel.name}</span>
                    {panel.badge && <span className="inline-block mt-2 px-2 py-0.5 text-[9px] tracking-[0.15em] uppercase border border-white/40 text-white/80 rounded" style={{ fontFamily: "var(--font-body)" }}>{panel.badge}</span>}
                  </div>
                </div>
              )}
            </AnimateOnScroll>
          ))}
        </div>
      </div>
      )}
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SPRINGS VILLA , Image left, text right, landscape below
   On tinted background (gradient end)
   ═══════════════════════════════════════════════════════════════ */
function SpringsVillaSection() {
  const isMobile = useIsMobile();
  return (
    <section id="accommodations">
      {/* ── Row: S3 vertical video left + Text right ── */}
      <div className="flex flex-col md:flex-row" style={{ backgroundColor: PALETTE.gradientEnd }}>
        {/* S3 , Vertical video left */}
        <div className="w-full md:w-1/2 md:order-1 relative">
          <MediaReveal delay={0.1}>
            <div className="overflow-hidden w-full h-full" style={{ aspectRatio: "3/4" }}>
              {isMobile ? (
                <img src={CDN.s3} alt="Springs Villa" className="w-full h-full object-cover" loading="lazy" decoding="async" />
              ) : (
                <NativeVideo src="/manus-storage/springs-s3-accommodation_9a2a14f0.mp4" className="w-full h-full object-cover" />
              )}
            </div>
          </MediaReveal>
          {/* Explore pill , centered lower */}
          <div className="absolute bottom-[6%] left-0 right-0 flex items-center justify-center z-10">
            <a
              href="/springs/rooms/springs-villa"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full backdrop-blur-md border border-white/40 transition-transform hover:scale-[1.03] hover:bg-white/10"
              style={{
                backgroundColor: "rgba(255,255,255,0.12)",
                fontFamily: "var(--font-body)",
              }}
            >
              <span className="text-white text-[11px] tracking-[0.15em] uppercase font-medium whitespace-nowrap">
                Explore Springs Villa
              </span>
              <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </a>
          </div>
        </div>

        {/* Text column right */}
        <div
          className="w-full md:w-1/2 flex flex-col justify-center px-8 py-12 md:px-16 lg:px-24 md:order-2"
          style={{ backgroundColor: PALETTE.gradientEnd }}
        >
          <AnimateOnScroll variants={fadeUp}>
            <SectionLabel>Private Villas</SectionLabel>
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

              The perfect setting for a honeymoon or romantic escape, every detail is crafted for two , from candlelit dinners on your private terrace to couples' spa rituals using volcanic minerals and rainforest botanicals. Wake to birdsong, soak beneath the stars, and let the rhythm of the rainforest become the backdrop to your love story.
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

      {/* ── S4 , Full-width horizontal video (desktop only) ── */}
      {!isMobile && (
        <div className="w-full relative">
          <div style={{ aspectRatio: "16/9" }}><NativeVideo src="/manus-storage/springs-s4-accommodation-horizontal_8d844f9e.mp4" className="w-full h-full object-cover" /></div>
          <div className="absolute bottom-[6%] left-0 right-0 flex items-center justify-center z-10">
            <a
              href="/springs/rooms/springs-villa"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full backdrop-blur-md border border-white/40 transition-transform hover:scale-[1.03] hover:bg-white/10"
              style={{
                backgroundColor: "rgba(255,255,255,0.12)",
                fontFamily: "var(--font-body)",
              }}
            >
              <span className="text-white text-[11px] tracking-[0.15em] uppercase font-medium whitespace-nowrap">
                Explore Springs Villa
              </span>
              <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   EXPERIENCES , Card grid with category filters
   ═══════════════════════════════════════════════════════════════ */
function ExperiencesSection() {
  const isMobile = useIsMobile();
  return (
    <section id="experiences" style={{ backgroundColor: isMobile ? "#F6FFEE" : "#000" }}>
      {!isMobile ? (
      <div className="relative w-full">
        <div style={{ aspectRatio: "16/9" }}>
          <NativeVideo src="/manus-storage/springs-s6-experiences-horizontal_4ae41545.mp4" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end pb-16 lg:pb-20 px-16 lg:px-24">
          <AnimateOnScroll variants={fadeUp}>
            <p className="text-[11px] tracking-[0.25em] uppercase mb-4 text-white/70" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>Experiences</p>
          </AnimateOnScroll>
          <AnimateOnScroll variants={fadeUp} delay={0.1}>
            <h2 className="mb-6">
              <span className="block text-[2rem] lg:text-[2.5rem] leading-[1.05] tracking-wide text-white" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>Rio Celeste Waterfall</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll variants={fadeUp} delay={0.2}>
            <p className="text-[15px] leading-[1.85] max-w-[480px] text-white/85" style={{ fontFamily: "var(--font-body)" }}>
              From hanging bridges suspended above the rainforest canopy to volcanic hot springs hidden in ancient lava flows, every experience at Nayara Springs connects you to the extraordinary natural forces that shape this land.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variants={fadeUp} delay={0.3}>
            <a href="/springs/experiences" className="inline-flex items-center gap-2 mt-6 px-4 py-2.5 rounded-full border border-white/40 backdrop-blur-md text-white text-[11px] tracking-[0.15em] uppercase font-medium transition-all hover:bg-white/10 w-fit" style={{ fontFamily: "var(--font-body)" }}>
              Explore Experiences
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </a>
          </AnimateOnScroll>
        </div>
      </div>
      ) : (
      <div style={{ backgroundColor: "#F6FFEE" }}>
        <div className="px-5 pt-10 pb-6">
          <p className="text-[11px] tracking-[0.25em] uppercase mb-4" style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "rgba(59,43,38,0.6)" }}>Experiences</p>
          <h2 className="mb-4">
            <span className="block text-2xl leading-[1.05] tracking-wide" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#3B2B26" }}>Rio Celeste Waterfall</span>
          </h2>
          <p className="text-[14px] leading-[1.75]" style={{ fontFamily: "var(--font-body)", color: "#5a4a3a" }}>
            From hanging bridges suspended above the rainforest canopy to volcanic hot springs hidden in ancient lava flows, every experience at Nayara Springs connects you to the extraordinary natural forces that shape this land.
          </p>
          <a href="/springs/experiences" className="inline-flex items-center gap-2 mt-5 px-4 py-2.5 rounded-full border border-[#286241]/40 text-[11px] tracking-[0.15em] uppercase font-medium w-fit" style={{ fontFamily: "var(--font-body)", color: "#286241" }}>
            Explore Experiences
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
          </a>
        </div>
        <div style={{ aspectRatio: "3/4" }}>
          <img src="/manus-storage/springs-experiences-rio-celeste-still_650afe4f.jpg" alt="Rio Celeste Waterfall" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>
      )}
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SUSTAINABILITY , Dark overlay with palette accents
   ═══════════════════════════════════════════════════════════════ */
function SustainabilitySection() {
  return (
    <section id="sustainability">
      {/* ── Row: S7 vertical video left + Text right ── */}
      <div className="flex flex-col md:flex-row" style={{ backgroundColor: PALETTE.gradientEnd }}>
        {/* S7 , Vertical image left (on mobile: shows after text via order) */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <MediaReveal delay={0.1}>
            <div className="overflow-hidden w-full h-full" style={{ aspectRatio: "3/4" }}>
              <img src="/manus-storage/springs-bridge-white-dress_b908dee5.jpg" alt="Woman in white dress on rainforest bridge at Nayara Springs" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
          </MediaReveal>
        </div>

        {/* Text column right (on mobile: shows first via order) */}
        <div
          className="w-full md:w-1/2 flex flex-col justify-center px-8 py-12 md:px-16 lg:px-24 order-1 md:order-2"
          style={{ backgroundColor: PALETTE.gradientEnd }}
        >
          <AnimateOnScroll variants={fadeUp}>
            <SectionLabel>Sustainability</SectionLabel>
          </AnimateOnScroll>
          <TextReveal as="h2" className="mb-8" delay={0.1}>
            <span
              className="text-2xl md:text-[2rem] lg:text-[2.5rem] leading-[1.05] tracking-wide"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
            >
              Beyond Reforestation
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
              href="/tented-camp-sustainability"
              className="inline-flex items-center gap-2 mt-8 px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md w-fit"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#FFFFFF", backgroundColor: PALETTE.primary }}
            >
              Explore Sustainability
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </a>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   WELLNESS , Treatment cards with category filters
   ═══════════════════════════════════════════════════════════════ */
function WellnessSection() {
  const isMobile = useIsMobile();
  return (
    <section id="wellness" style={{ backgroundColor: isMobile ? "#F6FFEE" : "#000" }}>
      {!isMobile ? (
      <div className="relative w-full">
        <div style={{ aspectRatio: "16/9" }}>
          <NativeVideo src="/manus-storage/tented-wellness-horizontal-new_9bb43043.mp4" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end pb-16 lg:pb-20 px-16 lg:px-24">
          <AnimateOnScroll variants={fadeUp}>
            <span className="text-[11px] tracking-[0.2em] uppercase mb-4 block text-white/70" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>Wellness</span>
          </AnimateOnScroll>
          <AnimateOnScroll variants={fadeUp} delay={0.1}>
            <h2 className="mb-6">
              <span className="block text-[2rem] lg:text-[2.5rem] leading-[1.05] tracking-wide text-white" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>Mineral Hot Springs Wellness</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll variants={fadeUp} delay={0.2}>
            <p className="text-[15px] leading-[1.85] max-w-[480px] text-white/85" style={{ fontFamily: "var(--font-body)" }}>
              The spa at Nayara Springs draws its rituals from the geothermal earth and forest botanicals that surround it. Volcanic mineral waters, indigenous healing traditions, and the stillness of the rainforest converge to create an experience that restores from the inside out.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variants={fadeUp} delay={0.3}>
            <a href="/costa-rica-wellness" className="inline-flex items-center gap-2 mt-6 px-4 py-2.5 rounded-full border border-white/40 backdrop-blur-md text-white text-[11px] tracking-[0.15em] uppercase font-medium transition-all hover:bg-white/10 w-fit" style={{ fontFamily: "var(--font-body)" }}>
              Explore Wellness
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </a>
          </AnimateOnScroll>
        </div>
      </div>
      ) : (
      <div style={{ backgroundColor: "#F6FFEE" }}>
        <div className="px-5 pt-10 pb-6">
          <span className="text-[11px] tracking-[0.2em] uppercase mb-4 block" style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "rgba(59,43,38,0.6)" }}>Wellness</span>
          <h2 className="mb-4">
            <span className="block text-2xl leading-[1.05] tracking-wide" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#3B2B26" }}>Mineral Hot Springs Wellness</span>
          </h2>
          <p className="text-[14px] leading-[1.75]" style={{ fontFamily: "var(--font-body)", color: "#5a4a3a" }}>
            The spa at Nayara Springs draws its rituals from the geothermal earth and forest botanicals that surround it. Volcanic mineral waters, indigenous healing traditions, and the stillness of the rainforest converge to create an experience that restores from the inside out.
          </p>
          <a href="/costa-rica-wellness" className="inline-flex items-center gap-2 mt-5 px-4 py-2.5 rounded-full border border-[#286241]/40 text-[11px] tracking-[0.15em] uppercase font-medium w-fit" style={{ fontFamily: "var(--font-body)", color: "#286241" }}>
            Explore Wellness
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
          </a>
        </div>
        <div style={{ aspectRatio: "3/4" }}>
          <img src="/manus-storage/springs-wellness-hotsprings-vertical_01f52de6.jpg" alt="Mineral Hot Springs Wellness" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>
      )}
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   GASTRONOMY , Restaurant cards with DrawLine dividers
   ═══════════════════════════════════════════════════════════════ */
function GastronomySection() {
  return (
    <section id="gastronomy">
      {/* ── Row: Vertical image (bar) left + Text right ── */}
      <div className="flex flex-col md:flex-row" style={{ backgroundColor: "#FFFFFF" }}>
        {/* Vertical image left (on mobile: shows after text via order) */}
        <div className="w-full md:w-1/2 order-2 md:order-1 relative">
          <MediaReveal delay={0.1}>
            <div className="overflow-hidden w-full h-full" style={{ aspectRatio: "3/4" }}>
              <img src="/manus-storage/gardens-gastronomy-amorloco_6b48aef5.jpg" alt="Amor Loco Bar at Nayara Springs" className="w-full h-full object-cover" decoding="async" loading="lazy" />
            </div>
          </MediaReveal>
          {/* Explore Amor Loco — transparent oval overlaid on image */}
          <div className="absolute bottom-[6%] left-0 right-0 flex items-center justify-center z-10">
            <a
              href="/springs/gastronomy"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-[1.03] w-fit"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                fontSize: "11px",
                letterSpacing: "0.15em",
                textTransform: "uppercase" as const,
                color: "#fff",
                backgroundColor: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            >
              Explore Amor Loco
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </a>
          </div>
        </div>

        {/* Text column right (on mobile: shows first via order) */}
        <div
          className="w-full md:w-1/2 flex flex-col justify-center px-8 py-12 md:px-16 lg:px-24 order-1 md:order-2"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <AnimateOnScroll variants={fadeUp}>
            <SectionLabel>The Table</SectionLabel>
          </AnimateOnScroll>
          <TextReveal as="h2" className="mb-8" delay={0.1}>
            <span
              className="text-2xl md:text-[2rem] lg:text-[2.5rem] leading-[1.05] tracking-wide"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
            >
              Relais & Châteaux Dining
            </span>
          </TextReveal>
          <AnimateOnScroll variants={fadeUp} delay={0.3}>
            <p
              className="text-[15px] leading-[1.85] max-w-[480px]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
            >
              As a proud Relais & Châteaux property, Nayara Springs upholds the highest standards of culinary excellence. From the volcanic terroir of Arenal to your table, our culinary team transforms locally sourced ingredients into extraordinary dining experiences , each plate a celebration of Costa Rica's biodiversity, crafted with the artistry and precision that define the Relais & Châteaux tradition.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variants={fadeUp} delay={0.35}>
            <p
              className="text-[15px] leading-[1.85] max-w-[480px] mt-4"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
            >
              Our fine dining restaurant Amor Loco offers a Michelin-caliber tasting menu that transforms Costa Rica's finest ingredients into an unforgettable culinary journey. Each evening, our chefs craft a multi-course experience that celebrates volcanic terroir and tropical abundance , an intimate, candlelit affair where every plate tells a story of the land beneath your feet.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variants={fadeUp} delay={0.4}>
            <a
              href="/springs/gastronomy"
              className="inline-flex items-center gap-2 mt-8 px-4 py-2.5 rounded-full border border-white/40 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] w-fit"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#FFFFFF", backgroundColor: "rgba(255,255,255,0.12)" }}
            >
              Explore Forest to Table
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </a>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   REVIEWS , Guest pull-quote with stars
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
              , Sarah & James, TripAdvisor
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
   GETTING HERE , Travel routes to Arenal
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

        <AnimateOnScroll variants={fadeUp} delay={0.4}>
          <div className="mt-12 md:mt-16 rounded-lg overflow-hidden" style={{ border: `1px solid ${PALETTE.primary}15` }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.5!2d-84.6887954!3d10.5051463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa00be17451f0fd%3A0x3cbc5bcd3f94e296!2sNayara%20Springs!5e0!3m2!1sen!2scr!4v1700000000000!5m2!1sen!2scr"
              width="100%"
              height="280"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nayara Springs Location"
            />
          </div>
        </AnimateOnScroll>

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
   RESERVE CTA , "Begin Your Rainforest Adventure"
   ═══════════════════════════════════════════════════════════════ */
function ReserveCTA() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: PALETTE.gradientStart }}>
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


/* ═══════════════════════════════════════════════════════════════
   THREE KEYS, ONE DOOR — Cinematic Panorama (Springs in middle)
   Order: Tented Camp | Springs (You Are Here) | Gardens
   ═══════════════════════════════════════════════════════════════ */
const SPRINGS_PANORAMA_PANELS = [
  {
    name: "Tented Camp",
    tagline: "Clifftop Tents & Suites",
    description: "Open-air tented suites perched on a volcanic clifftop, each with a private plunge pool fed by natural hot springs and unobstructed views of Arenal Volcano.",
    badge: null,
    video: "/manus-storage/panel-tented-16x9-v2_0a79914b.mp4",
    image: "/manus-storage/poster-tented_0bb4a3c9.jpg",
    route: "/tented-camp",
    accent: "#868B75",
  },
  {
    name: "Springs",
    tagline: "Private Hot Springs Villas · Adults Only",
    description: "The world's only Three-Key MICHELIN hotel in Costa Rica. Private volcanic hot spring pools, a floating breakfast, and the most intimate luxury in the rainforest.",
    badge: "You Are Here",
    video: "/manus-storage/panel-springs-16x9_1ad9b29e.mp4",
    image: "/manus-storage/poster-springs_42fdf73b.jpg",
    route: null,
    accent: "#4B6358",
  },
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
];

function SpringsPanoramaPanel({
  panel,
  index,
  isHovered,
  anyHovered,
  onEnter,
  onLeave,
}: {
  panel: (typeof SPRINGS_PANORAMA_PANELS)[number];
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
      <div
        className="absolute inset-0"
        style={{
          background: isHovered
            ? "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.18) 55%, transparent 100%)"
            : "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.08) 60%, transparent 100%)",
          transition: "background 0.6s ease",
        }}
      />
      {index < 2 && (
        <div className="absolute top-0 right-0 bottom-0 w-px" style={{ backgroundColor: "rgba(255,255,255,0.18)" }} />
      )}
      {/* Three Keys, One Door title overlay on middle panel */}
      {index === 1 && (
        <>
          <div className="absolute top-0 left-0 right-0 h-[55%] z-[5] pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.35) 55%, transparent 100%)" }} />
          <div className="absolute top-0 left-0 right-0 z-10 flex flex-col items-center pt-10 md:pt-14 px-4 pointer-events-none">
            <p className="text-[12px] md:text-[13px] tracking-[0.25em] uppercase mb-3" style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "rgba(255,255,255,0.7)" }}>
              One Rainforest, Three Resorts
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-wide text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#fff" }}>
              Three Keys, One Door
            </h2>
            <p className="mt-4 text-[13px] md:text-[14px] leading-[1.8] max-w-[480px] text-center" style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.85)" }}>
              Stay at Springs and the restaurants, spa, hot springs, and experiences of Tented Camp and Gardens are all yours.
            </p>
          </div>
        </>
      )}
      {panel.badge && (
        <div className="absolute top-5 right-5 z-10">
          <span
            className="text-[9px] tracking-[0.18em] uppercase px-3 py-1.5 rounded-full"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: "#fff", backgroundColor: `${PALETTE.primary}CC`, backdropFilter: "blur(6px)" }}
          >
            {panel.badge}
          </span>
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
        <p className="text-[10px] tracking-[0.22em] uppercase mb-2" style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "rgba(255,255,255,0.65)", opacity: isHovered ? 1 : 0.7, transition: "opacity 0.5s ease" }}>
          {panel.tagline}
        </p>
        <h3 className="text-xl md:text-2xl lg:text-3xl tracking-wide leading-none" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#fff" }}>
          Nayara {panel.name}
        </h3>

        {panel.route && (
          <div style={{ overflow: "hidden", maxHeight: isHovered ? "48px" : "0px", opacity: isHovered ? 1 : 0, transition: "max-height 0.5s ease, opacity 0.4s ease 0.1s" }}>
            <p className="mt-3 text-[11px] tracking-[0.14em] uppercase flex items-center gap-2" style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "rgba(255,255,255,0.85)" }}>
              Explore
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </p>
          </div>
        )}
      </div>
    </div>
  );

  return panel.route ? (
    <Link href={panel.route} className="contents">{inner}</Link>
  ) : (
    <>{inner}</>
  );
}

function OneRainforestCompactSprings() {
  const isMobile = useIsMobile();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(1);
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
    <div ref={sectionRef} style={{ backgroundColor: "#000" }}>
      {!isMobile ? (
        <div className="flex" style={{ height: "580px" }}>
          {SPRINGS_PANORAMA_PANELS.map((panel, i) => (
            <SpringsPanoramaPanel
              key={panel.name}
              panel={panel}
              index={i}
              isHovered={hoveredIndex === i}
              anyHovered={hoveredIndex !== null}
              onEnter={() => setHoveredIndex(i)}
              onLeave={() => setHoveredIndex(1)}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col">
          {SPRINGS_PANORAMA_PANELS.map((panel, i) => {
            const inner = (
              <div key={panel.name} className="relative overflow-hidden" style={{ height: "260px" }}>
                <img src={panel.image} alt={`Nayara ${panel.name}`} className="absolute inset-0 w-full h-full object-cover" decoding="async" loading="lazy" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)" }} />
                {panel.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="text-[9px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full" style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: "#fff", backgroundColor: `${PALETTE.primary}CC` }}>{panel.badge}</span>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-[9px] tracking-[0.2em] uppercase mb-1" style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "rgba(255,255,255,0.6)" }}>{panel.tagline}</p>
                  <h3 className="text-lg tracking-wide" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#fff" }}>Nayara {panel.name}</h3>
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
      )}
    </div>
  );
}
