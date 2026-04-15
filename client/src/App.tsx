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
const Podcast = lazy(() => import("./pages/Podcast"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const PuraVidaBlog = lazy(() => import("./pages/PuraVidaBlog"));
const GreenGlobeBlog = lazy(() => import("./pages/GreenGlobeBlog"));
const NewProjects = lazy(() => import("./pages/NewProjects"));
const HenryStandalone = lazy(() => import("./pages/HenryStandalone"));
const NayaraByNight = lazy(() => import("./pages/NayaraByNight"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const BrandBook = lazy(() => import("./pages/BrandBook"));
const Gallery = lazy(() => import("./pages/Gallery"));
const AtacamaRooms = lazy(() => import("./pages/AtacamaRooms"));
/* Atacama/Bocas/Hangaroa deep pages now use the universal shared components */
const TentedRooms = lazy(() => import("./pages/TentedRooms"));
/* TentedCamp deep pages now use the universal shared components */

/* ── Shared Costa Rica deep pages (palette-swapped per property) ── */
const CostaRicaExperiences = lazy(() => import("./pages/CostaRicaExperiences"));
const CostaRicaWellness = lazy(() => import("./pages/CostaRicaWellness"));
const CostaRicaGastronomy = lazy(() => import("./pages/CostaRicaGastronomy"));
const CostaRicaSustainability = lazy(() => import("./pages/CostaRicaSustainability"));
const BocasRooms = lazy(() => import("./pages/BocasRooms"));
const GardensRooms = lazy(() => import("./pages/GardensRooms"));
const SpringsRooms = lazy(() => import("./pages/SpringsRooms"));
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
          <Route path="/alto-atacama/experiences">{() => <CostaRicaExperiences propertySlug="alto-atacama" />}</Route>
          <Route path="/alto-atacama/wellness">{() => <CostaRicaWellness propertySlug="alto-atacama" />}</Route>
          <Route path="/alto-atacama/gastronomy">{() => <CostaRicaGastronomy propertySlug="alto-atacama" />}</Route>
          <Route path="/alto-atacama/sustainability">{() => <CostaRicaSustainability propertySlug="alto-atacama" />}</Route>
          <Route path="/arenal" component={CostaRica} />
          <Route path="/tented-camp" component={TentedCamp} />
          <Route path="/tented-camp/rooms" component={TentedRooms} />
          <Route path="/tented-camp/experiences">{() => <CostaRicaExperiences propertySlug="tented-camp" />}</Route>
          <Route path="/tented-camp/wellness">{() => <CostaRicaWellness propertySlug="tented-camp" />}</Route>
          <Route path="/tented-camp/gastronomy">{() => <CostaRicaGastronomy propertySlug="tented-camp" />}</Route>
          <Route path="/tented-camp/sustainability">{() => <CostaRicaSustainability propertySlug="tented-camp" />}</Route>
          <Route path="/tented-experiences" component={TentedExperiences} />
          <Route path="/gardens" component={Gardens} />
          <Route path="/gardens/rooms" component={GardensRooms} />
          <Route path="/gardens/experiences">{() => <CostaRicaExperiences propertySlug="gardens" />}</Route>
          <Route path="/gardens/wellness">{() => <CostaRicaWellness propertySlug="gardens" />}</Route>
          <Route path="/gardens/gastronomy">{() => <CostaRicaGastronomy propertySlug="gardens" />}</Route>
          <Route path="/gardens/sustainability">{() => <CostaRicaSustainability propertySlug="gardens" />}</Route>
          <Route path="/springs" component={Springs} />
          <Route path="/springs/rooms" component={SpringsRooms} />
          <Route path="/springs/experiences">{() => <CostaRicaExperiences propertySlug="springs" />}</Route>
          <Route path="/springs/wellness">{() => <CostaRicaWellness propertySlug="springs" />}</Route>
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
          <Route path="/bocas-del-toro/experiences">{() => <CostaRicaExperiences propertySlug="bocas-del-toro" />}</Route>
          <Route path="/bocas-del-toro/wellness">{() => <CostaRicaWellness propertySlug="bocas-del-toro" />}</Route>
          <Route path="/bocas-del-toro/gastronomy">{() => <CostaRicaGastronomy propertySlug="bocas-del-toro" />}</Route>
          <Route path="/bocas-del-toro/sustainability">{() => <CostaRicaSustainability propertySlug="bocas-del-toro" />}</Route>
          <Route path="/journal" component={Journal} />
          <Route path="/blog">{() => { window.location.replace("/journal"); return null; }}</Route>
          <Route path="/podcast" component={Podcast} />
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
          {/* ── Internal / Private pages ── */}
          <Route path="/internal/new-projects" component={NewProjects} />
          <Route path="/internal/henry" component={HenryStandalone} />
          <Route path="/by-night" component={NayaraByNight} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/internal/brand-book" component={BrandBook} />
          {/* Legacy redirects for internal pages */}
          <Route path="/new-projects">{() => { window.location.replace("/internal/new-projects"); return null; }}</Route>
          <Route path="/henry">{() => { window.location.replace("/internal/henry"); return null; }}</Route>
          <Route path="/brand-book">{() => { window.location.replace("/internal/brand-book"); return null; }}</Route>
          <Route path="/gallery" component={Gallery} />

          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
        {!hideWidget && (
          <Suspense fallback={null}>
            <ConciergeChatWidget palette={location === "/by-night" ? { dark: "#000000", pillBg: "rgba(0,0,0,0.7)" } : undefined} />
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
