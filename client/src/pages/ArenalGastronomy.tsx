/**
 * ARENAL GASTRONOMY — Costa Rica-wide culinary page
 * "Forest to Table" — Photo collage + all 9 restaurant links
 * Pinterest-style masonry layout with real Brice Ferre photography
 */

import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import NativeVideo from "@/components/NativeVideo";
import { useIsMobile } from "@/hooks/useMobile";
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
      <BrandNavigation pageType="content" hideCenterLabel />
      <HeroSection />
      <PhilosophySection />
      <RestaurantGrid />
      <PhotoCollage filter={activeFilter} setFilter={setActiveFilter} />
      <ClassesSection />
      <Footer bgColor="#868B75" />textColor="#FFFFFF" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO — Full-bleed image with "Forest to Table"
   ═══════════════════════════════════════════════════════════════ */
const GASTRO_CDN_ARENAL = {
  heroVideoMobile: "/manus-storage/gastronomy-mobile-hero-v2_f219aa4a.mp4",
  heroVideo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/gastronomy-hero-edited_3e0a63fa.mp4",
};

function HeroSection() {
  const isMobile = useIsMobile();
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#1a1410]">
      {/* Hero Video */}
      <div className="absolute inset-0">
        <NativeVideo
          src={isMobile ? GASTRO_CDN_ARENAL.heroVideoMobile : GASTRO_CDN_ARENAL.heroVideo}
          className="w-full h-full object-cover"
          loop={!isMobile}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none" />

      {/* Content — just the title, positioned lower */}
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-xl md:text-3xl lg:text-4xl tracking-wide text-center"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          Forest to Table
        </motion.h1>
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
      <div className="max-w-[1200px] mx-auto">
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
              { value: "12", label: "Restaurants & Bars" },
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
                      {!(restaurant.cardCover || restaurant.hero) ? (
                        <div className="w-full h-full" style={{ backgroundColor: `${BRAND_COLORS.primary}15` }} />
                      ) : (restaurant.cardCover || restaurant.hero).endsWith('.mp4') ? (
                        <video
                          src={restaurant.cardCover || restaurant.hero}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <img
                          src={restaurant.cardCover || restaurant.hero}
                          alt={restaurant.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      )}
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
function PhotoCollage({ filter, setFilter }: { filter: string; setFilter: (f: string) => void }) {
  return null;
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
    { name: "Mixology Class", description: "Craft cocktails with tropical flavors and local spirits", media: "/manus-storage/mixology-class-v2_f3dc1d6d.mp4", type: "video" as const },
    { name: "Coffee Class", description: "From volcanic soil to your morning ritual", media: "/manus-storage/coffee-roasting_a59dcb29.webp", type: "image" as const },
    { name: "Wine Tasting", description: "Sommelier-led education at Nostalgia Wine Bar", media: "/manus-storage/nostalgia-1_2e268294.jpg", type: "image" as const },
    { name: "Cooking Class", description: "Recreate the dishes you've fallen in love with", media: "/manus-storage/cooking-class-clip_a2af26bb.mp4", type: "video" as const },
  ];
  return (
    <section className="py-20 md:py-28 px-6 md:px-10" style={{ backgroundColor: `${BRAND_COLORS.primary}06` }}>
      <div className="max-w-[1200px] mx-auto">
        <AnimateOnScroll variants={fadeUp}>
          <DrawLine color={BRAND_COLORS.accent} className="mb-8" />
          <h2
            className="text-2xl md:text-3xl mb-3"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: BRAND_COLORS.primary }}
          >
            Classes That Go Deeper
          </h2>
          <p
            className="text-[15px] leading-[1.9] max-w-[600px] mb-12"
            style={{ fontFamily: "var(--font-body)", color: BRAND_COLORS.secondary }}
          >
            Why simply eat when you can learn, create, and experience? Signature classes allow you to dive deeper into Costa Rican culinary culture.
          </p>
        </AnimateOnScroll>
        {/* Masonry grid: video | image/image | video */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[200px]">
          {classes.map((cls, i) => {
            const isVideo = cls.type === "video";
            return (
              <AnimateOnScroll
                key={i}
                variants={fadeUp}
                className={`group cursor-pointer relative overflow-hidden rounded-sm ${isVideo ? "row-span-2" : ""}`}
              >
                {isVideo && cls.media ? (
                  <video
                    src={cls.media}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : cls.media ? (
                  <img
                    src={cls.media}
                    alt={cls.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full" style={{ backgroundColor: `${BRAND_COLORS.primary}15` }} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3
                    className="text-white text-lg mb-1"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                  >
                    {cls.name}
                  </h3>
                  <span
                    className="text-white/50 text-[11px] tracking-[0.06em]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {cls.description}
                  </span>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
