/*
 * GRAND TENT , Deeper Room Detail Page
 * Layout: Editorial Magazine (matching FamilyTent style)
 * 446 sqm / 4,804 sq ft , King bed tent (upper) + ground-level bedroom
 * with 2 queens + fully equipped kitchen villa + living areas +
 * oversized plunge pool + fire pit
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
const PILL_BG_HOVER = "rgba(82,86,66,0.92)";
const PILL_BORDER = "rgba(255,255,255,0.25)";

/* ── CDN Images (reusing Tented Camp images until Grand Tent specific ones arrive) ── */
const IMG = {
  heroVideo: "/manus-storage/Tentreel4-converted_afd33d7d.mp4",
  heroFallback: "/manus-storage/ntc-aerial-connecting_6479275a.jpg",
  exterior: "/manus-storage/Resort-6-LR_29e9a13e.jpg",
  drone: "/manus-storage/19B9D444-0A7C-4C29-93A3-A8C0DFDFBD31_dca70410.JPEG",
  bedroom: "/manus-storage/RoomsNayaraTent1_c303c949.jpeg",
  bathroom: "/manus-storage/RoomsFamilyTent4_728d949f.jpeg",
  familyDaybed: "/manus-storage/NayaraTentedCampTheGlobalWizards-78_a1f0ab1b.jpeg",
  tentPool: "/manus-storage/IMG_5354_30daf7c5.jpg",
  bridge: "/manus-storage/Resort9_c29b5d0f.jpeg",
  kidsRoom: "/manus-storage/8.Familytentkidsroom.4O1A0231_f12fc400.jpeg",
};

