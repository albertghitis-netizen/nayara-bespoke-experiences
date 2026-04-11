/**
 * NAYARA BOCAS DEL TORO — Pure Cascade (Option B)
 * Adults-Only Overwater Villas, Panama
 * Full-bleed edge-to-edge media, ocean gradient, ALL assets, no functional content
 * Zero-gap between all sections — one continuous visual journey
 */
import { motion } from "framer-motion";
import NativeVideo from "@/components/NativeVideo";
import { useIsMobile } from "@/hooks/useMobile";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import {
  AnimateOnScroll,
  MultiLineReveal,
  MediaReveal,
  fadeUp,
  DURATION,
  EASE_CINEMATIC,
} from "@/components/motion";

/* ═══════════════════════════════════════════════════════════════
   PALETTE — "Ocean" gradient: pale aqua → deep teal
   Subtle enough to let the photography dominate
   ═══════════════════════════════════════════════════════════════ */
const SECTION_COLORS = [
  "#F2F6F5", // 0 hero
  "#EFF4F3", // 1 story
  "#ECF2F1", // 2 rooms
  "#E9F0EE", // 3 experiences
  "#E6EDEB", // 4 sustainability
  "#E3EBE8", // 5 wellness
  "#E0E8E5", // 6 gastronomy
  "#DDE5E2", // 7 marine
  "#DAE2DF", // 8 island
  "#D7DFDC", // 9 sunset
  "#D4DCD9", // 10 final
];

const PALETTE = {
  text: "#1A2F30",
  textSecondary: "#5A7A7C",
  textTertiary: "#8AACAE",
  primary: "#3B6B6E",
  divider: "#D0E2E0",
};

/* ═══════════════════════════════════════════════════════════════
   CDN ASSETS — EVERY Bocas asset, organized by section
   ═══════════════════════════════════════════════════════════════ */
const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

const ASSETS = {
  // Hero
  heroDesktop: `${CDN}/nbt-horizontal-desktop_0c584342.mp4`,
  heroMobile: `${CDN}/bocas-vertical2_03bbe8e5.mp4`,

  // Section 1 — Story: room video V + lagoon photo H
  storyV: `${CDN}/87D222D3-2D4E-437D-AAEF-92C3662EBFE9_1e00bdac.MP4`,
  storyH: `${CDN}/74_be6f8cb4.jpg`,

  // Section 2 — Rooms: villas walkway V + aerial curved villas H
  roomsV: `${CDN}/bocas-aerial-villas-walkway_66b2f48e.jpg`,
  roomsH: `${CDN}/80_57ce5c18.jpg`,

  // Section 3 — Experiences: gallery video1 V + resort aerial sunset H
  expV: `${CDN}/bocas-gallery-video1_d18b5ced.mp4`,
  expH: `${CDN}/bocas-resort-aerial-sunset_d536b07d.jpg`,

  // Section 4 — Sustainability: couple villa V + aerial mangroves H
  susV: `${CDN}/bocas-couple-villa-pool_42fafe14.jpg`,
  susH: `${CDN}/bocas-aerial-villas-mangroves_9d5e94f5.jpg`,

  // Section 5 — Wellness: gallery video2 V + overwater deck H
  wellV: `${CDN}/bocas-gallery-video2_1dd3d81d.mp4`,
  wellH: `${CDN}/bocas-overwater-villas-deck_16555482.jpg`,

  // Section 6 — Gastronomy: briceferre villa V + topdown villas H
  gastroV: `${CDN}/bocas-briceferre-villa_c88fea38.jpg`,
  gastroH: `${CDN}/bocas-topdown-villas-boardwalk_576d7415.jpg`,

  // Section 7 — Marine: briceferre aerial V + lagoon aerial H
  marineV: `${CDN}/bocas-briceferre-aerial_60c5ff23.jpg`,
  marineH: `${CDN}/74_11cc5b01.jpg`,

  // Section 8 — Island: tropical video V + coastline H
  islandV: `${CDN}/bocas_gallery_video_0a7e31ab.mp4`,
  islandH: `${CDN}/79_cfb33bcf.jpg`,

  // Section 9 — Sunset: island paradise V + crystal swimming H
  sunsetV: `${CDN}/83_621b9b3f.jpg`,
  sunsetH: `${CDN}/86_bcac4579.jpg`,

  // Section 10 — Final: landscape V + hero desktop as closing H
  finalV: `${CDN}/88_33345812.jpg`,
  finalH: `${CDN}/nbt-horizontal-desktop_0c584342.mp4`,
};

/* ═══════════════════════════════════════════════════════════════
   SECTION DATA — Pure visual storytelling, no functional content
   ═══════════════════════════════════════════════════════════════ */
