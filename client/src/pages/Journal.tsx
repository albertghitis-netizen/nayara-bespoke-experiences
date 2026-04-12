/*
 * NAYARA JOURNAL — Unified feed of articles + video episodes
 * Single grid, property-only filter, play button overlay on videos
 * FAQ accordion at the bottom
 */

import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ExternalLink, ChevronDown, Play } from "lucide-react";
import NativeVideo from "@/components/NativeVideo";
import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";
import ContentCrossLinks from "@/components/ContentCrossLinks";
import {
  journalEntries,
  JOURNAL_PROPERTIES,
  type JournalEntry,
  type JournalProperty,
} from "@/data/journal";
import { FAQ_DATA, PROPERTIES as FAQ_PROPERTIES, type FAQItem } from "@/data/faq";

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
  heroVideoDesktop: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/ntc-v4-hero-web_cde65e6c.mp4",
};

/* ── Map property filter IDs to FAQ property IDs ── */
const PROPERTY_TO_FAQ: Record<string, string[]> = {
  "tented-camp": ["tented-camp"],
  gardens: ["gardens"],
  springs: ["springs"],
  "alto-atacama": ["alto-atacama"],
  hangaroa: ["hangaroa"],
  "bocas-del-toro": ["bocas-del-toro"],
  brand: [],
};

