/*
 * TENTED CAMP ROOMS , 4 room type cards, each with a 4-image slider
 * Style: Tented Camp palette (olive/canopy), frosted glass pill arrows
 */
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import { useIsMobile } from "@/hooks/useMobile";

/* ── Tented Camp Palette ── */
const PALETTE = {
  bg: "#EDEEE2",
  text: "#0D0604",
  textSecondary: "#0D0604CC",
  primary: "#868B75",
  secondary: "#525642",
  accent: "#9A9086",
  divider: "#E6DFD5",
};
const display: React.CSSProperties = { fontFamily: "var(--font-display)", fontWeight: 400 };
const body: React.CSSProperties = { fontFamily: "var(--font-body)", fontWeight: 400 };

/* ── Pill arrow style (frosted glass, matching Explore Rooms) ── */
const PILL_BG = "rgba(134,139,117,0.82)";
const PILL_BORDER = "rgba(255,255,255,0.25)";

/* ── Room type data ── */
interface RoomType {
  id: string;
  name: string;
  tagline: string;
  description: string;
  stats: { value: string; label: string }[];
  images: string[];
}

const ROOM_TYPES: RoomType[] = [
  {
    id: "nayara-tent",
    name: "Nayara Tent",
    tagline: "Safari Luxury in the Canopy",
    description:
      "Elevated above the rainforest canopy, each safari-style tent is a private sanctuary with panoramic volcano views, heated plunge pool, outdoor rain shower, and floor-to-ceiling mesh walls that dissolve the boundary between you and the jungle.",
    stats: [
      { value: "850", label: "Sq Ft" },
      { value: "Private", label: "Plunge Pool" },
      { value: "Volcano", label: "Views" },
    ],
    images: [
      "/manus-storage/ntc-aerial-connecting_6479275a.jpg",
      "/manus-storage/tc-mobile-hero_d503fc59.jpg",
      "/manus-storage/ntc-aerial-connecting_6479275a.jpg",
      "/manus-storage/tc-mobile-hero_d503fc59.jpg",
    ],
  },
  {
    id: "family-tent",
    name: "Family Tent",
    tagline: "Adventure for Every Generation",
    description:
      "Designed for families seeking an unforgettable rainforest adventure, these interconnected tents offer generous space, private plunge pools, and direct access to nature trails , all while keeping the safari-luxury experience intact for every generation.",
    stats: [
      { value: "1,200", label: "Sq Ft" },
      { value: "Connected", label: "Tents" },
      { value: "Family", label: "Friendly" },
    ],
    images: [
      "/manus-storage/tc-mobile-hero_d503fc59.jpg",
      "/manus-storage/ntc-aerial-connecting_6479275a.jpg",
      "/manus-storage/tc-mobile-hero_d503fc59.jpg",
      "/manus-storage/ntc-aerial-connecting_6479275a.jpg",
    ],
  },
  {
    id: "residence",
    name: "Tented Residence",
    tagline: "The Ultimate Rainforest Retreat",
    description:
      "The ultimate Tented Camp experience , a multi-room residence with private pool, dedicated butler service, and panoramic views of the Arenal Volcano. Perfect for families or those seeking the most exclusive rainforest retreat.",
    stats: [
      { value: "2,800", label: "Sq Ft" },
      { value: "Private", label: "Pool" },
      { value: "Butler", label: "Service" },
    ],
    images: [
      "/manus-storage/tc-mobile-hero_d503fc59.jpg",
      "/manus-storage/ntc-aerial-connecting_6479275a.jpg",
      "/manus-storage/tc-mobile-hero_d503fc59.jpg",
      "/manus-storage/ntc-aerial-connecting_6479275a.jpg",
    ],
  },
];

