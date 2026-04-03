/*
 * NAYARA BESPOKE EXPERIENCES — Landing Page
 * Design: "Desert Codex" — Editorial Cartography
 * Property selector showcasing all Nayara destinations
 * Typography: Playfair Display (display) + DM Sans (body)
 * Rule: Real photos only. No AI-generated imagery.
 *
 * ANIMATION SHOWCASE:
 * - Parallax hero with scroll-linked zoom
 * - Staggered text reveals
 * - Scroll progress indicator
 * - Counter animations on stats
 * - Enhanced section transitions
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import BlobVideo from "@/components/BlobVideo";
import { useIsMobile } from "@/hooks/useMobile";
import AwardWinningProperties from "@/components/AwardWinningProperties";
import ExploreOurWorld from "@/components/ExploreOurWorld";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { hotelBookingLinks } from "@/data/booking";

/* ── Property menu links ── */
const propertyLinks = [
  { label: "Nayara Alto Atacama", route: "/alto-atacama", available: true },
  { label: "Nayara Gardens", route: "/gardens", available: true },
  { label: "Nayara Springs", route: "/springs", available: true },
  { label: "Nayara Tented Camp", route: "/tented-camp", available: true },
  { label: "Nayara Hangaroa", route: "/hangaroa", available: true },
  { label: "Nayara Bocas del Toro", route: "/bocas-del-toro", available: true },
];

/* ── Language options ── */
const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "pt", label: "Português" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "it", label: "Italiano" },
  { code: "ja", label: "日本語" },
  { code: "zh", label: "中文" },
];

