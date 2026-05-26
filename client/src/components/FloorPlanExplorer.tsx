/**
 * FLOOR PLAN EXPLORER , Interactive Architectural Blueprint v2
 *
 * Creative concept: "The Blueprint Unfolds"
 * Starts with the base Nayara Tent, then progressively builds up
 * through Family Tent → Grand Tent → Residence as user clicks tabs.
 * Each tier animates in with SVG path drawing, fade reveals, and
 * architectural annotation lines.
 *
 * v2 enhancements:
 * - Door swing arcs at room entrances
 * - Bathroom fixtures (bathtub, shower, dual vanity)
 * - Terrace with wood-plank pattern
 * - Outdoor vegetation circles (trees/plants)
 * - Hover glow on rooms with tooltip
 * - Rug/carpet patterns under beds
 * - Richer furniture detail in living areas
 * - Dimension annotation lines with measurements
 * - Progressive build animation between tiers
 *
 * Style: Warm editorial cartography meets architectural line drawing.
 * Olive/bone palette with hand-drawn feel.
 */
import { useState, useRef, useCallback, useMemo } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

/* ── Palette (matches Tented Camp olive) ── */
const C = {
  bg: "#EDEEE2",
  bgDark: "#3B3D2F",
  paper: "#F5F3EC",
  paperDark: "#454738",
  grid: "#525642",
  wall: "#3B2B26",
  wallLight: "#5A4A3A",
  wallThin: "#7A6A5A",
  pool: "#4A7A9B",
  poolLight: "#6BA3C4",
  poolFill: "#4A7A9B25",
  bed: "#C4B89A",
  bedLight: "#D8CEAE",
  bedStroke: "#9A8A6A",
  accent: "#868B75",
  accentDark: "#525642",
  text: "#3B2B26",
  textSoft: "#3B2B26CC",
  textMuted: "#3B2B2680",
  bone: "#F7F5F0",
  fire: "#C4713A",
  fireGlow: "#C4713A40",
  kitchen: "#A89878",
  living: "#B8A888",
  terrace: "#C4B89A",
  terraceStroke: "#9A8A6A",
  rug: "#B8A88840",
  bath: "#D8D4CC",
  bathStroke: "#A09888",
  vegetation: "#6B7A5A",
  vegetationLight: "#8B9A6A30",
  door: "#5A4A3A",
};

const display = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)" } as const;
const mono = { fontFamily: "'DM Sans', sans-serif", fontWeight: 300 } as const;

/* ── Room tier definitions ── */
type RoomTier = "tent" | "family" | "grand" | "residence";

interface TierInfo {
  id: RoomTier;
  label: string;
  sqft: string;
  sqm: string;
  guests: string;
  tagline: string;
  features: string[];
}

const TIERS: TierInfo[] = [
  {
    id: "tent",
    label: "Nayara Tent",
    sqft: "1,700",
    sqm: "157.9",
    guests: "2 adults + 2 children",
    tagline: "Where luxury meets the rainforest canopy",
    features: [
      "4-poster king bed with mosquito net",
      "2 twin-size daybeds",
      "Private hot springs plunge pool",
      "Oversized bathroom with dual vanities",
      "Indoor & outdoor double-head showers",
      "Private terrace with volcano views",
    ],
  },
  {
    id: "family",
    label: "Family Tent",
    sqft: "2,400",
    sqm: "223",
    guests: "2 adults + 3 children",
    tagline: "Connected spaces for families who explore together",
    features: [
      "Everything in Nayara Tent, plus:",
      "Connecting room with 2 queen beds",
      "Shared private plunge pool",
      "Expanded terrace & outdoor living",
      "Perfect for families with children",
    ],
  },
  {
    id: "grand",
    label: "Grand Tent",
    sqft: "4,804",
    sqm: "446",
    guests: "4 adults + 2 children",
    tagline: "A private compound in the heart of the jungle",
    features: [
      "Nayara Tent (king + 2 daybeds) upstairs",
      "Ground-level room with 2 queen beds",
      "Full living area & equipped kitchen",
      "Oversized plunge pool from hot springs",
      "Private fire pit & outdoor dining",
    ],
  },
  {
    id: "residence",
    label: "Nayara Residence",
    sqft: "7,664",
    sqm: "712",
    guests: "Up to 12 adults",
    tagline: "The ultimate private estate for multi-generational journeys",
    features: [
      "2 Nayara Tents (each: king + 2 daybeds)",
      "2 connecting rooms (each: 2 queen beds)",
      "Grand living area, kitchen & dining",
      "Private infinity pool & fire pit",
      "Dedicated concierge service",
    ],
  },
];

/* ── Animation constants ── */
const EASE = [0.25, 0.8, 0.25, 1] as [number, number, number, number];
const DRAW = 1.0;
const FADE = 0.7;

/* ══════════════════════════════════════════════════════════════════
   SVG BUILDING BLOCKS , Reusable architectural elements
   ══════════════════════════════════════════════════════════════════ */

/** Rounded rectangle path */
function rr(x: number, y: number, w: number, h: number, r = 6): string {
  return `M${x + r},${y} L${x + w - r},${y} Q${x + w},${y} ${x + w},${y + r} L${x + w},${y + h - r} Q${x + w},${y + h} ${x + w - r},${y + h} L${x + r},${y + h} Q${x},${y + h} ${x},${y + h - r} L${x},${y + r} Q${x},${y} ${x + r},${y} Z`;
}

/** Square pool shape */
function poolShape(cx: number, cy: number, w: number, _h: number): string {
  // All pools are square , use w for both dimensions
  const s = w; // square side = width
  const x = cx - s / 2, y = cy - s / 2;
  return `M${x},${y} L${x + s},${y} L${x + s},${y + s} L${x},${y + s} Z`;
}

/** Animated room outline that draws itself */
function Room({ path, delay = 0, fill = "transparent", stroke = C.wall, sw = 1.5, hover = false }: {
  path: string; delay?: number; fill?: string; stroke?: string; sw?: number; hover?: boolean;
}) {
  return (
    <g className={hover ? "cursor-pointer" : ""}>
      {fill !== "transparent" && (
        <motion.path d={path} fill={fill}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: FADE, delay: delay + 0.2 }} />
      )}
      <motion.path d={path} fill="none" stroke={stroke} strokeWidth={sw}
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: { duration: DRAW, delay, ease: EASE },
          opacity: { duration: 0.2, delay },
        }}
      />
      {hover && (
        <motion.path d={path} fill="transparent" stroke={C.accent}
          strokeWidth={sw + 1.5} opacity={0}
          className="transition-opacity duration-300"
          style={{ pointerEvents: "all" }}
          whileHover={{ opacity: 0.25 }}
        />
      )}
    </g>
  );
}

/** Bed with headboard, pillows, and optional rug */
function Bed({ x, y, w, h, label, delay = 0, isKing = false, showRug = false }: {
  x: number; y: number; w: number; h: number; label: string;
  delay?: number; isKing?: boolean; showRug?: boolean;
}) {
  const pillowH = Math.max(7, h * 0.14);
  const pillowY = y + 6;
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: FADE, delay, ease: EASE }}
      style={{ transformOrigin: `${x + w / 2}px ${y + h / 2}px` }}
    >
      {/* Rug under bed */}
      {showRug && (
        <rect x={x - 6} y={y - 4} width={w + 12} height={h + 12} rx={3}
          fill={C.rug} stroke={C.bedStroke} strokeWidth={0.3} strokeDasharray="4 3" opacity={0.4} />
      )}
      {/* Mattress */}
      <rect x={x} y={y} width={w} height={h} rx={4} ry={4}
        fill={C.bed} stroke={C.bedStroke} strokeWidth={1} />
      {/* Headboard */}
      <rect x={x + 1} y={y} width={w - 2} height={5} rx={2}
        fill={C.bedStroke} opacity={0.5} />
      {/* Pillows */}
      {isKing ? (
        <>
          <rect x={x + 3} y={pillowY} width={w / 2 - 5} height={pillowH} rx={3}
            fill={C.bone} stroke={C.bedStroke} strokeWidth={0.4} opacity={0.8} />
          <rect x={x + w / 2 + 2} y={pillowY} width={w / 2 - 5} height={pillowH} rx={3}
            fill={C.bone} stroke={C.bedStroke} strokeWidth={0.4} opacity={0.8} />
        </>
      ) : (
        <rect x={x + 3} y={pillowY} width={w - 6} height={pillowH} rx={3}
          fill={C.bone} stroke={C.bedStroke} strokeWidth={0.4} opacity={0.8} />
      )}
      {/* Blanket fold line */}
      <line x1={x + 4} y1={y + h * 0.55} x2={x + w - 4} y2={y + h * 0.55}
        stroke={C.bedStroke} strokeWidth={0.4} opacity={0.3} />
      {/* Label */}
      <text x={x + w / 2} y={y + h - 5} textAnchor="middle"
        fill={C.text} fontSize={7} opacity={0.45} style={mono}>
        {label}
      </text>
    </motion.g>
  );
}

