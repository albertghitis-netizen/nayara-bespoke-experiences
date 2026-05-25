/**
 * ROOM SLIDER — Full-screen horizontal scroll with snap
 *
 * Layout: Each room is a full-width panel (Text LEFT, Video/Image RIGHT)
 * Navigation: CSS scroll-snap + arrows + synced counter
 * Scroll naturally sideways (trackpad, shift+wheel) OR use arrows — both stay in sync.
 */
import { useRef, useState, useEffect, useCallback } from "react";

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
  const scrollRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pillBg = palette.pillBg || palette.primary;
  const pillText = palette.pillText || "#ffffff";

  // Detect which slide is visible based on scroll position
  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el || isScrolling.current) return;

    const scrollLeft = el.scrollLeft;
    const width = el.clientWidth;
    const index = Math.round(scrollLeft / width);
    
    if (index !== currentIndex && index >= 0 && index < rooms.length) {
      setCurrentIndex(index);
    }
  }, [currentIndex, rooms.length]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      handleScroll();
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [handleScroll]);

  // No vertical scroll hijack — rooms change only via arrows or trackpad side-swipe

  // Programmatic scroll to index (for arrows)
  const scrollToIndex = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el) return;

    isScrolling.current = true;
    setCurrentIndex(index);

    el.scrollTo({
      left: index * el.clientWidth,
      behavior: "smooth",
    });

    // Reset the flag after animation completes
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      isScrolling.current = false;
    }, 500);
  }, []);

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? rooms.length - 1 : currentIndex - 1;
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === rooms.length - 1 ? 0 : currentIndex + 1;
    scrollToIndex(newIndex);
  };

  return (
    <section className="relative w-full h-screen" style={{ backgroundColor: palette.bg }}>
      {/* ─── DESKTOP: Horizontal scroll container ─── */}
      <div className="hidden md:block w-full h-full">
        {/* The scrollable track */}
        <style>{`
          .room-scroll-container::-webkit-scrollbar { display: none; }
        `}</style>
        <div
          ref={scrollRef}
          className="room-scroll-container w-full h-full overflow-x-auto overflow-y-hidden"
          style={{
            scrollSnapType: "x mandatory",
            scrollBehavior: "auto",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div
            className="flex h-full"
            style={{ width: `${rooms.length * 100}%` }}
          >
            {rooms.map((room, i) => (
              <div
                key={room.id}
                className="flex h-full"
                style={{
                  width: `${100 / rooms.length}%`,
                  scrollSnapAlign: "start",
                }}
              >
                {/* Text half */}
                <div
                  className="w-1/2 h-full flex items-center px-12 lg:px-16 xl:px-20"
                  style={{ backgroundColor: palette.bg }}
                >
                  <div className="w-full">
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
                      {room.label}
                    </h2>
                    {room.tagline && (
                      <p
                        className="text-sm lg:text-base tracking-[0.03em] mb-3 max-w-[400px]"
                        style={{ ...body, color: palette.textSecondary }}
                      >
                        {room.tagline}
                      </p>
                    )}
                    {room.description && (
                      <p
                        className="text-xs lg:text-sm leading-relaxed mb-6 max-w-[400px]"
                        style={{ ...body, color: palette.textTertiary || palette.textSecondary }}
                      >
                        {room.description}
                      </p>
                    )}

                    {/* Stats */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {room.sqft && (
                        <span
                          className="text-[11px] tracking-[0.08em] px-3 py-1.5 rounded-full"
                          style={{ ...body, fontWeight: 500, color: palette.primary, backgroundColor: `${palette.primary}20` }}
                        >
                          {room.sqft} sqft
                        </span>
                      )}
                      {room.sqm && (
                        <span
                          className="text-[11px] tracking-[0.08em] px-3 py-1.5 rounded-full"
                          style={{ ...body, fontWeight: 500, color: palette.primary, backgroundColor: `${palette.primary}20` }}
                        >
                          {room.sqm} m²
                        </span>
                      )}
                      <span
                        className="text-[11px] tracking-[0.08em] px-3 py-1.5 rounded-full"
                        style={{ ...body, fontWeight: 500, color: palette.primary, backgroundColor: `${palette.primary}20` }}
                      >
                        {room.guests}
                      </span>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4">
                      <a
                        href={room.exploreLink}
                        className="px-4 py-2.5 rounded-full text-[11px] tracking-[0.15em] uppercase font-medium transition-all hover:scale-[1.02] hover:shadow-md w-fit"
                        style={{ ...body, fontWeight: 500, backgroundColor: pillBg, color: pillText }}
                      >
                        Explore
                      </a>
                      <a
                        href={room.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-full text-[11px] tracking-[0.15em] uppercase font-medium transition-all hover:scale-[1.02] hover:shadow-md w-fit"
                        style={{ ...body, fontWeight: 500, backgroundColor: "transparent", color: palette.text, border: `1px solid ${palette.textSecondary}40` }}
                      >
                        Reserve
                      </a>
                    </div>
                  </div>
                </div>

                {/* Video/Image half */}
                <div className="w-1/2 h-full overflow-hidden">
                  {room.video ? (
                    <video
                      src={room.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : room.photo ? (
                    <img
          loading="lazy"
                      src={room.photo}
                      alt={room.label}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows + counter — fixed overlay */}
        {rooms.length > 1 && !hideArrows && (
          <div className="absolute bottom-12 left-12 lg:left-16 xl:left-20 z-20 flex items-center gap-5">
            {/* Prev arrow */}
            <button
              onClick={handlePrev}
              className="group relative w-12 h-12 flex items-center justify-center transition-all duration-300"
            >
              <span
                className="absolute inset-0 rounded-full transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: palette.primary }}
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
                style={{ backgroundColor: palette.primary }}
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
      </div>

      {/* ─── MOBILE LAYOUT (swipeable full-screen) ─── */}
      <MobileSlider
        rooms={rooms}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        sectionLabel={sectionLabel}
        palette={palette}
        pillBg={pillBg}
        pillText={pillText}
      />
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MOBILE SLIDER — touch swipe with AnimatePresence
   ═══════════════════════════════════════════════════════════════ */
function MobileSlider({
  rooms,
  currentIndex,
  setCurrentIndex,
  sectionLabel,
  palette,
  pillBg,
  pillText,
}: {
  rooms: RoomSliderCard[];
  currentIndex: number;
  setCurrentIndex: (i: number) => void;
  sectionLabel: string;
  palette: RoomSliderProps["palette"];
  pillBg: string;
  pillText: string;
}) {
  const touchStartX = useRef(0);
  const [direction, setDirection] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setDirection(1);
        setCurrentIndex(currentIndex === rooms.length - 1 ? 0 : currentIndex + 1);
      } else {
        setDirection(-1);
        setCurrentIndex(currentIndex === 0 ? rooms.length - 1 : currentIndex - 1);
      }
    }
  };

  const currentRoom = rooms[currentIndex];

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? "100%" : "-100%", opacity: 0 }),
  };

  return (
    <div
      className="md:hidden w-full h-full relative overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="absolute inset-0">
        {currentRoom.photo ? (
          <img
            loading="lazy"
            key={`mi-${currentIndex}`}
            src={currentRoom.photo}
            alt={currentRoom.label}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-black/40" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 pb-16 z-10">
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
          <a href={currentRoom.exploreLink} className="px-4 py-2 rounded-full text-[11px] tracking-[0.12em] uppercase font-medium w-fit border" style={{ ...body, fontWeight: 500, backgroundColor: "transparent", color: palette.text, borderColor: palette.text }}>
            Explore
          </a>
          <a href={currentRoom.bookingUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full text-[11px] tracking-[0.12em] uppercase font-medium w-fit" style={{ ...body, fontWeight: 500, backgroundColor: palette.primary, color: "#ffffff" }}>
            Reserve
          </a>
        </div>
      </div>

      {/* Mobile dots */}
      {rooms.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {rooms.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className="h-2 rounded-full transition-all"
              style={{
                backgroundColor: i === currentIndex ? "white" : "rgba(255,255,255,0.4)",
                width: i === currentIndex ? "24px" : "8px",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
