/*
 * NAYARA BLOG POST TEMPLATE — Definitive Editorial Template (v2)
 * Data-driven: receives a BlogPostData object and renders the full post.
 *
 * Structure:
 * 1. BrandNavigation
 * 2. Hero video/image (full-width, 21:9, autoplay, muted) with fallback
 * 3. Title + pillar tag + author + date + reading time
 * 4. Key Findings callout box
 * 5. Body sections (alternating cream #F7F5F0 / stone #E8E2D8, NO divider lines)
 *    - One espresso dark section if post has a pullQuote in any section
 *    - Images centered below body text, horizontal
 * 6. Sources & Further Reading (simple flat list)
 * 7. Explore More (3 related article cards)
 * 8. Brand espresso Footer
 * 9. Article/BlogPosting schema (JSON-LD)
 *
 * Rules:
 * - NO divider lines between sections (backgrounds do the work)
 * - FAQ is ALWAYS separate (never in blog post)
 * - Sources as a simple flat list (no grouping)
 * - Images centered below body sections, horizontal
 */

import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";
import NativeVideo from "@/components/NativeVideo";
import BlobVideo from "@/components/BlobVideo";
import { useIsMobile } from "@/hooks/useMobile";
import type { BlogPostData } from "@/data/blogPosts";
import BlogAuthorReadTime, { countWordsInHTML } from "@/components/BlogAuthorReadTime";

const PALETTE = {
  espresso: "#3B2B26",
  cream: "#F7F5F0",
  stone: "#E8E2D8",
  accent: "#8B6914",
  text: "#2C2016",
  muted: "#5A4A3A",
};

/* Staggered entrance animation for blog content */
const contentEntrance = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.8, 0.25, 1] as [number, number, number, number] },
  }),
};

interface BlogPostTemplateProps {
  post: BlogPostData;
  hideNav?: boolean;
  hideConcierge?: boolean;
  hideFooterSections?: boolean;
  hideFooterKeepSources?: boolean;
  heroAspect?: string;
}

/* ═══════════════════════════════════════════════════════════════
   MAIN TEMPLATE
   ═══════════════════════════════════════════════════════════════ */
