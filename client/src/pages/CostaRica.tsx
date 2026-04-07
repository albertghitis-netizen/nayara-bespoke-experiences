/**
 * NAYARA ARENAL — Costa Rica Bespoke Experiences
 * Design: "Desert Codex" adapted for rainforest — Editorial Cartography
 * Palette: Emerald, volcanic charcoal, cream, gold accents
 * Typography: Playfair Display (display) + DM Sans (body)
 *
 * Structure: Two sections — Explore Nayara (on-property) and Explore Arenal (off-property)
 * Categories: Nature & Exploration, Culinary, Spa, Wellness, Adventure, Culture
 */

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { BOOKING_URLS } from "@/data/booking";
import BrandNavigation from "@/components/BrandNavigation";
import {
  ChevronDown,
  Clock,
  Footprints,
  MapPin,
  Droplets,
  Leaf,
  Wind,
  Flame,
  ArrowLeft,
  TreePine,
  Waves,
  Compass,
  Home,
  Mountain,
  Star,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";
import { toast } from "sonner";
import {
  properties,
  exploreNayaraExperiences,
  exploreArenalExperiences,
  type Excursion,
  type Treatment,
} from "@/data/properties";
import { useIsMobile } from "@/hooks/useMobile";
import NativeVideo from "@/components/NativeVideo";
import ExploreOurWorld from "@/components/ExploreOurWorld";
import Footer from "@/components/Footer";

const tentedCamp = properties.find((p) => p.id === "tented-camp")!;
const gardens = properties.find((p) => p.id === "gardens")!;
const springs = properties.find((p) => p.id === "springs")!;

const CDN = {
  heroDesktop: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/compressed-arenal-desktop_05c5168c.mp4",
  heroMobile: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/compressed-video2_1f850ac2.mp4",
  spa: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/spa-springs-compressed_4f2eb97d.mp4",
};


const spaCategories = tentedCamp.spaCategories.filter(c => c.id !== "all");

// ─── Element styling for spa cards ───────────────────────────
const elementIcons: Record<string, React.ReactNode> = {
  water: <Droplets className="w-4 h-4" />,
  fire: <Flame className="w-4 h-4" />,
  earth: <Leaf className="w-4 h-4" />,
  air: <Wind className="w-4 h-4" />,
};
const elementColors: Record<string, string> = {
  water: "text-emerald-400",
  fire: "text-amber-400",
  earth: "text-lime-400",
  air: "text-sky-300",
};

// Category configs for each section
const nayaraCategories = [
  { id: "wellness", label: "Guided Wellness" },
  { id: "nature", label: "Curated Nature Tours" },
  { id: "culinary", label: "Culinary & Workshops" },
];

const arenalCategories = [
  { id: "adventure", label: "Adventure" },
  { id: "nature", label: "Nature & Exploration" },
  { id: "community", label: "Community" },
];

export default function CostaRica() {
  const [activeSection, setActiveSection] = useState("hero");

  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <BrandNavigation pageType="content" />
      <ArenalHero onInView={() => setActiveSection("hero")} />
      <PropertyIntro />
      <ExploreNayaraSection onInView={() => setActiveSection("explore-nayara")} />
      <ExploreArenalSection onInView={() => setActiveSection("explore-arenal")} />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   NAVIGATION
   ═══════════════════════════════════════════════════════════════ */
function ArenalNavigation({ activeSection }: { activeSection: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "explore-nayara", label: "Experiences" },
    { id: "spa", label: "Wellness" },
    { id: "sustainability", label: "Sustainability" },
  ];

  const handleNavClick = (id: string, label: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    } else {
      toast(label + " — Coming Soon");
      setMenuOpen(false);
    }
  };

  return (
    <>
      {/* Sticky top bar — hamburger left, reserve right */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center justify-between px-6 md:px-10 h-16">
          {/* Hamburger — far left */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`p-2 rounded-full transition-all duration-300 ${
              scrolled
                ? "text-emerald-900 bg-white/80 backdrop-blur-sm shadow-sm"
                : "text-white bg-black/20 backdrop-blur-sm"
            } hover:scale-105`}
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Reserve — far right */}
          <button
            onClick={() => window.open(BOOKING_URLS["costa-rica"], "_blank")}
            className="px-5 py-2 text-xs tracking-[0.2em] uppercase font-medium rounded-full transition-all duration-300 hover:scale-105 bg-emerald-800 text-white hover:bg-emerald-700 shadow-lg"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Reserve
          </button>
        </div>
      </motion.header>

      {/* Slide-out menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            {/* Menu panel */}
            <motion.nav
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 left-0 bottom-0 z-50 w-80 bg-[#f7f5f0] shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Menu header */}
                <div className="flex items-center justify-between px-6 h-16 border-b border-emerald-900/10">
                  <span
                    className="text-sm tracking-[0.2em] uppercase text-emerald-900/60"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
                  >
                    Nayara Costa Rica
                  </span>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="p-2 text-emerald-900/60 hover:text-emerald-900 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Menu items */}
                <div className="flex-1 px-6 py-8 flex flex-col gap-6">
                  <Link
                    href="/"
                    className="text-sm tracking-[0.15em] uppercase text-emerald-900/70 hover:text-emerald-700 transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
                  >
                    ← All Properties
                  </Link>
                  <div className="w-8 h-px bg-emerald-900/10" />
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id, item.label)}
                      className={`text-left text-sm tracking-[0.15em] uppercase transition-colors ${
                        activeSection === item.id
                          ? "text-emerald-700 font-semibold"
                          : "text-emerald-900/60 hover:text-emerald-900"
                      }`}
                      style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* Menu footer */}
                <div className="px-6 py-6 border-t border-emerald-900/10">
                  <button
                    onClick={() => { window.open(BOOKING_URLS["costa-rica"], "_blank"); setMenuOpen(false); }}
                    className="w-full py-3 text-xs tracking-[0.2em] uppercase font-medium rounded-full bg-emerald-800 text-white hover:bg-emerald-700 transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Reserve
                  </button>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════════════════ */
