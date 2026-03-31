# NAYARA RESORTS — MASTER REFERENCE DOCUMENT

This document is the single source of truth for all media assets, credentials, content, and page structures across the Nayara Resorts project. It must be read at the start of every session to prevent context loss.

Last updated: March 30, 2026

---

## CREDENTIALS

| Service | URL | Username | Password |
|---------|-----|----------|----------|
| Spherical (Nayara sites) | https://nayara.sphrcl.co | spherical_htpswd | gsvqlkEt72KFXu3GuF54 |
| SynXis Booking (Tented Camp) | https://be.synxis.com/?Hotel=10868&Chain=24447 | — | — |
| SynXis Booking (Gardens) | https://be.synxis.com/?Hotel=10867&Chain=24447 | — | — |
| SynXis Booking (Springs) | https://be.synxis.com/?Hotel=10869&Chain=24447 | — | — |

---

## ARCHITECTURE DECISIONS

Each property page is a **self-contained hotel website**. Dining, experiences, wellness, sustainability all live WITHIN the property page — not on separate cross-content hub pages.

Cross-content pages to keep: **Journal** (blog), **Awards**, **Homepage** (umbrella).
Cross-content pages to deprecate: Experiences hub, Wellness hub, Gastronomy hub → fold into property pages.

Build order: **Tented Camp → Gardens → Springs** (Costa Rica trio first), then Resorts page pulls from all three.

### Media Orientation Rules
- **Desktop hero**: Horizontal video
- **Mobile hero**: Vertical video (secondary) / Horizontal photo (primary)
- All media must have both orientations available where possible

---

## CDN ASSETS — VIDEOS

### Landing Page / Brand
| Orientation | File | CDN URL | Used In |
|-------------|------|---------|---------|
| HORIZONTAL | landing-desktop-horizontal.mov | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/landing-desktop-horizontal_471d1062.mov | Home.tsx (desktop) |
| VERTICAL | compressed-landing-vertical.mp4 | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/compressed-landing-vertical_a7242694.mp4 | Home.tsx (mobile) |

### Tented Camp
| Orientation | File | CDN URL | Used In |
|-------------|------|---------|---------|
| HORIZONTAL | ntc-v4-compressed.mp4 | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/ntc-v4-compressed_18584b05.mp4 | TentedCamp.tsx (hero) |
| VERTICAL | compressed-video2.mp4 | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/compressed-video2_5f6a7b8c.mp4 | TentedCamp.tsx (mobile hero) |

### Gardens
| Orientation | File | CDN URL | Used In |
|-------------|------|---------|---------|
| HORIZONTAL | nayara-gardens-hero.mp4 | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara-gardens-hero_d4e5f6a7.mp4 | Gardens.tsx (hero) |

### Springs
| Orientation | File | CDN URL | Used In |
|-------------|------|---------|---------|
| HORIZONTAL | nayara-springs-hero.mp4 | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara-springs-hero_b8c9d0e1.mp4 | Springs.tsx (hero) |

### Alto Atacama
| Orientation | File | CDN URL | Used In |
|-------------|------|---------|---------|
| HORIZONTAL | alto-atacama-hero.mp4 | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/alto-atacama-hero_f2a3b4c5.mp4 | AltoAtacama.tsx (hero) |

### Costa Rica Shared
| Orientation | File | CDN URL | Used In |
|-------------|------|---------|---------|
| HORIZONTAL | costa-rica-hero.mp4 | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/costa-rica-hero_a1b2c3d4.mp4 | CostaRica.tsx (hero) |

---

## CDN ASSETS — PHOTOS

### Tented Camp (7 photos)
| File | CDN URL | Used In |
|------|---------|---------|
| tented-camp-adventure.jpg | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tented-camp-adventure_cdd78feb.jpg | TentedCamp.tsx |
| tented-camp-aerial.jpeg | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tented-camp-aerial_62a4d47c.jpeg | AwardWinningProperties.tsx |
| tented-camp-exterior.jpg | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tented-camp-exterior_c9d0e1f2.jpg | Gallery.tsx, Wellness.tsx |
| tented-camp-hero-aerial.jpg | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tented-camp-hero-aerial_0ba0626b.jpg | TentedCamp.tsx |
| tented-camp-hero.jpg | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tented-camp-hero_e94f6c38.jpg | Awards.tsx |
| tented-camp-spa.jpg | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tented-camp-spa_08599513.jpg | TentedCamp.tsx |
| tented-camp-tents.jpg | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/tented-camp-tents_a6421569.jpg | TentedCamp.tsx |

