/**
 * ROOM SLIDER — Horizontal card carousel for room types
 *
 * Same style as PropertySlider on homepage but with video backgrounds.
 * Each card: looping muted video, room name, stats, Explore + Reserve pills.
 * Accepts property palette for theming.
 *
 * Video-only for now — photo overlay slot reserved for later.
 */
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ── Typography ── */
const display: React.CSSProperties = { fontFamily: "var(--font-display)", fontWeight: 400 };
const body: React.CSSProperties = { fontFamily: "var(--font-body)", fontWeight: 400 };

/* ── Types ── */
export interface RoomSliderCard {
  id: string;
  label: string;
  tagline?: string;
  sqft?: string;
  sqm?: string;
  guests: string;
  video: string;
  /** Photo URL — reserved for later when user provides stills */
  photo?: string;
  exploreLink: string;
  bookingUrl: string;
}

interface RoomSliderProps {
  sectionLabel?: string;
  headline?: string;
  description?: string;
  rooms: RoomSliderCard[];
  palette: {
    bg: string;
    text: string;
    textSecondary: string;
    primary: string;
    cardBg: string;
    cardBorder?: string;
    pillBg?: string;
    pillText?: string;
  };
}

export default function RoomSlider({
  sectionLabel = "Accommodations",
  headline = "Our Rooms",
  description,
  rooms,
  palette,
}: RoomSliderProps) {
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
    const cardWidth = el.querySelector("[data-room-card]")?.clientWidth || 420;
    el.scrollBy({ left: dir === "left" ? -cardWidth - 24 : cardWidth + 24, behavior: "smooth" });
  };

  const pillBg = palette.pillBg || palette.primary;
  const pillText = palette.pillText || "#ffffff";

  return (
    <section className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: palette.bg }}>
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <p
          className="text-[11px] tracking-[0.2em] uppercase mb-4"
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
        {description && (
          <p
            className="text-[15px] leading-[1.8] max-w-[700px] mb-10"
            style={{ ...body, color: palette.textSecondary }}
          >
            {description}
          </p>
        )}

        {/* Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
              style={{ backgroundColor: palette.cardBg, color: palette.text }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {/* Right Arrow */}
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
            {rooms.map((room, i) => (
              <motion.div
                key={room.id}
                data-room-card
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex-shrink-0 w-[340px] md:w-[420px] lg:w-[480px] rounded-xl overflow-hidden transition-shadow hover:shadow-xl"
                style={{
                  backgroundColor: palette.cardBg,
                  border: palette.cardBorder ? `1px solid ${palette.cardBorder}` : "none",
                  scrollSnapAlign: "start",
                }}
              >
                {/* Video */}
                <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
                  <video
                    src={room.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay at bottom for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Room name overlay on video */}
                  <div className="absolute bottom-4 left-5 right-5">
                    <h3
                      className="text-white text-lg md:text-xl tracking-wide"
                      style={{ ...display }}
                    >
                      {room.label}
                    </h3>
                    {room.tagline && (
                      <p
                        className="text-white/70 text-[12px] tracking-[0.03em] mt-1"
                        style={{ ...body }}
                      >
                        {room.tagline}
                      </p>
                    )}
                  </div>
                </div>

                {/* Info section below video */}
                <div className="p-5">
                  {/* Stats */}
                  <div className="flex flex-wrap gap-3 mb-5">
                    {room.sqft && (
                      <span
                        className="text-[11px] tracking-[0.08em] px-2.5 py-1 rounded-full"
                        style={{
                          ...body,
                          fontWeight: 500,
                          color: palette.primary,
                          backgroundColor: `${palette.primary}12`,
                        }}
                      >
                        {room.sqft} sqft
                      </span>
                    )}
                    {room.sqm && (
                      <span
                        className="text-[11px] tracking-[0.08em] px-2.5 py-1 rounded-full"
                        style={{
                          ...body,
                          fontWeight: 500,
                          color: palette.primary,
                          backgroundColor: `${palette.primary}12`,
                        }}
                      >
                        {room.sqm} m²
                      </span>
                    )}
                    <span
                      className="text-[11px] tracking-[0.08em] px-2.5 py-1 rounded-full"
                      style={{
                        ...body,
                        fontWeight: 500,
                        color: palette.primary,
                        backgroundColor: `${palette.primary}12`,
                      }}
                    >
                      {room.guests}
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={room.exploreLink}
                      className="flex-1 flex items-center justify-center px-4 py-2.5 rounded-full text-[11px] tracking-[0.15em] uppercase font-medium transition-all hover:scale-[1.02] hover:shadow-md"
                      style={{
                        ...body,
                        fontWeight: 500,
                        backgroundColor: pillBg,
                        color: pillText,
                      }}
                    >
                      Explore
                    </a>
                    <a
                      href={room.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-4 py-2.5 rounded-full text-[11px] tracking-[0.15em] uppercase font-medium transition-all hover:scale-[1.02] hover:shadow-md"
                      style={{
                        ...body,
                        fontWeight: 500,
                        backgroundColor: "transparent",
                        color: palette.text,
                        border: `1px solid ${palette.primary}40`,
                      }}
                    >
                      Reserve
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
