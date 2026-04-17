/*
 * UNIVERSAL GASTRONOMY — Shared deep page for ALL properties
 * Renders in the color palette of whichever property the user came from.
 */

import { motion } from "framer-motion";
import NativeVideo from "@/components/NativeVideo";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import { properties, type Property } from "@/data/properties";
import {
  costaRicaDining,
  atacamaDiningCollection,
  bocasDiningCollection,
  hangaroaDining,
  type PropertyDining,
} from "@/data/dining";
import { getPalette, BRAND, type PropertyPalette } from "@/data/propertyPalettes";
import PillarCrossLink from "@/components/PillarCrossLink";
import ScrollingPillarHeader from "@/components/ScrollingPillarHeader";
import {
  AnimateOnScroll,
  StaggerOnScroll,
  TextReveal,
  DrawLine,
  Parallax,
  fadeUp,
  staggerContainer,
} from "@/components/motion";

const CDN_BASE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

const sectionPadding = "py-20 md:py-32 px-6 md:px-10";
const maxW = "max-w-[1200px] mx-auto";

/** Hero videos per property */
const HERO_VIDEOS: Record<string, string> = {
  "tented-camp": `${CDN_BASE}/gastronomy-hero-audio_0f3604db.mp4`,
  gardens: `${CDN_BASE}/gastronomy-hero-audio_0f3604db.mp4`,
  springs: `${CDN_BASE}/gastronomy-hero-audio_0f3604db.mp4`,
  "alto-atacama": `${CDN_BASE}/flamingos_1001c3d8.mp4`,
  "bocas-del-toro": `${CDN_BASE}/bocas_gallery_video_0a7e31ab.mp4`,
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

/** Blog links per property for gastronomy intro */
const GASTRO_BLOG_LINKS: Record<string, { url: string; label: string }> = {
  "tented-camp": { url: "https://blog.nayararesorts.com/nayara-arenals-adventures-in-flavor", label: "Read: Adventures in Flavor" },
  gardens: { url: "https://blog.nayararesorts.com/nayara-arenals-adventures-in-flavor", label: "Read: Adventures in Flavor" },
  springs: { url: "https://blog.nayararesorts.com/nayara-arenals-adventures-in-flavor", label: "Read: Adventures in Flavor" },
};

/** H1 headlines per property */
const HEADLINES: Record<string, string> = {
  "tented-camp": "Rainforest Dining",
  gardens: "Rainforest Dining",
  springs: "Rainforest Dining",
  "alto-atacama": "Desert Dining",
  "bocas-del-toro": "Caribbean Dining",
  hangaroa: "Pacific Island Cuisine",
};

/** Dining data per property */
const DINING_MAP: Record<string, PropertyDining> = {
  "tented-camp": costaRicaDining,
  gardens: costaRicaDining,
  springs: costaRicaDining,
  "alto-atacama": atacamaDiningCollection,
  "bocas-del-toro": bocasDiningCollection,
  hangaroa: hangaroaDining,
};

interface Props {
  propertySlug: string;
}

export default function CostaRicaGastronomy({ propertySlug }: Props) {
  const palette = getPalette(propertySlug);
  const propertyDisplay = properties.find((p: Property) => p.id === propertySlug);
  const propertyName = propertyDisplay?.name || "Nayara";
  const heroVideo = HERO_VIDEOS[propertySlug] || HERO_VIDEOS["tented-camp"];
  const headline = HEADLINES[propertySlug] || "A Taste of Place";
  const dining = DINING_MAP[propertySlug] || costaRicaDining;
  const location = LOCATIONS[propertySlug] || "";

  return (
    <div className="min-h-screen" style={{ backgroundColor: palette.gradientEnd }}>
      <BrandNavigation pageType="property" hideCenterLabel />
      <GastronomyHero palette={palette} propertyName={propertyName} location={location} heroVideo={heroVideo} headline={headline} />
      <ScrollingPillarHeader word="GASTRONOMY" color={palette.primary} bgColor={palette.gradientEnd} />
      <GastronomyIntro palette={palette} description={dining.description} blogLink={GASTRO_BLOG_LINKS[propertySlug]} />
      <GastronomyContent palette={palette} restaurants={dining.restaurants} />
      <Footer pageType="property" bgColor={palette.footerBg} />
    </div>
  );
}

function GastronomyHero({
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
    <Parallax offset={50} className="w-full" style={{ aspectRatio: "2/1" }}>
      <div className="relative w-full aspect-[2/1]">
        <NativeVideo src={heroVideo} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none" />
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
          )}        </div>
      </div>
    </Parallax>
  );
}

function GastronomyIntro({ palette, description, blogLink }: { palette: PropertyPalette; description: string; blogLink?: { url: string; label: string } }) {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: palette.gradientEnd }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[15px] md:text-[17px] leading-[1.9] max-w-[720px]"
            style={{ fontFamily: "var(--font-body)", color: BRAND.secondaryText }}
          >
            {description}
          </p>
          {blogLink && (
            <a
              href={blogLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[12px] tracking-[0.08em] mt-4 transition-colors hover:opacity-70"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: palette.primary, fontStyle: "italic" }}
            >
              {blogLink.label} \u2197
            </a>
          )}
        </AnimateOnScroll>
      </div>
    </section>
  );
}

function GastronomyContent({ palette, restaurants }: { palette: PropertyPalette; restaurants: any[] }) {
  return (
    <section className={sectionPadding} style={{ backgroundColor: palette.gradientEnd }}>
      <div className={maxW}>
        <StaggerOnScroll
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16"
        >
          {restaurants.map((restaurant: any, i: number) => (
            <motion.div key={i} variants={fadeUp}>
              <DrawLine color={palette.primary} className="mb-6" />
              <h3
                className="text-[20px] mb-2"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: BRAND.primaryText }}
              >
                {restaurant.name}
              </h3>
              <p
                className="text-[11px] tracking-[0.1em] mb-4"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: palette.accent }}
              >
                {restaurant.cuisine}
              </p>
              <p
                className="text-[14px] leading-[1.8]"
                style={{ fontFamily: "var(--font-body)", color: BRAND.secondaryText }}
              >
                {restaurant.description}
              </p>
            </motion.div>
          ))}
        </StaggerOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.3}>
          <div className="mt-16">
            <PillarCrossLink pillar="gastronomy" />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
