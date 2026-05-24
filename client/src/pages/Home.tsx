/**
 * NAYARA RESORTS - Brand Homepage
 * Visual Identity: Cormorant Garamond + DM Sans, warm neutral palette, cinematic motion
 */
import { useState, useRef, useEffect, useCallback } from "react";
import NayaraJourneyMap from "@/components/NayaraJourneyMap";
import { Link } from "wouter";
import NativeVideo from "@/components/NativeVideo";
import CanvasVideo from "@/components/CanvasVideo";
import { useIsMobile } from "@/hooks/useMobile";
import BrandNavigation from "@/components/BrandNavigation";

import Footer from "@/components/Footer";
import { EnhancedOrganizationSchema, BreadcrumbListSchema } from "@/components/SEOSchemaEnhanced";
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
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Play, ArrowUpRight, ExternalLink } from "lucide-react";
import { journalEntries, type JournalEntry } from "@/data/journal";

/* ─── Type definitions ─── */
interface Milestone {
  year: string;
  title: string;
  desc: string;
}

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
      style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: "#0D0604" }}
    >
      {children}
    </p>
  );
}

/* ─── All six properties ─── */
interface PropertyCard {
  name: string;
  location: string;
  route: string;
  bookingId: string;
  image: string;
  tagline: string;
}

const allProps: PropertyCard[] = [
  {
    name: "Nayara Gardens",
    location: "Arenal Volcano National Park, Costa Rica",
    route: "/gardens",
    bookingId: "gardens",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/prop-gardens_5931d8af.jpg",
    tagline: "Private Rainforest Villas & Casitas",
  },
  {
    name: "Nayara Springs",
    location: "Arenal Volcano National Park, Costa Rica",
    route: "/springs",
    bookingId: "springs",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-villa-plunge-pool-straight_a5d505d1.webp",
    tagline: "Private Hot Springs Villas",
  },
  {
    name: "Nayara Tented Camp",
    location: "Arenal Volcano National Park, Costa Rica",
    route: "/tented-camp",
    bookingId: "tented-camp",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/19B9D444-0A7C-4C29-93A3-A8C0DFDFBD31_aa5cae9d.JPEG",
    tagline: "Clifftop Tents & Suites",
  },
  {
    name: "Nayara Alto Atacama",
    location: "San Pedro de Atacama, Chile",
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
    tagline: "Overwater Villas & Treehouses",
  },
];

/* ─── Timeline milestones ─── */
const milestones: Milestone[] = [
  { year: "2016", title: "Nayara Gardens Established", desc: "The first Nayara property opens in the Arenal region, setting the standard for luxury rainforest retreats." },
  { year: "2017", title: "Nayara Springs Debuts", desc: "A second Arenal property launches, featuring private thermal hot springs and volcanic spa experiences." },
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
  { name: "Forest to Table", route: "/gastronomy", desc: "Five restaurants, two Michelin Keys, farm-to-table menus, and culinary traditions from the Andes to the Pacific." },
];


