/*
 * The World of Nayara — Textured section with subtle animations
 * Botanical texture background. Warm cream base.
 * Desktop: leaf logo left-aligned, heading pushed way down
 * Mobile: centered layout
 */

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara-logo-tree-PiKqyUUYDRwvX8q8L5CDsH.png";

const TEXTURE_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/botanical-texture-embossed-hig62x94aNi7TNioLbvtkE.webp";

export default function ExploreOurWorld() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Very subtle parallax on the heading — moves ~20px total
  const headingY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  // Extremely subtle ambient glow that drifts
  const glowX = useTransform(scrollYProgress, [0, 0.5, 1], ["-10%", "10%", "-5%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 0.06, 0.06, 0]);

  const words = "The World of Nayara".split(" ");

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-28 md:py-48 lg:py-56"
    >
      {/* Warm cream base */}
      <div className="absolute inset-0 bg-[#f0ebe0]" />

      {/* Botanical texture — grows in from edges */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.15 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Main texture layer */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: `url(${TEXTURE_URL})`,
            backgroundSize: "900px 900px",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
          }}
        />

        {/* Larger accent layer — slow drift */}
        <motion.div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `url(${TEXTURE_URL})`,
            backgroundSize: "1400px 1400px",
            backgroundRepeat: "repeat",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "30px 15px", "0px 0px"],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Soft vignette edges */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-[#f0ebe0] via-transparent to-[#f0ebe0] opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f0ebe0] via-transparent to-[#f0ebe0] opacity-30" />
      </div>

      {/* Extremely subtle ambient warm glow that drifts with scroll */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ x: glowX, opacity: glowOpacity }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(180,160,130,0.3) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        {/* ── MOBILE: centered layout ── */}
        <div className="md:hidden text-center">
          {/* Leaf logo — centered on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <img src={LOGO_URL} alt="" className="w-16 mx-auto opacity-30" />
          </motion.div>

          <motion.h2
            style={{ y: headingY }}
            className="text-[#3a2a1a] text-5xl flex flex-wrap justify-center gap-x-[0.3em]"
            aria-label="The World of Nayara"
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 1.0,
                  delay: 0.15 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  lineHeight: 1.05,
                  display: "inline-block",
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          {/* Subtle decorative line */}
          <motion.div
            className="mx-auto mt-8"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 60, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="h-px bg-[#3a2a1a]/20 w-full" />
          </motion.div>
        </div>

        {/* ── DESKTOP: leaf left, heading pushed way down ── */}
        <div className="hidden md:block">
          {/* Leaf logo — left-aligned */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-24 lg:mb-32"
          >
            <img src={LOGO_URL} alt="" className="w-20 lg:w-24 opacity-25" />
          </motion.div>

          {/* Heading — pushed way down, centered */}
          <motion.h2
            style={{ y: headingY }}
            className="text-[#3a2a1a] text-7xl lg:text-[5.5rem] flex flex-wrap justify-center gap-x-[0.3em]"
            aria-label="The World of Nayara"
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 1.0,
                  delay: 0.15 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  lineHeight: 1.05,
                  display: "inline-block",
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          {/* Subtle decorative line */}
          <motion.div
            className="mx-auto mt-8"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 60, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="h-px bg-[#3a2a1a]/20 w-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
