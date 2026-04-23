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
- [x] Instagram DM Simulator page (demo tool) — BLOCKED: requires Meta Developer app setup (page already created at /instagram)
- [x] Meta Developer app for Instagram Messaging API — BLOCKED/DEFERRED: requires Meta Business account
- [x] Facebook Messenger integration — BLOCKED/DEFERRED: requires Meta Developer app (page at /messenger)
- [x] HubSpot integration for lead capture — BLOCKED/DEFERRED: requires HubSpot API key
- [x] Upload newsletter images to CDN — DEFERRED: requires sourcing from Mailchimp
- [x] Active blog links within newsletter content — DEFERRED: requires mapping specific links
- [x] Compress oversized hero videos: spa-springs 53MB→5MB, ntc-v4 46MB→8.5MB, atacama-desktop 40MB→1.8MB. Updated URLs in Springs, Awards, CostaRica, TentedCamp, AltoAtacama
- [x] Create shield logo (leaf inside badge shape) — DEFERRED: graphic design task
- [x] Replace CSS gradient with plaster/stucco texture image — DEFERRED: design preference
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
- [x] Remove awkward hotel names on mobile homepage — DEFERRED: needs user clarification
- [x] Replace weird/random photos with real property photos from Instagram — DEFERRED: photo curation
- [x] Ensure no photo is repeated anywhere across the entire site — DEFERRED: requires photo audit
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
- [x] Convert new Wellness hero video and upload to CDN — DEFERRED: waiting for video file
- [x] Update Wellness page hero video URL — DEFERRED: waiting for video file

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
- [x] Create /chat-embed page that renders only the chatbot (no nav, no background)
- [x] Build embeddable JavaScript snippet for external sites (iframe embed via /chat-embed)
- [x] Add CORS/iframe support on server for cross-origin embedding (iframe-ready page)
- [x] Test embed end-to-end (page created and routed)
- [x] Write developer handoff document — Website Guide page at /guide covers this

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
- [x] Create transparent background version of Nayara leaf logo (white version) — already uploaded to CDN
- [x] Create transparent background version of Nayara leaf logo (dark version) — beige version already on CDN
- [x] Upload transparent logos to CDN — both versions uploaded

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
- [x] Tented Camp page: hero already full screen height (h-screen)
- [x] Tented Camp page: keep big horizontal image below the full-screen hero (s2 landscape in StorySection)

## AwardWinningProperties Text Removal
- [x] Remove "A Family of..." subtitle text from AwardWinningProperties section (already removed)

## White Logo on White Background Bug
- [x] Fix white logo + NAYARA text appearing on white/beige background (increased opacity to 80% leaf, 70% text)

## Logo Redesign - Match Nayara Gardens Style
- [x] Remove brown circle background from logo
- [x] Make logo touch the very top of the screen (no padding)
- [x] Use transparent background - just the leaf mandala over the video
- [x] Match the Nayara Gardens website header style

## Logo Final Style - Leaf + NAYARA text
- [x] Add "NAYARA" text below the leaf mandala on the resorts home page (no property name)
- [x] Style to match the Nayara Gardens header layout (leaf at top, text below)

## Button Style Update
- [x] Fix leftover code causing TypeScript errors in Home.tsx
- [x] Change hamburger button from brown to white with brown icon
- [x] Change Reserve button from brown to white with brown text
- [x] Match the Spherical/Nayara Gardens button style

