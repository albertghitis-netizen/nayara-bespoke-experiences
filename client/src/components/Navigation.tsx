/*
 * Navigation — Minimal editorial top bar
 * Fixed, transparent over hero, solid on scroll
 * Nayara brand identity with section anchors
 * Supports back-link to landing page for property pages
 *
 * Property pages: Experiences, Wellness, Sustainability
 * Landing page: Experiences, Wellness, Sustainability, Awards, Journal
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

interface NavItem {
  id: string;
  label: string;
  scroll?: boolean; // true = scroll to section, false = placeholder toast
}

interface NavigationProps {
  activeSection: string;
  showBackLink?: boolean;
}

export default function Navigation({ activeSection, showBackLink = false }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { id: "excursions", label: "Experiences", scroll: true },
    { id: "spa", label: "Wellness", scroll: true },
    { id: "sustainability", label: "Sustainability", scroll: false },
  ];

  const handleNavClick = (item: NavItem) => {
    if (item.scroll) {
      const el = document.getElementById(item.id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
      }
    } else {
      toast(item.label + " — Coming Soon");
      setMenuOpen(false);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-desert-cream/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand */}
          <div className="flex items-center gap-4">
            {showBackLink && (
              <Link
                href="/"
                className={`transition-colors duration-500 ${
                  scrolled ? "text-volcanic" : "text-white/80"
                } hover:text-terracotta`}
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
            )}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex flex-col items-start"
            >
              <span
                className={`text-xs tracking-wide-editorial font-body transition-colors duration-500 ${
                  scrolled ? "text-volcanic/60" : "text-white/0"
                }`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                Nayara Alto Atacama
              </span>
              <span
                className={`text-lg font-display font-medium tracking-wide transition-colors duration-500 ${
                  scrolled ? "text-volcanic" : "text-white/0"
                }`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                Bespoke Experiences
              </span>
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`text-sm tracking-editorial transition-all duration-300 ${
                  scrolled
                    ? activeSection === item.id
                      ? "text-terracotta"
                      : "text-volcanic/60 hover:text-volcanic"
                    : activeSection === item.id
                    ? "text-gold-light"
                    : "text-white/60 hover:text-white"
                }`}
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden flex flex-col gap-1.5 p-2 transition-colors ${
              scrolled ? "text-volcanic" : "text-white"
            }`}
          >
            <span
              className={`block w-6 h-px transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
              } ${scrolled ? "bg-volcanic" : "bg-white"}`}
            />
            <span
              className={`block w-6 h-px transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
              } ${scrolled ? "bg-volcanic" : "bg-white"}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-desert-cream/98 backdrop-blur-md border-t border-desert-sand/30"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {showBackLink && (
                <Link
                  href="/"
                  className="text-left text-sm tracking-editorial text-volcanic/70 hover:text-terracotta transition-colors"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                >
                  ← All Properties
                </Link>
              )}
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className="text-left text-sm tracking-editorial text-volcanic/70 hover:text-terracotta transition-colors"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
