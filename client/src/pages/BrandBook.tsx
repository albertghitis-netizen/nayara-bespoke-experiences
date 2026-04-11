/**
 * Brand Book Page — Colors, fonts, property palettes, photography style, design system
 * Internal reference for maintaining brand consistency across all Nayara properties.
 */

import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { palettes, BRAND } from "@/data/propertyPalettes";

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

/* ── Brand Foundation Colors ── */
const BRAND_COLORS = [
  {
    name: "Parchment",
    hex: BRAND.pageBackground,
    rgb: "245, 241, 235",
    profile: "The universal page background. A warm, creamy off-white that grounds every property page.",
    usage: "Page backgrounds, card surfaces",
  },
  {
    name: "Espresso",
    hex: BRAND.primaryText,
    rgb: "44, 36, 24",
    profile: "Deep, warm blackened brown. Primary text color across all pages.",
    usage: "Headlines, body text, navigation",
  },
  {
    name: "Driftwood",
    hex: BRAND.secondaryText,
    rgb: "122, 111, 99",
    profile: "Warm medium gray-brown. Secondary text for descriptions and metadata.",
    usage: "Subtitles, descriptions, captions",
  },
  {
    name: "Sandstone",
    hex: BRAND.tertiaryText,
    rgb: "176, 168, 158",
    profile: "Light warm gray. Tertiary text for labels, timestamps, and subtle UI elements.",
    usage: "Labels, timestamps, placeholders",
  },
  {
    name: "Linen",
    hex: BRAND.divider,
    rgb: "226, 221, 213",
    profile: "Barely-there warm line. Section dividers and card borders.",
    usage: "Dividers, borders, separators",
  },
  {
    name: "Dark Earth",
    hex: BRAND.navPill,
    rgb: "58, 42, 26",
    profile: "Navigation pill background. Deep brown with authority.",
    usage: "Nav pills, overlays, dark UI",
  },
];

/* ── Property Palettes — pulled from the live system ── */
const PROPERTY_PALETTE_DATA = [
  {
    property: "Nayara Tented Camp",
    slug: "tented-camp",
    landscape: "Olive Tree",
    desc: "Warm olive-khaki inspired by the rainforest canopy and canvas tents",
    palette: palettes["tented-camp"],
  },
  {
    property: "Nayara Gardens",
    slug: "gardens",
    landscape: "Rich Green",
    desc: "Full forest green reflecting tropical gardens and lush vegetation",
    palette: palettes.gardens,
  },
  {
    property: "Nayara Springs",
    slug: "springs",
    landscape: "Blue-Green",
    desc: "Teal blue-green bridging volcanic hot springs and rainforest mist",
    palette: palettes.springs,
  },
  {
    property: "Nayara Alto Atacama",
    slug: "alto-atacama",
    landscape: "Desert Red-Brown",
    desc: "Terracotta earth tones drawn from the Atacama's red rock and sand",
    palette: palettes["alto-atacama"],
  },
  {
    property: "Nayara Bocas del Toro",
    slug: "bocas-del-toro",
    landscape: "Ocean Blue-Green",
    desc: "Caribbean ocean teal reflecting overwater villas and coral reefs",
    palette: palettes["bocas-del-toro"],
  },
  {
    property: "Nayara Hangaroa",
    slug: "hangaroa",
    landscape: "Slate Gray",
    desc: "Volcanic stone gray echoing basalt, Moai, and Polynesian heritage",
    palette: palettes.hangaroa,
  },
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
  "Sparing use of short-form video — never more than 3 per page",
];

