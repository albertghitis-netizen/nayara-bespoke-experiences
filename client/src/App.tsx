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
const Story = lazy(() => import("./pages/Story"));
const Rooms = lazy(() => import("./pages/Rooms"));
const Gastronomy = lazy(() => import("./pages/Gastronomy"));
const TentedCamp = lazy(() => import("./pages/TentedCamp"));
const TentedExperiences = lazy(() => import("./pages/TentedExperiences"));
const Gardens = lazy(() => import("./pages/Gardens"));
const Springs = lazy(() => import("./pages/Springs"));
const ConciergeChatWidget = lazy(() => import("./components/ConciergeChatWidget"));
const ChatEmbed = lazy(() => import("./pages/ChatEmbed"));
const Newsletter = lazy(() => import("./pages/Newsletter"));
const HangaroaSuperSale = lazy(() => import("./pages/HangaroaSuperSale"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const PuraVidaBlog = lazy(() => import("./pages/PuraVidaBlog"));
const GreenGlobeBlog = lazy(() => import("./pages/GreenGlobeBlog"));
const NewProjects = lazy(() => import("./pages/NewProjects"));
const DachLanding = lazy(() => import("./pages/DachLanding"));
const CgLanding = lazy(() => import("./pages/CgLanding"));
const HenryStandalone = lazy(() => import("./pages/HenryStandalone"));
const HangaroaNewsletter = lazy(() => import("./pages/HangaroaNewsletter"));
const NayaraByNight = lazy(() => import("./pages/NayaraByNight"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

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
const HIDE_WIDGET_PATHS = ["/chat-embed", "/dach", "/cg", "/henry", "/hangaroa-newsletter"];

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
          <Route path="/arenal" component={CostaRica} />
          <Route path="/tented-camp" component={TentedCamp} />
          <Route path="/tented-experiences" component={TentedExperiences} />
          <Route path="/gardens" component={Gardens} />
          <Route path="/springs" component={Springs} />
          <Route path="/hangaroa" component={Hangaroa} />
          <Route path="/bocas-del-toro" component={BocasDelToro} />
          <Route path="/journal" component={Journal} />
          <Route path="/blog">{() => { window.location.replace("/journal"); return null; }}</Route>
          <Route path="/podcast">{() => { window.location.replace("/journal"); return null; }}</Route>
          <Route path="/awards" component={AwardsAndPress} />
          <Route path="/sustainability" component={Sustainability} />
          <Route path="/experiences" component={Experiences} />
          <Route path="/wellness" component={Wellness} />
          <Route path="/tented-wellness">{() => { window.location.replace("/wellness"); return null; }}</Route>
          <Route path="/press">{() => { window.location.replace("/awards"); return null; }}</Route>
          <Route path="/story" component={Story} />
          <Route path="/rooms" component={Rooms} />
          <Route path="/gastronomy" component={Gastronomy} />
          <Route path="/faq">{() => { window.location.replace("/journal"); return null; }}</Route>
          <Route path="/chat-embed" component={ChatEmbed} />
          <Route path="/newsletter" component={Newsletter} />
          <Route path="/hangaroa-super-sale" component={HangaroaSuperSale} />
          <Route path="/blog/pura-vida" component={PuraVidaBlog} />
          <Route path="/blog/green-globe-s-certification" component={GreenGlobeBlog} />
          <Route path="/new-projects" component={NewProjects} />
          <Route path="/dach" component={DachLanding} />
          <Route path="/cg" component={CgLanding} />
          <Route path="/henry" component={HenryStandalone} />
          <Route path="/hangaroa-newsletter" component={HangaroaNewsletter} />
          <Route path="/by-night" component={NayaraByNight} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />

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
