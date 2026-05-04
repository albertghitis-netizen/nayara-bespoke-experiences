/**
 * FLOOR PLAN EXPLORER — Gardens & Springs Edition
 *
 * Architectural blueprints for:
 * - Nayara Gardens: Arenal Pool Casita (97m², 1 king + 2 daybeds, families)
 * - Nayara Gardens: Rainforest Pool Villa (139m², 1 king + 1 daybed, couples + 1 child)
 * - Nayara Springs: Springs Villa (139m², 1 king, adults only, hot springs plunge pool)
 *
 * Design philosophy:
 * - Communicate CAPACITY at a glance (who fits, sleeping arrangements)
 * - Architectural precision with luxury editorial feel
 * - Each room tells a story through its spatial relationships
 * - Indoor/outdoor flow is the defining characteristic
 *
 * Improvements over v1:
 * - Thicker double-line walls for stronger architectural presence
 * - Proper indoor/outdoor threshold treatment (sliding glass doors)
 * - Material differentiation (tile patterns in bathroom, wood on deck)
 * - Furniture drawn to better proportions
 * - Clearer capacity indicators (person icons near beds)
 * - Outdoor shower rendered as distinct element
 * - Volcano view direction indicator
 * - Lush vegetation density (rainforest setting)
 * - Water features with subtle animation
 * - Scale bar with metric measurements
 */
import { useState, useRef, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Palette ── */
const C = {
  // Gardens palette — deep forest green
  gardensBg: "#F4F6F0",
  gardensPaper: "#FAFBF7",
  gardensAccent: "#286241",
  gardensAccentLight: "#3A8A5E",
  gardensWall: "#1A3A2A",
  gardensWallMed: "#2A5A3A",
  // Springs palette — sage mineral
  springsBg: "#F5F5F0",
  springsPaper: "#FAFAF5",
  springsAccent: "#5F7367",
  springsAccentLight: "#7A9A8A",
  springsWall: "#2A3A32",
  springsWallMed: "#4A5A4A",
  // Shared
  pool: "#3A7A9A",
  poolLight: "#5AAACA",
  poolFill: "#3A7A9A18",
  poolHotSprings: "#6A9A7A",
  poolHotSpringsFill: "#6A9A7A15",
  bed: "#C8C0A8",
  bedLight: "#DCD4BC",
  bedStroke: "#8A7A5A",
  bone: "#F7F5F0",
  text: "#2A2A22",
  textSoft: "#2A2A22CC",
  textMuted: "#2A2A2260",
  bath: "#E8E4DC",
  bathStroke: "#A09888",
  terrace: "#D4C8A8",
  terraceStroke: "#A09060",
  vegetation: "#4A6A3A",
  vegetationLight: "#6A8A5A20",
  vegetationDense: "#3A5A2A",
  door: "#4A3A2A",
  rug: "#C8B88830",
  fire: "#C4713A",
  fireGlow: "#C4713A30",
  stone: "#B8B0A0",
  water: "#4A8AAA",
  shower: "#7ABACC",
};

const display = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)" } as const;
const mono = { fontFamily: "'DM Sans', sans-serif", fontWeight: 300 } as const;

/* ── Room tier definitions ── */
type RoomTier = "casita" | "rainforest-villa" | "springs-villa";

interface TierInfo {
  id: RoomTier;
  label: string;
  property: string;
  sqft: string;
  sqm: string;
  guests: string;
  guestIcon: string;
  tagline: string;
  features: string[];
  capacity: { adults: number; children: number };
}

const TIERS: TierInfo[] = [
  {
    id: "casita",
    label: "Arenal Pool Casita",
    property: "Nayara Gardens",
    sqft: "1,044",
    sqm: "97",
    guests: "2 adults + 2 children",
    guestIcon: "👨‍👩‍👧‍👦",
    tagline: "A private garden sanctuary with volcano views — perfect for families",
    features: [
      "King-size four-poster bed",
      "2 twin daybeds (ideal for children)",
      "Private plunge pool",
      "Covered terrace with lounge & dining",
      "Indoor & outdoor rain showers",
      "Freestanding soaking tub",
    ],
    capacity: { adults: 2, children: 2 },
  },
  {
    id: "rainforest-villa",
    label: "Rainforest Pool Villa",
    property: "Nayara Gardens",
    sqft: "1,496",
    sqm: "139",
    guests: "2 adults + 1 child",
    guestIcon: "👨‍👩‍👧",
    tagline: "Elevated among the canopy — intimate luxury with room for one more",
    features: [
      "King-size four-poster bed",
      "1 daybed (suitable for a child)",
      "Private plunge pool with volcano view",
      "Expansive wrap-around terrace",
      "Outdoor rain shower in garden",
      "Oversized soaking tub",
      "Living area with seating",
    ],
    capacity: { adults: 2, children: 1 },
  },
  {
    id: "springs-villa",
    label: "Springs Villa",
    property: "Nayara Springs",
    sqft: "1,496",
    sqm: "139",
    guests: "2 adults only",
    guestIcon: "👫",
    tagline: "An adults-only sanctuary fed by volcanic mineral waters",
    features: [
      "Four-poster king bed",
      "Hot springs plunge pool (naturally heated)",
      "Terrace daybed for lounging",
      "Indoor & outdoor rain showers",
      "Oversized soaking tub",
      "Living area with daybed",
      "Panoramic volcano & rainforest views",
    ],
    capacity: { adults: 2, children: 0 },
  },
];

/* ── Animation constants ── */
const EASE = [0.25, 0.8, 0.25, 1] as [number, number, number, number];
const DRAW = 1.2;
const FADE = 0.8;

/* ══════════════════════════════════════════════════════════════════
   SVG BUILDING BLOCKS
   ══════════════════════════════════════════════════════════════════ */

/** Rounded rectangle path */
function rr(x: number, y: number, w: number, h: number, r = 4): string {
  return `M${x + r},${y} L${x + w - r},${y} Q${x + w},${y} ${x + w},${y + r} L${x + w},${y + h - r} Q${x + w},${y + h} ${x + w - r},${y + h} L${x + r},${y + h} Q${x},${y + h} ${x},${y + h - r} L${x},${y + r} Q${x},${y} ${x + r},${y} Z`;
}

