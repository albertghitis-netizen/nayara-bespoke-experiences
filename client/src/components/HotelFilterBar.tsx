/**
 * HotelFilterBar , Shared filter component for all brand pages
 * Displays 6 hotel options without "All" option
 * Uses brand colors for each property's active state
 * Smooth hover transitions + active state scale animation
 */

import { motion } from "framer-motion";

const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

const HOTEL_OPTIONS = [
  { id: "tented-camp", label: "Tented Camp", color: "#868B75" },     // Olive Green
  { id: "alto-atacama", label: "Alto Atacama", color: "#B85C3C" },   // Middle Terracotta
  { id: "gardens", label: "Gardens", color: "#286241" },             // Clover Green
  { id: "bocas-del-toro", label: "Bocas del Toro", color: "#1E3A8A" }, // Navy
  { id: "springs", label: "Springs", color: "#0E6B7E" },             // Teal
  { id: "hangaroa", label: "Hangaroa", color: "#536878" },           // Steel Grey
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
          {HOTEL_OPTIONS.map((opt) => {
            const isActive = activeHotel === opt.id;
            return (
              <motion.button
                key={opt.id}
                onClick={() => onHotelChange(opt.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  backgroundColor: isActive ? opt.color : "transparent",
                  color: isActive ? "#ffffff" : "rgba(90,74,58,0.6)",
                  borderColor: isActive ? opt.color : "rgba(59,43,38,0.15)",
                  boxShadow: isActive
                    ? `0 4px 14px ${opt.color}40`
                    : "0 0px 0px transparent",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="px-4 py-1.5 text-xs tracking-[0.1em] rounded-full border cursor-pointer"
                style={{ ...body, fontWeight: 500 }}
              >
                {opt.label}
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
