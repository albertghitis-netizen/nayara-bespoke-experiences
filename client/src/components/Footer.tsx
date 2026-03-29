/*
 * Footer — Nayara Global Footer
 * Three tight columns (no headers): left (page links), center (all hotels), right (contact)
 * Nayara logo aligned, newsletter CTA, Press/Journal/Podcast in bottom bar
 */

import { motion } from "framer-motion";

const TEXTURE_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/botanical-texture-embossed-hig62x94aNi7TNioLbvtkE.webp";

const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara-logo-tree-PiKqyUUYDRwvX8q8L5CDsH.png";

/* ── Social Icons ── */
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M23.5 6.5a3 3 0 0 0-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.4A3 3 0 0 0 .5 6.5 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.5 3 3 0 0 0 2.1 2.1c1.9.4 9.4.4 9.4.4s7.5 0 9.4-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.5zM9.75 15.5V8.5l6.25 3.5-6.25 3.5z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.3l-.5 3.5h-2.8v8.4A12 12 0 0 0 24 12z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
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
      {/* Botanical texture */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `url(${TEXTURE_URL})`,
          backgroundSize: "900px 900px",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
        }}
      />

      {/* Main footer content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 py-14 md:py-20">
        {/* Nayara logo — centered above columns */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-12"
        >
          <motion.img
            src={LOGO_URL}
            alt="Nayara"
            className="w-28 md:w-32 mb-3"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <p
            className="text-[#4a3a2a] uppercase text-lg"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, letterSpacing: "0.12em" }}
          >
            Nayara
          </p>
        </motion.div>

        {/* Three tight columns — no headers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* LEFT — Page links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col gap-2">
              {["About", "Stay", "Dine & Drink", "Amenities", "FAQs"].map(
                (label) => (
                  <a
                    key={label}
                    href="#"
                    onClick={handlePlaceholder(label)}
                    className="text-[#5a4a3a]/70 hover:text-[#3a2a1a] transition-colors text-sm leading-tight"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                  >
                    {label}
                  </a>
                )
              )}
            </div>
          </motion.div>

          {/* CENTER — All hotels, flat list */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <div className="flex flex-col gap-2">
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
                  className="text-[#5a4a3a]/70 text-sm leading-tight"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                >
                  {name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
          >
            <div className="flex flex-col gap-2">
              <a
                href="mailto:reservations@nayararesorts.com"
                className="text-[#5a4a3a]/70 hover:text-[#3a2a1a] transition-colors text-sm leading-tight"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                reservations@nayararesorts.com
              </a>
              <a
                href="tel:+18448652002"
                className="text-[#5a4a3a]/70 hover:text-[#3a2a1a] transition-colors text-sm leading-tight"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                1 (844) 865-2002
              </a>
              <a
                href="tel:+50624791600"
                className="text-[#5a4a3a]/70 hover:text-[#3a2a1a] transition-colors text-sm leading-tight"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                506 (2479) 1600
              </a>
            </div>
          </motion.div>
        </div>

        {/* Newsletter CTA — centered pill button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="flex justify-center mt-14"
        >
          <a
            href="#"
            onClick={handlePlaceholder("Newsletter")}
            className="inline-flex items-center gap-2 bg-[#5a4a3a] text-[#f0ebe0] rounded-full px-8 py-3 text-sm tracking-[0.1em] hover:bg-[#3a2a1a] transition-colors"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Stay Inspired with the Nayara Newsletter
          </a>
        </motion.div>
      </div>

      {/* Bottom bar — Press, Journal, Podcast + social + copyright */}
      <div className="relative z-10 border-t border-[#5a4a3a]/15">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Press / Journal / Podcast */}
          <div className="flex items-center gap-5">
            {["Press", "Journal", "Podcast"].map((label) => (
              <a
                key={label}
                href="#"
                onClick={handlePlaceholder(label)}
                className="text-[#6b5b4b]/50 hover:text-[#3a2a1a] transition-colors text-xs tracking-[0.15em] uppercase"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            <a href="https://www.instagram.com/nayararesorts/" target="_blank" rel="noopener noreferrer" className="text-[#5a4a3a]/50 hover:text-[#3a2a1a] transition-colors">
              <InstagramIcon />
            </a>
            <a href="https://www.youtube.com/@NayaraResorts" target="_blank" rel="noopener noreferrer" className="text-[#5a4a3a]/50 hover:text-[#3a2a1a] transition-colors">
              <YouTubeIcon />
            </a>
            <a href="https://www.facebook.com/NayaraResorts" target="_blank" rel="noopener noreferrer" className="text-[#5a4a3a]/50 hover:text-[#3a2a1a] transition-colors">
              <FacebookIcon />
            </a>
            <a href="https://www.tiktok.com/@nayararesorts" target="_blank" rel="noopener noreferrer" className="text-[#5a4a3a]/50 hover:text-[#3a2a1a] transition-colors">
              <TikTokIcon />
            </a>
          </div>

          {/* Copyright */}
          <p
            className="text-[#6b5b4b]/50 text-xs"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            &copy; {new Date().getFullYear()} Nayara Resorts
          </p>
        </div>
      </div>
    </footer>
  );
}
