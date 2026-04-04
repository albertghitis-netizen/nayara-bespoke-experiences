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
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";
import BlobVideo from "@/components/BlobVideo";
import { useIsMobile } from "@/hooks/useMobile";
import AwardWinningProperties from "@/components/AwardWinningProperties";

import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BrandNavigation from "@/components/BrandNavigation";

export default function Springs() {
  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(to bottom, #f5f3f0 0%, #e8e3db 40%, #ddd2c2 70%, #cfc1a8 90%, #c5b596 100%)" }}>
      <ScrollProgress />
      <BrandNavigation pageType="property" centerLabel="Nayara Springs" centerLinkHome />
      <HeroHeader />
      <HomeIntroSection />
      <div className="h-2 md:h-4" />
      {/* ═══ EXPERIMENT 1: Editorial Award Strip ═══
         A dedicated section with Michelin Keys image + editorial text.
         To revert: remove <SpringsAwardStrip /> */}
      <SpringsAwardStrip />
      <AwardWinningProperties imageSrc="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/WORLD'SBESTAWARDS2024.(Presentation)_26483fca.jpg" />
      <RoomsSection />
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

  const heroVideo = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-hero-horizontal-hq_c0efb638.mp4";

  return (
    <>
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

      {/* Nayara Springs text — centered on hero (desktop only) */}
      <motion.div
        className="absolute top-2 left-0 right-0 z-10 hidden md:flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <a
          href="/"
          className="text-[#ece8e1] drop-shadow-md cursor-pointer hover:opacity-80 transition-opacity"
          style={{ fontFamily: "'Montserrat', 'Arial', sans-serif", fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 26px)', letterSpacing: '2px', lineHeight: 1, textDecoration: 'none' }}
        >
          NAYARA SPRINGS
        </a>
      </motion.div>

      {/* Content — centered bottom */}
      <div className="absolute inset-0 flex flex-col justify-end items-center px-5 z-10 pb-[5vh]">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-[#ece8e1] max-w-[1052px]"
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 400,
            fontSize: 'clamp(26px, 3.5vw, 38px)',
            lineHeight: 1,
          }}
        >
          Adults-Only Private Hot Springs Villas
        </motion.h1>

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

    {/* Mobile-only full-width image */}
    <div className="md:hidden w-screen" style={{ marginLeft: 'calc(-50vw + 50%)', paddingTop: '10px' }}>
      <img
        src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-s1-pools_8e255e18.png"
        alt="Private hot spring pools nestled in rainforest at Nayara Springs"
        className="w-full h-auto object-cover"
        loading="eager"
      />
    </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HOME INTRO — Two-column layout matching Home/Gardens pattern
   ═══════════════════════════════════════════════════════════════ */
function HomeIntroSection() {
  return (
    <>
      {/* Mobile: S1 full-width vertical image BEFORE text */}
      <div className="md:hidden w-full" style={{ paddingTop: 'clamp(16px, 3vw, 32px)' }}>
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-s1-pools_8e255e18.png"
          alt="Private hot spring pools nestled in rainforest at Nayara Springs"
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
          {/* EXPERIMENT 2: Scroll-linked text reveal — each element fades/slides in
             as it enters the viewport, creating a reading spotlight effect.
             To revert: remove ScrollRevealText wrappers, use plain divs. */}
          <div className="flex flex-col gap-10 md:flex-1 mt-10 md:mt-16">
            <ScrollRevealText delay={0}>
              <h2
                className="text-[#4B4A4A]"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 400,
                  fontSize: 'clamp(20px, 2.5vw, 28px)',
                  lineHeight: 1.3,
                }}
              >
                Romance without Distraction<br />Wellness without Walls
              </h2>
            </ScrollRevealText>
            <ScrollRevealText delay={0.15}>
              <p
                className="text-[#4B4A4A]"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 400,
                  fontSize: '15px',
                  lineHeight: '22.5px',
                }}
              >
                Hidden within the rainforest surrounding Arenal Volcano, Nayara Springs is an adults-only Relais & Châteaux retreat built around hot springs, romance, and exceptional dining. Every villa has its own volcanic hot spring plunge pool screened by tropical gardens, and the spa draws its rituals from the geothermal earth and forest botanicals that surround it. Here, privacy is not a perk. It is the entire point.
              </p>
            </ScrollRevealText>

            {/* ═══ EXPERIMENT 4: Inline Award Ribbon ═══
               Michelin Keys woven into the text column as a subtle accent.
               To revert: remove this ScrollRevealText block. */}
            <ScrollRevealText delay={0.25}>
              <div className="hidden md:flex items-center gap-5 py-4">
                <div className="h-px flex-1 bg-[#4B4A4A]/15" />
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/michelin-3-keys_10864925.png"
                  alt="3 Michelin Keys"
                  className="h-8 w-auto"
                  style={{ filter: 'brightness(0) saturate(100%) invert(30%) sepia(10%) saturate(300%) hue-rotate(350deg)' }}
                />
                <span
                  className="text-[#4B4A4A]/50 text-[11px] tracking-[0.15em] uppercase whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
                >
                  First in Costa Rica
                </span>
                <div className="h-px flex-1 bg-[#4B4A4A]/15" />
              </div>
            </ScrollRevealText>

            <ScrollRevealText delay={0.3}>
              <a
                href="/about"
                className="text-[#4B4A4A] underline underline-offset-4 decoration-[#4B4A4A]/40 hover:decoration-[#4B4A4A] transition-all inline-block"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 400,
                  fontSize: '15px',
                }}
              >
                Our Story
              </a>
            </ScrollRevealText>
          </div>

          {/* Right: image - Desktop only (3:4 aspect ratio) */}
          <div className="hidden md:flex md:flex-1 md:mr-[-24px]">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-s1-pools_8e255e18.png"
              alt="Private hot spring pools nestled in rainforest at Nayara Springs"
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
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-s3-robe-canopy_c9c365ff.jpg"
            alt="Luxury room with canopy bed at Nayara Springs"
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
            Each villa at Nayara Springs is a private sanctuary, complete with its own natural hot spring plunge pool, outdoor garden shower, and indoor-outdoor living spaces that dissolve the boundary between comfort and nature. Handcrafted furnishings, tropical hardwoods, and floor-to-ceiling windows frame views of the Arenal Volcano and surrounding rainforest canopy.
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
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-s3-robe-canopy_c9c365ff.jpg"
          alt="Luxury room with canopy bed at Nayara Springs"
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
   EXPERIMENT 2: Scroll-Linked Text Reveal
   Each text block fades up and slides in when scrolled into view,
   with staggered delays for a reading spotlight effect.
   To revert: remove ScrollRevealText wrappers, use plain content.
   ═══════════════════════════════════════════════════════════ */
