import { useState } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";
import { BOOKING_URLS } from "@/data/booking";

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

type FilterTag = "Family-Friendly" | "Adults-Only";
const filterTabs: ("All" | FilterTag)[] = ["All", "Family-Friendly", "Adults-Only"];

const destinations: {
  id: string;
  name: string;
  region: string;
  image: string;
  description: string;
  route: string;
  bookingId: string;
  filter: FilterTag;
}[] = [
  {
    id: "alto-atacama",
    name: "Nayara Alto Atacama",
    region: "Atacama Desert, Chile",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/prop-atacama_704b4f26.jpg",
    description: "Desert Lodge Villas",
    route: "/alto-atacama",
    bookingId: "alto-atacama",
    filter: "Family-Friendly",
  },
  {
    id: "bocas-del-toro",
    name: "Nayara Bocas del Toro",
    region: "Bocas del Toro, Panama",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/prop-bocas_6adf9525.jpg",
    description: "Overwater Villas & Rainforest Treehouses",
    route: "/bocas-del-toro",
    bookingId: "bocas-del-toro",
    filter: "Adults-Only",
  },
  {
    id: "gardens",
    name: "Nayara Gardens",
    region: "Arenal Volcano, Costa Rica",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/prop-gardens_5931d8af.jpg",
    description: "Private Rainforest Villas & Casitas",
    route: "/gardens",
    bookingId: "gardens",
    filter: "Family-Friendly",
  },
  {
    id: "hangaroa",
    name: "Nayara Hangaroa",
    region: "Easter Island, Chile",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/prop-hangaroa_a0a3fad0.jpg",
    description: "Oceanfront Villas",
    route: "/hangaroa",
    bookingId: "hangaroa",
    filter: "Family-Friendly",
  },
  {
    id: "springs",
    name: "Nayara Springs",
    region: "Arenal Volcano, Costa Rica",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/prop-springs_16fe1ae6.jpg",
    description: "Private Hot Springs Villas",
    route: "/springs",
    bookingId: "springs",
    filter: "Adults-Only",
  },
  {
    id: "tented-camp",
    name: "Nayara Tented Camp",
    region: "Arenal Volcano, Costa Rica",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/prop-tented_0fd865a2.jpg",
    description: "Clifftop Tents & Suites",
    route: "/tented-camp",
    bookingId: "tented-camp",
    filter: "Family-Friendly",
  },
];

export default function AllDestinations() {
  const [, navigate] = useLocation();
  const [activeFilter, setActiveFilter] = useState<"All" | FilterTag>("All");
  const filtered = activeFilter === "All" ? destinations : destinations.filter((d) => d.filter === activeFilter);

  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <BrandNavigation pageType="brand" />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl mb-4 text-[#3a2a1a]"
            style={heading}
          >
            All Destinations
          </h1>
          <p
            className="text-[15px] text-[#4B4A4A]/70 max-w-2xl leading-relaxed"
            style={body}
          >
            Discover our collection of luxury resorts across Latin America, each offering unique experiences rooted in nature and culture.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="px-6 md:px-10 pb-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-5 py-2 rounded-full text-[11px] tracking-[0.12em] transition-all duration-300 border ${
                  activeFilter === tab
                    ? "bg-[#AD8F61] border-[#AD8F61] text-white"
                    : "bg-transparent border-[#3a2a1a]/20 text-[#3a2a1a]/60 hover:border-[#AD8F61] hover:text-[#AD8F61]"
                }`}
                style={{ ...body, fontWeight: 500 }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="pb-24 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filtered.map((dest) => (
                <div key={dest.id} className="group">
                  {/* Image */}
                  <button
                    onClick={() => navigate(dest.route)}
                    className="block w-full cursor-pointer text-left"
                  >
                    <div className="overflow-hidden rounded-lg mb-4">
                      <img
                        src={dest.image}
                        alt={dest.name}
                        className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                        style={{ aspectRatio: "3/2" }}
                        loading="lazy"
                      />
                    </div>
                  </button>

                  {/* Content */}
                  <h2
                    className="text-[18px] text-[#3a2a1a] mb-1"
                    style={{ ...heading, fontWeight: 500 }}
                  >
                    {dest.name}
                  </h2>
                  <p
                    className="text-[11px] tracking-[0.1em] text-[#3a2a1a]/40 mb-1"
                    style={{ ...body, fontWeight: 500 }}
                  >
                    {dest.region}
                  </p>
                  <p
                    className="text-[13px] text-[#4B4A4A]/60 leading-relaxed mb-4"
                    style={body}
                  >
                    {dest.description}
                  </p>

                  {/* Reserve + Explore buttons */}
                  <div className="flex gap-3">
                    <a
                      href={BOOKING_URLS[dest.bookingId]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-full text-[11px] tracking-[0.12em] border border-[#AD8F61] text-[#AD8F61] hover:bg-[#AD8F61] hover:text-white transition-all duration-300"
                      style={{ ...body, fontWeight: 500 }}
                    >
                      Reserve
                    </a>
                    <button
                      onClick={() => navigate(dest.route)}
                      className="px-5 py-2 rounded-full text-[11px] tracking-[0.12em] border border-[#3a2a1a]/20 text-[#3a2a1a]/60 hover:border-[#3a2a1a] hover:text-[#3a2a1a] transition-all duration-300 cursor-pointer"
                      style={{ ...body, fontWeight: 500 }}
                    >
                      Explore
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </div>
  );
}
