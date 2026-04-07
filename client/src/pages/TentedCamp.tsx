/*
 * NAYARA TENTED CAMP — Arenal, Costa Rica
 * Rebuilt with new structure: Story (s1/s2) → Tented Camp (s3/s4) → Experiences → Sustainability → Wellness → Gastronomy → Gallery → Footer
 */
import { useState, useRef } from "react";
import RoomsSlider from "@/components/RoomsSlider";
import { motion, useInView } from "framer-motion";
import NativeVideo from "@/components/NativeVideo";
import { useIsMobile } from "@/hooks/useMobile";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import { properties, type Property, type Excursion, type Treatment } from "@/data/properties";
import { costaRicaDining } from "@/data/dining";
import PillarCrossLink from "@/components/PillarCrossLink";
import { AwardBadgeStrip } from "@/components/AwardBadges";

const tentedCamp = properties.find((p: Property) => p.id === "tented-camp")!;

const CDN = {
  heroDesktop: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tented-camp-hero-desktop_90751603.mp4",
  experiencesHero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/TentedExperienceVideo_5e344d7d.mp4",
  s1: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/IMG_5354_8a9b536e.PNG",
  s2: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/340C7D71-BAF3-4215-B25E-98878C4B65F6_48b343e5.JPEG",
  roomTentHorizontal: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/1_8429fa60.png",
  roomTentVertical: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/1_8429fa60.png",
  roomFamilyHorizontal: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/2_3fb64f69.png",
  roomFamilyVertical: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/2_3fb64f69.png",
  roomGrandHorizontal: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/3_b563f4e5.png",
  roomGrandVertical: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/3_b563f4e5.png",
  roomResidenceHorizontal: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/4_03e5110e.png",
  roomResidenceVertical: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/4_03e5110e.png",
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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-[#3a2a1a]/40 text-[11px] tracking-[0.15em] uppercase mb-3" style={{ ...body, fontWeight: 500 }}>{children}</p>;
}

export default function TentedCamp() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fafafa] via-[#f8f8f6] to-[#fafafa]">
      <BrandNavigation pageType="property" centerLinkHome />
      <HeroSection />
      <StorySection />
      <TentedCampAccommodationsSection />
      <ExperiencesSection />
      <SustainabilitySection />
      <WellnessSection />
      <GastronomySection />
      <TripAdvisorSection />
      <GettingHereSection />
      <GallerySection />
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <NativeVideo src={CDN.heroDesktop} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6 md:px-10">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }} className="text-white text-2xl md:text-4xl lg:text-5xl leading-[0.95] tracking-wide text-center" style={heading}>
          Luxury Tented Camp Immersed in the Rainforest
        </motion.h1>

      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section id="story" className={sectionPadding}>
      <div className={maxW}>
        {/* Story text left + s1 vertical right */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start mb-12">
          <FadeIn className="md:flex-1">
            <SectionLabel>The Property</SectionLabel>
            <h2 className="text-[#4B4A4A] mb-6" style={{ ...heading, fontSize: "clamp(20px, 2.8vw, 32px)", lineHeight: 1.15 }}>
              Lifted On Stilts Above The Canopy<br />Eye to Eye with Arenal Volcano
            </h2>
            <p className="text-[#4B4A4A]/70 text-[15px] leading-relaxed" style={body}>
              Where a barren cattle ranch once stood, a thriving rainforest now surrounds you. Open-air tented suites perch on a volcanic clifftop, each with a private plunge pool fed by natural hot springs. The land tells its own story.
            </p>
            {/* Award badges — real logos, transparent */}
            <div className="mt-8">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/award-badges-tented-camp_8aea5e71.webp"
                alt="Green Globe Certified · Travel + Leisure World's Best Awards 2021-2024 · Leading Hotels of the World"
                className="h-28 md:h-36 lg:h-48 w-auto object-contain opacity-70"
                loading="lazy"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.2} className="md:flex-1">
            <img src={CDN.s1} alt="Luxury tented accommodation at Nayara" className="w-full object-cover rounded-lg" style={{ aspectRatio: "3/4" }} loading="lazy" />
          </FadeIn>
        </div>

        {/* s2 landscape below */}
        <FadeIn delay={0.3}>
          <img src={CDN.s2} alt="Rainforest canopy at Nayara Tented Camp" className="w-full object-cover rounded-lg" loading="lazy" style={{ aspectRatio: "16/9" }} />
        </FadeIn>
      </div>
    </section>
  );
}

