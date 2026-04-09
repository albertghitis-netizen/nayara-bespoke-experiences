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
   SHARE BUTTONS
   ═══════════════════════════════════════════════════════════════ */
function ShareButtons({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* fallback */
      const ta = document.createElement("textarea");
      ta.value = url;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  return (
    <div className="flex items-center gap-4 flex-wrap">
      <span
        className="text-[11px] tracking-[0.2em] uppercase text-[#8a7a5a]"
        style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
      >
        Share
      </span>

      {/* Copy Link */}
      <button
        onClick={copyLink}
        className="flex items-center gap-1.5 text-[#8a7a5a] hover:text-[#AD8F61] transition-colors"
        title="Copy link"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.54a4.5 4.5 0 00-1.242-7.244l-4.5-4.5a4.5 4.5 0 00-6.364 6.364L4.34 8.798" />
        </svg>
        <span className="text-[11px] tracking-[0.1em]">{copied ? "Copied!" : "Link"}</span>
      </button>

      {/* X / Twitter */}
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-[#8a7a5a] hover:text-[#AD8F61] transition-colors"
        title="Share on X"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
        <span className="text-[11px] tracking-[0.1em]">X</span>
      </a>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-[#8a7a5a] hover:text-[#AD8F61] transition-colors"
        title="Share on WhatsApp"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="text-[11px] tracking-[0.1em]">WhatsApp</span>
      </a>

      {/* Email */}
      <a
        href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`}
        className="flex items-center gap-1.5 text-[#8a7a5a] hover:text-[#AD8F61] transition-colors"
        title="Share via email"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
        <span className="text-[11px] tracking-[0.1em]">Email</span>
      </a>
    </div>
  );
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
        color: "#3a2a1a",
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
          />
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

        {/* Pillar tag on hero */}
        <div className="absolute bottom-8 left-8 md:left-16 z-10">
          <span
            className="inline-block px-4 py-1.5 bg-[#AD8F61] text-white text-[10px] tracking-[0.3em] uppercase rounded-full"
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
              className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#AD8F61]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {post.pillar}
            </span>
            {post.tags.filter(t => t !== post.pillar).slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-[0.2em] uppercase text-[#8a7a5a]/60 border border-[#c4bba8]/40 px-2 py-0.5 rounded-full"
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

          {/* Share Buttons */}
          <ShareButtons title={post.title} url={currentUrl} />
        </div>
      </section>

      {/* ── GOLD RULE ── */}
      <div className="h-[3px] bg-[#AD8F61]" />

      {/* ── 4. KEY FINDINGS ── */}
      <section className="bg-[#F5F0E8]">
        <div className="max-w-3xl mx-auto px-8 md:px-16 py-12">
          <div className="border border-[#c4bba8] rounded-lg p-6 md:p-8 bg-[#f7f5f0]">
            <p
              className="text-lg mb-5 text-[#3a2a1a]"
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
                  className="blog-body-content text-[15px] text-[#666666] leading-[1.9] [&_p]:mb-6 [&_a]:text-[#AD8F61] [&_a]:underline [&_a:hover]:text-[#8a7a5a] [&_a]:transition-colors [&_em]:italic [&_strong]:font-semibold [&_strong]:text-[#3a2a1a]"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />

                {/* Pull quote */}
                {section.pullQuote && (
                  <blockquote className="my-10 mx-4 md:mx-12 py-6 px-8 border-l-4 border-[#AD8F61] bg-[#f7f5f0]/60 rounded-r-lg">
                    <p
                      className="text-[17px] md:text-[19px] text-[#3a2a1a] leading-[1.7] italic"
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

      {/* ── 7. SHARE BUTTONS (bottom) ── */}
      <section className="bg-[#f7f5f0]">
        <div className="max-w-3xl mx-auto px-8 md:px-16 py-10 flex justify-center">
          <ShareButtons title={post.title} url={currentUrl} />
        </div>
      </section>

      {/* ── 8. RELATED ARTICLES ── */}
      {post.relatedArticles.length > 0 && (
        <>
          <div className="h-[3px] bg-[#c4bba8]" />
          <section className="bg-[#F5F0E8]">
            <div className="max-w-5xl mx-auto px-8 md:px-16 pt-14 pb-14">
              <h2
                className="text-2xl md:text-[28px] leading-snug mb-10 text-center"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {post.relatedArticles.map((article) => (
                  <a
                    key={article.slug}
                    href={article.slug}
                    target={article.slug.startsWith("http") ? "_blank" : undefined}
                    rel={article.slug.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group block bg-[#f7f5f0] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-[10px] tracking-[0.25em] uppercase text-[#AD8F61] mb-2 block">
                        {article.pillar}
                      </span>
                      <h3
                        className="text-[15px] leading-[1.4] text-[#3a2a1a] group-hover:text-[#AD8F61] transition-colors"
                        style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                      >
                        {article.title}
                      </h3>
                      <p className="text-[11px] text-[#8a7a5a] mt-2">{article.date}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ── 9. BEGIN YOUR JOURNEY CTA ── */}
      <div className="h-[3px] bg-[#AD8F61]" />
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
              className="inline-block px-6 py-2.5 border border-[#AD8F61] text-[#AD8F61] text-[11px] font-medium tracking-[0.2em] uppercase no-underline hover:bg-[#AD8F61] hover:text-white transition-colors rounded-full"
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
