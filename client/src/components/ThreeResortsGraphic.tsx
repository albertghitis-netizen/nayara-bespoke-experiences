/*
 * THREE RESORTS. ONE RAINFOREST.
 * Title + subtitle + placeholder rectangle for future graphic.
 * Will be expanded later with an editorial infographic.
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

export default function ThreeResortsGraphic() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="mt-10"
    >
      {/* Title */}
      <h3
        className="text-[#4B4A4A] text-lg md:text-xl tracking-wide mb-1"
        style={heading}
      >
        Three Resorts. One Rainforest.
      </h3>
      <p
        className="text-[#4B4A4A]/50 text-[11px] tracking-[0.1em] mb-5"
        style={{ ...body, fontWeight: 500 }}
      >
        Arenal Volcano National Park, Costa Rica
      </p>

      {/* Placeholder rectangle — will be replaced with editorial graphic */}
      <div
        className="w-full rounded-lg border border-dashed border-[#4B4A4A]/20 bg-[#4B4A4A]/[0.03] flex items-center justify-center"
        style={{ aspectRatio: "16/7" }}
      >
        <span
          className="text-[#4B4A4A]/25 text-[10px] tracking-[0.12em]"
          style={{ ...body, fontWeight: 500 }}
        >
          Graphic Placeholder
        </span>
      </div>
    </motion.div>
  );
}
