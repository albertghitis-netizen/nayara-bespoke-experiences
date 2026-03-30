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
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useLocation } from "wouter";
import BlobVideo from "@/components/BlobVideo";
import { useIsMobile } from "@/hooks/useMobile";
import AwardWinningProperties from "@/components/AwardWinningProperties";
import ExploreOurWorld from "@/components/ExploreOurWorld";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

/* SynXis booking URLs */
const BOOKING_URL =
  "https://be.synxis.com/?chain=24447&hotel=10868&level=hotel&locale=en-US&adult=1&child=0&rooms=1&currency=USD&productcurrency=USD&src=30";
const ATACAMA_BOOKING_URL =
  "https://be.synxis.com/?&chain=24447&hotel=35177&adult=2&SRC=30";
const HANGAROA_BOOKING_URL =
  "https://be.synxis.com/?adult=2&chain=24447&child=0&currency=USD&hotel=35955&level=hotel&locale=en-US&productcurrency=USD&rooms=1";
const BOCAS_BOOKING_URL =
  "https://be.synxis.com/?adult=2&chain=24447&child=0&currency=USD&hotel=38262&level=hotel&locale=en-US&productcurrency=USD&rooms=1&src=30";

/* ── Property menu links ── */
const propertyLinks = [
  { label: "Nayara Alto Atacama", route: "/alto-atacama", available: true },
  { label: "Nayara Gardens", route: "/gardens", available: true },
  { label: "Nayara Springs", route: "/springs", available: true },
  { label: "Nayara Tented Camp", route: "/tented-camp", available: true },
  { label: "Nayara Hangaroa", route: "/hangaroa", available: true },
  { label: "Nayara Bocas del Toro", route: "/bocas-del-toro", available: true },
];

