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
- [x] All 6 property pages with matching colors, format, and working Resorts button

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

## Chatbot Trigger Button Redesign
- [x] Make chatbot trigger button much larger with "Chat with us" label pill instead of small circle

## Embeddable Chatbot Widget
- [ ] Create /chat-embed page that renders only the chatbot (no nav, no background)
- [ ] Build embeddable JavaScript snippet for external sites
- [ ] Add CORS/iframe support on server for cross-origin embedding
- [ ] Test embed end-to-end
- [ ] Write developer handoff document with implementation instructions

## Chatbot Personality — Feel Like a Real Person
- [x] Remove suggested prompts / option buttons from chat welcome
- [x] Redesign welcome to feel like a person greeting you — just a chat bubble saying "Hi there! Welcome to Nayara. How can I help you today?"
- [x] Update system prompt to enforce short, conversational, human-like replies (no walls of text, no bullet lists)
- [x] Update system prompt: use hotel name as clickable markdown link instead of showing full URLs

## Chatbot Button Animation
- [x] Add subtle pulsing animation to Paloma chat button

## Paloma First Response — Guest Relations Option
- [x] Add option to connect with Albert from guest relations or provide contact info in first response

## Voice Dictation
- [x] Add Web Speech API voice input to chatbot
- [x] Microphone button with visual feedback (red pulse while listening)
- [x] Support for Chrome, Edge, Safari

## Synxis Booking Links
- [x] Find correct Synxis booking links for Nayara Alto Atacama
- [x] Find correct Synxis booking links for Nayara Arenal (Gardens, Springs, Tented Camp)
- [x] Find correct Synxis booking links for Nayara Hangaroa
- [x] Find correct Synxis booking links for Nayara Bocas del Toro
- [x] Update chatbot system prompt with correct booking links

## Chatbot UI Refinements
- [x] Reduce chatbot conversation area size (less oversized)
- [x] Add clear separator line above input bar so users know where to type
- [x] Keep beige background, just improve visual clarity of input area

## AwardWinningProperties Image Swap
- [x] Move Tented Camp image to top position (replace current top image)
- [x] Make Atacama image full-width ultra-wide horizontal below it
- [x] Revert the display:none on Tented Camp image from visual editor

## Chatbot Anti-Hallucination Update
- [x] Test Henry with restaurant question to see hallucination
- [x] Research actual restaurant names for all 6 Nayara properties
- [x] Add strict anti-hallucination rules to system prompt
- [x] Add verified restaurant data to system prompt

## Comprehensive Restaurant Data Scraping
- [x] Scrape nayaragardens.com/eat/ for full restaurant details
- [x] Scrape nayarasprings.com/eat/ for full restaurant details
- [x] Scrape nayaratentedcamp.com/eat/ for full restaurant details
- [x] Scrape nayaraaltoatacama.com/eat/ for full restaurant details
- [x] Scrape nayarahangaroa.com/eat/ for full restaurant details
- [x] Scrape nayarabocasdeltoro.com/eat/ for full restaurant details
- [x] Find and scrape any available menu PDFs
- [x] Update Henry's system prompt with all scraped restaurant data

## Astrophotography Media Placement
- [x] Upload timelapse video + 4 stills to CDN
- [x] Set timelapse video as Hangaroa page header
- [x] Place Moai Milky Way photo (photo 3) on Hangaroa page
- [x] Place rock pillar Milky Way photo (photo 1) on Atacama page
- [x] Place bus Milky Way photo (photo 2) on Atacama page
- [x] Place cacti Milky Way photo (photo 4) on Atacama page

## Nayara Leaf Logo
- [ ] Create transparent background version of Nayara leaf logo (white version)
- [ ] Create transparent background version of Nayara leaf logo (dark version)
- [ ] Upload transparent logos to CDN

## Nayara Leaf Logo & Astrophotography
- [x] Create transparent background Nayara leaf logo (white version for dark bg)
- [x] Create transparent background Nayara leaf logo (dark version for light bg)
- [x] Upload transparent logos to CDN
- [x] Place leaf logo at very top of main resorts/home page
- [x] Set timelapse video as Hangaroa page header
- [x] Place Moai Milky Way photo (photo 3) on Hangaroa page
- [x] Place rock pillar Milky Way photo (photo 1) on Atacama page
- [x] Place bus Milky Way photo (photo 2) on Atacama page
- [x] Place cacti Milky Way photo (photo 4) on Atacama page

