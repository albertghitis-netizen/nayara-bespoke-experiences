/*
 * AWARDS & PRESS — Combined page
 * Awards, Michelin Keys, certifications + press clips, all filterable by property
 */

import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ShieldCheck, ChevronDown, Key, ExternalLink } from "lucide-react";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import HotelFilterBar6 from "@/components/HotelFilterBar6";
import NativeVideo from "@/components/NativeVideo";

/* ── CDN assets ── */
const CDN = {
  heroVideoDesktop: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/spa-springs-compressed_4f2eb97d.mp4",
  heroVideoMobile: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-s1-vertical-compressed_903eb616.mp4",
};

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return isMobile;
}

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

/* ── Awards data ── */
interface AwardEntry { source: string; accolades: string[]; }
interface PropertyAwards { property: string; michelinKeys?: number; awards: AwardEntry[]; }

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

const certifications = [
  { name: "Green Globe", properties: "Nayara Gardens, Nayara Springs, Nayara Tented Camp, Nayara Bocas del Toro", description: "International sustainability certification recognizing best practices in environmental management, social responsibility, and economic viability in the travel and tourism industry." },
  { name: "S Certification", properties: "Nayara Alto Atacama, Nayara Hangaroa", description: "Chile's national sustainability certification from Sernatur, recognizing the highest standards of environmental, social, and economic responsibility in tourism operations." },
  { name: "Carbon Neutral", properties: "Nayara Gardens, Nayara Springs, Nayara Tented Camp", description: "All three Costa Rica properties have achieved carbon-neutral certification, offsetting 100% of their carbon emissions through verified conservation and reforestation programs." },
];

const brandStats = [
  { number: "7", label: "Michelin Keys", sublabel: "Across 3 properties" },
  { number: "6", label: "Properties", sublabel: "3 countries" },
  { number: "#1", label: "In the World", sublabel: "Condé Nast 2020" },
  { number: "20+", label: "Years", sublabel: "Of excellence" },
];

/* ── Press data ── */
interface PressClip {
  title: string;
  publication: string;
  date: string;
  url: string;
  property: string;
  topic?: string;
  highlight?: boolean;
}

