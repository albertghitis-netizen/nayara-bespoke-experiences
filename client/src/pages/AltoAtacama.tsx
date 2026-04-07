/*
 * NAYARA ALTO ATACAMA — Atacama Desert, Chile
 * Rebuilt with new structure: Story (s1 video/s2 image) → Rooms (s3 video/s4 image) → Experiences → Sustainability → Wellness → Gastronomy → Gallery → Footer
 */
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import NativeVideo from "@/components/NativeVideo";
import { useIsMobile } from "@/hooks/useMobile";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import { properties, type Property, type Excursion, type Treatment } from "@/data/properties";
import { atacamaDiningCollection } from "@/data/dining";
import PillarCrossLink from "@/components/PillarCrossLink";
import { AwardBadgeStrip } from "@/components/AwardBadges";

const atacama = properties.find((p: Property) => p.id === "alto-atacama")!;

/* ─── CDN Assets ─────────────────────────────────────────────── */
const CDN = {
  heroDesktop: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-hero-desktop-hq_732fe8b3.mp4",
  heroMobile: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-hero-vertical-hq_d81c629e.mp4",
  s1: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Untitleddesign-17_d0de17d2.JPG",
  s2: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/11_576297a8.jpg",
  s3: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/trim_7f2fc685.mov",
  s4: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/4O1A1949-NayaraAltoAtacama-RainbowValley-byBriceFerreStudio(1)_a94c41d0.jpeg",
};

/* ─── Typography ─────────────────────────────────────────────── */
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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-[#3a2a1a]/40 text-[11px] tracking-[0.15em] uppercase mb-3" style={{ ...body, fontWeight: 500 }}>{children}</p>;
}

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function AltoAtacama() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f3ef] via-[#f5f0ea] to-[#f7f3ef]">
      <BrandNavigation pageType="property" centerLinkHome />
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
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <NativeVideo src={heroVideo} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6 md:px-10">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }} className="text-white text-2xl md:text-4xl lg:text-5xl leading-[0.95] tracking-wide text-center" style={heading}>
          Atacama Desert Oasis Under the Stars
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} className="text-white/60 text-[11px] md:text-[13px] mt-4 tracking-[0.25em] uppercase" style={body}>
          Chile · All Ages
        </motion.p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   2. STORY — Text left + s1 video right + s2 image below
   ═══════════════════════════════════════════════════════════════ */
