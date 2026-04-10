/**
 * NAYARA RESORTS - Brand Homepage
 * Visual Identity: Cormorant Garamond + DM Sans, warm neutral palette, cinematic motion
 */
import { Link } from "wouter";
import NativeVideo from "@/components/NativeVideo";
import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";
import { OrganizationSchema } from "@/components/SEOSchema";
import { BOOKING_URLS } from "@/data/booking";
import {
  AnimateOnScroll,
  StaggerOnScroll,
  TextReveal,
  MultiLineReveal,
  MediaReveal,
  Parallax,
  DrawLine,
  GradientTransition,
  fadeUp,
  staggerContainer,
  DURATION,
  EASE_CINEMATIC,
} from "@/components/motion";
import { motion } from "framer-motion";

/* ─── Shared styles ─── */
const PALETTE = {
  bg: "#f7f5f0",
  text: "#3a2a1a",
  textSecondary: "#5a4a3a",
  textTertiary: "#8a7a6a",
  accent: "#AD8F61",
  divider: "#e0dbd4",
  cardBg: "rgba(255,255,255,0.4)",
};

const sectionPadding = "py-20 md:py-32 px-6 md:px-10";
const maxW = "max-w-[1200px] mx-auto";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[10px] tracking-[0.3em] uppercase mb-4"
      style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: `${PALETTE.text}35` }}
    >
      {children}
    </p>
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
  { name: "Bespoke Experiences", route: "/experiences", desc: "From stargazing in the Atacama to snorkeling Caribbean reefs, every destination offers adventures shaped by the land itself." },
  { name: "Beyond Sustainability", route: "/sustainability", desc: "Regenerative tourism that leaves every ecosystem stronger. Carbon-neutral operations, wildlife corridors, and community partnerships." },
  { name: "Nature-Based Wellness", route: "/wellness", desc: "Volcanic hot springs, Atacameño healing rituals, Rapa Nui bodywork, and Caribbean ocean therapies across six distinct landscapes." },
  { name: "A Taste of Place", route: "/gastronomy", desc: "Five restaurants, two Michelin Keys, farm-to-table menus, and culinary traditions from the Andes to the Pacific." },
];


export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.bg }}>
      <OrganizationSchema />
      <BrandNavigation pageType="brand" />
      <HeroSection />
      <GradientTransition from={PALETTE.bg} to="#f4f1eb" height="120px" />
      <BrandStorySection />
      <GradientTransition from="#f4f1eb" to={PALETTE.bg} height="120px" />
      <PropertiesSection />
      <GradientTransition from={PALETTE.bg} to="#f4f1eb" height="120px" />
      <PillarsSection />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO - Full-screen video with brand tagline
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const heroVideo = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/homepage-hero-supersale_b737206c.mp4";
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <NativeVideo src={heroVideo} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/60" />
      </div>



      {/* Tagline */}
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-12 md:pb-20 px-6 md:px-10">
        <MultiLineReveal
          lines={["Luxury Resorts", "Rooted in Nature"]}
          lineClassName="text-white text-3xl md:text-5xl lg:text-6xl leading-[1] tracking-wide text-center"
          as="h1"
          delay={0.4}
          staggerDelay={0.15}
        />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BRAND STORY - Two-column intro
   ═══════════════════════════════════════════════════════════════ */
function BrandStorySection() {
  return (
    <section id="story" className="py-16 md:py-28 px-6 md:px-10" style={{ backgroundColor: "#f4f1eb" }}>
      <div className={maxW}>
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start mb-16">
          <div className="md:flex-1">
            <AnimateOnScroll variants={fadeUp}>
              <SectionLabel>The Nayara Story</SectionLabel>
            </AnimateOnScroll>
            <TextReveal as="h2" className="mb-8" delay={0.1}>
              <span
                className="text-2xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-wide"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
              >
                Award-Winning Properties Defined by Destination
              </span>
            </TextReveal>
            <AnimateOnScroll variants={fadeUp} delay={0.3}>
              <p className="text-[15px] leading-[1.8] mb-5" style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}>
                Our resorts belong to the land. In Costa Rica, lush rainforest and mineral hot springs greet you at the foot of Arenal Volcano. In Chile's Atacama, the world's driest desert becomes a place of stillness and discovery. On Easter Island, silent giants stand guard and Rapa Nui culture is ever-present. On a private island on Panama's Caribbean coast, overwater villas rise above the reef.
              </p>
              <p className="text-[15px] leading-[1.8] mb-8" style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}>
                Six properties. Three countries. All designed to bring guests back to nature and leave every ecosystem stronger than we found it.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll variants={fadeUp} delay={0.5}>
              <Link
                href="/story"
                className="inline-flex items-center justify-center h-11 px-7 rounded-full text-[11px] tracking-[0.15em] uppercase transition-all duration-500"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                  backgroundColor: PALETTE.accent,
                  color: "#fff",
                }}
              >
                Read Our Story
              </Link>
            </AnimateOnScroll>
          </div>
          <div className="md:flex-1">
            <MediaReveal delay={0.2}>
              <div className="overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Untitleddesign_9702d152.JPEG"
                  alt="Woman at Easter Island moai"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </MediaReveal>
          </div>
        </div>

        {/* Landscape image — hidden on mobile */}
        <div className="hidden md:block">
          <MediaReveal delay={0.1}>
            <div className="overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/19B9D444-0A7C-4C29-93A3-A8C0DFDFBD31_aa5cae9d.JPEG"
                alt="Volcano view with tented camp at Nayara"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </MediaReveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PROPERTIES - 6-card grid with Reserve + Explore
   ═══════════════════════════════════════════════════════════════ */
