/**
 * SYLVIA — "Towards Living" Landing Page
 * Standalone therapy/wellness practice page
 * Design: Elevated editorial, purple/plum palette
 * Pale Wisteria background (#F5F0F8) + deep plum accents (#2D1B3D / #5C3D7A)
 */

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trpc } from "@/lib/trpc";


/* ─── Color Palette (Purple/Plum + Forest Green accents) ─── */
const COLORS = {
  bone: "#F5F0F8",
  olive: "#5C3D7A",
  oliveDark: "#2D1B3D",
  text: "#2D1B3D",
  textSecondary: "#4A3B5C",
  divider: "#D4C4E0",
  accent: "#EDE5F5",
  /* Green accents — nature-grounding complement to plum */
  eucalyptus: "#4F8F75",
  sageMist: "#9FC3B2",
  sageTint: "#F0F7F4",
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
      {/* 1. Intro text above ↑ */}
      {/* Media 1: purple flower video */}
      <MobileMediaBreak src="/manus-storage/sylvia-video-flowers-only_02f74dba.mp4" type="video" />

      {/* 2. Content sections (Who I Help, What Changes, My Approach) */}
      <ContentBoxes />
      <div className="hidden md:block">
        <VideoMomentSection />
      </div>
      {/* Media 2: lily pad walkway still */}
      <MobileMediaBreak src="/manus-storage/sylvia-lilypad_9727e9e3.jpeg" type="image" alt="Lily pad walkway" />

      {/* 3. Services */}
      <ServicesSection />
      {/* Media 3: waterfall video */}
      <MobileMediaBreak src="/manus-storage/sylvia-waterfall-vertical_d48b606e.mp4" type="video" />

      {/* 4. Testimonial */}
      <TestimonialSection />
      {/* Media 4: purple leaf still */}
      <MobileMediaBreak src="/manus-storage/sylvia-purple-leaf-close_29447766.jpg" type="image" alt="Purple leaf" />

      {/* 5. How I Work */}
      <HowIWorkSection />
      {/* Media 5: video #4 */}
      <MobileMediaBreak src="/manus-storage/sylvia-video-4_14ad8643.mp4" type="video" />

      {/* 6. About */}
      <AboutSection />
      {/* Media 6: jungle pool still (about image) */}
      <MobileMediaBreak src="/manus-storage/sylvia-about-new_0a4859c6.jpg" type="image" alt="Jungle pool" />

      {/* 7. Philosophy */}
      <PhilosophySection />
      <div className="hidden md:block">
        <WaterfallVideoSection />
      </div>
      {/* Media 7: purple flower #2 video */}
      <MobileMediaBreak src="/manus-storage/sylvia-purple-flower-2_f377e2c6.mp4" type="video" />

      {/* 8. First Session */}
      <FirstSessionSection />


      {/* 9. CTA */}
      {/* Media 9: nature video */}
      <MobileMediaBreak src="/manus-storage/sylvia-nature-2-vertical_72e17c6b.mp4" type="video" />
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



  return (
    <>
      {/* Fixed nav bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 pointer-events-none">
        {/* Hamburger pill */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="pointer-events-auto flex items-center justify-center w-11 h-11 rounded-full shadow-md transition-all duration-300 hover:opacity-80"
          style={{ backgroundColor: COLORS.eucalyptus }}
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


        {/* Book a Free Consult pill — eucalyptus green */}
        <a
          href="mailto:hello@humbeing.com?subject=Website%20Inquiry%20-%20Initial%20Consultation"
          className="pointer-events-auto flex items-center justify-center h-11 px-5 rounded-full shadow-md transition-all duration-300 hover:opacity-80"
          style={{ backgroundColor: COLORS.eucalyptus }}
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
              {/* Menu items — flat list */}
              {[
                { label: "Trauma", action: () => { setMenuOpen(false); window.location.href = "/sylvia/trauma"; } },
                { label: "Addiction", action: () => { setMenuOpen(false); window.location.href = "/sylvia/addiction"; } },
                { label: "Bipolar", action: () => { setMenuOpen(false); window.location.href = "/sylvia/bipolar"; } },
                { label: "Triggers", action: () => { setMenuOpen(false); window.location.href = "/sylvia/triggers"; } },
                { label: "My Story", action: () => { setMenuOpen(false); window.location.href = "/sylvia/my-story"; } },
                { label: "Blog", action: () => { setMenuOpen(false); window.location.href = "/sylvia/blog"; } },
                { label: "FAQ", action: () => { setMenuOpen(false); window.location.href = "/sylvia/faq"; } },
              ].map((item, idx) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 + 0.04 * idx }}
                  onClick={item.action}
                  className="block w-full text-left py-4 border-b"
                  style={{ borderColor: "rgba(61, 74, 71, 0.1)" }}
                >
                  <span
                    className="text-lg tracking-[0.06em] uppercase"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, color: "#2D1B3D" }}
                  >
                    {item.label}
                  </span>
                </motion.button>
              ))}

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
   MOBILE MEDIA BREAK — Single media item shown only on mobile
   Used to space media throughout the page
   ═══════════════════════════════════════════════════════════════ */
