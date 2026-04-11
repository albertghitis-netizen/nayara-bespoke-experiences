/*
 * UNIVERSAL EXPERIENCES — Shared deep page for ALL properties
 * Renders in the color palette of whichever property the user came from.
 * Same layout, different data + colors — the user never knows it's shared.
 */

import { useState } from "react";
import { motion } from "framer-motion";
import NativeVideo from "@/components/NativeVideo";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import { properties, type Property, type Excursion } from "@/data/properties";
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
  "tented-camp": `${CDN_BASE}/experiences-hero-audio_8cbbcad0.mp4`,
  gardens: `${CDN_BASE}/experiences-hero-audio_8cbbcad0.mp4`,
  springs: `${CDN_BASE}/experiences-hero-audio_8cbbcad0.mp4`,
  "alto-atacama": `${CDN_BASE}/experiences-hero-geysers-audio_7e6b6a00.mp4`,
  "bocas-del-toro": `${CDN_BASE}/bocas-gallery-video1_d18b5ced.mp4`,
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

/** H1 headlines per property */
const HEADLINES: Record<string, string> = {
  "tented-camp": "Rainforest Adventures",
  gardens: "Rainforest Adventures",
  springs: "Rainforest Adventures",
  "alto-atacama": "Desert Explorations",
  "bocas-del-toro": "Caribbean Adventures",
  hangaroa: "Rapa Nui Explorations",
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

export default function CostaRicaExperiences({ propertySlug }: Props) {
  const palette = getPalette(propertySlug);
  const dataSlug = DATA_PROPERTY_MAP[propertySlug] || propertySlug;
  const property = properties.find((p: Property) => p.id === dataSlug)!;
  const propertyDisplay = properties.find((p: Property) => p.id === propertySlug);
  const propertyName = propertyDisplay?.name || "Nayara";
  const heroVideo = HERO_VIDEOS[propertySlug] || HERO_VIDEOS["tented-camp"];
  const headline = HEADLINES[propertySlug] || "Bespoke Experiences";
  const location = LOCATIONS[propertySlug] || "";

  return (
    <div className="min-h-screen" style={{ backgroundColor: palette.gradientStart }}>
      <BrandNavigation pageType="property" hideCenterLabel />
      <ExperiencesHero palette={palette} propertyName={propertyName} location={location} heroVideo={heroVideo} headline={headline} />
      <ExperiencesContent property={property} palette={palette} />
      <Footer pageType="property" bgColor={palette.footerBg} />
    </div>
  );
}

function ExperiencesHero({
  palette,
  propertyName,
  location,
  heroVideo,
  headline,
}: {
  palette: PropertyPalette;
  propertyName: string;
  location: string;
  heroVideo: string;
  headline: string;
}) {
  return (
    <Parallax offset={60} className="w-full" style={{ height: "50vh", minHeight: 320 }}>
      <div className="relative w-full h-[60vh]">
        <NativeVideo src={heroVideo} className="w-full h-full object-cover" hasAudio />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
        <div className="absolute bottom-8 md:bottom-12 left-6 md:left-10 z-10">
          <TextReveal as="h1" delay={0.2}>
            <span
              className="text-white text-2xl md:text-4xl lg:text-5xl tracking-wide"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              {headline}
            </span>
          </TextReveal>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white/50 text-[11px] tracking-[0.2em] mt-3"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            {propertyName}
          </motion.p>
          {location && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-white/40 text-[10px] tracking-[0.15em] mt-1"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              {location}
            </motion.p>
          )}
        </div>
      </div>
    </Parallax>
  );
}

function ExperiencesContent({ property, palette }: { property: Property; palette: PropertyPalette }) {
  const categories = property.excursionCategories.filter(c => c.id !== "all");
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id || "nature");
  const filtered = property.excursions.filter((e: Excursion) => e.category === activeCategory);

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
                    color: activeCategory === cat.id ? "#F5F1EB" : BRAND.secondaryText,
                    border: `1px solid ${activeCategory === cat.id ? palette.primary : BRAND.divider}`,
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
            <ExcursionCard key={excursion.id} excursion={excursion} palette={palette} />
          ))}
        </StaggerOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.3}>
          <div className="mt-16">
            <PillarCrossLink pillar="experiences" />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

function ExcursionCard({ excursion, palette }: { excursion: Excursion; palette: PropertyPalette }) {
  const hasMedia = excursion.image || excursion.verticalVideo;

  return (
    <motion.div
      variants={fadeUp}
      className="overflow-hidden transition-all duration-500 hover:translate-y-[-2px]"
      style={{
        backgroundColor: "rgba(255,255,255,0.4)",
        backdropFilter: "blur(8px)",
        borderRadius: "12px",
        borderBottom: `2px solid ${BRAND.divider}`,
      }}
      whileHover={{ borderBottomColor: palette.primary }}
    >
      {hasMedia && (
        <div className="relative w-full h-48 overflow-hidden">
          {excursion.verticalVideo ? (
            <NativeVideo
              src={excursion.verticalVideo}
              className="w-full h-full object-cover"
            />
          ) : excursion.image ? (
            <img
              src={excursion.image}
              alt={excursion.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      )}

      <div className="p-6 md:p-8">
        <h3
          className="text-[17px] mb-2"
          style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: BRAND.primaryText }}
        >
          {excursion.name}
        </h3>
        {excursion.duration && (
          <p
            className="text-[11px] tracking-[0.1em] mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: palette.accent }}
          >
            {excursion.duration}
            {excursion.price ? ` · ${excursion.price}` : ""}
          </p>
        )}
        <p
          className="text-[13px] leading-[1.7]"
          style={{ fontFamily: "var(--font-body)", color: BRAND.secondaryText }}
        >
          {excursion.description}
        </p>
      </div>
    </motion.div>
  );
}
