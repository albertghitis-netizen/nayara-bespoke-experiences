# Project TODO

## Website — Home Page
- [x] Hero video with horizontal desktop / vertical mobile swap
- [x] "Luxury Resorts Rooted in Nature" tagline (smaller)
- [x] Subtle "Nayara" branding at 15% opacity
- [x] Floating nav pills — hamburger left, Reserve right
- [x] Hamburger menu with Experiences/Wellness dropdowns (property links)
- [x] Sustainability → Coming Soon in hamburger
- [x] Awards → /awards, Journal → /journal in hamburger
- [x] Award-Winning Properties section — new H2, no subtitle
- [x] Award-Winning: desktop — text left, vertical Tented Camp right, wide Atacama below
- [x] Award-Winning: mobile — vertical Tented Camp only (two-media-slot system)
- [x] The World of Nayara section — botanical texture, compact, big leaf left
- [x] Footer — compact, logo left, newsletter bold in bubble, botanical texture
- [x] Footer — Journal links to /journal, Press/Podcast show Coming Soon
- [x] Footer — verify Nayara leaf logo rendering on desktop (code review confirmed)

## Website — Experience Pages
- [x] Alto Atacama experience page with magazine-style detail views
- [x] Arenal experience page with three categories
- [x] Experience card detail views with vertical video, horizontal photo, description

## Full-Stack Upgrade
- [x] Upgrade to full-stack (db, server, user)
- [x] Fix TypeScript error from upgrade (remove useAuth from Home)
- [x] Push database schema

## Concierge Chatbot
- [x] Build tRPC procedure with LLM + Nayara Alto Atacama system prompt
- [x] Build floating chat widget on frontend
- [x] Train on: excursions, rooms, dining, wellness, sustainability
- [ ] Lead capture: name + email
- [x] Warm concierge tone, conversational style
- [x] Test chatbot end-to-end
- [x] Write vitest for chatbot procedure

## Future — Instagram/Facebook Bot
- [ ] Set up Meta Developer app for Instagram Messaging API
- [ ] Connect same AI brain to Instagram DMs
- [ ] Connect same AI brain to Facebook Messenger
- [ ] HubSpot integration for lead capture

## Future — Website
- [ ] Compress desktop hero video (~69MB → ~15MB)
- [ ] Build Gallery page
- [ ] Build Sustainability pages per property
- [ ] Apply two-media-slot system to all remaining sections
- [ ] Build out Hangaroa and Bocas del Toro experience pages

## Booking Integration
- [x] Wire Reserve button (nav) to SynXis booking engine for Nayara Tented Camp
- [x] Wire any other reservation CTAs to the same booking URL
- [ ] Make booking URL configurable per property in the future
- [x] Fix footer: center Nayara logo + NAYARA text (matches user screenshot)
- [x] Move newsletter CTA below social icons (matches user screenshot layout)
- [x] Replace old leaf-only logo with new full Nayara logo (leaf + NAYARA) everywhere
- [x] Add Nayara logo centered in top nav between hamburger and Reserve pills
- [x] Style "Stay Inspired with the Nayara Newsletter" as pill button identical to Reserve (brown bg, white uppercase text)
- [x] Replace logo with new dark charcoal/olive version (nayara_logo_transparent.jpg) everywhere
- [x] Make top nav logo significantly larger — reach to top of screen, white color
- [x] Top logo layout: loose leaf (white) + NAYARA (bold) + TENTED CAMP (uppercase tracking) + Costa Rica (italic serif) — all centered over hero, desktop only

## Property Pages
- [x] Grab landscape photos from Nayara hotel websites (pool/deck + aerial valley)
- [x] Create Tented Camp homepage (/tented-camp) with hero landscape photo
- [x] Make all 6 footer hotel names clickable links to their property pages
- [x] Register routes in App.tsx for property pages
- [ ] Create shield logo (leaf inside badge shape + NAYARA) matching Tented Camp site style
- [ ] Rebuild Tented Camp page with two-column editorial layout on gold background
- [x] Animate leaf logo: starts halfway toward hamburger, rolls/slides to center above NAYARA in 3 seconds on page load
- [x] Update chatbot welcome message: "Welcome to Nayara Tented Camp and Nayara Alto Atacama Instagram. I'm your personal instagram AI assistant. If you don't mind giving me your email address, I'll make sure our team reaches out right away with any helpful or relevant info"

## Chatbot & Brand Updates
- [ ] Update suggested prompts: Pricing and Availability, Rooms and Accommodations, Experiences and Spa, Our Sustainability Practices
- [ ] System prompt: naturally ask for email early in conversation
- [ ] System prompt: naturally mention phone (1-844-865-2002, Mon-Fri 8am-10pm, Sat-Sun 8am-8pm)
- [ ] System prompt: 3 separate Costa Rica properties (Gardens, Springs, Tented Camp) with shared amenities
- [ ] System prompt: adults-only for Springs and Bocas del Toro, family-friendly for rest
- [ ] System prompt: full location knowledge for all 6 properties
- [ ] System prompt: meal plans — CR=breakfast included room-only, Bocas=all-inclusive, Atacama+Hangaroa=room-only/half-board/all-inclusive options
- [ ] Remove all "Nayara Arenal" references site-wide
- [ ] Update footer hotel links to reflect correct property structure

