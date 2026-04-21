/**
 * NAYARA JOURNEY MAP
 * An illustrated SVG map of the Americas + Pacific showing the expansion
 * of Nayara Resorts across 4 locations (Costa Rica, Chile/Atacama,
 * Easter Island, Panama/Bocas del Toro).
 *
 * Integrated with the timeline: as the active milestone index changes,
 * the corresponding location lights up and a dotted flight path animates
 * to the next destination.
 *
 * Desktop only. Editorial cartography aesthetic.
 */

import { useMemo } from "react";
import { motion } from "framer-motion";

/* ─── Location data ─── */
interface MapLocation {
  id: string;
  label: string;
  subLabel: string;
  /** SVG viewBox coordinates */
  x: number;
  y: number;
  /** Which milestone indices activate this location */
  milestoneIndices: number[];
  /** Label placement */
  labelSide: "right" | "left" | "below";
}

/*
 * SVG viewBox: 0 0 800 680
 * More zoomed-in on Central/South America + Pacific
 */
const locations: MapLocation[] = [
  {
    id: "costa-rica",
    label: "Arenal, Costa Rica",
    subLabel: "Gardens · Springs · Tented Camp",
    x: 470,
    y: 175,
    milestoneIndices: [0, 1, 2], // 2005, 2015, 2019
    labelSide: "right",
  },
  {
    id: "atacama",
    label: "Atacama Desert, Chile",
    subLabel: "Alto Atacama",
    x: 500,
    y: 490,
    milestoneIndices: [3], // 2020
    labelSide: "right",
  },
  {
    id: "easter-island",
    label: "Easter Island",
    subLabel: "Hangaroa",
    x: 200,
    y: 500,
    milestoneIndices: [4], // 2022
    labelSide: "left",
  },
  {
    id: "bocas",
    label: "Bocas del Toro, Panama",
    subLabel: "Bocas del Toro",
    x: 490,
    y: 200,
    milestoneIndices: [5], // 2025
    labelSide: "right",
  },
];

/* Flight path order: Costa Rica → Atacama → Easter Island → Bocas */
const flightPathOrder = ["costa-rica", "atacama", "easter-island", "bocas"];

/* ─── More detailed continent outlines ─── */

/* Mexico / Central America — from southern Mexico down through the isthmus */
const centralAmericaOutline = `
  M 380,100 L 395,105 L 410,108 L 420,112 L 430,118 L 438,126
  L 442,135 L 448,142 L 455,148 L 460,155 L 465,162 L 468,170
  L 472,178 L 475,186 L 480,192 L 486,198 L 492,204 L 498,210
  L 502,218 L 505,226 L 508,234 L 510,240
`;

/* South America — full outline */
const southAmericaOutline = `
  M 510,240 L 518,245 L 528,248 L 540,250 L 555,252 L 570,255
  L 585,260 L 598,268 L 608,278 L 615,290 L 618,305 L 616,320
  L 610,335 L 604,350 L 598,365 L 592,380 L 586,395 L 580,410
  L 575,425 L 570,440 L 565,455 L 558,470 L 552,485 L 548,500
  L 545,515 L 540,530 L 535,545 L 528,558 L 520,568 L 512,575
  L 506,582 L 500,590 L 496,598 L 500,605 L 508,612 L 516,618
  L 520,625 L 516,632 L 508,636 L 500,634 L 494,628 L 488,618
  L 482,608 L 478,598 L 474,588 L 470,578 L 466,568 L 464,558
  L 462,548 L 460,538 L 462,528 L 465,518 L 468,508 L 470,498
  L 472,488 L 476,478 L 480,468 L 484,458 L 488,448 L 490,438
  L 492,428 L 494,418 L 496,408 L 498,398 L 500,388 L 502,378
  L 504,368 L 506,358 L 508,348 L 510,338 L 512,328 L 514,318
  L 516,308 L 518,298 L 520,288 L 522,278 L 524,268 L 522,258
  L 518,250 L 512,244 L 510,240
`;

