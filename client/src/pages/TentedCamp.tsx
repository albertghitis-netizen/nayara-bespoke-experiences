/**
 * NAYARA TENTED CAMP — Arenal, Costa Rica
 * Option C: Cascade with functional breaks woven in
 * Full-bleed edge-to-edge media, canopy gradient
 * Functional breaks: Reviews pull-quote, Journal link, Getting Here
 * woven between cascade sections — not appended at the end
 */
import { motion } from "framer-motion";
import NativeVideo from "@/components/NativeVideo";
import { useIsMobile } from "@/hooks/useMobile";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import {
  AnimateOnScroll,
  TextReveal,
  MultiLineReveal,
  MediaReveal,
  fadeUp,
  DURATION,
  EASE_CINEMATIC,
} from "@/components/motion";

/* ═══════════════════════════════════════════════════════════════
   PALETTE — "Canopy" gradient: misty green → deep forest
   ═══════════════════════════════════════════════════════════════ */
const SECTION_COLORS = [
  "#F5F1EB", // 0 hero
  "#F0EDE5", // 1 story
  "#EBE8DE", // 2 accommodations
  "#E6E3D7", // 3 experiences
  "#E1DED0", // 4 wellness (before review break)
  "#DCD9C9", // 5 gastronomy (after review break)
  "#D7D4C2", // 6 wildlife (before journal break)
  "#D2CFBB", // 7 adventure (after journal break)
  "#CDCAB4", // 8 spa
  "#C8C5AD", // 9 getting here / gallery
];

const PALETTE = {
  text: "#2C2418",
  textSecondary: "#7A6F63",
  textTertiary: "#B0A89E",
  primary: "#4A5E3C",
  accent: "#6B8F5C",
  divider: "#E2DDD5",
};

const display = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)" } as const;

/* ═══════════════════════════════════════════════════════════════
   CDN ASSETS
   ═══════════════════════════════════════════════════════════════ */
const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

const ASSETS = {
  heroDesktop: `${CDN}/tented-camp-hero-desktop_90751603.mp4`,
  heroMobile: `${CDN}/tented_hero_vertical_0834f0e2.mp4`,

  storyV: `${CDN}/IMG_5354_8a9b536e.PNG`,
  storyH: `${CDN}/340C7D71-BAF3-4215-B25E-98878C4B65F6_48b343e5.JPEG`,

  roomsV: `${CDN}/grandtent3_dd3f6902.jpg`,
  roomsH: `${CDN}/Supersale-3_38ac1aa5.jpg`,

  expV: `${CDN}/hanging-bridges-vertical_e6838fa9.mp4`,
  expH: `${CDN}/TentedExperienceVideo_fixed_75e9afca.mp4`,

  wellV: `${CDN}/hot-springs-vertical_52b2b6ec.mp4`,
  wellH: `${CDN}/tented-wellness-video_26fcc290.mp4`,

  gastroV: `${CDN}/atasteofplace_f64f6f71.jpg`,
  gastroH: `${CDN}/Supersale-4_7834ffc2.jpg`,

  wildV: `${CDN}/costa-rica-toucan_a70ad74a.mp4`,
  wildH: `${CDN}/bird-watching-horizontal_abd70271.mp4`,

  advV: `${CDN}/frog-tour-vertical_17b18385.mp4`,
  advH: `${CDN}/wildlife-reel_7c30f53f.mp4`,

  spaV: `${CDN}/4O1A1569-Spa-NayaraTentedCampwithLivLawbyBriceFerreStudio-VancouverPortraitAdventureandAthletePhotographer_0e850f3a.webp`,
  spaH: `${CDN}/hot-springs-horizontal_2508b725.mp4`,

  galleryVideo1: `${CDN}/tc-gallery-video-new_afba07b0.mp4`,
  galleryVideo2: `${CDN}/gallery-residence-video-v2_2ca0004b.mp4`,
  galleryVideo3: `${CDN}/gallery-final-video_7a430890.mp4`,
  galleryImg1: `${CDN}/(Rooms)NayaraTent3copy_54044994.webp`,
  galleryImg2: `${CDN}/HenrysBar_69b1e477.webp`,
  galleryImg3: `${CDN}/12.Residence_17d767d7.webp`,
  galleryImg4: `${CDN}/(Rooms)Residence3_48e06b8c.webp`,
  galleryImg5: `${CDN}/38.jTentDetailpg_b2b74566.webp`,
  galleryImg6: `${CDN}/Grand(1)_0127cf09.webp`,
  galleryImg7: `${CDN}/NewAreaBriceFerre(2)_cf5128c9.webp`,
  galleryImg8: `${CDN}/19B9D444-0A7C-4C29-93A3-A8C0DFDFBD31_aa5cae9d.JPEG`,
  galleryImg9: `${CDN}/Supersale-3_3588efbb.jpg`,

  badges: `${CDN}/award-badges-tented-camp_8aea5e71.webp`,
};

