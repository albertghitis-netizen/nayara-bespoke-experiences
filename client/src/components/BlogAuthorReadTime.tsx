/*
 * BlogAuthorReadTime — Bold author profile + dynamic reading time
 * Full-width espresso band that visually breaks from the cream title block.
 * Fixed reading progress bar sticks to the top of the viewport on scroll.
 *
 * No dashes. No divider lines.
 */

import { useEffect, useState } from "react";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";
const NAYARA_LEAF = `${CDN}/nayara-leaf-beige_abbaf178.png`;

interface BlogAuthorReadTimeProps {
  author?: string;
  authorRole?: string;
  authorImage?: string;
  date: string;
  wordCount?: number;
  readingTime?: number;
  /** Override the band background (defaults to espresso) */
  bgColor?: string;
}

function calcReadingTime(wordCount: number): number {
  return Math.max(1, Math.ceil(wordCount / 250));
}

/** Count words in a block of text (strips HTML tags) */
export function countWordsInHTML(html: string): number {
  const text = html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  return text ? text.split(" ").length : 0;
}

export default function BlogAuthorReadTime({
  author = "Nayara Resorts",
  authorRole = "Editorial",
  authorImage,
  date,
  wordCount,
  readingTime,
  bgColor,
}: BlogAuthorReadTimeProps) {
  const [progress, setProgress] = useState(0);
  const [showFixedBar, setShowFixedBar] = useState(false);

  const minutes = wordCount ? calcReadingTime(wordCount) : readingTime || 5;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setProgress(Math.min(100, Math.round((scrollTop / docHeight) * 100)));
      }
      // Show fixed bar once user scrolls past the hero area
      setShowFixedBar(scrollTop > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bandBg = bgColor || "#3B2B26";
  const isLight = bandBg === "#F7F5F0" || bandBg === "#E8E2D8";
  const textPrimary = isLight ? "#3B2B26" : "#F7F5F0";
  const textSecondary = isLight ? "#5A4A3A" : "rgba(247,245,240,0.7)";
  const pillBg = isLight ? "rgba(59,43,38,0.08)" : "rgba(247,245,240,0.12)";
  const pillText = isLight ? "#5A4A3A" : "rgba(247,245,240,0.9)";
  const progressBarBg = isLight ? "#E8E2D8" : "rgba(247,245,240,0.15)";
  const progressBarFill = isLight ? "#3B2B26" : "#D4A853";

  return (
    <>
      {/* ── FIXED READING PROGRESS BAR (sticks to top on scroll) ── */}
      <div
        className="fixed top-0 left-0 right-0 z-[60] transition-opacity duration-300"
        style={{ opacity: showFixedBar ? 1 : 0, pointerEvents: "none" }}
      >
        <div className="w-full h-[3px]" style={{ backgroundColor: progressBarBg }}>
          <div
            className="h-full transition-all duration-200 ease-out"
            style={{ width: `${progress}%`, backgroundColor: progressBarFill }}
          />
        </div>
      </div>

      {/* ── AUTHOR BAND ── */}
      <section style={{ backgroundColor: bandBg }}>
        <div className="max-w-3xl mx-auto px-8 md:px-16 py-8 md:py-10">
          <div className="flex items-center gap-5 md:gap-6">
            {/* Leaf mark */}
            <img
              src={authorImage || NAYARA_LEAF}
              alt={author}
              className="w-14 h-14 md:w-16 md:h-16 object-contain flex-shrink-0"
              loading="lazy"
            />

            {/* Author info + reading time */}
            <div className="flex flex-col gap-2 min-w-0">
              {/* Name + role */}
              <div>
                <span
                  className="text-[17px] md:text-[18px] tracking-[0.01em]"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: textPrimary }}
                >
                  {author}
                </span>
                {authorRole && (
                  <span
                    className="text-[13px] md:text-[14px] tracking-[0.04em] ml-3"
                    style={{ fontFamily: "var(--font-body)", color: textSecondary }}
                  >
                    {authorRole}
                  </span>
                )}
              </div>

              {/* Date + reading time pill */}
              <div className="flex items-center gap-3 flex-wrap">
                <span
                  className="text-[13px] tracking-[0.02em]"
                  style={{ fontFamily: "var(--font-body)", color: textSecondary }}
                >
                  {date}
                </span>

                {/* Reading time pill */}
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] tracking-[0.08em] uppercase font-medium"
                  style={{
                    fontFamily: "var(--font-body)",
                    backgroundColor: pillBg,
                    color: pillText,
                  }}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {minutes} min read
                </span>
              </div>
            </div>
          </div>


        </div>
      </section>
    </>
  );
}
