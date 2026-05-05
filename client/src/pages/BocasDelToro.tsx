/**
 * NAYARA BOCAS DEL TORO — Pure Cascade (Option B)
 * Romantic Escape Overwater Villas, Panama
 * Full-bleed edge-to-edge media, ocean gradient, ALL assets, no functional content
 * Zero-gap between all sections — one continuous visual journey
 */
import { motion } from "framer-motion";
import NativeVideo from "@/components/NativeVideo";
import { useIsMobile } from "@/hooks/useMobile";
import Footer from "@/components/Footer";
import CrossPropertyCTA from "@/components/CrossPropertyCTA";
import BrandNavigation from "@/components/BrandNavigation";
import BlobVideo from "@/components/BlobVideo";
import RoomSlider, { RoomSliderCard } from "@/components/RoomSlider";
import { BOOKING_URLS } from "@/data/booking";
import {
  AnimateOnScroll,
  TextReveal,
  MultiLineReveal,
  MediaReveal,
  fadeUp,
  DURATION,
  EASE_CINEMATIC,
} from "@/components/motion";
import { LocalBusinessSchema, BreadcrumbListSchema } from "@/components/SEOSchemaEnhanced";

/* ═══════════════════════════════════════════════════════════════
   PALETTE — "Ocean" gradient: pale aqua → deep teal
   Subtle enough to let the photography dominate
   ═══════════════════════════════════════════════════════════════ */
const COLOR_A = "#EAF4FF"; // light blue tint
const COLOR_B = "#EAF4FF"; // light blue tint
const SECTION_COLORS = [
  COLOR_A, // 0 hero
  COLOR_B, // 1 story
  COLOR_A, // 2 rooms
  COLOR_B, // 3 experiences
  COLOR_A, // 4 sustainability
  COLOR_B, // 5 wellness
  COLOR_A, // 6 gastronomy
  COLOR_B, // 7 island cocktails
  COLOR_A, // 8 brunch
  COLOR_B, // 9 marine
  COLOR_A, // 10 island
  COLOR_B, // 11 sunset
  COLOR_A, // 12 beach
  COLOR_B, // 13 reef
  COLOR_A, // 14 aerial
  COLOR_B, // 15 lifestyle
  COLOR_A, // 16 final
  COLOR_B, // 17 dolphins
  COLOR_A, // 18 ocean life
  COLOR_B, // 19 island mood
  "#000000", // 20 nayara by night (deep ocean dark)
];

/* Caribbean Ocean Blue palette */
const PALETTE = {
  text: "#1A0F0A",
  textSecondary: "#1A0F0A",
  textTertiary: "#1A0F0A99",
  primary: "#1E3A8A",
  divider: "#E6DFD5",
};
const BONE = "#FFFFFF";
const DARK_SECTION_IDS = ["nayara-by-night"];

const BOCAS_ROOMS: RoomSliderCard[] = [
  {
    id: "overwater-villa",
    label: "Overwater Villa",
    tagline: "Suspended above the Caribbean Sea with direct ocean access",
    guests: "2 Adults",
    video: "/manus-storage/bocas-accommodations-v_4bd2aaa9.mp4",
    exploreLink: "/bocas-del-toro/rooms",
    bookingUrl: BOOKING_URLS["bocas-del-toro"],
  },
  {
    id: "overwater-villa-deluxe",
    label: "Overwater Villa Deluxe",
    tagline: "Premium overwater experience with enhanced amenities",
    guests: "2 Adults",
    video: "/manus-storage/bocas-accommodations-v_4bd2aaa9.mp4",
    exploreLink: "/bocas-del-toro/rooms",
    bookingUrl: BOOKING_URLS["bocas-del-toro"],
  },
  {
    id: "rainforest-treehouse",
    label: "Treehouse Villa",
    tagline: "Elevated among the jungle canopy with ocean views",
    guests: "2 Adults",
    video: "/manus-storage/bocas-accommodations-h_d33b2e24.mp4",
    exploreLink: "/bocas-del-toro/rooms",
    bookingUrl: BOOKING_URLS["bocas-del-toro"],
  },
  {
    id: "premium-villa",
    label: "Premium Villa — Coming Soon",
    tagline: "Luxury villa experience launching soon",
    guests: "2 Adults",
    video: "/manus-storage/bocas-accommodations-v_4bd2aaa9.mp4",
    exploreLink: "/bocas-del-toro/rooms",
    bookingUrl: BOOKING_URLS["bocas-del-toro"],
  },
];

