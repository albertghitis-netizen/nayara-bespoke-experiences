/*
 * UNIVERSAL SUSTAINABILITY — Shared deep page for ALL properties
 * Renders in the color palette of whichever property the user came from.
 */

import { useState } from "react";
import { motion } from "framer-motion";
import NativeVideo from "@/components/NativeVideo";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import { properties, type Property } from "@/data/properties";
import { getPalette, BRAND, type PropertyPalette } from "@/data/propertyPalettes";
import { sustainabilityData, getSustainabilityKey, type SustainabilityVideo } from "@/data/sustainability";
import PillarCrossLink from "@/components/PillarCrossLink";
import ScrollingPillarHeader from "@/components/ScrollingPillarHeader";
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
      <ScrollingPillarHeader word="SUSTAINABILITY" color={palette.primary} bgColor={palette.gradientStart} />
      <SustainabilityContent palette={palette} initiatives={data.initiatives} />
      {data.videos && data.videos.length > 0 && (
        <SustainabilityVideos palette={palette} videos={data.videos} propertySlug={propertySlug} />
      )}
      <ExploreSustainabilityCTA palette={palette} />
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

      </div>
    </section>
  );
}

function ExploreSustainabilityCTA({ palette }: { palette: PropertyPalette }) {
  return (
    <section className="py-12 md:py-20 px-6 md:px-10" style={{ backgroundColor: palette.gradientStart }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <PillarCrossLink pillar="sustainability" />
        </AnimateOnScroll>
      </div>
    </section>
  );
}

function VideoCard({ video, palette }: { video: SustainabilityVideo; palette: PropertyPalette }) {
  const [isAlt, setIsAlt] = useState(false);
  const hasAlt = !!video.altYoutubeId;
  const activeId = isAlt && video.altYoutubeId ? video.altYoutubeId : video.youtubeId;
  const activeDuration = isAlt && video.altDuration ? video.altDuration : video.duration;

  return (
    <motion.div
      variants={fadeUp}
      className="overflow-hidden"
      style={{
        backgroundColor: "rgba(255,255,255,0.4)",
        backdropFilter: "blur(8px)",
        borderRadius: "12px",
        borderBottom: `2px solid ${BRAND.divider}`,
      }}
    >
      {/* YouTube Embed */}
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <iframe
          src={`https://www.youtube.com/embed/${activeId}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          style={{ border: "none" }}
        />
      </div>

      {/* Info */}
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <h3
            className="text-[17px] mb-1"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: BRAND.primaryText }}
          >
            {video.title}
          </h3>
          {hasAlt && (
            <div className="flex gap-1 shrink-0">
              <button
                onClick={() => setIsAlt(false)}
                className="px-2.5 py-1 text-[10px] tracking-[0.1em] uppercase transition-all duration-300"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  borderRadius: "4px",
                  backgroundColor: !isAlt ? palette.primary : "transparent",
                  color: !isAlt ? "#fff" : BRAND.secondaryText,
                  border: `1px solid ${!isAlt ? palette.primary : BRAND.divider}`,
                }}
              >
                EN
              </button>
              <button
                onClick={() => setIsAlt(true)}
                className="px-2.5 py-1 text-[10px] tracking-[0.1em] uppercase transition-all duration-300"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  borderRadius: "4px",
                  backgroundColor: isAlt ? palette.primary : "transparent",
                  color: isAlt ? "#fff" : BRAND.secondaryText,
                  border: `1px solid ${isAlt ? palette.primary : BRAND.divider}`,
                }}
              >
                {video.altLanguage || "ES"}
              </button>
            </div>
          )}
        </div>
        <p
          className="text-[11px] tracking-[0.1em] mb-4"
          style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: palette.accent }}
        >
          {video.guest} &middot; {activeDuration}{isAlt ? " · Español" : hasAlt ? " · English" : ""}
        </p>
        <p
          className="text-[13px] leading-[1.7]"
          style={{ fontFamily: "var(--font-body)", color: BRAND.secondaryText }}
        >
          {video.description}
        </p>
      </div>
    </motion.div>
  );
}

const VIDEO_SECTION_TITLES: Record<string, { heading: string; description: string }> = {
  hangaroa: {
    heading: "Voices from the Island",
    description: "Long-form conversations with the guardians, archaeologists, and community leaders who are shaping the future of Rapa Nui.",
  },
  "alto-atacama": {
    heading: "Voices from the Desert",
    description: "Exploring how Nayara Alto Atacama operates sustainably in the world's driest desert — from solar energy to water stewardship.",
  },
  "bocas-del-toro": {
    heading: "Voices from the Archipelago",
    description: "Stories of marine conservation, mangrove restoration, and community partnership from the islands of Bocas del Toro.",
  },
  "costa-rica": {
    heading: "Voices from the Rainforest",
    description: "Conversations about protecting the Arenal rainforest, supporting wildlife corridors, and building a sustainable future in Costa Rica.",
  },
};

function SustainabilityVideos({
  palette,
  videos,
  propertySlug,
}: {
  palette: PropertyPalette;
  videos: SustainabilityVideo[];
  propertySlug: string;
}) {
  const crSlugs = ["tented-camp", "gardens", "springs"];
  const sectionKey = crSlugs.includes(propertySlug) ? "costa-rica" : propertySlug;
  const sectionMeta = VIDEO_SECTION_TITLES[sectionKey] || VIDEO_SECTION_TITLES["costa-rica"];
  return (
    <section className={sectionPadding} style={{ backgroundColor: palette.gradientStart }}>
      <div className={maxW}>
        {/* Divider */}
        <div className="mb-12" style={{ borderTop: `1px solid ${BRAND.divider}` }} />

        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.2em] mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: palette.primary }}
          >
            Nayara Horizons: Beyond Travel
          </p>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl tracking-wide mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: BRAND.primaryText }}
          >
            {sectionMeta.heading}
          </h2>
          <p
            className="text-[15px] leading-[1.8] max-w-[700px] mb-12"
            style={{ fontFamily: "var(--font-body)", color: BRAND.secondaryText }}
          >
            {sectionMeta.description}
          </p>
        </AnimateOnScroll>

        <StaggerOnScroll
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          {videos.map((video) => (
            <VideoCard key={video.youtubeId} video={video} palette={palette} />
          ))}
        </StaggerOnScroll>
      </div>
    </section>
  );
}
