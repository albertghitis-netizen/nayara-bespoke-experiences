/*
 * NAYARA ALTO ATACAMA — Atacama Desert, Chile
 * Standardized property page template
 * Sections: Hero → Story → Rooms → Gallery → Experiences → Sustainability → Wellness → Gastronomy → Getting Here → Reviews → Footer
 */
import { useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import BlobVideo from "@/components/BlobVideo";
import { useIsMobile } from "@/hooks/useMobile";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BrandNavigation from "@/components/BrandNavigation";
import { properties, type Property, type Excursion, type Treatment } from "@/data/properties";
import { atacamaDiningCollection } from "@/data/dining";
import PillarCrossLink from "@/components/PillarCrossLink";

const atacama = properties.find((p: Property) => p.id === "alto-atacama")!;

/* ─── CDN Assets ─────────────────────────────────────────────── */
const CDN = {
  heroDesktop: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-hero-desktop-hq_732fe8b3.mp4",
  heroMobile: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-hero-vertical-hq_d81c629e.mp4",
  desert: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/IMG_6253_ffc4f157.PNG",
  vicunas: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/IMG_8113_9e8e2ecc.jpeg",
  property: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/IMG_6879_0cd80bf6.JPG",
  poolSunset: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-pool-sunset_c4a2f7e1.jpg",
  stargazing: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-stargazing_f5c3d8a4.jpg",
  suite: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-suite-interior_d3b1e9f2.jpg",
  awards: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Untitleddesign_5d419ccb.png",
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

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function AltoAtacama() {
  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <ScrollProgress />
      <BrandNavigation pageType="property" centerLabel="Nayara Alto Atacama" centerLinkHome />
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
   1. HERO — Full-screen video + parallax text
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const isMobile = useIsMobile();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.8, 0]);

  return (
    <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <BlobVideo src={isMobile ? CDN.heroMobile : CDN.heroDesktop} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>
      <motion.div className="absolute inset-0 flex flex-col justify-end items-center px-5 z-10 pb-[5vh]" style={{ y: textY, opacity: textOpacity }}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-2xl md:text-4xl lg:text-5xl leading-[0.95] tracking-wide text-center"
          style={heading}
        >
          Atacama Desert Oasis Under the Stars
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} className="text-white/60 text-[13px] md:text-[15px] mt-4 tracking-[0.08em]" style={body}>
          Atacama Desert, Chile
        </motion.p>
      </motion.div>
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
              An Oasis in the Desert
            </h2>
            <p className="text-[#4B4A4A]/70 text-[15px] leading-relaxed mb-4" style={body}>
              {atacama.heroSubtitle}
            </p>
            <p className="text-[#4B4A4A]/70 text-[15px] leading-relaxed" style={body}>
              Nestled in the Catarpe Valley along the banks of the San Pedro River, Nayara Alto Atacama is an oasis of calm in the driest desert on Earth. Adobe-style architecture blends into the landscape, with rooms opening to views of the Andes and the vast desert sky that offers the clearest stargazing on the planet.
            </p>
          </FadeIn>
          <FadeIn delay={0.2} className="md:flex-1">
            <img src={CDN.property} alt="Nayara Alto Atacama resort in the Catarpe Valley" className="w-full object-cover rounded-lg" style={{ aspectRatio: "3/4" }} loading="lazy" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   3. ROOMS
   ═══════════════════════════════════════════════════════════════ */
function RoomsSection() {
  const rooms = [
    { name: "Catarpe Suite", desc: "Spacious adobe suites with private terrace, outdoor shower, and panoramic views of the Atacama salt flat and Licancabur volcano.", image: CDN.suite || CDN.property },
    { name: "Quitor Room", desc: "Warm, earth-toned rooms with desert views, handcrafted furnishings, and direct access to the resort gardens and pool.", image: CDN.poolSunset || CDN.desert },
  ];
  return (
    <section id="rooms" className={`${sectionPadding} bg-white/30`}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Rooms &amp; Suites</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-10 md:mb-14" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>Desert Elegance</h2>
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

/* ═══════════════════════════════════════════════════════════════
   4. GALLERY — 6-image masonry grid
   ═══════════════════════════════════════════════════════════════ */
function GallerySection() {
  const images = [
    { src: CDN.desert, alt: "Atacama Desert landscape" },
    { src: CDN.vicunas, alt: "Vicunas in the Atacama highlands" },
    { src: CDN.poolSunset || CDN.property, alt: "Pool at sunset with desert views" },
    { src: CDN.stargazing || CDN.desert, alt: "Stargazing in the Atacama" },
    { src: CDN.suite || CDN.property, alt: "Suite interior" },
    { src: CDN.property, alt: "Resort in the Catarpe Valley" },
  ];
  return (
    <section id="gallery" className={sectionPadding}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Gallery</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-10 md:mb-14" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>The Driest Desert on Earth</h2>
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

/* ═══════════════════════════════════════════════════════════════
   5. EXPERIENCES — Excursion cards from data
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
          <h2 className="text-[#4B4A4A] mb-6 md:mb-10" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>Desert Expeditions</h2>
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

/* ═══════════════════════════════════════════════════════════════
   6. SUSTAINABILITY
   ═══════════════════════════════════════════════════════════════ */
function SustainabilitySection() {
  const initiatives = [
    { title: "Desert Ecosystem Protection", desc: "Active conservation of the fragile Atacama ecosystem, including native flora restoration and wildlife corridor preservation for vicunas and flamingos." },
    { title: "Water Stewardship", desc: "Advanced water recycling systems and responsible usage in the driest desert on Earth, ensuring minimal impact on the San Pedro River watershed." },
    { title: "Solar Energy", desc: "Harnessing the Atacama\u2019s 300+ days of sunshine per year with solar panels that power significant portions of the resort\u2019s energy needs." },
    { title: "Community Partnership", desc: "Supporting the Atacame\u00f1o indigenous communities through cultural exchange programs, local employment, and preservation of traditional knowledge." },
  ];
  return (
    <section id="sustainability" className={sectionPadding}>
      <div className={maxW}>
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          <div className="md:flex-1">
            <FadeIn>
              <SectionLabel>Sustainability</SectionLabel>
              <h2 className="text-[#4B4A4A] mb-6" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>Protecting the Desert</h2>
              <p className="text-[#4B4A4A]/70 text-[15px] leading-relaxed mb-8" style={body}>
                The Atacama Desert is one of Earth's most extreme environments. Our commitment to sustainability means working with the land, not against it — conserving water, harnessing solar energy, and supporting the indigenous communities who have called this desert home for millennia.
              </p>
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
          </div>
          <FadeIn delay={0.2} className="md:flex-1">
            <img src={CDN.vicunas} alt="Vicu\u00f1as in the Atacama highlands" className="w-full object-cover rounded-lg" style={{ aspectRatio: "3/4" }} loading="lazy" />
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

/* ═══════════════════════════════════════════════════════════════
   8. GASTRONOMY — Restaurant info from dining data
   ═══════════════════════════════════════════════════════════════ */
function GastronomySection() {
  const dining = atacamaDiningCollection;
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

/* ═══════════════════════════════════════════════════════════════
   9. GETTING HERE
   ═══════════════════════════════════════════════════════════════ */
function GettingHereSection() {
  const details = [
    { label: "Nearest Airport", value: "El Loa Airport, Calama (CJC)" },
    { label: "From Santiago", value: "2-hour flight to Calama, then 1-hour scenic drive to San Pedro de Atacama" },
    { label: "Airport Transfer", value: "Private transfer through the desert landscape to the resort" },
    { label: "Concierge", value: "Our team arranges all transfers, excursions, and stargazing sessions" },
  ];
  return (
    <section id="getting-here" className={`${sectionPadding} bg-white/30`}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Getting Here</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-10 md:mb-14" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>Your Journey to the Desert</h2>
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
              Contact: <a href={`mailto:${atacama.email}`} className="underline underline-offset-2 hover:text-[#3a2a1a] transition-colors">{atacama.email}</a>
              {atacama.phone && <> &middot; <a href={`tel:${atacama.phone}`} className="underline underline-offset-2 hover:text-[#3a2a1a] transition-colors">{atacama.phone}</a></>}
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
              &ldquo;The most extraordinary landscape I have ever experienced. The excursions are world-class, the stargazing is unbelievable, and the spa treatments after a day in the desert are pure heaven.&rdquo;
            </blockquote>
            <p className="text-[#3a2a1a]/40 text-[12px] tracking-[0.1em] uppercase mb-8" style={{ ...body, fontWeight: 500 }}>TripAdvisor Guest Review</p>
            <a href="https://www.tripadvisor.com/Hotel_Review-g303681-d594907-Reviews-Alto_Atacama_Desert_Lodge_Spa-San_Pedro_de_Atacama_Antofagasta_Region.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3a2a1a]/5 text-[#3a2a1a]/70 hover:bg-[#3a2a1a]/10 hover:text-[#3a2a1a] transition-all text-[13px] tracking-[0.05em]" style={{ ...body, fontWeight: 500 }}>
              Read Reviews on TripAdvisor <span className="text-[10px]">&rarr;</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Shared ─────────────────────────────────────────────────── */
function SectionLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-[#3a2a1a]/35 text-[10px] tracking-[0.3em] uppercase mb-4 ${className}`} style={{ ...body, fontWeight: 600 }}>{children}</p>;
}
