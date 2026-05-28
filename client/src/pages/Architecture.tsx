/**
 * HIDDEN LANDING PAGE — Site Architecture & SEO/GEO/AEO Strategy
 * No navigation, no footer, standalone page accessible only via direct URL
 * Route: /architecture (not linked anywhere in the site)
 */

import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};

export default function Architecture() {
  return (
    <div className="min-h-screen bg-[#0D0704] text-[#F7F5F0]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Hero */}
      <section className="min-h-[70vh] flex flex-col justify-center items-center px-6 md:px-16 text-center">
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
          Nayara Digital Architecture
        </motion.h1>
        <motion.p
          {...fadeIn}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-sm md:text-base text-[#F7F5F0]/60 max-w-2xl leading-relaxed"
        >
          A comprehensive overview of the website's structure, content strategy,
          SEO/GEO/AEO positioning, and opportunities for growth.
        </motion.p>
      </section>

      {/* Stats Bar */}
      <motion.section
        {...fadeIn}
        className="border-t border-b border-[#F7F5F0]/10 py-12 px-6 md:px-16"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "87,500", label: "Lines of Code" },
            { value: "117", label: "Unique Pages" },
            { value: "53,000", label: "Words of Copy" },
            { value: "1,077", label: "Media Assets" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl md:text-3xl font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {stat.value}
              </p>
              <p className="text-[11px] tracking-[0.2em] uppercase text-[#F7F5F0]/40 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Site Architecture */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            {...fadeIn}
            className="text-2xl md:text-3xl mb-12"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Site Architecture
          </motion.h2>

          <motion.div {...fadeIn} className="space-y-8">
            <div className="border-l-2 border-[#286241] pl-6">
              <h3 className="text-lg font-medium mb-2">Multi-Property Hub Model</h3>
              <p className="text-sm text-[#F7F5F0]/60 leading-relaxed">
                The site operates as a centralized brand hub connecting 6 distinct properties across 4 countries.
                Each property has its own visual identity (color palette, imagery) while sharing a unified typographic
                system and interaction patterns. This architecture enables cross-property discovery while maintaining
                individual brand equity.
              </p>
            </div>

            <div className="border-l-2 border-[#0E6B7E] pl-6">
              <h3 className="text-lg font-medium mb-2">Page Hierarchy</h3>
              <p className="text-sm text-[#F7F5F0]/60 leading-relaxed mb-4">
                117 pages organized in a clear hierarchy: Brand pages (Home, Journal, Awards, Gallery) → Property pages
                (Gardens, Springs, Tented Camp, Bocas, Alto Atacama, Hangaroa) → Subpages (Rooms, Gastronomy, Experiences,
                Wellness, Sustainability) → Detail pages (individual restaurants, room types, experiences).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="bg-[#F7F5F0]/5 p-4 rounded">
                  <p className="text-[#286241] font-medium mb-1">Costa Rica (3 Hotels)</p>
                  <p className="text-[#F7F5F0]/40">Gardens · Springs · Tented Camp</p>
                  <p className="text-[#F7F5F0]/40 mt-1">~60 pages combined</p>
                </div>
                <div className="bg-[#F7F5F0]/5 p-4 rounded">
                  <p className="text-[#B85C3C] font-medium mb-1">Chile & Easter Island</p>
                  <p className="text-[#F7F5F0]/40">Alto Atacama · Hangaroa</p>
                  <p className="text-[#F7F5F0]/40 mt-1">~30 pages combined</p>
                </div>
                <div className="bg-[#F7F5F0]/5 p-4 rounded">
                  <p className="text-[#1E3A8A] font-medium mb-1">Panama</p>
                  <p className="text-[#F7F5F0]/40">Bocas del Toro</p>
                  <p className="text-[#F7F5F0]/40 mt-1">~15 pages</p>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-[#868B75] pl-6">
              <h3 className="text-lg font-medium mb-2">Content Mesh</h3>
              <p className="text-sm text-[#F7F5F0]/60 leading-relaxed">
                37 blog articles + 6 long-form video episodes create a content mesh that connects properties
                thematically. Articles are tagged by property and surface in hotel-specific filtered views.
                Cross-linking between property pages, experiences, and journal entries creates a dense internal
                link network that strengthens topical authority.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO/GEO/AEO Strategy */}
      <section className="py-20 px-6 md:px-16 bg-[#F7F5F0]/[0.03]">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            {...fadeIn}
            className="text-2xl md:text-3xl mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            SEO · GEO · AEO Strategy
          </motion.h2>
          <motion.p {...fadeIn} className="text-sm text-[#F7F5F0]/40 mb-12 max-w-3xl">
            Three layers of search optimization working together: traditional search engines (SEO),
            generative AI engines like ChatGPT and Perplexity (GEO), and answer engines like Google AI Overviews (AEO).
          </motion.p>

          <motion.div {...fadeIn} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-[#F7F5F0]/10 p-6">
              <h3 className="text-base font-medium mb-3 text-[#286241]">SEO — Search Engine Optimization</h3>
              <ul className="text-xs text-[#F7F5F0]/50 space-y-2 leading-relaxed">
                <li>• JSON-LD schema (Hotel, Resort, LocalBusiness, Article, Organization, Breadcrumb)</li>
                <li>• Sitemap.xml with 60+ indexed URLs</li>
                <li>• robots.txt properly configured</li>
                <li>• 53,000 words of original, keyword-rich content</li>
                <li>• Internal linking mesh across 117 pages</li>
                <li>• Semantic HTML structure with proper heading hierarchy</li>
                <li>• Image alt tags and video descriptions</li>
              </ul>
            </div>

            <div className="border border-[#F7F5F0]/10 p-6">
              <h3 className="text-base font-medium mb-3 text-[#0E6B7E]">GEO — Generative Engine Optimization</h3>
              <ul className="text-xs text-[#F7F5F0]/50 space-y-2 leading-relaxed">
                <li>• Conversational, natural-language content style</li>
                <li>• Broad topical coverage (wellness, gastronomy, sustainability, adventure)</li>
                <li>• Award citations and third-party validation</li>
                <li>• FAQ page with structured Q&A pairs</li>
                <li>• Blog articles targeting long-tail queries</li>
                <li>• Video content with descriptive metadata</li>
                <li>• E-E-A-T signals (certifications, Green Globe, Relais & Châteaux)</li>
              </ul>
            </div>

            <div className="border border-[#F7F5F0]/10 p-6">
              <h3 className="text-base font-medium mb-3 text-[#B85C3C]">AEO — Answer Engine Optimization</h3>
              <ul className="text-xs text-[#F7F5F0]/50 space-y-2 leading-relaxed">
                <li>• Direct-answer content structure ("What is...", "Where to...")</li>
                <li>• Property comparison data (rooms, amenities, locations)</li>
                <li>• Structured data enabling rich results</li>
                <li>• Factual, verifiable claims with specifics</li>
                <li>• Location-based content (4 countries, 6 properties)</li>
                <li>• Experience-focused narratives matching travel queries</li>
                <li>• Awards and recognition as authority signals</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* E-E-A-T */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            {...fadeIn}
            className="text-2xl md:text-3xl mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            E-E-A-T Signals
          </motion.h2>
          <motion.p {...fadeIn} className="text-sm text-[#F7F5F0]/40 mb-12 max-w-3xl">
            Experience, Expertise, Authoritativeness, and Trustworthiness — Google's quality framework
            that AI engines also rely on for source credibility.
          </motion.p>

          <motion.div {...fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                letter: "E",
                title: "Experience",
                items: [
                  "248 real videos from properties (no AI-generated media)",
                  "829 authentic photographs",
                  "First-person narratives from staff and guests",
                  "Detailed descriptions of on-site experiences",
                ],
              },
              {
                letter: "E",
                title: "Expertise",
                items: [
                  "Specialized content: sustainability, gastronomy, wellness",
                  "Relais & Châteaux membership (culinary expertise)",
                  "Green Globe certification (environmental expertise)",
                  "Property-specific knowledge across 4 countries",
                ],
              },
              {
                letter: "A",
                title: "Authoritativeness",
                items: [
                  "Multiple international awards cited with schema",
                  "Third-party certifications (Green Globe, Relais & Châteaux)",
                  "Cross-referenced content across properties",
                  "37 editorial articles demonstrating thought leadership",
                ],
              },
              {
                letter: "T",
                title: "Trustworthiness",
                items: [
                  "Real media only — no AI-generated imagery or video",
                  "Verifiable property information and locations",
                  "Consistent brand identity across all touchpoints",
                  "Transparent sustainability claims with specifics",
                ],
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#F7F5F0]/[0.03] p-6 border border-[#F7F5F0]/5">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-3xl font-light text-[#F7F5F0]/20" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {item.letter}
                  </span>
                  <h3 className="text-base font-medium">{item.title}</h3>
                </div>
                <ul className="text-xs text-[#F7F5F0]/50 space-y-2">
                  {item.items.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gaps & Opportunities */}
      <section className="py-20 px-6 md:px-16 bg-[#F7F5F0]/[0.03]">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            {...fadeIn}
            className="text-2xl md:text-3xl mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Gaps & Opportunities
          </motion.h2>
          <motion.p {...fadeIn} className="text-sm text-[#F7F5F0]/40 mb-12 max-w-3xl">
            Based on current best practices for luxury hospitality AI visibility (2025–2026),
            the following areas represent the highest-impact opportunities for improvement.
          </motion.p>

          <motion.div {...fadeIn} className="space-y-6">
            {[
              {
                priority: "Critical",
                color: "#B85C3C",
                items: [
                  {
                    title: "llms.txt File",
                    desc: "AI crawlers (ChatGPT, Perplexity, Gemini) look for llms.txt to understand site structure. Quick win — can be implemented in hours.",
                  },
                  {
                    title: "Server-Side Rendering / Pre-rendering",
                    desc: "As a Single Page Application (SPA), meta tags and content may not be fully crawlable by all bots. Pre-rendering or SSR would ensure all 117 pages are properly indexed.",
                  },
                  {
                    title: "Google Business Profile Optimization",
                    desc: "Each of the 6 properties needs an optimized GBP with photos, posts, Q&A, and active review management. AI models heavily rely on local listings.",
                  },
                ],
              },
              {
                priority: "High Impact",
                color: "#0E6B7E",
                items: [
                  {
                    title: "Product Schema for Room Types",
                    desc: "Individual room types (Springs Villa, Overwater Villa, etc.) should have Product schema with pricing signals for rich results.",
                  },
                  {
                    title: "FAQ Schema on Subpages",
                    desc: "Adding 3–5 FAQs per property/experience page would boost featured snippet eligibility and AEO performance.",
                  },
                  {
                    title: "Video Schema (VideoObject)",
                    desc: "248 videos without VideoObject schema. Adding this would enable video rich results and improve GEO visibility.",
                  },
                  {
                    title: "Review/Testimonial Schema",
                    desc: "No AggregateRating or Review schema. Guest testimonials exist but aren't structured for AI extraction.",
                  },
                ],
              },
              {
                priority: "Growth",
                color: "#286241",
                items: [
                  {
                    title: "Multi-language Content (Spanish)",
                    desc: "Properties span 4 Latin American countries. Spanish content with hreflang tags would significantly boost GEO in regional markets.",
                  },
                  {
                    title: "External Backlink Strategy",
                    desc: "Strong internal linking but limited external link building. Need PR/media outreach, travel blogger partnerships, award citation links.",
                  },
                  {
                    title: "Open Graph / Social Meta Tags",
                    desc: "Limited OG tags for social sharing. Each page should have unique og:title, og:description, og:image for optimal social distribution.",
                  },
                  {
                    title: "Author/Expertise Pages",
                    desc: "E-E-A-T requires demonstrable expertise. An 'About Our Team' or 'Meet the Founders' page would boost authority signals.",
                  },
                  {
                    title: "Core Web Vitals Audit",
                    desc: "Heavy video-first design may impact LCP. Performance audit needed for mobile Core Web Vitals compliance.",
                  },
                ],
              },
            ].map((group) => (
              <div key={group.priority}>
                <h3
                  className="text-sm font-medium tracking-[0.15em] uppercase mb-4"
                  style={{ color: group.color }}
                >
                  {group.priority}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {group.items.map((item) => (
                    <div
                      key={item.title}
                      className="border border-[#F7F5F0]/10 p-5"
                    >
                      <h4 className="text-sm font-medium mb-2">{item.title}</h4>
                      <p className="text-xs text-[#F7F5F0]/40 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Traditional Cost Comparison */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            {...fadeIn}
            className="text-2xl md:text-3xl mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Traditional Build Estimate
          </motion.h2>
          <motion.p {...fadeIn} className="text-sm text-[#F7F5F0]/40 mb-12 max-w-3xl">
            What this website would have cost and how long it would have taken to build
            using a traditional luxury hospitality agency.
          </motion.p>

          <motion.div {...fadeIn} className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#F7F5F0]/10">
                  <th className="text-left py-3 text-[#F7F5F0]/40 font-normal text-xs tracking-wider uppercase">Role</th>
                  <th className="text-left py-3 text-[#F7F5F0]/40 font-normal text-xs tracking-wider uppercase">Duration</th>
                  <th className="text-left py-3 text-[#F7F5F0]/40 font-normal text-xs tracking-wider uppercase">Cost Range</th>
                </tr>
              </thead>
              <tbody className="text-[#F7F5F0]/60">
                {[
                  { role: "Creative Director / Brand Strategy", duration: "4–6 weeks", cost: "$30K–$50K" },
                  { role: "UX/UI Designer", duration: "8–12 weeks", cost: "$40K–$80K" },
                  { role: "Copywriter", duration: "6–8 weeks", cost: "$20K–$35K" },
                  { role: "Lead Frontend Developer", duration: "16–20 weeks", cost: "$60K–$100K" },
                  { role: "Junior Frontend Developer", duration: "12–16 weeks", cost: "$30K–$50K" },
                  { role: "Backend Developer", duration: "4–6 weeks", cost: "$20K–$30K" },
                  { role: "Video/Photo Editing", duration: "4–6 weeks", cost: "$15K–$25K" },
                  { role: "QA/Testing", duration: "4–6 weeks", cost: "$10K–$20K" },
                  { role: "Project Manager", duration: "20–24 weeks", cost: "$25K–$40K" },
                ].map((row) => (
                  <tr key={row.role} className="border-b border-[#F7F5F0]/5">
                    <td className="py-3">{row.role}</td>
                    <td className="py-3">{row.duration}</td>
                    <td className="py-3">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div {...fadeIn} className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-[#F7F5F0]/10">
              <p className="text-2xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>5–7 months</p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#F7F5F0]/30 mt-2">Timeline</p>
            </div>
            <div className="text-center p-6 border border-[#F7F5F0]/10">
              <p className="text-2xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>5–8 people</p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#F7F5F0]/30 mt-2">Team Size</p>
            </div>
            <div className="text-center p-6 border border-[#F7F5F0]/10">
              <p className="text-2xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>$250K–$430K</p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#F7F5F0]/30 mt-2">Agency Cost</p>
            </div>
          </motion.div>

          <motion.p {...fadeIn} className="text-xs text-[#F7F5F0]/30 mt-6 text-center">
            Luxury hospitality specialist agencies typically quote $350K–$500K+ for comparable scope.
          </motion.p>
        </div>
      </section>

      {/* Footer */}
      <div className="py-12 px-6 border-t border-[#F7F5F0]/5 text-center">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#F7F5F0]/20">
          Nayara Resorts — Internal Architecture Document — 2025
        </p>
      </div>
    </div>
  );
}
