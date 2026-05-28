/**
 * PillarCrossLink , Subtle "Explore all [pillar] →" link
 * Used at the bottom of each pillar section on property pages
 * to cross-link to the brand-level pillar page.
 */

import { Link } from "wouter";

interface PillarCrossLinkProps {
  pillar: "experiences" | "sustainability" | "wellness" | "gastronomy";
  className?: string;
}

const pillarLabels: Record<string, { label: string; route: string }> = {
  experiences: { label: "Explore all Experiences", route: "/experiences" },
  sustainability: { label: "Explore all Sustainability", route: "/sustainability" },
  wellness: { label: "Explore all Wellness", route: "/wellness" },
  gastronomy: { label: "Explore Gastronomy", route: "/gastronomy" },
};

export default function PillarCrossLink({ pillar, className = "" }: PillarCrossLinkProps) {
  const { label, route } = pillarLabels[pillar];

  return (
    <div className={`mt-8 md:mt-12 text-center ${className}`}>
      <Link
        href={route}
        className="inline-flex items-center gap-2 text-[#3B2B26]/40 text-[12px] tracking-[0.1em] hover:text-[#3B2B26]/70 transition-colors"
        style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
      >
        {label}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
