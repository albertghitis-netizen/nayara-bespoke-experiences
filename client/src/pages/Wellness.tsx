/**
 * NAYARA WELLNESS — Cross-Property Wellness Hub
 * Design: Serene, minimal editorial with warm earth tones
 * Hot springs, yoga, spa, sound healing across all properties
 * Typography: Playfair Display (display) + DM Sans (body)
 */

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import { ChevronRight, ArrowRight, ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import BlobVideo from "@/components/BlobVideo";

const WELLNESS_CDN = {
  heroVideo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/wellness-hero-v2_25839541.mp4",
  logoWhite: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara-logo-mobile-white_36c5a575.svg",
  logoDark: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara-logo-mobile_b4d2ae65.svg",
};

/* ─── Wellness Pillars ───────────────────────────────────── */
interface WellnessPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  property: string;
  details: string[];
}

const wellnessPillars: WellnessPillar[] = [
  {
    id: "hot-springs",
    title: "Volcanic Hot Springs",
    subtitle: "Nayara Springs · Costa Rica",
    description: "Every villa at Nayara Springs features a private hot springs plunge pool, fed by natural volcanic aquifers heated deep within the Earth. The mineral-rich waters — naturally heated to 38–42°C — have been used for centuries by indigenous communities for their therapeutic properties. This is adults-only wellness at its most intimate.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-plunge-pool_e5f6a7b8.jpg",
    property: "Nayara Springs",
    details: ["Private plunge pool in every villa", "Natural volcanic mineral water", "38–42°C therapeutic temperature", "Adults-only sanctuary"],
  },
  {
    id: "desert-healing",
    title: "Desert Sound Healing",
    subtitle: "Alto Atacama · Chile",
    description: "In the world's driest desert, silence itself becomes a healing force. Our sound healing sessions take place under the infinite Atacama sky, where Tibetan singing bowls and crystal sound baths resonate against a backdrop of absolute stillness. The desert's extreme clarity — both visual and acoustic — amplifies every vibration.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-pool-sunset_c4a2f7e1.jpg",
    property: "Alto Atacama",
    details: ["Outdoor sound bath sessions", "Atacama salt flat meditation", "Volcanic mud treatments", "Starlight yoga"],
  },
  {
    id: "yoga-pavilion",
    title: "Rainforest Yoga Pavilion",
    subtitle: "Nayara Tented Camp · Costa Rica",
    description: "A dedicated open-air yoga pavilion suspended in the rainforest canopy, where the soundtrack is howler monkeys and tropical birdsong. Morning vinyasa flows face Arenal Volcano; evening restorative sessions are accompanied by the chorus of tree frogs. This is yoga as it was meant to be practiced — in nature.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tented-camp-exterior_c9d0e1f2.jpg",
    property: "Nayara Tented Camp",
    details: ["Dedicated yoga pavilion", "Daily morning and evening classes", "Private instruction available", "Volcano-facing practice space"],
  },
  {
    id: "pacific-wellness",
    title: "Pacific Oceanfront Wellness",
    subtitle: "Nayara Hangaroa · Easter Island",
    description: "At the most remote inhabited place on Earth, wellness takes on a different dimension. Oceanfront treatments incorporate local Rapa Nui healing traditions, volcanic stone therapy, and the raw power of the Pacific. The isolation itself is therapeutic — 2,000 miles from the nearest distraction.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-pool_1b0d18e8.jpg",
    property: "Nayara Hangaroa",
    details: ["Volcanic stone therapy", "Rapa Nui healing traditions", "Oceanfront treatment rooms", "Total isolation wellness"],
  },
];

/* ─── Main Component ─────────────────────────────────────── */
export default function Wellness() {
  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <BrandNavigation />
      <HeroSection />
      <IntroSection />
      <WellnessPillarsSection />
      <SpringsFeature />
      <PropertyLinks />
      <Footer />
    </div>
  );
}



