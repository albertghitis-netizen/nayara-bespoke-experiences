/**
 * NAYARA , THE TABLE , Brand-Level Pillar Page
 * Dining across all 6 properties
 * Structure: Hero → Intro → Restaurants by Hotel → Food Porn Gallery → Zero Km → CTA → Footer
 */

import { useState, useRef } from "react";
import { useIsMobile } from "@/hooks/useMobile";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import NativeVideo from "@/components/NativeVideo";
import BrandNavigation from "@/components/BrandNavigation";
import HotelFilterBar3 from "@/components/HotelFilterBar3";
import Footer from "@/components/Footer";
import { allDining, type Restaurant, type PropertyDining } from "@/data/dining";

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

const GASTRO_CDN = {
  heroVideoMobile: "/manus-storage/gastronomy-mobile-hero-v2_f219aa4a.mp4",
  heroVideo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/gastronomy-hero-edited_3e0a63fa.mp4",
};

/* ── Property filter tabs (now handled by HotelFilterBar3) ── */

/* ── Cuisine badge color — unified grey for all ── */
const CUISINE_BADGE_CLASS = "bg-stone-100 text-stone-600";

/* ── Route map for property slugs ── */
const propertyRoutes: Record<string, string> = {
  arenal: "/gardens",
  gardens: "/gardens",
  springs: "/springs",
  "tented-camp": "/tented-camp",
  "alto-atacama": "/alto-atacama",
  hangaroa: "/hangaroa",
  "bocas-del-toro": "/bocas-del-toro",
};

/* ── Food Porn images ── */
const FOOD_PORN_IMAGES = [
  { src: "/manus-storage/food-porn-34_6fb51f28.jpeg", w: 1200, h: 1200 },
  { src: "/manus-storage/food-porn-01_4b02f347.jpg", w: 1200, h: 1600 },
  { src: "/manus-storage/food-porn-02_7bc4d276.jpg", w: 1200, h: 1600 },
  { src: "/manus-storage/food-porn-24_663d686d.jpg", w: 1200, h: 1600 },
  { src: "/manus-storage/food-porn-04_c3c7c50a.jpg", w: 1200, h: 1499 },
  { src: "/manus-storage/food-porn-17_88386c34.jpg", w: 1200, h: 1600 },
  { src: "/manus-storage/food-porn-33_94eee8a3.jpg", w: 1200, h: 2132 },
  { src: "/manus-storage/food-porn-06_8e706736.jpg", w: 1200, h: 1499 },
  { src: "/manus-storage/food-porn-03_f31720af.jpg", w: 1200, h: 1499 },
  { src: "/manus-storage/food-porn-08_50857183.jpg", w: 1200, h: 1600 },
  { src: "/manus-storage/food-porn-12_744ae022.jpg", w: 1200, h: 1600 },
  { src: "/manus-storage/food-porn-13_fe10c306.jpg", w: 1200, h: 1600 },
  { src: "/manus-storage/food-porn-14_c4982e88.jpg", w: 1200, h: 1500 },
  { src: "/manus-storage/food-porn-15_4e8ec7a8.jpg", w: 1200, h: 1600 },
  { src: "/manus-storage/food-porn-16_79d3b98d.jpg", w: 1200, h: 1600 },
  { src: "/manus-storage/food-porn-18_ffdfa128.jpg", w: 1200, h: 1600 },
  { src: "/manus-storage/food-porn-19_b8f88b9c.jpg", w: 1200, h: 1600 },
  { src: "/manus-storage/food-porn-21_672369b8.jpg", w: 1200, h: 1600 },
  { src: "/manus-storage/food-porn-22_96238ec4.jpg", w: 1200, h: 1499 },
  { src: "/manus-storage/food-porn-23_4c97f107.jpg", w: 1200, h: 1600 },
  { src: "/manus-storage/food-porn-07_6c1c4ca2.jpg", w: 1200, h: 1599 },
  { src: "/manus-storage/food-porn-28_fa8f5881.jpg", w: 1200, h: 1600 },
  { src: "/manus-storage/food-porn-29_19160c2c.jpg", w: 1200, h: 1600 },
  { src: "/manus-storage/food-porn-31_29c71f37.jpg", w: 1200, h: 1600 },
  { src: "/manus-storage/food-porn-32_2dc0a1eb.jpg", w: 1200, h: 674 },
];

