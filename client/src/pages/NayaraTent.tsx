/*
 * NAYARA TENT — Deeper Room Detail Page
 * Luxury product page for the Nayara Tent room type at Tented Camp
 * Three-tone olive palette: primary #868B75, secondary #525642, accent #9A9086
 * Background: bone #EDEEE2
 * Frosted glass pill CTAs, circular slider arrows
 */
import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import BlobVideo from "@/components/BlobVideo";
import FloorPlanExplorer from "@/components/FloorPlanExplorer";
import { useIsMobile } from "@/hooks/useMobile";

/* ── Palette ── */
const P = {
  bg: "#EDEEE2",
  bgDark: "#525642",
  text: "#0D0604",
  textSoft: "#0D0604CC",
  textMuted: "#1A0F0A80",
  primary: "#868B75",
  secondary: "#525642",
  accent: "#9A9086",
  bone: "#F7F5F0",
  white: "#FFFFFF",
};
const display = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)" } as const;

/* ── Frosted glass pill style ── */
const PILL_BG = "rgba(134,139,117,0.82)";
const PILL_BG_HOVER = "rgba(82,86,66,0.92)";
const PILL_BORDER = "rgba(255,255,255,0.25)";

/* ── CDN Images ── */
const IMG = {
  heroVideo: "/manus-storage/Tentreel4-converted_afd33d7d.mp4",
  heroFallback: "/manus-storage/ntc-aerial-connecting_6479275a.jpg",
  drone: "/manus-storage/19B9D444-0A7C-4C29-93A3-A8C0DFDFBD31_dca70410.JPEG",
  resortExterior: "/manus-storage/Resort-6-LR_29e9a13e.jpg",
  tentExterior: "/manus-storage/Rooms-Nayara-Tent-3-LR_24c6c027.jpg",
  familyDaybed: "/manus-storage/NayaraTentedCampTheGlobalWizards-78_a1f0ab1b.jpeg",
  tentPool: "/manus-storage/IMG_5354_30daf7c5.jpg",
  bridge: "/manus-storage/Resort9_c29b5d0f.jpeg",
  bedroom: "/manus-storage/RoomsNayaraTent1_c303c949.jpeg",
  bathroom: "/manus-storage/RoomsFamilyTent4_728d949f.jpeg",
  outdoorShower: "/manus-storage/RoomsNayaraTent4_065082fb.jpeg",
};

/* ── Amenities data ── */
const AMENITIES_LEFT = [
  "4-poster king-size bed with mosquito net",
  "2 twin-size daybeds",
  "Private terrace with plunge pool from hot springs",
  "A-la-carte breakfast served on your terrace",
  "Welcome cocktails & daily fresh fruit",
  "Maid service twice a day",
  "Bathroom with large bathtub & twin vanities",
];
const AMENITIES_RIGHT = [
  "Indoor & outdoor double showers",
  "Complimentary Wi-Fi throughout the resort",
  "Complimentary laundry service",
  "Complimentary daily yoga sessions",
  "Complimentary weekly bird watching tour",
  "Complimentary frog tour twice a week",
  "157.9 sqm / 1,700 sq. ft. of space",
];

