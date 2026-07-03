import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Link } from "wouter";

import SEO from "@/components/SEO";
import { testimonials } from "@/data/testimonials";

const googleListingUrl = "https://www.google.com/maps/search/?api=1&query=Aevia+Skin%2C+260+Pentonville+Road%2C+London";

const reviewDateFormatter = new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric", timeZone: "UTC" });

export default function Reviews() {
  return (
    <>
      <SEO
        title="Client Reviews | Aevia Skin King's Cross"
        description="Read verified Google reviews from Aevia Skin clients and open our live Google listing for the complete, current review record."
        image="/hero_images/reviews-hero.webp"
      />
      <article className="min-h-screen bg-[#fbf9f5] text-[#171512]">
        <header className="border-b border-[#d9d0c4] bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#6b6258] underline decoration-[#c5a87a] underline-offset-4">
              <ArrowLeft className="h-4 w-4" /> Back to home
            </Link>
            <div className="mt-10 grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
              <div>
                <p className="eyebrow">Google reviews</p>
                <h1 className="page-title mt-5 max-w-[10ch]">What clients say.</h1>
              </div>
              <div className="lg:justify-self-end">
                <div className="flex items-center gap-3">
                  <div className="flex" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-5 w-5 fill-[#9a7742] text-[#9a7742]" />)}
                  </div>
                  <span className="font-mono text-sm">5.0</span>
                </div>
                <p className="mt-4 max-w-[52ch] leading-relaxed text-[#5d564d]">Every review shown below links to its original Google review. Open the live listing for the complete and most current record.</p>
                <a href={googleListingUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-medium underline decoration-[#c5a87a] underline-offset-4">See all reviews on Google <ArrowRight className="h-4 w-4" /></a>
              </div>
            </div>
          </div>
        </header>

        <section className="py-16 sm:py-24" aria-labelledby="verified-reviews">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <h2 id="verified-reviews" className="sr-only">Verified client reviews</h2>
            <div className="grid gap-px bg-[#d8cfc2] md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <a key={testimonial.name} href={testimonial.reviewUrl} target="_blank" rel="noopener noreferrer" className="group flex min-h-[23rem] flex-col bg-white p-8 transition-colors hover:bg-[#f2ede5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#806234]">
                  <div className="flex" aria-label={`${testimonial.rating} out of 5 stars`}>{Array.from({ length: testimonial.rating }).map((_, index) => <Star key={index} className="h-4 w-4 fill-[#9a7742] text-[#9a7742]" />)}</div>
                  {testimonial.quote ? <blockquote className="mt-8 font-serif text-xl leading-relaxed text-[#322e29]">“{testimonial.quote}”</blockquote> : <p className="mt-8 font-serif text-xl leading-relaxed text-[#6a6259]">Five-star rating with no written comment.</p>}
                  <p className="mt-auto flex items-center justify-between gap-4 pt-10 text-sm font-medium text-[#806234]">
                    <span>{testimonial.name}<span className="block pt-1 text-xs font-normal text-[#6a6259]">{reviewDateFormatter.format(new Date(`${testimonial.date}T00:00:00Z`))} · Google review</span></span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#d9d0c4] bg-[#1d1b18] py-16 text-white sm:py-24" aria-labelledby="live-google-listing">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div><p className="text-xs font-medium uppercase tracking-[0.28em] text-[#d2b582]">Live listing</p><h2 id="live-google-listing" className="mt-4 text-4xl font-medium tracking-[-0.025em] text-white sm:text-5xl">The current Google record.</h2></div>
              <a href={googleListingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm underline decoration-[#d2b582] underline-offset-4">Open in Google Maps <ArrowRight className="h-4 w-4" /></a>
            </div>
            <div className="overflow-hidden border border-white/20 bg-white">
              <iframe title="Aevia Skin live Google business listing and reviews" src="https://www.google.com/maps?q=Aevia+Skin,+260+Pentonville+Road,+London&output=embed" className="h-[28rem] w-full border-0" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
