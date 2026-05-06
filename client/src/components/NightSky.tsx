import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  r: number;
  baseAlpha: number;
  alpha: number;
  speed: number;
  phase: number;
  color: string;
}

const STAR_COLORS = [
  "#ffffff",
  "#ffe9c4", // warm white
  "#c8d8ff", // blue-white
  "#ffd6d6", // faint red
  "#e8f0ff", // cool white
];

export default function NightSky({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const starsRef = useRef<Star[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initStars();
    };

    const initStars = () => {
      const w = canvas.width;
      const h = canvas.height;
      const stars: Star[] = [];
      const count = Math.floor((w * h) / 1800); // density scales with area

      // Regular field stars
      for (let i = 0; i < count; i++) {
        const r = Math.random() < 0.04 ? 1.8 + Math.random() * 1.2 // bright hero stars
          : Math.random() < 0.2 ? 1.0 + Math.random() * 0.6   // medium stars
          : 0.3 + Math.random() * 0.5;                          // dim field stars
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r,
          baseAlpha: 0.3 + Math.random() * 0.7,
          alpha: 0.3 + Math.random() * 0.7,
          speed: 0.3 + Math.random() * 1.2,
          phase: Math.random() * Math.PI * 2,
          color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
        });
      }

      // Extra dense cluster along a Milky Way diagonal band
      const bandCount = Math.floor(count * 0.6);
      for (let i = 0; i < bandCount; i++) {
        // Band runs diagonally from top-right to bottom-left
        const t = Math.random();
        const bandX = w * 0.85 - t * w * 0.7 + (Math.random() - 0.5) * w * 0.35;
        const bandY = t * h + (Math.random() - 0.5) * h * 0.25;
        if (bandX < 0 || bandX > w || bandY < 0 || bandY > h) continue;
        stars.push({
          x: bandX,
          y: bandY,
          r: 0.2 + Math.random() * 0.5,
          baseAlpha: 0.15 + Math.random() * 0.45,
          alpha: 0.15 + Math.random() * 0.45,
          speed: 0.2 + Math.random() * 0.8,
          phase: Math.random() * Math.PI * 2,
          color: Math.random() < 0.3 ? "#c8d8ff" : "#ffffff",
        });
      }

      starsRef.current = stars;
    };

    const drawMilkyWay = (w: number, h: number) => {
      // Soft nebula glow along the diagonal band
      const grad = ctx.createLinearGradient(w * 0.85, 0, w * 0.15, h);
      grad.addColorStop(0, "rgba(120, 100, 200, 0.0)");
      grad.addColorStop(0.2, "rgba(100, 80, 180, 0.06)");
      grad.addColorStop(0.4, "rgba(140, 110, 220, 0.09)");
      grad.addColorStop(0.6, "rgba(100, 80, 180, 0.07)");
      grad.addColorStop(0.8, "rgba(80, 60, 160, 0.04)");
      grad.addColorStop(1, "rgba(60, 40, 140, 0.0)");

      ctx.save();
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Second pass , warm dust lane
      const grad2 = ctx.createLinearGradient(w * 0.7, 0, w * 0.3, h);
      grad2.addColorStop(0, "rgba(200, 160, 80, 0.0)");
      grad2.addColorStop(0.35, "rgba(200, 160, 80, 0.03)");
      grad2.addColorStop(0.5, "rgba(180, 140, 60, 0.05)");
      grad2.addColorStop(0.65, "rgba(200, 160, 80, 0.03)");
      grad2.addColorStop(1, "rgba(200, 160, 80, 0.0)");
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, w, h);
      ctx.restore();
    };

    let t = 0;
    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      drawMilkyWay(w, h);

      t += 0.008;
      for (const star of starsRef.current) {
        star.alpha = star.baseAlpha * (0.5 + 0.5 * Math.sin(t * star.speed + star.phase));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = Math.max(0.05, star.alpha);

        // Glow for brighter stars
        if (star.r > 1.4) {
          ctx.shadowBlur = star.r * 6;
          ctx.shadowColor = star.color;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      }

      animRef.current = requestAnimationFrame(draw);
    };

    resize();
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ display: "block" }}
    />
  );
}
