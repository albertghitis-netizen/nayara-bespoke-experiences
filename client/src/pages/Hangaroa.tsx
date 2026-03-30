/**
 * NAYARA HANGAROA — Easter Island, Chile
 * Design: Volcanic stone + Pacific blue editorial palette
 * Architecture inspired by traditional Rapa Nui hare paenga
 * Typography: Playfair Display (display) + DM Sans (body)
 */

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowLeft,
  Menu,
  X,
  MapPin,
  Compass,
  Waves,
  Mountain,
  Star,
  Sun,
  Wind,
  Anchor,
  Eye,
  ChevronDown,
} from "lucide-react";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/useMobile";
import BlobVideo from "@/components/BlobVideo";
import ExploreOurWorld from "@/components/ExploreOurWorld";
import Footer from "@/components/Footer";
import PropertyDiningSection from "@/components/PropertyDiningSection";
import { AwardBadgeStrip } from "@/components/AwardBadges";
import { hangaroaDining } from "@/data/dining";

/* ─── CDN Assets ─────────────────────────────────────────── */
const CDN = {
  videoMobile: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-vertical-moai_c477f572.mp4",
  aerial: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-aerial_9e07a82e.jpg",
  pool: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-pool_1b0d18e8.jpg",
  sunset: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-sunset_1238744f.jpg",
  room: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-room_5b9eb728.jpg",
  exterior: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-exterior_f0aa17e3.jpeg",
  grounds: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-grounds_d8ad48a8.jpg",
};

/* ─── Experiences Data ───────────────────────────────────── */
const experiences = [
  {
    id: "moai-archaeology",
    name: "Moai Archaeological Tour",
    subtitle: "Walk among the guardians of Rapa Nui",
    duration: "Full day",
    difficulty: "Easy–Medium",
    description: "Explore the island's most significant archaeological sites with our expert Rapa Nui guides. Visit Ahu Tongariki — the largest restored moai platform with 15 towering figures — Rano Raraku quarry where moai were carved, and the ceremonial village of Orongo.",
    highlights: ["Ahu Tongariki at sunrise", "Rano Raraku quarry with 400 unfinished moai", "Orongo ceremonial village"],
    icon: <Eye className="w-5 h-5" />,
    category: "culture",
    image: CDN.aerial,
  },
  {
    id: "volcanic-craters",
    name: "Volcanic Crater Lakes",
    subtitle: "Rano Kau and Rano Raraku",
    duration: "Half day",
    difficulty: "Easy",
    description: "Hike to the rim of Rano Kau, a massive volcanic crater filled with a freshwater lake and floating totora reeds. The views from the crater's edge — where the Pacific stretches to infinity — are among the most dramatic on Earth.",
    highlights: ["Rano Kau crater lake panorama", "Endemic flora and birdlife", "Pacific Ocean cliff views"],
    icon: <Mountain className="w-5 h-5" />,
    category: "nature",
    image: CDN.grounds,
  },
  {
    id: "pacific-diving",
    name: "Pacific Diving & Snorkeling",
    subtitle: "Crystal visibility up to 60 meters",
    duration: "Half day",
    difficulty: "Medium",
    description: "Easter Island offers some of the clearest ocean water on the planet, with visibility reaching 60 meters. Dive among submerged moai replicas, coral formations, and endemic marine species found nowhere else on Earth.",
    highlights: ["Submerged moai dive site", "Up to 60m visibility", "Endemic sea life and coral"],
    icon: <Waves className="w-5 h-5" />,
    category: "adventure",
    image: CDN.pool,
  },
  {
    id: "stargazing-rapa-nui",
    name: "Rapa Nui Stargazing",
    subtitle: "One of Earth's darkest skies",
    duration: "Evening (2 hours)",
    difficulty: "Easy",
    description: "As the most remote inhabited island on Earth, Easter Island offers extraordinary dark skies. Our astronomers guide you through the southern constellations, connecting modern astronomy with the ancient Rapa Nui star navigation that brought the first settlers across 2,000 miles of open ocean.",
    highlights: ["Southern Cross and Magellanic Clouds", "Rapa Nui celestial navigation stories", "Telescope observation"],
    icon: <Star className="w-5 h-5" />,
    category: "culture",
    image: CDN.sunset,
  },
  {
    id: "horseback-coast",
    name: "Horseback Along the Coast",
    subtitle: "Wild horses and ancient paths",
    duration: "Half day",
    difficulty: "Easy–Medium",
    description: "Ride along the rugged northern coast on horseback, following ancient paths between ahu platforms. Wild horses roam freely across the island — a tradition dating back to the 18th century. The coastal route passes hidden caves, petroglyphs, and secluded beaches.",
    highlights: ["Coastal ahu platforms", "Wild horse encounters", "Hidden caves and petroglyphs"],
    icon: <Compass className="w-5 h-5" />,
    category: "adventure",
    image: CDN.exterior,
  },
  {
    id: "rapa-nui-culture",
    name: "Living Rapa Nui Culture",
    subtitle: "Dance, carving, and earth oven feast",
    duration: "Evening",
    difficulty: "Easy",
    description: "Experience the living culture of Rapa Nui through an evening of traditional dance, music, and an umu (earth oven) feast. Learn the art of moai carving from local artisans and hear the oral histories that have been passed down for generations.",
    highlights: ["Traditional Kari Kari dance performance", "Umu earth oven feast", "Moai carving workshop"],
    icon: <Sun className="w-5 h-5" />,
    category: "culture",
    image: CDN.room,
  },
];

