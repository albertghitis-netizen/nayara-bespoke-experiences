/**
 * SYLVIA — Subpage of Sofía
 * Therapy practice page — first person, depth-oriented
 * Design: Deep forest/moss palette from color reference
 * Functions as a subpage of /sofia with shared navigation style
 */

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { trpc } from "@/lib/trpc";

/* ─── Color Palette (Deep Forest/Moss) ─── */
const COLORS = {
  bg: "#F7F5F0",
  sage: "#4B8B61",
  teal: "#7B9B8E",
  taupe: "#8B7765",
  oliveSage: "#5F7B6B",
  deepGreen: "#3B6B3B",
  moss: "#5B9E1E",
  darkOlive: "#6B8B08",
  text: "#1a2e1a",
  textSecondary: "#3a4a3a",
  divider: "#d4ddd4",
  accent: "#eef4ee",
};

/* ─── Image CDN paths ─── */
const IMAGES = {
  jungleBridge: "/manus-storage/6F47449D-76D3-464F-9095-1480197434EC(1)_ea1426aa.jpg",
  junglePool: "/manus-storage/B7851236-FB3F-443A-87A9-838AAE264A94(1)_6c5ddcc2.jpg",
  mossForest: "/manus-storage/pasted_file_iYMn0l_lush-green-moss-covers-the-forest-floor-illuminated-by-warm-golden-sunlight-filtering-through-trees-photo_f6257643.jpg",
  mossGarden: "/manus-storage/jordy-meow-OQbppjf5ouc-unsplash_633c45b6.webp",
  mossBokeh: "/manus-storage/austin-d-JQ9-cbC4rDE-unsplash_07996c55.webp",
  mossyFloor: "/manus-storage/pasted_file_31hYM5_StockCake-Mossy_Forest_Floor-166794-medium_0ba9a605.jpg",
};

const SOFIA_LOGO = "/manus-storage/sofia-leaf-badge_e2f4c3b1.png";

