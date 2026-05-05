/*
 * ATACAMA WINTER & ROMANCE BLOG — Combined: Winter Clarity + Desert Romance
 * Property-specific blog in Atacama Colors (warm earth tones with desert accents)
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

// Atacama color palette
const atacamaColors = {
  primary: "#8B6F47",
  secondary: "#A68B6E",
  accent: "#D4A574",
  light: "#F5F1ED",
  dark: "#3A2A1A",
  text: "#2C2C2C",
};

export default function AtacamaWinterRomanceBlog() {
  return (
    <div className="min-h-screen bg-white">
      <EnhancedArticleSchema
        image="https://nayararesorts.manus.space"
        headline="AtacamaWinterRomance | Nayara Resorts"
        description="Discover insights about atacamawinterromance at Nayara Resorts."
        author={{ name: "Nayara Resorts", expertise: ["Luxury Travel", "Sustainable Tourism"] }}
        datePublished="2024-01-01"
        url="https://nayararesorts.manus.space/blog/atacamawinterromance"
      />
      <BrandNavigation />

      {/* Hero Section - Placeholder for video */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: atacamaColors.dark }}>
        <div className="absolute inset-0 opacity-30 bg-gradient-to-b from-black/40 to-black/60" />

        <div className="relative z-10 text-center px-6 md:px-10 max-w-3xl">
          <FadeIn>
            <h1 style={heading} className="text-4xl md:text-6xl mb-6 text-white leading-tight">
              Winter & Romance in the Atacama
            </h1>
            <p style={body} className="text-xl md:text-2xl mb-8 text-white/90">
              When the desert becomes a place of clarity and intimacy
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p style={body} className="text-lg text-gray-700 mb-6 leading-relaxed">
              In the Atacama Desert, winter is not a compromise. It is the moment when the desert becomes legible. Cooler days, longer nights, and exceptional atmospheric clarity allow the landscape to reveal its deepest character.
            </p>
            <p style={body} className="text-lg text-gray-700 mb-6 leading-relaxed">
              And when two people experience this clarity together, something shifts. The desert's simplicity—its reduction of noise, its demand for presence—becomes the foundation for something rare: genuine intimacy in a landscape that strips away everything unnecessary.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Part 1: Winter Clarity */}
      <section className="py-20 px-6 md:px-10" style={{ backgroundColor: atacamaColors.light }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl mb-12 text-center" style={{ ...heading, color: atacamaColors.dark }}>
              Part 1: Winter Clarity
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl mb-4" style={{ ...heading, color: atacamaColors.primary }}>
                  Lower Humidity, Longer Nights
                </h3>
                <p style={body} className="text-gray-700 mb-4">
                  Winter brings lower humidity, longer nights, and exceptionally stable air. These conditions produce some of the clearest night skies on Earth, which is why northern Chile hosts the world's most advanced observatories.
                </p>
                <p style={body} className="text-gray-700">
                  During austral winter, atmospheric turbulence decreases and cloud cover becomes rare. The sky gains coherence. Stars sharpen. Constellations regain spatial logic rather than dissolving into glare.
                </p>
              </div>

              <div>
                <h3 className="text-2xl mb-4" style={{ ...heading, color: atacamaColors.primary }}>
                  Peak Visibility of the Milky Way
                </h3>
                <p style={body} className="text-gray-700 mb-4">
                  Winter also aligns with peak visibility of the Milky Way's galactic core. From June through August, the galaxy rises earlier and remains visible longer, transforming the night sky from a backdrop into a structure that unfolds over hours rather than minutes.
                </p>
                <p style={body} className="text-gray-700">
                  In most places, darkness has been erased by light and speed. In the Atacama in winter, night returns as a place.
                </p>
              </div>

              <div>
                <h3 className="text-2xl mb-4" style={{ ...heading, color: atacamaColors.primary }}>
                  Cooler Days, Clearer Thinking
                </h3>
                <p style={body} className="text-gray-700">
                  Winter brings cooler daytime temperatures, longer nights, and extremely dry air, making it the best time to visit the Atacama Desert for sustained exploration and comfort. Movement slows. Attention sharpens. The desert stops overwhelming and begins explaining itself.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Part 2: Romance in the Desert */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl mb-12 text-center" style={{ ...heading, color: atacamaColors.dark }}>
              Part 2: Romance in the Desert
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl mb-4" style={{ ...heading, color: atacamaColors.primary }}>
                  Why Deserts Have Always Been Places of Love
                </h3>
                <p style={body} className="text-gray-700 mb-4">
                  Romance has always belonged to places that remove certainty. Across civilizations, deserts appear again and again as landscapes where intimacy deepens not through abundance, but through subtraction. The Atacama follows this pattern.
                </p>
                <p style={body} className="text-gray-700">
                  Environmental psychology consistently shows that environments with low sensory clutter heighten emotional attunement. When visual noise, mechanical sound, and constant stimulus fall away, attention relocates inward and toward nearby social cues. Research published in the Journal of Environmental Psychology links exposure to vast environments with increased reflective capacity and increased emotional awareness.
                </p>
              </div>

              <div>
                <h3 className="text-2xl mb-4" style={{ ...heading, color: atacamaColors.primary }}>
                  The Desert's Simplicity
                </h3>
                <p style={body} className="text-gray-700 mb-4">
                  Brown days simplify attention. Black nights restore scale. The oasis sustains presence. Winter returns time. Sound narrows awareness. Shared vulnerability deepens trust.
                </p>
                <p style={body} className="text-gray-700">
                  Romance here is not promised. It is permitted. The landscape does not create intimacy—it removes the obstacles to it.
                </p>
              </div>

              <div>
                <h3 className="text-2xl mb-4" style={{ ...heading, color: atacamaColors.primary }}>
                  Stargazing Together
                </h3>
                <p style={body} className="text-gray-700">
                  When two people stand beneath the Atacama's winter sky and watch the Milky Way unfold, they are experiencing something most of humanity will never see. That shared rarity—that shared awe—becomes a bond. The universe becomes intimate.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Nayara Alto Atacama for Couples */}
      <section className="py-20 px-6 md:px-10" style={{ backgroundColor: atacamaColors.light }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl mb-12 text-center" style={{ ...heading, color: atacamaColors.dark }}>
              Nayara Alto Atacama for Couples
            </h2>

            <p style={body} className="text-lg text-gray-700 mb-8 text-center">
              What defines Nayara Alto Atacama as the best resort for couples is alignment with the desert's deepest logic.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Brown Days", description: "Simplify attention and ground presence in the moment" },
                { title: "Black Nights", description: "Restore scale and perspective through cosmic wonder" },
                { title: "The Oasis", description: "Sustains presence and provides shelter within extremity" },
                { title: "Winter Time", description: "Returns rhythm and allows continuity between days" },
                { title: "Desert Sound", description: "Narrows awareness and deepens connection" },
                { title: "Shared Vulnerability", description: "Deepens trust through mutual exposure to beauty" },
              ].map((item, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="p-6 bg-white rounded-lg shadow-sm border-l-4" style={{ borderColor: atacamaColors.accent }}>
                    <h3 className="text-lg mb-3" style={{ ...heading, color: atacamaColors.primary }}>
                      {item.title}
                    </h3>
                    <p style={body} className="text-gray-700">
                      {item.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Sources & Further Reading */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl mb-12 text-center" style={{ ...heading, color: atacamaColors.dark }}>
              Sources & Further Reading
            </h2>

            <div className="space-y-12">
              <div>
                <h3 className="text-xl mb-6" style={{ ...heading, color: atacamaColors.primary }}>
                  Scientific References
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span style={{ color: atacamaColors.accent }} className="font-bold">
                      ◆
                    </span>
                    <span>Journal of Environmental Psychology — Environmental Effects on Emotional Attunement</span>
                  </li>
                  <li className="flex gap-3">
                    <span style={{ color: atacamaColors.accent }} className="font-bold">
                      ◆
                    </span>
                    <span>European Southern Observatory — Atmospheric Conditions in Northern Chile</span>
                  </li>
                  <li className="flex gap-3">
                    <span style={{ color: atacamaColors.accent }} className="font-bold">
                      ◆
                    </span>
                    <span>Greater Good Science Center — Awe and Connection Research</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl mb-6" style={{ ...heading, color: atacamaColors.primary }}>
                  Related Nayara Content
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span style={{ color: atacamaColors.accent }} className="font-bold">
                      →
                    </span>
                    <a href="/blog/atacama-oasis" className="hover:underline" style={{ color: atacamaColors.primary }}>
                      The Oasis Factor: Best Place to Stay in Atacama
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <span style={{ color: atacamaColors.accent }} className="font-bold">
                      →
                    </span>
                    <a href="/blog/atacama-mars" className="hover:underline" style={{ color: atacamaColors.primary }}>
                      Why the Atacama is Mars on Earth
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer bgColor="#B85C3C" textColor="#FFFFFF" propertyName="Alto Atacama" />
    </div>
  );
}
