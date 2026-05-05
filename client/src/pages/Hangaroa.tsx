/**
 * NAYARA HANGAROA - Easter Island, Chile
 * Visual Identity: "Stone" palette - Cormorant Garamond - Cinematic motion - Cultural immersion
 */
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import NativeVideo from "@/components/NativeVideo";
import { useIsMobile } from "@/hooks/useMobile";
import Footer from "@/components/Footer";
import CrossPropertyCTA from "@/components/CrossPropertyCTA";
import BrandNavigation from "@/components/BrandNavigation";
// CinematicScroll removed — no auto-scroll on Hangaroa
import { properties, type Property, type Excursion, type Treatment } from "@/data/properties";
import { hangaroaDining } from "@/data/dining";
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
  staggerContainer,
  DURATION,
  EASE_CINEMATIC,
} from "@/components/motion";
import { LocalBusinessSchema, BreadcrumbListSchema } from "@/components/SEOSchemaEnhanced";

const hangaroa = properties.find((p: Property) => p.id === "hangaroa")!;

/* ═══════════════════════════════════════════════════════════════
   PALETTE - "Stone"
   ═══════════════════════════════════════════════════════════════ */
/* Slate Gray palette — volcanic stone */
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
  heroVideo: "/manus-storage/hangaroa-hero-new_00c65985.mp4",
  s1Vertical: "/manus-storage/hangaroa-s1-vertical_db0be629.mp4",
  s1: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/RapaNui2(1)_179dfb19.jpeg",
  s2: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Untitleddesign-20_b052852b.jpg",
  s3: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/NH_45_42b93d04.JPG",
  s4: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/RapaNui2(1)_179dfb19.jpeg",
  // Gallery images
  warriorPortrait: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-warrior-portrait_572aaf06.jpg",
  moaiHorses: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-moai-horses-sunset_8152e72d.jpg",
  moaiPukao: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-moai-pukao-ocean_dc261e27.jpg",
  warriorsGroup: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-warriors-group-moai_daee7723.jpg",
  facePaint: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Untitleddesign-16_aa3fc296.JPG",
  womanMoai: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Untitleddesign-21_c15d07fa.JPG",
  culturalAdornment: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Untitleddesign-22_3f8e6011.JPG",
  rapaNuiWarrior: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/rapa-nui-warrior-portrait_60af8ef4.jpg",
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
   MAIN PAGE
   ═══════════════════════════════════════════════════════════════ */
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
  { title: "Rapa Nui Suite", description: "Spacious suites inspired by the island's volcanic landscape, with panoramic ocean views, private terraces, and locally crafted furnishings that honor Polynesian heritage.", tags: ["Ocean views", "Private terrace", "Cultural design"] },
  { title: "Moai Suite", description: "Our most expansive accommodations, offering separate living areas with floor-to-ceiling windows framing the Pacific horizon. Each suite features a private garden and outdoor soaking tub.", tags: ["Separate living area", "Garden", "Soaking tub"] },
  { title: "Ahu Suite", description: "Intimate retreats with direct garden access, handwoven textiles, and volcanic stone accents. Perfect for those seeking a deeply immersive connection to Rapa Nui culture.", tags: ["Garden access", "Cultural immersion", "Volcanic stone"] },
];

const sustainabilityCards = [
  { title: "Rapa Nui Heritage Preservation", description: "Supporting the preservation of Rapa Nui's archaeological sites and cultural traditions through partnerships with local communities and UNESCO." },
  { title: "Native Reforestation", description: "Replanting native species across the island to restore ecosystems that have been degraded over centuries, creating habitat for endemic wildlife." },
  { title: "Ocean Conservation", description: "Protecting the marine ecosystems surrounding Easter Island through sustainable fishing practices and coral reef monitoring programs." },
  { title: "Renewable Energy Transition", description: "Leading the island's transition to renewable energy with solar installations and energy-efficient operations across the resort." },
];

const gastronomyCards = (Array.isArray(hangaroaDining) ? hangaroaDining : (hangaroaDining as any).restaurants || [hangaroaDining]).map((r: any) => ({
  title: r.name,
  subtitle: r.cuisine || undefined,
  description: r.description,
  tags: r.atmosphere ? [r.atmosphere] : [],
}));