/* ─── Services Data ─── */
const SERVICES = [
  {
    title: "EMDR",
    subtitle: "Eye Movement Desensitization and Reprocessing",
    description: "Sometimes you can understand something completely — and still feel it as if it just happened. That gap between knowing and feeling is where EMDR works. EMDR uses gentle bilateral stimulation — tapping, eye movements, or sound — to help the thinking and feeling parts of the brain process together. Instead of talking around a painful memory, we work with it directly. Not by reliving it, but by helping the brain do what it was always trying to do: process it and move forward.",
  },
  {
    title: "IFS",
    subtitle: "Internal Family Systems",
    description: "You've probably noticed that different parts of you want different things. One part is exhausted and wants rest. Another says there's no time. One part wants to be closer to the people you love. Another doesn't quite know how. This isn't a contradiction. It's how the mind organizes itself. In our work, we get curious about these parts instead of fighting them. We look at where they came from, what they've been trying to protect, and what they need now.",
  },
  {
    title: "Trauma-Informed Hypnotherapy",
    subtitle: "",
    description: "Hypnotherapy is not what you've seen on television. You're not asleep. You're not under anyone's control. You're simply in a deeply relaxed, focused state — one where the overthinking mind steps back and something deeper becomes accessible. In that state, the brain becomes more open to change. An old emotional imprint can be updated. Not erased. Updated. The memory stays, but the weight it carries can shift.",
  },
  {
    title: "Ketamine-Assisted Therapy",
    subtitle: "",
    description: "Ketamine-Assisted Therapy combines the effects of ketamine with the support of psychotherapy. It creates a temporary window where the brain becomes more open — where stuck patterns can loosen and new perspectives can emerge. It's not a standalone experience. The work before and after — making sense of what comes up and integrating it — is what allows the change to last.",
  },
  {
    title: "PDP Behavioral Assessment",
    subtitle: "",
    description: "Sometimes the most useful place to start is understanding how you're wired. The PDP ProScan is a behavioral assessment that shows how you naturally think, make decisions, communicate, and respond under pressure — and where the gap is between who you are and who you feel you need to be. I use this with individuals, couples, and organizations.",
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

/* ─── Sofía menu categories (mirrored from Lexi.tsx) ─── */
const CATEGORIES = [
  { id: "mood", label: "Journal", icon: "◐" },
  { id: "therapy", label: "Therapy", icon: "◉" },
  { id: "sleep", label: "Sleep", icon: "☽" },
  { id: "nutrition", label: "Nutrition", icon: "◈" },
  { id: "exercise", label: "Exercise", icon: "△" },
  { id: "meds", label: "Meds", icon: "⊕" },
  { id: "social", label: "Social", icon: "◇" },
  { id: "triggers", label: "Triggers", icon: "⚡" },
];

const SYLVIA_MENU_ITEMS = [
  { label: "About Sylvia", href: "#about" },
  { label: "My Approach", href: "#approach" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Trauma", href: "/sylvia/trauma", isRoute: true },
  { label: "Addiction", href: "/sylvia/addiction", isRoute: true },
  { label: "Mood Disorders", href: "/sylvia/mood-disorders", isRoute: true },
  { label: "Blog", href: "/sylvia/blog", isRoute: true },
  { label: "FAQ", href: "/sylvia/faq", isRoute: true },
];

export default function Sylvia() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.bg, fontFamily: "'DM Sans', sans-serif" }}>
      <SofiaNavigation />
      <HeroSection />
      <WhoIHelpSection />
      <PossibilitiesSection />
      <ApproachSection />
      <ServicesSection />
      <TestimonialSection />
      <AboutMeSection />
      <CTASection />
      <FooterSection />
      <AskSofiaWidget />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   NAVIGATION — Same as Sofía with back arrow
   ═══════════════════════════════════════════════════════════════ */
function SofiaNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sylviaExpanded, setSylviaExpanded] = useState(false);
  const [, navigate] = useLocation();

  const handleNavClick = (href: string, isRoute?: boolean) => {
    setMenuOpen(false);
    setSylviaExpanded(false);
    if (isRoute) {
      navigate(href);
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Fixed nav bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4 pointer-events-none">
        {/* Back arrow + Hamburger */}
        <div className="pointer-events-auto flex items-center gap-3">
          {/* Back to Sofía */}
          <button
            onClick={() => navigate("/sofia")}
            className="flex items-center justify-center w-10 h-10 rounded-full shadow-md transition-all duration-300 hover:opacity-80"
            style={{ backgroundColor: "rgba(75, 139, 97, 0.85)", backdropFilter: "blur(8px)" }}
          >
            <span className="text-white text-lg">←</span>
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center justify-center w-10 h-10 rounded-full shadow-md transition-all duration-300 hover:opacity-80"
            style={{ backgroundColor: "rgba(75, 139, 97, 0.85)", backdropFilter: "blur(8px)" }}
          >
            <div className="flex flex-col gap-1.5">
              <span className={`block w-4 h-px bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
              <span className={`block w-4 h-px bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
            </div>
          </button>
        </div>

        {/* Center — Sofía logo (links back to /sofia) */}
        <button
          onClick={() => navigate("/sofia")}
          className="pointer-events-auto absolute left-1/2 -translate-x-1/2 top-3"
        >
          <img
            loading="lazy"
            src={SOFIA_LOGO}
            alt="Sofía"
            style={{ width: "52px" }}
            className="object-contain"
          />
        </button>

        {/* Book a Free Consult pill */}
        <a
          href="mailto:hello@humbeing.com?subject=Website%20Inquiry%20-%20Initial%20Consultation"
          className="pointer-events-auto flex items-center justify-center h-10 px-4 rounded-full shadow-md transition-all duration-300 hover:opacity-80"
          style={{ backgroundColor: "rgba(75, 139, 97, 0.85)", backdropFilter: "blur(8px)" }}
        >
          <span className="text-white text-[9px] tracking-[0.18em] uppercase font-medium">
            Book Consult
          </span>
        </a>
      </div>

      {/* Full-screen menu overlay — same structure as Sofía */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 overflow-y-auto"
            style={{ backgroundColor: `${COLORS.bg}f8` }}
          >
            <div className="max-w-md mx-auto px-8 pt-28 pb-16">
              {/* Daily Tracking — flat list (links back to Sofía views) */}
              <div className="mb-6">
                <p className="text-[10px] tracking-[0.2em] uppercase mb-3 font-medium" style={{ color: COLORS.teal }}>
                  Daily Tracking
                </p>
                <div className="flex flex-col gap-0">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => { setMenuOpen(false); navigate("/sofia"); }}
                      className="block w-full text-left py-3 border-b transition-colors hover:opacity-70"
                      style={{ borderColor: COLORS.divider }}
                    >
                      <span className="text-sm tracking-[0.02em]" style={{ color: COLORS.text }}>
                        {cat.icon} {cat.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="my-6" style={{ borderTop: `1px solid ${COLORS.divider}` }} />

              {/* Sylvia accordion */}
              <div>
                <button
                  onClick={() => setSylviaExpanded(!sylviaExpanded)}
                  className="flex items-center justify-between w-full text-left py-3"
                >
                  <span
                    className="text-[10px] tracking-[0.2em] uppercase font-medium"
                    style={{ color: COLORS.sage }}
                  >
                    Sylvia
                  </span>
                  <motion.span
                    animate={{ rotate: sylviaExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-xs"
                    style={{ color: COLORS.sage }}
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
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-0 pl-2">
                        {SYLVIA_MENU_ITEMS.map((item) => (
                          <button
                            key={item.label}
                            onClick={() => handleNavClick(item.href, item.isRoute)}
                            className="block w-full text-left py-3 border-b transition-colors hover:opacity-70"
                            style={{ borderColor: COLORS.divider }}
                          >
                            <span className="text-sm tracking-[0.02em]" style={{ color: COLORS.text }}>
                              {item.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO — Starts with "Therapy for high-functioning..."
   No title card, no Sylvia image. Just the opening statement.
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative pt-28 md:pt-36 pb-10 md:pb-14 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif", color: COLORS.sage }}
        >
          Therapy for high-functioning individuals seeking more connection, clarity, and ease within the life they've already built.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 text-base md:text-lg leading-relaxed max-w-2xl"
          style={{ color: COLORS.textSecondary }}
        >
          Because success and fulfillment don't always arrive together.
        </motion.p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   WHO I HELP
   ═══════════════════════════════════════════════════════════════ */
function WhoIHelpSection() {
  return (
    <section id="who-i-help" className="py-12 md:py-18 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Image */}
          <div>
            <img
              loading="lazy"
              src={IMAGES.jungleBridge}
              alt="Path forward"
              className="w-full h-[400px] md:h-[520px] object-cover rounded-sm"
            />
          </div>

          {/* Text */}
          <div className="space-y-5">
            <h2
              className="text-xl md:text-2xl leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", color: COLORS.text }}
            >
              Who I Help
            </h2>
            <p className="text-base leading-relaxed" style={{ color: COLORS.textSecondary }}>
              I work with high-functioning, self-aware people who are ready for more than coping.
            </p>
            <p className="text-base leading-relaxed" style={{ color: COLORS.textSecondary }}>
              From the outside, life may look successful, stable, even full. But underneath it all, you may not feel the way you thought you would. Disconnected from yourself, emotionally tired, or carrying more than anyone realizes.
            </p>
            <p className="text-base leading-relaxed" style={{ color: COLORS.textSecondary }}>
              You may feel emotionally exhausted despite functioning well. Stuck in patterns that no longer feel sustainable. Always managing, anticipating, performing, carrying.
            </p>
            <p className="text-sm leading-relaxed italic" style={{ color: COLORS.sage }}>
              If nothing in your life changed a year from now, would that feel okay? If the answer is no, this may be a place to begin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   POSSIBILITIES — What changes
   ═══════════════════════════════════════════════════════════════ */
function PossibilitiesSection() {
  return (
    <section className="py-12 md:py-18 px-6 md:px-12" style={{ backgroundColor: COLORS.accent }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-xl md:text-2xl leading-tight mb-8"
          style={{ fontFamily: "'Playfair Display', serif", color: COLORS.text }}
        >
          This is what I often see happen.
        </h2>
        <div className="space-y-5">
          <p className="text-base leading-relaxed" style={{ color: COLORS.textSecondary }}>
            The internal noise quiets down. That critical voice that has been running in the background for years begins to lose some of its hold. You start noticing it differently — and over time, relating to yourself with more understanding and less pressure.
          </p>
          <p className="text-base leading-relaxed" style={{ color: COLORS.textSecondary }}>
            Old reactions don't disappear overnight. The shutting down, the snapping, the quietly carrying everything alone. But they begin to loosen. And when they do, there's more space — for connection in your relationships, more ease within yourself, and a fuller presence in the life you have built.
          </p>
          <p className="text-base leading-relaxed" style={{ color: COLORS.textSecondary }}>
            People often find themselves responding differently — less reactive, more grounded, and more intentional in the way they move through life. Decisions begin to come from a clearer place. Not perfect decisions — but ones that feel less driven by pressure, fear, or the need to prove something.
          </p>
          <p className="text-base leading-relaxed italic" style={{ color: COLORS.sage }}>
            Not because you became someone new. But because life no longer feels quite so far away from you.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MY APPROACH
   ═══════════════════════════════════════════════════════════════ */
function ApproachSection() {
  return (
    <section id="approach" className="py-12 md:py-18 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Text */}
          <div className="space-y-5">
            <h2
              className="text-xl md:text-2xl leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", color: COLORS.text }}
            >
              My Approach
            </h2>
            <p className="text-base leading-relaxed" style={{ color: COLORS.textSecondary }}>
              Most of my clients are insightful. They understand their patterns. They can often explain exactly why they react the way they do. And yet, understanding it hasn't been enough to change it.
            </p>
            <p className="text-base leading-relaxed" style={{ color: COLORS.textSecondary }}>
              That's because the part of us that analyzes and understands is not always the same part carrying the emotional experience. You can know something logically and still feel stuck in the same reactions, fears, pressure, or disconnection.
            </p>
            <p className="text-base leading-relaxed" style={{ color: COLORS.textSecondary }}>
              My work is relational, depth-oriented, and grounded in the belief that meaningful change happens when people feel safe enough to understand themselves differently. We work beneath the surface of what you already know — toward change that shows up in your relationships, your reactions, and the way you move through your life.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              loading="lazy"
              src={IMAGES.mossGarden}
              alt="Grounded space"
              className="w-full h-[380px] md:h-[480px] object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SERVICES SECTION — Accordion
   ═══════════════════════════════════════════════════════════════ */
function ServicesSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="py-12 md:py-18 px-6 md:px-12"
      style={{ backgroundColor: COLORS.accent }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              loading="lazy"
              src={IMAGES.junglePool}
              alt="Therapeutic space"
              className="w-full h-[400px] md:h-[550px] object-cover rounded-sm"
            />
          </div>

          {/* Accordion */}
          <div className="order-1 md:order-2">
            <h2
              className="text-xl md:text-2xl mb-3"
              style={{ fontFamily: "'Playfair Display', serif", color: COLORS.text }}
            >
              Services
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: COLORS.textSecondary }}>
              There is no single path through this work. What I use depends on you — where you are, what you're carrying, and what your system needs to shift.
            </p>

            <div className="space-y-0">
              {SERVICES.map((service, i) => (
                <div key={i} style={{ borderBottom: `1px solid ${COLORS.divider}` }}>
                  <button
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    className="flex items-center justify-between w-full text-left py-4 transition-colors"
                  >
                    <span className="text-sm tracking-[0.02em] font-medium" style={{ color: COLORS.text }}>
                      {service.title}
                      {service.subtitle && (
                        <span className="font-normal opacity-50 ml-1 text-xs">
                          {service.subtitle}
                        </span>
                      )}
                    </span>
                    <motion.span
                      animate={{ rotate: expanded === i ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-lg ml-4 flex-shrink-0"
                      style={{ color: COLORS.sage }}
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
                        <p className="pb-5 text-sm leading-relaxed pr-6" style={{ color: COLORS.textSecondary }}>
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
   TESTIMONIAL
   ═══════════════════════════════════════════════════════════════ */
function TestimonialSection() {
  return (
    <section id="testimonials" className="py-12 md:py-18 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <div className="w-12 h-px mx-auto mb-10" style={{ backgroundColor: COLORS.sage }} />
        <blockquote>
          <p
            className="text-lg md:text-2xl lg:text-3xl leading-relaxed italic"
            style={{ fontFamily: "'Playfair Display', serif", color: COLORS.text }}
          >
            "{TESTIMONIALS[0].quote}"
          </p>
          <footer className="mt-8">
            <span className="text-xs tracking-[0.12em] uppercase" style={{ color: COLORS.sage }}>
              — {TESTIMONIALS[0].author}, {TESTIMONIALS[0].role}
            </span>
          </footer>
        </blockquote>
        <div className="w-12 h-px mx-auto mt-10" style={{ backgroundColor: COLORS.sage }} />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ABOUT ME — First person, personal
   ═══════════════════════════════════════════════════════════════ */
function AboutMeSection() {
  return (
    <section id="about" className="py-12 md:py-18 px-6 md:px-12" style={{ backgroundColor: COLORS.accent }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Image */}
          <div>
            <img
              loading="lazy"
              src={IMAGES.mossForest}
              alt="Mossy forest"
              className="w-full h-[380px] md:h-[480px] object-cover rounded-sm"
            />
          </div>

          {/* Text */}
          <div className="space-y-5">
            <h2
              className="text-xl md:text-2xl leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", color: COLORS.text }}
            >
              About Me
            </h2>
            <p className="text-base leading-relaxed" style={{ color: COLORS.textSecondary }}>
              Hello, I'm Sylvia — a licensed trauma therapist helping high-functioning people feel more emotionally connected, internally at ease, and genuinely fulfilled.
            </p>
            <p className="text-base leading-relaxed" style={{ color: COLORS.textSecondary }}>
              Becoming a therapist was not my original plan — but understanding people always was. I've long been drawn to what lives beneath the surface — the patterns we repeat, the emotions we carry, the ways life shapes us before we fully realize it.
            </p>
            <p className="text-base leading-relaxed" style={{ color: COLORS.textSecondary }}>
              I came to this work as a human first, and a therapist second. Parts of my own journey felt difficult to make sense of at times. What made the difference was the support of others — a small but meaningful village I remain deeply grateful for.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: COLORS.sage }}>
              Warm, direct, and occasionally funny. Originally from Germany. Still get unreasonably excited about mossy forests.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CTA — "A free 15-minute consultation is a simple first step"
   ═══════════════════════════════════════════════════════════════ */
function CTASection() {
  return (
    <section id="contact" className="relative py-16 md:py-24 px-6 md:px-12">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          loading="lazy"
          src={IMAGES.mossyFloor}
          alt=""
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(30, 60, 40, 0.82)" }}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2
          className="text-2xl md:text-4xl leading-tight mb-6 text-white"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          A free 15-minute consultation is a simple first step.
        </h2>
        <p className="text-white/80 text-base leading-relaxed mb-10 max-w-lg mx-auto">
          Hear my voice, ask your questions — and we'll see if it feels like a good place to land.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:hello@humbeing.com?subject=Website%20Inquiry%20-%20Initial%20Consultation"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-white/50 text-white text-[11px] tracking-[0.18em] uppercase font-medium transition-all hover:bg-white/10 hover:border-white"
          >
            Book a free 15-minute consult
          </a>
        </div>
        <p className="mt-6 text-white/60 text-xs">
          In person or virtual — because good therapy shouldn't require two hours in traffic.
        </p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FOOTER — Minimal
   ═══════════════════════════════════════════════════════════════ */
function FooterSection() {
  return (
    <footer className="py-10 md:py-14 px-6 md:px-12" style={{ backgroundColor: COLORS.bg }}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-1 mb-6">
          <p className="text-xs tracking-[0.04em]" style={{ color: COLORS.textSecondary }}>
            900 S. US Highway 1, Suite 101
          </p>
          <p className="text-xs tracking-[0.04em]" style={{ color: COLORS.textSecondary }}>
            Jupiter, FL 33477
          </p>
        </div>

        <a
          href="mailto:hello@humbeing.com?subject=Website%20Inquiry"
          className="text-xs tracking-[0.06em] transition-colors hover:opacity-70"
          style={{ color: COLORS.sage }}
        >
          hello@humbeing.com
        </a>

        <div className="mt-8 pt-6" style={{ borderTop: `1px solid ${COLORS.divider}` }}>
          <p className="text-[10px] tracking-[0.08em] uppercase" style={{ color: COLORS.textSecondary, opacity: 0.5 }}>
            © 2026 Hum Being · Privacy Policy & Terms
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ASK SOFÍA — Floating Chat Widget (same as on /sofia)
   ═══════════════════════════════════════════════════════════════ */
function AskSofiaWidget() {
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
    onError: () => {
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
      {/* Floating trigger */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 left-6 z-50 flex items-center gap-2 h-10 px-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          style={{ background: "rgba(75, 139, 97, 0.9)", backdropFilter: "blur(8px)" }}
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
            style={{ background: COLORS.bg, border: `1px solid ${COLORS.sage}30` }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3" style={{ background: COLORS.sage }}>
              <div className="flex items-center gap-2">
                <img src={SOFIA_LOGO} alt="Sofía" className="w-6 h-6 rounded-full object-contain" style={{ background: "white" }} />
                <span className="text-white text-sm font-medium">Ask Sofía</span>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white text-lg transition">✕</button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3" style={{ maxHeight: "50vh" }}>
              {messages.length === 0 && (
                <p className="text-sm opacity-50 italic text-center pt-6">
                  Hi, I'm Sofía. Ask me anything about therapy, mental health, or Sylvia's services.
                </p>
              )}
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className="max-w-[85%] px-3 py-2 rounded-xl text-sm leading-relaxed"
                    style={{
                      background: msg.role === "user" ? `${COLORS.sage}20` : "white",
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
              <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your question..."
                  className="flex-1 px-3 py-2 rounded-lg border text-sm bg-white"
                  style={{ borderColor: COLORS.divider }}
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="px-3 py-2 rounded-lg text-white text-sm transition"
                  style={{ background: input.trim() ? COLORS.sage : "#ccc" }}
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
