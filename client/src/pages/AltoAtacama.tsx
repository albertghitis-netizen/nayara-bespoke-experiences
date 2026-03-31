/*
 * NAYARA ALTO ATACAMA — Full Property Page
 * Design: "Desert Codex" — Editorial Cartography
 * The ONLY luxury hotel in an actual oasis (Catarpe Valley)
 * Key differentiators: Oasis location, stargazing observatory, Mars-on-Earth landscape
 * Typography: Playfair Display (display) + DM Sans (body)
 */

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/useMobile";
import BlobVideo from "@/components/BlobVideo";
import Footer from "@/components/Footer";
import ExploreOurWorld from "@/components/ExploreOurWorld";
import PropertyDiningSection from "@/components/PropertyDiningSection";
import { AwardBadgeStrip } from "@/components/AwardBadges";
import { atacamaDiningCollection } from "@/data/dining";
import { useLocation } from "wouter";
import { BOOKING_URLS } from "@/data/booking";

/* ── CDN Assets ── */
const VIDEO_DESKTOP =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-desktop-compressed_d077ee79.mp4";
const VIDEO_MOBILE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-vertical-drone_27d39f2d.mp4";
const POSTER =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/IMG_6253_ffc4f157.PNG";
const VICUNAS_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/IMG_8113_311fa15c.jpeg";

const BOOKING_URL = BOOKING_URLS["alto-atacama"];

/* ── Section nav items ── */
const NAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "oasis", label: "The Oasis" },
  { id: "rooms", label: "Rooms" },
  { id: "dining", label: "Dining" },
  { id: "stargazing", label: "Stargazing" },
  { id: "experiences", label: "Experiences" },
  { id: "wellness", label: "Wellness" },
  { id: "sustainability", label: "Sustainability" },
];

