/**
 * Award-Winning Properties — Arenal horizontal image + Destination list
 *
 * Text content (H2, body, CTA) lives in HomeIntroSection in Home.tsx
 */

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ── Media assets ── */
const PHOTO_ARENAL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hero2-arenal-tent_860ab6b2.webp";

/* ── Destination data ── */
const destinations = [
  { name: "Costa Rica", detail: "3 properties" },
  { name: "Chile", detail: "1 property" },
  { name: "Easter Island", detail: "1 property" },
];

export default function AwardWinningProperties() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
    >
      {/* ════════════════════════════════════════════
          ARENAL — Full-width horizontal image
         ════════════════════════════════════════════ */}
      <motion.div
        className="w-full overflow-hidden relative"
        style={{ y: imageY }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="aspect-[4/3] md:aspect-[16/9] overflow-hidden relative">
          <motion.img
            src={PHOTO_ARENAL}
            alt="Nayara Tented Camp — aerial view with Arenal Volcano"
            className="w-full h-full object-cover"
            initial={{ scale: 1.06 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 10, ease: "linear" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/8 via-transparent to-transparent pointer-events-none" />
        </div>
      </motion.div>

      {/* ════════════════════════════════════════════
          DESTINATIONS — Text + list
         ════════════════════════════════════════════ */}
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <motion.p
          className="text-[#4B4A4A] max-w-2xl mb-12"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 400,
            fontSize: "15px",
            lineHeight: "22.5px",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Six extraordinary destinations across Latin America, united by a commitment to nature, community, and the art of travel.
        </motion.p>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span
                className="text-[#3a2a1a] block mb-1"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 400,
                  fontSize: "clamp(20px, 3vw, 28px)",
                }}
              >
                {dest.name}
              </span>
              <span
                className="text-[#5a4a3a]/60 text-sm tracking-[0.05em]"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                {dest.detail}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
