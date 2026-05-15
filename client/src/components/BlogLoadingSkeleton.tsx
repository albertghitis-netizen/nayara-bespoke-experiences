/*
 * BLOG LOADING SKELETON
 * Editorial-style loading placeholder shown while blog post content
 * lazy-loads. Matches the site's warm stone/parchment aesthetic.
 */

import { motion } from "framer-motion";

function Shimmer({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-stone-200/60 rounded ${className}`}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

export default function BlogLoadingSkeleton() {
  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      {/* Hero skeleton */}
      <div className="relative w-full h-[70vh] bg-stone-300/40 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
        />
        {/* Title placeholder at bottom of hero */}
        <div className="absolute bottom-12 left-8 right-8 md:left-16 md:right-16">
          <Shimmer className="h-4 w-24 mb-4" />
          <Shimmer className="h-8 w-3/4 mb-3" />
          <Shimmer className="h-8 w-1/2" />
        </div>
      </div>

      {/* Body content skeleton */}
      <div className="max-w-3xl mx-auto px-6 md:px-8 py-16">
        {/* Intro paragraph */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-3 mb-12"
        >
          <Shimmer className="h-4 w-full" />
          <Shimmer className="h-4 w-full" />
          <Shimmer className="h-4 w-5/6" />
          <Shimmer className="h-4 w-3/4" />
        </motion.div>

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mb-8"
        >
          <Shimmer className="h-6 w-2/5 mb-6" />
          <Shimmer className="h-4 w-full" />
          <Shimmer className="h-4 w-full mt-2" />
          <Shimmer className="h-4 w-4/5 mt-2" />
        </motion.div>

        {/* Image placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Shimmer className="h-64 w-full rounded-lg mb-10" />
        </motion.div>

        {/* More text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="space-y-3"
        >
          <Shimmer className="h-6 w-1/3 mb-6" />
          <Shimmer className="h-4 w-full" />
          <Shimmer className="h-4 w-full" />
          <Shimmer className="h-4 w-2/3" />
        </motion.div>
      </div>
    </div>
  );
}
