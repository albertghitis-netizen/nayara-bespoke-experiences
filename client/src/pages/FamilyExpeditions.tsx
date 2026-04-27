/**
 * FAMILY EXPEDITIONS — Pura Vida Sub-page (Coming Soon)
 * Placeholder page for the Family Expeditions pillar
 */
import { motion } from "framer-motion";
import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";
import { ArrowLeft, TreePine, Compass, Bug, Bird } from "lucide-react";
import { Link } from "wouter";

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;
const bodyMedium = { fontFamily: "var(--font-body)", fontWeight: 500 } as const;

const C = {
  bg: "#f7f5f0",
  espresso: "#3a2a1a",
  secondary: "#5a4a3a",
  accent: "#b08d57",
  muted: "#8a7a6a",
  olive: "#6B7B5E",
};

const TEASER_ITEMS = [
  {
    icon: TreePine,
    title: "Junior Naturalist Program",
    desc: "Guided rainforest walks designed for young explorers — spotting sloths, toucans, and poison dart frogs.",
  },
  {
    icon: Compass,
    title: "Volcano & Waterfall Treks",
    desc: "Family-friendly trails through Arenal's volcanic landscape, with stops at hidden waterfalls.",
  },
  {
    icon: Bug,
    title: "Night Safari",
    desc: "After dark, the rainforest transforms. Discover nocturnal creatures with expert guides.",
  },
  {
    icon: Bird,
    title: "Canopy Adventures",
    desc: "Hanging bridges, zip lines, and treetop platforms — the forest from above.",
  },
];

export default function FamilyExpeditions() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: C.bg }}>
      <BrandNavigation pageType="content" />
      <HeroSection />
      <TeaserSection />
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />

      {/* Back to Pura Vida */}
      <div className="absolute top-24 left-0 right-0 z-20 flex justify-center">
        <Link
          href="/costa-rica"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 text-white/80" />
          <span
            className="text-white/80 text-[11px] tracking-[0.2em] uppercase"
            style={body}
          >
            Pura Vida
          </span>
        </Link>
      </div>

      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center pb-12 md:pb-16 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-3xl md:text-5xl lg:text-6xl tracking-wide text-center leading-[1.1]"
          style={heading}
        >
          Family Expeditions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-4 text-white/60 text-sm md:text-base tracking-[0.1em] uppercase text-center"
          style={body}
        >
          Where wonder meets the wild
        </motion.p>
      </div>
    </section>
  );
}

function TeaserSection() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Coming Soon badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block text-[10px] tracking-[0.3em] uppercase px-4 py-1.5 border rounded-full mb-6"
            style={{ fontFamily: "var(--font-body)", color: C.accent, borderColor: C.accent + "40" }}
          >
            Coming Soon
          </span>
          <h2
            className="text-2xl md:text-3xl tracking-wide mb-4"
            style={{ ...heading, color: C.espresso }}
          >
            Adventures Designed for Families
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ ...body, color: C.secondary }}
          >
            The rainforest is the greatest classroom on Earth. We're curating
            experiences that let families explore together — from guided nature
            walks to volcano treks, every expedition is built for wonder at any age.
          </p>
        </motion.div>

        {/* Teaser grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {TEASER_ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex gap-4 p-6 rounded-xl border"
              style={{ borderColor: C.espresso + "10", backgroundColor: C.bg }}
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: C.olive + "15" }}
              >
                <item.icon className="w-5 h-5" style={{ color: C.olive }} />
              </div>
              <div>
                <h3
                  className="text-base mb-1"
                  style={{ ...bodyMedium, color: C.espresso }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ ...body, color: C.muted }}
                >
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Link
            href="/curated-excursions"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border hover:bg-[#3a2a1a] hover:text-white transition-all duration-300 text-[12px] tracking-[0.15em] uppercase"
            style={{ ...bodyMedium, color: C.espresso, borderColor: C.espresso + "30" }}
          >
            Explore Curated Excursions
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