/* ── Nav menu sections ── */
const dropdownSections = ["Experiences", "Wellness"];

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(to bottom, #f7f5f0 0%, #f6f3ec 40%, #f4f0e8 70%, #f1ece4 90%, #eee8df 100%)" }}>
      <ScrollProgress />
      <BrandNavigation />
      <HeroHeader />
      <HomeIntroSection />
      <SectionDivider />
      <AwardWinningProperties />
      <SectionDivider />
      <ExploreOurWorld />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION DIVIDER — Animated horizontal line that draws on scroll
   ═══════════════════════════════════════════════════════════════ */
function SectionDivider() {
  return (
    <div className="max-w-[1300px] mx-auto px-6 md:px-10">
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-[#3a2a1a]/15 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BRAND NAVIGATION
   Fixed: Hamburger (left) + Reserve (right) — follow scroll
   Static: Logo (left-center) + Language (right-center) — stay at top
   ═══════════════════════════════════════════════════════════════ */
function BrandNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [reserveOpen, setReserveOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [, navigate] = useLocation();

  /* Date picker state for Reserve dropdown */
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date(today);
  dayAfter.setDate(dayAfter.getDate() + 3);
  const formatDate = (d: Date) => d.toISOString().split("T")[0];
  const [checkIn, setCheckIn] = useState(formatDate(tomorrow));
  const [checkOut, setCheckOut] = useState(formatDate(dayAfter));

  const menuRef = useRef<HTMLDivElement>(null);
  const reserveRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  /* Close dropdowns on outside click */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
        setExpandedSection(null);
      }
      if (reserveRef.current && !reserveRef.current.contains(e.target as Node)) {
        setReserveOpen(false);
      }
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleNavigate = (route: string) => {
    setMenuOpen(false);
    setExpandedSection(null);
    navigate(route);
  };

  const handleComingSoon = (label: string) => {
    setMenuOpen(false);
    setExpandedSection(null);
    import("sonner").then(({ toast }) => toast(label + " — Coming Soon"));
  };

  const handleLangSelect = (code: string) => {
    setSelectedLang(code);
    setLangOpen(false);
    if (code !== "en") {
      import("sonner").then(({ toast }) =>
        toast("Translation coming soon — the chatbot already speaks this language!")
      );
    }
  };

  const handleBooking = (hotel: typeof hotelBookingLinks[0]) => {
    setReserveOpen(false);
    if (hotel.available) {
      /* Append arrive/depart dates to SynXis URL */
      const url = new URL(hotel.url);
      if (checkIn) url.searchParams.set("arrive", checkIn);
      if (checkOut) url.searchParams.set("depart", checkOut);
      window.open(url.toString(), "_blank");
    } else {
      import("sonner").then(({ toast }) => toast(hotel.label + " — Booking Coming Soon"));
    }
  };

  const currentLang = languages.find((l) => l.code === selectedLang);

  /* Shared pill style */
  const pillClass =
    "pointer-events-auto flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md shadow-lg hover:bg-white/95 transition-all duration-300 cursor-pointer";

  /* Shared dropdown panel style */
  const dropdownPanelClass =
    "absolute mt-2 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-[#3a2a1a]/10";

  return (
    <>
      {/* ── FIXED NAV: Hamburger (left) + Reserve (right) ── */}
      <div className="fixed top-6 left-6 right-6 z-50 flex items-center justify-between pointer-events-none">
        {/* LEFT: Hamburger pill + Language */}
        <div className="flex items-center gap-3 pointer-events-auto">
        <div ref={menuRef} className="relative">
          <button
            onClick={() => {
              setMenuOpen(!menuOpen);
              setExpandedSection(null);
              setReserveOpen(false);
              setLangOpen(false);
            }}
            className={`${pillClass} w-12 h-12`}
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block w-5 h-px bg-[#3a2a1a] transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
                }`}
              />
              <span
                className={`block w-5 h-px bg-[#3a2a1a] transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
                }`}
              />
            </div>
          </button>

          {/* Hamburger dropdown */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className={`${dropdownPanelClass} left-0 top-full w-64`}
              >
                <div className="py-2">
                  {/* Our Resorts */}
                  <button
                    onClick={() => handleComingSoon("Our Resorts")}
                    className="w-full text-left px-5 py-3 hover:bg-[#3a2a1a]/5 transition-colors"
                  >
                    <span
                      className="text-[#3a2a1a]/90 text-[11px] tracking-[0.2em] uppercase"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                    >
                      Our Resorts
                    </span>
                  </button>

                  {/* Gallery */}
                  <button
                    onClick={() => handleNavigate("/gallery")}
                    className="w-full text-left px-5 py-3 hover:bg-[#3a2a1a]/5 transition-colors"
                  >
                    <span
                      className="text-[#3a2a1a]/90 text-[11px] tracking-[0.2em] uppercase"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                    >
                      Gallery
                    </span>
                  </button>

                  {/* Experiences & Wellness with sub-dropdowns */}
                  {dropdownSections.map((section) => (
                    <div key={section}>
                      <button
                        onClick={() => toggleSection(section)}
                        className="w-full flex items-center justify-between px-5 py-3 hover:bg-[#3a2a1a]/5 transition-colors"
                      >
                        <span
                          className="text-[#3a2a1a]/90 text-[11px] tracking-[0.2em] uppercase"
                          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                        >
                          {section}
                        </span>
                        <svg
                          className={`w-3 h-3 text-[#3a2a1a]/40 transition-transform duration-200 ${
                            expandedSection === section ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </button>

                      <AnimatePresence>
                        {expandedSection === section && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-8 pr-5 pb-2 flex flex-col">
                              {propertyLinks.map((prop) => (
                                <button
                                  key={prop.label}
                                  onClick={() =>
                                    prop.available
                                      ? handleNavigate(prop.route)
                                      : handleComingSoon(prop.label)
                                  }
                                  className="text-left py-2 flex items-center gap-2"
                                >
                                  <span
                                    className={`text-[11px] tracking-[0.08em] ${
                                      prop.available
                                        ? "text-[#3a2a1a]/70 hover:text-[#3a2a1a]"
                                        : "text-[#3a2a1a]/30"
                                    } transition-colors`}
                                    style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                                  >
                                    {prop.label}
                                  </span>
                                  {!prop.available && (
                                    <span className="text-[8px] tracking-[0.12em] uppercase text-[#3a2a1a]/25 border border-[#3a2a1a]/15 px-1.5 py-0.5 rounded-sm">
                                      Soon
                                    </span>
                                  )}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}

                  {/* Divider */}
                  <div className="mx-5 my-1 h-px bg-white/10" />

                  {/* Experiences */}
                  <button
                    onClick={() => handleNavigate("/experiences")}
                    className="w-full text-left px-5 py-3 hover:bg-[#3a2a1a]/5 transition-colors"
                  >
                    <span
                      className="text-[#3a2a1a]/90 text-[11px] tracking-[0.2em] uppercase"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                    >
                      Experiences
                    </span>
                  </button>

                  {/* Wellness */}
                  <button
                    onClick={() => handleNavigate("/wellness")}
                    className="w-full text-left px-5 py-3 hover:bg-[#3a2a1a]/5 transition-colors"
                  >
                    <span
                      className="text-[#3a2a1a]/90 text-[11px] tracking-[0.2em] uppercase"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                    >
                      Wellness
                    </span>
                  </button>

                  {/* Gastronomy */}
                  <button
                    onClick={() => handleNavigate("/gastronomy")}
                    className="w-full text-left px-5 py-3 hover:bg-[#3a2a1a]/5 transition-colors"
                  >
                    <span
                      className="text-[#3a2a1a]/90 text-[11px] tracking-[0.2em] uppercase"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                    >
                      Gastronomy
                    </span>
                  </button>

                  {/* Sustainability */}
                  <button
                    onClick={() => handleNavigate("/sustainability")}
                    className="w-full text-left px-5 py-3 hover:bg-[#3a2a1a]/5 transition-colors"
                  >
                    <span
                      className="text-[#3a2a1a]/90 text-[11px] tracking-[0.2em] uppercase"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                    >
                      Sustainability
                    </span>
                  </button>

                  {/* Awards */}
                  <button
                    onClick={() => handleNavigate("/awards")}
                    className="w-full text-left px-5 py-3 hover:bg-[#3a2a1a]/5 transition-colors"
                  >
                    <span
                      className="text-[#3a2a1a]/90 text-[11px] tracking-[0.2em] uppercase"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                    >
                      Awards
                    </span>
                  </button>

                  {/* Press */}
                  <button
                    onClick={() => handleNavigate("/press")}
                    className="w-full text-left px-5 py-3 hover:bg-[#3a2a1a]/5 transition-colors"
                  >
                    <span
                      className="text-[#3a2a1a]/90 text-[11px] tracking-[0.2em] uppercase"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                    >
                      Press
                    </span>
                  </button>

                  {/* Journal */}
                  <button
                    onClick={() => handleNavigate("/journal")}
                    className="w-full text-left px-5 py-3 hover:bg-[#3a2a1a]/5 transition-colors"
                  >
                    <span
                      className="text-[#3a2a1a]/90 text-[11px] tracking-[0.2em] uppercase"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                    >
                      Journal
                    </span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        </div>

        {/* RIGHT: Language + Reserve */}
        <div className="flex items-center gap-3 pointer-events-auto">
          {/* Language pill + dropdown */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => {
                setLangOpen(!langOpen);
                setMenuOpen(false);
                setReserveOpen(false);
                setExpandedSection(null);
              }}
              className={`${pillClass} h-12 px-5 gap-2`}
            >
              <svg className="w-4 h-4 text-[#3a2a1a]/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              <span
                className="text-[#3a2a1a] text-[11px] tracking-[0.15em] uppercase"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                {currentLang?.code.toUpperCase()}
              </span>
            </button>

            {/* Language dropdown */}
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className={`${dropdownPanelClass} right-0 top-full w-48`}
                >
                  <div className="py-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLangSelect(lang.code)}
                        className={`w-full text-left px-5 py-2.5 hover:bg-[#3a2a1a]/5 transition-colors flex items-center justify-between ${
                          selectedLang === lang.code ? "bg-[#3a2a1a]/5" : ""
                        }`}
                      >
                        <span
                          className="text-[#3a2a1a]/90 text-[11px] tracking-[0.08em]"
                          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                        >
                          {lang.label}
                        </span>
                        {selectedLang === lang.code && (
                          <svg className="w-3 h-3 text-[#3a2a1a]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Reserve pill + dropdown */}
          <div ref={reserveRef} className="relative">
          <button
            onClick={() => {
              setReserveOpen(!reserveOpen);
              setMenuOpen(false);
              setLangOpen(false);
              setExpandedSection(null);
            }}
            className={`${pillClass} h-12 px-6`}
          >
              <span
                className="text-[#3a2a1a] text-[11px] tracking-[0.25em] uppercase"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Reserve
            </span>
          </button>

          {/* Reserve dropdown with date picker */}
          <AnimatePresence>
            {reserveOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className={`${dropdownPanelClass} right-0 top-full w-72`}
              >
                {/* Date selectors */}
                <div className="px-5 pt-4 pb-3 border-b border-white/10">
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <label
                        className="block text-[9px] tracking-[0.15em] uppercase text-[#3a2a1a]/40 mb-1.5"
                        style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                      >
                        Check-in
                      </label>
                      <input
                        type="date"
                        value={checkIn}
                        min={formatDate(today)}
                        onChange={(e) => {
                          setCheckIn(e.target.value);
                          /* Auto-adjust checkout if before new checkin */
                          if (e.target.value >= checkOut) {
                            const next = new Date(e.target.value);
                            next.setDate(next.getDate() + 1);
                            setCheckOut(formatDate(next));
                          }
                        }}
                        className="w-full bg-[#3a2a1a]/5 border border-[#3a2a1a]/15 rounded-lg px-2.5 py-2 text-[#3a2a1a] text-[11px] focus:outline-none focus:border-[#3a2a1a]/30 transition-colors"
                        style={{ fontFamily: "var(--font-body)" }}
                      />
                    </div>
                    <div className="flex-1">
                      <label
                        className="block text-[9px] tracking-[0.15em] uppercase text-[#3a2a1a]/40 mb-1.5"
                        style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                      >
                        Check-out
                      </label>
                      <input
                        type="date"
                        value={checkOut}
                        min={checkIn || formatDate(tomorrow)}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full bg-[#3a2a1a]/5 border border-[#3a2a1a]/15 rounded-lg px-2.5 py-2 text-[#3a2a1a] text-[11px] focus:outline-none focus:border-[#3a2a1a]/30 transition-colors"
                        style={{ fontFamily: "var(--font-body)" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Hotel list */}
                <div className="py-2">
                  <div
                    className="px-5 py-1.5"
                  >
                    <span
                      className="text-[9px] tracking-[0.15em] uppercase text-[#3a2a1a]/30"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                    >
                      Select property
                    </span>
                  </div>
                  {hotelBookingLinks.map((hotel) => (
                    <button
                      key={hotel.label}
                      onClick={() => handleBooking(hotel)}
                      className="w-full text-left px-5 py-3 hover:bg-[#3a2a1a]/5 transition-colors flex items-center justify-between"
                    >
                      <span
                        className={`text-[11px] tracking-[0.08em] ${
                          hotel.available ? "text-[#3a2a1a]/90" : "text-[#3a2a1a]/35"
                        }`}
                        style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                      >
                        {hotel.label}
                      </span>
                      {!hotel.available && (
                        <span className="text-[8px] tracking-[0.12em] uppercase text-[#3a2a1a]/25 border border-[#3a2a1a]/15 px-1.5 py-0.5 rounded-sm">
                          Soon
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO HEADER — Enhanced with parallax, staggered reveals,
   scroll-linked zoom, and animated scroll indicator
   ═══════════════════════════════════════════════════════════════ */
function HeroHeader() {
  const isMobile = useIsMobile();

  const heroVideo = isMobile
    ? "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/compressed-landing-vertical_a7242694.mp4"
    : "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/homepage-hero-new-resorts_d66da8e1.mp4";

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video background — matches spherical nay-hero structure */}
      <div className="absolute inset-0">
        <BlobVideo
          src={heroVideo}
          className="w-full h-full object-cover"
        />
      </div>

       {/* Nayara leaf logo — white translucent circle + NAYARA text */}
      <motion.div
        className="absolute top-0 left-0 right-0 z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Translucent white circle — half above viewport edge */}
        <div className="-mt-6 w-24 h-24 md:w-28 md:h-28 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara-leaf-only-white_2720a721.png"
            alt="Nayara"
            className="h-14 md:h-18 w-auto opacity-95"
          />
        </div>
        <span
          className="text-white text-xl md:text-3xl tracking-[0.3em] uppercase mt-3 drop-shadow-md"
          style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
        >
          Nayara
        </span>
      </motion.div>

      {/* Content — centered bottom, matching spherical nay-hero__content */}
      <div className="absolute inset-0 flex flex-col justify-end items-center px-5 z-10">
        <h1
          className="text-center text-[#fcf8f5] mb-[50px] md:mb-[85px] max-w-[1052px]"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            fontSize: 'clamp(32px, 5vw, 50px)',
            letterSpacing: '-2px',
            lineHeight: 1,
          }}
        >
          Luxury Resorts Rooted in Nature
        </h1>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HOME INTRO — Two-column layout matching spherical Welcome section
   ═══════════════════════════════════════════════════════════════ */
function HomeIntroSection() {
  return (
    <section
      className="w-full"
      style={{
        paddingTop: 'clamp(40px, 8vw, 80px)',
        paddingBottom: 0,
      }}
    >
      {/* Two-column layout matching spherical nay-banner--layout-two-cols-image */}
      <div
        className="flex flex-col md:flex-row items-center mx-auto"
        style={{ maxWidth: '1440px', gap: 'clamp(40px, 8vw, 115px)', padding: '0 24px 0 clamp(24px, 8vw, 121px)' }}
      >
        {/* Left: text content */}
        <div className="flex flex-col gap-10 md:flex-1">
          <h2
            className="text-[#4B4A4A]"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 400,
              fontSize: 'clamp(28px, 4vw, 42px)',
              lineHeight: 1.3,
            }}
          >
            A Family of Award-Winning Properties Designed Around Destination
          </h2>
          <p
            className="text-[#4B4A4A]"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: '22.5px',
            }}
          >
            Our resorts belong to the land. In Costa Rica, lush rainforest and mineral hot springs greet you at the foot of Arenal Volcano. In Chile’s Atacama, the world’s driest desert becomes a place of stillness and discovery. On Easter Island, silent giants stand guard and Rapa Nui culture is ever-present. On a private island on Panama’s Caribbean coast, overwater villas rise above the reef. Six properties. Three countries. All designed to bring guests back to nature and leave every ecosystem stronger than we found it.
          </p>
          <a
            href="/about"
            className="text-[#4B4A4A] underline underline-offset-4 decoration-[#4B4A4A]/40 hover:decoration-[#4B4A4A] transition-all"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 400,
              fontSize: '15px',
            }}
          >
            The Nayara Story
          </a>
        </div>

        {/* Right: image */}
        <div className="md:flex-1">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/sphrcl-homepage-bridge-woman_258547cb.png"
            alt="Woman walking on rainforest bridge at Nayara"
            className="w-full h-auto object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
