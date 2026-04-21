/**
 * NAYARA ALTO ATACAMA — Property Home Page
 * Extended gradient cascade: warm sand → deep earth
 * Every available asset shown — no repeats
 * Varied aspect ratios per section, zero-gap between all elements
 */
import { motion } from "framer-motion";
import BlobVideo from "@/components/BlobVideo";
import NativeVideo from "@/components/NativeVideo";
import { useIsMobile } from "@/hooks/useMobile";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import { properties, type Property } from "@/data/properties";
import {
  AnimateOnScroll,
  TextReveal,
  MultiLineReveal,
  MediaReveal,
  fadeUp,
  DURATION,
  EASE_CINEMATIC,
} from "@/components/motion";

const atacama = properties.find((p: Property) => p.id === "alto-atacama")!;

/* ═══════════════════════════════════════════════════════════════
   PALETTE — Extended "Mars" gradient: warm sand → deep earth
   More sections = more gradient steps
   ═══════════════════════════════════════════════════════════════ */
const COLOR_A = "#F0EBE2"; // warm sand — unified background
const COLOR_B = "#F0EBE2"; // warm sand — unified background
const SECTION_COLORS = [
  COLOR_A, // 0 hero
  COLOR_B, // 1 story
  COLOR_A, // 2 rooms
  COLOR_B, // 3 experiences
  COLOR_A, // 4 sustainability
  COLOR_B, // 5 wellness
  COLOR_A, // 6 a taste of place
  COLOR_B, // 7 desert ingredients
  COLOR_A, // 8 the art of plating
  COLOR_B, // 9 sweet finales
  COLOR_A, // 10 dining & stars
  COLOR_B, // 11 stargazing
  COLOR_A, // 12 landscape
  COLOR_B, // 13 wildlife
  COLOR_A, // 14 adventure
  COLOR_B, // 15 dusk
  COLOR_A, // 16 architecture
  COLOR_B, // 17 the pool
  COLOR_A, // 18 flamingo lagoon
];

const PALETTE = {
  text: "#3B2B26",
  textSecondary: "#67737C",
  textTertiary: "#9A9086",
  primary: "#6F463D",
  divider: "#E6DFD5",
};

/* ═══════════════════════════════════════════════════════════════
   CDN ASSETS — EVERY Atacama asset, organized by section
   ═══════════════════════════════════════════════════════════════ */
// Removed slow CloudFront CDN — using /manus-storage/ for all media

