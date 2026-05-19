/*
 * REFORESTATION & WILDLIFE CORRIDORS
 * Editorial blog post for Nayara Tented Camp sustainability initiative
 * Explores how strategic reforestation and corridor preservation protect rainforest ecosystems
 * Emphasizes sloths as a keystone species and indicator of ecosystem health
 */

import { Link } from "wouter";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { EnhancedArticleSchema } from "@/components/SEOSchemaEnhanced";

const PALETTE = {
  espresso: "#3B2B26",
  cream: "#F7F5F0",
  stone: "#E8E2D8",
  accent: "#8B6914",
  text: "#2C2016",
  muted: "#5A4A3A",
};


const TENTED_PALETTE = {
  primary: "#8B6F47",
  secondary: "#A0826D",
  accent: "#D4AF37",
  text: "#2C2416",
  lightText: "#5A4A3A",
  background: "#F5F1ED",
};

export default function ReforestationWildlifeBlog() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen" style={{ backgroundColor: TENTED_PALETTE.background }}>
      <EnhancedArticleSchema
        image="https://nayararesorts.manus.space"
        headline="ReforestationWildlife | Nayara Resorts"
        description="Discover insights about reforestationwildlife at Nayara Resorts."
        author={{ name: "Nayara Resorts", expertise: ["Luxury Travel", "Sustainable Tourism"] }}
        datePublished="2024-01-01"
        url="https://nayararesorts.manus.space/blog/reforestationwildlife"
      />
      {/* ── EXPLORE MORE ── */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        style={{ backgroundColor: PALETTE.cream }}>
        <div className="max-w-5xl mx-auto px-8 md:px-16 pt-16 pb-16">
          <p className="uppercase tracking-[0.3em] text-[11px] mb-4 text-center" style={{ fontWeight: 600, color: PALETTE.accent }}>
            Continue Reading
          </p>
          <h2 className="text-3xl md:text-4xl mb-12 text-center" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
            Explore More
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link key="/blog/green-globe-certification" href="/blog/green-globe-certification">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-square overflow-hidden mb-4 rounded-lg">
                    <img
                      src="/manus-storage/greenglobe-card-pool-arenal_9ba2f8e8.jpg"
                      alt="Green Globe Certification at Nayara"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontWeight: 600, color: PALETTE.accent }}>
                    Sustainability
                  </p>
                  <h3 className="text-lg" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
                    Green Globe Certification at Nayara
                  </h3>
                </motion.div>
              </Link>
              <Link key="/blog/arenal-bocas-wildlife" href="/blog/arenal-bocas-wildlife">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-square overflow-hidden mb-4 rounded-lg">
                    <img
                      src="https://blog.nayararesorts.com/hubfs/Swimming-Sloth-1024x683.jpg"
                      alt="Wildlife Conservation in Arenal and Bocas del Toro"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontWeight: 600, color: PALETTE.accent }}>
                    Conservation
                  </p>
                  <h3 className="text-lg" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
                    Wildlife Conservation in Arenal and Bocas del Toro
                  </h3>
                </motion.div>
              </Link>
              <Link key="/blog/birdwatching" href="/blog/birdwatching">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-square overflow-hidden mb-4 rounded-lg">
                    <img
                      src="/manus-storage/birdwatching-card-aracari-square_616da216.jpg"
                      alt="Birdwatching in Costa Rica: Toucans, Quetzals & More"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontWeight: 600, color: PALETTE.accent }}>
                    Wildlife
                  </p>
                  <h3 className="text-lg" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
                    Birdwatching in Costa Rica: Toucans, Quetzals & More
                  </h3>
                </motion.div>
              </Link>
          </div>
        </div>
      </motion.section>

      <Footer textColor="#FFFFFF" />
    </div>
  );
}
