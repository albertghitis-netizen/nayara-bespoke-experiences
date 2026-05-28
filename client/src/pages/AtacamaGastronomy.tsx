/**
 * NAYARA ALTO ATACAMA — GASTRONOMY: "Desert to Table"
 * Single page for all three dining venues: Ckelar, Quincho, Bar Puri
 * Palette: Atacama terracotta system (warm sand bg, terracotta accents)
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

/* ── Palette (Atacama — terracotta system) ── */
const PALETTE = {
  bg: "#F9EBE0",
  bgAlt: "#F3E2D4",
  dark: "#6F463D",
  accent: "#B85C3C",
  text: "#0D0604",
  textMuted: "#0D060499",
  bone: "#FFFFFF",
};

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

const sectionPadding = "py-20 md:py-32 px-6 md:px-10";
const maxW = "max-w-[1200px] mx-auto";

/* ── Hero ── */
const HERO_IMAGE = "/manus-storage/atacama-gastronomy-hero_39394203.jpg";

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
    name: "Ckelar",
    subtitle: "Restaurant",
    cuisine: "Chilean Desert Cuisine",
    description:
      "Our gastronomy is deeply connected to the surroundings — most of our vegetables come from our Andean Garden. Whether you are a wine aficionado or a connoisseur, you will enjoy Chile's unique grapes and our collection of top-of-the-line local wines.",
    details: [
      "Corn Cake with Goat Cheese and Chañar — a variety of corn unique to this region",
      "Classic Charquicán — a dish native to the Atacama people",
      "Seasonal tasting menus with Andean Garden produce",
      "Chile's finest wines from boutique vineyards",
    ],
    image: "/manus-storage/atacama-ckelar_a3c85758.jpg",
    note: "Reservations Suggested",
  },
  {
    name: "Quincho",
    subtitle: "South American Asado",
    cuisine: "Open-Fire Grilling",
    description:
      "Our Atacamenian Quincho is an outdoor barbecue pavilion where we grill different cuts of meat, corn, and potatoes. The 'Asado,' as this way of cooking is generally called, is a cooking tradition of South America. Eating outdoors in the shade overlooking the Andes mountains and the Atacama Desert is an extraordinary experience.",
    details: [
      "Traditional South American grilling techniques",
      "Prime cuts of meat over native hardwoods",
      "Grilled corn and Andean potatoes",
      "Outdoor dining overlooking the Andes",
    ],
    image: "/manus-storage/atacama-quincho_17000290.jpg",
    note: "Reservations Required",
  },
  {
    name: "Bar Puri",
    subtitle: "An Intimate Bar",
    cuisine: "Wine & Cocktails",
    description:
      "The highlight of your gastronomic experience in the Atacama Desert can be a Wine Pairing dinner with our hand-picked collection of Chile's top wines. This can be a wonderful introduction to the best vineyards in the area.",
    details: [
      "Wine Pairing dinners with Chile's top wines",
      "Sommelier-curated tasting experiences",
      "Freshly squeezed desert juices",
      "Timeless cocktails with local botanicals",
    ],
    image: "/manus-storage/atacama-bar-puri_b5445a8c.jpg",
    note: "Open Daily",
  },
];

/* ── Food Gallery ── */
const FOOD_GALLERY = [
  { src: "/manus-storage/atacama-food-avocado-mousse_7e4fbe5a.jpg", alt: "Avocado mousse with desert herbs" },
  { src: "/manus-storage/atacama-food-empanadas_eb2761b8.jpeg", alt: "Atacama empanadas with native corn" },
  { src: "/manus-storage/atacama-food-tuna-tiradito_2a318978.jpeg", alt: "Tuna tiradito with aji amarillo" },
  { src: "/manus-storage/atacama-food-seared-meat_d5d1e3f4.jpeg", alt: "Seared meat with Andean vegetables" },
  { src: "/manus-storage/atacama-food-corn-cake_e632b851.jpeg", alt: "Corn cake with wine pairing" },
  { src: "/manus-storage/atacama-food-honeycomb_16b441ea.jpg", alt: "Honeycomb dessert with native botanicals" },
];

