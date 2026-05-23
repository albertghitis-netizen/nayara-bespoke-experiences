/**
 * NAYARA HANGAROA - Easter Island, Chile
 * Layout: Hero (vertical right, badges left) → Accommodations (vertical left, switching)
 * → Experiences (horizontal) → Sustainability (vertical) → Wellness (horizontal)
 * → Gastronomy (vertical) → By Night (horizontal) → Bottom sections
 */
import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NativeVideo from "@/components/NativeVideo";
import { useIsMobile } from "@/hooks/useMobile";
import Footer from "@/components/Footer";
import CrossPropertyCTA from "@/components/CrossPropertyCTA";
import BrandNavigation from "@/components/BrandNavigation";
import { properties, type Property, type Excursion, type Treatment } from "@/data/properties";
import { hangaroaDining } from "@/data/dining";
import { AwardBadgeStrip } from "@/components/AwardBadges";
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
  staggerContainer,
  DURATION,
  EASE_CINEMATIC,
} from "@/components/motion";
import { LocalBusinessSchema, BreadcrumbListSchema } from "@/components/SEOSchemaEnhanced";
import RoomSlider, { RoomSliderCard } from "@/components/RoomSlider";
import { BOOKING_URLS } from "@/data/booking";

const hangaroa = properties.find((p: Property) => p.id === "hangaroa")!;

/* ═══════════════════════════════════════════════════════════════
   PALETTE - "Stone"
   ═══════════════════════════════════════════════════════════════ */
const PALETTE = {
  primary: "#536878",
  secondary: "#67737C",
  accent: "#9A9086",
  gradientStart: "#F7F5F0",
  gradientEnd: "#EAEBED",
  text: "#1A0F0A",
  textSecondary: "#1A0F0A",
  textTertiary: "#1A0F0A99",
  divider: "#E6DFD5",
};

/* ═══════════════════════════════════════════════════════════════
   CDN ASSETS
   ═══════════════════════════════════════════════════════════════ */
const CDN = {
  heroVideo: "/manus-storage/hangaroa-hero-new_4c1513ff.mp4",
  heroVertical: "/manus-storage/hangaroa-s1-vertical_db0be629.mp4",
  s1: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/RapaNui2(1)_179dfb19.jpeg",
  s2: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Untitleddesign-20_b052852b.jpg",
  s3: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/NH_45_42b93d04.JPG",
  // Gallery images
  warriorPortrait: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-warrior-portrait_572aaf06.jpg",
  moaiHorses: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-moai-horses-sunset_8152e72d.jpg",
  moaiPukao: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-moai-pukao-ocean_dc261e27.jpg",
  warriorsGroup: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-warriors-group-moai_daee7723.jpg",
  facePaint: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Untitleddesign-16_aa3fc296.JPG",
  womanMoai: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Untitleddesign-21_c15d07fa.JPG",
  culturalAdornment: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Untitleddesign-22_3f8e6011.JPG",
  rapaNuiWarrior: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/rapa-nui-warrior-portrait_60af8ef4.jpg",
  byNightVideo: "/manus-storage/772E29FE-4AF3-446F-A8F1-D8BA15DACE44_f5a81bf8_0615fffd.mp4",
  byNightLandscape: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-crater-milkyway_00741a91.webp",
};

/* ═══════════════════════════════════════════════════════════════
   ROOM SLIDER DATA
   ═══════════════════════════════════════════════════════════════ */
const HANGAROA_ROOMS: RoomSliderCard[] = [
  {
    id: "kainga-room",
    label: "Kainga",
    tagline: "Polynesian-inspired with panoramic ocean views",
    description: "Organic curves and volcanic stone frame a sanctuary inspired by Rapa Nui's ancient dwellings. Handcrafted wood columns, ambient lighting, and open-plan design connect you to the island's elemental beauty.",
    guests: "2 Adults",
    video: "",
    photo: "/manus-storage/NayaraHangaroa-KaingaRoom(67)_2136573a.jpg",
    exploreLink: "/hangaroa/rooms",
    bookingUrl: BOOKING_URLS.hangaroa,
  },
  {
    id: "maunga-room",
    label: "Maunga",
    tagline: "Spacious living inspired by the island's volcanic peaks",
    description: "Named after the island's sacred mountains, the Maunga suite offers a generous living area with built-in stone seating, driftwood art, and natural textures that echo the raw beauty of Easter Island's landscape.",
    guests: "2 Adults + 1 Child",
    video: "",
    photo: "/manus-storage/Hotel_Rooms_Suite_NH00009_73995641.jpeg",
    exploreLink: "/hangaroa/rooms",
    bookingUrl: BOOKING_URLS.hangaroa,
  },

];

