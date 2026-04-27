/**
 * HotelFilterBar Variant 5 — Visual cards with property photos
 * For: Journal page
 */

import { motion } from "framer-motion";

const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

const HOTEL_OPTIONS = [
  { id: "alto-atacama", label: "Alto Atacama", color: "from-orange-400 to-red-600" },
  { id: "bocas-del-toro", label: "Bocas del Toro", color: "from-cyan-400 to-blue-600" },
  { id: "gardens", label: "Gardens", color: "from-green-400 to-emerald-600" },
  { id: "hangaroa", label: "Hangaroa", color: "from-purple-400 to-indigo-600" },
  { id: "springs", label: "Springs", color: "from-pink-400 to-rose-600" },
  { id: "tented-camp", label: "Tented Camp", color: "from-yellow-400 to-orange-600" },
];

interface HotelFilterBarProps {
  activeHotel: string;
  onHotelChange: (hotelId: string) => void;
}

export default function HotelFilterBar5({ activeHotel, onHotelChange }: HotelFilterBarProps) {
  return (
    <section className="px-6 md:px-10 pb-8">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-[#3B2B26]/35 text-[10px] tracking-[0.3em] mb-4" style={{ ...body, fontWeight: 600 }}>
          Filter by Hotel
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {HOTEL_OPTIONS.map((opt) => (
            <motion.button
              key={opt.id}
              onClick={() => onHotelChange(opt.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative h-24 rounded-lg overflow-hidden transition-all duration-300 ${
                activeHotel === opt.id ? "ring-2 ring-[#3B2B26] shadow-lg" : "opacity-70 hover:opacity-100"
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${opt.color}`} />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xs text-center px-2 font-semibold tracking-tight" style={body}>
                  {opt.label}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
