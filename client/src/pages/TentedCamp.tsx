/**
 * NAYARA TENTED CAMP — Property Homepage
 * Design: "Desert Codex" adapted for rainforest
 * Hero: Vertical video on mobile (book/reel format), horizontal on desktop
 * Palette: Emerald, volcanic charcoal, cream
 * Typography: Playfair Display (display) + DM Sans (body)
 * All photos: Real Brice Ferre Studio photography
 */

import { motion } from "framer-motion";
import {
  KenBurnsImage,
  WordReveal,
  AnimatedDivider,
  RevealSection,
  StaggerContainer,
  staggerChildVariants,
} from "@/components/AnimationUtils";
import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, ArrowLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/useMobile";
import BlobVideo from "@/components/BlobVideo";
import ExploreOurWorld from "@/components/ExploreOurWorld";
import Footer from "@/components/Footer";
import PropertyDiningSection from "@/components/PropertyDiningSection";
import { AwardBadgeStrip } from "@/components/AwardBadges";
import { costaRicaDining } from "@/data/dining";
import { BOOKING_URLS } from "@/data/booking";

const BOOKING_URL = BOOKING_URLS["tented-camp"];

/* ── CDN Assets — Real Brice Ferre Studio photography ── */
const CDN = {
  /* Hero videos */
  heroDesktop:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/ntc-v4-recompressed_0e9532d4.mp4",
  heroMobile:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tc-vertical-reel1_f19958ac.mp4",
  heroPoster:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/sojern-tented_a678f769.jpg",

  /* Accommodations */
  casaPaloma:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tc-casa-paloma_b84cb595.jpg",
  tentInterior:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tc-tent-interior_7a32c295.jpg",
  familyTent:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tc-family-tent_6a362ca5.jpg",
  rainforestVilla:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tc-rainforest-villa_db92ddd3.jpg",

  /* Experiences & Spa */
  hangingBridge:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tc-hanging-bridge_639f1815.jpg",
  hangingBridge2:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tc-hanging-bridge-2_be42cabd.jpg",
  termas:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tc-termas-hotsprings_a024d8ed.jpg",
  termas2:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tc-termas-hotsprings-2_031945cc.jpg",
  spaMassage:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tc-spa-massage_cf457f1e.jpg",
  spaMassage2:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tc-spa-massage-2_03660eb1.jpg",

  /* Dining */
  amorLoco:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tc-amor-loco-restaurant_e737de7f.jpg",
  misAmores:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tc-mis-amores_d682765e.jpg",
  chefQuentin:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tc-chef-quentin_63c1cd00.jpg",

  /* Resort & Nature */
  resortGrounds:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tc-resort-grounds_2d41fcdd.jpg",
  resortGrounds2:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tc-resort-grounds-2_09d42661.jpg",

  /* Secondary vertical videos */
  verticalReel2:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tc-vertical-reel2_41a6f823.mp4",
  verticalNtc2:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tc-vertical-ntc2_ed3bb864.mp4",
};

