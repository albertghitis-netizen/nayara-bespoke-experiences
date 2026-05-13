/**
 * ROOM SLIDER , Full-screen alternating layout
 *
 * Odd slides (0, 2, 4...): vertical video LEFT, text RIGHT
 * Even slides (1, 3, 5...): text LEFT, vertical video RIGHT
 *
 * 50/50 split. Video fills its half with object-cover.
 * Text fills the other half with room info, stats, buttons.
 */
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  photo?: string;
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
  forceVideoLeft,
  startVideoLeft,
  palette,
}: RoomSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

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

  const pillBg = palette.pillBg || palette.primary;
  const pillText = palette.pillText || "#ffffff";
  const currentRoom = rooms[currentIndex];
  const isVideoLeft = forceVideoLeft !== undefined ? forceVideoLeft : startVideoLeft ? currentIndex % 2 === 0 : currentIndex % 2 === 1;

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 150 : -150, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (dir: number) => ({ zIndex: 0, x: dir < 0 ? 150 : -150, opacity: 0 }),
  };

  /* ── Shared text content block ── */
  const textContent = (
    <motion.div
      key={`content-${currentIndex}`}
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
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
          className="text-sm lg:text-base tracking-[0.03em] mb-6 max-w-[400px]"
          style={{ ...body, color: palette.textSecondary }}
        >
          {currentRoom.tagline}
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

      {/* Progress dots */}
      {rooms.length > 1 && (
      <div className="flex gap-2 mt-10">
        {rooms.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > currentIndex ? 1 : -1); setCurrentIndex(i); }}
            className="h-1.5 rounded-full transition-all"
            style={{
              backgroundColor: i === currentIndex ? palette.primary : `${palette.primary}30`,
              width: i === currentIndex ? "24px" : "8px",
            }}
          />
        ))}
      </div>
      )}
    </motion.div>
  );

  /* ── Shared video block ── */
  const mediaElement = currentRoom.video ? (
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
  ) : null;

  const videoContent = (
    <motion.div
      key={`video-${currentIndex}`}
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="absolute inset-0"
    >
      {mediaElement}
    </motion.div>
  );

  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      style={{ backgroundColor: palette.bg }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ─── DESKTOP LAYOUT ─── */}
      <div className="hidden md:flex w-full h-full">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          {isVideoLeft ? (
            /* Video LEFT, Text RIGHT */
            <motion.div
              key={`layout-${currentIndex}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute inset-0 flex"
            >
              {/* Video/Image half */}
              <div className="relative w-1/2 h-full overflow-hidden">
                {currentRoom.video ? (
                  <video
                    src={currentRoom.video}
                    autoPlay
                    muted
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
              </div>
              {/* Text half */}
              <div
                className="w-1/2 h-full flex items-center px-12 lg:px-16 xl:px-20"
                style={{ backgroundColor: palette.bg }}
              >
                <div>
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
                      className="text-sm lg:text-base tracking-[0.03em] mb-6 max-w-[400px]"
                      style={{ ...body, color: palette.textSecondary }}
                    >
                      {currentRoom.tagline}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {currentRoom.sqft && (
                      <span className="text-[11px] tracking-[0.08em] px-3 py-1.5 rounded-full" style={{ ...body, fontWeight: 500, color: palette.primary, backgroundColor: `${palette.primary}20` }}>
                        {currentRoom.sqft} sqft
                      </span>
                    )}
                    {currentRoom.sqm && (
                      <span className="text-[11px] tracking-[0.08em] px-3 py-1.5 rounded-full" style={{ ...body, fontWeight: 500, color: palette.primary, backgroundColor: `${palette.primary}20` }}>
                        {currentRoom.sqm} m²
                      </span>
                    )}
                    <span className="text-[11px] tracking-[0.08em] px-3 py-1.5 rounded-full" style={{ ...body, fontWeight: 500, color: palette.primary, backgroundColor: `${palette.primary}20` }}>
                      {currentRoom.guests}
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <a href={currentRoom.exploreLink} className="px-4 py-2.5 rounded-full text-[11px] tracking-[0.15em] uppercase font-medium transition-all hover:scale-[1.02] hover:shadow-md w-fit" style={{ ...body, fontWeight: 500, backgroundColor: pillBg, color: pillText }}>
                      Explore
                    </a>
                    <a href={currentRoom.bookingUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 rounded-full text-[11px] tracking-[0.15em] uppercase font-medium transition-all hover:scale-[1.02] hover:shadow-md w-fit" style={{ ...body, fontWeight: 500, backgroundColor: "transparent", color: palette.text, border: `1px solid ${palette.textSecondary}40` }}>
                      Reserve
                    </a>
                  </div>
                  {rooms.length > 1 && (
                  <div className="flex gap-2 mt-10">
                    {rooms.map((_, i) => (
                      <button key={i} onClick={() => { setDirection(i > currentIndex ? 1 : -1); setCurrentIndex(i); }} className="h-1.5 rounded-full transition-all" style={{ backgroundColor: i === currentIndex ? palette.primary : `${palette.primary}30`, width: i === currentIndex ? "24px" : "8px" }} />
                    ))}
                  </div>
                  )}
                </div>
              </div>
            </motion.div>
          ) : (
            /* Text LEFT, Video RIGHT */
            <motion.div
              key={`layout-${currentIndex}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute inset-0 flex"
            >
              {/* Text half */}
              <div
                className="w-1/2 h-full flex items-center px-12 lg:px-16 xl:px-20"
                style={{ backgroundColor: palette.bg }}
              >
                <div>
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
                      className="text-sm lg:text-base tracking-[0.03em] mb-6 max-w-[400px]"
                      style={{ ...body, color: palette.textSecondary }}
                    >
                      {currentRoom.tagline}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {currentRoom.sqft && (
                      <span className="text-[11px] tracking-[0.08em] px-3 py-1.5 rounded-full" style={{ ...body, fontWeight: 500, color: palette.primary, backgroundColor: `${palette.primary}20` }}>
                        {currentRoom.sqft} sqft
                      </span>
                    )}
                    {currentRoom.sqm && (
                      <span className="text-[11px] tracking-[0.08em] px-3 py-1.5 rounded-full" style={{ ...body, fontWeight: 500, color: palette.primary, backgroundColor: `${palette.primary}20` }}>
                        {currentRoom.sqm} m²
                      </span>
                    )}
                    <span className="text-[11px] tracking-[0.08em] px-3 py-1.5 rounded-full" style={{ ...body, fontWeight: 500, color: palette.primary, backgroundColor: `${palette.primary}20` }}>
                      {currentRoom.guests}
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <a href={currentRoom.exploreLink} className="px-4 py-2.5 rounded-full text-[11px] tracking-[0.15em] uppercase font-medium transition-all hover:scale-[1.02] hover:shadow-md w-fit" style={{ ...body, fontWeight: 500, backgroundColor: pillBg, color: pillText }}>
                      Explore
                    </a>
                    <a href={currentRoom.bookingUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 rounded-full text-[11px] tracking-[0.15em] uppercase font-medium transition-all hover:scale-[1.02] hover:shadow-md w-fit" style={{ ...body, fontWeight: 500, backgroundColor: "transparent", color: palette.text, border: `1px solid ${palette.textSecondary}40` }}>
                      Reserve
                    </a>
                  </div>
                  {rooms.length > 1 && (
                  <div className="flex gap-2 mt-10">
                    {rooms.map((_, i) => (
                      <button key={i} onClick={() => { setDirection(i > currentIndex ? 1 : -1); setCurrentIndex(i); }} className="h-1.5 rounded-full transition-all" style={{ backgroundColor: i === currentIndex ? palette.primary : `${palette.primary}30`, width: i === currentIndex ? "24px" : "8px" }} />
                    ))}
                  </div>
                  )}
                </div>
              </div>
              {/* Video/Image half */}
              <div className="relative w-1/2 h-full overflow-hidden">
                {currentRoom.video ? (
                  <video
                    src={currentRoom.video}
                    autoPlay
                    muted
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation arrows , always visible */}
      {rooms.length > 1 && (
      <>
      <button
        onClick={handlePrev}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 group"
        style={{
          backgroundColor: palette.primary,
          color: "white",
        }}
      >
        <ChevronLeft className="w-7 h-7" strokeWidth={2.5} />
      </button>
      <button
        onClick={handleNext}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 group"
        style={{
          backgroundColor: palette.primary,
          color: "white",
        }}
      >
        <ChevronRight className="w-7 h-7" strokeWidth={2.5} />
      </button>
      </>
      )}

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
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
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
                <p className="text-white/80 text-sm mb-4" style={{ ...body }}>
                  {currentRoom.tagline}
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

        {/* Mobile arrows */}
        {rooms.length > 1 && (
        <>
        <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95" style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "white", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.3)" }}>
          <ChevronLeft className="w-6 h-6" strokeWidth={2.5} />
        </button>
        <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95" style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "white", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.3)" }}>
          <ChevronRight className="w-6 h-6" strokeWidth={2.5} />
        </button>

        {/* Mobile dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {rooms.map((_, i) => (
            <button key={i} onClick={() => { setDirection(i > currentIndex ? 1 : -1); setCurrentIndex(i); }} className="h-2 rounded-full transition-all" style={{ backgroundColor: i === currentIndex ? "white" : "rgba(255,255,255,0.4)", width: i === currentIndex ? "24px" : "8px" }} />
          ))}
        </div>
        </>
        )}
      </div>
    </section>
  );
}
