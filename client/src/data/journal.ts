/**
 * JOURNAL DATA , Unified feed of blog articles, video episodes, and newsletters
 * All content merged into a single JournalEntry type for the unified Journal page.
 * Filtered by PROPERTY only (no pillar/topic filters).
 */

// ─── Types ────────────────────────────────────────────────────

/** Unified entry for the Journal feed , either an article or a video episode */
export interface JournalEntry {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  /** Property filter tag , matches property slug or "brand" for cross-property content */
  property: JournalProperty;
  /** "article" links to internal /blog/ routes; "video" plays inline with YouTube embed; "audio" links to podcast player */
  type: "article" | "video" | "audio";
  /** External URL for articles */
  url?: string;
  /** YouTube video ID for video episodes (Watch CTA) */
  youtubeId?: string;
  /** Duration label for video episodes */
  duration?: string;
  /** Guest name for video episodes */
  guest?: string;
  /** Whether this entry should be featured at the top */
  featured?: boolean;
  /** Sort date (ISO-ish or descriptive , used for ordering) */
  date?: string;
  /**
   * EN/ES language variants , for sustainability videos that have both languages.
   * When present, the card shows two pills: 🇺🇸 English and 🇪🇸 Spanish.
   */
  languageVariants?: {
    en: string;  // YouTube ID for English version
    es: string;  // YouTube ID for Spanish version
    enDuration?: string;
    esDuration?: string;
  };
  /** For audio entries: external podcast URL (Apple Podcasts, Spotify, etc.) */
  podcastUrl?: string;
  /**
   * Listen URL , when present alongside youtubeId, the card shows dual CTAs:
   * ▶ Watch (opens YouTube) and 🎧 Listen (opens this URL).
   * For audio-only entries, use podcastUrl instead.
   */
  listenUrl?: string;
  /** Sort priority , lower number = earlier in feed (0 = always first) */
  sortPriority?: number;
  /** When true, card shows a "Coming Soon" overlay instead of active CTAs */
  comingSoon?: boolean;
  /** When true, the image field contains a video URL to be played inline */
  video?: boolean;
}

export type JournalProperty =
  | "brand"
  | "tented-camp"
  | "gardens"
  | "springs"
  | "alto-atacama"
  | "hangaroa"
  | "bocas-del-toro";

/** Property filter options for the Journal page */
export const JOURNAL_PROPERTIES: { id: JournalProperty | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "tented-camp", label: "Tented Camp" },
  { id: "gardens", label: "Gardens" },
  { id: "springs", label: "Springs" },
  { id: "alto-atacama", label: "Atacama" },
  { id: "hangaroa", label: "Hangaroa" },
  { id: "bocas-del-toro", label: "Bocas del Toro" },
];

// ─── Fallback image for posts without og:image ───────────────
const FALLBACK_IMG = "https://blog.nayararesorts.com/hubfs/2-Nov-05-2025-03-44-38-2049-AM.png";

/**
 * Map old destination strings to property slugs.
 * "Arenal" maps to "brand" because CR articles span all 3 CR properties.
 * Property-specific CR articles should be tagged individually.
 */
function destToProperty(dest: string): JournalProperty {
  switch (dest) {
    case "Atacama": return "alto-atacama";
    case "Hangaroa": return "hangaroa";
    case "Bocas del Toro": return "bocas-del-toro";
    case "Arenal": return "brand"; // CR articles shown under brand unless specific
    default: return "brand";
  }
}