/* ═══════════════════════════════════════════════════════════════
   CDN ASSETS — EVERY Bocas asset, organized by section
   ═══════════════════════════════════════════════════════════════ */
const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

const ASSETS = {
  // Hero
  heroDesktop: `${CDN}/nbt-horizontal-desktop_0c584342.mp4`,
  heroMobile: `${CDN}/bocas-vertical2_03bbe8e5.mp4`,

  // Section 1 — Story: wellness gallery video2 V (moved from wellness) + lagoon photo H
  storyV: `${CDN}/bocas-gallery-video2_1dd3d81d.mp4`,
  storyH: `${CDN}/74_be6f8cb4.jpg`,

  // Section 2 — Rooms: new drone overwater video V + aerial curved villas H
  roomsV: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-drone-overwater_deda9dc1.mp4",
  roomsH: `${CDN}/80_57ce5c18.jpg`,

  // Section 3 — Experiences: gallery video1 V + resort aerial sunset H
  expV: "/manus-storage/bocas-zapatilla-vertical_30319668.mp4",
  expH: `${CDN}/bocas-resort-aerial-sunset_d536b07d.jpg`,

  // Section 4 — Sustainability: couple villa V + aerial mangroves H
  susV: `${CDN}/bocas-couple-villa-pool_42fafe14.jpg`,
  susH: `${CDN}/bocas-aerial-villas-mangroves_9d5e94f5.jpg`,

  // Section 5 — Wellness: original drone vertical V + overwater deck H
  wellV: `${CDN}/bocas-drone-vertical_e44907ce.mp4`,
  wellH: `${CDN}/bocas-overwater-villas-deck_16555482.jpg`,

  // Section 6 — Gastronomy: copper mule V + tropical brunch H
  gastroV: `${CDN}/4F968B04-CC38-4AB0-98A7-C378A57F9E9A_0c985f05.jpeg`,
  gastroH: "/manus-storage/bocas-resort-24_5778eea7.jpg",

  // Section 6b — Island Cocktails: citrus highball V + coconut bowl H
  gastro2V: `${CDN}/48250DE4-3015-4D89-AD19-54EC065D89EB_b238e17c.jpeg`,
  gastro2H: `${CDN}/78549D66-67E3-43F0-A2FA-D9ABA81DD686_eaaa81e7.jpeg`,

  // Section 6c — Brunch: brioche skillet V + briceferre villa H (reuse old gastroV)
  gastro3V: `${CDN}/AE9734D5-7681-44D7-818F-D79FCA509603_fd830393.jpeg`,
  gastro3H: `${CDN}/bocas-briceferre-villa_c88fea38.jpg`,

  // Section 7 — Marine: briceferre aerial V + lagoon aerial H
  marineV: `${CDN}/bocas-briceferre-aerial_60c5ff23.jpg`,
  marineH: `${CDN}/74_11cc5b01.jpg`,

  // Section 8 — Island: tropical video V + coastline H
  islandV: `${CDN}/bocas_gallery_video_0a7e31ab.mp4`,
  islandH: `${CDN}/79_cfb33bcf.jpg`,

  // Section 9 — Sunset: island paradise V + crystal swimming H
  sunsetV: `${CDN}/83_621b9b3f.jpg`,
  sunsetH: `${CDN}/86_bcac4579.jpg`,

  // Section 10 — Beach & Jungle
  beachV: `${CDN}/bocas-overwater-villa-couple_ff0c8415.jpg`,
  beachH: `${CDN}/97_e7aef760.jpg`,

  // Section 11 — Reef & Marine
  reefV: `${CDN}/bocas-infinity-pool-woman_e4043059.jpg`,
  reefH: `${CDN}/119_e65d6018.jpg`,

  // Section 12 — Aerial Views
  aerialV: `${CDN}/bocas-aerial-resort-treehouses_be44e763.jpg`,
  aerialH: `${CDN}/bocas-aerial-villas-turquoise_858d4570.jpg`,

  // Section 13 — Lifestyle
  lifeV: `${CDN}/bocas-aerial-full-resort_d27193e4.jpg`,
  lifeH: `${CDN}/bocas-crystal-clear-swimming_6e9b8f96.jpg`,

  // Section 14 — Final: landscape V + closing H
  finalV: `${CDN}/88_33345812.jpg`,
  finalH: `${CDN}/bocas-aerial-sunset-panorama_a979b5b2.jpg`,

  // New videos
  delfinesV: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-delfines-vertical_6069e867.mp4",
  cascadeSharedV: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-nbn-cascade-shared_9db0b65c.mp4",
  cascadeBgV: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/cascade-bg-video_dccee724.mp4",
  cascadeExtraV: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-cascade-extra_d5268ba9.mp4",
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
  horizontalFirst?: boolean;
  bgColor: string;
  nextBgColor: string;
  link?: string;
  linkLabel?: string;
  badges?: boolean;
  blogUrl?: string;
  blogTitle?: string;
  blogIsRead?: boolean;
  horizontalLoop?: boolean;
  verticalLoop?: boolean;
  stats?: { label: string; value: string }[];
  hideH?: boolean;
};

