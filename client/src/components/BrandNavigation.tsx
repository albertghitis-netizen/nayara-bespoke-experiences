/**
 * UNIVERSAL NAVIGATION — Context-aware top bar for all pages
 *
 * Three page types:
 * 1. Property pages:  [Hamburger] | Property Name (center) | [Reserve]
 * 2. Brand pages:     [Hamburger] | "Nayara Resorts" or page name (center) | [Reserve]
 * 3. Content pages:   [Hamburger] | Page Name (center) | [Reserve]
 *
 * Hamburger menu content changes based on pageType.
 * Reserve dropdown always shows all 6 properties with booking links.
 * Center label hidden on mobile (per user preference).
 *
 * Locked specs:
 * - Reserve button: 16px, medium weight, lowercase
 * - Pill style: bg-[#ece8e1], rounded-full, border border-[#3a2a1a]/20
 * - Dropdown items: 13px, font-body, fontWeight 600
 * - Hover: bg-[#d4c9b8]/50
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { hotelBookingLinks } from "@/data/booking";
import {
  type PageType,
  type MenuSection,
  PROPERTY_MENU,
  getBrandMenu,
  getContentMenu,
} from "@/data/navigation";

interface BrandNavigationProps {
  /** Page type determines hamburger menu content */
  pageType?: PageType;
  /** Center label text (e.g., "Nayara Gardens", "Experiences", "Blog") */
  centerLabel?: string;
  /** Whether center label links to home (true for property names, false for page titles) */
  centerLinkHome?: boolean;
}

export default function BrandNavigation({
  pageType = "brand",
  centerLabel = "Nayara Resorts",
  centerLinkHome = false,
}: BrandNavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [reserveOpen, setReserveOpen] = useState(false);
  const [, navigate] = useLocation();

  const menuRef = useRef<HTMLDivElement>(null);
  const reserveRef = useRef<HTMLDivElement>(null);

  /* Close dropdowns on outside click */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
      if (reserveRef.current && !reserveRef.current.contains(e.target as Node)) setReserveOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeAll = () => {
    setMenuOpen(false);
    setReserveOpen(false);
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
    setReserveOpen(false);
    if (hotel.available) {
      window.open(hotel.url, "_blank");
    } else {
      import("sonner").then(({ toast }) => toast(hotel.label + " — Booking Coming Soon"));
    }
  };

  /* Get menu sections based on page type */
  const getMenuSections = (): MenuSection[] => {
    if (pageType === "property") {
      return [{ items: PROPERTY_MENU }];
    }
    if (pageType === "content") {
      return getContentMenu();
    }
    return getBrandMenu();
  };

  const menuSections = getMenuSections();

  const pillClass =
    "pointer-events-auto flex items-center justify-center rounded-full bg-[#ece8e1] backdrop-blur-md shadow-lg hover:bg-[#ece8e1]/90 transition-colors cursor-pointer border border-[#3a2a1a]/20";

  const dropdownPanelClass =
    "absolute mt-2 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-[#3a2a1a]/10";

  return (
    <>
      <div className="fixed top-2 left-0 right-0 z-50 flex items-center justify-between px-4 pointer-events-none">
        {/* LEFT: Hamburger */}
        <div className="pointer-events-auto flex items-center gap-3">
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

            {/* Hamburger dropdown — context-aware */}
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className={`${dropdownPanelClass} left-0 top-full w-52`}
                >
                  <div className="py-2 max-h-[70vh] overflow-y-auto">
                    {menuSections.map((section, sIdx) => (
                      <div key={sIdx}>
                        {/* Section divider (not on first section) */}
                        {sIdx > 0 && <div className="h-px bg-[#3a2a1a]/8 mx-4 my-1" />}

                        {/* Section header */}
                        {section.header && (
                          <div className="px-5 pt-3 pb-1">
                            <span
                              className="text-[#3a2a1a]/35 text-[10px] tracking-[0.2em] uppercase"
                              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                            >
                              {section.header}
                            </span>
                          </div>
                        )}

                        {/* Menu items */}
                        {section.items.map((item) => (
                          <button
                            key={item.label}
                            onClick={() => handleNavigate(item.route)}
                            className="w-full text-left px-5 py-2.5 hover:bg-[#d4c9b8]/50 transition-colors"
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
                    ))}

                    {/* Reserve — always last */}
                    <div className="h-px bg-[#3a2a1a]/8 mx-4 my-1" />
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        setReserveOpen(true);
                      }}
                      className="w-full text-left px-5 py-2.5 hover:bg-[#d4c9b8]/50 transition-colors"
                    >
                      <span
                        className="text-[#3a2a1a]/90 text-[13px] tracking-normal"
                        style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
                      >
                        Reserve
                      </span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* CENTER: Page name (desktop only, hidden on mobile per user preference) */}
        <div className="hidden md:flex items-center pointer-events-auto">
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

        {/* RIGHT: Reserve */}
        <div className="flex items-center pointer-events-auto">
          <div ref={reserveRef} className="relative">
            <button
              onClick={() => { closeAll(); setReserveOpen(!reserveOpen); }}
              className={`${pillClass} h-12 px-6`}
            >
              <span
                className="text-[#3a2a1a] text-[16px] font-medium tracking-normal"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Reserve
              </span>
            </button>

            {/* Reserve dropdown — all 6 properties */}
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
                          className={`text-[13px] tracking-normal whitespace-nowrap ${hotel.available ? "text-[#3a2a1a]/90" : "text-[#3a2a1a]/35"}`}
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
