/**
 * Nayara Resorts — Gastronomy Hub Page
 * Showcases all dining venues across all properties.
 * Links to property pages for full menu details.
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { allDining, type Restaurant, type PropertyDining } from "@/data/dining";
import Footer from "@/components/Footer";

/* ── Property filter tabs ── */
const FILTERS = [
  { label: "All Properties", slug: "all" },
  { label: "Costa Rica", slug: "arenal" },
  { label: "Alto Atacama", slug: "alto-atacama" },
  { label: "Hangaroa", slug: "hangaroa" },
  { label: "Bocas del Toro", slug: "bocas-del-toro" },
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

export default function Gastronomy() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [, navigate] = useLocation();

  const filtered: PropertyDining[] =
    activeFilter === "all"
      ? allDining
      : allDining.filter((d) => d.propertySlug === activeFilter);

  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      {/* ── Hero ── */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-[#3a2a1a]">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 50%, rgba(201,185,154,0.3) 0%, transparent 60%), radial-gradient(circle at 70% 30%, rgba(201,185,154,0.2) 0%, transparent 50%)",
            }}
          />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-end items-center pb-12 px-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#c9b99a] text-[10px] md:text-xs tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Nayara Resorts
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-white text-3xl md:text-5xl lg:text-6xl text-center leading-tight"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Gastronomy & Dining
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-white/60 text-sm md:text-base max-w-xl text-center mt-4 leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            From rainforest cocktail bars to overwater Caribbean dining, from
            Rapa Nui seafood to Atacama desert cuisine — discover the culinary
            world of Nayara.
          </motion.p>
        </div>
      </section>

      {/* ── Filter Tabs ── */}
      <section className="sticky top-0 z-30 bg-[#f7f5f0]/95 backdrop-blur-md border-b border-[#3a2a1a]/8">
        <div className="max-w-6xl mx-auto px-6 py-4 flex gap-3 overflow-x-auto no-scrollbar">
          {FILTERS.map((f) => (
            <button
              key={f.slug}
              onClick={() => setActiveFilter(f.slug)}
              className={`shrink-0 px-4 py-2 rounded-full text-xs tracking-[0.08em] uppercase transition-all duration-300 ${
                activeFilter === f.slug
                  ? "bg-[#3a2a1a] text-white"
                  : "bg-transparent text-[#3a2a1a]/50 hover:text-[#3a2a1a] hover:bg-[#3a2a1a]/5"
              }`}
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* ── Property Sections ── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        {filtered.map((prop, pi) => (
          <motion.div
            key={prop.propertySlug}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: pi * 0.15 }}
            className="mb-20 last:mb-0"
          >
            {/* Property header */}
            <div className="mb-10">
              <span
                className="text-[#c9b99a] text-[10px] tracking-[0.3em] uppercase block mb-2"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                {prop.propertyName}
              </span>
              <h2
                className="text-[#3a2a1a] text-2xl md:text-3xl mb-3"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                {prop.headline}
              </h2>
              <p
                className="text-[#5a4a3a]/60 text-sm md:text-base max-w-2xl leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {prop.description}
              </p>
            </div>

            {/* Restaurant cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {prop.restaurants.map((r, ri) => (
                <RestaurantCard
                  key={r.id}
                  restaurant={r}
                  index={ri}
                  onNavigate={navigate}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </section>

      <Footer />
    </div>
  );
}

/* ── Restaurant Card ── */
function RestaurantCard({
  restaurant,
  index,
  onNavigate,
}: {
  restaurant: Restaurant;
  index: number;
  onNavigate: (path: string) => void;
}) {
  const hasMenu = restaurant.sections.length > 0;
  const totalItems = restaurant.sections.reduce(
    (acc, s) => acc + s.items.length,
    0
  );
  const colorClass =
    cuisineColors[restaurant.cuisine] || "bg-stone-100 text-stone-700";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 border border-[#3a2a1a]/5 flex flex-col"
    >
      {/* Card top accent */}
      <div className="h-1 bg-gradient-to-r from-[#c9b99a] to-[#3a2a1a]/20" />

      <div className="p-6 flex-1 flex flex-col">
        {/* Cuisine badge */}
        <span
          className={`inline-block self-start px-3 py-1 rounded-full text-[10px] tracking-[0.08em] uppercase mb-4 ${colorClass}`}
          style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
        >
          {restaurant.cuisine}
        </span>

        {/* Name */}
        <h3
          className="text-[#3a2a1a] text-xl mb-1"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          {restaurant.name}
        </h3>

        {/* Tagline */}
        <p
          className="text-[#c9b99a] text-xs tracking-[0.04em] italic mb-3"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {restaurant.tagline}
        </p>

        {/* Description */}
        <p
          className="text-[#5a4a3a]/60 text-[13px] leading-relaxed mb-4 flex-1"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {restaurant.description.length > 180
            ? restaurant.description.slice(0, 180) + "..."
            : restaurant.description}
        </p>

        {/* Atmosphere */}
        <div className="flex items-center gap-2 mb-4">
          <svg
            className="w-3.5 h-3.5 text-[#c9b99a]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <span
            className="text-[#5a4a3a]/40 text-[11px]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {restaurant.atmosphere}
          </span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-[#3a2a1a]/5">
          {hasMenu ? (
            <span
              className="text-[#3a2a1a]/40 text-[11px]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {totalItems} menu items · {restaurant.sections.length} sections
            </span>
          ) : (
            <span
              className="text-[#3a2a1a]/30 text-[11px] italic"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Full menu coming soon
            </span>
          )}

          <button
            onClick={() => onNavigate(`/${restaurant.propertySlug}`)}
            className="text-[#c9b99a] text-[11px] tracking-[0.08em] uppercase hover:text-[#3a2a1a] transition-colors"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            View Property →
          </button>
        </div>
      </div>
    </motion.div>
  );
}
