/*
 * Footer , Nayara Global Footer
 * Brown background (#3B2B26) with light/white text
 * Luxury editorial style , Aman/Rosewood inspired
 *
 * Now data-driven: columns come from navigation.ts getFooterColumns()
 * Accepts optional pageType prop to customize link groupings.
 */

import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";
import { DEFAULT_BOOKING_URL } from "@/data/booking";
import { type PageType, getFooterColumns } from "@/data/navigation";

export const BOOKING_URL = DEFAULT_BOOKING_URL;

/* ── Social Icons ── */
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M23.5 6.5a3 3 0 0 0-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.4A3 3 0 0 0 .5 6.5 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.5 3 3 0 0 0 2.1 2.1c1.9.4 9.4.4 9.4.4s7.5 0 9.4-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.5zM9.75 15.5V8.5l6.25 3.5-6.25 3.5z" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.3l-.5 3.5h-2.8v8.4A12 12 0 0 0 24 12z" />
    </svg>
  );
}
function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78 2.93 2.93 0 0 1 .88.13V9a6.34 6.34 0 0 0-1-.05 6.34 6.34 0 1 0 6.34 6.34V9.37a8.16 8.16 0 0 0 4.77 1.52V7.44a4.85 4.85 0 0 1-.89-.75z" />
    </svg>
  );
}

/* ── Animated Leaf , very slow fade in when scrolled into view ── */
function AnimatedLeaf({ propertyName, textColor = "#FFFFFF", nameFontSize = "16px" }: { propertyName?: string; textColor?: string; nameFontSize?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none flex flex-col items-center"
      style={{ width: "278px" }}
    >
      {/* Leaf , fades in at 0s (1s duration) */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 1s ease-in",
          transitionDelay: "0s",
          width: "278px",
          height: "303px",
        }}
      >
        <img
          src="/manus-storage/nayara-leaf-logo_382a5427.svg"
          alt="Nayara"
          className="w-full h-full object-contain"
        />
      </div>
      {/* Property name (e.g. "Alto Atacama") , fades in 1s after leaf */}
      {propertyName && (
        <span
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 1s ease-in",
            transitionDelay: "1s",
            fontSize: nameFontSize,
            color: textColor,
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            letterSpacing: "0.15em",
            textAlign: "center",
            textTransform: "uppercase",
            marginTop: "-62px",
          }}
        >
          {propertyName}
        </span>
      )}
    </div>
  );
}


interface FooterProps {
  pageType?: PageType;
  /** Override footer background color (default: #3B2B26 espresso) */
  bgColor?: string;
  /** Override footer text color (default: white) */
  textColor?: string;
  /** Use Milky Way night sky as footer background */
  nightSkyBg?: boolean;
  propertyName?: string;
  /** Property name to display under the leaf */
  /** Override font size for the property name label (default: 16px) */
  nameFontSize?: string;
}

