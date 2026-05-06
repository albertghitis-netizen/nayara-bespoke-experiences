/*
 * LONG-FORM VIDEO , Watch Atacama Sustainability with Language Options
 * English and Spanish video variants with toggle
 */
import { useState } from "react";
import { motion } from "framer-motion";
import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

export default function LongFormVideo() {
  const [language, setLanguage] = useState<"en" | "es">("en");

  const videoId = language === "en" ? "6cfkWsqWWc8" : "H9VxyDgv31U";
  const duration = language === "en" ? "3 min" : "1 min";

  return (
    <div className="min-h-screen bg-white">
      <BrandNavigation pageType="content" />
      
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h1
              className="text-4xl md:text-5xl mb-4 text-[#3B2B26]"
              style={heading}
            >
              Watch Atacama Sustainability
            </h1>
            <p
              className="text-lg text-[#5a4a3a]"
              style={body}
            >
              How Nayara Alto Atacama operates sustainably in the driest desert on Earth , solar energy, adobe architecture, and 100% water reuse.
            </p>
          </motion.div>

          {/* Language Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center gap-4 mb-12"
          >
            <button
              onClick={() => setLanguage("en")}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                language === "en"
                  ? "bg-[#6F463D] text-white"
                  : "bg-[#F9EBE0] text-[#6F463D] border border-[#6F463D]"
              }`}
              style={body}
            >
              🇺🇸 English (3 min)
            </button>
            <button
              onClick={() => setLanguage("es")}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                language === "es"
                  ? "bg-[#6F463D] text-white"
                  : "bg-[#F9EBE0] text-[#6F463D] border border-[#6F463D]"
              }`}
              style={body}
            >
              🇪🇸 Español (1 min)
            </button>
          </motion.div>

          {/* Video Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full bg-black rounded-lg overflow-hidden"
            style={{ aspectRatio: "16 / 9" }}
          >
            <iframe
              key={videoId}
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`}
              title={`Atacama Sustainability - ${language === "en" ? "English" : "Español"}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
            />
          </motion.div>

          {/* Video Info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 pt-12 border-t border-[#F9EBE0]"
          >
            <p
              className="text-sm text-[#5a4a3a] mb-4"
              style={body}
            >
              <span className="font-semibold">Duration:</span> {duration}
            </p>
            <p
              className="text-sm text-[#5a4a3a]"
              style={body}
            >
              <span className="font-semibold">Property:</span> Nayara Alto Atacama
            </p>
          </motion.div>

          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <a
              href="/alto-atacama"
              className="inline-flex items-center gap-2 text-[#6F463D] hover:text-[#B85C3C] transition-colors"
              style={body}
            >
              ← Back to Nayara Alto Atacama
            </a>
          </motion.div>
        </div>
      </section>

      <Footer pageType="content" />
    </div>
  );
}