/* ── Gallery images for slider ── */
const GALLERY_IMAGES = [
  { src: IMG.bedroom, alt: "Nayara Tent — Four-poster canopy bed with tropical wallpaper" },
  { src: IMG.drone, alt: "Nayara Tent — Aerial view with Arenal Volcano" },
  { src: IMG.bathroom, alt: "Nayara Tent — Freestanding soaking tub and dual vanity" },
  { src: IMG.outdoorShower, alt: "Nayara Tent — Outdoor rain shower with green marble and bamboo" },
  { src: IMG.resortExterior, alt: "Nayara Tented Camp — Resort grounds" },
  { src: IMG.tentExterior, alt: "Nayara Tent — Exterior view surrounded by rainforest" },
];

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function NayaraTent() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: P.bg }}>
      <BrandNavigation pageType="property" hideCenterLabel />
      <HeroSection />
      <IntroSection />
      <GallerySection />
      <FloorPlanExplorer initialTier="tent" availableTiers={["tent", "family"]} />
      <AmenitiesSection />
      <ExperienceSection />
      <CTASection />
      <Footer pageType="property" bgColor={P.primary} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   S1 — HERO: Full-bleed horizontal image with room name overlay
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      <BlobVideo
        src={IMG.heroVideo}
        poster={IMG.heroFallback}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/60" />

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-16 pb-12 md:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/60 text-[11px] md:text-xs tracking-[0.3em] uppercase mb-3"
          style={{ ...body, fontWeight: 500 }}
        >
          Nayara Tented Camp
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-white text-4xl md:text-6xl lg:text-7xl mb-4"
          style={display}
        >
          Nayara Tent
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/80 text-base md:text-lg max-w-xl mb-8"
          style={body}
        >
          Costa Rica's most luxurious tents for a sustainable escape
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex gap-4"
        >
          <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => import("sonner").then(({ toast }) => toast("Reservation — Coming Soon"))}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border backdrop-blur-sm transition-all duration-300 hover:scale-[1.03]"
            style={{
              ...body,
              fontWeight: 500,
              fontSize: "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase" as const,
              color: P.white,
              backgroundColor: hovered ? PILL_BG_HOVER : PILL_BG,
              borderColor: PILL_BORDER,
            }}
          >
            Check Availability
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </motion.div>
      </div>

      {/* Back to Rooms pill — top right */}
      <div className="absolute top-24 md:top-28 right-6 md:right-16">
        <a
          href="/tented-camp"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm transition-all duration-300 hover:scale-[1.03]"
          style={{
            ...body,
            fontWeight: 500,
            fontSize: "10px",
            letterSpacing: "0.15em",
            textTransform: "uppercase" as const,
            color: P.white,
            backgroundColor: "rgba(134,139,117,0.5)",
            borderColor: PILL_BORDER,
          }}
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Tented Camp
        </a>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   S2 — INTRO: Split layout — text left, vertical image right
   ═══════════════════════════════════════════════════════════════ */
