/**
 * FLOOR PLAN BUILDER , Prototype B: "Watch It Build"
 *
 * Creative concept: Progressive construction animation.
 * Start with the base Nayara Tent. Step through each tier and
 * watch new rooms, pools, and living spaces animate in on top
 * of what's already there , like an architect adding wings
 * to a building in real time.
 *
 * Key differences from FloorPlanExplorer (Prototype A):
 * - Additive: elements are ADDED, never removed
 * - Timeline stepper on the side
 * - Dashed "planned" outlines appear first, then solidify
 * - ViewBox morphs smoothly as the layout expands
 * - Narrative text accompanies each construction step
 *
 * Style: Warm editorial cartography meets construction blueprint.
 */
import React, { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";

/* ── Palette ── */
const C = {
  bg: "#EDEEE2",
  bgDark: "#3B3D2F",
  paper: "#F5F3EC",
  paperDark: "#454738",
  grid: "#525642",
  wall: "#3B2B26",
  wallLight: "#5A4A3A",
  wallThin: "#7A6A5A",
  wallPlanned: "#3B2B2630",
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
  connector: "#9A8A6A",
};

const display = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)" } as const;
const mono = { fontFamily: "'DM Sans', sans-serif", fontWeight: 300 } as const;

const EASE = [0.25, 0.8, 0.25, 1] as [number, number, number, number];

/* ── Step definitions ── */
interface BuildStep {
  id: number;
  tier: string;
  title: string;
  subtitle: string;
  narrative: string;
  sqft: string;
  sqm: string;
  guests: string;
}

const STEPS: BuildStep[] = [
  {
    id: 0,
    tier: "tent",
    title: "Nayara Tent",
    subtitle: "The Foundation",
    narrative: "Begin with the essence , a luxury tent nestled in the rainforest canopy. A king-size four-poster bed, two daybeds for afternoon reading, and your own private hot springs plunge pool.",
    sqft: "1,700",
    sqm: "157.9",
    guests: "2 adults + 2 children",
  },
  {
    id: 1,
    tier: "family",
    title: "Family Tent",
    subtitle: "Add a Connecting Room",
    narrative: "A covered walkway extends east, connecting to a second room with two queen beds , perfect for children or companions. The plunge pool is now shared between both spaces.",
    sqft: "2,400",
    sqm: "223",
    guests: "2 adults + 3 children",
  },
  {
    id: 2,
    tier: "grand",
    title: "Grand Tent",
    subtitle: "Expand the Living Space",
    narrative: "A full living area and equipped kitchen villa emerge between the tent and a new ground-level bedroom. An oversized plunge pool and private fire pit complete the compound.",
    sqft: "4,804",
    sqm: "446",
    guests: "4 adults + 2 children",
  },
  {
    id: 3,
    tier: "residence",
    title: "Nayara Residence",
    subtitle: "The Complete Estate",
    narrative: "The ultimate expression , two Nayara Tents, two connecting suites, a grand living pavilion, private infinity pool, and fire pit. A multi-generational sanctuary in the jungle.",
    sqft: "7,664",
    sqm: "712",
    guests: "Up to 12 adults",
  },
];

/* ══════════════════════════════════════════════════════════════════
   SVG PRIMITIVES
   ══════════════════════════════════════════════════════════════════ */

function rr(x: number, y: number, w: number, h: number, r = 6): string {
  return `M${x + r},${y} L${x + w - r},${y} Q${x + w},${y} ${x + w},${y + r} L${x + w},${y + h - r} Q${x + w},${y + h} ${x + w - r},${y + h} L${x + r},${y + h} Q${x},${y + h} ${x},${y + h - r} L${x},${y + r} Q${x},${y} ${x + r},${y} Z`;
}

function poolShape(cx: number, cy: number, w: number, h: number): string {
  const r = Math.min(w, h) * 0.35;
  const x = cx - w / 2, y = cy - h / 2;
  return `M${x + r},${y} Q${x + w * 0.3},${y - 3} ${x + w * 0.6},${y} Q${x + w},${y} ${x + w},${y + r} Q${x + w + 2},${y + h * 0.5} ${x + w},${y + h - r} Q${x + w},${y + h} ${x + w - r},${y + h} Q${x + w * 0.5},${y + h + 2} ${x + r},${y + h} Q${x},${y + h} ${x},${y + h - r} Q${x - 2},${y + h * 0.4} ${x},${y + r} Q${x},${y} ${x + r},${y} Z`;
}