const ASSETS = {
  // Hero (clip 1 — horizontal 16:9)
  heroDesktop: "/manus-storage/cropped_clip1_16x9_c0ed748e.mp4",
  heroMobile: "/manus-storage/cropped_clip1_16x9_c0ed748e.mp4",

  // Clip 2 — vertical 3:4
  clip2V: "/manus-storage/atacama-s1-vertical-v3_b6fd3496.mp4",

  // Clip 3 — horizontal 16:9
  clip3H: "/manus-storage/atacama-s2-horizontal-v2_347c0422.mp4",

  // Clip 4 — vertical 3:4
  clip4V: "/manus-storage/atacama-s3-vertical_ba3fbf5a.mp4",

  // Clip 5 — horizontal 16:9
  clip5H: "/manus-storage/atacama-s4-horizontal_4bf0d8e9.mp4",

  // Clip 6 — vertical 3:4
  clip6V: "/manus-storage/atacama-s1-vertical_b68ea605.mp4",

  // Clip 7 — horizontal 16:9
  clip7H: "/manus-storage/clip7-h_c78572cc.mp4",

  // Clip 8 — vertical 3:4
  clip8V: "/manus-storage/clip8-v_d07a3c21.mp4",

  // Section 1 — Story: cascade desert aerial (cropped, no black bars)
  storyV: "/manus-storage/atacama-cascade-2-vertical_fe184d4a.mp4",
  storyH: "/manus-storage/atacama-cascade-1-hero-h_fbfccdb3.mp4",

  // Section 2 — Rooms: cascade hotel property aerial (cropped, no black bars)
  roomsV: "/manus-storage/atacama-cascade-4-accom-v_a9869d1c.mp4",
  roomsH: "/manus-storage/atacama-accommodations-h_ce136480.mp4",

  // Section 3 — Experiences: cascade salt flat (cropped, no black bars)
  expV: "/manus-storage/atacama-cascade-2-vertical_fe184d4a.mp4",
  expH: "/manus-storage/atacama-cascade-3-accom-h_3c07c09a.mp4",

  // Section 4 — Sustainability: cascade flamingos (cropped, no black bars)
  susV: "/manus-storage/atacama-s7-vertical-v2_48f270ff.mp4",
  susH: "/manus-storage/atacama-s6-horizontal_ba236b53.mp4",

  // Section 5 — Wellness: cascade spa/wellness (cropped, no black bars)
  wellV: "/manus-storage/atacama-cascade-2-vertical_fe184d4a.mp4",
  wellH: "/manus-storage/atacama-cascade-1-hero-h_fbfccdb3.mp4",

  // Section 6 — A Taste of Place: avocado mousse V + seared meat H
  gastroV: "/manus-storage/atacama-cascade-2-vertical_fe184d4a.mp4",
  gastroH: "/manus-storage/atacama-cascade-1-hero-h_fbfccdb3.mp4",

  // Section 6b — Desert Ingredients: spice jars V + avocado mousse H
  gastro2V: "/manus-storage/atacama-cascade-4-accom-v_a9869d1c.mp4",
  gastro2H: "/manus-storage/atacama-accommodations-h_ce136480.mp4",

  // Section 6c — The Art of Plating: tuna sashimi V + beetroot dessert H
  gastro3V: "/manus-storage/5E8F3F4E-BF87-4A5F-BBB2-2737E82CE424_ad01d722.jpeg",
  gastro3H: "/manus-storage/96454375-D840-4B02-AEF7-98893DAD18AA_516b1771.jpeg",

  // Section 6d — Sweet Finales: crostini wine V + honeycomb consommé H
  gastro4V: "/manus-storage/AA6682ED-A08D-4F1E-A869-56222938841C_38b364f9.jpeg",
  gastro4H: "/manus-storage/ACDF665C-3B75-4A15-9806-4E325514B1A9_b1da71b1.JPG",

  // Section 6e — Meringue star dessert (H) + Milky Way bus (V, moved here)
  gastro5V: "/manus-storage/atacama-milkyway-bus_88a347bc.jpg",
  gastro5H: "/manus-storage/5F6D022D-5F89-45EF-93CF-878F0A7BCDEF_c678c03f.JPG",

  // Section 7 — Stargazing: Milky Way pillar V + Valle de la Luna H video
  starV: "/manus-storage/atacama-milkyway-pillar_d9301ecc.jpg",
  starH: "/manus-storage/atacama-valle-luna-horizontal_1f6f7599.mp4",

  // Section 8 — Landscape: Rainbow Valley aerial H video + Atacama00003 V video
  landV: "/manus-storage/Video_Nayara_Atacama00003_aeb971e9.MP4",
  landH: "/manus-storage/atacama-rainbow-valley-aerial_55c86ce4.mp4",

  // Section 9 — Wildlife: flamingos golden photo H + Atacama00007 V video
  wildV: "/manus-storage/Video_Nayara_Atacama00007_8576aa55.MP4",
  wildH: "/manus-storage/atacama-flamingos-golden_7a564e58.jpg",

  // Section 10 — Adventure: cfnetwork desert walk H + trim V (MOV)
  advV: "/manus-storage/trim_cb137ccb.mp4",
  advH: "/manus-storage/cfnetwork_b9ae0ca4.mp4",

  // Section 11 — Dusk: nbn dusk resort H + nbn dusk V
  duskV: "/manus-storage/nbn-atacama-dusk_9201508f.webp",
  duskH: "/manus-storage/nbn-atacama-dusk-resort_b5829c95.webp",

  // Section 12 — Architecture: courtyard cliff V + hero desktop photo H
  archV: "/manus-storage/atacama-courtyard-cliff-vertical_28dfbf06.mp4",
  archH: "/manus-storage/atacama-hero-new_42efa04c.mp4",

  // Gallery extras
  flamingoLagoon: "/manus-storage/atacama-flamingo-lagoon-audio_8cc7cdf9.mp4",
  poolSunset: "/manus-storage/atacama-pool-sunset_c4a2f7e1.jpg",
  stargazingPhoto: "/manus-storage/atacama-stargazing_f5c3d8a4.jpg",
  suiteInterior: "/manus-storage/atacama-suite-interior_d3b1e9f2.jpg",
  heroDesktopPhoto: "/manus-storage/4O1A1949-NayaraAltoAtacama-RainbowValley-byBriceFerreStudio(1)_a94c41d0.jpeg",
  propCard: "/manus-storage/prop-atacama_704b4f26.jpg",
};

const display = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)" } as const;

