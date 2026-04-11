/**
 * VineAnimation — Scroll-driven botanical vine
 *
 * The signature animation of the Tented Camp page.
 * A living vine that grows down the page as you scroll,
 * winding organically left and right through the cascade sections.
 * Starts below the first story row as a surprise reveal.
 *
 * Architecture:
 * - Absolute SVG overlay positioned from S2 downward
 * - Main stem drawn with stroke-dashoffset tied to scroll
 * - Leaves positioned along the path, appearing as the vine reaches them
 * - Tendrils curl off at intervals for organic feel
 * - Seeded random for deterministic layout across reloads
 * - All animations are scroll-driven (no timers)
 */
import { useEffect, useRef, useState, useCallback } from "react";

/* ═══════════════════════════════════════════════════════════════
   SEEDED RANDOM — deterministic across page loads
   ═══════════════════════════════════════════════════════════════ */
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

/* ═══════════════════════════════════════════════════════════════
   BOTANICAL SHAPES — Hand-crafted leaf SVG paths (2x scale)
   ═══════════════════════════════════════════════════════════════ */
const LEAVES = [
  // Broad tropical leaf
  "M0,0 C8,-10 20,-24 14,-40 C8,-50 -8,-50 -14,-40 C-20,-24 -8,-10 0,0Z",
  // Wide oval leaf
  "M0,0 C12,-8 28,-20 22,-38 C16,-48 -16,-48 -22,-38 C-28,-20 -12,-8 0,0Z",
  // Slender pointed leaf
  "M0,0 C4,-8 10,-20 7,-36 C4,-44 -4,-44 -7,-36 C-10,-20 -4,-8 0,0Z",
  // Heart-shaped leaf
  "M0,0 C10,-12 22,-24 16,-40 C10,-50 0,-44 0,-36 C0,-44 -10,-50 -16,-40 C-22,-24 -10,-12 0,0Z",
  // Round tropical leaf
  "M0,0 C10,-6 24,-16 20,-34 C16,-44 -16,-44 -20,-34 C-24,-16 -10,-6 0,0Z",
];

interface VineLeaf {
  pathProgress: number;
  rotation: number;
  scale: number;
  shapeIdx: number;
  offsetX: number;
  offsetY: number;
  delay: number;
}

interface VineTendril {
  pathProgress: number;
  direction: number;
  length: number;
  curl: number;
}

/* ═══════════════════════════════════════════════════════════════
   VINE PATH — Organic serpentine with seeded randomness
   ═══════════════════════════════════════════════════════════════ */
function buildVinePath(height: number, width: number, rand: () => number): string {
  const startX = width * 0.12;
  const parts: string[] = [`M ${startX} 0`];

  const segCount = Math.max(12, Math.floor(height / 300));
  const segH = height / segCount;
  const centerX = width * 0.5;
  const maxSwing = width * 0.3;

  let prevX = startX;
  let goRight = true;

  for (let i = 0; i < segCount; i++) {
    const y0 = i * segH;
    const y1 = (i + 1) * segH;

    const swingAmount = 0.4 + rand() * 0.6;
    const swing = maxSwing * swingAmount;
    const drift = (rand() - 0.5) * width * 0.08;
    const targetX = goRight
      ? Math.min(width * 0.85, centerX + drift + swing)
      : Math.max(width * 0.15, centerX + drift - swing);

    const cpSpread = 0.15 + rand() * 0.2;
    const cpHeight1 = 0.25 + rand() * 0.15;
    const cpHeight2 = 0.6 + rand() * 0.15;

    const cp1x = prevX + (targetX - prevX) * cpSpread;
    const cp1y = y0 + segH * cpHeight1;
    const cp2x = targetX - (targetX - prevX) * cpSpread;
    const cp2y = y0 + segH * cpHeight2;

    parts.push(`C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${targetX.toFixed(1)} ${y1.toFixed(1)}`);

    prevX = targetX;
    if (rand() > 0.85) {
      /* same direction for asymmetry */
    } else {
      goRight = !goRight;
    }
  }

  return parts.join(" ");
}

/* ═══════════════════════════════════════════════════════════════
   LEAF & TENDRIL GENERATORS
   ═══════════════════════════════════════════════════════════════ */
function buildLeaves(count: number, rand: () => number): VineLeaf[] {
  const out: VineLeaf[] = [];
  for (let i = 0; i < count; i++) {
    const progress = (i + 0.2 + rand() * 0.6) / count;
    const side = rand() > 0.5 ? 1 : -1;
    out.push({
      pathProgress: Math.min(0.98, progress),
      rotation: side * (25 + rand() * 55) + (rand() - 0.5) * 15,
      scale: 3.0 + rand() * 2.0,
      shapeIdx: Math.floor(rand() * LEAVES.length),
      offsetX: side * (10 + rand() * 18),
      offsetY: (rand() - 0.5) * 12,
      delay: rand() * 80,
    });
  }
  return out;
}

