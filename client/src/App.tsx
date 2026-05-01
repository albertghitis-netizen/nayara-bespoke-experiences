import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect, lazy, Suspense } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./index.css";

/* ── Eagerly loaded (homepage) ── */
import Home from "./pages/Home";

/* ── Lazy-loaded pages ── */
const AltoAtacama = lazy(() => import("./pages/AltoAtacama"));
const CostaRica = lazy(() => import("./pages/CostaRica"));
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

const Gastronomy = lazy(() => import("./pages/Gastronomy"));
const TentedCamp = lazy(() => import("./pages/TentedCamp"));
const TentedExperiences = lazy(() => import("./pages/TentedExperiences"));
const Gardens = lazy(() => import("./pages/Gardens"));
const Springs = lazy(() => import("./pages/Springs"));
const ConciergeChatWidget = lazy(() => import("./components/ConciergeChatWidget"));
const Newsletter = lazy(() => import("./pages/Newsletter"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const DynamicBlogPost = lazy(() => import("./pages/DynamicBlogPost"));
const PuraVida = lazy(() => import("./pages/PuraVida"));
const PuraVidaBlog = lazy(() => import("./pages/PuraVidaBlog"));
const GreenGlobeBlog = lazy(() => import("./pages/GreenGlobeBlog"));
const WomensEmpowermentBlog = lazy(() => import("./pages/WomensEmpowermentBlog"));
const ReforestationWildlifeBlog = lazy(() => import("./pages/ReforestationWildlifeBlog"));
const BirdwatchingBlog = lazy(() => import("./pages/BirdwatchingBlog"));
// const BrandBook = lazy(() => import("./pages/BrandBook")); // ARCHIVED: Can be restored if needed
// const HenryStandalone = lazy(() => import("./pages/HenryStandalone")); // ARCHIVED: Can be restored if needed
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Gallery = lazy(() => import("./pages/Gallery"));
// const Sharalynn = lazy(() => import("./pages/Sharalynn")); // ARCHIVED: Can be restored if needed
const FloorPlanTest = lazy(() => import("./pages/FloorPlanTest"));

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

/* ── Individual restaurant pages ── */
const Ayla = lazy(() => import("./pages/restaurants/Ayla"));
const HenrysBar = lazy(() => import("./pages/restaurants/HenrysBar"));
const MisAmores = lazy(() => import("./pages/restaurants/MisAmores"));
const MiCafecito = lazy(() => import("./pages/restaurants/MiCafecito"));
const AmorLoco = lazy(() => import("./pages/restaurants/AmorLoco"));
const LylasGelato = lazy(() => import("./pages/restaurants/LylasGelato"));
const AsiaLuna = lazy(() => import("./pages/restaurants/AsiaLuna"));
const LaTerraza = lazy(() => import("./pages/restaurants/LaTerraza"));
const Nostalgia = lazy(() => import("./pages/restaurants/Nostalgia"));

/* ── Shared Costa Rica deep pages (palette-swapped per property) ── */
const CostaRicaExperiences = lazy(() => import("./pages/CostaRicaExperiences"));
const CostaRicaWellness = lazy(() => import("./pages/CostaRicaWellness"));
const CostaRicaGastronomy = lazy(() => import("./pages/CostaRicaGastronomy"));
const ArenalGastronomy = lazy(() => import("./pages/ArenalGastronomy"));
const CostaRicaSustainability = lazy(() => import("./pages/CostaRicaSustainability"));
const AtacamaSustainability = lazy(() => import("./pages/AtacamaSustainability"));

const BocasRooms = lazy(() => import("./pages/BocasRooms"));
const GardensRooms = lazy(() => import("./pages/GardensRooms"));
// SpringsRooms deleted — Springs only has one room type (Springs Villa)
const HangaroaRooms = lazy(() => import("./pages/HangaroaRooms"));

/* ── Minimal loading fallback ── */
function PageLoader() {
  return (
    <div className="min-h-screen bg-[#f7f5f0] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[#3B2B26]/20 border-t-[#3B2B26]/60 rounded-full animate-spin" />
    </div>
  );
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
const HIDE_WIDGET_PATHS: string[] = [];

function Router() {
  const [location] = useLocation();
  const hideWidget = HIDE_WIDGET_PATHS.includes(location);

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/alto-atacama" component={AltoAtacama} />
          <Route path="/alto-atacama/rooms" component={AtacamaRooms} />
          <Route path="/alto-atacama/experiences">{() => <CostaRicaExperiences propertySlug="alto-atacama" />}</Route>
          <Route path="/alto-atacama/wellness">{() => <CostaRicaWellness propertySlug="alto-atacama" />}</Route>
          <Route path="/alto-atacama/gastronomy">{() => <CostaRicaGastronomy propertySlug="alto-atacama" />}</Route>
          <Route path="/alto-atacama/sustainability">{() => <CostaRicaSustainability propertySlug="alto-atacama" />}</Route>
          <Route path="/costa-rica" component={CostaRica} />
          <Route path="/curated-excursions" component={CuratedExcursions} />
          <Route path="/experiential-arenal">{() => { window.location.replace("/curated-excursions"); return null; }}</Route>
          <Route path="/pura-vida" component={PuraVida} />
          <Route path="/family-expeditions" component={FamilyExpeditions} />
          <Route path="/rainforest-romance" component={RainforestRomance} />
          <Route path="/gastronomy-arenal" component={ArenalGastronomy} />
          <Route path="/tented-camp" component={TentedCamp} />
          <Route path="/tented-camp/rooms" component={TentedRooms} />
          <Route path="/tented-camp/rooms/nayara-tent" component={NayaraTent} />
          <Route path="/tented-camp/rooms/family-tent" component={FamilyTent} />
          <Route path="/tented-camp/rooms/residence" component={TentedResidencePage} />
          <Route path="/tented-camp/rooms/grand-tent" component={GrandTent} />
          <Route path="/tented-camp/experiences">{() => <CostaRicaExperiences propertySlug="tented-camp" />}</Route>
          <Route path="/tented-camp/wellness">{() => <CostaRicaWellness propertySlug="tented-camp" />}</Route>
          <Route path="/tented-camp/gastronomy/ayla" component={Ayla} />
          <Route path="/tented-camp/gastronomy/henrys-bar" component={HenrysBar} />
          <Route path="/tented-camp/gastronomy">{() => <CostaRicaGastronomy propertySlug="tented-camp" />}</Route>
          <Route path="/tented-camp/sustainability">{() => <CostaRicaSustainability propertySlug="tented-camp" />}</Route>
          <Route path="/tented-experiences" component={TentedExperiences} />
          <Route path="/gardens" component={Gardens} />
          {/* ARCHIVED ROUTE: /gardens/rooms - Component file still exists */}
          <Route path="/gardens/rooms/arenal-pool-casita" component={ArenalPoolCasita} />
          <Route path="/gardens/rooms/rainforest-pool-villa" component={RainforestPoolVilla} />
          <Route path="/gardens/experiences">{() => <CostaRicaExperiences propertySlug="gardens" />}</Route>
          <Route path="/gardens/wellness">{() => <CostaRicaWellness propertySlug="gardens" />}</Route>
          <Route path="/gardens/gastronomy/lylas-gelato" component={LylasGelato} />
          <Route path="/gardens/gastronomy/asia-luna" component={AsiaLuna} />
          <Route path="/gardens/gastronomy/la-terraza" component={LaTerraza} />
          <Route path="/gardens/gastronomy/nostalgia" component={Nostalgia} />
          <Route path="/gardens/gastronomy">{() => <CostaRicaGastronomy propertySlug="gardens" />}</Route>
          <Route path="/gardens/sustainability">{() => <CostaRicaSustainability propertySlug="gardens" />}</Route>
          <Route path="/springs" component={Springs} />
          {/* ARCHIVED ROUTE: /springs/rooms - Component file still exists */}
          <Route path="/springs/rooms/springs-villa" component={SpringsVilla} />
          <Route path="/springs/experiences">{() => <CostaRicaExperiences propertySlug="springs" />}</Route>
          <Route path="/springs/wellness">{() => <CostaRicaWellness propertySlug="springs" />}</Route>
          <Route path="/springs/gastronomy/mis-amores" component={MisAmores} />
          <Route path="/springs/gastronomy/mi-cafecito" component={MiCafecito} />
          <Route path="/springs/gastronomy/amor-loco" component={AmorLoco} />
          <Route path="/springs/gastronomy">{() => <CostaRicaGastronomy propertySlug="springs" />}</Route>
          <Route path="/springs/sustainability">{() => <CostaRicaSustainability propertySlug="springs" />}</Route>
          <Route path="/hangaroa" component={Hangaroa} />
          <Route path="/hangaroa/rooms" component={HangaroaRooms} />
          <Route path="/hangaroa/experiences">{() => <CostaRicaExperiences propertySlug="hangaroa" />}</Route>
          <Route path="/hangaroa/wellness">{() => <CostaRicaWellness propertySlug="hangaroa" />}</Route>
          <Route path="/hangaroa/gastronomy">{() => <CostaRicaGastronomy propertySlug="hangaroa" />}</Route>
          <Route path="/hangaroa/sustainability">{() => <CostaRicaSustainability propertySlug="hangaroa" />}</Route>
          <Route path="/bocas-del-toro" component={BocasDelToro} />
          <Route path="/bocas-del-toro/rooms" component={BocasRooms} />
          <Route path="/bocas-del-toro/rooms/overwater-villa" component={OverwaterVilla} />
          <Route path="/bocas-del-toro/rooms/deluxe-overwater-villa" component={DeluxeOverwaterVilla} />
          <Route path="/bocas-del-toro/rooms/treehouse" component={Treehouse} />
          <Route path="/bocas-del-toro/experiences">{() => <CostaRicaExperiences propertySlug="bocas-del-toro" />}</Route>
          <Route path="/bocas-del-toro/wellness">{() => <CostaRicaWellness propertySlug="bocas-del-toro" />}</Route>
          <Route path="/bocas-del-toro/gastronomy">{() => <CostaRicaGastronomy propertySlug="bocas-del-toro" />}</Route>
          <Route path="/bocas-del-toro/sustainability">{() => <CostaRicaSustainability propertySlug="bocas-del-toro" />}</Route>
          <Route path="/journal" component={Journal} />
           {/* ARCHIVED REDIRECT: /faq - Previously redirected to /journal */}
          <Route path="/awards" component={AwardsAndPress} />
          <Route path="/sustainability" component={Sustainability} />
          <Route path="/experiences" component={Experiences} />
          <Route path="/wellness" component={Wellness} />
          
          {/* ARCHIVED REDIRECT: /press - Previously redirected to /awards */}
          <Route path="/gastronomy" component={Gastronomy} />
          {/* ARCHIVED REDIRECT: /faq - Previously redirected to /journal */}
          <Route path="/newsletter" component={Newsletter} />
          {/* ARCHIVED ROUTE: /journal/:slug - Component file still exists at ./pages/DynamicBlogPost.tsx */}
          <Route path="/blog/pura-vida" component={PuraVidaBlog} />
          <Route path="/blog/green-globe-certification" component={GreenGlobeBlog} />
          <Route path="/blog/womens-empowerment" component={WomensEmpowermentBlog} />
          <Route path="/blog/reforestation-wildlife" component={ReforestationWildlifeBlog} />
          <Route path="/blog/birdwatching" component={BirdwatchingBlog} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/gallery" component={Gallery} />

          {/* ── Internal / Private pages ── */}
          {/* ARCHIVED ROUTES: /internal-brandbook and /internal-henry - Component files still exist */}
          <Route path="/test-floorplan" component={FloorPlanTest} />
          {/* ARCHIVED ROUTE: /sharalynn - Component file still exists at ./pages/Sharalynn.tsx */}

          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
        {!hideWidget && (
          <Suspense fallback={null}>
            <ConciergeChatWidget />
          </Suspense>
        )}
      </Suspense>
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
