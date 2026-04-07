/*
 * NAYARA BY NIGHT — Immersive Night Sky Experience Page
 * Dark theme showcasing stargazing, Milky Way, bioluminescence across Nayara properties
 * Design: Deep indigo/black backgrounds, gold accents, editorial luxury feel
 * Typography: Playfair Display (display) + DM Sans (body)
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
  heroVideo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-video-night_1e758214.mp4",
  /* Milky Way — Atacama */
  observatoryMilkyway: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-milkyway-observatory_6bb81ddf.webp",
  resortMilkyway: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-milkyway-resort_4384de97.webp",
  telescopeMilkyway: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-milkyway-telescope_557a3b51.webp",
  cactusMilkyway: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-cactus-milkyway_a771ad55.webp",
  rockArchMilkyway: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-rock-arch-milkyway_8f1a851c.webp",
  atacamaDusk: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-atacama-dusk_aab6df4f.webp",
  atacamaDuskResort: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-atacama-dusk-resort_2ae41cf3.webp",
  /* Milky Way — Rapa Nui */
  moaiMilkyway: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-moai-milkyway_db3d9dce.webp",
  craterMilkyway: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-crater-milkyway_8f84a7cc.webp",
  ranoKauMilkyway: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-rano-kau-milkyway_1173e6dc.webp",
  moaiSunsetSilhouette: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-moai-sunset-silhouette_5c4be1b1.webp",
  moaiSunriseGolden: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-moai-sunrise-golden_b11cb2e5.webp",
  moaiGoldenSunset: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-moai-golden-sunset_48c427f0.webp",
  /* Bioluminescence — Bocas del Toro */
  bioluminescence: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-bioluminescence_8f91ac90.webp",
  bioluminescenceVideo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-video-bioluminescence_8ee484bd.mp4",
};

/* ─── Typography ─────────────────────────────────────────────── */
const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

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

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`text-[11px] tracking-[0.2em] uppercase mb-3 ${light ? "text-[#c4a87c]/60" : "text-white/30"}`}
      style={{ ...body, fontWeight: 500 }}
    >
      {children}
    </p>
  );
}

/* ═══════════════════════════════════════════════════════════════
   GALLERY DATA
   ═══════════════════════════════════════════════════════════════ */
interface GalleryItem {
  src: string;
  alt: string;
  type: "image" | "video";
  location: string;
  span?: "wide" | "tall" | "normal";
}