const pressClips: PressClip[] = [
  { title: "7 MICHELIN Keys. 3 Countries. 1 Standard of Excellence", publication: "Nayara Journal", date: "March 2026", url: "https://blog.nayararesorts.com/7-michelin-keys-3-countries-1-commitment", property: "Multiple Properties", topic: "Awards", highlight: true },
  { title: "Michelin Key Hotels: Top Luxury Stays", publication: "Inspirato", date: "January 2026", url: "https://www.inspirato.com/details/general/michelin-key-hotels-luxury-travel/", property: "Nayara Springs", topic: "Awards" },
  { title: "Nayara Resorts Named Top 15 Hotel Brand in the World", publication: "Travel + Leisure", date: "December 2025", url: "https://www.travelandleisure.com/", property: "Multiple Properties", topic: "Awards", highlight: true },
  { title: "Nayara Resorts Plans Eco-Friendly Beach Hotel in Manuel Antonio", publication: "Tico Times", date: "December 2025", url: "https://ticotimes.net/2025/12/09/costa-ricas-nayara-resorts-plans-eco-friendly-beach-hotel-in-manuel-antonio", property: "Multiple Properties", topic: "Sustainability" },
  { title: "Nayara Springs Named Among World's Best Hotels by Michelin", publication: "Tico Times", date: "October 2025", url: "https://ticotimes.net/2025/10/10/costa-ricas-nayara-springs-named-among-worlds-best-hotels-by-michelin", property: "Nayara Springs", topic: "Awards", highlight: true },
  { title: "Michelin, Conde Nast, Travel + Leisure: The World's Top Awards Choose Nayara Resorts", publication: "Travel World News", date: "October 2025", url: "https://www.travelworldnews.com/michelin-conde-nast-travel-leisure-the-worlds-top-awards-choose-nayara-resorts/", property: "Multiple Properties", topic: "Awards", highlight: true },
  { title: "Nayara Bocas del Toro Named #1 Resort in Central America", publication: "Conde Nast Traveler", date: "October 2025", url: "https://nayararesorts.com/nayara-bocas-del-toro-named-1-resort-by-conde-nast-traveler/", property: "Nayara Bocas del Toro", topic: "Awards", highlight: true },
  { title: "Why Conde Nast Traveler Named Nayara Bocas del Toro #1", publication: "Nayara Journal", date: "October 2025", url: "https://blog.nayararesorts.com/bocas-wins-cond%C3%A9-nast-traveler-award-2025", property: "Nayara Bocas del Toro", topic: "Awards" },
  { title: "Nayara Alto Atacama Review: A Smart Pick for Adventurous Couples", publication: "Travel Market Report", date: "October 2025", url: "https://www.travelmarketreport.com/hotels-resorts/articles/nayara-alto-atacama-review-a-smart-pick-for-adventurous-couples-visiting-the-north-of-chile", property: "Nayara Alto Atacama", topic: "Experiences" },
  { title: "Nayara Alto Atacama Hotel Review", publication: "The Telegraph", date: "July 2025", url: "https://www.telegraph.co.uk/travel/destinations/south-america/chile/atacama/san-pedro-de-atacama/hotels/nayara-alto-atacama-hotel/", property: "Nayara Alto Atacama", topic: "Experiences" },
  { title: "How to Plan the Perfect Trip to Easter Island", publication: "Travel + Leisure", date: "June 2025", url: "https://www.travelandleisure.com/trip-ideas/vacationing-in-easter-island", property: "Nayara Hangaroa", topic: "Experiences" },
  { title: "Nayara Springs - Three MICHELIN Keys", publication: "MICHELIN Guide", date: "2025", url: "https://guide.michelin.com/en/hotels-stays/la-fortuna-de-san-carlos/nayara-springs-121925-11881", property: "Nayara Springs", topic: "Awards", highlight: true },
  { title: "Nayara Hangaroa Earns S Certification for Sustainability", publication: "Nayara Resorts", date: "2025", url: "https://nayarahangaroa.com/", property: "Nayara Hangaroa", topic: "Sustainability" },
  { title: "Travel + Leisure Readers' 10 Favorite Resorts in Central America", publication: "Travel + Leisure", date: "2024", url: "https://nayararesorts.com/travel-leisure-readers-10-favorite-resorts-in-central-america-in-2024/", property: "Multiple Properties", topic: "Awards", highlight: true },
  { title: "Nayara Tented Camp: Central America's Best Resort?", publication: "YouTube / Travel Review", date: "May 2024", url: "https://www.youtube.com/watch?v=_j1Wyofjeaw", property: "Nayara Tented Camp", topic: "Experiences" },
  { title: "Nayara Alto Atacama Review - Luxury Lodge in Chile's Desert", publication: "The Private Traveller", date: "January 2024", url: "https://theprivatetraveller.com/hotel-reviews/nayara-atacama-chile", property: "Nayara Alto Atacama", topic: "Experiences" },
  { title: "An Intentional Oasis Meant for Slowing Down", publication: "Conde Nast Traveler", date: "2024", url: "https://www.cntraveler.com/hotels/nayara-alto-atacama", property: "Nayara Alto Atacama", topic: "Wellness" },
  { title: "Nayara Tented Camp Named #2 Top 100 Hotels in the World", publication: "Travel + Leisure", date: "2021", url: "https://www.lhw.com/press-center/0921_Travel_and_Leisure_Worlds_Best", property: "Nayara Tented Camp", topic: "Awards", highlight: true },
  { title: "Sukha Spa Named Among World's 12 Best Spas", publication: "Galerie Magazine", date: "2024", url: "https://galeriemagazine.com/best-spas-in-the-world/", property: "Nayara Springs", topic: "Wellness" },
];

const PROPERTY_FILTERS = ["All", "Nayara Resorts", "Nayara Alto Atacama", "Nayara Bocas del Toro", "Nayara Gardens", "Nayara Hangaroa", "Nayara Springs", "Nayara Tented Camp"];

function getYear(date: string): string {
  const match = date.match(/\d{4}/);
  return match ? match[0] : "Other";
}

