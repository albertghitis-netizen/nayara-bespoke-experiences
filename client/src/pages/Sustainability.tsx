/**
 * NAYARA SUSTAINABILITY — Brand-Level Pillar Page
 * Regenerative tourism across all 6 properties
 * One-axis filter: property selector
 * Hero → Intro → Initiatives Grid → Property Filter → Property Cards → CTA → Footer
 */

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { useIsMobile } from "@/hooks/useMobile";
import NativeVideo from "@/components/NativeVideo";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

/* ─── CDN Assets ─── */
const CDN = {
  heroVideoOld: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Supersale-2_500e97e2.mp4",
  heroVideo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/sustainability-hero-new-audio_57d017a3.mp4",
};

/* ─── Brand-level sustainability pillars ─── */
const brandPillars = [
  { title: "Carbon Neutral Operations", stat: "100%", desc: "All six properties operate at carbon neutrality through renewable energy, carbon offsets, and efficiency programs." },
  { title: "Wildlife Corridors", stat: "340+", desc: "Hectares of protected wildlife corridors maintained across our Costa Rica and Panama properties." },
  { title: "Community Partnerships", stat: "24", desc: "Active partnerships with indigenous communities, local cooperatives, and conservation organizations." },
  { title: "Water Stewardship", stat: "85%", desc: "Of water used across all properties is recycled, treated, and returned to local watersheds." },
  { title: "Zero Single-Use Plastic", stat: "0", desc: "Single-use plastic items across all properties since 2021. Replaced with biodegradable alternatives." },
  { title: "Local Sourcing", stat: "70%", desc: "Of food and materials sourced within 100km of each property, supporting local economies." },
];

/* ─── Property-specific sustainability initiatives ─── */
const propertyInitiatives = [
  {
    id: "alto-atacama",
    name: "Nayara Alto Atacama",
    location: "Atacama Desert, Chile",
    route: "/alto-atacama",
    initiatives: [
      "Solar energy powers 60% of resort operations in the world's highest-radiation desert",
      "Partnership with Atacameño communities to preserve ancestral water management systems",
      "Desert reforestation program planting native tamarugo and algarrobo trees",
      "Astronomical light pollution reduction protocols protecting dark sky heritage",
    ],
  },
  {
    id: "bocas-del-toro",
    name: "Nayara Bocas del Toro",
    location: "Bocas del Toro, Panama",
    route: "/bocas-del-toro",
    initiatives: [
      "Coral reef restoration program in partnership with Smithsonian Tropical Research Institute",
      "Overwater villa construction designed to minimize seabed disturbance",
      "Mangrove conservation protecting 50+ hectares of critical coastal ecosystem",
      "Sea turtle nesting protection program on surrounding beaches",
    ],
  },
  {
    id: "gardens",
    name: "Nayara Gardens",
    location: "Arenal Volcano, Costa Rica",
    route: "/gardens",
    initiatives: [
      "On-site organic farm supplying 40% of restaurant produce",
      "Rainforest canopy bridge system enabling wildlife movement across the property",
      "Native plant nursery propagating 200+ species for habitat restoration",
      "Composting program converting 100% of organic waste into garden fertilizer",
    ],
  },
  {
    id: "hangaroa",
    name: "Nayara Hangaroa",
    location: "Easter Island, Chile",
    route: "/hangaroa",
    initiatives: [
      "Partnership with CONAF for Rapa Nui National Park conservation",
      "Rainwater harvesting system reducing freshwater demand by 45%",
      "Cultural preservation fund supporting Rapa Nui language and ceremony",
      "Invasive species removal program restoring native toromiro habitat",
    ],
  },
  {
    id: "springs",
    name: "Nayara Springs",
    location: "Arenal Volcano, Costa Rica",
    route: "/springs",
    initiatives: [
      "Geothermal hot spring water recycled through natural filtration systems",
      "Adults-only design reduces environmental footprint per guest by 30%",
      "Spa products sourced from local botanical gardens using organic ingredients",
      "Energy-efficient villa design with natural ventilation reducing AC usage by 50%",
    ],
  },
  {
    id: "tented-camp",
    name: "Nayara Tented Camp",
    location: "Arenal Volcano, Costa Rica",
    route: "/tented-camp",
    initiatives: [
      "Elevated platform construction preserving 100% of ground-level ecosystem",
      "Canvas tent structures with minimal permanent footprint on the land",
      "Wildlife monitoring cameras tracking 40+ species on property grounds",
      "Reforestation of 15 hectares of former agricultural land to secondary forest",
    ],
  },
];

const filterOptions = [
  { id: "all", label: "All Properties" },
  ...propertyInitiatives.map((p) => ({ id: p.id, label: p.name.replace("Nayara ", "") })),
];