/* ── Scroll-reveal wrapper ── */
function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */
export default function AltoAtacama() {
  const isMobile = useIsMobile();
  const [activeSection, setActiveSection] = useState("overview");
  const [, navigate] = useLocation();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      {/* ── Hero ── */}
      <section id="overview" className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <BlobVideo
            src={isMobile ? VIDEO_MOBILE : VIDEO_DESKTOP}
            className="w-full h-full object-cover"
            poster={POSTER}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6 md:px-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="text-white/40 text-[11px] tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            San Pedro de Atacama, Chile
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-3xl md:text-5xl lg:text-6xl leading-[0.95] tracking-wide text-center"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Nayara Alto Atacama
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-white/50 text-sm md:text-base mt-4 max-w-lg text-center"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            The only luxury hotel in an actual desert oasis
          </motion.p>
        </div>
      </section>

      {/* ── Sticky section nav ── */}
      <nav className="sticky top-0 z-30 bg-[#f7f5f0]/95 backdrop-blur-sm border-b border-[#3a2a1a]/5">
        <div className="max-w-6xl mx-auto px-4 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-1 py-3 min-w-max">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-1.5 rounded-full text-[11px] tracking-[0.1em] uppercase transition-all duration-300 whitespace-nowrap ${
                  activeSection === item.id
                    ? "bg-[#3a2a1a] text-white"
                    : "text-[#3a2a1a]/50 hover:text-[#3a2a1a] hover:bg-[#3a2a1a]/5"
                }`}
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ═══ THE OASIS ═══ */}
      {/* Award Badges */}
      <Reveal>
        <div className="py-10 md:py-14 px-6">
          <AwardBadgeStrip property="alto-atacama" />
        </div>
      </Reveal>

      <SectionTracker id="oasis" onActive={() => setActiveSection("oasis")}>
        <section className="py-20 md:py-28 px-6 md:px-10">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <p
                className="text-[#c9a96e] text-[11px] tracking-[0.3em] uppercase mb-4"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                The Oasis Advantage
              </p>
              <h2
                className="text-[#3a2a1a] text-3xl md:text-4xl lg:text-5xl leading-tight mb-8"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                A Private Valley at the<br className="hidden md:block" /> Edge of Habitability
              </h2>
            </Reveal>

            <Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
                <div>
                  <p
                    className="text-[#5a4a3a]/70 text-sm md:text-base leading-relaxed mb-6"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                  >
                    Nayara Alto Atacama is the only luxury hotel set in an actual oasis — the Catarpe Valley. 
                    Our competitors are located in the town of San Pedro de Atacama. We are in a private valley 
                    surrounded by red rock canyons, with the Andes as our backdrop. Total seclusion, zero light 
                    pollution, and a landscape that feels like Mars on Earth.
                  </p>
                  <p
                    className="text-[#5a4a3a]/70 text-sm md:text-base leading-relaxed mb-8"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                  >
                    Set at approximately 2,400 meters elevation in the driest desert on Earth. The resort is 
                    just minutes from San Pedro de Atacama but feels like another world entirely — a private 
                    oasis of adobe architecture, canyon walls, and infinite sky.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {["2,400m Elevation", "Driest Desert on Earth", "Zero Light Pollution", "Private Oasis"].map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 border border-[#3a2a1a]/10 text-[#3a2a1a]/60 text-[10px] tracking-[0.15em] uppercase"
                        style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={VICUNAS_IMG}
                    alt="Wild vicuñas in the Atacama Desert"
                    className="w-full aspect-[4/5] object-cover"
                    loading="lazy"
                  />
                  <p
                    className="text-[#5a4a3a]/30 text-[10px] tracking-[0.1em] mt-3"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Wild vicuñas roaming the Atacama highlands
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </SectionTracker>

      {/* ═══ ROOMS & SUITES ═══ */}
      <SectionTracker id="rooms" onActive={() => setActiveSection("rooms")}>
        <section className="py-20 md:py-28 px-6 md:px-10 bg-[#3a2a1a]/[0.03]">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <p
                className="text-[#c9a96e] text-[11px] tracking-[0.3em] uppercase mb-4"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Accommodations
              </p>
              <h2
                className="text-[#3a2a1a] text-3xl md:text-4xl leading-tight mb-6"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                Adobe Architecture, Desert Soul
              </h2>
              <p
                className="text-[#5a4a3a]/70 text-sm md:text-base leading-relaxed max-w-2xl mb-12"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                Adobe-style rooms and suites that blend into the desert landscape. Architecture inspired by 
                traditional Atacameño construction — thick adobe walls, thatched roofs, earth tones. Every room 
                has views of the valley, the Licancabur volcano, or the surrounding canyon walls.
              </p>
            </Reveal>

            <Reveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Quitor Room",
                    desc: "Cozy adobe rooms with valley views, private terrace, and outdoor shower. The perfect base for desert exploration.",
                    size: "35 m²",
                  },
                  {
                    name: "Catarpe Suite",
                    desc: "Spacious suites with separate living area, panoramic canyon views, and private plunge pool heated by solar energy.",
                    size: "55 m²",
                  },
                  {
                    name: "Pukará Suite",
                    desc: "Our most exclusive accommodation with wraparound terrace, private heated pool, and unobstructed views of the Licancabur volcano.",
                    size: "75 m²",
                  },
                ].map((room) => (
                  <div key={room.name} className="group">
                    <div className="bg-[#3a2a1a]/[0.04] p-8 h-full">
                      <span
                        className="text-[#c9a96e] text-[10px] tracking-[0.2em] uppercase block mb-3"
                        style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                      >
                        {room.size}
                      </span>
                      <h3
                        className="text-[#3a2a1a] text-xl mb-3"
                        style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                      >
                        {room.name}
                      </h3>
                      <p
                        className="text-[#5a4a3a]/60 text-sm leading-relaxed"
                        style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                      >
                        {room.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-10 text-center">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[#3a2a1a] hover:bg-[#4a3a2a] transition-colors"
              >
                <span
                  className="text-white text-[11px] tracking-[0.25em] uppercase"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                >
                  Check Availability
                </span>
              </a>
            </Reveal>
          </div>
        </section>
      </SectionTracker>

      {/* ═══ DINING ═══ */}
      <SectionTracker id="dining" onActive={() => setActiveSection("dining")}>
        <section className="py-20 md:py-28 px-6 md:px-10">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <p
                className="text-[#c9a96e] text-[11px] tracking-[0.3em] uppercase mb-4"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Gastronomy
              </p>
              <h2
                className="text-[#3a2a1a] text-3xl md:text-4xl leading-tight mb-6"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                Atacameño-Inspired Cuisine
              </h2>
            </Reveal>

            <Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                <div>
                  <h3
                    className="text-[#3a2a1a] text-xl mb-3"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                  >
                    Aira Restaurant
                  </h3>
                  <p
                    className="text-[#5a4a3a]/70 text-sm leading-relaxed mb-6"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                  >
                    Our main dining venue featuring Chilean and Atacameño-inspired cuisine. Locally sourced 
                    ingredients from the Atacama region and beyond. Multi-course tasting menus celebrate the 
                    desert's surprising bounty — quinoa, llama, native herbs, and Andean grains.
                  </p>

                  <h3
                    className="text-[#3a2a1a] text-xl mb-3"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                  >
                    Private Dining
                  </h3>
                  <p
                    className="text-[#5a4a3a]/70 text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                  >
                    Sunset picnics among the dunes, starlight dinners on the terrace, or a private table 
                    in the canyon. Every meal becomes an experience when the Atacama sky is your ceiling.
                  </p>
                </div>

                <div className="bg-[#3a2a1a]/[0.04] p-8">
                  <h4
                    className="text-[#c9a96e] text-[10px] tracking-[0.2em] uppercase mb-6"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                  >
                    Meal Plans
                  </h4>
                  {[
                    { plan: "Room Only", desc: "Bed & breakfast included. À la carte dining available." },
                    { plan: "Half Board", desc: "Breakfast + dinner daily at Aira Restaurant." },
                    { plan: "All-Inclusive", desc: "All meals, premium beverages, and select experiences." },
                  ].map((mp) => (
                    <div key={mp.plan} className="mb-4 last:mb-0">
                      <h5
                        className="text-[#3a2a1a] text-sm mb-1"
                        style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                      >
                        {mp.plan}
                      </h5>
                      <p
                        className="text-[#5a4a3a]/50 text-xs"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {mp.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </SectionTracker>

      {/* ═══ MENU DETAILS ═══ */}
      <PropertyDiningSection
        dining={atacamaDiningCollection}
        bgClass="bg-[#f0ebe0]"
        headingColor="text-[#3a2a1a]"
        accentColor="bg-[#c9a96e]"
      />

      {/* ═══ STARGAZING ═══ */}
      <SectionTracker id="stargazing" onActive={() => setActiveSection("stargazing")}>
        <section className="py-20 md:py-28 px-6 md:px-10 bg-[#1a1a2e] text-white">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <p
                className="text-[#c9a96e] text-[11px] tracking-[0.3em] uppercase mb-4"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Nayara by Night
              </p>
              <h2
                className="text-white text-3xl md:text-4xl lg:text-5xl leading-tight mb-8"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                The Clearest Skies on Earth
              </h2>
            </Reveal>

            <Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
                <div>
                  <p
                    className="text-white/70 text-sm md:text-base leading-relaxed mb-6"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                  >
                    The Atacama Desert has the clearest, darkest skies on the planet — it's why the world's 
                    most powerful telescopes are built here. At Alto Atacama, stargazing isn't just an activity — 
                    it's our defining experience. Zero light pollution. 300+ clear nights per year. Stars so 
                    dense they look like spilled milk across the sky.
                  </p>
                  <p
                    className="text-white/70 text-sm md:text-base leading-relaxed mb-8"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                  >
                    We have our own private observatory with a professional-grade telescope, guided by expert 
                    astronomers who bring the cosmos to life. See Saturn's rings, Jupiter's moons, the Magellanic 
                    Clouds, and the galactic center of the Milky Way — all from the comfort of our desert oasis.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {["Private Observatory", "Expert Astronomers", "300+ Clear Nights", "Zero Light Pollution"].map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 border border-white/15 text-white/50 text-[10px] tracking-[0.15em] uppercase"
                        style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Placeholder for night sky imagery */}
                <div className="relative bg-white/5 aspect-[4/5] flex items-center justify-center">
                  <div className="text-center px-8">
                    <div className="text-4xl mb-4">✦</div>
                    <p
                      className="text-white/30 text-xs tracking-[0.1em] uppercase"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Night sky footage coming soon
                    </p>
                    <p
                      className="text-white/20 text-[10px] mt-2"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Professional stargazing photography in production
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </SectionTracker>

      {/* ═══ EXPERIENCES ═══ */}
      <SectionTracker id="experiences" onActive={() => setActiveSection("experiences")}>
        <section className="py-20 md:py-28 px-6 md:px-10">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <p
                className="text-[#c9a96e] text-[11px] tracking-[0.3em] uppercase mb-4"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Bespoke Experiences
              </p>
              <h2
                className="text-[#3a2a1a] text-3xl md:text-4xl leading-tight mb-6"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                Desert Expeditions
              </h2>
              <p
                className="text-[#5a4a3a]/70 text-sm md:text-base leading-relaxed max-w-2xl mb-12"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                Over 40 curated excursions across the Atacama — from sunrise at El Tatio Geysers to sunset 
                in the Valley of the Moon. Every expedition is led by expert local guides who know this 
                landscape intimately.
              </p>
            </Reveal>

            <Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Valley of the Moon",
                    category: "Landscape",
                    desc: "Walk through lunar formations and watch sunset paint the salt caverns in gold and crimson.",
                    duration: "Half day",
                  },
                  {
                    name: "El Tatio Geysers",
                    category: "Adventure",
                    desc: "Pre-dawn departure to the world's highest geyser field at 4,320m. Steam columns against the sunrise.",
                    duration: "Full day",
                  },
                  {
                    name: "Salar de Atacama",
                    category: "Wildlife",
                    desc: "Visit the vast salt flat where flamingos feed in turquoise lagoons against a volcanic backdrop.",
                    duration: "Half day",
                  },
                  {
                    name: "Stargazing Tour",
                    category: "Night Sky",
                    desc: "Private observatory session with expert astronomers. See Saturn's rings and the Milky Way's galactic center.",
                    duration: "2 hours",
                  },
                  {
                    name: "Machuca Village",
                    category: "Culture",
                    desc: "Visit a traditional Atacameño village at 4,000m. Meet local artisans and taste traditional empanadas.",
                    duration: "Half day",
                  },
                  {
                    name: "Horseback Canyon Ride",
                    category: "Adventure",
                    desc: "Ride through the Catarpe Valley's red rock canyons on horseback at golden hour.",
                    duration: "2 hours",
                  },
                ].map((exp) => (
                  <div key={exp.name} className="group border border-[#3a2a1a]/8 p-6 hover:border-[#c9a96e]/30 transition-colors">
                    <span
                      className="text-[#c9a96e] text-[9px] tracking-[0.2em] uppercase block mb-3"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                    >
                      {exp.category} · {exp.duration}
                    </span>
                    <h3
                      className="text-[#3a2a1a] text-lg mb-2"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                    >
                      {exp.name}
                    </h3>
                    <p
                      className="text-[#5a4a3a]/60 text-xs leading-relaxed"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                    >
                      {exp.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-8 text-center">
              <button
                onClick={() => navigate("/experiences")}
                className="text-[#c9a96e] text-[11px] tracking-[0.2em] uppercase border-b border-[#c9a96e]/30 pb-1 hover:border-[#c9a96e] transition-colors"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                View All Experiences →
              </button>
            </Reveal>
          </div>
        </section>
      </SectionTracker>

      {/* ═══ WELLNESS ═══ */}
      <SectionTracker id="wellness" onActive={() => setActiveSection("wellness")}>
        <section className="py-20 md:py-28 px-6 md:px-10 bg-[#3a2a1a]/[0.03]">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <p
                className="text-[#c9a96e] text-[11px] tracking-[0.3em] uppercase mb-4"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Spa Puri
              </p>
              <h2
                className="text-[#3a2a1a] text-3xl md:text-4xl leading-tight mb-6"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                Healing in the Desert
              </h2>
              <p
                className="text-[#5a4a3a]/70 text-sm md:text-base leading-relaxed max-w-2xl mb-12"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                "Puri" means water in Kunza, the native Atacameño language. Our spa honors this element 
                through treatments that draw on ancestral desert healing traditions — volcanic stone therapy, 
                salt crystal exfoliation, and rituals aligned with the four elements.
              </p>
            </Reveal>

            <Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Detox Experience",
                    element: "Water",
                    duration: "90 min",
                    desc: "Water circuit with steam and dry sauna, Scottish showers, coffee exfoliation, and full-body hydration.",
                  },
                  {
                    name: "Peace Escape",
                    element: "Air",
                    duration: "120 min",
                    desc: "Aromatherapy massage, cranial relaxation, and guided meditation in our desert sanctuary.",
                  },
                  {
                    name: "Ancestral Ritual",
                    element: "Earth",
                    duration: "90 min",
                    desc: "Volcanic stone therapy combined with native herb wraps and Atacameño healing traditions.",
                  },
                  {
                    name: "Desert Renewal",
                    element: "Fire",
                    duration: "120 min",
                    desc: "Salt crystal exfoliation, thermal wrap, and deep tissue massage under the desert sky.",
                  },
                ].map((treatment) => (
                  <div key={treatment.name} className="bg-white/50 p-6 border border-[#3a2a1a]/5">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="text-[#c9a96e] text-[9px] tracking-[0.2em] uppercase"
                        style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                      >
                        {treatment.element} · {treatment.duration}
                      </span>
                    </div>
                    <h3
                      className="text-[#3a2a1a] text-lg mb-2"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                    >
                      {treatment.name}
                    </h3>
                    <p
                      className="text-[#5a4a3a]/60 text-xs leading-relaxed"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                    >
                      {treatment.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-8 text-center">
              <button
                onClick={() => navigate("/wellness")}
                className="text-[#c9a96e] text-[11px] tracking-[0.2em] uppercase border-b border-[#c9a96e]/30 pb-1 hover:border-[#c9a96e] transition-colors"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Explore Wellness →
              </button>
            </Reveal>
          </div>
        </section>
      </SectionTracker>

      {/* ═══ SUSTAINABILITY ═══ */}
      <SectionTracker id="sustainability" onActive={() => setActiveSection("sustainability")}>
        <section className="py-20 md:py-28 px-6 md:px-10">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <p
                className="text-[#c9a96e] text-[11px] tracking-[0.3em] uppercase mb-4"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Sustainability
              </p>
              <h2
                className="text-[#3a2a1a] text-3xl md:text-4xl leading-tight mb-6"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                Desert Stewardship
              </h2>
            </Reveal>

            <Reveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "S Certification",
                    desc: "Chile's highest sustainability certification, recognizing our commitment to environmental, social, and economic responsibility.",
                  },
                  {
                    title: "Solar Energy",
                    desc: "The Atacama receives more solar radiation than almost anywhere on Earth. We harness it to heat pools, water, and power operations.",
                  },
                  {
                    title: "Water Conservation",
                    desc: "Advanced water recycling systems in the driest desert on Earth. Every drop is treated and reused for irrigation and landscaping.",
                  },
                ].map((item) => (
                  <div key={item.title} className="border border-[#3a2a1a]/8 p-6">
                    <h3
                      className="text-[#3a2a1a] text-lg mb-3"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-[#5a4a3a]/60 text-xs leading-relaxed"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-8 text-center">
              <button
                onClick={() => navigate("/sustainability")}
                className="text-[#c9a96e] text-[11px] tracking-[0.2em] uppercase border-b border-[#c9a96e]/30 pb-1 hover:border-[#c9a96e] transition-colors"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Our Sustainability Story →
              </button>
            </Reveal>
          </div>
        </section>
      </SectionTracker>

      {/* ── CTA Banner ── */}
      <Reveal>
        <section className="py-16 md:py-24 px-6 md:px-10 bg-[#3a2a1a] text-white text-center">
          <p
            className="text-white/40 text-[11px] tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            2 Michelin Keys · S Certified
          </p>
          <h2
            className="text-white text-2xl md:text-4xl mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Begin Your Desert Journey
          </h2>
          <p
            className="text-white/50 text-sm max-w-lg mx-auto mb-8"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            Experience the only luxury hotel in an actual desert oasis. Private observatory, 
            40+ curated excursions, and the clearest skies on Earth.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-white/30 hover:bg-white/10 transition-colors"
          >
            <span
              className="text-white text-[11px] tracking-[0.25em] uppercase"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Reserve Your Stay
            </span>
          </a>
        </section>
      </Reveal>

      <ExploreOurWorld />
      <Footer />
    </div>
  );
}

/* ── Section tracker for sticky nav highlighting ── */
function SectionTracker({
  id,
  onActive,
  children,
}: {
  id: string;
  onActive: () => void;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3 });

  useEffect(() => {
    if (isInView) onActive();
  }, [isInView, onActive]);

  return <div ref={ref}>{children}</div>;
}
