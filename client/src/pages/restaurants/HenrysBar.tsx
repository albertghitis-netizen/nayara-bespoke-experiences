import ComingSoonVenue from "@/components/ComingSoonVenue";

export default function HenrysBar() {
  return (
    <ComingSoonVenue
      venue={{
        name: "Henry's Bar",
        tagline: "Craft Cocktails & Stories from the Jungle",
        description:
          "Named after the legendary explorer who first mapped the trails around Arenal, Henry's Bar is where adventure meets mixology. Handcrafted cocktails made with Costa Rican spirits, tropical fruits, and herbs from our garden — served in a setting that feels like a well-appointed explorer's club deep in the rainforest.",
        category: "gastronomy",
        categoryLabel: "Gastronomy · Nayara Tented Camp",
        property: "Nayara Tented Camp",
        cuisine: "Craft Cocktail Bar",
        atmosphere: "Explorer's club ambiance in the jungle canopy",
        heroImage: "/manus-storage/henrys-bar-R5_22268_c23e47dc.jpg",
        backLink: "/tented-camp",
        backLabel: "Nayara Tented Camp",
      }}
    />
  );
}
