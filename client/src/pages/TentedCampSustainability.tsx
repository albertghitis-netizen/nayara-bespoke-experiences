/*
 * TENTED CAMP SUSTAINABILITY — Dedicated sustainability sub-page
 * Rainforest palette — Green Globe Certification
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import NativeVideo from "@/components/NativeVideo";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import PillarCrossLink from "@/components/PillarCrossLink";
import {
  AnimateOnScroll,
  TextReveal,
  fadeUp,
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

export default function TentedCampSustainability() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.gradientStart }}>
      <BrandNavigation pageType="property" hideCenterLabel />
      <SustainabilityHero />
      <GreenGlobeSection />
      <VideoSection />
      <JournalSection />
      <Footer pageType="property" bgColor="#868B75" />textColor="#FFFFFF" />textColor="#FFFFFF" />
    </div>
  );
}

function SustainabilityHero() {
  return (
    <div className="relative overflow-hidden" style={{ aspectRatio: "2/1" }}>
      <div className="absolute inset-0">
        <img src="/manus-storage/tc-sustainability-toucans-v2_9caf2880.jpg" alt="Toucans in the Costa Rican rainforest" className="w-full h-full object-cover" />
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

function GreenGlobeSection() {
  return (
    <section className={sectionPadding} style={{ backgroundColor: PALETTE.gradientStart }}>
      <div className={maxW}>
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
            Nayara Tented Camp holds Green Globe Certification — the global standard for sustainable
            tourism, recognizing our commitment to rainforest conservation, wildlife corridor protection,
            and responsible operations in the Arenal Volcano region. This certification reflects our
            dedication to preserving over 380 acres of primary and secondary rainforest while delivering
            exceptional guest experiences.
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
              Read: Green Globe Certification at Nayara Tented Camp
            </Link>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.3}>
          <div className="mt-16">
            <PillarCrossLink pillar="sustainability" />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: PALETTE.gradientEnd }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
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
            Leo Ghitis explores the journey of building Nayara Resorts — a brand that seamlessly blends
            ultra-luxury with profound environmental stewardship. From reforesting a decimated mountain
            to achieving carbon neutrality.
          </p>
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
          <a
            href="https://blog.nayararesorts.com/setting-the-standard-green-globe-certification"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "12px", letterSpacing: "0.08em", color: "#fff", backgroundColor: PALETTE.primary }}
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Read: Setting the Standard — Green Globe Certification
          </a>
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
