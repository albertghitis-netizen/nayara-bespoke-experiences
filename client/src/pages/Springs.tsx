/*
 * NAYARA SPRINGS — Arenal, Costa Rica
 * Rebuilt with new structure: Story (s1/s2) → Springs Villa (s3/s4) → Experiences → Sustainability → Wellness → Gastronomy → Gallery → Footer
 */
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import BlobVideo from "@/components/BlobVideo";
import { useIsMobile } from "@/hooks/useMobile";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BrandNavigation from "@/components/BrandNavigation";
import { properties, type Property, type Excursion, type Treatment } from "@/data/properties";
import { costaRicaDining } from "@/data/dining";
import PillarCrossLink from "@/components/PillarCrossLink";

const springs = properties.find((p: Property) => p.id === "springs")!;

const CDN = {
  heroDesktop: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-hero-horizontal-hq_c0efb638.mp4",
  s1: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/6_0a37cc95.jpg",
  s2: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/123_739860cc.jpg",
  s3: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-s3-robe-canopy_c9c365ff.jpg",
  s4: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/61_0020df3e.jpg",
  michelin: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/michelin-3-keys_10864925.png",
};

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;
const sectionPadding = "py-16 md:py-24 px-6 md:px-10"; // Note: StorySection uses custom padding (py-5 md:py-8)
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

export default function Springs() {
  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <ScrollProgress />
      <BrandNavigation pageType="property" centerLabel="Nayara Springs" centerLinkHome />
      <HeroSection />
      <StorySection />
      <SpringsVillaSection />
      <ExperiencesSection />
      <SustainabilitySection />
      <WellnessSection />
      <GastronomySection />
      <GallerySection />
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <BlobVideo src={CDN.heroDesktop} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6 md:px-10">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }} className="text-white text-2xl md:text-4xl lg:text-5xl leading-[0.95] tracking-wide text-center" style={heading}>
          Private Hot Spring Villas in Costa Rica
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} className="text-white/60 text-[11px] md:text-[13px] mt-4 tracking-[0.25em] uppercase" style={body}>
          Adults Only
        </motion.p>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section id="story" className="py-5 md:py-8 px-6 md:px-10">
      {/* Story text left + s1 vertical right (s1 bleeds to right edge) */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start mb-12 md:mb-0">
        <div className="max-w-[1200px] mx-auto md:flex-1 md:py-12">
          <FadeIn>
            <SectionLabel>The Property</SectionLabel>
            <h2 className="text-[#4B4A4A] mb-6" style={{ ...heading, fontSize: "clamp(24px, 3.5vw, 38px)", lineHeight: 1.15 }}>
              Adults-Only Mineral Springs
            </h2>
            <p className="text-[#4B4A4A]/70 text-[15px] leading-relaxed mb-4" style={body}>
              {springs.heroSubtitle}
            </p>
            <p className="text-[#4B4A4A]/70 text-[15px] leading-relaxed" style={body}>
              Nayara Springs is the adults-only sister property to Nayara Gardens. Each villa features a private natural hot spring pool fed by volcanic mineral water, surrounded by the sounds of the rainforest. Michelin 3 Key recognized, the resort offers an intimate, elevated experience with access to all five Nayara restaurants and the full-service Spa Arenal.
            </p>
          </FadeIn>
        </div>
        <FadeIn delay={0.2} className="md:flex-1 w-full md:w-auto md:-mr-10 md:py-12">
          <img src={CDN.s1} alt="Nayara Springs hot spring immersion" className="w-full h-full object-cover" style={{ aspectRatio: "3/4" }} loading="lazy" />
        </FadeIn>
      </div>

      {/* s2 landscape below - bleeds left and right */}
      <FadeIn delay={0.3} className="-mx-6 md:-mx-10 md:mt-12">
        <img src={CDN.s2} alt="Rainforest boardwalk at Nayara Springs" className="w-screen object-cover" loading="lazy" style={{ aspectRatio: "16/9" }} />
      </FadeIn>
    </section>
  );
}

