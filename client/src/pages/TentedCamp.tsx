/*
 * NAYARA BESPOKE EXPERIENCES — Landing Page
 * Design: "Desert Codex" — Editorial Cartography
 * Property selector showcasing all Nayara destinations
 * Typography: Playfair Display (display) + DM Sans (body)
 * Rule: Real photos only. No AI-generated imagery.
 *
 * ANIMATION SHOWCASE:
 * - Parallax hero with scroll-linked zoom
 * - Staggered text reveals
 * - Scroll progress indicator
 * - Counter animations on stats
 * - Enhanced section transitions
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BlobVideo from "@/components/BlobVideo";
import { useIsMobile } from "@/hooks/useMobile";
import AwardWinningProperties from "@/components/AwardWinningProperties";

import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BrandNavigation from "@/components/BrandNavigation";

export default function TentedCamp() {
  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(to bottom, #ece8e1 0%, #eae5de 40%, #e8e3db 70%, #e5e0d8 90%, #e2ddd5 100%)" }}>
      <ScrollProgress />
      <BrandNavigation pageType="property" centerLabel="Nayara Tented Camp" centerLinkHome />
      <HeroHeader />
      <HomeIntroSection />
      <div className="h-2 md:h-4" />
      {/* ═══ EXPERIMENT 2: Full-Width Award Banner ═══
         A cinematic full-width section with large editorial typography.
         To revert: remove <TentedCampAwardBanner /> */}
      <TentedCampAwardBanner />
      <AwardWinningProperties imageSrc="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/340C7D71-BAF3-4215-B25E-98878C4B65F6_48b343e5.JPEG" />
      <RoomsSection />
      {/* ═══ EXPERIMENT 5: Award Ticker/Marquee ═══
         A horizontal scrolling marquee strip with award text repeating.
         To revert: remove <AwardTicker /> */}
      <AwardTicker />
      <GradientSpacer />
      <GradientSpacer />
      <GradientSpacer />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION DIVIDER — Animated horizontal line that draws on scroll
   ═══════════════════════════════════════════════════════════════ */