/** Room that draws itself , can be "planned" (dashed) or "built" (solid) */
function BuildRoom({ path, built, delay = 0, fill = "transparent", stroke = C.wall }: {
  path: string; built: boolean; delay?: number; fill?: string; stroke?: string;
}) {
  return (
    <g>
      {fill !== "transparent" && (
        <motion.path d={path} fill={fill}
          initial={{ opacity: 0 }}
          animate={{ opacity: built ? 1 : 0.15 }}
          transition={{ duration: 0.8, delay: delay + 0.2 }} />
      )}
      <motion.path d={path} fill="none" stroke={stroke}
        strokeWidth={built ? 1.5 : 0.8}
        strokeDasharray={built ? "none" : "6 4"}
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: built ? 1 : 0.3 }}
        transition={{
          pathLength: { duration: 1.0, delay, ease: EASE },
          opacity: { duration: 0.4, delay },
          strokeWidth: { duration: 0.5 },
          strokeDasharray: { duration: 0.5 },
        }}
      />
    </g>
  );
}

/** Bed that fades in when its room is "built" */
function BuildBed({ x, y, w, h, label, built, delay = 0, isKing = false }: {
  x: number; y: number; w: number; h: number; label: string;
  built: boolean; delay?: number; isKing?: boolean;
}) {
  const pillowH = Math.max(7, h * 0.14);
  const pillowY = y + 6;
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: built ? 1 : 0.08, scale: built ? 1 : 0.9 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      style={{ transformOrigin: `${x + w / 2}px ${y + h / 2}px` }}
    >
      {/* Rug */}
      {isKing && (
        <rect x={x - 5} y={y - 3} width={w + 10} height={h + 10} rx={3}
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
      {/* Blanket fold */}
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

/** Daybed */
function BuildDaybed({ x, y, w, h, built, delay = 0 }: {
  x: number; y: number; w: number; h: number; built: boolean; delay?: number;
}) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: built ? 0.85 : 0.06, scale: built ? 1 : 0.9 }}
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

/** Pool with shimmer */
function BuildPool({ cx, cy, w, h, built, delay = 0, label = "Hot Springs Plunge Pool" }: {
  cx: number; cy: number; w: number; h: number; built: boolean; delay?: number; label?: string;
}) {
  return (
    <g>
      <BuildRoom path={poolShape(cx, cy, w, h)} built={built} delay={delay}
        fill={built ? C.poolFill : "transparent"} stroke={C.pool} />
      {/* Water shimmer */}
      {built && (
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
      {/* Label */}
      <motion.text
        x={cx} y={cy - h / 2 - 8} textAnchor="middle"
        fill={C.pool} fontSize={7} fontWeight={500}
        style={{ fontFamily: "var(--font-display)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: built ? 0.6 : 0.15 }}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
      >
        {label}
      </motion.text>
    </g>
  );
}

/** Fire pit with animated glow */
function BuildFirePit({ cx, cy, built, delay = 0 }: {
  cx: number; cy: number; built: boolean; delay?: number;
}) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: built ? 1 : 0, scale: built ? 1 : 0 }}
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

/** Bathroom fixtures */
function BuildBath({ x, y, w, h, built, delay = 0 }: {
  x: number; y: number; w: number; h: number; built: boolean; delay?: number;
}) {
  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: built ? 0.35 : 0.05 }}
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
      <rect x={x + w * 0.65} y={y + h * 0.6} width={10} height={10} rx={2}
        fill="none" stroke={C.bathStroke} strokeWidth={0.4} />
      <text x={x + w / 2} y={y + h - 3} textAnchor="middle"
        fill={C.text} fontSize={5} opacity={0.3} style={mono}>Bath</text>
    </motion.g>
  );
}

