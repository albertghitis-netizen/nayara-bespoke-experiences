import ComingSoonVenue from "@/components/ComingSoonVenue";

export default function LaTerraza() {
  return (
    <ComingSoonVenue
      venue={{
        name: "La Terraza",
        tagline: "Where Costa Rican Terroir Meets the Art of the Cocktail",
        description:
          "La Terraza celebrates the spirit of Costa Rica through cocktails that tell the story of the land. Every signature drink is rooted in local ingredients, traditions, and the Tico way of life — from Cacique Guaro to Dota Valley apples to market-stall caramels.",
        category: "gastronomy",
        categoryLabel: "Gastronomy · Nayara Gardens",
        property: "Nayara Gardens",
        cuisine: "Cocktail Bar & Terrace",
        atmosphere: "Elevated terrace with panoramic volcano views",
        heroImage: "/manus-storage/la-terraza-bar-front_ccd17a7a.jpg",
        backLink: "/gardens",
        backLabel: "Nayara Gardens",
      }}
    />
  );
}