/** Animated room outline with thick architectural walls */
function Room({ path, delay = 0, fill = "transparent", stroke, sw = 2.5, hover = false }: {
  path: string; delay?: number; fill?: string; stroke: string; sw?: number; hover?: boolean;
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
        <motion.path d={path} fill="transparent" stroke={stroke}
          strokeWidth={sw + 2} opacity={0}
          className="transition-opacity duration-300"
          style={{ pointerEvents: "all" }}
          whileHover={{ opacity: 0.15 }}
        />
      )}
    </g>
  );
}

/** King bed with headboard, dual pillows, blanket fold, and rug */
function KingBed({ x, y, w, h, delay = 0, showRug = true }: {
  x: number; y: number; w: number; h: number; delay?: number; showRug?: boolean;
}) {
  const pillowH = Math.max(8, h * 0.15);
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: FADE, delay, ease: EASE }}
      style={{ transformOrigin: `${x + w / 2}px ${y + h / 2}px` }}
    >
      {/* Rug */}
      {showRug && (
        <rect x={x - 8} y={y - 5} width={w + 16} height={h + 14} rx={4}
          fill={C.rug} stroke={C.bedStroke} strokeWidth={0.3} strokeDasharray="4 3" opacity={0.5} />
      )}
      {/* Mattress */}
      <rect x={x} y={y} width={w} height={h} rx={3}
        fill={C.bed} stroke={C.bedStroke} strokeWidth={1.2} />
      {/* Headboard — thick dark bar */}
      <rect x={x - 1} y={y - 3} width={w + 2} height={6} rx={2}
        fill={C.bedStroke} opacity={0.7} />
      {/* Dual pillows */}
      <rect x={x + 4} y={y + 6} width={w / 2 - 6} height={pillowH} rx={3}
        fill={C.bone} stroke={C.bedStroke} strokeWidth={0.5} opacity={0.9} />
      <rect x={x + w / 2 + 2} y={y + 6} width={w / 2 - 6} height={pillowH} rx={3}
        fill={C.bone} stroke={C.bedStroke} strokeWidth={0.5} opacity={0.9} />
      {/* Blanket fold */}
      <line x1={x + 5} y1={y + h * 0.6} x2={x + w - 5} y2={y + h * 0.6}
        stroke={C.bedStroke} strokeWidth={0.5} opacity={0.4} />
      {/* Four-poster indicators (small circles at corners) */}
      <circle cx={x + 2} cy={y + 2} r={2} fill={C.bedStroke} opacity={0.5} />
      <circle cx={x + w - 2} cy={y + 2} r={2} fill={C.bedStroke} opacity={0.5} />
      <circle cx={x + 2} cy={y + h - 2} r={2} fill={C.bedStroke} opacity={0.5} />
      <circle cx={x + w - 2} cy={y + h - 2} r={2} fill={C.bedStroke} opacity={0.5} />
      {/* Label */}
      <text x={x + w / 2} y={y + h + 12} textAnchor="middle"
        fill={C.text} fontSize={7} opacity={0.5} style={mono}>
        King Bed
      </text>
    </motion.g>
  );
}

/** Daybed — clearly labeled for child/lounging */
function Daybed({ x, y, w, h, delay = 0, label = "Daybed" }: {
  x: number; y: number; w: number; h: number; delay?: number; label?: string;
}) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: FADE, delay, ease: EASE }}
      style={{ transformOrigin: `${x + w / 2}px ${y + h / 2}px` }}
    >
      <rect x={x} y={y} width={w} height={h} rx={3}
        fill={C.bedLight} stroke={C.bedStroke} strokeWidth={0.8} />
      {/* Back cushion */}
      <rect x={x + 2} y={y + 2} width={w - 4} height={6} rx={2}
        fill={C.bone} stroke={C.bedStroke} strokeWidth={0.3} opacity={0.7} />
      {/* Throw pillow */}
      <rect x={x + w / 2 - 6} y={y + 10} width={12} height={8} rx={2}
        fill={C.bone} stroke={C.bedStroke} strokeWidth={0.3} opacity={0.5} />
      {/* Label */}
      <text x={x + w / 2} y={y + h + 10} textAnchor="middle"
        fill={C.text} fontSize={6} opacity={0.4} style={mono}>
        {label}
      </text>
    </motion.g>
  );
}

