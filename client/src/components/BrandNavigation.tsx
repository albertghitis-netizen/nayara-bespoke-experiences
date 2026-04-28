/*
 * UNIFIED NAVIGATION - One consistent nav for the entire site
 *
 * Desktop:  [Hamburger]  ···  Property Name Strip (center)  ···  [Reserve]
 * Mobile:   [Hamburger]  [Explore]  [Reserve]  [Concierge]
 *
 * Center strip: horizontal list of all property names, clickable,
 * with the current property highlighted. Shows on ALL pages.
 */

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "wouter";
import { hotelBookingLinks } from "@/data/booking";
import { getPalette } from "@/data/propertyPalettes";
import {
  type PageType,
  PROPERTY_MENU,
  PROPERTIES,
  COSTA_RICA_ITEMS,
  RESORTS_ITEMS,
} from "@/data/navigation";

export interface NavPalette {
  /** Dark text/icon color — replaces #3B2B26 */
  dark: string;
  /** Light pill background — replaces #ece8e1 */
  pillBg: string;
  /** Hover pill background */
  pillHover: string;
}

interface BrandNavigationProps {
  pageType?: PageType;
  centerLabel?: string;
  centerLinkHome?: boolean;
  hideCenterLabel?: boolean;
  navPalette?: NavPalette;
}

