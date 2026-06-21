# Integrated Data Analysis — Nayara (June 2026)

_Date: 2026-06-21. Sources, all cross-checked: live GA4 + Google Ads (Windsor.ai), the SynXis-validated
KPI workbook (KPIs Nayara-Mayo2026.xlsx), GA4 report exports (May 2026 PDFs), Semrush, and the existing
Drive strategy docs. Where sources disagree, the disagreement is stated, not smoothed over._

---

## 1. Measurement truth (this reframes everything)

Three separate things were tangled together as "Gardens doesn't convert." They are different problems:

**a) Per-property GA4 tracking WORKS.** Clean 90-day totals (no breakdown dimension):

| Property | Sessions | Key events | GA4 revenue | ~Monthly |
|---|---|---|---|---|
| Gardens (357647205) | 83,695 | 279 | $910,916 | ~$304K |
| Springs (360867414) | 73,691 | 357 | $1,400,344 | ~$467K |
| Tented (357704789) | 102,692 | 569 | $3,444,469 | ~$1.15M |

Gardens May GA4 ($181,972 / 53 key events / 24,638 sessions) matches its report PDF exactly, so the
property data is trustworthy. The SynXis KPI sheet confirms the ranking: May pickup Tented $1.15M >
Springs $479K > Gardens $315K. Gardens books the least of the three, but it is **measured** and it is
material (~$3.6M/yr GA4-tracked).

**b) Google Ads conversion-VALUE tags are broken for Springs and Gardens (live, 90 days):**

| Ads account | Spend | Conversions | Conversion **value** | Ads ROAS |
|---|---|---|---|---|
| Tented | $18,903 | 356 | $1,793,195 | ~95x (works) |
| Springs | $19,947 | 102 | **$0** | unmeasurable |
| Gardens | $21,158 | 222 | **$130** | unmeasurable |

GA4 sees Springs/Gardens revenue; **Google Ads does not receive the conversion value**, so Smart Bidding
and in-platform ROAS are flying blind on ~$41K/quarter of spend. This is the real, fixable tag problem.

**c) The corporate site is the actual blind spot.** nayararesorts.com (364402180) drew **153,839
sessions in 90 days** (Paid Social 40,290; Paid Search 27,075; Organic Social 27,196; Organic Search
17,665) but recorded only **4 key events / $9,847** — because the corporate domain has no booking flow.
Bookings happen on the property domains, so all that brand/social/paid demand on the corporate site
cannot be tied to revenue. That cross-domain gap, not Gardens, is where money goes dark.

**Caveat:** "Referral" carries 61% of Gardens' GA4 revenue ($556,687/90d), but the May PDF shows that is
mostly INTERNAL handoffs (nayaragardens.com/referral, nayararesorts.com/referral, synxis). So
last-click attribution parks booking revenue on internal referrers and understates the true acquisition
channels (Paid Search $133,720, Organic Search $53,402, Direct $72,954). Treat channel-level revenue as
directional until cross-domain attribution is clean (the June SynXis fix only partly addresses this).

---

## 2. The AI Assistant / LLM channel is real, growing, and under-converting

- GA4 has a dedicated **AI Assistant** channel. Gardens: 494 sessions, 3 key events, **$15,350** (90d).
- On the corporate site, **chatgpt.com is the 3rd-largest source** (~431 of ~5K users in May, ~8%),
  behind only google/organic and direct.
- Gardens May: chatgpt.com (`ai-assistant` + `(not set)`) ≈ 445 users, high engagement (77-81%), but
  **0 May bookings**.

Confirms the brief: Gardens leads the AI channel, engagement is strong, conversion is the gap. The
GEO/AEO work pays off here first. Small now, but it is the fastest-growing referrer and converts at a
high revenue-per-session when it does.

---

## 3. Gardens deep dive (the strategy focus)

**Audience (GA4 May, Gardens):** Female **60.8%** / Male 39.2%; age peak 25-34 then 35-44; **US 71.6% of
users and 88.4% of revenue**, UK small in users but **6.6% of revenue** ($11,958), Costa Rica 12.9% of
users but tiny revenue. US + UK ≈ 95% of revenue. Skew is families/women, not couples.

**Channel mix (May, by revenue):** Paid Search 28.6%, Organic Search 18.4%, Direct 10.5%, internal
referrals ~43% (booking-engine handoffs). Meta Ads + Sojern: high traffic, **$0 tracked revenue**.

**Funnel:** home (25,515 views) -> Stay -> check-availability (6,586) -> checkout (853) -> /confirm (25
views, 23 key events, $73,089). Heavy drop from availability to confirmation. AOV $3,184 (KPI sheet),
matches the ~$3,165 in the brief.

