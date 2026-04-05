/**
 * Brand Book Page — Colors, fonts, logo usage, photography style, property palettes
 * Internal reference for maintaining brand consistency
 */

import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

const BRAND_COLORS = [
  { name: "Desert Earth", hex: "#3a2a1a", usage: "Primary text, nav pills, headings" },
  { name: "Warm Beige", hex: "#f7f5f0", usage: "Brand page backgrounds" },
  { name: "Parchment", hex: "#ece8e1", usage: "Nav pill backgrounds, cards" },
  { name: "Stone", hex: "#5a4a3a", usage: "Secondary text, body copy" },
  { name: "Sand Light", hex: "#c4a882", usage: "Accents, decorative borders" },
  { name: "Pure White", hex: "#ffffff", usage: "Content hub pages (Blog, Podcast, Press, Awards, FAQ)" },
];

const PROPERTY_PALETTES = [
  { property: "Nayara Springs", gradient: "from-[#f0f5f0] to-[#f7f5f0]", accent: "#5a8a5a", desc: "Soft green — volcanic hot springs, rainforest canopy" },
  { property: "Nayara Gardens", gradient: "from-[#f2f5f0] to-[#f7f5f0]", accent: "#6a9a5a", desc: "Lush green — tropical gardens, family-friendly" },
  { property: "Nayara Tented Camp", gradient: "from-[#faf8f5] to-[#f7f5f0]", accent: "#8a7a5a", desc: "Warm white — glamping, canvas, natural materials" },
  { property: "Nayara Alto Atacama", gradient: "from-[#f5f0ed] to-[#f7f5f0]", accent: "#9a6a4a", desc: "Terracotta — desert earth, red rock, stargazing" },
  { property: "Nayara Bocas del Toro", gradient: "from-[#f0f4f5] to-[#f7f5f0]", accent: "#4a8a8a", desc: "Blue-green — Caribbean waters, overwater villas" },
  { property: "Nayara Hangaroa", gradient: "from-[#f2f2f2] to-[#f7f5f0]", accent: "#5a5a5a", desc: "Volcanic grey — basalt, Moai, Polynesian culture" },
];

const TYPOGRAPHY = [
  { name: "Playfair Display", usage: "Display / Headings", variable: "var(--font-display)", weights: "400 (Regular)", sample: "Luxury Resorts Rooted in Nature" },
  { name: "DM Sans", usage: "Body / UI", variable: "var(--font-body)", weights: "400, 500, 600", sample: "Experience the extraordinary in every detail." },
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

export default function BrandBook() {
  return (
    <div className="min-h-screen bg-white">
      <BrandNavigation pageType="content" />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-[#3a2a1a] text-3xl md:text-5xl tracking-wide mb-4" style={heading}>
            Brand Book
          </h1>
          <p className="text-[#3a2a1a]/50 text-[15px] max-w-2xl mx-auto" style={body}>
            Visual identity guidelines for Nayara Resorts. Colors, typography, photography rules, property palettes, and component library.
          </p>
        </div>
      </section>

      {/* Brand Colors */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[#3a2a1a] text-xl md:text-2xl mb-8" style={heading}>Brand Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {BRAND_COLORS.map((c) => (
              <div key={c.hex} className="text-center">
                <div
                  className="w-full aspect-square rounded-xl mb-3 border border-[#3a2a1a]/8"
                  style={{ backgroundColor: c.hex }}
                />
                <p className="text-[#3a2a1a] text-[13px] font-medium" style={body}>{c.name}</p>
                <p className="text-[#3a2a1a]/40 text-[11px] font-mono">{c.hex}</p>
                <p className="text-[#3a2a1a]/30 text-[11px] mt-1" style={body}>{c.usage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Palettes */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[#3a2a1a] text-xl md:text-2xl mb-8" style={heading}>Property Palettes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROPERTY_PALETTES.map((p) => (
              <div key={p.property} className="border border-[#3a2a1a]/8 rounded-xl overflow-hidden">
                <div className={`h-16 bg-gradient-to-r ${p.gradient}`} />
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: p.accent }} />
                    <span className="text-[#3a2a1a] text-[14px]" style={{ ...body, fontWeight: 600 }}>{p.property}</span>
                  </div>
                  <p className="text-[#3a2a1a]/50 text-[13px]" style={body}>{p.desc}</p>
                  <p className="text-[#3a2a1a]/30 text-[11px] font-mono mt-2">Accent: {p.accent}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[#3a2a1a] text-xl md:text-2xl mb-8" style={heading}>Typography</h2>
          <div className="space-y-6">
            {TYPOGRAPHY.map((t) => (
              <div key={t.name} className="border border-[#3a2a1a]/8 rounded-xl p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-[#3a2a1a] text-[17px]" style={{ ...body, fontWeight: 600 }}>{t.name}</h3>
                    <span className="text-[#3a2a1a]/40 text-[13px]" style={body}>{t.usage} &middot; {t.weights}</span>
                  </div>
                  <code className="text-[#3a2a1a]/30 text-[12px] bg-[#f7f5f0] px-3 py-1 rounded">{t.variable}</code>
                </div>
                <p className="text-[#3a2a1a] text-2xl md:text-3xl" style={{ fontFamily: t.variable, fontWeight: 400 }}>
                  {t.sample}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photography Rules */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[#3a2a1a] text-xl md:text-2xl mb-8" style={heading}>Photography Rules</h2>
          <div className="bg-[#f7f5f0] rounded-xl p-6 md:p-8">
            <ul className="space-y-3">
              {PHOTOGRAPHY_RULES.map((rule, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#3a2a1a]/20 text-[13px] font-mono mt-0.5 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[#3a2a1a]/70 text-[14px] leading-relaxed" style={body}>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Component Library */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[#3a2a1a] text-xl md:text-2xl mb-8" style={heading}>Component Library</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {COMPONENT_LIBRARY.map((c) => (
              <div key={c.name} className="border border-[#3a2a1a]/8 rounded-xl p-5">
                <code className="text-[#3a2a1a] text-[14px] bg-[#f7f5f0] px-2 py-0.5 rounded">{`<${c.name} />`}</code>
                <p className="text-[#3a2a1a]/50 text-[13px] mt-2 leading-relaxed" style={body}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
