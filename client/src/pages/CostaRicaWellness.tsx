/*
 * UNIVERSAL WELLNESS — Shared deep page for ALL properties
 * Renders in the color palette of whichever property the user came from.
 */

import { useState } from "react";
import { motion } from "framer-motion";
import NativeVideo from "@/components/NativeVideo";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import { properties, type Property, type Treatment } from "@/data/properties";
import { getPalette, BRAND, type PropertyPalette } from "@/data/propertyPalettes";
import PillarCrossLink from "@/components/PillarCrossLink";
import ScrollingPillarHeader from "@/components/ScrollingPillarHeader";
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
  "bocas-del-toro": "Bocas del Toro, Panam\u00e1",
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
      <BrandNavigation pageType="property" hideCenterLabel />
      <WellnessHero propertySlug={propertySlug} />
      <ScrollingPillarHeader word="NATURE-BASED WELLNESS" color={palette.primary} bgColor={palette.gradientStart} />
      <WellnessIntro palette={palette} spaSubheadline={property.theme.spaSubheadline} />
      {CR_SLUGS.has(propertySlug) && <ScienceOfWellness palette={palette} />}
      <WellnessContent property={property} palette={palette} />
      <Footer pageType="property" bgColor={palette.footerBg}  textColor="#FFFFFF" />
    </div>
  );
}

function WellnessHero({ propertySlug }: { propertySlug: string }) {
  const HERO_IMAGES: Record<string, { src: string; alt: string }> = {
    "tented-camp": { src: "/manus-storage/tc-wellness-aerial-pools-v2_d4e90dbd.jpg", alt: "Aerial view of wellness pools in the rainforest" },
    "springs": { src: "/manus-storage/springs-wellness-hero_3ada77df.jpg", alt: "Jungle pool surrounded by tropical foliage" },
  };
  const hero = HERO_IMAGES[propertySlug] || HERO_IMAGES["tented-camp"];
  return (
    <section className="relative aspect-[16/9] w-full overflow-hidden">
      <img src={hero.src} alt={hero.alt} className="w-full h-full object-cover" />
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
   SCIENCE OF WELLNESS — Editorial narrative on Costa Rica's
   healing environment. Content inspired by @copadearbol research.
   Only shown for CR properties.
   ═══════════════════════════════════════════════════════════════ */
function ScienceOfWellness({ palette }: { palette: PropertyPalette }) {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10" style={{ backgroundColor: palette.gradientStart }}>
      <div className={maxW}>
        {/* Section header */}
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: palette.accent }}
          >
            The Science
          </p>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl tracking-wide mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: palette.secondary }}
          >
            What Costa Rica Does to Your Body
          </h2>
          <div className="w-16 h-px mb-12" style={{ backgroundColor: palette.accent }} />
        </AnimateOnScroll>

        {/* Opening narrative */}
        <AnimateOnScroll variants={fadeUp} delay={0.1}>
          <div className="grid md:grid-cols-2 gap-8 md:gap-14 mb-20">
            <p
              className="text-[15px] md:text-[16px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: palette.secondary }}
            >
              Something changes in the body before you notice it consciously. Heart rate shifts. Stress hormones drop. Your brain moves into a different state. This is not metaphor\u2014it is measurable physiology. Costa Rica\u2019s rainforest environment triggers the parasympathetic nervous system, the body\u2019s \u201Crest and repair\u201D mode, through a combination of natural soundscapes, humidity, layered greenery, and the near-total absence of urban noise.
            </p>
            <p
              className="text-[15px] md:text-[16px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: palette.secondary }}
            >
              Research shows that cortisol levels fall, breathing slows, and the body begins to exit the chronic fight-or-flight state that defines modern life. Your system doesn\u2019t just relax. It relearns safety. For guests arriving from high-stimulation environments, the shift is often felt within the first twenty-four hours.
            </p>
          </div>
        </AnimateOnScroll>

        {/* The Air */}
        <AnimateOnScroll variants={fadeUp} delay={0.15}>
          <div className="mb-20">
            <h3
              className="text-xl md:text-2xl tracking-wide mb-5"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: palette.secondary }}
            >
              The Air You Breathe
            </h3>
            <p
              className="text-[15px] leading-[1.9] max-w-[780px]"
              style={{ fontFamily: "var(--font-body)", color: palette.secondary + "DD" }}
            >
              Rainforests produce exceptionally oxygen-rich, moisture-dense air filled with natural plant compounds called phytoncides\u2014volatile organic molecules released by trees. These compounds are linked to improved mood, reduced inflammation, enhanced immune response, and better cognitive clarity. Every breath taken under the canopy carries a chemistry that urban air simply cannot replicate.
            </p>
          </div>
        </AnimateOnScroll>

        {/* The Water */}
        <AnimateOnScroll variants={fadeUp} delay={0.15}>
          <div className="mb-20">
            <h3
              className="text-xl md:text-2xl tracking-wide mb-5"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: palette.secondary }}
            >
              The Water That Shifts Your Chemistry
            </h3>
            <p
              className="text-[15px] leading-[1.9] max-w-[780px]"
              style={{ fontFamily: "var(--font-body)", color: palette.secondary + "DD" }}
            >
              Swimming in natural water\u2014whether the thermal springs of Arenal or the Caribbean coast\u2014increases circulation and stimulates the release of endorphins, dopamine, and serotonin. Cold-to-warm water exposure improves vagus nerve tone, a key mechanism for emotional regulation and resilience. The ocean adds rhythm, horizon, and immersion\u2014a sensory environment that research consistently links to lower psychological distress and higher life satisfaction.
            </p>
          </div>
        </AnimateOnScroll>

        {/* The Recalibration */}
        <AnimateOnScroll variants={fadeUp} delay={0.15}>
          <div className="mb-8">
            <h3
              className="text-xl md:text-2xl tracking-wide mb-5"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: palette.secondary }}
            >
              Recalibration, Not Escape
            </h3>
            <p
              className="text-[15px] leading-[1.9] max-w-[780px]"
              style={{ fontFamily: "var(--font-body)", color: palette.secondary + "DD" }}
            >
              With no roads, no traffic noise, and minimal artificial stimulation, the Arenal rainforest allows the brain to exit constant alert mode. Guests report slower internal pacing, emotional regulation, nervous system coherence, and a sense of presence that lingers long after leaving. This is not a vacation that fades on the flight home. It is a physiological recalibration\u2014your system remembering what it feels like to be fully human.
            </p>
          </div>
        </AnimateOnScroll>
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

        <AnimateOnScroll variants={fadeUp} delay={0.3}>
          <div className="mt-16">
            <PillarCrossLink pillar="wellness" />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
