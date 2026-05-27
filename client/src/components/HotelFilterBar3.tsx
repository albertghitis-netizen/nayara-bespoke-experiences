/**
 * HotelFilterBar Variant 3 , Pill-style filter for all brand pages
 * For: Journal, Gastronomy, Gallery, Sustainability, Wellness, Experiences, Press & Awards
 * Uses brand colors for each property's active state
 */

const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

const HOTEL_OPTIONS = [
  { id: "tented-camp", label: "Tented Camp", color: "#868B75" }, // Olive Green
  { id: "alto-atacama", label: "Alto Atacama", color: "#B85C3C" }, // Middle Terracotta
  { id: "gardens", label: "Gardens", color: "#286241" },         // Clover Green
  { id: "bocas-del-toro", label: "Bocas del Toro", color: "#1E3A8A" }, // Navy
  { id: "springs", label: "Springs", color: "#0E6B7E" },         // Teal
  { id: "hangaroa", label: "Hangaroa", color: "#536878" },       // Steel Grey
];

interface HotelFilterBarProps {
  activeHotel: string;
  onHotelChange: (hotelId: string) => void;
  label?: string;
}

export default function HotelFilterBar3({ activeHotel, onHotelChange, label = "Filter by Hotel" }: HotelFilterBarProps) {
  return (
    <section className="px-6 md:px-10 py-8">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-[#3B2B26]/35 text-[10px] tracking-[0.3em] mb-4" style={{ ...body, fontWeight: 600 }}>
          {label}
        </p>
        <div className="flex flex-wrap gap-2">
          {HOTEL_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              onClick={() => onHotelChange(opt.id)}
              className={`px-4 py-2 rounded-full text-[12px] tracking-[0.08em] uppercase transition-all duration-300 ${
                activeHotel === opt.id
                  ? "text-white"
                  : "bg-stone-100 text-[#3B2B26]/60 hover:bg-stone-200 hover:text-[#3B2B26]"
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
