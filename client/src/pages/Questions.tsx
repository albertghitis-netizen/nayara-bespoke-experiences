/**
 * Questions & Recommendations Page — Document uncertainties, suggestions, content gaps
 * Internal reference for decisions needing input
 */

import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

interface Item {
  title: string;
  desc: string;
  priority: "high" | "medium" | "low";
  category: string;
}

const QUESTIONS: Item[] = [
  { title: "Booking Engine Integration", desc: "Which booking engine will handle reservations? Need API details to replace 'Coming Soon' on Reserve dropdown links.", priority: "high", category: "Technical" },
  { title: "Hangaroa & Bocas Pillar Content", desc: "Experiences, Wellness, The Table, Sustainability sections on Hangaroa and Bocas pages use adapted content. Need property-specific copy and photos.", priority: "high", category: "Content" },
  { title: "Tented Camp & Gardens Gallery Photos", desc: "These galleries have fewer unique images than Springs/Atacama/Bocas. Need additional property-specific photography.", priority: "medium", category: "Content" },
  { title: "Newsletter Integration", desc: "Which email platform (Mailchimp, HubSpot, etc.) for newsletter signup? Need API key and list ID.", priority: "medium", category: "Technical" },
  { title: "Privacy Policy Content", desc: "Legal privacy policy text has been provided but not yet formatted into a page. Need confirmation on final version.", priority: "medium", category: "Legal" },
  { title: "Domain & SSL", desc: "What domain will the site live on? Needed for canonical URLs, sitemap, and SSL certificate.", priority: "high", category: "Technical" },
  { title: "Google Analytics / Tag Manager", desc: "Need GA4 measurement ID or GTM container ID for production analytics.", priority: "medium", category: "Technical" },
  { title: "Instagram API Access", desc: "Instagram DM simulator requires Meta Developer app approval. Need Meta Business account credentials.", priority: "low", category: "Technical" },
  { title: "Podcast Episode Links", desc: "4 podcast episodes are referenced but need actual video/audio URLs for embedding.", priority: "medium", category: "Content" },
  { title: "Room Types & Pricing", desc: "Rooms page has placeholder content. Need detailed room type descriptions, amenities, and pricing per property.", priority: "high", category: "Content" },
  { title: "Wellness Video for Hero", desc: "Wellness page hero needs a converted video. Original file needs re-encoding for web playback.", priority: "low", category: "Media" },
];

const RECOMMENDATIONS: Item[] = [
  { title: "Multi-Language Support", desc: "Add Spanish translations for Latin American market. Start with property pages and booking flow, then expand to content hub.", priority: "high", category: "Growth" },
  { title: "Blog Content Pipeline", desc: "Publish 2-3 articles per month following the content calendar. Prioritize Atacama stargazing and Costa Rica dry season guides for Q1.", priority: "high", category: "Content" },
  { title: "Video Optimization", desc: "Compress all hero videos to WebM format with VP9 codec for 40-60% size reduction. Add poster frames for faster perceived load.", priority: "medium", category: "Performance" },
  { title: "A/B Test Reserve CTA", desc: "Test 'Reserve' vs 'Book Now' vs 'Plan Your Stay' on the nav pill. Measure click-through to booking engine.", priority: "medium", category: "Conversion" },
  { title: "Guest Reviews Integration", desc: "Pull TripAdvisor or Google Reviews via API to show real guest testimonials on property pages instead of placeholder reviews.", priority: "medium", category: "Trust" },
  { title: "Progressive Web App", desc: "Add PWA manifest and service worker for offline access to property info. Useful for guests with limited connectivity at remote properties.", priority: "low", category: "Technical" },
  { title: "Email Capture Strategy", desc: "Add newsletter signup to Blog, Podcast, and property pages. Offer 'Insider Guide to [Destination]' PDF as lead magnet.", priority: "high", category: "Growth" },
  { title: "Chatbot Knowledge Expansion", desc: "Train concierge on real-time availability, seasonal pricing, and specific excursion schedules as data becomes available.", priority: "medium", category: "AI" },
  { title: "Social Proof Badges", desc: "Add 'As seen in' media logos (Travel + Leisure, Condé Nast, Afar) to homepage and property pages.", priority: "low", category: "Trust" },
  { title: "Accessibility Audit", desc: "Run WCAG 2.1 AA compliance audit. Focus on color contrast ratios, keyboard navigation, and screen reader compatibility.", priority: "medium", category: "Quality" },
];

const priorityColors = {
  high: { bg: "bg-red-50", text: "text-red-700", border: "border-red-200" },
  medium: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
  low: { bg: "bg-green-50", text: "text-green-700", border: "border-green-200" },
};

export default function QuestionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <BrandNavigation pageType="content" />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-[#3a2a1a] text-3xl md:text-5xl tracking-wide mb-4" style={heading}>
            Questions & Recommendations
          </h1>
          <p className="text-[#3a2a1a]/50 text-[15px] max-w-2xl mx-auto" style={body}>
            Open questions requiring input, content gaps to fill, and strategic recommendations for the next phase of development.
          </p>
        </div>
      </section>

      {/* Questions */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[#3a2a1a] text-xl md:text-2xl mb-8" style={heading}>
            Open Questions ({QUESTIONS.length})
          </h2>
          <div className="space-y-4">
            {QUESTIONS.map((q) => (
              <div key={q.title} className="border border-[#3a2a1a]/8 rounded-xl p-5 md:p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <h3 className="text-[#3a2a1a] text-[15px]" style={{ ...body, fontWeight: 600 }}>{q.title}</h3>
                  <div className="flex gap-2 flex-shrink-0">
                    <span className={`text-[10px] tracking-[0.1em] px-2 py-0.5 rounded-full border ${priorityColors[q.priority].bg} ${priorityColors[q.priority].text} ${priorityColors[q.priority].border}`} style={{ ...body, fontWeight: 600 }}>
                      {q.priority}
                    </span>
                    <span className="text-[10px] tracking-[0.1em] text-[#3a2a1a]/30 border border-[#3a2a1a]/10 px-2 py-0.5 rounded-full" style={{ ...body, fontWeight: 500 }}>
                      {q.category}
                    </span>
                  </div>
                </div>
                <p className="text-[#3a2a1a]/60 text-[14px] leading-relaxed" style={body}>{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[#3a2a1a] text-xl md:text-2xl mb-8" style={heading}>
            Recommendations ({RECOMMENDATIONS.length})
          </h2>
          <div className="space-y-4">
            {RECOMMENDATIONS.map((r) => (
              <div key={r.title} className="border border-[#3a2a1a]/8 rounded-xl p-5 md:p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <h3 className="text-[#3a2a1a] text-[15px]" style={{ ...body, fontWeight: 600 }}>{r.title}</h3>
                  <div className="flex gap-2 flex-shrink-0">
                    <span className={`text-[10px] tracking-[0.1em] px-2 py-0.5 rounded-full border ${priorityColors[r.priority].bg} ${priorityColors[r.priority].text} ${priorityColors[r.priority].border}`} style={{ ...body, fontWeight: 600 }}>
                      {r.priority}
                    </span>
                    <span className="text-[10px] tracking-[0.1em] text-[#3a2a1a]/30 border border-[#3a2a1a]/10 px-2 py-0.5 rounded-full" style={{ ...body, fontWeight: 500 }}>
                      {r.category}
                    </span>
                  </div>
                </div>
                <p className="text-[#3a2a1a]/60 text-[14px] leading-relaxed" style={body}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
