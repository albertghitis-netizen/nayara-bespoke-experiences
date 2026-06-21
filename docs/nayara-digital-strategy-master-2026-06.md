# Nayara Digital Strategy — Master Report (June 2026)

_Prepared 2026-06-21. Scope: organic SEO, paid search, AEO/GEO, E-E-A-T, social, the Journal, YouTube,
local/Maps, competitors, keyword gaps, and landing pages — for the three active Costa Rica properties
(Nayara Gardens, Nayara Springs, Nayara Tented Camp) and the Nayara brand/corporate, with the
pre-opening properties (Bocas del Toro, Alto Atacama, Hangaroa) treated as a seeding layer._

_Data sources, all live and cross-checked: GA4, Google Ads, Instagram, Google Business Profile (via
Windsor.ai); Google Search Console; Semrush; the SynXis-validated KPI workbook; and the existing Drive
strategy docs. Markets in scope: US (primary) and Europe (UK especially). Per Alex's standard, tests are
labeled as tests and proven moves as proven; uncertainty is stated, not hidden._

---

## 0. Executive summary

Nayara's digital problem is not demand. It is **measurement, positioning, and channel concentration.**

1. **Measurement is broken in two specific, fixable places.** Google Ads conversion-value tags report
   $0 (Springs) and $130 (Gardens) over 90 days while GA4 shows those properties earning $1.4M and
   $0.9M — so paid bidding runs blind. And the corporate site draws 153,839 sessions/90d but tracks
   only 4 conversions because bookings happen on property domains (a cross-domain gap).
2. **Paid is ~85% brand defense.** The overwhelming majority of Google Ads spend buys back the Nayara
   name, not new demand. Non-brand and PMax campaigns are barely funded, and the one well-tracked
   non-brand campaign (Tented Destination) returns ~45x.
3. **Gardens is mis-positioned and monetizes worst per session.** Its audience is already family/female
   (60.8% female, ages 25-44), yet the live page is titled "Luxury Hotel" and the engines narrate it as
   romance. Its organic traffic converts far below its siblings.
4. **Organic is genuinely valuable for Springs and Tented** ($343K and $867K GA4 revenue in 90d from
   organic search) and under-realized for Gardens ($53K). Organic is not a vanity channel here.
5. **Local/Maps is a fast, underused lever.** "Restaurants" is the #1 non-brand Maps search for Gardens
   and Springs, but no menus, no Maps bookings, are enabled.
6. **The AI Assistant channel is real and converting** ($15,350 Gardens / 90d) and is the fastest-growing
   referrer. GEO/AEO pays off here first.

The throughline: fix measurement, reallocate paid from brand defense toward tracked non-brand, reposition
Gardens as family across live assets, and harvest the local + AI channels that are already producing.

---

## 1. Measurement & attribution (fix before optimizing)

**a) GA4 per-property revenue is tracked and trustworthy** (90 days, clean totals):

| Property | Sessions | Key events | GA4 revenue | SynXis May pickup (validation) | AOV |
|---|---|---|---|---|---|
| Tented | 102,692 | 569 | $3,444,469 | $1,147,902 | $5,978 |
| Springs | 73,691 | 357 | $1,400,344 | $478,982 | $4,129 |
| Gardens | 83,695 | 279 | $910,916 | $315,276 | $3,184 |
| Corporate (nayararesorts.com) | 153,839 | 4 | $9,847 | n/a (no booking flow) | n/a |

**b) Google Ads conversion-VALUE tags are broken for Springs and Gardens** (90 days):

| Account | Spend | Conversions | Conversion value | In-platform ROAS |
|---|---|---|---|---|
| Tented | $18,903 | 356 | $1,793,195 | ~95x (works) |
| Springs | $19,947 | 102 | **$0** | unmeasurable |
| Gardens | $21,158 | 222 | **$130** | unmeasurable |

GA4 sees the revenue; Google Ads does not receive it, so Smart Bidding optimizes Springs/Gardens blind on
~$41K/quarter. **Fix #1.**

