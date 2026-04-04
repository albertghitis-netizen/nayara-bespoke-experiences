/*
 * NAYARA SPRINGS — Arenal, Costa Rica
 * Standardized property page template
 * Sections: Hero → Story → Rooms → Gallery → Experiences → Sustainability → Wellness → Gastronomy → Getting Here → Reviews → Footer
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

const springs = properties.find((p: Property) => p.id === "springs")!;

const CDN = {
  heroDesktop: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-hero-horizontal-hq_c0efb638.mp4",
  pools: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-s1-pools_8e255e18.png",
  robeCanopy: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-s3-robe-canopy_c9c365ff.jpg",
  landscape: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/pasted_file_gxCsYs_20-cropped_c9c2c33f.jpg",
  michelin: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/michelin-3-keys_10864925.png",
};

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

export default function Springs() {
  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <ScrollProgress />
      <BrandNavigation pageType="property" centerLabel="Nayara Springs" centerLinkHome />
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
          Private Hot Springs in the Canopy
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} className="text-white/60 text-[13px] md:text-[15px] mt-4 tracking-[0.08em]" style={body}>
          Arenal Volcano, Costa Rica
        </motion.p>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section id="story" className={sectionPadding}>
      <div className={maxW}>
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          <FadeIn className="md:flex-1">
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
          <FadeIn delay={0.2} className="md:flex-1">
            <img src={CDN.pools} alt="Nayara Springs private hot spring pools" className="w-full object-cover rounded-lg" style={{ aspectRatio: "3/4" }} loading="lazy" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function RoomsSection() {
  const rooms = [
    { name: "Spring Villa", desc: "Private villa with natural volcanic hot spring pool, outdoor rain shower, and views of Arenal Volcano through the canopy.", image: CDN.pools },
    { name: "Spring Suite", desc: "Spacious suite with private plunge pool, indoor-outdoor living, and direct access to the resort's hot spring network.", image: CDN.robeCanopy },
  ];
  return (
    <section id="rooms" className={`${sectionPadding} bg-white/30`}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Villas &amp; Suites</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-10 md:mb-14" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>Private Springs, Private Paradise</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {rooms.map((room, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="group">
                <div className="overflow-hidden rounded-lg mb-4">
                  <img src={room.image} alt={room.name} className="w-full object-cover group-hover:scale-105 transition-transform duration-700" style={{ aspectRatio: "16/10" }} loading="lazy" />
                </div>
                <h3 className="text-[#3a2a1a] text-[18px] mb-2" style={{ ...heading, fontWeight: 500 }}>{room.name}</h3>
                <p className="text-[#4B4A4A]/70 text-[14px] leading-relaxed" style={body}>{room.desc}</p>
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
    { src: CDN.pools, alt: "Private hot spring pools" },
    { src: CDN.robeCanopy, alt: "Canopy walkway at Nayara Springs" },
    { src: CDN.landscape, alt: "Arenal Volcano landscape" },
    { src: CDN.pools, alt: "Mineral spring detail" },
    { src: CDN.robeCanopy, alt: "Spa experience" },
    { src: CDN.landscape, alt: "Rainforest canopy" },
  ];
  return (
    <section id="gallery" className={sectionPadding}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Gallery</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-10 md:mb-14" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>Volcanic Luxury</h2>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {images.map((img, i) => (
            <FadeIn key={i} delay={i * 0.08} className={i === 0 ? "col-span-2 md:col-span-2 row-span-2" : ""}>
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" style={{ aspectRatio: i === 0 ? "4/3" : "1/1" }} loading="lazy" />
            </FadeIn>
          ))}
        </div>
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
                    {excursion.duration}{excursion.price ? ` \u00b7 ${excursion.price}` : ""}
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
  const initiatives = [
    { title: "Natural Hot Springs", desc: "Our volcanic mineral springs are sustainably managed, with water returned to the earth after use, maintaining the delicate geothermal balance." },
    { title: "Rainforest Preservation", desc: "The resort is surrounded by protected primary rainforest, home to sloths, toucans, and hundreds of species that thrive in this corridor." },
    { title: "Organic Farm-to-Table", desc: "Five restaurants sourcing from on-site organic gardens and local farms, reducing our carbon footprint while celebrating Costa Rican flavors." },
    { title: "Renewable Energy", desc: "Leveraging Costa Rica's nearly 100% renewable energy grid and supplementing with on-site solar to minimize our environmental impact." },
  ];
  return (
    <section id="sustainability" className={sectionPadding}>
      <div className={maxW}>
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          <div className="md:flex-1">
            <FadeIn>
              <SectionLabel>Sustainability</SectionLabel>
              <h2 className="text-[#4B4A4A] mb-6" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>Living with the Land</h2>
              <p className="text-[#4B4A4A]/70 text-[15px] leading-relaxed mb-8" style={body}>
                At Nayara Springs, luxury and sustainability are inseparable. The volcanic mineral springs that define the experience are managed with the same care we bring to the surrounding rainforest — ensuring that every guest leaves a lighter footprint than they arrived with.
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {initiatives.map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="border-l-2 border-emerald-600/30 pl-4">
                    <h3 className="text-[#3a2a1a] text-[15px] mb-2" style={{ ...heading, fontWeight: 500 }}>{item.title}</h3>
                    <p className="text-[#4B4A4A]/60 text-[13px] leading-relaxed" style={body}>{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
          <FadeIn delay={0.2} className="md:flex-1">
            <img src={CDN.robeCanopy} alt="Rainforest canopy at Nayara Springs" className="w-full object-cover rounded-lg" style={{ aspectRatio: "3/4" }} loading="lazy" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function WellnessSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = springs.spaCategories || [];
  const filtered = activeCategory === "all" ? springs.treatments : springs.treatments.filter((t: Treatment) => t.category === activeCategory);
  return (
    <section id="wellness" className={`${sectionPadding} bg-white/30`}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>{springs.theme.sectionLabel}</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-6 md:mb-10" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>{springs.theme.spaHeadline.replace("\n", " ")}</h2>
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
                  {treatment.duration}{treatment.price ? ` \u00b7 ${treatment.price}` : ""}
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

function GastronomySection() {
  const dining = costaRicaDining;
  return (
    <section id="gastronomy" className={sectionPadding}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Gastronomy</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-4" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>{dining.headline}</h2>
          <p className="text-[#4B4A4A]/70 text-[15px] leading-relaxed mb-10 md:mb-14 max-w-2xl" style={body}>{dining.description}</p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dining.restaurants.map((restaurant, i) => (
            <FadeIn key={restaurant.id} delay={i * 0.1}>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 hover:bg-white/70 transition-colors">
                <h3 className="text-[#3a2a1a] text-[20px] mb-2" style={{ ...heading, fontWeight: 500 }}>{restaurant.name}</h3>
                <p className="text-[#3a2a1a]/40 text-[11px] tracking-[0.1em] uppercase mb-4" style={{ ...body, fontWeight: 500 }}>{restaurant.cuisine}</p>
                <p className="text-[#4B4A4A]/70 text-[14px] leading-relaxed mb-4" style={body}>{restaurant.tagline}</p>
                {restaurant.atmosphere && <p className="text-[#4B4A4A]/50 text-[12px] italic" style={body}>{restaurant.atmosphere}</p>}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function GettingHereSection() {
  const details = [
    { label: "Nearest Airport", value: "Juan Santamar\u00eda International Airport, San Jos\u00e9 (SJO)" },
    { label: "From San Jos\u00e9", value: "3-hour scenic drive through the Central Valley, or 25-minute domestic flight to La Fortuna" },
    { label: "Airport Transfer", value: "Private transfer through coffee plantations and cloud forest to the resort" },
    { label: "Concierge", value: "Our team arranges all transfers, volcano excursions, and spa experiences" },
  ];
  return (
    <section id="getting-here" className={`${sectionPadding} bg-white/30`}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Getting Here</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-10 md:mb-14" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>Your Journey to Arenal</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
          {details.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div>
                <p className="text-[#3a2a1a]/40 text-[11px] tracking-[0.15em] uppercase mb-2" style={{ ...body, fontWeight: 600 }}>{item.label}</p>
                <p className="text-[#4B4A4A] text-[15px] leading-relaxed" style={heading}>{item.value}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.4}>
          <div className="mt-10 md:mt-14">
            <p className="text-[#4B4A4A]/60 text-[13px]" style={body}>
              Contact: <a href={`mailto:${springs.email}`} className="underline underline-offset-2 hover:text-[#3a2a1a] transition-colors">{springs.email}</a>
              {springs.phone && <> &middot; <a href={`tel:${springs.phone}`} className="underline underline-offset-2 hover:text-[#3a2a1a] transition-colors">{springs.phone}</a></>}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section id="reviews" className={sectionPadding}>
      <div className={maxW}>
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <SectionLabel className="text-center">Guest Reviews</SectionLabel>
            <blockquote className="text-[#4B4A4A] text-[18px] md:text-[22px] italic leading-relaxed mb-6" style={heading}>
              &ldquo;Having your own private hot spring pool surrounded by rainforest is the definition of paradise. The adults-only atmosphere makes it even more special.&rdquo;
            </blockquote>
            <p className="text-[#3a2a1a]/40 text-[12px] tracking-[0.1em] uppercase mb-8" style={{ ...body, fontWeight: 500 }}>TripAdvisor Guest Review</p>
            <a href="https://www.tripadvisor.com/Hotel_Review-g309226-d7085498-Reviews-Nayara_Springs-Arenal_Volcano_National_Park_Province_of_Alajuela.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3a2a1a]/5 text-[#3a2a1a]/70 hover:bg-[#3a2a1a]/10 hover:text-[#3a2a1a] transition-all text-[13px] tracking-[0.05em]" style={{ ...body, fontWeight: 500 }}>
              Read Reviews on TripAdvisor <span className="text-[10px]">&rarr;</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function SectionLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-[#3a2a1a]/35 text-[10px] tracking-[0.3em] uppercase mb-4 ${className}`} style={{ ...body, fontWeight: 600 }}>{children}</p>;
}
