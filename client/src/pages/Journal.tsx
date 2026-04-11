/*
 * JOURNAL — Combined Blog, Podcast, FAQ page
 * Three tabs with shared property + pillar filters
 */

import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ExternalLink, ChevronDown, Play, Headphones } from "lucide-react";
import NativeVideo from "@/components/NativeVideo";
import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";
import ContentCrossLinks from "@/components/ContentCrossLinks";
import { blogPosts, podcastEpisodes, type BlogPost, type PodcastEpisode } from "@/data/journal";
import { FAQ_DATA, PILLARS as FAQ_PILLARS, PROPERTIES as FAQ_PROPERTIES, type FAQItem } from "@/data/faq";

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
  heroVideoMobile: "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/ntc-v4-hero-web_cde65e6c.mp4",
};

/* ── Unified filter options ── */
const PROPERTY_OPTIONS = [
  { id: "all", label: "All Properties" },
  { id: "arenal", label: "Arenal", blogDest: "Arenal", faqIds: ["springs", "gardens", "tented-camp"] },
  { id: "atacama", label: "Atacama", blogDest: "Atacama", faqIds: ["alto-atacama"] },
  { id: "hangaroa", label: "Hangaroa", blogDest: "Hangaroa", faqIds: ["hangaroa"] },
  { id: "bocas", label: "Bocas del Toro", blogDest: "Bocas del Toro", faqIds: ["bocas-del-toro"] },
];

const PILLAR_OPTIONS = [
  { id: "all", label: "All Topics" },
  { id: "brand", label: "Brand" },
  { id: "sustainability", label: "Sustainability" },
  { id: "wellness", label: "Wellness" },
  { id: "wildlife", label: "Wildlife" },
  { id: "culture", label: "Culture" },
  { id: "adventure", label: "Adventure" },
  { id: "gastronomy", label: "The Table" },
  { id: "family", label: "Family" },
  { id: "awards", label: "Awards" },
  { id: "booking", label: "Booking" },
  { id: "getting-here", label: "Getting Here" },
];

type TabType = "blog" | "podcast" | "faq";