/* ═══════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════ */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[11px] tracking-[0.2em] uppercase mb-4"
      style={{ ...body, fontWeight: 500, color: PALETTE.primary }}
    >
      {children}
    </p>
  );
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
   CASCADE SECTION — Full-bleed desktop, stacked mobile
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
  link?: string;
  linkLabel?: string;
  badges?: boolean;
};

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
        <div className={`w-full md:w-1/2 ${isEven ? "md:order-1" : "md:order-2"}`}>
          <MediaReveal delay={0.1}>
            <MediaBlock
              src={section.verticalSrc}
              isVideo={section.verticalIsVideo}
              ratio={section.verticalRatio}
              alt={`${section.label} — Nayara Tented Camp`}
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
                  style={{ ...display, color: PALETTE.text }}
                >
                  {line}
                </span>
              ))}
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll variants={fadeUp} delay={0.2}>
            <p
              className="text-[15px] leading-[1.85] max-w-[480px]"
              style={{ ...body, color: PALETTE.textSecondary }}
            >
              {section.body}
            </p>
          </AnimateOnScroll>

          {section.link && (
            <AnimateOnScroll variants={fadeUp} delay={0.3}>
              <a
                href={section.link}
                className="inline-block mt-6 text-[11px] tracking-[0.15em] uppercase transition-colors hover:opacity-70"
                style={{ ...body, fontWeight: 500, color: PALETTE.primary }}
              >
                {section.linkLabel || "Explore More"} →
              </a>
            </AnimateOnScroll>
          )}

          {section.badges && (
            <AnimateOnScroll variants={fadeUp} delay={0.35}>
              <img
                src={ASSETS.badges}
                alt="Award badges — Tented Camp"
                className="h-28 md:h-36 lg:h-48 w-auto object-contain opacity-60 mt-6"
                loading="lazy"
              />
            </AnimateOnScroll>
          )}
        </div>
      </div>

      {/* ── Full-width horizontal media ── */}
      <div style={{ backgroundColor: section.nextBgColor }}>
        <MediaReveal delay={0.05}>
          <MediaBlock
            src={section.horizontalSrc}
            isVideo={section.horizontalIsVideo}
            ratio={section.horizontalRatio}
            alt={`${section.label} landscape — Nayara Tented Camp`}
            className="w-full"
          />
        </MediaReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FUNCTIONAL BREAK — Reviews Pull-Quote
   Woven between Wellness and Gastronomy sections
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
            className="text-[11px] tracking-[0.2em] uppercase mb-6"
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
            Based on 1,200+ reviews on TripAdvisor
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.2}>
          <blockquote>
            <p
              className="text-[17px] md:text-[20px] leading-relaxed italic mb-4"
              style={{ ...body, color: PALETTE.text }}
            >
              "An extraordinary experience. The tents are beyond luxurious, the staff anticipates every need, and waking up to the sounds of the rainforest with Arenal Volcano in view is something you never forget."
            </p>
            <cite
              className="text-[12px] tracking-[0.08em] not-italic"
              style={{ ...body, color: PALETTE.textTertiary }}
            >
              — Andrew, TripAdvisor
            </cite>
          </blockquote>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.3}>
          <a
            href="https://www.tripadvisor.com/Hotel_Review-g309226-d12099846-Reviews-Nayara_Tented_Camp-La_Fortuna_de_San_Carlos_Arenal_Volcano_National_Park_Province_of_Al.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 text-[11px] tracking-[0.15em] uppercase transition-opacity hover:opacity-70"
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
   FUNCTIONAL BREAK — Journal Link
   Woven between Wildlife and Adventure sections
   ═══════════════════════════════════════════════════════════════ */
