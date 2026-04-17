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
      <BrandNavigation pageType="property" hideCenterLabel />
      <SustainabilityHero />
      <SustainabilityContent />
      <Footer pageType="property" />
    </div>
  );
}

function SustainabilityHero() {
  return (
    <div className="relative overflow-hidden" style={{ aspectRatio: "2/1" }}>
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
          className="text-white/50 text-[11px] tracking-[0.2em] mt-3"
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

        {/* ── Long-Form Video & Blog Links ── */}
        <AnimateOnScroll variants={fadeUp} delay={0.3}>
          <div className="mt-20 pt-16" style={{ borderTop: `1px solid ${PALETTE.divider}` }}>
            <p
              className="text-[11px] tracking-[0.2em] mb-6"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.primary }}
            >
              From Nayara Horizons
            </p>
            <h3
              className="text-xl md:text-2xl mb-4"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
            >
              Pioneering Sustainable Luxury
            </h3>
            <p
              className="text-[14px] leading-[1.7] max-w-[600px] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
            >
              Leo Ghitis explores the journey of building Nayara Resorts — a brand that seamlessly blends ultra-luxury with profound environmental stewardship. From reforesting a decimated mountain to achieving carbon neutrality.
            </p>

            {/* YouTube embed */}
            <div className="relative w-full max-w-[640px] mb-8" style={{ aspectRatio: "16/9" }}>
              <iframe
                src="https://www.youtube.com/embed/7l072Yr__pE"
                title="Pioneering Sustainable Luxury with Nayara Resorts"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-lg"
                style={{ border: "none" }}
              />
            </div>

            {/* Blog links */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://blog.nayararesorts.com/setting-the-standard-green-globe-certification"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                  fontSize: "12px",
                  letterSpacing: "0.08em",
                  color: "#fff",
                  backgroundColor: PALETTE.primary,
                }}
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
                Read: Setting the Standard — Green Globe Certification
              </a>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.4}>
          <div className="mt-16">
            <PillarCrossLink pillar="sustainability" />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
