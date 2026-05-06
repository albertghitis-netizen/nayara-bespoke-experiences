/**
 * FAMILY TENT , Deeper Room Detail Page
 * Layout style: "Editorial Magazine" , different from NayaraTent's product-page approach
 * Uses staggered asymmetric grids, full-bleed image breaks, and a horizontal
 * scrolling gallery instead of the snap slider used in NayaraTent.
 * Three-tone olive palette: primary #868B75, secondary #525642, accent #9A9086
 * Background: bone #EDEEE2
 */
import { useState, useRef } from "react";
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

/* ── CDN Images ── */
const IMG = {
  heroVideo: "/manus-storage/family-tent-hero-new_00a85ac0.mp4",
  hero: "/manus-storage/68.FamilyTentandVolcanojpg_c3734d05.jpeg",
  tentExterior: "/manus-storage/65_9a53e6a2.jpg",
  droneAngle: "/manus-storage/1.Familytentviewoftheroofs-DJI_0123_44ada3fa.jpeg",
  droneTopDown: "/manus-storage/3.Familytentfromabovehorizontal.DJI_0092_f30281b4.jpeg",
  kidsRoom: "/manus-storage/8.Familytentkidsroom.4O1A0231_f12fc400.jpeg",
  familyOnDeck: "/manus-storage/10.Familytentbackviewwithfamily.DJI_0074_708c3db6.jpeg",
  tentsFromAbove: "/manus-storage/69.FamilyTentsfromabovejpg_5f2905ac.jpeg",
  familyDaybed: "/manus-storage/NayaraTentedCampTheGlobalWizards-78_a1f0ab1b.jpeg",
  bathroom: "/manus-storage/RoomsFamilyTent4_728d949f.jpeg",
};

/* ── Amenities ── */
const AMENITIES = [
  { icon: "bed", label: "King-size bed in primary tent" },
  { icon: "beds", label: "Two queen beds in kids room" },
  { icon: "pool", label: "Shared private plunge pool" },
  { icon: "springs", label: "Fed by mineral hot springs" },
  { icon: "terrace", label: "Outdoor living space & terrace" },
  { icon: "bath", label: "Large bathtub & dual vanity" },
  { icon: "shower", label: "Indoor & outdoor showers" },
  { icon: "volcano", label: "Arenal Volcano views" },
  { icon: "breakfast", label: "A-la-carte breakfast on terrace" },
  { icon: "wifi", label: "Complimentary Wi-Fi" },
  { icon: "yoga", label: "Daily yoga sessions" },
  { icon: "laundry", label: "Complimentary laundry" },
];

/* ── Gallery images for horizontal scroll ── */
const GALLERY = [
  { src: IMG.kidsRoom, alt: "Family Tent , Kids room with two queen beds and botanical art" },
  { src: IMG.bathroom, alt: "Family Tent , Freestanding soaking tub and dual vanity" },
  { src: IMG.tentExterior, alt: "Family Tent , Exterior close-up with lush palms and pool" },
  { src: IMG.droneAngle, alt: "Family Tent , Drone view of two interconnected tent roofs" },
  { src: IMG.tentsFromAbove, alt: "Family Tents , Multiple tents from above with jungle pathways" },
  { src: IMG.droneTopDown, alt: "Family Tent , Top-down view showing full footprint and pool" },
];

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function FamilyTent() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: P.bg }}>
      <BrandNavigation pageType="property" hideCenterLabel />
      <HeroSection />
      <IntroSection />
      <FullBleedBreak />
      <FeaturesGrid />
      <HorizontalGallery />
      <FloorPlanExplorer initialTier="family" availableTiers={["family"]} />
      <FamilyExperience />
      <CTASection />
      <Footer pageType="property" bgColor={P.primary} textColor="#FFFFFF" propertyName="Tented Camp" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   S1 , HERO: Full-bleed image with centered editorial title
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
          loop={false}
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
            Family Tent
          </h1>
          {/* Thin horizontal rule */}
          <div className="w-16 h-px mx-auto mb-5" style={{ backgroundColor: "rgba(255,255,255,0.4)" }} />
          <p
            className="text-white/70 text-sm md:text-base max-w-md mx-auto mb-8"
            style={body}
          >
            Adventure for every generation
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

      {/* Back pill , top right */}
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
   S2 , INTRO: Asymmetric two-column with overlapping card
   ═══════════════════════════════════════════════════════════════ */
function IntroSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 md:gap-0 items-start">
        {/* Left: large image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="w-full md:w-[55%] relative z-10"
        >
          <div className="relative overflow-hidden rounded-sm aspect-[4/3]">
            <img
              src={IMG.familyOnDeck}
              alt="Family enjoying the deck of their interconnected tents with pool below"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Right: text block, overlapping on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full md:w-[50%] md:-ml-12 md:mt-24 relative z-20"
        >
          <div
            className="p-8 md:p-12 rounded-sm"
            style={{ backgroundColor: P.bg }}
          >
            <p
              className="text-[11px] tracking-[0.25em] uppercase mb-5"
              style={{ ...body, fontWeight: 500, color: P.primary }}
            >
              Two Tents, One Family
            </p>

            {/* Pull-quote style heading */}
            <div className="flex gap-4 mb-6">
              <div className="w-1 shrink-0 rounded-full" style={{ backgroundColor: P.primary }} />
              <h2
                className="text-2xl md:text-3xl lg:text-4xl leading-tight"
                style={{ ...display, color: P.text }}
              >
                Two tents, connected by an outdoor living space sharing a private pool
              </h2>
            </div>

            <p
              className="text-sm md:text-base leading-[1.85] mb-8"
              style={{ ...body, color: P.textSoft }}
            >
              Our Family Tents are generously spacious and thoughtfully designed , two tents connected by an outdoor living space sharing a private pool for families to enjoy and create cherished and lasting memories together.
            </p>

            {/* Inline stat badges */}
            <div className="flex flex-wrap gap-3">
              {[
                "Up to 6 guests",
                "2 interconnected tents",
                "Private hot spring pool",
                "Volcano views",
              ].map((badge, i) => (
                <span
                  key={i}
                  className="inline-flex items-center px-4 py-2 rounded-full text-[10px] tracking-[0.12em] uppercase border"
                  style={{
                    ...body,
                    fontWeight: 500,
                    color: P.secondary,
                    borderColor: `${P.primary}50`,
                    backgroundColor: `${P.primary}12`,
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   S3 , FULL-BLEED BREAK: Parallax drone image with quote
   ═══════════════════════════════════════════════════════════════ */
function FullBleedBreak() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={ref} className="relative w-full h-[50vh] md:h-[65vh] overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y }}>
        <img
          src={IMG.droneTopDown}
          alt="Family Tent from above , full footprint with pool and teak decks"
          className="w-full h-[120%] object-cover"
          loading="lazy"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

      {/* Editorial quote overlay */}
      <div className="absolute inset-0 flex items-end px-6 md:px-16 pb-10 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-lg"
        >
          <p
            className="text-white/90 text-lg md:text-xl leading-relaxed italic"
            style={display}
          >
            "Where the canopy becomes your ceiling and the volcano your horizon"
          </p>
          <p
            className="text-white/50 text-[10px] tracking-[0.2em] uppercase mt-3"
            style={{ ...body, fontWeight: 500 }}
          >
            Nayara Tented Camp, Costa Rica
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   S4 , FEATURES GRID: Staggered masonry with amenity cards
   ═══════════════════════════════════════════════════════════════ */
function FeaturesGrid() {
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
          className="text-center mb-14 md:mb-20"
        >
          <p
            className="text-[11px] tracking-[0.3em] uppercase mb-3"
            style={{ ...body, fontWeight: 500, color: `${P.bone}70` }}
          >
            What's Included
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl"
            style={{ ...display, color: P.bone }}
          >
            Your Family Retreat
          </h2>
        </motion.div>

        {/* Staggered grid: images + amenity cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Left column: image + amenities */}
          <div className="space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-sm aspect-[4/3]"
            >
              <img
                src={IMG.kidsRoom}
                alt="Family Tent , Kids room with two queen beds"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p
                  className="text-white/90 text-[10px] tracking-[0.2em] uppercase"
                  style={{ ...body, fontWeight: 500 }}
                >
                  Kids Room , Two Queen Beds
                </p>
              </div>
            </motion.div>

            {/* Amenity cards , left half */}
            <div className="grid grid-cols-2 gap-4">
              {AMENITIES.slice(0, 6).map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="p-4 rounded-sm border"
                  style={{
                    borderColor: `${P.primary}30`,
                    backgroundColor: `${P.secondary}40`,
                  }}
                >
                  <AmenityIcon type={item.icon} />
                  <p
                    className="text-[11px] leading-snug mt-2"
                    style={{ ...body, fontWeight: 400, color: `${P.bone}CC` }}
                  >
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right column: offset , amenities + image */}
          <div className="space-y-6 md:space-y-8 md:mt-16">
            {/* Amenity cards , right half */}
            <div className="grid grid-cols-2 gap-4">
              {AMENITIES.slice(6).map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="p-4 rounded-sm border"
                  style={{
                    borderColor: `${P.primary}30`,
                    backgroundColor: `${P.secondary}40`,
                  }}
                >
                  <AmenityIcon type={item.icon} />
                  <p
                    className="text-[11px] leading-snug mt-2"
                    style={{ ...body, fontWeight: 400, color: `${P.bone}CC` }}
                  >
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative overflow-hidden rounded-sm aspect-[4/3]"
            >
              <img
                src={IMG.bathroom}
                alt="Family Tent , Freestanding soaking tub and dual vanity"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p
                  className="text-white/90 text-[10px] tracking-[0.2em] uppercase"
                  style={{ ...body, fontWeight: 500 }}
                >
                  Spa-Inspired Bathroom
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Amenity icon component ── */
function AmenityIcon({ type }: { type: string }) {
  const iconColor = P.primary;
  const size = "w-5 h-5";

  const icons: Record<string, React.ReactNode> = {
    bed: (
      <svg className={size} fill="none" viewBox="0 0 24 24" stroke={iconColor} strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    beds: (
      <svg className={size} fill="none" viewBox="0 0 24 24" stroke={iconColor} strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    pool: (
      <svg className={size} fill="none" viewBox="0 0 24 24" stroke={iconColor} strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    springs: (
      <svg className={size} fill="none" viewBox="0 0 24 24" stroke={iconColor} strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    terrace: (
      <svg className={size} fill="none" viewBox="0 0 24 24" stroke={iconColor} strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    bath: (
      <svg className={size} fill="none" viewBox="0 0 24 24" stroke={iconColor} strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    shower: (
      <svg className={size} fill="none" viewBox="0 0 24 24" stroke={iconColor} strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    volcano: (
      <svg className={size} fill="none" viewBox="0 0 24 24" stroke={iconColor} strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    breakfast: (
      <svg className={size} fill="none" viewBox="0 0 24 24" stroke={iconColor} strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.126-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265z" />
      </svg>
    ),
    wifi: (
      <svg className={size} fill="none" viewBox="0 0 24 24" stroke={iconColor} strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
    yoga: (
      <svg className={size} fill="none" viewBox="0 0 24 24" stroke={iconColor} strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    laundry: (
      <svg className={size} fill="none" viewBox="0 0 24 24" stroke={iconColor} strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  };

  return icons[type] || null;
}

/* ═══════════════════════════════════════════════════════════════
   S5 , HORIZONTAL GALLERY: Drag-to-scroll image strip
   ═══════════════════════════════════════════════════════════════ */
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

      {/* Horizontal scroll strip */}
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
   S6 , FAMILY EXPERIENCE: Numbered editorial blocks
   ═══════════════════════════════════════════════════════════════ */
function FamilyExperience() {
  const blocks = [
    {
      num: "01",
      title: "Together, Yet Apart",
      text: "Two interconnected tents give families the luxury of togetherness and the gift of space. The primary tent features a king-size four-poster bed with flowing mosquito nets, while the kids' tent offers two queen beds surrounded by botanical art and jungle views.",
      image: IMG.familyDaybed,
      alt: "Mother and daughters enjoying the daybed with volcano views",
      aspect: "aspect-[3/4]",
    },
    {
      num: "02",
      title: "Your Private Oasis",
      text: "Between the tents, an outdoor living space opens onto your private plunge pool , fed by the region's natural mineral hot springs. Watch the Arenal Volcano emerge from morning mist while the children splash in warm, mineral-rich waters.",
      image: IMG.droneAngle,
      alt: "Drone view of two interconnected tent roofs surrounded by jungle",
      aspect: "aspect-[16/10]",
    },
    {
      num: "03",
      title: "Mornings in the Canopy",
      text: "Each day begins with an a-la-carte breakfast served on your private terrace. Toucans and hummingbirds visit as you sip Costa Rican coffee, while the children discover the small wonders of the rainforest just beyond the railing.",
      image: IMG.tentExterior,
      alt: "Family Tent exterior with lush palms and pool visible",
      aspect: "aspect-[4/3]",
    },
  ];

  return (
    <section className="py-16 md:py-28 px-6 md:px-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 md:mb-24"
      >
        <p
          className="text-[11px] tracking-[0.25em] uppercase mb-3"
          style={{ ...body, fontWeight: 500, color: P.primary }}
        >
          The Experience
        </p>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl"
          style={{ ...display, color: P.text }}
        >
          A Family Adventure, Reimagined
        </h2>
      </motion.div>

      <div className="space-y-20 md:space-y-32">
        {blocks.map((block, i) => {
          const isReversed = i % 2 === 1;
          return (
            <div
              key={i}
              className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} gap-10 md:gap-16 items-center`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9 }}
                className="w-full md:w-1/2"
              >
                <div className={`relative overflow-hidden rounded-sm ${block.aspect}`}>
                  <img
                    src={block.image}
                    alt={block.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: isReversed ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, delay: 0.15 }}
                className="w-full md:w-1/2"
              >
                <span
                  className="text-5xl md:text-6xl font-light"
                  style={{ ...display, color: `${P.primary}30` }}
                >
                  {block.num}
                </span>
                <h3
                  className="text-2xl md:text-3xl leading-tight mt-2 mb-5"
                  style={{ ...display, color: P.text }}
                >
                  {block.title}
                </h3>
                <p
                  className="text-sm md:text-base leading-[1.85]"
                  style={{ ...body, color: P.textSoft }}
                >
                  {block.text}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   S7 , CTA: Full-bleed photo background with centered reserve
   ═══════════════════════════════════════════════════════════════ */
function CTASection() {
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);

  return (
    <section className="relative py-24 md:py-36 px-6 md:px-16 overflow-hidden">
      {/* Full background image */}
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
            Reserve Your Family Tent
          </h2>
          <p
            className="text-sm md:text-base leading-[1.8] mb-10 max-w-lg mx-auto"
            style={{ ...body, color: `${P.bone}BB` }}
          >
            Create lasting memories in Costa Rica's most thoughtfully designed family retreat. Two tents, one private pool, and endless adventure await.
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