const experienceCategories = (hangaroa.excursionCategories || []).filter((c: { id: string; label: string }) => c.id !== "all");
const experienceCards = hangaroa.excursions.map((e: Excursion) => ({ title: e.name, description: e.description, category: e.category, tags: e.duration ? [e.duration] : [] }));

const wellnessCategories = (hangaroa.spaCategories || []).filter((c: { id: string; label: string }) => c.id !== "all");
const wellnessCards = hangaroa.treatments.map((t: Treatment) => ({ title: t.name, description: t.description, category: t.category, tags: t.duration ? [t.duration] : [] }));

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
      <HeroSection />
      <StorySection />
      <S1CascadeSection />

      <div id="rooms">
      {/* ★ 1. ROOMS — Slider */}
      <PropertySlider
        sectionLabel="Accommodations"
        headline="Island Suites"
        description="Each suite draws inspiration from Rapa Nui's volcanic landscape and Polynesian heritage, with panoramic ocean views and private terraces overlooking the Pacific."
        cards={roomCards}
        learnMoreLink="/hangaroa/rooms"
        learnMoreLabel="Explore Rooms"
        palette={SLIDER_PALETTE}
      />

      </div>
      <div id="experiences">
      {/* ★ 2. EXPERIENCES — Sorter */}
      <PropertySorter
        sectionLabel="Experiences"
        headline="Rapa Nui Discoveries"
        description="From sacred Moai sites to volcanic crater lakes and hidden caves, every experience on Easter Island connects you to one of the world's most mysterious civilizations."
        categories={experienceCategories}
        cards={experienceCards}
        learnMoreLink="/hangaroa/experiences"
        learnMoreLabel="Explore More"
        palette={SLIDER_PALETTE}
      />

      </div>
      <div id="sustainability">
      {/* ★ 3. SUSTAINABILITY — Slider */}
      <PropertySlider
        sectionLabel="Sustainability"
        headline="Guardians of Rapa Nui"
        description="Preserving the island's archaeological heritage, restoring native ecosystems, and leading the transition to renewable energy on one of the world's most remote inhabited islands."
        cards={sustainabilityCards}
        learnMoreLink="/hangaroa/sustainability"
        learnMoreLabel="Explore More"
        palette={SLIDER_PALETTE}
      />

      </div>
      <div id="wellness">
      {/* ★ 4. WELLNESS — Sorter */}
      <PropertySorter
        sectionLabel="Wellness"
        headline={hangaroa.theme.spaHeadline.replace("\n", " ")}
        description="Ancient Polynesian healing traditions meet modern wellness in a sanctuary where the Pacific Ocean provides the soundtrack and volcanic minerals nourish the body."
        categories={wellnessCategories}
        cards={wellnessCards}
        learnMoreLink="/hangaroa/wellness"
        learnMoreLabel="Explore Wellness"
        palette={SLIDER_PALETTE}
      />

      </div>
      <div id="gastronomy">
      {/* ★ 5. GASTRONOMY — Slider */}
      <PropertySlider
        sectionLabel="Forest to Table"
        headline="Pacific Island Cuisine"
        description="Our chefs honor Rapa Nui's Polynesian culinary heritage, sourcing from local fishermen and island gardens to create cuisine that celebrates the bounty of the Pacific."
        cards={gastronomyCards}
        learnMoreLink="/hangaroa/gastronomy"
        learnMoreLabel="Explore Dining"
        palette={SLIDER_PALETTE}
      />

      {/* ── TRIMMED: GalleryIntegratedSections hidden for performance ── */}
      {/* <GalleryIntegratedSections /> */}
      </div>

      {/* ★ 6. REVIEWS */}
      <HangaroaReviews />

      {/* ★ 7. GETTING HERE */}
      <HangaroaGettingHere />

      {/* ★ 8. NAYARA BY NIGHT */}
      <div id="by-night">
      <NayaraByNightSection />
      </div>

      {/* ★ 9. RESERVE CTA */}
      <HangaroaReserveCTA />

      {/* ★ 10. EXPLORE HOTELS */}
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
      <Footer bgColor="#536878"  textColor="#FFFFFF" />
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════════
   NAYARA BY NIGHT — Moai beneath the Milky Way
   ═══════════════════════════════════════════════════════════════ */
