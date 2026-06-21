# SEO Analysis: nayararesorts.com

_Date: 2026-06-20_
_Sources: Semrush (US database, live API) + Google Search Console (last 90 days, via Windsor.ai)_

---

## 1. Domain snapshot (Semrush, US)

| Metric | Value |
|---|---|
| Authority Score | **33 / 100** |
| Organic keywords | 1,121 |
| Est. monthly organic traffic | ~10,900 |
| Backlinks / referring domains | 1,353 / 663 |
| Paid presence | None |

**⚠️ Traffic is sliding.** Estimated organic traffic peaked at **13,254 (Dec 2025)** and fell to
**8,367 (May 2026)**, roughly a **‑37% drop in 5 months**, with rank worsening from ~140k to ~205k.
This is the single most important finding.

### Traffic trend (Semrush est. organic traffic, monthly)

| Month | Est. organic traffic | Rank |
|---|---|---|
| 2025-03 | 5,021 | 324,250 |
| 2025-06 | 10,948 | 162,155 |
| 2025-12 | 13,254 | 140,854 |
| 2026-01 | 13,131 | 140,587 |
| 2026-02 | 12,643 | 143,300 |
| 2026-03 | 12,504 | 146,576 |
| 2026-04 | 11,217 | 162,551 |
| 2026-05 | 8,367 | 205,166 |

---

## 2. Core structural problem: brand fragmentation

Semrush's "top organic competitors" for nayararesorts.com are **the brand's own sister sites**:

| Domain | Competitor relevance | Their organic traffic |
|---|---|---|
| nayaragardens.com | 0.47 | 11,668 |
| nayarasprings.com | 0.45 | 8,516 |
| nayaratentedcamp.com | 0.39 | 3,511 |
| nayarabocasdeltoro.com | 0.24 | 2,909 |

Five separate domains (nayararesorts.com + 4 property sites) split brand authority, backlinks, and
rankings instead of consolidating. GSC confirms cannibalization, e.g. "nayara springs" returns
*both* nayararesorts.com (pos 7.4) and nayarasprings.com (pos 2.3) for the same query.

**Recommendation:** strategic decision needed, consolidate under one domain/subfolders, or formalize a
hub-and-spoke architecture with disciplined cross-linking + canonical/hreflang hygiene. This is the
biggest long-term lever.

---

## 3. Keyword reality: ~95% branded

Almost all traffic is people already searching "nayara." Top GSC queries (90 days):

| Query | Clicks | Impr | Pos |
|---|---|---|---|
| nayara | 1,376 | 21,294 | 4.5 |
| nayara resorts | 1,179 | 2,317 | 1.6 |
| nayara costa rica | 819 | 4,647 | 2.4 |
| nayara hotels | 328 | 684 | 2.7 |
| nayara resort costa rica | 299 | 1,691 | 1.5 |

### Non-brand opportunities (high impressions, weak position = upside)

| Query | Impr | Pos | Opportunity |
|---|---|---|---|
| costa rica resorts | 7,770 | 8.9 | Page-1 push |
| resorts in costa rica | 1,853 | 9.5 | Page-1 push |
| overwater bungalows (+variants) | ~1,500 | 30, 44 | Big content gap |
| bocas del toro resorts / luxury | ~1,000 | 8, 11 | Bocas property |
| costa rica honeymoon / overwater bungalows costa rica | ~900 | 3, 10 | Quick wins |

**Quick win:** the page `/the-29-most-incredible-overwater-bungalows-in-the-world/` already earns
**17,313 impressions but sits at position ~32**, one optimization target with obvious ROI.

**Proof content works:** blog post `/the-top-10-travel-trends-of-2026` ranks **#5 for "travel trends
2026"** (14,800 vol) and is the #2 page overall by organic traffic, editorial content can win
non-brand traffic.

### Top pages by organic traffic (Semrush)

| URL | Keywords | Traffic share |
|---|---|---|
| https://nayararesorts.com/ | 225 | 85.7% |
| https://blog.nayararesorts.com/the-top-10-travel-trends-of-2026 | 44 | 8.2% |
| https://nayararesorts.com/nayara-bocas-del-toro-named-1-resort-by-conde-nast-traveler/ | 30 | 2.6% |
| https://nayararesorts.com/our-resorts/ | 113 | 1.0% |
| https://nayararesorts.com/wellness/ | 22 | 0.7% |

---

## 4. Backlinks

- **663 referring domains, Authority Score 33.** Genuinely strong editorial links: National Geographic,
 Travel + Leisure, Robb Report, Veranda, AFAR, El País, House & Garden, Pinterest.
- **⚠️ Anchor-text red flag:** the #1 anchor is **"backlinks for nayararesorts.com"** (349 domains,
 460 links), a classic footprint of spammy/auto-generated SEO-tool links. Worth auditing and likely
 disavowing; it can drag trust.

---

## 5. Recommendations (priority order)

1. **Diagnose the traffic decline**, the ‑37% since December is urgent. Likely tied to brand
 fragmentation / cannibalization or a crawl/indexing change. (Run a Semrush site audit, requires a
 configured project for the domain.)
2. **Resolve domain architecture**, consolidate vs. clean hub-and-spoke with canonicals. Biggest
 long-term lever.
3. **Optimize the overwater bungalows page** (pos ~32 → page 1) and build genuine non-brand category
 pages: "Costa Rica luxury resorts, " "overwater bungalows Costa Rica, " "Bocas del Toro luxury resort."
4. **Scale the blog**, it's the only proven non-brand traffic engine so far.
5. **Clean the backlink profile**, investigate/disavow the "backlinks for…" anchor cluster.

---

## 6. Open threads / not yet done

- **Technical site audit** (broken links, crawl errors, site health) requires a Semrush *project* set up
 for the domain, not yet available.
- **Keyword-gap vs. real competitors** (e.g. Four Seasons Costa Rica, category leaders), not yet pulled.
- **Month-by-month keyword loss analysis** to pinpoint the cause of the traffic drop, not yet pulled.

---

## Tooling notes

- **Distribb skill** installed at `.agents/skills/distribb/` (SEO content/keyword/backlink-exchange
 platform). Requires `DISTRIBB_API_KEY` env var + `distribb.io` allowed in the environment network
 egress settings. As of this writing both are still pending.
- Built-in SEO data available this session: **Semrush** (keyword/organic/backlink/overview research) and
 **Google Search Console** + **GA4** via Windsor.ai.
