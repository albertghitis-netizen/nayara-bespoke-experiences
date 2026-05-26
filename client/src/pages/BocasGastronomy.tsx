/**
 * NAYARA BOCAS DEL TORO — GASTRONOMY: "Caribbean Sea to Table"
 * Single page for both dining venues: Elephant House, The Coral Cafe
 * Palette: Bocas navy system (soft blue-grey bg, navy accents)
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import {
  AnimateOnScroll,
  StaggerOnScroll,
  DrawLine,
  fadeUp,
  staggerContainer,
} from "@/components/motion";

/* ── Palette (Bocas — navy system) ── */
const PALETTE = {
  bg: "#F0F4F7",
  bgAlt: "#E6ECF1",
  dark: "#1E3A8A",
  accent: "#1E3A8A",
  text: "#0D1B2A",
  textMuted: "#0D1B2A99",
  bone: "#FFFFFF",
};

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

const sectionPadding = "py-20 md:py-32 px-6 md:px-10";
const maxW = "max-w-[1200px] mx-auto";

/* ── Hero ── */
const HERO_IMAGE = "/manus-storage/fb12-bocas-gastronomy_8f3f15ff.jpg";

/* ── Restaurant data ── */
interface RestaurantEntry {
  name: string;
  subtitle: string;
  cuisine: string;
  description: string;
  details: string[];
  image: string;
  note: string;
}

const RESTAURANTS: RestaurantEntry[] = [
  {
    name: "Elephant House",
    subtitle: "Our Signature Fine Dining",
    cuisine: "International Cuisine",
    description:
      "Our fine dining restaurant, the majestic Elephant House, is a 100-year-old structure shipped halfway around the world from Bali, Indonesia. Take in the moon glistening on the water and spot a stingray gliding by as you delight in lobster paired with the perfect chilled white wine.",
    details: [
      "Colorful. Flavorful. Fresh.",
      "A celebration of food and wine (Adults Only)",
      "New meticulously crafted dinner menu every night",
      "Finest hand-selected meats and local seafood directly from the sea",
    ],
    image: "/manus-storage/fb12-bocas-gastronomy_8f3f15ff.jpg",
    note: "Adults Only · Reservations Required",
  },
  {
    name: "The Coral Cafe",
    subtitle: "Laidback, Tasty Eating",
    cuisine: "Al Fresco Dining",
    description:
      "The poolside Coral Café is a cheerful alfresco setting for a leisurely breakfast or lunch. Feast on local seafood or enjoy a craft cocktail — you decide what adventure to go on next. Room service is available for all meals and drinks.",
    details: [
      "Local. Light. Al Fresco.",
      "An inspiration from nature",
      "Fresh organic vegetables and local ingredients",
      "Craft cocktails and tropical refreshments",
    ],
    image: "/manus-storage/fb12-bocas-gastronomy_8f3f15ff.jpg",
    note: "Open Daily",
  },
];

/* ── Culinary Experiences ── */
const EXPERIENCES = [
  { label: "Caribbean Seafood", desc: "Locally caught seafood prepared fresh daily" },
  { label: "Wine Pairing", desc: "Curated selections to complement each course" },
  { label: "Tropical Cocktails", desc: "Craft cocktails with Caribbean botanicals" },
  { label: "Private Dining", desc: "Overwater dining under the stars" },
];

/* ── Utility ── */
function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */
export default function BocasGastronomy() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.bg }}>
      <BrandNavigation pageType="property" backLink={{ label: "Bocas del Toro", href: "/bocas-del-toro" }} />
      <HeroSection />
      <IntroSection />
      <RestaurantsSection />
      <CulinaryExperiencesSection />
      <CTASection />
      <Footer pageType="property" bgColor={PALETTE.dark} textColor="#FFFFFF" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO — Full-bleed image with title at bottom
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
      <img
        loading="lazy"
        src={HERO_IMAGE}
        alt="Elephant House overwater restaurant at Nayara Bocas del Toro"
        className="w-full h-full object-cover"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50 pointer-events-none" />
      <div className="absolute bottom-8 md:bottom-14 left-0 right-0 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-2xl md:text-4xl lg:text-5xl tracking-wide"
          style={heading}
        >
          Caribbean Sea to Table
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/50 text-[11px] tracking-[0.25em] uppercase mt-3"
          style={{ ...body, fontWeight: 500 }}
        >
          Bocas del Toro, Panama
        </motion.p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   INTRO — Philosophy statement
   ═══════════════════════════════════════════════════════════════ */
