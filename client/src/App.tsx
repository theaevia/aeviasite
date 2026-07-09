// Framework Imports
import { lazy, Suspense, useEffect } from "react";
import { Redirect, Route, Switch } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from 'react-helmet-async';
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";

// Page Imports
import Home from "@/pages/Home";
import Skin from "@/pages/Skin";
import Team from "@/pages/Team";
import Clinic from "@/pages/Clinic";
import Gallery from "@/pages/Gallery";
import GlowGuide from "@/pages/GlowGuide";
import Treatments from "@/pages/Treatments";
import NotFound from "@/pages/not-found";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import CancellationPolicyPage from "@/pages/Cancellation";
import BioPage from "@/pages/Bio";
import QuizPlaceholder from "@/pages/Quiz";
import Bookings from "@/pages/Bookings";
import PolynucleotidesPage from "@/pages/Polynucleotides";
import SkinOfColourPage from "@/pages/SkinOfColour";
import ConcernsPage from "@/pages/Concerns";
import ConcernPage from "@/pages/Concern";
import Reviews from "@/pages/Reviews";

// Treatment Page Imports
import TreatmentPage from "@/pages/treatments/[slug]";

// Category Page Imports
import AntiWrinkleCategory from "@/pages/categories/anti-wrinkle";
import SkinBoostersCategory from "@/pages/categories/skin-boosters";
import PolynucleotidesCategory from "@/pages/categories/polynucleotides";
import { CLINIC_WHATSAPP_ENQUIRE_URL } from "@/lib/bookingUrls";

const ProfhiloPage = () => <TreatmentPage slugOverride="profhilo" />;
const AntiWrinklePage = () => <TreatmentPage slugOverride="anti-wrinkle" />;
const RoutedTreatmentPage = () => <TreatmentPage />;
const SkinProceduresHubPage = lazy(() => import("@/pages/skin-procedures"));
const SkinTagRemovalPage = lazy(() => import("@/pages/skin-procedures/SkinTagRemoval"));
const MoleRemovalPage = lazy(() => import("@/pages/skin-procedures/MoleRemoval"));
const CystRemovalPage = lazy(() => import("@/pages/skin-procedures/CystRemoval"));
const MiliaRemovalPage = lazy(() => import("@/pages/skin-procedures/MiliaRemoval"));
const WartRemovalPage = lazy(() => import("@/pages/skin-procedures/WartRemoval"));
const NhsRemovalGuidePage = lazy(() => import("@/pages/skin-procedures/NhsRemovalGuide"));
const MoleRemovalGuidePage = lazy(() => import("@/pages/skin-procedures/MoleRemovalGuide"));

function SkinProcedureRoute({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<div className="min-h-[24rem] bg-[#fbf9f5]" />}>{children}</Suspense>;
}

