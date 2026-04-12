/*
 * TENTED CAMP EXPERIENCES — Dedicated experiences page
 * Accessible from Tented Camp page via "Explore More" button
 */

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Footer from "@/components/Footer";
import BrandNavigation from "@/components/BrandNavigation";
import { properties, type Property, type Excursion } from "@/data/properties";
import PillarCrossLink from "@/components/PillarCrossLink";

const tentedCamp = properties.find((p: Property) => p.id === "tented-camp")!;

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;
const sectionPadding = "py-16 md:py-24 px-6 md:px-10";
const maxW = "max-w-[1200px] mx-auto";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#3B2B26]/40 text-[11px] tracking-[0.15em] mb-3" style={{ ...body, fontWeight: 500 }}>
      {children}
    </p>
  );
}

export default function TentedExperiences() {
  return (
    <>
      <BrandNavigation pageType="property" hideCenterLabel />
      <ExperiencesSection />
      <Footer pageType="property" />
    </>
  );
}

function ExperiencesSection() {
  const categories = (tentedCamp.excursionCategories || []).filter(c => c.id !== "all");
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id || "nature");
  const filtered = tentedCamp.excursions.filter((e: Excursion) => e.category === activeCategory);

  return (
    <section className={`${sectionPadding} bg-white/30`}>
      <div className={maxW}>
        <FadeIn>
          <SectionLabel>Experiences</SectionLabel>
          <h2 className="text-[#4B4A4A] mb-6 md:mb-10" style={{ ...heading, fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.2 }}>Rainforest Adventures</h2>
        </FadeIn>
        {categories.length > 0 && (
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-8 md:mb-12">
              {categories.map((cat: { id: string; label: string }) => (
                <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`px-4 py-2 rounded-full text-[12px] tracking-[0.08em] transition-all ${activeCategory === cat.id ? "bg-[#3B2B26] text-white" : "bg-[#3B2B26]/5 text-[#3B2B26]/60 hover:bg-[#3B2B26]/10"}`} style={{ ...body, fontWeight: 500 }}>
                  {cat.label}
                </button>
              ))}
            </div>
          </FadeIn>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((excursion: Excursion, i: number) => (
            <FadeIn key={excursion.id} delay={i * 0.05}>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 hover:bg-white/80 transition-colors">
                <h3 className="text-[#3B2B26] text-[16px] mb-2" style={{ ...heading, fontWeight: 500 }}>{excursion.name}</h3>
                {excursion.duration && (
                  <p className="text-[#3B2B26]/40 text-[11px] tracking-[0.1em] mb-3" style={{ ...body, fontWeight: 500 }}>
                    {excursion.duration}{excursion.price ? ` · ${excursion.price}` : ""}
                  </p>
                )}
                <p className="text-[#4B4A4A]/70 text-[13px] leading-relaxed" style={body}>{excursion.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <PillarCrossLink pillar="experiences" />
      </div>
    </section>
  );
}
