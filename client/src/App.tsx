import { Route, Switch } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Skin from "@/pages/Skin";
import Mind from "@/pages/Mind";
import Team from "@/pages/Team";
import Clinic from "@/pages/Clinic";
import JournalPlaceholder from "@/pages/JournalPlaceholder";
import Consultations from "@/pages/Consultations";
import Treatments from "@/pages/Treatments";
import NotFound from "@/pages/not-found";
import { HelmetProvider } from 'react-helmet-async';

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/skin" component={Skin} />
        <Route path="/mind" component={Mind} />
        <Route path="/team" component={Team} />
        <Route path="/clinic" component={Clinic} />
        <Route path="/journal" component={JournalPlaceholder} />
        <Route path="/consultations" component={Consultations} />
        <Route path="/treatments" component={Treatments} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