/* Western coast of Mexico (just the bottom portion visible) */
const mexicoWestCoast = `
  M 380,100 L 375,95 L 370,88 L 368,80 L 372,72 L 380,66
  L 390,62 L 400,58 L 410,55 L 420,52 L 430,50 L 440,48
`;

/* Caribbean islands (simplified dots/shapes) */
const caribbeanIslands = `
  M 530,155 L 535,152 L 540,155 L 535,158 Z
  M 545,160 L 550,157 L 555,160 L 550,163 Z
  M 560,165 L 565,162 L 570,165 L 565,168 Z
  M 575,170 L 580,167 L 585,170 L 580,173 Z
`;

/* ─── Helpers ─── */
function getLocationById(id: string) {
  return locations.find((l) => l.id === id);
}

function generateCurvedPath(from: MapLocation, to: MapLocation): string {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const dist = Math.sqrt(dx * dx + dy * dy);
  // Bigger arc for longer distances (Easter Island flight)
  const curveFactor = dist > 250 ? 0.4 : 0.25;
  const cx = (from.x + to.x) / 2 - dy * curveFactor;
  const cy = (from.y + to.y) / 2 + dx * 0.1;
  return `M ${from.x} ${from.y} Q ${cx} ${cy} ${to.x} ${to.y}`;
}

/* ─── Easing ─── */
const EASE_MAP = [0.25, 0.8, 0.25, 1] as const;

/* ─── Component ─── */
interface NayaraJourneyMapProps {
  activeMilestoneIndex: number;
}

