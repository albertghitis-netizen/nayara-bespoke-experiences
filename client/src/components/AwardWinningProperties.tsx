/*
 * Award-Winning Properties in Remote Destinations
 * Editorial layout: left column (text + CTA), right column (vertical video + stacked photos)
 * Extremely subtle scroll-driven animations
 */

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import BlobVideo from "@/components/BlobVideo";
import { useIsMobile } from "@/hooks/useMobile";

/* CDN assets */
const VERTICAL_VIDEO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/vertical-nature-video_51a47494.mp4";

const PHOTO_AERIAL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tented-camp-aerial_b70fe65a.jpeg";

const PHOTO_BRIDGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hanging-bridge-horizontal_1ea295ba.jpeg";

const PHOTO_BOCAS =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-aerial_76184697.jpeg";

const PHOTO_ATACAMA =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-hotel_c0de2ee5.jpeg";

export default function AwardWinningProperties() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Subtle parallax for media column
  const mediaY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const textY = useTransform(scrollYProgress, [0, 1], [15, -15]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f7f5f0] py-20 md:py-32 overflow-hidden"
    >
      <div className="max-w-[1300px] mx-auto px-6 md:px-10">
        {/* ── DESKTOP: Two-column editorial layout ── */}
        <div className="hidden md:grid md:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* LEFT — Text column (5 cols) */}
          <motion.div
            className="col-span-5 sticky top-32"
            style={{ y: textY }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2
                className="text-[#3a2a1a] text-4xl lg:text-5xl xl:text-[3.4rem] leading-[1.1] mb-3"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                Award-Winning Properties
                <br />
                in Remote Destinations
              </h2>

              <p
                className="text-[#6b5b4b] text-sm lg:text-base italic mb-8"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                From Desert to Rainforest to Reef
              </p>

              <p
                className="text-[#5a4a3a]/80 text-sm lg:text-[15px] leading-[1.8] mb-10 max-w-md"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                Our resorts belong to the land. In Costa Rica, lush rainforest and mineral hot springs
                greet you at the foot of Arenal Volcano. In Chile's Atacama, the world's driest desert
                becomes a place of stillness and discovery. On Easter Island, silent giants stand guard
                and Rapa Nui culture is ever-present. On a private island on Panama's Caribbean coast,
                overwater villas rise above the reef. Six properties. Three countries. All designed to
                bring guests back to nature and leave every ecosystem stronger than we found it.
              </p>

              <motion.a
                href="#"
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  import("sonner").then(({ toast }) => toast("The Nayara Story — Coming Soon"));
                }}
                className="inline-flex items-center gap-2 text-[#3a2a1a] text-sm tracking-[0.05em] border-b border-[#3a2a1a]/30 pb-1 hover:border-[#3a2a1a]/60 transition-colors group"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.3 }}
              >
                The Nayara Story
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT — Media column (7 cols): vertical video + photos */}
          <motion.div className="col-span-7" style={{ y: mediaY }}>
            {/* Top row: vertical video + square-ish photo */}
            <div className="grid grid-cols-12 gap-4 mb-4">
              {/* Vertical video — tall, left side */}
              <motion.div
                className="col-span-5 aspect-[9/14] overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <BlobVideo
                  src={VERTICAL_VIDEO}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Right side: two stacked photos */}
              <div className="col-span-7 flex flex-col gap-4">
                <motion.div
                  className="aspect-[4/3] overflow-hidden"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img
                    src={PHOTO_BOCAS}
                    alt="Nayara Bocas del Toro — Caribbean overwater villas"
                    className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-[1.5s]"
                  />
                </motion.div>
                <motion.div
                  className="aspect-[4/3] overflow-hidden"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img
                    src={PHOTO_ATACAMA}
                    alt="Nayara Alto Atacama — desert lodge"
                    className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-[1.5s]"
                  />
                </motion.div>
              </div>
            </div>

            {/* Bottom row: wide horizontal photo spanning full width */}
            <motion.div
              className="aspect-[16/7] overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={PHOTO_AERIAL}
                alt="Nayara Tented Camp — aerial view with pool"
                className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-[1.5s]"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* ── MOBILE: Stacked editorial layout ── */}
        <div className="md:hidden">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <h2
              className="text-[#3a2a1a] text-3xl leading-[1.1] mb-2"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              Award-Winning Properties
              <br />
              in Remote Destinations
            </h2>
            <p
              className="text-[#6b5b4b] text-sm italic"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              From Desert to Rainforest to Reef
            </p>
          </motion.div>

          {/* Media grid — mobile: horizontal photo on top, then two-col below */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mb-8"
          >
            {/* Wide horizontal photo */}
            <div className="aspect-[16/9] overflow-hidden mb-3">
              <img
                src={PHOTO_AERIAL}
                alt="Nayara Tented Camp aerial"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Two-col: vertical video + photo */}
            <div className="grid grid-cols-2 gap-3">
              <div className="aspect-[9/14] overflow-hidden">
                <BlobVideo
                  src={VERTICAL_VIDEO}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={PHOTO_BOCAS}
                    alt="Bocas del Toro"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={PHOTO_ATACAMA}
                    alt="Alto Atacama"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Body text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p
              className="text-[#5a4a3a]/80 text-sm leading-[1.8] mb-6"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Our resorts belong to the land. In Costa Rica, lush rainforest and mineral hot springs
              greet you at the foot of Arenal Volcano. In Chile's Atacama, the world's driest desert
              becomes a place of stillness and discovery. On Easter Island, silent giants stand guard
              and Rapa Nui culture is ever-present. On a private island on Panama's Caribbean coast,
              overwater villas rise above the reef. Six properties. Three countries. All designed to
              bring guests back to nature and leave every ecosystem stronger than we found it.
            </p>

            <a
              href="#"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                import("sonner").then(({ toast }) => toast("The Nayara Story — Coming Soon"));
              }}
              className="inline-flex items-center gap-2 text-[#3a2a1a] text-sm tracking-[0.05em] border-b border-[#3a2a1a]/30 pb-1"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              The Nayara Story
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
