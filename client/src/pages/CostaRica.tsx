/*
 * COSTA RICA HUB — Destination-level editorial page
 *
 * Flow: Hero → Why Costa Rica → Arenal Volcano → Six Experiential Pillars
 *       → Three Properties → Journal → Footer
 *
 * Palette: Tented + Gardens blend
 *   Light: #F5F0E8 (warm linen), #EDF2E8 (sage mist), #E2D7C8 (bone)
 *   Dark:  #525642 (olive), #286241 (clover), #3B2B26 (espresso)
 *   Nav:   #3D5040 (deep forest)
 *   Text on light: #3B2B26 | Text on dark: #FFFFFF
 */

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "wouter";
import BrandNavigation from "@/components/BrandNavigation";
import NativeVideo from "@/components/NativeVideo";
import Footer from "@/components/Footer";
import { useIsMobile } from "@/hooks/useMobile";

/* ── CDN Assets ──────────────────────────────────────────────── */
const CDN = {
  heroDesktop:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/compressed-arenal-desktop_05c5168c.mp4",
  heroMobile:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/volcano-arenal-vertical_8f4b62b0.mp4",
  tentedAerial:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hero2-arenal-tent_860ab6b2.webp",
  hangingBridges:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hanging-bridges-photo_a49dba00.jpeg",
  hotSprings:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hot-springs-hero_a60a0e92.jpg",
  yoga:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/yoga-photo_3b789b60.jpg",
  frogTour:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/frog-tour-hero_dc75898f.jpg",
  springsPool:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-s1-pools_8e255e18.png",
  gardensProperty:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/prop-gardens_5931d8af.jpg",
  tentedProperty:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/19B9D444-0A7C-4C29-93A3-A8C0DFDFBD31_aa5cae9d.JPEG",
  springsProperty:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-villa-plunge-pool-straight_a5d505d1.webp",
  rainforestMan: "/manus-storage/costa-rica-rainforest-man_2f0aa5cc.jpeg",
};

/* ── Colors ───────────────────────────────────────────────────── */
const C = {
  bone: "#E2D7C8",
  warmLinen: "#F5F0E8",
  sageMist: "#EDF2E8",
  olive: "#525642",
  clover: "#286241",
  espresso: "#3B2B26",
  deepForest: "#3D5040",
  white: "#FFFFFF",
};

/* ── Nav Palette ─────────────────────────────────────────────── */
const hubNavPalette = {
  dark: C.deepForest,
  pillBg: C.deepForest,
  pillHover: C.olive,
};

/* ── Six Pillars ─────────────────────────────────────────────── */
const PILLARS = [
  {
    title: "Nature & Adventure",
    subtitle:
      "Volcano, canopy, canyon, river — the living landscape of Arenal.",
    route: "/experiential-arenal",
    image: CDN.hangingBridges,
    ready: true,
  },
  {
    title: "Nature-Based Wellness",
    subtitle:
      "Hot springs, rainforest spa, and the science of green exposure.",
    route: "/experiential-wellness",
    image: CDN.hotSprings,
    ready: true,
  },
  {
    title: "A Taste of Place",
    subtitle:
      "Farm to rainforest table — cacao, coffee, and Michelin-recognized dining.",
    route: "/experiential-gastronomy",
    image: "/manus-storage/journal-cover-gastronomy-fire_a510d2d4.webp",
    ready: true,
  },
  {
    title: "Family Adventure",
    subtitle:
      "The rainforest as living classroom — sloths, wildlife corridors, and wonder.",
    route: "/family-adventure",
    image: CDN.frogTour,
    ready: false,
  },
  {
    title: "Romance, Naturally",
    subtitle:
      "Adults-only escapes where volcanic warmth meets rainforest serenity.",
    route: "/romance-naturally",
    image: CDN.springsPool,
    ready: false,
  },
  {
    title: "Rainforest & Reef Restoration",
    subtitle:
      "From cattle pasture to canopy — active regeneration across two ecosystems.",
    route: "/rainforest-reef-restoration",
    image: CDN.tentedAerial,
    ready: false,
  },
];

