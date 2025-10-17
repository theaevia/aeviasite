import { Link } from "wouter";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import SEO from "@/components/SEO";

export default function Reviews() {
  return (
    <>
      <SEO 
        title="Client Reviews - The Aevia"
        description="Read authentic reviews from our clients about their experiences with our medical aesthetics treatments and performance coaching at The Aevia clinic in Kings Cross."
        image="/hero_images/reviews-hero.webp"
      />
      <div className="min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">Client <span className="text-primary">Stories</span></h1>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Real transformations from our community. Each story represents a unique journey of growth and confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Featured Reviews */}
            <TestimonialCard
              name="Joan H."
              service="Aevia Skin"
              quote="It's been a few weeks since I had my fantastic experience at The Aevia with Dr Renée and Dr Terrell. They addressed the dark circles under my eyes with polynucleotide injections, and the results have been magical."
              image=""
              likes={127}
              comments={8}
              reviewUrl="https://maps.app.goo.gl/jpQNgXg92eiBesPD8"
            />

            <TestimonialCard
              name="Michelle C."
              service="Aevia Skin"
              quote="Thank you once again to both doctors. Really satisfied with everything. I will most definitely highly recommend you to my friends and colleagues. I look forward to my next session with you."
              image=""
              likes={89}
              comments={12}
              reviewUrl="https://maps.app.goo.gl/Cqjt1Rcym1uQ9ByB6"
            />

            <TestimonialCard
              name="Maria A."
              service="Aevia Skin"
              quote="A great experience at The Aevia! Dr Terrell is so friendly and explains everything thoroughly! Will definitely be back again!"
              image=""
              likes={203}
              comments={24}
              reviewUrl="https://maps.app.goo.gl/HVS56S8yDgGuCeqC9"
            />

            <TestimonialCard
              name="Sarah M."
              service="Aevia Skin"
              quote="The skin consultation was incredibly thorough. Dr. Renee took the time to understand my concerns and created a personalised plan."
              image=""
              likes={156}
              comments={15}
              reviewUrl="https://maps.app.goo.gl/your-review-id"
            />

            <TestimonialCard
              name="David L."
              service="Aevia Mind"
              quote="The performance coaching sessions have been transformative. I've gained clarity in my career decisions and personal life."
              image=""
              likes={92}
              comments={10}
              reviewUrl="https://maps.app.goo.gl/your-review-id"
            />

            <TestimonialCard
              name="Sophie T."
              service="Both Services"
              quote="Starting with skin treatments and then adding coaching was the perfect combination. The results have been life-changing."
              image=""
              likes={178}
              comments={20}
              reviewUrl="https://maps.app.goo.gl/your-review-id"
            />

            {/* Additional Reviews */}
            <TestimonialCard
              name="James W."
              service="Aevia Mind"
              quote="The strategic planning sessions have helped me achieve goals I never thought possible. Dr. Manu's approach is both practical and inspiring."
              image=""
              likes={145}
              comments={18}
              reviewUrl="https://maps.app.goo.gl/your-review-id"
            />

            <TestimonialCard
              name="Emma P."
              service="Aevia Skin"
              quote="The anti-wrinkle treatment was subtle yet effective. I look refreshed but still like myself. Exactly what I wanted!"
              image=""
              likes={167}
              comments={22}
              reviewUrl="https://maps.app.goo.gl/your-review-id"
            />

            <TestimonialCard
              name="Michael R."
              service="Both Services"
              quote="The holistic approach of combining skin treatments with mindset coaching has been incredible. I feel like a new person."
              image=""
              likes={189}
              comments={25}
              reviewUrl="https://maps.app.goo.gl/your-review-id"
            />
          </div>

          <div className="text-center">
            <Link href="/">
              <Button variant="outline" className="group">
                <svg
                  className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
} 