/** Daybed , smaller, simpler */
function Daybed({ x, y, w, h, delay = 0 }: {
  x: number; y: number; w: number; h: number; delay?: number;
}) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: FADE, delay, ease: EASE }}
      style={{ transformOrigin: `${x + w / 2}px ${y + h / 2}px` }}
    >
      <rect x={x} y={y} width={w} height={h} rx={4}
        fill={C.bedLight} stroke={C.bedStroke} strokeWidth={0.7} opacity={0.8} />
      {/* Cushion */}
      <rect x={x + 3} y={y + 3} width={w - 6} height={5} rx={2}
        fill={C.bone} stroke={C.bedStroke} strokeWidth={0.3} opacity={0.6} />
      <text x={x + w / 2} y={y + h - 4} textAnchor="middle"
        fill={C.text} fontSize={5.5} opacity={0.35} style={mono}>
        Daybed
      </text>
    </motion.g>
  );
}

/** Door swing arc */
function DoorArc({ cx, cy, r = 12, startAngle = 0, delay = 0 }: {
  cx: number; cy: number; r?: number; startAngle?: number; delay?: number;
}) {
  const rad1 = (startAngle * Math.PI) / 180;
  const rad2 = ((startAngle + 90) * Math.PI) / 180;
  const x1 = cx + r * Math.cos(rad1);
  const y1 = cy + r * Math.sin(rad1);
  const x2 = cx + r * Math.cos(rad2);
  const y2 = cy + r * Math.sin(rad2);
  return (
    <motion.g
      initial={{ opacity: 0 }} animate={{ opacity: 0.25 }}
      transition={{ duration: 0.6, delay: delay + 0.8 }}
    >
      <path
        d={`M${cx},${cy} L${x1},${y1} A${r},${r} 0 0,1 ${x2},${y2} Z`}
        fill={C.door} opacity={0.08} stroke={C.door} strokeWidth={0.4}
      />
    </motion.g>
  );
}

/** Bathroom fixtures , bathtub + shower + vanity */
function BathRoom({ x, y, w, h, delay = 0, compact = false }: {
  x: number; y: number; w: number; h: number; delay?: number; compact?: boolean;
}) {
  return (
    <motion.g
      initial={{ opacity: 0 }} animate={{ opacity: 0.35 }}
      transition={{ duration: FADE, delay: delay + 0.6 }}
    >
      {/* Room outline */}
      <rect x={x} y={y} width={w} height={h} rx={3}
        fill="none" stroke={C.wallThin} strokeWidth={0.5} strokeDasharray="3 3" />
      {/* Bathtub , oval */}
      <ellipse cx={x + w * 0.35} cy={y + h * 0.4} rx={compact ? 10 : 14} ry={compact ? 7 : 9}
        fill={C.bath} stroke={C.bathStroke} strokeWidth={0.5} />
      {/* Dual vanity , two circles */}
      <circle cx={x + w * 0.7} cy={y + h * 0.3} r={compact ? 4 : 5}
        fill="none" stroke={C.bathStroke} strokeWidth={0.4} />
      <circle cx={x + w * 0.85} cy={y + h * 0.3} r={compact ? 4 : 5}
        fill="none" stroke={C.bathStroke} strokeWidth={0.4} />
      {/* Shower , small square with lines */}
      <rect x={x + w * 0.65} y={y + h * 0.6} width={compact ? 10 : 14} height={compact ? 10 : 14} rx={2}
        fill="none" stroke={C.bathStroke} strokeWidth={0.4} />
      <circle cx={x + w * 0.65 + (compact ? 5 : 7)} cy={y + h * 0.6 + (compact ? 5 : 7)} r={2}
        fill="none" stroke={C.bathStroke} strokeWidth={0.3} />
      {/* Label */}
      <text x={x + w / 2} y={y + h - 3} textAnchor="middle"
        fill={C.text} fontSize={5} opacity={0.3} style={mono}>
        Bath
      </text>
    </motion.g>
  );
}

/** Terrace with wood-plank pattern */
function Terrace({ x, y, w, h, delay = 0 }: {
  x: number; y: number; w: number; h: number; delay?: number;
}) {
  const planks = [];
  const spacing = 5;
  for (let py = y + 3; py < y + h - 2; py += spacing) {
    planks.push(
      <line key={py} x1={x + 2} y1={py} x2={x + w - 2} y2={py}
        stroke={C.terraceStroke} strokeWidth={0.3} opacity={0.2} />
    );
  }
  return (
    <motion.g
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      transition={{ duration: FADE, delay: delay + 0.5 }}
    >
      <rect x={x} y={y} width={w} height={h} rx={4}
        fill={`${C.terrace}30`} stroke={C.terraceStroke} strokeWidth={0.5}
        strokeDasharray="6 3" />
      {planks}
      <text x={x + w / 2} y={y + h / 2 + 2} textAnchor="middle"
        fill={C.text} fontSize={5} opacity={0.25} style={mono}>
        Terrace
      </text>
    </motion.g>
  );
}

/** Vegetation , tree/plant circles around perimeter */
function Tree({ cx, cy, r = 8, delay = 0 }: {
  cx: number; cy: number; r?: number; delay?: number;
}) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.4, scale: 1 }}
      transition={{ duration: 0.6, delay: delay + 1.2 }}
      style={{ transformOrigin: `${cx}px ${cy}px` }}
    >
      <circle cx={cx} cy={cy} r={r} fill={C.vegetationLight} stroke={C.vegetation}
        strokeWidth={0.4} />
      {/* Inner foliage detail */}
      <circle cx={cx - r * 0.25} cy={cy - r * 0.15} r={r * 0.45}
        fill="none" stroke={C.vegetation} strokeWidth={0.3} opacity={0.5} />
      <circle cx={cx + r * 0.2} cy={cy + r * 0.2} r={r * 0.35}
        fill="none" stroke={C.vegetation} strokeWidth={0.2} opacity={0.4} />
    </motion.g>
  );
}

/** Pool with water shimmer animation */
function Pool({ cx, cy, w, h, delay = 0, label = "Hot Springs Plunge Pool" }: {
  cx: number; cy: number; w: number; h: number; delay?: number; label?: string;
}) {
  return (
    <g>
      <Room path={poolShape(cx, cy, w, h)} delay={delay}
        fill={C.poolFill} stroke={C.pool} sw={1.2} />
      {/* Water shimmer lines */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.35, 0.15, 0.35] }}
        transition={{ duration: 4, repeat: Infinity, delay: delay + 1 }}
      >
        <line x1={cx - w * 0.2} y1={cy - 3} x2={cx - w * 0.05} y2={cy - 3}
          stroke={C.poolLight} strokeWidth={0.7} strokeLinecap="round" />
        <line x1={cx + w * 0.05} y1={cy + 2} x2={cx + w * 0.22} y2={cy + 2}
          stroke={C.poolLight} strokeWidth={0.5} strokeLinecap="round" />
        <line x1={cx - w * 0.1} y1={cy + 6} x2={cx + w * 0.08} y2={cy + 6}
          stroke={C.poolLight} strokeWidth={0.4} strokeLinecap="round" />
      </motion.g>
      {/* Label */}
      <motion.text
        x={cx} y={cy - h / 2 - 8} textAnchor="middle"
        fill={C.text} fontSize={8} fontWeight={500}
        style={{ fontFamily: "var(--font-display)" }}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: FADE, delay: delay + 0.5 }}
      >
        {label}
      </motion.text>
    </g>
  );
}

/** Fire pit with animated glow */
function FirePit({ cx, cy, delay = 0 }: { cx: number; cy: number; delay?: number }) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay }}
      style={{ transformOrigin: `${cx}px ${cy}px` }}
    >
      {/* Glow */}
      <motion.circle cx={cx} cy={cy} r={18}
        fill={C.fireGlow}
        animate={{ r: [16, 20, 16] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      {/* Stone ring */}
      <circle cx={cx} cy={cy} r={13} fill="none" stroke={C.fire} strokeWidth={0.8} opacity={0.5} />
      {/* Inner ring */}
      <circle cx={cx} cy={cy} r={8} fill={`${C.fire}20`} stroke={C.fire} strokeWidth={0.5} opacity={0.6} />
      {/* Flame */}
      <motion.circle cx={cx} cy={cy} r={4} fill={C.fire}
        animate={{ opacity: [0.4, 0.9, 0.5, 0.8, 0.4], r: [3.5, 4.5, 3.5] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
      {/* Label */}
      <motion.text
        x={cx} y={cy + 24} textAnchor="middle"
        fill={C.fire} fontSize={6} opacity={0.5} style={mono}
        initial={{ opacity: 0 }} animate={{ opacity: 0.5 }}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
      >
        Fire Pit
      </motion.text>
    </motion.g>
  );
}

/** Room label annotation with optional leader line */
function Label({ x, y, text: t, sub, delay = 0 }: {
  x: number; y: number; text: string; sub?: string; delay?: number;
}) {
  return (
    <motion.g
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: FADE, delay: delay + 0.4, ease: EASE }}
    >
      <text x={x} y={y} textAnchor="middle"
        fill={C.text} fontSize={8.5} fontWeight={500}
        style={{ fontFamily: "var(--font-display)" }}>
        {t}
      </text>
      {sub && (
        <text x={x} y={y + 12} textAnchor="middle"
          fill={C.textMuted} fontSize={6.5} style={mono}>
          {sub}
        </text>
      )}
    </motion.g>
  );
}

