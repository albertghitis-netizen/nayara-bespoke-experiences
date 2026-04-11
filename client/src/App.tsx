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
const Hangaroa = lazy(() => import("./pages/Hangaroa"));
const BocasDelToro = lazy(() => import("./pages/BocasDelToro"));
const Journal = lazy(() => import("./pages/Journal"));
const AwardsAndPress = lazy(() => import("./pages/AwardsAndPress"));
const Sustainability = lazy(() => import("./pages/Sustainability"));
const Experiences = lazy(() => import("./pages/Experiences"));
const Wellness = lazy(() => import("./pages/Wellness"));

const Gastronomy = lazy(() => import("./pages/Gastronomy"));
const TentedCamp = lazy(() => import("./pages/TentedCamp"));
const TentedExperiences = lazy(() => import("./pages/TentedExperiences"));
const Gardens = lazy(() => import("./pages/Gardens"));
const Springs = lazy(() => import("./pages/Springs"));
const ConciergeChatWidget = lazy(() => import("./components/ConciergeChatWidget"));
const Newsletter = lazy(() => import("./pages/Newsletter"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const PuraVidaBlog = lazy(() => import("./pages/PuraVidaBlog"));
const GreenGlobeBlog = lazy(() => import("./pages/GreenGlobeBlog"));
const NewProjects = lazy(() => import("./pages/NewProjects"));
const HenryStandalone = lazy(() => import("./pages/HenryStandalone"));
const NayaraByNight = lazy(() => import("./pages/NayaraByNight"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const BrandBook = lazy(() => import("./pages/BrandBook"));
const AtacamaRooms = lazy(() => import("./pages/AtacamaRooms"));
const AtacamaExperiences = lazy(() => import("./pages/AtacamaExperiences"));
const AtacamaWellness = lazy(() => import("./pages/AtacamaWellness"));
const AtacamaGastronomy = lazy(() => import("./pages/AtacamaGastronomy"));
const AtacamaSustainability = lazy(() => import("./pages/AtacamaSustainability"));
const TentedRooms = lazy(() => import("./pages/TentedRooms"));
const TentedCampExperiences = lazy(() => import("./pages/TentedCampExperiences"));
const TentedCampWellness = lazy(() => import("./pages/TentedCampWellness"));
const TentedCampGastronomy = lazy(() => import("./pages/TentedCampGastronomy"));
const TentedCampSustainability = lazy(() => import("./pages/TentedCampSustainability"));
const BocasRooms = lazy(() => import("./pages/BocasRooms"));
const BocasExperiences = lazy(() => import("./pages/BocasExperiences"));
const BocasWellness = lazy(() => import("./pages/BocasWellness"));
const BocasGastronomy = lazy(() => import("./pages/BocasGastronomy"));
const BocasSustainability = lazy(() => import("./pages/BocasSustainability"));
const GardensRooms = lazy(() => import("./pages/GardensRooms"));
const GardensExperiences = lazy(() => import("./pages/GardensExperiences"));
const GardensWellness = lazy(() => import("./pages/GardensWellness"));
const GardensGastronomy = lazy(() => import("./pages/GardensGastronomy"));
const GardensSustainability = lazy(() => import("./pages/GardensSustainability"));
const SpringsRooms = lazy(() => import("./pages/SpringsRooms"));
const SpringsExperiences = lazy(() => import("./pages/SpringsExperiences"));
const SpringsWellness = lazy(() => import("./pages/SpringsWellness"));
const SpringsGastronomy = lazy(() => import("./pages/SpringsGastronomy"));
const SpringsSustainability = lazy(() => import("./pages/SpringsSustainability"));
const HangaroaRooms = lazy(() => import("./pages/HangaroaRooms"));
const HangaroaExperiences = lazy(() => import("./pages/HangaroaExperiences"));
const HangaroaWellness = lazy(() => import("./pages/HangaroaWellness"));
const HangaroaGastronomy = lazy(() => import("./pages/HangaroaGastronomy"));
const HangaroaSustainability = lazy(() => import("./pages/HangaroaSustainability"));

/* ── Minimal loading fallback ── */
function PageLoader() {
  return (
    <div className="min-h-screen bg-[#f7f5f0] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[#3a2a1a]/20 border-t-[#3a2a1a]/60 rounded-full animate-spin" />
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
const HIDE_WIDGET_PATHS = ["/henry"];

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
          <Route path="/alto-atacama/experiences" component={AtacamaExperiences} />
          <Route path="/alto-atacama/wellness" component={AtacamaWellness} />
          <Route path="/alto-atacama/gastronomy" component={AtacamaGastronomy} />
          <Route path="/alto-atacama/sustainability" component={AtacamaSustainability} />
          <Route path="/arenal" component={CostaRica} />
          <Route path="/tented-camp" component={TentedCamp} />
          <Route path="/tented-camp/rooms" component={TentedRooms} />
          <Route path="/tented-camp/experiences" component={TentedCampExperiences} />
          <Route path="/tented-camp/wellness" component={TentedCampWellness} />
          <Route path="/tented-camp/gastronomy" component={TentedCampGastronomy} />
          <Route path="/tented-camp/sustainability" component={TentedCampSustainability} />
          <Route path="/tented-experiences" component={TentedExperiences} />
          <Route path="/gardens" component={Gardens} />
          <Route path="/gardens/rooms" component={GardensRooms} />
          <Route path="/gardens/experiences" component={GardensExperiences} />
          <Route path="/gardens/wellness" component={GardensWellness} />
          <Route path="/gardens/gastronomy" component={GardensGastronomy} />
          <Route path="/gardens/sustainability" component={GardensSustainability} />
          <Route path="/springs" component={Springs} />
          <Route path="/springs/rooms" component={SpringsRooms} />
          <Route path="/springs/experiences" component={SpringsExperiences} />
          <Route path="/springs/wellness" component={SpringsWellness} />
          <Route path="/springs/gastronomy" component={SpringsGastronomy} />
          <Route path="/springs/sustainability" component={SpringsSustainability} />
          <Route path="/hangaroa" component={Hangaroa} />
          <Route path="/hangaroa/rooms" component={HangaroaRooms} />
          <Route path="/hangaroa/experiences" component={HangaroaExperiences} />
          <Route path="/hangaroa/wellness" component={HangaroaWellness} />
          <Route path="/hangaroa/gastronomy" component={HangaroaGastronomy} />
          <Route path="/hangaroa/sustainability" component={HangaroaSustainability} />
          <Route path="/bocas-del-toro" component={BocasDelToro} />
          <Route path="/bocas-del-toro/rooms" component={BocasRooms} />
          <Route path="/bocas-del-toro/experiences" component={BocasExperiences} />
          <Route path="/bocas-del-toro/wellness" component={BocasWellness} />
          <Route path="/bocas-del-toro/gastronomy" component={BocasGastronomy} />
          <Route path="/bocas-del-toro/sustainability" component={BocasSustainability} />
          <Route path="/journal" component={Journal} />
          <Route path="/blog">{() => { window.location.replace("/journal"); return null; }}</Route>
          <Route path="/podcast">{() => { window.location.replace("/journal"); return null; }}</Route>
          <Route path="/awards" component={AwardsAndPress} />
          <Route path="/sustainability" component={Sustainability} />
          <Route path="/experiences" component={Experiences} />
          <Route path="/wellness" component={Wellness} />
          <Route path="/tented-wellness">{() => { window.location.replace("/wellness"); return null; }}</Route>
          <Route path="/press">{() => { window.location.replace("/awards"); return null; }}</Route>
          <Route path="/story">{() => { window.location.replace("/"); return null; }}</Route>
          <Route path="/gastronomy" component={Gastronomy} />
          <Route path="/faq">{() => { window.location.replace("/journal"); return null; }}</Route>
          <Route path="/newsletter" component={Newsletter} />
          <Route path="/blog/pura-vida" component={PuraVidaBlog} />
          <Route path="/blog/green-globe-s-certification" component={GreenGlobeBlog} />
          <Route path="/new-projects" component={NewProjects} />
          <Route path="/henry" component={HenryStandalone} />
          <Route path="/by-night" component={NayaraByNight} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/brand-book" component={BrandBook} />

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