## Chatbot & Brand Updates
- [ ] Update suggested prompts: Pricing and Availability, Rooms and Accommodations, Experiences and Spa, Our Sustainability Practices
- [ ] System prompt: naturally ask for email early
- [ ] System prompt: naturally mention phone (1-844-865-2002, Mon-Fri 8am-10pm, Sat-Sun 8am-8pm)
- [ ] System prompt: 3 separate Costa Rica properties (Gardens, Springs, Tented Camp) shared amenities
- [ ] System prompt: adults-only for Springs and Bocas del Toro
- [ ] System prompt: full location knowledge all 6 properties
- [ ] System prompt: meal plans (CR=breakfast room-only, Bocas=all-inclusive, Atacama+Hangaroa=options)
- [ ] System prompt: send SynXis booking links with pre-filled dates when someone wants to book
- [ ] System prompt: reference and link to site blog/journal content (Atacama winter, wellness, Michelin keys, etc.)
- [ ] Remove all "Nayara Arenal" references site-wide
- [ ] Update footer hotel links

## Chatbot & Brand Overhaul
- [ ] Update suggested prompts: Pricing and Availability, Rooms and Accommodations, Experiences and Spa, Our Sustainability Practices
- [ ] System prompt: naturally ask for email early
- [ ] System prompt: naturally mention phone (1-844-865-2002, Mon-Fri 8am-10pm, Sat-Sun 8am-8pm)
- [ ] System prompt: 3 separate Costa Rica properties (Gardens, Springs, Tented Camp) shared amenities
- [ ] System prompt: adults-only for Springs and Bocas del Toro
- [ ] System prompt: full location knowledge all 6 properties
- [ ] System prompt: meal plans (CR=breakfast room-only, Bocas=all-inclusive, Atacama+Hangaroa=options)
- [ ] System prompt: send SynXis booking links with pre-filled dates
- [ ] System prompt: reference and link to site blog/journal content
- [ ] System prompt: correct awards knowledge (Springs=3 Michelin Keys, Atacama+Bocas=2 Keys, Bocas=#1 Conde Nast, Tented Camp=T+L best resort 4/5 years, Michelin Keys vs Stars explanation)
- [ ] Remove all "Nayara Arenal" references site-wide
- [ ] Update footer hotel links

## Press Page
- [ ] Build Press page at /press with all print + digital coverage from Nov 2025 PR report
- [ ] Organize by year, then by hotel within each year
- [ ] Each entry: article title + link (simple, clean, same style as Journal page)
- [ ] Include "Multiple Properties" category for clips mentioning several hotels
- [ ] Register /press route in App.tsx and add to navigation

## Podcasts Section
- [ ] Add 4 podcast episodes as a simple list (Albert & Tau Mana, Albert & Kenneth Seligson, Leo on AFAR, Leo on Suite Success)
- [ ] Link each to YouTube URL

## Newsletters Section
- [ ] Extract full content from all 11 HubSpot newsletters via Gmail
- [ ] Upload newsletter images to CDN
- [ ] Build newsletter modal viewer (click title → opens full newsletter as overlay)
- [ ] Active blog links within newsletter content
- [ ] Sort newsletters by year and month

## Bug Fixes / Quick Changes
- [x] Remove rolling animation from leaf logo on page load
- [x] Lower logo slightly so it's not touching the very top of the screen

## Nav Redesign
- [x] Replace big logo with small logo in brown pill (white logo inside)
- [x] Add language pill with dropdown (EN, ES, PT, FR, DE, IT, JA, ZH) — placeholder for now
- [x] Reserve pill becomes dropdown showing all 6 hotels with booking links
- [x] Hamburger menu: compact dropdown below pill instead of full-screen overlay
- [x] Layout: Left = Hamburger + Logo | Right = Language + Reserve
- [ ] Fix: desktop hero video showing vertical instead of horizontal (check video swap logic)
- [x] Move language pill next to Reserve (both fixed, follow scroll): Hamburger (left) | Language + Reserve (right)
- [x] Remove logo pill for now (user will design custom logo later)

## Footer Redesign
- [ ] Change footer background to brown (#3a2a1a) with light/white text
- [ ] Remove the big Nayara logo at the bottom of footer
- [ ] Make "The World of Nayara" text smaller and positioned lower
- [ ] Make social media icons larger

## Page Gradient & Footer Update
- [x] Apply beige gradient across the full page (lighter beige at top → deeper warm beige toward footer)
- [ ] Remove big Nayara logo from footer bottom
- [x] Footer uses gradient beige tones instead of solid brown
- [x] Keep nav pills (hamburger, language, reserve) as-is in brown
- [ ] Replace CSS gradient with plaster/stucco texture image as full-page background (subtle light-to-warm shift built into the image)
