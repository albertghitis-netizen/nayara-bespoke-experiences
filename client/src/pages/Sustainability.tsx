/**
 * NAYARA SUSTAINABILITY — Brand-Level Pillar Page
 * Regenerative tourism across all 6 properties
 * Two-axis filter: 4 subcategories × 6 properties (no "All" for either)
 * Hero → Intro → Brand Pillars → Property Initiatives (filtered) → CTA → Footer
 */

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import NativeVideo from "@/components/NativeVideo";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import HotelFilterBar from "@/components/HotelFilterBar";

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

/* ─── Subcategories ─── */
type SubCategory = "flora-fauna" | "certification" | "community" | "operations";

const SUBCATEGORIES: { id: SubCategory; label: string }[] = [
  { id: "flora-fauna", label: "Flora & Fauna" },
  { id: "certification", label: "Certification" },
  { id: "community", label: "Community" },
  { id: "operations", label: "Operations" },
];

/* ─── Properties ─── */
const PROPERTIES = [
  { id: "alto-atacama", label: "Alto Atacama" },
  { id: "bocas-del-toro", label: "Bocas del Toro" },
  { id: "gardens", label: "Gardens" },
  { id: "hangaroa", label: "Hangaroa" },
  { id: "springs", label: "Springs" },
  { id: "tented-camp", label: "Tented Camp" },
];

/* ─── Initiative data: each tagged with property + category ─── */
interface Initiative {
  property: string;
  propertyName: string;
  location: string;
  route: string;
  category: SubCategory;
  text: string;
}