/** Person icon — shows capacity */
function PersonIcon({ x, y, isChild = false, delay = 0 }: {
  x: number; y: number; isChild?: boolean; delay?: number;
}) {
  const scale = isChild ? 0.7 : 1;
  return (
    <motion.g
      initial={{ opacity: 0, y: 3 }}
      animate={{ opacity: 0.5, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <circle cx={x} cy={y - 4 * scale} r={2.5 * scale}
        fill="none" stroke={C.text} strokeWidth={0.6} />
      <path d={`M${x - 3 * scale},${y + 5 * scale} Q${x},${y - 1 * scale} ${x + 3 * scale},${y + 5 * scale}`}
        fill="none" stroke={C.text} strokeWidth={0.6} />
    </motion.g>
  );
}

/** Door swing arc */
function DoorArc({ cx, cy, r = 14, startAngle = 0, delay = 0 }: {
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
      initial={{ opacity: 0 }} animate={{ opacity: 0.2 }}
      transition={{ duration: 0.6, delay: delay + 0.8 }}
    >
      <path
        d={`M${cx},${cy} L${x1},${y1} A${r},${r} 0 0,1 ${x2},${y2} Z`}
        fill={C.door} opacity={0.1} stroke={C.door} strokeWidth={0.5}
      />
    </motion.g>
  );
}

/** Sliding glass door — architectural symbol */
function SlidingDoor({ x, y, w, vertical = false, delay = 0 }: {
  x: number; y: number; w: number; vertical?: boolean; delay?: number;
}) {
  return (
    <motion.g
      initial={{ opacity: 0 }} animate={{ opacity: 0.4 }}
      transition={{ duration: 0.5, delay: delay + 0.6 }}
    >
      {vertical ? (
        <>
          <line x1={x} y1={y} x2={x} y2={y + w} stroke={C.text} strokeWidth={1.5} />
          <line x1={x - 1.5} y1={y} x2={x - 1.5} y2={y + w / 2} stroke={C.text} strokeWidth={0.8} />
          <line x1={x + 1.5} y1={y + w / 2} x2={x + 1.5} y2={y + w} stroke={C.text} strokeWidth={0.8} />
        </>
      ) : (
        <>
          <line x1={x} y1={y} x2={x + w} y2={y} stroke={C.text} strokeWidth={1.5} />
          <line x1={x} y1={y - 1.5} x2={x + w / 2} y2={y - 1.5} stroke={C.text} strokeWidth={0.8} />
          <line x1={x + w / 2} y1={y + 1.5} x2={x + w} y2={y + 1.5} stroke={C.text} strokeWidth={0.8} />
        </>
      )}
    </motion.g>
  );
}

/** Bathroom with tub, shower, vanity, toilet */
function BathRoom({ x, y, w, h, delay = 0, hasOutdoorShower = false }: {
  x: number; y: number; w: number; h: number; delay?: number; hasOutdoorShower?: boolean;
}) {
  return (
    <motion.g
      initial={{ opacity: 0 }} animate={{ opacity: 0.5 }}
      transition={{ duration: FADE, delay: delay + 0.5 }}
    >
      {/* Tile pattern — subtle grid */}
      {Array.from({ length: Math.floor(w / 8) }).map((_, i) => (
        <line key={`tv${i}`} x1={x + i * 8 + 4} y1={y + 2} x2={x + i * 8 + 4} y2={y + h - 2}
          stroke={C.bathStroke} strokeWidth={0.15} opacity={0.3} />
      ))}
      {Array.from({ length: Math.floor(h / 8) }).map((_, i) => (
        <line key={`th${i}`} x1={x + 2} y1={y + i * 8 + 4} x2={x + w - 2} y2={y + i * 8 + 4}
          stroke={C.bathStroke} strokeWidth={0.15} opacity={0.3} />
      ))}
      {/* Bathtub — freestanding oval */}
      <ellipse cx={x + w * 0.35} cy={y + h * 0.35} rx={16} ry={10}
        fill={C.bath} stroke={C.bathStroke} strokeWidth={0.8} />
      <ellipse cx={x + w * 0.35} cy={y + h * 0.35} rx={12} ry={7}
        fill="none" stroke={C.bathStroke} strokeWidth={0.3} />
      {/* Dual vanity */}
      <rect x={x + w * 0.65} y={y + 5} width={w * 0.28} height={12} rx={2}
        fill={C.bath} stroke={C.bathStroke} strokeWidth={0.5} />
      <circle cx={x + w * 0.72} cy={y + 11} r={3}
        fill="none" stroke={C.bathStroke} strokeWidth={0.4} />
      <circle cx={x + w * 0.86} cy={y + 11} r={3}
        fill="none" stroke={C.bathStroke} strokeWidth={0.4} />
      {/* Shower enclosure */}
      <rect x={x + w * 0.65} y={y + h * 0.55} width={18} height={18} rx={2}
        fill="none" stroke={C.bathStroke} strokeWidth={0.5} />
      <circle cx={x + w * 0.65 + 9} cy={y + h * 0.55 + 9} r={3}
        fill="none" stroke={C.shower} strokeWidth={0.4} />
      {/* Toilet */}
      <ellipse cx={x + 12} cy={y + h * 0.75} rx={5} ry={6}
        fill="none" stroke={C.bathStroke} strokeWidth={0.4} />
      <rect x={x + 7} y={y + h * 0.75 - 8} width={10} height={5} rx={2}
        fill="none" stroke={C.bathStroke} strokeWidth={0.3} />
      {/* Label */}
      <text x={x + w / 2} y={y + h - 4} textAnchor="middle"
        fill={C.text} fontSize={6} opacity={0.35} style={mono}>
        Bathroom
      </text>
      {/* Outdoor shower indicator */}
      {hasOutdoorShower && (
        <g>
          <circle cx={x + w + 20} cy={y + h * 0.4} r={8}
            fill={`${C.shower}15`} stroke={C.shower} strokeWidth={0.5} strokeDasharray="3 2" />
          <circle cx={x + w + 20} cy={y + h * 0.4} r={3}
            fill="none" stroke={C.shower} strokeWidth={0.5} />
          <text x={x + w + 20} y={y + h * 0.4 + 14} textAnchor="middle"
            fill={C.text} fontSize={5} opacity={0.3} style={mono}>
            Outdoor
          </text>
        </g>
      )}
    </motion.g>
  );
}

/** Terrace with wood-plank pattern */
function Terrace({ x, y, w, h, delay = 0, label = "Terrace" }: {
  x: number; y: number; w: number; h: number; delay?: number; label?: string;
}) {
  const planks = [];
  const spacing = 4;
  for (let py = y + 3; py < y + h - 2; py += spacing) {
    planks.push(
      <line key={py} x1={x + 2} y1={py} x2={x + w - 2} y2={py}
        stroke={C.terraceStroke} strokeWidth={0.25} opacity={0.25} />
    );
  }
  return (
    <motion.g
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      transition={{ duration: FADE, delay: delay + 0.4 }}
    >
      <rect x={x} y={y} width={w} height={h} rx={3}
        fill={`${C.terrace}25`} stroke={C.terraceStroke} strokeWidth={0.6}
        strokeDasharray="8 4" />
      {planks}
      <text x={x + w / 2} y={y + h / 2 + 2} textAnchor="middle"
        fill={C.text} fontSize={5.5} opacity={0.3} style={mono}>
        {label}
      </text>
    </motion.g>
  );
}

/** Pool with water shimmer */
function Pool({ cx, cy, w, h, delay = 0, label = "Plunge Pool", isHotSprings = false }: {
  cx: number; cy: number; w: number; h: number; delay?: number; label?: string; isHotSprings?: boolean;
}) {
  const fillColor = isHotSprings ? C.poolHotSpringsFill : C.poolFill;
  const strokeColor = isHotSprings ? C.poolHotSprings : C.pool;
  const lightColor = isHotSprings ? C.springsAccentLight : C.poolLight;
  const x = cx - w / 2, y = cy - h / 2;
  return (
    <g>
      {/* Pool shape */}
      <motion.rect x={x} y={y} width={w} height={h} rx={4}
        fill={fillColor} stroke={strokeColor} strokeWidth={1.5}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: DRAW, delay, ease: EASE }}
      />
      {/* Inner edge */}
      <motion.rect x={x + 3} y={y + 3} width={w - 6} height={h - 6} rx={3}
        fill="none" stroke={strokeColor} strokeWidth={0.3} opacity={0.3}
        initial={{ opacity: 0 }} animate={{ opacity: 0.3 }}
        transition={{ duration: 0.5, delay: delay + 0.5 }}
      />
      {/* Water shimmer */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.4, 0.15, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, delay: delay + 1 }}
      >
        <line x1={cx - w * 0.2} y1={cy - 4} x2={cx - w * 0.02} y2={cy - 4}
          stroke={lightColor} strokeWidth={0.8} strokeLinecap="round" />
        <line x1={cx + w * 0.05} y1={cy + 3} x2={cx + w * 0.22} y2={cy + 3}
          stroke={lightColor} strokeWidth={0.6} strokeLinecap="round" />
        <line x1={cx - w * 0.12} y1={cy + 8} x2={cx + w * 0.1} y2={cy + 8}
          stroke={lightColor} strokeWidth={0.4} strokeLinecap="round" />
      </motion.g>
      {/* Hot springs steam effect */}
      {isHotSprings && (
        <motion.g
          animate={{ opacity: [0.1, 0.3, 0.1], y: [0, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <path d={`M${cx - 5},${y - 4} Q${cx - 3},${y - 10} ${cx - 5},${y - 14}`}
            fill="none" stroke={C.poolHotSprings} strokeWidth={0.5} opacity={0.3} />
          <path d={`M${cx + 5},${y - 3} Q${cx + 7},${y - 9} ${cx + 5},${y - 13}`}
            fill="none" stroke={C.poolHotSprings} strokeWidth={0.4} opacity={0.25} />
        </motion.g>
      )}
      {/* Label */}
      <motion.text
        x={cx} y={cy + h / 2 + 14} textAnchor="middle"
        fill={C.text} fontSize={7} fontWeight={500}
        style={{ fontFamily: "var(--font-display)" }}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 0.55, y: 0 }}
        transition={{ duration: FADE, delay: delay + 0.5 }}
      >
        {label}
      </motion.text>
    </g>
  );
}

