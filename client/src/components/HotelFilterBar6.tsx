/**
 * HotelFilterBar Variant 6 — Minimalist text links
 * For: Press & Awards page
 */

import { motion } from "framer-motion";

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

export default function HotelFilterBar6({ activeHotel, onHotelChange }: HotelFilterBarProps) {
  return (
    <section className="px-6 md:px-10 pb-8">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-[#3B2B26]/35 text-[10px] tracking-[0.3em] mb-4" style={{ ...body, fontWeight: 600 }}>
          View by Hotel
        </p>
        <div className="flex flex-wrap gap-6">
          {HOTEL_OPTIONS.map((opt) => (
            <motion.button
              key={opt.id}
              onClick={() => onHotelChange(opt.id)}
              className="relative text-sm tracking-[0.05em] transition-colors duration-300"
              style={{
                ...body,
                fontWeight: 500,
                color: activeHotel === opt.id ? "#3B2B26" : "#3B2B26/40",
              }}
              whileHover={{ color: "#3B2B26" }}
            >
              {opt.label}
              {activeHotel === opt.id && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-px bg-[#3B2B26]"
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
