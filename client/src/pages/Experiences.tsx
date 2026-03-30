/**
 * NAYARA EXPERIENCES — Cross-Property Hub
 * Design: Editorial grid showcasing experiences across all destinations
 * Typography: Playfair Display (display) + DM Sans (body)
 */

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  Mountain,
  Waves,
  Sun,
  Star,
  Compass,
  Eye,
  Leaf,
  Wind,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import Footer from "@/components/Footer";

/* ─── Experience Categories ──────────────────────────────── */
interface ExperienceCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  destinations: string[];
  highlights: string[];
  link?: string;
}

const experienceCategories: ExperienceCategory[] = [
  {
    id: "stargazing",
    title: "Stargazing & Astronomy",
    subtitle: "The clearest skies on Earth",
    description: "From the Atacama Desert — home to the world's most powerful telescopes — to the dark skies of Easter Island, Nayara offers unparalleled astronomical experiences. Our private observatories and expert astronomers reveal the cosmos in ways that transform how you see the night.",
    icon: <Star className="w-6 h-6" />,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-stargazing_f5c3d8a4.jpg",
    destinations: ["Alto Atacama", "Nayara Hangaroa"],
    highlights: ["Private observatory with professional telescope", "SERNATUR-certified astronomer guides", "Southern Cross and Magellanic Clouds", "Ancient Rapa Nui celestial navigation"],
  },
  {
    id: "volcanic-landscapes",
    title: "Volcanic Landscapes",
    subtitle: "Where fire shaped the Earth",
    description: "Every Nayara property sits in a landscape sculpted by volcanic forces. From the salt flats and geysers of the Atacama to the active Arenal Volcano and the crater lakes of Easter Island, these are journeys through geological time.",
    icon: <Mountain className="w-6 h-6" />,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/arenal-volcano-view_a1b2c3d4.jpg",
    destinations: ["Alto Atacama", "Nayara Arenal", "Nayara Hangaroa"],
    highlights: ["Tatio Geysers at dawn", "Arenal Volcano hiking trails", "Rano Kau crater lake", "Salt flat expeditions"],
  },
  {
    id: "marine-adventures",
    title: "Marine & Water",
    subtitle: "From Pacific depths to Caribbean reefs",
    description: "Dive into crystal-clear waters with up to 60 meters of visibility off Easter Island, snorkel among 300+ species in Bocas del Toro's coral gardens, or kayak through bioluminescent bays. The ocean is our second landscape.",
    icon: <Waves className="w-6 h-6" />,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-aerial_ff3a4ff3.jpg",
    destinations: ["Nayara Hangaroa", "Nayara Bocas del Toro"],
    highlights: ["60m visibility diving at Easter Island", "Caribbean coral reef snorkeling", "Bioluminescent bay kayaking", "Sunset catamaran sailing"],
  },
  {
    id: "cultural-immersion",
    title: "Cultural Immersion",
    subtitle: "Living heritage, authentic connection",
    description: "Meet the Rapa Nui descendants who carved the moai. Learn chocolate-making from Ngöbe-Buglé indigenous communities. Hear the oral histories of the Atacameño people. At Nayara, culture isn't performed — it's shared.",
    icon: <Eye className="w-6 h-6" />,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-grounds_d8ad48a8.jpg",
    destinations: ["Alto Atacama", "Nayara Hangaroa", "Nayara Bocas del Toro"],
    highlights: ["Rapa Nui Kari Kari dance", "Atacameño heritage tours", "Ngöbe-Buglé cacao workshops", "Traditional earth oven feasts"],
  },
  {
    id: "wellness-nature",
    title: "Wellness in Nature",
    subtitle: "Healing landscapes, ancient practices",
    description: "Private hot springs plunge pools fed by volcanic aquifers. Desert sound baths under infinite skies. Rainforest yoga pavilions. Oceanfront meditation. Every Nayara wellness experience is rooted in the healing power of its landscape.",
    icon: <Sun className="w-6 h-6" />,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-plunge-pool_e5f6a7b8.jpg",
    destinations: ["Nayara Springs", "Alto Atacama", "Nayara Hangaroa"],
    highlights: ["Private volcanic hot springs", "Desert sound healing", "Rainforest yoga pavilion", "Atacama salt flat meditation"],
    link: "/wellness",
  },
  {
    id: "conservation",
    title: "Conservation & Sustainability",
    subtitle: "Travel that regenerates",
    description: "Plant coral fragments in Caribbean nurseries. Support archaeological preservation on Easter Island. Contribute to reforestation in the Arenal cloud forest. Nayara's sustainability isn't a policy — it's a practice woven into every experience.",
    icon: <Leaf className="w-6 h-6" />,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-panorama_4ba3f49e.jpg",
    destinations: ["Nayara Bocas del Toro", "Nayara Arenal", "Alto Atacama"],
    highlights: ["Caribbean coral reef restoration", "Cloud forest reforestation", "S Certification (Atacama & Hangaroa)", "Community-based tourism"],
    link: "/sustainability",
  },
];

