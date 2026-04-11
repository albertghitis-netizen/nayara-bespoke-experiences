/**
 * SEO/AEO/GEO Strategy Page — Search, AI Engine, and Geographic optimization
 * Internal reference for content and search strategy
 */

import { useState } from "react";
import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

const TOPICAL_CLUSTERS = [
  {
    pillar: "Experiences",
    topics: [
      "Best excursions in Atacama Desert Chile",
      "Costa Rica volcano hiking Arenal",
      "Easter Island Moai tours guided",
      "Bocas del Toro snorkeling private island",
      "Hanging bridges Costa Rica rainforest",
      "Stargazing Atacama Desert luxury resort",
    ],
  },
  {
    pillar: "Sustainability",
    topics: [
      "Green Globe certified hotels Latin America",
      "Sustainable luxury resorts Central America",
      "S Turismo Sustentable Chile certification",
      "Eco-friendly overwater villas Caribbean",
      "Rapa Nui cultural preservation tourism",
      "Carbon neutral luxury travel Latin America",
    ],
  },
  {
    pillar: "Wellness",
    topics: [
      "Volcanic hot springs private villa Costa Rica",
      "Ancestral healing spa Atacama Desert",
      "Rainforest spa treatments luxury resort",
      "Wellness retreat Central America adults only",
      "Thermal springs resort Arenal volcano",
      "Desert wellness immersion Chile",
    ],
  },
  {
    pillar: "The Table",
    topics: [
      "Michelin Key restaurants Costa Rica",
      "Farm to table dining Arenal volcano",
      "Atacama Desert culinary experiences",
      "Overwater dining Caribbean Panama",
      "Rapa Nui traditional cuisine",
      "Luxury resort restaurants Latin America",
    ],
  },
];

const PROPERTY_KEYWORDS = [
  {
    property: "Nayara Springs",
    primary: ["luxury hot springs resort Costa Rica", "Michelin Key hotel Arenal", "adults only resort Costa Rica"],
    secondary: ["private plunge pool villa", "Relais Chateaux Costa Rica", "romantic getaway Central America"],
  },
  {
    property: "Nayara Gardens",
    primary: ["family luxury resort Costa Rica", "Arenal volcano hotel family", "Travel Leisure best resort"],
    secondary: ["family rainforest adventure", "kids club luxury resort", "multi-generational travel Costa Rica"],
  },
  {
    property: "Nayara Tented Camp",
    primary: ["luxury glamping Costa Rica", "tented camp rainforest", "glamping Arenal volcano"],
    secondary: ["luxury tent villa private pool", "nature immersion resort", "eco glamping Central America"],
  },
  {
    property: "Nayara Alto Atacama",
    primary: ["luxury desert resort Atacama", "Michelin Key hotel Chile", "all inclusive Atacama Desert"],
    secondary: ["stargazing resort Chile", "Atacama excursions luxury", "desert oasis hotel San Pedro"],
  },
  {
    property: "Nayara Bocas del Toro",
    primary: ["overwater villas Caribbean Panama", "adults only resort Bocas del Toro", "luxury private island Panama"],
    secondary: ["overwater bungalow Caribbean", "Conde Nast best resort Central America", "romantic Caribbean getaway"],
  },
  {
    property: "Nayara Hangaroa",
    primary: ["luxury hotel Easter Island", "Rapa Nui resort", "Easter Island accommodation"],
    secondary: ["Moai cultural experience hotel", "sustainable tourism Easter Island", "Polynesian luxury resort"],
  },
];

const AEO_STRATEGIES = [
  { title: "Structured Data", desc: "Hotel, Organization, Article, FAQ, and Review schema markup on every page. Ensures AI engines can parse property details, pricing, and reviews." },
  { title: "Conversational Content", desc: "FAQ page with 40+ questions mirrors how users ask AI assistants. Each answer is concise and factual for direct citation." },
  { title: "Entity Authority", desc: "Consistent NAP (Name, Address, Phone) across all pages. Property names always formatted identically. Awards and certifications cited with dates." },
  { title: "Knowledge Panel Optimization", desc: "Google Business Profile for each property linked to website. Wikipedia-style factual content in Story sections." },
];

const GEO_STRATEGIES = [
  { title: "Multi-Country Targeting", desc: "Costa Rica (3 properties), Chile (2 properties), Panama (1 property). Each property page optimized for its geographic market." },
  { title: "Local Language Support", desc: "Spanish content planned for Latin American markets. English as primary for North American and European travelers." },
  { title: "Destination Pages", desc: "Each property page doubles as a destination guide — getting here, climate, altitude, visa info — capturing informational queries." },
  { title: "Regional Competitor Positioning", desc: "Content positions Nayara against regional competitors in each market, capturing comparison queries." },
];

const CONTENT_CALENDAR = [
  { month: "Q1", topics: ["Atacama stargazing season guide", "Costa Rica dry season experiences", "Bocas del Toro whale watching preview", "Sustainability annual report"] },
  { month: "Q2", topics: ["Easter Island Tapati festival coverage", "Rainforest wellness retreat guide", "Farm-to-table dining series", "Green Globe recertification"] },
  { month: "Q3", topics: ["Atacama altitude guide for first-timers", "Costa Rica rainy season hidden gems", "Bocas del Toro opening anniversary", "Award season preparation"] },
  { month: "Q4", topics: ["Year-end award roundup", "Holiday travel guide all properties", "New Year wellness packages", "Annual photography showcase"] },
];

