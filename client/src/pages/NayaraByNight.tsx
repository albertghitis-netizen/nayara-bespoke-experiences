/*
 * NAYARA BY NIGHT — Standalone Night Sky Experience Page
 * Structure: Hero Video → Story (text left + vertical image right + horizontal below) → Gallery → Footer
 * Dark theme throughout
 */
import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import NativeVideo from "@/components/NativeVideo";
import { useIsMobile } from "@/hooks/useMobile";
import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";

/* ─── CDN Assets ─────────────────────────────────────────────── */
const CDN = {
  /* Hero */
  heroDesktop: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-hero-desktop_d539e6a6.mp4",
  /* Story images */
  s1: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-cactus-milkyway_a7dc0b5c.webp",
  s2: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-rano-kau-milkyway_dd16a9d7.webp",
  /* Gallery — Atacama */
  observatoryMilkyway: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-atacama-dusk-resort_b5829c95.webp",
  atacamaDusk: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-atacama-dusk_9201508f.webp",
  rockArchMilkyway: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-rock-arch-milkyway_729bcc81.webp",
  cactusMilkyway: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-cactus-milkyway_a7dc0b5c.webp",
  craterMilkyway: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-crater-milkyway_00741a91.webp",
  /* Gallery — Rapa Nui */
  moaiMilkyway: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-moai-milkyway_0588cd10.webp",
  moaiGoldenSunset: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-moai-golden-sunset_f7d26dab.webp",
  moaiSunriseGolden: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-moai-sunrise-golden_c8aad9dd.webp",
  moaiSunsetSilhouette: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-moai-sunset-silhouette_692f6a23.webp",
  ranoKauMilkyway: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-rano-kau-milkyway_dd16a9d7.webp",
  /* Gallery — Bocas del Toro */
  bioluminescence: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-bioluminescence_489a9637.webp",
  /* Gallery — Videos */
  videoShort: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-video-short_174183ae.mp4",
  videoLong: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-video-long_44b41d4c.mp4",
};

/* ─── Typography ─────────────────────────────────────────────── */
const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;
const sectionPadding = "py-16 md:py-24 px-6 md:px-10";
const maxW = "max-w-[1200px] mx-auto";

/* ─── Shared Animation Components ────────────────────────────── */
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
  return <p className="text-white/30 text-[11px] tracking-[0.15em] uppercase mb-3" style={{ ...body, fontWeight: 500 }}>{children}</p>;
}

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function NayaraByNight() {
  return (
    <div className="min-h-screen bg-[#0a0a12]">
      <BrandNavigation pageType="brand" />
      <HeroSection />
      <StorySection />
      <GallerySection />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   1. HERO — Full-screen video with "Nayara by Night" H1
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <NativeVideo src={CDN.heroDesktop} className="w-full h-full object-cover" />
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
          Nayara by Night
        </motion.h1>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   2. STORY — Text left + vertical image right, horizontal below
   Exact duplicate of Tented Camp story layout, dark theme
   ═══════════════════════════════════════════════════════════════ */
function StorySection() {
  return (
    <section id="story" className={sectionPadding}>
      <div className={maxW}>
        {/* Story text left + s1 vertical right */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start mb-16">
          <FadeIn className="md:flex-1">
            <SectionLabel>The Experience</SectionLabel>
            <h2 className="text-white/90 mb-6" style={{ ...heading, fontSize: "clamp(20px, 2.8vw, 32px)", lineHeight: 1.15 }}>
              Where Darkness Reveals<br />the Universe
            </h2>
            <p className="text-white/50 text-[15px] leading-relaxed" style={body}>
              From the clearest night skies on Earth in the Atacama Desert to the ancient Moai standing sentinel beneath the Milky Way on Rapa Nui, and the ethereal glow of bioluminescent plankton in the Caribbean waters of Bocas del Toro — Nayara's properties offer some of the most extraordinary nocturnal experiences on the planet.
            </p>
            <p className="text-white/50 text-[15px] leading-relaxed mt-6" style={body}>
              These are not staged moments. They are the natural gifts of the remote, pristine landscapes where Nayara has chosen to build — places where light pollution is a foreign concept and the cosmos reveals itself in full splendor.
            </p>
          </FadeIn>
          <FadeIn delay={0.2} className="md:flex-1">
            <img src={CDN.s1} alt="Desert cactus silhouetted against the Milky Way" className="w-full object-cover rounded-lg" style={{ aspectRatio: "3/4" }} loading="lazy" />
          </FadeIn>
        </div>

        {/* s2 landscape below — symmetrical spacing */}
        <FadeIn delay={0.3}>
          <img src={CDN.s2} alt="Rano Kau crater beneath the Milky Way" className="w-full object-cover rounded-lg" loading="lazy" style={{ aspectRatio: "16/9" }} />
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   3. GALLERY — All night sky assets in masonry grid
   Same grid pattern as Tented Camp gallery, dark theme
   ═══════════════════════════════════════════════════════════════ */
function GallerySection() {
  const images: Array<{ src: string; alt: string; type?: "video" }> = [
    { src: CDN.moaiMilkyway, alt: "Moai statues under the Milky Way" },
    { src: CDN.moaiGoldenSunset, alt: "Moai at golden sunset" },
    { src: CDN.rockArchMilkyway, alt: "Rock arch under the Milky Way" },
    { src: CDN.observatoryMilkyway, alt: "Alto Atacama resort at dusk" },
    { src: CDN.craterMilkyway, alt: "Volcanic crater under the Milky Way" },
    { src: CDN.atacamaDusk, alt: "Atacama desert at twilight" },
    { src: CDN.bioluminescence, alt: "Bioluminescence in Bocas del Toro" },
    { src: CDN.moaiSunsetSilhouette, alt: "Moai silhouettes at dusk" },
    { src: CDN.moaiSunriseGolden, alt: "Moai in golden sunrise light" },
    { src: CDN.ranoKauMilkyway, alt: "Rano Kau crater with Milky Way" },
    { src: CDN.videoShort, alt: "Night sky timelapse", type: "video" },
    { src: CDN.videoLong, alt: "Stargazing experience", type: "video" },
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 px-0">
      <div className="px-6 md:px-10 max-w-[1200px] mx-auto">
        <FadeIn>
          <SectionLabel>Gallery</SectionLabel>
          <h2 className="text-white/80 mb-10 md:mb-14" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>Under the Stars</h2>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {images.map((img, i) => (
            <FadeIn key={i} delay={i * 0.08} className={i === 1 ? "col-span-2 md:col-span-2 row-span-2" : ""}>
              {img.type === "video" ? (
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
