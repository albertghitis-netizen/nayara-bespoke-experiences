/*
 * NAYARA SPRINGS — Arenal, Costa Rica
 * Template: Tented Camp pattern with bold animations
 * WordPress equiv: AOS plugin + CSS @keyframes + background-attachment:fixed
 */
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import NativeVideo from "@/components/NativeVideo";
import { useIsMobile } from "@/hooks/useMobile";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import { AwardBadgeStrip } from "@/components/AwardBadges";
import ThreeResortsGraphic from "@/components/ThreeResortsGraphic";

const CDN = {
  heroDesktop: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-hero-horizontal-hq_c0efb638.mp4",
  s1: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/6_0a37cc95.jpg",
  s2: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/123_739860cc.jpg",
  s3: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-s3-robe-canopy_c9c365ff.jpg",
  s4: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/61_0020df3e.jpg",
};

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;
const sectionPadding = "py-10 md:py-16 px-6 md:px-10";
const maxW = "max-w-[1200px] mx-auto";

/* ═══ ANIMATION PRIMITIVES ═══ */

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

function ScaleIn({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, scale: 0.92 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function Springs() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e3dfd2' }}>
      <BrandNavigation pageType="property" centerLinkHome />
      <HeroSection />
      <StorySection />
      <PrivateVillasSection />
      <Footer />
    </div>
  );
}

/* ═══ HERO — Parallax video + word-by-word H1 ═══ */
function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.8]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: videoY }}>
        <NativeVideo src={CDN.heroDesktop} className="w-full h-[130%] object-cover" />
      </motion.div>
      <motion.div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" style={{ opacity: overlayOpacity }} />
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6 md:px-10">
        <WordReveal
          text="Private Hot Spring Villas in Costa Rica"
          className="text-white text-2xl md:text-4xl lg:text-5xl leading-[0.95] tracking-wide text-center"
          style={heading}
        />
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} className="text-white/60 text-[11px] md:text-[13px] mt-4 tracking-[0.25em] uppercase" style={body}>
          Adults Only
        </motion.p>
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
              <AwardBadgeStrip property="springs" />
            </div>
            <ThreeResortsGraphic />
          </SlideFromLeft>
          <SlideFromRight delay={0.2} className="md:flex-1">
            <div ref={imgRef} className="overflow-hidden rounded-lg">
              <motion.img src={CDN.s1} alt="Nayara Springs hot spring immersion" className="w-full object-cover" style={{ aspectRatio: "3/4", y: imgY }} loading="lazy" />
            </div>
          </SlideFromRight>
        </div>
        <KenBurnsImage src={CDN.s2} alt="Couple at Nayara Springs" aspect="16/9" />
        <LineWipe className="mt-12" />
      </div>
    </section>
  );
}

/* ═══ PRIVATE VILLAS — Single room type, no slider ═══ */
function PrivateVillasSection() {
  return (
    <section id="rooms" className={sectionPadding} style={{ background: 'linear-gradient(180deg, #e3dfd2 0%, #f0ece3 15%, #f5f2eb 50%, #f0ece3 85%, #e3dfd2 100%)' }}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Private Villas</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-8 md:mb-12" style={{ ...heading, fontSize: "clamp(22px, 3vw, 36px)", lineHeight: 1.15 }}>
            Springs Villa
          </h2>
        </FadeIn>
        <ScaleIn>
          <div className="overflow-hidden rounded-lg">
            <img
              src={CDN.s3}
              alt="Springs Villa with private hot spring pool"
              className="w-full object-cover"
              style={{ aspectRatio: "16/9" }}
              loading="lazy"
            />
          </div>
        </ScaleIn>
        <FadeIn delay={0.3}>
          <p className="text-[#4B4A4A]/70 text-[15px] leading-relaxed mt-8 max-w-2xl" style={body}>
            Each Springs Villa features a private natural hot spring pool fed by volcanic mineral water. Designed for ultimate privacy and relaxation, these intimate sanctuaries offer an unparalleled experience of thermal wellness surrounded by rainforest canopy.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
