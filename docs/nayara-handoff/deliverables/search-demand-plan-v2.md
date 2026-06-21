# Nayara Resorts: Search & Demand Plan, v2
**Prepared June 12, 2026 · Research and planning only · No account changes have been made**

Data sources: Google Ads (Nayara CR - Tented), GA4 (Tented, Springs, Gardens), Google Search Console (nayararesorts.com), Google Business Profile (Tented, Gardens). All figures last 90 days unless noted (GBP keywords: last 3 months).

**What changed from v1:** category ownership revised per portfolio direction (Gardens owns family, Springs owns romance/adults-only/wellness end-state); Tented family-glamping placed behind a performance gate; interim Tented romance test dropped; Hot Springs added as a Tented category; Gardens elevated to first priority with its own program; landing page and testing framework added; two material discoveries documented (hidden paid accounts for Springs/Gardens; Gardens funnel and tracking failures).

---

## 1. New findings since v1

1. **Springs and Gardens already run paid search in accounts outside current visibility.** GA4 shows Springs: 16,950 paid search sessions, 97 bookings, $408K. Gardens: 13,969 paid search sessions, 28 bookings, $87K. The access priority is therefore to get the existing Ads accounts shared into the MCC and Windsor for audit, not to create new accounts.
2. **Gardens is quantifiably the property that needs the most help, and it is not a demand problem:**

| Property | Sessions | Bookings | Revenue | $/session | AOV | Organic CR | Paid CR | Referral share of bookings | AI Assistant sessions |
|---|---|---|---|---|---|---|---|---|---|
| Tented | 108,456 | 612 | $3.56M | $32.8 | $5,814 | 0.70% | 0.66% | 21% | 31 |
| Springs | 76,829 | 374 | $1.48M | $19.3 | $3,967 | 0.50% | 0.57% | 10% | 220 |
| Gardens | 88,956 | 299 | $0.95M | $10.6 | $3,165 | 0.08% | 0.20% | 70% | 310 |

Gardens earns roughly a third of Tented per visitor on comparable traffic. Its organic conversion is 9x below Tented, its paid conversion 3x below, and 70% of its bookings depend on a single referral channel.
3. **Gardens' begin_checkout tracking is broken:** 5 checkouts recorded against 28 paid transactions and 3 against 13 organic. Funnel instrumentation must be fixed before any optimization or testing on Gardens.
4. **Gardens cross-network spend (run from the unseen account) produced 8,435 sessions and 3 bookings.** Audit target.
5. **"Paid Other" traffic across all three properties (~9,100 sessions, 1 checkout, 0 bookings)** is an unidentified paid channel. Audit target.
6. **GA4's AI Assistant channel is live and Gardens leads it** (310 sessions vs Springs 220, Tented 31). AEO performance is now directly measurable.
7. **Springs' AOV ($3,967) is below Tented's ($5,814).** Earlier sizing that used Tented economics as proxy is restated below with property-true numbers.

---

## 2. Category ownership, v2 (per portfolio direction)

Rule of one: every non-brand query theme has one property owner. A second property may enter only with a disambiguated sub-segment. Mechanical basis: Google shows at most one ad per domain per auction, so multi-property bidding adds internal CPC pressure, not coverage. Strategic basis: landers must match product truth.

| Category | End-state owner | Interim (Tented-only access) | Notes |
|---|---|---|---|
| Glamping / tented camp | **Tented** | Tented | Permanent. Page 1 organic, converts in paid |
| Hot springs | **Tented** | Tented | New in v2. Triangulated: ~124x on the one Ads keyword that ran, ~100 GBP discoveries at Tented (plus 200+ at Gardens incl. "termales"), heavy competitor cross-shop vs Tabacon / The Springs / Baldi. Run as a dedicated ad group in the Glamping & Arenal rebuild |
| Wellness | **Springs** | Tented custodian | Springs is the truest product fit (adults-only, mineral plunge pools in every villa) and Maps shows wellness is destination-level demand (surfaces at Tented and Gardens both). Tented's Wellness PMax keeps running at 101x but copy and lander reframe to hot springs and nature immersion, keeping the handoff clean. On Springs access: "wellness retreat" keywords and budget migrate; Tented retains Hot Springs |
| Romance / adults-only / honeymoon | **Springs** | None | v1's interim Tented romance test is dropped; it conflicts with Springs' position |
| Family (broad) | **Gardens** | Tented gate (below) | Gardens owns "family resort costa rica" demand outright when its engine is accessible |
| Family glamping (narrow) | **Tented, conditional** | 90-day gate | Family PMax runs at $20/day tilted to family glamping and family tents. Keep only if the narrowed slice holds GA4 ROAS at or above an agreed threshold (suggested: 50x). Otherwise consolidate 100% at Gardens. Current 127x earns the trial; portfolio logic decides |
| Generic luxury / best-of head terms | **Portfolio layer** | Comparison page | One campaign to a compare-our-resorts chooser; also catches 400+ impressions of vs-queries. Disproportionately helps Gardens |

