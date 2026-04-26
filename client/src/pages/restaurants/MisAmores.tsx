import ComingSoonVenue from "@/components/ComingSoonVenue";

export default function MisAmores() {
  return (
    <ComingSoonVenue
      venue={{
        name: "Mis Amores",
        tagline: "Romantic Fine Dining for Two",
        description:
          "Mis Amores is the culinary jewel of Nayara Springs — an adults-only fine dining experience where every detail is designed for romance. The menu weaves Costa Rican ingredients with international technique, served in an intimate candlelit setting overlooking the volcanic hot springs. A Relais & Châteaux dining experience.",
        category: "gastronomy",
        categoryLabel: "Gastronomy · Nayara Springs",
        property: "Nayara Springs",
        cuisine: "Contemporary Fine Dining",
        atmosphere: "Intimate candlelit terrace with hot springs views",
        backLink: "/springs",
        backLabel: "Nayara Springs",
      }}
    />
  );
}
