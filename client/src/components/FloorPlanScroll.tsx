/**
 * FLOOR PLAN SCROLL — Prototype C: "Scroll to Build"
 *
 * Creative concept: The blueprint constructs itself as you scroll.
 * A sticky SVG canvas stays pinned while narrative text panels scroll
 * past on the right. Each panel triggers the next construction phase.
 *
 * Think: Apple-style scroll-driven storytelling meets architectural blueprint.
 *
 * Key features:
 * - Sticky SVG canvas on the left
 * - Scrolling narrative panels on the right
 * - Smooth morphing between tiers
 * - Room hover tooltips with details
 * - Animated dimension lines between rooms
 * - "Blueprint" drawing effect with path animation
 */
import React, { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";

/* ── Palette ── */
const C = {
  bg: "#EDEEE2",
  paper: "#F5F3EC",
  grid: "#525642",
  wall: "#3B2B26",
  wallLight: "#5A4A3A",
  wallThin: "#7A6A5A",
  wallPlanned: "#3B2B2620",
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

const EASE = [0.25, 0.8, 0.25, 1] as [number, number, number, number];

/* ── Step data ── */
interface ScrollStep {
  id: number;
  tier: string;
  title: string;
  subtitle: string;
  narrative: string;
  detail: string;
  sqft: string;
  sqm: string;
  guests: string;
  highlight: string; // What's new in this step
}

const STEPS: ScrollStep[] = [
  {
    id: 0,
    tier: "tent",
    title: "Nayara Tent",
    subtitle: "The Foundation",
    narrative: "Begin with the essence — a luxury tent nestled in the rainforest canopy. A king-size four-poster bed, two daybeds for afternoon reading, and your own private hot springs plunge pool.",
    detail: "Each tent is positioned for maximum privacy, with views of the Arenal Volcano through floor-to-ceiling openings. The bathroom features a large soaking tub, twin vanities, and both indoor and outdoor showers.",
    sqft: "1,700",
    sqm: "157.9",
    guests: "2",
    highlight: "King Bed · 2 Daybeds · Plunge Pool · Bathroom",
  },
  {
    id: 1,
    tier: "family",
    title: "Family Tent",
    subtitle: "Add a Connecting Room",
    narrative: "A covered walkway extends east, connecting to a second room with two queen beds — perfect for children or companions. The plunge pool is now shared between both spaces.",
    detail: "The connecting room mirrors the primary tent's luxury finishes, with its own full bathroom and dressing area. A shared terrace wraps both structures, creating a private family compound.",
    sqft: "2,400",
    sqm: "223",
    guests: "5",
    highlight: "+ Connecting Room · 2 Queen Beds · Shared Pool",
  },
  {
    id: 2,
    tier: "grand",
    title: "Grand Tent",
    subtitle: "Expand the Living Space",
    narrative: "A full living area and equipped kitchen villa emerge between the tent and a new ground-level bedroom. An oversized plunge pool and private fire pit complete the compound.",
    detail: "The kitchen villa features a fully equipped cooking space, indoor and outdoor dining areas, and a generous living room. The ground-level bedroom with two queen beds provides additional privacy.",
    sqft: "4,804",
    sqm: "446",
    guests: "6",
    highlight: "+ Living & Kitchen · Ground Floor · Fire Pit · Oversized Pool",
  },
  {
    id: 3,
    tier: "residence",
    title: "Nayara Residence",
    subtitle: "The Complete Estate",
    narrative: "The ultimate expression — two Nayara Tents, two connecting suites, a grand living pavilion, private infinity pool, and fire pit. A multi-generational sanctuary in the jungle.",
    detail: "With a dedicated personal concierge, four bedrooms sleeping up to twelve adults, and expansive indoor and outdoor entertainment spaces, the Residence is designed for extraordinary family or group travel.",
    sqft: "7,664",
    sqm: "712",
    guests: "12",
    highlight: "2 Tents · 2 Suites · Living Pavilion · Infinity Pool · Concierge",
  },
];

/* ══════════════════════════════════════════════════════════════════
   SVG PRIMITIVES (same as FloorPlanBuilder but with hover support)
   ══════════════════════════════════════════════════════════════════ */

function rr(x: number, y: number, w: number, h: number, r = 6): string {
  return `M${x + r},${y} L${x + w - r},${y} Q${x + w},${y} ${x + w},${y + r} L${x + w},${y + h - r} Q${x + w},${y + h} ${x + w - r},${y + h} L${x + r},${y + h} Q${x},${y + h} ${x},${y + h - r} L${x},${y + r} Q${x},${y} ${x + r},${y} Z`;
}

function poolPath(cx: number, cy: number, w: number, h: number): string {
  const r = Math.min(w, h) * 0.35;
  const x = cx - w / 2, y = cy - h / 2;
  return `M${x + r},${y} Q${x + w * 0.3},${y - 3} ${x + w * 0.6},${y} Q${x + w},${y} ${x + w},${y + r} Q${x + w + 2},${y + h * 0.5} ${x + w},${y + h - r} Q${x + w},${y + h} ${x + w - r},${y + h} Q${x + w * 0.5},${y + h + 2} ${x + r},${y + h} Q${x},${y + h} ${x},${y + h - r} Q${x - 2},${y + h * 0.4} ${x},${y + r} Q${x},${y} ${x + r},${y} Z`;
}

/* Animated room with hover glow */
function Room({ path, visible, delay = 0, fill = "transparent", stroke = C.wall, hoverLabel, onHover }: {
  path: string; visible: boolean; delay?: number; fill?: string; stroke?: string;
  hoverLabel?: string; onHover?: (label: string | null) => void;
}) {
  return (
    <g
      onMouseEnter={() => onHover?.(hoverLabel || null)}
      onMouseLeave={() => onHover?.(null)}
      style={{ cursor: hoverLabel ? "pointer" : "default" }}
    >
      {fill !== "transparent" && (
        <motion.path d={path} fill={fill}
          initial={{ opacity: 0 }}
          animate={{ opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.8, delay: delay + 0.2 }} />
      )}
      <motion.path d={path} fill="none" stroke={stroke}
        strokeWidth={visible ? 1.5 : 0.8}
        strokeDasharray={visible ? "none" : "6 4"}
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: visible ? 1 : 0, opacity: visible ? 1 : 0 }}
        transition={{
          pathLength: { duration: 1.2, delay, ease: EASE },
          opacity: { duration: 0.4, delay },
        }}
      />
    </g>
  );
}

