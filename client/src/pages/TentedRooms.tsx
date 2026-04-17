/*
 * TENTED CAMP ROOMS — Dedicated rooms/accommodations sub-page
 * Mirrors Alto Atacama secondary page structure with rainforest palette
 */

import { motion } from "framer-motion";
import NativeVideo from "@/components/NativeVideo";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import {
  AnimateOnScroll,
  TextReveal,
  MediaReveal,
  fadeUp,
} from "@/components/motion";

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

const CDN_BASE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

const CDN = {
  heroVideo: `${CDN_BASE}/tented-hero-new_c2f5b543.mp4`,
  landscapeImg: `${CDN_BASE}/Grand(1)_0127cf09.webp`,
};

const sectionPadding = "py-20 md:py-32 px-6 md:px-10";
const maxW = "max-w-[1200px] mx-auto";

const roomTypes = [
  {
    name: "Nayara Tent",
    description:
      "Safari-style luxury tents elevated above the rainforest canopy. Each tent features a private deck with plunge pool, outdoor shower, and unobstructed views of the Arenal Volcano through floor-to-ceiling mesh walls that bring the jungle inside.",
    features: ["Private plunge pool", "Volcano views", "Outdoor shower", "Canopy deck"],
  },
  {
    name: "Grand Tent",
    description:
      "Our most spacious tented accommodations, offering a generous living area, king bed, and an expansive private terrace with heated plunge pool. The Grand Tent is designed for those who want the safari experience with the space of a luxury villa.",
    features: ["Heated plunge pool", "Spacious living area", "King bed", "Rainforest terrace"],
  },
  {
    name: "Residence",
    description:
      "The ultimate Tented Camp experience — a multi-room residence with private pool, dedicated butler service, and panoramic views of the Arenal Volcano. Perfect for families or those seeking the most exclusive rainforest retreat.",
    features: ["Multiple bedrooms", "Private pool", "Butler service", "Panoramic volcano views"],
  },
];

export default function TentedRooms() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.gradientEnd }}>
      <BrandNavigation pageType="property" hideCenterLabel />
      <RoomsHero />
      <RoomsContent />
      <Footer pageType="property" bgColor="#868B75" />
    </div>
  );
}

function RoomsHero() {
  return (
    <section className="relative aspect-[2/1] w-full overflow-hidden">
      <div className="absolute inset-0">
        <NativeVideo src={CDN.heroVideo} className="w-full h-full object-cover" />
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

function RoomsContent() {
  return (
    <section className={sectionPadding} style={{ backgroundColor: PALETTE.gradientEnd }}>
      <div className={maxW}>
        {/* Intro copy */}
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[15px] leading-[1.8] max-w-3xl mb-16"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
          >
            Elevated above the rainforest canopy, each safari-style tent is a private sanctuary
            with panoramic volcano views, heated plunge pools, and the sounds of the jungle as
            your soundtrack. Designed for adults seeking an intimate connection with nature
            without compromising on luxury.
          </p>
        </AnimateOnScroll>

        {/* Room type cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {roomTypes.map((room, i) => (
            <AnimateOnScroll key={room.name} variants={fadeUp} delay={i * 0.1}>
              <div
                className="p-6 md:p-8 h-full"
                style={{
                  backgroundColor: "rgba(255,255,255,0.4)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "12px",
                  borderBottom: `2px solid ${PALETTE.divider}`,
                }}
              >
                <h3
                  className="text-[20px] mb-4"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: PALETTE.text }}
                >
                  {room.name}
                </h3>
                <p
                  className="text-[14px] leading-[1.7] mb-6"
                  style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
                >
                  {room.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {room.features.map((f) => (
                    <span
                      key={f}
                      className="text-[10px] tracking-[0.1em] px-3 py-1.5 rounded-full"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 500,
                        color: PALETTE.primary,
                        border: `1px solid ${PALETTE.primary}30`,
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Landscape image */}
        <div className="hidden md:block">
          <MediaReveal delay={0.1}>
            <div className="overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <img
                src={CDN.landscapeImg}
                alt="Grand Tent with rainforest canopy and volcano views"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </MediaReveal>
        </div>
      </div>
    </section>
  );
}
