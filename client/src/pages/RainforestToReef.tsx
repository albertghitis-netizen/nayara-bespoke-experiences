/*
 * FROM RAINFOREST TO REEF — Unified Sustainability Landing Page
 * Connects Costa Rica reforestation with Caribbean Coral reef restoration
 * Tells the story of Nayara's integrated environmental strategy
 * Design: Rainforest greens transitioning to ocean teals
 */

import { useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import NativeVideo from "@/components/NativeVideo";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

/* ─── CDN Assets ─── */
const CDN = {
  rainforestHero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/arenal-desktop_a7242694.mp4",
  coralHero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-del-toro-hero_471d1062.mov",
};

export default function RainforestToReef() {
  return (
    <div className="min-h-screen bg-white">
      <BrandNavigation pageType="brand" />

      {/* ═══════════════════════════════════════════════════════════════
          HERO SECTION — From Rainforest to Reef
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <NativeVideo src={CDN.rainforestHero} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-end items-center pb-16 px-6 md:px-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-3xl md:text-5xl lg:text-6xl leading-tight tracking-wide text-center max-w-4xl"
            style={heading}
          >
            From Rainforest to Reef
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/80 text-sm md:text-base tracking-wide mt-6 text-center max-w-2xl"
            style={body}
          >
            Nayara's integrated approach to environmental regeneration spans from Costa Rican rainforests to Caribbean coral reefs
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          INTRO — The Connected Strategy
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="mb-12">
            <h2 className="text-2xl md:text-4xl mb-6" style={heading}>
              A Regenerative Journey
            </h2>
            <p className="text-lg text-stone-700 leading-relaxed mb-6" style={body}>
              For over a decade, Nayara has pioneered rainforest restoration across Costa Rica—planting native species, protecting wildlife corridors, and partnering with local communities. This success in land-based regeneration has revealed a natural next step: extending our expertise to ocean restoration.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed" style={body}>
              Today, Nayara Bocas del Toro partners with Caribbean Coral Restoration Center to apply the same principles of climate-adaptive restoration to coral reefs. From rainforest canopy to reef resilience, we're building a comprehensive model for environmental regeneration that works across ecosystems.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          RAINFOREST SECTION — Costa Rica Reforestation
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-gradient-to-b from-white via-green-50 to-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="mb-16">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-xs tracking-widest uppercase mb-6" style={body}>
              Costa Rica
            </div>
            <h2 className="text-3xl md:text-5xl mb-8" style={heading}>
              Rainforest Regeneration
            </h2>
            <p className="text-lg text-stone-700 leading-relaxed mb-8" style={body}>
              Across Nayara Gardens, Nayara Springs, and Nayara Tented Camp, we've established comprehensive reforestation programs that restore degraded rainforest habitat, protect wildlife corridors, and support local biodiversity.
            </p>
          </FadeIn>

          {/* Rainforest Stats */}
          <FadeIn delay={0.2} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { stat: "340+", label: "Hectares Protected" },
              { stat: "200+", label: "Native Species" },
              { stat: "24", label: "Community Partners" },
              { stat: "100%", label: "Carbon Neutral" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-700 mb-2" style={heading}>
                  {item.stat}
                </div>
                <p className="text-sm text-stone-600" style={body}>
                  {item.label}
                </p>
              </div>
            ))}
          </FadeIn>

          {/* Rainforest Initiatives */}
          <FadeIn delay={0.4} className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Native Plant Nurseries",
                desc: "Propagating 200+ native species across our three Costa Rica properties, creating living laboratories for habitat restoration.",
              },
              {
                title: "Wildlife Corridors",
                desc: "Protecting and expanding canopy bridges and ground-level passages that enable wildlife movement across fragmented landscapes.",
              },
              {
                title: "Community Partnerships",
                desc: "Working with indigenous communities and local cooperatives to ensure restoration efforts honor cultural heritage and support local economies.",
              },
              {
                title: "Sustainable Certification",
                desc: "Achieving CST (Certification for Sustainable Tourism) and Rainforest Alliance certification, validating our commitment to measurable environmental impact.",
              },
            ].map((item, idx) => (
              <div key={idx} className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl mb-3" style={heading}>
                  {item.title}
                </h3>
                <p className="text-stone-700" style={body}>
                  {item.desc}
                </p>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          TRANSITION — The Bridge
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl text-white mb-8" style={heading}>
              From Land to Ocean
            </h2>
            <p className="text-lg text-white/90 leading-relaxed" style={body}>
              Our success in rainforest regeneration taught us a critical lesson: nature responds to intentional, science-driven intervention. The same principles that guide our reforestation work—selecting resilient species, building community partnerships, measuring long-term impact—apply equally to ocean restoration.
            </p>
            <p className="text-lg text-white/90 leading-relaxed mt-6" style={body}>
              As climate change threatens both terrestrial and marine ecosystems, Nayara is extending our regenerative model to where it's needed most: the world's coral reefs.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CORAL SECTION — Caribbean Reef Restoration
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-xs tracking-widest uppercase mb-6" style={body}>
              Bocas del Toro
            </div>
            <h2 className="text-3xl md:text-5xl mb-8" style={heading}>
              Coral Reef Restoration
            </h2>
            <p className="text-lg text-stone-700 leading-relaxed mb-8" style={body}>
              Through our partnership with Caribbean Coral Restoration Center, Nayara Bocas del Toro is pioneering climate-adaptive coral restoration. Rather than attempting to reverse ocean warming, we're cultivating resilience by planting heat-resistant coral species that have survived recent bleaching events.
            </p>
          </FadeIn>

          {/* Coral Stats */}
          <FadeIn delay={0.2} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { stat: "84%", label: "Reefs Impacted" },
              { stat: "50%", label: "Lost Since 1980s" },
              { stat: "1.5°C", label: "Critical Threshold" },
              { stat: "5", label: "Impact Pillars" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-teal-700 mb-2" style={heading}>
                  {item.stat}
                </div>
                <p className="text-sm text-stone-600" style={body}>
                  {item.label}
                </p>
              </div>
            ))}
          </FadeIn>

          {/* Coral Initiatives */}
          <FadeIn delay={0.4} className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Heat-Resistant Species",
                desc: "Cultivating coral species that have survived recent bleaching events, building genetic resilience into reef ecosystems.",
              },
              {
                title: "Scientific Monitoring",
                desc: "Partnering with research institutions to track restoration success and contribute to global climate-adaptive restoration science.",
              },
              {
                title: "Community Engagement",
                desc: "Enabling guests to participate in restoration activities, creating direct connection between hospitality and ocean regeneration.",
              },
              {
                title: "Replicable Model",
                desc: "Documenting our approach to create a global blueprint for climate-adaptive reef restoration in warming oceans.",
              },
            ].map((item, idx) => (
              <div key={idx} className="border-l-4 border-teal-600 pl-6">
                <h3 className="text-xl mb-3" style={heading}>
                  {item.title}
                </h3>
                <p className="text-stone-700" style={body}>
                  {item.desc}
                </p>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          INTEGRATED IMPACT — Why This Matters
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-stone-100">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="mb-16">
            <h2 className="text-3xl md:text-4xl mb-12 text-center" style={heading}>
              An Integrated Approach
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌱",
                title: "Ecosystem Health",
                desc: "Healthy rainforests regulate water cycles and climate; healthy reefs support marine biodiversity and protect coastlines. Both are essential.",
              },
              {
                icon: "🤝",
                title: "Community Benefit",
                desc: "Rainforest restoration creates local employment; reef restoration supports fishing communities and cultural traditions. Regeneration must serve people.",
              },
              {
                icon: "📊",
                title: "Measurable Impact",
                desc: "We track reforestation success through species diversity and wildlife presence; reef restoration through coral survival rates and ecosystem recovery.",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl mb-3" style={heading}>
                  {item.title}
                </h3>
                <p className="text-stone-700" style={body}>
                  {item.desc}
                </p>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CTA — Explore the Full Story
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn className="mb-12">
            <h2 className="text-2xl md:text-4xl mb-6" style={heading}>
              Experience Regeneration
            </h2>
            <p className="text-lg text-stone-700 mb-12" style={body}>
              Learn more about our specific initiatives and discover how you can participate in environmental regeneration during your stay.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="grid md:grid-cols-2 gap-6">
            <Link href="/sustainability">
              <a className="block p-8 border-2 border-green-600 rounded-lg hover:bg-green-50 transition-colors">
                <h3 className="text-xl mb-2" style={heading}>
                  Sustainability Hub
                </h3>
                <p className="text-stone-600 mb-4" style={body}>
                  Explore all initiatives across our six properties
                </p>
                <span className="text-green-600 font-semibold" style={body}>
                  Learn More →
                </span>
              </a>
            </Link>

            <Link href="/caribbean-coral">
              <a className="block p-8 border-2 border-teal-600 rounded-lg hover:bg-teal-50 transition-colors">
                <h3 className="text-xl mb-2" style={heading}>
                  Caribbean Coral Partnership
                </h3>
                <p className="text-stone-600 mb-4" style={body}>
                  Deep dive into our reef restoration work
                </p>
                <span className="text-teal-600 font-semibold" style={body}>
                  Learn More →
                </span>
              </a>
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