/** Living area furniture */
function BuildLiving({ x, y, w, h, built, delay = 0 }: {
  x: number; y: number; w: number; h: number; built: boolean; delay?: number;
}) {
  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: built ? 0.45 : 0.05 }}
      transition={{ duration: 0.8, delay: delay + 0.3 }}
    >
      {/* Sofa L-shape */}
      <rect x={x + 12} y={y + 15} width={55} height={18} rx={3}
        fill={C.living} stroke={C.bedStroke} strokeWidth={0.5} />
      <rect x={x + 12} y={y + 15} width={14} height={32} rx={3}
        fill={C.living} stroke={C.bedStroke} strokeWidth={0.5} />
      {/* Dining table */}
      <ellipse cx={x + w / 2} cy={y + h * 0.5} rx={22} ry={13}
        fill="none" stroke={C.bedStroke} strokeWidth={0.5} />
      {/* Chairs */}
      {[-28, -12, 12, 28].map((offset, i) => (
        <circle key={i} cx={x + w / 2 + offset} cy={y + h * 0.5 + (i % 2 === 0 ? -16 : 16)}
          r={3.5} fill="none" stroke={C.bedStroke} strokeWidth={0.3} />
      ))}
      {/* Kitchen counter */}
      <rect x={x + 6} y={y + h - 24} width={w - 12} height={14} rx={3}
        fill={C.kitchen} stroke={C.bedStroke} strokeWidth={0.4} opacity={0.4} />
      <text x={x + w / 2} y={y + h - 14} textAnchor="middle"
        fill={C.text} fontSize={5} opacity={0.25} style={mono}>Kitchen</text>
    </motion.g>
  );
}

/** Walkway connector */
function BuildConnector({ x, y, w, h, built, delay = 0 }: {
  x: number; y: number; w: number; h: number; built: boolean; delay?: number;
}) {
  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: built ? 0.8 : 0.1 }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.rect x={x} y={y} width={w} height={h} rx={2}
        fill={built ? `${C.paper}60` : "transparent"}
        stroke={built ? C.wallLight : C.wallPlanned}
        strokeWidth={built ? 0.6 : 0.4}
        strokeDasharray={built ? "none" : "4 3"}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay }}
        style={{ transformOrigin: `${x}px ${y + h / 2}px` }}
      />
    </motion.g>
  );
}

/** Vegetation */
function BuildTree({ cx, cy, r = 8, built, delay = 0 }: {
  cx: number; cy: number; r?: number; built: boolean; delay?: number;
}) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: built ? 0.4 : 0, scale: built ? 1 : 0 }}
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

/** Door arc */
function BuildDoor({ cx, cy, r = 12, startAngle = 0, built, delay = 0 }: {
  cx: number; cy: number; r?: number; startAngle?: number; built: boolean; delay?: number;
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
      animate={{ opacity: built ? 0.2 : 0 }}
      transition={{ duration: 0.6, delay: delay + 0.6 }}
    >
      <path
        d={`M${cx},${cy} L${x1},${y1} A${r},${r} 0 0,1 ${x2},${y2} Z`}
        fill={C.door} opacity={0.08} stroke={C.door} strokeWidth={0.4}
      />
    </motion.g>
  );
}

/** Annotation label */
function BuildLabel({ x, y, text: t, sub, built, delay = 0 }: {
  x: number; y: number; text: string; sub?: string; built: boolean; delay?: number;
}) {
  return (
    <motion.g
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: built ? 1 : 0.12, y: 0 }}
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

