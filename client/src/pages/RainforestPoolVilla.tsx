/*
 * RAINFOREST POOL VILLA — Nayara Gardens
 * Design: "Canopy Retreat" — warm, romantic, editorial.
 *         Terracotta + deep green + thatched textures.
 *         The premium room at Gardens — adults-only feel.
 * Palette: Same Gardens green base but warmer terracotta accents
 */
import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";

/* ── Palette ── */
const P = {
  bg: "#F6F4EF",
  bgDeep: "#1E3D2B",
  text: "#1A0F0A",
  textSoft: "#1A0F0Acc",
  textMuted: "#1A0F0A60",
  primary: "#286241",
  accent: "#C4734B",
  warm: "#D4956B",
  cream: "#FAF8F3",
  bone: "#EDEEE2",
  white: "#FFFFFF",
};
const display = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)" } as const;

/* ── Images ── */
const IMG = {
  hero: "/manus-storage/rv-1_0529a96c.jpg",           // canopy bed bedroom — HERO
  daybed: "/manus-storage/rv-daybed_20e202ed.jpg",     // outdoor daybed
  detail: "/manus-storage/rv-detail_f052dbcf.jpg",     // interior detail
  vanity: "/manus-storage/rv-vanity_68f4f4d7.jpg",     // bathroom vanity
  /* Shared Gardens images that work for Rainforest Villa context */
  aerial: "/manus-storage/ng-23_5590429c.jpg",         // aerial of villa in forest
  deck: "/manus-storage/ng-11_2adf9087.jpg",           // deck with pool
  garden: "/manus-storage/ng-70_2e15d38a.jpg",         // garden path
  pool: "/manus-storage/ng-73_4a320fd4.jpg",           // pool detail
  nature: "/manus-storage/ng-85_1f3c90d1.jpg",         // nature/wildlife
  sunset: "/manus-storage/ng-89_bf867b9c.jpg",         // golden hour
  night: "/manus-storage/ng-91_d780b86f.jpg",          // evening
  lobby: "/manus-storage/ng-04_31969dc9.jpg",          // quetzal mural lounge
};

/* ── Villa Features ── */
const FEATURES = [
  "King-size canopy bed",
  "~1,135 sq. ft. of living space",
  "Private plunge pool",
  "Wraparound terrace & balcony",
  "Outdoor Jacuzzi",
  "Outdoor rain shower",
  "Indoor rainfall shower",
  "Volcano or rainforest views",
  "Handcrafted art by local artists",
  "Thatched-roof architecture",
  "Persian rugs & terracotta accents",
  "Breakfast à la carte or in-villa",
  "Complimentary mini-bar",
  "Twice daily housekeeping",
  "Air conditioning & ceiling fan",
  "Free international calls",
];

/* ════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════ */
export default function RainforestPoolVilla() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: P.bg }}>
      <BrandNavigation pageType="property" hideCenterLabel />
      <HeroSection />
      <IntroStrip />
      <StorySection />
      <FeaturesBand />
      <PhotoGrid />
      <CTASection />
      <Footer pageType="property" bgColor={P.bgDeep} />
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   S1 — HERO: Canopy bed bedroom shot
   ════════════════════════════════════════════════════════════════ */