---

## 3. Gardens-first program

Sequence is deliberate: fix, audit, recapture, then grow.

1. **Fix instrumentation.** Repair begin_checkout on Gardens' booking path. Nothing downstream is measurable until this is done.
2. **Audit the existing paid accounts** once shared: Gardens paid CR of 0.20%, the 8,435-session cross-network spend with 3 bookings, and the cross-property "Paid Other" channel.
3. **Diagnose the conversion gap.** Organic CR of 0.08% on 15,850 sessions points at booking-path friction, rate parity vs OTAs, or page quality. Hypothesis testing before spend increases.
4. **Brand recapture.** Gardens has the largest brand-name demand of the three (29,158 impressions, 0.13% CTR, position 6.9). Organic on-page now (titles, schema, internal links for "nayara gardens," legacy "arenal nayara hotel & gardens," "nayara gardens hotel and spa"); paid brand campaign after audit. Resized with Gardens' own AOV: **~$155K/quarter** directional recapture potential.
5. **Maps-validated demand fronts (from Gardens' own GBP discovery data):**
   - **Dining funnel:** "restaurants" is Gardens' largest non-brand discovery term (3,500+ unique users, ~3,840 with variants). Restaurant pages with reservation CTAs and resort cross-sell convert diners into prospects.
   - **All-inclusive answer:** ~780 discoveries from the "all inclusive la fortuna" cluster, plus the GSC "is nayara X all inclusive" questions. Build a direct answer page (what's included, dining experiences, why it beats the wristband) to capture and convert the confusion.
   - **Competitor comparison content:** ~1,440 discoveries via Tabacon and The Springs searches. Honest comparison pages for the two hot-springs rivals.
   - **La Fortuna geo terms:** ~600 discoveries across "la fortuna costa rica resorts" variants. Gardens is the area-search property.
   - **Profile clarity:** 73 "adults only" discoveries reached the family property. Tighten the GBP description; route adults-only demand to Springs.
6. **AEO ownership:** Gardens already leads the AI Assistant channel (310 sessions). "Family-friendly luxury costa rica" from the AI-evaluation list is Gardens' category page to win.

---

## 4. Tented research summary (carried from v1)

### 4.1 Campaign performance, last 90 days

| Campaign | Spend | Ads ROAS | GA4 revenue | GA4 ROAS | GA4 avg booking | $/day |
|---|---|---|---|---|---|---|
| Brand Search US | $8,722 | 130x | $777,617 | 89x | $5,676 | $97 |
| Destination Search US & CA | $2,537 | 58x | $87,447 | 34x | $5,144 | $28 |
| ReMarketing PMax | $2,458 | 80x | $115,630 | 47x | $5,256 | $27 |
| Wellness PMax | $1,337 | 107x | $134,498 | 101x | $7,472 | $15 |
| Luxury PMax | $1,351 | 32x | $38,228 | 28x | $7,646 | $15 |
| Family PMax | $533 | 110x | $67,474 | 127x | $5,623 | $6 |
| Brand Search Canada | $1,308 | 74x | $63,155 | 48x | $4,858 | $15 |
| Brand Search Europe | $1,132 | 45x | $61,429 | 54x | $4,725 | $13 |
| Brand Display US | $566 | 0x | $0 | 0x | n/a | $6 |
| Brand Search Latam | $412 | 3x | $0 | 0x | n/a | $5 |

Key facts: Family is hard-capped at its $5 budget; Wellness is CPA-constrained ($28 cap, ~$15 spend); all brand keywords are broad match; the Destination campaign's claimed value is 62% brand misspellings; Ads overstates Destination ~70% vs GA4 and understates Family; Brand Display and Latam produce zero GA4 revenue.

### 4.2 Search Console: property-name leak

| Property | Brand-name impressions | Clicks | CTR | Wtd avg position |
|---|---|---|---|---|
| Gardens | 29,158 | 39 | 0.13% | 6.9 |
| Springs | 23,839 | 89 | 0.37% | 7.0 |
| Tented | 10,145 | 26 | 0.26% | 7.3 |

Benchmark: "nayara resorts" sits position 1.6 at 50% CTR. Recapture sizing with property-true AOVs: Gardens ~$155K/qtr, Springs ~$155K/qtr (5,983 visits x 0.65% x $3,967), Tented ~$97K/qtr. Directional, not forecasts.

### 4.3 Category visibility and intent clusters
Strengths: tented camp cluster pos ~8; overwater bungalow cluster pos 5-6 (route to Bocas). Gaps: luxury resorts costa rica pos 24; adults only costa rica resorts pos 19; best resorts in central america pos 23 despite the T+L No 1 title; costa rica resort with spa pos 41. High-intent clusters: comparison vs-queries (~400 impressions, converted in paid); official-site cluster; all-inclusive and adults-only question intents; misspellings (naraya, nayra, niara, nyara; "niara gardens" 303 impressions). AI-evaluation categories (the AEO target map): adults-only hotels costa rica · best glamping experiences costa rica · best luxury resorts in costa rica · best wildlife resorts costa rica · family-friendly luxury costa rica · luxury eco-resorts central america · romantic resorts costa rica with hot springs · sustainable luxury resorts · unique hotels in arenal · where to stay near arenal volcano.

### 4.4 GBP discovery validation (Tented)
Wellness retreat cluster 163 discoveries · glamping/tented ~175 · hot springs ~100 · luxury cluster ~860 · "most expensive hotel in costa rica" + Spanish twin 126 (prestige content/PR angle, not a bid) · "gluten free resort costa rica" 19 (dining FAQ) · competitor cross-shop incl. "tabacon resort" 52. Family terms absent from Maps at both Tented and Gardens: family demand is a web behavior.

---

## 5. Tented campaign architecture (target state)

**Keep and scale:** Wellness PMax $28 → $45/day (reframed per section 2; if spend stays flat in week one, loosen tCPA). Family PMax $5 → $20/day under the 90-day gate. Brand Search US/CA/EU (restructured). ReMarketing PMax as is.

**Sunset (approved June 12, ON HOLD pending Windsor write access or manual entry):**
1. Pause Brand Display US (ID 21326571764)
2. Pause Brand Search Latam (ID 22437838962)
3. Wellness PMax → $45/day (ID 21321408409)
4. Family PMax → $20/day (ID 21310730103)
5. Luxury PMax → $5/day taper (ID 21321351253)

**Rebuild:** Destination Search → "Glamping & Arenal" category campaign with a dedicated **Hot Springs ad group**. Misspellings migrate to Brand. The paused DemGen-Discovery shell (ID 15647580475) is the container for the YouTube stage-two plan.

---

## 6. Keyword plan (Tented)

**Brand (exact + phrase):** nayara tented camp · nayara tented camp costa rica · nayara tents · nayara tented · nayara tent camp · misspellings (nayra, niara, nyara, naraya variants) · official website/site cluster · vs-queries to the comparison page.

**Glamping & Arenal:** tented camp costa rica · costa rica tented camp · luxury glamping costa rica · glamping costa rica · arenal luxury hotel · where to stay arenal volcano · best hotel arenal · luxury resorts costa rica (interim until portfolio layer).

**Hot Springs ad group (new):** hot springs resort costa rica · arenal hot springs hotel · la fortuna hot springs resort · hotel with hot springs costa rica · private hot springs costa rica.

**Family glamping (gated):** family glamping costa rica · family tents costa rica · luxury family resort costa rica arenal.

**Negatives (all non-brand):** camping, campground, campsite, near me, hipcamp, KOA, RV, tent rental, sleeping bag, cheap, hostel, motel, beach, guanacaste, papagayo, jaco, limon, puerto viejo, whatsapp, telefono, day pass (unless a day-pass product exists). Competitor names negated pending a deliberate conquesting decision.

**Wildcard exact:** eugene levy costa rica resort · reluctant traveler costa rica hotel.

---

## 7. Copy bank (headlines ≤30 chars, descriptions ≤90)

Housekeeping: fix the live "magnificiant" typo in the EXCELLENT-strength Brand US ad; retire "granular precision." Verify amenity claims (bunk configuration, daily yoga) before launch.

**Brand Search (pin "Nayara Tented Camp" H1):** Nayara Tented Camp · Official Site, Best Rates · Book Direct & Save · No 1 Resort, Central America · Tents Above the Rainforest · Arenal Volcano Views · Hot Spring Plunge Pools · A Leading Hotel of the World · Wake Up to Arenal Volcano · Private Decks, Volcano Views · Rainforest Luxury, Unzipped
- Canvas suites above the canopy, each with a hot spring plunge pool and volcano views.
- Voted No 1 resort in Central America. Book direct for our best available rate.
- Mornings begin with howler monkeys and volcano views. Nights end in your hot spring pool.
- A Leading Hotel of the World in the Arenal rainforest. Spa, dining, and resident sloths.

**Glamping & Arenal:** Luxury Glamping, Costa Rica · Costa Rica's Tented Camp · Glamping With a Volcano View · Tents With Hot Spring Pools · Five Stars Under Canvas · Arenal's Luxury Tented Camp · Not Camping. Nayara. · The Rainforest, First Class · Where Glamping Grew Up
- Safari style tents in the Arenal rainforest with plunge pools fed by volcanic hot springs.
- This is glamping at its peak: canvas, teak, fine dining, and Arenal volcano at your door.
- Hike the volcano, soak in hot springs, fall asleep to the rainforest. Adventure, refined.

**Wellness PMax (hot springs / nature immersion framing, handoff-ready):** Wellness Rooted in Nature · Volcanic Hot Spring Soaks · Spa Days in the Rainforest · Breathe. Soak. Repeat. · Your Reset Has a Volcano
- Long: A wellness retreat where the mineral pools are fed by Arenal's own hot springs · Forest bathing, volcanic soaks, and open air spa rituals in the Costa Rica rainforest
- Thermal mineral pools, open air spa pavilions, and the original sound bath: rain on canvas
- Unplug above the canopy. Volcanic hot springs, daily yoga, and a spa wrapped in jungle.

**Family PMax (family glamping, gated):** Family Tents With Bunk Beds · Camping, Minus the Roughing · Sloth Spotting Before Bed · Family Glamping, Five Star · Two Bedroom Family Tents
- Long: Luxury family glamping in Costa Rica with volcano hikes, hot springs, and sloth trails
- The kids get bunk beds and sloths. You get a plunge pool and the rainforest at dusk.
- Family suites under canvas, kid friendly trails, and a volcano for a nightlight.

---

## 8. Imagery specs and shot direction

Per PMax asset group: 3+ landscape 1.91:1 (1200x628), 3+ square 1:1 (1200x1200), 2+ portrait 4:5 (960x1200); square and 4:1 logos; 15+ images per group. Real photography only, people in frame where possible, no baked-in text, teal-warm grade matching the site.
- Brand / Glamping: dawn drone aerial of tents in canopy with Arenal behind; tent interior at golden hour toward the volcano; plunge pool steam at first light; candlelit dinner against dark jungle.
- Wellness: open-air spa pavilion mid-treatment; mineral soak with steam; sunrise yoga deck; tight water/stone/leaf textures for square crops.
- Family: kids on hanging bridges or sloth trail with guide; family tent interior showing bunks; family in plunge pool; one strong wildlife close-up.

---

## 9. Landing pages and testing framework (new in v2)

**Build themed landers on the main domain** (e.g. /tented-camp/wellness), never a microsite: preserves GA4 and booking-engine attribution continuity, inherits domain trust for Quality Score, and each lander doubles as the organic and AEO page for its category. **Brand traffic keeps landing on the main property page**; the official-site query cluster shows brand searchers explicitly want the real website.

**Lander anatomy:** theme-matched hero (image or 15s loop) with the ad promise restated in the H1 · proof strip (T+L No 1, Leading Hotels of the World) · three theme modules · persistent book-direct CTA passing UTMs and rate codes into the engine · FAQ block answering the literal queries (all-inclusive, adults-only) with AEO markup · "not sure which Nayara?" routing module.

**Testing math (from actual rates):** booking-engine entry rate ~3.0% on themed campaigns; purchase rate ~0.85%. Sessions needed (95% confidence, 80% power): purchases at 25% lift = ~59K total (infeasible: pooled themed traffic ~11.7K/quarter post-changes). Booking-engine entries: 25% lift = ~16.2K total, 35% lift = ~8.3K total, feasible in one to two quarters pooled. **Primary metric: booking-engine entry rate. Guardrail: revenue and bookings, directional.**

**Mechanics:** Search campaign → Google Ads custom experiment, true 50/50 split lander vs current page. PMax → lander as asset-group final URL with URL expansion off, read pre/post in GA4. Test order: lander vs property page, then hero video vs still, then CTA framing. One variable at a time.

**Gardens exception:** no testing on Gardens until begin_checkout is repaired.

---

## 10. YouTube roadmap

Current state: zero video campaigns; PMax auto-generates slideshow videos for YouTube today.
1. **Stage 1 (near-free):** one 15-20s film per theme (Brand, Wellness, Family) in 16:9 and 9:16 from existing drone/property footage, loaded into matching PMax asset groups.
2. **Stage 2:** revive DemGen-Discovery as a Demand Gen campaign at $20-30/day; custom intent segments from the mapped queries plus GA4 remarketing including booking abandoners; engaged-view conversions; 30s anthem → 15s theme cut → 6s book-direct bumper, frequency-capped.
3. **Stage 3 (organic):** property film plus Shorts cadence; targets "nayara tented camp photos / reviews / tour" demand and feeds AI answer visibility.
Measurement: GA4 engaged sessions, assisted and view-through bookings, Brand Search impression trend. No last-click ROAS expectations.

---

## 11. Measurement framework

- GA4 is the source of truth for paid evaluation.
- Weekly post-change: Family spend unlock; Wellness spend vs $45 ceiling (tCPA is the lever if flat); Luxury wind-down; brand IS stability in US/CA/EU.
- Monthly: GA4 ROAS by campaign vs the section 4 baseline; per-property brand CTR in Search Console as the leak-repair metric; AI Assistant channel sessions by property as the AEO scoreboard.
- Family gate review at day 90: GA4 ROAS ≥ 50x keeps family glamping at Tented; below consolidates at Gardens.
- Wellness handoff trigger: Springs Ads account visible and audited.

---

## 12. Sequence, v2 (Gardens-weighted)

**Now (no spend changes):** typo fix, copy refresh, negatives, brand match-type migration, misspell migration to Brand · Gardens on-page brand SEO · Gardens GBP description fix (adults-only misroute) · request sharing of the existing Springs and Gardens Ads accounts · scope the Gardens begin_checkout repair.
**On approval:** the five on-hold Tented account changes.
**30 days:** Destination → Glamping & Arenal rebuild with Hot Springs ad group · PMax video assets live · comparison page shipped · Gardens tracking fixed · Gardens dining-funnel pages and all-inclusive answer page in production.
**60 days:** audit of the shared Springs/Gardens accounts and the "Paid Other" channel · Demand Gen revival · AEO set underway (Gardens leads with family-friendly luxury; portfolio takes best-resorts-central-america with the T+L title) · first lander test live on Wellness.
**90 days:** Gardens brand campaign rebuilt post-audit (the ~$155K/qtr recapture) · Family gate decision · Wellness handoff planning if Springs account is in hand · portfolio luxury layer with the chooser lander.

---

## 13. Open items and dependencies

1. Windsor write actions remain disabled (Team Management toggle, admin role likely required).
2. **Security: rotate the Windsor co-user access token and API key shared in chat June 12.**
3. Sharing of the existing Springs and Gardens Google Ads accounts into the MCC (replaces v1's "create accounts" item).
4. Gardens begin_checkout instrumentation repair (gates all Gardens optimization and testing).
5. Identify the "Paid Other" channel (~9,100 sessions, 0 bookings across properties).
6. Brand YouTube channel connection in Windsor (currently a personal Gmail).
7. Nayara Springs GBP location not connected in Windsor.
8. Verify amenity claims in copy before launch.
9. Family gate threshold to be confirmed (suggested 50x GA4 ROAS).
