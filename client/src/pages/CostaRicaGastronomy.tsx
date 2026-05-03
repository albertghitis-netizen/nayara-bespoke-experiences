/*
 * UNIVERSAL GASTRONOMY — Sustainability-style deep page for ALL properties
 * Renders in the color palette of whichever property the user came from.
 * Sections: Philosophy, Restaurants (by property), Sweet Moments, Bar Scene,
 *           Five Classes, The Nayara Difference, Blog cross-link
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  "bocas-del-toro": "Bocas del Toro, Panamá",
  hangaroa: "Rapa Nui, Easter Island, Chile",
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

/* ── Costa Rica–specific deep content ── */

const CR_SLUGS = ["tented-camp", "gardens", "springs"];

interface RestaurantDeep {
  name: string;
  cuisine: string;
  description: string;
  property: string;
}

const GARDENS_RESTAURANTS: RestaurantDeep[] = [
  {
    name: "Nostalgia Wine Bar",
    cuisine: "Wine & Small Plates",
    description: "Sophisticated wine tastings paired with thoughtful small plates. The sommelier-led experience is not simply about drinking wine — it is an education in pairing and appreciation, guided by experts who understand how wine complements both food and the rainforest setting.",
    property: "Nayara Gardens",
  },
  {
    name: "La Terrazza",
    cuisine: "Italian",
    description: "Italian warmth in the rainforest with inviting atmosphere and classic preparations. There is something deeply satisfying about handmade pasta served beneath a canopy of tropical trees, where the sounds of the forest replace the noise of a city street.",
    property: "Nayara Gardens",
  },
  {
    name: "Asialluna",
    cuisine: "Asian Fusion",
    description: "Asian fusion blended with Costa Rican ingredients for a surprising and delightful culinary conversation. Familiar techniques from across Asia reinterpreted through the lens of Central American produce, spices, and tradition.",
    property: "Nayara Gardens",
  },
];

const SPRINGS_RESTAURANTS: RestaurantDeep[] = [
  {
    name: "Amor Loco",
    cuisine: "Fine Dining",
    description: "Culinary artistry meets impeccable service. Every dish is a composition — plated with the precision of a gallery piece, yet grounded in flavors that feel honest and intentional. Amor Loco is where special occasions become unforgettable ones.",
    property: "Nayara Springs",
  },
  {
    name: "Nysa Morris",
    cuisine: "Italian Bistro",
    description: "Authentic Italian bistro fare that feels both elegant and approachable. The kind of restaurant where you come for a quick lunch and stay for two hours, because the atmosphere refuses to let you rush.",
    property: "Nayara Springs",
  },
];

const TENTED_RESTAURANTS: RestaurantDeep[] = [
  {
    name: "Ayla",
    cuisine: "Mediterranean",
    description: "Mediterranean cuisine infused with local touches, offering a different flavor profile while maintaining the same commitment to quality that defines every Nayara kitchen. The open-air setting places you at the edge of the rainforest, where the boundary between restaurant and wilderness dissolves entirely.",
    property: "Nayara Tented Camp",
  },
];

interface BarDeep {
  name: string;
  property: string;
  description: string;
}

const BARS: BarDeep[] = [
  {
    name: "Lapa's Pool Bar",
    property: "Nayara Springs",
    description: "Tropical and refreshing poolside cocktails, where the afternoon light filters through the canopy and every sip tastes like vacation.",
  },
  {
    name: "Henry's Lounge Bar",
    property: "Nayara Tented Camp",
    description: "An intimate setting for evening conversation — the kind of place where a well-made cocktail and the sound of the forest are all you need.",
  },
  {
    name: "Las Thermas Bar",
    property: "Nayara Tented Camp",
    description: "More than just a hot springs area — it is a social hub where guests gather to soak, unwind, and connect over drinks heated by the earth itself.",
  },
  {
    name: "Tentacamp Pool Bar",
    property: "Nayara Tented Camp",
    description: "Casual refreshment with views that remind you why you came to Costa Rica in the first place.",
  },
];

