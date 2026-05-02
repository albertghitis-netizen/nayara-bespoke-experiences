import { staffMembers } from "@/data/staff";

export default function Staff() {
  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl text-[#3a2a1a] mb-6 text-center"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Our Team
          </h1>
          <p
            className="text-lg md:text-xl text-[#5a4a3a] text-center max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            The passionate people behind every unforgettable Nayara experience
          </p>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {staffMembers.map((member) => (
              <div
                key={member.id}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={member.url}
                  alt={member.alt}
                  className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