/* Bed with details */
function Bed({ x, y, w, h, label, visible, delay = 0, isKing = false }: {
  x: number; y: number; w: number; h: number; label: string;
  visible: boolean; delay?: number; isKing?: boolean;
}) {
  const pillowH = Math.max(7, h * 0.14);
  const pillowY = y + 6;
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.85 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      style={{ transformOrigin: `${x + w / 2}px ${y + h / 2}px` }}
    >
      {isKing && (
        <rect x={x - 5} y={y - 3} width={w + 10} height={h + 10} rx={3}
          fill={C.rug} stroke={C.bedStroke} strokeWidth={0.3} strokeDasharray="4 3" opacity={0.4} />
      )}
      <rect x={x} y={y} width={w} height={h} rx={4} ry={4}
        fill={C.bed} stroke={C.bedStroke} strokeWidth={1} />
      <rect x={x + 1} y={y} width={w - 2} height={5} rx={2}
        fill={C.bedStroke} opacity={0.5} />
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
      <line x1={x + 4} y1={y + h * 0.55} x2={x + w - 4} y2={y + h * 0.55}
        stroke={C.bedStroke} strokeWidth={0.4} opacity={0.3} />
      <text x={x + w / 2} y={y + h - 5} textAnchor="middle"
        fill={C.text} fontSize={7} opacity={0.45} style={mono}>
        {label}
      </text>
    </motion.g>
  );
}

function Daybed({ x, y, w, h, visible, delay = 0 }: {
  x: number; y: number; w: number; h: number; visible: boolean; delay?: number;
}) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: visible ? 0.85 : 0, scale: visible ? 1 : 0.85 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      style={{ transformOrigin: `${x + w / 2}px ${y + h / 2}px` }}
    >
      <rect x={x} y={y} width={w} height={h} rx={4}
        fill={C.bedLight} stroke={C.bedStroke} strokeWidth={0.7} />
      <rect x={x + 3} y={y + 3} width={w - 6} height={5} rx={2}
        fill={C.bone} stroke={C.bedStroke} strokeWidth={0.3} opacity={0.6} />
      <text x={x + w / 2} y={y + h - 4} textAnchor="middle"
        fill={C.text} fontSize={5.5} opacity={0.35} style={mono}>
        Daybed
      </text>
    </motion.g>
  );
}

function Pool({ cx, cy, w, h, visible, delay = 0, label = "Hot Springs Plunge Pool" }: {
  cx: number; cy: number; w: number; h: number; visible: boolean; delay?: number; label?: string;
}) {
  return (
    <g>
      <Room path={poolPath(cx, cy, w, h)} visible={visible} delay={delay}
        fill={visible ? C.poolFill : "transparent"} stroke={C.pool} />
      {visible && (
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.35, 0.15, 0.35] }}
          transition={{ duration: 4, repeat: Infinity, delay: delay + 1 }}
        >
          <line x1={cx - w * 0.2} y1={cy - 3} x2={cx - w * 0.05} y2={cy - 3}
            stroke={C.poolLight} strokeWidth={0.7} strokeLinecap="round" />
          <line x1={cx + w * 0.05} y1={cy + 2} x2={cx + w * 0.22} y2={cy + 2}
            stroke={C.poolLight} strokeWidth={0.5} strokeLinecap="round" />
        </motion.g>
      )}
      <motion.text
        x={cx} y={cy - h / 2 - 8} textAnchor="middle"
        fill={C.pool} fontSize={7} fontWeight={500}
        style={{ fontFamily: "var(--font-display)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: visible ? 0.6 : 0 }}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
      >
        {label}
      </motion.text>
    </g>
  );
}

function FirePit({ cx, cy, visible, delay = 0 }: {
  cx: number; cy: number; visible: boolean; delay?: number;
}) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0 }}
      transition={{ duration: 0.8, delay }}
      style={{ transformOrigin: `${cx}px ${cy}px` }}
    >
      <motion.circle cx={cx} cy={cy} r={18}
        fill={C.fireGlow}
        animate={{ r: [16, 20, 16] }}
        transition={{ duration: 3, repeat: Infinity }} />
      <circle cx={cx} cy={cy} r={13} fill="none" stroke={C.fire} strokeWidth={0.8} opacity={0.5} />
      <circle cx={cx} cy={cy} r={8} fill={`${C.fire}20`} stroke={C.fire} strokeWidth={0.5} opacity={0.6} />
      <motion.circle cx={cx} cy={cy} r={4} fill={C.fire}
        animate={{ opacity: [0.4, 0.9, 0.5, 0.8, 0.4], r: [3.5, 4.5, 3.5] }}
        transition={{ duration: 2.5, repeat: Infinity }} />
      <text x={cx} y={cy + 24} textAnchor="middle"
        fill={C.fire} fontSize={6} opacity={0.5} style={mono}>
        Fire Pit
      </text>
    </motion.g>
  );
}

