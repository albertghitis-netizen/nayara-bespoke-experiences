/**
 * NAYARA BOCAS DEL TORO , Pure Cascade (Option B)
 * Romantic Escape Overwater Villas, Panama
 * Full-bleed edge-to-edge media, ocean gradient, ALL assets, no functional content
 * Zero-gap between all sections , one continuous visual journey
 */
import { useState, useRef, useEffect, useCallback } from "react";
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
   PALETTE , "Ocean" gradient: pale aqua → deep teal
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
    id: "overwater-villa-deluxe",
    label: "Overwater Villa Deluxe",
    tagline: "Premium overwater experience with enhanced amenities",
    guests: "2 Adults",
    video: "/manus-storage/bocas-overwater-deluxe-v_29c8c2b1.mp4",
    exploreLink: "/bocas-del-toro/rooms",
    bookingUrl: BOOKING_URLS["bocas-del-toro"],
  },
  {
    id: "overwater-villa",
    label: "Overwater Villa",
    tagline: "Suspended above the Caribbean Sea with direct ocean access",
    guests: "2 Adults",
    video: "/manus-storage/bocas-overwater-villa-v_1ed816bc.mp4",
    exploreLink: "/bocas-del-toro/rooms",
    bookingUrl: BOOKING_URLS["bocas-del-toro"],
  },
  {
    id: "rainforest-treehouse",
    label: "Treehouse Villa",
    tagline: "Elevated among the jungle canopy with ocean views",
    guests: "2 Adults",
    video: "/manus-storage/bocas-treehouse-v-new_5808f551.mp4",
    exploreLink: "/bocas-del-toro/rooms",
    bookingUrl: BOOKING_URLS["bocas-del-toro"],
  },
  {
    id: "premium-villa",
    label: "Premium Villa",
    tagline: "Coming Soon",
    guests: "2 Adults",
    video: "",
    exploreLink: "/bocas-del-toro/rooms",
    bookingUrl: BOOKING_URLS["bocas-del-toro"],
  },
];

/* ═══════════════════════════════════════════════════════════════
   CDN ASSETS , EVERY Bocas asset, organized by section
   ═══════════════════════════════════════════════════════════════ */
const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

