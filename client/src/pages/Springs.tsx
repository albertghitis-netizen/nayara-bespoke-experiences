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
import { properties, type Property, type Excursion, type Treatment } from "@/data/properties";
import { costaRicaDining } from "@/data/dining";
import PillarCrossLink from "@/components/PillarCrossLink";
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
const PALETTE = {
  primary: "#3D5E4A",
  secondary: "#5A5650",
  accent: "#7A9484",
  gradientStart: "#F5F1EB",
  gradientEnd: "#E8EEEA",
  text: "#2C2418",
  textSecondary: "#7A6F63",
  textTertiary: "#B0A89E",
  divider: "#E2DDD5",
};

/* ═══════════════════════════════════════════════════════════════
   CDN ASSETS
   ═══════════════════════════════════════════════════════════════ */
const CDN = {
  heroDesktop: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-hero-vertical-audio_042778dc.mp4",
  s1: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/6_0a37cc95.jpg",
  s2: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/123_739860cc.jpg",
  s3: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-s3-robe-canopy_c9c365ff.jpg",
  s4: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/61_0020df3e.jpg",
  galleryVideo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/CCD6CF80-5F62-40B5-B82A-119D31106C0D_635597b5.mp4",
  gallery5: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Untitleddesign-3_e394353d.jpg",
  gallery6: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Untitleddesign-5_f4b0874c.jpg",
  gallery7: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Untitleddesign-14_6b456af8.jpg",
};

const sectionPadding = "py-20 md:py-32 px-6 md:px-10";
const maxW = "max-w-[1200px] mx-auto";

function SectionLabel({ children, color }: { children: React.ReactNode; color?: string }) {
  return (
    <p
      className="text-[11px] tracking-[0.2em] uppercase mb-4"
      style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: color || PALETTE.primary }}
    >
      {children}
    </p>
  );
}

export default function Springs() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.gradientStart }}>
      <BrandNavigation pageType="property" />
      <HeroSection />
      <StorySection />
      <GradientTransition from={PALETTE.gradientStart} to={PALETTE.gradientEnd} height="160px" />
      <SpringsVillaSection />
      <GradientTransition from={PALETTE.gradientEnd} to={PALETTE.gradientStart} height="160px" />
      <ExperiencesSection />
      <GradientTransition from={PALETTE.gradientStart} to={PALETTE.gradientEnd} height="120px" />
      <SustainabilitySection />
      <GradientTransition from={PALETTE.gradientEnd} to={PALETTE.gradientStart} height="120px" />
      <WellnessSection />
      <GradientTransition from={PALETTE.gradientStart} to={PALETTE.gradientEnd} height="120px" />
      <GastronomySection />
      {/* ★ By Night — hot springs under stars */}
      <ByNightCTA
        verticalSrc="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-video-short_174183ae.mp4"
        verticalIsVideo
        verticalRatio="9/16"
        horizontalSrc="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-rano-kau-milkyway_dd16a9d7.webp"
        horizontalRatio="16/9"
        bgColor="#1a1a24"
        headline={"Hot Springs\nUnder Stars"}
        bodyText="As night falls over the volcanic landscape, the hot springs take on an otherworldly glow. Steam rises into the starlit sky while the sounds of the rainforest envelop you in warmth and wonder. Discover the extraordinary nocturnal experiences across all Nayara properties."
        textSide="left"
      />

      <Footer />
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
        <NativeVideo src={CDN.heroDesktop} className="w-full h-full object-cover" hasAudio />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-6 md:pb-10 px-6 md:px-10">
        <MultiLineReveal
          lines={["Adults-Only Private Hot Spring Villas"]}
          lineClassName="text-white text-xl md:text-3xl lg:text-4xl leading-[1] tracking-wide text-center"
          as="h1"
          delay={0.4}
          staggerDelay={0.15}
        />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   STORY — Text left, image right, landscape image below
   ═══════════════════════════════════════════════════════════════ */
function StorySection() {
  return (
    <section id="story" className={sectionPadding}>
      <div className={maxW}>
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          {/* Text left */}
          <div className="md:flex-1">
            <AnimateOnScroll variants={fadeUp}>
              <SectionLabel>The Property</SectionLabel>
            </AnimateOnScroll>
            <TextReveal as="h2" className="mb-8" delay={0.1}>
              <span
                className="text-2xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-wide"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
              >
                Adults-Only Mineral Springs
              </span>
            </TextReveal>
            <AnimateOnScroll variants={fadeUp} delay={0.3}>
              <p className="text-[15px] leading-[1.8] mb-5" style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}>
                {springs.heroSubtitle}
              </p>
              <p className="text-[15px] leading-[1.8]" style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}>
                Nayara Springs is the adults-only sister property to Nayara Gardens. Each villa features a private natural hot spring pool fed by volcanic mineral water, surrounded by the sounds of the rainforest. Michelin 3 Key recognized, the resort offers an intimate, elevated experience with access to all five Nayara restaurants and the full-service Spa Arenal.
              </p>
            </AnimateOnScroll>

            {/* Award badges */}
            <AnimateOnScroll variants={fadeUp} delay={0.5}>
              <AwardBadgeStrip property="springs" />
            </AnimateOnScroll>
          </div>
          {/* Portrait photo (S1) right */}
          <div className="md:flex-1">
            <MediaReveal delay={0.2}>
              <div className="overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <img
                  src={CDN.s1}
                  alt="Hot spring pool at Nayara Springs"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </MediaReveal>
          </div>
        </div>

        {/* Landscape photo (S2) below — hidden on mobile, touching portrait */}
        <div className="hidden md:block">
          <MediaReveal delay={0.1}>
            <div className="overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <img src={CDN.s4} alt="Aerial view of Nayara Springs nestled in rainforest" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </MediaReveal>
        </div>
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
                  className="px-5 py-2.5 rounded-full text-[11px] tracking-[0.1em] uppercase transition-all duration-500"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 500,
                    backgroundColor: activeCategory === cat.id ? PALETTE.primary : "transparent",
                    color: activeCategory === cat.id ? "#F5F1EB" : PALETTE.textSecondary,
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
                <p className="text-[11px] tracking-[0.1em] uppercase mb-4" style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.accent }}>
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
                  className="px-5 py-2.5 rounded-full text-[11px] tracking-[0.1em] uppercase transition-all duration-500"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 500,
                    backgroundColor: activeCategory === cat.id ? PALETTE.primary : "transparent",
                    color: activeCategory === cat.id ? "#F5F1EB" : PALETTE.textSecondary,
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
              <p className="text-[11px] tracking-[0.1em] uppercase mb-4" style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.accent }}>
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
              <p className="text-[11px] tracking-[0.1em] uppercase mb-4" style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.accent }}>
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
