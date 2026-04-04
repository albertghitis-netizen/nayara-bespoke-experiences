/**
 * NAYARA EXPERIENCES — Brand Page
 * Rebuilt to match home page header design
 * Sections: Nav → Hero Video → Footer
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { useIsMobile } from "@/hooks/useMobile";
import BlobVideo from "@/components/BlobVideo";
import Footer from "@/components/Footer";

/* ── CDN Assets ── */
const CDN = {
  heroVertical:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Video_Nayara_Atacama00007_8576aa55.MP4",
  heroHorizontal:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Video_Nayara_Atacama00003_aeb971e9.MP4",
};

export default function Experiences() {
  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <BrandNavigation />
      <HeroSection />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BRAND NAVIGATION — Hamburger pill left, Reserve pill right
   ═══════════════════════════════════════════════════════════════ */
function BrandNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [, navigate] = useLocation();

  const handleNavigate = (route: string) => {
    setMenuOpen(false);
    navigate(route);
  };

  const handleComingSoon = (label: string) => {
    setMenuOpen(false);
    import("sonner").then(({ toast }) => toast(label + " — Coming Soon"));
  };

  const pillClass =
    "pointer-events-auto flex items-center justify-center rounded-full bg-[#ece8e1] backdrop-blur-md shadow-lg hover:bg-[#ece8e1]/90 transition-colors cursor-pointer border border-[#3a2a1a]/20";

  return (
    <>
      {/* Fixed pills — always visible */}
      <div className="fixed top-6 left-6 right-6 z-50 flex items-center justify-between pointer-events-none">
        {/* Hamburger pill */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`${pillClass} w-12 h-12`}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block w-5 h-px bg-[#3a2a1a] transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-[#3a2a1a] transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
              }`}
            />
          </div>
        </button>

        {/* Reserve pill */}
        <button
          onClick={() => handleComingSoon("Reservation")}
          className={`${pillClass} h-12 px-6`}
        >
          <span
            className="text-[#3a2a1a] text-[11px] tracking-[0.25em] uppercase"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Reserve
          </span>
        </button>
      </div>

      {/* Full-screen menu overlay */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-40 bg-[#f7f5f0]/98 backdrop-blur-md overflow-y-auto"
        >
          <div className="max-w-lg mx-auto px-8 pt-28 pb-16">
            {/* Back to Home */}
            <button
              onClick={() => handleNavigate("/")}
              className="block w-full text-left py-4 border-b border-stone-200"
            >
              <span
                className="text-[#3a2a1a] text-lg tracking-[0.08em] uppercase"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                Home
              </span>
            </button>

            {/* Experiences */}
            <button
              onClick={() => handleComingSoon("Experiences")}
              className="block w-full text-left py-4 border-b border-stone-200"
            >
              <span
                className="text-[#3a2a1a] text-lg tracking-[0.08em] uppercase"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                Experiences
              </span>
            </button>

            {/* Wellness */}
            <button
              onClick={() => handleComingSoon("Wellness")}
              className="block w-full text-left py-4 border-b border-stone-200"
            >
              <span
                className="text-[#3a2a1a] text-lg tracking-[0.08em] uppercase"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                Wellness
              </span>
            </button>

            {/* Sustainability */}
            <button
              onClick={() => handleNavigate("/sustainability")}
              className="block w-full text-left py-4 border-b border-stone-200"
            >
              <span
                className="text-[#3a2a1a] text-lg tracking-[0.08em] uppercase"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                Sustainability
              </span>
            </button>

            {/* Awards */}
            <button
              onClick={() => handleNavigate("/awards")}
              className="block w-full text-left py-4 border-b border-stone-200"
            >
              <span
                className="text-[#3a2a1a] text-lg tracking-[0.08em] uppercase"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                Awards
              </span>
            </button>

            {/* Journal */}
            <button
              onClick={() => handleNavigate("/journal")}
              className="block w-full text-left py-4 border-b border-stone-200"
            >
              <span
                className="text-[#3a2a1a] text-lg tracking-[0.08em] uppercase"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                Journal
              </span>
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO — Full-screen video, H1 centered at bottom
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const isMobile = useIsMobile();
  
  // Vertical video for mobile, horizontal for desktop
  const heroVideo = isMobile
    ? CDN.heroVertical
    : CDN.heroHorizontal;

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0">
        <BlobVideo
          src={heroVideo}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
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

      {/* Content — centered bottom */}
      <div className="absolute inset-0 flex flex-col justify-end items-center px-5 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-white mb-[50px] md:mb-[85px] max-w-[1052px] text-2xl md:text-4xl lg:text-5xl leading-[0.95] tracking-wide"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
          }}
        >
          Curated Experiences
        </motion.h1>
      </div>
    </section>
  );
}