export default function SEOStrategy() {
  const [activeTab, setActiveTab] = useState("clusters");

  const tabs = [
    { id: "clusters", label: "Topical Clusters" },
    { id: "keywords", label: "Property Keywords" },
    { id: "aeo", label: "AI Engine (AEO)" },
    { id: "geo", label: "Geographic (GEO)" },
    { id: "calendar", label: "Content Calendar" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <BrandNavigation pageType="content" />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-[#3a2a1a] text-3xl md:text-5xl tracking-wide mb-4" style={heading}>
            SEO / AEO / GEO Strategy
          </h1>
          <p className="text-[#3a2a1a]/50 text-[15px] max-w-2xl mx-auto" style={body}>
            Search engine optimization, AI engine optimization, and geographic optimization strategy for all six Nayara properties.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="px-6 pb-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-5 py-2.5 rounded-full text-[13px] transition-all border ${
                  activeTab === t.id
                    ? "bg-[#3a2a1a] text-white border-[#3a2a1a]"
                    : "bg-white text-[#3a2a1a]/70 border-[#3a2a1a]/15 hover:border-[#3a2a1a]/40"
                }`}
                style={{ ...body, fontWeight: 500 }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          {activeTab === "clusters" && <TopicalClusters />}
          {activeTab === "keywords" && <PropertyKeywords />}
          {activeTab === "aeo" && <AEOSection />}
          {activeTab === "geo" && <GEOSection />}
          {activeTab === "calendar" && <ContentCalendar />}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function TopicalClusters() {
  return (
    <div className="space-y-8">
      <p className="text-[#3a2a1a]/60 text-[15px] leading-relaxed" style={body}>
        Each pillar serves as a topical cluster hub. Blog posts, podcast episodes, and property pages link back to the pillar page, building topical authority.
      </p>
      {TOPICAL_CLUSTERS.map((cluster) => (
        <div key={cluster.pillar} className="border border-[#3a2a1a]/8 rounded-xl p-6">
          <h3 className="text-[#3a2a1a] text-[17px] mb-4" style={{ ...body, fontWeight: 600 }}>{cluster.pillar}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {cluster.topics.map((topic) => (
              <div key={topic} className="flex items-center gap-2">
                <span className="text-[#5a8a5a] flex-shrink-0">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-[#3a2a1a]/60 text-[14px]" style={body}>{topic}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function PropertyKeywords() {
  return (
    <div className="space-y-6">
      {PROPERTY_KEYWORDS.map((p) => (
        <div key={p.property} className="border border-[#3a2a1a]/8 rounded-xl p-6">
          <h3 className="text-[#3a2a1a] text-[17px] mb-4" style={{ ...body, fontWeight: 600 }}>{p.property}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[#5a8a5a] text-[10px] tracking-[0.15em] mb-2" style={{ ...body, fontWeight: 600 }}>Primary Keywords</label>
              <ul className="space-y-1.5">
                {p.primary.map((kw) => (
                  <li key={kw} className="text-[#3a2a1a]/70 text-[14px]" style={body}>{kw}</li>
                ))}
              </ul>
            </div>
            <div>
              <label className="block text-[#3a2a1a]/30 text-[10px] tracking-[0.15em] mb-2" style={{ ...body, fontWeight: 500 }}>Secondary Keywords</label>
              <ul className="space-y-1.5">
                {p.secondary.map((kw) => (
                  <li key={kw} className="text-[#3a2a1a]/50 text-[14px]" style={body}>{kw}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function AEOSection() {
  return (
    <div className="space-y-6">
      <p className="text-[#3a2a1a]/60 text-[15px] leading-relaxed mb-4" style={body}>
        AI Engine Optimization ensures Nayara content is accurately cited by ChatGPT, Perplexity, Google AI Overviews, and other AI-powered search tools.
      </p>
      {AEO_STRATEGIES.map((s) => (
        <div key={s.title} className="border border-[#3a2a1a]/8 rounded-xl p-6">
          <h3 className="text-[#3a2a1a] text-[15px] mb-2" style={{ ...body, fontWeight: 600 }}>{s.title}</h3>
          <p className="text-[#3a2a1a]/60 text-[14px] leading-relaxed" style={body}>{s.desc}</p>
        </div>
      ))}
    </div>
  );
}

function GEOSection() {
  return (
    <div className="space-y-6">
      <p className="text-[#3a2a1a]/60 text-[15px] leading-relaxed mb-4" style={body}>
        Geographic optimization targets travelers searching for specific destinations, ensuring Nayara appears in location-based queries.
      </p>
      {GEO_STRATEGIES.map((s) => (
        <div key={s.title} className="border border-[#3a2a1a]/8 rounded-xl p-6">
          <h3 className="text-[#3a2a1a] text-[15px] mb-2" style={{ ...body, fontWeight: 600 }}>{s.title}</h3>
          <p className="text-[#3a2a1a]/60 text-[14px] leading-relaxed" style={body}>{s.desc}</p>
        </div>
      ))}
    </div>
  );
}

function ContentCalendar() {
  return (
    <div className="space-y-6">
      <p className="text-[#3a2a1a]/60 text-[15px] leading-relaxed mb-4" style={body}>
        Quarterly content themes aligned with seasonal travel patterns and property events. Each quarter targets specific keyword clusters.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CONTENT_CALENDAR.map((q) => (
          <div key={q.month} className="border border-[#3a2a1a]/8 rounded-xl p-6">
            <h3 className="text-[#3a2a1a] text-[17px] mb-4" style={{ ...body, fontWeight: 600 }}>{q.month}</h3>
            <ul className="space-y-2">
              {q.topics.map((topic) => (
                <li key={topic} className="flex items-start gap-2">
                  <span className="text-[#c4a882] mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-current" />
                  <span className="text-[#3a2a1a]/60 text-[14px]" style={body}>{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