// ─── Blog Articles ───────────────────────────────────────────
const blogArticles: JournalEntry[] = [
  {
    id: "three-kitchens-one-rainforest",
    title: "Forest to Table: Three Kitchens, One Rainforest",
    url: "/blog/three-kitchens-one-rainforest",
    property: "gardens",
    type: "article",
    image: "/manus-storage/family-bucket-list-card-kebab_e71e0ff7.png",
    excerpt: "Three restaurants, one rainforest. How Nayara's kitchens at Ayla, Nostalgia, and Nayara Springs define Costa Rican-Mediterranean cuisine.",
    featured: true,
  },
  {
    id: "latin-america-luxury-brand",
    title: "Luxury Resorts Rooted in Nature: The Nayara Story",
    url: "/blog/nayara-story",
    property: "brand",
    type: "article",
    image: "https://blog.nayararesorts.com/hubfs/2-Nov-05-2025-03-44-38-2049-AM.png",
    excerpt: "Nayara Resorts is recognized as one of Latin America's leading luxury hotel brands, defined by nature, cultural connection, and place-based hospitality.",
    featured: true,
  },
  {
    id: "7-michelin-keys",
    title: "7 MICHELIN Keys Across Costa Rica, Chile, and Panama at Nayara Resorts",
    url: "/blog/michelin-keys",
    property: "springs",
    type: "article",
    image: "https://blog.nayararesorts.com/hubfs/E056D1CD-5240-40E5-8567-21240563F763%203.jpg",
    excerpt: "Nayara Resorts earns seven MICHELIN Keys across three countries , a testament to exceptional character, service, and sense of place.",
    featured: true,
  },
  {
    id: "travel-trends-2026",
    title: "Top 10 Luxury Travel Trends of 2026 and How Nayara Leads Them",
    url: "/blog/travel-trends",
    property: "brand",
    type: "article",
    image: "https://blog.nayararesorts.com/hubfs/2-Aug-18-2025-09-54-44-4739-PM.png",
    excerpt: "From regenerative travel to digital detox, discover the trends shaping luxury hospitality in 2026 and how Nayara Resorts leads the way.",
  },

  {
    id: "sunlit-sustainability",
    title: "Solar Energy at Nayara Resorts: Sustainability Powered by Nature",
    url: "/blog/sunlit-sustainability",
    property: "brand",
    type: "article",
    image: "/manus-storage/sunlit-sustainability-cover_e4f4d3f1.jpg",
    excerpt: "Explore how Nayara Resorts harnesses solar power for sustainable luxury, from the Atacama Desert to Easter Island, Costa Rica, and Bocas del Toro.",
  },
  {
    id: "rooted-in-community",
    title: "Rooted in Community: How Nayara Supports Local People Across Four Destinations",
    url: "/blog/rooted-in-community",
    property: "brand",
    type: "article",
    image: "/manus-storage/rooted-community-cover_dcdbfae8.jpg",
    excerpt: "From the volcano that changed La Fortuna to the shores of Rapa Nui, the communities around Nayara tell a shared story of commitment, dignity, and regeneration.",
  },
  {
    id: "nature-based-wellness-colors",
    title: "Nature Based Wellness at Nayara: Brown Earth, Black Volcanic Mud, Green Forest, Blue Sea",
    url: "/blog/wellness-by-colors",
    property: "brand",
    type: "article",
    image: "https://blog.nayararesorts.com/hubfs/NAYARA%20BOCAS%20DEL%20TORO-42.jpg",
    excerpt: "Discover holistic wellness at Nayara Resorts, where nature's tranquility , forest, desert, and sea , revitalizes mind, body, and spirit.",
  },
  {
    id: "hot-springs-plunge-pools",
    title: "Private Villas and Hot-Springs Plunge Pools: The History & Science",
    url: "/blog/hot-springs",
    property: "springs",
    type: "article",
    image: "/manus-storage/hotsprings-card-tented-plunge_5d997c52.jpg",
    excerpt: "From Roman thermae to Nayara Springs , the science and history behind private hot springs plunge pools and their profound wellness benefits.",
  },

  {
    id: "wildlife-arenal-bocas",
    title: "Wildlife Conservation in Arenal and Bocas del Toro",
    url: "/blog/arenal-bocas-wildlife",
    property: "gardens",
    type: "article",
    image: "https://blog.nayararesorts.com/hubfs/Swimming-Sloth-1024x683.jpg",
    excerpt: "From sloths to sea turtles , how Nayara Resorts protects wildlife across Costa Rica's rainforests and Panama's Caribbean islands.",
  },
  {
    id: "wildlife-atacama-easter-island",
    title: "Wildlife Conservation in Chile's Atacama Desert and Easter Island",
    url: "/blog/atacama-wildlife",
    property: "alto-atacama",
    type: "article",
    image: "/manus-storage/atacama-wildlife-cover_ebe00ac5.jpg",
    excerpt: "Vicuñas, flamingos, and endemic species , conservation efforts protecting Chile's most fragile ecosystems.",
  },

  {
    id: "maya-rapa-nui-climate",
    title: "A Collapse That Wasn't: What the Maya and Rapa Nui Teach Us",
    url: "/blog/maya-rapa-nui-climate",
    property: "hangaroa",
    type: "article",
    image: "https://blog.nayararesorts.com/hubfs/2-Aug-18-2025-09-54-44-4739-PM.png",
    excerpt: "The Maya and Rapa Nui civilizations didn't collapse, they adapted. What their resilience teaches us about climate, survival, and cultural continuity.",
  },
  {
    id: "solo-travel-female",
    title: "Solo Female Travel in Costa Rica, Chile, and Panama at Nayara Resorts",
    url: "/blog/solo-travel-female",
    property: "brand",
    type: "article",
    image: "/manus-storage/hangaroa-sustainability-cover_3a8a8550.jpg",
    excerpt: "Women are leading the solo travel revolution. Discover how Nayara Resorts creates safe, empowering, and transformative experiences for solo female travelers.",
  },


  {
    id: "pura-vida",
    title: "Pura Vida and the Science of Why Costa Rica Feels Different",
    url: "/blog/pura-vida",
    property: "brand",
    type: "article",
    image: "/manus-storage/pura-vida-hero_9a138a66.jpeg",
    excerpt: "On World Health Day, we explore the science behind Costa Rica's wellbeing, from nature exposure and time affluence to the Blue Zone of Nicoya, and what Pura Vida really means.",
    featured: true,
  },
  {
    id: "womens-empowerment",
    title: "Women's Empowerment Through Housing at Nayara in Costa Rica",
    url: "/blog/womens-empowerment",
    property: "brand",
    type: "article",
    image: "https://blog.nayararesorts.com/hubfs/PHOTO-2026-03-02-19-55-27.jpg",
    excerpt: "How Nayara Resorts is building homes and empowering women in La Fortuna through community-driven housing initiatives.",
  },

  {
    id: "arenal-timeless-wonder",
    title: "Arenal, Costa Rica: A Timeless Natural Wonder",
    url: "/blog/arenal-timeless-wonder",
    property: "brand",
    type: "article",
    image: "/manus-storage/A50DCA72-3FCB-46E5-A703-DFFB62080A51_79a81ca2.jpg",
    excerpt: "Arenal Volcano has shaped the landscape and culture of northern Costa Rica for millennia. Discover the geology, ecology, and spirit of this iconic destination.",
  },

  {
    id: "conde-nast-bocas",
    title: "Nayara Bocas del Toro: #1 Resort in Central America, Condé Nast Traveler 2025",
    url: "/blog/bocas-conde-nast",
    property: "bocas-del-toro",
    type: "article",
    image: "/manus-storage/bocas-aerial-cover_46f0bbf4.jpg",
    excerpt: "Condé Nast Traveler readers voted Nayara Bocas del Toro the #1 resort in Central and South America. Here's why.",
    featured: true,
  },

  // treehouse-dreams: removed from journal feed (stub page, no real content yet)
  // biodensity-underwater: removed from journal feed (stub page, no real content yet)

  {
    id: "how-we-built-a-hotel-on-an-island",
    title: "How Nayara Built an Off Grid Resort on a Private Island in Panama",
    url: "/blog/how-we-built-a-hotel-on-an-island",
    property: "bocas-del-toro",
    type: "article",
    image: "/manus-storage/bocas-aerial-island_34b68171.jpg",
    excerpt: "No roads. No grid. No municipal water. Five environmental studies, $100,000 in research, and a commitment to leave the ecosystem better than we found it.",
    featured: true,
  },

  {
    id: "mars-atacama",
    title: "Why the Atacama Desert Is Called Mars on Earth",
    url: "/blog/atacama-mars",
    property: "alto-atacama",
    type: "article",
    image: "https://blog.nayararesorts.com/hubfs/5-Jan-28-2026-12-18-54-4709-AM.png",
    excerpt: "How the Atacama Desert shapes the future of regenerative travel. Learn how science, community partnerships, and ancient landscapes converge.",
    featured: true,
  },
  {
    id: "stargazing-atacama",
    title: "Best Stargazing Resort in the Atacama Desert: Why Nayara Alto Atacama Leads",
    url: "/blog/stargazing-atacama",
    property: "alto-atacama",
    type: "article",
    image: "https://blog.nayararesorts.com/hubfs/iotw2334a_crop.jpg",
    excerpt: "Discover why the Atacama has the clearest night skies on Earth and how Nayara Alto Atacama's private observatory unlocks the cosmos.",
  },
  {
    id: "oasis-atacama",
    title: "The Oasis Factor: What Defines the Best Place to Stay in the Atacama Desert",
    url: "/blog/atacama-oasis",
    property: "alto-atacama",
    type: "article",
    image: "https://blog.nayararesorts.com/hubfs/3-Nov-26-2025-02-34-59-4966-AM.png",
    excerpt: "In the Atacama, location matters. Learn why staying inside a true desert oasis transforms comfort, recovery, and the entire experience.",
  },
  {
    id: "edge-habitability",
    title: "The Atacama Desert at the Edge of Habitability: Life in the Driest Place on Earth",
    url: "/blog/edge-habitability",
    property: "alto-atacama",
    type: "article",
    image: "/manus-storage/edge-habitability-cover_1b054538.jpg",
    excerpt: "Understanding the Atacama Desert: landscape, climate, and extremes. How life persists at the edge of habitability.",
  },

  {
    id: "hito-family-rapanui",
    title: "How Nayara Hangaroa Leads Ecological Regeneration on Easter Island",
    url: "/blog/hangaroa-regeneration",
    property: "hangaroa",
    type: "article",
    image: "https://blog.nayararesorts.com/hubfs/9-Aug-11-2025-08-40-19-5669-PM.png",
    excerpt: "Rapa Nui's Hito family leads cultural and ecological regeneration. Learn how moai traditions, reforestation, and community shape the island's future.",
  },

  {
    id: "green-globe",
    title: "Green Globe Certification at Nayara Resorts in Costa Rica and Panama",
    url: "/blog/green-globe-certification",
    property: "brand",
    type: "article",
    image: "/manus-storage/greenglobe-card-pool-arenal_9ba2f8e8.jpg",
    excerpt: "Discover how Nayara Resorts' Green Globe Certification underscores our commitment to sustainability across every property.",
  },
  {
    id: "s-certification",
    title: "Chile S Certification: How Nayara Alto Atacama and Hangaroa Lead Sustainable Tourism",
    url: "/journal/s-certification",
    property: "alto-atacama",
    type: "article",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-aerial_9e07a82e.jpg",
    excerpt: "Nayara Alto Atacama and Nayara Hangaroa are the only luxury hotels in their destinations to hold Chile's government-backed S Certification for sustainable tourism.",
  },
  {
    id: "tapati-festival",
    title: "Tapati Rapa Nui Festival: Experience Easter Island Culture at Nayara Hangaroa",
    url: "/blog/tapati-festival",
    property: "hangaroa",
    type: "article",
    image: "https://blog.nayararesorts.com/hubfs/Im%C3%A1genes%20BLOGS/The%20Tapati%20Rapa%20Nui%20Festival%20at%20Nayara%20Hangaroa%20(6).jpg",
    excerpt: "The Tapati Festival lights up Easter Island every February , music, dance, ancestral competitions, and the living spirit of Rapa Nui.",
  },

  {
    id: "birdwatching-costa-rica",
    title: "Birdwatching in Costa Rica: The Best Birds to See Near Arenal Volcano",
    url: "/blog/birdwatching",
    property: "brand",
    type: "article",
    image: "/manus-storage/birdwatching-card-aracari-square_616da216.jpg",
    excerpt: "Costa Rica is home to over 900 bird species. From resplendent quetzals to six species of toucans , a birdwatcher's paradise.",
  },

  {
    id: "bocas-history-culture-nature",
    title: "Bocas del Toro Panama: History, Culture, and Nature of the Archipelago",
    url: "/blog/bocas-history-culture-nature",
    property: "bocas-del-toro",
    type: "article",
    image: "/manus-storage/bocas-history-culture-cover_21d14dc5.jpg",
    excerpt: "Discover the rich history, vibrant culture, and pristine natural beauty of Bocas del Toro , from its colonial heritage to bioluminescent bays.",
  },
  {
    id: "nayara-bocas-resort-experience",
    title: "A Day at Nayara Bocas del Toro: Your Private Island in Panama",
    url: "/blog/nayara-bocas-resort-experience",
    property: "bocas-del-toro",
    type: "article",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-aerial-villas-boardwalk_94eb4b4f.jpg",
    excerpt: "Experience the architectural innovation and natural beauty of Nayara Bocas , from overwater villas to treehouses to the world's first aerial beach.",
  },
  {
    id: "bocas-conde-nast-award",
    title: "Why Nayara Bocas del Toro Won #1 Resort in Central America",
    url: "/blog/bocas-conde-nast",
    property: "bocas-del-toro",
    type: "article",
    image: "https://blog.nayararesorts.com/hubfs/8-Oct-07-2025-04-49-30-6724-AM.png",
    excerpt: "Celebrating our 2025 award as the top luxury resort in Central America , a testament to innovation, sustainability, and unparalleled hospitality.",
    featured: true,
  },
  {
    id: "nayara-by-night",
    title: "Nayara by Night: Stargazing, Bioluminescence, and the Rainforest After Dark",
    url: "/blog/nayara-by-night",
    property: "brand",
    type: "article",
    image: "/manus-storage/moai-milky-way-night_73a94f15.jpg",
    excerpt: "Discover the magic of darkness and celestial wonders , stargazing, bioluminescence, and the transformative power of the night sky at Nayara.",
  },
  {
    id: "experiential-travel-2026",
    title: "Experiential Travel at Nayara: Where Every Destination is a Discovery",
    url: "/blog/experiential-travel-nayara-2026",
    property: "brand",
    type: "article",
    image: "/manus-storage/experiential-travel-cover_1cb55e5b.jpg",
    excerpt: "From volcano hikes to jungle immersion, discover why Nayara defines experiential luxury in 2026.",
  },
  {
    id: "family-bucket-list",
    title: "The World as a Classroom: A Family Guide to Every Nayara Destination",
    url: "/blog/family-bucket-list-nayara",
    property: "gardens",
    type: "article",
    image: "/manus-storage/journal-family-cover-v2_8d8fbf0a.jpg",
    excerpt: "Create unforgettable family memories with wildlife encounters, chocolate-making, and volcano adventures.",
  },

  // Caribbean Coral Reef blog removed, content now lives on /bocas-del-toro/sustainability

  // maya-rapa-nui-climate: consolidated into single entry above (was duplicate)
  {
    id: "reforestation-wildlife",
    title: "Reforestation and Wildlife Corridors at Nayara Arenal in Costa Rica",
    url: "/blog/reforestation-wildlife",
    property: "gardens",
    type: "article",
    image: "/manus-storage/reforestation-wildlife-cover_d766bbf9.jpg",
    excerpt: "How Nayara's reforestation efforts create vital wildlife corridors in Costa Rica's Arenal region.",
  },
  // wellness-hospitality: removed from journal feed (stub page, no real content yet)
];

