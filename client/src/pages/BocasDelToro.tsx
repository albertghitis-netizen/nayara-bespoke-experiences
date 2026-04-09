/**
 * NAYARA BOCAS DEL TORO - Adults-Only Overwater Villas, Panama
 * Visual Identity: "Ocean" palette - blue-green gradient - Cormorant Garamond - Cinematic motion
 */
import { useState } from "react";
import { motion } from "framer-motion";
import NativeVideo from "@/components/NativeVideo";
import { useIsMobile } from "@/hooks/useMobile";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import { properties, type Property, type Excursion, type Treatment } from "@/data/properties";
import { bocasDiningCollection } from "@/data/dining";
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

const bocas = properties.find((p: Property) => p.id === "bocas-del-toro")!;

/* ═══════════════════════════════════════════════════════════════
   PALETTE - "Ocean" - Blue-green gradient, starts subtle, gets deeper
   ═══════════════════════════════════════════════════════════════ */
const PALETTE = {
  primary: "#3B6B6E",
  secondary: "#5A8A8D",
  accent: "#6B9E8A",
  gradientStart: "#F2F6F5",
  gradientEnd: "#E8F0EE",
  text: "#1A2F30",
  textSecondary: "#5A7A7C",
  textTertiary: "#8AACAE",
  divider: "#D0E2E0",
};

/* ═══════════════════════════════════════════════════════════════
   CDN ASSETS
   ═══════════════════════════════════════════════════════════════ */
const CDN = {
  heroDesktop: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbt-horizontal-desktop_0c584342.mp4",
  heroMobile: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-vertical2_03bbe8e5.mp4",
  s1: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-aerial-villas-walkway_66b2f48e.jpg",
  s2: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/74_be6f8cb4.jpg",
  s3: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/87D222D3-2D4E-437D-AAEF-92C3662EBFE9_1e00bdac.MP4",
  s4: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/80_57ce5c18.jpg",
  // Gallery
  resortAerial: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-resort-aerial-sunset_d536b07d.jpg",
  coupleVilla: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-couple-villa-pool_42fafe14.jpg",
  galleryVideo1: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-gallery-video1_d18b5ced.mp4",
  topdownVillas: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-topdown-villas-boardwalk_576d7415.jpg",
  aerialMangroves: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-aerial-villas-mangroves_9d5e94f5.jpg",
  overwaterDeck: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-overwater-villas-deck_16555482.jpg",
  galleryVideo2: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-gallery-video2_1dd3d81d.mp4",
  briceferreVilla: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-briceferre-villa_c88fea38.jpg",
  briceferreAerial: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-briceferre-aerial_60c5ff23.jpg",
  lagoonAerial: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/74_11cc5b01.jpg",
  coastline: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/79_cfb33bcf.jpg",
  islandParadise: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/83_621b9b3f.jpg",
  crystalSwimming: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/86_bcac4579.jpg",
  landscape: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/88_33345812.jpg",
  tropicalVideo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas_gallery_video_0a7e31ab.mp4",
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
export default function BocasDelToro() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.gradientStart }}>
      <BrandNavigation pageType="property" centerLinkHome />
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
      <GallerySection />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO - Full-screen video, cinematic text reveal
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const isMobile = useIsMobile();
  const heroVideo = isMobile ? CDN.heroMobile : CDN.heroDesktop;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <NativeVideo src={heroVideo} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-12 md:pb-20 px-6 md:px-10">
        <MultiLineReveal
          lines={["Adults-Only Overwater Villas", "on a Private Island"]}
          lineClassName="text-white text-3xl md:text-5xl lg:text-6xl leading-[1] tracking-wide text-center"
          as="h1"
          delay={0.4}
          staggerDelay={0.15}
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.slow, delay: 0.3, ease: EASE_CINEMATIC }}
          className="text-white/50 text-[11px] md:text-[13px] mt-6 tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
        >
          Adults Only - Bocas del Toro, Panama
        </motion.p>
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
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start mb-16">
          <div className="md:flex-1">
            <AnimateOnScroll variants={fadeUp}>
              <SectionLabel>The Property</SectionLabel>
            </AnimateOnScroll>
            <TextReveal as="h2" className="mb-8" delay={0.1}>
              <span
                className="text-2xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-wide"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
              >
                Island Paradise Reimagined
              </span>
            </TextReveal>
            <AnimateOnScroll variants={fadeUp} delay={0.3}>
              <p className="text-[15px] leading-[1.8] mb-5" style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}>
                {bocas.heroSubtitle}
              </p>
              <p className="text-[15px] leading-[1.8]" style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}>
                Nayara Bocas del Toro is an adults-only sanctuary on a private Caribbean island, where overwater villas float above crystal-clear turquoise waters. Each villa features direct ocean access, private plunge pools, and unobstructed views of pristine beaches and jungle-covered islands. Experience the ultimate in tropical luxury and seclusion.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll variants={fadeUp} delay={0.5}>
              <AwardBadgeStrip property="bocas-del-toro" />
            </AnimateOnScroll>
          </div>
          <div className="md:flex-1">
            <MediaReveal delay={0.2}>
              <div className="overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <img src={CDN.s1} alt="Aerial view of overwater villas at Nayara Bocas del Toro" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </MediaReveal>
          </div>
        </div>

        {/* Landscape image — hidden on mobile */}
        <div className="hidden md:block">
          <MediaReveal delay={0.1}>
            <div className="overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <img src={CDN.s2} alt="Turquoise lagoon with palm trees and beach" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </MediaReveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ROOMS - Video left, text right, landscape image below
   ═══════════════════════════════════════════════════════════════ */