/* ── Journal entries ─────────────────────────────────────────── */
const JOURNAL_ENTRIES = [
  {
    title: "Pura Vida and the Science of Why Costa Rica Feels Different",
    route: "/journal/pura-vida",
    image: "https://blog.nayararesorts.com/hubfs/IMG_9102.jpg",
  },
  {
    title: "Arenal, Costa Rica: A Timeless Natural Wonder",
    route: "/journal/arenal-timeless-wonder",
    image: CDN.frogTour,
  },
  {
    title: "Wildlife Conservation in Arenal and Bocas del Toro",
    route: "/journal/wildlife-arenal-bocas",
    image: "https://blog.nayararesorts.com/hubfs/Swimming-Sloth-1024x683.jpg",
  },
  {
    title: "Meeting the Toucans of Arenal Rainforest",
    route: "/journal/toucans-arenal",
    image: CDN.hangingBridges,
  },
  {
    title: "Nature-Based Wellness by Colors",
    route: "/journal/nature-based-wellness-colors",
    image: CDN.yoga,
  },
  {
    title: "Creating Unforgettable Family Travel with Nayara",
    route: "/journal/family-travel",
    image: CDN.gardensProperty,
  },
];

/* ── Fade-in wrapper ─────────────────────────────────────────── */
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAGE ROOT
   ═══════════════════════════════════════════════════════════════ */
export default function CostaRica() {
  const isMobile = useIsMobile();
  const heroVideo = isMobile ? CDN.heroMobile : CDN.heroDesktop;

  return (
    <div className="min-h-screen" style={{ backgroundColor: C.warmLinen }}>
      <BrandNavigation
        pageType="brand"
        navPalette={hubNavPalette}
        hideCenterLabel
      />
      <HeroSection videoSrc={heroVideo} />
      <WhyCostaRicaSection />
      <ArenalSection />
      <PillarsSection />
      <ThreePropertiesSection />
      <JournalSection />
      <Footer pageType="brand" bgColor={C.espresso} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO — Full-screen video, "Costa Rica" title
   ═══════════════════════════════════════════════════════════════ */
function HeroSection({ videoSrc }: { videoSrc: string }) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <NativeVideo src={videoSrc} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-black/60" />
      </div>

      {/* Subtle top label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.4 }}
        className="absolute top-24 md:top-28 left-0 right-0 z-10 flex justify-center"
      >
        <span
          className="text-white/20 text-[11px] md:text-xs tracking-[0.5em] uppercase"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Nayara Resorts
        </span>
      </motion.div>

      {/* Title anchored to bottom */}
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-12 md:pb-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h1
            className="text-white text-3xl md:text-5xl lg:text-6xl tracking-wide"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              lineHeight: 1,
            }}
          >
            Costa Rica
          </h1>
          <p
            className="mt-4 text-white/70 text-sm md:text-base tracking-[0.15em] uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Arenal Volcano &middot; Three Resorts &middot; One Rainforest
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   WHY COSTA RICA — Pura Vida, biodiversity, the green effect
   ═══════════════════════════════════════════════════════════════ */
function WhyCostaRicaSection() {
  return (
    <section style={{ backgroundColor: C.warmLinen }}>
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <Reveal>
          <span
            className="text-[11px] tracking-[0.3em] uppercase block mb-6"
            style={{ fontFamily: "var(--font-body)", color: C.olive }}
          >
            Why Costa Rica
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            className="text-2xl md:text-4xl lg:text-[2.8rem] leading-[1.15] mb-8"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              color: C.espresso,
            }}
          >
            Pura Vida Is Not a Saying.{" "}
            <span style={{ color: C.clover }}>
              It Is a Measurable Phenomenon.
            </span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 mt-10">
          <Reveal delay={0.15}>
            <div>
              <p
                className="text-[15px] md:text-base leading-[1.8] mb-6"
                style={{ fontFamily: "var(--font-body)", color: C.espresso }}
              >
                Costa Rica covers 0.03% of the Earth's surface and holds nearly
                6% of its biodiversity. It runs on 99% renewable energy. It was
                the first tropical country to reverse deforestation. And it
                consistently ranks among the happiest nations on the planet —
                not because of GDP, but because of something harder to quantify.
              </p>
              <p
                className="text-[15px] md:text-base leading-[1.8]"
                style={{ fontFamily: "var(--font-body)", color: C.espresso }}
              >
                Walk out of your villa in Arenal and you are in the color green.
                Not a single shade, but layers: broad leaves at eye level, moss
                on trunks, epiphytes in the branches, a canopy that filters
                light into shifting bands. Air feels thicker here. You hear
                water before you see it. Bird calls overlap with insect pulses
                and the low rush of a nearby spring.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="relative">
              <img
                src={CDN.rainforestMan}
                alt="Man standing among rainforest roots in Costa Rica"
                className="w-full h-[400px] md:h-[480px] object-cover"
              />
              <p
                className="mt-4 text-[11px] tracking-[0.1em] uppercase"
                style={{ fontFamily: "var(--font-body)", color: C.olive }}
              >
                What happens to your brain and body when you stay in Costa Rica
              </p>
            </div>
          </Reveal>
        </div>

        {/* Pull quote */}
        <Reveal delay={0.3}>
          <blockquote
            className="mt-14 md:mt-20 border-l-2 pl-6 md:pl-8 max-w-3xl"
            style={{ borderColor: C.clover }}
          >
            <p
              className="text-lg md:text-xl leading-[1.6] italic"
              style={{
                fontFamily: "var(--font-display)",
                color: C.espresso,
              }}
            >
              "There is a distinction between a hotel that has a view of nature
              and a hotel that is built around it. Nature ceases to be the
              setting for luxury and becomes the discipline that defines it."
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ARENAL — The volcano, the rainforest, the reforestation story
   ═══════════════════════════════════════════════════════════════ */
function ArenalSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={sectionRef} style={{ backgroundColor: C.sageMist }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid md:grid-cols-5 gap-10 md:gap-14 items-center">
          {/* Image — 3 cols */}
          <Reveal className="md:col-span-3 overflow-hidden">
            <motion.div style={{ y: imgY }}>
              <img
                src={CDN.tentedAerial}
                alt="Aerial view of Nayara Tented Camp among the rainforest canopy with Arenal Volcano"
                className="w-full h-[350px] md:h-[500px] object-cover"
              />
            </motion.div>
          </Reveal>

          {/* Text — 2 cols */}
          <div className="md:col-span-2">
            <Reveal>
              <span
                className="text-[11px] tracking-[0.3em] uppercase block mb-6"
                style={{ fontFamily: "var(--font-body)", color: C.olive }}
              >
                Arenal Volcano
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2
                className="text-2xl md:text-3xl leading-[1.15] mb-6"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  color: C.espresso,
                }}
              >
                Where the Rainforest{" "}
                <span style={{ color: C.clover }}>Grew Back</span>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p
                className="text-[15px] leading-[1.8] mb-5"
                style={{ fontFamily: "var(--font-body)", color: C.espresso }}
              >
                Thousands of cecropia and guarumo trees were replanted on former
                cattle pasture to restore sloth habitat. Twenty-one tents now
                sit on stilts above the regrowing rainforest. Sloths, monkeys,
                and tropical birds pass through the canopy surrounding your
                room.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p
                className="text-[15px] leading-[1.8]"
                style={{ fontFamily: "var(--font-body)", color: C.espresso }}
              >
                This is not a resort with a view of nature. It is a resort
                built around it — where every structural decision answers to
                what was there first. The site precedes the building. The
                rainforest is the architecture.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SIX EXPERIENTIAL PILLARS
   ═══════════════════════════════════════════════════════════════ */
function PillarsSection() {
  return (
    <section style={{ backgroundColor: C.warmLinen }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <Reveal>
          <span
            className="text-[11px] tracking-[0.3em] uppercase block mb-6"
            style={{ fontFamily: "var(--font-body)", color: C.olive }}
          >
            Experiential Pillars
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            className="text-2xl md:text-4xl leading-[1.15] mb-4 max-w-3xl"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              color: C.espresso,
            }}
          >
            Six Ways to Experience{" "}
            <span style={{ color: C.clover }}>Costa Rica</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p
            className="text-[15px] leading-[1.8] mb-12 md:mb-16 max-w-2xl"
            style={{ fontFamily: "var(--font-body)", color: C.espresso }}
          >
            Each pillar is a complete world — curated by the people who live
            here, grounded in the ecosystems that surround you, and designed to
            be experienced at your own pace.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PILLARS.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarCard({
  pillar,
  index,
}: {
  pillar: (typeof PILLARS)[number];
  index: number;
}) {
  const handleComingSoon = () => {
    import("sonner").then(({ toast }) =>
      toast(pillar.title + " — Coming Soon")
    );
  };

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group cursor-pointer"
    >
      {/* Image */}
      <div className="relative overflow-hidden mb-5 h-[260px] md:h-[300px]">
        <img
          src={pillar.image}
          alt={pillar.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {!pillar.ready && (
          <div
            className="absolute top-4 right-4 px-3 py-1"
            style={{ backgroundColor: C.olive }}
          >
            <span
              className="text-[9px] tracking-[0.2em] uppercase"
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                color: C.white,
              }}
            >
              Coming Soon
            </span>
          </div>
        )}
      </div>

      {/* Text */}
      <h3
        className="text-lg md:text-xl mb-2"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 400,
          color: C.espresso,
        }}
      >
        {pillar.title}
      </h3>
      <p
        className="text-[13px] leading-[1.7]"
        style={{ fontFamily: "var(--font-body)", color: C.olive }}
      >
        {pillar.subtitle}
      </p>

      {/* Explore link */}
      <span
        className="inline-block mt-4 text-[11px] tracking-[0.2em] uppercase transition-colors duration-300"
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 500,
          color: C.clover,
        }}
      >
        {pillar.ready ? "Explore" : "Coming Soon"}{" "}
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
          &rarr;
        </span>
      </span>
    </motion.div>
  );

  if (pillar.ready) {
    return <Link href={pillar.route}>{content}</Link>;
  }
  return <div onClick={handleComingSoon}>{content}</div>;
}

