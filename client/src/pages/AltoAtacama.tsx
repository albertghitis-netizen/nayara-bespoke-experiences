/**
 * NAYARA ALTO ATACAMA — Property Home Page
 * Extended gradient cascade: warm sand → deep earth
 * Every available asset shown — no repeats
 * Varied aspect ratios per section, zero-gap between all elements
 */
import { motion } from "framer-motion";
import NativeVideo from "@/components/NativeVideo";
import { useIsMobile } from "@/hooks/useMobile";
import Footer from "@/components/Footer";
import ByNightCTA from "@/components/ByNightCTA";
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
const SECTION_COLORS = [
  "#F5F1EB", // 0 hero
  "#F2EDE4", // 1 story
  "#EFE9DD", // 2 rooms
  "#ECE5D6", // 3 experiences
  "#E8E0CF", // 4 sustainability
  "#E4DBC8", // 5 wellness
  "#E0D6C1", // 6 a taste of place
  "#DED3BD", // 7 desert ingredients
  "#DCD1BA", // 8 the art of plating
  "#DACEB7", // 9 sweet finales
  "#D8CCB3", // 10 dining & stars
  "#D6C9B0", // 11 stargazing
  "#D4C7AC", // 12 landscape
  "#D2C4A9", // 13 wildlife
  "#D0C2A5", // 14 adventure
  "#CCBD9E", // 15 dusk
  "#C8B390", // 16 architecture
  "#C4AE89", // 17 the pool
  "#C0A982", // 18 flamingo lagoon
];

const PALETTE = {
  text: "#2C2418",
  textSecondary: "#7A6F63",
  textTertiary: "#B0A89E",
  primary: "#8B5A3C",
  divider: "#E2DDD5",
};

/* ═══════════════════════════════════════════════════════════════
   CDN ASSETS — EVERY Atacama asset, organized by section
   ═══════════════════════════════════════════════════════════════ */
const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

const ASSETS = {
  // Hero
  heroDesktop: `${CDN}/atacama-hero-new-audio_13d2ee07.mp4`,
  heroMobile: `${CDN}/atacama-hero-vertical-hq_d81c629e.mp4`,

  // Section 1 — Story: geyser steam V + red landscape lady UW
  storyV: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-s1-red_bd8b7f0f.mp4",
  storyH: `${CDN}/atacama-ultrawide-1_6f77dafe.jpg`,

  // Section 2 — Rooms: new desert suites vertical video + resort pathway UW
  roomsV: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-desert-suites-vertical_a742ab8f.mp4",
  roomsH: `${CDN}/atacama-ultrawide-5_aeeaded2.jpg`,

  // Section 3 — Experiences: blue salt flat V + Rainbow Valley woman UW
  expV: `${CDN}/atacama-blue-saltflat-vertical_f1956a87.mp4`,
  expH: `${CDN}/atacama-ultrawide-4_bba8d87c.jpg`,

  // Section 4 — Sustainability: Milky Way arch V + vicuna mountain UW
  susV: `${CDN}/atacama-milkyway-arch_d146b04d.jpg`,
  susH: `${CDN}/atacama-ultrawide-2_c9a936b3.jpg`,

  // Section 5 — Wellness: geyser eruption V + spa massage UW
  wellV: `${CDN}/atacama-geyser-eruption-vertical_5c93579c.mp4`,
  wellH: `${CDN}/atacama-ultrawide-3_36588f6c.jpg`,

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
  heroDesktopPhoto: `${CDN}/atacama-hero-desktop_8c8a5be0.jpg`,
  propCard: `${CDN}/prop-atacama_704b4f26.jpg`,
};

const display = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)" } as const;