function IntroSection() {
  const isMobile = useIsMobile();

  return (
    <section className="py-16 md:py-28 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
        {/* Text — left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="w-full md:w-1/2"
        >
          <p
            className="text-[11px] tracking-[0.25em] uppercase mb-4"
            style={{ ...body, fontWeight: 500, color: P.primary }}
          >
            Eco-Luxury Sanctuary
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-[2.8rem] leading-tight mb-6"
            style={{ ...display, color: P.text }}
          >
            Surrounded by lush vegetation, complete with a private pool
          </h2>
          <p
            className="text-sm md:text-base leading-[1.8] mb-6"
            style={{ ...body, color: P.textSoft }}
          >
            The Nayara Tent is an eco-luxury sanctuary nestled in Costa Rica's vibrant rainforest. Elevated on stilts, these spacious tents offer breathtaking vistas while minimizing environmental impact. Experience the "Pura Vida" vibe as you immerse yourself in sustainable luxury and unparalleled natural beauty.
          </p>

          {/* Quick stats */}
          <div className="flex gap-10 mt-8 mb-8">
            {[
              { value: "1,700", label: "Sq. Ft." },
              { value: "Private", label: "Plunge Pool" },
              { value: "Arenal", label: "Volcano Views" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-2xl md:text-3xl" style={{ ...display, color: P.primary }}>
                  {stat.value}
                </p>
                <p
                  className="text-[10px] tracking-[0.15em] uppercase mt-1"
                  style={{ ...body, fontWeight: 500, color: P.textMuted }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <p
            className="text-[11px] tracking-[0.12em] uppercase"
            style={{ ...body, fontWeight: 500, color: P.accent }}
          >
            Perfect for couples & small families (2 adults, 2 children)
          </p>
        </motion.div>

        {/* Vertical image — right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="w-full md:w-1/2"
        >
          <div className="relative overflow-hidden rounded-sm aspect-[3/4]">
            <img
              src={IMG.tentPool}
              alt="Nayara Tent — Tent exterior with private plunge pool at sunset"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>

      {/* Full-width horizontal image below */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="mt-12 md:mt-20"
      >
        <div className="relative overflow-hidden rounded-sm aspect-[16/7]">
          <img
            src={IMG.tentExterior}
            alt="Nayara Tent — Exterior surrounded by Costa Rican rainforest"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   S3 — GALLERY: Full-width image slider with circular arrows
   ═══════════════════════════════════════════════════════════════ */
function GallerySection() {
  const isMobile = useIsMobile();
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const totalSlides = GALLERY_IMAGES.length;

  const scrollToSlide = useCallback((idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: idx * el.clientWidth, behavior: "smooth" });
    setCurrentSlide(idx);
  }, []);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const newIdx = Math.round(el.scrollLeft / el.clientWidth);
    setCurrentSlide((prev) => (newIdx !== prev ? newIdx : prev));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <section className="py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-16 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="text-[11px] tracking-[0.25em] uppercase mb-3"
            style={{ ...body, fontWeight: 500, color: P.primary }}
          >
            Gallery
          </p>
          <h2
            className="text-3xl md:text-4xl"
            style={{ ...display, color: P.text }}
          >
            Inside & Out
          </h2>
        </motion.div>
      </div>

      {/* Slider */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-16">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" as any }}
        >
          {GALLERY_IMAGES.map((img, i) => (
            <div key={i} className="snap-center shrink-0 w-full">
              <div className="relative overflow-hidden rounded-sm aspect-[16/9]">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Circular arrows — desktop only */}
        {!isMobile && totalSlides > 1 && (
          <>
            {currentSlide > 0 && (
              <button
                onClick={() => scrollToSlide(currentSlide - 1)}
                className="absolute left-8 md:left-20 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: P.secondary, color: P.white }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>
            )}
            {currentSlide < totalSlides - 1 && (
              <button
                onClick={() => scrollToSlide(currentSlide + 1)}
                className="absolute right-8 md:right-20 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: P.secondary, color: P.white }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            )}
          </>
        )}

        {/* Dots */}
        {totalSlides > 1 && (
          <div className="flex justify-center gap-2 mt-5">
            {GALLERY_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToSlide(i)}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: i === currentSlide ? P.primary : `${P.primary}40`,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   S4 — AMENITIES: Dark olive background with amenity columns
   ═══════════════════════════════════════════════════════════════ */
function AmenitiesSection() {
  return (
    <section
      className="py-16 md:py-28 px-6 md:px-16"
      style={{ backgroundColor: P.bgDark }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16"
        >
          <p
            className="text-[11px] tracking-[0.25em] uppercase mb-3"
            style={{ ...body, fontWeight: 500, color: `${P.bone}99` }}
          >
            What's Included
          </p>
          <h2
            className="text-3xl md:text-4xl"
            style={{ ...display, color: P.bone }}
          >
            Tent Amenities
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex-1"
          >
            <ul className="space-y-4">
              {AMENITIES_LEFT.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: P.primary }}
                  />
                  <span
                    className="text-sm md:text-base leading-relaxed"
                    style={{ ...body, color: `${P.bone}CC` }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            <ul className="space-y-4">
              {AMENITIES_RIGHT.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: P.primary }}
                  />
                  <span
                    className="text-sm md:text-base leading-relaxed"
                    style={{ ...body, color: `${P.bone}CC` }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Full-width image below amenities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-12 md:mt-20"
        >
          <div className="relative overflow-hidden rounded-sm aspect-[16/7]">
            <img
              src={IMG.drone}
              alt="Nayara Tented Camp — Aerial view with Arenal Volcano"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   S5 — EXPERIENCE: Split layout — image left, text right
   ═══════════════════════════════════════════════════════════════ */
function ExperienceSection() {
  const isMobile = useIsMobile();

  return (
    <section className="py-16 md:py-28 px-6 md:px-16 max-w-7xl mx-auto">
      {/* Top: image left, text right */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="w-full md:w-1/2"
        >
          <div className="relative overflow-hidden rounded-sm aspect-[4/5]">
            <img
              src={IMG.bridge}
              alt="Suspension bridge through the lush rainforest at Nayara Tented Camp"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="w-full md:w-1/2"
        >
          <p
            className="text-[11px] tracking-[0.25em] uppercase mb-4"
            style={{ ...body, fontWeight: 500, color: P.primary }}
          >
            Authentic Luxury
          </p>
          <h2
            className="text-3xl md:text-4xl leading-tight mb-6"
            style={{ ...display, color: P.text }}
          >
            Authentic luxury experiences
          </h2>
          <p
            className="text-sm md:text-base leading-[1.8] mb-6"
            style={{ ...body, color: P.textSoft }}
          >
            Immerse yourself in the tranquil haven of your generously sized Nayara Tent, where opulence and nature intertwine seamlessly. Awaken your senses as the crystal-clear waters of your private pool, nourished by nearby hot springs, embrace your skin, leaving you refreshed and rejuvenated.
          </p>
          <p
            className="text-sm md:text-base leading-[1.8]"
            style={{ ...body, color: P.textSoft }}
          >
            Indulge in a truly unique and authentic luxury experience as you savor breakfast on your private terrace. Let the morning sun caress your face while you delight in the tantalizing flavors of a thoughtfully crafted meal.
          </p>
        </motion.div>
      </div>

      {/* Bottom: text left, image right */}
      <div className="flex flex-col md:flex-row-reverse gap-12 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="w-full md:w-1/2"
        >
          <div className="relative overflow-hidden rounded-sm aspect-[3/4]">
            <img
              src={IMG.bridge}
              alt="Suspension bridge through the Costa Rican rainforest"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="w-full md:w-1/2"
        >
          <p
            className="text-[11px] tracking-[0.25em] uppercase mb-4"
            style={{ ...body, fontWeight: 500, color: P.primary }}
          >
            Nature & Discovery
          </p>
          <h2
            className="text-3xl md:text-4xl leading-tight mb-6"
            style={{ ...display, color: P.text }}
          >
            Celebrate the beauty of nature
          </h2>
          <p
            className="text-sm md:text-base leading-[1.8]"
            style={{ ...body, color: P.textSoft }}
          >
            Explore the stunning beauty of Costa Rica's jungle alongside Nayara's expert tour guides, who will unveil unique experiences that leave you in awe. Delve into the captivating world of fauna and flora, as you learn about the intricacies of the diverse ecosystem and uncover its hidden wonders. Allow the symphony of bird songs and the vibrant wildlife to accompany you on this journey, serving as constant reminders of the profound connection between humanity and the natural world.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   S6 — CTA FOOTER: Olive-toned section with reserve buttons
   ═══════════════════════════════════════════════════════════════ */
function CTASection() {
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);

  return (
    <section
      className="relative py-20 md:py-32 px-6 md:px-16 overflow-hidden"
      style={{ backgroundColor: P.primary }}
    >
      {/* Subtle background image overlay */}
      <div className="absolute inset-0 opacity-15">
        <img
          src={IMG.resortExterior}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#868B75]/90 via-[#868B75]/80 to-[#868B75]/95" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <p
            className="text-[11px] tracking-[0.3em] uppercase mb-4"
            style={{ ...body, fontWeight: 500, color: `${P.bone}80` }}
          >
            Nayara Tented Camp
          </p>
          <h2
            className="text-3xl md:text-5xl mb-6"
            style={{ ...display, color: P.bone }}
          >
            Reserve Your Nayara Tent
          </h2>
          <p
            className="text-sm md:text-base leading-[1.8] mb-10 max-w-lg mx-auto"
            style={{ ...body, color: `${P.bone}BB` }}
          >
            Begin your journey into Costa Rica's most luxurious rainforest sanctuary. Your private tent, plunge pool, and volcano views await.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onClick={() => import("sonner").then(({ toast }) => toast("Reservation — Coming Soon"))}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border transition-all duration-300 hover:scale-[1.03]"
              style={{
                ...body,
                fontWeight: 500,
                fontSize: "11px",
                letterSpacing: "0.18em",
                textTransform: "uppercase" as const,
                color: hovered ? P.secondary : P.bone,
                backgroundColor: hovered ? P.bone : "transparent",
                borderColor: `${P.bone}60`,
              }}
            >
              Book Now
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>

            <a
              href="/tented-camp"
              onMouseEnter={() => setHovered2(true)}
              onMouseLeave={() => setHovered2(false)}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border transition-all duration-300 hover:scale-[1.03]"
              style={{
                ...body,
                fontWeight: 500,
                fontSize: "11px",
                letterSpacing: "0.18em",
                textTransform: "uppercase" as const,
                color: hovered2 ? P.secondary : P.bone,
                backgroundColor: hovered2 ? P.bone : "transparent",
                borderColor: `${P.bone}40`,
              }}
            >
              Explore All Rooms
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
