/**
 * Architecture Page — Sitemap, page hierarchy, nav structure, content strategy
 * Internal reference for site structure and information architecture
 */

import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

const SITEMAP = [
  {
    section: "Homepage",
    pages: [{ path: "/", name: "Nayara Resorts Home", desc: "Hero video, property carousel, brand story, explore section" }],
  },
  {
    section: "Property Pages (6)",
    pages: [
      { path: "/springs", name: "Nayara Springs", desc: "Adults-only, hot springs, 3 Michelin Keys" },
      { path: "/gardens", name: "Nayara Gardens", desc: "Family-friendly, rainforest adventure" },
      { path: "/tented-camp", name: "Nayara Tented Camp", desc: "Glamping, rainforest immersion" },
      { path: "/alto-atacama", name: "Nayara Alto Atacama", desc: "Desert oasis, 2 Michelin Keys, all-inclusive" },
      { path: "/bocas-del-toro", name: "Nayara Bocas del Toro", desc: "Overwater villas, private island, adults-only" },
      { path: "/hangaroa", name: "Nayara Hangaroa", desc: "Easter Island, Rapa Nui culture" },
    ],
  },
  {
    section: "Brand Pillar Pages (4)",
    pages: [
      { path: "/experiences", name: "Experiences", desc: "Excursions and adventures across all properties" },
      { path: "/sustainability", name: "Sustainability", desc: "Environmental and community commitments" },
      { path: "/wellness", name: "Wellness", desc: "Spa, hot springs, healing traditions" },
      { path: "/gastronomy", name: "The Table", desc: "Dining, farm-to-table, Michelin recognition" },
    ],
  },
  {
    section: "Content Hub Pages (4)",
    pages: [
      { path: "/blog", name: "Blog", desc: "Articles with property + pillar filtering" },
      { path: "/podcast", name: "Podcast", desc: "Video and audio episodes" },
      { path: "/awards", name: "Awards", desc: "Recognition timeline with property filtering" },
      { path: "/press", name: "Press", desc: "Media coverage with property + topic filtering" },
    ],
  },
  {
    section: "Utility Pages",
    pages: [
      { path: "/story", name: "Story", desc: "Brand origin and philosophy" },
      { path: "/rooms", name: "Rooms", desc: "Room types across properties" },
      { path: "/faq", name: "FAQ", desc: "Two-axis filtering (property + pillar)" },
      { path: "/arenal", name: "Costa Rica Hub", desc: "Arenal destination overview" },
    ],
  },
  {
    section: "Internal Reference Pages",
    pages: [
      { path: "/brand-book", name: "Brand Book", desc: "Visual identity guidelines" },
      { path: "/seo", name: "SEO Strategy", desc: "Search, AI, and geographic optimization" },
      { path: "/architecture", name: "Architecture", desc: "This page — site structure" },
      { path: "/competitors", name: "Competitors", desc: "Competitive landscape analysis" },
      { path: "/concierge", name: "Ask Concierge", desc: "AI concierge knowledge base" },
      { path: "/questions", name: "Questions", desc: "Uncertainties and recommendations" },
    ],
  },
  {
    section: "DM Simulators",
    pages: [
      { path: "/instagram", name: "Instagram DM", desc: "AI concierge demo via Instagram" },
      { path: "/messenger", name: "Messenger DM", desc: "AI concierge demo via Messenger" },
      { path: "/whatsapp", name: "WhatsApp DM", desc: "AI concierge demo via WhatsApp" },
    ],
  },
];

const NAV_STRUCTURE = {
  hamburger: {
    brand: ["Story", "Experiences", "Wellness", "The Table", "Sustainability", "Awards & Press", "Blog", "Podcast"],
    property: ["Story", "Rooms", "Gallery", "Experiences", "Wellness", "The Table", "Sustainability", "Awards & Press", "Blog", "Podcast"],
  },
  pills: {
    left: "Hamburger menu",
    center: "Property name (property pages) or NAYARA RESORTS (homepage only)",
    right: "Reserve (dropdown with all 6 properties)",
  },
  footer: "Matches hamburger menu items exactly",
};

const CROSS_LINKING = [
  { from: "Property Pages", to: "Pillar Pages", mechanism: "PillarCrossLink cards at end of Experiences section" },
  { from: "Pillar Pages", to: "Property Pages", mechanism: "Property cards showing relevant content per pillar" },
  { from: "Content Hub Pages", to: "Each Other", mechanism: "ContentCrossLinks component at bottom of each page" },
  { from: "Property Story Sections", to: "Awards Page", mechanism: "AwardBadgeStrip with clickable award logos" },
  { from: "All Pages", to: "Ask Concierge", mechanism: "Floating ConciergeChatWidget bubble" },
  { from: "Homepage", to: "Property Pages", mechanism: "Property carousel with direct links" },
];

