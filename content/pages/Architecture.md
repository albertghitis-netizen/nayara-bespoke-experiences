# Architecture

Source: `client/src/pages/Architecture.tsx`  
Extracted strings: 90

---

Internal Document — Confidential

Nayara Digital Architecture

A comprehensive overview of the website's structure, content strategy, SEO/GEO/AEO positioning, and opportunities for growth.

Multi-Property Hub Model

The site operates as a centralized brand hub connecting 6 distinct properties across 4 countries. Each property has its own visual identity (color palette, imagery) while sharing a unified typographic system and interaction patterns. This architecture enables cross-property discovery while maintaining individual brand equity.

117 pages organized in a clear hierarchy: Brand pages (Home, Journal, Awards, Gallery) → Property pages (Gardens, Springs, Tented Camp, Bocas, Alto Atacama, Hangaroa) → Subpages (Rooms, Gastronomy, Experiences, Wellness, Sustainability) → Detail pages (individual restaurants, room types, experiences).

Costa Rica (3 Hotels)

Gardens · Springs · Tented Camp

~60 pages combined

Chile & Easter Island

Alto Atacama · Hangaroa

~30 pages combined

Bocas del Toro

37 blog articles + 6 long-form video episodes create a content mesh that connects properties thematically. Articles are tagged by property and surface in hotel-specific filtered views. Cross-linking between property pages, experiences, and journal entries creates a dense internal link network that strengthens topical authority.

SEO · GEO · AEO Strategy

Three layers of search optimization working together: traditional search engines (SEO), generative AI engines like ChatGPT and Perplexity (GEO), and answer engines like Google AI Overviews (AEO).

SEO — Search Engine Optimization

• JSON-LD schema (Hotel, Resort, LocalBusiness, Article, Organization, Breadcrumb)

• Sitemap.xml with 60+ indexed URLs

• robots.txt properly configured

• 53,000 words of original, keyword-rich content

• Internal linking mesh across 117 pages

• Semantic HTML structure with proper heading hierarchy

• Image alt tags and video descriptions

GEO — Generative Engine Optimization

• Conversational, natural-language content style

• Broad topical coverage (wellness, gastronomy, sustainability, adventure)

• Award citations and third-party validation

• FAQ page with structured Q&A pairs

• Blog articles targeting long-tail queries

• Video content with descriptive metadata

• E-E-A-T signals (certifications, Green Globe, Relais & Châteaux)

AEO — Answer Engine Optimization

• Direct-answer content structure ("What is...", "Where to...")

• Property comparison data (rooms, amenities, locations)

• Structured data enabling rich results

• Factual, verifiable claims with specifics

• Location-based content (4 countries, 6 properties)

• Experience-focused narratives matching travel queries

• Awards and recognition as authority signals

Experience, Expertise, Authoritativeness, and Trustworthiness — Google's quality framework that AI engines also rely on for source credibility.

Gaps & Opportunities

Based on current best practices for luxury hospitality AI visibility (2025–2026), the following areas represent the highest-impact opportunities for improvement.

Traditional Build Estimate

What this website would have cost and how long it would have taken to build using a traditional luxury hospitality agency.

Luxury hospitality specialist agencies typically quote $350K–$500K+ for comparable scope.

Nayara Resorts — Internal Architecture Document — 2025

Lines of Code

Words of Copy

248 real videos from properties (no AI-generated media)

829 authentic photographs

First-person narratives from staff and guests

Detailed descriptions of on-site experiences

Specialized content: sustainability, gastronomy, wellness

Relais & Châteaux membership (culinary expertise)

Green Globe certification (environmental expertise)

Property-specific knowledge across 4 countries

Multiple international awards cited with schema

Third-party certifications (Green Globe, Relais & Châteaux)

Cross-referenced content across properties

37 editorial articles demonstrating thought leadership

Real media only — no AI-generated imagery or video

Verifiable property information and locations

Consistent brand identity across all touchpoints

Transparent sustainability claims with specifics

AI crawlers (ChatGPT, Perplexity, Gemini) look for llms.txt to understand site structure. Quick win — can be implemented in hours.

Server-Side Rendering / Pre-rendering

As a Single Page Application (SPA), meta tags and content may not be fully crawlable by all bots. Pre-rendering or SSR would ensure all 117 pages are properly indexed.

Google Business Profile Optimization

Each of the 6 properties needs an optimized GBP with photos, posts, Q&A, and active review management. AI models heavily rely on local listings.

Product Schema for Room Types

Individual room types (Springs Villa, Overwater Villa, etc.) should have Product schema with pricing signals for rich results.

FAQ Schema on Subpages

Adding 3–5 FAQs per property/experience page would boost featured snippet eligibility and AEO performance.

Video Schema (VideoObject)

248 videos without VideoObject schema. Adding this would enable video rich results and improve GEO visibility.

No AggregateRating or Review schema. Guest testimonials exist but aren

Multi-language Content (Spanish)

Properties span 4 Latin American countries. Spanish content with hreflang tags would significantly boost GEO in regional markets.

External Backlink Strategy

Strong internal linking but limited external link building. Need PR/media outreach, travel blogger partnerships, award citation links.

Open Graph / Social Meta Tags

Limited OG tags for social sharing. Each page should have unique og:title, og:description, og:image for optimal social distribution.

E-E-A-T requires demonstrable expertise. An

Meet the Founders

Core Web Vitals Audit

Heavy video-first design may impact LCP. Performance audit needed for mobile Core Web Vitals compliance.

Creative Director / Brand Strategy

Lead Frontend Developer

Junior Frontend Developer