/** Dimension annotation line */
function Dim({ x1, y1, x2, y2, label, delay = 0 }: {
  x1: number; y1: number; x2: number; y2: number; label: string; delay?: number;
}) {
  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
  const isH = Math.abs(y1 - y2) < 2;
  return (
    <motion.g initial={{ opacity: 0 }} animate={{ opacity: 0.25 }}
      transition={{ duration: FADE, delay: delay + 0.8 }}>
      <motion.line x1={x1} y1={y1} x2={x2} y2={y2}
        stroke={C.text} strokeWidth={0.4} strokeDasharray="2 2"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: DRAW, delay, ease: EASE }} />
      {/* Ticks */}
      {isH ? (
        <>
          <line x1={x1} y1={y1 - 3} x2={x1} y2={y1 + 3} stroke={C.text} strokeWidth={0.4} />
          <line x1={x2} y1={y2 - 3} x2={x2} y2={y2 + 3} stroke={C.text} strokeWidth={0.4} />
        </>
      ) : (
        <>
          <line x1={x1 - 3} y1={y1} x2={x1 + 3} y2={y1} stroke={C.text} strokeWidth={0.4} />
          <line x1={x2 - 3} y1={y2} x2={x2 + 3} y2={y2} stroke={C.text} strokeWidth={0.4} />
        </>
      )}
      <text x={isH ? mx : x1 - 6} y={isH ? my - 4 : my}
        textAnchor={isH ? "middle" : "end"}
        fill={C.text} fontSize={6} style={mono}>{label}</text>
    </motion.g>
  );
}

/** Living area furniture , sofa, dining table, chairs, kitchen counter */
function LivingFurniture({ x, y, w, h, delay = 0, compact = false }: {
  x: number; y: number; w: number; h: number; delay?: number; compact?: boolean;
}) {
  const s = compact ? 0.75 : 1;
  return (
    <motion.g initial={{ opacity: 0 }} animate={{ opacity: 0.45 }}
      transition={{ duration: 0.8, delay: delay + 0.4 }}>
      {/* Sofa , L-shape */}
      <rect x={x + 15 * s} y={y + 18 * s} width={70 * s} height={22 * s} rx={3}
        fill={C.living} stroke={C.bedStroke} strokeWidth={0.5} />
      <rect x={x + 15 * s} y={y + 18 * s} width={18 * s} height={40 * s} rx={3}
        fill={C.living} stroke={C.bedStroke} strokeWidth={0.5} />
      {/* Dining table , oval */}
      <ellipse cx={x + w / 2} cy={y + h * 0.55} rx={28 * s} ry={16 * s}
        fill="none" stroke={C.bedStroke} strokeWidth={0.5} />
      {/* Chairs around table */}
      {[-35, -18, 18, 35].map((offset, i) => (
        <circle key={i} cx={x + w / 2 + offset * s} cy={y + h * 0.55 + (i % 2 === 0 ? -20 : 20) * s}
          r={4 * s} fill="none" stroke={C.bedStroke} strokeWidth={0.3} />
      ))}
      {/* Kitchen counter */}
      <rect x={x + 8 * s} y={y + h - 30 * s} width={w - 16 * s} height={18 * s} rx={3}
        fill={C.kitchen} stroke={C.bedStroke} strokeWidth={0.4} opacity={0.4} />
      {/* Kitchen label */}
      <text x={x + w / 2} y={y + h - 18 * s} textAnchor="middle"
        fill={C.text} fontSize={5} opacity={0.25} style={mono}>
        Kitchen
      </text>
    </motion.g>
  );
}

/** Walkway connector between rooms */
function Connector({ x, y, w, h, delay = 0 }: {
  x: number; y: number; w: number; h: number; delay?: number;
}) {
  return (
    <motion.rect x={x} y={y} width={w} height={h} rx={2}
      fill={`${C.paper}60`} stroke={C.wallLight} strokeWidth={0.6}
      initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 0.8, scaleX: 1 }}
      transition={{ duration: 0.5, delay }}
      style={{ transformOrigin: `${x}px ${y + h / 2}px` }}
    />
  );
}

/* ══════════════════════════════════════════════════════════════════
   BACKGROUND , Architectural grid + compass
   ══════════════════════════════════════════════════════════════════ */
function ArchGrid({ w, h }: { w: number; h: number }) {
  const lines = useMemo(() => {
    const result = [];
    const sp = 20;
    for (let x = 0; x <= w; x += sp) {
      result.push(<line key={`v${x}`} x1={x} y1={0} x2={x} y2={h}
        stroke={C.grid} strokeWidth={x % 100 === 0 ? 0.25 : 0.08} opacity={0.12} />);
    }
    for (let y = 0; y <= h; y += sp) {
      result.push(<line key={`h${y}`} x1={0} y1={y} x2={w} y2={y}
        stroke={C.grid} strokeWidth={y % 100 === 0 ? 0.25 : 0.08} opacity={0.12} />);
    }
    return result;
  }, [w, h]);
  return <g>{lines}</g>;
}

function Compass({ x, y }: { x: number; y: number }) {
  return (
    <motion.g transform={`translate(${x},${y})`}
      initial={{ opacity: 0, rotate: -25 }}
      animate={{ opacity: 0.12, rotate: 0 }}
      transition={{ duration: 1.5, delay: 0.5, ease: EASE }}
      style={{ transformOrigin: `${x}px ${y}px` }}>
      <circle cx={0} cy={0} r={18} fill="none" stroke={C.text} strokeWidth={0.4} />
      <circle cx={0} cy={0} r={12} fill="none" stroke={C.text} strokeWidth={0.15} />
      <line x1={0} y1={-16} x2={0} y2={16} stroke={C.text} strokeWidth={0.3} />
      <line x1={-16} y1={0} x2={16} y2={0} stroke={C.text} strokeWidth={0.3} />
      <polygon points="0,-18 -2.5,-12 2.5,-12" fill={C.text} />
      <text x={0} y={-22} textAnchor="middle" fill={C.text} fontSize={6}
        style={{ ...display, letterSpacing: "0.15em" }}>N</text>
    </motion.g>
  );
}

/* ══════════════════════════════════════════════════════════════════
   NAYARA TENT BLUEPRINT
   ══════════════════════════════════════════════════════════════════ */
