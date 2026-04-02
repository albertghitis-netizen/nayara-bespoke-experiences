/*
 * NAYARA SPRINGS — Property Homepage
 * Adults-only sanctuary, private hot spring plunge pools,
 * 3 Michelin Keys — first hotel in Costa Rica.
 * Design: "Desert Codex" adapted for rainforest — Editorial Cartography
 * Palette: Deep emerald, warm stone, gold accents
 * Typography: Playfair Display (display) + DM Sans (body)
 */

import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, ArrowLeft, Droplets, Flame, Star, Heart, Leaf, Sparkles } from "lucide-react";
import { KenBurnsImage, WordReveal, AnimatedDivider, StaggerContainer, staggerChildVariants } from "@/components/AnimationUtils";
import { toast } from "sonner";
import BlobVideo from "@/components/BlobVideo";
import { useIsMobile } from "@/hooks/useMobile";
import ExploreOurWorld from "@/components/ExploreOurWorld";
import Footer from "@/components/Footer";
import PropertyDiningSection from "@/components/PropertyDiningSection";
import { AwardBadgeStrip } from "@/components/AwardBadges";
import { costaRicaDining } from "@/data/dining";
import { BOOKING_URLS } from "@/data/booking";

const BOOKING_URL = BOOKING_URLS.springs;

const CDN = {
  heroDesktop: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/spa-springs-compressed_4f2eb97d.mp4",
  heroMobile: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tc-vertical-ntc2_ed3bb864.mp4",
  plunge: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara-springs-plunge_141ce455.jpg",
  deck: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara-springs-deck_91193c44.webp",
  villa: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/sojern-springs-4_ab45db42.jpg",
};

const highlights = [
  {
    icon: Droplets,
    title: "Private Hot Springs",
    description: "Every villa features its own natural hot spring plunge pool fed by volcanic thermal waters. Your private sanctuary, 24 hours a day.",
  },
  {
    icon: Star,
    title: "3 Michelin Keys",
    description: "The first hotel in Costa Rica to earn three Michelin Keys — the highest recognition in the Michelin Hotel Guide. An extraordinary achievement.",
  },
  {
    icon: Heart,
    title: "Adults Only",
    description: "An exclusive retreat designed for couples and adults seeking privacy, romance, and uninterrupted serenity in the rainforest.",
  },
  {
    icon: Sparkles,
    title: "Sukha Spa",
    description: "Named among the world's 12 best spas by Galerie Magazine. Treatments draw from Costa Rica's volcanic mud, organic coffee, and rainforest botanicals.",
  },
  {
    icon: Flame,
    title: "Volcanic Energy",
    description: "Built on the thermal corridor of Arenal Volcano. The hot springs that feed your plunge pool originate deep beneath the earth's surface.",
  },
  {
    icon: Leaf,
    title: "Sustainability Leader",
    description: "S Certification for sustainable tourism. Carbon-neutral operations, organic gardens, and a deep commitment to the Arenal community.",
  },
];

const villaTypes = [
  {
    name: "Springs Villa",
    description: "Spacious villa with private hot spring plunge pool, outdoor garden shower, and panoramic rainforest views from an oversized terrace.",
    size: "1,000 sq ft",
    image: CDN.plunge,
  },
  {
    name: "Springs Suite",
    description: "Our most expansive accommodation with a larger plunge pool, indoor-outdoor living spaces, and a private meditation garden.",
    size: "1,400 sq ft",
    image: CDN.deck,
  },
  {
    name: "Amor Suite",
    description: "The ultimate romantic retreat — a two-level villa with a private rooftop terrace, oversized plunge pool, and dedicated butler service.",
    size: "1,800 sq ft",
    image: CDN.villa,
  },
];

