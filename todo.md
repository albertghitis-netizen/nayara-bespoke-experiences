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
- [ ] Instagram DM Simulator page (demo tool)
- [ ] Meta Developer app for Instagram Messaging API
- [ ] Facebook Messenger integration
- [ ] HubSpot integration for lead capture
- [ ] Upload newsletter images to CDN
- [ ] Active blog links within newsletter content
- [ ] Compress desktop hero video (~69MB → ~15MB)
- [ ] Create shield logo (leaf inside badge shape)
- [ ] Replace CSS gradient with plaster/stucco texture image
- [x] Gastronomy section with restaurant menus
- [ ] Make booking URL configurable per property

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
- [ ] Build individual restaurant detail views with menu items, descriptions, prices
- [ ] Add dining sections to property pages (Costa Rica, Hangaroa, Bocas del Toro, Alto Atacama)
- [x] Wire gastronomy into main navigation

## Nayara Resorts Website Chatbot
- [x] Build Nayara Resorts brand concierge chatbot (replace Starry)
- [x] Create comprehensive knowledge base covering all 6 properties, dining, experiences, wellness, sustainability
- [x] Design chat UI that matches the site's editorial design language
- [x] Integrate chatbot as floating widget accessible from all pages
- [x] Chatbot should answer questions about properties, menus, experiences, booking inquiries
