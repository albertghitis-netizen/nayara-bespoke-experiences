/**
 * NAYARA GALLERY — Public-Facing Pinterest Masonry
 * All properties mixed together in one shuffled grid.
 * No sorting, no grouping — just a beautiful jumble.
 * Filters out hero-tagged items, awards, brand logos.
 */

import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";
import {
  springsGallery,
  atacamaGallery,
  bocasGallery,
  tentedCampGallery,
  gardensGallery,
  hangaroaGallery,
  type GalleryItem,
} from "@/data/gallery";

const display = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

/* ─── Deterministic shuffle (seeded) so layout is stable across renders ─── */
function seededShuffle<T>(arr: T[], seed: number): T[] {
  const result = [...arr];
  let s = seed;
  for (let i = result.length - 1; i > 0; i--) {
    s = (s * 16807 + 0) % 2147483647;
    const j = s % (i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/* ─── Filter: remove hero, awards, brand/logo items ─── */
function filterGalleryItems(items: readonly GalleryItem[]): GalleryItem[] {
  return items.filter((item) => {
    if (item.tags.includes("hero")) return false;
    if (item.tags.includes("brand") || item.tags.includes("logo")) return false;
    if (item.tags.includes("awards")) return false;
    return true;
  });
}

/* ─── Collect all items from all properties, filter, and shuffle ─── */
const ALL_RAW = [
  ...springsGallery,
  ...gardensGallery,
  ...tentedCampGallery,
  ...atacamaGallery,
  ...bocasGallery,
  ...hangaroaGallery,
];
const ALL_FILTERED = filterGalleryItems(ALL_RAW);
const ALL_SHUFFLED = seededShuffle(ALL_FILTERED, 42);

/* ─── Video Tile with autoplay on hover ─── */
function VideoTile({ item, onClick }: { item: GalleryItem; onClick: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div
      className="relative overflow-hidden rounded-lg bg-stone-200 cursor-pointer group"
      onClick={onClick}
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    >
      <video
        ref={videoRef}
        src={item.src}
        preload="metadata"
        playsInline
        muted
        loop
        className="w-full h-auto block"
      />
      {/* Play icon overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/5 transition-colors pointer-events-none">
        <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
          <svg className="w-4 h-4 text-stone-700 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      {/* Video badge */}
      <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/50 text-white text-[9px] tracking-wider uppercase" style={body}>
        Video
      </div>
    </div>
  );
}

/* ─── Image Tile ─── */
function ImageTile({ item, onClick }: { item: GalleryItem; onClick: () => void }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-lg bg-stone-200 cursor-pointer group"
      onClick={onClick}
    >
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-auto block transition-transform duration-500 group-hover:scale-105 ${loaded ? "opacity-100" : "opacity-0"}`}
      />
      {!loaded && <div className="absolute inset-0 animate-pulse bg-stone-200" />}
    </div>
  );
}

/* ─── Lightbox ─── */
function Lightbox({
  item,
  onClose,
  onPrev,
  onNext,
}: {
  item: GalleryItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
      >
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Nav arrows */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Media */}
      <div
        className="max-w-[90vw] max-h-[80vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "video" ? (
          <video
            src={item.src}
            controls
            autoPlay
            muted
            playsInline
            className="max-w-full max-h-[80vh] rounded-lg"
          />
        ) : (
          <img
            src={item.src}
            alt={item.alt}
            className="max-w-full max-h-[80vh] rounded-lg object-contain"
          />
        )}
      </div>

      {/* Caption */}
      <p className="mt-4 text-white/70 text-sm text-center px-4" style={{ ...body, fontWeight: 500 }}>
        {item.alt}
      </p>
    </motion.div>
  );
}

/* ─── Main Gallery Page ─── */
export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const items = ALL_SHUFFLED;

  const openLightbox = useCallback((idx: number) => setLightboxIdx(idx), []);
  const closeLightbox = useCallback(() => setLightboxIdx(null), []);
  const prevLightbox = useCallback(() => {
    setLightboxIdx((i) => (i !== null ? (i - 1 + items.length) % items.length : null));
  }, [items.length]);
  const nextLightbox = useCallback(() => {
    setLightboxIdx((i) => (i !== null ? (i + 1) % items.length : null));
  }, [items.length]);

  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <BrandNavigation pageType="brand" />

      {/* Hero header */}
      <section className="pt-28 md:pt-36 pb-8 md:pb-12 px-6 md:px-10 max-w-[1400px] mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#3B2B26] text-3xl md:text-5xl tracking-wide mb-4"
          style={display}
        >
          Gallery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-stone-500 text-sm md:text-base tracking-wide max-w-xl mx-auto"
          style={body}
        >
          A curated collection of moments across all Nayara destinations
        </motion.p>
      </section>

      {/* Single flat masonry grid — no grouping, no sorting */}
      <section className="px-3 md:px-6 pb-20 max-w-[1400px] mx-auto">
        <div
          className="gap-3 md:gap-4"
          style={{
            columnCount: typeof window !== "undefined" && window.innerWidth < 640 ? 2 : window.innerWidth < 1024 ? 3 : 4,
            columnGap: "0.75rem",
          }}
        >
          {items.map((item, idx) => (
            <div key={item.id} className="break-inside-avoid mb-3 md:mb-4">
              {item.type === "video" ? (
                <VideoTile item={item} onClick={() => openLightbox(idx)} />
              ) : (
                <ImageTile item={item} onClick={() => openLightbox(idx)} />
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer pageType="brand" />

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && items[lightboxIdx] && (
          <Lightbox
            item={items[lightboxIdx]}
            onClose={closeLightbox}
            onPrev={prevLightbox}
            onNext={nextLightbox}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