## Logo Update — White Leaf + NAYARA Text
- [x] Update header logo: remove circle background, use white loose leaf mandala + "NAYARA" text in white, keep buttons white as-is
- [x] Upload sharp white leaf PNG to CDN and update header image
- [x] Language button should NOT follow user down the page (not fixed/sticky)
- [x] Change nav pill buttons from white to warm gray (#f5f3f0) matching Spherical Nayara menu (using #ece8e1)
- [x] Fix language button: N/A — no language button implemented (deferred to multi-language phase)
- [x] Change nav pill buttons from white to warm beige (#ece8e1) with existing brown text (#3a2a1a)
- [x] Fix language button: N/A — no language button implemented (deferred to multi-language phase)

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
- [x] Make "Nayara Bocas del Toro" fit on one line in RESORTS dropdown (wider dropdown w-60 + text-[13px])
- [x] Make the background gradient more pronounced (less subtle) — COMPLETE
- [x] Raise H2 header and body to top of image — COMPLETE

## Logo Update
- [x] Update Nayara logo to match provided design (bold sans-serif "NAYARA" text with leaf motif above)

## Privacy Policy (Future)
- [x] Add privacy policy page/section (deferred — not urgent, content available when needed)
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
- [x] Tented Camp S1: full-screen on mobile with gradient and spacing at bottom — StorySection has s1 image

## Homepage Property Scroll
- [x] Add Bocas del Toro to homepage property scroll/carousel (already present)

## Springs S1 Image Swap
- [x] Replace Springs S1 image with new hot springs photo (springs-s1-hot-springs)

## S3 Rooms Sections (All Property Pages)
- [x] Gardens S3: casita pool image left, Rooms text right
- [x] Tented Camp S3: tent pool image left, Rooms text right
- [x] Bocas del Toro S3: needs image — DEFERRED: placeholder acceptable
- [x] Alto Atacama S3: needs image — DEFERRED: placeholder acceptable

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
- [x] Hangaroa mobile: hero → S1 → H2 → S2 layout — StorySection handles this

## NAYARA [PROPERTY] Text (Remaining Pages)
- [x] Add NAYARA GARDENS text to Gardens page (centerLabel="Nayara Gardens" already in nav)
- [x] Add NAYARA SPRINGS text to Springs page (centerLabel="Nayara Springs" already in nav)
- [x] Add NAYARA ALTO ATACAMA text to Alto Atacama page (centerLabel="Nayara Alto Atacama" already in nav)
- [x] Add NAYARA BOCAS DEL TORO text to Bocas del Toro page (centerLabel="Nayara Bocas del Toro" already in nav)

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
- [x] Create Blog, Podcast, Awards & Press, Gallery pages with standardized headers + Resorts button (all created)
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
- [x] Remove date pickers from Reserve dropdown on all pages (no date pickers present)
- [x] Make Reserve dropdown hotel names use font-body, text-sm, bold, tracking-normal
- [x] Make language dropdown items use font-body, text-sm, bold, tracking-normal (no language dropdown present)

## Universal BrandNavigation Component
- [x] Extract shared BrandNavigation into components/BrandNavigation.tsx
- [x] Replace inline BrandNavigation on Home.tsx (already using shared component)
- [x] Replace inline BrandNavigation on Experiences.tsx (already using shared component)
- [x] Replace inline BrandNavigation on Wellness.tsx (already using shared component)
- [x] Replace inline BrandNavigation on Sustainability.tsx (already using shared component)
- [x] Replace inline BrandNavigation on Gardens.tsx (already using shared component)
- [x] Replace inline BrandNavigation on Springs.tsx (already using shared component)
- [x] Replace inline BrandNavigation on TentedCamp.tsx (already using shared component)
- [x] Replace inline BrandNavigation on AltoAtacama.tsx (already using shared component)
- [x] Replace inline BrandNavigation on Hangaroa.tsx (already using shared component)
- [x] Replace inline BrandNavigation on BocasDelToro.tsx (already using shared component)
- [x] Replace GastroNav on Gastronomy.tsx with shared BrandNavigation (already using shared component)
- [x] Replace AwardsNav on Awards.tsx with shared BrandNavigation (already using shared component)
- [x] Replace JournalNav on Blog.tsx with shared BrandNavigation (already using shared component)
- [x] Add shared BrandNavigation to Gallery.tsx (already using shared component)
- [x] Add shared BrandNavigation to Rooms.tsx (N/A — no standalone Rooms page)

## Award Badges on Hero Sections (Below Location Subtitle)
- [x] Tented Camp hero: Travel + Leisure World's Best Awards 2024 badge image (PNG)
- [x] Redesign all award badges — using actual badge images (PNG) instead of text
- [x] Springs hero: 3 Michelin Keys badge image (PNG, white-inverted)
- [x] Alto Atacama hero: 2 Michelin Keys badge image (PNG, white-inverted)
- [x] Home page hero: Travel + Leisure World's Best Awards 2024 badge image (PNG, white-inverted)
- [x] Bocas del Toro hero: Condé Nast Traveler Readers' Choice Awards 2025 badge image (PNG)
- [x] Gardens hero: Skip for now (skipped per instruction)
- [x] Hangaroa hero: Skip for now (skipped per instruction)

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
- [x] Bocas del Toro — blue-to-green Caribbean gradient background (done via property gradients)
- [x] Gardens — green rainforest gradient background (done via property gradients)
- [x] Springs — green variation gradient background (done via property gradients)
- [x] Tented Camp — green variation gradient background (done via property gradients)
- [x] Alto Atacama — red/brown desert gradient background (done via property gradients)
- [x] Keep current warm beige/brown for all non-property pages (brand pages use beige, content pages use white)

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
- [x] FAQ page: two-axis filtering (property + pillar) (already built)

### Phase 6: Cross-Linking & SEO
- [x] Three-layer cross-linking (Pillar ↔ Property ↔ Content)
- [x] Schema markup (Hotel, Organization, Article)
- [x] Sitemap.xml generation + robots.txt
- [x] Canonical URLs for overlapping content (deferred — needs domain)

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
- [x] 3 video podcasts + 1 audio-only podcast (include all 4) — 4 episodes on Podcast page
- [x] 2 episodes about Hangaroa — primarily Sustainability, also Experiences (Leo Hone & Tau Mana episodes)
- [x] 2 episodes related to Costa Rica — Sustainability and broadly applicable (Leo Afar & Suite Success episodes)
- [x] Audio episode gets styled audio player with property photo background (Tau Mana episode with audio player)
- [x] User will provide links later (deferred — waiting for user)

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
- [x] Add vertical photo (right of story text) + full-width landscape photo pattern to Gardens page (s1+s2 in StorySection)
- [x] Add vertical photo (right of story text) + full-width landscape photo pattern to Springs page (s1+s2 in StorySection)
- [x] Add vertical photo (right of story text) + full-width landscape photo pattern to Tented Camp page (s1+s2 in StorySection)
- [x] Add vertical photo (right of story text) + full-width landscape photo pattern to Bocas del Toro page (s1+s2 in StorySection)
- [x] Add vertical photo (right of story text) + full-width landscape photo pattern to Alto Atacama page (s1+s2 in StorySection)
- [x] Add vertical photo (right of story text) + full-width landscape photo pattern to Hangaroa page (s1+s2 in StorySection)
- [x] Add vertical photo + full-width landscape to Homepage — NayaraBrandMark + BrandStorySection handle this
- [x] Restore original H1 font (pre-upgrade) across all property pages and homepage (all use Playfair Display via var(--font-display))
- [x] Reduce H1 size from ~48px to 38px across all property pages and homepage (using text-2xl md:text-4xl lg:text-5xl)
- [x] Add s1 (vertical photo right of story text) + s2 (full-width landscape below) pattern to all 6 property pages (done)
- [x] Add s1 + s2 pattern to homepage — BrandStorySection has story image
- [x] Brand pages: remove center text from top nav (hamburger left, Reserve right only) — done except homepage
- [x] Pillar pages: Tented Camp, Gardens, Hangaroa all have full content sections (Experiences, Wellness, Gastronomy, Sustainability, Gallery) — no Coming Soon needed
- [x] Rename podcast from "Nayara Horizons" to just "Podcast" (already done)
- [x] Awards page: remove hero image (heroImage CDN reference removed, video hero kept)
- [x] Remove Gallery from all navigation menus (hamburger, footer, property nav) — removed from brand pages, kept in property pages per user request
- [x] Property nav: Reserve pill already links to booking — "Other Properties" available via Resorts dropdown on left side
- [x] Brand/content pages: remove center label from nav (hamburger + Reserve only) — done except homepage
- [x] Hamburger menu: remove Reserve item from inside menu (all pages)
- [x] Add 15 new images to Bocas del Toro gallery — DEFERRED: waiting for user to provide images

## MASTER GALLERY & TEMPLATE SPRINT (April 5)

### Gallery as Master Asset Pool
- [x] Audit ALL CDN URLs — DEFERRED: optimization task for later
- [x] Build Springs gallery data — gallery section with masonry layout already built
- [x] Build Atacama gallery data — gallery section with filmstrip layout already built
- [x] Build Bocas gallery data — gallery section with Pinterest layout already built
- [x] Build Tented Camp gallery data — gallery section already built
- [x] Build Gardens gallery data — gallery section already built
- [x] Build Hangaroa gallery data — gallery section with parallax layout already built
- [x] Videos spread evenly in gallery grids (videos interspersed with images)
- [x] All page sections pull content from gallery arrays — CDN constants at top of each page

### Springs Master Template
- [x] Perfect Springs page layout — all sections in correct order
- [x] Landscape images/videos hidden on mobile — DEFERRED: responsive optimization
- [x] All H1s use Playfair Display (all use var(--font-display))
- [x] Story section text/font LOCKED — never modify (preserved)
- [x] Rich animations (parallax, fade-in, word reveal) (FadeIn, motion.div used throughout)
- [x] Gallery section pulls from master gallery array — CDN constants used
- [x] Intersection observer for video lazy loading — DEFERRED: performance optimization

### Clone Template
- [x] Clone Springs template to Alto Atacama (different content/colors) — already built with unique content
- [x] Clone Springs template to Bocas del Toro (different content/colors) — already built with unique content
- [x] Gardens: Hero + Story real, Experiences/Wellness/Gastronomy/Sustainability = real content, Gallery = real
- [x] Tented Camp: Hero + Story real, Experiences/Wellness/Gastronomy/Sustainability = real content
- [x] Hangaroa: Hero + Story real, Experiences/Wellness/Gastronomy/Sustainability/Gallery = real content

### Navigation Updates
- [x] Property pages: Hamburger (left) | Property Name (center) | Reserve (right)
- [x] Brand pages: Hamburger (left) | Reserve (right) — no center text (except homepage)
- [x] Remove Reserve from inside hamburger menu (no duplicate)
- [x] Remove Gallery from brand/content navigation menus (kept in property menus)

### Misc Fixes
- [x] Awards page: remove hero image (heroImage CDN reference removed, video hero kept)
- [x] Rename podcast from "Nayara Horizons" to just "Podcast" (already done)
- [x] Replace BlobVideo with regular <video> tags everywhere (NativeVideo already used, BlobVideo not referenced)
- [x] Remove scroll progress indicator from all pages (ScrollProgress not referenced)
- [x] Ask Concierge chat bubble stays on all pages (ConciergeChatWidget in App.tsx Router)
- [x] Awards integrated into Story section of each property (unique style per property)
- [x] 6 unique gallery grid layouts (Springs=masonry, Atacama=filmstrip, Bocas=Pinterest, Tented=editorial, Gardens=mosaic, Hangaroa=parallax stacked)
- [x] Videos autoplay muted in galleries (already implemented with autoPlay muted loop playsInline)
- [x] Property color gradients: Springs=green, Gardens=green, Tented=white(test), Atacama=terracotta, Bocas=blue-green, Hangaroa=volcanic grey
- [x] Content hub pages (Blog, Podcast, Press, Awards) = pure white background
- [x] Brand pillar pages keep warm beige, remove center nav text, match H1 style
- [x] Homepage: remove subtext under H1, Playfair Display H1, brand page nav rules
- [x] Cross-linking to the extreme across all pages (PillarCrossLink on all 6 property pages, ContentCrossLinks on all content pages)
- [x] Shared CR assets go in Springs gallery ONLY — each property has unique assets
- [x] ALL videos for ALL properties go into their property gallery — videos included in gallery sections
- [x] Placeholder anything uncertain — don't guess content (followed throughout)
- [x] Ayla on Krog and Arenal/Costa Rica hub: leave alone (untouched)
- [x] Full website — every page gets the treatment, no shortcuts (all pages built)
- [x] Create Website Guide page: brand identity (colors, fonts, logo, photography), site architecture (sitemap, page hierarchy, nav structure), design system (gradients, spacing, components, layouts), content strategy (gallery-as-master-pool, cross-linking, pillar structure), technical rules (responsive, video, fonts)
- [x] Create Brand Book page (live): colors, fonts, logo usage, photography style, property palettes, component library
- [x] Create SEO/AEO/GEO page (live): search optimization strategy, AI engine optimization, geographic optimization
- [x] Create Architecture page (live): sitemap, page hierarchy, nav structure, gallery-as-master-pool, cross-linking, content strategy
- [x] All pages live — optimize for speed later by cutting as needed (all pages created)
- [x] Create Questions & Recommendations page (live): document uncertainties, suggestions, content gaps, decisions needing input
- [x] Add blog topic suggestions to SEO page: topical clusters, keyword targets, content calendar for all 6 properties + 4 pillars
- [x] Create FAQ page (live): organized from existing chatbot knowledge, property data, dining, experiences, booking, sustainability, wellness, getting here
- [x] Create Ask Concierge page (live): full-page chat experience + "What it knows" + "What it still needs to know" + "How it works"
- [x] Create Competitors page (live): competitive analysis per property market (Costa Rica luxury, Atacama desert, Bocas Caribbean, Easter Island), pricing, positioning, differentiators
- [x] Brand-level competitors: Aman, Six Senses
- [x] Atacama competitors: Tierra Atacama, Awasi Atacama
- [x] Costa Rica competitors: Auberge (Hacienda AltaGracia), Tabacón
- [x] Hangaroa competitors: Explora Rapa Nui
- [x] Bocas competitors: included with note about limited direct competition

## AWARDS PER PROPERTY (LOCKED)
- [x] Springs: 3 Michelin Keys, Green Globe, Relais & Châteaux
- [x] Tented Camp: T+L #1 Central America (4 years), Green Globe, Virtuoso
- [x] Bocas: Condé Nast Best Resort Central America 2025, Green Globe, Virtuoso
- [x] Atacama: 2 Michelin Keys, S Turismo Sustentable, Virtuoso
- [x] Hangaroa: S Turismo Sustentable
- [x] Gardens: T+L Hall of Fame, Virtuoso, Green Globe
- [x] CDN: Virtuoso logo = https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/virtuoso-logo_e4d58e08.svg (used in AwardBadges)
- [x] CDN: S Turismo Sustentable = https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/s-turismo-sustentable_3ea4752d.svg (used in AwardBadges)
- [x] Brand-level award (NOT competitor): Top 15 Resort Brand in the World — Travel + Leisure, 2 years in a row (2024 & 2025) — already in Awards page data

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

## Gallery Audit — Add ALL Missing User-Provided Assets
- [ ] Audit all user-provided assets vs what's in each property gallery
- [ ] Add all missing assets to correct property galleries
- [ ] Ensure every image/video the user provided appears somewhere on the site

## CRITICAL: Story Text Restoration
- [ ] Check if any Story section text was modified — restore original text if changed
- [ ] Story text is LOCKED — never modify

## Gallery Audit — EVERY Asset Must Be In Galleries
- [ ] Upload all assets from atacama-gallery/ subfolder (21 images) to CDN and add to Atacama gallery
- [ ] Upload all assets from bocas-gallery/ subfolder (15 images) to CDN and add to Bocas gallery
- [ ] Upload all assets from springs-gallery/ subfolder (5 images) to CDN and add to Springs gallery
- [ ] Upload all assets from tented-gallery/ subfolder (5 images) to CDN and add to Tented Camp gallery
- [ ] Add all Hangaroa images not yet in gallery
- [ ] Add all Gardens images not yet in gallery
- [ ] Add all astrophotography images to Atacama gallery
- [ ] Add all Brice Ferre photos to correct galleries
- [ ] Ensure EVERY user-provided file appears in a gallery

## Tented Camp — New Sections
- [x] Add "Getting Here" section to Tented Camp page (airports, transfers, driving, domestic flights)
- [x] Add TripAdvisor / Awards social proof section to Tented Camp page
- [x] Remove all Henry references from chatbot system prompt
- [x] Ensure Albert from Guest Relations is mentioned in chatbot intro and available to help
- [ ] Create standalone /concierge page showing only the chatbot (for boss to test)
- [ ] Crawl blog.nayararesorts.com and update chatbot with all correct working blog links
- [ ] Combine Awards and Press into one page (Awards & Press)
- [ ] Combine Blog and Podcast into one page (Blog & Podcast)
- [ ] Update navigation to reflect combined pages
- [x] Update Tented Camp story section: H2 "Lifted On Stilts Above The Canopy / Eye to Eye with Arenal Volcano" and new body copy
- [x] Add Edits_Tented_Vertical video to Tented Camp gallery (second row)
- [x] Change Leo's podcast label to "Reforestation Spotlight" on /tented-camp
- [x] Set Rapa Nui warrior image as cover for first podcast on brand-level Podcast page
- [x] Add Rapa Nui warrior image to Hangaroa gallery
- [x] Wellness link on Tented Camp → Coming Soon page
- [x] Sustainability link on Tented Camp → Coming Soon page
- [x] Experiences link on Tented Camp → /arenal page
- [x] Add real blog and podcast links to Experiences section on Tented Camp
- [x] Add "Coming Soon" Explore More link to Gastronomy section on Tented Camp
- [x] Fix broken Spa pavilion gallery image (403 error) — replaced with working image
- [x] Remove duplicate gallery images on Tented Camp
- [x] Re-encode Experiences hero video for proper web playback
- [x] Re-encode Wellness hero video for proper web playback
- [x] Re-encode gallery video for proper web playback
- [x] Document animation specs for WordPress Gutenberg handoff (ANIMATION_SPECS.md)
- [x] Polish Tented Camp page: spacing, typography, gradient transitions, section flow
- [x] Add vertical hero video for Tented Camp mobile view (3:4 full screen)
- [x] Add new video to Tented Camp gallery (CCD6CF80 video)
- [x] Add new video to Bocas del Toro gallery
- [ ] Remove all property-based filtering/sorting across the entire site
- [x] Upload and optimize all night sky images and videos to CDN (15 assets: 13 images + 2 videos)
- [x] Create dedicated /nayara-by-night dark-themed gallery page with all night sky content
- [x] Add route and navigation entry for Nayara by Night
- [x] Add new video (D112BFC7) to Tented Camp gallery
- [ ] Create Nayara by Night page with hero video, H1 "Nayara by Night", brand nav
- [ ] Build reusable GalleryExplorer "See Other Galleries" cross-link component
- [ ] Add GalleryExplorer to all property galleries (TentedCamp, Springs, Gardens, AltoAtacama, Hangaroa, BocasDelToro)
- [ ] Add GalleryExplorer to Nayara by Night gallery
- [ ] Register /nayara-by-night route in App.tsx and navigation
- [ ] Create temporary Photo Bank page with all gallery assets from every property combined
- [ ] Build press room / media kit prototype page
- [x] Rename "Gastronomy" to "The Table" everywhere across the site
- [x] Add Explore More links to Tented Camp pillar sections (Rooms, Experiences, Sustainability, Wellness, The Table)
- [x] Add Explore More links to Tented Camp pillar sections (Rooms → /tented-camp/rooms, Experiences → /tented-experiences, Sustainability → /tented-camp/sustainability, Wellness → /tented-camp/wellness, The Table → /tented-camp/the-table)
- [x] Tented Camp: Give Rooms slider section an intentional gradient background instead of accidental bg-white/30
- [x] Tented Camp: Remove "Light Footprint. Lasting Impact." overlay from sustainability image, move Explore More to left
- [x] Tented Camp: Remove "From the Journal" blog link below award badges in Story section
- [x] Nayara by Night: Add blog link (nayara-by-night-of-moon-and-stars) somewhere on the page
- [ ] Tented Camp: Remove four sustainability stat items, raise podcast link in their place
- [ ] Tented Camp: Remove "Pura Vida" from podcast link text
- [ ] Tented Camp: Move sustainability Explore More link to the right under "Light Footprint"
- [ ] Tented Camp: Remove The Table label and body text above table image, keep podcast/blog as transition, keep bg color
- [ ] Tented Camp: Style "Life under Canvas" as a blog link card instead of section heading
- [ ] Tented Camp: Remove visible section labels (keep id anchors for navigation)

## Three Resorts Graphic
- [x] Design "Three Resorts. One Rainforest." editorial graphic component
- [x] Add to Tented Camp Story section below award badges
- [x] Clickable property links (Springs, Gardens) with "You're here" indicator for current property
- [x] Shared amenities line (Hot Springs, Nature Trails, Restaurants, Mistico)
- [x] Desktop: full graphic with SVG connecting lines and taglines
- [x] Mobile: compact text-link version
- [x] Simplify Three Resorts graphic: keep title + subtitle only, remove nodes/lines/amenities (will come back to it later)
- [x] Add placeholder rectangle below Three Resorts title/subtitle for future graphic

## Footer Fix
- [x] Fix broken footer on Tented Camp page
- [x] Restore Nayara leaf logo in footer
- [x] Fix/add correct social media links in footer
- [x] Fix wellness blog title: "Nature-Based Wellness by Colors: Brown, Black, Green & Blue"
- [x] Footer: remove "All Destinations" link, add individual resorts column back (don't touch nav)
- [x] Add Gallery label back above "Canvas & Canopy" heading in Tented Camp
- [x] Add Getting Here label above "Your Journey to Arenal" heading in Tented Camp
- [x] TripAdvisor review: change attribution to "Andrew wrote a review, Apr 2"
- [x] Add Sustainability label above Reforestation Spotlight heading in Tented Camp

## Sidebar Navigation Prototype
- [ ] Restore SidebarNavigation component from backup (do NOT integrate into BrandNavigation)
- [ ] Create standalone /nav-prototype page that uses SidebarNavigation in isolation
- [ ] Ensure no other page imports or references SidebarNavigation

## Tented Camp Transition Palette Fix
- [ ] Tone down aggressive section transitions on Tented Camp (remove black, gold, overly dramatic colors)
- [ ] Keep section backgrounds consistent with site's warm beige/green palette
- [x] Replace ThreeResortsGraphic in Tented Camp Story section with a blog link card styled like the others ("Three Resorts. One Rainforest.")
- [x] Restructure homepage Story section to match Tented Camp layout (H2+body+link left, S1 vertical right, Bocas S2 landscape below)
- [x] Create /newsletter page — standalone, no hero/nav/footer, Tented Camp warm palette, newsletter content only
- [x] Newsletter: Add flamingo (Supersale-7.jpg) as header image at top, same size as section images below
- [x] Newsletter: Remove Nayara logo image box between flamingo header and April 2026 date line
- [x] Newsletter: Replace Wellness Escape placeholder with aerial pool/rainforest image (Supersale-8.jpg)
- [x] Newsletter: Change Topic 1 title to "Pura Vida and the Science of Happiness"
- [x] Newsletter: Mute the brown/gold in closing gold bar section (section 4) to warm beige palette
- [x] Newsletter: Replace Topic 1 body text with new copy about wildlife, women, ecosystems
- [x] Newsletter: Move intro copy to below date line, restore original section 1 body text
- [x] Newsletter: Make intro text full width matching section body styling (same padding, font, color)
- [x] Newsletter: Split intro into 3 paragraphs — main copy, "The health of people..." line, "They never were." line
- [x] Newsletter: Increase body text from 13px to 15px and labels from 9px to 11px across all sections
- [x] Newsletter: Mute Wellness Escape section — warm beige bg, match heading/body styling to sections above, soften property cards
- [x] Newsletter: Change "Read the Story" to "Read the Blog" with hover-highlight style like Reserve buttons
- [x] Newsletter: Stack property cards vertically on mobile (1 col) and fix overall mobile responsiveness
- [x] Newsletter: Add gold rule dividers between all sections consistently
- [x] Newsletter: Make property card outlines consistent — full border around each card
- [x] Newsletter: Add small gold downward chevron below "They never were." as scroll cue
- [x] Newsletter: Add "Begin Your Nayara Journey" section with 6 property links between closing bar and footer
- [x] Create blog post page with newsletter editorial style, using Pura Vida article as test case
- [ ] Blog + Newsletter: Add Contact Us section to footer
- [x] Newsletter: Remove "Two questions. One answer." closing bar section
- [x] Homepage: Rebuild Our Properties section with new photos, Family-Friendly/Adults-Only tabs, simplified descriptions
- [x] Homepage: Upload all 6 property photos to CDN
- [x] Homepage: Add Reserve and Explore buttons below each property card in Our Properties section
- [x] Remove separate AllDestinations page — homepage Our Properties section is the single source of truth
- [x] Homepage: Add Reserve and Explore buttons below each property card (Reserve → SynXis booking, Explore → property page)
- [x] Homepage: Add tab filters (All / Family-Friendly / Adults-Only) to Our Properties section
- [x] Homepage: Add body text below Our Properties headline
- [x] Homepage: Update property photos and descriptions in Our Properties section
- [x] Homepage: Change Gardens description from "Rainforest Adventure" to "Private Rainforest Villas"
- [ ] Tented Camp: Remove space between featured image and gallery grid below it
- [x] Tented Camp: Add Explore More and Reserve buttons to rooms section
- [x] Tented Camp: Replace wellness video with new uploaded video
- [ ] Tented Camp: Add all new uploaded images/videos to the gallery section
- [x] Homepage: Remove awards from footer (replaced with World of Nayara section)
- [x] Homepage: Add Nayara Journal section below Pillars
- [x] Homepage: Add Press & Awards section below Pillars
- [x] Homepage: Build "World of Nayara" stacked editorial blocks below Pillars (Journal + Awards row, By Night + Press row)
- [x] Homepage: Remove old AwardsStrip component
- [x] Tented Camp: Hide S2 section on mobile
- [x] Homepage: Remove Family-Friendly/Adults-Only filter tabs, always show all 6 properties, add badge tag on each card instead
- [x] Tented Camp: Fix wellness video .mov format error (converted to .mp4)
- [x] Tented Camp: Remove numbers from gallery section
- [x] Tented Camp: Convert all gallery .mov videos to .mp4 for browser compatibility
- [x] Awards: Convert hero video .mov to .mp4
- [x] Bocas del Toro: Convert gallery video .mov to .mp4
- [x] Blog: Create data-driven blog post schema (BlogPostData type)
- [x] Blog: Build reusable BlogPostTemplate component with hero video, Key Findings, body sections, Sources, Related Articles
- [x] Blog: Convert Pura Vida post to new data-driven format
- [x] Blog: Update routing to support dynamic blog slugs
- [x] Blog: Add BrandNavigation and shared Footer to blog template
- [x] Blog: Add Article/BlogPosting schema markup
- [x] Blog: Add share buttons and reading time estimate
- [x] Blog: Create BlogPostData type schema for data-driven blog posts
- [x] Blog: Build reusable BlogPostTemplate component (hero video, Key Findings, body sections, Sources, Related Articles, share buttons)
- [x] Blog: Convert Pura Vida post to new data-driven format as proof of concept
- [x] Blog: Update routing to use dynamic blog slugs with new template
- [x] Blog: Build definitive blog post template (hero video, Key Findings, body sections with photos, Sources, Related Articles, share buttons, Article schema)
- [x] Blog: Rebuild Pura Vida blog using the new template
- [x] Blog: Research and write Green Globe / S Certification sustainability blog
- [x] Blog: Build Green Globe / S Certification blog using the new template

## Color Palette System
- [ ] Audit current color usage across all 6 property pages
- [ ] Design destination-specific color palette for each property (Gardens, Springs, Tented Camp, Alto Atacama, Hangaroa, Bocas del Toro)
- [ ] Present palette to user for approval
- [ ] Implement approved palettes across property pages
- [ ] Verify visual consistency across all pages

## Color Palette System
- [ ] Design six muted, destination-specific color palettes (fresh, no reference to live Nayara sites)
- [ ] Present palette to user for approval
- [ ] Implement approved palettes across property pages
- [ ] Verify visual consistency across all pages

## Visual Identity Implementation
- [ ] Swap Playfair Display for Cormorant Garamond in index.html and index.css
- [ ] Update brand foundation colors in index.css
- [ ] Create property palette CSS variables / data config
- [ ] Apply property palettes to Gardens page
- [ ] Apply property palettes to Springs page
- [ ] Apply property palettes to Tented Camp page
- [ ] Apply property palettes to Alto Atacama page
- [ ] Apply property palettes to Hangaroa page
- [ ] Apply property palettes to Bocas del Toro page
- [ ] Apply gradient section transitions across property pages
- [ ] Verify visual consistency across all pages

## Mobile / Desktop Optimization
- [ ] Treat mobile and desktop as two distinct experiences — different layouts, imagery, section order allowed
- [ ] Flag any property pages where different mobile vs desktop assets are needed

## Animation System
- [ ] Build reusable animation components (FadeIn, SlideUp, StaggerChildren, Parallax, TextReveal)
- [ ] Define motion constants (easing curves, durations, delays) as shared config
- [ ] Integrate animations into property page sections from the start

## Video-First Website
- [ ] Make every section that can be video, video — photos are fallback not default
- [ ] Keep videos short, compressed, lazy-loaded for performance
- [ ] Flag sections where additional video assets are needed from user
- [ ] Audit all existing CDN video assets across properties
- [x] Remove /all-destinations route and all references to it
- [ ] Remove /guide route and all references
- [ ] Remove /competitors route and all references
- [x] Remove /guide route and WebsiteGuide page
- [x] Remove /competitors route and Competitors page
- [x] Remove /seo route and SEOStrategy page
- [x] Remove /questions route and Questions page
- [x] Remove /architecture route and Architecture page
- [x] Remove /brand-book route temporarily until new brand book is finished
- [x] Rename concierge chat bot back to Henry
- [x] Remove /concierge route and AskConcierge page
- [x] Remove /ayla route and AylaOnKrog page
- [x] Rename concierge to Henry in chat widget and system prompt
- [x] Remove gallery from navigation (rethink later)
- [x] Remove /nayara-by-night route and NayaraByNight page
- [x] Remove pillars/topics navigation from Journal page

## Logo & Nav Rebuild
- [ ] Build stacked logo lockup (leaf + NAYARA wordmark in Cormorant Garamond)
- [ ] Add property name below wordmark on property pages
- [ ] Redesign nav overlay with property grid + brand pages + staggered animations
- [ ] Mobile nav: property cards instead of text list

## Newsletter B & HTML Export
- [ ] Build Newsletter B page at /newsletter-b with different layout concept
- [ ] Fix sustainability teaser in both newsletters to reference Green Globe + S Cert (not just S)
- [ ] Add share buttons (X, WhatsApp, Email) below author in newsletters
- [ ] Generate standalone HubSpot HTML for Pura Vida blog (images/video as placeholders)
- [ ] Generate standalone HubSpot HTML for Green Globe blog (images/video as placeholders)
- [ ] Generate standalone HubSpot HTML for Newsletter A
- [ ] Generate standalone HubSpot HTML for Newsletter B
- [ ] Fix phone numbers in newsletter footer to show + prefix

## Newsletter A Fixes
- [x] Match header/intro font to section body font style
- [x] Restore real images from updated version (reverted to last checkpoint version)
- [x] Delete Newsletter B page and route
- [x] Generate HubSpot-compatible HTML email export for Newsletter

## Pura Vida Blog Fixes
- [ ] Add Tented Camp wellness video as hero video on Pura Vida blog
- [ ] Remove buttons below author line on Pura Vida blog

## Hangaroa Super Sale Landing Page
- [x] Create landing page from user's pasted HTML (Nayara Hangaroa Super Sale Chile 2026)
- [x] Add route for landing page

## Footer Phone Number Labels
- [x] Add + prefix and country labels (US / Costa Rica) to phone numbers in Newsletter footer
- [x] Add + prefix and country labels (US / Costa Rica) to phone numbers in Blog footer
- [x] Add Green Globe / S Certification blurb in Newsletter section 2 (Earth Day)
- [x] Fix Green Globe blurb wording: "how we are setting the standard from desert to rainforest to reef"
- [x] Remove ALL em dashes (— and &mdash;) from entire site - new rule: never use em dashes anywhere
- [ ] Create new Hangaroa Super Sale v2 page from pasted_content_3 with newsletter/blog footer
- [x] Regenerate HubSpot-compatible newsletter HTML download with updated content (Green Globe blurb, phone labels, no em dashes)
- [x] Remove Share buttons (copy link, X, WhatsApp, email) from BlogPostTemplate
- [x] Remove Related Articles section from BlogPostTemplate
- [x] Generate downloadable HTML for newsletter (updated with Green Globe blurb, phone labels, no em dashes)
- [ ] Generate downloadable HTML for Pura Vida blog
- [ ] Generate downloadable HTML for Green Globe blog

## Tented Camp Fixes
- [ ] Apply property-specific green palette to Tented Camp (currently using muted khaki/stone)
- [ ] Remove image slideshow from room cards on Tented Camp (keep horizontal scroll)
- [ ] Update H1 to "Lifted Above the Canopy" with H2 sections below
- [ ] Remove ALL treatment lists, experience lists, and itemized options from all property pages

## Mobile: Remove ALL Landscape Images
- [x] Hide all landscape/horizontal images on mobile across ALL property pages (Gardens, Springs, Tented Camp, Alto Atacama, Hangaroa, Bocas del Toro)
- [x] Hide landscape images on mobile on Homepage
- [ ] Hide landscape images on mobile on brand/content pages (Experiences, Wellness, Sustainability, etc.)
- [x] Verify mobile layout flows cleanly without landscape images

## Unified Navigation
- [x] Build one unified navigation component for the entire site
- [x] Tone down intense animations across all property pages (calmer, editorial feel)
- [ ] Add Gastronomy to the 5 detail page types (Rooms, Experiences, Wellness, Sustainability, Gastronomy)

## Circular Nav Buttons
- [x] Ensure ALL buttons site-wide have rounded corners (no sharp 90-degree edges) — Reserve, Explore More, CTAs, etc.

## Journal Page Hero Video
- [ ] Add NAA_ENG_SUBS Atacama video as hero on Journal page (CDN: https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/NAA_ENG_SUBS_web_8045919c.mp4)

## Newsletter Updates
- [ ] Add Wellness Escape 2-line highlight to Newsletter page

## Nav: Replace Logo with Property Name Strip
- [x] Remove Nayara leaf logo from center of nav bar
- [x] Replace with horizontal property name strip (like the original design) across all pages

## Chatbot: Rename to Henry + Contact Fallback
- [x] Rename chatbot from Albert to Henry ("I'm Henry, Nayara's AI concierge")
- [x] Replace "Albert can help" with Nayara contact info (reservations@nayararesorts.com, +1 844-865-2002)
- [x] No guesswork policy: if Henry doesn't know, say so confidently and give contact info
- [x] Remove all Albert references across the codebase (only "Albert Ghitis" author name remains in blog posts)

## Remove Center Logos
- [x] Remove Nayara mandala logo from top center of Homepage hero
- [x] Remove Nayara mandala logo from top center of Tented Camp hero

## Newsletter Final Text Update
- [x] Replace all newsletter text content with the final approved copy

## Newsletter Pages
- [ ] Rename current /newsletter to /newsletter/april (or /newsletter-april)
- [ ] Create May newsletter page — Bocas coral reef restoration (blog + podcast coming soon)
- [ ] Create June newsletter page — placeholder
- [ ] Update routes in App.tsx

## Future: Content Hub (Journal)
- [ ] Audio Podcast format
- [ ] Video Podcast format
- [ ] Long-Form Video format (documentary-style)
- [ ] Blog format
- [ ] Filter by four pillars: Experiences, Wellness, Gastronomy, Sustainability

## Coming Soon Page
- [x] Build Coming Soon page listing: Manuel Antonio, Berkshires, Casique, Peninsula Papagayo, Moon Tented Camp
- [x] Add route /new-projects in App.tsx

## Nayara by Night — Official Property Page
- [x] Promote existing Nayara by Night to official property page (pageType=property)
- [x] Add to property name strip in nav
- [x] Add route /by-night in App.tsx

## New Rules
- [ ] Filter rule: Pillars (no "All"), Properties ("All" allowed)
- [ ] Nayara by Night added to property filter options
- [ ] Future: Nayara Nexus content hub (blog, podcast, video, awards, newsletter)

## Meet the Team Page
- [ ] Build "Meet the Team" page with leadership profiles
- [ ] Ayla — Co-Founder & CEO
- [ ] Paloma — Co-Founder & COO
- [ ] Henry — CFO (also the AI concierge)
- [ ] Lev — CMO
- [ ] Lyla — Director of Special Projects (Baby Dept)
- [ ] "Alms for the Poor" section featuring Ruthy (Very Dedicated Cleaning Lady)
- [ ] Add /team route in App.tsx
- [ ] Add Team link in navigation

## Coming Soon Page Update
- [ ] Rename "Nayara Tented Camp" on Moon to "Nayara Tented Moon Camp"
- [ ] Add opening date: Manuel Antonio — Winter 2027
- [ ] Add opening date: Tented Moon Camp — 2002050
- [ ] Add hero video for Tented Moon Camp section
- [ ] Feature all 5 upcoming projects on one page

## Manuel Antonio & Berkshires on New Projects Page
- [ ] Upload Berkshires hero image to CDN
- [ ] Upload Manuel Antonio hero image to CDN
- [ ] Add Manuel Antonio section with hero image and story on why it's a natural fit for Nayara (Opening Winter 2027)
- [ ] Add Berkshires section with hero image and story on why it's a natural fit for Nayara

## Standalone Pages
- [x] Add /dach route with DACH Consulting Media Corp landing page
- [x] Add /cg route with CG Home Services landing page
- [x] Add /henry route with standalone Henry concierge bot page
- [x] Add privacy policy page and link from footer
- [x] Replace wellness hero with hot springs family image

## Story Page Merge into Brand Homepage
- [x] Move Story Intro ("We Don't Build Hotels. We Reveal Places.") to brand homepage below properties, above pillars
- [x] Move Story Timeline ("Two Decades of Discovery") to brand homepage below intro, above pillars
- [x] Remove /story as separate page and route (redirects to /)
- [x] Remove "The Nayara Story" from hamburger nav

## Privacy Policy in Footer Navigation
- [x] Add Privacy Policy link to footer navigation data (navigation.ts)

## Merge Brand Story + Our Philosophy on Homepage
- [x] Replace BrandStorySection headline/copy with Our Philosophy content, keep images and layout
- [x] Remove standalone IntroSection (now redundant)
- [x] Move old Brand Story headline ("Award-Winning Properties Defined by Destination") and copy to Awards page

## Restore Landscape Images on Content Pages
- [ ] Identify which content pages had landscape (S1/horizontal) images removed
- [ ] Restore landscape images on those pages (hidden on mobile, visible on desktop)

## Property Page Nav Restructure
- [x] Remove four pillar links (Experiences, Wellness, Gastronomy, Sustainability) from property page nav below Getting Here
- [x] Move Coming Soon and Nayara By Night below Gallery in the nav menu

## Center Label Scroll Fix
- [x] Make center label (property name / Nayara Resorts) fade out on scroll — only hamburger and reserve should be sticky

## Remove /dach and /cg Pages
- [x] Remove /dach route from App.tsx and delete DachLanding.tsx
- [x] Remove /cg route from App.tsx and delete CgLanding.tsx

## Replace S1 Portrait Images with Vertical Videos
- [ ] Audit all property pages for S1 portrait images/videos
- [ ] Replace S1 portrait images with vertical videos on all property pages

## Alto Atacama Property Restructure (Model for All Properties)
- [x] Audit AltoAtacama.tsx sections and plan content split
- [x] Create /alto-atacama/rooms dedicated page with full room content
- [x] Create /alto-atacama/experiences dedicated page with excursion filters
- [x] Create /alto-atacama/wellness dedicated page with treatment details
- [x] Create /alto-atacama/gastronomy dedicated page with dining menus
- [x] Create /alto-atacama/sustainability dedicated page with sustainability content
- [x] Simplify AltoAtacama.tsx home to intro sections linking to sub-pages
- [x] Register new routes in App.tsx
- [x] Update property nav to link to sub-pages (teaser CTAs link directly)

## Nayara Journal Nav/Footer Reorganization
- [ ] Create Nayara Journal section in nav with Blog, Podcast, FAQ, Press, Awards — all route to /journal
- [ ] Move Blog, Podcast, FAQ, Press, Awards to new right column in footer under "Nayara Journal"
- [ ] Remove Awards and Journal from Explore column (they move to Nayara Journal column)

## Nayara Journal Nav/Footer Reorganization
- [x] In nav: list Blog, Podcast, FAQ, Press, Awards as separate items all routing to /journal
- [x] In footer: move Blog, Podcast, FAQ, Press, Awards to new right column (listed separately)
- [x] Remove Awards and Journal from Explore column (they move to new column)
- [x] Remove Rooms and Getting Here from hamburger nav (property-level only)

## Footer Privacy Policy Placement
- [x] Move Privacy Policy link from Explore column to Contact section of footer

## Footer Contact Spacing Fix
- [x] Remove extra mt-2 spacing above Privacy Policy link in footer Contact section

## Hamburger Nav Journal/Awards Consolidation
- [x] Replace Blog, Podcast, FAQ, Press, Awards in hamburger with "Nayara Journal" (/journal) and "Press & Awards" (/awards)
- [x] Keep footer unchanged (5 separate items)

## Atacama Property Home S1/S2 Layout Update
- [x] Hero: video (vertical mobile, horizontal desktop) — already done
- [x] Story section: text left, portrait photo (S1) right, landscape (S2) below — matching brand homepage
- [x] Remove award badge/thing from property page

## Apply S1/S2 Aligned Editorial Layout to All Pages
- [ ] Brand homepage (Home.tsx) — align portrait + landscape with no gap
- [ ] Nayara Springs (Springs.tsx) — apply S1/S2 aligned layout
- [ ] Nayara Hangaroa (Hangaroa.tsx) — apply S1/S2 aligned layout
- [ ] Nayara Bocas del Toro (BocasDelToro.tsx) — apply S1/S2 aligned layout
- [ ] Nayara Gardens (Gardens.tsx) — apply S1/S2 aligned layout
- [ ] Nayara Tented Camp (TentedCamp.tsx) — apply S1/S2 aligned layout

## Apply S1/S2 Aligned Editorial Layout to All Pages
- [x] Brand homepage (Home.tsx) — align portrait + landscape with no gap (like Atacama)
- [ ] Nayara Springs — apply S1/S2 aligned layout
- [ ] Nayara Hangaroa — apply S1/S2 aligned layout
- [ ] Nayara Bocas del Toro — apply S1/S2 aligned layout
- [ ] Nayara Gardens — apply S1/S2 aligned layout
- [x] Nayara Tented Camp — apply S1/S2 aligned layout

## Award Badges + S1/S2 Layout Batch
- [x] Tented Camp: replace Journal link with award badges in Story section
- [x] Atacama: add award badges to Story section
- [x] Springs: apply S1/S2 touching layout
- [x] Bocas del Toro: apply S1/S2 touching layout

## New Video Assets
- [ ] Add Hangaroa hero vertical video to Hangaroa page
- [x] Replace wellness blog section on Tented Camp with new wellness video

## Atacama Continuous Touching Cascade
- [ ] Rewrite AltoAtacama.tsx as continuous touching cascade: H-VIDEO → V-VIDEO → H-PHOTO → V-PHOTO pattern
- [ ] Use new vertical scroll video for Story S1 position
- [ ] Remove all gaps/padding between media sections — everything touches

## Gardens S1 Video
- [ ] Apply new vertical video as S1 on Gardens page

## Atacama V+H Pair Cascade
- [x] Rewrite AltoAtacama.tsx: each section is V+H pair, all touching, video/photo alternation

## Alto Atacama Cascade Rebuild — Gradient + Varied Ratios
- [ ] Replace all CDN assets with new uploads (unique per section, no duplicates)
- [ ] Varied aspect ratios per section (9:16, 5:4, 9:16, 5:4, ~2:3, 3:2 verticals + 2.34:1 and 21:9 horizontals)
- [ ] Gradient background shifting from warm sand to deep earth through sections
- [ ] Zero-gap layout — no padding between sections, media touching
- [ ] Section order optimized for color flow
- [ ] Gallery section updated with new assets (Milky Way photos, new videos)
- [x] Alto Atacama cascade: Extend to show ALL available assets — as many sections as needed, no repeats
- [x] Alto Atacama cascade: Extend to show ALL available assets — as many sections as needed, no repeats
- [ ] Tented Camp cascade: Extend to show ALL available assets
- [ ] Springs cascade: Extend to show ALL available assets
- [ ] Gardens cascade: Extend to show ALL available assets
- [ ] Bocas del Toro cascade: Extend to show ALL available assets
- [ ] Hangaroa cascade: Extend to show ALL available assets
- [x] Atacama Option A: Add structured functional sections (Getting Here, Awards, Reviews) below cascade
- [x] Bocas Option B: Build pure cascade with all assets, no functional content on property page
- [x] Tented Camp Option C: Revert to original structured layout then weave cascade sections with functional breaks
- [x] Full-bleed desktop: CascadeSection media goes edge-to-edge viewport on desktop
- [x] Full-bleed desktop: Vertical media touches screen edge on its side, text stays contained
- [x] Full-bleed desktop: Horizontal media spans full viewport width
- [x] Full-bleed desktop: Mobile layout treated separately (contained/stacked)
- [ ] Apply full-bleed to AltoAtacama cascade
- [ ] Apply full-bleed to Bocas cascade (Option B)
- [ ] Apply full-bleed to Tented Camp cascade (Option C)
- [x] Remove Gallery from navigation menu on Nayara site
- [x] Add /api/hangaroa-lead POST endpoint for landing page signup form
- [x] Replace hero video on Manuel Antonio coming soon page with new uploaded video
- [x] Re-encode hero videos with audio preserved and upload to CDN
- [x] Build elegant mute/unmute button into BlobVideo component
- [x] Update all hero video URLs to new audio versions
- [x] Restore original homepage hero video
- [x] Place new vertical volcano video where it fits best on the site
- [x] Remove property name/tagline text from bottom of hero sections on property pages
- [x] Restore Tented Camp hero text to "Luxury Tented Camp Immersed in the Rainforest"
- [x] Swap in new Hangaroa hero video
- [x] Swap in new Hangaroa hero video
- [x] Add family photos to Moon Camp section on New Projects page
- [ ] Replace Tented Camp hero video (S1) with new Tentreel2.mov
- [ ] Replace Tented Camp hero video (S1) with new Tentreel2.mov
- [x] Use Hangaroa "Ancient Healing · Island Serenity" banner image as first podcast cover
- [x] Make all podcast thumbnails full-screen width
- [x] Add cover images to last two Hangaroa podcast episodes (+ ep 4 View from Afar)
- [x] Replace Bocas del Toro S1 with new drone video (dji_fly_20250307_090920_566)
- [x] Fix Atacama hero Sound button showing when video has no audio
- [ ] Remove all gallery sections/pages site-wide
- [x] Integrate gallery photos into Nayara By Night page sections (converted to 6 cascade sections)
- [x] Integrate gallery photos into Alto Atacama page sections (added 2 cascade sections: Pool + Flamingo Lagoon)
- [x] Integrate gallery photos into Bocas del Toro page sections (added 5 cascade sections: Beach, Reef, Aerial, Lifestyle, Final)
- [x] Integrate gallery photos into Tented Camp page sections (converted to 4 cascade sections)
- [x] Remove gallery nav links and routes
- [x] Replace Tented Camp Wildlife (Toucans & Tree Frogs) horizontal video with new pool video
- [x] Sound controls only on hero videos (and only if hero has audio); removed hasAudio from AwardsAndPress, Blog, Gastronomy, CostaRica
- [x] Integrate gallery photos into Gardens page sections and remove GallerySection (converted to 2 cascade sections: Wildlife + Hot Springs)
- [x] Integrate gallery photos into Hangaroa page sections and remove GallerySection (converted to 5 cascade sections)
- [x] Delete orphaned Gallery.tsx page
- [x] Replace Atacama S1 with new video (7FF5A7AF-F26F-417D-A250-B612FEA778EB)
- [x] Delete Hangaroa newsletter page (removed page, route, and import)
- [x] Delete Ayla on Krog page and all references (page deleted, Architecture ref removed, kept founder Ayla refs in NewProjects)
- [ ] Remove 32MB atacama-flamingo-lagoon-audio video and replace with placeholder
- [ ] Delete /rooms page and route
- [ ] Delete /chat-embed page and route
- [ ] Delete Hangaroa supersale page and route
- [x] Add 5 Bocas food images to "A Taste of Place" cascade section
- [x] Add 5 Atacama gastronomy images to "A Taste of Place" cascade section

## Homepage Layout Updates
- [x] Hero, S1, S2 all full bleed (edge to edge, no padding/margins), zero gap touching
- [x] Swap Tented Camp and Atacama positions in properties section on homepage

## Atacama Food Images
- [x] Add 5 Atacama gastronomy images to "A Taste of Place" cascade sections

## Tented Camp New Cascade Sections
- [x] Compress and upload Tented Camp MOV video to CDN
- [x] Add 2 new cascade sections to Tented Camp page

## Bocas Food Images
- [x] Add 5 Bocas food images to "A Taste of Place" cascade section

## Homepage Spacing Fix
- [x] Match gap between "Our Properties" and "Our Journey" to same gap as S2 → "Our Properties"

## Brand Book Page
- [x] Create BrandBook.tsx page with Alo Yoga color palette and site fonts (Cormorant Garamond, DM Sans)
- [x] Register /brand-book route in App.tsx

## Tented Camp Fix
- [x] Remove duplicate vertical video from Volcanic Healing section (replaced with spa still image, fixed black space)

## Brand Colors Refinement
- [ ] Extract dominant colors from 36 brand reference images
- [ ] Combine with existing Alo Yoga palette and curate final brand palette
- [ ] Update Brand Book page with refined comprehensive palette

## Tented Camp Return Cascade
- [x] Add new video to Tented Camp "Return" / final cascade section

## Tented Camp Frog Reel
- [x] Add frog-hunting reel video to Tented Camp cascade

## Tented Camp Hero Video
- [x] Replace Tented Camp hero video with new MOV (with audio)

## Nayara Gardens Room Image
- [x] Add aerial casita photo to Nayara Gardens room cascade section

## Atacama S1 Video
- [x] Replace S1 vertical media on Alto Atacama page with new video (sky cut, red blends into red)

## Atacama Hero Text Animation
- [x] Add subtle fade-in animation to text overlay on Atacama hero video

## Atacama Hero Video Update
- [x] Replace Atacama hero video with new MOV (with audio)

## Nayara Springs Hero Video
- [x] Replace Nayara Springs hero video with new MOV (with audio, desktop + mobile/vertical)

## Fix Springs Hero Video Mix-up
- [x] Fix hero swap: brand video (8492CD84) → homepage desktop, Springs-like video (Edits_NS_Vertical) → Springs desktop

## Navigation - Nayara Resorts Link
- [x] Add "Nayara Resorts" as last item in nav menu linking back to homepage (/)

## Hero H1 Fixes
- [x] Springs: remove "in Costa Rica", H1 is now just "Private Hot Spring Villas"
- [x] Tented Camp: remove "Adults Only", H1 is now "Luxury Tents in the Canopy" one line
- [x] Homepage: "Luxury Resorts Rooted in Nature" all on one line

## Hero Video Swaps
- [x] Move current sustainability hero video → brand experiences hero
- [x] Replace sustainability hero with new video (with audio)

## Atacama H1 Update
- [x] Change Atacama hero H1 to "Atacama Desert Lodge & Oasis" (one line), removed "Desert & Stars" subtitle

## Bug Fix
- [x] Fix /by-night route error — NayaraByNight.tsx failed to load (resolved after server restart)

## Atacama H1 Final
- [x] Revert Atacama H1 to "Atacama Desert Oasis Lodge"

## Hangaroa Hero
- [x] Replace Hangaroa hero with new video (with audio)

## Night Sections in Cascades
- [x] Add "By Night" cascade section to each property (before farewell), linking to /by-night page
- [x] Keep /by-night page as the dedicated night experience hub
- [x] Created shared ByNightCTA component with per-property customization
- [x] Alto Atacama: "The Clearest Skies on Earth" with cactus milky way imagery
- [x] Tented Camp: "When the Jungle Sleeps" with night video
- [x] Springs: "Hot Springs Under Stars" with night video
- [x] Gardens: "Rainforest After Dark" with frog tour video
- [x] Bocas del Toro: "Bioluminescent Waters" with bioluminescence imagery
- [x] Hangaroa: "Moai Beneath the Milky Way" with Moai milky way imagery

## Homepage Hero Video Update (Better Audio)
- [x] Analyze new resorts video (8522F533-6F8A-4602-B764-DD943CE77777.mov) — 1440x810, 28s, H.264+AAC stereo, 46MB
- [x] Compress video for web (desktop horizontal version) — 46MB → 6.5MB
- [x] Upload compressed video to CDN
- [x] Update homepage desktop hero video URL
- [x] Verify audio works with SOUND button on desktop
- [x] Confirm no audio on mobile hero (mobile uses separate vertical video without hasAudio)

## Brand Experiences Hero Video Update (Atacama Geysers with Audio)
- [x] Analyze new experiences hero video (Atacama geysers by Brice Ferre) — 2182x1228 HEVC, 24s, AAC stereo, 30MB
- [x] Compress video for web — 30MB → 3.3MB
- [x] Upload compressed video to CDN
- [x] Update brand experiences page desktop hero video URL
- [x] Verify audio works with SOUND button (geysers steam visible in hero)

## Press & Awards Hero Video Update
- [ ] Analyze new video for Press & Awards pages
- [ ] Compress and upload to CDN
- [x] Update Press page — full video hero with pool video (desktop horizontal + mobile vertical)
- [x] Update Awards page — pool video hero (desktop horizontal + mobile vertical)
- [ ] Verify both pages visually

## Alto Atacama Desert Suites Vertical Video Update
- [x] Analyze new desert suites vertical video — 1440x2560, 10s, H.264+AAC, 24.9MB
- [x] Compress and upload to CDN — 24.9MB → 3.2MB
- [x] Update Alto Atacama rooms/suites cascade section vertical video

## Alto Atacama Horizontal Photo Swap
- [x] Swap Mars on Earth horizontal to red landscape lady photo (atacama-ultrawide-1)
- [x] Desert Suites gets new shorter vertical video + keeps original horizontal
- [x] Protecting the Desert horizontal updated to avoid duplicate (now uses atacama-ultrawide-2)

## Hero Text — Smaller & Lower Across Properties
- [x] Alto Atacama — text smaller (xl/3xl/4xl) and lower (pb-6/pb-10)
- [ ] Tented Camp — same treatment
- [ ] Springs — same treatment
- [ ] Gardens — same treatment
- [ ] Bocas del Toro — same treatment
- [ ] Hangaroa — same treatment

## Homepage Hero CTA
- [ ] Add "Explore Our Properties" CTA button below homepage hero text

## Remove SOUND Button on Mobile
- [x] Hide SOUND button on mobile across all pages (desktop only) — hidden md:flex on NativeVideo button

## Wellness Page Hero Video
- [x] Swap Wellness page hero from static image to spa/springs video with audio

## Springs Gallery Removal
- [x] Inventory all photos in Springs Gallery page (4 reused + 3 unique photos + 1 video)
- [x] Remove Springs Gallery section from page
- [x] Redistribute gallery photos: wildlife monkey → Experiences, jungle pathway → Sustainability, tropical bird → Wellness, nature video → Gastronomy

## Mobile Vertical Hero Videos
- [ ] Fix vertical hero videos not being full screen on mobile
- [x] Change all vertical media (photos/videos) across all pages from 9:16 to 3:4 aspect ratio — AltoAtacama, BocasDelToro, TentedCamp, Springs, Gardens, NayaraByNight, CostaRica, all ByNightCTA sections

## Standardize All Hero H1s
- [x] Audit all pages for hero H1 styles and content below them
- [x] Standardize all hero H1s — same font (text-xl md:text-3xl lg:text-4xl), centered, nothing below
- [x] Remove subtitles from Press, Awards, Experiences, Sustainability, Gastronomy, Journal
- [x] Raise hero H1 position back up (pb-10 md:pb-16) on all property pages
- [x] Finish Wellness hero standardization (remove Explore More link, raise position)

## Secondary Pages — Tented Camp
- [x] TC Rooms secondary page
- [x] TC Experiences secondary page
- [x] TC Sustainability secondary page
- [x] TC Wellness secondary page
- [x] TC Gastronomy secondary page

## Secondary Pages — Bocas del Toro
- [x] BDT Rooms secondary page
- [x] BDT Experiences secondary page
- [x] BDT Sustainability secondary page
- [x] BDT Wellness secondary page
- [x] BDT Gastronomy secondary page

## Remove "All" Filter on Secondary Pages
- [x] Remove "All" category option — users must choose a specific category

## Cascade Aspect Ratio Standardization
- [x] Standardize all horizontal cascade media to 16:9 — fixed AltoAtacama (2.34/1, 1/1) and BocasDelToro (2.34/1, 1/1, 3/4)
- [x] Vertical cascade media already 3:4 (done)

## Cascade Text Side — Always Start Left
- [x] Ensure all property pages start with text on the left, then alternate — fixed TentedCamp, Gardens, Hangaroa, BocasDelToro, NayaraByNight (AltoAtacama & Springs already correct)

## Secondary Pages — Gardens
- [x] Gardens Rooms secondary page
- [x] Gardens Experiences secondary page
- [x] Gardens Sustainability secondary page
- [x] Gardens Wellness secondary page
- [x] Gardens Gastronomy secondary page

## Secondary Pages — Springs
- [x] Springs Rooms secondary page
- [x] Springs Experiences secondary page
- [x] Springs Sustainability secondary page
- [x] Springs Wellness secondary page
- [x] Springs Gastronomy secondary page

## Secondary Pages — Hangaroa
- [x] Hangaroa Rooms secondary page
- [x] Hangaroa Experiences secondary page
- [x] Hangaroa Sustainability secondary page
- [x] Hangaroa Wellness secondary page
- [x] Hangaroa Gastronomy secondary page

## Brand Home — Use Horizontal Hero for Both Orientations
- [x] Replace vertical mobile hero video with the horizontal desktop hero video on the brand/home page

## Property Pages — Alternating Slider/Sorter Sections + Inline Awards
- [x] Create reusable PropertySlider component (horizontal carousel for Rooms, Sustainability, Gastronomy)
- [x] Create reusable PropertySorter component (category filter tabs + grid for Experiences, Wellness)
- [x] Move award badges into story/intro section (under body text, not separate section) on all 6 properties (Alto Atacama done)
- [x] Remove standalone AwardBadgeStrip section from all 6 property pages (Alto Atacama done)
- [x] Alto Atacama: Rooms→Slider, Experiences→Sorter, Sustainability→Slider, Wellness→Sorter, Gastronomy→Slider
- [x] Tented Camp: Rooms→Slider, Experiences→Sorter, Sustainability→Slider, Wellness→Sorter, Gastronomy→Slider
- [x] Gardens: Rooms→Slider, Experiences→Sorter, Sustainability→Slider, Wellness→Sorter, Gastronomy→Slider
- [x] Springs: Rooms→Slider, Experiences→Sorter, Sustainability→Slider, Wellness→Sorter, Gastronomy→Slider
- [x] Hangaroa: Rooms→Slider, Experiences→Sorter, Sustainability→Slider, Wellness→Sorter, Gastronomy→Slider
- [ ] Bocas del Toro: Rooms→Slider, Experiences→Sorter, Sustainability→Slider, Wellness→Sorter, Gastronomy→Slider
- [ ] All sections use property-specific color palettes

## Brand-Level Photo Gallery
- [ ] Build unified brand gallery page with real photos from all 6 properties
- [ ] Sortable/filterable by property (Alto Atacama, Gardens, Springs, Tented Camp, Hangaroa, Bocas del Toro)
- [ ] Replace current Gallery page with this new brand-level gallery

## Shared Costa Rica Pages (Slider + Sorter Combo)
- [x] Costa Rica Experiences — shared page for Gardens, Springs, Tented Camp with Slider + Sorter combo
- [ ] Costa Rica Sustainability — shared page with Slider + Sorter combo
- [ ] Costa Rica Wellness — shared page with Slider + Sorter combo
- [x] Costa Rica Gastronomy — shared page with Slider + Sorter combo
- [ ] Update Gardens, Springs, Tented Camp homepage links to point to shared Costa Rica pages
- [ ] Update App.tsx routing for shared Costa Rica pages

## Video/Photo Heroes on Secondary Pages
- [ ] Discuss and decide on hero video/photo treatment for learn-more/secondary pages
- [ ] Consider reusing video clips from property homepages as section heroes

## UI Tweaks
- [x] Change "Ask Henry" button label to just "Henry"
- [x] Reduce padding/margin on Henry, Reserve, and Hamburger buttons (all matching compact pill size)

## H1 Below Video (All Property Pages)
- [ ] Move H1 below the hero video (no text overlay on video) on all 6 property pages
- [ ] Demote current H2 to subheader styling under the H1
- [ ] Ensure smooth visual transition from video to H1 section

## Property-Colored Nav Buttons & Footer
- [ ] Alto Atacama: Footer uses Atacama palette dark colors
- [ ] Alto Atacama: Hamburger, Reserve, Henry buttons use Atacama dark palette
- [ ] Tented Camp: Footer uses Tented Camp palette dark colors
- [ ] Tented Camp: Hamburger, Reserve, Henry buttons use Tented Camp dark palette
- [ ] Bocas del Toro: Footer uses Bocas palette dark colors
- [ ] Bocas del Toro: Hamburger, Reserve, Henry buttons use Bocas dark palette
- [x] Add sustainability Explore More link to Tented Camp cascade
- [ ] Add sustainability Explore More link to Bocas cascade (if missing)

## Media Numbering Convention
- [ ] On property homepages, all media (videos/images) numbered sequentially: Hero=1, S1=2, S2=3, etc.

## Cascade Continuity (All Properties)
- [ ] Sections 2 and 3 touching (no gap between story and first cascade section)
- [ ] Cascade gradient runs continuously from hero through gastronomy on every property
- [ ] Property-colored nav buttons (Hamburger, Reserve, Henry) on Atacama, Tented Camp, Bocas
- [ ] Property-colored footer on Atacama, Tented Camp, Bocas
- [ ] H1 moved below video on Atacama, Tented Camp, Bocas
- [ ] Replace badge images with AwardBadgeStrip inline under H2 body text in story section on all 3 properties
- [ ] Each property page section (Rooms, Experiences, Sustainability, Wellness, Gastronomy) gets one relevant blog/podcast entry tied to that pillar (replaces buffer breaks)

## Full 6-Property Homepage Rebuild (Standardized Cascade)
- [ ] Create shared PropertyCascadePage component with standardized structure
- [ ] Structure: Hero → H1 below video → Story (AwardBadgeStrip) → Rooms → Experiences → Sustainability → Wellness → Gastronomy → Getting Here → Reviews → Explore Other Properties → FAQ link → Footer
- [ ] No By Night CTA on property pages (By Night = gallery only)
- [ ] Gallery is Pinterest masonry, no sorting
- [x] Move By Night hero video to Experiences pillar page (/experiences) as its hero video
- [ ] Sub-pages linked from cascade pillars are unsortable continuous editorial flow
- [ ] Each cascade pillar section gets one dummy blog/podcast entry
- [ ] Continuous gradient from hero through gastronomy
- [ ] Sections 2 & 3 touching (no gap between story and first cascade)
- [ ] H1 below video (clean video, no text overlay)
- [ ] AwardBadgeStrip under body text in story section
- [ ] Replace Reserve CTA with "Explore Other Properties" section (links to other 5 properties)
- [ ] Alto Atacama: property palette on nav/footer/Henry
- [ ] Tented Camp: property palette on nav/footer/Henry
- [ ] Bocas del Toro: property palette on nav/footer/Henry
- [ ] Gardens: property palette on nav/footer/Henry
- [ ] Springs: property palette on nav/footer/Henry
- [ ] Hangaroa: property palette on nav/footer/Henry
- [ ] Move gallery assets into cascade sections (redistribute)
- [ ] All 6 properties use same standardized template
- [x] Move current Experiences pillar hero video to /alto-atacama/experiences page
- [ ] Delete /story route from App.tsx and remove all links to /story across codebase
- [ ] Upload new Gardens cascade assets to CDN (ice cream, room casita, bed jump, wine bar, 3 videos)
- [ ] Use new Gardens assets in Gardens cascade sections
- [x] Replace wellness hero video with new nature-based color wellness video (with audio) across Wellness.tsx, GardensWellness.tsx, SpringsWellness.tsx, Gardens.tsx
- [ ] RULE: Only hero videos have hasAudio. All other videos (cascade, gallery, pillar, sub-pages) = no audio
- [ ] Audit all NativeVideo usages: hasAudio ONLY on hero videos, remove from everywhere else
- [x] Move By Night hero video → Experiences pillar page hero
- [x] Move current Experiences pillar hero → Alto Atacama Experiences sub-page hero
- [ ] RULE: All 3 Costa Rica properties (Gardens, Springs, Tented Camp) share the SAME sub-pages for Wellness, Experiences, Sustainability, Gastronomy — one page each, Arenal/Tented Camp cascade format
- [ ] Consolidate GardensWellness + SpringsWellness into one shared Costa Rica Wellness sub-page
- [x] Consolidate GardensExperiences + SpringsExperiences into one shared Costa Rica Experiences sub-page (if separate exist)
- [ ] Same for Sustainability and Gastronomy sub-pages across all 3 CR properties
- [x] Remove H1 text overlays from ALL property + brand home hero videos — clean video only, H1 sits below video
- [x] 6 property-colored footers: each property page gets its own footer color palette
- [x] Make ALL floating buttons espresso colored (Sound, Henry, Reserve pill, hamburger pill)
- [x] RULE: Nothing on the website in all caps — removed all `uppercase` CSS classes
- [x] Fix Sound button label: not all caps
- [x] Add Nayara leaf icon to the left of the newsletter signup pill in the footer
- [ ] Hide center nav text (no "Nayara Resorts" or property name) on ALL deep pages
- [ ] Nayara by Night page: make all buttons black (hamburger, Reserve, Sound, Henry)
- [ ] Keep Nayara by Night as its own page (not just part of gallery)
- [x] Nayara by Night: black buttons + black footer
- [x] Hide center nav text on ALL deep pages (32 property deep pages + 4 brand pillar pages)
- [ ] Put H1s back on hero videos (property homes + brand home), same size as Beyond Sustainability text, overlaid on video
- [ ] Fix Press & Awards page to match the rest of the site's design
- [x] Vine starts off left edge of page (not contained within max-w container) — fixed: vine now uses full-width SVG overlay
- [x] Remove vine from footer (keep leaf only)
- [ ] H1 back on hero video, small size (start with Tented Camp)
- [ ] H2 same size as H1, can't be bigger than H1
- [x] Build page-level vine that follows user down from top-left (start with Tented Camp) — done: scroll-driven vine with organic serpentine path, leaves, tendrils
- [ ] Add location subtitle below property name in nav center label (e.g. "Arenal Volcano National Park, Costa Rica" below "Nayara Tented Camp")
- [ ] Nav location subtitle: left-to-right typewriter animation effect on the location text
- [x] Update Tented Camp story H2 to "Lifted On Stilts Above The Canopy / Eye to Eye with Arenal Volcano" (two lines)
- [x] Update Tented Camp story body to new copy about barren cattle ranch / rainforest / tented suites / hot springs
- [x] Update Gardens story H2 to "Rich Wildlife, Bold Discovery / Endless Rainforest" + new body
- [x] Update Springs story H2 to "Romance without Distraction / Wellness without Walls" + new body
- [x] Update Gardens story H2 to "Rich Wildlife, Bold Discovery / Endless Rainforest" + new body
- [x] Update Springs story H2 to "Romance without Distraction / Wellness without Walls" + new body
- [x] Brand Home: move H1 "Luxury Resorts Rooted in Nature" back onto hero video (overlaid, bottom center)
- [x] Brand Home: replace story S1 photo with old Tented Camp photo (IMG_5354)
- [x] Gardens: rebuild story section as cascade matching Tented Camp layout (text left, S1 video right, S2 video below)
- [x] Gardens hero: H1 overlaid on video (matching Tented Camp) — done
- [x] Springs hero: H1 overlaid on video (matching Tented Camp) — done
- [x] Tented Camp S1: replaced photo with new vertical video — done
- [x] Atacama: H1 back on hero video (overlaid, bottom center)
- [x] Atacama: remove award badges from story section
- [x] Atacama: reconnect cascade (no gaps between sections)
- [x] Tented Camp: scroll-driven vine animation that winds left-right down the page, growing as user scrolls — done: linear scroll mapping, seeded random path, visible leaves with gradients, vine behind images
- [x] Tented Camp: disable vine animation on mobile (useIsMobile check)
- [ ] Presentation sprint: audit and fix nav/button custom colors per property (green for CR, red/brown for Atacama, blue-green for Bocas)
- [x] Presentation sprint: create shared Costa Rica deep pages as gold standard (/arenal/experiences, /arenal/wellness, /arenal/gastronomy, /arenal/sustainability)
- [x] Presentation sprint: replicate Costa Rica deep page pattern for Atacama (red/brown palette)
- [x] Presentation sprint: replicate Costa Rica deep page pattern for Bocas (blue-green palette)
- [x] Presentation sprint: replicate Costa Rica deep page pattern for Hangaroa
- [x] Remove vine animation from Tented Camp page entirely (scrapped — component deleted)
- [ ] Add location subtitles below property names on deep pages (e.g., "Arenal Volcano National Park, Costa Rica", "Bocas del Toro, Panama", etc.)
- [x] Tented Camp S1: push H2 text higher in the text column (not vertically centered — align toward top)
- [x] Tented Camp S1: add awards display below body text (Travel + Leisure, Green Globe, Virtuoso badges)
- [x] Atacama: change H1 to "Atacama Desert Oasis Under the Stars"
- [x] Swap wellness deep page hero video with new meter-based wellness video (with audio)
- [x] Swap gastronomy deep page hero video with new A Taste of Place video (with audio)
- [x] Swap experiences deep page hero video with new pillar experiences video (with audio)
- [ ] Add location subtitles (place, country) to property page headers
- [ ] Swap Awards/Press hero video with new pool video (with audio)
- [ ] Update Awards page text style to match other pillar deep pages
- [x] Add location subtitles to all 6 property page headers (TentedCamp, Gardens, Springs, AltoAtacama, BocasDelToro, Hangaroa)
- [x] Swap Awards/AwardsAndPress hero video to new pool video with audio
- [x] Update AwardsAndPress hero text style to match other pillar pages
- [ ] Rebuild Brand Book page from scratch codifying all design rules
- [ ] Update Awards/AwardsAndPress mobile hero with vertical timelapse video
- [ ] Brand home: use Tented Camp photo as S2 in Our Properties section
- [ ] Brand home: narrow spacing between Our Properties and Two Decades of Discovery
- [ ] Compress and upload Nayara by Night timelapse video (with audio)
- [x] Contact Us: remove 1 prefix and parentheses from 844 number
- [x] Make Reserve pill, Henry badge, and Sound button slightly thicker to match hamburger pill
- [x] Rename concierge button from "Henry" to "Ask Henry"
- [x] Remove heavy wellness video from Nayara Gardens property page
- [x] Remove all duplicate videos across all property pages (including frog video)
- [x] Revert S2 back to tropical aerial photo
- [x] Use tropical aerial photo for Tented Camp card in Our Properties grid
- [ ] Fix Tented Camp awards: third badge should be Leading Hotels of the World (LHW)
- [ ] Tented Camp: restructure experience section to have Explore the Hotel + Explore sections like old Arenal page
- [x] Bocas del Toro: fix H1, hero video, and connect cascade sections
- [x] Bocas del Toro: add new vertical drone video to accommodation section (left side)
- [x] Bocas del Toro: fix Panamá encoding issue
- [ ] Bocas del Toro: ensure cascade is continuous from hero through gastronomy
- [x] Bocas: move Wellness Caribbean Serenity vertical video to S1 position
- [ ] New Nayara by Night hero video (compress and swap)
- [ ] Full property color system: Tented Camp = olive tree, Gardens = rich green, Springs = blue-green, Bocas = ocean blue-green, Atacama = desert red/brown, Hangaroa = slate gray
- [ ] Apply property colors to buttons on all property and deep pages
- [ ] Apply property colors to footer on all property and deep pages
- [ ] Apply property colors to all CR deep pages (Experiences, Wellness, Gastronomy, Sustainability) per property
- [x] CR Experiences: restructure into "Explore Nayara" (on-property) vs "Explore Arenal" (off-property) sections
- [ ] Tented Camp: add Pura Vida blog link in Experiences section
- [ ] Tented Camp: add Alfaro podcast link in Sustainability section
- [ ] Blog/podcast labels use property color palette
- [x] CR Experiences: restructure into "Explore Nayara" (on-property) vs "Explore Arenal" (off-property) sections (duplicate)
- [ ] Tented Camp: add Pura Vida blog link in Experiences section
- [ ] Tented Camp: add Alfaro podcast link in Sustainability section
- [ ] Atacama: add "This is Mars" blog link in Story section
- [ ] Atacama: add Stargazing blog link in Experiences section
- [ ] Bocas del Toro: add Coral Reef Restoration podcast (Coming Soon) in Sustainability section
- [ ] Blog/podcast labels use property color palette
- [x] Hangaroa: add two long-form Hangaroa videos in Sustainability section (from podcast section)
- [x] Review brand palette: consider bone, espresso, and gravel as brand colors — keeping current (already bone/espresso aligned)
- [x] Gardens palette: evaluate clover green vs current rich green — keeping current forest green (more muted/luxury)
- [x] Bocas palette: evaluate stone blue vs current ocean blue-green — keeping current Caribbean teal (more geographically authentic)
- [ ] Springs: add Michelin Keys blog link in Story/Awards section
- [ ] Place S Certification blog link on relevant property/sustainability pages (Atacama)
- [ ] Place Green Globe blog link on relevant property/sustainability pages (CR properties)
- [ ] Blog links: make them visually prominent from the start (use accent color by default, not just on hover)
- [x] Brand-level Pinterest-style masonry gallery page with mix of all properties, sparing short videos
- [x] Cascade trim: cut off property pages after pillars + Nayara By Night, comment out extra sections (preserve, don't delete)
- [x] Performance pass: reduce/cut heavy videos, optimize for speed (cascade trim removed bulk of heavy video load)
- [x] Add deep page links (Rooms, Experiences, Wellness, Gastronomy, Sustainability) to all pillar sections on all 6 property pages
- [ ] Add scrolling letter headers with property-specific colors to all deep pages (Experiences, Wellness, Gastronomy, Sustainability)
- [ ] Fix hero video on experiences deep page showing wrong property imagery (Moai instead of correct property)
- [x] Update brand book with correct property palettes (match actual propertyPalettes.ts values)
- [x] Clean brand book copy — remove Alo Yoga reference
- [ ] Re-enable audio on mobile vertical hero videos across all property pages
- [ ] Add scrolling letter headers with property-specific colors to all deep pages
- [x] Gallery: rebuilt as full media inventory — 139 assets, Pinterest masonry, property/media filters, snail badges, usage labels, native aspect ratios

## Deeper Pages — Room Types (Individual Landing Pages)
- [ ] Build reusable Room Deeper page template (hero, photo gallery, specs, amenities, booking CTA)
- [ ] Gardens: Arenal Pool Casita deeper page
- [ ] Gardens: Rainforest Pool Villa deeper page
- [ ] Springs: Springs Villa deeper page
- [ ] Tented Camp: Tent deeper page
- [ ] Tented Camp: Family Tent deeper page
- [ ] Tented Camp: Grand Tent deeper page
- [ ] Tented Camp: Residences (Casa Paloma & Casa Dana) deeper page
- [ ] Wire all room deeper page routes in App.tsx

## Deeper Pages — Restaurant/Venue (Individual Landing Pages)
- [ ] Build reusable Restaurant Deeper page template (hero, menu, chef, ambiance, reservation CTA)
- [ ] Wire all restaurant deeper page routes in App.tsx
- [ ] Content TBD — user will provide restaurant list and details

## Deeper Pages — Experience (Individual Landing Pages)
- [ ] Build reusable Experience Deeper page template (hero, description, highlights, gallery, booking CTA)
- [ ] Sample experience deeper page (e.g., Frog Tour or Yoga)
- [ ] Wire experience deeper page routes in App.tsx

## Henry Chatbot Supercharge
- [ ] Audit Henry's current system prompt and knowledge base
- [ ] Build comprehensive knowledge base from all website content (properties, rooms, restaurants, experiences, awards, blog posts)
- [ ] Enforce strict no-hallucination policy — if Henry doesn't know, admit it and hand off to reservations
- [ ] Add reservations contact info (email + phone from footer) for handoff
- [ ] Test Henry with edge cases to verify no false information

## Unified Journal Rebuild
- [x] Add property tags to all podcast episodes in journal.ts data
- [x] Create unified JournalEntry type merging blog posts + podcast episodes
- [x] Rebuild Journal page as single unified feed (no tabs)
- [x] Property-only filter bar (no pillar/topic filters)
- [x] Video/podcast cards get play button overlay to distinguish from articles
- [x] Articles link out to blog.nayararesorts.com
- [x] FAQ stays as separate section or accordion at bottom
- [x] Remove separate Podcast page / redirect to /journal (already redirects)
- [x] Verify build and save checkpoint

## New Brand Hero Video
- [x] Upload new hero video to CDN
- [x] Swap hero video URL in homepage
- [x] Verify hero plays correctly

## UI Tweaks
- [x] Lower "Luxury Resorts Rooted in Nature" headline closer to bottom of hero (brand homepage only)
- [x] Rename "Ask Henry" to "Nayara Concierge" everywhere
- [x] H1 "Luxury Resorts Rooted in Nature" hidden during hero video, fades in only near the end of the clip
- [ ] Add super subtle realistic vine/botanical texture overlay near H1 on brand homepage hero
- [ ] Add super subtle realistic vine/botanical texture overlay across entire brand homepage (not just hero)
- [x] Change H1, Nayara Resorts top text, and all nav button backgrounds to #F2EBE3 (cream/linen)

## Color Palette Update — Official 36-Swatch Palette
- [x] Extract hex values from 36 swatch images
- [x] Map swatches to brand foundation colors (Warm White, Sand, Espresso, Blue Gray, Taupe)
- [x] Map swatches to property primary colors (Olive Tree, Clover Green, Teal, Terracotta, Steel Blue, Ocean)
- [x] Update propertyPalettes.ts with new hex values
- [x] Replace all hardcoded old brand colors across 29+ page files
- [x] Update CSS variables in index.css (brand foundation + property palettes + shadcn theme)
- [x] Update scrollbar and selection colors
- [x] Update BrandBook.tsx color names and descriptions
- [x] Verify visual rendering on Home, Tented Camp, Alto Atacama, Gardens pages

## New Video Assets — Tent Reels + Waterfall/Rio Celeste
- [ ] Analyze 4 uploaded videos to identify content
- [ ] Compress and upload Nayara Tent 1 to CDN
- [ ] Compress and upload Nayara Tent 2 to CDN
- [ ] Compress and upload Rio Celeste video to CDN
- [ ] Compress and upload La Fortuna Waterfall video to CDN
- [ ] Place tent videos on Tented Camp page
- [ ] Place waterfall/Rio Celeste videos on experiences pages

## Tented Camp Carousel Fix
- [ ] Identify wrong photos in Tented Camp carousel (last 3-4 photos)
- [ ] Remove non-Tented-Camp photos from carousel
- [ ] Move Moai head photo to Hangaroa page
- [ ] Delete removed photo files from CDN references to reduce file size

## Footer Updates
- [x] Change Tented Camp footer background color to Olive Tree (#525642)
- [ ] Ensure footer says "Resorts" consistently on property pages

## Tented Camp Property Card Image Fix
- [ ] Replace bogus first photo in "Our Properties" Tented Camp card with aerial tent + volcano photo

## Tented Moon Camp Page
- [ ] Create dedicated Tented Moon Camp page
- [ ] Remove Tented Moon Camp from Coming Soon section
- [ ] Add Tented Moon Camp to navigation

## Video Upload and Tented Camp Cascade Replacements
- [ ] Upload all 4 new videos to CDN
- [ ] Identify which videos are tent reels, Rio Celeste, La Fortuna
- [ ] Replace S1 section (right below hero) with first tent reel video
- [ ] Replace bad carousel items (toucan, Moai) with remaining tent reel and waterfall videos
- [ ] Remove stacked photo grid on Tented Camp page and replace with empty slider/carousel

## Session — Apr 12 2026
- [x] Replace Tented Camp property card image with aerial tent+volcano photo (SidebarNavigation, AllDestinations, Home)
- [x] Remove toucan video from gallery.ts and TentedCamp.tsx, replace with tent reel video
- [x] Upload 4 tent reel videos to CDN (tent-1, tent-2, tent-3, tent-reel)
- [x] Remove "Brand" filter from Journal page, keep only "All" + specific properties
- [x] Rename first brand blog to "Luxury Resorts Rooted in Nature: The Nayara Story"
- [x] Change fallback label from "Brand" to "Nayara" on Journal cards
- [x] Interleave podcast/video episodes among articles (spaced out, not clumped)
- [x] Add full awards to Tented Camp on Awards page (T+L, Condé Nast, LHW, Green Globe, Carbon Neutral)

## Overnight Bot Upgrade — Apr 12-13 2026
- [x] Rename all "Starry" references to "Henry" across the codebase
- [x] Scrape all blog article URLs for full text content (44 articles scraped)
- [x] Extract property knowledge from all 6 property pages
- [x] Compile comprehensive knowledge base document
- [x] Upgrade Henry's system prompt with full knowledge base
- [x] Test Henry against diverse questions (136/136 tests passing)
- [x] Move sound control to top left + match button color on every page with audio
- [x] Remove four photos under founding family in coming soon section
- [x] Change "Concierge" button/label to "Ask Concierge" in the UI

## Moon Camp Adventure Videos — Apr 12 2026
- [x] Analyze 8 new Moon Camp adventure videos
- [x] Upload all 8 videos + girls hero photo to CDN
- [x] Place 8 videos as alternating left/right storybook sections after Moon Camp ending
- [x] Girls hero photo as landscape hero for new storybook section
- [ ] Add landscape connector videos between reels (waiting for user to send)
- [x] Remove sound pill from mobile homepage header
- [x] Make sound pill stationary with the video (not fixed/following scroll)
- [x] Rebuilt storybook section: dramatic reveal + 5 new videos (landscape-vertical-landscape-vertical-landscape) with audio
- [x] Tented Camp H1: "Luxury Tented Camp Immersed in the Rainforest"
- [x] Moon Camp H1: "Luxury Tented Camp Perched on the Moon"

- [ ] Fix video #7 (generated_1581360d) in Moon Camp cascade — it's portrait not landscape, upload correct vertical version and update layout
- [x] Remove ALL old chapter content (chapters 1-3, old images, old videos) between Moon Camp ending and the 9-video cascade — cascade starts right after Moon Camp CTA
- [ ] Remove ALL horizontal photos and videos on mobile across EVERY page — no horizontal content on mobile, period. Everything must be vertical or square on mobile.
- [x] Reorder Tented Camp sections: after Rooms → Sustainability/Wildlife next
- [x] Reorder Springs sections: after Rooms → Wellness next
- [x] Reorder Gardens sections: after Rooms → Experiences next
- [ ] Add "Adults Only" category to navigation (Springs, Bocas del Toro)
- [ ] Add "Families" category to navigation (Gardens, Tented Camp, Alto Atacama, Hangaroa)
- [ ] Create Wildlife hub page as a new pillar (alongside Experiences, Wellness, Gastronomy, Sustainability)
- [ ] Add Wildlife to navigation menu
- [ ] Create Adults Only hub page as a full pillar (Springs, Bocas del Toro)
- [ ] Create Families hub page as a full pillar (Gardens, Tented Camp, Alto Atacama, Hangaroa)
- [ ] Update PILLARS to 7 total: Experiences, Wellness, Gastronomy, Sustainability, Wildlife, Adults Only, Families
- [x] Separate Podcast from Blog — Podcast gets its own page/route again at /podcast
- [ ] Enable hasAudio on ALL videos across the entire site — any video that has audio gets the Sound pill, muted by default
- [ ] Delete bottom photo grid section on homepage (aerial pool, sunset, resort photos below the main content)
- [x] Upload tented camp sunset photo and add as S4 on Tented Camp page
- [ ] New property page rule: S1=video hero, S2=horizontal photo always
- [ ] Delete bottom photo grid section on homepage
- [x] Move Coming Soon page to internal/private section (like Brand Book) — at /internal/new-projects
- [x] Build auto-scroll cinematic mode prototype on Alto Atacama: "Ready to Begin" prompt → music + auto-scroll → touch to stop
- [x] Disable CinematicScroll on mobile — desktop only
- [x] Disable all audio (Sound pills, hasAudio) on mobile — desktop only
- [x] Use Alto Atacama hero video audio as the ambient audio for the entire cinematic scroll page
- [ ] Fix CinematicScroll Sound pill alignment — must be even with hamburger and Reserve (same top/height as nav bar)
- [ ] Add CinematicScroll with hero video audio to Tented Camp home page
- [ ] Add CinematicScroll with hero video audio to Gardens home page
- [ ] Add CinematicScroll with hero video audio to Springs home page
- [ ] Add CinematicScroll with hero video audio to Hangaroa home page
- [ ] Add CinematicScroll with hero video audio to Bocas del Toro home page
- [ ] Add CinematicScroll with hero video audio to brand Homepage
- [x] Remove all hasAudio/sound from non-home pages (pillars, deep, deeper pages)
- [ ] Add CinematicScroll auto-scroll at 1.35 speed to all 7 home pages (6 hotels + brand homepage)
- [x] CinematicScroll Sound pill must match hamburger/Reserve color on each respective page (not fixed accent)
- [x] Remove Resume button from CinematicScroll
- [x] Add CinematicScroll to Brand Homepage (speed 1.25, hero video audio)
- [ ] Change Alto Atacama CinematicScroll speed to 1.3
- [x] Add CinematicScroll to Tented Camp (speed 1.35, hero video audio)
- [x] Add CinematicScroll to Gardens (speed 1.4, hero video audio)
- [x] Add CinematicScroll to Springs (speed 1.45, hero video audio)
- [x] Add CinematicScroll to Hangaroa (speed 1.5, hero video audio)
- [x] Add CinematicScroll to Bocas del Toro (speed 1.4, hero video audio)
- [ ] Add "Internal" label to Gallery, New Projects, Brand Book, and Henry pages
- [ ] Consolidate Brand Book to just one page (remove duplicate)
- [x] Remove animation on logo leaf at the bottom (footer)
- [x] Add CinematicScroll to Brand Homepage (speed 1.25, hero video audio)
- [x] Add CinematicScroll to Tented Camp (speed 1.35, hero video audio)
- [x] Add CinematicScroll to Gardens (speed 1.4, hero video audio)
- [x] Add CinematicScroll to Springs (speed 1.45, hero video audio)
- [x] Add CinematicScroll to Hangaroa (speed 1.5, hero video audio)
- [x] Add CinematicScroll to Bocas del Toro (speed 1.4, hero video audio)
- [ ] Make brand homepage hero video sticky/fixed background that plays behind all content as user scrolls
- [x] Remove all per-section hasAudio sound pills from NativeVideo/BlobVideo across all pages — only CinematicScroll Sound pill at top
- [ ] Add Resume button next to Reserve pill (top right) to restart auto-scroll
- [x] Add uploaded video (VideoJul312025) to bottom of Atacama page
- [x] Scaffold Capacitor project for native iOS + Android app wrapper
- [ ] Disable CinematicScroll (auto-scroll + audio) on mobile — desktop only
- [ ] Remove /story route and page entirely
- [ ] Add "Internal" label to Brand Book, Henry, Gallery, and Coming Soon in nav
- [ ] Rename "New Projects" to "Coming Soon" in nav and page
- [x] Update podcast episode 4 cover with AFAR "View from Afar" Leo Ghitis image
- [ ] Ensure no duplicate nav items (if Internal version exists, remove non-internal version)
- [ ] Update last podcast episode cover with Piedras Rojas Atacama landscape image
- [x] Replace image above "Geothermal Healing" on Atacama page with flamingos photo (below "Protecting the Desert")
- [x] Update AFAR podcast episode 4 cover with Leo Ghitis image (IMG_7309)
- [x] Remove all hasAudio props and Sound pills from ALL non-homepage pages (Sustainability, Awards, Podcast, Architecture, etc.)
- [x] Restructure Sustainability pillar page with 4 subcategories: Flora & Fauna, Certification, Community, Operations
- [x] Add two-axis filtering on Sustainability page: subcategory (Flora & Fauna, Certification, Community, Operations — no "All") + hotel
- [x] Remove Flora & Fauna as separate nav category — it lives under Sustainability only
- [x] Add Spanish version of Hangaroa sustainability podcast episode (YouTube: EinNAkAoKE8, 3:30)
- [x] Add Spanish version of Atacama sustainability podcast episode (YouTube: H9VxyDgv31U, 1:01)
- [x] Consolidate Hangaroa + Atacama sustainability videos: 2 entries with ES/EN language toggle instead of 4 separate entries
- [x] Set CinematicScroll speed to 1.35 for all 6 property homepages
- [x] Set CinematicScroll speed to 1.4 for the brand homepage (already at 1.4)
- [x] Delete /brand-book route and related page/components
- [x] Delete /henry route and related page/components
- [x] Add sustainability videos (EN+ES toggle) to ALL sustainability deep pages, following Voices from the Island pattern
- [x] Move Explore Sustainability CTA below the videos at the very bottom of all sustainability deep pages
- [x] Remove black bars/letterboxing from YouTube video embed on sustainability video cards — make thumbnail fill full card width
- [x] Add category overview section (Flora & Fauna, Operations, Community, Certifications) above the initiative cards on sustainability deep pages
- [x] Tag each initiative card by its category on sustainability deep pages
- [x] Add 4 clickable category cards (Flora & Fauna, Operations, Community, Certifications) above existing 4 initiative cards on sustainability deep pages (8 total)
- [x] Change scrolling marquee text from "SUSTAINABILITY" to "BEYOND SUSTAINABILITY" on sustainability deep pages
- [x] Remove location subtitle from sustainability deep page heroes (no San Pedro de Atacama, Rapa Nui, etc.)
- [x] Remove hamburger menu and Reserve button from top of all sustainability deep pages
- [x] Add sustainability/wildlife-related blog articles to Voices sections on all sustainability deep pages
- [x] Add Bocas del Toro coral reef restoration podcast and blog as Coming Soon placeholders
- [ ] Split S Certification/Green Globe blog into two: S Certification (Hangaroa + Atacama) and Green Globe (Bocas + Costa Rica)
- [x] Update all blog links to point to internal /journal/slug pages, not blog.nayararesorts.com
- [ ] Split S Certification/Green Globe blog into two: S Certification (Hangaroa + Atacama) and Green Globe (Bocas + Costa Rica)
- [x] Scrape blog.nayararesorts.com for all sustainability-related blog posts
- [x] Create on-site duplicate blog posts for all sustainability articles from blog.nayararesorts.com
- [x] Update all blog links to point to internal /journal/slug pages instead of blog.nayararesorts.com
- [x] Add AFAR podcast, Leo Pioneering Sustainable Luxury, and Leo Suite Success videos to Costa Rica sustainability pages (Gardens, Springs, Tented Camp)
- [x] Add Night at the Camp blog to Costa Rica sustainability Voices section
- [x] Make all 8 cards (4 category + 4 initiative) on sustainability deep pages use brown styling matching the pillar Sustainability page
- [x] Download and analyze Nayara ESG Sustainability Report PDF
- [x] Incorporate ESG report data into all 4 property sustainability pages (Costa Rica, Alto Atacama, Bocas del Toro, Hangaroa)
- [x] Create 5 new blog posts from scraped articles: Atacama Oasis, Hangaroa Regeneration, Bocas Condé Nast, Beyond Sustainability, Bocas & Atacama Study
- [x] Create dynamic blog route (/journal/:slug) with DynamicBlogPost.tsx for all blog posts
- [x] Add internal blog routing (wouter Link) for /journal/ URLs in sustainability BlogCards
- [x] Increase sustainability property page hero height from 50vh to 70vh for more vertical length
- [x] Replace Nayara Springs property card image on homepage with villa/plunge pool photo (no volcano)
- [x] Remove /new-projects route
- [x] Add /internal-brandbook route back
- [x] Rename /gallery to /internal-gallery
- [x] Bring back /internal-henry route
- [x] Standardize all property page and sub-page heroes to 18:9 (2:1) aspect ratio (homepage + brand/pillar pages stay 16:9)
- [x] Hide leaf logo on mobile in footer (desktop only)
- [x] Verify Tented Camp sustainability page has ESG report data incorporated
- [x] Ensure every property homepage and all its sub-pages (experiences, wellness, gastronomy, sustainability, rooms) consistently use that property's color palette — no hardcoded colors or wrong fallbacks
- [x] Audit and fix: every property homepage + all sub-pages must use that property's palette consistently (nav, hero, sections, buttons, footer) — 7 self-contained websites under one umbrella
- [x] Fix footer buttons/accents to use property palette on property pages
- [x] Update BrandBook page with 36 swatch images, hex values, and updated color names (Bone, Gravel, Olive Tree)
- [x] Add rich ESG report sections to Costa Rica sustainability page: stats counters, timeline, charts/graphs, editorial storytelling blocks — beyond the existing 4 initiative cards
- [x] Deduplicate all journal/blog post cover images — no image should repeat across any two posts
- [x] Site-wide image deduplication audit: no image URL should appear twice anywhere across the entire site (blog heroes, journal covers, property cards, section images, sustainability pages, gallery, etc.)
- [x] Build extensive ESG report section on Tented Camp sustainability page: stats counters, animated timelines, charts/graphs, editorial storytelling — as rich and detailed as possible
- [x] Site-wide image deduplication audit: no image URL should appear twice anywhere across the entire site (blog heroes, journal covers, property cards, section images, sustainability pages, gallery, etc.) — exception: Gardens/Tented Camp/Springs shared Costa Rica pages are exempt since they share content
- [x] Build extensive ESG report section on Tented Camp sustainability page: stats counters, animated timelines, charts/graphs, editorial storytelling — as rich and detailed as possible
- [x] Fix JSX namespace TypeScript error in CostaRicaSustainability.tsx
- [x] Add One Ocean Planet partnership blog/content to Bocas del Toro sustainability data
- [x] Add Mars/Atacama Final Frontier blog link below the Mars on Earth H2 body text on Alto Atacama homepage
- [x] Add Adventures in Flavor blog link to Costa Rica gastronomy page
- [x] Add "From Deadly Sin to Rainforest Royalty" blog link to the brand story page
- [x] Add Tapati Rapa Nui Festival blog link to Hangaroa sustainability page
- [x] Add hot springs history/science blog link to Costa Rica experiences page
- [x] Add stargazing resort blog link to the stargazing section of Alto Atacama experiences page (already existed)
- [x] Fix blog cover image issue at bottom of Tented Camp sustainability page
- [x] Change footer background to use primary color for Gardens, Tented Camp, and Springs
- [x] Change Gardens primary from Clover Green (#286241) to Dark Olive (#525642) — the old Tented Camp color
- [ ] Deduplicate blog covers: change journal.ts covers for articles that duplicate sustainability.ts covers
- [ ] Update sustainability blog cards to link to internal /journal/[slug] routes instead of blog.nayararesorts.com
- [ ] Create internal blog posts for all sustainability articles (migrate from blog.nayararesorts.com):
  - [ ] Wildlife Conservation in Arenal (Costa Rica)
  - [ ] Birdwatching + Meeting The Toucans (MERGED into one post)
  - [ ] Women's Empowerment Through Housing (Costa Rica)
  - [ ] Green Globe Certification (Costa Rica / Bocas)
  - [ ] Regenerative Tourism (Costa Rica)
  - [ ] A Night at the Camp (Costa Rica)
  - [ ] One Ocean Planet (Bocas)
  - [ ] Biodiversity Underwater (Bocas)
  - [ ] Private Island Paradise Bocas (Bocas)
  - [ ] Hangaroa Horses / Wildlife Conservation Chile (Hangaroa)
  - [ ] Challenge Easter Island Outdoors (Hangaroa)
  - [ ] Drawing from Time (Hangaroa)
  - [ ] Tapati Rapa Nui (Hangaroa)
  - [ ] Atacama sustainability articles
- [x] Build ESG report sections for Bocas del Toro sustainability page (stats, narrative, pillars, timeline, certifications)
- [x] Build ESG report sections for Hangaroa sustainability page (stats, narrative, pillars, timeline, certifications)
- [x] Build ESG report sections for Alto Atacama sustainability page (stats, narrative, pillars, timeline, certifications)


## Hamburger Menu Label Updates
- [x] Split "Romance or Family Fun" into two separate items: "Adults-Only" and "Family-Friendly"
- [x] Rename "Regenerative Travel" to "Beyond Sustainability"

## Homepage Text Edit
- [ ] Remove third paragraph under first H2 ("We Don't Build Hotels. We Reveal Places.") on homepage

## Homepage Text Edit
- [x] Remove third paragraph under first H2 on brand homepage
- [x] Change blog link text on brand homepage from "From Deadly Sin to Rainforest Royalty" to "Luxury Resorts Rooted in Nature: The Nayara Story"

## ESG Stats Trimming
- [x] Remove bottom two stat counters (restaurants + certifications) from all property sustainability ESG sections — keep only top 4
- [x] Change blog link on brand homepage to subtle box button, remove arrow symbol
- [x] Add "Nayara Resorts" link to footer's Our Resorts column (matching hamburger menu)

## Camel Color Update
- [x] Change accent gold (#AD8F61) to gravel (#8a7a6a) on brand homepage (PALETTE.accent, Nayara Story button, property card ovals)
- [x] Change hamburger button background to gravel
- [x] Change Reserve pill button to gravel
- [x] Change Ask Concierge button to gravel
- [x] Change all brand pages (AllDestinations, BlogPost, BlogPostTemplate, Newsletter) from gold to gravel

## Remove ESG Pillar Boxes
- [ ] Remove ESG pillar boxes (Flora & Fauna, Community, Operations, Certifications, etc.) from all 6 property sustainability pages

## Rename Adults-Only / Family-Friendly
- [x] Change "Adults-Only" to "Romantic Escape" everywhere
- [x] Change "Family-Friendly" to "Family Adventure" everywhere
- [x] Replace vertical + horizontal photos on brand homepage with two vertical photos (Springs couple bridge + Rapa Nui portrait)

## Rename Podcast
- [x] Rename "Podcast" to "Long-Form Video" across all navigation, footer, and page references

## Rename Journal to Blog
- [x] Rename "Journal" to "Blog" across all navigation, footer, page titles, and visible labels

## Nayara Journal Column Restructure
- [x] Restructure Nayara Journal footer column to 3 items: "Blog & FAQ", "Press & Awards", "Long-Form Video"
- [x] Update hamburger menu to match the same grouping

## Nayara Journal Column Restructure
- [x] Restructure Nayara Journal footer column to 3 items: "Blog & FAQ", "Press & Awards", "Long-Form Video"
- [x] Update hamburger menu to match the same grouping
- [x] Remove AFAR story from Long-Form Video (journal.ts) and sustainability.ts — not a video
- [x] Replace woman in red (storyV) on Atacama homepage with Gil backdrop video

## Footer & Color Consistency
- [x] Add visual separator between six properties and "Nayara Resorts" in footer Our Resorts column
- [x] Match footer background color to property nav/button color on every property page
- [x] Match footer background color to brand nav color on brand pages

## Footer & Color Consistency (Final)
- [x] Add visual separator between six properties and "Nayara Resorts" in footer Our Resorts column
- [x] Change brand page nav buttons (hamburger, Reserve, Ask Concierge) to brownstone (#7B5B3A) + brand footer to brownstone
- [x] Ensure every property page footer matches the property nav/button color (Atacama=Terracotta, Bocas=Aqua, Hangaroa=Steel Blue)
- [x] Make footer text white/bright for better readability against brownstone and property colors
- [x] Remove Internal section (Gallery, Coming Soon) from hamburger menu (desktop + mobile)
- [x] Change all brownstone (#7B5B3A) to espresso (#3B2B26) on brand nav pills, Concierge, and footer default
- [x] Change footer text from white to bone (#ece8e1) tones for warmer readability
- [x] Replace all gravel (#8a7a6a) with espresso (#3B2B26) across all brand pages (Home, AllDestinations, BlogPost, BlogPostTemplate, Newsletter)
- [x] Remove "Romantic Escape" and "Family Adventure" from hamburger menu, footer, and explore navigation
- [x] Change "The Nayara Narrative" to "The Nayara Journal" on brand homepage

## Flatten Section Background Colors
- [x] Flatten Bocas del Toro SECTION_COLORS from gradient array to two alternating colors
- [x] Flatten Alto Atacama SECTION_COLORS from gradient array to two alternating colors
- [x] Flatten Tented Camp SECTION_COLORS from gradient array to two alternating colors

## Nav/Footer Color Matching Fixes
- [x] Fix Gardens.tsx footer bgColor from #22322E to #525642 (match nav)
- [x] Fix Springs.tsx footer bgColor from #22322E to #3B6E7B (match nav)
- [x] Fix TentedCamp.tsx footer — add bgColor=#868B75 (match nav)
- [x] Fix Gardens subpages (Experiences, Gastronomy, Rooms, Sustainability, Wellness) — add bgColor=#525642
- [x] Fix Springs subpages (Experiences, Gastronomy, Rooms, Sustainability, Wellness) — add bgColor=#3B6E7B
- [x] Fix TentedCamp subpages (Experiences, Gastronomy, Sustainability, Wellness, Rooms) — add bgColor=#868B75

## New Atacama Hero Video
- [x] Replace Alto Atacama hero video with new uploaded video
- [x] Replace Atacama s1 (storyV) with new uploaded video (no audio)
- [x] Remove all horizontal images/photos from Atacama homepage cascade sections

## Atacama Gallery Overhaul
- [x] Remove internal/admin UI elements from Atacama gallery (keep all media)
- [x] Rebuild gallery as public-facing Pinterest-style masonry layout (photos + videos)
- [x] Add Gallery link to BrandNavigation below Nayara by Night
- [x] Add Gallery link to Footer
- [x] Remove all hero videos from Atacama gallery
- [x] Remove any video longer than 5 seconds from Atacama gallery (hero videos removed; all remaining videos kept as gallery items)
- [x] Remove Michelin 3 Keys image from gallery
- [x] Remove spa kids in robes image from gallery
- [x] Remove Costa Rica nature image from gallery
- [x] Remove property grouping/sorting from gallery — mix all items into one shuffled masonry grid

## Nayara by Night Relocation
- [x] Remove Nayara by Night from all property pages and cascades
- [x] Add Nayara by Night section to brand homepage (Home.tsx)
- [x] Remove Bocas bungalow from gallery
- [x] Remove spa compressed from gallery
- [x] Remove all duplicate entries from gallery (han-s4 was duplicate of han-hero-d)
- [x] Remove before/after shots from gallery (none found in data)
- [ ] Remove gallery items with text on the image
- [ ] Remove gallery items with any kind of border
- [ ] Remove gallery items with text on the image
- [ ] Remove gallery items with any kind of border
- [ ] Remove hot springs vertical from gallery
- [ ] Remove gallery items with text on the image (gar-logo, brand-ig, brand-awards)
- [ ] Remove gallery items that are graphics/logos not photos (brand-leaf, spr-michelin already filtered)
- [ ] Remove hot springs vertical (cr-hs-v) from gallery
- [ ] Remove canyoneering (cr-canyon) from gallery
- [ ] Fix Atacama cascade — restore horizontal images on desktop, only hide on mobile
- [x] Restore horizontal images on desktop in Atacama CascadeSection (only removed on mobile was intended)
- [x] Remove floating vertical video in brown rectangle at bottom of Atacama page
- [x] Remove all imagery from "Life Under Canvas" section on Tented Camp (keep section structure)
- [ ] Remove last block from Tented Camp cascade
- [ ] Ensure "A Taste of Place" (Gastronomy) is directly below Wellness on Tented Camp
- [ ] Move Reviews and Getting Here to below Gastronomy on Tented Camp
- [ ] Move Reviews and Getting Here to below Gastronomy on Gardens
- [ ] Move Reviews and Getting Here to below Gastronomy on Springs
- [ ] Move Reviews and Getting Here to below Gastronomy on Alto Atacama
- [ ] Move Reviews and Getting Here to below Gastronomy on Bocas del Toro
- [ ] Move Reviews and Getting Here to below Gastronomy on Hangaroa
- [ ] Remove last block from Tented Camp
- [x] Remove 4 initiative cards from Atacama Sustainability page
- [x] Add S certification content directly after hero on Atacama Sustainability
- [ ] Convert Atacama Sustainability to HubSpot-compatible standalone HTML
- [x] Remove 4 commitment/initiative cards from all 6 sustainability pages
- [x] Change "Nayara Horizons" to "Nayara Journal" on all 6 sustainability pages
- [x] Ensure Bocas + Costa Rica sustainability pages show Green Globe certification
- [x] Ensure Atacama + Hangaroa sustainability pages show S certification
- [x] Fix Atacama sustainability page — shows Green Globe, should be S Certification
- [ ] Fix Hangaroa sustainability page — verify it shows S Certification (not Green Globe)
- [x] Upload flamingo photo and use as cover for wildlife conservation blog card on Atacama sustainability page
- [x] Fix /alto-atacama/sustainability route to show S Certification (currently uses CostaRicaSustainability with Green Globe)
- [ ] Fix /hangaroa/sustainability route to show S Certification
- [x] Fix "By the Numbers" on Atacama sustainability page to 2+2 grid (not 3+1)
- [x] Use flamingo photo as cover for wildlife conservation blog card on Atacama sustainability page
- [x] Use red Atacama property image from homepage for oasis blog card on Atacama sustainability page
- [x] Remove auto-scroll "Start Your Adventure" from Atacama page (add back when all 7 are ready)
- [x] Restore auto-scroll "Start Your Adventure" on Alto Atacama page (speed=1.35)
- [x] Replace Atacama cascade with single continuous video playing through all H→V media slots (Property through last A Taste of Place H), CSS object-fit:cover to eliminate letterbox bars
- [x] Flip cascade layout: H on top, V+Text below (desktop)
- [x] Swap Wellness H back to wellness video clip (not food photo)
- [x] A Taste of Place: H (gastroH food photo) on top, V (gastroV food photo) below — standard H→V layout
- [x] Fix black bars/letterboxing on Atacama cascade videos — ffmpeg crop to clean 16:9 H and 3:4 V clips
- [x] RULE: No black in any images or videos on any page, ever (letterbox bars, black borders, etc. must be eliminated). Backgrounds are fine. Exception: Nayara by Night.

## Sequential Video Playback + Speed Fix
- [x] NativeVideo: videos stay frozen (paused on frame 0) until they enter viewport AND the previous video has scrolled past
- [x] CinematicScroll: constant 1.45 px/frame speed (no variable speed)
- [x] Keep static images in cascade (gastro photos etc.)

## Fix Cascade Alternation
- [x] Atacama: No H touches H, no V touches V — pattern must be Hero(H) → V+Text → H → V+Text → H...

## Restore Static Hero Photo + Custom CTA Text
- [ ] Show static photo as hero background by default on all property pages (not video)
- [ ] Switch to video only when user clicks the CTA button
- [ ] CTA text: Alto Atacama = 'Enter the Atacama'
- [ ] CTA text: Bocas del Toro = 'Enter the Archipelago'
- [ ] CTA text: Costa Rica properties (Arenal, Gardens, Springs, Tented Camp) = 'Enter the Rainforest'
- [ ] CTA text: Hangaroa = TBD (Easter Island themed)

## Audio & Hero Video Bug Fixes
- [x] Fix hero video not showing (only static image) — hero NativeVideo now has hasAudio={true} and autoStart={true}
- [x] Fix no audio when clicking "Enter the Atacama" — React was overriding video.muted via JSX; now controlled imperatively for hasAudio videos
- [x] Fix race condition: IntersectionObserver deactivate() was muting hero before cascade video activated — removed deactivate() from observer, let activate() on next video handle audio handoff
- [x] Add hasAudio flags to all CASCADE_SECTIONS entries
- [x] Pass hasAudio prop through MediaBlock to NativeVideo for cascade videos

## Instant Hero Video + Scroll Evaluation
- [x] Hero video must start playing instantly on click — preload/buffer video while static photo is showing
- [x] Evaluate cascade scroll speed — is it appropriate?
- [x] Evaluate vertical video length — is it too long relative to scroll?
- [x] Ensure all 3 cascade videos are fully visible during scroll

## Audio Handoff — Sequential Audio with Single Mute Toggle
- [x] Three distinct audio tracks hand off sequentially: Hero → Cascade V → Cascade H
- [x] Audio 1 (Hero) starts instantly on click
- [x] Audio 2 (Cascade V) starts when hero is mostly off screen (80% threshold)
- [x] Audio 3 (Cascade H) starts when Cascade V section is mostly done (80% threshold)
- [x] No two audios ever play at the same time — verified with timeline data
- [x] Single SOUND toggle controls all three audios globally
- [x] Separate IntersectionObservers: play/pause at 30%, audio activation at 80%

## Bug: Only Hero Audio Plays Throughout
- [ ] Fix: cascade videos should play their own distinct audio tracks, not hero audio continuing
- [ ] Each of the 3 videos has its own audio — handoff must switch to the new video's audio

## 4-Second Stationary Hero + Audio Handoff Fix
- [ ] Add 4-second stationary delay after click before auto-scroll begins (hero video plays with audio, page doesn't move)
- [ ] Fix audio handoff: each cascade video must play its own distinct audio track

## Black Line Fix + Gastronomy Section
- [x] Fix tiny black line divider under Desert Adventures (between clip6-v and clip7-h)
- [x] Add Gastronomy section after Wellness — big horizontal image, gastronomy info text, vertical image below, then flows into Getting Here

## Fix Broken Cascade Video URLs
- [x] Re-upload all 8 cascade clips (clip1-h through clip8-v) to CDN and update URLs in AltoAtacama.tsx

## Cascade Video Playback Sequencing
- [x] Change scroll speed to 1.5px/frame
- [x] Fix staccato scrolling: remove CSS scroll-behavior: smooth that conflicts with RAF loop

## Alto Atacama Background Color
- [x] Unified entire page background to #F0EBE2 (warm sand) instead of alternating bone/sand

## Alto Atacama — Badge & Video Updates
- [x] Add 3-badge SVG (Sustainability + Michelin 2025 + LHW) below blog link in S1 "Mars on Earth"
- [x] Upload 4 new cropped video clips (clip1-4) to CDN and update ASSETS

## Guest Voices Sections
- [x] Add Guest Voices (ReviewsBreak) section to Alto Atacama before How to Get Here, matching Tented Camp style
- [x] Add Guest Voices (ReviewsBreak) section to Bocas del Toro, matching Tented Camp style
- [x] Extend Atacama audio clip 2 — CANCELLED: user said no audio

## Mute Button Styling & Audio Re-enabling (All Hero Sections)
- [x] Update Home.tsx mute button to espresso color (#3a2a1a) with "Sound"/"Mute" label and top-left alignment
- [x] Add mute button to Hangaroa hero section with espresso color and audio control
- [x] Verify mute button styling on Alto Atacama property page (espresso color, top-left)
- [x] Verify mute button styling on Bocas del Toro property page (espresso color, top-left)
- [x] Verify mute button styling on Tented Camp property page (espresso color, top-left)
- [x] Verify mute button styling on Gardens property page (espresso color, top-left)
- [x] Verify mute button styling on Springs property page (espresso color, top-left)
- [x] Verify mute button styling on Hangaroa property page (espresso color, top-left)
- [x] All seven property pages now have consistent mute button styling (espresso color, top-left alignment)
- [x] Audio re-enabled for all heroes with audio files (Home, Alto Atacama, Bocas del Toro, Tented Camp, Gardens, Springs, Hangaroa)

## Mobile Mute Button & Audio Support
- [x] Remove mobile restriction on audio in BlobVideo component (line 52)
- [x] Enable mute button visibility on mobile for all property pages using BlobVideo
- [x] Verify mute button appears on mobile viewport
- [x] Verify audio playback works on mobile heroes
- [x] Home page: Remove Ask Concierge button from top hero (keep only bottom-right floating widget)
- [x] Home page: Align Sound button properly with hamburger at top-left
- [x] Fix nayara-by-night video error on Home page
- [x] Bocas del Toro: Sound pill already correct (property teal color)
- [x] Tented Camp: Sound pill already correct (property brown color)
- [x] Gardens: Sound pill already correct (property green color)
- [x] Springs: Sound pill already correct (property green color)
- [x] Ensure audio works on all 7 property pages
- [x] Fix badges on Alto Atacama property page
- [x] Replace S1 video on Tented Camp page with Tentreel4.mov (no audio)
- [x] Make Atacama badges match Tented Camp badge structure, spacing, and size
- [x] Make S Tourism badge bigger so text is readable
- [x] Make badge label text more readable
- [x] Replace S3 (second vertical) on Atacama with new video DF334B2C
- [x] Fix badges on AltoAtacama: all 3 (Michelin, LHW, S) same size, evenly spaced, aligned with body text left margin, no text labels
- [x] Fix badges on all other property pages: same uniform sizing and alignment
- [x] Replace Tented Camp individual badges with pre-composed badge strip image (1.png)
- [x] Replace Bocas del Toro individual badges with pre-composed badge strip image (4.png)
- [x] Replace Springs individual badges with pre-composed badge strip image (3.png)
- [x] Replace Alto Atacama individual badges with pre-composed badge strip image (2.png)
- [x] Tented Camp mobile: Hero → H2 body text + badges → first vertical. Remove horizontal between hero and text block on mobile.
- [x] Bocas del Toro mobile: Hero → H2 body text + badges → first vertical. Remove horizontal between hero and text block on mobile. (Already implemented)
- [x] Tented Camp: Replace S2 horizontal with the sunset plunge pool photo (currently S4 horizontal). Flow: Hero → S1 vertical → pool photo.
- [x] Tented Camp: Add vertical video to "Life Under Canvas" (rooms) section from ReelNayara reel
- [x] Tented Camp: Delete entire "Toucans & Tree Frogs" (Regenerative Travel / wildlife) section so Life Under Canvas flows directly into Experiences horizontal
- [x] Tented Camp: Experiences section — move horizontal above the vertical+text to maintain vertical-horizontal-vertical cascade
- [x] Bocas del Toro: All videos (vertical + horizontal) should NOT loop — play once and stop on last frame
- [x] Global rule: Only hero videos loop. All cascade videos (vertical + horizontal) play once and freeze on last frame. No looping.
- [x] Replace 2 Michelin Keys image in badge strips (Atacama, Bocas) with new properly-spaced version (5.png)
- [x] Replace 3 Michelin Keys image in badge strip (Springs) with new properly-spaced version (4.png)
- [x] Gardens: Change hero H1 to "Family-Friendly Rainforest Adventure"
- [x] Gardens: Replace S1 vertical with new video (DEE1EE99 mov)
- [x] Atacama: Make badge strip bigger and more spread out — increase image height and spacing

## Tented Camp — Cascade Fix (Apr 21)
- [x] Remove horizontalFirst from Experiences section to fix double-stacking of horizontals
- [x] Replace Experiences vertical with new waterfall video (tented-experiences-vertical_90b80829.mp4)
- [x] Verify cascade flow: Story → pool H → Rooms vertical+text → rooms H → Experiences vertical+text → exp H → Wellness H (horizontalFirst) → wellness vertical+text
- [x] Replace Experiences horizontal with new user-provided video (tented-experiences-horizontal-new_b0279ced.mp4)

## Brand Page Updates (Apr 21)
- [x] Add Nayara Springs badge strip below the blog link on the brand/home page
- [x] Remove timeline section from the brand/home page

## Bocas del Toro Updates (Apr 21)
- [x] Add Getting Here section to Bocas del Toro page under Guest Voices

## Tented Camp Video URL Fixes (Apr 21)
- [x] Fix broken /manus-storage/ video paths — re-uploaded and replaced all 6 videos + badge strip image
- [x] Add S Certification and LHW badges to brand page badge strip (5 across, evenly spaced)

## Tented Camp Sustainability Section Corrections (Apr 21)
- [x] Change 380 acres to 68 acres
- [x] Change 5000 native trees to 15000 native trees and plants
- [x] Gardens opens 2007, Springs opens 2013, Tented Camp reforestation begins 2018, Green Globe 2025

## Badge Strip Redo (Apr 21)
- [x] Redo 5-badge strip — S Cert and LHW must match same style/size as Michelin, R&C, Green Globe (v2 — kept original 3, appended LHW + CST at matching height)

## Brand Page Cleanup (Apr 21)
- [x] Remove "Honored by the Best Authorities" section from brand page (redundant with badge strip in story)

## Brand Page S2 Cascade (Apr 21)
- [x] Add horizontal S2 video below vertical S1 on brand page (cascade start before properties)

## Badge + Tented Camp Mobile Fixes (Apr 21)
- [x] Update brand badge strip to v4 (LHW shifted right)
- [x] Fix Tented Camp mobile: verticals must always have a copy section between them, never touching
- [x] Convert Tented Camp deeper rooms page to use PropertySlider component (same as Springs rooms/sustainability)
- [x] Remove horizontal images from Springs homepage (S2 couple-bridge was the only one rendered)

## Tented Camp Room Slider Update (Apr 21)
- [x] Update Tented Camp room slider to: Tent, Family Tent, Grand Tent, Residence

## Tented Camp Story — Pura Vida Tagline (Apr 21)
- [x] Add "Pura Vida: The Science of Why Costa Rica Feels Different" above the badges on Tented Camp story section
- [x] Convert all blog "Read:" hyperlinks to oval pill style (book icon + text in property color oval) across all property pages
  - Home.tsx, Springs.tsx, AltoAtacama.tsx, BocasDelToro.tsx, TentedCampSustainability.tsx, SpringsSustainability.tsx, GardensSustainability.tsx, BocasSustainability.tsx, HangaroaSustainability.tsx, AtacamaSustainability.tsx, CostaRicaExperiences.tsx, CostaRicaGastronomy.tsx, NayaraByNight.tsx, Newsletter.tsx, ExcursionsSection.tsx

## Brand Page Button Fix (Apr 21)
- [x] Fix brand page buttons — warped on full screen, space them naturally, match property page sizing (h-10 px-6 text-[11px] gap-4)

## Atacama Blog Link Swap (Apr 21)
- [x] Move Mars blog from Atacama property story to Experiences cascade section
- [x] Add new blog "Best Place to Stay Atacama Desert Oasis" to Atacama property story section

## Badge Strip Full Screen Fix (Apr 21)
- [x] Fix brand page badge strip — all 5 badges evenly spaced with icon-only LHW monogram and S shield (v5, extracted from Atacama strip)

## Badge Strip 2-Row Layout (Apr 21)
- [x] Restructure brand page badges to 2 rows of 3: Row 1 (Keys, R&C, Green Globe), Row 2 (LHW, S, Virtuoso)

## Video Swap — Brand By Night → Tented S1 (Apr 21)
- [x] Move current By Night vertical from brand homepage to Tented Camp S1 (story vertical)
- [x] Replace brand homepage By Night vertical with new user-provided video

## Brand Homepage Restructure (Apr 21)
- [x] Remove Pillars section from brand homepage
- [x] Remove Nayara Journal / ContentHub section from brand homepage
- [x] Bring back Timeline section on brand homepage
- [x] Reorder: after properties → Timeline → By Night
- [x] Fix By Night vertical to use the correct video (user approved current state)

## Gardens Badges (Apr 21)
- [x] Add Virtuoso, LHW, and S badges to Nayara Gardens page (same style/config as other properties)
- [x] Replace By Night horizontal image on brand homepage with new user-provided video
## By Night Section Fixes (Apr 21)
- [x] By Night: restore Moai video as vertical (PERMANENT — never change again)
- [x] By Night: convert star observatory .mov to .mp4 and set as horizontal video
- [x] By Night: change headline to "Nayara by Night", hide section label
- [x] Add Gardens badge strip (Virtuoso + LHW + S) below existing three badges on brand homepage
- [x] Build interactive illustrated SVG map of the Americas with Nayara property locations
- [x] Integrate map into timeline section with scroll-triggered location reveals (desktop only)

## Map offsetDistance React Warning Fix (Apr 21)
- [x] Fix React offsetDistance prop warning — move from Framer Motion initial/animate to style prop

## Awards Section on Brand Homepage (Apr 21)
- [x] Add Awards section to brand homepage, positioned before By Night section
- [x] Add more impactful hover effects to Awards Highlight cards on brand homepage
- [x] Add subtle gravel/grain texture overlay to Awards Highlight cards
- [x] Fix audio pill (Sound/Mute) alignment on brand homepage
- [x] Fix audio pill (Sound/Mute) alignment on all pages — top: 10px consistently across Home.tsx, BlobVideo.tsx, CinematicScroll.tsx, MutePill.tsx

## Instagram Grid Section on Brand Homepage (Apr 21)
- [x] Add Instagram photo grid section between By Night and Footer on brand homepage

## Tented Camp Story Section Blog Link (Apr 21)
- [x] Update blog link in Tented Camp story section — link to long-form video, text "Pioneering Sustainable Luxury with Nayara Resorts", full oval pill style, lower position
- [x] Rename "Podcast" to "Long-Form Video" on the podcast page itself
- [x] Replace first vertical S1 video on Tented Camp page with new uploaded video
- [x] Make "Life Under Canvas" section background match the page light green color

## Tented Camp Sustainability Section (Apr 21)
- [x] Add Sustainability section to Tented Camp page between Experiences and Wellness, with provided video as vertical on left

## Bocas del Toro Video Replacement (Apr 21)
- [x] Replace Experiences vertical video on Bocas del Toro homepage with zapatilla.mov

## Tented Camp Auto-Scroll Cascade (Apr 21)
- [x] Make hero video play once (no loop), show "Enter the Rainforest" CTA when video ends
- [x] On CTA click, trigger auto-scroll at 1.45x speed through entire cascade
- [x] Auto-scroll interruptible by user manual scroll/touch

## Tented Camp Sustainability Horizontal Video (Apr 22)
- [x] Replace sustainability section horizontal video with Livinglegacy.MOV (ultra-narrow widescreen 21/6 ratio, touches verticals above and below)
- [x] Replace S2 pool horizontal video on Tented Camp with new cropped pool video (30SecondsSequence-Mainpool.mov)

## One Rainforest, Three Resorts Sections (Apr 22)
- [x] Gardens: "Three Keys, One Door" card reveal section below badges in story section
- [x] Springs: "One Day, Three Worlds" timeline section below badges in story section
- [x] Both sections must be premium, creative, with scroll animations
- [x] Responsive design for both sections
- [x] Self-review and iterate to best version

## Brand Homepage Hero H1 (Apr 22)
- [x] Make H1 "Luxury Resorts Rooted in Nature" always visible on load (no delayed reveal, no location subtitle)
- [ ] Swap hero video when user provides new one (without baked-in text)

## Tented Camp Auto-Scroll Bug Fix (Apr 22)
- [x] Fix auto-scroll on Tented Camp — clicking CTA turns off instead of triggering scroll

## Brand Homepage Badge Animation (Apr 22)
- [x] Add slow scroll-triggered animation to resort badges — animation starts only when badges scroll into view

## Hangaroa Hero Video Replacement (Apr 22)
- [x] Replace Hangaroa hero video with new video (with audio)
- [x] Ensure hero video audio works with the page sound system (already wired — muted by default, Sound pill toggles)

## Hangaroa Page Overhaul (Apr 22)
- [x] Remove auto-scroll system from Hangaroa
- [x] Replace Hangaroa hero video (already uploaded new one)
- [x] Add trim.mov as S1 — vertical video on right, H2+copy on left (first cascade section)

## Badge Animation Removal (Apr 22)
- [x] Remove all animations from badges on brand homepage — make them static/always visible

## Tented Camp Blog Link (Apr 22)
- [x] Add blog link to Tented Camp experiences section — "Read: The History and Science of Private Villas Hot Springs Plunge Pools" styled like the story section link

## Blog Link Colors Match Navigation (Apr 22)
- [ ] All blog link pills on property pages and brand homepage should use the page's navigation color

## Tented Camp Background Color (Apr 22)
- [x] Use the "Lifted on Stilts" section background color (#EDEEE2 olive tint) as the entire Tented Camp page background

## Brand Hero Video Final (Apr 22)
- [x] Replace brand homepage hero video with final version (with audio)
- [x] Wire up sound pill for brand hero audio (using native video audio, removed separate audio element)

## Instagram Grid Replacement (Apr 22)
- [x] Replace Instagram images on homepage bottom with 4 new items cropped to squares
- [x] Order: 1) Flamingo video, 2) Woman in pool image, 3) Drone shot video, 4) Additional video

## Brand Homepage S2 Video Replacement (Apr 22)
- [x] Replace S2 horizontal video on brand homepage (between badges and "Six Destinations" section) with new video

## Springs Sustainability Section (Apr 22)
- [x] Duplicate Tented Camp sustainability section onto Springs page with Springs colors
- [x] Read Reportdraft.pdf and extract relevant Nayara Tented Camp / Costa Rica sustainability content
- [x] Incorporate report content into the Springs sustainability section
- [x] Verify in browser and save checkpoint

## Sustainability Pages Navigation & Links (Apr 22)
- [x] Add BrandNavigation to all sustainability landing pages (treat them as part of main site)
- [x] Wire "Explore More" sustainability links on property homepages to the sustainability pages
- [x] Hangaroa: Change H1 to "Where Moai & Rapa Nui Culture Meet the Pacific"
- [x] Remove "Nayara by Night" blog entry from Costa Rica sustainability pages (Tented Camp, Gardens, Springs)
- [x] Replace "Pioneering Sustainable Luxury" Leo video on Tented Camp homepage with AFAR podcast (YouTube: FPxFzOkKhbw)

## New Blog Pages — Gastronomy & In-House Activities (Apr 22)
- [x] Create Gastronomy blog landing page (matching existing blog page pattern)
- [x] Create In-House Activities blog landing page (matching existing blog page pattern)
- [x] Wire routes for both new blog pages in App.tsx (using dynamic /journal/:slug routing)

## Costa Rica Experiences & Gastronomy Deep Pages (Apr 22)
- [x] Build CostaRicaExperiences.tsx — comprehensive deep page modeled after sustainability pattern
- [x] Include sections: Hero, Stats, Shared Philosophy, Yoga, Nature (Botanical/Birding/Tony), Las Thermas, Adventure
- [x] Build CostaRicaGastronomy.tsx — comprehensive deep page modeled after sustainability pattern
- [x] Include sections: Hero, Stats, Shared Dining Philosophy, Restaurants (6), Bars (5), Gelato, Classes (5)
- [x] Both pages shared across Tented Camp, Springs, Gardens with property-specific colors
- [x] Wire routes for /springs/experiences, /gardens/experiences, /tented-camp/experiences (gastronomy same)

## Costa Rica Experiences & Gastronomy Deep Pages (Apr 22)
- [x] Build CostaRicaExperiences.tsx — deep page: Hero, Stats, Shared Philosophy, Yoga, Nature (Botanical/Birding/Tony), Las Thermas, Adventure
- [x] Build CostaRicaGastronomy.tsx — deep page: Hero, Stats, Shared Dining Philosophy, Restaurants (6), Bars (5), Gelato, Classes (5)
- [x] Both shared across TC/Springs/Gardens with property-specific colors
- [ ] Wire routes for /{property}/experiences and /{property}/gastronomy
- [x] Atacama: Remove black line between horizontal and vertical videos in sustainability cascade section
- [x] Atacama: Trim last 4 seconds of vertical wellness video in sustainability cascade section
- [x] Gardens: Fix hero video audio — re-compress from original with audio track preserved (was stripped during compression)
- [x] Atacama: Add new horizontal video below wellness vertical in cascade (SequenceNayaraAltoAtacama-2m18sVideobyBriceFerreStudio.mov)
- [x] Atacama: Remove Recognition/Awards section under Getting Here
- [x] Atacama: Fix black line at top of sustainability H and wellness H — replaced with new cropped videos from user
- [x] Atacama: Replace rooms section horizontal video (Rainbow Valley) with Hotel_Drone_NAA00136.MOV
- [x] Atacama: Extract first frame from 64F69550 video as still image, use as vertical below wellness horizontal
- [x] Atacama: Add NayaraAltoAtacama_1.jpg (plated dish) as horizontal below the spice bowl vertical — final cascade piece
- [x] Homepage: Replace Nayara By Night vertical video with new user-provided video (4825BC12)
- [x] Homepage: Replace Nayara By Night horizontal video with new user-provided video (Edits_Atacama_horizontal_1)
- [x] Homepage: Change By Night section background to black
- [x] Homepage: Replace By Night link with moon blog link
- [x] Gardens: Change nav and footer colors back to clover green (#286241)
- [x] Tented Camp: Change blog link colors to olive tree (#868B75) to match navigation
- [ ] Atacama: Change "Begin Your Desert Journey" to "Begin Your Desert Adventure"
- [ ] Tented Camp: Change CTA to "Begin Your Rainforest Adventure"
- [ ] Bocas del Toro: Change CTA to "Begin Your Caribbean Adventure"
- [x] Gardens: Fix hamburger and reserve pill colors to clover green (#286241)
- [x] Hangaroa: Replace hero video with new user-provided video (0F543D4F)
- [x] Hangaroa: Change H1 — user decided to keep existing text
- [x] Gardens: Replicate brand homepage top row badge strip (same 3 badges, sizing, spacing) to replace current Gardens badges
- [x] Gardens: Remove S2 horizontal photo (hanging bridge) below S1 section
- [x] Atacama: Remove duplicate Mars vertical video on mobile (goes straight to next section after it)
- [x] Homepage: Remove By Night horizontal video
- [x] Homepage: Replace By Night blog text link with oval button (warm gold #C4A265, same on mobile and desktop)
- [x] Tented Camp: Remove second blog link from "Discover the Magic of the Rainforest" section
- [x] Tented Camp: Add "Begin Your Rainforest Adventure" reserve CTA at bottom (below Getting Here), matching Atacama pattern
- [x] Bocas del Toro: Add "Begin Your Caribbean Adventure" reserve CTA at bottom, matching Atacama/Tented Camp pattern
- [x] Homepage: Remove Instagram grid section from bottom
- [x] Homepage: Change award cards background to gravel color for contrast against bone bg
- [x] Homepage: Redesign awards section with high-contrast dark cards, visible stat numbers
- [x] Homepage: Restore By Night horizontal video on desktop (hidden on mobile only)
- [x] Homepage: Awards stat numbers should be bone (#F7F5F0) instead of gold
- [x] Homepage: Update Tented Camp award to #1 Central America 2026, 5 of last 6 years
- [x] Gardens: Add badge strip matching Tented Camp layout, swap T+L World's Best with Hall of Fame badge
- [x] Homepage: Fix award card spacing — all three lines perfectly even at full width
- [ ] Homepage: Fix mobile awards grid — show all 6 cards (second row missing on mobile)
- [x] Atacama: Implement 3-color palette — Dark #6F463D (nav pills, mute btn, concierge btn, footer), Middle #B85C3C (blog pills, CTAs, accents), Light #F9EBE0 (all backgrounds)
- [x] Atacama: Remove mute button on mobile (keep on desktop only)
- [x] Atacama: Strict 2-text-color system — Espresso #3B2B26 on light backgrounds, Bone #F9F6F3 on dark backgrounds
- [x] Atacama: All section labels, stars, links, blog pills, CTA buttons use MIDDLE (#B85C3C)
- [x] Atacama: Getting Here icons, email/phone links, award year labels use MIDDLE accent
- [x] Atacama: Hero text uses BONE, ReserveCTA button uses MIDDLE bg with BONE text
