/**
 * MASTER GALLERY DATA — All assets organized per property
 *
 * Rules:
 * - Every asset goes into its property gallery. No exceptions.
 * - Shared Costa Rica assets go in Springs gallery ONLY (zero duplicates).
 * - Videos autoplay muted in galleries.
 * - Gallery is the master pool — sections pull from here.
 */

export type MediaType = "image" | "video";
export type Orientation = "landscape" | "portrait" | "square";

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  type: MediaType;
  orientation: Orientation;
  tags: string[];
}

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2";

/* ═══════════════════════════════════════════════════════════════
   SPRINGS — Includes all shared Costa Rica assets
   Gallery Layout: Classic masonry 3-column
   ═══════════════════════════════════════════════════════════════ */
export const springsGallery: GalleryItem[] = [
  { id: "spr-hero", src: `${CDN}/springs-hero-horizontal-hq_c0efb638.mp4`, alt: "Nayara Springs aerial view", type: "video", orientation: "landscape", tags: ["hero"] },
  { id: "spr-s1", src: `${CDN}/6_0a37cc95.jpg`, alt: "Hot spring immersion", type: "image", orientation: "portrait", tags: ["story", "s1"] },
  { id: "spr-s2", src: `${CDN}/123_739860cc.jpg`, alt: "Rainforest boardwalk", type: "image", orientation: "landscape", tags: ["story", "s2"] },
  { id: "spr-s3", src: `${CDN}/springs-s3-robe-canopy_c9c365ff.jpg`, alt: "Canopy villa", type: "image", orientation: "portrait", tags: ["rooms", "s3"] },
  { id: "spr-s4", src: `${CDN}/61_0020df3e.jpg`, alt: "Aerial villa view", type: "image", orientation: "landscape", tags: ["rooms", "s4"] },
  { id: "spr-michelin", src: `${CDN}/michelin-3-keys_10864925.png`, alt: "Michelin 3 Keys", type: "image", orientation: "square", tags: ["awards"] },
  { id: "spr-ex1", src: `${CDN}/Untitleddesign-3_e394353d.jpg`, alt: "Wildlife monkey", type: "image", orientation: "square", tags: ["wildlife"] },
  { id: "spr-ex2", src: `${CDN}/Untitleddesign-5_f4b0874c.jpg`, alt: "Jungle pathway", type: "image", orientation: "square", tags: ["nature"] },
  { id: "spr-ex3", src: `${CDN}/Untitleddesign-14_6b456af8.jpg`, alt: "Tropical bird", type: "image", orientation: "square", tags: ["wildlife"] },
  { id: "spr-vid1", src: `${CDN}/CCD6CF80-5F62-40B5-B82A-119D31106C0D_635597b5.mp4`, alt: "Nature video", type: "video", orientation: "portrait", tags: ["nature"] },
  { id: "spr-pools", src: `${CDN}/springs-s1-pools_8e255e18.png`, alt: "Springs plunge pools", type: "image", orientation: "landscape", tags: ["pools"] },
  { id: "spr-plunge", src: `${CDN}/springs-plunge-pool_e5f6a7b8.jpg`, alt: "Private plunge pool", type: "image", orientation: "landscape", tags: ["pools"] },
  { id: "spr-design", src: `${CDN}/Untitleddesign_9702d152.JPEG`, alt: "Nayara property", type: "image", orientation: "landscape", tags: ["property"] },
  // Shared CR assets (Springs ONLY)
  { id: "cr-bird-hero", src: `${CDN}/bird-watching-hero_ddf4b8c3.jpg`, alt: "Bird watching", type: "image", orientation: "landscape", tags: ["experiences", "shared-cr"] },
  { id: "cr-bird-h", src: `${CDN}/bird-watching-horizontal_abd70271.mp4`, alt: "Bird watching video", type: "video", orientation: "landscape", tags: ["experiences", "shared-cr"] },
  { id: "cr-bird-v", src: `${CDN}/birdwatching-vertical_9dee5424.mp4`, alt: "Bird watching vertical", type: "video", orientation: "portrait", tags: ["experiences", "shared-cr"] },
  { id: "cr-frog-hero", src: `${CDN}/frog-tour-hero_dc75898f.jpg`, alt: "Frog tour", type: "image", orientation: "landscape", tags: ["experiences", "shared-cr"] },
  { id: "cr-frog-h", src: `${CDN}/frog-tour-horizontal_5269da4d.mp4`, alt: "Frog tour video", type: "video", orientation: "landscape", tags: ["experiences", "shared-cr"] },
  { id: "cr-frog-v", src: `${CDN}/frog-tour-vertical_17b18385.mp4`, alt: "Frog tour vertical", type: "video", orientation: "portrait", tags: ["experiences", "shared-cr"] },
  { id: "cr-bridges", src: `${CDN}/hanging-bridges-photo_a49dba00.jpeg`, alt: "Hanging bridges", type: "image", orientation: "landscape", tags: ["experiences", "shared-cr"] },
  { id: "cr-bridges-h", src: `${CDN}/hanging-bridges-horizontal_0bf48537.mp4`, alt: "Hanging bridges video", type: "video", orientation: "landscape", tags: ["experiences", "shared-cr"] },
  { id: "cr-bridges-v", src: `${CDN}/hanging-bridges-vertical_e6838fa9.mp4`, alt: "Hanging bridges vertical", type: "video", orientation: "portrait", tags: ["experiences", "shared-cr"] },
  { id: "cr-horseback", src: `${CDN}/horseback-photo_68409b82.jpeg`, alt: "Horseback riding", type: "image", orientation: "landscape", tags: ["experiences", "shared-cr"] },
  { id: "cr-rafting", src: `${CDN}/rafting-photo_89375559.jpeg`, alt: "White water rafting", type: "image", orientation: "landscape", tags: ["experiences", "shared-cr"] },
  { id: "cr-zipline", src: `${CDN}/zipline-photo_a5470805.jpeg`, alt: "Zipline canopy", type: "image", orientation: "landscape", tags: ["experiences", "shared-cr"] },
  { id: "cr-yoga", src: `${CDN}/yoga-photo_3b789b60.jpg`, alt: "Yoga in nature", type: "image", orientation: "landscape", tags: ["wellness", "shared-cr"] },
  { id: "cr-wildlife", src: `${CDN}/wildlife-reel_7c30f53f.mp4`, alt: "Wildlife reel", type: "video", orientation: "portrait", tags: ["wildlife", "shared-cr"] },
  { id: "cr-hs-h", src: `${CDN}/hot-springs-horizontal_2508b725.mp4`, alt: "Hot springs video", type: "video", orientation: "landscape", tags: ["wellness", "shared-cr"] },
  { id: "cr-spa", src: `${CDN}/costa-rica-spa-springs_89d85927.mp4`, alt: "Spa at Springs", type: "video", orientation: "landscape", tags: ["wellness", "shared-cr"] },
  { id: "cr-00d0-h", src: `${CDN}/video-00d0-horizontal_c856b795.mp4`, alt: "Costa Rica scenic", type: "video", orientation: "landscape", tags: ["nature", "shared-cr"] },
  { id: "cr-00d0-v", src: `${CDN}/video-00d0-vertical_5ef512b3.mp4`, alt: "Costa Rica scenic vertical", type: "video", orientation: "portrait", tags: ["nature", "shared-cr"] },
];

