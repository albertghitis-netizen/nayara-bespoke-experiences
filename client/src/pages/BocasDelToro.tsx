/*
 * NAYARA BOCAS DEL TORO — Standardized Property Page
 * Rebuilt with new structure: Story (s1/s2) → Rooms (s3/s4) → Experiences → Sustainability → Wellness → Gastronomy → Gallery → Footer
 */

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import BlobVideo from "@/components/BlobVideo";
import { useIsMobile } from "@/hooks/useMobile";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BrandNavigation from "@/components/BrandNavigation";
import { properties, type Property, type Excursion, type Treatment } from "@/data/properties";
import { bocasDiningCollection } from "@/data/dining";
import PillarCrossLink from "@/components/PillarCrossLink";

/* ─── CDN Assets ─── */
const CDN = {
  heroDesktop: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbt-horizontal-desktop_e4f2e9e2.mp4",
  heroMobile: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-vertical2_03bbe8e5.mp4",
  s1: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-aerial-villas-walkway_66b2f48e.jpg",
  s2: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/74_be6f8cb4.jpg",
  s3: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/87D222D3-2D4E-437D-AAEF-92C3662EBFE9_1e00bdac.MP4",
  s4: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/80_57ce5c18.jpg",
};

/* ─── Property Data ─── */
const bocas = properties.find((p: Property) => p.id === "bocas-del-toro")!;

/* ─── Shared Styles ─── */
const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;
const sectionPadding = "py-16 md:py-24 px-6 md:px-10";
const maxW = "max-w-[1200px] mx-auto";

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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-[#3a2a1a]/40 text-[11px] tracking-[0.15em] uppercase mb-3" style={{ ...body, fontWeight: 500 }}>{children}</p>;
}

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function BocasDelToro() {
  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <ScrollProgress />
      <BrandNavigation pageType="property" centerLabel="Nayara Bocas del Toro" centerLinkHome />
      <HeroSection />
      <StorySection />
      <RoomsSection />
      <ExperiencesSection />
      <SustainabilitySection />
      <WellnessSection />
      <GastronomySection />
      <GallerySection />
      <Footer />
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6 md:px-10">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }} className="text-white text-2xl md:text-4xl lg:text-5xl leading-[0.95] tracking-wide text-center" style={heading}>
          Overwater Villas on a Private Caribbean Island
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} className="text-white/60 text-[11px] md:text-[13px] mt-4 tracking-[0.25em] uppercase" style={body}>
          Adults Only
        </motion.p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   2. STORY — Text left + s1 vertical right + s2 horizontal below
   ═══════════════════════════════════════════════════════════════ */
