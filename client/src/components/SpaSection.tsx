/*
 * Spa & Wellness Section — Spa Puri treatments and rituals
 * Data from Spa Book PDF. Real photos only.
 * "Puri" means water in Kunza, the native Atacameño language.
 */

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Clock, Droplets, Flame, Leaf, Wind, ChevronDown } from "lucide-react";

interface Treatment {
  id: string;
  name: string;
  kunzaName?: string;
  element: "water" | "fire" | "earth" | "air";
  duration: string;
  price: string;
  description: string;
  category: string;
}

const treatments: Treatment[] = [
  // Exclusive Experiences
  {
    id: "detox",
    name: "Detox Experience",
    element: "water",
    duration: "90 min",
    price: "$195,000 CLP",
    description:
      "Water circuit with steam and dry sauna, Scottish showers, coffee exfoliation, and full-body hydration. A complete reset for body and mind.",
    category: "exclusive",
  },
  {
    id: "peace-escape",
    name: "Peace Escape",
    element: "air",
    duration: "120 min",
    price: "$225,000 CLP",
    description:
      "Sound therapy, aromatic touch, pindas massage with herbal compresses, and an outdoor mineral bath. The most immersive wellness journey we offer.",
    category: "exclusive",
  },
  {
    id: "unforgettable-ritual",
    name: "Unforgettable Ritual",
    element: "fire",
    duration: "90 min",
    price: "$195,000 CLP",
    description:
      "Steam sauna, mini facial with rica-rica products, hands-and-feet massage with digitopressure, and hot stones. A ritual that honors the desert's volcanic energy.",
    category: "exclusive",
  },
  {
    id: "trilogy",
    name: "Trilogy",
    element: "water",
    duration: "80 min",
    price: "$165,000 CLP",
    description:
      "Sound therapy, aromatherapy, and water immersion. Three phases: back and neck, legs and feet, then cranial and facial massage in the jacuzzi.",
    category: "exclusive",
  },
  {
    id: "mineral-bath",
    name: "Mineral Bath",
    element: "water",
    duration: "60 min",
    price: "$150,000 CLP",
    description:
      "Heated mineral waters (37–38°C) from underground aquifers in outdoor pools overlooking the Catarpe Valley. Includes 15-minute cranial massage, sound therapy, flavored water, and seasonal fruit.",
    category: "exclusive",
  },
  // Massage
  {
    id: "deep-tissue",
    name: "Deep Tissue Massage",
    kunzaName: "Ckara",
    element: "earth",
    duration: "60–80 min",
    price: "From $110,000 CLP",
    description:
      "A firm, deep massage targeting muscle tension and knots. Ideal after a day of hiking at altitude.",
    category: "massage",
  },
  {
    id: "relaxing-massage",
    name: "Relaxing Massage",
    kunzaName: "Sema",
    element: "air",
    duration: "60–80 min",
    price: "From $95,000 CLP",
    description:
      "Gentle, flowing strokes to release stress and promote deep relaxation. Customized to each guest's needs.",
    category: "massage",
  },
  {
    id: "hot-stones",
    name: "Hot Stones Massage",
    kunzaName: "Turi",
    element: "fire",
    duration: "80 min",
    price: "$140,000 CLP",
    description:
      "Volcanic basalt stones heated and placed on key energy points, combined with deep massage techniques. The warmth of the desert, channeled.",
    category: "massage",
  },
  {
    id: "lymphatic",
    name: "Lymphatic Drainage",
    kunzaName: "Luckamatur",
    element: "water",
    duration: "60–80 min",
    price: "From $95,000 CLP",
    description:
      "A gentle, rhythmic technique following the natural flow of the lymphatic system. Ideal for reducing inflammation and promoting detoxification.",
    category: "massage",
  },
  // Earth Treatments
  {
    id: "altiplano-renewal",
    name: "Altiplano Renewal",
    kunzaName: "Yotti",
    element: "earth",
    duration: "80 min",
    price: "$120,000 CLP",
    description:
      "Full-body treatment using mineral-rich Altiplano clay combined with honey. Antioxidant, antiseptic, hydrating — perfect for dry or sensitive skin in the desert climate.",
    category: "earth",
  },
  {
    id: "coca-exfoliation",
    name: "Coca Exfoliation",
    kunzaName: "Paluntur",
    element: "earth",
    duration: "80 min",
    price: "$120,000 CLP",
    description:
      "Body scrub using coca leaves, raw sugar, and almond oil for deep cleansing and hydration. An ancient Andean ingredient in a modern ritual.",
    category: "earth",
  },
  {
    id: "coffee-exfoliation",
    name: "Coffee Exfoliation",
    element: "earth",
    duration: "80 min",
    price: "$145,000 CLP",
    description:
      "Ground coffee with detoxifying properties that reduce fluid retention and eliminate toxins. Includes coffee-infused oil hydration and a relaxing massage.",
    category: "earth",
  },
  // Well-Being
  {
    id: "yoga-sono-meditation",
    name: "Yoga, Sonotherapy & Meditation",
    element: "air",
    duration: "75 min",
    price: "$95,000 CLP",
    description:
      "Begin with a yoga class, followed by sound therapy using vibrational instruments, and close with guided meditation. Morning sessions start the day with harmony; afternoon sessions bring serenity.",
    category: "wellbeing",
  },
];