function SectionLabel({ children, color }: { children: React.ReactNode; color?: string }) {
  return (
    <p
      className="text-[11px] tracking-[0.2em] mb-4"
      style={{ ...body, fontWeight: 500, color: color || PALETTE.primary }}
    >
      {children}
    </p>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MEDIA COMPONENT — Handles both video and image with proper ratio
   ═══════════════════════════════════════════════════════════════ */
function MediaBlock({
  src,
  alt,
  isVideo,
  aspectRatio,
}: {
  src: string;
  alt: string;
  isVideo: boolean;
  aspectRatio: string;
}) {
  return (
    <div className="overflow-hidden w-full block leading-[0]" style={{ aspectRatio }}>
      {isVideo ? (
        <NativeVideo src={src} className="w-full h-full object-cover" />
      ) : (
        <img src={src} alt={alt} className="w-full h-full object-cover block" loading="lazy" />
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CASCADE TEXT BLOCK — Extracted for flat interleaved rendering
   ═══════════════════════════════════════════════════════════════ */
function CascadeTextBlock({
  label,
  headline,
  description,
  link,
  linkLabel = "Explore More",
  blogLink,
  blogLinkLabel,
  badges,
  badgeImage,
}: {
  label: string;
  headline: string;
  description: string;
  link?: string;
  linkLabel?: string;
  blogLink?: string;
  blogLinkLabel?: string;
  badges?: boolean;
  badgeImage?: string;
}) {
  return (
    <div className="flex flex-col justify-center">
      <AnimateOnScroll variants={fadeUp}>
        <SectionLabel>{label}</SectionLabel>
      </AnimateOnScroll>
      <TextReveal as="h2" className="mb-6" delay={0.1}>
        <span
          className="text-2xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-wide"
          style={{ ...display, color: PALETTE.text }}
        >
          {headline}
        </span>
      </TextReveal>
      <AnimateOnScroll variants={fadeUp} delay={0.3}>
        <p className="text-[15px] leading-[1.8] mb-6" style={{ ...body, color: PALETTE.textSecondary }}>
          {description}
        </p>
        {blogLink && (
          <a
            href={blogLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[12px] tracking-[0.08em] mb-6 transition-colors hover:opacity-70"
            style={{ ...body, fontWeight: 500, color: PALETTE.primary, fontStyle: "italic" }}
          >
            {blogLinkLabel || "Read More on the Journal"} ↗
          </a>
        )}
      </AnimateOnScroll>
      {badgeImage && (
        <div className="mt-8 flex items-center justify-start gap-6 md:gap-8 -ml-1">
          {/* Michelin 2 Keys */}
          <img
            src="/manus-storage/atacama-badge-michelin_e5872f3c.png"
            alt="Michelin 2 Keys 2025"
            className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
            loading="lazy"
          />
          {/* Leading Hotels of the World */}
          <img
            src="/manus-storage/atacama-badge-leading-hotels_aa22006a.png"
            alt="The Leading Hotels of the World"
            className="h-16 md:h-20 lg:h-24 w-auto object-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
            loading="lazy"
          />
          {/* Distinción Turismo Sustentable — larger for text readability */}
          <img
            src="/manus-storage/atacama-badge-s-sustainability_35d0a2a8.png"
            alt="Distinción Turismo Sustentable"
            className="h-20 md:h-24 lg:h-28 w-auto object-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
            loading="lazy"
          />
        </div>
      )}
      {link && (
        <AnimateOnScroll variants={fadeUp} delay={0.4}>
          <a
            href={link}
            className="inline-block text-[11px] tracking-[0.15em] transition-colors hover:opacity-70"
            style={{ ...body, fontWeight: 500, color: PALETTE.primary }}
          >
            {linkLabel} →
          </a>
        </AnimateOnScroll>
      )}
      {badges && (
        <div className="mt-8 flex items-center justify-start gap-6 md:gap-8 -ml-1">
          {/* Michelin 2 Keys */}
          <img
            src="/manus-storage/atacama-badge-michelin_e5872f3c.png"
            alt="Michelin 2 Keys 2025"
            className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
            loading="lazy"
          />
          {/* Leading Hotels of the World */}
          <img
            src="/manus-storage/atacama-badge-leading-hotels_aa22006a.png"
            alt="The Leading Hotels of the World"
            className="h-16 md:h-20 lg:h-24 w-auto object-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
            loading="lazy"
          />
          {/* Distinción Turismo Sustentable — larger for text readability */}
          <img
            src="/manus-storage/atacama-badge-s-sustainability_35d0a2a8.png"
            alt="Distinción Turismo Sustentable"
            className="h-20 md:h-24 lg:h-28 w-auto object-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CASCADE SECTION — Zero-gap, gradient bg, varied ratios (LEGACY — kept for reference)
   ═══════════════════════════════════════════════════════════════ */
function CascadeSection({
  label,
  headline,
  description,
  verticalSrc,
  horizontalSrc,
  verticalIsVideo,
  horizontalIsVideo,
  verticalRatio,
  horizontalRatio,
  textSide = "left",
  bgColor,
  link,
  linkLabel = "Explore More",
  blogLink,
  blogLinkLabel,
  badges,
  hideH,
  order = "h-first",
  badgeImage,
}: {
  label: string;
  headline: string;
  description: string;
  verticalSrc: string;
  horizontalSrc: string;
  verticalIsVideo: boolean;
  horizontalIsVideo: boolean;
  verticalRatio: string;
  horizontalRatio: string;
  textSide?: "left" | "right";
  bgColor: string;
  link?: string;
  linkLabel?: string;
  blogLink?: string;
  blogLinkLabel?: string;
  badges?: boolean;
  hideH?: boolean;
  order?: "h-first" | "v-first";
  badgeImage?: string;
}) {
  const VerticalMedia = (
    <MediaBlock
      src={verticalSrc}
      alt={headline}
      isVideo={verticalIsVideo}
      aspectRatio={verticalRatio}
    />
  );

  const HorizontalMedia = (
    <MediaBlock
      src={horizontalSrc}
      alt={headline}
      isVideo={horizontalIsVideo}
      aspectRatio={horizontalRatio}
    />
  );

  const TextBlock = (
    <div className="flex flex-col justify-center">
      <AnimateOnScroll variants={fadeUp}>
        <SectionLabel>{label}</SectionLabel>
      </AnimateOnScroll>
      <TextReveal as="h2" className="mb-6" delay={0.1}>
        <span
          className="text-2xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-wide"
          style={{ ...display, color: PALETTE.text }}
        >
          {headline}
        </span>
      </TextReveal>
      <AnimateOnScroll variants={fadeUp} delay={0.3}>
        <p className="text-[15px] leading-[1.8] mb-6" style={{ ...body, color: PALETTE.textSecondary }}>
          {description}
        </p>
        {blogLink && (
          <a
            href={blogLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[12px] tracking-[0.08em] mb-6 transition-colors hover:opacity-70"
            style={{ ...body, fontWeight: 500, color: PALETTE.primary, fontStyle: "italic" }}
          >
            {blogLinkLabel || "Read More on the Journal"} ↗
          </a>
        )}
      </AnimateOnScroll>
      {badgeImage && (
        <div className="mt-8 flex items-center justify-start gap-6 md:gap-8 -ml-1">
          {/* Michelin 2 Keys */}
          <img
            src="/manus-storage/atacama-badge-michelin_e5872f3c.png"
            alt="Michelin 2 Keys 2025"
            className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
            loading="lazy"
          />
          {/* Leading Hotels of the World */}
          <img
            src="/manus-storage/atacama-badge-leading-hotels_aa22006a.png"
            alt="The Leading Hotels of the World"
            className="h-16 md:h-20 lg:h-24 w-auto object-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
            loading="lazy"
          />
          {/* Distinción Turismo Sustentable — larger for text readability */}
          <img
            src="/manus-storage/atacama-badge-s-sustainability_35d0a2a8.png"
            alt="Distinción Turismo Sustentable"
            className="h-20 md:h-24 lg:h-28 w-auto object-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
            loading="lazy"
          />
        </div>
      )}
      {link && (
        <AnimateOnScroll variants={fadeUp} delay={0.4}>
          <a
            href={link}
            className="inline-block text-[11px] tracking-[0.15em] transition-colors hover:opacity-70"
            style={{ ...body, fontWeight: 500, color: PALETTE.primary }}
          >
            {linkLabel} →
          </a>
        </AnimateOnScroll>
      )}
      {badges && (
        <div className="mt-8 flex items-center justify-start gap-6 md:gap-8 -ml-1">
          {/* Michelin 2 Keys */}
          <img
            src="/manus-storage/atacama-badge-michelin_e5872f3c.png"
            alt="Michelin 2 Keys 2025"
            className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
            loading="lazy"
          />
          {/* Leading Hotels of the World */}
          <img
            src="/manus-storage/atacama-badge-leading-hotels_aa22006a.png"
            alt="The Leading Hotels of the World"
            className="h-16 md:h-20 lg:h-24 w-auto object-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
            loading="lazy"
          />
          {/* Distinción Turismo Sustentable — larger for text readability */}
          <img
            src="/manus-storage/atacama-badge-s-sustainability_35d0a2a8.png"
            alt="Distinción Turismo Sustentable"
            className="h-20 md:h-24 lg:h-28 w-auto object-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
            loading="lazy"
          />
        </div>
      )}
    </div>
  );

  return (
    <section style={{ backgroundColor: bgColor }}>
      {/* === DESKTOP: Alternating H/V order to prevent same-orientation stacking === */}
      <div className="hidden md:block">
        {/* V+Text first when order is v-first */}
        {order === "v-first" && (
          <div className="flex">
            {textSide === "left" ? (
              <>
                <div className="w-1/2 flex items-center">
                  <div className="px-10 lg:px-16 xl:px-20 py-16 max-w-[600px] ml-auto">
                    {TextBlock}
                  </div>
                </div>
                <div className="w-1/2">
                  <MediaReveal delay={0.2}>{VerticalMedia}</MediaReveal>
                </div>
              </>
            ) : (
              <>
                <div className="w-1/2">
                  <MediaReveal delay={0.2}>{VerticalMedia}</MediaReveal>
                </div>
                <div className="w-1/2 flex items-center">
                  <div className="px-10 lg:px-16 xl:px-20 py-16 max-w-[600px]">
                    {TextBlock}
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* H row */}
        {!hideH && (
          <div className="w-full">
            <MediaReveal delay={0.1}>{HorizontalMedia}</MediaReveal>
          </div>
        )}

        {/* V+Text after H when order is h-first */}
        {order === "h-first" && (
          <div className="flex">
          {textSide === "left" ? (
            <>
              <div className="w-1/2 flex items-center">
                <div className="px-10 lg:px-16 xl:px-20 py-16 max-w-[600px] ml-auto">
                  {TextBlock}
                </div>
              </div>
              <div className="w-1/2">
                <MediaReveal delay={0.2}>{VerticalMedia}</MediaReveal>
              </div>
            </>
          ) : (
            <>
              <div className="w-1/2">
                <MediaReveal delay={0.2}>{VerticalMedia}</MediaReveal>
              </div>
              <div className="w-1/2 flex items-center">
                <div className="px-10 lg:px-16 xl:px-20 py-16 max-w-[600px]">
                  {TextBlock}
                </div>
              </div>
            </>
          )}
        </div>
        )}
      </div>

      {/* === MOBILE: Stacked layout (unchanged for now) === */}
      <div className="md:hidden px-5">
        <div className="pt-10 pb-6">{TextBlock}</div>
        <MediaReveal delay={0.1}>{VerticalMedia}</MediaReveal>
      </div>
    </section>
  );
}
/* ═══════════════════════════════════════════════════════════════
   SECTION DATA — All 11 cascade sections
   ═══════════════════════════════════════════════════════════════ */
const CASCADE_SECTIONS = [
  {
    label: "The Property",
    headline: "Life in an Oasis",
    description: `${atacama.heroSubtitle} Nayara Alto Atacama is an otherworldly sanctuary in the world's driest desert, where the landscape resembles Mars itself. Surrounded by multicolored mountains, salt flats, and endless horizons, this luxury oasis offers stargazing, desert adventures, and world-class wellness.`,
    vSrc: ASSETS.clip2V,
    hSrc: ASSETS.clip3H,
    vVideo: true, hVideo: true,
    vRatio: "3/4", hRatio: "16/9",

    textSide: "left" as const,
    blogLink: "https://blog.nayararesorts.com/mars-atacama-final-frontier-of-travel",
    blogLinkLabel: "Read: Why the Atacama Is Mars on Earth",
    badges: false,
    badgeImage: "/manus-storage/badges-atacama-v3_35a2ae06.png",
  },
  {
    label: "Accommodations",
    headline: "Desert Suites",
    description: "Each suite is a private sanctuary with panoramic desert views, heated infinity pools, and direct access to the Atacama landscape. Designed for ultimate comfort and contemplation.",
    vSrc: ASSETS.clip4V,
    hSrc: ASSETS.clip5H,
    vVideo: true, hVideo: true,
    vRatio: "3/4", hRatio: "16/9",
    textSide: "right" as const,
    link: "/alto-atacama/rooms", linkLabel: "Explore Rooms",
    badges: false,
  },
  {
    label: "Experiences",
    headline: "Mars on Earth",
    description: "From salt flat expeditions to stargazing under the clearest skies on Earth, every excursion is guided by local experts who reveal the Atacama's hidden wonders.",
    vSrc: ASSETS.clip6V,
    hSrc: ASSETS.clip7H,
    vVideo: true, hVideo: true,
    vRatio: "3/4", hRatio: "16/9",
    textSide: "left" as const,
    badges: false,
  },
  {
    label: "Sustainability",
    headline: "Desert Stewardship",
    description: "As the only luxury hotel in the Atacama certified with the S Seal of Sustainable Tourism, Nayara Alto Atacama proves that even in the harshest environments, luxury and responsibility coexist. Solar energy, adobe architecture, and 100% water reuse honor the desert and its communities.",
    vSrc: ASSETS.susV,
    hSrc: ASSETS.susH,
    vVideo: true, hVideo: true,
    vRatio: "3/4", hRatio: "16/9",
    textSide: "right" as const,
    link: "/alto-atacama/sustainability",
    linkLabel: "Explore Sustainability",
    badges: false,
  },
  {
    label: "Wellness",
    headline: "Desert Renewal",
    description: "Our spa draws on ancestral Atacameño healing traditions and the desert's mineral-rich waters. Surrender to treatments designed around the rhythms of this ancient landscape.",
    vSrc: ASSETS.clip8V,
    hSrc: "",
    vVideo: true, hVideo: false,
    vRatio: "3/4", hRatio: "16/9",
    textSide: "right" as const,
    badges: false,
    hideH: true,
  },
  {
    label: "Gastronomy",
    headline: "A Taste of the Desert",
    description: "Alto Atacama's culinary program transforms the Atacama's ancient terroir into an extraordinary dining experience. Using indigenous ingredients — quinoa, chañar, rica-rica herbs, and Andean potatoes — our chefs craft dishes that honor the land and its people. Every meal is a journey through flavor, altitude, and tradition.",
    vSrc: ASSETS.gastroV,
    hSrc: ASSETS.gastroH,
    vVideo: false, hVideo: false,
    vRatio: "3/4", hRatio: "16/9",
    textSide: "left" as const,
    badges: false,
    hFirst: true,
  },
];

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE — Extended gradient cascade, all touching, color flow
   ═══════════════════════════════════════════════════════════════ */
export default function AltoAtacama() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: SECTION_COLORS[0] }}>
      <BrandNavigation pageType="property" />
      <HeroSection />

      {/* === FLAT INTERLEAVED CASCADE ===
         After Hero(H), the pattern is: V+Text → H → V+Text → H → ...
         Each section contributes one V+Text block and one H block.
         V+Text always comes before its own H, ensuring no H touches H
         and no V touches V. */}
      {CASCADE_SECTIONS.map((section, i) => {
        const bg = SECTION_COLORS[i + 1] || SECTION_COLORS[SECTION_COLORS.length - 1];
        const isHidden = (section as any).hideH;
        const isHFirst = (section as any).hFirst;

        const VTextRow = (
          <div className="hidden md:block">
            <div className="flex">
              {section.textSide === "left" ? (
                <>
                  <div className="w-1/2 flex items-center">
                    <div className="px-10 lg:px-16 xl:px-20 py-16 max-w-[600px] ml-auto">
                      <CascadeTextBlock
                        label={section.label}
                        headline={section.headline}
                        description={section.description}
                        link={section.link}
                        linkLabel={section.linkLabel}
                        blogLink={(section as any).blogLink}
                        blogLinkLabel={(section as any).blogLinkLabel}
                        badges={section.badges}
                        badgeImage={(section as any).badgeImage}
                      />
                    </div>
                  </div>
                  <div className="w-1/2">
                    <MediaReveal delay={0.2}>
                      <MediaBlock
                        src={section.vSrc}
                        alt={section.headline}
                        isVideo={section.vVideo}
                        aspectRatio={section.vRatio}

                      />
                    </MediaReveal>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-1/2">
                    <MediaReveal delay={0.2}>
                      <MediaBlock
                        src={section.vSrc}
                        alt={section.headline}
                        isVideo={section.vVideo}
                        aspectRatio={section.vRatio}

                      />
                    </MediaReveal>
                  </div>
                  <div className="w-1/2 flex items-center">
                    <div className="px-10 lg:px-16 xl:px-20 py-16 max-w-[600px]">
                      <CascadeTextBlock
                        label={section.label}
                        headline={section.headline}
                        description={section.description}
                        link={section.link}
                        linkLabel={section.linkLabel}
                        blogLink={(section as any).blogLink}
                        blogLinkLabel={(section as any).blogLinkLabel}
                        badges={section.badges}
                        badgeImage={(section as any).badgeImage}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        );

        const HRow = !isHidden ? (
          <div className="hidden md:block w-full -mt-px">
            <MediaReveal delay={0.1}>
              <MediaBlock
                src={section.hSrc}
                alt={section.headline}
                isVideo={section.hVideo}
                aspectRatio={section.hRatio}

              />
            </MediaReveal>
          </div>
        ) : null;

        return (
          <section key={i} style={{ backgroundColor: bg }}>
            {/* Desktop: H-first or V-first ordering */}
            {isHFirst ? (
              <>{HRow}{VTextRow}</>
            ) : (
              <>{VTextRow}{HRow}</>
            )}

            {/* MOBILE: Stacked */}
            <div className="md:hidden px-5">
              <div className="pt-10 pb-6">
                <CascadeTextBlock
                  label={section.label}
                  headline={section.headline}
                  description={section.description}
                  link={section.link}
                  linkLabel={section.linkLabel}
                  blogLink={(section as any).blogLink}
                  blogLinkLabel={(section as any).blogLinkLabel}
                  badges={section.badges}
                  badgeImage={(section as any).badgeImage}
                />
              </div>
              <MediaReveal delay={0.1}>
                <MediaBlock
                  src={section.vSrc}
                  alt={section.headline}
                  isVideo={section.vVideo}
                  aspectRatio={section.vRatio}
                />
              </MediaReveal>
            </div>
          </section>
        );
      })}


      <ReviewsBreak bgColor={SECTION_COLORS[SECTION_COLORS.length - 1]} />
      <GettingHereSection />
      <AwardsSection />
      <ReserveCTA />
      <Footer bgColor="#6F463D" />
    </div>
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
            style={{ ...body, fontWeight: 500, color: PALETTE.primary }}
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
            style={{ ...body, color: PALETTE.textTertiary }}
          >
            Based on 800+ reviews on TripAdvisor
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.2}>
          <blockquote>
            <p
              className="text-[17px] md:text-[20px] leading-relaxed italic mb-4"
              style={{ ...body, color: PALETTE.text }}
            >
              "A once-in-a-lifetime experience. The desert landscape is otherworldly, the stargazing is beyond anything we've ever seen, and the excursions are perfectly curated. The staff made us feel like family from the moment we arrived."
            </p>
            <cite
              className="text-[12px] tracking-[0.08em] not-italic"
              style={{ ...body, color: PALETTE.textTertiary }}
            >
              — Carolina, TripAdvisor
            </cite>
          </blockquote>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.3}>
          <a
            href="https://www.tripadvisor.com/Hotel_Review-g303681-d1063858-Reviews-Alto_Atacama_Desert_Lodge_Spa-San_Pedro_de_Atacama_Antofagasta_Region.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 text-[11px] tracking-[0.15em] transition-opacity hover:opacity-70"
            style={{ ...body, fontWeight: 500, color: PALETTE.primary }}
          >
            Read All Reviews →
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO — Full-screen video, cinematic text reveal
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const isMobile = useIsMobile();
  const heroVideo = isMobile ? ASSETS.heroMobile : ASSETS.heroDesktop;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <BlobVideo
          src={heroVideo}
          className="w-full h-full object-cover"
          hasAudio={true}
          pillBg="#6F463DB3"
          pillColor="#F7F5F0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none" />
      </div>

      {/* H1 overlaid on video — bottom center */}
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6 md:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-xl md:text-3xl lg:text-4xl leading-[0.95] tracking-wide text-center"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          Atacama Desert Oasis Under the Stars
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="text-white/60 text-[11px] md:text-xs tracking-[0.25em] uppercase mt-3"
          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
        >
          San Pedro de Atacama, Chile
        </motion.p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   OPTION A — STRUCTURED TAIL: Getting Here, Awards, Reserve CTA
   These sections live below the cascade, styled to match the gradient
   ═══════════════════════════════════════════════════════════════ */
function GettingHereSection() {
  const tailBg = SECTION_COLORS[SECTION_COLORS.length - 1];
  const routes = [
    { title: "Fly to Calama (CJC)", description: "Daily flights from Santiago to Calama airport. International connections via Santiago (SCL).", icon: "✈" },
    { title: "Complimentary Transfer", description: "Round-trip airport transfers from Calama to the resort, approximately 1 hour through the desert.", icon: "🚐" },
    { title: "San Pedro de Atacama", description: "The nearest town is just 5 minutes from the property — shops, restaurants, and local culture.", icon: "🗺" },
    { title: "Altitude Guidance", description: "At 2,400m elevation, we schedule excursions progressively. Coca tea available throughout the property.", icon: "⛰" },
  ];
  return (
    <section id="getting-here" className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: tailBg }}>
      <div className="max-w-[1200px] mx-auto">
        <AnimateOnScroll variants={fadeUp}>
          <SectionLabel>Getting Here</SectionLabel>
        </AnimateOnScroll>
        <TextReveal as="h2" className="mb-3" delay={0.1}>
          <span className="text-2xl md:text-4xl tracking-wide" style={{ ...display, color: PALETTE.text }}>
            Your Journey to the Desert
          </span>
        </TextReveal>
        <AnimateOnScroll variants={fadeUp} delay={0.2}>
          <p className="text-[14px] leading-relaxed mb-10 md:mb-14 max-w-xl" style={{ ...body, color: PALETTE.textSecondary }}>
            Nayara Alto Atacama operates on a full-board basis including all meals, open bar, daily guided excursions, and airport transfers.
          </p>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {routes.map((route, i) => (
            <AnimateOnScroll key={i} variants={fadeUp} delay={i * 0.1}>
              <div className="flex gap-4">
                <div
                  className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-lg"
                  style={{ backgroundColor: `${PALETTE.primary}15`, color: PALETTE.primary }}
                >
                  {route.icon}
                </div>
                <div>
                  <h3 className="text-[16px] mb-2" style={{ ...display, fontWeight: 500, color: PALETTE.text }}>{route.title}</h3>
                  <p className="text-[13px] leading-relaxed" style={{ ...body, color: PALETTE.textSecondary }}>{route.description}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <AnimateOnScroll variants={fadeUp} delay={0.5}>
          <div className="mt-10 md:mt-14 p-6 rounded-xl" style={{ backgroundColor: `${PALETTE.primary}08` }}>
            <p className="text-[13px] leading-relaxed" style={{ ...body, color: PALETTE.textSecondary }}>
              <span style={{ fontWeight: 500, color: PALETTE.text }}>Need help planning your journey?</span> Our reservations team can arrange all transfers and domestic flights. Contact us at{" "}
              <a href="mailto:reservations@nayararesorts.com" style={{ color: PALETTE.primary, textDecoration: "underline" }}>reservations@nayararesorts.com</a>{" "}
              or call <a href="tel:+18448652002" style={{ color: PALETTE.primary, textDecoration: "underline" }}>844-865-2002</a>.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

function AwardsSection() {
  const tailBg = SECTION_COLORS[SECTION_COLORS.length - 1];
  const awards = [
    { name: "2 Michelin Keys", description: "An exceptional stay — recognized by the MICHELIN Key guide", year: "2025" },
    { name: "Distinción Turismo Sustentable", description: "Chile's national sustainable tourism certification", year: "2024" },
    { name: "Virtuoso Best of the Best", description: "Recognized among the world's finest luxury properties", year: "2024" },
  ];
  return (
    <section id="awards" className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: tailBg }}>
      <div className="max-w-[1200px] mx-auto">
        <AnimateOnScroll variants={fadeUp}>
          <SectionLabel>Recognition</SectionLabel>
        </AnimateOnScroll>
        <TextReveal as="h2" className="mb-10 md:mb-14" delay={0.1}>
          <span className="text-2xl md:text-4xl tracking-wide" style={{ ...display, color: PALETTE.text }}>
            Awards & Distinctions
          </span>
        </TextReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, i) => (
            <AnimateOnScroll key={i} variants={fadeUp} delay={i * 0.15}>
              <div className="p-6 rounded-xl" style={{ backgroundColor: `${PALETTE.primary}06` }}>
                <p className="text-[11px] tracking-[0.15em] mb-3" style={{ ...body, fontWeight: 500, color: PALETTE.primary }}>{award.year}</p>
                <h3 className="text-[18px] mb-2" style={{ ...display, fontWeight: 500, color: PALETTE.text }}>{award.name}</h3>
                <p className="text-[13px] leading-relaxed" style={{ ...body, color: PALETTE.textSecondary }}>{award.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReserveCTA() {
  const tailBg = SECTION_COLORS[SECTION_COLORS.length - 1];
  return (
    <section className="py-16 md:py-24 px-6 md:px-10" style={{ backgroundColor: tailBg }}>
      <div className="max-w-[800px] mx-auto text-center">
        <AnimateOnScroll variants={fadeUp}>
          <TextReveal as="h2" className="mb-6" delay={0.1}>
            <span className="text-2xl md:text-4xl lg:text-5xl tracking-wide" style={{ ...display, color: PALETTE.text }}>
              Begin Your Desert Journey
            </span>
          </TextReveal>
          <p className="text-[15px] leading-[1.8] mb-8" style={{ ...body, color: PALETTE.textSecondary }}>
            All-inclusive luxury in the world's driest desert — stargazing, geothermal wellness, and desert explorations await.
          </p>
          <a
            href="/reserve?property=alto-atacama"
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
