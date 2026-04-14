# Nayara Resorts — Site Architecture Audit

## Current Page Count

### Public Website Pages (Real Content)

| # | Route | Page | Type |
|---|-------|------|------|
| 1 | `/` | Homepage | Landing |
| 2 | `/alto-atacama` | Alto Atacama Property | Property L1 |
| 3 | `/alto-atacama/rooms` | Atacama Rooms | Property L2 |
| 4 | `/alto-atacama/experiences` | Atacama Experiences | Property L2 |
| 5 | `/alto-atacama/gastronomy` | Atacama Gastronomy | Property L2 |
| 6 | `/alto-atacama/sustainability` | Atacama Sustainability | Property L2 |
| 7 | `/alto-atacama/wellness` | Atacama Wellness | Property L2 |
| 8 | `/tented-camp` | Tented Camp Property | Property L1 |
| 9 | `/tented-camp/rooms` | Tented Camp Rooms | Property L2 |
| 10 | `/tented-camp/experiences` | Tented Camp Experiences | Property L2 |
| 11 | `/tented-camp/gastronomy` | Tented Camp Gastronomy | Property L2 |
| 12 | `/tented-camp/sustainability` | Tented Camp Sustainability | Property L2 |
| 13 | `/tented-camp/wellness` | Tented Camp Wellness | Property L2 |
| 14 | `/gardens` | Gardens Property | Property L1 |
| 15 | `/gardens/rooms` | Gardens Rooms | Property L2 |
| 16 | `/gardens/experiences` | Gardens Experiences | Property L2 |
| 17 | `/gardens/gastronomy` | Gardens Gastronomy | Property L2 |
| 18 | `/gardens/sustainability` | Gardens Sustainability | Property L2 |
| 19 | `/gardens/wellness` | Gardens Wellness | Property L2 |
| 20 | `/springs` | Springs Property | Property L1 |
| 21 | `/springs/rooms` | Springs Rooms | Property L2 |
| 22 | `/springs/experiences` | Springs Experiences | Property L2 |
| 23 | `/springs/gastronomy` | Springs Gastronomy | Property L2 |
| 24 | `/springs/sustainability` | Springs Sustainability | Property L2 |
| 25 | `/springs/wellness` | Springs Wellness | Property L2 |
| 26 | `/hangaroa` | Hangaroa Property | Property L1 |
| 27 | `/hangaroa/rooms` | Hangaroa Rooms | Property L2 |
| 28 | `/hangaroa/experiences` | Hangaroa Experiences | Property L2 |
| 29 | `/hangaroa/gastronomy` | Hangaroa Gastronomy | Property L2 |
| 30 | `/hangaroa/sustainability` | Hangaroa Sustainability | Property L2 |
| 31 | `/hangaroa/wellness` | Hangaroa Wellness | Property L2 |
| 32 | `/bocas-del-toro` | Bocas del Toro Property | Property L1 |
| 33 | `/bocas-del-toro/rooms` | Bocas Rooms | Property L2 |
| 34 | `/bocas-del-toro/experiences` | Bocas Experiences | Property L2 |
| 35 | `/bocas-del-toro/gastronomy` | Bocas Gastronomy | Property L2 |
| 36 | `/bocas-del-toro/sustainability` | Bocas Sustainability | Property L2 |
| 37 | `/bocas-del-toro/wellness` | Bocas Wellness | Property L2 |
| 38 | `/arenal` | Costa Rica / Arenal Hub | Hub |
| 39 | `/journal` | Journal / Blog | Content |
| 40 | `/awards` | Awards & Press | Brand |
| 41 | `/sustainability` | Sustainability Hub | Brand |
| 42 | `/experiences` | Experiences Hub | Brand |
| 43 | `/wellness` | Wellness Hub | Brand |
| 44 | `/gastronomy` | Gastronomy Hub | Brand |
| 45 | `/gallery` | Gallery | Brand |
| 46 | `/newsletter` | Newsletter | Content |
| 47 | `/blog/pura-vida` | Pura Vida Blog Post | Blog |
| 48 | `/blog/green-globe-s-certification` | Green Globe Blog Post | Blog |
| 49 | `/privacy-policy` | Privacy Policy | Legal |
| 50 | `/by-night` | Nayara By Night | Special |
| 51 | `/new-projects` | Moon Camp / New Projects | Special |

**Total public pages: 51**

### Internal / Non-Website Pages (Move to /internal)

| Route | Page | Why Internal |
|-------|------|--------------|
| `/brand-book` | Brand Book | Internal design reference |
| `/henry` | Henry Standalone Chat | Dev/demo tool |
| `/tented-experiences` | Tented Experiences (legacy) | Redundant with /tented-camp/experiences |

### Redirects (Not Real Pages)

| Route | Redirects To |
|-------|-------------|
| `/blog` | `/journal` |
| `/podcast` | `/journal` |
| `/press` | `/awards` |
| `/story` | `/` |
| `/tented-wellness` | `/wellness` |
| `/faq` | `/journal` |

**Total redirects: 6**

### System Pages

| Route | Page |
|-------|------|
| `/404` | Not Found |

---

## Entity Inventory (for Deep Pages — Level 3)

### Experiences (Excursions)

