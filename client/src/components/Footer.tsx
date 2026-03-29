/*
 * Footer — Minimal editorial footer
 * Contact info, links back to main site, brand identity
 */

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-volcanic border-t border-desert-cream/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-desert-cream/40 text-xs tracking-wide-editorial uppercase mb-2"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Nayara Alto Atacama
            </p>
            <h3
              className="text-desert-cream text-2xl mb-4"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              Bespoke Experiences
            </h3>
            <p
              className="text-desert-cream/30 text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              An oasis under the stars in the driest desert on Earth.
              Catarpe Valley, San Pedro de Atacama, Chile.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p
              className="text-desert-cream/40 text-xs tracking-wide-editorial uppercase mb-6"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Explore
            </p>
            <div className="flex flex-col gap-3">
              {[
                { label: "Main Website", url: "https://nayaraaltoatacama.com" },
                { label: "Nayara Resorts", url: "https://nayararesorts.com" },
                { label: "Blog & Stories", url: "https://blog.nayararesorts.com" },
                { label: "Instagram", url: "https://instagram.com/nayaraaltoatacama" },
              ].map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-desert-cream/40 hover:text-gold transition-colors text-sm"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p
              className="text-desert-cream/40 text-xs tracking-wide-editorial uppercase mb-6"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:reservations@nayararesorts.com"
                className="text-desert-cream/40 hover:text-gold transition-colors text-sm"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                reservations@nayararesorts.com
              </a>
              <span
                className="text-desert-cream/40 text-sm"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                +56 (2) 2912 3945
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-desert-cream/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-desert-cream/20 text-xs"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            &copy; {new Date().getFullYear()} Nayara Resorts. All rights reserved.
          </p>
          <p
            className="text-desert-cream/15 text-xs italic"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Life as you've dreamed it.
          </p>
        </div>
      </div>
    </footer>
  );
}
