/**
 * ContentCrossLinks — "Explore More" section for content pages
 * Shows links to related content sections and pillar pages.
 * Placed above Footer on Blog, Press, Awards, Podcast pages.
 */

import { Link } from "wouter";

interface ContentCrossLinksProps {
  /** Current page to exclude from links */
  currentPage: "blog" | "podcast" | "press" | "awards" | "journal" | "gallery";
}

const contentLinks = [
  { id: "journal", label: "Journal", route: "/journal" },
  { id: "awards", label: "Awards & Press", route: "/awards" },
];

const pillarLinks = [
  { label: "Experiences", route: "/experiences" },
  { label: "Sustainability", route: "/sustainability" },
  { label: "Wellness", route: "/wellness" },
  { label: "The Table", route: "/gastronomy" },
];

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)" } as const;

export default function ContentCrossLinks({ currentPage }: ContentCrossLinksProps) {
  const otherContent = contentLinks.filter((l) => l.id !== currentPage);

  return (
    <section className="py-16 md:py-24 px-6 md:px-10 bg-[#3a2a1a]/[0.03]">
      <div className="max-w-[900px] mx-auto text-center">
        <p
          className="text-[#3a2a1a]/30 text-[10px] tracking-[0.4em] mb-4"
          style={{ ...body, fontWeight: 500 }}
        >
          Explore More
        </p>
        <h2
          className="text-[#3a2a1a] text-2xl md:text-3xl mb-10"
          style={heading}
        >
          Continue Discovering Nayara
        </h2>

        {/* Content section links */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {otherContent.map((link) => (
            <Link
              key={link.id}
              href={link.route}
              className="px-5 py-2.5 border border-[#3a2a1a]/15 rounded-full text-[#3a2a1a]/50 text-[12px] tracking-[0.08em] hover:border-[#3a2a1a]/30 hover:text-[#3a2a1a] transition-all"
              style={{ ...body, fontWeight: 500 }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="w-12 h-px bg-[#3a2a1a]/10 mx-auto mb-8" />

        {/* Pillar links */}
        <div className="flex flex-wrap justify-center gap-3">
          {pillarLinks.map((link) => (
            <Link
              key={link.label}
              href={link.route}
              className="px-5 py-2.5 bg-[#3a2a1a]/5 rounded-full text-[#3a2a1a]/40 text-[12px] tracking-[0.08em] hover:bg-[#3a2a1a]/10 hover:text-[#3a2a1a] transition-all"
              style={{ ...body, fontWeight: 500 }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
