import ComingSoonVenue from "@/components/ComingSoonVenue";

export default function LylasGelato() {
  return (
    <ComingSoonVenue
      venue={{
        name: "Lyla's Gelato",
        tagline: "Artisanal Gelato Crafted in the Tropics",
        description:
          "Lyla's Gelato brings the Italian tradition of handcrafted gelato to the Arenal rainforest. Made fresh daily with tropical fruits from local farms — guanábana, passion fruit, mango, and Costa Rican chocolate — each scoop is a celebration of the land. The perfect pause between adventures.",
        category: "gastronomy",
        categoryLabel: "Gastronomy · Nayara Gardens",
        property: "Nayara Gardens",
        cuisine: "Artisanal Gelato & Desserts",
        atmosphere: "Charming garden-side gelato counter",
        backLink: "/gardens",
        backLabel: "Nayara Gardens",
      }}
    />
  );
}