const spaCategories = [
  { id: "all", label: "All Treatments" },
  { id: "exclusive", label: "Signature Rituals" },
  { id: "massage", label: "Massage" },
  { id: "earth", label: "Earth Treatments" },
  { id: "wellbeing", label: "Well-Being" },
];

const elementIcons: Record<string, React.ReactNode> = {
  water: <Droplets className="w-4 h-4" />,
  fire: <Flame className="w-4 h-4" />,
  earth: <Leaf className="w-4 h-4" />,
  air: <Wind className="w-4 h-4" />,
};

const elementColors: Record<string, string> = {
  water: "text-lagoon",
  fire: "text-terracotta",
  earth: "text-charcoal",
  air: "text-gold",
};

interface SpaSectionProps {
  onInView: () => void;
}

export default function SpaSection({ onInView }: SpaSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    if (isInView) onInView();
  }, [isInView, onInView]);

  const filtered =
    activeCategory === "all"
      ? treatments
      : treatments.filter((t) => t.category === activeCategory);

  return (
    <section
      ref={ref}
      id="spa"
      className="relative py-24 md:py-32 bg-volcanic"
    >
      {/* Section Header */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-gold/70 text-xs tracking-wide-editorial mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Spa Puri &mdash; Wellness
          </p>
          <h2
            className="text-desert-cream text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
          >
            Flow Like Water,
            <br />
            Breathe Like the Wind
          </h2>
          <p
            className="text-desert-cream/50 text-base md:text-lg max-w-2xl leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Puri means "water" in Kunza, the native language of the Atacama.
            Along the banks of the San Pedro River, our spa draws from the
            desert's four elements — water, fire, earth, and air — to restore
            what the modern world takes away.
          </p>
        </motion.div>

        {/* Spa Placeholder Image */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 h-64 md:h-80 bg-gradient-to-br from-charcoal/60 to-charcoal/30 border border-desert-cream/10 flex items-center justify-center"
        >
          <div className="text-center">
            <Droplets className="w-10 h-10 text-desert-cream/20 mx-auto mb-3" />
            <span
              className="text-desert-cream/30 text-xs tracking-editorial"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Your Spa Puri photo here
            </span>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {spaCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setExpandedId(null);
              }}
              className={`px-5 py-2.5 rounded-full text-xs tracking-editorial transition-all duration-300 border ${
                activeCategory === cat.id
                  ? "bg-desert-cream text-volcanic border-desert-cream"
                  : "bg-transparent text-desert-cream/40 border-desert-cream/15 hover:border-desert-cream/30 hover:text-desert-cream/70"
              }`}
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Treatment Cards */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((treatment, i) => (
              <TreatmentCard
                key={treatment.id}
                treatment={treatment}
                index={i}
                isExpanded={expandedId === treatment.id}
                onToggle={() =>
                  setExpandedId(
                    expandedId === treatment.id ? null : treatment.id
                  )
                }
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Policies Note */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mt-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-desert-cream/10 pt-8"
        >
          <p
            className="text-desert-cream/25 text-xs leading-relaxed max-w-xl"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Reserve treatments at least 2 hours ahead by calling #965.
            Arrive 15 minutes before your appointment. Cancellations within 2
            hours incur a 50% charge. Spa is for guests 16 years and older.
            Hours: 9:30 AM – 9:00 PM. Prices include VAT.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* Individual Treatment Card */
function TreatmentCard({
  treatment,
  index,
  isExpanded,
  onToggle,
}: {
  treatment: Treatment;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onClick={onToggle}
      className="group border border-desert-cream/8 bg-charcoal/40 p-6 hover:border-desert-cream/15 hover:bg-charcoal/60 transition-all duration-500 cursor-pointer"
    >
      {/* Element Icon + Name */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className={elementColors[treatment.element]}>
              {elementIcons[treatment.element]}
            </span>
            <span
              className="text-desert-cream/30 text-[10px] tracking-editorial"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {treatment.element}
            </span>
          </div>
          <h3
            className="text-desert-cream text-lg"
            style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
          >
            {treatment.name}
          </h3>
          {treatment.kunzaName && (
            <p
              className="text-gold/50 text-sm italic"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {treatment.kunzaName}
            </p>
          )}
        </div>
        <ChevronDown
          className={`w-4 h-4 text-desert-cream/30 transition-transform duration-300 flex-shrink-0 mt-1 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Quick Info */}
      <div className="flex items-center gap-4 mb-3">
        <div className="flex items-center gap-1.5">
          <Clock className="w-3 h-3 text-desert-cream/25" />
          <span
            className="text-xs text-desert-cream/40"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {treatment.duration}
          </span>
        </div>
        <span
          className="text-xs text-gold/60"
          style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
        >
          {treatment.price}
        </span>
      </div>

      {/* Expandable Description */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p
              className="text-desert-cream/50 text-sm leading-relaxed pt-3 border-t border-desert-cream/8"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              {treatment.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
