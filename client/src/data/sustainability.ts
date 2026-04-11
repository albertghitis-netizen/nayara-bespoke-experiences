/**
 * Sustainability initiatives per property/region.
 * Shared Costa Rica data used by all three CR properties.
 */

export interface Initiative {
  title: string;
  desc: string;
}

export const sustainabilityData: Record<string, {
  headline: string;
  subtitle: string;
  heroOverlayColor: string;
  initiatives: Initiative[];
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
  },
};

/** Map property slug to sustainability data key */
export function getSustainabilityKey(slug: string): string {
  const crSlugs = ["tented-camp", "gardens", "springs"];
  if (crSlugs.includes(slug)) return "costa-rica";
  return slug;
}
