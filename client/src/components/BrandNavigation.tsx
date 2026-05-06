/**
 * UNIFIED NAVIGATION - One consistent nav for the entire site
 *
 * Desktop:  [Hamburger]  ···  Property Name Strip (center)  ···  [Reserve]
 * Mobile:   [Hamburger]  [Reserve]
 *
 * Hamburger menu: Explore, Our Resorts, Journal (single link)
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
  RESORTS_ITEMS,
  EXPLORE_MENU_ITEMS,
  JOURNAL_NAV_ITEM,
  BRAND_HOME_ITEM,
} from "@/data/navigation";

/* ── Menu state keys ── */
type MenuKey = "explore" | "resorts";

/* ── Map routes to property IDs for highlighting ── */
const ROUTE_TO_PROPERTY: Record<string, string> = {};
PROPERTIES.forEach((p) => {
  ROUTE_TO_PROPERTY[p.route] = p.id;
});

export interface NavPalette {
  /** Dark text/icon color , replaces #3B2B26 */
  dark: string;
  /** Light pill background , replaces #ece8e1 */
  pillBg: string;
  /** Hover pill background */
  pillHover: string;
}

export interface SectionNavItem {
  id: string;
  label: string;
}

interface BrandNavigationProps {
  pageType?: PageType;
  centerLabel?: string;
  centerLinkHome?: boolean;
  hideCenterLabel?: boolean;
  navPalette?: NavPalette;
  /** Property-level section navigation items */
  sectionNav?: SectionNavItem[];
}

