/**
 * BY NIGHT CTA — Shared dark cascade section for all property pages
 * Links to the /by-night page. Designed to sit at the darkest end of each cascade.
 * Each property provides its own night-relevant imagery.
 */
import { Link } from "wouter";
import NativeVideo from "@/components/NativeVideo";
import {
  AnimateOnScroll,
  MediaReveal,
  fadeUp,
} from "@/components/motion";

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

type ByNightCTAProps = {
  /** Vertical media (left/right alternating) */
  verticalSrc: string;
  verticalIsVideo?: boolean;
  verticalRatio?: string;
  /** Horizontal media (full-width below) */
  horizontalSrc?: string;
  horizontalIsVideo?: boolean;
  horizontalRatio?: string;
  /** Dark background color — should be the darkest in the page's gradient */
  bgColor?: string;
  /** Property-specific headline, e.g. "Stargazing\nin the Desert" */
  headline?: string;
  /** Property-specific body text */
  bodyText?: string;
  /** Whether text is on left (even index) or right (odd index) */
  textSide?: "left" | "right";
};

export default function ByNightCTA({
  verticalSrc,
  verticalIsVideo = false,
  verticalRatio = "3/4",
  horizontalSrc,
  horizontalIsVideo = false,
  horizontalRatio = "16/9",
  bgColor = "#1a1a24",
  headline = "When Night\nFalls",
  bodyText = "As darkness descends, a different world reveals itself — one of starlit skies, nocturnal sounds, and intimate warmth. Discover the extraordinary experiences that await after sunset across all Nayara properties.",
  textSide = "left",
}: ByNightCTAProps) {
  const isTextLeft = textSide === "left";

  return (
    <section id="by-night-cta">
      {/* Row: Vertical media + Text column */}
      <div className="flex flex-col md:flex-row" style={{ backgroundColor: bgColor }}>
        {/* Vertical media */}
        <div className={`w-full md:w-1/2 ${isTextLeft ? "md:order-2" : "md:order-1"}`}>
          <MediaReveal delay={0.1}>
            <div className="overflow-hidden" style={{ aspectRatio: verticalRatio }}>
              {verticalIsVideo ? (
                <NativeVideo src={verticalSrc} className="w-full h-full object-cover" />
              ) : (
                <img src={verticalSrc} alt="Nayara by Night" className="w-full h-full object-cover" loading="lazy" />
              )}
            </div>
          </MediaReveal>
        </div>

        {/* Text column */}
        <div
          className={`w-full md:w-1/2 flex flex-col justify-center px-8 py-12 md:px-16 lg:px-24 ${
            isTextLeft ? "md:order-1" : "md:order-2"
          }`}
          style={{ backgroundColor: bgColor }}
        >
          <AnimateOnScroll variants={fadeUp}>
            <p
              className="text-[11px] tracking-[0.2em] mb-4 hidden"
              style={{ ...body, fontWeight: 500, color: "rgba(255,255,255,0.3)" }}
            >
              Nayara by Night
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variants={fadeUp} delay={0.1}>
            <h2 className="mb-6 md:mb-8">
              {headline.split("\n").map((line, i) => (
                <span
                  key={i}
                  className="block text-2xl md:text-4xl lg:text-[48px] leading-[1.05] tracking-wide text-white/90"
                  style={heading}
                >
                  {line}
                </span>
              ))}
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll variants={fadeUp} delay={0.2}>
            <p
              className="text-white/50 text-[15px] leading-[1.85] max-w-[480px]"
              style={body}
            >
              {bodyText}
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variants={fadeUp} delay={0.3}>
            <a
              href="https://blog.nayararesorts.com/nayara-by-night-of-moon-and-stars"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 md:mt-10 inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-[#C4A265] text-[#C4A265] hover:bg-[#C4A265] hover:text-black transition-all duration-300"
            >
              <span
                className="text-[11px] tracking-[0.2em] uppercase"
                style={{ ...body, fontWeight: 500 }}
              >
                Of Moon and Stars
              </span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Horizontal media — full bleed, desktop only */}
      {horizontalSrc && (
        <div className="hidden md:block" style={{ backgroundColor: bgColor }}>
          <MediaReveal delay={0.05}>
            <div className="overflow-hidden" style={{ aspectRatio: horizontalRatio }}>
              {horizontalIsVideo ? (
                <NativeVideo src={horizontalSrc} className="w-full h-full object-cover" />
              ) : (
                <img src={horizontalSrc} alt="Nayara by Night — landscape" className="w-full h-full object-cover" loading="lazy" />
              )}
            </div>
          </MediaReveal>
        </div>
      )}
    </section>
  );
}
