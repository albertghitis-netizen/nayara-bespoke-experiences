/**
 * SHARED BRAND NAVIGATION
 * Universal nav for all pages except /ayla and /arenal.
 * 4 pill buttons: Hamburger (left) + Resorts (left, desktop) | Language (right, desktop) + Reserve (right)
 *
 * Locked specs:
 * - Pill button text: 16px, font-body, fontWeight 500
 * - Language pill: text-xs, tracking-[0.15em], uppercase
 * - Dropdown items: 13px, font-body, fontWeight 600, tracking-normal
 * - Hamburger & Language dropdown width: w-36
 * - Resorts & Reserve dropdown width: w-52
 * - Hover: bg-[#d4c9b8]/50
 * - Languages: EN, ES, PT only
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { hotelBookingLinks } from "@/data/booking";

/* ── Property menu links ── */
const propertyLinks = [
  { label: "Nayara Alto Atacama", route: "/alto-atacama" },
  { label: "Nayara Gardens", route: "/gardens" },
  { label: "Nayara Springs", route: "/springs" },
  { label: "Nayara Tented Camp", route: "/tented-camp" },
  { label: "Nayara Hangaroa", route: "/hangaroa" },
  { label: "Nayara Bocas del Toro", route: "/bocas-del-toro" },
];

/* ── Language options ── */
const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "pt", label: "Português" },
];

/* ── Hamburger menu items ── */
const menuItems = [
  { label: "Gallery", route: "/gallery" },
  { label: "Rooms", route: "/rooms" },
  { label: "Experiences", route: "/experiences" },
  { label: "Wellness", route: "/wellness" },
  { label: "Gastronomy", route: "/gastronomy" },
  { label: "Sustainability", route: "/sustainability" },
  { label: "Press & Awards", route: "/awards" },
  { label: "Blog & Podcast", route: "/blog" },
];

interface BrandNavigationProps {
  hideResorts?: boolean;
  hideLanguage?: boolean;
}

