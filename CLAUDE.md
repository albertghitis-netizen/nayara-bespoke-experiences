# CLAUDE.md: Nayara Resorts Digital Marketing

This file briefs you on an ongoing project. Read it fully before acting. It captures the working rules, the decisions already made, the data already gathered, and what is in flight. When something here conflicts with a stale assumption, this file wins.

---

## Who and what

- **Albert**, Head of Digital Marketing, Nayara Resorts (luxury hospitality). Works fast and iteratively, often by voice on mobile, so expect transcription noise (Nayara sometimes garbled). Wants the assistant to drive analysis and be decisive, not to present options without a recommendation.
- **Alex** is the executive stakeholder. Standard: rigorous incrementality and ROI, skeptical of attribution claims, wants plain language and recommendations framed as testable suggestions, not directives. Anything Alex- or owner-facing must be plain, honest about uncertainty, and defensible as a provable intervention.

**Portfolio.** Three active Costa Rica properties: **Nayara Gardens** (the original property, the family flagship, formerly named "Nayara Resort Spa & Gardens" and still listed as "Arenal Nayara" on some sites), **Nayara Springs** (adults-only romance, three MICHELIN Keys), **Nayara Tented Camp** (luxury glamping). Three pre-opening international properties: **Bocas del Toro** (Panama), **Alto Atacama** (Chile), **Hangaroa** (Easter Island).

**Current focus: Nayara Gardens organic search strategy.** Springs and Tented are healthy and stay on maintenance for now. Gardens is both the weakest organic performer and the most misunderstood, so it gets the concentrated effort.

---

## Standing rules (non-negotiable, apply to all output)

- No em dashes anywhere. Use commas, colons, or periods.
- Editorial content is the "Journal, " never the word that starts with b-l-o-g.
- Real photography only. No illustrations, no stock-looking imagery.
- Web deliverables are full standalone HTML files, not fragments.
- Alex- and owner-facing work is plain language (roughly sixth grade), framed as recommendations, never as completed actions, and never naming individuals when flagging errors.
- No changes to ad accounts, listings, or live systems without explicit go-ahead.
- Booking CTA is "Check availability, " never "Book now."
- Use GA4-verified figures over Google Ads blended conversion numbers, which overstate.
- Build every new page with a clean, migration-ready URL so it can 301 cleanly later.

## Design system (for reports and pages)

- Headers: Playfair Display (Cormorant Garamond acceptable alternate). Body: DM Sans.
- Palette: paper `#F7F5F0`, ink `#0D0704`, teal `#006D75`, light teal `#4DC9D1`, bark `#3a2a1a`, mist `#E2F0F0`. Alternates: forest green, gold, ivory.
- Voice: understated luxury. No emojis.

---

## The Gardens problem (the thing the strategy fixes)

Gardens is mislabeled and underperforming in four connected ways:

