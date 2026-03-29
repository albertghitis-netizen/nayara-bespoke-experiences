/*
 * BESPOKE EXPERIENCES | NAYARA ALTO ATACAMA
 * Design: "Desert Codex" — Editorial Cartography
 * Palette: Desert cream, terracotta, volcanic charcoal, gold accents
 * Typography: Playfair Display (display) + DM Sans (body)
 * Rule: Real photos only. No AI-generated imagery.
 */

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ExcursionsSection from "@/components/ExcursionsSection";
import SpaSection from "@/components/SpaSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  return (
    <div className="min-h-screen bg-desert-cream">
      <Navigation activeSection={activeSection} />
      <HeroSection onInView={() => setActiveSection("hero")} />
      <ExcursionsSection onInView={() => setActiveSection("excursions")} />
      <SpaSection onInView={() => setActiveSection("spa")} />
      <Footer />
    </div>
  );
}
