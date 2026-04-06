import { useLocation } from "wouter";
import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";

const destinations = [
  {
    id: "alto-atacama",
    name: "Alto Atacama",
    region: "Chile · Atacama Desert",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/Untitleddesign-17_d0de17d2.JPG",
    description: "Luxury desert lodge with astronomical experiences and Mars-on-Earth aesthetics.",
    route: "/alto-atacama",
    badge: "Family Friendly",
  },
  {
    id: "bocas-del-toro",
    name: "Bocas del Toro",
    region: "Panama · Caribbean",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-aerial-villas-walkway_66b2f48e.jpg",
    description: "Tropical island resort with pristine beaches and vibrant marine life.",
    route: "/bocas-del-toro",
    badge: "Adults Only",
  },
  {
    id: "gardens",
    name: "Gardens",
    region: "Costa Rica · Arenal Volcano National Park",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/5_ac0cb283.jpg",
    description: "Lush botanical gardens with volcanic views and wellness experiences.",
    route: "/gardens",
    badge: "Family Friendly",
  },
  {
    id: "hangaroa",
    name: "Hangaroa",
    region: "Chile · Easter Island",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/RapaNui2(1)_179dfb19.jpeg",
    description: "Exclusive lodge on Easter Island with Rapa Nui cultural immersion.",
    route: "/hangaroa",
    badge: "Family Friendly",
  },
  {
    id: "springs",
    name: "Springs",
    region: "Costa Rica · Arenal Volcano National Park",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/6_0a37cc95.jpg",
    description: "Thermal springs resort with spa and nature-based wellness.",
    route: "/springs",
    badge: "Adults Only",
  },
  {
    id: "tented-camp",
    name: "Tented Camp",
    region: "Costa Rica · Arenal Volcano National Park",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/IMG_5354_8a9b536e.PNG",
    description: "Luxury tented accommodation suspended above the canopy with volcano views.",
    route: "/tented-camp",
    badge: "Family Friendly",
  },
];

export default function AllDestinations() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <BrandNavigation pageType="brand" />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl mb-4 text-[#3a2a1a]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            All Destinations
          </h1>
          <p
            className="text-lg md:text-xl text-[#5a4a3a] max-w-2xl"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            Discover our collection of luxury resorts across Latin America, each offering unique experiences rooted in nature and culture.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="pb-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest) => (
              <button
                key={dest.id}
                onClick={() => navigate(dest.route)}
                className="group cursor-pointer text-left transition-transform duration-300 hover:scale-105"
              >
                {/* Image */}
                <div className="relative h-64 md:h-72 overflow-hidden rounded-lg mb-6">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h2
                      className="text-2xl md:text-3xl text-[#3a2a1a] group-hover:text-[#5a4a3a] transition-colors"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                    >
                      {dest.name}
                    </h2>
                    {dest.badge && (
                      <span
                        className="text-[9px] tracking-[0.15em] uppercase text-stone-600 border border-stone-300 px-2 py-1 rounded whitespace-nowrap ml-2"
                        style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
                      >
                        {dest.badge}
                      </span>
                    )}
                  </div>
                  <p
                    className="text-sm md:text-base text-[#5a4a3a]/60 mb-4"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                  >
                    {dest.region}
                  </p>
                  <p
                    className="text-base text-[#5a4a3a] leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                  >
                    {dest.description}
                  </p>
                </div>

                {/* Explore Link */}
                <div className="mt-6 flex items-center gap-2">
                  <span
                    className="text-sm tracking-[0.08em] uppercase text-[#3a2a1a] group-hover:text-[#5a4a3a] transition-colors"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
                  >
                    Explore
                  </span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