const sectionPadding = "py-20 md:py-32 px-6 md:px-10";
const maxW = "max-w-[1200px] mx-auto";

function SectionLabel({ children, color }: { children: React.ReactNode; color?: string }) {
  return (
    <p
      className="text-[11px] tracking-[0.2em] mb-4 uppercase"
      style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: color || PALETTE.primary }}
    >
      {children}
    </p>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function Hangaroa() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.gradientStart }}>
      <LocalBusinessSchema
        name="Nayara Hangaroa"
        description="Luxury resort on Easter Island with oceanfront villas, Rapa Nui culture, and archaeological experiences."
        url="https://nayarahangaroa.com"
        image="https://nayararesorts.manus.space"
        address={{
          streetAddress: "Anakena",
          addressLocality: "Hanga Roa",
          addressRegion: "Easter Island",
          addressCountry: "CL",
          postalCode: "2770000",
        }}
        geo={{
          latitude: -27.1127,
          longitude: -109.3497,
        }}
        telephone="+56 32 255 3700"
        email="reservations@hangaroa.cl"
        awards={["Michelin Guide 2 Keys"]}
      />
      <BreadcrumbListSchema items={[
        { name: "Home", url: "https://nayararesorts.manus.space" },
        { name: "Nayara Hangaroa", url: "https://nayarahangaroa.com" },
      ]} />
      <BrandNavigation pageType="property" sectionNav={[
        { id: "rooms", label: "Rooms" },
        { id: "experiences", label: "Experiences" },
        { id: "sustainability", label: "Sustainability" },
        { id: "wellness", label: "Wellness" },
        { id: "gastronomy", label: "Gastronomy" },
        { id: "by-night", label: "By Night" },
      ]} />

      {/* ★ HERO — Full-screen hero video */}
      <HeroSection />

      {/* ★ S1 — Vertical video right, badges left */}
      <S1Section />

      {/* ★ ACCOMMODATIONS — RoomSlider with horizontal scroll */}
      <div id="rooms">
        <RoomSlider
          sectionLabel="Accommodations"
          headline={"Island Suites"}
          description="Each suite is a private sanctuary inspired by Rapa Nui's volcanic landscape and Polynesian heritage, with ocean views, private terraces, and locally crafted furnishings."
          rooms={HANGAROA_ROOMS}
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

      {/* ★ EXPERIENCES — Horizontal layout */}
      <div id="experiences">
        <ExperiencesSection />
      </div>

      {/* ★ SUSTAINABILITY — Vertical layout */}
      <div id="sustainability">
        <SustainabilitySection />
      </div>

      {/* ★ WELLNESS — Horizontal layout */}
      <div id="wellness">
        <WellnessSection />
      </div>

      {/* ★ GASTRONOMY — Vertical layout */}
      <div id="gastronomy">
        <GastronomySection />
      </div>

      {/* ★ BY NIGHT — Horizontal layout */}
      <div id="by-night">
        <ByNightSection />
      </div>

      {/* ★ BOTTOM SECTIONS */}
      <HangaroaReviews />
      <HangaroaGettingHere />
      <HangaroaReserveCTA />

      <CrossPropertyCTA
        suggestions={[
          {
            name: "Nayara Alto Atacama",
            chapter: "Where Desert Meets Sky",
            tagline: "Stay in Chile, change the world — from Easter Island's stone giants to the Atacama's salt flats, geysers, and star-filled skies.",
            route: "/alto-atacama",
            image: "/manus-storage/NayaraAltoAtacama_1_38075f4a.jpg",
            video: "/manus-storage/cta-atacama-ultrawide-v2_7749e836.mp4",
            audienceTag: "Families Welcome",
          },
          {
            name: "Nayara Springs",
            chapter: "The Hot Springs Sanctuary",
            tagline: "From stone giants to hot springs — an adults-only volcanic sanctuary hidden in Costa Rica's rainforest canopy.",
            route: "/springs",
            image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/5_ac0cb283.jpg",
            audienceTag: "Adults Only",
          },
        ]}
        bgColor={PALETTE.gradientEnd}
        textColor={PALETTE.text}
        textSecondaryColor={PALETTE.textTertiary}
        accentColor={PALETTE.primary}
        dividerColor={PALETTE.divider}
      />
      <Footer bgColor="#536878" textColor="#FFFFFF" />
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════════
   1. HERO — Full-screen hero video + H1 at bottom
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const isMobile = useIsMobile();
  const mobileHeroImage = "/manus-storage/hangaroa-mobile-hero_dc503ce8.png";
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, []);

  useEffect(() => {
    if (heroVideoRef.current) heroVideoRef.current.muted = isMuted;
  }, [isMuted]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {isMobile ? (
        <>
          <img src={mobileHeroImage} alt="Nayara Hangaroa" className="w-full h-full object-cover"  decoding="async" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none" />
        </>
      ) : (
        <>
          <video
            ref={heroVideoRef}
            className="w-full h-full object-cover"
            playsInline
            autoPlay
            muted={isMuted}
            loop
            preload="auto"
          >
            <source src={CDN.heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none" />
        </>
      )}

      {/* Sound pill — circular, top left */}
      {!isMobile && (
        <button
          onClick={() => setIsMuted(!isMuted)}
          aria-label={isMuted ? "Unmute" : "Mute"}
          className="fixed z-50 hidden md:flex lg:flex items-center justify-center rounded-full backdrop-blur-md shadow-sm border cursor-pointer hover:opacity-90 transition-all duration-300 h-9 w-9"
          style={{
            top: "8px",
            left: "56px",
            backgroundColor: "#536878B3",
            borderColor: "rgba(255,255,255,0.1)",
          }}
        >
          {isMuted && (
            <>
              <span className="absolute -inset-1 rounded-full border-2 animate-ping" style={{ borderColor: "rgba(247,245,240,0.37)" }} />
              <span className="absolute -inset-2 rounded-full border animate-ping" style={{ borderColor: "rgba(247,245,240,0.19)", animationDelay: "0.3s" }} />
            </>
          )}
          <svg
            className="w-4.5 h-4.5 transition-colors"
            style={{ color: "#F7F5F0" }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isMuted
                ? "M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-3.72a.75.75 0 011.28.53v14.88a.75.75 0 01-1.28.53L6.75 14.25H3.75a.75.75 0 01-.75-.75v-3a.75.75 0 01.75-.75h3z"
                : "M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-3.72a.75.75 0 011.28.53v14.88a.75.75 0 01-1.28.53L6.75 15.75H3.75a.75.75 0 01-.75-.75v-6a.75.75 0 01.75-.75h3z"
              }
            />
          </svg>
        </button>
      )}
      {/* H1 at bottom */}
      <div className="absolute bottom-10 md:bottom-16 left-6 md:left-10 right-6 md:right-10 z-10 flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-xl md:text-3xl lg:text-4xl leading-[0.95] tracking-wide text-center"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          Where Stone Giants Stand Sentinel Over the Pacific
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-white/60 text-[11px] md:text-xs tracking-[0.25em] uppercase mt-3"
          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
        >
          Easter Island, Chile
        </motion.p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   1b. S1 — Vertical video RIGHT, badges LEFT
   Split layout: text + badges on left, tall vertical video on right
   ═══════════════════════════════════════════════════════════════ */
function S1Section() {
  const isMobile = useIsMobile();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, []);

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = isMuted;
  }, [isMuted]);

  if (isMobile) {
    return (
      <section className="relative w-full">
        <div className="px-6 py-16" style={{ backgroundColor: PALETTE.gradientStart }}>
          <SectionLabel>Rapa Nui (Easter Island), Chile</SectionLabel>
          <h2
            className="text-2xl leading-[1.1] tracking-wide mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
          >
            The Only Luxury Property on Easter Island
          </h2>
          <p
            className="text-[14px] leading-[1.8] mb-8"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
          >
            On the most remote inhabited island on Earth, a lodge that honors the Rapa Nui culture and its monumental stone guardians.
          </p>
          <AwardBadgeStrip property="hangaroa" />
        </div>
        <div className="w-full" style={{ aspectRatio: "3/4" }}>
          <img
            src="/manus-storage/hangaroa-s1-stargazing_9a62d361.jpg"
            alt="Couple stargazing with Moai silhouettes"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="flex min-h-screen">
        {/* LEFT — Badges + text */}
        <div className="w-1/2 flex flex-col justify-center px-12 lg:px-20 xl:px-28" style={{ backgroundColor: PALETTE.gradientStart }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <SectionLabel>Rapa Nui (Easter Island), Chile</SectionLabel>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl lg:text-4xl xl:text-5xl leading-[1.1] tracking-wide mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
          >
            The Only Luxury Property on Easter Island
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-[15px] leading-[1.8] mb-10 max-w-[480px]"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
          >
            On the most remote inhabited island on Earth, a lodge that honors the Rapa Nui culture and its monumental stone guardians.
          </motion.p>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <AwardBadgeStrip property="hangaroa" />
          </motion.div>
        </div>

        {/* RIGHT — Vertical still image */}
        <div className="w-1/2 relative">
          <img
            src="/manus-storage/hangaroa-s1-stargazing_9a62d361.jpg"
            alt="Couple stargazing with Moai silhouettes"
            className="w-full h-full object-cover"
            style={{ minHeight: "100vh" }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/10 pointer-events-none" />
        </div>


      </div>
    </section>
  );
}




/* ═══════════════════════════════════════════════════════════════
   3. EXPERIENCES — Horizontal layout
   Full-width landscape image/video + text overlay or below
   ═══════════════════════════════════════════════════════════════ */
function ExperiencesSection() {
  return (
    <section style={{ backgroundColor: PALETTE.gradientStart }}>
      {/* Horizontal hero image */}
      <MediaReveal>
        <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
          <img src="/manus-storage/hangaroa-experiences-horizontal-16x9_41a3fdec.jpg" alt="Easter Island cultural experience with Nayara Hangaroa" className="w-full h-full object-cover" decoding="async" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none" />
          <div className="absolute bottom-8 md:bottom-12 left-6 md:left-10 z-10">
            <h2 className="text-white text-2xl md:text-4xl lg:text-5xl tracking-wide" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
              Cultural Journeys
            </h2>
          </div>
        </div>
      </MediaReveal>

      {/* Content below */}
      <div className={sectionPadding}>
        <div className={maxW}>
          <AnimateOnScroll variants={fadeUp}>
            <p className="text-[15px] leading-[1.8] mb-10 max-w-2xl" style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}>
              From sacred Moai sites to volcanic crater lakes and hidden caves, every experience on Easter Island connects you to one of the world's most mysterious civilizations.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variants={fadeUp} delay={0.3}>
            <a
              href="/hangaroa/experiences"
              className="inline-block mt-2 text-[11px] tracking-[0.15em] transition-opacity hover:opacity-70"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.primary }}
            >
              Explore All Experiences →
            </a>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}