/* ── Main Component ── */
export default function AwardsAndPress() {
  const [activeHotel, setActiveHotel] = useState("alto-atacama");
  const [expandedProperty, setExpandedProperty] = useState<string | null>("Nayara Springs");
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeTab, setActiveTab] = useState<"awards" | "press">("awards");

  const filteredAwards = activeFilter === "All" ? allAwards : allAwards.filter(a => a.property === activeFilter);

  const filteredPress = useMemo(() => {
    return pressClips.filter((c) => {
      return activeFilter === "All" || c.property === activeFilter || c.property === "Multiple Properties";
    });
  }, [activeFilter]);

  const groupedPress = useMemo(() => {
    return filteredPress.reduce<Record<string, PressClip[]>>((acc, clip) => {
      const year = getYear(clip.date);
      if (!acc[year]) acc[year] = [];
      acc[year].push(clip);
      return acc;
    }, {});
  }, [filteredPress]);

  const sortedYears = Object.keys(groupedPress).sort((a, b) => {
    if (a === "Other") return 1;
    if (b === "Other") return -1;
    return parseInt(b) - parseInt(a);
  });

  const toggleProperty = (property: string) => {
    setExpandedProperty(expandedProperty === property ? null : property);
  };

  return (
    <div className="min-h-screen bg-white">
      <BrandNavigation pageType="brand" hideCenterLabel />

      {/* ── Hero Video ── */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0">
          <NativeVideo src={useIsMobile() ? CDN.heroVideoMobile : CDN.heroVideoDesktop} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-2xl md:text-[2rem] lg:text-[2.5rem] tracking-wide text-center"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 400, lineHeight: 1 }}
          >
            Press & Awards
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-white/60 text-[11px] md:text-xs tracking-[0.25em] uppercase mt-3"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}
          >
            Two Decades of Excellence
          </motion.p>
        </div>
      </section>

      {/* ── Brand Stats Bar ── */}
      <section className="bg-[#3B2B26] py-10 md:py-14">
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
                <AnimatedStat
                  value={stat.number}
                  className="text-white text-3xl md:text-4xl lg:text-5xl mb-1"
                  style={heading}
                />
                <p className="text-white/70 text-xs md:text-sm tracking-[0.1em]" style={{ ...body, fontWeight: 500 }}>{stat.label}</p>
                <p className="text-white/40 text-[10px] md:text-xs mt-0.5" style={{ ...body, fontWeight: 300 }}>{stat.sublabel}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brand Story Intro ── */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-[#f4f1eb]">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-[10px] tracking-[0.25em] mb-4" style={{ ...body, fontWeight: 500, color: "#3B2B26", opacity: 0.4 }}>The Nayara Story</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-2xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-wide mb-8" style={{ ...heading, color: "#3B2B26" }}>
              Award-Winning Properties Defined by Destination
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[15px] leading-[1.8] mb-5 max-w-3xl" style={{ ...body, color: "#5a4a3a" }}>
              Our resorts belong to the land. In Costa Rica, lush rainforest and mineral hot springs greet you at the foot of Arenal Volcano. In Chile's Atacama, the world's driest desert becomes a place of stillness and discovery. On Easter Island, silent giants stand guard and Rapa Nui culture is ever-present. On a private island on Panama's Caribbean coast, overwater villas rise above the reef.
            </p>
            <p className="text-[15px] leading-[1.8] max-w-3xl" style={{ ...body, color: "#5a4a3a" }}>
              Six properties. Three countries. All designed to bring guests back to nature and leave every ecosystem stronger than we found it.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Hotel Filter ── */}
      <HotelFilterBar6 activeHotel={activeHotel} onHotelChange={setActiveHotel} />

      {/* ── Tab Switcher + Property Filter ── */}
      <section className="py-10 md:py-14 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          {/* Tabs */}
          <div className="flex justify-center gap-1 mb-8">
            {(["awards", "press"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 text-[12px] tracking-[0.12em] transition-all duration-300 border-b-2 ${
                  activeTab === tab
                    ? "text-[#3B2B26] border-[#3B2B26]"
                    : "text-[#3B2B26]/30 border-transparent hover:text-[#3B2B26]/60"
                }`}
                style={{ ...body, fontWeight: 500 }}
              >
                {tab === "awards" ? "Awards & Recognition" : "Press & Media"}
              </button>
            ))}
          </div>

          {/* Property Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {PROPERTY_FILTERS.map((p) => (
              <button
                key={p}
                onClick={() => { setActiveFilter(p); setExpandedProperty(null); }}
                className={`px-3 py-1.5 text-[11px] tracking-[0.08em] rounded-full border transition-all duration-300 ${
                  activeFilter === p
                    ? "bg-[#3B2B26] text-white border-[#3B2B26]"
                    : "bg-transparent text-[#5a4a3a]/40 border-[#3B2B26]/10 hover:border-[#3B2B26]/25 hover:text-[#3B2B26]"
                }`}
                style={{ ...body, fontWeight: 500 }}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Awards Tab ── */}
      {activeTab === "awards" && (
        <>
          {/* Michelin Keys Explainer */}
          <section className="pb-16 md:pb-24 px-6 md:px-10">
            <div className="max-w-5xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-12 md:mb-16">
                <p className="text-[#3B2B26]/40 text-[10px] md:text-xs tracking-[0.4em] mb-4" style={{ ...body, fontWeight: 500 }}>The Michelin Guide</p>
                <h2 className="text-[#3B2B26] text-3xl md:text-4xl lg:text-5xl mb-6" style={heading}>7 Michelin Keys</h2>
                <p className="text-[#3B2B26]/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed" style={{ ...body, fontWeight: 300 }}>
                  Michelin Keys are the hotel equivalent of Michelin Stars for restaurants. Awarded to properties that deliver an exceptional stay defined by outstanding architecture, interior design, quality of service, character, and a genuine sense of place. Three Keys is the highest distinction.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {[
                  { keys: 3, property: "Nayara Springs", location: "Costa Rica", description: "The first hotel in Costa Rica to earn three Michelin Keys — the highest recognition. Adults-only, private hot spring plunge pools, and world-class wellness." },
                  { keys: 2, property: "Nayara Bocas del Toro", location: "Panama", description: "An overwater paradise in the Caribbean. Off-grid solar power, coral restoration, and the most biodiverse marine ecosystem in the region." },
                  { keys: 2, property: "Nayara Alto Atacama", location: "Chile", description: "The only luxury hotel in an actual desert oasis. Private observatory, 40+ curated excursions, and the clearest skies on Earth." },
                ].map((item, i) => (
                  <motion.div key={item.property} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.06 }} className="bg-white p-8 md:p-10 border border-stone-100">
                    <div className="flex gap-1.5 mb-6">
                      {Array.from({ length: item.keys }).map((_, ki) => (
                        <Key key={ki} className="w-5 h-5 text-amber-600" />
                      ))}
                    </div>
                    <h3 className="text-[#3B2B26] text-xl md:text-2xl mb-1" style={heading}>{item.property}</h3>
                    <p className="text-[#3B2B26]/40 text-[10px] tracking-[0.2em] mb-4" style={{ ...body, fontWeight: 500 }}>{item.location} · {item.keys} Keys</p>
                    <p className="text-[#3B2B26]/60 text-sm leading-relaxed" style={{ ...body, fontWeight: 300 }}>{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Awards by Property */}
          <section className="py-16 md:py-24 px-6 md:px-10 bg-[#3B2B26]/[0.03]">
            <div className="max-w-4xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-12">
                <p className="text-[#3B2B26]/40 text-[10px] md:text-xs tracking-[0.4em] mb-4" style={{ ...body, fontWeight: 500 }}>By Property</p>
                <h2 className="text-[#3B2B26] text-3xl md:text-4xl lg:text-5xl" style={heading}>Awards & Accolades</h2>
              </motion.div>

              <div className="space-y-0">
                {filteredAwards.map((section, si) => (
                  <motion.div key={section.property} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: si * 0.05 }} className="border-b border-[#3B2B26]/10">
                    <button onClick={() => toggleProperty(section.property)} className="flex items-center justify-between w-full py-5 md:py-6 text-left group">
                      <div className="flex items-center gap-3">
                        {section.michelinKeys && (
                          <div className="flex gap-0.5">
                            {Array.from({ length: section.michelinKeys }).map((_, ki) => (
                              <Key key={ki} className="w-3.5 h-3.5 text-amber-600" />
                            ))}
                          </div>
                        )}
                        <span className="text-[#3B2B26] text-base md:text-lg group-hover:text-[#3B2B26]/70 transition-colors" style={heading}>{section.property}</span>
                      </div>
                      <motion.div animate={{ rotate: expandedProperty === section.property ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        <ChevronDown className="w-5 h-5 text-[#3B2B26]/30" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {expandedProperty === section.property && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                          <div className="pb-6 pl-4 md:pl-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {section.awards.map((award, ai) => (
                              <div key={ai}>
                                <h4 className="text-amber-700/80 text-[10px] md:text-xs tracking-[0.15em] mb-2" style={{ ...body, fontWeight: 600 }}>{award.source}</h4>
                                {award.accolades.map((accolade, aci) => (
                                  <p key={aci} className="text-[#3B2B26]/60 text-sm py-1.5 border-b border-[#3B2B26]/5 last:border-0" style={body}>{accolade}</p>
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

          {/* Certifications */}
          <section className="py-16 md:py-24 px-6 md:px-10">
            <div className="max-w-5xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-12 md:mb-16">
                <p className="text-[#3B2B26]/40 text-[10px] md:text-xs tracking-[0.4em] mb-4" style={{ ...body, fontWeight: 500 }}>Sustainability</p>
                <h2 className="text-[#3B2B26] text-3xl md:text-4xl lg:text-5xl" style={heading}>Certifications</h2>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {certifications.map((cert, i) => (
                  <motion.div key={cert.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.06 }} className="bg-white p-8 md:p-10 border border-stone-100">
                    <ShieldCheck className="w-8 h-8 text-emerald-700/60 mb-5" />
                    <h3 className="text-[#3B2B26] text-xl mb-2" style={heading}>{cert.name}</h3>
                    <p className="text-emerald-700/60 text-[10px] tracking-[0.1em] mb-4" style={{ ...body, fontWeight: 500 }}>{cert.properties}</p>
                    <p className="text-[#3B2B26]/50 text-sm leading-relaxed" style={{ ...body, fontWeight: 300 }}>{cert.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ── Press Tab ── */}
      {activeTab === "press" && (
        <section className="px-6 md:px-10 pb-24">
          <div className="max-w-4xl mx-auto">
            {sortedYears.length === 0 && (
              <div className="text-center py-16">
                <p className="text-[#3B2B26]/25 text-[14px]" style={body}>No press clips match the current filters.</p>
              </div>
            )}
            {sortedYears.map((year) => (
              <FadeIn key={year} className="mb-14">
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-[#3B2B26] text-xl md:text-2xl" style={heading}>{year}</h2>
                  <div className="flex-1 h-px bg-[#3B2B26]/8" />
                  <span className="text-[#3B2B26]/20 text-[11px] tracking-[0.08em]" style={body}>
                    {groupedPress[year].length} {groupedPress[year].length === 1 ? "article" : "articles"}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  {groupedPress[year].map((clip, i) => (
                    <a key={i} href={clip.url} target="_blank" rel="noopener noreferrer" className={`group flex items-start gap-4 py-4 px-4 -mx-4 rounded-lg transition-all duration-300 hover:bg-[#3B2B26]/[0.03] ${clip.highlight ? "border-l-2 border-[#3B2B26]/15 pl-5" : ""}`}>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[#3B2B26] text-sm md:text-base leading-snug group-hover:text-[#3B2B26]/70 transition-colors" style={heading}>{clip.title}</h3>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5">
                          <span className="text-[#3B2B26]/40 text-[11px] tracking-[0.04em]" style={{ ...body, fontWeight: 500 }}>{clip.publication}</span>
                          <span className="text-[#3B2B26]/15 text-[10px]">|</span>
                          <span className="text-[#3B2B26]/25 text-[11px]" style={body}>{clip.date}</span>
                          {clip.property !== "Multiple Properties" && (
                            <>
                              <span className="text-[#3B2B26]/15 text-[10px]">|</span>
                              <span className="text-[#3B2B26]/25 text-[10px] tracking-[0.08em]" style={body}>{clip.property}</span>
                            </>
                          )}
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-[#3B2B26]/12 group-hover:text-[#3B2B26]/35 transition-colors flex-shrink-0 mt-1" />
                    </a>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

/* ── Animated Counter ── */
function AnimatedStat({ value, className, style }: { value: string; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const match = value.match(/^([#]?)(\d+)([+]?)$/);
    if (!match) { setDisplay(value); return; }
    const prefix = match[1];
    const target = parseInt(match[2], 10);
    const suffix = match[3];
    const duration = 1500;
    const steps = 40;
    const stepTime = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += 1;
      const progress = current / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = Math.round(eased * target);
      setDisplay(`${prefix}${val}${suffix}`);
      if (current >= steps) { clearInterval(timer); setDisplay(value); }
    }, stepTime);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return <p ref={ref} className={className} style={style}>{display}</p>;
}
