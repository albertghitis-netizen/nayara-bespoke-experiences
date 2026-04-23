/**
 * OneRainforestGardens — "Three Keys, One Door"
 *
 * An editorial section for the Gardens page that tells the story of
 * three Costa Rica properties sharing one rainforest, one volcano,
 * and a constellation of shared amenities.
 *
 * Design concept: Three elegant property cards connected by an animated
 * golden thread, with shared amenity stats that count up on scroll.
 * The visual metaphor is three keys that unlock one extraordinary door.
 *
 * Palette: Gardens "Canopy" (greens/earthy)
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import {
  AnimateOnScroll,
  TextReveal,
  DrawLine,
  MediaReveal,
  fadeUp,
  fadeIn,
  DURATION,
  EASE_CINEMATIC,
  EASE_EDITORIAL,
} from "@/components/motion";
import { useCountUp } from "@/hooks/useCountUp";

/* ── Palette (Gardens Canopy) ── */
const P = {
  primary: "#286241",
  secondary: "#1E4D33",
  accent: "#3A7A55",
  bg: "#F7F5F0",
  bgTint: "#EDEEE2",
  text: "#3B2B26",
  textSecondary: "#67737C",
  textTertiary: "#9A9086",
  divider: "#E6DFD5",
  gold: "#B8A88A",
};

/* ── CDN base ── */
const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

/* ── Property data ── */
const PROPERTIES = [
  {
    name: "Tented Camp",
    tagline: "Clifftop Tents & Suites",
    description: "Safari-style luxury perched on a volcanic ridge, where open-air tents meet private plunge pools and the calls of toucans.",
    image: `${CDN}/19B9D444-0A7C-4C29-93A3-A8C0DFDFBD31_aa5cae9d.JPEG`,
    route: "/tented-camp",
    accent: "#868B75",
  },
  {
    name: "Gardens",
    tagline: "Rainforest Casitas & Villas",
    description: "The original Nayara — lush tropical gardens, volcano views, and the warm hospitality that started it all. Families and couples alike.",
    image: `${CDN}/prop-gardens_5931d8af.jpg`,
    route: "/gardens",
    accent: "#286241",
    current: true,
  },
  {
    name: "Springs",
    tagline: "Private Hot Springs Villas",
    description: "Adults-only Relais & Châteaux retreat where every villa has its own volcanic hot spring pool, screened by tropical canopy.",
    image: `${CDN}/springs-villa-plunge-pool-straight_a5d505d1.webp`,
    route: "/springs",
    accent: "#3B6E7B",
  },
];

/* ── Shared amenity stats ── */
const STATS = [
  { value: 6, label: "Shared Restaurants", suffix: "" },
  { value: 28, label: "Spa Treatments", suffix: "+" },
  { value: 16, label: "Curated Excursions", suffix: "" },
  { value: 1400, label: "Acres of Rainforest", suffix: "" },
];

/* ── Animated stat counter ── */
function StatCounter({ value, label, suffix, delay }: { value: number; label: string; suffix: string; delay: number }) {
  const [display, ref] = useCountUp({ end: value, duration: 2200, delay, suffix });
  return (
    <div className="text-center">
      <span
        ref={ref as React.RefObject<HTMLSpanElement>}
        className="block text-3xl md:text-4xl lg:text-5xl tracking-tight"
        style={{ fontFamily: "var(--font-display)", fontWeight: 300, color: P.text }}
      >
        {display}
      </span>
      <span
        className="block mt-2 text-[11px] tracking-[0.15em] uppercase"
        style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: P.textTertiary }}
      >
        {label}
      </span>
    </div>
  );
}