export default function BlogPostTemplate({ post, hideNav, heroAspect }: BlogPostTemplateProps) {
  const [currentUrl, setCurrentUrl] = useState("");
  const isMobile = useIsMobile();

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  // Alternating section backgrounds: cream / stone
  const bgColors = [PALETTE.cream, PALETTE.stone];
  // Track the last body section bg so Sources always contrasts
  const lastSectionBg = post.sections.length > 0 ? bgColors[(post.sections.length - 1) % 2] : PALETTE.cream;
  const sourcesBg = lastSectionBg === PALETTE.stone ? PALETTE.cream : PALETTE.stone;

  // Pull quotes render as standalone espresso dark blocks within their section

  // JSON-LD Article schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seo.metaDescription,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Nayara Resorts",
      logo: {
        "@type": "ImageObject",
        url: "https://www.nayararesorts.com/favicon.ico",
      },
    },
    datePublished: post.date,
    image: post.heroImage,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": currentUrl,
    },
    articleSection: post.pillar,
    keywords: post.tags.join(", "),
    wordCount: post.sections.reduce((acc, s) => acc + s.content.replace(/<[^>]*>/g, "").split(/\s+/).length, 0),
  };

  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "var(--font-body)",
        backgroundColor: PALETTE.cream,
        color: PALETTE.text,
      }}
    >
      {/* ── SEO HEAD ── */}
      <Helmet>
        <title>{post.seo.metaTitle}</title>
        <meta name="description" content={post.seo.metaDescription} />
        <meta property="og:title" content={post.seo.metaTitle} />
        <meta property="og:description" content={post.seo.metaDescription} />
        <meta property="og:image" content={post.heroImage} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.seo.metaTitle} />
        <meta name="twitter:description" content={post.seo.metaDescription} />
        <meta name="twitter:image" content={post.heroImage} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      {/* ── 1. BRAND NAVIGATION ── */}
      {!hideNav && <BrandNavigation pageType="content" />}

      {/* ── 2. HERO VIDEO / IMAGE ── */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          aspectRatio: isMobile && post.mobileHeroVideo ? "9/16" : heroAspect || (post.hasAudio ? "16/9" : "21/9"),
          minHeight: "400px",
          maxHeight: isMobile && post.mobileHeroVideo ? "85vh" : (heroAspect === "16/9" || post.hasAudio) ? "100vh" : "70vh",
        }}
      >
        {isMobile && post.mobileHeroVideo ? (
          /\.(jpe?g|png|webp|avif|gif)$/i.test(post.mobileHeroVideo) ? (
            <img src={post.mobileHeroVideo} alt={post.title} className="absolute inset-0 w-full h-full object-cover" loading="eager" />
          ) : (
            <BlobVideo src={post.mobileHeroVideo} className="absolute inset-0 w-full h-full object-cover" />
          )
        ) : post.heroVideo && post.hasAudio ? (
          <BlobVideo
            src={post.heroVideo.desktop}
            className="absolute inset-0 w-full h-full object-cover"
            hasAudio
            loop
          />
        ) : post.heroVideo ? (
          <NativeVideo
            src={post.heroVideo.desktop}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img
            src={post.heroImage}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

        {/* H1 title overlay for immersive hero (hasAudio) */}
        {post.hasAudio && (
          <div className="absolute inset-0 z-10 flex items-center justify-center px-8">
            <h1
              className="text-white text-center text-2xl md:text-4xl lg:text-5xl leading-[1.15] tracking-wide"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              {post.title}
            </h1>
          </div>
        )}
      </section>

      {/* ── 3. TITLE BLOCK ── */}
      <motion.section
        style={{ backgroundColor: PALETTE.cream }}
        variants={contentEntrance}
        initial="hidden"
        animate="visible"
        custom={0.1}
      >
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-8">
          {/* Pillar + Tags */}
          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <span
              className="text-[11px] font-medium tracking-[0.35em]"
              style={{ fontFamily: "var(--font-body)", color: PALETTE.espresso }}
            >
              {post.pillar}
            </span>
            {post.tags.filter(t => t !== post.pillar).slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-[0.2em] border px-2 py-0.5 rounded-full"
                style={{ color: `${PALETTE.muted}99`, borderColor: `${PALETTE.stone}` }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1
            className="text-3xl md:text-[40px] lg:text-[46px] leading-[1.15] mb-5"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
          >
            {post.title}
          </h1>

        </div>
      </motion.section>

      {/* ── 3b. AUTHOR + READING TIME ── */}
      <BlogAuthorReadTime
        author={post.author}
        authorRole={post.authorRole || "Nayara Resorts"}
        date={post.date}
        wordCount={post.sections.reduce((acc, s) => acc + countWordsInHTML(s.content), 0)}
        readingTime={post.readingTime}
      />

      {/* ── 4. KEY FINDINGS ── */}
      <motion.section
        style={{ backgroundColor: PALETTE.stone }}
        variants={contentEntrance}
        initial="hidden"
        animate="visible"
        custom={0.25}
      >
        <div className="max-w-3xl mx-auto px-8 md:px-16 py-12">
          <div className="border rounded-lg p-6 md:p-8" style={{ borderColor: `${PALETTE.muted}33`, backgroundColor: PALETTE.cream }}>
            <p
              className="text-lg mb-5"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
            >
              Key Findings
            </p>
            <ul className="space-y-4">
              {post.keyFindings.map((finding, i) => (
                <li
                  key={i}
                  className="text-[15px] leading-[1.9] pl-5 border-l-2"
                  style={{ color: PALETTE.muted, borderColor: PALETTE.espresso }}
                >
                  {finding}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* ── 5. BODY SECTIONS ── */}
      {post.sections.map((section, idx) => {
        // Alternate cream/stone backgrounds
        const bg = bgColors[idx % 2];
        const textColor = PALETTE.muted;
        const headingColor = PALETTE.espresso;

        return (
          <motion.section
            key={idx}
            style={{ backgroundColor: bg }}
            variants={contentEntrance}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            custom={0.1}
          >
            <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
              {/* Section heading */}
              <h2
                className="text-2xl md:text-[30px] leading-snug mb-8 text-center"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: headingColor }}
              >
                {section.heading}
              </h2>

              {/* Body content */}
              <div
                className="blog-body-content text-[15px] leading-[1.9] [&_p]:mb-6 [&_a]:underline [&_a:hover]:opacity-70 [&_a]:transition-opacity [&_em]:italic [&_strong]:font-semibold"
                style={{ color: textColor }}
                dangerouslySetInnerHTML={{ __html: section.content }}
              />

              {/* Pull quote — standalone espresso dark block */}
              {section.pullQuote && (
                <div className="my-10 -mx-8 md:-mx-16 px-8 md:px-16 py-10" style={{ backgroundColor: PALETTE.espresso }}>
                  <blockquote className="max-w-2xl mx-auto text-center">
                    <p
                      className="text-lg md:text-xl italic leading-relaxed"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "rgba(247,245,240,0.9)" }}
                    >
                      "{section.pullQuote}"
                    </p>
                  </blockquote>
                </div>
              )}

              {/* In-body image: centered below body text, horizontal */}
              {section.image && (
                <figure className="my-10 flex flex-col items-center">
                  <img
                    src={section.image.src}
                    alt={section.image.alt}
                    className="w-full max-w-2xl rounded-lg shadow-md object-contain"
                    loading="lazy"
                  />
                  {section.image.caption && (
                    <figcaption className="mt-3 text-sm text-center max-w-2xl" style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}>
                      {section.image.caption}
                    </figcaption>
                  )}
                </figure>
              )}

              {/* In-body video */}
              {section.video && (
                <div className="my-10 rounded-lg overflow-hidden shadow-md relative" style={{ aspectRatio: "16/9" }}>
                  <NativeVideo
                    src={section.video.src}
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay={false}
                    muted={false}
                    loop={false}
                    controls
                    poster={section.video.poster}
                  />
                </div>
              )}
            </div>
          </motion.section>
        );
      })}

      {/* ── 5b. FAQ SECTION (if present) ── */}
      {post.faq && post.faq.length > 0 && (
        <section style={{ backgroundColor: PALETTE.stone }}>
          <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
            <p
              className="uppercase tracking-[0.3em] text-[11px] mb-4 text-center"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
            >
              FAQ
            </p>
            <h2
              className="text-2xl md:text-[30px] leading-snug mb-8 text-center"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
            >
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {post.faq.map((item, idx) => (
                <div key={idx}>
                  <h3
                    className="text-[16px] font-semibold mb-2"
                    style={{ fontFamily: "var(--font-body)", color: PALETTE.espresso }}
                  >
                    {item.question}
                  </h3>
                  <p
                    className="text-[15px] leading-[1.8]"
                    style={{ fontFamily: "var(--font-body)", color: PALETTE.muted }}
                  >
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 6. SOURCES & FURTHER READING (simple flat list) ── */}
      {post.sources && post.sources.length > 0 && (
        <section style={{ backgroundColor: sourcesBg }}>
          <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
            <p
              className="uppercase tracking-[0.3em] text-[11px] mb-4 text-center"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
            >
              References
            </p>
            <h2
              className="text-2xl md:text-[30px] leading-snug mb-8 text-center"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
            >
              Sources &amp; Further Reading
            </h2>
            <ul className="space-y-3">
              {post.sources.map((src) => (
                <li key={src.label} className="text-[14px] leading-[1.7]" style={{ color: PALETTE.muted }}>
                  <a
                    href={src.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline transition-opacity hover:opacity-70"
                    style={{ color: PALETTE.espresso }}
                  >
                    {src.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── SHARE THIS POST ── */}
      <section style={{ backgroundColor: PALETTE.cream }}>
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12 text-center">
          <p
            className="uppercase tracking-[0.3em] text-[11px] mb-6"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
          >
            Share This Post
          </p>
          <div className="flex items-center justify-center gap-6">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Share on Facebook"
            >
              <svg className="w-6 h-6 transition-all duration-300 group-hover:scale-110" fill={PALETTE.espresso} style={{ opacity: 0.6 }} viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Share on X"
            >
              <svg className="w-6 h-6 transition-all duration-300 group-hover:scale-110" fill={PALETTE.espresso} style={{ opacity: 0.6 }} viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="Share on LinkedIn"
            >
              <svg className="w-6 h-6 transition-all duration-300 group-hover:scale-110" fill={PALETTE.espresso} style={{ opacity: 0.6 }} viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a
              href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
              className="group"
              aria-label="Share via Email"
            >
              <svg className="w-6 h-6 transition-all duration-300 group-hover:scale-110" fill="none" stroke={PALETTE.espresso} style={{ opacity: 0.6 }} strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
            </a>
            <button
              onClick={() => { if (typeof navigator !== 'undefined' && navigator.clipboard) { navigator.clipboard.writeText(window.location.href); } }}
              className="group"
              aria-label="Copy link"
            >
              <svg className="w-6 h-6 transition-all duration-300 group-hover:scale-110" fill="none" stroke={PALETTE.espresso} style={{ opacity: 0.6 }} strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.813a4.5 4.5 0 00-1.242-7.244l-4.5-4.5a4.5 4.5 0 00-6.364 6.364L5.25 8.25"/></svg>
            </button>
          </div>
        </div>
      </section>

      {/* ── 7. EXPLORE MORE (3 related article cards) ── */}
      {post.relatedArticles && post.relatedArticles.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ backgroundColor: PALETTE.cream }}
        >
          <div className="max-w-5xl mx-auto px-8 md:px-16 pt-16 pb-16">
            <p
              className="uppercase tracking-[0.3em] text-[11px] mb-4 text-center"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
            >
              Continue Reading
            </p>
            <h2
              className="text-3xl md:text-4xl mb-12 text-center"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
            >
              Explore More
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {post.relatedArticles.slice(0, 3).map((article) => (
                <Link key={article.slug} href={article.slug.startsWith("/") ? article.slug : `/blog/${article.slug}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                  >
                    <div className="aspect-square overflow-hidden mb-4 rounded-lg">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <p
                      className="text-[10px] tracking-[0.2em] uppercase mb-2"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: PALETTE.accent }}
                    >
                      {article.pillar}
                    </p>
                    <h3
                      className="text-lg"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: PALETTE.espresso }}
                    >
                      {article.title}
                    </h3>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* ── 8. BRAND ESPRESSO FOOTER ── */}
      <Footer textColor="#FFFFFF" />
    </div>
  );
}