function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={ref} className="relative w-full h-screen overflow-hidden">
      <motion.img
        src={IMG.hero}
        alt="Rainforest Pool Villa bedroom with canopy bed"
        className="absolute inset-0 w-full h-[115%] object-cover"
        style={{ y: imgY }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

      {/* Back to Gardens */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-50">
        <a
          href="/gardens"
          className="inline-flex items-center gap-2 h-10 px-5 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-[1.03]"
          style={{
            ...body,
            fontWeight: 500,
            fontSize: "10px",
            letterSpacing: "0.18em",
            textTransform: "uppercase" as const,
            color: P.white,
            backgroundColor: "rgba(30,61,43,0.5)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Nayara Gardens
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
          Romantic &middot; Secluded &middot; Elevated
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-4xl md:text-6xl lg:text-7xl leading-[0.95]"
          style={display}
        >
          Rainforest Pool Villa
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-white/50 text-[11px] md:text-xs tracking-[0.3em] uppercase mt-4"
          style={{ ...body, fontWeight: 400 }}
        >
          Nayara Gardens &middot; Leading Hotels of the World
        </motion.p>
      </div>

      {/* Scroll indicator */}
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
   S2 — INTRO STRIP
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
          style={{ ...body, fontWeight: 500, color: P.accent }}
        >
          The Premium Villa
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl mb-8 leading-[1.1]"
          style={{ ...display, color: P.text }}
        >
          Suspended in the Canopy
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base leading-[2] max-w-2xl mx-auto"
          style={{ ...body, color: P.textSoft }}
        >
          The Rainforest Pool Villa is the most spacious accommodation at Nayara Gardens — over 1,100 square feet of living space elevated among the treetops. A canopy king bed draped in white netting, terracotta headboard, and hand-woven Persian rugs set the tone. The wraparound terrace holds a private plunge pool, an oversized Jacuzzi, and an outdoor rain shower, all framed by views of either the Arenal Volcano or the dense rainforest canopy. Handcrafted works by local Costa Rican artists adorn every surface.
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
            { val: "1,135", unit: "sq. ft." },
            { val: "King", unit: "Canopy bed" },
            { val: "Pool +", unit: "Jacuzzi" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl md:text-3xl" style={{ ...display, color: P.accent }}>{s.val}</p>
              <p className="text-[10px] tracking-[0.15em] uppercase mt-1" style={{ ...body, fontWeight: 500, color: P.textMuted }}>{s.unit}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   S3 — STORY: Alternating image/text blocks
   ════════════════════════════════════════════════════════════════ */
function StorySection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-16" style={{ backgroundColor: P.bg }}>
      <div className="max-w-6xl mx-auto space-y-24 md:space-y-32">
        {/* Block 1: Image left, text right */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-sm"
          >
            <img
              src={IMG.hero}
              alt="Canopy bed with terracotta headboard"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p
              className="text-[10px] tracking-[0.35em] uppercase mb-4"
              style={{ ...body, fontWeight: 500, color: P.accent }}
            >
              The Bedroom
            </p>
            <h2
              className="text-2xl md:text-3xl lg:text-4xl mb-6 leading-[1.1]"
              style={{ ...display, color: P.text }}
            >
              A Room That Tells a Story
            </h2>
            <p
              className="text-sm md:text-base leading-[2]"
              style={{ ...body, color: P.textSoft }}
            >
              Beneath a soaring thatched ceiling, the king-size canopy bed is draped in sheer white netting and anchored by a bold terracotta headboard. A hand-woven Persian rug in deep reds and blues warms the hardwood floor. Sliding glass doors open directly onto the pool deck, blurring the line between bedroom and rainforest. The botanical wall murals are painted by hand — each villa is one of a kind.
            </p>
          </motion.div>
        </div>

        {/* Block 2: Text left, image right */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:order-1"
          >
            <p
              className="text-[10px] tracking-[0.35em] uppercase mb-4"
              style={{ ...body, fontWeight: 500, color: P.accent }}
            >
              The Terrace
            </p>
            <h2
              className="text-2xl md:text-3xl lg:text-4xl mb-6 leading-[1.1]"
              style={{ ...display, color: P.text }}
            >
              Your Private Wraparound Deck
            </h2>
            <p
              className="text-sm md:text-base leading-[2]"
              style={{ ...body, color: P.textSoft }}
            >
              The wraparound terrace is the heart of the Rainforest Pool Villa. A private plunge pool sits alongside an oversized Jacuzzi, both overlooking the volcano or the dense canopy below. The outdoor daybed invites long afternoons of reading, while the rain shower lets you bathe beneath the open sky. Three distinct seating zones — poolside lounge, dining area, and a covered reading nook — ensure every hour has its place.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-sm md:order-2"
          >
            <img
              src={IMG.daybed}
              alt="Outdoor daybed on the wraparound terrace"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Full-width landscape image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="overflow-hidden rounded-sm"
        >
          <img
            src={IMG.aerial}
            alt="Aerial view of Rainforest Pool Villa in the canopy"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   S4 — FEATURES BAND
   ════════════════════════════════════════════════════════════════ */
function FeaturesBand() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-16" style={{ backgroundColor: P.bgDeep }}>
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] tracking-[0.35em] uppercase mb-4 text-center"
          style={{ ...body, fontWeight: 500, color: P.warm }}
        >
          Villa Features
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl text-center mb-14"
          style={{ ...display, color: P.white }}
        >
          Crafted for the Discerning Traveler
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-5">
          {FEATURES.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="flex items-start gap-2"
            >
              <span className="mt-1 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: P.warm }} />
              <p
                className="text-xs md:text-sm leading-[1.6]"
                style={{ ...body, color: "rgba(255,255,255,0.7)" }}
              >
                {f}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   S5 — PHOTO GRID: Detail shots
   ════════════════════════════════════════════════════════════════ */
function PhotoGrid() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const gridImages = [
    IMG.vanity, IMG.detail, IMG.deck, IMG.lobby,
    IMG.garden, IMG.pool, IMG.nature, IMG.sunset,
    IMG.night,
  ];

  return (
    <section className="py-20 md:py-28 px-6 md:px-16" style={{ backgroundColor: P.cream }}>
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] tracking-[0.35em] uppercase mb-3"
          style={{ ...body, fontWeight: 500, color: P.accent }}
        >
          Details & Surroundings
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl mb-10"
          style={{ ...display, color: P.text }}
        >
          The Villa in Detail
        </motion.h2>

        <div className="columns-2 md:columns-3 gap-3">
          {gridImages.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="mb-3 overflow-hidden rounded-sm cursor-pointer"
              onClick={() => setLightbox(i)}
            >
              <img
                src={src}
                alt={`Rainforest Pool Villa detail ${i + 1}`}
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/60 hover:text-white text-2xl z-10"
              onClick={() => setLightbox(null)}
            >
              &times;
            </button>
            <img
              src={gridImages[lightbox]}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   S6 — CTA: Reserve your villa
   ════════════════════════════════════════════════════════════════ */
function CTASection() {
  return (
    <section
      className="relative py-24 md:py-32 px-6 md:px-16 overflow-hidden"
      style={{ backgroundColor: P.bgDeep }}
    >
      <div className="absolute inset-0 opacity-10">
        <img
          src={IMG.hero}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] tracking-[0.35em] uppercase mb-4"
          style={{ ...body, fontWeight: 500, color: P.warm }}
        >
          Begin Your Stay
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl mb-6"
          style={{ ...display, color: P.white }}
        >
          Your Villa in the Canopy
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-sm md:text-base leading-[1.8] mb-10"
          style={{ ...body, color: "rgba(255,255,255,0.65)" }}
        >
          A canopy bed beneath a thatched roof. A private pool overlooking the volcano. Handcrafted art on every wall. The Rainforest Pool Villa is where Nayara Gardens reveals its most intimate side.
        </motion.p>
        <motion.a
          href="https://nayaragardens.com"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-[1.03]"
          style={{
            ...body,
            fontWeight: 500,
            fontSize: "11px",
            letterSpacing: "0.2em",
            textTransform: "uppercase" as const,
            color: P.bgDeep,
            backgroundColor: P.white,
          }}
        >
          Reserve Your Villa
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </motion.a>
      </div>
    </section>
  );
}
