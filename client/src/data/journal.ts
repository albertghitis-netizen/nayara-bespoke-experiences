/*
 * JOURNAL DATA — Blog articles, newsletters, and podcast episodes
 * Comprehensive content hub for the Nayara Journal page
 */

// ─── Types ────────────────────────────────────────────────────
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

export interface Newsletter {
  issue: number;
  title: string;
  subtitle: string;
  date: string;
  slug: string;
  content: string;
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
}

// ─── Pillars (content categories) ─────────────────────────────
export const PILLARS = [
  "All",
  "Brand",
  "Sustainability",
  "Wellness",
  "Wildlife",
  "Culture",
  "Night Sky",
  "Adventure",
  "Romance",
  "The Table",
  "Family",
  "Solo Travel",
  "Awards",
] as const;

export const DESTINATIONS = [
  "All",
  "Atacama",
  "Arenal",
  "Hangaroa",
  "Bocas del Toro",
] as const;

// ─── Fallback image for posts without og:image ───────────────
const FALLBACK_IMG = "https://blog.nayararesorts.com/hubfs/2-Nov-05-2025-03-44-38-2049-AM.png";

// ─── Blog Posts (all 40 KEEP articles) ────────────────────────
export const blogPosts: BlogPost[] = [
  {
    id: "latin-america-luxury-brand",
    title: "Why Nayara Resorts Is Latin America's Leading Luxury Brand",
    url: "https://blog.nayararesorts.com/rom-deadly-sin-to-rainforest-royalty-the-soul-of-nayara",
    pillar: "Brand",
    destination: "All",
    image: "https://blog.nayararesorts.com/hubfs/2-Nov-05-2025-03-44-38-2049-AM.png",
    excerpt: "Nayara Resorts is recognized as one of Latin America's leading luxury hotel brands, defined by nature, cultural connection, and place-based hospitality.",
    featured: true,
  },
  {
    id: "7-michelin-keys",
    title: "7 MICHELIN Keys. 3 Countries. 1 Standard of Excellence",
    url: "https://blog.nayararesorts.com/7-michelin-keys-3-countries-1-commitment",
    pillar: "Awards",
    destination: "All",
    image: "https://blog.nayararesorts.com/hubfs/E056D1CD-5240-40E5-8567-21240563F763%203.jpg",
    excerpt: "Nayara Resorts earns seven MICHELIN Keys across three countries — a testament to exceptional character, service, and sense of place.",
    featured: true,
  },
  {
    id: "travel-trends-2026",
    title: "The Top 10 Travel Trends of 2026",
    url: "https://blog.nayararesorts.com/the-top-10-travel-trends-of-2026",
    pillar: "Brand",
    destination: "All",
    image: "https://blog.nayararesorts.com/hubfs/2-Aug-18-2025-09-54-44-4739-PM.png",
    excerpt: "From regenerative travel to digital detox, discover the trends shaping luxury hospitality in 2026 and how Nayara Resorts leads the way.",
  },
  {
    id: "golden-age-latin-america",
    title: "A New Golden Age of Luxury Travel in Latin America",
    url: "https://blog.nayararesorts.com/a-new-golden-age-of-luxury-travel-in-latin-america-nayara-leading-the-way",
    pillar: "Brand",
    destination: "All",
    image: "https://blog.nayararesorts.com/hubfs/2-Nov-05-2025-03-44-38-2049-AM.png",
    excerpt: "Latin America is experiencing a renaissance in luxury travel. Nayara Resorts is at the forefront, redefining what it means to travel with purpose.",
  },
  {
    id: "lujo-despacio",
    title: "Nayara Resorts: Donde el Lujo se Vive Despacio",
    url: "https://blog.nayararesorts.com/nayara-resorts-donde-el-lujo-se-vive-despacio",
    pillar: "Brand",
    destination: "All",
    image: FALLBACK_IMG,
    excerpt: "El lujo en Nayara no se mide en hilos de oro, sino en la quietud de un amanecer sobre el volcán, en el murmullo del bosque tropical.",
  },
  {
    id: "seven-elements",
    title: "Defining Memories for a Lifetime: Nayara's Seven Elements of Place",
    url: "https://blog.nayararesorts.com/nayaras-seven-elements-of-place",
    pillar: "Brand",
    destination: "All",
    image: FALLBACK_IMG,
    excerpt: "Every Nayara property is defined by seven elements that create a sense of place — from landscape and architecture to cuisine and community.",
  },
  {
    id: "sunlit-sustainability",
    title: "Sunlit Sustainability: Nature-Powered",
    url: "https://blog.nayararesorts.com/sunlit-sustainability-powered-by-nature-clone",
    pillar: "Sustainability",
    destination: "All",
    image: "https://blog.nayararesorts.com/hubfs/4-Aug-15-2025-06-36-01-1516-PM.png",
    excerpt: "Explore how Nayara Resorts harnesses solar power for sustainable luxury, from the Atacama Desert to Easter Island, Costa Rica, and Bocas del Toro.",
  },
  {
    id: "rooted-in-community",
    title: "Rooted in Community: Human Hospitality",
    url: "https://blog.nayararesorts.com/rooted-in-community-the-human-side-of-hospitality",
    pillar: "Sustainability",
    destination: "All",
    image: "https://blog.nayararesorts.com/hubfs/IMG_8179.jpg",
    excerpt: "Explore how Nayara Resorts' commitment to community and regenerative travel transforms lives and landscapes across Costa Rica, Panama, Chile, and Easter Island.",
  },
  {
    id: "one-ocean-planet",
    title: "Nayara Resorts Partners with One Ocean Planet",
    url: "https://blog.nayararesorts.com/nayara-resorts-partners-with-one-ocean-planet",
    pillar: "Sustainability",
    destination: "Bocas del Toro",
    image: "https://blog.nayararesorts.com/hubfs/IMG_7497.jpg",
    excerpt: "Nayara Bocas del Toro partners with One Ocean Planet for marine conservation, protecting the Caribbean's coral reefs and marine ecosystems.",
  },
  {
    id: "nature-based-wellness-colors",
    title: "Nature-Based Wellness by Colors: Brown, Black, Green, Blue",
    url: "https://blog.nayararesorts.com/nature-based-wellness-at-nayara-resorts-how-deserts-rainforests-oceans-and-night-skies-shape-human-health",
    pillar: "Wellness",
    destination: "All",
    image: "https://blog.nayararesorts.com/hubfs/NAYARA%20BOCAS%20DEL%20TORO-42.jpg",
    excerpt: "Discover holistic wellness at Nayara Resorts, where nature's tranquility — forest, desert, and sea — revitalizes mind, body, and spirit.",
  },
  {
    id: "hot-springs-plunge-pools",
    title: "Private Villas and Hot-Springs Plunge Pools: The History & Science",
    url: "https://blog.nayararesorts.com/the-history-and-science-of-private-villas-hot-springs-plunge-pools",
    pillar: "Wellness",
    destination: "Arenal",
    image: "https://blog.nayararesorts.com/hubfs/6-Dec-07-2025-04-10-58-5077-AM.png",
    excerpt: "From Roman thermae to Nayara Springs — the science and history behind private hot springs plunge pools and their profound wellness benefits.",
  },
  {
    id: "holistic-wellness",
    title: "Defining Nature-Based Wellness in Luxury Hospitality",
    url: "https://blog.nayararesorts.com/holistic-wellness-naturally",
    pillar: "Wellness",
    destination: "All",
    image: "https://blog.nayararesorts.com/hubfs/1-Aug-11-2025-06-16-39-9925-PM.png",
    excerpt: "How Nayara Resorts is redefining wellness through nature-based experiences that go beyond the spa — into the landscape itself.",
  },
  {
    id: "ancient-wellness-easter-island",
    title: "Ancient Origins of Nature-Based Wellness: Lessons from Easter Island",
    url: "https://blog.nayararesorts.com/ancient-origins-of-nature-based-wellness-lessons-from-easter-island-and-polynesia",
    pillar: "Wellness",
    destination: "Hangaroa",
    image: "https://blog.nayararesorts.com/hubfs/Im%C3%A1genes%20BLOGS/Drawing%20from%20Time",
    excerpt: "Easter Island's Polynesian heritage holds ancient wellness wisdom — from ocean immersion to volcanic mineral baths and celestial navigation.",
  },
  {
    id: "wildlife-arenal-bocas",
    title: "Wildlife Conservation in Arenal and Bocas del Toro",
    url: "https://blog.nayararesorts.com/wildlife-conservation-in-arenal-and-bocas-del-toro",
    pillar: "Wildlife",
    destination: "Arenal",
    image: "https://blog.nayararesorts.com/hubfs/Swimming-Sloth-1024x683.jpg",
    excerpt: "From sloths to sea turtles — how Nayara Resorts protects wildlife across Costa Rica's rainforests and Panama's Caribbean islands.",
  },
  {
    id: "wildlife-atacama-easter-island",
    title: "Wildlife Conservation in Chile's Atacama Desert and Easter Island",
    url: "https://blog.nayararesorts.com/wildlife-conservation-in-chiles-atacama-desert-and-easter-island",
    pillar: "Wildlife",
    destination: "Atacama",
    image: "https://blog.nayararesorts.com/hubfs/Imported_Blog_Media/Hangaroa-Horses-2048x13",
    excerpt: "Vicuñas, flamingos, and endemic species — conservation efforts protecting Chile's most fragile ecosystems.",
  },
  {
    id: "biodensity-underwater",
    title: "Biodensity, Underwater Mountains, and More",
    url: "https://blog.nayararesorts.com/biodensity-underwater-mountains-and-more-a-different-perspective-on-our-ecosystems",
    pillar: "Wildlife",
    destination: "Bocas del Toro",
    image: "https://blog.nayararesorts.com/hubfs/Im%C3%A1genes%20BLOGS/Biodensity%2c%20Underwater",
    excerpt: "A deep dive into the marine biodensity of Bocas del Toro — underwater mountains, coral reefs, and the ecosystems that sustain them.",
  },
  {
    id: "collapse-maya-rapanui",
    title: "A Collapse That Wasn't: What the Maya and Rapa Nui Teach Us",
    url: "https://blog.nayararesorts.com/a-collapse-that-wasnt-a-collapse",
    pillar: "Culture",
    destination: "Hangaroa",
    image: "https://blog.nayararesorts.com/hubfs/Photo%20Jan%2014%202026%2c%2007%2042%2012.j",
    excerpt: "The Maya and Rapa Nui civilizations didn't collapse — they adapted. What their resilience teaches us about climate, survival, and cultural continuity.",
  },
  {
    id: "solo-travel-female",
    title: "The Future of Solo Travel is Female",
    url: "https://blog.nayararesorts.com/the-future-of-solo-travel-is-female",
    pillar: "Solo Travel",
    destination: "All",
    image: "https://blog.nayararesorts.com/hubfs/Im%C3%A1genes%20BLOGS/The%20Future%20of%20S",
    excerpt: "Women are leading the solo travel revolution. Discover how Nayara Resorts creates safe, empowering, and transformative experiences for solo female travelers.",
  },
  {
    id: "family-travel",
    title: "Creating Unforgettable Family Travel with Nayara",
    url: "https://blog.nayararesorts.com/window-to-the-wild-arenal-volcano-family-vacations-with-nayara-gardens-and-nayara-tented-camp",
    pillar: "Family",
    destination: "All",
    image: "https://blog.nayararesorts.com/hubfs/Im%C3%A1genes%20BLOGS/Nayara%20Resorts%20(6",
    excerpt: "From volcano hikes to wildlife encounters — how Nayara creates family vacations that inspire wonder and connection across generations.",
  },
  {
    id: "nayara-by-night",
    title: "Nayara by Night: Of Moon and Stars",
    url: "https://blog.nayararesorts.com/nayara-by-night-of-moon-and-stars",
    pillar: "Night Sky",
    destination: "All",
    image: "https://blog.nayararesorts.com/hubfs/Im%C3%A1genes%20BLOGS/2025/Moon.jpg",
    excerpt: "When the sun sets, Nayara transforms. From the Atacama's observatory to Bocas del Toro's bioluminescent bays — the night reveals a different world.",
  },
  {
    id: "pura-vida",
    title: "Pura Vida and the Science of Why Costa Rica Feels Different",
    url: "https://blog.nayararesorts.com/pura-vida",
    pillar: "Culture",
    destination: "Arenal",
    image: "https://blog.nayararesorts.com/hubfs/IMG_9102.jpg",
    excerpt: "Pura Vida isn't just a saying — it's a measurable phenomenon. The science behind why Costa Rica consistently ranks among the happiest places on Earth.",
    featured: true,
  },
  {
    id: "womens-empowerment",
    title: "Women's Empowerment Through Housing in Costa Rica's La Fortuna",
    url: "https://blog.nayararesorts.com/womens-empowerment-through-housing-in-costa-ricas-la-fortuna",
    pillar: "Sustainability",
    destination: "Arenal",
    image: "https://blog.nayararesorts.com/hubfs/PHOTO-2026-03-02-19-55-27.jpg",
    excerpt: "How Nayara Resorts is building homes and empowering women in La Fortuna through community-driven housing initiatives.",
  },
  {
    id: "adventures-in-flavor",
    title: "Adventures in Flavor — Costa Rica",
    url: "https://blog.nayararesorts.com/nayara-arenals-adventures-in-flavor",
    pillar: "The Table",
    destination: "Arenal",
    image: "https://blog.nayararesorts.com/hubfs/WhatsApp%20Image%202025-04-30%20at%2015-48-",
    excerpt: "From farm to table in the Arenal rainforest — how Nayara's chefs transform local ingredients into extraordinary dining experiences.",
  },
  {
    id: "arenal-timeless-wonder",
    title: "Arenal, Costa Rica: A Timeless Natural Wonder",
    url: "https://blog.nayararesorts.com/arenal-costa-rica-a-timeless-natural-wonder",
    pillar: "Culture",
    destination: "Arenal",
    image: FALLBACK_IMG,
    excerpt: "Arenal Volcano has shaped the landscape and culture of northern Costa Rica for millennia. Discover the geology, ecology, and spirit of this iconic destination.",
  },
  {
    id: "toucans-arenal",
    title: "Meeting The Toucans of Arenal Rainforest",
    url: "https://blog.nayararesorts.com/meeting-the-toucans-of-arenal-rainforest-who-they-are-and-how-to-see-them",
    pillar: "Wildlife",
    destination: "Arenal",
    image: "https://blog.nayararesorts.com/hubfs/Im%C3%A1genes%20BLOGS/Meeting%20The%20Touca",
    excerpt: "Six species of toucans call the Arenal rainforest home. Learn who they are, where to find them, and why they matter.",
  },
  {
    id: "conde-nast-bocas",
    title: "Why Condé Nast Traveler Named Nayara Bocas del Toro #1",
    url: "https://blog.nayararesorts.com/why-conde-nast-traveler-named-nayara-bocas-del-toro-1-in-central-and-south-america",
    pillar: "Awards",
    destination: "Bocas del Toro",
    image: "https://blog.nayararesorts.com/hubfs/8-Oct-07-2025-04-49-30-6724-AM.png",
    excerpt: "Condé Nast Traveler readers voted Nayara Bocas del Toro the #1 resort in Central and South America. Here's why.",
  },
  {
    id: "bocas-facts",
    title: "5 Interesting Facts About Bocas del Toro, Panama",
    url: "https://blog.nayararesorts.com/5-interesting-facts-about-bocas-del-toro-panama",
    pillar: "Culture",
    destination: "Bocas del Toro",
    image: "https://blog.nayararesorts.com/hubfs/Im%C3%A1genes%20BLOGS/5%20Interesting%20Fac",
    excerpt: "Discover the history, culture, and natural beauty of Bocas del Toro, Panama — from its colonial past to its bioluminescent bays.",
  },
  {
    id: "treehouse-dreams",
    title: "The Treehouse of Your Dreams",
    url: "https://blog.nayararesorts.com/nayarabocasdeltorotreehouse",
    pillar: "Brand",
    destination: "Bocas del Toro",
    image: FALLBACK_IMG,
    excerpt: "Nayara Bocas del Toro's treehouse villas redefine luxury — suspended above the Caribbean, surrounded by mangroves and starlight.",
  },
  {
    id: "floating-paradise",
    title: "Your Floating Paradise in the Galápagos of the Caribbean",
    url: "https://blog.nayararesorts.com/your-floating-paradise-in-the-galapagos-of-the-caribbean-nayara-bocas-del-toro",
    pillar: "Brand",
    destination: "Bocas del Toro",
    image: "https://blog.nayararesorts.com/hubfs/Nayara%20Bocas%20del%20Toro%20(2).webp",
    excerpt: "Prepare to embark on a journey where every moment is a testament to the breathtaking allure of Bocas del Toro's Caribbean archipelago.",
  },
  {
    id: "mars-atacama",
    title: "Why the Atacama Desert is Mars on Earth",
    url: "https://blog.nayararesorts.com/mars-atacama-final-frontier-of-travel",
    pillar: "Culture",
    destination: "Atacama",
    image: "https://blog.nayararesorts.com/hubfs/5-Jan-28-2026-12-18-54-4709-AM.png",
    excerpt: "How the Atacama Desert shapes the future of regenerative travel. Learn how science, community partnerships, and ancient landscapes converge.",
    featured: true,
  },
  {
    id: "stargazing-atacama",
    title: "Why Nayara Alto Atacama Is the Best Stargazing Resort",
    url: "https://blog.nayararesorts.com/best-stargazing-resort-atacama-desert",
    pillar: "Night Sky",
    destination: "Atacama",
    image: "https://blog.nayararesorts.com/hubfs/iotw2334a_crop.jpg",
    excerpt: "Discover why the Atacama has the clearest night skies on Earth and how Nayara Alto Atacama's private observatory unlocks the cosmos.",
  },
  {
    id: "winter-atacama",
    title: "Why Winter is the Best Time to Experience the Atacama Desert",
    url: "https://blog.nayararesorts.com/why-winter-is-the-best-time-to-experience-the-atacama-desert",
    pillar: "Culture",
    destination: "Atacama",
    image: "https://blog.nayararesorts.com/hubfs/Astrotourism.jpg",
    excerpt: "Winter reveals the Atacama at its clearest. Cooler days, longer nights, and exceptional atmospheric clarity make winter the ideal season.",
  },
  {
    id: "romance-atacama",
    title: "Why The Atacama Desert Winter is Built for Romance",
    url: "https://blog.nayararesorts.com/why-nayara-alto-atacama-is-the-best-resort-in-the-atacama-desert-for-couples",
    pillar: "Romance",
    destination: "Atacama",
    image: FALLBACK_IMG,
    excerpt: "Desert silence, mineral baths under the stars, and the world's clearest skies — why the Atacama winter is the ultimate romantic escape.",
  },
  {
    id: "oasis-atacama",
    title: "What Defines The Best Place to Stay in the Atacama Desert",
    url: "https://blog.nayararesorts.com/best-place-to-stay-atacama-desert-oasis",
    pillar: "Brand",
    destination: "Atacama",
    image: "https://blog.nayararesorts.com/hubfs/3-Nov-26-2025-02-34-59-4966-AM.png",
    excerpt: "In the Atacama, location matters. Learn why staying inside a true desert oasis transforms comfort, recovery, and the entire experience.",
  },
  {
    id: "packing-atacama",
    title: "What to Pack for the Atacama Desert's Extremes",
    url: "https://blog.nayararesorts.com/what-to-pack-for-the-atacama-deserts-extreme-beauty",
    pillar: "Culture",
    destination: "Atacama",
    image: "https://blog.nayararesorts.com/hubfs/Im%C3%A1genes%20BLOGS/Destination%205.jpg",
    excerpt: "Essential packing tips for a comfortable and adventurous trip to the Atacama Desert, from day hikes to stargazing nights.",
  },
  {
    id: "edge-habitability",
    title: "The Atacama Desert: At the Edge of Habitability",
    url: "https://blog.nayararesorts.com/nayara-alto-atacama-exploring-an-alien-landscape-from-the-lap-of-luxury",
    pillar: "Culture",
    destination: "Atacama",
    image: "https://blog.nayararesorts.com/hubfs/5-Jan-28-2026-12-18-54-4709-AM.png",
    excerpt: "Understanding the Atacama Desert: landscape, climate, and extremes. How life persists at the edge of habitability.",
  },
  {
    id: "climate-packing-all",
    title: "Climate, Conditions, and Packing Tips",
    url: "https://blog.nayararesorts.com/climate-conditions-and-packing-tips-for-each-of-the-nayara-resorts",
    pillar: "Culture",
    destination: "All",
    image: "https://blog.nayararesorts.com/hubfs/Im%C3%A1genes%20BLOGS/Nayara%20Resorts%20(1).jpg",
    excerpt: "A comprehensive guide to the climate and conditions at each Nayara Resort — what to expect and what to bring.",
  },
  {
    id: "hito-family-rapanui",
    title: "How Nayara Hangaroa Leads Regeneration on Rapa Nui",
    url: "https://blog.nayararesorts.com/walking-giants-the-hito-family-the-future-of-easter-island",
    pillar: "Sustainability",
    destination: "Hangaroa",
    image: "https://blog.nayararesorts.com/hubfs/9-Aug-11-2025-08-40-19-5669-PM.png",
    excerpt: "Rapa Nui's Hito family leads cultural and ecological regeneration. Learn how moai traditions, reforestation, and community shape the island's future.",
  },
  {
    id: "challenge-easter-island",
    title: "Challenge Easter Island's Outdoors with Nayara Hangaroa",
    url: "https://blog.nayararesorts.com/challenge-easter-islands-outdoors-with-nayara-hangaroa",
    pillar: "Adventure",
    destination: "Hangaroa",
    image: "https://blog.nayararesorts.com/hubfs/Im%C3%A1genes%20BLOGS/Challenge%20Easter%20Island%E2%80%99s%20Outdoors%20with%20Nayara%20Hangaroa%20(3)-1-1.jpeg",
    excerpt: "Discover the ultimate adventure on Easter Island — from trekking volcanoes to exploring ancient ceremonial sites.",
  },
  {
    id: "green-globe",
    title: "Setting the Standard: Green Globe Certification",
    url: "https://blog.nayararesorts.com/setting-the-standard-green-globe-certification",
    pillar: "Sustainability",
    destination: "All",
    image: "https://blog.nayararesorts.com/hubfs/Green%20globe-3-1.png",
    excerpt: "Discover how Nayara Resorts' Green Globe Certification underscores our commitment to sustainability across every property.",
  },
  {
    id: "tapati-festival",
    title: "The Tapati Rapa Nui Festival at Nayara Hangaroa",
    url: "https://blog.nayararesorts.com/the-tapati-rapa-nui-festival-at-nayara-hangaroa",
    pillar: "Culture",
    destination: "Hangaroa",
    image: "https://blog.nayararesorts.com/hubfs/9-Aug-11-2025-08-40-19-5669-PM.png",
    excerpt: "The Tapati Festival lights up Easter Island every February — music, dance, ancestral competitions, and the living spirit of Rapa Nui.",
  },
  {
    id: "fiery-heart-springs",
    title: "The Fiery Heart of Costa Rica: Life and Love at Nayara Springs",
    url: "https://blog.nayararesorts.com/the-fiery-heart-of-costa-ricas-rainforest-life-and-love-at-nayara-springs",
    pillar: "Romance",
    destination: "Arenal",
    image: FALLBACK_IMG,
    excerpt: "Where volcanic warmth meets rainforest serenity — the story of Nayara Springs and why it's the most romantic resort in Costa Rica.",
  },
  {
    id: "birdwatching-costa-rica",
    title: "Birdwatching in Costa Rica",
    url: "https://blog.nayararesorts.com/birdwatching-in-costa-rica",
    pillar: "Wildlife",
    destination: "Arenal",
    image: FALLBACK_IMG,
    excerpt: "Costa Rica is home to over 900 bird species. From resplendent quetzals to six species of toucans — a birdwatcher's paradise.",
  },
  {
    id: "private-island-bocas",
    title: "The Private Island Paradise of Bocas del Toro",
    url: "https://blog.nayararesorts.com/the-private-island-paradise-of-bocas-del-toro",
    pillar: "Brand",
    destination: "Bocas del Toro",
    image: FALLBACK_IMG,
    excerpt: "A private island sanctuary in Panama's Caribbean archipelago — overwater villas, bioluminescent bays, and pristine coral reefs.",
  },
];

