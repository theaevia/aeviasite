import SEO from "@/components/SEO";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function QuizPlaceholder() {
  return (
    <>
      <SEO title="60-sec Skin Plan | The Aevia" description="Get a quick, personalised Skin Plan to help decide between anti-wrinkle treatment, skin boosters, or polynucleotides." />
      <div className="min-h-[60vh] flex items-center justify-center px-6 py-16 bg-secondary">
        <div className="max-w-lg w-full bg-white rounded-2xl border border-muted-foreground/20 p-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">60-sec Skin <span className="text-primary">Plan</span></h1>
          <p className="text-foreground/80 mb-6">Our guided quiz is coming very soon. In the meantime, you can book a free, doctor-led consult to get personalised advice.</p>
          <a href="/consultations?utm_source=tiktok&utm_medium=bio&utm_campaign=book" className={cn(buttonVariants({ variant: "default", size: "lg" }), "w-full")}>Book a free consult</a>
        </div>
      </div>
    </>
  );
}

