/**
 * NAYARA BOCAS DEL TORO — Panama
 * Design: Caribbean turquoise + warm wood editorial palette
 * Overwater bungalows, coral restoration, island exploration
 * Typography: Playfair Display (display) + DM Sans (body)
 */

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  Menu,
  X,
  Waves,
  Fish,
  Palmtree,
  Compass,
  Sun,
  Anchor,
  Shell,
  ChevronDown,
  Star,
  MapPin,
  Leaf,
} from "lucide-react";
import { toast } from "sonner";
import ExploreOurWorld from "@/components/ExploreOurWorld";
import Footer from "@/components/Footer";

/* ─── CDN Assets ─────────────────────────────────────────── */
const CDN = {
  aerial: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-aerial_ff3a4ff3.jpg",
  sunset: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-sunset_2eeaa785.jpg",
  overwater: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-overwater_f9b09985.jpg",
  panorama: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-panorama_4ba3f49e.jpg",
  bungalow: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-bungalow_f4de28d6.jpg",
};

/* ─── Experiences Data ───────────────────────────────────── */
const experiences = [
  {
    id: "coral-restoration",
    name: "Caribbean Coral Restoration",
    subtitle: "Regenerative marine conservation",
    duration: "Half day",
    difficulty: "Easy",
    description: "Partner with Caribbean Coral Reef Restoration to help rebuild the reef systems surrounding Bocas del Toro. Plant coral fragments on underwater nursery structures, learn about marine biology, and witness the regeneration of one of the Caribbean's most biodiverse ecosystems.",
    highlights: ["Hands-on coral fragment planting", "Marine biology briefing", "Snorkel survey of nursery sites"],
    icon: <Shell className="w-5 h-5" />,
    category: "conservation",
    image: CDN.aerial,
  },
  {
    id: "island-hopping",
    name: "Island Hopping by Boat",
    subtitle: "Secluded beaches and mangrove channels",
    duration: "Full day",
    difficulty: "Easy",
    description: "Explore the archipelago's nine main islands and countless islets by private boat. Visit Starfish Beach, navigate through mangrove channels teeming with wildlife, and discover hidden coves where the jungle meets turquoise water.",
    highlights: ["Starfish Beach", "Red Frog Beach", "Mangrove wildlife channels"],
    icon: <Compass className="w-5 h-5" />,
    category: "adventure",
    image: CDN.panorama,
  },
  {
    id: "snorkeling-diving",
    name: "Reef Snorkeling & Diving",
    subtitle: "Caribbean's hidden underwater world",
    duration: "Half day",
    difficulty: "Easy–Medium",
    description: "Bocas del Toro sits within one of the most biodiverse marine corridors in the Caribbean. Snorkel or dive among vibrant coral gardens, sea turtles, eagle rays, and over 300 species of tropical fish in warm, crystal-clear water.",
    highlights: ["Sea turtle encounters", "Coral garden exploration", "300+ fish species"],
    icon: <Fish className="w-5 h-5" />,
    category: "adventure",
    image: CDN.overwater,
  },
  {
    id: "jungle-chocolate",
    name: "Jungle to Chocolate",
    subtitle: "Cacao farm and indigenous community",
    duration: "Half day",
    difficulty: "Easy",
    description: "Visit an indigenous Ngöbe-Buglé cacao farm deep in the jungle. Learn the ancient process of transforming raw cacao into chocolate, from fermentation to roasting. A cultural immersion that supports the local indigenous community's sustainable agriculture.",
    highlights: ["Ngöbe-Buglé community visit", "Bean-to-bar chocolate making", "Jungle trail walk"],
    icon: <Leaf className="w-5 h-5" />,
    category: "culture",
    image: CDN.sunset,
  },
  {
    id: "bioluminescence",
    name: "Bioluminescent Bay",
    subtitle: "Nature's light show after dark",
    duration: "Evening (2 hours)",
    difficulty: "Easy",
    description: "Kayak through Bocas del Toro's bioluminescent bay as microscopic dinoflagellates light up the water with every paddle stroke. One of only a handful of places on Earth where this phenomenon occurs with such intensity.",
    highlights: ["Kayak through glowing water", "Dinoflagellate biology lesson", "Stargazing from the water"],
    icon: <Star className="w-5 h-5" />,
    category: "nature",
    image: CDN.bungalow,
  },
  {
    id: "sunset-sailing",
    name: "Sunset Catamaran Sail",
    subtitle: "Golden hour on the Caribbean",
    duration: "Evening (3 hours)",
    difficulty: "Easy",
    description: "Sail through the archipelago aboard a private catamaran as the Caribbean sun sets over the islands. Champagne, fresh ceviche, and the sound of water against the hull — an evening of pure island luxury.",
    highlights: ["Private catamaran", "Champagne and ceviche", "Archipelago sunset views"],
    icon: <Anchor className="w-5 h-5" />,
    category: "nature",
    image: CDN.panorama,
  },
];