/* ── Property card ── */
function PropertyCard({
  property,
  index,
}: {
  property: (typeof PROPERTIES)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: DURATION.dramatic,
        ease: EASE_EDITORIAL,
        delay: index * 0.15,
      }}
      className="group relative"
    >
      {property.current ? (
        <div className="block">
          <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
            <img
              src={property.image}
              alt={`Nayara ${property.name}`}
              className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
              loading="lazy"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            {/* "You are here" indicator */}
            <div className="absolute top-4 left-4">
              <span
                className="inline-block px-3 py-1.5 rounded-full text-[9px] tracking-[0.2em] uppercase backdrop-blur-md"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  color: "#fff",
                  backgroundColor: `${property.accent}CC`,
                }}
              >
                You Are Here
              </span>
            </div>
            {/* Bottom text */}
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
              <h4
                className="text-white text-lg md:text-xl tracking-wide mb-1"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                Nayara {property.name}
              </h4>
              <p
                className="text-white/60 text-[11px] tracking-[0.1em] uppercase"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                {property.tagline}
              </p>
            </div>
          </div>
          {/* Description below card */}
          <p
            className="mt-4 text-[13px] leading-[1.7] px-1"
            style={{ fontFamily: "var(--font-body)", color: P.textSecondary }}
          >
            {property.description}
          </p>
        </div>
      ) : (
        <Link href={property.route} className="block cursor-pointer">
          <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
            <img
              src={property.image}
              alt={`Nayara ${property.name}`}
              className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
              loading="lazy"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            {/* Bottom text */}
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
              <h4
                className="text-white text-lg md:text-xl tracking-wide mb-1"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                Nayara {property.name}
              </h4>
              <p
                className="text-white/60 text-[11px] tracking-[0.1em] uppercase"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                {property.tagline}
              </p>
            </div>
            {/* Hover arrow */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md"
                style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </div>
          </div>
          {/* Description below card */}
          <p
            className="mt-4 text-[13px] leading-[1.7] px-1"
            style={{ fontFamily: "var(--font-body)", color: P.textSecondary }}
          >
            {property.description}
          </p>
        </Link>
      )}
    </motion.div>
  );
}

/* ── Shared dining names ── */
const RESTAURANTS = ["Asia Luna", "Amor Loco", "Nostalgia", "Terraza", "Lapas Bar", "Café Campesino"];

/* ── Main section ── */
export default function OneRainforestGardens() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ backgroundColor: P.bgTint }}
    >
      {/* Top gradient transition from story section bg */}
      <div
        className="h-[80px] md:h-[120px]"
        style={{ background: `linear-gradient(to bottom, ${P.bg}, ${P.bgTint})` }}
      />

      {/* ── Header ── */}
      <div className="px-6 md:px-10 max-w-[1200px] mx-auto">
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.2em] mb-4 uppercase"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: P.primary }}
          >
            One Rainforest, Three Resorts
          </p>
        </AnimateOnScroll>

        <TextReveal as="h2" className="mb-6" delay={0.1}>
          <span
            className="block text-2xl md:text-[2rem] lg:text-[2.5rem] leading-[1.05] tracking-wide"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: P.text }}
          >
            Three Keys, One Door
          </span>
        </TextReveal>

        <AnimateOnScroll variants={fadeUp} delay={0.2}>
          <p
            className="text-[15px] leading-[1.85] max-w-[640px] mb-4"
            style={{ fontFamily: "var(--font-body)", color: P.textSecondary }}
          >
            Nayara Gardens is not one hotel. It is the heart of three, woven together by the same volcano, the same rainforest, and the same commitment to extraordinary hospitality. Stay at Gardens and the restaurants, spa, hot springs, and experiences of Tented Camp and Springs are all yours.
          </p>
        </AnimateOnScroll>

        <DrawLine className="my-10 md:my-14" color={P.divider} />

        {/* ── Stats row ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-14 md:mb-20">
          {STATS.map((stat, i) => (
            <StatCounter key={stat.label} {...stat} delay={i * 150} />
          ))}
        </div>

        {/* ── Three property cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-14 md:mb-20">
          {PROPERTIES.map((prop, i) => (
            <PropertyCard key={prop.name} property={prop} index={i} />
          ))}
        </div>

        {/* ── Shared dining ribbon ── */}
        <DrawLine className="mb-10 md:mb-14" color={P.divider} />

        <AnimateOnScroll variants={fadeUp}>
          <div className="text-center mb-6">
            <p
              className="text-[11px] tracking-[0.2em] uppercase mb-3"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: P.primary }}
            >
              Shared Across All Three
            </p>
            <p
              className="text-lg md:text-xl tracking-wide"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: P.text }}
            >
              Six Restaurants, One Volcanic Landscape
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.15}>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-6">
            {RESTAURANTS.map((name) => (
              <span
                key={name}
                className="px-4 py-2 rounded-full text-[11px] md:text-[12px] tracking-[0.08em]"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                  color: P.primary,
                  backgroundColor: `${P.primary}0A`,
                  border: `1px solid ${P.primary}18`,
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.25}>
          <p
            className="text-center text-[13px] leading-[1.7] max-w-[520px] mx-auto mb-4"
            style={{ fontFamily: "var(--font-body)", color: P.textTertiary }}
          >
            From Pan-Asian fusion at Asia Luna to Latin American soul food at Amor Loco, craft cocktails at Lapas Bar, and artisanal coffee at Café Campesino — every table is yours.
          </p>
        </AnimateOnScroll>
      </div>

      {/* Bottom gradient transition */}
      <div
        className="h-[80px] md:h-[120px]"
        style={{ background: `linear-gradient(to bottom, ${P.bgTint}, ${P.bg})` }}
      />
    </section>
  );
}
