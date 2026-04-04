/*
 * NAYARA BOCAS DEL TORO — Standardized Property Page
 * Template: Hero → Story → Rooms → Gallery → Experiences → Sustainability → Wellness → Gastronomy → Getting Here → Reviews → Footer
 * Typography: Playfair Display (display) + DM Sans (body)
 */

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import BlobVideo from "@/components/BlobVideo";
import { useIsMobile } from "@/hooks/useMobile";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BrandNavigation from "@/components/BrandNavigation";
import { properties } from "@/data/properties";
import { bocasDiningCollection } from "@/data/dining";
import PillarCrossLink from "@/components/PillarCrossLink";

/* ─── CDN Assets ─── */
const CDN = {
  heroDesktop: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbt-horizontal-desktop_e4f2e9e2.mp4",
  heroMobile: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-vertical2_03bbe8e5.mp4",
  villaWalkway: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-aerial-villas-walkway_66b2f48e.jpg",
  islandAerial: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-s2-island-aerial_937028ec.jpg",
  villaVideo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-v2-new_a7b8b2b2.mp4",
  overwater: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-overwater_f9b09985.jpg",
  bungalow: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-bungalow_f4de28d6.jpg",
  sunset: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-sunset_2eeaa785.jpg",
  aerial: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-aerial_ff3a4ff3.jpg",
  villaInterior: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/IMG_6904_4db69733.JPG",
};

/* ─── Property Data ─── */
const bocas = properties.find((p) => p.id === "bocas-del-toro")!;

/* ─── Shared Styles ─── */
const heading = { fontFamily: "var(--font-heading)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)" } as const;
const sectionPadding = "py-16 md:py-24 lg:py-32";
const maxW = "max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16";

