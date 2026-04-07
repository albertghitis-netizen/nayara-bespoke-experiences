/*
 * THREE RESORTS. ONE RAINFOREST.
 * Editorial infographic showing Tented Camp, Springs, and Gardens
 * as three self-contained resorts sharing one rainforest ecosystem.
 * 
 * Desktop: Full graphic with connecting lines and shared amenities
 * Mobile: Compact text-link version
 * 
 * Each property name links to its respective page.
 * The "current" property is highlighted with a "You're here" indicator.
 */

import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

interface ThreeResortsGraphicProps {
  /** Which property the user is currently viewing */
  currentProperty: "tented-camp" | "springs" | "gardens";
}

const resorts = [
  {
    id: "tented-camp" as const,
    name: "Tented Camp",
    tagline: "Clifftop tented suites",
    route: "/tented-camp",
  },
  {
    id: "springs" as const,
    name: "Springs",
    tagline: "Hot springs & volcano views",
    route: "/springs",
  },
  {
    id: "gardens" as const,
    name: "Gardens",
    tagline: "Tropical garden villas",
    route: "/gardens",
  },
];

const sharedAmenities = [
  "Hot Springs",
  "Nature Trails",
  "Restaurants & Bars",
  "Mistico Hanging Bridges",
];

export default function ThreeResortsGraphic({ currentProperty }: ThreeResortsGraphicProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="mt-10"
    >
      {/* Title */}
      <h3
        className="text-[#4B4A4A] text-lg md:text-xl tracking-wide mb-1"
        style={heading}
      >
        Three Resorts. One Rainforest.
      </h3>
      <p
        className="text-[#4B4A4A]/50 text-[11px] tracking-[0.1em] uppercase mb-6"
        style={{ ...body, fontWeight: 500 }}
      >
        Arenal Volcano, Costa Rica
      </p>

      {/* ─── Desktop: Full graphic with SVG connecting lines ─── */}
      <div className="hidden md:block">
        <div className="relative">
          {/* SVG connecting lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 400 120"
            preserveAspectRatio="none"
            style={{ zIndex: 0 }}
          >
            {/* Horizontal line connecting all three */}
            <line
              x1="67" y1="40" x2="333" y2="40"
              stroke="#4B4A4A"
              strokeWidth="0.5"
              strokeOpacity="0.25"
              strokeDasharray="4 3"
            />
            {/* Vertical ticks at each node */}
            <line x1="67" y1="32" x2="67" y2="48" stroke="#4B4A4A" strokeWidth="0.5" strokeOpacity="0.25" />
            <line x1="200" y1="32" x2="200" y2="48" stroke="#4B4A4A" strokeWidth="0.5" strokeOpacity="0.25" />
            <line x1="333" y1="32" x2="333" y2="48" stroke="#4B4A4A" strokeWidth="0.5" strokeOpacity="0.25" />
          </svg>

          {/* Resort nodes */}
          <div className="relative z-10 flex justify-between items-start" style={{ minHeight: "120px" }}>
            {resorts.map((resort) => {
              const isCurrent = resort.id === currentProperty;
              return (
                <div key={resort.id} className="flex flex-col items-center text-center" style={{ width: "33.33%" }}>
                  {/* Dot */}
                  <div
                    className={`w-3 h-3 rounded-full mb-3 transition-all ${
                      isCurrent
                        ? "bg-[#4B4A4A] ring-4 ring-[#4B4A4A]/10"
                        : "bg-[#4B4A4A]/30"
                    }`}
                  />

                  {/* Property name as link */}
                  {isCurrent ? (
                    <div className="flex flex-col items-center">
                      <span
                        className="text-[#4B4A4A] text-[13px] tracking-[0.06em]"
                        style={{ ...body, fontWeight: 600 }}
                      >
                        {resort.name}
                      </span>
                      <span
                        className="text-[#4B4A4A]/40 text-[9px] tracking-[0.15em] uppercase mt-1"
                        style={{ ...body, fontWeight: 500 }}
                      >
                        You're here
                      </span>
                    </div>
                  ) : (
                    <Link
                      href={resort.route}
                      className="group flex flex-col items-center"
                    >
                      <span
                        className="text-[#4B4A4A]/60 text-[13px] tracking-[0.06em] group-hover:text-[#4B4A4A] transition-colors underline decoration-[#4B4A4A]/20 underline-offset-2 group-hover:decoration-[#4B4A4A]/50"
                        style={{ ...body, fontWeight: 500 }}
                      >
                        {resort.name}
                      </span>
                      <span
                        className="text-[#4B4A4A]/30 text-[9px] tracking-[0.06em] mt-1 group-hover:text-[#4B4A4A]/50 transition-colors"
                        style={body}
                      >
                        {resort.tagline}
                      </span>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          {/* Shared amenities line */}
          <div className="mt-2 pt-4 border-t border-[#4B4A4A]/10">
            <p
              className="text-[#4B4A4A]/35 text-[10px] tracking-[0.08em] uppercase text-center"
              style={{ ...body, fontWeight: 500 }}
            >
              Shared &mdash; {sharedAmenities.join(" · ")}
            </p>
          </div>
        </div>
      </div>

      {/* ─── Mobile: Compact version ─── */}
      <div className="md:hidden">
        <div className="flex flex-col gap-3">
          {resorts.map((resort) => {
            const isCurrent = resort.id === currentProperty;
            return (
              <div key={resort.id} className="flex items-center gap-3">
                {/* Dot */}
                <div
                  className={`w-2 h-2 rounded-full flex-shrink-0 ${
                    isCurrent ? "bg-[#4B4A4A]" : "bg-[#4B4A4A]/25"
                  }`}
                />
                {isCurrent ? (
                  <span
                    className="text-[#4B4A4A] text-[12px] tracking-[0.04em]"
                    style={{ ...body, fontWeight: 600 }}
                  >
                    {resort.name}
                    <span className="text-[#4B4A4A]/40 text-[9px] ml-2 tracking-[0.1em] uppercase" style={{ fontWeight: 500 }}>
                      You're here
                    </span>
                  </span>
                ) : (
                  <Link
                    href={resort.route}
                    className="text-[#4B4A4A]/55 text-[12px] tracking-[0.04em] hover:text-[#4B4A4A] transition-colors underline decoration-[#4B4A4A]/15 underline-offset-2"
                    style={{ ...body, fontWeight: 500 }}
                  >
                    {resort.name}
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* Shared amenities */}
        <p
          className="text-[#4B4A4A]/30 text-[9px] tracking-[0.06em] uppercase mt-4"
          style={{ ...body, fontWeight: 500 }}
        >
          Shared: {sharedAmenities.join(" · ")}
        </p>
      </div>
    </motion.div>
  );
}
