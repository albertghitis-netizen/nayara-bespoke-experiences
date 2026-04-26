import ComingSoonVenue from "@/components/ComingSoonVenue";

export default function AmorLoco() {
  return (
    <ComingSoonVenue
      venue={{
        name: "Amor Loco",
        tagline: "Latin American Soul Food with Volcanic Views",
        description:
          "Amor Loco celebrates the passion of Latin American cuisine — from Peruvian ceviche to Argentine grills — all prepared with Costa Rican ingredients from our organic gardens. The restaurant overlooks the Arenal Volcano and is one of the most celebrated dining experiences in Central America.",
        category: "gastronomy",
        categoryLabel: "Gastronomy · Nayara Springs",
        property: "Nayara Springs",
        cuisine: "Latin American",
        atmosphere: "Volcano-view terrace dining",
        heroImage: "/manus-storage/amor-loco-1_21e055a5.jpg",
        backLink: "/springs",
        backLabel: "Nayara Springs",
      }}
    />
  );
}
