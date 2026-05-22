/**
 * BY NIGHT CTA , Shared dark cascade section for all property pages
 * Links to the /by-night page. Designed to sit at the darkest end of each cascade.
 * Each property provides its own night-relevant imagery.
 * 
 * Supports two modes:
 * - overlayOnVideo=true: Full-width horizontal video with text overlay (horizontal-only rule)
 * - overlayOnVideo=false (default): Vertical media + text column side by side
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
  /** Horizontal media (full-width below or overlay source) */
  horizontalSrc?: string;
  horizontalIsVideo?: boolean;
  horizontalRatio?: string;
  /** Dark background color , should be the darkest in the page's gradient */
  bgColor?: string;
  /** Property-specific headline, e.g. "Stargazing\nin the Desert" */
  headline?: string;
  /** Property-specific body text */
  bodyText?: string;
  /** Whether text is on left (even index) or right (odd index) */
  textSide?: "left" | "right";
  /** Optional text link below body text */
  textLink?: string;
  textLinkLabel?: string;
  /** Hide the "Nayara by Night" button */
  hideButton?: boolean;
  /** Custom button label (defaults to "Nayara by Night") */
  buttonLabel?: string;
  /** Custom button href (defaults to "/by-night") */
  buttonHref?: string;
  /** When true, render as horizontal overlay (By Night = horizontal rule) */
  overlayOnVideo?: boolean;
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
  bodyText = "As darkness descends, a different world reveals itself , one of starlit skies, nocturnal sounds, and intimate warmth. Discover the extraordinary experiences that await after sunset across all Nayara properties.",
  textSide = "left",
  textLink,
  textLinkLabel,
  hideButton = false,
  buttonLabel = "Nayara by Night",
  buttonHref = "/by-night",
  overlayOnVideo = false,
}: ByNightCTAProps) {
  const isTextLeft = textSide === "left";

  /* ── Overlay mode: horizontal (desktop) / vertical (mobile) with text overlay ── */
  if (overlayOnVideo) {
    const desktopSrc = horizontalSrc || verticalSrc;
    const desktopIsVideo = horizontalSrc ? horizontalIsVideo : verticalIsVideo;
    /* Mobile: use verticalSrc if available, otherwise placeholder */
    const mobileSrc = verticalSrc;
    const mobileIsVid = verticalIsVideo;
    return (
      <section id="by-night-cta" style={{ backgroundColor: bgColor }}>
        {/* Desktop: horizontal */}
        <div className="relative w-full hidden md:block">
          <div style={{ aspectRatio: horizontalRatio || "16/9" }}>
            {desktopIsVideo ? (
              <NativeVideo src={desktopSrc} className="w-full h-full object-cover" loop />
            ) : (
              <img src={desktopSrc} alt="Nayara by Night" className="w-full h-full object-cover" decoding="async" loading="lazy" />
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end pb-16 lg:pb-20 px-16 lg:px-24">
            <AnimateOnScroll variants={fadeUp}>
              <span
                className="text-[11px] tracking-[0.2em] uppercase mb-4 block text-white/70"
                style={{ ...body, fontWeight: 500 }}
              >
                Nayara by Night
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll variants={fadeUp} delay={0.1}>
              <h2 className="mb-6">
                {headline.split("\n").map((line, i) => (
                  <span
                    key={i}
                    className="block text-[2rem] lg:text-[2.5rem] leading-[1.05] tracking-wide text-white"
                    style={heading}
                  >
                    {line}
                  </span>
                ))}
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll variants={fadeUp} delay={0.2}>
              <p
                className="text-[15px] leading-[1.85] max-w-[480px] text-white/85"
                style={body}
              >
                {bodyText.split("\n\n")[0]}
              </p>
            </AnimateOnScroll>
            {!hideButton && (
              <AnimateOnScroll variants={fadeUp} delay={0.3}>
                <a
                  href={buttonHref}
                  className="inline-flex items-center gap-2 mt-6 px-4 py-2.5 rounded-full border border-white/40 backdrop-blur-md text-white text-[11px] tracking-[0.15em] uppercase font-medium transition-all hover:bg-white/10 w-fit"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {buttonLabel}
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </AnimateOnScroll>
            )}
          </div>
        </div>
        {/* Mobile: text → vertical (Atacama pattern, no overlay) */}
        <div className="md:hidden" style={{ backgroundColor: bgColor }}>
          <div className="px-5 pt-10 pb-6">
            <AnimateOnScroll variants={fadeUp}>
              <span
                className="text-[11px] tracking-[0.2em] uppercase mb-4 block text-white/70"
                style={{ ...body, fontWeight: 500 }}
              >
                Nayara by Night
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll variants={fadeUp} delay={0.1}>
              <h2 className="mb-4">
                {headline.split("\n").map((line, i) => (
                  <span
                    key={i}
                    className="block text-2xl leading-[1.05] tracking-wide text-white"
                    style={heading}
                  >
                    {line}
                  </span>
                ))}
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll variants={fadeUp} delay={0.15}>
              <p
                className="text-[14px] leading-[1.85] text-white/60"
                style={body}
              >
                {bodyText.split("\n\n")[0]}
              </p>
            </AnimateOnScroll>
            {!hideButton && (
              <AnimateOnScroll variants={fadeUp} delay={0.2}>
                <a
                  href={buttonHref}
                  className="inline-flex items-center gap-2 mt-5 px-4 py-2.5 rounded-full border border-white/40 text-white text-[11px] tracking-[0.15em] uppercase font-medium w-fit"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {buttonLabel}
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </AnimateOnScroll>
            )}
          </div>
          {mobileSrc ? (
            mobileIsVid ? (
              <div style={{ aspectRatio: verticalRatio || "3/4" }}>
                <NativeVideo src={mobileSrc} className="w-full h-full object-cover" loop />
              </div>
            ) : (
              <img src={mobileSrc} alt="Nayara by Night" className="w-full" style={{ aspectRatio: verticalRatio || "3/4", objectFit: "cover" }} decoding="async" loading="lazy" />
            )
          ) : (
            <div style={{ aspectRatio: "3/4", backgroundColor: "#1a1a1a" }} className="flex items-center justify-center">
              <span className="text-white/30 text-xs tracking-[0.15em] uppercase" style={{ fontFamily: "var(--font-body)" }}>Vertical needed</span>
            </div>
          )}
        </div>
      </section>
    );
  }

  /* ── Standard mode: vertical media + text column ── */
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
                <img src={verticalSrc} alt="Nayara by Night" className="w-full h-full object-cover" decoding="async" loading="lazy" />
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

          {textLink && textLinkLabel && (
            <AnimateOnScroll variants={fadeUp} delay={0.25}>
              <a
                href={textLink}
                className="inline-block mt-8 text-[11px] tracking-[0.15em] transition-opacity hover:opacity-70"
                style={{ ...body, fontWeight: 500, color: "rgba(255,255,255,0.5)" }}
              >
                {textLinkLabel} →
              </a>
            </AnimateOnScroll>
          )}

          {!hideButton && (
            <AnimateOnScroll variants={fadeUp} delay={0.3}>
              <a
                href={buttonHref}
                className="group mt-8 md:mt-10 inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/40 backdrop-blur-md text-white text-[11px] tracking-[0.15em] uppercase font-medium transition-all hover:bg-white/10 w-fit"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {buttonLabel}
                <svg
                  className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </AnimateOnScroll>
          )}
        </div>
      </div>

      {/* Horizontal media , full bleed, desktop only */}
      {horizontalSrc && (
        <div className="hidden md:block" style={{ backgroundColor: bgColor }}>
          <MediaReveal delay={0.05}>
            <div className="overflow-hidden" style={{ aspectRatio: horizontalRatio }}>
              {horizontalIsVideo ? (
                <NativeVideo src={horizontalSrc} className="w-full h-full object-cover" />
              ) : (
                <img src={horizontalSrc} alt="Nayara by Night , landscape" className="w-full h-full object-cover" decoding="async" loading="lazy" />
              )}
            </div>
          </MediaReveal>
        </div>
      )}
    </section>
  );
}
