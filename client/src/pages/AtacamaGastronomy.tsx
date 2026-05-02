/*
 * ATACAMA GASTRONOMY — Dedicated gastronomy sub-page
 * Accessible from Alto Atacama home via "Explore More" CTA
 * Uses Atacama "Mars" palette and motion system
 */

import { motion } from "framer-motion";
import NativeVideo from "@/components/NativeVideo";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import { atacamaDiningCollection } from "@/data/dining";
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
  flamingos: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/flamingos_1001c3d8.mp4",
};

const sectionPadding = "py-20 md:py-32 px-6 md:px-10";
const maxW = "max-w-[1200px] mx-auto";

export default function AtacamaGastronomy() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.gradientEnd }}>
      <BrandNavigation pageType="property" hideCenterLabel />
      <GastronomyHero />
      <GastronomyContent />
      <Footer pageType="property" bgColor="#6F463D" />textColor="#FFFFFF" />textColor="#FFFFFF" />
    </div>
  );
}

function GastronomyHero() {
  return (
    <Parallax offset={50} className="w-full" style={{ aspectRatio: "2/1" }}>
      <div className="relative w-full aspect-[2/1]">
        <NativeVideo src={CDN.flamingos} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none" />
        <div className="absolute bottom-8 md:bottom-12 left-6 md:left-10 z-10">
          <TextReveal as="h1" delay={0.2}>
            <span
              className="text-white text-2xl md:text-4xl lg:text-5xl tracking-wide"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              Desert Dining
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

function GastronomyContent() {
  const restaurants = Array.isArray(atacamaDiningCollection)
    ? atacamaDiningCollection
    : [atacamaDiningCollection];

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
                className="text-[11px] tracking-[0.1em] mb-4"
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
