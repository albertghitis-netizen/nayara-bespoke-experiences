/*
 * NAYARA SPRINGS — Arenal, Costa Rica
 * Visual Identity: "Mineral" palette · Cormorant Garamond · Cinematic motion · Video-first
 */
import { useState } from "react";
import { motion } from "framer-motion";
import NativeVideo from "@/components/NativeVideo";
import { useIsMobile } from "@/hooks/useMobile";
import Footer from "@/components/Footer";
import ByNightCTA from "@/components/ByNightCTA";
import BrandNavigation from "@/components/BrandNavigation";
import CinematicScroll from "@/components/CinematicScroll";
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

const springs = properties.find((p: Property) => p.id === "springs")!;

/* ═══════════════════════════════════════════════════════════════
   PALETTE — "Mineral"
   ═══════════════════════════════════════════════════════════════ */
/* Blue-Green palette — between Bocas blue and Tented Camp green */
const PALETTE = {
  primary: "#3B6E7B",
  secondary: "#5A6F7B",
  accent: "#86898C",
  gradientStart: "#F7F5F0",
  gradientEnd: "#E4EDEB",
  text: "#3B2B26",
  textSecondary: "#67737C",
  textTertiary: "#9A9086",
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
  pillActiveText: "#F7F5F0",
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
      <CinematicScroll
        audioSrc={CDN.heroDesktop}
        speed={1.35}
      />
      <BrandNavigation pageType="property" />
      <HeroSection />
      <StorySection />

      {/* ★ 1. ROOMS — Slider */}
      <PropertySlider
        sectionLabel="Accommodations"
        headline="Springs Villas"
        description="Each freestanding villa is a private sanctuary with its own natural hot spring-fed plunge pool, surrounded by the lush rainforest canopy with views of the Arenal Volcano."
        cards={roomCards}
        learnMoreLink="/springs/rooms"
        learnMoreLabel="Explore Rooms"
        palette={SLIDER_PALETTE}
      />

      {/* ★ 2. WELLNESS — Sorter (after Rooms per user request) */}
      <PropertySorter
        sectionLabel="Wellness"
        headline={springs.theme.spaHeadline.replace("\n", " ")}
        description="Volcanic mineral springs, open-air spa treatments, and ancient healing traditions merge in a sanctuary designed to restore body and spirit."
        categories={wellnessCategories}
        cards={wellnessCards}
        learnMoreLink="/springs/wellness"
        learnMoreLabel="Explore Wellness"
        palette={SLIDER_PALETTE}
      />

      {/* ★ 3. EXPERIENCES — Sorter */}
      <PropertySorter
        sectionLabel="Experiences"
        headline="Arenal Adventures"
        description="From volcanic hot springs to canopy walks and wildlife encounters, every experience at Nayara Springs connects you to the extraordinary biodiversity of the Arenal region."
        categories={experienceCategories}
        cards={experienceCards}
        learnMoreLink="/springs/experiences"
        learnMoreLabel="Explore More"
        palette={SLIDER_PALETTE}
      />

      {/* ★ 4. SUSTAINABILITY — Slider */}
      <PropertySlider
        sectionLabel="Sustainability"
        headline="Protecting the Rainforest"
        description="As the first hotel in Costa Rica to earn three Michelin Keys, Nayara Springs leads by example — preserving the Arenal ecosystem through geothermal energy, water stewardship, and community partnership."
        cards={sustainabilityCards}
        learnMoreLink="/springs/sustainability"
        learnMoreLabel="Explore More"
        palette={SLIDER_PALETTE}
      />

      {/* ★ 5. GASTRONOMY — Slider */}
      <PropertySlider
        sectionLabel="A Taste of Place"
        headline="Farm to Table"
        description="Our chefs transform the Arenal region's extraordinary biodiversity into cuisine that celebrates Costa Rica's culinary heritage, sourcing from local farms and our own organic gardens."
        cards={gastronomyCards}
        learnMoreLink="/springs/gastronomy"
        learnMoreLabel="Explore Dining"
        palette={SLIDER_PALETTE}
      />

      {/* ★ By Night — hot springs under stars */}
      <ByNightCTA
        verticalSrc="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-video-short_174183ae.mp4"
        verticalIsVideo
        verticalRatio="3/4"
        horizontalSrc="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-rano-kau-milkyway_dd16a9d7.webp"
        horizontalRatio="16/9"
        bgColor="#22322E"
        headline={"Hot Springs\nUnder Stars"}
        bodyText="As night falls over the volcanic landscape, the hot springs take on an otherworldly glow. Steam rises into the starlit sky while the sounds of the rainforest envelop you in warmth and wonder. Discover the extraordinary nocturnal experiences across all Nayara properties."
        textSide="left"
      />

      <Footer bgColor="#22322E" />
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
        <NativeVideo src={CDN.heroDesktop} className="w-full h-full object-cover" />
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
          Adults-Only Private Hot Spring Villas
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
              className="inline-flex items-center gap-2.5 mt-6 px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                fontSize: "12px",
                letterSpacing: "0.08em",
                color: "#fff",
                backgroundColor: PALETTE.primary,
              }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
              Read: 7 MICHELIN Keys. 3 Countries. 1 Standard of Excellence
            </a>
          </AnimateOnScroll>
        </div>

        {/* S1 — Vertical video right */}
        <div className="w-full md:w-1/2 md:order-2">
          <MediaReveal delay={0.1}>
            <div className="overflow-hidden w-full h-full" style={{ aspectRatio: "3/4" }}>
              <NativeVideo src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-s1-vertical-compressed_903eb616.mp4" className="w-full h-full object-cover" />
            </div>
          </MediaReveal>
        </div>
      </div>

      {/* S2 — Full-width horizontal photo below, touching S1 */}
      <div style={{ backgroundColor: PALETTE.gradientEnd }}>
        <MediaReveal delay={0.05}>
          <div className="overflow-hidden w-full" style={{ aspectRatio: "16/9" }}>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-s2-couple-bridge_11a41ef8.jpg"
              alt="Couple on rainforest bridge at Nayara Springs"
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
   SPRINGS VILLA — Image left, text right, landscape below
   On tinted background (gradient end)
   ═══════════════════════════════════════════════════════════════ */
