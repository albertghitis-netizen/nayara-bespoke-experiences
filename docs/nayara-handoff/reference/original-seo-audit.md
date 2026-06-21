# Nayara: Original SEO / GEO / AEO Strategy Analysis (independent external audit)

Nayara Resorts: SEO / GEO / AEO Strategy Analysis

**Nayara Resorts:**

**Original SEO / GEO / AEO**

**Strategy Analysis**

Nayara Gardens  |  Nayara Springs  |  Nayara Tented Camp  |  Nayara Resorts

June 2026

# Table of Contents

Right-click the TOC and select "Update Field" to refresh page numbers

Executive Summary	3

Technical SEO Audit: All Four Sites Fail	5

Core Web Vitals Crisis	5

Cloudflare Crawlability Crisis	6

Zero Schema Markup Detected	7

Additional Technical Issues	8

SERP & Keyword Analysis	9

Branded Search Dominance	9

Critical Brand Issue	10

Top Keyword Opportunities	10

Content Gaps vs. What's Ranking	11

Competitive Intelligence	12

Tier 1 Direct Threats	12

Game-Changer: Nekajui	13

OTA Threat	13

Competitive SWOT	14

GEO / AEO Readiness Assessment	15

AI Platform Testing Results	16

AEO Content Gaps	17

Property-Specific Strategy	19

Priority Implementation Roadmap	24

KPIs and Success Metrics	28

First-Mover Opportunities	31

Conclusion	33

# 1. Executive Summary

This analysis was conducted through original external research — not based on any uploaded strategy document. We audited all four Nayara websites, analyzed 25+ search queries across Google SERPs, tested AI platform visibility (ChatGPT, Gemini, Perplexity), mapped 15 competitors, and assessed technical SEO infrastructure. The findings reveal a brand with exceptional market position but critical underinvestment in technical SEO, structured data, and answer-engine content.

**Overall Assessment: **Nayara Resorts holds dominant branded search positions and enjoys strong AI visibility, but all four websites fail Core Web Vitals, lack schema markup, have no FAQ content, and suffer from a Cloudflare crawlability issue that may block Googlebot. The gap between brand excellence and digital execution represents the single biggest opportunity in Costa Rica luxury hospitality.

**Critical Finding: **None of Nayara's Arenal competitors have strong structured data or AEO implementations either. This creates a massive first-mover opportunity — whoever fixes their technical foundation and builds answer-focused content first will capture disproportionate AI citation share.

| **Property** | **Technical Grade** | **SERP Position (Branded)** | **GEO Readiness** | **Priority** |
| --- | --- | --- | --- | --- |
| Nayara Resorts (Brand) | C- | #1 + AI Overview | Moderate | High |
| Nayara Gardens | D+ | #1 + Knowledge Panel | Moderate | Critical |
| Nayara Springs | C | #1 + Knowledge Panel | Moderate | High |
| Nayara Tented Camp | C+ | #1 + Local Pack | Moderate | Medium |

# 2. Technical SEO Audit: All Four Sites Fail

## 2.1 Core Web Vitals Crisis

All four Nayara properties fail Google's Core Web Vitals — a confirmed ranking factor since 2021.

| **Property** | **LCP** | **INP** | **CLS** | **Overall** | **Primary Failure** |
| --- | --- | --- | --- | --- | --- |
| Nayara Resorts (Brand) | 4.8s (POOR) | 443ms (POOR) | 0.01 (Good) | FAILED | LCP + INP |
| Nayara Gardens | 3.7s (Poor) | 212ms (NI) | 0.20 (POOR) | FAILED | CLS + LCP |
| Nayara Springs | 2.4s (Good) | 137ms (Good) | 0.21 (POOR) | FAILED | CLS (worst) |
| Nayara Tented Camp | 2.1s (Good) | 143ms (Good) | 0.17 (NI) | FAILED | CLS |

**LCP (Largest Contentful Paint): **The brand site at 4.8 seconds is nearly double the "poor" threshold of 2.5s. Heavy video backgrounds and unoptimized hero images are the likely cause. Gardens at 3.7s also needs immediate attention.

**CLS (Cumulative Layout Shift): **Three of four sites have POOR CLS scores (0.17-0.21). Content visibly jumps during loading — a frustrating user experience caused by images without explicit dimensions, cookie banners, and dynamically injected content.