function RoomsSection() {
  return (
    <TintedSection backgroundColor={PALETTE.gradientEnd} className={sectionPadding}>
      <div className={maxW}>
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start mb-16">
          <div className="md:flex-1 order-2 md:order-1">
            <MediaReveal delay={0.1}>
              <div className="overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <NativeVideo src={CDN.s3} className="w-full h-full object-cover" />
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
                Overwater Villas
              </span>
            </TextReveal>
            <AnimateOnScroll variants={fadeUp} delay={0.3}>
              <p className="text-[15px] leading-[1.8]" style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}>
                Each overwater villa is a private escape suspended above the Caribbean Sea. With direct ocean access, private plunge pools, and panoramic water views, these accommodations redefine tropical luxury. Wake to the gentle sound of waves and spend your days exploring pristine beaches and vibrant coral reefs.
              </p>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Landscape image — hidden on mobile */}
        <div className="hidden md:block">
          <MediaReveal delay={0.1}>
            <div className="overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <img src={CDN.s4} alt="Aerial view of overwater villas arranged in curved pattern" className="w-full h-full object-cover" loading="lazy" />
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
  const categories = bocas.excursionCategories || [];
  const filtered = activeCategory === "all" ? bocas.excursions : bocas.excursions.filter((e: Excursion) => e.category === activeCategory);

  return (
    <section id="experiences" className="overflow-hidden">
      <Parallax offset={60} className="w-full" style={{ height: "50vh", minHeight: 320 }}>
        <div className="relative w-full h-[60vh]">
          <NativeVideo src={CDN.heroDesktop} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
          <div className="absolute bottom-8 md:bottom-12 left-6 md:left-10 z-10">
            <TextReveal as="h2" delay={0.2}>
              <span className="text-white text-2xl md:text-4xl lg:text-5xl tracking-wide" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
                Caribbean Adventures
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
                      color: activeCategory === cat.id ? "#F2F6F5" : PALETTE.textSecondary,
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
                  backgroundColor: "rgba(255,255,255,0.5)",
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
   SUSTAINABILITY - Image background with overlay cards
   ═══════════════════════════════════════════════════════════════ */
function SustainabilitySection() {
  const initiatives = [
    { title: "Marine Conservation", desc: "Protecting coral reefs and marine ecosystems through partnerships with local conservation organizations and sustainable tourism practices." },
    { title: "Island Stewardship", desc: "Maintaining pristine beaches and jungle habitats through active restoration and invasive species management programs." },
    { title: "Community Partnership", desc: "Supporting local communities through employment, education initiatives, and cultural preservation programs in the Bocas region." },
    { title: "Sustainable Operations", desc: "Minimizing environmental impact through renewable energy, waste reduction, and water conservation systems." },
  ];

  return (
    <TintedSection backgroundColor={PALETTE.gradientEnd}>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={CDN.resortAerial} alt="Bocas del Toro resort aerial" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(59, 107, 110, 0.85)" }} />
        </div>

        <div className={`relative z-10 ${sectionPadding}`}>
          <div className={maxW}>
            <AnimateOnScroll variants={fadeUp}>
              <SectionLabel color="rgba(255,255,255,0.5)">Sustainability</SectionLabel>
            </AnimateOnScroll>
            <TextReveal as="h2" className="mb-12 md:mb-16" delay={0.1}>
              <span className="text-white text-2xl md:text-4xl lg:text-5xl tracking-wide" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
                Protecting Paradise
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
  const categories = bocas.spaCategories || [];
  const filtered = activeCategory === "all" ? bocas.treatments : bocas.treatments.filter((t: Treatment) => t.category === activeCategory);

  return (
    <section id="wellness">
      <Parallax offset={50} className="w-full" style={{ height: "45vh", minHeight: 280 }}>
        <div className="relative w-full h-[55vh]">
          <img src={CDN.coupleVilla} alt="Couple at overwater villa" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
          <div className="absolute bottom-8 md:bottom-12 left-6 md:left-10 z-10">
            <TextReveal as="h2" delay={0.2}>
              <span className="text-white text-2xl md:text-4xl lg:text-5xl tracking-wide" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
                {bocas.theme.spaHeadline.replace("\n", " ")}
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
                      color: activeCategory === cat.id ? "#F2F6F5" : PALETTE.textSecondary,
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
                  backgroundColor: "rgba(255,255,255,0.5)",
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
  const restaurants = Array.isArray(bocasDiningCollection) ? bocasDiningCollection : [bocasDiningCollection];

  return (
    <TintedSection backgroundColor={PALETTE.gradientEnd} className="overflow-hidden">
      <Parallax offset={50} className="w-full" style={{ height: "45vh", minHeight: 280 }}>
        <div className="relative w-full h-[55vh]">
          <img src={CDN.topdownVillas} alt="Overwater villas from above" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
          <div className="absolute bottom-8 md:bottom-12 left-6 md:left-10 z-10">
            <TextReveal as="h2" delay={0.2}>
              <span className="text-white text-2xl md:text-4xl lg:text-5xl tracking-wide" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
                Caribbean Flavors
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
   GALLERY - Pinterest-staggered layout (unique to Bocas)
   ═══════════════════════════════════════════════════════════════ */
function GallerySection() {
  const images = [
    { src: CDN.resortAerial, alt: "Bocas del Toro resort aerial at sunset", tall: false },
    { src: CDN.coupleVilla, alt: "Couple at overwater villa with plunge pool", tall: true },
    { src: CDN.galleryVideo1, alt: "Bocas del Toro experience", tall: false, isVideo: true },
    { src: CDN.s1, alt: "Overwater villas walkway", tall: false },
    { src: CDN.topdownVillas, alt: "Overwater villas from above", tall: true },
    { src: CDN.aerialMangroves, alt: "Aerial villas in mangroves", tall: false },
    { src: CDN.overwaterDeck, alt: "Overwater villas from deck", tall: false },
    { src: CDN.galleryVideo2, alt: "Caribbean waters", tall: false, isVideo: true },
    { src: CDN.briceferreVilla, alt: "Villa interior by Brice Ferre", tall: false },
    { src: CDN.briceferreAerial, alt: "Aerial view by Brice Ferre", tall: false },
    { src: CDN.lagoonAerial, alt: "Turquoise lagoon aerial", tall: false },
    { src: CDN.coastline, alt: "Caribbean coastline", tall: false },
    { src: CDN.s3, alt: "Island experience video", tall: false, isVideo: true },
    { src: CDN.islandParadise, alt: "Island paradise", tall: false },
    { src: CDN.crystalSwimming, alt: "Crystal clear swimming", tall: false },
    { src: CDN.landscape, alt: "Bocas del Toro landscape", tall: false },
    { src: CDN.s2, alt: "Caribbean lagoon", tall: false },
    { src: CDN.tropicalVideo, alt: "Bocas del Toro tropical scene", tall: true, isVideo: true },
    { src: CDN.s4, alt: "Aerial resort view", tall: false },
  ];

  return (
    <section id="gallery" className="py-20 md:py-32" style={{ backgroundColor: PALETTE.gradientStart }}>
      <div className="px-6 md:px-10">
        <div className={maxW}>
          <AnimateOnScroll variants={fadeUp}>
            <SectionLabel>Gallery</SectionLabel>
          </AnimateOnScroll>
          <TextReveal as="h2" className="mb-12 md:mb-16" delay={0.1}>
            <span
              className="text-2xl md:text-4xl lg:text-5xl tracking-wide"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
            >
              Caribbean Moments
            </span>
          </TextReveal>

          {/* Pinterest-staggered masonry */}
          <div className="columns-2 md:columns-3 gap-3 md:gap-4 [column-fill:_balance]">
            {images.map((img, i) => (
              <MediaReveal key={i} delay={i * 0.04}>
                <div className="mb-3 md:mb-4 break-inside-avoid overflow-hidden">
                  {img.isVideo ? (
                    <video
                      src={img.src}
                      className="w-full object-cover"
                      style={{ aspectRatio: img.tall ? "3/4" : "4/3" }}
                      autoPlay muted loop playsInline
                    />
                  ) : (
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full object-cover"
                      style={{ aspectRatio: img.tall ? "3/4" : "4/3" }}
                      loading="lazy"
                    />
                  )}
                </div>
              </MediaReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
