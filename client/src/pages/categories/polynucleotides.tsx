import SEO from "@/components/SEO";
import { treatmentCategories } from "@/data/treatments";
import { BookingButton } from "@/components/BookingButton";
import TreatmentCard from "@/components/TreatmentCard";
import { getThumbnailClassName, getThumbnailObjectPosition } from "@/lib/treatmentImageUtils";
import { SKIN_CONSULTATION_URL } from "@/lib/bookingUrls";

const CATEGORY_SLUG = "polynucleotides";

export default function PolynucleotidesCategoryPage() {
  const category = treatmentCategories.find(cat => cat.slug === CATEGORY_SLUG);
  if (!category) return null;

  return (
    <>
      <SEO title={`Aevia Skin | ${category.category}`} description={category.description} />
      <section className="hero-gradient py-12 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl lg:text-5xl font-serif font-bold mb-4 leading-tight">
            Polynucleotides
          </h1>
          <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
            Injectable skin treatments that use purified DNA fragments to support long-term repair and tissue regeneration.
          </p>
          <div className="flex flex-col items-center w-full sm:w-auto">
            <BookingButton href={SKIN_CONSULTATION_URL} variant="primary" className="w-full sm:w-auto">
              Start Virtual Consultation
            </BookingButton>
            <p className="text-sm text-foreground/70 mt-2">Free for first-time clients</p>
          </div>
        </div>
      </section>
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {category.treatments.map((treatment, index) => (
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
                priority={index < 3}
              />
            ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
