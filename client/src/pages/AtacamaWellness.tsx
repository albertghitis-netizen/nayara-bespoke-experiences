/**
 * NAYARA ALTO ATACAMA — WELLNESS: "Flow Like Water, Breathe Like the Wind"
 * Dedicated wellness page for Spa Puri at Nayara Alto Atacama
 * Palette: Atacama terracotta system (warm sand bg, terracotta accents)
 * Four elements: Water, Fire, Earth, Air
 */

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import Footer from "@/components/Footer";
import NativeVideo from "@/components/NativeVideo";
import BrandNavigation from "@/components/BrandNavigation";
import { properties, type Treatment } from "@/data/properties";
import {
  AnimateOnScroll,
  DrawLine,
  fadeUp,
} from "@/components/motion";

/* ── Palette (Atacama — terracotta system) ── */
const PALETTE = {
  bg: "#F9EBE0",
  bgAlt: "#F3E2D4",
  bgLight: "#F7F5F0",
  dark: "#6F463D",
  accent: "#B85C3C",
  text: "#0D0604",
  textMuted: "#0D060499",
  bone: "#FFFFFF",
  amber: "#C29B70",
};

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

const sectionPadding = "py-20 md:py-32 px-6 md:px-10";
const maxW = "max-w-[1200px] mx-auto";

/* ── Media Assets ── */
const MEDIA = {
  hero: "/manus-storage/atacama-wellness-hero_1427df7c.jpg",
  wellnessVideo: "/manus-storage/atacama-wellness-h-v2_f00c123e.mp4",
  verticalStill: "/manus-storage/atacama-wellness-v-still_4687073b.jpg",
  cascadeVideo: "/manus-storage/atacama-cascade-2-vertical_00d76fc3.mp4",
};

/* ── Treatment categories for the element system ── */
const ELEMENTS = [
  {
    name: "Water",
    kunza: "Puri",
    icon: "💧",
    description: "Water lies at the heart of Spa Puri. Heated mineral waters from underground aquifers fill outdoor pools overlooking the Catarpe Valley, while Scottish showers and hydrotherapy circuits restore circulation and vitality.",
    color: "#4A7B8C",
  },
  {
    name: "Fire",
    kunza: "Turi",
    icon: "🔥",
    description: "Volcanic basalt stones heated and placed on key energy points channel the desert's thermal energy. Steam saunas and hot stone rituals honor the volcanic forces that shaped this landscape over millions of years.",
    color: "#B85C3C",
  },
  {
    name: "Earth",
    kunza: "Yotti",
    icon: "🌍",
    description: "Mineral-rich Altiplano clay, coca leaves, and coffee from the Andes form the base of exfoliation and renewal treatments. These ancient ingredients, drawn from the land itself, restore what altitude and sun take away.",
    color: "#8B6914",
  },
  {
    name: "Air",
    kunza: "Sema",
    icon: "🌬️",
    description: "Sound therapy, aromatic touch, and guided meditation harness the desert's silence. At 2,400 meters, the thin air and vast sky create conditions for profound stillness and restoration.",
    color: "#6B8E9F",
  },
];

/* ── Signature Treatments ── */
const SIGNATURE_TREATMENTS = [
  {
    name: "Peace Escape",
    element: "Air",
    duration: "120 min",
    description: "Sound therapy, aromatic touch, pindas massage with herbal compresses, and an outdoor mineral bath. The most immersive wellness journey we offer.",
  },
  {
    name: "Detox Experience",
    element: "Water",
    duration: "90 min",
    description: "Water circuit with steam and dry sauna, Scottish showers, coffee exfoliation, and full-body hydration. A complete reset for body and mind.",
  },
  {
    name: "Unforgettable Ritual",
    element: "Fire",
    duration: "90 min",
    description: "Steam sauna, mini facial with rica-rica products, hands-and-feet massage with digitopressure, and hot stones. A ritual that honors the desert's volcanic energy.",
  },
  {
    name: "Trilogy",
    element: "Water",
    duration: "80 min",
    description: "Sound therapy, aromatherapy, and water immersion. Three phases: back and neck, legs and feet, then cranial and facial massage in the jacuzzi.",
  },
  {
    name: "Mineral Bath",
    element: "Water",
    duration: "60 min",
    description: "Heated mineral waters from underground aquifers in outdoor pools overlooking the Catarpe Valley. Includes cranial massage, sound therapy, and seasonal fruit.",
  },
  {
    name: "Altiplano Renewal",
    element: "Earth",
    duration: "80 min",
    description: "Full-body treatment using mineral-rich Altiplano clay combined with honey. Antioxidant, antiseptic, hydrating for dry or sensitive skin in the desert climate.",
  },
];

