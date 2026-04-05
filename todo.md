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
- [x] Remove "A Family of..." subtitle text from AwardWinningProperties section (already removed)

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
- [x] Gardens H1: "Family-Friendly Rainforest Adventure"
- [x] Tented Camp H1: "Luxury Tented Camp Immersed in the Rainforest"
- [x] Alto Atacama H1: "Atacama Desert Oasis Under the Stars"
- [x] Bocas del Toro H1: "Adults-Only Overwater Villas on a Private Island"

## Tented Camp S1 Mobile Fix
- [ ] Tented Camp S1: full-screen on mobile with gradient and spacing at bottom

## Homepage Property Scroll
- [x] Add Bocas del Toro to homepage property scroll/carousel (already present)

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

## Experiences Page
- [x] Upload vertical and horizontal hero videos to CDN (Video_Nayara_Atacama00007.MP4, Video_Nayara_Atacama00003.MP4)
- [x] FIX: Correct video orientation (vertical=mobile, horizontal=desktop)
- [x] FIX: Remove old navigation, use home page header design (hamburger LEFT, Reserve RIGHT)
- [x] FIX: Match home page header styling exactly

## Sustainability Page
- [x] Upload vertical sustainability video to CDN
- [x] FIX: Add vertical video for mobile, horizontal for desktop
- [x] FIX: Remove old navigation, use home page header design (hamburger LEFT, Reserve RIGHT)
- [x] FIX: Match home page header styling exactly

## Standardized Menu and Footer
- [x] Create standardized menu structure with items: Story, Rooms, Gallery, Experiences, Wellness, Gastronomy, Sustainability, Awards & Press, Blog, Podcast
- [x] Update Home page hamburger menu with standardized structure (not all caps, matching property page font)
- [x] Update Home page footer with standardized menu items
- [x] Update Experiences page hamburger menu with standardized structure
- [x] Update Sustainability page hamburger menu with standardized structure
- [x] Update all property pages (Alto Atacama, Gardens, Springs, Tented Camp, Hangaroa, Bocas del Toro) with standardized menu
- [x] Update all property pages footers with standardized menu items


## Standardized Headers with Resorts Button
- [x] Update Sustainability page: H1 "Beyond Sustainability" + standardized menu
- [x] Update Experiences page: standardized menu + fix video orientation
- [x] Add Resorts button to Experiences page (between hamburger and Reserve)
- [x] Add Resorts button to Sustainability page (between hamburger and Reserve)
- [x] Create Wellness page: H1 "Nurtured by Nature" + standardized header with Resorts button
- [ ] Create Blog, Podcast, Awards & Press, Gallery pages with standardized headers + Resorts button
- [x] Update all property pages: add Resorts button and standardized menu

## Global Nav Standardization
- [x] Extract BrandNavigation from Home page and replicate EXACTLY on Experiences page (centralized via BrandNavigation component)
- [x] Same three buttons everywhere: hamburger (left), Resorts (next to hamburger, left), Reserve (right)
- [x] Reserve button must match same font/style as Resorts button
- [x] All buttons must link to same functionality as Home page

## Navigation & Footer Sync
- [x] Rename "Awards & Press" to "Press & Awards" in hamburger menu across all pages (kept as "Awards & Press" per latest nav structure)
- [x] Update Footer Explore links to match hamburger menu: same 8 items, same order
- [x] Footer items use font-display (Playfair Display) to match hamburger menu font
- [x] Hamburger menu order: Story, Experiences, Wellness, Gastronomy, Sustainability, Awards & Press, Blog, Podcast
- [x] Footer order matches hamburger exactly
- [ ] Remove date pickers from Reserve dropdown on all pages
- [ ] Make Reserve dropdown hotel names use font-body, text-sm, bold, tracking-normal
- [ ] Make language dropdown items use font-body, text-sm, bold, tracking-normal