export default function BrandNavigation({
  pageType = "brand",
  centerLabel,
  hideCenterLabel = false,
  navPalette,
}: BrandNavigationProps) {
  /* Resolve palette — auto-detect from URL or use brand brown */
  const [location] = useLocation();
  const [, navigate] = useLocation();
  const propertySlug = location.split("/")[1] || "";
  const propertyPalette = ["tented-camp", "gardens", "springs", "alto-atacama", "bocas-del-toro", "hangaroa"].includes(propertySlug)
    ? getPalette(propertySlug)
    : null;
  const dk = navPalette?.dark ?? (propertyPalette?.navPillBg ? "#fff" : "#fff");
  const pillBg = navPalette?.pillBg ?? (propertyPalette ? `${propertyPalette.navPillBg}B3` : "rgba(59,43,38,0.8)");
  const pillHv = navPalette?.pillHover ?? (propertyPalette ? `${propertyPalette.navPillBg}E6` : "rgba(59,43,38,0.95)");
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [reserveOpen, setReserveOpen] = useState(false);
  const [costaRicaExpanded, setCostaRicaExpanded] = useState(false);
  const [resortsExpanded, setResortsExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const reserveRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const reserveBtnRef = useRef<HTMLButtonElement>(null);

  /* Track scroll to fade out center label */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close dropdowns on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      // Don't close menu if clicking the hamburger button itself
      if (menuRef.current && !menuRef.current.contains(target) && hamburgerRef.current && !hamburgerRef.current.contains(target)) setMenuOpen(false);
      // Don't close reserve if clicking the reserve button itself
      if (reserveRef.current && !reserveRef.current.contains(target) && reserveBtnRef.current && !reserveBtnRef.current.contains(target)) setReserveOpen(false);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const handleNavigate = (route: string) => {
    navigate(route);
    setMenuOpen(false);
    setCostaRicaExpanded(false);
    setResortsExpanded(false);
  };

  const menuItem = "w-full text-left px-5 py-2.5 hover:bg-[#d4c9b8]/40 transition-colors";
  const menuText = { fontFamily: "var(--font-body)", fontWeight: 400 };

  return (
    <>
      {/* Fixed pills — always visible */}
      <div className="fixed top-6 left-6 right-6 z-50 flex items-center justify-between pointer-events-none">
        {/* Hamburger pill */}
        <button
          ref={hamburgerRef}
          onClick={() => {
            setMenuOpen(!menuOpen);
            setCostaRicaExpanded(false);
            setResortsExpanded(false);
          }}
          className="pointer-events-auto flex items-center justify-center h-12 px-5 rounded-full bg-[#3a2a1a]/70 backdrop-blur-md shadow-lg hover:bg-[#3a2a1a]/90 transition-all duration-300"
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

        {/* Reserve pill */}
        <button
          ref={reserveBtnRef}
          onClick={() => setReserveOpen(!reserveOpen)}
          className="pointer-events-auto flex items-center justify-center h-12 px-6 rounded-full bg-[#3a2a1a]/70 backdrop-blur-md shadow-lg hover:bg-[#3a2a1a]/90 transition-all duration-300"
        >
          <span
            className="text-white text-[11px] tracking-[0.25em] uppercase"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Reserve
          </span>
        </button>
      </div>

      {/* Full-screen menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#f7f5f0]/98 backdrop-blur-md overflow-y-auto"
            ref={menuRef}
          >
            <div className="max-w-lg mx-auto px-8 pt-28 pb-16">
              {/* Costa Rica Dropdown */}
              <div className="border-b border-stone-200">
                <button
                  type="button"
                  onClick={() => setCostaRicaExpanded(!costaRicaExpanded)}
                  className="flex items-center justify-between w-full text-left py-4"
                >
                  <span
                    className="text-[#3a2a1a] text-lg tracking-[0.08em] uppercase"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                  >
                    Costa Rica
                  </span>
                  <motion.svg
                    animate={{ rotate: costaRicaExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-4 h-4 text-[#3a2a1a]/40"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {costaRicaExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-6 pb-4 flex flex-col gap-3">
                        {COSTA_RICA_ITEMS.map((item) => (
                          <button
                            key={item.label}
                            type="button"
                            onClick={() => handleNavigate(item.route)}
                            className="text-left flex items-center gap-3"
                          >
                            <span
                              className="text-sm tracking-[0.04em] text-[#5a4a3a] hover:text-[#3a2a1a] transition-colors"
                              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
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

              {/* 7 Brand Page Links */}
              {[
                { label: "Experiences", route: "/experiences" },
                { label: "Sustainability", route: "/sustainability" },
                { label: "Wellness", route: "/wellness" },
                { label: "Gastronomy", route: "/gastronomy" },
                { label: "Journal", route: "/journal" },
                { label: "Press & Awards", route: "/awards" },
                { label: "Gallery", route: "/gallery" },
              ].map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleNavigate(item.route)}
                  className="block w-full text-left py-4 border-b border-stone-200"
                >
                  <span
                    className="text-[#3a2a1a] text-lg tracking-[0.08em] uppercase"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                  >
                    {item.label}
                  </span>
                </button>
              ))}

              {/* Our Resorts Dropdown */}
              <div className="border-b border-stone-200">
                <button
                  type="button"
                  onClick={() => setResortsExpanded(!resortsExpanded)}
                  className="flex items-center justify-between w-full text-left py-4"
                >
                  <span
                    className="text-[#3a2a1a] text-lg tracking-[0.08em] uppercase"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                  >
                    Our Resorts
                  </span>
                  <motion.svg
                    animate={{ rotate: resortsExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-4 h-4 text-[#3a2a1a]/40"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {resortsExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-6 pb-4 flex flex-col gap-3">
                        {RESORTS_ITEMS.map((item, idx) => (
                          <div key={item.label}>
                            {idx === RESORTS_ITEMS.length - 1 && (
                              <div className="h-px bg-[#3a2a1a]/10 my-2" />
                            )}
                            <button
                              type="button"
                              onClick={() => handleNavigate(item.route)}
                              className="text-left flex items-center gap-3"
                            >
                              <span
                                className="text-sm tracking-[0.04em] text-[#5a4a3a] hover:text-[#3a2a1a] transition-colors"
                                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                              >
                                {item.label}
                              </span>
                            </button>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reserve dropdown */}
      <AnimatePresence>
        {reserveOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 right-6 z-40 bg-white rounded-lg shadow-xl overflow-hidden"
            ref={reserveRef}
          >
            <div className="py-2">
              {hotelBookingLinks.map((hotel) => (
                <a
                  key={hotel.id}
                  href={hotel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-[#3a2a1a] hover:bg-[#f7f5f0] transition-colors"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                >
                  {hotel.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
