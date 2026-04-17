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
const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

/* ── Master Swatch Set (only the ones we use) ── */
const SWATCHES = [
  { num: 1, name: "Bone", hex: "#F7F5F0", role: "Page background, card surfaces" },
  { num: 2, name: "Gravel", hex: "#E6DFD5", role: "Dividers, borders, separators" },
  { num: 3, name: "Olive Tree", hex: "#868B75", role: "Tented Camp primary" },
  { num: 4, name: "Dark Olive", hex: "#525642", role: "Tented Camp secondary" },
  { num: 5, name: "Espresso", hex: "#3B2B26", role: "Brand text, nav pills, dark UI" },
  { num: 7, name: "Terracotta", hex: "#6F463D", role: "Alto Atacama primary" },
  { num: 8, name: "Ice Blue", hex: "#C2D0D6", role: "Bocas/Hangaroa footer text" },
  { num: 9, name: "Brown Gravel", hex: "#E2D7C8", role: "Atacama footer text, brand bone" },
  { num: 10, name: "Slate Blue", hex: "#5A6F7B", role: "Springs/Bocas secondary" },
  { num: 12, name: "Clover Green", hex: "#286241", role: "Gardens primary" },
  { num: 13, name: "Deep Navy", hex: "#1B2534", role: "Bocas/Hangaroa footer bg" },
  { num: 15, name: "Cool Gray", hex: "#86898C", role: "Springs accent" },
  { num: 21, name: "Teal", hex: "#3B6E7B", role: "Springs primary" },
  { num: 22, name: "Dark Olive", hex: "#424A3E", role: "Gardens secondary" },
  { num: 24, name: "Steel Blue", hex: "#536878", role: "Hangaroa primary" },
  { num: 26, name: "Taupe", hex: "#9A9086", role: "Tertiary text, accents" },
  { num: 28, name: "Blue Gray", hex: "#67737C", role: "Secondary text, Hangaroa secondary" },
  { num: 30, name: "Dark Evergreen", hex: "#22322E", role: "Gardens/Springs footer bg" },
  { num: 31, name: "Ocean", hex: "#2A6489", role: "Bocas del Toro primary" },
  { num: 32, name: "Camel", hex: "#C29B70", role: "Atacama accent" },
  { num: 35, name: "Sky Blue", hex: "#7FA9C9", role: "Bocas accent" },
];

