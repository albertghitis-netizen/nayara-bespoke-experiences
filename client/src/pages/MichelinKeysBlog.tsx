/*
 * MICHELIN KEYS BLOG — 7 MICHELIN Keys. 3 Countries. 1 Standard of Excellence
 * Multi-property blog in Brand Colors (warm earth tones)
 * Hero video: To be provided (horizontal for desktop, vertical for mobile)
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Footer from "@/components/Footer";
import { EnhancedArticleSchema } from "@/components/SEOSchemaEnhanced";
import BrandNavigation from "@/components/BrandNavigation";

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

// Brand color palette for multi-property content
const brandColors = {
  primary: "#8B7355",
  secondary: "#A0826D",
  accent: "#D4A574",
  light: "#F5F1ED",
  dark: "#3A2A1A",
  text: "#2C2C2C",
};

interface MichelinProperty {
  name: string;
  keys: number;
  location: string;
  description: string;
}

const properties: MichelinProperty[] = [
  {
    name: "Nayara Springs",
    keys: 3,
    location: "Costa Rica",
    description: "Costa Rica's first and only Three-Key hotel. An adults-only property in the Arenal Volcano region offering exceptional dining, open-air spa pavilions, and guided excursions.",
  },
  {
    name: "Nayara Bocas del Toro",
    keys: 2,
    location: "Panama",
    description: "A Two-Key property in the Caribbean archipelago, combining overwater villas, innovative architecture, and pristine natural surroundings.",
  },
  {
    name: "Nayara Alto Atacama",
    keys: 2,
    location: "Chile",
    description: "A Two-Key property in the Atacama Desert, offering stargazing, wellness experiences, and exceptional cuisine in one of Earth's most unique landscapes.",
  },
];

const michelin5Questions = [
  {
    question: "Does this hotel feel genuinely connected to its destination?",
    answer: "Nayara properties are built into their landscapes, not imposed upon them. Each resort exists as a way of entering its destination more deeply.",
  },
  {
    question: "Does its design honor local character?",
    answer: "Every property draws from local tradition — from Costa Rican furnishings to Atacama desert aesthetics to Caribbean architectural influences.",
  },
  {
    question: "Is the service consistently excellent?",
    answer: "Nayara's hospitality standards are consistent across all properties, delivering exceptional service in every interaction.",
  },
  {
    question: "Does it deliver meaningful value?",
    answer: "Nayara offers extraordinary experiences that justify their value — from world-class dining to transformative wellness to unparalleled natural access.",
  },
  {
    question: "Does it have an authentic personality that could not exist anywhere else?",
    answer: "Each Nayara property has a distinct personality rooted in its specific landscape, culture, and ecosystem. This authenticity is what MICHELIN recognizes.",
  },
];

export default function MichelinKeysBlog() {
  return (
    <div className="min-h-screen bg-white">
      <EnhancedArticleSchema
        image="https://nayararesorts.manus.space"
        headline="Michelin Keys: Culinary Excellence at Nayara Resorts"
        description="Explore the award-winning restaurants and farm-to-table dining experiences across our six properties."
        author={{ name: "Nayara Resorts", expertise: ["Luxury Travel", "Sustainable Tourism"] }}
        datePublished="2024-03-10"
        url="https://nayararesorts.manus.space/blog/michelinkeys"
      />
      <BrandNavigation />

      {/* Hero Section - Placeholder for video */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: brandColors.dark }}>
        <div className="absolute inset-0 opacity-30 bg-gradient-to-b from-black/40 to-black/60" />

        <div className="relative z-10 text-center px-6 md:px-10 max-w-3xl">
          <FadeIn>
            <h1 style={heading} className="text-4xl md:text-6xl mb-6 text-white leading-tight">
              7 MICHELIN Keys
            </h1>
            <p style={body} className="text-xl md:text-2xl mb-8 text-white/90">
              3 Countries. 1 Standard of Excellence
            </p>
            <p style={body} className="text-lg text-white/80">
              Celebrating Nayara's recognition as a global leader in luxury hospitality
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p style={body} className="text-lg text-gray-700 mb-6 leading-relaxed">
              For over a century, the MICHELIN Guide has been the most trusted independent voice in hospitality evaluation. In 2025, the Guide expanded its hotel selection globally for the first time, introducing the MICHELIN Key system to recognize the world's finest hotels.
            </p>
            <p style={body} className="text-lg text-gray-700 mb-6 leading-relaxed">
              Nayara Resorts earned 7 MICHELIN Keys across three countries — a testament to our commitment to excellence, authenticity, and meaningful hospitality.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* MICHELIN Key Criteria */}
      <section className="py-20 px-6 md:px-10" style={{ backgroundColor: brandColors.light }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl mb-12 text-center" style={{ ...heading, color: brandColors.dark }}>
              The MICHELIN Key Criteria
            </h2>

            <p style={body} className="text-gray-700 mb-12 text-center">
              MICHELIN inspectors evaluate hotels on five essential questions:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {michelin5Questions.map((item, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="p-6 bg-white rounded-lg shadow-sm border-l-4" style={{ borderColor: brandColors.accent }}>
                    <h3 className="text-lg mb-3" style={{ ...heading, color: brandColors.primary }}>
                      {item.question}
                    </h3>
                    <p style={body} className="text-gray-700">
                      {item.answer}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Nayara Properties */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl mb-12 text-center" style={{ ...heading, color: brandColors.dark }}>
              Nayara's MICHELIN Keys
            </h2>
          </FadeIn>

          <div className="space-y-12">
            {properties.map((prop, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="grid md:grid-cols-3 gap-8 items-center pb-12 border-b border-gray-200">
                  <div>
                    <h3 className="text-2xl mb-2" style={{ ...heading, color: brandColors.primary }}>
                      {prop.name}
                    </h3>
                    <p style={body} className="text-sm text-gray-600 mb-4">
                      {prop.location}
                    </p>
                    <div className="flex gap-1">
                      {Array.from({ length: prop.keys }).map((_, i) => (
                        <div key={i} className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: brandColors.accent }}>
                          ◆
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <p style={body} className="text-gray-700 leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* What MICHELIN Recognizes */}
      <section className="py-20 px-6 md:px-10" style={{ backgroundColor: brandColors.light }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl mb-12 text-center" style={{ ...heading, color: brandColors.dark }}>
              What MICHELIN Recognizes in Nayara
            </h2>

            <div className="space-y-8">
              <div className="p-8 bg-white rounded-lg">
                <h3 className="text-xl mb-4" style={{ ...heading, color: brandColors.primary }}>
                  Authentic Connection to Place
                </h3>
                <p style={body} className="text-gray-700">
                  Each Nayara property is deeply rooted in its landscape and culture. We don't impose luxury on nature — we create experiences that honor it.
                </p>
              </div>

              <div className="p-8 bg-white rounded-lg">
                <h3 className="text-xl mb-4" style={{ ...heading, color: brandColors.primary }}>
                  Exceptional Culinary Excellence
                </h3>
                <p style={body} className="text-gray-700">
                  Our restaurants are destinations in themselves. Local ingredients and culinary traditions are the starting point, not an afterthought.
                </p>
              </div>

              <div className="p-8 bg-white rounded-lg">
                <h3 className="text-xl mb-4" style={{ ...heading, color: brandColors.primary }}>
                  Meaningful Hospitality
                </h3>
                <p style={body} className="text-gray-700">
                  Our service is built on genuine care and understanding. We anticipate needs and create moments that guests will remember for a lifetime.
                </p>
              </div>

              <div className="p-8 bg-white rounded-lg">
                <h3 className="text-xl mb-4" style={{ ...heading, color: brandColors.primary }}>
                  Sustainability & Regeneration
                </h3>
                <p style={body} className="text-gray-700">
                  We're committed to leaving destinations better than we found them. Every property implements practices that support local communities and ecosystems.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Sources & Further Reading */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl mb-12 text-center" style={{ ...heading, color: brandColors.dark }}>
              Sources & Further Reading
            </h2>

            <div className="space-y-12">
              <div>
                <h3 className="text-xl mb-6" style={{ ...heading, color: brandColors.primary }}>
                  Official MICHELIN Resources
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span style={{ color: brandColors.accent }} className="font-bold">
                      ◆
                    </span>
                    <a href="https://guide.michelin.com/en/hotels" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: brandColors.primary }}>
                      MICHELIN Guide: Hotel Selection
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <span style={{ color: brandColors.accent }} className="font-bold">
                      ◆
                    </span>
                    <a href="https://guide.michelin.com/en/hotels/nayara-springs" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: brandColors.primary }}>
                      MICHELIN Guide: Nayara Springs
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl mb-6" style={{ ...heading, color: brandColors.primary }}>
                  Related Nayara Content
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span style={{ color: brandColors.accent }} className="font-bold">
                      →
                    </span>
                    <a href="/wellness" className="hover:underline" style={{ color: brandColors.primary }}>
                      Brand Wellness: Nature-Based Wellness by Colors
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <span style={{ color: brandColors.accent }} className="font-bold">
                      →
                    </span>
                    <a href="/blog/bocas-conde-nast-award" className="hover:underline" style={{ color: brandColors.primary }}>
                      Bocas del Toro: Condé Nast Traveler Award
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