const DESIGN_PRINCIPLES = [
  {
    title: "Muted, Never Bright",
    desc: "Every color is deliberately restrained. The luxury is in the subtlety. No saturated or neon tones.",
  },
  {
    title: "Rooted in Place",
    desc: "Each property palette is drawn from its physical landscape — desert earth, volcanic stone, ocean teal, forest canopy.",
  },
  {
    title: "Editorial Cartography",
    desc: "The design language treats each property as a chapter in an atlas. Typography is editorial, layout is generous, white space is intentional.",
  },
  {
    title: "Real Over Perfect",
    desc: "Authentic photography over polished stock. The imperfections of real light, real textures, real moments.",
  },
  {
    title: "Progressive Disclosure",
    desc: "Content reveals itself as you scroll. Pillar sections lead to deep pages. Nothing overwhelms on first view.",
  },
  {
    title: "Consistent but Distinct",
    desc: "Shared structure across properties (pillars, navigation, footer) but each property feels like its own world through color and imagery.",
  },
];

const COMPONENT_LIBRARY = [
  { name: "BrandNavigation", desc: "Hamburger + Reserve pills, center label for property pages, warm beige (#ece8e1) pill color" },
  { name: "Footer", desc: "Standardized footer with Explore links matching hamburger menu order" },
  { name: "NativeVideo", desc: "Video player with autoPlay, muted, loop, playsInline — tap-to-unmute on mobile" },
  { name: "PropertySlider", desc: "Horizontal scroll cards for pillar sections on newer property pages" },
  { name: "AwardBadgeStrip", desc: "Property-specific award logos displayed in Story sections" },
  { name: "PillarCrossLink", desc: "Cross-linking cards between property pages and pillar deep pages" },
  { name: "ContentCrossLinks", desc: "Cross-linking between content hub pages (Blog, Podcast, Press, Awards)" },
  { name: "ConciergeChatWidget", desc: "Floating AI concierge chat bubble — Henry, the virtual concierge" },
];

