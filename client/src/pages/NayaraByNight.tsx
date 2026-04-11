/*
 * NAYARA BY NIGHT — Standalone Night Sky Experience Page
 * Structure: Hero Video → Story → Cascade sections (Atacama / Rapa Nui / Bocas) → Footer
 * Dark theme throughout — gallery images integrated into cascade sections
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import NativeVideo from "@/components/NativeVideo";
import { useIsMobile } from "@/hooks/useMobile";
import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";

/* ─── CDN Assets ─────────────────────────────────────────────── */
const CDN = {
  /* Hero */
  heroDesktop: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/anakena-timelapse-hero_60211087.mp4",
  heroMobile: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-hero-vertical-new_efde71a9.mp4",
  /* Story images */
  s1: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-cactus-milkyway_a7dc0b5c.webp",
  s2: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-rano-kau-milkyway_dd16a9d7.webp",
  /* Atacama */
  observatoryMilkyway: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-atacama-dusk-resort_b5829c95.webp",
  atacamaDusk: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-atacama-dusk_9201508f.webp",
  rockArchMilkyway: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-rock-arch-milkyway_729bcc81.webp",
  cactusMilkyway: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-cactus-milkyway_a7dc0b5c.webp",
  craterMilkyway: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-crater-milkyway_00741a91.webp",
  /* Rapa Nui */
  moaiMilkyway: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-moai-milkyway_0588cd10.webp",
  moaiGoldenSunset: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-moai-golden-sunset_f7d26dab.webp",
  moaiSunriseGolden: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-moai-sunrise-golden_c8aad9dd.webp",
  moaiSunsetSilhouette: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-moai-sunset-silhouette_692f6a23.webp",
  ranoKauMilkyway: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-rano-kau-milkyway_dd16a9d7.webp",
  /* Bocas del Toro */
  biolumBeach: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/biolum2_9f24efa2.jpeg",
  biolumWaves: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/biolum_007f69ec.webp",
  /* Videos */
  videoShort: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-video-short_174183ae.mp4",
  videoLong: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-video-long_44b41d4c.mp4",
  cascadeShared: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-nbn-cascade-shared_9db0b65c.mp4",
  cascadeBg: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/cascade-bg-video_dccee724.mp4",
};

/* ─── Typography ─────────────────────────────────────────────── */
const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

/* ─── Dark palette for cascade sections ─────────────────────── */
const DARK_COLORS = [
  "#0a0a12", // hero / story
  "#0c0c16", // atacama skies
  "#0e0e1a", // rapa nui moai
  "#10101e", // bocas bioluminescence
  "#0e0e1a", // stargazing video
];

/* ─── Shared Animation Components ────────────────────────────── */
function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-white/30 text-[11px] tracking-[0.15em] mb-3" style={{ ...body, fontWeight: 500 }}>{children}</p>;
}