function TentBP({ isInView = true }: { isInView?: boolean }) {
  // Unified tent layout: bathroom (top) → bed+daybeds (middle) → terrace with pool (bottom)
  const tx = 100, ty = 60, tw = 200, th = 260;
  // Bathroom occupies top ~90px of tent
  const bathY = ty + 12;
  // Divider between bath and bedroom
  const dividerY = ty + 100;
  // Bed zone
  const bedY = dividerY + 15;
  // Terrace (full deck below tent, pool inside)
  const terrY = ty + th + 10;
  const terrW = tw + 20;
  const terrH = 90;
  const terrX = tx - 10;

  // Grow helpers — only animate when in view
  const draw = (delay: number) => ({
    initial: { pathLength: 0, opacity: 0 },
    animate: isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 },
    transition: { duration: 0.9, delay, ease: "easeOut" as const },
  });
  const fade = (delay: number, op = 1) => ({
    initial: { opacity: 0 },
    animate: isInView ? { opacity: op } : { opacity: 0 },
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  });
  const grow = (delay: number) => ({
    initial: { opacity: 0, scale: 0.8 },
    animate: isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 },
    transition: { duration: 0.7, delay, ease: EASE },
  });

  return (
    <g>
      {/* ═══ TENT OUTLINE (single unified structure) ═══ */}
      <motion.path
        d={rr(tx, ty, tw, th, 6)}
        fill={`${C.paper}90`}
        stroke={C.wall}
        strokeWidth={1.5}
        strokeLinejoin="round"
        {...draw(0)}
      />

      {/* ── BATHROOM (top zone) ── */}
      {/* Divider line */}
      <motion.line x1={tx + 12} y1={dividerY} x2={tx + tw - 12} y2={dividerY}
        stroke={C.wallLight} strokeWidth={0.8} strokeDasharray="5 3"
        {...draw(0.8)} />

      {/* Indoor Double-Head Shower (top, near tent outline) */}
      <motion.g {...fade(1.0, 0.5)}>
        <rect x={tx + tw / 2 - 24} y={bathY + 4} width={48} height={24} rx={3}
          fill={`${C.pool}12`} stroke={C.pool} strokeWidth={0.7} />
        <circle cx={tx + tw / 2 - 8} cy={bathY + 16} r={5}
          fill="none" stroke={C.pool} strokeWidth={0.5} />
        <circle cx={tx + tw / 2 + 8} cy={bathY + 16} r={5}
          fill="none" stroke={C.pool} strokeWidth={0.5} />
        <text x={tx + tw / 2} y={bathY + 34} textAnchor="middle"
          fill={C.text} fontSize={5} opacity={0.3} style={mono}>Indoor Shower</text>
      </motion.g>

      {/* Left Vanity */}
      <motion.g {...fade(1.2, 0.55)}>
        <rect x={tx + 12} y={bathY + 42} width={40} height={20} rx={3}
          fill={C.bath} stroke={C.bathStroke} strokeWidth={0.6} />
        <circle cx={tx + 22} cy={bathY + 38} r={6}
          fill="none" stroke={C.bathStroke} strokeWidth={0.5} />
        <circle cx={tx + 42} cy={bathY + 38} r={6}
          fill="none" stroke={C.bathStroke} strokeWidth={0.5} />
        <text x={tx + 32} y={bathY + 68} textAnchor="middle"
          fill={C.text} fontSize={5} opacity={0.35} style={mono}>Vanity</text>
      </motion.g>

      {/* Right Vanity */}
      <motion.g {...fade(1.3, 0.55)}>
        <rect x={tx + tw - 52} y={bathY + 42} width={40} height={20} rx={3}
          fill={C.bath} stroke={C.bathStroke} strokeWidth={0.6} />
        <circle cx={tx + tw - 42} cy={bathY + 38} r={6}
          fill="none" stroke={C.bathStroke} strokeWidth={0.5} />
        <circle cx={tx + tw - 22} cy={bathY + 38} r={6}
          fill="none" stroke={C.bathStroke} strokeWidth={0.5} />
        <text x={tx + tw - 32} y={bathY + 68} textAnchor="middle"
          fill={C.text} fontSize={5} opacity={0.35} style={mono}>Vanity</text>
      </motion.g>

      {/* Bathroom label (centered between vanities) */}
      <motion.text x={tx + tw / 2} y={bathY + 56} textAnchor="middle"
        fill={C.text} fontSize={7} fontWeight={400}
        style={{ fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}
        {...fade(1.5, 0.45)}>
        Bathroom
      </motion.text>

      {/* Outdoor Double-Head Shower (dashed = outdoor) */}
      <motion.g {...fade(1.7, 0.4)}>
        <rect x={tx + tw / 2 - 26} y={ty - 30} width={52} height={24} rx={3}
          fill={`${C.pool}08`} stroke={C.pool} strokeWidth={0.6} strokeDasharray="3 2" />
        <circle cx={tx + tw / 2 - 8} cy={ty - 18} r={5}
          fill="none" stroke={C.pool} strokeWidth={0.4} strokeDasharray="2 1.5" />
        <circle cx={tx + tw / 2 + 8} cy={ty - 18} r={5}
          fill="none" stroke={C.pool} strokeWidth={0.4} strokeDasharray="2 1.5" />
        <text x={tx + tw / 2} y={ty - 36} textAnchor="middle"
          fill={C.text} fontSize={5} opacity={0.25} style={mono}>Outdoor Shower</text>
      </motion.g>

      {/* ── BEDROOM (center zone) ── */}
      {/* King Bed */}
      <motion.g
        style={{ transformOrigin: `${tx + tw / 2}px ${bedY + 30}px` }}
        {...grow(0.4)}>
        <rect x={tx + 60} y={bedY} width={80} height={60} rx={4}
          fill={C.bed} stroke={C.bedStroke} strokeWidth={1} />
        <rect x={tx + 61} y={bedY} width={78} height={5} rx={2}
          fill={C.bedStroke} opacity={0.5} />
        <rect x={tx + 63} y={bedY + 6} width={36} height={9} rx={3}
          fill={C.bone} stroke={C.bedStroke} strokeWidth={0.4} opacity={0.8} />
        <rect x={tx + 101} y={bedY + 6} width={36} height={9} rx={3}
          fill={C.bone} stroke={C.bedStroke} strokeWidth={0.4} opacity={0.8} />
        <line x1={tx + 64} y1={bedY + 35} x2={tx + 136} y2={bedY + 35}
          stroke={C.bedStroke} strokeWidth={0.4} opacity={0.3} />
        <text x={tx + tw / 2} y={bedY + 52} textAnchor="middle"
          fill={C.text} fontSize={7} opacity={0.45} style={mono}>King Bed</text>
      </motion.g>

      {/* Left Daybed */}
      <motion.g
        style={{ transformOrigin: `${tx + 30}px ${bedY + 25}px` }}
        {...grow(0.6)}>
        <rect x={tx + 8} y={bedY + 5} width={42} height={45} rx={4}
          fill={C.bedLight} stroke={C.bedStroke} strokeWidth={0.7} opacity={0.8} />
        <rect x={tx + 11} y={bedY + 8} width={36} height={5} rx={2}
          fill={C.bone} stroke={C.bedStroke} strokeWidth={0.3} opacity={0.6} />
        <text x={tx + 29} y={bedY + 42} textAnchor="middle"
          fill={C.text} fontSize={5.5} opacity={0.35} style={mono}>Daybed</text>
      </motion.g>

      {/* Right Daybed */}
      <motion.g
        style={{ transformOrigin: `${tx + tw - 30}px ${bedY + 25}px` }}
        {...grow(0.65)}>
        <rect x={tx + tw - 50} y={bedY + 5} width={42} height={45} rx={4}
          fill={C.bedLight} stroke={C.bedStroke} strokeWidth={0.7} opacity={0.8} />
        <rect x={tx + tw - 47} y={bedY + 8} width={36} height={5} rx={2}
          fill={C.bone} stroke={C.bedStroke} strokeWidth={0.3} opacity={0.6} />
        <text x={tx + tw - 29} y={bedY + 42} textAnchor="middle"
          fill={C.text} fontSize={5.5} opacity={0.35} style={mono}>Daybed</text>
      </motion.g>

      {/* Door arc at tent front */}
      <motion.g {...fade(0.5, 0.2)}>
        <path
          d={`M${tx + tw / 2 - 14},${ty + th} A14,14 0 0,1 ${tx + tw / 2 + 14},${ty + th}`}
          fill={C.door} opacity={0.08} stroke={C.door} strokeWidth={0.4}
        />
      </motion.g>

      {/* ═══ TERRACE (full deck, pool inside) ═══ */}
      <motion.g {...fade(0.3)}>
        <rect x={terrX} y={terrY} width={terrW} height={terrH} rx={4}
          fill={`${C.terrace}30`} stroke={C.terraceStroke} strokeWidth={0.6}
          strokeDasharray="6 3" />
        {/* Wood plank lines */}
        {Array.from({ length: 12 }, (_, i) => (
          <line key={i} x1={terrX + 3} y1={terrY + 5 + i * 7} x2={terrX + terrW - 3} y2={terrY + 5 + i * 7}
            stroke={C.terraceStroke} strokeWidth={0.25} opacity={0.2} />
        ))}
        <text x={terrX + terrW / 2} y={terrY + 14} textAnchor="middle"
          fill={C.text} fontSize={5.5} opacity={0.3} style={mono}>Terrace</text>
      </motion.g>

      {/* Hot Springs Plunge Pool (inside terrace) */}
      <motion.g {...grow(0.8)}>
        <rect x={tx + tw / 2 - 32} y={terrY + 22} width={64} height={52} rx={6}
          fill={C.poolFill} stroke={C.pool} strokeWidth={1.2} />
        {/* Water shimmer */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: [0, 0.35, 0.15, 0.35] } : { opacity: 0 }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}>
          <line x1={tx + tw / 2 - 15} y1={terrY + 42} x2={tx + tw / 2} y2={terrY + 42}
            stroke={C.poolLight} strokeWidth={0.7} strokeLinecap="round" />
          <line x1={tx + tw / 2 + 5} y1={terrY + 50} x2={tx + tw / 2 + 18} y2={terrY + 50}
            stroke={C.poolLight} strokeWidth={0.5} strokeLinecap="round" />
        </motion.g>
        <text x={tx + tw / 2} y={terrY + 18} textAnchor="middle"
          fill={C.pool} fontSize={6} fontWeight={500} opacity={0.6}
          style={{ fontFamily: "var(--font-display)" }}>
          Plunge Pool
        </text>
      </motion.g>

      {/* ═══ LABELS & DIMENSIONS ═══ */}
      <motion.g {...fade(2.0, 0.7)}>
        <text x={tx + tw / 2} y={terrY + terrH + 22} textAnchor="middle"
          fill={C.text} fontSize={10} fontWeight={500}
          style={{ fontFamily: "var(--font-display)" }}>
          Nayara Tent
        </text>
        <text x={tx + tw / 2} y={terrY + terrH + 36} textAnchor="middle"
          fill={C.text} fontSize={6} opacity={0.4} style={mono}>
          157.9 sqm · 1,700 sq ft
        </text>
      </motion.g>

      {/* Dimension line */}
      <motion.g {...fade(2.2, 0.3)}>
        <line x1={tx} y1={terrY + terrH + 50} x2={tx + tw} y2={terrY + terrH + 50}
          stroke={C.text} strokeWidth={0.4} />
        <line x1={tx} y1={terrY + terrH + 46} x2={tx} y2={terrY + terrH + 54}
          stroke={C.text} strokeWidth={0.4} />
        <line x1={tx + tw} y1={terrY + terrH + 46} x2={tx + tw} y2={terrY + terrH + 54}
          stroke={C.text} strokeWidth={0.4} />
        <text x={tx + tw / 2} y={terrY + terrH + 62} textAnchor="middle"
          fill={C.text} fontSize={5} opacity={0.35} style={mono}>14.5m</text>
      </motion.g>

      {/* ═══ VEGETATION ═══ */}
      <motion.g {...fade(2.5, 0.4)}>
        <circle cx={tx - 30} cy={ty + 50} r={10} fill={C.vegetationLight} stroke={C.vegetation} strokeWidth={0.4} />
        <circle cx={tx + tw + 25} cy={ty + 70} r={7} fill={C.vegetationLight} stroke={C.vegetation} strokeWidth={0.4} />
        <circle cx={tx + tw + 30} cy={ty + th - 20} r={9} fill={C.vegetationLight} stroke={C.vegetation} strokeWidth={0.4} />
        <circle cx={tx - 35} cy={ty + th - 40} r={8} fill={C.vegetationLight} stroke={C.vegetation} strokeWidth={0.4} />
        <circle cx={tx - 25} cy={ty + 10} r={6} fill={C.vegetationLight} stroke={C.vegetation} strokeWidth={0.4} />
        <circle cx={tx + tw + 20} cy={terrY + 40} r={8} fill={C.vegetationLight} stroke={C.vegetation} strokeWidth={0.4} />
        <circle cx={tx - 20} cy={terrY + 30} r={6} fill={C.vegetationLight} stroke={C.vegetation} strokeWidth={0.4} />
      </motion.g>
    </g>
  );
}

