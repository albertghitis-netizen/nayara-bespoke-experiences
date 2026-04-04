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

export default function BocasDelToro() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "linear-gradient(to bottom, #f0f7f5 0%, #b8ddd5 50%, #5a9b8f 100%)" }}>
      <ScrollProgress />
      <BrandNavigation pageType="property" centerLabel="Nayara Bocas del Toro" centerLinkHome />
      <HeroHeader />
      <HomeIntroSection />
      <AwardWinningProperties imageSrc="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-s2-island-aerial_937028ec.jpg" />
      <RoomsSection />

      <GradientSpacer />
      <GradientSpacer />
      <GradientSpacer />
      <GradientSpacer />
      <GradientSpacer />
      <GradientSpacer />
      <GradientSpacer />
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

  const heroDesktop = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbt-horizontal-desktop_e4f2e9e2.mp4";
  const heroMobile = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-vertical2_03bbe8e5.mp4";
  const heroVideo = isMobile ? heroMobile : heroDesktop;

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

      {/* Nayara Bocas del Toro text — centered on hero (desktop only) */}
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
          NAYARA BOCAS DEL TORO
        </a>
      </motion.div>

      {/* Content — centered bottom */}
      <div className="absolute inset-0 flex flex-col justify-end items-center px-5 z-10 pb-[5vh]">
        {/* EXPERIMENT 4: Staggered letter reveal with blur-to-sharp
           Each letter appears individually with a cascading blur effect.
           To revert: replace this block with the original <motion.h1> */}
        <h1
          className="text-center text-[#ece8e1] max-w-[1052px]"
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 400,
            fontSize: 'clamp(26px, 3.5vw, 38px)',
            lineHeight: 1,
          }}
        >
          {"Adults-Only Overwater Villas on a Private Caribbean Island".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, filter: "blur(12px)", y: 8 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.6 + i * 0.02,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ display: "inline-block" }}
            >
              {char === " " ? "\u00A0" : char}
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
          Bocas del Toro, Panama
          <span className="text-[#ece8e1]/40 ml-3">—</span>
        </motion.p>

      </div>
    </section>

    {/* Mobile-only full-width image */}
    <div className="md:hidden w-screen" style={{ marginLeft: 'calc(-50vw + 50%)', paddingTop: '10px' }}>
      <img
        src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-aerial-villas-walkway_66b2f48e.jpg"
        alt="Aerial view of overwater villas along walkway at Nayara Bocas del Toro"
        className="w-full h-auto object-cover"
        loading="eager"
      />
    </div>
    </>
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
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-aerial-villas-walkway_66b2f48e.jpg"
          alt="Aerial view of overwater villas along walkway at Nayara Bocas del Toro"
          className="w-full h-auto object-cover"
          loading="eager"
        />
      </div>

      <section
        className="w-full"
        style={{
          paddingTop: '22px',
          paddingBottom: 0,
        }}
      >
        {/* Two-column layout */}
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
            Award-Winning Properties<br />Defined by Destination
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
            Our resorts belong to the land. In Costa Rica, lush rainforest and mineral hot springs greet you at the foot of Arenal Volcano. In Chile’s Atacama, the world’s driest desert becomes a place of stillness and discovery. On Easter Island, silent giants stand guard and Rapa Nui culture is ever-present. On a private island on Panama’s Caribbean coast, overwater villas rise above the reef. Six properties. Three countries. All designed to bring guests back to nature and leave every ecosystem stronger than we found it.
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
            Our Story
          </a>
        </div>

        {/* Right: image - Desktop only (3:4 aspect ratio) — BLEEDS TO RIGHT EDGE */}
        <div className="hidden md:flex md:flex-1" style={{ marginRight: 'calc(-1 * clamp(24px, 8vw, 121px))' }}>
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-aerial-villas-walkway_66b2f48e.jpg"
            alt="Aerial view of overwater villas along walkway at Nayara Bocas del Toro"
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
        paddingTop: '22px',
        paddingBottom: 0,
      }}
    >
      <div
        className="flex flex-col md:flex-row items-start mx-auto"
        style={{ maxWidth: '1440px', gap: 'clamp(40px, 8vw, 115px)', padding: '0 clamp(24px, 8vw, 121px) 0 0' }}
      >
        {/* Left: image (3:4 aspect ratio) — BLEEDS TO LEFT EDGE */}
        <div className="hidden md:flex md:flex-1" style={{ marginLeft: 'calc(-1 * clamp(24px, 8vw, 121px))', aspectRatio: '3/4', overflow: 'hidden' }}>
          <BlobVideo
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-v2-new_a7b8b2b2.mp4"
            className="w-full h-full object-cover"
            autoPlay={true}
            muted={true}
            loop={true}
            playsInline={true}
            controls={false}
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
            Overwater Villas
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
            Nayara Bocas del Toro's overwater villas float above the crystalline Caribbean, each with a private infinity pool that spills into the sea, glass-floor panels revealing the reef below, and open-air terraces for uninterrupted ocean views. Thatched roofs, natural materials, and indoor-outdoor living create an intimate island sanctuary.
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
            Explore Our Villas
          </a>
        </div>
      </div>

      {/* Mobile-only full-width image */}
      <div className="md:hidden w-screen" style={{ marginLeft: 'calc(-50vw + 50%)', paddingTop: '10px' }}>
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/IMG_6904_4db69733.JPG"
          alt="Overwater villa with private pool at Nayara Bocas del Toro"
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
   EXPERIMENT 3: Floating Award Card Overlay
   A translucent card that sits between hero and intro,
   showing two awards side by side — Condé Nast #1 and 2 Michelin Keys.
   Uses glass-morphism (backdrop-blur + semi-transparent bg).
   To revert: remove <BocasAwardCard /> from the main component.
   ═══════════════════════════════════════════════════════════ */