/* ═══════════════════════════════════════════════════════════════
   ALTO ATACAMA — Atacama Desert, Chile
   Gallery Layout: Horizontal filmstrip / cinema-wide cards
   ═══════════════════════════════════════════════════════════════ */
export const atacamaGallery: GalleryItem[] = [
  { id: "ata-hero-d", src: `${CDN}/atacama-hero-desktop-hq_732fe8b3.mp4`, alt: "Atacama desert panorama", type: "video", orientation: "landscape", tags: ["hero"] },
  { id: "ata-hero-m", src: `${CDN}/atacama-hero-vertical-hq_d81c629e.mp4`, alt: "Atacama vertical hero", type: "video", orientation: "portrait", tags: ["hero", "mobile"] },
  { id: "ata-s1", src: `${CDN}/Untitleddesign-17_d0de17d2.JPG`, alt: "Atacama desert landscape", type: "image", orientation: "portrait", tags: ["story", "s1"] },
  { id: "ata-s2", src: `${CDN}/11_576297a8.jpg`, alt: "Atacama salt flats", type: "image", orientation: "landscape", tags: ["story", "s2"] },
  { id: "ata-s3", src: `${CDN}/trim_cb137ccb.mp4`, alt: "Atacama rooms walkthrough", type: "video", orientation: "landscape", tags: ["rooms", "s3"] },
  { id: "ata-s4", src: `${CDN}/atacama-rainbow-valley-still-h1.webp`, alt: "Rainbow Valley", type: "image", orientation: "landscape", tags: ["rooms", "s4"] },
  { id: "ata-vid3", src: `${CDN}/Video_Nayara_Atacama00003_aeb971e9.MP4`, alt: "Atacama experience", type: "video", orientation: "landscape", tags: ["experiences"] },
  { id: "ata-vid7", src: `${CDN}/Video_Nayara_Atacama00007_8576aa55.MP4`, alt: "Atacama stargazing", type: "video", orientation: "landscape", tags: ["experiences"] },
  { id: "ata-cfnet", src: `${CDN}/cfnetwork_b9ae0ca4.mp4`, alt: "Atacama ambiance", type: "video", orientation: "landscape", tags: ["ambiance"] },
  { id: "ata-comp-d", src: `${CDN}/compressed-atacama-desktop_53259368.mp4`, alt: "Atacama compressed", type: "video", orientation: "landscape", tags: ["hero", "compressed"] },
  { id: "ata-comp-m", src: `${CDN}/compressed-atacama-mobile_ff90639c.mp4`, alt: "Atacama compressed mobile", type: "video", orientation: "portrait", tags: ["hero", "compressed", "mobile"] },
  { id: "ata-pool", src: `${CDN}/atacama-pool-sunset_c4a2f7e1.jpg`, alt: "Atacama pool at sunset", type: "image", orientation: "landscape", tags: ["pool", "sunset"] },
  { id: "ata-stars", src: `${CDN}/atacama-stargazing_f5c3d8a4.jpg`, alt: "Atacama stargazing", type: "image", orientation: "landscape", tags: ["experiences", "stargazing"] },
  { id: "ata-suite", src: `${CDN}/atacama-suite-interior_d3b1e9f2.jpg`, alt: "Atacama suite interior", type: "image", orientation: "landscape", tags: ["rooms"] },
  { id: "ata-hero-old", src: `${CDN}/atacama-hero-new_42efa04c.mp4`, alt: "Atacama hero alternate", type: "video", orientation: "landscape", tags: ["hero", "alternate"] },
  { id: "ata-hero-old-v", src: `${CDN}/atacama-hero-vertical-new_1e1453e7.mp4`, alt: "Atacama hero vertical alternate", type: "video", orientation: "portrait", tags: ["hero", "alternate", "mobile"] },
  { id: "ata-hero-img", src: `${CDN}/atacama-hero-desktop_8c8a5be0.jpg`, alt: "Atacama hero image", type: "image", orientation: "landscape", tags: ["hero"] },
];