const categories = [
  { id: "all", label: "All Experiences" },
  { id: "culture", label: "Culture & Heritage" },
  { id: "nature", label: "Nature" },
  { id: "adventure", label: "Adventure" },
];

/* ─── Main Component ─────────────────────────────────────── */
export default function Hangaroa() {
  const [activeSection, setActiveSection] = useState("hero");

  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <HangaroaNav activeSection={activeSection} />
      <HeroSection onInView={() => setActiveSection("hero")} />
      <IntroSection />
      <TheProperty />
      <ExperiencesSection onInView={() => setActiveSection("experiences")} />
      <RapaNuiCulture />
      <PropertyDiningSection
        dining={hangaroaDining}
        bgClass="bg-stone-900"
        headingColor="text-white"
        accentColor="bg-sky-700"
      />
      <ExploreOurWorld />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   NAVIGATION
   ═══════════════════════════════════════════════════════════ */
function HangaroaNav({ activeSection }: { activeSection: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "experiences", label: "Experiences" },
    { id: "wellness", label: "Wellness" },
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
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center justify-between px-6 md:px-10 h-16">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`p-2 rounded-full transition-all duration-300 ${
              scrolled
                ? "text-stone-900 bg-white/80 backdrop-blur-sm shadow-sm"
                : "text-white bg-black/20 backdrop-blur-sm"
            } hover:scale-105`}
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <button
            onClick={() => toast("Reservation system — Coming Soon")}
            className="px-5 py-2 text-xs tracking-[0.2em] uppercase font-medium rounded-full transition-all duration-300 hover:scale-105 bg-stone-800 text-white hover:bg-stone-700 shadow-lg"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Reserve
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 left-0 bottom-0 z-50 w-80 bg-[#f7f5f0] shadow-2xl"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between px-6 h-16 border-b border-stone-200">
                  <span
                    className="text-sm tracking-[0.2em] uppercase text-stone-500"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                  >
                    Nayara Hangaroa
                  </span>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="p-2 text-stone-400 hover:text-stone-700 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex-1 px-6 py-8 flex flex-col gap-6">
                  <Link
                    href="/"
                    className="text-sm tracking-[0.15em] uppercase text-stone-500 hover:text-stone-800 transition-colors"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                  >
                    ← All Properties
                  </Link>
                  <div className="w-8 h-px bg-stone-200" />
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id, item.label)}
                      className={`text-left text-sm tracking-[0.15em] uppercase transition-colors ${
                        activeSection === item.id
                          ? "text-stone-800 font-semibold"
                          : "text-stone-400 hover:text-stone-700"
                      }`}
                      style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                <div className="px-6 py-6 border-t border-stone-200">
                  <button
                    onClick={() => { toast("Reservation system — Coming Soon"); setMenuOpen(false); }}
                    className="w-full py-3 text-xs tracking-[0.2em] uppercase font-medium rounded-full bg-stone-800 text-white hover:bg-stone-700 transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
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

/* ═══════════════════════════════════════════════════════════
   HERO — Full-screen image with volcanic stone overlay
   ═══════════════════════════════════════════════════════════ */
function HeroSection({ onInView }: { onInView: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isInView) onInView();
  }, [isInView, onInView]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        {isMobile ? (
          <BlobVideo
            src={CDN.videoMobile}
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={CDN.aerial}
            alt="Nayara Hangaroa aerial view"
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
      </div>

      {/* Subtle brand mark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.4 }}
        className="absolute top-24 left-0 right-0 z-10 flex justify-center"
      >
        <span
          className="text-white/15 text-[11px] md:text-xs tracking-[0.5em] uppercase"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          Nayara Hangaroa
        </span>
      </motion.div>

      {/* Content — anchored to bottom */}
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-4"
        >
          <span
            className="text-white/60 text-[11px] tracking-[0.4em] uppercase"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Easter Island, Chile
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-3xl md:text-5xl lg:text-6xl leading-[0.95] tracking-wide text-center"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          Where Moai Meet the Pacific
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-white/50 text-sm mt-4 tracking-wider"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          The most remote luxury hotel on Earth
        </motion.p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   INTRO — Editorial text block
   ═══════════════════════════════════════════════════════════ */
function IntroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-stone-400 text-xs tracking-[0.35em] uppercase mb-8"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Rapa Nui · Te Pito o Te Henua
          </p>

          <h2
            className="text-stone-800 text-3xl md:text-4xl lg:text-5xl leading-[1.15] mb-8"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            At the Navel of the World
          </h2>

          <div className="mb-10">
            <AwardBadgeStrip property="hangaroa" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <p
              className="text-stone-600 text-base md:text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Two thousand miles from the nearest inhabited land, Easter Island — Rapa Nui — is the most 
              isolated inhabited place on Earth. Nayara Hangaroa sits at this extraordinary crossroads of 
              Polynesian heritage and Pacific wilderness, its architecture echoing the traditional 
              <em> hare paenga</em> boat-shaped houses of the ancient islanders.
            </p>
            <p
              className="text-stone-600 text-base md:text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Here, 887 moai stand sentinel across a volcanic landscape of crater lakes, wild horses, 
              and some of the clearest ocean water on the planet. Every experience is guided by Rapa Nui 
              people — the living descendants of the master navigators who crossed the Pacific by starlight 
              to find this island at the edge of the world.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   THE PROPERTY — Image grid with details
   ═══════════════════════════════════════════════════════════ */
function TheProperty() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    { label: "Rooms", value: "75 suites", icon: <MapPin className="w-4 h-4" /> },
    { label: "Architecture", value: "Hare Paenga inspired", icon: <Anchor className="w-4 h-4" /> },
    { label: "Setting", value: "Oceanfront volcanic", icon: <Waves className="w-4 h-4" /> },
    { label: "Distinction", value: "MICHELIN Key", icon: <Star className="w-4 h-4" /> },
  ];

  return (
    <section ref={ref} className="pb-24 md:pb-32 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Image grid */}
          <div className="grid md:grid-cols-3 gap-3 mb-16">
            <div className="md:col-span-2 aspect-[16/9] overflow-hidden">
              <img
                src={CDN.pool}
                alt="Hangaroa pool with ocean views"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="grid grid-rows-2 gap-3">
              <div className="overflow-hidden">
                <img
                  src={CDN.room}
                  alt="Hangaroa suite interior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src={CDN.sunset}
                  alt="Hangaroa sunset dining"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Feature stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {features.map((f) => (
              <div key={f.label} className="text-center">
                <div className="flex justify-center mb-3 text-stone-400">
                  {f.icon}
                </div>
                <p
                  className="text-stone-800 text-lg md:text-xl mb-1"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                >
                  {f.value}
                </p>
                <p
                  className="text-stone-400 text-xs tracking-[0.2em] uppercase"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                >
                  {f.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   EXPERIENCES — Filterable grid
   ═══════════════════════════════════════════════════════════ */
function ExperiencesSection({ onInView }: { onInView: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    if (isInView) onInView();
  }, [isInView, onInView]);

  const filtered = activeCategory === "all"
    ? experiences
    : experiences.filter((e) => e.category === activeCategory);

  return (
    <section ref={ref} id="experiences" className="py-24 md:py-32 bg-stone-900 text-white px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p
            className="text-stone-500 text-xs tracking-[0.35em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Bespoke Experiences
          </p>
          <h2
            className="text-white text-3xl md:text-4xl lg:text-5xl leading-[1.1] mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Explore Rapa Nui
          </h2>
          <p
            className="text-stone-400 text-base md:text-lg max-w-2xl leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Every experience is led by Rapa Nui guides — the island's own people sharing their 
            ancestral knowledge, sacred sites, and living traditions.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 text-xs tracking-[0.15em] uppercase rounded-full border transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-white text-stone-900 border-white"
                  : "bg-transparent text-stone-400 border-stone-700 hover:border-stone-500 hover:text-stone-300"
              }`}
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Experience cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((exp) => (
              <motion.div
                key={exp.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer"
                onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden mb-4">
                  <img
                    src={exp.image}
                    alt={exp.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex items-start gap-3 mb-2">
                  <div className="text-stone-500 mt-0.5">{exp.icon}</div>
                  <div className="flex-1">
                    <h3
                      className="text-white text-lg mb-1"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                    >
                      {exp.name}
                    </h3>
                    <p
                      className="text-stone-500 text-sm italic"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {exp.subtitle}
                    </p>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-600 transition-transform duration-300 ${
                      expandedId === exp.id ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Expanded details */}
                <AnimatePresence>
                  {expandedId === exp.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden pl-8"
                    >
                      <div className="pt-3 pb-2">
                        <div className="flex gap-4 mb-3">
                          <span className="text-stone-500 text-xs tracking-wider uppercase">
                            {exp.duration}
                          </span>
                          <span className="text-stone-600">·</span>
                          <span className="text-stone-500 text-xs tracking-wider uppercase">
                            {exp.difficulty}
                          </span>
                        </div>
                        <p
                          className="text-stone-400 text-sm leading-relaxed mb-3"
                          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                        >
                          {exp.description}
                        </p>
                        <ul className="space-y-1">
                          {exp.highlights.map((h) => (
                            <li
                              key={h}
                              className="text-stone-500 text-xs flex items-center gap-2"
                              style={{ fontFamily: "var(--font-body)" }}
                            >
                              <span className="w-1 h-1 rounded-full bg-stone-600" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   RAPA NUI CULTURE — Editorial section
   ═══════════════════════════════════════════════════════════ */
function RapaNuiCulture() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Image */}
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={CDN.grounds}
                alt="Hangaroa grounds with volcanic landscape"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Text */}
            <div>
              <p
                className="text-stone-400 text-xs tracking-[0.35em] uppercase mb-6"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Living Heritage
              </p>

              <h2
                className="text-stone-800 text-3xl md:text-4xl leading-[1.15] mb-8"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                Guardians of the Island
              </h2>

              <p
                className="text-stone-600 text-base leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                Nayara Hangaroa is deeply woven into the fabric of Rapa Nui. Over 80% of our team 
                are islanders — not just employees, but cultural ambassadors who share their ancestral 
                knowledge with every guest. From the master carvers who shape volcanic stone into 
                miniature moai to the dancers who perform the ancient Kari Kari, every interaction 
                is an authentic connection to one of the world's most remarkable civilizations.
              </p>

              <p
                className="text-stone-600 text-base leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                The hotel's commitment to cultural preservation extends beyond employment. We actively 
                support archaeological research, language revitalization programs, and the sustainable 
                tourism practices that protect this UNESCO World Heritage Site for future generations.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="border border-stone-200 px-6 py-4">
                  <p
                    className="text-stone-800 text-2xl mb-1"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                  >
                    80%+
                  </p>
                  <p
                    className="text-stone-400 text-xs tracking-[0.15em] uppercase"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                  >
                    Rapa Nui staff
                  </p>
                </div>
                <div className="border border-stone-200 px-6 py-4">
                  <p
                    className="text-stone-800 text-2xl mb-1"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                  >
                    887
                  </p>
                  <p
                    className="text-stone-400 text-xs tracking-[0.15em] uppercase"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                  >
                    Moai on island
                  </p>
                </div>
                <div className="border border-stone-200 px-6 py-4">
                  <p
                    className="text-stone-800 text-2xl mb-1"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                  >
                    UNESCO
                  </p>
                  <p
                    className="text-stone-400 text-xs tracking-[0.15em] uppercase"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                  >
                    World Heritage
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