/** Vegetation — tree/plant circles */
function Tree({ cx, cy, r = 9, delay = 0, dense = false }: {
  cx: number; cy: number; r?: number; delay?: number; dense?: boolean;
}) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: dense ? 0.5 : 0.35, scale: 1 }}
      transition={{ duration: 0.7, delay: delay + 1.0 }}
      style={{ transformOrigin: `${cx}px ${cy}px` }}
    >
      <circle cx={cx} cy={cy} r={r} fill={C.vegetationLight}
        stroke={dense ? C.vegetationDense : C.vegetation} strokeWidth={0.5} />
      {/* Foliage detail */}
      <circle cx={cx - r * 0.3} cy={cy - r * 0.2} r={r * 0.4}
        fill="none" stroke={C.vegetation} strokeWidth={0.3} opacity={0.5} />
      <circle cx={cx + r * 0.2} cy={cy + r * 0.25} r={r * 0.35}
        fill="none" stroke={C.vegetation} strokeWidth={0.25} opacity={0.4} />
      {dense && (
        <circle cx={cx + r * 0.1} cy={cy - r * 0.3} r={r * 0.25}
          fill="none" stroke={C.vegetationDense} strokeWidth={0.2} opacity={0.3} />
      )}
    </motion.g>
  );
}

/** Lounge furniture — chairs, table */
function LoungeSet({ x, y, delay = 0 }: { x: number; y: number; delay?: number }) {
  return (
    <motion.g initial={{ opacity: 0 }} animate={{ opacity: 0.4 }}
      transition={{ duration: 0.6, delay: delay + 0.7 }}>
      {/* Two lounge chairs */}
      <rect x={x} y={y} width={22} height={10} rx={2}
        fill={C.terrace} stroke={C.terraceStroke} strokeWidth={0.4} />
      <rect x={x} y={y + 16} width={22} height={10} rx={2}
        fill={C.terrace} stroke={C.terraceStroke} strokeWidth={0.4} />
      {/* Small side table */}
      <circle cx={x + 28} cy={y + 13} r={5}
        fill="none" stroke={C.terraceStroke} strokeWidth={0.4} />
    </motion.g>
  );
}

/** Dining set for terrace */
function DiningSet({ x, y, delay = 0 }: { x: number; y: number; delay?: number }) {
  return (
    <motion.g initial={{ opacity: 0 }} animate={{ opacity: 0.4 }}
      transition={{ duration: 0.6, delay: delay + 0.7 }}>
      {/* Table */}
      <rect x={x} y={y} width={24} height={18} rx={3}
        fill="none" stroke={C.terraceStroke} strokeWidth={0.5} />
      {/* Chairs */}
      <circle cx={x - 5} cy={y + 9} r={4} fill="none" stroke={C.terraceStroke} strokeWidth={0.3} />
      <circle cx={x + 29} cy={y + 9} r={4} fill="none" stroke={C.terraceStroke} strokeWidth={0.3} />
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
    <motion.g initial={{ opacity: 0 }} animate={{ opacity: 0.2 }}
      transition={{ duration: FADE, delay: delay + 0.8 }}>
      <motion.line x1={x1} y1={y1} x2={x2} y2={y2}
        stroke={C.text} strokeWidth={0.4} strokeDasharray="2 2"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: DRAW, delay, ease: EASE }} />
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
      <text x={isH ? mx : x1 - 6} y={isH ? my - 5 : my}
        textAnchor={isH ? "middle" : "end"}
        fill={C.text} fontSize={6.5} style={mono}>{label}</text>
    </motion.g>
  );
}