export default function Sustainability() {
  const [activeFilter, setActiveFilter] = useState("all");
  const filtered = activeFilter === "all" ? propertyInitiatives : propertyInitiatives.filter((p) => p.id === activeFilter);

  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <BrandNavigation pageType="brand" />
      <HeroSection />
      <IntroSection />
      <BrandPillarsSection />
      <PropertyInitiativesSection activeFilter={activeFilter} onFilterChange={setActiveFilter} filtered={filtered} />
      <CTASection />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <NativeVideo src={CDN.heroVideo} className="w-full h-full object-cover" hasAudio />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6">
        <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="text-white text-3xl md:text-5xl lg:text-6xl tracking-wide text-center" style={heading}>
          Beyond Sustainability
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="text-white/50 text-[13px] md:text-[15px] mt-4 tracking-[0.12em] uppercase" style={{ ...body, fontWeight: 500 }}>
          Regenerative Tourism That Leaves Every Ecosystem Stronger
        </motion.p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   INTRO
   ═══════════════════════════════════════════════════════════════ */
function IntroSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10">
      <div className="max-w-[900px] mx-auto">
        <FadeIn>
          <p className="text-[#3a2a1a]/35 text-[10px] tracking-[0.3em] uppercase mb-4" style={{ ...body, fontWeight: 600 }}>Our Commitment</p>
          <h2 className="text-[#4B4A4A] mb-8" style={{ ...heading, fontSize: "clamp(24px, 3.5vw, 38px)", lineHeight: 1.15 }}>
            We Leave Every Place Stronger Than We Found It
          </h2>
          <p className="text-[#4B4A4A]/70 text-[15px] leading-[1.8]" style={body}>
            Sustainability at Nayara is not a program — it is the operating system. From carbon-neutral operations to wildlife corridor preservation, from indigenous community partnerships to zero single-use plastic, every decision is measured against a simple question: does this leave the ecosystem stronger? Across six properties in three countries, the answer must always be yes.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BRAND PILLARS — 6 key metrics
   ═══════════════════════════════════════════════════════════════ */
function BrandPillarsSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10 bg-[#3a2a1a]">
      <div className="max-w-[1100px] mx-auto">
        <FadeIn>
          <p className="text-white/25 text-[10px] tracking-[0.3em] uppercase mb-4" style={{ ...body, fontWeight: 600 }}>By the Numbers</p>
          <h2 className="text-white/80 mb-12" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>
            Measurable Impact Across Six Properties
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brandPillars.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.08}>
              <div className="border border-white/10 rounded-xl p-6">
                <span className="text-white/20 text-[40px] leading-none" style={{ ...heading, fontWeight: 300 }}>{p.stat}</span>
                <h3 className="text-white/70 text-[16px] mt-3 mb-2" style={{ ...heading, fontWeight: 500 }}>{p.title}</h3>
                <p className="text-white/35 text-[13px] leading-relaxed" style={body}>{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PROPERTY INITIATIVES — Filtered by property
   ═══════════════════════════════════════════════════════════════ */
function PropertyInitiativesSection({ activeFilter, onFilterChange, filtered }: { activeFilter: string; onFilterChange: (id: string) => void; filtered: typeof propertyInitiatives }) {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10">
      <div className="max-w-[1100px] mx-auto">
        <FadeIn>
          <p className="text-[#3a2a1a]/35 text-[10px] tracking-[0.3em] uppercase mb-4" style={{ ...body, fontWeight: 600 }}>Property Initiatives</p>
          <h2 className="text-[#4B4A4A] mb-8" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>
            Sustainability Shaped by Place
          </h2>
        </FadeIn>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => onFilterChange(opt.id)}
              className={`px-4 py-1.5 text-xs tracking-[0.1em] rounded-full border transition-all duration-300 ${
                activeFilter === opt.id
                  ? "bg-[#3a2a1a] text-white border-[#3a2a1a]"
                  : "bg-transparent text-[#5a4a3a]/60 border-[#3a2a1a]/15 hover:border-[#3a2a1a]/40 hover:text-[#3a2a1a]"
              }`}
              style={{ ...body, fontWeight: 500 }}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((prop, i) => (
              <motion.div
                key={prop.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white/50 rounded-xl p-8"
              >
                <Link href={prop.route} className="group">
                  <h3 className="text-[#3a2a1a] text-[18px] mb-1 group-hover:text-[#5a4a3a] transition-colors" style={{ ...heading, fontWeight: 500 }}>{prop.name}</h3>
                  <p className="text-[#3a2a1a]/30 text-[11px] tracking-[0.1em] uppercase mb-4" style={{ ...body, fontWeight: 500 }}>{prop.location}</p>
                </Link>
                <ul className="space-y-3">
                  {prop.initiatives.map((init, j) => (
                    <li key={j} className="flex gap-3 items-start">
                      <span className="text-[#3a2a1a]/20 text-[10px] mt-1.5">●</span>
                      <span className="text-[#4B4A4A]/60 text-[13px] leading-relaxed" style={body}>{init}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CTA
   ═══════════════════════════════════════════════════════════════ */
function CTASection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10 bg-white/30">
      <div className="max-w-[800px] mx-auto text-center">
        <FadeIn>
          <h2 className="text-[#4B4A4A] mb-4" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>
            Travel That Gives Back
          </h2>
          <p className="text-[#4B4A4A]/50 text-[14px] leading-relaxed mb-8" style={body}>
            Every stay at a Nayara property directly funds conservation, community development, and ecosystem restoration.
          </p>
          <Link href="/story" className="inline-block px-8 py-3 bg-[#3a2a1a] text-white/80 text-[13px] tracking-[0.1em] rounded-full hover:bg-[#4a3a2a] transition-colors" style={{ ...body, fontWeight: 500 }}>
            Read Our Story
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
