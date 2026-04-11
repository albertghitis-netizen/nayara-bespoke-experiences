/**
 * NAYARA GALLERY — Brand-Level Pinterest Masonry
 * Curated mix of photography from all properties with sparing short videos.
 * True CSS-column masonry with varied tile sizes and organic flow.
 * Property filter pills + lightbox on click.
 */

import { useState, useRef, useMemo, useCallback, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import BrandNavigation from "@/components/BrandNavigation";
import NativeVideo from "@/components/NativeVideo";
import Footer from "@/components/Footer";
import ContentCrossLinks from "@/components/ContentCrossLinks";
import type { GalleryItem } from "@/data/gallery";
import {
  springsGallery,
  atacamaGallery,
  bocasGallery,
  tentedCampGallery,
  gardensGallery,
  hangaroaGallery,
} from "@/data/gallery";

const display = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

/* ─── Curated selection: hand-picked best from each property ─── */
type GalleryEntry = GalleryItem & { property: string; propertyLabel: string };

const PROPERTY_META: Record<string, { label: string; color: string }> = {
  springs: { label: "Nayara Springs", color: "#1a4a2e" },
  "tented-camp": { label: "Nayara Tented Camp", color: "#4a5a3a" },
  gardens: { label: "Nayara Gardens", color: "#3A5E3A" },
  "alto-atacama": { label: "Nayara Alto Atacama", color: "#8b4513" },
  "bocas-del-toro": { label: "Nayara Bocas del Toro", color: "#2A6B7A" },
  hangaroa: { label: "Nayara Hangaroa", color: "#5a5a5a" },
};

/* Curated IDs — best images per property, no hero videos, no logos, no duplicates */
const CURATED_IDS = new Set([
  // Springs — hot springs, plunge pools, rainforest
  "spr-s1", "spr-s2", "spr-s3", "spr-pools", "spr-plunge", "spr-img8113",
  "cr-bridges", "cr-horseback", "cr-yoga", "cr-zipline", "cr-frog-hero",
  "cr-bird-hero", "cr-hs-hero", "cr-spa-kids",
  // Atacama — desert, stars, salt flats
  "ata-s1", "ata-s2", "ata-pool", "ata-stars", "ata-suite", "ata-s4",
  // Bocas — overwater, Caribbean, aerial
  "boc-s1", "boc-s2", "boc-86", "boc-97", "boc-119", "boc-126",
  "boc-villa-couple", "boc-aerial-boardwalk", "boc-clear-swim",
  "boc-treehouses", "boc-full-resort", "boc-infinity-pool",
  "boc-turquoise", "boc-bungalows-row",
  // Tented Camp — tents, volcano, rainforest
  "tc-s1", "tc-s2", "tc-s4", "tc-ext", "tc-hero2", "tc-tent3", "tc-fam2",
  // Gardens — lush grounds
  "gar-s1", "gar-s2", "gar-s3", "gar-s4",
  // Hangaroa — Moai, coast, volcanic
  "han-s1", "han-s2", "han-moai", "han-coast", "han-volcanic",
  "han-aerial", "han-pool", "han-room", "han-moai2", "han-sunset",
  // Sparing videos (3-4 total)
  "spr-vid1", "tc-vid-vert", "boc-vid-aerial",
]);

function buildCuratedGallery(): GalleryEntry[] {
  const sources: Array<{ items: GalleryItem[]; property: string }> = [
    { items: springsGallery, property: "springs" },
    { items: atacamaGallery, property: "alto-atacama" },
    { items: bocasGallery, property: "bocas-del-toro" },
    { items: tentedCampGallery, property: "tented-camp" },
    { items: gardensGallery, property: "gardens" },
    { items: hangaroaGallery, property: "hangaroa" },
  ];

  const result: GalleryEntry[] = [];
  for (const { items, property } of sources) {
    const meta = PROPERTY_META[property];
    for (const item of items) {
      if (CURATED_IDS.has(item.id)) {
        result.push({ ...item, property, propertyLabel: meta.label });
      }
    }
  }

  // Shuffle for organic feel but keep a deterministic seed
  return shuffleDeterministic(result, 42);
}

function shuffleDeterministic<T>(arr: T[], seed: number): T[] {
  const a = [...arr];
  let s = seed;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 16807 + 0) % 2147483647;
    const j = s % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const ALL_ITEMS = buildCuratedGallery();

/* ─── Filter options ─── */
const FILTERS = [
  { id: "all", label: "All Properties" },
  { id: "springs", label: "Springs" },
  { id: "tented-camp", label: "Tented Camp" },
  { id: "gardens", label: "Gardens" },
  { id: "alto-atacama", label: "Alto Atacama" },
  { id: "bocas-del-toro", label: "Bocas del Toro" },
  { id: "hangaroa", label: "Hangaroa" },
];

/* ─── Tile size assignment for masonry variety ─── */
type TileSize = "standard" | "tall" | "wide" | "featured";

function assignTileSize(item: GalleryEntry, index: number): TileSize {
  // Videos get featured treatment
  if (item.type === "video") return "featured";
  // Portrait images get tall
  if (item.orientation === "portrait") return "tall";
  // Every 7th landscape gets wide treatment
  if (index % 7 === 0) return "wide";
  // Every 11th gets featured
  if (index % 11 === 0) return "featured";
  return "standard";
}

/* ═══════════════════════════════════════════════════════════════
   MASONRY TILE — Individual gallery item
   ═══════════════════════════════════════════════════════════════ */
function MasonryTile({
  item,
  size,
  onClick,
}: {
  item: GalleryEntry;
  size: TileSize;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const meta = PROPERTY_META[item.property];

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`
        break-inside-avoid mb-4 md:mb-5 cursor-pointer group relative overflow-hidden rounded-sm
        ${size === "wide" ? "col-span-2" : ""}
      `}
      onClick={onClick}
    >
      {item.type === "video" ? (
        <div className="relative">
          <NativeVideo
            src={item.src}
            className="w-full h-auto object-cover"
            hasAudio={false}
          />
          {/* Video indicator */}
          <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1.5">
            <svg className="w-3 h-3 text-white/80" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span className="text-[9px] text-white/70 tracking-wider uppercase" style={body}>
              Video
            </span>
          </div>
        </div>
      ) : (
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          loading="lazy"
        />
      )}

      {/* Hover overlay with property label */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
          <p
            className="text-white/90 text-[10px] tracking-[0.2em] uppercase mb-1"
            style={{ ...body, fontWeight: 500 }}
          >
            {item.propertyLabel}
          </p>
          <p
            className="text-white/60 text-[13px] leading-snug"
            style={body}
          >
            {item.alt}
          </p>
        </div>
      </div>

      {/* Subtle property color accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ backgroundColor: meta.color }}
      />
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   LIGHTBOX — Full-screen image viewer
   ═══════════════════════════════════════════════════════════════ */
function Lightbox({
  item,
  onClose,
  onPrev,
  onNext,
}: {
  item: GalleryEntry;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext]);

  const meta = PROPERTY_META[item.property];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Nav arrows */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Media */}
      <div
        className="max-w-[90vw] max-h-[85vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "video" ? (
          <video
            src={item.src}
            className="max-w-full max-h-[75vh] object-contain rounded-sm"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            src={item.src}
            alt={item.alt}
            className="max-w-full max-h-[75vh] object-contain rounded-sm"
          />
        )}
        <div className="mt-4 text-center">
          <p
            className="text-white/50 text-[10px] tracking-[0.2em] uppercase mb-1"
            style={{ ...body, fontWeight: 500, color: meta.color }}
          >
            {item.propertyLabel}
          </p>
          <p className="text-white/70 text-sm" style={body}>
            {item.alt}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   GALLERY PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (activeFilter === "all") return ALL_ITEMS;
    return ALL_ITEMS.filter((item) => item.property === activeFilter);
  }, [activeFilter]);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  }, []);

  const prevItem = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev > 0 ? prev - 1 : filtered.length - 1;
    });
  }, [filtered.length]);

  const nextItem = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev < filtered.length - 1 ? prev + 1 : 0;
    });
  }, [filtered.length]);

  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <BrandNavigation pageType="brand" />

      {/* ── Hero header ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[11px] tracking-[0.3em] uppercase mb-6"
          style={{ ...body, fontWeight: 500, color: "#8a7e72" }}
        >
          Visual Stories
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-wide mb-6"
          style={{ ...display, color: "#3a2a1a" }}
        >
          Gallery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-xl mx-auto text-[15px] leading-[1.8]"
          style={{ ...body, color: "#7a6f63" }}
        >
          A curated collection of moments from our resorts — from the volcanic
          highlands of Costa Rica to the ancient shores of Rapa Nui.
        </motion.p>
      </section>

      {/* ── Filter pills ── */}
      <section className="px-6 pb-10 md:pb-14">
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {FILTERS.map((f) => {
            const isActive = activeFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`
                  px-4 py-2 rounded-full text-[11px] tracking-[0.12em] uppercase transition-all duration-300 border
                  ${isActive
                    ? "bg-[#3a2a1a] text-white border-[#3a2a1a]"
                    : "bg-transparent text-[#3a2a1a]/60 border-[#3a2a1a]/15 hover:border-[#3a2a1a]/40 hover:text-[#3a2a1a]"
                  }
                `}
                style={{ ...body, fontWeight: 500 }}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* ── Masonry grid ── */}
      <section className="px-4 md:px-8 lg:px-12 pb-20 md:pb-28">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-5"
          >
            {filtered.map((item, i) => (
              <MasonryTile
                key={item.id}
                item={item}
                size={assignTileSize(item, i)}
                onClick={() => openLightbox(i)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Item count */}
        <div className="text-center mt-12">
          <p
            className="text-[11px] tracking-[0.15em] uppercase"
            style={{ ...body, fontWeight: 500, color: "#8a7e72" }}
          >
            {filtered.length} {filtered.length === 1 ? "image" : "images"}
          </p>
        </div>
      </section>

      {/* ── Cross-links ── */}
      <ContentCrossLinks currentPage="gallery" />

      <Footer />

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <Lightbox
            item={filtered[lightboxIndex]}
            onClose={closeLightbox}
            onPrev={prevItem}
            onNext={nextItem}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
