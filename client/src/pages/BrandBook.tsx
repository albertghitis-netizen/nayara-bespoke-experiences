/**
 * Brand Book Page — Colors, fonts, logo usage, photography style, property palettes
 * Internal reference for maintaining brand consistency
 * Updated: Alo Yoga-inspired color palette + Cormorant Garamond / DM Sans typography
 */

import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

/* ── Alo Yoga-inspired palette ── */
const BRAND_COLORS = [
  {
    name: "Gravel",
    hex: "#9C9A98",
    rgb: "156, 154, 152",
    profile: "Neutral, medium-toned stone grey with very subtle warm undertones.",
  },
  {
    name: "Bone",
    hex: "#E6DFD5",
    rgb: "230, 223, 213",
    profile: "Creamy, light off-white that pulls slightly warmer than stark white.",
  },
  {
    name: "Espresso",
    hex: "#3B2B26",
    rgb: "59, 43, 38",
    profile: "Deep, rich, blackened brown.",
  },
  {
    name: "Olive Tree",
    hex: "#868B75",
    rgb: "134, 139, 117",
    profile: "Muted, dusty sage or light army green.",
  },
  {
    name: "Olive",
    hex: "#525642",
    rgb: "82, 86, 66",
    profile: "Classic, dark military green with earthy brown undertones.",
  },
  {
    name: "Blue Stone",
    hex: "#5A6F7B",
    rgb: "90, 111, 123",
    profile: "Desaturated, stormy grey-blue.",
  },
];

const PROPERTY_PALETTES = [
  { property: "Nayara Springs", gradient: "from-[#f0f5f0] to-[#f7f5f0]", accent: "#5a8a5a", desc: "Soft green — volcanic hot springs, rainforest canopy" },
  { property: "Nayara Gardens", gradient: "from-[#f2f5f0] to-[#f7f5f0]", accent: "#6a9a5a", desc: "Lush green — tropical gardens, family-friendly" },
  { property: "Nayara Tented Camp", gradient: "from-[#faf8f5] to-[#f7f5f0]", accent: "#8a7a5a", desc: "Warm white — glamping, canvas, natural materials" },
  { property: "Nayara Alto Atacama", gradient: "from-[#f5f0ed] to-[#f7f5f0]", accent: "#9a6a4a", desc: "Terracotta — desert earth, red rock, stargazing" },
  { property: "Nayara Bocas del Toro", gradient: "from-[#f0f4f5] to-[#f7f5f0]", accent: "#4a8a8a", desc: "Blue-green — Caribbean waters, overwater villas" },
  { property: "Nayara Hangaroa", gradient: "from-[#f2f2f2] to-[#f7f5f0]", accent: "#5a5a5a", desc: "Volcanic grey — basalt, Moai, Polynesian culture" },
];

/* ── Font specimens ── */
const FONTS = [
  {
    name: "Cormorant Garamond",
    role: "Display / Headlines",
    cssVar: "var(--font-display)",
    weights: [
      { label: "Light", weight: 300 },
      { label: "Regular", weight: 400 },
      { label: "Medium", weight: 500 },
      { label: "SemiBold", weight: 600 },
      { label: "Bold", weight: 700 },
    ],
    specimen: "Luxury Resorts Rooted in Nature",
  },
  {
    name: "DM Sans",
    role: "Body / UI",
    cssVar: "var(--font-body)",
    weights: [
      { label: "Light", weight: 300 },
      { label: "Regular", weight: 400 },
      { label: "Medium", weight: 500 },
      { label: "SemiBold", weight: 600 },
      { label: "Bold", weight: 700 },
    ],
    specimen: "Where wild nature and refined comfort become one.",
  },
];

const PHOTOGRAPHY_RULES = [
  "Real photos only — no AI-generated imagery, no stock photos",
  "Horizontal photos for desktop hero sections, vertical for mobile",
  "Horizontal videos for desktop, vertical videos for mobile",
  "No borders on images — edge-to-edge or with natural margins",
  "Luxury aesthetic — warm tones, natural light, editorial composition",
  "Property-specific color grading that matches the property palette",
  "No repeated photos across the entire site",
];

const COMPONENT_LIBRARY = [
  { name: "BrandNavigation", desc: "Hamburger + Reserve pills, center label for property pages, warm beige (#ece8e1) pill color" },
  { name: "Footer", desc: "Standardized footer with Explore links matching hamburger menu order" },
  { name: "NativeVideo", desc: "Video player with autoPlay, muted, loop, playsInline — replaces BlobVideo" },
  { name: "FadeIn", desc: "Intersection observer animation wrapper for scroll-triggered reveals" },
  { name: "AwardBadgeStrip", desc: "Property-specific award logos displayed in Story sections" },
  { name: "PillarCrossLink", desc: "Cross-linking cards between property pages and pillar pages" },
  { name: "ContentCrossLinks", desc: "Cross-linking between content hub pages (Blog, Podcast, Press, Awards)" },
  { name: "ConciergeChatWidget", desc: "Floating AI concierge chat bubble on all pages" },
];

