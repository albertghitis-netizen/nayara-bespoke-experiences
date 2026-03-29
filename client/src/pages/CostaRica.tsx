/*
 * NAYARA ARENAL — Costa Rica Bespoke Experiences
 * Design: "Desert Codex" adapted for rainforest — Editorial Cartography
 * Palette: Emerald, volcanic charcoal, cream, gold accents
 * Typography: Playfair Display (display) + DM Sans (body)
 * Rule: Real photos only. No AI-generated imagery.
 *
 * Unified page for Tented Camp, Gardens, and Springs.
 * Excursions and spa treatments are shared across all three properties.
 */

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  ChevronDown,
  Clock,
  Footprints,
  ExternalLink,
  MapPin,
  Droplets,
  Leaf,
  Wind,
  Flame,
  ArrowLeft,
  TreePine,
  Waves,
} from "lucide-react";
import { properties, type Excursion, type Treatment, type BlogLink } from "@/data/properties";

// Get the Tented Camp property as the canonical Costa Rica data source
const tentedCamp = properties.find((p) => p.id === "tented-camp")!;
const gardens = properties.find((p) => p.id === "gardens")!;
const springs = properties.find((p) => p.id === "springs")!;

const CDN = {
  toucan: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/costa-rica-toucan_a70ad74a.mp4",
  spa: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/costa-rica-spa-springs_89d85927.mp4",
};

// Merge unique blog links from all three properties
const allBlogLinks: BlogLink[] = [];
const seenUrls = new Set<string>();
[tentedCamp, gardens, springs].forEach((p) => {
  p.blogLinks.forEach((bl) => {
    if (!seenUrls.has(bl.url)) {
      seenUrls.add(bl.url);
      allBlogLinks.push(bl);
    }
  });
});

const excursionCategories = tentedCamp.excursionCategories;
const spaCategories = tentedCamp.spaCategories;

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

export default function CostaRica() {
  const [activeSection, setActiveSection] = useState("hero");

  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <ArenalNavigation activeSection={activeSection} />
      <ArenalHero onInView={() => setActiveSection("hero")} />
      <PropertyIntro />
      <ArenalExcursions onInView={() => setActiveSection("excursions")} />
      <ArenalSpa onInView={() => setActiveSection("spa")} />
      <ArenalFooter />
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
    { id: "excursions", label: "Excursions" },
    { id: "spa", label: "Wellness" },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#f7f5f0]/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Back + Brand */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className={`transition-colors duration-500 ${
                scrolled ? "text-emerald-800" : "text-white/80"
              } hover:text-emerald-500`}
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex flex-col items-start"
            >
              <span
                className={`text-xs tracking-[0.35em] uppercase transition-colors duration-500 ${
                  scrolled ? "text-emerald-800/60" : "text-white/70"
                }`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                Nayara Arenal
              </span>
              <span
                className={`text-lg font-medium tracking-wide transition-colors duration-500 ${
                  scrolled ? "text-emerald-900" : "text-white"
                }`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                Bespoke Experiences
              </span>
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm tracking-[0.2em] uppercase transition-all duration-300 ${
                  scrolled
                    ? activeSection === item.id
                      ? "text-emerald-700"
                      : "text-emerald-900/60 hover:text-emerald-900"
                    : activeSection === item.id
                    ? "text-emerald-300"
                    : "text-white/60 hover:text-white"
                }`}
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden flex flex-col gap-1.5 p-2 transition-colors ${
              scrolled ? "text-emerald-900" : "text-white"
            }`}
          >
            <span
              className={`block w-6 h-px transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
              } ${scrolled ? "bg-emerald-900" : "bg-white"}`}
            />
            <span
              className={`block w-6 h-px transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
              } ${scrolled ? "bg-emerald-900" : "bg-white"}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#f7f5f0]/98 backdrop-blur-md border-t border-emerald-900/10"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              <Link
                href="/"
                className="text-left text-sm tracking-[0.2em] uppercase text-emerald-800/70 hover:text-emerald-700 transition-colors"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                ← All Properties
              </Link>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-left text-sm tracking-[0.2em] uppercase text-emerald-900/70 hover:text-emerald-700 transition-colors"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════════════════ */
