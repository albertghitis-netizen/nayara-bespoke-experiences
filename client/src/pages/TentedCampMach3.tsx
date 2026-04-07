/*
 * NAYARA TENTED CAMP MACH 3 — Arenal, Costa Rica (Light Transitions)
 * Bold animations: parallax, word reveal, slide-in, Ken Burns, staggered grid
 * WordPress equiv: AOS plugin + CSS @keyframes + background-attachment:fixed
 */
import { useRef } from "react";
import RoomsSlider from "@/components/RoomsSlider";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import NativeVideo from "@/components/NativeVideo";
import { useIsMobile } from "@/hooks/useMobile";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import { properties, type Property } from "@/data/properties";
import { costaRicaDining } from "@/data/dining";
import ThreeResortsGraphic from "@/components/ThreeResortsGraphic";

const tentedCamp = properties.find((p: Property) => p.id === "tented-camp")!;

const CDN = {
  heroDesktop: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tented-camp-hero-desktop_90751603.mp4",
  heroVertical: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tented_hero_vertical_0834f0e2.mp4",
  experiencesHero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/TentedExperienceVideo_fixed_75e9afca.mp4",
  s1: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/IMG_5354_8a9b536e.PNG",
  s2: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/340C7D71-BAF3-4215-B25E-98878C4B65F6_48b343e5.JPEG",
};

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;
const sectionPadding = "py-10 md:py-16 px-6 md:px-10";
const maxW = "max-w-[1200px] mx-auto";

/* ═══ ANIMATION PRIMITIVES ═══
   WordPress: each maps to an AOS data attribute or CSS @keyframes
*/

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

function SlideFromLeft({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, x: -80 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

function SlideFromRight({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, x: 80 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

function ScaleIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, scale: 0.85 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

/* Word-by-word reveal — WP: CSS animation-delay on each span */
function WordReveal({ text, className = "", style = {} }: { text: string; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const words = text.split(" ");
  return (
    <h1 ref={ref} className={className} style={style}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
}

/* Horizontal line wipe — WP: CSS scaleX(0)->scaleX(1) */
function LineWipe({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <motion.div
      ref={ref}
      initial={{ scaleX: 0 }}
      animate={inView ? { scaleX: 1 } : {}}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className={`h-px bg-[#3a2a1a]/20 origin-left ${className}`}
    />
  );
}

/* Section label with letter-spacing expand — WP: CSS letter-spacing transition */
function SectionLabel({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, letterSpacing: "0.05em" }}
      animate={inView ? { opacity: 1, letterSpacing: "0.15em" } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="text-[#3a2a1a]/40 text-[11px] uppercase mb-3"
      style={{ ...body, fontWeight: 500 }}
    >
      {children}
    </motion.p>
  );
}

/* Ken Burns zoom on scroll — WP: CSS @keyframes kenburns { from { transform: scale(1.1) } to { transform: scale(1) } } */
function KenBurnsImage({ src, alt, aspect }: { src: string; alt: string; aspect: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  return (
    <FadeIn delay={0.3}>
      <div ref={ref} className="overflow-hidden rounded-lg">
        <motion.img src={src} alt={alt} className="w-full object-cover" style={{ aspectRatio: aspect, scale }} loading="lazy" />
      </div>
    </FadeIn>
  );
}

const gradientStyles = {
  'light-to-dark': 'bg-gradient-to-b from-[#e3dfd2] via-[#d4cfc0] to-[#c9c2b0]',
  'dark-to-light': 'bg-gradient-to-b from-[#c9c2b0] via-[#d4cfc0] to-[#e3dfd2]',
  'light-to-brown': 'bg-gradient-to-b from-[#e3dfd2] via-[#d4cfc0] to-[#c9c2b0]',
  'brown-to-light': 'bg-gradient-to-b from-[#c9c2b0] via-[#d4cfc0] to-[#e3dfd2]',
} as const;

function GradientBridge({ type, height = 'h-24 md:h-32' }: { type: keyof typeof gradientStyles; height?: string }) {
  return <div className={`${height} w-full ${gradientStyles[type]}`} />;
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function TentedCampMach3() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e3dfd2' }}>
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
      <NayaraResortsCloser />
      <Footer />
    </div>
  );
}

/* ═══ HERO — Parallax video + word-by-word H1 ═══ */
function HeroSection() {
  const isMobile = useIsMobile();
  const heroSrc = isMobile ? CDN.heroVertical : CDN.heroDesktop;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.8]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: videoY }}>
        <NativeVideo src={heroSrc} className="w-full h-[130%] object-cover" />
      </motion.div>
      <motion.div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" style={{ opacity: overlayOpacity }} />
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6 md:px-10">
        <WordReveal
          text="Luxury Tented Camp Immersed in the Rainforest"
          className="text-white text-2xl md:text-4xl lg:text-5xl leading-[0.95] tracking-wide text-center"
          style={heading}
        />
      </div>
    </section>
  );
}

/* ═══ STORY — Text slides left, image slides right, parallax on s1 ═══ */
function StorySection() {
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section id="story" className={sectionPadding}>
      <div className={maxW}>
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start mb-16">
          <SlideFromLeft className="md:flex-1">
            <h2 className="text-[#4B4A4A] mb-6" style={{ ...heading, fontSize: "clamp(20px, 2.8vw, 32px)", lineHeight: 1.15 }}>
              Lifted On Stilts Above The Canopy<br />Eye to Eye with Arenal Volcano
            </h2>
            <p className="text-[#4B4A4A]/70 text-[15px] leading-relaxed" style={body}>
              Where a barren cattle ranch once stood, a thriving rainforest now surrounds you. Open-air tented suites perch on a volcanic clifftop, each with a private plunge pool fed by natural hot springs. The land tells its own story.
            </p>
            <div className="mt-8">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/award-badges-tented-camp_8aea5e71.webp"
                alt="Green Globe Certified · Travel + Leisure World's Best Awards 2021-2024 · Leading Hotels of the World"
                className="h-28 md:h-36 lg:h-48 w-auto object-contain opacity-70"
                loading="lazy"
              />
            </div>
            <ThreeResortsGraphic />
          </SlideFromLeft>
          <SlideFromRight delay={0.2} className="md:flex-1">
            <div ref={imgRef} className="overflow-hidden rounded-lg">
              <motion.img src={CDN.s1} alt="Luxury tented accommodation at Nayara" className="w-full object-cover" style={{ aspectRatio: "3/4", y: imgY }} loading="lazy" />
            </div>
          </SlideFromRight>
        </div>
        <KenBurnsImage src={CDN.s2} alt="Rainforest canopy at Nayara Tented Camp" aspect="16/9" />
        <LineWipe className="mt-12" />
      </div>
    </section>
  );
}

