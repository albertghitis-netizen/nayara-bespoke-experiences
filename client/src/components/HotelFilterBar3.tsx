/**
 * HotelFilterBar Variant 3 , Pill-style filter for all brand pages
 * For: Journal, Gastronomy, Gallery, Sustainability, Wellness, Experiences, Press & Awards
 * Uses brand colors for each property's active state
 * Smooth hover transitions + active state scale animation
 */

import { motion } from "framer-motion";

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
  showAll?: boolean;
}

export default function HotelFilterBar3({ activeHotel, onHotelChange, label = "Filter by Hotel", showAll = false }: HotelFilterBarProps) {
  const options = showAll
    ? [{ id: "all", label: "All", color: "#3B2B26" }, ...HOTEL_OPTIONS]
    : HOTEL_OPTIONS;

  return (
    <section className="px-6 md:px-10 py-8">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-[#3B2B26]/35 text-[10px] tracking-[0.3em] mb-4" style={{ ...body, fontWeight: 600 }}>
          {label}
        </p>
        <div className="flex flex-wrap gap-2">
          {options.map((opt) => {
            const isActive = activeHotel === opt.id;
            return (
              <motion.button
                key={opt.id}
                onClick={() => onHotelChange(opt.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  backgroundColor: isActive ? opt.color : "#f5f5f4",
                  color: isActive ? "#ffffff" : "rgba(59,43,38,0.6)",
                  boxShadow: isActive
                    ? `0 4px 14px ${opt.color}40`
                    : "0 0px 0px transparent",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="px-4 py-2 rounded-full text-[12px] tracking-[0.08em] uppercase cursor-pointer"
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