const ASSETS = {
  // Hero
  heroDesktop: `${CDN}/nbt-horizontal-desktop_0c584342.mp4`,
  heroMobile: `${CDN}/bocas-vertical2_03bbe8e5.mp4`,

  // Section 1 , Story: wellness gallery video2 V (moved from wellness) + lagoon photo H
  storyV: `${CDN}/bocas-gallery-video2_1dd3d81d.mp4`,
  storyH: `${CDN}/74_be6f8cb4.jpg`,

  // Section 2 , Rooms: new drone overwater video V + aerial curved villas H
  roomsV: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-drone-overwater_deda9dc1.mp4",
  roomsH: `${CDN}/80_57ce5c18.jpg`,

  // Section 3 , Experiences: gallery video1 V + resort aerial sunset H
  expV: "/manus-storage/bocas-zapatilla-vertical_30319668.mp4",
  expH: `${CDN}/bocas-resort-aerial-sunset_d536b07d.jpg`,

  // Section 4 , Sustainability: couple villa V + coral reef H
  susV: `${CDN}/bocas-couple-villa-pool_42fafe14.jpg`,
  susH: `/manus-storage/coral_6023f935.jpeg`,

  // Section 5 , Wellness: original drone vertical V + overwater deck H
  wellV: `${CDN}/bocas-drone-vertical_e44907ce.mp4`,
  wellH: `${CDN}/bocas-overwater-villas-deck_16555482.jpg`,

  // Section 6 , Gastronomy: copper mule V + tropical brunch H
  gastroV: `${CDN}/4F968B04-CC38-4AB0-98A7-C378A57F9E9A_0c985f05.jpeg`,
  gastroH: "/manus-storage/bocas-resort-24_5778eea7.jpg",

  // Section 6b , Island Cocktails: citrus highball V + coconut bowl H
  gastro2V: `${CDN}/48250DE4-3015-4D89-AD19-54EC065D89EB_b238e17c.jpeg`,
  gastro2H: `${CDN}/78549D66-67E3-43F0-A2FA-D9ABA81DD686_eaaa81e7.jpeg`,

  // Section 6c , Brunch: brioche skillet V + briceferre villa H (reuse old gastroV)
  gastro3V: `${CDN}/AE9734D5-7681-44D7-818F-D79FCA509603_fd830393.jpeg`,
  gastro3H: `${CDN}/bocas-briceferre-villa_c88fea38.jpg`,

  // Section 7 , Marine: briceferre aerial V + lagoon aerial H
  marineV: `${CDN}/bocas-briceferre-aerial_60c5ff23.jpg`,
  marineH: `${CDN}/74_11cc5b01.jpg`,

  // Section 8 , Island: tropical video V + coastline H
  islandV: `${CDN}/bocas_gallery_video_0a7e31ab.mp4`,
  islandH: `${CDN}/79_cfb33bcf.jpg`,

  // Section 9 , Sunset: island paradise V + crystal swimming H
  sunsetV: `${CDN}/83_621b9b3f.jpg`,
  sunsetH: `${CDN}/86_bcac4579.jpg`,

  // Section 10 , Beach & Jungle
  beachV: `${CDN}/bocas-overwater-villa-couple_ff0c8415.jpg`,
  beachH: `${CDN}/97_e7aef760.jpg`,

  // Section 11 , Reef & Marine
  reefV: `${CDN}/bocas-infinity-pool-woman_e4043059.jpg`,
  reefH: `${CDN}/119_e65d6018.jpg`,

  // Section 12 , Aerial Views
  aerialV: `${CDN}/bocas-aerial-resort-treehouses_be44e763.jpg`,
  aerialH: `${CDN}/bocas-aerial-villas-turquoise_858d4570.jpg`,

  // Section 13 , Lifestyle
  lifeV: `${CDN}/bocas-aerial-full-resort_d27193e4.jpg`,
  lifeH: `${CDN}/bocas-crystal-clear-swimming_6e9b8f96.jpg`,

  // Section 14 , Final: landscape V + closing H
  finalV: `${CDN}/88_33345812.jpg`,
  finalH: `${CDN}/bocas-aerial-sunset-panorama_a979b5b2.jpg`,

  // New videos
  delfinesV: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-delfines-vertical_6069e867.mp4",
  cascadeSharedV: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-nbn-cascade-shared_9db0b65c.mp4",
  cascadeBgV: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/cascade-bg-video_dccee724.mp4",
  cascadeExtraV: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-cascade-extra_d5268ba9.mp4",
};