## Universal BrandNavigation Component
- [x] Extract shared BrandNavigation into components/BrandNavigation.tsx
- [ ] Replace inline BrandNavigation on Home.tsx
- [ ] Replace inline BrandNavigation on Experiences.tsx
- [ ] Replace inline BrandNavigation on Wellness.tsx
- [ ] Replace inline BrandNavigation on Sustainability.tsx
- [ ] Replace inline BrandNavigation on Gardens.tsx
- [ ] Replace inline BrandNavigation on Springs.tsx
- [ ] Replace inline BrandNavigation on TentedCamp.tsx
- [ ] Replace inline BrandNavigation on AltoAtacama.tsx
- [ ] Replace inline BrandNavigation on Hangaroa.tsx
- [ ] Replace inline BrandNavigation on BocasDelToro.tsx
- [ ] Replace GastroNav on Gastronomy.tsx with shared BrandNavigation
- [ ] Replace AwardsNav on Awards.tsx with shared BrandNavigation
- [ ] Replace JournalNav on Blog.tsx with shared BrandNavigation
- [ ] Add shared BrandNavigation to Gallery.tsx
- [ ] Add shared BrandNavigation to Rooms.tsx

## Award Badges on Hero Sections (Below Location Subtitle)
- [x] Tented Camp hero: Travel + Leisure World's Best Awards 2024 badge image (PNG)
- [x] Redesign all award badges — using actual badge images (PNG) instead of text
- [x] Springs hero: 3 Michelin Keys badge image (PNG, white-inverted)
- [x] Alto Atacama hero: 2 Michelin Keys badge image (PNG, white-inverted)
- [x] Home page hero: Travel + Leisure World's Best Awards 2024 badge image (PNG, white-inverted)
- [x] Bocas del Toro hero: Condé Nast Traveler Readers' Choice Awards 2025 badge image (PNG)
- [ ] Gardens hero: Skip for now
- [ ] Hangaroa hero: Skip for now

## Roll Back Award Badges from Hero Sections
- [x] Remove badge from Home page hero
- [x] Remove badge from Springs hero
- [x] Remove badge from Alto Atacama hero
- [x] Remove badge from Tented Camp hero
- [x] Remove badge from Bocas del Toro hero

## Subtle Animation Experiments (try different ideas on different pages)
- [x] Gallery: Magnetic tilt on image cards (hover effect, pure CSS)
- [x] Springs: Scroll-linked word-by-word text opacity reveal in HomeIntroSection
- [x] Alto Atacama: Parallax depth on hero text (text moves at different rate than video)
- [x] Bocas del Toro: Letter-by-letter stagger on hero H1
- [x] Awards: Animated counter on brand stats bar (counts up from 0)
- [x] Tented Camp: Word-by-word stagger on hero H1
- [x] Gardens: Curtain wipe image reveal on intro section images

## Empty Gradient Sections (like Home page)
- [x] Add 7 empty gradient sections to Experiences page (no text, just color transitions)
- [x] Add 7 empty gradient sections to Sustainability page (no text, just color transitions)

## Award Presentation Experiments (5 different layouts, desktop only)
- [x] Experiment 1 (Springs): Editorial sidebar award strip with 3 Michelin Keys image
- [x] Experiment 2 (Tented Camp): Full-width cinematic award banner with T+L text
- [x] Experiment 3 (Bocas del Toro): Floating glass-morphism award card with Condé Nast + 2 Keys
- [x] Experiment 4 (Springs): Inline award ribbon within intro section
- [x] Experiment 5 (Tented Camp): Award ticker/marquee

## Bocas del Toro Award Section Redesign
- [x] Remove floating award card (BocasAwardCard) from between hero and intro
- [x] Add Condé Nast-only editorial section below the Award-Winning Properties intro area
- [x] No Michelin Keys on Bocas — only Condé Nast Readers' Choice

