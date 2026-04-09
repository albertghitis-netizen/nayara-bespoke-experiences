/**
 * NAYARA MOTION SYSTEM
 * Calm, editorial, unhurried. Nothing bouncy. Nothing dramatic.
 * Animations are felt, not seen. Subtle reveals that let the content breathe.
 *
 * Easing: Gentle cubic-bezier curves.
 * Timing: 0.4–0.8s for reveals. Quick enough to feel responsive, slow enough to feel intentional.
 * Stagger: 0.05–0.1s between children. Just enough to read as sequential.
 */

import { motion, useInView, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef, type ReactNode, type CSSProperties } from "react";

/* ═══════════════════════════════════════════════════════════════
   MOTION CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

/** Gentle ease — smooth and understated */
export const EASE_CINEMATIC = [0.25, 0.8, 0.25, 1] as const;

/** Editorial ease — slightly more deliberate */
export const EASE_EDITORIAL = [0.22, 0.9, 0.36, 1] as const;

/** Subtle ease — for micro-interactions */
export const EASE_SUBTLE = [0.4, 0, 0.2, 1] as const;

/** Duration presets — calmer, quicker */
export const DURATION = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.7,
  dramatic: 0.8,
  hero: 1.0,
} as const;

/** Stagger presets — tighter */
export const STAGGER = {
  tight: 0.04,
  normal: 0.06,
  relaxed: 0.08,
  dramatic: 0.12,
} as const;

/* ═══════════════════════════════════════════════════════════════
   VARIANT PRESETS
   ═══════════════════════════════════════════════════════════════ */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASE_CINEMATIC },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.normal, ease: EASE_SUBTLE },
  },
};

export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.slow, ease: EASE_CINEMATIC },
  },
};

export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.slow, ease: EASE_CINEMATIC },
  },
};

export const scaleReveal: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.slow, ease: EASE_CINEMATIC },
  },
};

export const clipRevealUp: Variants = {
  hidden: { clipPath: "inset(100% 0 0 0)" },
  visible: {
    clipPath: "inset(0% 0 0 0)",
    transition: { duration: DURATION.dramatic, ease: EASE_EDITORIAL },
  },
};

export const clipRevealLeft: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: DURATION.dramatic, ease: EASE_EDITORIAL },
  },
};

/** Stagger container — wraps children that each have their own variants */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER.normal,
      delayChildren: 0.05,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER.relaxed,
      delayChildren: 0.1,
    },
  },
};

/* ═══════════════════════════════════════════════════════════════
   REUSABLE COMPONENTS
   ═══════════════════════════════════════════════════════════════ */

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Which variant set to use */
  variants?: Variants;
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** How much of the element must be visible to trigger (0-1) */
  threshold?: number;
  /** Only animate once */
  once?: boolean;
}

/**
 * Animate any element when it scrolls into view.
 * Wraps children in a motion.div with IntersectionObserver.
 */
export function AnimateOnScroll({
  children,
  className,
  style,
  variants = fadeUp,
  delay = 0,
  threshold = 0.15,
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
      style={style}
      transition={delay > 0 ? { delay } : undefined}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger children on scroll — each child animates in sequence.
 * Children should use motion.* elements with variants like fadeUp.
 */
export function StaggerOnScroll({
  children,
  className,
  style,
  variants = staggerContainer,
  threshold = 0.1,
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/**
 * Text reveal — gentle fade and slide up.
 * Much calmer than the previous clip-mask approach.
 */
interface TextRevealProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;
  duration?: number;
}

export function TextReveal({
  children,
  className,
  as: Tag = "h2",
  delay = 0,
  duration = DURATION.dramatic,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const MotionTag = motion.create(Tag);

  return (
    <div ref={ref}>
      <MotionTag
        initial={{ y: 20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
        transition={{
          duration,
          ease: EASE_EDITORIAL,
          delay,
        }}
        className={className}
      >
        {children}
      </MotionTag>
    </div>
  );
}

/**
 * Multi-line text reveal — each line staggers in gently.
 */
interface MultiLineRevealProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p";
  staggerDelay?: number;
  delay?: number;
}

export function MultiLineReveal({
  lines,
  className,
  lineClassName,
  as: Tag = "h2",
  staggerDelay = STAGGER.relaxed,
  delay = 0,
}: MultiLineRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const MotionTag = motion.create(Tag);

  return (
    <div ref={ref} className={className}>
      {lines.map((line, i) => (
        <div key={i}>
          <MotionTag
            initial={{ y: 16, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 16, opacity: 0 }}
            transition={{
              duration: DURATION.dramatic,
              ease: EASE_EDITORIAL,
              delay: delay + i * staggerDelay,
            }}
            className={lineClassName}
          >
            {line}
          </MotionTag>
        </div>
      ))}
    </div>
  );
}

/**
 * Parallax wrapper — element moves at a different scroll speed.
 * offset: how many pixels of parallax travel (positive = moves up slower)
 */
interface ParallaxProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  offset?: number;
}

export function Parallax({
  children,
  className,
  style,
  offset = 30,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <div ref={ref} className={className} style={{ ...style, overflow: "hidden" }}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}

/**
 * Image/Video reveal — gentle fade with very subtle scale.
 * Much calmer than the previous clip-mask approach.
 */
interface MediaRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function MediaReveal({ children, className, delay = 0 }: MediaRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 1.02 }}
      animate={
        isInView
          ? { opacity: 1, scale: 1 }
          : { opacity: 0, scale: 1.02 }
      }
      transition={{
        duration: DURATION.slow,
        ease: EASE_CINEMATIC,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Horizontal rule that draws itself on scroll.
 */
interface DrawLineProps {
  className?: string;
  color?: string;
  delay?: number;
}

export function DrawLine({ className, color = "#E2DDD5", delay = 0 }: DrawLineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ scaleX: 0, transformOrigin: "left" }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{
          duration: DURATION.slow,
          ease: EASE_CINEMATIC,
          delay,
        }}
        style={{ height: 1, backgroundColor: color }}
      />
    </div>
  );
}

/**
 * Counter animation — animates a number from 0 to target.
 */
interface CountUpProps {
  target: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}

export function CountUp({
  target,
  suffix = "",
  prefix = "",
  className,
  duration = 2,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useTransform(
    useScroll({ target: ref, offset: ["start end", "end start"] }).scrollYProgress,
    [0, 0.5],
    [0, target]
  );

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {isInView ? `${prefix}${target}${suffix}` : `${prefix}0${suffix}`}
    </motion.span>
  );
}

/**
 * Gradient section transition — renders a gradient background
 * between two colors as a visual section divider.
 */
interface GradientTransitionProps {
  from: string;
  to: string;
  height?: string;
  className?: string;
}

export function GradientTransition({
  from,
  to,
  height = "120px",
  className,
}: GradientTransitionProps) {
  return (
    <div
      className={className}
      style={{
        height,
        background: `linear-gradient(to bottom, ${from}, ${to})`,
      }}
    />
  );
}

/**
 * Section wrapper with gradient background support.
 * Use for property page sections that sit on the tinted background.
 */
interface TintedSectionProps {
  children: ReactNode;
  backgroundColor?: string;
  className?: string;
  style?: CSSProperties;
}

export function TintedSection({
  children,
  backgroundColor,
  className,
  style,
}: TintedSectionProps) {
  return (
    <section
      className={className}
      style={{ backgroundColor, ...style }}
    >
      {children}
    </section>
  );
}
