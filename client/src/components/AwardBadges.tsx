/**
 * Award Badges — Tasteful, subtle award indicators for property pages
 * Michelin Keys, Travel + Leisure, Condé Nast Traveler
 * Designed to be delicate, not overwhelming
 */

import { motion } from "framer-motion";

/* ── Badge Data ── */
const BADGES = {
  michelin1: {
    label: "Michelin Key",
    sublabel: "2025",
    icon: "🔑",
  },
  michelin2: {
    label: "2 Michelin Keys",
    sublabel: "2025",
    icon: "🔑🔑",
  },
  michelin3: {
    label: "3 Michelin Keys",
    sublabel: "2025",
    icon: "🔑🔑🔑",
  },
  travelLeisure: {
    label: "Travel + Leisure",
    sublabel: "World's Best 2024",
    icon: "★",
  },
  condeNast: {
    label: "Condé Nast Traveler",
    sublabel: "Readers' Choice",
    icon: "◆",
  },
  tripadvisor: {
    label: "Travelers' Choice",
    sublabel: "Best of the Best",
    icon: "●",
  },
} as const;

type BadgeKey = keyof typeof BADGES;

/* ── Property → Badges mapping ── */
const PROPERTY_BADGES: Record<string, BadgeKey[]> = {
  "alto-atacama": ["michelin1", "travelLeisure", "condeNast"],
  gardens: ["michelin2", "travelLeisure", "condeNast"],
  springs: ["michelin3", "travelLeisure", "condeNast"],
  "tented-camp": ["michelin2", "travelLeisure", "condeNast"],
  hangaroa: ["michelin1", "travelLeisure"],
  "bocas-del-toro": ["travelLeisure"],
};

/* ── Inline Badge Strip — subtle horizontal row ── */
export function AwardBadgeStrip({ property }: { property: string }) {
  const badges = PROPERTY_BADGES[property] || [];
  if (badges.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex flex-wrap items-center justify-center gap-4 md:gap-6"
    >
      {badges.map((key, i) => {
        const badge = BADGES[key];
        return (
          <motion.div
            key={key}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
            className="flex items-center gap-2 px-3 py-1.5 border border-[#c4a87c]/30 rounded-sm bg-[#c4a87c]/5"
          >
            <span className="text-xs">{badge.icon}</span>
            <div className="flex flex-col">
              <span
                className="text-[10px] tracking-[0.12em] uppercase text-[#3a2a1a]/70 leading-tight"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                {badge.label}
              </span>
              <span
                className="text-[8px] tracking-[0.08em] uppercase text-[#3a2a1a]/40 leading-tight"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                {badge.sublabel}
              </span>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

/* ── Floating Badge — positioned in hero or intro sections ── */
export function FloatingAwardBadge({
  type,
  className = "",
}: {
  type: BadgeKey;
  className?: string;
}) {
  const badge = BADGES[type];
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-sm backdrop-blur-sm bg-white/5 ${className}`}
    >
      <span className="text-sm">{badge.icon}</span>
      <div className="flex flex-col">
        <span
          className="text-[10px] tracking-[0.15em] uppercase text-white/80 leading-tight"
          style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
        >
          {badge.label}
        </span>
        <span
          className="text-[8px] tracking-[0.08em] uppercase text-white/50 leading-tight"
          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
        >
          {badge.sublabel}
        </span>
      </div>
    </motion.div>
  );
}

/* ── Compact Michelin Badge — for use in cards or small spaces ── */
export function MichelinBadge({ keys }: { keys: 1 | 2 | 3 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-[#c4a87c]/40 rounded-sm"
    >
      <span className="text-[10px]">{"🔑".repeat(keys)}</span>
      <span
        className="text-[9px] tracking-[0.15em] uppercase text-[#3a2a1a]/60"
        style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
      >
        Michelin {keys === 1 ? "Key" : "Keys"}
      </span>
    </motion.div>
  );
}

export default AwardBadgeStrip;
