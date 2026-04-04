/**
 * NAYARA EXPERIENCES — Brand Page
 * Nav is exact copy of Home page BrandNavigation
 * Sections: Nav → Hero Video → Footer
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { useIsMobile } from "@/hooks/useMobile";
import BlobVideo from "@/components/BlobVideo";
import Footer from "@/components/Footer";
import { hotelBookingLinks } from "@/data/booking";

/* ── CDN Assets ── */
const CDN = {
  heroVertical:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Video_Nayara_Atacama00003_aeb971e9.MP4",
  heroHorizontal:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Video_Nayara_Atacama00007_8576aa55.MP4",
};

/* ── Property menu links ── */
const propertyLinks = [
  { label: "Nayara Resorts", route: "/", available: true },
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

export default function Experiences() {
  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <BrandNavigation />
      <HeroSection />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BRAND NAVIGATION — Exact copy of Home page nav
   Hamburger + Resorts (left) | Language + Reserve (right)
   ═══════════════════════════════════════════════════════════════ */
function BrandNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [reserveOpen, setReserveOpen] = useState(false);
  const [resortsOpen, setResortsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");
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

  const handleNavigate = (route: string) => {
    setMenuOpen(false);
    setResortsOpen(false);
    setReserveOpen(false);
    setLangOpen(false);
    navigate(route);
  };

  const handleComingSoon = (label: string) => {
    setMenuOpen(false);
    setResortsOpen(false);
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
    "pointer-events-auto flex items-center justify-center rounded-full bg-[#ece8e1] backdrop-blur-md shadow-lg hover:bg-[#ece8e1]/90 transition-colors cursor-pointer border border-[#3a2a1a]/20";

  /* Shared dropdown panel style */
  const dropdownPanelClass =
    "absolute mt-2 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-[#3a2a1a]/10";

  return (
    <>
      {/* ── FIXED NAV ── */}
      <div className="fixed top-2 left-0 right-0 z-50 flex items-center justify-between px-4 pointer-events-none">
        {/* LEFT: Hamburger + Resorts (desktop) */}
        <div className="pointer-events-auto flex items-center gap-3">
          {/* Hamburger */}
          <div ref={menuRef} className="relative">
            <button
              onClick={() => {
                setMenuOpen(!menuOpen);
                setReserveOpen(false);
                setLangOpen(false);
                setResortsOpen(false);
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
                  className={`${dropdownPanelClass} left-0 top-full w-64`}
                >
                  <div className="py-2">
                    {[
                      { label: "Rooms", route: "/rooms" },
                      { label: "Gallery", route: "/gallery" },
                      { label: "Experiences", route: "/experiences" },
                      { label: "Wellness", route: "/wellness" },
                      { label: "Gastronomy", route: "/gastronomy" },
                      { label: "Sustainability", route: "/sustainability" },
                      { label: "Awards & Press", route: "/awards" },
                      { label: "Blog & Podcast", route: "/blog" },
                    ].map((item) => (
                      <button
                        key={item.label}
                        onClick={() => handleNavigate(item.route)}
                        className="w-full text-left px-5 py-3 hover:bg-[#3a2a1a]/5 transition-colors"
                      >
                        <span
                          className="text-[#3a2a1a]/90 text-[11px] tracking-[0.2em]"
                          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                        >
                          {item.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Resorts pill + dropdown — desktop, hides on scroll */}
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
              }}
              className={`${pillClass} h-12 px-6`}
            >
              <span
                className="text-[#3a2a1a] text-sm font-medium tracking-[0.08em]"
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
                  className={`${dropdownPanelClass} left-0 top-full w-64`}
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
                        className="w-full text-left px-5 py-2.5 hover:bg-[#3a2a1a]/5 transition-colors"
                      >
                        <span
                          className={`text-sm tracking-[0.04em] whitespace-nowrap ${
                            prop.available ? "text-[#3a2a1a]/90" : "text-[#3a2a1a]/40"
                          }`}
                          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
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
        <div className="relative pointer-events-auto md:hidden">
          <button
            onClick={() => {
              setResortsOpen(!resortsOpen);
              setMenuOpen(false);
              setReserveOpen(false);
              setLangOpen(false);
            }}
            className={`${pillClass} h-12 px-6`}
          >
            <span
              className="text-[#3a2a1a] text-sm font-medium tracking-[0.08em]"
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
                className={`${dropdownPanelClass} left-0 top-full w-64`}
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
                      className="w-full text-left px-5 py-2.5 hover:bg-[#3a2a1a]/5 transition-colors"
                    >
                      <span
                        className={`text-sm tracking-[0.04em] whitespace-nowrap ${
                          prop.available ? "text-[#3a2a1a]/90" : "text-[#3a2a1a]/40"
                        }`}
                        style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
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
                setResortsOpen(false);
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
                setResortsOpen(false);
              }}
              className={`${pillClass} h-12 px-6`}
            >
              <span
                className="text-[#3a2a1a] text-sm font-medium tracking-[0.08em]"
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
                    <div className="px-5 py-1.5">
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
                          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
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
   HERO — Full-screen video, H1 centered at bottom
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const isMobile = useIsMobile();

  const heroVideo = isMobile ? CDN.heroVertical : CDN.heroHorizontal;

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0">
        <BlobVideo
          src={heroVideo}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Nayara text — centered on hero (desktop only) */}
      <motion.div
        className="absolute top-2 left-0 right-0 z-10 hidden md:flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <a
          href="/"
          className="text-[#ece8e1] drop-shadow-md cursor-pointer hover:opacity-80 transition-opacity"
          style={{ fontFamily: "'Montserrat', 'Arial', sans-serif", fontWeight: 700, fontSize: 'clamp(28px, 4vw, 40px)', letterSpacing: '1px', lineHeight: 1, textDecoration: 'none' }}
        >
          NAYARA
        </a>
      </motion.div>

      {/* Content — centered bottom */}
      <div className="absolute inset-0 flex flex-col justify-end items-center px-5 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-[#ece8e1] mb-[20px] md:mb-[40px] max-w-[1052px]"
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 400,
            fontSize: 'clamp(24px, 3.5vw, 36px)',
            lineHeight: 1,
          }}
        >
          Curated Experiences
        </motion.h1>
      </div>
    </section>
  );
}