function buildTendrils(count: number, rand: () => number): VineTendril[] {
  const out: VineTendril[] = [];
  for (let i = 0; i < count; i++) {
    const progress = (i + 0.3 + rand() * 0.4) / count;
    out.push({
      pathProgress: Math.min(0.97, progress),
      direction: rand() > 0.5 ? 1 : -1,
      length: 20 + rand() * 35,
      curl: 10 + rand() * 20,
    });
  }
  return out;
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */
export default function VineAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainPathRef = useRef<SVGPathElement>(null);
  const [vinePath, setVinePath] = useState("");
  const [pathLength, setPathLength] = useState(0);
  const [leaves, setLeaves] = useState<VineLeaf[]>([]);
  const [tendrils, setTendrils] = useState<VineTendril[]>([]);
  const [leafPositions, setLeafPositions] = useState<{ x: number; y: number }[]>([]);
  const [tendrilPositions, setTendrilPositions] = useState<{ x: number; y: number }[]>([]);
  const [drawLength, setDrawLength] = useState(0);
  const [dims, setDims] = useState({ w: 0, h: 0, top: 0 });
  const rafRef = useRef(0);
  const initRef = useRef(false);

  const measure = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;

    const w = parent.offsetWidth;
    const totalH = parent.scrollHeight;
    if (w === 0 || totalH === 0) return;

    const vineTop = window.innerHeight + 700;
    const vineH = totalH - vineTop;
    if (vineH <= 200) return;

    setDims({ w, h: vineH, top: vineTop });

    if (!initRef.current) {
      const rand = seededRandom(42);
      setVinePath(buildVinePath(vineH, w, rand));
      setLeaves(buildLeaves(55, rand));
      setTendrils(buildTendrils(20, rand));
      initRef.current = true;
    }
  }, []);

  useEffect(() => {
    const t = setTimeout(measure, 800);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  useEffect(() => {
    const path = mainPathRef.current;
    if (!path || !vinePath) return;

    const len = path.getTotalLength();
    setPathLength(len);

    const lPos = leaves.map((leaf) => {
      const pt = path.getPointAtLength(leaf.pathProgress * len);
      return { x: pt.x + leaf.offsetX, y: pt.y + leaf.offsetY };
    });
    setLeafPositions(lPos);

    const tPos = tendrils.map((t) => {
      const pt = path.getPointAtLength(t.pathProgress * len);
      return { x: pt.x, y: pt.y };
    });
    setTendrilPositions(tPos);
  }, [vinePath, leaves, tendrils]);

  useEffect(() => {
    if (pathLength === 0) return;

    function onScroll() {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const vh = window.innerHeight;

        // The vine should grow so it stays ~1 viewport ahead of scroll
        // Map scroll position within the vine area to path progress
        const drawStart = dims.top - vh; // start drawing when vine area enters viewport
        const drawEnd = dims.top + dims.h - vh; // finish when bottom of vine area is at top of viewport
        const range = drawEnd - drawStart;
        if (range <= 0) return;

        const progress = Math.max(0, Math.min(1, (scrollY - drawStart) / range));
        
        // Lead factor: vine tip stays ~1.3 viewports ahead of scroll position
        // This means the vine is always growing into view before you reach it
        const leadFactor = 1.3;
        const adjustedProgress = Math.min(1, progress * leadFactor);

        // Use a very gentle ease — mostly linear with slight ease-out at end
        // This keeps early growth visible and responsive
        const eased = adjustedProgress < 0.8
          ? adjustedProgress  // linear for first 80%
          : 0.8 + 0.2 * (1 - Math.pow(1 - (adjustedProgress - 0.8) / 0.2, 2)); // ease-out for last 20%

        setDrawLength(eased * pathLength);
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [pathLength, dims]);

  if (!vinePath || dims.w === 0) {
    return <div ref={containerRef} className="absolute inset-0 pointer-events-none" />;
  }

  const hidden = pathLength - drawLength;

  return (
    <div
      ref={containerRef}
      className="absolute left-0 right-0 pointer-events-none"
      style={{
        top: dims.top,
        height: dims.h,
        zIndex: 1,
        overflow: "visible",
      }}
    >
      <svg
        width={dims.w}
        height={dims.h}
        viewBox={`0 0 ${dims.w} ${dims.h}`}
        className="absolute top-0 left-0"
        style={{ overflow: "visible" }}
      >
        <defs>
          <linearGradient id="vineStroke" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4A7A3D" />
            <stop offset="50%" stopColor="#3D6B35" />
            <stop offset="100%" stopColor="#2D5A25" />
          </linearGradient>

          <linearGradient id="leafFill1" x1="0" y1="0" x2="0.3" y2="1">
            <stop offset="0%" stopColor="#7CB668" />
            <stop offset="100%" stopColor="#4A8A3D" />
          </linearGradient>
          <linearGradient id="leafFill2" x1="0" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor="#6AA858" />
            <stop offset="100%" stopColor="#3D7B35" />
          </linearGradient>
          <linearGradient id="leafFill3" x1="0.2" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8CC47A" />
            <stop offset="100%" stopColor="#5A9F4A" />
          </linearGradient>

          <filter id="stemShadow" x="-20%" y="-5%" width="140%" height="110%">
            <feDropShadow dx="1" dy="2" stdDeviation="2.5" floodColor="#1a3010" floodOpacity="0.18" />
          </filter>

          <filter id="leafShadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="#1a3010" floodOpacity="0.18" />
          </filter>
        </defs>

        {/* Shadow layer */}
        <path
          d={vinePath}
          fill="none"
          stroke="rgba(30, 60, 20, 0.08)"
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray={pathLength}
          strokeDashoffset={hidden}
        />

        {/* Main stem */}
        <path
          ref={mainPathRef}
          d={vinePath}
          fill="none"
          stroke="url(#vineStroke)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={pathLength}
          strokeDashoffset={hidden}
          filter="url(#stemShadow)"
        />

        {/* Highlight */}
        <path
          d={vinePath}
          fill="none"
          stroke="rgba(120, 180, 90, 0.2)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={pathLength}
          strokeDashoffset={hidden}
        />

        {/* Tendrils */}
        {tendrils.map((t, i) => {
          const pos = tendrilPositions[i];
          if (!pos) return null;

          const tendrilThreshold = t.pathProgress * pathLength;
          const isRevealed = drawLength >= tendrilThreshold;
          const fadeIn = isRevealed
            ? Math.min(1, (drawLength - tendrilThreshold) / 250)
            : 0;

          const d = t.direction;
          const l = t.length;
          const c = t.curl;

          return (
            <path
              key={`tendril-${i}`}
              d={`M ${pos.x} ${pos.y} 
                  q ${d * l * 0.4} ${-l * 0.15}, ${d * l * 0.65} ${-l * 0.05}
                  q ${d * c * 0.3} ${-c * 0.4}, ${d * c * 0.15} ${-c * 0.7}
                  q ${d * -c * 0.15} ${-c * 0.25}, ${d * -c * 0.35} ${-c * 0.05}
                  q ${d * -c * 0.1} ${c * 0.1}, ${d * -c * 0.08} ${c * 0.2}`}
              fill="none"
              stroke="#4A7A3D"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity={fadeIn * 0.45}
            />
          );
        })}

        {/* Leaves */}
        {leaves.map((leaf, i) => {
          const pos = leafPositions[i];
          if (!pos) return null;

          const leafThreshold = leaf.pathProgress * pathLength;
          const isRevealed = drawLength >= leafThreshold + leaf.delay;
          const growProgress = isRevealed
            ? Math.min(1, (drawLength - leafThreshold - leaf.delay) / 200)
            : 0;

          const eased = growProgress < 0.5
            ? 4 * growProgress * growProgress * growProgress
            : 1 - Math.pow(-2 * growProgress + 2, 3) / 2;

          const s = leaf.scale * eased;
          if (s < 0.05) return null;

          const fillId = `leafFill${(i % 3) + 1}`;
          const swayAngle = Math.sin(leaf.pathProgress * 12) * 5;

          return (
            <g
              key={`leaf-${i}`}
              transform={`translate(${pos.x}, ${pos.y}) rotate(${leaf.rotation + swayAngle}) scale(${s})`}
              opacity={eased * 0.9}
              filter="url(#leafShadow)"
            >
              <path
                d={LEAVES[leaf.shapeIdx]}
                fill={`url(#${fillId})`}
                stroke="#2D5A25"
                strokeWidth="0.8"
                opacity="0.95"
              />
              {/* Central midrib */}
              <line
                x1="0" y1="-3"
                x2="0" y2="-32"
                stroke="#3D6B35" strokeWidth="0.5" opacity="0.45"
              />
              {/* Side veins */}
              <line
                x1="0" y1="-12"
                x2="6" y2="-18"
                stroke="#3D6B35" strokeWidth="0.35" opacity="0.3"
              />
              <line
                x1="0" y1="-12"
                x2="-6" y2="-18"
                stroke="#3D6B35" strokeWidth="0.35" opacity="0.3"
              />
              <line
                x1="0" y1="-22"
                x2="5" y2="-27"
                stroke="#3D6B35" strokeWidth="0.3" opacity="0.25"
              />
              <line
                x1="0" y1="-22"
                x2="-5" y2="-27"
                stroke="#3D6B35" strokeWidth="0.3" opacity="0.25"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