function Bath({ x, y, w, h, visible, delay = 0 }: {
  x: number; y: number; w: number; h: number; visible: boolean; delay?: number;
}) {
  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 0.35 : 0 }}
      transition={{ duration: 0.7, delay: delay + 0.4 }}
    >
      <rect x={x} y={y} width={w} height={h} rx={3}
        fill="none" stroke={C.wallThin} strokeWidth={0.5} strokeDasharray="3 3" />
      <ellipse cx={x + w * 0.35} cy={y + h * 0.4} rx={10} ry={7}
        fill={C.bath} stroke={C.bathStroke} strokeWidth={0.5} />
      <circle cx={x + w * 0.7} cy={y + h * 0.3} r={4}
        fill="none" stroke={C.bathStroke} strokeWidth={0.4} />
      <circle cx={x + w * 0.85} cy={y + h * 0.3} r={4}
        fill="none" stroke={C.bathStroke} strokeWidth={0.4} />
      <text x={x + w / 2} y={y + h - 3} textAnchor="middle"
        fill={C.text} fontSize={5} opacity={0.3} style={mono}>Bath</text>
    </motion.g>
  );
}

function LivingArea({ x, y, w, h, visible, delay = 0 }: {
  x: number; y: number; w: number; h: number; visible: boolean; delay?: number;
}) {
  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 0.45 : 0 }}
      transition={{ duration: 0.8, delay: delay + 0.3 }}
    >
      <rect x={x + 12} y={y + 15} width={55} height={18} rx={3}
        fill={C.living} stroke={C.bedStroke} strokeWidth={0.5} />
      <rect x={x + 12} y={y + 15} width={14} height={32} rx={3}
        fill={C.living} stroke={C.bedStroke} strokeWidth={0.5} />
      <ellipse cx={x + w / 2} cy={y + h * 0.5} rx={22} ry={13}
        fill="none" stroke={C.bedStroke} strokeWidth={0.5} />
      {[-28, -12, 12, 28].map((offset, i) => (
        <circle key={i} cx={x + w / 2 + offset} cy={y + h * 0.5 + (i % 2 === 0 ? -16 : 16)}
          r={3.5} fill="none" stroke={C.bedStroke} strokeWidth={0.3} />
      ))}
      <rect x={x + 6} y={y + h - 24} width={w - 12} height={14} rx={3}
        fill={C.kitchen} stroke={C.bedStroke} strokeWidth={0.4} opacity={0.4} />
      <text x={x + w / 2} y={y + h - 14} textAnchor="middle"
        fill={C.text} fontSize={5} opacity={0.25} style={mono}>Kitchen</text>
    </motion.g>
  );
}

function Connector({ x, y, w, h, visible, delay = 0 }: {
  x: number; y: number; w: number; h: number; visible: boolean; delay?: number;
}) {
  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 0.8 : 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.rect x={x} y={y} width={w} height={h} rx={2}
        fill={visible ? `${C.paper}60` : "transparent"}
        stroke={visible ? C.wallLight : C.wallPlanned}
        strokeWidth={visible ? 0.6 : 0.4}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: visible ? 1 : 0 }}
        transition={{ duration: 0.5, delay }}
        style={{ transformOrigin: `${x}px ${y + h / 2}px` }}
      />
    </motion.g>
  );
}

function Tree({ cx, cy, r = 8, visible, delay = 0 }: {
  cx: number; cy: number; r?: number; visible: boolean; delay?: number;
}) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: visible ? 0.4 : 0, scale: visible ? 1 : 0 }}
      transition={{ duration: 0.6, delay: delay + 1.0 }}
      style={{ transformOrigin: `${cx}px ${cy}px` }}
    >
      <circle cx={cx} cy={cy} r={r} fill={C.vegetationLight} stroke={C.vegetation}
        strokeWidth={0.4} />
      <circle cx={cx - r * 0.25} cy={cy - r * 0.15} r={r * 0.45}
        fill="none" stroke={C.vegetation} strokeWidth={0.3} opacity={0.5} />
    </motion.g>
  );
}

function Door({ cx, cy, r = 12, startAngle = 0, visible, delay = 0 }: {
  cx: number; cy: number; r?: number; startAngle?: number; visible: boolean; delay?: number;
}) {
  const rad1 = (startAngle * Math.PI) / 180;
  const rad2 = ((startAngle + 90) * Math.PI) / 180;
  const x1 = cx + r * Math.cos(rad1);
  const y1 = cy + r * Math.sin(rad1);
  const x2 = cx + r * Math.cos(rad2);
  const y2 = cy + r * Math.sin(rad2);
  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 0.2 : 0 }}
      transition={{ duration: 0.6, delay: delay + 0.6 }}
    >
      <path
        d={`M${cx},${cy} L${x1},${y1} A${r},${r} 0 0,1 ${x2},${y2} Z`}
        fill={C.door} opacity={0.08} stroke={C.door} strokeWidth={0.4}
      />
    </motion.g>
  );
}

function Label({ x, y, text: t, sub, visible, delay = 0 }: {
  x: number; y: number; text: string; sub?: string; visible: boolean; delay?: number;
}) {
  return (
    <motion.g
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 4 }}
      transition={{ duration: 0.6, delay: delay + 0.3, ease: EASE }}
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

