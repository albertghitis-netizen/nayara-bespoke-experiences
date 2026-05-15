/*
 * PAGE TRANSITION WRAPPER
 * Wraps route content with framer-motion entrance/exit animations.
 * Used inside App.tsx Suspense boundary to animate between pages.
 *
 * Animation style: editorial, calm, matching the site's existing motion language.
 * - Enter: fade in + subtle upward slide (opacity 0→1, y 20→0)
 * - Exit: fade out quickly (opacity 1→0)
 */

import { motion } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
  /** Unique key for AnimatePresence (typically the route path) */
  routeKey?: string;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 16,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.8, 0.25, 1] as [number, number, number, number],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: [0.25, 0.8, 0.25, 1] as [number, number, number, number],
    },
  },
};

export default function PageTransition({ children, routeKey }: PageTransitionProps) {
  return (
    <motion.div
      key={routeKey}
      variants={pageVariants}
      initial="initial"
      animate="enter"
      exit="exit"
      style={{ minHeight: "100vh" }}
    >
      {children}
    </motion.div>
  );
}
