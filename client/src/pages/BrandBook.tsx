/**
 * HIDDEN LANDING PAGE — Nayara Brand Book
 * Colors, typography, design principles per hotel
 * Route: /brand-book (not linked anywhere in the site)
 * No navigation, no footer — standalone page
 */

import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};

interface ColorSwatchProps {
  hex: string;
  name: string;
  role: string;
}

function ColorSwatch({ hex, name, role }: ColorSwatchProps) {
  return (
    <div className="flex items-center gap-4">
      <div
        className="w-12 h-12 rounded-sm border border-[#F7F5F0]/10 flex-shrink-0"
        style={{ backgroundColor: hex }}
      />
      <div>
        <p className="text-sm font-medium">{name}</p>
        <p className="text-[10px] text-[#F7F5F0]/40 uppercase tracking-wider">{role} · {hex}</p>
      </div>
    </div>
  );
}

interface PropertyPaletteProps {
  name: string;
  subtitle: string;
  borderColor: string;
  colors: ColorSwatchProps[];
}

function PropertyPalette({ name, subtitle, borderColor, colors }: PropertyPaletteProps) {
  return (
    <motion.div
      {...fadeIn}
      className="border border-[#F7F5F0]/10 p-8"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-8" style={{ backgroundColor: borderColor }} />
        <div>
          <h3 className="text-lg font-medium" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {name}
          </h3>
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#F7F5F0]/30">{subtitle}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {colors.map((c) => (
          <ColorSwatch key={c.hex + c.role} {...c} />
        ))}
      </div>
    </motion.div>
  );
}

