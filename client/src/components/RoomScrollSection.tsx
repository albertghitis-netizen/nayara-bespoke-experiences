/**
 * ROOM SCROLL SECTION , Horizontal Scroll-Jacking Rooms
 *
 * Creative concept: "Video Background + Floating Image Card"
 * Each room card takes the full viewport. As the user scrolls vertically,
 * the section pins and translates horizontally through 4 room cards.
 *
 * Order: Nayara Tent → Family Tent → Grand Tent → Residence
 *
 * Each card features:
 * - Full-bleed looping video background (exterior/ambient)
 * - Floating interior photo card (editorial inset)
 * - Room name, stats (sqft, sqm, guests)
 * - "Explore" pill → individual room page
 * - "Reserve" pill → SynXis booking
 */
import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

/* ── Typography ── */
const display = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)" } as const;

/* ── Booking URL ── */
const BOOKING_URL =
  "https://be.synxis.com/?chain=24447&hotel=10868&level=hotel&locale=en-US&adult=1&child=0&currency=USD&rooms=1";

/* ── Room Data ── */
interface RoomCard {
  id: string;
  label: string;
  tagline: string;
  sqft: string;
  sqm: string;
  guests: string;
  video: string;
  photo: string;
  photoAlt: string;
  exploreLink: string;
}

const ROOMS: RoomCard[] = [
  {
    id: "nayara-tent",
    label: "Nayara Tent",
    tagline: "Where luxury meets the rainforest canopy",
    sqft: "1,700",
    sqm: "158",
    guests: "2 adults + 2 children",
    video: "/manus-storage/Tentreel4-converted_afd33d7d.mp4",
    photo: "/manus-storage/RoomsNayaraTent1_c303c949.jpeg",
    photoAlt: "Nayara Tent interior , king bed with canopy and rainforest views",
    exploreLink: "/tented-camp/rooms/nayara-tent",
  },
  {
    id: "family-tent",
    label: "Family Tent",
    tagline: "Connected spaces for families who explore together",
    sqft: "2,400",
    sqm: "223",
    guests: "2 adults + 3 children",
    video: "/manus-storage/family-tent-new_90ea0d30.mp4",
    photo: "/manus-storage/8.Familytentkidsroom.4O1A0231_f12fc400.jpeg",
    photoAlt: "Family Tent kids room with two queen beds and rainforest views",
    exploreLink: "/tented-camp/rooms/family-tent",
  },
  {
    id: "grand-tent",
    label: "Grand Tent",
    tagline: "A private compound in the heart of the jungle",
    sqft: "4,804",
    sqm: "446",
    guests: "4 adults + 2 children",
    video: "/manus-storage/tented-camp-horizontal-v2_973b7121.mp4",
    photo: `${CDN}/Grand(1)_0127cf09.webp`,
    photoAlt: "Grand Tent living area with oversized plunge pool and fire pit",
    exploreLink: "/tented-camp/rooms/grand-tent",
  },
  {
    id: "residence",
    label: "Nayara Residence",
    tagline: "The ultimate private estate for multi-generational journeys",
    sqft: "7,664",
    sqm: "712",
    guests: "Up to 12 adults",
    video: "/manus-storage/tented-residence-hero_e6990cf1.mp4",
    photo: `${CDN}/12.Residence_17d767d7.webp`,
    photoAlt: "Nayara Residence , private estate with infinity pool and volcano views",
    exploreLink: "/tented-camp/rooms/residence",
  },
];

/* ── Pill Button ── */
function PillButton({
  children,
  href,
  variant = "primary",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
}) {
  const bg =
    variant === "primary"
      ? "rgba(134,139,117,0.92)"
      : "rgba(255,255,255,0.15)";
  const border =
    variant === "primary"
      ? "rgba(255,255,255,0.2)"
      : "rgba(255,255,255,0.4)";

  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-[1.03] hover:brightness-110"
      style={{
        ...body,
        fontWeight: 500,
        fontSize: "11px",
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "#FFFFFF",
        backgroundColor: bg,
        borderWidth: "1px",
        borderColor: border,
        borderStyle: "solid",
      }}
    >
      {children}
    </a>
  );
}

/* ── Progress Dots ── */
function ProgressDots({
  total,
  current,
}: {
  total: number;
  current: number;
}) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className="rounded-full transition-all duration-500"
          style={{
            width: i === current ? "24px" : "8px",
            height: "8px",
            backgroundColor:
              i === current ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)",
          }}
        />
      ))}
    </div>
  );
}

