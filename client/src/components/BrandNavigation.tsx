/**
 * UNIFIED NAVIGATION - One consistent nav for the entire site
 *
 * Desktop:  [Hamburger]  ···  NAYARA (center, optional)  ···  [Reserve]
 * Mobile:   [Hamburger]  [Explore]  [Reserve]  [Concierge]
 *
 * Hamburger menu:
 *   - On property pages: property section anchors first, then global links
 *   - On all other pages: global links only
 *
 * Reserve dropdown: all 6 properties with SynXis booking links
 *
 * Locked specs:
 * - Pill style: bg-[#ece8e1], rounded-full, border border-[#3a2a1a]/20
 * - Menu items: 13px, font-body, fontWeight 500
 * - Hover: bg-[#d4c9b8]/50
 * - Animations: subtle, no big overlays
 */

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "wouter";
import { hotelBookingLinks } from "@/data/booking";
import {
  type PageType,
  PROPERTY_MENU,
  PROPERTIES,
} from "@/data/navigation";

/* ── Global menu items (matches footer) ── */
const GLOBAL_MENU = [
  { label: "Our Story", route: "/story" },
  { label: "Experiences", route: "/experiences" },
  { label: "Wellness", route: "/wellness" },
  { label: "The Table", route: "/gastronomy" },
  { label: "Beyond Sustainability", route: "/sustainability" },
  { label: "Awards & Press", route: "/awards" },
  { label: "Journal & Podcast", route: "/journal" },
];

/* ── Explore dropdown items (quick links to properties) ── */
const EXPLORE_ITEMS = PROPERTIES.map((p) => ({
  label: p.name,
  route: p.route,
}));

interface BrandNavigationProps {
  pageType?: PageType;
  centerLabel?: string;
  centerLinkHome?: boolean;
}