export default function Gastronomy() {
  const [activeHotel, setActiveHotel] = useState("gardens");
  const [, navigate] = useLocation();

  const filtered: PropertyDining[] = activeHotel
    ? allDining.filter((d) => d.propertySlug === activeHotel)
    : allDining;

  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <BrandNavigation pageType="brand" hideCenterLabel />
      <HeroSection />
      <IntroSection />
      <HotelFilterBar3 activeHotel={activeHotel} onHotelChange={setActiveHotel} label="Explore Dining" />
      <PropertySections filtered={filtered} navigate={navigate} />
      <FoodPornGallery />
      <ZeroKilometers />
      <CTASection />
      <Footer textColor="#FFFFFF" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const isMobile = useIsMobile();
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#1a1410]">
      <div className="absolute inset-0">
        {isMobile ? (
          <img
            src="/manus-storage/gastronomy-mobile-hero-still_c6abd926.jpeg"
            alt="Nayara Gastronomy"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
        ) : (
          <NativeVideo src={GASTRO_CDN.heroVideo} loop className="w-full h-full object-cover" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none" />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6">
        <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="text-white text-2xl md:text-4xl lg:text-5xl tracking-wide text-center" style={heading}>
          A Taste of Place
        </motion.h1>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   INTRO — Culinary Philosophy (shortened)
   ═══════════════════════════════════════════════════════════════ */
function IntroSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10">
      <div className="max-w-[900px] mx-auto">
        <FadeIn>
          <p className="text-[#3B2B26]/35 text-[10px] tracking-[0.3em] mb-4" style={{ ...body, fontWeight: 600 }}>Culinary Philosophy</p>
          <h2 className="text-[#4B4A4A] mb-8" style={{ ...heading, fontSize: "clamp(24px, 3.5vw, 38px)", lineHeight: 1.15 }}>
            Every Dish Tells the Story of Its Land
          </h2>
          <p className="text-[#4B4A4A]/70 text-[15px] leading-[1.8]" style={body}>
            From Michelin-recognized kitchens in the Costa Rican rainforest to Pacific Island cuisine on Easter Island, from desert-adapted Chilean fare in the Atacama to Caribbean-Panamanian fusion over the water in Bocas del Toro — every Nayara restaurant sources locally, cooks seasonally, and honors the culinary traditions of its place. Seventy percent of our ingredients come from within 100 kilometers of each property.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PROPERTY SECTIONS — Grouped by property
   ═══════════════════════════════════════════════════════════════ */
function PropertySections({ filtered, navigate }: { filtered: PropertyDining[]; navigate: (path: string) => void }) {
  return (
    <section className="px-6 md:px-10 pb-16 md:pb-24">
      <div className="max-w-[1200px] mx-auto">
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-20">
              <p className="text-[#3B2B26]/40 text-lg" style={heading}>No restaurants match the selected filter</p>
            </motion.div>
          ) : (
            filtered.map((prop, pi) => (
              <motion.div
                key={prop.propertySlug}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: pi * 0.1 }}
                className="mb-16 last:mb-0"
              >
                {/* Property header */}
                <div className="mb-8">
                  <p className="text-[#3B2B26]/30 text-[10px] tracking-[0.3em] mb-2" style={{ ...body, fontWeight: 600 }}>{prop.propertyName}</p>
                  <h2 className="text-[#3B2B26] text-xl md:text-2xl mb-2" style={heading}>{prop.headline}</h2>
                  <p className="text-[#4B4A4A]/55 text-[14px] max-w-2xl leading-relaxed" style={body}>{prop.description}</p>
                </div>

                {/* Restaurant cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {prop.restaurants.map((r, ri) => (
                    <RestaurantCard key={r.id} restaurant={r} index={ri} onNavigate={navigate} />
                  ))}
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ── Restaurant Card ── */
function RestaurantCard({ restaurant, index, onNavigate }: { restaurant: Restaurant; index: number; onNavigate: (path: string) => void }) {
  const hasMenu = restaurant.sections.length > 0;
  const totalItems = restaurant.sections.reduce((acc, s) => acc + s.items.length, 0);
  const colorClass = CUISINE_BADGE_CLASS;
  const route = propertyRoutes[restaurant.propertySlug] || `/${restaurant.propertySlug}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group bg-white/60 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 border border-[#3B2B26]/5 flex flex-col"
    >
      <div className="h-0.5 bg-gradient-to-r from-[#c9b99a]/40 to-transparent" />
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-[#3B2B26] text-lg mb-1" style={{ ...heading, fontWeight: 500 }}>{restaurant.name}</h3>
        <p className="text-[#c9b99a] text-[11px] tracking-[0.04em] italic mb-3" style={body}>{restaurant.tagline}</p>
        <p className="text-[#4B4A4A]/55 text-[13px] leading-relaxed mb-4 flex-1 line-clamp-3" style={body}>
          {restaurant.description}
        </p>
        {restaurant.atmosphere && (
          <p className="text-[#4B4A4A]/30 text-[11px] mb-4" style={body}>{restaurant.atmosphere}</p>
        )}
        <div className="flex items-center justify-between pt-4 border-t border-[#3B2B26]/5">
          {hasMenu ? (
            <span className="text-[#3B2B26]/30 text-[11px]" style={body}>{totalItems} menu items</span>
          ) : (
            <span className="text-[#3B2B26]/20 text-[11px] italic" style={body}>Menu coming soon</span>
          )}
          <button onClick={() => {
            const gastroRoutes: Record<string, string> = {
              gardens: "/gardens/gastronomy",
              springs: "/springs/gastronomy",
              "tented-camp": "/tented-camp/gastronomy",
              "alto-atacama": "/alto-atacama/gastronomy",
              hangaroa: "/hangaroa/gastronomy",
              "bocas-del-toro": "/bocas-del-toro/gastronomy",
            };
            onNavigate(gastroRoutes[restaurant.propertySlug] || route);
          }} className="text-[#c9b99a] text-[11px] tracking-[0.08em] hover:text-[#3B2B26] transition-colors" style={{ ...body, fontWeight: 500 }}>
            Explore More →
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FOOD PORN — Pinterest-style masonry, no gaps, no sorting
   ═══════════════════════════════════════════════════════════════ */
function FoodPornGallery() {
  const isMobile = useIsMobile();
  const cols = isMobile ? 2 : 5;

  // Distribute images into columns for masonry (with original index)
  const indexedImages = FOOD_PORN_IMAGES.map((img, i) => ({ ...img, idx: i + 1 }));
  const columns: typeof indexedImages[] = Array.from({ length: cols }, () => []);
  const colHeights = new Array(cols).fill(0);

  indexedImages.forEach((img) => {
    const shortestCol = colHeights.indexOf(Math.min(...colHeights));
    columns[shortestCol].push(img);
    colHeights[shortestCol] += img.h / img.w;
  });

  return (
    <section className="px-0">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-6">
        <FadeIn>
          <p className="text-[#3B2B26]/30 text-[10px] tracking-[0.35em] uppercase mb-2" style={{ ...body, fontWeight: 600 }}>The Table</p>
          <h2 className="text-[#3B2B26] text-xl md:text-2xl" style={heading}>The Art of Plating</h2>
        </FadeIn>
      </div>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex gap-2 md:gap-3">
        {columns.map((col, ci) => (
          <div key={ci} className="flex-1 flex flex-col gap-2 md:gap-3">
            {col.map((img, ii) => (
              <div key={ii} className="relative w-full" style={{ aspectRatio: `${img.w} / ${img.h}` }}>
                <img
                  src={img.src}
                  alt="Nayara cuisine"
                  className="w-full h-full object-cover block rounded-sm"
                  loading="lazy"
                  decoding="async"
                />

              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ZERO KILOMETERS — One paragraph at the bottom
   ═══════════════════════════════════════════════════════════════ */
function ZeroKilometers() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10">
      <div className="max-w-[900px] mx-auto">
        <FadeIn>
          <p className="text-[#3B2B26]/30 text-[10px] tracking-[0.35em] uppercase mb-4" style={{ ...body, fontWeight: 600 }}>Zero Kilometers</p>
          <p className="text-[#4B4A4A] text-xl md:text-2xl leading-snug mb-6" style={{ ...heading, lineHeight: 1.2 }}>
            The distance between earth and plate is measured in footsteps, not freight miles.
          </p>
          <p className="text-[#4B4A4A]/65 text-[15px] leading-[1.85]" style={body}>
            Zero-kilometer dining is not farm-to-table as marketing language — it is a culinary philosophy rooted in identity. In Costa Rica, coffee from the Tarrazú highlands is roasted for your morning cup at Mi Cafecito. Tropical fruits are picked from local farms and churned into gelato the same afternoon. In the Atacama, quinoa and herbs from oasis gardens become the foundation of every plate. In Bocas del Toro, the Caribbean sea delivers its catch directly to the kitchen. Every Friday in La Fortuna, guests join our staff at the local market — meeting vendors, discovering regional products, understanding the human chain that connects seed to plate. This is what zero-kilometer dining truly means: not just proximity, but relationship. Not just freshness, but belonging.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CTA — All 6 hotels listed individually
   ═══════════════════════════════════════════════════════════════ */
function CTASection() {
  const hotels = [
    { label: "Nayara Tented Camp", route: "/tented-camp" },
    { label: "Nayara Gardens", route: "/gardens" },
    { label: "Nayara Springs", route: "/springs" },
    { label: "Nayara Alto Atacama", route: "/alto-atacama" },
    { label: "Nayara Bocas del Toro", route: "/bocas-del-toro" },
    { label: "Nayara Hangaroa", route: "/hangaroa" },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-10 bg-[#3B2B26]">
      <div className="max-w-[800px] mx-auto text-center">
        <FadeIn>
          <h2 className="text-white/80 mb-4" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>
            Reserve Your Table
          </h2>
          <p className="text-white/40 text-[14px] leading-relaxed mb-8" style={body}>
            From rainforest fine dining to overwater Caribbean kitchens, every meal at Nayara is a destination.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {hotels.map((hotel) => (
              <Link key={hotel.route} href={hotel.route} className="px-5 py-2.5 border border-white/15 rounded-full text-white/60 text-[12px] tracking-[0.08em] hover:border-white/40 hover:text-white/90 hover:bg-white/5 transition-all" style={{ ...body, fontWeight: 500 }}>
                {hotel.label}
              </Link>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
