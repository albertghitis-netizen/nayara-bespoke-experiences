/*
 * HANGAROA ROOMS , Dedicated rooms/accommodations sub-page
 * Hangaroa palette with Easter Island/Rapa Nui focus
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
  primary: "#536878",
  secondary: "#67737C",
  accent: "#9A9086",
  gradientStart: "#F7F5F0",
  gradientEnd: "#EAEBED",
  text: "#3B2B26",
  textSecondary: "#67737C",
  textTertiary: "#9A9086",
  divider: "#E6DFD5",
};

const CDN_BASE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

const CDN = {
  heroVideo: `${CDN_BASE}/hangaroa-hero-audio_f26eed73.mp4`,
  landscapeImg: `${CDN_BASE}/Untitleddesign-20_b052852b.jpg`,
};

const sectionPadding = "py-20 md:py-32 px-6 md:px-10";
const maxW = "max-w-[1200px] mx-auto";

const roomTypes = [
  {
    name: "Rapa Nui Suite",
    description:
      "Inspired by the island's Polynesian heritage, each suite features natural materials, handcrafted wood furnishings, and a private terrace with views of the Pacific Ocean. The open design invites the island breeze and connects you to the landscape of Rapa Nui.",
    features: ["Ocean views", "Private terrace", "Polynesian design", "Natural materials"],
  },
  {
    name: "Ariki Suite",
    description:
      "Our premium accommodations, named after the ancient Rapa Nui chiefs. Spacious living areas, a private garden with outdoor shower, and direct access to the hotel's native gardens. Each suite tells the story of the island through local art and traditional motifs.",
    features: ["Private garden", "Outdoor shower", "Local artwork", "Spacious living area"],
  },
  {
    name: "Hangaroa Suite",
    description:
      "The most exclusive suite on the island , a standalone villa with panoramic views of Hanga Roa Bay, private plunge pool, and dedicated concierge. Designed for guests who want the ultimate Easter Island experience with the privacy of a private residence.",
    features: ["Panoramic bay views", "Private plunge pool", "Dedicated concierge", "Standalone villa"],
  },
];

export default function HangaroaRooms() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.gradientEnd }}>
      <BrandNavigation pageType="property" hideCenterLabel />
      <RoomsHero />
      <RoomsContent />
      <Footer pageType="property" bgColor="#536878" textColor="#FFFFFF" propertyName="Hangaroa" />
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
            Island Suites
          </span>
        </TextReveal>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-white/50 text-[11px] tracking-[0.2em] mt-3"
          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
        >
          Nayara Hangaroa
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
            At the edge of the world, where ancient Moai stand sentinel over the Pacific, each suite
            at Nayara Hangaroa is a tribute to Rapa Nui's living culture. Natural materials, Polynesian
            design, and panoramic ocean views create a sanctuary that honors the island's extraordinary heritage.
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
                alt="Nayara Hangaroa suite with ocean views on Easter Island"
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
