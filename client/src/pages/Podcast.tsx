/**
 * NAYARA PODCAST
 * Standalone podcast page with video + audio episodes
 * Two-axis filtering: Destination + Topic
 * User will provide final episode links later
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

  return (
    <div className="min-h-screen bg-white">
      <BrandNavigation pageType="content" />
      <HeroSection />
      <IntroSection />
      <EpisodesSection episodes={podcastEpisodes} activeEpisode={activeEpisode} setActiveEpisode={setActiveEpisode} />
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
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
            <Play className="w-4 h-4 text-[#3a2a1a]/30" />
            <span className="text-[#3a2a1a]/30 text-[10px] tracking-[0.35em]" style={{ ...body, fontWeight: 500 }}>Video Podcast</span>
          </div>
          <p className="text-[#3a2a1a]/60 text-[16px] md:text-[18px] leading-relaxed" style={body}>
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
function EpisodesSection({ episodes, activeEpisode, setActiveEpisode }: {
  episodes: PodcastEpisode[];
  activeEpisode: string | null;
  setActiveEpisode: (id: string | null) => void;
}) {
  return (
    <section className="px-6 md:px-10 pb-16 md:pb-24">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-10">
        {episodes.map((ep, i) => (
          <FadeIn key={ep.id} delay={i * 0.1}>
            <div className="bg-white/60 rounded-xl overflow-hidden border border-[#3a2a1a]/5">
              {/* Video embed or thumbnail */}
              <div className="relative aspect-video bg-stone-900">
                {activeEpisode === ep.id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${ep.youtubeId}?autoplay=1&rel=0`}
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
                      src={ep.coverImage || `https://img.youtube.com/vi/${ep.youtubeId}/maxresdefault.jpg`}
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
                  <span className="text-[#3a2a1a]/25 text-[10px] tracking-[0.2em]" style={{ ...body, fontWeight: 500 }}>Episode {i + 1}</span>
                  <span className="w-px h-3 bg-[#3a2a1a]/10" />
                  <span className="text-[#3a2a1a]/25 text-[10px] tracking-[0.1em]" style={body}>{ep.duration}</span>
                  <span className="w-px h-3 bg-[#3a2a1a]/10" />
                  <span className="text-[#3a2a1a]/25 text-[10px] tracking-[0.1em]" style={body}>{ep.id.includes("rapanui") || ep.id.includes("hitorangi") ? "Hangaroa" : "All Properties"}</span>
                </div>
                <h3 className="text-[#3a2a1a] text-xl md:text-2xl leading-[1.15]" style={heading}>{ep.title}</h3>
                <p className="text-[#3a2a1a]/30 text-xs tracking-[0.1em] mt-3 mb-4" style={{ ...body, fontWeight: 500 }}>with {ep.guest}</p>
                <p className="text-[#4B4A4A]/50 text-[14px] leading-relaxed max-w-2xl" style={body}>{ep.description}</p>
              </div>
            </div>
          </FadeIn>
        ))}
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
          <Headphones className="w-6 h-6 text-[#3a2a1a]/15 mx-auto mb-4" />
          <p className="text-[#3a2a1a]/30 text-[14px] leading-relaxed" style={body}>
            New episodes coming soon — conversations on coral restoration,
            stargazing in the Atacama, and the future of regenerative travel.
          </p>
          <p className="text-[#3a2a1a]/20 text-[12px] mt-4" style={{ ...body, fontWeight: 500 }}>
            Available on Spotify, Apple Podcasts, and YouTube
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