export default function NayaraJourneyMap({ activeMilestoneIndex }: NayaraJourneyMapProps) {
  /* Which locations are "lit" — accumulates as you scroll */
  const activeLocationIds = useMemo(() => {
    const ids = new Set<string>();
    locations.forEach((loc) => {
      if (loc.milestoneIndices.some((mi) => mi <= activeMilestoneIndex)) {
        ids.add(loc.id);
      }
    });
    return ids;
  }, [activeMilestoneIndex]);

  /* Which flight paths are visible */
  const activeFlightPaths = useMemo(() => {
    const paths: { from: string; to: string; path: string }[] = [];
    for (let i = 1; i < flightPathOrder.length; i++) {
      const fromLoc = getLocationById(flightPathOrder[i - 1]);
      const toLoc = getLocationById(flightPathOrder[i]);
      if (!fromLoc || !toLoc) continue;
      if (activeLocationIds.has(toLoc.id)) {
        paths.push({
          from: fromLoc.id,
          to: toLoc.id,
          path: generateCurvedPath(fromLoc, toLoc),
        });
      }
    }
    return paths;
  }, [activeLocationIds]);

  /* Currently highlighted location */
  const currentLocationId = useMemo(() => {
    for (const loc of locations) {
      if (loc.milestoneIndices.includes(activeMilestoneIndex)) {
        return loc.id;
      }
    }
    return null;
  }, [activeMilestoneIndex]);

  return (
    <div className="relative w-full" style={{ aspectRatio: "800/680" }}>
      <svg
        viewBox="0 0 800 680"
        className="w-full h-full"
        style={{ overflow: "visible" }}
      >
        <defs>
          {/* Glow for active pins */}
          <filter id="pinGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Warm gold gradient for active flight paths */}
          <linearGradient id="flightGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B7355" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#8B7355" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8B7355" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* ─── Subtle latitude lines ─── */}
        {[120, 220, 320, 420, 520, 620].map((y) => (
          <line
            key={`lat-${y}`}
            x1="0"
            y1={y}
            x2="800"
            y2={y}
            stroke="#3B2B26"
            strokeOpacity="0.04"
            strokeWidth="0.5"
            strokeDasharray="2 8"
          />
        ))}
        {[100, 200, 300, 400, 500, 600, 700].map((x) => (
          <line
            key={`lng-${x}`}
            x1={x}
            y1="0"
            x2={x}
            y2="680"
            stroke="#3B2B26"
            strokeOpacity="0.04"
            strokeWidth="0.5"
            strokeDasharray="2 8"
          />
        ))}

        {/* ─── Continent fills (very subtle warm tone) ─── */}
        <g opacity="0.06">
          <path d={`${centralAmericaOutline} ${southAmericaOutline}`} fill="#5a4a3a" />
          <path d={mexicoWestCoast} fill="none" />
        </g>

        {/* ─── Continent outlines ─── */}
        <g>
          <path
            d={mexicoWestCoast}
            fill="none"
            stroke="#5a4a3a"
            strokeWidth="1.2"
            strokeOpacity="0.2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            d={centralAmericaOutline}
            fill="none"
            stroke="#5a4a3a"
            strokeWidth="1.4"
            strokeOpacity="0.25"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            d={southAmericaOutline}
            fill="none"
            stroke="#5a4a3a"
            strokeWidth="1.4"
            strokeOpacity="0.25"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          {/* Caribbean islands */}
          <path
            d={caribbeanIslands}
            fill="#5a4a3a"
            fillOpacity="0.15"
            stroke="#5a4a3a"
            strokeWidth="0.5"
            strokeOpacity="0.2"
          />
        </g>

        {/* ─── Ocean labels ─── */}
        <text
          x="140"
          y="380"
          fill="#3B2B26"
          fillOpacity="0.1"
          fontSize="13"
          fontFamily="var(--font-display)"
          fontWeight="300"
          letterSpacing="0.5em"
          transform="rotate(-12, 140, 380)"
        >
          PACIFIC OCEAN
        </text>

        <text
          x="560"
          y="160"
          fill="#3B2B26"
          fillOpacity="0.08"
          fontSize="9"
          fontFamily="var(--font-display)"
          fontWeight="300"
          letterSpacing="0.35em"
        >
          CARIBBEAN SEA
        </text>

        <text
          x="620"
          y="400"
          fill="#3B2B26"
          fillOpacity="0.08"
          fontSize="10"
          fontFamily="var(--font-display)"
          fontWeight="300"
          letterSpacing="0.4em"
          transform="rotate(-80, 620, 400)"
        >
          ATLANTIC
        </text>

        {/* ─── Flight paths ─── */}
        {activeFlightPaths.map((fp) => (
          <g key={`${fp.from}-${fp.to}`}>
            {/* Shadow path */}
            <motion.path
              d={fp.path}
              fill="none"
              stroke="#8B7355"
              strokeWidth="1.5"
              strokeDasharray="8 5"
              strokeOpacity="0.15"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: { duration: 2, ease: EASE_MAP, delay: 0.3 },
                opacity: { duration: 0.5, delay: 0.2 },
              }}
            />
            {/* Main path */}
            <motion.path
              d={fp.path}
              fill="none"
              stroke="#5a4a3a"
              strokeWidth="1"
              strokeDasharray="6 4"
              strokeOpacity="0.35"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: { duration: 2, ease: EASE_MAP, delay: 0.3 },
                opacity: { duration: 0.5, delay: 0.2 },
              }}
            />
          </g>
        ))}

        {/* ─── Location pins ─── */}
        {locations.map((loc) => {
          const isActive = activeLocationIds.has(loc.id);
          const isCurrent = currentLocationId === loc.id;

          /* Label positioning */
          const labelX =
            loc.labelSide === "left" ? loc.x - 145 : loc.x + 16;
          const labelY = loc.y - 16;

          return (
            <g key={loc.id}>
              {/* Outer pulse ring for current location */}
              {isCurrent && (
                <>
                  <motion.circle
                    cx={loc.x}
                    cy={loc.y}
                    r="16"
                    fill="none"
                    stroke="#8B7355"
                    strokeWidth="0.8"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                      opacity: [0, 0.4, 0],
                      scale: [0.5, 1.5, 2.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                    style={{ transformOrigin: `${loc.x}px ${loc.y}px` }}
                  />
                  <motion.circle
                    cx={loc.x}
                    cy={loc.y}
                    r="10"
                    fill="none"
                    stroke="#8B7355"
                    strokeWidth="0.5"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: [0, 0.25, 0],
                      scale: [0.8, 1.3, 1.8],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: 0.5,
                    }}
                    style={{ transformOrigin: `${loc.x}px ${loc.y}px` }}
                  />
                </>
              )}

              {/* Pin dot */}
              <motion.circle
                cx={loc.x}
                cy={loc.y}
                r={isCurrent ? 5.5 : 4}
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isActive
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0.12, scale: 0.5 }
                }
                transition={{
                  duration: 0.8,
                  ease: EASE_MAP,
                }}
                fill={isCurrent ? "#5a3a1a" : "#5a4a3a"}
                filter={isCurrent ? "url(#pinGlow)" : undefined}
              />

              {/* Inner highlight dot */}
              {isActive && (
                <motion.circle
                  cx={loc.x}
                  cy={loc.y}
                  r="1.5"
                  fill="#f7f5f0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                />
              )}

              {/* Label */}
              <motion.g
                initial={{ opacity: 0, x: loc.labelSide === "left" ? 8 : -8 }}
                animate={
                  isActive
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: loc.labelSide === "left" ? 8 : -8 }
                }
                transition={{ duration: 0.6, ease: EASE_MAP, delay: 0.3 }}
              >
                {/* Label background */}
                <rect
                  x={labelX - 4}
                  y={labelY - 2}
                  width="140"
                  height="32"
                  rx="2"
                  fill="#f7f5f0"
                  fillOpacity="0.9"
                />
                <text
                  x={labelX}
                  y={labelY + 11}
                  fill="#3a2a1a"
                  fontSize="9.5"
                  fontFamily="var(--font-display)"
                  fontWeight="500"
                  letterSpacing="0.04em"
                >
                  {loc.label}
                </text>
                <text
                  x={labelX}
                  y={labelY + 24}
                  fill="#3a2a1a"
                  fillOpacity="0.45"
                  fontSize="7.5"
                  fontFamily="var(--font-body)"
                  fontWeight="400"
                  letterSpacing="0.02em"
                >
                  {loc.subLabel}
                </text>
              </motion.g>
            </g>
          );
        })}

        {/* ─── Compass rose ─── */}
        <g transform="translate(740, 70)" opacity="0.15">
          <line x1="0" y1="-22" x2="0" y2="22" stroke="#3B2B26" strokeWidth="0.8" />
          <line x1="-22" y1="0" x2="22" y2="0" stroke="#3B2B26" strokeWidth="0.8" />
          {/* Arrow head */}
          <polygon points="0,-22 -3,-16 3,-16" fill="#3B2B26" />
          <text
            x="0"
            y="-28"
            textAnchor="middle"
            fill="#3B2B26"
            fontSize="9"
            fontFamily="var(--font-display)"
            fontWeight="400"
            letterSpacing="0.15em"
          >
            N
          </text>
        </g>

        {/* ─── Scale bar ─── */}
        <g transform="translate(640, 640)" opacity="0.12">
          <line x1="0" y1="0" x2="80" y2="0" stroke="#3B2B26" strokeWidth="0.8" />
          <line x1="0" y1="-3" x2="0" y2="3" stroke="#3B2B26" strokeWidth="0.8" />
          <line x1="80" y1="-3" x2="80" y2="3" stroke="#3B2B26" strokeWidth="0.8" />
          <text
            x="40"
            y="14"
            textAnchor="middle"
            fill="#3B2B26"
            fontSize="7"
            fontFamily="var(--font-body)"
            letterSpacing="0.1em"
          >
            1000 km
          </text>
        </g>
      </svg>
    </div>
  );
}
