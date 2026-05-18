/**
 * HOW WE BUILT A HOTEL ON AN ISLAND
 * The definitive Bocas del Toro sustainability/operations story
 * Covers: environmental studies, off-grid construction, solar, rainwater,
 * stilt architecture, mangrove preservation, IBUKU treehouses
 */

import { Link } from "wouter";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { EnhancedArticleSchema } from "@/components/SEOSchemaEnhanced";
import BrandNavigation from "@/components/BrandNavigation";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

const PALETTE = {
  ocean: "#0B4F5E",
  teal: "#1B7A8F",
  accent: "#4DB8D0",
  sand: "#F5F1ED",
  light: "#FFFFFF",
  text: "#0A3A45",
  muted: "#3D5A63",
  cream: "#F7F5F0",
  espresso: "#3B2B26",
};

export default function BocasOperationsBlog() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen" style={{ backgroundColor: PALETTE.light }}>
      <EnhancedArticleSchema
        image={`${CDN}/bocas-aerial-island_34b68171.jpg`}
        headline="How Nayara Built an Off Grid Resort on a Private Island in Panama"
        description="The story of building Nayara Bocas del Toro entirely off-grid on a private island in Panama. No roads, no grid, no municipal water. Five environmental studies and a commitment to leave the ecosystem better than we found it."
        author={{ name: "Nayara Resorts", expertise: ["Luxury Travel", "Sustainable Tourism", "Off-Grid Architecture"] }}
        datePublished="2025-05-15"
        url="https://nayararesorts.manus.space/blog/how-we-built-a-hotel-on-an-island"
      />
      <BrandNavigation pageType="brand" hideCenterLabel navPalette={{ dark: "#FFFFFF", pillBg: "#1E3A8AB3", pillHover: "#1E3A8AE6" }} />
      {/* ── EXPLORE MORE ── */}
      <section style={{ backgroundColor: PALETTE.cream }}>
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
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
              <Link key="/blog/bocas-history-culture-nature" href="/blog/bocas-history-culture-nature">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-square overflow-hidden mb-4 rounded-lg">
                    <img
                      src="/manus-storage/bocas-history-culture-cover_21d14dc5.jpg"
                      alt="History, Culture & Nature of Bocas del Toro"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontWeight: 600, color: PALETTE.accent }}>
                    Culture
                  </p>
                  <h3 className="text-lg" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
                    History, Culture & Nature of Bocas del Toro
                  </h3>
                </motion.div>
              </Link>
              <Link key="/blog/reforestation-wildlife" href="/blog/reforestation-wildlife">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-square overflow-hidden mb-4 rounded-lg">
                    <img
                      src="/manus-storage/reforestation-wildlife-cover_d766bbf9.jpg"
                      alt="Reforestation and Wildlife Corridors at Nayara"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontWeight: 600, color: PALETTE.accent }}>
                    Sustainability
                  </p>
                  <h3 className="text-lg" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
                    Reforestation and Wildlife Corridors at Nayara
                  </h3>
                </motion.div>
              </Link>
          </div>
        </div>
      </section>

      <Footer bgColor="#1E3A8A" textColor="#FFFFFF" propertyName="Bocas del Toro" />
    </div>
  );
}
