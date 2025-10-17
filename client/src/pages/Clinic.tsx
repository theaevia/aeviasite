import { Button } from "@/components/ui/button";
import { MIND_DISCOVERY_URL, SKIN_CONSULTATION_URL } from "@/lib/bookingUrls";
import SEO from "@/components/SEO";
import Map from "@/components/Map";
import { clinicOpeningHours } from "@/data/openingHours";

export default function Clinic() {
  return (
    <>
      <SEO
        title="The Aevia Clinic | King's Cross, London"
        description="Visit The Aevia clinic in the heart of King’s Cross, London. Contact us and book a consultation."
        image="/aevia-logo.png"
      />
      <div className="min-h-screen">
        <section className="bg-secondary py-12 lg:py-16">
          <div className="hero-safe-padding">
            <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">Our <span className="text-primary">Clinic</span></h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Visit us in the heart of King’s Cross, London.
            </p>
            </div>
          </div>
        </section>
        <section className="bg-white py-16">
          <div className="hero-safe-padding">
            <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
              <div className="space-y-8 text-center md:text-left">
                <div className="card-surface p-8 text-center md:text-left">
                  <h3 className="section-heading normal-case mb-4 text-lg tracking-[0.18em] text-[#111]">
                    Location
                  </h3>
                  <a
                    href="https://maps.app.goo.gl/KUyjk1sRrauncTx49"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="space-y-1 text-sm tracking-[0.18em] text-[#3f3a33]/80 transition-colors duration-200 hover:text-primary"
                  >
                    <span className="block text-[#111]">Minsony</span>
                    <span className="block">260 Pentonville Road</span>
                    <span className="block">N1 9JY, London</span>
                  </a>
                </div>
                <div className="card-surface p-8 text-center md:text-left">
                  <h3 className="section-heading normal-case mb-4 text-lg tracking-[0.18em] text-[#111]">
                    Opening Hours
                  </h3>
                  <div className="space-y-2 text-sm tracking-[0.18em] text-[#3f3a33]/80">
                    {clinicOpeningHours.map(({ day, hours }) => (
                      <div key={day} className="flex items-center justify-between gap-6">
                        <span className="text-[#111]">{day}</span>
                        <span>{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-8 text-center md:text-left">
                <div className="card-surface p-8 text-center md:text-left">
                  <h3 className="section-heading normal-case mb-4 text-lg tracking-[0.18em] text-[#111]">
                    Contact
                  </h3>
                  <div className="space-y-3 text-sm tracking-[0.18em] text-[#3f3a33]/80">
                    <a
                      href="tel:+447448012556"
                      className="block transition-colors duration-200 hover:text-primary"
                    >
                      +44 7448 012556
                    </a>
                    <a
                      href="mailto:hello@theaevia.co.uk"
                      className="block transition-colors duration-200 hover:text-primary"
                    >
                      hello@theaevia.co.uk
                    </a>
                  </div>
                </div>
                <div className="card-surface p-8 text-center">
                  <h3 className="section-heading normal-case mb-4 text-lg tracking-[0.18em] text-[#111]">
                    Book a Consultation
                  </h3>
                  <div className="grid gap-3">
                    <a href={SKIN_CONSULTATION_URL} target="_blank" rel="noopener noreferrer">
                      <Button variant="primary" className="w-full">
                        Skin Consultation
                      </Button>
                    </a>
                    <a href={MIND_DISCOVERY_URL} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                        Mind Discovery Call
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Map Section */}
        <section className="bg-white pb-20">
          <div className="hero-safe-padding">
            <div className="mx-auto max-w-4xl">
              <Map className="w-full border border-[#d9d0c4]" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