export default function Footer({ pageType = "brand", bgColor, textColor = "#FFFFFF", nightSkyBg, propertyName, nameFontSize }: FooterProps) {
  const [, navigate] = useLocation();
  const columns = getFooterColumns(pageType);

  const handlePlaceholder = (label: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    import("sonner").then(({ toast }) => toast(label + " - Coming Soon"));
  };

  return (
    <footer className="relative overflow-x-clip" style={{ backgroundColor: bgColor ?? "#3B2B26" }}>

      {/* Optional Milky Way night sky background */}
      {nightSkyBg && (
        <>
          <img
            src="/manus-storage/milky-way-footer_c702320f.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.65)" }} />
        </>
      )}
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 pt-5 md:pt-7 pb-10">
        {/* Desktop: logo absolutely positioned on left, columns fill right portion */}
        <div className="hidden md:block relative text-[13px] leading-relaxed mb-8" style={{ minHeight: '180px' }}>
          {/* Logo — absolutely positioned so it doesn't affect column layout */}
          <div className="absolute left-0 top-0">
            <AnimatedLeaf propertyName={propertyName} textColor={textColor} nameFontSize={nameFontSize} />
          </div>
          {/* Nav columns — occupy right 75% of the row, spread evenly */}
          <div className="flex justify-between pt-12" style={{ marginLeft: '25%' }}>
            {columns.map((col, idx) => (
              <div key={col.title} style={{ marginLeft: idx < 2 ? '2rem' : undefined }}>
                <span className="text-[11px] tracking-[0.25em] block mb-4" style={{ color: textColor, fontFamily: "var(--font-body)", fontWeight: 500 }}>{col.title}</span>
                <div className="flex flex-col gap-[6px]">
                  {col.links.map((link) => (
                    <span key={link.label} className="flex flex-col">
                      {link.separatorBefore && <div className="mt-2 mb-2" style={{ width: "10em", height: "1px", backgroundColor: `${textColor}33` }} />}
                      <a href={link.route} onClick={(e) => { if (link.external) return; e.preventDefault(); navigate(link.route); }} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined} className="transition-colors" style={{ color: textColor, fontFamily: "var(--font-body)", fontWeight: 400 }}>{link.label}</a>
                    </span>
                  ))}
                </div>
              </div>
            ))}
            {/* Contact column */}
            <div>
              <span className="text-[11px] tracking-[0.25em] block mb-4" style={{ color: textColor, fontFamily: "var(--font-body)", fontWeight: 500 }}>Contact</span>
              <div className="flex flex-col gap-[6px]">
                <a href="mailto:reservations@nayararesorts.com" className="transition-colors" style={{ color: textColor, fontFamily: "var(--font-body)", fontWeight: 400 }}>reservations@nayararesorts.com</a>
                <a href="tel:+18448652002" className="transition-colors" style={{ color: textColor, fontFamily: "var(--font-body)", fontWeight: 400 }}>+1 844 865 2002 (US)</a>
                <a href="tel:+442070784060" className="transition-colors" style={{ color: textColor, fontFamily: "var(--font-body)", fontWeight: 400 }}>+44 020 7078 4060 (UK)</a>
                <a href="tel:+50624791600" className="transition-colors" style={{ color: textColor, fontFamily: "var(--font-body)", fontWeight: 400 }}>+506 2479 1600 (Costa Rica)</a>
                <a href="/privacy-policy" onClick={(e) => { e.preventDefault(); navigate("/privacy-policy"); }} className="transition-colors" style={{ color: textColor, fontFamily: "var(--font-body)", fontWeight: 400 }}>Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile fallback grid */}
        <div className="md:hidden grid grid-cols-2 gap-8 text-[12px] leading-relaxed mb-8">
          {columns.map((col) => (
            <div key={col.title}>
              <span className="text-[11px] tracking-[0.25em] block mb-4" style={{ color: textColor, fontFamily: "var(--font-body)", fontWeight: 500 }}>{col.title}</span>
              <div className="flex flex-col gap-[6px]">
                {col.links.map((link) => (
                  <a key={link.label} href={link.route} onClick={(e) => { if (!link.external) { e.preventDefault(); navigate(link.route); } }} className="transition-colors" style={{ color: textColor, fontFamily: "var(--font-body)", fontWeight: 400 }}>{link.label}</a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="relative flex flex-col items-center mt-10 mb-6" style={{ paddingLeft: '8%' }}>
          {/* Mobile leaf , only shows on mobile since desktop has it in the column */}
          <div className="md:hidden absolute left-1/2 -translate-x-1/2" style={{ bottom: "100%", marginBottom: "-8px" }}>
            <AnimatedLeaf />
          </div>
          <a
            href="#"
            onClick={handlePlaceholder("Newsletter")}
            className="newsletter-cta inline-flex items-center justify-center h-12 px-12 rounded-full border"
            style={{ borderColor: `${textColor}55` }}
          >
            <span
              className="newsletter-text text-[11px] tracking-[0.25em] transition-opacity duration-300"
              style={{ color: textColor, fontFamily: "var(--font-body)", fontWeight: 700, letterSpacing: "0.22em" }}
            >
              Stay Inspired with the Nayara Newsletter
            </span>
          </a>
        </div>

        {/* Social icons , centered, larger */}
        <div className="flex items-center justify-center gap-8 mt-6 mb-8" style={{ paddingLeft: '8%', color: textColor }}>
          <a href="https://www.instagram.com/nayararesorts/" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.75 }} className="social-icon-link"><InstagramIcon /></a>
          <a href="https://www.youtube.com/@NayaraResorts" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.75 }} className="social-icon-link"><YouTubeIcon /></a>
          <a href="https://www.facebook.com/NayaraResorts" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.75 }} className="social-icon-link"><FacebookIcon /></a>
          <a href="https://www.tiktok.com/@nayararesorts" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.75 }} className="social-icon-link"><TikTokIcon /></a>
        </div>

        {/* Copyright + Privacy */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4" style={{ paddingLeft: '8%' }}>
          <p
            className="text-[10px]"
            style={{ color: textColor, fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            &copy; {new Date().getFullYear()} Nayara Resorts. All rights reserved.
          </p>
          <span className="hidden sm:inline" style={{ color: textColor }}>|</span>
          <a
            href="/privacy-policy"
            onClick={(e) => { e.preventDefault(); navigate("/privacy-policy"); }}
            className="text-[10px] hover:opacity-100 transition-opacity"
            style={{ color: textColor, fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