**Positioning gap (confirmed):** the audience is family/female, the Masterfile maps Gardens to family
keywords (best family resorts CR 1.6K, family vacations 1.3K, la fortuna hotels 5.4K), yet the **live
page title is still "Luxury Hotel in La Fortuna," not family**, and Springs (not Gardens) owns the
adults-only terms. The couples mis-positioning is visible in the live metadata.

**Organic decline:** KPI sheet shows Gardens organic traffic share falling from high-20s/30s% (2023) to
12-17% (2025-26); Semrush shows est. organic traffic down ~37% Dec 2025 -> May 2026. Directionally
consistent; exact YoY not computable from these files (PDFs are single-month).

---

## 4. Reconciliation with the existing strategy docs

**Strong agreement across docs + data:** Gardens = family flagship; schema + entity unification; the
landing-page set (Best Luxury Resorts, Gardens family, Which Nayara, all-inclusive answer); build for AI
citation; "Journal" for editorial; fix measurement first. The **Editorial Migration & Content Roadmap
(June 2026)** is the most on-strategy doc and should be the spine (subfolder migration, page-level 301s,
six-article priority led by Gardens family + Best Luxury Resorts).

**Conflicts to resolve before building:**
1. **Domain architecture.** The agency Content Map + two strategy docs assume a single consolidated
   corporate site (with a stale "January 2026 launch") and are building Gardens family pages on the
   corporate domain. Standing architecture keeps Gardens-brand on nayaragardens.com until tags are
   fixed. Redirect the agency build: non-brand pages to corporate, Gardens-brand to nayaragardens.com.
2. **Entity reconnection is still unwritten.** No doc contains the `alternateName` ("Arenal Nayara" /
   "Nayara Resort Spa & Gardens"), aggregateRating 4.9/1,065, or the historical 2015 T+L #1 / 2016 CNT
   #2 awards. Still needs creating.
3. **FAQ content lives in 3 conflicting places** with claims that violate verify-before-publish (Gardens
   "sleeps up to 3" vs "sleeps four"; "all villas have plunge pools" vs "Gardens has no thermal
   springs"). Consolidate into one verified master before FAQPage schema ships.
4. **Journal-rule violations** in agency docs ("Read our Blog," "Blog Writing System Prompt"). Fix.

**Awards source of record (verified 2025):** CNT Readers' Choice Central America - Bocas #1, Springs #3,
Gardens #8, Tented #15; T+L World's Best - Tented #2, Springs #10; MICHELIN Keys - Springs 3, Bocas 2,
Alto Atacama 2. Lead Gardens with its #8 family/resort placement; keep MICHELIN + romance to Springs.

---

## 5. Revised recommendations (priority order)

1. **Fix the Google Ads conversion-value tags for Springs and Gardens.** ~$41K/quarter is being bid
   blind. Highest ROI, lowest effort. GA4 already has the revenue to reconcile against.
2. **Close the corporate cross-domain attribution gap.** 153K sessions/90d on nayararesorts.com convert
   to ~$0 on-site; tie corporate/social/paid demand to property bookings (cross-domain measurement),
   or that entire top-of-funnel stays unprovable.
3. **Reposition Gardens as family in the live metadata now** (title/H1/schema), not just in future
   pages. The page still says "Luxury Hotel"; the audience is already family/female. Cheapest
   high-leverage fix.
4. **Adopt the Editorial Migration Roadmap as the spine**; connect blog.nayararesorts.com to Search
   Console first (its own gate).
5. **Write the entity-reconnection asset** (alternateName, aggregateRating, historical awards on the
   Gardens homepage schema + Wikidata alias).
6. **Convert the AI Assistant channel:** ensure Gardens pages answer the AI-cited questions and carry a
   clear "Check availability" path; it is the fastest-growing referrer.
7. **Reconcile the domain-architecture conflict** before any Gardens-brand page ships on corporate.
8. **Consolidate the three FAQ sets** into one verified master; fix the occupancy and plunge-pool
   contradictions; strip affiliate links and placeholders.

## Open items / data caveats
- GA4 report PDFs are single-month (May 2026); use Semrush + KPI sheet for trend.
- May 2026 PPC sale counts are asterisked ("new engine/tracking") - treat as transitional.
- Channel-level GA4 revenue is distorted by internal-referral attribution; clean cross-domain before
  making channel-budget decisions.
- The "Empire" Claude Project could not be accessed (claude.ai Projects are not reachable from Claude
  Code); upload its files to fold in.