/* ── Hotel booking links for Reserve dropdown ── */
const hotelBookingLinks = [
  { label: "Nayara Gardens", url: BOOKING_URL, available: true },
  { label: "Nayara Springs", url: BOOKING_URL, available: true },
  { label: "Nayara Tented Camp", url: BOOKING_URL, available: true },
  { label: "Nayara Alto Atacama", url: ATACAMA_BOOKING_URL, available: true },
  { label: "Nayara Hangaroa", url: HANGAROA_BOOKING_URL, available: true },
  { label: "Nayara Bocas del Toro", url: BOCAS_BOOKING_URL, available: true },
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

const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara-logo-charcoal_4ac58543.png";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(to bottom, #f7f5f0 0%, #f6f3ec 40%, #f4f0e8 70%, #f1ece4 90%, #eee8df 100%)" }}>
      <ScrollProgress />
      <BrandNavigation />
      <HeroHeader />
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
      window.open(hotel.url, "_blank");
    } else {
      import("sonner").then(({ toast }) => toast(hotel.label + " — Booking Coming Soon"));
    }
  };

  const currentLang = languages.find((l) => l.code === selectedLang);

  /* Shared pill style */
  const pillClass =
    "pointer-events-auto flex items-center justify-center rounded-full bg-[#3a2a1a]/70 backdrop-blur-md shadow-lg hover:bg-[#3a2a1a]/90 transition-all duration-300 cursor-pointer";

  /* Shared dropdown panel style */
  const dropdownPanelClass =
    "absolute mt-2 bg-[#3a2a1a]/90 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/5";

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
                className={`block w-5 h-px bg-white transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
                }`}
              />
              <span
                className={`block w-5 h-px bg-white transition-all duration-300 ${
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
                    className="w-full text-left px-5 py-3 hover:bg-white/10 transition-colors"
                  >
                    <span
                      className="text-white/90 text-[11px] tracking-[0.2em] uppercase"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                    >
                      Our Resorts
                    </span>
                  </button>

                  {/* Gallery */}
                  <button
                    onClick={() => handleNavigate("/gallery")}
                    className="w-full text-left px-5 py-3 hover:bg-white/10 transition-colors"
                  >
                    <span
                      className="text-white/90 text-[11px] tracking-[0.2em] uppercase"
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
                        className="w-full flex items-center justify-between px-5 py-3 hover:bg-white/10 transition-colors"
                      >
                        <span
                          className="text-white/90 text-[11px] tracking-[0.2em] uppercase"
                          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                        >
                          {section}
                        </span>
                        <svg
                          className={`w-3 h-3 text-white/40 transition-transform duration-200 ${
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
                                        ? "text-white/70 hover:text-white"
                                        : "text-white/30"
                                    } transition-colors`}
                                    style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                                  >
                                    {prop.label}
                                  </span>
                                  {!prop.available && (
                                    <span className="text-[8px] tracking-[0.12em] uppercase text-white/25 border border-white/15 px-1.5 py-0.5 rounded-sm">
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
                    className="w-full text-left px-5 py-3 hover:bg-white/10 transition-colors"
                  >
                    <span
                      className="text-white/90 text-[11px] tracking-[0.2em] uppercase"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                    >
                      Experiences
                    </span>
                  </button>

                  {/* Wellness */}
                  <button
                    onClick={() => handleNavigate("/wellness")}
                    className="w-full text-left px-5 py-3 hover:bg-white/10 transition-colors"
                  >
                    <span
                      className="text-white/90 text-[11px] tracking-[0.2em] uppercase"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                    >
                      Wellness
                    </span>
                  </button>

                  {/* Gastronomy */}
                  <button
                    onClick={() => handleNavigate("/gastronomy")}
                    className="w-full text-left px-5 py-3 hover:bg-white/10 transition-colors"
                  >
                    <span
                      className="text-white/90 text-[11px] tracking-[0.2em] uppercase"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                    >
                      Gastronomy
                    </span>
                  </button>

                  {/* Sustainability */}
                  <button
                    onClick={() => handleNavigate("/sustainability")}
                    className="w-full text-left px-5 py-3 hover:bg-white/10 transition-colors"
                  >
                    <span
                      className="text-white/90 text-[11px] tracking-[0.2em] uppercase"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                    >
                      Sustainability
                    </span>
                  </button>

                  {/* Awards */}
                  <button
                    onClick={() => handleNavigate("/awards")}
                    className="w-full text-left px-5 py-3 hover:bg-white/10 transition-colors"
                  >
                    <span
                      className="text-white/90 text-[11px] tracking-[0.2em] uppercase"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                    >
                      Awards
                    </span>
                  </button>

                  {/* Press */}
                  <button
                    onClick={() => handleNavigate("/press")}
                    className="w-full text-left px-5 py-3 hover:bg-white/10 transition-colors"
                  >
                    <span
                      className="text-white/90 text-[11px] tracking-[0.2em] uppercase"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                    >
                      Press
                    </span>
                  </button>

                  {/* Journal */}
                  <button
                    onClick={() => handleNavigate("/journal")}
                    className="w-full text-left px-5 py-3 hover:bg-white/10 transition-colors"
                  >
                    <span
                      className="text-white/90 text-[11px] tracking-[0.2em] uppercase"
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

          {/* Logo placeholder — user will provide final version */}
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
              <svg className="w-4 h-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              <span
                className="text-white text-[11px] tracking-[0.15em] uppercase"
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
                        className={`w-full text-left px-5 py-2.5 hover:bg-white/10 transition-colors flex items-center justify-between ${
                          selectedLang === lang.code ? "bg-white/5" : ""
                        }`}
                      >
                        <span
                          className="text-white/90 text-[11px] tracking-[0.08em]"
                          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                        >
                          {lang.label}
                        </span>
                        {selectedLang === lang.code && (
                          <svg className="w-3 h-3 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
              className="text-white text-[11px] tracking-[0.25em] uppercase"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Reserve
            </span>
          </button>

          {/* Reserve dropdown */}
          <AnimatePresence>
            {reserveOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className={`${dropdownPanelClass} right-0 top-full w-64`}
              >
                <div className="py-2">
                  {hotelBookingLinks.map((hotel) => (
                    <button
                      key={hotel.label}
                      onClick={() => handleBooking(hotel)}
                      className="w-full text-left px-5 py-3 hover:bg-white/10 transition-colors flex items-center justify-between"
                    >
                      <span
                        className={`text-[11px] tracking-[0.08em] ${
                          hotel.available ? "text-white/90" : "text-white/35"
                        }`}
                        style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                      >
                        {hotel.label}
                      </span>
                      {!hotel.available && (
                        <span className="text-[8px] tracking-[0.12em] uppercase text-white/25 border border-white/15 px-1.5 py-0.5 rounded-sm">
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
  const heroRef = useRef<HTMLDivElement>(null);

  /* Desktop: horizontal Arenal volcano video (3.4MB mp4)
     Mobile: vertical landing video (compressed mp4) */
  const heroVideo = isMobile
    ? "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/compressed-landing-vertical_a7242694.mp4"
    : "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/compressed-arenal-desktop_05c5168c.mp4";

  /* Scroll-linked transforms for parallax */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Video moves slower than scroll (parallax)
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  // Slight zoom as user scrolls
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  // Overlay darkens as you scroll
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.7]);
  // Content fades out as you scroll past
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.4], [0, -60]);

  /* Staggered text animation variants */
  const heroTextWords = "Luxury Resorts Rooted in Nature".split(" ");

  return (
    <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
      {/* Video Background with parallax + zoom */}
      <motion.div
        className="absolute inset-0"
        style={{ y: videoY, scale: videoScale }}
      >
        <BlobVideo
          src={heroVideo}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Gradient overlay — darkens on scroll */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      <motion.div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content — anchored to bottom, fades out on scroll */}
      <motion.div
        className="relative z-10 h-full flex flex-col justify-end items-center pb-24 md:pb-28 px-6 md:px-10"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Subtle Nayara brand mark */}
        <motion.span
          initial={{ opacity: 0, letterSpacing: "0.3em" }}
          animate={{ opacity: 0.15, letterSpacing: "0.5em" }}
          transition={{ duration: 2, delay: 0.2 }}
          className="text-white text-[10px] md:text-xs uppercase mb-6 block"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          Nayara
        </motion.span>

        {/* Staggered word reveal */}
        <h1
          className="text-white text-2xl md:text-4xl lg:text-5xl leading-[0.95] tracking-wide text-center flex flex-wrap justify-center gap-x-[0.25em]"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          {heroTextWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.8,
                delay: 0.5 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle line that draws in */}
        <motion.div
          className="mt-6 flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div
            className="h-px bg-white/30"
            initial={{ width: 0 }}
            animate={{ width: 40 }}
            transition={{ duration: 1, delay: 1.7, ease: [0.22, 1, 0.36, 1] }}
          />
          <span
            className="text-white/50 text-[10px] md:text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Costa Rica &middot; Chile &middot; Easter Island &middot; Panama
          </span>
          <motion.div
            className="h-px bg-white/30"
            initial={{ width: 0 }}
            animate={{ width: 40 }}
            transition={{ duration: 1, delay: 1.7, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
      </motion.div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        style={{ opacity: contentOpacity }}
      >
        <span
          className="text-white/40 text-[9px] tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
        >
          Scroll
        </span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
          animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
