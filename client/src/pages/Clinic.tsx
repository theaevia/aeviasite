import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { Link } from "wouter";
import LocationMap from "@/components/LocationMap";

export default function Clinic() {
  return (
    <>
      <SEO
        title="The Aevia Clinic | King's Cross, London"
        description="Visit The Aevia clinic in the heart of Kings Cross, London. Contact us and book a consultation."
        image="/aevia-logo.png"
      />
      <div className="min-h-screen">
        <section className="bg-secondary py-20 lg:py-32 mb-8 lg:mb-12">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
              Our <span className="text-primary">Clinic</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Visit us at our clinic in the heart of Kings Cross, London
            </p>
          </div>
        </section>
        <section className="bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                  <h3 className="text-xl font-serif font-semibold mb-4">Location</h3>
                  <a
                    href="https://maps.app.goo.gl/KUyjk1sRrauncTx49"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-primary smooth-transition block"
                  >
                    Minsony, 260 Pentonville Road<br />
                    N1 9JY, Kings Cross<br />
                    London
                  </a>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                  <h3 className="text-xl font-serif font-semibold mb-4">Opening Hours</h3>
                  <p className="text-foreground/70">Daily: 12:00 PM - 7:00 PM</p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                  <h3 className="text-xl font-serif font-semibold mb-4">Contact</h3>
                  <div className="space-y-3">
                    <a
                      href="tel:+447448012556"
                      className="block text-foreground/70 hover:text-primary smooth-transition"
                    >
                      +44 7448 012556
                    </a>
                    <a
                      href="mailto:hello@theaevia.co.uk"
                      className="block text-foreground/70 hover:text-primary smooth-transition"
                    >
                      hello@theaevia.co.uk
                    </a>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                  <h3 className="text-xl font-serif font-semibold mb-4">Book a Consultation</h3>
                  <Link href="/consultations">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-6">
            <LocationMap />
          </div>
        </section>
      </div>
    </>
  );
}