function PropertiesSection() {
  return (
    <section className={sectionPadding} style={{ backgroundColor: PALETTE.bg }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <SectionLabel>Our Properties</SectionLabel>
        </AnimateOnScroll>
        <TextReveal as="h2" className="mb-4" delay={0.1}>
          <span
            className="text-2xl md:text-4xl lg:text-[38px] leading-[1.15] tracking-wide"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
          >
            Six Destinations, One Philosophy
          </span>
        </TextReveal>
        <AnimateOnScroll variants={fadeUp} delay={0.2}>
          <p className="text-[15px] leading-[1.8] mb-12 md:mb-16 max-w-2xl" style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}>
            Discover our collection of luxury resorts across Latin America, each offering unique experiences rooted in nature and culture.
          </p>
        </AnimateOnScroll>

        <StaggerOnScroll variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {propertyGrid.map((prop) => (
            <motion.div key={prop.route} variants={fadeUp} className="group">
              <Link href={prop.route} className="block">
                <MediaReveal>
                  <div className="relative overflow-hidden mb-5">
                    <img
                      src={prop.image}
                      alt={prop.name}
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                      style={{ aspectRatio: "3/2" }}
                      loading="lazy"
                    />
                    {prop.filter === "Adults-Only" && (
                      <span
                        className="absolute top-3 right-3 px-3 py-1 rounded-full text-[9px] tracking-[0.12em] uppercase backdrop-blur-sm"
                        style={{
                          fontFamily: "var(--font-body)",
                          fontWeight: 500,
                          backgroundColor: "rgba(247,245,240,0.9)",
                          color: PALETTE.textTertiary,
                        }}
                      >
                        Adults-Only
                      </span>
                    )}
                  </div>
                </MediaReveal>
              </Link>

              <DrawLine color={PALETTE.divider} className="mb-4" />

              <h3
                className="text-[18px] mb-1"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: PALETTE.text }}
              >
                {prop.name}
              </h3>
              <p
                className="text-[11px] tracking-[0.1em] uppercase mb-1"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.textTertiary }}
              >
                {prop.location}
              </p>
              <p
                className="text-[13px] leading-relaxed mb-5"
                style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary + "99" }}
              >
                {prop.tagline}
              </p>

              <div className="flex gap-3">
                <a
                  href={BOOKING_URLS[prop.bookingId]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-9 px-5 rounded-full text-[10px] tracking-[0.12em] uppercase transition-all duration-500 hover:opacity-80"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 500,
                    backgroundColor: PALETTE.accent,
                    color: "#fff",
                  }}
                >
                  Reserve
                </a>
                <Link
                  href={prop.route}
                  className="inline-flex items-center justify-center h-9 px-5 rounded-full text-[10px] tracking-[0.12em] uppercase transition-all duration-500"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 500,
                    border: `1px solid ${PALETTE.divider}`,
                    color: PALETTE.textSecondary,
                  }}
                >
                  Explore
                </Link>
              </div>
            </motion.div>
          ))}
        </StaggerOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PILLARS - Four brand pillars with links
   ═══════════════════════════════════════════════════════════════ */
function PillarsSection() {
  return (
    <section className={sectionPadding} style={{ backgroundColor: "#f4f1eb" }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <SectionLabel>The Nayara Experience</SectionLabel>
        </AnimateOnScroll>
        <TextReveal as="h2" className="mb-12 md:mb-16" delay={0.1}>
          <span
            className="text-2xl md:text-4xl lg:text-[38px] leading-[1.15] tracking-wide"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
          >
            Four Pillars That Define Every Stay
          </span>
        </TextReveal>

        <StaggerOnScroll variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {pillars.map((pillar) => (
            <motion.div key={pillar.route} variants={fadeUp}>
              <Link
                href={pillar.route}
                className="group block p-8 md:p-10 transition-all duration-500 hover:translate-y-[-2px]"
                style={{
                  backgroundColor: PALETTE.cardBg,
                  backdropFilter: "blur(8px)",
                  borderBottom: `2px solid ${PALETTE.divider}`,
                }}
              >
                <h3
                  className="text-[20px] mb-3 group-hover:opacity-70 transition-opacity"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: PALETTE.text }}
                >
                  {pillar.name}
                </h3>
                <p className="text-[14px] leading-[1.8] mb-5" style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}>
                  {pillar.desc}
                </p>
                <span
                  className="text-[12px] tracking-[0.08em] uppercase group-hover:opacity-80 transition-opacity"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.textTertiary }}
                >
                  Explore {pillar.name} &rarr;
                </span>
              </Link>
            </motion.div>
          ))}
        </StaggerOnScroll>
      </div>
    </section>
  );
}
