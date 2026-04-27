/**
 * PURA VIDA — Costa Rica Hub Page
 * Hero video with audio + mute pill
 * Five pillar cards linking to sub-pages
 */

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

const CDN = {
  heroVideo: "/manus-storage/541D91ED-B1A1-4C62-864D-146A15D699EE_6b38d29f.mp4",
};

const PILLARS = [
  {
    id: "curated-excursions",
    label: "Curated Excursions",
    route: "/curated-excursions",
    description: "Rainforest adventures and off-property experiences",
  },
  {
    id: "nurtured-by-nature",
    label: "Nurtured by Nature",
    route: "/wellness",
    description: "Spa and wellness treatments",
  },
  {
    id: "forest-to-table",
    label: "Forest to Table",
    route: "/gastronomy",
    description: "Fine dining across three properties",
  },
  {
    id: "family-adventure",
    label: "Family Adventure",
    route: "/family-expeditions",
    description: "Experiences for families and children",
  },
  {
    id: "rainforest-romance",
    label: "Rainforest Romance",
    route: "/rainforest-romance",
    description: "Romantic getaways and special occasions",
  },
];

export default function PuraVida() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <BrandNavigation pageType="brand" hideCenterLabel />

      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden bg-black">
        <video
          ref={videoRef}
          src={CDN.heroVideo}
          autoPlay
          loop
          muted={isMuted}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none" />

        {/* Mute Pill */}
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onClick={toggleMute}
          className="absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 border border-white/20"
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-white" />
          ) : (
            <Volume2 className="w-4 h-4 text-white" />
          )}
          <span className="text-white text-xs tracking-[0.1em] font-medium">
            {isMuted ? "Sound" : "Muted"}
          </span>
        </motion.button>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-end items-center pb-16 md:pb-24 px-6 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-3xl md:text-5xl lg:text-6xl tracking-wide text-center"
            style={heading}
          >
            Pura Vida
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/60 text-sm md:text-base tracking-[0.1em] mt-4"
            style={body}
          >
            Costa Rica · Arenal Volcano · Three Resorts
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-[900px] mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[#4B4A4A]/70 text-[15px] leading-[1.8]"
            style={body}
          >
            Experience the essence of Costa Rica across three interconnected properties in the Arenal region. From rainforest adventures and world-class dining to transformative wellness and family moments, Pura Vida encompasses everything that makes Costa Rica extraordinary.
          </motion.p>
        </div>
      </section>

      {/* Pillars Grid */}
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link href={pillar.route}>
                  <a className="group block h-full p-8 rounded-lg bg-white/60 hover:bg-white/80 transition-all duration-300 border border-[#3B2B26]/5 hover:shadow-lg">
                    <h3
                      className="text-[#3B2B26] text-lg md:text-xl mb-2 group-hover:text-[#c9b99a] transition-colors"
                      style={{ ...heading, fontWeight: 500 }}
                    >
                      {pillar.label}
                    </h3>
                    <p className="text-[#4B4A4A]/60 text-[13px] leading-relaxed" style={body}>
                      {pillar.description}
                    </p>
                    <div className="mt-4 flex items-center text-[#c9b99a] text-[11px] tracking-[0.08em] opacity-0 group-hover:opacity-100 transition-opacity" style={{ ...body, fontWeight: 500 }}>
                      Explore →
                    </div>
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
