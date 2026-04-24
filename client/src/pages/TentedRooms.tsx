/*
 * TENTED CAMP ROOMS — Dedicated rooms/accommodations sub-page
 * Uses PropertySlider component (same as Springs rooms/sustainability)
 */

import { motion } from "framer-motion";
import NativeVideo from "@/components/NativeVideo";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import PropertySlider from "@/components/PropertySlider";
import { TextReveal } from "@/components/motion";

const PALETTE = {
  primary: "#2D6A4F",
  secondary: "#52796F",
  accent: "#74A57F",
  gradientStart: "#F5F7F4",
  gradientEnd: "#EFF2ED",
  text: "#1B2A22",
  textSecondary: "#5A6B5E",
  textTertiary: "#9AA89E",
  divider: "#D5DDD8",
};

const SLIDER_PALETTE = {
  bg: PALETTE.gradientEnd,
  text: PALETTE.text,
  textSecondary: PALETTE.textSecondary,
  primary: PALETTE.primary,
  cardBg: "rgba(255,255,255,0.5)",
  cardBorder: PALETTE.divider,
};

const CDN_BASE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

const CDN = {
  heroVideo: `${CDN_BASE}/tented-hero-new_c2f5b543.mp4`,
};

const roomCards = [
  {
    title: "Tent",
    description:
      "Safari-style luxury tents elevated above the rainforest canopy. Each tent features a private deck with plunge pool, outdoor shower, and unobstructed views of the Arenal Volcano through floor-to-ceiling mesh walls that bring the jungle inside.",
    tags: ["Private plunge pool", "Volcano views", "Outdoor shower", "Canopy deck"],
  },
  {
    title: "Family Tent",
    description:
      "Designed for families seeking an unforgettable rainforest adventure, these interconnected tents offer generous space, private plunge pools, and direct access to nature trails — all while keeping the safari-luxury experience intact for every generation.",
    tags: ["Interconnected tents", "Private plunge pool", "Family-friendly", "Nature trails"],
  },
  {
    title: "Grand Tent",
    description:
      "Our most spacious tented accommodations, offering a generous living area, king bed, and an expansive private terrace with heated plunge pool. The Grand Tent is designed for those who want the safari experience with the space of a luxury villa.",
    tags: ["Heated plunge pool", "Spacious living area", "King bed", "Rainforest terrace"],
  },
  {
    title: "Residence",
    description:
      "The ultimate Tented Camp experience — a multi-room residence with private pool, dedicated butler service, and panoramic views of the Arenal Volcano. Perfect for families or those seeking the most exclusive rainforest retreat.",
    tags: ["Multiple bedrooms", "Private pool", "Butler service", "Panoramic volcano views"],
  },
];

export default function TentedRooms() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.gradientEnd }}>
      <BrandNavigation pageType="property" hideCenterLabel />
      <RoomsHero />

      {/* Room types — PropertySlider */}
      <PropertySlider
        sectionLabel="Accommodations"
        headline="Tented Suites"
        description="Elevated above the rainforest canopy, each safari-style tent is a private sanctuary with panoramic volcano views, heated plunge pools, and the sounds of the jungle as your soundtrack. Designed for adults seeking an intimate connection with nature without compromising on luxury."
        cards={roomCards}
        learnMoreLink="/tented-camp"
        learnMoreLabel="Back to Tented Camp"
        palette={SLIDER_PALETTE}
      />

      <Footer pageType="property" bgColor="#868B75" />
    </div>
  );
}

function RoomsHero() {
  return (
    <section className="relative aspect-[2/1] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img src="/manus-storage/ntc-aerial-connecting_6479275a.jpg" alt="Aerial view of Nayara Tented Camp suites" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50 pointer-events-none" />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-end pb-8 md:pb-12 px-6 md:px-10">
        <TextReveal as="h1" delay={0.2}>
          <span
            className="text-white text-2xl md:text-4xl lg:text-5xl tracking-wide"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Tented Suites
          </span>
        </TextReveal>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-white/50 text-[11px] tracking-[0.2em] mt-3"
          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
        >
          Nayara Tented Camp
        </motion.p>
      </div>
    </section>
  );
}
