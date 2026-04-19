/**
 * NAYARA ALTO ATACAMA — Property Home Page
 * Extended gradient cascade: warm sand → deep earth
 * Every available asset shown — no repeats
 * Varied aspect ratios per section, zero-gap between all elements
 */
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import NativeVideo from "@/components/NativeVideo";
import { cascadeAudio } from "@/lib/cascadeAudio";
import CinematicScroll from "@/components/CinematicScroll";
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
const COLOR_A = "#F7F5F0"; // bone
const COLOR_B = "#F0EBE2"; // warm sand tint
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
const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

const ASSETS = {
  // Hero (cascade video 1 — horizontal)
  heroDesktop: "/manus-storage/atacama-cascade-1-hero-h_94275ae6.mp4",
  heroMobile: "/manus-storage/atacama-cascade-1-hero-h_94275ae6.mp4",

  // Cascade video 2 — vertical
  cascadeV: "/manus-storage/atacama-cascade-2-vertical_7da06aa6.mp4",

  // Cascade video 3 — accommodations horizontal
  cascadeAccomH: "/manus-storage/atacama-cascade-3-accom-h_7b491266.mp4",

  // Cascade video 4 — accommodations vertical
  cascadeAccomV: "/manus-storage/atacama-cascade-4-accom-v2_a9446d51.mp4",

  // Section 1 — Story: cascade desert aerial (cropped, no black bars)
  storyV: `${CDN}/atacama-cascade-s1-desert-cropped-v_7069a95f.mp4`,
  storyH: `${CDN}/atacama-cascade-s1-desert-cropped-h_cf1e8c8e.mp4`,
  storyV_old: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-s1-new_7b2948d2.mp4",
  storyH_old: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-horizontal-1_618b6dd9.mp4",

  // Section 2 — Rooms: cascade hotel property aerial (cropped, no black bars)
  roomsV: `${CDN}/atacama-cascade-s2-property-cropped-v_f291037d.mp4`,
  roomsH: `${CDN}/atacama-cascade-s2-property-cropped-h_1f603858.mp4`,
  roomsV_old: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-desert-suites-vertical_a742ab8f.mp4",
  roomsH_old: `${CDN}/atacama-ultrawide-5_aeeaded2.jpg`,

  // Section 3 — Experiences: cascade salt flat (cropped, no black bars)
  expV: `${CDN}/atacama-cascade-s3-saltflat-cropped-v_06168dd1.mp4`,
  expH: `${CDN}/atacama-cascade-s3-saltflat-cropped-h_ae543edc.mp4`,
  expV_old: `${CDN}/atacama-blue-saltflat-vertical_f1956a87.mp4`,
  expH_old: `${CDN}/atacama-ultrawide-4_bba8d87c.jpg`,

  // Section 4 — Sustainability: cascade flamingos (cropped, no black bars)
  susV: `${CDN}/atacama-cascade-s4-flamingos-cropped-v_5fde45bc.mp4`,
  susH: `${CDN}/atacama-cascade-s4-flamingos-cropped-h_b62a70fb.mp4`,
  susV_old: `${CDN}/atacama-milkyway-arch_d146b04d.jpg`,
  susH_old: `https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/flamingos-atacama_76e1d3e0.jpg`,

  // Section 5 — Wellness: cascade spa/wellness (cropped, no black bars)
  wellV: `${CDN}/atacama-cascade-s5-wellness-cropped-v_4a87f73c.mp4`,
  wellH: `${CDN}/atacama-cascade-s5-wellness-cropped-h_700e10be.mp4`,
  wellV_old: `${CDN}/atacama-geyser-eruption-vertical_5c93579c.mp4`,
  wellH_old: `${CDN}/atacama-ultrawide-3_36588f6c.jpg`,

  // Section 6 — A Taste of Place: avocado mousse V + seared meat H
  gastroV: `${CDN}/5178CD9B-559F-438F-BDFC-144084EAE0C2_e84fca90.jpeg`,
  gastroH: `${CDN}/9412A109-CE32-4E36-8A0A-0CE9534A5B53_87d29b47.jpeg`,

  // Section 6b — Desert Ingredients: spice jars V + avocado mousse H
  gastro2V: `${CDN}/768AAA0F-6B6D-4B8C-A768-DBA73F5E73AF_b7113417.jpeg`,
  gastro2H: `${CDN}/AFD1AB2D-E030-4E13-9D0D-99A62291DF39_4cab6068.jpeg`,

  // Section 6c — The Art of Plating: tuna sashimi V + beetroot dessert H
  gastro3V: `${CDN}/5E8F3F4E-BF87-4A5F-BBB2-2737E82CE424_ad01d722.jpeg`,
  gastro3H: `${CDN}/96454375-D840-4B02-AEF7-98893DAD18AA_516b1771.jpeg`,

  // Section 6d — Sweet Finales: crostini wine V + honeycomb consommé H
  gastro4V: `${CDN}/AA6682ED-A08D-4F1E-A869-56222938841C_38b364f9.jpeg`,
  gastro4H: `${CDN}/ACDF665C-3B75-4A15-9806-4E325514B1A9_b1da71b1.JPG`,

  // Section 6e — Meringue star dessert (H) + Milky Way bus (V, moved here)
  gastro5V: `${CDN}/atacama-milkyway-bus_88a347bc.jpg`,
  gastro5H: `${CDN}/5F6D022D-5F89-45EF-93CF-878F0A7BCDEF_c678c03f.JPG`,

  // Section 7 — Stargazing: Milky Way pillar V + Valle de la Luna H video
  starV: `${CDN}/atacama-milkyway-pillar_d9301ecc.jpg`,
  starH: `${CDN}/atacama-valle-luna-horizontal_1f6f7599.mp4`,

  // Section 8 — Landscape: Rainbow Valley aerial H video + Atacama00003 V video
  landV: `${CDN}/Video_Nayara_Atacama00003_aeb971e9.MP4`,
  landH: `${CDN}/atacama-rainbow-valley-aerial_55c86ce4.mp4`,

  // Section 9 — Wildlife: flamingos golden photo H + Atacama00007 V video
  wildV: `${CDN}/Video_Nayara_Atacama00007_8576aa55.MP4`,
  wildH: `${CDN}/atacama-flamingos-golden_7a564e58.jpg`,

  // Section 10 — Adventure: cfnetwork desert walk H + trim V (MOV)
  advV: `${CDN}/trim_cb137ccb.mp4`,
  advH: `${CDN}/cfnetwork_b9ae0ca4.mp4`,

  // Section 11 — Dusk: nbn dusk resort H + nbn dusk V
  duskV: `${CDN}/nbn-atacama-dusk_9201508f.webp`,
  duskH: `${CDN}/nbn-atacama-dusk-resort_b5829c95.webp`,

  // Section 12 — Architecture: courtyard cliff V + hero desktop photo H
  archV: `${CDN}/atacama-courtyard-cliff-vertical_28dfbf06.mp4`,
  archH: `${CDN}/atacama-hero-new_42efa04c.mp4`,

  // Gallery extras
  flamingoLagoon: `${CDN}/atacama-flamingo-lagoon-audio_8cc7cdf9.mp4`,
  poolSunset: `${CDN}/atacama-pool-sunset_c4a2f7e1.jpg`,
  stargazingPhoto: `${CDN}/atacama-stargazing_f5c3d8a4.jpg`,
  suiteInterior: `${CDN}/atacama-suite-interior_d3b1e9f2.jpg`,
  heroDesktopPhoto: `${CDN}/4O1A1949-NayaraAltoAtacama-RainbowValley-byBriceFerreStudio(1)_a94c41d0.jpeg`,
  propCard: `${CDN}/prop-atacama_704b4f26.jpg`,
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
  hasAudio = false,
}: {
  src: string;
  alt: string;
  isVideo: boolean;
  aspectRatio: string;
  hasAudio?: boolean;
}) {
  return (
    <div className="overflow-hidden w-full" style={{ aspectRatio }}>
      {isVideo ? (
        <NativeVideo src={src} className="w-full h-full object-cover" hasAudio={hasAudio} />
      ) : (
        <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
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
}: {
  label: string;
  headline: string;
  description: string;
  link?: string;
  linkLabel?: string;
  blogLink?: string;
  blogLinkLabel?: string;
  badges?: boolean;
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
            className="inline-flex items-center gap-1.5 text-[12px] tracking-[0.08em] mb-4 transition-colors hover:opacity-70"
            style={{ ...body, fontWeight: 500, color: PALETTE.primary, fontStyle: "italic" }}
          >
            {blogLinkLabel || "Read More on the Journal"} ↗
          </a>
        )}
      </AnimateOnScroll>
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
        <AnimateOnScroll variants={fadeUp} delay={0.4}>
          <img
            src={`${CDN}/award-badges-tented-camp_8aea5e71.webp`}
            alt="Award badges"
            className="h-28 md:h-36 lg:h-48 w-auto object-contain opacity-60 mt-4"
            loading="lazy"
          />
        </AnimateOnScroll>
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
            className="inline-flex items-center gap-1.5 text-[12px] tracking-[0.08em] mb-4 transition-colors hover:opacity-70"
            style={{ ...body, fontWeight: 500, color: PALETTE.primary, fontStyle: "italic" }}
          >
            {blogLinkLabel || "Read More on the Journal"} ↗
          </a>
        )}
      </AnimateOnScroll>
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
        <AnimateOnScroll variants={fadeUp} delay={0.4}>
          <img
            src={`${CDN}/award-badges-tented-camp_8aea5e71.webp`}
            alt="Award badges — Alto Atacama"
            className="h-28 md:h-36 lg:h-48 w-auto object-contain opacity-60 mt-4"
            loading="lazy"
          />
        </AnimateOnScroll>
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
    headline: "Mars on Earth",
    description: `${atacama.heroSubtitle} Nayara Alto Atacama is an otherworldly sanctuary in the world's driest desert, where the landscape resembles Mars itself. Surrounded by multicolored mountains, salt flats, and endless horizons, this luxury oasis offers stargazing, desert adventures, and world-class wellness.`,
    vSrc: ASSETS.cascadeV,
    hSrc: ASSETS.cascadeAccomH,
    vVideo: true, hVideo: true,
    vHasAudio: true, hHasAudio: true,
    vRatio: "3/4", hRatio: "16/9",
    textSide: "left" as const,
    link: undefined, linkLabel: undefined,
    blogLink: "https://blog.nayararesorts.com/mars-atacama-final-frontier-of-travel",
    blogLinkLabel: "Read: Why the Atacama Is Mars on Earth",
    badges: false,
  },
  {
    label: "Accommodations",
    headline: "Desert Suites",
    description: "Each suite is a private sanctuary with panoramic desert views, heated infinity pools, and direct access to the Atacama landscape. Designed for ultimate comfort and contemplation.",
    vSrc: ASSETS.cascadeAccomV,
    hSrc: "",
    vVideo: true, hVideo: false,
    vHasAudio: true, hHasAudio: false,
    vRatio: "3/4", hRatio: "16/9",
    textSide: "right" as const,
    link: "/alto-atacama/rooms", linkLabel: "Explore Rooms",
    badges: false,
    hideH: true,
  },
];

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE — Extended gradient cascade, all touching, color flow
   ═══════════════════════════════════════════════════════════════ */
