import { Route, Switch } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import { lazy, Suspense } from "react";
import { HelmetProvider } from 'react-helmet-async';

const Home = lazy(() => import("@/pages/Home"));
const Skin = lazy(() => import("@/pages/Skin"));
const Mind = lazy(() => import("@/pages/Mind"));
const Team = lazy(() => import("@/pages/Team"));
const Clinic = lazy(() => import("@/pages/Clinic"));
const JournalPlaceholder = lazy(() => import("@/pages/JournalPlaceholder"));
const Consultations = lazy(() => import("@/pages/Consultations"));
const Treatments = lazy(() => import("@/pages/Treatments"));
const NotFound = lazy(() => import("@/pages/not-found"));

function Router() {
  return (
    <Layout>
      <Suspense fallback={<div>Loading…</div>}>
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
      </Suspense>
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
