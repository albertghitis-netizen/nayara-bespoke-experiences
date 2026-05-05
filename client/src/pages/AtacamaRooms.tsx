/*
 * ATACAMA ROOMS — Tile page with three room types
 * Tilo: Full 26-image gallery with lightbox
 * Catarpe & Quitor: Placeholder cards (awaiting media)
 * Three Programs: Dream, Full Experience, Private Guided
 * Palette: Atacama terracotta on warm sand
 */

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import { useIsMobile } from "@/hooks/useMobile";
import {
  AnimateOnScroll,
  TextReveal,
  fadeUp,
} from "@/components/motion";

/* ── Atacama Palette ── */
const P = {
  bg: "#F5EFE7",
  bgAlt: "#F7F5F0",
  text: "#1A0F0A",
  textSoft: "#1A0F0ACC",
  primary: "#6F463D",
  secondary: "#9A9086",
  accent: "#C29B70",
  divider: "#E6DFD5",
  white: "#FFFFFF",
};

const display: React.CSSProperties = { fontFamily: "var(--font-display)", fontWeight: 400 };
const body: React.CSSProperties = { fontFamily: "var(--font-body)", fontWeight: 400 };

const PILL_BG = "rgba(111, 70, 61, 0.82)";
const PILL_BORDER = "rgba(255, 255, 255, 0.25)";

/* ── Tilo Images (26 real photos) ── */
const TILO_IMAGES = [
  "/manus-storage/DSC07601-2-HDR-2_db780d64.jpg",
  "/manus-storage/DSC07626-2-HDR_f1a68a32.jpg",
  "/manus-storage/DSC07636-2-HDR-2_c908a4e3.jpg",
  "/manus-storage/DSC07646-2-HDR_498f78ad.jpg",
  "/manus-storage/DSC07661-2-HDR_5ecb25f9.jpg",
  "/manus-storage/DSC07711-2-HDR_a64bb9e4.jpg",
  "/manus-storage/DSC07716-2-HDR_411b4dc9.jpg",
  "/manus-storage/DSC07721-2-HDR_aa2175d4.jpg",
  "/manus-storage/DSC07736-2-HDR_de8bc6ac.jpg",
  "/manus-storage/DSC07771-2-HDR_3d73aa48.jpg",
  "/manus-storage/DSC07804_ad6c33be.jpg",
  "/manus-storage/DSC07805_3964480e.jpg",
  "/manus-storage/DSC07815_3c4bbc1e.jpg",
  "/manus-storage/DSC07817_112d1079.jpg",
  "/manus-storage/DSC07820_02600289.jpg",
  "/manus-storage/DSC07823_d2fcb9cb.jpg",
  "/manus-storage/DSC07825_b0f95b9e.jpg",
  "/manus-storage/DSC07826_ec0565a3.jpg",
  "/manus-storage/DSC07834_a736bab1.jpg",
  "/manus-storage/DSC07840_bed84b2a.jpg",
  "/manus-storage/DSC07843-2_9dcabe51.jpg",
  "/manus-storage/DSC07847_f4b3a03a.jpg",
  "/manus-storage/DSC07860_41ec9612.jpg",
  "/manus-storage/DSC07863_5c9d7b71.jpg",
  "/manus-storage/DSC07865_e09c7ac4.jpg",
  "/manus-storage/DSC07868_4c2d4da4.jpg",
];

/* ── Room Types ── */
interface RoomType {
  id: string;
  name: string;
  kunzaName?: string;
  tagline: string;
  description: string;
  size: string;
  features: string[];
  images: string[];
  exploreLink?: string;
}

const ROOM_TYPES: RoomType[] = [
  {
    id: "tilo",
    name: "Tilo",
    kunzaName: "Laguna",
    tagline: "The Signature Suite",
    description:
      "At 70 m², Tilo is the signature suite of Nayara Alto Atacama — named 'Laguna' in the Kunza language of the Atacameño people. A king bed faces floor-to-ceiling views of the Salt Mountain Range and the Andes. The private terrace extends into an outdoor shower beneath the desert sky, while inside, handwoven textiles and warm wood create a sanctuary that honors the landscape.",
    size: "70 m²",
    features: [
      "King bed",
      "Private terrace",
      "Salt Mountain Range & Andes views",
      "Outdoor shower",
      "Minibar",
      "Twice daily maid service",
      "2 yoga mats",
    ],
    images: TILO_IMAGES,
    exploreLink: "/alto-atacama/rooms/suite-tilo",
  },
  {
    id: "catarpe",
    name: "Catarpe",
    tagline: "Laidback Desert Comfort",
    description:
      "Spacious and adorned with local natural materials, the Catarpe rooms reflect the brilliant colors of the neighboring Atacama desert. From inside you can hear the sounds of the San Pedro River flowing down from the Andes Mountains to the valley; and as you step out to the terrace, you enjoy sweeping views of the Salt Mountain Range. The desert sun is filtered by the deep roof giving the rooms an ideal temperature and luminosity.",
    size: "50 m²",
    features: [
      "King bed",
      "Private terrace",
      "Salt Mountain Range views",
      "San Pedro River sounds",
      "Local natural materials",
      "Accessible room available",
    ],
    images: [],
    exploreLink: "/alto-atacama/rooms/catarpe",
  },
  {
    id: "quitor",
    name: "Quitor",
    tagline: "Garden Serenity",
    description:
      "Sharing the same thoughtful design and local materials as Catarpe, the Quitor rooms offer an intimate garden perspective. Each element is carefully curated to create a connection with the Atacama landscape — from the handcrafted furnishings to the terrace that opens onto lush desert gardens framed by distant mountain silhouettes.",
    size: "50 m²",
    features: [
      "King bed",
      "Private terrace",
      "Garden views",
      "Local natural materials",
      "Handcrafted furnishings",
    ],
    images: [],
    exploreLink: "/alto-atacama/rooms/quitor",
  },
];

