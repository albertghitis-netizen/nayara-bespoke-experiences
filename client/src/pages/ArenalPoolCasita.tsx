/*
 * ARENAL POOL CASITA — Nayara Gardens
 * Design: "Tropical Sanctuary" — editorial scroll, lush imagery,
 *         slow reveals. Same rhythm as Springs Villa but with
 *         a warmer, greener palette reflecting the Gardens property.
 * Palette: Forest green + warm cream + terracotta accents
 */
import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
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
  accent: "#8FB89A",
  cream: "#FAF8F3",
  bone: "#EDEEE2",
  white: "#FFFFFF",
};
const display = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)" } as const;

/* ── Images ── */
const IMG = {
  hero: "/manus-storage/ng-23_5590429c.jpg",          // aerial casita in rainforest
  bedroom: "/manus-storage/ng-47_b8f23ffb.jpg",       // bedroom with volcano view
  deck: "/manus-storage/ng-11_2adf9087.jpg",          // private deck with plunge pool
  lobby: "/manus-storage/ng-04_31969dc9.jpg",          // quetzal mural lounge
  bathroom: "/manus-storage/ng-08_c33e059a.jpg",       // double vessel sinks
  exterior1: "/manus-storage/ng-24_e6de1a63.jpg",
  exterior2: "/manus-storage/ng-27_d5cd0011.jpg",
  interior1: "/manus-storage/ng-30_c333db12.jpg",
  interior2: "/manus-storage/ng-31_1c39a9a7.jpg",
  detail1: "/manus-storage/ng-61_44cb04ab.jpg",
  detail2: "/manus-storage/ng-62_c8e0d08b.jpg",
  detail3: "/manus-storage/ng-63_2ca10b6d.jpg",
  detail4: "/manus-storage/ng-64_20b24fce.jpg",
  garden1: "/manus-storage/ng-70_2e15d38a.jpg",
  garden2: "/manus-storage/ng-71_034b9af4.jpg",
  garden3: "/manus-storage/ng-72_b024efad.jpg",
  pool1: "/manus-storage/ng-73_4a320fd4.jpg",
  pool2: "/manus-storage/ng-74_e9b89203.jpg",
  view1: "/manus-storage/ng-77_63592bcb.jpg",
  view2: "/manus-storage/ng-80_4e1247d6.jpg",
  view3: "/manus-storage/ng-81_d890819d.jpg",
  terrace1: "/manus-storage/ng-83_a6a98ad2.jpg",
  terrace2: "/manus-storage/ng-84_672212dc.jpg",
  nature1: "/manus-storage/ng-85_1f3c90d1.jpg",
  nature2: "/manus-storage/ng-86_8edcbf54.jpg",
  sunset1: "/manus-storage/ng-89_bf867b9c.jpg",
  sunset2: "/manus-storage/ng-90_f10ca582.jpg",
  night: "/manus-storage/ng-91_d780b86f.jpg",
  casitaHero: "/manus-storage/casita-1_1e6f7bc6.jpg",
  bath2: "/manus-storage/ng-09_3c53d13c.jpg",
  hallway: "/manus-storage/ng-05_b95d46cc.jpg",
  wide1: "/manus-storage/ng-10_9902bdb3.jpg",
  wide2: "/manus-storage/ng-12_2d6d0711.jpg",
  wide3: "/manus-storage/ng-28_58d11718.jpg",
  wide4: "/manus-storage/ng-29_fd43f646.jpg",
};

/* ── Carousel slides ── */
const GALLERY_SLIDES = [
  { src: IMG.bedroom, caption: "Bedroom with Arenal Volcano Views", aspect: "3/2" },
  { src: IMG.deck, caption: "Private Deck & Plunge Pool", aspect: "3/2" },
  { src: IMG.bathroom, caption: "Double Vessel Sink Bathroom", aspect: "3/2" },
  { src: IMG.lobby, caption: "Quetzal Mural Lounge", aspect: "2/3" },
  { src: IMG.garden1, caption: "Tropical Garden Setting", aspect: "3/2" },
  { src: IMG.pool1, caption: "Secluded Plunge Pool", aspect: "3/2" },
  { src: IMG.terrace1, caption: "Private Terrace Retreat", aspect: "3/2" },
  { src: IMG.view1, caption: "Rainforest Canopy Views", aspect: "3/2" },
  { src: IMG.detail1, caption: "Handcrafted Local Details", aspect: "3/2" },
  { src: IMG.sunset1, caption: "Golden Hour at the Casita", aspect: "3/2" },
  { src: IMG.nature1, caption: "Wildlife & Nature", aspect: "3/2" },
  { src: IMG.night, caption: "Evening Ambiance", aspect: "3/2" },
];