const allInitiatives: Initiative[] = [
  /* ── Alto Atacama ── */
  { property: "alto-atacama", propertyName: "Nayara Alto Atacama", location: "Atacama Desert, Chile", route: "/alto-atacama", category: "flora-fauna", text: "Desert reforestation program planting native tamarugo and algarrobo trees across degraded land" },
  { property: "alto-atacama", propertyName: "Nayara Alto Atacama", location: "Atacama Desert, Chile", route: "/alto-atacama", category: "flora-fauna", text: "Flamingo habitat monitoring at Salar de Atacama in partnership with local conservation groups" },
  { property: "alto-atacama", propertyName: "Nayara Alto Atacama", location: "Atacama Desert, Chile", route: "/alto-atacama", category: "certification", text: "Distinción Turismo Sustentable — Chile's national sustainable tourism certification (2024)" },
  { property: "alto-atacama", propertyName: "Nayara Alto Atacama", location: "Atacama Desert, Chile", route: "/alto-atacama", category: "certification", text: "Astronomical light pollution reduction protocols protecting dark sky heritage" },
  { property: "alto-atacama", propertyName: "Nayara Alto Atacama", location: "Atacama Desert, Chile", route: "/alto-atacama", category: "community", text: "Partnership with Atacameño communities to preserve ancestral water management systems" },
  { property: "alto-atacama", propertyName: "Nayara Alto Atacama", location: "Atacama Desert, Chile", route: "/alto-atacama", category: "community", text: "Local artisan marketplace supporting 30+ indigenous craftspeople" },
  { property: "alto-atacama", propertyName: "Nayara Alto Atacama", location: "Atacama Desert, Chile", route: "/alto-atacama", category: "operations", text: "Solar energy powers 60% of resort operations in the world's highest-radiation desert" },
  { property: "alto-atacama", propertyName: "Nayara Alto Atacama", location: "Atacama Desert, Chile", route: "/alto-atacama", category: "operations", text: "Greywater recycling system irrigating native plant gardens throughout the property" },

  /* ── Bocas del Toro ── */
  { property: "bocas-del-toro", propertyName: "Nayara Bocas del Toro", location: "Bocas del Toro, Panama", route: "/bocas-del-toro", category: "flora-fauna", text: "Coral reef restoration program in partnership with Smithsonian Tropical Research Institute" },
  { property: "bocas-del-toro", propertyName: "Nayara Bocas del Toro", location: "Bocas del Toro, Panama", route: "/bocas-del-toro", category: "flora-fauna", text: "Sea turtle nesting protection program on surrounding beaches" },
  { property: "bocas-del-toro", propertyName: "Nayara Bocas del Toro", location: "Bocas del Toro, Panama", route: "/bocas-del-toro", category: "flora-fauna", text: "Mangrove conservation protecting 50+ hectares of critical coastal ecosystem" },
  { property: "bocas-del-toro", propertyName: "Nayara Bocas del Toro", location: "Bocas del Toro, Panama", route: "/bocas-del-toro", category: "certification", text: "Blue Flag beach certification maintained through annual water quality monitoring" },
  { property: "bocas-del-toro", propertyName: "Nayara Bocas del Toro", location: "Bocas del Toro, Panama", route: "/bocas-del-toro", category: "community", text: "Ngäbe-Buglé indigenous community partnership for cultural tourism programs" },
  { property: "bocas-del-toro", propertyName: "Nayara Bocas del Toro", location: "Bocas del Toro, Panama", route: "/bocas-del-toro", category: "community", text: "Local fishing cooperative supply agreements supporting sustainable livelihoods" },
  { property: "bocas-del-toro", propertyName: "Nayara Bocas del Toro", location: "Bocas del Toro, Panama", route: "/bocas-del-toro", category: "operations", text: "Overwater villa construction designed to minimize seabed disturbance" },
  { property: "bocas-del-toro", propertyName: "Nayara Bocas del Toro", location: "Bocas del Toro, Panama", route: "/bocas-del-toro", category: "operations", text: "Desalination and rainwater harvesting reducing freshwater extraction by 60%" },

  /* ── Gardens ── */
  { property: "gardens", propertyName: "Nayara Gardens", location: "Arenal Volcano, Costa Rica", route: "/gardens", category: "flora-fauna", text: "Native plant nursery propagating 200+ species for habitat restoration" },
  { property: "gardens", propertyName: "Nayara Gardens", location: "Arenal Volcano, Costa Rica", route: "/gardens", category: "flora-fauna", text: "Rainforest canopy bridge system enabling wildlife movement across the property" },
  { property: "gardens", propertyName: "Nayara Gardens", location: "Arenal Volcano, Costa Rica", route: "/gardens", category: "certification", text: "CST (Certification for Sustainable Tourism) — highest level from Costa Rica's ICT" },
  { property: "gardens", propertyName: "Nayara Gardens", location: "Arenal Volcano, Costa Rica", route: "/gardens", category: "certification", text: "Rainforest Alliance Certified for sustainable agriculture practices on-site" },
  { property: "gardens", propertyName: "Nayara Gardens", location: "Arenal Volcano, Costa Rica", route: "/gardens", category: "community", text: "La Fortuna community education fund supporting local school programs" },
  { property: "gardens", propertyName: "Nayara Gardens", location: "Arenal Volcano, Costa Rica", route: "/gardens", category: "community", text: "On-site organic farm supplying 40% of restaurant produce and training local farmers" },
  { property: "gardens", propertyName: "Nayara Gardens", location: "Arenal Volcano, Costa Rica", route: "/gardens", category: "operations", text: "Composting program converting 100% of organic waste into garden fertilizer" },
  { property: "gardens", propertyName: "Nayara Gardens", location: "Arenal Volcano, Costa Rica", route: "/gardens", category: "operations", text: "LED lighting retrofit and smart HVAC reducing energy consumption by 35%" },

  /* ── Hangaroa ── */
  { property: "hangaroa", propertyName: "Nayara Hangaroa", location: "Easter Island, Chile", route: "/hangaroa", category: "flora-fauna", text: "Invasive species removal program restoring native toromiro habitat" },
  { property: "hangaroa", propertyName: "Nayara Hangaroa", location: "Easter Island, Chile", route: "/hangaroa", category: "flora-fauna", text: "Seabird nesting site protection along the island's coastal cliffs" },
  { property: "hangaroa", propertyName: "Nayara Hangaroa", location: "Easter Island, Chile", route: "/hangaroa", category: "certification", text: "Partnership with CONAF for Rapa Nui National Park conservation standards" },
  { property: "hangaroa", propertyName: "Nayara Hangaroa", location: "Easter Island, Chile", route: "/hangaroa", category: "community", text: "Cultural preservation fund supporting Rapa Nui language and ceremony" },
  { property: "hangaroa", propertyName: "Nayara Hangaroa", location: "Easter Island, Chile", route: "/hangaroa", category: "community", text: "Rapanui artisan employment program — 80% of staff from local community" },
  { property: "hangaroa", propertyName: "Nayara Hangaroa", location: "Easter Island, Chile", route: "/hangaroa", category: "operations", text: "Rainwater harvesting system reducing freshwater demand by 45%" },
  { property: "hangaroa", propertyName: "Nayara Hangaroa", location: "Easter Island, Chile", route: "/hangaroa", category: "operations", text: "Zero single-use plastic policy with biodegradable alternatives island-wide" },

  /* ── Springs ── */
  { property: "springs", propertyName: "Nayara Springs", location: "Arenal Volcano, Costa Rica", route: "/springs", category: "flora-fauna", text: "Butterfly garden sanctuary supporting 30+ native species year-round" },
  { property: "springs", propertyName: "Nayara Springs", location: "Arenal Volcano, Costa Rica", route: "/springs", category: "flora-fauna", text: "Spa products sourced from local botanical gardens using organic ingredients" },
  { property: "springs", propertyName: "Nayara Springs", location: "Arenal Volcano, Costa Rica", route: "/springs", category: "certification", text: "CST (Certification for Sustainable Tourism) — highest level from Costa Rica's ICT" },
  { property: "springs", propertyName: "Nayara Springs", location: "Arenal Volcano, Costa Rica", route: "/springs", category: "community", text: "Adults-only design reduces environmental footprint per guest by 30%" },
  { property: "springs", propertyName: "Nayara Springs", location: "Arenal Volcano, Costa Rica", route: "/springs", category: "community", text: "Local wellness practitioner partnerships for authentic spa experiences" },
  { property: "springs", propertyName: "Nayara Springs", location: "Arenal Volcano, Costa Rica", route: "/springs", category: "operations", text: "Geothermal hot spring water recycled through natural filtration systems" },
  { property: "springs", propertyName: "Nayara Springs", location: "Arenal Volcano, Costa Rica", route: "/springs", category: "operations", text: "Energy-efficient villa design with natural ventilation reducing AC usage by 50%" },

  /* ── Tented Camp ── */
  { property: "tented-camp", propertyName: "Nayara Tented Camp", location: "Arenal Volcano, Costa Rica", route: "/tented-camp", category: "flora-fauna", text: "Wildlife monitoring cameras tracking 40+ species on property grounds" },
  { property: "tented-camp", propertyName: "Nayara Tented Camp", location: "Arenal Volcano, Costa Rica", route: "/tented-camp", category: "flora-fauna", text: "Reforestation of 15 hectares of former agricultural land to secondary forest" },
  { property: "tented-camp", propertyName: "Nayara Tented Camp", location: "Arenal Volcano, Costa Rica", route: "/tented-camp", category: "certification", text: "Leave No Trace principles integrated into all guest excursions and property operations" },
  { property: "tented-camp", propertyName: "Nayara Tented Camp", location: "Arenal Volcano, Costa Rica", route: "/tented-camp", category: "community", text: "Local guide training program employing community members as naturalist experts" },
  { property: "tented-camp", propertyName: "Nayara Tented Camp", location: "Arenal Volcano, Costa Rica", route: "/tented-camp", category: "community", text: "Revenue-sharing model directing 5% of excursion fees to community projects" },
  { property: "tented-camp", propertyName: "Nayara Tented Camp", location: "Arenal Volcano, Costa Rica", route: "/tented-camp", category: "operations", text: "Elevated platform construction preserving 100% of ground-level ecosystem" },
  { property: "tented-camp", propertyName: "Nayara Tented Camp", location: "Arenal Volcano, Costa Rica", route: "/tented-camp", category: "operations", text: "Canvas tent structures with minimal permanent footprint on the land" },
];

