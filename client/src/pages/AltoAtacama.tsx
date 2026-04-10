/**
 * NAYARA ALTO ATACAMA - Property Home Page
 * Clean overview with teaser sections linking to dedicated sub-pages
 * Visual Identity: "Mars" palette - Cinematic motion - Video-first
 */
import { motion } from "framer-motion";
import NativeVideo from "@/components/NativeVideo";
import { useIsMobile } from "@/hooks/useMobile";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import { properties, type Property } from "@/data/properties";
import { AwardBadgeStrip } from "@/components/AwardBadges";
import {
  AnimateOnScroll,
  TextReveal,
  MultiLineReveal,
  MediaReveal,
  Parallax,
  GradientTransition,
  TintedSection,
  fadeUp,
  DURATION,
  EASE_CINEMATIC,
} from "@/components/motion";

const atacama = properties.find((p: Property) => p.id === "alto-atacama")!;

/* ═══════════════════════════════════════════════════════════════
   PALETTE - "Mars"
   ═══════════════════════════════════════════════════════════════ */
const PALETTE = {
  primary: "#8B5A3C",
  secondary: "#9A7E5A",
  accent: "#8A8B72",
  gradientStart: "#F5F1EB",
  gradientEnd: "#F2ECE4",
  text: "#2C2418",
  textSecondary: "#7A6F63",
  textTertiary: "#B0A89E",
  divider: "#E2DDD5",
};

/* ═══════════════════════════════════════════════════════════════
   CDN ASSETS
   ═══════════════════════════════════════════════════════════════ */
const CDN = {
  heroDesktop: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-hero-desktop-hq_732fe8b3.mp4",
  heroMobile: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-hero-vertical-hq_d81c629e.mp4",
  s1: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Untitleddesign-17_d0de17d2.JPG",
  s2: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/11_576297a8.jpg",
  s3: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/trim_cb137ccb.mp4",
  s4: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/4O1A1949-NayaraAltoAtacama-RainbowValley-byBriceFerreStudio(1)_a94c41d0.jpeg",
  desertWalk: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/cfnetwork_b9ae0ca4.mp4",
  desertExploration: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Video_Nayara_Atacama00003_aeb971e9.MP4",
  stargazing: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Video_Nayara_Atacama00007_8576aa55.MP4",
  flamingos: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/flamingos_1001c3d8.mp4",
};

const sectionPadding = "py-20 md:py-32 px-6 md:px-10";
const maxW = "max-w-[1200px] mx-auto";

function SectionLabel({ children, color }: { children: React.ReactNode; color?: string }) {
  return (
    <p
      className="text-[11px] tracking-[0.2em] uppercase mb-4"
      style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: color || PALETTE.primary }}
    >
      {children}
    </p>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE — Clean overview with teaser sections
   ═══════════════════════════════════════════════════════════════ */
export default function AltoAtacama() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.gradientStart }}>
      <BrandNavigation pageType="property" />
      <HeroSection />
      <StorySection />
      <GradientTransition from={PALETTE.gradientStart} to={PALETTE.gradientEnd} height="160px" />
      <RoomsTeaser />
      <ExperiencesTeaser />
      <WellnessTeaser />
      <GastronomyTeaser />
      <SustainabilityTeaser />
      <GradientTransition from={PALETTE.gradientEnd} to={PALETTE.gradientStart} height="120px" />
      <GallerySection />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO - Full-screen video, cinematic text reveal
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const isMobile = useIsMobile();
  const heroVideo = isMobile ? CDN.heroMobile : CDN.heroDesktop;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <NativeVideo src={heroVideo} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-12 md:pb-20 px-6 md:px-10">
        <MultiLineReveal
          lines={["Atacama Desert Oasis", "Under the Stars"]}
          lineClassName="text-white text-3xl md:text-5xl lg:text-6xl leading-[1] tracking-wide text-center"
          as="h1"
          delay={0.4}
          staggerDelay={0.15}
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.slow, delay: 0.3, ease: EASE_CINEMATIC }}
          className="text-white/50 text-[11px] md:text-[13px] mt-6 tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
        >
          All Ages
        </motion.p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   STORY - Property intro with landscape image
   ═══════════════════════════════════════════════════════════════ */
