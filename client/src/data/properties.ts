/*
 * Centralized property data for all six Nayara Resorts.
 * Experiences (excursions) and Wellness (spa) for each property.
 * Real photos only. Placeholders clearly marked.
 */

// ─── CDN Assets ───────────────────────────────────────────────
const CDN = {
  atacamaVideo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/compressed-atacama-desktop_53259368.mp4",
  atacamaVertical: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/compressed-atacama-mobile_ff90639c.mp4",
  atacamaDesert: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/IMG_6253_ffc4f157.PNG",
  atacamaVicunas: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/IMG_8113_9e8e2ecc.jpeg",
  crToucan: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/costa-rica-toucan_a70ad74a.mp4",
  crSpa: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/costa-rica-spa-springs_89d85927.mp4",
};

// ─── Types ────────────────────────────────────────────────────
export interface Excursion {
  id: string;
  name: string;
  subtitle: string;
  duration: string;
  difficulty: string;
  price?: string;
  description: string;
  highlights: string[];
  whatToBring?: string;
  image?: string;
  video?: string;
  videoDesktop?: string;
  videoMobile?: string;
  verticalVideo?: string;
  gallery?: string[];
  detailSquarePhoto?: string;
  detailVerticalPhoto?: string;
  featured?: boolean;
  placeholder?: boolean;
  blogUrl?: string;
  blogTitle?: string;
  category: string;
  section?: "explore-nayara" | "explore-arenal";
  altitude?: string;
  distance?: string;
  acclimatization?: string;
  suggestedTime?: string;
}

export interface Treatment {
  id: string;
  name: string;
  localName?: string;
  element?: string;
  duration: string;
  price: string;
  description: string;
  category: string;
}

export interface BlogLink {
  title: string;
  url: string;
}

export interface PropertyTheme {
  accent: string;
  accentLight: string;
  heroGradient: string;
  sectionLabel: string;
  spaHeadline: string;
  spaSubheadline: string;
  spaDescription: string;
  spaPolicies: string;
}

export interface Property {
  id: string;
  name: string;
  shortName: string;
  location: string;
  country: string;
  tagline: string;
  heroSubtitle: string;
  heroVideoDesktop?: string;
  heroVideoMobile?: string;
  heroPoster?: string;
  website: string;
  email: string;
  phone: string;
  excursions: Excursion[];
  treatments: Treatment[];
  blogLinks: BlogLink[];
  excursionCategories: { id: string; label: string }[];
  spaCategories: { id: string; label: string }[];
  theme: PropertyTheme;
}

