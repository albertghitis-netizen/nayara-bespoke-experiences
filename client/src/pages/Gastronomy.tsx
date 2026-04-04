/**
 * NAYARA GASTRONOMY — Brand-Level Pillar Page
 * Dining across all 6 properties
 * One-axis filter: property selector
 * Hero → Intro → Filter → Restaurant Cards → CTA → Footer
 */

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import BlobVideo from "@/components/BlobVideo";
import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { allDining, type Restaurant, type PropertyDining } from "@/data/dining";

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

const GASTRO_CDN = {
  heroVideo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/gastronomy-hero-edited_3e0a63fa.mp4",
};

/* ── Property filter tabs ── */
const FILTERS = [
  { label: "All Properties", slug: "all" },
  { label: "Alto Atacama", slug: "alto-atacama" },
  { label: "Bocas del Toro", slug: "bocas-del-toro" },
  { label: "Costa Rica", slug: "arenal" },
  { label: "Hangaroa", slug: "hangaroa" },
];

/* ── Cuisine badge colors ── */
const cuisineColors: Record<string, string> = {
  "Cocktail Bar": "bg-amber-100 text-amber-800",
  "Cocktail Bar & Terrace": "bg-amber-100 text-amber-800",
  "Pan-Asian Fusion": "bg-rose-100 text-rose-800",
  "Latin American": "bg-orange-100 text-orange-800",
  "Coffee House & Breakfast": "bg-yellow-100 text-yellow-800",
  "Wine Bar & Tapas": "bg-purple-100 text-purple-800",
  "Pacific Island & Chilean": "bg-teal-100 text-teal-800",
  "Chilean Desert Cuisine": "bg-red-100 text-red-800",
  "Caribbean & Panamanian": "bg-cyan-100 text-cyan-800",
  "Spa & Wellness": "bg-emerald-100 text-emerald-800",
};

/* ── Route map for property slugs ── */
const propertyRoutes: Record<string, string> = {
  arenal: "/gardens",
  "alto-atacama": "/alto-atacama",
  hangaroa: "/hangaroa",
  "bocas-del-toro": "/bocas-del-toro",
};

export default function Gastronomy() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [, navigate] = useLocation();

  const filtered: PropertyDining[] =
    activeFilter === "all"
      ? allDining
      : allDining.filter((d) => d.propertySlug === activeFilter);

  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <ScrollProgress />
      <BrandNavigation pageType="brand" centerLabel="Gastronomy" />
      <HeroSection />
      <IntroSection />
      <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <PropertySections filtered={filtered} navigate={navigate} />
      <CTASection />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <BlobVideo src={GASTRO_CDN.heroVideo} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }} className="text-white text-3xl md:text-5xl lg:text-6xl tracking-wide text-center" style={heading}>
          A Taste of Place
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="text-white/50 text-[13px] md:text-[15px] mt-4 tracking-[0.12em] uppercase" style={{ ...body, fontWeight: 500 }}>
          Cuisine Rooted in Every Landscape
        </motion.p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   INTRO
   ═══════════════════════════════════════════════════════════════ */
function IntroSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10">
      <div className="max-w-[900px] mx-auto">
        <FadeIn>
          <p className="text-[#3a2a1a]/35 text-[10px] tracking-[0.3em] uppercase mb-4" style={{ ...body, fontWeight: 600 }}>Culinary Philosophy</p>
          <h2 className="text-[#4B4A4A] mb-8" style={{ ...heading, fontSize: "clamp(24px, 3.5vw, 38px)", lineHeight: 1.15 }}>
            Every Dish Tells the Story of Its Land
          </h2>
          <p className="text-[#4B4A4A]/70 text-[15px] leading-[1.8]" style={body}>
            From Michelin-recognized kitchens in the Costa Rican rainforest to Pacific Island cuisine on Easter Island, from desert-adapted Chilean fare in the Atacama to Caribbean-Panamanian fusion over the water in Bocas del Toro — every Nayara restaurant sources locally, cooks seasonally, and honors the culinary traditions of its place. Seventy percent of our ingredients come from within 100 kilometers of each property.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FILTER BAR
   ═══════════════════════════════════════════════════════════════ */