interface ClassDeep {
  name: string;
  icon: string;
  description: string;
}

const CLASSES: ClassDeep[] = [
  {
    name: "Wine Tasting",
    icon: "🍷",
    description: "An education in pairing and appreciation at Nostalgia Wine Bar. Guided by sommeliers who understand how wine complements both food and the rainforest setting.",
  },
  {
    name: "Cooking Class",
    icon: "👨‍🍳",
    description: "Learn to recreate the dishes you have fallen in love with, using techniques and ingredients that define Costa Rican cuisine.",
  },
  {
    name: "Coffee Class",
    icon: "☕",
    description: "Trace the journey from bean to cup, celebrating the country's coffee heritage — from volcanic soil to your morning ritual.",
  },
  {
    name: "Mixology Class",
    icon: "🍹",
    description: "Transform into a bartender, crafting cocktails that capture tropical flavors and local spirits under the guidance of Nayara's expert mixologists.",
  },
  {
    name: "Rum Tasting",
    icon: "🥃",
    description: "Celebrate one of Central America's most storied beverages, exploring how terroir and tradition shape every bottle.",
  },
];

/* ── Stats ── */
const GASTRO_STATS = [
  { value: "6", label: "Restaurants" },
  { value: "5", label: "Bars & Lounges" },
  { value: "5", label: "Culinary Classes" },
  { value: "3", label: "Properties, One Ecosystem" },
];

interface Props {
  propertySlug: string;
}