function StorySection() {
  return (
    <section id="story" className={sectionPadding}>
      <div className={maxW}>
        {/* Story text left + s1 video right */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start mb-12">
          <FadeIn className="md:flex-1">
            <SectionLabel>The Property</SectionLabel>
            <h2 className="text-[#4B4A4A] mb-6" style={{ ...heading, fontSize: "clamp(24px, 3.5vw, 38px)", lineHeight: 1.15 }}>
              Mars on Earth
            </h2>
            <p className="text-[#4B4A4A]/70 text-[15px] leading-relaxed mb-4" style={body}>
              {atacama.heroSubtitle}
            </p>
            <p className="text-[#4B4A4A]/70 text-[15px] leading-relaxed" style={body}>
              Nayara Alto Atacama is an otherworldly sanctuary in the world's driest desert, where the landscape resembles Mars itself. Surrounded by multicolored mountains, salt flats, and endless horizons, this luxury oasis offers stargazing experiences, desert adventures, and world-class wellness in one of Earth's most remote and magical locations.
            </p>
            <AwardBadgeStrip property="alto-atacama" />
          </FadeIn>
          <FadeIn delay={0.2} className="md:flex-1">
            <img src={CDN.s1} alt="Rainbow Valley landscape" className="w-full object-cover rounded-lg" loading="lazy" style={{ aspectRatio: "3/4" }} />
          </FadeIn>
        </div>

        {/* s2 image below */}
        <FadeIn delay={0.3}>
          <img src={CDN.s2} alt="Nayara Alto Atacama resort exterior with desert mountains" className="w-full object-cover rounded-lg" loading="lazy" style={{ aspectRatio: "16/9" }} />
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   3. ROOMS — s3 video left + H3 right + s4 image below
   ═══════════════════════════════════════════════════════════════ */
function RoomsSection() {
  return (
    <section id="rooms" className={`${sectionPadding} bg-white/30`}>
      <div className={maxW}>
        {/* s3 video left + H3 right */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start mb-12">
          <FadeIn delay={0.1} className="md:flex-1 order-2 md:order-1">
            <img src={CDN.s3} alt="Desert suite interior" className="w-full object-cover rounded-lg" loading="lazy" style={{ aspectRatio: "3/4" }} />
          </FadeIn>
          <FadeIn className="md:flex-1 order-1 md:order-2">
            <SectionLabel>Accommodations</SectionLabel>
            <h3 className="text-[#4B4A4A] mb-6" style={{ ...heading, fontSize: "clamp(24px, 3.5vw, 38px)", lineHeight: 1.15 }}>
              Desert Suites
            </h3>
            <p className="text-[#4B4A4A]/70 text-[15px] leading-relaxed" style={body}>
              Each suite is a private sanctuary with panoramic desert views, heated infinity pools, and direct access to the Atacama landscape. Designed for ultimate comfort and contemplation, these accommodations blend luxury with the raw beauty of the desert, offering the perfect base for stargazing, meditation, and exploration.
            </p>
          </FadeIn>
        </div>

        {/* s4 image below */}
        <FadeIn delay={0.3}>
          <img src={CDN.s4} alt="Hiker in Rainbow Valley with multicolored mountains" className="w-full object-cover rounded-lg" loading="lazy" style={{ aspectRatio: "16/9" }} />
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
  const categories = atacama.excursionCategories || [];
  const filtered = activeCategory === "all" ? atacama.excursions : atacama.excursions.filter((e: Excursion) => e.category === activeCategory);
  return (
    <section id="experiences" className={`${sectionPadding} bg-white/30`}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Experiences</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-6 md:mb-10" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>Desert Explorations</h2>
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
    { title: "Desert Preservation", desc: "Protecting the Atacama's unique ecosystem through sustainable tourism practices and habitat conservation programs." },
    { title: "Water Stewardship", desc: "Minimizing water usage in the world's driest desert through advanced recycling and conservation technologies." },
    { title: "Community Support", desc: "Supporting local communities through employment, education, and cultural preservation initiatives in the Atacama region." },
    { title: "Carbon Neutral Operations", desc: "Committed to carbon neutrality through renewable energy, waste reduction, and offset programs." },
  ];
  return (
    <section id="sustainability" className={sectionPadding}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Sustainability</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-6 md:mb-10" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>Protecting the Desert</h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {initiatives.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="border-l-2 border-amber-600/30 pl-4">
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
  const categories = atacama.spaCategories || [];
  const filtered = activeCategory === "all" ? atacama.treatments : atacama.treatments.filter((t: Treatment) => t.category === activeCategory);
  return (
    <section id="wellness" className={`${sectionPadding} bg-white/30`}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>{atacama.theme.sectionLabel}</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-6 md:mb-10" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>{atacama.theme.spaHeadline.replace("\n", " ")}</h2>
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
  const restaurants = Array.isArray(atacamaDiningCollection) ? atacamaDiningCollection : [atacamaDiningCollection];
  return (
    <section id="gastronomy" className={sectionPadding}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>The Table</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-6 md:mb-10" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>Desert Dining</h2>
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
    { src: CDN.s1, alt: "Desert landscape" },
    { src: CDN.s2, alt: "Resort exterior" },
    { src: CDN.s3, alt: "Suite experience" },
    { src: CDN.s4, alt: "Rainbow Valley" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/CFNetworkDownload_zSiOOV.tmp(1)_17142a4b.mov", alt: "Desert walk" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Video_Nayara_Atacama00003_aeb971e9.MP4", alt: "Atacama desert exploration" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Video_Nayara_Atacama00007_8576aa55.MP4", alt: "Atacama stargazing" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-flamingo-lagoon_4c99eefc.mov", alt: "Flamingos at Atacama lagoon" },
  ];
  return (
    <section id="gallery" className={sectionPadding}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Gallery</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-10 md:mb-14" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>Mars on Earth</h2>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {images.map((img, i) => {
            const isVideo = img.src.endsWith('.mov') || img.src.endsWith('.mp4') || img.src.endsWith('.MP4');
            return (
              <FadeIn key={i} delay={i * 0.08} className={i === 0 ? "col-span-2 md:col-span-2 row-span-2" : ""}>
                {isVideo ? (
                  <video src={img.src} className="w-full h-full object-cover rounded-lg" style={{ aspectRatio: i === 0 ? "4/3" : "1/1" }} autoPlay muted loop playsInline />
                ) : (
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover rounded-lg" style={{ aspectRatio: i === 0 ? "4/3" : "1/1" }} loading="lazy" />
                )}
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
