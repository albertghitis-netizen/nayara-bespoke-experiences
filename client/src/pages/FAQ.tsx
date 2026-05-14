/*
 * FAQ PAGE — /faq
 * Comprehensive FAQ page aggregating questions from all blog posts
 * Organized by category/pillar with accordion-style interaction
 * Uses FAQPageSchema for structured data
 */
import { useState } from "react";
import { motion } from "framer-motion";
import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";
import { FAQPageSchema } from "@/components/SEOSchemaEnhanced";

const display = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

const PALETTE = {
  cream: "#f7f5f0",
  espresso: "#3B2B26",
  muted: "#5a4a3a",
  accent: "#8B7355",
  divider: "rgba(59,43,38,0.12)",
};

interface FAQCategory {
  title: string;
  description: string;
  faqs: { question: string; answer: string }[];
}

const FAQ_CATEGORIES: FAQCategory[] = [
  {
    title: "About Nayara Resorts",
    description: "General questions about the Nayara brand and philosophy",
    faqs: [
      {
        question: "What defines luxury at Nayara?",
        answer: "Luxury at Nayara is rooted in nature, space, and a sense of place rather than excess. Each resort reflects local ecosystems, cultural values, and a quieter form of high-end hospitality.",
      },
      {
        question: "How does Nayara bring nature into each guest experience?",
        answer: "Every property is built within its environment. Rainforest paths, desert plateaus, and coastal mangroves shape how guests move, rest, and connect with the natural world.",
      },
      {
        question: "What role does purpose play in Nayara's approach to hospitality?",
        answer: "Purpose guides daily operations. Regeneration, cultural preservation, and community partnership define how decisions are made across Nayara Resorts.",
      },
      {
        question: "How do Nayara properties express this philosophy?",
        answer: "Each resort expresses luxury through its own landscape. Nayara Springs and Nayara Tented Camp reflect the rainforest, Nayara Bocas del Toro embodies the meeting of sea and forest, and Nayara Alto Atacama and Nayara Hangaroa honor the desert and volcanic origins of their surroundings.",
      },
      {
        question: "What can travelers expect across all Nayara destinations?",
        answer: "A calm rhythm, meaningful encounters with nature, regional food traditions, and hospitality shaped by the communities who call these landscapes home.",
      },
    ],
  },
  {
    title: "The Atacama Desert",
    description: "Understanding the landscape, climate, and ecology of the Atacama",
    faqs: [
      {
        question: "Why is the Atacama considered the driest desert on Earth?",
        answer: "Because powerful geographic forces block moisture from both directions. The Andes Mountains create a strong rain shadow to the east, while the cold Humboldt Current suppresses evaporation and cloud formation along the Pacific coast.",
      },
      {
        question: "How old is the Atacama Desert?",
        answer: "Scientific evidence suggests parts of the Atacama have remained hyper-arid for 10 to 15 million years, making it the oldest and most stable non-polar desert on Earth.",
      },
      {
        question: "Why does the Atacama resemble Mars?",
        answer: "Its extreme dryness, high ultraviolet radiation, mineral-rich soils, and lack of vegetation closely resemble conditions detected on Mars, which is why space agencies use it as a planetary analog.",
      },
      {
        question: "Is there life in the Atacama Desert?",
        answer: "Yes, but it is highly specialized. Life survives through efficiency rather than abundance, from underground microbial communities to high-altitude fauna adapted to aridity and salinity.",
      },
      {
        question: "Why is the Atacama important beyond travel?",
        answer: "The desert functions as a natural laboratory for climate science, geology, astronomy, and astrobiology, helping scientists understand Earth's past and assess the possibility of life beyond our planet.",
      },
    ],
  },
  {
    title: "Stargazing in the Atacama",
    description: "Night skies, astronomy, and what to expect when stargazing",
    faqs: [
      {
        question: "Why are the skies in the Atacama so clear?",
        answer: "High elevation, extremely low atmospheric moisture, stable air masses, and minimal light pollution combine to create some of the clearest skies on Earth.",
      },
      {
        question: "Can I see stars and the Milky Way without a telescope?",
        answer: "Yes. On clear, moonless nights, the Milky Way is easily visible to the naked eye, with defined structure and dark dust lanes. Many guests are surprised by how much is visible without optical equipment due to the absence of light pollution.",
      },
      {
        question: "Are stargazing experiences guided or self-led?",
        answer: "Guided experiences are available and recommended, as they provide telescopes and context that deepen understanding. However, the surrounding darkness also allows guests to observe the night sky independently from many areas of the property, making stargazing a natural part of the evening rather than a fixed event.",
      },
      {
        question: "Is stargazing affected by altitude or acclimatization?",
        answer: "Altitude improves sky clarity but requires a slower pace. Guests are encouraged to hydrate, avoid overexertion on arrival, and dress warmly for nighttime observation. Stargazing itself is gentle and well suited to the acclimatization process.",
      },
      {
        question: "What should I wear for nighttime stargazing in the Atacama?",
        answer: "Even after warm days, nighttime temperatures can drop sharply due to altitude and aridity. Warm layers, a jacket, and closed shoes are essential for comfort during extended observation.",
      },
      {
        question: "Is stargazing available year-round?",
        answer: "Yes. The Atacama offers clear skies throughout the year. Seasonal differences affect night length and which constellations are visible, but astronomical conditions remain consistently strong.",
      },
      {
        question: "What is the best moon phase for stargazing?",
        answer: "The new moon is ideal, as darker skies allow faint stars, nebulae, and the Milky Way's structure to appear most clearly. Moon phases are worth considering when planning a visit.",
      },
    ],
  },
  {
    title: "The Oasis and Catarpe Valley",
    description: "Why location matters in the Atacama and what makes the Catarpe Valley unique",
    faqs: [
      {
        question: "What makes the Catarpe Valley an oasis?",
        answer: "Permanent water flow, vegetation, and protective topography combine to create a stabilized microclimate distinct from the surrounding desert.",
      },
      {
        question: "Are desert oases cooler than their surroundings?",
        answer: "Yes. Scientific studies show that oases can remain several degrees cooler than adjacent desert areas due to vegetation and moisture.",
      },
      {
        question: "Have people always lived around oases in the Atacama?",
        answer: "Yes. Archaeological and cultural research confirms that settlement and trade followed water corridors for thousands of years.",
      },
      {
        question: "Is the oasis experience seasonal?",
        answer: "No. An oasis provides stabilizing effects year-round, moderating both heat and cold.",
      },
      {
        question: "Does staying in an oasis change how the desert feels?",
        answer: "Yes. Shelter, shade, and reduced wind transform the desert from an environment of exposure into one of continuity.",
      },
    ],
  },
  {
    title: "Nature-Based Wellness",
    description: "Questions about how ecosystems shape health and wellbeing at Nayara Resorts.",
    faqs: [
      {
        question: "What is nature-based wellness?",
        answer: "Nature-based wellness treats specific ecosystems as active health inputs rather than passive backdrops. Research in environmental psychology, forest medicine, and blue-space health shows that different natural settings produce different physiological and psychological responses. At Nayara, we design stays around four ecosystem types: desert (brown), dark sky (black), rainforest (green), and coast/reef (blue).",
      },
      {
        question: "What do you mean by brown, black, green, and blue-green spaces?",
        answer: "Brown refers to arid, low-input landscapes like the Atacama Desert. Black refers to genuinely dark night skies free of artificial light. Green refers to dense, biodiverse environments like tropical rainforests. Blue-green refers to settings where coastal water and vegetation overlap, such as reef-and-mangrove systems in Bocas del Toro.",
      },
      {
        question: "Is there real science behind forest bathing, hot springs, and time near water?",
        answer: "Yes. Systematic reviews and meta-analyses report that forest immersion tends to reduce cortisol, heart rate, and blood pressure. Balneotherapy research shows thermal bathing can reduce pain and improve mobility in musculoskeletal conditions. Blue-space studies link regular time near coasts and lakes with higher life satisfaction and lower psychological distress.",
      },
      {
        question: "How much time in nature do you need to feel a difference?",
        answer: "A large cross-sectional study published in Nature Scientific Reports found that people who spent at least 120 minutes per week in natural environments reported significantly higher health and wellbeing than those who spent less. The effect appeared whether the time was taken in a single visit or spread across several shorter ones.",
      },
      {
        question: "How do Nayara properties fit into this color-based framework?",
        answer: "Nayara Alto Atacama is our primary brown and black space, with open desert views, minimal vegetation, and protected dark skies. Nayara Gardens, Nayara Springs, and Nayara Tented Camp together form a green and green-blue rainforest circuit. Nayara Bocas del Toro is our blue and blue-green setting, echoing blue-space studies that link coastal environments with better mental health.",
      },
      {
        question: "Are these experiences medical treatments?",
        answer: "They are not positioned as medical treatments and should not replace clinical advice. The research base indicates that nature exposure, forest immersion, thermal bathing, and time near water can support mental health, stress recovery, sleep, and quality of life, and in some cases help manage symptoms alongside standard care. Guests with specific conditions should follow guidance from their clinicians.",
      },
      {
        question: "How is this different from a typical spa or wellness retreat?",
        answer: "Traditional spa menus often start with treatments and add the setting later. Our approach starts with ecosystems and treats architecture, programming, and spa design as ways to deliver specific types of exposure to desert, rainforest, reef, and night sky. Spa treatments at Nayara sit on top of that ecological base rather than replacing it.",
      },
    ],
  },
];