function TentedCampAccommodationsSection() {
  const roomTypes = [
    {
      id: "tent",
      name: "",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/NayaraTent_b4d0601d.jpg",
    },
    {
      id: "family-tent",
      name: "",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/familytent3images_aea131ab.jpg",
    },
    {
      id: "grand-tent",
      name: "",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/grandtent3_dd3f6902.jpg",
    },
    {
      id: "residence",
      name: "",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Supersale-3_3588efbb.jpg",
    },
  ];

  return (
    <section id="tented-camp" className={`${sectionPadding} bg-white/30`}>
      <div className={maxW}>
        <FadeIn>
          <RoomsSlider rooms={roomTypes} title="Life under Canvas" subtitle="Accommodations" />
        </FadeIn>
      </div>
    </section>
  );
}

function ExperiencesSection() {
  return (
    <>
      {/* Section Label */}
      <div className="py-2 md:py-3 px-0 bg-white/30">
        <div className="px-6 md:px-10 max-w-[1200px] mx-auto">
          <FadeIn>
            <SectionLabel>Experiences</SectionLabel>
            <h2 className="text-[#4B4A4A] mb-6 md:mb-10" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>Rainforest Adventure</h2>
          </FadeIn>
        </div>
      </div>

      {/* Hero Section */}
      <section id="experiences" className="relative h-screen w-full overflow-hidden flex flex-col items-end justify-end pb-16 md:pb-24">
        <div className="absolute inset-0 w-full h-full">
          <NativeVideo src={CDN.experiencesHero} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-3xl md:text-4xl lg:text-5xl leading-tight mb-6"
            style={{ ...heading, fontWeight: 400 }}
          >
            Bespoke Experiences
          </motion.h1>
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            href="/tented-experiences"
            className="text-white/70 hover:text-white text-sm tracking-[0.08em] uppercase transition-colors cursor-pointer underline"
            style={{ ...body, fontWeight: 400 }}
          >
            Explore More
          </motion.a>
        </div>
      </section>

    </>
  );
}


