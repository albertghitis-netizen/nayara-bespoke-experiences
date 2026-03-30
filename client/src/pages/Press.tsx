/*
 * PRESS — Nayara Resorts in the Media
 * Editorial luxury design — Aman/Rosewood aesthetic
 * Real press coverage organized by year, filterable by property
 */

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Footer from "@/components/Footer";

/* ── Types ── */
interface PressClip {
  title: string;
  publication: string;
  date: string;
  url: string;
  property: string;
  highlight?: boolean;
}

/* ── Press Data ── */
const pressClips: PressClip[] = [
  // 2026
  {
    title: "7 MICHELIN Keys. 3 Countries. 1 Standard of Excellence",
    publication: "Nayara Journal",
    date: "March 2026",
    url: "https://blog.nayararesorts.com/7-michelin-keys-3-countries-1-commitment",
    property: "Multiple Properties",
    highlight: true,
  },
  {
    title: "Michelin Key Hotels: Top Luxury Stays",
    publication: "Inspirato",
    date: "January 2026",
    url: "https://www.inspirato.com/details/general/michelin-key-hotels-luxury-travel/",
    property: "Nayara Springs",
  },

  // 2025
  {
    title: "Nayara Resorts Named Top 15 Hotel Brand in the World",
    publication: "Travel + Leisure",
    date: "December 2025",
    url: "https://www.travelandleisure.com/",
    property: "Multiple Properties",
    highlight: true,
  },
  {
    title: "Nayara Resorts Plans Eco-Friendly Beach Hotel in Manuel Antonio",
    publication: "Tico Times",
    date: "December 2025",
    url: "https://ticotimes.net/2025/12/09/costa-ricas-nayara-resorts-plans-eco-friendly-beach-hotel-in-manuel-antonio",
    property: "Multiple Properties",
  },
  {
    title: "Nayara Springs Named Among World's Best Hotels by Michelin",
    publication: "Tico Times",
    date: "October 2025",
    url: "https://ticotimes.net/2025/10/10/costa-ricas-nayara-springs-named-among-worlds-best-hotels-by-michelin",
    property: "Nayara Springs",
    highlight: true,
  },
  {
    title: "Michelin, Condé Nast, Travel + Leisure: The World's Top Awards Choose Nayara Resorts",
    publication: "Travel World News",
    date: "October 2025",
    url: "https://www.travelworldnews.com/michelin-conde-nast-travel-leisure-the-worlds-top-awards-choose-nayara-resorts/",
    property: "Multiple Properties",
    highlight: true,
  },
  {
    title: "Nayara Bocas del Toro Named #1 Resort in Central America",
    publication: "Condé Nast Traveler",
    date: "October 2025",
    url: "https://nayararesorts.com/nayara-bocas-del-toro-named-1-resort-by-conde-nast-traveler/",
    property: "Nayara Bocas del Toro",
    highlight: true,
  },
  {
    title: "Why Condé Nast Traveler Named Nayara Bocas del Toro #1",
    publication: "Nayara Journal",
    date: "October 2025",
    url: "https://blog.nayararesorts.com/bocas-wins-cond%C3%A9-nast-traveler-award-2025",
    property: "Nayara Bocas del Toro",
  },
  {
    title: "Nayara Alto Atacama Review: A Smart Pick for Adventurous Couples",
    publication: "Travel Market Report",
    date: "October 2025",
    url: "https://www.travelmarketreport.com/hotels-resorts/articles/nayara-alto-atacama-review-a-smart-pick-for-adventurous-couples-visiting-the-north-of-chile",
    property: "Nayara Alto Atacama",
  },
  {
    title: "Nayara Alto Atacama Hotel Review",
    publication: "The Telegraph",
    date: "July 2025",
    url: "https://www.telegraph.co.uk/travel/destinations/south-america/chile/atacama/san-pedro-de-atacama/hotels/nayara-alto-atacama-hotel/",
    property: "Nayara Alto Atacama",
  },
  {
    title: "How to Plan the Perfect Trip to Easter Island",
    publication: "Travel + Leisure",
    date: "June 2025",
    url: "https://www.travelandleisure.com/trip-ideas/vacationing-in-easter-island",
    property: "Nayara Hangaroa",
  },
  {
    title: "Nayara Springs — Three MICHELIN Keys",
    publication: "MICHELIN Guide",
    date: "2025",
    url: "https://guide.michelin.com/en/hotels-stays/la-fortuna-de-san-carlos/nayara-springs-121925-11881",
    property: "Nayara Springs",
    highlight: true,
  },
  {
    title: "Nayara Hangaroa Earns S Certification for Sustainability",
    publication: "Nayara Resorts",
    date: "2025",
    url: "https://nayarahangaroa.com/",
    property: "Nayara Hangaroa",
  },

  // 2024
  {
    title: "Travel + Leisure Readers' 10 Favorite Resorts in Central America",
    publication: "Travel + Leisure",
    date: "2024",
    url: "https://nayararesorts.com/travel-leisure-readers-10-favorite-resorts-in-central-america-in-2024/",
    property: "Multiple Properties",
    highlight: true,
  },
  {
    title: "Nayara Tented Camp: Central America's Best Resort?",
    publication: "YouTube / Travel Review",
    date: "May 2024",
    url: "https://www.youtube.com/watch?v=_j1Wyofjeaw",
    property: "Nayara Tented Camp",
  },
  {
    title: "Nayara Alto Atacama Review — Luxury Lodge in Chile's Desert",
    publication: "The Private Traveller",
    date: "January 2024",
    url: "https://theprivatetraveller.com/hotel-reviews/nayara-atacama-chile",
    property: "Nayara Alto Atacama",
  },
  {
    title: "An Intentional Oasis Meant for Slowing Down",
    publication: "Condé Nast Traveler",
    date: "2024",
    url: "https://www.cntraveler.com/hotels/nayara-alto-atacama",
    property: "Nayara Alto Atacama",
  },

  // 2023 and earlier highlights
  {
    title: "Nayara Tented Camp Named #2 Top 100 Hotels in the World",
    publication: "Travel + Leisure",
    date: "2021",
    url: "https://www.lhw.com/press-center/0921_Travel_and_Leisure_Worlds_Best",
    property: "Nayara Tented Camp",
    highlight: true,
  },
  {
    title: "Sukha Spa Named Among World's 12 Best Spas",
    publication: "Galerie Magazine",
    date: "2024",
    url: "https://galeriemagazine.com/best-spas-in-the-world/",
    property: "Nayara Springs",
  },
];