/* ═══════════════════════════════════════════════════════════════
   4. SUSTAINABILITY — Vertical layout
   Vertical image/video on one side, text on other
   ═══════════════════════════════════════════════════════════════ */
function SustainabilitySection() {
  const initiatives = [
    { title: "Cultural Preservation", desc: "Supporting Rapa Nui cultural traditions through partnerships with local communities and educational programs." },
    { title: "Island Stewardship", desc: "Protecting Easter Island's unique ecosystem and archaeological heritage through sustainable tourism practices." },
    { title: "Native Reforestation", desc: "Replanting native species across the island to restore ecosystems degraded over centuries." },
    { title: "Renewable Energy", desc: "Leading the island's transition to renewable energy with solar installations and energy-efficient operations." },
  ];

  return (
    <section style={{ backgroundColor: PALETTE.gradientEnd }}>
      <div className="flex flex-col md:flex-row">
        {/* RIGHT — Vertical image */}
        <div className="w-full md:w-1/2 md:order-2">
          <MediaReveal delay={0.1}>
            <div className="overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <img src={CDN.facePaint} alt="Rapa Nui cultural heritage" className="w-full h-full object-cover" decoding="async" loading="lazy" />
            </div>
          </MediaReveal>
        </div>

        {/* LEFT — Text content */}
        <div className="w-full md:w-1/2 md:order-1 flex flex-col justify-center px-8 py-16 md:px-16 lg:px-24">
          <AnimateOnScroll variants={fadeUp}>
            <SectionLabel>Sustainability</SectionLabel>
          </AnimateOnScroll>
          <AnimateOnScroll variants={fadeUp} delay={0.1}>
            <h2
              className="text-2xl md:text-4xl lg:text-5xl tracking-wide mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
            >
              Guardians of Rapa Nui
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll variants={fadeUp} delay={0.2}>
            <p
              className="text-[15px] leading-[1.8] mb-8 max-w-[480px]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
            >
              Preserving the island's archaeological heritage, restoring native ecosystems, and leading the transition to renewable energy on one of the world's most remote inhabited islands.
            </p>
          </AnimateOnScroll>

          <StaggerOnScroll variants={staggerContainer} className="space-y-6">
            {initiatives.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="pl-5"
                style={{ borderLeft: `2px solid ${PALETTE.primary}40` }}
              >
                <h3 className="text-[16px] mb-1" style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: PALETTE.text }}>
                  {item.title}
                </h3>
                <p className="text-[13px] leading-[1.7]" style={{ fontFamily: "var(--font-body)", color: PALETTE.textTertiary }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </StaggerOnScroll>

          <AnimateOnScroll variants={fadeUp} delay={0.4}>
            <a
              href="/hangaroa/sustainability"
              className="inline-block mt-10 text-[11px] tracking-[0.15em] transition-opacity hover:opacity-70"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.primary }}
            >
              Explore Sustainability →
            </a>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}