function SustainabilitySection() {
  return (
    <>
    <section id="sustainability" className="py-16 md:py-24 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn className="mb-12 md:mb-16">
          <SectionLabel>Sustainability</SectionLabel>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {[
            { title: "Minimal Impact Design", desc: "Our canvas villas leave virtually no trace on the rainforest. Elevated structures and natural materials ensure harmony with the environment." },
            { title: "Rainforest Restoration", desc: "We actively participate in reforestation initiatives, planting native species and protecting critical habitat." },
            { title: "Water Stewardship", desc: "Rainwater harvesting and natural filtration systems minimize our impact on local water resources." },
            { title: "Community Connection", desc: "We employ local guides and support indigenous communities through fair wages and cultural exchange programs." },
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

    {/* Sustainability image full-width */}
    <section className="py-0 px-0 mb-16 md:mb-24">
      <FadeIn>
        <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/SustainabilityTentedHero_67d62aef.jpg" alt="Sustainability - Light Footprint, Lasting Impact" className="w-full h-auto" />
      </FadeIn>
    </section>
    </>
  );
}

function WellnessSection() {
  return (
    <>
      {/* Section Label */}
      <div className="py-2 md:py-3 px-0 bg-white/30">
        <div className="px-6 md:px-10 max-w-[1200px] mx-auto">
          <FadeIn>
            <SectionLabel>Wellness</SectionLabel>
          </FadeIn>
        </div>
      </div>

      {/* Hero Section */}
      <section id="wellness" className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-end pb-16 md:pb-24">
        <div className="absolute inset-0 w-full h-full">
          <NativeVideo src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Supersale-3_a18e30c2.mp4" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-3xl md:text-4xl lg:text-5xl leading-tight"
            style={{ ...heading, fontWeight: 400 }}
          >
            Nurtured by Nature
          </motion.h1>
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            href="/tented-wellness"
            className="text-white/70 hover:text-white text-sm tracking-[0.08em] uppercase transition-colors cursor-pointer underline mt-6"
            style={{ ...body, fontWeight: 400 }}
          >
            Explore More
          </motion.a>
        </div>
      </section>
    </>
  );
}

function GastronomySection() {
  const restaurants = Array.isArray(costaRicaDining) ? costaRicaDining : [costaRicaDining];
  return (
    <>
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

    {/* Gastronomy image full-width */}
    <section className="py-0 px-0 mb-16 md:mb-24">
      <FadeIn>
        <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atasteofplace_f64f6f71.jpg" alt="A Taste of Place - Gastronomy" className="w-full h-auto" />
      </FadeIn>
    </section>
    </>
  );
}

function TripAdvisorSection() {
  return (
    <section id="tripadvisor" className={`${sectionPadding} bg-[#3a2a1a]`}>
      <div className={`${maxW} text-center`}>
        <FadeIn>
          <p className="text-[#c9b99a]/60 text-[11px] tracking-[0.15em] uppercase mb-4" style={{ ...body, fontWeight: 500 }}>Guest Reviews</p>
          <div className="flex items-center justify-center gap-1.5 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-[#c9b99a]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-white text-[28px] md:text-[36px] mb-2" style={heading}>5.0</p>
          <p className="text-white/60 text-[13px] tracking-[0.04em] mb-6" style={body}>Based on 1,200+ reviews on TripAdvisor</p>
          <div className="w-16 h-px bg-[#c9b99a]/30 mx-auto mb-8" />
        </FadeIn>
        <FadeIn delay={0.2}>
          <blockquote className="max-w-2xl mx-auto">
            <p className="text-white/80 text-[15px] md:text-[17px] leading-relaxed italic mb-4" style={body}>
              "An extraordinary experience. The tents are beyond luxurious, the staff anticipates every need, and waking up to the sounds of the rainforest with Arenal Volcano in view is something you never forget."
            </p>
            <cite className="text-[#c9b99a]/60 text-[12px] tracking-[0.08em] not-italic" style={body}>— TripAdvisor Traveler, 2025</cite>
          </blockquote>
        </FadeIn>
        <FadeIn delay={0.3}>
          <a
            href="https://www.tripadvisor.com/Hotel_Review-g309226-d12099846-Reviews-Nayara_Tented_Camp-La_Fortuna_de_San_Carlos_Arenal_Volcano_National_Park_Province_of_Al.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 px-6 py-2.5 rounded-full border border-[#c9b99a]/30 text-[#c9b99a] text-[11px] tracking-[0.15em] uppercase hover:bg-[#c9b99a]/10 transition-colors"
            style={{ ...body, fontWeight: 500 }}
          >
            Read All Reviews
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

function GettingHereSection() {
  const routes = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
      ),
      title: "International Flights",
      description: "Fly into San Jos\u00e9 (SJO) or Liberia (LIR) international airports. Both receive direct flights from major US and European cities.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Domestic Flight",
      description: "Take a short domestic flight from SJO to La Fortuna/Arenal (~30 minutes). The hotel can arrange transfers from the local airstrip.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H21M3.375 14.25h17.25M21 12.75V6.375A1.125 1.125 0 0019.875 5.25H4.125A1.125 1.125 0 003 6.375v6.375" />
        </svg>
      ),
      title: "Private Transfer",
      description: "Arrange a private transfer from San Jos\u00e9 (~3 hours) or Liberia (~2.5 hours). Scenic drive through the Central Valley with volcano views.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
        </svg>
      ),
      title: "Self-Drive",
      description: "Rent a car at either airport and drive to Arenal. Well-paved roads with clear signage. The journey from SJO takes approximately 3 hours.",
    },
  ];

  return (
    <section id="getting-here" className={sectionPadding}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Getting Here</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-3" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>Your Journey to Arenal</h2>
          <p className="text-[#4B4A4A]/60 text-[14px] leading-relaxed mb-10 md:mb-14 max-w-xl" style={body}>
            Nayara Tented Camp is located in the Arenal Volcano region of Costa Rica, one of the most accessible luxury destinations in Central America.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {routes.map((route, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-[#3a2a1a]/5 flex items-center justify-center text-[#3a2a1a]/50">
                  {route.icon}
                </div>
                <div>
                  <h3 className="text-[#3a2a1a] text-[16px] mb-2" style={{ ...heading, fontWeight: 500 }}>{route.title}</h3>
                  <p className="text-[#4B4A4A]/70 text-[13px] leading-relaxed" style={body}>{route.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.5}>
          <div className="mt-10 md:mt-14 p-6 rounded-xl bg-[#3a2a1a]/5">
            <p className="text-[#3a2a1a]/70 text-[13px] leading-relaxed" style={body}>
              <span className="font-medium text-[#3a2a1a]">Need help planning your journey?</span> Our reservations team can arrange all transfers and domestic flights. Contact us at{" "}
              <a href="mailto:reservations@nayararesorts.com" className="text-[#8b6f47] underline">reservations@nayararesorts.com</a>{" "}
              or call <a href="tel:+18448652002" className="text-[#8b6f47] underline">1-844-865-2002</a>.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function GallerySection() {
  const images = [
    { src: CDN.s2, alt: "Rainforest canopy" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/(Rooms)NayaraTent3copy_54044994.webp", alt: "Tented villa pool with volcano view" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/(Rooms)FamilyTent2_79becb8c.webp", alt: "Luxury tent bedroom interior" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/(Rooms)ArenalPoolCasita9copy_f06e14d7.webp", alt: "Casita deck with plunge pool" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/12.Residence_17d767d7.webp", alt: "Residence exterior" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/4.Residence5_ba91ac01.webp", alt: "Residence interior" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/(Rooms)Residence3_48e06b8c.webp", alt: "Residence detail" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/4O1A1569-Spa-NayaraTentedCampwithLivLawbyBriceFerreStudio-VancouverPortraitAdventureandAthletePhotographer_0e850f3a.webp", alt: "Spa treatment" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/4O1A0818-Spa-NayaraTentedCampwithLivLawbyBriceFerreStudio-VancouverPortraitAdventureandAthletePhotographer_d4f39cdb.webp", alt: "Spa wellness" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/4O1A1183-Spa-NayaraTentedCampwithLivLawbyBriceFerreStudio-VancouverPortraitAdventureandAthletePhotographer_26499743.webp", alt: "Spa experience" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/19B9D444-0A7C-4C29-93A3-A8C0DFDFBD31_aa5cae9d.JPEG", alt: "Volcano view with tents" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/39_cf77fa78.webp", alt: "Bedroom with forest view" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/38.jTentDetailpg_b2b74566.webp", alt: "Tent interior detail" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Grand(1)_0127cf09.webp", alt: "Grand tent with pool" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Foto_5e7f8a2d.webp", alt: "Spa pavilion" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/NewAreaBriceFerre(2)_cf5128c9.webp", alt: "Wellness area with volcano" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Foto_5e7f8a2d.webp", alt: "Spa pavilion with tents" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Supersale_e58f6e3b.mp4", alt: "Tented Camp experience video", type: "video" as const },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/HenrysBar_69b1e477.webp", alt: "Henry's Bar at Nayara Springs" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/NayaraSprings-Henry'sBar-R5_10617-byBriceFerreStudio_f997587c.webp", alt: "Bartender at Henry's Bar" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/NayaraSprings-withGwynethBechunas-R5_15665-byBriceFerreStudio-2_1d0730cf.webp", alt: "Guest enjoying wine at Nayara Springs" },
  ];
  return (
    <section id="gallery" className="py-16 md:py-24 px-0">
      <div className="px-6 md:px-10 max-w-[1200px] mx-auto">
        <FadeIn>
          <SectionLabel>Gallery</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-10 md:mb-14" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>Canvas & Canopy</h2>
        </FadeIn>
         <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {images.map((img, i) => (
            <FadeIn key={i} delay={i * 0.08} className={i === 1 ? "col-span-2 md:col-span-2 row-span-2" : ""}>
              {(img as any).type === "video" ? (
                <video src={img.src} className="w-full h-full object-cover rounded-lg" style={{ aspectRatio: i === 1 ? "4/3" : "1/1" }} autoPlay muted loop playsInline />
              ) : (
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover rounded-lg" style={{ aspectRatio: i === 1 ? "4/3" : "1/1" }} loading="lazy" />
              )}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
