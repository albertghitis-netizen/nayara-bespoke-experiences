/**
 * HotelFilterBar Variant 1 — Horizontal scrollable cards with icons
 * For: Experiences page
 */

const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

const HOTEL_OPTIONS = [
  { id: "alto-atacama", label: "Alto Atacama", emoji: "🏜️" },
  { id: "bocas-del-toro", label: "Bocas del Toro", emoji: "🏝️" },
  { id: "gardens", label: "Gardens", emoji: "🌿" },
  { id: "hangaroa", label: "Hangaroa", emoji: "🗿" },
  { id: "springs", label: "Springs", emoji: "♨️" },
  { id: "tented-camp", label: "Tented Camp", emoji: "⛺" },
];

interface HotelFilterBarProps {
  activeHotel: string;
  onHotelChange: (hotelId: string) => void;
}

export default function HotelFilterBar1({ activeHotel, onHotelChange }: HotelFilterBarProps) {
  return (
    <section className="px-6 md:px-10 pb-8 overflow-x-auto">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-[#3B2B26]/35 text-[10px] tracking-[0.3em] mb-4" style={{ ...body, fontWeight: 600 }}>
          Explore by Hotel
        </p>
        <div className="flex gap-3 pb-2 overflow-x-auto scrollbar-hide">
          {HOTEL_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              onClick={() => onHotelChange(opt.id)}
              className={`flex-shrink-0 px-5 py-3 rounded-lg border-2 transition-all duration-300 ${
                activeHotel === opt.id
                  ? "bg-[#3B2B26] text-white border-[#3B2B26] shadow-lg"
                  : "bg-white/40 text-[#3B2B26] border-[#3B2B26]/10 hover:border-[#3B2B26]/30 hover:bg-white/60"
              }`}
              style={{ ...body, fontWeight: 500 }}
            >
              <span className="text-lg mr-2">{opt.emoji}</span>
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
