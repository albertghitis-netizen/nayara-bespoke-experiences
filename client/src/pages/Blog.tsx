/**
 * NAYARA BLOG — Content Section Page
 * Two-axis filtering: Destination (property) + Topic (pillar)
 * Hero → Filters → Featured → Grid → Footer
 */

import { useState, useMemo, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown } from "lucide-react";
import NativeVideo from "@/components/NativeVideo";
import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";
import ContentCrossLinks from "@/components/ContentCrossLinks";
import { blogPosts, PILLARS, DESTINATIONS, type BlogPost } from "@/data/journal";

const heading = { fontFamily: "var(--font-display)", fontWeight: 400 } as const;
const body = { fontFamily: "var(--font-body)", fontWeight: 400 } as const;

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

const BLOG_CDN = {
  heroVideo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara-horizons-hero-v2_63287f40.mp4",
};

export default function Blog() {
  const [activePillar, setActivePillar] = useState("All");
  const [activeDestination, setActiveDestination] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((p) => {
      const pillarMatch = activePillar === "All" || p.pillar === activePillar;
      const destMatch = activeDestination === "All" || p.destination === activeDestination || p.destination === "All";
      return pillarMatch && destMatch;
    });
  }, [activePillar, activeDestination]);

  const featuredPost = useMemo(() => filteredPosts.find((p) => p.featured) || filteredPosts[0], [filteredPosts]);
  const gridPosts = useMemo(() => {
    const posts = filteredPosts.filter((p) => p.id !== featuredPost?.id);
    return showAll ? posts : posts.slice(0, 9);
  }, [filteredPosts, featuredPost, showAll]);
  const hasMore = filteredPosts.filter((p) => p.id !== featuredPost?.id).length > 9;

  return (
    <div className="min-h-screen bg-white">
      <BrandNavigation pageType="content" centerLabel="Blog" />
      <HeroSection />
      <FiltersSection
        activePillar={activePillar}
        setActivePillar={setActivePillar}
        activeDestination={activeDestination}
        setActiveDestination={setActiveDestination}
      />
      {featuredPost && <FeaturedArticle post={featuredPost} />}
      <ArticleGrid posts={gridPosts} hasMore={hasMore} showAll={showAll} onShowAll={() => setShowAll(true)} totalFiltered={filteredPosts.length} />
      <ContentCrossLinks currentPage="blog" />
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
        <NativeVideo src={BLOG_CDN.heroVideo} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }} className="text-white text-3xl md:text-5xl lg:text-6xl tracking-wide text-center" style={heading}>
          Stories from the Field
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="text-white/50 text-[13px] md:text-[15px] mt-4 tracking-[0.12em] uppercase" style={{ ...body, fontWeight: 500 }}>
          Dispatches from Six Extraordinary Destinations
        </motion.p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TWO-AXIS FILTERS
   ═══════════════════════════════════════════════════════════════ */
