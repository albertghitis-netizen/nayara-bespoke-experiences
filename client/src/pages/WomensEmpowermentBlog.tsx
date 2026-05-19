/*
 * WOMEN'S EMPOWERMENT THROUGH HOUSING
 * Editorial blog post about Nayara Tented Camp's housing initiative in La Fortuna
 * Focuses on structural empowerment, community stability, and women's economic security
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
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

export default function WomensEmpowermentBlog() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen" style={{ backgroundColor: TENTED_PALETTE.background }}>
      <EnhancedArticleSchema
        headline="WomensEmpowerment | Nayara Resorts"
        description="Discover insights about womensempowerment at Nayara Resorts."
        author={{ name: "Nayara Resorts", expertise: ["Luxury Travel", "Sustainable Tourism"] }}
        image="https://nayararesorts.manus.space"
        datePublished="2024-01-01"
        url="https://nayararesorts.manus.space/blog/womensempowerment"
      />

      {/* ── SHARE THIS POST ── */}
      <section style={{ backgroundColor: PALETTE.cream }}>
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12 text-center">
          <p
            className="uppercase tracking-[0.3em] text-[11px] mb-6"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
          >
            Share This Post
          </p>
          <div className="flex items-center justify-center gap-6">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Share on Facebook"
            >
              <svg className="w-6 h-6 transition-all duration-300 group-hover:scale-110" fill={PALETTE.espresso} style={{ opacity: 0.6 }} viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a
              href="https://www.instagram.com/nayararesorts/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Follow on Instagram"
            >
              <svg className="w-6 h-6 transition-all duration-300 group-hover:scale-110" fill={PALETTE.espresso} style={{ opacity: 0.6 }} viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a
              href="https://www.tiktok.com/@nayararesorts"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Follow on TikTok"
            >
              <svg className="w-6 h-6 transition-all duration-300 group-hover:scale-110" fill={PALETTE.espresso} style={{ opacity: 0.6 }} viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.88 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .56.04.82.11V9.4a6.33 6.33 0 00-.82-.05A6.34 6.34 0 003.15 15.7a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.42a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.15z"/></svg>
            </a>
            <a
              href={`mailto:?subject=${encodeURIComponent(document.title)}&body=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
              className="group"
              aria-label="Share via Email"
            >
              <svg className="w-6 h-6 transition-all duration-300 group-hover:scale-110" fill="none" stroke={PALETTE.espresso} style={{ opacity: 0.6 }} strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
            </a>
            <button
              onClick={() => { if (typeof navigator !== 'undefined' && navigator.clipboard) { navigator.clipboard.writeText(window.location.href); } }}
              className="group"
              aria-label="Copy link"
            >
              <svg className="w-6 h-6 transition-all duration-300 group-hover:scale-110" fill="none" stroke={PALETTE.espresso} style={{ opacity: 0.6 }} strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
            </button>
          </div>
        </div>
      </section>


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
              <Link key="/blog/rooted-in-community" href="/blog/rooted-in-community">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-square overflow-hidden mb-4 rounded-lg">
                    <img
                      src="/manus-storage/rooted-community-cover_dcdbfae8.jpg"
                      alt="Rooted in Community: People First at Nayara"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontWeight: 600, color: PALETTE.accent }}>
                    Culture
                  </p>
                  <h3 className="text-lg" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
                    Rooted in Community: People First at Nayara
                  </h3>
                </motion.div>
              </Link>
              <Link key="/blog/solo-travel-female" href="/blog/solo-travel-female">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-square overflow-hidden mb-4 rounded-lg">
                    <img
                      src="/manus-storage/hangaroa-sustainability-cover_3a8a8550.jpg"
                      alt="Solo Female Travel in Latin America at Nayara"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontWeight: 600, color: PALETTE.accent }}>
                    Travel
                  </p>
                  <h3 className="text-lg" style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}>
                    Solo Female Travel in Latin America at Nayara
                  </h3>
                </motion.div>
              </Link>
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
          </div>
        </div>
      </motion.section>

      <Footer textColor="#FFFFFF" />
    </div>
  );
}
