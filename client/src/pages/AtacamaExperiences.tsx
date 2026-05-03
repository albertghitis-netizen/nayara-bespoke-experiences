/*
 * ATACAMA EXPERIENCES — Dedicated experiences sub-page
 * Accessible from Alto Atacama home via "Explore More" CTA
 * Uses Atacama "Mars" palette and motion system
 */

import { useState } from "react";
import { motion } from "framer-motion";
import NativeVideo from "@/components/NativeVideo";
import BlobVideo from "@/components/BlobVideo";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import { properties, type Property, type Excursion } from "@/data/properties";
import PillarCrossLink from "@/components/PillarCrossLink";
import {
  AnimateOnScroll,
  StaggerOnScroll,
  TextReveal,
  Parallax,
  fadeUp,
  staggerContainer,
} from "@/components/motion";

const atacama = properties.find((p: Property) => p.id === "alto-atacama")!;

const PALETTE = {
  primary: "#6F463D",
  secondary: "#9A9086",
  accent: "#C29B70",
  gradientStart: "#F7F5F0",
  gradientEnd: "#F2ECE4",
  text: "#3B2B26",
  textSecondary: "#67737C",
  textTertiary: "#9A9086",
  divider: "#E6DFD5",
};

const CDN = {
  desertExploration: "/manus-storage/atacama-exp-stargazing_c8a71e15.jpg",
};

const sectionPadding = "py-20 md:py-32 px-6 md:px-10";
const maxW = "max-w-[1200px] mx-auto";

export default function AtacamaExperiences() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.gradientStart }}>
      <BrandNavigation pageType="property" hideCenterLabel />
      <ExperiencesHero />
      <ExperiencesContent />
      <Footer pageType="property" bgColor="#6F463D"  textColor="#FFFFFF" />
    </div>
  );
}

function ExperiencesHero() {
  return (
    <Parallax offset={60} className="w-full" style={{ aspectRatio: "2/1" }}>
      <div className="relative w-full aspect-[2/1]">
        <img src={CDN.desertExploration} alt="Stargazing in the Atacama Desert" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none" />
        <div className="absolute bottom-8 md:bottom-12 left-6 md:left-10 z-10">
          <TextReveal as="h1" delay={0.2}>
            <span
              className="text-white text-2xl md:text-4xl lg:text-5xl tracking-wide"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              Desert Explorations
            </span>
          </TextReveal>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white/50 text-[11px] tracking-[0.2em] mt-3"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            Nayara Alto Atacama
          </motion.p>
        </div>
      </div>
    </Parallax>
  );
}

function ExperiencesContent() {
  const categories = (atacama.excursionCategories || []).filter(c => c.id !== "all");
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id || "landscape");
  const filtered = atacama.excursions.filter((e: Excursion) => e.category === activeCategory);

  return (
    <section className={sectionPadding} style={{ backgroundColor: PALETTE.gradientStart }}>
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
                    backgroundColor: activeCategory === cat.id ? PALETTE.primary : "transparent",
                    color: activeCategory === cat.id ? "#F7F5F0" : PALETTE.textSecondary,
                    border: `1px solid ${activeCategory === cat.id ? PALETTE.primary : PALETTE.divider}`,
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
            <motion.div
              key={excursion.id}
              variants={fadeUp}
              className="p-6 md:p-8 transition-all duration-500 hover:translate-y-[-2px]"
              style={{
                backgroundColor: "rgba(255,255,255,0.4)",
                backdropFilter: "blur(8px)",
                borderRadius: "12px",
                borderBottom: `2px solid ${PALETTE.divider}`,
              }}
              whileHover={{ borderBottomColor: PALETTE.primary }}
            >
              <h3
                className="text-[17px] mb-2"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: PALETTE.text }}
              >
                {excursion.name}
              </h3>
              {excursion.duration && (
                <p
                  className="text-[11px] tracking-[0.1em] mb-4"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.accent }}
                >
                  {excursion.duration}
                  {excursion.price ? ` · ${excursion.price}` : ""}
                </p>
              )}
              <p
                className="text-[13px] leading-[1.7]"
                style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
              >
                {excursion.description}
              </p>
            </motion.div>
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
