/*
 * GARDENS ROOMS , Dedicated rooms/accommodations sub-page
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
  primary: "#525642",
  secondary: "#424A3E",
  accent: "#868B75",
  gradientStart: "#F7F5F0",
  gradientEnd: "#EDEEE2",
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

const VILLA_IMAGES = {
  vertical: "/manus-storage/IMG_8452(1)_505df4d5.jpg",
  horizontal: "/manus-storage/99C2B6AF-D79E-432E-9596-A58F80B594C9_2b808a3a.jpg",
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
    name: "Rainforest Pool Villa",
    description:
      "Secluded villas hidden within the rainforest canopy, each with a private plunge pool fed by natural volcanic springs. Floor-to-ceiling windows dissolve the boundary between indoors and the living jungle, while a hammock-draped terrace invites you to simply be.",
    features: ["Private plunge pool", "Rainforest canopy", "Hammock terrace", "139 m²"],
  },
  {
    name: "Royal Villa",
    description:
      "The pinnacle of the Gardens experience , expansive villas with private infinity pools, dedicated concierge service, and panoramic views of the Arenal Volcano. Designed for guests who seek the ultimate in rainforest luxury.",
    features: ["Infinity pool", "Concierge service", "Panoramic views", "Luxury amenities"],
  },
];

export default function GardensRooms() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.gradientEnd }}>
      <BrandNavigation pageType="property" backLink={{ label: "Nayara Gardens", href: "/gardens" }} />
      <RoomsHero />
      <RoomsContent />
      <Footer pageType="property" bgColor="#525642" textColor="#FFFFFF" propertyName="Gardens" />
    </div>
  );
}

function RoomsHero() {
  return (
    <section className="relative aspect-[16/9] w-full overflow-hidden">
      <img src="/manus-storage/gardens-rooms-hero_f4a206d2.jpg" alt="Nayara Gardens casita interior with tropical mural" className="w-full h-full object-cover"  decoding="async" loading="lazy" />
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
            and designed for connection , with nature, with each other, and with the magic of Costa Rica.
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

        {/* Rainforest Pool Villa showcase — mobile vertical, desktop horizontal */}
        <div className="md:hidden">
          <MediaReveal delay={0.1}>
            <div className="overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <img
                src={VILLA_IMAGES.vertical}
                alt="Rainforest Pool Villa — private plunge pool surrounded by tropical canopy"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </MediaReveal>
        </div>
        <div className="hidden md:block">
          <MediaReveal delay={0.1}>
            <div className="overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <img
                src={VILLA_IMAGES.horizontal}
                alt="Rainforest Pool Villa — private plunge pool surrounded by tropical canopy"
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
