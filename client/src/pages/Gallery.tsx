/**
 * NAYARA GALLERY — Brand-level gallery page
 * Placeholder structure with hotel filter
 */

import { useState } from "react";
import { motion } from "framer-motion";
import BrandNavigation from "@/components/BrandNavigation";
import HotelFilterBar from "@/components/HotelFilterBar";
import Footer from "@/components/Footer";

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

export default function Gallery() {
  const [activeHotel, setActiveHotel] = useState("alto-atacama");

  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <BrandNavigation pageType="brand" hideCenterLabel />

      {/* Hero */}
      <section className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-[#3B2B26]/20 to-[#3B2B26]/5">
        <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#3B2B26] text-xl md:text-3xl lg:text-4xl tracking-wide text-center"
            style={heading}
          >
            Gallery
          </motion.h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="text-[#3B2B26]/35 text-[10px] tracking-[0.3em] mb-4" style={{ ...body, fontWeight: 600 }}>Visual Stories</p>
          <h2 className="text-[#4B4A4A] mb-8" style={{ ...heading, fontSize: "clamp(24px, 3.5vw, 38px)", lineHeight: 1.15 }}>
            Photography & Video from Six Destinations
          </h2>
          <p className="text-[#4B4A4A]/70 text-[15px] leading-[1.8]" style={body}>
            Our curated collection of photography and video from across all six Nayara destinations is being prepared. Check back soon.
          </p>
        </div>
      </section>

      {/* Hotel Filter */}
      <HotelFilterBar activeHotel={activeHotel} onHotelChange={setActiveHotel} />

      {/* Placeholder */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="text-[#3B2B26]/40 text-lg" style={heading}>Gallery content coming soon for {activeHotel}</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
