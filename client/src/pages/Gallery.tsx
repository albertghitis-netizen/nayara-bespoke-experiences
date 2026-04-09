/**
 * NAYARA GALLERY — Curated Visual Archive
 * Design: Editorial lookbook / museum exhibition style
 * NOT a social media grid — each image is intentional, museum-quality
 * Inspired by Aman and Rosewood gallery aesthetics
 * Typography: Playfair Display (display) + DM Sans (body)
 */

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import NativeVideo from "@/components/NativeVideo";

/* ─── Gallery Data — Curated selections from each property ─── */
interface GalleryImage {
  src: string;
  alt: string;
  property: string;
  category: string;
  caption?: string;
  aspect: "landscape" | "portrait" | "square";
}

const galleryImages: GalleryImage[] = [
  // Alto Atacama
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-hero-desktop_8c8a5be0.jpg",
    alt: "Alto Atacama desert landscape at golden hour",
    property: "Alto Atacama",
    category: "landscape",
    caption: "The Atacama Desert — Earth's driest non-polar desert, where salt flats meet volcanic peaks",
    aspect: "landscape",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-pool-sunset_c4a2f7e1.jpg",
    alt: "Alto Atacama infinity pool at sunset",
    property: "Alto Atacama",
    category: "wellness",
    caption: "Infinity pool overlooking the Catarpe Valley — the oasis within the desert",
    aspect: "landscape",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-suite-interior_d3b1e9f2.jpg",
    alt: "Alto Atacama suite with desert views",
    property: "Alto Atacama",
    category: "rooms",
    caption: "Earth-toned suites framing the Licancabur volcano through floor-to-ceiling windows",
    aspect: "landscape",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-stargazing_f5c3d8a4.jpg",
    alt: "Stargazing at Alto Atacama observatory",
    property: "Alto Atacama",
    category: "experience",
    caption: "Our private observatory — some of the clearest skies on Earth for astronomical observation",
    aspect: "landscape",
  },
  // Arenal (Costa Rica)
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/arenal-volcano-view_a1b2c3d4.jpg",
    alt: "Arenal Volcano through the rainforest canopy",
    property: "Costa Rica",
    category: "landscape",
    caption: "Arenal Volcano rising above the cloud forest — the heart of Costa Rica's volcanic highlands",
    aspect: "landscape",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-plunge-pool_e5f6a7b8.jpg",
    alt: "Nayara Springs private plunge pool",
    property: "Costa Rica",
    category: "wellness",
    caption: "Private hot springs plunge pool at Nayara Springs — adults-only volcanic wellness",
    aspect: "portrait",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tented-camp-exterior_c9d0e1f2.jpg",
    alt: "Nayara Tented Camp luxury tent",
    property: "Costa Rica",
    category: "rooms",
    caption: "The most luxurious Nayara property — where rainforest meets refined elegance",
    aspect: "landscape",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/arenal-hanging-bridges_a3b4c5d6.jpg",
    alt: "Hanging bridges through the cloud forest",
    property: "Costa Rica",
    category: "experience",
    caption: "Suspended walkways through the canopy — eye-level with toucans and howler monkeys",
    aspect: "portrait",
  },
  // Hangaroa
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-aerial_9e07a82e.jpg",
    alt: "Nayara Hangaroa aerial view Easter Island",
    property: "Nayara Hangaroa",
    category: "landscape",
    caption: "The most remote luxury hotel on Earth — where Moai meet the Pacific",
    aspect: "landscape",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-pool_1b0d18e8.jpg",
    alt: "Hangaroa pool with ocean views",
    property: "Nayara Hangaroa",
    category: "wellness",
    caption: "Oceanfront pool at Hangaroa — volcanic stone meets Pacific blue",
    aspect: "landscape",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-sunset_1238744f.jpg",
    alt: "Easter Island sunset from Hangaroa",
    property: "Nayara Hangaroa",
    category: "landscape",
    caption: "Sunset over the Pacific — 2,000 miles from the nearest inhabited land",
    aspect: "landscape",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-room_5b9eb728.jpg",
    alt: "Hangaroa suite interior",
    property: "Nayara Hangaroa",
    category: "rooms",
    caption: "Hare paenga-inspired suites — traditional Rapa Nui architecture reimagined",
    aspect: "landscape",
  },
  // Bocas del Toro
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-aerial_ff3a4ff3.jpg",
    alt: "Bocas del Toro archipelago aerial",
    property: "Nayara Bocas del Toro",
    category: "landscape",
    caption: "Panama's Caribbean archipelago — overwater luxury in an untouched paradise",
    aspect: "landscape",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-overwater_f9b09985.jpg",
    alt: "Overwater bungalows at Bocas del Toro",
    property: "Nayara Bocas del Toro",
    category: "rooms",
    caption: "Overwater bungalows connected by wooden boardwalks above turquoise lagoons",
    aspect: "landscape",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-sunset_2eeaa785.jpg",
    alt: "Caribbean sunset at Bocas del Toro",
    property: "Nayara Bocas del Toro",
    category: "landscape",
    caption: "Golden hour over the Caribbean — where the jungle meets the sea",
    aspect: "landscape",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-bungalow_f4de28d6.jpg",
    alt: "Bocas del Toro bungalow detail",
    property: "Nayara Bocas del Toro",
    category: "rooms",
    caption: "Caribbean warmth meets refined design in every overwater bungalow",
    aspect: "landscape",
  },
];

const properties = ["All", "Alto Atacama", "Bocas del Toro", "Gardens", "Hangaroa", "Springs", "Tented Camp"];
const categoryFilters = ["All", "Landscape", "Rooms", "Wellness", "Experience"];

