/*
 * AWARDS & PRESS , Combined page
 * Awards, Michelin Keys, certifications + press clips, all filterable by property
 */

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown, Key, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import CanvasVideo from "@/components/CanvasVideo";

/* ── CDN assets ── */
const CDN = {
  heroVideoDesktop: "/manus-storage/press-awards-hero-trimmed_df484cfc.mp4",
  heroVideoMobile: "/manus-storage/press-awards-hero-trimmed_df484cfc.mp4",
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
  { title: "7 MICHELIN Keys. 3 Countries. 1 Standard of Excellence", publication: "Nayara Journal", date: "March 2026", url: "/blog/michelin-keys", property: "Multiple Properties", topic: "Awards", highlight: true },
  { title: "Michelin Key Hotels: Top Luxury Stays", publication: "Inspirato", date: "January 2026", url: "https://www.inspirato.com/details/general/michelin-key-hotels-luxury-travel/", property: "Nayara Springs", topic: "Awards" },
  { title: "Nayara Resorts Named Top 15 Hotel Brand in the World", publication: "Travel + Leisure", date: "December 2025", url: "https://www.travelandleisure.com/", property: "Multiple Properties", topic: "Awards", highlight: true },
  { title: "Nayara Resorts Plans Eco-Friendly Beach Hotel in Manuel Antonio", publication: "Tico Times", date: "December 2025", url: "https://ticotimes.net/2025/12/09/costa-ricas-nayara-resorts-plans-eco-friendly-beach-hotel-in-manuel-antonio", property: "Multiple Properties", topic: "Sustainability" },
  { title: "Nayara Springs Named Among World's Best Hotels by Michelin", publication: "Tico Times", date: "October 2025", url: "https://ticotimes.net/2025/10/10/costa-ricas-nayara-springs-named-among-worlds-best-hotels-by-michelin", property: "Nayara Springs", topic: "Awards", highlight: true },
  { title: "Michelin, Conde Nast, Travel + Leisure: The World's Top Awards Choose Nayara Resorts", publication: "Travel World News", date: "October 2025", url: "https://www.travelworldnews.com/michelin-conde-nast-travel-leisure-the-worlds-top-awards-choose-nayara-resorts/", property: "Multiple Properties", topic: "Awards", highlight: true },
  { title: "Nayara Bocas del Toro Named #1 Resort in Central America", publication: "Conde Nast Traveler", date: "October 2025", url: "https://nayararesorts.com/nayara-bocas-del-toro-named-1-resort-by-conde-nast-traveler/", property: "Nayara Bocas del Toro", topic: "Awards", highlight: true },
  { title: "Why Conde Nast Traveler Named Nayara Bocas del Toro #1", publication: "Nayara Journal", date: "October 2025", url: "/blog/bocas-conde-nast", property: "Nayara Bocas del Toro", topic: "Awards" },
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

const PROPERTY_FILTERS = ["Nayara Resorts", "Nayara Alto Atacama", "Nayara Bocas del Toro", "Nayara Gardens", "Nayara Hangaroa", "Nayara Springs", "Nayara Tented Camp"];

function getYear(date: string): string {
  const match = date.match(/\d{4}/);
  return match ? match[0] : "Other";
}

/* ── Main Component ── */
export default function AwardsAndPress() {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-white">
      <BrandNavigation pageType="brand" hideCenterLabel />

      {/* ── Hero Video ── */}
      <section className="relative w-full h-screen overflow-hidden bg-[#3a2a1a]">
        <div className="absolute inset-0">
          {isMobile ? (
            <CanvasVideo src={CDN.heroVideoMobile} className="w-full h-full" loop />
          ) : (
            <video
              src={CDN.heroVideoDesktop}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          )}
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


      {/* ── Intro Paragraph ── */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-[#f7f5f0]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-[#3B2B26]/40 text-[10px] md:text-xs tracking-[0.4em] mb-4" style={{ ...body, fontWeight: 500 }}>NAYARA RESORTS</p>
            <h2 className="text-[#3B2B26] text-2xl md:text-3xl lg:text-4xl mb-6" style={heading}>The Most Recognized Luxury Hotel Brand in Latin America</h2>
            <p className="text-[#3B2B26]/60 text-sm md:text-base leading-relaxed" style={{ ...body, fontWeight: 300 }}>
              From the volcanic rainforests of Costa Rica to the driest desert on Earth, Nayara Resorts has earned the trust of the world's most respected travel authorities. With 7 Michelin Keys, consecutive No. 1 rankings from Condé Nast Traveler, and recognition from Travel + Leisure, AFAR, and The Telegraph, Nayara stands as the most awarded luxury hotel collection in Latin America.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Unified Editorial Cards Section ── */}
      <PressCardsSection />

      {/* ── Michelin Keys Section ── */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-12 md:mb-16">
            <p className="text-[#3B2B26]/40 text-[10px] md:text-xs tracking-[0.4em] mb-4" style={{ ...body, fontWeight: 500 }}>THE MICHELIN GUIDE</p>
            <h2 className="text-[#3B2B26] text-3xl md:text-4xl lg:text-5xl mb-6" style={heading}>7 Michelin Keys</h2>
            <p className="text-[#3B2B26]/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed" style={{ ...body, fontWeight: 300 }}>
              Michelin Keys are the hotel equivalent of Michelin Stars for restaurants — awarded to properties that deliver an exceptional stay defined by outstanding architecture, interior design, quality of service, and a genuine sense of place.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { keys: 3, property: "Nayara Springs", location: "Costa Rica", description: "The only Three Key hotel in Central America. Adults-only, private hot spring plunge pools, and world-class wellness in the shadow of Arenal Volcano." },
              { keys: 2, property: "Nayara Alto Atacama", location: "Chile", description: "Two Michelin Keys in the world's driest desert. A luxury oasis with a private observatory, 40+ curated excursions, and the clearest skies on Earth." },
              { keys: 2, property: "Nayara Bocas del Toro", location: "Panama", description: "Two Michelin Keys over the Caribbean. Off-grid solar power, coral restoration, and the most biodiverse marine ecosystem in the region." },
            ].map((item, i) => (
              <FadeIn key={item.property} delay={i * 0.06}>
                <div className="bg-[#f7f5f0] p-8 md:p-10 border border-stone-100">
                  <div className="flex gap-1.5 mb-6">
                    {Array.from({ length: item.keys }).map((_, ki) => (
                      <Key key={ki} className="w-5 h-5 text-amber-600" />
                    ))}
                  </div>
                  <h3 className="text-[#3B2B26] text-xl md:text-2xl mb-1" style={heading}>{item.property}</h3>
                  <p className="text-[#3B2B26]/40 text-[10px] tracking-[0.2em] mb-4" style={{ ...body, fontWeight: 500 }}>{item.location} · {item.keys} {item.keys === 1 ? "Key" : "Keys"}</p>
                  <p className="text-[#3B2B26]/60 text-sm leading-relaxed" style={{ ...body, fontWeight: 300 }}>{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-10">
            <a href="/blog/michelin-keys" className="inline-flex items-center gap-2 text-[#3B2B26]/60 text-sm hover:text-[#3B2B26] transition-colors" style={{ ...body, fontWeight: 400 }}>
              Read: What Are Michelin Keys?
              <span className="text-xs">→</span>
            </a>
          </FadeIn>
        </div>
      </section>

      <Footer textColor="#FFFFFF" />
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

/* ═══════════════════════════════════════════════════════════════
   PRESS CARDS — Editorial magazine-cover style cards
   ═══════════════════════════════════════════════════════════════ */
interface EditorialCard {
  title: string;
  publication: string;
  date: string;
  url: string;
  property: string;
  coverImage: string;
  type: "award" | "press";
}

const editorialCards: EditorialCard[] = [

  {
    title: "No. 13 Resort Brand in the World",
    publication: "Travel + Leisure",
    date: "2025",
    url: "https://www.travelandleisure.com/",
    property: "Nayara Resorts",
    coverImage: "/manus-storage/tl-worlds-best-2025_d7a4781b.jpg",
    type: "award",
  },
  {
    title: "No. 1 Resort in Central America",
    publication: "Condé Nast Traveler",
    date: "2025",
    url: "https://www.cntraveler.com/",
    property: "Nayara Bocas del Toro",
    coverImage: "/manus-storage/cnt-gold-list-2025_3f071380.jpg",
    type: "award",
  },
  {
    title: "Best New Hotels in the World",
    publication: "AFAR",
    date: "2023",
    url: "https://www.afar.com/",
    property: "Nayara Bocas del Toro",
    coverImage: "/manus-storage/afar-where-to-go-2024_a290bf6d.jpg",
    type: "award",
  },
  {
    title: "Michelin Key Hotels: Top Luxury Stays",
    publication: "Inspirato",
    date: "January 2026",
    url: "https://www.inspirato.com/details/general/michelin-key-hotels-luxury-travel/",
    property: "Nayara Springs",
    coverImage: "/manus-storage/inspirato-magazine_4f30cbc1.jpg",
    type: "press",
  },
  {
    title: "Michelin, Condé Nast, Travel + Leisure: The World's Top Awards Choose Nayara",
    publication: "Travel World News",
    date: "October 2025",
    url: "https://www.travelworldnews.com/michelin-conde-nast-travel-leisure-the-worlds-top-awards-choose-nayara-resorts/",
    property: "Nayara Resorts",
    coverImage: "/manus-storage/destinations-world-news_14994318.jpg",
    type: "press",
  },
  {
    title: "An Intentional Oasis Meant for Slowing Down",
    publication: "Condé Nast Traveler",
    date: "2024",
    url: "https://www.cntraveler.com/hotels/nayara-alto-atacama",
    property: "Nayara Alto Atacama",
    coverImage: "/manus-storage/travel-luxury-atacama_35ec689b.jpg",
    type: "press",
  },
  {
    title: "Nayara Alto Atacama Hotel Review",
    publication: "The Telegraph",
    date: "July 2025",
    url: "https://www.telegraph.co.uk/travel/destinations/south-america/chile/atacama/san-pedro-de-atacama/hotels/nayara-alto-atacama-hotel/",
    property: "Nayara Alto Atacama",
    coverImage: "/manus-storage/telegraph-logo_899d8ec6.jpg",
    type: "press",
  },
  {
    title: "Sukha Spa Named Among World's 12 Best Spas",
    publication: "Galerie Magazine",
    date: "2024",
    url: "https://galeriemagazine.com/best-spas-in-the-world/",
    property: "Nayara Springs",
    coverImage: "/manus-storage/galerie-summer-2024_549588f0.png",
    type: "press",
  },
  {
    title: "How to Plan the Perfect Trip to Easter Island",
    publication: "Travel + Leisure",
    date: "June 2025",
    url: "https://www.travelandleisure.com/trip-ideas/vacationing-in-easter-island",
    property: "Nayara Hangaroa",
    coverImage: "/manus-storage/tl-worlds-best-2025_d7a4781b.jpg",
    type: "press",
  },
  {
    title: "Nayara Resorts Plans Eco-Friendly Beach Hotel",
    publication: "Tico Times",
    date: "December 2025",
    url: "https://ticotimes.net/2025/12/09/costa-ricas-nayara-resorts-plans-eco-friendly-beach-hotel-in-manuel-antonio",
    property: "Nayara Resorts",
    coverImage: "/manus-storage/tico-times-logo_20ac5840.png",
    type: "press",
  },
  {
    title: "Nayara Alto Atacama Review: A Smart Pick for Adventurous Couples",
    publication: "Travel Market Report",
    date: "October 2025",
    url: "https://www.travelmarketreport.com/hotels-resorts/articles/nayara-alto-atacama-review-a-smart-pick-for-adventurous-couples-visiting-the-north-of-chile",
    property: "Nayara Alto Atacama",
    coverImage: "/manus-storage/destinations-world-news_14994318.jpg",
    type: "press",
  },
];

function PressCardsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    return () => el.removeEventListener("scroll", checkScroll);
  }, [checkScroll]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("a")?.offsetWidth || 300;
    el.scrollBy({ left: dir === "right" ? cardWidth + 20 : -(cardWidth + 20), behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 bg-[#f7f5f0]">
      <div className="max-w-7xl mx-auto">
        <div className="px-6 md:px-10 flex items-end justify-between mb-10 md:mb-14">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl lg:text-[36px] leading-[1.15] tracking-wide" style={{ ...heading, color: "#3B2B26" }}>
              Recognized by the Most Trusted Voices in Travel
            </h2>
          </FadeIn>
          {/* Desktop arrows */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-10 h-10 flex items-center justify-center border border-[#3B2B26]/15 text-[#3B2B26]/50 hover:text-[#3B2B26] hover:border-[#3B2B26]/40 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-10 h-10 flex items-center justify-center border border-[#3B2B26]/15 text-[#3B2B26]/50 hover:text-[#3B2B26] hover:border-[#3B2B26]/40 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        {/* Horizontal scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto px-6 md:px-10 pb-4 scrollbar-hide"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
        >
          {editorialCards.map((card, i) => (
            <motion.a
              key={i}
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative flex-shrink-0 w-[260px] md:w-[280px] overflow-hidden transition-all duration-500 hover:translate-y-[-6px]"
              style={{ scrollSnapAlign: "start" }}
            >
              {/* Cover image — portrait ratio */}
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#e8e4de]">
                <img
                  src={card.coverImage}
                  alt={card.publication}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                {/* Publication name — bottom of image */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span
                    className="text-[9px] tracking-[0.2em] uppercase text-white/70"
                    style={{ ...body, fontWeight: 600 }}
                  >
                    {card.publication}
                  </span>
                  <h3
                    className="text-white text-[14px] md:text-[15px] leading-[1.35] mt-1.5"
                    style={{ ...heading, fontWeight: 400 }}
                  >
                    {card.title}
                  </h3>
                </div>
              </div>
              {/* Meta below image */}
              <div className="pt-3 pb-1 flex items-center justify-between">
                <span
                  className="text-[10px] text-[#3B2B26]/40"
                  style={{ ...body, fontWeight: 400 }}
                >
                  {card.date} · {card.property}
                </span>
                <ExternalLink className="w-3 h-3 text-[#3B2B26]/25 group-hover:text-[#3B2B26]/60 transition-colors" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   AWARD VIDEO CARDS , Journal-style grid (identical to brand homepage)
   ═══════════════════════════════════════════════════════════════ */
const awardVideoCards = [
  {
    stat: "#1",
    accolade: "Best Resort in Central America",
    property: "Nayara Bocas del Toro — Condé Nast",
    route: "/blog/conde-nast-bocas-del-toro",
    videoSrc: "/manus-storage/award-bocas_5eedc0d2.mp4",
  },
  {
    stat: "#1",
    accolade: "Best Resort in Central America",
    property: "Nayara Tented Camp — Travel + Leisure",
    route: "/tented-camp",
    videoSrc: "/manus-storage/award-tented_e44f4b7d.mp4",
  },
  {
    stat: "Top 15",
    accolade: "Top 15 Resort Brands in the World",
    property: "Nayara Resorts — Travel + Leisure",
    route: "/awards",
    videoSrc: "/manus-storage/award-resorts_e26bf391.mp4",
  },
  {
    stat: "3",
    accolade: "Only 3 Michelin Key Hotel in Costa Rica",
    property: "Nayara Springs — MICHELIN Guide",
    route: "/blog/michelin-keys",
    videoSrc: "/manus-storage/award-springs_33c98f30.mp4",
  },
  {
    stat: "Top 15",
    accolade: "Top 15 Resorts in South America",
    property: "Nayara Alto Atacama — Condé Nast",
    route: "https://www.cntraveler.com/gallery/top-resorts-in-south-america",
    videoSrc: "/manus-storage/award-atacama_d55d15fa.mp4",
  },
  {
    stat: "Hall of Fame",
    accolade: "World's Best Awards Hall of Fame",
    property: "Nayara Gardens — Travel + Leisure",
    route: "/gardens",
    videoSrc: "/manus-storage/award-gardens_5eb1e82c.mp4",
  },
];

function AwardVideoCardsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const desktopRef = useRef<HTMLDivElement>(null);
  const [mobilePage, setMobilePage] = useState(0);
  const [desktopPage, setDesktopPage] = useState(0);
  const totalCards = awardVideoCards.length;
  const desktopPages = Math.ceil(totalCards / 3);

  const scrollToMobile = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: idx * el.clientWidth, behavior: "smooth" });
    setMobilePage(idx);
  };
  const scrollToDesktop = (page: number) => {
    const el = desktopRef.current;
    if (!el) return;
    el.scrollTo({ left: page * el.clientWidth, behavior: "smooth" });
    setDesktopPage(page);
  };
  const handleMobileScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setMobilePage(Math.round(el.scrollLeft / el.clientWidth));
  }, []);
  const handleDesktopScroll = useCallback(() => {
    const el = desktopRef.current;
    if (!el) return;
    setDesktopPage(Math.round(el.scrollLeft / el.clientWidth));
  }, []);
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", handleMobileScroll, { passive: true });
    return () => el?.removeEventListener("scroll", handleMobileScroll);
  }, [handleMobileScroll]);
  useEffect(() => {
    const el = desktopRef.current;
    if (el) el.addEventListener("scroll", handleDesktopScroll, { passive: true });
    return () => el?.removeEventListener("scroll", handleDesktopScroll);
  }, [handleDesktopScroll]);

  const renderCard = (award: typeof awardVideoCards[0]) => {
    const isExternal = award.route.startsWith("http");
    const Wrapper = isExternal ? "a" : Link;
    const wrapperProps = isExternal
      ? { href: award.route, target: "_blank", rel: "noopener noreferrer" }
      : { href: award.route };
    return (
      <Wrapper
        {...wrapperProps}
        className="group relative flex flex-col p-6 md:p-8 transition-all duration-500 ease-out hover:translate-y-[-6px] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] hover:z-10 overflow-hidden rounded-lg"
        style={{ aspectRatio: "1/1", backgroundColor: "#3B2B26" }}
      >
        {/* Video background */}
        <video
          src={award.videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55 group-hover:bg-black/40 transition-all duration-700" />
        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          <span
            className={`block leading-none mb-4 transition-all duration-500 group-hover:scale-110 group-hover:translate-x-1 h-[48px] md:h-[56px] lg:h-[64px] flex items-end ${award.stat.length > 6 ? 'text-[32px] md:text-[40px] lg:text-[48px] whitespace-nowrap' : 'text-[48px] md:text-[56px] lg:text-[64px]'}`}
            style={{ fontFamily: "var(--font-display)", fontWeight: 300, color: "#E1D1BA" }}
          >
            {award.stat}
          </span>
          <div className="w-8 h-px mb-5 group-hover:w-16 group-hover:h-[2px] transition-all duration-500 ease-out" style={{ backgroundColor: "#E1D1BA" }} />
          <h3
            className="text-[16px] md:text-[17px] leading-[1.35] mb-2 transition-all duration-500 min-h-[46px] flex items-start group-hover:text-[#E1D1BA] group-hover:scale-[1.02] origin-left"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: "#FFFFFF" }}
          >
            {award.accolade}
          </h3>
          <p
            className="text-[14px] md:text-[15px] tracking-[0.04em] transition-all duration-500 mt-auto group-hover:text-white group-hover:tracking-[0.06em]"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "rgba(255,255,255,0.5)" }}
          >
            {award.property}
          </p>
          <div className="mt-5 overflow-hidden h-0 group-hover:h-6 transition-all duration-500 ease-out">
            <svg className="w-4 h-4 translate-x-[-8px] group-hover:translate-x-0 opacity-0 group-hover:opacity-60 transition-all duration-500" fill="none" viewBox="0 0 24 24" stroke="#E1D1BA" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </div>
      </Wrapper>
    );
  };

  return (
    <section className="py-20 md:py-28 px-6 md:px-10 bg-[#f7f5f0]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-[10px] tracking-[0.25em] mb-4" style={{ ...body, fontWeight: 500, color: "#3B2B26", opacity: 0.4 }}>Recognition</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-2xl md:text-4xl lg:text-[38px] leading-[1.15] tracking-wide mb-14 md:mb-20" style={{ ...heading, color: "#3B2B26" }}>
            Recognized by the Most Trusted Voices in Travel
          </h2>
        </FadeIn>

        {/* Desktop: 3-column grid with pagination */}
        <div className="hidden md:block relative">
          <button
            onClick={() => scrollToDesktop(desktopPage - 1)}
            disabled={desktopPage === 0}
            className="absolute -left-16 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 disabled:opacity-0 disabled:pointer-events-none hover:opacity-80"
            style={{ backgroundColor: "#3B2B26" }}
            aria-label="Previous"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#F7F5F0" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={() => scrollToDesktop(desktopPage + 1)}
            disabled={desktopPage >= desktopPages - 1}
            className="absolute -right-16 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 disabled:opacity-0 disabled:pointer-events-none hover:opacity-80"
            style={{ backgroundColor: "#3B2B26" }}
            aria-label="Next"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#F7F5F0" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          <div
            ref={desktopRef}
            className="flex overflow-x-auto scrollbar-hide"
            style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
          >
            {Array.from({ length: desktopPages }).map((_, pageIdx) => (
              <div
                key={pageIdx}
                className="flex-shrink-0 w-full grid grid-cols-3 gap-5"
                style={{ scrollSnapAlign: "start" }}
              >
                {awardVideoCards.slice(pageIdx * 3, pageIdx * 3 + 3).map((award) => (
                  <div key={award.property + award.stat}>
                    {renderCard(award)}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: 1 card at a time, swipeable */}
        <div className="md:hidden relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide"
            style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
          >
            {awardVideoCards.map((award) => (
              <div key={award.property + award.stat} className="flex-shrink-0 w-full px-1" style={{ scrollSnapAlign: "start" }}>
                {renderCard(award)}
              </div>
            ))}
          </div>
          {/* Progress bar */}
          <div className="mt-6 mx-auto w-32 h-[3px] rounded-full overflow-hidden" style={{ backgroundColor: "rgba(59,43,38,0.15)" }}>
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{
                backgroundColor: "#3B2B26",
                width: `${100 / totalCards}%`,
                marginLeft: `${(mobilePage / totalCards) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
