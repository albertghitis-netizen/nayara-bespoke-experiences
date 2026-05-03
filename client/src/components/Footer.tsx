/*
 * Footer — Nayara Global Footer
 * Brown background (#3B2B26) with light/white text
 * Luxury editorial style — Aman/Rosewood inspired
 *
 * Now data-driven: columns come from navigation.ts getFooterColumns()
 * Accepts optional pageType prop to customize link groupings.
 */

import { useEffect, useRef } from "react";
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

interface FooterProps {
  pageType?: PageType;
  /** Override footer background color (default: #3B2B26 espresso) */
  bgColor?: string;
  /** Override footer text color (default: white) */
  textColor?: string;
}

export default function Footer({ pageType = "brand", bgColor, textColor = "#FFFFFF" }: FooterProps) {
  const [, navigate] = useLocation();
  const columns = getFooterColumns(pageType);
  const leafRef = useRef<HTMLImageElement>(null);

  const handlePlaceholder = (label: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    import("sonner").then(({ toast }) => toast(label + " - Coming Soon"));
  };

  return (
    <footer className="relative overflow-x-clip" style={{ backgroundColor: bgColor ?? "#3B2B26" }}>
      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-10 pt-10 md:pt-14 pb-10">
        {/* Dynamic columns from navigation config + Contact column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 text-[12px] leading-relaxed">
          {columns.map((col) => (
            <div key={col.title}>
              <span
                className="text-[10px] tracking-[0.25em] block mb-4"
                style={{ color: textColor, fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                {col.title}
              </span>
              <div className="flex flex-col gap-[6px]">
                {col.links.map((link) => (
                  <span key={link.label} className="flex flex-col">
                    {link.separatorBefore && (
                      <div
                        className="mt-2 mb-2"
                        style={{ width: "10em", height: "1px", backgroundColor: `${textColor}33` }}
                      />
                    )}
                    <a
                      href={link.route}
                      onClick={(e) => {
                        if (link.external) return;
                        e.preventDefault();
                        navigate(link.route);
                      }}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="transition-colors"
                      style={{ color: textColor, fontFamily: "var(--font-body)", fontWeight: 400 }}
                    >
                      {link.label}
                    </a>
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Contact — always present as the last column */}
          <div>
            <span
              className="text-[10px] tracking-[0.25em] block mb-4"
              style={{ color: textColor, fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Contact
            </span>
            <div className="flex flex-col gap-[6px]">
              <a
                href="mailto:reservations@nayararesorts.com"
                className="transition-colors"
                style={{ color: textColor, fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                reservations@nayararesorts.com
              </a>
              <a
                href="tel:+18448652002"
                className="transition-colors"
                style={{ color: textColor, fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                +1 844 865 2002 (US)
              </a>
              <a
                href="tel:+442070784060"
                className="transition-colors"
                style={{ color: textColor, fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                +44 020 7078 4060 (UK)
              </a>
              <a
                href="tel:+50624791600"
                className="transition-colors"
                style={{ color: textColor, fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                +506 2479 1600 (Costa Rica)
              </a>
              <a
                href="/privacy-policy"
                onClick={(e) => { e.preventDefault(); navigate("/privacy-policy"); }}
                className="transition-colors"
                style={{ color: textColor, fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter CTA — centered, with flourish left + leaf right */}
        <div className="relative flex justify-center mt-10 mb-6">


          <a
            href="#"
            onClick={handlePlaceholder("Newsletter")}
            className="inline-flex items-center justify-center h-12 px-12 rounded-full border transition-all duration-300"
            style={{ borderColor: `${textColor}33` }}
          >
            <span
              className="text-[11px] tracking-[0.25em]"
              style={{ color: textColor, fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Stay Inspired with the Nayara Newsletter
            </span>
          </a>
        </div>

        {/* Social icons — centered, larger */}
        <div className="flex items-center justify-center gap-8 mt-6 mb-8" style={{ color: textColor }}>
          <a href="https://www.instagram.com/nayararesorts/" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.7 }} className="hover:opacity-80 transition-opacity"><InstagramIcon /></a>
          <a href="https://www.youtube.com/@NayaraResorts" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.7 }} className="hover:opacity-80 transition-opacity"><YouTubeIcon /></a>
          <a href="https://www.facebook.com/NayaraResorts" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.7 }} className="hover:opacity-80 transition-opacity"><FacebookIcon /></a>
          <a href="https://www.tiktok.com/@nayararesorts" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.7 }} className="hover:opacity-80 transition-opacity"><TikTokIcon /></a>
        </div>

        {/* Copyright + Privacy */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
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
