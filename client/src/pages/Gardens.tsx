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
import { motion, AnimatePresence, useInView } from "framer-motion";
import BlobVideo from "@/components/BlobVideo";
import { useIsMobile } from "@/hooks/useMobile";
import AwardWinningProperties from "@/components/AwardWinningProperties";

import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BrandNavigation from "@/components/BrandNavigation";

export default function Gardens() {
  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(to bottom, #f5f3f0 0%, #e8e3db 40%, #ddd2c2 70%, #cfc1a8 90%, #c5b596 100%)" }}>
      <ScrollProgress />
      <BrandNavigation pageType="property" centerLabel="Nayara Gardens" centerLinkHome />
      <HeroHeader />
      <HomeIntroSection />
      <div className="h-2 md:h-4" />
      <AwardWinningProperties imageSrc="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/321D9B07-0FF2-459E-BBA0-623B1062AA25_38485c6d.jpeg" />
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

  const heroVideo = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/gardens-hero-desktop_88c542ed.mp4";

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

      {/* Nayara text — centered on hero (desktop only) */}
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
          NAYARA GARDENS
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
          Family-Friendly Rainforest Adventure
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
        src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Untitleddesign(1)_d91b6c9a.jpg"
        alt="Sloth in rainforest at Nayara Gardens"
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
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Untitleddesign(1)_d91b6c9a.jpg"
          alt="Sloth in rainforest at Nayara Gardens"
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
              Rich Wildlife, Bold Discovery<br />Endless Rainforest
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
              The rainforest at the foot of Arenal Volcano is alive with possibility. Toucans, frogs, and howler monkeys share the canopy with your villa, and every trail leads somewhere worth discovering. Nayara Gardens welcomes families and couples alike, with experiences guided by naturalists who know this forest by name.
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

          {/* Right: image - Desktop only */}
          {/* EXPERIMENT 6: Curtain wipe reveal on desktop image
             A warm overlay slides away to reveal the image.
             To revert: remove CurtainRevealImage wrapper, use plain <img> */}
          <CurtainRevealImage
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Untitleddesign(1)_d91b6c9a.jpg"
            alt="Sloth in rainforest at Nayara Gardens"
            className="hidden md:flex md:flex-1 md:mr-[-24px]"
            aspect="3/4"
          />
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
        {/* Left: image with curtain wipe reveal */}
        <CurtainRevealImage
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/gardens-s3-casita_4be73573.jpg"
          alt="Luxury casita with private pool at Nayara Gardens"
          className="hidden md:flex md:flex-1 md:ml-[-24px]"
          aspect="3/4"
          direction="right"
        />

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
            Nayara Gardens offers spacious casitas and bungalows nestled among tropical gardens, each with a private plunge pool, outdoor terrace, and views of the Arenal Volcano. Vibrant botanical murals, handcrafted furnishings, and open-air living spaces create an immersive rainforest retreat for families and couples alike.
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
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/gardens-s3-casita_4be73573.jpg"
          alt="Luxury casita with private pool at Nayara Gardens"
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
   EXPERIMENT 6: Curtain Wipe Image Reveal
   A warm-toned overlay slides away horizontally to reveal the image.
   To revert: replace <CurtainRevealImage> with plain <div><img></div>.
   ═══════════════════════════════════════════════════════════ */
function CurtainRevealImage({
  src,
  alt,
  className = "",
  aspect = "3/4",
  direction = "left",
}: {
  src: string;
  alt: string;
  className?: string;
  aspect?: string;
  direction?: "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full object-cover"
        style={{ aspectRatio: aspect }}
        loading="lazy"
      />
      {/* Curtain overlay that slides away */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #e8e3db 0%, #d4cfc5 50%, #c5b596 100%)",
          transformOrigin: direction === "left" ? "left center" : "right center",
        }}
        initial={{ scaleX: 1 }}
        animate={isInView ? { scaleX: 0 } : {}}
        transition={{
          duration: 1.2,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </div>
  );
}
