/**
 * PropertySorter — Category filter tabs + grid for Experiences and Wellness
 * Used on property home pages as inline preview sections.
 * Accepts palette colors as props so each property can theme it.
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface SorterCard {
  title: string;
  subtitle?: string;
  description: string;
  category: string;
  tags?: string[];
}

export interface SorterCategory {
  id: string;
  label: string;
}

interface PropertySorterProps {
  sectionLabel: string;
  headline: string;
  description: string;
  categories: SorterCategory[];
  cards: SorterCard[];
  learnMoreLink: string;
  learnMoreLabel?: string;
  palette: {
    bg: string;
    text: string;
    textSecondary: string;
    primary: string;
    cardBg: string;
    cardBorder?: string;
    pillBg?: string;
    pillActiveBg?: string;
    pillActiveText?: string;
  };
}

const display: React.CSSProperties = { fontFamily: "var(--font-display)", fontWeight: 400 };
const body: React.CSSProperties = { fontFamily: "var(--font-body)", fontWeight: 400 };

export default function PropertySorter({
  sectionLabel,
  headline,
  description,
  categories,
  cards,
  learnMoreLink,
  learnMoreLabel = "Explore All",
  palette,
}: PropertySorterProps) {
  // Filter out "all" categories — user doesn't want an "All" option
  const realCategories = categories.filter((c) => c.id !== "all");
  const [activeCategory, setActiveCategory] = useState(realCategories[0]?.id || "");

  const filtered = cards.filter((c) => c.category === activeCategory);

  return (
    <section className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: palette.bg }}>
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <p
          className="text-[11px] tracking-[0.2em] mb-4"
          style={{ ...body, fontWeight: 500, color: palette.primary }}
        >
          {sectionLabel}
        </p>
        <h2
          className="text-2xl md:text-3xl lg:text-4xl tracking-wide mb-4"
          style={{ ...display, color: palette.text }}
        >
          {headline}
        </h2>
        <p
          className="text-[15px] leading-[1.8] max-w-[700px] mb-8"
          style={{ ...body, color: palette.textSecondary }}
        >
          {description}
        </p>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {realCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="px-4 py-2 rounded-full text-[11px] tracking-[0.12em] transition-all duration-300"
              style={{
                ...body,
                fontWeight: 500,
                backgroundColor:
                  activeCategory === cat.id
                    ? palette.pillActiveBg || palette.primary
                    : palette.pillBg || `${palette.primary}08`,
                color:
                  activeCategory === cat.id
                    ? palette.pillActiveText || "#fff"
                    : palette.textSecondary,
                border: `1px solid ${activeCategory === cat.id ? "transparent" : palette.cardBorder || `${palette.primary}15`}`,
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Card grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.slice(0, 6).map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-xl p-6 transition-shadow hover:shadow-lg"
                style={{
                  backgroundColor: palette.cardBg,
                  border: palette.cardBorder ? `1px solid ${palette.cardBorder}` : "none",
                }}
              >
                <h3
                  className="text-[17px] mb-1"
                  style={{ ...display, fontWeight: 500, color: palette.text }}
                >
                  {card.title}
                </h3>
                {card.subtitle && (
                  <p
                    className="text-[12px] tracking-[0.08em] mb-3"
                    style={{ ...body, fontWeight: 500, color: palette.primary }}
                  >
                    {card.subtitle}
                  </p>
                )}
                <p
                  className="text-[13px] leading-[1.7]"
                  style={{ ...body, color: palette.textSecondary }}
                >
                  {card.description}
                </p>
                {card.tags && card.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {card.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-[10px] tracking-[0.08em] px-2.5 py-1 rounded-full"
                        style={{
                          ...body,
                          fontWeight: 500,
                          color: palette.primary,
                          backgroundColor: `${palette.primary}10`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Learn More link */}
        <div className="mt-8">
          <a
            href={learnMoreLink}
            className="inline-block text-[11px] tracking-[0.15em] transition-colors hover:opacity-70"
            style={{ ...body, fontWeight: 500, color: palette.primary }}
          >
            {learnMoreLabel} →
          </a>
        </div>
      </div>
    </section>
  );
}