const CONTENT_STRATEGY = [
  { rule: "Gallery as Master Pool", desc: "Each property has a master gallery array. All page sections pull images from this array. No hardcoded URLs in page components." },
  { rule: "Pillar Order", desc: "Always: Experiences → Sustainability → Wellness → Gastronomy. This order is locked across all pages." },
  { rule: "Property Naming", desc: "Always 'Nayara [Property]' — never abbreviated. Three Costa Rica hotels: Nayara Gardens, Nayara Springs, Nayara Tented Camp." },
  { rule: "No AI Images", desc: "Real photos only. No stock photos. No AI-generated imagery. Luxury aesthetic with warm tones." },
  { rule: "Video Strategy", desc: "Horizontal for desktop hero, vertical for mobile hero. All gallery videos autoplay muted with loop." },
  { rule: "Cross-Linking", desc: "Three-layer model: Property ↔ Pillar ↔ Content Hub. Every page links to at least 3 other pages." },
];

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-white">
      <BrandNavigation pageType="content" />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-[#3a2a1a] text-3xl md:text-5xl tracking-wide mb-4" style={heading}>
            Site Architecture
          </h1>
          <p className="text-[#3a2a1a]/50 text-[15px] max-w-2xl mx-auto" style={body}>
            Complete sitemap, page hierarchy, navigation structure, cross-linking model, and content strategy rules.
          </p>
        </div>
      </section>

      {/* Sitemap */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[#3a2a1a] text-xl md:text-2xl mb-8" style={heading}>Sitemap</h2>
          <div className="space-y-8">
            {SITEMAP.map((section) => (
              <div key={section.section}>
                <h3 className="text-[#3a2a1a]/40 text-[11px] tracking-[0.2em] uppercase mb-3" style={{ ...body, fontWeight: 500 }}>
                  {section.section}
                </h3>
                <div className="border border-[#3a2a1a]/8 rounded-xl overflow-hidden divide-y divide-[#3a2a1a]/5">
                  {section.pages.map((page) => (
                    <div key={page.path} className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 px-5 py-3">
                      <code className="text-[#5a8a5a] text-[13px] font-mono flex-shrink-0 w-36">{page.path}</code>
                      <span className="text-[#3a2a1a] text-[14px]" style={{ ...body, fontWeight: 500 }}>{page.name}</span>
                      <span className="text-[#3a2a1a]/40 text-[13px] md:ml-auto" style={body}>{page.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Structure */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[#3a2a1a] text-xl md:text-2xl mb-8" style={heading}>Navigation Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-[#3a2a1a]/8 rounded-xl p-6">
              <h3 className="text-[#3a2a1a] text-[15px] mb-4" style={{ ...body, fontWeight: 600 }}>Brand Page Menu</h3>
              <ul className="space-y-1.5">
                {NAV_STRUCTURE.hamburger.brand.map((item) => (
                  <li key={item} className="text-[#3a2a1a]/60 text-[14px]" style={body}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="border border-[#3a2a1a]/8 rounded-xl p-6">
              <h3 className="text-[#3a2a1a] text-[15px] mb-4" style={{ ...body, fontWeight: 600 }}>Property Page Menu</h3>
              <ul className="space-y-1.5">
                {NAV_STRUCTURE.hamburger.property.map((item) => (
                  <li key={item} className="text-[#3a2a1a]/60 text-[14px]" style={body}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 border border-[#3a2a1a]/8 rounded-xl p-6">
            <h3 className="text-[#3a2a1a] text-[15px] mb-4" style={{ ...body, fontWeight: 600 }}>Top Bar Layout</h3>
            <div className="flex items-center justify-between bg-[#f7f5f0] rounded-lg px-6 py-4">
              <span className="text-[#3a2a1a]/60 text-[13px]" style={body}>{NAV_STRUCTURE.pills.left}</span>
              <span className="text-[#3a2a1a]/60 text-[13px] text-center" style={body}>{NAV_STRUCTURE.pills.center}</span>
              <span className="text-[#3a2a1a]/60 text-[13px]" style={body}>{NAV_STRUCTURE.pills.right}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Linking Model */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[#3a2a1a] text-xl md:text-2xl mb-8" style={heading}>Cross-Linking Model</h2>
          <div className="border border-[#3a2a1a]/8 rounded-xl overflow-hidden">
            <div className="grid grid-cols-3 bg-[#f7f5f0] px-5 py-3 border-b border-[#3a2a1a]/8">
              <span className="text-[#3a2a1a]/40 text-[11px] tracking-[0.15em] uppercase" style={{ ...body, fontWeight: 500 }}>From</span>
              <span className="text-[#3a2a1a]/40 text-[11px] tracking-[0.15em] uppercase" style={{ ...body, fontWeight: 500 }}>To</span>
              <span className="text-[#3a2a1a]/40 text-[11px] tracking-[0.15em] uppercase" style={{ ...body, fontWeight: 500 }}>Mechanism</span>
            </div>
            {CROSS_LINKING.map((link, i) => (
              <div key={i} className="grid grid-cols-3 px-5 py-3 border-b border-[#3a2a1a]/5 last:border-0">
                <span className="text-[#3a2a1a]/70 text-[14px]" style={body}>{link.from}</span>
                <span className="text-[#3a2a1a]/70 text-[14px]" style={body}>{link.to}</span>
                <span className="text-[#3a2a1a]/50 text-[13px]" style={body}>{link.mechanism}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Strategy Rules */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[#3a2a1a] text-xl md:text-2xl mb-8" style={heading}>Content Strategy Rules</h2>
          <div className="space-y-4">
            {CONTENT_STRATEGY.map((rule) => (
              <div key={rule.rule} className="border border-[#3a2a1a]/8 rounded-xl p-6">
                <h3 className="text-[#3a2a1a] text-[15px] mb-2" style={{ ...body, fontWeight: 600 }}>{rule.rule}</h3>
                <p className="text-[#3a2a1a]/60 text-[14px] leading-relaxed" style={body}>{rule.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
