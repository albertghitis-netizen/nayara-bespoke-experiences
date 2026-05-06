/**
 * OneRainforestSprings , "One Day, Three Worlds"
 *
 * An immersive section for the Springs page that tells the story of
 * a single day flowing across all three Costa Rica properties.
 * 
 * Design concept: A horizontal timeline showing moments from dawn to dusk,
 * each moment tied to a different property. The visual metaphor is that
 * a guest at Springs doesn't just stay at one hotel , they inhabit an
 * entire ecosystem of luxury across three worlds.
 *
 * Palette: Springs "Mineral" (mineral blues/teals)
 */
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  AnimateOnScroll,
  TextReveal,
  DrawLine,
  fadeUp,
  DURATION,
  EASE_CINEMATIC,
  EASE_EDITORIAL,
} from "@/components/motion";
import { useCountUp } from "@/hooks/useCountUp";
import { useIsMobile } from "@/hooks/useMobile";

/* ── Palette (Springs Eucalyptus & Mint) ── */
const P = {
  primary: "#5F7367",          // Standard Eucalyptus
  secondary: "#4B6358",        // Dark Eucalyptus
  accent: "#3EB489",           // Standard Mint
  bg: "#F7F5F0",
  bgTint: "#E8F3EF",           // Light Eucalyptus tint
  text: "#3B2B26",
  textSecondary: "#67737C",
  textTertiary: "#9A9086",
  divider: "#E6DFD5",
  warm: "#C4A882",
};

/* ── CDN base ── */
const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

/* ── Timeline moments ── */
const MOMENTS = [
  {
    time: "6:30 AM",
    period: "Dawn",
    title: "Volcanic Mist Yoga",
    property: "Springs",
    propertyRoute: "/springs",
    description: "Begin on your private villa deck as morning mist rises from the hot spring pool. The volcano emerges through the canopy.",
    image: `${CDN}/yoga-photo_3b789b60.jpg`,
    accent: P.primary,
  },
  {
    time: "8:00 AM",
    period: "Morning",
    title: "Farm-to-Cup Coffee",
    property: "Gardens",
    propertyRoute: "/gardens",
    description: "Walk the garden paths to Café Campesino for single-origin Costa Rican coffee and a breakfast sourced from the on-site organic farm.",
    image: `${CDN}/prop-gardens_5931d8af.jpg`,
    accent: "#525642",
  },
  {
    time: "10:30 AM",
    period: "Late Morning",
    title: "Canopy Hanging Bridges",
    property: "All Three",
    propertyRoute: "/curated-excursions",
    description: "Cross suspended bridges through the rainforest canopy, spotting toucans and howler monkeys. A shared excursion available to all guests.",
    image: `${CDN}/hanging-bridges-photo_a49dba00.jpeg`,
    accent: "#3EB489",
  },
  {
    time: "1:00 PM",
    period: "Afternoon",
    title: "Asia Luna Lunch",
    property: "All Three",
    propertyRoute: "/gastronomy-arenal",
    description: "Pan-Asian fusion in the heart of the rainforest. One of six shared restaurants where the cuisine of three continents meets volcanic terroir.",
    image: `${CDN}/5_ac0cb283.jpg`,
    accent: P.primary,
  },
  {
    time: "3:30 PM",
    period: "Late Afternoon",
    title: "Rainforest Spa Ritual",
    property: "Springs",
    propertyRoute: "/costa-rica-wellness",
    description: "Volcanic mud wraps, coffee exfoliations, and hot stone massages , 28 treatments drawn from the geothermal earth and forest botanicals.",
    image: `${CDN}/4O1A1569-Spa-NayaraTentedCampwithLivLawbyBriceFerreStudio-VancouverPortraitAdventureandAthletePhotographer_0e850f3a.webp`,
    accent: P.primary,
  },
  {
    time: "6:00 PM",
    period: "Sunset",
    title: "Clifftop Sundowner",
    property: "Tented Camp",
    propertyRoute: "/tented-camp",
    description: "End the day at Tented Camp's volcanic ridge, where safari-style luxury meets the golden hour. Cocktails at Lapas Bar as the sun sets behind Arenal.",
    image: `${CDN}/19B9D444-0A7C-4C29-93A3-A8C0DFDFBD31_aa5cae9d.JPEG`,
    accent: "#3EB489",
  },
];

