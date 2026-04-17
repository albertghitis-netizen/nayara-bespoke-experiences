/*
 * UNIVERSAL SUSTAINABILITY — Shared deep page for ALL properties
 * Renders in the color palette of whichever property the user came from.
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import NativeVideo from "@/components/NativeVideo";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import { properties, type Property } from "@/data/properties";
import { getPalette, BRAND, type PropertyPalette } from "@/data/propertyPalettes";
import { sustainabilityData, getSustainabilityKey, type SustainabilityVideo, type SustainabilityBlog } from "@/data/sustainability";
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

/** Per-property hero height overrides (default 70vh) */
const HERO_HEIGHTS: Record<string, string> = {
  "alto-atacama": "78vh",
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
      <SustainabilityHero palette={palette} propertyName={propertyName} headline={data.headline} heroVideo={heroVideo} heroHeight={HERO_HEIGHTS[propertySlug]} />
      <ScrollingPillarHeader word="BEYOND SUSTAINABILITY" color={palette.primary} bgColor={palette.gradientStart} />
      <SustainabilityContent palette={palette} initiatives={data.initiatives} />
      {((data.videos && data.videos.length > 0) || (data.blogs && data.blogs.length > 0)) && (
        <SustainabilityVoices palette={palette} videos={data.videos || []} blogs={data.blogs || []} propertySlug={propertySlug} />
      )}
      <ExploreSustainabilityCTA palette={palette} />
      <Footer pageType="property" bgColor={palette.footerBg} />
    </div>
  );
}

function SustainabilityHero({
  palette,
  propertyName,
  headline,
  heroVideo,
  heroHeight,
}: {
  palette: PropertyPalette;
  propertyName: string;
  headline: string;
  heroVideo: string;
  heroHeight?: string;
}) {
  return (
    <div className="relative overflow-hidden" style={{ height: heroHeight || "70vh", minHeight: 420 }}>
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

      </div>
    </div>
  );
}

