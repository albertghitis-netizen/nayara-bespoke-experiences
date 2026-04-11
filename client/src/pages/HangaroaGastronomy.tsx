/*
 * HANGAROA GASTRONOMY — Dedicated dining sub-page
 * Uses Hangaroa dining data with Easter Island palette
 */

import { motion } from "framer-motion";
import NativeVideo from "@/components/NativeVideo";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import { hangaroaDining } from "@/data/dining";
import {
  AnimateOnScroll,
  TextReveal,
  fadeUp,
} from "@/components/motion";

const PALETTE = {
  primary: "#5E5549",
  secondary: "#8B6B3E",
  accent: "#7A8568",
  gradientStart: "#F5F1EB",
  gradientEnd: "#EDEAE4",
  text: "#2C2418",
  textSecondary: "#7A6F63",
  textTertiary: "#B0A89E",
  divider: "#E2DDD5",
};

const CDN_BASE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

const CDN = {
  heroVideo: `${CDN_BASE}/hangaroa-hero-audio_f26eed73.mp4`,
};

const sectionPadding = "py-20 md:py-32 px-6 md:px-10";
const maxW = "max-w-[1200px] mx-auto";

const dining = hangaroaDining;

export default function HangaroaGastronomy() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.gradientEnd }}>
      <BrandNavigation pageType="property" />
      <GastronomyHero />
      <GastronomyContent />
      <Footer pageType="property" />
    </div>
  );
}

function GastronomyHero() {
  return (
    <section className="relative h-[50vh] min-h-[320px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <NativeVideo src={CDN.heroVideo} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50" />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-end pb-8 md:pb-12 px-6 md:px-10">
        <TextReveal as="h1" delay={0.2}>
          <span
            className="text-white text-2xl md:text-4xl lg:text-5xl tracking-wide"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Pacific Island Cuisine
          </span>
        </TextReveal>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-white/50 text-[11px] tracking-[0.2em] mt-3"
          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
        >
          Nayara Hangaroa
        </motion.p>
      </div>
    </section>
  );
}

function GastronomyContent() {
  return (
    <section className={sectionPadding} style={{ backgroundColor: PALETTE.gradientEnd }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[15px] leading-[1.8] max-w-3xl mb-16"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
          >
            {dining.description}
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
          {dining.restaurants.map((restaurant, i) => (
            <AnimateOnScroll key={restaurant.name} variants={fadeUp} delay={i * 0.1}>
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
                  className="text-[20px] mb-2"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: PALETTE.text }}
                >
                  {restaurant.name}
                </h3>
                {restaurant.cuisine && (
                  <p
                    className="text-[11px] tracking-[0.1em] mb-4"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.primary }}
                  >
                    {restaurant.cuisine}
                  </p>
                )}
                <p
                  className="text-[14px] leading-[1.7] mb-4"
                  style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
                >
                  {restaurant.description}
                </p>
                {restaurant.hours && (
                  <p
                    className="text-[12px]"
                    style={{ fontFamily: "var(--font-body)", color: PALETTE.textTertiary }}
                  >
                    {restaurant.hours}
                  </p>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll variants={fadeUp}>
          <div className="text-center mt-4">
            <a
              href="/hangaroa"
              className="inline-block text-[11px] tracking-[0.2em] pb-1"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                color: PALETTE.primary,
                borderBottom: `1px solid ${PALETTE.primary}40`,
              }}
            >
              Explore All Dining
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