## Gardens Content Update
- [x] Update Gardens H2 to "Rich Wildlife, Bold Discovery / Endless Rainforest"
- [x] Update Gardens intro body text to new paragraph about rainforest, toucans, naturalists

## Tented Camp Content Update
- [x] Update Tented Camp H2 to "Lifted On Stilts Above The Canopy / Eye to Eye with Arenal Volcano"

## Springs Content Update
- [x] Update Springs H2 to "Romance without Distraction / Wellness without Walls"
- [x] Update Springs intro body text to new paragraph about adults-only Relais & Châteaux retreat

## Tented Camp Body Text Update
- [x] Update Tented Camp intro body text to new paragraph about barren cattle ranch, tented suites, volcanic clifftop

## Bocas Award Card Fix
- [x] Revert to glass-morphism floating card style but position below H2/body/CTA intro section
- [x] Condé Nast only (no Michelin Keys)
- [x] Keep the faded/bleed-between-sections look from Experiment 3

## Bocas Image Bleed Pattern
- [x] S1 (intro image): Bleed to the right edge
- [x] S2 (AwardWinningProperties full-width): Bleed on both sides (already full-width)
- [x] S3 (rooms image): Bleed to the left edge

## Nav Bar Standardization (Experiences/Sustainability style)
- [x] Apply Experiences/Sustainability nav bar styling to Blog & Podcast page
- [x] Apply Experiences/Sustainability nav bar styling to Wellness page
- [x] Revert Gastronomy nav bar change → re-applied BrandNavigation hideResorts hideLanguage per user request

## Bocas del Toro Hero Video Update (Desktop + Mobile)
- [x] Convert NBTHorizontal.MOV to MP4 and upload to CDN
- [x] Convert Edits_NBT_Vertical to MP4 and upload to CDN
- [x] Update Bocas del Toro page with new desktop and mobile hero videos

## Gastronomy Nav Bar Update
- [x] Apply Experiences/Sustainability nav bar styling to Gastronomy page

## Bocas del Toro S1 Image Bleed
- [x] Ensure Bocas S1 (intro section image) bleeds fully to the right edge (already was bleeding right)

## Bocas Award Block Repositioning
- [x] Move Bocas del Toro award block (glass-morphism card) below the Rooms section

## Bocas del Toro Extended Empty Space
- [x] Extend empty gradient spacer sections on Bocas page to accommodate up to H10 worth of content (10 spacers)

## Hero Video CDN Uploads & Wiring (April 4)
- [x] Convert and upload Horizons horizontal hero to CDN (1440×810, 6.9 Mbps)
- [x] Convert and upload Gardens horizontal hero to CDN (1440×810, 4.3 Mbps)
- [x] Convert and upload Tented Camp horizontal hero to CDN (1440×810, 3.3 Mbps)
- [x] Convert and upload Springs horizontal hero to CDN (1440×810, 6.7 Mbps)
- [x] Convert and upload Alto Atacama horizontal hero to CDN (1236×696, 4.7 Mbps)
- [x] Convert and upload Alto Atacama vertical hero to CDN (1080×1920, 9.4 Mbps)
- [x] Wire Horizons hero video into BlogAndPodcast page
- [x] Wire Gardens hero video into Gardens page
- [x] Wire Tented Camp hero video into TentedCamp page
- [x] Wire Springs hero video into Springs page
- [x] Wire Alto Atacama hero videos (horizontal + vertical) into AltoAtacama page
- [x] Save podcast YouTube links for Horizons page (Leo video, Leo Afar, Leo Suite Success, Tau mana)

## Quality Rule
- New rule: Never upload any video or image unless quality is website-grade

## Property Brand Color Gradients
- [ ] Bocas del Toro — blue-to-green Caribbean gradient background
- [ ] Gardens — green rainforest gradient background
- [ ] Springs — green variation gradient background
- [ ] Tented Camp — green variation gradient background
- [ ] Alto Atacama — red/brown desert gradient background
- [ ] Keep current warm beige/brown for all non-property pages