/* ═══════════════════════════════════════════════════════════════
   THREE PROPERTIES — Gardens, Springs, Tented Camp
   ═══════════════════════════════════════════════════════════════ */
function ThreePropertiesSection() {
  const properties = [
    {
      name: "Nayara Gardens",
      tagline: "Where the Rainforest Blooms",
      description:
        "The original Nayara experience — lush tropical gardens, volcano views, and the warm hospitality that started it all.",
      image: CDN.gardensProperty,
      route: "/gardens",
      accent: C.clover,
    },
    {
      name: "Nayara Springs",
      tagline: "Adults-Only Hot Springs Sanctuary",
      description:
        "Private villas with plunge pools fed by natural hot springs. Where volcanic warmth meets rainforest serenity.",
      image: CDN.springsProperty,
      route: "/springs",
      accent: "#4A7C6F",
    },
    {
      name: "Nayara Tented Camp",
      tagline: "Clifftop Tents Above the Canopy",
      description:
        "Twenty-one tents on stilts above a regrowing rainforest. Sloths, monkeys, and tropical birds pass through daily.",
      image: CDN.tentedProperty,
      route: "/tented-camp",
      accent: C.olive,
    },
  ];

  return (
    <section style={{ backgroundColor: C.bone }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <Reveal>
          <span
            className="text-[11px] tracking-[0.3em] uppercase block mb-6"
            style={{ fontFamily: "var(--font-body)", color: C.olive }}
          >
            Three Resorts &middot; One Rainforest
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            className="text-2xl md:text-3xl leading-[1.15] mb-12 md:mb-16 max-w-2xl"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              color: C.espresso,
            }}
          >
            Each Property, a Different Way{" "}
            <span style={{ color: C.clover }}>Into the Same Forest</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((prop, i) => (
            <Reveal key={prop.name} delay={i * 0.1}>
              <Link href={prop.route}>
                <div className="group cursor-pointer">
                  <div className="overflow-hidden mb-5 h-[280px] md:h-[320px]">
                    <img
                      src={prop.image}
                      alt={prop.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3
                    className="text-lg mb-1"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 400,
                      color: C.espresso,
                    }}
                  >
                    {prop.name}
                  </h3>
                  <p
                    className="text-[12px] tracking-[0.1em] uppercase mb-3"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: prop.accent,
                    }}
                  >
                    {prop.tagline}
                  </p>
                  <p
                    className="text-[13px] leading-[1.7]"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: C.olive,
                    }}
                  >
                    {prop.description}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   JOURNAL — Blog posts related to Costa Rica
   ═══════════════════════════════════════════════════════════════ */
function JournalSection() {
  return (
    <section style={{ backgroundColor: C.warmLinen }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <Reveal>
          <span
            className="text-[11px] tracking-[0.3em] uppercase block mb-6"
            style={{ fontFamily: "var(--font-body)", color: C.olive }}
          >
            From the Journal
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            className="text-2xl md:text-3xl leading-[1.15] mb-12 md:mb-16 max-w-2xl"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              color: C.espresso,
            }}
          >
            Stories From{" "}
            <span style={{ color: C.clover }}>the Rainforest</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {JOURNAL_ENTRIES.map((entry, i) => (
            <Reveal key={entry.title} delay={i * 0.06}>
              <Link href={entry.route}>
                <div className="group cursor-pointer">
                  <div className="overflow-hidden mb-4 h-[200px] md:h-[220px]">
                    <img
                      src={entry.image}
                      alt={entry.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3
                    className="text-[15px] md:text-base leading-[1.4]"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 400,
                      color: C.espresso,
                    }}
                  >
                    {entry.title}
                  </h3>
                  <span
                    className="inline-block mt-3 text-[10px] tracking-[0.2em] uppercase transition-colors duration-300"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 500,
                      color: C.clover,
                    }}
                  >
                    Read{" "}
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* View all journal link */}
        <Reveal delay={0.3}>
          <div className="mt-12 md:mt-16 text-center">
            <Link href="/journal">
              <span
                className="inline-block text-[11px] tracking-[0.25em] uppercase pb-1 border-b transition-colors duration-300 hover:border-current cursor-pointer"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                  color: C.espresso,
                  borderColor: `${C.espresso}40`,
                }}
              >
                View All Journal Entries &rarr;
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