/* ═══════════════════════════════════════════════════════════════
   BOCAS DEL TORO — Panama
   Gallery Layout: Pinterest-style staggered
   ═══════════════════════════════════════════════════════════════ */
export const bocasGallery: GalleryItem[] = [
  { id: "boc-hero-d", src: `${CDN}/nbt-horizontal-desktop_0c584342.mp4`, alt: "Bocas overwater villas", type: "video", orientation: "landscape", tags: ["hero"] },
  { id: "boc-hero-m", src: `${CDN}/bocas-vertical2_03bbe8e5.mp4`, alt: "Bocas vertical hero", type: "video", orientation: "portrait", tags: ["hero", "mobile"] },
  { id: "boc-s1", src: `${CDN}/bocas-aerial-villas-walkway_66b2f48e.jpg`, alt: "Aerial overwater villas", type: "image", orientation: "landscape", tags: ["story", "s1"] },
  { id: "boc-s2", src: `${CDN}/74_be6f8cb4.jpg`, alt: "Bocas tropical scene", type: "image", orientation: "portrait", tags: ["story", "s2"] },
  { id: "boc-s3", src: `${CDN}/87D222D3-2D4E-437D-AAEF-92C3662EBFE9_1e00bdac.MP4`, alt: "Villa walkthrough", type: "video", orientation: "landscape", tags: ["rooms", "s3"] },
  { id: "boc-s4", src: `${CDN}/80_57ce5c18.jpg`, alt: "Villa interior", type: "image", orientation: "landscape", tags: ["rooms", "s4"] },
  { id: "boc-74a", src: `${CDN}/74_11cc5b01.jpg`, alt: "Tropical waters", type: "image", orientation: "landscape", tags: ["nature"] },
  { id: "boc-79", src: `${CDN}/79_cfb33bcf.jpg`, alt: "Sunset view", type: "image", orientation: "landscape", tags: ["sunset"] },
  { id: "boc-83", src: `${CDN}/83_621b9b3f.jpg`, alt: "Villa exterior", type: "image", orientation: "landscape", tags: ["property"] },
  { id: "boc-86", src: `${CDN}/86_bcac4579.jpg`, alt: "Dining experience", type: "image", orientation: "landscape", tags: ["gastronomy"] },
  { id: "boc-87", src: `${CDN}/87_ab229191.jpg`, alt: "Overwater deck", type: "image", orientation: "landscape", tags: ["property"] },
  { id: "boc-88", src: `${CDN}/88_33345812.jpg`, alt: "Tropical garden", type: "image", orientation: "landscape", tags: ["nature"] },
  { id: "boc-97", src: `${CDN}/97_e7aef760.jpg`, alt: "Beach scene", type: "image", orientation: "landscape", tags: ["beach"] },
  { id: "boc-98", src: `${CDN}/98_97f443ac.jpg`, alt: "Marine life", type: "image", orientation: "landscape", tags: ["nature"] },
  { id: "boc-102", src: `${CDN}/102_ab0b274c.jpg`, alt: "Island view", type: "image", orientation: "landscape", tags: ["nature"] },
  { id: "boc-112", src: `${CDN}/112_8b2c7265.jpg`, alt: "Mangrove", type: "image", orientation: "landscape", tags: ["nature"] },
  { id: "boc-119", src: `${CDN}/119_e65d6018.jpg`, alt: "Coral reef", type: "image", orientation: "landscape", tags: ["nature"] },
  { id: "boc-126", src: `${CDN}/126_22a08627.jpg`, alt: "Starfish beach", type: "image", orientation: "landscape", tags: ["beach"] },
  { id: "boc-135", src: `${CDN}/135_de400071.jpg`, alt: "Jungle path", type: "image", orientation: "landscape", tags: ["nature"] },
  { id: "boc-136", src: `${CDN}/136_350b411d.jpg`, alt: "Sunset panorama", type: "image", orientation: "landscape", tags: ["sunset"] },
  { id: "boc-139", src: `${CDN}/139_c6e2d973.jpg`, alt: "Villa at dusk", type: "image", orientation: "landscape", tags: ["property"] },
  { id: "boc-aerial2", src: `${CDN}/bocas-aerial_ff3a4ff3.jpg`, alt: "Bocas aerial view", type: "image", orientation: "landscape", tags: ["property"] },
  { id: "boc-overwater", src: `${CDN}/bocas-overwater_f9b09985.jpg`, alt: "Overwater villa", type: "image", orientation: "landscape", tags: ["property"] },
  { id: "boc-sunset2", src: `${CDN}/bocas-sunset_2eeaa785.jpg`, alt: "Bocas sunset", type: "image", orientation: "landscape", tags: ["sunset"] },
  { id: "boc-villa-couple", src: `${CDN}/bocas-overwater-villa-couple_ff0c8415.jpg`, alt: "Overwater villa with couple and plunge pool", type: "image", orientation: "portrait", tags: ["rooms", "lifestyle"] },
  { id: "boc-aerial-boardwalk", src: `${CDN}/bocas-aerial-villas-boardwalk_94eb4b4f.jpg`, alt: "Aerial view of villas connected by boardwalk", type: "image", orientation: "landscape", tags: ["property", "aerial"] },
  { id: "boc-clear-swim", src: `${CDN}/bocas-crystal-clear-swimming_6e9b8f96.jpg`, alt: "Swimming in crystal clear Caribbean waters", type: "image", orientation: "landscape", tags: ["experiences", "lifestyle"] },
  { id: "boc-treehouses", src: `${CDN}/bocas-aerial-resort-treehouses_be44e763.jpg`, alt: "Aerial view of resort with treehouses and overwater villas", type: "image", orientation: "portrait", tags: ["property", "aerial"] },
  { id: "boc-villas-top", src: `${CDN}/bocas-aerial-overwater-villas-top_1842445d.jpg`, alt: "Top-down aerial of overwater villas in mangroves", type: "image", orientation: "landscape", tags: ["property", "aerial"] },
  { id: "boc-sunset-pano", src: `${CDN}/bocas-aerial-sunset-panorama_a979b5b2.jpg`, alt: "Sunset panorama over Bocas del Toro archipelago", type: "image", orientation: "square", tags: ["sunset", "aerial"] },
  { id: "boc-full-resort", src: `${CDN}/bocas-aerial-full-resort_d27193e4.jpg`, alt: "Full aerial view of Nayara Bocas resort", type: "image", orientation: "portrait", tags: ["property", "aerial"] },
  { id: "boc-turquoise", src: `${CDN}/bocas-aerial-villas-turquoise_858d4570.jpg`, alt: "Overwater villas against turquoise Caribbean sea", type: "image", orientation: "landscape", tags: ["property", "aerial"] },
  { id: "boc-bungalows-row", src: `${CDN}/bocas-overwater-bungalows-row_b6f413b4.jpg`, alt: "Row of overwater bungalows at water level", type: "image", orientation: "landscape", tags: ["rooms", "property"] },
  { id: "boc-infinity-pool", src: `${CDN}/bocas-infinity-pool-woman_e4043059.jpg`, alt: "Woman in infinity pool overlooking Caribbean", type: "image", orientation: "portrait", tags: ["wellness", "lifestyle"] },
  { id: "boc-vid-trim", src: `${CDN}/bocas-trim_3e8ce39a.mp4`, alt: "Bocas del Toro resort video", type: "video", orientation: "landscape", tags: ["property"] },
  { id: "boc-vid-aerial", src: `${CDN}/bocas-video-48c8_a4de45da.mp4`, alt: "Bocas del Toro aerial video", type: "video", orientation: "portrait", tags: ["property", "aerial"] },
];