1. **Mis-positioned as couples.** Google and the AI assistants describe Gardens as a romance retreat, when it is the family flagship (suites that sleep four, the sloth trail, kids' programming). This is an active error that suppresses family demand now.
2. **Cut off from its own history.** The property was renamed, and its reviews, history, and awards earned under older names are not fully connected to "Nayara Gardens." The public record is muddled, and some awards are conflated with Springs across third-party sites.
3. **Large search interest, very few bookings from it.** Gardens draws more search interest than its siblings but converts little of it. It sits below the booking sites on its own name, and the family story is missing from its pages.
4. **Underused unique asset.** The on-property sloths are an unreplicable differentiator and already the AI answer for "hotel with sloths Costa Rica, " but they are not built into the site as an asset.

Plus a measurement blind spot: **Gardens' Search Console data does not currently flow through Windsor (returns empty), so Gardens organic cannot be measured there yet. Fix this first.**

---

## Domain architecture (decided)

- **Gardens-brand content stays on nayaragardens.com for now.** Building Gardens-brand pages on the corporate domain while nayaragardens.com is still live would put two of our own sites in competition for the Gardens name and weaken both.
- **Non-brand category and comparison pages go on nayararesorts.com** (corporate). These target general terms, not the Gardens name, so they help rather than compete.
- **Eventual consolidation:** nayaragardens.com migrates into nayararesorts.com, with Gardens as the first property to move (weakest footprint, least downside). Content and 301 redirects move together, never content ahead of redirects. This is gated behind fixing the conversion tags and establishing a clean baseline. Treat it as one consolidation project that also folds in the Journal subdomain move.

---

## The agreed landing-page plan (the four most important)

Every page below needs: real photos only, FAQ + Hotel schema so it doubles as an AI answer, a "Check availability" CTA, verified claims only, and a clean migration-ready URL.

**On nayaragardens.com**
1. **Family (the lead).** The core fix for the couples mis-positioning. Rooms that sleep four, kids and multi-generational, getting to Arenal with children, the sloths for families, plus de-risking content (guaranteed adjacent placement, babysitting, on-call doctor, stroller paths). Note: Search Console cannot size family demand because Gardens barely appears for it, so this is justified on the mis-narration and market reality. Get Keyword Planner figures to size it. Verify every amenity claim before publishing.

**On nayararesorts.com (Gardens feeders)**
2. **Best Luxury Resorts in Costa Rica.** The biggest single demand opportunity: "costa rica resorts" pulls about 10, 091 impressions at average position 9 (a ~15K cluster) and converts almost nothing. Portfolio page that positions Gardens as the family pick.
3. **Which Nayara Is Right For You (comparison).** Fixes confusion between the three properties and is prime AI-citation material. Position Gardens as the family flagship, Springs as adults-only romance, Tented as the adventure or seclusion option, NOT "the ultimate family." Do not call Gardens a "launchpad."
4. **All-Inclusive (treat as a test).** Real, high-intent demand ("is it all inclusive" volume; "is nayara gardens all inclusive" already ranks). Lead the page with a clear honest answer to "what's included, " then the value. Do not lead with a clever "unpackaged" pitch that argues with the searcher's intent.

**Next wave (not dropped, sequenced behind the four):** Gardens dining page (captures "restaurants, " the biggest non-brand Maps search, 3, 500+/quarter), the sloth experience page, and a plain "what's included" answer on the Gardens site. Dining and sloth content can start as sections before graduating to their own pages.

**Build order:** fix measurement (Springs conversion tag first) and continue entity reconnection, then Gardens family page and corporate Best Luxury Resorts in parallel, then the comparison page, then the Gardens answer pages and sloth, then all-inclusive and an Arenal page.

## Landing pages vs the Journal

Landing pages lead, because Gardens' bottleneck is conversion and positioning, not awareness. They capture commercial intent near the decision and do triple duty as the page Google ranks, the page AI cites, and the ad lander. The Journal is slow-burn authority and link-building, a supporting role. Do not pour primary effort into editorial volume or rush the Journal migration while the commercial layer is unbuilt.

---

## Entity and awards reconnection (no new page; partly underway)

The reconnection runs through the invisible structured-data layer plus listing corrections, NOT a visible "formerly known as" page (not approved, and not necessary).

- On the existing Gardens homepage: add Hotel or LodgingBusiness schema with `alternateName` (the old name), `sameAs` (Wikidata, social, Maps), `award`, and `aggregateRating` (4.9, 1, 065 reviews).
- Set a **Wikidata** "also known as" alias for the former name. This is the strongest lever you control for getting the Knowledge Graph and AI engines to treat the two names as one entity.
- Keep Google Business Profile name continuity.
- Correct the editable partner and OTA listings, several of which still show the old name or credit Gardens' award to Springs.
- Lead with the family and resort awards for Gardens. Leave the romance awards to Springs.
- Confirm the exact legal name each award was issued under before writing it, since the record is muddled.

**Already done / in flight (per Albert):**
- DONE: the Google Maps profile name change has already gone through (the highest-leverage single item).
- REQUESTED: name corrections on arenal.net and visitcostarica.com (both still show the old "Arenal Nayara" name), plus the Condé Nast award listing and booking record.

Awards to reconnect include a 2015 Travel + Leisure number-one in Central and South America and a 2016 Condé Nast Traveler number-two, among others. Verify each attribution; some are conflated with Springs in the wild.

---

## Technical findings (verified)

- Crawlability is fine: all robots.txt return HTTP 200 to Googlebot, no Cloudflare block. The "crawlability crisis" in the external audit does not reproduce.
- Schema: a generic Yoast graph exists, but Hotel/LodgingBusiness, AggregateRating, and FAQPage are all absent. These are the revenue and AEO types to add.
- Core Web Vitals on Gardens: about 75% of homepage images lack width/height (layout shift), all 102 images are eager-loaded (zero lazy), TTFB about 0.95s (slowest of the four but acceptable). Treat CWV as a conversion and UX fix, not an SEO emergency.
- nayaragardens.com runs end-of-life PHP 7.4 and has failing Duplicator backups. Fix backups and upgrade PHP before a developer edits the theme.
- Add Spanish hreflang.
- Separate bug to log: nayaratentedcamp.com robots.txt points its sitemap directive at the Springs domain.

## Measurement findings (data)

- SynXis cross-domain referral fix landed in June: Gardens referral share dropped from ~84 to 86% (March/April) to ~12% (June), now normal.
- **Two Google Ads conversion tags are still broken:** Springs reports zero conversion value (worth an estimated $15K to $25K per month in recovered brand bookings), and Gardens value tracking reports near zero per booking against a real AOV around $3, 165. Tented's tag works. No paid strategy changes until tags are repaired per property.
- Brand auctions are contested (so brand defense is not pure waste, but a geo holdout is the clean incrementality test): impression share roughly Tented 82%, Gardens 74%, Springs 60% (Springs losing ~25% to rank, tag-starved).
- Clean June ROAS once attribution is trustworthy: Tented ~83x, Springs ~34x, Gardens ~18.4x. The deck's 7.9x for Gardens was an attribution artifact, not real underperformance.
- Non-brand demand: "costa rica resorts" ~10, 091 impressions at position 9 is the corporate prize. Arenal cluster is modest (~300 impressions) and ranks deep (position 20 to 57). Family and La Fortuna demand are invisible in Search Console because Nayara barely appears for them; size with Keyword Planner.
- Gardens leads the AI Assistant channel in GA4, so the AEO work pays off here first.

---

## Tools and accounts

- **Windsor.ai** is the primary data layer (connectors: Google Ads, GA4, Search Console, Google Business Profile, and many more). Workflow: confirm a connector is live, call get_fields before get_data, and note Windsor silently drops unrecognized fields. Its `branded_vs_nonbranded` field is unreliable (marks "nayara X" as nonbranded), so classify brand vs non-brand manually. No PageSpeed, Keyword Planner, or Semrush available through it. Write actions exist but require explicit go-ahead.
 - Google Ads: Tented 257-676-3011, Springs 171-456-0372, Gardens 529-785-6464.
 - GA4: hub/Resorts 364402180, Springs 360867414, Tented 357704789, Gardens 357647205.
 - Search Console: the four domain URLs are connected, but Gardens returns empty (fix), and blog.nayararesorts.com is not connected.
 - Google Business Profile: Gardens locations/2600398902697219645, Springs locations/12208635739794859338, Tented locations/13322193942845142619.
- **SynXis** booking engine: Gardens chain 24447, hotel 39070. Cross-domain fix confirmed live June 2026.
- **WordPress:** nayararesorts.com runs JupiterX + Elementor, Yoast Premium, WP Rocket. nayaragardens.com runs a custom "nayara" theme with Advanced Custom Fields, no page builder, Yoast Premium, WP Rocket, PHP 7.4.
- **HubSpot** is the live source for Journal content and redirect equity; 301s must originate from HubSpot URLs.
- **Manus staging:** nayararesorts.manus.space/journal. GitHub repo: albertghitis-netizen/nayara-bespoke-experiences (React 19 + Vite 7 SPA). For now only the Journal migration is in scope there, not the full site.
- **Journal subdomain:** lives on blog.nayararesorts.com instead of a subfolder, which splits authority off the commercial domain. Moderate, gradual cost, and a corporate issue more than a Gardens one. Fold the move to nayararesorts.com/journal into the consolidation, after connecting the subdomain to Search Console.

## Competitive set

- Tier 1 for Gardens: The Springs Resort & Spa (a competitor, distinct from our Nayara Springs), and Tabacón.
- Tier 2: Four Seasons Peninsula Papagayo, Nekajui (Ritz-Carlton Reserve, opened Feb 2025 and flooding AI corpora), Hacienda AltaGracia.

---

## Files (under docs/nayara-handoff/)

- `docs/nayara-handoff/deliverables/gardens-organic-strategy-briefing.html`: plain-language executive briefing on the Gardens organic strategy, in the house design system. Sendable to leadership.
- `docs/nayara-handoff/deliverables/integrated-demand-strategy-v2.html`: the integrated demand strategy.
- `docs/nayara-handoff/deliverables/search-demand-plan-v2.md`: the search demand plan.
- `docs/nayara-handoff/deliverables/tented-paid-search-audit.html`: the Tented paid-search audit (reference for method and tone).
- `docs/nayara-handoff/reference/original-seo-audit.md`: independent external technical and competitive audit. Directionally right on missing hotel schema and image layout shift, overstated on crawlability and "all four" claims.
- `docs/nayara-handoff/reference/strategy-critique.md`: a critique of an earlier version of the strategy framework; several gaps it names are already closed.
- `docs/nayara-handoff/reference/integrated-growth-strategy.md`: the ownership growth-strategy deck text.
- `docs/seo-analysis-2026-06.md`: standalone SEO data pull (Semrush + Search Console, June 2026).
- `docs/costa-rica-keyword-strategy.md`: master non-brand keyword universe (luxury/family/adults/geo/type/all-inclusive) mapped to property + page + ranking play (Semrush, June 2026).
- `docs/listicle-outreach-targets.md`: listicle-inclusion + GEO outreach list for the head terms: who ranks, whether Nayara is listed, priority + pitch (June 2026).
- `docs/integrated-data-analysis-2026-06.md`: integrated analysis combining live GA4 + Google Ads (Windsor), the SynXis-validated KPI workbook, GA4 report exports, Semrush, and the Drive strategy docs. Corrects the measurement picture (Ads value tags broken for Springs/Gardens; corporate cross-domain gap; Gardens GA4 tracks fine) and reconciles the strategy docs (domain-architecture conflict, awards source of record, entity gap).
- `docs/nayara-digital-strategy-master-2026-06.md`: the master digital strategy report: organic, paid, AEO/GEO, E-E-A-T, social, Journal, YouTube, local/Maps, competitors, keyword gaps, and landing pages, per property + brand, built on live GA4/Ads/IG/GBP + Semrush + KPI data (US + Europe).
- `docs/nayara-handoff/deliverables/digital-strategy-executive-briefing.html`: leadership-facing plain-language summary of the master report, in the house design system. Sendable to leadership.

When building pages, follow the standing rules and design system above, verify any factual or amenity claim before it goes live, and keep Alex's provability standard in mind: lead with what the data supports, and be explicit about what is a test versus a proven move.