/* ═══════════════════════════════════════════════════════════════
   SECTION DATA , Pure visual storytelling, no functional content
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
  overlayOnVideo?: boolean;
  hideVerticalOnMobile?: boolean;
  verticalOverlayLabel?: string;
};

const CASCADE_SECTIONS: CascadeSectionData[] = [
  {
    id: "story",
    label: "The Property",
    headline: "Rainforest to Reef",
    body: "Nayara Bocas del Toro is an adults-only sanctuary on a private Caribbean island, where overwater villas float above crystal-clear turquoise waters. Each villa features direct ocean access, private plunge pools, and unobstructed views of pristine beaches and jungle-covered islands.\n\nOverwater villas and rainforest treehouses on a private island in Panama’s Caribbean archipelago. Adults-only, solar-powered, and surrounded by coral reef. Two Michelin Keys. Number one in Central America — Condé Nast Traveler.",
    verticalSrc: "/manus-storage/bocas-story-v-new_107d5bb2.mp4",
    horizontalSrc: "",
    verticalIsVideo: true,
    horizontalIsVideo: false,
    hideH: true,
    hideVerticalOnMobile: true,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[1],
    nextBgColor: SECTION_COLORS[2],
    badges: true,
    blogUrl: "/blog/bocas-conde-nast",
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
    hideH: true,
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
    body: "From snorkeling vibrant coral reefs to kayaking through bioluminescent bays, every day brings a new discovery. Explore hidden beaches, dive alongside tropical fish, or simply drift in the warm Caribbean waters that surround your private island retreat.\n\nWith so many offsite activities to choose from, the only way to experience them all is with a private boat and captain. All our captains are trained naturalists who love sharing their local expertise with guests, from dolphin-watching at sunset and island-hopping, to snorkeling coral reefs teeming with life. Stock the boat with Champagne and hors d'oeuvre to turn your excursion into a once-in-a-lifetime experience.\n\nBocas del Toro is considered the Galápagos of the Caribbean because of its incredible biodiversity. Discover a starfish sanctuary, sea turtle nesting ground, sloth island, dolphin bay, and thousands of microorganisms that come together in an awesome display of bioluminescence.",
    verticalSrc: "/manus-storage/bocas-experiences-v-boat_62bf907e.mp4",
    horizontalSrc: "",
    verticalIsVideo: true,
    horizontalIsVideo: true,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[3],
    nextBgColor: SECTION_COLORS[4],
    link: "/bocas-del-toro/experiences",
    linkLabel: "Explore Experiences",
    overlayOnVideo: true,
  },
  {
    id: "sustainability",
    label: "Sustainability",
    headline: "Protecting\nParadise",
    body: "Our commitment to marine conservation and island stewardship ensures that the pristine beauty of Bocas del Toro endures for generations. Through partnerships with local conservation organizations, renewable energy systems, and community programs, we protect the delicate ecosystems that make this place extraordinary.\n\nNayara Bocas del Toro operates on 100% renewable energy and has partnered with the Smithsonian Tropical Research Institute to monitor and protect the coral reefs surrounding Isla Pastores. Our zero single-use plastic policy, coral restoration nurseries, and dolphin-safe boating protocols ensure that every guest visit actively contributes to the health of this irreplaceable Caribbean ecosystem.",
    verticalSrc: "/manus-storage/bocas-sustainability-v-new2_a97923a3.mp4",
    horizontalSrc: "",
    verticalIsVideo: true,
    horizontalIsVideo: false,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    hideH: true,
    bgColor: SECTION_COLORS[4],
    nextBgColor: SECTION_COLORS[5],
    link: "/bocas-del-toro/sustainability",
    linkLabel: "Explore Coral Reef Restoration",
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
    body: "Surrender to the rhythm of the ocean at our new Treehouse Spa, suspended among the canopy with panoramic views of the Caribbean. Treatments draw from Caribbean healing traditions, using locally sourced ingredients and the soothing sounds of the sea to restore body and mind.\n\nEnjoy every massage or treatment from the comfort of your private villa terrace or join us in our peaceful open-air spa pavilion. Indulge in a Swedish or deep tissue massage, savor an organic coffee or dead sea salt scrub, or experience our signature couples treatment on the private deck of your villa with nothing but the sound of the ocean in the background.\n\nReservations are available 24 hours in advance, and our extensive spa book offers a curated collection of experiences designed to restore, rejuvenate, and reconnect you with the natural rhythms of island life.",
    verticalSrc: "/manus-storage/bocas-wellness-v-new2_8acfff31.mp4",
    horizontalSrc: "",
    verticalIsVideo: true,
    horizontalIsVideo: false,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    overlayOnVideo: false,
    bgColor: SECTION_COLORS[5],
    nextBgColor: SECTION_COLORS[6],
    link: "/bocas-del-toro/wellness",
    linkLabel: "Explore Nature-Based Wellness",
    verticalOverlayLabel: "Explore Treehouse Spa",
    stats: [
      { value: "Overwater", label: "Spa Pavilion" },
      { value: "Caribbean", label: "Healing Traditions" },
      { value: "Ocean", label: "Sound Therapy" },
    ],
  },
  {
    id: "gastronomy",
    label: "A Taste of Place",
    headline: "Elephant\nHouse",
    body: "Our fine dining restaurant, the majestic Elephant House, is a 100-year-old structure shipped halfway around the world from Bali, Indonesia. Take in the moon glistening on the water and spot a stingray gliding by as you delight in lobster paired with the perfect chilled white wine. By day, the poolside Coral Café offers a cheerful alfresco setting for a leisurely breakfast or lunch.\n\nAn unexpected culinary journey in the middle of the Caribbean Sea. Our chef creates a new meticulously crafted dinner menu every night of the week, using the finest hand-selected meats, local seafood directly from the sea, and fresh organic vegetables and ingredients.",
    verticalSrc: "/manus-storage/fb12-bocas-gastronomy_8f3f15ff.jpg",
    horizontalSrc: "",
    verticalIsVideo: false,
    horizontalIsVideo: false,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    hideH: true,
    bgColor: SECTION_COLORS[6],
    nextBgColor: SECTION_COLORS[7],
    link: "/bocas-del-toro/gastronomy",
    linkLabel: "Explore A Taste of Place",
    verticalOverlayLabel: "Explore Elephant House",
  },
  {
    id: "nayara-by-night",
    label: "Nayara by Night",
    headline: "Bioluminescent\nWaters",
    body: "In the warm Caribbean waters surrounding Bocas del Toro, microscopic dinoflagellates create one of nature's most magical phenomena. Every movement in the water triggers an electric blue glow , kayak through bioluminescent bays, swim in liquid starlight, or simply watch the waves illuminate the shoreline after dark.",
    verticalSrc: "/manus-storage/bocas-bynight-bioluminescence_628c75d7.jpg",
    verticalIsVideo: false,
    verticalRatio: "3/4",
    horizontalSrc: "",
    horizontalIsVideo: false,
    horizontalRatio: "16/9",
    overlayOnVideo: false,
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
   HELPER , Section label
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
   HELPER , Renders video or image
   ═══════════════════════════════════════════════════════════════ */
