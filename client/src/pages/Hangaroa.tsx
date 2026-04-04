/*
 * NAYARA HANGAROA — Easter Island, Chile
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
import { hangaroaDining } from "@/data/dining";
import PillarCrossLink from "@/components/PillarCrossLink";

const hangaroa = properties.find((p: Property) => p.id === "hangaroa")!;

/* ─── CDN Assets ─────────────────────────────────────────────── */
const CDN = {
  heroVideo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/3F61FBC1-5FCE-4B13-B142-9C52A0115E01_2370ac58.MOV",
  warrior: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-s1-warrior_e99eb907.jpg",
  moaiSunset: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-s2-moai-sunset_dcd66ecc.jpg",
  aerial: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-aerial_9e07a82e.jpg",
  pool: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-pool_1b0d18e8.jpg",
  room: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-room_5b9eb728.jpg",
  sunset: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-sunset_1238744f.jpg",
};

/* ─── Typography ─────────────────────────────────────────────── */
const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;
const sectionPadding = "py-16 md:py-24 px-6 md:px-10";
const maxW = "max-w-[1200px] mx-auto";

/* ─── FadeIn wrapper ─────────────────────────────────────────── */
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

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function Hangaroa() {
  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <ScrollProgress />
      <BrandNavigation pageType="property" centerLabel="Nayara Hangaroa" centerLinkHome />
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

/* ═══════════════════════════════════════════════════════════════
   1. HERO — Full-screen video + H1
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <BlobVideo src={CDN.heroVideo} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6 md:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-2xl md:text-4xl lg:text-5xl leading-[0.95] tracking-wide text-center"
          style={heading}
        >
          Where Moai Meet the Pacific
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-white/60 text-[13px] md:text-[15px] mt-4 tracking-[0.08em]"
          style={body}
        >
          Easter Island, Chile
        </motion.p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   2. STORY — Two-column intro
   ═══════════════════════════════════════════════════════════════ */
function StorySection() {
  return (
    <section id="story" className={sectionPadding}>
      <div className={maxW}>
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          <FadeIn className="md:flex-1">
            <SectionLabel>The Property</SectionLabel>
            <h2 className="text-[#4B4A4A] mb-6" style={{ ...heading, fontSize: "clamp(24px, 3.5vw, 38px)", lineHeight: 1.15 }}>
              At the Edge of the World
            </h2>
            <p className="text-[#4B4A4A]/70 text-[15px] leading-relaxed mb-4" style={body}>
              {hangaroa.heroSubtitle}
            </p>
            <p className="text-[#4B4A4A]/70 text-[15px] leading-relaxed" style={body}>
              Nayara Hangaroa is the only luxury resort on Rapa Nui, set on a hillside overlooking the Pacific with views to the ceremonial village of Tahai. The architecture draws from traditional Polynesian design, with stone pathways, native gardens, and rooms that open to the ocean breeze.
            </p>
          </FadeIn>
          <FadeIn delay={0.2} className="md:flex-1">
            <img
              src={CDN.warrior}
              alt="Rapa Nui warrior at Nayara Hangaroa"
              className="w-full object-cover rounded-lg"
              style={{ aspectRatio: "3/4" }}
              loading="lazy"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   3. ROOMS — Accommodation overview
   ═══════════════════════════════════════════════════════════════ */
function RoomsSection() {
  const rooms = [
    { name: "Hangaroa Suite", desc: "Spacious suites with panoramic Pacific Ocean views, private terrace, and Polynesian-inspired decor.", image: CDN.room },
    { name: "Premium Room", desc: "Elegant rooms with garden or ocean views, natural materials, and floor-to-ceiling windows.", image: CDN.pool },
  ];

  return (
    <section id="rooms" className={`${sectionPadding} bg-white/30`}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Rooms &amp; Suites</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-10 md:mb-14" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>
            Polynesian Elegance
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {rooms.map((room, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="group">
                <div className="overflow-hidden rounded-lg mb-4">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    style={{ aspectRatio: "16/10" }}
                    loading="lazy"
                  />
                </div>
                <h3 className="text-[#3a2a1a] text-[18px] mb-2" style={{ ...heading, fontWeight: 500 }}>
                  {room.name}
                </h3>
                <p className="text-[#4B4A4A]/70 text-[14px] leading-relaxed" style={body}>
                  {room.desc}
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
   4. GALLERY — 6-image masonry grid
   ═══════════════════════════════════════════════════════════════ */
function GallerySection() {
  const images = [
    { src: CDN.moaiSunset, alt: "Moai statues at sunset on Easter Island" },
    { src: CDN.aerial, alt: "Aerial view of Nayara Hangaroa resort" },
    { src: CDN.pool, alt: "Infinity pool overlooking the Pacific" },
    { src: CDN.room, alt: "Suite interior with ocean view" },
    { src: CDN.sunset, alt: "Pacific sunset from Easter Island" },
    { src: CDN.warrior, alt: "Rapa Nui cultural performance" },
  ];

  return (
    <section id="gallery" className={sectionPadding}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Gallery</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-10 md:mb-14" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>
            Rapa Nui Through Our Lens
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
  const categories = hangaroa.excursionCategories || [];
  const filtered = activeCategory === "all"
    ? hangaroa.excursions
    : hangaroa.excursions.filter((e: Excursion) => e.category === activeCategory);

  return (
    <section id="experiences" className={`${sectionPadding} bg-white/30`}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Experiences</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-6 md:mb-10" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>
            Mysteries of Rapa Nui
          </h2>
        </FadeIn>

        {categories.length > 0 && (
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-8 md:mb-12">
              {categories.map((cat: { id: string; label: string }) => (
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
          {filtered.map((excursion: Excursion, i: number) => (
            <FadeIn key={excursion.id} delay={i * 0.05}>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 hover:bg-white/80 transition-colors">
                <h3 className="text-[#3a2a1a] text-[16px] mb-2" style={{ ...heading, fontWeight: 500 }}>
                  {excursion.name}
                </h3>
                {excursion.duration && (
                  <p className="text-[#3a2a1a]/40 text-[11px] tracking-[0.1em] uppercase mb-3" style={{ ...body, fontWeight: 500 }}>
                    {excursion.duration}{excursion.price ? ` \u00b7 ${excursion.price}` : ""}
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
    { title: "Rapa Nui Heritage Preservation", desc: "Supporting the conservation of archaeological sites, Moai restoration projects, and the living Polynesian culture that defines the island." },
    { title: "Marine Protection", desc: "The waters around Easter Island are part of one of the largest marine protected areas in the world. We support local efforts to protect this fragile ecosystem." },
    { title: "Sustainable Tourism", desc: "Working with the Rapa Nui community to ensure tourism benefits the island\u2019s people while preserving its unique environment and cultural identity." },
    { title: "Energy & Water Conservation", desc: "Solar energy integration, rainwater harvesting, and waste reduction programs adapted to the island\u2019s remote location and limited resources." },
  ];

  return (
    <section id="sustainability" className={sectionPadding}>
      <div className={maxW}>
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          <div className="md:flex-1">
            <FadeIn>
              <SectionLabel>Sustainability</SectionLabel>
              <h2 className="text-[#4B4A4A] mb-6" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>
                Guardians of Rapa Nui
              </h2>
              <p className="text-[#4B4A4A]/70 text-[15px] leading-relaxed mb-8" style={body}>
                Easter Island is one of the most remote inhabited places on Earth. Our responsibility to protect its archaeological heritage, marine ecosystem, and Polynesian culture is woven into every aspect of the resort experience.
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {initiatives.map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="border-l-2 border-sky-600/30 pl-4">
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
              src={CDN.aerial}
              alt="Aerial view of Nayara Hangaroa and the Pacific coast"
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
  const categories = hangaroa.spaCategories || [];
  const filtered = activeCategory === "all"
    ? hangaroa.treatments
    : hangaroa.treatments.filter((t: Treatment) => t.category === activeCategory);

  return (
    <section id="wellness" className={`${sectionPadding} bg-white/30`}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>{hangaroa.theme.sectionLabel}</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-6 md:mb-10" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>
            {hangaroa.theme.spaHeadline.replace("\n", " ")}
          </h2>
        </FadeIn>

        {categories.length > 0 && (
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-8 md:mb-12">
              {categories.map((cat: { id: string; label: string }) => (
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
          {filtered.map((treatment: Treatment, i: number) => (
            <FadeIn key={treatment.id} delay={i * 0.05}>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 hover:bg-white/80 transition-colors">
                <h3 className="text-[#3a2a1a] text-[16px] mb-2" style={{ ...heading, fontWeight: 500 }}>
                  {treatment.name}
                </h3>
                <p className="text-[#3a2a1a]/40 text-[11px] tracking-[0.1em] uppercase mb-3" style={{ ...body, fontWeight: 500 }}>
                  {treatment.duration}{treatment.price ? ` \u00b7 ${treatment.price}` : ""}
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
  const dining = hangaroaDining;

  return (
    <section id="gastronomy" className={sectionPadding}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Gastronomy</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-4" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>
            {dining.headline}
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
    { label: "Nearest Airport", value: "Mataveri International Airport (IPC)" },
    { label: "From Santiago", value: "5-hour direct flight to Easter Island (LATAM Airlines)" },
    { label: "Airport Transfer", value: "15-minute drive from Mataveri Airport to the resort" },
    { label: "Concierge", value: "Our team arranges all transfers and island excursions from arrival" },
  ];

  return (
    <section id="getting-here" className={`${sectionPadding} bg-white/30`}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Getting Here</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-10 md:mb-14" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>
            Journey to the Edge of the World
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
              Contact: <a href={`mailto:${hangaroa.email}`} className="underline underline-offset-2 hover:text-[#3a2a1a] transition-colors">{hangaroa.email}</a>
              {hangaroa.phone && <> &middot; <a href={`tel:${hangaroa.phone}`} className="underline underline-offset-2 hover:text-[#3a2a1a] transition-colors">{hangaroa.phone}</a></>}
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
              &ldquo;A truly magical place. The connection to Rapa Nui culture, the stunning views of the Pacific, and the warmth of the staff made this an unforgettable experience.&rdquo;
            </blockquote>
            <p className="text-[#3a2a1a]/40 text-[12px] tracking-[0.1em] uppercase mb-8" style={{ ...body, fontWeight: 500 }}>
              TripAdvisor Guest Review
            </p>
            <a
              href="https://www.tripadvisor.com/Hotel_Review-g316040-d1063260-Reviews-Hangaroa_Eco_Village_Spa-Easter_Island.html"
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
