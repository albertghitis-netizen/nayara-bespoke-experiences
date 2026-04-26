/**
 * ARENAL GASTRONOMY — Costa Rica-wide culinary page
 * "A Taste of Place" — Photo collage + all 9 restaurant links
 * Pinterest-style masonry layout with real Brice Ferre photography
 */

import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";
import { restaurants, getAllCulinaryImages, type CulinaryImage } from "@/data/culinaryImages";
import {
  AnimateOnScroll,
  StaggerOnScroll,
  TextReveal,
  DrawLine,
  Parallax,
  fadeUp,
  staggerContainer,
} from "@/components/motion";

const BRAND_COLORS = {
  bg: "#f7f5f0",
  primary: "#3a2a1a",
  secondary: "#5a4a3a",
  accent: "#b08d57",
  muted: "#8a7a6a",
};

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function ArenalGastronomy() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  return (
    <div className="min-h-screen" style={{ backgroundColor: BRAND_COLORS.bg }}>
      <BrandNavigation pageType="property" hideCenterLabel />
      <HeroSection />
      <PhilosophySection />
      <RestaurantGrid />
      <PhotoCollage filter={activeFilter} setFilter={setActiveFilter} />
      <ClassesSection />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO — Full-bleed image with "A Taste of Place"
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
      {/* Hero image — use the best food shot */}
      <img
        src="/manus-storage/amor-loco-1_21e055a5.jpg"
        alt="Fine dining at Nayara"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

      {/* Back button */}
      <div className="absolute top-6 left-0 right-0 z-20 flex justify-center">
        <a
          href="/arenal"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
        >
          <svg className="w-3.5 h-3.5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          <span
            className="text-white/80 text-[10px] tracking-[0.2em] uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Costa Rica
          </span>
        </a>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-16 md:pb-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl"
        >
          <span
            className="text-white/40 text-[10px] tracking-[0.4em] uppercase block mb-5"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Arenal Volcano, Costa Rica
          </span>
          <h1
            className="text-white text-3xl md:text-5xl lg:text-6xl tracking-wide mb-5"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            A Taste of Place
          </h1>
          <p
            className="text-white/60 text-sm md:text-base tracking-wide max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Nine restaurants, three properties, one philosophy — where every meal is a celebration of Costa Rica's extraordinary terroir
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PHILOSOPHY — Farm to Table intro
   ═══════════════════════════════════════════════════════════════ */
function PhilosophySection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10" style={{ backgroundColor: BRAND_COLORS.bg }}>
      <div className="max-w-[1000px] mx-auto">
        <AnimateOnScroll variants={fadeUp}>
          <DrawLine color={BRAND_COLORS.accent} className="mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <span
                className="text-[10px] tracking-[0.3em] uppercase block mb-4"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: BRAND_COLORS.accent }}
              >
                Farm to Table
              </span>
              <h2
                className="text-2xl md:text-3xl leading-tight"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: BRAND_COLORS.primary }}
              >
                Three Properties,<br />One Culinary Ecosystem
              </h2>
            </div>
            <div className="space-y-5">
              <p
                className="text-[15px] md:text-[16px] leading-[1.9]"
                style={{ fontFamily: "var(--font-body)", color: BRAND_COLORS.secondary }}
              >
                You are not staying at three different hotels that happen to share some restaurants. You are entering a curated world where every meal, every glass, every class reinforces a single philosophy: that a great vacation feeds not just the body, but the mind and soul.
              </p>
              <p
                className="text-[15px] md:text-[16px] leading-[1.9]"
                style={{ fontFamily: "var(--font-body)", color: BRAND_COLORS.secondary }}
              >
                From the precision of Amor Loco's tasting menu to the warmth of La Terraza's handmade pasta, from the inventive cocktails at Henry's Bar to the quiet ritual of Mi Cafecito's morning espresso — each experience is rooted in the volcanic soil, tropical abundance, and creative spirit of Arenal.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Stats row */}
        <AnimateOnScroll variants={fadeUp} delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t" style={{ borderColor: `${BRAND_COLORS.primary}10` }}>
            {[
              { value: "9", label: "Restaurants & Bars" },
              { value: "3", label: "Properties" },
              { value: "5", label: "Culinary Classes" },
              { value: "1", label: "Philosophy" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <span
                  className="text-3xl md:text-4xl block mb-1"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 300, color: BRAND_COLORS.accent }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-[11px] tracking-[0.1em] uppercase"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: BRAND_COLORS.muted }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   RESTAURANT GRID — Cards linking to each restaurant
   ═══════════════════════════════════════════════════════════════ */
function RestaurantGrid() {
  const [, navigate] = useLocation();

  const propertyGroups = [
    { name: "Nayara Tented Camp", slug: "tented-camp" as const },
    { name: "Nayara Springs", slug: "springs" as const },
    { name: "Nayara Gardens", slug: "gardens" as const },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: `${BRAND_COLORS.primary}06` }}>
      <div className="max-w-[1200px] mx-auto">
        <AnimateOnScroll variants={fadeUp}>
          <DrawLine color={BRAND_COLORS.accent} className="mb-8" />
          <h2
            className="text-2xl md:text-3xl mb-3"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: BRAND_COLORS.primary }}
          >
            Our Restaurants
          </h2>
          <p
            className="text-[15px] leading-[1.9] max-w-[600px] mb-12"
            style={{ fontFamily: "var(--font-body)", color: BRAND_COLORS.secondary }}
          >
            From fine dining to artisan gelato, each venue tells its own story while sharing the same commitment to quality.
          </p>
        </AnimateOnScroll>

        {propertyGroups.map((group) => {
          const groupRestaurants = restaurants.filter((r) => r.property === group.slug);
          return (
            <div key={group.slug} className="mb-14 last:mb-0">
              <AnimateOnScroll variants={fadeUp}>
                <span
                  className="text-[10px] tracking-[0.25em] uppercase block mb-6"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: BRAND_COLORS.accent }}
                >
                  {group.name}
                </span>
              </AnimateOnScroll>

              <StaggerOnScroll
                variants={staggerContainer}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {groupRestaurants.map((restaurant) => (
                  <motion.div
                    key={restaurant.slug}
                    variants={fadeUp}
                    className="group cursor-pointer"
                    onClick={() => navigate(restaurant.route)}
                  >
                    <div className="relative overflow-hidden rounded-sm aspect-[4/3]">
                      <img
                        src={restaurant.hero}
                        alt={restaurant.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3
                          className="text-white text-lg mb-1"
                          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                        >
                          {restaurant.name}
                        </h3>
                        <span
                          className="text-white/50 text-[11px] tracking-[0.06em]"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {restaurant.cuisine}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </StaggerOnScroll>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PHOTO COLLAGE — Pinterest-style masonry with filter
   ═══════════════════════════════════════════════════════════════ */
function PhotoCollage({
  filter,
  setFilter,
}: {
  filter: string;
  setFilter: (f: string) => void;
}) {
  const allImages = useMemo(() => getAllCulinaryImages(), []);
  const [visibleCount, setVisibleCount] = useState(30);
  const loaderRef = useRef<HTMLDivElement>(null);

  const filteredImages = useMemo(() => {
    if (filter === "all") return allImages;
    return allImages.filter((img) => img.restaurant === filter);
  }, [allImages, filter]);

  const visibleImages = useMemo(
    () => filteredImages.slice(0, visibleCount),
    [filteredImages, visibleCount]
  );

  // Infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < filteredImages.length) {
          setVisibleCount((prev) => Math.min(prev + 15, filteredImages.length));
        }
      },
      { threshold: 0.1 }
    );
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [visibleCount, filteredImages.length]);

  // Reset count when filter changes
  useEffect(() => {
    setVisibleCount(30);
  }, [filter]);

  const filterOptions = useMemo(() => {
    const opts = [{ slug: "all", label: "All" }];
    restaurants.forEach((r) => opts.push({ slug: r.slug, label: r.name }));
    return opts;
  }, []);

  // Lightbox
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 px-6 md:px-10" style={{ backgroundColor: BRAND_COLORS.bg }}>
      <div className="max-w-[1400px] mx-auto">
        <AnimateOnScroll variants={fadeUp}>
          <DrawLine color={BRAND_COLORS.accent} className="mb-8" />
          <h2
            className="text-2xl md:text-3xl mb-3"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: BRAND_COLORS.primary }}
          >
            The Gallery
          </h2>
          <p
            className="text-[15px] leading-[1.9] max-w-[600px] mb-8"
            style={{ fontFamily: "var(--font-body)", color: BRAND_COLORS.secondary }}
          >
            A visual journey through the kitchens, bars, and dining rooms of Arenal's culinary world.
          </p>
        </AnimateOnScroll>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filterOptions.map((opt) => (
            <button
              key={opt.slug}
              onClick={() => setFilter(opt.slug)}
              className="px-4 py-2 rounded-full text-[11px] tracking-[0.06em] transition-all duration-300"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                backgroundColor: filter === opt.slug ? BRAND_COLORS.primary : `${BRAND_COLORS.primary}08`,
                color: filter === opt.slug ? "#fff" : BRAND_COLORS.secondary,
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          <AnimatePresence mode="popLayout">
            {visibleImages.map((img, i) => (
              <motion.div
                key={`${img.src}-${i}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: Math.min(i * 0.02, 0.3) }}
                className="break-inside-avoid cursor-pointer group"
                onClick={() => setLightboxIdx(i)}
              >
                <div className="relative overflow-hidden rounded-sm">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end">
                    <div className="p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span
                        className="text-white text-[11px] tracking-[0.04em]"
                        style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                      >
                        {restaurants.find((r) => r.slug === img.restaurant)?.name}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load more trigger */}
        {visibleCount < filteredImages.length && (
          <div ref={loaderRef} className="flex justify-center py-10">
            <div className="w-6 h-6 border-2 rounded-full animate-spin" style={{ borderColor: `${BRAND_COLORS.primary}20`, borderTopColor: BRAND_COLORS.accent }} />
          </div>
        )}

        {/* Image count */}
        <div className="text-center mt-8">
          <span
            className="text-[12px] tracking-[0.08em]"
            style={{ fontFamily: "var(--font-body)", color: BRAND_COLORS.muted }}
          >
            {visibleImages.length} of {filteredImages.length} images
          </span>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <Lightbox
            images={visibleImages}
            index={lightboxIdx}
            onClose={() => setLightboxIdx(null)}
            onPrev={() => setLightboxIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : visibleImages.length - 1))}
            onNext={() => setLightboxIdx((prev) => (prev !== null && prev < visibleImages.length - 1 ? prev + 1 : 0))}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   LIGHTBOX
   ═══════════════════════════════════════════════════════════════ */
function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: CulinaryImage[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const img = images[index];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors z-10"
      >
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors z-10"
      >
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Image */}
      <motion.img
        key={img.src}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        src={img.src}
        alt={img.alt}
        className="max-w-[90vw] max-h-[85vh] object-contain rounded-sm"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Caption */}
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <span
          className="text-white/60 text-[12px] tracking-[0.08em]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {restaurants.find((r) => r.slug === img.restaurant)?.name} — {index + 1} / {images.length}
        </span>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CLASSES SECTION
   ═══════════════════════════════════════════════════════════════ */
function ClassesSection() {
  const classes = [
    { name: "Wine Tasting", description: "Sommelier-led education at Nostalgia Wine Bar" },
    { name: "Cooking Class", description: "Recreate the dishes you've fallen in love with" },
    { name: "Coffee Class", description: "From volcanic soil to your morning ritual" },
    { name: "Mixology Class", description: "Craft cocktails with tropical flavors and local spirits" },
    { name: "Rum Tasting", description: "Explore Central America's most storied beverage" },
  ];

  return (
    <section className="py-20 md:py-28 px-6 md:px-10" style={{ backgroundColor: `${BRAND_COLORS.primary}06` }}>
      <div className="max-w-[1000px] mx-auto">
        <AnimateOnScroll variants={fadeUp}>
          <DrawLine color={BRAND_COLORS.accent} className="mb-8" />
          <h2
            className="text-2xl md:text-3xl mb-3"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: BRAND_COLORS.primary }}
          >
            Five Classes That Go Deeper
          </h2>
          <p
            className="text-[15px] leading-[1.9] max-w-[600px] mb-10"
            style={{ fontFamily: "var(--font-body)", color: BRAND_COLORS.secondary }}
          >
            Why simply eat when you can learn, create, and experience? Five signature classes allow you to dive deeper into Costa Rican culinary culture.
          </p>
        </AnimateOnScroll>

        <StaggerOnScroll variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {classes.map((cls, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="p-6 rounded-sm border"
              style={{ borderColor: `${BRAND_COLORS.primary}10`, backgroundColor: `${BRAND_COLORS.primary}03` }}
            >
              <h3
                className="text-[16px] mb-2"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: BRAND_COLORS.primary }}
              >
                {cls.name}
              </h3>
              <p
                className="text-[13px] leading-[1.7]"
                style={{ fontFamily: "var(--font-body)", color: BRAND_COLORS.muted }}
              >
                {cls.description}
              </p>
            </motion.div>
          ))}
        </StaggerOnScroll>
      </div>
    </section>
  );
}
