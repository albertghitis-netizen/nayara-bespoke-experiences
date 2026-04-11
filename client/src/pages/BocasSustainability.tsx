/*
 * BOCAS DEL TORO SUSTAINABILITY — Dedicated sustainability sub-page
 * Mirrors Alto Atacama secondary page structure with Caribbean ocean palette
 */

import { motion } from "framer-motion";
import NativeVideo from "@/components/NativeVideo";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import PillarCrossLink from "@/components/PillarCrossLink";
import {
  AnimateOnScroll,
  StaggerOnScroll,
  TextReveal,
  fadeUp,
  staggerContainer,
} from "@/components/motion";

const PALETTE = {
  primary: "#1B6B7D",
  secondary: "#3A8F9E",
  accent: "#5AABB5",
  gradientStart: "#F4F8F9",
  gradientEnd: "#EDF4F5",
  text: "#152B30",
  textSecondary: "#4A6B72",
  textTertiary: "#8AABB3",
  divider: "#D0E2E6",
};

const CDN_BASE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

const CDN = {
  heroVideo: `${CDN_BASE}/bocas-drone-vertical_e44907ce.mp4`,
};

const sectionPadding = "py-20 md:py-32 px-6 md:px-10";
const maxW = "max-w-[1200px] mx-auto";

const initiatives = [
  {
    title: "Marine Conservation",
    desc: "Protecting the coral reefs and marine ecosystems of the Bocas del Toro archipelago through reef monitoring, sustainable diving practices, and partnerships with marine biologists.",
  },
  {
    title: "Mangrove Restoration",
    desc: "Actively restoring and protecting the mangrove forests that surround our private island, providing critical nursery habitat for fish, crustaceans, and migratory birds.",
  },
  {
    title: "Plastic-Free Island",
    desc: "Committed to eliminating single-use plastics across the entire resort. All amenities, packaging, and operations are designed to minimize waste in this fragile island ecosystem.",
  },
  {
    title: "Indigenous Community Support",
    desc: "Partnering with the Ngäbe-Buglé indigenous communities of Bocas del Toro through fair employment, cultural exchange programs, and support for traditional crafts and practices.",
  },
];

export default function BocasSustainability() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.gradientStart }}>
      <BrandNavigation pageType="property" />
      <SustainabilityHero />
      <SustainabilityContent />
      <Footer pageType="property" />
    </div>
  );
}

function SustainabilityHero() {
  return (
    <div className="relative overflow-hidden" style={{ height: "50vh", minHeight: 320 }}>
      <div className="absolute inset-0">
        <NativeVideo src={CDN.heroVideo} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(27, 107, 125, 0.80)" }} />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-end pb-8 md:pb-12 px-6 md:px-10">
        <TextReveal as="h1" delay={0.2}>
          <span
            className="text-white text-2xl md:text-4xl lg:text-5xl tracking-wide"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Protecting the Caribbean
          </span>
        </TextReveal>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-white/50 text-[11px] tracking-[0.2em] uppercase mt-3"
          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
        >
          Nayara Bocas del Toro
        </motion.p>
      </div>
    </div>
  );
}

function SustainabilityContent() {
  return (
    <section className={sectionPadding} style={{ backgroundColor: PALETTE.gradientStart }}>
      <div className={maxW}>
        <StaggerOnScroll
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12"
        >
          {initiatives.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="pl-6"
              style={{ borderLeft: `2px solid ${PALETTE.primary}30` }}
            >
              <h3
                className="text-[17px] mb-3"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: PALETTE.text }}
              >
                {item.title}
              </h3>
              <p
                className="text-[14px] leading-[1.7]"
                style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </StaggerOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.3}>
          <div className="mt-16">
            <PillarCrossLink pillar="sustainability" />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