**c) The corporate cross-domain gap.** nayararesorts.com pulls 153,839 sessions/90d (Paid Social 40,290;
Paid Search 27,075; Organic Social 27,196; Organic Search 17,665) but records ~$0 because it has no
booking flow. That brand/social/paid demand cannot be tied to property bookings. **Fix #2.**

**d) Gardens' channel attribution is the most distorted.** 61% of Gardens GA4 revenue ($556,687/90d)
lands in "Referral," which the May report shows is mostly INTERNAL booking-engine handoffs
(nayaragardens.com/referral, synxis). Springs/Tented park only 12-21% in referral. So Gardens'
true acquisition channels are the most obscured — treat Gardens channel-level revenue as directional
until cross-domain attribution is clean. (The June SynXis fix only partly addressed this.)

---

## 2. Channel revenue by property (GA4, 90 days)

| Channel | Gardens rev | Springs rev | Tented rev |
|---|---|---|---|
| Paid Search | $133,720 | $379,279 | $970,250 |
| Organic Search | $53,402 | $342,576 | $867,140 |
| Referral (incl. internal handoff) | $556,687 | $161,889 | $714,153 |
| Direct | $72,954 | $221,178 | $440,002 |
| Cross-network | $18,254 | $198,823 | $338,940 |
| Organic Social | $2,489 | $19,871 | $32,115 |
| AI Assistant | $15,350 | $5,748 | $140 |

**Reads:**
- **Organic search is a real revenue engine for Springs ($343K) and Tented ($867K)** but tiny for
  Gardens ($53K) despite Gardens having comparable sessions. Gardens organic underconverts — a
  positioning/funnel problem, not a traffic problem.
- **Gardens' AI Assistant revenue ($15,350) already exceeds its Organic Social ($2,489)** and rivals
  meaningful channels. GEO is not theoretical for Gardens.
- Paid Search scales with property revenue (Tented > Springs > Gardens), but Gardens' paid is the least
  efficient and its value tag is broken, so it is being optimized blind.

---

## 3. Paid search strategy

**The core finding: paid is brand defense, not demand generation.** Campaign-level (90d):

| Campaign | Spend | Conv value | Note |
|---|---|---|---|
| Tented Brand Search | $6,787 | $920,054 | works; ~135x |
| Gardens Brand Search | $10,920 | $55 | tag broken |
| Springs Brand Search | $10,694 | $0 | tag broken |
| Tented Destination Search (non-brand, US&CA) | $370 | $16,809 | **~45x — proof non-brand works when tracked** |
| Gardens PMax No-Brand (Family/Wellness/Arenal) | $109 | $1 | starved + tag broken |
| Gardens PMax Romance | $308 | $2 | off-strategy (Gardens is family) |
| Springs PMax General | $639 | $0 | tag broken |

Brand impression share: **Tented 83.9%, Gardens 75.5%, Springs 60.4%** (Springs leaving ~40% on the
table, tag-starved and losing to rank).

**Recommendations (paid):**
1. **Fix Springs + Gardens conversion-value tags first.** Nothing else in paid is trustworthy until then.
2. **Run the brand-defense incrementality test** the brief calls for: a geo holdout on brand search for
   one property to measure how much brand spend is incremental vs. demand you would capture organically
   anyway. Brand auctions are contested, so this is a test, not a cut.
3. **Fund tracked non-brand.** Tented's non-brand Destination campaign returns ~45x on $370 — scale it
   and replicate for Gardens (family/Arenal) and Springs (honeymoon/adults-only) once tags are fixed.
4. **Kill or repurpose Gardens PMax "Romance"** — it contradicts the family repositioning.
5. **Raise Springs brand impression share** once its tag is fixed (currently 60%, losing bookings worth
   an estimated $15-25K/mo per the brief).

---

## 4. Organic SEO strategy

**Brand context (Semrush):** nayararesorts.com Authority Score 33, ~1,121 organic keywords, est. organic
traffic ~10,900 and **declining ~37% since Dec 2025**. The brand fragments across five domains
(corporate + four property sites) that compete on the Nayara name.

**Demand map (US volumes, Semrush):** head terms are owned by editorial/OTA listicles, so the owned-page
play is the winnable mid/long tail + listicle inclusion + AI citation. Full matrix in
`docs/costa-rica-keyword-strategy.md`. Headlines:

- **Corporate / luxury head terms:** costa rica resorts 22,200, resorts in costa rica 12,100, costa rica
  luxury resorts 4,400 — listicle + AI play, plus an owned "Best Luxury Resorts in Costa Rica" page as
  AI answer + ad lander.
- **Gardens / family:** costa rica family resorts 1,600, best family resorts 1,300, resorts for families
  720 — winnable, on-strategy.
- **Geo (all three):** la fortuna hotels 2,900, arenal resorts 1,000 — "hotels in la fortuna costa rica"
  has competition just 0.20, the single most winnable mid-volume term.
- **Springs / romance:** costa rica honeymoon 1,900, costa rica resorts adults only 8,100 (listicle).
- **Tented / glamping:** costa rica jungle resort 720, glamping costa rica 260+140.
- **All-inclusive:** costa rica all inclusive 49,500 — intent mismatch (Nayara is breakfast-only in CR);
  honest "what's included" answer page, not a ranking play.

**UK/Europe (Semrush):** US is primary, but the UK over-indexes on Nayara revenue (GA4) and uses
different vocabulary: **costa rica holidays 12,100 (UK)**, costa rica family holidays 590, costa rica
honeymoon 390. Capture with British phrasing. Germany/France have no meaningful English-language demand —
out of scope unless local-language content is commissioned.

**Per-property organic priorities:**
- **Gardens:** reposition for family terms; fix the underconverting organic. The live page title is still
  "Luxury Hotel in La Fortuna" — change to family-led title/H1/schema now.
- **Springs:** maintain; organic already earns $343K/90d. Defend honeymoon/adults-only/hot-springs.
- **Tented:** maintain; organic earns $867K/90d. Defend glamping + non-brand luxury (it already gets
  discovered for "luxury resorts costa rica" on Maps).
- **Corporate:** build the non-brand category/comparison/all-inclusive pages; fix the ~37% decline
  (diagnose cannibalization + the cross-domain/architecture issues).

---

## 5. Local / Google Business Profile (Maps) strategy

GBP is a fast, underused lever. 90-day performance:

| Property | Maps+Search impressions | Website clicks | Direction req. | Reviews | Rating |
|---|---|---|---|---|---|
| Gardens | 67,898 | 5,129 | 3,213 | 1,070 | 4.9 |
| Bocas del Toro | 64,694 | 4,288 | 664 | 157 | 4.9 |
| Springs | 59,143 | 5,549 | 2,653 | 523 | 4.9 |
| Tented | 47,277 | 6,467 | 3,189 | 368 | 4.9 |
| Alto Atacama | 28,566 | 2,212 | 1,296 | 374 | 4.6 |

**Two quick wins, visible in the data:**
1. **"Restaurants" is the #1 non-brand Maps search** for Gardens (3,543) and Springs (2,822), yet
   **food-menu clicks = 0** — no menus are attached to the profiles. Add menus to GBP. This is the
   dining-demand capture the brief flagged, confirmed exactly.
2. **Maps bookings = 0** across every property — the "Book"/reservation link is not enabled on GBP. Enable
   it (to "Check availability," per the standing CTA rule).

**Non-brand Maps discovery is already happening:** Tented surfaces for "luxury resorts costa rica" (188),
"resorts in costa rica" (187); Springs for "costa rica resorts adults only" (389), "hot springs" (241),
"costa rica honeymoon resorts" (106); Gardens for "la fortuna costa rica resorts" (352), "arenal resorts"
(167), "costa rica resorts" (241). Competitor-adjacency also works: people searching "Tabacón" and "The
Springs Resort" land on Nayara Gardens. Keep GBP categories/attributes optimized to hold these.

**Atacama** rating (4.6) lags the portfolio's 4.9 — review-quality attention needed pre-relaunch.

---

## 6. Social media strategy (Instagram)

