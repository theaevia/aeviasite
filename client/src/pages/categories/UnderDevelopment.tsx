import SEO from "@/components/SEO";
import { BookingButton } from "@/components/BookingButton";
import { Helmet } from 'react-helmet-async';

export default function UnderDevelopmentCategory() {
  return (
    <>
      <SEO title="Aevia Skin | Category In Development" description="This category page is under development. View all treatments and pricing on the Treatments page." />
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <section className="hero-gradient py-12 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl lg:text-5xl font-serif font-bold mb-4 leading-tight">
            This page is under development
          </h1>
          <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
            We’re putting the finishing touches on this category. In the meantime, you can view all available treatments and pricing.
          </p>
          <div className="flex justify-center">
            <BookingButton href="/treatments" variant="primary">
              View Treatments & Pricing
            </BookingButton>
          </div>
        </div>
      </section>
    </>
  );
}