function Terrace({ x, y, w, h, visible, delay = 0 }: {
  x: number; y: number; w: number; h: number; visible: boolean; delay?: number;
}) {
  const planks = [];
  for (let py = y + 3; py < y + h - 2; py += 5) {
    planks.push(
      <line key={py} x1={x + 2} y1={py} x2={x + w - 2} y2={py}
        stroke={C.terraceStroke} strokeWidth={0.3} opacity={0.2} />
    );
  }
  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.7, delay: delay + 0.4 }}
    >
      <rect x={x} y={y} width={w} height={h} rx={4}
        fill={visible ? `${C.terrace}30` : "transparent"}
        stroke={C.terraceStroke} strokeWidth={0.5}
        strokeDasharray={visible ? "6 3" : "4 4"} />
      {visible && planks}
      <text x={x + w / 2} y={y + h / 2 + 2} textAnchor="middle"
        fill={C.text} fontSize={5} opacity={0.25} style={mono}>
        Terrace
      </text>
    </motion.g>
  );
}

/* Dimension line with animated measurement */
function DimensionLine({ x1, y1, x2, y2, label, visible, delay = 0 }: {
  x1: number; y1: number; x2: number; y2: number; label: string;
  visible: boolean; delay?: number;
}) {
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  const isHorizontal = Math.abs(y2 - y1) < Math.abs(x2 - x1);
  const tickLen = 5;

  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 0.25 : 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Main line */}
      <motion.line x1={x1} y1={y1} x2={x2} y2={y2}
        stroke={C.accent} strokeWidth={0.4}
        strokeDasharray="3 2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: visible ? 1 : 0 }}
        transition={{ duration: 0.8, delay }}
      />
      {/* End ticks */}
      {isHorizontal ? (
        <>
          <line x1={x1} y1={y1 - tickLen} x2={x1} y2={y1 + tickLen}
            stroke={C.accent} strokeWidth={0.4} />
          <line x1={x2} y1={y2 - tickLen} x2={x2} y2={y2 + tickLen}
            stroke={C.accent} strokeWidth={0.4} />
        </>
      ) : (
        <>
          <line x1={x1 - tickLen} y1={y1} x2={x1 + tickLen} y2={y1}
            stroke={C.accent} strokeWidth={0.4} />
          <line x1={x2 - tickLen} y1={y2} x2={x2 + tickLen} y2={y2}
            stroke={C.accent} strokeWidth={0.4} />
        </>
      )}
      {/* Label */}
      <rect x={midX - 18} y={midY - 7} width={36} height={12} rx={2}
        fill={C.paper} stroke={C.accent} strokeWidth={0.3} />
      <text x={midX} y={midY + 2} textAnchor="middle"
        fill={C.accent} fontSize={6} style={mono}>
        {label}
      </text>
    </motion.g>
  );
}

/** Architectural grid */
function Grid({ w, h }: { w: number; h: number }) {
  const lines = useMemo(() => {
    const result: React.ReactElement[] = [];
    for (let x = 0; x <= w; x += 20) {
      result.push(<line key={`v${x}`} x1={x} y1={0} x2={x} y2={h}
        stroke={C.grid} strokeWidth={x % 100 === 0 ? 0.25 : 0.08} opacity={0.12} />);
    }
    for (let y = 0; y <= h; y += 20) {
      result.push(<line key={`h${y}`} x1={0} y1={y} x2={w} y2={y}
        stroke={C.grid} strokeWidth={y % 100 === 0 ? 0.25 : 0.08} opacity={0.12} />);
    }
    return result;
  }, [w, h]);
  return <g>{lines}</g>;
}