/* ── Facilities ── */
const FACILITIES = [
  { name: "Outdoor Mineral Pools", detail: "Heated to 37-38°C with views of the Catarpe Valley" },
  { name: "Dry Sauna", detail: "Traditional Finnish-style heat therapy" },
  { name: "Wet Sauna", detail: "Steam room with eucalyptus aromatherapy" },
  { name: "Scottish Showers", detail: "Alternating hot and cold to boost circulation" },
  { name: "Outdoor Relaxation Room", detail: "Open-air pavilion with desert views" },
  { name: "Six Swimming Pools", detail: "Distributed across the property grounds" },
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
export default function AtacamaWellness() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.bgLight }}>
      <BrandNavigation pageType="property" backLink={{ label: "Alto Atacama", href: "/alto-atacama" }} />
      <HeroSection />
      <IntroSection />
      <ElementsSection />
      <VideoSection />
      <SignatureTreatmentsSection />
      <FacilitiesSection />
      <CTASection />
      <Footer pageType="property" bgColor={PALETTE.dark} textColor="#FFFFFF" propertyName="Alto Atacama" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO — Full-bleed image with title overlay
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
      <img
          loading="lazy"
        src={MEDIA.hero}
        alt="Spa Puri at Nayara Alto Atacama, desert wellness oasis"
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
          Flow Like Water, Breathe Like the Wind
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/50 text-[11px] tracking-[0.25em] uppercase mt-3"
          style={{ ...body, fontWeight: 500 }}
        >
          Spa Puri, Atacama Desert
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
    <section className={sectionPadding} style={{ backgroundColor: PALETTE.bgLight }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <DrawLine color={PALETTE.accent} className="mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <span
                className="text-[10px] tracking-[0.3em] uppercase block mb-4"
                style={{ ...body, fontWeight: 500, color: PALETTE.accent }}
              >
                Wellness
              </span>
              <h2
                className="text-2xl md:text-3xl leading-tight"
                style={{ ...heading, color: PALETTE.text }}
              >
                An Oasis of Tranquility
              </h2>
            </div>
            <div className="flex flex-col justify-end">
              <p
                className="text-[15px] leading-[1.9]"
                style={{ ...body, color: PALETTE.textMuted }}
              >
                Puri means "water" in Kunza, the native language of the Atacama. Along the banks of the San Pedro River, our spa draws from the desert's four elements to restore what the modern world takes away. We use sounds, aromas, and local artisanal organic products to create an environment where guests can relax and disconnect from everything except the present moment.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FOUR ELEMENTS — Water, Fire, Earth, Air
   ═══════════════════════════════════════════════════════════════ */
function ElementsSection() {
  return (
    <section className={sectionPadding} style={{ backgroundColor: PALETTE.bg }}>
      <div className={maxW}>
        <FadeIn>
          <span
            className="text-[10px] tracking-[0.3em] uppercase block mb-4"
            style={{ ...body, fontWeight: 500, color: PALETTE.accent }}
          >
            The Four Elements
          </span>
          <h2
            className="text-2xl md:text-3xl leading-tight mb-12"
            style={{ ...heading, color: PALETTE.text }}
          >
            Rooted in Ancestral Wisdom
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {ELEMENTS.map((el, i) => (
            <FadeIn key={el.name} delay={i * 0.1}>
              <div className="flex gap-5">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-lg"
                  style={{ backgroundColor: `${el.color}15` }}
                >
                  {el.icon}
                </div>
                <div>
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3
                      className="text-lg"
                      style={{ ...heading, color: PALETTE.text }}
                    >
                      {el.name}
                    </h3>
                    <span
                      className="text-[11px] tracking-[0.15em] uppercase"
                      style={{ ...body, fontWeight: 500, color: PALETTE.accent }}
                    >
                      {el.kunza}
                    </span>
                  </div>
                  <p
                    className="text-[14px] leading-[1.8]"
                    style={{ ...body, color: PALETTE.textMuted }}
                  >
                    {el.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   VIDEO — Wellness video with vertical still
   ═══════════════════════════════════════════════════════════════ */
function VideoSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: PALETTE.bgLight }}>
      <div className={maxW}>
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Horizontal video — 2 cols */}
            <div className="md:col-span-2 aspect-video overflow-hidden">
              <NativeVideo
                src={MEDIA.wellnessVideo}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Vertical still — 1 col */}
            <div className="hidden md:block aspect-[3/4] overflow-hidden">
              <img
          loading="lazy"
                src={MEDIA.verticalStill}
                alt="Spa treatment at Nayara Alto Atacama"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SIGNATURE TREATMENTS — Curated selection
   ═══════════════════════════════════════════════════════════════ */
function SignatureTreatmentsSection() {
  return (
    <section className={sectionPadding} style={{ backgroundColor: PALETTE.bg }}>
      <div className={maxW}>
        <FadeIn>
          <span
            className="text-[10px] tracking-[0.3em] uppercase block mb-4"
            style={{ ...body, fontWeight: 500, color: PALETTE.accent }}
          >
            Signature Rituals
          </span>
          <h2
            className="text-2xl md:text-3xl leading-tight mb-12"
            style={{ ...heading, color: PALETTE.text }}
          >
            Treatments Inspired by the Desert
          </h2>
        </FadeIn>

        <div className="space-y-8">
          {SIGNATURE_TREATMENTS.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.05}>
              <div
                className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-4 md:gap-8 items-start py-6 border-b"
                style={{ borderColor: `${PALETTE.accent}20` }}
              >
                <div>
                  <h3
                    className="text-lg mb-1"
                    style={{ ...heading, color: PALETTE.text }}
                  >
                    {t.name}
                  </h3>
                  <p
                    className="text-[14px] leading-[1.7]"
                    style={{ ...body, color: PALETTE.textMuted }}
                  >
                    {t.description}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span
                    className="text-[11px] tracking-[0.1em] uppercase px-3 py-1 rounded-full"
                    style={{ ...body, fontWeight: 500, color: PALETTE.accent, backgroundColor: `${PALETTE.accent}10` }}
                  >
                    {t.element}
                  </span>
                </div>
                <span
                  className="text-[13px]"
                  style={{ ...body, color: PALETTE.textMuted }}
                >
                  {t.duration}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FACILITIES — Spa amenities
   ═══════════════════════════════════════════════════════════════ */
function FacilitiesSection() {
  return (
    <section className={sectionPadding} style={{ backgroundColor: PALETTE.bgLight }}>
      <div className={maxW}>
        <FadeIn>
          <span
            className="text-[10px] tracking-[0.3em] uppercase block mb-4"
            style={{ ...body, fontWeight: 500, color: PALETTE.accent }}
          >
            Facilities
          </span>
          <h2
            className="text-2xl md:text-3xl leading-tight mb-12"
            style={{ ...heading, color: PALETTE.text }}
          >
            Where Stone Meets Water
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES.map((f, i) => (
            <FadeIn key={f.name} delay={i * 0.05}>
              <div className="py-5">
                <h4
                  className="text-[15px] mb-1"
                  style={{ ...body, fontWeight: 500, color: PALETTE.text }}
                >
                  {f.name}
                </h4>
                <p
                  className="text-[13px] leading-[1.7]"
                  style={{ ...body, color: PALETTE.textMuted }}
                >
                  {f.detail}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Spa policies */}
        <FadeIn delay={0.3}>
          <div className="mt-16 pt-8 border-t" style={{ borderColor: `${PALETTE.accent}20` }}>
            <p
              className="text-[12px] leading-[1.8] max-w-[700px]"
              style={{ ...body, color: PALETTE.textMuted }}
            >
              Reserve treatments at least 2 hours ahead by calling #965. Arrive 15 minutes before your appointment. Cancellations within 2 hours incur a 50% charge. Spa is for guests 16 years and older. Hours: 9:30 AM to 9:00 PM. Prices include VAT.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CTA — Return to property / Begin your journey
   ═══════════════════════════════════════════════════════════════ */
function CTASection() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-10" style={{ backgroundColor: PALETTE.bg }}>
      <div className={maxW + " text-center"}>
        <FadeIn>
          <h2
            className="text-2xl md:text-3xl mb-4"
            style={{ ...heading, color: PALETTE.text }}
          >
            Restore in the Desert
          </h2>
          <p
            className="text-[15px] leading-[1.8] max-w-[600px] mx-auto mb-8"
            style={{ ...body, color: PALETTE.textMuted }}
          >
            Where the desert's silence becomes your sanctuary. Let the four elements of the Atacama guide your renewal at Spa Puri.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/alto-atacama"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full text-[12px] tracking-[0.15em] uppercase transition-all duration-300 hover:opacity-80"
              style={{ ...body, fontWeight: 500, backgroundColor: PALETTE.dark, color: PALETTE.bone }}
            >
              Back to Alto Atacama
            </Link>
            <Link
              href="/alto-atacama/gastronomy"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full text-[12px] tracking-[0.15em] uppercase border transition-all duration-300 hover:opacity-80"
              style={{ ...body, fontWeight: 500, borderColor: PALETTE.dark, color: PALETTE.dark }}
            >
              Desert to Table
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
