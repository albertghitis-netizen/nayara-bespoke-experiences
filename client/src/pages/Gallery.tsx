/**
 * NAYARA GALLERY — Full Media Inventory
 * Pinterest masonry with every asset at native aspect ratio.
 * Filters: Property, Media Type (Stills/Videos), Slowpokes
 * 🐌 Snail badge on heavy assets. Usage labels on each tile.
 * Desktop only. No autoplay on videos — click to play.
 */

import { useState, useRef, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";
import { MEDIA_CATALOG, PROPERTY_FILTERS, type MediaAsset } from "@/data/mediaCatalog";

const display = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

/* ─── Filter types ─── */
type PropertyFilter = string; // "all" or a property key
type MediaFilter = "all" | "video" | "image";

/* ─── Tile Component ─── */
function GalleryTile({ asset, onClick }: { asset: MediaAsset; onClick: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [naturalAspect, setNaturalAspect] = useState<number | null>(null);

  const propFilter = PROPERTY_FILTERS.find((p) => p.key === asset.property);
  const propColor = propFilter?.color || "#999";
  const propLabel = propFilter?.label || "?";

  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    setNaturalAspect(img.naturalWidth / img.naturalHeight);
    setImageLoaded(true);
  };

  const handleVideoLoad = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const vid = e.currentTarget;
    if (vid.videoWidth && vid.videoHeight) {
      setNaturalAspect(vid.videoWidth / vid.videoHeight);
    }
  };

  return (
    <div
      className="break-inside-avoid mb-4 cursor-pointer group relative"
      onClick={onClick}
    >
      {/* Media */}
      <div className="relative overflow-hidden rounded-lg bg-stone-200">
        {asset.mediaType === "video" ? (
          <>
            <video
              ref={videoRef}
              src={asset.url}
              preload="metadata"
              playsInline
              muted
              onLoadedMetadata={handleVideoLoad}
              className="w-full h-auto block"
              style={{ display: "block" }}
            />
            {/* Play/Pause overlay */}
            <button
              onClick={handlePlayClick}
              className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors"
            >
              {!isPlaying && (
                <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                  <svg
                    className="w-6 h-6 text-stone-800 ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              )}
            </button>
            {/* VIDEO badge */}
            <div
              className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] tracking-wider uppercase text-white font-medium"
              style={{ ...body, backgroundColor: "rgba(0,0,0,0.6)" }}
            >
              VIDEO · {asset.format}
            </div>
          </>
        ) : (
          <img
            src={asset.url}
            alt={asset.displayName}
            loading="lazy"
            onLoad={handleImageLoad}
            className="w-full h-auto block"
            style={{ display: imageLoaded ? "block" : "none" }}
          />
        )}

        {/* Slowpoke snail badge */}
        {asset.slowpoke && (
          <div
            className="absolute top-2 right-2 w-8 h-8 rounded-full bg-red-500/90 flex items-center justify-center shadow-lg"
            title={`Slowpoke: ${asset.sizeMb} MB`}
          >
            <span className="text-base leading-none">🐌</span>
          </div>
        )}

        {/* Size badge */}
        <div
          className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded text-[9px] tracking-wide text-white/90 font-medium"
          style={{ ...body, backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          {asset.sizeMb} MB
        </div>
      </div>

      {/* Info bar below media */}
      <div className="mt-2 px-1">
        {/* Property tag + orientation */}
        <div className="flex items-center gap-2 mb-1">
          <span
            className="inline-block px-2 py-0.5 rounded-full text-[10px] tracking-wider uppercase text-white"
            style={{ ...body, backgroundColor: propColor, fontWeight: 500 }}
          >
            {propLabel}
          </span>
          {asset.orientation !== "unknown" && (
            <span
              className="text-[10px] tracking-wider uppercase text-stone-400"
              style={body}
            >
              {asset.orientation === "vertical" ? "↕ Vertical" : "↔ Horizontal"}
            </span>
          )}
        </div>

        {/* Display name */}
        <p
          className="text-[12px] text-stone-700 leading-tight truncate"
          style={{ ...body, fontWeight: 500 }}
          title={asset.displayName}
        >
          {asset.displayName}
        </p>

        {/* Usage label */}
        <p
          className="text-[10px] text-stone-400 leading-tight mt-0.5 truncate"
          style={body}
          title={asset.usageLabel}
        >
          Used in: {asset.usageLabel || "—"}
        </p>
      </div>
    </div>
  );
}

/* ─── Lightbox ─── */
function Lightbox({
  asset,
  onClose,
  onPrev,
  onNext,
}: {
  asset: MediaAsset;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const propFilter = PROPERTY_FILTERS.find((p) => p.key === asset.property);
  const propColor = propFilter?.color || "#999";
  const propLabel = propFilter?.label || "?";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center"
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose();
        if (e.key === "ArrowLeft") onPrev();
        if (e.key === "ArrowRight") onNext();
      }}
      tabIndex={0}
      role="dialog"
    >
      {/* Close button */}
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
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Media */}
      <div
        className="max-w-[85vw] max-h-[75vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {asset.mediaType === "video" ? (
          <video
            src={asset.url}
            controls
            autoPlay
            muted
            playsInline
            className="max-w-full max-h-[75vh] rounded-lg"
          />
        ) : (
          <img
            src={asset.url}
            alt={asset.displayName}
            className="max-w-full max-h-[75vh] rounded-lg object-contain"
          />
        )}
      </div>

      {/* Info bar */}
      <div className="mt-4 text-center max-w-xl px-4">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span
            className="inline-block px-3 py-1 rounded-full text-[11px] tracking-wider uppercase text-white"
            style={{ ...body, backgroundColor: propColor, fontWeight: 500 }}
          >
            {propLabel}
          </span>
          <span className="text-white/60 text-[11px] uppercase tracking-wider" style={body}>
            {asset.mediaType === "video" ? "Video" : "Still"} · {asset.format} · {asset.sizeMb} MB
          </span>
          {asset.slowpoke && <span className="text-lg" title="Slowpoke">🐌</span>}
          {asset.orientation !== "unknown" && (
            <span className="text-white/40 text-[11px] uppercase tracking-wider" style={body}>
              {asset.orientation === "vertical" ? "↕ Vertical" : "↔ Horizontal"}
            </span>
          )}
        </div>
        <p className="text-white/80 text-sm" style={{ ...body, fontWeight: 500 }}>
          {asset.displayName}
        </p>
        <p className="text-white/40 text-xs mt-1" style={body}>
          Used in: {asset.usageLabel || "—"}
        </p>
        <p className="text-white/30 text-[10px] mt-1 font-mono">
          {asset.filename}
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Main Gallery Page ─── */
export default function Gallery() {
  const [propertyFilter, setPropertyFilter] = useState<PropertyFilter>("all");
  const [mediaFilter, setMediaFilter] = useState<MediaFilter>("all");
  const [showSlowpokes, setShowSlowpokes] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    return MEDIA_CATALOG.filter((asset) => {
      if (propertyFilter !== "all" && asset.property !== propertyFilter) return false;
      if (mediaFilter !== "all" && asset.mediaType !== mediaFilter) return false;
      if (showSlowpokes && !asset.slowpoke) return false;
      return true;
    });
  }, [propertyFilter, mediaFilter, showSlowpokes]);

  const openLightbox = useCallback((idx: number) => setLightboxIndex(idx), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevLightbox = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  }, [filtered.length]);
  const nextLightbox = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null));
  }, [filtered.length]);

  // Stats
  const totalVideos = MEDIA_CATALOG.filter((a) => a.mediaType === "video").length;
  const totalImages = MEDIA_CATALOG.filter((a) => a.mediaType === "image").length;
  const totalSlowpokes = MEDIA_CATALOG.filter((a) => a.slowpoke).length;
  const filteredSlowpokes = filtered.filter((a) => a.slowpoke).length;

  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <BrandNavigation />

      {/* Hero */}
      <section className="pt-28 pb-12 px-8 max-w-[1600px] mx-auto">
        <h1
          className="text-4xl md:text-5xl text-[#3a2a1a] tracking-wide mb-3"
          style={display}
        >
          Media Library
        </h1>
        <p className="text-stone-500 text-sm tracking-wide max-w-2xl" style={body}>
          Complete inventory of every image and video on the site.{" "}
          <span className="text-[#3a2a1a] font-medium">
            {MEDIA_CATALOG.length} assets
          </span>{" "}
          — {totalVideos} videos, {totalImages} stills.{" "}
          {totalSlowpokes > 0 && (
            <span className="text-red-600">
              🐌 {totalSlowpokes} slowpokes flagged.
            </span>
          )}
        </p>
      </section>

      {/* Filters */}
      <section className="px-8 pb-8 max-w-[1600px] mx-auto">
        {/* Property filters */}
        <div className="mb-4">
          <p
            className="text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-2"
            style={body}
          >
            Property
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setPropertyFilter("all")}
              className={`px-4 py-1.5 rounded-full text-[11px] tracking-wider uppercase transition-all ${
                propertyFilter === "all"
                  ? "bg-[#3a2a1a] text-white"
                  : "bg-stone-200 text-stone-600 hover:bg-stone-300"
              }`}
              style={{ ...body, fontWeight: 500 }}
            >
              All ({MEDIA_CATALOG.length})
            </button>
            {PROPERTY_FILTERS.map((pf) => {
              const count = MEDIA_CATALOG.filter(
                (a) => a.property === pf.key
              ).length;
              if (count === 0) return null;
              return (
                <button
                  key={pf.key}
                  onClick={() => setPropertyFilter(pf.key)}
                  className={`px-4 py-1.5 rounded-full text-[11px] tracking-wider uppercase transition-all ${
                    propertyFilter === pf.key
                      ? "text-white"
                      : "bg-stone-200 text-stone-600 hover:bg-stone-300"
                  }`}
                  style={{
                    ...body,
                    fontWeight: 500,
                    backgroundColor:
                      propertyFilter === pf.key ? pf.color : undefined,
                  }}
                >
                  {pf.label} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Media type + Slowpoke filters */}
        <div className="flex items-center gap-6">
          <div>
            <p
              className="text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-2"
              style={body}
            >
              Media Type
            </p>
            <div className="flex gap-2">
              {(
                [
                  { key: "all", label: "All" },
                  { key: "image", label: "Stills" },
                  { key: "video", label: "Videos" },
                ] as const
              ).map((mf) => (
                <button
                  key={mf.key}
                  onClick={() => setMediaFilter(mf.key)}
                  className={`px-4 py-1.5 rounded-full text-[11px] tracking-wider uppercase transition-all ${
                    mediaFilter === mf.key
                      ? "bg-[#3a2a1a] text-white"
                      : "bg-stone-200 text-stone-600 hover:bg-stone-300"
                  }`}
                  style={{ ...body, fontWeight: 500 }}
                >
                  {mf.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p
              className="text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-2"
              style={body}
            >
              Performance
            </p>
            <button
              onClick={() => setShowSlowpokes(!showSlowpokes)}
              className={`px-4 py-1.5 rounded-full text-[11px] tracking-wider uppercase transition-all ${
                showSlowpokes
                  ? "bg-red-500 text-white"
                  : "bg-stone-200 text-stone-600 hover:bg-stone-300"
              }`}
              style={{ ...body, fontWeight: 500 }}
            >
              🐌 Slowpokes ({totalSlowpokes})
            </button>
          </div>
        </div>

        {/* Results count */}
        <div className="mt-4 pt-4 border-t border-stone-200">
          <p className="text-stone-400 text-xs" style={body}>
            Showing {filtered.length} of {MEDIA_CATALOG.length} assets
            {filteredSlowpokes > 0 && (
              <span className="text-red-500 ml-2">
                · 🐌 {filteredSlowpokes} slowpokes in view
              </span>
            )}
          </p>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="px-8 pb-20 max-w-[1600px] mx-auto">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-stone-400 text-lg" style={display}>
              No assets match your filters
            </p>
          </div>
        ) : (
          <div
            className="gap-4"
            style={{
              columnCount: 4,
              columnGap: "1rem",
            }}
          >
            {filtered.map((asset, idx) => (
              <GalleryTile
                key={asset.url}
                asset={asset}
                onClick={() => openLightbox(idx)}
              />
            ))}
          </div>
        )}
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <Lightbox
            asset={filtered[lightboxIndex]}
            onClose={closeLightbox}
            onPrev={prevLightbox}
            onNext={nextLightbox}
          />
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