/** Scale bar */
function ScaleBar({ x, y, delay = 0 }: { x: number; y: number; delay?: number }) {
  return (
    <motion.g initial={{ opacity: 0 }} animate={{ opacity: 0.2 }}
      transition={{ duration: 0.6, delay: delay + 1.2 }}>
      <line x1={x} y1={y} x2={x + 50} y2={y} stroke={C.text} strokeWidth={0.8} />
      <line x1={x} y1={y - 3} x2={x} y2={y + 3} stroke={C.text} strokeWidth={0.5} />
      <line x1={x + 50} y1={y - 3} x2={x + 50} y2={y + 3} stroke={C.text} strokeWidth={0.5} />
      <line x1={x + 25} y1={y - 2} x2={x + 25} y2={y + 2} stroke={C.text} strokeWidth={0.3} />
      <text x={x + 25} y={y - 6} textAnchor="middle"
        fill={C.text} fontSize={5.5} style={mono}>5m</text>
    </motion.g>
  );
}

/** Compass rose */
function Compass({ x, y }: { x: number; y: number }) {
  return (
    <motion.g transform={`translate(${x},${y})`}
      initial={{ opacity: 0, rotate: -20 }}
      animate={{ opacity: 0.15, rotate: 0 }}
      transition={{ duration: 1.5, delay: 0.5, ease: EASE }}
      style={{ transformOrigin: `${x}px ${y}px` }}>
      <circle cx={0} cy={0} r={16} fill="none" stroke={C.text} strokeWidth={0.4} />
      <circle cx={0} cy={0} r={10} fill="none" stroke={C.text} strokeWidth={0.15} />
      <line x1={0} y1={-14} x2={0} y2={14} stroke={C.text} strokeWidth={0.3} />
      <line x1={-14} y1={0} x2={14} y2={0} stroke={C.text} strokeWidth={0.3} />
      <polygon points="0,-16 -2,-10 2,-10" fill={C.text} />
      <text x={0} y={-20} textAnchor="middle" fill={C.text} fontSize={6}
        style={{ ...display, letterSpacing: "0.15em" }}>N</text>
    </motion.g>
  );
}

/** Architectural grid background */
function ArchGrid({ w, h }: { w: number; h: number }) {
  const lines = useMemo(() => {
    const result = [];
    const sp = 20;
    for (let x = 0; x <= w; x += sp) {
      result.push(<line key={`v${x}`} x1={x} y1={0} x2={x} y2={h}
        stroke={C.text} strokeWidth={x % 100 === 0 ? 0.2 : 0.06} opacity={0.08} />);
    }
    for (let y = 0; y <= h; y += sp) {
      result.push(<line key={`h${y}`} x1={0} y1={y} x2={w} y2={y}
        stroke={C.text} strokeWidth={y % 100 === 0 ? 0.2 : 0.06} opacity={0.08} />);
    }
    return result;
  }, [w, h]);
  return <g>{lines}</g>;
}

/** View direction arrow */
function ViewArrow({ x, y, angle = 0, label = "Volcano View", delay = 0 }: {
  x: number; y: number; angle?: number; label?: string; delay?: number;
}) {
  return (
    <motion.g
      initial={{ opacity: 0 }} animate={{ opacity: 0.25 }}
      transition={{ duration: 0.8, delay: delay + 1.0 }}
      transform={`translate(${x},${y}) rotate(${angle})`}
    >
      <line x1={0} y1={0} x2={35} y2={0} stroke={C.text} strokeWidth={0.5} strokeDasharray="3 2" />
      <polygon points="35,0 30,-2.5 30,2.5" fill={C.text} />
      <text x={18} y={-6} textAnchor="middle" fill={C.text} fontSize={5} style={mono}>
        {label}
      </text>
    </motion.g>
  );
}

/* ══════════════════════════════════════════════════════════════════
   ARENAL POOL CASITA BLUEPRINT
   97m² — 1 King + 2 Daybeds — Family-friendly
   ══════════════════════════════════════════════════════════════════ */
function CasitaBP() {
  // Main room
  const rx = 80, ry = 60, rw = 180, rh = 160;
  // Bathroom
  const bx = rx + rw - 70, by = ry + rh - 55, bw = 60, bh = 48;
  // Terrace wraps around right side
  const tx = rx + rw + 4, ty = ry + 20, tw = 60, th = 130;

  return (
    <g>
      {/* Main room outline — thick walls */}
      <Room path={rr(rx, ry, rw, rh, 5)} delay={0}
        fill={`${C.gardensPaper}90`} stroke={C.gardensWall} sw={2.8} hover />

      {/* Sliding glass doors to terrace */}
      <SlidingDoor x={rx + rw} y={ry + 40} w={50} vertical delay={0.3} />

      {/* King bed — center of room */}
      <KingBed x={rx + 50} y={ry + 75} w={80} h={60} delay={0.3} />

      {/* Two daybeds — near window/terrace side */}
      <Daybed x={rx + 12} y={ry + 12} w={55} h={35} delay={0.5} label="Daybed (child)" />
      <Daybed x={rx + 12} y={ry + 110} w={55} h={35} delay={0.55} label="Daybed (child)" />

      {/* Person icons showing capacity */}
      <PersonIcon x={rx + 90} y={ry + 68} delay={0.8} />
      <PersonIcon x={rx + 100} y={ry + 68} delay={0.85} />
      <PersonIcon x={rx + 40} y={ry + 8} isChild delay={0.9} />
      <PersonIcon x={rx + 40} y={ry + 106} isChild delay={0.95} />

      {/* Bathroom */}
      <Room path={rr(bx, by, bw, bh, 3)} delay={0.3}
        fill={`${C.bath}40`} stroke={C.gardensWallMed} sw={1.5} />
      <BathRoom x={bx + 2} y={by + 2} w={bw - 4} h={bh - 4} delay={0.4} hasOutdoorShower />
      <DoorArc cx={bx} cy={by + bh / 2} r={12} startAngle={180} delay={0.4} />

      {/* Terrace — wrap-around */}
      <Terrace x={tx} y={ty} w={tw} h={th} delay={0.4} label="Covered Terrace" />
      <LoungeSet x={tx + 10} y={ty + 15} delay={0.5} />
      <DiningSet x={tx + 12} y={ty + 80} delay={0.55} />

      {/* Plunge pool — in front of terrace */}
      <Pool cx={tx + tw + 35} cy={ty + th / 2} w={45} h={45} delay={0.6}
        label="Plunge Pool" />

      {/* Entry door */}
      <DoorArc cx={rx} cy={ry + rh / 2} r={14} startAngle={-90} delay={0.3} />

      {/* Dimensions */}
      <Dim x1={rx} y1={ry + rh + 25} x2={rx + rw} y2={ry + rh + 25} label="13.5m" delay={0.5} />
      <Dim x1={rx - 20} y1={ry} x2={rx - 20} y2={ry + rh} label="11.8m" delay={0.55} />

      {/* Scale bar */}
      <ScaleBar x={rx} y={ry + rh + 45} delay={0.6} />

      {/* View direction */}
      <ViewArrow x={tx + tw + 10} y={ty - 15} angle={-30} label="Volcano View" delay={0.7} />

      {/* Dense rainforest vegetation */}
      <Tree cx={rx - 30} cy={ry - 15} r={12} delay={0} dense />
      <Tree cx={rx - 20} cy={ry + 50} r={8} delay={0.05} />
      <Tree cx={rx - 35} cy={ry + 100} r={10} delay={0.1} dense />
      <Tree cx={rx - 25} cy={ry + rh + 5} r={9} delay={0.15} />
      <Tree cx={tx + tw + 65} cy={ty - 10} r={11} delay={0.2} dense />
      <Tree cx={tx + tw + 70} cy={ty + 50} r={8} delay={0.25} />
      <Tree cx={tx + tw + 60} cy={ty + th + 10} r={10} delay={0.3} dense />
      <Tree cx={rx + rw / 2} cy={ry - 30} r={7} delay={0.12} />
      <Tree cx={rx + rw / 2 + 40} cy={ry - 25} r={9} delay={0.18} dense />
    </g>
  );
}