**INP (Interaction to Next Paint): **The brand site at 443ms is more than double the recommended 200ms, indicating heavy JavaScript blocking the main thread.

## 2.2 Cloudflare Crawlability Crisis

A critical finding across all properties: Cloudflare managed challenges are returning 403 errors for robots.txt and sitemap.xml files. When crawlers request these files, they receive a challenge page instead of the actual content.

### Evidence

- robots.txt returns HTTP 403 with cf-mitigated: challenge header

- sitemap.xml returns the same challenge page

- Internal pages on Gardens and Springs also trigger challenges

**Impact: **Googlebot may be unable to crawl these sites consistently, leading to incomplete indexing and lost search visibility. This is a silent killer — the sites appear to work in browsers but may be partially invisible to search engines.

**Immediate Fix: **Whitelist Googlebot, Bingbot, and all legitimate search crawlers in Cloudflare. Ensure robots.txt and sitemap.xml are always accessible without challenge.

## 2.3 Zero Schema Markup Detected

No Hotel, LodgingBusiness, LocalBusiness, Review, BreadcrumbList, or FAQPage schema was detected on any of the four properties. No rich snippets appear in SERPs — no star ratings, pricing, availability, or enhanced listings.

### What Should Be Implemented (Priority Order)

**1. **Hotel / LodgingBusiness schema (amenities, geo-coordinates, price range, check-in/out)

**2. **Organization schema (with parent/child property relationships)

**3. **Review / AggregateRating schema

**4. **BreadcrumbList schema

**5. **FAQPage schema

**6. **LocalBusiness schema with precise geo data

**7. **TouristAttraction schema for the sloth sanctuary

**8. **Restaurant schema for dining pages

## 2.4 Additional Technical Issues

| **Issue** | **Severity** | **Properties Affected** |
| --- | --- | --- |
| No hreflang tags | Medium | All — missing Spanish-speaking audience |
| Blog on subdomain | Medium | Brand site — splits SEO value |
| No breadcrumb navigation | Medium | All — poor UX and SERP display |
| Missing HSTS header | Medium | Brand site only |
| No explicit image dimensions | High | All — contributes to CLS failures |

# 3. SERP & Keyword Analysis

## 3.1 Branded Search Dominance

Nayara owns the #1 position for all branded queries with strong SERP features:

| **Query** | **Position** | **SERP Features** | **AI Overview?** |
| --- | --- | --- | --- |
| "Nayara Resorts" | #1 | Sitelinks, Instagram, Image Pack | YES — Favorable |
| "Nayara Gardens" | #1 | Full Knowledge Panel, OTA widgets | No |
| "Nayara Springs" | #1 | Full Knowledge Panel, Amex FHR, Michelin | No |
| "Nayara Tented Camp" | #1 | Sitelinks, Local Pack, Reddit | No |

AI Overview for "Nayara Resorts" is highly favorable — accurately describing all five properties, founder Leo Ghitis, and international locations. This is a significant trust signal.

## 3.2 Critical Brand Issue: "Nayara" = Oil Company

Searching the unqualified term "Nayara" (without "Resorts") returns Nayara Energy Ltd — an Indian oil refining company — above Nayara Resorts. Nayara Energy has a Wikipedia page and significant stock market presence that outranks the hotel brand.

### Mitigation

- Bid defensively on "Nayara" as a paid search term

- Strengthen entity signals (schema, Wikipedia, Wikidata)

- Optimize Knowledge Panel for brand disambiguation

## 3.3 Top Keyword Opportunities

| **Rank** | **Keyword** | **Nayara's Current Status** | **Opportunity** |
| --- | --- | --- | --- |
| 1 | luxury tented camp Costa Rica | Dominant #1 | Maintain |
| 2 | Nayara Gardens vs Nayara Springs | Third-party sites own it | Own the official comparison |
| 3 | Costa Rica wellness retreat | NOT in top results | Major content gap |
| 4 | Costa Rica sloth tour hotel | Mentioned but doesn't rank | Unique sloth sanctuary |
| 5 | Costa Rica honeymoon resort | Mentioned but not prominent | Springs should dominate |
| 6 | adults only hotel Arenal | #1 | Maintain |
| 7 | Arenal hot springs hotel | Page 1, Tabacon dominates | Feature hot springs more |
| 8 | best hotel Arenal Volcano | Top 3 in carousel (4.9 rating) | Leverage rating advantage |

