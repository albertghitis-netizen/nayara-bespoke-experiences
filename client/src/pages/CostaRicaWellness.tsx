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
   SCIENCE OF WELLNESS — What happens to your brain & body
   Content inspired by @copadearbol research on Costa Rica's
   healing environment. Only shown for CR properties.
   ═══════════════════════════════════════════════════════════════ */
const HEALING_CARDS = [
  {
    image: "/manus-storage/46118279-827D-4CF1-A480-AA96C6080526_69d6b2b7.jpeg",
    headline: "What happens to your brain and body when you stay in Costa Rica?",
    body: "It\u2019s not just a vacation. Your nervous system knows the difference.",
  },
  {
    image: "/manus-storage/6DDE7245-4AB5-4621-A85D-67820283E10C_e40ef899.jpeg",
    headline: "The rainforest directly calms your nervous system.",
    body: "Dense rainforest environments stimulate the parasympathetic nervous system\u2014the \u201Crest and repair\u201D state. Research shows that natural soundscapes, humidity, and layered greenery reduce cortisol, slow breathing, and bring the body out of chronic fight-or-flight. Your system doesn\u2019t just relax. It relearns safety.",
  },
  {
    image: "/manus-storage/41E0D463-DA44-4CE8-B591-12B5DDB9A47B_e9bf5d8a.jpeg",
    headline: "Rainforest air feeds your brain differently.",
    body: "Rainforests produce exceptionally oxygen-rich, moisture-dense air filled with natural plant compounds (phytoncides). These compounds are linked to improved mood, reduced inflammation, enhanced immune response, and better cognitive clarity.",
  },
  {
    image: "/manus-storage/0ECDB67E-8675-434D-8847-BA8A5162469A_b53ecc0a.JPG",
    headline: "Your body starts changing before you realize it.",
    body: "Heart rate shifts. Stress hormones drop. Your brain moves into a different state.",
  },
  {
    image: "/manus-storage/97620226-7115-461A-B459-420B4EDFE808_b8c434e4.jpeg",
    headline: "The ocean shifts your chemistry.",
    body: "Swimming in salt water increases circulation and stimulates the release of endorphins (natural pain relief), dopamine (motivation and pleasure), and serotonin (mood stability). Cold-to-warm ocean exposure also improves vagus nerve tone\u2014key for emotional regulation and resilience.",
  },
  {
    image: "/manus-storage/F27947EA-839D-4733-9394-996DF83B20F7_4e11e6a9.jpeg",
    headline: "Your system remembers what it feels like to be human.",
    body: "With no roads, no traffic noise, and minimal artificial stimulation, the environment allows the brain to exit constant alert mode. People experience slower internal pacing, emotional regulation, nervous system coherence, and a sense of presence that lingers long after leaving. This isn\u2019t escape. It\u2019s recalibration.",
  },
];

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
          <div className="w-16 h-px mb-10" style={{ backgroundColor: palette.accent }} />
        </AnimateOnScroll>

        {/* Cards grid — alternating layout */}
        <div className="space-y-16 md:space-y-24">
          {HEALING_CARDS.map((card, i) => (
            <AnimateOnScroll key={i} variants={fadeUp} delay={0.1}>
              <div className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-12 items-center`}>
                {/* Image */}
                <div className="w-full md:w-1/2 overflow-hidden" style={{ borderRadius: "6px" }}>
                  <motion.img
                    src={card.image}
                    alt={card.headline}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                {/* Text */}
                <div className="w-full md:w-1/2">
                  <h3
                    className="text-xl md:text-2xl tracking-wide mb-4"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: palette.secondary }}
                  >
                    {card.headline}
                  </h3>
                  <p
                    className="text-[14px] md:text-[15px] leading-[1.85]"
                    style={{ fontFamily: "var(--font-body)", color: palette.secondary + "CC" }}
                  >
                    {card.body}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Closing line */}
        <AnimateOnScroll variants={fadeUp} delay={0.2}>
          <div className="mt-20 text-center">
            <p
              className="text-[13px] tracking-[0.04em] italic"
              style={{ fontFamily: "var(--font-body)", color: palette.secondary + "99" }}
            >
              Inspired by the research of @copadearbol
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
