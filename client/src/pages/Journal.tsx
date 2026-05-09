/*
 * NAYARA JOURNAL , Full-bleed gallery grid
 * Square cards, text overlay, deliberately mixed Read / Listen / Watch order
 * No filters, no sorting , pure editorial gallery
 *
 * Card CTA types:
 *   - Listen-only (AFAR):        single 🎧 Listen pill → podcastUrl
 *   - Watch/Listen (7 entries):  dual pills ▶ Watch + 🎧 Listen
 *   - EN/ES toggle (2 entries):  dual pills 🇺🇸 English + 🇪🇸 Spanish
 *   - Read (articles):           single ↗ Read pill → external blog URL
 *
 * FAQ section , coming soon
 */
import { useState, useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";
import BrandNavigation from "@/components/BrandNavigation";
import HotelFilterBar3 from "@/components/HotelFilterBar3";
import Footer from "@/components/Footer";
import ContentCrossLinks from "@/components/ContentCrossLinks";
import {
  journalEntries,
  type JournalEntry,
} from "@/data/journal";

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

const JOURNAL_CDN = {
  heroVideoDesktop: "/manus-storage/46A64062-4302-4BB8-A8CD-E6DAAEF3C36A_77ff6a07.mp4",
  heroVideoMobile: "/manus-storage/journal-mobile-hero-v2-hq_3c7654fa.mp4",
};

/*
 * CURATED_IDS , deliberately mixed Read / Listen / Watch / EN-ES order
 * Row 1: Read · Listen-only · Watch/Listen
 * Row 2: Read · Read        · Watch/Listen
 * Row 3: Read · Watch/Listen · Read
 * Row 4: Read · Watch/Listen · Read
 * Row 5: Read · Read         · Watch/Listen
 * Row 6: Read · EN/ES        · Read
 * Row 7: Read · Watch/Listen · Read
 * Row 8: Read · Read         · EN/ES
 * Row 9: Read · Read         · Read
 */
const CURATED_IDS: string[] = [
  // Row 1 — New 2026 blogs
  "experiential-travel-2026",
  "family-bucket-list",
  "three-kitchens-one-rainforest",
  // Row 2
  "conde-nast-bocas",
  "hitorangi-rapanui",
  // Row 3
  "7-michelin-keys",
  "arenal-timeless-wonder",
  "archaeologist-rapanui",
  // Row 3
  "stargazing-atacama",
  "treehouse-dreams",
  // Row 4
  "nature-based-wellness-colors",
  "floating-paradise",
  // Row 5
  "mars-atacama",
  "toucans-arenal",
  "leo-luxury-travel-innovators",
  // Row 6
  "pura-vida",
  "atacama-sustainability",
  "bocas-facts",
  // Row 7
  "seven-elements",
  "leo-suite-success",
  "wildlife-arenal-bocas",
  // Row 8
  "sunlit-sustainability",
  "solo-travel-female",
  "hangaroa-sustainability",
  // Row 9
  "holistic-wellness",
  "nayara-by-night",
  "green-globe",
  // Last
  "leo-costa-rica-entrepreneurship",
];

function buildGallery(): JournalEntry[] {
  const map = new Map(journalEntries.map((e) => [e.id, e]));
  const seen = new Set<string>();
  const result: JournalEntry[] = [];
  for (const id of CURATED_IDS) {
    if (seen.has(id)) continue;
    const entry = map.get(id);
    if (entry) { result.push(entry); seen.add(id); }
  }
  for (const entry of journalEntries) {
    if (!seen.has(entry.id)) { result.push(entry); seen.add(entry.id); }
  }
  return result;
}

const ALL_ENTRIES = buildGallery();
const INITIAL_COUNT = 9;

export default function Journal() {
  const [activeHotel, setActiveHotel] = useState("alto-atacama");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const [heroMuted, setHeroMuted] = useState(true);

  const toggleHeroSound = () => {
    if (!heroVideoRef.current) return;
    const next = !heroMuted;
    setHeroMuted(next);
    heroVideoRef.current.muted = next;
  };

  const visibleEntries = ALL_ENTRIES;

  return (
    <div className="min-h-screen bg-[#F7F5F0]">
      <BrandNavigation pageType="brand" hideCenterLabel />

      {/* ── Hero ── */}
      <section className="relative w-full overflow-hidden bg-[#3a2a1a] -mt-1" style={{ aspectRatio: '16/9', maxHeight: '100vh' }}>
        <div className="absolute inset-0">
          {JOURNAL_CDN.heroVideoDesktop && (
            <>
              <video
                ref={heroVideoRef}
                src={JOURNAL_CDN.heroVideoDesktop}
                autoPlay
                loop
                muted
                playsInline
                className="hidden md:block w-full h-full object-cover"
              />
            </>
          )}
          {JOURNAL_CDN.heroVideoMobile && (
            <video
              src={JOURNAL_CDN.heroVideoMobile}
              autoPlay
              muted
              className="md:hidden w-full h-full object-contain"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/65 pointer-events-none" />
        </div>

        {/* Sound pill — matches BlobVideo: same line as hamburger/Reserve */}
        <button
          onClick={toggleHeroSound}
          className="fixed z-50 hidden md:flex lg:flex items-center justify-center rounded-full backdrop-blur-md shadow-sm border cursor-pointer hover:opacity-90 transition-all duration-300 h-9 px-4"
          style={{
            top: '10px',
            left: '56px',
            backgroundColor: 'rgba(59,43,38,0.8)',
            borderColor: 'rgba(255,255,255,0.1)',
          }}
        >
          {heroMuted ? (
            <svg className="w-3.5 h-3.5 mr-1.5" style={{ color: '#F7F5F0' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-3.72a.75.75 0 011.28.53v14.88a.75.75 0 01-1.28.53L6.75 14.25H3.75a.75.75 0 01-.75-.75v-3a.75.75 0 01.75-.75h3z" />
            </svg>
          ) : (
            <svg className="w-3.5 h-3.5 mr-1.5" style={{ color: '#F7F5F0' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-3.72a.75.75 0 011.28.53v14.88a.75.75 0 01-1.28.53L6.75 15.75H3.75a.75.75 0 01-.75-.75v-6a.75.75 0 01.75-.75h3z" />
            </svg>
          )}
          <span className="text-xs tracking-[0.08em]" style={{ color: '#F7F5F0', fontFamily: 'var(--font-body)', fontWeight: 500 }}>
            {heroMuted ? 'Sound' : 'Mute'}
          </span>
        </button>

        <div className="absolute inset-0 z-10 flex flex-col justify-end items-center pb-10 md:pb-16 px-6">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-2xl md:text-4xl lg:text-5xl tracking-wide text-center"
            style={heading}
          >
            Journal
          </motion.h1>
        </div>
      </section>

      {/* ── Hotel Filter ── */}
      <HotelFilterBar3 activeHotel={activeHotel} onHotelChange={setActiveHotel} />

      {/* ── Gallery Grid ── */}
      <section className="px-4 md:px-8 lg:px-12 py-10 md:py-14">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {visibleEntries.map((entry, i) => (
              <GalleryCard
                key={entry.id}
                entry={entry}
                index={i}
                activeVideo={activeVideo}
                setActiveVideo={setActiveVideo}
              />
            ))}
          </div>


        </div>
      </section>

      {/* ── FAQ , Coming Soon ── */}
      <section className="px-4 md:px-10 py-14 md:py-20 bg-white border-t border-stone-100">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <p className="text-[#3B2B26]/25 text-[10px] tracking-[0.3em] uppercase mb-3" style={body}>
              Nayara Journal
            </p>
            <h2 className="text-[#3B2B26] text-xl md:text-2xl mb-4" style={heading}>
              Frequently Asked Questions
            </h2>
            <p className="text-[#3B2B26]/35 text-[13px] leading-relaxed" style={body}>
              Coming soon , answers to everything you want to know about staying at Nayara.
            </p>
          </FadeIn>
        </div>
      </section>

      <ContentCrossLinks currentPage="journal" />
      <Footer textColor="#FFFFFF" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   GALLERY CARD , Full-bleed square card with text overlay
   ═══════════════════════════════════════════════════════════════ */
function GalleryCard({
  entry,
  index,
  activeVideo,
  setActiveVideo,
}: {
  entry: JournalEntry;
  index: number;
  activeVideo: string | null;
  setActiveVideo: (id: string | null) => void;
}) {
  const isAudio = entry.type === "audio";
  const isVideo = entry.type === "video";

  // Determine card variant
  const hasDualCTA = isVideo && !entry.languageVariants;
  const hasLangToggle = isVideo && !!entry.languageVariants;
  const isListenOnly = isAudio && !entry.youtubeId;

  // Active playing state , for EN/ES we track which variant is playing
  const isPlaying = activeVideo === entry.id;
  const isPlayingEN = activeVideo === `${entry.id}-en`;
  const isPlayingES = activeVideo === `${entry.id}-es`;
  const isAnyPlaying = isPlaying || isPlayingEN || isPlayingES;

  // Determine which YouTube ID to embed
  let embedId: string | undefined;
  if (isPlaying) embedId = entry.youtubeId;
  if (isPlayingEN) embedId = entry.languageVariants?.en;
  if (isPlayingES) embedId = entry.languageVariants?.es;

  const motionProps = {
    initial: { opacity: 0, y: 8 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true as const },
    transition: { duration: 0.5, delay: Math.min((index % 3) * 0.08, 0.2) },
  };

  // ── Coming Soon card ──
  if (entry.comingSoon) {
    return (
      <motion.div {...motionProps}>
        <CardShell entry={entry} index={index}>
          <CardOverlay entry={entry}>
            <span
              className="inline-flex items-center gap-1.5 h-7 px-3 rounded-full text-white/60 text-[10px] tracking-[0.18em] uppercase"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
            >
              Coming Soon
            </span>
          </CardOverlay>
        </CardShell>
      </motion.div>
    );
  }

  // ── Listen-only cards removed (no more audio-only entries) ──

  // ── EN/ES language toggle card ──
  if (hasLangToggle) {
    return (
      <motion.div {...motionProps} onClick={() => !isAnyPlaying && setActiveVideo(`${entry.id}-en`)}>
        <CardShell entry={entry} index={index} isPlaying={isAnyPlaying} embedId={embedId} onClose={() => setActiveVideo(null)}>
          {!isAnyPlaying && (
            <CardOverlay entry={entry}>
              <DualLangPills
                onEN={() => setActiveVideo(`${entry.id}-en`)}
                onES={() => setActiveVideo(`${entry.id}-es`)}
              />
            </CardOverlay>
          )}
        </CardShell>
      </motion.div>
    );
  }

  // ── Watch card (video with YouTube embed) ──
  if (hasDualCTA) {
    return (
      <motion.div {...motionProps} onClick={() => !isPlaying && setActiveVideo(entry.id)}>
        <CardShell entry={entry} index={index} isPlaying={isPlaying} embedId={embedId} onClose={() => setActiveVideo(null)}>
          {!isPlaying && (
            <CardOverlay entry={entry}>
              <SinglePill icon={<Play className="w-2.5 h-2.5 fill-current" />} label="Watch" />
            </CardOverlay>
          )}
        </CardShell>
      </motion.div>
    );
  }

  // ── Read (article) card ──
  return (
    <motion.a href={entry.url} {...(entry.url?.startsWith('/') ? {} : { target: '_blank', rel: 'noopener noreferrer' })} {...motionProps}>
      <CardShell entry={entry} index={index}>
        <CardOverlay entry={entry}>
          <SinglePill icon={<ArrowUpRight className="w-3 h-3" />} label="Read" />
        </CardOverlay>
      </CardShell>
    </motion.a>
  );
}

/* ── Card Shell , image + optional YouTube embed ── */
function CardShell({
  entry,
  index,
  isPlaying = false,
  embedId,
  onClose,
  children,
}: {
  entry: JournalEntry;
  index: number;
  isPlaying?: boolean;
  embedId?: string;
  onClose?: () => void;
  children?: React.ReactNode;
}) {
  return (
    <div className="relative w-full aspect-square overflow-hidden rounded-lg bg-stone-200 group cursor-pointer">
      {isPlaying && embedId ? (
        <>
          <iframe
            src={`https://www.youtube.com/embed/${embedId}?autoplay=1&rel=0`}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title={entry.title}
          />
          {/* Close button */}
          {onClose && (
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); onClose(); }}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-colors text-sm"
            >
              ✕
            </button>
          )}
        </>
      ) : (
        <>
          {entry.video ? (
            <video
              src={entry.image}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <img
              src={entry.image}
              alt={entry.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading={index < 6 ? "eager" : "lazy"}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />
          {children}
        </>
      )}
    </div>
  );
}

/* ── Card Overlay , title + property label + CTA pills ── */
function CardOverlay({ entry, children }: { entry: JournalEntry; children: React.ReactNode }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
      {entry.property && entry.property !== "brand" && (
        <p className="text-white/40 text-[9px] tracking-[0.2em] uppercase mb-1.5 group-hover:text-white/70 transition-all duration-500" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
          {entry.property.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
        </p>
      )}
      <h3 className="text-white text-[15px] md:text-[16px] leading-[1.25] line-clamp-2 group-hover:text-[#E1D1BA] transition-all duration-500" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
        {entry.title}
      </h3>
      <div className="flex items-center gap-2 mt-2.5 flex-wrap">
        {children}
      </div>
    </div>
  );
}

/* ── Single pill (Read or Listen-only) ── */
function SinglePill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 h-7 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/60 text-[10px] tracking-[0.12em] uppercase group-hover:bg-[#E1D1BA]/25 group-hover:border-[#E1D1BA]/40 group-hover:text-[#E1D1BA] transition-all duration-500" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
      {label}
      {icon}
    </span>
  );
}

/* ── DualWatchListenPills removed (Listen labels removed) ── */

/* ── Dual EN / ES language pills ── */
function DualLangPills({ onEN, onES }: { onEN: () => void; onES: () => void }) {
  return (
    <>
      <button
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); onEN(); }}
        className="inline-flex items-center gap-1.5 h-7 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] tracking-[0.12em] uppercase hover:bg-white/20 transition-all"
        style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
      >
        <span className="text-[11px]">🇺🇸</span>
        English
      </button>
      <button
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); onES(); }}
        className="inline-flex items-center gap-1.5 h-7 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] tracking-[0.12em] uppercase hover:bg-white/20 transition-all"
        style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
      >
        <span className="text-[11px]">🇪🇸</span>
        Spanish
      </button>
    </>
  );
}