### Gardens (4 photos)
| File | CDN URL | Used In |
|------|---------|---------|
| nayara-gardens-pool.jpg | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara-gardens-pool_ce833018.jpg | Gardens.tsx |
| nayara-gardens-villa.jpg | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara-gardens-villa_194a8894.jpg | Gardens.tsx, Springs.tsx |
| nayara-gardens-volcano.jpg | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara-gardens-volcano_3c750274.jpg | Gardens.tsx |
| nayara_gardens_logo.png | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara_gardens_logo_05492d2c.png | MessengerDM.tsx |

### Springs (4 photos)
| File | CDN URL | Used In |
|------|---------|---------|
| hot-springs-hero.jpg | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hot-springs-hero_a60a0e92.jpg | data/properties.ts |
| nayara-springs-deck.webp | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara-springs-deck_91193c44.webp | Springs.tsx |
| nayara-springs-plunge.jpg | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara-springs-plunge_141ce455.jpg | Springs.tsx |
| springs-plunge-pool.jpg | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/springs-plunge-pool_e5f6a7b8.jpg | Experiences.tsx, Gallery.tsx, Wellness.tsx |

### Alto Atacama (5 photos)
| File | CDN URL | Used In |
|------|---------|---------|
| atacama-hero-desktop.jpg | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-hero-desktop_8c8a5be0.jpg | Sustainability.tsx, Experiences.tsx, Gallery.tsx |
| atacama-lodge-wide.jpeg | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-lodge-wide_9a96fbee.jpeg | AwardWinningProperties.tsx |
| atacama-pool-sunset.jpg | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-pool-sunset_c4a2f7e1.jpg | Sustainability.tsx, Gallery.tsx, Wellness.tsx |
| atacama-stargazing.jpg | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-stargazing_f5c3d8a4.jpg | Experiences.tsx, Gallery.tsx |
| atacama-suite-interior.jpg | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/atacama-suite-interior_d3b1e9f2.jpg | Gallery.tsx |

### Hangaroa (6 photos)
| File | CDN URL | Used In |
|------|---------|---------|
| hangaroa-aerial.jpg | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-aerial_9e07a82e.jpg | Gallery.tsx, Hangaroa.tsx |
| hangaroa-exterior.jpeg | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-exterior_f0aa17e3.jpeg | Hangaroa.tsx |
| hangaroa-grounds.jpg | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-grounds_d8ad48a8.jpg | Sustainability.tsx, Experiences.tsx, Hangaroa.tsx |
| hangaroa-pool.jpg | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-pool_1b0d18e8.jpg | Gallery.tsx, Hangaroa.tsx, Wellness.tsx |
| hangaroa-room.jpg | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-room_5b9eb728.jpg | Gallery.tsx, Hangaroa.tsx |
| hangaroa-sunset.jpg | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hangaroa-sunset_1238744f.jpg | Gallery.tsx, Hangaroa.tsx |

### Bocas del Toro (5 photos)
| File | CDN URL | Used In |
|------|---------|---------|
| bocas-aerial.jpg | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-aerial_ff3a4ff3.jpg | Sustainability.tsx, BocasDelToro.tsx, Experiences.tsx, Gallery.tsx |
| bocas-bungalow.jpg | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-bungalow_f4de28d6.jpg | BocasDelToro.tsx, Gallery.tsx |
| bocas-overwater.jpg | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-overwater_f9b09985.jpg | BocasDelToro.tsx, Gallery.tsx |
| bocas-panorama.jpg | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-panorama_4ba3f49e.jpg | Sustainability.tsx, BocasDelToro.tsx, Experiences.tsx |
| bocas-sunset.jpg | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bocas-sunset_2eeaa785.jpg | BocasDelToro.tsx, Gallery.tsx |

### Costa Rica Shared (3 photos)
| File | CDN URL | Used In |
|------|---------|---------|
| arenal-hanging-bridges.jpg | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/arenal-hanging-bridges_a3b4c5d6.jpg | Gallery.tsx |
| arenal-volcano-view.jpg | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/arenal-volcano-view_a1b2c3d4.jpg | Sustainability.tsx, Experiences.tsx, Gallery.tsx |
| spa-kids-robes.jpg | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/spa-kids-robes_57409a94.jpg | CostaRica.tsx |

### Excursion Photos (12 photos — used in properties.ts data)
| File | CDN URL |
|------|---------|
| IMG_6253.PNG | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/IMG_6253_ffc4f157.PNG |
| IMG_8113.jpeg | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/IMG_8113_311fa15c.jpeg |
| bird-watching-hero.jpg | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/bird-watching-hero_ddf4b8c3.jpg |
| canyoneering-photo.jpg | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/canyoneering-photo_d3d8461c.jpg |
| frog-tour-hero.jpg | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/frog-tour-hero_dc75898f.jpg |
| hanging-bridges-photo.jpeg | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/hanging-bridges-photo_a49dba00.jpeg |
| horseback-photo.jpeg | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/horseback-photo_68409b82.jpeg |
| rafting-photo.jpeg | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/rafting-photo_89375559.jpeg |
| yoga-photo.jpg | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/yoga-photo_3b789b60.jpg |
| zipline-photo.jpeg | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/zipline-photo_a5470805.jpeg |

