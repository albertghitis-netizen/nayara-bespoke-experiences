/*
 * NAYARA BESPOKE EXPERIENCES — Landing Page
 * Design: "Desert Codex" — Editorial Cartography
 * Property selector showcasing all Nayara destinations
 * Typography: Playfair Display (display) + DM Sans (body)
 * Rule: Real photos only. No AI-generated imagery.
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import { MapPin, ArrowRight, ChevronDown } from "lucide-react";
import BlobVideo from "@/components/BlobVideo";
import { useIsMobile } from "@/hooks/useMobile";

interface Destination {
  id: string;
  name: string;
  location: string;
  country: string;
  tagline: string;
  description: string;
  route: string;
  available: boolean;
  poster?: string;
  accentColor: string;
  accentBg: string;
}

const CDN = {
  atacamaDesert: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/IMG_6253_ffc4f157.PNG",
  atacamaVicunas: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/IMG_8113_9e8e2ecc.jpeg",
};

const destinations: Destination[] = [
  {
    id: "alto-atacama",
    name: "Nayara Alto Atacama",
    location: "Atacama Desert",
    country: "Chile",
    tagline: "Mars on Earth",
    description:
      "Where the driest desert on Earth reveals its secrets — from pre-dawn geyser eruptions at 4,320 meters to sunset over lunar valleys, from the world's clearest stargazing to thermal springs hidden in ancient canyons.",
    route: "/alto-atacama",
    available: true,
    poster: CDN.atacamaDesert,
    accentColor: "text-amber-700",
    accentBg: "bg-amber-700",
  },
  {
    id: "arenal",
    name: "Nayara Arenal",
    location: "Arenal Volcano",
    country: "Costa Rica",
    tagline: "Into the Living Rainforest",
    description:
      "Three properties in the shadow of Arenal Volcano — Tented Camp, Gardens, and Springs. Canopy walks, volcanic hot springs, wildlife encounters, and world-class spa treatments surrounded by one of the most biodiverse regions on Earth.",
    route: "/arenal",
    available: true,
    accentColor: "text-emerald-700",
    accentBg: "bg-emerald-700",
  },
  {
    id: "hangaroa",
    name: "Nayara Hangaroa",
    location: "Easter Island",
    country: "Chile",
    tagline: "Where Moai Meet the Pacific",
    description:
      "At the edge of the world, where ancient Moai stand sentinel over the Pacific. Explore Rapa Nui's mysterious archaeological sites, dive crystal-clear waters, and immerse yourself in one of Earth's most isolated cultures.",
    route: "/hangaroa",
    available: false,
    accentColor: "text-sky-700",
    accentBg: "bg-sky-700",
  },
  {
    id: "bocas-del-toro",
    name: "Nayara Bocas del Toro",
    location: "Bocas del Toro",
    country: "Panama",
    tagline: "Caribbean Island Paradise",
    description:
      "A private island sanctuary in Panama's Caribbean archipelago. Overwater villas, bioluminescent bays, pristine coral reefs, and the rhythm of island life — where the jungle meets the sea.",
    route: "/bocas-del-toro",
    available: false,
    accentColor: "text-amber-600",
    accentBg: "bg-amber-600",
  },
];

export default function Home() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      {/* Brand Navigation */}
      <BrandNavigation />

      {/* Hero / Header */}
      <HeroHeader />

      {/* Destinations Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 gap-0 border-t border-stone-200">
            {destinations.map((dest, i) => (
              <DestinationRow
                key={dest.id}
                destination={dest}
                index={i}
                isHovered={hoveredId === dest.id}
                onHover={() => setHoveredId(dest.id)}
                onLeave={() => setHoveredId(null)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Brand */}
      <footer className="border-t border-stone-200 py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p
              className="text-stone-300 text-xs tracking-[0.35em] uppercase"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Nayara Resorts
            </p>
            <p
              className="text-stone-400 text-xs mt-1"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <p
            className="text-stone-400 text-xs"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Bespoke Experiences
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BRAND NAVIGATION — Landing page hamburger menu
   Experiences, Wellness, Sustainability, Awards, Press, Journal, Podcast
   ═══════════════════════════════════════════════════════════════ */
function BrandNavigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [, navigate] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const brandNavItems = [
    { label: "Experiences", route: null },
    { label: "Wellness", route: null },
    { label: "Sustainability", route: "/sustainability" },
    { label: "Awards", route: "/awards" },
    { label: "Press", route: null },
    { label: "Journal", route: "/journal" },
    { label: "Podcast", route: null },
  ];

  const handleClick = (item: { label: string; route: string | null }) => {
    setMenuOpen(false);
    if (item.route) {
      navigate(item.route);
    } else {
      // For Experiences/Wellness, scroll to destinations section
      if (item.label === "Experiences" || item.label === "Wellness") {
        const el = document.querySelector("section.py-16");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        // Placeholder items
        import("sonner").then(({ toast }) => toast(item.label + " — Coming Soon"));
      }
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
          {/* Brand */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex flex-col items-start"
          >
            <span
              className={`text-xs tracking-[0.35em] uppercase transition-colors duration-500 ${
                scrolled ? "text-stone-500" : "text-white/70"
              }`}
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Nayara Resorts
            </span>
            <span
              className={`text-lg tracking-wide transition-colors duration-500 ${
                scrolled ? "text-stone-800" : "text-white"
              }`}
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              Bespoke Experiences
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {brandNavItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleClick(item)}
                className={`text-sm tracking-[0.15em] uppercase transition-all duration-300 ${
                  scrolled
                    ? "text-stone-500 hover:text-stone-800"
                    : "text-white/60 hover:text-white"
                }`}
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden flex flex-col gap-1.5 p-2 transition-colors ${
              scrolled ? "text-stone-800" : "text-white"
            }`}
          >
            <span
              className={`block w-6 h-px transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
              } ${scrolled ? "bg-stone-800" : "bg-white"}`}
            />
            <span
              className={`block w-6 h-px transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
              } ${scrolled ? "bg-stone-800" : "bg-white"}`}
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
            className="md:hidden bg-[#f7f5f0]/98 backdrop-blur-md border-t border-stone-200"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {brandNavItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleClick(item)}
                  className="text-left text-sm tracking-[0.2em] uppercase text-stone-600 hover:text-stone-900 transition-colors"
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
   HERO HEADER
   ═══════════════════════════════════════════════════════════════ */
function HeroHeader() {
  const isMobile = useIsMobile();
  const heroVideo = isMobile
    ? "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/compressed-landing-vertical_a7242694.mp4"
    : "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/compressed-landing-vertical_a7242694.mp4"; // TODO: replace with horizontal version when available

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <BlobVideo
          src={heroVideo}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
      </div>

      {/* Content — centered at bottom */}
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6 md:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-wide text-center"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          Bespoke Experiences
        </motion.h1>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   DESTINATION ROW — Editorial list-style property selector
   ═══════════════════════════════════════════════════════════════ */
function DestinationRow({
  destination,
  index,
  isHovered,
  onHover,
  onLeave,
}: {
  destination: Destination;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`border-b border-stone-200 transition-all duration-500 ${
        destination.available
          ? "hover:bg-stone-100/50 cursor-pointer"
          : "opacity-60"
      }`}
    >
      {/* Main Row */}
      <div className="py-8 md:py-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        {/* Number */}
        <div className="hidden md:block w-12 flex-shrink-0">
          <span
            className="text-stone-300 text-sm tabular-nums"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Image thumbnail (desktop) */}
        <div className="hidden md:block w-32 h-20 flex-shrink-0 overflow-hidden bg-stone-100">
          {destination.poster ? (
            <img
              src={destination.poster}
              alt={destination.name}
              className={`w-full h-full object-cover transition-transform duration-700 ${
                isHovered ? "scale-110" : "scale-100"
              }`}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <MapPin className="w-5 h-5 text-stone-300" />
            </div>
          )}
        </div>

        {/* Property Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-1">
            <h2
              className="text-stone-800 text-2xl md:text-3xl truncate"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              {destination.name}
            </h2>
            {!destination.available && (
              <span
                className="text-stone-400 text-[10px] tracking-[0.2em] uppercase border border-stone-300 px-2 py-0.5 flex-shrink-0"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Coming soon
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3 h-3 text-stone-400 flex-shrink-0" />
            <span
              className="text-stone-400 text-sm"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              {destination.location}, {destination.country}
            </span>
          </div>
        </div>

        {/* Tagline */}
        <div className="hidden lg:block flex-shrink-0 max-w-[200px]">
          <p
            className={`text-sm italic ${destination.accentColor}`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            {destination.tagline}
          </p>
        </div>

        {/* Action */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Mobile expand button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setExpanded(!expanded);
            }}
            className="md:hidden text-stone-400"
          >
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>

          {destination.available && (
            <div
              className={`flex items-center gap-2 transition-all duration-300 ${
                isHovered ? "translate-x-0 opacity-100" : "md:-translate-x-2 md:opacity-0 opacity-100"
              }`}
            >
              <span
                className={`text-xs tracking-[0.2em] uppercase ${destination.accentColor}`}
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Explore
              </span>
              <ArrowRight className={`w-4 h-4 ${destination.accentColor}`} />
            </div>
          )}
        </div>
      </div>

      {/* Expanded Description (mobile) */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden md:hidden"
          >
            <div className="pb-8">
              <p
                className="text-stone-500 text-sm leading-relaxed mb-4"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                {destination.description}
              </p>
              <p
                className={`text-sm italic ${destination.accentColor}`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {destination.tagline}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanded Description (desktop, on hover) */}
      <AnimatePresence>
        {isHovered && destination.available && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden hidden md:block"
          >
            <div className="pb-8 pl-44 pr-8">
              <p
                className="text-stone-500 text-sm leading-relaxed max-w-2xl"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                {destination.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  if (destination.available) {
    return <Link href={destination.route}>{content}</Link>;
  }

  return content;
}