/* ── Video Background ── */
function VideoBackground({ src, isActive }: { src: string; isActive: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isActive) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isActive]);

  return (
    <div className="absolute inset-0">
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
      />
      {/* Gradient overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
    </div>
  );
}

/* ── Floating Photo Card ── */
function FloatingPhoto({
  src,
  alt,
  isActive,
}: {
  src: string;
  alt: string;
  isActive: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.92 }}
      animate={
        isActive
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 30, scale: 0.92 }
      }
      transition={{ duration: 0.8, delay: isActive ? 0.3 : 0, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-[12%] right-[6%] md:right-[8%] w-[38%] md:w-[32%] lg:w-[28%] max-w-[380px] z-10"
    >
      <div className="relative rounded-lg overflow-hidden shadow-2xl border border-white/10">
        <div style={{ aspectRatio: "4/3" }}>
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        {/* Subtle frame effect */}
        <div className="absolute inset-0 border border-white/5 rounded-lg pointer-events-none" />
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════════════ */
export default function RoomScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  /* Scroll-jacking: map vertical scroll to horizontal card index */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      // How far we've scrolled into the section (0 = just entered, 1 = about to leave)
      const scrolled = -rect.top;
      const scrollableDistance = sectionHeight - viewportHeight;

      if (scrollableDistance <= 0) return;

      const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));
      setScrollProgress(progress);

      // Map progress to card index
      const newIndex = Math.min(
        ROOMS.length - 1,
        Math.floor(progress * ROOMS.length)
      );
      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="rooms"
      style={{ height: `${ROOMS.length * 120 + 50}vh` }}
      className="relative"
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Video backgrounds , all rendered, only active one plays */}
        {ROOMS.map((room, i) => (
          <div
            key={room.id}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === activeIndex ? 1 : 0 }}
          >
            <VideoBackground src={room.video} isActive={i === activeIndex} />
          </div>
        ))}

        {/* Floating photo cards */}
        {ROOMS.map((room, i) => (
          <FloatingPhoto
            key={room.id}
            src={room.photo}
            alt={room.photoAlt}
            isActive={i === activeIndex}
          />
        ))}

        {/* Content overlay , bottom left */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-8 md:p-12 lg:p-16">
          {/* Section label */}
          <p
            className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase mb-3 text-white/60"
            style={{ ...body, fontWeight: 500 }}
          >
            Accommodations
          </p>

          {/* Room name with crossfade */}
          <div className="relative h-[60px] md:h-[80px] mb-2">
            <AnimatePresence mode="wait">
              <motion.h2
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute text-white text-3xl md:text-5xl lg:text-6xl tracking-wide"
                style={display}
              >
                {ROOMS[activeIndex].label}
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* Tagline */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`tag-${activeIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-white/70 text-sm md:text-base mb-6 max-w-md"
              style={body}
            >
              {ROOMS[activeIndex].tagline}
            </motion.p>
          </AnimatePresence>

          {/* Stats row */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`stats-${activeIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="flex items-center gap-6 mb-8"
            >
              <div className="flex items-center gap-2">
                <span
                  className="text-white/50 text-[10px] tracking-[0.15em] uppercase"
                  style={body}
                >
                  {ROOMS[activeIndex].sqft} sq ft
                </span>
                <span className="text-white/30">·</span>
                <span
                  className="text-white/50 text-[10px] tracking-[0.15em] uppercase"
                  style={body}
                >
                  {ROOMS[activeIndex].sqm} m²
                </span>
                <span className="text-white/30">·</span>
                <span
                  className="text-white/50 text-[10px] tracking-[0.15em] uppercase"
                  style={body}
                >
                  {ROOMS[activeIndex].guests}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 mb-8">
            <PillButton href={ROOMS[activeIndex].exploreLink} variant="primary">
              Explore
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </PillButton>
            <PillButton href={BOOKING_URL} variant="secondary">
              Reserve
            </PillButton>
          </div>

          {/* Progress dots */}
          <ProgressDots total={ROOMS.length} current={activeIndex} />
        </div>

        {/* Scroll hint , only on first card */}
        {activeIndex === 0 && (
          <motion.div
            className="absolute bottom-8 right-8 md:right-12 z-20 flex items-center gap-2 text-white/40"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span
              className="text-[10px] tracking-[0.15em] uppercase"
              style={body}
            >
              Scroll
            </span>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          </motion.div>
        )}
      </div>
    </section>
  );
}
