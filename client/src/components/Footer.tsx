/*
 * Footer — Nayara Global Footer
 * Tight 3-column layout, no texture, no headers
 * Left: page links + Press/Journal/Podcast
 * Center: all 6 hotels flat
 * Right: contact (email + phones)
 * Newsletter CTA centered, smaller
 * Nayara logo aligned with columns
 * Phone format: (844) 865-2002 and (506) 2479-1600
 */

import { motion } from "framer-motion";

const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara-logo-tree-PiKqyUUYDRwvX8q8L5CDsH.png";

/* ── Social Icons ── */
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M23.5 6.5a3 3 0 0 0-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.4A3 3 0 0 0 .5 6.5 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.5 3 3 0 0 0 2.1 2.1c1.9.4 9.4.4 9.4.4s7.5 0 9.4-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.5zM9.75 15.5V8.5l6.25 3.5-6.25 3.5z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.3l-.5 3.5h-2.8v8.4A12 12 0 0 0 24 12z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78 2.93 2.93 0 0 1 .88.13V9a6.34 6.34 0 0 0-1-.05 6.34 6.34 0 1 0 6.34 6.34V9.37a8.16 8.16 0 0 0 4.77 1.52V7.44a4.85 4.85 0 0 1-.89-.75z" />
    </svg>
  );
}

/* ── Main Footer ── */
export default function Footer() {
  const handlePlaceholder = (label: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    import("sonner").then(({ toast }) => toast(label + " — Coming Soon"));
  };

  return (
    <footer className="relative overflow-hidden bg-[#f0ebe0]">
      {/* Main footer content — tight padding */}
      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-10 pt-12 pb-8 md:pt-16 md:pb-10">
        {/* Nayara logo — left-aligned on desktop, centered on mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center md:items-start mb-8 md:mb-10"
        >
          <img
            src={LOGO_URL}
            alt="Nayara"
            className="w-20 md:w-24 mb-2"
          />
          <p
            className="text-[#4a3a2a] uppercase text-sm"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, letterSpacing: "0.12em" }}
          >
            Nayara
          </p>
        </motion.div>

        {/* Three tight columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 text-[13px]">
          {/* LEFT — Page links + Press/Journal/Podcast */}
          <div className="flex flex-col gap-[6px]">
            {["About", "Stay", "Dine & Drink", "Amenities", "FAQs"].map(
              (label) => (
                <a
                  key={label}
                  href="#"
                  onClick={handlePlaceholder(label)}
                  className="text-[#5a4a3a]/70 hover:text-[#3a2a1a] transition-colors leading-snug"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                >
                  {label}
                </a>
              )
            )}
            {/* Separator */}
            <div className="h-px w-8 bg-[#5a4a3a]/15 my-1" />
            {["Press", "Journal", "Podcast"].map((label) => (
              <a
                key={label}
                href="#"
                onClick={handlePlaceholder(label)}
                className="text-[#5a4a3a]/70 hover:text-[#3a2a1a] transition-colors leading-snug"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* CENTER — All 6 hotels, flat list */}
          <div className="flex flex-col gap-[6px]">
            {[
              "Nayara Gardens",
              "Nayara Springs",
              "Nayara Tented Camp",
              "Nayara Alto Atacama",
              "Nayara Hangaroa",
              "Nayara Bocas del Toro",
            ].map((name) => (
              <span
                key={name}
                className="text-[#5a4a3a]/70 leading-snug"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                {name}
              </span>
            ))}
          </div>

          {/* RIGHT — Contact info */}
          <div className="flex flex-col gap-[6px]">
            <a
              href="mailto:reservations@nayararesorts.com"
              className="text-[#5a4a3a]/70 hover:text-[#3a2a1a] transition-colors leading-snug"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              reservations@nayararesorts.com
            </a>
            <a
              href="tel:+18448652002"
              className="text-[#5a4a3a]/70 hover:text-[#3a2a1a] transition-colors leading-snug"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              (844) 865-2002
            </a>
            <a
              href="tel:+50624791600"
              className="text-[#5a4a3a]/70 hover:text-[#3a2a1a] transition-colors leading-snug"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              (506) 2479-1600
            </a>
          </div>
        </div>

        {/* Newsletter CTA — centered, smaller */}
        <div className="flex justify-center mt-10 md:mt-12">
          <a
            href="#"
            onClick={handlePlaceholder("Newsletter")}
            className="inline-flex items-center gap-2 text-[#5a4a3a] text-xs tracking-[0.08em] border border-[#5a4a3a]/25 rounded-full px-6 py-2.5 hover:bg-[#5a4a3a] hover:text-[#f0ebe0] transition-all duration-300"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            Stay Inspired with the Nayara Newsletter
          </a>
        </div>
      </div>

      {/* Bottom bar — social + copyright */}
      <div className="relative z-10 border-t border-[#5a4a3a]/10">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/nayararesorts/" target="_blank" rel="noopener noreferrer" className="text-[#5a4a3a]/40 hover:text-[#3a2a1a] transition-colors">
              <InstagramIcon />
            </a>
            <a href="https://www.youtube.com/@NayaraResorts" target="_blank" rel="noopener noreferrer" className="text-[#5a4a3a]/40 hover:text-[#3a2a1a] transition-colors">
              <YouTubeIcon />
            </a>
            <a href="https://www.facebook.com/NayaraResorts" target="_blank" rel="noopener noreferrer" className="text-[#5a4a3a]/40 hover:text-[#3a2a1a] transition-colors">
              <FacebookIcon />
            </a>
            <a href="https://www.tiktok.com/@nayararesorts" target="_blank" rel="noopener noreferrer" className="text-[#5a4a3a]/40 hover:text-[#3a2a1a] transition-colors">
              <TikTokIcon />
            </a>
          </div>

          {/* Copyright */}
          <p
            className="text-[#6b5b4b]/40 text-[11px]"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            &copy; {new Date().getFullYear()} Nayara Resorts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