/* ══════════════════════════════════════════════════════════════════
   FAMILY TENT BLUEPRINT
   Same as Nayara Tent + connected children's room
   ══════════════════════════════════════════════════════════════════ */
function FamilyBP({ isInView = true }: { isInView?: boolean }) {
  // Main tent (same as TentBP but shifted left to make room for connecting room)
  const tx = 50, ty = 60, tw = 180, th = 230;
  const bathY = ty + 12;
  const dividerY = ty + 90;
  const bedY = dividerY + 12;
  // Terrace + pool at bottom
  const terrY = ty + th + 10;
  const terrW = tw + 16;
  const terrH = 80;
  const terrX = tx - 8;
  // Connecting room (to the right)
  const cx = tx + tw + 30, cy = ty + 40, cw = 130, ch = 160;
  // Connector walkway between tents
  const connX = tx + tw, connY = ty + th / 2 - 12, connW = 30, connH = 24;

  const mono = { fontFamily: "var(--font-body)" } as const;

  const draw = (delay: number) => ({
    initial: { pathLength: 0, opacity: 0 },
    animate: isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 },
    transition: { duration: 0.9, delay, ease: "easeOut" as const },
  });
  const fade = (delay: number, op = 1) => ({
    initial: { opacity: 0 },
    animate: isInView ? { opacity: op } : { opacity: 0 },
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  });
  const grow = (delay: number) => ({
    initial: { opacity: 0, scale: 0.8 },
    animate: isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 },
    transition: { duration: 0.7, delay, ease: EASE },
  });

  return (
    <g>
      {/* ═══ MAIN TENT OUTLINE ═══ */}
      <motion.path
        d={rr(tx, ty, tw, th, 6)}
        fill={`${C.paper}90`}
        stroke={C.wall}
        strokeWidth={1.5}
        strokeLinejoin="round"
        {...draw(0)}
      />

      {/* ── BATHROOM (top zone) ── */}
      <motion.line x1={tx + 10} y1={dividerY} x2={tx + tw - 10} y2={dividerY}
        stroke={C.wallLight} strokeWidth={0.8} strokeDasharray="5 3"
        {...draw(0.8)} />

      {/* Indoor Double-Head Shower (top) */}
      <motion.g {...fade(1.0, 0.5)}>
        <rect x={tx + tw / 2 - 22} y={bathY + 4} width={44} height={20} rx={3}
          fill={`${C.pool}12`} stroke={C.pool} strokeWidth={0.7} />
        <circle cx={tx + tw / 2 - 7} cy={bathY + 14} r={4}
          fill="none" stroke={C.pool} strokeWidth={0.5} />
        <circle cx={tx + tw / 2 + 7} cy={bathY + 14} r={4}
          fill="none" stroke={C.pool} strokeWidth={0.5} />
        <text x={tx + tw / 2} y={bathY + 30} textAnchor="middle"
          fill={C.text} fontSize={4.5} opacity={0.3} style={mono}>Indoor Shower</text>
      </motion.g>

      {/* Left Vanity */}
      <motion.g {...fade(1.2, 0.55)}>
        <rect x={tx + 10} y={bathY + 38} width={36} height={16} rx={3}
          fill={C.bath} stroke={C.bathStroke} strokeWidth={0.6} />
        <circle cx={tx + 20} cy={bathY + 35} r={5}
          fill="none" stroke={C.bathStroke} strokeWidth={0.5} />
        <circle cx={tx + 38} cy={bathY + 35} r={5}
          fill="none" stroke={C.bathStroke} strokeWidth={0.5} />
        <text x={tx + 28} y={bathY + 60} textAnchor="middle"
          fill={C.text} fontSize={4.5} opacity={0.35} style={mono}>Vanity</text>
      </motion.g>

      {/* Right Vanity */}
      <motion.g {...fade(1.3, 0.55)}>
        <rect x={tx + tw - 46} y={bathY + 38} width={36} height={16} rx={3}
          fill={C.bath} stroke={C.bathStroke} strokeWidth={0.6} />
        <circle cx={tx + tw - 36} cy={bathY + 35} r={5}
          fill="none" stroke={C.bathStroke} strokeWidth={0.5} />
        <circle cx={tx + tw - 18} cy={bathY + 35} r={5}
          fill="none" stroke={C.bathStroke} strokeWidth={0.5} />
        <text x={tx + tw - 28} y={bathY + 60} textAnchor="middle"
          fill={C.text} fontSize={4.5} opacity={0.35} style={mono}>Vanity</text>
      </motion.g>

      {/* Bathroom label */}
      <motion.text x={tx + tw / 2} y={bathY + 50} textAnchor="middle"
        fill={C.text} fontSize={6} fontWeight={400}
        style={{ fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}
        {...fade(1.4, 0.45)}>
        Bathroom
      </motion.text>

      {/* Outdoor Shower (dashed, above tent) */}
      <motion.g {...fade(1.6, 0.4)}>
        <rect x={tx + tw / 2 - 22} y={ty - 26} width={44} height={20} rx={3}
          fill={`${C.pool}08`} stroke={C.pool} strokeWidth={0.6} strokeDasharray="3 2" />
        <circle cx={tx + tw / 2 - 7} cy={ty - 16} r={4}
          fill="none" stroke={C.pool} strokeWidth={0.4} strokeDasharray="2 1.5" />
        <circle cx={tx + tw / 2 + 7} cy={ty - 16} r={4}
          fill="none" stroke={C.pool} strokeWidth={0.4} strokeDasharray="2 1.5" />
        <text x={tx + tw / 2} y={ty - 32} textAnchor="middle"
          fill={C.text} fontSize={4.5} opacity={0.25} style={mono}>Outdoor Shower</text>
      </motion.g>

      {/* ── BEDROOM (center zone) ── */}
      {/* King Bed */}
      <motion.g
        style={{ transformOrigin: `${tx + tw / 2}px ${bedY + 25}px` }}
        {...grow(0.4)}>
        <rect x={tx + 52} y={bedY} width={76} height={52} rx={4}
          fill={C.bed} stroke={C.bedStroke} strokeWidth={1} />
        <rect x={tx + 53} y={bedY} width={74} height={4} rx={2}
          fill={C.bedStroke} opacity={0.5} />
        <rect x={tx + 55} y={bedY + 5} width={34} height={8} rx={3}
          fill={C.bone} stroke={C.bedStroke} strokeWidth={0.4} opacity={0.8} />
        <rect x={tx + 91} y={bedY + 5} width={34} height={8} rx={3}
          fill={C.bone} stroke={C.bedStroke} strokeWidth={0.4} opacity={0.8} />
        <text x={tx + tw / 2} y={bedY + 44} textAnchor="middle"
          fill={C.text} fontSize={6} opacity={0.45} style={mono}>King Bed</text>
      </motion.g>

      {/* Left Daybed */}
      <motion.g
        style={{ transformOrigin: `${tx + 26}px ${bedY + 20}px` }}
        {...grow(0.6)}>
        <rect x={tx + 6} y={bedY + 4} width={38} height={38} rx={4}
          fill={C.bedLight} stroke={C.bedStroke} strokeWidth={0.7} opacity={0.8} />
        <rect x={tx + 9} y={bedY + 7} width={32} height={4} rx={2}
          fill={C.bone} stroke={C.bedStroke} strokeWidth={0.3} opacity={0.6} />
        <text x={tx + 25} y={bedY + 36} textAnchor="middle"
          fill={C.text} fontSize={5} opacity={0.35} style={mono}>Daybed</text>
      </motion.g>

      {/* Right Daybed */}
      <motion.g
        style={{ transformOrigin: `${tx + tw - 26}px ${bedY + 20}px` }}
        {...grow(0.65)}>
        <rect x={tx + tw - 44} y={bedY + 4} width={38} height={38} rx={4}
          fill={C.bedLight} stroke={C.bedStroke} strokeWidth={0.7} opacity={0.8} />
        <rect x={tx + tw - 41} y={bedY + 7} width={32} height={4} rx={2}
          fill={C.bone} stroke={C.bedStroke} strokeWidth={0.3} opacity={0.6} />
        <text x={tx + tw - 25} y={bedY + 36} textAnchor="middle"
          fill={C.text} fontSize={5} opacity={0.35} style={mono}>Daybed</text>
      </motion.g>

      {/* ═══ TERRACE (full deck, pool inside) ═══ */}
      <motion.g {...fade(0.3)}>
        <rect x={terrX} y={terrY} width={terrW} height={terrH} rx={4}
          fill={`${C.terrace}30`} stroke={C.terraceStroke} strokeWidth={0.6}
          strokeDasharray="6 3" />
        {Array.from({ length: 10 }, (_, i) => (
          <line key={i} x1={terrX + 3} y1={terrY + 5 + i * 7} x2={terrX + terrW - 3} y2={terrY + 5 + i * 7}
            stroke={C.terraceStroke} strokeWidth={0.25} opacity={0.2} />
        ))}
        <text x={terrX + terrW / 2} y={terrY + 12} textAnchor="middle"
          fill={C.text} fontSize={5} opacity={0.3} style={mono}>Terrace</text>
      </motion.g>

      {/* Plunge Pool (inside terrace) */}
      <motion.g {...grow(0.8)}>
        <rect x={tx + tw / 2 - 28} y={terrY + 20} width={56} height={44} rx={5}
          fill={C.poolFill} stroke={C.pool} strokeWidth={1.2} />
        <motion.g
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: [0, 0.35, 0.15, 0.35] } : { opacity: 0 }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}>
          <line x1={tx + tw / 2 - 12} y1={terrY + 38} x2={tx + tw / 2} y2={terrY + 38}
            stroke={C.poolLight} strokeWidth={0.7} strokeLinecap="round" />
          <line x1={tx + tw / 2 + 4} y1={terrY + 46} x2={tx + tw / 2 + 14} y2={terrY + 46}
            stroke={C.poolLight} strokeWidth={0.5} strokeLinecap="round" />
        </motion.g>
        <text x={tx + tw / 2} y={terrY + 16} textAnchor="middle"
          fill={C.pool} fontSize={5} fontWeight={500} opacity={0.6}
          style={{ fontFamily: "var(--font-display)" }}>
          Plunge Pool
        </text>
      </motion.g>

      {/* ═══ CONNECTOR WALKWAY ═══ */}
      <motion.g {...fade(1.8, 0.6)}>
        <rect x={connX} y={connY} width={connW} height={connH} rx={2}
          fill={`${C.terrace}40`} stroke={C.terraceStroke} strokeWidth={0.5}
          strokeDasharray="4 2" />
        {Array.from({ length: 4 }, (_, i) => (
          <line key={i} x1={connX + 3 + i * 7} y1={connY + 2} x2={connX + 3 + i * 7} y2={connY + connH - 2}
            stroke={C.terraceStroke} strokeWidth={0.2} opacity={0.3} />
        ))}
      </motion.g>

      {/* ═══ CONNECTING CHILDREN'S ROOM ═══ */}
      <motion.path
        d={rr(cx, cy, cw, ch, 6)}
        fill={`${C.paper}70`}
        stroke={C.wall}
        strokeWidth={1.2}
        strokeLinejoin="round"
        {...draw(1.5)}
      />

      {/* Queen Bed 1 */}
      <motion.g
        style={{ transformOrigin: `${cx + 35}px ${cy + 50}px` }}
        {...grow(1.8)}>
        <rect x={cx + 10} y={cy + 20} width={50} height={42} rx={4}
          fill={C.bed} stroke={C.bedStroke} strokeWidth={0.8} />
        <rect x={cx + 12} y={cy + 22} width={46} height={4} rx={2}
          fill={C.bedStroke} opacity={0.4} />
        <text x={cx + 35} y={cy + 55} textAnchor="middle"
          fill={C.text} fontSize={5} opacity={0.4} style={mono}>Queen</text>
      </motion.g>

      {/* Queen Bed 2 */}
      <motion.g
        style={{ transformOrigin: `${cx + cw - 35}px ${cy + 50}px` }}
        {...grow(1.9)}>
        <rect x={cx + cw - 60} y={cy + 20} width={50} height={42} rx={4}
          fill={C.bed} stroke={C.bedStroke} strokeWidth={0.8} />
        <rect x={cx + cw - 58} y={cy + 22} width={46} height={4} rx={2}
          fill={C.bedStroke} opacity={0.4} />
        <text x={cx + cw - 35} y={cy + 55} textAnchor="middle"
          fill={C.text} fontSize={5} opacity={0.4} style={mono}>Queen</text>
      </motion.g>

      {/* Children's room bathroom (compact) */}
      <motion.g {...fade(2.0, 0.5)}>
        <rect x={cx + cw / 2 - 22} y={cy + ch - 45} width={44} height={30} rx={3}
          fill={C.bath} stroke={C.bathStroke} strokeWidth={0.5} />
        <circle cx={cx + cw / 2 - 8} cy={cy + ch - 35} r={4}
          fill="none" stroke={C.bathStroke} strokeWidth={0.4} />
        <circle cx={cx + cw / 2 + 8} cy={cy + ch - 35} r={4}
          fill="none" stroke={C.bathStroke} strokeWidth={0.4} />
        <text x={cx + cw / 2} y={cy + ch - 18} textAnchor="middle"
          fill={C.text} fontSize={4.5} opacity={0.35} style={mono}>Bathroom</text>
      </motion.g>

      {/* ═══ LABELS & DIMENSIONS ═══ */}
      <motion.g {...fade(2.2, 0.7)}>
        <text x={tx + tw / 2} y={terrY + terrH + 18} textAnchor="middle"
          fill={C.text} fontSize={9} fontWeight={500}
          style={{ fontFamily: "var(--font-display)" }}>
          Nayara Tent
        </text>
        <text x={tx + tw / 2} y={terrY + terrH + 30} textAnchor="middle"
          fill={C.text} fontSize={5} opacity={0.4} style={mono}>
          Primary Suite
        </text>
      </motion.g>

      <motion.g {...fade(2.3, 0.7)}>
        <text x={cx + cw / 2} y={cy + ch + 18} textAnchor="middle"
          fill={C.text} fontSize={8} fontWeight={500}
          style={{ fontFamily: "var(--font-display)" }}>
          Connecting Room
        </text>
        <text x={cx + cw / 2} y={cy + ch + 30} textAnchor="middle"
          fill={C.text} fontSize={5} opacity={0.4} style={mono}>
          2 Queen Beds
        </text>
      </motion.g>

      {/* Dimension line */}
      <motion.g {...fade(2.5, 0.3)}>
        <line x1={tx} y1={terrY + terrH + 45} x2={cx + cw} y2={terrY + terrH + 45}
          stroke={C.text} strokeWidth={0.4} />
        <line x1={tx} y1={terrY + terrH + 41} x2={tx} y2={terrY + terrH + 49}
          stroke={C.text} strokeWidth={0.4} />
        <line x1={cx + cw} y1={terrY + terrH + 41} x2={cx + cw} y2={terrY + terrH + 49}
          stroke={C.text} strokeWidth={0.4} />
        <text x={(tx + cx + cw) / 2} y={terrY + terrH + 58} textAnchor="middle"
          fill={C.text} fontSize={5} opacity={0.35} style={mono}>24.8m</text>
      </motion.g>

      {/* ═══ VEGETATION ═══ */}
      <motion.g {...fade(2.6, 0.4)}>
        <circle cx={tx - 25} cy={ty + 40} r={8} fill={C.vegetationLight} stroke={C.vegetation} strokeWidth={0.4} />
        <circle cx={tx - 20} cy={ty + th - 30} r={6} fill={C.vegetationLight} stroke={C.vegetation} strokeWidth={0.4} />
        <circle cx={cx + cw + 20} cy={cy + 30} r={7} fill={C.vegetationLight} stroke={C.vegetation} strokeWidth={0.4} />
        <circle cx={cx + cw + 18} cy={cy + ch - 20} r={6} fill={C.vegetationLight} stroke={C.vegetation} strokeWidth={0.4} />
        <circle cx={tx - 18} cy={terrY + 30} r={5} fill={C.vegetationLight} stroke={C.vegetation} strokeWidth={0.4} />
        <circle cx={cx + cw + 22} cy={cy + ch + 20} r={8} fill={C.vegetationLight} stroke={C.vegetation} strokeWidth={0.4} />
      </motion.g>
    </g>
  );
}

