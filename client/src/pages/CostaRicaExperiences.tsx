/*
 * UNIVERSAL EXPERIENCES — Shared deep page for ALL properties
 * Renders in the color palette of whichever property the user came from.
 *
 * For Costa Rica properties (tented-camp, gardens, springs):
 *   Two sections — "Explore Nayara" (on-property) and "Explore Arenal" (off-property)
 *   Each section has its own category filters and card grid.
 *
 * For all other properties:
 *   Single flat grid with category filters (unchanged behavior).
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NativeVideo from "@/components/NativeVideo";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import { properties, type Property, type Excursion } from "@/data/properties";
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

const display: React.CSSProperties = { fontFamily: "var(--font-display)", fontWeight: 400 };
const body: React.CSSProperties = { fontFamily: "var(--font-body)", fontWeight: 400 };

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
  "bocas-del-toro": "Bocas del Toro, Panamá",
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

/** Properties that use the two-section split */
const CR_SLUGS = new Set(["tented-camp", "gardens", "springs"]);

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
  const isCR = CR_SLUGS.has(propertySlug);

  return (
    <div className="min-h-screen" style={{ backgroundColor: palette.gradientStart }}>
      <BrandNavigation pageType="property" hideCenterLabel />
      <ExperiencesHero palette={palette} propertyName={propertyName} location={location} heroVideo={heroVideo} headline={headline} />
      <ScrollingPillarHeader word="EXPERIENCES" color={palette.primary} bgColor={palette.gradientStart} />
      {isCR ? (
        <CRExperiencesSplit property={property} palette={palette} />
      ) : (
        <ExperiencesContent property={property} palette={palette} />
      )}
      <Footer pageType="property" bgColor={palette.footerBg} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO — Shared across all properties
   ═══════════════════════════════════════════════════════════════ */

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
    <Parallax offset={60} className="w-full" style={{ aspectRatio: "2/1" }}>
      <div className="relative w-full aspect-[2/1]">
        <NativeVideo src={heroVideo} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none" />
        <div className="absolute bottom-8 md:bottom-12 left-6 md:left-10 z-10">
          <TextReveal as="h1" delay={0.2}>
            <span
              className="text-white text-2xl md:text-4xl lg:text-5xl tracking-wide"
              style={{ ...display }}
            >
              {headline}
            </span>
          </TextReveal>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white/50 text-[11px] tracking-[0.2em] mt-3"
            style={{ ...body }}
          >
            {propertyName}
          </motion.p>
          {location && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-white/40 text-[10px] tracking-[0.15em] mt-1"
              style={{ ...body }}
            >
              {location}
            </motion.p>
          )}
        </div>
      </div>
    </Parallax>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CR TWO-SECTION SPLIT — Explore Nayara + Explore Arenal
   ═══════════════════════════════════════════════════════════════ */