/* ── Stat counter ── */
function StatItem({ value, label, suffix, delay }: { value: number; label: string; suffix: string; delay: number }) {
  const [display, ref] = useCountUp({ end: value, duration: 2200, delay, suffix });
  return (
    <div className="text-center">
      <span
        ref={ref as React.RefObject<HTMLSpanElement>}
        className="block text-2xl md:text-3xl tracking-tight"
        style={{ fontFamily: "var(--font-display)", fontWeight: 300, color: P.text }}
      >
        {display}
      </span>
      <span
        className="block mt-1.5 text-[10px] tracking-[0.15em] uppercase"
        style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: P.textTertiary }}
      >
        {label}
      </span>
    </div>
  );
}

/* ── Timeline dot ── */
function TimelineDot({ active, color }: { active: boolean; color: string }) {
  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        animate={{
          scale: active ? 1 : 0.6,
          backgroundColor: active ? color : P.divider,
        }}
        transition={{ duration: 0.4, ease: EASE_CINEMATIC }}
        className="w-3 h-3 rounded-full z-10"
      />
      {active && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 0.5 }}
          className="absolute w-7 h-7 rounded-full"
          style={{ backgroundColor: color }}
        />
      )}
    </div>
  );
}

/* ── Mobile moment card ── */
function MobileMomentCard({ moment, index }: { moment: (typeof MOMENTS)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: DURATION.dramatic, ease: EASE_EDITORIAL, delay: 0.1 }}
      className="flex gap-4 mb-10"
    >
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center flex-shrink-0 pt-1">
        <div
          className="w-2.5 h-2.5 rounded-full flex-shrink-0"
          style={{ backgroundColor: moment.accent }}
        />
        {index < MOMENTS.length - 1 && (
          <div className="w-px flex-1 mt-2" style={{ backgroundColor: P.divider }} />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 -mt-1">
        <div className="flex items-baseline gap-3 mb-2">
          <span
            className="text-[11px] tracking-[0.1em] uppercase"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: moment.accent }}
          >
            {moment.time}
          </span>
          <span
            className="text-[10px] tracking-[0.1em] uppercase"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: P.textTertiary }}
          >
            {moment.property}
          </span>
        </div>
        <h4
          className="text-base tracking-wide mb-2"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: P.text }}
        >
          {moment.title}
        </h4>
        <div className="overflow-hidden mb-3" style={{ aspectRatio: "16/9", borderRadius: "4px" }}>
          <img
            src={moment.image}
            alt={moment.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <p
          className="text-[13px] leading-[1.7]"
          style={{ fontFamily: "var(--font-body)", color: P.textSecondary }}
        >
          {moment.description}
        </p>
      </div>
    </motion.div>
  );
}

/* ── Desktop interactive timeline ── */
function DesktopTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const activeMoment = MOMENTS[activeIndex];

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: DURATION.slow }}
    >
      {/* Timeline navigation bar */}
      <div className="relative mb-10">
        {/* Horizontal line */}
        <div className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2" style={{ backgroundColor: P.divider }} />
        
        {/* Dots */}
        <div className="relative flex justify-between items-center">
          {MOMENTS.map((moment, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="flex flex-col items-center gap-2 group cursor-pointer relative z-10 bg-transparent border-none p-0"
              style={{ backgroundColor: "transparent" }}
            >
              <span
                className="text-[10px] tracking-[0.1em] uppercase transition-colors duration-300 mb-1"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                  color: i === activeIndex ? moment.accent : P.textTertiary,
                }}
              >
                {moment.time}
              </span>
              <div className="relative flex items-center justify-center" style={{ backgroundColor: i === activeIndex ? P.bgTint : P.bg }}>
                <div className="p-1" style={{ backgroundColor: i === activeIndex ? P.bgTint : P.bg }}>
                  <TimelineDot active={i === activeIndex} color={moment.accent} />
                </div>
              </div>
              <span
                className="text-[9px] tracking-[0.08em] uppercase transition-colors duration-300 mt-1"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                  color: i === activeIndex ? P.text : P.textTertiary,
                }}
              >
                {moment.period}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Active moment content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.5, ease: EASE_EDITORIAL }}
          className="grid grid-cols-2 gap-10 items-start"
        >
          {/* Image */}
          <div className="overflow-hidden" style={{ aspectRatio: "4/3", borderRadius: "2px" }}>
            <motion.img
              key={activeMoment.image}
              initial={{ scale: 1.06 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: EASE_CINEMATIC }}
              src={activeMoment.image}
              alt={activeMoment.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center py-4">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-[11px] tracking-[0.15em] uppercase"
                style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: activeMoment.accent }}
              >
                {activeMoment.time}
              </span>
              <span className="w-6 h-px" style={{ backgroundColor: P.divider }} />
              <span
                className="text-[10px] tracking-[0.12em] uppercase"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: P.textTertiary }}
              >
                at {activeMoment.property}
              </span>
            </div>

            <h3
              className="text-2xl lg:text-3xl tracking-wide mb-4"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: P.text }}
            >
              {activeMoment.title}
            </h3>

            <p
              className="text-[14px] leading-[1.8] mb-6 max-w-[420px]"
              style={{ fontFamily: "var(--font-body)", color: P.textSecondary }}
            >
              {activeMoment.description}
            </p>

            {activeMoment.property !== "All Three" && activeMoment.property !== "Springs" && (
              <Link
                href={activeMoment.propertyRoute}
                className="inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase transition-colors duration-300 hover:opacity-70"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: activeMoment.accent }}
              >
                Explore Nayara {activeMoment.property}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

