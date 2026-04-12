/**
 * NAYARA GALLERY — Standalone Asset Portal
 * Self-contained landing page (no shared nav/footer).
 * Two tabs: Photos & Videos. Grouped by hotel.
 * Download button on each tile + in lightbox.
 */

import { useState, useRef, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MEDIA_CATALOG, PROPERTY_FILTERS, type MediaAsset } from "@/data/mediaCatalog";

const display = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

/* ─── Types ─── */
type MediaTab = "image" | "video";
type PropertyFilter = string;

/* ─── Download helper ─── */
function downloadAsset(asset: MediaAsset) {
  const a = document.createElement("a");
  a.href = asset.url;
  a.download = asset.filename;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

/* ─── Property grouping helper ─── */
const PROPERTY_ORDER = [
  "tented-camp", "gardens", "springs", "costa-rica",
  "atacama", "hangaroa", "bocas", "brand", "nbn", "unknown",
];

function getPropertyLabel(key: string): string {
  const map: Record<string, string> = {
    "tented-camp": "Nayara Tented Camp",
    "gardens": "Nayara Gardens",
    "springs": "Nayara Springs",
    "costa-rica": "Costa Rica",
    "atacama": "Alto Atacama",
    "hangaroa": "Nayara Hangaroa",
    "bocas": "Bocas del Toro",
    "brand": "Nayara Resorts",
    "nbn": "By Night",
    "unknown": "Other",
  };
  return map[key] || key;
}

/* ─── Tile Component ─── */
function GalleryTile({ asset, index, onClick }: { asset: MediaAsset; index: string; onClick: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const propFilter = PROPERTY_FILTERS.find((p) => p.key === asset.property);
  const propColor = propFilter?.color || "#999";

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

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    downloadAsset(asset);
  };

  return (
    <div
      className="break-inside-avoid mb-4 cursor-pointer group relative"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-lg bg-stone-200">
        {asset.mediaType === "video" ? (
          <>
            <video
              ref={videoRef}
              src={asset.url}
              preload="metadata"
              playsInline
              muted
              className="w-full h-auto block"
              style={{ display: "block" }}
            />
            <button
              onClick={handlePlayClick}
              className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors"
            >
              {!isPlaying && (
                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-stone-800 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              )}
            </button>
          </>
        ) : (
          <img
            src={asset.url}
            alt={asset.displayName}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className="w-full h-auto block"
            style={{ display: imageLoaded ? "block" : "none" }}
          />
        )}

        {/* Index badge — top left */}
        <div
          className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] tracking-wider uppercase text-white font-medium"
          style={{ ...body, backgroundColor: propColor + "CC" }}
        >
          {index}
        </div>

        {/* Download button — top right, visible on hover */}
        <button
          onClick={handleDownload}
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all z-10"
          title="Download"
        >
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 18h16" />
          </svg>
        </button>

        {/* Size badge — bottom right */}
        <div
          className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded text-[9px] tracking-wide text-white/90 font-medium"
          style={{ ...body, backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          {asset.sizeMb} MB
        </div>
      </div>

      {/* Name below */}
      <div className="mt-1.5 px-1">
        <p
          className="text-[11px] text-stone-600 leading-tight truncate"
          style={{ ...body, fontWeight: 500 }}
          title={asset.displayName}
        >
          {asset.displayName}
        </p>
      </div>
    </div>
  );
}

/* ─── Lightbox ─── */
function Lightbox({
  asset,
  indexLabel,
  onClose,
  onPrev,
  onNext,
}: {
  asset: MediaAsset;
  indexLabel: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const propFilter = PROPERTY_FILTERS.find((p) => p.key === asset.property);
  const propColor = propFilter?.color || "#999";

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
        className="max-w-[85vw] max-h-[70vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {asset.mediaType === "video" ? (
          <video
            src={asset.url}
            controls
            autoPlay
            muted
            playsInline
            className="max-w-full max-h-[70vh] rounded-lg"
          />
        ) : (
          <img
            src={asset.url}
            alt={asset.displayName}
            className="max-w-full max-h-[70vh] rounded-lg object-contain"
          />
        )}
      </div>

      {/* Info + Download */}
      <div className="mt-4 text-center max-w-xl px-4">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span
            className="inline-block px-3 py-1 rounded-full text-[11px] tracking-wider uppercase text-white"
            style={{ ...body, backgroundColor: propColor, fontWeight: 500 }}
          >
            {indexLabel}
          </span>
          <span className="text-white/60 text-[11px] uppercase tracking-wider" style={body}>
            {asset.mediaType === "video" ? "Video" : "Photo"} · {asset.format} · {asset.sizeMb} MB
          </span>
        </div>
        <p className="text-white/80 text-sm mb-3" style={{ ...body, fontWeight: 500 }}>
          {asset.displayName}
        </p>
        <button
          onClick={(e) => { e.stopPropagation(); downloadAsset(asset); }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white text-[11px] tracking-[0.15em] uppercase transition-all"
          style={{ ...body, fontWeight: 500 }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 18h16" />
          </svg>
          Download
        </button>
      </div>
    </motion.div>
  );
}

/* ─── Main Gallery Page (Standalone) ─── */
export default function Gallery() {
  const [tab, setTab] = useState<MediaTab>("image");
  const [propertyFilter, setPropertyFilter] = useState<PropertyFilter>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter by tab + property
  const filtered = useMemo(() => {
    return MEDIA_CATALOG.filter((asset) => {
      if (asset.mediaType !== tab) return false;
      if (propertyFilter !== "all" && asset.property !== propertyFilter) return false;
      return true;
    });
  }, [tab, propertyFilter]);

  // Group by property in order
  const grouped = useMemo(() => {
    const groups: { key: string; label: string; assets: { asset: MediaAsset; globalIdx: number }[] }[] = [];
    const propMap = new Map<string, { asset: MediaAsset; globalIdx: number }[]>();

    filtered.forEach((asset, idx) => {
      if (!propMap.has(asset.property)) propMap.set(asset.property, []);
      propMap.get(asset.property)!.push({ asset, globalIdx: idx });
    });

    for (const propKey of PROPERTY_ORDER) {
      if (propMap.has(propKey)) {
        groups.push({
          key: propKey,
          label: getPropertyLabel(propKey),
          assets: propMap.get(propKey)!,
        });
      }
    }
    // Any remaining
    for (const entry of Array.from(propMap.entries())) {
      if (!PROPERTY_ORDER.includes(entry[0])) {
        groups.push({ key: entry[0], label: getPropertyLabel(entry[0]), assets: entry[1] });
      }
    }
    return groups;
  }, [filtered]);

  // Index labels (V1/S1 per property)
  const indexLabels = useMemo(() => {
    const labels = new Map<number, string>();
    const counters = new Map<string, number>();
    const prefix = tab === "video" ? "V" : "S";

    filtered.forEach((asset, idx) => {
      const count = (counters.get(asset.property) || 0) + 1;
      counters.set(asset.property, count);
      labels.set(idx, `${prefix}${count}`);
    });
    return labels;
  }, [filtered, tab]);

  const openLightbox = useCallback((idx: number) => setLightboxIndex(idx), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevLightbox = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  }, [filtered.length]);
  const nextLightbox = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null));
  }, [filtered.length]);

  const totalPhotos = MEDIA_CATALOG.filter((a) => a.mediaType === "image").length;
  const totalVideos = MEDIA_CATALOG.filter((a) => a.mediaType === "video").length;

  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      {/* Standalone header — no BrandNavigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f7f5f0]/95 backdrop-blur-md border-b border-stone-200/60">
        <div className="max-w-[1600px] mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
          {/* Logo / Title */}
          <div className="flex items-center gap-3">
            <span
              className="text-[#3B2B26] text-lg tracking-[0.15em] uppercase"
              style={{ ...display }}
            >
              Nayara
            </span>
            <span className="text-stone-300 text-lg">|</span>
            <span
              className="text-stone-500 text-[11px] tracking-[0.2em] uppercase"
              style={{ ...body, fontWeight: 500 }}
            >
              Media Library
            </span>
          </div>

          {/* Asset count */}
          <span
            className="text-stone-400 text-[11px] tracking-wider hidden md:block"
            style={body}
          >
            {MEDIA_CATALOG.length} assets
          </span>
        </div>
      </header>

      {/* Tabs + Filters */}
      <section className="pt-24 pb-6 px-6 md:px-8 max-w-[1600px] mx-auto">
        {/* Photo / Video tabs */}
        <div className="flex items-center gap-1 mb-6">
          <button
            onClick={() => { setTab("image"); setPropertyFilter("all"); }}
            className={`px-6 py-2.5 rounded-full text-[12px] tracking-[0.15em] uppercase transition-all ${
              tab === "image"
                ? "bg-[#3B2B26] text-white"
                : "bg-stone-200 text-stone-500 hover:bg-stone-300"
            }`}
            style={{ ...body, fontWeight: 500 }}
          >
            Photos ({totalPhotos})
          </button>
          <button
            onClick={() => { setTab("video"); setPropertyFilter("all"); }}
            className={`px-6 py-2.5 rounded-full text-[12px] tracking-[0.15em] uppercase transition-all ${
              tab === "video"
                ? "bg-[#3B2B26] text-white"
                : "bg-stone-200 text-stone-500 hover:bg-stone-300"
            }`}
            style={{ ...body, fontWeight: 500 }}
          >
            Videos ({totalVideos})
          </button>
        </div>

        {/* Property filter pills */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setPropertyFilter("all")}
            className={`px-3.5 py-1.5 rounded-full text-[10px] tracking-[0.15em] uppercase transition-all ${
              propertyFilter === "all"
                ? "bg-[#3B2B26] text-white"
                : "bg-stone-200/80 text-stone-500 hover:bg-stone-300"
            }`}
            style={{ ...body, fontWeight: 500 }}
          >
            All
          </button>
          {PROPERTY_FILTERS.map((pf) => {
            const count = MEDIA_CATALOG.filter(
              (a) => a.property === pf.key && a.mediaType === tab
            ).length;
            if (count === 0) return null;
            return (
              <button
                key={pf.key}
                onClick={() => setPropertyFilter(pf.key)}
                className={`px-3.5 py-1.5 rounded-full text-[10px] tracking-[0.15em] uppercase transition-all ${
                  propertyFilter === pf.key
                    ? "text-white"
                    : "bg-stone-200/80 text-stone-500 hover:bg-stone-300"
                }`}
                style={{
                  ...body,
                  fontWeight: 500,
                  backgroundColor: propertyFilter === pf.key ? pf.color : undefined,
                }}
              >
                {pf.label} ({count})
              </button>
            );
          })}
        </div>
      </section>

      {/* Grouped masonry grid */}
      <section className="px-6 md:px-8 pb-20 max-w-[1600px] mx-auto">
        {grouped.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-stone-400 text-lg" style={display}>
              No assets match your filters
            </p>
          </div>
        ) : (
          grouped.map((group) => {
            const propFilter = PROPERTY_FILTERS.find((p) => p.key === group.key);
            const propColor = propFilter?.color || "#999";
            return (
              <div key={group.key} className="mb-12">
                {/* Property heading */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: propColor }} />
                  <h2
                    className="text-xl text-[#3B2B26] tracking-wide"
                    style={display}
                  >
                    {group.label}
                  </h2>
                  <span className="text-stone-400 text-[11px] tracking-wider" style={body}>
                    {group.assets.length} {tab === "video" ? "videos" : "photos"}
                  </span>
                </div>

                {/* Masonry grid */}
                <div
                  className="gap-4"
                  style={{
                    columnCount: typeof window !== "undefined" && window.innerWidth < 768 ? 2 : 4,
                    columnGap: "1rem",
                  }}
                >
                  {group.assets.map(({ asset, globalIdx }) => (
                    <GalleryTile
                      key={asset.url}
                      asset={asset}
                      index={indexLabels.get(globalIdx) || ""}
                      onClick={() => openLightbox(globalIdx)}
                    />
                  ))}
                </div>
              </div>
            );
          })
        )}
      </section>

      {/* Minimal footer */}
      <footer className="border-t border-stone-200 py-8 px-8 text-center">
        <p className="text-stone-400 text-[11px] tracking-wider" style={body}>
          Nayara Resorts — Media Library · {MEDIA_CATALOG.length} assets · For internal use
        </p>
      </footer>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <Lightbox
            asset={filtered[lightboxIndex]}
            indexLabel={indexLabels.get(lightboxIndex) || ""}
            onClose={closeLightbox}
            onPrev={prevLightbox}
            onNext={nextLightbox}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