/* ═══════════════════════════════════════════════════════════════
   TENTED CAMP — Arenal, Costa Rica
   Gallery Layout: Editorial 2-column alternating large/small
   ═══════════════════════════════════════════════════════════════ */
export const tentedCampGallery: GalleryItem[] = [
  { id: "tc-hero", src: `${CDN}/tented-camp-hero-desktop_90751603.mp4`, alt: "Tented Camp rainforest", type: "video", orientation: "landscape", tags: ["hero"] },
  { id: "tc-s1", src: `${CDN}/IMG_5354_8a9b536e.PNG`, alt: "Luxury tent", type: "image", orientation: "portrait", tags: ["story", "s1"] },
  { id: "tc-s2", src: `${CDN}/340C7D71-BAF3-4215-B25E-98878C4B65F6_48b343e5.JPEG`, alt: "Rainforest view", type: "image", orientation: "landscape", tags: ["story", "s2"] },
  { id: "tc-vid-vert", src: `${CDN}/Edits_Tented_Vertical_20251129_175142_b6a8d6ab.MP4`, alt: "Tented Camp vertical video", type: "video", orientation: "portrait", tags: ["property", "video"] },
  { id: "tc-s4", src: `${CDN}/59_fbf56df9.jpg`, alt: "Camp grounds", type: "image", orientation: "landscape", tags: ["rooms", "s4"] },
  { id: "tc-s3", src: `${CDN}/tented-s3-rooms_0707176b.jpg`, alt: "Room interior", type: "image", orientation: "portrait", tags: ["rooms", "s3"] },
  { id: "tc-ext", src: `${CDN}/tented-camp-exterior_c9d0e1f2.jpg`, alt: "Tented Camp exterior", type: "image", orientation: "landscape", tags: ["property"] },
  { id: "tc-hero2", src: `${CDN}/hero2-arenal-tent_860ab6b2.webp`, alt: "Arenal tent sunset", type: "image", orientation: "landscape", tags: ["property", "sunset"] },
  { id: "tc-tent3", src: `${CDN}/(Rooms)NayaraTent3copy_54044994.webp`, alt: "Tented villa pool with volcano view", type: "image", orientation: "landscape", tags: ["rooms"] },
  { id: "tc-fam2", src: `${CDN}/(Rooms)FamilyTent2_79becb8c.webp`, alt: "Luxury tent bedroom interior", type: "image", orientation: "landscape", tags: ["rooms"] },
  { id: "tc-casita7", src: `${CDN}/(Rooms)ArenalPoolCasita7copy_37fdccc3.webp`, alt: "Casita bedroom with botanical mural", type: "image", orientation: "landscape", tags: ["rooms"] },
  { id: "tc-fam3", src: `${CDN}/(Rooms)FamilyTent3copy_f74355c8.webp`, alt: "Family tent twin beds", type: "image", orientation: "landscape", tags: ["rooms"] },
  { id: "tc-casita9", src: `${CDN}/(Rooms)ArenalPoolCasita9copy_f06e14d7.webp`, alt: "Casita deck with plunge pool", type: "image", orientation: "landscape", tags: ["rooms"] },
];

