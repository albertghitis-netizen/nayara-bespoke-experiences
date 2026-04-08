/**
 * NAYARA RESORTS — Brand Homepage
 * Design: "Desert Codex" — Editorial Cartography
 * Equal treatment of all 6 properties, pillar previews, brand narrative
 * Typography: Playfair Display (display) + DM Sans (body)
 */

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import NativeVideo from "@/components/NativeVideo";
import { useIsMobile } from "@/hooks/useMobile";
import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";
import { OrganizationSchema } from "@/components/SEOSchema";
import { BOOKING_URLS } from "@/data/booking";

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;
const sectionPadding = "py-16 md:py-24 px-6 md:px-10";
const maxW = "max-w-[1200px] mx-auto";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

/* ─── Property data for the grid ─── */
type FilterTag = "Family-Friendly" | "Adults-Only";

const propertyGrid: {
  name: string;
  location: string;
  route: string;
  bookingId: string;
  image: string;
  tagline: string;
  filter: FilterTag;
}[] = [
  {
    name: "Nayara Alto Atacama",
    location: "Atacama Desert, Chile",
    route: "/alto-atacama",
    bookingId: "alto-atacama",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/prop-atacama_704b4f26.jpg",
    tagline: "Desert Lodge Villas",
    filter: "Family-Friendly",
  },
  {
    name: "Nayara Bocas del Toro",
    location: "Bocas del Toro, Panama",
    route: "/bocas-del-toro",
    bookingId: "bocas-del-toro",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/prop-bocas_6adf9525.jpg",
    tagline: "Overwater Villas & Rainforest Treehouses",
    filter: "Adults-Only",
  },
  {
    name: "Nayara Gardens",
    location: "Arenal Volcano, Costa Rica",
    route: "/gardens",
    bookingId: "gardens",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/prop-gardens_5931d8af.jpg",
    tagline: "Private Rainforest Villas & Casitas",
    filter: "Family-Friendly",
  },
  {
    name: "Nayara Hangaroa",
    location: "Easter Island, Chile",
    route: "/hangaroa",
    bookingId: "hangaroa",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/prop-hangaroa_a0a3fad0.jpg",
    tagline: "Oceanfront Villas",
    filter: "Family-Friendly",
  },
  {
    name: "Nayara Springs",
    location: "Arenal Volcano, Costa Rica",
    route: "/springs",
    bookingId: "springs",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/prop-springs_16fe1ae6.jpg",
    tagline: "Private Hot Springs Villas",
    filter: "Adults-Only",
  },
  {
    name: "Nayara Tented Camp",
    location: "Arenal Volcano, Costa Rica",
    route: "/tented-camp",
    bookingId: "tented-camp",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/prop-tented_0fd865a2.jpg",
    tagline: "Clifftop Tents & Suites",
    filter: "Family-Friendly",
  },
];

/* ─── Pillar previews ─── */
const pillars = [
  { name: "Experiences", route: "/experiences", desc: "From stargazing in the Atacama to snorkeling Caribbean reefs, every destination offers adventures shaped by the land itself." },
  { name: "Sustainability", route: "/sustainability", desc: "Regenerative tourism that leaves every ecosystem stronger. Carbon-neutral operations, wildlife corridors, and community partnerships." },
  { name: "Wellness", route: "/wellness", desc: "Volcanic hot springs, Atacameño healing rituals, Rapa Nui bodywork, and Caribbean ocean therapies across six distinct landscapes." },
  { name: "The Table", route: "/gastronomy", desc: "Five restaurants, two Michelin Keys, farm-to-table menus, and culinary traditions from the Andes to the Pacific." },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <OrganizationSchema />
      <BrandNavigation pageType="brand" centerLinkHome />
      <HeroSection />
      <BrandStorySection />
      <PropertiesSection />
      <PillarsSection />
      <WorldOfNayaraSection />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO — Full-screen video with brand tagline
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const heroVideo = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/homepage-hero-new-resorts_d66da8e1.mp4";
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <NativeVideo src={heroVideo} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6 md:px-10">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }} className="text-white text-2xl md:text-4xl lg:text-5xl leading-[0.95] tracking-wide text-center" style={heading}>
          Luxury Resorts Rooted in Nature
        </motion.h1>

      </div>
    </section>
  );
}


/* ═══════════════════════════════════════════════════════════════
   BRAND STORY — Two-column intro with link to /story
   ═══════════════════════════════════════════════════════════════ */
