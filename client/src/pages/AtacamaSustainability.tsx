/*
 * ATACAMA SUSTAINABILITY — Dedicated sustainability sub-page
 * Accessible from Alto Atacama home via "Explore More" CTA
 * Uses Atacama "Mars" palette and motion system
 * S Certification for Atacama
 * Structure: Hero → S Certification → By the Numbers (2×2) → Blog Cards → Journal → Footer
 */

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
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
import {
  sustainabilityData,
  type ESGStat,
} from "@/data/sustainability";

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
  flamingo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-flamingo_268d1d5b.webp",
  redDesert: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/IMG_6253_ffc4f157.PNG",
};

const BLOG_CARDS = [
  {
    title: "Wildlife Conservation in Chile's Atacama and Easter Island",
    excerpt: "From flamingos in the salt flats to endemic species on Rapa Nui, discover how Nayara protects fragile ecosystems across Chile's most extraordinary landscapes.",
    cover: CDN.flamingo,
    url: "https://blog.nayararesorts.com/wildlife-conservation-in-chiles-atacama-desert-and-easter-island",
  },
  {
    title: "An Oasis in the Desert",
    excerpt: "How Nayara Alto Atacama became a sanctuary of life in the driest place on Earth — through water stewardship, adobe architecture, and deep respect for the land.",
    cover: CDN.redDesert,
    url: "https://blog.nayararesorts.com/best-place-to-stay-atacama-desert-oasis",
  },
];

/* Pull the 4 Atacama stats from sustainability data */
const atacamaStats: ESGStat[] =
  sustainabilityData["alto-atacama"]?.esgReport?.stats ?? [];

const sectionPadding = "py-20 md:py-32 px-6 md:px-10";
const maxW = "max-w-[1200px] mx-auto";

export default function AtacamaSustainability() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.gradientStart }}>
      <BrandNavigation pageType="property" hideCenterLabel />
      <SustainabilityHero />
      <SCertificationSection />
      <ByTheNumbersSection />
      <BlogCardsSection />
      <JournalSection />
      <Footer pageType="property" bgColor="#6F463D" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════════════════ */
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

/* ═══════════════════════════════════════════════════════════════
   S CERTIFICATION
   ═══════════════════════════════════════════════════════════════ */
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
            <PillarCrossLink pillar="sustainability" />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ANIMATED COUNTER — reusable number animation
   ═══════════════════════════════════════════════════════════════ */
function AnimatedCounter({ target, suffix, duration = 2 }: { target: number; suffix: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = target;
    const stepTime = Math.max(Math.floor((duration * 1000) / end), 10);
    const increment = Math.max(1, Math.floor(end / (duration * 60)));
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {isInView ? count.toLocaleString() : "0"}{suffix}
    </span>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BY THE NUMBERS — 2×2 grid with 4 Atacama stats
   ═══════════════════════════════════════════════════════════════ */
function ByTheNumbersSection() {
  if (atacamaStats.length === 0) return null;

  return (
    <section
      className="py-16 md:py-28 px-6 md:px-10"
      style={{ backgroundColor: PALETTE.gradientEnd }}
    >
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl tracking-wide mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
          >
            By the Numbers
          </h2>
          <p
            className="text-[15px] leading-[1.8] max-w-[700px] mb-14"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
          >
            Measurable impact across environmental stewardship, cultural preservation, and responsible desert operations.
          </p>
        </AnimateOnScroll>

        <StaggerOnScroll
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8"
        >
          {atacamaStats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="p-8 md:p-10 group"
              style={{
                backgroundColor: PALETTE.primary,
                borderRadius: "12px",
              }}
            >
              <div
                className="text-3xl md:text-4xl lg:text-5xl mb-3"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  color: "#fff",
                  lineHeight: 1,
                }}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <h3
                className="text-[14px] md:text-[15px] mb-2"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                {stat.label}
              </h3>
              <p
                className="text-[12px] leading-[1.6]"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "rgba(255,255,255,0.65)",
                }}
              >
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </StaggerOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BLOG CARDS — 2 editorial cards with cover images
   ═══════════════════════════════════════════════════════════════ */
function BlogCardsSection() {
  return (
    <section className={sectionPadding} style={{ backgroundColor: PALETTE.gradientStart }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.textTertiary }}
          >
            From Nayara Journal
          </p>
          <h2
            className="text-2xl md:text-3xl mb-10"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
          >
            Stories of Stewardship
          </h2>
        </AnimateOnScroll>

        <StaggerOnScroll
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {BLOG_CARDS.map((card, i) => (
            <motion.a
              key={i}
              variants={fadeUp}
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden"
              style={{ borderRadius: "12px" }}
            >
              {/* Cover image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                <img
                  src={card.cover}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                />
              </div>

              {/* Card body */}
              <div
                className="p-6 md:p-8"
                style={{ backgroundColor: PALETTE.gradientEnd }}
              >
                <h3
                  className="text-lg md:text-xl mb-3 leading-snug"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 400,
                    color: PALETTE.text,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-[13px] leading-[1.7] mb-4"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: PALETTE.textSecondary,
                  }}
                >
                  {card.excerpt}
                </p>
                <span
                  className="inline-flex items-center gap-2 text-[12px] tracking-[0.1em] transition-colors group-hover:opacity-80"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 500,
                    color: PALETTE.primary,
                  }}
                >
                  Read Article
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </motion.a>
          ))}
        </StaggerOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   JOURNAL — Closing editorial section
   ═══════════════════════════════════════════════════════════════ */
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
            Explore More
          </p>
          <h3
            className="text-xl md:text-2xl mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
          >
            Nayara Journal
          </h3>
          <p
            className="text-[14px] leading-[1.7] max-w-[600px] mb-8"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
          >
            Deeper stories about conservation, community, and the people behind
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
