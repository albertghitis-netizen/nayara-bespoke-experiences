/**
 * Competitors Page — Competitive analysis per property market
 * Design: Pure white background, editorial layout with comparison tables
 */

import { useState } from "react";
import { motion } from "framer-motion";
import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

interface Competitor {
  name: string;
  location: string;
  positioning: string;
  priceRange: string;
  keyDifferentiator: string;
  nayaraAdvantage: string;
}

interface Market {
  id: string;
  title: string;
  region: string;
  nayaraProperty: string;
  overview: string;
  competitors: Competitor[];
}

const BRAND_COMPETITORS: Competitor[] = [
  {
    name: "Aman Resorts",
    location: "Global (35+ properties)",
    positioning: "Ultra-luxury minimalist retreats",
    priceRange: "$1,500–$5,000+/night",
    keyDifferentiator: "Architectural purity, extreme privacy, global footprint",
    nayaraAdvantage: "Deeper nature integration, sustainability leadership, more accessible price point with comparable intimacy",
  },
  {
    name: "Six Senses",
    location: "Global (20+ properties)",
    positioning: "Wellness-first luxury with sustainability",
    priceRange: "$800–$3,000/night",
    keyDifferentiator: "Wellness programs, sustainability metrics, spa expertise",
    nayaraAdvantage: "Stronger destination authenticity, volcanic hot springs (unique), more adventurous excursion programs",
  },
];

const MARKETS: Market[] = [
  {
    id: "costa-rica",
    title: "Costa Rica Luxury",
    region: "Central America",
    nayaraProperty: "Nayara Springs, Gardens & Tented Camp",
    overview: "Costa Rica's luxury segment is anchored by Arenal and the Pacific coast. Nayara dominates the Arenal market with three distinct properties offering different experiences on a shared campus — a model no competitor replicates.",
    competitors: [
      {
        name: "Auberge Resorts (Hacienda AltaGracia)",
        location: "Pérez Zeledón, Costa Rica",
        positioning: "Ultra-luxury hacienda experience",
        priceRange: "$1,200–$3,500/night",
        keyDifferentiator: "Equestrian program, coffee plantation, remote mountain setting",
        nayaraAdvantage: "Volcanic hot springs, proximity to Arenal activities, three distinct property experiences, stronger brand recognition in CR",
      },
      {
        name: "Tabacón Thermal Resort",
        location: "Arenal, Costa Rica",
        positioning: "Hot springs resort with volcano views",
        priceRange: "$300–$600/night",
        keyDifferentiator: "Large public hot springs, day-pass model, established brand",
        nayaraAdvantage: "Private hot spring villas, higher luxury tier, Michelin Keys, Relais & Châteaux membership, more intimate experience",
      },
    ],
  },
  {
    id: "atacama",
    title: "Atacama Desert",
    region: "Chile",
    nayaraProperty: "Nayara Alto Atacama",
    overview: "The Atacama luxury market is small but competitive, with three main players. Alto Atacama differentiates through its all-inclusive model, 30+ excursions, and 2 Michelin Keys — the only Atacama property with that distinction.",
    competitors: [
      {
        name: "Tierra Atacama",
        location: "San Pedro de Atacama, Chile",
        positioning: "Design-forward desert lodge",
        priceRange: "$600–$1,200/night (all-inclusive)",
        keyDifferentiator: "Contemporary architecture, infinity pool with volcano views, strong design identity",
        nayaraAdvantage: "2 Michelin Keys, more excursion variety (30+), ancestral spa traditions, stronger sustainability certifications",
      },
      {
        name: "Awasi Atacama",
        location: "San Pedro de Atacama, Chile",
        positioning: "Ultra-private luxury with dedicated guides",
        priceRange: "$1,500–$3,000/night",
        keyDifferentiator: "Private guide per room, extreme personalization, only 10 rooms",
        nayaraAdvantage: "More diverse excursion program, larger property with more amenities, better value proposition, 2 Michelin Keys",
      },
    ],
  },
  {
    id: "easter-island",
    title: "Easter Island",
    region: "Chile",
    nayaraProperty: "Nayara Hangaroa",
    overview: "Easter Island has very limited luxury accommodation. Hangaroa is one of only two upscale options, with the advantage of deep Rapa Nui cultural integration and sustainable tourism practices.",
    competitors: [
      {
        name: "Explora Rapa Nui",
        location: "Easter Island, Chile",
        positioning: "Exploration-focused luxury lodge",
        priceRange: "$800–$1,800/night (all-inclusive)",
        keyDifferentiator: "Guided exploration model, minimalist design, strong excursion program",
        nayaraAdvantage: "Deeper Rapa Nui cultural integration, community partnerships, S Turismo Sustentable certification, town-adjacent location",
      },
    ],
  },
  {
    id: "bocas",
    title: "Caribbean Panama",
    region: "Panama",
    nayaraProperty: "Nayara Bocas del Toro",
    overview: "Bocas del Toro is an emerging luxury destination. Nayara is the first major international luxury brand to establish a presence here, giving it first-mover advantage in a market with significant growth potential.",
    competitors: [
      {
        name: "Limited direct competition",
        location: "Bocas del Toro, Panama",
        positioning: "Boutique eco-lodges and mid-range resorts",
        priceRange: "$150–$400/night",
        keyDifferentiator: "Local character, lower price points",
        nayaraAdvantage: "First-mover in luxury segment, overwater villa concept unique to the region, private island exclusivity, Condé Nast Best Resort Central America 2025",
      },
    ],
  },
];

