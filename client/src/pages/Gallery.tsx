/**
 * GALLERY — Pinterest-style masonry grid
 * All user-provided images + sprinkled videos
 * No filters, no categories, no borders
 * Starts directly with content at the top
 * Black background, lightbox on click
 */

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryImages, type GalleryItem } from "@/data/galleryData";
import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";

const COLUMNS_DESKTOP = 4;
const COLUMNS_TABLET = 3;
const COLUMNS_MOBILE = 2;
const GAP = 4;
const BATCH_SIZE = 40;

export default function Gallery() {
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [columns, setColumns] = useState(COLUMNS_DESKTOP);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setColumns(COLUMNS_MOBILE);
      else if (w < 1024) setColumns(COLUMNS_TABLET);
      else setColumns(COLUMNS_DESKTOP);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, galleryImages.length));
        }
      },
      { rootMargin: "600px" }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const visibleItems = useMemo(
    () => galleryImages.slice(0, visibleCount),
    [visibleCount]
  );

  const columnItems = useMemo(() => {
    const cols: GalleryItem[][] = Array.from({ length: columns }, () => []);
    const heights: number[] = Array(columns).fill(0);
    for (const item of visibleItems) {
      const minIdx = heights.indexOf(Math.min(...heights));
      cols[minIdx].push(item);
      heights[minIdx] += item.h / item.w;
    }
    return cols;
  }, [visibleItems, columns]);

  const openLightbox = useCallback((item: GalleryItem) => {
    const idx = galleryImages.indexOf(item);
    setLightboxIndex(idx);
  }, []);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const navigateLightbox = useCallback((dir: 1 | -1) => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      const next = prev + dir;
      if (next < 0) return galleryImages.length - 1;
      if (next >= galleryImages.length) return 0;
      return next;
    });
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") navigateLightbox(1);
      if (e.key === "ArrowLeft") navigateLightbox(-1);
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, closeLightbox, navigateLightbox]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0a0a0a" }}>
      <BrandNavigation pageType="brand" hideCenterLabel />

      <div className="pt-20 pb-4 px-1 sm:px-2">
        <div className="flex" style={{ gap: `${GAP}px` }}>
          {columnItems.map((col, colIdx) => (
            <div
              key={colIdx}
              className="flex-1 flex flex-col"
              style={{ gap: `${GAP}px` }}
            >
              {col.map((item, itemIdx) => (
                <GalleryCell
                  key={`${colIdx}-${itemIdx}`}
                  item={item}
                  onClick={() => openLightbox(item)}
                />
              ))}
            </div>
          ))}
        </div>

        <div ref={sentinelRef} className="h-4" />

        {visibleCount < galleryImages.length && (
          <div className="flex justify-center py-8">
            <div className="w-6 h-6 border-2 border-white/20 border-t-white/60 rounded-full animate-spin" />
          </div>
        )}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            item={galleryImages[lightboxIndex]}
            onClose={closeLightbox}
            onPrev={() => navigateLightbox(-1)}
            onNext={() => navigateLightbox(1)}
            current={lightboxIndex + 1}
            total={galleryImages.length}
          />
        )}
      </AnimatePresence>

      <Footer bgColor="#0a0a0a" textColor="#f7f5f0" />
    </div>
  );
}

function GalleryCell({
  item,
  onClick,
}: {
  item: GalleryItem;
  onClick: () => void;
}) {
  const [loaded, setLoaded] = useState(false);
  const aspectRatio = item.w / item.h;

  return (
    <div
      className="relative cursor-pointer overflow-hidden group"
      style={{ aspectRatio: `${aspectRatio}` }}
      onClick={onClick}
    >
      {item.type === "video" ? (
        <video
          src={item.src}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setLoaded(true)}
        />
      ) : (
        <img
          src={item.src}
          alt=""
          loading="lazy"
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setLoaded(true)}
        />
      )}

      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

      {item.type === "video" && (
        <div className="absolute bottom-2 left-2 flex items-center gap-1 opacity-60">
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      )}

      {!loaded && (
        <div className="absolute inset-0 bg-neutral-900 animate-pulse" />
      )}
    </div>
  );
}

function Lightbox({
  item,
  onClose,
  onPrev,
  onNext,
  current,
  total,
}: {
  item: GalleryItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  current: number;
  total: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div
        className="absolute top-4 left-4 z-10 text-white/50 text-xs tracking-widest"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {current} / {total}
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center text-white/50 hover:text-white transition-colors"
      >
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center text-white/50 hover:text-white transition-colors"
      >
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      <div
        className="max-w-[90vw] max-h-[85vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "video" ? (
          <video
            src={item.src}
            className="max-w-full max-h-[85vh] object-contain"
            autoPlay
            muted
            loop
            playsInline
            controls
          />
        ) : (
          <motion.img
            key={item.src}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            src={item.src}
            alt=""
            className="max-w-full max-h-[85vh] object-contain"
          />
        )}
      </div>
    </motion.div>
  );
}
