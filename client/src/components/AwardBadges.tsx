/**
 * Award Badges , Subtle award indicators for property Story sections
 * Uses actual CDN logos from awards.ts data
 */

import { motion } from "framer-motion";
import { awardsByProperty, type Award } from "@/data/awards";

const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

/* ── Award Badge Strip , horizontal row of logos + labels ── */
export function AwardBadgeStrip({ property }: { property: string }) {
  const awards = awardsByProperty[property] || [];
  if (awards.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="flex flex-wrap items-center justify-start gap-5 md:gap-8 mt-8 pt-6 border-t border-[#3B2B26]/10"
    >
      {awards.map((award: Award, i: number) => (
        <motion.div
          key={award.id}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 * i }}
          className="flex items-center gap-3"
          title={award.description}
        >
          <img
            src={award.logo}
            alt={award.name}
            className="h-8 md:h-10 w-auto object-contain opacity-70"
            loading="lazy"
          />
          <div className="flex flex-col">
            <span
              className="text-[11px] tracking-[0.06em] text-[#3B2B26]/70 leading-tight"
              style={{ ...body, fontWeight: 500 }}
            >
              {award.name}
            </span>
            {award.year && (
              <span
                className="text-[9px] tracking-[0.08em] text-[#3B2B26]/40 leading-tight"
                style={body}
              >
                {award.year}
              </span>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

/* ── Floating Award Badge , for hero overlays (white text) ── */
export function FloatingAwardBadge({
  property,
  className = "",
}: {
  property: string;
  className?: string;
}) {
  const awards = awardsByProperty[property] || [];
  if (awards.length === 0) return null;

  /* Show only the first (most prestigious) award as a floating badge */
  const award = awards[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`inline-flex items-center gap-3 px-4 py-2 border border-white/20 rounded-sm backdrop-blur-sm bg-white/5 ${className}`}
    >
      <img
        src={award.logo}
        alt={award.name}
        className="h-6 w-auto object-contain brightness-200 invert"
        loading="lazy"
      />
      <div className="flex flex-col">
        <span
          className="text-[10px] tracking-[0.12em] text-white/80 leading-tight"
          style={{ ...body, fontWeight: 500 }}
        >
          {award.name}
        </span>
        {award.year && (
          <span
            className="text-[8px] tracking-[0.08em] text-white/50 leading-tight"
            style={body}
          >
            {award.year}
          </span>
        )}
      </div>
    </motion.div>
  );
}

export default AwardBadgeStrip;