/* ── Culinary Experiences ── */
const EXPERIENCES = [
  { label: "Wine Pairing", desc: "Chile's top wines 'Grandes Terruños'" },
  { label: "Sommelier Tastings", desc: "Curated selections from boutique vineyards" },
  { label: "Desert Cocktails", desc: "Timeless drinks with local botanicals" },
  { label: "Andean Garden Tour", desc: "Farm-to-table at 2,400 meters" },
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
export default function AtacamaGastronomy() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.bg }}>
      <BrandNavigation pageType="property" backLink={{ label: "Alto Atacama", href: "/alto-atacama" }} />
      <HeroSection />
      <IntroSection />
      <RestaurantsSection />
      <FoodGallerySection />
      <CulinaryExperiencesSection />
      <CTASection />
      <Footer pageType="property" bgColor={PALETTE.dark} textColor="#FFFFFF" propertyName="Alto Atacama" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO — Full-bleed image with "Desert to Table" title at bottom
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
      <img
          loading="lazy"
        src={HERO_IMAGE}
        alt="Ckelar Restaurant interior with Atacama cliffs at golden hour"
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
          Desert to Table
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/50 text-[11px] tracking-[0.25em] uppercase mt-3"
          style={{ ...body, fontWeight: 500 }}
        >
          San Pedro de Atacama, Chile
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
                An Unexpected Wine & Culinary Journey in the Chilean Desert
              </h2>
            </div>
            <div className="flex flex-col justify-end">
              <p
                className="text-[15px] leading-[1.9]"
                style={{ ...body, color: PALETTE.textMuted }}
              >
                At Alto Atacama we take the base of North Chilean food — corn, wheat and meat — and combine it with root vegetables, edible grasses and grains to offer a fresh, light and tasteful cuisine that goes hand-in-hand with the sublime terrain of the desert. Our cuisine will delight you with a menu of sophisticated techniques and delicious flavors.
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
   FOOD GALLERY — Signature dishes showcase
   ═══════════════════════════════════════════════════════════════ */
function FoodGallerySection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: PALETTE.bgAlt }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <DrawLine color={PALETTE.accent} className="mb-8" />
          <span
            className="text-[10px] tracking-[0.3em] uppercase block mb-4"
            style={{ ...body, fontWeight: 500, color: PALETTE.accent }}
          >
            From Our Kitchen
          </span>
          <h2
            className="text-2xl md:text-3xl mb-12"
            style={{ ...heading, color: PALETTE.text }}
          >
            Signature Dishes
          </h2>
        </AnimateOnScroll>

        <StaggerOnScroll variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {FOOD_GALLERY.map((img, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="aspect-square overflow-hidden"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </motion.div>
          ))}
        </StaggerOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CULINARY EXPERIENCES — Wine, Sommelier, Cocktails, Garden
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
            Beyond the restaurants, Alto Atacama offers immersive culinary moments that connect you to the land, its wines, and its ancient traditions.
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
            Taste the Desert
          </h2>
          <p
            className="text-[15px] leading-[1.9] max-w-[500px] mx-auto mb-10"
            style={{ ...body, color: PALETTE.textMuted }}
          >
            All-inclusive dining with locally sourced ingredients, Andean Garden produce, and Chile's finest wines — every meal tells the story of this ancient landscape.
          </p>
          <Link href="/alto-atacama">
            <span
              className="inline-block text-[11px] tracking-[0.2em] uppercase px-8 py-3 rounded-full border transition-all duration-300 cursor-pointer atacama-pill-hover"
              style={{
                ...body,
                fontWeight: 500,
                color: PALETTE.accent,
                borderColor: PALETTE.accent,
              }}
            >
              Back to Alto Atacama
            </span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
