/**
 * HotelFilterBar Variant 2 — Tab-style with underline animation
 * For: Sustainability page
 */

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

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

export default function HotelFilterBar2({ activeHotel, onHotelChange }: HotelFilterBarProps) {
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const [underlineLeft, setUnderlineLeft] = useState(0);
  const activeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (activeRef.current) {
      setUnderlineWidth(activeRef.current.offsetWidth);
      setUnderlineLeft(activeRef.current.offsetLeft);
    }
  }, [activeHotel]);

  return (
    <section className="px-6 md:px-10 pb-8 border-b border-[#3B2B26]/10">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-[#3B2B26]/35 text-[10px] tracking-[0.3em] mb-4" style={{ ...body, fontWeight: 600 }}>
          Sustainability Initiatives
        </p>
        <div className="relative">
          <div className="flex gap-8">
            {HOTEL_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                ref={activeHotel === opt.id ? activeRef : null}
                onClick={() => onHotelChange(opt.id)}
                className={`py-3 text-sm tracking-[0.05em] transition-colors duration-300 ${
                  activeHotel === opt.id
                    ? "text-[#3B2B26]"
                    : "text-[#3B2B26]/40 hover:text-[#3B2B26]/70"
                }`}
                style={{ ...heading, fontWeight: 500 }}
              >
                {opt.label}
              </button>
            ))}
          </div>
          {/* Animated underline */}
          <motion.div
            className="absolute bottom-0 h-0.5 bg-[#3B2B26]"
            animate={{ width: underlineWidth, left: underlineLeft }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>
      </div>
    </section>
  );
}
