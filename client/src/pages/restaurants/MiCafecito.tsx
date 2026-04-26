import ComingSoonVenue from "@/components/ComingSoonVenue";

export default function MiCafecito() {
  return (
    <ComingSoonVenue
      venue={{
        name: "Mi Cafecito",
        tagline: "Artisanal Coffee & Morning Rituals",
        description:
          "Mi Cafecito is where mornings begin at Nayara Springs — with single-origin Costa Rican coffee, fresh pastries, and the quiet sounds of the rainforest. Beans are sourced from the Tarrazú and Dota Valley highlands and roasted with care. Pair your cup with a tropical fruit plate or a traditional gallo pinto.",
        category: "gastronomy",
        categoryLabel: "Gastronomy · Nayara Springs",
        property: "Nayara Springs",
        cuisine: "Coffee House & Breakfast",
        atmosphere: "Tranquil morning gathering with garden views",
        heroImage: "/manus-storage/mi-cafecito-1_bf532654.jpg",
        backLink: "/springs",
        backLabel: "Nayara Springs",
      }}
    />
  );
}
