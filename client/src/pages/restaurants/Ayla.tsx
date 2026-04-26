import ComingSoonVenue from "@/components/ComingSoonVenue";

export default function Ayla() {
  return (
    <ComingSoonVenue
      venue={{
        name: "Ayla",
        tagline: "Modern Mediterranean Cuisine in the Rainforest Canopy",
        description:
          "Ayla brings the warmth of Mediterranean cooking to the heart of the Arenal rainforest. Inspired by the coastal kitchens of the Levant, Turkey, and Greece, every dish celebrates fresh ingredients, open-fire cooking, and the art of sharing. Dine under the canopy with views of the volcano as the sun sets over the jungle.",
        category: "gastronomy",
        categoryLabel: "Gastronomy · Nayara Tented Camp",
        property: "Nayara Tented Camp",
        cuisine: "Modern Mediterranean",
        atmosphere: "Open-air canopy dining with volcano views",
        backLink: "/tented-camp",
        backLabel: "Nayara Tented Camp",
      }}
    />
  );
}
