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
        title: "A Forest Reborn",
        desc: "Once a barren cattle ranch, Nayara Tented Camp has been transformed into a thriving rainforest through the planting of thousands of native trees. This large-scale reforestation restored biodiversity and created habitats for diverse wildlife — including sloths that now thrive among cecropia trees planted specifically for them. The property has achieved full carbon neutrality through careful measurement and offsetting of greenhouse gas emissions.",
      },
      {
        title: "Green Globe Certified",
        desc: "All three Costa Rica properties — Nayara Gardens, Nayara Springs, and Nayara Tented Camp — have achieved the prestigious Green Globe Certification following an extensive 2024 evaluation. A dedicated Green Committee oversees continuous staff training on waste management, energy efficiency, and water conservation, alongside ongoing reforestation programs and renewable energy sourcing.",
      },
      {
        title: "Sustainable Design & Zero-Kilometer Cuisine",
        desc: "Nayara Tented Camp exemplifies sustainable luxury through modular building methods, FSC-certified flooring, energy-efficient systems, and the preservation of heritage trees with native landscaping. Across all properties, the zero-kilometer food philosophy prioritizes local farms and fresh ingredients — reducing carbon emissions and delivering seasonal, culturally authentic cuisine.",
      },
      {
        title: "Housing Initiative & Community",
        desc: "Regenerative tourism extends beyond the environment. Nayara supports fair employment, professional growth, free early education, and community initiatives. One of its proudest achievements is a subsidized housing project for staff — particularly single mothers — addressing the housing crisis in La Fortuna caused by rising property costs. These homes remain accessible regardless of employment status, creating long-term stability.",
      },
    ],
    videos: [
      {
        title: "Leo Ghitis: Pioneering Sustainable Luxury",
        guest: "Leo Ghitis",
        description: "Leo Ghitis on how Nayara Resorts is pioneering sustainable luxury travel — from the first eco-lodges to regenerative tourism across six destinations.",
        youtubeId: "7l072Yr__pE",
        duration: "45 min",
      },
      {
        title: "AFAR: A View from Afar with Leo Ghitis",
        guest: "Leo Ghitis",
        description: "AFAR Magazine's podcast featuring Leo Ghitis discussing the philosophy behind Nayara Resorts and the future of sustainable luxury travel.",
        youtubeId: "FPxFzOkKhbw",
        duration: "30 min",
      },
      {
        title: "Suite Success: Leo Ghitis on Nayara Resorts",
        guest: "Leo Ghitis",
        description: "Suite Success podcast — Leo Ghitis shares the story of building Nayara Resorts from a single Costa Rica property to a global collection of six destinations.",
        youtubeId: "X_lTp6Jh8ag",
        duration: "40 min",
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
        url: "/journal/green-globe-certification",
      },
      {
        title: "Beyond Sustainability: Regenerative Tourism at Nayara",
        excerpt: "From the first eco-lodges in Costa Rica to regenerative luxury across six destinations — how Nayara is redefining sustainable hospitality.",
        image: "https://blog.nayararesorts.com/hubfs/2-Nov-05-2025-03-44-38-2049-AM.png",
        url: "/journal/beyond-sustainability-regenerative-tourism",
      },
      {
        title: "A Night at the Camp: Nayara Tented Camp After Dark",
        excerpt: "What happens when the rainforest comes alive at night — nocturnal wildlife, volcanic hot springs under the stars, and the sounds of the canopy.",
        image: "https://blog.nayararesorts.com/hubfs/Im%C3%A1genes%20BLOGS/Night%20at%20the%20Camp",
        url: "https://blog.nayararesorts.com/a-night-at-the-camp",
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
        title: "S Certification: A Solar Success Story",
        desc: "As the only luxury hotel in the region with the \"S\" Certification for Sustainable Tourism — internationally validated by the Global Sustainable Tourism Council (GSTC) — Nayara Alto Atacama stands as a leader in environmental stewardship. A visionary solar energy project now mitigates over a ton of CO\u2082 emissions annually, with state-of-the-art panels blending seamlessly into the desert landscape.",
      },
      {
        title: "Eco-Conscious Adobe Design",
        desc: "Nestled within the desert, the hotel's adobe rooms reflect thoughtful sustainable design. Strategically oriented to capture solar warmth and natural ventilation, they minimize the need for artificial heating and cooling. A special thermal insulation layer retains warmth during winter while maintaining cool interiors in summer — every element reflects Nayara's dedication to sustainability and guest comfort.",
      },
      {
        title: "Water Stewardship in the Driest Desert",
        desc: "Water conservation is central to operations. Well water is treated through reverse osmosis for safe consumption, then reused for irrigation — giving it a second life that nourishes gardens and supports greenery in the arid landscape. This circular approach ensures complete self-sufficiency in the world's driest desert.",
      },
      {
        title: "Community & Cultural Preservation",
        desc: "Beyond architectural sustainability and renewable energy, Nayara Alto Atacama actively supports local communities through education programs, scholarships, local sourcing, and cultural preservation initiatives. Comprehensive waste reduction and graywater reuse programs reinforce a circular and responsible operational model that protects the fragile desert ecosystem.",
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
      {
        title: "The Best Place to Stay in the Atacama Desert Is an Oasis",
        excerpt: "Why a functioning oasis is not an amenity but the foundation of the experience — the science of desert microclimates and 10,000 years of human adaptation.",
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/97_e7aef760.jpg",
        url: "/journal/best-place-to-stay-atacama-desert-oasis",
      },
      {
        title: "Bocas del Toro & Alto Atacama: A Study in Sustainability",
        excerpt: "How Nayara's properties in Panama and Chile are leading sustainable tourism — off-grid solar power, coral restoration, and Chile's S Certification.",
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-aerial-overwater-villas-top_1842445d.jpg",
        url: "/journal/bocas-atacama-sustainability-study",
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
        title: "Sustainability on Stilts",
        desc: "Sustainability was embedded into Nayara Bocas del Toro from the very beginning. After extensive environmental studies, the resort was built entirely on stilts to protect native mangroves and coral reefs. With no natural beaches on the mangrove island, the world's first floating beach was created — also on stilts — preserving the delicate ecosystems below.",
      },
      {
        title: "100% Solar & Off-Grid",
        desc: "The resort operates completely off-grid, with custom-built water, power, and wastewater systems designed for the island. Nearly 100% of the hotel's energy needs are generated by solar power, making it a model of self-sufficient luxury. Green Globe Certified, the property continuously monitors environmental performance.",
      },
      {
        title: "Rainwater Harvesting & IBUKU Treehouses",
        desc: "Nayara Bocas del Toro relies entirely on rainwater harvesting for its freshwater needs. Custom gutter systems collect rainfall into catchment basins holding up to 100,000 gallons, purified using advanced ultraviolet filtration. The iconic treehouses, designed by IBUKU, are crafted from locally sourced bamboo and reclaimed hardwoods — including historic wood recovered from the Panama Canal.",
      },
      {
        title: "Marine & Community Stewardship",
        desc: "Protecting coral reefs and marine ecosystems through reef monitoring, sustainable diving practices, and partnerships with marine biologists. The resort partners with the Ng\u00e4be-Bugl\u00e9 indigenous communities through fair employment, cultural exchange programs, and support for traditional crafts — while comprehensive waste management programs ensure responsible operations.",
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
        title: "Condé Nast Traveler 2025: #1 Resort in Central America",
        excerpt: "Why the future of overwater luxury belongs to a private island in Panama — Nayara Bocas del Toro named #1 by Condé Nast Traveler.",
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-aerial-villas-walkway_66b2f48e.jpg",
        url: "/journal/conde-nast-bocas-del-toro",
      },
      {
        title: "Bocas del Toro & Alto Atacama: A Study in Sustainability",
        excerpt: "How Nayara's properties in Panama and Chile are leading sustainable tourism — off-grid solar power, coral restoration, and Chile's S Certification.",
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-sunset_2eeaa785.jpg",
        url: "/journal/bocas-atacama-sustainability-study",
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
        title: "Green Roofs, Cultural Roots",
        desc: "Nayara Hangaroa embraces sustainable design inspired by the Rapa Nui \"Kainga\" philosophy. Its green roofs cool buildings naturally while blending seamlessly into the volcanic landscape. The architecture honors archaeological heritage and reflects the iconic Orongo ceremonial village — immersing guests in culture and nature.",
      },
      {
        title: "S Seal of Sustainable Tourism",
        desc: "Nayara Hangaroa is the only luxury hotel on Easter Island certified with the S Seal of Sustainable Tourism, internationally validated by the Global Sustainable Tourism Council (GSTC). The property actively supports local communities through education programs, scholarships, local sourcing, and cultural preservation initiatives.",
      },
      {
        title: "Renewable Energy & Water Conservation",
        desc: "A solar plant complements the hotel's energy supply through renewable sources, significantly reducing dependence on Rapa Nui's fragile electrical system and decreasing carbon emissions. The wastewater treatment plant recycles graywater for irrigation, conserving water and maintaining vibrant landscapes while protecting Easter Island's fragile ecosystem.",
      },
      {
        title: "Preserving Rapa Nui",
        desc: "The hotel operates comprehensive waste management programs with recycling points and coastal cleanups led by staff. Planting thousands of endemic species each year — including toromiro, mahute, and makoi — Nayara works to restore the island's original ecosystem and provide habitat for native birds and insects, while supporting marine research and the Rapa Nui Marine Protected Area.",
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
        url: "/journal/hangaroa-regeneration-rapa-nui",
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
