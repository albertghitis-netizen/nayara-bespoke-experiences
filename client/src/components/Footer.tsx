/*
 * Footer — Nayara Resorts Global Footer
 * Matches the main nayara.sphrcl.co footer design
 * Golden warm tone, tree logo, multi-column links, social icons
 * Clean — no texture (that lives in ExploreOurWorld above)
 */

import { motion } from "framer-motion";

/* ── Nayara Tree Logo (SVG) ── */
function NayaraTreeLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 240"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <circle cx="100" cy="100" r="75" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
      <rect x="96" y="140" width="8" height="60" rx="4" opacity="0.6" />
      <ellipse cx="100" cy="85" rx="35" ry="50" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <path d="M100 35 Q115 55 100 75 Q85 55 100 35Z" opacity="0.5" />
      <path d="M65 55 Q85 65 80 90 Q60 75 65 55Z" opacity="0.45" />
      <path d="M50 80 Q70 85 72 110 Q52 100 50 80Z" opacity="0.4" />
      <path d="M45 110 Q65 110 70 135 Q50 130 45 110Z" opacity="0.35" />
      <path d="M135 55 Q115 65 120 90 Q140 75 135 55Z" opacity="0.45" />
      <path d="M150 80 Q130 85 128 110 Q148 100 150 80Z" opacity="0.4" />
      <path d="M155 110 Q135 110 130 135 Q150 130 155 110Z" opacity="0.35" />
      <path d="M80 45 Q95 50 90 65 Q78 58 80 45Z" opacity="0.3" />
      <path d="M120 45 Q105 50 110 65 Q122 58 120 45Z" opacity="0.3" />
      <text
        x="100"
        y="225"
        textAnchor="middle"
        style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 400, letterSpacing: "6px" }}
      >
        NAYARA
      </text>
    </svg>
  );
}

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

/* ── Footer Link Column ── */
function FooterColumn({
  title,
  links,
  delay = 0,
}: {
  title?: string;
  links: { label: string; href: string; indent?: boolean; isHeading?: boolean }[];
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {title && (
        <p
          className="text-[#5a4a3a] text-xs tracking-[0.25em] uppercase mb-5"
          style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
        >
          {title}
        </p>
      )}
      <div className="flex flex-col gap-2">
        {links.map((link) =>
          link.isHeading ? (
            <p
              key={link.label}
              className="text-[#5a4a3a] text-sm mt-3 first:mt-0"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              {link.label}
            </p>
          ) : (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-[#6b5b4b]/80 hover:text-[#3a2a1a] transition-colors text-sm ${
                link.indent ? "pl-4" : ""
              }`}
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              {link.label}
            </a>
          )
        )}
      </div>
    </motion.div>
  );
}

/* ── Main Footer ── */
export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#d4c5a9] to-[#c9b896]">
      {/* Main footer grid */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 md:gap-6">
          {/* Logo */}
          <motion.div
            className="col-span-2 md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <NayaraTreeLogo className="w-28 md:w-32 text-[#5a4a3a]" />
          </motion.div>

          {/* Column 1: General links */}
          <FooterColumn
            delay={0.05}
            links={[
              { label: "About", href: "https://nayara.sphrcl.co/about" },
              { label: "Stay", href: "https://nayara.sphrcl.co/stay" },
              { label: "Dine & Drink", href: "https://nayara.sphrcl.co/dine" },
              { label: "Wellness", href: "https://nayara.sphrcl.co/wellness" },
              { label: "Amenities", href: "https://nayara.sphrcl.co/amenities" },
              { label: "Gallery", href: "https://nayara.sphrcl.co/gallery" },
              { label: "Sustainability", href: "https://nayara.sphrcl.co/sustainability" },
            ]}
          />

          {/* Column 2: Resorts */}
          <FooterColumn
            title="Resorts"
            delay={0.1}
            links={[
              { label: "Costa Rica", href: "#", isHeading: true },
              { label: "Nayara Gardens", href: "https://nayara.sphrcl.co/gardens", indent: true },
              { label: "Nayara Springs", href: "https://nayara.sphrcl.co/springs", indent: true },
              { label: "Nayara Tented Camp", href: "https://nayara.sphrcl.co/tented-camp", indent: true },
              { label: "Chile", href: "#", isHeading: true },
              { label: "Nayara Atacama", href: "https://nayara.sphrcl.co/atacama", indent: true },
              { label: "Nayara Hangaroa", href: "https://nayara.sphrcl.co/hangaroa", indent: true },
              { label: "Panama", href: "#", isHeading: true },
              { label: "Nayara Bocas del Toro", href: "https://nayara.sphrcl.co/bocas", indent: true },
            ]}
          />

          {/* Column 3: More */}
          <FooterColumn
            title="More"
            delay={0.15}
            links={[
              { label: "Journal", href: "https://nayara.sphrcl.co/journal" },
              { label: "Press", href: "https://nayara.sphrcl.co/press" },
              { label: "FAQs", href: "https://nayara.sphrcl.co/faqs" },
              { label: "Getting Here", href: "https://nayara.sphrcl.co/getting-here" },
            ]}
          />

          {/* Column 4: Contact + Become a Member */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-2 md:col-span-1"
          >
            <p
              className="text-[#5a4a3a] text-xs tracking-[0.25em] uppercase mb-5"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
            >
              Contact
            </p>
            <div className="flex flex-col gap-2 mb-8">
              <a
                href="tel:+50624791600"
                className="text-[#6b5b4b]/80 hover:text-[#3a2a1a] transition-colors text-sm"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                +506.2479.1600
              </a>
              <a
                href="tel:+18448862002"
                className="text-[#6b5b4b]/80 hover:text-[#3a2a1a] transition-colors text-sm"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                +1.844.886.2002
              </a>
            </div>

            <p
              className="text-[#5a4a3a] text-xs tracking-[0.25em] uppercase mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
            >
              Become a Member
            </p>
            <a
              href="https://nayara.sphrcl.co/newsletter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-[#5a4a3a]/40 rounded-full px-5 py-2 text-[#5a4a3a] text-sm hover:bg-[#5a4a3a]/10 transition-colors"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              Sign Up to our Newsletter
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#5a4a3a]/20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-[#6b5b4b]/60 text-xs"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Nayara Resorts &copy; {new Date().getFullYear()} &mdash; All rights reserved
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/nayararesorts/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5a4a3a]/60 hover:text-[#3a2a1a] transition-colors"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.youtube.com/@NayaraResorts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5a4a3a]/60 hover:text-[#3a2a1a] transition-colors"
            >
              <YouTubeIcon />
            </a>
            <a
              href="https://www.facebook.com/NayaraResorts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5a4a3a]/60 hover:text-[#3a2a1a] transition-colors"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.tiktok.com/@nayararesorts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5a4a3a]/60 hover:text-[#3a2a1a] transition-colors"
            >
              <TikTokIcon />
            </a>
          </div>

          <p
            className="text-[#6b5b4b]/40 text-xs uppercase tracking-wider"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            nayara.sphrcl.co
          </p>
        </div>
      </div>
    </footer>
  );
}
