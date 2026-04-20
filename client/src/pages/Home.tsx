/*
 * NAYARA BESPOKE EXPERIENCES — Landing Page
 * Design: "Desert Codex" — Editorial Cartography
 * Property selector showcasing all Nayara destinations
 * Typography: Playfair Display (display) + DM Sans (body)
 * Rule: Real photos only. No AI-generated imagery.
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import BlobVideo from "@/components/BlobVideo";
import { useIsMobile } from "@/hooks/useMobile";
import { useAuth } from "@/_core/hooks/useAuth";
import AwardWinningProperties from "@/components/AwardWinningProperties";
import ExploreOurWorld from "@/components/ExploreOurWorld";
import Footer from "@/components/Footer";

/* Property routes for dropdowns */
const propertyLinks = [
  { label: "Nayara Alto Atacama", route: "/alto-atacama", available: true },
  { label: "Nayara Arenal", route: "/arenal", available: true },
  { label: "Nayara Hangaroa", route: "/hangaroa", available: false },
  { label: "Nayara Bocas del Toro", route: "/bocas-del-toro", available: false },
];

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <BrandNavigation />
      <HeroHeader />
      <AwardWinningProperties />
      <ExploreOurWorld />
      <AwardsSection />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BRAND NAVIGATION — Hamburger pill left, Reserve pill right
   Everything else in the hamburger menu with dropdowns
   ═══════════════════════════════════════════════════════════════ */
function BrandNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [, navigate] = useLocation();

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

  /* Sections that get property dropdowns */
  const dropdownSections = ["Experiences", "Wellness"];

  return (
    <>
      {/* Fixed pills — always visible */}
      <div className="fixed top-6 left-6 right-6 z-50 flex items-center justify-between pointer-events-none">
        {/* Hamburger pill */}
        <button
          onClick={() => { setMenuOpen(!menuOpen); setExpandedSection(null); }}
          className="pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full bg-[#3a2a1a]/70 backdrop-blur-md shadow-lg hover:bg-[#3a2a1a]/90 transition-all duration-300"
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
          onClick={() => handleComingSoon("Reservation")}
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
          >
            <div className="max-w-lg mx-auto px-8 pt-28 pb-16">
              {/* Our Resorts — simple link, coming soon */}
              <button
                onClick={() => handleComingSoon("Our Resorts")}
                className="block w-full text-left py-4 border-b border-stone-200"
              >
                <span
                  className="text-[#3a2a1a] text-lg tracking-[0.08em] uppercase"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                >
                  Our Resorts
                </span>
              </button>

              {/* Gallery — coming soon */}
              <button
                onClick={() => handleComingSoon("Gallery")}
                className="block w-full text-left py-4 border-b border-stone-200"
              >
                <span
                  className="text-[#3a2a1a] text-lg tracking-[0.08em] uppercase"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                >
                  Gallery
                </span>
              </button>

              {/* Experiences, Wellness, Sustainability — each with property dropdown */}
              {dropdownSections.map((section) => (
                <div key={section} className="border-b border-stone-200">
                  <button
                    onClick={() => toggleSection(section)}
                    className="flex items-center justify-between w-full text-left py-4"
                  >
                    <span
                      className="text-[#3a2a1a] text-lg tracking-[0.08em] uppercase"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                    >
                      {section}
                    </span>
                    <motion.svg
                      animate={{ rotate: expandedSection === section ? 180 : 0 }}
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
                    {expandedSection === section && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-6 pb-4 flex flex-col gap-3">
                          {propertyLinks.map((prop) => (
                            <button
                              key={prop.label}
                              onClick={() =>
                                prop.available
                                  ? handleNavigate(prop.route)
                                  : handleComingSoon(prop.label)
                              }
                              className="text-left flex items-center gap-3"
                            >
                              <span
                                className={`text-sm tracking-[0.04em] ${
                                  prop.available
                                    ? "text-[#5a4a3a] hover:text-[#3a2a1a]"
                                    : "text-[#5a4a3a]/40"
                                } transition-colors`}
                                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                              >
                                {prop.label}
                              </span>
                              {!prop.available && (
                                <span
                                  className="text-[9px] tracking-[0.15em] uppercase text-stone-400 border border-stone-300 px-1.5 py-0.5"
                                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                                >
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

              {/* Sustainability — coming soon */}
              <button
                onClick={() => handleComingSoon("Sustainability")}
                className="block w-full text-left py-4 border-b border-stone-200"
              >
                <span
                  className="text-[#3a2a1a] text-lg tracking-[0.08em] uppercase"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                >
                  Sustainability
                </span>
              </button>

              {/* Awards — direct link */}
              <button
                onClick={() => handleNavigate("/awards")}
                className="block w-full text-left py-4 border-b border-stone-200"
              >
                <span
                  className="text-[#3a2a1a] text-lg tracking-[0.08em] uppercase"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                >
                  Awards
                </span>
              </button>

              {/* Journal — direct link */}
              <button
                onClick={() => handleNavigate("/journal")}
                className="block w-full text-left py-4 border-b border-stone-200"
              >
                <span
                  className="text-[#3a2a1a] text-lg tracking-[0.08em] uppercase"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                >
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
   HERO HEADER — "Luxury Resorts Rooted in Nature"
   ═══════════════════════════════════════════════════════════════ */
function HeroHeader() {
  const isMobile = useIsMobile();
  const heroVideo = isMobile
    ? "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/compressed-landing-vertical_a7242694.mp4"
    : "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/landing-desktop-horizontal_471d1062.mov";

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <BlobVideo
          src={heroVideo}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Subtle Nayara brand mark — just below nav bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.4 }}
        className="absolute top-24 md:top-28 left-0 right-0 z-10 flex justify-center"
      >
        <span
          className="text-white/15 text-[11px] md:text-xs tracking-[0.5em] uppercase"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          Nayara
        </span>
      </motion.div>

      {/* Content — anchored to bottom */}
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6 md:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-2xl md:text-4xl lg:text-5xl leading-[0.95] tracking-wide text-center"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          Luxury Resorts Rooted in Nature
        </motion.h1>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   AWARDS SECTION — Full-width 6 badges in single row
   ═══════════════════════════════════════════════════════════════ */
function AwardsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#f7f5f0]">
      {/* H2 and label in constrained width */}
      <div className="max-w-4xl mx-auto px-6 md:px-10 mb-12 md:mb-16">
        <div className="text-[11px] tracking-[0.25em] uppercase text-[#5a4a3a]/60 mb-4">
          Recognition & Certification
        </div>
        <h2 className="text-2xl md:text-4xl lg:text-[38px] leading-[1.15] tracking-wide" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#3a2a1a" }}>
          Honored by the World's Leading Authorities
        </h2>
      </div>

      {/* Full-width 6 badges in single row, centered */}
      <div className="w-full flex items-center justify-center gap-6 md:gap-8 lg:gap-10 px-6 md:px-10 flex-wrap">
        <img
          src="/manus-storage/springs-badge-relais-chateaux_e497d355.png"
          alt="Relais & Châteaux"
          className="h-16 md:h-20 lg:h-24 w-auto object-contain transition-transform duration-300 hover:scale-110"
          loading="lazy"
        />
        <img
          src="/manus-storage/atacama-badge-leading-hotels_fd8579cb.png"
          alt="Leading Hotels of the World"
          className="h-16 md:h-20 lg:h-24 w-auto object-contain transition-transform duration-300 hover:scale-110"
          loading="lazy"
        />
        <img
          src="/manus-storage/bocas-badge-green-globe-trans_c30634e2.png"
          alt="Green Globe Certified"
          className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain transition-transform duration-300 hover:scale-110"
          loading="lazy"
        />
        <img
          src="/manus-storage/tented-badge-travel-leisure_4d8b321b.png"
          alt="Travel + Leisure"
          className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain transition-transform duration-300 hover:scale-110"
          loading="lazy"
        />
        <img
          src="/manus-storage/springs-badge-michelin_5be6618e.png"
          alt="Michelin 3 Stars"
          className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain transition-transform duration-300 hover:scale-110"
          loading="lazy"
        />
        <img
          src="/manus-storage/atacama-badge-s-sustainability_b5ef1c79.png"
          alt="S Sustainability"
          className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain transition-transform duration-300 hover:scale-110"
          loading="lazy"
        />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PILLARS - Four brand pillars with links
   ═══════════════════════════════════════════════════════════════ */
function PillarsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#f7f5f0]">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <h2 className="text-2xl md:text-3xl font-display mb-8">Our Pillars</h2>
        {/* Add pillar content here */}
      </div>
    </section>
  );
}