## Newsletter Section Removal
- [x] Remove entire Monthly Newsletter / The Naiad section

## Logo Position Adjustment
- [x] Raise leaf logo to align with nav pills (top of screen)
- [x] Make leaf logo larger

## Logo Circle Styling
- [x] Encase leaf logo in a brown translucent circle matching the hamburger/reserve pill style with NAYARA text below

## Logo Text Removal
- [x] Remove NAYARA text below the logo circle (was baked into PNG, cropped image)

## Logo Size & Tented Camp Layout
- [x] Increase size of the leaf logo circle on home page
- [ ] Tented Camp page: make first image + H2 section full screen height (like resorts page hero)
- [ ] Tented Camp page: keep big horizontal image below the full-screen hero

## AwardWinningProperties Text Removal
- [ ] Remove "A Family of..." subtitle text from AwardWinningProperties section

## White Logo on White Background Bug
- [ ] Fix white logo + NAYARA text appearing on white/beige background (invisible)

## Logo Redesign - Match Nayara Gardens Style
- [x] Remove brown circle background from logo
- [x] Make logo touch the very top of the screen (no padding)
- [x] Use transparent background - just the leaf mandala over the video
- [x] Match the Nayara Gardens website header style

## Logo Final Style - Leaf + NAYARA text
- [ ] Add "NAYARA" text below the leaf mandala on the resorts home page (no property name)
- [ ] Style to match the Nayara Gardens header layout (leaf at top, text below)

## Button Style Update
- [x] Fix leftover code causing TypeScript errors in Home.tsx
- [x] Change hamburger button from brown to white with brown icon
- [x] Change Reserve button from brown to white with brown text
- [x] Match the Spherical/Nayara Gardens button style