function ArenalHero({ onInView }: { onInView: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isInView) onInView();
  }, [isInView, onInView]);

  const heroVideo = isMobile ? CDN.heroMobile : CDN.heroDesktop;

  return (
    <section
      ref={ref}
      id="hero"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <NativeVideo
          src={heroVideo}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      </div>

      {/* Content — centered at bottom */}
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-wide text-center"
          style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
        >
          Bespoke Arenal Experiences
        </motion.h2>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PROPERTY INTRO — Brief mention of the three properties
   ═══════════════════════════════════════════════════════════════ */
function PropertyIntro() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden" style={{ backgroundColor: '#f0ebe0' }}>
      {/* Subtle botanical texture — right side only, very soft */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/botanical-texture-embossed-hig62x94aNi7TNioLbvtkE.webp)`,
          backgroundSize: "900px 900px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
        }}
      />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <h1
            className="text-[#4a4a4a] text-4xl md:text-5xl lg:text-6xl mb-5"
            style={{ fontFamily: "var(--font-display)", fontWeight: 5 }}
          >
            Three Resorts. One Rainforest.
          </h1>
          <p
            className="text-[#7a7a7a] text-base md:text-[17px] leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
          >
            Across Nayara Gardens, Nayara Springs, and Nayara
            Tented Camp, the rainforest becomes a shared landscape
            of experiences. Guests move freely between the three,
            opening access to a broader range of guided nature tours,
            curated adventure, and nature-based wellness rituals.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   EXPLORE NAYARA — On-property experiences
   Nature & Exploration, Culinary, Wellness
   ═══════════════════════════════════════════════════════════════ */
function ExploreNayaraSection({ onInView }: { onInView: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState("wellness");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    if (isInView) onInView();
  }, [isInView, onInView]);

  const filtered = exploreNayaraExperiences.filter((e) =>
    activeCategory === "wellness"
      ? ["wellness", "spa"].includes(e.category)
      : activeCategory === "culinary"
      ? ["culinary", "culture"].includes(e.category)
      : e.category === activeCategory
  );

  return (
    <section ref={ref} id="explore-nayara" className="relative py-24 md:py-32 bg-emerald-950">
      {/* Section Header */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="text-[#f7f5f0] text-3xl md:text-4xl lg:text-5xl leading-[1.05] mb-3"
            style={{ fontFamily: "var(--font-display)", fontWeight: 5 }}
          >
            Explore Nayara
          </h2>
          <p
            className="text-[#f7f5f0]/50 text-lg md:text-xl tracking-wide"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Within Our Grounds
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {nayaraCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setExpandedId(null);
              }}
              className={`px-5 py-2.5 text-xs tracking-[0.2em] uppercase transition-all duration-300 border ${
                activeCategory === cat.id
                  ? "bg-[#f7f5f0] text-emerald-950 border-[#f7f5f0]"
                  : "bg-transparent text-[#f7f5f0]/40 border-[#f7f5f0]/15 hover:border-[#f7f5f0]/30 hover:text-[#f7f5f0]/70"
              }`}
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Experience Cards */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((excursion, i) => (
              <FeaturedExcursionCard
                key={excursion.id}
                excursion={excursion}
                index={i}
                isExpanded={expandedId === excursion.id}
                onToggle={() =>
                  setExpandedId(
                    expandedId === excursion.id ? null : excursion.id
                  )
                }
                variant="dark"
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   EXPLORE ARENAL — Off-property excursions
   Nature & Exploration, Adventure, Culture
   ═══════════════════════════════════════════════════════════════ */
function ExploreArenalSection({ onInView }: { onInView: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState("adventure");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    if (isInView) onInView();
  }, [isInView, onInView]);

  const filtered = exploreArenalExperiences.filter((e) =>
    activeCategory === "community"
      ? ["culture", "culinary", "wellness", "community"].includes(e.category)
      : e.category === activeCategory
  );

  return (
    <section ref={ref} id="explore-arenal" className="relative py-24 md:py-32">
      {/* Section Header */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="text-emerald-950 text-3xl md:text-4xl lg:text-5xl leading-[1.05] mb-3"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
          >
            Explore Arenal
          </h2>
          <p
            className="text-emerald-900/50 text-lg md:text-xl tracking-wide"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Beyond Our Grounds
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {arenalCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setExpandedId(null);
              }}
              className={`px-5 py-2.5 text-xs tracking-[0.2em] uppercase transition-all duration-300 border ${
                activeCategory === cat.id
                  ? "bg-emerald-900 text-white border-emerald-900"
                  : "bg-transparent text-emerald-900/40 border-emerald-900/15 hover:border-emerald-900/30 hover:text-emerald-900/70"
              }`}
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Excursion Cards */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((excursion, i) => (
              <FeaturedExcursionCard
                key={excursion.id}
                excursion={excursion}
                index={i}
                isExpanded={expandedId === excursion.id}
                onToggle={() =>
                  setExpandedId(
                    expandedId === excursion.id ? null : excursion.id
                  )
                }
                variant="light"
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FEATURED EXCURSION CARD — Photo thumbnail + magazine-style expand
   Card: Horizontal landscape photo with title overlay + "Learn More"
   Expanded: Vertical video (left) + horizontal photo (top-right) +
             square photo (bottom-right) + description + details bar +
             "Speak to Concierge" CTA
   ═══════════════════════════════════════════════════════════════ */
function FeaturedExcursionCard({
  excursion,
  index,
  isExpanded,
  onToggle,
  variant = "light",
}: {
  excursion: Excursion;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
  variant: "light" | "dark";
}) {
  const isDark = variant === "dark";
  const cardImageSrc = excursion.image;

  const categoryLabels: Record<string, string> = {
    nature: "Nature & Exploration",
    adventure: "Adventure",
    culture: "Culinary & Wellness",
    culinary: "Culinary & Wellness",
    wellness: "Wellness",
    spa: "Wellness",
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className={`overflow-hidden transition-all duration-500 ${
        isExpanded ? "md:col-span-2" : ""
      }`}
    >
      {/* ── COLLAPSED CARD ── */}
      {!isExpanded && (
        <div
          className={`group cursor-pointer overflow-hidden ${
            isDark
              ? "border border-[#f7f5f0]/8 hover:border-[#f7f5f0]/15"
              : "border border-emerald-900/8 hover:border-emerald-900/15"
          }`}
          onClick={onToggle}
        >
          {/* Photo thumbnail */}
          <div className="relative overflow-hidden h-64 md:h-80">
            {cardImageSrc ? (
              <img
                src={cardImageSrc}
                alt={excursion.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            ) : (
              <div className={`w-full h-full flex items-center justify-center ${
                isDark
                  ? "bg-gradient-to-br from-emerald-800/40 to-emerald-900/60"
                  : "bg-gradient-to-br from-emerald-100/60 to-emerald-50/30"
              }`}>
                <div className="text-center">
                  <MapPin className={`w-8 h-8 mx-auto mb-2 ${isDark ? "text-[#f7f5f0]/15" : "text-emerald-900/15"}`} />
                  <span
                    className={`text-xs tracking-[0.2em] uppercase ${isDark ? "text-[#f7f5f0]/25" : "text-emerald-900/25"}`}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Photo coming soon
                  </span>
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            {/* Title overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p
                className="text-white/60 text-[10px] tracking-[0.3em] uppercase mb-2"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                {categoryLabels[excursion.category] || excursion.category}
              </p>
              <h3
                className="text-white text-2xl md:text-3xl mb-1"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                {excursion.name}
              </h3>
              <p
                className="text-white/60 text-sm italic mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {excursion.subtitle}
              </p>
              <span
                className="inline-flex items-center gap-2 text-white/80 hover:text-white text-xs tracking-[0.2em] uppercase transition-colors"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Learn More
                <ChevronDown className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ── EXPANDED DETAIL VIEW ── */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className={`${
              isDark ? "bg-[#1a1a1a]" : "bg-[#f7f5f0]"
            }`}>
              {/* Close button */}
              <div className="flex justify-end p-4 pb-0">
                <button
                  onClick={onToggle}
                  className={`p-2 transition-colors ${
                    isDark ? "text-[#f7f5f0]/40 hover:text-[#f7f5f0]" : "text-emerald-900/40 hover:text-emerald-900"
                  }`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Media Grid: vertical video left, two photos right */}
              <div className="px-6 md:px-10 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
                  {/* Left: Vertical 9:16 Video */}
                  <div className="md:col-span-5">
                    {excursion.verticalVideo ? (
                      <div className="aspect-[9/16] overflow-hidden bg-black">
                        <video
                          key={excursion.verticalVideo}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover"
                        >
                          <source src={excursion.verticalVideo} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
                        </video>
                      </div>
                    ) : (
                      <div className={`aspect-[9/16] flex items-center justify-center ${
                        isDark ? "bg-emerald-900/30" : "bg-emerald-100/40"
                      }`}>
                        <span className={`text-xs tracking-[0.2em] uppercase ${
                          isDark ? "text-[#f7f5f0]/20" : "text-emerald-900/20"
                        }`} style={{ fontFamily: "var(--font-body)" }}>Video coming soon</span>
                      </div>
                    )}
                  </div>

                  {/* Right column: two photos stacked */}
                  <div className="md:col-span-7 flex flex-col gap-4 md:gap-5">
                    {/* Top-right: Horizontal photo (reuse card image) */}
                    <div className="aspect-[16/10] overflow-hidden">
                      {cardImageSrc ? (
                        <img
                          src={cardImageSrc}
                          alt={`${excursion.name} — landscape`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className={`w-full h-full flex items-center justify-center ${
                          isDark ? "bg-emerald-900/30" : "bg-emerald-100/40"
                        }`}>
                          <span className={`text-xs tracking-[0.2em] uppercase ${
                            isDark ? "text-[#f7f5f0]/20" : "text-emerald-900/20"
                          }`} style={{ fontFamily: "var(--font-body)" }}>Photo coming soon</span>
                        </div>
                      )}
                    </div>

                    {/* Bottom-right: Square photo (placeholder) */}
                    <div className="aspect-square overflow-hidden">
                      {excursion.detailSquarePhoto ? (
                        <img
                          src={excursion.detailSquarePhoto}
                          alt={`${excursion.name} — detail`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className={`w-full h-full flex items-center justify-center ${
                          isDark ? "bg-emerald-900/20" : "bg-emerald-100/30"
                        }`}>
                          <span className={`text-xs tracking-[0.2em] uppercase ${
                            isDark ? "text-[#f7f5f0]/15" : "text-emerald-900/15"
                          }`} style={{ fontFamily: "var(--font-body)" }}>Photo coming soon</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description Block */}
              <div className="px-6 md:px-10 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  {/* Left: text content */}
                  <div className="md:col-span-7">
                    <p
                      className={`text-[10px] tracking-[0.35em] uppercase mb-3 ${
                        isDark ? "text-[#f7f5f0]/35" : "text-emerald-900/35"
                      }`}
                      style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                    >
                      Private Expedition
                    </p>
                    <h3
                      className={`text-2xl md:text-3xl mb-4 ${
                        isDark ? "text-[#f7f5f0]" : "text-emerald-950"
                      }`}
                      style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                    >
                      {excursion.name}
                    </h3>
                    <p
                      className={`text-sm md:text-base leading-relaxed mb-6 ${
                        isDark ? "text-[#f7f5f0]/50" : "text-[#7a7a7a]"
                      }`}
                      style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                    >
                      {excursion.description}
                    </p>

                    {/* Highlights as bullet points */}
                    <ul className="space-y-2 mb-6">
                      {excursion.highlights.map((h, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-2.5 text-sm ${
                            isDark ? "text-[#f7f5f0]/45" : "text-[#7a7a7a]"
                          }`}
                          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                        >
                          <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${
                            isDark ? "bg-[#f7f5f0]/25" : "bg-emerald-900/25"
                          }`} />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* What to bring tip */}
                    {excursion.whatToBring && (
                      <p
                        className={`text-xs italic mb-6 ${
                          isDark ? "text-[#f7f5f0]/30" : "text-[#999]"
                        }`}
                        style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                      >
                        {excursion.whatToBring}
                      </p>
                    )}
                  </div>

                  {/* Right: vertical photo placeholder */}
                  <div className="md:col-span-5">
                    {excursion.detailVerticalPhoto ? (
                      <div className="aspect-[3/4] overflow-hidden">
                        <img
                          src={excursion.detailVerticalPhoto}
                          alt={`${excursion.name} — vertical`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className={`aspect-[3/4] flex items-center justify-center ${
                        isDark ? "bg-emerald-900/15" : "bg-emerald-100/20"
                      }`}>
                        <span className={`text-xs tracking-[0.2em] uppercase ${
                          isDark ? "text-[#f7f5f0]/12" : "text-emerald-900/12"
                        }`} style={{ fontFamily: "var(--font-body)" }}>Photo coming soon</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Details Bar */}
                <div className={`mt-8 pt-6 border-t grid grid-cols-2 md:grid-cols-4 gap-6 ${
                  isDark ? "border-[#f7f5f0]/8" : "border-emerald-900/8"
                }`}>
                  <div>
                    <p
                      className={`text-[10px] tracking-[0.3em] uppercase mb-1 ${
                        isDark ? "text-[#f7f5f0]/30" : "text-[#999]"
                      }`}
                      style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                    >
                      Difficulty
                    </p>
                    <p
                      className={`text-sm font-medium ${
                        isDark ? "text-[#f7f5f0]" : "text-emerald-950"
                      }`}
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {excursion.difficulty}
                    </p>
                  </div>
                  <div>
                    <p
                      className={`text-[10px] tracking-[0.3em] uppercase mb-1 ${
                        isDark ? "text-[#f7f5f0]/30" : "text-[#999]"
                      }`}
                      style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                    >
                      Duration
                    </p>
                    <p
                      className={`text-sm font-medium ${
                        isDark ? "text-[#f7f5f0]" : "text-emerald-950"
                      }`}
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {excursion.duration}
                    </p>
                    {excursion.distance && (
                      <p
                        className={`text-xs mt-0.5 ${
                          isDark ? "text-[#f7f5f0]/30" : "text-[#999]"
                        }`}
                        style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                      >
                        {excursion.distance}
                      </p>
                    )}
                  </div>
                  <div>
                    <p
                      className={`text-[10px] tracking-[0.3em] uppercase mb-1 ${
                        isDark ? "text-[#f7f5f0]/30" : "text-[#999]"
                      }`}
                      style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                    >
                      Ages
                    </p>
                    <p
                      className={`text-sm font-medium ${
                        isDark ? "text-[#f7f5f0]" : "text-emerald-950"
                      }`}
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      All ages
                    </p>
                  </div>
                  {excursion.suggestedTime && (
                    <div>
                      <p
                        className={`text-[10px] tracking-[0.3em] uppercase mb-1 ${
                          isDark ? "text-[#f7f5f0]/30" : "text-[#999]"
                        }`}
                        style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                      >
                        Departures
                      </p>
                      <p
                        className={`text-sm font-medium ${
                          isDark ? "text-[#f7f5f0]" : "text-emerald-950"
                        }`}
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {excursion.suggestedTime}
                      </p>
                    </div>
                  )}
                </div>

                {/* Speak to Concierge CTA */}
                <div className="mt-8">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toast("Our concierge team will be in touch to arrange your experience.");
                    }}
                    className={`w-full md:w-auto flex items-center justify-center gap-2.5 py-3.5 px-8 transition-all duration-300 ${
                      isDark
                        ? "bg-emerald-600 hover:bg-emerald-500 text-white"
                        : "bg-emerald-900 hover:bg-emerald-800 text-white"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span
                      className="text-xs tracking-[0.2em] uppercase"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                    >
                      Speak to Concierge
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SPA & WELLNESS SECTION
   ═══════════════════════════════════════════════════════════════ */
function ArenalSpa({ onInView }: { onInView: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState("nature");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    if (isInView) onInView();
  }, [isInView, onInView]);

  const treatments = tentedCamp.treatments;
  const filtered = treatments.filter((t) =>
    activeCategory === "culinary-wellness"
      ? ["culinary", "wellness", "spa"].includes(t.category)
      : t.category === activeCategory
  );

  return (
    <section ref={ref} id="spa" className="relative py-24 md:py-32 bg-[#f7f5f0]">
      {/* Section Header */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="text-emerald-950 text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-3"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
          >
            Explore Our Spa
          </h2>
          <p
            className="text-emerald-900/50 text-lg md:text-xl tracking-wide"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Earth, Water &amp; Rainforest
          </p>
        </motion.div>

        {/* Spa Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 h-64 md:h-96 overflow-hidden"
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/spa-kids-robes_57409a94.jpg"
            alt="Nayara Spa experience"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {spaCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setExpandedId(null);
              }}
              className={`px-5 py-2.5 text-xs tracking-[0.2em] uppercase transition-all duration-300 border ${
                activeCategory === cat.id
                  ? "bg-emerald-900 text-white border-emerald-900"
                  : "bg-transparent text-emerald-900/40 border-emerald-900/15 hover:border-emerald-900/30 hover:text-emerald-900/70"
              }`}
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Treatment Cards */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((treatment, i) => (
              <TreatmentCard
                key={treatment.id}
                treatment={treatment}
                index={i}
                isExpanded={expandedId === treatment.id}
                onToggle={() =>
                  setExpandedId(
                    expandedId === treatment.id ? null : treatment.id
                  )
                }
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Policies Note */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mt-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-emerald-900/10 pt-8"
        >
          <p
            className="text-emerald-900/25 text-xs leading-relaxed max-w-xl"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            {tentedCamp.theme.spaPolicies}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* Individual Treatment Card */
function TreatmentCard({
  treatment,
  index,
  isExpanded,
  onToggle,
}: {
  treatment: Treatment;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onClick={onToggle}
      className="group border border-emerald-900/8 bg-white/60 p-6 hover:border-emerald-900/15 hover:bg-white/80 transition-all duration-500 cursor-pointer"
    >
      {/* Element Icon + Name */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          {treatment.element && (
            <div className="flex items-center gap-2 mb-1">
              <span className={elementColors[treatment.element] || "text-emerald-700"}>
                {elementIcons[treatment.element] || <Leaf className="w-4 h-4" />}
              </span>
              <span
                className="text-emerald-900/30 text-[10px] tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {treatment.element}
              </span>
            </div>
          )}
          <h3
            className="text-emerald-950 text-lg"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
          >
            {treatment.name}
          </h3>
          {treatment.localName && (
            <p
              className="text-emerald-700/50 text-sm italic"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {treatment.localName}
            </p>
          )}
        </div>
        <ChevronDown
          className={`w-4 h-4 text-emerald-900/30 transition-transform duration-300 flex-shrink-0 mt-1 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Quick Info */}
      <div className="flex items-center gap-4 mb-3">
        <div className="flex items-center gap-1.5">
          <Clock className="w-3 h-3 text-emerald-900/25" />
          <span
            className="text-xs text-emerald-900/40"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {treatment.duration}
          </span>
        </div>
        <span
          className="text-xs text-emerald-700/60"
          style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
        >
          {treatment.price}
        </span>
      </div>

      {/* Expandable Description */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p
              className="text-emerald-900/50 text-sm leading-relaxed pt-3 border-t border-emerald-900/8"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              {treatment.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════════════════ */
function ArenalFooter() {
  return (
    <footer className="bg-emerald-950 border-t border-[#f7f5f0]/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-[#f7f5f0]/40 text-xs tracking-[0.35em] uppercase mb-2"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Nayara Costa Rica
            </p>
            <h3
              className="text-[#f7f5f0] text-2xl mb-4"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              Bespoke Experiences
            </h3>
            <p
              className="text-[#f7f5f0]/30 text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              In the shadow of Arenal Volcano, where rainforest canopy meets
              volcanic hot springs. La Fortuna, Alajuela, Costa Rica.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p
              className="text-[#f7f5f0]/40 text-xs tracking-[0.35em] uppercase mb-6"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Explore
            </p>
            <div className="flex flex-col gap-3">
              {[
                { label: "Explore Nayara", id: "explore-nayara" },
                { label: "Explore Arenal", id: "explore-arenal" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    const el = document.getElementById(link.id);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-left text-[#f7f5f0]/40 hover:text-emerald-400 text-sm transition-colors"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p
              className="text-[#f7f5f0]/40 text-xs tracking-[0.35em] uppercase mb-6"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <span
                className="text-[#f7f5f0]/40 text-sm"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                {tentedCamp.email}
              </span>
              <span
                className="text-[#f7f5f0]/40 text-sm"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                {tentedCamp.phone}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#f7f5f0]/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-[#f7f5f0]/20 text-xs"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            &copy; {new Date().getFullYear()} Nayara Resorts. All rights reserved.
          </p>
          <Link
            href="/"
            className="text-[#f7f5f0]/20 hover:text-emerald-400 text-xs transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            ← All Properties
          </Link>
        </div>
      </div>
    </footer>
  );
}
