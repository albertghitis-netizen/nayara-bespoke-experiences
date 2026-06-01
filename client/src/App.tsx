import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect, lazy, Suspense, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";
import BlogLoadingSkeleton from "./components/BlogLoadingSkeleton";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./index.css";

/* ── Eagerly loaded (homepage) ── */
import Home from "./pages/Home";
import ComingSoonVenue from "./components/ComingSoonVenue";
import AtacamaGastronomy from "./pages/AtacamaGastronomy";
import HangaroaGastronomy from "./pages/HangaroaGastronomy";

/* ── Lazy-loaded pages ── */
const AltoAtacama = lazy(() => import("./pages/AltoAtacama"));
const AtacamaWellness = lazy(() => import("./pages/AtacamaWellness"));
const CuratedExcursions = lazy(() => import("./pages/ExperientialArenal"));
const FamilyExpeditions = lazy(() => import("./pages/FamilyExpeditions"));
const RainforestRomance = lazy(() => import("./pages/RainforestRomance"));
const Hangaroa = lazy(() => import("./pages/Hangaroa"));
const BocasDelToro = lazy(() => import("./pages/BocasDelToro"));
const Journal = lazy(() => import("./pages/Journal"));
const AwardsAndPress = lazy(() => import("./pages/AwardsAndPress"));
const Sustainability = lazy(() => import("./pages/Sustainability"));
const Experiences = lazy(() => import("./pages/Experiences"));
const Wellness = lazy(() => import("./pages/TentedWellness"));
const CostaRicaWellnessBrand = lazy(() => import("./pages/NurturedByNature"));

