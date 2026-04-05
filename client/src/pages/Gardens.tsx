/*
 * NAYARA GARDENS — Arenal, Costa Rica
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
import PillarCrossLink from "@/components/PillarCrossLink";

const gardens = properties.find((p: Property) => p.id === "gardens")!;

const CDN = {
  heroDesktop: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/gardens-hero-desktop_88c542ed.mp4",
  casita: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/gardens-s3-casita_4be73573.jpg",
  awards: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/321D9B07-0FF2-459E-BBA0-623B1062AA25_38485c6d.jpeg",
  michelin: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/michelin-3-keys_10864925.png",
  landscape: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/pasted_file_gxCsYs_20-cropped_c9c2c33f.jpg",
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

export default function Gardens() {
  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <ScrollProgress />
      <BrandNavigation pageType="property" centerLabel="Nayara Gardens" centerLinkHome />
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
          A Rainforest Resort at the Foot of Arenal Volcano
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} className="text-white/60 text-[11px] md:text-[13px] mt-4 tracking-[0.25em] uppercase" style={body}>
          Costa Rica · All Ages
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
              Where Volcano Meets Rainforest
            </h2>
            <p className="text-[#4B4A4A]/70 text-[15px] leading-relaxed mb-4" style={body}>
              {gardens.heroSubtitle}
            </p>
            <p className="text-[#4B4A4A]/70 text-[15px] leading-relaxed" style={body}>
              Nayara Gardens is the original Nayara property — a collection of freestanding casitas nestled in tropical gardens with views of Arenal Volcano. Michelin 3 Key recognized, the resort combines Costa Rica's natural abundance with refined hospitality, offering guests access to five restaurants, a world-class spa, and guided adventures through the surrounding rainforest.
            </p>
          </FadeIn>
          <FadeIn delay={0.2} className="md:flex-1">
            <img src={CDN.casita} alt="Nayara Gardens casita in the rainforest" className="w-full object-cover rounded-lg" style={{ aspectRatio: "3/4" }} loading="lazy" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function RoomsSection() {
  const rooms = [
    { name: "Arenal Casita", desc: "Freestanding casitas with private garden terrace, outdoor Jacuzzi, and direct views of Arenal Volcano through the rainforest canopy.", image: CDN.casita },
    { name: "Rainforest Bungalow", desc: "Spacious bungalows surrounded by tropical gardens, with indoor-outdoor living and natural stone bathrooms.", image: CDN.landscape },
  ];
  return (
    <section id="rooms" className={`${sectionPadding} bg-white/30`}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Rooms &amp; Casitas</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-10 md:mb-14" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>Rainforest Living</h2>
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
    { src: CDN.awards, alt: "Nayara Gardens aerial view" },
    { src: CDN.casita, alt: "Casita with volcano view" },
    { src: CDN.landscape, alt: "Arenal landscape" },
    { src: CDN.michelin, alt: "Michelin 3 Key recognition" },
    { src: CDN.casita, alt: "Garden pathway" },
    { src: CDN.awards, alt: "Resort grounds" },
  ];
  return (
    <section id="gallery" className={sectionPadding}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Gallery</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-10 md:mb-14" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>Life in the Canopy</h2>
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
  const categories = gardens.excursionCategories || [];
  const filtered = activeCategory === "all" ? gardens.excursions : gardens.excursions.filter((e: Excursion) => e.category === activeCategory);
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
    { title: "Rainforest Conservation", desc: "Over 70 acres of protected primary and secondary rainforest surrounding the resort, providing habitat for hundreds of bird species and wildlife." },
    { title: "Organic Gardens", desc: "On-site organic gardens supply our five restaurants with fresh herbs, vegetables, and fruits, reducing food miles to nearly zero." },
    { title: "Carbon Neutral Operations", desc: "Costa Rica's commitment to carbon neutrality is matched by our own — renewable energy, waste reduction, and reforestation programs." },
    { title: "Community Impact", desc: "Employing over 500 local staff and supporting community education, healthcare, and cultural preservation programs in the Arenal region." },
  ];
  return (
    <section id="sustainability" className={sectionPadding}>
      <div className={maxW}>
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          <div className="md:flex-1">
            <FadeIn>
              <SectionLabel>Sustainability</SectionLabel>
              <h2 className="text-[#4B4A4A] mb-6" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>Rooted in the Rainforest</h2>
              <p className="text-[#4B4A4A]/70 text-[15px] leading-relaxed mb-8" style={body}>
                Nayara was born from a deep love for Costa Rica's biodiversity. Every decision — from the organic gardens that feed our restaurants to the protected rainforest corridors that surround the property — reflects our commitment to leaving the land better than we found it.
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
            <img src={CDN.landscape} alt="Arenal rainforest landscape" className="w-full object-cover rounded-lg" style={{ aspectRatio: "3/4" }} loading="lazy" />
          </FadeIn>
        </div>
      
        <PillarCrossLink pillar="experiences" />
      </div>
    </section>
  );
}

function WellnessSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = gardens.spaCategories || [];
  const filtered = activeCategory === "all" ? gardens.treatments : gardens.treatments.filter((t: Treatment) => t.category === activeCategory);
  return (
    <section id="wellness" className={`${sectionPadding} bg-white/30`}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>{gardens.theme.sectionLabel}</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-6 md:mb-10" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>{gardens.theme.spaHeadline.replace("\n", " ")}</h2>
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
      
        <PillarCrossLink pillar="sustainability" />
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
      
        <PillarCrossLink pillar="wellness" />
      </div>
    </section>
  );
}

function GettingHereSection() {
  const details = [
    { label: "Nearest Airport", value: "Juan Santamar\u00eda International Airport, San Jos\u00e9 (SJO)" },
    { label: "From San Jos\u00e9", value: "3-hour scenic drive through the Central Valley, or 25-minute domestic flight to La Fortuna" },
    { label: "Airport Transfer", value: "Private transfer through coffee plantations and cloud forest to the resort" },
    { label: "Concierge", value: "Our team arranges all transfers, volcano excursions, and rainforest adventures" },
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
              Contact: <a href={`mailto:${gardens.email}`} className="underline underline-offset-2 hover:text-[#3a2a1a] transition-colors">{gardens.email}</a>
              {gardens.phone && <> &middot; <a href={`tel:${gardens.phone}`} className="underline underline-offset-2 hover:text-[#3a2a1a] transition-colors">{gardens.phone}</a></>}
            </p>
          </div>
        </FadeIn>
      
        <PillarCrossLink pillar="gastronomy" />
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
              &ldquo;Waking up to the sound of toucans with Arenal Volcano framed in your window is something you never forget. The food, the spa, the staff — everything is exceptional.&rdquo;
            </blockquote>
            <p className="text-[#3a2a1a]/40 text-[12px] tracking-[0.1em] uppercase mb-8" style={{ ...body, fontWeight: 500 }}>TripAdvisor Guest Review</p>
            <a href="https://www.tripadvisor.com/Hotel_Review-g309226-d1478683-Reviews-Nayara_Gardens-Arenal_Volcano_National_Park_Province_of_Alajuela.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3a2a1a]/5 text-[#3a2a1a]/70 hover:bg-[#3a2a1a]/10 hover:text-[#3a2a1a] transition-all text-[13px] tracking-[0.05em]" style={{ ...body, fontWeight: 500 }}>
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
