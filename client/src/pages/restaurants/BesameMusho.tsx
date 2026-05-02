import ComingSoonVenue from "@/components/ComingSoonVenue";

export default function BesameMusho() {
  return (
    <ComingSoonVenue
      venue={{
        name: "Bésame Mucho",
        tagline: "Intimate Latin Romance Under the Stars",
        description:
          "Bésame Mucho is an adults-only romantic dining experience at Nayara Springs, where passion meets cuisine. Set in a candlelit garden overlooking the volcanic hot springs, this intimate venue celebrates the romance of Latin America through food, wine, and ambiance. Every evening is a celebration of connection and indulgence.",
        category: "gastronomy",
        categoryLabel: "Gastronomy · Nayara Springs",
        property: "Nayara Springs",
        cuisine: "Latin Romantic Dining",
        atmosphere: "Candlelit garden with hot springs views",
        heroImage: "/manus-storage/besame-mucho-garden_placeholder.jpg",
        backLink: "/springs",
        backLabel: "Nayara Springs",
        primaryColor: "#96A78D",
        secondaryColor: "#7C8471",
        accentColor: "#728076",
      }}
    />
  );
}
