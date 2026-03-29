/*
 * Explore Our World — Clean section with extremely subtle animations
 * No texture. Warm cream background with gentle ambient motion.
 */

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
      className="relative overflow-hidden py-28 md:py-40"
    >
      {/* Warm cream base */}
      <div className="absolute inset-0 bg-[#f0ebe0]" />

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

      {/* Very subtle top/bottom edge fade for depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#f0ebe0] to-transparent opacity-60" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f0ebe0] to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 text-center">
        <motion.h2
          style={{ y: headingY }}
          className="text-[#3a2a1a] text-5xl md:text-7xl lg:text-[5.5rem] flex flex-wrap justify-center gap-x-[0.3em]"
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

        {/* Subtle decorative line that draws in */}
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
    </section>
  );
}