const SkinProceduresHubRoute = () => <SkinProcedureRoute><SkinProceduresHubPage /></SkinProcedureRoute>;
const SkinTagRemovalRoute = () => <SkinProcedureRoute><SkinTagRemovalPage /></SkinProcedureRoute>;
const MoleRemovalRoute = () => <SkinProcedureRoute><MoleRemovalPage /></SkinProcedureRoute>;
const CystRemovalRoute = () => <SkinProcedureRoute><CystRemovalPage /></SkinProcedureRoute>;
const MiliaRemovalRoute = () => <SkinProcedureRoute><MiliaRemovalPage /></SkinProcedureRoute>;
const WartRemovalRoute = () => <SkinProcedureRoute><WartRemovalPage /></SkinProcedureRoute>;
const NhsRemovalGuideRoute = () => <SkinProcedureRoute><NhsRemovalGuidePage /></SkinProcedureRoute>;
const MoleRemovalGuideRoute = () => <SkinProcedureRoute><MoleRemovalGuidePage /></SkinProcedureRoute>;
const WhatsAppRedirect = () => {
  useEffect(() => window.location.replace(CLINIC_WHATSAPP_ENQUIRE_URL), []);
  return <main className="mx-auto max-w-2xl px-6 py-24 text-center"><h1 className="text-4xl font-medium">Opening WhatsApp</h1><a href={CLINIC_WHATSAPP_ENQUIRE_URL} className="mt-8 inline-block underline underline-offset-4">Continue to WhatsApp</a></main>;
};
const PricingRedirect = () => {
  useEffect(() => window.location.replace(`/treatments${window.location.hash || "#protocols"}`), []);
  return <main className="mx-auto max-w-2xl px-6 py-24 text-center"><h1 className="text-4xl font-medium">Opening treatment pricing</h1><a href="/treatments#protocols" className="mt-8 inline-block underline underline-offset-4">Continue to pricing</a></main>;
};

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Skin} />
        <Route path="/skin" component={Skin} />
        <Route path="/the-aevia" component={Home} />
        <Route path="/team" component={Team} />
        <Route path="/clinic" component={Clinic} />
        <Route path="/glow-guide" component={GlowGuide} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/bookings" component={Bookings} />
        <Route path="/consultations/skin" component={WhatsAppRedirect} />
        <Route path="/consultations" component={WhatsAppRedirect} />
        {/* TikTok Bio and Quiz */}
        <Route path="/bio" component={BioPage} />
        <Route path="/tiktok" component={BioPage} />
        <Route path="/quiz" component={QuizPlaceholder} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/cancellation" component={CancellationPolicyPage} />
        <Route path="/profhilo" component={ProfhiloPage} />
        <Route path="/anti-wrinkle" component={AntiWrinklePage} />
        <Route path="/polynucleotides" component={PolynucleotidesPage} />
        <Route path="/skin-of-colour" component={SkinOfColourPage} />
        <Route path="/concerns/:slug" component={ConcernPage} />
        <Route path="/concerns" component={ConcernsPage} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/skin-procedures" component={SkinProceduresHubRoute} />
        <Route path="/skin-procedures/skin-tag-removal-london" component={SkinTagRemovalRoute} />
        <Route path="/skin-procedures/mole-removal-london" component={MoleRemovalRoute} />
        <Route path="/skin-procedures/cyst-removal-london" component={CystRemovalRoute} />
        <Route path="/skin-procedures/milia-removal-london" component={MiliaRemovalRoute} />
        <Route path="/skin-procedures/wart-removal-london" component={WartRemovalRoute} />
        <Route path="/skin-procedures/guides/why-wont-the-nhs-remove-my-skin-tag-or-mole" component={NhsRemovalGuideRoute} />
        <Route path="/skin-procedures/guides/mole-removal-cosmetic-vs-medical" component={MoleRemovalGuideRoute} />
        {/* Category static pages */}
        <Route path="/categories/anti-wrinkle" component={AntiWrinkleCategory} />
        <Route path="/categories/skin-boosters" component={SkinBoostersCategory} />
        <Route path="/categories/microneedling-peels"><Redirect to="/treatments" /></Route>
        <Route path="/categories/bio-voluminisation"><Redirect to="/treatments" /></Route>
        <Route path="/categories/polynucleotides" component={PolynucleotidesCategory} />
        <Route path="/categories/consultation" component={WhatsAppRedirect} />
        {/* Treatments and fallback */}
        <Route path="/treatments/virtual-consultation" component={WhatsAppRedirect} />
        <Route path="/treatments/in-clinic-consultation" component={WhatsAppRedirect} />
        <Route path="/treatments/smile-lift"><Redirect to="/anti-wrinkle" /></Route>
        <Route path="/treatments/microneedling"><Redirect to="/treatments" /></Route>
        <Route path="/treatments/sculptra"><Redirect to="/treatments" /></Route>
        <Route path="/treatments/glycolic-peel"><Redirect to="/treatments" /></Route>
        <Route path="/treatments/salicylic-peel"><Redirect to="/treatments" /></Route>
        <Route path="/treatments/lactic-acid-peel"><Redirect to="/treatments" /></Route>
        <Route path="/treatments/tca-peel"><Redirect to="/treatments" /></Route>
        <Route path="/treatments/:slug" component={RoutedTreatmentPage} />
        <Route path="/treatments" component={Treatments} />
        <Route path="/pricing" component={PricingRedirect} />
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