/* ── Amenities ── */
const AMENITIES = [
  { icon: "bed", label: "King-size 4-poster bed with mosquito net" },
  { icon: "beds", label: "Ground-level room with 2 queen beds" },
  { icon: "pool", label: "Oversized plunge pool from hot springs" },
  { icon: "kitchen", label: "Fully equipped kitchen & dining" },
  { icon: "living", label: "Indoor & outdoor living areas" },
  { icon: "fire", label: "Private fire pit" },
  { icon: "terrace", label: "Expansive terrace with daybeds" },
  { icon: "bath", label: "Large bathtub & twin vanities" },
  { icon: "shower", label: "Indoor & outdoor showers" },
  { icon: "volcano", label: "Arenal Volcano views" },
  { icon: "breakfast", label: "A-la-carte breakfast on terrace" },
  { icon: "wifi", label: "Complimentary Wi-Fi" },
];

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function GrandTent() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: P.bg }}>
      <BrandNavigation pageType="property" hideCenterLabel />
      <HeroSection />
      <IntroSection />
      <FullBleedBreak />
      <FeaturesGrid />
      <FloorPlanExplorer initialTier="grand" availableTiers={["grand"]} />
      <HorizontalGallery />
      <GrandExperience />
      <AmenitiesSection />
      <CTASection />
      <Footer pageType="property" bgColor={P.primary} textColor="#FFFFFF" propertyName="Tented Camp" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   S1 , HERO: Full-bleed video with room name overlay
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
            Grand Tent
          </h1>
          <div className="w-16 h-px mx-auto mb-5" style={{ backgroundColor: "rgba(255,255,255,0.4)" }} />
          <p
            className="text-white/70 text-sm md:text-base max-w-md mx-auto mb-8"
            style={body}
          >
            Embrace unforgettable escape in the heart of Costa Rica
          </p>
          <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => import("sonner").then(({ toast }) => toast("Reservation , Coming Soon"))}
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
      {/* Back pill , top right */}
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
   S2 , INTRO: Image left, text right
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
              alt="Grand Tent exterior surrounded by rainforest"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          {/* Floating stat badge */}
          <div
            className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 px-5 py-3 backdrop-blur-md rounded-sm"
            style={{ backgroundColor: PILL_BG, border: `1px solid ${PILL_BORDER}` }}
          >
            <p className="text-white text-2xl md:text-3xl" style={display}>446</p>
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
            A Home in the Jungle
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-[2.8rem] leading-[1.1] mb-6"
            style={{ ...display, color: P.text }}
          >
            Discover the Grand Tent Oasis
          </h2>
          <p
            className="text-sm md:text-base leading-[1.9] mb-6"
            style={{ ...body, color: P.textSoft }}
          >
            Embrace the joy of togetherness in a home-like setting at Nayara's Grand Tents, where families and groups can create lasting memories. These spacious accommodations offer two bedrooms: one a luxurious tent with a king-size bed, and a ground level bedroom featuring two queen-size beds, providing extra comfort and privacy.
          </p>
          <p
            className="text-sm md:text-base leading-[1.9] mb-8"
            style={{ ...body, color: P.textSoft }}
          >
            Both are connected to a fully equipped kitchen villa, indoor and outdoor dining and living areas, and an expansive terrace with an oversized plunge pool fed by natural hot springs. A cozy fire pit completes the space perfectly.
          </p>

          {/* Key stats row */}
          <div className="flex gap-8 mb-8">
            {[
              { value: "4,804", unit: "Sq. Ft." },
              { value: "2", unit: "Bedrooms" },
              { value: "4+2", unit: "Adults + Kids" },
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
        src={IMG.drone}
        alt="Grand Tent aerial view showing full compound"
        className="absolute inset-0 w-full h-[120%] object-cover"
        style={{ y }}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#EDEEE2]/40" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FEATURES GRID , Text left, image right
   ═══════════════════════════════════════════════════════════════ */
function FeaturesGrid() {
  const features = [
    {
      title: "Two Private Bedrooms",
      desc: "A luxurious tent with a king-size 4-poster bed upstairs, and a ground-level bedroom with two queen-size beds , providing extra comfort and privacy for families or groups.",
      img: IMG.bedroom,
      alt: "Grand Tent master bedroom with king-size 4-poster bed",
    },
    {
      title: "Fully Equipped Kitchen Villa",
      desc: "A complete kitchen connected to indoor and outdoor dining and living areas. Prepare meals together or let the private chef craft an unforgettable culinary experience.",
      img: IMG.kidsRoom,
      alt: "Grand Tent kitchen and living area",
    },
    {
      title: "Oversized Hot Springs Pool",
      desc: "An expansive terrace with an oversized plunge pool fed by natural mineral hot springs, surrounded by daybeds and a cozy fire pit for magical evenings under the stars.",
      img: IMG.tentPool,
      alt: "Grand Tent oversized plunge pool with hot springs",
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
   GRAND EXPERIENCE , Dark section with parallax
   ═══════════════════════════════════════════════════════════════ */
function GrandExperience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
      style={{ backgroundColor: P.secondary }}
    >
      {/* Parallax background image */}
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
            Tailored Experiences
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mb-6"
            style={{ ...display, color: P.white }}
          >
            Unforgettable Moments
          </h2>
          <p
            className="text-sm md:text-base leading-[1.9] max-w-2xl mx-auto mb-10"
            style={{ ...body, color: `${P.white}CC` }}
          >
            Step into a world of tailored experiences where every detail is meticulously attended to. Awaken to awe-inspiring views of the majestic Arenal Volcano and immerse yourself in the breathtaking rainforest scenery that envelops your spacious Grand Tent. Indulge in the luxurious comforts while reveling in the abundance of private outdoor spaces.
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
   AMENITIES SECTION
   ═══════════════════════════════════════════════════════════════ */
function AmenitiesSection() {
  const iconMap: Record<string, React.ReactNode> = {
    bed: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />,
    beds: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />,
    pool: <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />,
    kitchen: <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265z" />,
    living: <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />,
    fire: <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />,
    terrace: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />,
    bath: <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />,
    shower: <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />,
    volcano: <path strokeLinecap="round" strokeLinejoin="round" d="M3 21l6-6m0 0l3-3m-3 3l-3-3m3 3l3 3m3-9l3-3m0 0l3 3m-3-3v12" />,
    breakfast: <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265z" />,
    wifi: <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />,
  };

  return (
    <section className="py-16 md:py-24 px-6 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
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
            Grand Tent
          </p>
          <h2
            className="text-3xl md:text-4xl"
            style={{ ...display, color: P.text }}
          >
            Tent Amenities
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {AMENITIES.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex items-start gap-3 p-4 rounded-sm"
              style={{ backgroundColor: `${P.bone}` }}
            >
              <svg
                className="w-5 h-5 mt-0.5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke={P.primary}
                strokeWidth={1.5}
              >
                {iconMap[a.icon] || iconMap.bed}
              </svg>
              <p
                className="text-xs leading-relaxed"
                style={{ ...body, color: P.textSoft }}
              >
                {a.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HORIZONTAL GALLERY: Drag-to-scroll image strip
   ═══════════════════════════════════════════════════════════════ */
const GALLERY = [
  { src: IMG.exterior, alt: "Grand Tent exterior surrounded by rainforest" },
  { src: IMG.bedroom, alt: "Grand Tent master bedroom with king-size 4-poster bed" },
  { src: IMG.kidsRoom, alt: "Grand Tent kids room with two queen beds" },
  { src: IMG.tentPool, alt: "Grand Tent oversized plunge pool with hot springs" },
  { src: IMG.bathroom, alt: "Grand Tent bathroom with soaking tub" },
  { src: IMG.bridge, alt: "Hanging bridge through the rainforest canopy" },
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
   CTA SECTION , Photo background with centered reserve
   ═══════════════════════════════════════════════════════════════ */
function CTASection() {
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);

  return (
    <section className="relative py-24 md:py-36 px-6 md:px-16 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={IMG.drone}
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
            Your Private Compound Awaits
          </h2>
          <p
            className="text-sm md:text-base leading-[1.8] mb-10 max-w-lg mx-auto"
            style={{ ...body, color: `${P.bone}BB` }}
          >
            The Grand Tents offer complete privacy and generous entertainment areas , ideal for sharing unforgettable moments with family and friends.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onClick={() => import("sonner").then(({ toast }) => toast("Reservation , Coming Soon"))}
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
