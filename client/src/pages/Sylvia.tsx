/**
 * SYLVIA — "Towards Living" Landing Page
 * Standalone therapy/wellness practice page
 * Design: Elevated editorial, purple/plum palette
 * Pale Wisteria background (#F5F0F8) + deep plum accents (#2D1B3D / #5C3D7A)
 */

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trpc } from "@/lib/trpc";

/* ─── Color Palette (Purple/Plum) ─── */
const COLORS = {
  bone: "#F5F0F8",
  olive: "#5C3D7A",
  oliveDark: "#2D1B3D",
  text: "#2D1B3D",
  textSecondary: "#4A3B5C",
  divider: "#D4C4E0",
  accent: "#EDE5F5",
};

/* ─── Image CDN paths ─── */
const IMAGES = {
  hero: "/manus-storage/purple-leaf-sylvia_ed397cf7.jpg",
  services: "/manus-storage/purple-leaf-sylvia_ed397cf7.jpg",
  about: "/manus-storage/sylvia-about-new_0a4859c6.jpg",
  philosophy: "/manus-storage/sylvia-philosophy-new_5ac4713f.jpg",
  cta: "/manus-storage/sylvia-cta_94ab69d7.jpg",
};

const LOGO_URL = "/manus-storage/sylvia-badge-100_dd58ef89.png";

/* ─── Services Data ─── */
const SERVICES = [
  {
    title: "EMDR",
    subtitle: "Eye Movement Desensitization and Reprocessing",
    description: "Sometimes you can understand something completely and still feel it as if it just happened. That gap between knowing and feeling is where EMDR works. It uses gentle bilateral stimulation to help the thinking and feeling parts of the brain process together. Instead of talking around a painful memory, we work with it directly. Not by reliving it, but by helping the brain do what it was always trying to do: process it and move forward. Most people notice how differently an old memory can feel when it no longer carries the same charge.",
  },
  {
    title: "IFS",
    subtitle: "Internal Family Systems",
    description: "You've probably noticed that different parts of you want different things. One part is exhausted and wants rest. Another says there's no time. One part wants to be closer to the people you love. Another doesn't quite know how. This isn't a contradiction. It's how the mind organizes itself. In our work, we get curious about these parts instead of fighting them. We look at where they came from, what they've been trying to protect, and what they need now. That shift from inner conflict to understanding is often where lasting change begins.",
  },
  {
    title: "Trauma-Informed Hypnotherapy",
    subtitle: "",
    description: "Hypnotherapy is not what you've seen on television. You're not asleep. You're not under anyone's control. You're simply in a deeply relaxed, focused state where the overthinking mind steps back and something deeper becomes accessible. In that state, the brain becomes more open to change. An old emotional imprint can be updated. Not erased. Updated. The memory stays, but the weight it carries can shift. For people who have spent years thinking their way through everything, this often reaches what thinking alone cannot.",
  },
  {
    title: "Ketamine-Assisted Therapy",
    subtitle: "",
    description: "Ketamine-Assisted Therapy combines the effects of ketamine with the support of psychotherapy. It creates a temporary window where the brain becomes more open, where stuck patterns can loosen and new perspectives can emerge. Within a therapeutic setting, this can allow you to access insight, process difficult emotional states, and shift patterns that have felt hard to move. It's not a standalone experience. The work before and after, making sense of what comes up and integrating it, is what allows the change to last.",
  },
  {
    title: "PDP Behavioral Assessment",
    subtitle: "",
    description: "Sometimes the most useful place to start is understanding how you're wired. The PDP ProScan is a behavioral assessment that shows how you naturally think, make decisions, communicate, and respond under pressure, and where the gap is between who you are and who you feel you need to be. I use this with individuals, couples, and organizations. It's especially useful for people in leadership roles who want a clearer picture of how their patterns affect the people around them.",
  },
  {
    title: "CE Workshops",
    subtitle: "Coming Soon",
    description: "Professional training for mental health providers on integrating trauma, parts work, addiction, and behavioral insight into clinical practice. Details coming soon.",
  },
];

