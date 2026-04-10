/**
 * NAYARA ALTO ATACAMA — Property Home Page
 * Gradient cascade: warm sand → deep earth
 * Varied aspect ratios per section, zero-gap between all elements
 * Section order optimized for color flow
 */
import { motion } from "framer-motion";
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
   PALETTE — "Mars" gradient: warm sand → deep earth
   Each section gets its own bg tone for the continuous gradient
   ═══════════════════════════════════════════════════════════════ */
const SECTION_COLORS = {
  hero:    "#F5F1EB",
  story:   "#F0EAE0",  // warm sand
  rooms:   "#EAE2D5",  // dusty rose
  exp:     "#E3D9CA",  // terracotta mist
  sus:     "#DCD0BF",  // desert clay
  well:    "#D5C7B4",  // warm stone
  gastro:  "#CEBEA9",  // deep earth
  gallery: "#C8B69F",  // deepest
};

const PALETTE = {
  text: "#2C2418",
  textSecondary: "#7A6F63",
  textTertiary: "#B0A89E",
  primary: "#8B5A3C",
  divider: "#E2DDD5",
};

/* ═══════════════════════════════════════════════════════════════
   CDN ASSETS — All new, unique per section
   ═══════════════════════════════════════════════════════════════ */
const CDN = {
  heroDesktop: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-hero-desktop-hq_732fe8b3.mp4",
  heroMobile: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-hero-vertical-hq_d81c629e.mp4",
  // 1. Story — geyser steam V (9:16) + resort exterior UW (2.34:1)
  storyVertical: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-cascade1-story-vertical_67d1c066.mp4",
  storyHorizontal: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-ultrawide-2_c9a936b3.jpg",
  // 2. Rooms — resort aerial V (9:16) + resort pathway UW (2.34:1)
  roomsVertical: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-resort-aerial-vertical_7face530.mp4",
  roomsHorizontal: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-ultrawide-5_aeeaded2.jpg",
  // 3. Experiences — blue salt flat V (9:16) + Rainbow Valley woman UW (2.34:1)
  expVertical: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-blue-saltflat-vertical_f1956a87.mp4",
  expHorizontal: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-ultrawide-4_bba8d87c.jpg",
  // 4. Sustainability — Milky Way arch V (5:4) + vicuna+mountain UW (2.34:1)
  susVertical: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-milkyway-arch_d146b04d.jpg",
  susHorizontal: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-ultrawide-1_6f77dafe.jpg",
  // 5. Wellness — geyser eruption V (~2:3) + spa massage UW (2.34:1)
  wellVertical: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-geyser-eruption-vertical_5c93579c.mp4",
  wellHorizontal: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-ultrawide-3_36588f6c.jpg",
  // 6. Gastronomy — Milky Way bus V (3:2) + flamingo UW video (21:9)
  gastroVertical: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-milkyway-bus_88a347bc.jpg",
  gastroHorizontal: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-flamingo-ultrawide_807f044f.mp4",
  // Gallery extras
  milkywayPillar: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-milkyway-pillar_d9301ecc.jpg",
  flamingosGolden: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-flamingos-golden_7a564e58.jpg",
  rainbowValleyAerial: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-rainbow-valley-aerial_55c86ce4.mp4",
  valleLuna: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-valle-luna-horizontal_1f6f7599.mp4",
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
   textSide: "left" = text left + vertical right
             "right" = vertical left + text right
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
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/award-badges-tented-camp_8aea5e71.webp"
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
      {/* V row: text + vertical media side by side — ZERO top padding */}
      <div className="px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-14 items-start">
            {textSide === "left" ? (
              <>
                <div className="md:flex-1 pt-10 md:pt-16">{TextBlock}</div>
                <div className="md:flex-1">
                  <MediaReveal delay={0.2}>{VerticalMedia}</MediaReveal>
                </div>
              </>
            ) : (
              <>
                <div className="md:flex-1 order-2 md:order-1">
                  <MediaReveal delay={0.1}>{VerticalMedia}</MediaReveal>
                </div>
                <div className="md:flex-1 order-1 md:order-2 pt-10 md:pt-16">{TextBlock}</div>
              </>
            )}
          </div>
        </div>
      </div>
      {/* H row: full-width horizontal media, touching vertical above — hidden on mobile */}
      <div className="hidden md:block px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <MediaReveal delay={0.1}>{HorizontalMedia}</MediaReveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE — Gradient cascade, all touching, color flow
   ═══════════════════════════════════════════════════════════════ */
export default function AltoAtacama() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: SECTION_COLORS.hero }}>
      <BrandNavigation pageType="property" />
      <HeroSection />

      {/* 1. STORY — golden/amber zone */}
      <CascadeSection
        label="The Property"
        headline="Mars on Earth"
        description={`${atacama.heroSubtitle} Nayara Alto Atacama is an otherworldly sanctuary in the world's driest desert, where the landscape resembles Mars itself. Surrounded by multicolored mountains, salt flats, and endless horizons, this luxury oasis offers stargazing experiences, desert adventures, and world-class wellness in one of Earth's most remote and magical locations.`}
        verticalSrc={CDN.storyVertical}
        horizontalSrc={CDN.storyHorizontal}
        verticalIsVideo={true}
        horizontalIsVideo={false}
        verticalRatio="9/16"
        horizontalRatio="2.34/1"
        textSide="left"
        bgColor={SECTION_COLORS.story}
        badges={true}
      />

      {/* 2. ROOMS — warm earth zone */}
      <CascadeSection
        label="Accommodations"
        headline="Desert Suites"
        description="Each suite is a private sanctuary with panoramic desert views, heated infinity pools, and direct access to the Atacama landscape. Designed for ultimate comfort and contemplation."
        verticalSrc={CDN.roomsVertical}
        horizontalSrc={CDN.roomsHorizontal}
        verticalIsVideo={true}
        horizontalIsVideo={false}
        verticalRatio="9/16"
        horizontalRatio="2.34/1"
        textSide="right"
        bgColor={SECTION_COLORS.rooms}
        link="/alto-atacama/rooms"
        linkLabel="Explore Rooms"
      />

      {/* 3. EXPERIENCES — turquoise/red zone */}
      <CascadeSection
        label="Experiences"
        headline="Desert Explorations"
        description="From sunrise salt flat expeditions to stargazing under the clearest skies on Earth, every excursion is led by expert local guides who reveal the Atacama's hidden wonders."
        verticalSrc={CDN.expVertical}
        horizontalSrc={CDN.expHorizontal}
        verticalIsVideo={true}
        horizontalIsVideo={false}
        verticalRatio="9/16"
        horizontalRatio="2.34/1"
        textSide="left"
        bgColor={SECTION_COLORS.exp}
        link="/alto-atacama/experiences"
      />

      {/* 4. SUSTAINABILITY — cool/dark zone */}
      <CascadeSection
        label="Sustainability"
        headline="Protecting the Desert"
        description="Our commitment to the Atacama goes beyond hospitality. We protect fragile ecosystems, support local communities, and operate with minimal environmental impact in one of Earth's most delicate landscapes."
        verticalSrc={CDN.susVertical}
        horizontalSrc={CDN.susHorizontal}
        verticalIsVideo={false}
        horizontalIsVideo={false}
        verticalRatio="5/4"
        horizontalRatio="2.34/1"
        textSide="right"
        bgColor={SECTION_COLORS.sus}
        link="/alto-atacama/sustainability"
      />

      {/* 5. WELLNESS — misty/warm zone */}
      <CascadeSection
        label="Wellness"
        headline={atacama.theme.spaHeadline.replace("\n", " ")}
        description="Harness the healing power of the desert — from volcanic mud rituals to salt crystal therapies, each treatment draws on the Atacama's ancient minerals and infinite stillness."
        verticalSrc={CDN.wellVertical}
        horizontalSrc={CDN.wellHorizontal}
        verticalIsVideo={true}
        horizontalIsVideo={false}
        verticalRatio="2/3"
        horizontalRatio="2.34/1"
        textSide="left"
        bgColor={SECTION_COLORS.well}
        link="/alto-atacama/wellness"
      />

      {/* 6. GASTRONOMY — deep/pink zone */}
      <CascadeSection
        label="A Taste of Place"
        headline="Desert Dining"
        description="Our chefs transform the Atacama's indigenous ingredients into extraordinary cuisine — from quinoa harvested at altitude to herbs cultivated in our desert gardens."
        verticalSrc={CDN.gastroVertical}
        horizontalSrc={CDN.gastroHorizontal}
        verticalIsVideo={false}
        horizontalIsVideo={true}
        verticalRatio="3/2"
        horizontalRatio="21/9"
        textSide="right"
        bgColor={SECTION_COLORS.gastro}
        link="/alto-atacama/gastronomy"
      />

      <GallerySection />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO — Full-screen video, cinematic text reveal
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const isMobile = useIsMobile();
  const heroVideo = isMobile ? CDN.heroMobile : CDN.heroDesktop;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <NativeVideo src={heroVideo} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-12 md:pb-20 px-6 md:px-10">
        <MultiLineReveal
          lines={["Atacama Desert Oasis", "Under the Stars"]}
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
          All Ages
        </motion.p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   GALLERY — Mixed media grid with new assets
   ═══════════════════════════════════════════════════════════════ */
function GallerySection() {
  const media = [
    { src: CDN.rainbowValleyAerial, alt: "Rainbow Valley aerial", isVideo: true },
    { src: CDN.milkywayPillar, alt: "Milky Way over rock pillar", isVideo: false },
    { src: CDN.valleLuna, alt: "Valle de la Luna sunset", isVideo: true },
    { src: CDN.flamingosGolden, alt: "Flamingos in golden water", isVideo: false },
    { src: CDN.susVertical, alt: "Milky Way arch over desert", isVideo: false },
    { src: CDN.gastroHorizontal, alt: "Flamingo at sunset lagoon", isVideo: true },
  ];

  return (
    <section
      id="gallery"
      className="py-20 md:py-32 px-6 md:px-10"
      style={{ backgroundColor: SECTION_COLORS.gallery }}
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
            Mars on Earth
          </span>
        </TextReveal>

        <div className="hidden md:grid grid-cols-2 gap-4 md:gap-6">
          {media.map((item, i) => (
            <MediaReveal key={i} delay={i * 0.1}>
              <div className="overflow-hidden" style={{ aspectRatio: i === 0 ? "16/10" : "16/9" }}>
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
