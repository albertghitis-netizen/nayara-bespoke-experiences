/*
 * NAYARA RESIDENCE — Deeper Room Detail Page
 * Layout: Editorial Magazine (matching FamilyTent/GrandTent style)
 * 712 sqm / 7,664 sq ft — 2 Nayara Tents (each: king + 2 daybeds) +
 * 2 connecting rooms (each: 2 queens) + living area hub + infinity pool +
 * fire pit + full kitchen + private concierge
 * Palette: Olive 3-tone (#868B75, #525642, #9A9086) on bone #EDEEE2
 */
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import FloorPlanExplorer from "@/components/FloorPlanExplorer";
import BlobVideo from "@/components/BlobVideo";

/* ── Palette (same tented camp olive) ── */
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
const PILL_BORDER = "rgba(255,255,255,0.25)";

/* ── CDN Images ── */
const IMG = {
  heroVideo: "/manus-storage/tented-residence-hero_e6990cf1.mp4",
  exterior: "/manus-storage/Resort-6-LR_29e9a13e.jpg",
  drone: "/manus-storage/19B9D444-0A7C-4C29-93A3-A8C0DFDFBD31_dca70410.JPEG",
  bedroom: "/manus-storage/RoomsNayaraTent1_c303c949.jpeg",
  bathroom: "/manus-storage/RoomsFamilyTent4_728d949f.jpeg",
  familyDaybed: "/manus-storage/NayaraTentedCampTheGlobalWizards-78_a1f0ab1b.jpeg",
  tentPool: "/manus-storage/IMG_5354_30daf7c5.jpg",
  bridge: "/manus-storage/Resort9_c29b5d0f.jpeg",
  kidsRoom: "/manus-storage/8.Familytentkidsroom.4O1A0231_f12fc400.jpeg",
  tentsFromAbove: "/manus-storage/69.FamilyTentsfromabovejpg_5f2905ac.jpeg",
};

