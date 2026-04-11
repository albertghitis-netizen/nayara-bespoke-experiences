/**
 * FAQ Page — Two-axis filtering by property and content pillar
 * Design: Pure white background, editorial layout, accordion-style answers
 */

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";
import { FAQ_DATA, PILLARS, PROPERTIES } from "@/data/faq";

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

export default function FAQ() {
  const [selectedProperty, setSelectedProperty] = useState("all");
  const [selectedPillar, setSelectedPillar] = useState("all");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchProperty =
        selectedProperty === "all" ||
        item.properties.length === 0 ||
        item.properties.includes(selectedProperty);
      const matchPillar =
        selectedPillar === "all" || item.pillar === selectedPillar;
      return matchProperty && matchPillar;
    });
  }, [selectedProperty, selectedPillar]);

  const toggle = (id: string) => setOpenId(openId === id ? null : id);

  return (
    <div className="min-h-screen bg-white">
      <BrandNavigation pageType="content" />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-[#3a2a1a] text-3xl md:text-5xl tracking-wide mb-4"
            style={heading}
          >
            Frequently Asked Questions
          </h1>
          <p
            className="text-[#3a2a1a]/50 text-[15px] max-w-xl mx-auto"
            style={body}
          >
            Everything you need to know about our six properties across three
            countries.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 pb-10">
        <div className="max-w-4xl mx-auto">
          {/* Property filter */}
          <div className="mb-6">
            <label
              className="block text-[#3a2a1a]/40 text-[11px] tracking-[0.2em] mb-3"
              style={{ ...body, fontWeight: 500 }}
            >
              Filter by Property
            </label>
            <div className="flex flex-wrap gap-2">
              {PROPERTIES.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedProperty(p.id)}
                  className={`px-4 py-2 rounded-full text-[13px] transition-all border ${
                    selectedProperty === p.id
                      ? "bg-[#3a2a1a] text-white border-[#3a2a1a]"
                      : "bg-white text-[#3a2a1a]/70 border-[#3a2a1a]/15 hover:border-[#3a2a1a]/40"
                  }`}
                  style={{ ...body, fontWeight: 500 }}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Pillar filter */}
          <div>
            <label
              className="block text-[#3a2a1a]/40 text-[11px] tracking-[0.2em] mb-3"
              style={{ ...body, fontWeight: 500 }}
            >
              Filter by Topic
            </label>
            <div className="flex flex-wrap gap-2">
              {PILLARS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedPillar(p.id)}
                  className={`px-4 py-2 rounded-full text-[13px] transition-all border ${
                    selectedPillar === p.id
                      ? "bg-[#3a2a1a] text-white border-[#3a2a1a]"
                      : "bg-white text-[#3a2a1a]/70 border-[#3a2a1a]/15 hover:border-[#3a2a1a]/40"
                  }`}
                  style={{ ...body, fontWeight: 500 }}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p
                className="text-[#3a2a1a]/40 text-[15px]"
                style={body}
              >
                No questions match your current filters. Try adjusting your
                selection.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-[#3a2a1a]/8">
              {filtered.map((item) => (
                <div key={item.id} className="py-1">
                  <button
                    onClick={() => toggle(item.id)}
                    className="w-full text-left py-5 flex items-start justify-between gap-4 group"
                  >
                    <span
                      className="text-[#3a2a1a] text-[16px] md:text-[17px] leading-relaxed group-hover:text-[#3a2a1a]/70 transition-colors"
                      style={{ ...body, fontWeight: 500 }}
                    >
                      {item.question}
                    </span>
                    <motion.svg
                      animate={{ rotate: openId === item.id ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="w-5 h-5 text-[#3a2a1a]/30 flex-shrink-0 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </motion.svg>
                  </button>

                  <AnimatePresence>
                    {openId === item.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pr-10">
                          <p
                            className="text-[#3a2a1a]/60 text-[15px] leading-relaxed"
                            style={body}
                          >
                            {item.answer}
                          </p>
                          {item.properties.length > 0 && (
                            <div className="mt-3 flex flex-wrap gap-1.5">
                              {item.properties.map((pid) => {
                                const prop = PROPERTIES.find(
                                  (p) => p.id === pid
                                );
                                return (
                                  <span
                                    key={pid}
                                    className="text-[10px] tracking-[0.1em] text-[#3a2a1a]/30 border border-[#3a2a1a]/10 px-2 py-0.5 rounded-sm"
                                    style={{ ...body, fontWeight: 500 }}
                                  >
                                    {prop?.label || pid}
                                  </span>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          )}

          {/* Count */}
          <div className="mt-8 text-center">
            <span
              className="text-[#3a2a1a]/25 text-[13px]"
              style={body}
            >
              {filtered.length} question{filtered.length !== 1 ? "s" : ""}
              {selectedProperty !== "all" || selectedPillar !== "all"
                ? " matching your filters"
                : " total"}
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
