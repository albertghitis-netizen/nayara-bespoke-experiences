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
import Blog from "./pages/Blog";
import Podcast from "./pages/Podcast";
import Awards from "./pages/Awards";
import Sustainability from "./pages/Sustainability";
import Experiences from "./pages/Experiences";
import Wellness from "./pages/Wellness";
import AylaOnKrog from "./pages/AylaOnKrog";
import Press from "./pages/Press";
import Story from "./pages/Story";
import Rooms from "./pages/Rooms";
import Gastronomy from "./pages/Gastronomy";
import TentedCamp from "./pages/TentedCamp";
import Gardens from "./pages/Gardens";
import Springs from "./pages/Springs";
import InstagramDM from "./pages/InstagramDM";
import MessengerDM from "./pages/MessengerDM";
import WhatsAppDM from "./pages/WhatsAppDM";
import FAQ from "./pages/FAQ";
import Competitors from "./pages/Competitors";
import AskConcierge from "./pages/AskConcierge";
import ConciergeChatWidget from "./components/ConciergeChatWidget";
import "./index.css";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

/* Pages where the floating chat widget should be hidden (DM simulators have their own chat) */
const HIDE_WIDGET_PATHS = ["/instagram", "/messenger", "/whatsapp"];

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
        <Route path="/gardens" component={Gardens} />
        <Route path="/springs" component={Springs} />
        <Route path="/hangaroa" component={Hangaroa} />
        <Route path="/bocas-del-toro" component={BocasDelToro} />
        <Route path="/blog" component={Blog} />
        <Route path="/podcast" component={Podcast} />
        <Route path="/awards" component={Awards} />
        <Route path="/sustainability" component={Sustainability} />
        <Route path="/experiences" component={Experiences} />
        <Route path="/wellness" component={Wellness} />
        <Route path="/press" component={Press} />
        <Route path="/story" component={Story} />
        <Route path="/rooms" component={Rooms} />
        <Route path="/gastronomy" component={Gastronomy} />
        <Route path="/faq" component={FAQ} />
        <Route path="/competitors" component={Competitors} />
        <Route path="/concierge" component={AskConcierge} />
        <Route path="/ayla" component={AylaOnKrog} />
        <Route path="/instagram" component={InstagramDM} />
        <Route path="/messenger" component={MessengerDM} />
        <Route path="/whatsapp" component={WhatsAppDM} />
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
