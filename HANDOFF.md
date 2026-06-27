# HANDOFF — Nayara Journal blog program

This document lets a new chat continue the blog work without missing a beat. Read this plus `CLAUDE.md` first. `CLAUDE.md` is the master brief on the wider Gardens organic strategy; this file is specifically about the Journal/blog deliverables and how they are built.

Branch for all blog work: **`claude/blogs-finalizing-ttrcnz`**. Commit and push every change here. No PR unless explicitly asked.

---

## 1. What this workstream is

We are producing standalone HTML blog posts for **blog.nayararesorts.com** (HubSpot). Each post is pasted into HubSpot as **two blocks**:

1. **BODY** — paste into the HubSpot source-code (`< >`) editor / rich-text module.
2. **HEAD** — JSON-LD schema, paste into the page's Head HTML (Settings → Advanced → Head HTML).

Two kinds of post:
- **Reformats** of existing published Journal posts into our canonical house template. These keep their original images and original text (verbatim), only restructured.
- **New posts** (the Awards announcement; the Costa Rica comparison hub). New posts may use image placeholders until real photos are dropped in.

Delivery to the user (Albert) is: commit to the branch, then **paste BODY and HEAD as two fenced code blocks in chat** so he can copy-paste. He works fast, often on mobile, wants decisiveness and a recommendation, not options.

---

## 2. Standing rules (non-negotiable, from CLAUDE.md)

- **No em dashes** anywhere. Use commas, colons, or periods.
- Editorial content is the **"Journal,"** never the word starting with b-l-o-g (in customer-facing copy).
- **Real photography only.** No illustrations, no stock-looking imagery.
- Web deliverables are **full standalone HTML**, not fragments.
- Booking CTA is **"Check availability,"** never "Book now."
- Alex- and owner-facing work: plain language, framed as recommendations, never naming individuals when flagging errors.
- Verify every factual/amenity claim before it goes live. Lead with what data supports; mark tests vs proven moves. (Alex = skeptical exec; provability standard.)
- Build pages with clean, migration-ready URLs so they can 301 cleanly later.

## 3. Design system

- Headers: **Playfair Display** (Cormorant Garamond acceptable alternate). Body: **DM Sans**.
- Palette: paper `#F7F5F0`, ink `#0D0704`, teal `#006D75`, light teal `#4DC9D1`, bark `#3a2a1a`, mist `#E2F0F0`.
- Voice: understated luxury. No emojis.

---

## 4. The canonical blog template (locked)

Every post follows this exact structure. It was refined to fix HubSpot conversion problems. See `BLOG_TEMPLATE_RULE.md` in the repo too.

**Two things that broke HubSpot conversion before and must NEVER appear:**
1. **HTML comments** (`<!-- -->`) — strip them all.
2. **Absolute-positioned caption overlay divs** on images (the `position:absolute; bottom:0; linear-gradient` caption bars). Use a clean `<img>` plus, if needed, a caption line in normal flow beneath it.

**Template anatomy (in order):**
- Full-bleed wrapper: `width:100vw; left:50%; margin-left:-50vw` etc., `font-family: 'DM Sans'...`, color `#2a1f16`.
- **Key Findings** band (`#f1ebe0`): an eyebrow label, then 3 (sometimes 4) **big-number stat callouts** in Playfair `#a9803f` with a short descriptor each. NOT prose. Derive real numbers from the article; flag any number that was newly added.
- Full-width **image bands**: `max-width:1100px`, `<img>` with `border-radius:8px`, `box-shadow`, `aspect-ratio:16/8`, `object-fit:cover`. No overlay captions.
- **Content sections** alternate background bands: `#faf7f1` (light), `#f1ebe0` (light warm), `#2f231a` (dark brown), `#231910` (darkest). Each section: an **eyebrow** (uppercase, letter-spaced, `#a9803f` on light / `#cda45f` on dark), a Playfair **H2**, then DM Sans body paragraphs. Body text max-width ~720px.
- Optional **centered statement band**: one big centered line (~30-36px Playfair feel) with an italicized final word, e.g. `You book a room. You inherit a <em>reserve.</em>`. Use sparingly (one per post).
- **FAQ**: `<details ... open="">` items with `<summary>`, bottom-bordered. Always `open`.
- **Sources and Further Reading**: dark band (`#231910`), **centered** eyebrow + list. List items left-aligned inside a centered container. (User explicitly wanted Sources centered.)
- **CTA band** (`#231910`): a hairline divider, "Begin"/"Stay With Us" eyebrow, Playfair H2, one line, then buttons. Primary button gold `#cda45f` = **"Check availability"**; secondary outline = "Explore Nayara Resorts". Link to the relevant property domain.
- No email footer. No HTML comments.