function CRExperiencesSplit({ property, palette }: { property: Property; palette: PropertyPalette }) {
  const nayaraExperiences = property.excursions.filter((e: Excursion) => e.section === "explore-nayara");
  const arenalExperiences = property.excursions.filter((e: Excursion) => e.section === "explore-arenal");

  /* Derive unique categories per section */
  const nayaraCategories = deriveCategories(nayaraExperiences);
  const arenalCategories = deriveCategories(arenalExperiences);

  return (
    <>
      {/* ── Section 1: Explore Nayara ── */}
      <section className={sectionPadding} style={{ backgroundColor: palette.gradientStart }}>
        <div className={maxW}>
          <AnimateOnScroll variants={fadeUp}>
            <p
              className="text-[11px] tracking-[0.2em] mb-4"
              style={{ ...body, fontWeight: 500, color: palette.primary }}
            >
              Explore Nayara
            </p>
            <h2
              className="text-2xl md:text-3xl lg:text-4xl tracking-wide mb-4"
              style={{ ...display, color: BRAND.primaryText }}
            >
              On-Property Experiences
            </h2>
            <p
              className="text-[15px] leading-[1.8] max-w-[700px] mb-10"
              style={{ ...body, color: BRAND.secondaryText }}
            >
              Culinary arts, wellness rituals, and volcanic hot springs — without ever leaving the grounds.
              Every experience is designed to immerse you in the natural energy of the Arenal rainforest.
            </p>
          </AnimateOnScroll>

          <FilteredCardGrid
            excursions={nayaraExperiences}
            categories={nayaraCategories}
            palette={palette}
          />
        </div>
      </section>

      {/* ── Subtle divider ── */}
      <div className="px-6 md:px-10" style={{ backgroundColor: palette.gradientStart }}>
        <div className={maxW}>
          <div style={{ borderTop: `1px solid ${BRAND.divider}` }} />
        </div>
      </div>

      {/* ── Section 2: Explore Arenal ── */}
      <section className={sectionPadding} style={{ backgroundColor: palette.gradientStart }}>
        <div className={maxW}>
          <AnimateOnScroll variants={fadeUp}>
            <p
              className="text-[11px] tracking-[0.2em] mb-4"
              style={{ ...body, fontWeight: 500, color: palette.primary }}
            >
              Explore Arenal
            </p>
            <h2
              className="text-2xl md:text-3xl lg:text-4xl tracking-wide mb-4"
              style={{ ...display, color: BRAND.primaryText }}
            >
              Beyond the Resort
            </h2>
            <p
              className="text-[15px] leading-[1.8] max-w-[700px] mb-10"
              style={{ ...body, color: BRAND.secondaryText }}
            >
              Hanging bridges, turquoise rivers, volcanic lava fields, and white-water rapids — the Arenal
              region is one of the most biodiverse corners of Costa Rica. Every excursion is guided by
              local experts who know this landscape intimately.
            </p>
          </AnimateOnScroll>

          <FilteredCardGrid
            excursions={arenalExperiences}
            categories={arenalCategories}
            palette={palette}
          />
        </div>
      </section>

      {/* ── Cross-link ── */}
      <section className="pb-16 md:pb-24 px-6 md:px-10" style={{ backgroundColor: palette.gradientStart }}>
        <div className={maxW}>
          <AnimateOnScroll variants={fadeUp} delay={0.3}>
            <PillarCrossLink pillar="experiences" />
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FLAT CONTENT — For non-CR properties (unchanged behavior)
   ═══════════════════════════════════════════════════════════════ */

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
                    color: activeCategory === cat.id ? "#F7F5F0" : BRAND.secondaryText,
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

/* ═══════════════════════════════════════════════════════════════
   FILTERED CARD GRID — Reusable for each section
   ═══════════════════════════════════════════════════════════════ */

function FilteredCardGrid({
  excursions,
  categories,
  palette,
}: {
  excursions: Excursion[];
  categories: { id: string; label: string }[];
  palette: PropertyPalette;
}) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? excursions.filter((e: Excursion) => e.category === activeCategory)
    : excursions;

  return (
    <>
      {categories.length > 1 && (
        <AnimateOnScroll variants={fadeUp}>
          <div className="flex flex-wrap gap-2 mb-10 md:mb-14">
            <button
              onClick={() => setActiveCategory(null)}
              className="px-5 py-2.5 rounded-full text-[11px] tracking-[0.1em] transition-all duration-500"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                backgroundColor: activeCategory === null ? palette.primary : "transparent",
                color: activeCategory === null ? "#F7F5F0" : BRAND.secondaryText,
                border: `1px solid ${activeCategory === null ? palette.primary : BRAND.divider}`,
              }}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="px-5 py-2.5 rounded-full text-[11px] tracking-[0.1em] transition-all duration-500"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                  backgroundColor: activeCategory === cat.id ? palette.primary : "transparent",
                  color: activeCategory === cat.id ? "#F7F5F0" : BRAND.secondaryText,
                  border: `1px solid ${activeCategory === cat.id ? palette.primary : BRAND.divider}`,
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </AnimateOnScroll>
      )}

      <AnimatePresence mode="popLayout">
        <StaggerOnScroll variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((excursion: Excursion) => (
            <ExcursionCard key={excursion.id} excursion={excursion} palette={palette} />
          ))}
        </StaggerOnScroll>
      </AnimatePresence>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   EXCURSION CARD
   ═══════════════════════════════════════════════════════════════ */

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
            <NativeVideo src={excursion.verticalVideo} className="w-full h-full object-cover" />
          ) : excursion.image ? (
            <img
              src={excursion.image}
              alt={excursion.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
        </div>
      )}

      <div className="p-6 md:p-8">
        <h3
          className="text-[17px] mb-2"
          style={{ ...display, fontWeight: 500, color: BRAND.primaryText }}
        >
          {excursion.name}
        </h3>
        {excursion.duration && (
          <p
            className="text-[11px] tracking-[0.1em] mb-4"
            style={{ ...body, fontWeight: 500, color: palette.accent }}
          >
            {excursion.duration}
            {excursion.price ? ` · ${excursion.price}` : ""}
          </p>
        )}
        <p
          className="text-[13px] leading-[1.7]"
          style={{ ...body, color: BRAND.secondaryText }}
        >
          {excursion.description}
        </p>

        {excursion.blogUrl && excursion.blogTitle && (
          <a
            href={excursion.blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-[11px] tracking-[0.1em] transition-opacity hover:opacity-70"
            style={{ ...body, fontWeight: 500, color: palette.primary }}
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Read: {excursion.blogTitle}
          </a>
        )}
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════ */

/** Category label mapping */
const CATEGORY_LABELS: Record<string, string> = {
  nature: "Nature & Wildlife",
  adventure: "Adventure",
  culture: "Culture",
  culinary: "Culinary",
  wellness: "Wellness",
  water: "Water & Sailing",
  landscape: "Landscapes",
};

/** Derive unique categories from a list of excursions */
function deriveCategories(excursions: Excursion[]): { id: string; label: string }[] {
  const seen = new Set<string>();
  const result: { id: string; label: string }[] = [];
  for (const e of excursions) {
    if (!seen.has(e.category)) {
      seen.add(e.category);
      result.push({ id: e.category, label: CATEGORY_LABELS[e.category] || e.category });
    }
  }
  return result;
}
