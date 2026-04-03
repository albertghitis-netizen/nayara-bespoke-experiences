/**
 * Award-Winning Properties — Arenal horizontal image only
 *
 * Text content (H2, body, CTA) lives in HomeIntroSection in Home.tsx
 */

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ── Media assets ── */
const PHOTO_ARENAL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hero2-arenal-tent_860ab6b2.webp";

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
    </section>
  );
}
