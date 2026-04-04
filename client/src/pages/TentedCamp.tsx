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

export default function TentedCamp() {
  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(to bottom, #ece8e1 0%, #eae5de 40%, #e8e3db 70%, #e5e0d8 90%, #e2ddd5 100%)" }}>
      <ScrollProgress />
      <BrandNavigation />
      <HeroHeader />
      <HomeIntroSection />
      <div className="h-2 md:h-4" />
      <AwardWinningProperties imageSrc="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/340C7D71-BAF3-4215-B25E-98878C4B65F6_48b343e5.JPEG" />
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

  const heroVideo = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/homepage-hero-new-resorts_d66da8e1.mp4";

  return (
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

      {/* Nayara Tented Camp text — centered on hero */}
      <motion.div
        className="absolute top-2 left-0 right-0 z-10 flex justify-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <a
          href="/"
          className="text-[#ece8e1] drop-shadow-md cursor-pointer hover:opacity-80 transition-opacity"
          style={{ fontFamily: "'Montserrat', 'Arial', sans-serif", fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 26px)', letterSpacing: '2px', lineHeight: 1, textDecoration: 'none' }}
        >
          NAYARA TENTED CAMP
        </a>
      </motion.div>

      {/* Content — centered bottom */}
      <div className="absolute inset-0 flex flex-col justify-end items-center px-5 z-10 pb-[5vh]">
        {/* EXPERIMENT: Word-by-word staggered reveal
           Each word fades up individually for a cinematic entrance.
           To revert: replace with original single <motion.h1> */}
        <h1
          className="text-center text-[#ece8e1] max-w-[1052px] flex flex-wrap justify-center gap-x-[0.3em]"
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 400,
            fontSize: 'clamp(26px, 3.5vw, 38px)',
            lineHeight: 1.15,
          }}
        >
          {"Luxury Tented Camp Immersed in the Rainforest".split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.6 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

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
  );
}

/* ═══════════════════════════════════════════════════════════════
   HOME INTRO — Two-column layout matching spherical Welcome section
   ═══════════════════════════════════════════════════════════════ */
function HomeIntroSection() {
  return (
    <>
      {/* Mobile: S1 full-width vertical image BEFORE text */}
      <div className="md:hidden w-full" style={{ paddingTop: 'clamp(16px, 3vw, 32px)' }}>
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/pasted_file_gxCsYs_20-cropped_c9c2c33f.jpg"
          alt="Tented Camp at Nayara"
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
          {/* Left: text content */}
          <div className="flex flex-col gap-10 md:flex-1 mt-10 md:mt-16">
            <h2
              className="text-[#4B4A4A]"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 400,
                fontSize: 'clamp(20px, 2.5vw, 28px)',
                lineHeight: 1.3,
              }}
            >
              Award-Winning Properties<br />Defined by Destination
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
              Our resorts belong to the land. In Costa Rica, lush rainforest and mineral hot springs greet you at the foot of Arenal Volcano. In Chile's Atacama, the world's driest desert becomes a place of stillness and discovery. On Easter Island, silent giants stand guard and Rapa Nui culture is ever-present. On a private island on Panama's Caribbean coast, overwater villas rise above the reef. Six properties. Three countries. All designed to bring guests back to nature and leave every ecosystem stronger than we found it.
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

          {/* Right: image — NTC S1 (Desktop only) */}
          <div className="hidden md:flex md:flex-1 md:mr-[-24px]">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/pasted_file_gxCsYs_20-cropped_c9c2c33f.jpg"
              alt="Tented Camp at Nayara"
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
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tented-s3-rooms_0707176b.jpg"
            alt="Luxury tent with private pool at Nayara Tented Camp"
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
            Nayara Tented Camp redefines glamping with spacious safari-style tents perched above the rainforest canopy. Each tent features a private plunge pool, open-air deck with hammock, and interiors appointed with handcrafted furnishings and artisan textiles — all framing panoramic views of the Arenal Volcano and surrounding jungle.
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
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tented-s3-rooms_0707176b.jpg"
          alt="Luxury tent with private pool at Nayara Tented Camp"
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
