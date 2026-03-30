/*
 * Footer — Nayara Global Footer
 * Deeper beige gradient. No large logo. Larger social icons.
 */

import { useLocation } from "wouter";

/* SynXis booking engine URL for Nayara Tented Camp */
const BOOKING_URL =
  "https://be.synxis.com/?chain=24447&hotel=10868&level=hotel&locale=en-US&adult=1&child=0&rooms=1&currency=USD&productcurrency=USD&src=30";

/* ── Social Icons ── */
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M23.5 6.5a3 3 0 0 0-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.4A3 3 0 0 0 .5 6.5 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.5 3 3 0 0 0 2.1 2.1c1.9.4 9.4.4 9.4.4s7.5 0 9.4-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.5zM9.75 15.5V8.5l6.25 3.5-6.25 3.5z" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.3l-.5 3.5h-2.8v8.4A12 12 0 0 0 24 12z" />
    </svg>
  );
}
function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
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

  const handleJournal = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/journal");
  };

  return (
    <footer
      className="relative overflow-hidden"
    >
      <div className="relative z-10 max-w-[1000px] mx-auto px-6 md:px-10 pt-10 pb-8">
        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 text-[12px] leading-relaxed">
          {/* LEFT — Page links + Press/Journal/Podcast */}
          <div className="flex flex-col gap-[5px]">
            {["About", "Stay", "Dine & Drink", "Amenities", "FAQs"].map((label) => (
              <a
                key={label}
                href="#"
                onClick={handlePlaceholder(label)}
                className="text-[#3a2a1a]/50 hover:text-[#3a2a1a]/90 transition-colors"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                {label}
              </a>
            ))}
            <div className="h-px w-6 bg-[#3a2a1a]/10 my-[3px]" />
            <a
              href="#"
              onClick={handlePlaceholder("Press")}
              className="text-[#3a2a1a]/50 hover:text-[#3a2a1a]/90 transition-colors"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              Press
            </a>
            <a
              href="/journal"
              onClick={handleJournal}
              className="text-[#3a2a1a]/50 hover:text-[#3a2a1a]/90 transition-colors"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              Journal
            </a>
            <a
              href="#"
              onClick={handlePlaceholder("Podcast")}
              className="text-[#3a2a1a]/50 hover:text-[#3a2a1a]/90 transition-colors"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              Podcast
            </a>
          </div>

          {/* CENTER — All 6 hotels (clickable) */}
          <div className="flex flex-col gap-[5px]">
            {[
              { name: "Nayara Gardens", route: "/arenal" },
              { name: "Nayara Springs", route: "/arenal" },
              { name: "Nayara Tented Camp", route: "/tented-camp" },
              { name: "Nayara Alto Atacama", route: "/alto-atacama" },
              { name: "Nayara Hangaroa", route: "/hangaroa" },
              { name: "Nayara Bocas del Toro", route: "/bocas-del-toro" },
            ].map((hotel) => (
              <a
                key={hotel.name}
                href={hotel.route}
                onClick={(e) => { e.preventDefault(); navigate(hotel.route); }}
                className="text-[#3a2a1a]/50 hover:text-[#3a2a1a]/90 transition-colors cursor-pointer"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                {hotel.name}
              </a>
            ))}
          </div>

          {/* RIGHT — Contact */}
          <div className="flex flex-col gap-[5px]">
            <a
              href="mailto:reservations@nayararesorts.com"
              className="text-[#3a2a1a]/50 hover:text-[#3a2a1a]/90 transition-colors"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              reservations@nayararesorts.com
            </a>
            <a
              href="tel:+18448652002"
              className="text-[#3a2a1a]/50 hover:text-[#3a2a1a]/90 transition-colors"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              (844) 865-2002
            </a>
            <a
              href="tel:+50624791600"
              className="text-[#3a2a1a]/50 hover:text-[#3a2a1a]/90 transition-colors"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              (506) 2479-1600
            </a>
          </div>
        </div>

        {/* Newsletter CTA — pill button */}
        <div className="flex justify-center mt-10 mb-4">
          <a
            href="#"
            onClick={handlePlaceholder("Newsletter")}
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[#3a2a1a]/70 hover:bg-[#3a2a1a]/85 shadow-lg transition-all duration-300"
          >
            <span
              className="text-white text-[11px] tracking-[0.25em] uppercase"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Stay Inspired with the Nayara Newsletter
            </span>
          </a>
        </div>

        {/* Social icons — centered, larger */}
        <div className="flex items-center justify-center gap-6 mt-6 mb-6">
          <a href="https://www.instagram.com/nayararesorts/" target="_blank" rel="noopener noreferrer" className="text-[#3a2a1a]/35 hover:text-[#3a2a1a]/80 transition-colors"><InstagramIcon /></a>
          <a href="https://www.youtube.com/@NayaraResorts" target="_blank" rel="noopener noreferrer" className="text-[#3a2a1a]/35 hover:text-[#3a2a1a]/80 transition-colors"><YouTubeIcon /></a>
          <a href="https://www.facebook.com/NayaraResorts" target="_blank" rel="noopener noreferrer" className="text-[#3a2a1a]/35 hover:text-[#3a2a1a]/80 transition-colors"><FacebookIcon /></a>
          <a href="https://www.tiktok.com/@nayararesorts" target="_blank" rel="noopener noreferrer" className="text-[#3a2a1a]/35 hover:text-[#3a2a1a]/80 transition-colors"><TikTokIcon /></a>
        </div>

        {/* Copyright — very bottom, centered */}
        <p
          className="text-center text-[#3a2a1a]/20 text-[10px] mt-3"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          &copy; {new Date().getFullYear()} Nayara Resorts. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
