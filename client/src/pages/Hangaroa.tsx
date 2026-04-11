/**
 * NAYARA HANGAROA - Easter Island, Chile
 * Visual Identity: "Stone" palette - Cormorant Garamond - Cinematic motion - Cultural immersion
 */
import { useState } from "react";
import { motion } from "framer-motion";
import NativeVideo from "@/components/NativeVideo";
import Footer from "@/components/Footer";
import ByNightCTA from "@/components/ByNightCTA";
import BrandNavigation from "@/components/BrandNavigation";
import { properties, type Property, type Excursion, type Treatment } from "@/data/properties";
import { hangaroaDining } from "@/data/dining";
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
  staggerContainer,
  DURATION,
  EASE_CINEMATIC,
} from "@/components/motion";

const hangaroa = properties.find((p: Property) => p.id === "hangaroa")!;

/* ═══════════════════════════════════════════════════════════════
   PALETTE - "Stone"
   ═══════════════════════════════════════════════════════════════ */
const PALETTE = {
  primary: "#5E5549",
  secondary: "#8B6B3E",
  accent: "#7A8568",
  gradientStart: "#F5F1EB",
  gradientEnd: "#EDEAE4",
  text: "#2C2418",
  textSecondary: "#7A6F63",
  textTertiary: "#B0A89E",
  divider: "#E2DDD5",
};

/* ═══════════════════════════════════════════════════════════════
   CDN ASSETS
   ═══════════════════════════════════════════════════════════════ */
const CDN = {
  heroVideo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-hero-audio_f26eed73.mp4",
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
      className="text-[11px] tracking-[0.2em] uppercase mb-4"
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
      <BrandNavigation pageType="property" />
      <HeroSection />
      <StorySection />
      <GradientTransition from={PALETTE.gradientStart} to={PALETTE.gradientEnd} height="160px" />
      <RoomsSection />
      <GradientTransition from={PALETTE.gradientEnd} to={PALETTE.gradientStart} height="160px" />
      <ExperiencesSection />
      <GradientTransition from={PALETTE.gradientStart} to={PALETTE.gradientEnd} height="120px" />
      <SustainabilitySection />
      <GradientTransition from={PALETTE.gradientEnd} to={PALETTE.gradientStart} height="120px" />
      <WellnessSection />
      <GradientTransition from={PALETTE.gradientStart} to={PALETTE.gradientEnd} height="120px" />
      <GastronomySection />
      <GradientTransition from={PALETTE.gradientEnd} to={PALETTE.gradientStart} height="120px" />
      <GalleryIntegratedSections />

      {/* ★ By Night — Moai beneath the Milky Way */}
      <ByNightCTA
        verticalSrc="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-moai-milkyway_0588cd10.webp"
        verticalRatio="3/4"
        horizontalSrc="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-moai-golden-sunset_f7d26dab.webp"
        horizontalRatio="16/9"
        bgColor="#1a1a24"
        headline={"Moai Beneath\nthe Milky Way"}
        bodyText="On Rapa Nui, the ancient Moai stand sentinel beneath some of the most pristine night skies in the Southern Hemisphere. Far from any light pollution, the Milky Way blazes overhead in extraordinary detail. Discover the extraordinary nocturnal experiences across all Nayara properties."
        textSide="left"
      />

      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO - Full-screen video, cinematic text reveal
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <NativeVideo src={CDN.heroVideo} className="w-full h-full object-cover" hasAudio />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6 md:px-10">
        <MultiLineReveal
          lines={["Where Ancient Culture Meets the Pacific"]}
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
            </AnimateOnScroll>
            <AnimateOnScroll variants={fadeUp} delay={0.5}>
              <AwardBadgeStrip property="hangaroa" />
            </AnimateOnScroll>
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
      <Parallax offset={60} className="w-full" style={{ height: "50vh", minHeight: 320 }}>
        <div className="relative w-full h-[60vh]">
          <NativeVideo src={CDN.heroVideo} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
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
      <Parallax offset={50} className="w-full" style={{ height: "45vh", minHeight: 280 }}>
        <div className="relative w-full h-[55vh]">
          <img src={CDN.warriorPortrait} alt="Rapa Nui warrior" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
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
      <Parallax offset={50} className="w-full" style={{ height: "45vh", minHeight: 280 }}>
        <div className="relative w-full h-[55vh]">
          <img src={CDN.moaiPukao} alt="Moai with pukao hats overlooking ocean" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
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
                <p className="text-[11px] tracking-[0.1em] uppercase mb-4" style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.accent }}>
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
        const isEven = i % 2 === 0;
        return (
          <section key={i} style={{ backgroundColor: section.bg }}>
            <div className="flex flex-col md:flex-row">
              <div className={`w-full md:w-1/2 ${isEven ? "md:order-1" : "md:order-2"}`}>
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
                className={`w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-16 md:py-0 ${isEven ? "md:order-2" : "md:order-1"}`}
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
