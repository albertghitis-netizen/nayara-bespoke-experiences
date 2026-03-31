/*
 * Footer — Nayara Global Footer
 * Brown background (#3a2a1a) with light/white text
 * Luxury editorial style — Aman/Rosewood inspired
 */

import { useLocation } from "wouter";
import { DEFAULT_BOOKING_URL } from "@/data/booking";

const BOOKING_URL = DEFAULT_BOOKING_URL;

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

export { BOOKING_URL };

export default function Footer() {
  const [, navigate] = useLocation();

  const handlePlaceholder = (label: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    import("sonner").then(({ toast }) => toast(label + " — Coming Soon"));
  };

  return (
    <footer className="bg-[#3a2a1a] relative overflow-hidden">
      {/* Subtle top border line */}
      <div className="h-px bg-white/10" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-10 pt-16 pb-10">
        {/* Top section: brand name */}
        <div className="text-center mb-12">
          <h3
            className="text-white/90 text-lg tracking-[0.4em] uppercase"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Nayara Resorts
          </h3>
          <p
            className="text-white/30 text-[11px] tracking-[0.2em] uppercase mt-2"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            Luxury Resorts Rooted in Nature
          </p>
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 text-[12px] leading-relaxed">
          {/* LEFT — Explore links */}
          <div>
            <span
              className="text-white/40 text-[10px] tracking-[0.25em] uppercase block mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Explore
            </span>
            <div className="flex flex-col gap-[6px]">
              {[
                { label: "Experiences", route: "/experiences" },
                { label: "Wellness", route: "/wellness" },
                { label: "Gastronomy", route: "/gastronomy" },
                { label: "Sustainability", route: "/sustainability" },
                { label: "Gallery", route: "/gallery" },
                { label: "Awards", route: "/awards" },
                { label: "Journal", route: "/journal" },
                { label: "Press", route: "/press" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.route}
                  onClick={(e) => { e.preventDefault(); navigate(item.route); }}
                  className="text-white/50 hover:text-white/90 transition-colors"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* CENTER — All 6 hotels */}
          <div>
            <span
              className="text-white/40 text-[10px] tracking-[0.25em] uppercase block mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Our Hotels
            </span>
            <div className="flex flex-col gap-[6px]">
              {[
                { name: "Nayara Gardens", route: "/gardens" },
                { name: "Nayara Springs", route: "/springs" },
                { name: "Nayara Tented Camp", route: "/tented-camp" },
                { name: "Nayara Alto Atacama", route: "/alto-atacama" },
                { name: "Nayara Hangaroa", route: "/hangaroa" },
                { name: "Nayara Bocas del Toro", route: "/bocas-del-toro" },
              ].map((hotel) => (
                <a
                  key={hotel.name}
                  href={hotel.route}
                  onClick={(e) => { e.preventDefault(); navigate(hotel.route); }}
                  className="text-white/50 hover:text-white/90 transition-colors cursor-pointer"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                >
                  {hotel.name}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — Contact */}
          <div>
            <span
              className="text-white/40 text-[10px] tracking-[0.25em] uppercase block mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Contact
            </span>
            <div className="flex flex-col gap-[6px]">
              <a
                href="mailto:reservations@nayararesorts.com"
                className="text-white/50 hover:text-white/90 transition-colors"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                reservations@nayararesorts.com
              </a>
              <a
                href="tel:+18448652002"
                className="text-white/50 hover:text-white/90 transition-colors"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                (844) 865-2002
              </a>
              <a
                href="tel:+50624791600"
                className="text-white/50 hover:text-white/90 transition-colors"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                (506) 2479-1600
              </a>
              <p
                className="text-white/30 text-[11px] mt-2"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                Mon–Fri 8am–10pm EST<br />
                Sat–Sun 8am–8pm EST
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter CTA — pill button */}
        <div className="flex justify-center mt-14 mb-6">
          <a
            href="#"
            onClick={handlePlaceholder("Newsletter")}
            className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300"
          >
            <span
              className="text-white/70 text-[11px] tracking-[0.25em] uppercase"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Stay Inspired with the Nayara Newsletter
            </span>
          </a>
        </div>

        {/* Social icons — centered, larger */}
        <div className="flex items-center justify-center gap-8 mt-6 mb-8">
          <a href="https://www.instagram.com/nayararesorts/" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/80 transition-colors"><InstagramIcon /></a>
          <a href="https://www.youtube.com/@NayaraResorts" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/80 transition-colors"><YouTubeIcon /></a>
          <a href="https://www.facebook.com/NayaraResorts" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/80 transition-colors"><FacebookIcon /></a>
          <a href="https://www.tiktok.com/@nayararesorts" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/80 transition-colors"><TikTokIcon /></a>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-6" />

        {/* Copyright */}
        <p
          className="text-center text-white/20 text-[10px]"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          &copy; {new Date().getFullYear()} Nayara Resorts. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