// ─── Audio Episodes (Podcasts) ───────────────────────────────
const audioEpisodes: JournalEntry[] = [];

// ─── Video Episodes (Nayara Horizons + Sustainability Videos) ─
const videoEpisodes: JournalEntry[] = [
  // ─── Albert Ghitis (2 videos) ───
  {
    id: "hitorangi-rapanui",
    title: "The Guardians of Rapa Nui: A Conversation with the Hitorangi Family",
    type: "video",
    property: "hangaroa",
    youtubeId: "FRPVRcUTNmk",
    duration: "10 min",
    guest: "Albert Ghitis",
    image: "/manus-storage/podcast-cover-rapanui-warrior_9ff96565.jpg",
    excerpt: "An intimate conversation with the Hitorangi family about preserving Rapa Nui's cultural heritage, the future of Easter Island, and what it means to be guardians of one of the world's most remote civilizations.",
  },
  {
    id: "archaeologist-rapanui",
    title: "Uncovering Rapa Nui: An Archaeologist's Perspective",
    type: "video",
    property: "hangaroa",
    youtubeId: "qFVLTTJa7hE",
    duration: "15 min",
    guest: "Albert Ghitis",
    image: "/manus-storage/podcast-cover-ancient-worlds_a64d1b7e.png",
    excerpt: "A deep dive into the archaeological mysteries of Easter Island — from moai construction techniques to new discoveries that challenge everything we thought we knew about Rapa Nui civilization.",
  },
  // ─── Leo Ghitis (3 videos) ───
  {
    id: "atacama-sustainability",
    title: "Nayara Alto Atacama Sustainability",
    type: "video",
    property: "alto-atacama",
    languageVariants: {
      en: "6cfkWsqWWc8",
      enDuration: "2:13 min",
      es: "H9VxyDgv31U",
      esDuration: "1 min",
    },
    duration: "2:13 min",
    guest: "Nayara Resorts",
    image: "/manus-storage/podcast-cover-atacama-couple_b93a50c8.png",
    excerpt: "How Nayara Alto Atacama operates sustainably in the driest desert on Earth — solar energy, adobe architecture, and 100% water reuse.",
  },
  {
    id: "leo-suite-success",
    title: "Leo Ghitis on Suite Success",
    type: "video",
    property: "brand",
    youtubeId: "X_lTp6Jh8ag",
    duration: "26 min",
    guest: "Leo Ghitis, Owner",
    image: "/manus-storage/podcast-cover-suite-success_56bbedc7.jpg",
    excerpt: "Leo Ghitis traces his journey from real estate to hospitality and reveals how Nayara is setting the standard for regenerative travel.",
  },
  {
    id: "leo-costa-rica-entrepreneurship",
    title: "Leo Ghitis on Costa Rica Entrepreneurship",
    type: "video",
    property: "brand",
    youtubeId: "xRlF3yCrIK4",
    duration: "12 min",
    guest: "Leo Ghitis, CEO & Co-Founder",
    image: "/manus-storage/podcast-cover-suite-success_56bbedc7.jpg",
    excerpt: "Leo Ghitis discusses entrepreneurship in Costa Rica, the challenges and rewards of building a luxury hospitality brand rooted in sustainability and community.",
  },
  // ─── Sustainability (2 videos, EN/ES) ───
  {
    id: "hangaroa-sustainability",
    title: "Nayara Hangaroa Sustainability",
    type: "video",
    property: "hangaroa",
    languageVariants: {
      en: "_M3ATv4I0B8",
      enDuration: "3:34 min",
      es: "EinNAkAoKE8",
      esDuration: "3:31 min",
    },
    duration: "3:34 min",
    guest: "Nayara Resorts",
    image: "/manus-storage/hangaroa-sustainability-video-cover_0ffa9cb7.jpg",
    excerpt: "Nayara Hangaroa's commitment to sustainability on Rapa Nui — renewable energy, water conservation, plastic elimination, cultural preservation, and community support.",
  },
  {
    id: "leo-luxury-travel-innovators",
    title: "The Allure of Sustainability in Luxury Travel",
    type: "video",
    property: "brand",
    youtubeId: "7l072Yr__pE",
    duration: "8 min",
    guest: "Leo Ghitis, CEO & Co-Founder",
    image: "/manus-storage/leo-ghitis-square_b11e2ee5.jpg",
    excerpt: "Leo Ghitis explores the journey of building Nayara Resorts — a brand that seamlessly blends ultra-luxury with profound environmental stewardship across Costa Rica, Panama, and Chile.",
  },
];