| Account | Followers | Posts | 90d reach | Audience |
|---|---|---|---|---|
| nayararesorts | 71,197 | 2,392 | 42,113 | 65% female; US 37% / Costa Rica 33% / LatAm heavy |
| nayarasprings | 20,079 | 425 | 30,865 | 72% female; US 40% / Costa Rica 40% |
| nayaragardens | 17,282 | 835 | 35,947 | 75% female; US 51% / Costa Rica 23% |
| Nayara Tented Camp | not connected to Windsor | — | — | (gap — connect it) |

**Reads:**
- **The audience is heavily Costa Rica / Latin America**, especially corporate (33% CR) and Springs (40%
  CR). A large share of the following is not the US/European high-value booker. Follower counts are
  modest for luxury hospitality, and engagement is low (corporate ~42K reach on 71K followers; Springs
  interactions often 10-60/post).
- **Female skew (65-75%)** aligns with family (Gardens) and romance (Springs) positioning.
- **Gardens IG is the most US-weighted (51%)** and engages relatively well on a small base — the best
  property account to lean into for the US family audience.

**Recommendations (social):**
1. **Connect Nayara Tented Camp's Instagram to the measurement stack** (currently dark).
2. **Skew paid/organic social targeting toward US + UK** high-value bookers rather than broad LatAm reach,
   given the booking audience is US/UK.
3. **Lean into the differentiators that travel on social:** sloths (Gardens, family), hot-springs villas
   (Springs, romance), glamping + Arenal views (Tented).
4. **Tie social to bookings via the cross-domain fix** — corporate Paid Social alone is 40,290
   sessions/90d with $0 attributed; that spend is currently unprovable.

---

## 7. Pre-opening properties (seeding layer)

GBP shows real, generic, non-brand discovery already underway — seed organic/AEO before launch:
- **Bocas del Toro (Panama):** "panama resorts" 2,506, "hotels in panama" 1,221, "resorts in panama"
  1,214, "best resorts in panama" 572, "overwater bungalows panama" 188+256, "bocas del toro all
  inclusive" 437. Strongest pre-opening demand; little luxury-branded competition. Build the Bocas page +
  overwater-bungalows angle now.
- **Alto Atacama (Chile):** "atacama desert hotels" 445, "san pedro de atacama hotels" (high CPC $5.02),
  "hotel mas caro de chile" 244; heavy Brazilian (Portuguese) search interest. Rating 4.6 needs lifting.
- **Hangaroa (Easter Island):** thin demand ("easter island hotel" 210, "rapa nui accommodation" 110) —
  combine on one page.

---

## 8. Landing-page plan (consolidated)

Per the agreed plan + the data, in build order. Every page: real photos, FAQ + Hotel/LodgingBusiness
schema, "Check availability" CTA, verified claims, clean migration-ready URL.

1. **Gardens Family page** (nayaragardens.com) — the lead fix. Targets costa rica family resorts (1,600)
   cluster; de-risking content; sloths-for-families. Reposition title/H1/schema away from "Luxury Hotel."
2. **Best Luxury Resorts in Costa Rica** (nayararesorts.com) — costa rica resorts (22,200) / luxury
   resorts (4,400); AI answer + ad lander; positions Gardens as the family pick.
3. **Arenal / La Fortuna umbrella** (nayararesorts.com) — la fortuna hotels (2,900) + arenal resorts
   (1,000); "hotels in la fortuna costa rica" comp 0.20 is the most winnable term; positions all three.
4. **Which Nayara Is Right For You** (nayararesorts.com) — comparison; prime AI-citation; Gardens=family,
   Springs=adults romance, Tented=adventure/seclusion.
5. **All-Inclusive answer** — honest "what's included" (CR = breakfast; Bocas/Atacama/Hangaroa = genuinely
   all-inclusive). Test.
6. **Next wave:** Gardens dining page (captures the 3,543 "restaurants" Maps demand), sloth experience,
   Bocas overwater-bungalows pre-opening.

**Domain-architecture flag (must resolve first):** the agency Content Map is building Gardens-brand family
pages on the corporate domain, contradicting the decided architecture (Gardens-brand stays on
nayaragardens.com until tags are fixed). Reconcile before shipping.

---

## 9. AEO / GEO / E-E-A-T