### Brand / Logo (3 photos)
| File | CDN URL | Used In |
|------|---------|---------|
| nayara-logo-charcoal.png | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara-logo-charcoal_4ac58543.png | Home.tsx |
| nayara_ig_profile.png | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara_ig_profile_e5de9f8d.png | InstagramDM.tsx |
| nayara_resorts_logo.png | https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara_resorts_logo_990b5471.png | WhatsAppDM.tsx |

---

## SPHERICAL SITE CONTENT — TENTED CAMP

Source: https://nayara.sphrcl.co/tented-camp/
Full HTML saved at: /home/ubuntu/spherical-tented-camp.html
Full content extraction at: /home/ubuntu/spherical-tented-camp-content.md

### Page Structure (section order)
1. **HERO** — "A Tented Camp Perched Above the Costa Rican Rainforest" (full-screen video/image)
2. **INTRO** — "Lifted above the Canopy, Overlooking Arenal Volcano" (two-col with drone image)
3. **POOL VIDEO BANNER** — Full-width background video/image (tented-camp-main-pool.avif)
4. **ROOMS CAROUSEL** — 4 room types: Nayara Tent, Family Tent, Grand Tent, Private Residences
5. **POOL VIDEO BANNER 2** — Full-width background video
6. **SUSTAINABILITY** — "Light Footprint. Lasting Impact."
7. **EXPERIENCES** — "Curated Experiences & Adventure"
8. **WELLNESS** — "Nurtured by Nature" + "Nature-Based Wellness Inspired by Ancient Wisdom"
9. **DINING** — "Heightened Treetop Dining"
10. **MAP** — "One Rainforest, Three Resorts"
11. **FOOTER** — Links, contact, newsletter

### Navigation (Spherical)
Home, Stay, Experiences, Wellness, Dine & Drink, Sustainability, Gallery, About, Amenities, Getting Here, FAQs, Press & Awards

### Key Text Content

**Hero:** "A Tented Camp Perched Above the Costa Rican Rainforest"

**Intro:** "High above the Arenal Rainforest with sweeping views of Arenal Volcano, Tented Camp blends regenerative design with warm hospitality. Luxury tents open to nature invite you to reconnect with wonder, one another, and the rhythm of the wild. Soak in a private plunge pool fed by natural hot springs and savor the flavors of the land."

**Nayara Tent:** "Open wide to the canopy, with views through the trees and air that moves gently through. Spring-fed plunge pools, open-air showers, and spacious interiors offer a quiet sense of comfort, privacy, and ease."

**Family Tent:** (placeholder lorem ipsum on Spherical — needs real content)

**Grand Tent:** (placeholder lorem ipsum on Spherical — needs real content)

**Private Residences:** (placeholder lorem ipsum on Spherical — needs real content)

**Sustainability:** "Through reforestation, community partnerships, and net-positive policies, Nayara Tented Camp has become a model for regenerative luxury tourism in Costa Rica. Native forest now flourishes where cattle once grazed, and crystal-clear natural springs flow across the land. Our stilted tents rest lightly above it all, crafted from locally sourced materials."

**Experiences:** "Led by expert local guides, each personalized journey invites you to encounter the rainforest through adventure, wildlife, and moments of wonder. Discover the traditions, landscapes, and rhythms that define Arenal."

**Wellness:** "Tucked into lush canopies, Sukha Spa offers an elemental connection to Costa Rica's rainforest. From open-air sound baths to volcanic-mud massages, each wellness experience draws from the restorative power of the land."

**Dining:** "From Mediterranean flavors at Ayla to expertly stirred martinis at Henry's Bar, dining at Nayara Tented Camp is globally inspired, locally sourced, and served with soul—from garden to table."

**Map:** "Under a shared canopy, connected by bridges, Nayara's three Costa Rica rainforest resorts offer transformative moments, shaped by nature. Explore them all."