The cleanest reference implementations are `collapse-that-wasnt-reformatted.html` and `three-hotels-plus-comparison-hubspot.html`.

---

## 5. Blog inventory and status

All files live at repo root. "BODY file" = the paste-into-body HTML. "HEAD" = JSON-LD schema.

| Post | Body file | HEAD schema | Images | Status |
|---|---|---|---|---|
| **Pura Vida** (World Health Day, Albert Ghitis, 2026-03-15) | `pura-vida-reformatted.html` (also split `pura-vida-BODY.html`) | `pura-vida-HEAD.html` (also embedded) | 3 real | Done, pasted |
| **Stargazing in the Atacama** | `stargazing-atacama-reformatted.html` | embedded in file | 2 real (incl. a .gif) | Done, pasted |
| **Understanding the Atacama Desert** (2026-01-28) | `understanding-atacama-reformatted.html` | pasted in chat, NOT saved as file | 7 real | Done, pasted. HEAD not committed as file. |
| **Top 10 Luxury Travel Trends 2026** (2026-01-05) | `travel-trends-2026-reformatted.html` | pasted in chat, NOT saved as file | 4 real | Done, pasted. HEAD not committed as file. |
| **Hot Springs & Plunge Pools** (2025-12-07) | `hot-springs-plunge-pools-reformatted.html` | pasted in chat, NOT saved as file | 3 real | Done, pasted. HEAD not committed as file. |
| **A Collapse That Wasn't** (Ken Seligson, 2026-01-31) | `collapse-that-wasnt-reformatted.html` | `collapse-that-wasnt-HEAD.html` | 3 real | Done, pasted |
| **Women's Empowerment Through Housing** (La Fortuna, 2026-03-01) | `womens-empowerment-housing-reformatted.html` | `womens-empowerment-housing-HEAD.html` | 1 real (View from Afar, links to podcast) | Done, pasted |
| **Atacama and Mars** (2025-09-26) | `atacama-mars-reformatted.html` | `atacama-mars-HEAD.html` | 2 (one is an .svg illustration — see flags) | Done, pasted |
| **Awards / World Recognition** (NEW, 2026-06-27) | `awards-world-recognition-blog.html` | `awards-world-recognition-HEAD.html` | image placeholders | Done, pasted |
| **Three Hotels + "Which Nayara" comparison** (NEW "best of both worlds" hub) | `three-hotels-plus-comparison-hubspot.html` | `three-hotels-plus-comparison-HEAD.html` | 2 real (Springs hero, bird) | **Built. Leads with the comparison, then the shared reserve. Not yet pasted to Albert in chat.** |

### Open flags (carried forward, not yet actioned)
- **Missing HEAD files:** Understanding the Atacama, Travel Trends 2026, Hot Springs each have schema that was pasted in chat but never saved as a `-HEAD.html` file in the repo. If we want the repo to be the source of truth, recreate those three HEAD files.
- **Verbatim source typos left untouched** (kept on purpose; offered to fix, awaiting go):
  - Collapse: duplicate "genre is not evidence" lines; orphaned "emic institutions,..." sentence opener in the author bio.
  - Women's Empowerment: heading "Here it from our Founder" (likely "Hear it"); "is not stabilize" (truncated sentence).
  - Atacama and Mars: "Astronauts trabin" (likely "train"); "not a promise, but  practice" (missing "a", double space).