function SylviaVideo({ src, className }: { src: string; className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoadSource, setShouldLoadSource] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load source when within 400px of viewport AND element is visible
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    // Don't load if hidden (display:none)
    if (container.offsetParent === null && getComputedStyle(container).position !== 'fixed') {
      return;
    }
    if (!("IntersectionObserver" in window)) {
      setShouldLoadSource(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (container.offsetParent !== null || getComputedStyle(container).position === 'fixed') {
            setShouldLoadSource(true);
          }
          observer.disconnect();
        }
      },
      { rootMargin: "400px", threshold: 0 }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Force load + aggressive autoplay once source is injected
  useEffect(() => {
    if (!shouldLoadSource) return;
    const video = videoRef.current;
    if (!video) return;
    video.load();
    const tryPlay = () => {
      if (video.paused) {
        video.play().catch(() => {});
      }
    };
    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);
    video.addEventListener("playing", tryPlay);
    const timer = setTimeout(tryPlay, 150);
    return () => {
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
      video.removeEventListener("playing", tryPlay);
      clearTimeout(timer);
    };
  }, [shouldLoadSource]);

  // Play/pause based on visibility
  useEffect(() => {
    if (!shouldLoadSource) return;
    const video = videoRef.current;
    if (!video) return;
    const playObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 }
    );
    playObserver.observe(video);
    const handleVisibility = () => {
      if (!document.hidden && video.getBoundingClientRect().top < window.innerHeight) {
        video.play().catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      playObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [shouldLoadSource]);

  return (
    <div ref={containerRef} className={`relative ${className || ""}`}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        controls={false}
        disablePictureInPicture
        controlsList="nofullscreen nodownload"
        onLoadedData={() => setIsLoaded(true)}
        className={`w-full h-full object-cover ${isLoaded ? "" : "opacity-0"} transition-opacity duration-500`}
        style={{ WebkitUserSelect: 'none', WebkitTouchCallout: 'none' } as any}
      >
        {shouldLoadSource && <source src={src} type="video/mp4" />}
      </video>
      {/* Loading placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#2D1B3D]/10 animate-pulse" />
      )}
      {/* Invisible overlay to block native play button on mobile */}
      {isLoaded && (
        <div
          className="absolute inset-0"
          style={{ background: 'transparent', zIndex: 5, WebkitUserSelect: 'none', WebkitTouchCallout: 'none' } as any}
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
          onTouchStart={(e) => { e.preventDefault(); e.stopPropagation(); }}
        />
      )}
    </div>
  );
}

