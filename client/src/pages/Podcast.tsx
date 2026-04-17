/**
 * NAYARA LONG-FORM VIDEO
 * Standalone long-form video page with video + audio episodes
 * Two-axis filtering: Destination + Topic
 * Language toggle (EN/ES) for dual-language episodes
 */

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Headphones } from "lucide-react";
import NativeVideo from "@/components/NativeVideo";
import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";
import ContentCrossLinks from "@/components/ContentCrossLinks";
import { podcastEpisodes, type PodcastEpisode } from "@/data/journal";

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

const PODCAST_CDN = {
  heroVideo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara-horizons-hero-v2_63287f40.mp4",
};

export default function Podcast() {
  const [activeEpisode, setActiveEpisode] = useState<string | null>(null);
  /* Track which language is selected per episode: key = ep.id, value = "en" | "es" */
  const [langMap, setLangMap] = useState<Record<string, "en" | "es">>({});

  const setLang = (id: string, lang: "en" | "es") => {
    /* Reset playback when switching language */
    setActiveEpisode(null);
    setLangMap(prev => ({ ...prev, [id]: lang }));
  };

  return (
    <div className="min-h-screen bg-white">
      <BrandNavigation pageType="content" />
      <HeroSection />
      <IntroSection />
      <EpisodesSection
        episodes={podcastEpisodes}
        activeEpisode={activeEpisode}
        setActiveEpisode={setActiveEpisode}
        langMap={langMap}
        setLang={setLang}
      />
      <ComingSoonSection />
      <ContentCrossLinks currentPage="podcast" />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <NativeVideo src={PODCAST_CDN.heroVideo} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none" />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6">
        <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="text-white text-3xl md:text-5xl lg:text-6xl tracking-wide text-center" style={heading}>
          Podcast
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="text-white/50 text-[13px] md:text-[15px] mt-4 tracking-[0.12em]" style={{ ...body, fontWeight: 500 }}>
          Conversations from Extraordinary Places
        </motion.p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   INTRO
   ═══════════════════════════════════════════════════════════════ */
function IntroSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Play className="w-4 h-4 text-[#3B2B26]/30" />
            <span className="text-[#3B2B26]/30 text-[10px] tracking-[0.35em]" style={{ ...body, fontWeight: 500 }}>Long-Form Video</span>
          </div>
          <p className="text-[#3B2B26]/60 text-[16px] md:text-[18px] leading-relaxed" style={body}>
            Conversations with the people who shape our world — archaeologists,
            conservationists, cultural guardians, and the communities that make
            each Nayara destination extraordinary.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   EPISODES
   ═══════════════════════════════════════════════════════════════ */
function EpisodesSection({ episodes, activeEpisode, setActiveEpisode, langMap, setLang }: {
  episodes: PodcastEpisode[];
  activeEpisode: string | null;
  setActiveEpisode: (id: string | null) => void;
  langMap: Record<string, "en" | "es">;
  setLang: (id: string, lang: "en" | "es") => void;
}) {
  return (
    <section className="px-6 md:px-10 pb-16 md:pb-24">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-10">
        {episodes.map((ep, i) => {
          const hasAlt = !!ep.altYoutubeId;
          const currentLang = langMap[ep.id] || "en";
          const videoId = currentLang === "es" && hasAlt ? ep.altYoutubeId! : ep.youtubeId;
          const duration = currentLang === "es" && hasAlt && ep.altDuration ? ep.altDuration : ep.duration;

          return (
            <FadeIn key={ep.id} delay={i * 0.1}>
              <div className="bg-white/60 rounded-xl overflow-hidden border border-[#3B2B26]/5">
                {/* Language toggle — only for dual-language episodes */}
                {hasAlt && (
                  <div className="flex items-center justify-end gap-1 px-8 pt-5 md:px-10 md:pt-6">
                    <span className="text-[#3B2B26]/25 text-[9px] tracking-[0.2em] mr-2" style={{ ...body, fontWeight: 500 }}>
                      LANGUAGE
                    </span>
                    <button
                      onClick={() => setLang(ep.id, "en")}
                      className={`px-3 py-1 rounded-full text-[10px] tracking-[0.15em] transition-all duration-300 cursor-pointer ${
                        currentLang === "en"
                          ? "bg-[#3B2B26] text-white"
                          : "bg-[#3B2B26]/5 text-[#3B2B26]/40 hover:bg-[#3B2B26]/10"
                      }`}
                      style={{ ...body, fontWeight: 500 }}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => setLang(ep.id, "es")}
                      className={`px-3 py-1 rounded-full text-[10px] tracking-[0.15em] transition-all duration-300 cursor-pointer ${
                        currentLang === "es"
                          ? "bg-[#3B2B26] text-white"
                          : "bg-[#3B2B26]/5 text-[#3B2B26]/40 hover:bg-[#3B2B26]/10"
                      }`}
                      style={{ ...body, fontWeight: 500 }}
                    >
                      ES
                    </button>
                  </div>
                )}

                {/* Video embed or thumbnail */}
                <div className={`relative aspect-video bg-stone-900 ${hasAlt ? "mt-3" : ""}`}>
                  {activeEpisode === ep.id ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                      className="absolute inset-0 w-full h-full"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      title={ep.title}
                    />
                  ) : (
                    <button
                      onClick={() => setActiveEpisode(ep.id)}
                      className="absolute inset-0 w-full h-full group cursor-pointer"
                    >
                      <img
                        src={ep.coverImage || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                        alt={ep.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center group-hover:bg-white/25 transition-colors">
                          <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white ml-1" />
                        </div>
                      </div>
                    </button>
                  )}
                </div>

                {/* Episode info */}
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[#3B2B26]/25 text-[10px] tracking-[0.2em]" style={{ ...body, fontWeight: 500 }}>Episode {i + 1}</span>
                    <span className="w-px h-3 bg-[#3B2B26]/10" />
                    <span className="text-[#3B2B26]/25 text-[10px] tracking-[0.1em]" style={body}>{duration}</span>
                    {hasAlt && (
                      <>
                        <span className="w-px h-3 bg-[#3B2B26]/10" />
                        <span className="text-[#3B2B26]/25 text-[10px] tracking-[0.1em]" style={body}>
                          {currentLang === "en" ? "English" : "Español"}
                        </span>
                      </>
                    )}
                    <span className="w-px h-3 bg-[#3B2B26]/10" />
                    <span className="text-[#3B2B26]/25 text-[10px] tracking-[0.1em]" style={body}>{ep.id.includes("rapanui") || ep.id.includes("hitorangi") || ep.id.includes("hangaroa") ? "Hangaroa" : ep.id.includes("atacama") ? "Atacama" : "All Properties"}</span>
                  </div>
                  <h3 className="text-[#3B2B26] text-xl md:text-2xl leading-[1.15]" style={heading}>{ep.title}</h3>
                  <p className="text-[#3B2B26]/30 text-xs tracking-[0.1em] mt-3 mb-4" style={{ ...body, fontWeight: 500 }}>with {ep.guest}</p>
                  <p className="text-[#4B4A4A]/50 text-[14px] leading-relaxed max-w-2xl" style={body}>{ep.description}</p>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   COMING SOON
   ═══════════════════════════════════════════════════════════════ */
function ComingSoonSection() {
  return (
    <section className="py-16 md:py-20 px-6 md:px-10">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn>
          <Headphones className="w-6 h-6 text-[#3B2B26]/15 mx-auto mb-4" />
          <p className="text-[#3B2B26]/30 text-[14px] leading-relaxed" style={body}>
            New episodes coming soon — conversations on coral restoration,
            stargazing in the Atacama, and the future of regenerative travel.
          </p>
          <p className="text-[#3B2B26]/20 text-[12px] mt-4" style={{ ...body, fontWeight: 500 }}>
            Available on YouTube
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