type CascadeSectionData = {
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
  nextBgColor: string;
};

const CASCADE_SECTIONS: CascadeSectionData[] = [
  {
    id: "story",
    label: "The Property",
    headline: "Island Paradise\nReimagined",
    body: "Nayara Bocas del Toro is an adults-only sanctuary on a private Caribbean island, where overwater villas float above crystal-clear turquoise waters. Each villa features direct ocean access, private plunge pools, and unobstructed views of pristine beaches and jungle-covered islands.",
    verticalSrc: ASSETS.storyV,
    horizontalSrc: ASSETS.storyH,
    verticalIsVideo: true,
    horizontalIsVideo: false,
    verticalRatio: "9/16",
    horizontalRatio: "2.34/1",
    bgColor: SECTION_COLORS[1],
    nextBgColor: SECTION_COLORS[2],
  },
  {
    id: "rooms",
    label: "Accommodations",
    headline: "Overwater\nVillas",
    body: "Each overwater villa is a private escape suspended above the Caribbean Sea. With direct ocean access, private plunge pools, and panoramic water views, these accommodations redefine tropical luxury. Wake to the gentle sound of waves and spend your days exploring pristine beaches and vibrant coral reefs.",
    verticalSrc: ASSETS.roomsV,
    horizontalSrc: ASSETS.roomsH,
    verticalIsVideo: false,
    horizontalIsVideo: false,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[2],
    nextBgColor: SECTION_COLORS[3],
  },
  {
    id: "experiences",
    label: "Experiences",
    headline: "Caribbean\nAdventures",
    body: "From snorkeling vibrant coral reefs to kayaking through bioluminescent bays, every day brings a new discovery. Explore hidden beaches, dive alongside tropical fish, or simply drift in the warm Caribbean waters that surround your private island retreat.",
    verticalSrc: ASSETS.expV,
    horizontalSrc: ASSETS.expH,
    verticalIsVideo: true,
    horizontalIsVideo: false,
    verticalRatio: "9/16",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[3],
    nextBgColor: SECTION_COLORS[4],
  },
  {
    id: "sustainability",
    label: "Sustainability",
    headline: "Protecting\nParadise",
    body: "Our commitment to marine conservation and island stewardship ensures that the pristine beauty of Bocas del Toro endures for generations. Through partnerships with local conservation organizations, renewable energy systems, and community programs, we protect the delicate ecosystems that make this place extraordinary.",
    verticalSrc: ASSETS.susV,
    horizontalSrc: ASSETS.susH,
    verticalIsVideo: false,
    horizontalIsVideo: false,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[4],
    nextBgColor: SECTION_COLORS[5],
  },
  {
    id: "wellness",
    label: "Wellness",
    headline: "Caribbean\nSerenity",
    body: "Surrender to the rhythm of the ocean at our overwater spa. Treatments draw from Caribbean healing traditions, using locally sourced ingredients and the soothing sounds of the sea to restore body and mind. Each session unfolds above the gentle turquoise waters.",
    verticalSrc: ASSETS.wellV,
    horizontalSrc: ASSETS.wellH,
    verticalIsVideo: true,
    horizontalIsVideo: false,
    verticalRatio: "9/16",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[5],
    nextBgColor: SECTION_COLORS[6],
  },
  {
    id: "gastronomy",
    label: "Gastronomy",
    headline: "Caribbean\nFlavors",
    body: "Our culinary program celebrates the extraordinary bounty of the Caribbean Sea and the rich agricultural traditions of Panama. Fresh-caught seafood, tropical fruits, and locally grown ingredients are transformed into dishes that honor both the land and the ocean.",
    verticalSrc: ASSETS.gastroV,
    horizontalSrc: ASSETS.gastroH,
    verticalIsVideo: false,
    horizontalIsVideo: false,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[6],
    nextBgColor: SECTION_COLORS[7],
  },
  {
    id: "marine",
    label: "Marine Life",
    headline: "Beneath the\nSurface",
    body: "The waters surrounding Bocas del Toro are home to an extraordinary diversity of marine life. From vibrant coral gardens to playful dolphins, the underwater world here is a living masterpiece. Our guided snorkeling and diving excursions reveal the hidden wonders of this Caribbean sanctuary.",
    verticalSrc: ASSETS.marineV,
    horizontalSrc: ASSETS.marineH,
    verticalIsVideo: false,
    horizontalIsVideo: false,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[7],
    nextBgColor: SECTION_COLORS[8],
  },
  {
    id: "island",
    label: "Island Life",
    headline: "Tropical\nSeclusion",
    body: "Beyond the villas, the island itself is a sanctuary of lush jungle, hidden trails, and secluded beaches. Discover the rhythms of island life — from sunrise yoga on the dock to sunset cocktails as the Caribbean sky transforms into a canvas of gold and violet.",
    verticalSrc: ASSETS.islandV,
    horizontalSrc: ASSETS.islandH,
    verticalIsVideo: true,
    horizontalIsVideo: false,
    verticalRatio: "9/16",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[8],
    nextBgColor: SECTION_COLORS[9],
  },
  {
    id: "sunset",
    label: "Golden Hour",
    headline: "Caribbean\nSunsets",
    body: "As the sun descends toward the horizon, the Caribbean Sea transforms into a mirror of molten gold. These are the moments that define Bocas del Toro — the quiet magic of a tropical evening, where time seems to pause and the world narrows to nothing but light on water.",
    verticalSrc: ASSETS.sunsetV,
    horizontalSrc: ASSETS.sunsetH,
    verticalIsVideo: false,
    horizontalIsVideo: false,
    verticalRatio: "4/5",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[9],
    nextBgColor: SECTION_COLORS[10],
  },
];

