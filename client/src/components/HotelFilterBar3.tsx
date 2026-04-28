/**
 * HotelFilterBar Variant 3 — Segmented control (modern toggle)
 * For: Wellness page
 */

import { motion } from "framer-motion";

const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

const HOTEL_OPTIONS = [
  { id: "alto-atacama", label: "Atacama" },
  { id: "bocas-del-toro", label: "Bocas" },
  { id: "gardens", label: "Gardens" },
  { id: "hangaroa", label: "Hangaroa" },
  { id: "springs", label: "Springs" },
  { id: "tented-camp", label: "Tented" },
];

interface HotelFilterBarProps {
  activeHotel: string;
  onHotelChange: (hotelId: string) => void;
}

export default function HotelFilterBar3({ activeHotel, onHotelChange }: HotelFilterBarProps) {
  const activeIndex = HOTEL_OPTIONS.findIndex((opt) => opt.id === activeHotel);

  return (
    <section className="px-6 md:px-10 pb-8">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-[#3B2B26]/35 text-[10px] tracking-[0.3em] mb-4" style={{ ...body, fontWeight: 600 }}>
          Select Hotel
        </p>
        <div className="inline-flex p-1 bg-[#3B2B26]/5 rounded-full border border-[#3B2B26]/10">
          {HOTEL_OPTIONS.map((opt, idx) => (
            <button
              key={opt.id}
              onClick={() => onHotelChange(opt.id)}
              className="relative px-4 py-2 text-xs tracking-[0.1em] transition-colors duration-300 z-10"
              style={{
                ...body,
                fontWeight: 500,
                color: activeHotel === opt.id ? "white" : "#3B2B26",
              }}
            >
              {opt.label}
            </button>
          ))}
          {/* Animated background */}
          <motion.div
            className="absolute inset-y-1 bg-[#3B2B26] rounded-full"
            layoutId="segmentedBg"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{
              width: `calc(100% / ${HOTEL_OPTIONS.length})`,
              left: `calc(${activeIndex} * (100% / ${HOTEL_OPTIONS.length}))`,
            }}
          />
        </div>
      </div>
    </section>
  );
}