// ─── Merged + Sorted Feed ────────────────────────────────────
/** All journal entries , articles first (featured at top), then videos */
/** Interleave videos among articles so podcasts are spaced out, not clumped */
function interleaveEntries(): JournalEntry[] {
  // Audio episodes with sortPriority 0 always go first
  const pinnedAudio = audioEpisodes.filter(e => (e.sortPriority ?? 99) === 0);
  const featured = blogArticles.filter(e => e.featured);
  const nonFeatured = blogArticles.filter(e => !e.featured);
  const videos = [...videoEpisodes];
  // Start with pinned audio, then featured articles
  const result: JournalEntry[] = [...pinnedAudio, ...featured];

  // Interleave: insert one video every ~5 articles
  const spacing = Math.max(1, Math.floor(nonFeatured.length / (videos.length + 1)));
  let videoIdx = 0;
  for (let i = 0; i < nonFeatured.length; i++) {
    result.push(nonFeatured[i]);
    if ((i + 1) % spacing === 0 && videoIdx < videos.length) {
      result.push(videos[videoIdx++]);
    }
  }
  // Append any remaining videos
  while (videoIdx < videos.length) {
    result.push(videos[videoIdx++]);
  }
  return result;
}

export const journalEntries: JournalEntry[] = interleaveEntries();