/* ══════════════════════════════════════════════════════════════════
   GRAND TENT BLUEPRINT
   ══════════════════════════════════════════════════════════════════ */
function GrandBP() {
  const tx = 25, ty = 65, tw = 160, th = 150;
  const lx = tx + tw + 18, ly = ty - 15, lw = 140, lh = 175;
  const dx = lx + lw + 18, dy = ty + 15, dw = 130, dh = 120;
  return (
    <g>
      {/* Terrace */}
      <Terrace x={tx - 30} y={ty + 10} w={26} h={100} delay={0.1} />
      {/* Upper tent */}
      <Room path={rr(tx, ty, tw, th, 8)} delay={0} fill={`${C.paper}90`} hover />
      <Bed x={tx + 40} y={ty + 82} w={80} h={52} label="King Bed" delay={0.25} isKing showRug />
      <Daybed x={tx + 10} y={ty + 15} w={45} h={36} delay={0.4} />
      <Daybed x={tx + 105} y={ty + 15} w={45} h={36} delay={0.45} />
      <BathRoom x={tx + tw - 55} y={ty + th - 48} w={48} h={38} delay={0.3} compact />
      <DoorArc cx={tx} cy={ty + th / 2} r={12} startAngle={-90} delay={0.2} />
      {/* Oversized pool */}
      <Pool cx={tx + tw / 2 + 45} cy={ty - 45} w={100} h={100} delay={0.5}
        label="Oversized Hot Springs Pool" />
      {/* Connector tent → living */}
      <Connector x={tx + tw} y={ty + 45} w={18} h={24} delay={0.55} />
      {/* Living area */}
      <Room path={rr(lx, ly, lw, lh, 6)} delay={0.5} fill={`${C.living}15`} hover />
      <LivingFurniture x={lx} y={ly} w={lw} h={lh} delay={0.6} />
      {/* Connector living → downstairs */}
      <Connector x={lx + lw} y={ly + 55} w={18} h={24} delay={0.65} />
      {/* Downstairs room */}
      <Room path={rr(dx, dy, dw, dh, 6)} delay={0.7} fill={`${C.paper}70`} hover />
      <Bed x={dx + 8} y={dy + 18} w={50} h={44} label="Queen" delay={0.85} />
      <Bed x={dx + 72} y={dy + 18} w={50} h={44} label="Queen" delay={0.9} />
      <BathRoom x={dx + 20} y={dy + dh - 38} w={45} h={30} delay={0.8} compact />
      <DoorArc cx={dx} cy={dy + dh / 2 - 8} r={10} startAngle={180} delay={0.75} />
      {/* Fire pit */}
      <FirePit cx={lx + lw / 2} cy={ly + lh + 32} delay={1.1} />
      {/* Labels */}
      <Label x={tx + tw / 2} y={ty + th + 18} text="Nayara Tent" sub="Upper Level" delay={0.15} />
      <Label x={lx + lw / 2} y={ly - 20} text="Living & Kitchen" sub="Fully Equipped" delay={0.5} />
      <Label x={dx + dw / 2} y={dy + dh + 18} text="Ground Floor" sub="2 Queen Beds" delay={0.7} />
      {/* Dimensions */}
      <Dim x1={tx} y1={ty + th + 34} x2={dx + dw} y2={ty + th + 34} label="32.5m" delay={0.6} />
      {/* Outdoor terrace right */}
      <Terrace x={dx + dw + 8} y={dy + 10} w={22} h={80} delay={0.8} />
      {/* Vegetation */}
      <Tree cx={tx - 45} cy={ty - 20} r={10} delay={0} />
      <Tree cx={dx + dw + 40} cy={dy - 10} r={8} delay={0.1} />
      <Tree cx={dx + dw + 38} cy={dy + dh + 15} r={9} delay={0.2} />
      <Tree cx={tx - 42} cy={ty + th + 15} r={7} delay={0.15} />
      <Tree cx={lx + lw / 2} cy={ly - 70} r={6} delay={0.3} />
    </g>
  );
}

