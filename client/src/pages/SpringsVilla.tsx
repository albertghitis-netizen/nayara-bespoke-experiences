/*
 * SPRINGS VILLA — The only room type at Nayara Springs
 * Design: "Quiet Immersion" — cinematic scroll, full-bleed imagery,
 *         slow reveals. Feels like flipping through a luxury lookbook.
 * Distinct from Tented Camp rooms (cascade/editorial) — this is
 *         horizontal rhythm, large stills, whispered typography.
 * Palette: Deep teal + warm cream + mineral blue
 */
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";

/* ── Palette ── */
const P = {
  bg: "#F4F1EC",        /* warm parchment */
  bgDeep: "#1E3A3D",    /* deep teal */
  text: "#1A2A2E",
  textSoft: "#1A2A2Ecc",
  textMuted: "#1A2A2E60",
  primary: "#3B6E7B",
  accent: "#A8C5B8",
  cream: "#FAF8F5",
  bone: "#EDE9E3",
  white: "#FFFFFF",
};
const display = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)" } as const;

/* ── Images ── */
const IMG = {
  hero: "/manus-storage/ns-pool-volcano-brice-ferre_325c17f8.jpeg",
  droneVilla: "/manus-storage/ns-drone-villa-jungle_eefd5ecc.jpeg",
  aerialDomes: "/manus-storage/ns-aerial-volcano-domes_bed01c76.jpeg",
  coupleInBed: "/manus-storage/ns-spvl-modelos_c4cdc5a5.jpeg",
  poolEdge: "/manus-storage/ns-spvl-modelo-piscina_f779cf80.jpeg",
  mineralPool: "/manus-storage/rooms-springs-villa-5_17e484a0.jpg",
  wideBedroom: "/manus-storage/springs-villa-1-pg_1f5c5084.jpg",
  blueEntrance: "/manus-storage/springs-villa-entrance_845fc374.jpg",
  outdoorShower: "/manus-storage/springs-villa-outdoor-shower_ba8aabd2.jpg",
  indoorShower: "/manus-storage/springs-villa-shower-2_7cecaaea.jpg",
  rainforestBridge: "/manus-storage/springs-3_b45787e4.jpg",
};

/* ── Carousel slides with real images ── */
const GALLERY_SLIDES = [
  { src: IMG.wideBedroom, caption: "Ample Living Area for Relaxing", aspect: "3/2" },
  { src: IMG.droneVilla, caption: "Jungle-Wrapped Private Villa", aspect: "3/2" },
  { src: IMG.coupleInBed, caption: "Four-Poster Bed, Exotic Touches", aspect: "2/3" },
  { src: IMG.mineralPool, caption: "Secluded Plunge Pool Fed by Hot Springs", aspect: "3/2" },
  { src: IMG.outdoorShower, caption: "Outdoor Double Rain Showers", aspect: "3/2" },
  { src: IMG.blueEntrance, caption: "Indigenous Wood & Stone Details", aspect: "3/2" },
  { src: IMG.indoorShower, caption: "Oversized Bathroom with Rain Heads", aspect: "2/3" },
  { src: IMG.poolEdge, caption: "Private Terrace with Amazing Views", aspect: "3/2" },
];

/* ── Villa Features ── */
const FEATURES = [
  "Four-poster king bed",
  "139 sqm / 1,500 sq. ft.",
  "Plunge pool fed by natural mineral hot springs",
  "Terrace daybed, table & chairs",
  "Living area with day-bed",
  "Breakfast a-la-carte or in-villa",
  "Fresh fruit & welcome cocktail",
  "Wi-Fi throughout the property",
  "Complimentary laundry",
  "Complimentary mini-bar selection",
  "Twice daily maid service",
  "Air conditioning",
  "Eco-friendly bath amenities",
  "Hairdryer & safe deposit box",
  "Daily coffee & tea replenishment",
  "Free international calls",
];

/* ════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════ */
export default function SpringsVilla() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: P.bg }}>
      <BrandNavigation pageType="property" hideCenterLabel />
      <HeroSection />
      <IntroStrip />
      <ImmersiveGallery />
      <StorySection />
      <FeaturesBand />
      <AerialSection />
      <CTASection />
      <Footer pageType="property" bgColor={P.bgDeep} />
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   S1 — HERO: Full-bleed pool+volcano image, text at bottom
   ════════════════════════════════════════════════════════════════ */
