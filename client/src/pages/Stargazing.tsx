/*
 * UNDER THE CLEAREST SKIES ON EARTH — Alto Atacama Stargazing Experience
 * Structure: Hero Video → Story → Cascade sections → Footer
 * Dark theme throughout — replicates Nayara by Night layout
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
  heroDesktop: "/manus-storage/stargazing-hero-timelapse_f5aabccf.mp4",
  heroMobile: "/manus-storage/stargazing-hero-mobile_77790887.mp4",
  /* Telescope vertical (from By Night) */
  telescopeVertical: "/manus-storage/3a94f88f-2a69-457a-bc18-fae9946d8f0c(1)_463d1a87.jpg",
  /* Petroglyph under Milky Way — Ancient Cultures */
  petroglyphVertical: "/manus-storage/stargazing-petroglyph-milkyway_2c62bd09.jpg",
  /* Observatory telescope under Milky Way arch */
  observatoryVertical: "/manus-storage/stargazing-observatory-milkyway_12f50076.jpg",
  /* New stargazing images */
  handVertical: "/manus-storage/stargazing-hand-vertical_c5fe139a.jpg",
  milkywayArchHorizontal: "/manus-storage/stargazing-milkyway-arch-horizontal_add8c151.jpg",
  pillarAuroraHorizontal: "/manus-storage/stargazing-pillar-aurora-horizontal_4d45b233.jpg",
  rockarchHorizontal: "/manus-storage/stargazing-rockarch-horizontal_7936b44b.jpg",
  rockarchVertical: "/manus-storage/stargazing-rockarch-vertical_2c10b104.jpg",
  /* Cactus silhouette under Milky Way — Desert at Night */
  cactusVertical: "/manus-storage/stargazing-cactus-milkyway_4c3ca29c.jpg",
  /* Mano del Desierto under Milky Way */
  manoDesiertoVertical: "/manus-storage/stargazing-mano-desierto-v2_2b3dc604.jpg",
  /* Abandoned bus under Milky Way — Magic School Bus */
  busMilkywayHorizontal: "/manus-storage/stargazing-bus-milkyway-horizontal_c3a196b2.jpg",
  /* Rock formations with person — Ancient Cultures horizontal */
  rockformationsHorizontal: "/manus-storage/stargazing-rockformations-person_801f7152.jpg",
  /* Petroglyph stone v2 — Ancient Cultures vertical */
  petroglyphV2Vertical: "/manus-storage/stargazing-petroglyph-v2_02a3c06a.jpg",
};

/* ─── Typography ─────────────────────────────────────────────── */
const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

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
   CASCADE SECTION DATA
   ═══════════════════════════════════════════════════════════════ */
type StargazingSectionData = {
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
};

const STARGAZING_SECTIONS: StargazingSectionData[] = [
  {
    id: "hand-and-bus",
    label: "Desert Landmarks",
    headline: "Hand of the Desert\n& Magic School Bus",
    body: "Rising from the sand like a signal to the cosmos, the Mano del Desierto stands eleven meters tall in the emptiness between Antofagasta and the Atacama. Sculpted by Mario Irrarrázabal in 1992, the hand emerges from the desert floor as a monument to human vulnerability and endurance — a gesture reaching toward the same sky that has drawn travelers here for millennia.\n\nNearby, a graffiti-covered school bus sits abandoned beneath the Milky Way — a relic turned landmark, now one of the most photographed night-sky foregrounds in South America. Together they mark the surreal edge where human presence meets infinite sky.",
    verticalSrc: CDN.manoDesiertoVertical,
    horizontalSrc: CDN.busMilkywayHorizontal,
    verticalIsVideo: false,
    horizontalIsVideo: false,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
  },
  {
    id: "andean-sky-knowledge",
    label: "Andean Cosmovision",
    headline: "How Ancient Cultures\nRead the Sky",
    body: "For Indigenous Andean societies, the night sky was a living system connecting land, water, animals, and time. Unlike Western astronomy, Andean sky knowledge focused on the dark spaces within the Milky Way — 'dark constellations' formed by dust lanes visible only under extremely dark skies. The celestial llama, fox, and snake guided herding cycles and ecological awareness for millennia.",
    verticalSrc: CDN.petroglyphV2Vertical,
    horizontalSrc: CDN.rockformationsHorizontal,
    verticalIsVideo: false,
    horizontalIsVideo: false,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
  },
  {
    id: "desert-at-night",
    label: "The Desert at Night",
    headline: "When Darkness\nReveals Everything",
    body: "As daylight fades, the Atacama transforms. Ancient cacti stand as silent witnesses beneath a sky so clear it feels close enough to touch. Without artificial light, the desert reveals its second landscape — one written in starlight. The Milky Way arcs overhead, and the silence is so complete you can hear the earth cooling.",
    verticalSrc: CDN.cactusVertical,
    horizontalSrc: CDN.pillarAuroraHorizontal,
    verticalIsVideo: false,
    horizontalIsVideo: false,
    verticalRatio: "3/4",
    horizontalRatio: "21/9",
  },
];

/* ═══════════════════════════════════════════════════════════════
   CASCADE SECTION COMPONENT
   ═══════════════════════════════════════════════════════════════ */