function MobileMediaBreak({ src, type, alt }: { src: string; type: "video" | "image"; alt?: string }) {
  return (
    <section className="md:hidden px-4 py-6">
      <div className="rounded-sm overflow-hidden shadow-md">
        {type === "video" ? (
          <SylviaVideo src={src} className="w-full object-cover aspect-[3/4]" />
        ) : (
          <img
            loading="lazy"
            src={src}
            alt={alt || ""}
            className="w-full object-cover"
            style={{ aspectRatio: "3/4" }}
          />
        )}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MOBILE MEDIA FLOW — Intro video (mobile only)
   ═══════════════════════════════════════════════════════════════ */
function MobileMediaFlow() {
  return (
    <section className="md:hidden px-4 py-10">
      {/* Single intro video — purple flower */}
      <div className="rounded-sm overflow-hidden shadow-md">
        <SylviaVideo
          src="/manus-storage/sylvia-video-flowers-only_02f74dba.mp4"
          className="w-full object-cover aspect-[3/4]"
        />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   EDITORIAL CONTENT — Who I Help, What Changes, My Approach
   Image-and-text editorial layout (no cards)
   ═══════════════════════════════════════════════════════════════ */
function ContentBoxes() {
  return (
    <section className="py-14 md:py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto space-y-20 md:space-y-28">

        {/* Who I Help — image left, text right */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div className="hidden md:block overflow-hidden">
            <img
              src={IMAGES.about}
              alt="Therapy space"
              className="w-full h-auto object-cover"
              style={{ aspectRatio: "4/5" }}
            />
          </div>
          <div>
            <h2
              className="text-2xl md:text-3xl leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: COLORS.text }}
            >
              Who I Help
            </h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: COLORS.textSecondary }}>
              <p>I work with high-functioning, self-aware people who are ready for more than coping.</p>
              <p>From the outside, life may look successful, stable, even full. But underneath it all, you may not feel the way you thought you would. Disconnected from yourself, emotionally tired, or carrying more than anyone realizes.</p>
              <p>This is a place to slow down, reconnect with yourself, and create meaningful change that actually lasts.</p>
            </div>
          </div>
        </div>

        {/* What Changes — text left, image right */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div className="hidden md:block md:order-2 overflow-hidden">
            <img
              src={IMAGES.philosophy}
              alt="Nature and growth"
              className="w-full h-auto object-cover"
              style={{ aspectRatio: "4/5" }}
            />
          </div>
          <div className="md:order-1">
            <h2
              className="text-2xl md:text-3xl leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: COLORS.text }}
            >
              What Changes
            </h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: COLORS.textSecondary }}>
              <p>This work goes beyond insight.</p>
              <p>You may notice yourself pausing before responding. The internal dialogue softens, and you stop being quite so hard on yourself, and often on others, too. Relationships begin to feel less tense and more emotionally fulfilling.</p>
              <p>Over time, you may stop living so automatically. You begin expressing your feelings more honestly, carrying less responsibility for everyone else, and trusting yourself more in the way you navigate relationships and life.</p>
              <p>Not because you thought your way through it, but because something underneath has shifted.</p>
            </div>
          </div>
        </div>

        {/* My Approach — full-width text, centered */}
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-2xl md:text-3xl leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif", color: COLORS.text }}
          >
            My Approach
          </h2>
          <div className="space-y-4 text-base md:text-lg leading-relaxed" style={{ color: COLORS.textSecondary }}>
            <p>My work is relational, depth-oriented, and grounded in the belief that meaningful change happens when people feel safe enough to understand themselves differently.</p>
            <p>Over time, people often find themselves reacting less automatically, relating more honestly, and feeling more connected to themselves and the lives they've built. Not because they became someone new, but because the relationship they have with themselves has changed.</p>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   VIDEO MOMENT — Vertical video with ambient text
   ═══════════════════════════════════════════════════════════════ */
function VideoMomentSection() {
  return (
    <section className="py-14 md:py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Vertical video */}
          <div className="flex justify-center">
            <SylviaVideo
              src="/manus-storage/sylvia-video-flowers-only_02f74dba.mp4"
              className="w-full max-w-[280px] md:max-w-[320px] h-auto rounded-sm shadow-lg aspect-[9/12]"
            />
          </div>

          {/* Text */}
          <div>
            <h2
              className="text-2xl md:text-3xl leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: COLORS.text }}
            >
              Healing is not a straight line.
            </h2>
            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: COLORS.textSecondary }}
            >
              It moves like water — sometimes rushing forward, sometimes pooling in stillness. Both are part of the process.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: COLORS.textSecondary }}
            >
              My work honors that rhythm. We don't force breakthroughs. We create the conditions where they become possible.
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
          {/* Image — desktop only */}
          <div className="hidden md:block order-2 md:order-1">
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
                      style={{ color: COLORS.eucalyptus }}
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
          style={{ backgroundColor: COLORS.eucalyptus }}
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
              style={{ color: COLORS.eucalyptus }}
            >
              — {TESTIMONIALS[0].author} ({TESTIMONIALS[0].role})
            </span>
          </footer>
        </blockquote>
        <div
          className="w-12 h-px mx-auto mt-10"
          style={{ backgroundColor: COLORS.eucalyptus }}
        />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HOW I WORK — Process steps
   ═══════════════════════════════════════════════════════════════ */
function HowIWorkSection() {
  const steps = [
    {
      number: "01",
      title: "We talk",
      description: "A free 15-minute call so you can hear my voice, ask questions, and see if it feels like a fit. No pressure, no commitment.",
    },
    {
      number: "02",
      title: "We map the landscape",
      description: "In our first sessions, we build a picture of what brought you here — the patterns, the relationships, the parts of you that need attention.",
    },
    {
      number: "03",
      title: "We go deeper",
      description: "Using EMDR, IFS, hypnotherapy, or whatever modality fits, we work with what’s underneath. Not just the symptoms, but the roots.",
    },
    {
      number: "04",
      title: "You integrate",
      description: "Change doesn’t just happen in session. We build practices, awareness, and support systems that help the work take hold in your daily life.",
    },
  ];

  return (
    <section className="py-14 md:py-20 px-6 md:px-12" style={{ backgroundColor: COLORS.sageTint }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-2xl md:text-3xl leading-tight mb-12 text-center"
          style={{ fontFamily: "'Playfair Display', serif", color: COLORS.text }}
        >
          How the work unfolds
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-5">
              <span
                className="text-3xl font-light flex-shrink-0 leading-none mt-1"
                style={{ fontFamily: "'Playfair Display', serif", color: COLORS.eucalyptus, opacity: 0.5 }}
              >
                {step.number}
              </span>
              <div>
                <h3
                  className="text-base font-medium mb-2"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: COLORS.text }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: COLORS.textSecondary }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
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
              style={{ color: COLORS.eucalyptus }}
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
                    style={{ backgroundColor: COLORS.eucalyptus }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Image — desktop only */}
          <div className="hidden md:block">
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
   WATERFALL VIDEO — Full-width cinematic moment
   ═══════════════════════════════════════════════════════════════ */
function WaterfallVideoSection() {
  return (
    <section className="py-10 md:py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Desktop — 16:9 horizontal */}
        <div className="hidden md:block relative rounded-sm overflow-hidden shadow-lg">
          <SylviaVideo
            src="/manus-storage/sylvia-waterfall_68b3ab73.mp4"
            className="w-full aspect-[16/9]"
          />
          <div className="absolute inset-0 flex items-end justify-start p-8 md:p-12 bg-gradient-to-t from-black/40 via-transparent to-transparent">
            <p
              className="text-white text-lg md:text-2xl leading-tight max-w-md"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Nature does not rush, yet everything is accomplished.
            </p>
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
          {/* Image — desktop only */}
          <div className="hidden md:block">
            <img
          loading="lazy"
              src={IMAGES.philosophy}
              alt="Calm interior"
              className="w-full h-[400px] md:h-[500px] object-cover rounded-sm"
            />
          </div>

          {/* Text */}
          <div className="border-l-2 pl-6 md:pl-8" style={{ borderColor: COLORS.sageMist }}>
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
   FIRST SESSION — What to expect
   ═══════════════════════════════════════════════════════════════ */
function FirstSessionSection() {
  return (
    <section className="py-14 md:py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Text */}
          <div className="border-l-2 pl-6 md:pl-8" style={{ borderColor: COLORS.sageMist }}>
            <h2
              className="text-2xl md:text-3xl leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: COLORS.text }}
            >
              What your first session looks like
            </h2>
            <div className="space-y-4">
              <p className="text-base leading-relaxed" style={{ color: COLORS.textSecondary }}>
                There’s no clipboard, no intake form marathon, no pressure to “tell me everything.” We start where you are.
              </p>
              <p className="text-base leading-relaxed" style={{ color: COLORS.textSecondary }}>
                I’ll ask a few questions. You’ll talk. I’ll listen — not just to the words, but to what’s underneath them. By the end of our first hour, you’ll have a clearer sense of whether this space feels right.
              </p>
              <p className="text-base leading-relaxed" style={{ color: COLORS.textSecondary }}>
                Most people say they feel lighter after the first session. Not because anything was solved, but because they finally felt heard without having to perform.
              </p>
            </div>
          </div>

          {/* Video — desktop: 16:9 horizontal */}
          <div className="hidden md:block rounded-sm overflow-hidden shadow-lg">
            <SylviaVideo
              src="/manus-storage/sylvia-nature-2_ad910d95.mp4"
              className="w-full aspect-[16/9]"
            />
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
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white text-[11px] tracking-[0.2em] uppercase font-medium transition-all hover:opacity-90"
          style={{ backgroundColor: COLORS.eucalyptus }}
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
      console.error("Talk It Out error:", err);
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
          style={{ background: COLORS.eucalyptus, backdropFilter: "blur(8px)" }}
        >
          <span className="text-white text-lg">💬</span>
          <span className="text-white text-sm tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>Talk It Out</span>
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
                <span className="text-white text-sm font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>Talk It Out</span>
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
        {/* Simple text wordmark */}
        <h3
          className="text-2xl md:text-3xl tracking-tight mb-6"
          style={{ fontFamily: "'Playfair Display', serif", color: COLORS.text }}
        >
          Sylvia
        </h3>

        <div className="space-y-1 mb-8">
          <p className="text-xs tracking-[0.04em]" style={{ color: COLORS.textSecondary }}>
            900 S. US Highway 1, Suite 101
          </p>
          <p className="text-xs tracking-[0.04em]" style={{ color: COLORS.textSecondary }}>
            Jupiter, FL 33477
          </p>
        </div>

        {/* Newsletter signup */}
        <p className="text-sm mb-3" style={{ color: COLORS.textSecondary }}>
          Sign up for my newsletter
        </p>
        <form className="flex gap-2 max-w-sm mx-auto mb-8" onSubmit={(e) => { e.preventDefault(); import("sonner").then(({ toast }) => toast("Newsletter signup coming soon")); }}>
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 px-4 py-2.5 text-sm rounded-sm border focus:outline-none focus:ring-1"
            style={{ borderColor: COLORS.divider, backgroundColor: "white", color: COLORS.text, fontFamily: "'DM Sans', sans-serif" }}
          />
          <button
            type="submit"
            className="px-5 py-2.5 text-sm rounded-sm text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: COLORS.eucalyptus, fontFamily: "'DM Sans', sans-serif" }}
          >
            Subscribe
          </button>
        </form>

        {/* Book consult CTA */}
        <a
          href="mailto:hello@humbeing.com?subject=Website%20Inquiry%20-%20Initial%20Consultation"
          className="inline-block px-6 py-3 text-xs tracking-[0.12em] uppercase text-white rounded-sm transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.eucalyptus, fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
        >
          Book a 15-Minute Consult
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
