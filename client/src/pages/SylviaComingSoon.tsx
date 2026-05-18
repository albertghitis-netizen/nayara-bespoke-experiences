/**
 * SYLVIA — Coming Soon placeholder page
 * Used for sub-pages not yet built out (Blog, FAQ, My Story, Trauma, Addiction, Mood Disorders)
 */
import { useLocation } from "wouter";
import { motion } from "framer-motion";

const COLORS = {
  olive: "#4a5a3a",
  bone: "#f5f2ec",
  text: "#2d3a2a",
};

const pageTitles: Record<string, string> = {
  "/sylvia/blog": "Blog",
  "/sylvia/faq": "FAQ",
  "/sylvia/my-story": "My Story",
  "/sylvia/trauma": "Trauma",
  "/sylvia/addiction": "Addiction",
  "/sylvia/mood-disorders": "Mood Disorders",
};

export default function SylviaComingSoon() {
  const [location] = useLocation();
  const title = pageTitles[location] || "Coming Soon";

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{ backgroundColor: COLORS.bone }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-md"
      >
        <h1
          className="text-3xl md:text-4xl mb-4"
          style={{ fontFamily: "'Playfair Display', serif", color: COLORS.text }}
        >
          {title}
        </h1>
        <p
          className="text-lg mb-8 opacity-60"
          style={{ fontFamily: "'DM Sans', sans-serif", color: COLORS.text }}
        >
          Coming Soon
        </p>
        <a
          href="/sylvia"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm tracking-wider uppercase transition-opacity hover:opacity-80"
          style={{ backgroundColor: COLORS.olive }}
        >
          ← Back to Sylvia
        </a>
      </motion.div>
    </div>
  );
}
