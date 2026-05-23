/**
 * PRESS , Nayara Resorts in the Media
 * Two-axis filtering: Property + Topic
 */

import { useState, useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import ContentCrossLinks from "@/components/ContentCrossLinks";
import NativeVideo from "@/components/NativeVideo";
import { useIsMobile } from "@/hooks/useMobile";

const CDN = {
  heroDesktop: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/press-awards-hero-v2_40f8ea17.mp4",
  heroMobile: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/press-awards-vertical_5cbd6900.mp4",
};

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
  { title: "Nayara Resorts Named Top 15 Hotel Brand in the World", publication: "Travel + Leisure", date: "December 2025", url: "https://www.travelandleisure.com/worlds-best-awards-2025-hotel-brands-11751883", property: "Multiple Properties", topic: "Awards", highlight: true },
  { title: "13 Standout Luxury Resorts in Costa Rica", publication: "AFAR", date: "April 2026", url: "https://www.afar.com/magazine/best-resorts-costa-rica", property: "Multiple Properties", topic: "Experiences" },
  { title: "9 Hotels Where Natural Hot Springs Are the Main Amenity", publication: "Condé Nast Traveller", date: "April 2026", url: "https://www.cntraveller.com/gallery/hotels-with-hot-springs", property: "Nayara Springs", topic: "Wellness" },
  { title: "The Happiest Country in Latin America", publication: "Travel + Leisure", date: "March 2026", url: "https://www.travelandleisure.com/happiest-country-in-latin-america-costa-rica-11928317", property: "Multiple Properties", topic: "Experiences" },
  { title: "Nayara Springs Review", publication: "The Telegraph", date: "March 2026", url: "https://www.telegraph.co.uk/travel/destinations/central-america/costa-rica/hotels/nayara-springs-hotel/", property: "Nayara Springs", topic: "Experiences" },
  { title: "Nayara Tented Camp, Costa Rica", publication: "Condé Nast Traveller", date: "March 2026", url: "https://www.cntraveller.com/hotels/arenal/nayara-tented-camp-costa-rica", property: "Nayara Tented Camp", topic: "Experiences" },
  { title: "The Best Honeymoon Destinations", publication: "Vogue", date: "February 2026", url: "https://www.vogue.com/article/best-honeymoon-destinations", property: "Nayara Tented Camp", topic: "Experiences" },
  { title: "Where To Go For Spring Break 2026", publication: "Southern Living", date: "February 2026", url: "https://www.southernliving.com/best-spring-break-vacation-ideas-11893846", property: "Nayara Tented Camp", topic: "Experiences" },
  { title: "La Fortuna, Costa Rica Travel Guide", publication: "Travel + Leisure", date: "February 2026", url: "https://www.travelandleisure.com/la-fortuna-costa-rica-travel-guide-11887475", property: "Nayara Tented Camp", topic: "Experiences" },
  { title: "14 Rainforest Hotels That Put You Right in the Jungle", publication: "Condé Nast Traveller", date: "February 2026", url: "https://www.cntraveller.com/gallery/rainforest-hotels", property: "Nayara Tented Camp", topic: "Experiences" },
  { title: "14 Hotels Where You Can Swim in Your Own Private Pool", publication: "Condé Nast Traveler", date: "January 2026", url: "https://www.cntraveler.com/gallery/hotels-around-the-world-where-you-can-swim-in-your-own-private-pool", property: "Nayara Tented Camp", topic: "Experiences" },
  { title: "Arenal National Park: Best Time to Visit", publication: "Travel + Leisure", date: "January 2026", url: "https://www.travelandleisure.com/costa-rica-arenal-national-park-best-time-to-visit-11883700", property: "Multiple Properties", topic: "Experiences" },
  { title: "Visit Easter Island's Mysterious Moai", publication: "National Geographic", date: "February 2026", url: "http://nationalgeographic.com/travel/article/visit-the-end-of-the-earth-to-see-easter-islands-mysterious-moai", property: "Nayara Hangaroa", topic: "Experiences" },
  { title: "Sand Dunes and Moonscapes in Chile's Atacama Desert", publication: "The Globe and Mail", date: "April 2026", url: "https://www.theglobeandmail.com/life/travel/article-sand-dunes-mountains-and-moonscapes-converge-in-chiles-atacama-desert/", property: "Nayara Alto Atacama", topic: "Experiences" },
  { title: "Where to Go in 2026", publication: "Town & Country", date: "January 2026", url: "https://www.townandcountrymag.com/leisure/travel-guide/a69424707/where-to-go-in-2026/", property: "Nayara Bocas del Toro", topic: "Experiences" },
  { title: "Panama: Rain Forests, Beaches, and Wildlife", publication: "Travel + Leisure", date: "February 2026", url: "https://www.travelandleisure.com/panama-where-to-stay-where-to-eat-11887445", property: "Nayara Bocas del Toro", topic: "Experiences" },
  { title: "9 Best Vacation Spots for Traveling Couples", publication: "Condé Nast Traveler", date: "February 2026", url: "https://www.cntraveler.com/story/best-vacation-spots-for-traveling-couples", property: "Nayara Gardens", topic: "Experiences" },
  { title: "Nayara Gardens", publication: "Forbes Travel Guide", date: "2026", url: "https://www.forbestravelguide.com/hotels/costa-rica-costa-rica/nayara-gardens", property: "Nayara Gardens", topic: "Awards" },
  { title: "Nayara Springs", publication: "Forbes Travel Guide", date: "2026", url: "https://www.forbestravelguide.com/hotels/costa-rica-costa-rica/nayara-springs", property: "Nayara Springs", topic: "Awards" },
  { title: "Costa Rica Birdwatching in Style", publication: "The Times (Luxx)", date: "March 2026", url: "https://www.thetimes.com/magazines/luxx/article/costa-rica-birdwatching-in-style-times-luxury-q97x9jrkk", property: "Nayara Tented Camp", topic: "Experiences" },
  { title: "New Hotels: Michelin Guide Additions", publication: "MICHELIN Guide", date: "February 2026", url: "https://guide.michelin.com/ca/en/article/travel/michelin-guide-hotels-new-additions", property: "Nayara Bocas del Toro", topic: "Awards" },
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
  { title: "Postcard From Chile", publication: "Cabana Magazine", date: "March 2026", url: "https://cabanamagazine.com/blogs/travel/postcard-from-chile", property: "Nayara Alto Atacama", topic: "Experiences" },
  { title: "Escape to These Resorts' Private Beaches", publication: "Global Traveler", date: "April 2026", url: "https://www.globaltravelerusa.com/escape-to-these-resorts-private-beaches-for-toes-in-the-sand-pampering/", property: "Nayara Bocas del Toro", topic: "Experiences" },
  { title: "February 2026 Travel News", publication: "JRNY Magazine", date: "February 2026", url: "https://jrnymag.com/february-2026-news/", property: "Nayara Hangaroa", topic: "Experiences" },
  { title: "7 Perfect Destinations for Couples Seeking Adventure", publication: "Rocky Mountain Bride", date: "April 2026", url: "https://www.rockymountainbride.com/blog/seven-perfect-destinations-for-couples-seeking-adventure-and-relaxation-on-their-honeymoon/", property: "Nayara Springs", topic: "Experiences" },
  { title: "15 Best Architecture and Design Firms in Costa Rica", publication: "Architizer", date: "April 2026", url: "https://architizer.com/blog/inspiration/collections/best-architecture-firms-in-costa-rica/", property: "Nayara Tented Camp", topic: "Experiences" },
  { title: "9 Best Vacation Spots for Traveling Couples", publication: "Condé Nast Traveller ME", date: "April 2026", url: "https://www.cntravellerme.com/story/best-holiday-destinations-for-couples", property: "Nayara Gardens", topic: "Experiences" },
  { title: "The Driest, Most Beautiful Place on Earth: Atacama", publication: "Oyster", date: "February 2026", url: "https://www.oyster.com/articles/driest-most-beautiful-place-on-earth/", property: "Nayara Alto Atacama", topic: "Experiences" },
  { title: "Ultimate Guide to Spring Break Destinations 2026", publication: "TravelPulse", date: "March 2026", url: "https://www.travelpulse.ca/news/features/ultimate-guide-to-spring-break-destinations-for-every-type-of-traveler-in-2026", property: "Nayara Bocas del Toro", topic: "Experiences" },
  { title: "This Month's New Hotels", publication: "MICHELIN Guide", date: "February 2026", url: "https://guide.michelin.com/ca/en/article/travel/michelin-guide-hotels-new-additions", property: "Nayara Hangaroa", topic: "Awards" },
  { title: "9 Hotels Where Natural Hot Springs Are the Main Amenity", publication: "Condé Nast Traveler", date: "March 2026", url: "https://www.cntraveler.com/gallery/hotels-around-the-world-where-natural-hot-springs-are-the-main-amenity", property: "Nayara Springs", topic: "Wellness" },
  { title: "Honeymoon Roundup – 6 Luxury & Romantic Destinations", publication: "Southern Bride", date: "February 2026", url: "https://www.southernbride.com/blog/venues/honeymoon-roundup-6-luxury-romantic-honeymoon-destinations/", property: "Nayara Alto Atacama", topic: "Experiences" },
  { title: "10 Best Places to Visit in 2026", publication: "Kiwi Collection", date: "January 2026", url: "https://www.kiwicollection.com/blog/10-best-places-to-travel-in-2026/", property: "Nayara Hangaroa", topic: "Experiences" },
  { title: "Nayara Tented Camp", publication: "Kiwi Collection", date: "March 2026", url: "https://www.kiwicollection.com/hotel-detail/nayara-tented-cam", property: "Nayara Tented Camp", topic: "Experiences" },
  { title: "Eight Wellness Honeymoon Destinations for 2026", publication: "Southern Bride", date: "January 2026", url: "https://www.southernbride.com/blog/health-and-beauty/eight-wellness-honeymoon-destinations-for-2026/", property: "Nayara Bocas del Toro", topic: "Wellness" },
  { title: "The Global Spa Awards", publication: "The Luxury Spa Edit", date: "February 2026", url: "https://www.theluxuryspaedit.com/awards/", property: "Nayara Springs", topic: "Awards" },
  { title: "Luxury in the Rainforest: A Complete Guide to Nayara Gardens", publication: "Miami Living Magazine", date: "February 2026", url: "https://www.miamilivingmagazine.com/post/luxury-resort-hotel-nayara-gardens-rainforest-costa-rica", property: "Nayara Gardens", topic: "Experiences" },
  { title: "Central America Travel Guide: 2026's Best Destinations", publication: "TravelPulse", date: "January 2026", url: "https://www.travelpulse.com/news/destinations/central-america-travel-guide-2026-s-best-destinations-events-attractions-and-more", property: "Nayara Bocas del Toro", topic: "Experiences" },
  { title: "Micro-Retirements and Whycations Redefine 2026", publication: "CND English", date: "February 2026", url: "https://www.cndenglish.com/tourism/micro-retirements-and-whycations-redefine-2026-work-life-balance", property: "Nayara Springs", topic: "Experiences" },
  { title: "7 Romantic Places to Get Engaged This Year", publication: "Fora Travel", date: "February 2026", url: "https://www.foratravel.com/the-journal/romantic-places-to-get-engaged", property: "Nayara Tented Camp", topic: "Experiences" },
  { title: "35 Idyllic Wellness Retreats for Your Next Getaway", publication: "Veranda", date: "February 2026", url: "https://www.veranda.com/travel/g35269429/wellness-retreats/", property: "Nayara Springs", topic: "Wellness" },
  { title: "The Best Hotels in Costa Rica", publication: "The Hotel Guru", date: "January 2026", url: "https://www.thehotelguru.com/best-hotels-in/costa-rica", property: "Nayara Springs", topic: "Experiences" },
  { title: "Intimate and Colourful Rainforest Wedding", publication: "Boho Weddings", date: "January 2026", url: "https://www.boho-weddings.com/265096/intimate-and-colourful-rainforest-wedding/", property: "Nayara Tented Camp", topic: "Experiences" },
];

