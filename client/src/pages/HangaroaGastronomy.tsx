/*
 * NAYARA HANGAROA — GASTRONOMY: "Island to Table"
 * Single page for all three dining venues: Poerava, Kaloa Lounge, Vaikoa Bar
 * Palette: Hangaroa stone/steel-grey system
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

/* ── Palette (Hangaroa — stone/steel-grey system) ── */
const PALETTE = {
  bg: "#F4F1ED",
  bgAlt: "#EBE7E1",
  dark: "#2C3E50",
  accent: "#536878",
  text: "#1A1A1A",
  textMuted: "#1A1A1A99",
  bone: "#FFFFFF",
};

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

const sectionPadding = "py-20 md:py-32 px-6 md:px-10";
const maxW = "max-w-[1200px] mx-auto";

/* ── Hero ── */
const HERO_IMAGE = "/manus-storage/hangaroa-poerava-interior_d9d7d536.jpg";

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
    name: "Poerava",
    subtitle: "Restaurant",
    cuisine: "Polynesian-Chilean Fusion",
    description:
      "Poerava is the culinary heart of Nayara Hangaroa, where Polynesian traditions meet Chilean gastronomy. Our chefs draw inspiration from the island's ancestral cooking methods — the umu earth oven, fresh Pacific catches, and tropical produce — to create dishes that honor Rapa Nui's heritage while embracing contemporary technique.",
    details: [
      "Fresh Pacific tuna and mahi-mahi prepared daily",
      "Umu-inspired slow-cooked meats and root vegetables",
      "Tropical fruits and herbs from the island's gardens",
      "Chilean wines paired with Polynesian flavors",
    ],
    image: "/manus-storage/hangaroa-poerava-restaurant_5cd86124.jpg",
    note: "Reservations Suggested",
  },
  {
    name: "Kaloa",
    subtitle: "Lounge",
    cuisine: "Pacific Tapas & Cocktails",
    description:
      "Kaloa Lounge offers a relaxed atmosphere where guests gather to share small plates inspired by the Pacific. With panoramic views of the island's volcanic landscape, it's the perfect setting for sunset cocktails and light bites that celebrate the ocean's bounty.",
    details: [
      "Pacific-inspired tapas and sharing plates",
      "Craft cocktails with tropical botanicals",
      "Panoramic views of Easter Island's coastline",
      "Live Rapa Nui music on select evenings",
    ],
    image: "/manus-storage/hangaroa-kaloa-lounge_b0992660.jpg",
    note: "Open Daily",
  },
  {
    name: "Vaikoa",
    subtitle: "Bar",
    cuisine: "Craft Cocktails & Island Spirits",
    description:
      "Vaikoa Bar is an intimate space where the island's spirit comes alive through craft cocktails. Our bartenders blend local ingredients — guava, passion fruit, native herbs — with premium spirits to create drinks that capture the essence of Rapa Nui's volcanic terroir.",
    details: [
      "Signature cocktails with island-foraged ingredients",
      "Premium pisco and Chilean wine selection",
      "Tropical fruit infusions and fresh juices",
      "Intimate setting with Polynesian-inspired décor",
    ],
    image: "/manus-storage/hangaroa-vaikoa-bar_90e298e5.jpg",
    note: "Open Nightly",
  },
];

/* ── Culinary Experiences ── */
const EXPERIENCES = [
  { label: "Umu Earth Oven", desc: "Traditional Polynesian underground cooking ceremony" },
  { label: "Pacific Tasting", desc: "Fresh catches paired with island-grown produce" },
  { label: "Sunset Cocktails", desc: "Craft drinks overlooking the Moai coastline" },
  { label: "Island Garden Tour", desc: "Tropical herbs and fruits of Rapa Nui" },
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
export default function HangaroaGastronomy() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.bg }}>
      <BrandNavigation pageType="property" backLink={{ label: "Hangaroa", href: "/hangaroa" }} />
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
   HERO — Full-bleed image with "Island to Table" title at bottom
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
      <img
          loading="lazy"
        src={HERO_IMAGE}
        alt="Poerava Restaurant interior at Nayara Hangaroa"
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
          Island to Table
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/50 text-[11px] tracking-[0.25em] uppercase mt-3"
          style={{ ...body, fontWeight: 500 }}
        >
          Rapa Nui, Easter Island
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
                Where Polynesian Heritage Meets Pacific Bounty
              </h2>
            </div>
            <div className="flex flex-col justify-end">
              <p
                className="text-[15px] leading-[1.9]"
                style={{ ...body, color: PALETTE.textMuted }}
              >
                On the world's most remote inhabited island, our cuisine tells the story of Rapa Nui — ancient Polynesian cooking traditions, the freshest Pacific seafood, and tropical ingredients cultivated in volcanic soil. Every dish at Nayara Hangaroa connects you to the island's living culture and the vast ocean that surrounds it.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   RESTAURANTS — Three venues, alternating layout
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
      className={`grid grid-cols-1 md:grid-cols-2 gap-0 ${index > 0 ? "mt-0" : ""}`}
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
   CULINARY EXPERIENCES — Umu, Pacific Tasting, Sunset, Garden
   ═══════════════════════════════════════════════════════════════ */
function CulinaryExperiencesSection() {
  return (
    <section className={sectionPadding} style={{ backgroundColor: PALETTE.bgAlt }}>
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
            Beyond the restaurants, Nayara Hangaroa offers immersive culinary moments that connect you to the island's Polynesian heritage and the Pacific Ocean.
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
   CTA — Return to Hangaroa
   ═══════════════════════════════════════════════════════════════ */
function CTASection() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-10" style={{ backgroundColor: PALETTE.bg }}>
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
            Taste the Island
          </h2>
          <p
            className="text-[15px] leading-[1.9] max-w-[500px] mx-auto mb-10"
            style={{ ...body, color: PALETTE.textMuted }}
          >
            All-inclusive dining with the freshest Pacific seafood, Polynesian-inspired cuisine, and craft cocktails — every meal tells the story of Rapa Nui.
          </p>
          <Link href="/hangaroa">
            <span
              className="inline-block text-[11px] tracking-[0.2em] uppercase px-8 py-3 rounded-full border transition-all duration-300 cursor-pointer hover:bg-[#536878] hover:border-[#536878] hover:text-white"
              style={{
                ...body,
                fontWeight: 500,
                color: PALETTE.accent,
                borderColor: PALETTE.accent,
              }}
            >
              Back to Hangaroa
            </span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