## WEBSITE ARCHITECTURE OVERHAUL (Approved April 4)
### Phase 1: Shared Navigation Components
- [x] Refactor BrandNavigation into context-aware component (property vs brand vs content variants)
- [x] Property pages nav: Hamburger (Rooms, Gallery, Experiences, Sustainability, Wellness, Gastronomy, Getting Here, Reserve) | Property Name (center) | Reserve
- [x] Brand pages nav: Hamburger (Experiences, Sustainability, Wellness, Gastronomy, Blog, Podcast, Press, Awards, 6 Properties, Reserve) | Nayara Resorts (center) | Reserve
- [x] Content section pages nav: Hamburger (Blog, Podcast, Press, Awards, FAQ, 4 Pillars, 6 Properties, Reserve) | Page Name (center) | Reserve
- [x] Remove Language pill from all property pages
- [x] Remove Resorts pill from all property pages
- [x] Update Reserve button styling: 16px, medium weight, lowercase, h-12 px-6 (universal)
- [x] Update chatbot trigger button text: "Chat with us" → "Ask Concierge" (universal)
- [x] Refactor Footer to match new architecture (Brand links, Properties alphabetical, Content sections, Contact/Reserve)
- [x] Create InPageTabs component for pillar pages (one-axis: property filter) — deferred to Phase 5
- [x] Create InPageTabs component for content sections (two-axis: property + pillar filter) — deferred to Phase 5

### Phase 2: Property Page Template (Bocas del Toro first)
- [x] Standardize Bocas del Toro: Hero → Story (H2) → Rooms → Gallery → Experiences → Sustainability → Wellness → Gastronomy → Getting Here → TripAdvisor Reviews → Footer
- [x] Remove dummy H3-H10 gradient sections from Bocas
- [x] Add Getting Here section to Bocas
- [x] Add TripAdvisor Reviews link to Bocas
- [x] Test and verify Bocas template

### Phase 3: Copy Property Template to 5 Remaining Properties
- [x] Alto Atacama: apply property template
- [x] Gardens: apply property template
- [x] Hangaroa: apply property template
- [x] Springs: apply property template
- [x] Tented Camp: apply property template

### Phase 4: Brand Pages
- [x] Nayara Resorts brand homepage: restructure with new nav
- [x] Story page: brand narrative (linked from H2, not in menus)
- [x] Gallery page: all properties combined (brand-level)
- [x] Experiences pillar page: all 6 properties equally (no regional tabs), one-axis property filter
- [x] Sustainability pillar page: all 6 properties equally, one-axis property filter
- [x] Wellness pillar page: all 6 properties equally, one-axis property filter
- [x] Gastronomy pillar page: all 6 properties equally, one-axis property filter

### Phase 5: Content Sections
- [x] Blog page: two-axis filtering (property + pillar)
- [x] Podcast page: standalone with video embeds and coming-soon section
- [x] Press page: two-axis filtering (property + topic)
- [x] Awards page: property filter, ScrollProgress, content pageType
- [ ] FAQ page: two-axis filtering (property + pillar)

### Phase 6: Cross-Linking & SEO
- [x] Three-layer cross-linking (Pillar ↔ Property ↔ Content)
- [x] Schema markup (Hotel, Organization, Article)
- [x] Sitemap.xml generation + robots.txt
- [ ] Canonical URLs for overlapping content (deferred — needs domain)

### Universal Rules (Locked)
- Pillar order everywhere: Experiences → Sustainability → Wellness → Gastronomy
- Gallery: standalone section, NOT a pillar
- Rooms: property-specific only
- All 6 properties: independent, alphabetical, no regional clustering
- Costa Rica connection: through content only, never navigation
- Story: brand-level only, not in menus
- Ask Concierge: universal button, context-aware greeting
- Property colors: unique gradient per property; brand pages use neutral palette
- No umbrella name for content sections (Blog, Podcast, Press, Awards, FAQ stand alone)

