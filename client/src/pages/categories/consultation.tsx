import SEO from "@/components/SEO";
import { treatmentCategories } from "@/data/treatments";
import { BookingButton } from "@/components/BookingButton";
import TreatmentCard from "@/components/TreatmentCard";

const CATEGORY_SLUG = "consultation";

export default function ConsultationCategoryPage() {
  const category = treatmentCategories.find(cat => cat.slug === CATEGORY_SLUG);
  if (!category) return null;

  return (
    <>
      <SEO title={`Aevia Skin | ${category.category}`} description={category.description} />
      <section className="hero-gradient py-12 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl lg:text-5xl font-serif font-bold mb-4 leading-tight">
            Aevia Skin Consultation
          </h1>
          <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
            Services to guide new clients through their skin treatment journey with us. Fee redeemable against first treatment.
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
            {category.treatments.map((treatment) => (
              <TreatmentCard key={treatment.name} name={treatment.name} slug={treatment.slug} price={treatment.price} duration={treatment.duration} />
            ))}
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}