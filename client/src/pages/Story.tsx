/**
 * THE NAYARA STORY — Brand narrative page
 * History, philosophy, and the family behind the resorts
 * Links to all properties and pillar pages
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";
import NativeVideo from "@/components/NativeVideo";

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;
const sectionPadding = "py-16 md:py-24 px-6 md:px-10";
const maxW = "max-w-[1000px] mx-auto";

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
  return <p className="text-[#3B2B26]/35 text-[10px] tracking-[0.3em] mb-4" style={{ ...body, fontWeight: 600 }}>{children}</p>;
}

/* ─── Timeline milestones ─── */
const milestones = [
  { year: "2005", title: "Nayara Gardens Opens", desc: "The first Nayara property opens at the foot of Arenal Volcano in Costa Rica, introducing a new model of luxury hospitality rooted in the rainforest." },
  { year: "2015", title: "Nayara Springs Debuts", desc: "An adults-only sanctuary of hot spring villas opens next door, earning immediate recognition from Cond\u00e9 Nast Traveler and Travel + Leisure." },
  { year: "2019", title: "Nayara Tented Camp Launches", desc: "Safari-style luxury tents elevated above the canopy bring a new dimension to the Arenal experience, designed for families and adventurers." },
  { year: "2020", title: "Nayara Alto Atacama Joins", desc: "The portfolio expands to Chile's Atacama Desert, where ancient landscapes and Atacame\u00f1o heritage define a new kind of desert retreat." },
  { year: "2022", title: "Nayara Hangaroa Opens", desc: "On Easter Island, Nayara Hangaroa becomes the gateway to Rapa Nui culture, connecting guests with one of the world's most remote and sacred places." },
  { year: "2025", title: "Nayara Bocas del Toro Arrives", desc: "Overwater villas on a private Caribbean island in Panama mark the newest chapter, bringing Nayara's philosophy to the tropics." },
];

/* ─── Core values ─── */
const values = [
  { title: "Rooted in Place", desc: "Every property is designed by the land it inhabits. Architecture, cuisine, and experiences emerge from the ecosystem, not imposed upon it." },
  { title: "Regenerative by Design", desc: "We leave every ecosystem stronger than we found it. Carbon-neutral operations, wildlife corridors, and community partnerships are standard, not aspirational." },
  { title: "Cultural Stewardship", desc: "From Atacame\u00f1o healing traditions to Rapa Nui ceremony, we honor the cultures that shaped these landscapes long before we arrived." },
  { title: "Intimate Scale", desc: "No property exceeds 70 rooms. Every guest is known by name. Every experience is personal, unhurried, and unrepeatable." },
];

