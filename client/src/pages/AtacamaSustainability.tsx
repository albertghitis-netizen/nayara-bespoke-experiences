/*
 * ATACAMA SUSTAINABILITY — Dedicated sustainability sub-page
 * Accessible from Alto Atacama home via "Explore More" CTA
 * Uses Atacama "Mars" palette and motion system
 * S Certification for Atacama
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
  stargazing: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Video_Nayara_Atacama00007_8576aa55.MP4",
};

const sectionPadding = "py-20 md:py-32 px-6 md:px-10";
const maxW = "max-w-[1200px] mx-auto";

export default function AtacamaSustainability() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.gradientStart }}>
      <BrandNavigation pageType="property" hideCenterLabel />
      <SustainabilityHero />
      <SCertificationSection />
      <JournalSection />
      <Footer pageType="property" bgColor="#6F463D" />
    </div>
  );
}

function SustainabilityHero() {
  return (
    <div className="relative overflow-hidden" style={{ aspectRatio: "2/1" }}>
      <div className="absolute inset-0">
        <NativeVideo src={CDN.stargazing} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(139, 90, 60, 0.85)" }} />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-end pb-8 md:pb-12 px-6 md:px-10">
        <TextReveal as="h1" delay={0.2}>
          <span
            className="text-white text-2xl md:text-4xl lg:text-5xl tracking-wide"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Protecting the Desert
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
  );
}

function SCertificationSection() {
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
            S Certification
          </h2>
          <p
            className="text-[15px] leading-[1.8] max-w-[700px]"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
          >
            Nayara Alto Atacama holds S Certification — Chile's national standard for sustainable tourism,
            recognizing our commitment to environmental stewardship, cultural preservation, and responsible
            operations in one of the world's most fragile ecosystems. This certification reflects our ongoing
            dedication to protecting the Atacama Desert while delivering exceptional guest experiences.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.2}>
          <div className="mt-12">
            <Link
              href="/journal"
              className="inline-flex items-center gap-2 text-[12px] tracking-[0.1em] transition-colors"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: `${PALETTE.primary}90` }}
            >
              Read: S Certification at Nayara Alto Atacama
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
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

function JournalSection() {
  return (
    <section
      className="py-16 md:py-24 px-6 md:px-10"
      style={{ backgroundColor: PALETTE.gradientEnd }}
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