export default function BrandBook() {
  return (
    <div className="min-h-screen bg-[#0D0704] text-[#F7F5F0]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Hero */}
      <section className="min-h-[60vh] flex flex-col justify-center items-center px-6 md:px-16 text-center">
        <motion.p
          {...fadeIn}
          className="text-[11px] tracking-[0.4em] uppercase text-[#F7F5F0]/40 mb-6"
        >
          Internal Document — Confidential
        </motion.p>
        <motion.h1
          {...fadeIn}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-6xl leading-tight tracking-wide"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
        >
          Nayara Brand Book
        </motion.h1>
        <motion.p
          {...fadeIn}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-sm md:text-base text-[#F7F5F0]/60 max-w-2xl leading-relaxed"
        >
          Visual identity system, color palettes, typography, and design principles
          governing the Nayara digital ecosystem.
        </motion.p>
      </section>

      {/* Typography */}
      <section className="py-20 px-6 md:px-16 border-t border-[#F7F5F0]/5">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            {...fadeIn}
            className="text-2xl md:text-3xl mb-12"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Typography
          </motion.h2>

          <motion.div {...fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Display Font */}
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#F7F5F0]/30 mb-4">Display Font</p>
              <p
                className="text-4xl md:text-5xl leading-tight mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
              >
                Cormorant Garamond
              </p>
              <p className="text-sm text-[#F7F5F0]/50 leading-relaxed mb-6">
                Used for all headlines, property names, section titles, and editorial content.
                Weights 300–700. Conveys timeless luxury and editorial sophistication.
              </p>
              <div className="space-y-2 text-[#F7F5F0]/30">
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "1.5rem" }}>
                  Light 300 — Luxury Resorts Rooted in Nature
                </p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "1.5rem" }}>
                  Regular 400 — Luxury Resorts Rooted in Nature
                </p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.5rem" }}>
                  Semibold 600 — Luxury Resorts Rooted in Nature
                </p>
              </div>
            </div>

            {/* Body Font */}
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#F7F5F0]/30 mb-4">Body Font</p>
              <p
                className="text-4xl md:text-5xl leading-tight mb-4"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
              >
                DM Sans
              </p>
              <p className="text-sm text-[#F7F5F0]/50 leading-relaxed mb-6">
                Used for all body text, navigation, UI elements, buttons, and labels.
                Weights 300–700. Clean geometric sans-serif with excellent readability.
              </p>
              <div className="space-y-2 text-[#F7F5F0]/30">
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: "1rem" }}>
                  Light 300 — Discover the magic of the rainforest canopy
                </p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "1rem" }}>
                  Regular 400 — Discover the magic of the rainforest canopy
                </p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "1rem" }}>
                  Semibold 600 — Discover the magic of the rainforest canopy
                </p>
              </div>
            </div>
          </motion.div>

          {/* Type Scale */}
          <motion.div {...fadeIn} className="mt-16 border-t border-[#F7F5F0]/5 pt-12">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#F7F5F0]/30 mb-6">Type Scale</p>
            <div className="space-y-4">
              <div className="flex items-baseline gap-6 border-b border-[#F7F5F0]/5 pb-3">
                <span className="text-[10px] text-[#F7F5F0]/20 w-20">Hero</span>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem" }}>
                  48–64px
                </span>
              </div>
              <div className="flex items-baseline gap-6 border-b border-[#F7F5F0]/5 pb-3">
                <span className="text-[10px] text-[#F7F5F0]/20 w-20">Section</span>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.75rem" }}>
                  28–36px
                </span>
              </div>
              <div className="flex items-baseline gap-6 border-b border-[#F7F5F0]/5 pb-3">
                <span className="text-[10px] text-[#F7F5F0]/20 w-20">Subsection</span>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem" }}>
                  18–24px
                </span>
              </div>
              <div className="flex items-baseline gap-6 border-b border-[#F7F5F0]/5 pb-3">
                <span className="text-[10px] text-[#F7F5F0]/20 w-20">Body</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem" }}>
                  14–16px
                </span>
              </div>
              <div className="flex items-baseline gap-6 border-b border-[#F7F5F0]/5 pb-3">
                <span className="text-[10px] text-[#F7F5F0]/20 w-20">Caption</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem" }}>
                  11–12px · Tracking 0.15–0.4em · Uppercase
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Color Palettes */}
      <section className="py-20 px-6 md:px-16 bg-[#F7F5F0]/[0.03]">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            {...fadeIn}
            className="text-2xl md:text-3xl mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Color Palettes
          </motion.h2>
          <motion.p {...fadeIn} className="text-sm text-[#F7F5F0]/40 mb-12 max-w-3xl">
            Each property has its own distinct color identity. Palettes are muted, fresh, and clean —
            never bright. All share a warm cream/bone background system and espresso text.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PropertyPalette
              name="Nayara Gardens"
              subtitle="Canopy Palette · Costa Rica"
              borderColor="#286241"
              colors={[
                { hex: "#286241", name: "Forest Green", role: "Primary" },
                { hex: "#1E4D33", name: "Deep Forest", role: "Secondary" },
                { hex: "#3A7A55", name: "Emerald", role: "Accent" },
                { hex: "#F6FFEE", name: "Soft Green", role: "Background Light" },
                { hex: "#EDEEE2", name: "Warm Cream", role: "Background Dark" },
                { hex: "#1A0F0A", name: "Espresso", role: "Text" },
              ]}
            />

            <PropertyPalette
              name="Nayara Springs"
              subtitle="Thermal Palette · Costa Rica"
              borderColor="#0E6B7E"
              colors={[
                { hex: "#0E6B7E", name: "Ocean Teal", role: "Primary" },
                { hex: "#0B4F5E", name: "Deep Ocean", role: "Secondary" },
                { hex: "#3DAFC7", name: "Light Teal", role: "Accent" },
                { hex: "#F7F5F0", name: "Bone", role: "Background Light" },
                { hex: "#E8F3EF", name: "Eucalyptus", role: "Background Dark" },
                { hex: "#0D0704", name: "Near Black", role: "Text" },
              ]}
            />

            <PropertyPalette
              name="Nayara Tented Camp"
              subtitle="Safari Palette · Costa Rica"
              borderColor="#868B75"
              colors={[
                { hex: "#868B75", name: "Sage", role: "Primary" },
                { hex: "#525642", name: "Olive", role: "Secondary" },
                { hex: "#9A9086", name: "Warm Gray", role: "Accent" },
                { hex: "#FFFFFF", name: "White", role: "Background" },
                { hex: "#0D0604", name: "Espresso", role: "Text" },
              ]}
            />

            <PropertyPalette
              name="Nayara Alto Atacama"
              subtitle="Desert Palette · Chile"
              borderColor="#B85C3C"
              colors={[
                { hex: "#6F463D", name: "Terracotta Dark", role: "Primary" },
                { hex: "#B85C3C", name: "Burnt Sienna", role: "Accent" },
                { hex: "#FFFFFF", name: "White", role: "Background" },
                { hex: "#0D0604", name: "Espresso", role: "Text" },
              ]}
            />

            <PropertyPalette
              name="Nayara Hangaroa"
              subtitle="Volcanic Palette · Easter Island"
              borderColor="#536878"
              colors={[
                { hex: "#536878", name: "Slate Blue", role: "Primary" },
                { hex: "#67737C", name: "Storm Gray", role: "Secondary" },
                { hex: "#9A9086", name: "Warm Gray", role: "Accent" },
                { hex: "#F7F5F0", name: "Bone", role: "Background Light" },
                { hex: "#EAEBED", name: "Cool Gray", role: "Background Dark" },
                { hex: "#1A0F0A", name: "Espresso", role: "Text" },
              ]}
            />

            <PropertyPalette
              name="Nayara Bocas del Toro"
              subtitle="Caribbean Palette · Panama"
              borderColor="#1E3A8A"
              colors={[
                { hex: "#1E3A8A", name: "Deep Navy", role: "Primary" },
                { hex: "#FFFFFF", name: "White", role: "Background" },
                { hex: "#1A0F0A", name: "Espresso", role: "Text" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            {...fadeIn}
            className="text-2xl md:text-3xl mb-12"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Design Principles
          </motion.h2>

          <motion.div {...fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                number: "01",
                title: "No AI-Generated Media",
                desc: "All video and photography is real footage captured at the properties. No AI-generated imagery is used in any visual content. This ensures authenticity and builds trust with discerning luxury travelers.",
              },
              {
                number: "02",
                title: "Video-First Design",
                desc: "248 real videos drive the visual experience. Autoplay backgrounds, cinematic transitions, and full-bleed video create immersive storytelling. Shorter clips for speed, longer for depth.",
              },
              {
                number: "03",
                title: "Muted, Never Bright",
                desc: "Color palettes are fresh, clean, and muted — aligned with natural environments. No saturated or neon colors. Each property's palette draws from its landscape: forest, ocean, desert, volcanic rock.",
              },
              {
                number: "04",
                title: "Editorial Cartography",
                desc: "Content is organized like a curated atlas — each property is a chapter, each experience a story. The Journal acts as an editorial companion, weaving narratives across destinations.",
              },
              {
                number: "05",
                title: "Cinematic Motion",
                desc: "Scroll-driven animations, parallax effects, and reveal transitions create a cinematic browsing experience. Motion is purposeful — guiding attention, not distracting from content.",
              },
              {
                number: "06",
                title: "Full-Bleed Media",
                desc: "Images and videos fill their containers edge-to-edge. No rounded corners on media. Photography is treated as architecture — structural, not decorative.",
              },
              {
                number: "07",
                title: "Consistent Bone Backgrounds",
                desc: "All properties share a warm cream/bone (#F7F5F0) base. This creates visual continuity across the brand while allowing each property's accent colors to define its unique identity.",
              },
              {
                number: "08",
                title: "Unified Type System",
                desc: "Cormorant Garamond for editorial weight, DM Sans for readability. This pairing is consistent across all 6 properties and 117 pages, creating brand recognition regardless of which property a guest is exploring.",
              },
              {
                number: "09",
                title: "Mobile-First Responsive",
                desc: "Every page is designed mobile-first with touch-optimized interactions. Vertical videos for mobile, horizontal for desktop. Navigation adapts from hamburger pill to full-screen overlay.",
              },
              {
                number: "10",
                title: "Luxury Through Restraint",
                desc: "White space, deliberate pacing, and minimal UI chrome. No cluttered layouts, no aggressive CTAs, no pop-ups. The luxury is in what's absent — letting the properties speak through imagery and space.",
              },
            ].map((principle) => (
              <div key={principle.number} className="flex gap-5">
                <span
                  className="text-3xl text-[#F7F5F0]/10 flex-shrink-0"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {principle.number}
                </span>
                <div>
                  <h3 className="text-sm font-medium mb-2">{principle.title}</h3>
                  <p className="text-xs text-[#F7F5F0]/40 leading-relaxed">{principle.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Navigation System */}
      <section className="py-20 px-6 md:px-16 bg-[#F7F5F0]/[0.03]">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            {...fadeIn}
            className="text-2xl md:text-3xl mb-12"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Navigation & UI System
          </motion.h2>

          <motion.div {...fadeIn} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-[#F7F5F0]/10 p-6">
              <h3 className="text-sm font-medium mb-3">Fixed Pills</h3>
              <p className="text-xs text-[#F7F5F0]/40 leading-relaxed">
                Hamburger pill (left) + Reserve pill (right) — fixed position on all pages.
                Semi-transparent dark background with backdrop blur. Minimal footprint, maximum accessibility.
              </p>
            </div>
            <div className="border border-[#F7F5F0]/10 p-6">
              <h3 className="text-sm font-medium mb-3">Full-Screen Overlay</h3>
              <p className="text-xs text-[#F7F5F0]/40 leading-relaxed">
                Menu opens as full-screen overlay with property dropdowns. Animated transitions.
                No traditional top navigation bar — keeps pages immersive and uncluttered.
              </p>
            </div>
            <div className="border border-[#F7F5F0]/10 p-6">
              <h3 className="text-sm font-medium mb-3">Footer System</h3>
              <p className="text-xs text-[#F7F5F0]/40 leading-relaxed">
                Each property has its own colored footer matching its palette. Animated leaf logo +
                "NAYARA" + property name underneath. Social links, contact info, privacy policy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Media Rules */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            {...fadeIn}
            className="text-2xl md:text-3xl mb-12"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Media Guidelines
          </motion.h2>

          <motion.div {...fadeIn} className="space-y-6">
            <div className="flex gap-6 items-start border-b border-[#F7F5F0]/5 pb-6">
              <div className="w-2 h-2 rounded-full bg-[#286241] mt-2 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-medium mb-1">Video: Real footage only</h3>
                <p className="text-xs text-[#F7F5F0]/40">
                  All 248 videos are captured on-property. No stock footage, no AI-generated video, no synthetic media.
                  This is a core brand principle — authenticity is non-negotiable.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start border-b border-[#F7F5F0]/5 pb-6">
              <div className="w-2 h-2 rounded-full bg-[#0E6B7E] mt-2 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-medium mb-1">Photography: Luxury aesthetic</h3>
                <p className="text-xs text-[#F7F5F0]/40">
                  829 images selected for luxury aesthetic. Natural lighting, editorial composition, no over-processing.
                  Images are treated as architectural elements — full-bleed, no rounded corners, no decorative borders.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start border-b border-[#F7F5F0]/5 pb-6">
              <div className="w-2 h-2 rounded-full bg-[#B85C3C] mt-2 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-medium mb-1">Optimization: Speed without compromise</h3>
                <p className="text-xs text-[#F7F5F0]/40">
                  All media optimized for web delivery. Videos compressed for fast loading while maintaining quality.
                  Shorter clips preferred for hero sections. Autoplay with no audio by default.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start border-b border-[#F7F5F0]/5 pb-6">
              <div className="w-2 h-2 rounded-full bg-[#868B75] mt-2 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-medium mb-1">Format: Responsive by device</h3>
                <p className="text-xs text-[#F7F5F0]/40">
                  Vertical videos (9:16) for mobile experiences. Horizontal videos (16:9) for desktop.
                  Both versions provided for key sections. System automatically serves the appropriate format.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <div className="py-12 px-6 border-t border-[#F7F5F0]/5 text-center">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#F7F5F0]/20">
          Nayara Resorts — Brand Book — 2025
        </p>
      </div>
    </div>
  );
}