/* All FAQs flattened for schema */
const ALL_FAQS = FAQ_CATEGORIES.flatMap((cat) => cat.faqs);

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-40px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: PALETTE.cream }}>
      <BrandNavigation pageType="brand" />
      <FAQPageSchema url="https://nayararesorts.manus.space/faq" faqs={ALL_FAQS} />

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p
              className="uppercase tracking-[0.3em] text-[10px] mb-4"
              style={{ ...body, fontWeight: 600, color: PALETTE.accent }}
            >
              Nayara Resorts
            </p>
            <h1
              className="text-3xl md:text-5xl leading-tight mb-6"
              style={{ ...display, color: PALETTE.espresso }}
            >
              Frequently Asked Questions
            </h1>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] max-w-2xl"
              style={{ ...body, color: PALETTE.muted }}
            >
              Answers drawn from our journal, organized by topic. If you have a question not covered here, our concierge is always available.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ Categories */}
      {FAQ_CATEGORIES.map((category, catIdx) => (
        <section
          key={catIdx}
          className="px-6 md:px-12 pb-16 md:pb-20"
          style={{ backgroundColor: PALETTE.cream }}
        >
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <div className="mb-8">
                <h2
                  className="text-2xl md:text-3xl mb-2"
                  style={{ ...display, color: PALETTE.espresso }}
                >
                  {category.title}
                </h2>
                <p
                  className="text-[13px] tracking-wide"
                  style={{ ...body, color: PALETTE.muted + "99" }}
                >
                  {category.description}
                </p>
              </div>
            </Reveal>

            <div className="flex flex-col">
              {category.faqs.map((faq, faqIdx) => {
                const key = `${catIdx}-${faqIdx}`;
                const isOpen = !!openItems[key];
                return (
                  <Reveal key={key} delay={faqIdx * 0.04}>
                    <div
                      className="border-b"
                      style={{ borderColor: PALETTE.divider }}
                    >
                      <button
                        onClick={() => toggleItem(key)}
                        className="w-full flex items-center justify-between py-6 text-left"
                      >
                        <span
                          className="text-[15px] md:text-[16px] pr-8"
                          style={{ ...body, fontWeight: 500, color: PALETTE.espresso }}
                        >
                          {faq.question}
                        </span>
                        <motion.svg
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-5 h-5 flex-shrink-0"
                          style={{ color: PALETTE.muted }}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </motion.svg>
                      </button>
                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? "auto" : 0,
                          opacity: isOpen ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p
                          className="pb-6 text-[14px] md:text-[15px] leading-[1.85]"
                          style={{ ...body, color: PALETTE.muted }}
                        >
                          {faq.answer}
                        </p>
                      </motion.div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 md:py-20 px-6 md:px-12" style={{ backgroundColor: PALETTE.cream }}>
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p
              className="text-[15px] md:text-[17px] leading-[1.9] mb-8"
              style={{ ...body, color: PALETTE.muted }}
            >
              For questions about specific properties, reservations, or travel planning, our team is here to help.
            </p>
            <a
              href="/journal"
              className="inline-block px-8 py-3 border text-[11px] tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#3B2B26] hover:text-white"
              style={{ ...body, fontWeight: 500, color: PALETTE.espresso, borderColor: PALETTE.divider }}
            >
              Explore the Journal
            </a>
          </Reveal>
        </div>
      </section>

      <Footer textColor="#FFFFFF" />
    </div>
  );
}
