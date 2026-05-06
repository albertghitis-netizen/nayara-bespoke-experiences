import ComingSoonVenue from "@/components/ComingSoonVenue";

export default function LapasBar() {
  return (
    <ComingSoonVenue
      venue={{
        name: "Lapas Bar",
        tagline: "Poolside Cocktails & Tropical Bites",
        description:
          "Lapas Bar is the heart of Nayara Tented Camp's social scene , a vibrant poolside bar where guests gather to enjoy handcrafted cocktails, tropical refreshments, and light bites. Surrounded by rainforest canopy and the sounds of nature, it's the perfect spot to unwind after a day of exploration.",
        category: "gastronomy",
        categoryLabel: "Gastronomy · Nayara Tented Camp",
        property: "Nayara Tented Camp",
        cuisine: "Cocktail Bar & Pool Lounge",
        atmosphere: "Poolside terrace with rainforest views",
        heroImage: "/manus-storage/lapas-bar-pool_placeholder.jpg",
        backLink: "/tented-camp",
        backLabel: "Nayara Tented Camp",
        primaryColor: "#868B75",
        secondaryColor: "#525642",
        accentColor: "#9A9086",
      }}
    />
  );
}