function StorySection() {
  return (
    <section className={sectionPadding}>
      <div className={maxW}>
        <div className="max-w-3xl mb-12 md:mb-16">
          <AnimateOnScroll variants={fadeUp}>
            <SectionLabel>The Property</SectionLabel>
          </AnimateOnScroll>
          <TextReveal as="h2" className="mb-8" delay={0.1}>
            <span
              className="text-2xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-wide"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
            >
              Mars on Earth
            </span>
          </TextReveal>
          <AnimateOnScroll variants={fadeUp} delay={0.3}>
            <p className="text-[15px] leading-[1.8] mb-5" style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}>
              {atacama.heroSubtitle}
            </p>
            <p className="text-[15px] leading-[1.8]" style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}>
              Nayara Alto Atacama is an otherworldly sanctuary in the world's driest desert, where the landscape resembles Mars itself. Surrounded by multicolored mountains, salt flats, and endless horizons, this luxury oasis offers stargazing experiences, desert adventures, and world-class wellness in one of Earth's most remote and magical locations.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll variants={fadeUp} delay={0.5}>
            <AwardBadgeStrip property="alto-atacama" />
          </AnimateOnScroll>
        </div>

        {/* Landscape image — desktop only */}
        <div className="hidden md:block">
          <MediaReveal delay={0.1}>
            <div className="overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <img src={CDN.s2} alt="Nayara Alto Atacama resort exterior with desert mountains" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </MediaReveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ROOMS TEASER — Video left, text right, landscape below
   Links to /alto-atacama/rooms
   ═══════════════════════════════════════════════════════════════ */
function RoomsTeaser() {
  return (
    <TintedSection backgroundColor={PALETTE.gradientEnd} className={sectionPadding}>
      <div className={maxW}>
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start mb-16">
          {/* Video left - vertical */}
          <div className="md:flex-1 order-2 md:order-1">
            <MediaReveal delay={0.1}>
              <div className="overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <NativeVideo src={CDN.s3} className="w-full h-full object-cover" />
              </div>
            </MediaReveal>
          </div>
          {/* Text right */}
          <div className="md:flex-1 order-1 md:order-2">
            <AnimateOnScroll variants={fadeUp}>
              <SectionLabel>Accommodations</SectionLabel>
            </AnimateOnScroll>
            <TextReveal as="h2" className="mb-8" delay={0.1}>
              <span
                className="text-2xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-wide"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
              >
                Desert Suites
              </span>
            </TextReveal>
            <AnimateOnScroll variants={fadeUp} delay={0.3}>
              <p className="text-[15px] leading-[1.8] mb-8" style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}>
                Each suite is a private sanctuary with panoramic desert views, heated infinity pools, and direct access to the Atacama landscape. Designed for ultimate comfort and contemplation.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll variants={fadeUp} delay={0.4}>
              <a
                href="/alto-atacama/rooms"
                className="inline-block text-[11px] tracking-[0.15em] uppercase transition-colors hover:opacity-70"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.primary }}
              >
                Explore Rooms →
              </a>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Landscape image below — hidden on mobile */}
        <div className="hidden md:block">
          <MediaReveal delay={0.1}>
            <div className="overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <img src={CDN.s4} alt="Hiker in Rainbow Valley with multicolored mountains" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </MediaReveal>
        </div>
      </div>
    </TintedSection>
  );
}

/* ═══════════════════════════════════════════════════════════════
   EXPERIENCES TEASER — Full-screen video with Explore More CTA
   Links to /alto-atacama/experiences
   ═══════════════════════════════════════════════════════════════ */
function ExperiencesTeaser() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-end pb-16 md:pb-24">
      <div className="absolute inset-0 w-full h-full">
        <NativeVideo src={CDN.desertExploration} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60" />
      </div>
      <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-10">
        <AnimateOnScroll variants={fadeUp}>
          <SectionLabel color="rgba(255,255,255,0.5)">Experiences</SectionLabel>
        </AnimateOnScroll>
        <TextReveal as="h2" className="text-white text-3xl md:text-4xl lg:text-5xl leading-tight" delay={0.3}>
          Desert Explorations
        </TextReveal>
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: DURATION.normal, delay: 0.4 }}
          href="/alto-atacama/experiences"
          className="text-white/60 hover:text-white text-sm tracking-[0.08em] uppercase transition-colors cursor-pointer mt-6"
          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
        >
          Explore More
        </motion.a>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   WELLNESS TEASER — Full-screen video with Explore More CTA
   Links to /alto-atacama/wellness
   ═══════════════════════════════════════════════════════════════ */
