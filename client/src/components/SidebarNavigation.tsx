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
  { label: "Nayara Journal", id: "journal" },
  { label: "Press & Awards", id: "press" },
  { label: "Contact Us", id: "contact" },
];

const DESTINATIONS = [
  { name: "Nayara Tented Camp", route: "/tented-camp", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/ChatGPTImageMar18,2026,10_19_06PM_d4e5f3a9.png" },
  { name: "Nayara Springs", route: "/springs", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/61_53a2d75e.jpg" },
  { name: "Nayara Gardens", route: "/gardens", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/NewAreaBriceFerre(2)_cf5128c9.webp" },
  { name: "Nayara Alto Atacama", route: "/alto-atacama", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/ChatGPTImageMar18,2026,10_19_06PM_d4e5f3a9.png" },
  { name: "Nayara Bocas del Toro", route: "/bocas-del-toro", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/ChatGPTImageMar18,2026,10_19_06PM_d4e5f3a9.png" },
  { name: "Nayara Hangaroa", route: "/hangaroa", image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/ChatGPTImageMar18,2026,10_19_06PM_d4e5f3a9.png" },
];

const PROPERTY_SECTIONS = [
  { label: "Rooms", id: "rooms" },
  { label: "Experiences", id: "experiences" },
  { label: "Sustainability", id: "sustainability" },
  { label: "Wellness", id: "wellness" },
  { label: "The Table", id: "dining" },
  { label: "Getting Here", id: "getting-here" },
  { label: "Gallery", id: "gallery" },
];

export default function SidebarNavigation({
  isOpen,
  onClose,
  previewImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/ChatGPTImageMar18,2026,10_19_06PM_d4e5f3a9.png",
}: SidebarNavigationProps) {
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
  const [reserveOpen, setReserveOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState("/gardens");
  const [clickedProperty, setClickedProperty] = useState<string | null>(null);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const reserveRef = useRef<HTMLDivElement>(null);
  const [, navigate] = useLocation();

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

  const handleNavigate = (route: string) => {
    navigate(route);
    onClose();
  };

  const handleBooking = (hotel: (typeof hotelBookingLinks)[0]) => {
    if (hotel.url) {
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
          className="fixed inset-0 z-50 flex flex-col bg-[#e3dfd2]"
        >
          {/* Close button — fixed at top, spans all columns */}
          <div className="border-b border-[#3a2a1a]/10 px-6 py-4 flex items-center justify-start">
            <button
              onClick={onClose}
              className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-[#d4c9b8]/50 transition-colors"
            >
              <svg className="w-4 h-4 text-[#3a2a1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Three columns container — perfectly aligned */}
          <div className="flex flex-1 overflow-hidden">
            {/* Left column — main menu */}
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="w-56 border-r border-[#3a2a1a]/10 overflow-y-auto"
            >
              {/* Menu items */}
              <div className="px-6 py-8">
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

            {/* Middle column — destinations pillar */}
            <AnimatePresence mode="wait">
              {selectedMenu === "destinations" && (
                <motion.div
                  key="destinations-menu"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-64 border-r border-[#3a2a1a]/10 overflow-y-auto"
                >
                  {/* Properties list */}
                  <div className="px-6 py-8">
                    <div className="space-y-2">
                      {DESTINATIONS.map((destination) => (
                        <button
                          key={destination.route}
                          onClick={() => {
                            setSelectedDestination(destination.route);
                            setClickedProperty(destination.route);
                            setSelectedSection(null);
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
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Property sections column — appears only when property is clicked */}
            <AnimatePresence mode="wait">
              {selectedMenu === "destinations" && clickedProperty && (
                <motion.div
                  key="property-sections"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-64 border-r border-[#3a2a1a]/10 overflow-y-auto"
                >
                  {/* Property sections list */}
                  <div className="px-6 py-8">
                    <div className="space-y-2">
                      {PROPERTY_SECTIONS.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => setSelectedSection(section.id)}
                          className={`w-full text-left px-3 py-2 text-sm rounded transition-colors ${
                            selectedSection === section.id
                              ? "bg-[#d4c9b8]/50 text-[#3a2a1a] font-semibold"
                              : "text-[#3a2a1a] hover:bg-[#d4c9b8]/30"
                          }`}
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {section.label}
                        </button>
                      ))}
                    </div>
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
                key={clickedProperty ? `property-${clickedProperty}` : previewImage}
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.1, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                src={clickedProperty ? (DESTINATIONS.find(d => d.route === clickedProperty)?.image || previewImage) : previewImage}
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
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
