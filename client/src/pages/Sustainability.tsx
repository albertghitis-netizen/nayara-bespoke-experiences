/*
 * SUSTAINABILITY — Nayara Resorts commitment
 * Four pillars: Ecosystem, People, Operations, Certifications
 * Certifications vary by property:
 *   - Arenal & Bocas del Toro: Green Globe
 *   - Alto Atacama & Hangaroa: S Certification
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Leaf, Users, Settings, ShieldCheck } from "lucide-react";

interface Pillar {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const pillars: Pillar[] = [
  {
    title: "Ecosystem",
    icon: <Leaf className="w-6 h-6" />,
    description:
      "Protecting and restoring the natural environments that surround our properties — from the Atacama Desert to the Arenal rainforest, from Easter Island to the Caribbean archipelago.",
  },
  {
    title: "People",
    icon: <Users className="w-6 h-6" />,
    description:
      "Empowering local communities through employment, education, cultural preservation, and partnerships that ensure tourism benefits those who call these places home.",
  },
  {
    title: "Operations",
    icon: <Settings className="w-6 h-6" />,
    description:
      "Reducing our environmental footprint through energy efficiency, waste reduction, water conservation, and responsible sourcing across every property.",
  },
  {
    title: "Certifications",
    icon: <ShieldCheck className="w-6 h-6" />,
    description:
      "Third-party validation of our sustainability commitments, ensuring accountability and continuous improvement.",
  },
];

interface PropertyCert {
  name: string;
  certification: string;
  certBody: string;
}

const propertyCertifications: PropertyCert[] = [
  { name: "Nayara Gardens", certification: "Green Globe", certBody: "Green Globe International" },
  { name: "Nayara Springs", certification: "Green Globe", certBody: "Green Globe International" },
  { name: "Nayara Tented Camp", certification: "Green Globe", certBody: "Green Globe International" },
  { name: "Nayara Bocas del Toro", certification: "Green Globe", certBody: "Green Globe International" },
  { name: "Nayara Alto Atacama", certification: "S Certification", certBody: "Sernatur — Chile" },
  { name: "Nayara Hangaroa", certification: "S Certification", certBody: "Sernatur — Chile" },
];

export default function Sustainability() {
  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      {/* Header */}
      <div className="bg-emerald-950 text-white py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-[1000px] mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm tracking-[0.2em] uppercase mb-10 transition-colors"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            <ArrowLeft className="w-4 h-4" />
            All Properties
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="text-emerald-400/60 text-xs tracking-[0.35em] uppercase mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Nayara Resorts
            </p>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              Sustainability
            </h1>
            <p
              className="text-white/60 text-base md:text-lg mt-6 max-w-xl leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Our commitment to preserving the extraordinary places we call home.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Four Pillars */}
      <div className="max-w-[1000px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border border-stone-200 p-8 md:p-10"
            >
              <div className="text-emerald-700 mb-4">{pillar.icon}</div>
              <h3
                className="text-stone-800 text-xl md:text-2xl mb-3"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                {pillar.title}
              </h3>
              <p
                className="text-stone-500 text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Property Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-stone-400 text-xs tracking-[0.35em] uppercase mb-6 pb-3 border-b border-stone-200"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Certifications by Property
          </h2>
          <div className="flex flex-col">
            {propertyCertifications.map((pc, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-5 border-b border-stone-100"
              >
                <div>
                  <span
                    className="text-stone-700 text-base md:text-lg"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                  >
                    {pc.name}
                  </span>
                </div>
                <div className="text-right">
                  <span
                    className="text-emerald-700 text-sm font-medium"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                  >
                    {pc.certification}
                  </span>
                  <span
                    className="text-stone-400 text-xs block mt-0.5"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                  >
                    {pc.certBody}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="border-t border-stone-200 py-12">
        <div className="max-w-[1000px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-stone-300 text-xs tracking-[0.35em] uppercase"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Nayara Resorts
          </p>
          <p
            className="text-stone-400 text-xs"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