_(Expanded with the AI-visibility research agent — see Section 9b appended below.)_

**Foundations (from data + brief):** Gardens leads the AI Assistant channel (chatgpt.com is the corporate
site's 3rd-largest source, ~8%; Gardens AI revenue $15,350/90d). Schema (Hotel/LodgingBusiness +
FAQPage + aggregateRating 4.9/1,070) is absent and is the first build. The awards source of record is the
verified 2025 set: CNT Central America — Bocas #1, Springs #3, Gardens #8, Tented #15; T+L — Tented #2,
Springs #10; MICHELIN Keys — Springs 3. Lead Gardens with its #8 family/resort placement; keep MICHELIN
+ romance to Springs. E-E-A-T: real photography only, named author/expertise on the Journal, verifiable
awards, neutral attributed claims (some awards are conflated with Springs in the wild — verify each).

---

## 10. Competitors

Two distinct competitive sets, requiring opposite strategies.

### 10a. Arenal / independent direct competitors (Semrush, US)

| Domain | Authority Score | Organic keywords | Est. organic traffic/mo | Referring domains |
|---|---|---|---|---|
| **tabacon.com** (Arenal) | 45 | 3,006 | 74,071 | 2,693 |
| **thespringscostarica.com** (Arenal) | 35 | 4,772 | 34,654 | 1,629 |
| **nayaragardens.com** | 35 | 414 | 11,738 | 933 |
| arenasdelmar.com (Manuel Antonio) | 36 | 1,534 | 10,778 | 745 |
| **nayarasprings.com** | 34 | 760 | 8,616 | 991 |
| tulemarresort.com (Manuel Antonio) | 32 | 1,079 | 6,994 | 643 |
| **nayaratentedcamp.com** | 36 | 299 | 3,505 | 1,064 |
| haciendaaltagracia.com | 2 | none indexed | none | 106 |

**The two real Arenal rivals own the non-brand clusters Nayara is absent from:**
- **Tabacón owns "hot springs / thermal"** (almost all position 1-3): costa rica hot springs (1,900), hot
  springs in costa rica (880), arenal hot springs (1,600), la fortuna hot springs (1,600), costa rica hot
  springs resort (480, pos 1), costa rica spa resort (320, pos 1), arenal volcano resort (480). Strongest
  profile in the set (AS 45, 2,693 ref domains). ~8K combined hot-springs volume.
- **The Springs owns the generic "Arenal resort/hotel" head terms** (mostly pos 1-2): arenal costa rica
  resort (880, pos 1), hotels in arenal costa rica (880, pos 2), arenal resorts (590, pos 2), arenal
  hotel costa rica (320, pos 1), costa rica volcano resort (260, pos 1), **arenal all inclusive (70, pos
  1)**. Only AS 35 / 1,629 ref domains — beatable with better content + links.
- **Hacienda AltaGracia is organically invisible** (AS 2, no indexed organic) — not a near-term threat
  despite being a named tier-2 competitor.

**Keyword gap (rival ranks top-10; Gardens absent):** the entire Arenal/hot-springs/resort cluster above,
plus Gardens buried at pos 35 for "restaurants in arenal costa rica" (110, the dining-page opening) and
pos 29 for "arenal observatory lodge spa" (720). Gardens' only non-brand footprint is the
"rainforest/jungle" cluster (costa rica rainforest resort pos 5).

**The white space:** neither Tabacón (adults-leaning thermal) nor The Springs owns a **family** cluster,
and no incumbent owns Arenal **dining**. Family-Arenal and dining are open, highest-fit beachheads for
Gardens — supporting the family-page-first + dining-section build order.

### 10b. Peninsula Papagayo ultra-luxury chains (Pacific beach)

