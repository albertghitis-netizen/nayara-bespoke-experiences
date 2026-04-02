/**
 * NAYARA TENTED CAMP — Property Homepage
 * Rebuilt to match spherical site structure exactly
 * Sections: Nav → Hero → Intro (two-cols) → Full-bleed image → Footer
 */

import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, ArrowLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/useMobile";
import BlobVideo from "@/components/BlobVideo";
import Footer from "@/components/Footer";
import { BOOKING_URLS } from "@/data/booking";

const BOOKING_URL = BOOKING_URLS["tented-camp"];

/* ── CDN Assets ── */
const CDN = {
  heroDesktop:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/NayaraTentedCampHomepageHero_b3c022ba.mp4",
  heroMobile:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tc-vertical-reel1_f19958ac.mp4",
  heroPoster:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/sojern-tented_a678f769.jpg",
  introDrone:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tc-intro-drone_349e1e16.jpg",
  fullBleed:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tc-fullbleed-landscape_dbfe243d.jpg",
  bgTexture:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tc-bg-texture_5e483e53.avif",
  logoWhite:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara-logo-mobile-white_36c5a575.svg",
  logoDark:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara-logo-mobile_b4d2ae65.svg",
};

export default function TentedCamp() {
  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <TentedCampNav />
      <HeroSection />
      <IntroSection />
      <FullBleedImage />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   NAVIGATION — Matches spherical: hamburger left, logo center, Reserve right
   ═══════════════════════════════════════════════════════════════ */
function TentedCampNav() {
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
          {/* Left: Hamburger */}
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

          {/* Center: Logo — matching spherical site-nav__logo */}
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
              Tented Camp
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
              { label: "Nayara Gardens", route: "/gardens" },
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
   Matches spherical: nay-hero--size-full nay-hero--layout-centered-bottom
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
          poster={CDN.heroPoster}
        />
      </div>

      {/* Content — centered bottom, matching spherical nay-hero__content */}
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
          Luxury Tented Camp Immersed in the Rainforest
        </h1>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   INTRO — Two-column layout matching spherical
   nay-banner--layout-two-cols-image nay-banner--2-1
   Background texture, text left, image right (no padding-bottom)
   ═══════════════════════════════════════════════════════════════ */
function IntroSection() {
  return (
    <section
      id="about"
      className="w-full bg-no-repeat bg-cover bg-center"
      style={{
        paddingTop: 'clamp(40px, 8vw, 80px)',
        paddingBottom: 0,
        backgroundImage: `url(${CDN.bgTexture})`,
      }}
    >
      {/* Two-column layout — spherical nay-banner__inner */}
      <div
        className="flex flex-col md:flex-row items-center mx-auto"
        style={{
          maxWidth: '1440px',
          gap: 'clamp(40px, 8vw, 115px)',
          padding: '0 24px 0 clamp(24px, 8vw, 121px)',
        }}
      >
        {/* Left: text content — spherical nay-banner__content */}
        <div className="flex flex-col gap-10 md:flex-1">
          <h2
            className="text-[#4B4A4A]"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 400,
              fontSize: 'clamp(28px, 4vw, 42px)',
              lineHeight: 1.3,
            }}
          >
            Lifted above the Canopy, Overlooking Arenal Volcano
          </h2>
          <p
            className="text-[#4B4A4A]"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: '22.5px',
            }}
          >
            High above the Arenal Rainforest with sweeping views of Arenal Volcano, Tented Camp blends regenerative design with warm hospitality. Luxury tents open to nature invite you to reconnect with wonder, one another, and the rhythm of the wild. Soak in a private plunge pool fed by natural hot springs and savor the flavors of the land.
          </p>
        </div>

        {/* Right: image — spherical nay-banner__image (4:3 aspect, full bleed right) */}
        <div className="md:flex-1">
          <img
            src={CDN.introDrone}
            alt="Nayara Tented Camp aerial view"
            className="w-full h-auto object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FULL-BLEED IMAGE — Matches spherical nay-banner--layout-bg-video-image nay-banner--8-1
   Full-width landscape image with no text overlay
   ═══════════════════════════════════════════════════════════════ */
function FullBleedImage() {
  return (
    <section className="w-full">
      <img
        src={CDN.fullBleed}
        alt="Nayara Tented Camp landscape"
        className="w-full h-auto object-cover"
        loading="lazy"
      />
    </section>
  );
}