export default function BrandNavigation({
  pageType = "brand",
  centerLabel,
  centerLinkHome = false,
}: BrandNavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [reserveOpen, setReserveOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [, navigate] = useLocation();

  const menuRef = useRef<HTMLDivElement>(null);
  const reserveRef = useRef<HTMLDivElement>(null);
  const exploreRef = useRef<HTMLDivElement>(null);

  /* Close dropdowns on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (menuRef.current && !menuRef.current.contains(target)) setMenuOpen(false);
      if (reserveRef.current && !reserveRef.current.contains(target)) setReserveOpen(false);
      if (exploreRef.current && !exploreRef.current.contains(target)) setExploreOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const closeAll = () => {
    setMenuOpen(false);
    setReserveOpen(false);
    setExploreOpen(false);
  };

  const handleNavigate = (route: string) => {
    closeAll();
    if (route.startsWith("#")) {
      const el = document.querySelector(route);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(route);
    }
  };

  const handleBooking = (hotel: (typeof hotelBookingLinks)[0]) => {
    closeAll();
    if (hotel.available) {
      window.open(hotel.url, "_blank");
    } else {
      import("sonner").then(({ toast }) => toast(hotel.label + " -- Booking Coming Soon"));
    }
  };

  const showCenterLabel = (pageType === "property" || centerLinkHome) && centerLabel;

  /* ── Shared styles ── */
  const pill =
    "flex items-center justify-center rounded-full bg-[#ece8e1] backdrop-blur-md shadow-sm hover:bg-[#d4c9b8]/60 transition-colors cursor-pointer border border-[#3a2a1a]/15";

  const dropdown =
    "absolute mt-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden border border-[#3a2a1a]/10";

  const menuItem =
    "w-full text-left px-5 py-2.5 hover:bg-[#d4c9b8]/40 transition-colors";

  const menuText = {
    fontFamily: "var(--font-body)",
    fontWeight: 500 as const,
  };

  const dropdownAnim = {
    initial: { opacity: 0, y: -6 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -6 },
    transition: { duration: 0.15 },
  };

  /* ── Build hamburger menu items ── */
  const propertyItems = pageType === "property" ? PROPERTY_MENU : [];

  return (
    <>
      <nav className="fixed top-2 left-0 right-0 z-50 px-3 pointer-events-none">
        {/* ── DESKTOP NAV ── */}
        <div className="hidden md:flex items-center justify-between pointer-events-auto">
          {/* Left: Hamburger */}
          <div ref={menuRef} className="relative">
            <button
              onClick={() => { closeAll(); setMenuOpen(!menuOpen); }}
              className={`${pill} w-10 h-10`}
              aria-label="Menu"
            >
              <div className="flex flex-col gap-1.5">
                <span className={`block w-5 h-px bg-[#3a2a1a] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
                <span className={`block w-5 h-px bg-[#3a2a1a] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
              </div>
            </button>

            <AnimatePresence>
              {menuOpen && (
                <motion.div {...dropdownAnim} className={`${dropdown} left-0 top-full w-56`}>
                  <div className="py-2 max-h-[75vh] overflow-y-auto">
                    {/* Property section anchors (only on property pages) */}
                    {propertyItems.length > 0 && (
                      <>
                        <div className="px-5 pt-2 pb-1">
                          <span className="text-[#3a2a1a]/30 text-[10px] tracking-[0.18em] uppercase" style={menuText}>
                            This Property
                          </span>
                        </div>
                        {propertyItems.map((item) => (
                          <button key={item.label} onClick={() => handleNavigate(item.route)} className={menuItem}>
                            <span className="text-[#3a2a1a]/80 text-[13px]" style={menuText}>{item.label}</span>
                          </button>
                        ))}
                        <div className="h-px bg-[#3a2a1a]/8 mx-4 my-1.5" />
                      </>
                    )}

                    {/* Global links */}
                    {propertyItems.length > 0 && (
                      <div className="px-5 pt-1 pb-1">
                        <span className="text-[#3a2a1a]/30 text-[10px] tracking-[0.18em] uppercase" style={menuText}>
                          Explore Nayara
                        </span>
                      </div>
                    )}
                    {GLOBAL_MENU.map((item) => (
                      <button key={item.label} onClick={() => handleNavigate(item.route)} className={menuItem}>
                        <span className="text-[#3a2a1a]/80 text-[13px]" style={menuText}>{item.label}</span>
                      </button>
                    ))}

                    {/* Resorts sub-section */}
                    <div className="h-px bg-[#3a2a1a]/8 mx-4 my-1.5" />
                    <div className="px-5 pt-1 pb-1">
                      <span className="text-[#3a2a1a]/30 text-[10px] tracking-[0.18em] uppercase" style={menuText}>
                        Our Resorts
                      </span>
                    </div>
                    {EXPLORE_ITEMS.map((item) => (
                      <button key={item.label} onClick={() => handleNavigate(item.route)} className={menuItem}>
                        <span className="text-[#3a2a1a]/80 text-[13px]" style={menuText}>{item.label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Center: NAYARA label (property pages + homepage) */}
          {showCenterLabel && (
            <div className="absolute left-1/2 -translate-x-1/2">
              {centerLinkHome ? (
                <a
                  href="/"
                  onClick={(e) => { e.preventDefault(); navigate("/"); }}
                  className="text-[#ece8e1] drop-shadow-md hover:opacity-80 transition-opacity"
                  style={{
                    fontFamily: "'Montserrat', 'Arial', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(16px, 2vw, 22px)",
                    letterSpacing: "1px",
                    lineHeight: 1,
                    textDecoration: "none",
                  }}
                >
                  {centerLabel.toUpperCase()}
                </a>
              ) : (
                <span
                  className="text-[#ece8e1] drop-shadow-md"
                  style={{
                    fontFamily: "'Montserrat', 'Arial', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(16px, 2vw, 22px)",
                    letterSpacing: "1px",
                    lineHeight: 1,
                  }}
                >
                  {centerLabel.toUpperCase()}
                </span>
              )}
            </div>
          )}

          {/* Right: Reserve */}
          <div ref={reserveRef} className="relative">
            <button
              onClick={() => { closeAll(); setReserveOpen(!reserveOpen); }}
              className={`${pill} h-10 px-5`}
            >
              <span className="text-[#3a2a1a] text-[14px]" style={menuText}>Reserve</span>
            </button>

            <AnimatePresence>
              {reserveOpen && (
                <motion.div {...dropdownAnim} className={`${dropdown} right-0 top-full w-56`}>
                  <div className="py-2">
                    {hotelBookingLinks.map((hotel) => (
                      <button
                        key={hotel.label}
                        onClick={() => handleBooking(hotel)}
                        className={`${menuItem} flex items-center justify-between`}
                      >
                        <span
                          className={`text-[13px] whitespace-nowrap ${hotel.available ? "text-[#3a2a1a]/80" : "text-[#3a2a1a]/30"}`}
                          style={menuText}
                        >
                          {hotel.label}
                        </span>
                        {!hotel.available && (
                          <span className="text-[8px] tracking-[0.1em] uppercase text-[#3a2a1a]/20 border border-[#3a2a1a]/12 px-1.5 py-0.5 rounded-full">
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

        {/* ── MOBILE NAV — 4 evenly spaced buttons ── */}
        <div className="flex md:hidden items-center justify-between pointer-events-auto">
          {/* 1. Hamburger */}
          <div ref={menuRef} className="relative">
            <button
              onClick={() => { closeAll(); setMenuOpen(!menuOpen); }}
              className={`${pill} w-10 h-10`}
              aria-label="Menu"
            >
              <div className="flex flex-col gap-1.5">
                <span className={`block w-4 h-px bg-[#3a2a1a] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
                <span className={`block w-4 h-px bg-[#3a2a1a] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
              </div>
            </button>

            <AnimatePresence>
              {menuOpen && (
                <motion.div {...dropdownAnim} className={`${dropdown} left-0 top-full w-52`}>
                  <div className="py-2 max-h-[70vh] overflow-y-auto">
                    {propertyItems.length > 0 && (
                      <>
                        <div className="px-4 pt-2 pb-1">
                          <span className="text-[#3a2a1a]/30 text-[9px] tracking-[0.18em] uppercase" style={menuText}>
                            This Property
                          </span>
                        </div>
                        {propertyItems.map((item) => (
                          <button key={item.label} onClick={() => handleNavigate(item.route)} className={menuItem}>
                            <span className="text-[#3a2a1a]/80 text-[13px]" style={menuText}>{item.label}</span>
                          </button>
                        ))}
                        <div className="h-px bg-[#3a2a1a]/8 mx-4 my-1" />
                      </>
                    )}
                    {GLOBAL_MENU.map((item) => (
                      <button key={item.label} onClick={() => handleNavigate(item.route)} className={menuItem}>
                        <span className="text-[#3a2a1a]/80 text-[13px]" style={menuText}>{item.label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 2. Explore (properties) */}
          <div ref={exploreRef} className="relative">
            <button
              onClick={() => { closeAll(); setExploreOpen(!exploreOpen); }}
              className={`${pill} h-10 px-4`}
            >
              <span className="text-[#3a2a1a] text-[12px]" style={menuText}>Explore</span>
            </button>

            <AnimatePresence>
              {exploreOpen && (
                <motion.div {...dropdownAnim} className={`${dropdown} left-1/2 -translate-x-1/2 top-full w-52`}>
                  <div className="py-2">
                    {EXPLORE_ITEMS.map((item) => (
                      <button key={item.label} onClick={() => handleNavigate(item.route)} className={menuItem}>
                        <span className="text-[#3a2a1a]/80 text-[13px]" style={menuText}>{item.label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 3. Reserve */}
          <div ref={reserveRef} className="relative">
            <button
              onClick={() => { closeAll(); setReserveOpen(!reserveOpen); }}
              className={`${pill} h-10 px-4`}
            >
              <span className="text-[#3a2a1a] text-[12px]" style={menuText}>Reserve</span>
            </button>

            <AnimatePresence>
              {reserveOpen && (
                <motion.div {...dropdownAnim} className={`${dropdown} right-0 top-full w-52`}>
                  <div className="py-2">
                    {hotelBookingLinks.map((hotel) => (
                      <button
                        key={hotel.label}
                        onClick={() => handleBooking(hotel)}
                        className={`${menuItem} flex items-center justify-between`}
                      >
                        <span
                          className={`text-[13px] whitespace-nowrap ${hotel.available ? "text-[#3a2a1a]/80" : "text-[#3a2a1a]/30"}`}
                          style={menuText}
                        >
                          {hotel.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 4. Concierge */}
          <button
            onClick={() => {
              // Trigger the concierge chat widget
              const chatBtn = document.querySelector('[data-concierge-toggle]') as HTMLButtonElement;
              if (chatBtn) chatBtn.click();
              else import("sonner").then(({ toast }) => toast("Chat with our concierge"));
            }}
            className={`${pill} w-10 h-10`}
            aria-label="Chat"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="#3a2a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
}