/* ══════════════════════════════════════════════════════════════════
   RAINFOREST POOL VILLA BLUEPRINT
   139m² — 1 King + 1 Daybed — Couples + 1 child
   ══════════════════════════════════════════════════════════════════ */
function RainforestVillaBP() {
  // Main bedroom
  const rx = 60, ry = 70, rw = 160, rh = 140;
  // Living area — connected
  const lx = rx + rw + 8, ly = ry + 10, lw = 90, lh = 100;
  // Bathroom — large
  const bx = rx + 10, by = ry + rh - 60, bw = 70, bh = 52;
  // Wrap-around terrace
  const tx = lx + lw + 4, ty = ry - 10, tw = 55, th = 160;

  return (
    <g>
      {/* Main bedroom */}
      <Room path={rr(rx, ry, rw, rh, 5)} delay={0}
        fill={`${C.gardensPaper}90`} stroke={C.gardensWall} sw={2.8} hover />

      {/* Living area */}
      <Room path={rr(lx, ly, lw, lh, 4)} delay={0.2}
        fill={`${C.gardensPaper}70`} stroke={C.gardensWall} sw={2} hover />

      {/* Sliding doors bedroom → terrace */}
      <SlidingDoor x={rx + rw} y={ry + 20} w={40} vertical delay={0.3} />
      {/* Sliding doors living → terrace */}
      <SlidingDoor x={lx + lw} y={ly + 30} w={40} vertical delay={0.35} />

      {/* King bed */}
      <KingBed x={rx + 40} y={ry + 15} w={80} h={60} delay={0.3} />

      {/* Single daybed in living area */}
      <Daybed x={lx + 15} y={ly + 15} w={60} h={35} delay={0.5} label="Daybed (child)" />

      {/* Living seating */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 0.35 }}
        transition={{ duration: 0.6, delay: 0.7 }}>
        <rect x={lx + 15} y={ly + 60} width={60} height={25} rx={3}
          fill={C.terrace} stroke={C.terraceStroke} strokeWidth={0.4} />
        <text x={lx + lw / 2} y={ly + lh - 8} textAnchor="middle"
          fill={C.text} fontSize={5} opacity={0.3} style={mono}>Living</text>
      </motion.g>

      {/* Person icons */}
      <PersonIcon x={rx + 75} y={ry + 10} delay={0.8} />
      <PersonIcon x={rx + 85} y={ry + 10} delay={0.85} />
      <PersonIcon x={lx + 45} y={ly + 10} isChild delay={0.9} />

      {/* Bathroom */}
      <Room path={rr(bx, by, bw, bh, 3)} delay={0.3}
        fill={`${C.bath}40`} stroke={C.gardensWallMed} sw={1.5} />
      <BathRoom x={bx + 2} y={by + 2} w={bw - 4} h={bh - 4} delay={0.4} hasOutdoorShower />
      <DoorArc cx={bx + bw} cy={by + bh / 2} r={12} startAngle={0} delay={0.4} />

      {/* Wrap-around terrace */}
      <Terrace x={tx} y={ty} w={tw} h={th} delay={0.4} label="Wrap Terrace" />
      <LoungeSet x={tx + 8} y={ty + 20} delay={0.5} />
      <DiningSet x={tx + 10} y={ty + 100} delay={0.55} />

      {/* Plunge pool */}
      <Pool cx={tx + tw / 2} cy={ty - 35} w={50} h={50} delay={0.6}
        label="Plunge Pool" />

      {/* Entry */}
      <DoorArc cx={rx} cy={ry + rh / 2} r={14} startAngle={-90} delay={0.3} />

      {/* Dimensions */}
      <Dim x1={rx} y1={ry + rh + 25} x2={lx + lw} y2={ry + rh + 25} label="18.2m" delay={0.5} />
      <Dim x1={rx - 20} y1={ry} x2={rx - 20} y2={ry + rh} label="12.8m" delay={0.55} />

      {/* Scale bar */}
      <ScaleBar x={rx} y={ry + rh + 45} delay={0.6} />

      {/* View direction */}
      <ViewArrow x={tx + tw / 2} y={ty - 55} angle={-45} label="Volcano View" delay={0.7} />

      {/* Dense vegetation */}
      <Tree cx={rx - 30} cy={ry - 10} r={12} delay={0} dense />
      <Tree cx={rx - 25} cy={ry + 60} r={9} delay={0.05} dense />
      <Tree cx={rx - 35} cy={ry + rh + 10} r={11} delay={0.1} />
      <Tree cx={tx + tw + 20} cy={ty - 20} r={10} delay={0.15} dense />
      <Tree cx={tx + tw + 25} cy={ty + 50} r={8} delay={0.2} />
      <Tree cx={tx + tw + 18} cy={ty + th + 10} r={11} delay={0.25} dense />
      <Tree cx={rx + rw / 2} cy={ry - 25} r={8} delay={0.12} />
      <Tree cx={lx + lw / 2} cy={ly - 20} r={7} delay={0.18} />
    </g>
  );
}

