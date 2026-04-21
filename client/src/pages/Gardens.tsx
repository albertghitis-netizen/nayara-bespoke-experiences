/*
 * NAYARA GARDENS — Arenal, Costa Rica
 * Visual Identity: "Canopy" palette · Cormorant Garamond · Cinematic motion · Video-first
 */
import { useState } from "react";
import { motion } from "framer-motion";
import NativeVideo from "@/components/NativeVideo";
import { useIsMobile } from "@/hooks/useMobile";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import BlobVideo from "@/components/BlobVideo";
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
  scaleReveal,
  staggerContainer,
  DURATION,
  EASE_CINEMATIC,
  EASE_EDITORIAL,
} from "@/components/motion";

const gardens = properties.find((p: Property) => p.id === "gardens")!;

/* ═══════════════════════════════════════════════════════════════
   PALETTE — "Canopy"
   ═══════════════════════════════════════════════════════════════ */
/* Dark Olive palette — warm olive green */
const PALETTE = {
  primary: "#525642",
  secondary: "#424A3E",
  accent: "#868B75",
  gradientStart: "#F7F5F0",
  gradientEnd: "#EDEEE2",
  text: "#3B2B26",
  textSecondary: "#67737C",
  textTertiary: "#9A9086",
  divider: "#E6DFD5",
};

/* ═══════════════════════════════════════════════════════════════
   CDN ASSETS — Video-first. Photos are fallback.
   ═══════════════════════════════════════════════════════════════ */
