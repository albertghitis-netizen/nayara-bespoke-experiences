/*
 * SPRINGS WELLNESS — Dedicated wellness/spa sub-page
 * Uses shared Costa Rica treatments data with Springs palette
 */

import { useState } from "react";
import { motion } from "framer-motion";
import NativeVideo from "@/components/NativeVideo";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import { properties } from "@/data/properties";
import {
  AnimateOnScroll,
  TextReveal,
  fadeUp,
} from "@/components/motion";

const PALETTE = {
  primary: "#3D5E4A",
  secondary: "#5A5650",
  accent: "#7A9484",
  gradientStart: "#F7F5F0",
  gradientEnd: "#E8EEEA",
  text: "#3B2B26",
  textSecondary: "#67737C",
  textTertiary: "#9A9086",
  divider: "#E6DFD5",
};

const CDN_BASE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

const CDN = {
  heroVideo: `${CDN_BASE}/costa-rica-spa-springs_89d85927.mp4`,
};

const sectionPadding = "py-20 md:py-32 px-6 md:px-10";
const maxW = "max-w-[1200px] mx-auto";

const property = properties.find((p) => p.id === "springs")!;
const categories = property.spaCategories.filter((c) => c.id !== "all");
const treatments = property.treatments;

export default function SpringsWellness() {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id ?? "");
  const filtered = treatments.filter((t) => t.category === activeCategory);

  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.gradientEnd }}>
      <BrandNavigation pageType="property" hideCenterLabel />
      <WellnessHero />
      <section className={sectionPadding} style={{ backgroundColor: PALETTE.gradientEnd }}>
        <div className={maxW}>
          <AnimateOnScroll variants={fadeUp}>
            <p
              className="text-[15px] leading-[1.8] max-w-3xl mb-12"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
            >
              Private hot spring plunge pools, world-class spa treatments, and the healing energy of
              the Arenal Volcano. The Springs Spa is an adults-only wellness sanctuary where every
              detail is designed for restoration — from volcanic mud wraps to couples' rituals in
              open-air treatment rooms surrounded by rainforest.
            </p>
          </AnimateOnScroll>

          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="px-5 py-2 rounded-full text-[11px] tracking-[0.15em] transition-all duration-300"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  backgroundColor: activeCategory === cat.id ? PALETTE.primary : "transparent",
                  color: activeCategory === cat.id ? "#fff" : PALETTE.textSecondary,
                  border: `1px solid ${activeCategory === cat.id ? PALETTE.primary : PALETTE.divider}`,
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {filtered.map((t, i) => (
              <AnimateOnScroll key={t.name} variants={fadeUp} delay={i * 0.08}>
                <div
                  className="p-6 md:p-8 h-full"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.4)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "12px",
                    borderBottom: `2px solid ${PALETTE.divider}`,
                  }}
                >
                  <h3
                    className="text-[18px] mb-2"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: PALETTE.text }}
                  >
                    {t.name}
                  </h3>
                  <div className="flex items-center gap-3 mb-4">
                    {t.duration && (
                      <span
                        className="text-[11px] tracking-[0.1em]"
                        style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.primary }}
                      >
                        {t.duration}
                      </span>
                    )}
                    {t.price && (
                      <span
                        className="text-[11px] tracking-[0.1em]"
                        style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.textTertiary }}
                      >
                        {t.price}
                      </span>
                    )}
                  </div>
                  <p
                    className="text-[14px] leading-[1.7]"
                    style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
                  >
                    {t.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll variants={fadeUp}>
            <div className="text-center mt-16">
              <a
                href="/springs"
                className="inline-block text-[11px] tracking-[0.2em] pb-1"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                  color: PALETTE.primary,
                  borderBottom: `1px solid ${PALETTE.primary}40`,
                }}
              >
                Explore All Wellness
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
      <Footer pageType="property" />
    </div>
  );
}

function WellnessHero() {
  return (
    <section className="relative h-[50vh] min-h-[320px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <NativeVideo src={CDN.heroVideo} className="w-full h-full object-cover" hasAudio />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50 pointer-events-none" />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-end pb-8 md:pb-12 px-6 md:px-10">
        <TextReveal as="h1" delay={0.2}>
          <span
            className="text-white text-2xl md:text-4xl lg:text-5xl tracking-wide"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Springs Spa
          </span>
        </TextReveal>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-white/50 text-[11px] tracking-[0.2em] mt-3"
          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
        >
          Nayara Springs
        </motion.p>
      </div>
    </section>
  );
}
