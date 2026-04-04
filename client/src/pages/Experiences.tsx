/**
 * NAYARA EXPERIENCES — Brand Page
 * Nav is exact copy of Home page BrandNavigation
 * Sections: Nav → Hero Video → Footer
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { useIsMobile } from "@/hooks/useMobile";
import BlobVideo from "@/components/BlobVideo";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";

/* ── CDN Assets ── */
const destinations = [
  { label: "Costa Rica", route: "/gardens" },
  { label: "Alto Atacama", route: "/alto-atacama" },
  { label: "Hangaroa", route: "/hangaroa" },
  { label: "Bocas del Toro", route: "/bocas-del-toro" },
];

const CDN = {
  heroVertical:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Video_Nayara_Atacama00003_aeb971e9.MP4",
  heroHorizontal:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Video_Nayara_Atacama00007_8576aa55.MP4",
};



export default function Experiences() {
  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <BrandNavigation hideResorts hideLanguage />
      <HeroSection />
      <Footer />
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════════
   HERO — Full-screen video, H1 centered at bottom
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const isMobile = useIsMobile();

  const heroVideo = isMobile ? CDN.heroVertical : CDN.heroHorizontal;

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
      <div className="absolute inset-0 flex flex-col justify-end items-center px-5 z-10 pb-[5vh]">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-[#ece8e1] max-w-[1052px]"
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 400,
            fontSize: 'clamp(28px, 4vw, 40px)',
            lineHeight: 1,
          }}
        >
          Bespoke Experiences
        </motion.h1>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="w-24 h-px bg-[#ece8e1]/40 mt-4 origin-center"
        />

        {/* Secondary nav — on hero below H1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 md:gap-0 mt-4 flex-wrap justify-center"
        >
          {destinations.map((dest, i) => (
            <span key={dest.label} className="flex items-center">
              <a
                href={dest.route}
                className="text-[#ece8e1]/60 text-[11px] md:text-[12px] uppercase tracking-[0.2em] hover:text-white hover:scale-110 transition-all duration-300 border-b border-transparent hover:border-white/60 pb-0.5"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                {dest.label}
              </a>
              {i < destinations.length - 1 && (
                <span className="mx-4 md:mx-6 text-[#ece8e1]/30 text-[8px]">●</span>
              )}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