/* ── Property links at bottom ── */
const SISTER_PROPERTIES = [
  {
    name: "Nayara Tented Camp",
    tagline: "Safari-style luxury on a volcanic ridge",
    route: "/tented-camp",
    image: `${CDN}/19B9D444-0A7C-4C29-93A3-A8C0DFDFBD31_aa5cae9d.JPEG`,
  },
  {
    name: "Nayara Gardens",
    tagline: "The original Nayara , families and couples",
    route: "/gardens",
    image: `${CDN}/prop-gardens_5931d8af.jpg`,
  },
];

/* ── Main section ── */
export default function OneRainforestSprings() {
  const isMobile = useIsMobile();

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: P.bgTint }}
    >
      {/* Top gradient transition */}
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
            One Day, Three Worlds
          </span>
        </TextReveal>

        <AnimateOnScroll variants={fadeUp} delay={0.2}>
          <p
            className="text-[15px] leading-[1.85] max-w-[640px] mb-4"
            style={{ fontFamily: "var(--font-body)", color: P.textSecondary }}
          >
            As a guest of Nayara Springs, the entire Nayara universe is yours. Walk to Tented Camp for sunset cocktails, dine at any of six shared restaurants, and explore 16 curated excursions , all within the same 1,400-acre rainforest at the foot of Arenal Volcano.
          </p>
        </AnimateOnScroll>

        {/* ── Compact stats ── */}
        <div className="flex flex-wrap gap-6 md:gap-10 mt-8 mb-10 md:mb-14">
          <StatItem value={3} label="Resorts" suffix="" delay={0} />
          <StatItem value={6} label="Restaurants" suffix="" delay={100} />
          <StatItem value={28} label="Spa Treatments" suffix="+" delay={200} />
          <StatItem value={16} label="Excursions" suffix="" delay={300} />
        </div>

        <DrawLine className="mb-10 md:mb-14" color={P.divider} />

        {/* ── Timeline heading ── */}
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-center text-[11px] tracking-[0.2em] uppercase mb-2"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: P.primary }}
          >
            A Day in the Rainforest
          </p>
          <p
            className="text-center text-lg md:text-xl tracking-wide mb-10 md:mb-14"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: P.text }}
          >
            From Dawn to Dusk Across Three Properties
          </p>
        </AnimateOnScroll>

        {/* ── Timeline content ── */}
        {isMobile ? (
          <div className="mb-10">
            {MOMENTS.map((moment, i) => (
              <MobileMomentCard key={i} moment={moment} index={i} />
            ))}
          </div>
        ) : (
          <div className="mb-14">
            <DesktopTimeline />
          </div>
        )}

        {/* ── Sister properties ── */}
        <DrawLine className="mb-10 md:mb-14" color={P.divider} />

        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-center text-[11px] tracking-[0.2em] uppercase mb-8"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: P.primary }}
          >
            Explore Our Sister Properties
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6">
          {SISTER_PROPERTIES.map((prop, i) => (
            <AnimateOnScroll key={prop.name} variants={fadeUp} delay={i * 0.12}>
              <Link href={prop.route} className="group block">
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <img
                    src={prop.image}
                    alt={prop.name}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h4
                      className="text-white text-base md:text-lg tracking-wide mb-1"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                    >
                      {prop.name}
                    </h4>
                    <p
                      className="text-white/60 text-[11px] tracking-[0.08em]"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                    >
                      {prop.tagline}
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
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      {/* Bottom gradient transition */}
      <div
        className="h-[80px] md:h-[120px]"
        style={{ background: `linear-gradient(to bottom, ${P.bgTint}, ${P.bg})` }}
      />
    </section>
  );
}