- **House-rule conflict:** `atacama-mars` uses `6-1.svg`, an illustration. Standing rule is real photography only. Kept because user said preserve existing images; recommend swapping for a real photo before publish.
- **Atacama and Mars Sources:** five entries (NASA, ESA, ALMA, UNWTO, UNEP) are plain text with no links in the source; left as text.

---

## 6. Verified facts (use these to cross-check copy; source: `awards.ts`, `LOCKED_CONTENT.md`, `properties.ts`, `CLAUDE.md`)

**Costa Rica portfolio (one shared rainforest reserve near La Fortuna / Arenal):**
- **Nayara Gardens** — the original property, the **family flagship**. Suites sleep 4, kids' programming, wild sloths, gardens, Arenal views. Rating **4.9, ~1,065 reviews** (use "more than 1,000" to be safe). Awards: Travel + Leisure Hall of Fame, Virtuoso, Green Globe. NOT Michelin-keyed (that's Springs). Often mis-positioned as a couples/romance retreat — this is the error the strategy fixes.
- **Nayara Springs** — **adults-only romance**. Private villas with hot-spring plunge pools. **Costa Rica's only Three-Key Michelin hotel** (the Keys are a hotel distinction, NOT a dining award). Relais & Châteaux. Green Globe.
- **Nayara Tented Camp** — **adventure / luxury glamping / seclusion** (NOT "the ultimate family," never call it a "launchpad"). Clifftop canvas suites on stilts, private plunge pools, Las Thermas geothermal hot springs, volcano views. **#1 Resort in Central America, Travel + Leisure, 5 of the last 6 years (2020-2026).** Condé Nast Traveler **Triple Crown** (Hot List + Gold List + Readers' Choice over 30 years; fewer than 400 hotels worldwide qualify). Green Globe, Virtuoso.

**International / pre-opening:**
- **Bocas del Toro** (Panama) — adults-only Caribbean, overwater. **#1 Resort in Central America, Condé Nast Traveler Readers' Choice 2025** (voted by 757,000+ travelers). 2 Michelin Keys.
- **Alto Atacama** (Chile, Atacama Desert) — **2 Michelin Keys**, Distinción Turismo Sustentable, Virtuoso. **#11 in South America, Travel + Leisure** (the new-breaking ranking in the Awards post). Catarpe Valley, private observatory.
- **Hangaroa** (Easter Island / Rapa Nui) — Distinción Turismo Sustentable. **#7 in South America, TripAdvisor.**

**MICHELIN Keys math (for the Awards post):** seven Keys across three countries = Springs 3 (Costa Rica) + Bocas 2 (Panama) + Alto Atacama 2 (Chile).

**TripAdvisor (Awards post):** Nayara Gardens **#1 in Costa Rica and #14 in the world**; Nayara Hangaroa **#7 in South America**.

**Shared Costa Rica experiences** (open to all three resorts): Vinyasa + Mindfulness yoga; Botanical Nature Hike; Bird Watching (Costa Rica 900+ species, 500+ in the Arenal region); "Finding Tony the Sloth" (wild two-toed sloth); Las Thermas hot springs; **five restaurants**; the **Spa Arenal**. Off-property Arenal: volcano, hanging bridges, Rio Celeste, canyoning, rafting, zip-lining.

