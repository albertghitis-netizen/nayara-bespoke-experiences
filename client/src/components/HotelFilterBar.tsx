/**
 * HotelFilterBar — Shared filter component for all brand pages
 * Displays 6 hotel options without "All" option
 */

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

const HOTEL_OPTIONS = [
  { id: "alto-atacama", label: "Alto Atacama" },
  { id: "bocas-del-toro", label: "Bocas del Toro" },
  { id: "gardens", label: "Gardens" },
  { id: "hangaroa", label: "Hangaroa" },
  { id: "springs", label: "Springs" },
  { id: "tented-camp", label: "Tented Camp" },
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
                  ? "bg-[#3B2B26] text-white border-[#3B2B26]"
                  : "bg-transparent text-[#5a4a3a]/60 border-[#3B2B26]/15 hover:border-[#3B2B26]/40 hover:text-[#3B2B26]"
              }`}
              style={{ ...body, fontWeight: 500 }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