function Compass({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x},${y})`} opacity={0.12}>
      <circle cx={0} cy={0} r={18} fill="none" stroke={C.text} strokeWidth={0.4} />
      <circle cx={0} cy={0} r={12} fill="none" stroke={C.text} strokeWidth={0.15} />
      <line x1={0} y1={-16} x2={0} y2={16} stroke={C.text} strokeWidth={0.3} />
      <line x1={-16} y1={0} x2={16} y2={0} stroke={C.text} strokeWidth={0.3} />
      <polygon points="0,-18 -2.5,-12 2.5,-12" fill={C.text} />
      <text x={0} y={-22} textAnchor="middle" fill={C.text} fontSize={6}
        style={{ ...display, letterSpacing: "0.15em" }}>N</text>
    </g>
  );
}

/* ══════════════════════════════════════════════════════════════════
   BLUEPRINT COMPOSITION — All elements always present, visibility
   controlled by scroll-driven step
   ══════════════════════════════════════════════════════════════════ */
function Blueprint({ step, hoveredRoom, onHoverRoom }: {
  step: number;
  hoveredRoom: string | null;
  onHoverRoom: (room: string | null) => void;
}) {
  const isTent = step >= 0;
  const isFamily = step >= 1;
  const isGrand = step >= 2;
  const isResidence = step >= 3;

  if (isResidence) {
    const lt = { x: 8, y: 55, w: 125, h: 120 };
    const ls = { x: lt.x + lt.w + 12, y: lt.y + 12, w: 95, h: 95 };
    const cv = { x: ls.x + ls.w + 12, y: lt.y - 25, w: 108, h: 165 };
    const rs = { x: cv.x + cv.w + 12, y: lt.y + 12, w: 95, h: 95 };
    const rt = { x: rs.x + rs.w + 12, y: lt.y, w: 125, h: 120 };

    return (
      <g>
        {/* Left tent */}
        <Terrace x={lt.x - 28} y={lt.y + 10} w={24} h={80} visible delay={0} />
        <Room path={rr(lt.x, lt.y, lt.w, lt.h, 6)} visible delay={0} fill={`${C.paper}90`}
          hoverLabel="Tent A" onHover={onHoverRoom} />
        <Bed x={lt.x + 22} y={lt.y + 62} w={80} h={42} label="King" visible delay={0.2} isKing />
        <Daybed x={lt.x + 6} y={lt.y + 8} w={38} h={30} visible delay={0.3} />
        <Daybed x={lt.x + 80} y={lt.y + 8} w={38} h={30} visible delay={0.35} />
        <Bath x={lt.x + lt.w - 48} y={lt.y + lt.h - 40} w={42} h={32} visible delay={0.25} />
        <Door cx={lt.x + lt.w} cy={lt.y + lt.h / 2 - 5} r={9} startAngle={0} visible delay={0.2} />
        <Pool cx={lt.x + lt.w / 2} cy={lt.y - 28} w={72} h={34} visible delay={0.4} label="Plunge Pool" />

        {/* Left suite */}
        <Connector x={lt.x + lt.w} y={lt.y + 38} w={12} h={18} visible delay={0.45} />
        <Room path={rr(ls.x, ls.y, ls.w, ls.h, 5)} visible delay={0.5} fill={`${C.paper}70`}
          hoverLabel="Suite A" onHover={onHoverRoom} />
        <Bed x={ls.x + 4} y={ls.y + 10} w={40} h={36} label="Queen" visible delay={0.6} />
        <Bed x={ls.x + 50} y={ls.y + 10} w={40} h={36} label="Queen" visible delay={0.65} />
        <Bath x={ls.x + 10} y={ls.y + ls.h - 35} w={40} h={28} visible delay={0.55} />

        {/* Central living */}
        <Connector x={ls.x + ls.w} y={ls.y + 28} w={12} h={18} visible delay={0.55} />
        <Room path={rr(cv.x, cv.y, cv.w, cv.h, 6)} visible delay={0.6} fill={`${C.living}15`}
          hoverLabel="Living & Kitchen" onHover={onHoverRoom} />
        <LivingArea x={cv.x} y={cv.y} w={cv.w} h={cv.h} visible delay={0.7} />

        {/* Right suite */}
        <Connector x={cv.x + cv.w} y={rs.y + 28} w={12} h={18} visible delay={0.65} />
        <Room path={rr(rs.x, rs.y, rs.w, rs.h, 5)} visible delay={0.7} fill={`${C.paper}70`}
          hoverLabel="Suite B" onHover={onHoverRoom} />
        <Bed x={rs.x + 4} y={rs.y + 10} w={40} h={36} label="Queen" visible delay={0.8} />
        <Bed x={rs.x + 50} y={rs.y + 10} w={40} h={36} label="Queen" visible delay={0.85} />
        <Bath x={rs.x + 10} y={rs.y + rs.h - 35} w={40} h={28} visible delay={0.75} />

        {/* Right tent */}
        <Connector x={rs.x + rs.w} y={rt.y + 38} w={12} h={18} visible delay={0.75} />
        <Room path={rr(rt.x, rt.y, rt.w, rt.h, 6)} visible delay={0.8} fill={`${C.paper}90`}
          hoverLabel="Tent B" onHover={onHoverRoom} />
        <Bed x={rt.x + 22} y={rt.y + 62} w={80} h={42} label="King" visible delay={0.9} isKing />
        <Daybed x={rt.x + 6} y={rt.y + 8} w={38} h={30} visible delay={0.95} />
        <Daybed x={rt.x + 80} y={rt.y + 8} w={38} h={30} visible delay={1.0} />
        <Bath x={rt.x + rt.w - 48} y={rt.y + rt.h - 40} w={42} h={32} visible delay={0.85} />
        <Door cx={rt.x} cy={rt.y + rt.h / 2 - 5} r={9} startAngle={90} visible delay={0.85} />
        <Pool cx={rt.x + rt.w / 2} cy={rt.y - 28} w={72} h={34} visible delay={1.0} label="Plunge Pool" />
        <Terrace x={rt.x + rt.w + 4} y={rt.y + 10} w={24} h={80} visible delay={0.9} />

        {/* Infinity pool + fire pit */}
        <Pool cx={cv.x + cv.w / 2} cy={cv.y + cv.h + 35} w={105} h={38} visible delay={1.2} label="Infinity Pool" />
        <FirePit cx={cv.x + cv.w / 2 + 68} cy={cv.y + cv.h + 35} visible delay={1.4} />

        {/* Labels */}
        <Label x={lt.x + lt.w / 2} y={lt.y + lt.h + 16} text="Tent A" sub="King + Daybeds" visible delay={0.1} />
        <Label x={ls.x + ls.w / 2} y={ls.y + ls.h + 16} text="Suite A" sub="2 Queens" visible delay={0.5} />
        <Label x={cv.x + cv.w / 2} y={cv.y - 14} text="Living & Kitchen" visible delay={0.6} />
        <Label x={rs.x + rs.w / 2} y={rs.y + rs.h + 16} text="Suite B" sub="2 Queens" visible delay={0.7} />
        <Label x={rt.x + rt.w / 2} y={rt.y + rt.h + 16} text="Tent B" sub="King + Daybeds" visible delay={0.8} />

        {/* Dimension lines */}
        <DimensionLine x1={lt.x} y1={lt.y + lt.h + 35} x2={rt.x + rt.w} y2={lt.y + lt.h + 35}
          label="~45m" visible delay={1.0} />

        {/* Vegetation */}
        <Tree cx={lt.x - 18} cy={lt.y - 15} r={9} visible delay={0} />
        <Tree cx={rt.x + rt.w + 32} cy={rt.y - 10} r={8} visible delay={0.1} />
        <Tree cx={lt.x - 15} cy={lt.y + lt.h + 5} r={6} visible delay={0.15} />
        <Tree cx={rt.x + rt.w + 28} cy={rt.y + rt.h + 8} r={7} visible delay={0.2} />
      </g>
    );
  }

  // STEPS 0-2: Progressive build
  const tx = 80, ty = 80, tw = 180, th = 170;
  const cx = tx + tw + 20, cy = ty + 15, cw = 140, ch = 130;
  const lx = tx + tw + 20, ly = ty - 15, lw = 130, lh = 170;
  const dx = lx + lw + 18, dy = ty + 15, dw = 120, dh = 115;

  return (
    <g>
      {/* BASE TENT */}
      <Terrace x={tx - 32} y={ty + 15} w={28} h={110} visible={isTent} delay={0.15} />
      <Room path={rr(tx, ty, tw, th, 8)} visible={isTent} delay={0} fill={`${C.paper}90`}
        hoverLabel="Nayara Tent" onHover={onHoverRoom} />
      <Bed x={tx + 50} y={ty + 95} w={80} h={58} label="King Bed" visible={isTent} delay={0.3} isKing />
      <Daybed x={tx + 12} y={ty + 18} w={50} h={40} visible={isTent} delay={0.45} />
      <Daybed x={tx + 118} y={ty + 18} w={50} h={40} visible={isTent} delay={0.5} />
      <Bath x={tx + tw - 58} y={ty + th - 50} w={50} h={40} visible={isTent} delay={0.35} />
      <Door cx={tx} cy={ty + th / 2} r={12} startAngle={-90} visible={isTent} delay={0.25} />

      {/* Pool — upgrades to oversized at Grand */}
      <Pool
        cx={tx + tw / 2 + (isGrand ? 30 : 0)}
        cy={ty - 42}
        w={isGrand ? 130 : 95}
        h={isGrand ? 55 : 50}
        visible={isTent}
        delay={0.55}
        label={isGrand ? "Oversized Hot Springs Pool" : "Hot Springs Plunge Pool"}
      />

      {/* CONNECTING ROOM (Family — step 1 only) */}
      {!isGrand && (
        <>
          <Connector x={tx + tw} y={ty + 55} w={20} h={26} visible={isFamily} delay={0.6} />
          <Room path={rr(cx, cy, cw, ch, 6)} visible={isFamily} delay={0.65} fill={`${C.paper}70`}
            hoverLabel="Connecting Room" onHover={onHoverRoom} />
          <Bed x={cx + 10} y={cy + 20} w={52} h={46} label="Queen" visible={isFamily} delay={0.75} />
          <Bed x={cx + 76} y={cy + 20} w={52} h={46} label="Queen" visible={isFamily} delay={0.8} />
          <Bath x={cx + 10} y={cy + ch - 40} w={48} h={32} visible={isFamily} delay={0.7} />
          <Door cx={cx} cy={cy + ch / 2 - 8} r={10} startAngle={180} visible={isFamily} delay={0.7} />
          <Label x={cx + cw / 2} y={cy + ch + 20} text="Connecting Room" sub="2 Queen Beds" visible={isFamily} delay={0.65} />

          {/* Dimension line for Family */}
          {isFamily && (
            <DimensionLine x1={tx} y1={ty + th + 30} x2={cx + cw} y2={ty + th + 30}
              label="~18m" visible={isFamily} delay={0.8} />
          )}
        </>
      )}

      {/* LIVING AREA (Grand — step 2) */}
      {isGrand && (
        <>
          <Connector x={tx + tw} y={ty + 45} w={20} h={24} visible={isGrand} delay={0.55} />
          <Room path={rr(lx, ly, lw, lh, 6)} visible={isGrand} delay={0.5} fill={`${C.living}15`}
            hoverLabel="Living & Kitchen" onHover={onHoverRoom} />
          <LivingArea x={lx} y={ly} w={lw} h={lh} visible={isGrand} delay={0.6} />
          <Label x={lx + lw / 2} y={ly - 18} text="Living & Kitchen" sub="Fully Equipped" visible={isGrand} delay={0.5} />

          {/* Ground floor */}
          <Connector x={lx + lw} y={ly + 55} w={18} h={22} visible={isGrand} delay={0.65} />
          <Room path={rr(dx, dy, dw, dh, 6)} visible={isGrand} delay={0.7} fill={`${C.paper}70`}
            hoverLabel="Ground Floor" onHover={onHoverRoom} />
          <Bed x={dx + 6} y={dy + 16} w={48} h={42} label="Queen" visible={isGrand} delay={0.85} />
          <Bed x={dx + 66} y={dy + 16} w={48} h={42} label="Queen" visible={isGrand} delay={0.9} />
          <Bath x={dx + 18} y={dy + dh - 36} w={44} h={28} visible={isGrand} delay={0.8} />
          <Door cx={dx} cy={dy + dh / 2 - 8} r={10} startAngle={180} visible={isGrand} delay={0.75} />
          <Label x={dx + dw / 2} y={dy + dh + 18} text="Ground Floor" sub="2 Queen Beds" visible={isGrand} delay={0.7} />
          <Terrace x={dx + dw + 6} y={dy + 8} w={22} h={78} visible={isGrand} delay={0.8} />

          {/* Fire pit */}
          <FirePit cx={lx + lw / 2} cy={ly + lh + 32} visible={isGrand} delay={1.1} />

          {/* Dimension line for Grand */}
          <DimensionLine x1={tx} y1={ty + th + 30} x2={dx + dw} y2={ty + th + 30}
            label="~30m" visible={isGrand} delay={0.9} />
        </>
      )}

      {/* Labels */}
      <Label x={tx + tw / 2} y={ty + th + 22} text="Nayara Tent"
        sub={isGrand ? "Upper Level" : isFamily ? "Primary Suite" : "157.9 sqm"}
        visible={isTent} delay={0.2} />

      {/* Dimension line for Tent only */}
      {!isFamily && !isGrand && (
        <DimensionLine x1={tx} y1={ty + th + 30} x2={tx + tw} y2={ty + th + 30}
          label="~12m" visible={isTent} delay={0.7} />
      )}

      {/* Vegetation */}
      <Tree cx={tx - 48} cy={ty - 18} r={10} visible={isTent} delay={0} />
      <Tree cx={tx - 50} cy={ty + th + 10} r={7} visible={isTent} delay={0.15} />
      {!isGrand && (
        <>
          <Tree cx={(isFamily ? cx + cw : tx + tw) + 28} cy={ty - 8} r={8} visible={isTent} delay={0.1} />
          <Tree cx={(isFamily ? cx + cw : tx + tw) + 25} cy={ty + th + 5} r={7} visible={isTent} delay={0.2} />
        </>
      )}
      {isGrand && (
        <>
          <Tree cx={dx + dw + 36} cy={dy - 8} r={8} visible delay={0.1} />
          <Tree cx={dx + dw + 34} cy={dy + dh + 12} r={7} visible delay={0.2} />
          <Tree cx={lx + lw / 2} cy={ly - 68} r={6} visible delay={0.3} />
        </>
      )}
    </g>
  );
}

/* ══════════════════════════════════════════════════════════════════
   SCROLL-DRIVEN NARRATIVE PANEL
   ══════════════════════════════════════════════════════════════════ */
function NarrativePanel({ step, isActive }: { step: ScrollStep; isActive: boolean }) {
  return (
    <motion.div
      className="min-h-[70vh] flex items-center py-12"
      initial={{ opacity: 0.3 }}
      animate={{ opacity: isActive ? 1 : 0.15 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-sm">
        {/* Step number */}
        <motion.div
          className="flex items-center gap-3 mb-4"
          animate={{ x: isActive ? 0 : -10 }}
          transition={{ duration: 0.4 }}
        >
          <span className="w-8 h-8 rounded-full flex items-center justify-center text-xs"
            style={{
              backgroundColor: isActive ? C.accentDark : `${C.text}10`,
              color: isActive ? C.bone : C.textMuted,
              ...mono, fontWeight: 600,
            }}>
            {step.id + 1}
          </span>
          <span className="text-[10px] tracking-[0.2em] uppercase"
            style={{ ...body, fontWeight: 600, color: isActive ? C.accentDark : C.textMuted }}>
            {step.subtitle}
          </span>
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl mb-3"
          style={{ ...display, color: C.text }}>
          {step.title}
        </h3>

        {/* Narrative */}
        <p className="text-sm leading-relaxed mb-4"
          style={{ ...body, color: C.textSoft }}>
          {step.narrative}
        </p>

        {/* Detail */}
        <p className="text-xs leading-relaxed mb-5"
          style={{ ...body, color: C.textMuted }}>
          {step.detail}
        </p>

        {/* What's new badge */}
        <div className="flex items-start gap-2 mb-6 p-3 rounded-lg"
          style={{ backgroundColor: `${C.accent}10`, border: `1px solid ${C.accent}20` }}>
          <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke={C.accent} strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <p className="text-xs" style={{ ...body, fontWeight: 500, color: C.accentDark }}>
            {step.highlight}
          </p>
        </div>

        {/* Stats row */}
        <div className="flex gap-6 mb-6">
          <div>
            <p className="text-xl" style={{ ...display, color: C.accent }}>{step.sqft}</p>
            <p className="text-[9px] tracking-[0.12em] uppercase" style={{ ...body, fontWeight: 500, color: C.textMuted }}>Sq. Ft.</p>
          </div>
          <div>
            <p className="text-xl" style={{ ...display, color: C.accent }}>{step.sqm}</p>
            <p className="text-[9px] tracking-[0.12em] uppercase" style={{ ...body, fontWeight: 500, color: C.textMuted }}>Sq. M.</p>
          </div>
          <div>
            <p className="text-xl" style={{ ...display, color: C.accent }}>{step.guests}</p>
            <p className="text-[9px] tracking-[0.12em] uppercase" style={{ ...body, fontWeight: 500, color: C.textMuted }}>Guests</p>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => import("sonner").then(({ toast }) => toast("Reservation — Coming Soon"))}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border transition-all duration-300 hover:scale-[1.03]"
          style={{
            ...body, fontWeight: 500, fontSize: "10px",
            letterSpacing: "0.18em", textTransform: "uppercase" as const,
            color: C.accentDark,
            borderColor: `${C.accentDark}40`,
            backgroundColor: "transparent",
          }}>
          Check Availability
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   HOVER TOOLTIP
   ══════════════════════════════════════════════════════════════════ */
function HoverTooltip({ room }: { room: string | null }) {
  const details: Record<string, { beds: string; bath: string; feature: string }> = {
    "Nayara Tent": { beds: "1 King + 2 Daybeds", bath: "Soaking tub, twin vanities", feature: "Private plunge pool" },
    "Connecting Room": { beds: "2 Queen Beds", bath: "Full bathroom", feature: "Covered walkway" },
    "Living & Kitchen": { beds: "—", bath: "—", feature: "Full kitchen, dining, lounge" },
    "Ground Floor": { beds: "2 Queen Beds", bath: "Full bathroom", feature: "Garden level" },
    "Tent A": { beds: "1 King + 2 Daybeds", bath: "Soaking tub, twin vanities", feature: "Private plunge pool" },
    "Tent B": { beds: "1 King + 2 Daybeds", bath: "Soaking tub, twin vanities", feature: "Private plunge pool" },
    "Suite A": { beds: "2 Queen Beds", bath: "Full bathroom", feature: "Connected to Tent A" },
    "Suite B": { beds: "2 Queen Beds", bath: "Full bathroom", feature: "Connected to Tent B" },
  };

  if (!room || !details[room]) return null;
  const d = details[room];

  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 5 }}
      className="absolute top-4 left-4 z-20 p-3 rounded-lg shadow-lg"
      style={{ backgroundColor: C.paper, border: `1px solid ${C.text}15` }}
    >
      <p className="text-xs font-medium mb-1.5" style={{ ...display, color: C.text }}>{room}</p>
      <div className="flex flex-col gap-1">
        <p className="text-[10px]" style={{ ...body, color: C.textSoft }}>
          <span style={{ color: C.accent, fontWeight: 600 }}>Beds:</span> {d.beds}
        </p>
        <p className="text-[10px]" style={{ ...body, color: C.textSoft }}>
          <span style={{ color: C.accent, fontWeight: 600 }}>Bath:</span> {d.bath}
        </p>
        <p className="text-[10px]" style={{ ...body, color: C.textSoft }}>
          <span style={{ color: C.accent, fontWeight: 600 }}>Feature:</span> {d.feature}
        </p>
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   MAIN COMPONENT — Scroll-driven floor plan builder
   ══════════════════════════════════════════════════════════════════ */
interface FloorPlanScrollProps {
  maxStep?: number;
}

export default function FloorPlanScroll({ maxStep = 3 }: FloorPlanScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [hoveredRoom, setHoveredRoom] = useState<string | null>(null);
  const availableSteps = STEPS.filter((s) => s.id <= maxStep);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to step index
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const stepCount = availableSteps.length;
    const newStep = Math.min(Math.floor(v * stepCount), stepCount - 1);
    if (newStep !== currentStep && newStep >= 0) {
      setCurrentStep(newStep);
    }
  });

  const viewBoxes = [
    "-60 -100 480 350",
    "-40 -100 520 350",
    "-40 -120 570 380",
    "-25 -70 640 320",
  ];

  return (
    <section style={{ backgroundColor: C.bg }}>
      {/* Header */}
      <div className="py-16 md:py-24 px-4 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center"
        >
          <p className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase mb-3"
            style={{ ...body, fontWeight: 500, color: C.accent }}>
            Scroll to Explore
          </p>
          <h2 className="text-2xl md:text-4xl lg:text-[2.6rem]"
            style={{ ...display, color: C.text }}>
            From Tent to Estate
          </h2>
          <p className="text-sm mt-3 max-w-md mx-auto"
            style={{ ...body, color: C.textMuted }}>
            Scroll down to watch the blueprint construct itself — each tier builds on the last
          </p>
          {/* Scroll indicator */}
          <motion.div className="mt-8"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}>
            <svg className="w-5 h-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke={C.accent} strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll container */}
      <div ref={containerRef} className="relative" style={{ height: `${availableSteps.length * 100}vh` }}>
        {/* Sticky blueprint */}
        <div className="sticky top-0 h-screen flex">
          {/* Left: SVG Blueprint */}
          <div className="w-full lg:w-3/5 h-full flex items-center justify-center p-4 md:p-8">
            <div className="relative w-full max-w-2xl rounded-lg overflow-hidden border"
              style={{
                backgroundColor: C.paper,
                borderColor: `${C.text}10`,
              }}>
              {/* Hover tooltip */}
              <AnimatePresence>
                {hoveredRoom && <HoverTooltip room={hoveredRoom} />}
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div key={currentStep}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}>
                  <svg viewBox={viewBoxes[currentStep]}
                    className="w-full" style={{ minHeight: "280px", maxHeight: "480px" }}
                    preserveAspectRatio="xMidYMid meet">
                    <Grid w={700} h={400} />
                    <Compass
                      x={currentStep === 3 ? 590 : currentStep === 2 ? 500 : 400}
                      y={currentStep === 3 ? -40 : -70} />
                    <Blueprint step={currentStep} hoveredRoom={hoveredRoom} onHoverRoom={setHoveredRoom} />
                  </svg>
                </motion.div>
              </AnimatePresence>

              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: `${C.text}08` }}>
                <motion.div
                  className="h-full"
                  style={{ backgroundColor: C.accent }}
                  animate={{ width: `${((currentStep + 1) / availableSteps.length) * 100}%` }}
                  transition={{ duration: 0.6, ease: EASE }}
                />
              </div>

              {/* Step indicator */}
              <div className="absolute top-3 left-4 flex items-center gap-2">
                {availableSteps.map((s) => (
                  <div key={s.id} className="w-2 h-2 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: currentStep >= s.id ? C.accentDark : `${C.text}15`,
                      transform: currentStep === s.id ? "scale(1.4)" : "scale(1)",
                    }} />
                ))}
              </div>

              {/* Watermark */}
              <div className="absolute top-3 right-4 text-[8px] tracking-[0.4em] uppercase opacity-[0.06]"
                style={{ ...display, color: C.text }}>
                Nayara Tented Camp
              </div>
            </div>
          </div>

          {/* Right: Narrative panels (visible on desktop) */}
          <div className="hidden lg:flex w-2/5 h-full items-center px-8">
            <AnimatePresence mode="wait">
              <motion.div key={currentStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}>
                <NarrativePanel step={availableSteps[currentStep]} isActive={true} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Scroll triggers (invisible spacers) */}
        {availableSteps.map((_, i) => (
          <div key={i} style={{ height: `${100 / availableSteps.length}%` }} />
        ))}
      </div>

      {/* Mobile narrative (below the scroll section) */}
      <div className="lg:hidden px-4 py-12">
        <NarrativePanel step={availableSteps[currentStep]} isActive={true} />
      </div>

      {/* Legend */}
      <div className="px-4 md:px-16 pb-16">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-5 md:gap-7">
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
                style={{ ...body, fontWeight: 500, color: C.textMuted }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