export default function Journal() {
  const [activeTab, setActiveTab] = useState<TabType>("blog");
  const [activeProperty, setActiveProperty] = useState("all");
  const [activePillar, setActivePillar] = useState("all");

  /* ── Blog filtering ── */
  const filteredBlog = useMemo(() => {
    return blogPosts.filter((p) => {
      const propOption = PROPERTY_OPTIONS.find(o => o.id === activeProperty);
      const propMatch = activeProperty === "all" || p.destination === "All" || (propOption && "blogDest" in propOption && p.destination === propOption.blogDest);
      const pillarMatch = activePillar === "all" || p.pillar.toLowerCase() === activePillar;
      return propMatch && pillarMatch;
    });
  }, [activeProperty, activePillar]);

  /* ── FAQ filtering ── */
  const filteredFaq = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const propOption = PROPERTY_OPTIONS.find(o => o.id === activeProperty);
      const propMatch = activeProperty === "all" || item.properties.length === 0 || (propOption && "faqIds" in propOption && propOption.faqIds && item.properties.some(pid => propOption.faqIds!.includes(pid)));
      const pillarMatch = activePillar === "all" || item.pillar === activePillar;
      return propMatch && pillarMatch;
    });
  }, [activeProperty, activePillar]);

  /* ── Podcast filtering (by destination label in episode) ── */
  const filteredPodcast = useMemo(() => {
    if (activeProperty === "all") return podcastEpisodes;
    const propOption = PROPERTY_OPTIONS.find(o => o.id === activeProperty);
    if (!propOption || !("blogDest" in propOption)) return podcastEpisodes;
    return podcastEpisodes.filter(ep => {
      const epDest = ep.id.includes("rapanui") || ep.id.includes("hitorangi") ? "Hangaroa" : "All";
      return epDest === "All" || epDest === propOption.blogDest;
    });
  }, [activeProperty]);

  return (
    <div className="min-h-screen bg-white">
      <BrandNavigation pageType="content" />

      {/* ── Hero ── */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0">
          <NativeVideo src={typeof window !== 'undefined' && window.innerWidth < 768 ? JOURNAL_CDN.heroVideoMobile : JOURNAL_CDN.heroVideoDesktop} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-end items-center pb-10 md:pb-16 px-6">
          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="text-white text-xl md:text-3xl lg:text-4xl tracking-wide text-center" style={heading}>
            Nayara Journal
          </motion.h1>
        </div>
      </section>

      {/* ── Tabs + Filters ── */}
      <section className="py-8 md:py-10 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          {/* Tabs */}
          <div className="flex justify-center gap-1 mb-8">
            {([
              { id: "blog" as TabType, label: "Blog" },
              { id: "podcast" as TabType, label: "Podcast" },
              { id: "faq" as TabType, label: "FAQ" },
            ]).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 text-[12px] tracking-[0.12em] transition-all duration-300 border-b-2 ${
                  activeTab === tab.id
                    ? "text-[#3a2a1a] border-[#3a2a1a]"
                    : "text-[#3a2a1a]/30 border-transparent hover:text-[#3a2a1a]/60"
                }`}
                style={{ ...body, fontWeight: 500 }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog Tab ── */}
      {activeTab === "blog" && <BlogTab posts={filteredBlog} />}

      {/* ── Podcast Tab ── */}
      {activeTab === "podcast" && <PodcastTab episodes={filteredPodcast} />}

      {/* ── FAQ Tab ── */}
      {activeTab === "faq" && <FAQTab items={filteredFaq} />}

      <ContentCrossLinks currentPage="journal" />
      <Footer />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BLOG TAB
   ═══════════════════════════════════════════════════════════════ */
function BlogTab({ posts }: { posts: BlogPost[] }) {
  const [showAll, setShowAll] = useState(false);
  const featuredPost = useMemo(() => posts.find((p) => p.featured) || posts[0], [posts]);
  const gridPosts = useMemo(() => {
    const rest = posts.filter((p) => p.id !== featuredPost?.id);
    return showAll ? rest : rest.slice(0, 9);
  }, [posts, featuredPost, showAll]);
  const hasMore = posts.filter((p) => p.id !== featuredPost?.id).length > 9;

  return (
    <>
      {/* Featured */}
      {featuredPost && (
        <section className="px-6 md:px-10 pb-4">
          <div className="max-w-[1200px] mx-auto">
            <a href={featuredPost.url} target="_blank" rel="noopener noreferrer" className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden bg-white/60 rounded-xl">
                <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                  <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="eager" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-[#3a2a1a]/70 backdrop-blur-sm text-white text-[9px] tracking-[0.2em] px-3 py-1.5 rounded-full" style={{ ...body, fontWeight: 500 }}>Featured</span>
                  </div>
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[#3a2a1a]/30 text-[10px] tracking-[0.2em]" style={{ ...body, fontWeight: 500 }}>{featuredPost.pillar}</span>
                    <span className="w-px h-3 bg-[#3a2a1a]/10" />
                    <span className="text-[#3a2a1a]/30 text-[10px] tracking-[0.2em]" style={{ ...body, fontWeight: 500 }}>{featuredPost.destination}</span>
                  </div>
                  <h2 className="text-[#3a2a1a] text-2xl md:text-3xl leading-[1.1] group-hover:text-[#5a4a3a] transition-colors" style={heading}>{featuredPost.title}</h2>
                  <p className="text-[#4B4A4A]/55 text-[14px] leading-relaxed mt-4 line-clamp-3" style={body}>{featuredPost.excerpt}</p>
                  <div className="mt-6 flex items-center gap-2">
                    <span className="text-[#3a2a1a]/40 text-[10px] tracking-[0.2em] group-hover:text-[#3a2a1a] transition-colors" style={{ ...body, fontWeight: 500 }}>Read Story</span>
                    <ExternalLink className="w-3 h-3 text-[#3a2a1a]/30 group-hover:text-[#3a2a1a] transition-colors" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </section>
      )}

      {/* Grid */}
      <section className="px-6 md:px-10 py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto">
          {gridPosts.length === 0 && !featuredPost ? (
            <div className="text-center py-16">
              <p className="text-[#3a2a1a]/30 text-[14px]" style={body}>No stories match the current filters.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gridPosts.map((post, i) => (
                  <motion.a
                    key={post.id}
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.2) }}
                    className="group block"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-stone-100 rounded-lg mb-4">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[#3a2a1a]/25 text-[9px] tracking-[0.15em]" style={{ ...body, fontWeight: 500 }}>{post.pillar}</span>
                      <span className="w-px h-2.5 bg-[#3a2a1a]/10" />
                      <span className="text-[#3a2a1a]/25 text-[9px] tracking-[0.15em]" style={{ ...body, fontWeight: 500 }}>{post.destination}</span>
                    </div>
                    <h3 className="text-[#3a2a1a] text-lg leading-[1.2] group-hover:text-[#5a4a3a] transition-colors" style={heading}>{post.title}</h3>
                    {post.excerpt && <p className="text-[#4B4A4A]/45 text-[13px] leading-relaxed mt-2 line-clamp-2" style={body}>{post.excerpt}</p>}
                  </motion.a>
                ))}
              </div>
              {hasMore && !showAll && (
                <div className="flex justify-center mt-10">
                  <button onClick={() => setShowAll(true)} className="flex items-center gap-2 text-[11px] tracking-[0.15em] text-[#3a2a1a]/40 hover:text-[#3a2a1a] transition-colors py-3 px-6 border border-[#3a2a1a]/15 rounded-full hover:border-[#3a2a1a]/30" style={{ ...body, fontWeight: 500 }}>
                    View All Stories
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PODCAST TAB
   ═══════════════════════════════════════════════════════════════ */
function PodcastTab({ episodes }: { episodes: PodcastEpisode[] }) {
  const [activeEpisode, setActiveEpisode] = useState<string | null>(null);

  return (
    <>
      {/* Intro */}
      <section className="py-10 md:py-14 px-6 md:px-10">
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

      {/* Episodes */}
      <section className="pb-16 md:pb-24">
        <div className="flex flex-col gap-10">
          {episodes.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-[#3a2a1a]/30 text-[14px]" style={body}>No episodes match the current filters.</p>
            </div>
          ) : (
            episodes.map((ep, i) => (
              <FadeIn key={ep.id} delay={i * 0.1}>
                <div className="bg-white/60 overflow-hidden">
                  <div className="relative aspect-video bg-stone-900 w-full">
                    {activeEpisode === ep.id ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${ep.youtubeId}?autoplay=1&rel=0`}
                        className="absolute inset-0 w-full h-full"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title={ep.title}
                      />
                    ) : (
                      <button onClick={() => setActiveEpisode(ep.id)} className="absolute inset-0 w-full h-full group cursor-pointer">
                        <img src={ep.coverImage || `https://img.youtube.com/vi/${ep.youtubeId}/maxresdefault.jpg`} alt={ep.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" loading="lazy" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center group-hover:bg-white/25 transition-colors">
                            <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white ml-1" />
                          </div>
                        </div>
                      </button>
                    )}
                  </div>
                  <div className="px-6 md:px-10 py-8 md:py-10 max-w-[1000px] mx-auto">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[#3a2a1a]/25 text-[10px] tracking-[0.2em]" style={{ ...body, fontWeight: 500 }}>Episode {i + 1}</span>
                      <span className="w-px h-3 bg-[#3a2a1a]/10" />
                      <span className="text-[#3a2a1a]/25 text-[10px] tracking-[0.1em]" style={body}>{ep.duration}</span>
                    </div>
                    <h3 className="text-[#3a2a1a] text-xl md:text-2xl leading-[1.15]" style={heading}>{ep.title}</h3>
                    <p className="text-[#3a2a1a]/30 text-xs tracking-[0.1em] mt-3 mb-4" style={{ ...body, fontWeight: 500 }}>with {ep.guest}</p>
                    <p className="text-[#4B4A4A]/50 text-[14px] leading-relaxed max-w-2xl" style={body}>{ep.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))
          )}
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-10 md:py-14 px-6 md:px-10">
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
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FAQ TAB
   ═══════════════════════════════════════════════════════════════ */