const galleryItems: GalleryItem[] = [
  { src: CDN.observatoryMilkyway, alt: "Alto Atacama observatory beneath the full arc of the Milky Way", type: "image", location: "Alto Atacama", span: "wide" },
  { src: CDN.moaiMilkyway, alt: "Moai statues silhouetted against the Milky Way with green airglow", type: "image", location: "Rapa Nui", span: "tall" },
  { src: CDN.cactusMilkyway, alt: "Desert cacti reaching toward the Milky Way in the Atacama", type: "image", location: "Alto Atacama", span: "normal" },
  { src: CDN.craterMilkyway, alt: "Rano Kau volcanic crater beneath the Milky Way and red nebula", type: "image", location: "Rapa Nui", span: "wide" },
  { src: CDN.bioluminescenceVideo, alt: "Bioluminescent plankton glowing in the Caribbean waters", type: "video", location: "Bocas del Toro", span: "normal" },
  { src: CDN.rockArchMilkyway, alt: "Stargazer framed by a natural rock arch under the Milky Way", type: "image", location: "Alto Atacama", span: "tall" },
  { src: CDN.resortMilkyway, alt: "Alto Atacama resort pools reflecting the Milky Way above", type: "image", location: "Alto Atacama", span: "normal" },
  { src: CDN.ranoKauMilkyway, alt: "Rano Kau crater lake with Milky Way stretching overhead", type: "image", location: "Rapa Nui", span: "normal" },
  { src: CDN.atacamaDuskResort, alt: "Alto Atacama resort glowing warmly at purple dusk", type: "image", location: "Alto Atacama", span: "wide" },
  { src: CDN.moaiSunsetSilhouette, alt: "Moai statues in dramatic silhouette at dusk", type: "image", location: "Rapa Nui", span: "normal" },
  { src: CDN.telescopeMilkyway, alt: "Telescope pointed at the Milky Way from the Atacama observatory", type: "image", location: "Alto Atacama", span: "normal" },
  { src: CDN.moaiSunriseGolden, alt: "Moai statues bathed in golden sunrise light", type: "image", location: "Rapa Nui", span: "normal" },
  { src: CDN.atacamaDusk, alt: "Atacama desert landscape at twilight", type: "image", location: "Alto Atacama", span: "normal" },
  { src: CDN.moaiGoldenSunset, alt: "Moai at golden hour with warm light", type: "image", location: "Rapa Nui", span: "normal" },
];

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function NayaraByNight() {
  return (
    <div className="min-h-screen bg-[#0a0a12]">
      <BrandNavigation pageType="content" centerLinkHome />
      <HeroSection />
      <IntroSection />
      <AtacamaSection />
      <RapaNuiSection />
      <BioluminescenceSection />
      <GallerySection />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   1. HERO — Full-screen video with "Nayara by Night" title
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <NativeVideo src={CDN.heroVideo} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-[#0a0a12]" />
      </div>

      {/* Content — anchored to bottom */}
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-12 md:pb-20 px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="text-[#c4a87c]/50 text-[10px] md:text-[11px] tracking-[0.4em] uppercase mb-4"
          style={{ ...body, fontWeight: 500 }}
        >
          An Experience Pillar
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-3xl md:text-5xl lg:text-6xl leading-[0.95] tracking-wide text-center"
          style={{ ...heading }}
        >
          Nayara by Night
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/50 text-sm md:text-base mt-4 max-w-md text-center"
          style={{ ...body }}
        >
          Where darkness reveals the universe
        </motion.p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   2. INTRO — Editorial text about the night experience
   ═══════════════════════════════════════════════════════════════ */
function IntroSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10">
      <div className="max-w-[800px] mx-auto text-center">
        <FadeIn>
          <SectionLabel light>The Night Awaits</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            className="text-white/90 text-2xl md:text-3xl lg:text-4xl leading-[1.2] mb-8"
            style={{ ...heading }}
          >
            When the sun sets across Nayara's destinations, a different world awakens
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p
            className="text-white/40 text-sm md:text-base leading-[1.8] mb-6"
            style={{ ...body }}
          >
            From the clearest night skies on Earth in the Atacama Desert to the ancient Moai standing sentinel beneath the Milky Way on Rapa Nui, and the ethereal glow of bioluminescent plankton in the Caribbean waters of Bocas del Toro — Nayara's properties offer some of the most extraordinary nocturnal experiences on the planet.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p
            className="text-white/40 text-sm md:text-base leading-[1.8]"
            style={{ ...body }}
          >
            These are not staged moments. They are the natural gifts of the remote, pristine landscapes where Nayara has chosen to build — places where light pollution is a foreign concept and the cosmos reveals itself in full splendor.
          </p>
        </FadeIn>
        {/* Decorative divider */}
        <FadeIn delay={0.4}>
          <div className="mt-12 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-[#c4a87c]/20" />
            <svg className="w-4 h-4 text-[#c4a87c]/30" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <div className="h-px w-12 bg-[#c4a87c]/20" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   3. ATACAMA — Stargazing section
   ═══════════════════════════════════════════════════════════════ */
function AtacamaSection() {
  return (
    <section className="pb-16 md:pb-24">
      {/* Full-width observatory image */}
      <FadeIn>
        <div className="relative w-full aspect-[21/9] overflow-hidden">
          <img
            src={CDN.observatoryMilkyway}
            alt="Alto Atacama observatory beneath the full arc of the Milky Way"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12] via-transparent to-transparent" />
        </div>
      </FadeIn>

      <div className="max-w-[1000px] mx-auto px-6 md:px-10 mt-12 md:mt-16">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <FadeIn>
            <SectionLabel light>Alto Atacama, Chile</SectionLabel>
            <h2
              className="text-white/90 text-2xl md:text-3xl leading-[1.2] mb-4"
              style={{ ...heading }}
            >
              The Clearest Skies on Earth
            </h2>
            <p
              className="text-white/40 text-sm leading-[1.8]"
              style={{ ...body }}
            >
              At 2,400 meters above sea level in the world's driest desert, Nayara Alto Atacama sits beneath skies so clear that major international observatories have chosen this same region. Our private observatory, equipped with research-grade telescopes, offers guided sessions where guests can observe nebulae, star clusters, and the Milky Way's galactic core with extraordinary clarity.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="space-y-4">
              <div className="p-5 border border-white/[0.06] bg-white/[0.02]">
                <p className="text-[#c4a87c]/70 text-[10px] tracking-[0.2em] uppercase mb-1" style={{ ...body, fontWeight: 500 }}>Elevation</p>
                <p className="text-white/70 text-lg" style={{ ...heading }}>2,400m / 7,874ft</p>
              </div>
              <div className="p-5 border border-white/[0.06] bg-white/[0.02]">
                <p className="text-[#c4a87c]/70 text-[10px] tracking-[0.2em] uppercase mb-1" style={{ ...body, fontWeight: 500 }}>Clear Nights Per Year</p>
                <p className="text-white/70 text-lg" style={{ ...heading }}>330+</p>
              </div>
              <div className="p-5 border border-white/[0.06] bg-white/[0.02]">
                <p className="text-[#c4a87c]/70 text-[10px] tracking-[0.2em] uppercase mb-1" style={{ ...body, fontWeight: 500 }}>Light Pollution</p>
                <p className="text-white/70 text-lg" style={{ ...heading }}>Near Zero (Bortle 1)</p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Two-image row */}
        <div className="grid grid-cols-2 gap-3 md:gap-4 mt-10 md:mt-14">
          <FadeIn>
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={CDN.cactusMilkyway}
                alt="Desert cacti reaching toward the Milky Way"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={CDN.rockArchMilkyway}
                alt="Stargazer framed by a natural rock arch under the Milky Way"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   4. RAPA NUI — Moai under the stars
   ═══════════════════════════════════════════════════════════════ */
function RapaNuiSection() {
  return (
    <section className="py-16 md:py-24">
      {/* Full-width Moai + Milky Way */}
      <FadeIn>
        <div className="relative w-full overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-[1fr_1.2fr] gap-3 md:gap-4">
              <div className="aspect-[3/4] md:aspect-[2/3] overflow-hidden">
                <img
                  src={CDN.moaiMilkyway}
                  alt="Moai statues silhouetted against the Milky Way"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
                />
              </div>
              <div className="aspect-[3/4] md:aspect-[2/3] overflow-hidden">
                <img
                  src={CDN.craterMilkyway}
                  alt="Rano Kau volcanic crater beneath the Milky Way"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
                />
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <div className="max-w-[800px] mx-auto px-6 md:px-10 mt-12 md:mt-16 text-center">
        <FadeIn>
          <SectionLabel light>Rapa Nui, Chile</SectionLabel>
          <h2
            className="text-white/90 text-2xl md:text-3xl leading-[1.2] mb-6"
            style={{ ...heading }}
          >
            Ancient Guardians Under Ancient Light
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p
            className="text-white/40 text-sm md:text-base leading-[1.8] mb-6"
            style={{ ...body }}
          >
            On one of the most remote inhabited islands on Earth, the Moai have stood for centuries beneath skies unmarred by modern light. At Nayara Hangaroa, the southern hemisphere's most spectacular celestial displays unfold nightly — the Magellanic Clouds, the Southern Cross, and the Milky Way's galactic center rising above the ancient stone guardians.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p
            className="text-white/40 text-sm md:text-base leading-[1.8]"
            style={{ ...body }}
          >
            The volcanic crater of Rano Kau, with its freshwater lake reflecting the cosmos, offers one of the most otherworldly stargazing settings imaginable — a natural amphitheater where Earth's geological drama meets the infinite expanse above.
          </p>
        </FadeIn>
      </div>

      {/* Dusk transition images */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 mt-10 md:mt-14">
        <div className="grid grid-cols-3 gap-3 md:gap-4">
          <FadeIn>
            <div className="aspect-square overflow-hidden">
              <img
                src={CDN.moaiSunsetSilhouette}
                alt="Moai in dramatic silhouette at dusk"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="aspect-square overflow-hidden">
              <img
                src={CDN.moaiSunriseGolden}
                alt="Moai bathed in golden sunrise light"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="aspect-square overflow-hidden">
              <img
                src={CDN.moaiGoldenSunset}
                alt="Moai at golden hour"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   5. BIOLUMINESCENCE — Bocas del Toro
   ═══════════════════════════════════════════════════════════════ */
function BioluminescenceSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Video */}
          <FadeIn>
            <div className="aspect-square overflow-hidden relative">
              <NativeVideo
                src={CDN.bioluminescenceVideo}
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>

          {/* Text */}
          <FadeIn delay={0.15}>
            <SectionLabel light>Bocas del Toro, Panama</SectionLabel>
            <h2
              className="text-white/90 text-2xl md:text-3xl leading-[1.2] mb-6"
              style={{ ...heading }}
            >
              The Sea That Glows
            </h2>
            <p
              className="text-white/40 text-sm leading-[1.8] mb-5"
              style={{ ...body }}
            >
              In the warm Caribbean waters surrounding Nayara Bocas del Toro, a different kind of night magic unfolds. Bioluminescent dinoflagellates — microscopic organisms that produce light when disturbed — transform the ocean into a living constellation. Every stroke through the water, every wave against the hull of a kayak, ignites an electric blue glow.
            </p>
            <p
              className="text-white/40 text-sm leading-[1.8]"
              style={{ ...body }}
            >
              Guided night kayaking excursions take guests into the mangrove-lined bays where this phenomenon is most vivid, creating an experience that feels like paddling through liquid starlight.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   6. GALLERY — Masonry grid of all night assets
   ═══════════════════════════════════════════════════════════════ */
function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");
  const locations = ["All", "Alto Atacama", "Rapa Nui", "Bocas del Toro"];

  const filtered = filter === "All" ? galleryItems : galleryItems.filter(item => item.location === filter);

  return (
    <section className="py-16 md:py-24 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <FadeIn>
          <div className="text-center mb-10 md:mb-14">
            <SectionLabel light>Gallery</SectionLabel>
            <h2
              className="text-white/90 text-2xl md:text-3xl leading-[1.2] mb-8"
              style={{ ...heading }}
            >
              Night Across Our World
            </h2>

            {/* Location filter */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {locations.map((loc) => (
                <button
                  key={loc}
                  onClick={() => setFilter(loc)}
                  className={`px-4 py-2 text-[11px] tracking-[0.15em] uppercase transition-all duration-300 border ${
                    filter === loc
                      ? "border-[#c4a87c]/40 text-[#c4a87c] bg-[#c4a87c]/10"
                      : "border-white/[0.08] text-white/30 hover:text-white/50 hover:border-white/20"
                  }`}
                  style={{ ...body, fontWeight: 500 }}
                >
                  {loc}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 gap-3 md:gap-4">
          {filtered.map((item, i) => (
            <FadeIn key={`${item.src}-${i}`} delay={Math.min(i * 0.05, 0.3)}>
              <div
                className="mb-3 md:mb-4 break-inside-avoid overflow-hidden cursor-pointer group relative"
                onClick={() => setLightboxIndex(i)}
              >
                {item.type === "video" ? (
                  <NativeVideo
                    src={item.src}
                    className="w-full object-cover"
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
                    loading="lazy"
                  />
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-end p-4 opacity-0 group-hover:opacity-100">
                  <span
                    className="text-white/70 text-[10px] tracking-[0.15em] uppercase"
                    style={{ ...body, fontWeight: 500 }}
                  >
                    {item.location}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={filtered}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onPrev={() => setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filtered.length - 1))}
            onNext={() => setLightboxIndex((prev) => (prev !== null && prev < filtered.length - 1 ? prev + 1 : 0))}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   LIGHTBOX
   ═══════════════════════════════════════════════════════════════ */
function Lightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const item = items[index];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center text-white/50 hover:text-white transition-colors"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center text-white/30 hover:text-white transition-colors"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center text-white/30 hover:text-white transition-colors"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Content */}
      <div
        className="max-w-[90vw] max-h-[85vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "video" ? (
          <NativeVideo
            src={item.src}
            className="max-w-full max-h-[80vh] object-contain"
            controls
          />
        ) : (
          <img
            src={item.src}
            alt={item.alt}
            className="max-w-full max-h-[80vh] object-contain"
          />
        )}
        <div className="mt-4 text-center">
          <p className="text-white/50 text-xs tracking-[0.1em]" style={{ ...body }}>
            {item.alt}
          </p>
          <p className="text-[#c4a87c]/40 text-[10px] tracking-[0.2em] uppercase mt-1" style={{ ...body, fontWeight: 500 }}>
            {item.location}
          </p>
        </div>
      </div>

      {/* Counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <p className="text-white/20 text-xs" style={{ ...body }}>
          {index + 1} / {items.length}
        </p>
      </div>
    </motion.div>
  );
}