/* ═══════════════════════════════════════════════════════════════
   5. WELLNESS — Horizontal layout
   Full-width landscape + content below
   ═══════════════════════════════════════════════════════════════ */
function WellnessSection() {
  return (
    <section style={{ backgroundColor: PALETTE.gradientStart }}>
      {/* Horizontal hero */}
      <MediaReveal>
        <div className="relative overflow-hidden" style={{ aspectRatio: "21/9" }}>
          <img src={CDN.rapaNuiWarrior} alt="Rapa Nui wellness" className="w-full h-full object-cover" decoding="async" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none" />
          <div className="absolute bottom-8 md:bottom-12 left-6 md:left-10 z-10">
            <h2 className="text-white text-2xl md:text-4xl lg:text-5xl tracking-wide" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
              {hangaroa.theme.spaHeadline.replace("\n", " ")}
            </h2>
          </div>
        </div>
      </MediaReveal>

      {/* Content */}
      <div className={sectionPadding}>
        <div className={maxW}>
          <AnimateOnScroll variants={fadeUp}>
            <p className="text-[15px] leading-[1.8] mb-10 max-w-2xl" style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}>
              Ancient Polynesian healing traditions meet modern wellness in a sanctuary where the Pacific Ocean provides the soundtrack and volcanic minerals nourish the body.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variants={fadeUp} delay={0.3}>
            <a
              href="/hangaroa/wellness"
              className="inline-block mt-2 text-[11px] tracking-[0.15em] transition-opacity hover:opacity-70"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.primary }}
            >
              Explore Wellness →
            </a>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}