const CDN = {
  // Hero
  heroDesktop: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/gardens-hero-compressed_7b01313d.mp4",

  // Rooms — video replaces s3 photo
  roomsVideo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/gallery-residence-video-v2_2ca0004b.mp4",
  // Rooms landscape
  roomsLandscape: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/gallery-final-video_7a430890.mp4",
  roomsAerial: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/gardens-casita-aerial_e2fb1f8e.jpeg",
  // Experiences section background
  experiencesVideo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hanging-bridges-horizontal_0bf48537.mp4",
  // Sustainability
  sustainabilityVideo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/gardens-waterfall-compressed_d091f130.mp4",

  // Gastronomy
  gastronomyVideo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/gastronomy-hero-edited_3e0a63fa.mp4",
  // Gallery videos
  galleryVideo1: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bird-watching-horizontal_abd70271.mp4",
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
  { title: "Carbon Neutral Operations", description: "Costa Rica's commitment to carbon neutrality is matched by our own — renewable energy, waste reduction, and reforestation programs." },
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
      <BrandNavigation pageType="property" />
      <HeroSection />
      <StorySection />

      {/* ══ 1. ROOMS — Slider ══ */}
      <PropertySlider
        sectionLabel="Accommodations"
        headline="Arenal Casitas"
        description="Each freestanding casita is a private sanctuary surrounded by lush tropical gardens. With private plunge pools, outdoor showers, and panoramic volcano views."
        cards={roomCards}
        learnMoreLink="/gardens/rooms"
        learnMoreLabel="Explore Rooms"
        palette={SLIDER_PALETTE}
      />

      {/* ══ 2. EXPERIENCES — Sorter (after Rooms per user request) ══ */}
      <PropertySorter
        sectionLabel="Experiences"
        headline="Arenal Adventures"
        description="From hanging bridge canopy walks to volcanic hot springs, every experience at Nayara Gardens connects you to the raw beauty of the Arenal region."
        categories={experienceCategories}
        cards={experienceCards}
        learnMoreLink="/gardens/experiences"
        learnMoreLabel="Explore More"
        palette={SLIDER_PALETTE}
      />

      {/* ══ 3. WELLNESS — Sorter ══ */}
      <PropertySorter
        sectionLabel="Wellness"
        headline={gardens.theme.spaHeadline.replace("\n", " ")}
        description="Thermal springs heated by the volcano, open-air spa treatments surrounded by birdsong, and yoga platforms overlooking the forest canopy."
        categories={wellnessCategories}
        cards={wellnessCards}
        learnMoreLink="/gardens/wellness"
        learnMoreLabel="Explore Wellness"
        palette={SLIDER_PALETTE}
      />

      {/* ══ 4. SUSTAINABILITY — Slider ══ */}
      <PropertySlider
        sectionLabel="Sustainability"
        headline="Rooted in the Rainforest"
        description="Nayara Gardens is committed to preserving the extraordinary biodiversity of the Arenal Volcano region through conservation, community, and responsible luxury."
        cards={sustainabilityCards}
        learnMoreLink="/gardens/sustainability"
        learnMoreLabel="Explore More"
        palette={SLIDER_PALETTE}
      />

      {/* ══ 5. GASTRONOMY — Slider ══ */}
      <PropertySlider
        sectionLabel="A Taste of Place"
        headline="Farm to Table"
        description="Our chefs source ingredients from local farms and our own organic gardens to create cuisine that celebrates Costa Rica's biodiversity."
        cards={gastronomyCards}
        learnMoreLink="/gardens/gastronomy"
        learnMoreLabel="Explore Dining"
        palette={SLIDER_PALETTE}
      />

      {/* ── TRIMMED: GalleryIntegratedSections hidden for performance ── */}
      {/* <GalleryIntegratedSections /> */}


      <Footer bgColor="#525642" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO — Full-bleed video, cinematic text reveal
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <BlobVideo
          src={CDN.heroDesktop}
          className="w-full h-full object-cover"
          hasAudio={true}
          pillBg="#525642B3"
          pillColor="#F7F5F0"
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
          Family Adventure Rainforest Adventure
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
   STORY — Cascade layout matching Tented Camp:
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


        </div>

        {/* S1 — Vertical video right */}
        <div className="w-full md:w-1/2 md:order-2">
          <MediaReveal delay={0.1}>
            <div className="overflow-hidden w-full h-full" style={{ aspectRatio: "3/4" }}>
              <NativeVideo src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/gardens-s1-vertical-compressed_49dfa197.mp4" className="w-full h-full object-cover" />
            </div>
          </MediaReveal>
        </div>
      </div>

      {/* S2 — Full-width horizontal photo below, touching S1 */}
      <div style={{ backgroundColor: PALETTE.gradientEnd }}>
        <MediaReveal delay={0.05}>
          <div className="overflow-hidden w-full" style={{ aspectRatio: "16/9" }}>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/gardens-s2-hanging-bridge_660745d7.jpeg"
              alt="Woman on hanging bridge in rainforest canopy — Nayara Gardens"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </MediaReveal>
      </div>

      {/* S3 — Video left + Accommodations text right (flipped from S1) */}
      <div className="flex flex-col md:flex-row" style={{ backgroundColor: PALETTE.gradientEnd }}>
        {/* S3 vertical video — left */}
        <div className="w-full md:w-1/2 md:order-1">
          <MediaReveal delay={0.1}>
            <div className="overflow-hidden w-full h-full" style={{ aspectRatio: "3/4" }}>
              <NativeVideo src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/gardens-s3-v2-compressed_09a976b8.mp4" className="w-full h-full object-cover" />
            </div>
          </MediaReveal>
        </div>

        {/* Text column — right */}
        <div
          className="w-full md:w-1/2 flex flex-col justify-center px-8 py-12 md:px-16 lg:px-24 md:order-2"
          style={{ backgroundColor: PALETTE.gradientEnd }}
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
                Arenal Casitas
              </span>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll variants={fadeUp} delay={0.2}>
            <p
              className="text-[15px] leading-[1.85] max-w-[480px]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
            >
              Each freestanding casita is a private sanctuary surrounded by lush tropical gardens. With private plunge pools, outdoor showers, and panoramic volcano views.
            </p>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ROOMS — Video left, text right, landscape video below
   On tinted background (gradient end)
   ═══════════════════════════════════════════════════════════════ */
function RoomsSection() {
  return (
    <TintedSection backgroundColor={PALETTE.gradientEnd} className={sectionPadding}>
      <div className={maxW}>
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start mb-16">
          {/* Video left — vertical */}
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

        {/* Landscape video below — hidden on mobile */}
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
   EXPERIENCES — Full-width video header, then card grid
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
   SUSTAINABILITY — Video background with overlay cards
   ═══════════════════════════════════════════════════════════════ */
function SustainabilitySection() {
  const initiatives = [
    { title: "Rainforest Conservation", desc: "Over 70 acres of protected primary and secondary rainforest surrounding the resort, providing habitat for hundreds of bird species and wildlife." },
    { title: "Organic Gardens", desc: "On-site organic gardens supply our five restaurants with fresh herbs, vegetables, and fruits, reducing food miles to nearly zero." },
    { title: "Carbon Neutral Operations", desc: "Costa Rica's commitment to carbon neutrality is matched by our own — renewable energy, waste reduction, and reforestation programs." },
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
   WELLNESS — Video header + treatment cards
   ═══════════════════════════════════════════════════════════════ */
function WellnessSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = gardens.spaCategories || [];
  const filtered = activeCategory === "all" ? gardens.treatments : gardens.treatments.filter((t: Treatment) => t.category === activeCategory);

  return (
    <section id="wellness">
      {/* Wellness header — clean, no video */}
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
   GASTRONOMY — Video + restaurant cards
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
                A Taste of Place
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
   GALLERY — All video grid
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
