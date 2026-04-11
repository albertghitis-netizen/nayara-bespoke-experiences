/*
 * TENTED CAMP SUSTAINABILITY — Dedicated sustainability sub-page
 * Mirrors Alto Atacama secondary page structure with rainforest palette
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
  heroVideo: `${CDN_BASE}/costa-rica-toucan_a70ad74a.mp4`,
};

const sectionPadding = "py-20 md:py-32 px-6 md:px-10";
const maxW = "max-w-[1200px] mx-auto";

const initiatives = [
  {
    title: "Rainforest Conservation",
    desc: "Protecting over 380 acres of primary and secondary rainforest surrounding the resort, providing critical habitat for hundreds of bird, mammal, and amphibian species in the Arenal Volcano region.",
  },
  {
    title: "Wildlife Corridors",
    desc: "Maintaining and expanding biological corridors that connect our property to Arenal Volcano National Park, ensuring safe passage for jaguars, ocelots, sloths, and other wildlife.",
  },
  {
    title: "Organic Gardens",
    desc: "Growing herbs, vegetables, and fruits in our on-site organic gardens, reducing food miles and providing the freshest ingredients for our five restaurants.",
  },
  {
    title: "Community Partnership",
    desc: "Supporting local communities in La Fortuna through employment, education programs, and cultural preservation initiatives that strengthen the region's social fabric.",
  },
];

export default function TentedCampSustainability() {
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
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(45, 106, 79, 0.80)" }} />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-end pb-8 md:pb-12 px-6 md:px-10">
        <TextReveal as="h1" delay={0.2}>
          <span
            className="text-white text-2xl md:text-4xl lg:text-5xl tracking-wide"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Protecting the Rainforest
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
