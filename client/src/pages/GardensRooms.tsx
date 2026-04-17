/*
 * GARDENS ROOMS — Dedicated rooms/accommodations sub-page
 * Mirrors Alto Atacama secondary page structure with Gardens palette
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
  primary: "#4A5E3C",
  secondary: "#6B5B4A",
  accent: "#8B9A7A",
  gradientStart: "#F7F5F0",
  gradientEnd: "#EBF0E6",
  text: "#3B2B26",
  textSecondary: "#67737C",
  textTertiary: "#9A9086",
  divider: "#E6DFD5",
};

const CDN_BASE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

const CDN = {
  heroVideo: `${CDN_BASE}/gallery-residence-video-v2_2ca0004b.mp4`,
  landscapeImg: `${CDN_BASE}/gardens-casita-aerial_e2fb1f8e.jpeg`,
};

const sectionPadding = "py-20 md:py-32 px-6 md:px-10";
const maxW = "max-w-[1200px] mx-auto";

const roomTypes = [
  {
    name: "Casita",
    description:
      "Charming standalone bungalows surrounded by tropical gardens with volcano views. Each casita features a private terrace, outdoor Jacuzzi, and handcrafted furnishings inspired by Costa Rican artisan traditions.",
    features: ["Private terrace", "Outdoor Jacuzzi", "Volcano views", "Garden setting"],
  },
  {
    name: "Family Casita",
    description:
      "Spacious two-bedroom casitas designed for families exploring the Arenal rainforest together. Connected rooms with a shared living area, private garden, and plunge pool make this the perfect base for multi-generational adventures.",
    features: ["Two bedrooms", "Family-friendly", "Private garden", "Plunge pool"],
  },
  {
    name: "Royal Villa",
    description:
      "The pinnacle of the Gardens experience — expansive villas with private infinity pools, dedicated concierge service, and panoramic views of the Arenal Volcano. Designed for guests who seek the ultimate in rainforest luxury.",
    features: ["Infinity pool", "Concierge service", "Panoramic views", "Luxury amenities"],
  },
];

export default function GardensRooms() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.gradientEnd }}>
      <BrandNavigation pageType="property" hideCenterLabel />
      <RoomsHero />
      <RoomsContent />
      <Footer pageType="property" />
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
            Rainforest Casitas
          </span>
        </TextReveal>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-white/50 text-[11px] tracking-[0.2em] mt-3"
          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
        >
          Nayara Gardens
        </motion.p>
      </div>
    </section>
  );
}

function RoomsContent() {
  return (
    <section className={sectionPadding} style={{ backgroundColor: PALETTE.gradientEnd }}>
      <div className={maxW}>
        <AnimateOnScroll variants={fadeUp}>
          <p
            className="text-[15px] leading-[1.8] max-w-3xl mb-16"
            style={{ fontFamily: "var(--font-body)", color: PALETTE.textSecondary }}
          >
            Nestled among lush tropical gardens at the foot of the Arenal Volcano, each casita is a
            private retreat where the sounds of the rainforest become your soundtrack. Family-friendly
            and designed for connection — with nature, with each other, and with the magic of Costa Rica.
          </p>
        </AnimateOnScroll>

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

        <div className="hidden md:block">
          <MediaReveal delay={0.1}>
            <div className="overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <img
                src={CDN.landscapeImg}
                alt="Aerial view of Nayara Gardens casitas surrounded by tropical gardens"
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
