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
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";
import { useLocation } from "wouter";
import BlobVideo from "@/components/BlobVideo";
import { useIsMobile } from "@/hooks/useMobile";
import AwardWinningProperties from "@/components/AwardWinningProperties";

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

export default function Springs() {
  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(to bottom, #f5f3f0 0%, #e8e3db 40%, #ddd2c2 70%, #cfc1a8 90%, #c5b596 100%)" }}>
      <ScrollProgress />
      <BrandNavigation />
      <HeroHeader />
      <HomeIntroSection />
      <div className="h-2 md:h-4" />
      {/* ═══ EXPERIMENT 1: Editorial Award Strip ═══
         A dedicated section with Michelin Keys image + editorial text.
         To revert: remove <SpringsAwardStrip /> */}
      <SpringsAwardStrip />
      <AwardWinningProperties imageSrc="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/WORLD'SBESTAWARDS2024.(Presentation)_26483fca.jpg" />
      <RoomsSection />
      <GradientSpacer />
      <GradientSpacer />
      <GradientSpacer />
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
  const [resortsOpen, setResortsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [, navigate] = useLocation();

  /* Hide language button once scrolled past hero */
  useEffect(() => {
    const handleScroll = () => {
      setScrolledPastHero(window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
  const resortsRef = useRef<HTMLDivElement>(null);
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
      if (resortsRef.current && !resortsRef.current.contains(e.target as Node)) {
        setResortsOpen(false);
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

  /* Shared pill style — warm beige matching Nayara brand */
  const pillClass =
    "pointer-events-auto flex items-center justify-center rounded-full bg-[#ece8e1] backdrop-blur-md shadow-lg hover:bg-[#ece8e1]/90 transition-colors cursor-pointer border border-[#3a2a1a]/20";

  /* Shared dropdown panel style */
  const dropdownPanelClass =
    "absolute mt-2 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-[#3a2a1a]/10";

  return (
    <>
      {/* ── FIXED NAV: Hamburger | RESORTS | RESERVE — evenly spaced ── */}
      <div className="fixed top-2 left-0 right-0 z-50 flex items-center justify-between px-4 pointer-events-none">
        {/* LEFT: Hamburger + Resorts (desktop) */}
        <div className="pointer-events-auto flex items-center gap-3">
        <div ref={menuRef} className="relative">
          <button
            onClick={() => {
              setMenuOpen(!menuOpen);
              setExpandedSection(null);
              setReserveOpen(false);
              setLangOpen(false);
            }}
            className={`${pillClass} w-10 h-10`}
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
                className={`${dropdownPanelClass} left-0 top-full w-40`}
              >
                <div className="py-2">
                  {["Gallery", "Rooms", "Experiences", "Wellness", "Gastronomy", "Sustainability", "Press & Awards", "Blog & Podcast"].map((item) => {
                    const routes: Record<string, string> = {
                      "Gallery": "/gallery",
                      "Rooms": "/rooms",
                      "Experiences": "/experiences",
                      "Wellness": "/wellness",
                      "Gastronomy": "/gastronomy",
                      "Sustainability": "/sustainability",
                      "Press & Awards": "/awards",
                      "Blog & Podcast": "/blog",
                    };
                    return (
                      <button
                        key={item}
                        onClick={() => handleNavigate(routes[item])}
                        className="w-full text-left px-5 py-3 hover:bg-[#d4c9b8]/50 transition-colors"
                      >
                        <span
                          className="text-[#3a2a1a]/90 text-sm tracking-normal"
                          style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
                        >
                          {item}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Resorts pill + dropdown — next to hamburger on desktop, hides on scroll */}
        <div
          ref={resortsRef}
          className={`relative hidden md:block transition-all duration-300 ${scrolledPastHero ? 'opacity-0 pointer-events-none scale-90' : 'opacity-100 scale-100'}`}
        >
            <button
              onClick={() => {
                setResortsOpen(!resortsOpen);
                setMenuOpen(false);
                setReserveOpen(false);
                setLangOpen(false);
                setExpandedSection(null);
              }}
              className={`${pillClass} h-10 px-4`}
            >
              <span
                className="text-[#3a2a1a] text-xs tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Resorts
              </span>
            </button>

            {/* Resorts dropdown */}
            <AnimatePresence>
              {resortsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className={`${dropdownPanelClass} left-0 top-full w-56`}
                >
                  <div className="py-2">
                    {propertyLinks.map((prop) => (
                      <button
                        key={prop.label}
                        onClick={() => {
                          setResortsOpen(false);
                          if (prop.available) {
                            handleNavigate(prop.route);
                          } else {
                            handleComingSoon(prop.label);
                          }
                        }}
                        className="w-full text-left px-5 py-2.5 hover:bg-[#d4c9b8]/50 transition-colors"
                      >
                        <span
                          className={`text-sm tracking-normal ${
                            prop.available ? "text-[#3a2a1a]/90" : "text-[#3a2a1a]/40"
                          }`}
                          style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
                        >
                          {prop.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
        </div>

        </div>

        {/* Resorts pill — mobile only, centered */}
        <div
          ref={resortsRef}
          className="relative pointer-events-auto md:hidden"
        >
            <button
              onClick={() => {
                setResortsOpen(!resortsOpen);
                setMenuOpen(false);
                setReserveOpen(false);
                setLangOpen(false);
                setExpandedSection(null);
              }}
              className={`${pillClass} h-10 px-4`}
            >
              <span
                className="text-[#3a2a1a] text-xs tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Resorts
              </span>
            </button>

            {/* Resorts dropdown — mobile */}
            <AnimatePresence>
              {resortsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className={`${dropdownPanelClass} left-0 top-full w-56`}
                >
                  <div className="py-2">
                    {propertyLinks.map((prop) => (
                      <button
                        key={prop.label}
                        onClick={() => {
                          setResortsOpen(false);
                          if (prop.available) {
                            handleNavigate(prop.route);
                          } else {
                            handleComingSoon(prop.label);
                          }
                        }}
                        className="w-full text-left px-5 py-2.5 hover:bg-[#d4c9b8]/50 transition-colors"
                      >
                        <span
                          className={`text-sm tracking-normal ${
                            prop.available ? "text-[#3a2a1a]/90" : "text-[#3a2a1a]/40"
                          }`}
                          style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
                        >
                          {prop.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
        </div>

        {/* RIGHT: Language + Reserve */}
        <div className="flex items-center gap-3 pointer-events-auto">
          {/* Language pill — hidden on mobile, shown on desktop, hides on scroll */}
          <div
            ref={langRef}
            className={`hidden md:block relative transition-all duration-300 ${scrolledPastHero ? 'opacity-0 pointer-events-none scale-90' : 'opacity-100 scale-100'}`}
          >
            <button
              onClick={() => {
                setLangOpen(!langOpen);
                setMenuOpen(false);
                setReserveOpen(false);
                setExpandedSection(null);
              }}
              className={`${pillClass} h-10 px-4 gap-2`}
            >
              <svg className="w-4 h-4 text-[#3a2a1a]/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              <span
                className="text-[#3a2a1a] text-xs tracking-[0.15em] uppercase"
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
                        className={`w-full text-left px-5 py-2.5 hover:bg-[#d4c9b8]/50 transition-colors flex items-center justify-between ${
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
            className={`${pillClass} h-10 px-4`}
          >
              <span
                className="text-[#3a2a1a] text-xs tracking-[0.2em] uppercase"
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
                      className="w-full text-left px-5 py-3 hover:bg-[#d4c9b8]/50 transition-colors flex items-center justify-between"
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

  const heroVideo = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-hero-horizontal-hq_c0efb638.mp4";

  return (
    <>
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video background — matches spherical nay-hero structure */}
      <div className="absolute inset-0">
        <BlobVideo
          src={heroVideo}
          className="w-full h-full object-cover"
          autoPlay={true}
          muted={true}
          loop={true}
          playsInline={true}
          controls={false}
        />
      </div>

      {/* Nayara Springs text — centered on hero (desktop only) */}
      <motion.div
        className="absolute top-2 left-0 right-0 z-10 hidden md:flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <a
          href="/"
          className="text-[#ece8e1] drop-shadow-md cursor-pointer hover:opacity-80 transition-opacity"
          style={{ fontFamily: "'Montserrat', 'Arial', sans-serif", fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 26px)', letterSpacing: '2px', lineHeight: 1, textDecoration: 'none' }}
        >
          NAYARA SPRINGS
        </a>
      </motion.div>

      {/* Content — centered bottom */}
      <div className="absolute inset-0 flex flex-col justify-end items-center px-5 z-10 pb-[5vh]">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-[#ece8e1] max-w-[1052px]"
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 400,
            fontSize: 'clamp(26px, 3.5vw, 38px)',
            lineHeight: 1,
          }}
        >
          Adults-Only Private Hot Springs Villas
        </motion.h1>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="w-24 h-px bg-[#ece8e1]/40 mt-4 origin-center"
        />

        {/* Location subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#ece8e1]/70 text-[12px] md:text-[14px] uppercase tracking-[0.15em] mt-4"
          style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}
        >
          <span className="text-[#ece8e1]/40 mr-3">—</span>
          Arenal Volcano National Park, Costa Rica
          <span className="text-[#ece8e1]/40 ml-3">—</span>
        </motion.p>

      </div>
    </section>

    {/* Mobile-only full-width image */}
    <div className="md:hidden w-screen" style={{ marginLeft: 'calc(-50vw + 50%)', paddingTop: '10px' }}>
      <img
        src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-s1-pools_8e255e18.png"
        alt="Private hot spring pools nestled in rainforest at Nayara Springs"
        className="w-full h-auto object-cover"
        loading="eager"
      />
    </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HOME INTRO — Two-column layout matching Home/Gardens pattern
   ═══════════════════════════════════════════════════════════════ */
function HomeIntroSection() {
  return (
    <>
      {/* Mobile: S1 full-width vertical image BEFORE text */}
      <div className="md:hidden w-full" style={{ paddingTop: 'clamp(16px, 3vw, 32px)' }}>
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-s1-pools_8e255e18.png"
          alt="Private hot spring pools nestled in rainforest at Nayara Springs"
          className="w-full h-auto object-cover"
          loading="eager"
        />
      </div>

      <section
        className="w-full"
        style={{
          paddingTop: 'clamp(20px, 3vw, 40px)',
          paddingBottom: 0,
        }}
      >
        {/* Two-column layout — desktop: text left + image right; mobile: text only */}
        <div
          className="flex flex-col md:flex-row items-start mx-auto"
          style={{ maxWidth: '1440px', gap: 'clamp(40px, 8vw, 115px)', padding: '0 0 0 clamp(24px, 8vw, 121px)' }}
        >
          {/* EXPERIMENT 2: Scroll-linked text reveal — each element fades/slides in
             as it enters the viewport, creating a reading spotlight effect.
             To revert: remove ScrollRevealText wrappers, use plain divs. */}
          <div className="flex flex-col gap-10 md:flex-1 mt-10 md:mt-16">
            <ScrollRevealText delay={0}>
              <h2
                className="text-[#4B4A4A]"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 400,
                  fontSize: 'clamp(20px, 2.5vw, 28px)',
                  lineHeight: 1.3,
                }}
              >
                Romance without Distraction<br />Wellness without Walls
              </h2>
            </ScrollRevealText>
            <ScrollRevealText delay={0.15}>
              <p
                className="text-[#4B4A4A]"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 400,
                  fontSize: '15px',
                  lineHeight: '22.5px',
                }}
              >
                Hidden within the rainforest surrounding Arenal Volcano, Nayara Springs is an adults-only Relais & Châteaux retreat built around hot springs, romance, and exceptional dining. Every villa has its own volcanic hot spring plunge pool screened by tropical gardens, and the spa draws its rituals from the geothermal earth and forest botanicals that surround it. Here, privacy is not a perk. It is the entire point.
              </p>
            </ScrollRevealText>

            {/* ═══ EXPERIMENT 4: Inline Award Ribbon ═══
               Michelin Keys woven into the text column as a subtle accent.
               To revert: remove this ScrollRevealText block. */}
            <ScrollRevealText delay={0.25}>
              <div className="hidden md:flex items-center gap-5 py-4">
                <div className="h-px flex-1 bg-[#4B4A4A]/15" />
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/michelin-3-keys_10864925.png"
                  alt="3 Michelin Keys"
                  className="h-8 w-auto"
                  style={{ filter: 'brightness(0) saturate(100%) invert(30%) sepia(10%) saturate(300%) hue-rotate(350deg)' }}
                />
                <span
                  className="text-[#4B4A4A]/50 text-[11px] tracking-[0.15em] uppercase whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
                >
                  First in Costa Rica
                </span>
                <div className="h-px flex-1 bg-[#4B4A4A]/15" />
              </div>
            </ScrollRevealText>

            <ScrollRevealText delay={0.3}>
              <a
                href="/about"
                className="text-[#4B4A4A] underline underline-offset-4 decoration-[#4B4A4A]/40 hover:decoration-[#4B4A4A] transition-all inline-block"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 400,
                  fontSize: '15px',
                }}
              >
                Our Story
              </a>
            </ScrollRevealText>
          </div>

          {/* Right: image - Desktop only (3:4 aspect ratio) */}
          <div className="hidden md:flex md:flex-1 md:mr-[-24px]">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-s1-pools_8e255e18.png"
              alt="Private hot spring pools nestled in rainforest at Nayara Springs"
              className="w-full object-cover"
              style={{ aspectRatio: '3/4' }}
              loading="eager"
            />
          </div>
        </div>
      </section>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ROOMS SECTION — Flipped layout: image left, text right
   ═══════════════════════════════════════════════════════════════ */
function RoomsSection() {
  return (
    <section
      className="w-full"
      style={{
        paddingTop: 'clamp(8px, 2vw, 16px)',
        paddingBottom: 0,
      }}
    >
      <div
        className="flex flex-col md:flex-row items-start mx-auto"
        style={{ maxWidth: '1440px', gap: 'clamp(40px, 8vw, 115px)', padding: '0 clamp(24px, 8vw, 121px) 0 0' }}
      >
        {/* Left: image (3:4 aspect ratio) */}
        <div className="hidden md:flex md:flex-1 md:ml-[-24px]">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-s3-robe-canopy_c9c365ff.jpg"
            alt="Luxury room with canopy bed at Nayara Springs"
            className="w-full object-cover"
            style={{ aspectRatio: '3/4' }}
            loading="lazy"
          />
        </div>

        {/* Right: text content */}
        <div className="flex flex-col gap-10 md:flex-1 mt-10 md:mt-16 px-6 md:px-0">
          <h2
            className="text-[#4B4A4A]"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 400,
              fontSize: 'clamp(20px, 2.5vw, 28px)',
              lineHeight: 1.3,
            }}
          >
            Rooms
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
            Each villa at Nayara Springs is a private sanctuary, complete with its own natural hot spring plunge pool, outdoor garden shower, and indoor-outdoor living spaces that dissolve the boundary between comfort and nature. Handcrafted furnishings, tropical hardwoods, and floor-to-ceiling windows frame views of the Arenal Volcano and surrounding rainforest canopy.
          </p>
          <a
            href="/rooms"
            className="text-[#4B4A4A] underline underline-offset-4 decoration-[#4B4A4A]/40 hover:decoration-[#4B4A4A] transition-all"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 400,
              fontSize: '15px',
            }}
          >
            Explore Our Rooms
          </a>
        </div>
      </div>

      {/* Mobile-only full-width image */}
      <div className="md:hidden w-screen" style={{ marginLeft: 'calc(-50vw + 50%)', paddingTop: '10px' }}>
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-s3-robe-canopy_c9c365ff.jpg"
          alt="Luxury room with canopy bed at Nayara Springs"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>
    </section>
  );
}

function GradientSpacer() {
  return (
    <section
      className="w-full"
      style={{
        paddingTop: 'clamp(120px, 24vw, 240px)',
        paddingBottom: 'clamp(120px, 24vw, 240px)',
      }}
    />
  );
}


/* ═══════════════════════════════════════════════════════════
   EXPERIMENT 2: Scroll-Linked Text Reveal
   Each text block fades up and slides in when scrolled into view,
   with staggered delays for a reading spotlight effect.
   To revert: remove ScrollRevealText wrappers, use plain content.
   ═══════════════════════════════════════════════════════════ */
function ScrollRevealText({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}


/* ═══════════════════════════════════════════════════════════
   EXPERIMENT 1: Editorial Award Strip
   A dedicated section between intro and rooms with 3 Michelin Keys
   displayed in an elegant editorial layout — large keys image on left,
   editorial text on right with thin rule separators.
   To revert: remove <SpringsAwardStrip /> from the main component.
   ═══════════════════════════════════════════════════════════ */
function SpringsAwardStrip() {
  return (
    <section className="hidden md:block w-full" style={{ padding: 'clamp(60px, 10vw, 120px) 0' }}>
      <div
        className="mx-auto flex items-center"
        style={{ maxWidth: '1440px', padding: '0 clamp(24px, 8vw, 121px)' }}
      >
        {/* Left: Michelin Keys image */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/michelin-3-keys_10864925.png"
            alt="3 Michelin Keys"
            className="h-20 w-auto"
            style={{ filter: 'brightness(0) saturate(100%) invert(15%) sepia(40%) saturate(500%) hue-rotate(350deg)' }}
          />
        </motion.div>

        {/* Vertical divider */}
        <motion.div
          className="h-24 w-px bg-[#3a2a1a]/20 mx-10 flex-shrink-0"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* Right: Editorial text */}
        <motion.div
          className="flex flex-col gap-2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="text-[#3a2a1a]/40 text-[10px] tracking-[0.3em] uppercase"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}
          >
            Michelin Guide 2025
          </span>
          <span
            className="text-[#3a2a1a] text-[22px]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, lineHeight: 1.3 }}
          >
            Three Michelin Keys
          </span>
          <span
            className="text-[#3a2a1a]/60 text-[13px]"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}
          >
            The first hotel in Costa Rica to receive this distinction
          </span>
        </motion.div>
      </div>
    </section>
  );
}