/* ═══════════════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <BlobVideo
          src={WELLNESS_CDN.heroVideo}
          className="w-full h-full object-cover"
        />
      </div>
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
          Nurtured by Nature
        </h1>
      </div>
    </section>
  );
}

function BrandNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [, navigate] = useLocation();

  const handleNavigate = (route: string) => {
    setMenuOpen(false);
    navigate(route);
  };

  const handleComingSoon = (label: string) => {
    setMenuOpen(false);
    import("sonner").then(({ toast }) => toast(label + " — Coming Soon"));
  };

  const pillClass =
    "pointer-events-auto flex items-center justify-center rounded-full bg-[#ece8e1] backdrop-blur-md shadow-lg hover:bg-[#ece8e1]/90 transition-colors cursor-pointer border border-[#3a2a1a]/20";

  return (
    <>
      {/* Fixed pills — always visible */}
      <div className="fixed top-6 left-6 right-6 z-50 flex items-center justify-between pointer-events-none">
        {/* Hamburger pill */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`${pillClass} w-12 h-12`}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block w-5 h-px bg-[#3a2a1a] transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-[#3a2a1a] transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
              }`}
            />
          </div>
        </button>

        {/* Resorts pill */}
        <button
          onClick={() => handleComingSoon("Resorts")}
          className={`${pillClass} h-12 px-6 pointer-events-auto`}
        >
          <span
            className="text-[#3a2a1a] text-sm font-medium tracking-[0.08em]"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Resorts
          </span>
        </button>

        {/* Reserve pill */}
        <button
          onClick={() => handleComingSoon("Reservation")}
          className={`${pillClass} h-12 px-6`}
        >
          <span
            className="text-[#3a2a1a] text-[11px] tracking-[0.25em] uppercase"
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
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-40 bg-[#f7f5f0]/98 backdrop-blur-md overflow-y-auto"
        >
          <div className="max-w-lg mx-auto px-8 pt-28 pb-16">
            {/* Story */}
            <button
              onClick={() => handleNavigate("/story")}
              className="block w-full text-left py-4 border-b border-stone-200"
            >
              <span
                className="text-[#3a2a1a] text-lg tracking-[0.08em]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                Story
              </span>
            </button>

            {/* Rooms */}
            <button
              onClick={() => handleNavigate("/rooms")}
              className="block w-full text-left py-4 border-b border-stone-200"
            >
              <span
                className="text-[#3a2a1a] text-lg tracking-[0.08em]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                Rooms
              </span>
            </button>

            {/* Gallery */}
            <button
              onClick={() => handleNavigate("/gallery")}
              className="block w-full text-left py-4 border-b border-stone-200"
            >
              <span
                className="text-[#3a2a1a] text-lg tracking-[0.08em]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                Gallery
              </span>
            </button>

            {/* Experiences */}
            <button
              onClick={() => handleNavigate("/experiences")}
              className="block w-full text-left py-4 border-b border-stone-200"
            >
              <span
                className="text-[#3a2a1a] text-lg tracking-[0.08em]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                Experiences
              </span>
            </button>

            {/* Wellness */}
            <button
              onClick={() => handleNavigate("/wellness")}
              className="block w-full text-left py-4 border-b border-stone-200"
            >
              <span
                className="text-[#3a2a1a] text-lg tracking-[0.08em]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                Wellness
              </span>
            </button>

            {/* Gastronomy */}
            <button
              onClick={() => handleNavigate("/gastronomy")}
              className="block w-full text-left py-4 border-b border-stone-200"
            >
              <span
                className="text-[#3a2a1a] text-lg tracking-[0.08em]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                Gastronomy
              </span>
            </button>

            {/* Sustainability */}
            <button
              onClick={() => handleNavigate("/sustainability")}
              className="block w-full text-left py-4 border-b border-stone-200"
            >
              <span
                className="text-[#3a2a1a] text-lg tracking-[0.08em]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                Sustainability
              </span>
            </button>

            {/* Awards & Press */}
            <button
              onClick={() => handleNavigate("/awards")}
              className="block w-full text-left py-4 border-b border-stone-200"
            >
              <span
                className="text-[#3a2a1a] text-lg tracking-[0.08em]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                Awards & Press
              </span>
            </button>

            {/* Blog */}
            <button
              onClick={() => handleNavigate("/blog")}
              className="block w-full text-left py-4 border-b border-stone-200"
            >
              <span
                className="text-[#3a2a1a] text-lg tracking-[0.08em]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                Blog
              </span>
            </button>

            {/* Podcast */}
            <button
              onClick={() => handleNavigate("/podcast")}
              className="block w-full text-left py-4 border-b border-stone-200"
            >
              <span
                className="text-[#3a2a1a] text-lg tracking-[0.08em]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                Podcast
              </span>
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   INTRO
   ═══════════════════════════════════════════════════════════ */
function IntroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="text-stone-800 text-3xl md:text-4xl leading-[1.15] mb-8"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Nature as Healer
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <p
              className="text-stone-600 text-base md:text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Nayara wellness is not a spa menu — it's a philosophy. Every property sits within a 
              landscape that has been healing people for centuries: volcanic hot springs that indigenous 
              communities have used for millennia, desert silence that ancient cultures sought for 
              spiritual clarity, rainforest canopies that naturally regulate the nervous system.
            </p>
            <p
              className="text-stone-600 text-base md:text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              We don't import wellness trends. We listen to the land. Our treatments, practices, and 
              spaces are designed around the unique healing properties of each destination — volcanic 
              minerals, desert acoustics, tropical botanicals, Pacific salt air. The landscape does 
              the work; we simply create the conditions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   WELLNESS PILLARS — Alternating editorial sections
   ═══════════════════════════════════════════════════════════ */
function WellnessPillarsSection() {
  return (
    <section className="pb-24 md:pb-32">
      {wellnessPillars.map((pillar, idx) => (
        <WellnessPillarRow key={pillar.id} pillar={pillar} reversed={idx % 2 !== 0} index={idx} />
      ))}
    </section>
  );
}

function WellnessPillarRow({
  pillar,
  reversed,
  index,
}: {
  pillar: WellnessPillar;
  reversed: boolean;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className={`px-6 md:px-10 ${index === 0 ? "" : "mt-20 md:mt-32"}`}>
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="grid md:grid-cols-2 gap-12 md:gap-20 items-center"
        >
          {/* Image */}
          <div className={`${reversed ? "md:order-2" : "md:order-1"}`}>
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={pillar.image}
                alt={pillar.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className={`${reversed ? "md:order-1" : "md:order-2"}`}>
            <p
              className="text-stone-400 text-xs tracking-[0.35em] uppercase mb-3"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              {pillar.subtitle}
            </p>

            <h3
              className="text-stone-800 text-2xl md:text-3xl leading-[1.15] mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              {pillar.title}
            </h3>

            <p
              className="text-stone-600 text-base leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              {pillar.description}
            </p>

            <ul className="space-y-3">
              {pillar.details.map((d) => (
                <li
                  key={d}
                  className="text-stone-500 text-sm flex items-center gap-3"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-300 flex-shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   SPRINGS FEATURE — Highlight Nayara Springs as the wellness flagship
   ═══════════════════════════════════════════════════════════ */
function SpringsFeature() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-stone-900 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <p
            className="text-stone-500 text-xs tracking-[0.35em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            The Wellness Flagship
          </p>

          <h2
            className="text-white text-3xl md:text-4xl lg:text-5xl leading-[1.15] mb-8"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Nayara Springs
          </h2>

          <p
            className="text-stone-400 text-base md:text-lg leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Adults-only. Private hot springs in every villa. A dedicated yoga pavilion in the 
            rainforest canopy. Full-service spa with volcanic mineral treatments. Nayara Springs 
            is where the entire Nayara wellness philosophy comes together in one extraordinary 
            property — the most intimate expression of our commitment to healing through nature.
          </p>

          <Link
            href="/springs"
            className="inline-flex items-center gap-2 text-white text-sm tracking-[0.15em] uppercase hover:gap-3 transition-all duration-300 border-b border-white/30 pb-1"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Explore Nayara Springs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   PROPERTY LINKS
   ═══════════════════════════════════════════════════════════ */
function PropertyLinks() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const properties = [
    { name: "Alto Atacama", focus: "Desert healing & starlight yoga", route: "/alto-atacama" },
    { name: "Nayara Springs", focus: "Private hot springs & adults-only wellness", route: "/springs" },
    { name: "Nayara Tented Camp", focus: "Rainforest yoga pavilion", route: "/tented-camp" },
    { name: "Nayara Hangaroa", focus: "Pacific oceanfront & volcanic stone therapy", route: "/hangaroa" },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-stone-400 text-xs tracking-[0.35em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Wellness by Destination
          </p>
          <h2
            className="text-stone-800 text-3xl md:text-4xl leading-[1.15] mb-12"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Find Your Healing Landscape
          </h2>

          <div className="space-y-0">
            {properties.map((prop) => (
              <Link
                key={prop.name}
                href={prop.route}
                className="group flex items-center justify-between py-6 border-b border-stone-200 hover:border-stone-400 transition-colors"
              >
                <div>
                  <h3
                    className="text-stone-800 text-xl md:text-2xl group-hover:text-stone-600 transition-colors"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                  >
                    {prop.name}
                  </h3>
                  <p
                    className="text-stone-400 text-sm mt-1"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                  >
                    {prop.focus}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-stone-300 group-hover:text-stone-600 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