/* ── Amenities ── */
const AMENITIES = [
  "4 bedrooms: 2 master king-size beds, 2 rooms with 2 queen beds each",
  "Each master bedroom has its own private plunge pool from hot springs",
  "Large outdoor living space with daybeds & private fire pit",
  "Private infinity pool from hot springs",
  "Fully equipped kitchen and dining room",
  "Private concierge service",
  "Welcome cocktails, daily fresh fruit, coffee, tea & soft drinks",
  "Maid service twice a day",
  "Bathrooms with large bathtub, twin vanities, dressing areas",
  "Indoor & outdoor double showers",
  "Complimentary Wi-Fi throughout the resort",
  "Complimentary laundry service",
  "Complimentary daily yoga sessions",
  "Complimentary weekly bird watching tour",
  "Complimentary frog tour twice a week",
  "Private chef experience available",
];

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function Residence() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: P.bg }}>
      <BrandNavigation pageType="property" hideCenterLabel />
      <HeroSection />
      <IntroSection />
      <FullBleedBreak />
      <FeaturesGrid />
      <FloorPlanExplorer initialTier="residence" availableTiers={["residence"]} />
      <HorizontalGallery />
      <ConciergeSection />
      <AmenitiesSection />
      <NatureSection />
      <CTASection />
      <Footer pageType="property" bgColor={P.primary} />textColor="#FFFFFF" />textColor="#FFFFFF" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   S1 — HERO: Full-bleed video with room name overlay
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const [hovered, setHovered] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);
  return (
    <section ref={heroRef} className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
      <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
        <BlobVideo
          src={IMG.heroVideo}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60"
        style={{ opacity: heroOpacity }}
      />
      {/* Centered editorial title */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <p
            className="text-white/50 text-[10px] md:text-[11px] tracking-[0.4em] uppercase mb-4"
            style={{ ...body, fontWeight: 500 }}
          >
            Nayara Tented Camp
          </p>
          <h1
            className="text-white text-5xl md:text-7xl lg:text-8xl mb-4"
            style={display}
          >
            Nayara Residences
          </h1>
          <div className="w-16 h-px mx-auto mb-5" style={{ backgroundColor: "rgba(255,255,255,0.4)" }} />
          <p
            className="text-white/70 text-sm md:text-base max-w-md mx-auto mb-8"
            style={body}
          >
            Where timeless family memories unfold in the heart of the rainforest
          </p>
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
              backgroundColor: hovered ? "rgba(134,139,117,0.85)" : "rgba(134,139,117,0.6)",
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
      {/* Back pill — top right */}
      <div className="absolute top-24 md:top-28 right-6 md:right-16 z-20">
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
   S2 — INTRO: Image left, text right
   ═══════════════════════════════════════════════════════════════ */
function IntroSection() {
  return (
    <section className="py-16 md:py-28 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Image left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="aspect-[3/4] overflow-hidden rounded-sm">
            <img
              src={IMG.exterior}
              alt="Nayara Residence surrounded by lush rainforest canopy"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          {/* Floating stat badge */}
          <div
            className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 px-5 py-3 backdrop-blur-md rounded-sm"
            style={{ backgroundColor: PILL_BG, border: `1px solid ${PILL_BORDER}` }}
          >
            <p className="text-white text-2xl md:text-3xl" style={display}>712</p>
            <p className="text-white/60 text-[9px] tracking-[0.2em] uppercase" style={{ ...body, fontWeight: 500 }}>
              Sq. Metres
            </p>
          </div>
        </motion.div>

        {/* Text right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <p
            className="text-[10px] tracking-[0.35em] uppercase mb-4"
            style={{ ...body, fontWeight: 500, color: P.primary }}
          >
            Sustainable Luxury Retreats
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-[2.8rem] leading-[1.1] mb-6"
            style={{ ...display, color: P.text }}
          >
            Amidst Costa Rica's Rainforest Paradise
          </h2>
          <p
            className="text-sm md:text-base leading-[1.9] mb-6"
            style={{ ...body, color: P.textSoft }}
          >
            Meticulously designed Residences for extraordinary family or group travel. The connected Family Tents, a spacious villa, and fully-equipped kitchen are perfect for indulging in unforgettable moments. Each tent features a lavish king-size 4-poster bed, accompanied by additional tents or bedrooms with queen-size beds.
          </p>
          <p
            className="text-sm md:text-base leading-[1.9] mb-8"
            style={{ ...body, color: P.textSoft }}
          >
            Relax on your private terrace, where an oversized plunge pool awaits, fed by natural mineral hot springs. Unwind as the crackling fire pit sets the stage for magical evenings. Enjoy abundant indoor and outdoor entertainment spaces, ensuring complete privacy for your family, friends, or multi-generational journey.
          </p>

          {/* Key stats row */}
          <div className="flex gap-8 mb-8">
            {[
              { value: "7,664", unit: "Sq. Ft." },
              { value: "4", unit: "Bedrooms" },
              { value: "12", unit: "Max Adults" },
            ].map((s) => (
              <div key={s.unit}>
                <p className="text-2xl md:text-3xl" style={{ ...display, color: P.text }}>{s.value}</p>
                <p className="text-[9px] tracking-[0.2em] uppercase mt-1" style={{ ...body, fontWeight: 500, color: P.textMuted }}>
                  {s.unit}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://www.nayaratentedcamp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-[1.03]"
            style={{
              ...body,
              fontWeight: 500,
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase" as const,
              color: P.white,
              backgroundColor: PILL_BG,
              border: `1px solid ${PILL_BORDER}`,
            }}
          >
            Check Availability
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FULL-BLEED IMAGE BREAK
   ═══════════════════════════════════════════════════════════════ */
function FullBleedBreak() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <div ref={ref} className="relative w-full h-[50vh] md:h-[65vh] overflow-hidden">
      <motion.img
        src={IMG.tentsFromAbove}
        alt="Nayara Residence compound from above showing all tents and living areas"
        className="absolute inset-0 w-full h-[120%] object-cover"
        style={{ y }}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#EDEEE2]/40" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FEATURES GRID — Alternating text/image
   ═══════════════════════════════════════════════════════════════ */
function FeaturesGrid() {
  const features = [
    {
      title: "Four Private Bedrooms",
      desc: "Two master guest rooms each with a king-size 4-poster bed and their own private plunge pool fed by natural hot springs. Two additional rooms each with two queen-size beds — perfect for multi-generational families or groups of friends.",
      img: IMG.bedroom,
      alt: "Residence master bedroom with king-size 4-poster bed",
    },
    {
      title: "Grand Living & Kitchen",
      desc: "A fully equipped kitchen and dining room connected to expansive indoor and outdoor living spaces. Large outdoor dining area with daybeds, a private fire pit, and a private infinity pool from hot springs — the ultimate gathering place.",
      img: IMG.kidsRoom,
      alt: "Residence living area and kitchen",
    },
    {
      title: "Private Concierge Service",
      desc: "Your dedicated Personal Concierge is devoted to attending to your every need, ensuring an exceptional and unparalleled experience. Wake up to awe-inspiring views of the majestic Arenal Volcano from every corner of your magnificent Residence.",
      img: IMG.tentPool,
      alt: "Residence private infinity pool with volcano views",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
        {features.map((f, i) => {
          const isEven = i % 2 === 0;
          return (
            <div
              key={f.title}
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${
                isEven ? "" : "md:[direction:rtl]"
              }`}
            >
              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8 }}
                className="md:[direction:ltr]"
              >
                <h3
                  className="text-2xl md:text-3xl mb-4"
                  style={{ ...display, color: P.text }}
                >
                  {f.title}
                </h3>
                <p
                  className="text-sm md:text-base leading-[1.9]"
                  style={{ ...body, color: P.textSoft }}
                >
                  {f.desc}
                </p>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="md:[direction:ltr]"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-sm">
                  <img
                    src={f.img}
                    alt={f.alt}
                    className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CONCIERGE SECTION — Dark section with parallax
   ═══════════════════════════════════════════════════════════════ */
function ConciergeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
      style={{ backgroundColor: P.secondary }}
    >
      <motion.div className="absolute inset-0 opacity-20" style={{ y }}>
        <img
          src={IMG.bridge}
          alt=""
          className="w-full h-[120%] object-cover"
          loading="lazy"
        />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <p
            className="text-[10px] tracking-[0.35em] uppercase mb-4"
            style={{ ...body, fontWeight: 500, color: `${P.white}80` }}
          >
            Exquisite Experiences
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mb-6"
            style={{ ...display, color: P.white }}
          >
            With a Private Concierge
          </h2>
          <p
            className="text-sm md:text-base leading-[1.9] max-w-2xl mx-auto mb-10"
            style={{ ...body, color: `${P.white}CC` }}
          >
            Your dedicated Personal Concierge is devoted to attending to your every need, ensuring an exceptional and unparalleled experience. Wake up to awe-inspiring views of the majestic Arenal Volcano, and immerse yourself in the breath-taking rainforest scenery from every corner of your magnificent Residence. Prepare to embark on the journey of a lifetime as you revel in the luxurious comforts of glamping.
          </p>
          <a
            href="https://www.nayaratentedcamp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-[1.03]"
            style={{
              ...body,
              fontWeight: 500,
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase" as const,
              color: P.white,
              backgroundColor: "rgba(255,255,255,0.15)",
              border: `1px solid rgba(255,255,255,0.25)`,
              backdropFilter: "blur(8px)",
            }}
          >
            Check Availability
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   AMENITIES SECTION — Elegant list
   ═══════════════════════════════════════════════════════════════ */
function AmenitiesSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p
            className="text-[10px] tracking-[0.35em] uppercase mb-3"
            style={{ ...body, fontWeight: 500, color: P.primary }}
          >
            Perfect for Groups & Multi-Generational Families
          </p>
          <h2
            className="text-3xl md:text-4xl mb-2"
            style={{ ...display, color: P.text }}
          >
            Tent Amenities
          </h2>
          <p
            className="text-xs tracking-[0.15em] uppercase mt-2"
            style={{ ...body, fontWeight: 500, color: P.textMuted }}
          >
            Max. 12 adults or families with children and 2 babies — cribs available
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          {AMENITIES.map((a, i) => (
            <motion.div
              key={a}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="flex items-start gap-3 py-3 border-b"
              style={{ borderColor: `${P.text}10` }}
            >
              <svg
                className="w-4 h-4 mt-0.5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke={P.primary}
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <p
                className="text-sm leading-relaxed"
                style={{ ...body, color: P.textSoft }}
              >
                {a}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   NATURE SECTION — Luxury adventures
   ═══════════════════════════════════════════════════════════════ */
function NatureSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden">
      <motion.div className="absolute inset-0 opacity-10" style={{ y }}>
        <img
          src={IMG.drone}
          alt=""
          className="w-full h-[120%] object-cover"
          loading="lazy"
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="text-[10px] tracking-[0.35em] uppercase mb-4"
            style={{ ...body, fontWeight: 500, color: P.primary }}
          >
            Costa Rica's Natural Splendor
          </p>
          <h2
            className="text-3xl md:text-4xl mb-6"
            style={{ ...display, color: P.text }}
          >
            Exquisite Luxury Adventures
          </h2>
          <p
            className="text-sm md:text-base leading-[1.9] mb-8"
            style={{ ...body, color: P.textSoft }}
          >
            Immerse yourself in the breathtaking beauty of Costa Rica's jungle and extraordinary experiences led by Nayara's expert tour guides. Delve into the enchanting fauna and flora, gaining insights into the diverse ecosystem and discovering its hidden marvels.
          </p>
          <a
            href="/tented-camp"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-[1.03]"
            style={{
              ...body,
              fontWeight: 500,
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase" as const,
              color: P.white,
              backgroundColor: PILL_BG,
              border: `1px solid ${PILL_BORDER}`,
            }}
          >
            Find Out More
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="aspect-[4/3] overflow-hidden rounded-sm">
            <img
              src={IMG.familyDaybed}
              alt="Family enjoying outdoor daybed in the rainforest"
              className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HORIZONTAL GALLERY: Drag-to-scroll image strip
   ═══════════════════════════════════════════════════════════════ */
const GALLERY = [
  { src: IMG.exterior, alt: "Residence exterior surrounded by rainforest" },
  { src: IMG.bedroom, alt: "Residence master bedroom with king-size 4-poster bed" },
  { src: IMG.kidsRoom, alt: "Residence kids room with two queen beds" },
  { src: IMG.tentPool, alt: "Residence private infinity pool with hot springs" },
  { src: IMG.bathroom, alt: "Residence bathroom with soaking tub" },
  { src: IMG.bridge, alt: "Hanging bridge through the rainforest canopy" },
  { src: IMG.familyDaybed, alt: "Family enjoying outdoor daybed in the rainforest" },
];

function HorizontalGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeftPos(scrollRef.current?.scrollLeft || 0);
  };
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current.offsetLeft || 0);
    scrollRef.current.scrollLeft = scrollLeftPos - (x - startX) * 1.5;
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-16 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between"
        >
          <div>
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
              Every Detail, Considered
            </h2>
          </div>
          <p
            className="hidden md:block text-[10px] tracking-[0.15em] uppercase"
            style={{ ...body, fontWeight: 500, color: P.textMuted }}
          >
            Drag to explore →
          </p>
        </motion.div>
      </div>

      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="flex gap-4 md:gap-6 overflow-x-auto pl-6 md:pl-16 pr-6 md:pr-16 pb-4 cursor-grab active:cursor-grabbing select-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" as any }}
      >
        {GALLERY.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="shrink-0 w-[80vw] md:w-[45vw] lg:w-[35vw]"
          >
            <div className="relative overflow-hidden rounded-sm aspect-[3/2]">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
                draggable={false}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CTA SECTION — Photo background with centered reserve
   ═══════════════════════════════════════════════════════════════ */
function CTASection() {
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);

  return (
    <section className="relative py-24 md:py-36 px-6 md:px-16 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={IMG.tentsFromAbove}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#525642]/80 backdrop-blur-[2px]" />
      </div>

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
            Your Private Estate Awaits
          </h2>
          <p
            className="text-sm md:text-base leading-[1.8] mb-10 max-w-lg mx-auto"
            style={{ ...body, color: `${P.bone}BB` }}
          >
            The ultimate private estate for multi-generational journeys. Four bedrooms, dedicated concierge, infinity pool, and complete privacy in the heart of the rainforest.
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