function SectionLabel({ children, color }: { children: React.ReactNode; color?: string }) {
  return (
    <p
      className="text-[11px] tracking-[0.2em] uppercase mb-4"
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
    <div className="overflow-hidden w-full" style={{ aspectRatio }}>
      {isVideo ? (
        <NativeVideo src={src} className="w-full h-full object-cover" />
      ) : (
        <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CASCADE SECTION — Zero-gap, gradient bg, varied ratios
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
  badges,
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
  badges?: boolean;
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
      </AnimateOnScroll>
      {link && (
        <AnimateOnScroll variants={fadeUp} delay={0.4}>
          <a
            href={link}
            className="inline-block text-[11px] tracking-[0.15em] uppercase transition-colors hover:opacity-70"
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
      {/* === DESKTOP: Full-bleed layout === */}
      <div className="hidden md:block">
        {/* V row: 50/50 split — media full-bleed to screen edge, text contained */}
        <div className="flex">
          {textSide === "left" ? (
            <>
              {/* Text side — padded, vertically centered */}
              <div className="w-1/2 flex items-center">
                <div className="px-10 lg:px-16 xl:px-20 py-16 max-w-[600px] ml-auto">
                  {TextBlock}
                </div>
              </div>
              {/* Media side — full bleed to right edge */}
              <div className="w-1/2">
                <MediaReveal delay={0.2}>{VerticalMedia}</MediaReveal>
              </div>
            </>
          ) : (
            <>
              {/* Media side — full bleed to left edge */}
              <div className="w-1/2">
                <MediaReveal delay={0.1}>{VerticalMedia}</MediaReveal>
              </div>
              {/* Text side — padded, vertically centered */}
              <div className="w-1/2 flex items-center">
                <div className="px-10 lg:px-16 xl:px-20 py-16 max-w-[600px]">
                  {TextBlock}
                </div>
              </div>
            </>
          )}
        </div>
        {/* H row: full viewport width, no container, no padding */}
        <div>
          <MediaReveal delay={0.1}>{HorizontalMedia}</MediaReveal>
        </div>
      </div>

      {/* === MOBILE: Stacked layout, contained === */}
      <div className="md:hidden px-5">
        <div className="pt-10 pb-6">{TextBlock}</div>
        <MediaReveal delay={0.1}>{VerticalMedia}</MediaReveal>
        <div className="mt-4">
          <MediaReveal delay={0.2}>{HorizontalMedia}</MediaReveal>
        </div>
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
    vSrc: ASSETS.storyV, hSrc: ASSETS.storyH,
    vVideo: true, hVideo: false,
    vRatio: "9/16", hRatio: "2.34/1",
    textSide: "left" as const,
    link: undefined, linkLabel: undefined,
    badges: true,
  },
  {
    label: "Accommodations",
    headline: "Desert Suites",
    description: "Each suite is a private sanctuary with panoramic desert views, heated infinity pools, and direct access to the Atacama landscape. Designed for ultimate comfort and contemplation.",
    vSrc: ASSETS.roomsV, hSrc: ASSETS.roomsH,
    vVideo: true, hVideo: false,
    vRatio: "9/16", hRatio: "2.34/1",
    textSide: "right" as const,
    link: "/alto-atacama/rooms", linkLabel: "Explore Rooms",
    badges: false,
  },
  {
    label: "Experiences",
    headline: "Desert Explorations",
    description: "From sunrise salt flat expeditions to stargazing under the clearest skies on Earth, every excursion is led by expert local guides who reveal the Atacama's hidden wonders.",
    vSrc: ASSETS.expV, hSrc: ASSETS.expH,
    vVideo: true, hVideo: false,
    vRatio: "9/16", hRatio: "2.34/1",
    textSide: "left" as const,
    link: "/alto-atacama/experiences", linkLabel: "Explore More",
    badges: false,
  },
  {
    label: "Sustainability",
    headline: "Protecting the Desert",
    description: "Our commitment to the Atacama goes beyond hospitality. We protect fragile ecosystems, support local communities, and operate with minimal environmental impact in one of Earth's most delicate landscapes.",
    vSrc: ASSETS.susV, hSrc: ASSETS.susH,
    vVideo: false, hVideo: false,
    vRatio: "5/4", hRatio: "2.34/1",
    textSide: "right" as const,
    link: "/alto-atacama/sustainability", linkLabel: "Explore More",
    badges: false,
  },
  {
    label: "Wellness",
    headline: "Geothermal Healing",
    description: "Harness the healing power of the desert — from volcanic mud rituals to salt crystal therapies, each treatment draws on the Atacama's ancient minerals and infinite stillness.",
    vSrc: ASSETS.wellV, hSrc: ASSETS.wellH,
    vVideo: true, hVideo: false,
    vRatio: "2/3", hRatio: "2.34/1",
    textSide: "left" as const,
    link: "/alto-atacama/wellness", linkLabel: "Explore More",
    badges: false,
  },
  {
    label: "A Taste of Place",
    headline: "Desert Dining",
    description: "Our chefs transform the Atacama's indigenous ingredients into extraordinary cuisine — from quinoa harvested at altitude to herbs cultivated in our desert gardens. Each dish tells the story of this ancient landscape.",
    vSrc: ASSETS.gastroV, hSrc: ASSETS.gastroH,
    vVideo: false, hVideo: false,
    vRatio: "3/4", hRatio: "16/9",
    textSide: "right" as const,
    link: "/alto-atacama/gastronomy", linkLabel: "Explore More",
    badges: false,
  },
  {
    label: "Desert Ingredients",
    headline: "From Earth\nto Table",
    description: "The Atacama's pantry is as surprising as its landscape — native herbs, wild seeds, and ancient grains foraged from the desert floor. Our spice collection draws from centuries of Atacameño culinary tradition.",
    vSrc: ASSETS.gastro2V, hSrc: ASSETS.gastro2H,
    vVideo: false, hVideo: false,
    vRatio: "1/1", hRatio: "16/9",
    textSide: "left" as const,
    link: undefined, linkLabel: undefined,
    badges: false,
  },
  {
    label: "The Art of Plating",
    headline: "Color &\nComposition",
    description: "Every plate is a canvas. Our kitchen team draws inspiration from the Atacama's mineral palette — the crimson of iron-rich earth, the gold of desert sunsets, the deep violet of volcanic stone.",
    vSrc: ASSETS.gastro3V, hSrc: ASSETS.gastro3H,
    vVideo: false, hVideo: false,
    vRatio: "3/4", hRatio: "1/1",
    textSide: "right" as const,
    link: undefined, linkLabel: undefined,
    badges: false,
  },
  {
    label: "Sweet Finales",
    headline: "Desert\nDesserts",
    description: "Our pastry program celebrates the unexpected sweetness of the desert — honeycomb from Atacameño apiaries, native fruits preserved in altitude, and chocolate infused with local botanicals.",
    vSrc: ASSETS.gastro4V, hSrc: ASSETS.gastro4H,
    vVideo: false, hVideo: false,
    vRatio: "3/4", hRatio: "1/1",
    textSide: "left" as const,
    link: undefined, linkLabel: undefined,
    badges: false,
  },
  {
    label: "Dining & Stars",
    headline: "Under the\nMilky Way",
    description: "On clear evenings, dinner moves outdoors beneath the southern hemisphere's most spectacular sky. A multi-course tasting menu unfolds as the Milky Way arcs overhead — cuisine and cosmos in perfect harmony.",
    vSrc: ASSETS.gastro5V, hSrc: ASSETS.gastro5H,
    vVideo: false, hVideo: false,
    vRatio: "3/4", hRatio: "16/9",
    textSide: "right" as const,
    link: undefined, linkLabel: undefined,
    badges: false,
  },
  {
    label: "Stargazing",
    headline: "The Clearest Skies on Earth",
    description: "The Atacama Desert offers the world's best conditions for stargazing. With virtually zero light pollution and 300+ clear nights per year, the Milky Way becomes a nightly spectacle visible to the naked eye.",
    vSrc: ASSETS.starV, hSrc: ASSETS.starH,
    vVideo: false, hVideo: true,
    vRatio: "3/4", hRatio: "16/9",
    textSide: "left" as const,
    link: undefined, linkLabel: undefined,
    badges: false,
  },
  {
    label: "The Landscape",
    headline: "Rainbow Valley & Beyond",
    description: "From the multicolored mineral deposits of Rainbow Valley to the surreal moonscapes of Valle de la Luna, the Atacama's geology tells a story spanning millions of years. Every horizon reveals a new palette.",
    vSrc: ASSETS.landV, hSrc: ASSETS.landH,
    vVideo: true, hVideo: true,
    vRatio: "9/16", hRatio: "16/9",
    textSide: "right" as const,
    link: undefined, linkLabel: undefined,
    badges: false,
  },
  {
    label: "Wildlife",
    headline: "Flamingos & Vicuñas",
    description: "Despite its extreme aridity, the Atacama teems with life. Andean flamingos gather at high-altitude lagoons, vicuñas roam the altiplano, and unique desert-adapted species thrive in this unlikely ecosystem.",
    vSrc: ASSETS.wildV, hSrc: ASSETS.wildH,
    vVideo: true, hVideo: false,
    vRatio: "9/16", hRatio: "16/9",
    textSide: "left" as const,
    link: undefined, linkLabel: undefined,
    badges: false,
  },
  {
    label: "Adventure",
    headline: "Into the Desert",
    description: "Whether trekking through ancient canyons, sandboarding down volcanic dunes, or cycling across salt flats, the Atacama rewards those who venture beyond the horizon with experiences that redefine adventure.",
    vSrc: ASSETS.advV, hSrc: ASSETS.advH,
    vVideo: true, hVideo: true,
    vRatio: "9/16", hRatio: "16/9",
    textSide: "right" as const,
    link: undefined, linkLabel: undefined,
    badges: false,
  },
  {
    label: "Desert Twilight",
    headline: "When the Desert Glows",
    description: "As the sun descends, the Atacama transforms. The desert floor radiates warmth, the sky ignites in impossible colors, and the resort becomes a glowing sanctuary against the vast, silent landscape.",
    vSrc: ASSETS.duskV, hSrc: ASSETS.duskH,
    vVideo: false, hVideo: false,
    vRatio: "3/4", hRatio: "16/9",
    textSide: "left" as const,
    link: undefined, linkLabel: undefined,
    badges: false,
  },
  {
    label: "Architecture",
    headline: "Built from the Earth",
    description: "Every structure at Alto Atacama emerges from the landscape itself — adobe walls, stone courtyards, and thatched roofs that echo the ancient building traditions of the Atacameño people. The resort is not placed on the desert; it grows from it.",
    vSrc: ASSETS.archV, hSrc: ASSETS.archH,
    vVideo: true, hVideo: true,
    vRatio: "9/16", hRatio: "16/9",
    textSide: "right" as const,
    link: undefined, linkLabel: undefined,
    badges: false,
  },
  {
    label: "The Pool",
    headline: "Desert Oasis",
    description: "As the sun sets behind the Andes, the pool becomes a mirror reflecting the Atacama's infinite sky. Our suites open directly onto private terraces where the boundary between interior luxury and desert landscape dissolves entirely.",
    vSrc: ASSETS.suiteInterior, hSrc: ASSETS.poolSunset,
    vVideo: false, hVideo: false,
    vRatio: "3/4", hRatio: "16/9",
    textSide: "left" as const,
    link: undefined, linkLabel: undefined,
    badges: false,
  },
  {
    label: "Flamingo Lagoon",
    headline: "Salt & Sky",
    description: "At the high-altitude lagoons surrounding the resort, Andean flamingos gather in the thousands — their pink silhouettes reflected in mineral-rich waters against a backdrop of snow-capped volcanoes. Our guided excursions bring you to these fragile ecosystems at the perfect hour.",
    vSrc: ASSETS.flamingoLagoon, hSrc: ASSETS.heroDesktopPhoto,
    vVideo: true, hVideo: false,
    vRatio: "9/16", hRatio: "16/9",
    textSide: "right" as const,
    link: undefined, linkLabel: undefined,
    badges: false,
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

      {CASCADE_SECTIONS.map((section, i) => (
        <CascadeSection
          key={i}
          label={section.label}
          headline={section.headline}
          description={section.description}
          verticalSrc={section.vSrc}
          horizontalSrc={section.hSrc}
          verticalIsVideo={section.vVideo}
          horizontalIsVideo={section.hVideo}
          verticalRatio={section.vRatio}
          horizontalRatio={section.hRatio}
          textSide={section.textSide}
          bgColor={SECTION_COLORS[i + 1] || SECTION_COLORS[SECTION_COLORS.length - 1]}
          link={section.link}
          linkLabel={section.linkLabel}
          badges={section.badges}
        />
      ))}

      {/* ★ By Night — darkest end of cascade */}
      <ByNightCTA
        verticalSrc="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-cactus-milkyway_a7dc0b5c.webp"
        verticalRatio="3/4"
        horizontalSrc="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nbn-rock-arch-milkyway_729bcc81.webp"
        horizontalRatio="16/9"
        bgColor="#1a1a24"
        headline={"The Clearest\nSkies on Earth"}
        bodyText="At 2,400 meters in the driest desert on the planet, the Atacama offers some of the most pristine stargazing conditions anywhere. The Milky Way arcs overhead in impossible detail — no telescope required. Discover the extraordinary nocturnal experiences across all Nayara properties."
        textSide="left"
      />

      <GettingHereSection />
      <AwardsSection />
      <ReserveCTA />
      <Footer />
    </div>
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
        <NativeVideo src={heroVideo} className="w-full h-full object-cover" hasAudio />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </div>
      {/* Hero text — subtle fade-in */}
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-6 md:pb-10 px-6 md:px-10">
        <MultiLineReveal
          lines={["Atacama Desert Oasis Lodge"]}
          lineClassName="text-white text-xl md:text-3xl lg:text-4xl leading-[1] tracking-wide text-center"
          as="h1"
          delay={0.6}
          staggerDelay={0.15}
        />
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
              or call <a href="tel:+18448652002" style={{ color: PALETTE.primary, textDecoration: "underline" }}>1-844-865-2002</a>.
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
                <p className="text-[11px] tracking-[0.15em] uppercase mb-3" style={{ ...body, fontWeight: 500, color: PALETTE.primary }}>{award.year}</p>
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
            className="inline-block px-10 py-3.5 rounded-full text-[11px] tracking-[0.2em] uppercase transition-all hover:opacity-80"
            style={{ ...body, fontWeight: 500, backgroundColor: PALETTE.primary, color: "#fff" }}
          >
            Reserve Your Stay
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
