/**
 * NAYARA TENTED CAMP — Arenal, Costa Rica
 * Visual Identity: Canvas Sage palette, cinematic motion, video-first, gradient transitions
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import NativeVideo from "@/components/NativeVideo";
import { useIsMobile } from "@/hooks/useMobile";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import RoomsSlider from "@/components/RoomsSlider";
import { properties, type Property } from "@/data/properties";
import { costaRicaDining } from "@/data/dining";
import { AwardBadgeStrip } from "@/components/AwardBadges";
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
  fadeIn,
  slideFromLeft,
  slideFromRight,
  scaleReveal,
  EASE_CINEMATIC,
  EASE_EDITORIAL,
  DURATION,
  STAGGER,
} from "@/components/motion";
import { palettes, BRAND } from "@/data/propertyPalettes";

const tentedCamp = properties.find((p: Property) => p.id === "tented-camp")!;
const P = palettes["tented-camp"];

const LEAF_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara-leaf-beige_abbaf178.png";

const CDN = {
  heroDesktop: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tented-camp-hero-desktop_90751603.mp4",
  heroVertical: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tented_hero_vertical_0834f0e2.mp4",
  experiencesHero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/TentedExperienceVideo_fixed_75e9afca.mp4",
  wellnessHero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tented-wellness-video_26fcc290.mp4",
  s1: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/IMG_5354_8a9b536e.PNG",
  s2: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/340C7D71-BAF3-4215-B25E-98878C4B65F6_48b343e5.JPEG",
  gastroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atasteofplace_f64f6f71.jpg",
  galleryVideo1: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tc-gallery-video-new_afba07b0.mp4",
  galleryVideo2: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/gallery-residence-video-v2_2ca0004b.mp4",
  galleryVideo3: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/gallery-final-video_7a430890.mp4",
};

/* ─── Typography tokens ─── */
const display = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;
const nav = { fontFamily: "var(--font-nav)", fontWeight: 400 } as const;

export default function TentedCamp() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: BRAND.pageBackground }}>
      <BrandNavigation pageType="property" />
      <HeroSection />
      <GradientTransition from={BRAND.pageBackground} to={P.gradientEnd} height="80px" />
      <StorySection />
      <GradientTransition from={P.gradientEnd} to={BRAND.pageBackground} height="80px" />
      <AccommodationsSection />
      <GradientTransition from={BRAND.pageBackground} to={P.gradientEnd} height="60px" />
      <ExperiencesSection />
      <WellnessSection />
      <GradientTransition from={BRAND.pageBackground} to={P.gradientEnd} height="60px" />
      <GastronomySection />
      <GradientTransition from={P.gradientEnd} to={BRAND.pageBackground} height="60px" />
      <ReviewsSection />
      <GradientTransition from={BRAND.pageBackground} to={P.gradientEnd} height="60px" />
      <GettingHereSection />
      <GradientTransition from={P.gradientEnd} to={BRAND.pageBackground} height="60px" />
      <GallerySection />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO — Full-screen video with stacked logo lockup
   Leaf + NAYARA + Tented Camp
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const isMobile = useIsMobile();
  const heroSrc = isMobile ? CDN.heroVertical : CDN.heroDesktop;
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <NativeVideo src={heroSrc} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-black/60" />
      </div>



      {/* Tagline — bottom center */}
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6 md:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.slow, delay: 0.3, ease: EASE_CINEMATIC }}
          className="text-white text-2xl md:text-4xl lg:text-5xl leading-[0.95] tracking-wide text-center"
          style={display}
        >
          Luxury Tented Camp Immersed in the Rainforest
        </motion.h1>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   STORY — Two-column with palette-tinted accents
   ═══════════════════════════════════════════════════════════════ */
