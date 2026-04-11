/*
 * HANGAROA SUSTAINABILITY — Dedicated sustainability sub-page
 * Hangaroa palette with Easter Island conservation focus
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

const initiatives = [
  {
    title: "Rapa Nui Heritage Preservation",
    description:
      "Nayara Hangaroa partners directly with the Rapa Nui community to protect and preserve the island's archaeological sites, oral traditions, and living culture. We fund restoration projects, support cultural education programs, and ensure that tourism benefits the island's indigenous community first.",
  },
  {
    title: "Native Reforestation",
    description:
      "Easter Island lost nearly all of its native forest centuries ago. Our reforestation program plants thousands of endemic species each year — including toromiro, mahute, and makoi — working to restore the island's original ecosystem and provide habitat for native birds and insects.",
  },
  {
    title: "Ocean Conservation",
    description:
      "The waters surrounding Rapa Nui are among the most pristine in the Pacific. We support marine research programs that monitor coral health, fish populations, and ocean temperatures, and we advocate for the expansion of the Rapa Nui Marine Protected Area — one of the largest in the world.",
  },
  {
    title: "Renewable Energy Transition",
    description:
      "As one of the most remote inhabited islands on Earth, energy independence is critical. Nayara Hangaroa is transitioning to 100% renewable energy through solar panels and wind turbines, reducing the island's dependence on imported diesel fuel and setting a model for sustainable island tourism.",
  },
];

export default function HangaroaSustainability() {
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
            Guardians of Rapa Nui
          </span>
        </TextReveal>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-white/50 text-[11px] tracking-[0.2em] uppercase mt-3"
          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
        >
          Nayara Hangaroa
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
            On one of the most remote islands on Earth, sustainability is not optional — it is survival.
            Nayara Hangaroa is committed to preserving Rapa Nui's extraordinary archaeological heritage,
            restoring its native ecosystems, and ensuring that the island's Polynesian culture thrives
            for generations to come.
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
              href="/hangaroa"
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
