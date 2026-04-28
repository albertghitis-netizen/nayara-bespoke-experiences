/*
 * CARIBBEAN CORAL RESTORATION — Partnership Landing Page
 * Bocas del Toro, Panama
 * Climate-adaptive coral restoration as a global blueprint
 * Design: Nayara Tented Camp Sustainability style — Ocean palette
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import PillarCrossLink from "@/components/PillarCrossLink";
import {
  AnimateOnScroll,
  TextReveal,
  fadeUp,
} from "@/components/motion";

const PALETTE = {
  primary: "#0B5F6F",      // Deep ocean blue
  secondary: "#1B8A99",    // Ocean teal
  accent: "#2BA8C1",       // Bright teal
  gradientStart: "#F0F6F8",
  gradientEnd: "#E8F2F6",
  text: "#0D3B47",
  textSecondary: "#4A6B76",
  textTertiary: "#8A9FA8",
  divider: "#D0E0E8",
};

const CDN_BASE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

const CDN = {
  // Placeholder — will be replaced with actual coral/ocean imagery
  heroImage: `${CDN_BASE}/coral-restoration-hero.jpg`,
};

const sectionPadding = "py-20 md:py-32 px-6 md:px-10";
const maxW = "max-w-[1200px] mx-auto";

export default function CaribbeanCoralLanding() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.gradientStart }}>
      <BrandNavigation pageType="content" hideCenterLabel />
      <CoralHero />
      <IntroSection />
      <GlobalCrisisSection />
      <RestorationApproachSection />
      <ImpactStatsSection />
      <PartnershipSection />
      <RestorationTechniquesSection />
      <CommunityImpactSection />
      <JournalSection />
      <Footer pageType="content" bgColor="#1B8A99" />
    </div>
  );
}

function CoralHero() {
  return (
    <div className="relative overflow-hidden" style={{ aspectRatio: "2/1" }}>
      <div className="absolute inset-0">
        <img
          src="/manus-storage/coral-restoration-bocas_hero.jpg"
          alt="Coral restoration in Bocas del Toro"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(11, 95, 111, 0.70)" }} />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-end pb-8 md:pb-12 px-6 md:px-10">
        <TextReveal as="h1" delay={0.2}>
          <span
            className="text-white text-2xl md:text-4xl lg:text-5xl tracking-wide"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Restoring Coral Reefs for a Warming Ocean
          </span>
        </TextReveal>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-white/50 text-[11px] tracking-[0.2em] mt-3"
          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
        >
          Caribbean Coral Restoration Center × Nayara Bocas del Toro
        </motion.p>
      </div>
    </div>
  );
}

function IntroSection() {
  return (
    <section className={sectionPadding} style={{ backgroundColor: PALETTE.gradientStart }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.textTertiary }}
          >
            Partnership
          </p>
          <h2
            className="text-2xl md:text-3xl mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
          >
            A Global Blueprint for Climate-Adaptive Restoration
          </h2>
          <p
            className="text-[15px] leading-[1.8] max-w-[700px]"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
          >
            Caribbean Coral Restoration Center is pioneering a transformative approach to reef conservation in Bocas del Toro, Panama. Rather than attempting to reverse ocean warming, they are cultivating resilience by planting heat-resistant coral species—coral that has survived recent bleaching events and is adapted to warming waters. This pragmatic, science-driven strategy offers a replicable model for coral reef restoration worldwide.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.2}>
          <p
            className="text-[14px] leading-[1.8] max-w-[700px] mt-6"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
          >
            Nayara Bocas del Toro is proud to support this work, recognizing that luxury hospitality can be a force for environmental regeneration. Through this partnership, guests experience the frontlines of ocean restoration while contributing to a global solution for reef recovery.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

function GlobalCrisisSection() {
  return (
    <section className={sectionPadding} style={{ backgroundColor: PALETTE.gradientEnd }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.textTertiary }}
          >
            The Crisis
          </p>
          <h2
            className="text-2xl md:text-3xl mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
          >
            The State of Global Coral Reefs
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div>
              <p
                className="text-[14px] leading-[1.8]"
                style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
              >
                The world's coral reefs face an unprecedented crisis. From January 2023 to March 2025, bleaching-level heat stress impacted <strong>84% of the world's coral reef area</strong>—the most extensive bleaching event in recorded history. Over the past three decades, the world has lost half of its coral reefs, with more than 80% of remaining reefs affected by bleaching.
              </p>
            </div>
            <div>
              <p
                className="text-[14px] leading-[1.8]"
                style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
              >
                A spike of just 1–2°C in ocean temperatures sustained over several weeks can trigger mass bleaching. If global warming reaches 1.5°C, most reefs would disappear. At 2°C, effectively all coral reefs would die. The urgency is undeniable: we must act now with solutions that work within the reality of our changing climate.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

function RestorationApproachSection() {
  return (
    <section className={sectionPadding} style={{ backgroundColor: PALETTE.gradientStart }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.textTertiary }}
          >
            The Approach
          </p>
          <h2
            className="text-2xl md:text-3xl mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
          >
            Climate-Adaptive Restoration
          </h2>
          <p
            className="text-[15px] leading-[1.8] max-w-[700px] mb-8"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
          >
            Caribbean Coral's strategy is fundamentally different from traditional reef restoration. Rather than attempting to stop ocean warming—a challenge beyond the scope of local action—they are working with nature's survivors to build resilience.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.2}>
          <div className="space-y-6">
            <div className="border-l-4 pl-6" style={{ borderColor: PALETTE.accent }}>
              <h3
                className="text-lg mb-2"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
              >
                Selecting for Resilience
              </h3>
              <p
                className="text-[14px] leading-[1.7]"
                style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
              >
                Caribbean Coral identifies and cultivates coral species that survived recent bleaching events. These "super corals" possess genetic traits that allow them to withstand intense heatwaves and temperature fluctuations.
              </p>
            </div>

            <div className="border-l-4 pl-6" style={{ borderColor: PALETTE.accent }}>
              <h3
                className="text-lg mb-2"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
              >
                Heat-Resistant Species
              </h3>
              <p
                className="text-[14px] leading-[1.7]"
                style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
              >
                Rather than relying on traditional coral varieties, restoration focuses on species adapted to warming oceans. This approach acknowledges climate change as a permanent shift and builds solutions accordingly.
              </p>
            </div>

            <div className="border-l-4 pl-6" style={{ borderColor: PALETTE.accent }}>
              <h3
                className="text-lg mb-2"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
              >
                Scalable Blueprint
              </h3>
              <p
                className="text-[14px] leading-[1.7]"
                style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
              >
                The work in Bocas del Toro serves as a replicable model for coral restoration worldwide. By documenting techniques, sharing data, and building local capacity, Caribbean Coral is creating a global framework for climate-adaptive reef recovery.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

function ImpactStatsSection() {
  return (
    <section className={sectionPadding} style={{ backgroundColor: PALETTE.gradientEnd }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.textTertiary }}
          >
            Measurable Impact
          </p>
          <h2
            className="text-2xl md:text-3xl mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
          >
            By the Numbers
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="text-center">
              <p
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ fontFamily: "var(--font-display)", color: PALETTE.primary }}
              >
                84%
              </p>
              <p
                className="text-[12px] tracking-[0.08em] uppercase"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.textSecondary }}
              >
                Global Reefs Impacted
              </p>
              <p
                className="text-[11px] mt-2"
                style={{ fontFamily: "var(--font-body)", color: PALETTE.textTertiary }}
              >
                By bleaching-level heat stress (2023–2025)
              </p>
            </div>

            <div className="text-center">
              <p
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ fontFamily: "var(--font-display)", color: PALETTE.primary }}
              >
                50%
              </p>
              <p
                className="text-[12px] tracking-[0.08em] uppercase"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.textSecondary }}
              >
                Lost in 30 Years
              </p>
              <p
                className="text-[11px] mt-2"
                style={{ fontFamily: "var(--font-body)", color: PALETTE.textTertiary }}
              >
                Global coral reef decline since 1990s
              </p>
            </div>

            <div className="text-center">
              <p
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ fontFamily: "var(--font-display)", color: PALETTE.primary }}
              >
                1.5°C
              </p>
              <p
                className="text-[12px] tracking-[0.08em] uppercase"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.textSecondary }}
              >
                Critical Threshold
              </p>
              <p
                className="text-[11px] mt-2"
                style={{ fontFamily: "var(--font-body)", color: PALETTE.textTertiary }}
              >
                Most reefs would disappear at this warming level
              </p>
            </div>

            <div className="text-center">
              <p
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ fontFamily: "var(--font-display)", color: PALETTE.primary }}
              >
                5
              </p>
              <p
                className="text-[12px] tracking-[0.08em] uppercase"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.textSecondary }}
              >
                Impact Pillars
              </p>
              <p
                className="text-[11px] mt-2"
                style={{ fontFamily: "var(--font-body)", color: PALETTE.textTertiary }}
              >
                From reefs to community to global solutions
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

function PartnershipSection() {
  return (
    <section className={sectionPadding} style={{ backgroundColor: PALETTE.gradientStart }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.textTertiary }}
          >
            Partnership
          </p>
          <h2
            className="text-2xl md:text-3xl mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
          >
            Nayara Bocas del Toro & Caribbean Coral
          </h2>
          <p
            className="text-[15px] leading-[1.8] max-w-[700px]"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
          >
            Nayara Bocas del Toro's overwater villas float above the very reefs that Caribbean Coral is restoring. This proximity creates a unique opportunity: guests witness coral restoration firsthand, participate in conservation activities, and understand the urgency of climate-adaptive solutions. The partnership embodies Nayara's philosophy that luxury hospitality must be a force for environmental regeneration, not degradation.
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
              Read: Caribbean Coral Restoration Partnership
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

function RestorationTechniquesSection() {
  return (
    <section className={sectionPadding} style={{ backgroundColor: PALETTE.gradientEnd }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.textTertiary }}
          >
            How It Works
          </p>
          <h2
            className="text-2xl md:text-3xl mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
          >
            Coral Restoration Techniques
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.2}>
          <div className="space-y-8 mt-8">
            <div>
              <h3
                className="text-lg mb-3"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
              >
                1. Identification & Collection
              </h3>
              <p
                className="text-[14px] leading-[1.7]"
                style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
              >
                Caribbean Coral scientists identify coral colonies that survived recent bleaching events. These resilient specimens are carefully collected and brought to nurseries where they can be propagated and studied.
              </p>
            </div>

            <div>
              <h3
                className="text-lg mb-3"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
              >
                2. Nursery Cultivation
              </h3>
              <p
                className="text-[14px] leading-[1.7]"
                style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
              >
                Coral fragments are grown in underwater nurseries, where conditions are carefully controlled. Young coral colonies develop and strengthen before being transplanted to restoration sites on the reef.
              </p>
            </div>

            <div>
              <h3
                className="text-lg mb-3"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
              >
                3. Reef Installation
              </h3>
              <p
                className="text-[14px] leading-[1.7]"
                style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
              >
                Restored coral is carefully transplanted onto degraded reef areas. Artificial reef structures provide substrate for coral attachment and create habitat for fish and other marine life.
              </p>
            </div>

            <div>
              <h3
                className="text-lg mb-3"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
              >
                4. Monitoring & Adaptation
              </h3>
              <p
                className="text-[14px] leading-[1.7]"
                style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
              >
                Restored reefs are continuously monitored. Data on coral health, growth, and survival informs ongoing refinement of techniques. This adaptive approach ensures solutions improve over time.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

function CommunityImpactSection() {
  return (
    <section className={sectionPadding} style={{ backgroundColor: PALETTE.gradientStart }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.textTertiary }}
          >
            Community
          </p>
          <h2
            className="text-2xl md:text-3xl mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
          >
            Economic Empowerment & Local Impact
          </h2>
          <p
            className="text-[15px] leading-[1.8] max-w-[700px]"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
          >
            Caribbean Coral's mission extends beyond environmental restoration. The organization prioritizes economic opportunities for local and indigenous communities in Bocas del Toro. By creating jobs in restoration, research, and education, Caribbean Coral ensures that reef recovery strengthens the communities that depend on healthy oceans.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.2}>
          <div className="mt-8 space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: PALETTE.accent }}>
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <div>
                <p
                  className="text-[14px] font-medium"
                  style={{ fontFamily: "var(--font-body)", color: PALETTE.text }}
                >
                  Local Employment
                </p>
                <p
                  className="text-[13px]"
                  style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
                >
                  Jobs in coral restoration, research, and marine education
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: PALETTE.accent }}>
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <div>
                <p
                  className="text-[14px] font-medium"
                  style={{ fontFamily: "var(--font-body)", color: PALETTE.text }}
                >
                  Community Health
                </p>
                <p
                  className="text-[13px]"
                  style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
                >
                  Marked health improvements through sustainable livelihoods
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: PALETTE.accent }}>
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <div>
                <p
                  className="text-[14px] font-medium"
                  style={{ fontFamily: "var(--font-body)", color: PALETTE.text }}
                >
                  Knowledge Sharing
                </p>
                <p
                  className="text-[13px]"
                  style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
                >
                  Training and capacity building for global reef restoration
                </p>
              </div>
            </div>
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
            Stories of Ocean Restoration
          </h3>
          <p
            className="text-[14px] leading-[1.7] max-w-[600px] mb-8"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
          >
            Explore our journal for deeper stories about Caribbean Coral's work, climate-adaptive conservation, and the communities building a resilient future for our oceans.
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
