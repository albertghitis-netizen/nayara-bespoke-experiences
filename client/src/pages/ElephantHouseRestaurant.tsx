/**
 * ELEPHANT HOUSE RESTAURANT — Dining Detail Page
 * Property: Nayara Bocas del Toro
 * Palette: Ocean teal (#1B7B8C) on coastal sand (#F0EBE0)
 */

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";

const P = {
  bg: "#F0EBE0",
  text: "#0D0604",
  textSoft: "#0D0604CC",
  primary: "#1B7B8C",
  secondary: "#2A5A6B",
  accent: "#3FA0B5",
  bone: "#F7F5F0",
  white: "#FFFFFF",
};

const display = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

const PILL_BG = "rgba(27, 123, 140, 0.82)";
const PILL_BG_HOVER = "rgba(42, 90, 107, 0.92)";
const PILL_BORDER = "rgba(255, 255, 255, 0.25)";

export default function ElephantHouseRestaurant() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: P.bg }}>
      <BrandNavigation pageType="property" hideCenterLabel />
      <HeroSection />
      <IntroSection />
      <OfferingsSection />
      <CTASection />
      <Footer pageType="property" bgColor={P.primary} />
    </div>
  );
}

function HeroSection() {
  const [hovered, setHovered] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  return (
    <section ref={heroRef} className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden" style={{ backgroundColor: "#2A5A6B" }}>
      <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
        <div className="w-full h-full bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900" />
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60"
        style={{ opacity: heroOpacity }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <p
            className="text-white/50 text-[10px] md:text-[11px] tracking-[0.4em] uppercase mb-4"
            style={{ ...body, fontWeight: 500 }}
          >
            Nayara Bocas del Toro
          </p>
          <h1
            className="text-white text-5xl md:text-7xl lg:text-8xl mb-4"
            style={display}
          >
            Elephant House
          </h1>
          <div className="w-16 h-px mx-auto mb-5" style={{ backgroundColor: "rgba(255,255,255,0.4)" }} />
          <p
            className="text-white/70 text-sm md:text-base max-w-md mx-auto mb-8"
            style={body}
          >
            Signature Fine Dining
          </p>
          <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => import("sonner").then(({ toast }) => toast("Reservation — Coming Soon"))}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border backdrop-blur-sm transition-all duration-300 hover:scale-[1.03]"
            style={{
              ...body,
              fontWeight: 500,
              fontSize: "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase" as const,
              color: P.white,
              backgroundColor: hovered ? PILL_BG_HOVER : PILL_BG,
              borderColor: PILL_BORDER,
            }}
          >
            Make a Reservation
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </motion.div>
      </div>

      <div className="absolute top-24 md:top-28 right-6 md:right-16">
        <Link
          href="/bocas-del-toro"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm transition-all duration-300 hover:scale-[1.03]"
          style={{
            ...body,
            fontWeight: 500,
            fontSize: "10px",
            letterSpacing: "0.15em",
            textTransform: "uppercase" as const,
            color: P.white,
            backgroundColor: "rgba(27, 123, 140, 0.5)",
            borderColor: PILL_BORDER,
          }}
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Bocas del Toro
        </Link>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 md:gap-0 items-start">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="w-full md:w-[55%] relative z-10"
        >
          <div className="relative overflow-hidden rounded-sm aspect-[4/3]" style={{ backgroundColor: P.primary }}>
            <div className="w-full h-full flex items-center justify-center">
              <p style={{ ...body, color: P.white }}>Restaurant Image Coming Soon</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full md:w-[50%] md:-ml-12 md:mt-24 relative z-20"
        >
          <div className="p-8 md:p-12 rounded-sm" style={{ backgroundColor: P.bg }}>
            <p
              className="text-[11px] tracking-[0.25em] uppercase mb-5"
              style={{ ...body, fontWeight: 500, color: P.primary }}
            >
              Fine Dining
            </p>

            <div className="flex gap-4 mb-6">
              <div className="w-1 shrink-0 rounded-full" style={{ backgroundColor: P.primary }} />
              <h2
                className="text-2xl md:text-3xl lg:text-4xl leading-tight"
                style={{ ...display, color: P.text }}
              >
                Balinese Heritage
              </h2>
            </div>

            <p
              className="text-base md:text-lg leading-relaxed mb-6"
              style={{ ...body, color: P.textSoft }}
            >
              Housed in a 100-year-old structure imported from Bali, the Elephant House is our signature fine dining restaurant. The historic architecture creates an intimate and enchanting atmosphere for an unforgettable culinary experience.
            </p>

            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ ...body, color: P.textSoft }}
            >
              Savor innovative cuisine that celebrates Caribbean flavors and tropical ingredients in a setting steeped in history and elegance.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function OfferingsSection() {
  const offerings = [
    "100-year-old Balinese structure",
    "Fine dining cuisine",
    "Caribbean-inspired flavors",
    "Tropical ingredients",
    "Intimate dining rooms",
    "Wine selections",
    "Multi-course menus",
    "Special occasions available",
  ];

  return (
    <section className="py-20 md:py-32 px-6 md:px-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1 }}
      >
        <p
          className="text-[11px] tracking-[0.25em] uppercase mb-8"
          style={{ ...body, fontWeight: 500, color: P.primary }}
        >
          Dining Experiences
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {offerings.map((offering, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="w-1 shrink-0 rounded-full" style={{ backgroundColor: P.primary }} />
              <p style={{ ...body, color: P.text }}>{offering}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-10" style={{ backgroundColor: P.primary }}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2
            className="text-2xl md:text-4xl mb-6"
            style={{ ...display, color: P.white }}
          >
            Experience Historic Elegance
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed mb-10"
            style={{ ...body, color: P.white + "DD" }}
          >
            Dine in a century-old Balinese structure and enjoy exceptional cuisine overlooking the Caribbean.
          </p>
          <button
            onClick={() => import("sonner").then(({ toast }) => toast("Reservation — Coming Soon"))}
            className="inline-block px-8 py-3 rounded-full text-[11px] tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-80"
            style={{ ...body, fontWeight: 500, backgroundColor: P.white, color: P.primary }}
          >
            Reserve Your Table
          </button>
        </motion.div>
      </div>
    </section>
  );
}
