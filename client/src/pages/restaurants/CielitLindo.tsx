import ComingSoonVenue from "@/components/ComingSoonVenue";

export default function CielitLindo() {
  return (
    <ComingSoonVenue
      venue={{
        name: "Cielito Lindo",
        tagline: "Poolside Paradise with Volcanic Views",
        description:
          "Cielito Lindo is Nayara Springs' vibrant poolside bar — a tropical oasis where guests gather to enjoy refreshing cocktails, tropical drinks, and light fare. With views of the Arenal Volcano and surrounded by lush rainforest, it's the perfect place to relax, socialize, and soak in the natural beauty of Costa Rica.",
        category: "gastronomy",
        categoryLabel: "Gastronomy · Nayara Springs",
        property: "Nayara Springs",
        cuisine: "Cocktail Bar & Pool Lounge",
        atmosphere: "Poolside terrace with volcano views",
        heroImage: "/manus-storage/cielito-lindo-pool_placeholder.jpg",
        backLink: "/springs",
        backLabel: "Nayara Springs",
        primaryColor: "#96A78D",
        secondaryColor: "#7C8471",
        accentColor: "#728076",
      }}
    />
  );
}