function BocasCondeNastCard() {
  return (
    <div className="w-full flex justify-center px-6 md:px-10" style={{ marginTop: 'clamp(40px, 6vw, 80px)', marginBottom: '20px', position: 'relative', zIndex: 15 }}>
      <motion.div
        className="flex items-center gap-10 md:gap-14 px-10 md:px-16 py-8 md:py-10 rounded-2xl max-w-[700px] w-full"
        style={{
          background: 'rgba(255, 255, 255, 0.06)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(58, 42, 26, 0.08)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.04)',
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Condé Nast badge */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/conde-nast-2025_0d4b7c71.png"
            alt="Condé Nast Traveler Readers' Choice Awards 2025"
            className="h-20 md:h-28 w-auto"
          />
        </motion.div>

        {/* Vertical divider */}
        <div className="h-16 md:h-20 w-px bg-[#3a2a1a]/10 flex-shrink-0" />

        {/* Text */}
        <div className="flex flex-col gap-2">
          <span
            className="text-[#3a2a1a]/35 text-[9px] tracking-[0.35em] uppercase"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}
          >
            Condé Nast Traveler 2025
          </span>
          <span
            className="text-[#3a2a1a] text-lg md:text-xl"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, lineHeight: 1.2 }}
          >
            No. 1 Resort in Central America
          </span>
          <span
            className="text-[#3a2a1a]/40 text-[10px] tracking-[0.1em] uppercase"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
          >
            Readers' Choice Awards
          </span>
        </div>
      </motion.div>
    </div>
  );
}

/* Old BocasAwardCard removed — replaced by BocasCondeNastSection above */
function _BocasAwardCard_REMOVED() {
  return (
    <div className="hidden" style={{ marginTop: '-60px', marginBottom: '40px', position: 'relative', zIndex: 15 }}>
      <motion.div
        className="flex items-center gap-16 px-16 py-10 rounded-2xl"
        style={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(58, 42, 26, 0.08)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Award 1: Condé Nast */}
        <div className="flex flex-col items-center gap-3 text-center">
          <span
            className="text-[#3a2a1a]/35 text-[9px] tracking-[0.35em] uppercase"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}
          >
            Condé Nast Traveler 2025
          </span>
          <span
            className="text-[#3a2a1a] text-[20px]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, lineHeight: 1.2 }}
          >
            No. 1 Resort in Central America
          </span>
          <span
            className="text-[#3a2a1a]/45 text-[11px] tracking-[0.1em] uppercase"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
          >
            Readers' Choice Awards
          </span>
        </div>

        {/* Vertical divider */}
        <div className="h-20 w-px bg-[#3a2a1a]/12 flex-shrink-0" />

        {/* Award 2: Michelin Keys */}
        <div className="flex flex-col items-center gap-3 text-center">
          <span
            className="text-[#3a2a1a]/35 text-[9px] tracking-[0.35em] uppercase"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}
          >
            Michelin Guide 2025
          </span>
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/michelin-2-keys_7e564b50.png"
            alt="2 Michelin Keys"
            className="h-14 w-auto"
            style={{ filter: 'brightness(0) saturate(100%) invert(15%) sepia(40%) saturate(500%) hue-rotate(350deg)' }}
          />
          <span
            className="text-[#3a2a1a]/45 text-[11px] tracking-[0.1em] uppercase"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
          >
            Two Michelin Keys
          </span>
        </div>
      </motion.div>
    </div>
  );
}