/* ── Animation ── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function BrandBook() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f7f5f0", color: "#3a2a1a" }}>
      <BrandNavigation pageType="content" />

      {/* ── Hero ── */}
      <header className="pt-32 pb-20 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-[11px] tracking-[0.25em] mb-6"
            style={{ ...body, fontWeight: 500, color: "#9C9A98" }}
          >
            Brand Guidelines
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-5xl lg:text-7xl leading-[0.95] tracking-wide"
            style={{ ...heading }}
          >
            Nayara Resorts
            <br />
            Brand Book
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-8 max-w-[520px] text-sm md:text-base leading-relaxed"
            style={{ ...body, color: "#5a4a3a" }}
          >
            A living document defining the visual language of Nayara Resorts.
            Colors derived from Alo Yoga's physical fabric dyes, translated into
            their closest digital equivalents under neutral studio lighting.
          </motion.p>
        </div>
      </header>

      {/* ── 01 Color Palette ── */}
      <section className="py-20 md:py-32 px-6 md:px-10" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-[1100px] mx-auto">
          <p
            className="text-[11px] tracking-[0.25em] mb-4"
            style={{ ...body, fontWeight: 500, color: "#9C9A98" }}
          >
            01 — Color Palette
          </p>
          <h2
            className="text-2xl md:text-4xl leading-[0.95] tracking-wide mb-16"
            style={heading}
          >
            Our Colors
          </h2>

          {/* Swatch grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {BRAND_COLORS.map((c, i) => (
              <motion.div
                key={c.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08 }}
              >
                <div
                  className="w-full aspect-[4/3] rounded-sm mb-4"
                  style={{ backgroundColor: c.hex, border: c.hex === "#E6DFD5" ? "1px solid #d5cec4" : "none" }}
                />
                <h3
                  className="text-lg md:text-xl tracking-wide mb-1"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                >
                  {c.name}
                </h3>
                <p
                  className="text-xs tracking-[0.08em] mb-2"
                  style={{ ...body, fontWeight: 500, color: "#9C9A98" }}
                >
                  {c.hex}
                </p>
                <p
                  className="text-xs mb-1"
                  style={{ ...body, color: "#5a4a3a" }}
                >
                  RGB {c.rgb}
                </p>
                <p
                  className="text-xs leading-relaxed"
                  style={{ ...body, color: "#8a7a6a" }}
                >
                  {c.profile}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Full-width palette strip */}
          <div className="mt-16 flex rounded-sm overflow-hidden h-16 md:h-24">
            {BRAND_COLORS.map((c) => (
              <div key={c.name} className="flex-1" style={{ backgroundColor: c.hex }} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 02 Typography ── */}
      <section
        className="py-20 md:py-32 px-6 md:px-10"
        style={{ backgroundColor: "#3B2B26", color: "#E6DFD5" }}
      >
        <div className="max-w-[1100px] mx-auto">
          <p
            className="text-[11px] tracking-[0.25em] mb-4"
            style={{ ...body, fontWeight: 500, color: "#9C9A98" }}
          >
            02 — Typography
          </p>
          <h2
            className="text-2xl md:text-4xl leading-[0.95] tracking-wide mb-16"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Our Typefaces
          </h2>

          <div className="flex flex-col gap-20">
            {FONTS.map((f) => (
              <motion.div
                key={f.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
              >
                {/* Font name + role */}
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-8">
                  <h3
                    className="text-2xl md:text-3xl tracking-wide"
                    style={{ fontFamily: f.cssVar, fontWeight: 400 }}
                  >
                    {f.name}
                  </h3>
                  <span
                    className="text-xs tracking-[0.15em]"
                    style={{ ...body, fontWeight: 500, color: "#9C9A98" }}
                  >
                    {f.role}
                  </span>
                </div>

                {/* Specimen at large size */}
                <p
                  className="text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-wide mb-10"
                  style={{ fontFamily: f.cssVar, fontWeight: 400 }}
                >
                  {f.specimen}
                </p>

                {/* Weight specimens */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                  {f.weights.map((w) => (
                    <div key={w.label}>
                      <p
                        className="text-[10px] tracking-[0.15em] mb-2"
                        style={{ ...body, fontWeight: 500, color: "#9C9A98" }}
                      >
                        {w.label} — {w.weight}
                      </p>
                      <p
                        className="text-lg md:text-xl leading-snug"
                        style={{ fontFamily: f.cssVar, fontWeight: w.weight }}
                      >
                        Aa Bb Cc Dd
                      </p>
                      <p
                        className="text-sm leading-snug mt-1"
                        style={{ fontFamily: f.cssVar, fontWeight: w.weight, color: "#9C9A98" }}
                      >
                        0123456789
                      </p>
                    </div>
                  ))}
                </div>

                {/* Alphabet */}
                <p
                  className="mt-8 text-sm tracking-[0.08em] leading-loose"
                  style={{ fontFamily: f.cssVar, fontWeight: 400, color: "#9C9A98" }}
                >
                  A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
                  <br />
                  a b c d e f g h i j k l m n o p q r s t u v w x y z
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03 Property Palettes ── */}
      <section className="py-20 md:py-32 px-6 md:px-10" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-[1100px] mx-auto">
          <p
            className="text-[11px] tracking-[0.25em] mb-4"
            style={{ ...body, fontWeight: 500, color: "#9C9A98" }}
          >
            03 — Property Palettes
          </p>
          <h2
            className="text-2xl md:text-4xl leading-[0.95] tracking-wide mb-12"
            style={heading}
          >
            Property Colors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROPERTY_PALETTES.map((p) => (
              <div key={p.property} className="border border-[#3a2a1a]/8 rounded-sm overflow-hidden">
                <div className={`h-16 bg-gradient-to-r ${p.gradient}`} />
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: p.accent }} />
                    <span className="text-[14px]" style={{ ...body, fontWeight: 600 }}>{p.property}</span>
                  </div>
                  <p className="text-[#3a2a1a]/50 text-[13px]" style={body}>{p.desc}</p>
                  <p className="text-[#3a2a1a]/30 text-[11px] font-mono mt-2">Accent: {p.accent}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04 Photography Rules ── */}
      <section
        className="py-20 md:py-32 px-6 md:px-10"
        style={{ backgroundColor: "#525642", color: "#E6DFD5" }}
      >
        <div className="max-w-[1100px] mx-auto">
          <p
            className="text-[11px] tracking-[0.25em] mb-4"
            style={{ ...body, fontWeight: 500, color: "#9C9A98" }}
          >
            04 — Photography
          </p>
          <h2
            className="text-2xl md:text-4xl leading-[0.95] tracking-wide mb-12"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Photography Rules
          </h2>
          <div className="space-y-4">
            {PHOTOGRAPHY_RULES.map((rule, i) => (
              <div key={i} className="flex items-start gap-4">
                <span
                  className="text-[13px] font-mono mt-0.5 flex-shrink-0"
                  style={{ color: "#868B75" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[14px] leading-relaxed" style={body}>
                  {rule}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05 Component Library ── */}
      <section className="py-20 md:py-32 px-6 md:px-10" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-[1100px] mx-auto">
          <p
            className="text-[11px] tracking-[0.25em] mb-4"
            style={{ ...body, fontWeight: 500, color: "#9C9A98" }}
          >
            05 — Components
          </p>
          <h2
            className="text-2xl md:text-4xl leading-[0.95] tracking-wide mb-12"
            style={heading}
          >
            Component Library
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {COMPONENT_LIBRARY.map((c) => (
              <div key={c.name} className="border border-[#3a2a1a]/8 rounded-sm p-5">
                <code className="text-[14px] bg-[#E6DFD5] px-2 py-0.5 rounded text-[#3B2B26]">{`<${c.name} />`}</code>
                <p className="text-[#3a2a1a]/50 text-[13px] mt-2 leading-relaxed" style={body}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 06 Rules (placeholder) ── */}
      <section
        className="py-20 md:py-32 px-6 md:px-10"
        style={{ backgroundColor: "#3B2B26", color: "#E6DFD5" }}
      >
        <div className="max-w-[1100px] mx-auto">
          <p
            className="text-[11px] tracking-[0.25em] mb-4"
            style={{ ...body, fontWeight: 500, color: "#9C9A98" }}
          >
            06 — Rules
          </p>
          <h2
            className="text-2xl md:text-4xl leading-[0.95] tracking-wide mb-8"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Brand Rules
          </h2>
          <p
            className="text-sm md:text-base leading-relaxed max-w-[520px]"
            style={{ ...body, color: "#9C9A98" }}
          >
            This section is awaiting your input. Share the rules and they will
            be added here.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