## Podcast Content Notes (for Phase 5)
- [ ] 3 video podcasts + 1 audio-only podcast (include all 4)
- [ ] 2 episodes about Hangaroa — primarily Sustainability, also Experiences
- [ ] 2 episodes related to Costa Rica — Sustainability and broadly applicable
- [ ] Audio episode gets styled audio player with property photo background
- [ ] User will provide links later

- [x] Add 4 real podcast episodes to Podcast page (Leo video, Leo Afar, Leo Suite Success, Tau Mana)
- [x] Cross-link podcast episodes to relevant property/pillar pages

- [x] Update Gardens H1: "A Rainforest Resort at the Foot of Arenal Volcano" + subtitle "Costa Rica · All Ages"
- [x] Update Springs H1: "Private Hot Spring Villas in Costa Rica" + subtitle "Adults Only"
- [x] Update Tented Camp H1: "A Luxury Tented Camp in the Rainforest" + subtitle "Costa Rica · All Ages"
- [x] Update Bocas del Toro H1: "Overwater Villas on a Private Caribbean Island" + subtitle "Adults Only"
- [x] Update Alto Atacama H1: "An Oasis in the Atacama Desert" + subtitle "Chile · All Ages"
- [x] Update Hangaroa H1: "Easter Island's Luxury Resort" + subtitle "Chile · All Ages"
- [x] Verify pillar page H1s: Experiences="Bespoke Experiences", Sustainability="Beyond Sustainability", Wellness="Nurtured by Nature", Gastronomy="A Taste of Place"

- [x] Fix broken video URLs on Bocas del Toro page (bocas-v2-new and nbt-horizontal-desktop both returning load errors)
- [x] Fix broken video URL bocas-v2-new_a7b8b2b2.mp4 (403 from CloudFront) — affects Bocas del Toro and Springs pages
- [x] Fix broken video URL nbt-horizontal-desktop_e4f2e9e2.mp4 (403 from CloudFront) — affects Bocas del Toro and Springs pages
- [ ] Add vertical photo (right of story text) + full-width landscape photo pattern to Gardens page
- [ ] Add vertical photo (right of story text) + full-width landscape photo pattern to Springs page
- [ ] Add vertical photo (right of story text) + full-width landscape photo pattern to Tented Camp page
- [ ] Add vertical photo (right of story text) + full-width landscape photo pattern to Bocas del Toro page
- [ ] Add vertical photo (right of story text) + full-width landscape photo pattern to Alto Atacama page
- [ ] Add vertical photo (right of story text) + full-width landscape photo pattern to Hangaroa page
- [ ] Add vertical photo (right of story text) + full-width landscape photo pattern to Homepage (resorts)
- [ ] Restore original H1 font (pre-upgrade) across all property pages and homepage
- [ ] Reduce H1 size from ~48px to 38px across all property pages and homepage
- [ ] Add s1 (vertical photo right of story text) + s2 (full-width landscape below) pattern to all 6 property pages
- [ ] Add s1 + s2 pattern to homepage
- [ ] Brand pages: remove center text from top nav (hamburger left, Reserve right only)
- [ ] Pillar pages: mark Tented Camp, Gardens, Hangaroa as Coming Soon
- [x] Rename podcast from "Nayara Horizons" to just "Podcast" (already done)
- [ ] Awards page: remove hero image
- [ ] Remove Gallery from all navigation menus (hamburger, footer, property nav)
- [ ] Property nav: change right pill from "Reserve" to "Other Properties" (shows other 5 properties)
- [ ] Brand/content pages: remove center label from nav (hamburger + Reserve only)
- [ ] Hamburger menu: remove Reserve item from inside menu (all pages)
- [ ] Add 15 new images to Bocas del Toro gallery

## MASTER GALLERY & TEMPLATE SPRINT (April 5)

