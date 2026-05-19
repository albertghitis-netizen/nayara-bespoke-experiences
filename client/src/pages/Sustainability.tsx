/**
 * NAYARA SUSTAINABILITY , Brand-Level Pillar Page
 * Regenerative tourism across all 6 properties
 * Two-axis filter: 4 subcategories × 6 properties (no "All" for either)
 * Hero → Intro → Brand Pillars → Property Initiatives (filtered) → CTA → Footer
 */

import { useState, useRef, useEffect } from "react";
import { useIsMobile } from "@/hooks/useMobile";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import NativeVideo from "@/components/NativeVideo";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";

import { ShieldCheck } from "lucide-react";

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

const certifications = [
  { name: "Green Globe", properties: "Nayara Gardens, Nayara Springs, Nayara Tented Camp, Nayara Bocas del Toro", description: "International sustainability certification recognizing best practices in environmental management, social responsibility, and economic viability in the travel and tourism industry." },
  { name: "S Certification", properties: "Nayara Alto Atacama, Nayara Hangaroa", description: "Chile\u2019s national sustainability certification from Sernatur, recognizing the highest standards of environmental, social, and economic responsibility in tourism operations." },
  { name: "Carbon Neutral", properties: "Nayara Gardens, Nayara Springs, Nayara Tented Camp", description: "All three Costa Rica properties have achieved carbon-neutral certification, offsetting 100% of their carbon emissions through verified conservation and reforestation programs." },
];

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

/* ─── CDN Assets ─── */
const CDN = {
  heroVideoMobile: "/manus-storage/sustainability-mobile-hero_ae832d23.mp4",
  heroVideoOld: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Supersale-2_500e97e2.mp4",
  heroVideo: "/manus-storage/brand-sustainability-hero_efe6e64e.mp4",
};

/* ─── Brand-level sustainability pillars ─── */
const brandPillars = [
  { title: "Carbon Neutral Operations", stat: "100%", desc: "All six properties operate at carbon neutrality through renewable energy, carbon offsets, and efficiency programs." },
  { title: "Wildlife Corridors", stat: "340+", desc: "Hectares of protected wildlife corridors maintained across our Costa Rica and Panama properties." },
  { title: "Community Partnerships", stat: "24", desc: "Active partnerships with indigenous communities, local cooperatives, and conservation organizations." },
  { title: "Water Stewardship", stat: "85%", desc: "Of water used across all properties is recycled, treated, and returned to local watersheds." },
  { title: "Zero Single-Use Plastic", stat: "0", desc: "Single-use plastic items across all properties since 2021. Replaced with biodegradable alternatives." },
  { title: "Local Sourcing", stat: "70%", desc: "Of food and materials sourced within 100km of each property, supporting local economies." },
];

/* ─── Subcategories ─── */
type SubCategory = "flora-fauna" | "certification" | "community" | "operations";



/* ─── Properties ─── */
const PROPERTIES = [
  { id: "alto-atacama", label: "Alto Atacama", image: "/manus-storage/sustainability-atacama_653b7536.jpg", sustainabilityRoute: "/alto-atacama" },
  { id: "bocas-del-toro", label: "Bocas del Toro", image: "/manus-storage/sustainability-bocas_ccedb62a.jpg", sustainabilityRoute: "/bocas-del-toro" },
  { id: "gardens", label: "Gardens", image: "/manus-storage/sustainability-gardens_b4aec415.jpeg", sustainabilityRoute: "/gardens" },
  { id: "hangaroa", label: "Hangaroa", image: "/manus-storage/sustainability-hangaroa_6db7bd22.jpg", sustainabilityRoute: "/hangaroa" },
  { id: "springs", label: "Springs", image: "/manus-storage/sustainability-springs_91d7dfca.jpeg", sustainabilityRoute: "/springs" },
  { id: "tented-camp", label: "Tented Camp", image: "/manus-storage/sustainability-tented_4f5ca0f9.jpeg", sustainabilityRoute: "/tented-camp" },
];

/* ─── Initiative data: each tagged with property + category ─── */
interface Initiative {
  property: string;
  propertyName: string;
  location: string;
  route: string;
  category: SubCategory;
  text: string;
}