function SpringsVillaSection() {
  return (
    <section id="springs-villa" className={`${sectionPadding} bg-white/30`}>
      <div className={maxW}>
        {/* Text right + s3 vertical left (L-shape with s4 below) */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start mb-0">
          <FadeIn delay={0.1} className="md:flex-1 order-2 md:order-1">
            <img src={CDN.s3} alt="Luxury canopy villa at Nayara Springs" className="w-full object-cover" style={{ aspectRatio: "3/4" }} loading="lazy" />
          </FadeIn>
          <FadeIn className="md:flex-1 order-1 md:order-2 md:py-12">
            <SectionLabel>Accommodations</SectionLabel>
            <h3 className="text-[#4B4A4A] mb-6" style={{ ...heading, fontSize: "clamp(24px, 3.5vw, 38px)", lineHeight: 1.15 }}>
              Springs Villa
            </h3>
            <p className="text-[#4B4A4A]/70 text-[15px] leading-relaxed" style={body}>
              Each Springs Villa features a private natural hot spring pool fed by volcanic mineral water. Designed for ultimate privacy and relaxation, these intimate sanctuaries offer an unparalleled experience of thermal wellness surrounded by rainforest canopy.
            </p>
          </FadeIn>
        </div>

        {/* s4 landscape below - bleeds left and right (L-shape bottom) */}
        <FadeIn delay={0.3} className="-mx-6 md:-mx-10 md:mt-0">
          <img src={CDN.s4} alt="Aerial view of Springs Villa nestled in rainforest" className="w-screen object-cover" loading="lazy" style={{ aspectRatio: "16/9" }} />
        </FadeIn>
      </div>
    </section>
  );
}

function ExperiencesSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = springs.excursionCategories || [];
  const filtered = activeCategory === "all" ? springs.excursions : springs.excursions.filter((e: Excursion) => e.category === activeCategory);
  return (
    <section id="experiences" className={`${sectionPadding} bg-white/30`}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Experiences</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-6 md:mb-10" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>Arenal Adventures</h2>
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

function SustainabilitySection() {
  return (
    <section id="sustainability" className={sectionPadding}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Sustainability</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-6 md:mb-10" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>Beyond Sustainability</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {[
            { title: "Geothermal Energy", desc: "Our natural hot springs are powered by geothermal energy, reducing our carbon footprint while providing authentic thermal experiences." },
            { title: "Rainforest Stewardship", desc: "We actively protect and restore the surrounding rainforest, working with local conservation organizations to preserve biodiversity." },
            { title: "Water Conservation", desc: "Closed-loop water systems and rainwater harvesting minimize our impact on local water resources." },
            { title: "Community Partnership", desc: "We employ local artisans and support regional initiatives that benefit the Arenal community." },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div>
                <h3 className="text-[#3a2a1a] text-[18px] mb-3" style={{ ...heading, fontWeight: 500 }}>{item.title}</h3>
                <p className="text-[#4B4A4A]/70 text-[14px] leading-relaxed" style={body}>{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function WellnessSection() {
  const [activeTab, setActiveTab] = useState("spa");
  const treatments = springs.treatments || [];
  const filtered = treatments.filter((t: Treatment) => t.category === activeTab);
  return (
    <section id="wellness" className={`${sectionPadding} bg-white/30`}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Wellness</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-6 md:mb-10" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>Nurtured by Nature</h2>
        </FadeIn>
        {treatments.length > 0 && (
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap gap-3 mb-8 md:mb-12">
              {Array.from(new Set(treatments.map((t: Treatment) => t.category))).map((cat: string) => (
                <button key={cat} onClick={() => setActiveTab(cat)} className={`px-4 py-2 rounded-full text-[12px] tracking-[0.08em] uppercase transition-all ${activeTab === cat ? "bg-[#3a2a1a] text-white" : "bg-[#3a2a1a]/5 text-[#3a2a1a]/60 hover:bg-[#3a2a1a]/10"}`} style={{ ...body, fontWeight: 500 }}>
                  {cat}
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
                {treatment.duration && (
                  <p className="text-[#3a2a1a]/40 text-[11px] tracking-[0.1em] uppercase mb-3" style={{ ...body, fontWeight: 500 }}>
                    {treatment.duration}{treatment.price ? ` · ${treatment.price}` : ""}
                  </p>
                )}
                <p className="text-[#4B4A4A]/70 text-[13px] leading-relaxed" style={body}>{treatment.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function GastronomySection() {
  const restaurants = Array.isArray(costaRicaDining) ? costaRicaDining : [costaRicaDining];
  return (
    <section id="gastronomy" className={sectionPadding}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Gastronomy</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-6 md:mb-10" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>A Taste of Place</h2>
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

function GallerySection() {
  const images = [
    { src: CDN.s1, alt: "Hot spring immersion" },
    { src: CDN.s2, alt: "Rainforest boardwalk" },
    { src: CDN.s3, alt: "Luxury villa interior" },
    { src: CDN.s4, alt: "Aerial property view" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Untitleddesign-3_e394353d.jpg", alt: "Wildlife monkey" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Untitleddesign-5_f4b0874c.jpg", alt: "Jungle pathway" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Untitleddesign-14_6b456af8.jpg", alt: "Tropical bird" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/CCD6CF80-5F62-40B5-B82A-119D31106C0D_635597b5.mp4", alt: "Nature video" },
  ];
  return (
    <section id="gallery" className={sectionPadding}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Gallery</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-10 md:mb-14" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>Volcanic Luxury</h2>
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
