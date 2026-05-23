/**
 * MASTER GALLERY DATA , All assets organized per property
 *
 * Rules:
 * - Every asset goes into its property gallery. No exceptions.
 * - Shared Costa Rica assets go in Springs gallery ONLY (zero duplicates).
 * - Videos autoplay muted in galleries.
 * - Gallery is the master pool , sections pull from here.
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
   SPRINGS , Includes all shared Costa Rica assets
   Gallery Layout: Classic masonry 3-column
   ═══════════════════════════════════════════════════════════════ */
export const springsGallery: GalleryItem[] = [
  { id: "spr-hero", src: `${CDN}/springs-hero-horizontal-hq_c0efb638.mp4`, alt: "Nayara Springs aerial view", type: "video", orientation: "landscape", tags: ["hero"] },
  { id: "spr-s1", src: `${CDN}/6_0a37cc95.jpg`, alt: "Hot spring immersion", type: "image", orientation: "portrait", tags: ["story", "s1"] },
  { id: "spr-s2", src: `${CDN}/123_739860cc.jpg`, alt: "Rainforest boardwalk", type: "image", orientation: "landscape", tags: ["story", "s2"] },
  { id: "spr-s3", src: `${CDN}/springs-s3-robe-canopy_c9c365ff.jpg`, alt: "Canopy villa", type: "image", orientation: "portrait", tags: ["rooms", "s3"] },
  { id: "spr-s4", src: `${CDN}/61_0020df3e.jpg`, alt: "Aerial villa view", type: "image", orientation: "landscape", tags: ["rooms", "s4"] },
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
   ALTO ATACAMA , Atacama Desert, Chile
   Gallery Layout: Horizontal filmstrip / cinema-wide cards
   ═══════════════════════════════════════════════════════════════ */
export const atacamaGallery: GalleryItem[] = [
  { id: "ata-hero-d", src: `${CDN}/atacama-hero-desktop-hq_732fe8b3.mp4`, alt: "Atacama desert panorama", type: "video", orientation: "landscape", tags: ["hero"] },
  { id: "ata-hero-m", src: `${CDN}/atacama-hero-vertical-hq_d81c629e.mp4`, alt: "Atacama vertical hero", type: "video", orientation: "portrait", tags: ["hero", "mobile"] },
  { id: "ata-s1", src: `${CDN}/Untitleddesign-17_d0de17d2.JPG`, alt: "Atacama desert landscape", type: "image", orientation: "portrait", tags: ["story", "s1"] },
  { id: "ata-s2", src: `${CDN}/11_576297a8.jpg`, alt: "Atacama salt flats", type: "image", orientation: "landscape", tags: ["story", "s2"] },
  { id: "ata-s3", src: `${CDN}/trim_cb137ccb.mp4`, alt: "Atacama rooms walkthrough", type: "video", orientation: "landscape", tags: ["rooms", "s3"] },
  { id: "ata-s4", src: `${CDN}/4O1A1949-NayaraAltoAtacama-RainbowValley-byBriceFerreStudio(1)_a94c41d0.jpeg`, alt: "Rainbow Valley", type: "image", orientation: "landscape", tags: ["rooms", "s4"] },
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
   BOCAS DEL TORO , Panama
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
   TENTED CAMP , Arenal, Costa Rica
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
   GARDENS , Arenal, Costa Rica
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
   HANGAROA , Easter Island, Chile
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
  { id: "brand-pod", src: `${CDN}/nayara-horizons-hero-v2_cd497d7a.mp4`, alt: "Podcast hero", type: "video", orientation: "landscape", tags: ["hero", "podcast"] },
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

/** Property gradient colors , light-to-deep */
export const PROPERTY_GRADIENTS: Record<string, { from: string; to: string }> = {
  springs: { from: "#f0f7f0", to: "#1a4a2e" },
  gardens: { from: "#eef5ee", to: "#2d5a3d" },
  "tented-camp": { from: "#ffffff", to: "#ffffff" },
  "alto-atacama": { from: "#faf5ef", to: "#8b4513" },
  "bocas-del-toro": { from: "#f0f8f8", to: "#1a6b6b" },
  hangaroa: { from: "#f5f5f3", to: "#4a4a4a" },
};

/* ═══════════════════════════════════════════════════════════════
   UNIFIED GALLERY ITEMS , All new assets for brand gallery
   ═══════════════════════════════════════════════════════════════ */
export const galleryItems: GalleryItem[] = [
  { id: "g1", src: "https://manus-storage.s3.amazonaws.com/IMG_5777_7f8e6c4f.jpg", alt: "Gallery item", type: "image", orientation: "landscape", tags: ["new"] },
  { id: "g2", src: "https://manus-storage.s3.amazonaws.com/115d8e68-42f9-49a1-ab0b-64843c68eac9_d25bf35c.JPG", alt: "Gallery item", type: "image", orientation: "landscape", tags: ["new"] },
  { id: "g3", src: "https://manus-storage.s3.amazonaws.com/4O1A9099-NayaraAltoAtacama-byBriceFerreStudio_8ac62780.jpeg", alt: "Gallery item", type: "image", orientation: "landscape", tags: ["new"] },
  { id: "g4", src: "https://manus-storage.s3.amazonaws.com/fd9345d1-bbec-446f-af3b-1c2974454b33_5f8c37d4.JPG", alt: "Gallery item", type: "image", orientation: "portrait", tags: ["new"] },
  { id: "g5", src: "https://manus-storage.s3.amazonaws.com/D62BC3A4-FD8D-4160-BA53-A9B27D9C85C4_9f5c9dec.jpg", alt: "Gallery item", type: "image", orientation: "landscape", tags: ["new"] },
  { id: "g6", src: "https://manus-storage.s3.amazonaws.com/4O1A0731-NayaraAltoAtacama-Geysers-byBriceFerreStudio_57ec2d07.jpeg", alt: "Gallery item", type: "image", orientation: "landscape", tags: ["new"] },
  { id: "g7", src: "https://manus-storage.s3.amazonaws.com/PizzaovenNS-MisAmoresfireLR_ade76a41.JPG", alt: "Gallery item", type: "image", orientation: "landscape", tags: ["new"] },
  { id: "g8", src: "https://manus-storage.s3.amazonaws.com/ca3fcfa9-c401-4764-8caf-aa1b556a1eec_ba7f61ad.JPG", alt: "Gallery item", type: "image", orientation: "landscape", tags: ["new"] },
  { id: "g9", src: "https://manus-storage.s3.amazonaws.com/Untitleddesign_09118830.JPEG", alt: "Gallery item", type: "image", orientation: "square", tags: ["new"] },
  { id: "g10", src: "https://manus-storage.s3.amazonaws.com/Untitleddesign-7_5c21ff24.JPG", alt: "Gallery item", type: "image", orientation: "portrait", tags: ["new"] },
  { id: "g11", src: "https://manus-storage.s3.amazonaws.com/IMG_5809_98451e83.jpg", alt: "Gallery item", type: "image", orientation: "portrait", tags: ["new"] },
  { id: "g12", src: "https://manus-storage.s3.amazonaws.com/Untitleddesign-14_2a24f78f.JPG", alt: "Gallery item", type: "image", orientation: "square", tags: ["new"] },
  { id: "g13", src: "https://manus-storage.s3.amazonaws.com/3ebfa54d-69b4-4274-bc93-fc60642536c9_11e9e1d9.JPG", alt: "Gallery item", type: "image", orientation: "landscape", tags: ["new"] },
  { id: "g14", src: "https://manus-storage.s3.amazonaws.com/522673DE-5A2C-4A4D-A408-82EA2E901455_dd12dddf.JPEG", alt: "Gallery item", type: "image", orientation: "portrait", tags: ["new"] },
  { id: "g15", src: "https://manus-storage.s3.amazonaws.com/Untitleddesign-16_e19a4750.JPG", alt: "Gallery item", type: "image", orientation: "square", tags: ["new"] },
  { id: "g16", src: "https://manus-storage.s3.amazonaws.com/9f6e35ed-63fd-40ca-bb72-31e6a2f0f28f_297e1a85.jpg", alt: "Gallery item", type: "image", orientation: "landscape", tags: ["new"] },
  { id: "g17", src: "https://manus-storage.s3.amazonaws.com/5E8F3F4E-BF87-4A5F-BBB2-2737E82CE424_679f4ab3.jpeg", alt: "Gallery item", type: "image", orientation: "portrait", tags: ["new"] },
  { id: "g18", src: "https://manus-storage.s3.amazonaws.com/3df15446-15eb-4056-8ddb-437113d81e19_20161d91.JPG", alt: "Gallery item", type: "image", orientation: "landscape", tags: ["new"] },
  { id: "g19", src: "https://manus-storage.s3.amazonaws.com/NTC-ArealViewConnecting_4d32e013.JPG", alt: "Gallery item", type: "image", orientation: "landscape", tags: ["new"] },
  { id: "g20", src: "https://manus-storage.s3.amazonaws.com/NayarabocasdelToro-LivLaw-DJI_0245-byBriceFerreStudio_1be89300.JPG", alt: "Gallery item", type: "image", orientation: "landscape", tags: ["new"] },
  { id: "g21", src: "https://manus-storage.s3.amazonaws.com/3a94f88f-2a69-457a-bc18-fae9946d8f0c_f4b4c52b.jpg", alt: "Gallery item", type: "image", orientation: "portrait", tags: ["new"] },
  { id: "g22", src: "https://manus-storage.s3.amazonaws.com/08c7f8ce-19dc-44d6-9a17-6cee6d280ec4_3a7922c1.JPG", alt: "Gallery item", type: "image", orientation: "landscape", tags: ["new"] },
  { id: "g23", src: "https://manus-storage.s3.amazonaws.com/Untitleddesign-21_49453bb3.JPG", alt: "Gallery item", type: "image", orientation: "square", tags: ["new"] },
  { id: "g24", src: "https://manus-storage.s3.amazonaws.com/IMG_6412_eaaed027.jpg", alt: "Gallery item", type: "image", orientation: "portrait", tags: ["new"] },
  { id: "g25", src: "https://manus-storage.s3.amazonaws.com/NayaraSprings-R5_20225-byBriceFerreStudio_43b0ff4c.jpeg", alt: "Gallery item", type: "image", orientation: "landscape", tags: ["new"] },
  { id: "g26", src: "https://manus-storage.s3.amazonaws.com/Untitleddesign-22_134743cc.JPG", alt: "Gallery item", type: "image", orientation: "square", tags: ["new"] },
  { id: "g27", src: "https://manus-storage.s3.amazonaws.com/Resort9_73111e5e.jpg", alt: "Gallery item", type: "image", orientation: "landscape", tags: ["new"] },
  { id: "g28", src: "https://manus-storage.s3.amazonaws.com/14F2FFF3-566C-44D2-BBB2-F889B576610C_51a467d6.JPEG", alt: "Gallery item", type: "image", orientation: "portrait", tags: ["new"] },
  { id: "g29", src: "https://manus-storage.s3.amazonaws.com/DJI_0425_4bda99ae.jpg", alt: "Gallery item", type: "image", orientation: "landscape", tags: ["new"] },
  { id: "g30", src: "https://manus-storage.s3.amazonaws.com/321D9B07-0FF2-459E-BBA0-623B1062AA25_f5292fbb.JPEG", alt: "Gallery item", type: "image", orientation: "portrait", tags: ["new"] },
  { id: "g31", src: "https://manus-storage.s3.amazonaws.com/DC305D4C-0F81-4925-B558-E828E8F73080_8b0c306f.jpg", alt: "Gallery item", type: "image", orientation: "landscape", tags: ["new"] },
  { id: "g32", src: "https://manus-storage.s3.amazonaws.com/Resort1_4dc264f3.jpeg", alt: "Gallery item", type: "image", orientation: "landscape", tags: ["new"] },
  { id: "g33", src: "https://manus-storage.s3.amazonaws.com/31dbb811-09d5-4dba-ba57-1b419864a6f7_d1f34cc7.JPG", alt: "Gallery item", type: "image", orientation: "portrait", tags: ["new"] },
  { id: "g34", src: "https://manus-storage.s3.amazonaws.com/1F7FE975-F5FF-49EA-B2FE-657AEF801D9B_6f9e8090.JPEG", alt: "Gallery item", type: "image", orientation: "square", tags: ["new"] },
  { id: "g35", src: "https://manus-storage.s3.amazonaws.com/IMG_5810_32eb42f4.jpg", alt: "Gallery item", type: "image", orientation: "portrait", tags: ["new"] },
  { id: "g36", src: "https://manus-storage.s3.amazonaws.com/IMG_5795_6913b28d.jpg", alt: "Gallery item", type: "image", orientation: "portrait", tags: ["new"] },
  { id: "g37", src: "https://manus-storage.s3.amazonaws.com/IMG_5781_07c3f8ed.jpg", alt: "Gallery item", type: "image", orientation: "portrait", tags: ["new"] },
  { id: "g38", src: "https://manus-storage.s3.amazonaws.com/IMG_5797_2d545551.jpg", alt: "Gallery item", type: "image", orientation: "portrait", tags: ["new"] },
  { id: "g39", src: "https://manus-storage.s3.amazonaws.com/ae06ce17-ec89-4b23-8be6-1e5251ac850c_2bf2bbf9.JPG", alt: "Gallery item", type: "image", orientation: "landscape", tags: ["new"] },
  { id: "g40", src: "https://manus-storage.s3.amazonaws.com/IMG_5786_73bf5261.jpg", alt: "Gallery item", type: "image", orientation: "portrait", tags: ["new"] },
  { id: "g41", src: "https://manus-storage.s3.amazonaws.com/508955DB-1B32-48E7-B3EB-3FEA2A92A48D_f1ab3dc0.JPEG", alt: "Gallery item", type: "image", orientation: "landscape", tags: ["new"] },
  { id: "g42", src: "https://manus-storage.s3.amazonaws.com/feb91b2b-2699-4cd2-84ad-f80e0237ac2b_c05ee8b9.JPG", alt: "Gallery item", type: "image", orientation: "landscape", tags: ["new"] },
  { id: "g43", src: "https://manus-storage.s3.amazonaws.com/AmorLocoNayaraSprings-R5_26625-byBriceFerreStudio_eb808d87.jpeg", alt: "Gallery item", type: "image", orientation: "landscape", tags: ["new"] },
  { id: "g44", src: "https://manus-storage.s3.amazonaws.com/NayaraTentedCamp-AylaPool(3)_fa1aa922.jpeg", alt: "Gallery item", type: "image", orientation: "landscape", tags: ["new"] },
  { id: "g45", src: "https://manus-storage.s3.amazonaws.com/5178CD9B-559F-438F-BDFC-144084EAE0C2_5a86c446.jpeg", alt: "Gallery item", type: "image", orientation: "landscape", tags: ["new"] },
  { id: "g46", src: "https://manus-storage.s3.amazonaws.com/4O1A9347-NayaraTentedCampHangingBridgewithLivLaw-byBriceFerreStudio_b2c47b54.jpeg", alt: "Gallery item", type: "image", orientation: "landscape", tags: ["new"] },
  { id: "g47", src: "https://manus-storage.s3.amazonaws.com/96454375-D840-4B02-AEF7-98893DAD18AA_1dcbc251.jpeg", alt: "Gallery item", type: "image", orientation: "portrait", tags: ["new"] },
  { id: "g48", src: "https://manus-storage.s3.amazonaws.com/ACDF665C-3B75-4A15-9806-4E325514B1A9_43c954df.jpg", alt: "Gallery item", type: "image", orientation: "landscape", tags: ["new"] },
  { id: "g49", src: "/manus-storage/trim_8b62c7bf_c87c24cb.mp4", alt: "Gallery item", type: "video", orientation: "landscape", tags: ["new"] },
  { id: "g50", src: "/manus-storage/16c8c451-954d-4872-8d52-a4c15b629886_a3b2ae86.JPG", alt: "Milky Way arch over desert rocks", type: "image", orientation: "landscape", tags: ["by-night", "atacama"] },
  { id: "g51", src: "/manus-storage/16179e40-057d-49c6-a4e5-e8df45591809_c2dfdbe4.JPG", alt: "Milky Way over abandoned bus in desert", type: "image", orientation: "landscape", tags: ["by-night", "atacama"] },
  { id: "g52", src: "/manus-storage/f6306496-0129-4458-8b7e-ad0a635cadf2_eb49b46f.JPG", alt: "Milky Way arch over blue-lit desert explorer", type: "image", orientation: "landscape", tags: ["by-night", "atacama"] },
  { id: "g53", src: "/manus-storage/8a1f22f3-c4d4-4285-957d-29043e6045a7_05d80d2f.JPG", alt: "Milky Way over Moai statues Easter Island", type: "image", orientation: "landscape", tags: ["by-night", "hangaroa"] },
  { id: "g54", src: "/manus-storage/66e429cf-b500-4eae-8ac1-dd50b0346f31_4eda7005.JPG", alt: "Milky Way over desert with abandoned bus vertical", type: "image", orientation: "portrait", tags: ["by-night", "atacama"] },
  { id: "g55", src: "/manus-storage/11bf456a-5f14-4e1f-840a-8b2598e8e336_add069ea.JPG", alt: "Milky Way over rock formations with explorer", type: "image", orientation: "landscape", tags: ["by-night", "atacama"] },
  { id: "g56", src: "/manus-storage/34bbfd3a-a0ae-456b-9d5c-cffd4119aa29_bcb2bde8.JPG", alt: "Milky Way over tall rock pillar", type: "image", orientation: "portrait", tags: ["by-night", "atacama"] },
  { id: "g57", src: "/manus-storage/8fb63603-09f7-4410-a122-ff349af637e7_77d16cbb.JPG", alt: "Milky Way arch through canyon", type: "image", orientation: "landscape", tags: ["by-night", "atacama"] },
  { id: "g58", src: "/manus-storage/df03df3d-cd0b-4b6e-accf-e6b0bd43a9fd_78eb64d2.JPG", alt: "Milky Way over red truck in desert", type: "image", orientation: "portrait", tags: ["by-night", "atacama"] },
  { id: "g59", src: "/manus-storage/1b2821ae-abf3-4d52-990b-ae1384274b63_b8590827.jpg", alt: "Explorer silhouette in rock arch under Milky Way", type: "image", orientation: "landscape", tags: ["by-night", "atacama"] },
  { id: "g60", src: "/manus-storage/17d0897a-411d-42f8-9fb0-37d844a73d8b_0fc1553b.JPG", alt: "Milky Way arch over salt flats", type: "image", orientation: "landscape", tags: ["by-night", "atacama"] },
  { id: "g61", src: "/manus-storage/ad64c2ea-0412-4598-b5c7-b5bbcfbb2a14_7104b468.JPG", alt: "Moai statue with Milky Way vertical", type: "image", orientation: "portrait", tags: ["by-night", "hangaroa"] },
  { id: "g62", src: "/manus-storage/80be8126-29f1-4b07-8735-a51172dc9b4d_3c068bc3.JPG", alt: "Moai profile silhouette under green sky", type: "image", orientation: "portrait", tags: ["by-night", "hangaroa"] },
  { id: "g63", src: "/manus-storage/3ee7d186-7245-4098-8a5e-93e9ae157e01_bc63a4e3.JPG", alt: "Hand of the Desert sculpture under Milky Way", type: "image", orientation: "portrait", tags: ["by-night", "atacama"] },
];