/** Terrace with planks */
function BuildTerrace({ x, y, w, h, built, delay = 0 }: {
  x: number; y: number; w: number; h: number; built: boolean; delay?: number;
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
      animate={{ opacity: built ? 1 : 0.08 }}
      transition={{ duration: 0.7, delay: delay + 0.4 }}
    >
      <rect x={x} y={y} width={w} height={h} rx={4}
        fill={built ? `${C.terrace}30` : "transparent"}
        stroke={C.terraceStroke} strokeWidth={0.5}
        strokeDasharray={built ? "6 3" : "4 4"} />
      {built && planks}
      <text x={x + w / 2} y={y + h / 2 + 2} textAnchor="middle"
        fill={C.text} fontSize={5} opacity={0.25} style={mono}>
        Terrace
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

/** Compass rose */
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
   CONSTRUCTION STEP INDICATOR , "Building Progress"
   ══════════════════════════════════════════════════════════════════ */
function ConstructionBadge({ step, total }: { step: number; total: number }) {
  const pct = ((step + 1) / total) * 100;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center gap-3"
    >
      {/* Progress ring */}
      <div className="relative w-10 h-10">
        <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
          <circle cx="18" cy="18" r="15" fill="none"
            stroke={`${C.text}15`} strokeWidth="2" />
          <motion.circle cx="18" cy="18" r="15" fill="none"
            stroke={C.accent} strokeWidth="2"
            strokeDasharray={`${pct} ${100 - pct}`}
            strokeLinecap="round"
            initial={{ strokeDasharray: "0 100" }}
            animate={{ strokeDasharray: `${pct} ${100 - pct}` }}
            transition={{ duration: 0.8, ease: EASE }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[9px]" style={{ ...mono, color: C.text, fontWeight: 500 }}>
            {step + 1}/{total}
          </span>
        </div>
      </div>
      <div>
        <p className="text-[9px] tracking-[0.2em] uppercase"
          style={{ ...body, fontWeight: 500, color: C.accent }}>
          Construction Phase
        </p>
        <p className="text-[8px] tracking-[0.1em] uppercase mt-0.5"
          style={{ ...mono, color: C.textMuted }}>
          {step === 0 ? "Foundation" : step === 1 ? "Expansion" : step === 2 ? "Compound" : "Estate"}
        </p>
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   THE FULL BLUEPRINT , All elements always present, visibility
   controlled by current step
   ══════════════════════════════════════════════════════════════════ */
function FullBlueprint({ step }: { step: number }) {
  // Step 0: tent only
  // Step 1: tent + connecting room (family)
  // Step 2: tent + living + ground floor (grand) , no connecting room
  // Step 3: 2 tents + 2 suites + living (residence)

  const isTent = step >= 0;
  const isFamily = step >= 1;
  const isGrand = step >= 2;
  const isResidence = step >= 3;

  // === LAYOUT COORDINATES ===
  // For steps 0-2, we use a left-to-right layout
  // For step 3 (residence), we use a symmetric layout

  if (isResidence) {
    // RESIDENCE: symmetric layout
    const lt = { x: 8, y: 55, w: 125, h: 120 };
    const ls = { x: lt.x + lt.w + 12, y: lt.y + 12, w: 95, h: 95 };
    const cv = { x: ls.x + ls.w + 12, y: lt.y - 25, w: 108, h: 165 };
    const rs = { x: cv.x + cv.w + 12, y: lt.y + 12, w: 95, h: 95 };
    const rt = { x: rs.x + rs.w + 12, y: lt.y, w: 125, h: 120 };

    return (
      <g>
        {/* Left tent */}
        <BuildTerrace x={lt.x - 28} y={lt.y + 10} w={24} h={80} built delay={0} />
        <BuildRoom path={rr(lt.x, lt.y, lt.w, lt.h, 6)} built delay={0} fill={`${C.paper}90`} />
        <BuildBed x={lt.x + 22} y={lt.y + 62} w={80} h={42} label="King" built delay={0.2} isKing />
        <BuildDaybed x={lt.x + 6} y={lt.y + 8} w={38} h={30} built delay={0.3} />
        <BuildDaybed x={lt.x + 80} y={lt.y + 8} w={38} h={30} built delay={0.35} />
        <BuildBath x={lt.x + lt.w - 48} y={lt.y + lt.h - 40} w={42} h={32} built delay={0.25} />
        <BuildDoor cx={lt.x + lt.w} cy={lt.y + lt.h / 2 - 5} r={9} startAngle={0} built delay={0.2} />
        <BuildPool cx={lt.x + lt.w / 2} cy={lt.y - 28} w={72} h={34} built delay={0.4} label="Plunge Pool" />

        {/* Left suite */}
        <BuildConnector x={lt.x + lt.w} y={lt.y + 38} w={12} h={18} built delay={0.45} />
        <BuildRoom path={rr(ls.x, ls.y, ls.w, ls.h, 5)} built delay={0.5} fill={`${C.paper}70`} />
        <BuildBed x={ls.x + 4} y={ls.y + 10} w={40} h={36} label="Queen" built delay={0.6} />
        <BuildBed x={ls.x + 50} y={ls.y + 10} w={40} h={36} label="Queen" built delay={0.65} />
        <BuildBath x={ls.x + 10} y={ls.y + ls.h - 35} w={40} h={28} built delay={0.55} />

        {/* Central living */}
        <BuildConnector x={ls.x + ls.w} y={ls.y + 28} w={12} h={18} built delay={0.55} />
        <BuildRoom path={rr(cv.x, cv.y, cv.w, cv.h, 6)} built delay={0.6} fill={`${C.living}15`} />
        <BuildLiving x={cv.x} y={cv.y} w={cv.w} h={cv.h} built delay={0.7} />

        {/* Right suite */}
        <BuildConnector x={cv.x + cv.w} y={rs.y + 28} w={12} h={18} built delay={0.65} />
        <BuildRoom path={rr(rs.x, rs.y, rs.w, rs.h, 5)} built delay={0.7} fill={`${C.paper}70`} />
        <BuildBed x={rs.x + 4} y={rs.y + 10} w={40} h={36} label="Queen" built delay={0.8} />
        <BuildBed x={rs.x + 50} y={rs.y + 10} w={40} h={36} label="Queen" built delay={0.85} />
        <BuildBath x={rs.x + 10} y={rs.y + rs.h - 35} w={40} h={28} built delay={0.75} />

        {/* Right tent */}
        <BuildConnector x={rs.x + rs.w} y={rt.y + 38} w={12} h={18} built delay={0.75} />
        <BuildRoom path={rr(rt.x, rt.y, rt.w, rt.h, 6)} built delay={0.8} fill={`${C.paper}90`} />
        <BuildBed x={rt.x + 22} y={rt.y + 62} w={80} h={42} label="King" built delay={0.9} isKing />
        <BuildDaybed x={rt.x + 6} y={rt.y + 8} w={38} h={30} built delay={0.95} />
        <BuildDaybed x={rt.x + 80} y={rt.y + 8} w={38} h={30} built delay={1.0} />
        <BuildBath x={rt.x + rt.w - 48} y={rt.y + rt.h - 40} w={42} h={32} built delay={0.85} />
        <BuildDoor cx={rt.x} cy={rt.y + rt.h / 2 - 5} r={9} startAngle={90} built delay={0.85} />
        <BuildPool cx={rt.x + rt.w / 2} cy={rt.y - 28} w={72} h={34} built delay={1.0} label="Plunge Pool" />
        <BuildTerrace x={rt.x + rt.w + 4} y={rt.y + 10} w={24} h={80} built delay={0.9} />

        {/* Infinity pool + fire pit */}
        <BuildPool cx={cv.x + cv.w / 2} cy={cv.y + cv.h + 35} w={105} h={38} built delay={1.2} label="Infinity Pool" />
        <BuildFirePit cx={cv.x + cv.w / 2 + 68} cy={cv.y + cv.h + 35} built delay={1.4} />

        {/* Labels */}
        <BuildLabel x={lt.x + lt.w / 2} y={lt.y + lt.h + 16} text="Tent A" sub="King + Daybeds" built delay={0.1} />
        <BuildLabel x={ls.x + ls.w / 2} y={ls.y + ls.h + 16} text="Suite A" sub="2 Queens" built delay={0.5} />
        <BuildLabel x={cv.x + cv.w / 2} y={cv.y - 14} text="Living & Kitchen" built delay={0.6} />
        <BuildLabel x={rs.x + rs.w / 2} y={rs.y + rs.h + 16} text="Suite B" sub="2 Queens" built delay={0.7} />
        <BuildLabel x={rt.x + rt.w / 2} y={rt.y + rt.h + 16} text="Tent B" sub="King + Daybeds" built delay={0.8} />

        {/* Vegetation */}
        <BuildTree cx={lt.x - 18} cy={lt.y - 15} r={9} built delay={0} />
        <BuildTree cx={rt.x + rt.w + 32} cy={rt.y - 10} r={8} built delay={0.1} />
        <BuildTree cx={lt.x - 15} cy={lt.y + lt.h + 5} r={6} built delay={0.15} />
        <BuildTree cx={rt.x + rt.w + 28} cy={rt.y + rt.h + 8} r={7} built delay={0.2} />
        <BuildTree cx={cv.x + cv.w / 2 - 50} cy={cv.y - 50} r={7} built delay={0.25} />
        <BuildTree cx={cv.x + cv.w / 2 + 50} cy={cv.y - 48} r={6} built delay={0.3} />
      </g>
    );
  }

  // STEPS 0-2: Progressive build
  // Base tent position
  const tx = 80, ty = 80, tw = 180, th = 170;
  // Connecting room (Family)
  const cx = tx + tw + 20, cy = ty + 15, cw = 140, ch = 130;
  // Living area (Grand) , between tent and ground floor
  const lx = tx + tw + 20, ly = ty - 15, lw = 130, lh = 170;
  // Ground floor (Grand)
  const dx = lx + lw + 18, dy = ty + 15, dw = 120, dh = 115;

  return (
    <g>
      {/* ── BASE TENT (always visible) ── */}
      <BuildTerrace x={tx - 32} y={ty + 15} w={28} h={110} built={isTent} delay={0.15} />
      <BuildRoom path={rr(tx, ty, tw, th, 8)} built={isTent} delay={0} fill={`${C.paper}90`} />
      <BuildBed x={tx + 50} y={ty + 95} w={80} h={58} label="King Bed" built={isTent} delay={0.3} isKing />
      <BuildDaybed x={tx + 12} y={ty + 18} w={50} h={40} built={isTent} delay={0.45} />
      <BuildDaybed x={tx + 118} y={ty + 18} w={50} h={40} built={isTent} delay={0.5} />
      <BuildBath x={tx + tw - 58} y={ty + th - 50} w={50} h={40} built={isTent} delay={0.35} />
      <BuildDoor cx={tx} cy={ty + th / 2} r={12} startAngle={-90} built={isTent} delay={0.25} />

      {/* Pool , upgrades to "oversized" at Grand */}
      <BuildPool
        cx={tx + tw / 2 + (isGrand ? 30 : 0)}
        cy={ty - 42}
        w={isGrand ? 130 : 95}
        h={isGrand ? 55 : 50}
        built={isTent}
        delay={0.55}
        label={isGrand ? "Oversized Hot Springs Pool" : "Hot Springs Plunge Pool"}
      />

      {/* ── CONNECTING ROOM (Family , step 1 only, not Grand) ── */}
      {!isGrand && (
        <>
          <BuildConnector x={tx + tw} y={ty + 55} w={20} h={26} built={isFamily} delay={0.6} />
          <BuildRoom path={rr(cx, cy, cw, ch, 6)} built={isFamily} delay={0.65} fill={`${C.paper}70`} />
          <BuildBed x={cx + 10} y={cy + 20} w={52} h={46} label="Queen" built={isFamily} delay={0.75} />
          <BuildBed x={cx + 76} y={cy + 20} w={52} h={46} label="Queen" built={isFamily} delay={0.8} />
          <BuildBath x={cx + 10} y={cy + ch - 40} w={48} h={32} built={isFamily} delay={0.7} />
          <BuildDoor cx={cx} cy={cy + ch / 2 - 8} r={10} startAngle={180} built={isFamily} delay={0.7} />
          <BuildLabel x={cx + cw / 2} y={cy + ch + 20} text="Connecting Room" sub="2 Queen Beds" built={isFamily} delay={0.65} />
        </>
      )}

      {/* ── LIVING AREA (Grand , step 2) ── */}
      {isGrand && (
        <>
          <BuildConnector x={tx + tw} y={ty + 45} w={20} h={24} built={isGrand} delay={0.55} />
          <BuildRoom path={rr(lx, ly, lw, lh, 6)} built={isGrand} delay={0.5} fill={`${C.living}15`} />
          <BuildLiving x={lx} y={ly} w={lw} h={lh} built={isGrand} delay={0.6} />
          <BuildLabel x={lx + lw / 2} y={ly - 18} text="Living & Kitchen" sub="Fully Equipped" built={isGrand} delay={0.5} />

          {/* Ground floor */}
          <BuildConnector x={lx + lw} y={ly + 55} w={18} h={22} built={isGrand} delay={0.65} />
          <BuildRoom path={rr(dx, dy, dw, dh, 6)} built={isGrand} delay={0.7} fill={`${C.paper}70`} />
          <BuildBed x={dx + 6} y={dy + 16} w={48} h={42} label="Queen" built={isGrand} delay={0.85} />
          <BuildBed x={dx + 66} y={dy + 16} w={48} h={42} label="Queen" built={isGrand} delay={0.9} />
          <BuildBath x={dx + 18} y={dy + dh - 36} w={44} h={28} built={isGrand} delay={0.8} />
          <BuildDoor cx={dx} cy={dy + dh / 2 - 8} r={10} startAngle={180} built={isGrand} delay={0.75} />
          <BuildLabel x={dx + dw / 2} y={dy + dh + 18} text="Ground Floor" sub="2 Queen Beds" built={isGrand} delay={0.7} />
          <BuildTerrace x={dx + dw + 6} y={dy + 8} w={22} h={78} built={isGrand} delay={0.8} />

          {/* Fire pit */}
          <BuildFirePit cx={lx + lw / 2} cy={ly + lh + 32} built={isGrand} delay={1.1} />
        </>
      )}

      {/* Labels */}
      <BuildLabel x={tx + tw / 2} y={ty + th + 22} text="Nayara Tent"
        sub={isGrand ? "Upper Level" : isFamily ? "Primary Suite" : "157.9 sqm · 1,700 sq ft"}
        built={isTent} delay={0.2} />

      {/* Vegetation */}
      <BuildTree cx={tx - 48} cy={ty - 18} r={10} built={isTent} delay={0} />
      <BuildTree cx={tx - 50} cy={ty + th + 10} r={7} built={isTent} delay={0.15} />
      {!isGrand && (
        <>
          <BuildTree cx={(isFamily ? cx + cw : tx + tw) + 28} cy={ty - 8} r={8} built={isTent} delay={0.1} />
          <BuildTree cx={(isFamily ? cx + cw : tx + tw) + 25} cy={ty + th + 5} r={7} built={isTent} delay={0.2} />
        </>
      )}
      {isGrand && (
        <>
          <BuildTree cx={dx + dw + 36} cy={dy - 8} r={8} built delay={0.1} />
          <BuildTree cx={dx + dw + 34} cy={dy + dh + 12} r={7} built delay={0.2} />
          <BuildTree cx={lx + lw / 2} cy={ly - 68} r={6} built delay={0.3} />
        </>
      )}
    </g>
  );
}

/* ══════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════════════ */
interface FloorPlanBuilderProps {
  maxStep?: number; // 0-3, limits which steps are available
  darkMode?: boolean;
}

export default function FloorPlanBuilder({
  maxStep = 3,
  darkMode = false,
}: FloorPlanBuilderProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const availableSteps = STEPS.filter((s) => s.id <= maxStep);
  const activeStep = STEPS[currentStep];

  const goNext = useCallback(() => {
    if (currentStep < maxStep) setCurrentStep((s) => s + 1);
  }, [currentStep, maxStep]);

  const goPrev = useCallback(() => {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  }, [currentStep]);

  // ViewBox morphing based on step
  const viewBoxes = [
    "-60 -100 480 350",    // tent
    "-40 -100 520 350",    // family
    "-40 -120 570 380",    // grand
    "-25 -70 640 320",     // residence
  ];

  const bg = darkMode ? C.bgDark : C.bg;
  const txt = darkMode ? C.bone : C.text;
  const muted = darkMode ? `${C.bone}60` : C.textMuted;
  const softTxt = darkMode ? `${C.bone}AA` : C.textSoft;

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
            Watch It Build
          </p>
          <h2 className="text-2xl md:text-4xl lg:text-[2.6rem]"
            style={{ ...display, color: txt }}>
            From Tent to Estate
          </h2>
          <p className="text-sm mt-3 max-w-md mx-auto"
            style={{ ...body, color: muted }}>
            Step through each tier and watch the blueprint construct itself
          </p>
        </motion.div>

        {/* Main layout: Blueprint + Narrative */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-start">

          {/* LEFT: SVG Blueprint */}
          <motion.div className="w-full lg:w-3/5 relative"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
            <div className="relative rounded-lg overflow-hidden border"
              style={{
                backgroundColor: darkMode ? C.paperDark : C.paper,
                borderColor: darkMode ? `${C.bone}15` : `${C.text}10`,
              }}>
              <AnimatePresence mode="wait">
                <motion.div key={currentStep}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}>
                  <svg viewBox={viewBoxes[currentStep]}
                    className="w-full" style={{ minHeight: "300px", maxHeight: "520px" }}
                    preserveAspectRatio="xMidYMid meet">
                    <Grid w={700} h={400} />
                    <Compass
                      x={currentStep === 3 ? 590 : currentStep === 2 ? 500 : 400}
                      y={currentStep === 3 ? -40 : -70} />
                    <FullBlueprint step={currentStep} />
                  </svg>
                </motion.div>
              </AnimatePresence>

              {/* Step navigation arrows */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <button
                  onClick={goPrev}
                  disabled={currentStep === 0}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-20"
                  style={{
                    backgroundColor: darkMode ? `${C.bone}15` : `${C.text}08`,
                    color: darkMode ? C.bone : C.text,
                  }}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                  </svg>
                </button>

                <ConstructionBadge step={currentStep} total={availableSteps.length} />

                <button
                  onClick={goNext}
                  disabled={currentStep >= maxStep}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-20"
                  style={{
                    backgroundColor: darkMode ? `${C.bone}15` : `${C.text}08`,
                    color: darkMode ? C.bone : C.text,
                  }}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>

              {/* Watermark */}
              <div className="absolute top-3 right-4 text-[8px] tracking-[0.4em] uppercase opacity-[0.06]"
                style={{ ...display, color: darkMode ? C.bone : C.text }}>
                Nayara Tented Camp
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Narrative + Timeline */}
          <motion.div className="w-full lg:w-2/5"
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }}>

            {/* Timeline stepper */}
            <div className="flex flex-col gap-0 mb-8">
              {availableSteps.map((step, i) => {
                const isActive = currentStep === step.id;
                const isPast = currentStep > step.id;
                return (
                  <div key={step.id} className="flex items-stretch gap-4">
                    {/* Timeline line + dot */}
                    <div className="flex flex-col items-center w-6 shrink-0">
                      <motion.div
                        className="w-3 h-3 rounded-full border-2 shrink-0 z-10"
                        animate={{
                          backgroundColor: isActive ? C.accentDark : isPast ? C.accent : "transparent",
                          borderColor: isActive ? C.accentDark : isPast ? C.accent : (darkMode ? `${C.bone}40` : `${C.text}25`),
                          scale: isActive ? 1.3 : 1,
                        }}
                        transition={{ duration: 0.4 }}
                      />
                      {i < availableSteps.length - 1 && (
                        <motion.div
                          className="w-px flex-1 min-h-[24px]"
                          animate={{
                            backgroundColor: isPast ? C.accent : (darkMode ? `${C.bone}20` : `${C.text}12`),
                          }}
                          transition={{ duration: 0.4 }}
                        />
                      )}
                    </div>
                    {/* Step label */}
                    <button
                      onClick={() => setCurrentStep(step.id)}
                      className={`text-left pb-5 transition-all duration-300 ${isActive ? "" : "opacity-40 hover:opacity-70"}`}
                    >
                      <p className="text-[10px] tracking-[0.15em] uppercase"
                        style={{ ...body, fontWeight: 600, color: isActive ? (darkMode ? C.bone : C.accentDark) : muted }}>
                        {step.subtitle}
                      </p>
                      <p className="text-sm mt-0.5"
                        style={{ ...display, color: isActive ? txt : muted }}>
                        {step.title}
                      </p>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Active step narrative */}
            <AnimatePresence mode="wait">
              <motion.div key={currentStep}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}>

                <h3 className="text-2xl md:text-3xl mb-2"
                  style={{ ...display, color: txt }}>
                  {activeStep.title}
                </h3>
                <p className="text-[10px] tracking-[0.15em] uppercase mb-4"
                  style={{ ...body, fontWeight: 500, color: darkMode ? `${C.bone}70` : C.accent }}>
                  {activeStep.subtitle}
                </p>
                <p className="text-sm leading-relaxed mb-6"
                  style={{ ...body, color: softTxt }}>
                  {activeStep.narrative}
                </p>

                {/* Stats */}
                <div className="flex gap-8 mb-6">
                  <div>
                    <p className="text-xl md:text-2xl" style={{ ...display, color: C.accent }}>
                      {activeStep.sqft}
                    </p>
                    <p className="text-[9px] tracking-[0.15em] uppercase mt-0.5"
                      style={{ ...body, fontWeight: 500, color: muted }}>Sq. Ft.</p>
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl" style={{ ...display, color: C.accent }}>
                      {activeStep.sqm}
                    </p>
                    <p className="text-[9px] tracking-[0.15em] uppercase mt-0.5"
                      style={{ ...body, fontWeight: 500, color: muted }}>Sq. M.</p>
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl" style={{ ...display, color: C.accent }}>
                      {activeStep.guests.split(" ")[0] === "Up" ? "12" : activeStep.guests.split(" ")[0]}
                    </p>
                    <p className="text-[9px] tracking-[0.15em] uppercase mt-0.5"
                      style={{ ...body, fontWeight: 500, color: muted }}>Guests</p>
                  </div>
                </div>

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