/* ══════════════════════════════════════════════════════════════════
   RESIDENCE BLUEPRINT
   2 Nayara Tents + 2 connecting rooms + living area hub
   ══════════════════════════════════════════════════════════════════ */
function ResidenceBP() {
  // Left tent
  const lt = { x: 8, y: 55, w: 125, h: 120 };
  // Left suite
  const ls = { x: lt.x + lt.w + 12, y: lt.y + 12, w: 95, h: 95 };
  // Central living
  const cv = { x: ls.x + ls.w + 12, y: lt.y - 25, w: 108, h: 165 };
  // Right suite
  const rs = { x: cv.x + cv.w + 12, y: lt.y + 12, w: 95, h: 95 };
  // Right tent
  const rt = { x: rs.x + rs.w + 12, y: lt.y, w: 125, h: 120 };

  return (
    <g>
      {/* Left tent */}
      <Room path={rr(lt.x, lt.y, lt.w, lt.h, 6)} delay={0} fill={`${C.paper}90`} hover />
      <Bed x={lt.x + 22} y={lt.y + 62} w={80} h={42} label="King" delay={0.2} isKing showRug />
      <Daybed x={lt.x + 6} y={lt.y + 8} w={38} h={30} delay={0.3} />
      <Daybed x={lt.x + 80} y={lt.y + 8} w={38} h={30} delay={0.35} />
      <DoorArc cx={lt.x + lt.w} cy={lt.y + lt.h / 2 - 5} r={9} startAngle={0} delay={0.2} />
      {/* Left pool */}
      <Pool cx={lt.x + lt.w / 2} cy={lt.y - 28} w={65} h={65} delay={0.4} label="Plunge Pool" />
      {/* Connector left tent → left suite */}
      <Connector x={lt.x + lt.w} y={lt.y + 38} w={12} h={18} delay={0.45} />
      {/* Left suite */}
      <Room path={rr(ls.x, ls.y, ls.w, ls.h, 5)} delay={0.5} fill={`${C.paper}70`} hover />
      <Bed x={ls.x + 4} y={ls.y + 10} w={40} h={36} label="Queen" delay={0.6} />
      <Bed x={ls.x + 50} y={ls.y + 10} w={40} h={36} label="Queen" delay={0.65} />
      <BathRoom x={ls.x + 10} y={ls.y + ls.h - 35} w={40} h={28} delay={0.55} compact />
      {/* Connector left suite → living */}
      <Connector x={ls.x + ls.w} y={ls.y + 28} w={12} h={18} delay={0.55} />
      {/* Central living */}
      <Room path={rr(cv.x, cv.y, cv.w, cv.h, 6)} delay={0.6} fill={`${C.living}15`} hover />
      <LivingFurniture x={cv.x} y={cv.y} w={cv.w} h={cv.h} delay={0.7} compact />
      {/* Connector living → right suite */}
      <Connector x={cv.x + cv.w} y={rs.y + 28} w={12} h={18} delay={0.65} />
      {/* Right suite */}
      <Room path={rr(rs.x, rs.y, rs.w, rs.h, 5)} delay={0.7} fill={`${C.paper}70`} hover />
      <Bed x={rs.x + 4} y={rs.y + 10} w={40} h={36} label="Queen" delay={0.8} />
      <Bed x={rs.x + 50} y={rs.y + 10} w={40} h={36} label="Queen" delay={0.85} />
      <BathRoom x={rs.x + 10} y={rs.y + rs.h - 35} w={40} h={28} delay={0.75} compact />
      {/* Connector right suite → right tent */}
      <Connector x={rs.x + rs.w} y={rt.y + 38} w={12} h={18} delay={0.75} />
      {/* Right tent */}
      <Room path={rr(rt.x, rt.y, rt.w, rt.h, 6)} delay={0.8} fill={`${C.paper}90`} hover />
      <Bed x={rt.x + 22} y={rt.y + 62} w={80} h={42} label="King" delay={0.9} isKing showRug />
      <Daybed x={rt.x + 6} y={rt.y + 8} w={38} h={30} delay={0.95} />
      <Daybed x={rt.x + 80} y={rt.y + 8} w={38} h={30} delay={1.0} />
      <DoorArc cx={rt.x} cy={rt.y + rt.h / 2 - 5} r={9} startAngle={90} delay={0.85} />
      {/* Right pool */}
      <Pool cx={rt.x + rt.w / 2} cy={rt.y - 28} w={65} h={65} delay={1.0} label="Plunge Pool" />
      {/* Infinity pool , below living */}
      <Pool cx={cv.x + cv.w / 2} cy={cv.y + cv.h + 35} w={100} h={100} delay={1.2}
        label="Infinity Pool" />
      {/* Fire pit */}
      <FirePit cx={cv.x + cv.w / 2 + 68} cy={cv.y + cv.h + 35} delay={1.4} />
      {/* Labels */}
      <Label x={lt.x + lt.w / 2} y={lt.y + lt.h + 16} text="Tent A" sub="King + Daybeds" delay={0.1} />
      <Label x={ls.x + ls.w / 2} y={ls.y + ls.h + 16} text="Suite A" sub="2 Queens" delay={0.5} />
      <Label x={cv.x + cv.w / 2} y={cv.y - 14} text="Living & Kitchen" delay={0.6} />
      <Label x={rs.x + rs.w / 2} y={rs.y + rs.h + 16} text="Suite B" sub="2 Queens" delay={0.7} />
      <Label x={rt.x + rt.w / 2} y={rt.y + rt.h + 16} text="Tent B" sub="King + Daybeds" delay={0.8} />
      {/* Dimensions */}
      <Dim x1={lt.x} y1={lt.y + lt.h + 32} x2={rt.x + rt.w} y2={lt.y + lt.h + 32}
        label="42.8m" delay={0.8} />
      {/* Vegetation */}
      <Tree cx={lt.x - 18} cy={lt.y - 15} r={9} delay={0} />
      <Tree cx={rt.x + rt.w + 18} cy={rt.y - 10} r={8} delay={0.1} />
      <Tree cx={lt.x - 15} cy={lt.y + lt.h + 5} r={6} delay={0.15} />
      <Tree cx={rt.x + rt.w + 15} cy={rt.y + rt.h + 8} r={7} delay={0.2} />
      <Tree cx={cv.x + cv.w / 2 - 50} cy={cv.y - 50} r={7} delay={0.25} />
      <Tree cx={cv.x + cv.w / 2 + 50} cy={cv.y - 48} r={6} delay={0.3} />
    </g>
  );
}