/* ── Property Palettes — pulled from the live system ── */
const PROPERTY_PALETTE_DATA = [
  {
    property: "Nayara Tented Camp",
    slug: "tented-camp",
    landscape: "Olive Tree",
    desc: "Olive Tree (#868B75, swatch #3) — warm sage-olive inspired by the rainforest canopy",
    palette: palettes["tented-camp"],
  },
  {
    property: "Nayara Gardens",
    slug: "gardens",
    landscape: "Clover Green",
    desc: "Clover Green (#286241, swatch #12) — rich clover green reflecting tropical gardens",
    palette: palettes.gardens,
  },
  {
    property: "Nayara Springs",
    slug: "springs",
    landscape: "Teal",
    desc: "Teal (#3B6E7B, swatch #21) — blue-green bridging volcanic hot springs and rainforest mist",
    palette: palettes.springs,
  },
  {
    property: "Nayara Alto Atacama",
    slug: "alto-atacama",
    landscape: "Terracotta",
    desc: "Terracotta (#6F463D, swatch #7) — earth tones drawn from the Atacama's red rock and sand",
    palette: palettes["alto-atacama"],
  },
  {
    property: "Nayara Bocas del Toro",
    slug: "bocas-del-toro",
    landscape: "Ocean",
    desc: "Ocean (#2A6489, swatch #31) — Caribbean blue reflecting overwater villas and coral reefs",
    palette: palettes["bocas-del-toro"],
  },
  {
    property: "Nayara Hangaroa",
    slug: "hangaroa",
    landscape: "Steel Blue",
    desc: "Steel Blue (#536878, swatch #24) — volcanic stone blue echoing basalt, Moai, and Polynesian heritage",
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
  { name: "BrandNavigation", desc: "Hamburger + Reserve pills, center label for property pages, Bone (#F7F5F0) pill color" },
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

      {/* ── 01 Master Swatch Set ── */}
      <section className="py-20 md:py-32 px-6 md:px-10" style={{ backgroundColor: BRAND.pageBackground }}>
        <div className="max-w-[1100px] mx-auto">
          <p
            className="text-[11px] tracking-[0.25em] mb-4"
            style={{ ...body, fontWeight: 500, color: BRAND.tertiaryText }}
          >
            01 — Master Swatch Set
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
            The 21 active swatches drawn from the official 36-color brand set.
            Every color on the site traces back to one of these — no ad-hoc hex
            values, no bright tones, no exceptions.
          </p>

          {/* Swatch grid with images */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 md:gap-5">
            {SWATCHES.map((s, i) => (
              <motion.div
                key={s.num}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.03 }}
                className="text-center"
              >
                <img
                  src={`${CDN}/${s.num}_${
                    // CDN hash lookup
                    ({1:"29573dcd",2:"af32f380",3:"1874d5a1",4:"9800469b",5:"8dff3b35",7:"477366c8",8:"b1d3695c",9:"07201e20",10:"da2c579e",12:"f4d29504",13:"f8277772",15:"afa79c9b",21:"786dd9d0",22:"377eac60",24:"296a4fa2",26:"bdce13ff",28:"10d0d224",30:"2eb94661",31:"fb3c98dd",32:"54707cea",35:"c564794c"} as Record<number,string>)[s.num]
                  }.png`}
                  alt={`Swatch #${s.num} — ${s.name}`}
                  className="w-full aspect-square rounded-sm mb-2"
                  style={{
                    border: s.hex === "#F7F5F0" || s.hex === "#E6DFD5" ? `1px solid ${BRAND.divider}` : "none",
                  }}
                />
                <p
                  className="text-[10px] tracking-[0.08em] font-medium"
                  style={{ ...body, fontWeight: 600, color: BRAND.primaryText }}
                >
                  #{s.num}
                </p>
                <p
                  className="text-[11px] tracking-wide mt-0.5"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: BRAND.primaryText }}
                >
                  {s.name}
                </p>
                <p
                  className="text-[10px] font-mono mt-0.5"
                  style={{ color: BRAND.secondaryText }}
                >
                  {s.hex}
                </p>
                <p
                  className="text-[9px] mt-1 leading-tight"
                  style={{ ...body, color: BRAND.tertiaryText }}
                >
                  {s.role}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Full-width palette strip */}
          <div className="mt-16 flex rounded-sm overflow-hidden h-16 md:h-24">
            {SWATCHES.map((s) => (
              <div key={s.num} className="flex-1" style={{ backgroundColor: s.hex }} />
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
                <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16">
                  <div className="md:w-1/3">
                    <h3
                      className="text-xl md:text-2xl tracking-wide mb-1"
                      style={{ fontFamily: f.cssVar, fontWeight: 500 }}
                    >
                      {f.name}
                    </h3>
                    <p
                      className="text-[11px] tracking-[0.15em] mb-4"
                      style={{ ...body, fontWeight: 500, color: BRAND.tertiaryText }}
                    >
                      {f.role}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {f.weights.map((w) => (
                        <span
                          key={w.label}
                          className="text-[11px] px-2 py-1 rounded"
                          style={{
                            fontFamily: f.cssVar,
                            fontWeight: w.weight,
                            backgroundColor: "rgba(226,221,213,0.1)",
                            color: BRAND.divider,
                          }}
                        >
                          {w.label} ({w.weight})
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <p
                      className="text-3xl md:text-5xl leading-[1.1] tracking-wide"
                      style={{ fontFamily: f.cssVar, fontWeight: 400 }}
                    >
                      {f.specimen}
                    </p>
                  </div>
                </div>
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
            Six Worlds, One System
          </h2>
          <p
            className="text-[15px] leading-[1.8] max-w-[600px] mb-16"
            style={{ ...body, color: BRAND.secondaryText }}
          >
            Each property draws its primary color from the landscape it inhabits.
            The palette expands into secondary, accent, button, footer, and
            navigation tones — all from the master swatch set.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {PROPERTY_PALETTE_DATA.map((p, i) => (
              <motion.div
                key={p.slug}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08 }}
                className="border rounded-sm overflow-hidden"
                style={{ borderColor: BRAND.divider }}
              >
                {/* Primary swatch header */}
                <div className="h-28 md:h-36 flex items-end p-5" style={{ backgroundColor: p.palette.primary }}>
                  <div>
                    <h3
                      className="text-xl md:text-2xl tracking-wide"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: p.palette.buttonText }}
                    >
                      {p.property}
                    </h3>
                    <p
                      className="text-[11px] tracking-[0.08em] mt-1"
                      style={{ ...body, fontWeight: 400, color: `${p.palette.buttonText}99` }}
                    >
                      {p.desc}
                    </p>
                  </div>
                </div>

                {/* Palette detail */}
                <div className="p-5 grid grid-cols-2 gap-4">
                  {/* Primary */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-sm flex items-center justify-center" style={{ backgroundColor: p.palette.primary }}>
                      <span className="text-[9px]" style={{ color: p.palette.buttonText }}>Aa</span>
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.1em]" style={{ ...body, fontWeight: 500, color: BRAND.tertiaryText }}>Primary</p>
                      <p className="text-[12px] font-mono" style={{ color: BRAND.secondaryText }}>{p.palette.primary}</p>
                    </div>
                  </div>
                  {/* Secondary */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-sm flex items-center justify-center" style={{ backgroundColor: p.palette.secondary }}>
                      <span className="text-[9px] text-white">Aa</span>
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.1em]" style={{ ...body, fontWeight: 500, color: BRAND.tertiaryText }}>Secondary</p>
                      <p className="text-[12px] font-mono" style={{ color: BRAND.secondaryText }}>{p.palette.secondary}</p>
                    </div>
                  </div>
                  {/* Accent */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-sm flex items-center justify-center" style={{ backgroundColor: p.palette.accent }}>
                      <span className="text-[9px] text-white">Aa</span>
                    </div>
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
                  {/* Nav Pill */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-sm flex items-center justify-center" style={{ backgroundColor: p.palette.navPillBg }}>
                      <span className="text-[9px]" style={{ color: p.palette.navPillText }}>Aa</span>
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.1em]" style={{ ...body, fontWeight: 500, color: BRAND.tertiaryText }}>Nav Pill</p>
                      <p className="text-[12px] font-mono" style={{ color: BRAND.secondaryText }}>{p.palette.navPillBg}</p>
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