function StorySection() {
  return (
    <section id="story" className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: P.gradientEnd }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          {/* Text left */}
          <div className="md:flex-1">
            <AnimateOnScroll variants={fadeUp}>
              <p
                className="text-[11px] tracking-[0.15em] uppercase mb-4"
                style={{ ...body, fontWeight: 500, color: P.primary }}
              >
                The Story
              </p>
            </AnimateOnScroll>
            <MultiLineReveal
              lines={["Lifted On Stilts Above The Canopy", "Eye to Eye with Arenal Volcano"]}
              lineClassName="text-[#2C2418] text-3xl md:text-4xl lg:text-5xl leading-[1.15]"
              className="mb-6"
              as="h2"
            />
            <AnimateOnScroll variants={fadeUp} delay={0.3}>
              <p className="text-[15px] leading-relaxed mb-6" style={{ ...body, color: BRAND.secondaryText }}>
                Where a barren cattle ranch once stood, a thriving rainforest now surrounds you. Open-air tented suites perch on a volcanic clifftop, each with a private plunge pool fed by natural hot springs. The land tells its own story.
              </p>
            </AnimateOnScroll>

            {/* Award badges */}
            <AnimateOnScroll variants={fadeIn} delay={0.4}>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/award-badges-tented-camp_8aea5e71.webp"
                alt="Green Globe Certified · Travel + Leisure World's Best Awards 2021-2024 · Leading Hotels of the World"
                className="h-28 md:h-36 lg:h-48 w-auto object-contain opacity-60 mt-6"
                loading="lazy"
              />
            </AnimateOnScroll>
          </div>
          {/* Portrait photo (S1) right */}
          <div className="md:flex-1">
            <MediaReveal delay={0.2}>
              <div className="overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <img
                  src={CDN.s1}
                  alt="Tented Camp suite in the rainforest canopy"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </MediaReveal>
          </div>
        </div>

        {/* Landscape photo (S2) below — hidden on mobile, touching portrait */}
        <div className="hidden md:block">
          <MediaReveal delay={0.3}>
            <div className="overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <img src={CDN.s2} alt="Rainforest canopy at Nayara Tented Camp" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </MediaReveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ACCOMMODATIONS — Life Under Canvas
   ═══════════════════════════════════════════════════════════════ */
function AccommodationsSection() {
  const roomTypes = [
    { id: "tent", name: "", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Supersale-3_38ac1aa5.jpg" },
    { id: "family-tent", name: "", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Supersale-4_7834ffc2.jpg" },
    { id: "grand-tent", name: "", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/grandtent3_dd3f6902.jpg" },
    { id: "residence", name: "", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Supersale-3_3588efbb.jpg" },
  ];

  return (
    <section id="accommodations" className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: BRAND.pageBackground }}>
      <div className="max-w-[1200px] mx-auto">
        <AnimateOnScroll>
          <RoomsSlider rooms={roomTypes} title="Life under Canvas" subtitle="Tents & Suites" />
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.3}>
          <div className="mt-10 flex justify-center gap-4">
            <a
              href={BOOKING_URLS["tented-camp"]}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full text-[11px] tracking-[0.12em] uppercase transition-all duration-300"
              style={{ ...body, fontWeight: 500, border: `1px solid ${P.primary}`, color: P.primary }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = P.primary; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = P.primary; }}
            >
              Reserve
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   EXPERIENCES — Video-first full-screen section
   ═══════════════════════════════════════════════════════════════ */
function ExperiencesSection() {
  return (
    <>
      {/* Section intro with palette accent */}
      <div className="py-10 md:py-14 px-6 md:px-10" style={{ backgroundColor: P.gradientEnd }}>
        <div className="max-w-[1200px] mx-auto">
          <AnimateOnScroll>
            <p className="text-[11px] tracking-[0.15em] uppercase mb-6" style={{ ...body, fontWeight: 500, color: P.primary }}>Experiences</p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.15}>
            <a
              href="/blog/pura-vida"
              className="group block p-5 rounded-lg transition-all"
              style={{ border: `1px solid ${P.primary}20` }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${P.primary}50`; e.currentTarget.style.backgroundColor = `${P.primary}08`; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${P.primary}20`; e.currentTarget.style.backgroundColor = "transparent"; }}
            >
              <span className="text-[9px] tracking-[0.15em] uppercase block mb-2" style={{ ...body, fontWeight: 600, color: P.accent }}>From the Journal</span>
              <h4 className="text-[14px] leading-snug" style={{ ...display, fontWeight: 500, color: BRAND.primaryText }}>Pura Vida: Why Costa Rica Feels Different</h4>
              <span className="text-[11px] tracking-[0.08em] uppercase mt-3 inline-block" style={{ ...body, fontWeight: 500, color: P.primary }}>Read →</span>
            </a>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Full-screen video hero */}
      <section id="experiences" className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-end pb-16 md:pb-24">
        <div className="absolute inset-0 w-full h-full">
          <NativeVideo src={CDN.experiencesHero} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60" />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-10">
          <TextReveal as="h2" className="text-white text-3xl md:text-4xl lg:text-5xl leading-tight" delay={0.3}>
            Bespoke Experiences
          </TextReveal>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: DURATION.normal, delay: 0.4 }}
            href="/experiences"
            className="text-white/60 hover:text-white text-sm tracking-[0.08em] uppercase transition-colors cursor-pointer mt-6"
            style={{ ...body, fontWeight: 400 }}
          >
            Explore More
          </motion.a>
        </div>
      </section>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   WELLNESS — Video-first
   ═══════════════════════════════════════════════════════════════ */