/* ── Main Page ── */
export default function TentedRooms() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.bg }}>
      <BrandNavigation pageType="property" hideCenterLabel />

      {/* Hero */}
      <section className="relative aspect-[2/1] w-full overflow-hidden">
        <img
          src="/manus-storage/ntc-aerial-connecting_6479275a.jpg"
          alt="Aerial view of Nayara Tented Camp"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
        <div className="absolute inset-0 flex flex-col justify-end items-center pb-12 md:pb-16 px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white text-3xl md:text-5xl text-center"
            style={display}
          >
            Accommodations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-white/70 text-sm md:text-base mt-3 tracking-[0.12em] uppercase"
            style={body}
          >
            Nayara Tented Camp
          </motion.p>
        </div>
      </section>

      {/* Room Type Cards */}
      <div className="py-16 md:py-24">
        {ROOM_TYPES.map((room, idx) => (
          <RoomCard key={room.id} room={room} index={idx} />
        ))}
      </div>



      <Footer pageType="property" bgColor="#868B75" textColor="#FFFFFF" propertyName="Tented Camp" />
    </div>
  );
}

/* ── Room Card with Image Slider ── */
function RoomCard({ room, index }: { room: RoomType; index: number }) {
  const isMobile = useIsMobile();
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const totalSlides = room.images.length;

  const scrollToSlide = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.clientWidth;
    el.scrollTo({ left: idx * cardWidth, behavior: "smooth" });
    setCurrentSlide(idx);
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.clientWidth;
    const newIdx = Math.round(el.scrollLeft / cardWidth);
    if (newIdx !== currentSlide) setCurrentSlide(newIdx);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [currentSlide]);

  const isEven = index % 2 === 0;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16 md:mb-24">
      <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-12 items-center`}>
        {/* Image Slider */}
        <div className="w-full md:w-3/5 relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" as any }}
          >
            {room.images.map((img, i) => (
              <div key={i} className="snap-center shrink-0 w-full">
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                  <img
                    src={img}
                    alt={`${room.name} , Image ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Arrows , desktop only */}
          {!isMobile && totalSlides > 1 && (
            <>
              {currentSlide > 0 && (
                <button
                  onClick={() => scrollToSlide(currentSlide - 1)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 hover:scale-[1.05] hover:shadow-lg"
                  style={{
                    backgroundColor: PILL_BG,
                    borderColor: PILL_BORDER,
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                  }}
                >
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </button>
              )}
              {currentSlide < totalSlides - 1 && (
                <button
                  onClick={() => scrollToSlide(currentSlide + 1)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 hover:scale-[1.05] hover:shadow-lg"
                  style={{
                    backgroundColor: PILL_BG,
                    borderColor: PILL_BORDER,
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                  }}
                >
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              )}
            </>
          )}

          {/* Dots */}
          {totalSlides > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              {room.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToSlide(i)}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: i === currentSlide ? PALETTE.primary : `${PALETTE.primary}40`,
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Text Content */}
        <div className="w-full md:w-2/5 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <p
              className="text-[11px] tracking-[0.25em] uppercase mb-3"
              style={{ ...body, fontWeight: 500, color: PALETTE.primary }}
            >
              {room.tagline}
            </p>
            <h2
              className="text-3xl md:text-4xl mb-5"
              style={{ ...display, color: PALETTE.text }}
            >
              {room.name}
            </h2>
            <p
              className="text-sm md:text-base leading-relaxed mb-8"
              style={{ ...body, color: PALETTE.textSecondary }}
            >
              {room.description}
            </p>

            {/* Stats */}
            <div className="flex gap-8 mb-8">
              {room.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p
                    className="text-2xl md:text-3xl mb-1"
                    style={{ ...display, color: PALETTE.primary }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-[10px] tracking-[0.15em] uppercase"
                    style={{ ...body, fontWeight: 500, color: PALETTE.textSecondary }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href={`/tented-camp/rooms/${room.id}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:brightness-110"
                style={{
                  ...body,
                  fontWeight: 500,
                  fontSize: "11px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase" as const,
                  color: "#FFFFFF",
                  backgroundColor: PILL_BG,
                  borderColor: PILL_BORDER,
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                }}
              >
                Explore
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <button
                onClick={() => import("sonner").then(({ toast }) => toast("Reservation , Coming Soon"))}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
                style={{
                  ...body,
                  fontWeight: 500,
                  fontSize: "11px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase" as const,
                  color: PALETTE.primary,
                  backgroundColor: "transparent",
                  borderColor: PALETTE.primary,
                }}
              >
                Reserve
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
