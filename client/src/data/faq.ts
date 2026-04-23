/**
 * FAQ Data — Organized by property and pillar for two-axis filtering
 * Each FAQ item has property tags and a pillar category.
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  /** Which properties this applies to (empty = brand-level / all properties) */
  properties: string[];
  /** Content pillar */
  pillar: string;
}

export const PILLARS = [
  { id: "all", label: "All Topics" },
  { id: "booking", label: "Booking & Reservations" },
  { id: "experiences", label: "Experiences" },
  { id: "wellness", label: "Wellness & Spa" },
  { id: "dining", label: "Dining" },
  { id: "sustainability", label: "Sustainability" },
  { id: "getting-here", label: "Getting Here" },
  { id: "general", label: "General" },
] as const;

export const PROPERTIES = [
  { id: "all", label: "All Properties" },
  { id: "springs", label: "Nayara Springs" },
  { id: "gardens", label: "Nayara Gardens" },
  { id: "tented-camp", label: "Nayara Tented Camp" },
  { id: "alto-atacama", label: "Nayara Alto Atacama" },
  { id: "hangaroa", label: "Nayara Hangaroa" },
  { id: "bocas-del-toro", label: "Nayara Bocas del Toro" },
] as const;

export const FAQ_DATA: FAQItem[] = [
  // ── Booking & Reservations ──
  {
    id: "booking-1",
    question: "What is the cancellation policy?",
    answer: "Cancellation policies vary by property and rate type. Most rates allow free cancellation up to 14 days before arrival. Holiday periods and special packages may have stricter terms. Please check your confirmation email or contact our reservations team for specific details.",
    properties: [],
    pillar: "booking",
  },
  {
    id: "booking-2",
    question: "Is Nayara Springs adults-only?",
    answer: "Yes. Nayara Springs is exclusively for guests aged 18 and older. Families with children are welcome at Nayara Gardens and Nayara Tented Camp, both located adjacent to Springs with shared access to restaurants and amenities.",
    properties: ["springs"],
    pillar: "booking",
  },
  {
    id: "booking-3",
    question: "Is Nayara Bocas del Toro adults-only?",
    answer: "Yes. Nayara Bocas del Toro is an adults-only resort. All guests must be 18 years or older.",
    properties: ["bocas-del-toro"],
    pillar: "booking",
  },
  {
    id: "booking-4",
    question: "Are children welcome at Nayara Gardens?",
    answer: "Absolutely. Nayara Gardens welcomes families with children of all ages. The property features family-friendly activities, a kids' club, and connecting room options. Children also have access to the shared restaurants and Spa Arenal.",
    properties: ["gardens"],
    pillar: "booking",
  },
  {
    id: "booking-5",
    question: "What is included in the all-inclusive rate at Alto Atacama?",
    answer: "Nayara Alto Atacama operates on a full-board basis that includes all meals, an open bar (premium spirits, wines, cocktails), daily guided excursions with bilingual guides, airport transfers from Calama (CJC), and access to the outdoor pool and spa facilities.",
    properties: ["alto-atacama"],
    pillar: "booking",
  },
  {
    id: "booking-6",
    question: "Do you offer honeymoon or anniversary packages?",
    answer: "Yes. All six properties offer romance packages that include special room decorations, spa treatments for two, private dining experiences, and other personalized touches. Contact our reservations team to customize your celebration.",
    properties: [],
    pillar: "booking",
  },

  // ── Experiences ──
  {
    id: "exp-1",
    question: "What excursions are available in the Atacama Desert?",
    answer: "Nayara Alto Atacama offers over 30 guided excursions including visits to the Tatio Geysers, Moon Valley, flamingo lagoons, salt flats, archaeological sites, stargazing with professional telescopes, horseback riding, and mountain biking. All excursions are included in your stay and led by bilingual guides.",
    properties: ["alto-atacama"],
    pillar: "experiences",
  },
  {
    id: "exp-2",
    question: "Can I visit Arenal Volcano from Nayara?",
    answer: "Yes. The three Costa Rica properties — Nayara Springs, Gardens, and Tented Camp — are located at the foot of Arenal Volcano. Guided hikes to the volcano's lava trails, hanging bridges walks, and waterfall excursions are available daily.",
    properties: ["springs", "gardens", "tented-camp"],
    pillar: "experiences",
  },
  {
    id: "exp-3",
    question: "What water activities are available at Bocas del Toro?",
    answer: "Nayara Bocas del Toro offers snorkeling, kayaking, paddleboarding, boat excursions to nearby islands, mangrove tours, and diving. The resort sits on a private island surrounded by coral reefs and Caribbean waters.",
    properties: ["bocas-del-toro"],
    pillar: "experiences",
  },
  {
    id: "exp-4",
    question: "Can I see the Moai statues from Nayara Hangaroa?",
    answer: "Yes. Nayara Hangaroa is located in Hanga Roa, the main town on Easter Island. Guided tours to Rano Raraku (the moai quarry), Ahu Tongariki, Orongo ceremonial village, and other archaeological sites are available. The hotel also offers cultural experiences including traditional Rapa Nui dance performances.",
    properties: ["hangaroa"],
    pillar: "experiences",
  },
  {
    id: "exp-5",
    question: "Do you offer stargazing experiences?",
    answer: "Yes. Nayara Alto Atacama offers professional stargazing sessions with high-powered telescopes in one of the world's clearest skies. The Atacama Desert has virtually zero light pollution, making it one of the best places on Earth for astronomical observation.",
    properties: ["alto-atacama"],
    pillar: "experiences",
  },

  // ── Wellness & Spa ──
  {
    id: "well-1",
    question: "What makes the hot springs at Nayara Springs special?",
    answer: "Every villa at Nayara Springs features a private natural hot spring pool fed by volcanic mineral water from Arenal Volcano. The water is naturally heated and rich in minerals. Guests also have access to Spa Arenal, which offers treatments incorporating local ingredients.",
    properties: ["springs"],
    pillar: "wellness",
  },
  {
    id: "well-2",
    question: "Is there a spa at Nayara Alto Atacama?",
    answer: "Yes. The spa at Alto Atacama features indoor and outdoor treatment rooms, a heated pool, and therapies inspired by ancestral Atacameño healing traditions. Treatments use local ingredients like volcanic mud, desert herbs, and mineral salts.",
    properties: ["alto-atacama"],
    pillar: "wellness",
  },
  {
    id: "well-3",
    question: "Do all Costa Rica properties share the same spa?",
    answer: "Yes. Spa Arenal serves guests of Nayara Springs, Gardens, and Tented Camp. It features treatment rooms, a yoga pavilion, meditation spaces, and uses locally sourced ingredients. Springs guests have priority booking.",
    properties: ["springs", "gardens", "tented-camp"],
    pillar: "wellness",
  },

  // ── Dining ──
  {
    id: "din-1",
    question: "How many restaurants are at the Costa Rica properties?",
    answer: "The Arenal campus has five restaurants shared across Springs, Gardens, and Tented Camp: Amor Loco (Latin fusion), Asia Luna (Pan-Asian), Nostalgia Wine Bar, Café Campesino (Costa Rican), and Rancho Nayara (farm-to-table). All guests can dine at any restaurant.",
    properties: ["springs", "gardens", "tented-camp"],
    pillar: "dining",
  },
  {
    id: "din-2",
    question: "Is dining included at Alto Atacama?",
    answer: "Yes. All meals are included in your stay — breakfast, lunch, and dinner — along with an open bar featuring premium spirits, Chilean wines, cocktails, and non-alcoholic beverages. The restaurant focuses on Chilean cuisine with Atacameño influences.",
    properties: ["alto-atacama"],
    pillar: "dining",
  },
  {
    id: "din-3",
    question: "Does Bocas del Toro have on-site dining?",
    answer: "Yes. Nayara Bocas del Toro features an overwater restaurant serving Caribbean-inspired cuisine with fresh seafood, a bar with craft cocktails, and in-villa dining options. The culinary program emphasizes locally sourced ingredients from Panama's Caribbean coast.",
    properties: ["bocas-del-toro"],
    pillar: "dining",
  },

  // ── Sustainability ──
  {
    id: "sust-1",
    question: "What sustainability certifications do Nayara properties hold?",
    answer: "Multiple Nayara properties hold Green Globe certification, recognizing their commitment to sustainable tourism. Nayara Alto Atacama and Hangaroa hold Chile's Sello S de Turismo Sustentable. The brand prioritizes renewable energy, water conservation, waste reduction, and community partnerships.",
    properties: [],
    pillar: "sustainability",
  },
  {
    id: "sust-2",
    question: "How does Nayara support local communities?",
    answer: "Each property partners with local communities through employment, artisan programs, cultural preservation, and educational initiatives. In Costa Rica, we support reforestation and wildlife conservation. In Chile, we work with Atacameño and Rapa Nui communities on cultural heritage projects.",
    properties: [],
    pillar: "sustainability",
  },
  {
    id: "sust-3",
    question: "Is Nayara Tented Camp eco-friendly?",
    answer: "Yes. Nayara Tented Camp is designed with minimal environmental impact — elevated canvas structures that leave virtually no footprint on the rainforest floor. The property uses sustainable materials, rainwater harvesting, and supports local reforestation initiatives.",
    properties: ["tented-camp"],
    pillar: "sustainability",
  },

  // ── Getting Here ──
  {
    id: "get-1",
    question: "How do I get to the Costa Rica properties?",
    answer: "Fly into San José (SJO) or Liberia (LIR) international airports. From there, you can take a domestic flight to La Fortuna/Arenal (~30 min), arrange a private transfer (~3 hours from SJO), or rent a car. The hotel can arrange airport transfers upon request.",
    properties: ["springs", "gardens", "tented-camp"],
    pillar: "getting-here",
  },
  {
    id: "get-2",
    question: "How do I get to Alto Atacama?",
    answer: "Fly into Calama (CJC) airport, which receives daily flights from Santiago. The hotel provides complimentary round-trip transfers from Calama airport to the resort (approximately 1 hour). San Pedro de Atacama is the nearest town, about 5 minutes from the property.",
    properties: ["alto-atacama"],
    pillar: "getting-here",
  },
  {
    id: "get-3",
    question: "How do I get to Easter Island?",
    answer: "LATAM Airlines operates daily flights from Santiago (SCL) to Mataveri International Airport (IPC) on Easter Island (~5 hours). Nayara Hangaroa is located in Hanga Roa, a short transfer from the airport. The hotel arranges airport pickups for all guests.",
    properties: ["hangaroa"],
    pillar: "getting-here",
  },
  {
    id: "get-4",
    question: "How do I get to Bocas del Toro?",
    answer: "Fly into Bocas del Toro (BOC) airport from Panama City (~1 hour) or take a domestic flight. From the airport, the resort arranges a boat transfer to the private island (approximately 20 minutes). International guests typically connect through Tocumen International Airport (PTY) in Panama City.",
    properties: ["bocas-del-toro"],
    pillar: "getting-here",
  },
  {
    id: "get-5",
    question: "Do you provide altitude acclimatization guidance for Atacama?",
    answer: "Yes. San Pedro de Atacama sits at approximately 2,400 meters (7,900 feet). The hotel provides acclimatization guidance and schedules excursions progressively — lower altitude activities on the first day, with higher-altitude excursions (like Tatio Geysers at 4,300m) later in your stay. Coca tea is available throughout the property.",
    properties: ["alto-atacama"],
    pillar: "getting-here",
  },

  // ── General ──
  {
    id: "gen-1",
    question: "What awards has Nayara won?",
    answer: "Nayara Resorts was named a Top 15 Resort Brand in the World by Travel + Leisure in both 2024 and 2025. Nayara Springs holds 3 Michelin Keys. Nayara Tented Camp was named #1 Resort in Central America by Travel + Leisure 5 of the last 6 years. Individual properties hold recognitions from Condé Nast Traveler, Virtuoso, Relais & Châteaux, and Green Globe.",
    properties: [],
    pillar: "general",
  },
  {
    id: "gen-2",
    question: "Is Wi-Fi available at all properties?",
    answer: "Yes. Complimentary high-speed Wi-Fi is available throughout all six Nayara properties, including guest rooms, common areas, and restaurants. Note that Easter Island's connectivity may be slower due to its remote location.",
    properties: [],
    pillar: "general",
  },
  {
    id: "gen-3",
    question: "What is the relationship between Springs, Gardens, and Tented Camp?",
    answer: "All three are sister properties located on the same campus at the foot of Arenal Volcano in Costa Rica. They share restaurants, Spa Arenal, and many excursions. Springs is adults-only with private hot spring villas. Gardens welcomes families. Tented Camp offers a glamping experience immersed in the rainforest canopy.",
    properties: ["springs", "gardens", "tented-camp"],
    pillar: "general",
  },
  {
    id: "gen-4",
    question: "Does Nayara have a loyalty program?",
    answer: "Nayara Resorts partners with Virtuoso and Relais & Châteaux, offering benefits through those programs. For direct booking benefits and returning guest recognition, please contact our reservations team.",
    properties: [],
    pillar: "general",
  },
];