function WellnessSection() {
  return (
    <>
      {/* Section intro */}
      <div className="py-10 md:py-14 px-6 md:px-10" style={{ backgroundColor: BRAND.pageBackground }}>
        <div className="max-w-[1200px] mx-auto">
          <AnimateOnScroll>
            <p className="text-[11px] tracking-[0.15em] uppercase mb-6" style={{ ...body, fontWeight: 500, color: P.primary }}>Wellness</p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.15}>
            <a
              href="https://blog.nayararesorts.com/nature-based-wellness-at-nayara-resorts-how-deserts-rainforests-oceans-and-night-skies-shape-human-health"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-5 rounded-lg transition-all"
              style={{ border: `1px solid ${P.primary}20` }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${P.primary}50`; e.currentTarget.style.backgroundColor = `${P.primary}08`; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${P.primary}20`; e.currentTarget.style.backgroundColor = "transparent"; }}
            >
              <span className="text-[9px] tracking-[0.15em] uppercase block mb-2" style={{ ...body, fontWeight: 600, color: P.accent }}>From the Journal</span>
              <h4 className="text-[14px] leading-snug" style={{ ...display, fontWeight: 500, color: BRAND.primaryText }}>Nature-Based Wellness by Colors: Brown, Black, Green & Blue</h4>
              <span className="text-[11px] tracking-[0.08em] uppercase mt-3 inline-block" style={{ ...body, fontWeight: 500, color: P.primary }}>Read →</span>
            </a>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Full-screen video hero */}
      <section id="wellness" className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-end pb-16 md:pb-24">
        <div className="absolute inset-0 w-full h-full">
          <NativeVideo src={CDN.wellnessHero} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60" />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-10">
          <TextReveal as="h2" className="text-white text-3xl md:text-4xl lg:text-5xl leading-tight" delay={0.3}>
            Nurtured by Nature
          </TextReveal>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: DURATION.normal, delay: 0.4 }}
            href="/wellness"
            className="text-white/60 hover:text-white text-sm tracking-[0.08em] uppercase transition-colors cursor-pointer mt-6"
            style={{ ...body, fontWeight: 400 }}
          >
            Explore More
          </motion.a>
        </div>
      </section>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   GASTRONOMY — Image hero + journal link
   ═══════════════════════════════════════════════════════════════ */
function GastronomySection() {
  return (
    <>
      <section id="gastronomy" className="py-10 md:py-14 px-6 md:px-10" style={{ backgroundColor: P.gradientEnd }}>
        <div className="max-w-[1200px] mx-auto">
          <AnimateOnScroll>
            <p className="text-[11px] tracking-[0.15em] uppercase mb-6" style={{ ...body, fontWeight: 500, color: P.primary }}>The Table</p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.15}>
            <a
              href="https://blog.nayararesorts.com/nayara-arenals-adventures-in-flavor"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-5 rounded-lg transition-all"
              style={{ border: `1px solid ${P.primary}20` }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${P.primary}50`; e.currentTarget.style.backgroundColor = `${P.primary}08`; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${P.primary}20`; e.currentTarget.style.backgroundColor = "transparent"; }}
            >
              <span className="text-[9px] tracking-[0.15em] uppercase block mb-2" style={{ ...body, fontWeight: 600, color: P.accent }}>From the Journal</span>
              <h4 className="text-[14px] leading-snug" style={{ ...display, fontWeight: 500, color: BRAND.primaryText }}>Rainforest to Table: Arenal Adventures in Flavor</h4>
              <span className="text-[11px] tracking-[0.08em] uppercase mt-3 inline-block" style={{ ...body, fontWeight: 500, color: P.primary }}>Read →</span>
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Full-width gastro image with overlay */}
      <section className="relative">
        <MediaReveal>
          <Parallax offset={30}>
            <img src={CDN.gastroImage} alt="A Taste of Place - The Table" className="w-full h-auto" loading="lazy" />
          </Parallax>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
          <div className="absolute bottom-8 md:bottom-16 left-0 right-0 flex flex-col items-center text-center px-6">
            <TextReveal as="h2" className="text-white text-2xl md:text-3xl lg:text-4xl leading-tight mb-4">
              A Taste of Place
            </TextReveal>
          </div>
        </MediaReveal>
      </section>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   REVIEWS — Dark section with palette accents
   ═══════════════════════════════════════════════════════════════ */