function SectionDivider() {
  return (
    <div className="max-w-[1300px] mx-auto px-6 md:px-10">
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-[#3a2a1a]/15 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════════
   HERO HEADER — Enhanced with parallax, staggered reveals,
   scroll-linked zoom, and animated scroll indicator
   ═══════════════════════════════════════════════════════════════ */
function HeroHeader() {
  const isMobile = useIsMobile();

  const heroVideo = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tented-camp-hero-desktop_90751603.mp4";

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video background — matches spherical nay-hero structure */}
      <div className="absolute inset-0">
        <BlobVideo
          src={heroVideo}
          className="w-full h-full object-cover"
          autoPlay={true}
          muted={true}
          loop={true}
          playsInline={true}
          controls={false}
        />
      </div>

      {/* Nayara Tented Camp text — centered on hero */}
      <motion.div
        className="absolute top-2 left-0 right-0 z-10 flex justify-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <a
          href="/"
          className="text-[#ece8e1] drop-shadow-md cursor-pointer hover:opacity-80 transition-opacity"
          style={{ fontFamily: "'Montserrat', 'Arial', sans-serif", fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 26px)', letterSpacing: '2px', lineHeight: 1, textDecoration: 'none' }}
        >
          NAYARA TENTED CAMP
        </a>
      </motion.div>

      {/* Content — centered bottom */}
      <div className="absolute inset-0 flex flex-col justify-end items-center px-5 z-10 pb-[5vh]">
        {/* EXPERIMENT: Word-by-word staggered reveal
           Each word fades up individually for a cinematic entrance.
           To revert: replace with original single <motion.h1> */}
        <h1
          className="text-center text-[#ece8e1] max-w-[1052px] flex flex-wrap justify-center gap-x-[0.3em]"
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 400,
            fontSize: 'clamp(26px, 3.5vw, 38px)',
            lineHeight: 1.15,
          }}
        >
          {"Luxury Tented Camp Immersed in the Rainforest".split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.6 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="w-24 h-px bg-[#ece8e1]/40 mt-4 origin-center"
        />

        {/* Location subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#ece8e1]/70 text-[12px] md:text-[14px] uppercase tracking-[0.15em] mt-4"
          style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}
        >
          <span className="text-[#ece8e1]/40 mr-3">—</span>
          Arenal Volcano National Park, Costa Rica
          <span className="text-[#ece8e1]/40 ml-3">—</span>
        </motion.p>

      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HOME INTRO — Two-column layout matching spherical Welcome section
   ═══════════════════════════════════════════════════════════════ */
function HomeIntroSection() {
  return (
    <>
      {/* Mobile: S1 full-width vertical image BEFORE text */}
      <div className="md:hidden w-full" style={{ paddingTop: 'clamp(16px, 3vw, 32px)' }}>
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/pasted_file_gxCsYs_20-cropped_c9c2c33f.jpg"
          alt="Tented Camp at Nayara"
          className="w-full h-auto object-cover"
          loading="eager"
        />
      </div>

      <section
        className="w-full"
        style={{
          paddingTop: 'clamp(20px, 3vw, 40px)',
          paddingBottom: 0,
        }}
      >
        {/* Two-column layout — desktop: text left + image right; mobile: text only */}
        <div
          className="flex flex-col md:flex-row items-start mx-auto"
          style={{ maxWidth: '1440px', gap: 'clamp(40px, 8vw, 115px)', padding: '0 0 0 clamp(24px, 8vw, 121px)' }}
        >
          {/* Left: text content */}
          <div className="flex flex-col gap-10 md:flex-1 mt-10 md:mt-16">
            <h2
              className="text-[#4B4A4A]"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 400,
                fontSize: 'clamp(20px, 2.5vw, 28px)',
                lineHeight: 1.3,
              }}
            >
              Lifted On Stilts Above The Canopy<br />Eye to Eye with Arenal Volcano
            </h2>
            <p
              className="text-[#4B4A4A]"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 400,
                fontSize: '15px',
                lineHeight: '22.5px',
              }}
            >
              Where a barren cattle ranch once stood, a thriving rainforest now surrounds you. Open-air tented suites perch on a volcanic clifftop, each with a private plunge pool fed by natural hot springs. The land tells its own story.
            </p>
            <a
              href="/about"
              className="text-[#4B4A4A] underline underline-offset-4 decoration-[#4B4A4A]/40 hover:decoration-[#4B4A4A] transition-all"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 400,
                fontSize: '15px',
              }}
            >
              The Nayara Story
            </a>
          </div>

          {/* Right: image — NTC S1 (Desktop only) */}
          <div className="hidden md:flex md:flex-1 md:mr-[-24px]">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/pasted_file_gxCsYs_20-cropped_c9c2c33f.jpg"
              alt="Tented Camp at Nayara"
              className="w-full object-cover"
              style={{ aspectRatio: '3/4' }}
              loading="eager"
            />
          </div>
        </div>
      </section>
    </>
  );
}


/* ═══════════════════════════════════════════════════════════════
   ROOMS SECTION — Flipped layout: image left, text right
   ═══════════════════════════════════════════════════════════════ */
function RoomsSection() {
  return (
    <section
      className="w-full"
      style={{
        paddingTop: 'clamp(8px, 2vw, 16px)',
        paddingBottom: 0,
      }}
    >
      <div
        className="flex flex-col md:flex-row items-start mx-auto"
        style={{ maxWidth: '1440px', gap: 'clamp(40px, 8vw, 115px)', padding: '0 clamp(24px, 8vw, 121px) 0 0' }}
      >
        {/* Left: image (3:4 aspect ratio) */}
        <div className="hidden md:flex md:flex-1 md:ml-[-24px]">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tented-s3-rooms_0707176b.jpg"
            alt="Luxury tent with private pool at Nayara Tented Camp"
            className="w-full object-cover"
            style={{ aspectRatio: '3/4' }}
            loading="lazy"
          />
        </div>

        {/* Right: text content */}
        <div className="flex flex-col gap-10 md:flex-1 mt-10 md:mt-16 px-6 md:px-0">
          <h2
            className="text-[#4B4A4A]"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 400,
              fontSize: 'clamp(20px, 2.5vw, 28px)',
              lineHeight: 1.3,
            }}
          >
            Rooms
          </h2>
          <p
            className="text-[#4B4A4A]"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: '22.5px',
            }}
          >
            Nayara Tented Camp redefines glamping with spacious safari-style tents perched above the rainforest canopy. Each tent features a private plunge pool, open-air deck with hammock, and interiors appointed with handcrafted furnishings and artisan textiles — all framing panoramic views of the Arenal Volcano and surrounding jungle.
          </p>
          <a
            href="/rooms"
            className="text-[#4B4A4A] underline underline-offset-4 decoration-[#4B4A4A]/40 hover:decoration-[#4B4A4A] transition-all"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 400,
              fontSize: '15px',
            }}
          >
            Explore Our Rooms
          </a>
        </div>
      </div>

      {/* Mobile-only full-width image */}
      <div className="md:hidden w-screen" style={{ marginLeft: 'calc(-50vw + 50%)', paddingTop: '10px' }}>
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tented-s3-rooms_0707176b.jpg"
          alt="Luxury tent with private pool at Nayara Tented Camp"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>
    </section>
  );
}

