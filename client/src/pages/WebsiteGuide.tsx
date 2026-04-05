/**
 * Website Guide — Comprehensive guide combining brand identity, site architecture,
 * design system, content strategy, and technical rules
 */

import { useState } from "react";
import { Link } from "wouter";
import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

const SECTIONS = [
  {
    id: "overview",
    title: "Overview",
    content: [
      { label: "Total Pages", value: "30+" },
      { label: "Properties", value: "6 (across 3 countries)" },
      { label: "Brand Pillars", value: "4 (Experiences, Sustainability, Wellness, Gastronomy)" },
      { label: "Content Hubs", value: "4 (Blog, Podcast, Awards, Press)" },
      { label: "Design System", value: "Playfair Display + DM Sans, warm earth palette" },
      { label: "AI Features", value: "Concierge chatbot, DM simulators (Instagram, Messenger, WhatsApp)" },
    ],
  },
];

const INTERNAL_PAGES = [
  { path: "/brand-book", name: "Brand Book", desc: "Colors, fonts, logos, photography rules, property palettes, component library" },
  { path: "/seo", name: "SEO / AEO / GEO Strategy", desc: "Search optimization, AI engine optimization, geographic targeting, content calendar" },
  { path: "/architecture", name: "Site Architecture", desc: "Sitemap, page hierarchy, navigation structure, cross-linking model" },
  { path: "/competitors", name: "Competitive Landscape", desc: "Market analysis per property, brand-level competitors, positioning" },
  { path: "/concierge", name: "Ask Concierge", desc: "AI knowledge base, gaps, how it works" },
  { path: "/faq", name: "FAQ", desc: "40+ questions with property + pillar filtering" },
  { path: "/questions", name: "Questions & Recommendations", desc: "Open questions, content gaps, strategic recommendations" },
];

const DESIGN_PRINCIPLES = [
  { title: "Desert Codex", desc: "Editorial cartography aesthetic — warm earth tones, Playfair Display headings, DM Sans body text, real photography only." },
  { title: "Property Identity", desc: "Each property has a unique color gradient, gallery layout, and content voice while sharing the same structural template." },
  { title: "Content-First", desc: "Every page follows: H1 → Hero Video → Story (s1+s2) → Sections → Gallery → Cross-Links → Footer. Content drives layout." },
  { title: "Cross-Linking", desc: "Three-layer model: Property ↔ Pillar ↔ Content Hub. Every page connects to at least 3 others. No dead ends." },
  { title: "Mobile-First", desc: "Vertical videos on mobile, horizontal on desktop. Text wrapping acceptable on mobile, single-line on desktop." },
  { title: "Real Photos Only", desc: "No AI-generated imagery, no stock photos. Luxury aesthetic with warm tones and editorial composition." },
];

const TECH_STACK = [
  { name: "React 19", role: "UI framework" },
  { name: "Tailwind CSS 4", role: "Styling" },
  { name: "Framer Motion", role: "Animations" },
  { name: "Wouter", role: "Client-side routing" },
  { name: "tRPC 11", role: "API layer" },
  { name: "Drizzle ORM", role: "Database" },
  { name: "Express 4", role: "Server" },
  { name: "Vitest", role: "Testing" },
];

export default function WebsiteGuide() {
  return (
    <div className="min-h-screen bg-white">
      <BrandNavigation pageType="content" />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-[#3a2a1a] text-3xl md:text-5xl tracking-wide mb-4" style={heading}>
            Website Guide
          </h1>
          <p className="text-[#3a2a1a]/50 text-[15px] max-w-2xl mx-auto" style={body}>
            Complete reference for the Nayara Resorts website — brand identity, design system, content strategy, technical architecture, and internal tools.
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {SECTIONS[0].content.map((item) => (
              <div key={item.label} className="border border-[#3a2a1a]/8 rounded-xl p-4 text-center">
                <p className="text-[#3a2a1a] text-[20px] mb-1" style={{ ...heading }}>{item.value}</p>
                <p className="text-[#3a2a1a]/40 text-[11px] tracking-[0.1em] uppercase" style={{ ...body, fontWeight: 500 }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Pages Directory */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[#3a2a1a] text-xl md:text-2xl mb-8" style={heading}>Internal Reference Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {INTERNAL_PAGES.map((page) => (
              <Link key={page.path} href={page.path}>
                <div className="border border-[#3a2a1a]/8 rounded-xl p-5 hover:border-[#3a2a1a]/20 transition-colors cursor-pointer group">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-[#3a2a1a] text-[15px] group-hover:text-[#5a8a5a] transition-colors" style={{ ...body, fontWeight: 600 }}>{page.name}</h3>
                    <svg className="w-4 h-4 text-[#3a2a1a]/20 group-hover:text-[#5a8a5a] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                  <p className="text-[#3a2a1a]/50 text-[13px]" style={body}>{page.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[#3a2a1a] text-xl md:text-2xl mb-8" style={heading}>Design Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {DESIGN_PRINCIPLES.map((p) => (
              <div key={p.title} className="border border-[#3a2a1a]/8 rounded-xl p-5">
                <h3 className="text-[#3a2a1a] text-[15px] mb-2" style={{ ...body, fontWeight: 600 }}>{p.title}</h3>
                <p className="text-[#3a2a1a]/50 text-[13px] leading-relaxed" style={body}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[#3a2a1a] text-xl md:text-2xl mb-8" style={heading}>Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {TECH_STACK.map((t) => (
              <div key={t.name} className="border border-[#3a2a1a]/8 rounded-xl p-4 text-center">
                <p className="text-[#3a2a1a] text-[14px]" style={{ ...body, fontWeight: 600 }}>{t.name}</p>
                <p className="text-[#3a2a1a]/40 text-[12px] mt-1" style={body}>{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
