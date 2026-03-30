/*
 * AWARDS — Full responsive page
 * Showcases awards, Michelin Keys, certifications across all 6 properties
 * Design: Editorial luxury aesthetic matching the rest of the site
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Trophy, ShieldCheck, ChevronDown, Star, Award, Key } from "lucide-react";
import Footer from "@/components/Footer";

/* ── CDN images ── */
const CDN = {
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tented-camp-hero_e94f6c38.jpg",
  springs: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/costa-rica-spa-springs_89d85927.mp4",
};

/* ── Awards data (real) ── */
interface AwardEntry {
  source: string;
  accolades: string[];
}

interface PropertyAwards {
  property: string;
  michelinKeys?: number;
  awards: AwardEntry[];
}

const allAwards: PropertyAwards[] = [
  {
    property: "Nayara Resorts",
    awards: [
      { source: "Travel & Leisure", accolades: ["No. 13 Resort Brand in World 2025", "No. 11 Resort Brand in World 2024"] },
    ],
  },
  {
    property: "Nayara Tented Camp",
    awards: [
      { source: "Travel & Leisure", accolades: ["No. 2 in Central America 2025", "No. 1 in Central America 2024, 2023, 2022, 2021"] },
      { source: "Condé Nast Traveler", accolades: ["No. 3 in Central America 2023", "No. 1 in the World 2020"] },
      { source: "Leading Hotels of the World", accolades: ["No. 1 Hotel 2022"] },
    ],
  },
  {
    property: "Nayara Gardens",
    awards: [
      { source: "Travel & Leisure", accolades: ["No. 4 in Central America 2024", "No. 1 in Central America 2020", "No. 1 in Central America 2014–2022"] },
      { source: "World's Best Spas", accolades: ["Best Hot Springs Spa in the World 2015"] },
      { source: "Condé Nast Traveler", accolades: ["No. 29 in the World 2025", "No. 3 in the World 2025", "No. 2 in Central America 2023"] },
      { source: "TripAdvisor", accolades: ["No. 1 Luxury Hotel in the World 2018, 2019"] },
    ],
  },
  {
    property: "Nayara Springs",
    michelinKeys: 3,
    awards: [
      { source: "Michelin Guide", accolades: ["3 Keys 2025"] },
      { source: "Travel & Leisure", accolades: ["No. 10 in Central America 2025", "No. 2 in Central America 2024", "No. 2 in the World 2015"] },
    ],
  },
  {
    property: "Nayara Bocas del Toro",
    michelinKeys: 2,
    awards: [
      { source: "Michelin Guide", accolades: ["2 Keys 2025"] },
      { source: "Condé Nast Traveler", accolades: ["No. 20 in the World 2025", "No. 1 in Central America 2025"] },
      { source: "Leading Hotels of the World", accolades: ["Sustainability Leader 2023"] },
      { source: "AFAR Magazine", accolades: ["Best New Hotels in the World 2023"] },
    ],
  },
  {
    property: "Nayara Alto Atacama",
    michelinKeys: 2,
    awards: [
      { source: "Michelin Guide", accolades: ["2 Keys 2025"] },
      { source: "Condé Nast Traveler", accolades: ["No. 11 in South America 2025", "No. 13 in South America 2023"] },
      { source: "Leading Hotels of the World", accolades: ["Sustainability Leader 2023"] },
    ],
  },
  {
    property: "Nayara Hangaroa",
    awards: [
      { source: "Condé Nast Traveler", accolades: ["No. 10 in South America 2023"] },
    ],
  },
];

/* ── Certifications data ── */
const certifications = [
  {
    name: "Green Globe",
    properties: "Nayara Gardens, Nayara Springs, Nayara Tented Camp, Nayara Bocas del Toro",
    description: "International sustainability certification recognizing best practices in environmental management, social responsibility, and economic viability in the travel and tourism industry.",
  },
  {
    name: "S Certification",
    properties: "Nayara Alto Atacama, Nayara Hangaroa",
    description: "Chile's national sustainability certification from Sernatur, recognizing the highest standards of environmental, social, and economic responsibility in tourism operations.",
  },
  {
    name: "Carbon Neutral",
    properties: "Nayara Gardens, Nayara Springs, Nayara Tented Camp",
    description: "All three Costa Rica properties have achieved carbon-neutral certification, offsetting 100% of their carbon emissions through verified conservation and reforestation programs.",
  },
];

/* ── Brand stats ── */
const brandStats = [
  { number: "7", label: "Michelin Keys", sublabel: "Across 3 properties" },
  { number: "6", label: "Properties", sublabel: "3 countries" },
  { number: "#1", label: "In the World", sublabel: "Condé Nast 2020" },
  { number: "20+", label: "Years", sublabel: "Of excellence" },
];

