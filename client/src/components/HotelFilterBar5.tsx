/**
 * HotelFilterBar Variant 5 — Dropdown/select menu
 * For: Journal and Gallery pages
 */

import { ChevronDown } from "lucide-react";

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

export default function HotelFilterBar5({ activeHotel, onHotelChange }: HotelFilterBarProps) {
  const activeLabel = HOTEL_OPTIONS.find((opt) => opt.id === activeHotel)?.label || "Select Hotel";

  return (
    <section className="px-6 md:px-10 pb-8">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-[#3B2B26]/35 text-[10px] tracking-[0.3em] mb-4" style={{ ...body, fontWeight: 600 }}>
          Filter by Hotel
        </p>
        <div className="relative inline-block w-full md:w-64">
          <select
            value={activeHotel}
            onChange={(e) => onHotelChange(e.target.value)}
            className="w-full px-5 py-3 pr-10 bg-white border-2 border-[#3B2B26]/20 rounded-lg text-[#3B2B26] text-sm tracking-[0.05em] appearance-none cursor-pointer hover:border-[#3B2B26]/40 focus:outline-none focus:border-[#3B2B26] transition-colors"
            style={{ ...body, fontWeight: 500 }}
          >
            {HOTEL_OPTIONS.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#3B2B26]/40 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