const PROPERTIES = ["All", "Multiple Properties", "Nayara Alto Atacama", "Nayara Bocas del Toro", "Nayara Gardens", "Nayara Hangaroa", "Nayara Springs", "Nayara Tented Camp"];
const TOPICS = ["All", "Awards", "Experiences", "Sustainability", "Wellness", "The Table"];

function getYear(date: string): string {
  const match = date.match(/\d{4}/);
  return match ? match[0] : "Other";
}

export default function Press() {
  const isMobile = useIsMobile();
  const [activeProperty, setActiveProperty] = useState("All");
  const [activeTopic, setActiveTopic] = useState("All");

  const filtered = useMemo(() => {
    return pressClips.filter((c) => {
      const propMatch = activeProperty === "All" || c.property === activeProperty;
      const topicMatch = activeTopic === "All" || c.topic === activeTopic;
      return propMatch && topicMatch;
    });
  }, [activeProperty, activeTopic]);

  const grouped = useMemo(() => {
    return filtered.reduce<Record<string, PressClip[]>>((acc, clip) => {
      const year = getYear(clip.date);
      if (!acc[year]) acc[year] = [];
      acc[year].push(clip);
      return acc;
    }, {});
  }, [filtered]);

  const sortedYears = Object.keys(grouped).sort((a, b) => {
    if (a === "Other") return 1;
    if (b === "Other") return -1;
    return parseInt(b) - parseInt(a);
  });

  return (
    <div className="min-h-screen bg-white">
      <BrandNavigation pageType="content" />

      {/* Hero Video */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0">
          <NativeVideo src={isMobile ? CDN.heroMobile : CDN.heroDesktop} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-xl md:text-3xl lg:text-4xl tracking-wide text-center"
            style={heading}
          >
            Press &amp; Recognition
          </motion.h1>
        </div>
      </section>

      {/* Stats Bar */}
      <FadeIn>
        <div className="max-w-5xl mx-auto px-6 mb-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "7", label: "MICHELIN Keys" },
              { number: "#1", label: "Conde Nast Traveler" },
              { number: "Top 15", label: "Hotel Brand Worldwide" },
              { number: "4/5", label: "T+L Best Resort Years" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-[#3B2B26] text-2xl md:text-3xl mb-1" style={heading}>{stat.number}</div>
                <div className="text-[#3B2B26]/30 text-[10px] tracking-[0.15em]" style={{ ...body, fontWeight: 500 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Two-Axis Filters */}
      <div className="max-w-5xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap items-center gap-2 mb-3 justify-center">
          <span className="text-[#3B2B26]/25 text-[10px] tracking-[0.2em] mr-1" style={{ ...body, fontWeight: 600 }}>Property</span>
          {PROPERTIES.map((p) => (
            <button key={p} onClick={() => setActiveProperty(p)} className={`px-3 py-1.5 text-[11px] tracking-[0.08em] rounded-full border transition-all duration-300 ${activeProperty === p ? "bg-[#3B2B26] text-white border-[#3B2B26]" : "bg-transparent text-[#5a4a3a]/40 border-[#3B2B26]/10 hover:border-[#3B2B26]/25 hover:text-[#3B2B26]"}`} style={{ ...body, fontWeight: 500 }}>{p}</button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2 justify-center">
          <span className="text-[#3B2B26]/25 text-[10px] tracking-[0.2em] mr-1" style={{ ...body, fontWeight: 600 }}>Topic</span>
          {TOPICS.map((t) => (
            <button key={t} onClick={() => setActiveTopic(t)} className={`px-3 py-1.5 text-[11px] tracking-[0.08em] rounded-full border transition-all duration-300 ${activeTopic === t ? "bg-[#3B2B26] text-white border-[#3B2B26]" : "bg-transparent text-[#5a4a3a]/40 border-[#3B2B26]/10 hover:border-[#3B2B26]/25 hover:text-[#3B2B26]"}`} style={{ ...body, fontWeight: 500 }}>{t}</button>
          ))}
        </div>
      </div>

      {/* Press Clips by Year */}
      <div className="max-w-4xl mx-auto px-6 pb-24">
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
                {grouped[year].length} {grouped[year].length === 1 ? "article" : "articles"}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              {grouped[year].map((clip, i) => (
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
                      {clip.topic && (
                        <>
                          <span className="text-[#3B2B26]/15 text-[10px]">|</span>
                          <span className="text-[#3B2B26]/20 text-[9px] tracking-[0.1em] px-2 py-0.5 rounded-full border border-[#3B2B26]/8" style={{ ...body, fontWeight: 500 }}>{clip.topic}</span>
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

      <ContentCrossLinks currentPage="press" />
      <Footer textColor="#FFFFFF" />
    </div>
  );
}