function JournalBreak({ bgColor }: { bgColor: string }) {
  return (
    <section
      className="py-16 md:py-24 px-8 md:px-16"
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-3xl mx-auto">
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[11px] tracking-[0.2em] uppercase mb-6"
            style={{ ...body, fontWeight: 500, color: PALETTE.primary }}
          >
            From the Journal
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.1}>
          <a
            href="https://blog.nayararesorts.com/nayara-arenals-adventures-in-flavor"
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 md:p-8 transition-all"
            style={{ borderLeft: `2px solid ${PALETTE.primary}30` }}
          >
            <h3
              className="text-lg md:text-xl leading-snug mb-3 group-hover:opacity-70 transition-opacity"
              style={{ ...display, fontWeight: 400, color: PALETTE.text }}
            >
              Rainforest to Table: Arenal Adventures in Flavor
            </h3>
            <p
              className="text-[14px] leading-relaxed mb-4"
              style={{ ...body, color: PALETTE.textSecondary }}
            >
              How our chefs transform the extraordinary biodiversity of the Arenal rainforest into a culinary journey that celebrates Costa Rica's terroir.
            </p>
            <span
              className="text-[11px] tracking-[0.15em] uppercase group-hover:opacity-70 transition-opacity"
              style={{ ...body, fontWeight: 500, color: PALETTE.primary }}
            >
              Read the Story →
            </span>
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FUNCTIONAL BREAK — Getting Here
   After the last cascade section, before gallery
   ═══════════════════════════════════════════════════════════════ */
function GettingHereBreak({ bgColor }: { bgColor: string }) {
  const routes = [
    {
      title: "International Flights",
      description: "Fly into San José (SJO) or Liberia (LIR) international airports. Both receive direct flights from major US and European cities.",
      icon: "✈",
    },
    {
      title: "Domestic Flight",
      description: "Take a short domestic flight from SJO to La Fortuna/Arenal (~30 minutes). The hotel can arrange transfers from the local airstrip.",
      icon: "⏱",
    },
    {
      title: "Private Transfer",
      description: "Arrange a private transfer from San José (~3 hours) or Liberia (~2.5 hours). Scenic drive through the Central Valley with volcano views.",
      icon: "🚐",
    },
    {
      title: "Self-Drive",
      description: "Rent a car at either airport and drive to Arenal. Well-paved roads with clear signage. The journey from SJO takes approximately 3 hours.",
      icon: "🗺",
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
              className="text-2xl md:text-4xl lg:text-[42px] leading-[1.1] tracking-wide"
              style={{ ...display, color: PALETTE.text }}
            >
              Your Journey to Arenal
            </span>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll variants={fadeUp} delay={0.15}>
          <p
            className="text-[15px] leading-relaxed mb-12 md:mb-16 max-w-xl"
            style={{ ...body, color: PALETTE.textSecondary }}
          >
            Nayara Tented Camp is located in the Arenal Volcano region of Costa Rica, one of the most accessible luxury destinations in Central America.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {routes.map((route, i) => (
            <AnimateOnScroll key={i} variants={fadeUp} delay={0.1 + i * 0.08}>
              <div className="flex gap-5">
                <div
                  className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-lg"
                  style={{ backgroundColor: `${PALETTE.primary}10`, color: PALETTE.primary }}
                >
                  {route.icon}
                </div>
                <div>
                  <h3
                    className="text-[16px] mb-2"
                    style={{ ...display, fontWeight: 500, color: PALETTE.text }}
                  >
                    {route.title}
                  </h3>
                  <p
                    className="text-[13px] leading-relaxed"
                    style={{ ...body, color: PALETTE.textSecondary }}
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
              style={{ ...body, color: PALETTE.textSecondary }}
            >
              <span style={{ fontWeight: 500, color: PALETTE.text }}>Need help planning your journey?</span>{" "}
              Our reservations team can arrange all transfers and domestic flights. Contact us at{" "}
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
   SECTION DATA — 8 cascade sections
   ═══════════════════════════════════════════════════════════════ */
const SECTIONS_BEFORE_REVIEW: CascadeSectionData[] = [
  {
    id: "story",
    label: "The Camp",
    headline: "Where Jungle\nMeets Luxury",
    body: "Nestled within the Arenal Volcano rainforest canopy, Nayara Tented Camp redefines luxury with open-air tented suites, private plunge pools, and uninterrupted views of the volcano. This is where wild nature and refined comfort become one.",
    verticalSrc: ASSETS.storyV,
    horizontalSrc: ASSETS.storyH,
    verticalIsVideo: false,
    horizontalIsVideo: false,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[1],
    nextBgColor: SECTION_COLORS[2],
    badges: true,
  },
  {
    id: "rooms",
    label: "Accommodations",
    headline: "Grand Tented\nSuites",
    body: "Each tented suite is a private sanctuary suspended in the canopy — featuring outdoor rain showers, handcrafted furnishings, and a plunge pool overlooking the volcano. The architecture honors the rainforest while delivering every modern luxury.",
    verticalSrc: ASSETS.roomsV,
    horizontalSrc: ASSETS.roomsH,
    verticalIsVideo: false,
    horizontalIsVideo: false,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[2],
    nextBgColor: SECTION_COLORS[3],
    link: "/tented-camp/rooms",
    linkLabel: "Explore Rooms",
  },
  {
    id: "experiences",
    label: "Experiences",
    headline: "Rainforest\nAdventures",
    body: "Cross hanging bridges through the canopy, rappel down waterfalls, or trek to hidden volcanic hot springs. Every experience at Tented Camp connects you to the raw power and beauty of the Arenal rainforest.",
    verticalSrc: ASSETS.expV,
    horizontalSrc: ASSETS.expH,
    verticalIsVideo: true,
    horizontalIsVideo: true,
    verticalRatio: "9/16",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[3],
    nextBgColor: SECTION_COLORS[4],
    link: "/tented-camp/experiences",
    linkLabel: "Explore More",
  },
  {
    id: "wellness",
    label: "Wellness",
    headline: "Volcanic\nHealing",
    body: "Thermal springs heated by the volcano itself, open-air spa treatments surrounded by birdsong, and yoga platforms overlooking the forest canopy. Wellness at Tented Camp is powered by the earth beneath your feet.",
    verticalSrc: ASSETS.wellV,
    horizontalSrc: ASSETS.wellH,
    verticalIsVideo: true,
    horizontalIsVideo: true,
    verticalRatio: "9/16",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[4],
    nextBgColor: SECTION_COLORS[5],
    link: "/tented-camp/wellness",
    linkLabel: "Explore More",
  },
];

/* ── Review break goes here ── */

const SECTIONS_AFTER_REVIEW: CascadeSectionData[] = [
  {
    id: "gastronomy",
    label: "A Taste of Place",
    headline: "Farm to\nCanopy",
    body: "Our chefs source ingredients from local farms and our own gardens to create cuisine that celebrates Costa Rica's biodiversity. Dine under the stars at Henry's Bar or enjoy a private dinner on your suite deck.",
    verticalSrc: ASSETS.gastroV,
    horizontalSrc: ASSETS.gastroH,
    verticalIsVideo: false,
    horizontalIsVideo: false,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[5],
    nextBgColor: SECTION_COLORS[6],
    link: "/tented-camp/gastronomy",
    linkLabel: "Explore More",
  },
  {
    id: "wildlife",
    label: "Wildlife",
    headline: "Toucans &\nTree Frogs",
    body: "The Arenal rainforest is one of the most biodiverse places on Earth. From resplendent quetzals to red-eyed tree frogs, every morning brings a new encounter with the extraordinary creatures that share this canopy.",
    verticalSrc: ASSETS.wildV,
    horizontalSrc: ASSETS.wildH,
    verticalIsVideo: true,
    horizontalIsVideo: true,
    verticalRatio: "9/16",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[6],
    nextBgColor: SECTION_COLORS[7],
  },
];

/* ── Journal break goes here ── */

const SECTIONS_AFTER_JOURNAL: CascadeSectionData[] = [
  {
    id: "adventure",
    label: "Adventure",
    headline: "Into the\nCanopy",
    body: "Zipline through the treetops, kayak volcanic lakes, or join a night safari to discover the rainforest's nocturnal world. Adventure at Tented Camp is immersive, guided, and unforgettable.",
    verticalSrc: ASSETS.advV,
    horizontalSrc: ASSETS.advH,
    verticalIsVideo: true,
    horizontalIsVideo: true,
    verticalRatio: "9/16",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[7],
    nextBgColor: SECTION_COLORS[8],
  },
  {
    id: "spa",
    label: "The Spa",
    headline: "Canopy\nSanctuary",
    body: "Suspended between earth and sky, our spa treatments blend ancient Costa Rican traditions with modern wellness. Volcanic mud wraps, rainforest aromatherapy, and thermal soaks restore body and spirit.",
    verticalSrc: ASSETS.spaV,
    horizontalSrc: ASSETS.spaH,
    verticalIsVideo: false,
    horizontalIsVideo: true,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[8],
    nextBgColor: SECTION_COLORS[9],
  },
];

/* ═══════════════════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const isMobile = useIsMobile();
  const heroVideo = isMobile ? ASSETS.heroMobile : ASSETS.heroDesktop;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <NativeVideo src={heroVideo} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-12 md:pb-20 px-6 md:px-10">
        <MultiLineReveal
          lines={["Luxury Tents", "In the Canopy"]}
          lineClassName="text-white text-3xl md:text-5xl lg:text-6xl leading-[1] tracking-wide text-center"
          as="h1"
          delay={0.4}
          staggerDelay={0.15}
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.slow, delay: 0.3, ease: EASE_CINEMATIC }}
          className="text-white/50 text-[11px] md:text-[13px] mt-6 tracking-[0.3em] uppercase"
          style={{ ...body, fontWeight: 400 }}
        >
          Adults Only
        </motion.p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   GALLERY — Remaining assets
   ═══════════════════════════════════════════════════════════════ */
function GallerySection() {
  const media = [
    { src: ASSETS.galleryVideo1, alt: "Tented Camp experience", isVideo: true },
    { src: ASSETS.galleryVideo2, alt: "Residence tour", isVideo: true },
    { src: ASSETS.galleryVideo3, alt: "Camp overview", isVideo: true },
    { src: ASSETS.galleryImg1, alt: "Tented suite", isVideo: false },
    { src: ASSETS.galleryImg2, alt: "Henry's Bar", isVideo: false },
    { src: ASSETS.galleryImg3, alt: "Residence", isVideo: false },
    { src: ASSETS.galleryImg4, alt: "Residence suite", isVideo: false },
    { src: ASSETS.galleryImg5, alt: "Tent detail", isVideo: false },
    { src: ASSETS.galleryImg6, alt: "Grand tent", isVideo: false },
    { src: ASSETS.galleryImg7, alt: "New area", isVideo: false },
    { src: ASSETS.galleryImg8, alt: "Camp grounds", isVideo: false },
    { src: ASSETS.galleryImg9, alt: "Resort exterior", isVideo: false },
  ];

  return (
    <section
      id="gallery"
      className="py-20 md:py-32 px-6 md:px-10"
      style={{ backgroundColor: SECTION_COLORS[SECTION_COLORS.length - 1] }}
    >
      <div className="max-w-[1200px] mx-auto">
        <AnimateOnScroll variants={fadeUp}>
          <SectionLabel>Gallery</SectionLabel>
        </AnimateOnScroll>
        <TextReveal as="h2" className="mb-12 md:mb-16" delay={0.1}>
          <span
            className="text-2xl md:text-4xl lg:text-5xl tracking-wide"
            style={{ ...display, color: PALETTE.text }}
          >
            Life in the Canopy
          </span>
        </TextReveal>

        <div className="hidden md:grid grid-cols-3 gap-4 md:gap-6">
          {media.map((item, i) => (
            <MediaReveal key={i} delay={i * 0.05}>
              <div className="overflow-hidden" style={{ aspectRatio: "16/10" }}>
                {item.isVideo ? (
                  <NativeVideo src={item.src} className="w-full h-full object-cover" />
                ) : (
                  <img src={item.src} alt={item.alt} className="w-full h-full object-cover" loading="lazy" />
                )}
              </div>
            </MediaReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE — Option C: Cascade with functional breaks woven in
   
   Flow:
   1. Hero
   2. Story → Rooms → Experiences → Wellness (cascade)
   3. ★ Reviews pull-quote break ★
   4. Gastronomy → Wildlife (cascade)
   5. ★ Journal link break ★
   6. Adventure → Spa (cascade)
   7. ★ Getting Here break ★
   8. Gallery
   9. Footer
   ═══════════════════════════════════════════════════════════════ */
export default function TentedCamp() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: SECTION_COLORS[0] }}>
      <BrandNavigation pageType="property" />
      <HeroSection />

      {/* Cascade: Story → Rooms → Experiences → Wellness */}
      {SECTIONS_BEFORE_REVIEW.map((section, i) => (
        <CascadeSection key={section.id} section={section} index={i} />
      ))}

      {/* ★ Functional break: Reviews */}
      <ReviewsBreak bgColor={SECTION_COLORS[5]} />

      {/* Cascade: Gastronomy → Wildlife */}
      {SECTIONS_AFTER_REVIEW.map((section, i) => (
        <CascadeSection
          key={section.id}
          section={section}
          index={i + SECTIONS_BEFORE_REVIEW.length}
        />
      ))}

      {/* ★ Functional break: Journal */}
      <JournalBreak bgColor={SECTION_COLORS[7]} />

      {/* Cascade: Adventure → Spa */}
      {SECTIONS_AFTER_JOURNAL.map((section, i) => (
        <CascadeSection
          key={section.id}
          section={section}
          index={i + SECTIONS_BEFORE_REVIEW.length + SECTIONS_AFTER_REVIEW.length}
        />
      ))}

      {/* ★ Functional break: Getting Here */}
      <GettingHereBreak bgColor={SECTION_COLORS[9]} />

      <GallerySection />
      <Footer />
    </div>
  );
}
