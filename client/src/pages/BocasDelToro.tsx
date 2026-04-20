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
import BrandNavigation from "@/components/BrandNavigation";
import BlobVideo from "@/components/BlobVideo";
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
const COLOR_A = "#F2F6F5"; // light aqua tint
const COLOR_B = "#E6EDEB"; // slightly deeper aqua tint
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
];

/* Caribbean Ocean Blue palette */
const PALETTE = {
  text: "#3B2B26",
  textSecondary: "#67737C",
  textTertiary: "#9A9086",
  primary: "#008E97",
  divider: "#E6DFD5",
};

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
  expV: `${CDN}/bocas-gallery-video1_d18b5ced.mp4`,
  expH: `${CDN}/bocas-resort-aerial-sunset_d536b07d.jpg`,

  // Section 4 — Sustainability: couple villa V + aerial mangroves H
  susV: `${CDN}/bocas-couple-villa-pool_42fafe14.jpg`,
  susH: `${CDN}/bocas-aerial-villas-mangroves_9d5e94f5.jpg`,

  // Section 5 — Wellness: original drone vertical V + overwater deck H
  wellV: `${CDN}/bocas-drone-vertical_e44907ce.mp4`,
  wellH: `${CDN}/bocas-overwater-villas-deck_16555482.jpg`,

  // Section 6 — Gastronomy: copper mule V + tropical brunch H
  gastroV: `${CDN}/4F968B04-CC38-4AB0-98A7-C378A57F9E9A_0c985f05.jpeg`,
  gastroH: `${CDN}/5D0116B4-053F-4BD4-A320-5549FAC09ECD_6d70c92a.jpeg`,

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
  bgColor: string;
  nextBgColor: string;
  link?: string;
  linkLabel?: string;
  blogLink?: string;
  blogLinkLabel?: string;
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
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[1],
    nextBgColor: SECTION_COLORS[2],
    blogLink: "https://blog.nayararesorts.com/bocas-wins-cond%C3%A9-nast-traveler-award-2025",
    blogLinkLabel: "Read: Condé Nast names Bocas #1 in Central America",
  },
  {
    id: "rooms",
    label: "Accommodations",
    headline: "Overwater\nVillas",
    body: "Each overwater villa is a private escape suspended above the Caribbean Sea. With direct ocean access, private plunge pools, and panoramic water views, these accommodations redefine tropical luxury. Wake to the gentle sound of waves and spend your days exploring pristine beaches and vibrant coral reefs.",
    verticalSrc: ASSETS.roomsV,
    horizontalSrc: ASSETS.roomsH,
    verticalIsVideo: true,
    horizontalIsVideo: false,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[2],
    nextBgColor: SECTION_COLORS[3],
    link: "/bocas-del-toro/rooms",
    linkLabel: "Explore Rooms",
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
    body: "Our commitment to marine conservation and island stewardship ensures that the pristine beauty of Bocas del Toro endures for generations. Through partnerships with local conservation organizations, renewable energy systems, and community programs, we protect the delicate ecosystems that make this place extraordinary.",
    verticalSrc: ASSETS.susV,
    horizontalSrc: ASSETS.susH,
    verticalIsVideo: false,
    horizontalIsVideo: false,
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[4],
    nextBgColor: SECTION_COLORS[5],
    link: "/bocas-del-toro/sustainability",
    linkLabel: "Explore More",
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
    verticalRatio: "3/4",
    horizontalRatio: "16/9",
    bgColor: SECTION_COLORS[5],
    nextBgColor: SECTION_COLORS[6],
    link: "/bocas-del-toro/wellness",
    linkLabel: "Explore Wellness",
  },
  {
    id: "gastronomy",
    label: "A Taste of Place",
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
  const textLeft = index % 2 === 0;

  return (
    <section id={section.id}>
      {/* ── Row: Vertical media + Text column ── */}
      <div className="flex flex-col md:flex-row" style={{ backgroundColor: section.bgColor }}>
        {/* Vertical media — full-bleed to its edge */}
        <div
          className={`w-full md:w-1/2 ${textLeft ? "md:order-2" : "md:order-1"}`}
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
              className="text-[15px] leading-[1.85] max-w-[480px] mb-6"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
            >
              {section.body}
            </p>
            {section.blogLink && (
              <a
                href={section.blogLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[12px] tracking-[0.08em] mb-6 transition-colors hover:opacity-70"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.primary, fontStyle: "italic" }}
              >
                {section.blogLinkLabel || "Read More"} ↗
              </a>
            )}
          </AnimateOnScroll>

          {section.link && (
            <AnimateOnScroll variants={fadeUp} delay={0.3}>
              <a
                href={section.link}
                className="inline-block mt-6 text-[11px] tracking-[0.15em] transition-colors hover:opacity-70"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: PALETTE.primary }}
              >
                {section.linkLabel || "Explore More"} →
              </a>
            </AnimateOnScroll>
          )}

          {section.id === "story" && (
            <img
              src="/manus-storage/badges-bocas-v3-xl_8ff28e07.png"
              alt="Green Globe Certified · Michelin 2025 · Leading Hotels of the World"
              className="h-auto object-contain mt-8 block" 
              style={{ width: 'calc(100% + 2rem)', marginLeft: '-1rem' }}
              loading="lazy"
            />
          )}
        </div>
      </div>

      {/* \u2500\u2500 Full-width horizontal media \u2500\u2500 */}
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
        <BlobVideo
          src={heroVideo}
          className="w-full h-full object-cover"
          hasAudio={true}
          pillBg="rgba(0,142,151,0.70)"
          pillColor="#FFFFFF"
        />
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
          Isla Pastores, Bocas del Toro, Panamá
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

      <ReviewsBreak bgColor={SECTION_COLORS[SECTION_COLORS.length - 1]} />

      <Footer bgColor="#008E97" />
    </div>
  );
}