const allInitiatives: Initiative[] = [
  /* ── Alto Atacama ── */
  { property: "alto-atacama", propertyName: "Nayara Alto Atacama", location: "Atacama Desert, Chile", route: "/alto-atacama", category: "flora-fauna", text: "Desert reforestation program planting native tamarugo and algarrobo trees across degraded land" },
  { property: "alto-atacama", propertyName: "Nayara Alto Atacama", location: "Atacama Desert, Chile", route: "/alto-atacama", category: "flora-fauna", text: "Flamingo habitat monitoring at Salar de Atacama in partnership with local conservation groups" },
  { property: "alto-atacama", propertyName: "Nayara Alto Atacama", location: "Atacama Desert, Chile", route: "/alto-atacama", category: "certification", text: "Distinción Turismo Sustentable , Chile's national sustainable tourism certification (2024)" },
  { property: "alto-atacama", propertyName: "Nayara Alto Atacama", location: "Atacama Desert, Chile", route: "/alto-atacama", category: "certification", text: "Astronomical light pollution reduction protocols protecting dark sky heritage" },
  { property: "alto-atacama", propertyName: "Nayara Alto Atacama", location: "Atacama Desert, Chile", route: "/alto-atacama", category: "community", text: "Partnership with Atacameño communities to preserve ancestral water management systems" },
  { property: "alto-atacama", propertyName: "Nayara Alto Atacama", location: "Atacama Desert, Chile", route: "/alto-atacama", category: "community", text: "Local artisan marketplace supporting 30+ indigenous craftspeople" },
  { property: "alto-atacama", propertyName: "Nayara Alto Atacama", location: "Atacama Desert, Chile", route: "/alto-atacama", category: "operations", text: "Solar energy powers 60% of resort operations in the world's highest-radiation desert" },
  { property: "alto-atacama", propertyName: "Nayara Alto Atacama", location: "Atacama Desert, Chile", route: "/alto-atacama", category: "operations", text: "Greywater recycling system irrigating native plant gardens throughout the property" },
  { property: "alto-atacama", propertyName: "Nayara Alto Atacama", location: "Atacama Desert, Chile", route: "/alto-atacama", category: "community", text: "Archaeological site stewardship program protecting pre-Columbian heritage across the Atacama" },
  { property: "alto-atacama", propertyName: "Nayara Alto Atacama", location: "Atacama Desert, Chile", route: "/alto-atacama", category: "operations", text: "Zero-waste kitchen initiative diverting 90% of food waste from landfill through composting" },

  /* ── Bocas del Toro ── */
  { property: "bocas-del-toro", propertyName: "Nayara Bocas del Toro", location: "Bocas del Toro, Panama", route: "/bocas-del-toro", category: "flora-fauna", text: "Coral reef restoration program in partnership with Smithsonian Tropical Research Institute" },
  { property: "bocas-del-toro", propertyName: "Nayara Bocas del Toro", location: "Bocas del Toro, Panama", route: "/bocas-del-toro", category: "flora-fauna", text: "Sea turtle nesting protection program on surrounding beaches" },
  { property: "bocas-del-toro", propertyName: "Nayara Bocas del Toro", location: "Bocas del Toro, Panama", route: "/bocas-del-toro", category: "flora-fauna", text: "Mangrove conservation protecting 50+ hectares of critical coastal ecosystem" },
  { property: "bocas-del-toro", propertyName: "Nayara Bocas del Toro", location: "Bocas del Toro, Panama", route: "/bocas-del-toro", category: "certification", text: "Blue Flag beach certification maintained through annual water quality monitoring" },
  { property: "bocas-del-toro", propertyName: "Nayara Bocas del Toro", location: "Bocas del Toro, Panama", route: "/bocas-del-toro", category: "community", text: "Ngäbe-Buglé indigenous community partnership for cultural tourism programs" },
  { property: "bocas-del-toro", propertyName: "Nayara Bocas del Toro", location: "Bocas del Toro, Panama", route: "/bocas-del-toro", category: "community", text: "Local fishing cooperative supply agreements supporting sustainable livelihoods" },
  { property: "bocas-del-toro", propertyName: "Nayara Bocas del Toro", location: "Bocas del Toro, Panama", route: "/bocas-del-toro", category: "operations", text: "Overwater villa construction designed to minimize seabed disturbance" },
  { property: "bocas-del-toro", propertyName: "Nayara Bocas del Toro", location: "Bocas del Toro, Panama", route: "/bocas-del-toro", category: "operations", text: "Desalination and rainwater harvesting reducing freshwater extraction by 60%" },
  { property: "bocas-del-toro", propertyName: "Nayara Bocas del Toro", location: "Bocas del Toro, Panama", route: "/bocas-del-toro", category: "flora-fauna", text: "Dolphin and manatee monitoring program tracking marine mammal populations in Almirante Bay" },
  { property: "bocas-del-toro", propertyName: "Nayara Bocas del Toro", location: "Bocas del Toro, Panama", route: "/bocas-del-toro", category: "operations", text: "Solar-powered water taxis replacing diesel boats for guest transportation between islands" },

  /* ── Gardens ── */
  { property: "gardens", propertyName: "Nayara Gardens", location: "Arenal Volcano, Costa Rica", route: "/gardens", category: "flora-fauna", text: "Native plant nursery propagating 200+ species for habitat restoration" },
  { property: "gardens", propertyName: "Nayara Gardens", location: "Arenal Volcano, Costa Rica", route: "/gardens", category: "flora-fauna", text: "Rainforest canopy bridge system enabling wildlife movement across the property" },
  { property: "gardens", propertyName: "Nayara Gardens", location: "Arenal Volcano, Costa Rica", route: "/gardens", category: "certification", text: "CST (Certification for Sustainable Tourism) , highest level from Costa Rica's ICT" },
  { property: "gardens", propertyName: "Nayara Gardens", location: "Arenal Volcano, Costa Rica", route: "/gardens", category: "certification", text: "Rainforest Alliance Certified for sustainable agriculture practices on-site" },
  { property: "gardens", propertyName: "Nayara Gardens", location: "Arenal Volcano, Costa Rica", route: "/gardens", category: "community", text: "La Fortuna community education fund supporting local school programs" },
  { property: "gardens", propertyName: "Nayara Gardens", location: "Arenal Volcano, Costa Rica", route: "/gardens", category: "community", text: "On-site organic farm supplying 40% of restaurant produce and training local farmers" },
  { property: "gardens", propertyName: "Nayara Gardens", location: "Arenal Volcano, Costa Rica", route: "/gardens", category: "operations", text: "Composting program converting 100% of organic waste into garden fertilizer" },
  { property: "gardens", propertyName: "Nayara Gardens", location: "Arenal Volcano, Costa Rica", route: "/gardens", category: "operations", text: "LED lighting retrofit and smart HVAC reducing energy consumption by 35%" },
  { property: "gardens", propertyName: "Nayara Gardens", location: "Arenal Volcano, Costa Rica", route: "/gardens", category: "flora-fauna", text: "Sloth rehabilitation and release program in partnership with local wildlife rescue" },
  { property: "gardens", propertyName: "Nayara Gardens", location: "Arenal Volcano, Costa Rica", route: "/gardens", category: "community", text: "Staff housing and education benefits program with 95% local employment rate" },

  /* ── Hangaroa ── */
  { property: "hangaroa", propertyName: "Nayara Hangaroa", location: "Easter Island, Chile", route: "/hangaroa", category: "flora-fauna", text: "Invasive species removal program restoring native toromiro habitat" },
  { property: "hangaroa", propertyName: "Nayara Hangaroa", location: "Easter Island, Chile", route: "/hangaroa", category: "flora-fauna", text: "Seabird nesting site protection along the island's coastal cliffs" },
  { property: "hangaroa", propertyName: "Nayara Hangaroa", location: "Easter Island, Chile", route: "/hangaroa", category: "certification", text: "Partnership with CONAF for Rapa Nui National Park conservation standards" },
  { property: "hangaroa", propertyName: "Nayara Hangaroa", location: "Easter Island, Chile", route: "/hangaroa", category: "community", text: "Cultural preservation fund supporting Rapa Nui language and ceremony" },
  { property: "hangaroa", propertyName: "Nayara Hangaroa", location: "Easter Island, Chile", route: "/hangaroa", category: "community", text: "Rapanui artisan employment program , 80% of staff from local community" },
  { property: "hangaroa", propertyName: "Nayara Hangaroa", location: "Easter Island, Chile", route: "/hangaroa", category: "operations", text: "Rainwater harvesting system reducing freshwater demand by 45%" },
  { property: "hangaroa", propertyName: "Nayara Hangaroa", location: "Easter Island, Chile", route: "/hangaroa", category: "operations", text: "Zero single-use plastic policy with biodegradable alternatives island-wide" },
  { property: "hangaroa", propertyName: "Nayara Hangaroa", location: "Easter Island, Chile", route: "/hangaroa", category: "flora-fauna", text: "Native plant propagation nursery growing endemic species for island-wide reforestation" },
  { property: "hangaroa", propertyName: "Nayara Hangaroa", location: "Easter Island, Chile", route: "/hangaroa", category: "community", text: "Rapa Nui youth mentorship program training the next generation in sustainable hospitality" },
  { property: "hangaroa", propertyName: "Nayara Hangaroa", location: "Easter Island, Chile", route: "/hangaroa", category: "operations", text: "Waste reduction program shipping recyclables to mainland Chile for proper processing" },

  /* ── Springs ── */
  { property: "springs", propertyName: "Nayara Springs", location: "Arenal Volcano, Costa Rica", route: "/springs", category: "flora-fauna", text: "Butterfly garden sanctuary supporting 30+ native species year-round" },
  { property: "springs", propertyName: "Nayara Springs", location: "Arenal Volcano, Costa Rica", route: "/springs", category: "flora-fauna", text: "Spa products sourced from local botanical gardens using organic ingredients" },
  { property: "springs", propertyName: "Nayara Springs", location: "Arenal Volcano, Costa Rica", route: "/springs", category: "certification", text: "CST (Certification for Sustainable Tourism) , highest level from Costa Rica's ICT" },
  { property: "springs", propertyName: "Nayara Springs", location: "Arenal Volcano, Costa Rica", route: "/springs", category: "community", text: "Adults-only design reduces environmental footprint per guest by 30%" },
  { property: "springs", propertyName: "Nayara Springs", location: "Arenal Volcano, Costa Rica", route: "/springs", category: "community", text: "Local wellness practitioner partnerships for authentic spa experiences" },
  { property: "springs", propertyName: "Nayara Springs", location: "Arenal Volcano, Costa Rica", route: "/springs", category: "operations", text: "Geothermal hot spring water recycled through natural filtration systems" },
  { property: "springs", propertyName: "Nayara Springs", location: "Arenal Volcano, Costa Rica", route: "/springs", category: "operations", text: "Energy-efficient villa design with natural ventilation reducing AC usage by 50%" },
  { property: "springs", propertyName: "Nayara Springs", location: "Arenal Volcano, Costa Rica", route: "/springs", category: "flora-fauna", text: "Hummingbird garden with 20+ feeder stations attracting 12 native species" },
  { property: "springs", propertyName: "Nayara Springs", location: "Arenal Volcano, Costa Rica", route: "/springs", category: "operations", text: "Natural mineral spring water bottling on-site eliminating plastic bottle imports" },
  { property: "springs", propertyName: "Nayara Springs", location: "Arenal Volcano, Costa Rica", route: "/springs", category: "community", text: "Local artisan spa product line generating income for 15+ women-owned businesses" },

  /* ── Tented Camp ── */
  { property: "tented-camp", propertyName: "Nayara Tented Camp", location: "Arenal Volcano, Costa Rica", route: "/tented-camp", category: "flora-fauna", text: "Wildlife monitoring cameras tracking 40+ species on property grounds" },
  { property: "tented-camp", propertyName: "Nayara Tented Camp", location: "Arenal Volcano, Costa Rica", route: "/tented-camp", category: "flora-fauna", text: "Reforestation of 15 hectares of former agricultural land to secondary forest" },
  { property: "tented-camp", propertyName: "Nayara Tented Camp", location: "Arenal Volcano, Costa Rica", route: "/tented-camp", category: "certification", text: "Leave No Trace principles integrated into all guest excursions and property operations" },
  { property: "tented-camp", propertyName: "Nayara Tented Camp", location: "Arenal Volcano, Costa Rica", route: "/tented-camp", category: "community", text: "Local guide training program employing community members as naturalist experts" },
  { property: "tented-camp", propertyName: "Nayara Tented Camp", location: "Arenal Volcano, Costa Rica", route: "/tented-camp", category: "community", text: "Revenue-sharing model directing 5% of excursion fees to community projects" },
  { property: "tented-camp", propertyName: "Nayara Tented Camp", location: "Arenal Volcano, Costa Rica", route: "/tented-camp", category: "operations", text: "Elevated platform construction preserving 100% of ground-level ecosystem" },
  { property: "tented-camp", propertyName: "Nayara Tented Camp", location: "Arenal Volcano, Costa Rica", route: "/tented-camp", category: "operations", text: "Canvas tent structures with minimal permanent footprint on the land" },
  { property: "tented-camp", propertyName: "Nayara Tented Camp", location: "Arenal Volcano, Costa Rica", route: "/tented-camp", category: "flora-fauna", text: "Nocturnal wildlife corridor connecting primary forest patches across the property" },
  { property: "tented-camp", propertyName: "Nayara Tented Camp", location: "Arenal Volcano, Costa Rica", route: "/tented-camp", category: "certification", text: "Green Globe certified for comprehensive environmental management systems" },
  { property: "tented-camp", propertyName: "Nayara Tented Camp", location: "Arenal Volcano, Costa Rica", route: "/tented-camp", category: "operations", text: "Rainwater collection system providing 70% of non-potable water needs across camp" },
];