**Other verified bits:** Costa Rica abolished its army in 1948 (UNESCO documentary heritage), redirecting funds to education/health (used in Women's Empowerment post). Costa Rica top-5 Happy Planet Index (Pura Vida post). La Fortuna housing project: 40 units, ~150 residents, privately titled, first home early 2027, 90%+ of CR team from the Arenal region.

---

## 7. Repo orientation (where things live)

This repo IS the source of the Manus staging SPA (React 19 + Vite). For the blog work you mostly need the root-level HTML files and these docs:
- `CLAUDE.md` — master brief (read first).
- `BLOG_TEMPLATE_RULE.md` — the template rule.
- `LOCKED_CONTENT.md`, `PROPERTY_ASSETS_LOCKED.md` — locked story text, CDN asset URLs, gallery layouts. Do NOT change without explicit approval.
- `MASTER_REFERENCE.md` — large asset/credential registry.
- `docs/seo-analysis-2026-06.md` — June 2026 SEO audit (DA ~33; ~95% branded; traffic down ~37% over 5 months; brand cannibalization across 5 domains; "costa rica resorts" is the top non-brand opportunity).
- Verified content data lives in `client/src/data/` (`properties.ts`, `awards.ts`, `dining.ts`, `journal.ts`, blog data files). TypeScript objects are the source of truth for the SPA; there is no CMS.

---

## 8. The Costa Rica comparison + shared hub (BUILT)

`three-hotels-plus-comparison-hubspot.html` is built around the **"best of both worlds"** concept Albert defined:

> Each resort is a private boutique with its own identity, but they share one rainforest estate, so you get the best of everything. It **leads with the "Which Nayara Is Right For You" comparison** (Gardens = family adventure, Tented = luxury glamping, Springs = adults-only romance), hinges on the statement band "Choose one. Inherit all three.", **then flows into the "three resorts, one rainforest" shared content** (The Shared Reserve, yoga, nature, Las Thermas, a day that flows).

Status: file built and committed, HEAD schema (`three-hotels-plus-comparison-HEAD.html`, FAQPage) in sync. Real Springs hero + bird images, overlay caption cleaned. Key Findings: `3 in 1` / `0 transfers` / `5 restaurants`. Award claims locked: Tented = Central America (5 of 6 years), Springs = only Three-Key Michelin hotel (not dining), no Gardens awards inserted. **Remaining: paste BODY + HEAD to Albert in chat for HubSpot** (he had to switch chats before the paste). Optionally add a Hotel/LodgingBusiness graph to the schema later.

There is also a separate **Nayara Gardens Family** landing page draft the user pasted (family flagship, corrects the couples mis-positioning, has its own "which Nayara for your family" mini-comparison, FAQs incl. all-inclusive, image placeholders to be filled with real family photos). Not yet committed as a file. It includes a "VERIFY-AND-ADD before publishing" note for family de-risking amenities (guaranteed adjacent rooms, babysitting, on-call doctor, stroller paths) — confirm with the resort before publishing those.

---

## 9. Environment / tooling notes

- **Outbound web is policy-blocked.** All Nayara domains (`nayararesorts.com`, `blog.nayararesorts.com`, `nayaratentedcamp.com`, `nayaragardens.com`, `nayarasprings.com`, `nayararesorts.manus.space`) return **403** through the egress proxy. This is the environment's network policy, not auth, and cannot be bypassed from inside. To enable browsing: change the **Network access** policy on this Cloud environment at code.claude.com (full/trusted or a custom allowlist incl. those domains + CDN `d2xsxph8kpxj0f.cloudfront.net`), then **start a new session** (policy is read at session start).
- **Connectors (MCP) available but not yet queried this program:** Windsor.ai (GA4, Google Ads, Search Console, GBP — note Gardens Search Console returns empty; fix; the `branded_vs_nonbranded` field is unreliable, classify manually), HubSpot, Semrush, Gmail, Google Drive, Dropbox, GitHub, Composio. Workflow for Windsor: confirm connector live → `get_fields` before `get_data`.
- **Skills available:** `ai-seo`, `seo-audit`, `schema`, `competitors`, `content-strategy`, `copywriting`, `copy-editing`, `customer-research`, `marketing-psychology`, plus the in-repo `distribb` SEO platform skill.

---

## 10. First 10 minutes in a new chat

1. Read `CLAUDE.md`, then this file.
2. Confirm branch: `git checkout claude/blogs-finalizing-ttrcnz && git pull`.
3. If browsing was enabled, open blog.nayararesorts.com and the property sites to sanity-check live state.
4. Pick up section 8 (the comparison + shared hub) unless redirected.
5. When delivering: commit + push first, then paste BODY and HEAD as two fenced code blocks in chat.
6. Keep the standing rules (section 2) and template (section 4) in force on everything.