export default function Journal() {
  const [activeProperty, setActiveProperty] = useState<JournalProperty | "all">("all");
  const [showAll, setShowAll] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  /* ── Filter entries by property ── */
  const filtered = useMemo(() => {
    if (activeProperty === "all") return journalEntries;
    return journalEntries.filter(
      (e) => e.property === activeProperty || e.property === "brand"
    );
  }, [activeProperty]);

  /* ── Split into featured + grid ── */
  const featuredEntry = useMemo(() => filtered.find((e) => e.featured) || null, [filtered]);
  const gridEntries = useMemo(() => {
    const rest = filtered.filter((e) => e.id !== featuredEntry?.id);
    return showAll ? rest : rest.slice(0, 12);
  }, [filtered, featuredEntry, showAll]);
  const hasMore = filtered.filter((e) => e.id !== featuredEntry?.id).length > 12;

  /* ── FAQ filtering ── */
  const filteredFaq = useMemo(() => {
    if (activeProperty === "all" || activeProperty === "brand") return FAQ_DATA;
    const faqIds = PROPERTY_TO_FAQ[activeProperty] || [];
    return FAQ_DATA.filter(
      (item) => item.properties.length === 0 || item.properties.some((pid) => faqIds.includes(pid))
    );
  }, [activeProperty]);

  return (
    <div className="min-h-screen bg-white">
      <BrandNavigation pageType="content" />

      {/* ── Hero ── */}
      <section className="relative w-full h-[70vh] md:h-screen overflow-hidden">
        <div className="absolute inset-0">
          <NativeVideo src={JOURNAL_CDN.heroVideoDesktop} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-xl md:text-3xl lg:text-4xl tracking-wide text-center"
            style={heading}
          >
            Nayara Journal
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-white/50 text-[12px] md:text-[14px] tracking-[0.1em] mt-3 text-center max-w-lg"
            style={body}
          >
            Stories, conversations, and perspectives from across the world of Nayara
          </motion.p>
        </div>
      </section>

      {/* ── Property Filter Bar ── */}
      <section className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-stone-100">
        <div className="max-w-[1200px] mx-auto px-4 md:px-10">
          <div className="flex items-center gap-1 overflow-x-auto py-4 scrollbar-hide">
            {JOURNAL_PROPERTIES.map((prop) => (
              <button
                key={prop.id}
                onClick={() => {
                  setActiveProperty(prop.id);
                  setShowAll(false);
                }}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-[11px] tracking-[0.08em] transition-all duration-300 border ${
                  activeProperty === prop.id
                    ? "bg-[#3B2B26] text-white border-[#3B2B26]"
                    : "bg-transparent text-[#3B2B26]/50 border-[#3B2B26]/12 hover:text-[#3B2B26] hover:border-[#3B2B26]/30"
                }`}
                style={{ ...body, fontWeight: 500 }}
              >
                {prop.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Entry ── */}
      {featuredEntry && (
        <section className="px-4 md:px-10 pt-10 md:pt-14 pb-4">
          <div className="max-w-[1200px] mx-auto">
            <FeaturedCard entry={featuredEntry} activeVideo={activeVideo} setActiveVideo={setActiveVideo} />
          </div>
        </section>
      )}

      {/* ── Unified Grid ── */}
      <section className="px-4 md:px-10 py-8 md:py-12">
        <div className="max-w-[1200px] mx-auto">
          {gridEntries.length === 0 && !featuredEntry ? (
            <div className="text-center py-16">
              <p className="text-[#3B2B26]/30 text-[14px]" style={body}>
                No stories match the current filter.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {gridEntries.map((entry, i) => (
                  <JournalCard
                    key={entry.id}
                    entry={entry}
                    index={i}
                    activeVideo={activeVideo}
                    setActiveVideo={setActiveVideo}
                  />
                ))}
              </div>
              {hasMore && !showAll && (
                <div className="flex justify-center mt-10">
                  <button
                    onClick={() => setShowAll(true)}
                    className="flex items-center gap-2 text-[11px] tracking-[0.15em] text-[#3B2B26]/40 hover:text-[#3B2B26] transition-colors py-3 px-6 border border-[#3B2B26]/15 rounded-full hover:border-[#3B2B26]/30"
                    style={{ ...body, fontWeight: 500 }}
                  >
                    View All Stories
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* ── FAQ Section ── */}
      {filteredFaq.length > 0 && (
        <section className="px-4 md:px-10 py-12 md:py-16 bg-[#FAFAF8]">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2
                className="text-[#3B2B26] text-xl md:text-2xl text-center mb-10"
                style={heading}
              >
                Frequently Asked Questions
              </h2>
            </FadeIn>
            <FAQAccordion items={filteredFaq.slice(0, 15)} />
          </div>
        </section>
      )}

      <ContentCrossLinks currentPage="journal" />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FEATURED CARD — Large hero-style card for the top featured entry
   ═══════════════════════════════════════════════════════════════ */
function FeaturedCard({
  entry,
  activeVideo,
  setActiveVideo,
}: {
  entry: JournalEntry;
  activeVideo: string | null;
  setActiveVideo: (id: string | null) => void;
}) {
  const isVideo = entry.type === "video";
  const isPlaying = activeVideo === entry.id;

  const propertyLabel = JOURNAL_PROPERTIES.find((p) => p.id === entry.property)?.label || "Brand";

  const content = (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-500">
      <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-stone-100">
        {isVideo && isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${entry.youtubeId}?autoplay=1&rel=0`}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title={entry.title}
          />
        ) : (
          <>
            <img
              src={entry.image}
              alt={entry.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="eager"
            />
            {isVideo && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveVideo(entry.id);
                }}
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center hover:bg-white/25 transition-colors">
                  <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white ml-1" />
                </div>
              </button>
            )}
          </>
        )}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span
            className="inline-block bg-[#3B2B26]/70 backdrop-blur-sm text-white text-[9px] tracking-[0.2em] px-3 py-1.5 rounded-full"
            style={{ ...body, fontWeight: 500 }}
          >
            Featured
          </span>
          {isVideo && (
            <span
              className="inline-block bg-white/20 backdrop-blur-sm text-white text-[9px] tracking-[0.2em] px-3 py-1.5 rounded-full"
              style={{ ...body, fontWeight: 500 }}
            >
              Video{entry.duration ? ` · ${entry.duration}` : ""}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
        <div className="flex items-center gap-3 mb-4">
          <span
            className="text-[#3B2B26]/30 text-[10px] tracking-[0.2em] uppercase"
            style={{ ...body, fontWeight: 500 }}
          >
            {propertyLabel}
          </span>
          {isVideo && entry.guest && (
            <>
              <span className="w-px h-3 bg-[#3B2B26]/10" />
              <span
                className="text-[#3B2B26]/25 text-[10px] tracking-[0.1em]"
                style={body}
              >
                with {entry.guest}
              </span>
            </>
          )}
        </div>
        <h2
          className="text-[#3B2B26] text-2xl md:text-3xl leading-[1.1] group-hover:text-[#5a4a3a] transition-colors"
          style={heading}
        >
          {entry.title}
        </h2>
        <p
          className="text-[#4B4A4A]/55 text-[14px] leading-relaxed mt-4 line-clamp-3"
          style={body}
        >
          {entry.excerpt}
        </p>
        <div className="mt-6 flex items-center gap-2">
          <span
            className="text-[#3B2B26]/40 text-[10px] tracking-[0.2em] group-hover:text-[#3B2B26] transition-colors"
            style={{ ...body, fontWeight: 500 }}
          >
            {isVideo ? "Watch Episode" : "Read Story"}
          </span>
          {!isVideo && <ExternalLink className="w-3 h-3 text-[#3B2B26]/30 group-hover:text-[#3B2B26] transition-colors" />}
          {isVideo && <Play className="w-3 h-3 text-[#3B2B26]/30 group-hover:text-[#3B2B26] transition-colors" />}
        </div>
      </div>
    </div>
  );

  if (isVideo) {
    return <div className="group">{content}</div>;
  }

  return (
    <a href={entry.url} target="_blank" rel="noopener noreferrer" className="group block">
      {content}
    </a>
  );
}

