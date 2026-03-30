/**
 * NAYARA TENTED CAMP — Property Homepage
 * Design: "Desert Codex" adapted for rainforest
 * Palette: Emerald, volcanic charcoal, cream
 * Typography: Playfair Display (display) + DM Sans (body)
 */

import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import ExploreOurWorld from "@/components/ExploreOurWorld";
import Footer from "@/components/Footer";

const BOOKING_URL =
  "https://be.synxis.com/?Hotel=10868&Chain=24447&locale=en-US&adult=2&child=0";

const CDN = {
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tented-camp-hero-aerial_0ba0626b.jpg",
  adventure: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tented-camp-adventure_cdd78feb.jpg",
  tents: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tented-camp-tents_a6421569.jpg",
  spa: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tented-camp-spa_08599513.jpg",
};

export default function TentedCamp() {
  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <TentedCampNav />
      <HeroSection />
      <IntroSection />
      <HighlightsSection />
      <ExploreOurWorld />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   NAVIGATION — Same style as Home: hamburger left, Reserve right
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

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <>
      <div className="fixed top-6 left-6 right-6 z-50 flex items-center justify-between pointer-events-none">
        {/* Hamburger pill */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full bg-[#3a2a1a]/70 backdrop-blur-md shadow-lg hover:bg-[#3a2a1a]/90 transition-all duration-300"
        >
          {menuOpen ? (
            <X className="w-5 h-5 text-white" />
          ) : (
            <div className="flex flex-col gap-1.5">
              <span className="block w-5 h-px bg-white" />
              <span className="block w-5 h-px bg-white" />
            </div>
          )}
        </button>

        {/* Reserve pill */}
        <button
          onClick={() => window.open(BOOKING_URL, "_blank")}
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
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-40 bg-[#f7f5f0]/98 backdrop-blur-md overflow-y-auto"
        >
          <div className="max-w-lg mx-auto px-8 pt-28 pb-16">
            <button
              onClick={() => { navigate("/"); setMenuOpen(false); }}
              className="flex items-center gap-2 mb-8 text-[#5a4a3a] hover:text-[#3a2a1a] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span
                className="text-sm tracking-[0.08em] uppercase"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                All Properties
              </span>
            </button>

            {["About", "Accommodations", "Experiences", "Wellness", "Dining"].map((label) => (
              <button
                key={label}
                onClick={() => {
                  setMenuOpen(false);
                  toast(label + " — Coming Soon");
                }}
                className="block w-full text-left py-4 border-b border-stone-200"
              >
                <span
                  className="text-[#3a2a1a] text-lg tracking-[0.08em] uppercase"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                >
                  {label}
                </span>
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO — Full-bleed landscape photo with title overlay
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero image */}
      <div className="absolute inset-0">
        <img
          src={CDN.hero}
          alt="Nayara Tented Camp aerial view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content — anchored to bottom */}
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6 md:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-2xl md:text-4xl lg:text-5xl leading-[0.95] tracking-wide text-center"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          A Clifftop Tent with the Vibrant Rainforest Below
        </motion.h1>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   INTRO — Award badge + description
   ═══════════════════════════════════════════════════════════════ */
function IntroSection() {
  return (
    <section className="bg-[#f7f5f0] py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-3xl mx-auto text-center">
        {/* Award badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span
            className="inline-block text-[10px] tracking-[0.3em] uppercase text-[#5a4a3a]/50 border border-[#5a4a3a]/20 px-4 py-2"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            No. 1 Resort in Central America — Four Consecutive Years
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[#3a2a1a] text-2xl md:text-3xl lg:text-4xl tracking-wide mb-6"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          Luxury Glamping in Costa Rica
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#5a4a3a]/70 text-sm md:text-base leading-relaxed max-w-2xl mx-auto"
          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
        >
          Where a barren cattle ranch once stood, a thriving rainforest now surrounds you.
          Open-air tented suites perch on a volcanic cliffside, each with a private plunge pool
          fed by natural hot springs. The land tells its own story — from the Arenal Volcano
          rising above the canopy to the calls of toucans at dawn.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8"
        >
          <button
            onClick={() => window.open(BOOKING_URL, "_blank")}
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[#3a2a1a]/80 hover:bg-[#3a2a1a]/95 shadow-lg transition-all duration-300"
          >
            <span
              className="text-white text-[11px] tracking-[0.25em] uppercase"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Book Your Journey
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HIGHLIGHTS — Three cards: Tents, Adventure, Spa
   ═══════════════════════════════════════════════════════════════ */
function HighlightsSection() {
  const highlights = [
    {
      image: CDN.tents,
      title: "Luxury Tents",
      description:
        "Open-air tented suites elevated on stilts above the rainforest canopy, each with a private volcanic hot spring plunge pool and panoramic views of Arenal Volcano.",
    },
    {
      image: CDN.adventure,
      title: "Back to Nature",
      description:
        "Visit our Sloth Sanctuary, spot amazing birds, locate a blue Morpho butterfly, and explore the thriving rainforest that has reclaimed this once-barren land.",
    },
    {
      image: CDN.spa,
      title: "Award-Winning Spa",
      description:
        "Slow down. Relax. Celebrate life. Our spa draws on the healing power of the volcanic earth, natural hot springs, and the surrounding rainforest.",
    },
  ];

  return (
    <section className="bg-[#f0ebe0] py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="group"
            >
              <div className="overflow-hidden mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 md:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3
                className="text-[#3a2a1a] text-lg tracking-wide mb-2"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                {item.title}
              </h3>
              <p
                className="text-[#5a4a3a]/60 text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
