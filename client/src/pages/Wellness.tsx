/**
 * NAYARA WELLNESS — Brand-Level Pillar Page
 * Nature-based healing across all 6 properties
 * One-axis filter: property selector on treatments
 * Hero → Intro → Wellness Pillars → Treatments Filter → Springs Feature → Property Links → Footer
 */

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronRight } from "lucide-react";
import Footer from "@/components/Footer";
import NativeVideo from "@/components/NativeVideo";
import BrandNavigation from "@/components/BrandNavigation";
import { properties, type Treatment } from "@/data/properties";
import { useIsMobile } from "@/hooks/useMobile";

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

const WELLNESS_CDN = {
  heroImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Termaleschildren_5bfef28b.webp",
  heroVideo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/wellness-nature-color_fae0ea2e.mp4",
};

/* ─── Wellness Pillars ─── */
interface WellnessPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  details: string[];
}

const wellnessPillars: WellnessPillar[] = [
  {
    id: "hot-springs",
    title: "Volcanic Hot Springs",
    subtitle: "Nayara Springs · Costa Rica",
    description: "Every villa at Nayara Springs features a private hot springs plunge pool, fed by natural volcanic aquifers heated deep within the Earth. The mineral-rich waters — naturally heated to 38\u201342\u00b0C — have been used for centuries by indigenous communities for their therapeutic properties.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-plunge-pool_e5f6a7b8.jpg",
    details: ["Private plunge pool in every villa", "Natural volcanic mineral water", "38\u201342\u00b0C therapeutic temperature", "Adults-only sanctuary"],
  },
  {
    id: "desert-healing",
    title: "Desert Sound Healing",
    subtitle: "Alto Atacama · Chile",
    description: "In the world's driest desert, silence itself becomes a healing force. Our sound healing sessions take place under the infinite Atacama sky, where Tibetan singing bowls and crystal sound baths resonate against a backdrop of absolute stillness.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-pool-sunset_c4a2f7e1.jpg",
    details: ["Outdoor sound bath sessions", "Atacama salt flat meditation", "Volcanic mud treatments", "Starlight yoga"],
  },
  {
    id: "yoga-pavilion",
    title: "Rainforest Yoga Pavilion",
    subtitle: "Nayara Tented Camp · Costa Rica",
    description: "A dedicated open-air yoga pavilion suspended in the rainforest canopy, where the soundtrack is howler monkeys and tropical birdsong. Morning vinyasa flows face Arenal Volcano; evening restorative sessions are accompanied by the chorus of tree frogs.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tented-camp-exterior_c9d0e1f2.jpg",
    details: ["Dedicated yoga pavilion", "Daily morning and evening classes", "Private instruction available", "Volcano-facing practice space"],
  },
  {
    id: "pacific-wellness",
    title: "Pacific Oceanfront Wellness",
    subtitle: "Nayara Hangaroa · Easter Island",
    description: "At the most remote inhabited place on Earth, wellness takes on a different dimension. Oceanfront treatments incorporate local Rapa Nui healing traditions, volcanic stone therapy, and the raw power of the Pacific.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-pool_1b0d18e8.jpg",
    details: ["Volcanic stone therapy", "Rapa Nui healing traditions", "Oceanfront treatment rooms", "Total isolation wellness"],
  },
];

/* ─── Property filter options ─── */
const filterOptions = [
  { id: "all", label: "All Properties" },
  ...properties.map((p) => ({ id: p.id, label: p.shortName })),
];

/* ─── Property wellness links ─── */
const propertyWellnessLinks = [
  { name: "Alto Atacama", focus: "Desert healing and starlight yoga", route: "/alto-atacama" },
  { name: "Bocas del Toro", focus: "Caribbean marine wellness and overwater spa", route: "/bocas-del-toro" },
  { name: "Gardens", focus: "Rainforest spa and volcanic mineral treatments", route: "/gardens" },
  { name: "Hangaroa", focus: "Pacific oceanfront and volcanic stone therapy", route: "/hangaroa" },
  { name: "Springs", focus: "Private hot springs and adults-only wellness", route: "/springs" },
  { name: "Tented Camp", focus: "Rainforest yoga pavilion and nature immersion", route: "/tented-camp" },
];

