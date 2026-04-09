/**
 * NAYARA RESORTS — Brand Homepage
 * Design: "Desert Codex" — Editorial Cartography
 * Equal treatment of all 6 properties, pillar previews, brand narrative
 * Typography: Playfair Display (display) + DM Sans (body)
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO — Full-screen video with brand tagline
   ═══════════════════════════════════════════════════════════════ */
const LEAF_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara-leaf-beige_abbaf178.png";

function HeroSection() {
  const heroVideo = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/homepage-hero-new-resorts_d66da8e1.mp4";
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <NativeVideo src={heroVideo} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Stacked logo lockup — leaf + NAYARA — top center */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-2 left-0 right-0 z-20 flex flex-col items-center gap-2"
      >
        <img src={LEAF_URL} alt="" className="w-12 md:w-16 h-auto opacity-90" />
        <span
          className="text-[#F5F1EB] tracking-[0.4em] uppercase"
          style={{
            fontFamily: "'Cormorant Garamond', 'Georgia', serif",
            fontWeight: 300,
            fontSize: "clamp(11px, 1.2vw, 14px)",
            lineHeight: 1,
          }}
        >
          Nayara
        </span>
      </motion.div>

      {/* Tagline — bottom center */}
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
            <Link href="/story" className="inline-flex items-center justify-center h-10 px-6 rounded-full bg-[#3a2a1a]/70 text-white text-[11px] tracking-[0.15em] uppercase hover:bg-[#3a2a1a]/90 transition-all duration-300" style={{ ...body, fontWeight: 500 }}>
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
   PROPERTIES — 6-card grid, always visible, with badge tags
   ═══════════════════════════════════════════════════════════════ */
function PropertiesSection() {
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

        {/* Property grid — always all 6 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {propertyGrid.map((prop, i) => (
            <FadeIn key={prop.route} delay={i * 0.06}>
              <div className="group">
                {/* Clickable image → property page */}
                <Link href={prop.route} className="block">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={prop.image}
                      alt={prop.name}
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                      style={{ aspectRatio: "3/2" }}
                      loading="lazy"
                    />
                    {/* Adults-Only badge — only shown for adults-only properties */}
                    {prop.filter === "Adults-Only" && (
                      <span className="absolute top-2 right-2 px-2 py-0.5 text-[8px] tracking-[0.1em] uppercase bg-[#f7f5f0]/90 backdrop-blur-sm text-[#3a2a1a]/70 rounded-full" style={{ ...body, fontWeight: 500 }}>
                        Adults-Only
                      </span>
                    )}
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
                      className="inline-flex items-center justify-center h-9 px-5 rounded-full bg-[#AD8F61] text-white text-[10px] tracking-[0.12em] uppercase hover:bg-[#AD8F61]/80 transition-all duration-300"
                      style={{ ...body, fontWeight: 500 }}
                    >
                      Reserve
                    </a>
                    <Link
                      href={prop.route}
                      className="inline-flex items-center justify-center h-9 px-5 rounded-full border border-[#3a2a1a]/20 text-[#3a2a1a]/60 text-[10px] tracking-[0.12em] uppercase hover:border-[#3a2a1a] hover:text-[#3a2a1a] transition-all duration-300"
                      style={{ ...body, fontWeight: 500 }}
                    >
                      Explore
                    </Link>
                  </div>
              </div>
            </FadeIn>
          ))}
        </div>
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


function SectionLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-[#3a2a1a]/35 text-[10px] tracking-[0.3em] uppercase mb-4 ${className}`} style={{ ...body, fontWeight: 600 }}>{children}</p>;
}