/* ══════════════════════════════════════════════════════════════════
   SPRINGS VILLA BLUEPRINT
   139m² — 1 King — Adults Only — Hot Springs Pool
   ══════════════════════════════════════════════════════════════════ */
function SpringsVillaBP() {
  // Main room — generous open plan
  const rx = 70, ry = 55, rw = 190, rh = 170;
  // Bathroom — luxurious
  const bx = rx + rw - 80, by = ry + rh - 60, bw = 72, bh = 52;
  // Terrace — expansive
  const tx = rx + rw + 4, ty = ry + 10, tw = 70, th = 150;

  return (
    <g>
      {/* Main room */}
      <Room path={rr(rx, ry, rw, rh, 5)} delay={0}
        fill={`${C.springsPaper}90`} stroke={C.springsWall} sw={2.8} hover />

      {/* Sliding glass doors — full width to terrace */}
      <SlidingDoor x={rx + rw} y={ry + 30} w={60} vertical delay={0.3} />
      <SlidingDoor x={rx + rw} y={ry + 100} w={40} vertical delay={0.35} />

      {/* King bed — prominent center placement */}
      <KingBed x={rx + 55} y={ry + 20} w={85} h={65} delay={0.3} />

      {/* Living daybed — NOT for sleeping, for lounging */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}>
        <rect x={rx + 15} y={ry + 105} width={70} height={35} rx={3}
          fill={C.bedLight} stroke={C.bedStroke} strokeWidth={0.6} opacity={0.7} />
        <rect x={rx + 18} y={ry + 108} width={64} height={6} rx={2}
          fill={C.bone} stroke={C.bedStroke} strokeWidth={0.3} opacity={0.5} />
        <text x={rx + 50} y={ry + 148} textAnchor="middle"
          fill={C.text} fontSize={5.5} opacity={0.35} style={mono}>
          Lounge Daybed
        </text>
      </motion.g>

      {/* Person icons — adults only */}
      <PersonIcon x={rx + 92} y={ry + 13} delay={0.8} />
      <PersonIcon x={rx + 102} y={ry + 13} delay={0.85} />

      {/* Adults-only badge */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 0.3 }}
        transition={{ duration: 0.6, delay: 1.2 }}>
        <rect x={rx + 130} y={ry + rh - 20} width={48} height={14} rx={7}
          fill="none" stroke={C.springsAccent} strokeWidth={0.6} />
        <text x={rx + 154} y={ry + rh - 10} textAnchor="middle"
          fill={C.springsAccent} fontSize={5.5} style={{ ...body, fontWeight: 500 }}>
          Adults Only
        </text>
      </motion.g>

      {/* Bathroom — oversized luxury */}
      <Room path={rr(bx, by, bw, bh, 3)} delay={0.3}
        fill={`${C.bath}40`} stroke={C.springsWallMed} sw={1.5} />
      <BathRoom x={bx + 2} y={by + 2} w={bw - 4} h={bh - 4} delay={0.4} hasOutdoorShower />
      <DoorArc cx={bx} cy={by + bh / 2} r={12} startAngle={180} delay={0.4} />

      {/* Terrace — expansive with hot springs focus */}
      <Terrace x={tx} y={ty} w={tw} h={th} delay={0.4} label="Private Terrace" />

      {/* Terrace daybed */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 0.4 }}
        transition={{ duration: 0.6, delay: 0.6 }}>
        <rect x={tx + 10} y={ty + 90} width={45} height={22} rx={3}
          fill={C.terrace} stroke={C.terraceStroke} strokeWidth={0.4} />
        <text x={tx + 32} y={ty + 118} textAnchor="middle"
          fill={C.text} fontSize={5} opacity={0.3} style={mono}>Terrace Daybed</text>
      </motion.g>

      {/* Dining on terrace */}
      <DiningSet x={tx + 15} y={ty + 20} delay={0.55} />

      {/* Hot Springs Plunge Pool — THE signature feature */}
      <Pool cx={tx + tw + 40} cy={ty + th / 2 - 10} w={55} h={55} delay={0.6}
        label="Hot Springs Pool" isHotSprings />

      {/* Entry */}
      <DoorArc cx={rx} cy={ry + rh / 2} r={14} startAngle={-90} delay={0.3} />

      {/* Dimensions */}
      <Dim x1={rx} y1={ry + rh + 25} x2={rx + rw} y2={ry + rh + 25} label="15.8m" delay={0.5} />
      <Dim x1={rx - 20} y1={ry} x2={rx - 20} y2={ry + rh} label="13.2m" delay={0.55} />

      {/* Scale bar */}
      <ScaleBar x={rx} y={ry + rh + 45} delay={0.6} />

      {/* View direction */}
      <ViewArrow x={tx + tw + 15} y={ty - 10} angle={-35} label="Volcano View" delay={0.7} />

      {/* Lush vegetation — Springs is surrounded by dense forest */}
      <Tree cx={rx - 30} cy={ry - 10} r={13} delay={0} dense />
      <Tree cx={rx - 35} cy={ry + 50} r={9} delay={0.05} dense />
      <Tree cx={rx - 28} cy={ry + 110} r={11} delay={0.1} />
      <Tree cx={rx - 32} cy={ry + rh + 10} r={10} delay={0.12} dense />
      <Tree cx={tx + tw + 70} cy={ty - 15} r={11} delay={0.15} dense />
      <Tree cx={tx + tw + 75} cy={ty + 40} r={9} delay={0.2} />
      <Tree cx={tx + tw + 68} cy={ty + 90} r={12} delay={0.22} dense />
      <Tree cx={tx + tw + 72} cy={ty + th + 10} r={10} delay={0.25} dense />
      <Tree cx={rx + rw / 2 - 20} cy={ry - 28} r={8} delay={0.08} />
      <Tree cx={rx + rw / 2 + 30} cy={ry - 25} r={10} delay={0.14} dense />
    </g>
  );
}