const categories = [
  { id: "all", label: "All Experiences" },
  { id: "adventure", label: "Adventure" },
  { id: "nature", label: "Nature" },
  { id: "culture", label: "Culture" },
  { id: "conservation", label: "Conservation" },
];

/* ─── Main Component ─────────────────────────────────────── */
export default function BocasDelToro() {
  const [activeSection, setActiveSection] = useState("hero");

  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <BocasNav activeSection={activeSection} />
      <HeroSection onInView={() => setActiveSection("hero")} />
      <IntroSection />
      <OverwaterLiving />
      <ExperiencesSection onInView={() => setActiveSection("experiences")} />
      <CoralRestoration />
      <ExploreOurWorld />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   NAVIGATION
   ═══════════════════════════════════════════════════════════ */
function BocasNav({ activeSection }: { activeSection: string }) {
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
                ? "text-teal-900 bg-white/80 backdrop-blur-sm shadow-sm"
                : "text-white bg-black/20 backdrop-blur-sm"
            } hover:scale-105`}
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <button
            onClick={() => toast("Reservation system — Coming Soon")}
            className="px-5 py-2 text-xs tracking-[0.2em] uppercase font-medium rounded-full transition-all duration-300 hover:scale-105 bg-teal-800 text-white hover:bg-teal-700 shadow-lg"
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
                <div className="flex items-center justify-between px-6 h-16 border-b border-teal-900/10">
                  <span
                    className="text-sm tracking-[0.2em] uppercase text-teal-900/60"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                  >
                    Nayara Bocas del Toro
                  </span>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="p-2 text-teal-900/60 hover:text-teal-900 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex-1 px-6 py-8 flex flex-col gap-6">
                  <Link
                    href="/"
                    className="text-sm tracking-[0.15em] uppercase text-teal-900/70 hover:text-teal-700 transition-colors"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                  >
                    ← All Properties
                  </Link>
                  <div className="w-8 h-px bg-teal-900/10" />
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id, item.label)}
                      className={`text-left text-sm tracking-[0.15em] uppercase transition-colors ${
                        activeSection === item.id
                          ? "text-teal-700 font-semibold"
                          : "text-teal-900/60 hover:text-teal-900"
                      }`}
                      style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                <div className="px-6 py-6 border-t border-teal-900/10">
                  <button
                    onClick={() => { toast("Reservation system — Coming Soon"); setMenuOpen(false); }}
                    className="w-full py-3 text-xs tracking-[0.2em] uppercase font-medium rounded-full bg-teal-800 text-white hover:bg-teal-700 transition-colors"
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
   HERO — Full-screen Caribbean aerial
   ═══════════════════════════════════════════════════════════ */
function HeroSection({ onInView }: { onInView: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    if (isInView) onInView();
  }, [isInView, onInView]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={CDN.aerial}
          alt="Nayara Bocas del Toro aerial view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60" />
      </div>

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
          Nayara Bocas del Toro
        </span>
      </motion.div>

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
            Bocas del Toro, Panama
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-3xl md:text-5xl lg:text-6xl leading-[0.95] tracking-wide text-center"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          Caribbean Island Paradise
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-white/50 text-sm mt-4 tracking-wider"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          Overwater luxury in Panama's untouched archipelago
        </motion.p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   INTRO
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
            className="text-teal-700/60 text-xs tracking-[0.35em] uppercase mb-8"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Isla Colón · Bocas del Toro Archipelago
          </p>

          <h2
            className="text-stone-800 text-3xl md:text-4xl lg:text-5xl leading-[1.15] mb-8"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Where the Jungle Meets the Sea
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <p
              className="text-stone-600 text-base md:text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Nayara Bocas del Toro rises from the Caribbean waters of Panama's most pristine 
              archipelago. Overwater bungalows connected by wooden boardwalks float above turquoise 
              lagoons, surrounded by mangrove forests and coral reefs that harbor some of the 
              Caribbean's richest marine biodiversity.
            </p>
            <p
              className="text-stone-600 text-base md:text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              This is Nayara's newest chapter — a place where regenerative travel meets Caribbean 
              luxury. In partnership with Caribbean Coral Reef Restoration, guests participate in 
              active reef rebuilding while experiencing the wild beauty of an archipelago that remains 
              largely untouched by mass tourism.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   OVERWATER LIVING — Image showcase
   ═══════════════════════════════════════════════════════════ */
function OverwaterLiving() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    { label: "Bungalows", value: "Overwater", icon: <Waves className="w-4 h-4" /> },
    { label: "Setting", value: "Caribbean archipelago", icon: <MapPin className="w-4 h-4" /> },
    { label: "Marine Life", value: "300+ species", icon: <Fish className="w-4 h-4" /> },
    { label: "Conservation", value: "Coral restoration", icon: <Leaf className="w-4 h-4" /> },
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
                src={CDN.overwater}
                alt="Overwater bungalows at Bocas del Toro"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="grid grid-rows-2 gap-3">
              <div className="overflow-hidden">
                <img
                  src={CDN.bungalow}
                  alt="Overwater bungalow detail"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src={CDN.sunset}
                  alt="Bocas del Toro sunset"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Feature stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {features.map((f) => (
              <div key={f.label} className="text-center">
                <div className="flex justify-center mb-3 text-teal-600/60">
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
    <section ref={ref} id="experiences" className="py-24 md:py-32 bg-teal-950 text-white px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <p
            className="text-teal-400/60 text-xs tracking-[0.35em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Bespoke Experiences
          </p>
          <h2
            className="text-white text-3xl md:text-4xl lg:text-5xl leading-[1.1] mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Explore the Archipelago
          </h2>
          <p
            className="text-teal-200/40 text-base md:text-lg max-w-2xl leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            From coral reef restoration to bioluminescent kayaking, every experience connects you 
            to the extraordinary marine and jungle ecosystems of Bocas del Toro.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 text-xs tracking-[0.15em] uppercase rounded-full border transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-white text-teal-950 border-white"
                  : "bg-transparent text-teal-300/60 border-teal-700/40 hover:border-teal-500/60 hover:text-teal-200"
              }`}
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              {cat.label}
            </button>
          ))}
        </div>

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
                <div className="aspect-[4/3] overflow-hidden mb-4">
                  <img
                    src={exp.image}
                    alt={exp.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>

                <div className="flex items-start gap-3 mb-2">
                  <div className="text-teal-400/60 mt-0.5">{exp.icon}</div>
                  <div className="flex-1">
                    <h3
                      className="text-white text-lg mb-1"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                    >
                      {exp.name}
                    </h3>
                    <p
                      className="text-teal-300/40 text-sm italic"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {exp.subtitle}
                    </p>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-teal-600/40 transition-transform duration-300 ${
                      expandedId === exp.id ? "rotate-180" : ""
                    }`}
                  />
                </div>

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
                          <span className="text-teal-400/50 text-xs tracking-wider uppercase">
                            {exp.duration}
                          </span>
                          <span className="text-teal-600/30">·</span>
                          <span className="text-teal-400/50 text-xs tracking-wider uppercase">
                            {exp.difficulty}
                          </span>
                        </div>
                        <p
                          className="text-teal-200/40 text-sm leading-relaxed mb-3"
                          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                        >
                          {exp.description}
                        </p>
                        <ul className="space-y-1">
                          {exp.highlights.map((h) => (
                            <li
                              key={h}
                              className="text-teal-300/40 text-xs flex items-center gap-2"
                              style={{ fontFamily: "var(--font-body)" }}
                            >
                              <span className="w-1 h-1 rounded-full bg-teal-500/40" />
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
   CORAL RESTORATION — Featured sustainability section
   ═══════════════════════════════════════════════════════════ */
function CoralRestoration() {
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
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={CDN.panorama}
                alt="Bocas del Toro archipelago panorama"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div>
              <p
                className="text-teal-700/60 text-xs tracking-[0.35em] uppercase mb-6"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Regenerative Travel
              </p>

              <h2
                className="text-stone-800 text-3xl md:text-4xl leading-[1.15] mb-8"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                Rebuilding the Reef
              </h2>

              <p
                className="text-stone-600 text-base leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                In partnership with Caribbean Coral Reef Restoration, Nayara Bocas del Toro is 
                pioneering a new model of regenerative luxury travel. Guests don't just observe — 
                they participate. Every stay includes the opportunity to plant coral fragments on 
                underwater nursery structures, directly contributing to the rebuilding of the 
                Caribbean's threatened reef systems.
              </p>

              <p
                className="text-stone-600 text-base leading-relaxed mb-8"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                The project is expanding rapidly, with new nursery sites being established across 
                the archipelago. Marine biologists on staff monitor growth rates, biodiversity 
                recovery, and water quality — creating a living laboratory where science and 
                hospitality converge.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="border border-teal-200 px-6 py-4">
                  <p
                    className="text-stone-800 text-2xl mb-1"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                  >
                    Active
                  </p>
                  <p
                    className="text-stone-400 text-xs tracking-[0.15em] uppercase"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                  >
                    Coral nurseries
                  </p>
                </div>
                <div className="border border-teal-200 px-6 py-4">
                  <p
                    className="text-stone-800 text-2xl mb-1"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                  >
                    300+
                  </p>
                  <p
                    className="text-stone-400 text-xs tracking-[0.15em] uppercase"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                  >
                    Marine species
                  </p>
                </div>
                <div className="border border-teal-200 px-6 py-4">
                  <p
                    className="text-stone-800 text-2xl mb-1"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                  >
                    Partner
                  </p>
                  <p
                    className="text-stone-400 text-xs tracking-[0.15em] uppercase"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                  >
                    CCRF
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
