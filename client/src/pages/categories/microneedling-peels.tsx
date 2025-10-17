import SEO from "@/components/SEO";
import { BookingButton } from "@/components/BookingButton";
import TreatmentCard from "@/components/TreatmentCard";
import { treatmentCategories } from "@/data/treatments";
import { getThumbnailClassName, getThumbnailObjectPosition } from "@/lib/treatmentImageUtils";
import { MICRONEEDLING_REG_URL, SKIN_CONSULTATION_URL } from "@/lib/bookingUrls";

const CATEGORY_SLUG = "microneedling";

export default function MicroneedlingPeelsCategoryPage() {
  const pageTitle = "Microneedling & Peels";
  const pageDescription = "Microneedling is now live at The Aevia, with clinical-grade peels launching soon. Explore the new protocols below or join the waitlist to be first in line for peels.";
  const microneedlingCategory = treatmentCategories.find(cat => cat.slug === CATEGORY_SLUG);
  const microneedlingTreatment = microneedlingCategory?.treatments ?? [];

  return (
    <>
      <SEO title={`${pageTitle} | The Aevia`} description={pageDescription} />
      <section className="hero-gradient py-12 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">{pageTitle}</h1>
          <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
            Microneedling is now open for booking with both HA-infused and regenerative protocols. Medical-grade peels are in final development — join the waitlist to be first when they launch.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <BookingButton href={MICRONEEDLING_REG_URL} variant="primary" className="w-full sm:w-auto">
              Book Microneedling
            </BookingButton>
            <BookingButton href={SKIN_CONSULTATION_URL} variant="secondary" className="w-full sm:w-auto">
              Book Skin Consultation
            </BookingButton>
          </div>
        </div>
      </section>
      {microneedlingTreatment.length > 0 && (
        <section className="w-full bg-white py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <div className="flex flex-col items-center text-center mb-10">
              <h2 className="section-heading normal-case mb-4 text-black">Microneedling Treatments</h2>
              <p className="text-base text-foreground/80 max-w-2xl">
                Choose between Classic (HA-infused) and Regenerative (Exosomes + Polynucleotides) microneedling. Both protocols target texture, scarring, and dullness with minimal downtime.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
              {microneedlingTreatment.map(treatment => (
                <TreatmentCard
                  key={treatment.name}
                  name={treatment.name}
                  slug={treatment.slug}
                  price={treatment.price}
                  duration={treatment.duration}
                  image={treatment.image}
                  imageClassName={getThumbnailClassName(treatment)}
                  imageObjectPosition={getThumbnailObjectPosition(treatment)}
                  subtitle={treatment.subtitle}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="w-full bg-secondary py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="section-heading normal-case mb-4 text-black">Clinical Peels Launching Soon</h2>
          <p className="text-base text-foreground/80 mb-6">
            Our peel menu is in the final clinical testing phase. Register your interest and we will notify you the moment booking opens.
          </p>
          <a
            href="mailto:hello@theaevia.co.uk?subject=Clinical%20Peels%20Waitlist"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium text-base smooth-transition shadow-lg border-2 border-primary bg-primary text-primary-foreground hover:bg-white hover:text-primary hover:border-primary"
          >
            Join Peel Waitlist
          </a>
          <p className="text-sm text-foreground/70 mt-2">We'll keep you updated with timelines and launch details.</p>
        </div>
      </section>
    </>
  );
}