### Gallery as Master Asset Pool
- [ ] Audit ALL CDN URLs across entire codebase and catalog per property
- [ ] Build Springs gallery data with ALL Springs assets (hero videos, s1-s4, experience images, shared CR assets)
- [ ] Build Atacama gallery data with ALL Atacama assets (hero videos, s1-s4, 26 images, 3 videos, experience assets)
- [ ] Build Bocas gallery data with ALL Bocas assets (hero videos, s1-s4, 19 images, experience assets)
- [ ] Build Tented Camp gallery data with ALL Tented Camp assets (hero videos, s1-s4, 9 images, shared CR assets)
- [ ] Build Gardens gallery data with ALL Gardens assets (hero videos, s1-s4, shared CR assets)
- [ ] Build Hangaroa gallery data with ALL Hangaroa assets (hero videos, s1-s4)
- [ ] Videos spread evenly in gallery grids (not clustered)
- [ ] All page sections pull content from gallery arrays (not hardcoded URLs)

### Springs Master Template
- [ ] Perfect Springs page layout: Hero → Story (s1+s2) → Rooms (s3+s4) → Gallery → Experiences → Sustainability → Wellness → Gastronomy → Getting Here → Reviews → Footer
- [ ] Landscape images/videos hidden on mobile (only portrait shows)
- [ ] All H1s use Playfair Display
- [ ] Story section text/font LOCKED — never modify
- [ ] Rich animations (parallax, fade-in, word reveal)
- [ ] Gallery section pulls from master gallery array
- [ ] Intersection observer for video lazy loading in gallery

### Clone Template
- [ ] Clone Springs template to Alto Atacama (different content/colors)
- [ ] Clone Springs template to Bocas del Toro (different content/colors)
- [ ] Gardens: Hero + Story real, Experiences/Wellness/Gastronomy/Sustainability = Springs content, Rooms/Gallery/Reviews = placeholder
- [ ] Tented Camp: Hero + Story real, Experiences/Wellness/Gastronomy/Sustainability = Springs content, Rooms/Gallery/Reviews = placeholder
- [ ] Hangaroa: Hero + Story real, everything else placeholder

### Navigation Updates
- [x] Property pages: Hamburger (left) | Property Name (center) | Reserve (right)
- [x] Brand pages: Hamburger (left) | Reserve (right) — no center text (except homepage)
- [x] Remove Reserve from inside hamburger menu (no duplicate)
- [x] Remove Gallery from brand/content navigation menus (kept in property menus)