/* ── Helpers ── */
const properties = [
  "All",
  "Multiple Properties",
  "Nayara Gardens",
  "Nayara Springs",
  "Nayara Tented Camp",
  "Nayara Alto Atacama",
  "Nayara Hangaroa",
  "Nayara Bocas del Toro",
];

function getYear(date: string): string {
  const match = date.match(/\d{4}/);
  return match ? match[0] : "Other";
}

/* ── Animated Section ── */
function FadeInSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Main Component ── */
export default function Press() {
  const [activeProperty, setActiveProperty] = useState("All");

  const filtered = activeProperty === "All"
    ? pressClips
    : pressClips.filter((c) => c.property === activeProperty);

  /* Group by year */
  const grouped = filtered.reduce<Record<string, PressClip[]>>((acc, clip) => {
    const year = getYear(clip.date);
    if (!acc[year]) acc[year] = [];
    acc[year].push(clip);
    return acc;
  }, {});

  const sortedYears = Object.keys(grouped).sort((a, b) => {
    if (a === "Other") return 1;
    if (b === "Other") return -1;
    return parseInt(b) - parseInt(a);
  });

  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <span
              className="text-[#3a2a1a]/30 text-[10px] md:text-[11px] tracking-[0.5em] uppercase block mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Nayara in the Media
            </span>
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <h1
              className="text-[#3a2a1a] text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-wide"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              Press & Recognition
            </h1>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <p
              className="mt-6 text-[#5a4a3a]/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              From MICHELIN Keys to Condé Nast Traveler's #1 Resort, discover how the world's
              most respected voices in travel recognize Nayara Resorts.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Key Stats Bar */}
      <FadeInSection>
        <div className="max-w-5xl mx-auto px-6 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: "7", label: "MICHELIN Keys" },
              { number: "#1", label: "Condé Nast Traveler" },
              { number: "Top 15", label: "Hotel Brand Worldwide" },
              { number: "4/5", label: "T+L Best Resort Years" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div
                  className="text-[#3a2a1a] text-2xl md:text-3xl mb-1"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                >
                  {stat.number}
                </div>
                <div
                  className="text-[#5a4a3a]/50 text-[10px] md:text-[11px] tracking-[0.15em] uppercase"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* Filter Pills */}
      <div className="max-w-5xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap gap-2 justify-center">
          {properties.map((prop) => (
            <button
              key={prop}
              onClick={() => setActiveProperty(prop)}
              className={`px-4 py-2 rounded-full text-[11px] tracking-[0.1em] uppercase transition-all duration-300 ${
                activeProperty === prop
                  ? "bg-[#3a2a1a] text-white"
                  : "bg-[#3a2a1a]/5 text-[#3a2a1a]/50 hover:bg-[#3a2a1a]/10 hover:text-[#3a2a1a]/70"
              }`}
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              {prop}
            </button>
          ))}
        </div>
      </div>

      {/* Press Clips by Year */}
      <div className="max-w-4xl mx-auto px-6 pb-24">
        {sortedYears.map((year) => (
          <FadeInSection key={year} className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <h2
                className="text-[#3a2a1a] text-xl md:text-2xl"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                {year}
              </h2>
              <div className="flex-1 h-px bg-[#3a2a1a]/10" />
              <span
                className="text-[#5a4a3a]/30 text-[11px] tracking-[0.1em]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {grouped[year].length} {grouped[year].length === 1 ? "article" : "articles"}
              </span>
            </div>

            <div className="flex flex-col gap-1">
              {grouped[year].map((clip, i) => (
                <a
                  key={i}
                  href={clip.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-start gap-4 py-4 px-4 -mx-4 rounded-lg transition-all duration-300 hover:bg-[#3a2a1a]/[0.03] ${
                    clip.highlight ? "border-l-2 border-[#3a2a1a]/20 pl-5" : ""
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-[#3a2a1a] text-sm md:text-base leading-snug group-hover:text-[#3a2a1a]/80 transition-colors"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                    >
                      {clip.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5">
                      <span
                        className="text-[#5a4a3a]/50 text-[11px] tracking-[0.05em]"
                        style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                      >
                        {clip.publication}
                      </span>
                      <span className="text-[#5a4a3a]/20 text-[10px]">|</span>
                      <span
                        className="text-[#5a4a3a]/35 text-[11px]"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {clip.date}
                      </span>
                      {clip.property !== "Multiple Properties" && (
                        <>
                          <span className="text-[#5a4a3a]/20 text-[10px]">|</span>
                          <span
                            className="text-[#5a4a3a]/35 text-[10px] tracking-[0.1em] uppercase"
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            {clip.property}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#3a2a1a]/15 group-hover:text-[#3a2a1a]/40 transition-colors flex-shrink-0 mt-1" />
                </a>
              ))}
            </div>
          </FadeInSection>
        ))}
      </div>

      <Footer />
    </div>
  );
}