function WellnessTeaser() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-end pb-16 md:pb-24">
      <div className="absolute inset-0 w-full h-full">
        <NativeVideo src={CDN.desertWalk} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60" />
      </div>
      <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-10">
        <AnimateOnScroll variants={fadeUp}>
          <SectionLabel color="rgba(255,255,255,0.5)">Wellness</SectionLabel>
        </AnimateOnScroll>
        <TextReveal as="h2" className="text-white text-3xl md:text-4xl lg:text-5xl leading-tight" delay={0.3}>
          {atacama.theme.spaHeadline.replace("\n", " ")}
        </TextReveal>
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: DURATION.normal, delay: 0.4 }}
          href="/alto-atacama/wellness"
          className="text-white/60 hover:text-white text-sm tracking-[0.08em] uppercase transition-colors cursor-pointer mt-6"
          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
        >
          Explore More
        </motion.a>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   GASTRONOMY TEASER — Full-screen video with Explore More CTA
   Links to /alto-atacama/gastronomy
   ═══════════════════════════════════════════════════════════════ */
function GastronomyTeaser() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-end pb-16 md:pb-24">
      <div className="absolute inset-0 w-full h-full">
        <NativeVideo src={CDN.flamingos} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60" />
      </div>
      <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-10">
        <AnimateOnScroll variants={fadeUp}>
          <SectionLabel color="rgba(255,255,255,0.5)">The Table</SectionLabel>
        </AnimateOnScroll>
        <TextReveal as="h2" className="text-white text-3xl md:text-4xl lg:text-5xl leading-tight" delay={0.3}>
          Desert Dining
        </TextReveal>
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: DURATION.normal, delay: 0.4 }}
          href="/alto-atacama/gastronomy"
          className="text-white/60 hover:text-white text-sm tracking-[0.08em] uppercase transition-colors cursor-pointer mt-6"
          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
        >
          Explore More
        </motion.a>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SUSTAINABILITY TEASER — Video with tinted overlay + Explore More CTA
   Links to /alto-atacama/sustainability
   ═══════════════════════════════════════════════════════════════ */
function SustainabilityTeaser() {
  return (
    <TintedSection backgroundColor={PALETTE.gradientEnd}>
      <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-end pb-16 md:pb-24">
        <div className="absolute inset-0 w-full h-full">
          <NativeVideo src={CDN.stargazing} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(139, 90, 60, 0.6)" }} />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-10">
          <AnimateOnScroll variants={fadeUp}>
            <SectionLabel color="rgba(255,255,255,0.5)">Sustainability</SectionLabel>
          </AnimateOnScroll>
          <TextReveal as="h2" className="text-white text-3xl md:text-4xl lg:text-5xl leading-tight" delay={0.3}>
            Protecting the Desert
          </TextReveal>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: DURATION.normal, delay: 0.4 }}
            href="/alto-atacama/sustainability"
            className="text-white/60 hover:text-white text-sm tracking-[0.08em] uppercase transition-colors cursor-pointer mt-6"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            Explore More
          </motion.a>
        </div>
      </section>
    </TintedSection>
  );
}

/* ═══════════════════════════════════════════════════════════════
   GALLERY - Mixed media grid
   ═══════════════════════════════════════════════════════════════ */
function GallerySection() {
  const media = [
    { src: CDN.desertWalk, alt: "Desert walk", isVideo: true },
    { src: CDN.s1, alt: "Desert landscape", isVideo: false },
    { src: CDN.desertExploration, alt: "Atacama desert exploration", isVideo: true },
    { src: CDN.s2, alt: "Resort exterior", isVideo: false },
    { src: CDN.stargazing, alt: "Atacama stargazing", isVideo: true },
    { src: CDN.flamingos, alt: "Flamingos at Atacama lagoon", isVideo: true },
  ];

  return (
    <section id="gallery" className={sectionPadding} style={{ backgroundColor: PALETTE.gradientStart }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <SectionLabel>Gallery</SectionLabel>
        </AnimateOnScroll>
        <TextReveal as="h2" className="mb-12 md:mb-16" delay={0.1}>
          <span
            className="text-2xl md:text-4xl lg:text-5xl tracking-wide"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
          >
            Mars on Earth
          </span>
        </TextReveal>

        <div className="hidden md:grid grid-cols-2 gap-4 md:gap-6">
          {media.map((item, i) => (
            <MediaReveal key={i} delay={i * 0.1}>
              <div className="overflow-hidden" style={{ aspectRatio: i === 0 ? "16/10" : "16/9" }}>
                {item.isVideo ? (
                  <NativeVideo src={item.src} className="w-full h-full object-cover" />
                ) : (
                  <img src={item.src} alt={item.alt} className="w-full h-full object-cover" loading="lazy" />
                )}
              </div>
            </MediaReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