/* ═══════════════════════════════════════════════════════════════
   6. GASTRONOMY — Vertical layout
   Vertical image right, text + restaurant cards left
   ═══════════════════════════════════════════════════════════════ */
function GastronomySection() {
  const restaurants = Array.isArray(hangaroaDining) ? hangaroaDining : [hangaroaDining];

  return (
    <section style={{ backgroundColor: PALETTE.gradientEnd }}>
      <div className="flex flex-col md:flex-row">
        {/* LEFT — Text + restaurant list */}
        <div className="w-full md:w-1/2 md:order-1 flex flex-col justify-center px-8 py-16 md:px-16 lg:px-24">
          <AnimateOnScroll variants={fadeUp}>
            <SectionLabel>Forest to Table</SectionLabel>
          </AnimateOnScroll>
          <AnimateOnScroll variants={fadeUp} delay={0.1}>
            <h2
              className="text-2xl md:text-4xl lg:text-5xl tracking-wide mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
            >
              Pacific Island Cuisine
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll variants={fadeUp} delay={0.2}>
            <p
              className="text-[15px] leading-[1.8] mb-10 max-w-[480px]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
            >
              Our chefs honor Rapa Nui's Polynesian culinary heritage, sourcing from local fishermen and island gardens to create cuisine that celebrates the bounty of the Pacific.
            </p>
          </AnimateOnScroll>

          <StaggerOnScroll variants={staggerContainer} className="space-y-8">
            {restaurants.map((restaurant: any, i: number) => (
              <motion.div key={i} variants={fadeUp}>
                <DrawLine color={PALETTE.primary} className="mb-4" />
                <h3 className="text-[18px] mb-1" style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: PALETTE.text }}>
                  {restaurant.name}
                </h3>
                <p className="text-[11px] tracking-[0.1em] mb-3" style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.accent }}>
                  {restaurant.cuisine}
                </p>
                <p className="text-[13px] leading-[1.7]" style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}>
                  {restaurant.description}
                </p>
              </motion.div>
            ))}
          </StaggerOnScroll>

          <AnimateOnScroll variants={fadeUp} delay={0.4}>
            <a
              href="/hangaroa/gastronomy"
              className="inline-block mt-10 text-[11px] tracking-[0.15em] transition-opacity hover:opacity-70"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.primary }}
            >
              Explore Dining →
            </a>
          </AnimateOnScroll>
        </div>

        {/* RIGHT — Vertical image */}
        <div className="w-full md:w-1/2 md:order-2">
          <MediaReveal delay={0.1}>
            <div className="overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <img src="/manus-storage/hangaroa-gastronomy-dessert_440503bd.jpeg" alt="Pacific island dessert with raspberry meringue" className="w-full h-full object-cover" decoding="async" loading="lazy" />
            </div>
          </MediaReveal>
        </div>
      </div>
    </section>
  );
}


