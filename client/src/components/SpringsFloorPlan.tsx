/**
 * SPRINGS FLOOR PLAN — Animated SVG floor plan that "builds" progressively
 * 
 * Layout (top-down view):
 * - Front: Plunge pool (where terrace would be)
 * - Middle: King bed (main room, tent-shaped)
 * - Back: Oversized bathroom
 *   - Left vanity, Right vanity
 *   - Indoor double-head shower
 *   - Outdoor double-head shower (furthest back)
 * 
 * Animation: Each element draws/fades in sequentially using CSS animations
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const display: React.CSSProperties = { fontFamily: "var(--font-display)", fontWeight: 400 };
const body: React.CSSProperties = { fontFamily: "var(--font-body)", fontWeight: 300 };

export default function SpringsFloorPlan() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Stagger delays for each element
  const delays = {
    outline: 0,
    bed: 0.6,
    living: 0.9,
    pool: 1.2,
    bathroom: 1.8,
    vanityLeft: 2.2,
    vanityRight: 2.4,
    showerIndoor: 2.8,
    showerOutdoor: 3.2,
    labels: 3.6,
  };

  const fadeIn = (delay: number) => ({
    initial: { opacity: 0, pathLength: 0 },
    animate: isInView ? { opacity: 1, pathLength: 1 } : { opacity: 0, pathLength: 0 },
    transition: { duration: 0.8, delay, ease: "easeOut" as const },
  });

  const fadeInFill = (delay: number) => ({
    initial: { opacity: 0 },
    animate: isInView ? { opacity: 1 } : { opacity: 0 },
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  });

  return (
    <div ref={ref} className="w-full max-w-[380px]">
      <motion.p
        className="text-[9px] tracking-[0.25em] uppercase mb-3"
        style={{ ...body, fontWeight: 500, color: "#8B7355" }}
        {...fadeInFill(0)}
      >
        Villa Floor Plan
      </motion.p>
      <svg
        viewBox="0 0 340 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* ─── Tent Outline (pointed roof shape) ─── */}
        <motion.path
          d="M 30 60 L 170 20 L 310 60 L 310 380 L 30 380 Z"
          stroke="#8B7355"
          strokeWidth="1.5"
          fill="none"
          {...fadeIn(delays.outline)}
        />

        {/* ─── Plunge Pool (front/bottom area) ─── */}
        <motion.rect
          x="80"
          y="390"
          width="180"
          height="70"
          rx="8"
          stroke="#5B8A72"
          strokeWidth="1.2"
          fill="#5B8A7215"
          {...fadeInFill(delays.pool)}
        />
        {/* Pool water lines */}
        <motion.path
          d="M 110 420 Q 130 415 150 420 Q 170 425 190 420 Q 210 415 230 420"
          stroke="#5B8A72"
          strokeWidth="0.6"
          fill="none"
          opacity="0.5"
          {...fadeIn(delays.pool + 0.2)}
        />
        <motion.path
          d="M 110 435 Q 130 430 150 435 Q 170 440 190 435 Q 210 430 230 435"
          stroke="#5B8A72"
          strokeWidth="0.6"
          fill="none"
          opacity="0.5"
          {...fadeIn(delays.pool + 0.3)}
        />

        {/* ─── King Bed (center of main room) ─── */}
        <motion.rect
          x="105"
          y="200"
          width="130"
          height="100"
          rx="3"
          stroke="#8B7355"
          strokeWidth="1"
          fill="#8B735510"
          {...fadeInFill(delays.bed)}
        />
        {/* Pillows */}
        <motion.rect
          x="115"
          y="208"
          width="50"
          height="22"
          rx="4"
          stroke="#8B7355"
          strokeWidth="0.8"
          fill="#8B735508"
          {...fadeInFill(delays.bed + 0.2)}
        />
        <motion.rect
          x="175"
          y="208"
          width="50"
          height="22"
          rx="4"
          stroke="#8B7355"
          strokeWidth="0.8"
          fill="#8B735508"
          {...fadeInFill(delays.bed + 0.2)}
        />
        {/* Headboard line */}
        <motion.line
          x1="105"
          y1="200"
          x2="235"
          y2="200"
          stroke="#8B7355"
          strokeWidth="2"
          {...fadeIn(delays.bed + 0.1)}
        />

        {/* ─── Living Area (left of bed) ─── */}
        {/* L-shaped couch */}
        <motion.path
          d="M 38 210 L 38 300 L 95 300 L 95 285 L 53 285 L 53 210 Z"
          stroke="#8B7355"
          strokeWidth="1"
          fill="#8B735510"
          {...fadeInFill(delays.living)}
        />
        {/* TV on wall */}
        <motion.rect
          x="55"
          y="195"
          width="30"
          height="4"
          rx="1"
          stroke="#8B7355"
          strokeWidth="0.8"
          fill="#8B7355"
          {...fadeInFill(delays.living + 0.2)}
        />
        {/* TV stand/console */}
        <motion.rect
          x="50"
          y="199"
          width="40"
          height="6"
          rx="1"
          stroke="#8B7355"
          strokeWidth="0.6"
          fill="#8B735508"
          {...fadeInFill(delays.living + 0.2)}
        />

        {/* ─── Bathroom divider wall ─── */}
        <motion.line
          x1="50"
          y1="170"
          x2="290"
          y2="170"
          stroke="#8B7355"
          strokeWidth="1"
          strokeDasharray="4 3"
          {...fadeIn(delays.bathroom)}
        />

        {/* ─── Left Vanity ─── */}
        <motion.rect
          x="50"
          y="110"
          width="60"
          height="30"
          rx="2"
          stroke="#8B7355"
          strokeWidth="0.8"
          fill="#8B735508"
          {...fadeInFill(delays.vanityLeft)}
        />
        {/* Mirror (circle) */}
        <motion.circle
          cx="80"
          cy="100"
          r="10"
          stroke="#8B7355"
          strokeWidth="0.6"
          fill="none"
          {...fadeIn(delays.vanityLeft + 0.1)}
        />

        {/* ─── Right Vanity ─── */}
        <motion.rect
          x="230"
          y="110"
          width="60"
          height="30"
          rx="2"
          stroke="#8B7355"
          strokeWidth="0.8"
          fill="#8B735508"
          {...fadeInFill(delays.vanityRight)}
        />
        {/* Mirror (circle) */}
        <motion.circle
          cx="260"
          cy="100"
          r="10"
          stroke="#8B7355"
          strokeWidth="0.6"
          fill="none"
          {...fadeIn(delays.vanityRight + 0.1)}
        />

        {/* ─── Indoor Double-Head Shower ─── */}
        <motion.rect
          x="135"
          y="80"
          width="70"
          height="55"
          rx="2"
          stroke="#5B8A72"
          strokeWidth="1"
          fill="#5B8A7210"
          {...fadeInFill(delays.showerIndoor)}
        />
        {/* Shower heads (two circles) */}
        <motion.circle
          cx="155"
          cy="100"
          r="6"
          stroke="#5B8A72"
          strokeWidth="0.8"
          fill="none"
          {...fadeIn(delays.showerIndoor + 0.2)}
        />
        <motion.circle
          cx="185"
          cy="100"
          r="6"
          stroke="#5B8A72"
          strokeWidth="0.8"
          fill="none"
          {...fadeIn(delays.showerIndoor + 0.2)}
        />

        {/* ─── Outdoor Double-Head Shower (behind/above indoor) ─── */}
        <motion.rect
          x="125"
          y="30"
          width="90"
          height="40"
          rx="2"
          stroke="#5B8A72"
          strokeWidth="1"
          strokeDasharray="3 2"
          fill="#5B8A7208"
          {...fadeInFill(delays.showerOutdoor)}
        />
        {/* Shower heads */}
        <motion.circle
          cx="150"
          cy="50"
          r="6"
          stroke="#5B8A72"
          strokeWidth="0.8"
          strokeDasharray="2 1.5"
          fill="none"
          {...fadeIn(delays.showerOutdoor + 0.2)}
        />
        <motion.circle
          cx="190"
          cy="50"
          r="6"
          stroke="#5B8A72"
          strokeWidth="0.8"
          strokeDasharray="2 1.5"
          fill="none"
          {...fadeIn(delays.showerOutdoor + 0.2)}
        />

        {/* ─── Labels ─── */}
        <motion.text
          x="170"
          y="270"
          textAnchor="middle"
          fill="#8B7355"
          fontSize="8"
          letterSpacing="0.1em"
          style={{ fontFamily: "var(--font-body)" }}
          {...fadeInFill(delays.labels)}
        >
          KING BED
        </motion.text>

        <motion.text
          x="170"
          y="430"
          textAnchor="middle"
          fill="#5B8A72"
          fontSize="8"
          letterSpacing="0.1em"
          style={{ fontFamily: "var(--font-body)" }}
          {...fadeInFill(delays.labels)}
        >
          PLUNGE POOL
        </motion.text>

        <motion.text
          x="170"
          y="115"
          textAnchor="middle"
          fill="#5B8A72"
          fontSize="7"
          letterSpacing="0.08em"
          style={{ fontFamily: "var(--font-body)" }}
          {...fadeInFill(delays.labels + 0.1)}
        >
          INDOOR SHOWER
        </motion.text>

        <motion.text
          x="170"
          y="55"
          textAnchor="middle"
          fill="#5B8A72"
          fontSize="7"
          letterSpacing="0.08em"
          style={{ fontFamily: "var(--font-body)" }}
          {...fadeInFill(delays.labels + 0.2)}
        >
          OUTDOOR SHOWER
        </motion.text>

        <motion.text
          x="80"
          y="150"
          textAnchor="middle"
          fill="#8B7355"
          fontSize="6.5"
          letterSpacing="0.08em"
          style={{ fontFamily: "var(--font-body)" }}
          {...fadeInFill(delays.labels + 0.1)}
        >
          VANITY
        </motion.text>

        <motion.text
          x="260"
          y="150"
          textAnchor="middle"
          fill="#8B7355"
          fontSize="6.5"
          letterSpacing="0.08em"
          style={{ fontFamily: "var(--font-body)" }}
          {...fadeInFill(delays.labels + 0.1)}
        >
          VANITY
        </motion.text>

        <motion.text
          x="66"
          y="255"
          textAnchor="middle"
          fill="#8B7355"
          fontSize="6.5"
          letterSpacing="0.08em"
          style={{ fontFamily: "var(--font-body)" }}
          {...fadeInFill(delays.labels)}
        >
          LIVING
        </motion.text>
        <motion.text
          x="66"
          y="264"
          textAnchor="middle"
          fill="#8B7355"
          fontSize="6.5"
          letterSpacing="0.08em"
          style={{ fontFamily: "var(--font-body)" }}
          {...fadeInFill(delays.labels)}
        >
          AREA
        </motion.text>
      </svg>
    </div>
  );
}
