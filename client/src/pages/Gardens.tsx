/*
 * NAYARA GARDENS — Property Homepage
 * The original Nayara experience — lush tropical gardens, volcano views,
 * family-friendly, warm hospitality.
 * Design: "Desert Codex" adapted for rainforest — Editorial Cartography
 * Palette: Emerald, volcanic charcoal, cream
 * Typography: Playfair Display (display) + DM Sans (body)
 */

import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, ArrowLeft, Leaf, TreePine, Mountain, Users, Utensils, Heart } from "lucide-react";
import { toast } from "sonner";
import BlobVideo from "@/components/BlobVideo";
import { useIsMobile } from "@/hooks/useMobile";
import ExploreOurWorld from "@/components/ExploreOurWorld";
import Footer from "@/components/Footer";

const BOOKING_URL =
  "https://be.synxis.com/?Hotel=10868&Chain=24447&locale=en-US&adult=2&child=0";

const CDN = {
  heroDesktop: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/compressed-arenal-desktop_05c5168c.mp4",
  heroMobile: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/compressed-video2_1f850ac2.mp4",
  villa: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara-gardens-villa_194a8894.jpg",
  volcano: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara-gardens-volcano_3c750274.jpg",
  pool: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara-gardens-pool_ce833018.jpg",
  toucan: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/costa-rica-toucan_a70ad74a.mp4",
};

const highlights = [
  {
    icon: TreePine,
    title: "Rainforest Setting",
    description: "Nestled within 380 acres of tropical gardens and primary rainforest at the base of Arenal Volcano, with over 500 species of plants and trees.",
  },
  {
    icon: Mountain,
    title: "Volcano Views",
    description: "Unobstructed views of Arenal Volcano from rooms, restaurants, and the infinity pool — one of Costa Rica's most iconic vistas.",
  },
  {
    icon: Users,
    title: "Family Friendly",
    description: "The only Nayara property designed for families. Connecting rooms, kids' activities, nature programs, and multi-generational experiences.",
  },
  {
    icon: Utensils,
    title: "Farm-to-Table Dining",
    description: "Five restaurants and bars including Amor Loco, Asia Luna, and Nostalgia — featuring ingredients from our organic garden and local farms.",
  },
  {
    icon: Leaf,
    title: "Sustainability Pioneer",
    description: "S Certification for sustainable tourism. Carbon-neutral operations, organic gardens, wildlife corridors, and community partnerships since 2005.",
  },
  {
    icon: Heart,
    title: "Where It All Began",
    description: "The original Nayara resort, opened in 2005. Two decades of warm Costa Rican hospitality that inspired an entire collection of luxury properties.",
  },
];

const roomTypes = [
  {
    name: "Casita",
    description: "Intimate standalone bungalows surrounded by tropical gardens with private terraces and garden views.",
    size: "538 sq ft",
    image: CDN.villa,
  },
  {
    name: "Rainforest Pool Villa",
    description: "Private plunge pool, outdoor shower, and direct rainforest views from your secluded villa terrace.",
    size: "850 sq ft",
    image: CDN.pool,
  },
  {
    name: "Arenal Villa",
    description: "Panoramic Arenal Volcano views from your private terrace, with premium amenities and spacious interiors.",
    size: "700 sq ft",
    image: CDN.volcano,
  },
];

export default function Gardens() {
  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <GardensNav />
      <HeroSection />
      <IntroSection />
      <RoomsSection />
      <HighlightsSection />
      <WildlifeSection />
      <ExploreOurWorld />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   NAVIGATION
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
          <Link
            href="/"
            className="flex items-center gap-2 group"
          >
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
              Nayara Gardens
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
            {["rooms", "highlights", "wildlife"].map((id) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className="text-left py-2 text-[#3a2a1a]/70 hover:text-[#3a2a1a] transition-colors"
              >
                <span
                  className="text-[11px] tracking-[0.15em] uppercase"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                >
                  {id === "rooms" ? "Accommodations" : id === "highlights" ? "The Gardens Experience" : "Wildlife & Nature"}
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
              onClick={() => { setMenuOpen(false); navigate("/springs"); }}
              className="text-left py-2 text-[#3a2a1a]/70 hover:text-[#3a2a1a] transition-colors"
            >
              <span
                className="text-[11px] tracking-[0.15em] uppercase"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Nayara Springs
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
            Arenal Volcano &middot; Costa Rica
          </p>
          <h1
            className="text-white text-3xl md:text-5xl lg:text-6xl leading-[0.95] tracking-wide"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Where the Rainforest Blooms
          </h1>
          <p
            className="text-white/70 text-sm md:text-base mt-4 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            The original Nayara experience — lush tropical gardens, volcano views,
            and the warm hospitality that started it all.
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
            Est. 2005 &middot; Arenal Volcano, Costa Rica
          </p>
          <h2
            className="text-[#3a2a1a] text-2xl md:text-4xl leading-snug mb-8"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            A Sanctuary Where Nature{" "}
            <br className="hidden md:block" />
            and Luxury Grow Together
          </h2>
          <p
            className="text-[#5a4a3a]/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            Nayara Gardens is where the Nayara story began. Set within 380 acres of tropical
            gardens and primary rainforest at the base of Arenal Volcano, this is the property
            that defined a new standard for luxury in Costa Rica — one rooted in nature,
            community, and the spirit of Pura Vida. Two decades later, the warmth of that
            original vision remains at the heart of everything we do.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ROOMS SECTION
   ═══════════════════════════════════════════════════════════════ */
function RoomsSection() {
  return (
    <section id="rooms" className="py-16 md:py-24 px-6 md:px-10 bg-white/40">
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
            Accommodations
          </p>
          <h2
            className="text-[#3a2a1a] text-2xl md:text-4xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Your Private Retreat
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {roomTypes.map((room, i) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-sm mb-5">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <p
                className="text-[#3a2a1a]/40 text-[9px] tracking-[0.3em] uppercase mb-2"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                {room.size}
              </p>
              <h3
                className="text-[#3a2a1a] text-lg md:text-xl mb-2"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                {room.name}
              </h3>
              <p
                className="text-[#5a4a3a]/70 text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                {room.description}
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
              View Rooms & Rates
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
    <section id="highlights" className="py-16 md:py-24 px-6 md:px-10">
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
          <h2
            className="text-[#3a2a1a] text-2xl md:text-4xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            The Gardens Difference
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
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
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   WILDLIFE VIDEO SECTION
   ═══════════════════════════════════════════════════════════════ */
function WildlifeSection() {
  return (
    <section id="wildlife" className="relative py-0">
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <BlobVideo
          src={CDN.toucan}
          className="w-full h-full object-cover"
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
              Wildlife & Nature
            </p>
            <h2
              className="text-white text-2xl md:text-4xl mb-4"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              Window to the Wild
            </h2>
            <p
              className="text-white/70 text-sm md:text-base max-w-lg mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              Over 500 species of birds, sloths, monkeys, toucans, and red-eyed tree frogs
              call our rainforest home. Every morning begins with the symphony of the jungle.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