export default function CostaRicaGastronomy({ propertySlug }: Props) {
  // Use tented-camp palette for tented-camp and gardens; springs uses its own palette
  const paletteSlug = (propertySlug === "springs") ? "springs" : (CR_SLUGS.includes(propertySlug) ? "tented-camp" : propertySlug);
  const palette = getPalette(paletteSlug);
  const propertyDisplay = properties.find((p: Property) => p.id === propertySlug);
  const propertyName = propertyDisplay?.name || "Nayara";
  const heroVideo = HERO_VIDEOS[propertySlug] || HERO_VIDEOS["tented-camp"];
  const headline = HEADLINES[propertySlug] || "Forest to Table";
  const dining = DINING_MAP[propertySlug] || costaRicaDining;
  const location = LOCATIONS[propertySlug] || "";
  const isCR = CR_SLUGS.includes(propertySlug);

  return (
    <div className="min-h-screen" style={{ backgroundColor: palette.gradientEnd }}>
      <BrandNavigation pageType="property" hideCenterLabel />
      <GastronomyHero propertySlug={propertySlug} />
      <ScrollingPillarHeader word="A TASTE OF PLACE" color={palette.primary} bgColor={palette.gradientEnd} />

      {isCR ? (
        <>
          <ByTheNumbers palette={palette} />
          <PhilosophySection palette={palette} />
          <PropertyDiningSection
            palette={palette}
            propertyName="Nayara Gardens"
            subtitle="Where It All Begins"
            restaurants={GARDENS_RESTAURANTS}
            index={0}
          />
          <PropertyDiningSection
            palette={palette}
            propertyName="Nayara Springs"
            subtitle="Elevated Dining"
            restaurants={SPRINGS_RESTAURANTS}
            index={1}
          />
          <PropertyDiningSection
            palette={palette}
            propertyName="Nayara Tented Camp"
            subtitle="Mediterranean Meets the Jungle"
            restaurants={TENTED_RESTAURANTS}
            index={2}
          />
          <SweetMomentsSection palette={palette} />
          <BarSceneSection palette={palette} />
          <ClassesSection palette={palette} />
          <NayaraDifferenceSection palette={palette} />
          <BlogCrossLink palette={palette} />
        </>
      ) : (
        <>
          <GastronomyIntro palette={palette} description={dining.description} />
          <GastronomyContent palette={palette} restaurants={dining.restaurants} />
        </>
      )}

      <Footer pageType="property" bgColor={palette.footerBg}  textColor="#FFFFFF" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════════════════ */
function GastronomyHero({ propertySlug }: { propertySlug: string }) {
  const HERO_IMAGES: Record<string, { src: string; alt: string }> = {
    "tented-camp": { src: "/manus-storage/tc-gastronomy-hero_d9a6b8ac.jpg", alt: "Honeycomb dessert" },
    gardens: { src: "/manus-storage/tc-gastronomy-hero_d9a6b8ac.jpg", alt: "Honeycomb dessert" },
    springs: { src: "/manus-storage/tc-gastronomy-hero_d9a6b8ac.jpg", alt: "Honeycomb dessert" },
    "alto-atacama": { src: "/manus-storage/atacama-gastronomy-hero_c7d93f23.jpg", alt: "Avocado dessert bowls" },
    "bocas-del-toro": { src: "/manus-storage/tc-gastronomy-hero_d9a6b8ac.jpg", alt: "Honeycomb dessert" },
    hangaroa: { src: "/manus-storage/tc-gastronomy-hero_d9a6b8ac.jpg", alt: "Honeycomb dessert" },
  };
  const hero = HERO_IMAGES[propertySlug] || HERO_IMAGES["tented-camp"];
  return (
    <section className="relative aspect-[16/9] w-full overflow-hidden">
      <img src={hero.src} alt={hero.alt} className="w-full h-full object-cover" />
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BY THE NUMBERS
   ═══════════════════════════════════════════════════════════════ */
function ByTheNumbers({ palette }: { palette: PropertyPalette }) {
  return (
    <section className={sectionPadding} style={{ backgroundColor: palette.gradientEnd }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.3em] uppercase mb-10"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: palette.accent }}
          >
            By the Numbers
          </p>
        </AnimateOnScroll>

        <StaggerOnScroll variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {GASTRO_STATS.map((stat, i) => (
            <motion.div key={i} variants={fadeUp} className="text-center">
              <p
                className="text-3xl md:text-4xl mb-2"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: palette.primary }}
              >
                {stat.value}
              </p>
              <p
                className="text-[12px] tracking-[0.05em]"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400, color: "#E6DFD5" }}
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
   PHILOSOPHY
   ═══════════════════════════════════════════════════════════════ */
function PhilosophySection({ palette }: { palette: PropertyPalette }) {
  return (
    <section className={sectionPadding} style={{ backgroundColor: palette.gradientEnd }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <DrawLine color={palette.primary} className="mb-8" />
          <h2
            className="text-2xl md:text-3xl mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#E6DFD5" }}
          >
            The Philosophy of Shared Luxury
          </h2>
          <div className="max-w-[780px] space-y-5">
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: "#E6DFD5" }}
            >
              Imagine a vacation where you get the intimacy and privacy of your own secluded hotel, but with access to the culinary world of three world-class properties. That is exactly what awaits at Nayara Gardens, Nayara Springs, and Nayara Tented Camp in Costa Rica's Arenal region.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: "#E6DFD5" }}
            >
              While each property maintains its own distinct character and peaceful sanctuary, guests enjoy seamless access to a shared ecosystem of dining that transforms a stay into an unforgettable gastronomic journey through one magical rainforest. You are not choosing between three separate hotels — you are choosing one interconnected destination where culinary excellence exists at every turn.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PROPERTY DINING SECTION (reusable for Gardens / Springs / TC)
   ═══════════════════════════════════════════════════════════════ */
function PropertyDiningSection({
  palette,
  propertyName,
  subtitle,
  restaurants,
  index,
}: {
  palette: PropertyPalette;
  propertyName: string;
  subtitle: string;
  restaurants: RestaurantDeep[];
  index: number;
}) {
  const isAlt = index % 2 === 1;
  const bgColor = isAlt ? `${palette.primary}08` : palette.gradientEnd;

  return (
    <section className={sectionPadding} style={{ backgroundColor: bgColor }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: palette.accent }}
          >
            {propertyName}
          </p>
          <h2
            className="text-2xl md:text-3xl mb-10"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#E6DFD5" }}
          >
            {subtitle}
          </h2>
        </AnimateOnScroll>

        <StaggerOnScroll variants={staggerContainer} className="space-y-12">
          {restaurants.map((r, i) => (
            <motion.div key={i} variants={fadeUp}>
              <DrawLine color={palette.primary} className="mb-6" />
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-1">
                  <h3
                    className="text-[20px] md:text-[22px] mb-1"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: "#E6DFD5" }}
                  >
                    {r.name}
                  </h3>
                  <p
                    className="text-[11px] tracking-[0.12em] uppercase mb-4"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: palette.accent }}
                  >
                    {r.cuisine}
                  </p>
                  <p
                    className="text-[14px] md:text-[15px] leading-[1.85]"
                    style={{ fontFamily: "var(--font-body)", color: "#E6DFD5" }}
                  >
                    {r.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SWEET MOMENTS — Lila's Gelato & Coffee
   ═══════════════════════════════════════════════════════════════ */
function SweetMomentsSection({ palette }: { palette: PropertyPalette }) {
  return (
    <section className={sectionPadding} style={{ backgroundColor: palette.gradientEnd }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <DrawLine color={palette.primary} className="mb-8" />
          <h2
            className="text-2xl md:text-3xl mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#E6DFD5" }}
          >
            Beyond the Plate: The Simple Moments
          </h2>
          <div className="max-w-[780px]">
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: "#E6DFD5" }}
            >
              Sometimes the best moments are the simple ones. <strong>Lila's Gelato</strong> at Nayara Gardens offers handcrafted flavors that capture the essence of Costa Rica and beyond — tropical fruits, local chocolate, and seasonal inspirations churned fresh daily. Throughout the properties, coffee experiences connect you to local culture — whether it is a morning ritual or an afternoon pick-me-up, the beans are always Costa Rican, always fresh, always worth savoring.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BAR SCENE
   ═══════════════════════════════════════════════════════════════ */
function BarSceneSection({ palette }: { palette: PropertyPalette }) {
  return (
    <section className={sectionPadding} style={{ backgroundColor: `${palette.primary}08` }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: palette.accent }}
          >
            When the Sun Sets
          </p>
          <h2
            className="text-2xl md:text-3xl mb-10"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#E6DFD5" }}
          >
            The Bar Scene
          </h2>
        </AnimateOnScroll>

        <StaggerOnScroll variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BARS.map((bar, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="p-6 rounded-lg border"
              style={{ borderColor: `${palette.primary}20`, backgroundColor: palette.gradientEnd }}
            >
              <h3
                className="text-[18px] mb-1"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: "#E6DFD5" }}
              >
                {bar.name}
              </h3>
              <p
                className="text-[10px] tracking-[0.15em] uppercase mb-3"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: palette.accent }}
              >
                {bar.property}
              </p>
              <p
                className="text-[14px] leading-[1.8]"
                style={{ fontFamily: "var(--font-body)", color: "#E6DFD5" }}
              >
                {bar.description}
              </p>
            </motion.div>
          ))}
        </StaggerOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FIVE CLASSES
   ═══════════════════════════════════════════════════════════════ */