export default function Awards() {
  const [expandedProperty, setExpandedProperty] = useState<string | null>("Nayara Springs");

  const toggleProperty = (property: string) => {
    setExpandedProperty(expandedProperty === property ? null : property);
  };

  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      {/* ── Hero Section ── */}
      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={CDN.hero}
            alt="Nayara Tented Camp luxury suite"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        </div>

        {/* Back button */}
        <div className="absolute top-6 left-6 md:top-8 md:left-10 z-20">
          <Link href="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span
              className="text-[11px] tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Home
            </span>
          </Link>
        </div>

        {/* Hero text */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-6 md:px-10 lg:px-16 pb-12 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-4xl"
          >
            <p
              className="text-amber-400/70 text-[10px] md:text-xs tracking-[0.4em] uppercase mb-3"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Nayara Resorts
            </p>
            <h1
              className="text-white text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-wide"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              Awards & Recognition
            </h1>
            <p
              className="text-white/60 text-sm md:text-base mt-4 leading-relaxed max-w-xl"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Recognized by the world's most respected travel authorities for exceptional luxury, sustainability, and sense of place.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Brand Stats Bar ── */}
      <section className="bg-[#3a2a1a] py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {brandStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <p
                  className="text-white text-3xl md:text-4xl lg:text-5xl mb-1"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                >
                  {stat.number}
                </p>
                <p
                  className="text-white/70 text-xs md:text-sm tracking-[0.1em] uppercase"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                >
                  {stat.label}
                </p>
                <p
                  className="text-white/40 text-[10px] md:text-xs mt-0.5"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {stat.sublabel}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Michelin Keys Explainer ── */}
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <p
              className="text-[#3a2a1a]/40 text-[10px] md:text-xs tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              The Michelin Guide
            </p>
            <h2
              className="text-[#3a2a1a] text-3xl md:text-4xl lg:text-5xl mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              7 Michelin Keys
            </h2>
            <p
              className="text-[#3a2a1a]/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Michelin Keys are the hotel equivalent of Michelin Stars for restaurants. Awarded to properties that deliver an exceptional stay defined by outstanding architecture, interior design, quality of service, character, and a genuine sense of place. Three Keys is the highest distinction — reserved for the world's most extraordinary hotels.
            </p>
          </motion.div>

          {/* Michelin Keys Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { keys: 3, property: "Nayara Springs", location: "Costa Rica", description: "The first hotel in Costa Rica to earn three Michelin Keys — the highest recognition. Adults-only, private hot spring plunge pools, and world-class wellness." },
              { keys: 2, property: "Nayara Bocas del Toro", location: "Panama", description: "Caribbean's first carbon-neutral luxury hotel. Overwater villas above pristine reef, coral restoration partnership, and adults-only tranquility." },
              { keys: 2, property: "Nayara Alto Atacama", location: "Chile", description: "The only luxury hotel in an actual desert oasis. Private observatory, 40+ curated excursions, and the clearest skies on Earth." },
            ].map((item, i) => (
              <motion.div
                key={item.property}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-white p-8 md:p-10 border border-stone-100"
              >
                {/* Keys visualization */}
                <div className="flex gap-1.5 mb-6">
                  {Array.from({ length: item.keys }).map((_, ki) => (
                    <Key key={ki} className="w-5 h-5 text-amber-600" />
                  ))}
                </div>
                <h3
                  className="text-[#3a2a1a] text-xl md:text-2xl mb-1"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                >
                  {item.property}
                </h3>
                <p
                  className="text-[#3a2a1a]/40 text-[10px] tracking-[0.2em] uppercase mb-4"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                >
                  {item.location} · {item.keys} Keys
                </p>
                <p
                  className="text-[#3a2a1a]/60 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── All Awards by Property ── */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-[#3a2a1a]/[0.03]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p
              className="text-[#3a2a1a]/40 text-[10px] md:text-xs tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              By Property
            </p>
            <h2
              className="text-[#3a2a1a] text-3xl md:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              Awards & Accolades
            </h2>
          </motion.div>

          <div className="space-y-0">
            {allAwards.map((section, si) => (
              <motion.div
                key={section.property}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: si * 0.05 }}
                className="border-b border-[#3a2a1a]/10"
              >
                {/* Property Header */}
                <button
                  onClick={() => toggleProperty(section.property)}
                  className="flex items-center justify-between w-full py-5 md:py-6 text-left group"
                >
                  <div className="flex items-center gap-3">
                    {section.michelinKeys && (
                      <div className="flex gap-0.5">
                        {Array.from({ length: section.michelinKeys }).map((_, ki) => (
                          <Key key={ki} className="w-3.5 h-3.5 text-amber-600" />
                        ))}
                      </div>
                    )}
                    <span
                      className="text-[#3a2a1a] text-base md:text-lg group-hover:text-[#3a2a1a]/70 transition-colors"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                    >
                      {section.property}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedProperty === section.property ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-[#3a2a1a]/30" />
                  </motion.div>
                </button>

                {/* Awards List */}
                <AnimatePresence>
                  {expandedProperty === section.property && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pl-4 md:pl-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {section.awards.map((award, ai) => (
                          <div key={ai}>
                            <h4
                              className="text-amber-700/80 text-[10px] md:text-xs tracking-[0.15em] uppercase mb-2"
                              style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
                            >
                              {award.source}
                            </h4>
                            {award.accolades.map((accolade, aci) => (
                              <p
                                key={aci}
                                className="text-[#3a2a1a]/60 text-sm py-1.5 border-b border-[#3a2a1a]/5 last:border-0"
                                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                              >
                                {accolade}
                              </p>
                            ))}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <p
              className="text-[#3a2a1a]/40 text-[10px] md:text-xs tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Sustainability
            </p>
            <h2
              className="text-[#3a2a1a] text-3xl md:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              Certifications
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-white p-8 md:p-10 border border-stone-100"
              >
                <ShieldCheck className="w-8 h-8 text-emerald-700/60 mb-5" />
                <h3
                  className="text-[#3a2a1a] text-xl mb-2"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                >
                  {cert.name}
                </h3>
                <p
                  className="text-emerald-700/60 text-[10px] tracking-[0.1em] uppercase mb-4"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                >
                  {cert.properties}
                </p>
                <p
                  className="text-[#3a2a1a]/50 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
