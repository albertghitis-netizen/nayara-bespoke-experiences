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
  heroDesktop: "/manus-storage/nbn-hero-new_3e6aefe3.mp4",
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
  "#000000", // hero / story
  "#000000", // atacama skies
  "#000000", // rapa nui moai
  "#000000", // bocas bioluminescence
  "#000000", // stargazing video
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
  return <p className="text-white text-[11px] tracking-[0.15em] mb-3" style={{ ...body, fontWeight: 500 }}>{children}</p>;
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
  linkText?: string;
  linkHref?: string;
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
                  className="block text-2xl md:text-4xl lg:text-[48px] leading-[1.05] tracking-wide text-white"
                  style={heading}
                >
                  {line}
                </span>
              ))}
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-white text-[15px] leading-relaxed max-w-md" style={body}>
              {section.body}
            </p>
          </FadeIn>

          {section.linkText && section.linkHref && (
            <FadeIn delay={0.3}>
              <a
                href={section.linkHref}
                className="inline-block mt-8 text-white text-[12px] tracking-[0.15em] uppercase border-b border-white/40 pb-1 hover:border-white transition-colors"
                style={{ ...body, fontWeight: 500 }}
              >
                {section.linkText}
              </a>
            </FadeIn>
          )}
        </div>
      </div>

      {/* Horizontal media — full bleed */}
      {section.horizontalSrc && (
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
      )}
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
    verticalSrc: "/manus-storage/3a94f88f-2a69-457a-bc18-fae9946d8f0c(1)_463d1a87.jpg",
    horizontalSrc: "/manus-storage/nbn-clearest-skies-horizontal_dedbd675.mp4",
    verticalIsVideo: false,
    horizontalIsVideo: true,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: DARK_COLORS[1],
    linkText: "Read: Best Stargazing Resort in the Atacama",
    linkHref: "/alto-atacama/stargazing",
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
    id: "atacama-dusk",
    label: "Rapa Nui",
    headline: "Moai Beneath\nthe Milky Way",
    body: "On Easter Island, the ancient Moai stand as silent witnesses to the cosmos. At Hangaroa, the night sky is a living canvas — the Milky Way stretches from horizon to horizon above these monolithic guardians. Sunrise and sunset paint the stone figures in gold, while after dark, the stars claim the island entirely.",
    verticalSrc: "/manus-storage/C4E3064D-C340-4EA4-BBC8-507E51A9B517_d666d0a5.jpeg",
    horizontalSrc: "/manus-storage/nbn-moai-horizontal_040475cb.mp4",
    verticalIsVideo: false,
    horizontalIsVideo: true,
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
    id: "night-frog-tour",
    label: "Nayara by Night",
    headline: "The Jungle\nAfter Dark",
    body: "Join our resident naturalists on a nocturnal frog safari through the rainforest canopy, where red-eyed tree frogs, glass frogs, and poison dart frogs emerge under torchlight. Then follow the fireflies along volcanic trails as the jungle reveals its most intimate secrets — a world that only comes alive after dark.",
    verticalSrc: "/manus-storage/tented-night-frogs-vertical_13b54b09.mp4",
    horizontalSrc: CDN.heroDesktop,
    verticalIsVideo: true,
    horizontalIsVideo: true,
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
];

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function NayaraByNight() {
  return (
    <div className="min-h-screen bg-black">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none" />
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
    <section id="story">
      {/* Row: Text left + Moai vertical right — full bleed */}
      <div className="flex flex-col md:flex-row" style={{ backgroundColor: "#000000" }}>
        {/* Text column */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-12 md:px-16 lg:px-24">
          <FadeIn>
            <SectionLabel>The Experience</SectionLabel>
            <h2 className="text-white mb-6" style={{ ...heading, fontSize: "clamp(20px, 2.8vw, 32px)", lineHeight: 1.15 }}>
              Where Darkness Reveals<br />the Universe
            </h2>
            <p className="text-white text-[15px] leading-relaxed" style={body}>
              From the clearest night skies on Earth in the Atacama Desert to the ancient Moai standing sentinel beneath the Milky Way on Rapa Nui, and the ethereal glow of bioluminescent plankton in the Caribbean waters of Bocas del Toro — Nayara's properties offer some of the most extraordinary nocturnal experiences on the planet.
            </p>
            <p className="text-white text-[15px] leading-relaxed mt-6" style={body}>
              These are not staged moments. They are the natural gifts of the remote, pristine landscapes where Nayara has chosen to build — places where light pollution is a foreign concept and the cosmos reveals itself in full splendor.
            </p>
            {/* Blog Link — Of Moon and Stars */}
            <a
              href="https://blog.nayararesorts.com/nayara-by-night-of-moon-and-stars"
              target="_blank"
              rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 mt-8 px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md backdrop-blur-md"
                style={{ ...body, fontWeight: 500, fontSize: "12px", letterSpacing: "0.08em", color: "#ffffff", backgroundColor: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
              Read: Nayara by Night — Of Moon and Stars
            </a>
          </FadeIn>
        </div>

        {/* Moai vertical — right half, full bleed */}
        <div className="w-full md:w-1/2">
          <FadeIn delay={0.1}>
            <NativeVideo
              src={CDN.videoShort}
              className="w-full h-full object-cover"
            />
          </FadeIn>
        </div>
      </div>

      {/* s2 landscape video — full width, no gap, hidden on mobile */}
      <div className="hidden md:block">
        <FadeIn delay={0.2}>
          <div style={{ aspectRatio: "16/9" }} className="overflow-hidden">
            <NativeVideo src="/manus-storage/nbn-s2-horizontal_3e4fa16c.mp4" className="w-full h-full object-cover" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