/* ─── Fade-in wrapper ─── */
function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function BocasDelToro() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "linear-gradient(to bottom, #f0f7f5 0%, #e8f0ee 30%, #dfe8e5 60%, #d5deda 100%)" }}>
      <ScrollProgress />
      <BrandNavigation pageType="property" centerLabel="Nayara Bocas del Toro" centerLinkHome />
      <HeroSection />
      <StorySection />
      <RoomsSection />
      <GallerySection />
      <ExperiencesSection />
      <SustainabilitySection />
      <WellnessSection />
      <GastronomySection />
      <GettingHereSection />
      <ReviewsSection />
      <Footer pageType="property" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   1. HERO — Full-screen video + H1
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const isMobile = useIsMobile();
  const heroVideo = isMobile ? CDN.heroMobile : CDN.heroDesktop;

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <BlobVideo
          src={heroVideo}
          className="w-full h-full object-cover"
          autoPlay muted loop playsInline controls={false}
        />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end items-center px-5 z-10 pb-[5vh]">
        <h1
          className="text-center text-[#ece8e1] max-w-[1052px]"
          style={{ ...heading, fontSize: "clamp(26px, 3.5vw, 38px)", lineHeight: 1 }}
        >
          {"Adults-Only Overwater Villas on a Private Caribbean Island".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, filter: "blur(12px)", y: 8 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.02, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: "inline-block" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="w-24 h-px bg-[#ece8e1]/40 mt-4 origin-center"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#ece8e1]/70 text-[12px] md:text-[14px] uppercase tracking-[0.15em] mt-4"
          style={{ ...body, fontWeight: 700 }}
        >
          <span className="text-[#ece8e1]/40 mr-3">&mdash;</span>
          Bocas del Toro, Panama
          <span className="text-[#ece8e1]/40 ml-3">&mdash;</span>
        </motion.p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   2. STORY — Two-column: text left, image right (bleeds to edge)
   ═══════════════════════════════════════════════════════════════ */
function StorySection() {
  return (
    <section id="story" className="w-full" style={{ paddingTop: "22px", paddingBottom: 0 }}>
      {/* Mobile: full-width image before text */}
      <div className="md:hidden w-full" style={{ paddingTop: "clamp(16px, 3vw, 32px)" }}>
        <img
          src={CDN.villaWalkway}
          alt="Aerial view of overwater villas along walkway at Nayara Bocas del Toro"
          className="w-full h-auto object-cover"
          loading="eager"
        />
      </div>

      <div
        className="flex flex-col md:flex-row items-start mx-auto"
        style={{ maxWidth: "1440px", gap: "clamp(40px, 8vw, 115px)", padding: "0 0 0 clamp(24px, 8vw, 121px)" }}
      >
        <div className="flex flex-col gap-10 md:flex-1 mt-10 md:mt-16 px-6 md:px-0">
          <h2
            className="text-[#4B4A4A]"
            style={{ ...heading, fontSize: "clamp(20px, 2.5vw, 28px)", lineHeight: 1.3 }}
          >
            Award-Winning Properties<br />Defined by Destination
          </h2>
          <p
            className="text-[#4B4A4A]"
            style={{ ...heading, fontSize: "15px", lineHeight: "22.5px" }}
          >
            {bocas.heroSubtitle}
          </p>
          <a
            href="/story"
            className="text-[#4B4A4A] underline underline-offset-4 decoration-[#4B4A4A]/40 hover:decoration-[#4B4A4A] transition-all"
            style={{ ...heading, fontSize: "15px" }}
          >
            Our Story
          </a>
        </div>

        {/* Desktop: image bleeds to right edge */}
        <div className="hidden md:flex md:flex-1" style={{ marginRight: "calc(-1 * clamp(24px, 8vw, 121px))" }}>
          <img
            src={CDN.villaWalkway}
            alt="Aerial view of overwater villas along walkway at Nayara Bocas del Toro"
            className="w-full object-cover"
            style={{ aspectRatio: "3/4" }}
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   3. ROOMS — Flipped layout: image/video left, text right
   ═══════════════════════════════════════════════════════════════ */
function RoomsSection() {
  return (
    <section id="rooms" className="w-full" style={{ paddingTop: "22px", paddingBottom: 0 }}>
      <div
        className="flex flex-col md:flex-row items-start mx-auto"
        style={{ maxWidth: "1440px", gap: "clamp(40px, 8vw, 115px)", padding: "0 clamp(24px, 8vw, 121px) 0 0" }}
      >
        {/* Desktop: video bleeds to left edge */}
        <div className="hidden md:flex md:flex-1" style={{ marginLeft: "calc(-1 * clamp(24px, 8vw, 121px))", aspectRatio: "3/4", overflow: "hidden" }}>
          <BlobVideo
            src={CDN.villaVideo}
            className="w-full h-full object-cover"
            autoPlay muted loop playsInline controls={false}
          />
        </div>

        <div className="flex flex-col gap-10 md:flex-1 mt-10 md:mt-16 px-6 md:px-0">
          <h2
            className="text-[#4B4A4A]"
            style={{ ...heading, fontSize: "clamp(20px, 2.5vw, 28px)", lineHeight: 1.3 }}
          >
            Overwater Villas
          </h2>
          <p
            className="text-[#4B4A4A]"
            style={{ ...heading, fontSize: "15px", lineHeight: "22.5px" }}
          >
            Nayara Bocas del Toro's overwater villas float above the crystalline Caribbean, each with a private infinity pool that spills into the sea, glass-floor panels revealing the reef below, and open-air terraces for uninterrupted ocean views. Thatched roofs, natural materials, and indoor-outdoor living create an intimate island sanctuary.
          </p>
          <a
            href="#gallery"
            className="text-[#4B4A4A] underline underline-offset-4 decoration-[#4B4A4A]/40 hover:decoration-[#4B4A4A] transition-all"
            style={{ ...heading, fontSize: "15px" }}
          >
            Explore Our Villas
          </a>
        </div>
      </div>

      {/* Mobile: full-width image */}
      <div className="md:hidden w-full" style={{ paddingTop: "10px" }}>
        <img
          src={CDN.villaInterior}
          alt="Overwater villa with private pool at Nayara Bocas del Toro"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   4. GALLERY — 6-image masonry grid
   ═══════════════════════════════════════════════════════════════ */
function GallerySection() {
  const images = [
    { src: CDN.islandAerial, alt: "Aerial view of private island resort" },
    { src: CDN.overwater, alt: "Overwater villa at sunset" },
    { src: CDN.bungalow, alt: "Thatched bungalow in tropical setting" },
    { src: CDN.sunset, alt: "Caribbean sunset from Bocas del Toro" },
    { src: CDN.aerial, alt: "Aerial view of resort and reef" },
    { src: CDN.villaInterior, alt: "Villa interior with ocean view" },
  ];

  return (
    <section id="gallery" className={`${sectionPadding}`}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Gallery</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-10 md:mb-14" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>
            A Private Island Paradise
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {images.map((img, i) => (
            <FadeIn key={i} delay={i * 0.08} className={i === 0 ? "col-span-2 md:col-span-2 row-span-2" : ""}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                style={{ aspectRatio: i === 0 ? "4/3" : "1/1" }}
                loading="lazy"
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   5. EXPERIENCES — Excursion cards from data
   ═══════════════════════════════════════════════════════════════ */
function ExperiencesSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = bocas.excursionCategories || [];
  const filtered = activeCategory === "all"
    ? bocas.excursions
    : bocas.excursions.filter((e) => e.category === activeCategory);

  return (
    <section id="experiences" className={`${sectionPadding} bg-white/30`}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Experiences</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-6 md:mb-10" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>
            Caribbean Adventures
          </h2>
        </FadeIn>

        {/* Category filters */}
        {categories.length > 0 && (
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-8 md:mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-[12px] tracking-[0.08em] uppercase transition-all ${
                    activeCategory === cat.id
                      ? "bg-[#3a2a1a] text-white"
                      : "bg-[#3a2a1a]/5 text-[#3a2a1a]/60 hover:bg-[#3a2a1a]/10"
                  }`}
                  style={{ ...body, fontWeight: 500 }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </FadeIn>
        )}

        {/* Excursion cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((excursion, i) => (
            <FadeIn key={excursion.id} delay={i * 0.05}>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 hover:bg-white/80 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-[#3a2a1a] text-[16px]" style={{ ...heading, fontWeight: 500 }}>
                    {excursion.name}
                  </h3>
                </div>
                {excursion.duration && (
                  <p className="text-[#3a2a1a]/40 text-[11px] tracking-[0.1em] uppercase mb-3" style={{ ...body, fontWeight: 500 }}>
                    {excursion.duration}{excursion.price ? ` · ${excursion.price}` : ""}
                  </p>
                )}
                <p className="text-[#4B4A4A]/70 text-[13px] leading-relaxed" style={body}>
                  {excursion.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   6. SUSTAINABILITY
   ═══════════════════════════════════════════════════════════════ */
function SustainabilitySection() {
  const initiatives = [
    { title: "Coral Reef Restoration", desc: "Active reef monitoring and coral nursery programs protect the fragile Caribbean ecosystem surrounding our private island." },
    { title: "Marine Conservation", desc: "Partnership with local marine biologists to protect sea turtles, nurse sharks, and the diverse reef life of the Bastimentos Marine Park." },
    { title: "Zero Single-Use Plastic", desc: "Every villa and common area is free of single-use plastics. Water is filtered on-site and served in reusable glass bottles." },
    { title: "Community Partnership", desc: "Working with Ngäbe-Buglé indigenous communities to support traditional crafts, education, and sustainable livelihoods." },
  ];

  return (
    <section id="sustainability" className={sectionPadding}>
      <div className={maxW}>
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          <div className="md:flex-1">
            <FadeIn>
              <SectionLabel>Sustainability</SectionLabel>
              <h2 className="text-[#4B4A4A] mb-6" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>
                Protecting Paradise
              </h2>
              <p className="text-[#4B4A4A]/70 text-[15px] leading-relaxed mb-8" style={body}>
                Nayara Bocas del Toro sits within one of the most biodiverse marine corridors on Earth. Our commitment extends beyond hospitality to active conservation of the coral reefs, mangroves, and rainforest that make this place extraordinary.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {initiatives.map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="border-l-2 border-[#5a9b8f]/30 pl-4">
                    <h3 className="text-[#3a2a1a] text-[15px] mb-2" style={{ ...heading, fontWeight: 500 }}>
                      {item.title}
                    </h3>
                    <p className="text-[#4B4A4A]/60 text-[13px] leading-relaxed" style={body}>
                      {item.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <FadeIn delay={0.2} className="md:flex-1">
            <img
              src={CDN.islandAerial}
              alt="Aerial view of Nayara Bocas del Toro private island"
              className="w-full object-cover rounded-lg"
              style={{ aspectRatio: "3/4" }}
              loading="lazy"
            />
          </FadeIn>
        </div>
      
        <PillarCrossLink pillar="experiences" />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   7. WELLNESS — Spa treatments from data
   ═══════════════════════════════════════════════════════════════ */
function WellnessSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = bocas.spaCategories || [];
  const filtered = activeCategory === "all"
    ? bocas.treatments
    : bocas.treatments.filter((t) => t.category === activeCategory);

  return (
    <section id="wellness" className={`${sectionPadding} bg-white/30`}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Wellness</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-6 md:mb-10" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>
            Overwater Spa
          </h2>
        </FadeIn>

        {categories.length > 0 && (
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-8 md:mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-[12px] tracking-[0.08em] uppercase transition-all ${
                    activeCategory === cat.id
                      ? "bg-[#3a2a1a] text-white"
                      : "bg-[#3a2a1a]/5 text-[#3a2a1a]/60 hover:bg-[#3a2a1a]/10"
                  }`}
                  style={{ ...body, fontWeight: 500 }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </FadeIn>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((treatment, i) => (
            <FadeIn key={treatment.id} delay={i * 0.05}>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 hover:bg-white/80 transition-colors">
                <h3 className="text-[#3a2a1a] text-[16px] mb-2" style={{ ...heading, fontWeight: 500 }}>
                  {treatment.name}
                </h3>
                <p className="text-[#3a2a1a]/40 text-[11px] tracking-[0.1em] uppercase mb-3" style={{ ...body, fontWeight: 500 }}>
                  {treatment.duration}{treatment.price ? ` · ${treatment.price}` : ""}
                </p>
                <p className="text-[#4B4A4A]/70 text-[13px] leading-relaxed" style={body}>
                  {treatment.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      
        <PillarCrossLink pillar="sustainability" />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   8. GASTRONOMY — Restaurant info from dining data
   ═══════════════════════════════════════════════════════════════ */
function GastronomySection() {
  const dining = bocasDiningCollection;

  return (
    <section id="gastronomy" className={sectionPadding}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Gastronomy</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-4" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>
            Caribbean Flavors
          </h2>
          <p className="text-[#4B4A4A]/70 text-[15px] leading-relaxed mb-10 md:mb-14 max-w-2xl" style={body}>
            {dining.description}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dining.restaurants.map((restaurant, i) => (
            <FadeIn key={restaurant.id} delay={i * 0.1}>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 hover:bg-white/70 transition-colors">
                <h3 className="text-[#3a2a1a] text-[20px] mb-2" style={{ ...heading, fontWeight: 500 }}>
                  {restaurant.name}
                </h3>
                <p className="text-[#3a2a1a]/40 text-[11px] tracking-[0.1em] uppercase mb-4" style={{ ...body, fontWeight: 500 }}>
                  {restaurant.cuisine}
                </p>
                <p className="text-[#4B4A4A]/70 text-[14px] leading-relaxed mb-4" style={body}>
                  {restaurant.tagline}
                </p>
                {restaurant.atmosphere && (
                  <p className="text-[#4B4A4A]/50 text-[12px] italic" style={body}>
                    {restaurant.atmosphere}
                  </p>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      
        <PillarCrossLink pillar="wellness" />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   9. GETTING HERE
   ═══════════════════════════════════════════════════════════════ */
function GettingHereSection() {
  const details = [
    { label: "Nearest Airport", value: "Bocas del Toro International (BOC)" },
    { label: "From Panama City", value: "1-hour flight to BOC, then 15-minute boat transfer" },
    { label: "Boat Transfer", value: "Private boat from Bocas Town marina to our private island" },
    { label: "Concierge", value: "Our team arranges all transfers from the moment you land" },
  ];

  return (
    <section id="getting-here" className={`${sectionPadding} bg-white/30`}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Getting Here</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-10 md:mb-14" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>
            Your Journey to Paradise
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
          {details.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div>
                <p className="text-[#3a2a1a]/40 text-[11px] tracking-[0.15em] uppercase mb-2" style={{ ...body, fontWeight: 600 }}>
                  {item.label}
                </p>
                <p className="text-[#4B4A4A] text-[15px] leading-relaxed" style={heading}>
                  {item.value}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-10 md:mt-14">
            <p className="text-[#4B4A4A]/60 text-[13px]" style={body}>
              Contact: <a href={`mailto:${bocas.email}`} className="underline underline-offset-2 hover:text-[#3a2a1a] transition-colors">{bocas.email}</a>
              {bocas.phone && <> &middot; <a href={`tel:${bocas.phone}`} className="underline underline-offset-2 hover:text-[#3a2a1a] transition-colors">{bocas.phone}</a></>}
            </p>
          </div>
        </FadeIn>
      
        <PillarCrossLink pillar="gastronomy" />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   10. REVIEWS — TripAdvisor link + quote
   ═══════════════════════════════════════════════════════════════ */
function ReviewsSection() {
  return (
    <section id="reviews" className={sectionPadding}>
      <div className={maxW}>
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <SectionLabel className="text-center">Guest Reviews</SectionLabel>
            <blockquote className="text-[#4B4A4A] text-[18px] md:text-[22px] italic leading-relaxed mb-6" style={heading}>
              "An absolute paradise. The overwater villas are stunning, the staff is incredibly attentive, and the marine life right below your feet is magical."
            </blockquote>
            <p className="text-[#3a2a1a]/40 text-[12px] tracking-[0.1em] uppercase mb-8" style={{ ...body, fontWeight: 500 }}>
              TripAdvisor Guest Review
            </p>
            <a
              href="https://www.tripadvisor.com/Hotel_Review-g635536-d25451804-Reviews-Nayara_Bocas_Del_Toro-Isla_Bastimentos_Bocas_del_Toro_Province.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3a2a1a]/5 text-[#3a2a1a]/70 hover:bg-[#3a2a1a]/10 hover:text-[#3a2a1a] transition-all text-[13px] tracking-[0.05em]"
              style={{ ...body, fontWeight: 500 }}
            >
              Read Reviews on TripAdvisor
              <span className="text-[10px]">&rarr;</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SHARED: Section label
   ═══════════════════════════════════════════════════════════════ */
function SectionLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={`text-[#3a2a1a]/35 text-[10px] tracking-[0.3em] uppercase mb-4 ${className}`}
      style={{ ...body, fontWeight: 600 }}
    >
      {children}
    </p>
  );
}
