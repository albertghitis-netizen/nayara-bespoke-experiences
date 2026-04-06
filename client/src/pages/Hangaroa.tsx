/*
 * NAYARA HANGAROA — Easter Island, Chile
 * Rebuilt with new structure: Story (s1/s2) → Rooms (s3/s4) → Experiences → Sustainability → Wellness → Gastronomy → Gallery → Footer
 */
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import NativeVideo from "@/components/NativeVideo";
import { useIsMobile } from "@/hooks/useMobile";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import { properties, type Property, type Excursion, type Treatment } from "@/data/properties";
import { hangaroaDining } from "@/data/dining";
import PillarCrossLink from "@/components/PillarCrossLink";
import { AwardBadgeStrip } from "@/components/AwardBadges";

const hangaroa = properties.find((p: Property) => p.id === "hangaroa")!;

/* ─── CDN Assets ─────────────────────────────────────────────── */
const CDN = {
  heroVideo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/ED6EABEF-8780-4A68-A4BF-9E6978CA530A_44406169.mov",
  s1: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/RapaNui2(1)_179dfb19.jpeg",
  s2: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Untitleddesign-20_b052852b.jpg",
  s3: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/NH_45_42b93d04.JPG",
  s4: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/RapaNui2(1)_179dfb19.jpeg",
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
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
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
export default function Hangaroa() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f3f3f2] via-[#f0f0ee] to-[#f3f3f2]">
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
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <NativeVideo src={CDN.heroVideo} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6 md:px-10">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }} className="text-white text-2xl md:text-4xl lg:text-5xl leading-[0.95] tracking-wide text-center" style={heading}>
          Ancient Mysteries Meet Modern Luxury
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} className="text-white/60 text-[11px] md:text-[13px] mt-4 tracking-[0.25em] uppercase" style={body}>
          Easter Island · Chile
        </motion.p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   2. STORY — Text left + s1 image right + s2 image below
   ═══════════════════════════════════════════════════════════════ */
