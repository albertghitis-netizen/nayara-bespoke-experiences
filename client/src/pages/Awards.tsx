/*
 * AWARDS & PRESS — Mobile-Only Prototype
 * Combined awards + press coverage
 * Vertical hero video at top
 * Placeholder content — structure only
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Trophy, Newspaper, ShieldCheck, ChevronDown } from "lucide-react";

/* ── Awards data (real) ── */
interface AwardEntry {
  source: string;
  accolades: string[];
}

interface PropertyAwards {
  property: string;
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
    awards: [
      { source: "Michelin Guide", accolades: ["3 Keys 2025"] },
      { source: "Travel & Leisure", accolades: ["No. 10 in Central America 2025", "No. 2 in Central America 2024", "No. 2 in the World 2015"] },
    ],
  },
  {
    property: "Nayara Bocas del Toro",
    awards: [
      { source: "Michelin Guide", accolades: ["2 Keys 2025"] },
      { source: "Condé Nast Traveler", accolades: ["No. 20 in the World 2025", "No. 1 in Central America 2025"] },
      { source: "Leading Hotels of the World", accolades: ["Sustainability Leader 2023"] },
      { source: "AFAR Magazine", accolades: ["Best New Hotels in the World 2023"] },
    ],
  },
  {
    property: "Nayara Alto Atacama",
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

/* ── Press placeholder data ── */
const pressItems = [
  { outlet: "[Publication Name]", title: "[Article Title]", date: "[Date]", url: "#" },
  { outlet: "[Publication Name]", title: "[Article Title]", date: "[Date]", url: "#" },
  { outlet: "[Publication Name]", title: "[Article Title]", date: "[Date]", url: "#" },
  { outlet: "[Publication Name]", title: "[Article Title]", date: "[Date]", url: "#" },
  { outlet: "[Publication Name]", title: "[Article Title]", date: "[Date]", url: "#" },
  { outlet: "[Publication Name]", title: "[Article Title]", date: "[Date]", url: "#" },
];

type Tab = "awards" | "press" | "certifications";

export default function Awards() {
  const [activeTab, setActiveTab] = useState<Tab>("awards");
  const [expandedProperty, setExpandedProperty] = useState<string | null>("Nayara Resorts");

  const toggleProperty = (property: string) => {
    setExpandedProperty(expandedProperty === property ? null : property);
  };

  return (
    <div className="min-h-screen bg-[#f7f5f0] max-w-[430px] mx-auto overflow-hidden">
      {/* Vertical Hero Video Placeholder */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-stone-900">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white/30">
              <div className="w-16 h-16 border-2 border-dashed border-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">▶</span>
              </div>
              <p className="text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-body)" }}>
                Vertical Hero Video
              </p>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
        </div>

        {/* Back button */}
        <div className="absolute top-6 left-5 z-20">
          <Link href="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span
              className="text-[11px] tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Back
            </span>
          </Link>
        </div>

        {/* Hero text at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p
              className="text-amber-400/70 text-[10px] tracking-[0.4em] uppercase mb-2"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Nayara Resorts
            </p>
            <h1
              className="text-white text-3xl leading-[0.95] tracking-wide"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              Awards & Press
            </h1>
            <p
              className="text-white/50 text-sm mt-3 leading-relaxed max-w-[300px]"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Recognition from the world's most respected travel authorities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Switcher */}
      <div className="flex border-b border-stone-200 px-5 pt-6">
        <button
          onClick={() => setActiveTab("awards")}
          className={`flex items-center gap-2 pb-3 px-4 text-xs tracking-[0.15em] uppercase transition-colors ${
            activeTab === "awards"
              ? "text-stone-800 border-b-2 border-stone-800"
              : "text-stone-400"
          }`}
          style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
        >
          <Trophy className="w-3.5 h-3.5" />
          Awards
        </button>
        <button
          onClick={() => setActiveTab("certifications")}
          className={`flex items-center gap-2 pb-3 px-4 text-xs tracking-[0.15em] uppercase transition-colors ${
            activeTab === "certifications"
              ? "text-stone-800 border-b-2 border-stone-800"
              : "text-stone-400"
          }`}
          style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          Certifications
        </button>
        <button
          onClick={() => setActiveTab("press")}
          className={`flex items-center gap-2 pb-3 px-4 text-xs tracking-[0.15em] uppercase transition-colors ${
            activeTab === "press"
              ? "text-stone-800 border-b-2 border-stone-800"
              : "text-stone-400"
          }`}
          style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
        >
          <Newspaper className="w-3.5 h-3.5" />
          Press
        </button>
      </div>

      {/* Awards Tab */}
      {activeTab === "awards" && (
        <section className="px-5 py-6">
          {allAwards.map((section, si) => (
            <motion.div
              key={section.property}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: si * 0.05 }}
              className="border-b border-stone-200"
            >
              {/* Property Header */}
              <button
                onClick={() => toggleProperty(section.property)}
                className="flex items-center justify-between w-full py-4 text-left"
              >
                <span
                  className="text-stone-800 text-sm"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                >
                  {section.property}
                </span>
                <motion.div
                  animate={{ rotate: expandedProperty === section.property ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4 text-stone-400" />
                </motion.div>
              </button>

              {/* Awards List */}
              {expandedProperty === section.property && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="pb-4 pl-4"
                >
                  {section.awards.map((award, ai) => (
                    <div key={ai} className="mb-4 last:mb-0">
                      <h4
                        className="text-amber-700 text-[10px] tracking-[0.1em] uppercase mb-1"
                        style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
                      >
                        {award.source}
                      </h4>
                      {award.accolades.map((accolade, aci) => (
                        <p
                          key={aci}
                          className="text-stone-600 text-xs py-1 border-b border-stone-100 last:border-0"
                          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                        >
                          {accolade}
                        </p>
                      ))}
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </section>
      )}

      {/* Certifications Tab */}
      {activeTab === "certifications" && (
        <section className="px-5 py-6">
          {/* Green Globe */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="w-full aspect-[16/9] bg-stone-200 rounded-sm mb-3 flex items-center justify-center">
              <span
                className="text-stone-400 text-[10px] tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Green Globe Logo Here
              </span>
            </div>
            <h3
              className="text-stone-800 text-base mb-1"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              Green Globe
            </h3>
            <p
              className="text-emerald-700/70 text-[10px] tracking-[0.1em] uppercase mb-2"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Nayara Gardens · Nayara Springs · Nayara Tented Camp · Nayara Bocas del Toro
            </p>
            <p
              className="text-stone-500 text-xs leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              [Green Globe certification details here]
            </p>
          </motion.div>

          {/* S Certification */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            <div className="w-full aspect-[16/9] bg-stone-200 rounded-sm mb-3 flex items-center justify-center">
              <span
                className="text-stone-400 text-[10px] tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-body)" }}
              >
                S Certification Logo Here
              </span>
            </div>
            <h3
              className="text-stone-800 text-base mb-1"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              S Certification
            </h3>
            <p
              className="text-emerald-700/70 text-[10px] tracking-[0.1em] uppercase mb-2"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Nayara Alto Atacama · Nayara Hangaroa
            </p>
            <p
              className="text-stone-500 text-xs leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              [S Certification details here — Sernatur, Chile]
            </p>
          </motion.div>
        </section>
      )}

      {/* Press Tab */}
      {activeTab === "press" && (
        <section className="px-5 py-6">
          {pressItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.url}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="block border-b border-stone-200 py-4"
            >
              {/* Photo placeholder */}
              <div className="w-full aspect-[16/9] bg-stone-200 rounded-sm mb-3 flex items-center justify-center">
                <span
                  className="text-stone-400 text-[10px] tracking-[0.2em] uppercase"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Photo Here
                </span>
              </div>
              <p
                className="text-stone-400 text-[10px] tracking-[0.1em] uppercase mb-1"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                {item.outlet} · {item.date}
              </p>
              <h3
                className="text-stone-800 text-sm"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                {item.title}
              </h3>
              <p
                className="text-stone-400 text-[11px] mt-1"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                [Link to article] →
              </p>
            </motion.a>
          ))}
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-stone-200 py-8 px-5">
        <p
          className="text-stone-300 text-[10px] tracking-[0.3em] uppercase text-center"
          style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
        >
          Nayara Resorts
        </p>
        <p
          className="text-stone-400 text-[10px] text-center mt-1"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </footer>
    </div>
  );
}