const CASCADE_SECTIONS: CascadeSectionData[] = [
  {
    id: "story",
    label: "The Property",
    headline: "Rainforest to Reef",
    body: "Nayara Bocas del Toro is an adults-only sanctuary on a private Caribbean island, where overwater villas float above crystal-clear turquoise waters. Each villa features direct ocean access, private plunge pools, and unobstructed views of pristine beaches and jungle-covered islands.\n\nOverwater villas and rainforest treehouses on a private island in Panama\u2019s Caribbean archipelago. Adults-only, solar-powered, and surrounded by coral reef. Two Michelin Keys. Number one in Central America \u2014 Cond\u00e9 Nast Traveler.",
    verticalSrc: ASSETS.storyV,
    horizontalSrc: "/manus-storage/bocas-horizontal-s2_5f83e958.mp4",
    verticalIsVideo: true,
    horizontalIsVideo: true,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[1],
    nextBgColor: SECTION_COLORS[2],
    link: "/bocas-del-toro",
    badges: true,
    blogUrl: "https://blog.nayararesorts.com/bocas-wins-cond%C3%A9-nast-traveler-award-2025",
    blogTitle: "Condé Nast names Bocas #1 in Central America",
    blogIsRead: true,
  },
  {
    id: "rooms",
    label: "Accommodations",
    headline: "Overwater Villas\n& Treehouse Villas",
    body: "Each overwater villa is a private escape suspended above the Caribbean Sea. With direct ocean access, private plunge pools, and panoramic water views, these accommodations redefine tropical luxury. Wake to the gentle sound of waves and spend your days exploring pristine beaches and vibrant coral reefs.",
    verticalSrc: "/manus-storage/bocas-accommodations-v_4bd2aaa9.mp4",
    horizontalSrc: "/manus-storage/bocas-accommodations-h_d33b2e24.mp4",
    verticalIsVideo: true,
    horizontalIsVideo: true,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[2],
    nextBgColor: SECTION_COLORS[3],
    link: "/bocas-del-toro/rooms",
    linkLabel: "Explore Rooms",
    stats: [
      { value: "30", label: "Overwater Villas" },
      { value: "5★", label: "Forbes Rated" },
      { value: "Private", label: "Plunge Pools" },
    ],
  },
  {
    id: "experiences",
    label: "Experiences",
    headline: "Your Private Boat\n& Captain Await",
    body: "From snorkeling vibrant coral reefs to kayaking through bioluminescent bays, every day brings a new discovery. Explore hidden beaches, dive alongside tropical fish, or simply drift in the warm Caribbean waters that surround your private island retreat.",
    verticalSrc: "/manus-storage/bocas-caribbean-adventure-v_e1c6cfa3.mp4",
    horizontalSrc: "/manus-storage/bocas-exp-horizontal_1b318bff.mp4",
    verticalIsVideo: true,
    horizontalIsVideo: true,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[3],
    nextBgColor: SECTION_COLORS[4],
    link: "/bocas-del-toro/experiences",
    linkLabel: "Explore More",
  },
  {
    id: "sustainability",
    label: "Sustainability",
    headline: "Protecting\nParadise",
    body: "Our commitment to marine conservation and island stewardship ensures that the pristine beauty of Bocas del Toro endures for generations. Through partnerships with local conservation organizations, renewable energy systems, and community programs, we protect the delicate ecosystems that make this place extraordinary.\n\nNayara Bocas del Toro operates on 100% renewable energy and has partnered with the Smithsonian Tropical Research Institute to monitor and protect the coral reefs surrounding Isla Pastores. Our zero single-use plastic policy, coral restoration nurseries, and dolphin-safe boating protocols ensure that every guest visit actively contributes to the health of this irreplaceable Caribbean ecosystem.",
    verticalSrc: "/manus-storage/bocas-delfines_dc5e78fc.mp4",
    horizontalSrc: ASSETS.susH,
    verticalIsVideo: true,
    horizontalIsVideo: false,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[4],
    nextBgColor: SECTION_COLORS[5],
    link: "/bocas-del-toro/sustainability",
    linkLabel: "Explore Beyond Sustainability",
    stats: [
      { value: "100%", label: "Renewable Energy" },
      { value: "CST 5", label: "Certified" },
      { value: "Zero", label: "Single-Use Plastic" },
    ],
    blogUrl: "https://www.youtube.com/watch?v=FPxFzOkKhbw",
    blogTitle: "Pioneering Sustainable Luxury",
    blogIsRead: false,
  },
  {
    id: "wellness",
    label: "Wellness",
    headline: "Serenity,\nElevated",
    body: "Surrender to the rhythm of the ocean at our overwater spa. Treatments draw from Caribbean healing traditions, using locally sourced ingredients and the soothing sounds of the sea to restore body and mind. Each session unfolds above the gentle turquoise waters.",
    verticalSrc: "/manus-storage/bocas-wellness-v2_42b49989.mp4",
    horizontalSrc: "/manus-storage/bocas-wellness-h2_b08668ba.mp4",
    verticalIsVideo: true,
    horizontalIsVideo: true,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[5],
    nextBgColor: SECTION_COLORS[6],
    link: "/bocas-del-toro/wellness",
    linkLabel: "Explore Nature-Based Wellness",
    stats: [
      { value: "Overwater", label: "Spa Pavilion" },
      { value: "Caribbean", label: "Healing Traditions" },
      { value: "Ocean", label: "Sound Therapy" },
    ],
  },
  {
    id: "gastronomy",
    label: "Forest to Table",
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
    link: "/bocas-del-toro/gastronomy",
    linkLabel: "Explore Dining",
  },
  {
    id: "nayara-by-night",
    label: "Nayara by Night",
    headline: "Bioluminescent\nWaters",
    body: "In the warm Caribbean waters surrounding Bocas del Toro, microscopic dinoflagellates create one of nature's most magical phenomena. Every movement in the water triggers an electric blue glow — kayak through bioluminescent bays, swim in liquid starlight, or simply watch the waves illuminate the shoreline after dark.",
    verticalSrc: "/manus-storage/bocas-bynight-v2_ac8a1af2.mp4",
    verticalIsVideo: true,
    verticalRatio: "3/4",
    horizontalSrc: "",
    horizontalIsVideo: false,
    horizontalRatio: "16/9",
    hideH: true,
    bgColor: "#000000",
    nextBgColor: "#000000",
  },
  /* ── TRIMMED: Extended cascade sections hidden for performance ──
   * Island Cocktails, Island Brunch, Marine Life, Island Life, Golden Hour,
   * Beach & Jungle, The Reef, From Above, Island Living, Dolphins,
   * Ocean Immersion, Island Mood, Sunset Farewell
   * These sections are preserved in code but not rendered.
   */
];

