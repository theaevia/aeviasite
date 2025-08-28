
import SEO from "@/components/SEO";

export default function MicroneedlingPeelsCategoryPage() {
  const pageTitle = "Microneedling & Peels";
  const pageDescription = "Treatments coming soon. Be first to know when microneedling and medical peels launch at Aevia Skin.";

  return (
    <>
      <SEO title={`${pageTitle} – Coming Soon | Aevia Skin`} description={pageDescription} />
      <section className="hero-gradient min-h-[calc(100vh-var(--header-h,80px)-var(--footer-h,280px))] box-border py-12 lg:py-20 flex items-center">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl lg:text-5xl font-serif font-bold mb-4 leading-tight">
            {pageTitle}
          </h1>
          <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
            {pageDescription}
          </p>
          <div className="flex flex-col items-center w-full sm:w-auto">
            <a
              href="mailto:hello@theaevia.co.uk?subject=Microneedling%20%26%20Peels%20Waitlist"
              className="block px-6 py-3 rounded-xl font-medium text-base text-center smooth-transition shadow-lg border-2 border-primary transition-colors transition-shadow hover:shadow-xl bg-primary text-primary-foreground hover:bg-white hover:text-primary hover:border-primary border-primary w-full sm:w-auto"
            >
              Join Waitlist
            </a>
            <p className="text-sm text-foreground/70 mt-2">We’ll notify you as soon as slots open</p>
          </div>
        </div>
      </section>
    </>
  );
}
