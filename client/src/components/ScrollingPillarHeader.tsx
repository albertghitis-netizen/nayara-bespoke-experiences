/*
 * ScrollingPillarHeader , Large typographic word that scrolls horizontally
 * as the user scrolls down. Uses the property's accent color to make each
 * deep page feel unique per property.
 *
 * Usage:
 *   <ScrollingPillarHeader word="EXPERIENCES" color={palette.primary} />
 */

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  /** The word to display (e.g. "EXPERIENCES", "WELLNESS") */
  word: string;
  /** The property accent color */
  color: string;
  /** Optional secondary color for the stroke/outline version */
  strokeColor?: string;
  /** Background color , defaults to transparent */
  bgColor?: string;
}

export default function ScrollingPillarHeader({
  word,
  color,
  strokeColor,
  bgColor = "transparent",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  /* Solid word scrolls left-to-right */
  const x1 = useTransform(scrollYProgress, [0, 1], ["-25%", "10%"]);
  /* Outline word scrolls right-to-left (counter-direction) */
  const x2 = useTransform(scrollYProgress, [0, 1], ["10%", "-25%"]);
  /* Fade in as it enters viewport */
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  const stroke = strokeColor || color;

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden py-8 md:py-12"
      style={{ backgroundColor: bgColor }}
    >
      <motion.div style={{ opacity }}>
        {/* Row 1: Solid fill, scrolls right */}
        <motion.div
          style={{ x: x1 }}
          className="whitespace-nowrap select-none pointer-events-none"
        >
          <span
            className="text-[12vw] md:text-[10vw] lg:text-[8vw] leading-none tracking-[0.04em]"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              color: color,
              opacity: 0.12,
            }}
          >
            {word} &nbsp; {word} &nbsp; {word}
          </span>
        </motion.div>

        {/* Row 2: Outline/stroke, scrolls left , creates depth */}
        <motion.div
          style={{ x: x2 }}
          className="whitespace-nowrap select-none pointer-events-none -mt-[2vw]"
        >
          <span
            className="text-[12vw] md:text-[10vw] lg:text-[8vw] leading-none tracking-[0.04em]"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              color: "transparent",
              WebkitTextStroke: `1px ${stroke}`,
              opacity: 0.18,
            }}
          >
            {word} &nbsp; {word} &nbsp; {word}
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}