function ArenalHero({ onInView }: { onInView: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    if (isInView) onInView();
  }, [isInView, onInView]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={CDN.toucan} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-10 max-w-[1400px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/70 text-xs md:text-sm tracking-[0.35em] uppercase mb-4"
          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
        >
          Nayara Arenal &mdash; Arenal Volcano, Costa Rica
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-6"
          style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
        >
          Bespoke
          <br />
          Experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/80 text-base md:text-lg max-w-xl leading-relaxed"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          In the shadow of Arenal Volcano, where rainforest canopy meets
          volcanic hot springs. Discover excursions, wellness rituals, and
          adventures in one of the most biodiverse regions on Earth.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-12 flex items-center gap-3"
        >
          <div className="w-px h-10 bg-white/30 relative overflow-hidden">
            <motion.div
              className="w-full bg-emerald-300"
              animate={{ height: ["0%", "100%", "0%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: "absolute", top: 0 }}
            />
          </div>
          <span
            className="text-white/50 text-xs tracking-[0.2em] uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Scroll to explore
          </span>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PROPERTY INTRO — Brief mention of the three properties
   ═══════════════════════════════════════════════════════════════ */
function PropertyIntro() {
  const propertyCards = [
    {
      name: "Tented Camp",
      tagline: "Glamping in the Rainforest",
      description: "Luxury safari-style tents in the canopy. Wake to howler monkeys, fall asleep to tropical rain.",
      website: tentedCamp.website,
      icon: <TreePine className="w-5 h-5" />,
    },
    {
      name: "Gardens",
      tagline: "Family Rainforest Retreat",
      description: "Spacious villas with private gardens, ideal for families exploring the Arenal region together.",
      website: gardens.website,
      icon: <Leaf className="w-5 h-5" />,
    },
    {
      name: "Springs",
      tagline: "Adults-Only Sanctuary",
      description: "Private plunge pools fed by natural hot springs. Where volcanic warmth meets rainforest serenity.",
      website: springs.website,
      icon: <Waves className="w-5 h-5" />,
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p
            className="text-emerald-700 text-xs tracking-[0.35em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Three Properties, One Destination
          </p>
          <h2
            className="text-emerald-950 text-3xl md:text-4xl lg:text-5xl leading-[1.1] mb-6 max-w-3xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
          >
            The Arenal Volcano region is home to three distinct Nayara experiences
          </h2>
          <p
            className="text-emerald-900/50 text-base md:text-lg max-w-2xl leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            All excursions and spa treatments below are available to guests at any
            of our three Arenal properties. Choose your accommodation style —
            the adventures are shared.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {propertyCards.map((prop, i) => (
            <motion.a
              key={prop.name}
              href={prop.website}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group border border-emerald-900/8 bg-white/60 p-8 hover:border-emerald-700/20 hover:bg-white/80 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-emerald-700/40 group-hover:text-emerald-700 transition-colors">
                  {prop.icon}
                </span>
                <span
                  className="text-emerald-900/40 text-[10px] tracking-[0.3em] uppercase"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                >
                  {prop.tagline}
                </span>
              </div>
              <h3
                className="text-emerald-950 text-xl mb-3"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                Nayara {prop.name}
              </h3>
              <p
                className="text-emerald-900/50 text-sm leading-relaxed mb-4"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                {prop.description}
              </p>
              <span
                className="text-emerald-700/60 text-xs tracking-[0.2em] uppercase group-hover:text-emerald-700 transition-colors flex items-center gap-2"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Visit website
                <ExternalLink className="w-3 h-3" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   EXCURSIONS SECTION
   ═══════════════════════════════════════════════════════════════ */
function ArenalExcursions({ onInView }: { onInView: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    if (isInView) onInView();
  }, [isInView, onInView]);

  const excursions = tentedCamp.excursions;
  const filtered =
    activeCategory === "all"
      ? excursions
      : excursions.filter((e) => e.category === activeCategory);

  return (
    <section ref={ref} id="excursions" className="relative py-24 md:py-32">
      {/* Section Header */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-emerald-700 text-xs tracking-[0.35em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Excursions & Adventures
          </p>
          <h2
            className="text-emerald-950 text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
          >
            Into the Living
            <br />
            Rainforest
          </h2>
          <p
            className="text-emerald-900/50 text-base md:text-lg max-w-2xl leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            From canopy-level hanging bridges to volcanic lava fields, from
            turquoise rivers to nocturnal wildlife walks — every excursion is
            guided by expert naturalists who know this ecosystem intimately.
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
          {excursionCategories.map((cat) => (
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
              <ExcursionCard
                key={excursion.id}
                excursion={excursion}
                index={i}
                isExpanded={expandedId === excursion.id}
                onToggle={() =>
                  setExpandedId(
                    expandedId === excursion.id ? null : excursion.id
                  )
                }
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Blog Links */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-emerald-900/10 pt-10"
        >
          <p
            className="text-emerald-900/40 text-xs tracking-[0.35em] uppercase mb-6"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Further Reading
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {allBlogLinks.slice(0, 9).map((blog) => (
              <a
                key={blog.url}
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 py-3 px-4 border border-emerald-900/8 hover:border-emerald-700/30 hover:bg-emerald-50/50 transition-all duration-300"
              >
                <ExternalLink className="w-3.5 h-3.5 text-emerald-700/40 group-hover:text-emerald-700 transition-colors flex-shrink-0" />
                <span
                  className="text-sm text-emerald-900/50 group-hover:text-emerald-900 transition-colors"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                >
                  {blog.title}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* Individual Excursion Card */
function ExcursionCard({
  excursion,
  index,
  isExpanded,
  onToggle,
}: {
  excursion: Excursion;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group border border-emerald-900/8 bg-white/60 overflow-hidden hover:border-emerald-900/15 transition-all duration-500"
    >
      {/* Image Area */}
      <div className="relative h-56 md:h-64 overflow-hidden">
        {excursion.image ? (
          <img
            src={excursion.image}
            alt={excursion.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-emerald-100/60 to-emerald-50/30 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-8 h-8 text-emerald-900/15 mx-auto mb-2" />
              <span
                className="text-emerald-900/25 text-xs tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Your photo here
              </span>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span
            className="px-3 py-1.5 bg-black/30 backdrop-blur-sm text-white/90 text-[10px] tracking-[0.2em] uppercase"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            {excursion.category}
          </span>
        </div>

        {/* Blog link badge */}
        {excursion.blogUrl && (
          <a
            href={excursion.blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 px-3 py-1.5 bg-emerald-700/80 backdrop-blur-sm text-white text-[10px] tracking-[0.2em] uppercase hover:bg-emerald-700 transition-colors flex items-center gap-1.5"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="w-3 h-3" />
            Read more
          </a>
        )}
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <h3
          className="text-emerald-950 text-xl md:text-2xl mb-1"
          style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
        >
          {excursion.name}
        </h3>
        <p
          className="text-emerald-700/70 text-sm mb-4 italic"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {excursion.subtitle}
        </p>

        {/* Quick Stats */}
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-emerald-900/25" />
            <span
              className="text-xs text-emerald-900/40"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {excursion.duration}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Footprints className="w-3.5 h-3.5 text-emerald-900/25" />
            <span
              className="text-xs text-emerald-900/40"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {excursion.difficulty}
            </span>
          </div>
          {excursion.suggestedTime && (
            <span
              className="text-xs text-emerald-700/50"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Departs: {excursion.suggestedTime}
            </span>
          )}
          {excursion.price && (
            <span
              className="text-xs text-emerald-700/60 font-medium"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {excursion.price}
            </span>
          )}
        </div>

        <p
          className="text-emerald-900/50 text-sm leading-relaxed"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          {excursion.description}
        </p>

        {/* Expand/Collapse */}
        <button
          onClick={onToggle}
          className="mt-4 flex items-center gap-2 text-emerald-700/60 hover:text-emerald-700 transition-colors"
        >
          <span
            className="text-xs tracking-[0.2em] uppercase"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            {isExpanded ? "Less detail" : "More detail"}
          </span>
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-5 mt-5 border-t border-emerald-900/8">
                <p
                  className="text-emerald-900/35 text-xs tracking-[0.35em] uppercase mb-3"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                >
                  Highlights
                </p>
                <ul className="space-y-2">
                  {excursion.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-emerald-900/50"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                    >
                      <span className="w-1 h-1 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {excursion.blogUrl && (
                  <a
                    href={excursion.blogUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-600 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span
                      className="text-sm underline underline-offset-4"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                    >
                      {excursion.blogTitle}
                    </span>
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SPA & WELLNESS SECTION
   ═══════════════════════════════════════════════════════════════ */
function ArenalSpa({ onInView }: { onInView: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    if (isInView) onInView();
  }, [isInView, onInView]);

  const treatments = tentedCamp.treatments;
  const filtered =
    activeCategory === "all"
      ? treatments
      : treatments.filter((t) => t.category === activeCategory);

  return (
    <section ref={ref} id="spa" className="relative py-24 md:py-32 bg-emerald-950">
      {/* Section Header */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-emerald-400/70 text-xs tracking-[0.35em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Nayara Spa &mdash; Wellness
          </p>
          <h2
            className="text-[#f7f5f0] text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
          >
            Heal in the Heart
            <br />
            of the Rainforest
          </h2>
          <p
            className="text-[#f7f5f0]/50 text-base md:text-lg max-w-2xl leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Surrounded by the sounds of the jungle and the warmth of volcanic
            hot springs, our spa offers treatments that draw from Costa Rica's
            rich natural pharmacy — volcanic mud, organic coffee, tropical cacao,
            and rainforest botanicals.
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
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={CDN.spa} type="video/mp4" />
          </video>
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
          className="border-t border-[#f7f5f0]/10 pt-8"
        >
          <p
            className="text-[#f7f5f0]/25 text-xs leading-relaxed max-w-xl"
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
      className="group border border-[#f7f5f0]/8 bg-emerald-900/30 p-6 hover:border-[#f7f5f0]/15 hover:bg-emerald-900/50 transition-all duration-500 cursor-pointer"
    >
      {/* Element Icon + Name */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          {treatment.element && (
            <div className="flex items-center gap-2 mb-1">
              <span className={elementColors[treatment.element] || "text-emerald-400"}>
                {elementIcons[treatment.element] || <Leaf className="w-4 h-4" />}
              </span>
              <span
                className="text-[#f7f5f0]/30 text-[10px] tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {treatment.element}
              </span>
            </div>
          )}
          <h3
            className="text-[#f7f5f0] text-lg"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
          >
            {treatment.name}
          </h3>
          {treatment.localName && (
            <p
              className="text-emerald-400/50 text-sm italic"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {treatment.localName}
            </p>
          )}
        </div>
        <ChevronDown
          className={`w-4 h-4 text-[#f7f5f0]/30 transition-transform duration-300 flex-shrink-0 mt-1 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Quick Info */}
      <div className="flex items-center gap-4 mb-3">
        <div className="flex items-center gap-1.5">
          <Clock className="w-3 h-3 text-[#f7f5f0]/25" />
          <span
            className="text-xs text-[#f7f5f0]/40"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {treatment.duration}
          </span>
        </div>
        <span
          className="text-xs text-emerald-400/60"
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
              className="text-[#f7f5f0]/50 text-sm leading-relaxed pt-3 border-t border-[#f7f5f0]/8"
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
              Nayara Arenal
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
              Our Properties
            </p>
            <div className="flex flex-col gap-3">
              {[
                { label: "Nayara Tented Camp", url: tentedCamp.website },
                { label: "Nayara Gardens", url: gardens.website },
                { label: "Nayara Springs", url: springs.website },
                { label: "Nayara Resorts", url: "https://nayararesorts.com" },
                { label: "Blog & Stories", url: "https://blog.nayararesorts.com" },
              ].map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f7f5f0]/40 hover:text-emerald-400 transition-colors text-sm"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                >
                  {link.label}
                </a>
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
              <a
                href={`mailto:${tentedCamp.email}`}
                className="text-[#f7f5f0]/40 hover:text-emerald-400 transition-colors text-sm"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                {tentedCamp.email}
              </a>
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
