/**
 * NAYARA RESORTS - Brand Homepage
 * Visual Identity: Cormorant Garamond + DM Sans, warm neutral palette, cinematic motion
 */
import { useState, useRef, useEffect, useCallback } from "react";
import NayaraJourneyMap from "@/components/NayaraJourneyMap";
import { Link } from "wouter";
import NativeVideo from "@/components/NativeVideo";
import { useIsMobile } from "@/hooks/useMobile";
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
import { motion, useInView } from "framer-motion";

/* ─── Shared styles ─── */
const PALETTE = {
  bg: "#f7f5f0",
  text: "#3B2B26",
  textSecondary: "#5a4a3a",
  textTertiary: "#3B2B26",
  accent: "#3B2B26",
  divider: "#e0dbd4",
  cardBg: "rgba(255,255,255,0.4)",
};

const sectionPadding = "py-20 md:py-32 px-6 md:px-10";
const maxW = "max-w-[1200px] mx-auto";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[10px] tracking-[0.3em] mb-4"
      style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: `${PALETTE.text}35` }}
    >
      {children}
    </p>
  );
}

/* ─── All six properties ─── */
const allProps = [
  {
    name: "Nayara Gardens",
    location: "Arenal Volcano",
    route: "/gardens",
    bookingId: "gardens",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/prop-gardens_5931d8af.jpg",
    tagline: "Private Rainforest Villas & Casitas",
  },
  {
    name: "Nayara Springs",
    location: "Arenal Volcano",
    route: "/springs",
    bookingId: "springs",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-villa-plunge-pool-straight_a5d505d1.webp",
    tagline: "Private Hot Springs Villas",
  },
  {
    name: "Nayara Tented Camp",
    location: "Arenal Volcano",
    route: "/tented-camp",
    bookingId: "tented-camp",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/19B9D444-0A7C-4C29-93A3-A8C0DFDFBD31_aa5cae9d.JPEG",
    tagline: "Clifftop Tents & Suites",
  },
  {
    name: "Nayara Alto Atacama",
    location: "Atacama Desert, Chile",
    route: "/alto-atacama",
    bookingId: "alto-atacama",
    image: "/manus-storage/alto-atacama-resort_38eead8b.jpeg",
    tagline: "Desert Lodge Villas",
  },
  {
    name: "Nayara Hangaroa",
    location: "Easter Island, Chile",
    route: "/hangaroa",
    bookingId: "hangaroa",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/prop-hangaroa_a0a3fad0.jpg",
    tagline: "Oceanfront Villas on Rapa Nui",
  },
  {
    name: "Nayara Bocas del Toro",
    location: "Bocas del Toro, Panama",
    route: "/bocas-del-toro",
    bookingId: "bocas-del-toro",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/prop-bocas_6adf9525.jpg",
    tagline: "Overwater Villas & Rainforest Treehouses",
  },
];