function IntroSection() {
  return (
    <section className={sectionPadding} style={{ backgroundColor: PALETTE.bg }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <DrawLine color={PALETTE.accent} className="mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <span
                className="text-[10px] tracking-[0.3em] uppercase block mb-4"
                style={{ ...body, fontWeight: 500, color: PALETTE.accent }}
              >
                Gastronomy
              </span>
              <h2
                className="text-2xl md:text-3xl leading-tight"
                style={{ ...heading, color: PALETTE.text }}
              >
                An Unexpected Culinary Journey in the Middle of the Caribbean Sea
              </h2>
            </div>
            <div className="flex flex-col justify-end">
              <p
                className="text-[15px] leading-[1.9]"
                style={{ ...body, color: PALETTE.textMuted }}
              >
                Enjoy international cuisine with local flavor and ingredients. Our chef creates a new meticulously crafted dinner menu every night of the week. All our meals are prepared using the finest hand-selected meats, local seafood directly from the sea, and fresh organic vegetables and ingredients.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   RESTAURANTS — Two venues, alternating layout
   ═══════════════════════════════════════════════════════════════ */
function RestaurantsSection() {
  return (
    <section style={{ backgroundColor: PALETTE.bg }}>
      {RESTAURANTS.map((r, i) => (
        <RestaurantBlock key={r.name} restaurant={r} index={i} />
      ))}
    </section>
  );
}

function RestaurantBlock({ restaurant, index }: { restaurant: RestaurantEntry; index: number }) {
  const isEven = index % 2 === 0;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className={`grid grid-cols-1 md:grid-cols-2 gap-0`}
      style={{ backgroundColor: index % 2 === 1 ? PALETTE.bgAlt : PALETTE.bg }}
    >
      {/* Image */}
      <div className={`aspect-[4/3] md:aspect-auto md:min-h-[600px] overflow-hidden ${isEven ? "md:order-1" : "md:order-2"}`}>
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Text */}
      <div className={`flex flex-col justify-center px-8 md:px-14 lg:px-20 py-16 md:py-20 ${isEven ? "md:order-2" : "md:order-1"}`}>
        <span
          className="text-[10px] tracking-[0.25em] uppercase block mb-3"
          style={{ ...body, fontWeight: 500, color: PALETTE.accent }}
        >
          {restaurant.cuisine}
        </span>
        <h3
          className="text-2xl md:text-3xl mb-1"
          style={{ ...heading, color: PALETTE.text }}
        >
          {restaurant.name}
        </h3>
        <p
          className="text-[15px] tracking-[0.04em] mb-6"
          style={{ ...body, fontWeight: 500, color: PALETTE.textMuted }}
        >
          {restaurant.subtitle}
        </p>
        <p
          className="text-[14px] leading-[1.85] mb-8"
          style={{ ...body, color: PALETTE.textMuted }}
        >
          {restaurant.description}
        </p>

        {/* Details */}
        <ul className="space-y-2 mb-8">
          {restaurant.details.map((d, di) => (
            <li key={di} className="flex items-start gap-3">
              <span
                className="w-1 h-1 rounded-full mt-2 shrink-0"
                style={{ backgroundColor: PALETTE.accent }}
              />
              <span
                className="text-[13px] leading-[1.7]"
                style={{ ...body, color: PALETTE.textMuted }}
              >
                {d}
              </span>
            </li>
          ))}
        </ul>

        {/* Note pill */}
        <span
          className="inline-block self-start text-[10px] tracking-[0.2em] uppercase px-4 py-2 rounded-full border"
          style={{
            ...body,
            fontWeight: 500,
            color: PALETTE.accent,
            borderColor: PALETTE.accent,
          }}
        >
          {restaurant.note}
        </span>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CULINARY EXPERIENCES — Caribbean dining moments
   ═══════════════════════════════════════════════════════════════ */
function CulinaryExperiencesSection() {
  return (
    <section className={sectionPadding} style={{ backgroundColor: PALETTE.bg }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <DrawLine color={PALETTE.accent} className="mb-8" />
          <h2
            className="text-2xl md:text-3xl mb-3"
            style={{ ...heading, color: PALETTE.text }}
          >
            Culinary Experiences
          </h2>
          <p
            className="text-[15px] leading-[1.9] max-w-[600px] mb-14"
            style={{ ...body, color: PALETTE.textMuted }}
          >
            Beyond the restaurants, Nayara Bocas del Toro offers immersive culinary moments that connect you to the Caribbean Sea, its flavors, and its vibrant culture.
          </p>
        </AnimateOnScroll>

        <StaggerOnScroll variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {EXPERIENCES.map((exp, i) => (
            <motion.div key={i} variants={fadeUp} className="text-center md:text-left">
              <p
                className="text-[11px] tracking-[0.2em] uppercase mb-2"
                style={{ ...body, fontWeight: 500, color: PALETTE.accent }}
              >
                0{i + 1}
              </p>
              <h4
                className="text-[16px] mb-2"
                style={{ ...heading, fontWeight: 500, color: PALETTE.text }}
              >
                {exp.label}
              </h4>
              <p
                className="text-[13px] leading-[1.7]"
                style={{ ...body, color: PALETTE.textMuted }}
              >
                {exp.desc}
              </p>
            </motion.div>
          ))}
        </StaggerOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CTA — Reserve
   ═══════════════════════════════════════════════════════════════ */
function CTASection() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-10" style={{ backgroundColor: PALETTE.bgAlt }}>
      <div className={`${maxW} text-center`}>
        <FadeIn>
          <span
            className="text-[10px] tracking-[0.3em] uppercase block mb-4"
            style={{ ...body, fontWeight: 500, color: PALETTE.accent }}
          >
            Begin Your Culinary Journey
          </span>
          <h2
            className="text-2xl md:text-3xl mb-6"
            style={{ ...heading, color: PALETTE.text }}
          >
            Taste the Caribbean
          </h2>
          <p
            className="text-[15px] leading-[1.9] max-w-[500px] mx-auto mb-10"
            style={{ ...body, color: PALETTE.textMuted }}
          >
            From the majestic Elephant House to the cheerful Coral Café, every meal at Nayara Bocas del Toro is a celebration of Caribbean flavors, fresh seafood, and world-class cuisine.
          </p>
          <Link href="/bocas-del-toro">
            <span
              className="inline-block text-[11px] tracking-[0.2em] uppercase px-8 py-3 rounded-full border transition-all duration-300 cursor-pointer hover:bg-[#1E3A8A] hover:text-white"
              style={{
                ...body,
                fontWeight: 500,
                color: PALETTE.accent,
                borderColor: PALETTE.accent,
              }}
            >
              Back to Bocas del Toro
            </span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
