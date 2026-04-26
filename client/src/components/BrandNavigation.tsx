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
import { getPalette } from "@/data/propertyPalettes";
import {
  type PageType,
  PROPERTY_MENU,
  PROPERTIES,
} from "@/data/navigation";

/* ── Global menu items (matches footer) ── */
const GLOBAL_MENU = [
  { label: "Three Resorts, One Rainforest", route: "/arenal" },
  { label: "Bespoke Experiences", route: "/experiences" },
  { label: "Nature-Based Wellness", route: "/wellness" },
  { label: "A Taste of Place", route: "/gastronomy" },
  { label: "Beyond Sustainability", route: "/sustainability" },
  { label: "Nayara Journal", route: "/journal" },
  { label: "Press & Awards", route: "/awards" },
  { label: "Gallery", route: "/gallery" },
];

/* ── Internal pages (visible only in menu with "Internal" label) ── */
const INTERNAL_MENU = [
  { label: "Coming Soon", route: "/internal/new-projects" },
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
  const [exploreOpen, setExploreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  const menuRef = useRef<HTMLDivElement>(null);
  const reserveRef = useRef<HTMLDivElement>(null);
  const exploreRef = useRef<HTMLDivElement>(null);

  /* Determine current property from route */
  const currentPropertyId = ROUTE_TO_PROPERTY[location] || null;

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
  const pillStyle: React.CSSProperties = {
    backgroundColor: pillBg,
    borderColor: "rgba(255,255,255,0.1)",
  };
  const pillHoverBg = `${pillHv}99`;

  const pill =
    "flex items-center justify-center rounded-full backdrop-blur-md shadow-sm transition-colors cursor-pointer border";

  const dropdown =
    "absolute mt-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden border border-[#3B2B26]/10";

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
              className={`${pill} w-9 h-9`}
              style={pillStyle}
              aria-label="Menu"
            >
              <div className="flex flex-col gap-1">
                <span className={`block w-4 h-px transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[2.5px]" : ""}`} style={{ backgroundColor: dk }} />
                <span className={`block w-4 h-px transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[2.5px]" : ""}`} style={{ backgroundColor: dk }} />
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
                          <span className="text-[#3B2B26]/30 text-[10px] tracking-[0.18em]" style={menuText}>
                            This Property
                          </span>
                        </div>
                        {propertyItems.map((item) => (
                          <button key={item.label} onClick={() => handleNavigate(item.route)} className={menuItem}>
                            <span className="text-[#3B2B26]/80 text-[13px]" style={menuText}>{item.label}</span>
                          </button>
                        ))}
                        <div className="h-px bg-[#3B2B26]/8 mx-4 my-1.5" />
                      </>
                    )}

                    {/* Global links */}
                    {propertyItems.length > 0 && (
                      <div className="px-5 pt-1 pb-1">
                        <span className="text-[#3B2B26]/30 text-[10px] tracking-[0.18em]" style={menuText}>
                          Explore Nayara
                        </span>
                      </div>
                    )}
                    {GLOBAL_MENU.map((item) => (
                      <button key={item.label} onClick={() => handleNavigate(item.route)} className={menuItem}>
                        <span className="text-[#3B2B26]/80 text-[13px]" style={menuText}>{item.label}</span>
                      </button>
                    ))}

                    {/* Resorts sub-section */}
                    <div className="h-px bg-[#3B2B26]/8 mx-4 my-1.5" />
                    <div className="px-5 pt-1 pb-1">
                      <span className="text-[#3B2B26]/30 text-[10px] tracking-[0.18em]" style={menuText}>
                        Our Resorts
                      </span>
                    </div>
                    {EXPLORE_ITEMS.map((item) => (
                      <button key={item.label} onClick={() => handleNavigate(item.route)} className={menuItem}>
                        <span className="text-[#3B2B26]/80 text-[13px]" style={menuText}>{item.label}</span>
                      </button>
                    ))}

                    {/* Back to brand home */}
                    <div className="h-px bg-[#3B2B26]/8 mx-4 my-1.5" />
                    <button onClick={() => handleNavigate("/")} className={menuItem}>
                      <span className="text-[#3B2B26]/80 text-[13px]" style={menuText}>Nayara Resorts</span>
                    </button>



                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Center: Brand or Property Name — hidden on non-home brand/content pages unless centerLabel is set */}
          {(() => {
            const isHome = location === "/";
            const isPropertyPage = pageType === "property";
            const hasCenterLabel = !!centerLabel;
            const showCenter = !hideCenterLabel && (isHome || isPropertyPage || hasCenterLabel);
            if (!showCenter) return null;
            return (
              <span
                className="mx-4 ml-6 text-white drop-shadow-sm pointer-events-none select-none transition-opacity duration-500"
                style={{ opacity: scrolled ? 0 : 1 }}
              >
                <span
                  className="tracking-[0.18em] text-[16px] md:text-[28px]"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                >
                  {centerLabel || (currentPropertyId
                    ? PROPERTIES.find(p => p.id === currentPropertyId)?.name || "Nayara Resorts"
                    : "Nayara Resorts")}
                </span>
              </span>
            );
          })()}

          {/* Right: Reserve */}
          <div ref={reserveRef} className="relative shrink-0">
            <button
              onClick={() => { closeAll(); setReserveOpen(!reserveOpen); }}
              className={`${pill} h-9 px-4`}
              style={pillStyle}
            >
              <span className="text-xs tracking-[0.08em]" style={{ ...menuText, color: dk }}>Reserve</span>
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
                          className={`text-[13px] whitespace-nowrap ${hotel.available ? "text-[#3B2B26]/80" : "text-[#3B2B26]/30"}`}
                          style={menuText}
                        >
                          {hotel.label}
                        </span>
                        {!hotel.available && (
                          <span className="text-[8px] tracking-[0.1em] text-[#3B2B26]/20 border border-[#3B2B26]/12 px-1.5 py-0.5 rounded-full">
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
              className={`${pill} w-9 h-9`}
              style={pillStyle}
              aria-label="Menu"
            >
              <div className="flex flex-col gap-1">
                <span className={`block w-3.5 h-px transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[2.5px]" : ""}`} style={{ backgroundColor: dk }} />
                <span className={`block w-3.5 h-px transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[2.5px]" : ""}`} style={{ backgroundColor: dk }} />
              </div>
            </button>

            <AnimatePresence>
              {menuOpen && (
                <motion.div {...dropdownAnim} className={`${dropdown} left-0 top-full w-52`}>
                  <div className="py-2 max-h-[70vh] overflow-y-auto">
                    {propertyItems.length > 0 && (
                      <>
                        <div className="px-4 pt-2 pb-1">
                          <span className="text-[#3B2B26]/30 text-[9px] tracking-[0.18em]" style={menuText}>
                            This Property
                          </span>
                        </div>
                        {propertyItems.map((item) => (
                          <button key={item.label} onClick={() => handleNavigate(item.route)} className={menuItem}>
                            <span className="text-[#3B2B26]/80 text-[13px]" style={menuText}>{item.label}</span>
                          </button>
                        ))}
                        <div className="h-px bg-[#3B2B26]/8 mx-4 my-1" />
                      </>
                    )}
                    {GLOBAL_MENU.map((item) => (
                      <button key={item.label} onClick={() => handleNavigate(item.route)} className={menuItem}>
                        <span className="text-[#3B2B26]/80 text-[13px]" style={menuText}>{item.label}</span>
                      </button>
                    ))}

                    {/* Our Resorts */}
                    <div className="h-px bg-[#3B2B26]/8 mx-4 my-1" />
                    <div className="px-4 pt-1 pb-1">
                      <span className="text-[#3B2B26]/30 text-[9px] tracking-[0.18em]" style={menuText}>
                        Our Resorts
                      </span>
                    </div>
                    {EXPLORE_ITEMS.map((item) => (
                      <button key={item.label} onClick={() => handleNavigate(item.route)} className={menuItem}>
                        <span className="text-[#3B2B26]/80 text-[13px]" style={menuText}>{item.label}</span>
                      </button>
                    ))}

                    {/* Back to brand home */}
                    <div className="h-px bg-[#3B2B26]/8 mx-4 my-1" />
                    <button onClick={() => handleNavigate("/")} className={menuItem}>
                      <span className="text-[#3B2B26]/80 text-[13px]" style={menuText}>Nayara Resorts</span>
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
              className={`${pill} h-9 px-4`}
              style={pillStyle}
            >
              <span className="text-xs tracking-[0.08em]" style={{ ...menuText, color: dk }}>Reserve</span>
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
                          className={`text-[13px] whitespace-nowrap ${hotel.available ? "text-[#3B2B26]/80" : "text-[#3B2B26]/30"}`}
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