/* ─── Main Component ─────────────────────────────────────── */
export default function Experiences() {
  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <ExperiencesHeader />
      <HeroSection />
      <IntroSection />
      <ExperienceGrid />
      <DestinationCTA />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   HEADER
   ═══════════════════════════════════════════════════════════ */
function ExperiencesHeader() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center justify-between px-6 md:px-10 h-16">
        <a
          href="/"
          className="p-2 rounded-full text-white bg-black/20 backdrop-blur-sm hover:scale-105 transition-all duration-300"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </a>
        <span
          className="text-white/60 text-[11px] tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
        >
          Experiences
        </span>
        <div className="w-9" />
      </div>
    </motion.header>
  );
}

/* ═══════════════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-hero-desktop_8c8a5be0.jpg"
          alt="Nayara Experiences"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-16 md:pb-24 px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white/50 text-[11px] tracking-[0.4em] uppercase mb-6"
          style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
        >
          Bespoke Experiences
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-3xl md:text-5xl lg:text-6xl leading-[0.95] tracking-wide text-center"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          Journeys Beyond the Ordinary
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-white/40 text-sm mt-6 tracking-wider text-center max-w-lg"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          From desert stargazing to coral reef restoration — every experience is rooted in the extraordinary landscapes we call home
        </motion.p>
      </div>
    </section>
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
            The Nayara Philosophy
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <p
              className="text-stone-600 text-base md:text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              At Nayara, experiences are not activities — they are encounters with the extraordinary. 
              Each is designed by local experts who know their landscape intimately: astronomers who've 
              mapped the Atacama sky for decades, Rapa Nui guides whose ancestors navigated by starlight, 
              marine biologists rebuilding Caribbean reefs fragment by fragment.
            </p>
            <p
              className="text-stone-600 text-base md:text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              We believe luxury travel should leave a place better than you found it. That's why every 
              experience connects you to the land, the culture, and the people — not as a spectator, 
              but as a participant in something meaningful.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   EXPERIENCE GRID — Alternating editorial layouts
   ═══════════════════════════════════════════════════════════ */
function ExperienceGrid() {
  return (
    <section className="pb-24 md:pb-32">
      {experienceCategories.map((cat, idx) => (
        <ExperienceRow key={cat.id} category={cat} reversed={idx % 2 !== 0} index={idx} />
      ))}
    </section>
  );
}

function ExperienceRow({
  category,
  reversed,
  index,
}: {
  category: ExperienceCategory;
  reversed: boolean;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div
      ref={ref}
      className={`px-6 md:px-10 ${index === 0 ? "" : "mt-20 md:mt-32"}`}
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center ${
            reversed ? "md:direction-rtl" : ""
          }`}
        >
          {/* Image */}
          <div className={`${reversed ? "md:order-2" : "md:order-1"}`}>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className={`${reversed ? "md:order-1" : "md:order-2"}`}>
            <div className="text-stone-400 mb-4">{category.icon}</div>

            <p
              className="text-stone-400 text-xs tracking-[0.35em] uppercase mb-3"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              {category.subtitle}
            </p>

            <h3
              className="text-stone-800 text-2xl md:text-3xl leading-[1.15] mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              {category.title}
            </h3>

            <p
              className="text-stone-600 text-base leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              {category.description}
            </p>

            {/* Destinations */}
            <div className="flex flex-wrap gap-2 mb-6">
              {category.destinations.map((d) => (
                <span
                  key={d}
                  className="px-3 py-1 text-[10px] tracking-[0.15em] uppercase border border-stone-200 text-stone-500"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                >
                  {d}
                </span>
              ))}
            </div>

            {/* Highlights */}
            <ul className="space-y-2 mb-6">
              {category.highlights.map((h) => (
                <li
                  key={h}
                  className="text-stone-500 text-sm flex items-center gap-3"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  <span className="w-1 h-1 rounded-full bg-stone-400 flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>

            {category.link && (
              <Link
                href={category.link}
                className="inline-flex items-center gap-2 text-stone-800 text-sm tracking-[0.1em] uppercase hover:gap-3 transition-all duration-300"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Explore
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   DESTINATION CTA — Links to property pages
   ═══════════════════════════════════════════════════════════ */
function DestinationCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const destinations = [
    { name: "Alto Atacama", location: "Chile", route: "/alto-atacama" },
    { name: "Nayara Arenal", location: "Costa Rica", route: "/arenal" },
    { name: "Nayara Tented Camp", location: "Costa Rica", route: "/tented-camp" },
    { name: "Nayara Hangaroa", location: "Easter Island", route: "/hangaroa" },
    { name: "Nayara Bocas del Toro", location: "Panama", route: "/bocas-del-toro" },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 bg-stone-900 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-stone-500 text-xs tracking-[0.35em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Choose Your Destination
          </p>
          <h2
            className="text-white text-3xl md:text-4xl leading-[1.15] mb-12"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Explore by Property
          </h2>

          <div className="space-y-0">
            {destinations.map((dest) => (
              <Link
                key={dest.name}
                href={dest.route}
                className="group flex items-center justify-between py-6 border-b border-stone-800 hover:border-stone-600 transition-colors"
              >
                <div>
                  <h3
                    className="text-white text-xl md:text-2xl group-hover:text-stone-300 transition-colors"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                  >
                    {dest.name}
                  </h3>
                  <p
                    className="text-stone-600 text-sm mt-1"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                  >
                    {dest.location}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-stone-700 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