function ScrollRevealText({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}


/* ═══════════════════════════════════════════════════════════
   EXPERIMENT 1: Editorial Award Strip
   A dedicated section between intro and rooms with 3 Michelin Keys
   displayed in an elegant editorial layout — large keys image on left,
   editorial text on right with thin rule separators.
   To revert: remove <SpringsAwardStrip /> from the main component.
   ═══════════════════════════════════════════════════════════ */
function SpringsAwardStrip() {
  return (
    <section className="hidden md:block w-full" style={{ padding: 'clamp(60px, 10vw, 120px) 0' }}>
      <div
        className="mx-auto flex items-center"
        style={{ maxWidth: '1440px', padding: '0 clamp(24px, 8vw, 121px)' }}
      >
        {/* Left: Michelin Keys image */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/michelin-3-keys_10864925.png"
            alt="3 Michelin Keys"
            className="h-20 w-auto"
            style={{ filter: 'brightness(0) saturate(100%) invert(15%) sepia(40%) saturate(500%) hue-rotate(350deg)' }}
          />
        </motion.div>

        {/* Vertical divider */}
        <motion.div
          className="h-24 w-px bg-[#3a2a1a]/20 mx-10 flex-shrink-0"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* Right: Editorial text */}
        <motion.div
          className="flex flex-col gap-2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="text-[#3a2a1a]/40 text-[10px] tracking-[0.3em] uppercase"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}
          >
            Michelin Guide 2025
          </span>
          <span
            className="text-[#3a2a1a] text-[22px]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, lineHeight: 1.3 }}
          >
            Three Michelin Keys
          </span>
          <span
            className="text-[#3a2a1a]/60 text-[13px]"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}
          >
            The first hotel in Costa Rica to receive this distinction
          </span>
        </motion.div>
      </div>
    </section>
  );
}