function FiltersSection({ activePillar, setActivePillar, activeDestination, setActiveDestination }: {
  activePillar: string; setActivePillar: (p: string) => void;
  activeDestination: string; setActiveDestination: (d: string) => void;
}) {
  return (
    <section className="py-8 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        {/* Destination axis */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-[#3a2a1a]/30 text-[10px] tracking-[0.2em] uppercase mr-1" style={{ ...body, fontWeight: 600 }}>Destination</span>
          {DESTINATIONS.map((d) => (
            <button
              key={d}
              onClick={() => setActiveDestination(d)}
              className={`px-3 py-1.5 text-[11px] tracking-[0.1em] rounded-full border transition-all duration-300 ${
                activeDestination === d
                  ? "bg-[#3a2a1a] text-white border-[#3a2a1a]"
                  : "bg-transparent text-[#5a4a3a]/50 border-[#3a2a1a]/12 hover:border-[#3a2a1a]/30 hover:text-[#3a2a1a]"
              }`}
              style={{ ...body, fontWeight: 500 }}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Topic axis */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[#3a2a1a]/30 text-[10px] tracking-[0.2em] uppercase mr-1" style={{ ...body, fontWeight: 600 }}>Topic</span>
          {PILLARS.map((p) => (
            <button
              key={p}
              onClick={() => setActivePillar(p)}
              className={`px-3 py-1.5 text-[11px] tracking-[0.1em] rounded-full border transition-all duration-300 ${
                activePillar === p
                  ? "bg-[#3a2a1a] text-white border-[#3a2a1a]"
                  : "bg-transparent text-[#5a4a3a]/50 border-[#3a2a1a]/12 hover:border-[#3a2a1a]/30 hover:text-[#3a2a1a]"
              }`}
              style={{ ...body, fontWeight: 500 }}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FEATURED ARTICLE
   ═══════════════════════════════════════════════════════════════ */
function FeaturedArticle({ post }: { post: BlogPost }) {
  return (
    <section className="px-6 md:px-10 pb-4">
      <div className="max-w-[1200px] mx-auto">
        <a href={post.url} target="_blank" rel="noopener noreferrer" className="group block">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden bg-white/60 rounded-xl">
            <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="eager" />
              <div className="absolute top-4 left-4">
                <span className="inline-block bg-[#3a2a1a]/70 backdrop-blur-sm text-white text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full" style={{ ...body, fontWeight: 500 }}>Featured</span>
              </div>
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#3a2a1a]/30 text-[10px] tracking-[0.2em] uppercase" style={{ ...body, fontWeight: 500 }}>{post.pillar}</span>
                <span className="w-px h-3 bg-[#3a2a1a]/10" />
                <span className="text-[#3a2a1a]/30 text-[10px] tracking-[0.2em] uppercase" style={{ ...body, fontWeight: 500 }}>{post.destination}</span>
              </div>
              <h2 className="text-[#3a2a1a] text-2xl md:text-3xl leading-[1.1] group-hover:text-[#5a4a3a] transition-colors" style={heading}>{post.title}</h2>
              <p className="text-[#4B4A4A]/55 text-[14px] leading-relaxed mt-4 line-clamp-3" style={body}>{post.excerpt}</p>
              <div className="mt-6 flex items-center gap-2">
                <span className="text-[#3a2a1a]/40 text-[10px] tracking-[0.2em] uppercase group-hover:text-[#3a2a1a] transition-colors" style={{ ...body, fontWeight: 500 }}>Read Story</span>
                <ExternalLink className="w-3 h-3 text-[#3a2a1a]/30 group-hover:text-[#3a2a1a] transition-colors" />
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ARTICLE GRID
   ═══════════════════════════════════════════════════════════════ */
function ArticleGrid({ posts, hasMore, showAll, onShowAll, totalFiltered }: {
  posts: BlogPost[]; hasMore: boolean; showAll: boolean; onShowAll: () => void; totalFiltered: number;
}) {
  return (
    <section className="px-6 md:px-10 py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto">
        {posts.length === 0 && totalFiltered <= 1 ? (
          <div className="text-center py-16">
            <p className="text-[#3a2a1a]/30 text-[14px]" style={body}>No stories match the current filters.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <ArticleCard key={post.id} post={post} index={i} />
              ))}
            </div>
            {hasMore && !showAll && (
              <div className="flex justify-center mt-10">
                <button onClick={onShowAll} className="flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-[#3a2a1a]/40 hover:text-[#3a2a1a] transition-colors py-3 px-6 border border-[#3a2a1a]/15 rounded-full hover:border-[#3a2a1a]/30" style={{ ...body, fontWeight: 500 }}>
                  View All Stories
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

function ArticleCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.2) }}
      className="group block"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-100 rounded-lg mb-4">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
      </div>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[#3a2a1a]/25 text-[9px] tracking-[0.15em] uppercase" style={{ ...body, fontWeight: 500 }}>{post.pillar}</span>
        <span className="w-px h-2.5 bg-[#3a2a1a]/10" />
        <span className="text-[#3a2a1a]/25 text-[9px] tracking-[0.15em] uppercase" style={{ ...body, fontWeight: 500 }}>{post.destination}</span>
      </div>
      <h3 className="text-[#3a2a1a] text-lg leading-[1.2] group-hover:text-[#5a4a3a] transition-colors" style={heading}>{post.title}</h3>
      {post.excerpt && (
        <p className="text-[#4B4A4A]/45 text-[13px] leading-relaxed mt-2 line-clamp-2" style={body}>{post.excerpt}</p>
      )}
    </motion.a>
  );
}