/* ─── Timeline milestones ─── */
const milestones = [
  { year: "2005", title: "Nayara Gardens Opens", desc: "The first Nayara property opens at the foot of Arenal Volcano in Costa Rica, introducing a new model of luxury hospitality rooted in the rainforest." },
  { year: "2015", title: "Nayara Springs Debuts", desc: "An adults-only sanctuary of hot spring villas opens next door, earning immediate recognition from Condé Nast Traveler and Travel + Leisure." },
  { year: "2019", title: "Nayara Tented Camp Launches", desc: "Safari-style luxury tents elevated above the canopy bring a new dimension to the Arenal experience, designed for families and adventurers." },
  { year: "2020", title: "Nayara Alto Atacama Joins", desc: "The portfolio expands to Chile's Atacama Desert, where ancient landscapes and Atacameño heritage define a new kind of desert retreat." },
  { year: "2022", title: "Nayara Hangaroa Opens", desc: "On Easter Island, Nayara Hangaroa becomes the gateway to Rapa Nui culture, connecting guests with one of the world's most remote and sacred places." },
  { year: "2025", title: "Nayara Bocas del Toro Arrives", desc: "Overwater villas on a private Caribbean island in Panama mark the newest chapter, bringing Nayara's philosophy to the tropics." },
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
      <BrandStorySection />
      <PropertiesSection />

      <TimelineSection />
       <AwardsHighlightSection />
      <NayaraJournalSection />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO - Full-screen video with brand tagline
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const isMobile = useIsMobile();
  const heroVideo = "/manus-storage/brand-hero-final_a81c08c3.mp4";
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);




  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0" data-hero-video>
        <video
          ref={videoRef}
          src={heroVideo}
          className="w-full h-full object-cover"
          autoPlay
          loop
          playsInline
          muted
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none" />
      </div>
      
      {/* Sound pill — FIXED, aligned with BrandNavigation hamburger (same row) */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        aria-label={isMuted ? "Unmute" : "Mute"}
        className="fixed z-50 hidden md:flex items-center justify-center rounded-full backdrop-blur-md shadow-sm border cursor-pointer hover:opacity-90 transition-all duration-300 h-9 px-4"
        style={{
          top: "10px",
          left: "56px",
          backgroundColor: "rgba(59,43,38,0.8)",
          borderColor: "rgba(255,255,255,0.1)",
        }}
      >
        {isMuted ? (
          <svg className="w-3.5 h-3.5 mr-1.5" style={{ color: "#F7F5F0" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-3.72a.75.75 0 011.28.53v14.88a.75.75 0 01-1.28.53L6.75 14.25H3.75a.75.75 0 01-.75-.75v-3a.75.75 0 01.75-.75h3z" />
          </svg>
        ) : (
          <svg className="w-3.5 h-3.5 mr-1.5" style={{ color: "#F7F5F0" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-3.72a.75.75 0 011.28.53v14.88a.75.75 0 01-1.28.53L6.75 15.75H3.75a.75.75 0 01-.75-.75v-6a.75.75 0 01.75-.75h3z" />
          </svg>
        )}
        <span className="text-xs tracking-[0.08em]" style={{ color: "#F7F5F0", fontFamily: "var(--font-body)", fontWeight: 500 }}>
          {isMuted ? "Sound" : "Mute"}
        </span>
      </button>
      
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-2xl md:text-[2rem] lg:text-[2.5rem] tracking-wide text-center"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          Luxury Resorts Rooted in Nature
        </motion.h1>
      </div>
    </section>
  );
}


function BrandStorySection() {
  return (
    <section id="philosophy" style={{ backgroundColor: "#f4f1eb" }}>
      {/* S1: Text left + Portrait image right — full bleed */}
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 px-6 md:px-10 lg:px-16 py-16 md:py-28 flex flex-col justify-center">
          <AnimateOnScroll variants={fadeUp}>
            <SectionLabel>Our Philosophy</SectionLabel>
          </AnimateOnScroll>
          <TextReveal as="h2" className="mb-8" delay={0.1}>
            <span
              className="text-2xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-wide"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
            >
              We Don't Build Hotels.<br />We Reveal Places.
            </span>
          </TextReveal>
          <AnimateOnScroll variants={fadeUp} delay={0.3}>
            <p className="text-[15px] leading-[1.8] mb-5" style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}>
              Nayara Resorts began with a simple conviction: the most extraordinary places on Earth deserve hospitality that honors them. Not resorts that could exist anywhere, but properties that could only exist where they stand.
            </p>
            <p className="text-[15px] leading-[1.8] mb-5" style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}>
              In Costa Rica, that meant building among the trees, not instead of them. In the Atacama, it meant learning from the desert's silence. On Easter Island, it meant listening to the stone guardians. In Panama, it meant floating above the reef rather than disturbing it.
            </p>

            <a
              href="https://blog.nayararesorts.com/rom-deadly-sin-to-rainforest-royalty-the-soul-of-nayara"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 mt-6 mb-6 px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "12px", letterSpacing: "0.08em", color: "#fff", backgroundColor: PALETTE.accent }}
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
              Read: The Nayara Story
            </a>
          </AnimateOnScroll>

          {/* Badge animation video */}
          <div className="mt-6 overflow-hidden">
            <video
              src="/manus-storage/badge-anim-v2_3d7b8706.mp4"
              autoPlay
              muted
              playsInline
              className="w-full h-auto"
              style={{ maxWidth: "600px" }}
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <MediaReveal delay={0.2} className="h-full">
            <div className="overflow-hidden w-full h-full">
              <img
                src="/manus-storage/brand-s1-tent-v_4a147fd7.jpg"
                alt="Nayara Tented Camp surrounded by lush tropical greenery"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </MediaReveal>
        </div>
      </div>

      {/* S2: Horizontal image — full bleed, connected below S1 (desktop only) */}
      <div className="hidden md:block w-full">
        <MediaReveal>
          <div className="overflow-hidden w-full" style={{ aspectRatio: "16/9" }}>
            <img
              src="/manus-storage/brand-s2-bocas-new_d18b38a1.jpg"
              alt="Aerial view of Bocas del Toro tropical island with turquoise waters"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </MediaReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PROPERTIES — Six destinations, one unified grid
   ═══════════════════════════════════════════════════════════════ */
function PropertiesSection() {
  return (
    <>
      {/* ── All six properties ── */}
      <section className="py-14 md:py-20 px-6 md:px-10" style={{ backgroundColor: PALETTE.bg }}>
        <div className={maxW}>
          <AnimateOnScroll variants={fadeUp}>
            <SectionLabel>Our Properties</SectionLabel>
          </AnimateOnScroll>
          <TextReveal as="h2" className="mb-10 md:mb-12" delay={0.1}>
            <span
              className="text-2xl md:text-4xl lg:text-[38px] leading-[1.15] tracking-wide"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
            >
              Six Destinations, One Philosophy
            </span>
          </TextReveal>

          {/* 3-column grid — all 6 properties */}
          <StaggerOnScroll variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {allProps.map((prop) => (
              <motion.div key={prop.route} variants={fadeUp} className="group">
                <Link href={prop.route} className="block">
                  <div className="relative overflow-hidden mb-3" style={{ aspectRatio: "4/3" }}>
                    <img
                      src={prop.image}
                      alt={prop.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                  </div>
                </Link>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3
                      className="text-[15px] mb-0.5"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
                    >
                      {prop.name}
                    </h3>
                    <p
                      className="text-[11px] tracking-[0.06em]"
                      style={{ fontFamily: "var(--font-body)", color: `${PALETTE.text}50` }}
                    >
                      {prop.tagline}
                    </p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0 mt-0.5">
                    <a
                      href={BOOKING_URLS[prop.bookingId]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center h-8 px-4 rounded-full text-[10px] tracking-[0.1em] transition-all duration-300 hover:opacity-80"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 500, backgroundColor: PALETTE.accent, color: "#fff" }}
                    >
                      Reserve
                    </a>
                    <Link
                      href={prop.route}
                      className="inline-flex items-center justify-center h-8 px-4 rounded-full text-[10px] tracking-[0.1em] transition-all duration-300"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 500, border: `1px solid ${PALETTE.divider}`, color: PALETTE.textSecondary }}
                    >
                      Explore
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerOnScroll>
        </div>
      </section>

    </>
  );
}



/* ═══════════════════════════════════════════════════════════════
   TIMELINE — Two Decades of Discovery
   Map on left (sticky), milestones on right (scroll-tracked)
   ═══════════════════════════════════════════════════════════════ */
function TimelineSection() {
  const [activeMilestone, setActiveMilestone] = useState(0);
  const milestoneRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  /* Scroll-based milestone tracking via IntersectionObserver */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    milestoneRefs.current.forEach((el, i) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveMilestone(i);
          }
        },
        { threshold: 0.4, rootMargin: "-15% 0px -35% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 px-6 md:px-10"
      style={{ backgroundColor: "#f4f1eb" }}
    >
      <div className="max-w-[1300px] mx-auto">
        {/* Section header */}
        <AnimateOnScroll variants={fadeUp}>
          <SectionLabel>Our Journey</SectionLabel>
        </AnimateOnScroll>
        <TextReveal as="h2" className="mb-16" delay={0.1}>
          <span
            className="text-xl md:text-3xl lg:text-[32px] leading-[1.2] tracking-wide"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#4B4A4A" }}
          >
            Two Decades of Discovery
          </span>
        </TextReveal>

        {/* Desktop: Map left + Timeline right */}
        <div className="flex gap-16 lg:gap-20 items-stretch">
          {/* Map — sticky on the left, stretches full height of section */}
          <div className="hidden lg:block w-[55%] flex-shrink-0">
            <div className="sticky top-24" style={{ height: 'calc(100vh - 6rem)' }}>
              {/* Map fills the full sticky height */}
              <div style={{ height: 'calc(100% - 3rem)' }}>
                <NayaraJourneyMap activeMilestoneIndex={activeMilestone} />
              </div>
              {/* Current location indicator */}
              <motion.div
                className="mt-3 text-center"
                key={activeMilestone}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span
                  className="text-[10px] tracking-[0.25em] uppercase"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: `${PALETTE.text}40` }}
                >
                  {milestones[activeMilestone]?.year} — {milestones[activeMilestone]?.title}
                </span>
              </motion.div>
            </div>
          </div>

          {/* Milestones — scrollable on the right */}
          <div className="flex-1">
            {milestones.map((m, i) => {
              /* Costa Rica milestones (0,1,2) get compressed spacing so the plane flies sooner */
              const isCostaRica = i < 3;
              const spacing = i === 0 ? "" : isCostaRica ? "mt-6 lg:mt-8" : "mt-16 lg:mt-20";
              return (
              <div
                key={m.year}
                ref={(el) => { milestoneRefs.current[i] = el; }}
                className={spacing}
              >
                <AnimateOnScroll variants={fadeUp} delay={0.05}>
                  <div
                    className="transition-opacity duration-700"
                    style={{ opacity: activeMilestone === i ? 1 : 0.35 }}
                  >
                    <div className="flex gap-6 items-baseline mb-4">
                      <span
                        className="text-[42px] lg:text-[56px] leading-none"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: 300,
                          color: activeMilestone === i ? PALETTE.text : `${PALETTE.text}30`,
                          transition: "color 0.7s ease",
                        }}
                      >
                        {m.year}
                      </span>
                      <div
                        className="flex-1 h-px"
                        style={{
                          backgroundColor: activeMilestone === i ? `${PALETTE.text}20` : `${PALETTE.text}08`,
                          transition: "background-color 0.7s ease",
                        }}
                      />
                    </div>
                    <h3
                      className="text-[20px] lg:text-[22px] mb-3"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: PALETTE.text }}
                    >
                      {m.title}
                    </h3>

                  </div>
                </AnimateOnScroll>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   AWARDS HIGHLIGHT — 4 key accolades before By Night
   ═══════════════════════════════════════════════════════════════ */
const awardsData = [
  {
    stat: "#1",
    accolade: "Best Resort in Central America",
    property: "Nayara Bocas del Toro \u2014 Cond\u00e9 Nast",
    route: "/blog/conde-nast-bocas-del-toro",
  },
  {
    stat: "#1",
    accolade: "Best Resort in Central America",
    property: "Nayara Tented Camp \u2014 Travel + Leisure",
    route: "/tented-camp",
  },
  {
    stat: "Top 15",
    accolade: "Top 15 Resort Brands in the World",
    property: "Nayara Resorts \u2014 Travel + Leisure",
    route: "/awards",
  },
  {
    stat: "3",
    accolade: "Only 3 Michelin Key Hotel in Costa Rica",
    property: "Nayara Springs \u2014 MICHELIN Guide",
    route: "https://blog.nayararesorts.com/7-michelin-keys-3-countries-1-commitment",
  },
  {
    stat: "Top 15",
    accolade: "Top 15 Resorts in South America",
    property: "Nayara Alto Atacama \u2014 Cond\u00e9 Nast",
    route: "https://www.cntraveler.com/gallery/top-resorts-in-south-america",
  },
  {
    stat: "Hall of Fame",
    accolade: "World's Best Awards Hall of Fame",
    property: "Nayara Gardens \u2014 Travel + Leisure",
    route: "/gardens",

  },
];

function AwardsHighlightSection() {
  /* Dark espresso cards with warm gold accents */
  const cardBg = "#3B2B26";
  const cardText = "#F7F5F0";
  const cardTextMuted = "#C4A265";
  const cardTextSoft = "#D4C8B8";
  const cardAccent = "#C4A265";
  return (
    <section className="py-20 md:py-28 px-6 md:px-10" style={{ backgroundColor: PALETTE.bg }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <SectionLabel>Recognition</SectionLabel>
        </AnimateOnScroll>
        <TextReveal as="h2" className="mb-14 md:mb-20" delay={0.1}>
          <span
            className="text-2xl md:text-4xl lg:text-[38px] leading-[1.15] tracking-wide"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
          >
            Recognized by the Most Trusted Voices in Travel
          </span>
        </TextReveal>
        <StaggerOnScroll variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {awardsData.map((award) => (
            <motion.div key={award.property} variants={fadeUp}>
              {(() => {
                const isExternal = award.route.startsWith("http");
                const Wrapper = isExternal ? "a" : Link;
                const wrapperProps = isExternal
                  ? { href: award.route, target: "_blank", rel: "noopener noreferrer" }
                  : { href: award.route };
                return (
              <Wrapper
                {...wrapperProps}
                className="group flex flex-col h-full p-8 md:p-10 transition-all duration-500 ease-out hover:translate-y-[-6px] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.4)] hover:z-10 relative overflow-hidden"
                style={{ backgroundColor: cardBg, border: `1px solid ${cardAccent}35`, borderTop: `2px solid ${cardAccent}` }}
              >
                {/* Subtle grain texture overlay */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.06] group-hover:opacity-[0.10] transition-opacity duration-500" xmlns="http://www.w3.org/2000/svg">
                  <filter id={`grain-${award.property.replace(/\s+/g, '-')}`}>
                    <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" seed={42} />
                    <feColorMatrix type="saturate" values="0" />
                  </filter>
                  <rect width="100%" height="100%" filter={`url(#grain-${award.property.replace(/\s+/g, '-')})`} />
                </svg>
                {/* Big stat number — gold, clearly visible */}
                <span
                  className={`block leading-none mb-4 transition-all duration-500 group-hover:scale-110 group-hover:translate-x-1 h-[48px] md:h-[56px] lg:h-[64px] flex items-end ${award.stat.length > 6 ? 'text-[32px] md:text-[40px] lg:text-[48px] whitespace-nowrap' : 'text-[48px] md:text-[56px] lg:text-[64px]'}`}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 300,
                    color: cardAccent,
                    transitionProperty: "color, transform",
                  }}
                >
                  <span className="group-hover:hidden">{award.stat}</span>
                  <span className="hidden group-hover:inline" style={{ color: cardAccent }}>{award.stat}</span>
                </span>
                {/* Accent line — gold, grows wider on hover */}
                <div
                  className="w-8 h-px mb-5 group-hover:w-16 group-hover:h-[2px] transition-all duration-500 ease-out"
                  style={{ backgroundColor: cardAccent }}
                />
                {/* Accolade */}
                <h3
                  className="text-[16px] md:text-[17px] leading-[1.35] mb-2 transition-colors duration-500 min-h-[46px] flex items-start"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: cardText }}
                >
                  {award.accolade}
                </h3>
                {/* Property + Source */}
                <p
                  className="text-[12px] tracking-[0.06em] transition-colors duration-500 mt-auto"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: cardTextSoft }}
                >
                  {award.property}
                </p>
                {/* Arrow indicator — appears on hover */}
                <div className="mt-5 overflow-hidden h-0 group-hover:h-6 transition-all duration-500 ease-out">
                  <svg className="w-4 h-4 translate-x-[-8px] group-hover:translate-x-0 opacity-0 group-hover:opacity-60 transition-all duration-500" fill="none" viewBox="0 0 24 24" stroke={cardAccent} strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Wrapper>
                );
              })()}
            </motion.div>
          ))}
        </StaggerOnScroll>
        {/* CTA to full awards page */}
        <AnimateOnScroll variants={fadeUp} delay={0.3}>
          <div className="mt-12 text-center">
            <Link
              href="/awards"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-[11px] tracking-[0.12em] transition-all duration-500 hover:opacity-80"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                border: `1px solid ${PALETTE.divider}`,
                color: PALETTE.textSecondary,
              }}
            >
              View All Awards & Press
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   NAYARA JOURNAL — Dark editorial strip with 3 real cards + glass pills
   ═══════════════════════════════════════════════════════════════ */