// ─── Legacy Exports (for any remaining imports) ──────────────
export interface BlogPost {
  id: string;
  title: string;
  url: string;
  pillar: string;
  destination: string;
  image: string;
  excerpt: string;
  featured?: boolean;
}

export interface PodcastEpisode {
  id: string;
  title: string;
  guest: string;
  description: string;
  youtubeId: string;
  duration: string;
  date: string;
  coverImage?: string;
  /** Alternate language YouTube video ID */
  altYoutubeId?: string;
  /** Alternate language label (e.g. "ES" or "EN") */
  altLanguage?: string;
  /** Alternate language duration */
  altDuration?: string;
  /** For audio entries: external podcast URL (Apple Podcasts, Spotify, etc.) */
  podcastUrl?: string;
  /** Sort priority , lower number = earlier in feed (0 = always first) */
  sortPriority?: number;
}

/** Legacy blog posts array , maps from new unified entries */
export const blogPosts: BlogPost[] = blogArticles.map(e => ({
  id: e.id,
  title: e.title,
  url: e.url || "",
  pillar: "Brand",
  destination: e.property === "alto-atacama" ? "Atacama" : e.property === "hangaroa" ? "Hangaroa" : e.property === "bocas-del-toro" ? "Bocas del Toro" : e.property === "brand" ? "All" : "Arenal",
  image: e.image,
  excerpt: e.excerpt,
  featured: e.featured,
}));

