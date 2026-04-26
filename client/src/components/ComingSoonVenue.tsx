/**
 * ComingSoonVenue — Reusable "Coming Soon" shell for restaurant & wellness deeper pages
 * Elegant, minimal design with Nayara brand language
 */

import { motion } from "framer-motion";
import { useLocation } from "wouter";
import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";

export interface VenueInfo {
  name: string;
  tagline: string;
  description: string;
  category: "gastronomy" | "wellness";
  categoryLabel: string;
  property?: string;          // e.g. "Nayara Tented Camp"
  cuisine?: string;           // e.g. "Pan-Asian Fusion"
  atmosphere?: string;        // e.g. "Open-air tropical garden"
  hours?: string;
  heroImage?: string;         // CDN URL — optional, falls back to gradient
  backLink: string;           // e.g. "/tented-camp"
  backLabel: string;          // e.g. "Nayara Tented Camp"
}

export default function ComingSoonVenue({ venue }: { venue: VenueInfo }) {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <BrandNavigation />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        {venue.heroImage ? (
          <img
            src={venue.heroImage}
            alt={venue.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#3a2a1a] via-[#5a4a3a] to-[#2a1a0a]" />
        )}
        <div className="absolute inset-0 bg-black/40" />

        {/* Back button — top center */}
        <div className="absolute top-6 left-0 right-0 z-20 flex justify-center">
          <button
            onClick={() => navigate(venue.backLink)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <svg className="w-3.5 h-3.5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            <span
              className="text-white/80 text-[10px] tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {venue.backLabel}
            </span>
          </button>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end items-center pb-16 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center max-w-2xl"
          >
            <span
              className="text-white/40 text-[10px] tracking-[0.35em] uppercase block mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {venue.categoryLabel}
            </span>
            <h1
              className="text-white text-3xl md:text-5xl tracking-wide mb-4"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              {venue.name}
            </h1>
            <p
              className="text-white/60 text-sm md:text-base tracking-wide"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {venue.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Body */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative line */}
            <div className="w-12 h-px bg-[#3a2a1a]/20 mx-auto mb-8" />

            {venue.property && (
              <span
                className="text-[#5a4a3a]/50 text-[10px] tracking-[0.3em] uppercase block mb-6"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {venue.property}
              </span>
            )}

            <p
              className="text-[#3a2a1a]/70 text-base md:text-lg leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              {venue.description}
            </p>

            {/* Details row */}
            {(venue.cuisine || venue.atmosphere) && (
              <div className="flex flex-wrap justify-center gap-8 mb-12">
                {venue.cuisine && (
                  <div className="text-center">
                    <span
                      className="text-[#5a4a3a]/30 text-[9px] tracking-[0.25em] uppercase block mb-1"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Cuisine
                    </span>
                    <span
                      className="text-[#3a2a1a]/60 text-sm"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {venue.cuisine}
                    </span>
                  </div>
                )}
                {venue.atmosphere && (
                  <div className="text-center">
                    <span
                      className="text-[#5a4a3a]/30 text-[9px] tracking-[0.25em] uppercase block mb-1"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Setting
                    </span>
                    <span
                      className="text-[#3a2a1a]/60 text-sm"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {venue.atmosphere}
                    </span>
                  </div>
                )}
                {venue.hours && (
                  <div className="text-center">
                    <span
                      className="text-[#5a4a3a]/30 text-[9px] tracking-[0.25em] uppercase block mb-1"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Hours
                    </span>
                    <span
                      className="text-[#3a2a1a]/60 text-sm"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {venue.hours}
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* Coming Soon badge */}
            <div className="inline-flex items-center gap-3 px-8 py-4 border border-[#3a2a1a]/10 rounded-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-[#b08d57] animate-pulse" />
              <span
                className="text-[#3a2a1a]/50 text-[11px] tracking-[0.3em] uppercase"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Full Experience Coming Soon
              </span>
            </div>

            {/* Back link */}
            <div className="mt-16">
              <button
                onClick={() => navigate(venue.backLink)}
                className="text-[#5a4a3a]/40 text-[10px] tracking-[0.2em] uppercase hover:text-[#5a4a3a]/70 transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              >
                ← Back to {venue.backLabel}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