export default function TentedCamp() {
  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <TentedCampNav />
      <HeroSection />
      <IntroSection />
      <HighlightsSection />
      <AccommodationsSection />
      <ExperiencesPreview />
      <WellnessSection />
      <PropertyDiningSection dining={costaRicaDining} />
      <SustainabilitySection />
      <ExploreOurWorld />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   NAVIGATION — Transparent bar, same pattern as Gardens/Springs
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
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#f7f5f0]/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
          {/* Back to home */}
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

          {/* Center title */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <span
              className={`text-[11px] md:text-xs tracking-[0.3em] uppercase transition-colors ${
                scrolled ? "text-[#3a2a1a]" : "text-white"
              }`}
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              Nayara Tented Camp
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
      </div>

      {/* Dropdown menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-16 md:top-20 left-0 right-0 z-40 bg-[#f7f5f0]/98 backdrop-blur-md border-b border-stone-200"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex flex-col gap-1">
            {[
              { id: "about", label: "About" },
              { id: "accommodations", label: "Accommodations" },
              { id: "experiences", label: "Experiences" },
              { id: "wellness", label: "Wellness & Spa" },
              { id: "dining", label: "Dining" },
              { id: "sustainability", label: "Sustainability" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left py-2 text-[#3a2a1a]/70 hover:text-[#3a2a1a] transition-colors"
              >
                <span
                  className="text-[11px] tracking-[0.15em] uppercase"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                >
                  {item.label}
                </span>
              </button>
            ))}

            <div className="border-t border-stone-200 mt-2 pt-2 flex flex-col gap-1">
              {[
                { label: "Nayara Gardens", route: "/gardens" },
                { label: "Nayara Springs", route: "/springs" },
                { label: "Experiences", route: "/experiences" },
                { label: "Wellness", route: "/wellness" },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    setMenuOpen(false);
                    navigate(link.route);
                  }}
                  className="text-left py-2 text-[#5a4a3a]/50 hover:text-[#3a2a1a] transition-colors"
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
        </motion.div>
      )}
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO — Vertical video on mobile (book format), horizontal on desktop
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const isMobile = useIsMobile();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <BlobVideo
          src={isMobile ? CDN.heroMobile : CDN.heroDesktop}
          className="w-full h-full object-cover"
          poster={CDN.heroPoster}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-12 md:pb-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <p
            className="text-white/60 text-[10px] md:text-[11px] tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Arenal Volcano &middot; Costa Rica
          </p>
          <h1
            className="text-white text-3xl md:text-5xl lg:text-6xl leading-[0.95] tracking-wide"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            A Clifftop Tent with the
            <br className="hidden md:block" /> Vibrant Rainforest Below
          </h1>
          <p
            className="text-white/70 text-sm md:text-base mt-4 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            Open-air luxury tents perched above a volcanic hot spring canyon,
            surrounded by the sounds of a reborn rainforest.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   INTRO — Award badges + brand story
   ═══════════════════════════════════════════════════════════════ */
function IntroSection() {
  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <AwardBadgeStrip property="tented-camp" />
        </motion.div>

        <WordReveal
          text="A Luxury Tented Camp in Costa Rica"
          tag="h2"
          className="text-[#3a2a1a] text-2xl md:text-3xl lg:text-4xl tracking-wide mb-6"
        />

        <RevealSection delay={0.2}>
          <p
            className="text-[#5a4a3a]/70 text-sm md:text-base leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            Where a barren cattle ranch once stood, a thriving rainforest now surrounds you.
            Open-air tented suites perch on a volcanic cliffside, each with a private plunge pool
            fed by natural hot springs. The land tells its own story — from the Arenal Volcano
            rising above the canopy to the calls of toucans at dawn.
          </p>
        </RevealSection>

        <RevealSection delay={0.3}>
          <div className="mt-8">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[#3a2a1a]/80 hover:bg-[#3a2a1a]/95 shadow-lg transition-all duration-300"
            >
              <span
                className="text-white text-[11px] tracking-[0.25em] uppercase"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Book Your Journey
              </span>
            </a>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HIGHLIGHTS — Three editorial cards with real photos
   ═══════════════════════════════════════════════════════════════ */
function HighlightsSection() {
  const highlights = [
    {
      image: CDN.tentInterior,
      title: "Luxury Tents",
      description:
        "Open-air tented suites elevated on stilts above the rainforest canopy, each with a private volcanic hot spring plunge pool and panoramic views of Arenal Volcano.",
    },
    {
      image: CDN.hangingBridge,
      title: "Back to Nature",
      description:
        "Cross hanging bridges through the canopy, visit our Sloth Sanctuary, spot toucans and blue morpho butterflies in the thriving rainforest that has reclaimed this once-barren land.",
    },
    {
      image: CDN.spaMassage,
      title: "Award-Winning Spa",
      description:
        "Slow down. Relax. Celebrate life. Our spa draws on the healing power of the volcanic earth, natural hot springs, and the surrounding rainforest.",
    },
  ];

  return (
    <section className="bg-[#f0ebe0] py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerChildVariants}
              className="group"
            >
              <div className="overflow-hidden mb-4">
                <KenBurnsImage
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 md:h-64"
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
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ACCOMMODATIONS — Tented suites with real photos
   ═══════════════════════════════════════════════════════════════ */
function AccommodationsSection() {
  const suites = [
    {
      name: "Nayara Tent",
      description:
        "Elevated open-air tented suite with private volcanic hot spring plunge pool, outdoor shower, and panoramic rainforest views. King bed, indoor-outdoor living.",
      size: "1,012 sq ft",
      image: CDN.tentInterior,
    },
    {
      name: "Casa Paloma — Presidential",
      description:
        "Our most exclusive accommodation. A private compound with two master suites, private pool, outdoor dining terrace, and dedicated butler service — all perched above the volcano canyon.",
      size: "3,200 sq ft",
      image: CDN.casaPaloma,
    },
    {
      name: "Nayara Family Tent",
      description:
        "Spacious two-bedroom tented suite designed for families. Two private hot spring plunge pools, separate living area, and connecting walkways through the forest.",
      size: "1,800 sq ft",
      image: CDN.familyTent,
    },
  ];

  return (
    <section id="accommodations" className="py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span
            className="text-[10px] tracking-[0.3em] uppercase text-[#5a4a3a]/40 block mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Accommodations
          </span>
          <WordReveal
            text="Luxury Tented Suites"
            tag="h2"
            className="text-[#3a2a1a] text-2xl md:text-3xl lg:text-4xl tracking-wide mb-4"
          />
          <p
            className="text-[#5a4a3a]/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Each tent is a private sanctuary perched on the volcanic cliffside,
            with natural hot spring plunge pools and uninterrupted views of the Arenal Volcano.
          </p>
        </motion.div>

        <AnimatedDivider className="my-8" />

        <div className="space-y-16">
          {suites.map((suite, i) => (
            <RevealSection key={suite.name} delay={i * 0.1}>
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
                  i % 2 === 1 ? "md:direction-rtl" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <KenBurnsImage
                    src={suite.image}
                    alt={suite.name}
                    className="w-full aspect-[4/3]"
                  />
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <h3
                    className="text-[#3a2a1a] text-xl md:text-2xl tracking-wide mb-2"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                  >
                    {suite.name}
                  </h3>
                  <span
                    className="text-[10px] tracking-[0.2em] uppercase text-[#5a4a3a]/40 block mb-4"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                  >
                    {suite.size}
                  </span>
                  <p
                    className="text-[#5a4a3a]/60 text-sm md:text-base leading-relaxed mb-6"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {suite.description}
                  </p>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center h-10 px-6 rounded-full border border-[#3a2a1a]/20 text-[#3a2a1a] hover:bg-[#3a2a1a] hover:text-white transition-all"
                  >
                    <span
                      className="text-[10px] tracking-[0.2em] uppercase"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                    >
                      Reserve
                    </span>
                  </a>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   EXPERIENCES PREVIEW — Hanging bridges, wildlife, volcano
   ═══════════════════════════════════════════════════════════════ */
function ExperiencesPreview() {
  const [, navigate] = useLocation();
  const isMobile = useIsMobile();

  return (
    <section id="experiences" className="bg-[#f0ebe0] py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span
            className="text-[10px] tracking-[0.3em] uppercase text-[#5a4a3a]/40 block mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Experiences
          </span>
          <WordReveal
            text="Adventures in the Rainforest"
            tag="h2"
            className="text-[#3a2a1a] text-2xl md:text-3xl lg:text-4xl tracking-wide mb-4"
          />
          <p
            className="text-[#5a4a3a]/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            From hanging bridge walks through the canopy to encounters with sloths and toucans,
            every day brings a new connection with the natural world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* Large feature — hanging bridge with vertical video on mobile */}
          <RevealSection className="md:col-span-7">
            <div className="relative overflow-hidden aspect-[4/3] md:aspect-[16/10]">
              {isMobile ? (
                <BlobVideo
                  src={CDN.verticalReel2}
                  className="w-full h-full object-cover"
                />
              ) : (
                <KenBurnsImage
                  src={CDN.hangingBridge2}
                  alt="Hanging bridges through the canopy"
                  className="w-full h-full"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3
                  className="text-white text-xl md:text-2xl tracking-wide mb-1"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                >
                  Hanging Bridges
                </h3>
                <p
                  className="text-white/70 text-sm"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Walk through the canopy on suspended bridges, 60 meters above the forest floor
                </p>
              </div>
            </div>
          </RevealSection>

          {/* Two stacked cards */}
          <div className="md:col-span-5 flex flex-col gap-6 md:gap-8">
            <RevealSection delay={0.1}>
              <div className="relative overflow-hidden aspect-[4/3]">
                <KenBurnsImage
                  src={CDN.resortGrounds}
                  alt="Sloth Sanctuary"
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3
                    className="text-white text-lg tracking-wide mb-1"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                  >
                    Sloth Sanctuary
                  </h3>
                  <p
                    className="text-white/70 text-xs"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Meet Tony and friends at our on-site rescue center
                  </p>
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={0.2}>
              <div className="relative overflow-hidden aspect-[4/3]">
                <KenBurnsImage
                  src={CDN.resortGrounds2}
                  alt="Volcano hikes and nature walks"
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3
                    className="text-white text-lg tracking-wide mb-1"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                  >
                    Volcano & Wildlife
                  </h3>
                  <p
                    className="text-white/70 text-xs"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Guided hikes, birdwatching, and night walks through the rainforest
                  </p>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>

        <RevealSection delay={0.3}>
          <div className="text-center mt-12">
            <button
              onClick={() => navigate("/experiences")}
              className="inline-flex items-center h-10 px-6 rounded-full border border-[#3a2a1a]/20 text-[#3a2a1a] hover:bg-[#3a2a1a] hover:text-white transition-all"
            >
              <span
                className="text-[10px] tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                View All Experiences
              </span>
            </button>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   WELLNESS — Hot springs, spa, sound therapy
   ═══════════════════════════════════════════════════════════════ */
function WellnessSection() {
  const isMobile = useIsMobile();
  const [, navigate] = useLocation();

  return (
    <section id="wellness" className="py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span
            className="text-[10px] tracking-[0.3em] uppercase text-[#5a4a3a]/40 block mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Wellness
          </span>
          <WordReveal
            text="Volcanic Hot Springs & Rainforest Spa"
            tag="h2"
            className="text-[#3a2a1a] text-2xl md:text-3xl lg:text-4xl tracking-wide mb-4"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left — large termas photo or vertical video on mobile */}
          <RevealSection direction="left">
            <div className="overflow-hidden aspect-[3/4] md:aspect-[4/5]">
              {isMobile ? (
                <BlobVideo
                  src={CDN.verticalNtc2}
                  className="w-full h-full object-cover"
                />
              ) : (
                <KenBurnsImage
                  src={CDN.termas}
                  alt="Volcanic hot springs at Nayara Tented Camp"
                  className="w-full h-full"
                />
              )}
            </div>
          </RevealSection>

          {/* Right — wellness features */}
          <RevealSection direction="right" delay={0.15}>
            <div className="space-y-8">
              {[
                {
                  title: "Volcanic Hot Springs",
                  description:
                    "Every tent includes a private plunge pool fed by natural volcanic hot springs. The Termas — our communal hot spring pools — cascade through the rainforest at varying temperatures.",
                  image: CDN.termas2,
                },
                {
                  title: "Rainforest Spa",
                  description:
                    "Treatments inspired by the volcanic earth and tropical botanicals. Open-air treatment rooms immersed in the sounds of the forest. Couples' rituals, sound therapy, and volcanic mud wraps.",
                  image: CDN.spaMassage2,
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-20 h-20 shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3
                      className="text-[#3a2a1a] text-base tracking-wide mb-1"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-[#5a4a3a]/60 text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}

              <div className="pt-4">
                <button
                  onClick={() => navigate("/wellness")}
                  className="inline-flex items-center h-10 px-6 rounded-full border border-[#3a2a1a]/20 text-[#3a2a1a] hover:bg-[#3a2a1a] hover:text-white transition-all"
                >
                  <span
                    className="text-[10px] tracking-[0.2em] uppercase"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                  >
                    Explore Wellness
                  </span>
                </button>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SUSTAINABILITY — Reforestation story
   ═══════════════════════════════════════════════════════════════ */
function SustainabilitySection() {
  return (
    <section id="sustainability" className="bg-[#f7f5f0] py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span
            className="text-[10px] tracking-[0.3em] uppercase text-[#5a4a3a]/40 block mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Sustainability
          </span>
          <h2
            className="text-[#3a2a1a] text-2xl md:text-3xl lg:text-4xl tracking-wide mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            From Cattle Ranch to Cloud Forest
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <RevealSection direction="left">
            <div>
              <p
                className="text-[#5a4a3a]/70 text-sm md:text-base leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-body)" }}
              >
                When the Nayara family acquired this land, it was a barren cattle ranch —
                deforested, eroded, and lifeless. Over two decades of dedicated reforestation,
                the property has been transformed into a thriving cloud forest ecosystem.
              </p>
              <p
                className="text-[#5a4a3a]/70 text-sm md:text-base leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Today, sloths hang from cecropia trees, toucans nest in the canopy, and blue
                morpho butterflies drift through the understory. The Nayara Sloth Sanctuary
                provides a safe haven for injured and orphaned sloths, while our organic gardens
                supply the restaurants with fresh herbs and vegetables.
              </p>
            </div>
          </RevealSection>

          <RevealSection direction="right" delay={0.15}>
            <div className="space-y-6">
              {[
                {
                  label: "Green Globe Certified",
                  detail: "International sustainability certification for tourism",
                },
                {
                  label: "Sloth Sanctuary",
                  detail: "On-site rescue and rehabilitation center",
                },
                {
                  label: "Organic Gardens",
                  detail: "Farm-to-table produce for all restaurants",
                },
                {
                  label: "Reforestation",
                  detail: "20+ years of active cloud forest restoration",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-1 h-1 rounded-full bg-[#5a4a3a]/30 mt-2 shrink-0" />
                  <div>
                    <h4
                      className="text-[#3a2a1a] text-sm tracking-wide mb-1"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                    >
                      {item.label}
                    </h4>
                    <p
                      className="text-[#5a4a3a]/50 text-xs leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>

        <RevealSection delay={0.3}>
          <div className="text-center mt-12">
            <Link href="/sustainability">
              <span
                className="inline-block text-[11px] tracking-[0.2em] uppercase text-[#5a4a3a]/50 border-b border-[#5a4a3a]/20 pb-1 hover:text-[#3a2a1a] hover:border-[#3a2a1a]/40 transition-colors"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Learn More About Our Commitment
              </span>
            </Link>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