function BrandStorySection() {
  return (
    <section id="story" className="py-10 md:py-16 px-6 md:px-10">
      <div className={maxW}>
        {/* Story text left + s1 vertical right */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start mb-16">
          <FadeIn className="md:flex-1">
            <SectionLabel>The Nayara Story</SectionLabel>
            <h2 className="text-[#4B4A4A] mb-6" style={{ ...heading, fontSize: "clamp(20px, 2.8vw, 32px)", lineHeight: 1.15 }}>
              Award-Winning Properties Defined by Destination
            </h2>
            <p className="text-[#4B4A4A]/70 text-[15px] leading-relaxed mb-4" style={body}>
              Our resorts belong to the land. In Costa Rica, lush rainforest and mineral hot springs greet you at the foot of Arenal Volcano. In Chile's Atacama, the world's driest desert becomes a place of stillness and discovery. On Easter Island, silent giants stand guard and Rapa Nui culture is ever-present. On a private island on Panama's Caribbean coast, overwater villas rise above the reef.
            </p>
            <p className="text-[#4B4A4A]/70 text-[15px] leading-relaxed mb-6" style={body}>
              Six properties. Three countries. All designed to bring guests back to nature and leave every ecosystem stronger than we found it.
            </p>
            <Link href="/story" className="text-[#3a2a1a]/70 text-[14px] underline underline-offset-4 decoration-[#3a2a1a]/20 hover:decoration-[#3a2a1a]/60 hover:text-[#3a2a1a] transition-all" style={{ ...body, fontWeight: 500 }}>
              Read Our Story
            </Link>
          </FadeIn>
          <FadeIn delay={0.2} className="md:flex-1">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Untitleddesign_9702d152.JPEG"
              alt="Woman at Easter Island moai"
              className="w-full object-cover rounded-lg"
              style={{ aspectRatio: "3/4" }}
              loading="eager"
            />
          </FadeIn>
        </div>

        {/* s2 landscape below — symmetrical spacing */}
        <FadeIn delay={0.3}>
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/19B9D444-0A7C-4C29-93A3-A8C0DFDFBD31_aa5cae9d.JPEG"
            alt="Volcano view with tented camp at Nayara"
            className="w-full object-cover rounded-lg"
            loading="lazy"
            style={{ aspectRatio: "16/9" }}
          />
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PROPERTIES — 6-card grid with Family-Friendly / Adults-Only tabs
   ═══════════════════════════════════════════════════════════════ */
const filterTabs: ("All" | FilterTag)[] = ["All", "Family-Friendly", "Adults-Only"];

function PropertiesSection() {
  const [activeFilter, setActiveFilter] = useState<"All" | FilterTag>("All");
  const filtered = activeFilter === "All" ? propertyGrid : propertyGrid.filter((p) => p.filter === activeFilter);

  return (
    <section className={`${sectionPadding} bg-white/30`}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Our Properties</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-4" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>
            Six Destinations, One Philosophy
          </h2>
          <p className="text-[#4B4A4A]/70 text-[15px] leading-relaxed mb-10 md:mb-12 max-w-2xl" style={body}>
            Discover our collection of luxury resorts across Latin America, each offering unique experiences rooted in nature and culture.
          </p>
        </FadeIn>

        {/* Tab filters */}
        <FadeIn>
          <div className="flex gap-2 mb-10 md:mb-12">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-5 py-2 text-[11px] tracking-[0.12em] uppercase transition-all duration-300 border ${
                  activeFilter === tab
                    ? "bg-[#AD8F61] border-[#AD8F61] text-white"
                    : "bg-transparent border-[#3a2a1a]/20 text-[#3a2a1a]/60 hover:border-[#AD8F61] hover:text-[#AD8F61]"
                }`}
                style={{ ...body, fontWeight: 500 }}
              >
                {tab}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Property grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {filtered.map((prop, i) => (
              <FadeIn key={prop.route} delay={i * 0.06}>
                <div className="group">
                  {/* Clickable image → property page */}
                  <Link href={prop.route} className="block">
                    <div className="overflow-hidden rounded-lg mb-4">
                      <img
                        src={prop.image}
                        alt={prop.name}
                        className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                        style={{ aspectRatio: "3/2" }}
                        loading="lazy"
                      />
                    </div>
                  </Link>

                  {/* Text */}
                  <h3 className="text-[#3a2a1a] text-[18px] mb-1" style={{ ...heading, fontWeight: 500 }}>
                    {prop.name}
                  </h3>
                  <p className="text-[#3a2a1a]/40 text-[11px] tracking-[0.1em] uppercase mb-1" style={{ ...body, fontWeight: 500 }}>
                    {prop.location}
                  </p>
                  <p className="text-[#4B4A4A]/60 text-[13px] leading-relaxed mb-4" style={body}>
                    {prop.tagline}
                  </p>

                  {/* Reserve + Explore buttons */}
                  <div className="flex gap-3">
                    <a
                      href={BOOKING_URLS[prop.bookingId]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 text-[11px] tracking-[0.12em] uppercase border border-[#AD8F61] text-[#AD8F61] hover:bg-[#AD8F61] hover:text-white transition-all duration-300"
                      style={{ ...body, fontWeight: 500 }}
                    >
                      Reserve
                    </a>
                    <Link
                      href={prop.route}
                      className="px-5 py-2 text-[11px] tracking-[0.12em] uppercase border border-[#3a2a1a]/20 text-[#3a2a1a]/60 hover:border-[#3a2a1a] hover:text-[#3a2a1a] transition-all duration-300"
                      style={{ ...body, fontWeight: 500 }}
                    >
                      Explore
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PILLARS — Four brand pillars with links
   ═══════════════════════════════════════════════════════════════ */
function PillarsSection() {
  return (
    <section className={sectionPadding}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>The Nayara Experience</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-10 md:mb-14" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>
            Four Pillars That Define Every Stay
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {pillars.map((pillar, i) => (
            <FadeIn key={pillar.route} delay={i * 0.1}>
              <Link href={pillar.route} className="group block bg-white/40 backdrop-blur-sm rounded-xl p-8 hover:bg-white/60 transition-colors">
                <h3 className="text-[#3a2a1a] text-[20px] mb-3 group-hover:text-[#3a2a1a]/80 transition-colors" style={{ ...heading, fontWeight: 500 }}>
                  {pillar.name}
                </h3>
                <p className="text-[#4B4A4A]/70 text-[14px] leading-relaxed mb-4" style={body}>
                  {pillar.desc}
                </p>
                <span className="text-[#3a2a1a]/40 text-[12px] tracking-[0.08em] uppercase group-hover:text-[#3a2a1a]/60 transition-colors" style={{ ...body, fontWeight: 500 }}>
                  Explore {pillar.name} &rarr;
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   WORLD OF NAYARA — Stacked Editorial Blocks
   Row 1: Journal (60%) + Awards (40%)
   Row 2: Nayara by Night (60%) + Press (40%)
   ═══════════════════════════════════════════════════════════════ */
function WorldOfNayaraSection() {
  const featuredArticle = {
    title: "7 MICHELIN Keys. 3 Countries. 1 Standard of Excellence",
    excerpt: "Nayara Resorts earns seven MICHELIN Keys across three countries \u2014 a testament to exceptional character, service, and sense of place.",
    image: "https://blog.nayararesorts.com/hubfs/E056D1CD-5240-40E5-8567-21240563F763%203.jpg",
    url: "https://blog.nayararesorts.com/7-michelin-keys-3-countries-1-commitment",
  };

  const keyAwards = [
    { stat: "7", label: "Michelin Keys", detail: "Across 3 properties" },
    { stat: "#1", label: "In the World", detail: "Cond\u00e9 Nast 2020" },
    { stat: "#13", label: "Resort Brand", detail: "Travel + Leisure 2025" },
    { stat: "20+", label: "Years", detail: "Of excellence" },
  ];

  const pressHighlights = [
    { publication: "Travel + Leisure", title: "Nayara Resorts Named Top 15 Hotel Brand in the World", url: "https://www.travelandleisure.com/" },
    { publication: "Cond\u00e9 Nast Traveler", title: "Nayara Bocas del Toro Named #1 Resort in Central America", url: "https://nayararesorts.com/nayara-bocas-del-toro-named-1-resort-by-conde-nast-traveler/" },
    { publication: "MICHELIN Guide", title: "Nayara Springs \u2014 Three MICHELIN Keys", url: "https://guide.michelin.com/en/hotels-stays/la-fortuna-de-san-carlos/nayara-springs-121925-11881" },
    { publication: "The Telegraph", title: "Nayara Alto Atacama Hotel Review", url: "https://www.telegraph.co.uk/travel/destinations/south-america/chile/atacama/san-pedro-de-atacama/hotels/nayara-alto-atacama-hotel/" },
  ];

  return (
    <section className={`${sectionPadding} bg-[#f0ece3]`}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Beyond the Stay</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-10 md:mb-14" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>
            The World of Nayara
          </h2>
        </FadeIn>

        {/* Row 1: Journal (60%) + Awards (40%) */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Journal — large visual card */}
          <FadeIn className="md:w-[60%]">
            <Link href="/journal" className="group block relative overflow-hidden rounded-xl aspect-[4/3]">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase block mb-2" style={{ ...body, fontWeight: 600 }}>Nayara Journal</span>
                <h3 className="text-white text-[18px] md:text-[22px] leading-snug mb-2 group-hover:text-white/90 transition-colors" style={{ ...heading, fontWeight: 400 }}>
                  {featuredArticle.title}
                </h3>
                <p className="text-white/60 text-[13px] leading-relaxed hidden md:block max-w-md" style={body}>
                  {featuredArticle.excerpt}
                </p>
                <span className="text-white/40 text-[11px] tracking-[0.08em] uppercase mt-3 inline-block group-hover:text-white/70 transition-colors" style={{ ...body, fontWeight: 500 }}>Read More &rarr;</span>
              </div>
            </Link>
          </FadeIn>

          {/* Awards — compact credibility block */}
          <FadeIn delay={0.15} className="md:w-[40%]">
            <div className="bg-[#3a2a1a] rounded-xl p-6 md:p-8 h-full flex flex-col justify-between">
              <div>
                <span className="text-[#c9b99a]/50 text-[10px] tracking-[0.2em] uppercase block mb-4" style={{ ...body, fontWeight: 600 }}>Awards & Recognition</span>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {keyAwards.map((award, i) => (
                    <div key={i} className="text-center">
                      <p className="text-[#c9b99a] text-[28px] md:text-[32px] leading-none" style={heading}>{award.stat}</p>
                      <p className="text-white/70 text-[12px] tracking-[0.04em] mt-1" style={{ ...body, fontWeight: 500 }}>{award.label}</p>
                      <p className="text-white/30 text-[10px] tracking-[0.04em] mt-0.5" style={body}>{award.detail}</p>
                    </div>
                  ))}
                </div>
                <div className="w-full h-px bg-white/10 mb-4" />
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {["3 Keys \u2014 Springs", "2 Keys \u2014 Gardens", "2 Keys \u2014 Tented Camp"].map((key, i) => (
                    <span key={i} className="text-white/40 text-[10px] tracking-[0.08em] uppercase" style={{ ...body, fontWeight: 500 }}>{key}</span>
                  ))}
                </div>
              </div>
              <Link href="/awards" className="text-[#c9b99a]/50 text-[11px] tracking-[0.08em] uppercase hover:text-[#c9b99a] transition-colors mt-6 inline-block" style={{ ...body, fontWeight: 500 }}>
                All Awards &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Row 2: Nayara by Night (60%) + Press (40%) */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Nayara by Night — atmospheric visual card */}
          <FadeIn delay={0.1} className="md:w-[60%]">
            <Link href="/nayara-by-night" className="group block relative overflow-hidden rounded-xl aspect-[4/3]">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-rock-arch-milkyway_729bcc81.webp"
                alt="Milky Way over Atacama rock arch"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase block mb-2" style={{ ...body, fontWeight: 600 }}>After Dark</span>
                <h3 className="text-white text-[18px] md:text-[22px] leading-snug mb-2 group-hover:text-white/90 transition-colors" style={{ ...heading, fontWeight: 400 }}>
                  Nayara by Night
                </h3>
                <p className="text-white/60 text-[13px] leading-relaxed hidden md:block max-w-md" style={body}>
                  Where darkness reveals the universe. Stargazing in the Atacama, bioluminescence in Bocas, and the Milky Way over Rapa Nui\u2019s moai.
                </p>
                <span className="text-white/40 text-[11px] tracking-[0.08em] uppercase mt-3 inline-block group-hover:text-white/70 transition-colors" style={{ ...body, fontWeight: 500 }}>Explore &rarr;</span>
              </div>
            </Link>
          </FadeIn>

          {/* Press — compact editorial list */}
          <FadeIn delay={0.25} className="md:w-[40%]">
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 md:p-8 h-full flex flex-col justify-between">
              <div>
                <span className="text-[#3a2a1a]/35 text-[10px] tracking-[0.2em] uppercase block mb-5" style={{ ...body, fontWeight: 600 }}>In the Press</span>
                <div className="flex flex-col gap-4">
                  {pressHighlights.map((clip, i) => (
                    <a key={i} href={clip.url} target="_blank" rel="noopener noreferrer" className="group/clip block pb-4 border-b border-[#3a2a1a]/8 last:border-0 last:pb-0">
                      <p className="text-[#3a2a1a]/40 text-[10px] tracking-[0.1em] uppercase mb-1" style={{ ...body, fontWeight: 600 }}>{clip.publication}</p>
                      <p className="text-[#3a2a1a] text-[14px] leading-snug group-hover/clip:text-[#8b6f47] transition-colors" style={{ ...heading, fontWeight: 500 }}>{clip.title}</p>
                    </a>
                  ))}
                </div>
              </div>
              <Link href="/awards" className="text-[#3a2a1a]/40 text-[11px] tracking-[0.08em] uppercase hover:text-[#3a2a1a]/70 transition-colors mt-6 inline-block" style={{ ...body, fontWeight: 500 }}>
                All Press &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-[#3a2a1a]/35 text-[10px] tracking-[0.3em] uppercase mb-4 ${className}`} style={{ ...body, fontWeight: 600 }}>{children}</p>;
}