export default function Sustainability() {
  const [activeHotel, setActiveHotel] = useState("alto-atacama");

  const filtered = allInitiatives.filter(
    (i) => i.property === activeHotel
  );

  /* Get property info for the header of the card */
  const currentInitiative = allInitiatives.find((i) => i.property === activeHotel);

  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <BrandNavigation pageType="brand" hideCenterLabel />
      <HeroSection />
      <IntroSection />
      <BrandPillarsSection />
      <PropertyInitiativesSection
        activeProperty={activeHotel}
        onPropertyChange={setActiveHotel}
        filtered={filtered}
        propertyName={currentInitiative?.propertyName || ""}
        propertyLocation={currentInitiative?.location || ""}
        propertyRoute={currentInitiative?.route || "/"}
      />
      <CertificationsSection />
      <CTASection />
      <Footer textColor="#FFFFFF" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const isMobile = useIsMobile();
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        {isMobile ? (
          <NativeVideo src={CDN.heroVideoMobile} className="w-full h-full object-cover" />
        ) : (
          <video
            ref={videoRef}
            src={CDN.heroVideo}
            className="w-full h-full object-cover"
            autoPlay
            loop
            playsInline
            muted
            controls={false}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none" />
      </div>

      {/* Sound pill , espresso, identical to brand homepage */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        aria-label={isMuted ? "Unmute" : "Mute"}
        className="fixed z-50 hidden md:flex lg:flex items-center justify-center rounded-full backdrop-blur-md shadow-sm border cursor-pointer hover:opacity-90 transition-all duration-300 h-9 w-9"
        style={{
          top: "8px",
          left: "56px",
          backgroundColor: "rgba(59,43,38,0.8)",
          borderColor: "rgba(255,255,255,0.1)",
        }}
      >
        {isMuted && (
          <>
            <span className="absolute -inset-1 rounded-full border-2 animate-ping" style={{ borderColor: "rgba(247,245,240,0.37)" }} />
            <span className="absolute -inset-2 rounded-full border animate-ping" style={{ borderColor: "rgba(247,245,240,0.19)", animationDelay: "0.3s" }} />
          </>
        )}
        <svg
          className="w-4.5 h-4.5 transition-colors"
          style={{ color: "#F7F5F0" }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={isMuted
              ? "M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-3.72a.75.75 0 011.28.53v14.88a.75.75 0 01-1.28.53L6.75 14.25H3.75a.75.75 0 01-.75-.75v-3a.75.75 0 01.75-.75h3z"
              : "M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-3.72a.75.75 0 011.28.53v14.88a.75.75 0 01-1.28.53L6.75 15.75H3.75a.75.75 0 01-.75-.75v-6a.75.75 0 01.75-.75h3z"
            }
          />
        </svg>
      </button>

      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6">
        <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="text-white text-xl md:text-3xl lg:text-4xl tracking-wide text-center" style={heading}>
          Beyond Sustainability
        </motion.h1>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   INTRO
   ═══════════════════════════════════════════════════════════════ */
function IntroSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10">
      <div className="max-w-[900px] mx-auto">
        <FadeIn>
          <p className="text-[#3B2B26]/35 text-[10px] tracking-[0.3em] mb-4" style={{ ...body, fontWeight: 600 }}>Our Commitment</p>
          <h2 className="text-[#4B4A4A] mb-8" style={{ ...heading, fontSize: "clamp(24px, 3.5vw, 38px)", lineHeight: 1.15 }}>
            We Leave Every Place Stronger Than We Found It
          </h2>
          <p className="text-[#4B4A4A]/70 text-[15px] leading-[1.8]" style={body}>
            Sustainability at Nayara is not a program , it is the operating system. From carbon-neutral operations to wildlife corridor preservation, from indigenous community partnerships to zero single-use plastic, every decision is measured against a simple question: does this leave the ecosystem stronger? Across six properties in three countries, the answer must always be yes.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CERTIFICATIONS , Sustainability credentials
   ═══════════════════════════════════════════════════════════════ */
function CertificationsSection() {
  return (
    <section className="py-16 md:py-20 px-6 md:px-10 bg-white/50">
      <div className="max-w-[1100px] mx-auto">
        <FadeIn>
          <p className="text-[#3B2B26]/35 text-[10px] tracking-[0.3em] mb-4" style={{ ...body, fontWeight: 600 }}>Certifications</p>
          <h2 className="text-[#4B4A4A] mb-10" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>
            Recognized Standards of Excellence
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {certifications.map((cert, i) => (
            <FadeIn key={cert.name} delay={i * 0.08}>
              <div className="bg-[#f7f5f0] p-8 md:p-10 border border-stone-100">
                <ShieldCheck className="w-7 h-7 text-emerald-700/60 mb-5" />
                <h3 className="text-[#3B2B26] text-lg mb-2" style={heading}>{cert.name}</h3>
                <p className="text-emerald-700/60 text-[10px] tracking-[0.1em] mb-4" style={{ ...body, fontWeight: 500 }}>{cert.properties}</p>
                <p className="text-[#3B2B26]/50 text-sm leading-relaxed" style={{ ...body, fontWeight: 300 }}>{cert.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BRAND PILLARS , 6 key metrics
   ═══════════════════════════════════════════════════════════════ */
function BrandPillarsSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10 bg-[#3B2B26]">
      <div className="max-w-[1100px] mx-auto">
        <FadeIn>
          <p className="text-white/25 text-[10px] tracking-[0.3em] mb-4" style={{ ...body, fontWeight: 600 }}>By the Numbers</p>
          <h2 className="text-white/80 mb-12" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>
            Measurable Impact Across Six Properties
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brandPillars.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.08}>
              <div className="border border-white/10 rounded-xl p-6">
                <span className="text-white/20 text-[40px] leading-none" style={{ ...heading, fontWeight: 300 }}>{p.stat}</span>
                <h3 className="text-white/70 text-[16px] mt-3 mb-2" style={{ ...heading, fontWeight: 500 }}>{p.title}</h3>
                <p className="text-white/35 text-[13px] leading-relaxed" style={body}>{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PROPERTY INITIATIVES , Filter by Hotel
   ═══════════════════════════════════════════════════════════════ */
function PropertyInitiativesSection({
  activeProperty,
  onPropertyChange,
  filtered,
  propertyName,
  propertyLocation,
  propertyRoute,
}: {
  activeProperty: string;
  onPropertyChange: (id: string) => void;
  filtered: Initiative[];
  propertyName: string;
  propertyLocation: string;
  propertyRoute: string;
}) {
  const currentProp = PROPERTIES.find((p) => p.id === activeProperty);

  return (
    <section className="py-16 md:py-24 px-6 md:px-10">
      <div className="max-w-[1100px] mx-auto">
        <FadeIn>
          <p className="text-[#3B2B26]/35 text-[10px] tracking-[0.3em] mb-4" style={{ ...body, fontWeight: 600 }}>Property Initiatives</p>
          <h2 className="text-[#4B4A4A] mb-8" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>
            Sustainability Shaped by Place
          </h2>
        </FadeIn>

        {/* Hotel filter pills */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {PROPERTIES.map((prop) => (
              <button
                key={prop.id}
                onClick={() => onPropertyChange(prop.id)}
                className={`px-4 py-1.5 text-xs tracking-[0.1em] rounded-full border transition-all duration-300 ${
                  activeProperty === prop.id
                    ? "bg-[#3B2B26] text-white border-[#3B2B26]"
                    : "bg-transparent text-[#5a4a3a]/60 border-[#3B2B26]/15 hover:border-[#3B2B26]/40 hover:text-[#3B2B26]"
                }`}
                style={{ ...body, fontWeight: 500 }}
              >
                {prop.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results — two-column layout */}
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <motion.div
              key={activeProperty}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-[1fr_420px] gap-8 items-stretch"
            >
              {/* Left: property info + bullets */}
              <div className="bg-white/50 rounded-xl p-8">
                <div className="flex items-center gap-4 mb-5">
                  <div>
                    <h3 className="text-[#3B2B26] text-[18px] mb-1" style={{ ...heading, fontWeight: 500 }}>
                      {propertyName}
                    </h3>
                    <p className="text-[#3B2B26]/30 text-[11px] tracking-[0.1em]" style={{ ...body, fontWeight: 500 }}>
                      {propertyLocation}
                    </p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {filtered.map((init, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: j * 0.08 }}
                      className="flex gap-3 items-start"
                    >
                      <span className="text-[#3B2B26]/20 text-[10px] mt-1.5">●</span>
                      <span className="text-[#4B4A4A]/60 text-[13px] leading-relaxed" style={body}>{init.text}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Explore Sustainability pill */}
                <Link
                  href={propertyRoute}
                  className="inline-block mt-6 px-5 py-2 rounded-full border border-[#3B2B26] text-[#3B2B26] text-[11px] tracking-[0.15em] uppercase hover:bg-[#3B2B26] hover:text-white transition-all duration-300"
                  style={{ ...body, fontWeight: 500 }}
                >
                  Explore Sustainability
                </Link>
              </div>

              {/* Right: 3:4 image */}
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={currentProp?.image}
                  alt={`${propertyName} sustainability`}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white/30 rounded-xl p-8 text-center"
            >
              <p className="text-[#4B4A4A]/40 text-[14px]" style={body}>
                No initiatives found. Select a different property.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CTA
   ═══════════════════════════════════════════════════════════════ */
function CTASection() {
  const pillars = [
    { label: "Experiences", route: "/experiences" },
    { label: "Wellness", route: "/wellness" },
    { label: "Gastronomy", route: "/gastronomy" },
    { label: "Romance", route: "/romance" },
    { label: "Family", route: "/family" },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-10 bg-white/30">
      <div className="max-w-[800px] mx-auto text-center">
        <FadeIn>
          <h2 className="text-[#4B4A4A] mb-4" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>
            Explore Our Other Pillars
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {pillars.map((p) => (
              <Link
                key={p.label}
                href={p.route}
                className="px-6 py-2.5 rounded-full border border-[#3B2B26] text-[#3B2B26] text-[11px] tracking-[0.15em] uppercase hover:bg-[#3B2B26] hover:text-white transition-all duration-300"
                style={{ ...body, fontWeight: 500 }}
              >
                {p.label}
              </Link>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