function MediaBlock({
  src,
  isVideo,
  ratio,
  alt,
  className = "",
}: {
  src: string;
  isVideo: boolean;
  ratio: string;
  alt?: string;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden ${className}`} style={{ aspectRatio: ratio }}>
      {isVideo ? (
        <NativeVideo src={src} className="w-full h-full object-cover" />
      ) : (
        <img src={src} alt={alt || ""} className="w-full h-full object-cover" loading="lazy" />
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   DARK CASCADE SECTION — Same layout as property pages, dark theme
   ═══════════════════════════════════════════════════════════════ */
type NightSectionData = {
  id: string;
  label: string;
  headline: string;
  body: string;
  verticalSrc: string;
  horizontalSrc: string;
  verticalIsVideo: boolean;
  horizontalIsVideo: boolean;
  verticalRatio: string;
  horizontalRatio: string;
  bgColor: string;
};

function NightCascadeSection({ section, index }: { section: NightSectionData; index: number }) {
  const textLeft = index % 2 === 0;

  return (
    <section id={section.id}>
      {/* Row: Vertical media + Text column */}
      <div className="flex flex-col md:flex-row" style={{ backgroundColor: section.bgColor }}>
        {/* Vertical media */}
        <div className={`w-full md:w-1/2 ${textLeft ? "md:order-2" : "md:order-1"}`}>
          <FadeIn delay={0.1}>
            <MediaBlock
              src={section.verticalSrc}
              isVideo={section.verticalIsVideo}
              ratio={section.verticalRatio}
              alt={`${section.label} — Nayara by Night`}
            />
          </FadeIn>
        </div>

        {/* Text column */}
        <div
          className={`w-full md:w-1/2 flex flex-col justify-center px-8 py-12 md:px-16 lg:px-24 ${
            textLeft ? "md:order-1" : "md:order-2"
          }`}
          style={{ backgroundColor: section.bgColor }}
        >
          <FadeIn>
            <SectionLabel>{section.label}</SectionLabel>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="mb-6 md:mb-8">
              {section.headline.split("\n").map((line, i) => (
                <span
                  key={i}
                  className="block text-2xl md:text-4xl lg:text-[48px] leading-[1.05] tracking-wide text-white/90"
                  style={heading}
                >
                  {line}
                </span>
              ))}
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-white/50 text-[15px] leading-relaxed max-w-md" style={body}>
              {section.body}
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Horizontal media — full bleed */}
      <div style={{ backgroundColor: section.bgColor }}>
        <FadeIn delay={0.2}>
          <MediaBlock
            src={section.horizontalSrc}
            isVideo={section.horizontalIsVideo}
            ratio="16/9"
            alt={`${section.label} — landscape`}
          />
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Section Data ───────────────────────────────────────────── */
const NIGHT_SECTIONS: NightSectionData[] = [
  {
    id: "atacama-skies",
    label: "Atacama Desert",
    headline: "The Clearest\nSkies on Earth",
    body: "At 2,400 meters in the driest desert on the planet, Alto Atacama offers some of the most pristine stargazing conditions anywhere. The Milky Way arcs overhead in impossible detail — no telescope required. Our observatory and guided night excursions reveal constellations, nebulae, and the Southern Cross in breathtaking clarity.",
    verticalSrc: CDN.cactusMilkyway,
    horizontalSrc: CDN.rockArchMilkyway,
    verticalIsVideo: false,
    horizontalIsVideo: false,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: DARK_COLORS[1],
  },
  {
    id: "atacama-dusk",
    label: "Desert Twilight",
    headline: "Where Day\nMeets Night",
    body: "The transition from day to night in the Atacama is a spectacle in itself. As the sun drops behind the Andes, the desert transforms through a palette of amber, violet, and deep indigo. The resort glows warmly against the vast emptiness — a sanctuary of light in the world's darkest landscape.",
    verticalSrc: CDN.craterMilkyway,
    horizontalSrc: CDN.observatoryMilkyway,
    verticalIsVideo: false,
    horizontalIsVideo: false,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: DARK_COLORS[1],
  },
  {
    id: "rapa-nui-moai",
    label: "Rapa Nui",
    headline: "Moai Beneath\nthe Milky Way",
    body: "On Easter Island, the ancient Moai stand as silent witnesses to the cosmos. At Hangaroa, the night sky is a living canvas — the Milky Way stretches from horizon to horizon above these monolithic guardians. Sunrise and sunset paint the stone figures in gold, while after dark, the stars claim the island entirely.",
    verticalSrc: CDN.moaiMilkyway,
    horizontalSrc: CDN.moaiGoldenSunset,
    verticalIsVideo: false,
    horizontalIsVideo: false,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: DARK_COLORS[2],
  },
  {
    id: "rapa-nui-golden",
    label: "Golden Hour",
    headline: "Ancient Stone\nin Golden Light",
    body: "The Moai at sunrise and sunset are among the most photographed moments on Earth — and yet nothing prepares you for seeing them in person. The volcanic stone catches the light differently with each passing minute, shifting from deep shadow to warm amber to silhouette against a blazing sky.",
    verticalSrc: CDN.moaiSunsetSilhouette,
    horizontalSrc: CDN.moaiSunriseGolden,
    verticalIsVideo: false,
    horizontalIsVideo: false,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: DARK_COLORS[2],
  },
  {
    id: "bocas-bioluminescence",
    label: "Bocas del Toro",
    headline: "Bioluminescent\nWaters",
    body: "In the warm Caribbean waters surrounding Bocas del Toro, microscopic dinoflagellates create one of nature's most magical phenomena. Every movement in the water triggers an electric blue glow — kayak through bioluminescent bays, swim in liquid starlight, or simply watch the waves illuminate the shoreline after dark.",
    verticalSrc: CDN.biolumBeach,
    horizontalSrc: CDN.biolumWaves,
    verticalIsVideo: false,
    horizontalIsVideo: false,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: DARK_COLORS[3],
  },
  {
    id: "night-video",
    label: "After Dark",
    headline: "When the\nStars Emerge",
    body: "From the Atacama's observatory to the bioluminescent bays of Panama, Nayara's night experiences are among the most extraordinary in luxury travel. These are moments that exist only in darkness — and they change the way you see the world.",
    verticalSrc: CDN.videoShort,
    horizontalSrc: CDN.ranoKauMilkyway,
    verticalIsVideo: true,
    horizontalIsVideo: false,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: DARK_COLORS[4],
  },
  {
    id: "night-atmosphere",
    label: "The Atmosphere",
    headline: "Darkness\nReveals Beauty",
    body: "At Nayara, nightfall is not an ending — it is a transformation. The jungle hums with nocturnal life, the sky deepens to reveal galaxies, and the resorts glow with intimate warmth. Every property is designed to celebrate the night as much as the day.",
    verticalSrc: CDN.cascadeShared,
    horizontalSrc: CDN.atacamaDusk,
    verticalIsVideo: true,
    horizontalIsVideo: false,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: DARK_COLORS[3],
  },
  {
    id: "night-immersion",
    label: "Immersion",
    headline: "Step Into\nthe Night",
    body: "Whether you are watching bioluminescent plankton light up the Caribbean, tracing constellations from a private terrace in the Atacama, or listening to the rainforest chorus from your tented suite — Nayara by Night is an invitation to experience the world after dark.",
    verticalSrc: CDN.cascadeBg,
    horizontalSrc: CDN.biolumWaves,
    verticalIsVideo: true,
    horizontalIsVideo: false,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: DARK_COLORS[4],
  },
];

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function NayaraByNight() {
  return (
    <div className="min-h-screen bg-[#0a0a12]">
      <BrandNavigation pageType="brand" navPalette={{ dark: "#000000", pillBg: "rgba(0,0,0,0.7)", pillHover: "rgba(0,0,0,0.9)" }} />
      <HeroSection />
      <StorySection />

      {/* Cascade sections — all gallery images integrated */}
      {NIGHT_SECTIONS.map((section, i) => (
        <NightCascadeSection key={section.id} section={section} index={i} />
      ))}

      <Footer pageType="brand" bgColor="#000000" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   1. HERO — Full-screen video with "Nayara by Night" H1
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const isMobile = useIsMobile();
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <NativeVideo src={isMobile ? CDN.heroMobile : CDN.heroDesktop} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content — anchored to bottom */}
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6 md:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-xl md:text-3xl lg:text-4xl leading-[0.95] tracking-wide text-center"
          style={heading}
        >
          Nayara by Night
        </motion.h1>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   2. STORY — Introduction text + landscape image
   ═══════════════════════════════════════════════════════════════ */
function StorySection() {
  return (
    <section id="story" className="py-16 md:py-24 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        {/* Full-width text */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <FadeIn>
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
            {/* Blog Link — Of Moon and Stars */}
            <a
              href="https://blog.nayararesorts.com/nayara-by-night-of-moon-and-stars"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 block p-4 rounded-lg border border-white/10 hover:border-white/25 hover:bg-white/5 transition-all"
            >
              <span className="text-[#c9b99a]/50 text-[9px] tracking-[0.15em] block mb-2" style={{ ...body, fontWeight: 600 }}>From the Journal</span>
              <h4 className="text-white/80 text-[14px] leading-snug group-hover:text-[#c9b99a] transition-colors" style={{ ...heading, fontWeight: 500 }}>Nayara by Night: Of Moon and Stars</h4>
              <span className="text-white/30 text-[11px] tracking-[0.08em] mt-3 inline-block group-hover:text-[#c9b99a]/60 transition-colors" style={{ ...body, fontWeight: 500 }}>Read →</span>
            </a>
          </FadeIn>
        </div>

        {/* s2 landscape — desktop only */}
        <div className="hidden md:block">
          <FadeIn delay={0.3}>
            <img src={CDN.s2} alt="Rano Kau crater beneath the Milky Way" className="w-full object-cover rounded-lg" loading="lazy" style={{ aspectRatio: "16/9" }} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