function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: BRAND.navPill }}>
      <div className="max-w-[800px] mx-auto text-center">
        <AnimateOnScroll>
          <p className="text-[11px] tracking-[0.15em] uppercase mb-4" style={{ ...body, fontWeight: 500, color: `${P.accent}99` }}>Guest Reviews</p>
          <div className="flex items-center justify-center gap-1.5 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5" style={{ color: P.accent }} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-white text-[28px] md:text-[36px] mb-2" style={display}>5.0</p>
          <p className="text-white/50 text-[13px] tracking-[0.04em] mb-6" style={body}>Based on 1,200+ reviews on TripAdvisor</p>
          <DrawLine color={`${P.accent}40`} className="max-w-[60px] mx-auto mb-8" />
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.2}>
          <blockquote className="max-w-2xl mx-auto">
            <p className="text-white/75 text-[15px] md:text-[17px] leading-relaxed italic mb-4" style={body}>
              "An extraordinary experience. The tents are beyond luxurious, the staff anticipates every need, and waking up to the sounds of the rainforest with Arenal Volcano in view is something you never forget."
            </p>
            <cite className="text-[12px] tracking-[0.08em] not-italic" style={{ ...body, color: `${P.accent}80` }}>— Andrew wrote a review, Apr 2</cite>
          </blockquote>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.3}>
          <a
            href="https://www.tripadvisor.com/Hotel_Review-g309226-d12099846-Reviews-Nayara_Tented_Camp-La_Fortuna_de_San_Carlos_Arenal_Volcano_National_Park_Province_of_Al.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 px-6 py-2.5 rounded-full text-[11px] tracking-[0.15em] uppercase transition-colors"
            style={{ ...body, fontWeight: 500, border: `1px solid ${P.accent}40`, color: P.accent }}
          >
            Read All Reviews
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   GETTING HERE — Travel routes with palette icons
   ═══════════════════════════════════════════════════════════════ */
