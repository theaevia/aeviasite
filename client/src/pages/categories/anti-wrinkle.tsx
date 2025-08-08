
import SEO from "@/components/SEO";
import { treatmentCategories } from "@/data/treatments";
import { BookingButton } from "@/components/BookingButton";
import TreatmentCard from "@/components/TreatmentCard";
import { getTreatmentImageClassName } from "@/lib/treatmentImageUtils";

const CATEGORY_SLUG = "anti-wrinkle";

export default function AntiWrinkleCategoryPage() {
  const category = treatmentCategories.find(cat => cat.slug === CATEGORY_SLUG);
  if (!category) return null;

  const areaSlug = "anti-wrinkle";
  const oneAreaTreatment = category.treatments.find(t => t.name.includes("One Area"));
  const otherTreatments = category.treatments.filter(t =>
    t.slug !== areaSlug
  );

  if (!oneAreaTreatment) return null; // Added null check for safety

  return (
    <>
      <SEO title={`Aevia Skin | ${category.category}`} description={category.description} />
      <section className="hero-gradient py-12 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl lg:text-5xl font-serif font-bold mb-4 leading-tight">
            Muscle Relaxing Treatments
          </h1>
          <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
            Soften expression lines while preserving natural movement - with subtle, doctor-performed injectables tailored to your features.
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <TreatmentCard name="Forehead, Frown or Crow's Feet" slug={areaSlug} price={`From ${oneAreaTreatment.price}`} duration={oneAreaTreatment.duration} image={oneAreaTreatment.image} imageClassName={getTreatmentImageClassName(oneAreaTreatment)} />
            {otherTreatments.map((treatment) => {
              let displayName = treatment.name;
              let displaySubtitle = undefined;

              if (treatment.slug === 'lower-face-contour-duo') {
                displayName = 'Lower-Face Contour Duo';
                displaySubtitle = 'Masseter Reduction + Jawline Tightening';
              } else if (treatment.slug === 'jawline-slimming') {
                displayName = 'Jawline Slimming';
                displaySubtitle = 'Masseter Reduction';
              } else if (treatment.slug === 'smile-lift') {
                displayName = 'Smile Lift';
                displaySubtitle = 'DAO Treatment';
              } else if (treatment.slug === 'neck-lift') {
                displayName = 'Neck Lift';
                displaySubtitle = 'Nefertiti';
              } else if (treatment.slug === 'neck-lift') {
                displayName = 'Neck Lift';
                displaySubtitle = 'Nefertiti';
              }

              return (
                <TreatmentCard
                  key={treatment.name}
                  name={displayName}
                  slug={treatment.slug}
                  price={treatment.price}
                  duration={treatment.slug === 'lower-face-contour-duo' ? '1h' : treatment.duration}
                  subtitle={displaySubtitle}
                  image={treatment.image}
                  imageClassName={getTreatmentImageClassName(treatment)}
                />
              );
            })}
            </div>
          </div>
          </div>
      </section>
    </>
  );
}
