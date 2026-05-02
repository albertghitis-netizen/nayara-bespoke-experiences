/*
 * ATACAMA ROOMS — Dedicated rooms/accommodations sub-page
 * Accessible from Alto Atacama home via "Explore More" CTA
 * Uses Atacama "Mars" palette and motion system
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
import ScrollingPillarHeader from "@/components/ScrollingPillarHeader";

const PALETTE = {
  primary: "#6F463D",
  secondary: "#9A9086",
  accent: "#C29B70",
  gradientStart: "#F7F5F0",
  gradientEnd: "#F2ECE4",
  text: "#3B2B26",
  textSecondary: "#67737C",
  textTertiary: "#9A9086",
  divider: "#E6DFD5",
};

const CDN = {
  s3: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/trim_cb137ccb.mp4",
  s4: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/4O1A1949-NayaraAltoAtacama-RainbowValley-byBriceFerreStudio(1)_a94c41d0.jpeg",
};

const sectionPadding = "py-20 md:py-32 px-6 md:px-10";
const maxW = "max-w-[1200px] mx-auto";

const roomTypes = [
  {
    name: "Quitor Suite",
    description:
      "Spacious suites with private terraces overlooking the Atacama salt flats. Floor-to-ceiling windows frame the desert landscape, while heated plunge pools offer stargazing from the comfort of your room.",
    features: ["Private terrace", "Heated plunge pool", "Desert views", "Outdoor shower"],
  },
  {
    name: "Ckuri Suite",
    description:
      "Our most expansive accommodations, designed for families and those seeking extra space. Two connected rooms with a shared living area open onto a private garden with infinity pool and unobstructed mountain views.",
    features: ["Two bedrooms", "Private garden", "Infinity pool", "Mountain views"],
  },
  {
    name: "Puri Suite",
    description:
      "Intimate retreats nestled among native desert gardens. Each suite features handcrafted furnishings, locally sourced textiles, and a private outdoor area perfect for morning meditation or evening stargazing.",
    features: ["Desert garden", "Handcrafted furnishings", "Local textiles", "Stargazing deck"],
  },
];

export default function AtacamaRooms() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.gradientEnd }}>
      <BrandNavigation pageType="property" hideCenterLabel />
      <RoomsHero />
      <ScrollingPillarHeader word="PRIVATE VILLAS & SUITES" color={PALETTE.primary} bgColor={PALETTE.gradientEnd} />
      <RoomsContent />
      <Footer pageType="property" bgColor="#6F463D" />textColor="#FFFFFF" />textColor="#FFFFFF" />
    </div>
  );
}

function RoomsHero() {
  return (
    <section className="relative aspect-[16/9] w-full overflow-hidden">
      <img src="/manus-storage/atacama-rooms-hero_36b6d5d0.jpg" alt="Alto Atacama hotel at sunset" className="w-full h-full object-cover" />
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
            Each suite is a private sanctuary with panoramic desert views, heated infinity pools,
            and direct access to the Atacama landscape. Designed for ultimate comfort and
            contemplation, these accommodations blend luxury with the raw beauty of the desert,
            offering the perfect base for stargazing, meditation, and exploration.
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
                src={CDN.s4}
                alt="Hiker in Rainbow Valley with multicolored mountains"
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