function FilterBar({ activeFilter, onFilterChange }: { activeFilter: string; onFilterChange: (slug: string) => void }) {
  return (
    <section className="px-6 md:px-10 pb-8">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-[#3a2a1a]/35 text-[10px] tracking-[0.3em] uppercase mb-3" style={{ ...body, fontWeight: 600 }}>Filter by Destination</p>
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.slug}
              onClick={() => onFilterChange(f.slug)}
              className={`px-4 py-1.5 text-xs tracking-[0.1em] rounded-full border transition-all duration-300 ${
                activeFilter === f.slug
                  ? "bg-[#3a2a1a] text-white border-[#3a2a1a]"
                  : "bg-transparent text-[#5a4a3a]/60 border-[#3a2a1a]/15 hover:border-[#3a2a1a]/40 hover:text-[#3a2a1a]"
              }`}
              style={{ ...body, fontWeight: 500 }}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PROPERTY SECTIONS — Grouped by property
   ═══════════════════════════════════════════════════════════════ */
function PropertySections({ filtered, navigate }: { filtered: PropertyDining[]; navigate: (path: string) => void }) {
  return (
    <section className="px-6 md:px-10 pb-16 md:pb-24">
      <div className="max-w-[1200px] mx-auto">
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-20">
              <p className="text-[#3a2a1a]/40 text-lg" style={heading}>No restaurants match the selected filter</p>
            </motion.div>
          ) : (
            filtered.map((prop, pi) => (
              <motion.div
                key={prop.propertySlug}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: pi * 0.1 }}
                className="mb-16 last:mb-0"
              >
                {/* Property header */}
                <div className="mb-8">
                  <p className="text-[#3a2a1a]/30 text-[10px] tracking-[0.3em] uppercase mb-2" style={{ ...body, fontWeight: 600 }}>{prop.propertyName}</p>
                  <h2 className="text-[#3a2a1a] text-xl md:text-2xl mb-2" style={heading}>{prop.headline}</h2>
                  <p className="text-[#4B4A4A]/55 text-[14px] max-w-2xl leading-relaxed" style={body}>{prop.description}</p>
                </div>

                {/* Restaurant cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {prop.restaurants.map((r, ri) => (
                    <RestaurantCard key={r.id} restaurant={r} index={ri} onNavigate={navigate} />
                  ))}
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ── Restaurant Card ── */
function RestaurantCard({ restaurant, index, onNavigate }: { restaurant: Restaurant; index: number; onNavigate: (path: string) => void }) {
  const hasMenu = restaurant.sections.length > 0;
  const totalItems = restaurant.sections.reduce((acc, s) => acc + s.items.length, 0);
  const colorClass = cuisineColors[restaurant.cuisine] || "bg-stone-100 text-stone-700";
  const route = propertyRoutes[restaurant.propertySlug] || `/${restaurant.propertySlug}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group bg-white/60 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 border border-[#3a2a1a]/5 flex flex-col"
    >
      <div className="h-0.5 bg-gradient-to-r from-[#c9b99a]/40 to-transparent" />
      <div className="p-6 flex-1 flex flex-col">
        <span className={`inline-block self-start px-3 py-1 rounded-full text-[10px] tracking-[0.08em] uppercase mb-4 ${colorClass}`} style={{ ...body, fontWeight: 500 }}>
          {restaurant.cuisine}
        </span>
        <h3 className="text-[#3a2a1a] text-lg mb-1" style={{ ...heading, fontWeight: 500 }}>{restaurant.name}</h3>
        <p className="text-[#c9b99a] text-[11px] tracking-[0.04em] italic mb-3" style={body}>{restaurant.tagline}</p>
        <p className="text-[#4B4A4A]/55 text-[13px] leading-relaxed mb-4 flex-1 line-clamp-3" style={body}>
          {restaurant.description}
        </p>
        {restaurant.atmosphere && (
          <p className="text-[#4B4A4A]/30 text-[11px] mb-4" style={body}>{restaurant.atmosphere}</p>
        )}
        <div className="flex items-center justify-between pt-4 border-t border-[#3a2a1a]/5">
          {hasMenu ? (
            <span className="text-[#3a2a1a]/30 text-[11px]" style={body}>{totalItems} menu items</span>
          ) : (
            <span className="text-[#3a2a1a]/20 text-[11px] italic" style={body}>Menu coming soon</span>
          )}
          <button onClick={() => onNavigate(route)} className="text-[#c9b99a] text-[11px] tracking-[0.08em] uppercase hover:text-[#3a2a1a] transition-colors" style={{ ...body, fontWeight: 500 }}>
            View Property \u2192
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CTA
   ═══════════════════════════════════════════════════════════════ */
function CTASection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10 bg-[#3a2a1a]">
      <div className="max-w-[800px] mx-auto text-center">
        <FadeIn>
          <h2 className="text-white/80 mb-4" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>
            Reserve Your Table
          </h2>
          <p className="text-white/40 text-[14px] leading-relaxed mb-8" style={body}>
            From rainforest fine dining to overwater Caribbean kitchens, every meal at Nayara is a destination.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {Object.entries(propertyRoutes).map(([slug, route]) => {
              const label = slug === "arenal" ? "Costa Rica" : slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
              return (
                <Link key={slug} href={route} className="px-5 py-2.5 border border-white/15 rounded-full text-white/60 text-[12px] tracking-[0.08em] hover:border-white/40 hover:text-white/90 hover:bg-white/5 transition-all" style={{ ...body, fontWeight: 500 }}>
                  {label}
                </Link>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
