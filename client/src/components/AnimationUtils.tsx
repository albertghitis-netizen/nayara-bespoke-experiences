/**
 * Shared animation utility components for property pages.
 * Provides: ParallaxImage, KenBurnsImage, RevealSection, WordReveal, AnimatedDivider
 */

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

/* ── Parallax Image ── */
/* Image moves slower than scroll, creating depth. */
interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number; // 0.1 = subtle, 0.3 = dramatic
  children?: React.ReactNode;
}

export function ParallaxImage({ src, alt, className = "", speed = 0.15, children }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="w-full h-[120%] object-cover absolute top-0 left-0"
      />
      {children}
    </div>
  );
}

/* ── Ken Burns Image ── */
/* Slow zoom effect when in view. */
interface KenBurnsImageProps {
  src: string;
  alt: string;
  className?: string;
  duration?: number;
  scale?: number;
}

export function KenBurnsImage({ src, alt, className = "", duration = 20, scale = 1.12 }: KenBurnsImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        initial={{ scale: 1 }}
        animate={isInView ? { scale } : {}}
        transition={{ duration, ease: "linear" }}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

/* ── Reveal Section ── */
/* Fade + slide up when scrolled into view. */
interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

export function RevealSection({ children, className = "", delay = 0, direction = "up" }: RevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const initial = {
    opacity: 0,
    y: direction === "up" ? 50 : 0,
    x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Word Reveal ── */
/* Heading text reveals word by word with blur. */
interface WordRevealProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
}

export function WordReveal({ text, className = "", tag: Tag = "h2" }: WordRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const words = text.split(" ");

  return (
    <div ref={ref}>
      <Tag className={className}>
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, filter: "blur(8px)", y: 10 }}
            animate={isInView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: i * 0.08,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </Tag>
    </div>
  );
}

/* ── Animated Divider ── */
/* Horizontal line that draws itself from center. */
export function AnimatedDivider({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className={`flex justify-center ${className}`}>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as const }}
        className="h-px w-32 bg-[#c4a87c]/40 origin-center"
      />
    </div>
  );
}

/* ── Staggered Children ── */
/* Container that staggers the entrance of its children. */
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({ children, className = "", staggerDelay = 0.1 }: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerChildVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};