/* ═══════════════════════════════════════════════════════════════
   GARDENS — Arenal, Costa Rica
   Gallery Layout: Mosaic tiles (mixed sizes)
   ═══════════════════════════════════════════════════════════════ */
export const gardensGallery: GalleryItem[] = [
  { id: "gar-hero", src: `${CDN}/gardens-hero-desktop_88c542ed.mp4`, alt: "Nayara Gardens aerial", type: "video", orientation: "landscape", tags: ["hero"] },
  { id: "gar-s1", src: `${CDN}/5_ac0cb283.jpg`, alt: "Lush grounds", type: "image", orientation: "portrait", tags: ["story", "s1"] },
  { id: "gar-s2", src: `${CDN}/321D9B07-0FF2-459E-BBA0-623B1062AA25_38485c6d.jpeg`, alt: "Panoramic view", type: "image", orientation: "landscape", tags: ["story", "s2"] },
  { id: "gar-s3", src: `${CDN}/gardens-s3-casita_4be73573.jpg`, alt: "Casita room", type: "image", orientation: "portrait", tags: ["rooms", "s3"] },
  { id: "gar-s4", src: `${CDN}/106_d215cd45.jpg`, alt: "Property view", type: "image", orientation: "landscape", tags: ["rooms", "s4"] },
];