/** Legacy podcast episodes array , maps from new unified entries */
export const podcastEpisodes: PodcastEpisode[] = videoEpisodes.map(e => ({
  id: e.id,
  title: e.title,
  guest: e.guest || "",
  description: e.excerpt,
  youtubeId: e.youtubeId || e.languageVariants?.en || "",
  duration: e.duration || "",
  date: e.date || "2026",
  coverImage: e.image,
  ...(e.languageVariants ? {
    altYoutubeId: e.languageVariants.es,
    altLanguage: "ES",
    altDuration: e.languageVariants.esDuration,
  } : {}),
}));

// ─── Newsletters (The Naiad) , kept separate for Newsletter page ──
export interface Newsletter {
  issue: number;
  title: string;
  subtitle: string;
  date: string;
  slug: string;
  content: string;
}

export const newsletters: Newsletter[] = [
  {
    issue: 3,
    title: "Austral Skies, Tapati Rapa Nui & Nayara Horizons",
    subtitle: "Austral skies, Tapati Rapa Nui, and the launch of Nayara Horizons: Beyond Travel",
    date: "February 2026",
    slug: "2026-02",
    content: `Austral skies, Tapati Rapa Nui, and the launch of Nayara Horizons: Beyond Travel.`,
  },
  {
    issue: 4,
    title: "Nayara Springs: Costa Rica's First Three MICHELIN Key Resort",
    subtitle: "Seven MICHELIN Keys. Three Countries. One Newsletter.",
    date: "November 2025",
    slug: "2025-11",
    content: `Seven MICHELIN Keys. Three Countries. One Newsletter.`,
  },
  {
    issue: 11,
    title: "Discover What 2025 Holds at Nayara Resorts",
    subtitle: "From the Tapati Festival to other unforgettable moments",
    date: "January 2025",
    slug: "2025-01",
    content: `Experience 2025: From the Tapati Festival to other unforgettable moments.`,
  },
  {
    issue: 10,
    title: "An Online Experience Transformed, Landscapes Reimagined & Culture Revitalized",
    subtitle: "Experience Nayara's new website, Rapa Nui's revival, & Atacama's artisan heritage",
    date: "December 2024",
    slug: "2024-12",
    content: `Experience Nayara's new website, Rapa Nui's revival, and Atacama's artisan heritage.`,
  },
  {
    issue: 9,
    title: "A Taste of Adventure: New Ways to Stay, Reflect, and Explore",
    subtitle: "Ancestral Weddings, Cool-cations, Wellness Wisdom, Split Stays in Bocas",
    date: "November 2024",
    slug: "2024-11",
    content: `Ancestral Weddings, Cool-cations, Wellness Wisdom, Split Stays in Bocas.`,
  },
  {
    issue: 8,
    title: "Travel Intentionally: Wellness, Wonder, and a Fearless Spirit",
    subtitle: "From top resort honors to wellness escapes and fearless journeys",
    date: "October 2024",
    slug: "2024-10",
    content: `From top resort honors to wellness escapes and fearless journeys.`,
  },
  {
    issue: 7,
    title: "How Nayara Resorts is Transforming Luxury in Latin America",
    subtitle: "From rainforest romance to desert rituals",
    date: "September 2024",
    slug: "2024-09",
    content: `From rainforest romance to desert rituals, see what's new at Nayara this month.`,
  },
  {
    issue: 6,
    title: "The Art of Sloth Time , The New Currency of Luxury",
    subtitle: "How cuisine, wellness, and nature are redefining meaningful travel",
    date: "August 2024",
    slug: "2024-08",
    content: `How cuisine, wellness, and nature are redefining meaningful travel at Nayara.`,
  },
  {
    issue: 5,
    title: "7 MICHELIN Keys. 3 Countries. 1 Newsletter.",
    subtitle: "World Wildlife Day, International Women's Day, and our 7 MICHELIN Keys",
    date: "March 2024",
    slug: "2024-03",
    content: `This month we celebrate World Wildlife Day, International Women's Day, and our 7 MICHELIN Keys.`,
  },
];

// ─── Pillars & Destinations (legacy , kept for backward compat) ──
export const PILLARS = [
  "All", "Brand", "Sustainability", "Wellness", "Wildlife",
  "Culture", "Night Sky", "Adventure", "Romance", "The Table",
  "Family", "Solo Travel", "Awards",
] as const;

export const DESTINATIONS = [
  "All", "Atacama", "Arenal", "Hangaroa", "Bocas del Toro",
] as const;