### Spherical Images (from Tented Camp page)
| File | URL |
|------|-----|
| COVER_VIDEO.jpg (hero poster) | https://nayara.sphrcl.co/wp-content/uploads/2026/03/COVER_VIDEO.jpg |
| DJI_0921 drone shot | https://nayara.sphrcl.co/wp-content/uploads/2026/03/DJI_0921-Nayara-Tented-Camp-with-Liv-Law-by-Brice-Ferre-Studio-Vancouver-Portrait-Adventure-and-Athlete-Photographer-copy-scaled.jpg |
| 1-477845 (aerial) | https://nayara.sphrcl.co/wp-content/uploads/2026/03/1-477845-scaled.jpg |
| 4O1A8313 Pools | https://nayara.sphrcl.co/wp-content/uploads/2026/03/4O1A8313-Nayara-Tented-Camp-Pools-Brice-Ferre-Studio-6.png |
| Exterior No Model | https://nayara.sphrcl.co/wp-content/uploads/2026/03/Nayara-Tented-Camp-Exterior-No-Model-IMG_9746-by-Brice-Ferre-Studio-Vancouver-Portrait-Adventure-and-Athlete-Photographer-copy-768x470.jpg |
| tented-camp-main-pool.avif | https://nayara.sphrcl.co/wp-content/uploads/2025/12/tented-camp-main-pool.avif |
| nayara-map.webp | https://nayara.sphrcl.co/wp-content/uploads/2025/12/nayara-map-scaled.webp |
| Food-80-1.webp | https://nayara.sphrcl.co/wp-content/uploads/2026/03/Food-80-1.webp |
| family-tent.avif | https://nayara.sphrcl.co/wp-content/uploads/2026/03/family-tent.avif |
| slide-1-m.avif (Nayara Tent main) | https://nayara.sphrcl.co/wp-content/uploads/2026/03/slide-1-m.avif |
| slide-1-s-2.avif (Nayara Tent secondary) | https://nayara.sphrcl.co/wp-content/uploads/2026/03/slide-1-s-2.avif |
| slide-2-s-1.avif (Nayara Tent secondary 2) | https://nayara.sphrcl.co/wp-content/uploads/2026/03/slide-2-s-1.avif |
| slide-2-s-2.avif | https://nayara.sphrcl.co/wp-content/uploads/2026/03/slide-2-s-2.avif |
| slide-3-m.avif (Grand Tent main) | https://nayara.sphrcl.co/wp-content/uploads/2026/03/slide-3-m.avif |
| slide-3-s-1.avif (Grand Tent secondary) | https://nayara.sphrcl.co/wp-content/uploads/2026/03/slide-3-s-1.avif |
| slide-4-m.avif (Private Residences main) | https://nayara.sphrcl.co/wp-content/uploads/2026/03/slide-4-m.avif |
| Sustainability thumbnails (3) | Various webp hash-named files |
| Wellness images (4) | Various webp hash-named files |
| Partner logos (5) | partner1-5.png |

---

## SPHERICAL SITE CONTENT — GARDENS

Source: https://nayara.sphrcl.co/gardens/
Status: NOT YET PULLED — needs to be scraped

---

## SPHERICAL SITE CONTENT — SPRINGS

Source: https://nayara.sphrcl.co/springs/
Status: NOT YET PULLED — needs to be scraped

---

## EXISTING CODE CONTENT

### Dining Data (client/src/data/dining.ts)
Full restaurant menus with prices, descriptions, and ingredients for:
- **Lapas Bar** — Tropical cocktails (Dreams Mai Tai, Lost Paradise Zombie, etc.)
- **Asia Luna** — Pan-Asian Fusion
- **Amor Loco** — Contemporary Latin
- **Café Campesino** — Costa Rican Heritage
- Additional restaurants in the file

### Experiences Data (client/src/pages/Experiences.tsx)
6 experience categories with full descriptions:
- Stargazing & Astronomy
- Volcanic Landscapes
- Marine & Water
- Cultural Immersion
- Wellness in Nature
- Conservation & Sustainability

### Wellness Data (client/src/pages/Wellness.tsx)
4 wellness pillars with full descriptions:
- Volcanic Hot Springs (Springs)
- Desert Sound Healing (Atacama)
- Rainforest Yoga Pavilion (Tented Camp)
- Pacific Oceanfront Wellness (Hangaroa)

### Properties Data (client/src/data/properties.ts)
Excursion data with photos for Costa Rica properties

---

## GMAIL ATTACHMENTS (from user)

Status: NEEDS FULL AUDIT — search Gmail for all Nayara-related attachments

Known items:
- Tented Mock up.png (saved at /home/ubuntu/gmail-attachments/19d2c1c2d42106be/)
- Various video files sent by user
- Experience PDFs
- Spa menus

---

## GOOGLE DRIVE CONTENT

Status: NEEDS AUDIT — check for Nayara folders

---

## DROPBOX CONTENT

Status: NEEDS AUDIT — check for Nayara media

---

## TODO — CONTENT GAPS

- [ ] Pull Spherical Gardens page structure and content
- [ ] Pull Spherical Springs page structure and content
- [ ] Full Gmail attachment audit for all videos/photos/PDFs
- [ ] Google Drive audit for Nayara folders
- [ ] Dropbox audit for Nayara media
- [ ] Upload Spherical images to our CDN (they're currently on sphrcl.co)
- [ ] Get vertical videos for Gardens and Springs heroes
- [ ] Get real content for Family Tent, Grand Tent, Private Residences (currently lorem ipsum on Spherical)