/* ═══════════════════════════════════════════════════════════════
   7. BY NIGHT — Horizontal layout
   Full-width landscape + text below or vertical video + landscape
   ═══════════════════════════════════════════════════════════════ */
function ByNightSection() {
  const DARK = "#000000";
  const BONE = "#FFFFFF";
  const MIDDLE = "#536878";

  return (
    <section style={{ backgroundColor: DARK }}>
      {/* Horizontal landscape */}
      <MediaReveal>
        <div className="relative overflow-hidden" style={{ aspectRatio: "21/9" }}>
          <img
            src={CDN.byNightLandscape}
            alt="Rano Kau crater beneath the Milky Way"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none" />
          <div className="absolute bottom-8 md:bottom-12 left-6 md:left-10 z-10">
            <h2 className="text-white text-2xl md:text-4xl lg:text-5xl tracking-wide" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
              Moai Beneath the Milky Way
            </h2>
          </div>
        </div>
      </MediaReveal>

      {/* Content row */}
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-16 md:px-16 lg:px-24">
          <AnimateOnScroll variants={fadeUp}>
            <SectionLabel color={MIDDLE}>Nayara by Night</SectionLabel>
          </AnimateOnScroll>
          <AnimateOnScroll variants={fadeUp} delay={0.1}>
            <p
              className="text-[15px] leading-[1.8] max-w-[480px]"
              style={{ fontFamily: "var(--font-body)", color: "#FFFFFFCC" }}
            >
              On Easter Island, the ancient Moai stand as silent witnesses to the cosmos. At Hangaroa, the night sky is a living canvas — the Milky Way stretches from horizon to horizon above these monolithic guardians. Sunrise and sunset paint the stone figures in gold, while after dark, the stars claim the island entirely.
            </p>
          </AnimateOnScroll>
        </div>
        <div className="w-full md:w-1/2">
          <MediaReveal delay={0.1}>
            <div className="overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <video
                src={CDN.byNightVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />
            </div>
          </MediaReveal>
        </div>
      </div>
    </section>
  );
}


/* ═══════════════════════════════════════════════════════════════
   REVIEWS — Guest Voices
   ═══════════════════════════════════════════════════════════════ */
function HangaroaReviews() {
  return (
    <section
      className="py-20 md:py-28 px-8 md:px-16"
      style={{ backgroundColor: PALETTE.gradientEnd }}
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
            style={{ fontFamily: "var(--font-body)", color: PALETTE.textTertiary }}
          >
            Based on 800+ reviews on TripAdvisor
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.2}>
          <blockquote>
            <p
              className="text-[17px] md:text-[20px] leading-relaxed italic mb-4"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.text }}
            >
              "A once-in-a-lifetime experience. The connection to Rapa Nui culture is authentic and deeply moving. Watching the sunrise over the Moai from our suite was something we will never forget. The staff made us feel like family."
            </p>
            <cite
              className="text-[12px] tracking-[0.08em] not-italic"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.textTertiary }}
            >
              — Sarah & James, TripAdvisor
            </cite>
          </blockquote>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.3}>
          <a
            href="https://www.tripadvisor.com/Hotel_Review-g316040-d301079-Reviews-Hangaroa_Eco_Village_Spa-Easter_Island.html"
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
   GETTING HERE — Easter Island travel info
   ═══════════════════════════════════════════════════════════════ */