function GettingHereSection() {
  const routes = [
    { title: "International Flights", description: "Fly into San José (SJO) or Liberia (LIR) international airports. Both receive direct flights from major US and European cities.", icon: "✈" },
    { title: "Domestic Flight", description: "Take a short domestic flight from SJO to La Fortuna/Arenal (~30 minutes). The hotel can arrange transfers from the local airstrip.", icon: "⏱" },
    { title: "Private Transfer", description: "Arrange a private transfer from San José (~3 hours) or Liberia (~2.5 hours). Scenic drive through the Central Valley with volcano views.", icon: "🚐" },
    { title: "Self-Drive", description: "Rent a car at either airport and drive to Arenal. Well-paved roads with clear signage. The journey from SJO takes approximately 3 hours.", icon: "🗺" },
  ];

  return (
    <section id="getting-here" className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: P.gradientEnd }}>
      <div className="max-w-[1200px] mx-auto">
        <AnimateOnScroll>
          <p className="text-[11px] tracking-[0.15em] uppercase mb-3" style={{ ...body, fontWeight: 500, color: P.primary }}>Getting Here</p>
          <h2 className="mb-3" style={{ ...display, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2, color: BRAND.primaryText }}>Your Journey to Arenal</h2>
          <p className="text-[14px] leading-relaxed mb-10 md:mb-14 max-w-xl" style={{ ...body, color: BRAND.secondaryText }}>
            Nayara Tented Camp is located in the Arenal Volcano region of Costa Rica, one of the most accessible luxury destinations in Central America.
          </p>
        </AnimateOnScroll>
        <StaggerOnScroll className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {routes.map((route, i) => (
            <motion.div key={i} variants={fadeUp} className="flex gap-4">
              <div
                className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-lg"
                style={{ backgroundColor: `${P.primary}10`, color: P.primary }}
              >
                {route.icon}
              </div>
              <div>
                <h3 className="text-[16px] mb-2" style={{ ...display, fontWeight: 500, color: BRAND.primaryText }}>{route.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{ ...body, color: BRAND.secondaryText }}>{route.description}</p>
              </div>
            </motion.div>
          ))}
        </StaggerOnScroll>
        <AnimateOnScroll delay={0.5}>
          <div className="mt-10 md:mt-14 p-6 rounded-xl" style={{ backgroundColor: `${P.primary}08` }}>
            <p className="text-[13px] leading-relaxed" style={{ ...body, color: BRAND.secondaryText }}>
              <span style={{ fontWeight: 500, color: BRAND.primaryText }}>Need help planning your journey?</span> Our reservations team can arrange all transfers and domestic flights. Contact us at{" "}
              <a href="mailto:reservations@nayararesorts.com" style={{ color: P.primary, textDecoration: "underline" }}>reservations@nayararesorts.com</a>{" "}
              or call <a href="tel:+18448652002" style={{ color: P.primary, textDecoration: "underline" }}>1-844-865-2002</a>.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   GALLERY — Video-first masonry grid
   ═══════════════════════════════════════════════════════════════ */
function GallerySection() {
  const media = [
    { src: CDN.galleryVideo1, alt: "Tented Camp bird watching", type: "video" as const },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/(Rooms)NayaraTent3copy_54044994.webp", alt: "Tented villa pool with volcano view", type: "image" as const },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/HenrysBar_69b1e477.webp", alt: "Henry's Bar at Nayara Springs", type: "image" as const },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/12.Residence_17d767d7.webp", alt: "Residence exterior", type: "image" as const },
    { src: CDN.galleryVideo2, alt: "Residence experience", type: "video" as const },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/(Rooms)Residence3_48e06b8c.webp", alt: "Residence detail", type: "image" as const },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/4O1A1569-Spa-NayaraTentedCampwithLivLawbyBriceFerreStudio-VancouverPortraitAdventureandAthletePhotographer_0e850f3a.webp", alt: "Spa treatment", type: "image" as const },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/19B9D444-0A7C-4C29-93A3-A8C0DFDFBD31_aa5cae9d.JPEG", alt: "Volcano view with tents", type: "image" as const },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/38.jTentDetailpg_b2b74566.webp", alt: "Tent interior detail", type: "image" as const },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Grand(1)_0127cf09.webp", alt: "Grand tent with pool", type: "image" as const },
    { src: CDN.s1, alt: "Tented camp aerial view", type: "image" as const },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/NewAreaBriceFerre(2)_cf5128c9.webp", alt: "Wellness area with volcano", type: "image" as const },
    { src: CDN.galleryVideo3, alt: "Tented Camp gallery", type: "video" as const },
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: BRAND.pageBackground }}>
      <div className="max-w-[1200px] mx-auto">
        <AnimateOnScroll>
          <p className="text-[11px] tracking-[0.15em] uppercase mb-3" style={{ ...body, fontWeight: 500, color: P.primary }}>Gallery</p>
          <h2 className="mb-8" style={{ ...display, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2, color: BRAND.primaryText }}>Canvas & Canopy</h2>
        </AnimateOnScroll>
        <StaggerOnScroll className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {media.map((item, i) => (
            <motion.div key={i} variants={scaleReveal} className={i === 1 ? "col-span-2 md:col-span-2 row-span-2" : ""}>
              {item.type === "video" ? (
                <video src={item.src} className="w-full h-full object-cover rounded-lg" style={{ aspectRatio: i === 1 ? "4/3" : "1/1" }} autoPlay muted loop playsInline />
              ) : (
                <img src={item.src} alt={item.alt} className="w-full h-full object-cover rounded-lg" style={{ aspectRatio: i === 1 ? "4/3" : "1/1" }} loading="lazy" />
              )}
            </motion.div>
          ))}
        </StaggerOnScroll>
      </div>
    </section>
  );
}