/* ── Villa Features ── */
const FEATURES = [
  "King bed or two twin beds",
  "97 m² / 1,044 sq. ft.",
  "Private plunge pool",
  "Terrace with lounge bed & dining",
  "Day bed and desk",
  "Double indoor & outdoor rain showers",
  "Volcano & rainforest views",
  "Breakfast à la carte or in-villa",
  "Fresh fruit & welcome cocktail",
  "Wi-Fi throughout the property",
  "Complimentary mini-bar",
  "Twice daily housekeeping",
  "Air conditioning & ceiling fan",
  "Eco-friendly bath amenities",
  "Safe deposit box & hairdryer",
  "Free international calls",
];

/* ════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════════ */
export default function ArenalPoolCasita() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: P.bg }}>
      <BrandNavigation pageType="property" hideCenterLabel />
      <HeroSection />
      <IntroStrip />
      <ImmersiveGallery />
      <StorySection />
      <FeaturesBand />
      <PhotoGrid />
      <CTASection />
      <Footer pageType="property" bgColor={P.bgDeep} />
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   S1 — HERO: Aerial casita shot nestled in rainforest
   ════════════════════════════════════════════════════════════════ */
function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={ref} className="relative w-full h-screen overflow-hidden">
      <motion.img
        src={IMG.hero}
        alt="Aerial view of Arenal Pool Casita nestled in the rainforest"
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
          Family &middot; Garden &middot; Volcano
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-4xl md:text-6xl lg:text-7xl leading-[0.95]"
          style={display}
        >
          Arenal Pool Casita
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
   S2 — INTRO STRIP: Tagline + key stats
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
          Your Private Rainforest Retreat
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl mb-8 leading-[1.1]"
          style={{ ...display, color: P.text }}
        >
          A Garden Sanctuary
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base leading-[2] max-w-2xl mx-auto"
          style={{ ...body, color: P.textSoft }}
        >
          Recently renovated from the ground up, each freestanding casita is encased in its own rainforest setting — complete with birdsong and occasional wildlife in view. The Arenal Pool Casita features a private plunge pool on an expansive terrace, dual indoor and outdoor rain showers, hardwood furnishings, and locally crafted accents including hand-painted murals by Costa Rican artists. Modern amenities meet indigenous wood and stone to produce an authentic tropical experience.
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
            { val: "97", unit: "sqm" },
            { val: "King", unit: "or Twin beds" },
            { val: "Private", unit: "Plunge pool" },
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
   S3 — IMMERSIVE GALLERY: Auto-scrolling carousel
   ════════════════════════════════════════════════════════════════ */