export default function AltoAtacama() {
  const [adventureStarted, setAdventureStarted] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: SECTION_COLORS[0] }}>
      <CinematicScroll
        speed={1.45}
        ctaText="Enter the Atacama"
        onStart={() => setAdventureStarted(true)}
      />
      <BrandNavigation pageType="property" />
      <HeroSection showVideo={adventureStarted} />

      {/* === FLAT INTERLEAVED CASCADE ===
         After Hero(H), the pattern is: V+Text → H → V+Text → H → ...
         Each section contributes one V+Text block and one H block.
         V+Text always comes before its own H, ensuring no H touches H
         and no V touches V. */}
      {CASCADE_SECTIONS.map((section, i) => {
        const bg = SECTION_COLORS[i + 1] || SECTION_COLORS[SECTION_COLORS.length - 1];
        const isHidden = (section as any).hideH;
        return (
          <section key={i} style={{ backgroundColor: bg }}>
            {/* V+Text row */}
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
                          hasAudio={(section as any).vHasAudio}
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
                          hasAudio={(section as any).vHasAudio}
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
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* H row — full width */}
            {!isHidden && (
              <div className="hidden md:block w-full">
                <MediaReveal delay={0.1}>
                  <MediaBlock
                    src={section.hSrc}
                    alt={section.headline}
                    isVideo={section.hVideo}
                    aspectRatio={section.hRatio}
                    hasAudio={(section as any).hHasAudio}
                  />
                </MediaReveal>
              </div>
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


      <GettingHereSection />
      <AwardsSection />
      <ReserveCTA />
      <Footer bgColor="#6F463D" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO — Full-screen video, cinematic text reveal
   ═══════════════════════════════════════════════════════════════ */
function HeroSection({ showVideo = false }: { showVideo?: boolean }) {
  const isMobile = useIsMobile();
  const heroVideo = isMobile ? ASSETS.heroMobile : ASSETS.heroDesktop;
  const preloadRef = useRef<HTMLVideoElement>(null);
  const heroUniqueId = useRef(`hero-preload-${Math.random().toString(36).slice(2, 8)}`).current;
  const [videoReady, setVideoReady] = useState(false);
  const hasActivated = useRef(false);

  /* Preload: start buffering the hero video immediately on mount (while static photo shows) */
  useEffect(() => {
    const video = preloadRef.current;
    if (!video) return;

    video.muted = true;
    video.volume = 0.7;
    video.preload = "auto";
    video.load();

    const onCanPlay = () => setVideoReady(true);
    video.addEventListener("canplaythrough", onCanPlay);
    // Also accept canplay as fallback for slower connections
    video.addEventListener("canplay", onCanPlay);

    // Register with cascadeAudio so it's ready for activation
    cascadeAudio.register(heroUniqueId, video);

    return () => {
      video.removeEventListener("canplaythrough", onCanPlay);
      video.removeEventListener("canplay", onCanPlay);
      cascadeAudio.unregister(heroUniqueId);
    };
  }, [heroVideo, heroUniqueId]);

  /* When showVideo becomes true, instantly play the preloaded video with audio */
  useEffect(() => {
    if (!showVideo || hasActivated.current) return;
    const video = preloadRef.current;
    if (!video) return;

    hasActivated.current = true;

    // Activate audio on this video
    cascadeAudio.activate(heroUniqueId);
    video.muted = cascadeAudio.isMuted();

    // Play immediately — video is already buffered
    video.play().catch(() => {});
  }, [showVideo, heroUniqueId]);

  /* Subscribe to mute state changes */
  useEffect(() => {
    const unsub = cascadeAudio.subscribe((globalMuted) => {
      if (cascadeAudio.getActiveId() === heroUniqueId) {
        const video = preloadRef.current;
        if (video) video.muted = globalMuted;
      }
    });
    return () => { unsub(); };
  }, [heroUniqueId]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        {/* Static photo — visible until video starts */}
        <img
          src={ASSETS.heroDesktopPhoto}
          alt="Atacama Desert"
          className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-500 ${
            showVideo ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        />

        {/* Preloaded video — always in DOM, hidden until showVideo.
            Uses visibility + opacity so the browser keeps buffering. */}
        <video
          ref={preloadRef}
          className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-500 ${
            showVideo ? "opacity-100" : "opacity-0"
          }`}
          playsInline
          loop
          preload="auto"
          // Do NOT set muted in JSX — controlled imperatively by cascadeAudio
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

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