function NayaraJournalSection() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  // 3 curated cards: Read · Listen · Watch
  const teaserCards = [
    {
      id: "gastronomy",
      label: "Read",
      title: "Gastronomy Across the World of Nayara",
      image: "/manus-storage/journal-cover-gastronomy-fire_a510d2d4.webp",
      href: "https://blog.nayararesorts.com/gastronomy",
      external: true,
      cta: "read" as const,
    },
    {
      id: "afar",
      label: "Listen",
      title: "Leo Ghitis on Going Beyond Sustainability with the AFAR Podcast",
      image: "/manus-storage/afar-podcast-cover_47ce0dce.jpg",
      href: "https://podcasts.apple.com/us/podcast/view-from-afar/id1811656485?i=1000740311355",
      external: true,
      cta: "listen" as const,
    },
    {
      id: "hitorangi-rapanui",
      label: "Watch",
      title: "The Guardians of Rapa Nui: A Conversation with the Hitorangi Family",
      image: "/manus-storage/podcast-cover-rapanui-warrior_9ff96565.jpg",
      href: null as string | null,
      youtubeId: "FRPVRcUTNmk",
      listenUrl: undefined,
      external: false,
      cta: "watch" as const,
    },
  ];

  return (
    <section
      className="relative py-20 md:py-28 px-6 md:px-10 overflow-hidden"
      style={{ backgroundColor: "#2E2218" }}
    >
      {/* Grain overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
        <filter id="grain-journal">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-journal)" />
      </svg>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <TextReveal as="h2" delay={0.1}>
              <span
                className="text-2xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-wide"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#F7F5F0" }}
              >
                Nayara Journal
              </span>
            </TextReveal>
          </div>
          <AnimateOnScroll variants={fadeUp} delay={0.2}>
            <Link
              href="/journal"
              className="inline-flex items-center gap-2.5 h-11 px-7 rounded-full text-[11px] tracking-[0.14em] uppercase transition-all duration-500 hover:opacity-80 flex-shrink-0"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, border: "1px solid #C4A26540", color: "#F7F5F080" }}
            >
              Enter the Journal
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </AnimateOnScroll>
        </div>

        {/* 3-card grid */}
        <StaggerOnScroll variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {teaserCards.map((card) => (
            <motion.div key={card.id} variants={fadeUp}>
              <JournalTeaserCard
                card={card}
                isPlaying={playingId === card.id}
                onPlay={() => setPlayingId(card.id)}
                onClose={() => setPlayingId(null)}
              />
            </motion.div>
          ))}
        </StaggerOnScroll>
      </div>
    </section>
  );
}