Brand pull (US monthly search): four seasons costa rica **18,100**; andaz costa rica **12,100** (+ andaz
papagayo 5,400); waldorf astoria costa rica **5,400**; ritz carlton costa rica 3,600 (Nekajui's halo);
peninsula papagayo 2,900; nekajui **1,000** (new, still building name recognition but flooding YouTube/AI).
For reference, Nayara's brands: nayara springs 8,100, nayara tented camp 8,100, nayara gardens 5,400 —
**collectively larger than any single Papagayo brand.**

- These chains each win their own brand SERP at #1 and own the **beach/Pacific/Guanacaste axis**: Four
  Seasons vacuums "papagayo costa rica" (4,400), "papagayo" (6,600), "resort hotel costa rica" (6,600);
  Andaz has a deep brand footprint; Nekajui already captures the Ritz halo months after opening.
- On the generic luxury head terms ("best luxury resorts in costa rica," etc.) **no chain and no Nayara
  property ranks its own page** — those SERPs are listicle/OTA/editorial-owned (Forbes, CNT, Tripadvisor,
  Virtuoso, Vogue, Reddit, YouTube). It is a listicle + AI-citation battlefield, not a direct-page one.

**The moat:** the Papagayo cluster cannot answer rainforest, volcano, hot springs, sloths, or family. The
Arenal/rainforest/family cluster (arenal resorts, costa rica rainforest resort, costa rica family resort,
costa rica with kids, hotel with sloths) totals ~2,700+ of uncontested, destination-locked, high-intent
demand they physically cannot serve.

### 10c. Five competitive takeaways
1. **Don't fight the head terms head-on.** "costa rica resorts/luxury resorts" SERPs are listicle-owned;
   win via inclusion + AI citation, not by out-ranking Four Seasons' or The Springs' own pages.
2. **Attack The Springs' "Arenal resort/hotel" head terms** (AS 35, beatable) with the corporate Best
   Luxury Resorts page + a Gardens Arenal page. This is the most winnable contested cluster.
3. **Don't fight Tabacón on "hot springs"** (AS 45 moat). Differentiate Gardens on rainforest + sloths +
   family near the volcano, which Tabacón does not contest.
4. **Own family + dining in Arenal — open white space.** No rival holds these; Gardens already partly
   ranks. Cheapest, highest-fit wins.
5. **Vs Papagayo, lead with contrast, not parity.** Frame the Best Luxury Resorts and Which Nayara pages
   as rainforest-and-volcano-and-family vs beach-and-Pacific, making Nayara the cited counter-example in
   AI answers that otherwise default to Four Seasons/Nekajui. Match Nekajui's AI/video velocity on the
   sloth/family differentiators rather than chasing its keywords.

---

## 11. YouTube & video

**No single resort brand owns Costa Rica luxury on YouTube** — independent creators and review channels
do: Mytanfeet, Travel Costa Rica NOW, Frog TV, Salt Travel Co (broad terms), plus a property-tour wave
currently sweeping the Peninsula Papagayo openings (**Nekajui Ritz-Carlton Reserve**, Waldorf Astoria,
Four Seasons) in "ultra-luxury 4K tour" format. Nekajui is flooding YouTube and AI corpora as the shiny
new opening — the Tier-2 threat the brief named, now visible.

**Nayara's position:** an official channel exists with scattered creator coverage of all three
properties, but it skews **older and Springs-weighted**, with no recent flagship tour wave, and **Gardens
is nearly absent as a family destination.** (Subscriber count / cadence unverified.)

**Instagram competitive benchmark** (approximate, inferred from search snippets — directionally reliable,
not exact):

| Account | Followers (approx) |
|---|---|
| Four Seasons Papagayo | ~135K |
| The Springs Resort & Spa | ~94K |
| Tulemar | ~87K |
| **Nayara Resorts (corporate)** | **~71K** |
| Andaz Papagayo | ~67K |
| Nayara Alto Atacama | ~59K |
| Nekajui (new, fast-growing) | ~42K |
| Arenas del Mar | ~35K |
| **Nayara Springs** | **~20K** |
| **Nayara Gardens** | **~17K** |

Nayara corporate sits mid-pack (behind Four Seasons, The Springs, Tulemar); the property handles are
weak, mirroring the organic problem — Gardens (~17K) is the smallest and mis-narrated as romance.

**Per-property video/social opportunity:**
- **Gardens = sloths + family (highest priority).** The sloth is the single most viral-friendly asset in
  CR travel, and Nayara is already the AI answer for "hotel with sloths." Critical: social copy in the
  wild credits the **sloth sanctuary to Springs, not Gardens** — the same entity muddle in the brief, now
  visible in social. Reclaim the sloth narrative for Gardens, packaged for families.
- **Springs = romance** (best-covered already; maintain).
- **Tented = volcano-view glamping** (1,700 sq ft clifftop tents) — tailor-made for the luxury-glamping
  video genre, but no breakout signature clip yet.

**Recommendations (YouTube/video):**
1. **Own the sloth on video, attributed to Gardens** — a repeatable Reels/TikTok/Shorts series + a
   YouTube anchor, geotagged to Gardens; corrects the Springs attribution drift and feeds the family page
   and AEO sloth work. Real footage only.
2. **Commission 2-3 current-gen property tours** for Gardens and Tented with the creators who own CR
   search (Mytanfeet, Frog TV, Travel Costa Rica NOW, plus a family-travel channel for Gardens); tracked
   links; treat as a test. Nayara is a generation behind Nekajui/Waldorf here.
3. **Reframe the Gardens IG handle around family + sloths**, not generic luxury.
4. **Build a Tented "volcano-view glamping" signature clip.**
5. **Recruit family-travel micro-influencers for Gardens** (an underserved niche vs. competitors' beach/
   honeymoon coverage).
6. **Set a verified social/YouTube baseline** before scaling (the figures above are estimates), connected
   to GA4 so the work is provable.

---

## 12. The Journal (editorial)

Editorial is the slow-burn authority/link layer supporting the commercial pages, not the lead. Adopt the
June **Editorial Migration & Content Roadmap** as the spine: move blog.nayararesorts.com to
nayararesorts.com/journal as a subfolder, page-level 301s (never blanket), connect the subdomain to
Search Console first. Six-article priority led by Gardens family + Best Luxury Resorts. Keep the standing
rules: it is the "Journal," real photography, no em dashes, named expertise for E-E-A-T. Note: the
blog-system-prompt and agency modules still say "Blog" — fix to "Journal."

---

## 13. Prioritized roadmap

**Now (measurement + free wins):**
1. Fix Springs + Gardens Google Ads conversion-value tags.
2. Close corporate cross-domain attribution (tie corporate/social demand to property bookings).
3. Add restaurant menus + enable "Check availability" booking on all GBP profiles.
4. Reposition Gardens live metadata (title/H1/schema) from "Luxury Hotel" to family.
5. Connect Tented Instagram + Gardens Search Console to the stack.

**Next (build + reallocate):**
6. Gardens Family page + Best Luxury Resorts page (resolve domain architecture first).
7. Add Hotel/FAQ/aggregateRating schema + write the entity-reconnection asset (alternateName, 4.9/1,070,
   historical awards + Wikidata alias).
8. Fund tracked non-brand paid (replicate Tented's 45x Destination model); run the brand geo-holdout test.
9. Arenal/La Fortuna umbrella page; all-inclusive answer page.

**Then (compound):**
10. Journal subfolder migration; listicle-inclusion + GEO outreach (Mr & Mrs Smith gap, CNT/T+L refresh).
11. Pre-opening seeding (Bocas overwater bungalows; Atacama).

---

## 14. Data appendix

- GA4 90d totals and channel splits: Section 1-2.
- Google Ads 90d account + campaign: Section 3.
- GBP 90d performance, reviews, top non-brand search terms: Section 5 + raw in this session.
- Instagram followers/reach/audience: Section 6.
- Keyword universe: `docs/costa-rica-keyword-strategy.md`.
- Listicle/GEO targets: `docs/listicle-outreach-targets.md`.
- Reconciled measurement detail: `docs/integrated-data-analysis-2026-06.md`.
- SEO baseline: `docs/seo-analysis-2026-06.md`.

_Caveats: GA4 channel revenue is distorted by internal-referral attribution (worst on Gardens); GBP
search-keyword values are unique-user monthly sums; May PPC counts are flagged transitional ("new
engine/tracking"); Semrush competition is a paid-bid proxy, not organic difficulty. Verify every award
and amenity claim before publishing, per the standing rules._