/* ══════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════════════ */
interface FloorPlanGardensSpringsProps {
  initialTier?: RoomTier;
  availableTiers?: RoomTier[];
}

export default function FloorPlanGardensSprings({
  initialTier = "casita",
  availableTiers = ["casita", "rainforest-villa", "springs-villa"],
}: FloorPlanGardensSpringsProps) {
  const [activeTier, setActiveTier] = useState<RoomTier>(initialTier);
  const [animKey, setAnimKey] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const tiers = TIERS.filter((t) => availableTiers.includes(t.id));
  const activeInfo = TIERS.find((t) => t.id === activeTier)!;

  const handleTierChange = useCallback((tier: RoomTier) => {
    if (tier === activeTier) return;
    setActiveTier(tier);
    setAnimKey((k) => k + 1);
  }, [activeTier]);

  const viewBoxes: Record<RoomTier, string> = {
    "casita": "-50 -50 440 320",
    "rainforest-villa": "-50 -80 470 340",
    "springs-villa": "-50 -50 470 330",
  };

  // Determine accent color based on property
  const isGardens = activeTier !== "springs-villa";
  const accent = isGardens ? C.gardensAccent : C.springsAccent;
  const bg = isGardens ? C.gardensBg : C.springsBg;
  const paper = isGardens ? C.gardensPaper : C.springsPaper;

  return (
    <section ref={containerRef}
      className="py-16 md:py-28 px-4 md:px-16 overflow-hidden transition-colors duration-700"
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
            style={{ ...body, fontWeight: 500, color: accent }}>
            {activeInfo.property} · Architectural Layout
          </p>
          <h2 className="text-2xl md:text-4xl lg:text-[2.6rem]"
            style={{ ...display, color: C.text }}>
            Explore the Blueprint
          </h2>
          <p className="text-sm mt-3 max-w-md mx-auto"
            style={{ ...body, color: C.textSoft }}>
            {activeInfo.tagline}
          </p>
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
                    color: active ? C.bone : C.text,
                    backgroundColor: active ? accent : "transparent",
                    border: `1px solid ${active ? "transparent" : `${C.text}20`}`,
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
          <motion.div className="w-full lg:w-3/5 relative"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
            <div className="relative rounded-lg overflow-hidden border"
              style={{
                backgroundColor: paper,
                borderColor: `${C.text}08`,
              }}>
              <AnimatePresence mode="wait">
                <motion.div key={`${activeTier}-${animKey}`}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}>
                  <svg viewBox={viewBoxes[activeTier]}
                    className="w-full" style={{ minHeight: "320px", maxHeight: "540px" }}
                    preserveAspectRatio="xMidYMid meet">
                    <ArchGrid w={500} h={400} />
                    <Compass x={380} y={-20} />
                    {activeTier === "casita" && <CasitaBP />}
                    {activeTier === "rainforest-villa" && <RainforestVillaBP />}
                    {activeTier === "springs-villa" && <SpringsVillaBP />}
                  </svg>
                </motion.div>
              </AnimatePresence>
              {/* Watermark */}
              <div className="absolute bottom-3 right-4 text-[8px] tracking-[0.4em] uppercase opacity-[0.05]"
                style={{ ...display, color: C.text }}>
                {activeInfo.property}
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
                {/* Property badge */}
                <p className="text-[9px] tracking-[0.2em] uppercase mb-2"
                  style={{ ...body, fontWeight: 600, color: accent }}>
                  {activeInfo.property}
                </p>
                <h3 className="text-2xl md:text-3xl mb-2"
                  style={{ ...display, color: C.text }}>
                  {activeInfo.label}
                </h3>
                <p className="text-sm leading-relaxed mb-6"
                  style={{ ...body, color: C.textSoft }}>
                  {activeInfo.tagline}
                </p>

                {/* Stats row */}
                <div className="flex gap-8 mb-6">
                  <div>
                    <p className="text-xl md:text-2xl" style={{ ...display, color: accent }}>
                      {activeInfo.sqm}
                    </p>
                    <p className="text-[9px] tracking-[0.15em] uppercase mt-0.5"
                      style={{ ...body, fontWeight: 500, color: C.textMuted }}>m²</p>
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl" style={{ ...display, color: accent }}>
                      {activeInfo.sqft}
                    </p>
                    <p className="text-[9px] tracking-[0.15em] uppercase mt-0.5"
                      style={{ ...body, fontWeight: 500, color: C.textMuted }}>Sq. Ft.</p>
                  </div>
                </div>

                {/* Capacity — prominent */}
                <div className="flex items-center gap-3 mb-6 px-4 py-3 rounded-lg"
                  style={{ backgroundColor: `${accent}08`, border: `1px solid ${accent}20` }}>
                  <span className="text-lg">{activeInfo.guestIcon}</span>
                  <span className="text-[11px] tracking-[0.1em] uppercase"
                    style={{ ...body, fontWeight: 600, color: accent }}>
                    {activeInfo.guests}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {activeInfo.features.map((f, i) => (
                    <motion.li key={`${activeTier}-${i}`}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * i }}
                      className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: accent }} />
                      <span className="text-sm leading-relaxed"
                        style={{ ...body, color: `${C.text}CC` }}>
                        {f}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => import("sonner").then(({ toast }) => toast("Reservation — Coming Soon"))}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full border transition-all duration-300 hover:scale-[1.03]"
                  style={{
                    ...body, fontWeight: 500, fontSize: "10px",
                    letterSpacing: "0.18em", textTransform: "uppercase" as const,
                    color: accent,
                    borderColor: `${accent}40`,
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
            { color: isGardens ? C.gardensWall : C.springsWall, label: "Room Outline" },
            { color: isGardens ? C.pool : C.poolHotSprings, label: isGardens ? "Plunge Pool" : "Hot Springs Pool" },
            { color: C.bed, label: "Bed / Daybed" },
            { color: C.terrace, label: "Terrace / Deck" },
            { color: C.vegetation, label: "Rainforest" },
            { color: C.bath, label: "Bathroom" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: item.color, opacity: 0.6 }} />
              <span className="text-[9px] tracking-[0.1em] uppercase"
                style={{ ...body, fontWeight: 500, color: C.textMuted }}>
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