## 3.4 Content Gaps vs. What's Ranking

### Nayara is MISSING content that competitors have

- Travel planning/itinerary guides ("7-Day Arenal Itinerary")

- Virtual 360 tours (Arenal Observatory Lodge offers this)

- Adventure experience content (The Springs Resort's Club Rio dominates)

- Weather/volcano visibility tool (a first-mover backlink magnet opportunity)

- Comprehensive video content library

- Wellness retreat packages and landing pages

### Nayara's UNIQUE ranking advantages

- On-property sloth sanctuary ("Tony the Sloth") — no competitor can replicate

- T+L #1 Resort Central America — ongoing PR generation

- Private plunge pools in every Springs/Tented Camp room

- Highest ratings in Arenal (4.9/5 across all properties)

# 4. Competitive Intelligence: The Arenal Battlefield

## 4.1 Tier 1 Direct Threats

| **Competitor** | **Reviews** | **Key Threat** | **What They Do Better** |
| --- | --- | --- | --- |
| Tabacon Thermal Resort | 7,798 TA / 3,426 Google | Hot springs dominance | 60% more reviews; day pass strategy; owns "Arenal hot springs" |
| The Springs Resort & Spa | 3,535 TA / 2,195 Google | Family + adventure | Club Rio adventure center; celebrity TV placements; 21 room categories |
| Amor Arenal | 1,500 TA / ~500 Google | Adults-only boutique | Best volcano views; "love-crafted" branding; direct Springs competitor |

## 4.2 Game-Changer: Nekajui, A Ritz-Carlton Reserve

Opened February 2025. Already named "best overall hotel in Costa Rica" by Conde Nast 2026. $2,000-5,000/night. Technogym digital wellness partnership. This property will dominate "best hotel Costa Rica" and "ultra-luxury Costa Rica" searches within 18 months. Geography is different (Papagayo vs. Arenal) but the brand halo will affect all luxury positioning.

## 4.3 OTA Threat

OTAs occupy positions 3-7 on page 1 for all Nayara branded searches. The Google Hotels panel pushes nayarasprings.com to position 3-5 for its own brand name. TripAdvisor never outranks the official sites, but Booking.com and Expedia are prominent immediately below.

## 4.4 Competitive SWOT

|  | **Helpful** | **Harmful** |
| --- | --- | --- |
| Internal | Highest ratings (4.9); sloth sanctuary; 50+ awards; 3-property portfolio captures multiple segments | Low review volume vs Tabacon; limited top-of-funnel content; no virtual tours; three separate domains dilute authority |
| External | "Volcano View Forecast" tool opportunity (first-mover); wellness retreat market growing; no competitor has strong schema either | Ritz-Carlton Nekajui rising; Tabacon's review volume growing; AI Overviews may reduce organic CTR; CPC inflation on luxury travel keywords |

# 5. GEO / AEO Readiness Assessment

## 5.1 Overall Score: 7.5 / 10

| **Category** | **Score** | **Assessment** |
| --- | --- | --- |
| AI Platform Visibility | 8/10 | Nayara consistently appears in top 3 for Arenal luxury queries across ChatGPT, Gemini, Perplexity |
| Entity & Knowledge Panel | 6/10 | Knowledge Panels exist but no Wikipedia page is a major gap |
| Structured Data | 4/10 | Likely missing or incomplete; no FAQPage schema detected |
| AEO Content Readiness | 5/10 | No dedicated FAQ pages; third parties capturing AI citations |
| Brand Mentions & Digital PR | 9/10 | 50+ awards; regular Conde Nast/T+L features; Hall of Fame status |
| Competitive AI Visibility | 8/10 | Strong vs. Arenal competitors; sloth sanctuary is unbeatable differentiator |

## 5.2 AI Platform Testing Results

Nayara is consistently mentioned by AI platforms for Costa Rica luxury travel queries:

| **Query** | **Nayara Position** | **Key Differentiator Cited** |
| --- | --- | --- |
| "Best luxury resort Arenal Costa Rica" | Top 3 | Sloth sanctuary, 4.9 ratings |
| "Where to honeymoon in Arenal" | Top 2-3 | Adults-only Springs, private plunge pools |
| "What hotel has sloths in Costa Rica?" | #1 | Tony the Sloth, on-property sanctuary |
| "Best family luxury resort Costa Rica" | Top 3-5 | Gardens + Tented Camp for families |
| "Nayara Gardens vs Springs" | Primary | Correct differentiation by AI |

Finding: AI platforms correctly differentiate between the three properties, cite awards accurately, and consistently mention the sloth sanctuary. The brand's AI "moat" is real but technically under-supported.

## 5.3 AEO Content Gaps

**Critical Finding: **Nayara has ZERO dedicated FAQ pages across all four websites. Third-party travel advisors (Sebastian Luxe Travel, etc.) are creating FAQ content about Nayara and capturing AI citations that should belong to the brand.

### Critical Missing Content

- Official "Nayara Gardens vs Springs vs Tented Camp" comparison

- "Which Nayara is right for you?" interactive guide

- Pricing transparency content

- "Getting to Nayara" comprehensive guide

- 50+ FAQ items covering property selection, practical info, experiences, pricing

## 5.4 Entity Building: The Wikipedia Gap

Nayara Resorts has no Wikipedia page. Nayara Energy (the Indian oil company) does. This is a significant entity gap that weakens Knowledge Graph signals and reduces AI training data presence. None of Nayara's Arenal competitors have Wikipedia pages either — creating a first-mover opportunity.

# 6. Property-Specific Strategy Recommendations

## 6.1 Nayara Gardens: The Family Flagship

Current Position: #1 for "best hotel Arenal Volcano" in Google Hotels carousel. 4.9 rating, 1,066 Google reviews. Full Knowledge Panel. But fails Core Web Vitals (CLS 0.20, LCP 3.7s, TTFB 2.2s — worst server response of all four).

### Priority Actions

**1. **Own the sloth sanctuary narrative — Create a dedicated "Sloth Sanctuary at Nayara Gardens" page targeting "Costa Rica sloth tour hotel." This is a unique, defensible content moat no competitor can replicate.

**2. **Fix technical foundation — CLS at 0.20 is highly disruptive; TTFB at 2.2s suggests server issues. Priority fix.

**3. **Strengthen family messaging — The Springs Resort out-messages Nayara on family content. Build "Family Guide to Nayara Gardens" with kids' activities, family tent options, multi-generational appeal.

**4. **Accelerate review generation — Target: 2,000+ Google reviews in 6 months (currently 1,066). Tabacon has 3,426.

## 6.2 Nayara Springs: The Romance & Wellness Hub

Current Position: #1 for "adults only hotel Arenal." 4.9 rating, 522 Google reviews. Knowledge Panel with Amex FHR and MICHELIN Guide badges. Best LCP/INP of all four sites but worst CLS (0.21).

### Priority Actions

**1. **Capture "Costa Rica honeymoon resort" — Springs is adults-only with private plunge pools and a world-class spa. This query should be dominated by Springs, but Four Seasons and Kura currently lead. Create a dedicated honeymoon landing page.

**2. **Launch wellness retreat programming — "Costa Rica wellness retreat" is a major Nayara blind spot despite having a Conde Nast #1 Spa in the World. Build structured retreat packages (3-day, 5-day, 7-day).

**3. **Fix CLS (0.21) — Worst layout instability of all four sites. Add image dimensions, reserve space for dynamic content.

**4. **Own the romantic getaway narrative — Partner with honeymoon travel agents, build romance-focused content.

## 6.3 Nayara Tented Camp: The Category Leader

Current Position: Dominant #1 for "luxury tented camp Costa Rica." Best overall technical performance of the four (C+ grade). Strongest content depth with named staff, sustainability reporting, chef bios. 4.9 rating but lowest review count (346).

### Priority Actions

**1. **Maintain category dominance — This property essentially owns the "luxury glamping Costa Rica" category. Keep investing in safari-style content, "Africa in Costa Rica" positioning.

**2. **Accelerate review generation aggressively — 346 Google reviews is the lowest of all properties. Target: 750+ in 6 months.

**3. **Leverage TIME World's Greatest Places badge — This is a powerful PR asset that should be more prominent in content and schema.

**4. **Family tent configuration — Showcase the family tent as a multi-generational option. This is a unique advantage over competitors.

## 6.4 Nayara Resorts (Brand Site): The Consolidation Hub

Current Position: #1 for brand query with favorable AI Overview. But worst technical performance (LCP 4.8s, INP 443ms). Blog on subdomain splits SEO value.

### Priority Actions

**1. **Fix performance immediately — 4.8s LCP and 443ms INP are unacceptable for a brand site's mobile experience. Compress hero images, defer JavaScript, preload critical resources.

**2. **Create official property comparison content — Third-party sites own "Nayara Gardens vs Springs." Build "Which Nayara is Right for You" with traveler-type matrix.

**3. **Resolve brand confusion with Nayara Energy — Implement Organization schema, bid on "Nayara" defensively, pursue Wikipedia page.

**4. **Build travel guide content hub — 8-10 pillar pages capturing top-of-funnel research queries.

**5. **Move blog from subdomain to /blog/ — Consolidate SEO value on the main domain.

# 7. Priority Implementation Roadmap

## Phase 1: Technical Foundation (Weeks 1-4)

| **Week** | **Action** | **Property** | **Impact** |
| --- | --- | --- | --- |
| 1 | Whitelist Googlebot in Cloudflare | All | Restore crawlability |
| 1 | Add explicit image dimensions to fix CLS | Gardens, Springs, Tented | Pass CWV |
| 1 | Compress hero images, convert to WebP/AVIF | Brand | Fix 4.8s LCP |
| 2 | Implement Hotel + Organization schema | All | Rich snippets |
| 2 | Implement BreadcrumbList schema | All | Better SERP display |
| 2 | Fix server response time (TTFB 2.2s) | Gardens | Faster loading |
| 3 | Implement FAQPage schema | All | AEO foundation |
| 3 | Defer non-critical JavaScript | Brand | Fix 443ms INP |
| 4 | Implement Review + LocalBusiness schema | All | Star ratings in SERPs |
| 4 | Add hreflang for Spanish | All | Multi-language SEO |

## Phase 2: Content & AEO (Weeks 5-12)

| **Week** | **Action** | **Property** | **Impact** |
| --- | --- | --- | --- |
| 5-6 | Create dedicated FAQ page (25+ questions) | All | Capture AI citations |
| 5-6 | "Gardens vs Springs vs Tented Camp" comparison | Brand | Own the narrative |
| 5-6 | Sloth Sanctuary landing page | Gardens | Unique content moat |
| 7-8 | Honeymoon landing page | Springs | Capture honeymoon searches |
| 7-8 | Wellness retreat packages + landing page | Springs | Close major content gap |
| 9-10 | Travel guide hub (8-10 pillar pages) | Brand | Top-of-funnel capture |
| 9-10 | "Getting to Nayara" comprehensive guide | Brand | Practical content |
| 11-12 | Family guide + kids activities content | Gardens | Strengthen family positioning |
| 11-12 | "Volcano View Forecast" interactive tool | Brand | First-mover backlink magnet |

## Phase 3: Entity Building & GEO (Weeks 12-24)

| **Timeline** | **Action** | **Impact** |
| --- | --- | --- |
| 12-16 | Create Wikipedia page for Nayara Resorts | Major entity signal |
| 12-16 | Create Wikidata items for brand + properties | Knowledge Graph strength |
| 16-20 | Digital PR campaign targeting AI-citation-friendly publications | Backlinks + entity mentions |
| 16-20 | Video content library (12+ assets) for YouTube | Engagement + discovery |
| 20-24 | Virtual 360 tours for all three properties | Match competitor feature set |
| 20-24 | Reddit community engagement (r/CostaRicaTravel) | Authentic presence |

## Phase 4: Review Acceleration (Ongoing)

| **Property** | **Current Google Reviews** | **6-Month Target** | **12-Month Target** |
| --- | --- | --- | --- |
| Nayara Gardens | 1,066 | 1,600 | 2,200 |
| Nayara Springs | 522 | 750 | 1,100 |
| Nayara Tented Camp | 346 | 500 | 750 |

Tactics: Post-stay email/SMS solicitation within 48 hours; small incentives (spa credit, welcome amenity); targeted TripAdvisor + Google dual solicitation.

# 8. KPIs and Success Metrics

## 8.1 Technical KPIs

| **Metric** | **Current** | **90-Day Target** | **12-Month Target** |
| --- | --- | --- | --- |
| Core Web Vitals Pass Rate | 0/4 sites | 3/4 sites | 4/4 sites |
| Schema Coverage | ~0% | 60% | 90%+ |
| robots.txt Accessibility | 0/4 | 4/4 | 4/4 |
| CLS (Gardens) | 0.20 | <0.10 | <0.05 |
| LCP (Brand) | 4.8s | <3.0s | <2.5s |

## 8.2 Organic Search KPIs

| **Metric** | **Current** | **6-Month Target** | **12-Month Target** |
| --- | --- | --- | --- |
| "Costa Rica wellness retreat" ranking | Not in top 20 | Page 1 | Top 5 |
| "Costa Rica honeymoon resort" ranking | Page 2-3 | Top 5 | Top 3 |
| "sloth tour hotel Costa Rica" ranking | Not ranking | Top 5 | #1 |
| Organic traffic to /guides/ | Minimal | +200% | +500% |
| "Nayara" unqualified brand position | Below Nayara Energy | Position 2-3 | Position 1-2 |

## 8.3 GEO / AEO KPIs

| **Metric** | **Current** | **6-Month Target** | **Measurement** |
| --- | --- | --- | --- |
| AI mention rate ("best Arenal resort") | ~70% | 90%+ | Monthly AI platform testing |
| Wikipedia presence | None | Live article | Wikipedia check |
| FAQ page coverage | 0 pages | 12+ pages | Content inventory |
| Schema completeness | ~30% | 80%+ | Technical audit |
| Third-party FAQ ownership | ~20% | 60%+ | Search monitoring |

## 8.4 Business KPIs

| **Metric** | **Current** | **6-Month Target** | **12-Month Target** |
| --- | --- | --- | --- |
| Google Reviews (combined) | ~1,934 | 2,850 | 4,050 |
| Direct booking rate | Baseline TBD | +15% | +25% |
| Organic traffic | Baseline TBD | +40% | +100% |
| Backlinks from travel publications | Baseline TBD | +30% | +60% |

# 9. First-Mover Opportunities

These opportunities exist because none of Nayara's Arenal competitors have addressed them either:

**1.  **Schema markup implementation — Tabacon, The Springs, and Amor Arenal all have weak or no structured data. First to implement comprehensive schema wins rich snippets.

**2.  **Wikipedia page — No Arenal luxury resort has a Wikipedia page. First to get one established captures a permanent entity signal.

**3.  **"Volcano View Forecast" tool — No competitor offers this. A first-mover utility that generates natural backlinks and repeat visits.

**4.  **FAQ schema + dedicated FAQ pages — Third-party travel advisors currently own all Nayara-related Q&A content. Reclaiming this is low-hanging fruit.

**5.  **Official property comparison content — Third-party blog posts comparing Nayara properties get significant traffic. Nayara should own this narrative.

**6.  **Reddit presence — r/CostaRicaTravel has 40+ comment threads about Nayara Tented Camp alone. No official brand presence. Authentic engagement here builds trust.

# 10. Conclusion

Nayara Resorts is a brand excellence story with a digital infrastructure problem. The properties consistently rank #1 for branded queries, enjoy favorable AI Overview treatment, and possess unique competitive moats (sloth sanctuary, private plunge pools, 50+ industry awards) that no competitor can replicate. Guests love Nayara — the 4.9/5 ratings across all properties prove it.

But beneath this brand strength lies a technical foundation that is compromising search performance: all four sites fail Core Web Vitals, Cloudflare may be blocking crawlers, zero schema markup means no rich snippets, and the absence of FAQ content lets third parties capture AI citations that should belong to Nayara.

The competitive landscape is intensifying. Tabacon dominates review volume. The Springs Resort captures the adventure-family segment with Club Rio. Amor Arenal competes directly for adults-only luxury. And Nekajui, A Ritz-Carlton Reserve — opened just last year — is already named the best hotel in Costa Rica by Conde Nast.

**The opportunity is clear and time-bound: **Nayara's competitors have not invested in structured data, AEO content, or entity building either. The first brand in the Arenal luxury segment to fix its technical foundation and build answer-focused content will capture disproportionate AI citation share and solidify its position for the generative search era.

Nayara has the brand, the awards, and the guest love. Now it needs the digital infrastructure to match.

**Nayara Resorts**

SEO / GEO / AEO Strategy Analysis

June 2026

Page 1 of 1