// Framework Imports
import { Route, Switch } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from 'react-helmet-async';
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";

// Page Imports
import Home from "@/pages/Home";
import Skin from "@/pages/Skin";
import Mind from "@/pages/Mind";
import Team from "@/pages/Team";
import Clinic from "@/pages/Clinic";
import Gallery from "@/pages/Gallery";
import GlowGuide from "@/pages/GlowGuide";
import SkinConsultationPage from "@/pages/consultations/skin";
import MindConsultationPage from "@/pages/consultations/mind";
import Treatments from "@/pages/Treatments";
import NotFound from "@/pages/not-found";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import CancellationPolicyPage from "@/pages/Cancellation";
import BioPage from "@/pages/Bio";
import QuizPlaceholder from "@/pages/Quiz";
import TheMindExplored from "@/pages/TheMindExplored";

// Treatment Page Imports
import AntiWrinklePage from "@/pages/treatments/anti-wrinkle/anti-wrinkle";
import JawlineSlimmingPage from "@/pages/treatments/anti-wrinkle/jawline-slimming";
import LowerFaceContourDuoPage from "@/pages/treatments/anti-wrinkle/lower-face-contour-duo";
import NeckLiftPage from "@/pages/treatments/anti-wrinkle/neck-lift";
import SmileLiftPage from "@/pages/treatments/anti-wrinkle/smile-lift";
import SweatControlPage from "@/pages/treatments/anti-wrinkle/sweat-control";
import ProfhiloPage from "@/pages/treatments/skin-boosters/profhilo";
import SunekosPage from "@/pages/treatments/skin-boosters/sunekos";
import EyeRejuvenationPage from "@/pages/treatments/polynucleotides/eye-rejuvenation";
import FullFaceRegenerationPage from "@/pages/treatments/polynucleotides/full-face-regeneration";
import MicroneedlingComingSoonPage from "@/pages/treatments/microneedling/microneedling";
import GlycolicPeelComingSoonPage from "@/pages/treatments/clinical-peels/glycolic-peel";
import SalicylicPeelComingSoonPage from "@/pages/treatments/clinical-peels/salicylic-peel";
import LacticAcidPeelComingSoonPage from "@/pages/treatments/clinical-peels/lactic-acid-peel";
import TCAPeelComingSoonPage from "@/pages/treatments/clinical-peels/tca-peel";
import SculptraPage from "@/pages/treatments/bio-voluminisation/sculptra";
import TreatmentPage from "@/pages/treatments/[slug]";

// Category Page Imports
import AntiWrinkleCategory from "@/pages/categories/anti-wrinkle";
import SkinBoostersCategory from "@/pages/categories/skin-boosters";
import MicroneedlingPeelsCategory from "@/pages/categories/microneedling-peels";
import BioVoluminisationCategory from "@/pages/categories/bio-voluminisation";
import PolynucleotidesCategory from "@/pages/categories/polynucleotides";
import ConsultationCategory from "@/pages/categories/consultation";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/skin" component={Skin} />
        <Route path="/mind" component={Mind} />
        <Route path="/themindexplored" component={TheMindExplored} />
        <Route path="/team" component={Team} />
        <Route path="/clinic" component={Clinic} />
        <Route path="/glow-guide" component={GlowGuide} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/consultations/skin" component={SkinConsultationPage} />
        <Route path="/consultations/mind" component={MindConsultationPage} />
        <Route path="/consultations" component={SkinConsultationPage} />
        {/* TikTok Bio and Quiz */}
        <Route path="/bio" component={BioPage} />
        <Route path="/tiktok" component={BioPage} />
        <Route path="/quiz" component={QuizPlaceholder} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/cancellation" component={CancellationPolicyPage} />
        {/* Category static pages */}
        <Route path="/categories/anti-wrinkle" component={AntiWrinkleCategory} />
        <Route path="/categories/skin-boosters" component={SkinBoostersCategory} />
        <Route path="/categories/microneedling-peels" component={MicroneedlingPeelsCategory} />
        <Route path="/categories/bio-voluminisation" component={BioVoluminisationCategory} />
        <Route path="/categories/polynucleotides" component={PolynucleotidesCategory} />
        <Route path="/categories/consultation" component={ConsultationCategory} />
        {/* Treatments and fallback */}
        <Route path="/treatments/anti-wrinkle" component={AntiWrinklePage} />
        <Route path="/treatments/jawline-slimming" component={JawlineSlimmingPage} />
        <Route path="/treatments/lower-face-contour-duo" component={LowerFaceContourDuoPage} />
        <Route path="/treatments/neck-lift" component={NeckLiftPage} />
        <Route path="/treatments/smile-lift" component={SmileLiftPage} />
        <Route path="/treatments/sweat-control" component={SweatControlPage} />
        <Route path="/treatments/profhilo" component={ProfhiloPage} />
        <Route path="/treatments/sunekos" component={SunekosPage} />
        <Route path="/treatments/eye-rejuvenation" component={EyeRejuvenationPage} />
        <Route path="/treatments/full-face-regeneration" component={FullFaceRegenerationPage} />
        <Route path="/treatments/microneedling" component={MicroneedlingComingSoonPage} />
        <Route path="/treatments/glycolic-peel" component={GlycolicPeelComingSoonPage} />
        <Route path="/treatments/salicylic-peel" component={SalicylicPeelComingSoonPage} />
        <Route path="/treatments/lactic-acid-peel" component={LacticAcidPeelComingSoonPage} />
        <Route path="/treatments/tca-peel" component={TCAPeelComingSoonPage} />
        <Route path="/treatments/sculptra" component={SculptraPage} />
        <Route path="/treatments/:slug" component={TreatmentPage} />
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
