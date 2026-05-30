/**
 * SYLVIA — "Towards Living" Landing Page
 * Standalone therapy/wellness practice page
 * Design: Elevated editorial, Nayara Tented Camp palette
 * Bone background (#F7F5F0) + olive green accents (#868B75 / #525642)
 */

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trpc } from "@/lib/trpc";

/* ─── Color Palette (Tented Camp) ─── */
const COLORS = {
  bone: "#F7F5F0",
  olive: "#868B75",
  oliveDark: "#525642",
  text: "#0D0604",
  textSecondary: "#3a3530",
  divider: "#E6DFD5",
  accent: "#EDEEE2",
};

/* ─── Image CDN paths ─── */
const IMAGES = {
  hero: "/manus-storage/sylvia-hero_43f08395.jpg",
  services: "/manus-storage/sylvia-services_a10e438a.jpg",
  about: "/manus-storage/sylvia-about_1d38a1bd.jpg",
  philosophy: "/manus-storage/sylvia-philosophy_808fefc2.jpg",
  cta: "/manus-storage/sylvia-cta_94ab69d7.jpg",
};

const LOGO_URL = "/manus-storage/sylvia-badge-100_dd58ef89.png";

/* ─── Services Data ─── */
const SERVICES = [
  {
    title: "EMDR",
    subtitle: "Eye Movement Desensitization and Reprocessing",
    description: "A structured therapy that helps the brain reprocess traumatic memories, reducing their emotional charge and allowing natural healing to occur.",
  },
  {
    title: "IFS",
    subtitle: "Internal Family Systems",
    description: "A compassionate approach that helps you understand and harmonize the different parts of yourself, fostering self-leadership and inner balance.",
  },
  {
    title: "Trauma-Informed Hypnotherapy",
    subtitle: "",
    description: "A gentle, guided process that accesses the subconscious mind to release deeply held patterns, beliefs, and emotional blocks.",
  },
  {
    title: "Ketamine-Assisted Therapy",
    subtitle: "",
    description: "A carefully facilitated experience combining low-dose ketamine with therapeutic support to access new perspectives and accelerate healing.",
  },
  {
    title: "PDP Behavioral Assessment & Consulting",
    subtitle: "",
    description: "A data-driven tool for understanding behavioral patterns, communication styles, and leadership dynamics in professional settings.",
  },
  {
    title: "Integrative Addiction Recovery Support",
    subtitle: "",
    description: "A holistic approach that addresses the root causes of addictive patterns while supporting sustainable recovery and self-compassion.",
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
      <HeroSection />
      <ValuePropSection />
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
   NAVIGATION — Hamburger left, Logo center, Book pill right
   ═══════════════════════════════════════════════════════════════ */
function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: "Who I Help", href: "#who-i-help" },
    { label: "Services", href: "#services" },
    { label: "Me & My Approach", href: "#approach" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
    { label: "Blog", href: "/sylvia/blog", isRoute: true },
    { label: "FAQ", href: "/sylvia/faq", isRoute: true },
    { label: "My Story", href: "/sylvia/my-story", isRoute: true },
    { label: "Trauma", href: "/sylvia/trauma", isRoute: true },
    { label: "Addiction", href: "/sylvia/addiction", isRoute: true },
    { label: "Mood Disorders", href: "/sylvia/mood-disorders", isRoute: true },
    { label: "Lexi", href: "/lexi", isRoute: true },
  ];

  const handleNavClick = (href: string, isRoute?: boolean) => {
    setMenuOpen(false);
    if (isRoute) {
      window.location.href = href;
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

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
              className={`block w-4.5 h-px bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[3px] w-4" : "w-4"
              }`}
            />
            <span
              className={`block w-4.5 h-px bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[3px] w-4" : "w-4"
              }`}
            />
          </div>
        </button>

        {/* Logo center */}
        <div className="pointer-events-auto absolute left-1/2 -translate-x-1/2 top-3">
          <img
          loading="lazy"
            src={LOGO_URL}
            alt="Sylvia"
            style={{ width: '80px' }}
            className="object-contain"
          />
        </div>

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

      {/* Full-screen menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 overflow-y-auto"
            style={{ backgroundColor: `${COLORS.bone}f8` }}
          >
            <div className="max-w-md mx-auto px-8 pt-28 pb-16 flex flex-col gap-1">
              {menuItems.map((item, i) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  onClick={() => handleNavClick(item.href, (item as any).isRoute)}
                  className="block w-full text-left py-5 border-b transition-colors hover:opacity-70"
                  style={{ borderColor: COLORS.divider }}
                >
                  <span
                    className="text-lg tracking-[0.06em]"
                    style={{ fontFamily: "'Playfair Display', serif", color: COLORS.text }}
                  >
                    {item.label}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
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
   VALUE PROPOSITION
   ═══════════════════════════════════════════════════════════════ */
function ValuePropSection() {
  return (
    <section id="who-i-help" className="py-14 md:py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <h2
              className="text-xl md:text-2xl leading-relaxed"
              style={{ fontFamily: "'Playfair Display', serif", color: COLORS.text }}
            >
              Therapy for high-functioning individuals seeking more connection, clarity, and ease within the life they've already built.
            </h2>
          </div>
          <div className="space-y-6">
            <p
              className="text-base leading-relaxed"
              style={{ color: COLORS.textSecondary }}
            >
              From the outside, life looks successful.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: COLORS.textSecondary }}
            >
              Internally, it can feel harder, heavier, or more disconnected than it appears.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: COLORS.textSecondary }}
            >
              This is a place to slow down, reconnect with yourself, and create meaningful change that actually lasts.
            </p>
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
      console.error("Ask Lexi error:", err);
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
          style={{ background: "rgba(82, 86, 66, 0.9)", backdropFilter: "blur(8px)" }}
        >
          <span className="text-white text-sm tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>Ask Lexi</span>
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
                <span className="text-white text-sm font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>Ask Lexi</span>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white text-lg transition">✕</button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3" style={{ maxHeight: "50vh" }}>
              {messages.length === 0 && (
                <p className="text-sm opacity-50 italic text-center pt-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Hi, I'm Lexi. Ask me anything about therapy, mental health, or Sylvia's services.
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
