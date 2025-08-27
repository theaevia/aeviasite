import SEO from "@/components/SEO";

export default function Legal() {
  return (
    <>
      <SEO
        title="Legal | Privacy, Cookies, Terms | The Aevia"
        description="Read The Aevia's privacy policy, cookie policy, and terms & conditions."
        image="/aevia-logo.png"
      />

      <div className="min-h-screen">
        {/* Hero */}
        <section className="bg-secondary py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4">Legal</h1>
            <p className="text-lg text-foreground/70 leading-relaxed">
              This page contains our Privacy & Cookies information and our Terms & Conditions.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-16">
            {/* Quick links */}
            <nav aria-label="Legal sections" className="bg-secondary rounded-xl p-4 md:p-6">
              <p className="text-sm text-foreground/60 mb-3">Jump to:</p>
              <ul className="flex flex-wrap gap-3">
                <li>
                  <a href="#privacy" className="text-sm px-3 py-2 rounded-md bg-white border hover:bg-muted smooth-transition">
                    Privacy & Cookies
                  </a>
                </li>
                <li>
                  <a href="#terms" className="text-sm px-3 py-2 rounded-md bg-white border hover:bg-muted smooth-transition">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </nav>

            {/* Privacy & Cookies */}
            <article id="privacy" className="scroll-mt-24">
              <header className="mb-6">
                <h2 className="text-3xl font-serif font-bold">Privacy & Cookies</h2>
                <p className="text-sm text-foreground/60">Last updated: {new Date().toLocaleDateString()}</p>
              </header>

              <div className="prose prose-neutral max-w-none">
                <p className="text-foreground/70">
                  This section is a placeholder for your Privacy Policy and Cookie Policy. Replace the example
                  headings and paragraphs below with your actual policies.
                </p>

                <h3>Information We Collect</h3>
                <p>
                  Describe the personal information you collect (e.g., contact details, medical information for consultations, usage data), how it is collected, and why.
                </p>

                <h3>How We Use Your Information</h3>
                <p>
                  Explain the purposes (e.g., providing services, bookings, communications, analytics) and the legal bases where relevant.
                </p>

                <h3>Data Sharing and Processors</h3>
                <p>
                  List any trusted third parties or processors you use (e.g., booking platforms, payment providers, analytics) and why data may be shared with them.
                </p>

                <h3>Data Retention</h3>
                <p>
                  State how long you retain personal data and the criteria used to determine retention periods.
                </p>

                <h3>Your Rights</h3>
                <p>
                  Summarise user rights under applicable law (e.g., access, rectification, erasure, restriction, portability, objection) and how to exercise them.
                </p>

                <h3>Contact</h3>
                <p>
                  Provide contact details for privacy enquiries: email, postal address, and if applicable a data protection officer contact.
                </p>

                <h3>Cookies</h3>
                <p>
                  Outline the types of cookies used (essential, performance, analytics, marketing), their purposes, and how users can manage preferences or opt out.
                </p>
              </div>
            </article>

            {/* Terms & Conditions */}
            <article id="terms" className="scroll-mt-24">
              <header className="mb-6">
                <h2 className="text-3xl font-serif font-bold">Terms & Conditions</h2>
                <p className="text-sm text-foreground/60">Last updated: {new Date().toLocaleDateString()}</p>
              </header>

              <div className="prose prose-neutral max-w-none">
                <p className="text-foreground/70">
                  This section is a placeholder for your Terms & Conditions. Replace the example
                  headings and paragraphs below with your actual terms.
                </p>

                <h3>Clinic Services</h3>
                <p>
                  Describe eligibility, consultation requirements, and medical consent. Include information on treatment suitability and aftercare responsibilities.
                </p>

                <h3>Bookings, Cancellations and Refunds</h3>
                <p>
                  Provide your booking policy, notice periods, fees, and any refund or rescheduling terms.
                </p>

                <h3>Pricing and Payment</h3>
                <p>
                  Explain how prices are displayed, what they include/exclude, and accepted payment methods.
                </p>

                <h3>Liability</h3>
                <p>
                  State any limitations or disclaimers of liability to the extent permitted by law.
                </p>

                <h3>Intellectual Property</h3>
                <p>
                  Clarify ownership of content, trademarks, images, and usage permissions.
                </p>

                <h3>Governing Law</h3>
                <p>
                  Specify the jurisdiction and governing law applicable to the terms.
                </p>
              </div>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}

