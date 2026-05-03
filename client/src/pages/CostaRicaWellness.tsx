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
  // Use tented-camp palette (olive green + bone) for all Costa Rica properties
  const CR_SLUGS = new Set(["tented-camp", "gardens", "springs"]);
  const paletteSlug = CR_SLUGS.has(propertySlug) ? "tented-camp" : propertySlug;
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
