/*
 * AWARDS — Nayara Resorts accolades
 * Full awards data organized by property
 * Sources: Travel & Leisure, Conde Nast Traveler, Michelin, etc.
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

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
      {
        source: "Travel & Leisure",
        accolades: [
          "No. 13 Resort Brand in World 2025",
          "No. 11 Resort Brand in World 2024",
        ],
      },
    ],
  },
  {
    property: "Nayara Tented Camp",
    awards: [
      {
        source: "Travel & Leisure",
        accolades: [
          "No. 2 in Central America 2025",
          "No. 1 in Central America 2024, 2023, 2022, 2021",
        ],
      },
      {
        source: "Condé Nast Traveler's Reader's Choice Awards",
        accolades: [
          "No. 3 in Central America 2023",
          "No. 1 in the World 2020",
        ],
      },
      {
        source: "Leading Hotels of the World",
        accolades: ["No. 1 Hotel 2022"],
      },
    ],
  },
  {
    property: "Nayara Gardens",
    awards: [
      {
        source: "Travel & Leisure",
        accolades: [
          "No. 4 in Central America 2024",
          "No. 1 in Central America 2020",
          "No. 1 in Central America 2014–2022",
        ],
      },
      {
        source: "World's Best Spa's",
        accolades: ["Best Hot Springs Spa in the World 2015"],
      },
      {
        source: "Condé Nast Traveler's Reader's Choice Awards",
        accolades: [
          "No. 29 in the World 2025",
          "No. 3 in the World 2025",
          "No. 2 in Central America 2023",
        ],
      },
      {
        source: "Condé Nast Traveler",
        accolades: [
          "No. 1 Spa in the World 2016",
          "Best Resort in Central America 2014–2016",
        ],
      },
      {
        source: "TripAdvisor",
        accolades: ["No. 1 Luxury Hotel in the World 2018, 2019"],
      },
    ],
  },
  {
    property: "Nayara Bocas del Toro",
    awards: [
      {
        source: "Michelin Guide",
        accolades: ["2 Keys 2025"],
      },
      {
        source: "Condé Nast Traveler's Reader's Choice Awards",
        accolades: [
          "No. 20 in the World 2025",
          "No. 1 in Central America 2025",
        ],
      },
      {
        source: "Leading Hotels of the World",
        accolades: ["Sustainability Leader 2023"],
      },
      {
        source: "Town & Country Hotel Awards 2023",
        accolades: ["Best New Hotels in the World"],
      },
      {
        source: "AFAR Magazine",
        accolades: ["Best New Hotels in the World, 2023"],
      },
    ],
  },
  {
    property: "Nayara Springs",
    awards: [
      {
        source: "Michelin Guide",
        accolades: ["3 Keys 2025"],
      },
      {
        source: "Travel & Leisure",
        accolades: [
          "No. 10 in Central America 2025",
          "No. 2 in Central America 2024",
          "No. 2 in the World 2015",
          "No. 1 in Central and South America 2014–2016",
        ],
      },
    ],
  },
  {
    property: "Nayara Hangaroa",
    awards: [
      {
        source: "Condé Nast Traveler's Reader's Choice Awards",
        accolades: ["No. 10 in South America 2023"],
      },
    ],
  },
  {
    property: "Nayara Alto Atacama",
    awards: [
      {
        source: "Michelin Guide",
        accolades: ["2 Keys 2025"],
      },
      {
        source: "Condé Nast Traveler's Reader's Choice Awards",
        accolades: [
          "No. 11 in South America 2025",
          "No. 13 in South America 2023",
        ],
      },
      {
        source: "Leading Hotels of the World",
        accolades: ["Sustainability Leader 2023"],
      },
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

      {/* Awards by Property */}
      <div className="max-w-[1000px] mx-auto px-6 md:px-10 py-16 md:py-24">
        {allAwards.map((section, si) => (
          <motion.div
            key={section.property}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: si * 0.05 }}
            className="mb-16 last:mb-0"
          >
            {/* Property Name */}
            <h2
              className="text-stone-800 text-2xl md:text-3xl mb-6 pb-3 border-b border-stone-300"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              {section.property}
            </h2>

            {/* Awards for this property */}
            <div className="flex flex-col gap-6">
              {section.awards.map((award, ai) => (
                <div key={ai}>
                  <h3
                    className="text-amber-700 text-sm tracking-[0.1em] uppercase mb-2"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
                  >
                    {award.source}
                  </h3>
                  <div className="flex flex-col">
                    {award.accolades.map((accolade, aci) => (
                      <div
                        key={aci}
                        className="py-2 border-b border-stone-100 last:border-0"
                      >
                        <span
                          className="text-stone-600 text-base"
                          style={{
                            fontFamily: "var(--font-body)",
                            fontWeight: 400,
                          }}
                        >
                          {accolade}
                        </span>
                      </div>
                    ))}
                  </div>
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