function ClassesSection({ palette }: { palette: PropertyPalette }) {
  const [activeClass, setActiveClass] = useState(0);

  return (
    <section className={sectionPadding} style={{ backgroundColor: palette.gradientEnd }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <DrawLine color={palette.primary} className="mb-8" />
          <h2
            className="text-2xl md:text-3xl mb-3"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#E6DFD5" }}
          >
            Five Classes That Go Deeper
          </h2>
          <p
            className="text-[15px] leading-[1.9] max-w-[720px] mb-10"
            style={{ fontFamily: "var(--font-body)", color: "#E6DFD5" }}
          >
            Why simply eat when you can learn, create, and experience? Five signature classes allow you to dive deeper into Costa Rican culinary culture. These are not tourist add-ons — they are invitations to understand a culture through its flavors.
          </p>
        </AnimateOnScroll>

        {/* Tab bar */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CLASSES.map((cls, i) => (
            <button
              key={i}
              onClick={() => setActiveClass(i)}
              className="px-4 py-2.5 rounded-full text-[12px] tracking-[0.06em] transition-all duration-300"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                backgroundColor: activeClass === i ? palette.primary : `${palette.primary}12`,
                color: activeClass === i ? "#fff" : "#E6DFD5",
              }}
            >
              <span className="mr-1.5">{cls.icon}</span>
              {cls.name}
            </button>
          ))}
        </div>

        {/* Active class detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeClass}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="p-8 rounded-lg border"
            style={{ borderColor: `${palette.primary}20`, backgroundColor: `${palette.primary}06` }}
          >
            <h3
              className="text-[22px] mb-2"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: "#E6DFD5" }}
            >
              <span className="mr-2">{CLASSES[activeClass].icon}</span>
              {CLASSES[activeClass].name}
            </h3>
            <p
              className="text-[15px] leading-[1.9] max-w-[680px]"
              style={{ fontFamily: "var(--font-body)", color: "#E6DFD5" }}
            >
              {CLASSES[activeClass].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   THE NAYARA DIFFERENCE
   ═══════════════════════════════════════════════════════════════ */
function NayaraDifferenceSection({ palette }: { palette: PropertyPalette }) {
  return (
    <section className={sectionPadding} style={{ backgroundColor: `${palette.primary}08` }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <DrawLine color={palette.primary} className="mb-8" />
          <h2
            className="text-2xl md:text-3xl mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#E6DFD5" }}
          >
            The Nayara Difference
          </h2>
          <div className="max-w-[780px] space-y-5">
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: "#E6DFD5" }}
            >
              You are not staying at three different hotels that happen to share some restaurants. You are entering a curated world where every meal, every glass, every class reinforces a single philosophy: that a great vacation feeds not just the body, but the mind and soul.
            </p>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9]"
              style={{ fontFamily: "var(--font-body)", color: "#E6DFD5" }}
            >
              Whether you are celebrating a special occasion, seeking a culinary education, or simply craving an escape into nature without sacrificing the pleasures of the table, the three Nayara properties offer something increasingly rare — the chance to experience Costa Rica as it should be experienced, one extraordinary meal at a time.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BLOG CROSS-LINK
   ═══════════════════════════════════════════════════════════════ */
function BlogCrossLink({ palette }: { palette: PropertyPalette }) {
  return (
    <section className="py-12 px-6 md:px-10" style={{ backgroundColor: palette.gradientEnd }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <a
              href="/journal/three-kitchens-one-rainforest"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
              style={{
                fontFamily: "var(--font-body)",
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
              Read: Three Kitchens, One Rainforest
            </a>
          </div>

          <div className="mt-8">
            <PillarCrossLink pillar="gastronomy" />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FALLBACK SECTIONS (non-CR properties)
   ═══════════════════════════════════════════════════════════════ */
function GastronomyIntro({ palette, description }: { palette: PropertyPalette; description: string }) {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: palette.gradientEnd }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[15px] md:text-[17px] leading-[1.9] max-w-[720px]"
            style={{ fontFamily: "var(--font-body)", color: "#E6DFD5" }}
          >
            {description}
          </p>
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
                style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: "#E6DFD5" }}
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
                style={{ fontFamily: "var(--font-body)", color: "#E6DFD5" }}
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
