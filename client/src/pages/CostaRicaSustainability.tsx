/*
 * UNIVERSAL SUSTAINABILITY — Shared deep page for ALL properties
 * Renders in the color palette of whichever property the user came from.
 */

import { motion } from "framer-motion";
import NativeVideo from "@/components/NativeVideo";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import { properties, type Property } from "@/data/properties";
import { getPalette, BRAND, type PropertyPalette } from "@/data/propertyPalettes";
import { sustainabilityData, getSustainabilityKey } from "@/data/sustainability";
import PillarCrossLink from "@/components/PillarCrossLink";
import {
  AnimateOnScroll,
  StaggerOnScroll,
  TextReveal,
  fadeUp,
  staggerContainer,
} from "@/components/motion";

const CDN_BASE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

const sectionPadding = "py-20 md:py-32 px-6 md:px-10";
const maxW = "max-w-[1200px] mx-auto";

/** Hero videos per property */
const HERO_VIDEOS: Record<string, string> = {
  "tented-camp": `${CDN_BASE}/costa-rica-toucan_a70ad74a.mp4`,
  gardens: `${CDN_BASE}/costa-rica-toucan_a70ad74a.mp4`,
  springs: `${CDN_BASE}/costa-rica-toucan_a70ad74a.mp4`,
  "alto-atacama": `${CDN_BASE}/Video_Nayara_Atacama00007_8576aa55.MP4`,
  "bocas-del-toro": `${CDN_BASE}/bocas-drone-vertical_e44907ce.mp4`,
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

interface Props {
  propertySlug: string;
}

export default function CostaRicaSustainability({ propertySlug }: Props) {
  const palette = getPalette(propertySlug);
  const propertyDisplay = properties.find((p: Property) => p.id === propertySlug);
  const propertyName = propertyDisplay?.name || "Nayara";
  const heroVideo = HERO_VIDEOS[propertySlug] || HERO_VIDEOS["tented-camp"];
  const dataKey = getSustainabilityKey(propertySlug);
  const data = sustainabilityData[dataKey] || sustainabilityData["costa-rica"];
  const location = LOCATIONS[propertySlug] || "";

  return (
    <div className="min-h-screen" style={{ backgroundColor: palette.gradientStart }}>
      <BrandNavigation pageType="property" hideCenterLabel />
      <SustainabilityHero palette={palette} propertyName={propertyName} location={location} headline={data.headline} heroVideo={heroVideo} />
      <SustainabilityContent palette={palette} initiatives={data.initiatives} />
      <Footer pageType="property" bgColor={palette.footerBg} />
    </div>
  );
}

function SustainabilityHero({
  palette,
  propertyName,
  location,
  headline,
  heroVideo,
}: {
  palette: PropertyPalette;
  propertyName: string;
  location: string;
  headline: string;
  heroVideo: string;
}) {
  return (
    <div className="relative overflow-hidden" style={{ height: "50vh", minHeight: 320 }}>
      <div className="absolute inset-0">
        <NativeVideo src={heroVideo} className="w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: `${palette.primary}BF` }}
        />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-end pb-8 md:pb-12 px-6 md:px-10">
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
  );
}

function SustainabilityContent({
  palette,
  initiatives,
}: {
  palette: PropertyPalette;
  initiatives: { title: string; desc: string }[];
}) {
  return (
    <section className={sectionPadding} style={{ backgroundColor: palette.gradientStart }}>
      <div className={maxW}>
        <StaggerOnScroll
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12"
        >
          {initiatives.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="pl-6"
              style={{ borderLeft: `2px solid ${palette.primary}30` }}
            >
              <h3
                className="text-[17px] mb-3"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: BRAND.primaryText }}
              >
                {item.title}
              </h3>
              <p
                className="text-[14px] leading-[1.7]"
                style={{ fontFamily: "var(--font-body)", color: BRAND.secondaryText }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </StaggerOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.3}>
          <div className="mt-16">
            <PillarCrossLink pillar="sustainability" />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