function JournalTeaserCard({
  card,
  isPlaying,
  onPlay,
  onClose,
}: {
  card: {
    id: string;
    label: string;
    title: string;
    image: string;
    href: string | null;
    youtubeId?: string;
    listenUrl?: string;
    external: boolean;
    cta: "read" | "listen" | "watch-listen" | "watch";
  };
  isPlaying: boolean;
  onPlay: () => void;
  onClose: () => void;
}) {
  const pillBase = "inline-flex items-center gap-2 h-9 px-5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-[11px] tracking-[0.12em] uppercase hover:bg-white/25 transition-all cursor-pointer font-medium";
  const bodyFont = { fontFamily: "var(--font-body)", fontWeight: 500 } as const;
  const displayFont = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;

  return (
    <div className="flex flex-col">
    <div className="group relative w-full overflow-hidden rounded-lg bg-stone-900" style={{ aspectRatio: "1/1" }}>
      {isPlaying && card.youtubeId ? (
        <>
          <iframe
            src={`https://www.youtube.com/embed/${card.youtubeId}?autoplay=1&rel=0`}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title={card.title}
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-colors text-sm"
          >
            ✕
          </button>
        </>
      ) : (
        <>
          <img
            src={card.image}
            alt={card.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          {/* Type label */}
          <div className="absolute top-4 left-4">
            <span className="text-[9px] tracking-[0.25em] uppercase" style={{ ...bodyFont, color: "#C4A265" }}>
              {card.label}
            </span>
          </div>
          {/* Bottom gradient only — no text */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
        </>
      )}
    </div>
    {/* Title and CTAs below the card image */}
    <div className="pt-4 pb-2">
      <h3 className="text-white/90 text-[14px] md:text-[15px] leading-[1.3] mb-3" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
        {card.title}
      </h3>
      <div className="flex items-center gap-2 flex-wrap">
        {card.cta === "read" && card.href && (
          <a
            href={card.href}
            target="_blank"
            rel="noopener noreferrer"
            className={pillBase}
            style={bodyFont}
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
            Read
          </a>
        )}
        {card.cta === "listen" && card.href && (
          <a
            href={card.href}
            target="_blank"
            rel="noopener noreferrer"
            className={pillBase}
            style={bodyFont}
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
            Listen
          </a>
        )}
        {(card.cta === "watch-listen" || card.cta === "watch") && (
          <>
            <button
              onClick={(e) => { e.preventDefault(); onPlay(); }}
              className={pillBase}
              style={bodyFont}
            >
              <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              Watch
            </button>
            {card.cta === "watch-listen" && card.listenUrl && (
              <a
                href={card.listenUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={pillBase}
                style={bodyFont}
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
                Listen
              </a>
            )}
          </>
        )}
      </div>
    </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CONTENT HUB — Journal (Blog + Podcast + FAQ) & Press/Awards
   ═══════════════════════════════════════════════════════════════ */
const contentLinks = [
  {
    label: "Journal",
    desc: "Stories, podcast conversations, and answers from across the Nayara world.",
    route: "/journal",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    label: "Press & Awards",
    desc: "Recognition from the world's leading travel publications and guides.",
    route: "/awards",
    icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
  },
];

function ContentHubSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: PALETTE.bg }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <SectionLabel>Explore & Discover</SectionLabel>
        </AnimateOnScroll>
        <TextReveal as="h2" className="mb-12 md:mb-16" delay={0.1}>
          <span
            className="text-2xl md:text-4xl lg:text-[38px] leading-[1.15] tracking-wide"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
          >
            The Nayara Journal
          </span>
        </TextReveal>

        <StaggerOnScroll variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contentLinks.map((item) => (
            <motion.div key={item.label} variants={fadeUp}>
              <Link
                href={item.route}
                className="group block p-8 h-full transition-all duration-500 hover:translate-y-[-2px]"
                style={{
                  backgroundColor: PALETTE.cardBg,
                  backdropFilter: "blur(8px)",
                  borderBottom: `2px solid ${PALETTE.divider}`,
                }}
              >
                <svg
                  className="w-6 h-6 mb-5 transition-opacity group-hover:opacity-70"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={PALETTE.accent}
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
                <h3
                  className="text-[17px] mb-2 group-hover:opacity-70 transition-opacity"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: PALETTE.text }}
                >
                  {item.label}
                </h3>
                <p className="text-[13px] leading-[1.7]" style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}>
                  {item.desc}
                </p>
              </Link>
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
                  className="text-[12px] tracking-[0.08em] group-hover:opacity-80 transition-opacity"
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

/* ═══════════════════════════════════════════════════════════════
   INSTAGRAM GRID — Single row, 6 images from @nayararesorts
   Warm transition from dark By Night back to footer
   ═══════════════════════════════════════════════════════════════ */
const instagramPosts: { src: string; alt: string; isVideo?: boolean }[] = [
  { src: "/manus-storage/ig-1-flamingo_0ed37fec.mp4", alt: "Flamingo wading in Atacama salt flats", isVideo: true },
  { src: "/manus-storage/ig-2-pool_e3e8376f.jpg", alt: "Guest enjoying private plunge pool at Nayara Tented Camp" },
  { src: "/manus-storage/ig-3-drone_551a1d3f.mp4", alt: "Aerial view of Nayara resort", isVideo: true },
  { src: "/manus-storage/ig-4-extra_db83b788.mp4", alt: "Nayara resort experience", isVideo: true },
];

function InstagramGrid() {
  return (
    <section
      className="py-16 md:py-24 px-6 md:px-10"
      style={{ backgroundColor: PALETTE.bg }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <AnimateOnScroll variants={fadeUp}>
          <div className="flex items-center justify-between mb-8 md:mb-12">
            <div>
              <p
                className="text-[10px] tracking-[0.3em] mb-3"
                style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: `${PALETTE.text}35` }}
              >
                FOLLOW ALONG
              </p>
              <h2
                className="text-xl md:text-2xl lg:text-3xl tracking-wide"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
              >
                @nayararesorts
              </h2>
            </div>
            <a
              href="https://www.instagram.com/nayararesorts/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border transition-all duration-300 hover:translate-y-[-1px] hover:shadow-md"
              style={{
                borderColor: `${PALETTE.text}20`,
                color: PALETTE.text,
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                fontSize: "12px",
                letterSpacing: "0.06em",
              }}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Follow Us
            </a>
          </div>
        </AnimateOnScroll>

        {/* Single-row grid — 4 items */}
        <StaggerOnScroll variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {instagramPosts.map((post, i) => (
            <motion.a
              key={i}
              variants={fadeUp}
              href="https://www.instagram.com/nayararesorts/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden"
            >
              {post.isVideo ? (
                <video
                  src={post.src}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={post.src}
                  alt={post.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 drop-shadow-lg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
            </motion.a>
          ))}
        </StaggerOnScroll>
      </div>
    </section>
  );
}