function NayaraByNightSection() {
  const DARK = "#000000";
  const BONE = "#FFFFFF";
  const MIDDLE = "#536878";
  return (
    <section style={{ backgroundColor: DARK }}>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-16 md:px-16 lg:px-24 md:order-1">
          <AnimateOnScroll variants={fadeUp}>
            <p
              className="text-[11px] tracking-[0.2em] mb-4 uppercase"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: MIDDLE }}
            >
              Nayara by Night
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variants={fadeUp} delay={0.1}>
            <h2
              className="text-2xl md:text-4xl lg:text-5xl tracking-wide mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: BONE }}
            >
              Moai Beneath<br />the Milky Way
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll variants={fadeUp} delay={0.2}>
            <p
              className="text-[15px] leading-[1.8] max-w-[480px]"
              style={{ fontFamily: "var(--font-body)", color: "#FFFFFFCC" }}
            >
              On Easter Island, the ancient Moai stand as silent witnesses to the cosmos. At Hangaroa, the night sky is a living canvas — the Milky Way stretches from horizon to horizon above these monolithic guardians. Sunrise and sunset paint the stone figures in gold, while after dark, the stars claim the island entirely.
            </p>
          </AnimateOnScroll>
        </div>
        <div className="w-full md:w-1/2 md:order-2">
          <MediaReveal delay={0.1}>
            <div className="overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <video
                src="/manus-storage/772E29FE-4AF3-446F-A8F1-D8BA15DACE44_f5a81bf8.mov"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </MediaReveal>
        </div>
      </div>
      <div className="hidden md:block" style={{ backgroundColor: DARK }}>
        <MediaReveal delay={0.05}>
          <div className="overflow-hidden" style={{ aspectRatio: "21/9" }}>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-crater-milkyway_00741a91.webp"
              alt="Rano Kau crater beneath the Milky Way — Easter Island"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </MediaReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO - Full-screen video, cinematic text reveal
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const isMobile = useIsMobile();
  const mobileHeroImage = "/manus-storage/hangaroa-mobile-hero_dc503ce8.png";
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, []);

  /* Sync muted state */
  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = isMuted;
  }, [isMuted]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        {isMobile ? (
          <img src={mobileHeroImage} alt="Nayara Hangaroa" className="w-full h-full object-cover" />
        ) : (
          <video
          ref={videoRef}
          className="w-full h-full object-cover"
          playsInline
          muted
          loop
          preload="auto"
        >
          <source src={CDN.heroVideo} type="video/mp4" />
        </video>
        )}
        {/* Sound pill */}
        {!isMobile && <button
          onClick={() => setIsMuted(!isMuted)}
          aria-label={isMuted ? "Unmute" : "Mute"}
          className="fixed z-50 flex items-center justify-center rounded-full backdrop-blur-md shadow-sm border cursor-pointer hover:opacity-90 transition-all duration-300 h-9 px-4"
          style={{
            top: "8px",
            left: "56px",
            backgroundColor: "#536878B3",
            borderColor: "rgba(255,255,255,0.1)",
          }}
        >
          {isMuted ? (
            <svg className="w-3.5 h-3.5 mr-1.5" style={{ color: "#F7F5F0" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-3.72a.75.75 0 011.28.53v14.88a.75.75 0 01-1.28.53L6.75 14.25H3.75a.75.75 0 01-.75-.75v-3a.75.75 0 01.75-.75h3z" />
            </svg>
          ) : (
            <svg className="w-3.5 h-3.5 mr-1.5" style={{ color: "#F7F5F0" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-3.72a.75.75 0 011.28.53v14.88a.75.75 0 01-1.28.53L6.75 15.75H3.75a.75.75 0 01-.75-.75v-6a.75.75 0 01.75-.75h3z" />
            </svg>
          )}
          <span className="text-xs tracking-[0.08em]" style={{ color: "#F7F5F0", fontFamily: "var(--font-body)", fontWeight: 500 }}>
            {isMuted ? "Sound" : "Mute"}
          </span>
        </button>}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none" />
      </div>
      {/* H1 overlaid — bottom center */}
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6 md:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-xl md:text-3xl lg:text-4xl leading-[0.95] tracking-wide text-center"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          Where Moai & Rapa Nui Culture Meet the Pacific
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="text-white/60 text-[11px] md:text-xs tracking-[0.25em] uppercase mt-3"
          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
        >
          Rapa Nui (Easter Island), Chile
        </motion.p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   S1 CASCADE — Vertical video right, H2 + copy left
   ═══════════════════════════════════════════════════════════════ */
function S1CascadeSection() {
  const display = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
  const body = { fontFamily: "var(--font-body)" } as const;
  return (
    <section className={sectionPadding}>
      <div className={maxW}>
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          {/* Left — H2 + copy */}
          <div className="flex-1 order-2 md:order-1">
            <AnimateOnScroll variants={fadeUp}>
              <SectionLabel>The Island</SectionLabel>
            </AnimateOnScroll>
            <TextReveal as="h2" className="mb-8" delay={0.1}>
              <span
                className="text-2xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-wide"
                style={{ ...display, color: PALETTE.text }}
              >
                Te Pito o Te Henua
              </span>
            </TextReveal>
            <AnimateOnScroll variants={fadeUp} delay={0.3}>
              <p className="text-[15px] leading-[1.8] mb-5" style={{ ...body, color: PALETTE.textSecondary }}>
                Known as "The Navel of the World," Rapa Nui sits over 2,000 miles from the nearest inhabited land. Its volcanic peaks rise from the Pacific like ancient sentinels, guarding nearly a thousand Moai statues carved by a civilization that navigated by the stars.
              </p>
              <p className="text-[15px] leading-[1.8]" style={{ ...body, color: PALETTE.textSecondary }}>
                Here, the wind carries stories of ancestral voyagers, and every sunset paints the stone guardians in hues of amber and rose. Nayara Hangaroa is your gateway to this sacred landscape — where luxury meets the world's most remote living culture.
              </p>
            </AnimateOnScroll>
          </div>
          {/* Right — vertical video */}
          <div className="flex-1 order-1 md:order-2">
            <MediaReveal>
              <div className="overflow-hidden rounded-sm" style={{ aspectRatio: "3/4" }}>
                <NativeVideo
                  src={CDN.s1Vertical}
                  className="w-full h-full object-cover"
                />
              </div>
            </MediaReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   STORY - Text left, image right, landscape image below
   ═══════════════════════════════════════════════════════════════ */
function StorySection() {
  return (
    <section id="story" className={sectionPadding}>
      <div className={maxW}>
        <div className="max-w-3xl mb-12 md:mb-16">
            <AnimateOnScroll variants={fadeUp}>
              <SectionLabel>The Property</SectionLabel>
            </AnimateOnScroll>
            <TextReveal as="h2" className="mb-8" delay={0.1}>
              <span
                className="text-2xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-wide"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
              >
                Where Legend Lives
              </span>
            </TextReveal>
            <AnimateOnScroll variants={fadeUp} delay={0.3}>
              <p className="text-[15px] leading-[1.8] mb-5" style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}>
                {hangaroa.heroSubtitle}
              </p>
              <p className="text-[15px] leading-[1.8]" style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}>
                Nayara Hangaroa is perched on one of the world's most remote islands, where ancient Rapa Nui culture thrives alongside contemporary luxury. Surrounded by iconic Moai statues and pristine Pacific vistas, this sanctuary offers cultural immersion, spiritual exploration, and world-class hospitality in a place where time feels suspended.
              </p>
              <p className="text-[15px] leading-[1.8] mt-4" style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}>
                On the most remote inhabited island on Earth, a lodge that honors the Rapa Nui culture and its monumental stone guardians. The only luxury property on Easter Island.
              </p>
            </AnimateOnScroll>
            <div className="hidden md:block">
              <AnimateOnScroll variants={fadeUp} delay={0.5}>
                <AwardBadgeStrip property="hangaroa" />
              </AnimateOnScroll>
            </div>
        </div>

        {/* Landscape image — hidden on mobile */}
        <div className="hidden md:block">
          <MediaReveal delay={0.1}>
            <div className="overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <img src={CDN.s2} alt="Iconic Moai statues on Easter Island" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </MediaReveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ROOMS - Image left, text right, video below
   On tinted background
   ═══════════════════════════════════════════════════════════════ */
function RoomsSection() {
  return (
    <TintedSection backgroundColor={PALETTE.gradientEnd} className={sectionPadding}>
      <div className={maxW}>
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start mb-16">
          <div className="md:flex-1 order-2 md:order-1">
            <MediaReveal delay={0.1}>
              <div className="overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <img src={CDN.s3} alt="Rapa Nui woman with traditional face paint and shell headdress" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </MediaReveal>
          </div>
          <div className="md:flex-1 order-1 md:order-2">
            <AnimateOnScroll variants={fadeUp}>
              <SectionLabel>Accommodations</SectionLabel>
            </AnimateOnScroll>
            <TextReveal as="h2" className="mb-8" delay={0.1}>
              <span
                className="text-2xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-wide"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
              >
                Island Suites
              </span>
            </TextReveal>
            <AnimateOnScroll variants={fadeUp} delay={0.3}>
              <p className="text-[15px] leading-[1.8]" style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}>
                Each suite is designed to honor the island's cultural heritage while providing contemporary comfort. With panoramic ocean views, private terraces, and thoughtful Rapa Nui-inspired design, these accommodations offer the perfect sanctuary for contemplating ancient mysteries and connecting with the island's spiritual energy.
              </p>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Landscape video — hidden on mobile */}
        <div className="hidden md:block">
          <MediaReveal delay={0.1}>
            <div className="overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <img src={CDN.s4} alt="Rapa Nui landscape" className="w-full h-full object-cover" />
            </div>
          </MediaReveal>
        </div>
      </div>
    </TintedSection>
  );
}

/* ═══════════════════════════════════════════════════════════════
   EXPERIENCES - Parallax video header + card grid
   ═══════════════════════════════════════════════════════════════ */
function ExperiencesSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = hangaroa.excursionCategories || [];
  const filtered = activeCategory === "all" ? hangaroa.excursions : hangaroa.excursions.filter((e: Excursion) => e.category === activeCategory);

  return (
    <section id="experiences" className="overflow-hidden">
      <Parallax offset={60} className="w-full" style={{ aspectRatio: "2/1" }}>
        <div className="relative w-full aspect-[2/1]">
          <NativeVideo src={CDN.heroVideo} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none" />
          <div className="absolute bottom-8 md:bottom-12 left-6 md:left-10 z-10">
            <TextReveal as="h2" delay={0.2}>
              <span className="text-white text-2xl md:text-4xl lg:text-5xl tracking-wide" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
                Cultural Journeys
              </span>
            </TextReveal>
          </div>
        </div>
      </Parallax>

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
    { title: "Cultural Preservation", desc: "Supporting Rapa Nui cultural traditions through partnerships with local communities and educational programs." },
    { title: "Island Stewardship", desc: "Protecting Easter Island's unique ecosystem and archaeological heritage through sustainable tourism practices." },
    { title: "Community Partnership", desc: "Providing employment and economic opportunities for local residents while respecting cultural values." },
    { title: "Environmental Conservation", desc: "Minimizing environmental impact through renewable energy, waste reduction, and ocean conservation initiatives." },
  ];

  return (
    <TintedSection backgroundColor={PALETTE.gradientEnd}>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={CDN.moaiHorses} alt="Moai at sunset" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(94, 85, 73, 0.85)" }} />
        </div>

        <div className={`relative z-10 ${sectionPadding}`}>
          <div className={maxW}>
            <AnimateOnScroll variants={fadeUp}>
              <SectionLabel color="rgba(255,255,255,0.5)">Sustainability</SectionLabel>
            </AnimateOnScroll>
            <TextReveal as="h2" className="mb-12 md:mb-16" delay={0.1}>
              <span className="text-white text-2xl md:text-4xl lg:text-5xl tracking-wide" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
                Honoring the Island
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
   WELLNESS - Treatment cards with filter
   ═══════════════════════════════════════════════════════════════ */
function WellnessSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = hangaroa.spaCategories || [];
  const filtered = activeCategory === "all" ? hangaroa.treatments : hangaroa.treatments.filter((t: Treatment) => t.category === activeCategory);

  return (
    <section id="wellness">
      <Parallax offset={50} className="w-full" style={{ aspectRatio: "2/1" }}>
        <div className="relative w-full aspect-[2/1]">
          <img src={CDN.warriorPortrait} alt="Rapa Nui warrior" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none" />
          <div className="absolute bottom-8 md:bottom-12 left-6 md:left-10 z-10">
            <TextReveal as="h2" delay={0.2}>
              <span className="text-white text-2xl md:text-4xl lg:text-5xl tracking-wide" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
                {hangaroa.theme.spaHeadline.replace("\n", " ")}
              </span>
            </TextReveal>
          </div>
        </div>
      </Parallax>

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
   GASTRONOMY - DrawLine + restaurant cards
   ═══════════════════════════════════════════════════════════════ */
function GastronomySection() {
  const restaurants = Array.isArray(hangaroaDining) ? hangaroaDining : [hangaroaDining];

  return (
    <TintedSection backgroundColor={PALETTE.gradientEnd} className="overflow-hidden">
      <Parallax offset={50} className="w-full" style={{ aspectRatio: "2/1" }}>
        <div className="relative w-full aspect-[2/1]">
          <img src={CDN.moaiPukao} alt="Moai with pukao hats overlooking ocean" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none" />
          <div className="absolute bottom-8 md:bottom-12 left-6 md:left-10 z-10">
            <TextReveal as="h2" delay={0.2}>
              <span className="text-white text-2xl md:text-4xl lg:text-5xl tracking-wide" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
                Island Flavors
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
   GALLERY - Full-width parallax + grid (unique to Hangaroa)
   ═══════════════════════════════════════════════════════════════ */
function GalleryIntegratedSections() {
  const sections = [
    {
      label: "Rapa Nui Culture",
      headline: "Living\nHeritage",
      body: "The culture of Rapa Nui is alive in every ceremony, every dance, and every face painted with ancestral patterns. Our connection to the island's indigenous community offers guests an authentic window into one of the world's most extraordinary living cultures.",
      verticalSrc: CDN.warriorPortrait,
      horizontalSrc: CDN.moaiHorses,
      verticalIsVideo: false,
      horizontalIsVideo: false,
      bg: PALETTE.gradientStart,
    },
    {
      label: "The Moai",
      headline: "Guardians of\nthe Island",
      body: "Standing sentinel across the volcanic landscape, the Moai are more than monuments — they are the spiritual embodiment of ancestral chiefs, watching over the island as they have for centuries. Each site tells a different chapter of Rapa Nui's remarkable story.",
      verticalSrc: CDN.s3,
      horizontalSrc: CDN.moaiPukao,
      verticalIsVideo: false,
      horizontalIsVideo: false,
      bg: PALETTE.gradientEnd,
    },
    {
      label: "Ceremonies",
      headline: "Ancient\nRituals",
      body: "Traditional ceremonies connect the present to the deep past. Face painting, warrior dances, and sacred rituals are performed with the same reverence and precision that has been passed down through generations of Rapa Nui people.",
      verticalSrc: CDN.rapaNuiWarrior,
      horizontalSrc: CDN.warriorsGroup,
      verticalIsVideo: false,
      horizontalIsVideo: false,
      bg: PALETTE.gradientStart,
    },
    {
      label: "Island Landscapes",
      headline: "Volcanic\nHorizons",
      body: "From dramatic volcanic craters to windswept coastlines, Easter Island's landscapes are unlike anywhere else on earth. The raw, untouched beauty of this remote Pacific island creates a backdrop that transforms every moment into something extraordinary.",
      verticalSrc: CDN.facePaint,
      horizontalSrc: CDN.womanMoai,
      verticalIsVideo: false,
      horizontalIsVideo: false,
      bg: PALETTE.gradientEnd,
    },
    {
      label: "Island Moments",
      headline: "Timeless\nBeauty",
      body: "Every corner of Easter Island reveals a new perspective — the play of light on ancient stone, the wild horses grazing beneath the Moai, the vast Pacific stretching to infinity. These are the moments that make Hangaroa an experience beyond compare.",
      verticalSrc: CDN.culturalAdornment,
      horizontalSrc: CDN.s2,
      verticalIsVideo: false,
      horizontalIsVideo: false,
      bg: PALETTE.gradientStart,
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
                <AnimateOnScroll variants={fadeUp} delay={0.15}>
                  <h2
                    className="text-2xl md:text-4xl lg:text-5xl tracking-wide mb-6 whitespace-pre-line"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
                  >
                    {section.headline}
                  </h2>
                </AnimateOnScroll>
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