const ExploreArenal = lazy(() => import("./pages/ExploreArenal"));
const Gastronomy = lazy(() => import("./pages/Gastronomy"));
const TentedCamp = lazy(() => import("./pages/TentedCamp"));
const TentedExperiences = lazy(() => import("./pages/TentedExperiences"));
const Gardens = lazy(() => import("./pages/Gardens"));
const Springs = lazy(() => import("./pages/Springs"));
const ConciergeChatWidget = lazy(() => import("./components/ConciergeChatWidget"));
const NewsletterApril = lazy(() => import("./pages/NewsletterApril"));
const NewsletterMay = lazy(() => import("./pages/NewsletterMay"));
const NewsletterJune = lazy(() => import("./pages/NewsletterJune"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const DynamicBlogPost = lazy(() => import("./pages/DynamicBlogPost"));
const ExperientialTravelBlog = lazy(() => import("./pages/ExperientialTravelBlog"));
const FamilyBucketListBlog = lazy(() => import("./pages/FamilyBucketListBlog"));
const GastronomyBlog = lazy(() => import("./pages/GastronomyBlog"));
const InHouseActivitiesBlog = lazy(() => import("./pages/InHouseActivitiesBlog"));

const GreenGlobeBlog = lazy(() => import("./pages/GreenGlobeBlog"));
const WomensEmpowermentBlog = lazy(() => import("./pages/WomensEmpowermentBlog"));
const BirdwatchingBlog = lazy(() => import("./pages/BirdwatchingBlog"));
const Stargazing = lazy(() => import("./pages/Stargazing"));
const MichelinKeysBlog = lazy(() => import("./pages/MichelinKeysBlog"));
const AtacamaWildlifeBlog = lazy(() => import("./pages/AtacamaWildlifeBlog"));
const ArenalBocasWildlifeBlog = lazy(() => import("./pages/ArenalBocasWildlifeBlog"));
const AtacamaOasisBlog = lazy(() => import("./pages/AtacamaOasisBlog"));
const TravelTrendsBlog = lazy(() => import("./pages/TravelTrendsBlog"));
const WellnessByColorsBlog = lazy(() => import("./pages/WellnessByColorsBlog"));
const HotSpringsBlog = lazy(() => import("./pages/HotSpringsBlog"));
const HangaroaRegenerationBlog = lazy(() => import("./pages/HangaroaRegenerationBlog"));

const AtacamaMarsEarthBlog = lazy(() => import("./pages/AtacamaMarsEarthBlog"));
const NayaraStoryBlog = lazy(() => import("./pages/NayaraStoryBlog"));
const NayaraByNightBlog = lazy(() => import("./pages/NayaraByNightBlog"));
const BocasCondeNastAwardBlog = lazy(() => import("./pages/BocasCondeNastAwardBlog"));
// CaribbeanCoralReefBlog removed — content lives on /bocas-del-toro/sustainability
const MayaRapaNuiClimateBlog = lazy(() => import("./pages/MayaRapaNuiClimateBlog"));
const SunlitSustainabilityBlog = lazy(() => import("./pages/SunlitSustainabilityBlog"));
const SoloTravelFemaleBlog = lazy(() => import("./pages/SoloTravelFemaleBlog"));
const PuraVidaBlog = lazy(() => import("./pages/PuraVidaBlog"));
// ToucansArenalBlog and TreehouseDreamsBlog deleted — stubs removed
const StargazingAtacamaBlog = lazy(() => import("./pages/StargazingAtacamaBlog"));
const EdgeHabitabilityBlog = lazy(() => import("./pages/EdgeHabitabilityBlog"));
const ChileGastronomyBlog = lazy(() => import("./pages/ChileGastronomyBlog"));
const FAQ = lazy(() => import("./pages/FAQ"));
const TapatiFestivalBlog = lazy(() => import("./pages/TapatiFestivalBlog"));
const CommunityBlog = lazy(() => import("./pages/CommunityBlog"));
const BocasOperationsBlog = lazy(() => import("./pages/BocasOperationsBlog"));
const RomanceBlog = lazy(() => import("./pages/RomanceBlog"));
const EasterIslandOutdoorsBlog = lazy(() => import("./pages/EasterIslandOutdoorsBlog"));
const BrandBook = lazy(() => import("./pages/BrandBook"));
const Architecture = lazy(() => import("./pages/Architecture"));
// const HenryStandalone = lazy(() => import("./pages/HenryStandalone")); // ARCHIVED: Can be restored if needed
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Gallery = lazy(() => import("./pages/Gallery"));
// const Sharalynn = lazy(() => import("./pages/Sharalynn")); // ARCHIVED: Can be restored if needed
const Lexi = lazy(() => import("./pages/Lexi"));
const Sylvia = lazy(() => import("./pages/Sylvia"));
const SylviaComingSoon = lazy(() => import("./pages/SylviaComingSoon"));
const ArenalTimelessWonderBlog = lazy(() => import("./pages/ArenalTimelessWonderBlog"));
const OceanHabitatRestoration = lazy(() => import("./pages/OceanHabitatRestoration"));

const AtacamaRooms = lazy(() => import("./pages/AtacamaRooms"));
/* Atacama/Bocas/Hangaroa deep pages now use the universal shared components */
const TentedRooms = lazy(() => import("./pages/TentedRooms"));
/* Deeper room detail pages (Tented Camp) */
const NayaraTent = lazy(() => import("./pages/NayaraTent"));
const FamilyTent = lazy(() => import("./pages/FamilyTent"));
const TentedResidencePage = lazy(() => import("./pages/Residence"));
const SpringsVilla = lazy(() => import("./pages/SpringsVilla"));
const ArenalPoolCasita = lazy(() => import("./pages/ArenalPoolCasita"));
const RainforestPoolVilla = lazy(() => import("./pages/RainforestPoolVilla"));
const GrandTent = lazy(() => import("./pages/GrandTent"));
const OverwaterVilla = lazy(() => import("./pages/OverwaterVilla"));
const DeluxeOverwaterVilla = lazy(() => import("./pages/DeluxeOverwaterVilla"));
const Treehouse = lazy(() => import("./pages/Treehouse"));
const PremiumVilla = lazy(() => import("./pages/PremiumVilla"));
const Catarpe = lazy(() => import("./pages/Catarpe"));
const Quitor = lazy(() => import("./pages/Quitor"));
const SuiteTilo = lazy(() => import("./pages/SuiteTilo"));
const Kainga = lazy(() => import("./pages/Kainga"));
const Maunga = lazy(() => import("./pages/Maunga"));

/* ── Individual restaurant pages (Costa Rica) ── */


/* ── Shared Costa Rica deep pages (palette-swapped per property) ── */
const CostaRicaExperiences = lazy(() => import("./pages/CostaRicaExperiences"));
const CostaRicaWellness = lazy(() => import("./pages/CostaRicaWellness"));
const CostaRicaGastronomy = lazy(() => import("./pages/CostaRicaGastronomy"));
const AylaRestaurant = lazy(() => import("./pages/AylaRestaurant"));
const AmorLocoRestaurant = lazy(() => import("./pages/AmorLocoRestaurant"));
const AsiaLunaRestaurant = lazy(() => import("./pages/AsiaLunaRestaurant"));
const HenrysBarRestaurant = lazy(() => import("./pages/HenrysBarRestaurant"));
const LaTerrazaRestaurant = lazy(() => import("./pages/LaTerrazaRestaurant"));
const LaylasRestaurant = lazy(() => import("./pages/LaylasRestaurant"));
const MiCafecitoRestaurant = lazy(() => import("./pages/MiCafecitoRestaurant"));
const MisAmoresRestaurant = lazy(() => import("./pages/MisAmoresRestaurant"));
const NostalgiaRestaurant = lazy(() => import("./pages/NostalgiaRestaurant"));
const LapasPoolBarRestaurant = lazy(() => import("./pages/LapasPoolBarRestaurant"));
const BesameMuchoRestaurant = lazy(() => import("./pages/BesameMuchoRestaurant"));
const CielitoLindoRestaurant = lazy(() => import("./pages/CielitoLindoRestaurant"));
const CostaRicaSustainability = lazy(() => import("./pages/CostaRicaSustainability"));
const AtacamaSustainability = lazy(() => import("./pages/AtacamaSustainability"));

const BocasRooms = lazy(() => import("./pages/BocasRooms"));
const BocasSustainability = lazy(() => import("./pages/BocasSustainability"));
const BocasGastronomy = lazy(() => import("./pages/BocasGastronomy"));
const GardensRooms = lazy(() => import("./pages/GardensRooms"));
// SpringsRooms deleted , Springs only has one room type (Springs Villa)
const HangaroaRooms = lazy(() => import("./pages/HangaroaRooms"));

/* ── Minimal loading fallback ── */
function PageLoader() {
  return (
    <div className="min-h-screen bg-[#f7f5f0] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[#3B2B26]/20 border-t-[#3B2B26]/60 rounded-full animate-spin" />
    </div>
  );
}

/** Blog-specific loader shown when navigating to /blog/* or /journal/:slug */
function BlogLoader() {
  return <BlogLoadingSkeleton />;
}

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

/* Pages where the floating chat widget should be hidden (DM simulators have their own chat) */
// ARCHIVED: Sharalynn paths removed from HIDE_WIDGET_PATHS
const HIDE_WIDGET_PATHS: string[] = ["/blog/family-bucket-list-nayara", "/blog/three-kitchens-one-rainforest", "/blog/in-house-activities-three-hotels-infinite-experiences", "/sofia", "/sylvia", "/ocean-habitat-restoration", "/newsletter", "/newsletter/april", "/newsletter/may", "/newsletter/june"];

function Router() {
  const [location] = useLocation();
  const hideWidget = HIDE_WIDGET_PATHS.includes(location) || location.startsWith("/sylvia/") || location.startsWith("/sofia/");
  const isBlogRoute = location.startsWith("/blog/") || location.startsWith("/journal/");
  const fallback = isBlogRoute ? <BlogLoader /> : <PageLoader />;

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Suspense fallback={fallback} key={location + "-suspense"}>
          <PageTransition routeKey={location}>
            <Switch>
          <Route path="/" component={Home} />
          <Route path="/alto-atacama" component={AltoAtacama} />
          <Route path="/alto-atacama/rooms" component={AtacamaRooms} />
          <Route path="/alto-atacama/rooms/catarpe" component={Catarpe} />
          <Route path="/alto-atacama/rooms/quitor" component={Quitor} />
          <Route path="/alto-atacama/rooms/suite-tilo" component={SuiteTilo} />

          <Route path="/alto-atacama/experiences">{() => <CostaRicaExperiences propertySlug="alto-atacama" />}</Route>
          <Route path="/alto-atacama/wellness" component={AtacamaWellness} />
          <Route path="/alto-atacama/gastronomy" component={AtacamaGastronomy} />
          <Route path="/alto-atacama/sustainability">{() => <CostaRicaSustainability propertySlug="alto-atacama" />}</Route>
          <Route path="/alto-atacama/stargazing" component={Stargazing} />
          {/* Costa Rica is now a dropdown menu only, not a page */}
          <Route path="/curated-excursions" component={CuratedExcursions} />
          <Route path="/explore-arenal" component={ExploreArenal} />

          <Route path="/family-expeditions" component={FamilyExpeditions} />
          <Route path="/romance" component={RainforestRomance} />
          <Route path="/tented-camp" component={TentedCamp} />
          <Route path="/tented-camp/rooms/nayara-tent" component={NayaraTent} />
          <Route path="/tented-camp/rooms/family-tent" component={FamilyTent} />
          <Route path="/tented-camp/rooms/residence" component={TentedResidencePage} />
          <Route path="/tented-camp/rooms/grand-tent" component={GrandTent} />
          <Route path="/tented-camp/wellness">{() => <CostaRicaWellness propertySlug="tented-camp" />}</Route>
          <Route path="/tented-camp/sustainability">{() => <CostaRicaSustainability propertySlug="tented-camp" />}</Route>
          <Route path="/tented-camp/gastronomy/ayla" component={AylaRestaurant} />
          <Route path="/tented-camp/gastronomy/henrys-bar" component={HenrysBarRestaurant} />
          <Route path="/tented-camp/gastronomy/lapas-pool-bar" component={LapasPoolBarRestaurant} />
          <Route path="/tented-camp/gastronomy">{() => <CostaRicaGastronomy propertySlug="tented-camp" />}</Route>
          <Route path="/tented-camp-sustainability">{() => <CostaRicaSustainability key="tented-camp-sloth-v2" propertySlug="tented-camp" />}</Route>
          <Route path="/tented-experiences" component={TentedExperiences} />
          <Route path="/gardens" component={Gardens} />
          {/* ARCHIVED ROUTE: /gardens/rooms - Component file still exists */}
          <Route path="/gardens/rooms/arenal-pool-casita" component={ArenalPoolCasita} />
          <Route path="/gardens/rooms/rainforest-pool-villa" component={RainforestPoolVilla} />
          <Route path="/gardens/wellness">{() => <CostaRicaWellness propertySlug="gardens" />}</Route>
          <Route path="/gardens/sustainability">{() => <CostaRicaSustainability propertySlug="gardens" />}</Route>
          <Route path="/gardens/gastronomy/lylas-gelato" component={LaylasRestaurant} />
          <Route path="/gardens/gastronomy/asia-luna" component={AsiaLunaRestaurant} />
          <Route path="/gardens/gastronomy/la-terraza" component={LaTerrazaRestaurant} />
          <Route path="/gardens/gastronomy/nostalgia" component={NostalgiaRestaurant} />
          <Route path="/gardens/gastronomy">{() => <CostaRicaGastronomy propertySlug="gardens" />}</Route>
          <Route path="/springs" component={Springs} />
          {/* ARCHIVED ROUTE: /springs/rooms - Component file still exists */}
          <Route path="/springs/rooms/springs-villa" component={SpringsVilla} />
          <Route path="/springs/wellness">{() => <CostaRicaWellness propertySlug="springs" />}</Route>
          <Route path="/springs/sustainability">{() => <CostaRicaSustainability propertySlug="springs" />}</Route>
          <Route path="/springs/gastronomy/mis-amores" component={MisAmoresRestaurant} />
          <Route path="/springs/gastronomy/mi-cafecito" component={MiCafecitoRestaurant} />
          <Route path="/springs/gastronomy/amor-loco" component={AmorLocoRestaurant} />
          <Route path="/springs/gastronomy/besame-mucho" component={BesameMuchoRestaurant} />
          <Route path="/springs/gastronomy/cielito-lindo" component={CielitoLindoRestaurant} />
          <Route path="/springs/gastronomy">{() => <CostaRicaGastronomy propertySlug="springs" />}</Route>
          <Route path="/hangaroa" component={Hangaroa} />
          <Route path="/hangaroa/rooms" component={Hangaroa} />
          <Route path="/hangaroa/rooms/kainga" component={Hangaroa} />
          <Route path="/hangaroa/rooms/maunga" component={Hangaroa} />

          <Route path="/hangaroa/experiences" component={Hangaroa} />
          <Route path="/hangaroa/wellness" component={Hangaroa} />
          <Route path="/hangaroa/gastronomy" component={HangaroaGastronomy} />
          <Route path="/hangaroa/sustainability" component={Hangaroa} />
          <Route path="/bocas-del-toro" component={BocasDelToro} />
          <Route path="/bocas-del-toro/rooms" component={BocasRooms} />
          <Route path="/bocas-del-toro/rooms/overwater-villa" component={OverwaterVilla} />
          <Route path="/bocas-del-toro/rooms/deluxe-overwater-villa" component={DeluxeOverwaterVilla} />
          <Route path="/bocas-del-toro/rooms/treehouse" component={Treehouse} />
          <Route path="/bocas-del-toro/rooms/premium-villa" component={PremiumVilla} />

          <Route path="/bocas-del-toro/experiences">{() => <CostaRicaExperiences propertySlug="bocas-del-toro" />}</Route>
          <Route path="/bocas-del-toro/wellness">{() => <CostaRicaWellness propertySlug="bocas-del-toro" />}</Route>
          <Route path="/bocas-del-toro/gastronomy" component={BocasGastronomy} />
          <Route path="/bocas-del-toro/sustainability" component={BocasSustainability} />
          <Route path="/ocean-habitat-restoration" component={OceanHabitatRestoration} />
          <Route path="/journal/:slug" component={DynamicBlogPost} />
          <Route path="/journal" component={Journal} />
          <Route path="/faq" component={FAQ} />
          <Route path="/awards" component={AwardsAndPress} />
          <Route path="/sustainability" component={Sustainability} />
          <Route path="/experiences" component={Experiences} />
          <Route path="/wellness" component={Wellness} />
          <Route path="/costa-rica-wellness" component={CostaRicaWellnessBrand} />
          
          {/* ARCHIVED REDIRECT: /press - Previously redirected to /awards */}
          <Route path="/gastronomy" component={Gastronomy} />
          <Route path="/newsletter" component={NewsletterJune} />
          <Route path="/newsletter/april" component={NewsletterApril} />
          <Route path="/newsletter/may" component={NewsletterMay} />
          <Route path="/newsletter/june" component={NewsletterJune} />

          <Route path="/blog/green-globe-certification" component={GreenGlobeBlog} />
          <Route path="/blog/womens-empowerment" component={WomensEmpowermentBlog} />
          <Route path="/blog/birdwatching" component={BirdwatchingBlog} />
          <Route path="/blog/michelin-keys" component={MichelinKeysBlog} />
          <Route path="/blog/atacama-wildlife" component={AtacamaWildlifeBlog} />
          <Route path="/blog/arenal-bocas-wildlife" component={ArenalBocasWildlifeBlog} />
          <Route path="/blog/easter-island-outdoors" component={EasterIslandOutdoorsBlog} />
          <Route path="/blog/maya-rapa-nui">{() => { window.location.replace("/blog/maya-rapa-nui-climate"); return null; }}</Route>
          <Route path="/blog/atacama-oasis" component={AtacamaOasisBlog} />
          <Route path="/blog/travel-trends" component={TravelTrendsBlog} />
          <Route path="/blog/wellness-by-colors" component={WellnessByColorsBlog} />
          <Route path="/blog/hot-springs" component={HotSpringsBlog} />
          <Route path="/blog/hangaroa-regeneration" component={HangaroaRegenerationBlog} />
          <Route path="/blog/bocas-conde-nast" component={BocasCondeNastAwardBlog} />
          <Route path="/blog/atacama-mars" component={AtacamaMarsEarthBlog} />
          <Route path="/blog/nayara-story" component={NayaraStoryBlog} />
          <Route path="/blog/nayara-by-night" component={NayaraByNightBlog} />
          <Route path="/blog/caribbean-coral-reef">{() => { window.location.replace("/bocas-del-toro/sustainability"); return null; }}</Route>
          <Route path="/blog/maya-rapa-nui-climate" component={MayaRapaNuiClimateBlog} />
          <Route path="/blog/experiential-travel-nayara-2026" component={ExperientialTravelBlog} />
          <Route path="/blog/family-bucket-list-nayara" component={FamilyBucketListBlog} />
          <Route path="/blog/three-kitchens-one-rainforest" component={GastronomyBlog} />
          <Route path="/blog/in-house-activities-three-hotels-infinite-experiences" component={InHouseActivitiesBlog} />

          <Route path="/blog/sunlit-sustainability" component={SunlitSustainabilityBlog} />
          <Route path="/blog/solo-travel-female" component={SoloTravelFemaleBlog} />
          <Route path="/blog/arenal-timeless-wonder" component={ArenalTimelessWonderBlog} />
          <Route path="/blog/pura-vida" component={PuraVidaBlog} />
          {/* /blog/toucans-arenal and /blog/treehouse-dreams removed — content merged into birdwatching blog */}
          <Route path="/blog/stargazing-atacama" component={StargazingAtacamaBlog} />
          <Route path="/blog/edge-habitability" component={EdgeHabitabilityBlog} />
          <Route path="/blog/chile-gastronomy" component={ChileGastronomyBlog} />
          <Route path="/blog/tapati-festival" component={TapatiFestivalBlog} />
          <Route path="/blog/rooted-in-community" component={CommunityBlog} />
          <Route path="/blog/how-we-built-a-hotel-on-an-island" component={BocasOperationsBlog} />
          <Route path="/blog/romance-at-nayara-springs-and-bocas-del-toro" component={RomanceBlog} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/gallery" component={Gallery} />

          {/* ── Internal / Private pages ── */}
          {/* ARCHIVED ROUTES: /internal-brandbook and /internal-henry - Component files still exist */}
          <Route path="/sofia" component={Lexi} />
          <Route path="/brand-book" component={BrandBook} />
          <Route path="/architecture" component={Architecture} />
          <Route path="/sylvia" component={Sylvia} />
          <Route path="/sylvia/your-brain" component={SylviaComingSoon} />
          <Route path="/sylvia/blog" component={SylviaComingSoon} />
          <Route path="/sylvia/faq" component={SylviaComingSoon} />
          <Route path="/sylvia/my-story" component={SylviaComingSoon} />
          <Route path="/sylvia/trauma" component={SylviaComingSoon} />
          <Route path="/sylvia/addiction" component={SylviaComingSoon} />
          <Route path="/sylvia/mood-disorders" component={SylviaComingSoon} />
          <Route path="/sylvia/triggers" component={SylviaComingSoon} />
          <Route path="/sylvia/bipolar" component={SylviaComingSoon} />
          {/* ARCHIVED ROUTE: /sharalynn - Component file still exists at ./pages/Sharalynn.tsx */}

          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
            </Switch>
          </PageTransition>
        </Suspense>
      </AnimatePresence>
      {!hideWidget && (
        <Suspense fallback={null}>
          <ConciergeChatWidget />
        </Suspense>
      )}
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