export default function BrandNavigation({
  pageType = "brand",
  centerLabel,
  hideCenterLabel = false,
  navPalette,
  sectionNav,
}: BrandNavigationProps) {
  /* Resolve palette , auto-detect from URL or use brand brown */
  const [location] = useLocation();
  const [, navigate] = useLocation();
  const propertySlug = location.split("/")[1] || "";
  const propertyPalette = ["tented-camp", "gardens", "springs", "alto-atacama", "bocas-del-toro", "hangaroa"].includes(propertySlug)
    ? getPalette(propertySlug)
    : null;
  const dk = navPalette?.dark ?? (propertyPalette?.navPillBg ? "#fff" : "#fff");
  const pillBg = navPalette?.pillBg ?? (propertyPalette ? `${propertyPalette.navPillBg}B3` : "rgba(59,43,38,0.8)");
  const pillHv = navPalette?.pillHover ?? (propertyPalette ? `${propertyPalette.navPillBg}E6` : "rgba(59,43,38,0.95)");
  
  // For Costa Rica pages, use olive green for text and borders instead of espresso
  const costaRicaRoutes = [
    "curated-excursions",
    "costa-rica-wellness",
    "tented-camp/gastronomy",
    "tented-camp-sustainability",
  ];
  const isCR = costaRicaRoutes.includes(propertySlug);
  const textColor = "#3B2B26";
  const textColorMuted = "#3B2B26";
  const hoverBg = isCR ? "#868B75/10" : "#d4c9b8/40";
  const borderColor = isCR ? "#868B75/10" : "#3B2B26/10";
  const pillBgCR = isCR ? "#868B7599" : "rgba(59,43,38,0.8)";
  const pillHvCR = isCR ? "#868B75E6" : "rgba(59,43,38,0.95)";
  const finalPillBg = navPalette?.pillBg ?? (propertyPalette ? `${propertyPalette.navPillBg}B3` : pillBgCR);
  const finalPillHv = navPalette?.pillHover ?? (propertyPalette ? `${propertyPalette.navPillBg}E6` : pillHvCR);
  const [menuOpen, setMenuOpen] = useState(false);
  const [reserveOpen, setReserveOpen] = useState(false);
  const [sectionNavOpen, setSectionNavOpen] = useState(false);
  const sectionNavRef = useRef<HTMLDivElement>(null);
  const [expandedMenus, setExpandedMenus] = useState<Record<MenuKey, boolean>>({
    explore: false,
    resorts: false,
  });
  const [scrolled, setScrolled] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const reserveRef = useRef<HTMLDivElement>(null);

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
      const isDropdownToggle = (target as Element)?.closest('[data-dropdown-toggle]');
      if (menuRef.current && !menuRef.current.contains(target) && !isDropdownToggle) setMenuOpen(false);
      if (reserveRef.current && !reserveRef.current.contains(target) && !isDropdownToggle) setReserveOpen(false);
      if (sectionNavRef.current && !sectionNavRef.current.contains(target) && !isDropdownToggle) setSectionNavOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const closeAll = () => {
    setMenuOpen(false);
    setReserveOpen(false);
    setSectionNavOpen(false);
    setExpandedMenus({ explore: false, resorts: false });
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
      import("sonner").then(({ toast }) => toast(hotel.label + " , Booking Coming Soon"));
    }
  };

  const toggleDropdown = (key: MenuKey) => {
    setExpandedMenus((prev) => {
      const allClosed: Record<MenuKey, boolean> = { explore: false, resorts: false };
      return { ...allClosed, [key]: !prev[key] };
    });
  };

  /* ── Shared styles ── */
  const pillStyle: React.CSSProperties = {
    backgroundColor: finalPillBg,
    borderColor: "rgba(255,255,255,0.1)",
  };

  const pill =
    "flex items-center justify-center rounded-full backdrop-blur-md shadow-sm transition-colors cursor-pointer border";

  const dropdownCls =
    "absolute mt-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden border";
  const dropdownStyle: React.CSSProperties = {
    borderColor: borderColor,
  };

  const menuItem =
    "w-full text-left px-5 py-2.5 transition-colors";

  const menuText = {
    fontFamily: "var(--font-body)",
    fontWeight: 500 as const,
    color: "#3B2B26",
  };

  const dropdownAnim = {
    initial: { opacity: 0, y: -6 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -6 },
    transition: { duration: 0.15 },
  };

  /* ── Build hamburger menu items ── */
  const propertyItems = pageType === "property" ? PROPERTY_MENU : [];

  /* ── Reusable dropdown section renderer ── */
  const renderDropdownSection = (key: MenuKey, label: string, items: { label: string; route: string; separatorBefore?: boolean }[]) => (
    <div>
      <button
        type="button"
        data-dropdown-toggle="true"
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleDropdown(key); }}
        className={`${menuItem} flex items-center justify-between hover:bg-[#d4c9b8]/60`}
      >
        <span className="text-[#3B2B26]/80 text-[13px]" style={menuText}>{label}</span>
        <svg className={`w-3 h-3 text-[#3B2B26]/40 transition-transform duration-300 ${expandedMenus[key] ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <AnimatePresence>
        {expandedMenus[key] && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pl-4 pb-1">
              {items.map((item) => (
                <div key={item.label}>
                  {item.separatorBefore && <div className="h-px bg-[#3B2B26]/8 mx-4 my-1" />}
                  <button type="button" onClick={() => handleNavigate(item.route)} className={menuItem}>
                    <span className="text-[#3B2B26]/60 text-[12px]" style={menuText}>{item.label}</span>
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  /* ── Resorts items with separator before last item ── */
  const resortsWithSeparator = RESORTS_ITEMS.map((item, idx) => ({
    ...item,
    separatorBefore: idx === RESORTS_ITEMS.length - 1,
  }));

  /* ── Hamburger menu content (shared between desktop & mobile) ── */
  const renderMenuContent = () => (
    <div className="py-2 max-h-[75vh] overflow-y-auto">
      {/* Property section anchors (only on property pages) */}
      {propertyItems.length > 0 && (
        <>
          <div className="px-5 pt-2 pb-1">
            <span className="text-[10px] tracking-[0.18em]" style={{...menuText, opacity: 0.3}}>
              This Property
            </span>
          </div>
          {propertyItems.map((item) => (
            <button key={item.label} onClick={() => handleNavigate(item.route)} className={menuItem}>
              <span className="text-[13px]" style={menuText}>{item.label}</span>
            </button>
          ))}
          <div className="mx-4 my-1.5" style={{height: '1px', backgroundColor: `${textColor}14`}} />
        </>
      )}

      {/* Flat list , categories (includes Journal above Gallery) */}
      {EXPLORE_MENU_ITEMS.map((item) => (
        <button key={item.label} type="button" onClick={() => handleNavigate(item.route)} className={`${menuItem} hover:bg-[#d4c9b8]/60`}>
          <span className="text-[13px]" style={menuText}>{item.label}</span>
        </button>
      ))}

      <div className="mx-4 my-1.5" style={{height: '1px', backgroundColor: `${textColor}14`}} />

      {/* Flat list , hotels */}
      {RESORTS_ITEMS.map((item) => (
        <button key={item.label} type="button" onClick={() => handleNavigate(item.route)} className={`${menuItem} hover:bg-[#d4c9b8]/60`}>
          <span className="text-[13px]" style={menuText}>{item.label}</span>
        </button>
      ))}

      <div className="mx-4 my-1.5" style={{height: '1px', backgroundColor: `${textColor}14`}} />

      {/* Nayara Resorts , brand home at the very bottom */}
      <button type="button" onClick={() => handleNavigate(BRAND_HOME_ITEM.route)} className={`${menuItem} hover:bg-[#d4c9b8]/60`}>
        <span className="text-[13px]" style={menuText}>{BRAND_HOME_ITEM.label}</span>
      </button>
    </div>
  );

  return (
    <>
      <nav className="fixed top-2 left-0 right-0 z-50 px-3 pointer-events-none">
        {/* ── DESKTOP NAV ── */}
        <div className="hidden md:flex items-center justify-between pointer-events-auto relative">
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
                <motion.div {...dropdownAnim} className={`${dropdownCls} left-0 top-full w-56`}>
                  {renderMenuContent()}
                </motion.div>
              )}
            </AnimatePresence>
           </div>


          {/* Center: Property Section Nav or Brand Name */}
          {sectionNav && sectionNav.length > 0 ? (
            <div ref={sectionNavRef} className="absolute left-1/2 -translate-x-1/2">
              <button
                onClick={() => { closeAll(); setSectionNavOpen(!sectionNavOpen); }}
                className={`${pill} h-9 px-4 gap-2`}
                style={pillStyle}
              >
                <span className="text-[11px] tracking-[0.12em] uppercase" style={{ fontFamily: 'var(--font-body)', fontWeight: 500, color: dk }}>
                  {centerLabel || (currentPropertyId
                    ? PROPERTIES.find(p => p.id === currentPropertyId)?.name || "Explore"
                    : "Explore")}
                </span>
                <svg className="w-3 h-3 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: dk, transform: sectionNavOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              <AnimatePresence>
                {sectionNavOpen && (
                  <motion.div {...dropdownAnim} className={`${dropdownCls} left-1/2 -translate-x-1/2 top-full w-52`}>
                    <div className="py-2">
                      {sectionNav.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => {
                            closeAll();
                            const el = document.getElementById(item.id);
                            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }}
                          className={`${menuItem} flex items-center`}
                        >
                          <span
                            className="text-[13px] text-[#3B2B26]/80"
                            style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
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
          ) : (
            (() => {
              const isHome = location === "/";
              const isPropertyPage = pageType === "property";
              const hasCenterLabel = !!centerLabel;
              const showCenter = !hideCenterLabel && (isHome || isPropertyPage || hasCenterLabel);
              if (!showCenter) return null;
              return (
                <span
                  className="absolute left-1/2 -translate-x-1/2 text-white drop-shadow-sm pointer-events-none select-none transition-opacity duration-500"
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
            })()
          )}

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
                <motion.div {...dropdownAnim} className={`${dropdownCls} right-0 top-full w-56`}>
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

        {/* ── MOBILE NAV , Hamburger (left) + Center Property Nav + Reserve (right) ── */}
        <div className="flex md:hidden items-center justify-between pointer-events-auto">
          {/* Left: Hamburger */}
          <div ref={menuRef} className="relative">
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
                <motion.div {...dropdownAnim} className={`${dropdownCls} left-0 top-full w-56`}>
                  {renderMenuContent()}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* Center: Property Section Nav (mobile) */}
          {sectionNav && sectionNav.length > 0 && (
            <div className="relative">
              <button
                onClick={() => { closeAll(); setSectionNavOpen(!sectionNavOpen); }}
                className={`${pill} h-9 px-3 gap-1.5`}
                style={pillStyle}
                aria-label="Property sections"
              >
                <span className="text-[10px] tracking-[0.08em] uppercase" style={{ fontFamily: 'var(--font-body)', fontWeight: 500, color: dk }}>
                  {centerLabel || "Explore"}
                </span>
                <svg className="w-3 h-3 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: dk, transform: sectionNavOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              <AnimatePresence>
                {sectionNavOpen && (
                  <motion.div {...dropdownAnim} className={`${dropdownCls} left-1/2 -translate-x-1/2 top-full w-48`}>
                    <div className="py-2">
                      {sectionNav.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => {
                            closeAll();
                            const el = document.getElementById(item.id);
                            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }}
                          className={`${menuItem} flex items-center`}
                        >
                          <span
                            className="text-[13px] text-[#3B2B26]/80"
                            style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
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
          )}

          {/* Right: Reserve */}
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
                <motion.div {...dropdownAnim} className={`${dropdownCls} right-0 top-full w-56`}>
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
      </nav>
    </>
  );
}
