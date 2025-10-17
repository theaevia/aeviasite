import { useParams } from "wouter";
import { treatmentCategories } from "@/data/treatments";
import SEO from "@/components/SEO";
import TreatmentLayout from "@/components/TreatmentLayout";

export default function TreatmentPage() {
  const { slug } = useParams<{ slug: string }>();

  // Flatten all treatments into a single array
  const allTreatments = treatmentCategories.flatMap(cat => cat.treatments);
  const treatment = allTreatments.find(t => t.slug === slug);

  if (!treatment) {
    return (
      <TreatmentLayout>
        <h1 className="text-3xl font-serif font-bold mb-4">Treatment Not Found</h1>
        <p className="mb-6">Sorry, we couldn't find the treatment you're looking for.</p>
      </TreatmentLayout>
    );
  }

  // SKELETON: Replace this with a static file for each treatment for full customization
  return (
    <>
      <SEO title={`Aevia | ${treatment.name}`} description={treatment.description} />
      <TreatmentLayout>
        <h1 className="text-4xl font-serif font-bold mb-4 text-primary">{treatment.name}</h1>
        <p className="text-lg text-foreground/70 mb-6">{treatment.description}</p>
        {/*
          Replace this skeleton with a static file for each treatment:
          1. Create a new file in /pages/treatments/ (e.g. anti-wrinkle-one-area.tsx)
          2. Use the <TreatmentLayout> wrapper for consistent styling
          3. Add custom content, images, sections, etc. for this treatment
        */}
        <div className="bg-accent/10 rounded-xl p-6 text-center mt-8">
          <p className="text-muted-foreground">This is a skeleton. Create a static file for this treatment for full customization.</p>
        </div>
      </TreatmentLayout>
    </>
  );
} 