/* ─── Testimonials ─── */
const TESTIMONIALS = [
  {
    quote: "Sylvia quite literally saved my sanity. She is compassionate, insightful, and deeply thoughtful in her work. I cannot imagine where I would be without her guidance.",
    author: "JK",
    role: "Business Owner and Community Leader",
  },
];

export default function Sylvia() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.bone, fontFamily: "'DM Sans', sans-serif" }}>
      <Navigation />
      <section className="pt-32 md:pt-40 pb-4 md:pb-6 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl leading-[1.2] tracking-tight mb-5"
            style={{ fontFamily: "'Playfair Display', serif", color: COLORS.text }}
          >
            Hi, I'm Sylvia.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <p className="text-base md:text-lg leading-relaxed" style={{ color: COLORS.textSecondary }}>I'm a licensed trauma therapist helping high-functioning people feel more emotionally connected, internally at ease, and genuinely fulfilled.</p>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: COLORS.textSecondary }}>I'm told I'm warm, direct, and occasionally funny. Originally from Germany. Still get unreasonably excited about mossy forests.</p>
          </motion.div>
        </div>
      </section>
      <ContentBoxes />
      <ServicesSection />
      <TestimonialSection />
      <AboutSection />
      <PhilosophySection />
      <CTASection />
      <FooterSection />
      <AskLexiWidget />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   NAVIGATION — Hamburger left, ← Sofía center, Book pill right
   Left-side slide panel menu — IDENTICAL to /sofia
   ═══════════════════════════════════════════════════════════════ */
