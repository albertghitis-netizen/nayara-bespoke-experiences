/*
 * SPRINGS SUSTAINABILITY — Dedicated sustainability sub-page
 * Springs palette — Green Globe Certification
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import NativeVideo from "@/components/NativeVideo";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
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
  heroVideo: `${CDN_BASE}/wildlife-reel_7c30f53f.mp4`,
};

const sectionPadding = "py-20 md:py-32 px-6 md:px-10";
const maxW = "max-w-[1200px] mx-auto";

export default function SpringsSustainability() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.gradientEnd }}>
      <BrandNavigation pageType="property" hideCenterLabel />
      <SustainabilityHero />
      <GreenGlobeSection />
      <JournalSection />
      <Footer pageType="property" bgColor="#3B6E7B" />textColor="#FFFFFF" />textColor="#FFFFFF" />
    </div>
  );
}

function SustainabilityHero() {
  return (
    <section className="relative aspect-[2/1] w-full overflow-hidden">
      <div className="absolute inset-0">
        <NativeVideo src={CDN.heroVideo} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50 pointer-events-none" />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-end pb-8 md:pb-12 px-6 md:px-10">
        <TextReveal as="h1" delay={0.2}>
          <span
            className="text-white text-2xl md:text-4xl lg:text-5xl tracking-wide"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Volcanic Stewardship
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

function GreenGlobeSection() {
  return (
    <section className={sectionPadding} style={{ backgroundColor: PALETTE.gradientEnd }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[15px] leading-[1.8] max-w-3xl mb-12"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
          >
            At Nayara Springs, sustainability is woven into the volcanic landscape itself. From
            geothermal energy to protected rainforest corridors, every element of the adults-only
            experience is designed to honor the extraordinary ecosystem that makes this place possible.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.textTertiary }}
          >
            Certification
          </p>
          <h2
            className="text-2xl md:text-3xl mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
          >
            Green Globe Certification
          </h2>
          <p
            className="text-[15px] leading-[1.8] max-w-[700px]"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
          >
            Nayara Springs holds Green Globe Certification — the global standard for sustainable tourism,
            recognizing our commitment to geothermal energy use, rainforest corridor protection, and
            responsible operations in the Arenal Volcano region. This certification reflects our dedication
            to harnessing volcanic energy and protecting primary rainforest while delivering an exceptional
            adults-only experience.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.2}>
          <div className="mt-12">
            <Link
              href="/journal"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "12px", letterSpacing: "0.08em", color: "#fff", backgroundColor: PALETTE.primary }}
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
              Read: Green Globe Certification at Nayara Springs
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

function JournalSection() {
  return (
    <section
      className="py-16 md:py-24 px-6 md:px-10"
      style={{ backgroundColor: PALETTE.gradientStart }}
    >
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.textTertiary }}
          >
            From Nayara Journal
          </p>
          <h3
            className="text-xl md:text-2xl mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
          >
            Stories of Stewardship
          </h3>
          <p
            className="text-[14px] leading-[1.7] max-w-[600px] mb-8"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
          >
            Explore our journal for deeper stories about conservation, community, and the people behind
            Nayara's sustainability efforts across all our destinations.
          </p>
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-[12px] tracking-[0.1em] transition-colors"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: `${PALETTE.primary}90` }}
          >
            Explore Nayara Journal
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
