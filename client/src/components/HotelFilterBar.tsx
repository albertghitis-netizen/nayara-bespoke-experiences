/**
 * HotelFilterBar , Shared filter component for all brand pages
 * Displays 6 hotel options without "All" option
 * Uses brand colors for each property's active state
 */

const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

const HOTEL_OPTIONS = [
  { id: "alto-atacama", label: "Alto Atacama", color: "#B85C3C" },   // Middle Terracotta
  { id: "bocas-del-toro", label: "Bocas del Toro", color: "#1E3A8A" }, // Navy
  { id: "gardens", label: "Gardens", color: "#286241" },             // Clover Green
  { id: "hangaroa", label: "Hangaroa", color: "#536878" },           // Steel Grey
  { id: "springs", label: "Springs", color: "#0E6B7E" },             // Teal
  { id: "tented-camp", label: "Tented Camp", color: "#868B75" },     // Olive Green
];

interface HotelFilterBarProps {
  activeHotel: string;
  onHotelChange: (hotelId: string) => void;
}

export default function HotelFilterBar({ activeHotel, onHotelChange }: HotelFilterBarProps) {
  return (
    <section className="px-6 md:px-10 pb-8">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-[#3B2B26]/35 text-[10px] tracking-[0.3em] mb-3" style={{ ...body, fontWeight: 600 }}>
          Filter by Hotel
        </p>
        <div className="flex flex-wrap gap-2">
          {HOTEL_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              onClick={() => onHotelChange(opt.id)}
              className={`px-4 py-1.5 text-xs tracking-[0.1em] rounded-full border transition-all duration-300 ${
                activeHotel === opt.id
                  ? "text-white border-transparent"
                  : "bg-transparent text-[#5a4a3a]/60 border-[#3B2B26]/15 hover:border-[#3B2B26]/40 hover:text-[#3B2B26]"
              }`}
              style={{
                ...body,
                fontWeight: 500,
                ...(activeHotel === opt.id ? { backgroundColor: opt.color } : {}),
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