/* ═══ ACCOMMODATIONS — Scale-in reveal ═══ */
function TentedCampAccommodationsSection() {
  const roomTypes = [
    { id: "tent", name: "", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/NayaraTent_b4d0601d.jpg" },
    { id: "family-tent", name: "", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/familytent3images_aea131ab.jpg" },
    { id: "grand-tent", name: "", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/grandtent3_dd3f6902.jpg" },
    { id: "residence", name: "", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Supersale-3_3588efbb.jpg" },
  ];
  return (
    <section id="tented-camp" className={sectionPadding} style={{ background: 'linear-gradient(180deg, #e3dfd2 0%, #f0ece3 15%, #f5f2eb 50%, #f0ece3 85%, #e3dfd2 100%)' }}>
      <div className={maxW}>
        <ScaleIn>
          <RoomsSlider rooms={roomTypes} title="Life under Canvas" subtitle="Tents & Suites" />
        </ScaleIn>
        <FadeIn delay={0.3}>
          <div className="mt-10 flex justify-center">
            <a href="/tented-camp/rooms" className="text-[#3a2a1a]/60 hover:text-[#3a2a1a] text-sm tracking-[0.08em] uppercase transition-colors underline" style={{ ...body, fontWeight: 400 }}>Explore More</a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══ EXPERIENCES — Dark section with blog card + full-screen video ═══ */
function ExperiencesSection() {
  return (
    <>
      <GradientBridge type="light-to-dark" height="h-10 md:h-16" />
      <div className="py-10 md:py-16 px-0 bg-[#e3dfd2]">
        <div className="px-6 md:px-10 max-w-[1200px] mx-auto">
          <FadeIn>
            <motion.p initial={{ opacity: 0, letterSpacing: "0.05em" }} whileInView={{ opacity: 1, letterSpacing: "0.15em" }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-[#3a2a1a]/40 text-[11px] uppercase mb-6" style={{ ...body, fontWeight: 500 }}>Experiences</motion.p>
          </FadeIn>
          <SlideFromLeft delay={0.2}>
            <a href="https://blog.nayararesorts.com/pura-vida" target="_blank" rel="noopener noreferrer" className="group block p-5 rounded-lg border border-[#3a2a1a]/10 hover:border-[#3a2a1a]/25 hover:bg-[#3a2a1a]/5 transition-all">
              <span className="text-[#3a2a1a]/40 text-[9px] tracking-[0.15em] uppercase block mb-2" style={{ ...body, fontWeight: 600 }}>From the Journal</span>
              <h4 className="text-[#3a2a1a] text-[14px] leading-snug group-hover:text-[#8b6f47] transition-colors" style={{ ...heading, fontWeight: 500 }}>Pura Vida: Why Costa Rica Feels Different</h4>
              <span className="text-[#3a2a1a]/30 text-[11px] tracking-[0.08em] uppercase mt-3 inline-block group-hover:text-[#8b6f47]/60 transition-colors" style={{ ...body, fontWeight: 500 }}>Read →</span>
            </a>
          </SlideFromLeft>
        </div>
      </div>
      <section id="experiences" className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-end pb-16 md:pb-24">
        <div className="absolute inset-0 w-full h-full">
          <NativeVideo src={CDN.experiencesHero} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-10">
          <WordReveal text="Bespoke Experiences" className="text-white text-3xl md:text-4xl lg:text-5xl leading-tight mb-6" style={{ ...heading, fontWeight: 400 }} />
          <motion.a initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.8 }} href="/tented-experiences" className="text-white/70 hover:text-white text-sm tracking-[0.08em] uppercase transition-colors cursor-pointer underline" style={{ ...body, fontWeight: 400 }}>Explore More</motion.a>
        </div>
      </section>
    </>
  );
}

/* ═══ SUSTAINABILITY — Podcast card + full-width image with parallax ═══ */
function SustainabilitySection() {
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  return (
    <>
      <GradientBridge type="dark-to-light" height="h-10 md:h-16" />
      <section id="sustainability" className="py-10 md:py-16 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <SlideFromLeft delay={0.15}>
            <SectionLabel>Beyond Sustainability</SectionLabel>
            <a href="https://open.spotify.com/episode/04hkEw7ARB870St0k9LdS1" target="_blank" rel="noopener noreferrer" className="group block p-5 rounded-lg border border-[#3a2a1a]/10 hover:border-[#3a2a1a]/25 hover:bg-[#3a2a1a]/5 transition-all">
              <span className="text-[#3a2a1a]/40 text-[9px] tracking-[0.15em] uppercase block mb-2" style={{ ...body, fontWeight: 600 }}>From the Journal</span>
              <h4 className="text-[#3a2a1a] text-[14px] leading-snug group-hover:text-[#8b6f47] transition-colors" style={{ ...heading, fontWeight: 500 }}>View from AFAR: Leo Ghitis on Regenerative Luxury</h4>
              <p className="text-[#4B4A4A]/60 text-[12px] leading-relaxed mt-2" style={body}>How Nayara Resorts is solving tourism's hidden housing crisis — recorded live at ILTM Cannes</p>
              <span className="text-[#3a2a1a]/30 text-[11px] tracking-[0.08em] uppercase mt-3 inline-block group-hover:text-[#8b6f47]/60 transition-colors" style={{ ...body, fontWeight: 500 }}>Listen →</span>
            </a>
          </SlideFromLeft>
        </div>
      </section>
      <section className="relative py-0 px-0 mb-0">
        <div ref={imgRef} className="overflow-hidden">
          <motion.img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/SustainabilityTentedHero_67d62aef.jpg" alt="Sustainability - Light Footprint, Lasting Impact" className="w-full h-auto" style={{ scale: imgScale }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
        <div className="absolute bottom-8 md:bottom-16 left-0 right-0">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex justify-end">
            <motion.a initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} href="/tented-camp/sustainability" className="text-white/70 hover:text-white text-sm tracking-[0.08em] uppercase transition-colors cursor-pointer underline" style={{ ...body, fontWeight: 400 }}>Explore More</motion.a>
          </div>
        </div>
      </section>
    </>
  );
}

/* ═══ WELLNESS — Dark section with blog card + full-screen video ═══ */
function WellnessSection() {
  return (
    <>
      <GradientBridge type="light-to-dark" height="h-10 md:h-16" />
      <div className="py-10 md:py-16 px-0 bg-[#e3dfd2]">
        <div className="px-6 md:px-10 max-w-[1200px] mx-auto">
          <FadeIn>
            <motion.p initial={{ opacity: 0, letterSpacing: "0.05em" }} whileInView={{ opacity: 1, letterSpacing: "0.15em" }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-[#3a2a1a]/40 text-[11px] uppercase mb-3" style={{ ...body, fontWeight: 500 }}>Wellness</motion.p>
          </FadeIn>
          <SlideFromLeft delay={0.15}>
            <a href="https://blog.nayararesorts.com/nature-based-wellness-at-nayara-resorts-how-deserts-rainforests-oceans-and-night-skies-shape-human-health" target="_blank" rel="noopener noreferrer" className="group block p-5 rounded-lg border border-[#3a2a1a]/10 hover:border-[#3a2a1a]/25 hover:bg-[#3a2a1a]/5 transition-all">
              <span className="text-[#3a2a1a]/40 text-[9px] tracking-[0.15em] uppercase block mb-2" style={{ ...body, fontWeight: 600 }}>From the Journal</span>
              <h4 className="text-[#3a2a1a] text-[14px] leading-snug group-hover:text-[#8b6f47] transition-colors" style={{ ...heading, fontWeight: 500 }}>Nature-Based Wellness by Colors: Brown, Black, Green & Blue</h4>
              <span className="text-[#3a2a1a]/30 text-[11px] tracking-[0.08em] uppercase mt-3 inline-block group-hover:text-[#8b6f47]/60 transition-colors" style={{ ...body, fontWeight: 500 }}>Read →</span>
            </a>
          </SlideFromLeft>
        </div>
      </div>
      <section id="wellness" className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-end pb-16 md:pb-24">
        <div className="absolute inset-0 w-full h-full">
          <NativeVideo src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/wellness_video_fixed_ddeced01.mp4" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-10">
          <WordReveal text="Nurtured by Nature" className="text-white text-3xl md:text-4xl lg:text-5xl leading-tight" style={{ ...heading, fontWeight: 400 }} />
          <motion.a initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.8 }} href="/tented-camp/wellness" className="text-white/70 hover:text-white text-sm tracking-[0.08em] uppercase transition-colors cursor-pointer underline mt-6" style={{ ...body, fontWeight: 400 }}>Explore More</motion.a>
        </div>
      </section>
    </>
  );
}

/* ═══ GASTRONOMY — Blog card + full-width image with Ken Burns ═══ */
function GastronomySection() {
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  return (
    <>
      <GradientBridge type="dark-to-light" height="h-10 md:h-16" />
      <section id="gastronomy" className="py-10 md:py-16 px-6 md:px-10" style={{ backgroundColor: '#e3dfd2' }}>
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <SectionLabel>The Table</SectionLabel>
          </FadeIn>
          <SlideFromLeft delay={0.15}>
            <a href="https://blog.nayararesorts.com/nayara-arenals-adventures-in-flavor" target="_blank" rel="noopener noreferrer" className="group block p-5 rounded-lg border border-[#3a2a1a]/10 hover:border-[#3a2a1a]/25 hover:bg-[#3a2a1a]/5 transition-all">
              <span className="text-[#3a2a1a]/40 text-[9px] tracking-[0.15em] uppercase block mb-2" style={{ ...body, fontWeight: 600 }}>From the Journal</span>
              <h4 className="text-[#3a2a1a] text-[14px] leading-snug group-hover:text-[#8b6f47] transition-colors" style={{ ...heading, fontWeight: 500 }}>Rainforest to Table: Arenal Adventures in Flavor</h4>
              <span className="text-[#3a2a1a]/30 text-[11px] tracking-[0.08em] uppercase mt-3 inline-block group-hover:text-[#8b6f47]/60 transition-colors" style={{ ...body, fontWeight: 500 }}>Read →</span>
            </a>
          </SlideFromLeft>
        </div>
      </section>
      <section className="relative py-0 px-0 mb-0">
        <div ref={imgRef} className="overflow-hidden">
          <motion.img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atasteofplace_f64f6f71.jpg" alt="A Taste of Place - The Table" className="w-full h-auto" style={{ scale: imgScale }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
        <div className="absolute bottom-8 md:bottom-16 left-0 right-0 flex flex-col items-center text-center px-6">
          <WordReveal text="A Taste of Place" className="text-white text-2xl md:text-3xl lg:text-4xl leading-tight mb-4" style={{ ...heading, fontWeight: 400 }} />
          <motion.a initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} href="/tented-camp/the-table" className="text-white/70 hover:text-white text-sm tracking-[0.08em] uppercase transition-colors cursor-pointer underline" style={{ ...body, fontWeight: 400 }}>Explore More</motion.a>
        </div>
      </section>
    </>
  );
}

/* ═══ TRIPADVISOR — Quote with staggered reveal ═══ */
function TripAdvisorSection() {
  return (
    <>
      <GradientBridge type="light-to-brown" height="h-10 md:h-16" />
      <section id="tripadvisor" className={`${sectionPadding} bg-[#e3dfd2]`}>
        <div className={`${maxW} text-center`}>
          <ScaleIn>
            <p className="text-[#3a2a1a]/40 text-[11px] tracking-[0.15em] uppercase mb-4" style={{ ...body, fontWeight: 500 }}>Guest Reviews</p>
            <div className="flex items-center justify-center gap-1.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <motion.svg key={i} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }} className="w-5 h-5 text-[#8b6f47]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </motion.svg>
              ))}
            </div>
            <p className="text-[#3a2a1a] text-[28px] md:text-[36px] mb-2" style={heading}>5.0</p>
            <p className="text-[#4B4A4A]/60 text-[13px] tracking-[0.04em] mb-6" style={body}>Based on 1,200+ reviews on TripAdvisor</p>
            <LineWipe className="!bg-[#3a2a1a]/20 max-w-[64px] mx-auto mb-8" />
          </ScaleIn>
          <FadeIn delay={0.4}>
            <blockquote className="max-w-2xl mx-auto">
              <p className="text-[#4B4A4A] text-[15px] md:text-[17px] leading-relaxed italic mb-4" style={body}>"An extraordinary experience. The tents are beyond luxurious, the staff anticipates every need, and waking up to the sounds of the rainforest with Arenal Volcano in view is something you never forget."</p>
              <cite className="text-[#3a2a1a]/50 text-[12px] tracking-[0.08em] not-italic" style={body}>— Andrew wrote a review, Apr 2</cite>
            </blockquote>
          </FadeIn>
          <FadeIn delay={0.5}>
            <a href="https://www.tripadvisor.com/Hotel_Review-g309226-d12099846-Reviews-Nayara_Tented_Camp-La_Fortuna_de_San_Carlos_Arenal_Volcano_National_Park_Province_of_Al.html" target="_blank" rel="noopener noreferrer" className="inline-block mt-8 px-6 py-2.5 rounded-full border border-[#3a2a1a]/20 text-[#3a2a1a]/60 text-[11px] tracking-[0.15em] uppercase hover:bg-[#3a2a1a]/5 transition-colors" style={{ ...body, fontWeight: 500 }}>Read All Reviews</a>
          </FadeIn>
        </div>
      </section>
      <GradientBridge type="brown-to-light" height="h-10 md:h-16" />
    </>
  );
}

/* ═══ GETTING HERE ═══ */
function GettingHereSection() {
  const routes = [
    { icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>), title: "International Flights", description: "Fly into San José (SJO) or Liberia (LIR) international airports. Both receive direct flights from major US and European cities." },
    { icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>), title: "Domestic Flight", description: "Take a short domestic flight from SJO to La Fortuna/Arenal (~30 minutes). The hotel can arrange transfers from the local airstrip." },
    { icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H21M3.375 14.25h17.25M21 12.75V6.375A1.125 1.125 0 0019.875 5.25H4.125A1.125 1.125 0 003 6.375v6.375" /></svg>), title: "Private Transfer", description: "Arrange a private transfer from San José (~3 hours) or Liberia (~2.5 hours). Scenic drive through the Central Valley with volcano views." },
    { icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" /></svg>), title: "Self-Drive", description: "Rent a car at either airport and drive to Arenal. Well-paved roads with clear signage. The journey from SJO takes approximately 3 hours." },
  ];
  return (
    <section id="getting-here" className={sectionPadding}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Getting Here</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-3" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>Your Journey to Arenal</h2>
          <p className="text-[#4B4A4A]/60 text-[14px] leading-relaxed mb-10 md:mb-14 max-w-xl" style={body}>Nayara Tented Camp is located in the Arenal Volcano region of Costa Rica, one of the most accessible luxury destinations in Central America.</p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {routes.map((route, i) => (
            <SlideFromLeft key={i} delay={i * 0.12}>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-[#3a2a1a]/5 flex items-center justify-center text-[#3a2a1a]/50">{route.icon}</div>
                <div>
                  <h3 className="text-[#3a2a1a] text-[16px] mb-2" style={{ ...heading, fontWeight: 500 }}>{route.title}</h3>
                  <p className="text-[#4B4A4A]/70 text-[13px] leading-relaxed" style={body}>{route.description}</p>
                </div>
              </div>
            </SlideFromLeft>
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

/* ═══ GALLERY — Staggered grid reveal + hover zoom ═══ */
/* ═══ NAYARA RESORTS CLOSER — Full-width video + hotel gallery links ═══ */
function NayaraResortsCloser() {
  const resortLinks = [
    { name: "Alto Atacama", route: "/alto-atacama#gallery" },
    { name: "Tented Camp", route: "/tented-camp#gallery" },
    { name: "Springs", route: "/springs#gallery" },
    { name: "Gardens", route: "/gardens#gallery" },
    { name: "Hangaroa", route: "/hangaroa#gallery" },
    { name: "Bocas del Toro", route: "/bocas-del-toro#gallery" },
  ];
  return (
    <section className="relative w-full overflow-hidden">
      {/* Full-width video */}
      <div className="relative w-full" style={{ height: "60vh", minHeight: 360 }}>
        <video
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/homepage-hero-new-resorts_d66da8e1.mp4"
          className="w-full h-full object-cover"
          autoPlay muted loop playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" />
        <div className="absolute bottom-0 left-0 right-0 z-10 px-6 md:px-10 pb-10 md:pb-14">
          <FadeIn>
            <h2 className="text-white/90 mb-6" style={{ ...heading, fontSize: "clamp(20px, 2.5vw, 28px)", lineHeight: 1.2 }}>
              Explore Our Galleries
            </h2>
          </FadeIn>
          <div className="flex flex-wrap gap-3 md:gap-4">
            {resortLinks.map((r, i) => (
              <motion.a
                key={r.name}
                href={r.route}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="px-5 py-2.5 border border-white/30 text-white/80 text-xs tracking-[0.12em] uppercase hover:bg-white/10 hover:border-white/60 transition-all duration-300 rounded-sm"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                {r.name}
              </motion.a>
            ))}
            <motion.a
              href="/nayara-by-night"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 + resortLinks.length * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="px-5 py-2.5 border border-[#c9b99a]/50 text-[#c9b99a] text-xs tracking-[0.12em] uppercase hover:bg-[#c9b99a]/10 hover:border-[#c9b99a] transition-all duration-300 rounded-sm"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Nayara by Night
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const images = [
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tc-gallery-video-new_afba07b0.mp4", alt: "Tented Camp bird watching", type: "video" as const },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/(Rooms)NayaraTent3copy_54044994.webp", alt: "Tented villa pool with volcano view" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/HenrysBar_69b1e477.webp", alt: "Henry's Bar at Nayara Springs" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/12.Residence_17d767d7.webp", alt: "Residence exterior" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/gallery-residence-video-v2_f52c15fa.mov", alt: "Residence experience", type: "video" as const },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/(Rooms)Residence3_48e06b8c.webp", alt: "Residence detail" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/4O1A1569-Spa-NayaraTentedCampwithLivLawbyBriceFerreStudio-VancouverPortraitAdventureandAthletePhotographer_0e850f3a.webp", alt: "Spa treatment" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/19B9D444-0A7C-4C29-93A3-A8C0DFDFBD31_aa5cae9d.JPEG", alt: "Volcano view with tents" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/38.jTentDetailpg_b2b74566.webp", alt: "Tent interior detail" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Grand(1)_0127cf09.webp", alt: "Grand tent with pool" },
    { src: CDN.s1, alt: "Tented camp aerial view" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/NewAreaBriceFerre(2)_cf5128c9.webp", alt: "Wellness area with volcano" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/gallery-final-video_b16f0735.mov", alt: "Tented Camp gallery", type: "video" as const },
  ];
  return (
    <section id="gallery" className="py-10 md:py-16 px-0">
      <div className="px-6 md:px-10 max-w-[1200px] mx-auto">
        <FadeIn>
          <SectionLabel>Gallery</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-10 md:mb-14" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>Canvas & Canopy</h2>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 auto-rows-auto">
          {images.map((img, i) => (
            <ScaleIn key={i} delay={i * 0.06} className={i === 1 ? "col-span-2 md:col-span-2 row-span-2" : ""}>
              <div className="overflow-hidden rounded-lg group h-full">
                {(img as any).type === "video" ? (
                  <video src={img.src} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ aspectRatio: i === 1 ? undefined : "1/1" }} autoPlay muted loop playsInline />
                ) : (
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ aspectRatio: i === 1 ? undefined : "1/1" }} loading="lazy" />
                )}
              </div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
}
