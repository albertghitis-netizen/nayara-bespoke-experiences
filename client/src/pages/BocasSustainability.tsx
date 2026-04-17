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
  primary: "#2A6489",
  secondary: "#5A6F7B",
  accent: "#7FA9C9",
  gradientStart: "#F7F5F0",
  gradientEnd: "#E2ECEE",
  text: "#3B2B26",
  textSecondary: "#67737C",
  textTertiary: "#9A9086",
  divider: "#E6DFD5",
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
      <BrandNavigation pageType="property" hideCenterLabel />
      <SustainabilityHero />
      <SustainabilityContent />
      <Footer pageType="property" bgColor="#1B2534" />
    </div>
  );
}

function SustainabilityHero() {
  return (
    <div className="relative overflow-hidden" style={{ aspectRatio: "2/1" }}>
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
          className="text-white/50 text-[11px] tracking-[0.2em] mt-3"
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
              Redefining Luxury: Regenerative Travel
            </h3>
            <p
              className="text-[14px] leading-[1.7] max-w-[600px] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
            >
              Recorded live at ILTM Cannes, Leo Ghitis shares how Nayara Resorts is pioneering regenerative travel through ambitious environmental restoration and deep community support — from powering an off-grid island resort in Panama to coral reef partnerships in Bocas del Toro.
            </p>

            {/* YouTube embed */}
            <div className="relative w-full max-w-[640px] mb-8" style={{ aspectRatio: "16/9" }}>
              <iframe
                src="https://www.youtube.com/embed/FPxFzOkKhbw"
                title="Redefining Luxury: Regenerative Travel and Social Impact"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-lg"
                style={{ border: "none" }}
              />
            </div>

            {/* Blog links */}
            <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
              <a
                href="https://blog.nayararesorts.com/nayara-resorts-partners-with-one-ocean-planet"
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
                Read: Nayara Partners with One Ocean Planet
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
