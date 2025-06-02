import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Skin from "@/pages/Skin";
import Mind from "@/pages/Mind";
import About from "@/pages/About";
import Journal from "@/pages/Journal";
import Consultations from "@/pages/Consultations";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/skin" component={Skin} />
        <Route path="/mind" component={Mind} />
        <Route path="/about" component={About} />
        <Route path="/journal" component={Journal} />
        <Route path="/consultations" component={Consultations} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