function StorySection() {
  return (
    <section id="story" className={sectionPadding}>
      <div className={maxW}>
        {/* Story text left + s1 image right */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start mb-12">
          <FadeIn className="md:flex-1">
            <SectionLabel>The Property</SectionLabel>
            <h2 className="text-[#4B4A4A] mb-6" style={{ ...heading, fontSize: "clamp(24px, 3.5vw, 38px)", lineHeight: 1.15 }}>
              Where Legend Lives
            </h2>
            <p className="text-[#4B4A4A]/70 text-[15px] leading-relaxed mb-4" style={body}>
              {hangaroa.heroSubtitle}
            </p>
            <p className="text-[#4B4A4A]/70 text-[15px] leading-relaxed" style={body}>
              Nayara Hangaroa is perched on one of the world's most remote islands, where ancient Rapa Nui culture thrives alongside contemporary luxury. Surrounded by iconic Moai statues and pristine Pacific vistas, this sanctuary offers cultural immersion, spiritual exploration, and world-class hospitality in a place where time feels suspended.
            </p>
            <AwardBadgeStrip property="hangaroa" />
          </FadeIn>
          <FadeIn delay={0.2} className="md:flex-1">
            <img src={CDN.s1} alt="Rapa Nui cultural performer with traditional face paint" className="w-full object-cover rounded-lg" style={{ aspectRatio: "3/4" }} loading="lazy" />
          </FadeIn>
        </div>

        {/* s2 image below */}
        <FadeIn delay={0.3}>
          <img src={CDN.s2} alt="Iconic Moai statues on Easter Island" className="w-full object-cover rounded-lg" loading="lazy" style={{ aspectRatio: "16/9" }} />
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   3. ROOMS — s3 image left + H3 right + s4 video below
   ═══════════════════════════════════════════════════════════════ */
function RoomsSection() {
  return (
    <section id="rooms" className={`${sectionPadding} bg-white/30`}>
      <div className={maxW}>
        {/* s3 image left + H3 right */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start mb-12">
          <FadeIn delay={0.1} className="md:flex-1 order-2 md:order-1">
            <img src={CDN.s3} alt="Rapa Nui woman with traditional face paint and shell headdress" className="w-full object-cover rounded-lg" style={{ aspectRatio: "3/4" }} loading="lazy" />
          </FadeIn>
          <FadeIn className="md:flex-1 order-1 md:order-2">
            <SectionLabel>Accommodations</SectionLabel>
            <h3 className="text-[#4B4A4A] mb-6" style={{ ...heading, fontSize: "clamp(24px, 3.5vw, 38px)", lineHeight: 1.15 }}>
              Island Suites
            </h3>
            <p className="text-[#4B4A4A]/70 text-[15px] leading-relaxed" style={body}>
              Each suite is designed to honor the island's cultural heritage while providing contemporary comfort. With panoramic ocean views, private terraces, and thoughtful Rapa Nui-inspired design, these accommodations offer the perfect sanctuary for contemplating ancient mysteries and connecting with the island's spiritual energy.
            </p>
          </FadeIn>
        </div>

        {/* s4 video below */}
        <FadeIn delay={0.3}>
          <div style={{ aspectRatio: "16/9", overflow: "hidden", borderRadius: "0.5rem" }}>
            <NativeVideo src={CDN.s4} className="w-full h-full object-cover" autoPlay muted loop playsInline />
          </div>
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
  const categories = hangaroa.excursionCategories || [];
  const filtered = activeCategory === "all" ? hangaroa.excursions : hangaroa.excursions.filter((e: Excursion) => e.category === activeCategory);
  return (
    <section id="experiences" className={`${sectionPadding} bg-white/30`}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Experiences</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-6 md:mb-10" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>Cultural Journeys</h2>
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
    { title: "Cultural Preservation", desc: "Supporting Rapa Nui cultural traditions through partnerships with local communities and educational programs." },
    { title: "Island Stewardship", desc: "Protecting Easter Island's unique ecosystem and archaeological heritage through sustainable tourism practices." },
    { title: "Community Partnership", desc: "Providing employment and economic opportunities for local residents while respecting cultural values." },
    { title: "Environmental Conservation", desc: "Minimizing environmental impact through renewable energy, waste reduction, and ocean conservation initiatives." },
  ];
  return (
    <section id="sustainability" className={sectionPadding}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Sustainability</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-6 md:mb-10" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>Honoring the Island</h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {initiatives.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="border-l-2 border-teal-600/30 pl-4">
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
  const categories = hangaroa.spaCategories || [];
  const filtered = activeCategory === "all" ? hangaroa.treatments : hangaroa.treatments.filter((t: Treatment) => t.category === activeCategory);
  return (
    <section id="wellness" className={`${sectionPadding} bg-white/30`}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>{hangaroa.theme.sectionLabel}</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-6 md:mb-10" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>{hangaroa.theme.spaHeadline.replace("\n", " ")}</h2>
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
  const restaurants = Array.isArray(hangaroaDining) ? hangaroaDining : [hangaroaDining];
  return (
    <section id="gastronomy" className={sectionPadding}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Gastronomy</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-6 md:mb-10" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>Island Flavors</h2>
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
    { src: CDN.heroVideo, alt: "Easter Island cinematic", span: "full" },
    { src: CDN.s1, alt: "Rapa Nui cultural performer" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-warrior-portrait_572aaf06.jpg", alt: "Rapa Nui warrior portrait" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-moai-horses-sunset_8152e72d.jpg", alt: "Moai statues with wild horses at sunset" },
    { src: CDN.s4, alt: "Easter Island landscape video", span: "full" },
    { src: CDN.s2, alt: "Moai statues at dusk" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-moai-pukao-ocean_dc261e27.jpg", alt: "Moai with pukao hats overlooking ocean" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-warriors-group-moai_daee7723.jpg", alt: "Rapa Nui warriors performing at Moai site" },
    { src: CDN.s3, alt: "Island woman" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Untitleddesign-16_aa3fc296.JPG", alt: "Traditional face paint ceremony" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Untitleddesign-21_c15d07fa.JPG", alt: "Woman at Moai site" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Untitleddesign-22_3f8e6011.JPG", alt: "Cultural adornment" },
  ];
  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="px-6 md:px-10">
        <div className={maxW}>
          <FadeIn>
            <SectionLabel>Gallery</SectionLabel>
            <h2 className="text-[#4B4A4A] mb-10 md:mb-14" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>Island Moments</h2>
          </FadeIn>
        </div>
      </div>
      {/* Full-width parallax gallery — unique to Hangaroa */}
      <div className="flex flex-col gap-2 md:gap-3">
        {images.map((img, i) => {
          const isVideo = img.src.toLowerCase().endsWith('.mov') || img.src.toLowerCase().endsWith('.mp4');
          const isFull = (img as any).span === "full";
          if (isFull) {
            return (
              <FadeIn key={i} delay={0.1}>
                <div className="w-full overflow-hidden" style={{ height: "60vh" }}>
                  {isVideo ? (
                    <video src={img.src} className="w-full h-full object-cover" autoPlay muted loop playsInline />
                  ) : (
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                  )}
                </div>
              </FadeIn>
            );
          }
          return null;
        })}
        <div className="px-6 md:px-10">
          <div className={maxW}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
              {images.filter((img) => !(img as any).span).map((img, i) => {
                const isVideo = img.src.toLowerCase().endsWith('.mov') || img.src.toLowerCase().endsWith('.mp4');
                return (
                  <FadeIn key={i} delay={i * 0.06} className={i === 0 ? "col-span-2 md:col-span-2 row-span-2" : ""}>
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
        </div>
      </div>
    </section>
  );
}