function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={ref} className="relative w-full h-screen overflow-hidden">
      {/* Parallax image */}
      <motion.img
        src={IMG.hero}
        alt="Infinity pool overlooking Arenal Volcano"
        className="absolute inset-0 w-full h-[115%] object-cover"
        style={{ y: imgY }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

      {/* Back to Springs — top center, same line as nav */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-50">
        <a
          href="/springs"
          className="inline-flex items-center gap-2 h-10 px-5 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-[1.03]"
          style={{
            ...body,
            fontWeight: 500,
            fontSize: "10px",
            letterSpacing: "0.18em",
            textTransform: "uppercase" as const,
            color: P.white,
            backgroundColor: "rgba(30,58,61,0.5)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Nayara Springs
        </a>
      </div>

      {/* Bottom content */}
      <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-16 pb-12 md:pb-20">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-[10px] md:text-[11px] tracking-[0.45em] uppercase mb-3"
          style={{ ...body, fontWeight: 500, color: "rgba(255,255,255,0.45)" }}
        >
          Romantic &middot; Private &middot; Peaceful
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-4xl md:text-6xl lg:text-7xl leading-[0.95]"
          style={display}
        >
          Springs Villa
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-white/50 text-[11px] md:text-xs tracking-[0.3em] uppercase mt-4"
          style={{ ...body, fontWeight: 400 }}
        >
          Adults Only &middot; Relais &amp; Ch&acirc;teaux
        </motion.p>
      </div>

      {/* Scroll line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-8 bg-white/25"
        />
      </motion.div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   S2 — INTRO STRIP: Centered tagline + key stats
   ════════════════════════════════════════════════════════════════ */
function IntroStrip() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-16" style={{ backgroundColor: P.cream }}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[10px] tracking-[0.35em] uppercase mb-6"
          style={{ ...body, fontWeight: 500, color: P.primary }}
        >
          Step Into Your Villa
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl mb-8 leading-[1.1]"
          style={{ ...display, color: P.text }}
        >
          Timeless Luxury
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base leading-[2] max-w-2xl mx-auto"
          style={{ ...body, color: P.textSoft }}
        >
          Hidden among the tropical forest, the Springs Villa features its own private plunge pool fed by natural mineral hot springs, an expansive private garden with dual rain showers, an oversized bathroom, a sleek four-poster bed, and indoor and outdoor sitting areas. Exotic touches, modern amenities, and indigenous wood and stone are widely used to produce an unparalleled, authentic, and romantic experience.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 flex justify-center gap-12 md:gap-16"
        >
          {[
            { val: "139", unit: "sqm" },
            { val: "King", unit: "Four-poster" },
            { val: "Hot", unit: "Springs pool" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl md:text-3xl" style={{ ...display, color: P.primary }}>{s.val}</p>
              <p className="text-[10px] tracking-[0.15em] uppercase mt-1" style={{ ...body, fontWeight: 500, color: P.textMuted }}>{s.unit}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   S3 — IMMERSIVE GALLERY: Auto-scrolling horizontal carousel
   with mixed aspect ratios — feels like a lookbook
   ════════════════════════════════════════════════════════════════ */
function ImmersiveGallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1, dragFree: true },
    [Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })]
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-4 md:py-8" style={{ backgroundColor: P.bg }}>
      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-3 md:gap-4 pl-6 md:pl-16">
          {GALLERY_SLIDES.map((slide, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex-shrink-0"
              style={{ width: slide.aspect === "2/3" ? "clamp(220px, 30vw, 320px)" : "clamp(340px, 45vw, 520px)" }}
            >
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: slide.aspect, borderRadius: "2px" }}
              >
                <img
                  src={slide.src}
                  alt={slide.caption}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  loading="lazy"
                />
                {/* Subtle gradient at bottom for caption */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
                <p
                  className="absolute bottom-4 left-4 right-4 text-[10px] md:text-[11px] tracking-[0.15em] uppercase"
                  style={{ ...body, fontWeight: 500, color: "rgba(255,255,255,0.85)" }}
                >
                  {slide.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Controls row */}
      <div className="flex items-center justify-between px-6 md:px-16 mt-6">
        {/* Progress dots */}
        <div className="flex gap-1.5">
          {GALLERY_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className="w-1.5 h-1.5 rounded-full transition-all duration-300"
              style={{
                backgroundColor: i === activeIndex ? P.primary : P.primary + "25",
                transform: i === activeIndex ? "scale(1.4)" : "scale(1)",
              }}
            />
          ))}
        </div>
        {/* Nav arrows */}
        <div className="flex gap-2">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="w-9 h-9 rounded-full border flex items-center justify-center transition-colors duration-200 hover:bg-[#3B6E7B]/10"
            style={{ borderColor: P.primary + "30", color: P.primary }}
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="w-9 h-9 rounded-full border flex items-center justify-center transition-colors duration-200 hover:bg-[#3B6E7B]/10"
            style={{ borderColor: P.primary + "30", color: P.primary }}
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   S4 — STORY: Asymmetric two-image + text layout
   Large image left, smaller image + text right — staggered
   ════════════════════════════════════════════════════════════════ */
function StorySection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-16" style={{ backgroundColor: P.cream }}>
      <div className="max-w-7xl mx-auto">
        {/* Row 1: Large image left + text right */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start mb-16 md:mb-28">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-3/5"
          >
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/3", borderRadius: "2px" }}>
              <img
                src={IMG.wideBedroom}
                alt="Spacious villa bedroom with chandelier and terrace view"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-2/5 md:pt-16"
          >
            <p
              className="text-[10px] tracking-[0.3em] uppercase mb-4"
              style={{ ...body, fontWeight: 500, color: P.primary }}
            >
              The Villa
            </p>
            <h3
              className="text-2xl md:text-3xl mb-6 leading-[1.15]"
              style={{ ...display, color: P.text }}
            >
              High Ceilings Flooded with Light
            </h3>
            <p
              className="text-sm leading-[1.9]"
              style={{ ...body, color: P.textSoft }}
            >
              Vaulted ceilings with a handcrafted chandelier open to a private terrace where the rainforest canopy meets the sky. Every detail — from the indigenous stone floors to the artisan textiles — speaks to a place that was made, not manufactured.
            </p>
          </motion.div>
        </div>

        {/* Row 2: Text left + image right (reversed) */}
        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-2/5 md:pt-12"
          >
            <p
              className="text-[10px] tracking-[0.3em] uppercase mb-4"
              style={{ ...body, fontWeight: 500, color: P.primary }}
            >
              The Bathing Ritual
            </p>
            <h3
              className="text-2xl md:text-3xl mb-6 leading-[1.15]"
              style={{ ...display, color: P.text }}
            >
              Open-Air Showers &amp; Mineral Waters
            </h3>
            <p
              className="text-sm leading-[1.9]"
              style={{ ...body, color: P.textSoft }}
            >
              Step from your oversized bathroom through to the outdoor double rain showers, surrounded by tropical plants and blue-tiled walls. Then slip into your private plunge pool — fed by the same natural mineral hot springs that have drawn visitors to this volcanic valley for centuries.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-3/5"
          >
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/3", borderRadius: "2px" }}>
              <img
                src={IMG.outdoorShower}
                alt="Outdoor double rain showers with blue walls and tropical plants"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   S5 — FEATURES BAND: Dark teal background, two-column list
   ════════════════════════════════════════════════════════════════ */
function FeaturesBand() {
  const half = Math.ceil(FEATURES.length / 2);
  const left = FEATURES.slice(0, half);
  const right = FEATURES.slice(half);

  return (
    <section
      className="py-20 md:py-28 px-6 md:px-16"
      style={{ backgroundColor: P.bgDeep, color: P.white }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[10px] tracking-[0.35em] uppercase mb-3 text-center"
          style={{ ...body, fontWeight: 500, color: "rgba(255,255,255,0.35)" }}
        >
          Villa Features
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl md:text-4xl text-center mb-16"
          style={display}
        >
          Every Detail, Considered
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-0">
          {[left, right].map((col, ci) => (
            <div key={ci}>
              {col.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: ci === 0 ? -10 : 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="py-4 border-b"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  <p
                    className="text-[13px] tracking-wide"
                    style={{ ...body, fontWeight: 400, color: "rgba(255,255,255,0.8)" }}
                  >
                    {f}
                  </p>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   S6 — AERIAL: Full-bleed drone shot with volcano + domes
   ════════════════════════════════════════════════════════════════ */
function AerialSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={ref} className="relative w-full overflow-hidden" style={{ height: "70vh" }}>
      <motion.img
        src={IMG.aerialDomes}
        alt="Aerial view of Nayara Springs with Arenal Volcano"
        className="absolute inset-0 w-full h-[110%] object-cover"
        style={{ y: imgY }}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
      <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-16 pb-12 md:pb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[10px] tracking-[0.3em] uppercase mb-2"
          style={{ ...body, fontWeight: 500, color: "rgba(255,255,255,0.5)" }}
        >
          Nayara Springs
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-white text-2xl md:text-4xl"
          style={display}
        >
          Where the Volcano Meets the Forest
        </motion.h2>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   S7 — CTA: Book Now
   ════════════════════════════════════════════════════════════════ */
function CTASection() {
  const handleBookNow = () => {
    import("sonner").then(({ toast }) => toast("Reservation — Coming Soon"));
  };

  return (
    <section
      className="py-24 md:py-36 px-6 md:px-16 text-center"
      style={{ backgroundColor: P.cream }}
    >
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-[10px] tracking-[0.35em] uppercase mb-5"
        style={{ ...body, fontWeight: 500, color: P.primary }}
      >
        Adults Only &middot; Relais &amp; Ch&acirc;teaux
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-3xl md:text-5xl mb-6"
        style={{ ...display, color: P.text }}
      >
        Begin Your Escape
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-sm md:text-base max-w-lg mx-auto mb-12"
        style={{ ...body, color: P.textSoft, lineHeight: "1.9" }}
      >
        Your private villa awaits — complete with natural hot springs, four-poster bed, and the sounds of the rainforest.
      </motion.p>
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        onClick={handleBookNow}
        className="inline-flex items-center gap-3 px-10 py-4 rounded-full transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
        style={{
          ...body,
          fontWeight: 500,
          fontSize: "11px",
          letterSpacing: "0.2em",
          textTransform: "uppercase" as const,
          color: P.white,
          backgroundColor: P.primary,
        }}
      >
        Book Now
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </motion.button>
    </section>
  );
}