| Property | Count | Entity IDs |
|----------|-------|-----------|
| Alto Atacama | 8 | valley-of-the-moon, el-tatio-geysers, stargazing, salt-flat-lagoons, rainbow-valley, miscanti-miniques, mountain-biking, puritama-hot-springs |
| Costa Rica (shared: Tented Camp, Gardens, Springs) | 17 | cooking-class, chocolate-class, yoga-session, hot-springs, hanging-bridges, celeste-river, safari-penas-blancas, canyoning, ziplining, lava-fields, waterfall-bridges, kayaking, rafting, horseback-riding, chocolate-coffee, organic-farm + (split: explore-nayara / explore-arenal) |
| Hangaroa | 10 | ahu-tongariki, rano-kau-orongo, anakena-beach, scuba-diving-ei, horseback-riding-ei, moai-carving, takona-body-painting, stargazing-ei, surfing-ei, cooking-class-ei |
| Bocas del Toro | 13 | dolphin-bay-sunset, chocolate-tour-bocas, monkey-island, red-frog-beach, starfish-beach, bioluminescence, bat-cave, scuba-bocas, catamaran-bocas, fishing-bocas, ebike-bocas, yoga-bocas + (1 more) |

**Total experience entities: ~48**

### Rooms

| Property | Count | Room Types |
|----------|-------|-----------|
| Alto Atacama | 3 | Quitor Suite, Ckuri Suite, Puri Suite |
| Tented Camp | 3 | Nayara Tent, Grand Tent, Residence |
| Gardens | 3 | Casita, Family Casita, Royal Villa |
| Springs | 3 | Springs Villa, Springs Suite, Nayara Suite |
| Hangaroa | 3 | Rapa Nui Suite, Ariki Suite, Hangaroa Suite |
| Bocas del Toro | 3 | Overwater Villa, Treehouse Villa, Garden Villa |

**Total room entities: 18**

### Gastronomy (Restaurants & Bars)

| Property | Count | Restaurants |
|----------|-------|-----------|
| Costa Rica (shared) | 6 | Lapas Bar, Terraza, Asia Luna, Amor Loco, Cafe Campesino, Nostalgia |
| Hangaroa | 1 | Poerava |
| Alto Atacama | 1 | Alto Atacama Restaurant |
| Bocas del Toro | 1 | Bocas Dining |

**Total restaurant entities: 9**

Note: The user mentioned specific named entities like Henry's Bar, Lyla's Gelato, Lev's Treehouse, Casa Paloma, Ayla the restaurant — these may need to be added as new entities.

---

## Projected Page Count with Deep Pages (Level 3)

| Category | Current | New Deep Pages | Total |
|----------|---------|---------------|-------|
| Homepage + Hubs | 7 | 0 | 7 |
| Property L1 (6 properties) | 6 | 0 | 6 |
| Property L2 (rooms/exp/gastro/sust/well) | 30 | 0 | 30 |
| Experience Deep Pages | 0 | ~48 | 48 |
| Room Deep Pages | 0 | 18 | 18 |
| Restaurant Deep Pages | 0 | 9 | 9 |
| Content (journal, blog, newsletter) | 4 | 0 | 4 |
| Brand (awards, gallery, sustainability) | 3 | 0 | 3 |
| Special (by-night, new-projects) | 2 | 0 | 2 |
| Legal | 1 | 0 | 1 |
| **TOTAL** | **51** | **~75** | **~126** |

---

## Proposed URL Structure (Deep Pages)

```
/{property}/experiences/{experience-id}
  e.g. /alto-atacama/experiences/valley-of-the-moon
  e.g. /tented-camp/experiences/hanging-bridges
  e.g. /hangaroa/experiences/ahu-tongariki
  e.g. /bocas-del-toro/experiences/bioluminescence

/{property}/rooms/{room-slug}
  e.g. /alto-atacama/rooms/quitor-suite
  e.g. /springs/rooms/springs-villa
  e.g. /bocas-del-toro/rooms/overwater-villa

/{property}/gastronomy/{restaurant-id}
  e.g. /gardens/gastronomy/lapas-bar
  e.g. /hangaroa/gastronomy/poerava
  e.g. /bocas-del-toro/gastronomy/bocas-dining
```

---

## Scrolling Methods Catalog

| Method | Description | Currently Used On |
|--------|-------------|------------------|
| Standard vertical scroll | Normal page scroll, content flows top to bottom | Most pages |
| Parallax scroll | Background moves at different speed than foreground | Homepage hero, property heroes |
| Scroll-triggered reveals | Elements fade/slide in as they enter viewport | All property pages, homepage sections |
| Video cascade (full bleed) | Connected full-width videos that scroll through continuously | /new-projects (Moon Camp cascade) |
| Ken Burns / slow zoom | Subtle zoom on images as user scrolls past | Property page section images |
| Staggered text reveal | Text elements appear one after another on scroll | Homepage hero, section headings |
| Counter animation | Numbers count up from 0 when scrolled into view | Awards stats section |
| Scroll progress indicator | Thin line at top showing page scroll progress | Homepage |

Potential new methods to experiment with:
- Horizontal scroll sections (carousel-style within vertical page)
- Snap scroll (full-screen sections that snap into place)
- Sticky/pinned sections (content changes while container stays fixed)
- Parallax depth layers (multiple layers at different speeds)
- Scroll-linked video playback (video plays as user scrolls)
- Card stack (cards stack/unstack as you scroll)
