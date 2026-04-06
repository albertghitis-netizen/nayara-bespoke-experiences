import { useState } from "react";
import { motion } from "framer-motion";

interface RoomType {
  id: string;
  name: string;
  horizontal: string;
  vertical: string;
}

interface RoomsSliderProps {
  rooms: RoomType[];
  title?: string;
  subtitle?: string;
}

export default function RoomsSlider({ rooms, title = "Canvas Rooms", subtitle = "Accommodations" }: RoomsSliderProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const current = rooms[activeSlide];
  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % rooms.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + rooms.length) % rooms.length);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-8">
        <p className="text-[#3a2a1a]/40 text-[11px] tracking-[0.15em] uppercase mb-3" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
          {subtitle}
        </p>
        <h3 className="text-[#4B4A4A]" style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(24px, 3.5vw, 38px)", lineHeight: 1.15 }}>
          {title}
        </h3>
      </div>

      {/* Artistic Slider */}
      <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-lg bg-[#f0f0f0]">
        {/* Horizontal background image */}
        <motion.img
          key={`h-${activeSlide}`}
          src={current.horizontal}
          alt={current.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Vertical image overlay - positioned bottom-right with artistic perspective */}
        <motion.div
          key={`v-${activeSlide}`}
          initial={{ opacity: 0, scale: 0.8, x: 50, y: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="absolute bottom-6 right-6 md:bottom-10 md:right-10 w-32 md:w-48 h-40 md:h-64 rounded-lg overflow-hidden shadow-2xl"
          style={{
            transform: "perspective(1000px) rotateY(-8deg) rotateX(2deg)",
          }}
        >
          <img
            src={current.vertical}
            alt={`${current.name} detail`}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Room name overlay */}
        <motion.div
          key={`text-${activeSlide}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="absolute top-10 left-10 z-20"
        >
          <h4 className="text-white text-3xl md:text-4xl" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
            {current.name}
          </h4>
        </motion.div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-[#3a2a1a]/60 hover:bg-[#3a2a1a]/80 backdrop-blur-sm p-3 rounded-full transition-all"
          aria-label="Previous room"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-[#3a2a1a]/60 hover:bg-[#3a2a1a]/80 backdrop-blur-sm p-3 rounded-full transition-all"
          aria-label="Next room"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Slide indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {rooms.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSlide(idx)}
            className={`h-1 rounded-full transition-all ${
              idx === activeSlide ? "bg-[#3a2a1a] w-8" : "bg-[#3a2a1a]/30 w-2"
            }`}
            aria-label={`Go to room ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
