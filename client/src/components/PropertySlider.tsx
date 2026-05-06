/**
 * PropertySlider , Horizontal carousel for Rooms, Sustainability, Gastronomy
 * Used on property home pages as inline preview sections.
 * Accepts palette colors as props so each property can theme it.
 */

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface SliderCard {
  title: string;
  subtitle?: string;
  description: string;
  tags?: string[];
}

interface PropertySliderProps {
  sectionLabel: string;
  headline: string;
  description: string;
  cards: SliderCard[];
  learnMoreLink: string;
  learnMoreLabel?: string;
  palette: {
    bg: string;
    text: string;
    textSecondary: string;
    primary: string;
    cardBg: string;
    cardBorder?: string;
  };
}

const display: React.CSSProperties = { fontFamily: "var(--font-display)", fontWeight: 400 };
const body: React.CSSProperties = { fontFamily: "var(--font-body)", fontWeight: 400 };

export default function PropertySlider({
  sectionLabel,
  headline,
  description,
  cards,
  learnMoreLink,
  learnMoreLabel = "Explore All",
  palette,
}: PropertySliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", checkScroll, { passive: true });
    return () => el?.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("[data-slider-card]")?.clientWidth || 340;
    el.scrollBy({ left: dir === "left" ? -cardWidth - 24 : cardWidth + 24, behavior: "smooth" });
  };

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
          className="text-[15px] leading-[1.8] max-w-[700px] mb-10"
          style={{ ...body, color: palette.textSecondary }}
        >
          {description}
        </p>

        {/* Carousel */}
        <div className="relative">
          {/* Arrows */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
              style={{ backgroundColor: palette.cardBg, color: palette.text }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
              style={{ backgroundColor: palette.cardBg, color: palette.text }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {cards.map((card, i) => (
              <motion.div
                key={i}
                data-slider-card
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex-shrink-0 w-[300px] md:w-[340px] rounded-xl p-6 transition-shadow hover:shadow-lg"
                style={{
                  backgroundColor: palette.cardBg,
                  border: palette.cardBorder ? `1px solid ${palette.cardBorder}` : "none",
                  scrollSnapAlign: "start",
                }}
              >
                <h3
                  className="text-[18px] mb-1"
                  style={{ ...display, fontWeight: 500, color: palette.text }}
                >
                  {card.title}
                </h3>
                {card.subtitle && (
                  <p
                    className="text-[12px] tracking-[0.1em] mb-3"
                    style={{ ...body, fontWeight: 500, color: palette.primary }}
                  >
                    {card.subtitle}
                  </p>
                )}
                <p
                  className="text-[13px] leading-[1.7] mb-4"
                  style={{ ...body, color: palette.textSecondary }}
                >
                  {card.description}
                </p>
                {card.tags && card.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
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
          </div>
        </div>

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
