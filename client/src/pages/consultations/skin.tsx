import { useEffect } from "react";
import { Link } from "wouter";
import { Leaf, Clock, Gift, Calendar, Check } from "lucide-react";
import SEO from "@/components/SEO";

export default function SkinConsultationPage() {
  useEffect(() => {
    // Calendly CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);

    // Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  // Smooth scroll to Calendly
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
        title="Aevia Skin Consultation | Book Online | King's Cross, London"
        description="Book your free 20-minute virtual Aevia Skin consultation with our doctors. Personalised assessment and treatment planning for natural, lasting results."
        image="/hero_images/aevia-clinic2.webp"
      />
      <div className="min-h-screen">
        {/* Hero */}
        <section className="bg-secondary py-16 md:py-20 border-b border-[#e0ddd9]">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-3">Aevia Skin Consultation</h1>
            <p className="text-base md:text-lg text-foreground/80 mb-6">Doctor-led, complimentary 20-min consult. Discreet & personalised.</p>
            {/* Segmented switch */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="inline-flex rounded-full border bg-white p-1">
                <span className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold">Skin</span>
                <Link href="/consultations/mind" className="px-4 py-2 rounded-full text-sm text-foreground/80 hover:bg-primary/10 smooth-transition">Mind</Link>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <a href="#book" onClick={scrollToBook} className="block px-6 py-3 rounded-xl font-medium text-base text-center smooth-transition shadow-lg border-2 border-primary bg-primary text-primary-foreground hover:bg-white hover:text-primary hover:border-primary">
                Book Skin Consultation
              </a>
            </div>
          </div>
        </section>
        {/* Calendly first */}
        <section id="book" className="scroll-mt-24 pt-8 pb-4 md:pt-12 md:pb-6 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-white rounded-2xl p-6 border-2 border-primary shadow-sm">
              <h3 className="font-semibold mb-1">Book Your Skin Consultation</h3>
              <p className="text-xs text-foreground/60 mb-4">Takes ~30 seconds.</p>
              <div className="w-full">
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/theaevia/aevia-skin-consultation?hide_event_type_details=1&hide_gdpr_banner=1&text_color=2d2d2d&primary_color=c5a87a"
                  style={{ minWidth: "0", width: "100%", height: "720px" }}
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/* Details after Calendly */}
        <section className="pt-2 pb-10 md:pt-4 md:pb-12 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-8 items-start">
            {/* Quick Facts */}
            <div className="bg-accent/30 rounded-2xl p-8 border border-[#e0ddd9]">
              <div className="flex items-center mb-4">
                <Leaf className="text-primary h-5 w-5 mr-3" />
                <h2 className="text-xl font-serif font-semibold">Quick facts</h2>
              </div>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-center"><Clock className="text-primary mr-3 h-5 w-5" /> 20-minute virtual consultation</li>
                <li className="flex items-center"><Gift className="text-primary mr-3 h-5 w-5" /> Complimentary (no charge)</li>
                <li className="flex items-center"><Calendar className="text-primary mr-3 h-5 w-5" /> Available most days of the week</li>
              </ul>
            </div>
            {/* What you'll get */}
            <AccordionCard title="What you’ll get" items={["Facial mapping", "Treatment recommendations", "A full personalised plan"]} />
            {/* Perfect for */}
            <AccordionCard title="Perfect for" items={["First‑time clients", "Unsure what to book", "Those who prefer a natural, regenerative approach"]} />
          </div>
          <div className="max-w-6xl mx-auto px-6 grid gap-6 mt-6">
            {/* Trust signals */}
            <div className="bg-white rounded-2xl p-8 border border-[#e0ddd9]">
              <h3 className="text-xl font-serif font-semibold mb-3">Why choose The Aevia</h3>
              <ul className="space-y-2 text-foreground/80 text-sm">
                <li className="grid grid-cols-[20px_1fr] gap-3 items-start"><Check className="h-5 w-5 text-primary mt-0.5" /> <span>GMC-registered doctors</span></li>
                <li className="grid grid-cols-[20px_1fr] gap-3 items-start"><Check className="h-5 w-5 text-primary mt-0.5" /> <span>Clinic in Kings Cross, London</span></li>
                <li className="grid grid-cols-[20px_1fr] gap-3 items-start"><Check className="h-5 w-5 text-primary mt-0.5" /> <span>Regenerative approach</span></li>
              </ul>
            </div>
            {/* FAQs */}
            <Accordion type="single" collapsible className="bg-white rounded-2xl border border-[#e0ddd9]">
              <AccordionItem value="faqs" className="px-4">
                <AccordionTrigger>FAQs</AccordionTrigger>
                <AccordionContent>
                  <div className="text-foreground/80 space-y-3 text-sm">
                    <p><strong>Is it really free?</strong> Yes — your initial virtual consult is complimentary.</p>
                    <p><strong>How long is it?</strong> About 20 minutes.</p>
                    <p><strong>Where are you located?</strong> Kings Cross, London. However, our consultations are virtual via Google Meet.</p>
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
              <li key={text} className="grid grid-cols-[20px_1fr] gap-3 items-start">
                <Check className="h-5 w-5 text-primary mt-0.5" />
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