/* ══════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════════════ */
interface FloorPlanExplorerProps {
  initialTier?: RoomTier;
  availableTiers?: RoomTier[];
  darkMode?: boolean;
}

export default function FloorPlanExplorer({
  initialTier = "tent",
  availableTiers = ["tent", "family", "grand", "residence"],
  darkMode = false,
}: FloorPlanExplorerProps) {
  const [activeTier, setActiveTier] = useState<RoomTier>(initialTier);
  const [animKey, setAnimKey] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(svgRef, { once: true, amount: 0.25 });

  const tiers = TIERS.filter((t) => availableTiers.includes(t.id));
  const activeInfo = TIERS.find((t) => t.id === activeTier)!;

  const handleTierChange = useCallback((tier: RoomTier) => {
    if (tier === activeTier) return;
    setActiveTier(tier);
    setAnimKey((k) => k + 1);
  }, [activeTier]);

  const viewBoxes: Record<RoomTier, string> = {
    tent: "-60 -10 500 480",
    family: "-40 -50 440 500",
    grand: "-50 -120 580 380",
    residence: "-30 -70 650 320",
  };

  const bg = darkMode ? C.bgDark : C.bg;
  const txt = darkMode ? C.bone : C.text;
  const muted = darkMode ? `${C.bone}60` : C.textMuted;

  return (
    <section ref={containerRef}
      className="py-16 md:py-28 px-4 md:px-16 overflow-hidden"
      style={{ backgroundColor: bg }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <p className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase mb-3"
            style={{ ...body, fontWeight: 500, color: darkMode ? `${C.bone}80` : C.accent }}>
            Architectural Layout
          </p>
          <h2 className="text-2xl md:text-4xl lg:text-[2.6rem]"
            style={{ ...display, color: txt }}>
            Explore the Blueprint
          </h2>
        </motion.div>

        {/* Tabs */}
        {tiers.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-14"
          >
            {tiers.map((tier) => {
              const active = activeTier === tier.id;
              return (
                <button key={tier.id}
                  onClick={() => handleTierChange(tier.id)}
                  className="relative px-5 md:px-7 py-2.5 md:py-3 rounded-full transition-all duration-500 text-[10px] md:text-[11px] tracking-[0.15em] uppercase"
                  style={{
                    ...body, fontWeight: 500,
                    color: active ? (darkMode ? C.bgDark : C.bone) : (darkMode ? `${C.bone}90` : C.text),
                    backgroundColor: active ? (darkMode ? C.bone : C.accentDark) : "transparent",
                    border: `1px solid ${active ? "transparent" : (darkMode ? `${C.bone}30` : `${C.text}20`)}`,
                  }}>
                  {tier.label}
                </button>
              );
            })}
          </motion.div>
        )}

        {/* Blueprint + Info */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-start">
          {/* SVG */}
          <motion.div ref={svgRef} className="w-full lg:w-3/5 relative"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
            <div className="relative rounded-lg overflow-hidden border"
              style={{
                backgroundColor: darkMode ? C.paperDark : C.paper,
                borderColor: darkMode ? `${C.bone}15` : `${C.text}10`,
              }}>
              <AnimatePresence mode="wait">
                <motion.div key={`${activeTier}-${animKey}`}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}>
                  <svg viewBox={viewBoxes[activeTier]}
                    className="w-full" style={{ minHeight: "300px", maxHeight: "520px" }}
                    preserveAspectRatio="xMidYMid meet">
                    <ArchGrid w={700} h={400} />
                    <Compass
                      x={activeTier === "residence" ? 590 : activeTier === "grand" ? 500 : 400}
                      y={activeTier === "residence" ? -40 : -70} />
                    {activeTier === "tent" && <TentBP isInView={isInView} />}
                    {activeTier === "family" && <FamilyBP isInView={isInView} />}
                    {activeTier === "grand" && <GrandBP />}
                    {activeTier === "residence" && <ResidenceBP />}
                  </svg>
                </motion.div>
              </AnimatePresence>
              {/* Watermark */}
              <div className="absolute bottom-3 right-4 text-[8px] tracking-[0.4em] uppercase opacity-[0.06]"
                style={{ ...display, color: darkMode ? C.bone : C.text }}>
                Nayara Tented Camp
              </div>
            </div>
          </motion.div>

          {/* Info panel */}
          <motion.div className="w-full lg:w-2/5"
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }}>
            <AnimatePresence mode="wait">
              <motion.div key={activeTier}
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.5 }}>
                <h3 className="text-2xl md:text-3xl mb-3"
                  style={{ ...display, color: txt }}>
                  {activeInfo.label}
                </h3>
                <p className="text-sm leading-relaxed mb-6"
                  style={{ ...body, color: darkMode ? `${C.bone}AA` : C.textSoft }}>
                  {activeInfo.tagline}
                </p>
                {/* Stats */}
                <div className="flex gap-8 mb-8">
                  <div>
                    <p className="text-xl md:text-2xl" style={{ ...display, color: C.accent }}>
                      {activeInfo.sqft}
                    </p>
                    <p className="text-[9px] tracking-[0.15em] uppercase mt-0.5"
                      style={{ ...body, fontWeight: 500, color: muted }}>Sq. Ft.</p>
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl" style={{ ...display, color: C.accent }}>
                      {activeInfo.sqm}
                    </p>
                    <p className="text-[9px] tracking-[0.15em] uppercase mt-0.5"
                      style={{ ...body, fontWeight: 500, color: muted }}>Sq. M.</p>
                  </div>
                </div>
                {/* Guests */}
                <p className="text-[10px] tracking-[0.12em] uppercase mb-6"
                  style={{ ...body, fontWeight: 500, color: darkMode ? `${C.bone}70` : C.accent }}>
                  {activeInfo.guests}
                </p>
                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {activeInfo.features.map((f, i) => (
                    <motion.li key={`${activeTier}-${i}`}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * i }}
                      className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: darkMode ? C.accent : C.accentDark }} />
                      <span className="text-sm leading-relaxed"
                        style={{ ...body, color: darkMode ? `${C.bone}BB` : `${C.text}CC` }}>
                        {f}
                      </span>
                    </motion.li>
                  ))}
                </ul>
                {/* CTA */}
                <button
                  onClick={() => import("sonner").then(({ toast }) => toast("Reservation , Coming Soon"))}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border transition-all duration-300 hover:scale-[1.03]"
                  style={{
                    ...body, fontWeight: 500, fontSize: "10px",
                    letterSpacing: "0.18em", textTransform: "uppercase" as const,
                    color: darkMode ? C.bone : C.accentDark,
                    borderColor: darkMode ? `${C.bone}40` : `${C.accentDark}40`,
                    backgroundColor: "transparent",
                  }}>
                  Check Availability
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap justify-center gap-5 md:gap-7 mt-10 md:mt-14">
          {[
            { color: C.wall, label: "Room Outline" },
            { color: C.pool, label: "Plunge Pool" },
            { color: C.bed, label: "Bed" },
            { color: C.living, label: "Living Space" },
            { color: C.fire, label: "Fire Pit" },
            { color: C.vegetation, label: "Vegetation" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: item.color, opacity: 0.6 }} />
              <span className="text-[9px] tracking-[0.1em] uppercase"
                style={{ ...body, fontWeight: 500, color: muted }}>
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