export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.bg }}>

      <EnhancedOrganizationSchema />
      <BreadcrumbListSchema items={[
        { name: "Home", url: "https://nayararesorts.manus.space" },
      ]} />
      <BrandNavigation pageType="brand" navPalette={{ dark: "#fff", pillBg: "rgba(59,43,38,0.8)", pillHover: "rgba(59,43,38,0.95)" }} />
      <HeroSection />
      <BrandStorySection />
      <PropertiesSection />

      <div className="hidden md:block">
        <TimelineSection />
      </div>
      <AwardsHighlightSection />
      <NayaraJournalSection />
      <NayaraStorySection />
      <Footer textColor="#FFFFFF" bgColor="#3B2B26" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO - Full-screen video with brand tagline
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const isMobile = useIsMobile();
  const heroVideo = "/manus-storage/brand-hero-new_374487a8.mp4";
  const mobileHeroVideo = "/manus-storage/mobile-hero-web_9f66d743.mp4";
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
        {isMobile ? (
          <img
            src="/manus-storage/home-mobile-hero-still_84fbf7bb.jpeg"
            alt="Nayara Resorts"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
        ) : (
          <video
            ref={videoRef}
            src={heroVideo}
            className="w-full h-full object-cover"
            autoPlay
            loop
            playsInline
            preload="metadata"
            muted
            controls={false}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none" />
      </div>
      
      {/* Sound pill , FIXED, aligned with BrandNavigation hamburger (same row) */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        aria-label={isMuted ? "Unmute" : "Mute"}
        className="fixed z-50 hidden md:flex lg:flex items-center justify-center rounded-full backdrop-blur-md shadow-sm border cursor-pointer hover:opacity-90 transition-all duration-300 h-9 w-9"
        style={{
          top: "8px",
          left: "56px",
          backgroundColor: "rgba(59,43,38,0.8)",
          borderColor: "rgba(255,255,255,0.1)",
        }}
      >
        {/* Pulse ring animation when muted */}
        {isMuted && (
          <>
            <span className="absolute -inset-1 rounded-full border-2 animate-ping" style={{ borderColor: "rgba(247,245,240,0.37)" }} />
            <span className="absolute -inset-2 rounded-full border animate-ping" style={{ borderColor: "rgba(247,245,240,0.19)", animationDelay: "0.3s" }} />
          </>
        )}
        {/* Speaker icon */}
        <svg
          className="w-4.5 h-4.5 transition-colors"
          style={{ color: "#F7F5F0" }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={isMuted
              ? "M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-3.72a.75.75 0 011.28.53v14.88a.75.75 0 01-1.28.53L6.75 14.25H3.75a.75.75 0 01-.75-.75v-3a.75.75 0 01.75-.75h3z"
              : "M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-3.72a.75.75 0 011.28.53v14.88a.75.75 0 01-1.28.53L6.75 15.75H3.75a.75.75 0 01-.75-.75v-6a.75.75 0 01.75-.75h3z"
            }
          />
        </svg>
      </button>
      
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-6 md:pb-10 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-2xl md:text-[2rem] lg:text-[2.5rem] tracking-wide text-center"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          <span className="block md:inline">We Don't Build Hotels,</span>{" "}<span className="block md:inline">We Reveal Places</span>
        </motion.h1>
      </div>
    </section>
  );
}


function BrandStorySection() {
  const isMobile = useIsMobile();
  return (
    <section id="philosophy" style={{ backgroundColor: "#f4f1eb" }}>
      {/* S1: Text left + Portrait video right , full bleed, no gaps */}
      <div className="flex flex-col md:flex-row" style={{ margin: 0, padding: 0 }}>
        <div className={`${isMobile ? 'w-full' : 'md:w-1/2'} px-6 md:px-10 lg:px-16 py-16 md:py-28 flex flex-col justify-center`}>
          <AnimateOnScroll variants={fadeUp}>
            <SectionLabel>Our Philosophy</SectionLabel>
          </AnimateOnScroll>
          <TextReveal as="h2" className="mb-8" delay={0.1}>
            <span
              className="text-2xl md:text-4xl lg:text-[32px] leading-[1.15] tracking-wide"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
            >
              Award-winning luxury resorts rooted in Latin America's most pristine ecosystems.
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
              href="/blog/nayara-story"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 mt-6 mb-6 px-6 py-2.5 rounded-full transition-all duration-300 hover:!bg-[#3B2B26]"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "11px", letterSpacing: "0.12em", color: "#F7F5F0", backgroundColor: "#3B2B26", textTransform: "uppercase" }}
            >
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
              Read: The Nayara Story
            </a>
          </AnimateOnScroll>

          {/* Badge animation video , desktop only */}
          {!isMobile && (
            <div className="mt-6 overflow-hidden -ml-8">
              <video
                src="/manus-storage/Untitled(1000x315px)(1000x630px)(1200x400px)(1000x400px)(500x200px)-3_88f872a7.mp4"
                autoPlay
                muted
                playsInline
                preload="metadata"
                className="w-full h-auto"
                style={{ maxWidth: "600px" }}
              />
            </div>
          )}
        </div>
        {/* Vertical video (3:4) , desktop only — fills height of left column */}
        {!isMobile && (
          <div className="md:w-1/2" style={{ margin: 0, padding: 0 }}>
            <div className="relative overflow-hidden w-full h-full" style={{ minHeight: "100%" }}>
              <video
                src="/manus-storage/homepage-philosophy-vertical_3c021d72.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                <span className="px-6 py-2.5 rounded-full border border-white/60 backdrop-blur-sm bg-white/10 text-white text-[11px] tracking-[0.2em] uppercase inline-flex items-center gap-2" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
                  Explore Tented Camp
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-5.25-5.25M19.5 12l-5.25 5.25" /></svg>
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* S2: Horizontal video , full bleed, flush against S1 above (desktop only) */}
      <div className="hidden md:block w-full" style={{ marginTop: 0 }}>
        <div className="relative overflow-hidden w-full" style={{ aspectRatio: "16/9" }}>
          <video
            src="/manus-storage/atacama-horizontal-new_94dd4c24.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-8 left-0 right-0 flex justify-center">
            <span className="px-6 py-2.5 rounded-full border border-white/60 backdrop-blur-sm bg-white/10 text-white text-[11px] tracking-[0.2em] uppercase inline-flex items-center gap-2" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
              Explore Alto Atacama
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-5.25-5.25M19.5 12l-5.25 5.25" /></svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PROPERTIES , Six destinations, one unified grid
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

          {/* 3-column grid , all 6 properties */}
          <StaggerOnScroll variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {allProps.map((prop) => (
              <motion.div key={prop.route} variants={fadeUp} className="group">
                <Link href={prop.route} className="block">
                  <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                    <img
                      src={prop.image}
                      alt={prop.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                  </div>
                </Link>
                <div className="pt-4 pb-2">
                  <Link href={prop.route} className="block">
                    <h3
                      className="text-[15px] md:text-[16px] tracking-[0.06em] uppercase"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
                    >
                      {prop.name}
                    </h3>
                  </Link>
                  <p
                    className="text-[12px] tracking-[0.02em] mt-1"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 400, color: PALETTE.textSecondary }}
                  >
                    {prop.tagline}
                  </p>
                  <p
                    className="text-[10px] tracking-[0.1em] uppercase mt-1.5"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.textSecondary, opacity: 0.7 }}
                  >
                    {prop.location}
                  </p>
                  <div className="flex gap-2 mt-3">
                    <a
                      href={BOOKING_URLS[prop.bookingId]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center h-8 px-4 rounded-full text-[10px] tracking-[0.1em] transition-all duration-300 hover:!bg-[#3B2B26]"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 500, backgroundColor: "#3B2B26", color: "#fff" }}
                    >
                      Reserve
                    </a>
                    <Link
                      href={prop.route}
                      className="inline-flex items-center justify-center h-8 px-4 rounded-full text-[10px] tracking-[0.1em] transition-all duration-300"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 500, border: `2px solid ${PALETTE.divider}`, color: PALETTE.textSecondary }}
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
   TIMELINE , Two Decades of Discovery
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
        { threshold: 0.2, rootMargin: "-10% 0px -20% 0px" }
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
          {/* Map , sticky on the left, stretches full height of section */}
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
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "#0D0604" }}
                >
                  {milestones[activeMilestone]?.year} , {milestones[activeMilestone]?.title}
                </span>
              </motion.div>
            </div>
          </div>

          {/* Milestones , scrollable on the right */}
          <div className="flex-1 pb-[30vh]">
            {milestones.map((m, i) => {
              /* Uniform spacing for all milestones */
              const spacing = i === 0 ? "" : "mt-20 lg:mt-28";
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
                          color: activeMilestone === i ? PALETTE.text : "#0D0604",
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
                      className="text-[20px] lg:text-[22px] mb-2"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: PALETTE.text }}
                    >
                      {m.title}
                    </h3>
                    {m.desc && (
                      <p
                        className="text-[13px] lg:text-[14px] leading-[1.6] max-w-md"
                        style={{ fontFamily: "var(--font-body)", fontWeight: 400, color: PALETTE.textSecondary }}
                      >
                        {m.desc}
                      </p>
                    )}
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
   AWARDS HIGHLIGHT — Editorial magazine-cover card carousel
   Same style as Press & Awards page PressCardsSection
   ═══════════════════════════════════════════════════════════════ */
interface EditorialCardHome {
  title: string;
  publication: string;
  date: string;
  url: string;
  property: string;
  coverImage: string;
}

const editorialCardsHome: EditorialCardHome[] = [
  {
    title: "No. 13 Resort Brand in the World",
    publication: "Travel + Leisure",
    date: "2025",
    url: "https://www.travelandleisure.com/worlds-best-awards-2025-hotel-brands-11751883",
    property: "Nayara Resorts",
    coverImage: "/manus-storage/tl-worlds-best-2025_d7a4781b.jpg",
  },
  {
    title: "No. 1 Resort in Central America",
    publication: "Cond\u00e9 Nast Traveler",
    date: "2025",
    url: "https://www.cntraveler.com/gallery/top-resorts-in-central-america-readers-choice-awards",
    property: "Nayara Bocas del Toro",
    coverImage: "/manus-storage/cnt-gold-list-2025_3f071380.jpg",
  },
  {
    title: "Best New Hotels in the World",
    publication: "AFAR",
    date: "2023",
    url: "https://www.afar.com/magazine/the-best-hotels-of-2023",
    property: "Nayara Bocas del Toro",
    coverImage: "/manus-storage/afar-where-to-go-2024_a290bf6d.jpg",
  },
  {
    title: "Michelin Key Hotels: Top Luxury Stays",
    publication: "Inspirato",
    date: "January 2026",
    url: "https://www.inspirato.com/details/general/michelin-key-hotels-luxury-travel/",
    property: "Nayara Springs",
    coverImage: "/manus-storage/inspirato-magazine_4f30cbc1.jpg",
  },
  {
    title: "Michelin, Cond\u00e9 Nast, Travel + Leisure: The World\u2019s Top Awards Choose Nayara",
    publication: "Travel World News",
    date: "October 2025",
    url: "https://www.travelworldnews.com/michelin-conde-nast-travel-leisure-the-worlds-top-awards-choose-nayara-resorts/",
    property: "Nayara Resorts",
    coverImage: "/manus-storage/destinations-world-news_14994318.jpg",
  },
  {
    title: "An Intentional Oasis Meant for Slowing Down",
    publication: "Cond\u00e9 Nast Traveler",
    date: "2024",
    url: "https://www.cntraveler.com/hotels/nayara-alto-atacama",
    property: "Nayara Alto Atacama",
    coverImage: "/manus-storage/travel-luxury-atacama_35ec689b.jpg",
  },
  {
    title: "Nayara Alto Atacama Hotel Review",
    publication: "The Telegraph",
    date: "July 2025",
    url: "https://www.telegraph.co.uk/travel/destinations/south-america/chile/atacama/san-pedro-de-atacama/hotels/nayara-alto-atacama-hotel/",
    property: "Nayara Alto Atacama",
    coverImage: "/manus-storage/telegraph-logo_899d8ec6.jpg",
  },
  {
    title: "Sukha Spa Named Among World\u2019s 12 Best Spas",
    publication: "Galerie Magazine",
    date: "2024",
    url: "https://galeriemagazine.com/best-spas-in-the-world/",
    property: "Nayara Springs",
    coverImage: "/manus-storage/galerie-summer-2024_549588f0.png",
  },
  {
    title: "How to Plan the Perfect Trip to Easter Island",
    publication: "Travel + Leisure",
    date: "June 2025",
    url: "https://www.travelandleisure.com/trip-ideas/vacationing-in-easter-island",
    property: "Nayara Hangaroa",
    coverImage: "/manus-storage/tl-worlds-best-2025_d7a4781b.jpg",
  },
  {
    title: "Nayara Resorts Plans Eco-Friendly Beach Hotel",
    publication: "Tico Times",
    date: "December 2025",
    url: "https://ticotimes.net/2025/12/09/costa-ricas-nayara-resorts-plans-eco-friendly-beach-hotel-in-manuel-antonio",
    property: "Nayara Resorts",
    coverImage: "/manus-storage/tico-times-logo_20ac5840.png",
  },
  {
    title: "Nayara Alto Atacama Review: A Smart Pick for Adventurous Couples",
    publication: "Travel Market Report",
    date: "October 2025",
    url: "https://www.travelmarketreport.com/hotels-resorts/articles/nayara-alto-atacama-review-a-smart-pick-for-adventurous-couples-visiting-the-north-of-chile",
    property: "Nayara Alto Atacama",
    coverImage: "/manus-storage/destinations-world-news_14994318.jpg",
  },
  {
    title: "13 Standout Luxury Resorts in Costa Rica",
    publication: "AFAR",
    date: "2025",
    url: "https://www.afar.com/magazine/best-resorts-costa-rica",
    property: "Nayara Springs",
    coverImage: "/manus-storage/afar-where-to-go-2024_a290bf6d.jpg",
  },
  {
    title: "9 Hotels Where Natural Hot Springs Are the Main Amenity",
    publication: "Condé Nast Traveller",
    date: "2025",
    url: "https://www.cntraveller.com/gallery/hotels-with-hot-springs",
    property: "Nayara Springs",
    coverImage: "/manus-storage/cnt-gold-list-2025_3f071380.jpg",
  },
  {
    title: "The Happiest Country in Latin America — Famous Stunning Hotels",
    publication: "Travel + Leisure",
    date: "2025",
    url: "https://www.travelandleisure.com/happiest-country-in-latin-america-costa-rica-11928317",
    property: "Nayara Springs",
    coverImage: "/manus-storage/tl-worlds-best-2025_d7a4781b.jpg",
  },
  {
    title: "Nayara Springs — Five-Star Rating",
    publication: "Forbes Travel Guide",
    date: "2025",
    url: "https://www.forbestravelguide.com/hotels/costa-rica-costa-rica/nayara-springs",
    property: "Nayara Springs",
    coverImage: "/manus-storage/inspirato-magazine_4f30cbc1.jpg",
  },
  {
    title: "The Best Honeymoon Destinations",
    publication: "Vogue",
    date: "2025",
    url: "https://www.vogue.com/article/best-honeymoon-destinations",
    property: "Nayara Tented Camp",
    coverImage: "/manus-storage/travel-luxury-atacama_35ec689b.jpg",
  },
  {
    title: "Where to Go in 2026",
    publication: "Town & Country",
    date: "2026",
    url: "https://www.townandcountrymag.com/leisure/travel-guide/a69424707/where-to-go-in-2026/",
    property: "Nayara Bocas del Toro",
    coverImage: "/manus-storage/destinations-world-news_14994318.jpg",
  },
  {
    title: "Costa Rica Birdwatching Trip in Style",
    publication: "The Times (Luxx)",
    date: "2025",
    url: "https://www.thetimes.com/magazines/luxx/article/costa-rica-birdwatching-in-style-times-lux",
    property: "Nayara Gardens",
    coverImage: "/manus-storage/telegraph-logo_899d8ec6.jpg",
  },
  {
    title: "14 Rainforest Hotels That Put You Right in the Jungle",
    publication: "Condé Nast Traveller",
    date: "2025",
    url: "https://www.cntraveller.com/gallery/rainforest-hotels",
    property: "Nayara Tented Camp",
    coverImage: "/manus-storage/cnt-gold-list-2025_3f071380.jpg",
  },
  {
    title: "Chile's Atacama Desert: Sand Dunes, Mountains and Moonscapes",
    publication: "The Globe and Mail",
    date: "2025",
    url: "https://www.theglobeandmail.com/life/travel/article-sand-dunes-mountains-and-moonscapes-converge-in-chiles-atacama-desert/",
    property: "Nayara Alto Atacama",
    coverImage: "/manus-storage/travel-luxury-atacama_35ec689b.jpg",
  },
  {
    title: "Visit Easter Island's Mysterious Moai",
    publication: "National Geographic",
    date: "2025",
    url: "http://nationalgeographic.com/travel/article/visit-the-end-of-the-earth-to-see-easter-islands-mysterious-moai",
    property: "Nayara Hangaroa",
    coverImage: "/manus-storage/tl-worlds-best-2025_d7a4781b.jpg",
  },
  {
    title: "This Central American Country Has Incredible Rain Forests and Beaches",
    publication: "Travel + Leisure",
    date: "2025",
    url: "https://www.travelandleisure.com/panama-where-to-stay-where-to-eat-11887445",
    property: "Nayara Bocas del Toro",
    coverImage: "/manus-storage/tl-worlds-best-2025_d7a4781b.jpg",
  },
  {
    title: "Postcard From Chile",
    publication: "Cabana Magazine",
    date: "March 2026",
    url: "https://cabanamagazine.com/blogs/travel/postcard-from-chile",
    property: "Nayara Alto Atacama",
    coverImage: "/manus-storage/travel-luxury-atacama_35ec689b.jpg",
  },
  {
    title: "Escape to These Resorts' Private Beaches",
    publication: "Global Traveler",
    date: "April 2026",
    url: "https://www.globaltravelerusa.com/escape-to-these-resorts-private-beaches-for-toes-in-the-sand-pampering/",
    property: "Nayara Bocas del Toro",
    coverImage: "/manus-storage/destinations-world-news_14994318.jpg",
  },
  {
    title: "February 2026 Travel News",
    publication: "JRNY Magazine",
    date: "February 2026",
    url: "https://jrnymag.com/february-2026-news/",
    property: "Nayara Hangaroa",
    coverImage: "/manus-storage/tl-worlds-best-2025_d7a4781b.jpg",
  },
  {
    title: "7 Perfect Destinations for Couples Seeking Adventure",
    publication: "Rocky Mountain Bride",
    date: "April 2026",
    url: "https://www.rockymountainbride.com/blog/seven-perfect-destinations-for-couples-seeking-adventure-and-relaxation-on-their-honeymoon/",
    property: "Nayara Springs",
    coverImage: "/manus-storage/cnt-gold-list-2025_3f071380.jpg",
  },
  {
    title: "15 Best Architecture and Design Firms in Costa Rica",
    publication: "Architizer",
    date: "April 2026",
    url: "https://architizer.com/blog/inspiration/collections/best-architecture-firms-in-costa-rica/",
    property: "Nayara Tented Camp",
    coverImage: "/manus-storage/afar-where-to-go-2024_a290bf6d.jpg",
  },
  {
    title: "9 Best Vacation Spots for Traveling Couples",
    publication: "Cond\u00e9 Nast Traveller ME",
    date: "April 2026",
    url: "https://www.cntravellerme.com/story/best-holiday-destinations-for-couples",
    property: "Nayara Gardens",
    coverImage: "/manus-storage/inspirato-magazine_4f30cbc1.jpg",
  },
  {
    title: "The Driest, Most Beautiful Place on Earth: Atacama",
    publication: "Oyster",
    date: "February 2026",
    url: "https://www.oyster.com/articles/driest-most-beautiful-place-on-earth/",
    property: "Nayara Alto Atacama",
    coverImage: "/manus-storage/travel-luxury-atacama_35ec689b.jpg",
  },
  {
    title: "Ultimate Guide to Spring Break Destinations 2026",
    publication: "TravelPulse",
    date: "March 2026",
    url: "https://www.travelpulse.ca/news/features/ultimate-guide-to-spring-break-destinations-for-every-type-of-traveler-in-2026",
    property: "Nayara Bocas del Toro",
    coverImage: "/manus-storage/destinations-world-news_14994318.jpg",
  },
  {
    title: "This Month's New Hotels",
    publication: "MICHELIN Guide",
    date: "February 2026",
    url: "https://guide.michelin.com/ca/en/article/travel/michelin-guide-hotels-new-additions",
    property: "Nayara Hangaroa",
    coverImage: "/manus-storage/tl-worlds-best-2025_d7a4781b.jpg",
  },
  {
    title: "9 Hotels Where Natural Hot Springs Are the Main Amenity",
    publication: "Cond\u00e9 Nast Traveler",
    date: "March 2026",
    url: "https://www.cntraveler.com/gallery/hotels-around-the-world-where-natural-hot-springs-are-the-main-amenity",
    property: "Nayara Springs",
    coverImage: "/manus-storage/cnt-gold-list-2025_3f071380.jpg",
  },
  {
    title: "Nayara Tented Camp, Costa Rica",
    publication: "Cond\u00e9 Nast Traveller",
    date: "March 2026",
    url: "https://www.cntraveller.com/hotels/arenal/nayara-tented-camp-costa-rica",
    property: "Nayara Tented Camp",
    coverImage: "/manus-storage/afar-where-to-go-2024_a290bf6d.jpg",
  },
  {
    title: "9 Best Vacation Spots for Traveling Couples",
    publication: "Cond\u00e9 Nast Traveler",
    date: "February 2026",
    url: "https://www.cntraveler.com/story/best-vacation-spots-for-traveling-couples",
    property: "Nayara Gardens",
    coverImage: "/manus-storage/inspirato-magazine_4f30cbc1.jpg",
  },
  {
    title: "Honeymoon Roundup \u2013 6 Luxury & Romantic Destinations",
    publication: "Southern Bride",
    date: "February 2026",
    url: "https://www.southernbride.com/blog/venues/honeymoon-roundup-6-luxury-romantic-honeymoon-destinations/",
    property: "Nayara Alto Atacama",
    coverImage: "/manus-storage/travel-luxury-atacama_35ec689b.jpg",
  },
  {
    title: "10 Best Places to Visit in 2026",
    publication: "Kiwi Collection",
    date: "January 2026",
    url: "https://www.kiwicollection.com/blog/10-best-places-to-travel-in-2026/",
    property: "Nayara Hangaroa",
    coverImage: "/manus-storage/tl-worlds-best-2025_d7a4781b.jpg",
  },
  {
    title: "Nayara Springs \u2014 Hotel Review",
    publication: "The Telegraph",
    date: "March 2026",
    url: "https://www.telegraph.co.uk/travel/destinations/central-america/costa-rica/hotels/nayara-springs-hotel/",
    property: "Nayara Springs",
    coverImage: "/manus-storage/cnt-gold-list-2025_3f071380.jpg",
  },
  {
    title: "Nayara Tented Camp",
    publication: "Kiwi Collection",
    date: "March 2026",
    url: "https://www.kiwicollection.com/hotel-detail/nayara-tented-cam",
    property: "Nayara Tented Camp",
    coverImage: "/manus-storage/afar-where-to-go-2024_a290bf6d.jpg",
  },
  {
    title: "Nayara Gardens \u2014 Five-Star Rating",
    publication: "Forbes Travel Guide",
    date: "February 2026",
    url: "https://www.forbestravelguide.com/hotels/costa-rica-costa-rica/nayara-gardens",
    property: "Nayara Gardens",
    coverImage: "/manus-storage/inspirato-magazine_4f30cbc1.jpg",
  },
  {
    title: "Eight Wellness Honeymoon Destinations for 2026",
    publication: "Southern Bride",
    date: "January 2026",
    url: "https://www.southernbride.com/blog/health-and-beauty/eight-wellness-honeymoon-destinations-for-2026/",
    property: "Nayara Bocas del Toro",
    coverImage: "/manus-storage/destinations-world-news_14994318.jpg",
  },
  {
    title: "The Global Spa Awards",
    publication: "The Luxury Spa Edit",
    date: "February 2026",
    url: "https://www.theluxuryspaedit.com/awards/",
    property: "Nayara Springs",
    coverImage: "/manus-storage/cnt-gold-list-2025_3f071380.jpg",
  },
  {
    title: "Where To Go For Spring Break 2026",
    publication: "Southern Living",
    date: "February 2026",
    url: "https://www.southernliving.com/best-spring-break-vacation-ideas-11893846",
    property: "Nayara Tented Camp",
    coverImage: "/manus-storage/afar-where-to-go-2024_a290bf6d.jpg",
  },
  {
    title: "Luxury in the Rainforest: A Complete Guide to Nayara Gardens",
    publication: "Miami Living Magazine",
    date: "February 2026",
    url: "https://www.miamilivingmagazine.com/post/luxury-resort-hotel-nayara-gardens-rainforest-costa-rica",
    property: "Nayara Gardens",
    coverImage: "/manus-storage/inspirato-magazine_4f30cbc1.jpg",
  },
  {
    title: "Central America Travel Guide: 2026's Best Destinations",
    publication: "TravelPulse",
    date: "January 2026",
    url: "https://www.travelpulse.com/news/destinations/central-america-travel-guide-2026-s-best-destinations-events-attractions-and-more",
    property: "Nayara Bocas del Toro",
    coverImage: "/manus-storage/destinations-world-news_14994318.jpg",
  },
  {
    title: "Micro-Retirements and Whycations Redefine 2026",
    publication: "CND English",
    date: "February 2026",
    url: "https://www.cndenglish.com/tourism/micro-retirements-and-whycations-redefine-2026-work-life-balance",
    property: "Nayara Springs",
    coverImage: "/manus-storage/cnt-gold-list-2025_3f071380.jpg",
  },
  {
    title: "7 Romantic Places to Get Engaged This Year",
    publication: "Fora Travel",
    date: "February 2026",
    url: "https://www.foratravel.com/the-journal/romantic-places-to-get-engaged",
    property: "Nayara Tented Camp",
    coverImage: "/manus-storage/afar-where-to-go-2024_a290bf6d.jpg",
  },
  {
    title: "35 Idyllic Wellness Retreats for Your Next Getaway",
    publication: "Veranda",
    date: "February 2026",
    url: "https://www.veranda.com/travel/g35269429/wellness-retreats/",
    property: "Nayara Springs",
    coverImage: "/manus-storage/cnt-gold-list-2025_3f071380.jpg",
  },
  {
    title: "This Small Town in Costa Rica Is Home to Emerald Pools and Luxe Resorts",
    publication: "Travel + Leisure",
    date: "February 2026",
    url: "https://www.travelandleisure.com/la-fortuna-costa-rica-travel-guide-11887475",
    property: "Nayara Tented Camp",
    coverImage: "/manus-storage/afar-where-to-go-2024_a290bf6d.jpg",
  },
  {
    title: "The Best Hotels in Costa Rica",
    publication: "The Hotel Guru",
    date: "January 2026",
    url: "https://www.thehotelguru.com/best-hotels-in/costa-rica",
    property: "Nayara Springs",
    coverImage: "/manus-storage/cnt-gold-list-2025_3f071380.jpg",
  },
  {
    title: "Intimate and Colourful Rainforest Wedding",
    publication: "Boho Weddings",
    date: "January 2026",
    url: "https://www.boho-weddings.com/265096/intimate-and-colourful-rainforest-wedding/",
    property: "Nayara Tented Camp",
    coverImage: "/manus-storage/afar-where-to-go-2024_a290bf6d.jpg",
  },
  {
    title: "This National Park has 2 Volcanos, Hot Springs, and Scenic Hiking Trails",
    publication: "Travel + Leisure",
    date: "January 2026",
    url: "https://www.travelandleisure.com/costa-rica-arenal-national-park-best-time-to-visit-11883700",
    property: "Nayara Tented Camp",
    coverImage: "/manus-storage/afar-where-to-go-2024_a290bf6d.jpg",
  },
  {
    title: "14 Hotels Where You Can Swim in Your Own Private Pool",
    publication: "Cond\u00e9 Nast Traveler",
    date: "January 2026",
    url: "https://www.cntraveler.com/gallery/hotels-around-the-world-where-you-can-swim-in-your-own-private-pool",
    property: "Nayara Tented Camp",
    coverImage: "/manus-storage/afar-where-to-go-2024_a290bf6d.jpg",
  },
];

function AwardsHighlightSection() {
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
    const cardWidth = el.querySelector("a")?.offsetWidth || 280;
    el.scrollBy({ left: dir === "right" ? cardWidth + 20 : -(cardWidth + 20), behavior: "smooth" });
  };

  return (
    <section className="py-14 md:py-20" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto">
        <div className="px-6 md:px-10 flex items-end justify-between mb-10 md:mb-14">
          <div>
            <AnimateOnScroll variants={fadeUp}>
              <SectionLabel>Recognition</SectionLabel>
            </AnimateOnScroll>
            <TextReveal as="h2" delay={0.1}>
              <span
                className="text-2xl md:text-3xl lg:text-[36px] leading-[1.15] tracking-wide"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
              >
                Recognized by the Most Trusted Voices in Travel
              </span>
            </TextReveal>
          </div>
          {/* Desktop arrows — permanently espresso, always visible */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-10 h-10 flex items-center justify-center bg-[#3B2B26] text-[#F7F5F0] transition-all duration-200 hover:opacity-80 hover:scale-105 disabled:opacity-40 disabled:hover:opacity-40 disabled:hover:scale-100 disabled:cursor-default"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-10 h-10 flex items-center justify-center bg-[#3B2B26] text-[#F7F5F0] transition-all duration-200 hover:opacity-80 hover:scale-105 disabled:opacity-40 disabled:hover:opacity-40 disabled:hover:scale-100 disabled:cursor-default"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        {/* Horizontal scroll container — editorial magazine-cover cards */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto px-6 md:px-10 pb-4 scrollbar-hide"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
        >
          {editorialCardsHome.map((card, i) => (
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
          loading="lazy"
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
                    style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
                  >
                    {card.publication}
                  </span>
                  <h3
                    className="text-white text-[14px] md:text-[15px] leading-[1.35] mt-1.5"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                  >
                    {card.title} {card.date}
                  </h3>
                </div>
              </div>
              {/* Property name below image — prominent + See Article pill */}
              <div className="pt-4 pb-1 flex items-center justify-between">
                <span
                  className="text-[18px] md:text-[20px] text-[#3B2B26] tracking-[0.01em]"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                >
                  {card.property}
                </span>
                <span
                  className="text-[9px] tracking-[0.12em] uppercase px-3 py-1.5 rounded-full border border-[#3B2B26]/30 text-[#3B2B26]/70 group-hover:bg-[#3B2B26] group-hover:text-[#F7F5F0] group-hover:border-[#3B2B26] transition-all duration-300"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                >
                  See Article
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA to full awards page */}
        <AnimateOnScroll variants={fadeUp} delay={0.3}>
          <div className="mt-12 text-center">
            <Link
              href="/awards"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-[11px] tracking-[0.12em] uppercase transition-all duration-500 hover:!bg-[#3B2B26]"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, backgroundColor: "#3B2B26", color: "#F7F5F0" }}
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

/* ─── Journal card type ─── */
interface JournalCardData {
  id: string;
  label: string;
  title: string;
  image: string;
  href: string | null;
  youtubeId?: string;
  listenUrl?: string;
  duration?: string;
  languageVariants?: { en: string; enDuration?: string; es: string; esDuration?: string };
  external: boolean;
  cta: "read" | "listen" | "watch-listen" | "watch" | "lang-toggle";
}

/* ═══════════════════════════════════════════════════════════════
   JOURNAL , Horizontal slider: dynamically pulls from shared journal data
   Same order as the /journal page (CURATED_IDS first, then remainder)
   ═══════════════════════════════════════════════════════════════ */

// Same curated order as the Journal page
const HOMEPAGE_CURATED_IDS: string[] = [
  "hitorangi-rapanui",
  "experiential-travel-2026",
  "atacama-sustainability",
  "family-bucket-list",
  "archaeologist-rapanui",
  "conde-nast-bocas",
  "leo-luxury-travel-innovators",
  "three-kitchens-one-rainforest",
  "hangaroa-sustainability",
  "7-michelin-keys",
  "leo-suite-success",
  "arenal-timeless-wonder",
  "stargazing-atacama",
  "treehouse-dreams",
  "nature-based-wellness-colors",
  "mars-atacama",
  "toucans-arenal",
  "pura-vida",
  "edge-habitability",
  "wildlife-arenal-bocas",
  "sunlit-sustainability",
  "solo-travel-female",
  "oasis-atacama",
  "nayara-by-night",
  "green-globe",
];

function buildHomepageJournalCards(): JournalCardData[] {
  const map = new Map(journalEntries.map((e) => [e.id, e]));
  const seen = new Set<string>();
  const result: JournalEntry[] = [];
  for (const id of HOMEPAGE_CURATED_IDS) {
    if (seen.has(id)) continue;
    const entry = map.get(id);
    if (entry) { result.push(entry); seen.add(id); }
  }
  for (const entry of journalEntries) {
    if (!seen.has(entry.id)) { result.push(entry); seen.add(entry.id); }
  }
  // Map JournalEntry to JournalCardData
  return result.map((entry) => {
    const isVideo = entry.type === "video";
    const isAudio = entry.type === "audio";
    let cta: JournalCardData["cta"] = "read";
    if (isVideo) cta = "watch";
    else if (isAudio) cta = "listen";
    if (isVideo && entry.languageVariants) cta = "lang-toggle" as any;
    return {
      id: entry.id,
      label: isVideo ? "Watch" : isAudio ? "Listen" : "Read",
      title: entry.title,
      image: entry.image,
      href: entry.url || null,
      youtubeId: entry.youtubeId,
      duration: entry.duration,
      languageVariants: entry.languageVariants,
      external: entry.url ? entry.url.startsWith("http") : false,
      cta,
    };
  });
}

const HOMEPAGE_JOURNAL_CARDS = buildHomepageJournalCards();

function NayaraJournalSection() {
  const [playingId, setPlayingId] = useState<string | null>(null); // can be "id" or "id-en" or "id-es"
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [mobileCard, setMobileCard] = useState(0);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  const allCards = HOMEPAGE_JOURNAL_CARDS;
  const totalPages = Math.ceil(allCards.length / 3);

  const scrollToPage = (page: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const pageWidth = el.clientWidth;
    el.scrollTo({ left: page * pageWidth, behavior: "smooth" });
    setCurrentPage(page);
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const pageWidth = el.clientWidth;
    const newPage = Math.round(el.scrollLeft / pageWidth);
    setCurrentPage(newPage);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el?.removeEventListener("scroll", handleScroll);
  }, []);
  // Mobile swipe handlers (same pattern as Awards)
  const scrollToMobileCard = (idx: number) => {
    const el = mobileScrollRef.current;
    if (!el) return;
    el.scrollTo({ left: idx * el.clientWidth, behavior: "smooth" });
    setMobileCard(idx);
  };
  const handleMobileScroll = useCallback(() => {
    const el = mobileScrollRef.current;
    if (!el) return;
    const newIdx = Math.round(el.scrollLeft / el.clientWidth);
    setMobileCard(newIdx);
  }, []);
  useEffect(() => {
    const el = mobileScrollRef.current;
    if (el) el.addEventListener("scroll", handleMobileScroll, { passive: true });
    return () => el?.removeEventListener("scroll", handleMobileScroll);
  }, [handleMobileScroll]);

  return (
    <section
      className="relative py-14 md:py-20 px-6 md:px-10 overflow-hidden"
      style={{ backgroundColor: "#f7f5f0" }}
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
        {/* Header with arrows on right, same as Recognition */}
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <AnimateOnScroll variants={fadeUp}>
              <SectionLabel>Stories</SectionLabel>
            </AnimateOnScroll>
            <TextReveal as="h2" delay={0.1}>
              <span
                className="text-2xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-wide"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#3B2B26" }}
              >
                Journal
              </span>
            </TextReveal>
          </div>
          {/* Desktop arrows — permanently espresso, always visible */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scrollToPage(currentPage - 1)}
              disabled={currentPage === 0}
              className="w-10 h-10 flex items-center justify-center bg-[#3B2B26] text-[#F7F5F0] transition-all duration-200 hover:opacity-80 hover:scale-105 disabled:opacity-40 disabled:hover:opacity-40 disabled:hover:scale-100 disabled:cursor-default"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            </button>
            <button
              onClick={() => scrollToPage(currentPage + 1)}
              disabled={currentPage >= totalPages - 1}
              className="w-10 h-10 flex items-center justify-center bg-[#3B2B26] text-[#F7F5F0] transition-all duration-200 hover:opacity-80 hover:scale-105 disabled:opacity-40 disabled:hover:opacity-40 disabled:hover:scale-100 disabled:cursor-default"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        {/* Desktop: Horizontal slider , 3 cards visible at a time */}
        <div className="hidden md:block relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide"
            style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
          >
            {Array.from({ length: totalPages }, (_, i) => i).map((pageIdx) => (
              <div
                key={pageIdx}
                className="flex-shrink-0 w-full grid grid-cols-3 gap-5"
                style={{ scrollSnapAlign: "start" }}
              >
                {allCards.slice(pageIdx * 3, pageIdx * 3 + 3).map((card) => (
                  <div key={card.id}>
                    <JournalTeaserCard
                      card={card}
                      isPlaying={playingId === card.id || playingId === `${card.id}-en` || playingId === `${card.id}-es`}
                      playingLang={playingId === `${card.id}-es` ? "es" : playingId === `${card.id}-en` || playingId === card.id ? "en" : undefined}
                      onPlayEN={() => setPlayingId(`${card.id}-en`)}
                      onPlayES={() => setPlayingId(`${card.id}-es`)}
                      onPlay={() => setPlayingId(card.id)}
                      onClose={() => setPlayingId(null)}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

        </div>
        {/* Mobile: 1 card at a time, swipeable (same as Awards) */}
        <div className="md:hidden relative">
          <div
            ref={mobileScrollRef}
            className="flex overflow-x-auto scrollbar-hide"
            style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
          >
            {allCards.map((card) => (
              <div key={card.id} className="flex-shrink-0 w-full px-1" style={{ scrollSnapAlign: "start" }}>
                <JournalTeaserCard
                  card={card}
                  isPlaying={playingId === card.id || playingId === `${card.id}-en` || playingId === `${card.id}-es`}
                  playingLang={playingId === `${card.id}-es` ? "es" : playingId === `${card.id}-en` || playingId === card.id ? "en" : undefined}
                  onPlayEN={() => setPlayingId(`${card.id}-en`)}
                  onPlayES={() => setPlayingId(`${card.id}-es`)}
                  onPlay={() => setPlayingId(card.id)}
                  onClose={() => setPlayingId(null)}
                />
              </div>
            ))}
          </div>
          {/* Progress bar */}
          <div className="mt-6 mx-auto w-32 h-[3px] rounded-full overflow-hidden" style={{ backgroundColor: "rgba(59,43,38,0.15)" }}>
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{
                backgroundColor: "#3B2B26",
                width: `${100 / allCards.length}%`,
                marginLeft: `${(mobileCard / allCards.length) * 100}%`,
              }}
            />
          </div>
         </div>
        {/* CTA below cards , matches Awards pattern */}
        <AnimateOnScroll variants={fadeUp} delay={0.3}>
          <div className="mt-12 text-center">
            <Link
              href="/journal"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-[11px] tracking-[0.12em] uppercase transition-all duration-500 hover:!bg-[#3B2B26]"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, backgroundColor: "#3B2B26", color: "#F7F5F0" }}
            >
              Enter the Journal
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
function JournalTeaserCard({
  card,
  isPlaying,
  playingLang,
  onPlay,
  onPlayEN,
  onPlayES,
  onClose,
}: {
  card: JournalCardData;
  isPlaying: boolean;
  playingLang?: "en" | "es";
  onPlay: () => void;
  onPlayEN?: () => void;
  onPlayES?: () => void;
  onClose: () => void;
}) {
  const pillBase = "inline-flex items-center gap-2 h-9 px-6 rounded-full text-[11px] tracking-[0.12em] uppercase hover:opacity-80 transition-all cursor-pointer font-medium";
  const pillStyle = { backgroundColor: "#3B2B26", color: "#F7F5F0" } as const;
  const bodyFont = { fontFamily: "var(--font-body)", fontWeight: 500 } as const;
  const displayFont = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
  const isDummy = !card.image;

  const handleCardClick = () => {
    if (card.cta === "lang-toggle" && card.languageVariants) {
      onPlayEN?.(); // default to EN
      return;
    }
    if (card.cta === "watch" && card.youtubeId) {
      onPlay();
    } else if (card.href) {
      if (card.external || card.href.startsWith("http")) {
        window.open(card.href, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = card.href;
      }
    }
  };

  return (
    <div className="flex flex-col cursor-pointer" onClick={!isPlaying ? handleCardClick : undefined}>
    <div className="group relative w-full overflow-hidden rounded-lg" style={{ aspectRatio: "1/1", backgroundColor: isDummy ? "#d6d0c7" : "#1c1917" }}>
      {isPlaying && (card.youtubeId || card.languageVariants) ? (
        <>
          <iframe
            src={`https://www.youtube.com/embed/${card.languageVariants ? (playingLang === "es" ? card.languageVariants.es : card.languageVariants.en) : card.youtubeId}?autoplay=1&rel=0`}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title={card.title}
          />
          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-colors text-sm"
          >
            ✕
          </button>
        </>
      ) : isDummy ? (
        <>
          {/* Dummy placeholder , warm gray square with type badge */}
          <div className="absolute top-4 left-4">
            <span
              className="inline-block px-3 py-1 rounded-full text-[9px] tracking-[0.25em] uppercase"
              style={{ ...bodyFont, backgroundColor: "#3B2B26", color: "#F7F5F0" }}
            >
              {card.label}
            </span>
          </div>
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
          {/* Language toggle — top-left for lang-toggle cards */}
          {card.cta === "lang-toggle" && card.languageVariants && (
            <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
              <button
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); onPlayEN?.(); }}
                className="inline-flex items-center gap-1.5 h-7 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] tracking-[0.12em] uppercase hover:bg-white/20 transition-all"
                style={bodyFont}
              >
                <span className="text-[11px]">🇺🇸</span>
                English
              </button>
              <button
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); onPlayES?.(); }}
                className="inline-flex items-center gap-1.5 h-7 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] tracking-[0.12em] uppercase hover:bg-white/20 transition-all"
                style={bodyFont}
              >
                <span className="text-[11px]">🇪🇸</span>
                Español
              </button>
            </div>
          )}
          {/* Type label — bottom-left */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            <span
              className="inline-flex items-center gap-1.5 h-7 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/60 text-[10px] tracking-[0.12em] uppercase"
              style={bodyFont}
            >
              {card.cta === "watch" || card.cta === "lang-toggle" ? (
                <Play className="w-2.5 h-2.5 fill-current" />
              ) : (
                <ArrowUpRight className="w-3 h-3" />
              )}
              {card.cta === "lang-toggle" ? "Watch" : card.label}
            </span>
            {card.duration && (card.cta === "watch" || card.cta === "lang-toggle") && (
              <span
                className="inline-flex items-center h-7 px-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/50 text-[9px] tracking-[0.08em]"
                style={bodyFont}
              >
                {card.duration}
              </span>
            )}
          </div>
        </>
      )}
    </div>
    {/* Title below the card image */}
    <div className="pt-4 pb-2">
      <h3 className="text-[#3B2B26] text-[14px] md:text-[15px] leading-[1.3]" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
        {card.title}
      </h3>
    </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CONTENT HUB , Journal (Blog + Podcast + FAQ) & Press/Awards
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

/* ═══════════════════════════════════════════════════════════════
   THE NAYARA COLLECTION , AI-optimized structured narrative
   Placed between Timeline and Awards
   ═══════════════════════════════════════════════════════════════ */
const collectionData = [
  {
    name: "Nayara Gardens",
    chapter: "The Rainforest Adventure",
    location: "Arenal Volcano, Costa Rica",
    positioning: "The original Nayara , a village of private villas and casitas woven into the rainforest canopy at the foot of Arenal Volcano. Family-friendly, with bespoke excursions from hanging bridges to chocolate tours.",
    audience: "Families & Couples",
    route: "/gardens",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/prop-gardens_5931d8af.jpg",
  },
  {
    name: "Nayara Springs",
    chapter: "The Hot Springs Sanctuary",
    location: "Arenal Volcano, Costa Rica",
    positioning: "An adults-only retreat where every villa has its own private thermal plunge pool fed by volcanic hot springs. Three Michelin Keys. The first hotel in Costa Rica to earn that distinction.",
    audience: "Adults Only",
    route: "/springs",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-villa-plunge-pool-straight_a5d505d1.webp",
  },
  {
    name: "Nayara Tented Camp",
    chapter: "The Luxury Tented Camp",
    location: "Arenal Volcano, Costa Rica",
    positioning: "Clifftop tents and suites perched above the rainforest canopy with unobstructed volcano views. Best Resort in Central America, four of the last five years , Travel + Leisure.",
    audience: "Families & Couples",
    route: "/tented-camp",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/19B9D444-0A7C-4C29-93A3-A8C0DFDFBD31_aa5cae9d.JPEG",
  },
  {
    name: "Nayara Alto Atacama",
    chapter: "Where Desert Meets Sky",
    location: "San Pedro de Atacama, Chile",
    positioning: "A desert lodge in the driest desert on Earth, where salt flats, geysers, and the clearest night skies in the Southern Hemisphere converge. Two Michelin Keys.",
    audience: "Families Welcome",
    route: "/alto-atacama",
    image: "/manus-storage/alto-atacama-resort_38eead8b.jpeg",
  },
  {
    name: "Nayara Bocas del Toro",
    chapter: "The Adults-Only Archipelago",
    location: "Bocas del Toro, Panama",
    positioning: "Overwater villas and rainforest treehouses on a private island in Panama's Caribbean archipelago. Adults-only, solar-powered, and surrounded by coral reef. Two Michelin Keys. Number one in Central America , Condé Nast Traveler.",
    audience: "Adults Only",
    route: "/bocas-del-toro",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/prop-bocas_6adf9525.jpg",
  },
  {
    name: "Nayara Hangaroa",
    chapter: "The Land of Giants",
    location: "Rapa Nui (Easter Island), Chile",
    positioning: "On the most remote inhabited island on Earth, a lodge that honors the Rapa Nui culture and its monumental stone guardians. The only luxury property on Easter Island.",
    audience: "Families Welcome",
    route: "/hangaroa",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/prop-hangaroa_a0a3fad0.jpg",
  },
];

function CollectionNarrativeSection() {
  return (
    <section className={sectionPadding} style={{ backgroundColor: "#f4f1eb" }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <SectionLabel>The Nayara Collection</SectionLabel>
        </AnimateOnScroll>
        <TextReveal as="h2" className="mb-6" delay={0.1}>
          <span
            className="text-2xl md:text-4xl lg:text-[38px] leading-[1.15] tracking-wide"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
          >
            One Philosophy, Six Landscapes
          </span>
        </TextReveal>
        <AnimateOnScroll variants={fadeUp} delay={0.2}>
          <p
            className="text-[15px] leading-[1.8] max-w-[680px] mb-14"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
          >
            Each Nayara property exists because a landscape demanded it. From volcanic rainforest to the driest desert on Earth, from a Caribbean archipelago to the most remote island in the Pacific , the collection is a single story told across six chapters.
          </p>
        </AnimateOnScroll>

        {/* Collection grid , 2 columns on desktop, 1 on mobile */}
        <StaggerOnScroll variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {collectionData.map((item) => (
            <motion.div key={item.route} variants={fadeUp}>
              <Link href={item.route} className="group block">
                <div className="flex gap-5 items-start">
                  {/* Thumbnail */}
                  <div className="w-[120px] h-[90px] flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  {/* Text */}
                  <div className="flex-1">
                    <p
                      className="text-[10px] tracking-[0.2em] uppercase mb-0.5"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: item.audience === "Adults Only" ? "#8B5E3C" : PALETTE.textSecondary }}
                    >
                      {item.chapter} · {item.audience}
                    </p>
                    <p
                      className="text-[10px] tracking-[0.08em] mb-1"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 400, color: PALETTE.textSecondary, opacity: 0.7 }}
                    >
                      {item.location}
                    </p>
                    <h3
                      className="text-[16px] md:text-[18px] mb-1.5"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
                    >
                      {item.name}
                    </h3>
                    <p
                      className="text-[13px] leading-[1.7]"
                      style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
                    >
                      {item.positioning}
                    </p>
                    <p
                      className="text-[10px] tracking-[0.1em] mt-2 uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.accent }}
                    >
                      Explore {item.name.replace("Nayara ", "")} →
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </StaggerOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FIND YOUR NAYARA , Combined audience segmentation + journey pairings
   Two categories: Romance & Wellness (adults-only) and Adventure & Discovery (all)
   Plus twin-center journey suggestions
   ═══════════════════════════════════════════════════════════════ */
const findYourNayaraData = [
  {
    category: "Romance & Wellness",
    tag: "Adults Only",
    tagColor: "#8B5E3C",
    description: "For couples seeking seclusion, thermal wellness, and uninterrupted intimacy. No children, no distractions , just two people and extraordinary nature.",
    properties: [
      { name: "Nayara Springs", chapter: "The Hot Springs Sanctuary", detail: "Private volcanic plunge pools, three Michelin Keys, rainforest seclusion", route: "/springs" },
      { name: "Nayara Bocas del Toro", chapter: "The Adults-Only Archipelago", detail: "Overwater villas, Caribbean reef, solar-powered island privacy", route: "/bocas-del-toro" },
    ],
    journey: {
      title: "Hot Springs to Caribbean",
      from: "Arenal, Costa Rica",
      to: "Bocas del Toro, Panama",
      desc: "Begin with volcanic thermal pools in the rainforest, then fly south to overwater villas on a private Caribbean island. Two adults-only sanctuaries, one unforgettable journey.",
    },
  },
  {
    category: "Adventure, Exploration & Discovery",
    tag: "Families Welcome",
    tagColor: "#525642",
    description: "For families, explorers, and anyone who believes the best experiences happen where landscape overwhelms and culture runs deep , from rainforest canopy to desert stargazing to ancient stone giants.",
    properties: [
      { name: "Nayara Gardens", chapter: "The Rainforest Adventure", detail: "Volcano-view villas, wildlife tours, hanging bridges, family suites", route: "/gardens" },
      { name: "Nayara Tented Camp", chapter: "The Luxury Tented Camp", detail: "Clifftop glamping, canopy walks, wildlife encounters at dawn", route: "/tented-camp" },
      { name: "Nayara Alto Atacama", chapter: "Where Desert Meets Sky", detail: "Salt flats, geysers, flamingo lagoons, the clearest night skies on Earth", route: "/alto-atacama" },
      { name: "Nayara Hangaroa", chapter: "The Land of Giants", detail: "Moai guardians, Polynesian culture, the most remote island on Earth", route: "/hangaroa" },
    ],
    journey: {
      title: "Rainforest to Desert to Stone Giants",
      from: "Costa Rica",
      to: "Chile",
      desc: "Trade toucans and thermal pools for salt flats and the clearest stargazing on Earth, then continue to Easter Island's monumental Moai. Three biomes, one collection.",
    },
  },
];

function FindYourNayaraSection() {
  return (
    <section className={sectionPadding} style={{ backgroundColor: "#f4f1eb" }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <SectionLabel>Find Your Nayara</SectionLabel>
        </AnimateOnScroll>
        <TextReveal as="h2" className="mb-6" delay={0.1}>
          <span
            className="text-2xl md:text-4xl lg:text-[38px] leading-[1.15] tracking-wide"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
          >
            Who Each Nayara Is For
          </span>
        </TextReveal>
        <AnimateOnScroll variants={fadeUp} delay={0.2}>
          <p
            className="text-[15px] leading-[1.8] max-w-[680px] mb-14"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
          >
            Not every Nayara is for every traveler , and that's by design. Two are exclusively for adults. Four welcome everyone. All six share one philosophy: reveal the place, don't replace it.
          </p>
        </AnimateOnScroll>

        <StaggerOnScroll variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {findYourNayaraData.map((segment, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="p-6 md:p-8"
              style={{ backgroundColor: "rgba(255,255,255,0.5)", border: `1px solid ${PALETTE.divider}` }}
            >
              {/* Category tag */}
              <span
                className="inline-block text-[9px] tracking-[0.2em] uppercase px-3 py-1 mb-4"
                style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: segment.tagColor, border: `1px solid ${segment.tagColor}` }}
              >
                {segment.tag}
              </span>
              <h3
                className="text-[20px] md:text-[22px] mb-3"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
              >
                {segment.category}
              </h3>
              <p
                className="text-[13px] leading-[1.7] mb-6"
                style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
              >
                {segment.description}
              </p>
              {/* Properties in this segment */}
              <div className="flex flex-col gap-4 mb-8">
                {segment.properties.map((prop) => (
                  <Link key={prop.route} href={prop.route} className="group block">
                    <p
                      className="text-[10px] tracking-[0.15em] uppercase mb-0.5"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.textSecondary }}
                    >
                      {prop.chapter}
                    </p>
                    <p
                      className="text-[15px] group-hover:underline transition-all"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
                    >
                      {prop.name}
                    </p>
                    <p
                      className="text-[12px] leading-[1.6] mt-0.5"
                      style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
                    >
                      {prop.detail}
                    </p>
                  </Link>
                ))}
              </div>
              {/* Journey pairing */}
              <div
                className="pt-6"
                style={{ borderTop: `1px solid ${PALETTE.divider}` }}
              >
                <p
                  className="text-[10px] tracking-[0.2em] uppercase mb-2"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.textSecondary }}
                >
                  Suggested Journey
                </p>
                <h4
                  className="text-[17px] mb-2"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
                >
                  {segment.journey.title}
                </h4>
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-[11px] tracking-[0.05em]"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.text }}
                  >
                    {segment.journey.from}
                  </span>
                  <svg className="w-4 h-4 flex-shrink-0" style={{ color: PALETTE.textSecondary }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                  <span
                    className="text-[11px] tracking-[0.05em]"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.text }}
                  >
                    {segment.journey.to}
                  </span>
                </div>
                <p
                  className="text-[13px] leading-[1.7]"
                  style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
                >
                  {segment.journey.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerOnScroll>
      </div>
    </section>
  );
}

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
   INSTAGRAM GRID , Single row, 6 images from @nayararesorts
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

        {/* Single-row grid , 4 items */}
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
                  preload="metadata"
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

/* ═══════════════════════════════════════════════════════════════
   BRAND CTA , Rotating pillar slider before footer
   ═══════════════════════════════════════════════════════════════ */
const CTA_PILLARS = [
  { label: "Experiences", route: "/experiences" },
  { label: "Wellness & Spa", route: "/wellness" },
  { label: "Gastronomy", route: "/gastronomy" },
  { label: "Sustainability", route: "/sustainability" },
];

function BrandCTA() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CTA_PILLARS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goNext = () => setActiveIndex((prev) => (prev + 1) % CTA_PILLARS.length);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + CTA_PILLARS.length) % CTA_PILLARS.length);

  return (
    <section
      className="relative py-28 md:py-40 px-6 overflow-hidden"
      style={{ backgroundColor: "#3B2B26" }}
    >

      <div className="relative z-10 max-w-[900px] mx-auto text-center">
        {/* Decorative line */}
        <div className="w-16 h-px mx-auto mb-8" style={{ backgroundColor: "rgba(176,141,87,0.4)" }} />

        <p
          className="text-[10px] tracking-[0.4em] uppercase mb-6"
          style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "rgba(176,141,87,0.7)" }}
        >
          Begin Your Journey
        </p>

        <h2
          className="text-3xl md:text-5xl lg:text-[56px] leading-[1.1] tracking-wide mb-8"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#FFFFFF" }}
        >
          Six Landscapes.<br />One Invitation.
        </h2>

        <p
          className="text-base md:text-lg leading-relaxed max-w-[600px] mx-auto mb-14"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300, color: "rgba(255,255,255,0.7)" }}
        >
          From volcanic rainforest to the driest desert on Earth, from a Caribbean archipelago to the most remote island in the Pacific , discover which Nayara calls to you.
        </p>

        {/* Rotating CTA slider */}
        <div className="flex items-center justify-center gap-6">
          {/* Left arrow */}
          <button
            onClick={goPrev}
            className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
            style={{ backgroundColor: "#3B2B26", color: "#FFFFFF" }}
            aria-label="Previous"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </button>

          {/* Sliding pill */}
          <a
            href={CTA_PILLARS[activeIndex].route}
            className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full border transition-all duration-500 hover:scale-[1.03] min-w-[280px] justify-center"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 500,
              fontSize: "12px",
              letterSpacing: "0.18em",
              textTransform: "uppercase" as const,
              color: "#FFFFFF",
              backgroundColor: "#3B2B26",
              borderColor: "#3B2B26",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={activeIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                Explore {CTA_PILLARS[activeIndex].label}
              </motion.span>
            </AnimatePresence>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>

          {/* Right arrow */}
          <button
            onClick={goNext}
            className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
            style={{ backgroundColor: "#3B2B26", color: "#FFFFFF" }}
            aria-label="Next"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {CTA_PILLARS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="w-1.5 h-1.5 rounded-full transition-all duration-300"
              style={{
                backgroundColor: i === activeIndex ? "rgba(176,141,87,0.9)" : "rgba(176,141,87,0.25)",
                transform: i === activeIndex ? "scale(1.4)" : "scale(1)",
              }}
              aria-label={`Go to ${CTA_PILLARS[i].label}`}
            />
          ))}
        </div>

        {/* Decorative line */}
        <div className="w-16 h-px mx-auto mt-16" style={{ backgroundColor: "rgba(176,141,87,0.2)" }} />
      </div>
    </section>
    );
}

/* ═══════════════════════════════════════════════════════════════
   CONTINUE EXPLORING — 6 Pillar Cards (Experiences, Wellness,
   Sustainability, Gastronomy, Family, Romance)
   ═══════════════════════════════════════════════════════════════ */
const EXPLORE_PILLARS = [
  {
    title: "Experiences",
    subtitle: "Journeys Beyond the Ordinary",
    image: "/manus-storage/explore-experiences_8233266e.jpg",
    route: "/experiences",
  },
  {
    title: "Wellness",
    subtitle: "Rituals of Restoration",
    image: "/manus-storage/explore-wellness_8b730376.jpg",
    route: "/wellness",
  },
  {
    title: "Sustainability",
    subtitle: "Rooted in the Land",
    image: "/manus-storage/explore-sustainability_d467f3c6.jpg",
    route: "/sustainability",
  },
  {
    title: "Gastronomy",
    subtitle: "Terroir on Every Plate",
    image: "/manus-storage/explore-gastronomy_4e1774ab.jpg",
    route: "/gastronomy",
  },
  {
    title: "Family",
    subtitle: "Adventures for All Ages",
    image: "/manus-storage/explore-family_c1600154.jpg",
    route: "/family-expeditions",
  },
  {
    title: "Romance",
    subtitle: "Moments Made for Two",
    image: "/manus-storage/explore-romance_f85918e2.png",
    route: "/romance",
  },
];

function ContinueExploringSection() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-10" style={{ backgroundColor: "#f7f5f0" }}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.3em] uppercase mb-3 text-[#5a4a3a]/60"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Continue Exploring
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-wide text-[#3a2a1a] mb-12 md:mb-16"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Discover Our World
          </h2>
        </AnimateOnScroll>

        {/* Card grid — 2 cols mobile, 3 cols desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {EXPLORE_PILLARS.map((pillar, idx) => (
            <AnimateOnScroll
              key={pillar.title}
              variants={fadeUp}
              delay={idx * 0.08}
            >
              <Link href={pillar.route} className="group block">
                {/* Square image container */}
                <div className="relative aspect-square overflow-hidden mb-4">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Title + subtitle */}
                <h3
                  className="text-base md:text-lg tracking-wide text-[#3a2a1a] mb-1"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="text-xs md:text-sm text-[#5a4a3a]/60 mb-3"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                >
                  {pillar.subtitle}
                </p>

                {/* Transparent pill */}
                <span
                  className="inline-block px-4 py-1.5 rounded-full border border-[#3a2a1a]/30 text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-[#3a2a1a]/70 group-hover:border-[#3a2a1a]/60 group-hover:text-[#3a2a1a] transition-all duration-300"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                >
                  Explore
                </span>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   NAYARA STORY — Brand statement + Plan Your Stay CTA
   Placed between Journal section and Footer
   ═══════════════════════════════════════════════════════════════ */
function NayaraStorySection() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-10" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-4xl mx-auto text-center">
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[10px] tracking-[0.3em] uppercase mb-5"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "#3B2B26", opacity: 0.4 }}
          >
            The Nayara Story
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll variants={fadeUp} delay={0.1}>
          <h2
            className="text-2xl md:text-4xl lg:text-[42px] leading-[1.15] tracking-wide mb-8"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#3B2B26" }}
          >
            Award-Winning Properties Defined by Destination
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll variants={fadeUp} delay={0.2}>
          <p
            className="text-[15px] leading-[1.8] mb-5 max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300, color: "#5a4a3a" }}
          >
            Our resorts belong to the land. In Costa Rica, lush rainforest and mineral hot springs greet you at the foot of Arenal Volcano. In Chile's Atacama, the world's driest desert becomes a place of stillness and discovery. On Easter Island, silent giants stand guard and Rapa Nui culture is ever-present. On a private island on Panama's Caribbean coast, overwater villas rise above the reef.
          </p>
          <p
            className="text-[15px] leading-[1.8] max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300, color: "#5a4a3a" }}
          >
            Six properties. Three countries. All designed to bring guests back to nature and leave every ecosystem stronger than we found it.
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll variants={fadeUp} delay={0.3}>
          <p
            className="text-[11px] tracking-[0.2em] uppercase mt-12 mb-6"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "#3B2B26", opacity: 0.5 }}
          >
            Plan Your Stay
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {[
              { label: "Nayara Gardens", id: "gardens" },
              { label: "Nayara Springs", id: "springs" },
              { label: "Nayara Tented Camp", id: "tented-camp" },
              { label: "Nayara Alto Atacama", id: "alto-atacama" },
              { label: "Nayara Hangaroa", id: "hangaroa" },
              { label: "Nayara Bocas del Toro", id: "bocas-del-toro" },
            ].map((prop) => (
              <a
                key={prop.id}
                href={BOOKING_URLS[prop.id]}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[10px] tracking-[0.1em] uppercase border transition-all duration-400 hover:bg-[#3B2B26] hover:!text-white hover:border-[#3B2B26] active:scale-90 active:opacity-80"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "#3B2B26", borderColor: "#3B2B26" }}
              >
                {prop.label}
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
