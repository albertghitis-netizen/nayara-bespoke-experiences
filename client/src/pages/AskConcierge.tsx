/**
 * Ask Concierge Page — Full-page chat experience
 * Shows what the AI concierge knows, what it still needs, and how it works
 */

import { useState } from "react";
import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";
import ConciergeChatWidget from "@/components/ConciergeChatWidget";

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

const KNOWLEDGE_AREAS = [
  {
    category: "Property Details",
    items: [
      "Room types, amenities, and pricing for all 6 properties",
      "Adults-only vs. family-friendly policies",
      "All-inclusive inclusions at Alto Atacama",
      "Private hot spring villa details at Springs",
    ],
  },
  {
    category: "Experiences & Excursions",
    items: [
      "30+ Atacama excursions with altitude and difficulty levels",
      "Costa Rica adventures: volcano hikes, hanging bridges, waterfalls",
      "Easter Island archaeological tours and cultural experiences",
      "Bocas del Toro water activities and island excursions",
    ],
  },
  {
    category: "Dining & Wellness",
    items: [
      "5 restaurants across the Costa Rica campus",
      "Spa treatments and wellness programs per property",
      "Dietary accommodation capabilities",
      "Volcanic hot springs and ancestral healing traditions",
    ],
  },
  {
    category: "Logistics & Travel",
    items: [
      "Airport transfers and transportation for all destinations",
      "Altitude acclimatization guidance for Atacama",
      "Visa and entry requirements by country",
      "Best times to visit each property",
    ],
  },
  {
    category: "Awards & Recognition",
    items: [
      "3 Michelin Keys (Springs), 2 Michelin Keys (Alto Atacama)",
      "Travel + Leisure Top 15 Resort Brand (2024 & 2025)",
      "Condé Nast, Virtuoso, Relais & Châteaux recognitions",
      "Green Globe and sustainability certifications",
    ],
  },
];

const GAPS = [
  "Real-time room availability and live pricing",
  "Specific event dates and seasonal programming",
  "Individual guest preferences and past stay history",
  "Weather conditions and road closures in real-time",
  "Third-party tour operator schedules",
];

export default function AskConcierge() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <BrandNavigation pageType="content" />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-[#3B2B26] text-3xl md:text-5xl tracking-wide mb-4"
            style={heading}
          >
            Ask Our Concierge
          </h1>
          <p
            className="text-[#3B2B26]/50 text-[15px] max-w-xl mx-auto mb-8"
            style={body}
          >
            Our AI concierge is trained on comprehensive knowledge of all six
            Nayara properties. Ask anything about rooms, excursions, dining,
            wellness, or travel logistics.
          </p>
          <button
            onClick={() => setShowChat(true)}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#3B2B26] text-white text-[14px] hover:bg-[#3B2B26]/90 transition-colors"
            style={{ ...body, fontWeight: 500 }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
            Start a Conversation
          </button>
        </div>
      </section>

      {/* What It Knows */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-[#3B2B26] text-xl md:text-2xl mb-8 text-center"
            style={heading}
          >
            What Our Concierge Knows
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {KNOWLEDGE_AREAS.map((area) => (
              <div
                key={area.category}
                className="border border-[#3B2B26]/8 rounded-xl p-6"
              >
                <h3
                  className="text-[#3B2B26] text-[15px] mb-4"
                  style={{ ...body, fontWeight: 600 }}
                >
                  {area.category}
                </h3>
                <ul className="space-y-2.5">
                  {area.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#5a8a5a] mt-1.5 flex-shrink-0">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span
                        className="text-[#3B2B26]/60 text-[13px] leading-relaxed"
                        style={body}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What It Still Needs */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-[#3B2B26] text-xl md:text-2xl mb-6 text-center"
            style={heading}
          >
            What It Still Needs to Learn
          </h2>
          <div className="bg-[#fef9f0] border border-[#e8dcc8] rounded-xl p-6 md:p-8">
            <ul className="space-y-3">
              {GAPS.map((gap, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#c4a882] mt-1 flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                  </span>
                  <span
                    className="text-[#3B2B26]/60 text-[14px] leading-relaxed"
                    style={body}
                  >
                    {gap}
                  </span>
                </li>
              ))}
            </ul>
            <p
              className="mt-5 text-[#3B2B26]/40 text-[13px]"
              style={body}
            >
              For these items, the concierge will direct you to our reservations
              team or provide the most recent information available.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-[#3B2B26] text-xl md:text-2xl mb-8 text-center"
            style={heading}
          >
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Ask Anything",
                desc: "Type your question about any Nayara property, experience, or travel detail.",
              },
              {
                step: "02",
                title: "AI-Powered Response",
                desc: "Our concierge draws from comprehensive property knowledge to provide accurate, helpful answers.",
              },
              {
                step: "03",
                title: "Human Follow-Up",
                desc: "For bookings, special requests, or complex inquiries, we connect you with our reservations team.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <span
                  className="text-[#3B2B26]/15 text-[32px]"
                  style={{ ...heading }}
                >
                  {item.step}
                </span>
                <h3
                  className="text-[#3B2B26] text-[15px] mt-2 mb-2"
                  style={{ ...body, fontWeight: 600 }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[#3B2B26]/50 text-[13px] leading-relaxed"
                  style={body}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* The floating chat widget is already on all pages via App.tsx */}
    </div>
  );
}