function SpringsVillaSection() {
  return (
    <TintedSection backgroundColor={PALETTE.gradientEnd} className={sectionPadding}>
      <div className={maxW}>
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start mb-16">
          {/* Image left — vertical */}
          <div className="md:flex-1 order-2 md:order-1">
            <MediaReveal delay={0.1}>
              <div className="overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <img src={CDN.s3} alt="Luxury canopy villa at Nayara Springs" className="w-full h-full object-cover" loading="lazy" />
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
                Springs Villa
              </span>
            </TextReveal>
            <AnimateOnScroll variants={fadeUp} delay={0.3}>
              <p className="text-[15px] leading-[1.8]" style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}>
                Each Springs Villa features a private natural hot spring pool fed by volcanic mineral water. Designed for ultimate privacy and relaxation, these intimate sanctuaries offer an unparalleled experience of thermal wellness surrounded by rainforest canopy.
              </p>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Landscape image below — hidden on mobile */}
        <div className="hidden md:block">
          <MediaReveal delay={0.1}>
            <div className="overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <img src={CDN.s4} alt="Aerial view of Springs Villa nestled in rainforest" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </MediaReveal>
        </div>
      </div>
    </TintedSection>
  );
}

/* ═══════════════════════════════════════════════════════════════
   EXPERIENCES — Card grid with category filters
   ═══════════════════════════════════════════════════════════════ */
function ExperiencesSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = springs.excursionCategories || [];
  const filtered = activeCategory === "all" ? springs.excursions : springs.excursions.filter((e: Excursion) => e.category === activeCategory);

  return (
    <section id="experiences" className={sectionPadding} style={{ backgroundColor: PALETTE.gradientStart }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <SectionLabel>Experiences</SectionLabel>
        </AnimateOnScroll>
        <TextReveal as="h2" className="mb-10 md:mb-14" delay={0.1}>
          <span
            className="text-2xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-wide"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
          >
            Arenal Adventures
          </span>
        </TextReveal>

        {categories.length > 0 && (
          <AnimateOnScroll variants={fadeUp} delay={0.2}>
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

        {/* Gallery photo: Wildlife */}
        <MediaReveal delay={0.2}>
          <div className="mt-12 overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <img src={CDN.gallery5} alt="Wildlife in the Arenal rainforest" className="w-full h-full object-cover rounded-lg" loading="lazy" />
          </div>
        </MediaReveal>

        <AnimateOnScroll variants={fadeUp} delay={0.4}>
          <div className="mt-12">
            <PillarCrossLink pillar="experiences" />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SUSTAINABILITY — Dark overlay with palette accents
   ═══════════════════════════════════════════════════════════════ */
function SustainabilitySection() {
  const initiatives = [
    { title: "Geothermal Energy", desc: "Our natural hot springs are powered by geothermal energy, reducing our carbon footprint while providing authentic thermal experiences." },
    { title: "Rainforest Stewardship", desc: "We actively protect and restore the surrounding rainforest, working with local conservation organizations to preserve biodiversity." },
    { title: "Water Conservation", desc: "Closed-loop water systems and rainwater harvesting minimize our impact on local water resources." },
    { title: "Community Partnership", desc: "We employ local artisans and support regional initiatives that benefit the Arenal community." },
  ];

  return (
    <TintedSection backgroundColor={PALETTE.gradientEnd}>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(61, 94, 74, 0.88)" }} />

        <div className={`relative z-10 ${sectionPadding}`}>
          <div className={maxW}>
            <AnimateOnScroll variants={fadeUp}>
              <SectionLabel color="rgba(255,255,255,0.5)">Sustainability</SectionLabel>
            </AnimateOnScroll>
            <TextReveal as="h2" className="mb-12 md:mb-16" delay={0.1}>
              <span className="text-white text-2xl md:text-4xl lg:text-5xl tracking-wide" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
                Beyond Sustainability
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

            {/* Gallery photo: Jungle pathway */}
            <MediaReveal delay={0.2}>
              <div className="mt-12 overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <img src={CDN.gallery6} alt="Jungle pathway through the rainforest" className="w-full h-full object-cover rounded-lg" loading="lazy" />
              </div>
            </MediaReveal>

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
   WELLNESS — Treatment cards with category filters
   ═══════════════════════════════════════════════════════════════ */
function WellnessSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = springs.spaCategories || [];
  const filtered = activeCategory === "all" ? springs.treatments : springs.treatments.filter((t: Treatment) => t.category === activeCategory);

  return (
    <section id="wellness" className={sectionPadding} style={{ backgroundColor: PALETTE.gradientStart }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <SectionLabel>Wellness</SectionLabel>
        </AnimateOnScroll>
        <TextReveal as="h2" className="mb-10 md:mb-14" delay={0.1}>
          <span
            className="text-2xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-wide"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
          >
            Nurtured by Nature
          </span>
        </TextReveal>

        {categories.length > 0 && (
          <AnimateOnScroll variants={fadeUp} delay={0.2}>
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

        {/* Gallery photo: Tropical bird */}
        <MediaReveal delay={0.2}>
          <div className="mt-12 overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <img src={CDN.gallery7} alt="Tropical bird in the Arenal canopy" className="w-full h-full object-cover rounded-lg" loading="lazy" />
          </div>
        </MediaReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   GASTRONOMY — Restaurant cards with DrawLine dividers
   ═══════════════════════════════════════════════════════════════ */
function GastronomySection() {
  const restaurants = Array.isArray(costaRicaDining) ? costaRicaDining : [costaRicaDining];

  return (
    <TintedSection backgroundColor={PALETTE.gradientEnd} className={sectionPadding}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <SectionLabel>The Table</SectionLabel>
        </AnimateOnScroll>
        <TextReveal as="h2" className="mb-10 md:mb-14" delay={0.1}>
          <span
            className="text-2xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-wide"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
          >
            A Taste of Place
          </span>
        </TextReveal>

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

        {/* Gallery video: Nature */}
        <MediaReveal delay={0.2}>
          <div className="mt-12 overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <video src={CDN.galleryVideo} className="w-full h-full object-cover rounded-lg" autoPlay muted loop playsInline />
          </div>
        </MediaReveal>
      </div>
    </TintedSection>
  );
}
