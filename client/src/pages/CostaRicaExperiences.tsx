/*
 * UNIVERSAL EXPERIENCES — Shared deep page for ALL properties
 * CR properties get a sustainability-style deep page with editorial sections
 * + the existing Explore Arenal card grid.
 * Non-CR properties keep the flat filtered card grid.
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
  DrawLine,
  Parallax,
  fadeUp,
  fadeIn,
  slideFromLeft,
  slideFromRight,
  staggerContainer,
  staggerContainerSlow,
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

/** Properties that use the deep-page split */
const CR_SLUGS = new Set(["tented-camp", "gardens", "springs"]);

interface Props {
  propertySlug: string;
}

export default function CostaRicaExperiences({ propertySlug }: Props) {
  // Use tented-camp palette (olive green + bone) for all Costa Rica properties
  const paletteSlug = CR_SLUGS.has(propertySlug) ? "tented-camp" : propertySlug;
  const palette = getPalette(paletteSlug);
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
      <ExperiencesHero propertySlug={propertySlug} />
      <ScrollingPillarHeader word="BESPOKE EXPERIENCES" color={palette.primary} bgColor={palette.gradientStart} />
      {isCR ? (
        <CRExperiencesDeep property={property} palette={palette} />
      ) : (
        <ExperiencesContent property={property} palette={palette} />
      )}
      <Footer pageType="property" bgColor={palette.footerBg} />textColor="#FFFFFF" />textColor="#FFFFFF" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO — Shared across all properties
   ═══════════════════════════════════════════════════════════════ */

function ExperiencesHero({ propertySlug }: { propertySlug: string }) {
  const HERO_IMAGES: Record<string, { src: string; alt: string }> = {
    "tented-camp": { src: "/manus-storage/tc-experiences-bridge-v2_40206a9a.jpg", alt: "Hanging bridge through the rainforest canopy" },
    "alto-atacama": { src: "/manus-storage/atacama-exp-stargazing_c8a71e15.jpg", alt: "Stargazing under the Milky Way in the Atacama Desert" },
    "bocas-del-toro": { src: "/manus-storage/bocas-experiences-hero_83418211.jpg", alt: "Swimming in crystal clear Caribbean waters" },
  };
  const hero = HERO_IMAGES[propertySlug] || HERO_IMAGES["tented-camp"];
  return (
    <section className="relative aspect-[16/9] w-full overflow-hidden">
      <img src={hero.src} alt={hero.alt} className="w-full h-full object-cover" />
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CR DEEP PAGE — Sustainability-style editorial sections
   + Explore Arenal card grid at the bottom
   ═══════════════════════════════════════════════════════════════ */

function CRExperiencesDeep({ property, palette }: { property: Property; palette: PropertyPalette }) {
  const arenalExperiences = property.excursions.filter((e: Excursion) => e.section === "explore-arenal");
  const arenalCategories = deriveCategories(arenalExperiences);

  return (
    <>
      {/* ── Philosophy: One Interconnected Destination ── */}
      <PhilosophySection palette={palette} />

      {/* ── Wellness: Yoga in the Rainforest ── */}
      <YogaSection palette={palette} />

      {/* ── Nature: Three Ways to Explore ── */}
      <NatureSection palette={palette} />

      {/* ── Las Thermas: Where Earth Meets Wellness ── */}
      <ThermasSection palette={palette} />

      {/* ── Shared Access: The Beauty of It ── */}
      <SharedAccessSection palette={palette} />

      {/* ── Divider ── */}
      <div className="px-6 md:px-10" style={{ backgroundColor: palette.gradientStart }}>
        <div className={maxW}>
          <div style={{ borderTop: `1px solid ${BRAND.divider}` }} />
        </div>
      </div>

      {/* ── Explore Arenal: Card Grid ── */}
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
              style={{ ...display, color: "#E6DFD5" }}
            >
              Beyond the Resort
            </h2>
            <p
              className="text-[15px] leading-[1.8] max-w-[700px] mb-10"
              style={{ ...body, color: "#E6DFD5" }}
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
   PHILOSOPHY — One Interconnected Destination
   ═══════════════════════════════════════════════════════════════ */

function PhilosophySection({ palette }: { palette: PropertyPalette }) {
  return (
    <section className={sectionPadding} style={{ backgroundColor: palette.gradientStart }}>
      <div className={maxW}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <AnimateOnScroll variants={slideFromLeft}>
            <p
              className="text-[11px] tracking-[0.2em] mb-4"
              style={{ ...body, fontWeight: 500, color: palette.primary }}
            >
              The Philosophy
            </p>
            <h2
              className="text-2xl md:text-3xl lg:text-4xl tracking-wide mb-6"
              style={{ ...display, color: "#E6DFD5" }}
            >
              One Interconnected Destination
            </h2>
            <DrawLine color={palette.primary} className="mb-8" />
          </AnimateOnScroll>

          <AnimateOnScroll variants={slideFromRight}>
            <p
              className="text-[15px] leading-[1.9] mb-6"
              style={{ ...body, color: "#E6DFD5" }}
            >
              Imagine a vacation where you get the intimacy and privacy of your own secluded hotel, but with access to the amenities and experiences of three world-class properties. That is exactly what awaits at Nayara Gardens, Nayara Springs, and Nayara Tented Camp in Costa Rica's Arenal region.
            </p>
            <p
              className="text-[15px] leading-[1.9]"
              style={{ ...body, color: "#E6DFD5" }}
            >
              While each property maintains its own distinct character and peaceful sanctuary, guests enjoy seamless access to a shared ecosystem of wellness and adventure that transforms a stay into an unforgettable journey through one magical rainforest. Whether you are seeking wellness rejuvenation or nature immersion, everything you need exists within reach.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Stats row */}
        <StaggerOnScroll variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { value: "3", label: "Properties, One Ecosystem" },
            { value: "1,400", label: "Acres of Rainforest Reserve" },
            { value: "900+", label: "Bird Species in Costa Rica" },
            { value: "2", label: "Yoga Disciplines Daily" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="text-center p-6"
              style={{
                backgroundColor: "rgba(255,255,255,0.4)",
                backdropFilter: "blur(8px)",
                borderRadius: "12px",
                borderBottom: `2px solid ${palette.primary}`,
              }}
            >
              <p
                className="text-3xl md:text-4xl mb-2"
                style={{ ...display, color: palette.primary }}
              >
                {stat.value}
              </p>
              <p
                className="text-[11px] tracking-[0.1em]"
                style={{ ...body, fontWeight: 500, color: "#E6DFD5" }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </StaggerOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   YOGA — Wellness Through Movement
   ═══════════════════════════════════════════════════════════════ */

function YogaSection({ palette }: { palette: PropertyPalette }) {
  const yogaImage = `${CDN_BASE}/yoga-photo_3b789b60.jpg`;

  return (
    <section className={sectionPadding} style={{ backgroundColor: palette.gradientEnd }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.2em] mb-4"
            style={{ ...body, fontWeight: 500, color: palette.primary }}
          >
            Wellness
          </p>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl tracking-wide mb-6"
            style={{ ...display, color: "#E6DFD5" }}
          >
            Wellness Through Movement
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-8">
          {/* Image */}
          <AnimateOnScroll variants={slideFromLeft}>
            <div className="relative overflow-hidden rounded-xl" style={{ aspectRatio: "4/3" }}>
              <img
                src={yogaImage}
                alt="Yoga in the Arenal rainforest"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </AnimateOnScroll>

          {/* Content */}
          <AnimateOnScroll variants={slideFromRight}>
            <div className="space-y-8">
              {/* Vinyasa */}
              <div>
                <h3
                  className="text-[18px] mb-3"
                  style={{ ...display, fontWeight: 500, color: "#E6DFD5" }}
                >
                  Vinyasa Yoga
                </h3>
                <p
                  className="text-[14px] leading-[1.8]"
                  style={{ ...body, color: "#E6DFD5" }}
                >
                  Keeps your body flowing and energized, linking breath to movement in classes that feel alive and present. The practice takes on a different dimension when your mat is surrounded by the sounds of howler monkeys and tropical birds — the forest becomes part of the flow.
                </p>
              </div>

              {/* Mindfulness */}
              <div>
                <h3
                  className="text-[18px] mb-3"
                  style={{ ...display, fontWeight: 500, color: "#E6DFD5" }}
                >
                  Mindfulness Yoga
                </h3>
                <p
                  className="text-[14px] leading-[1.8]"
                  style={{ ...body, color: "#E6DFD5" }}
                >
                  Invites you to slow down, reconnect, and find stillness amid the symphony of the rainforest. It is less about physical exertion and more about presence — a practice designed for people who have forgotten what it feels like to simply be.
                </p>
              </div>

              {/* Note */}
              <div
                className="p-5 rounded-lg"
                style={{ backgroundColor: `${palette.primary}10`, borderLeft: `3px solid ${palette.primary}` }}
              >
                <p
                  className="text-[13px] leading-[1.7]"
                  style={{ ...body, color: "#E6DFD5" }}
                >
                  Both are offered across the properties, so you can practice wherever you feel called — at the edge of a volcanic valley, beside a hot spring, or on a platform overlooking the forest canopy.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   NATURE — Three Ways to Explore
   ═══════════════════════════════════════════════════════════════ */

function NatureSection({ palette }: { palette: PropertyPalette }) {
  const birdImage = `${CDN_BASE}/bird-watching-hero_ddf4b8c3.jpg`;

  const experiences = [
    {
      title: "Botanical Nature Hike",
      description:
        "Unveils the plant life that sustains the ecosystem — from towering ceiba trees to medicinal species used by indigenous peoples for centuries. Your guide does not simply point at trees; they tell the story of a forest that has been healing itself and others for millennia.",
      highlights: ["Guided by expert naturalists", "Medicinal plant identification", "1,400-acre private reserve"],
    },
    {
      title: "Bird Watching",
      description:
        "Connects you to the incredible avian diversity that makes Costa Rica a paradise for ornithologists and casual observers alike. With over 900 species in the country and dozens visible from the Nayara reserve alone, every morning walk becomes a masterclass in color, song, and flight.",
      highlights: ["900+ species in Costa Rica", "Expert ornithologist guides", "Dawn and dusk expeditions"],
    },
    {
      title: "Finding Tony the Sloth",
      description:
        "A chance to encounter one of the rainforest's most beloved residents in his natural habitat. Led by naturalist guides who know Tony's favorite trees and sleeping spots, this gentle expedition is a moment that reminds you why conservation matters. Tony is not a prop or a performance — he is a wild two-toed sloth who has made the Nayara reserve his home.",
      highlights: ["Wild sloth in natural habitat", "Naturalist-guided expedition", "Conservation education"],
    },
  ];

  return (
    <section className={sectionPadding} style={{ backgroundColor: palette.gradientStart }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.2em] mb-4"
            style={{ ...body, fontWeight: 500, color: palette.primary }}
          >
            Nature Immersion
          </p>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl tracking-wide mb-4"
            style={{ ...display, color: "#E6DFD5" }}
          >
            Three Ways to Explore
          </h2>
          <p
            className="text-[15px] leading-[1.8] max-w-[700px] mb-12"
            style={{ ...body, color: "#E6DFD5" }}
          >
            The rainforest is the greatest teacher. Three guided experiences bring its lessons to life — each one a different lens on the same extraordinary ecosystem.
          </p>
        </AnimateOnScroll>

        {/* Bird watching image */}
        <AnimateOnScroll variants={fadeUp}>
          <div className="relative overflow-hidden rounded-xl mb-16" style={{ aspectRatio: "21/9" }}>
            <img
              src={birdImage}
              alt="Birdwatching in the Arenal rainforest"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-6">
              <p
                className="text-white/60 text-[11px] tracking-[0.1em]"
                style={{ ...body }}
              >
                Costa Rica is home to over 900 bird species — many visible from the Nayara reserve
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Three experience cards */}
        <StaggerOnScroll variants={staggerContainerSlow} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="p-8"
              style={{
                backgroundColor: "rgba(255,255,255,0.4)",
                backdropFilter: "blur(8px)",
                borderRadius: "12px",
                borderBottom: `2px solid ${palette.primary}`,
              }}
            >
              <h3
                className="text-[18px] mb-4"
                style={{ ...display, fontWeight: 500, color: "#E6DFD5" }}
              >
                {exp.title}
              </h3>
              <p
                className="text-[13px] leading-[1.8] mb-6"
                style={{ ...body, color: "#E6DFD5" }}
              >
                {exp.description}
              </p>
              <div className="space-y-2">
                {exp.highlights.map((h, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: palette.primary }}
                    />
                    <span
                      className="text-[12px] leading-[1.6]"
                      style={{ ...body, color: "#E6DFD5" }}
                    >
                      {h}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </StaggerOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   LAS THERMAS — Where Earth Meets Wellness
   ═══════════════════════════════════════════════════════════════ */

function ThermasSection({ palette }: { palette: PropertyPalette }) {
  const thermasImage = `${CDN_BASE}/hot-springs-hero_a60a0e92.jpg`;
  const thermasVideoH = `${CDN_BASE}/hot-springs-horizontal_2508b725.mp4`;

  return (
    <section className={sectionPadding} style={{ backgroundColor: palette.gradientEnd }}>
      <div className={maxW}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Video / Image */}
          <AnimateOnScroll variants={slideFromLeft}>
            <div className="relative overflow-hidden rounded-xl" style={{ aspectRatio: "4/3" }}>
              <NativeVideo src={thermasVideoH} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </AnimateOnScroll>

          {/* Content */}
          <AnimateOnScroll variants={slideFromRight}>
            <p
              className="text-[11px] tracking-[0.2em] mb-4"
              style={{ ...body, fontWeight: 500, color: palette.primary }}
            >
              Las Thermas
            </p>
            <h2
              className="text-2xl md:text-3xl lg:text-4xl tracking-wide mb-6"
              style={{ ...display, color: "#E6DFD5" }}
            >
              Where Earth Meets Wellness
            </h2>
            <DrawLine color={palette.primary} className="mb-6" />
            <p
              className="text-[15px] leading-[1.9] mb-6"
              style={{ ...body, color: "#E6DFD5" }}
            >
              Las Thermas at Nayara Tented Camp offers something rare: natural hot springs heated by geothermal energy deep beneath the rainforest floor. More than a spa amenity, it is a place to soak in warmth, contemplate the night sky above, and feel the ancient power of the earth beneath you.
            </p>
            <p
              className="text-[15px] leading-[1.9] mb-6"
              style={{ ...body, color: "#E6DFD5" }}
            >
              The springs are fed by the same volcanic system that powers Arenal — water that has traveled through layers of rock, absorbing minerals along the way. The result is a bathing experience that is not manufactured or chlorinated, but genuinely geological.
            </p>

            {/* Blog link pill */}
            <a
              href="https://blog.nayararesorts.com/the-history-and-science-of-private-villas-hot-springs-plunge-pools"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
              style={{
                ...body,
                fontWeight: 500,
                fontSize: "12px",
                letterSpacing: "0.08em",
                color: "#fff",
                backgroundColor: "#3a2a1a",
              }}
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
              Read: The History & Science of Hot-Springs Plunge Pools
            </a>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SHARED ACCESS — The Beauty of It
   ═══════════════════════════════════════════════════════════════ */

function SharedAccessSection({ palette }: { palette: PropertyPalette }) {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: palette.gradientStart }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <div className="max-w-[800px] mx-auto text-center">
            <p
              className="text-[11px] tracking-[0.2em] mb-4"
              style={{ ...body, fontWeight: 500, color: palette.primary }}
            >
              The Nayara Difference
            </p>
            <h2
              className="text-2xl md:text-3xl tracking-wide mb-6"
              style={{ ...display, color: "#E6DFD5" }}
            >
              Three Properties, One Seamless Experience
            </h2>
            <p
              className="text-[15px] leading-[1.9] mb-8"
              style={{ ...body, color: "#E6DFD5" }}
            >
              A morning might begin with Vinyasa yoga at Nayara Springs, followed by a botanical hike through the Tented Camp reserve, an afternoon soak at Las Thermas, and a sunset Mindfulness session overlooking the volcano. No transfers, no logistics, no friction — just a day that flows as naturally as the forest around you.
            </p>
            <p
              className="text-[15px] leading-[1.9]"
              style={{ ...body, color: "#E6DFD5" }}
            >
              Every hike, every yoga class, every soak reinforces a single philosophy: that a great vacation feeds not just the body, but the mind and soul. Whether you are celebrating a special occasion, seeking rejuvenation, or simply craving an escape into nature without sacrificing comfort, the three Nayara properties offer something increasingly rare — the chance to experience Costa Rica as it should be experienced.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Blog link to the full article */}
        <AnimateOnScroll variants={fadeUp} delay={0.2}>
          <div className="flex justify-center mt-10">
            <a
              href="/journal/in-house-activities-three-hotels-infinite-experiences"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
              style={{
                ...body,
                fontWeight: 500,
                fontSize: "12px",
                letterSpacing: "0.08em",
                color: "#fff",
                backgroundColor: "#3a2a1a",
              }}
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
              Read: Three Hotels, One Rainforest, Infinite Experiences
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
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
                    color: activeCategory === cat.id ? "#F7F5F0" : "#E6DFD5",
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
   FILTERED CARD GRID — Reusable for Explore Arenal section
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
                color: activeCategory === null ? "#F7F5F0" : "#E6DFD5",
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
                  color: activeCategory === cat.id ? "#F7F5F0" : "#E6DFD5",
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
          style={{ ...display, fontWeight: 500, color: "#E6DFD5" }}
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
          style={{ ...body, color: "#E6DFD5" }}
        >
          {excursion.description}
        </p>

        {excursion.blogUrl && excursion.blogTitle && (
          <a
            href={excursion.blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 mt-4 px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
            style={{ ...body, fontWeight: 500, fontSize: "12px", letterSpacing: "0.08em", color: "#fff", backgroundColor: "#3a2a1a" }}
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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
