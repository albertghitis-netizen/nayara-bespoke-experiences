/*
 * AWARDS — Nayara Resorts recognition
 * Clean editorial layout showcasing major awards
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Award } from "lucide-react";

interface AwardCategory {
  source: string;
  description: string;
  accolades: string[];
}

const awards: AwardCategory[] = [
  {
    source: "Travel + Leisure",
    description: "Recognized among the world's best hotels and resorts",
    accolades: [
      "World's Best Awards — Top Hotels",
      "It List — Best New Hotels",
      "500 Best Hotels in the World",
    ],
  },
  {
    source: "Conde Nast Traveler",
    description: "Celebrated for exceptional hospitality and design",
    accolades: [
      "Readers' Choice Awards — Top Resorts",
      "Gold List",
      "Hot List — Best New Hotels",
    ],
  },
  {
    source: "Michelin",
    description: "Distinguished for outstanding quality and service",
    accolades: [
      "Michelin Key — Outstanding Hotels",
    ],
  },
];

export default function Awards() {
  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      {/* Header */}
      <div className="bg-stone-900 text-white py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-[1000px] mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm tracking-[0.2em] uppercase mb-10 transition-colors"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            <ArrowLeft className="w-4 h-4" />
            All Properties
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="text-white/50 text-xs tracking-[0.35em] uppercase mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Nayara Resorts
            </p>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              Awards
            </h1>
            <p
              className="text-white/60 text-base md:text-lg mt-6 max-w-xl leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Recognition from the world's most respected travel authorities.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Awards List */}
      <div className="max-w-[1000px] mx-auto px-6 md:px-10 py-16 md:py-24">
        {awards.map((award, i) => (
          <motion.div
            key={award.source}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="mb-16 last:mb-0"
          >
            <div className="flex items-start gap-4 mb-4 pb-3 border-b border-stone-200">
              <Award className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <h2
                  className="text-stone-800 text-2xl md:text-3xl"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                >
                  {award.source}
                </h2>
                <p
                  className="text-stone-400 text-sm mt-1"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {award.description}
                </p>
              </div>
            </div>
            <div className="flex flex-col pl-9">
              {award.accolades.map((accolade, ai) => (
                <div
                  key={ai}
                  className="py-3 border-b border-stone-100 last:border-0"
                >
                  <span
                    className="text-stone-600 text-base"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                  >
                    {accolade}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <footer className="border-t border-stone-200 py-12">
        <div className="max-w-[1000px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-stone-300 text-xs tracking-[0.35em] uppercase"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Nayara Resorts
          </p>
          <p
            className="text-stone-400 text-xs"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
