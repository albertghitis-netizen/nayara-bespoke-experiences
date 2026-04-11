/**
 * PropertyDiningSection — Reusable dining section for property pages.
 * Renders restaurant cards with expandable menus from dining.ts data.
 * Design: Editorial magazine style matching the site's "Desert Codex" language.
 */

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, Leaf, MapPin, Clock, Utensils } from "lucide-react";
import type { PropertyDining, Restaurant, MenuSection, MenuItem } from "@/data/dining";

interface Props {
  dining: PropertyDining;
  /** Background color variant — matches property page palette */
  bgClass?: string;
  /** Text color for headings */
  headingColor?: string;
  /** Accent color for badges and highlights */
  accentColor?: string;
}

export default function PropertyDiningSection({
  dining,
  bgClass = "bg-[#f0ebe0]",
  headingColor = "text-[#3a2a1a]",
  accentColor = "bg-[#8b6f47]",
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="dining" className={`${bgClass} py-20 md:py-28 px-6 md:px-10`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span
            className="text-[11px] tracking-[0.3em] text-[#8b6f47] block mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            The Table
          </span>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl ${headingColor} mb-6`}
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            {dining.headline}
          </h2>
          <p
            className="text-[#5a4a3a]/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {dining.description}
          </p>
        </motion.div>

        {/* Restaurant Cards */}
        <div className="space-y-8">
          {dining.restaurants.map((restaurant, idx) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              index={idx}
              isInView={isInView}
              headingColor={headingColor}
              accentColor={accentColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Restaurant Card ─────────────────────────────────────── */
function RestaurantCard({
  restaurant,
  index,
  isInView,
  headingColor,
  accentColor,
}: {
  restaurant: Restaurant;
  index: number;
  isInView: boolean;
  headingColor: string;
  accentColor: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-white/60 backdrop-blur-sm border border-stone-200/60 overflow-hidden"
    >
      {/* Restaurant Header — always visible */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-6 md:p-8 flex items-start md:items-center justify-between gap-4 hover:bg-white/40 transition-colors"
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <h3
              className={`text-xl md:text-2xl ${headingColor}`}
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              {restaurant.name}
            </h3>
            <span
              className={`${accentColor} text-white text-[10px] tracking-[0.15em] px-2.5 py-1`}
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              {restaurant.cuisine}
            </span>
          </div>
          <p
            className="text-[#5a4a3a]/60 text-sm italic mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {restaurant.tagline}
          </p>
          <p
            className="text-[#5a4a3a]/50 text-xs max-w-xl leading-relaxed hidden md:block"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {restaurant.description}
          </p>
          {/* Meta info */}
          <div className="flex items-center gap-4 mt-3 text-[#5a4a3a]/40 text-xs">
            {restaurant.hours && (
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {restaurant.hours}
              </span>
            )}
            {restaurant.dressCode && (
              <span className="flex items-center gap-1">
                <Utensils className="w-3 h-3" />
                {restaurant.dressCode}
              </span>
            )}
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {restaurant.property}
            </span>
          </div>
        </div>

        {/* Expand indicator */}
        {restaurant.sections.length > 0 && (
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 mt-1"
          >
            <ChevronDown className="w-5 h-5 text-[#8b6f47]" />
          </motion.div>
        )}
      </button>

      {/* Expandable Menu Content */}
      <AnimatePresence>
        {expanded && restaurant.sections.length > 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 pb-8 border-t border-stone-200/40">
              {restaurant.sections.map((section, sIdx) => (
                <MenuSectionBlock
                  key={sIdx}
                  section={section}
                  headingColor={headingColor}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── Menu Section Block ──────────────────────────────────── */
function MenuSectionBlock({
  section,
  headingColor,
}: {
  section: MenuSection;
  headingColor: string;
}) {
  return (
    <div className="mt-8">
      <div className="flex items-center gap-3 mb-1">
        <h4
          className={`text-sm tracking-[0.15em] ${headingColor}/80`}
          style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
        >
          {section.title}
        </h4>
        <div className="flex-1 h-px bg-stone-300/40" />
      </div>
      {section.subtitle && (
        <p
          className="text-[#5a4a3a]/40 text-xs italic mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {section.subtitle}
        </p>
      )}

      <div className="grid gap-4 mt-4">
        {section.items.map((item, iIdx) => (
          <MenuItemRow key={iIdx} item={item} />
        ))}
      </div>
    </div>
  );
}

/* ─── Menu Item Row ───────────────────────────────────────── */
function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="flex items-start justify-between gap-4 py-2 border-b border-stone-200/30 last:border-0">
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span
            className="text-[#3a2a1a] text-sm"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            {item.name}
          </span>
          {item.nameLocal && (
            <span
              className="text-[#5a4a3a]/40 text-xs italic"
              style={{ fontFamily: "var(--font-display)" }}
            >
              ({item.nameLocal})
            </span>
          )}
          {item.isVegetarian && (
            <Leaf className="w-3 h-3 text-green-600/60" />
          )}
          {item.isLocal && (
            <MapPin className="w-3 h-3 text-amber-600/60" />
          )}
          {item.isNonAlcoholic && (
            <span className="text-[9px] tracking-[0.1em] text-emerald-600/60 border border-emerald-300/40 px-1.5 py-0.5 rounded">
              N/A
            </span>
          )}
        </div>
        <p
          className="text-[#5a4a3a]/50 text-xs mt-0.5 leading-relaxed max-w-lg"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {item.description}
        </p>
        {item.ingredients && (
          <p
            className="text-[#5a4a3a]/30 text-[10px] mt-1 italic"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {item.ingredients}
          </p>
        )}
      </div>
      {item.price && (
        <span
          className="text-[#8b6f47] text-sm flex-shrink-0 mt-0.5"
          style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
        >
          {item.price}
        </span>
      )}
    </div>
  );
}