/* ═══════════════════════════════════════════════════════════════
   HANGAROA — Easter Island, Chile
   Gallery Layout: Full-width stacked with parallax
   ═══════════════════════════════════════════════════════════════ */
export const hangaroaGallery: GalleryItem[] = [
  { id: "han-hero-m", src: `${CDN}/han-hero-m_147d31c4.mp4`, alt: "Easter Island view", type: "video", orientation: "portrait", tags: ["hero", "mobile"] },
  { id: "han-hero-d", src: `${CDN}/han-hero-d_0bf06c29.mp4`, alt: "Hangaroa aerial", type: "video", orientation: "landscape", tags: ["hero"] },
  { id: "han-s1", src: `${CDN}/RapaNui2(1)_179dfb19.jpeg`, alt: "Rapa Nui landscape", type: "image", orientation: "landscape", tags: ["story", "s1"] },
  { id: "han-s2", src: `${CDN}/Untitleddesign-20_b052852b.jpg`, alt: "Easter Island sunset", type: "image", orientation: "landscape", tags: ["story", "s2"] },
  { id: "han-s3", src: `${CDN}/NH_45_42b93d04.JPG`, alt: "Room interior", type: "image", orientation: "portrait", tags: ["rooms", "s3"] },
  { id: "han-moai", src: `${CDN}/Untitleddesign-16_aa3fc296.JPG`, alt: "Moai at sunset", type: "image", orientation: "landscape", tags: ["culture"] },
  { id: "han-coast", src: `${CDN}/Untitleddesign-21_c15d07fa.JPG`, alt: "Easter Island coast", type: "image", orientation: "landscape", tags: ["nature"] },
  { id: "han-volcanic", src: `${CDN}/Untitleddesign-22_3f8e6011.JPG`, alt: "Volcanic landscape", type: "image", orientation: "landscape", tags: ["nature"] },
  { id: "han-aerial", src: `${CDN}/hangaroa-aerial_9e07a82e.jpg`, alt: "Hangaroa aerial", type: "image", orientation: "landscape", tags: ["property"] },
  { id: "han-pool", src: `${CDN}/hangaroa-pool_1b0d18e8.jpg`, alt: "Hangaroa pool", type: "image", orientation: "landscape", tags: ["pool"] },
  { id: "han-room", src: `${CDN}/hangaroa-room_5b9eb728.jpg`, alt: "Hangaroa room", type: "image", orientation: "landscape", tags: ["rooms"] },
  { id: "han-moai2", src: `${CDN}/hangaroa-s2-moai-sunset_dcd66ecc.jpg`, alt: "Moai sunset", type: "image", orientation: "landscape", tags: ["culture", "sunset"] },
  { id: "han-sunset", src: `${CDN}/hangaroa-sunset_1238744f.jpg`, alt: "Hangaroa sunset", type: "image", orientation: "landscape", tags: ["sunset"] },
];

