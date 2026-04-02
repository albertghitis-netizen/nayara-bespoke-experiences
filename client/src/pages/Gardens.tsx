/**
 * NAYARA GARDENS — Property Homepage
 * Rebuilt to match spherical site structure exactly
 * Sections: Nav → Hero → Footer
 */

import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, ArrowLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/useMobile";
import BlobVideo from "@/components/BlobVideo";
import Footer from "@/components/Footer";
import { BOOKING_URLS } from "@/data/booking";

const BOOKING_URL = BOOKING_URLS.gardens;

/* ── CDN Assets ── */
const CDN = {
  heroDesktop:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/gardens-hero-new_c919df72.mp4",
  heroMobile:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/compressed-video2_1f850ac2.mp4",
  logoWhite:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara-logo-mobile-white_36c5a575.svg",
  logoDark:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara-logo-mobile_b4d2ae65.svg",
};

export default function Gardens() {
  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <GardensNav />
      <HeroSection />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   NAVIGATION — Matches spherical: back arrow left, logo center, Reserve right
   ═══════════════════════════════════════════════════════════════ */
function GardensNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [, navigate] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#f7f5f0]/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-16 md:h-20 px-5 md:px-8">
          {/* Left: Back arrow */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 group">
              <ArrowLeft
                className={`w-4 h-4 transition-colors ${
                  scrolled ? "text-[#3a2a1a]" : "text-white"
                } group-hover:opacity-70`}
              />
              <span
                className={`text-[10px] tracking-[0.2em] uppercase transition-colors ${
                  scrolled ? "text-[#3a2a1a]" : "text-white"
                } group-hover:opacity-70 hidden md:inline`}
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Nayara Collection
              </span>
            </Link>
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
            <Link href="/">
              <img
                src={scrolled ? CDN.logoDark : CDN.logoWhite}
                alt="Nayara"
                className="h-10 md:h-12 w-auto transition-all duration-500"
              />
            </Link>
            <span
              className={`text-[8px] md:text-[9px] tracking-[0.25em] uppercase mt-0.5 transition-colors ${
                scrolled ? "text-[#4B4A4A]" : "text-white/80"
              }`}
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Gardens
            </span>
          </div>

          {/* Right: Reserve + Menu */}
          <div className="flex items-center gap-3">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:flex items-center h-9 px-5 rounded-full border transition-all ${
                scrolled
                  ? "border-[#3a2a1a]/20 text-[#3a2a1a] hover:bg-[#3a2a1a] hover:text-white"
                  : "border-white/30 text-white hover:bg-white hover:text-[#3a2a1a]"
              }`}
            >
              <span
                className="text-[10px] tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Reserve
              </span>
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
                scrolled ? "text-[#3a2a1a]" : "text-white"
              }`}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Dropdown menu */}
      {menuOpen && (
        <div className="fixed top-16 md:top-20 left-0 right-0 z-40 bg-[#f7f5f0]/98 backdrop-blur-md border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex flex-col gap-1">
            {[
              { label: "Nayara Tented Camp", route: "/tented-camp" },
              { label: "Nayara Springs", route: "/springs" },
              { label: "Nayara Alto Atacama", route: "/alto-atacama" },
              { label: "Nayara Hangaroa", route: "/hangaroa" },
              { label: "Nayara Bocas del Toro", route: "/bocas-del-toro" },
            ].map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  setMenuOpen(false);
                  navigate(link.route);
                }}
                className="text-left py-2 text-[#5a4a3a]/70 hover:text-[#3a2a1a] transition-colors"
              >
                <span
                  className="text-[11px] tracking-[0.15em] uppercase"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                >
                  {link.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO — Full-screen video, H1 centered at bottom
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const isMobile = useIsMobile();

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0">
        <BlobVideo
          src={isMobile ? CDN.heroMobile : CDN.heroDesktop}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content — centered bottom */}
      <div className="absolute inset-0 flex flex-col justify-end items-center px-5 z-10">
        <h1
          className="text-center text-[#fcf8f5] mb-[50px] md:mb-[85px] max-w-[1052px]"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            fontSize: 'clamp(32px, 5vw, 50px)',
            letterSpacing: '-2px',
            lineHeight: 1,
          }}
        >
          Family-Friendly Rainforest Adventure
        </h1>
      </div>
    </section>
  );
}