export default function Sustainability() {
  const [activeHotel, setActiveHotel] = useState("alto-atacama");
  const [activeCategory, setActiveCategory] = useState<SubCategory>("flora-fauna");

  const filtered = allInitiatives.filter(
    (i) => i.category === activeCategory && i.property === activeHotel
  );

  /* Get property info for the header of the card */
  const currentProp = PROPERTIES.find((p) => p.id === activeHotel);
  const currentInitiative = allInitiatives.find((i) => i.property === activeHotel);

  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <BrandNavigation pageType="brand" hideCenterLabel />
      <HeroSection />
      <IntroSection />
      <HotelFilterBar activeHotel={activeHotel} onHotelChange={setActiveHotel} />
      <BrandPillarsSection />
      <PropertyInitiativesSection
        activeCategory={activeCategory}
        activeProperty={activeHotel}
        onCategoryChange={setActiveCategory}
        onPropertyChange={setActiveHotel}
        filtered={filtered}
        propertyName={currentInitiative?.propertyName || ""}
        propertyLocation={currentInitiative?.location || ""}
        propertyRoute={currentInitiative?.route || "/"}
      />
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
        <NativeVideo src={CDN.heroVideo} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none" />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6">
        <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="text-white text-xl md:text-3xl lg:text-4xl tracking-wide text-center" style={heading}>
          Beyond Sustainability
        </motion.h1>
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
          <p className="text-[#3B2B26]/35 text-[10px] tracking-[0.3em] mb-4" style={{ ...body, fontWeight: 600 }}>Our Commitment</p>
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
    <section className="py-16 md:py-24 px-6 md:px-10 bg-[#3B2B26]">
      <div className="max-w-[1100px] mx-auto">
        <FadeIn>
          <p className="text-white/25 text-[10px] tracking-[0.3em] mb-4" style={{ ...body, fontWeight: 600 }}>By the Numbers</p>
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
   PROPERTY INITIATIVES — Two-axis filter: Category × Property
   ═══════════════════════════════════════════════════════════════ */
function PropertyInitiativesSection({
  activeCategory,
  activeProperty,
  onCategoryChange,
  onPropertyChange,
  filtered,
  propertyName,
  propertyLocation,
  propertyRoute,
}: {
  activeCategory: SubCategory;
  activeProperty: string;
  onCategoryChange: (c: SubCategory) => void;
  onPropertyChange: (id: string) => void;
  filtered: Initiative[];
  propertyName: string;
  propertyLocation: string;
  propertyRoute: string;
}) {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10">
      <div className="max-w-[1100px] mx-auto">
        <FadeIn>
          <p className="text-[#3B2B26]/35 text-[10px] tracking-[0.3em] mb-4" style={{ ...body, fontWeight: 600 }}>Property Initiatives</p>
          <h2 className="text-[#4B4A4A] mb-8" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>
            Sustainability Shaped by Place
          </h2>
        </FadeIn>

        {/* Subcategory filter */}
        <div className="mb-4">
          <p className="text-[#3B2B26]/25 text-[9px] tracking-[0.2em] mb-2" style={{ ...body, fontWeight: 600 }}>Category</p>
          <div className="flex flex-wrap gap-2">
            {SUBCATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onCategoryChange(cat.id)}
                className={`px-4 py-1.5 text-xs tracking-[0.1em] rounded-full border transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-[#3B2B26] text-white border-[#3B2B26]"
                    : "bg-transparent text-[#5a4a3a]/60 border-[#3B2B26]/15 hover:border-[#3B2B26]/40 hover:text-[#3B2B26]"
                }`}
                style={{ ...body, fontWeight: 500 }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Property filter */}
        <div className="mb-10">
          <p className="text-[#3B2B26]/25 text-[9px] tracking-[0.2em] mb-2" style={{ ...body, fontWeight: 600 }}>Property</p>
          <div className="flex flex-wrap gap-2">
            {PROPERTIES.map((prop) => (
              <button
                key={prop.id}
                onClick={() => onPropertyChange(prop.id)}
                className={`px-4 py-1.5 text-xs tracking-[0.1em] rounded-full border transition-all duration-300 ${
                  activeProperty === prop.id
                    ? "bg-[#3B2B26] text-white border-[#3B2B26]"
                    : "bg-transparent text-[#5a4a3a]/60 border-[#3B2B26]/15 hover:border-[#3B2B26]/40 hover:text-[#3B2B26]"
                }`}
                style={{ ...body, fontWeight: 500 }}
              >
                {prop.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <motion.div
              key={`${activeCategory}-${activeProperty}`}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="bg-white/50 rounded-xl p-8"
            >
              <Link href={propertyRoute} className="group">
                <h3 className="text-[#3B2B26] text-[18px] mb-1 group-hover:text-[#5a4a3a] transition-colors" style={{ ...heading, fontWeight: 500 }}>
                  {propertyName}
                </h3>
                <p className="text-[#3B2B26]/30 text-[11px] tracking-[0.1em] mb-5" style={{ ...body, fontWeight: 500 }}>
                  {propertyLocation}
                </p>
              </Link>
              <ul className="space-y-3">
                {filtered.map((init, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: j * 0.08 }}
                    className="flex gap-3 items-start"
                  >
                    <span className="text-[#3B2B26]/20 text-[10px] mt-1.5">●</span>
                    <span className="text-[#4B4A4A]/60 text-[13px] leading-relaxed" style={body}>{init.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white/30 rounded-xl p-8 text-center"
            >
              <p className="text-[#4B4A4A]/40 text-[14px]" style={body}>
                No initiatives found for this combination. Select a different category or property.
              </p>
            </motion.div>
          )}
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
          <Link href="/" className="inline-block px-8 py-3 bg-[#3B2B26] text-white/80 text-[13px] tracking-[0.1em] rounded-full hover:bg-[#4a3a2a] transition-colors" style={{ ...body, fontWeight: 500 }}>
            Explore Nayara
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