function FAQTab({ items }: { items: FAQItem[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const toggle = (id: string) => setOpenId(openId === id ? null : id);

  return (
    <section className="px-6 pb-24">
      <div className="max-w-4xl mx-auto">
        {items.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-[#3a2a1a]/40 text-[15px]" style={body}>
              No questions match your current filters. Try adjusting your selection.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-[#3a2a1a]/8">
            {items.map((item) => (
              <div key={item.id} className="py-1">
                <button onClick={() => toggle(item.id)} className="w-full text-left py-5 flex items-start justify-between gap-4 group">
                  <span className="text-[#3a2a1a] text-[16px] md:text-[17px] leading-relaxed group-hover:text-[#3a2a1a]/70 transition-colors" style={{ ...body, fontWeight: 500 }}>
                    {item.question}
                  </span>
                  <motion.svg animate={{ rotate: openId === item.id ? 180 : 0 }} transition={{ duration: 0.25 }} className="w-5 h-5 text-[#3a2a1a]/30 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {openId === item.id && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                      <div className="pb-6 pr-10">
                        <p className="text-[#3a2a1a]/60 text-[15px] leading-relaxed" style={body}>{item.answer}</p>
                        {item.properties.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {item.properties.map((pid) => {
                              const prop = FAQ_PROPERTIES.find((p) => p.id === pid);
                              return (
                                <span key={pid} className="text-[10px] tracking-[0.1em] text-[#3a2a1a]/30 border border-[#3a2a1a]/10 px-2 py-0.5 rounded-sm" style={{ ...body, fontWeight: 500 }}>
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
        )}
        <div className="mt-8 text-center">
          <span className="text-[#3a2a1a]/25 text-[13px]" style={body}>
            {items.length} question{items.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>
    </section>
  );
}
