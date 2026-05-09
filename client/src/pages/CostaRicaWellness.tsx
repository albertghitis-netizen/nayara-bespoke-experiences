/*
 * UNIVERSAL WELLNESS , Shared deep page for ALL properties
 * Renders in the color palette of whichever property the user came from.
 * RESTRUCTURED: Private Hot Springs → Las Termas → Yoga → Sukha Spa → Treatments
 */

import { useState } from "react";
import { motion } from "framer-motion";
import NativeVideo from "@/components/NativeVideo";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import { properties, type Property, type Treatment } from "@/data/properties";
import { getPalette, BRAND, type PropertyPalette } from "@/data/propertyPalettes";
import PillarCrossLink from "@/components/PillarCrossLink";
import {
  AnimateOnScroll,
  StaggerOnScroll,
  TextReveal,
  Parallax,
  fadeUp,
  staggerContainer,
} from "@/components/motion";

const CDN_BASE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

const sectionPadding = "py-20 md:py-32 px-6 md:px-10";
const maxW = "max-w-[1200px] mx-auto";

/** Hero videos per property */
const HERO_VIDEOS: Record<string, string> = {
  "tented-camp": `${CDN_BASE}/wellness-hero-meter-audio_f24ab2c6.mp4`,
  gardens: `${CDN_BASE}/wellness-hero-meter-audio_f24ab2c6.mp4`,
  springs: `${CDN_BASE}/wellness-hero-meter-audio_f24ab2c6.mp4`,
  "alto-atacama": `${CDN_BASE}/cfnetwork_b9ae0ca4.mp4`,
  "bocas-del-toro": `${CDN_BASE}/bocas-gallery-video2_1dd3d81d.mp4`,
  hangaroa: `${CDN_BASE}/hangaroa-hero-audio_f26eed73.mp4`,
};

/** Location subtitles per property */
const LOCATIONS: Record<string, string> = {
  "tented-camp": "Arenal Volcano National Park, Costa Rica",
  gardens: "Arenal Volcano National Park, Costa Rica",
  springs: "Arenal Volcano National Park, Costa Rica",
  "alto-atacama": "San Pedro de Atacama, Chile",
  "bocas-del-toro": "Bocas del Toro, Panamá",
  hangaroa: "Rapa Nui, Easter Island, Chile",
};

/** CR properties share tented-camp data */
const DATA_PROPERTY_MAP: Record<string, string> = {
  "tented-camp": "tented-camp",
  gardens: "tented-camp",
  springs: "tented-camp",
  "alto-atacama": "alto-atacama",
  "bocas-del-toro": "bocas-del-toro",
  hangaroa: "hangaroa",
};

interface Props {
  propertySlug: string;
}

export default function CostaRicaWellness({ propertySlug }: Props) {
  // Use tented-camp palette for tented-camp and gardens; springs uses its own palette
  const CR_SLUGS = new Set(["tented-camp", "gardens", "springs"]);
  const paletteSlug = (propertySlug === "springs") ? "springs" : (CR_SLUGS.has(propertySlug) ? "tented-camp" : propertySlug);
  const palette = getPalette(paletteSlug);
  const dataSlug = DATA_PROPERTY_MAP[propertySlug] || propertySlug;
  const property = properties.find((p: Property) => p.id === dataSlug)!;
  const propertyDisplay = properties.find((p: Property) => p.id === propertySlug);
  const propertyName = propertyDisplay?.name || "Nayara";
  const location = LOCATIONS[propertySlug] || "";

  return (
    <div className="min-h-screen" style={{ backgroundColor: palette.gradientStart }}>
      <BrandNavigation pageType="property" backLink={{ label: propertyName, href: `/${propertySlug}` }} />
      <WellnessHero propertySlug={propertySlug} />
      <WellnessIntro palette={palette} spaSubheadline={property.theme.spaSubheadline} />
      {CR_SLUGS.has(propertySlug) && <PrivateHotSprings palette={palette} />}
      {CR_SLUGS.has(propertySlug) && <LasTermas palette={palette} />}
      {CR_SLUGS.has(propertySlug) && <YogaSection palette={palette} />}
      {CR_SLUGS.has(propertySlug) && <SukhaSpaBanner palette={palette} />}
      <WellnessContent property={property} palette={palette} />
      <Footer pageType="property" bgColor={palette.footerBg} textColor="#FFFFFF" propertyName={propertySlug === "gardens" ? "Gardens" : propertySlug === "tented-camp" ? "Tented Camp" : propertySlug === "springs" ? "Springs" : propertySlug === "bocas-del-toro" ? "Bocas del Toro" : undefined} />
    </div>
  );
}

function WellnessHero({ propertySlug }: { propertySlug: string }) {
  return (
    <section className="relative aspect-[16/9] w-full overflow-hidden">
      <NativeVideo
        src="/manus-storage/AC144F9B-1C57-4187-8ABE-9F160B2F40AD_2b771883_f3c4a5ea.mp4"
        className="w-full h-full"
      />
    </section>
  );
}