function MediaBlock({
  src,
  isVideo,
  ratio,
  alt,
  className = "",
  fillHeight = false,
}: {
  src: string;
  isVideo: boolean;
  ratio: string;
  alt?: string;
  className?: string;
  fillHeight?: boolean;
}) {
  return (
    <div className={`overflow-hidden ${fillHeight ? "h-full" : ""} ${className}`} style={fillHeight ? undefined : { aspectRatio: ratio }}>
      {isVideo ? (
        <NativeVideo src={src} className="w-full h-full object-cover" />
      ) : (
        <img src={src} alt={alt || ""} className="w-full h-full object-cover" loading="lazy" />
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CASCADE SECTION , Full-bleed desktop, stacked mobile
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
            alt={`${section.label} landscape , Nayara Bocas del Toro`}
            className="w-full"
          />
          {/* Overlay pill CTA , lower third, centered */}
          {section.link && (
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center pb-10 pointer-events-none">
              <a
                href={section.link}
                className="pointer-events-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all duration-300 hover:scale-[1.03] hover:shadow-lg w-fit"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                  fontSize: "11px",
                  letterSpacing: "0.15em",
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

  /* ── Overlay mode: text overlaid on full-width horizontal ── */
  if (section.overlayOnVideo && section.horizontalSrc) {
    return (
      <section id={section.id} style={{ backgroundColor: section.bgColor || "#000" }}>
        <div className="relative w-full">
          <div style={{ aspectRatio: section.horizontalRatio || "16/9" }}>
            <NativeVideo src={section.horizontalSrc} className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end pb-12 md:pb-16 lg:pb-20 px-8 md:px-16 lg:px-24">
            <AnimateOnScroll variants={fadeUp}>
              <p className="text-[11px] tracking-[0.25em] uppercase mb-4 text-white/70" style={{ ...body, fontWeight: 500 }}>{section.label}</p>
            </AnimateOnScroll>
            <AnimateOnScroll variants={fadeUp} delay={0.1}>
              <h2 className="mb-4 md:mb-6">
                {section.headline.split("\n").map((line, i) => (
                  <span key={i} className="block text-2xl md:text-[2rem] lg:text-[2.5rem] leading-[1.05] tracking-wide text-white" style={{ ...display }}>{line}</span>
                ))}
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll variants={fadeUp} delay={0.2}>
              <p className="text-[15px] leading-[1.85] max-w-[480px] text-white/85" style={{ ...body }}>
                {section.body.split("\n\n")[0]}
              </p>
            </AnimateOnScroll>
            {section.link && (
              <AnimateOnScroll variants={fadeUp} delay={0.3}>
                <a
                  href={section.link}
                  className="inline-flex items-center gap-2 mt-6 px-4 py-2.5 rounded-full border border-white/40 backdrop-blur-md text-white text-[11px] tracking-[0.15em] uppercase font-medium transition-all hover:bg-white/10 w-fit"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {section.linkLabel || "Explore"}
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                </a>
              </AnimateOnScroll>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={section.id}>
      {/* ── Horizontal FIRST if flagged ── */}
      {section.horizontalFirst && horizontalBlock}
      {/* ── Row: Vertical media + Text column ── */}
      <div className="flex flex-col md:flex-row md:items-stretch" style={{ backgroundColor: section.bgColor }}>
        {/* Vertical media , on mobile: always after text (order-2), on desktop: alternates */}
        <div className={`w-full md:w-1/2 relative z-[2] order-2 h-full ${textLeft ? "md:order-2" : "md:order-1"} ${section.hideVerticalOnMobile ? "hidden md:block" : ""}`}>
            <MediaBlock
              src={section.verticalSrc}
              isVideo={section.verticalIsVideo}
              ratio={section.verticalRatio}
              alt={`${section.label} , Nayara Bocas del Toro`}
              fillHeight={true}
            />
            {section.verticalOverlayLabel && (
              <div className="absolute bottom-6 left-6 z-10">
                <span
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-[11px] tracking-[0.14em] uppercase"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 500,
                    color: "#fff",
                    backgroundColor: "rgba(255,255,255,0.12)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  {section.verticalOverlayLabel}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            )}
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
                className="inline-flex items-center gap-2 mt-6 px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md w-fit"
                style={{ ...body, fontWeight: 500, fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#FFFFFF", backgroundColor: PALETTE.primary }}
              >
                {section.linkLabel || "Explore More"}
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </AnimateOnScroll>
          )}

          {section.badges && (
            <div className="mt-8 hidden md:block">
              <div className="hidden md:block">
                <video src="/manus-storage/badge-bocas-final_15068a56.mp4" autoPlay muted playsInline className="h-32 lg:h-40 w-auto -ml-16 lg:-ml-20" />
              </div>
            </div>
          )}
        </div>
      </div>
      {/* ── Full-width horizontal media AFTER (default) , hidden on mobile ── */}
      {!section.horizontalFirst && horizontalBlock}
    </section>
  );
}
/* ═══════════════════════════════════════════════════════════════
   HERO , Full-screen video
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
   BOCAS JOURNAL , Horizontal slider with real Bocas entries + placeholders
   Replaces Guest Reviews section
   ═══════════════════════════════════════════════════════════════ */
interface BocasJournalCard {
  id: string;
  label: string;
  title: string;
  image: string;
  href: string | null;
  placeholder?: boolean;
}

const BOCAS_JOURNAL_CARDS: BocasJournalCard[] = [
  {
    id: "conde-nast-bocas",
    label: "Read",
    title: "#1 Resort in Central America — Condé Nast Traveler 2025",
    image: "/manus-storage/bocas-aerial-cover_46f0bbf4.jpg",
    href: "/blog/bocas-conde-nast",
  },
  {
    id: "treehouse-dreams",
    label: "Read",
    title: "The Treehouse of Your Dreams",
    image: "/manus-storage/bocas-treehouse-cover_5eb7138e.jpg",
    href: "/blog/treehouse-dreams",
  },
  {
    id: "floating-paradise",
    label: "Read",
    title: "Your Floating Paradise in the Galápagos of the Caribbean",
    image: "https://blog.nayararesorts.com/hubfs/Nayara%20Bocas%20del%20Toro%20(2).webp",
    href: "/blog/floating-paradise",
  },
  {
    id: "private-island-bocas",
    label: "Read",
    title: "The Private Island Paradise of Bocas del Toro",
    image: "https://blog.nayararesorts.com/hubfs/Imported_Blog_Media/The-Private-Island-Paradise-of-Bocas-del-Toro-4.jpg",
    href: "/blog/private-island-bocas",
  },
  { id: "placeholder-1", label: "Watch", title: "Coming Soon", image: "", href: null, placeholder: true },
  { id: "placeholder-2", label: "Listen", title: "Coming Soon", image: "", href: null, placeholder: true },
  { id: "placeholder-3", label: "Read", title: "Coming Soon", image: "", href: null, placeholder: true },
  { id: "placeholder-4", label: "Watch", title: "Coming Soon", image: "", href: null, placeholder: true },
  { id: "placeholder-5", label: "Read", title: "Coming Soon", image: "", href: null, placeholder: true },
];

function BocasJournalSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [mobileCard, setMobileCard] = useState(0);
  const totalPages = 3;
  const display = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
  const body = { fontFamily: "var(--font-body)" } as const;

  const scrollToPage = (page: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: page * el.clientWidth, behavior: "smooth" });
    setCurrentPage(page);
  };
  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const newPage = Math.round(el.scrollLeft / el.clientWidth);
    setCurrentPage(newPage);
  }, []);
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el?.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToMobileCard = (idx: number) => {
    const el = mobileScrollRef.current;
    if (!el) return;
    el.scrollTo({ left: idx * el.clientWidth, behavior: "smooth" });
    setMobileCard(idx);
  };
  const handleMobileScroll = useCallback(() => {
    const el = mobileScrollRef.current;
    if (!el) return;
    setMobileCard(Math.round(el.scrollLeft / el.clientWidth));
  }, []);
  useEffect(() => {
    const el = mobileScrollRef.current;
    if (el) el.addEventListener("scroll", handleMobileScroll, { passive: true });
    return () => el?.removeEventListener("scroll", handleMobileScroll);
  }, [handleMobileScroll]);

  return (
    <section className="relative py-20 md:py-28 px-6 md:px-10 overflow-hidden" style={{ backgroundColor: COLOR_A }}>
      <div className="relative z-10 max-w-[1200px] mx-auto">
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.2em] mb-4"
            style={{ ...body, fontWeight: 500, color: PALETTE.primary }}
          >
            Stories
          </p>
        </AnimateOnScroll>
        <TextReveal as="h2" className="mb-14 md:mb-20" delay={0.1}>
          <span
            className="text-2xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-wide"
            style={{ ...display, color: PALETTE.text }}
          >
            Explore Nayara Bocas
          </span>
        </TextReveal>

        {/* Desktop: 3 cards per page */}
        <div className="hidden md:block relative">
          <button
            onClick={() => scrollToPage(currentPage - 1)}
            disabled={currentPage === 0}
            className="absolute -left-16 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 disabled:opacity-0 disabled:pointer-events-none hover:opacity-80"
            style={{ backgroundColor: PALETTE.primary }}
            aria-label="Previous"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={() => scrollToPage(currentPage + 1)}
            disabled={currentPage >= totalPages - 1}
            className="absolute -right-16 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 disabled:opacity-0 disabled:pointer-events-none hover:opacity-80"
            style={{ backgroundColor: PALETTE.primary }}
            aria-label="Next"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide"
            style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
          >
            {[0, 1, 2].map((pageIdx) => (
              <div key={pageIdx} className="flex-shrink-0 w-full grid grid-cols-3 gap-5" style={{ scrollSnapAlign: "start" }}>
                {BOCAS_JOURNAL_CARDS.slice(pageIdx * 3, pageIdx * 3 + 3).map((card) => (
                  <BocasJournalCard key={card.id} card={card} />
                ))}
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                onClick={() => scrollToPage(i)}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{ backgroundColor: PALETTE.primary, opacity: currentPage === i ? 1 : 0.2 }}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile: 1 card at a time */}
        <div className="md:hidden relative">
          <div
            ref={mobileScrollRef}
            className="flex overflow-x-auto scrollbar-hide"
            style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
          >
            {BOCAS_JOURNAL_CARDS.map((card) => (
              <div key={card.id} className="flex-shrink-0 w-full px-1" style={{ scrollSnapAlign: "start" }}>
                <BocasJournalCard card={card} />
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {BOCAS_JOURNAL_CARDS.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToMobileCard(i)}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{ backgroundColor: PALETTE.primary, opacity: mobileCard === i ? 1 : 0.2 }}
                aria-label={`Card ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <AnimateOnScroll variants={fadeUp} delay={0.3}>
          <div className="mt-12 text-center">
            <a
              href="/journal"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-[11px] tracking-[0.12em] uppercase transition-all duration-500 hover:opacity-80"
              style={{ ...body, fontWeight: 500, backgroundColor: PALETTE.primary, color: "#fff" }}
            >
              Enter the Journal
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

function BocasJournalCard({ card }: { card: BocasJournalCard }) {
  const body = { fontFamily: "var(--font-body)", fontWeight: 500 } as const;
  const display = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
  const isDummy = !card.image;
  return (
    <div className="flex flex-col">
      <div
        className="group relative w-full overflow-hidden rounded-lg"
        style={{ aspectRatio: "1/1", backgroundColor: isDummy ? "#C8DFF0" : "#1c1917" }}
      >
        {isDummy ? (
          <div className="absolute top-4 left-4">
            <span
              className="inline-block px-3 py-1 rounded-full text-[9px] tracking-[0.25em] uppercase"
              style={{ ...body, backgroundColor: PALETTE.primary, color: "#fff" }}
            >
              {card.label}
            </span>
          </div>
        ) : (
          <a href={card.href || "#"} className="block w-full h-full">
            <img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute top-4 left-4">
              <span
                className="inline-block px-3 py-1 rounded-full text-[9px] tracking-[0.25em] uppercase"
                style={{ ...body, backgroundColor: PALETTE.primary, color: "#fff" }}
              >
                {card.label}
              </span>
            </div>
          </a>
        )}
      </div>
      <div className="pt-4 pb-2">
        <h3
          className="text-[14px] md:text-[15px] leading-[1.3]"
          style={{ ...display, color: PALETTE.text }}
        >
          {card.title}
        </h3>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FUNCTIONAL BREAK , Getting Here
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
      description: "Take a short domestic flight from Panama City to Bocas del Toro (BOC) , approximately 1 hour. Air Panama operates daily flights.",
      icon: "⏱",
    },
    {
      title: "Private Boat Transfer",
      description: "From Bocas Town, a private boat transfer brings you directly to the resort’s dock on Isla Pastores. The scenic ride takes approximately 20 minutes.",
      icon: "⛵",
    },
    {
      title: "Full Concierge Arrangement",
      description: "Our reservations team can arrange your complete journey , flights, boat transfers, and any ground transportation , so you arrive seamlessly.",
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
   RESERVE CTA , "Begin Your Caribbean Adventure"
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
            All-inclusive luxury on a private Caribbean island , overwater villas, pristine reefs, and the untouched beauty of Bocas del Toro await.
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
   MAIN PAGE , Pure cascade, no functional content (Option B)
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
          forceVideoLeft={true}
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

      <BocasJournalSection />

      <GettingHereBreak bgColor="#C8DFF0" />
      <ReserveCTA />
      <CrossPropertyCTA
        suggestions={[
          {
            name: "Nayara Springs",
            chapter: "The Hot Springs Sanctuary",
            tagline: "Two adults-only sanctuaries , trade Caribbean overwater for volcanic hot springs hidden in Costa Rica's rainforest.",
            route: "/springs",
            image: "/manus-storage/springs-hero_2b3d0f5a.jpg",
            video: "/manus-storage/cta-springs-ultrawide_c03a39d0.mp4",
            audienceTag: "Adults Only",
          },
          {
            name: "Nayara Alto Atacama",
            chapter: "Where Desert Meets Sky",
            tagline: "Caribbean to cosmos , trade turquoise waters for the driest desert on Earth, with salt flats, geysers, and unmatched stargazing.",
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
      <Footer bgColor="#1E3A8A" textColor="#FFFFFF" propertyName="Bocas del Toro" />
    </div>
  );
}
