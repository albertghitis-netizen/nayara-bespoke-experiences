/*
 * SUSTAINABILITY — Mobile-Only Prototype
 * Four pillars: Certifications, Operations, Ecosystem, People
 * Vertical hero video at top
 * Placeholder content — structure only
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Settings, Leaf, Users, ChevronDown } from "lucide-react";

/* ── Placeholder data ── */
const categories = [
  {
    id: "operations",
    title: "Operations",
    icon: <Settings className="w-5 h-5" />,
    items: [
      {
        label: "Energy & Solar",
        properties: "All Properties",
        description: "[Solar panel initiatives, energy reduction details here]",
        blogLink: { title: "[Related blog title]", url: "#" },
      },
      {
        label: "Water Conservation",
        properties: "All Properties",
        description: "[Water management details here]",
        blogLink: { title: "[Related blog title]", url: "#" },
      },
      {
        label: "Waste Reduction",
        properties: "All Properties",
        description: "[Waste management, recycling details here]",
        blogLink: { title: "[Related blog title]", url: "#" },
      },
    ],
  },
  {
    id: "ecosystem",
    title: "Ecosystem",
    icon: <Leaf className="w-5 h-5" />,
    items: [
      {
        label: "Wildlife Conservation",
        properties: "All Properties",
        description: "[Wildlife protection programs here]",
        blogLink: { title: "[Related blog title]", url: "#" },
      },
      {
        label: "Reforestation",
        properties: "Costa Rica Properties",
        description: "[Tree planting, habitat restoration here]",
        blogLink: { title: "[Related blog title]", url: "#" },
      },
      {
        label: "Marine Protection",
        properties: "Nayara Bocas del Toro · Nayara Hangaroa",
        description: "[Coral reef, ocean conservation here]",
        blogLink: { title: "[Related blog title]", url: "#" },
      },
    ],
  },
  {
    id: "people",
    title: "People",
    icon: <Users className="w-5 h-5" />,
    items: [
      {
        label: "Community Programs",
        properties: "All Properties",
        description: "[Local employment, education initiatives here]",
        blogLink: { title: "[Related blog title]", url: "#" },
      },
      {
        label: "Cultural Preservation",
        properties: "Nayara Hangaroa · Nayara Alto Atacama",
        description: "[Indigenous culture, heritage programs here]",
        blogLink: { title: "[Related blog title]", url: "#" },
      },
    ],
  },
];

export default function Sustainability() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>("operations");

  const toggleCategory = (id: string) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#f7f5f0] max-w-[430px] mx-auto overflow-hidden">
      {/* Vertical Hero Video Placeholder */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-emerald-950">
          {/* Placeholder for vertical hero video */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white/30">
              <div className="w-16 h-16 border-2 border-dashed border-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">▶</span>
              </div>
              <p className="text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-body)" }}>
                Vertical Hero Video
              </p>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
        </div>

        {/* Back button */}
        <div className="absolute top-6 left-5 z-20">
          <Link href="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span
              className="text-[11px] tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Back
            </span>
          </Link>
        </div>

        {/* Hero text at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p
              className="text-emerald-400/70 text-[10px] tracking-[0.4em] uppercase mb-2"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Nayara Resorts
            </p>
            <h1
              className="text-white text-3xl leading-[0.95] tracking-wide"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              Sustainability
            </h1>
            <p
              className="text-white/50 text-sm mt-3 leading-relaxed max-w-[300px]"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Our commitment to preserving the extraordinary places we call home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Accordion */}
      <section className="px-5 py-8">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: ci * 0.08 }}
            className="border-b border-stone-200"
          >
            {/* Category Header */}
            <button
              onClick={() => toggleCategory(cat.id)}
              className="flex items-center justify-between w-full py-5 text-left"
            >
              <div className="flex items-center gap-3">
                <span className="text-emerald-700">{cat.icon}</span>
                <span
                  className="text-stone-800 text-base tracking-[0.05em]"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                >
                  {cat.title}
                </span>
              </div>
              <motion.div
                animate={{ rotate: expandedCategory === cat.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-4 h-4 text-stone-400" />
              </motion.div>
            </button>

            {/* Category Items */}
            {expandedCategory === cat.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="pb-5"
              >
                {cat.items.map((item, ii) => (
                  <div key={ii} className="mb-5 last:mb-0 pl-8">
                    {/* Photo placeholder */}
                    <div className="w-full aspect-[16/9] bg-stone-200 rounded-sm mb-3 flex items-center justify-center">
                      <span
                        className="text-stone-400 text-[10px] tracking-[0.2em] uppercase"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Photo Here
                      </span>
                    </div>

                    <h4
                      className="text-stone-800 text-sm mb-1"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                    >
                      {item.label}
                    </h4>
                    <p
                      className="text-emerald-700/70 text-[10px] tracking-[0.1em] uppercase mb-2"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                    >
                      {item.properties}
                    </p>
                    <p
                      className="text-stone-500 text-xs leading-relaxed mb-2"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                    >
                      {item.description}
                    </p>

                    {/* Blog link placeholder */}
                    <a
                      href={item.blogLink.url}
                      className="text-emerald-700 text-[11px] tracking-[0.05em] underline underline-offset-2"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                    >
                      📖 {item.blogLink.title}
                    </a>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 py-8 px-5">
        <p
          className="text-stone-300 text-[10px] tracking-[0.3em] uppercase text-center"
          style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
        >
          Nayara Resorts
        </p>
        <p
          className="text-stone-400 text-[10px] text-center mt-1"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </footer>
    </div>
  );
}