/* ── Animation ── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function BrandBook() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: BRAND.pageBackground, color: BRAND.primaryText }}>
      <BrandNavigation pageType="content" />

      {/* ── Hero ── */}
      <header className="pt-32 pb-20 px-6 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-[11px] tracking-[0.25em] mb-6"
            style={{ ...body, fontWeight: 500, color: BRAND.tertiaryText }}
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
            style={{ ...body, color: BRAND.secondaryText }}
          >
            A living document defining the visual language of Nayara Resorts.
            Six properties, one cohesive identity — rooted in nature, restrained
            in palette, editorial in composition.
          </motion.p>
        </div>
      </header>

      {/* ── 01 Brand Foundation Colors ── */}
      <section className="py-20 md:py-32 px-6 md:px-10" style={{ backgroundColor: BRAND.pageBackground }}>
        <div className="max-w-[1100px] mx-auto">
          <p
            className="text-[11px] tracking-[0.25em] mb-4"
            style={{ ...body, fontWeight: 500, color: BRAND.tertiaryText }}
          >
            01 — Brand Foundation
          </p>
          <h2
            className="text-2xl md:text-4xl leading-[0.95] tracking-wide mb-6"
            style={heading}
          >
            Our Colors
          </h2>
          <p
            className="text-[15px] leading-[1.8] max-w-[600px] mb-16"
            style={{ ...body, color: BRAND.secondaryText }}
          >
            The brand foundation is warm and understated. These six colors appear
            on every page regardless of property — they are the constants that
            unify the entire Nayara digital experience.
          </p>

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
                  style={{
                    backgroundColor: c.hex,
                    border: c.hex === BRAND.pageBackground || c.hex === BRAND.divider ? `1px solid ${BRAND.divider}` : "none",
                  }}
                />
                <h3
                  className="text-lg md:text-xl tracking-wide mb-1"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                >
                  {c.name}
                </h3>
                <p
                  className="text-xs tracking-[0.08em] mb-1"
                  style={{ ...body, fontWeight: 500, color: BRAND.tertiaryText }}
                >
                  {c.hex}
                </p>
                <p
                  className="text-xs mb-1"
                  style={{ ...body, color: BRAND.secondaryText }}
                >
                  RGB {c.rgb}
                </p>
                <p
                  className="text-[11px] leading-relaxed mb-1"
                  style={{ ...body, color: BRAND.secondaryText }}
                >
                  {c.profile}
                </p>
                <p
                  className="text-[10px] tracking-[0.1em] mt-1"
                  style={{ ...body, fontWeight: 500, color: BRAND.tertiaryText }}
                >
                  {c.usage}
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
        style={{ backgroundColor: BRAND.navPill, color: BRAND.divider }}
      >
        <div className="max-w-[1100px] mx-auto">
          <p
            className="text-[11px] tracking-[0.25em] mb-4"
            style={{ ...body, fontWeight: 500, color: BRAND.tertiaryText }}
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
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-8">
                  <h3
                    className="text-2xl md:text-3xl tracking-wide"
                    style={{ fontFamily: f.cssVar, fontWeight: 400 }}
                  >
                    {f.name}
                  </h3>
                  <span
                    className="text-xs tracking-[0.15em]"
                    style={{ ...body, fontWeight: 500, color: BRAND.tertiaryText }}
                  >
                    {f.role}
                  </span>
                </div>

                <p
                  className="text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-wide mb-10"
                  style={{ fontFamily: f.cssVar, fontWeight: 400 }}
                >
                  {f.specimen}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                  {f.weights.map((w) => (
                    <div key={w.label}>
                      <p
                        className="text-[10px] tracking-[0.15em] mb-2"
                        style={{ ...body, fontWeight: 500, color: BRAND.tertiaryText }}
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
                        style={{ fontFamily: f.cssVar, fontWeight: w.weight, color: BRAND.tertiaryText }}
                      >
                        0123456789
                      </p>
                    </div>
                  ))}
                </div>

                <p
                  className="mt-8 text-sm tracking-[0.08em] leading-loose"
                  style={{ fontFamily: f.cssVar, fontWeight: 400, color: BRAND.tertiaryText }}
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
      <section className="py-20 md:py-32 px-6 md:px-10" style={{ backgroundColor: BRAND.pageBackground }}>
        <div className="max-w-[1100px] mx-auto">
          <p
            className="text-[11px] tracking-[0.25em] mb-4"
            style={{ ...body, fontWeight: 500, color: BRAND.tertiaryText }}
          >
            03 — Property Palettes
          </p>
          <h2
            className="text-2xl md:text-4xl leading-[0.95] tracking-wide mb-6"
            style={heading}
          >
            Six Properties, Six Worlds
          </h2>
          <p
            className="text-[15px] leading-[1.8] max-w-[600px] mb-16"
            style={{ ...body, color: BRAND.secondaryText }}
          >
            Each property has a distinct palette drawn from its physical landscape.
            Colors are deliberately muted — fresh, clean, and never bright. The
            shared brand foundation keeps them unified while each palette gives
            the property its own sense of place.
          </p>

          <div className="flex flex-col gap-8">
            {PROPERTY_PALETTE_DATA.map((p, i) => (
              <motion.div
                key={p.slug}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.06 }}
                className="border rounded-sm overflow-hidden"
                style={{ borderColor: BRAND.divider }}
              >
                {/* Gradient bar */}
                <div
                  className="h-3"
                  style={{
                    background: `linear-gradient(to right, ${p.palette.gradientStart}, ${p.palette.gradientEnd})`,
                  }}
                />

                <div className="p-6 md:p-8">
                  {/* Header row */}
                  <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-3">
                    <h3
                      className="text-xl md:text-2xl tracking-wide"
                      style={{ ...heading, color: p.palette.primary }}
                    >
                      {p.property}
                    </h3>
                    <span
                      className="text-[11px] tracking-[0.15em]"
                      style={{ ...body, fontWeight: 500, color: BRAND.tertiaryText }}
                    >
                      {p.landscape}
                    </span>
                  </div>
                  <p
                    className="text-[14px] leading-relaxed mb-6 max-w-[500px]"
                    style={{ ...body, color: BRAND.secondaryText }}
                  >
                    {p.desc}
                  </p>

                  {/* Color swatches row */}
                  <div className="flex flex-wrap gap-4">
                    {/* Primary */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-sm" style={{ backgroundColor: p.palette.primary }} />
                      <div>
                        <p className="text-[10px] tracking-[0.1em]" style={{ ...body, fontWeight: 500, color: BRAND.tertiaryText }}>Primary</p>
                        <p className="text-[12px] font-mono" style={{ color: BRAND.secondaryText }}>{p.palette.primary}</p>
                      </div>
                    </div>
                    {/* Secondary */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-sm" style={{ backgroundColor: p.palette.secondary }} />
                      <div>
                        <p className="text-[10px] tracking-[0.1em]" style={{ ...body, fontWeight: 500, color: BRAND.tertiaryText }}>Secondary</p>
                        <p className="text-[12px] font-mono" style={{ color: BRAND.secondaryText }}>{p.palette.secondary}</p>
                      </div>
                    </div>
                    {/* Accent */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-sm" style={{ backgroundColor: p.palette.accent }} />
                      <div>
                        <p className="text-[10px] tracking-[0.1em]" style={{ ...body, fontWeight: 500, color: BRAND.tertiaryText }}>Accent</p>
                        <p className="text-[12px] font-mono" style={{ color: BRAND.secondaryText }}>{p.palette.accent}</p>
                      </div>
                    </div>
                    {/* Button */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-sm flex items-center justify-center" style={{ backgroundColor: p.palette.buttonBg }}>
                        <span className="text-[9px]" style={{ color: p.palette.buttonText }}>Aa</span>
                      </div>
                      <div>
                        <p className="text-[10px] tracking-[0.1em]" style={{ ...body, fontWeight: 500, color: BRAND.tertiaryText }}>Button</p>
                        <p className="text-[12px] font-mono" style={{ color: BRAND.secondaryText }}>{p.palette.buttonBg}</p>
                      </div>
                    </div>
                    {/* Footer */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-sm flex items-center justify-center" style={{ backgroundColor: p.palette.footerBg }}>
                        <span className="text-[9px]" style={{ color: p.palette.footerText }}>Aa</span>
                      </div>
                      <div>
                        <p className="text-[10px] tracking-[0.1em]" style={{ ...body, fontWeight: 500, color: BRAND.tertiaryText }}>Footer</p>
                        <p className="text-[12px] font-mono" style={{ color: BRAND.secondaryText }}>{p.palette.footerBg}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04 Design Principles ── */}
      <section
        className="py-20 md:py-32 px-6 md:px-10"
        style={{ backgroundColor: BRAND.navPill, color: BRAND.divider }}
      >
        <div className="max-w-[1100px] mx-auto">
          <p
            className="text-[11px] tracking-[0.25em] mb-4"
            style={{ ...body, fontWeight: 500, color: BRAND.tertiaryText }}
          >
            04 — Design Principles
          </p>
          <h2
            className="text-2xl md:text-4xl leading-[0.95] tracking-wide mb-16"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            How We Design
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {DESIGN_PRINCIPLES.map((p, i) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.06 }}
              >
                <span
                  className="text-[11px] font-mono block mb-2"
                  style={{ color: BRAND.tertiaryText }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="text-lg md:text-xl tracking-wide mb-2"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-[14px] leading-relaxed"
                  style={{ ...body, color: BRAND.tertiaryText }}
                >
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05 Photography Rules ── */}
      <section className="py-20 md:py-32 px-6 md:px-10" style={{ backgroundColor: BRAND.pageBackground }}>
        <div className="max-w-[1100px] mx-auto">
          <p
            className="text-[11px] tracking-[0.25em] mb-4"
            style={{ ...body, fontWeight: 500, color: BRAND.tertiaryText }}
          >
            05 — Photography
          </p>
          <h2
            className="text-2xl md:text-4xl leading-[0.95] tracking-wide mb-12"
            style={heading}
          >
            Photography Rules
          </h2>
          <div className="space-y-4">
            {PHOTOGRAPHY_RULES.map((rule, i) => (
              <div key={i} className="flex items-start gap-4">
                <span
                  className="text-[13px] font-mono mt-0.5 flex-shrink-0"
                  style={{ color: BRAND.tertiaryText }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[14px] leading-relaxed" style={{ ...body, color: BRAND.secondaryText }}>
                  {rule}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 06 Component Library ── */}
      <section
        className="py-20 md:py-32 px-6 md:px-10"
        style={{ backgroundColor: BRAND.navPill, color: BRAND.divider }}
      >
        <div className="max-w-[1100px] mx-auto">
          <p
            className="text-[11px] tracking-[0.25em] mb-4"
            style={{ ...body, fontWeight: 500, color: BRAND.tertiaryText }}
          >
            06 — Components
          </p>
          <h2
            className="text-2xl md:text-4xl leading-[0.95] tracking-wide mb-12"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Component Library
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {COMPONENT_LIBRARY.map((c) => (
              <div
                key={c.name}
                className="border rounded-sm p-5"
                style={{ borderColor: "rgba(226,221,213,0.15)" }}
              >
                <code
                  className="text-[14px] px-2 py-0.5 rounded"
                  style={{ backgroundColor: "rgba(226,221,213,0.1)", color: BRAND.divider }}
                >
                  {`<${c.name} />`}
                </code>
                <p
                  className="text-[13px] mt-2 leading-relaxed"
                  style={{ ...body, color: BRAND.tertiaryText }}
                >
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 07 Page Architecture ── */}
      <section className="py-20 md:py-32 px-6 md:px-10" style={{ backgroundColor: BRAND.pageBackground }}>
        <div className="max-w-[1100px] mx-auto">
          <p
            className="text-[11px] tracking-[0.25em] mb-4"
            style={{ ...body, fontWeight: 500, color: BRAND.tertiaryText }}
          >
            07 — Architecture
          </p>
          <h2
            className="text-2xl md:text-4xl leading-[0.95] tracking-wide mb-6"
            style={heading}
          >
            Page Structure
          </h2>
          <p
            className="text-[15px] leading-[1.8] max-w-[600px] mb-12"
            style={{ ...body, color: BRAND.secondaryText }}
          >
            Every property page follows the same pillar structure. Deep pages
            expand each pillar into a full editorial experience. The three Costa
            Rica properties share deep pages but render in their own palette.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Property Page Flow */}
            <div className="border rounded-sm p-6" style={{ borderColor: BRAND.divider }}>
              <h3
                className="text-lg tracking-wide mb-4"
                style={{ ...heading, fontWeight: 500 }}
              >
                Property Page Flow
              </h3>
              <div className="space-y-2">
                {["Hero Video", "Story", "Rooms", "Experiences", "Wellness", "Gastronomy", "Sustainability", "Nayara By Night", "Footer"].map((item, i) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="text-[11px] font-mono w-5" style={{ color: BRAND.tertiaryText }}>{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[14px]" style={{ ...body, color: BRAND.secondaryText }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Pillars */}
            <div className="border rounded-sm p-6" style={{ borderColor: BRAND.divider }}>
              <h3
                className="text-lg tracking-wide mb-4"
                style={{ ...heading, fontWeight: 500 }}
              >
                Five Pillars (Deep Pages)
              </h3>
              <div className="space-y-2">
                {[
                  { name: "Rooms", desc: "Accommodation categories and amenities" },
                  { name: "Experiences", desc: "On-property and off-property excursions" },
                  { name: "Wellness", desc: "Spa, yoga, thermal springs, holistic programs" },
                  { name: "Gastronomy", desc: "Restaurants, bars, culinary philosophy" },
                  { name: "Sustainability", desc: "Environmental and community initiatives" },
                ].map((item) => (
                  <div key={item.name} className="flex items-start gap-3">
                    <span className="text-[14px] font-medium w-28 flex-shrink-0" style={{ ...body, color: BRAND.primaryText }}>{item.name}</span>
                    <span className="text-[13px]" style={{ ...body, color: BRAND.tertiaryText }}>{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