// ─── ALTO ATACAMA ─────────────────────────────────────────────
const altoAtacamaExcursions: Excursion[] = [
  {
    id: "valley-of-the-moon",
    name: "Valley of the Moon",
    subtitle: "Sunset among lunar formations",
    duration: "Half day",
    altitude: "2,550 m",
    difficulty: "Easy",
    distance: "5 km + 17 km drive",
    acclimatization: "None",
    description: "Walk through the iconic lunar landscape of the Cordillera de la Sal. Watch the sunset paint the salt formations in shades of gold and crimson as the Licancabur volcano stands sentinel on the horizon.",
    highlights: ["Salt caverns and crystalline formations", "Sunset over the Licancabur volcano", "Otherworldly rock amphitheaters"],
    image: CDN.atacamaDesert,
    blogUrl: "https://blog.nayararesorts.com/mars-atacama-final-frontier-of-travel",
    blogTitle: "Why the Atacama Desert Is Mars on Earth",
    category: "landscape",
  },
  {
    id: "el-tatio-geysers",
    name: "El Tatio Geysers",
    subtitle: "Dawn eruptions at 4,320 meters",
    duration: "Half day (depart 4:30 AM)",
    altitude: "4,320 m",
    difficulty: "Easy\u2013Medium",
    distance: "3 km + 95 km drive",
    acclimatization: "2 days",
    description: "Rise before dawn to witness the third-largest geyser field on Earth. At over 4,300 meters, columns of steam erupt against the pre-dawn sky as the sun breaks over the Andes. The thermal pools offer a surreal morning swim at altitude.",
    highlights: ["80+ active geysers at sunrise", "Natural thermal pool bathing", "Andean wildlife: viscachas and vicu\u00f1as"],
    placeholder: true,
    category: "adventure",
  },
  {
    id: "stargazing",
    name: "Andean Astronomy",
    subtitle: "The world\u2019s clearest skies",
    duration: "Evening (2 hours)",
    altitude: "2,440 m",
    difficulty: "Easy",
    acclimatization: "None",
    description: "The Atacama offers the clearest skies on the planet \u2014 the same reason ALMA and international observatories chose this desert. From our private on-site observatory, explore the southern constellations, nebulae, and planets through a powerful telescope guided by expert astronomers.",
    highlights: ["Private on-site observatory", "Eight swivel chairs for comfortable viewing", "Atacame\u00f1o cosmovision storytelling"],
    placeholder: true,
    blogUrl: "https://blog.nayararesorts.com/best-stargazing-resort-atacama-desert",
    blogTitle: "Stargazing in the Atacama: The World\u2019s Clearest Skies",
    category: "culture",
  },
  {
    id: "salt-flat-lagoons",
    name: "Atacama Salt Flat & Lagoons",
    subtitle: "Flamingos, salt, and infinite horizons",
    duration: "Half day",
    altitude: "2,300 m",
    difficulty: "Easy",
    acclimatization: "None",
    description: "Explore the vast Salar de Atacama \u2014 3,000 km\u00b2 of crystallized salt \u2014 and the jewel-toned lagoons where three species of flamingos feed in the mineral-rich waters. Chaxa Lagoon offers reflections so perfect the sky and earth merge.",
    highlights: ["Chaxa Lagoon flamingo observation", "Salar de Atacama salt formations", "Toconao village and bell tower"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-salt-flats-flamingos_0ee14564.jpg",
    blogUrl: "https://blog.nayararesorts.com/wildlife-conservation-in-chiles-atacama-desert-and-easter-island",
    blogTitle: "Wildlife Conservation in the Atacama Desert",
    category: "landscape",
  },
  {
    id: "rainbow-valley",
    name: "Rainbow Valley",
    subtitle: "Geological time made visible",
    duration: "Full day",
    altitude: "3,250 m",
    difficulty: "Medium",
    distance: "7.5 km + 115 km drive",
    acclimatization: "None",
    description: "Named for the multicolored layers of its hills and ravines, each formed by millions of years of mineral deposits. A full-day hike through one of the Atacama\u2019s most visually striking landscapes, with lunch included in the field.",
    highlights: ["Mineral-painted hillsides in red, green, yellow, and white", "Local agriculture and herding traditions", "Pukar\u00e1 archaeological viewpoint"],
    placeholder: true,
    category: "adventure",
  },
  {
    id: "miscanti-miniques",
    name: "Miscanti & Mi\u00f1iques Lagoons",
    subtitle: "High-altitude jewels of the altiplano",
    duration: "Full day",
    altitude: "4,200 m",
    difficulty: "Easy\u2013Medium",
    distance: "Long drive + short walks",
    acclimatization: "1 day",
    description: "Journey to the altiplano to discover two of the most pristine high-altitude lagoons in Chile. Framed by volcanic peaks exceeding 5,600 meters, the deep blue waters contrast dramatically with the arid golden grasslands.",
    highlights: ["Twin lagoons at 4,200 m altitude", "Volcanic backdrop of Miscanti and Mi\u00f1iques peaks", "Socaire village and traditional Atacame\u00f1o lunch"],
    placeholder: true,
    category: "landscape",
  },
  {
    id: "mountain-biking",
    name: "Mountain Biking",
    subtitle: "Through Devil\u2019s Throat and beyond",
    duration: "Half day",
    altitude: "2,500 m",
    difficulty: "Medium\u2013Hard",
    distance: "14 km",
    acclimatization: "None",
    description: "Ride through the dramatic terrain of the Cordillera de la Sal on mountain bikes. The route passes through Devil\u2019s Throat \u2014 a narrow canyon carved by ancient rivers \u2014 and offers panoramic views of the salt range and distant volcanoes.",
    highlights: ["Devil\u2019s Throat canyon passage", "Cordillera de la Sal panoramas", "Downhill through salt formations"],
    placeholder: true,
    category: "adventure",
  },
  {
    id: "puritama-hot-springs",
    name: "Puritama Hot Springs",
    subtitle: "Thermal waters in a hidden canyon",
    duration: "Half day",
    altitude: "3,500 m",
    difficulty: "Easy",
    acclimatization: "None",
    description: "Hidden in a narrow canyon, the Puritama Hot Springs feature eight natural pools with thermal waters between 28\u00b0C and 31\u00b0C. Rich in calcium, magnesium, sodium, and boron \u2014 revitalizing for body and mind.",
    highlights: ["Eight natural thermal pools", "Mineral-rich healing waters", "Canyon setting with native vegetation"],
    placeholder: true,
    category: "wellness",
  },
];

const altoAtacamaTreatments: Treatment[] = [
  { id: "detox", name: "Detox Experience", element: "water", duration: "90 min", price: "$195,000 CLP", description: "Water circuit with steam and dry sauna, Scottish showers, coffee exfoliation, and full-body hydration. A complete reset for body and mind.", category: "exclusive" },
  { id: "peace-escape", name: "Peace Escape", element: "air", duration: "120 min", price: "$225,000 CLP", description: "Sound therapy, aromatic touch, pindas massage with herbal compresses, and an outdoor mineral bath. The most immersive wellness journey we offer.", category: "exclusive" },
  { id: "unforgettable-ritual", name: "Unforgettable Ritual", element: "fire", duration: "90 min", price: "$195,000 CLP", description: "Steam sauna, mini facial with rica-rica products, hands-and-feet massage with digitopressure, and hot stones. A ritual that honors the desert\u2019s volcanic energy.", category: "exclusive" },
  { id: "trilogy", name: "Trilogy", element: "water", duration: "80 min", price: "$165,000 CLP", description: "Sound therapy, aromatherapy, and water immersion. Three phases: back and neck, legs and feet, then cranial and facial massage in the jacuzzi.", category: "exclusive" },
  { id: "mineral-bath", name: "Mineral Bath", element: "water", duration: "60 min", price: "$150,000 CLP", description: "Heated mineral waters (37\u201338\u00b0C) from underground aquifers in outdoor pools overlooking the Catarpe Valley. Includes 15-minute cranial massage, sound therapy, flavored water, and seasonal fruit.", category: "exclusive" },
  { id: "deep-tissue", name: "Deep Tissue Massage", localName: "Ckara", element: "earth", duration: "60\u201380 min", price: "From $110,000 CLP", description: "A firm, deep massage targeting muscle tension and knots. Ideal after a day of hiking at altitude.", category: "massage" },
  { id: "relaxing-massage", name: "Relaxing Massage", localName: "Sema", element: "air", duration: "60\u201380 min", price: "From $95,000 CLP", description: "Gentle, flowing strokes to release stress and promote deep relaxation. Customized to each guest\u2019s needs.", category: "massage" },
  { id: "hot-stones", name: "Hot Stones Massage", localName: "Turi", element: "fire", duration: "80 min", price: "$140,000 CLP", description: "Volcanic basalt stones heated and placed on key energy points, combined with deep massage techniques. The warmth of the desert, channeled.", category: "massage" },
  { id: "lymphatic", name: "Lymphatic Drainage", localName: "Luckamatur", element: "water", duration: "60\u201380 min", price: "From $95,000 CLP", description: "A gentle, rhythmic technique following the natural flow of the lymphatic system. Ideal for reducing inflammation and promoting detoxification.", category: "massage" },
  { id: "altiplano-renewal", name: "Altiplano Renewal", localName: "Yotti", element: "earth", duration: "80 min", price: "$120,000 CLP", description: "Full-body treatment using mineral-rich Altiplano clay combined with honey. Antioxidant, antiseptic, hydrating \u2014 perfect for dry or sensitive skin in the desert climate.", category: "earth" },
  { id: "coca-exfoliation", name: "Coca Exfoliation", localName: "Paluntur", element: "earth", duration: "80 min", price: "$120,000 CLP", description: "Body scrub using coca leaves, raw sugar, and almond oil for deep cleansing and hydration. An ancient Andean ingredient in a modern ritual.", category: "earth" },
  { id: "coffee-exfoliation", name: "Coffee Exfoliation", element: "earth", duration: "80 min", price: "$145,000 CLP", description: "Ground coffee with detoxifying properties that reduce fluid retention and eliminate toxins. Includes coffee-infused oil hydration and a relaxing massage.", category: "earth" },
  { id: "yoga-sono-meditation", name: "Yoga, Sonotherapy & Meditation", element: "air", duration: "75 min", price: "$95,000 CLP", description: "Begin with a yoga class, followed by sound therapy using vibrational instruments, and close with guided meditation.", category: "wellbeing" },
];

// ─── COSTA RICA (shared by Tented Camp, Gardens, Springs) ─────
// Split into two sections: Explore Nayara (on-property) and Explore Arenal (off-property)

const exploreNayaraExperiences: Excursion[] = [
  // ── Nature & Exploration (on-property) ──

  // ── Culinary (on-property) ──
  {
    id: "cooking-class",
    name: "Cooking Class",
    subtitle: "Costa Rican flavors, hands-on",
    duration: "2\u20133 hours",
    difficulty: "Easy (all ages)",
    description: "Learn to prepare authentic Costa Rican dishes alongside our chefs using fresh, locally sourced ingredients from the Arenal region. A hands-on culinary experience that connects you to the flavors and traditions of Pura Vida.",
    highlights: ["Hands-on preparation with our chefs", "Locally sourced ingredients", "Take home recipes and techniques"],
    featured: true,
    placeholder: true,
    category: "culinary",
    section: "explore-nayara",
  },
  {
    id: "chocolate-class",
    name: "Chocolate Class",
    subtitle: "From cacao pod to artisan chocolate",
    duration: "2 hours",
    difficulty: "Easy (all ages)",
    description: "Discover the art of chocolate making from raw cacao to finished bar. Learn about Costa Rica\u2019s cacao heritage, roast and grind your own beans, and craft artisan chocolate to take with you. A sensory journey through one of the rainforest\u2019s most treasured crops.",
    highlights: ["Bean-to-bar chocolate making", "Costa Rican cacao heritage", "Take home your own creations"],
    featured: true,
    placeholder: true,
    category: "culinary",
    section: "explore-nayara",
  },
  // ── Spa (on-property) ── (treatments handled separately)
  // ── Wellness (on-property) ──
  {
    id: "yoga-session",
    name: "Instructor-Led Yoga",
    subtitle: "In a pavilion perched above the rainforest",
    duration: "60 min",
    difficulty: "All levels",
    description: "Instructor-led yoga tailored to your level and goals, in a pavilion perched above the Arenal rainforest. Whether sunrise vinyasa or restorative evening flow, our instructors create a practice that connects you to the energy of this place.",
    highlights: ["Personalized to your level", "Rainforest setting", "Sunrise or sunset sessions available"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/yoga-photo_3b789b60.jpg",
    featured: true,
    placeholder: false,
    category: "wellness",
    section: "explore-nayara",
  },
  {
    id: "hot-springs",
    name: "Las Termas Hot Springs",
    subtitle: "Volcanic warmth beneath the canopy",
    duration: "Open access",
    difficulty: "Easy",
    description: "Immerse yourself in natural hot springs fed by Arenal\u2019s volcanic activity. Multiple pools at varying temperatures are nestled among tropical gardens, offering a restorative experience that has drawn visitors to this region for generations.",
    highlights: ["Natural volcanic hot springs", "Multiple temperature pools", "Tropical garden setting"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hot-springs-hero_a60a0e92.jpg",
    videoDesktop: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hot-springs-horizontal_2508b725.mp4",
    verticalVideo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hot-springs-vertical_52b2b6ec.mp4",
    featured: true,
    placeholder: false,
    category: "wellness",
    section: "explore-nayara",
    blogUrl: "https://blog.nayararesorts.com/the-history-and-science-of-private-villas-hot-springs-plunge-pools",
    blogTitle: "The History & Science of Hot-Springs Plunge Pools",
  },
];

const exploreArenalExperiences: Excursion[] = [
  // ── Nature & Exploration (off-property) ──
  {
    id: "hanging-bridges",
    name: "Mystic Hanging Bridges",
    subtitle: "Walk through the rainforest canopy",
    duration: "3 hours",
    difficulty: "Easy",
    suggestedTime: "9:30 AM & 2:30 PM",
    description: "Experience the rainforest from ground level to canopy, traversing 10 fixed bridges and 6 hanging bridges. Your naturalist guide points out species unique to each habitat and elevation, including a 60 ft waterfall and volcano views from the highest bridge.",
    highlights: ["16 bridges through primary rainforest", "60 ft hidden waterfall", "Arenal Volcano views from canopy level"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hanging-bridges-photo_a49dba00.jpeg",
    videoDesktop: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hanging-bridges-horizontal_0bf48537.mp4",
    verticalVideo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hanging-bridges-vertical_e6838fa9.mp4",
    gallery: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hanging-bridge-waterfall_7e252516.jpeg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hanging-bridge-canopy-walk_d193a7eb.jpeg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hanging-bridge-group-crossing_20f80676.jpeg",
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hanging-bridge-tall-trees_16c9f46c.jpeg",
    ],
    featured: true,
    placeholder: false,
    category: "nature",
    section: "explore-arenal",
  },
  {
    id: "celeste-river",
    name: "Rio Celeste",
    subtitle: "Costa Rica\u2019s hidden turquoise gem",
    duration: "Full day",
    difficulty: "Moderate",
    suggestedTime: "7:10 AM",
    description: "Discover Tenorio National Park and Rio Celeste. Drive 1.5 hours through dense primary rainforest, past bubbling mud pots and centuries-old guardian trees, to \u201cLos Te\u00f1ideros\u201d \u2014 where two crystal streams merge and turn the river a vivid, electric blue. Visit the stunning azure waterfall pool.",
    highlights: ["Vivid turquoise river caused by mineral convergence", "Bubbling volcanic mud pots", "Primary rainforest with ancient trees"],
    videoDesktop: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/rio-celeste-excursion_6fd6a41c.mp4",
    verticalVideo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/video-00d0-vertical_5ef512b3.mp4",
    featured: true,
    placeholder: false,
    category: "nature",
    section: "explore-arenal",
  },

  {
    id: "safari-penas-blancas",
    name: "Safari Pe\u00f1as Blancas River",
    subtitle: "Drift through the jungle on a raft",
    duration: "Half day",
    difficulty: "Easy (all ages)",
    price: "Adults $105 / Kids $72",
    suggestedTime: "8:00 AM & 1:00 PM",
    description: "Float on a raft down the Pe\u00f1as Blancas River, searching for wildlife along the shores. Your naturalist guide identifies animals and explains the ecosystem. End with a traditional Costa Rican snack.",
    highlights: ["Gentle river float through pristine jungle", "Wildlife spotting from the water", "Traditional snack included"],
    placeholder: true,
    category: "nature",
    section: "explore-arenal",
  },
  // ── Adventure (off-property) ──
  {
    id: "canyoning",
    name: "Canyoning Pure Trek",
    subtitle: "Rappel 350 feet into a rainforest canyon",
    duration: "Half day",
    difficulty: "Moderate\u2013Hard",
    suggestedTime: "7:15 AM & 12:15 PM",
    description: "Five rappels descending 350 feet into a deep canyon. Three waterfalls, one dry rock face, a canyon wall, and the famous \u201cmonkey drop\u201d (rappel + zip line combo). Between rappels, meander through pristine forest spotting monkeys, sloths, and tropical birds. Includes lunch.",
    highlights: ["5 rappels including 3 waterfalls", "The famous \u2018monkey drop\u2019", "Lunch with guides after the adventure"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/canyoneering-photo_d3d8461c.jpg",
    featured: true,
    placeholder: false,
    category: "adventure",
    section: "explore-arenal",
  },
  {
    id: "ziplining",
    name: "Sky Tram & Trek (Ziplining)",
    subtitle: "Fly through the canopy above the volcano",
    duration: "Half day",
    difficulty: "Moderate",
    description: "Ascend by gondola through the rainforest canopy with incredible views of Arenal Volcano and Lake Arenal. Then zip across cables ranging from 650 to 2,500 feet, flying through the treetops with the volcano on one side and the lake on the other.",
    highlights: ["Gondola ascent through rainforest", "Zip lines up to 2,500 feet long", "Dual volcano and lake panoramas"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/zipline-photo_a5470805.jpeg",
    featured: true,
    placeholder: false,
    category: "adventure",
    section: "explore-arenal",
  },
  {
    id: "lava-fields",
    name: "Lava Fields Walk",
    subtitle: "Trek the 1968 eruption zone",
    duration: "3 hours",
    difficulty: "Moderate",
    suggestedTime: "9:30 AM & 2:30 PM",
    description: "Trek over the dried lava fields of the Arenal Volcano. Learn about the history of La Fortuna and the devastating 1968 eruption. Pioneer plant species have fought through rock and ash to rejuvenate the area. On clear days, incredible views of both the volcano and Lake Arenal.",
    highlights: ["Walk on solidified lava flows", "Pioneer vegetation reclaiming volcanic rock", "Dual views of volcano and lake"],
    placeholder: true,
    category: "adventure",
    section: "explore-arenal",
  },
  {
    id: "waterfall-bridges",
    name: "Hanging Bridges + La Fortuna Waterfall",
    subtitle: "Canopy walk meets 230 ft cascade",
    duration: "Full day",
    difficulty: "Moderate",
    suggestedTime: "9:00 AM",
    description: "Combine the Mystic Hanging Bridges canopy trek with La Fortuna Waterfall \u2014 a stunning 230 ft (70m) cascade. Feel the full force of the waterfall, swim in the clear cool waters, then enjoy a traditional Costa Rican lunch.",
    highlights: ["230 ft La Fortuna Waterfall", "Swimming in crystal-clear pools", "Traditional Costa Rican lunch included"],
    placeholder: true,
    category: "adventure",
    section: "explore-arenal",
  },
  {
    id: "kayaking",
    name: "Kayaking at Arenal Lake",
    subtitle: "Paddle Costa Rica\u2019s largest lake",
    duration: "2\u20133 hours",
    difficulty: "Moderate",
    price: "Adults $83",
    suggestedTime: "8:00 AM & 1:00 PM",
    description: "Glide across the mystic waters of Costa Rica\u2019s largest lake with spectacular views of the Arenal Volcano. Paddle calm waters, spot fishing birds, iguanas, and tropical birds. Stop for fresh local fruit after 1.5 hours of paddling.",
    highlights: ["Arenal Volcano views from the water", "Calm waters suitable for all levels", "Fresh fruit snack break"],
    placeholder: true,
    category: "adventure",
    section: "explore-arenal",
  },
  {
    id: "rafting",
    name: "Rafting at Sarapiqu\u00ed River",
    subtitle: "Class II to IV rapids through the jungle",
    duration: "Full day",
    difficulty: "Moderate\u2013Hard",
    price: "Class II: Adults $105 / Class III-IV: $119",
    suggestedTime: "7:45 AM (Class III-IV) / 8:20 AM (Class II-III)",
    description: "Navigate the Sarapiqu\u00ed River through lush jungle scenery. Choose your intensity \u2014 from gentle Class II rapids suitable for ages 8+ to adrenaline-pumping Class IV for experienced rafters. All equipment and safety briefing provided.",
    highlights: ["Multiple rapid class options", "Pristine jungle river setting", "Professional guides and equipment"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/rafting-photo_89375559.jpeg",
    placeholder: false,
    category: "adventure",
    section: "explore-arenal",
  },
  {
    id: "horseback-riding",
    name: "Horseback Riding",
    subtitle: "Ride beneath the volcano",
    duration: "2–3 hours",
    difficulty: "Easy–Moderate",
    description: "Saddle up and ride through the lush countryside surrounding Arenal Volcano. Traverse open pastures, forested trails, and river crossings with panoramic views of the volcano. Suitable for beginners and experienced riders alike.",
    highlights: ["Panoramic Arenal Volcano views", "River crossings and forest trails", "Suitable for all experience levels"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/horseback-photo_68409b82.jpeg",
    featured: true,
    placeholder: false,
    category: "adventure",
    section: "explore-arenal",
  },
  // ── Culture (off-property) ──
  {
    id: "chocolate-coffee",
    name: "Chocolate & Coffee Tour",
    subtitle: "From seed to cup, from bean to bar",
    duration: "2.5 hours",
    difficulty: "Easy (all ages)",
    suggestedTime: "9:30 AM & 1:30 PM",
    description: "An immersive cultural experience exploring Costa Rican coffee and chocolate production from seed to final product. Learn about traditions, taste fresh products, and understand the cultural impact of these crops through the years.",
    highlights: ["Hands-on chocolate making", "Fresh coffee tasting", "Costa Rican cultural traditions"],
    placeholder: true,
    category: "culture",
    section: "explore-arenal",
  },
  {
    id: "organic-farm",
    name: "Organic Farm Visit",
    subtitle: "Costa Rican heritage through farming",
    duration: "Half day",
    difficulty: "Easy (all ages)",
    suggestedTime: "1:30 PM",
    description: "Visit an organic farm near La Fortuna. Learn about Costa Rican farming history, sustainable agriculture, and biodiversity preservation. Experience the traditional sugar cane process and taste genuine local snacks with tortillas, plantain, cheese, empanadas, and Costa Rican coffee.",
    highlights: ["Traditional sugar cane processing", "Local snacks and Costa Rican coffee", "Sustainable agriculture practices"],
    placeholder: true,
    category: "culture",
    section: "explore-arenal",
  },
];

// Combined for backward compat
const costaRicaExcursions: Excursion[] = [...exploreNayaraExperiences, ...exploreArenalExperiences];

const costaRicaTreatments: Treatment[] = [
  // Massages
  { id: "cr-unwind", name: "Nayara Unwind & Relax", duration: "60 | 90 min", price: "$180 | $230", description: "A signature relaxation massage designed to release tension and restore calm. Customized pressure and technique for each guest.", category: "massage" },
  { id: "cr-deep-tissue", name: "Deep Tissue", duration: "60 | 90 min", price: "$220 | $260", description: "An intense massage targeting deep muscle layers to release chronic tension and knots.", category: "massage" },
  { id: "cr-aromatherapy", name: "Restorative Aromatherapy", duration: "60 | 90 min", price: "$210 | $245", description: "Essential oils combined with flowing massage techniques to enhance relaxation and emotional balance.", category: "massage" },
  { id: "cr-pindas", name: "Ayurvedic Herbal Pindas", duration: "60 min", price: "$235", description: "Warm herbal pouches applied to key energy points, combining Ayurvedic tradition with deep relaxation.", category: "massage" },
  { id: "cr-neck-back", name: "Stress Relieving Neck & Back", duration: "45 min", price: "$150", description: "Focused treatment targeting the neck, shoulders, and back \u2014 where stress accumulates most.", category: "massage" },
  { id: "cr-hot-stones", name: "Costa Rican Hot Stones", duration: "75 min", price: "$250", description: "Warm volcanic stones placed on energy points combined with massage techniques. The heat penetrates deep into muscles for profound relaxation.", category: "massage" },
  { id: "cr-volcanic-mud", name: "Revitalizing Volcanic Mud", duration: "60 min", price: "$210", description: "A massage incorporating mineral-rich volcanic mud from the Arenal region. Detoxifying and revitalizing.", category: "massage" },
  { id: "cr-personalized", name: "Personalized Massage", duration: "75 min", price: "$265", description: "A fully customized massage experience tailored to your specific needs, preferences, and areas of concern.", category: "massage" },
  { id: "cr-pregnancy", name: "Pregnancy Massage", duration: "60 min", price: "$205", description: "A gentle, nurturing massage designed specifically for expectant mothers. Safe, soothing, and supportive.", category: "massage" },
  // Body Treatments
  { id: "cr-coffee-wrap", name: "Organic Coffee Detoxifying Wrap", duration: "50 min", price: "$160", description: "A detoxifying body wrap using organic Costa Rican coffee. Stimulates circulation and eliminates toxins.", category: "body" },
  { id: "cr-volcanic-wrap", name: "Volcanic Mineral Wrap", duration: "50 min", price: "$160", description: "Mineral-rich volcanic wrap that nourishes and revitalizes the skin.", category: "body" },
  { id: "cr-chocolate-wrap", name: "Soothing Organic Chocolate Wrap", duration: "50 min", price: "$160", description: "An indulgent chocolate body wrap that hydrates and soothes the skin with antioxidant-rich cacao.", category: "body" },
  { id: "cr-honey-milk", name: "Nourishing Honey & Milk Wrap", duration: "60 min", price: "$170", description: "A luxurious wrap combining honey and milk for deep nourishment and silky-soft skin.", category: "body" },
  { id: "cr-salt-scrub", name: "Sea Salt & Honey Scrub", duration: "50 min", price: "$135", description: "An invigorating exfoliation using sea salt and honey to reveal smooth, glowing skin.", category: "body" },
  { id: "cr-coffee-scrub", name: "Organic Costa Rican Coffee Scrub", duration: "50 min", price: "$135", description: "Exfoliation using locally sourced organic coffee grounds. Energizing and detoxifying.", category: "body" },
  // Facials
  { id: "cr-rejuvenating-facial", name: "Rejuvenating Facial", duration: "75 min", price: "$215", description: "A comprehensive facial treatment designed to rejuvenate and restore youthful radiance.", category: "facial" },
  { id: "cr-soothing-facial", name: "Soothing & Relaxing Facial", duration: "60 min", price: "$180", description: "A calming facial that soothes sensitive skin while promoting deep relaxation.", category: "facial" },
  { id: "cr-hyaluronic", name: "Hydra Hyaluronic Acid Facial", duration: "75 min", price: "$235", description: "Advanced hydration facial using hyaluronic acid for plump, dewy, youthful skin.", category: "facial" },
  // Couples
  { id: "cr-unforgettable", name: "Unforgettable Nayara", duration: "2 hrs 15 min", price: "$650 (couple)", description: "Our signature couples experience combining multiple treatments for an unforgettable shared wellness journey.", category: "couples" },
  { id: "cr-rainforest-escape", name: "Escape to the Rainforest", duration: "2 hrs 15 min", price: "$680 (couple)", description: "A couples retreat inspired by the surrounding rainforest. Exfoliation, wraps, and massage in a private treatment room.", category: "couples" },
  { id: "cr-romantic-massage", name: "Romantic Massage for Two", duration: "60 min", price: "$420 (couple)", description: "Side-by-side massage for couples in a private treatment suite surrounded by tropical gardens.", category: "couples" },
  { id: "cr-sacred-journey", name: "A Sacred Journey Together", duration: "2 hrs 45 min", price: "$820 (couple)", description: "The ultimate couples wellness experience. A sacred, multi-phase journey of connection, relaxation, and renewal.", category: "couples" },
  // Wellness Therapies
  { id: "cr-inner-renewal", name: "Inner Renewal Therapy", duration: "80 min", price: "$220", description: "A holistic therapy focused on inner well-being. Combines bodywork with mindfulness techniques for deep renewal.", category: "wellness" },
  { id: "cr-cacao-journey", name: "Cacao Journey: Heart Opening Meditation", duration: "60 min", price: "$220", description: "A ceremonial cacao experience combined with guided meditation to open the heart and deepen awareness.", category: "wellness" },
  { id: "cr-mindfulness", name: "Mindfulness Meditation", duration: "45 min", price: "$130", description: "Guided mindfulness meditation in the tranquility of the rainforest setting.", category: "wellness" },
  { id: "cr-yoga", name: "Instructor-Led Yoga", duration: "60 min", price: "$145", description: "Instructor-led yoga tailored to your level and goals, in a pavilion perched above the Arenal rainforest.", category: "wellness" },
  { id: "cr-sound-therapy", name: "Sound Therapy", duration: "60 min", price: "$190", description: "Vibrational healing using singing bowls, chimes, and other instruments to restore energetic balance.", category: "wellness" },
  { id: "cr-energy-healing", name: "Energy Healing", duration: "60 min", price: "$180", description: "A gentle, non-invasive therapy that works with the body\u2019s energy field to promote healing and balance.", category: "wellness" },
];

// ─── HANGAROA (Easter Island) ─────────────────────────────────
const hangaroaExcursions: Excursion[] = [
  {
    id: "ahu-tongariki",
    name: "Ahu Tongariki Sunrise",
    subtitle: "15 Moai against the dawn sky",
    duration: "Half day",
    difficulty: "Easy",
    description: "Witness sunrise at the largest restored Ahu on Easter Island \u2014 15 monolithic Moai silhouetted against the Pacific dawn. Continue to Rano Raraku, the volcanic quarry where nearly 400 Moai remain in various stages of completion, frozen in time on the hillside.",
    highlights: ["15 Moai at sunrise", "Rano Raraku quarry with 400 unfinished Moai", "UNESCO World Heritage Site"],
    placeholder: true,
    category: "culture",
  },
  {
    id: "rano-kau-orongo",
    name: "Rano Kau & Orongo",
    subtitle: "Sacred crater and Birdman village",
    duration: "Half day",
    difficulty: "Moderate",
    description: "Hike to the rim of Rano Kau, a massive volcanic crater with a freshwater lake inside. Visit Orongo, the ceremonial village where the annual Birdman competition took place \u2014 contestants would climb down 300m cliffs and swim to offshore islets to retrieve the first egg of the sooty tern.",
    highlights: ["Rano Kau volcanic crater lake", "Orongo ceremonial village", "Birdman petroglyphs and history"],
    placeholder: true,
    category: "culture",
  },
  {
    id: "anakena-beach",
    name: "Anakena Beach",
    subtitle: "White sand, palm trees, and Moai",
    duration: "Half day",
    difficulty: "Easy",
    description: "Visit the legendary white-sand beach where Hotu Matu\u2019a, the first Polynesian king, is said to have landed. Ahu Nau Nau features beautifully restored Moai with red topknots, set against coconut palms and turquoise waters.",
    highlights: ["White coral sand beach", "Ahu Nau Nau with red topknot Moai", "Swimming and relaxation"],
    placeholder: true,
    category: "culture",
  },
  {
    id: "scuba-diving-ei",
    name: "Scuba Diving",
    subtitle: "Crystal-clear Pacific waters",
    duration: "Half day",
    difficulty: "Moderate",
    description: "Dive into some of the clearest waters in the Pacific. Easter Island\u2019s volcanic underwater landscape features dramatic drop-offs, caves, and coral formations. Visibility often exceeds 60 meters. Encounter sea turtles, moray eels, and endemic fish species found nowhere else on Earth.",
    highlights: ["60+ meter visibility", "Underwater volcanic formations", "Endemic marine species"],
    placeholder: true,
    category: "adventure",
  },
  {
    id: "horseback-riding-ei",
    name: "Horseback Riding",
    subtitle: "Gallop across the island\u2019s wild coast",
    duration: "2\u20133 hours",
    difficulty: "Easy\u2013Moderate",
    description: "Explore Easter Island on horseback, riding along the wild coastline and through rolling green hills dotted with Moai platforms. Horses have been part of Rapa Nui culture since the 18th century.",
    highlights: ["Coastal trail with ocean views", "Pass by remote Ahu platforms", "Traditional Rapa Nui horsemanship"],
    placeholder: true,
    category: "adventure",
  },
  {
    id: "moai-carving",
    name: "Moai Carving Workshop",
    subtitle: "Sculpt your own miniature Moai",
    duration: "2 hours",
    difficulty: "Easy",
    description: "Learn the ancient art of Moai carving from a local Rapa Nui sculptor. Using traditional tools and volcanic stone, create your own miniature Moai to take home \u2014 a deeply personal connection to the island\u2019s artistic heritage.",
    highlights: ["Hands-on sculpting with local artisan", "Traditional tools and volcanic stone", "Take your creation home"],
    placeholder: true,
    category: "culture",
  },
  {
    id: "takona-body-painting",
    name: "Takona Body Painting",
    subtitle: "Ancient Rapa Nui body art",
    duration: "1.5 hours",
    difficulty: "Easy",
    description: "Experience Takona, the traditional Rapa Nui art of body painting using natural pigments from the island. Each design carries meaning \u2014 clan identity, spiritual protection, or celebration. A local artist guides you through the symbolism and application.",
    highlights: ["Natural pigments from the island", "Symbolic designs with cultural meaning", "Guided by local Rapa Nui artist"],
    placeholder: true,
    category: "culture",
  },
  {
    id: "stargazing-ei",
    name: "Stargazing",
    subtitle: "Polynesian navigation by the stars",
    duration: "Evening (2 hours)",
    difficulty: "Easy",
    description: "Easter Island\u2019s extreme isolation means virtually zero light pollution. Observe the southern sky through telescopes while learning about Polynesian celestial navigation \u2014 the same star knowledge that guided the first settlers across thousands of miles of open ocean.",
    highlights: ["Zero light pollution", "Polynesian celestial navigation stories", "Southern hemisphere constellations"],
    placeholder: true,
    category: "culture",
  },
  {
    id: "surfing-ei",
    name: "Surfing",
    subtitle: "Ride Pacific swells at the edge of the world",
    duration: "2\u20133 hours",
    difficulty: "Moderate",
    description: "Surf the powerful Pacific swells that reach Easter Island uninterrupted across thousands of miles of open ocean. Several breaks around the island cater to different skill levels, from beginner-friendly reef breaks to powerful point breaks.",
    highlights: ["Uncrowded world-class waves", "Multiple breaks for all levels", "Instruction available for beginners"],
    placeholder: true,
    category: "adventure",
  },
  {
    id: "cooking-class-ei",
    name: "Rapa Nui Cooking Class",
    subtitle: "Traditional Polynesian cuisine",
    duration: "3 hours",
    difficulty: "Easy",
    description: "Learn to prepare traditional Rapa Nui dishes using local ingredients \u2014 fresh tuna, sweet potatoes, taro, and tropical fruits. Discover the Polynesian cooking techniques that have sustained the island\u2019s culture for centuries.",
    highlights: ["Traditional Polynesian recipes", "Fresh local ingredients", "Cultural storytelling through food"],
    placeholder: true,
    category: "culture",
  },
];

const hangaroaTreatments: Treatment[] = [
  { id: "h-swedish", name: "Swedish Massage", localName: "Tauromi Haka Ora", duration: "60 | 80 min", price: "$80,000 | $110,000 CLP", description: "A classic Swedish massage for full-body relaxation and improved circulation.", category: "massage" },
  { id: "h-deep-tissue", name: "Deep Tissue", localName: "Tauromi Hati Hati", duration: "60 | 80 min", price: "$90,000 | $130,000 CLP", description: "Intense deep tissue work targeting chronic muscle tension and adhesions.", category: "massage" },
  { id: "h-hot-stones", name: "Hot Stone Massage", localName: "Tauromi Hai Maea Vera", duration: "70 min", price: "$100,000 CLP", description: "Warm volcanic stones combined with massage to release deep tension and promote relaxation.", category: "massage" },
  { id: "h-bamboo", name: "Bambootherapy", localName: "Tauromi Hai \u2019Ohe", duration: "60 min", price: "$90,000 CLP", description: "Massage using heated bamboo canes for deep pressure and muscle release.", category: "massage" },
  { id: "h-reflexology", name: "Reflexology", localName: "Tauromi Ngatu Va\u2019e", duration: "40 min", price: "$80,000 CLP", description: "Pressure point therapy on the feet to restore balance and promote healing throughout the body.", category: "massage" },
  { id: "h-integral", name: "Integral Massage", localName: "Tauromi To\u2019o Me\u2019e Rake Rake", duration: "80 min", price: "$140,000 CLP", description: "A comprehensive full-body massage combining multiple techniques for total restoration.", category: "massage" },
  { id: "h-aromatherapy", name: "Aromatherapy", localName: "Tauromi Hai Mori Tiare", duration: "60 min", price: "$100,000 CLP", description: "Essential oil massage using aromatic island botanicals for deep relaxation and emotional balance.", category: "massage" },
  { id: "h-back-stones", name: "Stone Back, Neck & Shoulders", localName: "Tauromi Te Tua\u2019ivi", duration: "40 min", price: "$80,000 CLP", description: "Focused hot stone treatment for the back, neck, and shoulders \u2014 where tension accumulates most.", category: "massage" },
  { id: "h-tired-legs", name: "Tired Legs Massage", duration: "40 min", price: "$80,000 CLP", description: "Targeted massage for tired, heavy legs. Perfect after a day of hiking across the island.", category: "massage" },
  { id: "h-facial", name: "Express Facial", localName: "Haka Maitaki Aringa Horoa", duration: "30 min", price: "$65,000 CLP", description: "A quick but effective facial cleansing and hydration treatment.", category: "facial" },
  { id: "h-coconut-scrub", name: "Coconut Body Scrub", localName: "He Oro", duration: "45 min", price: "$90,000 CLP", description: "Full-body exfoliation using coconut for smooth, nourished skin.", category: "body" },
  { id: "h-coffee-scrub", name: "Coffee Body Scrub", duration: "45 min", price: "$90,000 CLP", description: "Energizing coffee exfoliation that stimulates circulation and detoxifies.", category: "body" },
  { id: "h-chocolate-wrap", name: "Chocolate Wrap", duration: "45 min", price: "$90,000 CLP", description: "Indulgent chocolate body wrap with exfoliation and deep hydration.", category: "body" },
  { id: "h-mud-wrap", name: "Mud Wrap (Fango)", duration: "45 min", price: "$80,000 CLP", description: "Detoxifying mud wrap using mineral-rich volcanic fango.", category: "body" },
  { id: "h-combo", name: "Scrub & Wrap Combination", localName: "Oro Oro Te Hakari", duration: "80 min", price: "$120,000 CLP", description: "A luxurious combination of full-body exfoliation followed by a nourishing body wrap.", category: "body" },
  { id: "h-scalp", name: "Scalp Massage", localName: "Tauromi Puoko", duration: "20 min", price: "$50,000 CLP", description: "A soothing cranial massage to release tension and promote relaxation. Perfect as an add-on.", category: "wellness" },
  { id: "h-hydrotherapy", name: "Hydrotherapy", localName: "Ra\u2019au Hai Vai", duration: "60 min", price: "$60,000 CLP", description: "Water-based therapy for relaxation, circulation, and muscle recovery.", category: "wellness" },
  { id: "h-sauna", name: "Sauna", localName: "Hare Ma\u2019ahu Ora", duration: "40 min", price: "$55,000 CLP (free for guests with reservation)", description: "Traditional dry sauna session for detoxification and deep relaxation.", category: "wellness" },
];

// ─── BOCAS DEL TORO (Panama) ──────────────────────────────────
const bocasExcursions: Excursion[] = [
  {
    id: "dolphin-bay-sunset",
    name: "Dolphin Bay Sunset Cruise",
    subtitle: "Golden hour on the Caribbean",
    duration: "3 hours",
    difficulty: "Easy",
    price: "$120 per person + boat transfer",
    description: "Cruise through Dolphin Bay as the Caribbean sun sets. Spot bottlenose dolphins playing in the warm waters while sipping cocktails. The golden light transforms the mangrove-lined channels into a magical waterway.",
    highlights: ["Bottlenose dolphin sightings", "Caribbean sunset from the water", "Cocktails and snacks aboard"],
    placeholder: true,
    category: "water",
  },
  {
    id: "chocolate-tour-bocas",
    name: "Organic Chocolate Tour",
    subtitle: "From cacao pod to artisanal bar",
    duration: "3 hours",
    difficulty: "Easy",
    price: "$90 per person + boat transfer",
    description: "Visit an organic cacao farm in the lush Bocas del Toro interior. Learn the full chocolate-making process from pod to bar, taste fresh cacao fruit, and make your own chocolate. A sensory journey through Panama\u2019s cacao heritage.",
    highlights: ["Hands-on chocolate making", "Organic cacao farm tour", "Taste fresh cacao fruit straight from the pod"],
    placeholder: true,
    category: "culture",
  },
  {
    id: "monkey-island",
    name: "Monkey Island & Sloth Sanctuary",
    subtitle: "Face-to-face with Caribbean wildlife",
    duration: "Half day",
    difficulty: "Easy",
    price: "$90 per person + boat transfer",
    description: "Visit the famous Monkey Island where white-faced capuchins swing through the trees and approach visitors. Continue to a sloth sanctuary to observe these gentle creatures up close. A family-friendly wildlife adventure.",
    highlights: ["White-faced capuchin monkeys", "Sloth sanctuary visit", "Boat ride through mangrove channels"],
    placeholder: true,
    category: "nature",
  },
  {
    id: "red-frog-beach",
    name: "Red Frog Beach & Zapatilla Cays",
    subtitle: "Pristine Caribbean island hopping",
    duration: "Full day",
    difficulty: "Easy",
    price: "$120 per person + boat transfer",
    description: "Island-hop to Red Frog Beach \u2014 named for the tiny red poison dart frogs that inhabit the forest behind the sand. Continue to the Zapatilla Cays, uninhabited islands with crystal-clear snorkeling and powdery white sand.",
    highlights: ["Red poison dart frog spotting", "Snorkeling at Zapatilla Cays", "Pristine uninhabited islands"],
    placeholder: true,
    category: "nature",
  },
  {
    id: "starfish-beach",
    name: "Starfish Beach",
    subtitle: "Turquoise shallows filled with starfish",
    duration: "Half day",
    difficulty: "Easy",
    price: "$90 per person + boat transfer",
    description: "Wade into the warm, shallow turquoise waters of Starfish Beach where dozens of orange and red starfish dot the sandy bottom. One of the most photographed spots in Bocas del Toro.",
    highlights: ["Dozens of starfish in shallow water", "Crystal-clear turquoise waters", "Relaxed beach atmosphere"],
    placeholder: true,
    category: "nature",
  },
  {
    id: "bioluminescence",
    name: "Bioluminescence Night Tour",
    subtitle: "The ocean glows in the dark",
    duration: "Evening (2 hours)",
    difficulty: "Easy",
    price: "$90 per person + boat transfer",
    description: "After dark, boat to a secluded lagoon where bioluminescent plankton light up the water with every movement. Swim in the glowing water or trail your hand from the boat to create streaks of blue-green light. A truly magical experience.",
    highlights: ["Swim in bioluminescent water", "Blue-green glowing plankton", "Secluded nighttime lagoon"],
    placeholder: true,
    category: "adventure",
  },
  {
    id: "bat-cave",
    name: "Bat Cave & Coral Reef Snorkeling",
    subtitle: "Underground exploration meets underwater world",
    duration: "Half day",
    difficulty: "Moderate",
    price: "$90 per person + boat transfer",
    description: "Explore a sea cave inhabited by fruit bats, then snorkel over vibrant coral reefs teeming with tropical fish. The contrast between the dark cave and the colorful underwater world is unforgettable.",
    highlights: ["Sea cave with fruit bat colony", "Vibrant coral reef snorkeling", "Tropical fish and marine life"],
    placeholder: true,
    category: "adventure",
  },
  {
    id: "scuba-bocas",
    name: "Scuba Diving",
    subtitle: "Caribbean reef systems and shipwrecks",
    duration: "Half day",
    difficulty: "Moderate\u2013Hard",
    price: "From $120 per person",
    description: "Dive into Bocas del Toro\u2019s rich Caribbean reef systems. Sites range from shallow coral gardens to deeper walls and even a shipwreck. Encounter nurse sharks, eagle rays, seahorses, and vibrant reef fish.",
    highlights: ["Multiple dive sites for all levels", "Nurse sharks and eagle rays", "Shipwreck exploration"],
    placeholder: true,
    category: "adventure",
  },
  {
    id: "catamaran-bocas",
    name: "Private Catamaran",
    subtitle: "Luxury sailing through the archipelago",
    duration: "Full day or half day",
    difficulty: "Easy",
    price: "From $1,000 (half day) to $1,600 (full day)",
    description: "Sail a luxury 40ft catamaran through the most beautiful spots in Bocas del Toro. Swim, snorkel, surf, fish, spearfish, and paddleboard. Full-day includes champagne breakfast, lunch, snacks, and drinks for up to 4 guests.",
    highlights: ["40ft luxury catamaran", "Champagne breakfast and gourmet lunch", "Multiple water activities included"],
    placeholder: true,
    category: "water",
  },
  {
    id: "fishing-bocas",
    name: "Sport Fishing",
    subtitle: "Reel in the Caribbean\u2019s best catch",
    duration: "Half day (4 hrs) or Full day (8 hrs)",
    difficulty: "Easy\u2013Moderate",
    price: "Half day $700 / Full day $1,000",
    description: "Head to some of the region\u2019s most abundant fishing grounds. Whether inshore or deep-sea, experience the excitement of reeling in your catch amid breathtaking tropical scenery.",
    highlights: ["Inshore and deep-sea options", "Abundant Caribbean fishing grounds", "Professional captain and equipment"],
    placeholder: true,
    category: "water",
  },
  {
    id: "ebike-bocas",
    name: "E-Bike Island Tour",
    subtitle: "Explore Isla Col\u00f3n on two wheels",
    duration: "3 hours",
    difficulty: "Easy",
    price: "$70 per person",
    description: "Ride electric bikes across Isla Col\u00f3n, exploring hidden beaches, local communities, and lush tropical landscapes. The e-bike assist makes it effortless even in the Caribbean heat.",
    highlights: ["Hidden beaches and local villages", "Effortless electric-assist riding", "Tropical landscape exploration"],
    placeholder: true,
    category: "adventure",
  },
  {
    id: "yoga-bocas",
    name: "Private Yoga",
    subtitle: "Your practice, your setting",
    duration: "1 hour",
    difficulty: "Easy",
    price: "$70 per person",
    description: "Choose your perfect setting \u2014 your villa deck, the private gym, or the beach \u2014 for a personalized yoga session. Share your preferences with the Guest Experience team and they\u2019ll curate your perfect moment of tranquility.",
    highlights: ["Choice of villa, gym, or beach setting", "Personalized to your level", "Private instruction"],
    placeholder: true,
    category: "wellness",
  },
];

const bocasTreatments: Treatment[] = [
  // Massages
  { id: "b-frangipani", name: "Frangipani Welcome", duration: "45 min", price: "$140", description: "A soothing, light-pressure massage to begin your stay in perfect harmony.", category: "massage" },
  { id: "b-deep-tissue", name: "Deep Tissue", duration: "60 | 90 min", price: "$170 | $210", description: "An intense massage that releases muscular and myofascial tension. Recommended for those accustomed to deep pressure techniques.", category: "massage" },
  { id: "b-aromas", name: "Bocas del Toro Aromas", duration: "60 | 90 min", price: "$165 | $200", description: "Aromatherapy that enhances relaxation and emotional balance, restoring mind and body harmony.", category: "massage" },
  { id: "b-head-to-toe", name: "Head-to-Toe Relaxation", duration: "60 | 90 min", price: "$155 | $198", description: "A fully personalized, medium-pressure massage designed to ease tension, improve circulation, and revitalize your body.", category: "massage" },
  { id: "b-hot-stones", name: "Hot Stone Therapy", duration: "60 | 90 min", price: "$170 | $210", description: "Warm stones and towels soothe muscle tension, improve joint flexibility, and promote deep restorative sleep.", category: "massage" },
  { id: "b-neck-back", name: "Neck & Back Release", duration: "60 min", price: "$155", description: "Focused treatment to relieve tension in the neck, shoulders, and back.", category: "massage" },
  { id: "b-facial-scalp", name: "Facial, Scalp & Neck Relaxation", duration: "60 min", price: "$165", description: "A massage with Jade Roller and Gua Sha tools to release facial tension, improve blood circulation, and stimulate hair growth.", category: "massage" },
  { id: "b-white-clay", name: "White Clay Purifier", duration: "60 min", price: "$155", description: "A relaxing, purifying ritual that leaves your skin soft and radiant.", category: "massage" },
  { id: "b-legs", name: "Legs Reviver", duration: "60 min", price: "$165", description: "A draining massage with stretching and pressure points, followed by a clay mask and refreshing menthol hydration.", category: "massage" },
  // Signature
  { id: "b-cacao-tribute", name: "Sacred Cacao Tribute", duration: "2 hrs 30 min", price: "$300", description: "A holistic and romantic ritual celebrating Bocas del Toro\u2019s 100% pure cacao. Includes fresh cacao exfoliation and wrap, hot stone massage, tropical fruits, artisanal chocolates, and champagne.", category: "signature" },
  // Romantic Rituals
  { id: "b-coconut-caress", name: "Coconut Caress", duration: "2 hrs 30 min", price: "$280", description: "Sugar, oat, and coconut exfoliation, hydrating wrap, nourishing facial, and scalp massage.", category: "romantic" },
  { id: "b-energy-coffee", name: "Energy & Coffee", duration: "2 hrs 30 min", price: "$280", description: "Organic coffee exfoliation and wrap, warm shower, and draining body massage.", category: "romantic" },
  { id: "b-sea-whispers", name: "Sea Whispers", duration: "2 hrs 30 min", price: "$280", description: "A purifying ritual with seaweed wrap, relaxing massage, and detox facial, paired with a draining herbal infusion.", category: "romantic" },
  // Full-Body
  { id: "b-fresh-body", name: "Fresh & Revitalizing Body Treatment", duration: "90 min", price: "$198", description: "Choose from Silky Citrus, Tropical Escape, Lavender, or Mango. Full-body exfoliation and wrap with tropical organic products, plus a 15-minute neck massage.", category: "body" },
  { id: "b-antioxidant-body", name: "Antioxidant Body Treatment", duration: "90 min", price: "$198", description: "Choose from Coffee, Chocolate, or Strawberry. Antioxidant-rich exfoliation and wrap with a 15-minute neck massage.", category: "body" },
  { id: "b-hydrating-body", name: "Hydrating Body Treatment", duration: "90 min", price: "$198", description: "Choose from Yogurt, Avocado, or Coconut Milk. Deep hydration wrap with tropical ingredients and a 15-minute neck massage.", category: "body" },
  // Skin Care
  { id: "b-complete-facial", name: "Complete Facial", duration: "60 min", price: "$135", description: "Double cleansing, exfoliation, avocado hydrating or rosehip anti-age mask, toner, serum, vitamin E, massage, and sunscreen.", category: "facial" },
  { id: "b-express-facial", name: "Express Facial", duration: "30 min", price: "$70", description: "Quick but effective cleansing, exfoliation, 10-min mask, hydration, and sunscreen.", category: "facial" },
];

// ─── PROPERTY DEFINITIONS ─────────────────────────────────────
export const properties: Property[] = [
  {
    id: "alto-atacama",
    name: "Nayara Alto Atacama",
    shortName: "Alto Atacama",
    location: "Atacama Desert",
    country: "Chile",
    tagline: "Mars on Earth",
    heroSubtitle: "Where the driest desert on Earth reveals its secrets \u2014 from pre-dawn geyser eruptions at 4,320 meters to sunset over lunar valleys, from the world\u2019s clearest stargazing to thermal springs hidden in ancient canyons.",
    heroVideoDesktop: CDN.atacamaVideo,
    heroVideoMobile: CDN.atacamaVertical,
    heroPoster: CDN.atacamaDesert,
    website: "https://nayaraaltoatacama.com",
    email: "reservations@nayaraaltoatacama.com",
    phone: "+56 55 257 8570",
    excursions: altoAtacamaExcursions,
    treatments: altoAtacamaTreatments,
    excursionCategories: [
      { id: "all", label: "All Experiences" },
      { id: "landscape", label: "Landscapes" },
      { id: "adventure", label: "Adventure" },
      { id: "culture", label: "Culture & Stars" },
      { id: "wellness", label: "Wellness" },
    ],
    spaCategories: [
      { id: "all", label: "All Treatments" },
      { id: "exclusive", label: "Signature Rituals" },
      { id: "massage", label: "Massage" },
      { id: "earth", label: "Earth Treatments" },
      { id: "wellbeing", label: "Well-Being" },
    ],
    blogLinks: [
      { title: "Why the Atacama Is Mars on Earth", url: "https://blog.nayararesorts.com/mars-atacama-final-frontier-of-travel" },
      { title: "Wildlife Conservation in the Atacama", url: "https://blog.nayararesorts.com/wildlife-conservation-in-chiles-atacama-desert-and-easter-island" },
      { title: "Why Winter Is the Best Time to Visit", url: "https://blog.nayararesorts.com/why-winter-is-the-best-time-to-experience-the-atacama-desert" },
      { title: "The Best Stargazing Resort", url: "https://blog.nayararesorts.com/best-stargazing-resort-atacama-desert" },
      { title: "An Oasis in the Desert", url: "https://blog.nayararesorts.com/best-place-to-stay-atacama-desert-oasis" },
      { title: "Romance in the Atacama", url: "https://blog.nayararesorts.com/why-nayara-alto-atacama-is-the-best-resort-in-the-atacama-desert-for-couples" },
    ],
    theme: {
      accent: "terracotta",
      accentLight: "terracotta/80",
      heroGradient: "from-black/60 via-black/30 to-transparent",
      sectionLabel: "Spa Puri \u2014 Wellness",
      spaHeadline: "Flow Like Water,\nBreathe Like the Wind",
      spaSubheadline: "Puri means \u201cwater\u201d in Kunza, the native language of the Atacama. Along the banks of the San Pedro River, our spa draws from the desert\u2019s four elements \u2014 water, fire, earth, and air \u2014 to restore what the modern world takes away.",
      spaDescription: "Reserve treatments at least 2 hours ahead by calling #965. Arrive 15 minutes before your appointment. Cancellations within 2 hours incur a 50% charge. Spa is for guests 16 years and older. Hours: 9:30 AM \u2013 9:00 PM. Prices include VAT.",
      spaPolicies: "Reserve treatments at least 2 hours ahead by calling #965. Arrive 15 minutes before your appointment. Cancellations within 2 hours incur a 50% charge. Spa is for guests 16 years and older. Hours: 9:30 AM \u2013 9:00 PM. Prices include VAT.",
    },
  },
  {
    id: "tented-camp",
    name: "Nayara Tented Camp",
    shortName: "Tented Camp",
    location: "Arenal Volcano",
    country: "Costa Rica",
    tagline: "Luxury Tented Camp",
    heroSubtitle: "Luxury safari-style tents nestled in the Arenal rainforest canopy. Wake to howler monkeys, fall asleep to tropical rain, and explore one of the most biodiverse regions on Earth.",
    heroVideoDesktop: CDN.crToucan,
    heroVideoMobile: CDN.crToucan,
    website: "https://nayaratentedcamp.com",
    email: "reservations@nayararesorts.com",
    phone: "+1 888 332 2961",
    excursions: costaRicaExcursions,
    treatments: costaRicaTreatments,
    excursionCategories: [
      { id: "all", label: "All Experiences" },
      { id: "nature", label: "Nature & Wildlife" },
      { id: "adventure", label: "Adventure" },
      { id: "culture", label: "Culture" },
    ],
    spaCategories: [
      { id: "all", label: "All Treatments" },
      { id: "massage", label: "Massage" },
      { id: "body", label: "Body Treatments" },
      { id: "facial", label: "Facials" },
      { id: "couples", label: "Couples" },
      { id: "wellness", label: "Wellness Therapies" },
    ],
    blogLinks: [
      { title: "Pura Vida: The Science of Why Costa Rica Feels Different", url: "https://blog.nayararesorts.com/pura-vida" },
      { title: "Nature-Based Wellness: Rainforests, Oceans & Night Skies", url: "https://blog.nayararesorts.com/nature-based-wellness-at-nayara-resorts-how-deserts-rainforests-oceans-and-night-skies-shape-human-health" },
      { title: "Holistic Wellness Naturally", url: "https://blog.nayararesorts.com/holistic-wellness-naturally" },
      { title: "Meeting the Toucans of Arenal Rainforest", url: "https://blog.nayararesorts.com/meeting-the-toucans-of-arenal-rainforest-who-they-are-and-how-to-see-them" },
      { title: "Window to the Wild: Arenal Volcano Family Vacations", url: "https://blog.nayararesorts.com/window-to-the-wild-arenal-volcano-family-vacations-with-nayara-gardens-and-nayara-tented-camp" },
      { title: "Wildlife Conservation in Arenal and Bocas del Toro", url: "https://blog.nayararesorts.com/wildlife-conservation-in-arenal-and-bocas-del-toro" },
      { title: "Birdwatching in Costa Rica", url: "https://blog.nayararesorts.com/birdwatching-in-costa-rica" },
    ],
    theme: {
      accent: "emerald-700",
      accentLight: "emerald-600",
      heroGradient: "from-black/60 via-black/30 to-transparent",
      sectionLabel: "Nayara Spa \u2014 Wellness",
      spaHeadline: "Heal in the Heart\nof the Rainforest",
      spaSubheadline: "Surrounded by the sounds of the jungle and the warmth of volcanic hot springs, our spa offers treatments that draw from Costa Rica\u2019s rich natural pharmacy \u2014 volcanic mud, organic coffee, tropical cacao, and rainforest botanicals.",
      spaDescription: "Contact the Nayara Spa at ext. 215 or Springs Spa at ext. 223. Taxes not included.",
      spaPolicies: "Contact the Nayara Spa at ext. 215 or Springs Spa at ext. 223. Taxes not included.",
    },
  },
  {
    id: "gardens",
    name: "Nayara Gardens",
    shortName: "Gardens",
    location: "Arenal Volcano",
    country: "Costa Rica",
    tagline: "Where the Rainforest Blooms",
    heroSubtitle: "The original Nayara experience \u2014 lush tropical gardens, volcano views, and the warm hospitality that started it all. A sanctuary where nature and luxury grow together.",
    heroVideoDesktop: CDN.crToucan,
    heroVideoMobile: CDN.crToucan,
    website: "https://nayaragardens.com",
    email: "reservations@nayararesorts.com",
    phone: "+1 888 332 2961",
    excursions: costaRicaExcursions,
    treatments: costaRicaTreatments,
    excursionCategories: [
      { id: "all", label: "All Experiences" },
      { id: "nature", label: "Nature & Wildlife" },
      { id: "adventure", label: "Adventure" },
      { id: "culture", label: "Culture" },
    ],
    spaCategories: [
      { id: "all", label: "All Treatments" },
      { id: "massage", label: "Massage" },
      { id: "body", label: "Body Treatments" },
      { id: "facial", label: "Facials" },
      { id: "couples", label: "Couples" },
      { id: "wellness", label: "Wellness Therapies" },
    ],
    blogLinks: [
      { title: "Pura Vida: The Science of Why Costa Rica Feels Different", url: "https://blog.nayararesorts.com/pura-vida" },
      { title: "Nature-Based Wellness: Rainforests, Oceans & Night Skies", url: "https://blog.nayararesorts.com/nature-based-wellness-at-nayara-resorts-how-deserts-rainforests-oceans-and-night-skies-shape-human-health" },
      { title: "Holistic Wellness Naturally", url: "https://blog.nayararesorts.com/holistic-wellness-naturally" },
      { title: "Meeting the Toucans of Arenal Rainforest", url: "https://blog.nayararesorts.com/meeting-the-toucans-of-arenal-rainforest-who-they-are-and-how-to-see-them" },
      { title: "Window to the Wild: Arenal Volcano Family Vacations", url: "https://blog.nayararesorts.com/window-to-the-wild-arenal-volcano-family-vacations-with-nayara-gardens-and-nayara-tented-camp" },
      { title: "Wildlife Conservation in Arenal and Bocas del Toro", url: "https://blog.nayararesorts.com/wildlife-conservation-in-arenal-and-bocas-del-toro" },
      { title: "Birdwatching in Costa Rica", url: "https://blog.nayararesorts.com/birdwatching-in-costa-rica" },
    ],
    theme: {
      accent: "emerald-700",
      accentLight: "emerald-600",
      heroGradient: "from-black/60 via-black/30 to-transparent",
      sectionLabel: "Nayara Spa \u2014 Wellness",
      spaHeadline: "Heal in the Heart\nof the Rainforest",
      spaSubheadline: "Surrounded by the sounds of the jungle and the warmth of volcanic hot springs, our spa offers treatments that draw from Costa Rica\u2019s rich natural pharmacy \u2014 volcanic mud, organic coffee, tropical cacao, and rainforest botanicals.",
      spaDescription: "Contact the Nayara Spa at ext. 215. Taxes not included.",
      spaPolicies: "Contact the Nayara Spa at ext. 215. Taxes not included.",
    },
  },
  {
    id: "springs",
    name: "Nayara Springs",
    shortName: "Springs",
    location: "Arenal Volcano",
    country: "Costa Rica",
    tagline: "Adults-Only Sanctuary",
    heroSubtitle: "The most exclusive Nayara experience \u2014 adults-only villas with private plunge pools fed by natural hot springs. Where volcanic warmth meets rainforest serenity.",
    heroVideoDesktop: CDN.crSpa,
    heroVideoMobile: CDN.crSpa,
    website: "https://nayarasprings.com",
    email: "reservations@nayararesorts.com",
    phone: "+1 888 332 2961",
    excursions: costaRicaExcursions,
    treatments: costaRicaTreatments,
    excursionCategories: [
      { id: "all", label: "All Experiences" },
      { id: "nature", label: "Nature & Wildlife" },
      { id: "adventure", label: "Adventure" },
      { id: "culture", label: "Culture" },
    ],
    spaCategories: [
      { id: "all", label: "All Treatments" },
      { id: "massage", label: "Massage" },
      { id: "body", label: "Body Treatments" },
      { id: "facial", label: "Facials" },
      { id: "couples", label: "Couples" },
      { id: "wellness", label: "Wellness Therapies" },
    ],
    blogLinks: [
      { title: "Pura Vida: The Science of Why Costa Rica Feels Different", url: "https://blog.nayararesorts.com/pura-vida" },
      { title: "The History and Science of Private Hot Springs & Plunge Pools", url: "https://blog.nayararesorts.com/the-history-and-science-of-private-villas-hot-springs-plunge-pools" },
      { title: "Holistic Wellness Naturally", url: "https://blog.nayararesorts.com/holistic-wellness-naturally" },
      { title: "Nature-Based Wellness: Rainforests, Oceans & Night Skies", url: "https://blog.nayararesorts.com/nature-based-wellness-at-nayara-resorts-how-deserts-rainforests-oceans-and-night-skies-shape-human-health" },
      { title: "The Fiery Heart of Costa Rica: Life and Love at Nayara Springs", url: "https://blog.nayararesorts.com/the-fiery-heart-of-costa-ricas-rainforest-life-and-love-at-nayara-springs" },
      { title: "Birdwatching in Costa Rica", url: "https://blog.nayararesorts.com/birdwatching-in-costa-rica" },
      { title: "Meeting the Toucans of Arenal Rainforest", url: "https://blog.nayararesorts.com/meeting-the-toucans-of-arenal-rainforest-who-they-are-and-how-to-see-them" },
      { title: "Wildlife Conservation in Arenal and Bocas del Toro", url: "https://blog.nayararesorts.com/wildlife-conservation-in-arenal-and-bocas-del-toro" },
    ],
    theme: {
      accent: "emerald-700",
      accentLight: "emerald-600",
      heroGradient: "from-black/60 via-black/30 to-transparent",
      sectionLabel: "Springs Spa \u2014 Wellness",
      spaHeadline: "Volcanic Warmth,\nRainforest Serenity",
      spaSubheadline: "Private hot spring plunge pools, world-class spa treatments, and the healing energy of the Arenal Volcano. An adults-only wellness sanctuary where every detail is designed for restoration.",
      spaDescription: "Contact the Springs Spa at ext. 223, 235 or Sukha Spa at ext. 276, 279. Taxes not included.",
      spaPolicies: "Contact the Springs Spa at ext. 223, 235 or Sukha Spa at ext. 276, 279. Taxes not included.",
    },
  },
  {
    id: "hangaroa",
    name: "Nayara Hangaroa",
    shortName: "Hangaroa",
    location: "Easter Island",
    country: "Chile",
    tagline: "Where Moai Meet the Pacific",
    heroSubtitle: "At the edge of the world, where ancient Moai stand sentinel over the Pacific. Explore Rapa Nui\u2019s mysterious archaeological sites, dive crystal-clear waters, and immerse yourself in one of Earth\u2019s most isolated and fascinating cultures.",
    website: "https://nayarahangaroa.com",
    email: "reservations@hangaroa.cl",
    phone: "+56 32 255 3700",
    excursions: hangaroaExcursions,
    treatments: hangaroaTreatments,
    excursionCategories: [
      { id: "all", label: "All Experiences" },
      { id: "culture", label: "Culture & Heritage" },
      { id: "adventure", label: "Adventure" },
    ],
    spaCategories: [
      { id: "all", label: "All Treatments" },
      { id: "massage", label: "Massage" },
      { id: "body", label: "Body Treatments" },
      { id: "facial", label: "Facial" },
      { id: "wellness", label: "Wellness" },
    ],
    blogLinks: [
      { title: "Wildlife Conservation on Easter Island", url: "https://blog.nayararesorts.com/wildlife-conservation-in-chiles-atacama-desert-and-easter-island" },
      { title: "The Tapati Rapa Nui Festival at Nayara Hangaroa", url: "https://blog.nayararesorts.com/the-tapati-rapa-nui-festival-at-nayara-hangaroa" },
      { title: "Walking Giants: The Hito Family & the Future of Easter Island", url: "https://blog.nayararesorts.com/walking-giants-the-hito-family-the-future-of-easter-island" },
      { title: "Challenge Easter Island's Outdoors with Nayara Hangaroa", url: "https://blog.nayararesorts.com/challenge-easter-islands-outdoors-with-nayara-hangaroa" },
      { title: "A Collapse That Wasn't: Maya and Rapa Nui on Climate & Survival", url: "https://blog.nayararesorts.com/a-collapse-that-wasnt-a-collapse" },
      { title: "Nature-Based Wellness: Deserts, Rainforests, Oceans & Night Skies", url: "https://blog.nayararesorts.com/nature-based-wellness-at-nayara-resorts-how-deserts-rainforests-oceans-and-night-skies-shape-human-health" },
    ],
    theme: {
      accent: "sky-700",
      accentLight: "sky-600",
      heroGradient: "from-black/60 via-black/30 to-transparent",
      sectionLabel: "Manavai Spa \u2014 Wellness",
      spaHeadline: "Ancient Healing,\nIsland Serenity",
      spaSubheadline: "The Manavai Spa draws from Rapa Nui\u2019s Polynesian heritage, using island botanicals and traditional techniques. Each treatment carries a name in the Rapa Nui language, connecting you to the island\u2019s living culture.",
      spaDescription: "Reservations: Call ext. 728 or email spa@hangaroa.cl. Gym hours: 7:30 AM \u2013 10:00 PM. Spa hours: 9:00 AM \u2013 8:00 PM.",
      spaPolicies: "Reservations: Call ext. 728 or email spa@hangaroa.cl. Gym hours: 7:30 AM \u2013 10:00 PM. Spa hours: 9:00 AM \u2013 8:00 PM.",
    },
  },
  {
    id: "bocas-del-toro",
    name: "Nayara Bocas del Toro",
    shortName: "Bocas del Toro",
    location: "Bocas del Toro",
    country: "Panama",
    tagline: "Caribbean Island Paradise",
    heroSubtitle: "A private island sanctuary in Panama\u2019s Caribbean archipelago. Overwater villas, bioluminescent bays, pristine coral reefs, and the rhythm of island life \u2014 where the jungle meets the sea.",
    website: "https://nayarabocasdeltoro.com",
    email: "guestexperience@nayarabocasdeltoro.com",
    phone: "+507 838 8362",
    excursions: bocasExcursions,
    treatments: bocasTreatments,
    excursionCategories: [
      { id: "all", label: "All Experiences" },
      { id: "water", label: "Water & Sailing" },
      { id: "nature", label: "Nature & Wildlife" },
      { id: "adventure", label: "Adventure" },
      { id: "culture", label: "Culture" },
      { id: "wellness", label: "Wellness" },
    ],
    spaCategories: [
      { id: "all", label: "All Treatments" },
      { id: "massage", label: "Massage" },
      { id: "signature", label: "Signature" },
      { id: "romantic", label: "Romantic Rituals" },
      { id: "body", label: "Body Treatments" },
      { id: "facial", label: "Skin Care" },
    ],
    blogLinks: [
      { title: "5 Interesting Facts About Bocas del Toro, Panama", url: "https://blog.nayararesorts.com/5-interesting-facts-about-bocas-del-toro-panama" },
      { title: "The Private Island Paradise of Bocas del Toro", url: "https://blog.nayararesorts.com/the-private-island-paradise-of-bocas-del-toro" },
      { title: "Your Floating Paradise in the Galápagos of the Caribbean", url: "https://blog.nayararesorts.com/your-floating-paradise-in-the-galapagos-of-the-caribbean-nayara-bocas-del-toro" },
      { title: "Nayara Bocas del Toro Treehouse", url: "https://blog.nayararesorts.com/nayarabocasdeltorotreehouse" },
      { title: "Biodensity, Underwater Mountains & Our Ecosystems", url: "https://blog.nayararesorts.com/biodensity-underwater-mountains-and-more-a-different-perspective-on-our-ecosystems" },
      { title: "Wildlife Conservation in Arenal and Bocas del Toro", url: "https://blog.nayararesorts.com/wildlife-conservation-in-arenal-and-bocas-del-toro" },
    ],
    theme: {
      accent: "amber-600",
      accentLight: "amber-500",
      heroGradient: "from-black/60 via-black/30 to-transparent",
      sectionLabel: "Spa Colibr\u00ed \u2014 Wellness",
      spaHeadline: "Caribbean Healing,\nIsland Rhythm",
      spaSubheadline: "Spa Colibr\u00ed is your wellness sanctuary in the heart of Bocas del Toro\u2019s lush mangroves. Each treatment is crafted using locally sourced organic products \u2014 cacao, coconut, coffee, and tropical botanicals \u2014 that nourish your skin and restore your spirit.",
      spaDescription: "Arrive 20 minutes early to enjoy a refreshing drink and relax in our garden lounge. Cancellations require 12 hours notice. 7% tax not included. Gratuity not included.",
      spaPolicies: "Arrive 20 minutes early to enjoy a refreshing drink and relax in our garden lounge. Cancellations require 12 hours notice. 7% tax not included. Gratuity not included.",
    },
  },
];

export { exploreNayaraExperiences, exploreArenalExperiences };

export function getPropertyById(id: string): Property | undefined {
  return properties.find((p) => p.id === id);
}