function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sylviaExpanded, setSylviaExpanded] = useState(false);


  return (
    <>
      {/* Fixed nav bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 pointer-events-none">
        {/* Hamburger pill */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="pointer-events-auto flex items-center justify-center w-11 h-11 rounded-full shadow-md transition-all duration-300 hover:opacity-80"
          style={{ backgroundColor: COLORS.olive }}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block w-5 h-px bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
              }`}
            />
          </div>
        </button>

        {/* Back to Sofía — center */}
        <a
          href="/sofia"
          className="pointer-events-auto absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity duration-300"
        >
          <span className="text-[10px] tracking-[0.15em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif", color: COLORS.text }}>← Sofía</span>
        </a>

        {/* Book a Free Consult pill */}
        <a
          href="mailto:hello@humbeing.com?subject=Website%20Inquiry%20-%20Initial%20Consultation"
          className="pointer-events-auto flex items-center justify-center h-11 px-5 rounded-full shadow-md transition-all duration-300 hover:opacity-80"
          style={{ backgroundColor: COLORS.olive }}
        >
          <span
            className="text-white text-[10px] tracking-[0.2em] uppercase font-medium"
          >
            Book a Free Consult
          </span>
        </a>
      </div>

      {/* Left-side slide panel menu — matches Sofía exactly */}
      <AnimatePresence>
        {menuOpen && (
          <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[59] bg-black"
            onClick={() => setMenuOpen(false)}
          />
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 bottom-0 z-[60] w-72 overflow-y-auto shadow-2xl"
            style={{ background: "rgba(247, 245, 240, 0.98)" }}
          >
            <div className="px-6 pt-24 pb-16">
              {/* Sylvia — accordion */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.06 }}
              >
                <button
                  onClick={() => setSylviaExpanded(!sylviaExpanded)}
                  className="flex items-center justify-between w-full text-left py-4 border-b"
                  style={{ borderColor: "rgba(61, 74, 71, 0.1)" }}
                >
                  <div className="flex items-center gap-4">
                    <span className="w-4 h-4 rounded-full" style={{ background: "#5C3D7A" }} />
                    <span
                      className="text-lg tracking-[0.06em] uppercase"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, color: "#3D4A47" }}
                    >
                      Sylvia
                    </span>
                  </div>
                  <motion.span
                    animate={{ rotate: sylviaExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-xs opacity-40"
                  >
                    ▼
                  </motion.span>
                </button>

                <AnimatePresence>
                  {sylviaExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden pl-8"
                    >
                      {[
                        { label: "My Approach", action: () => { setMenuOpen(false); setSylviaExpanded(false); window.scrollTo({ top: 0, behavior: "smooth" }); } },
                        { label: "Trauma", action: () => { setMenuOpen(false); setSylviaExpanded(false); window.location.href = "/sofia#trauma"; } },
                        { label: "Addiction", action: () => { setMenuOpen(false); setSylviaExpanded(false); window.location.href = "/sofia#addiction"; } },
                        { label: "Bipolar", action: () => { setMenuOpen(false); setSylviaExpanded(false); window.location.href = "/sofia#bipolar"; } },
                        { label: "Triggers", action: () => { setMenuOpen(false); setSylviaExpanded(false); window.location.href = "/sofia#triggers"; } },
                        { label: "My Story", action: () => { setMenuOpen(false); setSylviaExpanded(false); window.location.href = "/sofia#my-story"; } },
                        { label: "Blog", action: () => { setMenuOpen(false); setSylviaExpanded(false); window.location.href = "/sofia#sylvia-blog"; } },
                        { label: "FAQ", action: () => { setMenuOpen(false); setSylviaExpanded(false); window.location.href = "/sofia#faq"; } },
                        { label: "Contact", action: () => { setMenuOpen(false); setSylviaExpanded(false); const el = document.querySelector("#contact"); if (el) el.scrollIntoView({ behavior: "smooth" }); } },
                      ].map((item) => (
                        <button
                          key={item.label}
                          onClick={item.action}
                          className="block w-full text-left py-3 border-b"
                          style={{ borderColor: "rgba(61, 74, 71, 0.06)" }}
                        >
                          <span
                            className="text-sm tracking-[0.04em]"
                            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, color: "#4A5B56" }}
                          >
                            {item.label}
                          </span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Sofía link */}
              <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(61, 74, 71, 0.1)" }}>
                <a
                  href="/sofia"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 py-3 opacity-70 hover:opacity-100 transition-opacity"
                >
                  <span
                    className="text-sm tracking-[0.08em] uppercase"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, color: "#4A3B5C" }}
                  >
                    Sofía →
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative pt-36 md:pt-40 pb-10 md:pb-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif", color: COLORS.olive }}
        >
          Towards Living
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-5 text-sm md:text-base tracking-[0.15em] uppercase max-w-xl mx-auto"
          style={{ color: COLORS.olive, fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
        >
          Because success and fulfillment<br className="hidden md:block" /> don't always arrive together.
        </motion.p>
      </div>

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="mt-8 md:mt-10 max-w-4xl mx-auto"
      >
        <img
          loading="lazy"
          src={IMAGES.hero}
          alt="Sylvia Bischoff"
          className="w-full h-[50vh] md:h-[65vh] object-cover rounded-sm"
        />
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CONTENT BOXES (Sofia-style) — Who I Help, Possibilities, Approach
   ═══════════════════════════════════════════════════════════════ */
function ContentBoxes() {
  return (
    <section className="px-6 md:px-12 pb-10">
      <div className="max-w-3xl mx-auto space-y-4">

        {/* Who I Help */}
        <div className="rounded-xl p-6" style={{ background: "#E8E3DA" }}>
          <h2 className="text-lg font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif", color: COLORS.text }}>Who I Help</h2>
          <div className="text-sm leading-relaxed opacity-80 space-y-3" style={{ fontFamily: "'DM Sans', sans-serif", color: COLORS.text }}>
            <p>I work with high-functioning, self-aware people who are ready for more than coping.</p>
            <p>From the outside, life may look successful, stable, even full. But underneath it all, you may not feel the way you thought you would. Disconnected from yourself, emotionally tired, or carrying more than anyone realizes.</p>
            <p>This is a place to slow down, reconnect with yourself, and create meaningful change that actually lasts.</p>
          </div>
        </div>

        {/* What Changes */}
        <div className="rounded-xl p-6" style={{ background: "#E8E3DA" }}>
          <h2 className="text-lg font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif", color: COLORS.text }}>What Changes</h2>
          <div className="text-sm leading-relaxed opacity-80 space-y-3" style={{ fontFamily: "'DM Sans', sans-serif", color: COLORS.text }}>
            <p>This work goes beyond insight.</p>
            <p>You may notice yourself pausing before responding. The internal dialogue softens, and you stop being quite so hard on yourself, and often on others, too. Relationships begin to feel less tense and more emotionally fulfilling.</p>
            <p>Over time, you may stop living so automatically. You begin expressing your feelings more honestly, carrying less responsibility for everyone else, and trusting yourself more in the way you navigate relationships and life.</p>
            <p>Not because you thought your way through it, but because something underneath has shifted.</p>
          </div>
        </div>

        {/* My Approach */}
        <div className="rounded-xl p-6" style={{ background: "#E8E3DA" }}>
          <h2 className="text-lg font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif", color: COLORS.text }}>My Approach</h2>
          <div className="text-sm leading-relaxed opacity-80 space-y-3" style={{ fontFamily: "'DM Sans', sans-serif", color: COLORS.text }}>
            <p>My work is relational, depth-oriented, and grounded in the belief that meaningful change happens when people feel safe enough to understand themselves differently.</p>
            <p>Over time, people often find themselves reacting less automatically, relating more honestly, and feeling more connected to themselves and the lives they've built. Not because they became someone new, but because the relationship they have with themselves has changed.</p>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SERVICES SECTION
   ═══════════════════════════════════════════════════════════════ */
function ServicesSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="py-14 md:py-20 px-6 md:px-12"
      style={{ backgroundColor: COLORS.accent }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
          loading="lazy"
              src={IMAGES.services}
              alt="Therapeutic space"
              className="w-full h-[400px] md:h-[550px] object-cover rounded-sm"
            />
          </div>

          {/* Accordion */}
          <div className="order-1 md:order-2">
            <h2
              className="text-2xl md:text-3xl mb-10"
              style={{ fontFamily: "'Playfair Display', serif", color: COLORS.text }}
            >
              Services
            </h2>

            <div className="space-y-0">
              {SERVICES.map((service, i) => (
                <div key={i} style={{ borderBottom: `1px solid ${COLORS.divider}` }}>
                  <button
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    className="flex items-center justify-between w-full text-left py-4 transition-colors"
                  >
                    <span
                      className="text-sm tracking-[0.04em] font-medium"
                      style={{ color: COLORS.text }}
                    >
                      {service.title}
                      {service.subtitle && (
                        <span className="font-normal opacity-60 ml-1">
                          ({service.subtitle})
                        </span>
                      )}
                    </span>
                    <motion.span
                      animate={{ rotate: expanded === i ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-lg ml-4 flex-shrink-0"
                      style={{ color: COLORS.olive }}
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {expanded === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p
                          className="pb-5 text-sm leading-relaxed pr-8"
                          style={{ color: COLORS.textSecondary }}
                        >
                          {service.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TESTIMONIAL SECTION
   ═══════════════════════════════════════════════════════════════ */
function TestimonialSection() {
  return (
    <section id="testimonials" className="py-14 md:py-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <div
          className="w-12 h-px mx-auto mb-10"
          style={{ backgroundColor: COLORS.olive }}
        />
        <blockquote>
          <p
            className="text-xl md:text-2xl lg:text-3xl leading-relaxed italic"
            style={{ fontFamily: "'Playfair Display', serif", color: COLORS.text }}
          >
            "{TESTIMONIALS[0].quote}"
          </p>
          <footer className="mt-8">
            <span
              className="text-xs tracking-[0.15em] uppercase"
              style={{ color: COLORS.olive }}
            >
              — {TESTIMONIALS[0].author} ({TESTIMONIALS[0].role})
            </span>
          </footer>
        </blockquote>
        <div
          className="w-12 h-px mx-auto mt-10"
          style={{ backgroundColor: COLORS.olive }}
        />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ABOUT SECTION — "Therapy does not have to feel clinical"
   ═══════════════════════════════════════════════════════════════ */
function AboutSection() {
  const challenges = [
    "Emotional overwhelm",
    "Burnout and performance pressure",
    "Life transitions and identity shifts",
    "Relationship patterns and attachment",
    "Trauma and unresolved past experiences",
    "A longing for more calm, clarity, and agency",
  ];

  return (
    <section
      id="approach"
      className="py-14 md:py-20 px-6 md:px-12"
      style={{ backgroundColor: COLORS.accent }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text */}
          <div>
            <h2
              className="text-2xl md:text-3xl leading-tight mb-8"
              style={{ fontFamily: "'Playfair Display', serif", color: COLORS.text }}
            >
              Therapy does not have to feel clinical.
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: COLORS.textSecondary }}
            >
              I help people understand the deeper patterns shaping their thoughts, emotions, and relationships — especially when those patterns have been difficult to change.
            </p>
            <p
              className="text-sm tracking-[0.06em] uppercase mb-4 font-medium"
              style={{ color: COLORS.olive }}
            >
              I work with people navigating:
            </p>
            <ul className="space-y-3">
              {challenges.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm leading-relaxed"
                  style={{ color: COLORS.textSecondary }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                    style={{ backgroundColor: COLORS.olive }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div>
            <img
          loading="lazy"
              src={IMAGES.about}
              alt="Therapeutic environment"
              className="w-full h-[400px] md:h-[550px] object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PHILOSOPHY SECTION — "Resilience does not roar — it hums"
   ═══════════════════════════════════════════════════════════════ */
function PhilosophySection() {
  return (
    <section className="py-14 md:py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div>
            <img
          loading="lazy"
              src={IMAGES.philosophy}
              alt="Calm interior"
              className="w-full h-[400px] md:h-[500px] object-cover rounded-sm"
            />
          </div>

          {/* Text */}
          <div>
            <h2
              className="text-2xl md:text-3xl leading-tight mb-8"
              style={{ fontFamily: "'Playfair Display', serif", color: COLORS.text }}
            >
              Resilience does not roar — it hums.
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: COLORS.textSecondary }}
            >
              It lives in the quiet ways we keep going, even when life feels uncertain or painful.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: COLORS.textSecondary }}
            >
              The work I do is grounded in the belief that healing doesn't come from bypassing pain or chasing perfection. It comes from shifting from wish-based optimism to reality-based hope.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CTA SECTION — "It starts with one conversation"
   ═══════════════════════════════════════════════════════════════ */
function CTASection() {
  return (
    <section id="contact" className="relative py-16 md:py-24 px-6 md:px-12">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          loading="lazy"
          src={IMAGES.cta}
          alt=""
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: `${COLORS.oliveDark}cc` }}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2
          className="text-2xl md:text-4xl leading-tight mb-6 text-white"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          It starts with one conversation
        </h2>
        <p className="text-white/80 text-base leading-relaxed mb-10 max-w-lg mx-auto">
          A free 15-minute consultation is a simple first step. Hear my voice, ask your questions — and we'll see if it feels like a good place to land.
        </p>
        <a
          href="mailto:hello@humbeing.com?subject=Website%20Inquiry%20-%20Initial%20Consultation"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/50 text-white text-[11px] tracking-[0.2em] uppercase font-medium transition-all hover:bg-white/10 hover:border-white"
        >
          Book a free 15-minute consult
        </a>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ASK LEXI — Floating Chat Widget (bottom-left)
   ═══════════════════════════════════════════════════════════════ */
function AskLexiWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const chatMutation = trpc.lexi.chat.useMutation({
    onSuccess: (data) => {
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
      setLoading(false);
    },
    onError: (err) => {
      console.error("Ask Sofía error:", err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "I'm having trouble connecting right now. Please try again in a moment." },
      ]);
      setLoading(false);
    },
  });

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, open]);

  const handleSend = () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    const newMessages = [...messages, { role: "user" as const, content: userMsg }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    chatMutation.mutate({
      messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
    });
  };

  return (
    <>
      {/* Floating trigger button — bottom left */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 left-6 z-50 flex items-center gap-2 h-11 px-5 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          style={{ background: "rgba(92, 61, 122, 0.9)", backdropFilter: "blur(8px)" }}
        >
          <span className="text-white text-sm tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>Ask Sofía</span>
        </button>
      )}

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-6 left-6 z-50 w-80 max-h-[70vh] flex flex-col rounded-2xl shadow-2xl overflow-hidden"
            style={{ background: COLORS.bone, border: `1px solid ${COLORS.olive}30` }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3" style={{ background: COLORS.olive }}>
              <div className="flex items-center gap-2">
                <img src={LOGO_URL} alt="Sylvia" className="w-7 h-7 rounded-full object-contain" style={{ background: "white" }} />
                <span className="text-white text-sm font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>Ask Sofía</span>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white text-lg transition">✕</button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3" style={{ maxHeight: "50vh" }}>
              {messages.length === 0 && (
                <p className="text-sm opacity-50 italic text-center pt-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Hi, I'm Sofía. Ask me anything about therapy, mental health, or Sylvia's services.
                </p>
              )}
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className="max-w-[85%] px-3 py-2 rounded-xl text-sm leading-relaxed"
                    style={{
                      background: msg.role === "user" ? `${COLORS.olive}20` : "white",
                      fontFamily: "'DM Sans', sans-serif",
                      border: msg.role === "assistant" ? `1px solid ${COLORS.divider}` : "none",
                    }}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="px-3 py-2 rounded-xl text-sm opacity-50" style={{ background: "white" }}>...</div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="px-3 py-3 border-t" style={{ borderColor: COLORS.divider }}>
              <form
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your question..."
                  className="flex-1 px-3 py-2 rounded-lg border text-sm bg-white"
                  style={{ borderColor: COLORS.divider, fontFamily: "'DM Sans', sans-serif" }}
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="px-3 py-2 rounded-lg text-white text-sm transition"
                  style={{ background: input.trim() ? COLORS.olive : "#ccc" }}
                >
                  →
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════════════════ */
function FooterSection() {
  return (
    <footer className="py-12 md:py-16 px-6 md:px-12" style={{ backgroundColor: COLORS.bone }}>
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <img
          loading="lazy"
          src={LOGO_URL}
          alt="Sylvia"
          className="h-20 mx-auto mb-8 object-contain"
        />

        <div className="space-y-1 mb-8">
          <p className="text-xs tracking-[0.04em]" style={{ color: COLORS.textSecondary }}>
            900 S. US Highway 1, Suite 101
          </p>
          <p className="text-xs tracking-[0.04em]" style={{ color: COLORS.textSecondary }}>
            Jupiter, FL 33477
          </p>
        </div>

        <a
          href="mailto:hello@humbeing.com?subject=Website%20Inquiry"
          className="text-xs tracking-[0.08em] transition-colors hover:opacity-70"
          style={{ color: COLORS.olive }}
        >
          hello@humbeing.com
        </a>

        <div className="mt-12 pt-8" style={{ borderTop: `1px solid ${COLORS.divider}` }}>
          <p className="text-[10px] tracking-[0.1em] uppercase" style={{ color: COLORS.textSecondary, opacity: 0.5 }}>
            © 2026 Hum Being · Privacy Policy & Terms
          </p>
        </div>
      </div>
    </footer>
  );
}