function StargazingCascadeSection({ section, index }: { section: StargazingSectionData; index: number }) {
  const textLeft = index % 2 === 0;

  return (
    <section id={section.id}>
      {/* Row: Vertical media + Text column */}
      <div className="flex flex-col md:flex-row bg-black">
        {/* Vertical media */}
        <div className={`w-full md:w-1/2 ${textLeft ? "md:order-2" : "md:order-1"}`}>
          <FadeIn delay={0.1}>
            <MediaBlock
              src={section.verticalSrc}
              isVideo={section.verticalIsVideo}
              ratio={section.verticalRatio}
              alt={`${section.label} — Stargazing`}
            />
          </FadeIn>
        </div>

        {/* Text column */}
        <div
          className={`w-full md:w-1/2 flex flex-col justify-center px-8 py-12 md:px-16 lg:px-24 bg-black ${
            textLeft ? "md:order-1" : "md:order-2"
          }`}
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
            <div className="max-w-md">
              {section.body.split("\n\n").map((para, i) => (
                <p key={i} className={`text-white text-[15px] leading-relaxed ${i > 0 ? "mt-6" : ""}`} style={body}>
                  {para}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Horizontal media — full bleed */}
      {section.horizontalSrc && (
        <div className="bg-black">
          <FadeIn delay={0.2}>
            <MediaBlock
              src={section.horizontalSrc}
              isVideo={section.horizontalIsVideo}
              ratio={section.horizontalRatio}
              alt={`${section.label} — landscape`}
            />
          </FadeIn>
        </div>
      )}
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function Stargazing() {
  return (
    <div className="min-h-screen bg-black">
      <BrandNavigation pageType="brand" navPalette={{ dark: "#000000", pillBg: "rgba(0,0,0,0.7)", pillHover: "rgba(0,0,0,0.9)" }} />
      <HeroSection />
      <StorySection />

      {/* Cascade sections */}
      {STARGAZING_SECTIONS.map((section, i) => (
        <StargazingCascadeSection key={section.id} section={section} index={i} />
      ))}

      {/* CTA before footer */}
      <section className="bg-black py-20 md:py-28">
        <FadeIn>
          <div className="flex flex-col items-center text-center px-6">
            <a
              href="/alto-atacama"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg backdrop-blur-md"
              style={{ ...body, fontWeight: 500, fontSize: "13px", letterSpacing: "0.12em", color: "#ffffff", backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.25)" }}
            >
              Explore All the Atacama Experiences
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </section>

      <Footer pageType="brand" bgColor="#000000" nightSkyBg />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   1. HERO — Full-screen video with title at bottom
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
          Under the Clearest Skies on Earth
        </motion.h1>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   2. STORY — Introduction text + vertical media
   ═══════════════════════════════════════════════════════════════ */
function StorySection() {
  return (
    <section id="story">
      {/* Row: Text left + vertical right */}
      <div className="flex flex-col md:flex-row bg-black">
        {/* Text column */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-12 md:px-16 lg:px-24">
          <FadeIn>
            <SectionLabel>Nayara Alto Atacama</SectionLabel>
            <h2 className="mb-6 md:mb-8">
              <span className="block text-2xl md:text-4xl lg:text-[48px] leading-[1.05] tracking-wide text-white" style={heading}>The Night Sky Is Not</span>
              <span className="block text-2xl md:text-4xl lg:text-[48px] leading-[1.05] tracking-wide text-white" style={heading}>an Amenity</span>
            </h2>
            <p className="text-white text-[15px] leading-relaxed" style={body}>
              Set beyond the lights of San Pedro de Atacama in the Catarpe Valley, the resort lies beneath one of the clearest night skies on Earth. This clarity is not poetic exaggeration. It is the result of altitude, extreme aridity, and geographic isolation that have drawn the world's leading astronomers to northern Chile for decades.
            </p>
            <p className="text-white text-[15px] leading-relaxed mt-6" style={body}>
              What scientists seek for precision, guests experience as presence. Darkness arrives fully. Silence settles. The sky opens without interference. Stargazing here unfolds naturally, shaped by geography rather than schedule.
            </p>
            {/* Blog Link */}
            <a
              href="/journal/stargazing-atacama"
              className="inline-flex items-center gap-2.5 mt-8 px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md backdrop-blur-md"
              style={{ ...body, fontWeight: 500, fontSize: "12px", letterSpacing: "0.08em", color: "#ffffff", backgroundColor: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
              Read: Best Stargazing Resort in the Atacama
            </a>
          </FadeIn>
        </div>

        {/* Vertical media — right half */}
        <div className="w-full md:w-1/2">
          <FadeIn delay={0.1}>
            <img
              src={CDN.observatoryVertical}
              alt="Observatory telescope beneath the Milky Way arch"
              className="w-full h-full object-cover"
              style={{ aspectRatio: "3/4" }}
            />
          </FadeIn>
        </div>
      </div>

      {/* Horizontal media — full bleed, splits Story vertical from cascade vertical */}
      <div className="bg-black">
        <FadeIn delay={0.2}>
          <img
            src={CDN.rockarchHorizontal}
            alt="Rock arch beneath the stars"
            className="w-full object-cover"
            style={{ aspectRatio: "16/9" }}
            loading="lazy"
          />
        </FadeIn>
      </div>
    </section>
  );
}