export default function Story() {
  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <BrandNavigation pageType="brand" />
      <HeroSection />
      <IntroSection />
      <TimelineSection />
      <ValuesSection />
      <DestinationsSection />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO — Full-width image with centered title
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
      <NativeVideo
        src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/compressed-arenal-desktop_05c5168c.mp4"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50 pointer-events-none" />
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6">
        <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="text-white text-3xl md:text-5xl lg:text-6xl tracking-wide text-center" style={heading}>
          The Nayara Story
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="text-white/50 text-[13px] md:text-[15px] mt-4 tracking-[0.12em]" style={{ ...body, fontWeight: 500 }}>
          Twenty Years of Luxury Rooted in Nature
        </motion.p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   INTRO — Brand philosophy
   ═══════════════════════════════════════════════════════════════ */
function IntroSection() {
  return (
    <section className={sectionPadding}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Our Philosophy</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-8" style={{ ...heading, fontSize: "clamp(24px, 3.5vw, 38px)", lineHeight: 1.15 }}>
            We Don't Build Hotels. We Reveal Places.
          </h2>
          <p className="text-[#4B4A4A]/70 text-[15px] leading-[1.8] mb-6" style={body}>
            Nayara Resorts began with a simple conviction: the most extraordinary places on Earth deserve hospitality that honors them. Not resorts that could exist anywhere, but properties that could only exist where they stand.
          </p>
          <p className="text-[#4B4A4A]/70 text-[15px] leading-[1.8] mb-6" style={body}>
            In Costa Rica, that meant building among the trees, not instead of them. In the Atacama, it meant learning from the desert's silence. On Easter Island, it meant listening to the stone guardians. In Panama, it meant floating above the reef rather than disturbing it.
          </p>
          <p className="text-[#4B4A4A]/70 text-[15px] leading-[1.8]" style={body}>
            Today, six properties across three countries share this founding principle. Each is shaped by its landscape, informed by its culture, and designed to leave its ecosystem stronger than we found it.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TIMELINE — Key milestones
   ═══════════════════════════════════════════════════════════════ */
function TimelineSection() {
  return (
    <section className={`${sectionPadding} bg-white/30`}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Our Journey</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-12" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>
            Two Decades of Discovery
          </h2>
        </FadeIn>
        <div className="space-y-10">
          {milestones.map((m, i) => (
            <FadeIn key={m.year} delay={i * 0.08}>
              <div className="flex gap-6 md:gap-10 items-start">
                <div className="flex-shrink-0 w-16 md:w-20">
                  <span className="text-[#3B2B26]/25 text-[28px] md:text-[36px]" style={{ ...heading, fontWeight: 300 }}>
                    {m.year}
                  </span>
                </div>
                <div className="flex-1 border-l border-[#3B2B26]/10 pl-6 md:pl-10">
                  <h3 className="text-[#3B2B26] text-[17px] mb-2" style={{ ...heading, fontWeight: 500 }}>
                    {m.title}
                  </h3>
                  <p className="text-[#4B4A4A]/60 text-[14px] leading-relaxed" style={body}>
                    {m.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   VALUES — Core principles
   ═══════════════════════════════════════════════════════════════ */
function ValuesSection() {
  return (
    <section className={sectionPadding}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>What We Believe</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-12" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>
            Four Principles That Guide Every Decision
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.1}>
              <div className="bg-white/40 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-[#3B2B26] text-[18px] mb-3" style={{ ...heading, fontWeight: 500 }}>
                  {v.title}
                </h3>
                <p className="text-[#4B4A4A]/60 text-[14px] leading-relaxed" style={body}>
                  {v.desc}
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
   DESTINATIONS — Links to all 6 properties
   ═══════════════════════════════════════════════════════════════ */
function DestinationsSection() {
  const properties = [
    { name: "Nayara Alto Atacama", location: "Atacama Desert, Chile", route: "/alto-atacama" },
    { name: "Nayara Bocas del Toro", location: "Bocas del Toro, Panama", route: "/bocas-del-toro" },
    { name: "Nayara Gardens", location: "Arenal Volcano, Costa Rica", route: "/gardens" },
    { name: "Nayara Hangaroa", location: "Easter Island, Chile", route: "/hangaroa" },
    { name: "Nayara Springs", location: "Arenal Volcano, Costa Rica", route: "/springs" },
    { name: "Nayara Tented Camp", location: "Arenal Volcano, Costa Rica", route: "/tented-camp" },
  ];
  return (
    <section className={`${sectionPadding} bg-[#3B2B26]`}>
      <div className={maxW}>
        <FadeIn>
          <p className="text-white/25 text-[10px] tracking-[0.3em] mb-4" style={{ ...body, fontWeight: 600 }}>Our Destinations</p>
          <h2 className="text-white/80 mb-10" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>
            Six Properties, Three Countries
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((p, i) => (
            <FadeIn key={p.route} delay={i * 0.08}>
              <Link href={p.route} className="group block border border-white/10 rounded-lg p-6 hover:border-white/25 hover:bg-white/5 transition-all">
                <h3 className="text-white/70 text-[16px] mb-1 group-hover:text-white/90 transition-colors" style={{ ...heading, fontWeight: 500 }}>
                  {p.name}
                </h3>
                <p className="text-white/30 text-[12px] tracking-[0.08em]" style={{ ...body, fontWeight: 500 }}>
                  {p.location}
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