/* ═══════════════════════════════════════════════════════════════
   HELPER — Section label
   ═══════════════════════════════════════════════════════════════ */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[11px] tracking-[0.2em] uppercase mb-4"
      style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.primary }}
    >
      {children}
    </p>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HELPER — Renders video or image
   ═══════════════════════════════════════════════════════════════ */
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
   CASCADE SECTION — Full-bleed desktop, stacked mobile
   Vertical media + text side by side (alternating), horizontal below full-width
   ═══════════════════════════════════════════════════════════════ */
function CascadeSection({
  section,
  index,
}: {
  section: CascadeSectionData;
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <section id={section.id}>
      {/* ── Row: Vertical media + Text column ── */}
      <div className="flex flex-col md:flex-row" style={{ backgroundColor: section.bgColor }}>
        {/* Vertical media — full-bleed to its edge */}
        <div
          className={`w-full md:w-1/2 ${isEven ? "md:order-1" : "md:order-2"}`}
        >
          <MediaReveal delay={0.1}>
            <MediaBlock
              src={section.verticalSrc}
              isVideo={section.verticalIsVideo}
              ratio={section.verticalRatio}
              alt={`${section.label} — Nayara Bocas del Toro`}
            />
          </MediaReveal>
        </div>

        {/* Text column */}
        <div
          className={`w-full md:w-1/2 flex flex-col justify-center px-8 py-12 md:px-16 lg:px-24 ${
            isEven ? "md:order-2" : "md:order-1"
          }`}
          style={{ backgroundColor: section.bgColor }}
        >
          <AnimateOnScroll variants={fadeUp}>
            <SectionLabel>{section.label}</SectionLabel>
          </AnimateOnScroll>

          <AnimateOnScroll variants={fadeUp} delay={0.1}>
            <h2 className="mb-6 md:mb-8">
              {section.headline.split("\n").map((line, i) => (
                <span
                  key={i}
                  className="block text-2xl md:text-4xl lg:text-[48px] leading-[1.05] tracking-wide"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
                >
                  {line}
                </span>
              ))}
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll variants={fadeUp} delay={0.2}>
            <p
              className="text-[15px] leading-[1.85] max-w-[480px]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
            >
              {section.body}
            </p>
          </AnimateOnScroll>
        </div>
      </div>

      {/* ── Full-width horizontal media ── */}
      <div style={{ backgroundColor: section.nextBgColor }}>
        <MediaReveal delay={0.05}>
          <MediaBlock
            src={section.horizontalSrc}
            isVideo={section.horizontalIsVideo}
            ratio={section.horizontalRatio}
            alt={`${section.label} landscape — Nayara Bocas del Toro`}
            className="w-full"
          />
        </MediaReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO — Full-screen video
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const isMobile = useIsMobile();
  const heroVideo = isMobile ? ASSETS.heroMobile : ASSETS.heroDesktop;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <NativeVideo src={heroVideo} className="w-full h-full object-cover" hasAudio />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </div>

      {/* Hero text removed — clean video only */}
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE — Pure cascade, no functional content (Option B)
   ═══════════════════════════════════════════════════════════════ */
export default function BocasDelToro() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: SECTION_COLORS[0] }}>
      <BrandNavigation pageType="property" />
      <HeroSection />

      {CASCADE_SECTIONS.map((section, i) => (
        <CascadeSection key={section.id} section={section} index={i} />
      ))}

      <Footer />
    </div>
  );
}
