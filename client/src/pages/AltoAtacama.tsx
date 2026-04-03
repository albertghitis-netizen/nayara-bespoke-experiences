/*
 * NAYARA ALTO ATACAMA — Property Page
 * Formatted exactly like resorts homepage
 * Structure: H1 Video → H2 Image → Second Still → Footer
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import BlobVideo from "@/components/BlobVideo";
import { useIsMobile } from "@/hooks/useMobile";
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

/* ── CDN Assets ── */
const CDN = {
  heroVideo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/v12044gd0000d4jqd7fog65i1uhea9qg_0d5a8516.MP4",
  h2Image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/IMG_6253_380507bd.jpg",
  secondStill: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Untitleddesign_5d419ccb.png",
};

export default function AltoAtacama() {
  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(to bottom, #ece8e1 0%, #eae5de 40%, #e8e3db 70%, #e5e0d8 90%, #e2ddd5 100%)" }}>
      <ScrollProgress />
      <BrandNavigation />
      <HeroHeader />
      <HomeIntroSection />
      <div className="h-2 md:h-4" />
      <AwardWinningProperties />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BRAND NAVIGATION — Matches resorts homepage exactly
   ═══════════════════════════════════════════════════════════════ */
function BrandNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resortsOpen, setResortsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [, navigate] = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const resortsRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setScrolledPastHero(window.scrollY > heroHeight * 0.5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
      if (resortsRef.current && !resortsRef.current.contains(e.target as Node)) setResortsOpen(false);
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavigate = (route: string) => {
    setMenuOpen(false);
    setResortsOpen(false);
    navigate(route);
  };

  const handleComingSoon = (label: string) => {
    setMenuOpen(false);
    setResortsOpen(false);
    import("sonner").then(({ toast }) => toast(label + " — Coming Soon"));
  };

  const dropdownPanelClass = "absolute mt-2 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-[#3a2a1a]/10";

  const pillClass = "pointer-events-auto flex items-center justify-center rounded-full bg-[#ece8e1]/90 backdrop-blur-md shadow-lg hover:bg-[#ece8e1] transition-all duration-300 cursor-pointer border border-[#3a2a1a]/30";

  return (
    <>
      {/* FIXED NAV: Hamburger (far left) + Resorts (center) + Reserve (far right) */}
      <div className="fixed top-2 left-0 right-0 z-50 flex items-center justify-between px-4 pointer-events-none">
        {/* LEFT: Hamburger */}
        <div className="pointer-events-auto">
          <div ref={menuRef} className="relative">
            <button
              onClick={() => {
                setMenuOpen(!menuOpen);
                setResortsOpen(false);
              }}
              className={`${pillClass} w-10 h-10`}
            >
              <div className="flex flex-col gap-1.5">
                <span className={`block w-5 h-px bg-[#3a2a1a] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
                <span className={`block w-5 h-px bg-[#3a2a1a] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
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
                    <button
                      onClick={() => handleNavigate("/gallery")}
                      className="w-full text-left px-5 py-3 hover:bg-[#3a2a1a]/5 transition-colors"
                    >
                      <span className="text-[#3a2a1a]/90 text-[11px] tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
                        Gallery
                      </span>
                    </button>
                    <button
                      onClick={() => handleNavigate("/experiences")}
                      className="w-full text-left px-5 py-3 hover:bg-[#3a2a1a]/5 transition-colors"
                    >
                      <span className="text-[#3a2a1a]/90 text-[11px] tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
                        Experiences
                      </span>
                    </button>
                    <button
                      onClick={() => handleNavigate("/wellness")}
                      className="w-full text-left px-5 py-3 hover:bg-[#3a2a1a]/5 transition-colors"
                    >
                      <span className="text-[#3a2a1a]/90 text-[11px] tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
                        Wellness
                      </span>
                    </button>
                    <button
                      onClick={() => handleNavigate("/sustainability")}
                      className="w-full text-left px-5 py-3 hover:bg-[#3a2a1a]/5 transition-colors"
                    >
                      <span className="text-[#3a2a1a]/90 text-[11px] tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
                        Sustainability
                      </span>
                    </button>
                    <button
                      onClick={() => handleNavigate("/awards")}
                      className="w-full text-left px-5 py-3 hover:bg-[#3a2a1a]/5 transition-colors"
                    >
                      <span className="text-[#3a2a1a]/90 text-[11px] tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
                        Awards
                      </span>
                    </button>
                    <button
                      onClick={() => handleNavigate("/journal")}
                      className="w-full text-left px-5 py-3 hover:bg-[#3a2a1a]/5 transition-colors"
                    >
                      <span className="text-[#3a2a1a]/90 text-[11px] tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
                        Journal
                      </span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CENTER: Resorts */}
          <div ref={resortsRef} className="relative pointer-events-auto">
            <button
              onClick={() => {
                setResortsOpen(!resortsOpen);
                setMenuOpen(false);
              }}
              className={`${pillClass} h-10 px-4`}
            >
              <span className="text-[#3a2a1a] text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
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
                        className="w-full text-left px-5 py-2.5 hover:bg-[#3a2a1a]/5 transition-colors"
                      >
                        <span className={`text-[11px] tracking-[0.2em] uppercase ${prop.available ? "text-[#3a2a1a]/90" : "text-[#3a2a1a]/40"}`} style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
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

        {/* RIGHT: Reserve */}
        <div className="flex items-center gap-3 pointer-events-auto">
          <button
            onClick={() => handleComingSoon("Reservation")}
            className={`${pillClass} h-10 px-4`}
          >
            <span className="text-[#3a2a1a] text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
              Reserve
            </span>
          </button>
        </div>
      </div>

      {/* Hamburger dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#f7f5f0]/98 backdrop-blur-md overflow-y-auto"
          >
            <div className="max-w-lg mx-auto px-8 pt-28 pb-16">
              {/* Gallery */}
              <button
                onClick={() => handleNavigate("/gallery")}
                className="block w-full text-left py-4 border-b border-stone-200"
              >
                <span className="text-[#3a2a1a] text-lg tracking-[0.08em] uppercase" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
                  Gallery
                </span>
              </button>

              {/* Experiences */}
              <button
                onClick={() => handleNavigate("/experiences")}
                className="block w-full text-left py-4 border-b border-stone-200"
              >
                <span className="text-[#3a2a1a] text-lg tracking-[0.08em] uppercase" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
                  Experiences
                </span>
              </button>

              {/* Wellness */}
              <button
                onClick={() => handleNavigate("/wellness")}
                className="block w-full text-left py-4 border-b border-stone-200"
              >
                <span className="text-[#3a2a1a] text-lg tracking-[0.08em] uppercase" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
                  Wellness
                </span>
              </button>

              {/* Gastronomy */}
              <button
                onClick={() => handleNavigate("/gastronomy")}
                className="block w-full text-left py-4 border-b border-stone-200"
              >
                <span className="text-[#3a2a1a] text-lg tracking-[0.08em] uppercase" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
                  Gastronomy
                </span>
              </button>

              {/* Sustainability */}
              <button
                onClick={() => handleNavigate("/sustainability")}
                className="block w-full text-left py-4 border-b border-stone-200"
              >
                <span className="text-[#3a2a1a] text-lg tracking-[0.08em] uppercase" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
                  Sustainability
                </span>
              </button>

              {/* Awards */}
              <button
                onClick={() => handleNavigate("/awards")}
                className="block w-full text-left py-4 border-b border-stone-200"
              >
                <span className="text-[#3a2a1a] text-lg tracking-[0.08em] uppercase" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
                  Awards
                </span>
              </button>

              {/* Press */}
              <button
                onClick={() => handleNavigate("/press")}
                className="block w-full text-left py-4 border-b border-stone-200"
              >
                <span className="text-[#3a2a1a] text-lg tracking-[0.08em] uppercase" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
                  Press
                </span>
              </button>

              {/* Journal */}
              <button
                onClick={() => handleNavigate("/journal")}
                className="block w-full text-left py-4 border-b border-stone-200"
              >
                <span className="text-[#3a2a1a] text-lg tracking-[0.08em] uppercase" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
                  Journal
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO HEADER — H1 Video
   ═══════════════════════════════════════════════════════════════ */
function HeroHeader() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <BlobVideo
          src={CDN.heroVideo}
          autoPlay
          muted
          controls={false}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content — anchored to bottom */}
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6 md:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-2xl md:text-4xl lg:text-5xl leading-[0.95] tracking-wide text-center"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 400 }}
        >
          Luxury Resorts Rooted in Nature
        </motion.h1>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   H2 SECTION — Vertical image + text
   ═══════════════════════════════════════════════════════════════ */
function HomeIntroSection() {
  return (
    <section className="relative py-16 md:py-24 px-6 md:px-10">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Text */}
          <div className="flex flex-col justify-center">
            <h2
              className="text-[#3a2a1a] text-2xl md:text-4xl leading-tight mb-6"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 400 }}
            >
              Award-Winning Properties Defined by Destination
            </h2>
            <p
              className="text-[#5a4a3a] text-sm md:text-base leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              Each Nayara property is thoughtfully designed to celebrate its unique landscape and culture, offering guests an immersive experience rooted in nature and community.
            </p>
          </div>

          {/* Right: Vertical Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={CDN.h2Image}
              alt="Alto Atacama landscape"
              className="w-full max-w-sm md:max-w-md h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECOND STILL — Horizontal image
   ═══════════════════════════════════════════════════════════════ */
function AwardWinningProperties() {
  return (
    <section className="relative w-full overflow-hidden">
      <img
        src={CDN.secondStill}
        alt="Alto Atacama flamingos"
        className="w-full h-auto object-cover"
      />
    </section>
  );
}