## Logo Update — White Leaf + NAYARA Text
- [x] Update header logo: remove circle background, use white loose leaf mandala + "NAYARA" text in white, keep buttons white as-is
- [x] Upload sharp white leaf PNG to CDN and update header image
- [x] Language button should NOT follow user down the page (not fixed/sticky)
- [ ] Change nav pill buttons from white to warm gray (#f5f3f0) matching Spherical Nayara menu
- [ ] Fix language button: visible in hero but does NOT follow on scroll
- [ ] Change nav pill buttons from white to warm beige (#ece8e1) with existing brown text (#3a2a1a)
- [ ] Fix language button: visible in hero but does NOT follow on scroll

## Property Pages — Identical Template Standardization
- [x] Make all 6 property pages use exact same code as Home.tsx (only CDN URLs differ)
- [x] All pages share identical H1 "Luxury Resorts Rooted in Nature"
- [x] All pages share identical H2 "Award-Winning Properties Defined by Destination"
- [x] All pages share identical body text, nav, footer
- [x] AwardWinningProperties component accepts optional imageSrc prop for per-page second still
- [x] Fix broken Alto Atacama hero video (was .MP4 with 0 dimensions) — all pages now use working homepage hero video
- [x] Fix Gardens sloth image (was Instagram screenshot) — replaced with clean Fora Travel sloth photo
- [x] Fix Hangaroa image (was 98MB .tif) — converted to vertical-cropped JPEG
- [x] Verify all 6 property pages + homepage render identically with correct images
- [x] RESORTS dropdown navigation working on all pages

## RESORTS Button Fix
- [x] Fix RESORTS button position — must be at the top of the page (was fixed bottom-4 on mobile, changed to relative)
- [x] Fix RESORTS dropdown — must work (show property links and navigate)

## Mobile Nav Button Spacing
- [x] Hamburger, RESORTS, and RESERVE buttons evenly spaced at the top on mobile

## Menu Updates
- [x] Rename Journal to Blog in hamburger menu
- [x] Add Podcast below Blog in hamburger menu

## Nav Bar Updates
- [x] Add Story button to the top navigation bar
- [x] Add Rooms button to the top navigation bar

## Fix: Story and Rooms placement
- [x] Remove Story and Rooms from top nav bar buttons
- [x] Add Story and Rooms as categories inside the hamburger menu

## Nav: RESORTS position
- [x] Move RESORTS button next to hamburger on desktop only (leave mobile as is)

## Nav Scroll + Chatbot Fixes
- [x] On scroll: hide RESORTS and EN buttons, keep Hamburger and RESERVE fixed/sticky
- [x] Fix Chat with Henry bar showing two shades of beige
- [x] Remove robot background from chatbot
- [x] Regenerate all 6 property pages from updated Home.tsx template (scroll behavior + chatbot fixes synced)

## Beige Background Evaluation
- [x] Add two empty beige spacer sections below AwardWinningProperties to make background gradient visible

## Menu Text Update
- [x] Rename "The Nayara Story" to "Story" in hamburger menu

## Rooms Section (Below Horizontal Photo)
- [x] Add Rooms section with flipped two-column layout: vertical video placeholder (left), H3 "Rooms" (right)

## New Content Sections (Below Horizontal Photo)
- [x] Remove Rooms section (flipped layout)
- [x] Add 3 alternating two-column sections below horizontal photo (Section 1: image left/text right, Section 2: text left/image right, Section 3: image left/text right)
- [x] Add Sections 4, 5, 6 with same alternating two-column pattern below Section 3

## Typography Fix
- [x] Match H1 hero letter-spacing to H2 intro section letter-spacing
- [x] Change all white backgrounds in RESORTS dropdown tabs to light beige
- [ ] Make "Nayara Bocas del Toro" fit on one line in RESORTS dropdown (smaller font if needed)
- [x] Make the background gradient more pronounced (less subtle) — COMPLETE
- [x] Raise H2 header and body to top of image — COMPLETE

## Logo Update
- [x] Update Nayara logo to match provided design (bold sans-serif "NAYARA" text with leaf motif above)

## Privacy Policy (Future)
- [ ] Add privacy policy page/section (content provided — not urgent)
- [x] Logo finalized: leaf only (NAYARA text removed)

## Final Tweaks
- [x] Make "Nayara Bocas del Toro" fit on one line in RESORTS dropdown
- [x] Add more letter-spacing to H1 hero text

## Image Aspect Ratio Standards
- [x] Vertical images: 3:4 (editorial, premium feel)
- [x] Horizontal images: 16:9 (desktop), crop center to 9:16 (mobile)
- [x] Hero sections: 16:9 desktop + 9:16 mobile variant

## Image Content Rule
- [x] All images: Use only blue water and green jungle imagery (no grey, neutral, or other colors)

## Springs Page Update
- [x] Update Springs: NAYARA SPRINGS text in Montserrat Bold, H1 unique tagline, gradient matching Home
- [x] Update Springs: S1 vertical image (3:4 desktop, 9:16 mobile), H2 section matching Home
- [x] Update Springs: S2 horizontal bridge couple image
- [x] Add Springs S3: flipped layout (image left 3:4, rooms placeholder text right)
- [x] Add gradient spacers to Springs

## Bocas del Toro Page Update
- [x] Update Bocas: NAYARA BOCAS DEL TORO text in Montserrat Bold, H1 unique tagline, gradient matching Home
- [x] Update Bocas: S1 overwater pool image (IMG_6904), H2 section matching Home
- [x] Update Bocas: S2 aerial overwater villas image (IMG_6908)
- [x] Add gradient spacers to Bocas

## H1 Updates Across All Properties
- [ ] Gardens H1: "Family-Friendly Rainforest Adventure"
- [ ] Tented Camp H1: "Luxury Tented Camp Immersed in the Rainforest"
- [ ] Alto Atacama H1: "Atacama Desert Oasis Under the Stars"
- [ ] Bocas del Toro H1: "Adults-Only Overwater Villas on a Private Island"

## Tented Camp S1 Mobile Fix
- [ ] Tented Camp S1: full-screen on mobile with gradient and spacing at bottom

## Homepage Property Scroll
- [ ] Add Bocas del Toro to homepage property scroll/carousel

## Springs S1 Image Swap
- [x] Replace Springs S1 image with new hot springs photo (springs-s1-hot-springs)

## S3 Rooms Sections (All Property Pages)
- [x] Gardens S3: casita pool image left, Rooms text right
- [x] Tented Camp S3: tent pool image left, Rooms text right
- [ ] Bocas del Toro S3: needs image (placeholder for now)
- [ ] Alto Atacama S3: needs image (placeholder for now)

## Hangaroa S1/S2 Image Swap
- [x] Hangaroa S1: Rapa Nui warrior with torch (3:4 in H2 section)
- [x] Hangaroa S2: Moai sunset silhouette (horizontal)

## Bocas S1/S3 Image Swap
- [x] Bocas S1: new aerial overwater pool image (replaces IMG_6904)
- [x] Bocas S3: use old S1 (IMG_6904 overwater pool villa) as rooms section image

## Springs S3 Image Swap
- [x] Replace Springs S3 with new robe/canopy bed image
## Bocas S2 Image Swap  
- [x] Replace Bocas S2 with aerial villas walkway image

## Mobile Layout Restructure (S1 before text)
- [x] Gardens mobile: hero → beige sliver → S1 full-width vertical → H2 text → S2 horizontal
- [x] Tented Camp mobile: hero → beige sliver → S1 full-width vertical → H2 text → S2 horizontal
- [x] Springs mobile: hero → beige sliver → S1 full-width vertical → H2 text → S2 horizontal

## Spacing Consistency Fix
- [x] Fix spacing between S2 and S3 on Springs (too much space)
- [x] Ensure consistent spacing between all sections across all property pages (Springs, Gardens, TentedCamp, BocasDelToro)

## Mobile Layout Restructure (Remaining Pages)
- [x] Bocas del Toro mobile: hero → beige sliver → S1 full-width vertical → H2 text → S2 horizontal
- [x] Alto Atacama mobile: hero → beige sliver → S1 full-width vertical → H2 text → S2 horizontal
- [ ] Hangaroa mobile: hero → beige sliver → S1 full-width vertical → H2 text → S2 horizontal

## NAYARA [PROPERTY] Text (Remaining Pages)
- [ ] Add NAYARA GARDENS text to Gardens page
- [ ] Add NAYARA SPRINGS text to Springs page
- [ ] Add NAYARA ALTO ATACAMA text to Alto Atacama page
- [ ] Add NAYARA BOCAS DEL TORO text to Bocas del Toro page

## Ayla on Krog Hero Video
- [x] Pull hero video from aylaonkrog.com and use it on our Ayla page
- [x] Change Ayla H1 to "Life on the Beltline"

## Room Section Mobile Text Centering
- [x] Tented Camp: center H3 and body text in room sections on mobile (match H2 section centering)
- [x] Gardens: center room section text on mobile (px-6 md:px-0)
- [x] Springs: center room section text on mobile (px-6 md:px-0)
- [x] Bocas del Toro: center room section text on mobile (px-6 md:px-0)
- [x] Audit all other property pages for same left-aligned room section text on mobile and fix

## Chat with us Bubble Update
- [x] Update Chat with us bubble size to match top nav buttons (w-10 h-10)
- [x] Change text from "Chat with us" to "Chat" (capitalize first letter only, fits in bubble)

## Home Page SEO Fixes
- [x] Add proper page title (30-60 characters) to home page - "Nayara Resorts | Luxury Destinations" (38 chars)
- [x] Add meta description (50-160 characters) to home page - "Luxury resorts in Costa Rica, Chile, Easter Island, and Panama. Award-winning properties rooted in nature with wellness, experiences, and bespoke adventures." (158 chars)
- [x] Add keywords meta tag to home page - luxury resorts, Costa Rica, Arenal Volcano, hot springs, desert resort, Easter Island, Panama Caribbean, bespoke experiences

## Chat Bubble and Nav Button Updates
- [x] Revert Chat bubble to pill shape (wider, not narrow) with "Chat with us" text
- [x] Update top nav buttons to capitalize only first letter (Language: "English", menu items: "Story", "Rooms", "Experiences", "Wellness", "Sustainability", "Awards", "Journal")
