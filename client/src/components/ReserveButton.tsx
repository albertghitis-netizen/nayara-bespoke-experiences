import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { hotelBookingLinks } from "@/data/booking";

export default function ReserveButton() {
  const [reserveOpen, setReserveOpen] = useState(false);
  const reserveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (reserveRef.current && !reserveRef.current.contains(e.target as Node)) {
        setReserveOpen(false);
      }
    };
    if (reserveOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [reserveOpen]);

  const handleBooking = (hotel: (typeof hotelBookingLinks)[0]) => {
    window.open(hotel.url, "_blank");
    setReserveOpen(false);
  };

  return (
    <div ref={reserveRef} className="relative">
      <button
        onClick={() => setReserveOpen(!reserveOpen)}
        className="px-4 py-2 rounded-full bg-white border border-[#3a2a1a]/20 text-[#3a2a1a] text-xs font-medium hover:bg-[#f5f5f5] transition-colors"
      >
        Reserve
      </button>

      <AnimatePresence>
        {reserveOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-48 bg-white border border-[#3a2a1a]/10 rounded-lg shadow-lg overflow-hidden z-50"
          >
            {hotelBookingLinks.map((hotel) => (
              <button
                key={hotel.id}
                onClick={() => handleBooking(hotel)}
                className="w-full text-left px-3 py-2 text-xs font-body hover:bg-[#f0f0f0] transition-colors border-b border-[#3a2a1a]/5 last:border-b-0"
              >
                <div className="font-semibold text-[#3a2a1a]">{hotel.label}</div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
