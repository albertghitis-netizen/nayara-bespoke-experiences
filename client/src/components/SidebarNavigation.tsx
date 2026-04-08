/*
 * SIDEBAR NAVIGATION — Three-column layout
 * Left: Main menu items
 * Middle: Sub-menu (appears on selection)
 * Right: Image preview (changes on hover)
 */

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { hotelBookingLinks } from "@/data/booking";

interface Destination {
  name: string;
  route: string;
}

interface SidebarNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  previewImage?: string;
}

const MENU_ITEMS = [
  { label: "Destinations", id: "destinations" },
  { label: "Our Story", id: "about" },
  { label: "Sustainability", id: "sustainability" },
  { label: "Wellness", id: "wellness" },
  { label: "Experiences", id: "experiences" },
  { label: "The Table", id: "dining" },
  { label: "Gallery", id: "gallery" },
  { label: "Journal", id: "journal" },
  { label: "Press & Awards", id: "press" },
  { label: "Contact Us", id: "contact" },
];

const DESTINATIONS = [
  { name: "Nayara Gardens", route: "/gardens" },
  { name: "Nayara Springs", route: "/springs" },
  { name: "Nayara Tented Camp", route: "/tented-camp" },
  { name: "Nayara Alto Atacama", route: "/alto-atacama" },
  { name: "Nayara Hangaroa", route: "/hangaroa" },
  { name: "Nayara Bocas del Toro", route: "/bocas-del-toro" },
];

export default function SidebarNavigation({
  isOpen,
  onClose,
  previewImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/ChatGPTImageMar18,2026,10_19_06PM_d4e5f3a9.png",
}: SidebarNavigationProps) {
  const [, navigate] = useLocation();
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
  const [reserveOpen, setReserveOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<string>("/gardens");
  const reserveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (reserveRef.current && !reserveRef.current.contains(e.target as Node)) {
        setReserveOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavigate = (route: string) => {
    onClose();
    navigate(route);
  };

  const handleBooking = (hotel: (typeof hotelBookingLinks)[0]) => {
    setReserveOpen(false);
    if (hotel.available) {
      window.open(hotel.url, "_blank");
    } else {
      import("sonner").then(({ toast }) => toast(hotel.label + " — Booking Coming Soon"));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex bg-[#e3dfd2]"
        >
          {/* Left column — main menu */}
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-56 border-r border-[#3a2a1a]/10 flex flex-col"
          >
            {/* Top bar */}
            <div className="border-b border-[#3a2a1a]/10 p-6 flex items-center justify-start">
              <button
                onClick={onClose}
                className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-[#d4c9b8]/50 transition-colors"
              >
                <svg className="w-4 h-4 text-[#3a2a1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu items */}
            <div className="flex-1 overflow-y-auto px-6 py-8">
              <div className="space-y-1">
                {MENU_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedMenu(selectedMenu === item.id ? null : item.id)}
                    className={`w-full text-left px-3 py-2 rounded transition-colors ${
                      selectedMenu === item.id
                        ? "bg-[#d4c9b8]/50 text-[#3a2a1a]"
                        : "text-[#3a2a1a] hover:bg-[#d4c9b8]/30"
                    }`}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <div className="text-sm">{item.label}</div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Middle column — destinations list */}
          <AnimatePresence mode="wait">
            {selectedMenu === "destinations" && (
              <motion.div
                key="destinations-menu"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-64 border-r border-[#3a2a1a]/10 overflow-y-auto px-6 py-0"
              >
                <h3 className="text-xs tracking-[0.15em] uppercase text-[#5a4a3a]/60 mb-4 invisible" style={{ fontFamily: "var(--font-body)" }}>
                  Destinations
                </h3>
                <div className="space-y-2">
                  {DESTINATIONS.map((destination) => (
                    <button
                      key={destination.route}
                      onClick={() => {
                        setSelectedDestination(destination.route);
                        handleNavigate(destination.route);
                      }}
                      className={`w-full text-left px-3 py-2 text-sm rounded transition-colors ${
                        selectedDestination === destination.route
                          ? "bg-[#d4c9b8]/50 text-[#3a2a1a] font-semibold"
                          : "text-[#3a2a1a] hover:bg-[#d4c9b8]/30"
                      }`}
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {destination.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Right column — image preview */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex-1 hidden md:flex bg-black relative overflow-hidden"
          >
            <motion.img
              key={previewImage}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              src={previewImage}
              alt="Preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/5" />
          </motion.div>

          {/* Close on background click (mobile) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 -z-10 md:hidden"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
