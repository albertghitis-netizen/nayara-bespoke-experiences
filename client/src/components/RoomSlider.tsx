/**
 * ROOM SLIDER — Full-screen layout
 *
 * Layout: Text LEFT, Video/Image RIGHT (consistent, no alternating)
 * Navigation: Elegant thin-line arrows + slide counter
 */
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Typography ── */
const display: React.CSSProperties = { fontFamily: "var(--font-display)", fontWeight: 400 };
const body: React.CSSProperties = { fontFamily: "var(--font-body)", fontWeight: 400 };

/* ── Types ── */
export interface RoomSliderCard {
  id: string;
  label: string;
  tagline?: string;
  description?: string;
  sqft?: string;
  sqm?: string;
  guests: string;
  video: string;
  photo?: string;
  mediaLeft?: boolean;
  exploreLink: string;
  bookingUrl: string;
}

interface RoomSliderProps {
  sectionLabel?: string;
  headline?: string;
  description?: string;
  rooms: RoomSliderCard[];
  forceVideoLeft?: boolean;
  startVideoLeft?: boolean;
  hideArrows?: boolean;
  palette: {
    bg: string;
    text: string;
    textSecondary: string;
    textTertiary?: string;
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
  forceVideoLeft,
  startVideoLeft,
  hideArrows = false,
  palette,
}: RoomSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const mouseStartX = useRef(0);
  const isDragging = useRef(false);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? rooms.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === rooms.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    mouseStartX.current = e.clientX;
    isDragging.current = true;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const diff = mouseStartX.current - e.clientX;
    if (Math.abs(diff) > 60) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const pillBg = palette.pillBg || palette.primary;
  const pillText = palette.pillText || "#ffffff";
  const currentRoom = rooms[currentIndex];

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (dir: number) => ({ zIndex: 0, x: dir < 0 ? 80 : -80, opacity: 0 }),
  };

  const mediaVariants = {
    enter: (dir: number) => ({ opacity: 0, scale: 1.03 }),
    center: { zIndex: 1, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ zIndex: 0, opacity: 0, scale: 0.97 }),
  };

  return (
    <section
      className="relative w-full h-screen overflow-hidden cursor-grab active:cursor-grabbing"
      style={{ backgroundColor: palette.bg }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {/* ─── DESKTOP LAYOUT ─── */}
      <div className="hidden md:flex w-full h-full">
        {/* Text half */}
        <div
          className="w-1/2 h-full flex items-center px-12 lg:px-16 xl:px-20"
          style={{ backgroundColor: palette.bg }}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`text-${currentIndex}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              <p
                className="text-[10px] tracking-[0.2em] uppercase mb-4"
                style={{ ...body, fontWeight: 500, color: palette.primary }}
              >
                {sectionLabel}
              </p>
              <h2
                className="text-3xl lg:text-4xl xl:text-5xl tracking-wide mb-3"
                style={{ ...display, color: palette.text }}
              >
                {currentRoom.label}
              </h2>
              {currentRoom.tagline && (
                <p
                  className="text-sm lg:text-base tracking-[0.03em] mb-3 max-w-[400px]"
                  style={{ ...body, color: palette.textSecondary }}
                >
                  {currentRoom.tagline}
                </p>
              )}
              {currentRoom.description && (
                <p
                  className="text-xs lg:text-sm leading-relaxed mb-6 max-w-[400px]"
                  style={{ ...body, color: palette.textTertiary || palette.textSecondary }}
                >
                  {currentRoom.description}
                </p>
              )}

              {/* Stats */}
              <div className="flex flex-wrap gap-2 mb-8">
                {currentRoom.sqft && (
                  <span
                    className="text-[11px] tracking-[0.08em] px-3 py-1.5 rounded-full"
                    style={{ ...body, fontWeight: 500, color: palette.primary, backgroundColor: `${palette.primary}20` }}
                  >
                    {currentRoom.sqft} sqft
                  </span>
                )}
                {currentRoom.sqm && (
                  <span
                    className="text-[11px] tracking-[0.08em] px-3 py-1.5 rounded-full"
                    style={{ ...body, fontWeight: 500, color: palette.primary, backgroundColor: `${palette.primary}20` }}
                  >
                    {currentRoom.sqm} m²
                  </span>
                )}
                <span
                  className="text-[11px] tracking-[0.08em] px-3 py-1.5 rounded-full"
                  style={{ ...body, fontWeight: 500, color: palette.primary, backgroundColor: `${palette.primary}20` }}
                >
                  {currentRoom.guests}
                </span>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={currentRoom.exploreLink}
                  className="px-4 py-2.5 rounded-full text-[11px] tracking-[0.15em] uppercase font-medium transition-all hover:scale-[1.02] hover:shadow-md w-fit"
                  style={{ ...body, fontWeight: 500, backgroundColor: pillBg, color: pillText }}
                >
                  Explore
                </a>
                <a
                  href={currentRoom.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full text-[11px] tracking-[0.15em] uppercase font-medium transition-all hover:scale-[1.02] hover:shadow-md w-fit"
                  style={{ ...body, fontWeight: 500, backgroundColor: "transparent", color: palette.text, border: `1px solid ${palette.textSecondary}40` }}
                >
                  Reserve
                </a>
              </div>

              {/* Navigation arrows + counter */}
              {rooms.length > 1 && !hideArrows && (
                <div className="flex items-center gap-5 mt-12">
                  {/* Prev arrow */}
                  <button
                    onClick={handlePrev}
                    className="group relative w-12 h-12 flex items-center justify-center transition-all duration-300"
                  >
                    <span
                      className="absolute inset-0 rounded-full transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: "#868B75" }}
                    />
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="relative z-10 transition-transform duration-300 group-hover:-translate-x-0.5"
                    >
                      <path
                        d="M20 12H4M4 12L10 6M4 12L10 18"
                        stroke="#ffffff"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {/* Counter */}
                  <div className="flex items-center gap-2">
                    <span
                      className="text-lg tabular-nums"
                      style={{ ...display, color: palette.text }}
                    >
                      {String(currentIndex + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="w-6 h-px"
                      style={{ backgroundColor: `${palette.textSecondary}50` }}
                    />
                    <span
                      className="text-sm tabular-nums"
                      style={{ ...body, color: `${palette.textSecondary}80` }}
                    >
                      {String(rooms.length).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Next arrow */}
                  <button
                    onClick={handleNext}
                    className="group relative w-12 h-12 flex items-center justify-center transition-all duration-300"
                  >
                    <span
                      className="absolute inset-0 rounded-full transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: "#868B75" }}
                    />
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5"
                    >
                      <path
                        d="M4 12H20M20 12L14 6M20 12L14 18"
                        stroke="#ffffff"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Video/Image half */}
        <div className="relative w-1/2 h-full overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`media-${currentIndex}`}
              custom={direction}
              variants={mediaVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              {currentRoom.video ? (
                <video
                  src={currentRoom.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : currentRoom.photo ? (
                <img
                  src={currentRoom.photo}
                  alt={currentRoom.label}
                  className="w-full h-full object-cover"
                />
              ) : null}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ─── MOBILE LAYOUT (full-screen video with overlay) ─── */}
      <div className="md:hidden w-full h-full relative">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={`mobile-${currentIndex}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            {currentRoom.video ? (
              <video
                src={currentRoom.video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            ) : currentRoom.photo ? (
              <img
                src={currentRoom.photo}
                alt={currentRoom.label}
                className="w-full h-full object-cover"
              />
            ) : null}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
            <div className="absolute bottom-0 left-0 right-0 p-6 pb-16">
              <p className="text-[10px] tracking-[0.2em] uppercase mb-2" style={{ ...body, fontWeight: 500, color: palette.primary }}>
                {sectionLabel}
              </p>
              <h2 className="text-white text-2xl tracking-wide mb-1" style={{ ...display }}>
                {currentRoom.label}
              </h2>
              {currentRoom.tagline && (
                <p className="text-white/80 text-sm mb-2" style={{ ...body }}>
                  {currentRoom.tagline}
                </p>
              )}
              {currentRoom.description && (
                <p className="text-white/60 text-xs leading-relaxed mb-4" style={{ ...body }}>
                  {currentRoom.description}
                </p>
              )}
              <div className="flex flex-wrap gap-2 mb-4">
                {currentRoom.sqft && (
                  <span className="text-[10px] tracking-[0.08em] px-2 py-1 rounded-full" style={{ ...body, fontWeight: 500, color: palette.primary, backgroundColor: `${palette.primary}30` }}>
                    {currentRoom.sqft} sqft
                  </span>
                )}
                {currentRoom.sqm && (
                  <span className="text-[10px] tracking-[0.08em] px-2 py-1 rounded-full" style={{ ...body, fontWeight: 500, color: palette.primary, backgroundColor: `${palette.primary}30` }}>
                    {currentRoom.sqm} m²
                  </span>
                )}
                <span className="text-[10px] tracking-[0.08em] px-2 py-1 rounded-full" style={{ ...body, fontWeight: 500, color: palette.primary, backgroundColor: `${palette.primary}30` }}>
                  {currentRoom.guests}
                </span>
              </div>
              <div className="flex gap-3">
                <a href={currentRoom.exploreLink} className="px-4 py-2 rounded-full text-[11px] tracking-[0.12em] uppercase font-medium w-fit" style={{ ...body, fontWeight: 500, backgroundColor: pillBg, color: pillText }}>
                  Explore
                </a>
                <a href={currentRoom.bookingUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full text-[11px] tracking-[0.12em] uppercase font-medium w-fit border border-white/50" style={{ ...body, fontWeight: 500, color: "white" }}>
                  Reserve
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Mobile: swipe hint on first slide */}
        {rooms.length > 1 && currentIndex === 0 && (
          <motion.div
            className="absolute top-1/2 right-4 -translate-y-1/2 z-20 flex items-center gap-1.5"
            style={{ color: "rgba(255,255,255,0.7)" }}
            animate={{ x: [0, -8, 0] }}
            transition={{ duration: 1.8, repeat: 3, ease: "easeInOut" }}
          >
            <span className="text-[9px] tracking-[0.15em] uppercase" style={{ ...body, fontWeight: 500 }}>Swipe</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </motion.div>
        )}

        {/* Mobile dots */}
        {rooms.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {rooms.map((_, i) => (
            <button key={i} onClick={() => { setDirection(i > currentIndex ? 1 : -1); setCurrentIndex(i); }} className="h-2 rounded-full transition-all" style={{ backgroundColor: i === currentIndex ? "white" : "rgba(255,255,255,0.4)", width: i === currentIndex ? "24px" : "8px" }} />
          ))}
        </div>
        )}
      </div>
    </section>
  );
}
