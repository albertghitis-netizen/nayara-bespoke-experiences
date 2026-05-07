/*
 * NAYARA BLOG POST TEMPLATE , Definitive Editorial Template
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
import { BookOpen } from "lucide-react";
import BrandNavigation from "@/components/BrandNavigation";
import Footer from "@/components/Footer";
import NativeVideo from "@/components/NativeVideo";
import BlobVideo from "@/components/BlobVideo";
import { useIsMobile } from "@/hooks/useMobile";
import type { BlogPostData } from "@/data/blogPosts";

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
export default function BlogPostTemplate({ post, hideNav, hideConcierge, hideFooterSections, hideFooterKeepSources, heroAspect }: BlogPostTemplateProps) {
  const [currentUrl, setCurrentUrl] = useState("");
  const isMobile = useIsMobile();

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
      {!hideNav && <BrandNavigation pageType="content" />}

      {/* ── 2. HERO VIDEO / IMAGE ── */}
      <section className="relative w-full overflow-hidden" style={{ aspectRatio: isMobile && post.mobileHeroVideo ? "9/16" : heroAspect || (post.hasAudio ? "16/9" : "21/9"), minHeight: "400px", maxHeight: isMobile && post.mobileHeroVideo ? "85vh" : (heroAspect === "16/9" || post.hasAudio) ? "100vh" : "70vh" }}>
        {isMobile && post.mobileHeroVideo ? (
          <BlobVideo src={post.mobileHeroVideo} className="absolute inset-0 w-full h-full object-cover" />
        ) : post.heroVideo && post.hasAudio ? (
          <BlobVideo
            src={post.heroVideo.desktop}
            className="absolute inset-0 w-full h-full object-cover"
            hasAudio
            loop
          />
        ) : post.heroVideo ? (
          <NativeVideo src={post.heroVideo.desktop} className="absolute inset-0 w-full h-full object-cover" autoPlay muted
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
        {/* Read overlay — bottom-center pill */}
        <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center pointer-events-none">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer pointer-events-auto"
            style={{ background: "rgba(255,255,255,0.28)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.5)" }}
          >
            <BookOpen className="w-3.5 h-3.5 text-white" />
            <span className="text-white text-[11px] tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>Read</span>
            {/* Custom long-stem down arrow */}
            <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="translate-y-0.5">
              <line x1="7" y1="0" x2="7" y2="14" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              <polyline points="3,10 7,15 11,10" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
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
      <section className="bg-[#f7f5f0]">
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-8">
          {/* Pillar + Tags */}
          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <span
              className="text-[11px] font-medium tracking-[0.35em] text-[#3B2B26]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {post.pillar}
            </span>
            {post.tags.filter(t => t !== post.pillar).slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-[0.2em] text-[#2a1e1a]/60 border border-[#c4bba8]/40 px-2 py-0.5 rounded-full"
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
          <div className="flex items-center gap-3 text-[13px] text-[#2a1e1a] tracking-[0.05em] mb-6 flex-wrap">
            <span>{post.author}</span>
            <span className="text-[#c4bba8]">&middot;</span>
            <span>{post.date}</span>
            <span className="text-[#c4bba8]">&middot;</span>
            <span>{post.readingTime} min read</span>
          </div>

        </div>
      </section>

      {/* ── GOLD RULE ── */}
      <div className="h-[3px] bg-[#3B2B26]" />

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
                  className="text-[15px] text-[#666666] leading-[1.9] pl-5 border-l-2 border-[#3B2B26]"
                >
                  {finding}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── GOLD RULE ── */}
      <div className="h-[3px] bg-[#3B2B26]" />

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
                  className="blog-body-content text-[15px] text-[#666666] leading-[1.9] [&_p]:mb-6 [&_a]:text-[#3B2B26] [&_a]:underline [&_a:hover]:text-[#2a1e1a] [&_a]:transition-colors [&_em]:italic [&_strong]:font-semibold [&_strong]:text-[#3B2B26]"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />

                {/* Pull quote */}
                {section.pullQuote && (
                  <blockquote className="my-10 mx-4 md:mx-12 py-6 px-8 border-l-4 border-[#3B2B26] bg-[#f7f5f0]/60 rounded-r-lg">
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
                      <figcaption className="mt-3 text-[12px] text-[#2a1e1a] text-center italic tracking-[0.03em]">
                        {section.image.caption}
                      </figcaption>
                    )}
                  </figure>
                )}

                {/* In-body video */}
                {section.video && (
                  <div className="my-10 rounded-lg overflow-hidden shadow-md relative" style={{ aspectRatio: "16/9" }}>
                    <NativeVideo src={section.video.src} className="absolute inset-0 w-full h-full object-cover" autoPlay={false} muted={false}
                      loop={false}
                      controls
                      poster={section.video.poster}
                    />
                  </div>
                )}
              </div>
            </section>

            {/* Gold divider between sections */}
            {idx < post.sections.length - 1 && <div className="h-[3px] bg-[#3B2B26]" />}
          </div>
        );
      })}

      {hideFooterSections && (
        <>
        {/* ── GOLD RULE ── */}
        <div className="h-[3px] bg-[#3B2B26]" />

        <section className="bg-[#f7f5f0] pt-6 pb-16 px-8 md:px-16">
          {/* Begin Your Nayara Journey */}
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl tracking-[0.08em] text-[#3a2a1a]" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>Begin Your Nayara Journey</h3>
          </div>

          {/* Hotel Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10">
            {[
              { name: "Nayara Gardens", route: "https://nayaragardens.com" },
              { name: "Nayara Springs", route: "https://nayarasprings.com" },
              { name: "Nayara Tented Camp", route: "https://nayaratentedcamp.com" },
              { name: "Nayara Alto Atacama", route: "https://altoatacama.com" },
              { name: "Nayara Bocas del Toro", route: "https://nayarabocasdeltoro.com" },
              { name: "Nayara Hangaroa", route: "https://hangaroa.cl" },
            ].map((hotel) => (
              <a
                key={hotel.name}
                href={hotel.route}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] tracking-[0.15em] uppercase text-[#3a2a1a] underline hover:text-[#3a2a1a]/70 transition-colors"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                {hotel.name}
              </a>
            ))}
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 mb-10">
            <a href="https://www.linkedin.com/company/nayara-resorts" target="_blank" rel="noopener noreferrer" className="text-[#3a2a1a] hover:text-[#3a2a1a]/60 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://www.instagram.com/nayararesorts" target="_blank" rel="noopener noreferrer" className="text-[#3a2a1a] hover:text-[#3a2a1a]/60 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://x.com/NayaraResorts" target="_blank" rel="noopener noreferrer" className="text-[#3a2a1a] hover:text-[#3a2a1a]/60 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://www.youtube.com/@NayaraResorts" target="_blank" rel="noopener noreferrer" className="text-[#3a2a1a] hover:text-[#3a2a1a]/60 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>

          {/* Phone Numbers */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-10">
            <div className="text-center">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#3a2a1a]/60 mb-1" style={{ fontFamily: "var(--font-body)" }}>RESERVATIONS</p>
              <p className="text-lg text-[#3a2a1a]" style={{ fontFamily: "var(--font-display)" }}>+506 2479-1600</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#3a2a1a]/60 mb-1" style={{ fontFamily: "var(--font-body)" }}>US TOLL FREE</p>
              <p className="text-lg text-[#3a2a1a]" style={{ fontFamily: "var(--font-display)" }}>+1 844 865 2002</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#3a2a1a]/60 mb-1" style={{ fontFamily: "var(--font-body)" }}>UK LOCAL CALL</p>
              <p className="text-lg text-[#3a2a1a]" style={{ fontFamily: "var(--font-display)" }}>+44 020 7078 4060</p>
            </div>
          </div>

        </section>
        </>
      )}

      {!hideFooterSections && !hideFooterKeepSources && (
        <>
          {/* ── GOLD RULE ── */}
          <div className="h-[3px] bg-[#3B2B26]" />

          {/* ── 6. SOURCES & FURTHER READING ── */}
          <section className="bg-[#F5F0E8]">
            <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
              <h2
                className="text-xl mb-6 text-center"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                Sources &amp; Further Reading
              </h2>
              <ul className="space-y-2 text-[13px] text-[#2a1e1a] leading-[1.8]">
                {post.sources.map((src) => (
                  <li key={src.label}>
                    <a
                      href={src.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3B2B26] underline transition-colors"
                    >
                      {src.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ── FOOTER IMAGE (optional) ── */}
          {post.footerImage && (
            <section className="relative w-full overflow-hidden" style={{ aspectRatio: "21/9", minHeight: "300px", maxHeight: "50vh" }}>
              <img
                src={post.footerImage.src}
                alt={post.footerImage.alt}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </section>
          )}

          {/* ── GOLD RULE ── */}
          <div className="h-[3px] bg-[#3B2B26]" />

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
                  className="inline-block px-6 py-2.5 border border-[#3B2B26] text-[#3B2B26] text-[11px] font-medium tracking-[0.2em] no-underline hover:bg-[#3B2B26] hover:text-white transition-colors rounded-full"
                >
                  {prop.name}
                </Link>
              ))}
            </div>
          </section>

          {/* ── 10. FOOTER ── */}
          <Footer pageType="brand"  textColor="#FFFFFF" />
        </>
      )}

      {/* Sources only (no footer/CTA) */}
      {hideFooterKeepSources && (
        <>
          {/* ── GOLD RULE ── */}
          <div className="h-[3px] bg-[#3B2B26]" />

          {/* ── SOURCES & FURTHER READING ── */}
          <section className="bg-[#F5F0E8]">
            <div className="max-w-3xl mx-auto px-8 md:px-16 pt-12 pb-12">
              <h2
                className="text-2xl md:text-[30px] leading-snug mb-6 text-center text-[#3a2a1a]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                Sources &amp; Further Reading
              </h2>
              <ul className="space-y-2 text-[13px] text-[#2a1e1a] leading-[1.8]">
                {post.sources.map((src) => (
                  <li key={src.label}>
                    <a
                      href={src.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3B2B26] underline transition-colors"
                    >
                      {src.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ── GOLD RULE ── */}
          <div className="h-[3px] bg-[#3B2B26]" />

          {/* Custom Footer */}
          <section className="bg-[#f7f5f0] pt-6 pb-16 px-8 md:px-16">
            {/* Begin Your Nayara Journey */}
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl tracking-[0.08em] text-[#3a2a1a]" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>Begin Your Nayara Journey</h3>
            </div>

            {/* Hotel Links */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10">
              {[
                { name: "Nayara Gardens", route: "https://nayaragardens.com" },
                { name: "Nayara Springs", route: "https://nayarasprings.com" },
                { name: "Nayara Tented Camp", route: "https://nayaratentedcamp.com" },
                { name: "Nayara Alto Atacama", route: "https://altoatacama.com" },
                { name: "Nayara Bocas del Toro", route: "https://nayarabocasdeltoro.com" },
                { name: "Nayara Hangaroa", route: "https://hangaroa.cl" },
              ].map((hotel) => (
                <a
                  key={hotel.name}
                  href={hotel.route}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] tracking-[0.15em] uppercase text-[#3a2a1a] underline hover:text-[#3a2a1a]/70 transition-colors"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                >
                  {hotel.name}
                </a>
              ))}
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center gap-6 mb-10">
              <a href="https://www.linkedin.com/company/nayara-resorts" target="_blank" rel="noopener noreferrer" className="text-[#3a2a1a] hover:text-[#3a2a1a]/60 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://www.instagram.com/nayararesorts" target="_blank" rel="noopener noreferrer" className="text-[#3a2a1a] hover:text-[#3a2a1a]/60 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://x.com/NayaraResorts" target="_blank" rel="noopener noreferrer" className="text-[#3a2a1a] hover:text-[#3a2a1a]/60 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.youtube.com/@NayaraResorts" target="_blank" rel="noopener noreferrer" className="text-[#3a2a1a] hover:text-[#3a2a1a]/60 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>

            {/* Phone Numbers */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
              <div className="text-center">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#3a2a1a]/60 mb-1" style={{ fontFamily: "var(--font-body)" }}>RESERVATIONS</p>
                <p className="text-lg text-[#3a2a1a]" style={{ fontFamily: "var(--font-display)" }}>+506 2479-1600</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#3a2a1a]/60 mb-1" style={{ fontFamily: "var(--font-body)" }}>US TOLL FREE</p>
                <p className="text-lg text-[#3a2a1a]" style={{ fontFamily: "var(--font-display)" }}>+1 844 865 2002</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#3a2a1a]/60 mb-1" style={{ fontFamily: "var(--font-body)" }}>UK LOCAL CALL</p>
                <p className="text-lg text-[#3a2a1a]" style={{ fontFamily: "var(--font-display)" }}>+44 020 7078 4060</p>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