/* ═══════════════════════════════════════════════════════════════
   HELPER — Section label
   ═══════════════════════════════════════════════════════════════ */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[11px] tracking-[0.2em] mb-4"
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
  const isDark = DARK_SECTION_IDS.includes(section.id);
  const textColor = isDark ? BONE : PALETTE.text;
  const textSecondaryColor = isDark ? `${BONE}CC` : PALETTE.textSecondary;
  const accentColor = isDark ? BONE : PALETTE.primary;
  const textLeft = index % 2 === 0;
  const PILL_BG = isDark ? "rgba(0,0,0,0.45)" : "rgba(30,58,138,0.72)";
  const PILL_BORDER = isDark ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.25)";
  const display = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
  const body = { fontFamily: "var(--font-body)" } as const;

  const horizontalBlock = section.horizontalSrc ? (
    <div className="hidden md:block relative z-[2]" style={{ backgroundColor: section.horizontalFirst ? section.bgColor : section.nextBgColor }}>
      <MediaReveal delay={0.05}>
        <div className="relative">
          <MediaBlock
            src={section.horizontalSrc}
            isVideo={section.horizontalIsVideo}
            ratio={section.horizontalRatio}
            alt={`${section.label} landscape — Nayara Bocas del Toro`}
            className="w-full"
          />
          {/* Overlay pill CTA — lower third, centered */}
          {section.link && (
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center pb-10 pointer-events-none">
              <a
                href={section.link}
                className="pointer-events-auto inline-flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                  fontSize: "11px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase" as const,
                  color: "#FFFFFF",
                  backgroundColor: PILL_BG,
                  borderColor: PILL_BORDER,
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                }}
              >
                {section.linkLabel || "Explore More"}
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </MediaReveal>
    </div>
  ) : null;

  return (
    <section id={section.id}>
      {/* ── Horizontal FIRST if flagged ── */}
      {section.horizontalFirst && horizontalBlock}
      {/* ── Row: Vertical media + Text column ── */}
      <div className="flex flex-col md:flex-row md:items-stretch" style={{ backgroundColor: section.bgColor }}>
        {/* Vertical media — on mobile: always after text (order-2), on desktop: alternates */}
        <div className={`w-full md:w-1/2 relative z-[2] order-2 ${textLeft ? "md:order-2" : "md:order-1"}`}>
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
          className={`w-full md:w-1/2 flex flex-col justify-center h-full px-10 py-16 lg:px-16 xl:px-20 order-1 ${
            textLeft ? "md:order-1" : "md:order-2"
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
                  className="block text-2xl md:text-[2rem] lg:text-[2.5rem] leading-[1.05] tracking-wide"
                  style={{ ...display, color: textColor }}
                >
                  {line}
                </span>
              ))}
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll variants={fadeUp} delay={0.2}>
            <p
              className="text-[15px] leading-[1.85] max-w-[480px] whitespace-pre-line"
              style={{ ...body, color: textSecondaryColor }}
            >
              {section.body}
            </p>
          </AnimateOnScroll>
          {section.stats && section.stats.length > 0 && (
            <AnimateOnScroll variants={fadeUp} delay={0.28}>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 mb-2">
                {section.stats.map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-[18px] font-light tracking-tight" style={{ fontFamily: "var(--font-display)", color: accentColor }}>{stat.value}</span>
                    <span className="text-[10px] tracking-[0.14em] uppercase mt-0.5" style={{ ...body, fontWeight: 500, color: textSecondaryColor, opacity: 0.65 }}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          )}
          {section.link && !section.horizontalSrc && (
            <AnimateOnScroll variants={fadeUp} delay={0.3}>
              <a
                href={section.link}
                className="inline-block mt-6 text-[11px] tracking-[0.15em] transition-colors hover:opacity-70"
                style={{ ...body, fontWeight: 500, color: accentColor }}
              >
                {section.linkLabel || "Explore More"}
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg> →
              </a>
            </AnimateOnScroll>
          )}
          {section.blogUrl && section.blogTitle && (
            <AnimateOnScroll variants={fadeUp} delay={0.35}>
              <a
                href={section.blogUrl}
                target={section.blogUrl.startsWith("http") ? "_blank" : undefined}
                rel={section.blogUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2.5 mt-8 px-6 py-3 rounded-full border transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                style={{
                  ...body,
                  fontWeight: 500,
                  fontSize: "12px",
                  letterSpacing: "0.08em",
                  color: "#fff",
                  borderColor: "#1E3A8A",
                  backgroundColor: "rgba(30,58,138,0.7)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {section.blogIsRead ? (
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z" />
                  </svg>
                )}
                {section.blogIsRead ? "Read" : "Watch"}: {section.blogTitle}
              </a>
            </AnimateOnScroll>
          )}
          {section.badges && (
            <div className="mt-8 hidden md:block">
              <div className="hidden md:block">
                <video src="/manus-storage/badge-bocas-final_15068a56.mp4" autoPlay muted playsInline className="h-32 lg:h-40 w-auto -ml-8 lg:-ml-10" />
              </div>
            </div>
          )}
        </div>
      </div>
      {/* ── Full-width horizontal media AFTER (default) — hidden on mobile ── */}
      {!section.horizontalFirst && horizontalBlock}
    </section>
  );
}
/* ═══════════════════════════════════════════════════════════════
   HERO — Full-screen video
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const isMobile = useIsMobile();
  const heroVideo = ASSETS.heroDesktop;
  const mobileHeroImage = "/manus-storage/bocas-mobile-hero_580b7cd5.jpg";

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        {isMobile ? (
          <img src={mobileHeroImage} alt="Nayara Bocas del Toro" className="w-full h-full object-cover" />
        ) : (
          <BlobVideo
          src={heroVideo}
          className="w-full h-full object-cover"
          hasAudio={true}
          pillBg="#1E3A8AB3"
          pillColor="#FFFFFF"/>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none" />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-2xl md:text-[2rem] lg:text-[2.5rem] tracking-wide text-center"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          Overwater Villas on a Private Caribbean Island
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-white/60 text-[11px] md:text-xs tracking-[0.25em] uppercase mt-3"
          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
        >
          Bocas del Toro, Panamá
        </motion.p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FUNCTIONAL BREAK — Guest Voices (Reviews)
   Matches Tented Camp ReviewsBreak pattern exactly
   ═══════════════════════════════════════════════════════════════ */
function ReviewsBreak({ bgColor }: { bgColor: string }) {
  return (
    <section
      className="py-20 md:py-28 px-8 md:px-16"
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.2em] mb-6"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.primary }}
          >
            Guest Voices
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.1}>
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5" fill={PALETTE.primary} viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.15}>
          <p
            className="text-[13px] tracking-[0.04em] mb-8"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.textTertiary }}
          >
            Based on 500+ reviews on TripAdvisor
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.2}>
          <blockquote>
            <p
              className="text-[17px] md:text-[20px] leading-relaxed italic mb-4"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.text }}
            >
              "Pure paradise. The overwater villas are breathtaking — waking up to turquoise water beneath your feet is surreal. The staff, the food, the snorkeling — everything exceeded our wildest expectations. We're already planning our return."
            </p>
            <cite
              className="text-[12px] tracking-[0.08em] not-italic"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.textTertiary }}
            >
              — Daniela, TripAdvisor
            </cite>
          </blockquote>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.3}>
          <a
            href="https://www.tripadvisor.com/Hotel_Review-g1577087-d23465752-Reviews-Nayara_Bocas_Del_Toro-Isla_Pastores_Bocas_del_Toro_Province.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 text-[11px] tracking-[0.15em] transition-opacity hover:opacity-70"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.primary }}
          >
            Read All Reviews →
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FUNCTIONAL BREAK — Getting Here
   ═══════════════════════════════════════════════════════════════ */
function GettingHereBreak({ bgColor }: { bgColor: string }) {
  const routes = [
    {
      title: "International Flights",
      description: "Fly into Panama City’s Tocumen International Airport (PTY), a major hub with direct flights from the US, Europe, and Latin America.",
      icon: "✈",
    },
    {
      title: "Domestic Flight to Bocas",
      description: "Take a short domestic flight from Panama City to Bocas del Toro (BOC) — approximately 1 hour. Air Panama operates daily flights.",
      icon: "⏱",
    },
    {
      title: "Private Boat Transfer",
      description: "From Bocas Town, a private boat transfer brings you directly to the resort’s dock on Isla Pastores. The scenic ride takes approximately 20 minutes.",
      icon: "⛵",
    },
    {
      title: "Full Concierge Arrangement",
      description: "Our reservations team can arrange your complete journey — flights, boat transfers, and any ground transportation — so you arrive seamlessly.",
      icon: "✨",
    },
  ];

  return (
    <section
      id="getting-here"
      className="py-20 md:py-28 px-8 md:px-16"
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-[1000px] mx-auto">
        <AnimateOnScroll variants={fadeUp}>
          <SectionLabel>Getting Here</SectionLabel>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.1}>
          <h2 className="mb-4">
            <span
              className="text-2xl md:text-[2rem] lg:text-[2.5rem] leading-[1.1] tracking-wide"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.text }}
            >
              Your Journey to Bocas del Toro
            </span>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.15}>
          <p
            className="text-[15px] leading-relaxed mb-12 md:mb-16 max-w-xl"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
          >
            Nayara Bocas del Toro is located on a private island in Panama’s Caribbean archipelago, accessible by a short flight and scenic boat ride.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {routes.map((route, i) => (
            <AnimateOnScroll key={i} variants={fadeUp} delay={0.1 + i * 0.08}>
              <div className="flex gap-5">
                <div
                  className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-lg"
                  style={{ backgroundColor: "#EAF4FF", color: PALETTE.primary }}
                >
                  {route.icon}
                </div>
                <div>
                  <h3
                    className="text-[16px] mb-2"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: PALETTE.text }}
                  >
                    {route.title}
                  </h3>
                  <p
                    className="text-[13px] leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
                  >
                    {route.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll variants={fadeUp} delay={0.5}>
          <div
            className="mt-12 md:mt-16 p-6"
            style={{ borderLeft: `2px solid ${PALETTE.primary}30` }}
          >
            <p
              className="text-[13px] leading-relaxed"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
            >
              <span style={{ fontWeight: 500, color: PALETTE.text }}>Need help planning your journey?</span>{" "}
              Our reservations team can arrange all transfers and flights. Contact us at{" "}
              <a href="mailto:reservations@nayararesorts.com" className="underline" style={{ color: PALETTE.primary }}>
                reservations@nayararesorts.com
              </a>{" "}
              or call{" "}
              <a href="tel:+18448652002" className="underline" style={{ color: PALETTE.primary }}>
                1-844-865-2002
              </a>.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   RESERVE CTA — "Begin Your Caribbean Adventure"
   ═══════════════════════════════════════════════════════════════ */
function ReserveCTA() {
  const display = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
  const body = { fontFamily: "var(--font-body)" } as const;
  const tailBg = COLOR_A;
  return (
    <section className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: tailBg }}>
      <div className="max-w-[800px] mx-auto text-center">
        <AnimateOnScroll variants={fadeUp}>
          <TextReveal as="h2" className="mb-6" delay={0.1}>
            <span className="text-2xl md:text-4xl lg:text-5xl tracking-wide" style={{ ...display, color: PALETTE.text }}>
              Begin Your Caribbean Adventure
            </span>
          </TextReveal>
          <p className="text-[15px] leading-[1.8] mb-8" style={{ ...body, color: PALETTE.textSecondary }}>
            All-inclusive luxury on a private Caribbean island — overwater villas, pristine reefs, and the untouched beauty of Bocas del Toro await.
          </p>
          <a
            href="/reserve?property=bocas-del-toro"
            className="inline-block px-10 py-3.5 rounded-full text-[11px] tracking-[0.2em] transition-all hover:opacity-80"
            style={{ ...body, fontWeight: 500, backgroundColor: PALETTE.primary, color: "#fff" }}
          >
            Reserve Your Stay
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE — Pure cascade, no functional content (Option B)
   ═══════════════════════════════════════════════════════════════ */
export default function BocasDelToro() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: SECTION_COLORS[0] }}>
      <LocalBusinessSchema
        name="Nayara Bocas del Toro"
        description="Adults-only overwater villas on a private Caribbean island in Panama with bioluminescent bays and coral reefs."
        url="https://nayarabocasdeltoro.com"
        image="https://nayararesorts.manus.space"
        address={{
          streetAddress: "Isla Colon",
          addressLocality: "Bocas del Toro",
          addressRegion: "Bocas del Toro",
          addressCountry: "PA",
          postalCode: "0701",
        }}
        geo={{
          latitude: 9.3522,
          longitude: -82.2384,
        }}
        telephone="+507 6500 8888"
        email="guestexperience@nayarabocasdeltoro.com"
        awards={["Condé Nast Traveler Readers' Choice Awards 2025"]}
      />
      <BreadcrumbListSchema items={[
        { name: "Home", url: "https://nayararesorts.manus.space" },
        { name: "Nayara Bocas del Toro", url: "https://nayarabocasdeltoro.com" },
      ]} />
      <BrandNavigation pageType="property" sectionNav={[
        { id: "rooms", label: "Private Villas" },
        { id: "experiences", label: "Experiences" },
        { id: "sustainability", label: "Sustainability" },
        { id: "wellness", label: "Wellness" },
        { id: "gastronomy", label: "Gastronomy" },
        { id: "night", label: "By Night" },
        { id: "getting-here", label: "Getting Here" },
      ]} />
      <HeroSection />

      {/* Story section */}
      <CascadeSection key={CASCADE_SECTIONS[0].id} section={CASCADE_SECTIONS[0]} index={0} />

      {/* ── Rooms: Horizontal Slider ── */}
      <div id="rooms">
        <RoomSlider
          sectionLabel="Accommodations"
          headline={"Overwater Villas\n& Treehouse Villas"}
          description="Each overwater villa is a private escape suspended above the Caribbean Sea. With direct ocean access, private plunge pools, and panoramic water views."
          rooms={BOCAS_ROOMS}
          palette={{
            bg: COLOR_A,
            text: PALETTE.text,
            textSecondary: PALETTE.textSecondary,
            primary: PALETTE.primary,
            cardBg: COLOR_B,
            cardBorder: `${PALETTE.primary}20`,
            pillBg: PALETTE.primary,
            pillText: "#FFFFFF",
          }}
        />
      </div>

      {/* Remaining cascade sections (experiences, sustainability, wellness, gastronomy, by-night) */}
      {CASCADE_SECTIONS.slice(2).map((section, i) => (
        <CascadeSection key={section.id} section={section} index={i + 2} />
      ))}

      <ReviewsBreak bgColor={COLOR_A} />

      <GettingHereBreak bgColor="#C8DFF0" />
      <ReserveCTA />
      <CrossPropertyCTA
        suggestions={[
          {
            name: "Nayara Springs",
            chapter: "The Hot Springs Sanctuary",
            tagline: "Two adults-only sanctuaries — trade Caribbean overwater for volcanic hot springs hidden in Costa Rica's rainforest.",
            route: "/springs",
            image: "/manus-storage/springs-hero_2b3d0f5a.jpg",
            video: "/manus-storage/cta-springs-ultrawide_c03a39d0.mp4",
            audienceTag: "Adults Only",
          },
          {
            name: "Nayara Alto Atacama",
            chapter: "Where Desert Meets Sky",
            tagline: "Caribbean to cosmos — trade turquoise waters for the driest desert on Earth, with salt flats, geysers, and unmatched stargazing.",
            route: "/alto-atacama",
            image: "/manus-storage/NayaraAltoAtacama_1_38075f4a.jpg",
            video: "/manus-storage/cta-atacama-ultrawide-v2_7749e836.mp4",
            audienceTag: "Families Welcome",
          },
        ]}
        bgColor="#C8DFF0"
        textColor={PALETTE.text}
        textSecondaryColor={PALETTE.textTertiary}
        accentColor={PALETTE.primary}
        dividerColor={PALETTE.divider}
      />
      <Footer bgColor="#1E3A8A" textColor="#FFFFFF" propertyName="BOCAS DEL TORO" />
    </div>
  );
}
