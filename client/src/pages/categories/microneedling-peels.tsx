
import SEO from "@/components/SEO";
import { treatmentCategories } from "@/data/treatments";
import { BookingButton } from "@/components/BookingButton";
import TreatmentCard from "@/components/TreatmentCard";
import { getTreatmentImageObjectPosition } from "@/lib/treatmentImageUtils";

export default function MicroneedlingPeelsCategoryPage() {
  const microneedlingCategory = treatmentCategories.find(cat => cat.slug === "microneedling");
  const clinicalPeelsCategory = treatmentCategories.find(cat => cat.slug === "clinical-peels");

  const combinedTreatments = [
    ...(microneedlingCategory ? microneedlingCategory.treatments : []),
    ...(clinicalPeelsCategory ? clinicalPeelsCategory.treatments : []),
  ];

  const pageTitle = "Microneedling & Peels";
  const pageDescription = "Advanced treatments to resurface and rejuvenate your skin, improving texture, tone, and clarity.";

  return (
    <>
      <SEO title={`Aevia Skin | ${pageTitle}`} description={pageDescription} />
      <section className="hero-gradient py-12 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl lg:text-5xl font-serif font-bold mb-4 leading-tight">
            {pageTitle}
          </h1>
          <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
            {pageDescription}
          </p>
          <div className="flex flex-col items-center w-full sm:w-auto">
            <BookingButton href="/consultations?type=skin" variant="primary" className="w-full sm:w-auto">
              Start Virtual Consultation
            </BookingButton>
            <p className="text-sm text-foreground/70 mt-2">Free for first-time clients</p>
          </div>
        </div>
      </section>
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="flex justify-center">
            <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {combinedTreatments.map((treatment) => (
              <TreatmentCard
                key={treatment.name}
                name={treatment.name}
                slug={treatment.slug}
                price={treatment.price}
                duration={treatment.duration}
                image={treatment.image}
                imageObjectPosition={getTreatmentImageObjectPosition(treatment)}
              />
            ))}
          </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
