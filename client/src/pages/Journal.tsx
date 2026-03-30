/*
 * JOURNAL — Editorial Content Hub
 * Design: Aman/Rosewood editorial magazine aesthetic
 * Three tabs: Stories (blog), The Naiad (newsletter), Horizons (podcast)
 * Filters by pillar and destination
 */

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ExternalLink, Play, Mail, ChevronDown, X } from "lucide-react";
import type { Newsletter } from "@/data/journal";
import {
  blogPosts,
  newsletters,
  podcastEpisodes,
  PILLARS,
  DESTINATIONS,
  type BlogPost,
} from "@/data/journal";
import ExploreOurWorld from "@/components/ExploreOurWorld";
import Footer from "@/components/Footer";

/* ═══════════════════════════════════════════════════════════════
   JOURNAL PAGE
   ═══════════════════════════════════════════════════════════════ */

type Tab = "stories" | "naiad" | "horizons";

export default function Journal() {
  const [activeTab, setActiveTab] = useState<Tab>("stories");
  const [activePillar, setActivePillar] = useState("All");
  const [activeDestination, setActiveDestination] = useState("All");
  const [showAllArticles, setShowAllArticles] = useState(false);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((p) => {
      const pillarMatch = activePillar === "All" || p.pillar === activePillar;
      const destMatch =
        activeDestination === "All" ||
        p.destination === activeDestination ||
        p.destination === "All";
      return pillarMatch && destMatch;
    });
  }, [activePillar, activeDestination]);

  const featuredPost = useMemo(
    () => filteredPosts.find((p) => p.featured) || filteredPosts[0],
    [filteredPosts],
  );

  const gridPosts = useMemo(() => {
    const posts = filteredPosts.filter((p) => p.id !== featuredPost?.id);
    return showAllArticles ? posts : posts.slice(0, 8);
  }, [filteredPosts, featuredPost, showAllArticles]);

  const hasMore =
    filteredPosts.filter((p) => p.id !== featuredPost?.id).length > 8;

  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      {/* ── Hero Header ── */}
      <JournalHero />

      {/* ── Tab Navigation ── */}
      <div className="sticky top-0 z-30 bg-[#f7f5f0]/95 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="flex items-center gap-8 md:gap-12">
            {(
              [
                { key: "stories", label: "Stories", count: blogPosts.length },
                { key: "naiad", label: "The Naiad", count: newsletters.length },
                {
                  key: "horizons",
                  label: "Nayara Horizons",
                  count: podcastEpisodes.length,
                },
              ] as const
            ).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative py-5 text-xs tracking-[0.25em] uppercase transition-colors ${
                  activeTab === tab.key
                    ? "text-[#3a2a1a]"
                    : "text-stone-400 hover:text-stone-600"
                }`}
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                {tab.label}
                <span className="ml-2 text-[10px] text-stone-400">
                  {tab.count}
                </span>
                {activeTab === tab.key && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-px bg-[#3a2a1a]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <AnimatePresence mode="wait">
        {activeTab === "stories" && (
          <motion.div
            key="stories"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {/* Filters */}
            <StoriesFilters
              activePillar={activePillar}
              setActivePillar={setActivePillar}
              activeDestination={activeDestination}
              setActiveDestination={setActiveDestination}
            />

            {/* Featured Article */}
            {featuredPost && <FeaturedArticle post={featuredPost} />}

            {/* Article Grid */}
            <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-12 md:py-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {gridPosts.map((post, i) => (
                  <ArticleCard key={post.id} post={post} index={i} />
                ))}
              </div>

              {/* Show More */}
              {hasMore && !showAllArticles && (
                <div className="flex justify-center mt-12">
                  <button
                    onClick={() => setShowAllArticles(true)}
                    className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-stone-500 hover:text-[#3a2a1a] transition-colors py-3 px-8 border border-stone-300 hover:border-stone-400"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                  >
                    View All Stories
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {filteredPosts.length === 0 && (
                <div className="text-center py-20">
                  <p
                    className="text-stone-400 text-sm tracking-[0.1em]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    No stories match the current filters.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {activeTab === "naiad" && (
          <motion.div
            key="naiad"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <NaiadSection />
          </motion.div>
        )}

        {activeTab === "horizons" && (
          <motion.div
            key="horizons"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <HorizonsSection />
          </motion.div>
        )}
      </AnimatePresence>

      <ExploreOurWorld />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HERO HEADER
   ═══════════════════════════════════════════════════════════════ */
function JournalHero() {
  return (
    <div className="relative bg-[#2a1f14] text-white py-28 md:py-36 px-6 md:px-10 overflow-hidden">
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-xs tracking-[0.25em] uppercase mb-12 transition-colors"
          style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-white/30 text-[10px] tracking-[0.5em] uppercase mb-5"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Nayara Resorts
          </p>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl leading-[0.92] tracking-tight"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Journal
          </h1>
          <p
            className="text-white/50 text-base md:text-lg mt-6 max-w-lg leading-relaxed"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Stories, science, and dispatches from the world of Nayara —
            exploring the intersection of luxury, nature, and culture.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   STORIES FILTERS
   ═══════════════════════════════════════════════════════════════ */
function StoriesFilters({
  activePillar,
  setActivePillar,
  activeDestination,
  setActiveDestination,
}: {
  activePillar: string;
  setActivePillar: (p: string) => void;
  activeDestination: string;
  setActiveDestination: (d: string) => void;
}) {
  return (
    <div className="max-w-[1200px] mx-auto px-6 md:px-10 pt-10 pb-4">
      {/* Destination filter */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span
          className="text-[10px] tracking-[0.2em] uppercase text-stone-400 self-center mr-2"
          style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
        >
          Destination
        </span>
        {DESTINATIONS.map((d) => (
          <button
            key={d}
            onClick={() => setActiveDestination(d)}
            className={`text-[11px] tracking-[0.15em] uppercase px-3 py-1.5 border transition-all ${
              activeDestination === d
                ? "border-[#3a2a1a] text-[#3a2a1a] bg-[#3a2a1a]/5"
                : "border-stone-200 text-stone-400 hover:border-stone-400 hover:text-stone-600"
            }`}
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Pillar filter */}
      <div className="flex flex-wrap gap-2">
        <span
          className="text-[10px] tracking-[0.2em] uppercase text-stone-400 self-center mr-2"
          style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
        >
          Topic
        </span>
        {PILLARS.map((p) => (
          <button
            key={p}
            onClick={() => setActivePillar(p)}
            className={`text-[11px] tracking-[0.15em] uppercase px-3 py-1.5 border transition-all ${
              activePillar === p
                ? "border-[#3a2a1a] text-[#3a2a1a] bg-[#3a2a1a]/5"
                : "border-stone-200 text-stone-400 hover:border-stone-400 hover:text-stone-600"
            }`}
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FEATURED ARTICLE
   ═══════════════════════════════════════════════════════════════ */
function FeaturedArticle({ post }: { post: BlogPost }) {
  return (
    <div className="max-w-[1200px] mx-auto px-6 md:px-10 pt-8 pb-4">
      <a
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden bg-white">
          {/* Image */}
          <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="eager"
            />
            <div className="absolute top-4 left-4">
              <span
                className="inline-block bg-[#3a2a1a]/80 backdrop-blur-sm text-white text-[9px] tracking-[0.25em] uppercase px-3 py-1.5"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Featured
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
            <div className="flex items-center gap-3 mb-5">
              <span
                className="text-[10px] tracking-[0.25em] uppercase text-stone-400"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                {post.pillar}
              </span>
              <span className="w-px h-3 bg-stone-200" />
              <span
                className="text-[10px] tracking-[0.25em] uppercase text-stone-400"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                {post.destination}
              </span>
            </div>

            <h2
              className="text-2xl md:text-3xl lg:text-4xl leading-[1.1] text-[#2a1f14] group-hover:text-[#5a4a3a] transition-colors"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              {post.title}
            </h2>

            <p
              className="text-stone-500 text-sm md:text-base leading-relaxed mt-5 line-clamp-3"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              {post.excerpt}
            </p>

            <div className="mt-8 flex items-center gap-2">
              <span
                className="text-[10px] tracking-[0.25em] uppercase text-stone-500 group-hover:text-[#3a2a1a] transition-colors"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Read Story
              </span>
              <ExternalLink className="w-3 h-3 text-stone-400 group-hover:text-[#3a2a1a] transition-colors" />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ARTICLE CARD
   ═══════════════════════════════════════════════════════════════ */
function ArticleCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group block"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-100 mb-4">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Meta */}
      <div className="flex items-center gap-2 mb-2.5">
        <span
          className="text-[9px] tracking-[0.2em] uppercase text-stone-400"
          style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
        >
          {post.pillar}
        </span>
        <span className="w-px h-2.5 bg-stone-200" />
        <span
          className="text-[9px] tracking-[0.2em] uppercase text-stone-400"
          style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
        >
          {post.destination}
        </span>
      </div>

      {/* Title */}
      <h3
        className="text-lg md:text-xl leading-[1.2] text-[#2a1f14] group-hover:text-[#5a4a3a] transition-colors"
        style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
      >
        {post.title}
      </h3>

      {/* Excerpt */}
      {post.excerpt && (
        <p
          className="text-stone-500 text-sm leading-relaxed mt-2 line-clamp-2"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          {post.excerpt}
        </p>
      )}
    </motion.a>
  );
}

/* ═══════════════════════════════════════════════════════════════
   THE NAIAD — Newsletter Archive
   ═══════════════════════════════════════════════════════════════ */
function NaiadSection() {
  const [activeNewsletter, setActiveNewsletter] = useState<Newsletter | null>(null);

  return (
    <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 md:py-24">
      {/* Intro */}
      <div className="max-w-2xl mb-16">
        <div className="flex items-center gap-3 mb-6">
          <Mail className="w-5 h-5 text-stone-400" />
          <span
            className="text-[10px] tracking-[0.35em] uppercase text-stone-400"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Monthly Newsletter
          </span>
        </div>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl leading-[0.95] text-[#2a1f14] mb-5"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          The Naiad
        </h2>
        <p
          className="text-stone-500 text-base leading-relaxed"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          A monthly dispatch from the world of Nayara — curated stories,
          destination highlights, sustainability updates, and exclusive insights
          from our resorts across Costa Rica, Chile, and Panama.
        </p>
      </div>

      {/* Newsletter Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsletters.map((nl, i) => (
          <motion.button
            key={nl.issue}
            onClick={() => setActiveNewsletter(nl)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group border border-stone-200 hover:border-stone-400 p-8 transition-all bg-white text-left cursor-pointer"
          >
            <div className="flex items-center justify-between mb-5">
              <span
                className="text-[10px] tracking-[0.25em] uppercase text-stone-400"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Issue {nl.issue}
              </span>
              <span
                className="text-[10px] tracking-[0.15em] uppercase text-stone-300"
                style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                {nl.date}
              </span>
            </div>

            <h3
              className="text-lg leading-[1.2] text-[#2a1f14] group-hover:text-[#5a4a3a] transition-colors mb-3"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              {nl.title}
            </h3>

            <p
              className="text-stone-400 text-sm leading-relaxed line-clamp-2"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              {nl.subtitle}
            </p>

            <div className="mt-6 pt-5 border-t border-stone-100">
              <span
                className="text-[10px] tracking-[0.25em] uppercase text-stone-400 group-hover:text-[#3a2a1a] transition-colors"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Read Newsletter
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Subscribe CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 bg-[#2a1f14] text-white p-10 md:p-16 text-center"
      >
        <p
          className="text-white/30 text-[10px] tracking-[0.5em] uppercase mb-4"
          style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
        >
          Stay Connected
        </p>
        <h3
          className="text-2xl md:text-3xl leading-[1.1] mb-4"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          Subscribe to The Naiad
        </h3>
        <p
          className="text-white/50 text-sm max-w-md mx-auto mb-8"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          Monthly stories, destination updates, and exclusive insights from the
          world of Nayara — delivered to your inbox.
        </p>
        <button
          onClick={() =>
            import("sonner").then(({ toast }) =>
              toast("Newsletter subscription coming soon"),
            )
          }
          className="inline-block text-[11px] tracking-[0.25em] uppercase px-8 py-3 border border-white/30 text-white hover:bg-white hover:text-[#2a1f14] transition-all"
          style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
        >
          Subscribe
        </button>
      </motion.div>

      {/* ── Newsletter Modal Viewer ── */}
      <AnimatePresence>
        {activeNewsletter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center overflow-y-auto"
            onClick={() => setActiveNewsletter(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-3xl mx-4 my-8 md:my-16 bg-[#f7f5f0] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setActiveNewsletter(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center bg-[#2a1f14]/10 hover:bg-[#2a1f14]/20 transition-colors"
              >
                <X className="w-5 h-5 text-[#2a1f14]" />
              </button>

              {/* Header */}
              <div className="bg-[#2a1f14] text-white p-10 md:p-16">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="text-[10px] tracking-[0.25em] uppercase text-white/40"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                  >
                    The Naiad — Issue {activeNewsletter.issue}
                  </span>
                  <span className="w-px h-3 bg-white/20" />
                  <span
                    className="text-[10px] tracking-[0.15em] uppercase text-white/30"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                  >
                    {activeNewsletter.date}
                  </span>
                </div>
                <h2
                  className="text-2xl md:text-3xl lg:text-4xl leading-[1.05]"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                >
                  {activeNewsletter.title}
                </h2>
              </div>

              {/* Content */}
              <div className="p-10 md:p-16">
                <div className="prose-nayara">
                  {activeNewsletter.content.split("\n\n").map((paragraph, idx) => {
                    const trimmed = paragraph.trim();
                    if (!trimmed) return null;
                    // Detect section headings (short lines without periods)
                    const isHeading = trimmed.length < 80 && !trimmed.includes(".") && !trimmed.startsWith("—");
                    if (isHeading) {
                      return (
                        <h3
                          key={idx}
                          className="text-xl md:text-2xl leading-[1.15] text-[#2a1f14] mt-10 mb-4 first:mt-0"
                          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                        >
                          {trimmed}
                        </h3>
                      );
                    }
                    return (
                      <p
                        key={idx}
                        className="text-stone-600 text-[15px] leading-[1.8] mb-5"
                        style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                      >
                        {trimmed}
                      </p>
                    );
                  })}
                </div>

                {/* Footer divider */}
                <div className="mt-12 pt-8 border-t border-stone-200 text-center">
                  <p
                    className="text-stone-400 text-xs tracking-[0.2em] uppercase"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                  >
                    Nayara Resorts — The Naiad Newsletter
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   NAYARA HORIZONS — Podcast
   ═══════════════════════════════════════════════════════════════ */
function HorizonsSection() {
  const [activeEpisode, setActiveEpisode] = useState<string | null>(null);

  return (
    <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 md:py-24">
      {/* Intro */}
      <div className="max-w-2xl mb-16">
        <div className="flex items-center gap-3 mb-6">
          <Play className="w-4 h-4 text-stone-400" />
          <span
            className="text-[10px] tracking-[0.35em] uppercase text-stone-400"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Video Podcast
          </span>
        </div>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl leading-[0.95] text-[#2a1f14] mb-5"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          Nayara Horizons
        </h2>
        <p
          className="text-stone-500 text-base leading-relaxed"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          Conversations with the people who shape our world — archaeologists,
          conservationists, cultural guardians, and the communities that make
          each Nayara destination extraordinary.
        </p>
      </div>

      {/* Episodes */}
      <div className="flex flex-col gap-8">
        {podcastEpisodes.map((ep, i) => (
          <motion.div
            key={ep.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="border border-stone-200 bg-white overflow-hidden"
          >
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
                  className="absolute inset-0 w-full h-full group"
                >
                  <img
                    src={`https://img.youtube.com/vi/${ep.youtubeId}/maxresdefault.jpg`}
                    alt={ep.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white ml-1" />
                    </div>
                  </div>
                </button>
              )}
            </div>

            {/* Episode info */}
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-[10px] tracking-[0.25em] uppercase text-stone-400"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                >
                  Episode {i + 1}
                </span>
                <span className="w-px h-3 bg-stone-200" />
                <span
                  className="text-[10px] tracking-[0.15em] uppercase text-stone-400"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
                >
                  {ep.duration}
                </span>
              </div>

              <h3
                className="text-xl md:text-2xl leading-[1.15] text-[#2a1f14] mb-3"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                {ep.title}
              </h3>

              <p
                className="text-stone-400 text-xs tracking-[0.15em] uppercase mb-4"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                with {ep.guest}
              </p>

              <p
                className="text-stone-500 text-sm leading-relaxed max-w-2xl"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                {ep.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Coming Soon note */}
      <div className="mt-12 text-center">
        <p
          className="text-stone-400 text-sm"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          New episodes coming soon — conversations on coral restoration,
          stargazing, and the future of regenerative travel.
        </p>
      </div>
    </div>
  );
}
