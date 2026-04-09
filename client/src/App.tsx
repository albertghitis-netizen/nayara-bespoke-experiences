import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import AltoAtacama from "./pages/AltoAtacama";
import CostaRica from "./pages/CostaRica";
import Hangaroa from "./pages/Hangaroa";
import BocasDelToro from "./pages/BocasDelToro";
import Journal from "./pages/Journal";
import AwardsAndPress from "./pages/AwardsAndPress";
import Sustainability from "./pages/Sustainability";
import Experiences from "./pages/Experiences";
import Wellness from "./pages/Wellness";
import TentedWellness from "./pages/TentedWellness";

import Story from "./pages/Story";
import Rooms from "./pages/Rooms";
import Gastronomy from "./pages/Gastronomy";
import TentedCamp from "./pages/TentedCamp";
import TentedExperiences from "./pages/TentedExperiences";
import Gardens from "./pages/Gardens";
import Springs from "./pages/Springs";


import ConciergeChatWidget from "./components/ConciergeChatWidget";
import ChatEmbed from "./pages/ChatEmbed";

import Newsletter from "./pages/Newsletter";
import HangaroaSuperSale from "./pages/HangaroaSuperSale";
import BlogPost from "./pages/BlogPost";
import PuraVidaBlog from "./pages/PuraVidaBlog";
import GreenGlobeBlog from "./pages/GreenGlobeBlog";
import NewProjects from "./pages/NewProjects";
import DachLanding from "./pages/DachLanding";
import CgLanding from "./pages/CgLanding";
import HenryStandalone from "./pages/HenryStandalone";
import HangaroaNewsletter from "./pages/HangaroaNewsletter";
import "./index.css";

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
        <Route path="/tented-wellness" component={TentedWellness} />
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

        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
      {!hideWidget && <ConciergeChatWidget />}
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
