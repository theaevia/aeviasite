import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Link } from "wouter";
import { Brain, Clock, Gift, Target, Check } from "lucide-react";
import SEO from "@/components/SEO";

export default function MindConsultationPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "aevia-mind" });
      const isMobile = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(max-width: 640px)').matches;
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#C5A87A" },
          dark: { "cal-brand": "#fafafa" },
        },
        hideEventTypeDetails: isMobile ? true : false,
        layout: "month_view",
      });
    })();
  }, []);

  const scrollToBook = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const el = document.getElementById("book");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    if (window.location.hash === "#book") scrollToBook();
  }, []);

  return (
    <>
      <SEO
        title="Aevia Mind Discovery Call | Book Online | King's Cross, London"
        description="Book your free 30-minute Aevia Mind discovery call with Dr. Manu. Explore goals, gain clarity, and map your transformation strategy."
        image="/hero_images/mind-hero.webp"
      />
      <div className="min-h-screen">
        {/* Hero */}
        <section className="bg-muted py-16 md:py-20 border-b border-[#e0ddd9]">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">Aevia Mind Discovery <span className="text-primary">Call</span></h1>
            <p className="text-base md:text-lg text-foreground/80 mb-6">Doctor-led, complimentary 30-min consult. Discreet & personalised.</p>
            {/* Segmented switch */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="inline-flex rounded-full border bg-white p-1">
                <Link href="/consultations/skin" className="px-4 py-2 rounded-full text-sm text-foreground/80 hover:bg-primary/10 smooth-transition">Skin</Link>
                <span className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold">Mind</span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <a href="#book" onClick={scrollToBook} className="block px-6 py-3 rounded-xl font-medium text-base text-center smooth-transition shadow-lg border-2 border-primary bg-primary text-primary-foreground hover:bg-white hover:text-primary hover:border-primary">
                Book Discovery Call
              </a>
            </div>
          </div>
        </section>
        {/* Booking */}
        <section id="book" className="scroll-mt-24 pt-8 pb-4 md:pt-12 md:pb-6 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-white rounded-2xl p-3 md:p-4 lg:p-3 border-2 border-primary shadow-sm">
              <h3 className="font-semibold mb-1">Schedule Your Discovery Call</h3>
              <p className="text-xs text-foreground/60 mb-4">Takes ~30 seconds.</p>
              <div className="w-full h-[70vh] lg:h-[640px] overflow-auto">
                <Cal
                  namespace="aevia-mind"
                  calLink="the-aevia/aevia-mind"
                  style={{ width: "100%", height: "100%" }}
                  config={{ layout: "month_view", theme: "light" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Details after Calendly */}
        <section className="pt-2 pb-10 md:pt-4 md:pb-12 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-8 items-start">
            {/* Quick Facts */}
            <div className="bg-muted rounded-2xl p-8 border border-[#e0ddd9]">
              <div className="flex items-center mb-4">
                <Brain className="text-primary h-5 w-5 mr-3" />
                <h2 className="text-xl font-serif font-semibold">Quick facts</h2>
              </div>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span>30-minute virtual consultation</span>
                </li>
                <li className="flex items-center gap-3">
                  <Gift className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span>Complimentary (no charge)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Target className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span>Coaching strategy discussion</span>
                </li>
              </ul>
            </div>
            {/* What you'll get */}
            <AccordionCard title="What you’ll get" items={["Goal clarity", "Starter frameworks", "Next steps"]} />
            {/* Perfect for */}
            <AccordionCard title="Perfect for" items={["High‑performers", "Decision‑makers", "Seeking clarity & agency"]} />
          </div>
          <div className="max-w-6xl mx-auto px-6 grid gap-6 mt-6">
            {/* Trust signals */}
            <div className="bg-white rounded-2xl p-8 border border-[#e0ddd9]">
              <h3 className="text-xl font-serif font-semibold mb-3">Why choose Aevia</h3>
              <ul className="space-y-2 text-foreground/80 text-sm">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 flex-shrink-0 text-primary" /> <span>GMC-registered doctors</span></li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 flex-shrink-0 text-primary" /> <span>Certified coaches</span></li>
              </ul>
            </div>
            {/* FAQs */}
            <Accordion type="single" collapsible className="bg-white rounded-2xl border border-[#e0ddd9]">
              <AccordionItem value="faqs" className="px-4">
                <AccordionTrigger>FAQs</AccordionTrigger>
                <AccordionContent>
                  <div className="text-foreground/80 space-y-3 text-sm">
                    <p><strong>Is it really free?</strong> Yes - your discovery call is complimentary.</p>
                    <p><strong>How long is it?</strong> About 30 minutes.</p>
                    <p><strong>Where are you located?</strong> Initial discovery call takes place virtually, with any further meetings at a bespoke London location that can be agreed upon at time of booking.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Sticky CTA removed */}
      </div>
    </>
  );
}

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

function AccordionCard({ title, items }: { title: string; items: string[] }) {
  return (
    <Accordion type="single" collapsible defaultValue="item-1" className="bg-white rounded-2xl border border-[#e0ddd9]">
      <AccordionItem value="item-1" className="px-4">
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-2 text-foreground/80">
            {items.map((text) => (
              <li key={text} className="flex items-center gap-3">
                <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

// Sticky CTA removed
