/**
 * Sustainability initiatives per property/region.
 * Shared Costa Rica data used by all three CR properties.
 */

export interface Initiative {
  title: string;
  desc: string;
}

export interface SustainabilityVideo {
  title: string;
  guest: string;
  description: string;
  youtubeId: string;
  duration: string;
  /** Alternate language YouTube video ID (for ES/EN toggle) */
  altYoutubeId?: string;
  /** Alternate language label (e.g. "ES" or "EN") */
  altLanguage?: string;
  /** Alternate language duration */
  altDuration?: string;
}

export interface SustainabilityBlog {
  title: string;
  excerpt: string;
  image: string;
  url: string;
  /** If true, shows a "Coming Soon" badge instead of a link */
  comingSoon?: boolean;
}

export const sustainabilityData: Record<string, {
  headline: string;
  subtitle: string;
  heroOverlayColor: string;
  initiatives: Initiative[];
  videos?: SustainabilityVideo[];
  blogs?: SustainabilityBlog[];
}> = {
  /* ── Costa Rica (shared across Gardens, Springs, Tented Camp) ── */
  "costa-rica": {
    headline: "Protecting the Rainforest",
    subtitle: "Nayara Costa Rica",
    heroOverlayColor: "rgba(45, 106, 79, 0.75)",
    initiatives: [
      {
        title: "Rainforest Conservation",
        desc: "Protecting over 380 acres of primary and secondary rainforest surrounding the resort, providing critical habitat for hundreds of bird, mammal, and amphibian species in the Arenal Volcano region.",
      },
      {
        title: "Wildlife Corridors",
        desc: "Maintaining and expanding biological corridors that connect our property to Arenal Volcano National Park, ensuring safe passage for jaguars, ocelots, sloths, and other wildlife.",
      },
      {
        title: "Organic Gardens",
        desc: "Growing herbs, vegetables, and fruits in our on-site organic gardens, reducing food miles and providing the freshest ingredients for our five restaurants.",
      },
      {
        title: "Community Partnership",
        desc: "Supporting local communities in La Fortuna through employment, education programs, and cultural preservation initiatives that strengthen the region's social fabric.",
      },
    ],
    blogs: [
      {
        title: "Wildlife Conservation in Arenal and Bocas del Toro",
        excerpt: "From sloths to sea turtles — how Nayara Resorts protects wildlife across Costa Rica's rainforests and Panama's Caribbean islands.",
        image: "https://blog.nayararesorts.com/hubfs/Swimming-Sloth-1024x683.jpg",
        url: "https://blog.nayararesorts.com/wildlife-conservation-in-arenal-and-bocas-del-toro",
      },
      {
        title: "Meeting The Toucans of Arenal Rainforest",
        excerpt: "Six species of toucans call the Arenal rainforest home. Learn who they are, where to find them, and why they matter.",
        image: "https://blog.nayararesorts.com/hubfs/Im%C3%A1genes%20BLOGS/Meeting%20The%20Touca",
        url: "https://blog.nayararesorts.com/meeting-the-toucans-of-arenal-rainforest-who-they-are-and-how-to-see-them",
      },
      {
        title: "Birdwatching in Costa Rica",
        excerpt: "Costa Rica is home to over 900 bird species. From resplendent quetzals to six species of toucans — a birdwatcher's paradise.",
        image: "https://blog.nayararesorts.com/hubfs/Im%C3%A1genes%20BLOGS/Meeting%20The%20Touca",
        url: "https://blog.nayararesorts.com/birdwatching-in-costa-rica",
      },
      {
        title: "Women's Empowerment Through Housing in La Fortuna",
        excerpt: "How Nayara Resorts is building homes and empowering women in La Fortuna through community-driven housing initiatives.",
        image: "https://blog.nayararesorts.com/hubfs/PHOTO-2026-03-02-19-55-27.jpg",
        url: "https://blog.nayararesorts.com/womens-empowerment-through-housing-in-costa-ricas-la-fortuna",
      },
      {
        title: "Setting the Standard: Green Globe Certification",
        excerpt: "Discover how Nayara Resorts' Green Globe Certification underscores our commitment to sustainability across every property.",
        image: "https://blog.nayararesorts.com/hubfs/Green%20globe-3-1.png",
        url: "https://blog.nayararesorts.com/setting-the-standard-green-globe-certification",
      },
    ],
  },

  /* ── Alto Atacama ── */
  "alto-atacama": {
    headline: "Guardians of the Desert",
    subtitle: "Nayara Alto Atacama",
    heroOverlayColor: "rgba(139, 90, 60, 0.75)",
    initiatives: [
      {
        title: "Desert Preservation",
        desc: "Protecting the Atacama's unique ecosystem through sustainable tourism practices and habitat conservation programs.",
      },
      {
        title: "Water Stewardship",
        desc: "Minimizing water usage in the world's driest desert through advanced recycling and conservation technologies.",
      },
      {
        title: "Community Support",
        desc: "Supporting local communities through employment, education, and cultural preservation initiatives in the Atacama region.",
      },
      {
        title: "Carbon Neutral Operations",
        desc: "Committed to carbon neutrality through renewable energy, waste reduction, and offset programs.",
      },
    ],
    videos: [
      {
        title: "Nayara Alto Atacama Sustainability",
        guest: "Nayara Resorts",
        description: "How Nayara Alto Atacama operates sustainably in the driest desert on Earth — solar energy, adobe architecture, and 100% water reuse.",
        youtubeId: "6cfkWsqWWc8",
        duration: "3 min",
        altYoutubeId: "H9VxyDgv31U",
        altLanguage: "ES",
        altDuration: "1 min",
      },
    ],
    blogs: [
      {
        title: "Wildlife Conservation in Chile's Atacama Desert and Easter Island",
        excerpt: "Vicuñas, flamingos, and endemic species — conservation efforts protecting Chile's most fragile ecosystems.",
        image: "https://blog.nayararesorts.com/hubfs/Imported_Blog_Media/Hangaroa-Horses-2048x13",
        url: "https://blog.nayararesorts.com/wildlife-conservation-in-chiles-atacama-desert-and-easter-island",
      },
      {
        title: "Sunlit Sustainability: Nature-Powered",
        excerpt: "Explore how Nayara Resorts harnesses solar power for sustainable luxury, from the Atacama Desert to Easter Island.",
        image: "https://blog.nayararesorts.com/hubfs/4-Aug-15-2025-06-36-01-1516-PM.png",
        url: "https://blog.nayararesorts.com/sunlit-sustainability-powered-by-nature-clone",
      },
      {
        title: "Rooted in Community: Human Hospitality",
        excerpt: "Explore how Nayara Resorts' commitment to community and regenerative travel transforms lives and landscapes.",
        image: "https://blog.nayararesorts.com/hubfs/IMG_8179.jpg",
        url: "https://blog.nayararesorts.com/rooted-in-community-the-human-side-of-hospitality",
      },
    ],
  },

  /* ── Bocas del Toro ── */
  "bocas-del-toro": {
    headline: "Island Stewardship",
    subtitle: "Nayara Bocas del Toro",
    heroOverlayColor: "rgba(58, 107, 107, 0.75)",
    initiatives: [
      {
        title: "Marine Conservation",
        desc: "Protecting the coral reefs and marine ecosystems of the Bocas del Toro archipelago through reef monitoring, sustainable diving practices, and partnerships with marine biologists.",
      },
      {
        title: "Mangrove Restoration",
        desc: "Actively restoring and protecting the mangrove forests that surround our private island, providing critical nursery habitat for fish, crustaceans, and migratory birds.",
      },
      {
        title: "Plastic-Free Island",
        desc: "Committed to eliminating single-use plastics across the entire resort. All amenities, packaging, and operations are designed to minimize waste in this fragile island ecosystem.",
      },
      {
        title: "Indigenous Community Support",
        desc: "Partnering with the Ngäbe-Buglé indigenous communities of Bocas del Toro through fair employment, cultural exchange programs, and support for traditional crafts and practices.",
      },
    ],
    videos: [
      {
        title: "Coral Reef Restoration",
        guest: "Coming Soon",
        description: "A deep dive into Nayara Bocas del Toro's coral reef restoration program — protecting the marine ecosystems of Panama's Caribbean archipelago.",
        youtubeId: "",
        duration: "Coming Soon",
      },
    ],
    blogs: [
      {
        title: "Biodensity, Underwater Mountains, and More",
        excerpt: "A deep dive into the marine biodensity of Bocas del Toro — underwater mountains, coral reefs, and the ecosystems that sustain them.",
        image: "https://blog.nayararesorts.com/hubfs/Im%C3%A1genes%20BLOGS/Biodensity%2c%20Underwater",
        url: "https://blog.nayararesorts.com/biodensity-underwater-mountains-and-more-a-different-perspective-on-our-ecosystems",
      },
      {
        title: "Wildlife Conservation in Arenal and Bocas del Toro",
        excerpt: "From sloths to sea turtles — how Nayara Resorts protects wildlife across Costa Rica's rainforests and Panama's Caribbean islands.",
        image: "https://blog.nayararesorts.com/hubfs/Swimming-Sloth-1024x683.jpg",
        url: "https://blog.nayararesorts.com/wildlife-conservation-in-arenal-and-bocas-del-toro",
      },
      {
        title: "Coral Reef Restoration: Rebuilding the Caribbean",
        excerpt: "How Nayara Bocas del Toro is partnering with marine biologists to restore and protect the coral reefs of the archipelago.",
        image: "",
        url: "",
        comingSoon: true,
      },
    ],
  },

  /* ── Hangaroa ── */
  hangaroa: {
    headline: "Ancient Island, Living Future",
    subtitle: "Nayara Hangaroa",
    heroOverlayColor: "rgba(94, 85, 73, 0.75)",
    initiatives: [
      {
        title: "Rapa Nui Heritage Preservation",
        desc: "Partnering directly with the Rapa Nui community to protect and preserve the island's archaeological sites, oral traditions, and living culture through restoration projects and cultural education programs.",
      },
      {
        title: "Native Reforestation",
        desc: "Planting thousands of endemic species each year — including toromiro, mahute, and makoi — working to restore the island's original ecosystem and provide habitat for native birds and insects.",
      },
      {
        title: "Ocean Conservation",
        desc: "Supporting marine research programs that monitor coral health, fish populations, and ocean temperatures, and advocating for the expansion of the Rapa Nui Marine Protected Area.",
      },
      {
        title: "Renewable Energy Transition",
        desc: "Transitioning to 100% renewable energy through solar panels and wind turbines, reducing the island's dependence on imported diesel fuel and setting a model for sustainable island tourism.",
      },
    ],
    videos: [
      {
        title: "The Guardians of Rapa Nui",
        guest: "Hitorangi Family",
        description: "An intimate conversation with the Hitorangi family about preserving Rapa Nui's cultural heritage, the future of Easter Island, and what it means to be guardians of one of the world's most remote civilizations.",
        youtubeId: "FRPVRcUTNmk",
        duration: "45 min",
      },
      {
        title: "Uncovering Rapa Nui: An Archaeologist's Perspective",
        guest: "Archaeologist",
        description: "A deep dive into the archaeological mysteries of Easter Island — from moai construction techniques to new discoveries that challenge everything we thought we knew about Rapa Nui civilization.",
        youtubeId: "qFVLTTJa7hE",
        duration: "38 min",
      },
      {
        title: "Nayara Hangaroa Sustainability",
        guest: "Nayara Resorts",
        description: "Nayara Hangaroa's commitment to sustainability on Rapa Nui — renewable energy, water conservation, plastic elimination, cultural preservation, and community support.",
        youtubeId: "_M3ATv4I0B8",
        duration: "3 min",
        altYoutubeId: "EinNAkAoKE8",
        altLanguage: "ES",
        altDuration: "3:30 min",
      },
    ],
    blogs: [
      {
        title: "How Nayara Hangaroa Leads Regeneration on Rapa Nui",
        excerpt: "Rapa Nui's Hito family leads cultural and ecological regeneration. Learn how moai traditions, reforestation, and community shape the island's future.",
        image: "https://blog.nayararesorts.com/hubfs/9-Aug-11-2025-08-40-19-5669-PM.png",
        url: "https://blog.nayararesorts.com/walking-giants-the-hito-family-the-future-of-easter-island",
      },
      {
        title: "A Collapse That Wasn't: What the Maya and Rapa Nui Teach Us",
        excerpt: "The Maya and Rapa Nui civilizations didn't collapse — they adapted. What their resilience teaches us about climate, survival, and cultural continuity.",
        image: "https://blog.nayararesorts.com/hubfs/Photo%20Jan%2014%202026%2c%2007%2042%2012.j",
        url: "https://blog.nayararesorts.com/a-collapse-that-wasnt-a-collapse",
      },
      {
        title: "Wildlife Conservation in Chile's Atacama Desert and Easter Island",
        excerpt: "Vicuñas, flamingos, and endemic species — conservation efforts protecting Chile's most fragile ecosystems.",
        image: "https://blog.nayararesorts.com/hubfs/Imported_Blog_Media/Hangaroa-Horses-2048x13",
        url: "https://blog.nayararesorts.com/wildlife-conservation-in-chiles-atacama-desert-and-easter-island",
      },
      {
        title: "Ancient Origins of Nature-Based Wellness: Lessons from Easter Island",
        excerpt: "Easter Island's Polynesian heritage holds ancient wellness wisdom — from ocean immersion to volcanic mineral baths and celestial navigation.",
        image: "https://blog.nayararesorts.com/hubfs/Im%C3%A1genes%20BLOGS/Drawing%20from%20Time",
        url: "https://blog.nayararesorts.com/ancient-origins-of-nature-based-wellness-lessons-from-easter-island-and-polynesia",
      },
    ],
  },
};

/** Map property slug to sustainability data key */
export function getSustainabilityKey(slug: string): string {
  const crSlugs = ["tented-camp", "gardens", "springs"];
  if (crSlugs.includes(slug)) return "costa-rica";
  return slug;
}