// ─── Newsletters (The Naiad) ──────────────────────────────────
export const newsletters: Newsletter[] = [
  {
    issue: 3,
    title: "Austral Skies, Tapati Rapa Nui & Nayara Horizons",
    subtitle: "Austral skies, Tapati Rapa Nui, and the launch of Nayara Horizons: Beyond Travel",
    date: "February 2026",
    slug: "2026-02",
    content: `Austral skies, Tapati Rapa Nui, and the launch of Nayara Horizons: Beyond Travel.
This month we look up at the austral skies of the Atacama—home to the clearest night skies on Earth and Nayara Alto Atacama's private observatory.

We celebrate the Tapati Rapa Nui festival, where the ancient traditions of Easter Island come alive in a spectacular display of culture, competition, and community.

Nayara Horizons: Beyond Travel
We're proud to announce the launch of Nayara Horizons: Beyond Travel—our new video podcast series featuring intimate conversations with the people who shape our world. Our first two episodes explore the guardians and archaeologists of Rapa Nui.

Stargazing in the Atacama
The Atacama Desert offers the clearest night skies on Earth. At Nayara Alto Atacama, our private observatory and expert-guided stargazing sessions reveal the southern hemisphere's most spectacular celestial displays—from the Milky Way to distant galaxies visible only from this corner of the planet.`,
  },
  {
    issue: 4,
    title: "Nayara Springs: Costa Rica's First Three MICHELIN Key Resort",
    subtitle: "Seven MICHELIN Keys. Three Countries. One Newsletter.",
    date: "November 2025",
    slug: "2025-11",
    content: `Seven MICHELIN Keys. Three Countries. One Newsletter.
Nayara Springs has been awarded Three MICHELIN Keys—the highest distinction in the MICHELIN Guide for hotels—making it the first and only property in Costa Rica to receive this honor.

This recognition places Nayara Springs among an elite group of just 143 properties worldwide, celebrated for their extraordinary character, exceptional service, and ability to create truly unforgettable stays.

Meanwhile, Nayara Bocas del Toro and Nayara Alto Atacama each earned Two MICHELIN Keys, bringing our total to seven across three countries.

What Are MICHELIN Keys?
Unlike MICHELIN Stars, which recognize culinary excellence, MICHELIN Keys evaluate the overall hotel experience—architecture, service, character, and the ability to create an extraordinary stay. Three Keys represents the pinnacle: an exceptional stay that is worth the journey itself.`,
  },
  {
    issue: 11,
    title: "Discover What 2025 Holds at Nayara Resorts",
    subtitle: "From the Tapati Festival to other unforgettable moments",
    date: "January 2025",
    slug: "2025-01",
    content: `Experience 2025: From the Tapati Festival to other unforgettable moments.
Welcome to the first Nayara Newsletter of 2025. A new year brings new opportunities for adventure, connection, and sustainability. As we embrace 2025, we invite you to discover the unforgettable moments, meaningful initiatives, and exciting new experiences that await across our resorts.

The Tapati Festival at Nayara Hangaroa
Every February, Rapa Nui comes alive with the Tapati Festival—a vibrant celebration of ancestral traditions, music, dance, and athletic competitions that honor the island's rich Polynesian heritage. Guests at Nayara Hangaroa have a front-row seat to this extraordinary cultural event, immersing themselves in the spirit of the island while enjoying world-class hospitality.

Sustainability in Action
At Nayara, sustainability isn't a buzzword—it's a way of life. From our S Certification at Alto Atacama to our Green Globe certification in Costa Rica, we continue to lead the way in responsible luxury travel. In 2025, we're expanding our coral restoration partnership in Bocas del Toro and deepening our commitment to regenerative tourism across all properties.

New Experiences Across Our Resorts
Whether it's stargazing in the Atacama Desert, exploring the cloud forests of Arenal, or diving into the crystal-clear waters of Bocas del Toro, 2025 brings a wealth of new curated experiences designed to connect you more deeply with each destination.

We are grateful for your continued trust and for being part of our Nayara family. We look forward to sharing another year of unforgettable moments with you.`,
  },
  {
    issue: 10,
    title: "An Online Experience Transformed, Landscapes Reimagined & Culture Revitalized",
    subtitle: "Experience Nayara's new website, Rapa Nui's revival, & Atacama's artisan heritage",
    date: "December 2024",
    slug: "2024-12",
    content: `Experience Nayara's new website, Rapa Nui's revival, and Atacama's artisan heritage.
As the seasons shift, so does our sense of renewal—a theme woven into this edition of the Nayara Newsletter.

This month, we explore the deep connections between culture and nature that define our resorts—from Atacama's artisan heritage to Rapa Nui's cultural revival, and the launch of our reimagined digital experience.

A New Digital Home
We're thrilled to unveil our completely redesigned website—a digital experience that captures the essence of Nayara across all six properties. Explore immersive destination pages, discover curated experiences, and plan your next journey with ease.

Rapa Nui's Cultural Revival
On Easter Island, a cultural renaissance is underway. The Hitorangi family and local communities are breathing new life into ancestral traditions, from woodcarving to navigation. Nayara Hangaroa stands at the heart of this revival, supporting cultural preservation while offering guests an authentic connection to the island's living heritage.

Atacama's Artisan Heritage
In the Atacama Desert, the ancient art of weaving endures at Casa Telar. Here, guests can meet skilled artisans, learn about ancestral techniques, and find handcrafted textiles that carry centuries of tradition. It's a journey into the soul of the desert—where every thread tells a story of resilience and beauty.

Looking Ahead
As we close out 2024, we reflect on a year of extraordinary growth, meaningful connections, and a deepened commitment to the places and people that make Nayara special. Thank you for being part of this journey.`,
  },
  {
    issue: 9,
    title: "A Taste of Adventure: New Ways to Stay, Reflect, and Explore",
    subtitle: "Ancestral Weddings, Cool-cations, Wellness Wisdom, Split Stays in Bocas",
    date: "November 2024",
    slug: "2024-11",
    content: `Ancestral Weddings, Cool-cations, Wellness Wisdom, Split Stays in Bocas, and a celebrated Green Globe Milestone—welcome to the world of Nayara.
This month's newsletter celebrates contrast—the kind that transforms a trip into a story worth telling.

Ancestral Weddings on Rapa Nui
Imagine exchanging vows under the gaze of the Moai, surrounded by the raw beauty of Easter Island. Nayara Hangaroa now offers ancestral wedding ceremonies that blend Rapa Nui tradition with modern luxury. It's a celebration unlike any other—a love story rooted in legend.

Cool-cations in Costa Rica
Escape the heat with a Cool-cation at Nayara Gardens, Springs, or Tented Camp. The Arenal region's lush cloud forests offer natural air conditioning, hot springs, and the kind of tranquility that recharges the soul.

Wellness Wisdom
Our wellness programs continue to evolve, blending ancient healing traditions with modern science. From sound healing sessions to volcanic mud treatments, every experience is designed to restore balance.

Green Globe Milestone
We're proud to announce our continued Green Globe certification—a testament to our commitment to sustainable operations across all properties.`,
  },
  {
    issue: 8,
    title: "Travel Intentionally: Wellness, Wonder, and a Fearless Spirit",
    subtitle: "From top resort honors to wellness escapes and fearless journeys",
    date: "October 2024",
    slug: "2024-10",
    content: `From top resort honors to wellness escapes and fearless journeys, here's what's inspiring us this month.
This month's Nayara Newsletter takes you from island accolades to rainforest retreats, with highlights that nourish the body, inspire the spirit, and celebrate our deep connection to nature.

Whether you're planning your next escape or simply dreaming of it, discover what's new at Nayara—including a look at the bold, intentional, and increasingly female future of solo travel.

Wellness Elevated
Unplug and reconnect with our immersive Wellness Escape, where rest is intentional and the rhythms of nature guide every experience. Each night includes breakfast, dinner and your choice of a holistic spa treatment—Swedish, mud, aromatherapy, or deep tissue—and a private wellness activity such as yoga, sound healing, or breathwork. It's all about slowing down, tuning in, and embracing the healing power of place.

Galerie's Top 12 Spas
To see why our Sukha Spa is among the world's 12 best, learn more on our Galerie Magazine feature.`,
  },
  {
    issue: 7,
    title: "How Nayara Resorts is Transforming Luxury in Latin America",
    subtitle: "From rainforest romance to desert rituals",
    date: "September 2024",
    slug: "2024-09",
    content: `From rainforest romance to desert rituals, see what's new at Nayara this month.
The July edition of the Nayara Newsletter returns with stories from across Latin America that reflect a new vision of luxury—one rooted in nature, culture, and heartfelt connection. From lush rainforests to windswept deserts, our properties continue to redefine what meaningful travel can look and feel like.

Redefining Luxury in Latin America
Across Latin America, a new golden age of luxury is emerging—one defined by immersion, intention, and a deep sense of place. At Nayara, we're honored to lead this shift. From rewilding rainforests in Costa Rica to architecture in harmony with the landscape on Easter Island and Atacama, our properties set a new standard: hospitality that is grounded, generous, and deeply connected to its surroundings.

The New Latin American Luxury
Read more in our latest Nayara Journal article about how Latin America is redefining what luxury means for the modern traveler.`,
  },
  {
    issue: 6,
    title: "The Art of Sloth Time — The New Currency of Luxury",
    subtitle: "How cuisine, wellness, and nature are redefining meaningful travel",
    date: "August 2024",
    slug: "2024-08",
    content: `How cuisine, wellness, and nature are redefining meaningful travel at Nayara.
Luxury has evolved. No longer defined by opulence—its true measure is time, a finite resource that affords rich and poor the same 24 hours a day.

Our brand ambassadors have known this truth all along.

The Art of Sloth Time
Enter our story's protagonist, the oft-misunderstood sloth—who chose September 4, National Wildlife Day, for his grand entrance. Slow, deliberate, right on time.

It has shed the stain of deadly sin to become rainforest royalty and a pop-culture cause célèbre—with film roles and its very own social-media holiday.

As it turns out, sloths aren't lazy at all—they're nature's ultimate strategist, the Machiavelli of the mangroves.

The vicuñas of the Atacama lack the star power, but they thrive under the even harsher laws of the desert.

And then there are the stone giants of Easter Island. If vicuñas move slowly, and sloths slower still, the Moai don't move at all. Yet, they've outlasted empires as silent guardians of the singular Rapa Nui culture.

True luxury isn't speed or spectacle. It is knowing when to slow down, belong fully to place, and spend our most finite resource: time—meaningfully.`,
  },
  {
    issue: 5,
    title: "7 MICHELIN Keys. 3 Countries. 1 Newsletter.",
    subtitle: "World Wildlife Day, International Women's Day, and our 7 MICHELIN Keys",
    date: "March 2024",
    slug: "2024-03",
    content: `This month we celebrate World Wildlife Day, International Women's Day, and our 7 MICHELIN Keys.
March brings two global observances in seven days: World Wildlife Day on March 3 and International Women's Day on March 8.

One asks what we protect. The other asks who we protect.

At Nayara, the answer to both questions is the same: the human and ecological living systems that make everything else possible.

Seven Keys. One Standard of Excellence
The MICHELIN Guide does not rank hotels. It recognizes them—or it does not.

Of 7,000 properties evaluated worldwide, only 143 received 3 Keys. Nayara Springs is the only one in Costa Rica. Nayara Bocas del Toro and Nayara Alto Atacama each earned 2.

Here is what the most independent evaluators in hospitality actually measure.

The Story Behind The Keys
Learn more about what MICHELIN Keys mean and how they differ from Stars in our Journal.`,
  },
];