/* ═══════════════════════════════════════════════════════════════
   BRAND-LEVEL ASSETS
   ═══════════════════════════════════════════════════════════════ */
export const brandGallery: GalleryItem[] = [
  { id: "brand-logo", src: `${CDN}/nayara_resorts_logo_990b5471.png`, alt: "Nayara Resorts logo", type: "image", orientation: "landscape", tags: ["brand", "logo"] },
  { id: "brand-logo-m", src: `${CDN}/nayara-logo-mobile_b4d2ae65.svg`, alt: "Mobile logo", type: "image", orientation: "square", tags: ["brand", "logo"] },
  { id: "brand-logo-w", src: `${CDN}/nayara-logo-mobile-white_36c5a575.svg`, alt: "White logo", type: "image", orientation: "square", tags: ["brand", "logo"] },
  { id: "brand-home", src: `${CDN}/homepage-hero-new-resorts_d66da8e1.mp4`, alt: "Homepage hero", type: "video", orientation: "landscape", tags: ["hero", "homepage"] },
  { id: "brand-sust", src: `${CDN}/sustainability-hero-new_df03d599.mp4`, alt: "Sustainability hero", type: "video", orientation: "landscape", tags: ["hero", "sustainability"] },
  { id: "brand-well", src: `${CDN}/wellness-hero-v2_25839541.mp4`, alt: "Wellness hero", type: "video", orientation: "landscape", tags: ["hero", "wellness"] },
  { id: "brand-gast", src: `${CDN}/gastronomy-hero-edited_3e0a63fa.mp4`, alt: "Gastronomy hero", type: "video", orientation: "landscape", tags: ["hero", "gastronomy"] },
  { id: "brand-pod", src: `${CDN}/nayara-horizons-hero-v2_63287f40.mp4`, alt: "Podcast hero", type: "video", orientation: "landscape", tags: ["hero", "podcast"] },
];

/* ═══════════════════════════════════════════════════════════════
   UTILITIES
   ═══════════════════════════════════════════════════════════════ */
export function getGalleryByProperty(propertyId: string): GalleryItem[] {
  switch (propertyId) {
    case "springs": return springsGallery;
    case "alto-atacama": return atacamaGallery;
    case "bocas-del-toro": return bocasGallery;
    case "tented-camp": return tentedCampGallery;
    case "gardens": return gardensGallery;
    case "hangaroa": return hangaroaGallery;
    default: return [];
  }
}

export function filterByTag(items: GalleryItem[], tag: string): GalleryItem[] {
  return items.filter((item) => item.tags.includes(tag));
}

export function getImages(items: GalleryItem[]): GalleryItem[] {
  return items.filter((item) => item.type === "image");
}

export function getVideos(items: GalleryItem[]): GalleryItem[] {
  return items.filter((item) => item.type === "video");
}

/** Property gradient colors — light-to-deep */
export const PROPERTY_GRADIENTS: Record<string, { from: string; to: string }> = {
  springs: { from: "#f0f7f0", to: "#1a4a2e" },
  gardens: { from: "#eef5ee", to: "#2d5a3d" },
  "tented-camp": { from: "#ffffff", to: "#ffffff" },
  "alto-atacama": { from: "#faf5ef", to: "#8b4513" },
  "bocas-del-toro": { from: "#f0f8f8", to: "#1a6b6b" },
  hangaroa: { from: "#f5f5f3", to: "#4a4a4a" },
};