const CATEGORIES = [
  {
    label: "Flora & Fauna",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4-4-8-7.5-8-11a8 8 0 0116 0c0 3.5-4 7-8 11z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11V7m0 0c-1.5 0-3 1-3 3m3-3c1.5 0 3 1 3 3" />
      </svg>
    ),
    desc: "Protecting native ecosystems, wildlife corridors, and biodiversity.",
  },
  {
    label: "Operations",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    desc: "Energy, water, waste, and carbon-neutral resort operations.",
  },
  {
    label: "Community",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    desc: "Supporting local communities, culture, and education.",
  },
  {
    label: "Certifications",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    desc: "Third-party verified sustainability standards and awards.",
  },
];

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
        {/* Category Cards — Row 1 */}
        <StaggerOnScroll
          variants={staggerContainer}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-24"
        >
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat.label}
              variants={fadeUp}
              className="group cursor-pointer text-left p-5 md:p-6 transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: BRAND.bone,
                borderRadius: "12px",
                border: `1px solid ${BRAND.divider}`,
              }}
              whileHover={{ y: -4 }}
              onClick={() => {
                import("sonner").then(({ toast }) => toast(`${cat.label} — Coming Soon`));
              }}
            >
              <div
                className="mb-3 transition-colors duration-300"
                style={{ color: palette.primary }}
              >
                {cat.icon}
              </div>
              <h3
                className="text-[15px] md:text-[16px] mb-2"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: BRAND.primaryText }}
              >
                {cat.label}
              </h3>
              <p
                className="text-[12px] leading-[1.6]"
                style={{ fontFamily: "var(--font-body)", color: BRAND.secondaryText }}
              >
                {cat.desc}
              </p>
            </motion.button>
          ))}
        </StaggerOnScroll>

        {/* Initiative Cards — Row 2 */}
        <StaggerOnScroll
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12"
        >
          {initiatives.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="p-6 md:p-8"
              style={{
                backgroundColor: BRAND.bone,
                borderRadius: "12px",
                border: `1px solid ${BRAND.divider}`,
                borderLeft: `3px solid ${palette.primary}`,
              }}
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
  const [playing, setPlaying] = useState(false);
  const hasAlt = !!video.altYoutubeId;
  const activeId = isAlt && video.altYoutubeId ? video.altYoutubeId : video.youtubeId;
  const activeDuration = isAlt && video.altDuration ? video.altDuration : video.duration;

  /* Reset playing state when language toggles */
  const handleLangSwitch = (alt: boolean) => {
    setIsAlt(alt);
    setPlaying(false);
  };

  return (
    <motion.div
      variants={fadeUp}
      className="overflow-hidden"
      style={{
        backgroundColor: BRAND.bone,
        borderRadius: "12px",
        border: `1px solid ${BRAND.divider}`,
      }}
    >
      {/* YouTube Thumbnail / Embed */}
      <div className="relative w-full overflow-hidden" style={{ paddingBottom: "52%" }}>
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${activeId}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            style={{ border: "none" }}
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 w-full h-full group cursor-pointer"
            aria-label={`Play ${video.title}`}
          >
            <img
              src={`https://img.youtube.com/vi/${activeId}/maxresdefault.jpg`}
              alt={video.title}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ transform: "scale(1.35)" }}
              onError={(e) => {
                /* Fallback to hqdefault if maxres not available */
                (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${activeId}/hqdefault.jpg`;
              }}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                <svg className="w-6 h-6 md:w-7 md:h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </button>
        )}
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
                onClick={() => handleLangSwitch(false)}
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
                onClick={() => handleLangSwitch(true)}
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

const VOICES_SECTION_TITLES: Record<string, { heading: string; description: string }> = {
  hangaroa: {
    heading: "Voices from the Island",
    description: "Stories of cultural preservation, ecological regeneration, and community resilience from the heart of Rapa Nui.",
  },
  "alto-atacama": {
    heading: "Voices from the Desert",
    description: "Stories of sustainability, wildlife conservation, and community from the world's driest desert.",
  },
  "bocas-del-toro": {
    heading: "Voices from the Archipelago",
    description: "Stories of marine conservation, coral restoration, and community partnership from the islands of Bocas del Toro.",
  },
  "costa-rica": {
    heading: "Voices from the Rainforest",
    description: "Stories of wildlife conservation, community empowerment, and ecological stewardship from the Arenal rainforest.",
  },
};

function BlogCard({ blog, palette }: { blog: SustainabilityBlog; palette: PropertyPalette }) {
  const fallbackImg = "https://blog.nayararesorts.com/hubfs/2-Nov-05-2025-03-44-38-2049-AM.png";
  const isInternal = blog.url.startsWith("/");

  const thumbnailContent = (
    <>
      <img
        src={blog.image || fallbackImg}
        alt={blog.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        onError={(e) => { (e.target as HTMLImageElement).src = fallbackImg; }}
      />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
    </>
  );

  return (
    <motion.div
      variants={fadeUp}
      className="overflow-hidden group"
      style={{
        backgroundColor: BRAND.bone,
        borderRadius: "12px",
        border: `1px solid ${BRAND.divider}`,
        opacity: blog.comingSoon ? 0.6 : 1,
      }}
    >
      {/* Thumbnail */}
      <div className="relative w-full overflow-hidden" style={{ paddingBottom: "52%" }}>
        {blog.comingSoon ? (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ backgroundColor: `${palette.primary}20` }}
          >
            <span
              className="text-[11px] tracking-[0.2em] uppercase px-4 py-2"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                color: palette.primary,
                border: `1px solid ${palette.primary}40`,
                borderRadius: "4px",
              }}
            >
              Coming Soon
            </span>
          </div>
        ) : isInternal ? (
          <Link href={blog.url} className="absolute inset-0 w-full h-full">
            {thumbnailContent}
          </Link>
        ) : (
          <a href={blog.url} target="_blank" rel="noopener noreferrer" className="absolute inset-0 w-full h-full">
            {thumbnailContent}
          </a>
        )}
      </div>

      {/* Info */}
      <div className="p-6 md:p-8">
        <h3
          className="text-[17px] mb-3"
          style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: BRAND.primaryText }}
        >
          {blog.comingSoon ? (
            blog.title
          ) : isInternal ? (
            <Link href={blog.url} className="hover:opacity-70 transition-opacity">
              {blog.title}
            </Link>
          ) : (
            <a href={blog.url} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              {blog.title}
            </a>
          )}
        </h3>
        <p
          className="text-[13px] leading-[1.7]"
          style={{ fontFamily: "var(--font-body)", color: BRAND.secondaryText }}
        >
          {blog.excerpt}
        </p>
      </div>
    </motion.div>
  );
}

function SustainabilityVoices({
  palette,
  videos,
  blogs,
  propertySlug,
}: {
  palette: PropertyPalette;
  videos: SustainabilityVideo[];
  blogs: SustainabilityBlog[];
  propertySlug: string;
}) {
  const crSlugs = ["tented-camp", "gardens", "springs"];
  const sectionKey = crSlugs.includes(propertySlug) ? "costa-rica" : propertySlug;
  const sectionMeta = VOICES_SECTION_TITLES[sectionKey] || VOICES_SECTION_TITLES["costa-rica"];

  /* Filter out empty/coming-soon videos (Bocas placeholder has empty youtubeId) */
  const activeVideos = videos.filter(v => v.youtubeId);
  const comingSoonVideos = videos.filter(v => !v.youtubeId);

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
          {/* Active video cards */}
          {activeVideos.map((video) => (
            <VideoCard key={video.youtubeId} video={video} palette={palette} />
          ))}

          {/* Blog cards */}
          {blogs.map((blog) => (
            <BlogCard key={blog.title} blog={blog} palette={palette} />
          ))}

          {/* Coming Soon video cards (Bocas coral reef) */}
          {comingSoonVideos.map((video) => (
            <motion.div
              key={video.title}
              variants={fadeUp}
              className="overflow-hidden"
              style={{
                backgroundColor: BRAND.bone,
                borderRadius: "12px",
                border: `1px solid ${BRAND.divider}`,
                opacity: 0.6,
              }}
            >
              <div
                className="relative w-full flex items-center justify-center"
                style={{ paddingBottom: "52%", backgroundColor: `${palette.primary}15` }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="text-[11px] tracking-[0.2em] uppercase px-4 py-2"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      color: palette.primary,
                      border: `1px solid ${palette.primary}40`,
                      borderRadius: "4px",
                    }}
                  >
                    Coming Soon
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3
                  className="text-[17px] mb-1"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: BRAND.primaryText }}
                >
                  {video.title}
                </h3>
                <p
                  className="text-[13px] leading-[1.7] mt-3"
                  style={{ fontFamily: "var(--font-body)", color: BRAND.secondaryText }}
                >
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerOnScroll>
      </div>
    </section>
  );
}