export default function Springs() {
  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <SpringsNav />
      <HeroSection />
      <IntroSection />
      <MichelinSection />
      <VillasSection />
      <HighlightsSection />
      <SpaSection />
      <PropertyDiningSection dining={costaRicaDining} />
      <ExploreOurWorld />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   NAVIGATION
   ═══════════════════════════════════════════════════════════════ */
function SpringsNav() {
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

          <div className="absolute left-1/2 -translate-x-1/2">
            <span
              className={`text-[11px] md:text-xs tracking-[0.3em] uppercase transition-colors ${
                scrolled ? "text-[#3a2a1a]" : "text-white"
              }`}
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              Nayara Springs
            </span>
          </div>

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

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-16 md:top-20 left-0 right-0 z-40 bg-[#f7f5f0]/98 backdrop-blur-md border-b border-stone-200"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex flex-col gap-1">
            {["michelin", "villas", "highlights", "spa"].map((id) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className="text-left py-2 text-[#3a2a1a]/70 hover:text-[#3a2a1a] transition-colors"
              >
                <span
                  className="text-[11px] tracking-[0.15em] uppercase"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                >
                  {id === "michelin" ? "3 Michelin Keys" : id === "villas" ? "Villas" : id === "highlights" ? "The Springs Experience" : "Sukha Spa"}
                </span>
              </button>
            ))}
            <div className="h-px bg-stone-200 my-1" />
            <button
              onClick={() => { setMenuOpen(false); navigate("/experiences"); }}
              className="text-left py-2 text-[#3a2a1a]/70 hover:text-[#3a2a1a] transition-colors"
            >
              <span
                className="text-[11px] tracking-[0.15em] uppercase"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Experiences & Spa
              </span>
            </button>
            <button
              onClick={() => { setMenuOpen(false); navigate("/gardens"); }}
              className="text-left py-2 text-[#3a2a1a]/70 hover:text-[#3a2a1a] transition-colors"
            >
              <span
                className="text-[11px] tracking-[0.15em] uppercase"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Nayara Gardens
              </span>
            </button>
            <button
              onClick={() => { setMenuOpen(false); navigate("/tented-camp"); }}
              className="text-left py-2 text-[#3a2a1a]/70 hover:text-[#3a2a1a] transition-colors"
            >
              <span
                className="text-[11px] tracking-[0.15em] uppercase"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Nayara Tented Camp
              </span>
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const isMobile = useIsMobile();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <BlobVideo
          src={isMobile ? CDN.heroMobile : CDN.heroDesktop}
          className="w-full h-full object-cover"
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
            Adults Only &middot; Arenal Volcano &middot; Costa Rica
          </p>
          <h1
            className="text-white text-3xl md:text-5xl lg:text-6xl leading-[0.95] tracking-wide"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Adults-Only Private Hot Springs Villas
          </h1>
          <p
            className="text-white/70 text-sm md:text-base mt-4 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            Private hot spring plunge pools, three Michelin Keys,
            and the healing energy of the Arenal Volcano.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   INTRO SECTION
   ═══════════════════════════════════════════════════════════════ */
function IntroSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="text-[#3a2a1a]/40 text-[10px] tracking-[0.4em] uppercase mb-6"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Adults Only &middot; 3 Michelin Keys
          </p>
          <WordReveal
            text="Where Volcanic Warmth Meets Rainforest Serenity"
            tag="h2"
            className="text-[#3a2a1a] text-2xl md:text-4xl leading-snug mb-8"
          />
          <p
            className="text-[#5a4a3a]/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            Nayara Springs is the most exclusive property in the Nayara collection. Every villa
            comes with its own private hot spring plunge pool, fed by the volcanic thermal waters
            that flow beneath the Arenal landscape. This is an adults-only sanctuary designed for
            couples and travelers seeking privacy, romance, and deep restoration — recognized by
            Michelin with three Keys, the first hotel in Costa Rica to achieve this distinction.
          </p>
          <div className="mt-10">
            <AwardBadgeStrip property="springs" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MICHELIN KEYS SECTION
   ═══════════════════════════════════════════════════════════════ */
function MichelinSection() {
  return (
    <section id="michelin" className="py-16 md:py-24 px-6 md:px-10 bg-[#3a2a1a]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <svg className="w-8 h-8 md:w-10 md:h-10 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C10.34 2 9 3.34 9 5c0 .35.07.69.18 1H7c-1.1 0-2 .9-2 2v2c0 .55.22 1.05.59 1.41L9 14.83V22h6v-7.17l3.41-3.42c.37-.36.59-.86.59-1.41V8c0-1.1-.9-2-2-2h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3zm0 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" />
                </svg>
              </motion.div>
            ))}
          </div>
          <p
            className="text-amber-400/60 text-[10px] tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Michelin Hotel Guide
          </p>
          <h2
            className="text-white text-2xl md:text-4xl mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Three Michelin Keys
          </h2>
          <p
            className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            In 2024, Michelin expanded its legendary rating system beyond restaurants to hotels.
            Just as stars recognize exceptional dining, Keys recognize extraordinary stays.
            Nayara Springs became the first hotel in Costa Rica to earn three Keys — the highest
            distinction, reserved for properties that offer an exceptional experience worth a
            special journey.
          </p>
          <p
            className="text-white/40 text-sm mt-6 italic"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            "An extraordinary stay — worth a special journey."
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   VILLAS SECTION
   ═══════════════════════════════════════════════════════════════ */
function VillasSection() {
  return (
    <section id="villas" className="py-16 md:py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p
            className="text-[#3a2a1a]/40 text-[10px] tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Private Villas
          </p>
          <h2
            className="text-[#3a2a1a] text-2xl md:text-4xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Your Own Hot Spring
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {villaTypes.map((villa, i) => (
            <motion.div
              key={villa.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group"
            >
              <KenBurnsImage
                src={villa.image}
                alt={villa.name}
                className="aspect-[4/3] rounded-sm mb-5"
                duration={18}
                scale={1.08}
              />
              <p
                className="text-[#3a2a1a]/40 text-[9px] tracking-[0.3em] uppercase mb-2"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                {villa.size}
              </p>
              <h3
                className="text-[#3a2a1a] text-lg md:text-xl mb-2"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                {villa.name}
              </h3>
              <p
                className="text-[#5a4a3a]/70 text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                {villa.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center h-11 px-8 rounded-full border border-[#3a2a1a]/20 text-[#3a2a1a] hover:bg-[#3a2a1a] hover:text-white transition-all"
          >
            <span
              className="text-[10px] tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              View Villas & Rates
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HIGHLIGHTS SECTION
   ═══════════════════════════════════════════════════════════════ */
function HighlightsSection() {
  return (
    <section id="highlights" className="py-16 md:py-24 px-6 md:px-10 bg-white/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p
            className="text-[#3a2a1a]/40 text-[10px] tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            The Experience
          </p>
          <WordReveal
            text="The Springs Difference"
            tag="h2"
            className="text-[#3a2a1a] text-2xl md:text-4xl"
          />
        </motion.div>

        <AnimatedDivider className="my-8" />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerChildVariants}
              className="group"
            >
              <item.icon className="w-6 h-6 text-emerald-700/60 mb-4" strokeWidth={1.5} />
              <h3
                className="text-[#3a2a1a] text-base md:text-lg mb-2"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                {item.title}
              </h3>
              <p
                className="text-[#5a4a3a]/70 text-sm leading-relaxed"
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
   SPA SECTION
   ═══════════════════════════════════════════════════════════════ */
function SpaSection() {
  return (
    <section id="spa" className="relative py-0">
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={CDN.deck}
          alt="Nayara Springs Spa"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end items-center pb-12 md:pb-20 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p
              className="text-white/50 text-[10px] tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Sukha Spa &middot; World's 12 Best
            </p>
            <h2
              className="text-white text-2xl md:text-4xl mb-4"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              Volcanic Warmth,{" "}
              <br className="hidden md:block" />
              Rainforest Serenity
            </h2>
            <p
              className="text-white/70 text-sm md:text-base max-w-lg mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              Sukha Spa draws from Costa Rica's rich natural pharmacy — volcanic mud,
              organic coffee, tropical cacao, and rainforest botanicals — for treatments
              that restore body and spirit.
            </p>
            <Link
              href="/wellness"
              className="inline-flex items-center h-10 px-6 mt-6 rounded-full border border-white/30 text-white hover:bg-white hover:text-[#3a2a1a] transition-all"
            >
              <span
                className="text-[10px] tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                View Spa Treatments
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
