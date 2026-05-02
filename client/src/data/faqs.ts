// ─── FAQ Data ───────────────────────────────────────────────────────
// Extracted from all Nayara blog posts

export interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
  source: string; // Which blog this came from
}

export const faqs: FAQ[] = [
  // ─── Nature-Based Wellness FAQs ───
  {
    id: "wellness-brown-what",
    category: "Nature-Based Wellness",
    question: "What is 'Brown' wellness and why is it important?",
    answer: "Brown wellness refers to desert environments like Nayara Alto Atacama. The stripped-back, low-input sensory environment of deserts helps restore fatigued attention and supports mental clarity. Bright daylight in deserts also supports melatonin timing and sleep quality.",
    source: "Brand Wellness: Nature-Based Wellness by Colors",
  },
  {
    id: "wellness-black-what",
    category: "Nature-Based Wellness",
    question: "What is 'Black' wellness and how does it work?",
    answer: "Black wellness is dark-sky wellness where artificial light is kept intentionally low. Once your eyes adapt, the night sky becomes the main feature. This creates a full 24-hour environment for clarity, sleep support, and emotional reset through the contrast between bright days and genuinely dark nights.",
    source: "Brand Wellness: Nature-Based Wellness by Colors",
  },
  {
    id: "wellness-green-benefits",
    category: "Nature-Based Wellness",
    question: "What are the benefits of rainforest (Green) wellness?",
    answer: "Rainforest environments reduce anxiety and depression while improving overall mental wellbeing. Trees emit volatile organic compounds (terpenes) with antioxidant and immune-modulating effects. Forest walks show lower cortisol, heart rate, and blood pressure compared with urban walks.",
    source: "Brand Wellness: Nature-Based Wellness by Colors",
  },
  {
    id: "wellness-blue-water",
    category: "Nature-Based Wellness",
    question: "How does water (Blue) wellness support wellbeing?",
    answer: "Blue-space exposure links with higher life satisfaction and lower psychological distress. Aquatic environments support wellbeing through stress reduction and physical activity. Water immersion adds tactile and vestibular components for anxiety reduction and body awareness.",
    source: "Brand Wellness: Nature-Based Wellness by Colors",
  },
  {
    id: "wellness-science-based",
    category: "Nature-Based Wellness",
    question: "Is nature-based wellness backed by science?",
    answer: "Yes. Nature-based wellness is grounded in peer-reviewed research including Attention Restoration Theory, forest bathing studies, circadian rhythm research, and blue-space wellbeing studies. All Nayara wellness offerings are designed around these scientific principles.",
    source: "Brand Wellness: Nature-Based Wellness by Colors",
  },

  // ─── Costa Rica Wellness FAQs ───
  {
    id: "cr-wellness-yoga",
    category: "Costa Rica Wellness",
    question: "What yoga practices are offered at Costa Rica properties?",
    answer: "Morning yoga overlooks the canopy at Costa Rica properties like Nayara Springs, Gardens, and Tented Camp. Sessions are designed to connect with the rainforest environment and support mindfulness and flexibility.",
    source: "Costa Rica Wellness: Nurtured by Nature",
  },
  {
    id: "cr-wellness-thermals",
    category: "Costa Rica Wellness",
    question: "What are Las Thermas and how are they used for wellness?",
    answer: "Las Thermas are natural hot springs at Nayara Springs. The warm mineral-rich water supports muscle relaxation, circulation, and stress relief. Guests can enjoy thermal baths as part of their wellness routine.",
    source: "Costa Rica Wellness: Nurtured by Nature",
  },
  {
    id: "cr-wellness-spa",
    category: "Costa Rica Wellness",
    question: "What spa treatments are available?",
    answer: "Costa Rica properties offer a range of spa treatments including massages, body treatments, and facials using natural and organic products. Treatments are designed to complement the rainforest wellness experience.",
    source: "Costa Rica Wellness: Nurtured by Nature",
  },

  // ─── Bocas Wellness FAQs ───
  {
    id: "bocas-what-is",
    category: "Bocas del Toro",
    question: "What makes Bocas del Toro unique?",
    answer: "Bocas del Toro is Panama's Caribbean archipelago where rainforest meets reef. It combines the calming effect of horizon and waves with the multi-sensory richness of vegetation and wildlife. The region is known for bioluminescent bays, pristine coral reefs, and rich biodiversity.",
    source: "Bocas History, Culture & Nature",
  },
  {
    id: "bocas-history",
    category: "Bocas del Toro",
    question: "What is the history of Bocas del Toro?",
    answer: "Bocas del Toro has a rich colonial heritage and has been an important trading hub. The islands were historically home to the Ngöbe-Buglé indigenous people and later became a center for banana and cacao production.",
    source: "Bocas History, Culture & Nature",
  },
  {
    id: "bocas-coral-reefs",
    category: "Bocas del Toro",
    question: "Why are Bocas coral reefs important?",
    answer: "Bocas del Toro's coral reefs are among the most biodiverse in the Caribbean. They support thousands of marine species and are critical for ocean health. Nayara is committed to coral reef restoration and marine conservation.",
    source: "Bocas History, Culture & Nature",
  },
  {
    id: "bocas-conde-nast",
    category: "Bocas del Toro",
    question: "Why did Condé Nast Traveler name Nayara Bocas #1?",
    answer: "Nayara Bocas del Toro was named #1 luxury resort in Central America by Condé Nast Traveler in 2025. This recognition reflects the resort's innovation in design, sustainability practices, and unparalleled hospitality.",
    source: "Bocas Condé Nast Award",
  },
  {
    id: "bocas-aerial-beach",
    category: "Bocas del Toro",
    question: "What is the aerial beach at Nayara Bocas?",
    answer: "Nayara Bocas features the world's first aerial beach — an innovative engineering feat that creates a beach experience suspended above the water, combining the luxury of a private beach with the unique Caribbean setting.",
    source: "Nayara Bocas Resort Experience",
  },
  {
    id: "bocas-treehouses",
    category: "Bocas del Toro",
    question: "What are the treehouses at Nayara Bocas?",
    answer: "Nayara Bocas features architectural treehouses designed by renowned architect Elora Hardy. These structures blend sustainable materials with innovative design, offering a unique treehouse experience in the Caribbean rainforest.",
    source: "Nayara Bocas Resort Experience",
  },

  // ─── Nayara by Night FAQs ───
  {
    id: "night-stargazing",
    category: "Nayara by Night",
    question: "Where can I stargazing at Nayara?",
    answer: "The best stargazing is at Nayara Alto Atacama in Chile's Atacama Desert, which has some of the clearest skies on Earth. Nayara Springs in Costa Rica also offers excellent night sky experiences with less light pollution.",
    source: "Nayara by Night: Of Moon and Stars",
  },
  {
    id: "night-bioluminescence",
    category: "Nayara by Night",
    question: "What is bioluminescence and where can I see it?",
    answer: "Bioluminescence is the natural light produced by living organisms. At Nayara Bocas del Toro, guests can experience bioluminescent bays where the water glows with living light. This magical phenomenon is best seen on moonless nights.",
    source: "Nayara by Night: Of Moon and Stars",
  },
  {
    id: "night-dark-sky",
    category: "Nayara by Night",
    question: "Why is dark sky wellness important?",
    answer: "Dark skies support natural circadian rhythms, allowing melatonin to rise and supporting better sleep and metabolic regulation. The experience of awe under a clear night sky also modifies mood, reduces stress, and increases prosocial behavior.",
    source: "Nayara by Night: Of Moon and Stars",
  },
  {
    id: "night-moon-phases",
    category: "Nayara by Night",
    question: "How do moon phases affect the night sky experience?",
    answer: "Different moon phases create different night sky experiences. New moons offer the darkest skies and best stargazing. Full moons provide dramatic lighting and are ideal for night activities. Nayara properties offer experiences tailored to the lunar calendar.",
    source: "Nayara by Night: Of Moon and Stars",
  },

  // ─── General Nayara FAQs ───
  {
    id: "nayara-properties",
    category: "Nayara Resorts",
    question: "How many Nayara properties are there?",
    answer: "Nayara operates 6 luxury properties: Nayara Gardens, Nayara Springs, and Nayara Tented Camp in Costa Rica; Nayara Alto Atacama in Chile; Nayara Hangaroa on Easter Island; and Nayara Bocas del Toro in Panama.",
    source: "Brand Wellness: Nature-Based Wellness by Colors",
  },
  {
    id: "nayara-sustainability",
    category: "Nayara Resorts",
    question: "What is Nayara's commitment to sustainability?",
    answer: "Nayara is committed to regenerative travel and environmental stewardship. All properties implement sustainability practices including renewable energy, water conservation, plastic elimination, cultural preservation, and community support.",
    source: "Brand Wellness: Nature-Based Wellness by Colors",
  },
  {
    id: "nayara-michelin",
    category: "Nayara Resorts",
    question: "How many MICHELIN Keys does Nayara have?",
    answer: "Nayara Resorts has earned 7 MICHELIN Keys across its properties — a testament to culinary excellence and hospitality standards. Nayara Springs alone holds 3 MICHELIN Keys.",
    source: "Brand Wellness: Nature-Based Wellness by Colors",
  },
];

export function getFAQsByCategory(category: string): FAQ[] {
  return faqs.filter((faq) => faq.category === category);
}

export function getAllCategories(): string[] {
  const categories = new Set(faqs.map((faq) => faq.category));
  return Array.from(categories).sort();
}

export function searchFAQs(query: string): FAQ[] {
  const lowerQuery = query.toLowerCase();
  return faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(lowerQuery) ||
      faq.answer.toLowerCase().includes(lowerQuery) ||
      faq.category.toLowerCase().includes(lowerQuery)
  );
}
