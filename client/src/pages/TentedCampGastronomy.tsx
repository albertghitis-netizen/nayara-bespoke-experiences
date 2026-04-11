/*
 * TENTED CAMP GASTRONOMY — Dedicated gastronomy sub-page
 * Mirrors Alto Atacama secondary page structure with rainforest palette
 */

import { motion } from "framer-motion";
import NativeVideo from "@/components/NativeVideo";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import { costaRicaDining } from "@/data/dining";
import PillarCrossLink from "@/components/PillarCrossLink";
import {
  AnimateOnScroll,
  StaggerOnScroll,
  TextReveal,
  DrawLine,
  Parallax,
  fadeUp,
  staggerContainer,
} from "@/components/motion";

const PALETTE = {
  primary: "#2D6A4F",
  secondary: "#52796F",
  accent: "#74A57F",
  gradientStart: "#F5F7F4",
  gradientEnd: "#EFF2ED",
  text: "#1B2A22",
  textSecondary: "#5A6B5E",
  textTertiary: "#9AA89E",
  divider: "#D5DDD8",
};

const CDN_BASE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

const CDN = {
  heroVideo: `${CDN_BASE}/wildlife-reel_7c30f53f.mp4`,
};

const sectionPadding = "py-20 md:py-32 px-6 md:px-10";
const maxW = "max-w-[1200px] mx-auto";

export default function TentedCampGastronomy() {
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
    <Parallax offset={50} className="w-full" style={{ height: "45vh", minHeight: 280 }}>
      <div className="relative w-full h-[55vh]">
        <NativeVideo src={CDN.heroVideo} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
        <div className="absolute bottom-8 md:bottom-12 left-6 md:left-10 z-10">
          <TextReveal as="h1" delay={0.2}>
            <span
              className="text-white text-2xl md:text-4xl lg:text-5xl tracking-wide"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              Rainforest Dining
            </span>
          </TextReveal>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white/50 text-[11px] tracking-[0.2em] uppercase mt-3"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            Nayara Tented Camp
          </motion.p>
        </div>
      </div>
    </Parallax>
  );
}

function GastronomyContent() {
  const restaurants = costaRicaDining.restaurants;

  return (
    <section className={sectionPadding} style={{ backgroundColor: PALETTE.gradientEnd }}>
      <div className={maxW}>
        <StaggerOnScroll
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16"
        >
          {restaurants.map((restaurant: any, i: number) => (
            <motion.div key={i} variants={fadeUp}>
              <DrawLine color={PALETTE.primary} className="mb-6" />
              <h3
                className="text-[20px] mb-2"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: PALETTE.text }}
              >
                {restaurant.name}
              </h3>
              <p
                className="text-[11px] tracking-[0.1em] uppercase mb-4"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.accent }}
              >
                {restaurant.cuisine}
              </p>
              <p
                className="text-[14px] leading-[1.8]"
                style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
              >
                {restaurant.description}
              </p>
            </motion.div>
          ))}
        </StaggerOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.3}>
          <div className="mt-16">
            <PillarCrossLink pillar="gastronomy" />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
