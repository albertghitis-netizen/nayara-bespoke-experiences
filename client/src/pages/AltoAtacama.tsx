/*
 * NAYARA ALTO ATACAMA — Bespoke Experiences
 * Design: "Desert Codex" — Editorial Cartography
 * Palette: Desert cream, terracotta, volcanic charcoal, gold accents
 * Typography: Playfair Display (display) + DM Sans (body)
 * Rule: Real photos only. No AI-generated imagery.
 *
 * This wraps the original single-property components with
 * back-navigation to the landing page.
 */

import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ExcursionsSection from "@/components/ExcursionsSection";
import SpaSection from "@/components/SpaSection";
import Footer from "@/components/Footer";
import ExploreOurWorld from "@/components/ExploreOurWorld";

export default function AltoAtacama() {
  const [activeSection, setActiveSection] = useState("hero");

  return (
    <div className="min-h-screen bg-desert-cream">
      <Navigation activeSection={activeSection} showBackLink />
      <HeroSection onInView={() => setActiveSection("hero")} />
      <ExcursionsSection onInView={() => setActiveSection("excursions")} />
      <SpaSection onInView={() => setActiveSection("spa")} />
      <ExploreOurWorld />
      <Footer />
    </div>
  );
}