function WellnessIntro({ palette, spaSubheadline }: { palette: PropertyPalette; spaSubheadline: string }) {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: "#E6DFD5" }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[15px] md:text-[17px] leading-[1.9] max-w-[720px]"
            style={{ fontFamily: "var(--font-body)", color: palette.secondary }}
          >
            {spaSubheadline}
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PRIVATE HOT SPRINGS PLUNGE POOLS
   Editorial narrative with blog content about volcanic springs
   ═══════════════════════════════════════════════════════════════ */
function PrivateHotSprings({ palette }: { palette: PropertyPalette }) {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10" style={{ backgroundColor: palette.gradientStart }}>
      <div className={maxW}>
        {/* Section header */}
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: palette.accent }}
          >
            Private Sanctuary
          </p>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl tracking-wide mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: palette.secondary }}
          >
            Private Hot Springs Plunge Pools
          </h2>
          <div className="w-16 h-px mb-12" style={{ backgroundColor: palette.accent }} />
        </AnimateOnScroll>

        {/* Main narrative */}
        <AnimateOnScroll variants={fadeUp} delay={0.1}>
          <div className="grid md:grid-cols-2 gap-8 md:gap-14 mb-20">
            <div>
              <p
                className="text-[15px] md:text-[16px] leading-[1.9] mb-6"
                style={{ fontFamily: "var(--font-body)", color: palette.secondary }}
              >
                Private hot spring plunge pools sit at the crossroads of geology, history, and modern wellness science, combining volcanic heat, environmental seclusion, and behavioral privacy. When guests enter a private plunge pool in the rainforest, they experience a reversal of an ancient pattern: landscape and water no longer force communal gathering; instead, they restore the autonomy early humans once had.
              </p>
              <p
                className="text-[15px] md:text-[16px] leading-[1.9]"
                style={{ fontFamily: "var(--font-body)", color: palette.secondary }}
              >
                The water that feeds every private plunge pool at Nayara Springs and Nayara Tented Camp is heated by the magmatic systems beneath Arenal Volcano, carrying a mineral profile of calcium, magnesium, bicarbonate, and silica that has been restoring human beings in this region long before anyone built a hotel above it.
              </p>
            </div>
            <div>
              <p
                className="text-[15px] md:text-[16px] leading-[1.9] mb-6"
                style={{ fontFamily: "var(--font-body)", color: palette.secondary }}
              >
                Privacy at Nayara is engineered. Villas and tents are oriented using controlled sightlines so no terrace overlooks another. Dense rainforest vegetation acts as living screening, while elevation changes and setbacks eliminate cross-visibility. When a guest steps into warm water, no one else can see. This combination of topography, landscaping, and spatial orientation is considered one of the strongest architectural mechanisms for behavioral privacy.
              </p>
              <p
                className="text-[15px] md:text-[16px] leading-[1.9]"
                style={{ fontFamily: "var(--font-body)", color: palette.secondary }}
              >
                The result is not simply a nicer pool. It is a different category of stay,where warmth, silence, nature, solitude, and geology converge into a direct encounter with the place itself.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Video section */}
        <AnimateOnScroll variants={fadeUp} delay={0.15}>
          <div className="mb-12">
            <div className="w-full rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <NativeVideo
                src="/manus-storage/NayaraResorts-HeroVideobyBriceFerreStudio_42eb4d15_b9969174.mp4"
                className="w-full h-full"
              />
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   LAS TERMAS
   Thermal springs experience with video and imagery
   ═══════════════════════════════════════════════════════════════ */
function LasTermas({ palette }: { palette: PropertyPalette }) {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10" style={{ backgroundColor: "#F5F3F0" }}>
      <div className={maxW}>
        {/* Section header */}
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: palette.accent }}
          >
            Thermal Experience
          </p>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl tracking-wide mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: palette.secondary }}
          >
            Las Termas
          </h2>
          <div className="w-16 h-px mb-12" style={{ backgroundColor: palette.accent }} />
        </AnimateOnScroll>

        {/* Grid layout: Video left, Image right on desktop; stacked on mobile */}
        <AnimateOnScroll variants={fadeUp} delay={0.1}>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
            {/* Horizontal video */}
            <div>
              <div className="w-full rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <NativeVideo
                  src="/manus-storage/NayaraResorts-HeroVideobyBriceFerreStudio_42eb4d15_b9969174.mp4"
                  className="w-full h-full"
                />
              </div>
            </div>
            {/* Vertical video */}
            <div>
              <div className="w-full rounded-lg overflow-hidden" style={{ aspectRatio: "9/16" }}>
                <NativeVideo
                  src="/manus-storage/537195DB-9898-40EA-9014-7AF3FFF321D7(2)_bd2835d1_eebdd27f.mp4"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Image below videos */}
        <AnimateOnScroll variants={fadeUp} delay={0.15}>
          <div className="mb-12">
            <img
              src="/manus-storage/pasted_file_537KZK_image_f092b2e7.png"
              alt="Las Termas hot springs pool in rainforest"
              className="w-full rounded-lg overflow-hidden object-cover"
              style={{ aspectRatio: "16/9" }}
            />
          </div>
        </AnimateOnScroll>

        {/* Description text */}
        <AnimateOnScroll variants={fadeUp} delay={0.2}>
          <div className="max-w-[780px]">
            <p
              className="text-[15px] md:text-[16px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: palette.secondary }}
            >
              Las Termas represent the heart of thermal wellness at Nayara. Fed by geothermal springs heated by Arenal Volcano's magmatic systems, these pools offer a gentle, mineral-rich immersion that has been recognized for centuries as a source of restoration and healing. The combination of warm water, rainforest seclusion, and natural beauty creates a sanctuary where the body and mind can truly recalibrate.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   YOGA
   Rainforest yoga and movement practices
   ═══════════════════════════════════════════════════════════════ */