function StorySection() {
  return (
    <section id="story" className={sectionPadding}>
      <div className={maxW}>
        {/* Story text left + s1 vertical right */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start mb-12">
          <FadeIn className="md:flex-1">
            <SectionLabel>The Property</SectionLabel>
            <h2 className="text-[#4B4A4A] mb-6" style={{ ...heading, fontSize: "clamp(24px, 3.5vw, 38px)", lineHeight: 1.15 }}>
              Island Paradise Reimagined
            </h2>
            <p className="text-[#4B4A4A]/70 text-[15px] leading-relaxed mb-4" style={body}>
              {bocas.heroSubtitle}
            </p>
            <p className="text-[#4B4A4A]/70 text-[15px] leading-relaxed" style={body}>
              Nayara Bocas del Toro is an adults-only sanctuary on a private Caribbean island, where overwater villas float above crystal-clear turquoise waters. Each villa features direct ocean access, private plunge pools, and unobstructed views of pristine beaches and jungle-covered islands. Experience the ultimate in tropical luxury and seclusion.
            </p>
          </FadeIn>
          <FadeIn delay={0.2} className="md:flex-1">
            <img src={CDN.s1} alt="Aerial view of overwater villas at Nayara Bocas del Toro" className="w-full object-cover rounded-lg" style={{ aspectRatio: "3/4" }} loading="lazy" />
          </FadeIn>
        </div>

        {/* s2 landscape below */}
        <FadeIn delay={0.3}>
          <img src={CDN.s2} alt="Turquoise lagoon with palm trees and beach" className="w-full object-cover rounded-lg" loading="lazy" style={{ aspectRatio: "16/9" }} />
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   3. ROOMS — s3 vertical left + H3 right + s4 horizontal below
   ═══════════════════════════════════════════════════════════════ */
function RoomsSection() {
  return (
    <section id="rooms" className={`${sectionPadding} bg-white/30`}>
      <div className={maxW}>
        {/* s3 vertical left + H3 right */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start mb-12">
          <FadeIn delay={0.1} className="md:flex-1 order-2 md:order-1">
            <div style={{ aspectRatio: "3/4" }}>
              <BlobVideo src={CDN.s3} className="w-full h-full object-cover rounded-lg" autoPlay muted loop playsInline controls={false} />
            </div>
          </FadeIn>
          <FadeIn className="md:flex-1 order-1 md:order-2">
            <SectionLabel>Accommodations</SectionLabel>
            <h3 className="text-[#4B4A4A] mb-6" style={{ ...heading, fontSize: "clamp(24px, 3.5vw, 38px)", lineHeight: 1.15 }}>
              Overwater Villas
            </h3>
            <p className="text-[#4B4A4A]/70 text-[15px] leading-relaxed" style={body}>
              Each overwater villa is a private escape suspended above the Caribbean Sea. With direct ocean access, private plunge pools, and panoramic water views, these accommodations redefine tropical luxury. Wake to the gentle sound of waves and spend your days exploring pristine beaches and vibrant coral reefs.
            </p>
          </FadeIn>
        </div>

        {/* s4 landscape below */}
        <FadeIn delay={0.3}>
          <img src={CDN.s4} alt="Aerial view of overwater villas arranged in curved pattern" className="w-full object-cover rounded-lg" loading="lazy" style={{ aspectRatio: "16/9" }} />
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   4. EXPERIENCES
   ═══════════════════════════════════════════════════════════════ */
function ExperiencesSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = bocas.excursionCategories || [];
  const filtered = activeCategory === "all" ? bocas.excursions : bocas.excursions.filter((e: Excursion) => e.category === activeCategory);
  return (
    <section id="experiences" className={`${sectionPadding} bg-white/30`}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Experiences</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-6 md:mb-10" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>Caribbean Adventures</h2>
        </FadeIn>
        {categories.length > 0 && (
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-8 md:mb-12">
              {categories.map((cat: { id: string; label: string }) => (
                <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`px-4 py-2 rounded-full text-[12px] tracking-[0.08em] uppercase transition-all ${activeCategory === cat.id ? "bg-[#3a2a1a] text-white" : "bg-[#3a2a1a]/5 text-[#3a2a1a]/60 hover:bg-[#3a2a1a]/10"}`} style={{ ...body, fontWeight: 500 }}>
                  {cat.label}
                </button>
              ))}
            </div>
          </FadeIn>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((excursion: Excursion, i: number) => (
            <FadeIn key={excursion.id} delay={i * 0.05}>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 hover:bg-white/80 transition-colors">
                <h3 className="text-[#3a2a1a] text-[16px] mb-2" style={{ ...heading, fontWeight: 500 }}>{excursion.name}</h3>
                {excursion.duration && (
                  <p className="text-[#3a2a1a]/40 text-[11px] tracking-[0.1em] uppercase mb-3" style={{ ...body, fontWeight: 500 }}>
                    {excursion.duration}{excursion.price ? ` · ${excursion.price}` : ""}
                  </p>
                )}
                <p className="text-[#4B4A4A]/70 text-[13px] leading-relaxed" style={body}>{excursion.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   5. SUSTAINABILITY
   ═══════════════════════════════════════════════════════════════ */
function SustainabilitySection() {
  const initiatives = [
    { title: "Marine Conservation", desc: "Protecting coral reefs and marine ecosystems through partnerships with local conservation organizations and sustainable tourism practices." },
    { title: "Island Stewardship", desc: "Maintaining pristine beaches and jungle habitats through active restoration and invasive species management programs." },
    { title: "Community Partnership", desc: "Supporting local communities through employment, education initiatives, and cultural preservation programs in the Bocas region." },
    { title: "Sustainable Operations", desc: "Minimizing environmental impact through renewable energy, waste reduction, and water conservation systems." },
  ];
  return (
    <section id="sustainability" className={sectionPadding}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Sustainability</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-6 md:mb-10" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>Protecting Paradise</h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {initiatives.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="border-l-2 border-cyan-600/30 pl-4">
                <h3 className="text-[#3a2a1a] text-[15px] mb-2" style={{ ...heading, fontWeight: 500 }}>{item.title}</h3>
                <p className="text-[#4B4A4A]/60 text-[13px] leading-relaxed" style={body}>{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <PillarCrossLink pillar="experiences" />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   6. WELLNESS
   ═══════════════════════════════════════════════════════════════ */
function WellnessSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = bocas.spaCategories || [];
  const filtered = activeCategory === "all" ? bocas.treatments : bocas.treatments.filter((t: Treatment) => t.category === activeCategory);
  return (
    <section id="wellness" className={`${sectionPadding} bg-white/30`}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>{bocas.theme.sectionLabel}</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-6 md:mb-10" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>{bocas.theme.spaHeadline.replace("\n", " ")}</h2>
        </FadeIn>
        {categories.length > 0 && (
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-8 md:mb-12">
              {categories.map((cat: { id: string; label: string }) => (
                <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`px-4 py-2 rounded-full text-[12px] tracking-[0.08em] uppercase transition-all ${activeCategory === cat.id ? "bg-[#3a2a1a] text-white" : "bg-[#3a2a1a]/5 text-[#3a2a1a]/60 hover:bg-[#3a2a1a]/10"}`} style={{ ...body, fontWeight: 500 }}>
                  {cat.label}
                </button>
              ))}
            </div>
          </FadeIn>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((treatment: Treatment, i: number) => (
            <FadeIn key={treatment.id} delay={i * 0.05}>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 hover:bg-white/80 transition-colors">
                <h3 className="text-[#3a2a1a] text-[16px] mb-2" style={{ ...heading, fontWeight: 500 }}>{treatment.name}</h3>
                <p className="text-[#3a2a1a]/40 text-[11px] tracking-[0.1em] uppercase mb-3" style={{ ...body, fontWeight: 500 }}>
                  {treatment.duration}{treatment.price ? ` · ${treatment.price}` : ""}
                </p>
                <p className="text-[#4B4A4A]/70 text-[13px] leading-relaxed" style={body}>{treatment.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   7. GASTRONOMY
   ═══════════════════════════════════════════════════════════════ */
function GastronomySection() {
  const restaurants = Array.isArray(bocasDiningCollection) ? bocasDiningCollection : [bocasDiningCollection];
  return (
    <section id="gastronomy" className={sectionPadding}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Gastronomy</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-6 md:mb-10" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>Caribbean Flavors</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {restaurants.map((restaurant: any, i: number) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div>
                <h3 className="text-[#3a2a1a] text-[18px] mb-2" style={{ ...heading, fontWeight: 500 }}>{restaurant.name}</h3>
                <p className="text-[#3a2a1a]/40 text-[11px] tracking-[0.1em] uppercase mb-3" style={{ ...body, fontWeight: 500 }}>{restaurant.cuisine}</p>
                <p className="text-[#4B4A4A]/70 text-[14px] leading-relaxed" style={body}>{restaurant.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   8. GALLERY
   ═══════════════════════════════════════════════════════════════ */
function GallerySection() {
  const images = [
    { src: CDN.s1, alt: "Overwater villas" },
    { src: CDN.s2, alt: "Caribbean lagoon" },
    { src: CDN.s3, alt: "Island experience" },
    { src: CDN.s4, alt: "Aerial resort view" },
    { src: CDN.s1, alt: "Villa detail" },
    { src: CDN.s2, alt: "Tropical paradise" },
  ];
  return (
    <section id="gallery" className={sectionPadding}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Gallery</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-10 md:mb-14" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>Island Moments</h2>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {images.map((img, i) => (
            <FadeIn key={i} delay={i * 0.08} className={i === 0 ? "col-span-2 md:col-span-2 row-span-2" : ""}>
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover rounded-lg" style={{ aspectRatio: i === 0 ? "4/3" : "1/1" }} loading="lazy" />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PLACEHOLDER SECTIONS (Getting Here, Reviews)
   ═══════════════════════════════════════════════════════════════ */
function GettingHereSection() {
  return null;
}

function ReviewsSection() {
  return null;
}