/* ═══════════════════════════════════════════════════════════════
   JOURNAL CARD — Grid card for articles and video episodes
   ═══════════════════════════════════════════════════════════════ */
function JournalCard({
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
  const isVideo = entry.type === "video";
  const isPlaying = activeVideo === entry.id;
  const propertyLabel = JOURNAL_PROPERTIES.find((p) => p.id === entry.property)?.label || "Brand";

  const cardContent = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-100 rounded-lg mb-4">
        {isVideo && isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${entry.youtubeId}?autoplay=1&rel=0`}
            className="absolute inset-0 w-full h-full rounded-lg"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title={entry.title}
          />
        ) : (
          <>
            <img
              src={entry.image}
              alt={entry.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {/* Play button overlay for video entries */}
            {isVideo && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveVideo(entry.id);
                }}
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center hover:bg-white/25 transition-colors">
                  <Play className="w-5 h-5 md:w-6 md:h-6 text-white fill-white ml-0.5" />
                </div>
              </button>
            )}
            {/* Video badge */}
            {isVideo && (
              <div className="absolute top-3 left-3">
                <span
                  className="inline-block bg-black/50 backdrop-blur-sm text-white text-[9px] tracking-[0.12em] px-2.5 py-1 rounded-full"
                  style={{ ...body, fontWeight: 500 }}
                >
                  Video{entry.duration ? ` · ${entry.duration}` : ""}
                </span>
              </div>
            )}
          </>
        )}
      </div>
      <div className="flex items-center gap-2 mb-2">
        <span
          className="text-[#3B2B26]/25 text-[9px] tracking-[0.15em] uppercase"
          style={{ ...body, fontWeight: 500 }}
        >
          {propertyLabel}
        </span>
        {isVideo && entry.guest && (
          <>
            <span className="w-px h-2.5 bg-[#3B2B26]/10" />
            <span
              className="text-[#3B2B26]/20 text-[9px] tracking-[0.1em]"
              style={body}
            >
              {entry.guest}
            </span>
          </>
        )}
      </div>
      <h3
        className="text-[#3B2B26] text-lg leading-[1.2] group-hover:text-[#5a4a3a] transition-colors"
        style={heading}
      >
        {entry.title}
      </h3>
      {entry.excerpt && (
        <p
          className="text-[#4B4A4A]/45 text-[13px] leading-relaxed mt-2 line-clamp-2"
          style={body}
        >
          {entry.excerpt}
        </p>
      )}
    </>
  );

  if (isVideo) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.2) }}
        className="group"
      >
        {cardContent}
      </motion.div>
    );
  }

  return (
    <motion.a
      href={entry.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.2) }}
      className="group block"
    >
      {cardContent}
    </motion.a>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FAQ ACCORDION
   ═══════════════════════════════════════════════════════════════ */
function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const toggle = (id: string) => setOpenId(openId === id ? null : id);

  return (
    <div className="divide-y divide-[#3B2B26]/8">
      {items.map((item) => (
        <div key={item.id} className="py-1">
          <button
            onClick={() => toggle(item.id)}
            className="w-full text-left py-5 flex items-start justify-between gap-4 group"
          >
            <span
              className="text-[#3B2B26] text-[15px] md:text-[16px] leading-relaxed group-hover:text-[#3B2B26]/70 transition-colors"
              style={{ ...body, fontWeight: 500 }}
            >
              {item.question}
            </span>
            <motion.svg
              animate={{ rotate: openId === item.id ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="w-5 h-5 text-[#3B2B26]/30 flex-shrink-0 mt-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </motion.svg>
          </button>
          <AnimatePresence>
            {openId === item.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div className="pb-6 pr-10">
                  <p className="text-[#3B2B26]/60 text-[14px] leading-relaxed" style={body}>
                    {item.answer}
                  </p>
                  {item.properties.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {item.properties.map((pid) => {
                        const prop = FAQ_PROPERTIES.find((p) => p.id === pid);
                        return (
                          <span
                            key={pid}
                            className="text-[10px] tracking-[0.1em] text-[#3B2B26]/30 border border-[#3B2B26]/10 px-2 py-0.5 rounded-sm"
                            style={{ ...body, fontWeight: 500 }}
                          >
                            {prop?.label || pid}
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