export default function Competitors() {
  const [activeMarket, setActiveMarket] = useState("brand");

  return (
    <div className="min-h-screen bg-white">
      <BrandNavigation pageType="content" />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1
            className="text-[#3a2a1a] text-3xl md:text-5xl tracking-wide mb-4"
            style={heading}
          >
            Competitive Landscape
          </h1>
          <p
            className="text-[#3a2a1a]/50 text-[15px] max-w-2xl mx-auto"
            style={body}
          >
            How Nayara positions against key competitors across each property
            market. For internal reference and strategic planning.
          </p>
        </div>
      </section>

      {/* Market tabs */}
      <section className="px-6 pb-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setActiveMarket("brand")}
              className={`px-5 py-2.5 rounded-full text-[13px] transition-all border ${
                activeMarket === "brand"
                  ? "bg-[#3a2a1a] text-white border-[#3a2a1a]"
                  : "bg-white text-[#3a2a1a]/70 border-[#3a2a1a]/15 hover:border-[#3a2a1a]/40"
              }`}
              style={{ ...body, fontWeight: 500 }}
            >
              Brand-Level
            </button>
            {MARKETS.map((m) => (
              <button
                key={m.id}
                onClick={() => setActiveMarket(m.id)}
                className={`px-5 py-2.5 rounded-full text-[13px] transition-all border ${
                  activeMarket === m.id
                    ? "bg-[#3a2a1a] text-white border-[#3a2a1a]"
                    : "bg-white text-[#3a2a1a]/70 border-[#3a2a1a]/15 hover:border-[#3a2a1a]/40"
                }`}
                style={{ ...body, fontWeight: 500 }}
              >
                {m.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          {activeMarket === "brand" ? (
            <BrandView />
          ) : (
            <MarketView market={MARKETS.find((m) => m.id === activeMarket)!} />
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function BrandView() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-8">
        <h2
          className="text-[#3a2a1a] text-xl md:text-2xl mb-3"
          style={heading}
        >
          Brand-Level Competitors
        </h2>
        <p className="text-[#3a2a1a]/50 text-[15px] leading-relaxed" style={body}>
          At the brand level, Nayara competes with global luxury hospitality
          groups that share a nature-immersive, sustainability-forward
          positioning. Nayara's unique advantage is its concentration of
          properties in Latin America's most distinctive ecosystems.
        </p>
      </div>

      <div className="space-y-6">
        {BRAND_COMPETITORS.map((comp) => (
          <CompetitorCard key={comp.name} competitor={comp} />
        ))}
      </div>
    </motion.div>
  );
}

function MarketView({ market }: { market: Market }) {
  return (
    <motion.div
      key={market.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span
            className="text-[#3a2a1a]/30 text-[11px] tracking-[0.2em]"
            style={{ ...body, fontWeight: 500 }}
          >
            {market.region}
          </span>
        </div>
        <h2
          className="text-[#3a2a1a] text-xl md:text-2xl mb-2"
          style={heading}
        >
          {market.title}
        </h2>
        <p
          className="text-[#3a2a1a]/40 text-[13px] mb-4"
          style={{ ...body, fontWeight: 500 }}
        >
          Nayara property: {market.nayaraProperty}
        </p>
        <p
          className="text-[#3a2a1a]/60 text-[15px] leading-relaxed"
          style={body}
        >
          {market.overview}
        </p>
      </div>

      <div className="space-y-6">
        {market.competitors.map((comp) => (
          <CompetitorCard key={comp.name} competitor={comp} />
        ))}
      </div>
    </motion.div>
  );
}

function CompetitorCard({ competitor }: { competitor: Competitor }) {
  return (
    <div className="border border-[#3a2a1a]/8 rounded-xl p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-5">
        <div>
          <h3
            className="text-[#3a2a1a] text-[17px] md:text-[18px]"
            style={{ ...body, fontWeight: 600 }}
          >
            {competitor.name}
          </h3>
          <span
            className="text-[#3a2a1a]/40 text-[13px]"
            style={body}
          >
            {competitor.location}
          </span>
        </div>
        <span
          className="text-[#3a2a1a]/50 text-[13px] bg-[#f7f5f0] px-3 py-1 rounded-full whitespace-nowrap"
          style={{ ...body, fontWeight: 500 }}
        >
          {competitor.priceRange}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <label
            className="block text-[#3a2a1a]/30 text-[10px] tracking-[0.15em] mb-1.5"
            style={{ ...body, fontWeight: 500 }}
          >
            Positioning
          </label>
          <p className="text-[#3a2a1a]/70 text-[14px] leading-relaxed" style={body}>
            {competitor.positioning}
          </p>
        </div>
        <div>
          <label
            className="block text-[#3a2a1a]/30 text-[10px] tracking-[0.15em] mb-1.5"
            style={{ ...body, fontWeight: 500 }}
          >
            Key Differentiator
          </label>
          <p className="text-[#3a2a1a]/70 text-[14px] leading-relaxed" style={body}>
            {competitor.keyDifferentiator}
          </p>
        </div>
        <div>
          <label
            className="block text-[#5a8a5a] text-[10px] tracking-[0.15em] mb-1.5"
            style={{ ...body, fontWeight: 600 }}
          >
            Nayara Advantage
          </label>
          <p className="text-[#3a2a1a]/80 text-[14px] leading-relaxed" style={{ ...body, fontWeight: 500 }}>
            {competitor.nayaraAdvantage}
          </p>
        </div>
      </div>
    </div>
  );
}
