/*
 * NAYARA BLOG POST TEMPLATE — Definitive Editorial Template
 * Data-driven: receives a BlogPostData object and renders the full post.
 * 
 * Structure:
 * 1. BrandNavigation
 * 2. Hero video (full-width, autoplay, muted) with fallback to hero image
 * 3. Title + pillar tag + author + date + reading time
 * 4. Key Findings callout box
 * 5. Body sections (alternating cream/beige, optional photos/video/pull quotes)
 * 6. Sources & Further Reading
 * 7. Share buttons (copy link, X, WhatsApp, email)
 * 8. Related Articles grid (3 cards)
 * 9. "Begin Your Journey" CTA with internal property links
 * 10. Shared Footer component
 * 11. Article/BlogPosting schema (JSON-LD)
 */

import { useEffect, useState } from "react";
import { useLocation, Link } from "wouter";
import { Helmet } from "react-helmet-async";
import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";
import NativeVideo from "@/components/NativeVideo";
import type { BlogPostData } from "@/data/blogPosts";

interface BlogPostTemplateProps {
  post: BlogPostData;
}

/* ═══════════════════════════════════════════════════════════════
   MAIN TEMPLATE
   ═══════════════════════════════════════════════════════════════ */
export default function BlogPostTemplate({ post }: BlogPostTemplateProps) {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  // Alternating section backgrounds
  const bgColors = ["#f7f5f0", "#F5F0E8"];

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
        backgroundColor: "#f7f5f0",
        color: "#3B2B26",
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
      <BrandNavigation pageType="content" />

      {/* ── 2. HERO VIDEO / IMAGE ── */}
      <section className="relative w-full overflow-hidden" style={{ aspectRatio: "21/9", minHeight: "400px", maxHeight: "70vh" }}>
        {post.heroVideo ? (
          <NativeVideo src={post.heroVideo.desktop} className="absolute inset-0 w-full h-full object-cover" autoPlay muted hasAudio
            loop
            playsInline
          />
        ) : (
          <img
            src={post.heroImage}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

        {/* Pillar tag on hero */}
        <div className="absolute bottom-8 left-8 md:left-16 z-10">
          <span
            className="inline-block px-4 py-1.5 bg-[#AD8F61] text-white text-[10px] tracking-[0.3em] rounded-full"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            {post.pillar}
          </span>
        </div>
      </section>

      {/* ── 3. TITLE BLOCK ── */}
      <section className="bg-[#f7f5f0]">
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-8">
          {/* Pillar + Tags */}
          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <span
              className="text-[11px] font-medium tracking-[0.35em] text-[#AD8F61]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {post.pillar}
            </span>
            {post.tags.filter(t => t !== post.pillar).slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-[0.2em] text-[#8a7a5a]/60 border border-[#c4bba8]/40 px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1
            className="text-3xl md:text-[40px] lg:text-[46px] leading-[1.15] mb-5"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            {post.title}
          </h1>

          {/* Author + Date + Reading Time */}
          <div className="flex items-center gap-3 text-[13px] text-[#8a7a5a] tracking-[0.05em] mb-6 flex-wrap">
            <span>{post.author}</span>
            <span className="text-[#c4bba8]">&middot;</span>
            <span>{post.date}</span>
            <span className="text-[#c4bba8]">&middot;</span>
            <span>{post.readingTime} min read</span>
          </div>

        </div>
      </section>

      {/* ── GOLD RULE ── */}
      <div className="h-[3px] bg-[#AD8F61]" />

      {/* ── 4. KEY FINDINGS ── */}
      <section className="bg-[#F5F0E8]">
        <div className="max-w-3xl mx-auto px-8 md:px-16 py-12">
          <div className="border border-[#c4bba8] rounded-lg p-6 md:p-8 bg-[#f7f5f0]">
            <p
              className="text-lg mb-5 text-[#3B2B26]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              Key Findings
            </p>
            <ul className="space-y-4">
              {post.keyFindings.map((finding, i) => (
                <li
                  key={i}
                  className="text-[15px] text-[#666666] leading-[1.9] pl-5 border-l-2 border-[#AD8F61]"
                >
                  {finding}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── GOLD RULE ── */}
      <div className="h-[3px] bg-[#AD8F61]" />

      {/* ── 5. BODY SECTIONS ── */}
      {post.sections.map((section, idx) => {
        const bg = bgColors[idx % 2];
        return (
          <div key={idx}>
            <section style={{ backgroundColor: bg }}>
              <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
                {/* Section heading */}
                <h2
                  className="text-2xl md:text-[30px] leading-snug mb-8 text-center"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                >
                  {section.heading}
                </h2>

                {/* Body content */}
                <div
                  className="blog-body-content text-[15px] text-[#666666] leading-[1.9] [&_p]:mb-6 [&_a]:text-[#AD8F61] [&_a]:underline [&_a:hover]:text-[#8a7a5a] [&_a]:transition-colors [&_em]:italic [&_strong]:font-semibold [&_strong]:text-[#3B2B26]"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />

                {/* Pull quote */}
                {section.pullQuote && (
                  <blockquote className="my-10 mx-4 md:mx-12 py-6 px-8 border-l-4 border-[#AD8F61] bg-[#f7f5f0]/60 rounded-r-lg">
                    <p
                      className="text-[17px] md:text-[19px] text-[#3B2B26] leading-[1.7] italic"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                    >
                      "{section.pullQuote}"
                    </p>
                  </blockquote>
                )}

                {/* In-body image */}
                {section.image && (
                  <figure className="my-10">
                    <img
                      src={section.image.src}
                      alt={section.image.alt}
                      className="w-full rounded-lg shadow-md"
                      loading="lazy"
                    />
                    {section.image.caption && (
                      <figcaption className="mt-3 text-[12px] text-[#8a7a5a] text-center italic tracking-[0.03em]">
                        {section.image.caption}
                      </figcaption>
                    )}
                  </figure>
                )}

                {/* In-body video */}
                {section.video && (
                  <div className="my-10 rounded-lg overflow-hidden shadow-md relative" style={{ aspectRatio: "16/9" }}>
                    <NativeVideo src={section.video.src} className="absolute inset-0 w-full h-full object-cover" autoPlay={false} muted={false} hasAudio
                      loop={false}
                      controls
                      poster={section.video.poster}
                    />
                  </div>
                )}
              </div>
            </section>

            {/* Gold divider between sections */}
            {idx < post.sections.length - 1 && <div className="h-[3px] bg-[#AD8F61]" />}
          </div>
        );
      })}

      {/* ── GOLD RULE ── */}
      <div className="h-[3px] bg-[#AD8F61]" />

      {/* ── 6. SOURCES & FURTHER READING ── */}
      <section className="bg-[#F5F0E8]">
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
          <h2
            className="text-xl mb-6 text-center"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Sources &amp; Further Reading
          </h2>
          <ul className="space-y-2 text-[13px] text-[#8a7a5a] leading-[1.8]">
            {post.sources.map((src) => (
              <li key={src.label}>
                <a
                  href={src.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#AD8F61] no-underline hover:underline transition-colors"
                >
                  {src.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── GOLD RULE ── */}
      <div className="h-[3px] bg-[#AD8F61]" />

      {/* ── BEGIN YOUR JOURNEY CTA ── */}
      <section className="bg-[#f7f5f0] text-center py-14 px-8 md:px-16">
        <h2
          className="text-2xl md:text-[28px] leading-snug mb-4"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          Begin Your Nayara Journey
        </h2>
        <p className="text-[15px] text-[#666666] leading-[1.9] mb-8 max-w-xl mx-auto">
          Explore the properties that bring this story to life.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
          {post.ctaProperties.map((prop) => (
            <Link
              key={prop.name}
              href={prop.route}
              className="inline-block px-6 py-2.5 border border-[#AD8F61] text-[#AD8F61] text-[11px] font-medium tracking-[0.2em] no-underline hover:bg-[#AD8F61] hover:text-white transition-colors rounded-full"
            >
              {prop.name}
            </Link>
          ))}
        </div>
      </section>

      {/* ── 10. FOOTER ── */}
      <Footer pageType="brand" />
    </div>
  );
}