export default function Wellness() {
  const [activeFilter, setActiveFilter] = useState("all");

  /* Aggregate treatments with property metadata */
  const allTreatments = properties.flatMap((p) => {
    const route = `/${p.id}`;
    return p.treatments.map((t) => ({ ...t, propertyId: p.id, propertyName: p.shortName, propertyRoute: route }));
  });

  const filtered = activeFilter === "all" ? allTreatments : allTreatments.filter((t) => t.propertyId === activeFilter);

  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <BrandNavigation pageType="brand" hideCenterLabel />
      <HeroSection />
      <IntroSection />
      <WellnessPillarsSection />
      <TreatmentsSection activeFilter={activeFilter} onFilterChange={setActiveFilter} treatments={filtered} />
      <SpringsFeature />
      <PropertyLinksSection />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <NativeVideo src={WELLNESS_CDN.heroVideo} className="w-full h-full object-cover" hasAudio />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none" />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6 md:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-xl md:text-3xl lg:text-4xl tracking-wide text-center"
          style={{ ...heading, fontWeight: 400 }}
        >
          Nurtured by Nature
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
          <p className="text-[#3B2B26]/35 text-[10px] tracking-[0.3em] mb-4" style={{ ...body, fontWeight: 600 }}>The Nayara Philosophy</p>
          <h2 className="text-[#4B4A4A] mb-8" style={{ ...heading, fontSize: "clamp(24px, 3.5vw, 38px)", lineHeight: 1.15 }}>
            Nature as Healer
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <p className="text-[#4B4A4A]/70 text-[15px] leading-[1.8]" style={body}>
              Nayara wellness is not a spa menu \u2014 it is a philosophy. Every property sits within a landscape that has been healing people for centuries: volcanic hot springs that indigenous communities have used for millennia, desert silence that ancient cultures sought for spiritual clarity, rainforest canopies that naturally regulate the nervous system.
            </p>
            <p className="text-[#4B4A4A]/70 text-[15px] leading-[1.8]" style={body}>
              We do not import wellness trends. We listen to the land. Our treatments, practices, and spaces are designed around the unique healing properties of each destination \u2014 volcanic minerals, desert acoustics, tropical botanicals, Pacific salt air. The landscape does the work; we simply create the conditions.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   WELLNESS PILLARS — Alternating editorial sections
   ═══════════════════════════════════════════════════════════════ */
function WellnessPillarsSection() {
  return (
    <section className="pb-16 md:pb-24">
      {wellnessPillars.map((pillar, idx) => (
        <WellnessPillarRow key={pillar.id} pillar={pillar} reversed={idx % 2 !== 0} index={idx} />
      ))}
    </section>
  );
}

function WellnessPillarRow({ pillar, reversed, index }: { pillar: WellnessPillar; reversed: boolean; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className={`px-6 md:px-10 ${index === 0 ? "" : "mt-16 md:mt-24"}`}>
      <div className="max-w-[1400px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className={reversed ? "md:order-2" : "md:order-1"}>
            <div className="aspect-[4/5] overflow-hidden">
              <img src={pillar.image} alt={pillar.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
          </div>
          <div className={reversed ? "md:order-1" : "md:order-2"}>
            <p className="text-[#3B2B26]/35 text-[10px] tracking-[0.3em] mb-3" style={{ ...body, fontWeight: 600 }}>{pillar.subtitle}</p>
            <h3 className="text-[#3B2B26] text-2xl md:text-3xl leading-[1.15] mb-6" style={heading}>{pillar.title}</h3>
            <p className="text-[#4B4A4A]/65 text-[15px] leading-relaxed mb-8" style={body}>{pillar.description}</p>
            <ul className="space-y-3">
              {pillar.details.map((d) => (
                <li key={d} className="text-[#4B4A4A]/50 text-sm flex items-center gap-3" style={body}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B2B26]/20 flex-shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TREATMENTS — Filtered by property
   ═══════════════════════════════════════════════════════════════ */
function TreatmentsSection({ activeFilter, onFilterChange, treatments }: { activeFilter: string; onFilterChange: (id: string) => void; treatments: Array<Treatment & { propertyId: string; propertyName: string; propertyRoute: string }> }) {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10 bg-white/30">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <p className="text-[#3B2B26]/35 text-[10px] tracking-[0.3em] mb-4" style={{ ...body, fontWeight: 600 }}>Spa Treatments</p>
          <h2 className="text-[#4B4A4A] mb-8" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>
            Treatments Shaped by Place
          </h2>
        </FadeIn>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => onFilterChange(opt.id)}
              className={`px-4 py-1.5 text-xs tracking-[0.1em] rounded-full border transition-all duration-300 ${
                activeFilter === opt.id
                  ? "bg-[#3B2B26] text-white border-[#3B2B26]"
                  : "bg-transparent text-[#5a4a3a]/60 border-[#3B2B26]/15 hover:border-[#3B2B26]/40 hover:text-[#3B2B26]"
              }`}
              style={{ ...body, fontWeight: 500 }}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Treatment cards */}
        {treatments.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-[#3B2B26]/40 text-lg" style={heading}>No treatments match the selected filter</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {treatments.slice(0, 12).map((t, i) => (
              <FadeIn key={`${t.propertyId}-${t.id}`} delay={Math.min(i * 0.05, 0.3)}>
                <div className="bg-white/60 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[#3B2B26]/30 text-[9px] tracking-[0.2em]" style={{ ...body, fontWeight: 600 }}>{t.propertyName}</span>
                    <span className="text-[#3B2B26]/15">\u00b7</span>
                    <span className="text-[#3B2B26]/30 text-[9px] tracking-[0.15em]" style={{ ...body, fontWeight: 500 }}>{t.category}</span>
                  </div>
                  <h3 className="text-[#3B2B26] text-[16px] mb-1" style={{ ...heading, fontWeight: 500 }}>{t.name}</h3>
                  {t.localName && <p className="text-[#3B2B26]/30 text-[12px] italic mb-2" style={body}>{t.localName}</p>}
                  <p className="text-[#4B4A4A]/55 text-[13px] leading-relaxed mb-3 line-clamp-2" style={body}>{t.description}</p>
                  <div className="flex items-center gap-3 text-[11px] text-[#3B2B26]/35" style={{ ...body, fontWeight: 500 }}>
                    <span>{t.duration}</span>
                    <span className="text-[#3B2B26]/15">\u00b7</span>
                    <span>{t.price}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        )}
        {treatments.length > 12 && (
          <div className="text-center mt-8">
            <p className="text-[#3B2B26]/30 text-[13px]" style={body}>Showing 12 of {treatments.length} treatments</p>
          </div>
        )}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SPRINGS FEATURE — Wellness flagship highlight
   ═══════════════════════════════════════════════════════════════ */
function SpringsFeature() {
  return (
    <section className="py-16 md:py-24 bg-[#3B2B26] px-6 md:px-10">
      <div className="max-w-[800px] mx-auto text-center">
        <FadeIn>
          <p className="text-white/25 text-[10px] tracking-[0.3em] mb-4" style={{ ...body, fontWeight: 600 }}>The Wellness Flagship</p>
          <h2 className="text-white/80 mb-6" style={{ ...heading, fontSize: "clamp(26px, 3.5vw, 42px)", lineHeight: 1.15 }}>
            Nayara Springs
          </h2>
          <p className="text-white/40 text-[15px] leading-relaxed mb-8" style={body}>
            Adults-only. Private hot springs in every villa. A dedicated yoga pavilion in the rainforest canopy. Full-service spa with volcanic mineral treatments. Nayara Springs is where the entire Nayara wellness philosophy comes together in one extraordinary property.
          </p>
          <Link href="/springs" className="inline-flex items-center gap-2 text-white/70 text-[13px] tracking-[0.1em] hover:text-white hover:gap-3 transition-all duration-300 border-b border-white/20 pb-1" style={{ ...body, fontWeight: 500 }}>
            Explore Nayara Springs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PROPERTY LINKS — All 6 properties
   ═══════════════════════════════════════════════════════════════ */
function PropertyLinksSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10">
      <div className="max-w-[1100px] mx-auto">
        <FadeIn>
          <p className="text-[#3B2B26]/35 text-[10px] tracking-[0.3em] mb-4" style={{ ...body, fontWeight: 600 }}>Wellness by Destination</p>
          <h2 className="text-[#4B4A4A] mb-10" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>
            Find Your Healing Landscape
          </h2>
        </FadeIn>
        <div className="space-y-0">
          {propertyWellnessLinks.map((prop) => (
            <Link key={prop.name} href={prop.route} className="group flex items-center justify-between py-5 border-b border-[#3B2B26]/10 hover:border-[#3B2B26]/30 transition-colors">
              <div>
                <h3 className="text-[#3B2B26] text-lg md:text-xl group-hover:text-[#5a4a3a] transition-colors" style={heading}>{prop.name}</h3>
                <p className="text-[#4B4A4A]/40 text-[13px] mt-1" style={body}>{prop.focus}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-[#3B2B26]/20 group-hover:text-[#3B2B26]/50 group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