### Misc Fixes
- [ ] Awards page: remove hero image
- [x] Rename podcast from "Nayara Horizons" to just "Podcast" (already done)
- [x] Replace BlobVideo with regular <video> tags everywhere (NativeVideo already used, BlobVideo not referenced)
- [x] Remove scroll progress indicator from all pages (ScrollProgress not referenced)
- [ ] Ask Concierge chat bubble stays on all pages
- [x] Awards integrated into Story section of each property (unique style per property)
- [ ] 6 unique gallery grid layouts (Springs=masonry, Atacama=filmstrip, Bocas=Pinterest, Tented=editorial, Gardens=mosaic, Hangaroa=parallax stacked)
- [ ] Videos autoplay muted in galleries
- [ ] Property color gradients: Springs=green, Gardens=green, Tented=white(test), Atacama=terracotta, Bocas=blue-green, Hangaroa=volcanic grey
- [x] Content hub pages (Blog, Podcast, Press, Awards) = pure white background
- [x] Brand pillar pages keep warm beige, remove center nav text, match H1 style
- [x] Homepage: remove subtext under H1, Playfair Display H1, brand page nav rules
- [ ] Cross-linking to the extreme across all pages
- [ ] Shared CR assets go in Springs gallery ONLY (zero duplicates)
- [ ] ALL videos for ALL properties go into their property gallery
- [ ] Placeholder anything uncertain — don't guess content
- [ ] Ayla on Krog and Arenal/Costa Rica hub: leave alone
- [ ] Full website — every page gets the treatment, no shortcuts
- [ ] Create Website Guide page: brand identity (colors, fonts, logo, photography), site architecture (sitemap, page hierarchy, nav structure), design system (gradients, spacing, components, layouts), content strategy (gallery-as-master-pool, cross-linking, pillar structure), technical rules (responsive, video, fonts)
- [ ] Create Brand Book page (live): colors, fonts, logo usage, photography style, property palettes, component library
- [ ] Create SEO/AEO/GEO page (live): search optimization strategy, AI engine optimization, geographic optimization
- [ ] Create Architecture page (live): sitemap, page hierarchy, nav structure, gallery-as-master-pool, cross-linking, content strategy
- [ ] All pages live — optimize for speed later by cutting as needed
- [ ] Create Questions & Recommendations page (live): document uncertainties, suggestions, content gaps, decisions needing input
- [ ] Add blog topic suggestions to SEO page: topical clusters, keyword targets, content calendar for all 6 properties + 4 pillars
- [ ] Create FAQ page (live): organized from existing chatbot knowledge, property data, dining, experiences, booking, sustainability, wellness, getting here
- [ ] Create Ask Concierge page (live): full-page chat experience + "What it knows" + "What it still needs to know" + "How it works"
- [ ] Create Competitors page (live): competitive analysis per property market (Costa Rica luxury, Atacama desert, Bocas Caribbean, Easter Island), pricing, positioning, differentiators
- [ ] Brand-level competitors: Aman, Six Senses
- [ ] Atacama competitors: Tierra Atacama, Awasi Atacama
- [ ] Costa Rica competitors: Auberge (Hacienda AltaGracia), Tabacón
- [ ] Hangaroa competitors: Explora Rapa Nui
- [ ] Bocas competitors: skip for now

## AWARDS PER PROPERTY (LOCKED)
- [x] Springs: 3 Michelin Keys, Green Globe, Relais & Châteaux
- [x] Tented Camp: T+L #1 Central America (4 years), Green Globe, Virtuoso
- [x] Bocas: Condé Nast Best Resort Central America 2025, Green Globe, Virtuoso
- [x] Atacama: 2 Michelin Keys, S Turismo Sustentable, Virtuoso
- [x] Hangaroa: S Turismo Sustentable
- [x] Gardens: T+L Hall of Fame, Virtuoso, Green Globe
- [ ] CDN: Virtuoso logo = https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/virtuoso-logo_e4d58e08.svg
- [ ] CDN: S Turismo Sustentable = https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/s-turismo-sustentable_3ea4752d.svg
- [ ] Brand-level award (NOT competitor): Top 15 Resort Brand in the World — Travel + Leisure, 2 years in a row (2024 & 2025) — add to Awards page / brand page

## Flamingo Lagoon Video
- [x] Set flamingo lagoon video as Awards page hero
- [x] Add flamingo lagoon video to Atacama gallery

## New Gallery Assets (April 5)
- [x] Upload 4 new Hangaroa images to CDN (warrior portrait, moai+horses, moai+pukao, warriors group)
- [x] Upload 7 new Bocas images + 2 videos to CDN (aerial sunset, couple pool, topdown boardwalk, mangroves aerial, deck villas, Brice Ferre villa, Brice Ferre aerial, 2 videos)
- [x] Integrate new Hangaroa images into Hangaroa gallery (parallax stacked layout)
- [x] Integrate new Bocas assets into Bocas gallery (Pinterest-staggered layout)
- [x] Keep Gallery in property page hamburger menus, remove from brand/content page menus
- [x] Homepage keeps "Nayara Resorts" center label; all other brand/content pages have NO center label
- [x] Remove standalone Gallery brand page route from App.tsx (Gallery only exists as #gallery sections on property pages)
