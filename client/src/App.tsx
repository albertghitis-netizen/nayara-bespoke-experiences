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
import AylaOnKrog from "./pages/AylaOnKrog";

import Story from "./pages/Story";
import Rooms from "./pages/Rooms";
import Gastronomy from "./pages/Gastronomy";
import TentedCamp from "./pages/TentedCamp";
import TentedExperiences from "./pages/TentedExperiences";
import Gardens from "./pages/Gardens";
import Springs from "./pages/Springs";


import Competitors from "./pages/Competitors";
import AskConcierge from "./pages/AskConcierge";
import ConciergeChatWidget from "./components/ConciergeChatWidget";
import BrandBook from "./pages/BrandBook";
import SEOStrategy from "./pages/SEOStrategy";
import Architecture from "./pages/Architecture";
import Questions from "./pages/Questions";
import WebsiteGuide from "./pages/WebsiteGuide";
import ChatEmbed from "./pages/ChatEmbed";
import AllDestinations from "./pages/AllDestinations";
import "./index.css";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

/* Pages where the floating chat widget should be hidden (DM simulators have their own chat) */
const HIDE_WIDGET_PATHS = ["/chat-embed"];

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
        <Route path="/all-destinations" component={AllDestinations} />
        <Route path="/blog">{() => { window.location.replace("/journal"); return null; }}</Route>
        <Route path="/podcast">{() => { window.location.replace("/journal"); return null; }}</Route>
        <Route path="/awards" component={AwardsAndPress} />
        <Route path="/sustainability" component={Sustainability} />
        <Route path="/experiences" component={Experiences} />
        <Route path="/wellness" component={Wellness} />
        <Route path="/press">{() => { window.location.replace("/awards"); return null; }}</Route>
        <Route path="/story" component={Story} />
        <Route path="/rooms" component={Rooms} />
        <Route path="/gastronomy" component={Gastronomy} />
        <Route path="/faq">{() => { window.location.replace("/journal"); return null; }}</Route>
        <Route path="/competitors" component={Competitors} />
        <Route path="/concierge" component={AskConcierge} />
        <Route path="/brand-book" component={BrandBook} />
        <Route path="/seo" component={SEOStrategy} />
        <Route path="/architecture" component={Architecture} />
        <Route path="/questions" component={Questions} />
        <Route path="/guide" component={WebsiteGuide} />
        <Route path="/chat-embed" component={ChatEmbed} />
        <Route path="/ayla" component={AylaOnKrog} />

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