function YogaSection({ palette }: { palette: PropertyPalette }) {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10" style={{ backgroundColor: palette.gradientStart }}>
      <div className={maxW}>
        {/* Section header */}
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: palette.accent }}
          >
            Movement & Mindfulness
          </p>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl tracking-wide mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: palette.secondary }}
          >
            Yoga in the Rainforest
          </h2>
          <div className="w-16 h-px mb-12" style={{ backgroundColor: palette.accent }} />
        </AnimateOnScroll>

        {/* Yoga image */}
        <AnimateOnScroll variants={fadeUp} delay={0.1}>
          <div className="mb-12">
            <img
              src="/manus-storage/yoga-vertical_2984cb95.jpg"
              alt="Yoga practice in the rainforest"
              className="w-full rounded-lg overflow-hidden object-cover"
              style={{ maxHeight: "600px" }}
            />
          </div>
        </AnimateOnScroll>

        {/* Description */}
        <AnimateOnScroll variants={fadeUp} delay={0.15}>
          <div className="max-w-[780px]">
            <p
              className="text-[15px] md:text-[16px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: palette.secondary }}
            >
              Yoga in the rainforest is not a performance or a class checklist. It is a practice that unfolds within the living presence of the forest itself. The canopy becomes your ceiling, the earth beneath you becomes your foundation, and the sounds of the jungle become your soundtrack. Movement slows, breath deepens, and the boundary between your body and the landscape begins to dissolve. This is where yoga becomes what it was always meant to be: a direct conversation between your nervous system and the intelligence of nature.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SUKHA SPA BANNER
   Header image before spa menu
   ═══════════════════════════════════════════════════════════════ */
function SukhaSpaBanner({ palette }: { palette: PropertyPalette }) {
  return (
    <section className="py-0 px-0 w-full">
      <img
        src="/manus-storage/sukha-spa-header_f45f904f.jpg"
        alt="Sukha Spa"
        className="w-full h-auto object-cover"
        style={{ display: "block" }}
      />
      <div className="w-full py-12 md:py-16 px-6 md:px-10" style={{ backgroundColor: palette.gradientStart }}>
        <div className={maxW}>
          <div className="flex justify-center">
            <div className="w-full md:w-96" style={{ aspectRatio: "9/16" }}>
              <div className="w-full h-full rounded-lg overflow-hidden">
                <NativeVideo
                  src="/manus-storage/62AE1541-E12D-4033-AFB5-E763C09F93D5_75b0518e.MP4"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WellnessContent({ property, palette }: { property: Property; palette: PropertyPalette }) {
  const categories = property.spaCategories.filter(c => c.id !== "all");
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id || "massage");
  const filtered = property.treatments.filter((t: Treatment) => t.category === activeCategory);

  return (
    <section className={sectionPadding} style={{ backgroundColor: palette.gradientStart }}>
      <div className={maxW}>
        {/* Section header */}
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: palette.accent }}
          >
            Spa Menu
          </p>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl tracking-wide mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: palette.secondary }}
          >
            Sukha Spa Treatments
          </h2>
          <div className="w-16 h-px mb-12" style={{ backgroundColor: palette.accent }} />
        </AnimateOnScroll>

        {/* Category buttons */}
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
                    backgroundColor: activeCategory === cat.id ? palette.primary : "transparent",
                    color: activeCategory === cat.id ? "#F7F5F0" : palette.secondary,
                    border: `1px solid ${activeCategory === cat.id ? palette.primary : "#E6DFD5"}`,
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </AnimateOnScroll>
        )}

        {/* Treatment cards grid */}
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
                borderBottom: `2px solid ${palette.primary}`,
              }}
              whileHover={{ borderBottomColor: palette.primary }}
            >
              <h3
                className="text-[17px] mb-2"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: palette.secondary }}
              >
                {treatment.name}
              </h3>
              <p
                className="text-[11px] tracking-[0.1em] mb-4"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: palette.accent }}
              >
                {treatment.duration}
                {treatment.price ? ` · ${treatment.price}` : ""}
              </p>
              <p
                className="text-[13px] leading-[1.7]"
                style={{ fontFamily: "var(--font-body)", color: palette.secondary }}
              >
                {treatment.description}
              </p>
            </motion.div>
          ))}
        </StaggerOnScroll>

        {/* Cross link */}
        <AnimateOnScroll variants={fadeUp} delay={0.3}>
          <div className="mt-16">
            <PillarCrossLink pillar="wellness" />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