/* ─── Main Component ─────────────────────────────────────── */
export default function Gallery() {
  const [activeProperty, setActiveProperty] = useState("All");
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = galleryImages.filter((img) => {
    const propMatch = activeProperty === "All" || img.property === activeProperty;
    const catMatch = activeCategory === "All" || img.category === activeCategory.toLowerCase();
    return propMatch && catMatch;
  });

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const navigateLightbox = useCallback((direction: number) => {
    if (lightboxIndex === null) return;
    const newIndex = lightboxIndex + direction;
    if (newIndex >= 0 && newIndex < filtered.length) {
      setLightboxIndex(newIndex);
    }
  }, [lightboxIndex, filtered.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigateLightbox(-1);
      if (e.key === "ArrowRight") navigateLightbox(1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, navigateLightbox]);

  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      {/* Header */}
      <BrandNavigation pageType="brand" />

      {/* Hero */}
      <GalleryHero />

      {/* Filters */}
      <section className="px-6 md:px-10 py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto">
          {/* Property filter */}
          <div className="mb-6">
            <p
              className="text-stone-400 text-[10px] tracking-[0.3em] uppercase mb-3"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Destination
            </p>
            <div className="flex flex-wrap gap-2">
              {properties.map((p) => (
                <button
                  key={p}
                  onClick={() => setActiveProperty(p)}
                  className={`px-4 py-1.5 text-xs tracking-[0.1em] rounded-full border transition-all duration-300 ${
                    activeProperty === p
                      ? "bg-[#3a2a1a] text-white border-[#3a2a1a]"
                      : "bg-transparent text-stone-500 border-stone-300 hover:border-stone-500 hover:text-stone-700"
                  }`}
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Category filter */}
          <div>
            <p
              className="text-stone-400 text-[10px] tracking-[0.3em] uppercase mb-3"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Category
            </p>
            <div className="flex flex-wrap gap-2">
              {categoryFilters.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`px-4 py-1.5 text-xs tracking-[0.1em] rounded-full border transition-all duration-300 ${
                    activeCategory === c
                      ? "bg-[#3a2a1a] text-white border-[#3a2a1a]"
                      : "bg-transparent text-stone-500 border-stone-300 hover:border-stone-500 hover:text-stone-700"
                  }`}
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Masonry-style Gallery Grid */}
      <section className="px-6 md:px-10 pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, idx) => (
                <MagneticCard key={img.src} img={img} idx={idx} onClick={() => openLightbox(idx)} />
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p
                className="text-stone-400 text-lg"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                No images match the selected filters
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation arrows */}
            {lightboxIndex > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
                className="absolute left-6 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors z-10"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
            )}
            {lightboxIndex < filtered.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors z-10"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            )}

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="max-w-[90vw] max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                className="max-w-full max-h-[75vh] object-contain"
              />
              <div className="mt-6 text-center max-w-2xl">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <MapPin className="w-3 h-3 text-white/40" />
                  <span
                    className="text-white/40 text-[10px] tracking-[0.25em] uppercase"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                  >
                    {filtered[lightboxIndex].property}
                  </span>
                </div>
                {filtered[lightboxIndex].caption && (
                  <p
                    className="text-white/70 text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                  >
                    {filtered[lightboxIndex].caption}
                  </p>
                )}
              </div>
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
              <span
                className="text-white/30 text-xs tracking-[0.2em]"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                {lightboxIndex + 1} / {filtered.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   GALLERY HERO — Minimal editorial header
   ═══════════════════════════════════════════════════════════ */
function GalleryHero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <NativeVideo
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/gallery-hero-v2_a969e1d4.mp4"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end items-center px-5 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-[#fcf8f5] mb-[50px] md:mb-[85px] max-w-[1052px]"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            fontSize: 'clamp(32px, 5vw, 50px)',
            letterSpacing: '-2px',
            lineHeight: 1,
          }}
        >
          A Curated Eye
        </motion.h1>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   EXPERIMENT 1: Magnetic Tilt Card
   3D perspective tilt that follows cursor on hover.
   To revert: replace <MagneticCard> with original <motion.div> in gallery grid.
   ═══════════════════════════════════════════════════════════ */
function MagneticCard({ img, idx, onClick }: { img: GalleryImage; idx: number; onClick: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), { stiffness: 200, damping: 20 });
  const glareOpacity = useSpring(0, { stiffness: 200, damping: 20 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
    glareOpacity.set(0.15);
  }, [mouseX, mouseY, glareOpacity]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
    glareOpacity.set(0);
  }, [mouseX, mouseY, glareOpacity]);

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: idx * 0.05 }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 800,
        transformStyle: "preserve-3d" as const,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="break-inside-avoid cursor-pointer group relative overflow-hidden"
      onClick={onClick}
    >
      <img
        src={img.src}
        alt={img.alt}
        className={`w-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ${
          img.aspect === "portrait" ? "aspect-[3/4]" : img.aspect === "square" ? "aspect-square" : "aspect-[4/3]"
        }`}
        loading="lazy"
      />
      {/* Subtle glare overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: glareOpacity,
          background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 60%)",
        }}
      />
      {/* Hover overlay with caption */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100">
        <div className="flex items-center gap-2 mb-2">
          <MapPin className="w-3 h-3 text-white/60" />
          <span
            className="text-white/60 text-[10px] tracking-[0.2em] uppercase"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            {img.property}
          </span>
        </div>
        {img.caption && (
          <p
            className="text-white text-sm leading-relaxed"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            {img.caption}
          </p>
        )}
      </div>
    </motion.div>
  );
}