function GradientSpacer() {
  return (
    <section
      className="w-full"
      style={{
        paddingTop: 'clamp(120px, 24vw, 240px)',
        paddingBottom: 'clamp(120px, 24vw, 240px)',
      }}
    />
  );
}


/* ═══════════════════════════════════════════════════════════
   EXPERIMENT 2: Full-Width Award Banner
   A cinematic full-width section with large editorial typography,
   centered layout, thin horizontal rules above and below.
   Travel + Leisure — Best Hotel in Central America, 4 years running.
   To revert: remove <TentedCampAwardBanner /> from the main component.
   ═══════════════════════════════════════════════════════════ */
function TentedCampAwardBanner() {
  return (
    <section className="hidden md:block w-full" style={{ padding: 'clamp(80px, 12vw, 160px) 0' }}>
      <div className="mx-auto text-center" style={{ maxWidth: '900px', padding: '0 clamp(24px, 8vw, 121px)' }}>
        {/* Top rule */}
        <motion.div
          className="w-full h-px bg-[#3a2a1a]/15 mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Award source label */}
        <motion.span
          className="block text-[#3a2a1a]/35 text-[10px] tracking-[0.4em] uppercase mb-6"
          style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Travel + Leisure World's Best Awards
        </motion.span>

        {/* Main award text — large editorial */}
        <motion.h3
          className="text-[#3a2a1a]"
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 400,
            fontSize: 'clamp(32px, 4vw, 52px)',
            lineHeight: 1.15,
            letterSpacing: '-0.01em',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          Best Hotel in Central America
        </motion.h3>

        {/* Subtitle — years */}
        <motion.span
          className="block text-[#3a2a1a]/50 text-[14px] tracking-[0.15em] uppercase mt-6"
          style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Four consecutive years
        </motion.span>

        {/* Bottom rule */}
        <motion.div
          className="w-full h-px bg-[#3a2a1a]/15 mt-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </section>
  );
}


/* ═══════════════════════════════════════════════════════════
   EXPERIMENT 5: Award Ticker / Marquee
   A horizontal scrolling strip with award text repeating infinitely.
   Elegant, understated — thin rules above and below, muted text.
   To revert: remove <AwardTicker /> from the main component.
   ═══════════════════════════════════════════════════════════ */
function AwardTicker() {
  const items = [
    "Travel + Leisure — Best Hotel in Central America",
    "Four Consecutive Years",
    "World's Best Awards 2024",
    "Travel + Leisure — Best Hotel in Central America",
    "Four Consecutive Years",
    "World's Best Awards 2024",
  ];

  return (
    <section className="hidden md:block w-full overflow-hidden" style={{ padding: 'clamp(40px, 6vw, 80px) 0' }}>
      {/* Top rule */}
      <div className="w-full h-px bg-[#3a2a1a]/10" />

      {/* Scrolling content */}
      <div className="relative py-6">
        <motion.div
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {items.concat(items).map((item, i) => (
            <span
              key={i}
              className="text-[#3a2a1a]/30 text-[13px] tracking-[0.25em] uppercase flex-shrink-0"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
            >
              {item}
              <span className="ml-16 text-[#3a2a1a]/15">&#9670;</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Bottom rule */}
      <div className="w-full h-px bg-[#3a2a1a]/10" />
    </section>
  );
}