function ImmersiveGallery() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "center", skipSnaps: false },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: P.bg }}>
      <div className="max-w-7xl mx-auto px-6 md:px-16 mb-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] tracking-[0.35em] uppercase mb-3"
          style={{ ...body, fontWeight: 500, color: P.primary }}
        >
          Gallery
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl"
          style={{ ...display, color: P.text }}
        >
          Every Detail, Considered
        </motion.h2>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 md:gap-6">
          {GALLERY_SLIDES.map((slide, i) => (
            <div
              key={i}
              className="flex-none w-[75vw] md:w-[45vw] lg:w-[35vw]"
            >
              <div
                className="relative overflow-hidden rounded-sm"
                style={{ aspectRatio: slide.aspect }}
              >
                <img
                  src={slide.src}
                  alt={slide.caption}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                  <p
                    className="text-white/80 text-[10px] tracking-[0.15em] uppercase"
                    style={{ ...body, fontWeight: 500 }}
                  >
                    {slide.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   S4 — STORY: Image left, text right / text left, image right
   ════════════════════════════════════════════════════════════════ */
function StorySection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-16" style={{ backgroundColor: P.cream }}>
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
              src={IMG.bedroom}
              alt="Casita bedroom with volcano views"
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
              style={{ ...body, fontWeight: 500, color: P.primary }}
            >
              Recently Renovated
            </p>
            <h2
              className="text-2xl md:text-3xl lg:text-4xl mb-6 leading-[1.1]"
              style={{ ...display, color: P.text }}
            >
              Rebuilt from the Ground Up
            </h2>
            <p
              className="text-sm md:text-base leading-[2]"
              style={{ ...body, color: P.textSoft }}
            >
              Every casita at Nayara Gardens has been completely gutted and rebuilt, emerging with floor-to-ceiling glass walls that frame the Arenal Volcano and surrounding rainforest canopy. The interiors blend teak wood furnishings with contemporary design — a wooden daybed with teal cushions, woven area rugs, and a minibar station tucked beneath a soaring thatched ceiling. The result is a room that feels both rooted in place and entirely new.
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
              style={{ ...body, fontWeight: 500, color: P.primary }}
            >
              Your Private Terrace
            </p>
            <h2
              className="text-2xl md:text-3xl lg:text-4xl mb-6 leading-[1.1]"
              style={{ ...display, color: P.text }}
            >
              Where Indoors Meets the Canopy
            </h2>
            <p
              className="text-sm md:text-base leading-[2]"
              style={{ ...body, color: P.textSoft }}
            >
              Step through the sliding glass doors onto your private wooden deck, where a plunge pool shimmers against a wall of green. A woven sofa and ceramic side table invite long afternoons of reading and watching toucans glide between the trees. The dual rain showers — one indoors, one open to the sky — make every morning feel like a ritual.
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
              src={IMG.deck}
              alt="Private deck with plunge pool in the rainforest"
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
            src={IMG.casitaHero}
            alt="Arenal Pool Casita exterior"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════
   S5 — FEATURES BAND: Dark background with feature list
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
          style={{ ...body, fontWeight: 500, color: P.accent }}
        >
          Casita Features
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl text-center mb-14"
          style={{ ...display, color: P.white }}
        >
          Everything You Need, Nothing You Don't
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
              <span className="mt-1 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: P.accent }} />
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
   S6 — PHOTO GRID: Masonry-style grid of remaining images
   ════════════════════════════════════════════════════════════════ */
function PhotoGrid() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const gridImages = [
    IMG.bathroom, IMG.lobby, IMG.hallway, IMG.wide1,
    IMG.garden2, IMG.garden3, IMG.pool2, IMG.view2,
    IMG.view3, IMG.terrace2, IMG.detail2, IMG.detail3,
    IMG.detail4, IMG.nature2, IMG.sunset2, IMG.wide2,
    IMG.wide3, IMG.wide4, IMG.exterior1, IMG.exterior2,
    IMG.interior1, IMG.interior2, IMG.bath2, IMG.wide1,
  ];

  return (
    <section className="py-20 md:py-28 px-6 md:px-16" style={{ backgroundColor: P.bg }}>
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] tracking-[0.35em] uppercase mb-3"
          style={{ ...body, fontWeight: 500, color: P.primary }}
        >
          More Views
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl mb-10"
          style={{ ...display, color: P.text }}
        >
          The Casita in Detail
        </motion.h2>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
          {gridImages.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02 }}
              className="mb-3 overflow-hidden rounded-sm cursor-pointer"
              onClick={() => setLightbox(i)}
            >
              <img
                src={src}
                alt={`Arenal Pool Casita detail ${i + 1}`}
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
   S7 — CTA: Reserve your casita
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
          style={{ ...body, fontWeight: 500, color: P.accent }}
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
          Your Casita Awaits
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-sm md:text-base leading-[1.8] mb-10"
          style={{ ...body, color: "rgba(255,255,255,0.65)" }}
        >
          Wake to birdsong, swim beneath the volcano, dine under the stars. The Arenal Pool Casita at Nayara Gardens is where the rainforest becomes your private garden.
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
          Reserve Your Casita
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </motion.a>
      </div>
    </section>
  );
}
