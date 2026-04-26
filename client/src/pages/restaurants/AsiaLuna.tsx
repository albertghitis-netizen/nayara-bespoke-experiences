import ComingSoonVenue from "@/components/ComingSoonVenue";

export default function AsiaLuna() {
  return (
    <ComingSoonVenue
      venue={{
        name: "Asia Luna",
        tagline: "Pan-Asian Flavors in the Heart of the Rainforest",
        description:
          "Asia Luna brings the bold flavors of Thailand, Japan, and Vietnam to the Arenal rainforest. Dishes are crafted with locally sourced ingredients and presented in an open-air setting surrounded by tropical gardens. A Michelin-recognized dining experience.",
        category: "gastronomy",
        categoryLabel: "Gastronomy · Nayara Gardens",
        property: "Nayara Gardens",
        cuisine: "Pan-Asian Fusion",
        atmosphere: "Open-air tropical garden setting",
        heroImage: "/manus-storage/asia-luna-3_2b44c4d5.jpg",
        backLink: "/gardens",
        backLabel: "Nayara Gardens",
      }}
    />
  );
}