// ─── Podcast Episodes (Nayara Horizons) ───────────────────────
export const podcastEpisodes: PodcastEpisode[] = [
  {
    id: "hitorangi-rapanui",
    title: "The Guardians of Rapa Nui: A Conversation with the Hitorangi Family",
    guest: "Hitorangi Family",
    description: "An intimate conversation with the Hitorangi family about preserving Rapa Nui's cultural heritage, the future of Easter Island, and what it means to be guardians of one of the world's most remote civilizations.",
    youtubeId: "FRPVRcUTNmk",
    duration: "45 min",
    date: "2026",
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-warrior-portrait_572aaf06.jpg",
  },
  {
    id: "archaeologist-rapanui",
    title: "Uncovering Rapa Nui: An Archaeologist's Perspective",
    guest: "Archaeologist",
    description: "A deep dive into the archaeological mysteries of Easter Island — from moai construction techniques to new discoveries that challenge everything we thought we knew about Rapa Nui civilization.",
    youtubeId: "qFVLTTJa7hE",
    duration: "38 min",
    date: "2026",
  },
  {
    id: "leo-luxury-travel-innovators",
    title: "Pioneering Sustainable Luxury with Nayara Resorts",
    guest: "Leo Ghitis, CEO & Co-Founder",
    description: "Leo Ghitis explores the journey of building Nayara Resorts — a brand that seamlessly blends ultra-luxury with profound environmental stewardship across Costa Rica, Panama, and Chile. From reforesting a decimated mountain to achieving carbon neutrality, discover how Nayara is redefining experiential travel.",
    youtubeId: "7l072Yr__pE",
    duration: "8 min",
    date: "2026",
  },
  {
    id: "leo-view-from-afar",
    title: "Redefining Luxury: Regenerative Travel and Social Impact",
    guest: "Leo Ghitis, CEO & Co-Founder",
    description: "Recorded live at ILTM Cannes, Leo Ghitis shares how Nayara Resorts is pioneering regenerative travel through ambitious environmental restoration and deep community support. From building housing for vulnerable women to powering an off-grid island resort in Panama, discover how meaningful connection is reshaping luxury hospitality.",
    youtubeId: "FPxFzOkKhbw",
    duration: "24 min",
    date: "2026",
  },
  {
    id: "leo-suite-success",
    title: "Pioneering Eco-Luxury: The Nayara Story",
    guest: "Leo Ghitis, Owner",
    description: "In this conversation with Suite Success host Katie Cline, Leo Ghitis traces his journey from real estate to hospitality and reveals how Nayara is setting the standard for regenerative travel — proving that true luxury can prioritize both sustainability and community empowerment across Costa Rica, Chile, and Panama.",
    youtubeId: "X_lTp6Jh8ag",
    duration: "26 min",
    date: "2026",
  },
  {
    id: "hangaroa-sustainability",
    title: "Hangaroa Sustainability Video",
    guest: "Nayara Resorts",
    description: "A look at Nayara Hangaroa's commitment to sustainability on Rapa Nui — from renewable energy and water conservation to supporting the local Rapanui community and preserving the island's fragile ecosystem.",
    youtubeId: "_M3ATv4I0B8",
    duration: "3 min",
    date: "2026",
  },
  {
    id: "atacama-sustainability",
    title: "Nayara Alto Atacama Sustainability Video",
    guest: "Nayara Resorts",
    description: "Discover how Nayara Alto Atacama operates sustainably in one of the driest deserts on Earth — from solar energy and water recycling to deep partnerships with the Atacameño communities that have called this landscape home for millennia.",
    youtubeId: "6cfkWsqWWc8",
    duration: "3 min",
    date: "2026",
  },
];
