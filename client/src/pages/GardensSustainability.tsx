/*
 * GARDENS SUSTAINABILITY — Dedicated sustainability sub-page
 * Gardens palette with rainforest conservation focus
 */

import { motion } from "framer-motion";
import NativeVideo from "@/components/NativeVideo";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import {
  AnimateOnScroll,
  TextReveal,
  fadeUp,
} from "@/components/motion";

const PALETTE = {
  primary: "#4A5E3C",
  secondary: "#6B5B4A",
  accent: "#8B9A7A",
  gradientStart: "#F5F1EB",
  gradientEnd: "#EBF0E6",
  text: "#2C2418",
  textSecondary: "#7A6F63",
  textTertiary: "#B0A89E",
  divider: "#E2DDD5",
};

const CDN_BASE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

const CDN = {
  heroVideo: `${CDN_BASE}/waterfall_19f4cbcf.mp4`,
  landscapeImg: `${CDN_BASE}/frog-tour-horizontal_5269da4d.mp4`,
};

const sectionPadding = "py-20 md:py-32 px-6 md:px-10";
const maxW = "max-w-[1200px] mx-auto";

const initiatives = [
  {
    title: "Rainforest Reforestation",
    description:
      "Over 30 acres of former pastureland have been returned to native rainforest through our ongoing reforestation program. We plant over 2,000 native trees annually, creating wildlife corridors that connect fragmented habitats around the Arenal Volcano.",
  },
  {
    title: "Wildlife Conservation",
    description:
      "Our on-site wildlife program monitors and protects resident species including toucans, sloths, poison dart frogs, and howler monkeys. We partner with local biologists to track populations and maintain the biodiversity that makes Arenal one of the most ecologically rich regions on Earth.",
  },
  {
    title: "Organic Farm & Zero-Waste Kitchen",
    description:
      "Our organic gardens supply fresh herbs, vegetables, and fruits to all five restaurants. Kitchen waste is composted on-site and returned to the soil. We have eliminated single-use plastics across all properties and source 90% of ingredients from local farms within 50 kilometers.",
  },
  {
    title: "Community Partnership",
    description:
      "We employ over 400 local residents and invest in education, healthcare, and infrastructure for surrounding communities. Our cultural programs support local artisans, and we fund scholarships for students from La Fortuna and neighboring villages.",
  },
];

export default function GardensSustainability() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.gradientEnd }}>
      <BrandNavigation pageType="property" />
      <SustainabilityHero />
      <SustainabilityContent />
      <Footer pageType="property" />
    </div>
  );
}

function SustainabilityHero() {
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
            Rooted in the Rainforest
          </span>
        </TextReveal>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-white/50 text-[11px] tracking-[0.2em] uppercase mt-3"
          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
        >
          Nayara Gardens
        </motion.p>
      </div>
    </section>
  );
}

function SustainabilityContent() {
  return (
    <section className={sectionPadding} style={{ backgroundColor: PALETTE.gradientEnd }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[15px] leading-[1.8] max-w-3xl mb-16"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
          >
            Sustainability is not a program at Nayara Gardens — it is the foundation on which every
            decision is made. From the reforestation of degraded land to zero-waste kitchens and deep
            community partnerships, we believe luxury and responsibility grow from the same soil.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
          {initiatives.map((item, i) => (
            <AnimateOnScroll key={item.title} variants={fadeUp} delay={i * 0.1}>
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
                  className="text-[18px] mb-3"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: PALETTE.text }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[14px] leading-[1.7]"
                  style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
                >
                  {item.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll variants={fadeUp}>
          <div className="text-center mt-4">
            <a
              href="/gardens"
              className="inline-block text-[11px] tracking-[0.2em] uppercase pb-1"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                color: PALETTE.primary,
                borderBottom: `1px solid ${PALETTE.primary}40`,
              }}
            >
              Explore All Sustainability
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
