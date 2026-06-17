import { useEffect } from "react";
import { Leaf, Clock, Gift, Calendar, Check } from "lucide-react";
import SEO from "@/components/SEO";
import { BookingButton } from "@/components/BookingButton";
import {
  CLINIC_WHATSAPP_ENQUIRE_URL,
  SKIN_CONSULTATION_URL,
  SQUARE_SITE_URL,
} from "@/lib/bookingUrls";

export default function SkinConsultationPage() {
  // Inject Square Appointments embed script
  useEffect(() => {
    const container = document.getElementById('square-appointments-embed');
    if (!container) return;
    // Clear previous if any
    container.innerHTML = '';
    const script = document.createElement('script');
    script.src = 'https://app.squareup.com/appointments/buyer/widget/flwwunfdy1hm72/L1TKSRMBS3N9H.js';
    script.async = true;
    container.appendChild(script);
    return () => {
      container.innerHTML = '';
    };
  }, []);

  // Smooth scroll to booking embed
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
        description="Not sure which Aevia Skin treatment to book? Speak with our doctors for personalised guidance, or book a treatment appointment directly online."
        image="/hero_images/aevia-clinic2.webp"
      />
      <div className="min-h-screen">
        {/* Hero */}
        <section className="bg-secondary py-16 md:py-20 border-b border-[#e0ddd9]">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-3">Aevia Skin Guidance</h1>
            <p className="text-base md:text-lg text-foreground/80 mb-6">For clients who would like help choosing the right appointment.</p>
            {/* Segmented switch */}
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <BookingButton href={SQUARE_SITE_URL} variant="primary" className="w-full sm:w-auto">
                Book Treatment
              </BookingButton>
              <BookingButton href={SKIN_CONSULTATION_URL} variant="secondary" className="w-full sm:w-auto">
                Get Guidance First
              </BookingButton>
              <BookingButton href={CLINIC_WHATSAPP_ENQUIRE_URL} variant="primary" className="w-full sm:w-auto">
                WhatsApp Us
              </BookingButton>
            </div>
          </div>
        </section>
        {/* Booking */}
        <section id="book" className="scroll-mt-24 pt-8 pb-4 md:pt-12 md:pb-6 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-white rounded-2xl p-3 md:p-4 lg:p-3 border-2 border-primary shadow-sm">
              <h3 className="font-semibold mb-1">Book a guidance call</h3>
              <p className="text-xs text-foreground/60 mb-4">If you already know what you want, book treatment directly.</p>
              {/* Square embed mounts here */}
              <div id="square-appointments-embed" className="w-full min-h-[640px]" />
            </div>
          </div>
        </section>

        {/* Details after booking embed */}
        <section className="pt-2 pb-10 md:pt-4 md:pb-12 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-8 items-start">
            {/* Quick Facts */}
            <div className="bg-accent/30 rounded-2xl p-8 border border-[#e0ddd9]">
              <div className="flex items-center mb-4">
                <Leaf className="text-primary h-5 w-5 mr-3" />
                <h2 className="text-xl font-serif font-semibold">Quick facts</h2>
              </div>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-center"><Clock className="text-primary mr-3 h-5 w-5" /> Short virtual or phone guidance</li>
                <li className="flex items-center"><Gift className="text-primary mr-3 h-5 w-5" /> Useful if you are unsure what to book</li>
                <li className="flex items-center"><Calendar className="text-primary mr-3 h-5 w-5" /> Treatment appointments include assessment in clinic</li>
              </ul>
            </div>
            {/* What you'll get */}
            <AccordionCard title="What you’ll get" items={["Initial guidance", "Treatment recommendations", "The right booking route"]} />
            {/* Perfect for */}
            <AccordionCard title="Perfect for" items={["First-time clients", "Unsure what to book", "Those who prefer guidance before choosing"]} />
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
                    <p><strong>Do I need this before booking treatment?</strong> No. You can book a treatment appointment directly if you know what you are interested in.</p>
                    <p><strong>What happens in clinic?</strong> Your doctor will confirm your goals and suitability before any treatment begins.</p>
                    <p><strong>Where are you located?</strong> King's Cross, London. Guidance calls can take place virtually or by phone.</p>
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
