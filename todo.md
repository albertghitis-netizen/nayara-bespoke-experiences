# Project TODO

## Website — Home Page
- [x] Hero video with horizontal desktop / vertical mobile swap
- [x] "Luxury Resorts Rooted in Nature" tagline (smaller)
- [x] Subtle "Nayara" branding at 15% opacity
- [x] Floating nav pills — hamburger left, Reserve right
- [x] Hamburger menu with Experiences/Wellness dropdowns (property links)
- [x] Award-Winning Properties section
- [x] The World of Nayara section
- [x] Footer — compact, redesigned with brown bg (#3a2a1a)
- [x] ExploreOurWorld section cleaned up
- [x] Footer imported and rendered on Home and Journal pages

## Website — Experience Pages
- [x] Alto Atacama experience page with magazine-style detail views
- [x] Arenal experience page with three categories
- [x] Experience card detail views with vertical video, horizontal photo, description

## Full-Stack Upgrade
- [x] Upgrade to full-stack (db, server, user)
- [x] Fix TypeScript error from upgrade
- [x] Push database schema

## Concierge Chatbot — Starry AI
- [x] Build tRPC procedure with LLM + comprehensive system prompt
- [x] Build floating chat widget on frontend
- [x] Train on: all 6 properties, excursions, rooms, dining, wellness, sustainability
- [x] Lead capture: name + email (leads table in DB, auto-extract from chat via LLM)
- [x] Warm concierge tone, conversational style (Starry personality)
- [x] Naturally ask for email early in conversation
- [x] Naturally mention phone (1-844-865-2002)
- [x] 3 separate Costa Rica properties (Gardens, Springs, Tented Camp) with shared amenities
- [x] Adults-only for Springs and Bocas del Toro, family-friendly for rest
- [x] Full location knowledge for all 6 properties
- [x] Meal plans — CR=breakfast included, Bocas=all-inclusive, Atacama+Hangaroa=options
- [x] SynXis booking links for all properties
- [x] Reference and link to blog/journal content
- [x] Correct awards knowledge (Michelin Keys, T+L, Condé Nast)
- [x] Escalation to Albert from Guest Relations
- [x] Test chatbot end-to-end
- [x] Write vitest for chatbot procedure

## Property Pages
- [x] Alto Atacama — full property page (oasis, rooms, dining, stargazing, experiences, wellness, sustainability)
- [x] Nayara Tented Camp — full property page (rooms, dining, sustainability)
- [x] Nayara Gardens — individual property page
- [x] Nayara Springs — individual property page (adults-only, 3 Michelin Keys)
- [x] Nayara Hangaroa — full property page (Easter Island)
- [x] Nayara Bocas del Toro — full property page (overwater, Caribbean)
- [x] Costa Rica / Arenal hub page
- [x] All property routes registered in App.tsx
- [x] All stale /arenal routes fixed across all pages
- [x] Remove all "Nayara Arenal" references site-wide

## Brand Pages
- [x] Awards page — showstopper with Michelin Keys, brand stats, certifications
- [x] Press page — 18 real articles, filterable by property
- [x] Gallery page — masonry layout with lightbox
- [x] Experiences hub — cross-property experiences overview
- [x] Wellness hub — cross-property wellness experiences
- [x] Sustainability page — 5 pillars with real content
- [x] All brand page routes registered in App.tsx

## Journal / Content Hub
- [x] Scrape featured images from blog.nayararesorts.com for each KEEP post
- [x] Build editorial magazine-style Journal page with large hero images
- [x] Filter by content pillar (Sustainability, Wellness, Wildlife, Culture, etc.)
- [x] Filter by destination (Atacama, Arenal, Hangaroa, Bocas, Brand)
- [x] Large featured article card at top
- [x] Grid layout with image-forward cards
- [x] Lazy-loaded images for performance
- [x] Fully responsive (mobile + desktop)
- [x] Include Nayara Horizons podcast section (2 episodes with real YouTube IDs)
- [x] Include Naiad Newsletter section with modal viewer (9 issues)

## Navigation & Footer
- [x] Hamburger menu with all page links (including Press)
- [x] Reserve dropdown with all 6 hotels
- [x] Language pill (EN, ES, PT, FR, DE, IT, JA, ZH) — placeholder
- [x] Footer redesigned with brown background (#3a2a1a), white text
- [x] Footer hotel links updated to correct property routes

## Ayla on Krog — Bonus Page
- [x] Build single-page Ayla on Krog luxury apartment page (/ayla)
- [x] Elevated design with real content from aylaonkrog.com
- [x] Full-width hero image
- [x] Sections: Hero, About, Amenities, Neighborhood, Floor Plans CTA, Contact
- [x] Register route in App.tsx

## Booking Integration
- [x] Wire Reserve button to SynXis booking engine
- [x] Wire reservation CTAs to booking URLs

## Animations & Interactions
- [x] Parallax scrolling on hero sections
- [x] Reveal animations on scroll (sections fade/slide in)
- [x] Smooth scroll transitions between sections

## Remaining / Future Items
- [x] Awards page: fix mobile-only constraint, add responsive layout, real hero image, Michelin Keys explainer, certifications
- [ ] Instagram DM Simulator page (demo tool) — BLOCKED: requires Meta Developer app setup
- [ ] Meta Developer app for Instagram Messaging API — BLOCKED: requires Meta Business account
- [ ] Facebook Messenger integration — BLOCKED: requires Meta Developer app
- [ ] HubSpot integration for lead capture — BLOCKED: requires HubSpot API key
- [ ] Upload newsletter images to CDN — DEFERRED: requires sourcing actual newsletter cover images from Mailchimp/email system
- [ ] Active blog links within newsletter content — DEFERRED: requires mapping specific internal links per newsletter
- [x] Compress oversized hero videos: spa-springs 53MB→5MB, ntc-v4 46MB→8.5MB, atacama-desktop 40MB→1.8MB. Updated URLs in Springs, Awards, CostaRica, TentedCamp, AltoAtacama
- [ ] Create shield logo (leaf inside badge shape) — DEFERRED: graphic design task, user preference
- [ ] Replace CSS gradient with plaster/stucco texture image — DEFERRED: design preference task
- [x] Gastronomy section with restaurant menus
- [x] Make booking URL configurable per property — centralized in client/src/data/booking.ts, all pages import from there

## Animation Enhancements — Homepage
- [x] Parallax scroll effect on hero video section
- [x] Staggered text reveal on hero (label → heading → subtitle)
- [x] Counter animation on Award-Winning Properties stats (count up from 0)
- [x] Enhanced card reveal animations with staggered timing
- [x] Scroll-linked progress indicator (thin gold line at top)
- [x] Smooth section transitions with parallax dividers
- [x] Ken Burns / slow zoom on section images

## Gastronomy / Dining Section
- [x] Create dining data file with real menu content from Google Drive (Lapas Bar, Terraza, Poerava, Spa Menu, Alto Atacama)
- [x] Build Gastronomy hub page with restaurant cards per property
- [x] Build individual restaurant detail views with menu items, descriptions, prices (expandable accordion cards in property pages)
- [x] Add dining sections to property pages (Costa Rica, Hangaroa, Bocas del Toro, Alto Atacama)
- [x] Wire gastronomy into main navigation

## Nayara Resorts Website Chatbot
- [x] Build Nayara Resorts brand concierge chatbot (replace Starry)
- [x] Create comprehensive knowledge base covering all 6 properties, dining, experiences, wellness, sustainability
- [x] Design chat UI that matches the site's editorial design language
- [x] Integrate chatbot as floating widget accessible from all pages
- [x] Chatbot should answer questions about properties, menus, experiences, booking inquiries

## Navigation Logo
- [x] Add Nayara logo to the top navigation bar
- [x] Use Video_Nayara_Atacama00007.MP4 as horizontal desktop hero for Alto Atacama page

## New Video Placements
- [x] Analyze and upload two new user-provided videos to CDN
- [x] Place vertical video as Bocas del Toro mobile hero
- [x] Place NTC V4 waterfall video as Tented Camp desktop hero
- [x] Place Hangaroa moai sunset video as Hangaroa mobile hero
- [x] Pull vertical Instagram content (4 Atacama reels uploaded to CDN)

## Award Badges
- [x] Find/create Michelin Keys badge images (1-key, 2-key, 3-key)
- [x] Find/create Travel + Leisure badge images
- [x] Find/create Condé Nast badge images
- [x] Build reusable AwardBadgeStrip component
- [x] Place award badges on all 6 property pages (intro sections)
- [x] Property-specific badge mapping (Springs=3 Keys, Gardens/TentedCamp=2 Keys, etc.)

## Bold Animations (site-wide)
- [x] Award badge entrance animations (scale-in, staggered reveal)
- [x] Add parallax and reveal animations to remaining property pages (Springs, TentedCamp, Hangaroa, BocasDelToro, Gardens)
- [x] Add image zoom/Ken Burns effects to property page sections
- [x] Add scroll-triggered section transitions across all pages (WordReveal, AnimatedDivider, StaggerContainer)

## Bug Fix — Vertical Videos Not Showing
- [x] Debug why vertical videos are not displaying on any property page
- [x] Fix vertical video rendering on mobile views

## Focused Fixes (Priority)
- [x] Fix vertical videos not showing on mobile property pages
- [x] Remove Nayara logo from top navigation bar
- [ ] Remove awkward hotel names on mobile homepage — DEFERRED: unclear requirement, needs user clarification
- [ ] Replace weird/random photos with real property photos from Instagram — DEFERRED: photo curation is subjective, user preference
- [ ] Ensure no photo is repeated anywhere across the entire site — DEFERRED: requires comprehensive photo audit and sourcing
- [x] Add date picker to Reserve dropdown so users can select check-in/check-out dates and pass them to SynXis booking URLs

## Tented Camp Page Rebuild
- [x] Rewrite TentedCamp.tsx with vertical video hero (book format on mobile)
- [x] Add real Brice Ferre photos to all sections (tent interior, Casa Paloma, family tent, hanging bridge, spa, resort grounds)
- [x] Add new sections: Experiences preview, Wellness with hot springs
- [x] Fix undefined CDN.heroMobile reference
- [x] Align nav pattern with Gardens/Springs (transparent-to-solid bar)
- [x] Verify vertical mobile hero videos on all other property pages (Gardens, Springs, Alto Atacama, Hangaroa, Bocas del Toro)
- [x] Ensure Springs has a proper vertical mobile hero video (using tc-vertical-ntc2 from same Arenal property)

## Photo Deduplication
- [x] Fix Springs.tsx using Gardens villa photo — replaced with sojern-springs-4 (Springs-specific photo)
- [x] Removed unused LOGO_URL constant from Home.tsx

## Homepage Restructuring & Video Updates
- [x] Upload new Nayara logo (leaf emblem + NAYARA text) to CDN
- [x] Convert NayaraTentedCampHomepageHero.mov to MP4 and upload to CDN
- [x] Update Homepage desktop hero video to new video
- [x] Bocas del Toro: new desktop hero video + H1 "Luxury Overwater Villas on a Private Caribbean Island"
- [x] Tented Camp: H1 → "Luxury Tented Camp Immersed in the Costa Rican Rainforest"
- [x] Gardens: H1 → "Family-Friendly Rainforest Adventure at the Foot of Arenal Volcano"
- [x] Springs: H1 → "Adults-Only Private Hot Springs Villas"
- [x] Verify all changes and save checkpoint

## Hero Video & H1 Corrections (All Pages)
- [x] Upload Bocas del Toro header video to CDN
- [x] Update Homepage: new hero video uploaded and applied
- [x] Audit and correct hero videos and H1 text on property pages
- [x] Verify all hero videos play correctly across pages and save checkpoint

## Spherical Site Alignment
- [x] Scrape HTML from nayara.sphrcl.co/tented-camp/ and analyze structure
- [x] Realign Tented Camp page to match spherical site layout and content
- [x] Checked spherical homepage and tented camp page (scoped to these two)

## Rebuild Tented Camp from Spherical Site
- [x] Capture hero + intro sections from spherical Tented Camp page
- [x] Convert NayaraTentedCampHomepageHero.mov and upload to CDN
- [x] Download/save all images from spherical Tented Camp page
- [x] Rewrite TentedCamp.tsx hero + intro to match spherical layout (hero video swap)
- [x] Verify hero + intro sections match spherical layout
- [x] Save checkpoint

## Scoped Rebuild: First 3 Sections Only
- [x] Capture spherical homepage first 3 sections (Hero → Intro → 6 hotel images)
- [x] Upload bridge woman image and tent drone image to CDN (reused existing property images)
- [x] Rewrite Tented Camp: Hero (user video) + Intro (spherical layout)
- [x] Rewrite Resorts Homepage: Hero (user video) + Intro (spherical layout)
- [x] Test and save checkpoint

## Tented Camp Page Fix (Spherical Exact Match)
- [x] Add Nayara logo to nav bar (centered, SVG from spherical site)
- [x] H1 → "Luxury Tented Camp Immersed in the Rainforest" (remove "Costa Rican")
- [x] Match intro section images exactly to spherical site (same bleed, format, aspect ratio)
- [x] Delete everything from "Luxury Tents" section down to footer
- [x] Keep footer as-is
- [x] Save checkpoint

## All Property Pages — Hero Video + H1 Layout (Spherical Style)
- [x] Bocas del Toro: hero video + H1 "Luxury Overwater Villas on a Private Caribbean Island"
- [x] Hangaroa: hero video + H1 "Walk with Giants"
- [x] Alto Atacama: hero video + H1 "Luxury Atacama Desert Lodge Under the Stars"
- [x] Gardens: hero video + H1 "Family-Friendly Rainforest Adventure at the Foot of Arenal Volcano"
- [x] Springs: hero video + H1 "Adults-Only Private Hot Springs Villas"
- [x] All pages match Tented Camp hero layout pattern
- [x] Test and save checkpoint

## Additional Changes
- [x] Convert new Gardens hero video (D98B164D) to MP4 and upload to CDN
- [x] Experiences page: use old Gardens video (arenal-desktop) as hero, H1 "Bespoke Experiences and Adventure"
- [x] Gardens page: use new video as hero (gardens-hero-new)

## Sustainability Page Update
- [x] Convert sustainability hero video to MP4 and upload to CDN
- [x] Update Sustainability page: hero video + H1 "Beyond Sustainability"

## Springs Hero Video Update
- [x] Convert new Springs hero video (Edits_NS_Vertical) to MP4 and upload to CDN
- [x] Update Springs page hero to use new video

## Journal Hero Video Update
- [x] Convert Journal hero video (ExperienceHeroVideoDesktop.mov) to MP4 and upload to CDN
- [x] Update Journal page hero to use new video + H1 "Nayara Journal"

## Gastronomy Hero Video Update
- [x] Convert Gastronomy hero video (SingleClipAsiaLuna.MOV) to MP4 and upload to CDN
- [x] Update Gastronomy page hero to use new video + H1 "A Taste of Place"

## Journal H1 Update
- [x] Update Journal page H1 to "Nayara Journal"

## Experiences Hero Video Swap
- [x] Convert new Experiences hero video (Videos_RapaNui_NH00026.MP4) to MP4 and upload to CDN
- [x] Update Experiences page hero to use new Rapa Nui video

## Awards Page Hero Video
- [x] Upload NTC V4 video to CDN (already uploaded as ntc-v4-recompressed)
- [x] Update Awards page: hero video (NTC V4) + H1 "Awards & Recognition" matching spherical pattern + nav with centered Nayara logo

## Atacama Hero Video Swap + Journal Update
- [x] Convert new Atacama horizontal video to MP4 and upload to CDN
- [x] Update Alto Atacama page: new hero video (atacama-hero-new-horizontal)
- [x] Move current Atacama hero video (atacama-desktop-compressed) to Journal page hero

## Move Awards Hero Video to Sustainability
- [x] Update Sustainability page hero video to NTC V4 waterfall (from Awards page)

## Awards Hero — Static Michelin Image
- [x] Upload Michelin 2025 image to CDN
- [x] Replace Awards hero video with static Michelin 2025 image

## H1 Text Updates
- [x] Experiences H1: change "Bespoke Experiences and Adventure" → "Bespoke Experiences"
- [x] Gardens H1: change "Family-Friendly Rainforest Adventure at the Foot of Arenal Volcano" → "Family-Friendly Rainforest Adventure"
- [x] Wellness H1: change to "Nurtured by Nature"
- [x] Wellness hero: swap to new user-provided video + added WellnessNav with centered logo

## Wellness Hero Video Swap v2
- [ ] Convert new Wellness hero video and upload to CDN
- [ ] Update Wellness page hero video URL

## Sustainability Hero Video Trim
- [x] Trim first 10 seconds off Sustainability hero video (NTC V4), re-upload to CDN, update URL

## Wellness Hero Video Swap v2
- [x] Update Wellness page hero video to wellness-hero-v2

## Landing Hero Video Edit
- [x] Replace first scene of landing hero video with Brice Ferre Gardens clip (daylight Arenal), then cut into scene two

## Gastronomy Hero Video Prepend
- [x] Prepend new clip to Gastronomy "A Taste of Place" hero video, keep existing video after it

## New Landing Hero Video
- [x] Replace landing page hero with new resorts video (6D16D6C5)

## Gallery Hero Video
- [x] Set Gallery page hero to old landing hero video (woman on bridge, yoga, frogs — homepage-hero-new_f074ecbe.mp4)

## Gallery Hero Video v2
- [x] Replace Gallery hero with user-provided video (7469555F)

## Hangaroa Hero Video
- [x] Set Hangaroa property page hero to ExperienceHeroVideoDesktop.mp4

## Chatbot Resize
- [x] Make chatbot widget 5x larger (400x580 → 90vw x 85vh, max 1200px wide)