function HangaroaGettingHere() {
  const routes = [
    {
      title: "International Flight to Santiago",
      description: "Fly into Santiago de Chile (SCL) from major international hubs. Direct flights available from North America, Europe, and across South America.",
      icon: "✈",
    },
    {
      title: "Flight to Easter Island",
      description: "LATAM Airlines operates daily flights from Santiago to Mataveri International Airport (IPC) on Easter Island. Flight time is approximately 5 hours.",
      icon: "🏝",
    },
    {
      title: "Airport Transfer",
      description: "Nayara Hangaroa is just 5 minutes from Mataveri Airport. Our team greets you on arrival and provides a private transfer directly to the resort.",
      icon: "🚐",
    },
    {
      title: "Island Orientation",
      description: "Upon arrival, your personal guide introduces you to the island's geography, culture, and your curated experience itinerary for the days ahead.",
      icon: "🗺",
    },
  ];

  return (
    <section
      id="getting-here"
      className="py-20 md:py-28 px-8 md:px-16"
      style={{ backgroundColor: PALETTE.gradientStart }}
    >
      <div className="max-w-[1000px] mx-auto">
        <AnimateOnScroll variants={fadeUp}>
          <SectionLabel>Getting Here</SectionLabel>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.1}>
          <h2 className="mb-4">
            <span
              className="text-2xl md:text-[2rem] lg:text-[2.5rem] leading-[1.1] tracking-wide"
              style={{ fontFamily: "var(--font-display)", color: PALETTE.text }}
            >
              Your Journey to Easter Island
            </span>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.15}>
          <p
            className="text-[15px] leading-relaxed mb-12 md:mb-16 max-w-xl"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
          >
            Easter Island — Rapa Nui — is one of the most remote inhabited islands on Earth, located 3,700 km off the coast of Chile in the southeastern Pacific Ocean.
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

        <AnimateOnScroll variants={fadeUp} delay={0.45}>
          <div className="mt-12 md:mt-16 rounded-lg overflow-hidden" style={{ border: `1px solid ${PALETTE.primary}20` }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.5!2d-109.4390029!3d-27.1509399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9947fba5ecd79cf7%3A0x90a95c1c2cccc4a1!2sNayara%20Hangaroa!5e0!3m2!1sen!2scl!4v1700000000000!5m2!1sen!2scl"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nayara Hangaroa Location"
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
              Our reservations team can arrange all flights and transfers. Contact us at{" "}
              <a href="mailto:reservations@hangaroa.cl" className="underline" style={{ color: PALETTE.primary }}>
                reservations@hangaroa.cl
              </a>{" "}
              or call{" "}
              <a href="tel:+56322553700" className="underline" style={{ color: PALETTE.primary }}>
                +56 32 255 3700
              </a>.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}


/* ═══════════════════════════════════════════════════════════════
   RESERVE CTA — "Begin Your Easter Island Journey"
   ═══════════════════════════════════════════════════════════════ */
function HangaroaReserveCTA() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: PALETTE.gradientEnd }}>
      <div className="max-w-[800px] mx-auto text-center">
        <AnimateOnScroll variants={fadeUp}>
          <TextReveal as="h2" className="mb-6" delay={0.1}>
            <span
              className="text-2xl md:text-4xl lg:text-5xl tracking-wide"
              style={{ fontFamily: "var(--font-display)", color: PALETTE.text }}
            >
              Begin Your Easter Island Journey
            </span>
          </TextReveal>
          <p className="text-[15px] leading-[1.8] mb-8" style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}>
            Oceanfront suites, ancient Moai at sunrise, Polynesian culture, and the most remote luxury destination on Earth await.
          </p>
          <a
            href="https://www.synxis.com/rez.aspx?Hotel=76901&Chain=24447&arrive=&depart=&adult=2&child=0"
            target="_blank"
            rel="noopener noreferrer"
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
