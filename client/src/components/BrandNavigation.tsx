/**
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
import {
  type PageType,
  PROPERTY_MENU,
  PROPERTIES,
} from "@/data/navigation";

/* ── Global menu items (matches footer) ── */
const GLOBAL_MENU = [
  { label: "The Nayara Story", route: "/story" },
  { label: "Bespoke Experiences", route: "/experiences" },
  { label: "Nature-Based Wellness", route: "/wellness" },
  { label: "A Taste of Place", route: "/gastronomy" },
  { label: "Beyond Sustainability", route: "/sustainability" },
  { label: "Awards & Press", route: "/awards" },
  { label: "Journal & Podcast", route: "/journal" },
];

/* ── Explore dropdown items (quick links to properties) ── */
const EXPLORE_ITEMS = PROPERTIES.map((p) => ({
  label: p.name,
  route: p.route,
}));

/* ── Map routes to property IDs for highlighting ── */
const ROUTE_TO_PROPERTY: Record<string, string> = {};
PROPERTIES.forEach((p) => {
  ROUTE_TO_PROPERTY[p.route] = p.id;
});

interface BrandNavigationProps {
  pageType?: PageType;
  centerLabel?: string;
  centerLinkHome?: boolean;
}

export default function BrandNavigation({
  pageType = "brand",
  centerLabel,
}: BrandNavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [reserveOpen, setReserveOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [, navigate] = useLocation();
  const [location] = useLocation();

  const menuRef = useRef<HTMLDivElement>(null);
  const reserveRef = useRef<HTMLDivElement>(null);
  const exploreRef = useRef<HTMLDivElement>(null);

  /* Determine current property from route */
  const currentPropertyId = ROUTE_TO_PROPERTY[location] || null;

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
      import("sonner").then(({ toast }) => toast(hotel.label + " — Booking Coming Soon"));
    }
  };

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
          <div ref={menuRef} className="relative shrink-0">
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

                    {/* Coming Soon & Nayara By Night — bottom of menu */}
                    <div className="h-px bg-[#3a2a1a]/8 mx-4 my-1.5" />
                    <button onClick={() => handleNavigate("/new-projects")} className={menuItem}>
                      <span className="text-[#3a2a1a]/80 text-[13px]" style={menuText}>Coming Soon</span>
                    </button>
                    <button onClick={() => handleNavigate("/by-night")} className={menuItem}>
                      <span className="text-[#3a2a1a]/80 text-[13px]" style={menuText}>Nayara By Night</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Center: Brand or Property Name */}
          <button
            onClick={() => handleNavigate("/")}
            className="mx-4 text-white/90 hover:text-white transition-colors drop-shadow-sm"
          >
            <span
              className={`tracking-[0.18em] ${centerLabel ? 'text-[18px] md:text-[22px]' : 'text-[13px] uppercase'}`}
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              {centerLabel || (currentPropertyId
                ? PROPERTIES.find(p => p.id === currentPropertyId)?.name || "Nayara Resorts"
                : "Nayara Resorts")}
            </span>
          </button>

          {/* Right: Reserve */}
          <div ref={reserveRef} className="relative shrink-0">
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

        {/* ── MOBILE NAV — Hamburger (left) + Reserve (right) ── */}
        <div className="flex md:hidden items-center justify-between pointer-events-auto">
          {/* Hamburger */}
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

                    {/* Our Resorts */}
                    <div className="h-px bg-[#3a2a1a]/8 mx-4 my-1" />
                    <div className="px-4 pt-1 pb-1">
                      <span className="text-[#3a2a1a]/30 text-[9px] tracking-[0.18em] uppercase" style={menuText}>
                        Our Resorts
                      </span>
                    </div>
                    {EXPLORE_ITEMS.map((item) => (
                      <button key={item.label} onClick={() => handleNavigate(item.route)} className={menuItem}>
                        <span className="text-[#3a2a1a]/80 text-[13px]" style={menuText}>{item.label}</span>
                      </button>
                    ))}

                    {/* Coming Soon & Nayara By Night — bottom of mobile menu */}
                    <div className="h-px bg-[#3a2a1a]/8 mx-4 my-1" />
                    <button onClick={() => handleNavigate("/new-projects")} className={menuItem}>
                      <span className="text-[#3a2a1a]/80 text-[13px]" style={menuText}>Coming Soon</span>
                    </button>
                    <button onClick={() => handleNavigate("/by-night")} className={menuItem}>
                      <span className="text-[#3a2a1a]/80 text-[13px]" style={menuText}>Nayara By Night</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Reserve */}
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
        </div>
      </nav>
    </>
  );
}
