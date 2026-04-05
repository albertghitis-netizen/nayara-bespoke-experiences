/*
 * NAYARA SPRINGS — Arenal, Costa Rica
 * Rebuilt with new structure: Story (s1/s2) → Springs Villa (s3/s4) → Experiences → Sustainability → Wellness → Gastronomy → Gallery → Footer
 */
import { useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";

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

const heading = { fontFamily: "var(--font-heading)", fontWeight: 400 } as const;
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

/* Rich animation variants */
const luxuryEase = [0.22, 1, 0.36, 1] as const;
const slideFromLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: luxuryEase as unknown as [number, number, number, number] } },
};
const slideFromRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: luxuryEase as unknown as [number, number, number, number] } },
};
const scaleReveal = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: luxuryEase as unknown as [number, number, number, number] } },
};
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: luxuryEase as unknown as [number, number, number, number] } },
};
const badgePop = {
  hidden: { opacity: 0, scale: 0, rotate: -15 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.6, delay: 0.5 + i * 0.15, ease: luxuryEase as unknown as [number, number, number, number], type: "spring" as const, stiffness: 200, damping: 15 },
  }),
};

/* Parallax image with scroll-linked movement */
function ParallaxImage({ src, alt, className, style, speed = 0.15 }: { src: string; alt: string; className?: string; style?: React.CSSProperties; speed?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [speed * -100, speed * 100]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
  return (
    <div ref={ref} className={`overflow-hidden ${className || ""}`} style={style}>
      <motion.img src={src} alt={alt} className="w-full h-[115%] object-cover" style={{ y: smoothY }} loading="lazy" />
    </div>
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
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }} className="text-white text-center" style={{ ...heading, fontSize: "40px", lineHeight: 1.15 }}>
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
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const badgeRef = useRef<HTMLDivElement>(null);
  const badgesInView = useInView(badgeRef, { once: true, amount: 0.3 });

  /* Decorative line animation */
  const lineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: lineProgress } = useScroll({ target: lineRef, offset: ["start end", "end start"] });
  const lineWidth = useTransform(lineProgress, [0, 0.5], ["0%", "100%"]);

  const badges = [
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/michelin-3keys_f314991b.png", alt: "Michelin 3 Keys", label: "3 Keys" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/green-globe_1f678bff.png", alt: "Green Globe Certified", label: "Certified" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/relais-chateaux_cf8af849.png", alt: "Relais & Châteaux", label: "Member" },
  ];

  return (
    <section ref={sectionRef} id="story" className="mt-4 md:mt-6 overflow-hidden">
      {/* ── Row 1: Text left + s1 vertical right (desktop) | s1 on top, text below (mobile) ── */}
      <div className="flex flex-col md:flex-row md:items-stretch">
        {/* Text + Badges column */}
        <motion.div
          className="order-2 md:order-1 md:w-[45%] flex flex-col justify-center px-5 sm:px-8 md:px-10 lg:px-14 py-8 md:py-12"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Animated decorative line */}
          <motion.div
            ref={lineRef}
            className="h-px bg-gradient-to-r from-[#3a2a1a]/20 via-[#3a2a1a]/10 to-transparent mb-6 md:mb-8"
            style={{ width: lineWidth }}
          />

          {/* H2 — word-by-word reveal */}
          <motion.h2
            className="text-[#4B4A4A] mb-4 md:mb-6"
            style={{ ...heading, fontSize: "clamp(26px, 3.5vw, 34px)", lineHeight: 1.15 }}
            variants={fadeUp}
          >
            <motion.span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                Romance without Distraction
              </motion.span>
            </motion.span>
            <motion.span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                Wellness without Walls
              </motion.span>
            </motion.span>
          </motion.h2>

          {/* Body text — fade up */}
          <motion.p
            className="text-[#4B4A4A]/70 text-[14px] md:text-[15px] leading-relaxed mb-8 md:mb-10"
            style={body}
            variants={fadeUp}
          >
            Hidden within the rainforest surrounding Arenal Volcano, Nayara Springs is an adults-only Relais & Châteaux retreat built around hot springs, romance, and exceptional dining. Every villa has its own volcanic hot spring plunge pool screened by tropical gardens, and the spa draws its rituals from the geothermal earth and forest botanicals that surround it. Here, privacy is not a perk. It is the entire point.
          </motion.p>

          {/* Certification badges — spring pop-in with stagger */}
          <div ref={badgeRef} className="flex items-start gap-5 sm:gap-6 md:gap-8">
            {badges.map((badge, i) => (
              <motion.div
                key={badge.alt}
                className="flex flex-col items-center gap-2"
                custom={i}
                variants={badgePop}
                initial="hidden"
                animate={badgesInView ? "visible" : "hidden"}
              >
                <motion.div
                  className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white rounded-xl shadow-md border border-stone-100/80 flex items-center justify-center p-2.5 cursor-pointer"
                  whileHover={{ scale: 1.1, boxShadow: "0 8px 30px rgba(58,42,26,0.12)", y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img src={badge.src} alt={badge.alt} className="w-full h-full object-contain" />
                </motion.div>
                <motion.span
                  className="text-[8px] sm:text-[9px] tracking-[0.12em] uppercase text-[#3a2a1a]/40 text-center"
                  style={body}
                  initial={{ opacity: 0 }}
                  animate={badgesInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 + i * 0.15 }}
                >
                  {badge.label}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* s1 vertical image — visible at ALL breakpoints, parallax on desktop */}
        <motion.div
          className="order-1 md:order-2 md:w-[55%]"
          variants={slideFromRight}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <ParallaxImage
            src={CDN.s1}
            alt="Nayara Springs hot spring immersion"
            className="w-full"
            style={{ aspectRatio: "3/4", maxHeight: "85vh" }}
            speed={0.1}
          />
        </motion.div>
      </div>

      {/* s2 landscape — HIDDEN on mobile, visible md+ with scale reveal + parallax */}
      <motion.div
        className="hidden md:block mt-4 md:mt-6"
        variants={scaleReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <ParallaxImage
          src={CDN.s2}
          alt="Rainforest boardwalk at Nayara Springs"
          className="w-full"
          style={{ aspectRatio: "16/9" }}
          speed={0.08}
        />
      </motion.div>
    </section>
  );
}

function SpringsVillaSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} id="springs-villa" className="py-0 md:py-0 px-6 md:px-10 mt-6 md:mt-6 mb-6 md:mb-6 overflow-hidden">
      {/* s3 vertical left + Text right — image left, text right on desktop */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
        <motion.div
          className="md:flex-1 w-full md:w-auto md:-ml-10 order-1"
          variants={slideFromLeft}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <ParallaxImage
            src={CDN.s3}
            alt="Luxury canopy villa at Nayara Springs"
            className="w-full"
            style={{ aspectRatio: "3/4" }}
            speed={0.1}
          />
        </motion.div>
        <motion.div
          className="md:flex-1 md:py-8 order-2 px-1 md:px-0"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>Accommodations</SectionLabel>
          </motion.div>
          <motion.h3
            className="text-[#4B4A4A] mb-4 md:mb-6"
            style={{ ...heading, fontSize: "clamp(24px, 3vw, 32px)", lineHeight: 1.15 }}
            variants={fadeUp}
          >
            Springs Villa
          </motion.h3>
          <motion.p
            className="text-[#4B4A4A]/70 text-[14px] md:text-[15px] leading-relaxed"
            style={body}
            variants={fadeUp}
          >
            Each Springs Villa features a private natural hot spring pool fed by volcanic mineral water. Designed for ultimate privacy and relaxation, these intimate sanctuaries offer an unparalleled experience of thermal wellness surrounded by rainforest canopy.
          </motion.p>
        </motion.div>
      </div>

      {/* s4 landscape — HIDDEN on mobile, visible md+ with scale reveal */}
      <motion.div
        className="hidden md:block -mx-6 md:-mx-10 mt-6 md:mt-6"
        variants={scaleReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <ParallaxImage
          src={CDN.s4}
          alt="Aerial view of Springs Villa nestled in rainforest"
          className="w-full"
          style={{ aspectRatio: "16/9" }}
          speed={0.08}
        />
      </motion.div>
    </section>
  );
}

function ExperiencesSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = springs.excursionCategories || [];
  const filtered = activeCategory === "all" ? springs.excursions : springs.excursions.filter((e: Excursion) => e.category === activeCategory);
  return (
    <section id="experiences" className={`${sectionPadding} bg-white/30 mt-6 md:mt-6 mb-6 md:mb-6`}>
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
    <section id="sustainability" className={`${sectionPadding} mt-6 md:mt-6 mb-6 md:mb-6`}>
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
    <section id="wellness" className={`${sectionPadding} bg-white/30 mt-6 md:mt-6 mb-6 md:mb-6`}>
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
    <section id="gastronomy" className={`${sectionPadding} mt-6 md:mt-6 mb-6 md:mb-6`}>
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
    <section id="gallery" className={`${sectionPadding} mt-6 md:mt-6 mb-6 md:mb-6`}>
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