export default function BrandNavigation({ hideResorts = false, hideLanguage = false }: BrandNavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [reserveOpen, setReserveOpen] = useState(false);
  const [resortsOpen, setResortsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [, navigate] = useLocation();

  /* Hide Resorts & Language once scrolled past hero */
  useEffect(() => {
    const handleScroll = () => {
      setScrolledPastHero(window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Date state for Reserve booking URLs */
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date(today);
  dayAfter.setDate(dayAfter.getDate() + 3);
  const formatDate = (d: Date) => d.toISOString().split("T")[0];
  const [checkIn] = useState(formatDate(tomorrow));
  const [checkOut] = useState(formatDate(dayAfter));

  const menuRef = useRef<HTMLDivElement>(null);
  const reserveRef = useRef<HTMLDivElement>(null);
  const resortsRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  /* Close dropdowns on outside click */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
      if (reserveRef.current && !reserveRef.current.contains(e.target as Node)) setReserveOpen(false);
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
      if (resortsRef.current && !resortsRef.current.contains(e.target as Node)) setResortsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeAll = () => {
    setMenuOpen(false);
    setReserveOpen(false);
    setLangOpen(false);
    setResortsOpen(false);
  };

  const handleNavigate = (route: string) => {
    closeAll();
    navigate(route);
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

  const pillClass =
    "pointer-events-auto flex items-center justify-center rounded-full bg-[#ece8e1] backdrop-blur-md shadow-lg hover:bg-[#ece8e1]/90 transition-colors cursor-pointer border border-[#3a2a1a]/20";

  const dropdownPanelClass =
    "absolute mt-2 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-[#3a2a1a]/10";

  return (
    <>
      <div className="fixed top-2 left-0 right-0 z-50 flex items-center justify-between px-4 pointer-events-none">
        {/* LEFT: Hamburger + Resorts (desktop) */}
        <div className="pointer-events-auto flex items-center gap-3">
          {/* Hamburger pill */}
          <div ref={menuRef} className="relative">
            <button
              onClick={() => { closeAll(); setMenuOpen(!menuOpen); }}
              className={`${pillClass} w-10 h-10`}
            >
              <div className="flex flex-col gap-1.5">
                <span className={`block w-5 h-px bg-[#3a2a1a] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
                <span className={`block w-5 h-px bg-[#3a2a1a] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
              </div>
            </button>

            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className={`${dropdownPanelClass} left-0 top-full w-36`}
                >
                  <div className="py-2">
                    {menuItems.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => handleNavigate(item.route)}
                        className="w-full text-left px-5 py-3 hover:bg-[#d4c9b8]/50 transition-colors"
                      >
                        <span
                          className="text-[#3a2a1a]/90 text-[13px] tracking-normal"
                          style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
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

          {/* Resorts pill — desktop only, hides on scroll */}
          {!hideResorts && <div
            ref={resortsRef}
            className={`relative hidden md:block transition-all duration-300 ${scrolledPastHero ? "opacity-0 pointer-events-none scale-90" : "opacity-100 scale-100"}`}
          >
            <button
              onClick={() => { closeAll(); setResortsOpen(!resortsOpen); }}
              className={`${pillClass} h-12 px-6`}
            >
              <span className="text-[#3a2a1a] text-[16px] font-medium tracking-normal" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
                Resorts
              </span>
            </button>

            <AnimatePresence>
              {resortsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className={`${dropdownPanelClass} left-0 top-full w-52`}
                >
                  <div className="py-2">
                    {propertyLinks.map((prop) => (
                      <button
                        key={prop.label}
                        onClick={() => { setResortsOpen(false); handleNavigate(prop.route); }}
                        className="w-full text-left px-5 py-2.5 hover:bg-[#d4c9b8]/50 transition-colors"
                      >
                        <span className="text-[#3a2a1a]/90 text-[13px] tracking-normal whitespace-nowrap" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>
                          {prop.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>}
        </div>

        {/* Resorts pill — mobile only, centered */}
        {!hideResorts && <div className="relative pointer-events-auto md:hidden">
          <button
            onClick={() => { closeAll(); setResortsOpen(!resortsOpen); }}
            className={`${pillClass} h-12 px-6`}
          >
            <span className="text-[#3a2a1a] text-[16px] font-medium tracking-normal" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
              Resorts
            </span>
          </button>

          <AnimatePresence>
            {resortsOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className={`${dropdownPanelClass} left-0 top-full w-52`}
              >
                <div className="py-2">
                  {propertyLinks.map((prop) => (
                    <button
                      key={prop.label}
                      onClick={() => { setResortsOpen(false); handleNavigate(prop.route); }}
                      className="w-full text-left px-5 py-2.5 hover:bg-[#d4c9b8]/50 transition-colors"
                    >
                      <span className="text-[#3a2a1a]/90 text-[13px] tracking-normal" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>
                        {prop.label}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>}

        {/* RIGHT: Language + Reserve */}
        <div className="flex items-center gap-3 pointer-events-auto">
          {/* Language pill — desktop only, hides on scroll */}
          {!hideLanguage && <div
            ref={langRef}
            className={`hidden md:block relative transition-all duration-300 ${scrolledPastHero ? "opacity-0 pointer-events-none scale-90" : "opacity-100 scale-100"}`}
          >
            <button
              onClick={() => { closeAll(); setLangOpen(!langOpen); }}
              className={`${pillClass} h-10 px-4 gap-2`}
            >
              <svg className="w-4 h-4 text-[#3a2a1a]/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              <span className="text-[#3a2a1a] text-xs tracking-[0.15em] uppercase" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
                {currentLang?.code.toUpperCase()}
              </span>
            </button>

            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className={`${dropdownPanelClass} right-0 top-full w-36`}
                >
                  <div className="py-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLangSelect(lang.code)}
                        className={`w-full text-left px-5 py-2.5 hover:bg-[#d4c9b8]/50 transition-colors flex items-center justify-between ${selectedLang === lang.code ? "bg-[#3a2a1a]/5" : ""}`}
                      >
                        <span className="text-[#3a2a1a]/90 text-[13px] tracking-normal" style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>
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
          </div>}

          {/* Reserve pill + dropdown */}
          <div ref={reserveRef} className="relative">
            <button
              onClick={() => { closeAll(); setReserveOpen(!reserveOpen); }}
              className={`${pillClass} h-12 px-6`}
            >
              <span className="text-[#3a2a1a] text-[16px] font-medium tracking-normal" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
                Reserve
              </span>
            </button>

            <AnimatePresence>
              {reserveOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className={`${dropdownPanelClass} right-0 top-full w-52`}
                >
                  <div className="py-2">
                    {hotelBookingLinks.map((hotel) => (
                      <button
                        key={hotel.label}
                        onClick={() => handleBooking(hotel)}
                        className="w-full text-left px-5 py-3 hover:bg-[#d4c9b8]/50 transition-colors flex items-center justify-between"
                      >
                        <span
                          className={`text-[13px] tracking-normal ${hotel.available ? "text-[#3a2a1a]/90" : "text-[#3a2a1a]/35"}`}
                          style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
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