/* ── Three Programs ── */
interface Program {
  id: string;
  name: string;
  tagline: string;
  includes: string[];
}

const PROGRAMS: Program[] = [
  {
    id: "dream",
    name: "Dream",
    tagline: "Rest & Recharge",
    includes: [
      "Accommodation in selected room type",
      "Daily breakfast",
      "Access to all hotel facilities",
      "Heated outdoor pools",
      "Complimentary Wi-Fi",
    ],
  },
  {
    id: "full-experience",
    name: "Full Experience",
    tagline: "Immersive Discovery",
    includes: [
      "All meals (breakfast, lunch & dinner)",
      "One daily guided excursion",
      "Nightly Andean Astronomy session",
      "Open bar (selected beverages)",
      "Access to all hotel facilities",
      "Heated outdoor pools & spa circuit",
    ],
  },
  {
    id: "private-guided",
    name: "Private Guided Experience",
    tagline: "Ultra-Personalized",
    includes: [
      "All meals with premium wine pairing",
      "Private guide & dedicated vehicle",
      "Fully customized daily itinerary",
      "Priority access to all excursions",
      "Private Andean Astronomy session",
      "Spa treatments included",
      "Airport transfers",
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════════ */

export default function AtacamaRooms() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: P.bg }}>
      <BrandNavigation pageType="property" hideCenterLabel />
      <HeroSection />

      {/* Room Type Cards */}
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          {ROOM_TYPES.map((room, idx) => (
            <RoomCard key={room.id} room={room} index={idx} />
          ))}
        </div>
      </section>

      {/* Three Programs */}
      <ProgramsSection />

      <Footer pageType="property" bgColor={P.primary} textColor="#FFFFFF" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════════════════ */

function HeroSection() {
  return (
    <section className="relative aspect-[2/1] w-full overflow-hidden">
      <img
        src="/manus-storage/atacama-rooms-hero_36b6d5d0.jpg"
        alt="Nayara Alto Atacama at sunset"
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
          Nayara Alto Atacama
        </motion.p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ROOM CARD — Image gallery (or placeholder) + text, alternating
   ═══════════════════════════════════════════════════════════════ */

function RoomCard({ room, index }: { room: RoomType; index: number }) {
  const isMobile = useIsMobile();
  const hasImages = room.images.length > 0;
  const isEven = index % 2 === 0;

  return (
    <div className="mb-20 md:mb-32">
      <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-14 items-start`}>
        {/* Image Gallery or Placeholder */}
        <div className="w-full md:w-3/5">
          {hasImages ? (
            <TiloGallery images={room.images} roomName={room.name} />
          ) : (
            <div
              className="aspect-[4/3] flex items-center justify-center rounded-sm"
              style={{ backgroundColor: `${P.primary}15` }}
            >
              <div className="text-center px-6">
                <p className="text-lg mb-2" style={{ ...display, color: P.primary }}>
                  {room.name}
                </p>
                <p className="text-sm" style={{ ...body, color: P.secondary }}>
                  Photography coming soon
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Text Content */}
        <div className="w-full md:w-2/5 flex flex-col justify-center md:pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <p
              className="text-[11px] tracking-[0.25em] uppercase mb-3"
              style={{ ...body, fontWeight: 500, color: P.primary }}
            >
              {room.tagline}
            </p>
            <h2
              className="text-3xl md:text-4xl mb-2"
              style={{ ...display, color: P.text }}
            >
              {room.name}
            </h2>
            {room.kunzaName && (
              <p
                className="text-sm italic mb-5"
                style={{ ...body, color: P.accent }}
              >
                "{room.kunzaName}" in Kunza
              </p>
            )}
            <p
              className="text-sm md:text-base leading-relaxed mb-6"
              style={{ ...body, color: P.textSoft }}
            >
              {room.description}
            </p>

            {/* Size + Features */}
            <div className="mb-8">
              <p
                className="text-2xl mb-4"
                style={{ ...display, color: P.primary }}
              >
                {room.size}
              </p>
              <div className="flex flex-wrap gap-2">
                {room.features.map((f) => (
                  <span
                    key={f}
                    className="text-[10px] tracking-[0.08em] px-3 py-1.5 rounded-full"
                    style={{
                      ...body,
                      fontWeight: 500,
                      color: P.primary,
                      border: `1px solid ${P.primary}30`,
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            {room.exploreLink && (
              <a
                href={room.exploreLink}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
                style={{
                  ...body,
                  fontWeight: 500,
                  fontSize: "11px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase" as const,
                  color: P.white,
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
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TILO GALLERY — Masonry grid with lightbox
   ═══════════════════════════════════════════════════════════════ */

function TiloGallery({ images, roomName }: { images: string[]; roomName: string }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();

  // Show first 8 images in a masonry-like grid, with "View All" to open lightbox
  const previewCount = isMobile ? 4 : 8;
  const previewImages = images.slice(0, previewCount);

  return (
    <>
      {/* Grid Preview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5">
        {previewImages.map((img, i) => {
          // First image spans 2 cols and 2 rows
          const isHero = i === 0;
          return (
            <button
              key={i}
              onClick={() => setLightboxIndex(i)}
              className={`relative overflow-hidden cursor-pointer group ${
                isHero ? "col-span-2 row-span-2" : ""
              }`}
              style={{ aspectRatio: isHero ? "1" : "1" }}
            >
              <img
                src={img}
                alt={`${roomName} — ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
            </button>
          );
        })}
      </div>

      {/* View All Button */}
      {images.length > previewCount && (
        <button
          onClick={() => setLightboxIndex(0)}
          className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border transition-all duration-300 hover:scale-[1.02]"
          style={{
            ...body,
            fontWeight: 500,
            fontSize: "11px",
            letterSpacing: "0.12em",
            color: P.primary,
            borderColor: `${P.primary}40`,
          }}
        >
          View All {images.length} Photos
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
          </svg>
        </button>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={images}
            currentIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNavigate={setLightboxIndex}
            roomName={roomName}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   LIGHTBOX
   ═══════════════════════════════════════════════════════════════ */

function Lightbox({
  images,
  currentIndex,
  onClose,
  onNavigate,
  roomName,
}: {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (idx: number) => void;
  roomName: string;
}) {
  const total = images.length;

  const goNext = useCallback(() => {
    onNavigate((currentIndex + 1) % total);
  }, [currentIndex, total, onNavigate]);

  const goPrev = useCallback(() => {
    onNavigate((currentIndex - 1 + total) % total);
  }, [currentIndex, total, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, goNext, goPrev]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
      >
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Counter */}
      <div className="absolute top-6 left-6 z-10">
        <p className="text-white/60 text-sm" style={body}>
          {currentIndex + 1} / {total}
        </p>
      </div>

      {/* Image */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="relative max-w-[90vw] max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[currentIndex]}
          alt={`${roomName} — ${currentIndex + 1}`}
          className="max-w-full max-h-[85vh] object-contain"
        />
      </motion.div>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); goPrev(); }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
      >
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); goNext(); }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
      >
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Thumbnail strip */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 max-w-[80vw] overflow-x-auto px-4 py-2">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); onNavigate(i); }}
            className={`shrink-0 w-12 h-12 rounded overflow-hidden border-2 transition-all duration-200 ${
              i === currentIndex ? "border-white scale-110" : "border-transparent opacity-50 hover:opacity-80"
            }`}
          >
            <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
          </button>
        ))}
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   THREE PROGRAMS SECTION
   ═══════════════════════════════════════════════════════════════ */

function ProgramsSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10" style={{ backgroundColor: P.bgAlt }}>
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.25em] uppercase mb-4 text-center"
            style={{ ...body, fontWeight: 500, color: P.primary }}
          >
            Choose Your Journey
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-center mb-4"
            style={{ ...display, color: P.text }}
          >
            Three Programs
          </h2>
          <p
            className="text-sm md:text-base leading-relaxed text-center max-w-2xl mx-auto mb-16"
            style={{ ...body, color: P.textSoft }}
          >
            Every stay at Nayara Alto Atacama is tailored to your rhythm. Choose the level of immersion
            that speaks to you — from peaceful rest to fully guided desert exploration.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {PROGRAMS.map((program, i) => (
            <AnimateOnScroll key={program.id} variants={fadeUp} delay={i * 0.1}>
              <div
                className="p-8 md:p-10 h-full flex flex-col"
                style={{
                  backgroundColor: P.white,
                  borderBottom: `3px solid ${P.primary}`,
                }}
              >
                <p
                  className="text-[10px] tracking-[0.2em] uppercase mb-3"
                  style={{ ...body, fontWeight: 500, color: P.accent }}
                >
                  {program.tagline}
                </p>
                <h3
                  className="text-xl md:text-2xl mb-6"
                  style={{ ...display, color: P.text }}
                >
                  {program.name}
                </h3>
                <ul className="flex-1 space-y-3 mb-8">
                  {program.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        className="w-4 h-4 mt-0.5 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke={P.primary}
                        strokeWidth={1.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span
                        className="text-[13px] leading-relaxed"
                        style={{ ...body, color: P.textSoft }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => import("sonner").then(({ toast }) => toast("Reservation — Coming Soon"))}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    ...body,
                    fontWeight: 500,
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase" as const,
                    color: P.white,
                    backgroundColor: PILL_BG,
                    borderColor: PILL_BORDER,
                  }}
                >
                  Reserve
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
