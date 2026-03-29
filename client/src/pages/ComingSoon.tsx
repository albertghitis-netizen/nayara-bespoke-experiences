/*
 * Coming Soon — Placeholder page for properties not yet built
 * Shows a tasteful editorial placeholder with back navigation
 */

import { motion } from "framer-motion";
import { Link, useRoute } from "wouter";
import { ArrowLeft, MapPin } from "lucide-react";

const propertyInfo: Record<string, { name: string; location: string; country: string; tagline: string }> = {
  hangaroa: {
    name: "Nayara Hangaroa",
    location: "Easter Island",
    country: "Chile",
    tagline: "Where Moai Meet the Pacific",
  },
  "bocas-del-toro": {
    name: "Nayara Bocas del Toro",
    location: "Bocas del Toro",
    country: "Panama",
    tagline: "Caribbean Island Paradise",
  },
};

export default function ComingSoon() {
  // Extract property id from URL
  const [, params] = useRoute("/:id");
  const id = params?.id || "";
  const info = propertyInfo[id] || {
    name: "Nayara Property",
    location: "Coming Soon",
    country: "",
    tagline: "Bespoke Experiences",
  };

  return (
    <div className="min-h-screen bg-[#f7f5f0] flex flex-col">
      {/* Header */}
      <header className="px-6 md:px-10 py-8">
        <div className="max-w-[1400px] mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-800 transition-colors"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="tracking-[0.2em] uppercase">All Properties</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-6 md:px-10">
        <div className="text-center max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <MapPin className="w-10 h-10 text-stone-300 mx-auto mb-6" />
            <p
              className="text-stone-400 text-xs tracking-[0.35em] uppercase mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              {info.location}, {info.country}
            </p>
            <h1
              className="text-stone-800 text-4xl md:text-5xl leading-[1.1] mb-3"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              {info.name}
            </h1>
            <p
              className="text-stone-500 text-lg italic mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {info.tagline}
            </p>
            <div className="inline-block border border-stone-300 px-8 py-4">
              <p
                className="text-stone-400 text-xs tracking-[0.35em] uppercase mb-1"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Bespoke Experiences
              </p>
              <p
                className="text-stone-500 text-sm"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                Coming soon
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 md:px-10 py-8">
        <div className="max-w-[1400px] mx-auto text-center">
          <p
            className="text-stone-300 text-xs"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            &copy; {new Date().getFullYear()} Nayara Resorts. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
