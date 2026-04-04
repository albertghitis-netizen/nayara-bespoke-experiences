/**
 * NAYARA BESPOKE EXPERIENCES — Landing Page
 * Design: "Desert Codex" — Editorial Cartography
 * Property selector showcasing all Nayara destinations
 * Typography: Playfair Display (display) + DM Sans (body)
 * Rule: Real photos only. No AI-generated imagery.
 */

import { motion } from "framer-motion";
import BlobVideo from "@/components/BlobVideo";
import { useIsMobile } from "@/hooks/useMobile";
import AwardWinningProperties from "@/components/AwardWinningProperties";
import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(to bottom, #f5f3f0 0%, #e8e3db 40%, #ddd2c2 70%, #cfc1a8 90%, #c5b596 100%)" }}>
      <ScrollProgress />
      <BrandNavigation pageType="brand" centerLabel="Nayara Resorts" />
      <HeroHeader />
      <HomeIntroSection />
      <div className="h-2 md:h-4" />
      <AwardWinningProperties />
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

  const heroVideo = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/homepage-hero-new-resorts_d66da8e1.mp4";

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
          style={{ fontFamily: "'Montserrat', 'Arial', sans-serif", fontWeight: 700, fontSize: 'clamp(28px, 4vw, 40px)', letterSpacing: '1px', lineHeight: 1, textDecoration: 'none' }}
        >
          NAYARA
        </a>
      </motion.div>

      {/* Content — centered bottom, matching spherical nay-hero__content */}
      <div className="absolute inset-0 flex flex-col justify-end items-center px-5 z-10">
        <h1
          className="text-center text-[#ece8e1] mb-[20px] md:mb-[40px] max-w-[1052px]"
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 400,
            fontSize: 'clamp(28px, 4vw, 40px)',
            lineHeight: 1,
          }}
        >
          Luxury Resorts Rooted in Nature
        </h1>
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
    <section
      className="w-full"
      style={{
        paddingTop: 'clamp(20px, 3vw, 40px)',
        paddingBottom: 0,
      }}
    >
      {/* Two-column layout matching spherical nay-banner--layout-two-cols-image */}
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
            Our resorts belong to the land. In Costa Rica, lush rainforest and mineral hot springs greet you at the foot of Arenal Volcano. In Chile's Atacama, the world's driest desert becomes a place of stillness and discovery. On Easter Island, silent giants stand guard and Rapa Nui culture is ever-present. On a private island on Panama's Caribbean coast, overwater villas rise above the reef.
          </p>
          <p
            className="text-[#4B4A4A]"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: '22.5px',
            }}
          >
            Six properties. Three countries. All designed to bring guests back to nature and leave every ecosystem stronger than we found it.
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

        {/* Right: image — desktop only */}
        <div className="hidden md:flex md:flex-1 md:mr-[-24px]">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Untitleddesign_9702d152.JPEG"
            alt="Woman at Easter Island moai"
            className="w-full h-auto object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>
    
    {/* Mobile-only full-width image */}
    <div className="md:hidden w-screen" style={{ marginLeft: 'calc(-50vw + 50%)', paddingTop: '10px' }}>
      <img
        src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/IMG_6851_d53827e8.jpg"
        alt="Woman at Easter Island moai"
        className="w-full h-auto object-cover"
        loading="eager"
      />
    </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   GRADIENT SPACER — Empty section for gradient visibility
   ═══════════════════════════════════════════════════════════════ */
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

function PlaceholderSection({ title, flipped = false }: { title: string; flipped?: boolean }) {
  const textBlock = (
    <div className="flex flex-col gap-10 md:flex-1">
      <h3
        className="text-[#4B4A4A]"
        style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 400,
          fontSize: 'clamp(28px, 4vw, 42px)',
          lineHeight: 1.3,
        }}
      >
        {title}
      </h3>
      <p
        className="text-[#4B4A4A]"
        style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 400,
          fontSize: '15px',
          lineHeight: '22.5px',
        }}
      >
        Placeholder text for this section. Content coming soon.
      </p>
    </div>
  );

  const imageBlock = (
    <div className="md:flex-1">
      <img
        src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/pasted_file_XFrLwM_5-s2-clean_b574ebdd.jpg"
        alt={title}
        className="w-full h-auto object-cover"
        loading="lazy"
      />
    </div>
  );

  return (
    <section
      className="w-full"
      style={{
        paddingTop: 'clamp(40px, 8vw, 80px)',
        paddingBottom: 'clamp(40px, 8vw, 80px)',
      }}
    >
      <div
        className="flex flex-col md:flex-row items-center mx-auto"
        style={{ maxWidth: '1440px', gap: 'clamp(40px, 8vw, 115px)', padding: '0 24px 0 clamp(24px, 8vw, 121px)' }}
      >
        {flipped ? (
          <>{imageBlock}{textBlock}</>
        ) : (
          <>{textBlock}{imageBlock}</>
        )}
      </div>
    </section>
  );
}
