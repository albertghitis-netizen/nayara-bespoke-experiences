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
import ComingSoon from "./pages/ComingSoon";
import Journal from "./pages/Journal";
import Awards from "./pages/Awards";
import Sustainability from "./pages/Sustainability";
import TentedCamp from "./pages/TentedCamp";
import InstagramDM from "./pages/InstagramDM";
import MessengerDM from "./pages/MessengerDM";
import WhatsAppDM from "./pages/WhatsAppDM";
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
        <Route path="/hangaroa" component={ComingSoon} />
        <Route path="/bocas-del-toro" component={ComingSoon} />
        <Route path="/journal" component={Journal} />
        <Route path="/awards" component={Awards} />
        <Route path="/sustainability" component={Sustainability} />
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
