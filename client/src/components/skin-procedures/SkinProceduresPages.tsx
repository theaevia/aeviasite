import type { FormEvent } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";

import SEO from "@/components/SEO";
import {
  buildSkinProcedureSchema,
  getSkinProcedureBySlug,
  getSkinProcedureGuideBySlug,
  SKIN_PROCEDURES,
  SKIN_PROCEDURES_HUB,
  SKIN_PROCEDURE_GUIDES,
  type SkinProcedure,
  type SkinProcedureGuide,
  type SkinProcedurePage,
} from "@/data/skinProcedures";
import { SKIN_CONSULTATION_URL } from "@/lib/bookingUrls";

const pageShell = "bg-[#fbf9f5] text-[#171512]";
const sectionHeading = "mt-4 text-balance text-[clamp(2.1rem,4vw,3.2rem)] font-medium leading-[1.04] tracking-[-0.03em]";

function PageMetadata({ page }: { page: SkinProcedurePage }) {
  const schema = buildSkinProcedureSchema(page);

  return (
    <>
      <SEO title={page.title} description={page.description} />
      <Helmet prioritizeSeoTags>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
    </>
  );
}

export function LaunchNotice() {
  return (
    <div className="border-y border-[#d9d0c4] bg-[#f2ede5]">
      <div className="mx-auto max-w-7xl px-6 py-3 text-center text-sm leading-relaxed text-[#554d44] lg:px-10">
        <strong className="font-medium text-[#302a24]">Launching in 2028.</strong>{" "}
        These procedures are planned for the future and are not currently bookable.
      </div>
    </div>
  );
}

export function SafetyCallout({ safety }: { safety?: SkinProcedure["safety"] }) {
  const title = safety?.title ?? "Changing, bleeding or irregular lesions need GP or NHS assessment first.";
  const body = safety?.body ?? "Aevia Skin does not treat suspicious lesions cosmetically. If a lesion has changed, is bleeding, looks irregular, is painful or you are unsure what it is, please use the GP or NHS route before considering a cosmetic procedure.";

  return (
    <aside className="border-l-4 border-[#806234] bg-[#f3ede4] px-6 py-6 sm:px-8" aria-labelledby="lesion-safety-title">
      <p className="eyebrow text-[#806234]">Important safety information</p>
      <h2 id="lesion-safety-title" className="mt-3 text-2xl font-medium leading-tight text-[#2e2822]">
        {title}
      </h2>
      <p className="mt-3 max-w-[72ch] leading-relaxed text-[#554d44]">
        {body}
      </p>
    </aside>
  );
}

function ImagePlaceholder({ alt }: { alt: string }) {
  return (
    <figure className="border border-dashed border-[#cfc4b5] bg-[#f2ede5] p-6 sm:p-8">
      <div
        role="img"
        aria-label={alt}
        className="flex min-h-52 items-end border border-[#d9d0c4] bg-[#e9e0d4] p-5 text-sm leading-relaxed text-[#625b52]"
      >
        Image placeholder: {alt}
      </div>
      <figcaption className="mt-3 text-xs leading-relaxed text-[#6b6258]">
        Image slot reserved for a clinically appropriate, non-promotional image.
      </figcaption>
    </figure>
  );
}

function RelatedLinks({ procedureSlugs, guideSlugs }: { procedureSlugs: string[]; guideSlugs: string[] }) {
  const procedures = procedureSlugs
    .map((slug) => getSkinProcedureBySlug(slug))
    .filter((procedure): procedure is SkinProcedure => Boolean(procedure));
  const guides = guideSlugs
    .map((slug) => getSkinProcedureGuideBySlug(slug))
    .filter((guide): guide is SkinProcedureGuide => Boolean(guide));

  return (
    <nav className="border-t border-[#cfc4b5] pt-8" aria-label="Related skin procedure pages">
      <p className="eyebrow">Continue reading</p>
      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        {procedures.map((procedure) => (
          <Link key={procedure.slug} href={procedure.path} className="border-b border-[#d9d0c4] pb-5 text-lg font-medium leading-tight underline decoration-[#c5a87a] underline-offset-4 hover:text-[#806234]">
            {procedure.name}
          </Link>
        ))}
        {guides.map((guide) => (
          <Link key={guide.slug} href={guide.path} className="border-b border-[#d9d0c4] pb-5 text-lg font-medium leading-tight underline decoration-[#c5a87a] underline-offset-4 hover:text-[#806234]">
            {guide.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

function WaitlistForm({ context }: { context: string }) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const values = new FormData(form);
    const name = String(values.get("name") || "").trim();
    const email = String(values.get("email") || "").trim();
    const interest = String(values.get("interest") || context);
    const message = String(values.get("message") || "").trim();
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Interested in: ${interest}`,
      message ? `Notes: ${message}` : "",
    ].filter(Boolean).join("\n");

    window.location.href = `mailto:hello@theaevia.co.uk?subject=${encodeURIComponent("Skin Procedures 2028 interest")}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="border border-[#cfc4b5] bg-white p-6 sm:p-8" aria-labelledby="interest-form-title">
      <p className="eyebrow">Planned for 2028</p>
      <h2 id="interest-form-title" className="mt-4 text-balance text-3xl font-medium leading-tight tracking-[-0.025em]">
        Join the list for the 2028 launch
      </h2>
      <p className="mt-4 max-w-[65ch] leading-relaxed text-[#5d564d]">
        Register your interest in the planned skin procedures service. Transparent protocol pricing
        will be published from launch. Submitting opens a pre-addressed email to the clinic so we can
        record your interest.
      </p>
      <form
        className="mt-7 grid gap-5 sm:grid-cols-2"
        action="mailto:hello@theaevia.co.uk?subject=Skin%20Procedures%202028%20interest"
        method="post"
        encType="text/plain"
        onSubmit={handleSubmit}
      >
        <label className="grid gap-2 text-sm font-medium text-[#302a24]">
          Name
          <input name="name" required autoComplete="name" className="min-h-12 border border-[#bfb3a3] bg-white px-3 text-base font-normal outline-none transition focus:border-[#806234] focus:ring-1 focus:ring-[#806234]" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-[#302a24]">
          Email address
          <input name="email" type="email" required autoComplete="email" className="min-h-12 border border-[#bfb3a3] bg-white px-3 text-base font-normal outline-none transition focus:border-[#806234] focus:ring-1 focus:ring-[#806234]" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-[#302a24]">
          Interest
          <select name="interest" defaultValue={context} className="min-h-12 border border-[#bfb3a3] bg-white px-3 text-base font-normal outline-none transition focus:border-[#806234] focus:ring-1 focus:ring-[#806234]">
            <option>Skin procedures overview</option>
            <option>Skin Tag Removal</option>
            <option>Cosmetic Mole Removal</option>
            <option>Cyst Removal</option>
            <option>Milia Removal</option>
            <option>Wart Removal</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-[#302a24]">
          Optional note
          <input name="message" className="min-h-12 border border-[#bfb3a3] bg-white px-3 text-base font-normal outline-none transition focus:border-[#806234] focus:ring-1 focus:ring-[#806234]" />
        </label>
        <div className="sm:col-span-2">
          <button type="submit" className="w-full border border-[#806234] bg-[#806234] px-6 py-3 text-base font-medium text-white transition hover:bg-[#6f542f] active:translate-y-px sm:w-auto">
            Join the list for the 2028 launch
          </button>
          <p className="mt-4 text-sm leading-relaxed text-[#625b52]">
            Already looking for guidance on current Aevia Skin treatments?{" "}
            <a href={SKIN_CONSULTATION_URL} className="font-medium text-[#473722] underline decoration-[#c5a87a] underline-offset-4 hover:text-[#806234]">
              Book a skin consultation
            </a>
          </p>
        </div>
      </form>
    </section>
  );
}

function FAQList({ faqs }: { faqs: SkinProcedure["faqs"] | SkinProcedureGuide["faqs"] }) {
  return (
    <section className="bg-white py-16 sm:py-24" aria-labelledby="skin-procedure-faqs">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.65fr_1.35fr] lg:px-10">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 id="skin-procedure-faqs" className={sectionHeading}>Before you decide.</h2>
        </div>
        <div className="border-t border-[#cfc4b5]">
          {faqs.map((faq) => (
            <details key={faq.question} className="group border-b border-[#cfc4b5] py-6">
              <summary className="flex cursor-pointer list-none justify-between gap-6 text-xl font-medium leading-snug marker:content-none">
                {faq.question}
                <span aria-hidden="true" className="text-2xl font-light transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="max-w-[65ch] pt-5 leading-relaxed text-[#5d564d]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SkinProceduresHubPage() {
  const page = SKIN_PROCEDURES_HUB;

  return (
    <>
      <PageMetadata page={page} />
      <article className={pageShell}>
        <LaunchNotice />
        <header className="border-b border-[#d9d0c4] bg-white py-12 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
            <div>
              <p className="eyebrow">Aevia Skin · planned for 2028</p>
              <h1 className="mt-5 max-w-[15ch] text-balance font-serif text-[clamp(2.7rem,4.8vw,4.8rem)] font-medium leading-[0.98] tracking-[-0.045em]">
                Doctor-led skin lesion removal in London, with diagnosis before a decision.
              </h1>
              <p className="mt-7 max-w-[62ch] text-lg leading-relaxed text-[#585149] sm:text-xl">{page.introduction}</p>
            </div>
            <ImagePlaceholder alt={page.imageAlt} />
          </div>
        </header>

        <section className="py-16 sm:py-24" aria-labelledby="doctor-led-matters">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.45fr_1.55fr] lg:px-10">
            <p className="eyebrow">Why doctor-led</p>
            <div>
              <h2 id="doctor-led-matters" className={sectionHeading}>For doctor-led lesion removal, assessment is the procedure before the procedure.</h2>
              <div className="mt-6 max-w-[70ch] space-y-5 leading-relaxed text-[#554d44]">
                <p>Minor skin surgery is not simply about technique. A doctor needs to establish whether a growth appears appropriate for a cosmetic pathway, whether there are reasons to defer it, and whether the trade-off of a scar or pigment change is acceptable.</p>
                <p>Dr Terrell Okhiria and Dr Renée Okhiria are GMC-registered doctors. The planned 2028 service will focus on selected benign lesion removal in London's King's Cross, with clear signposting to GP or NHS care whenever that is the safer route.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-24" aria-labelledby="planned-procedures">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <p className="eyebrow">The planned service</p>
              <h2 id="planned-procedures" className={sectionHeading}>Five focused procedures, each preceded by assessment.</h2>
            </div>
            <div className="mt-10 grid gap-x-10 gap-y-8 border-t border-[#cfc4b5] sm:grid-cols-2">
              {SKIN_PROCEDURES.map((procedure) => (
                <article key={procedure.slug} className="border-b border-[#cfc4b5] py-7">
                  <p className="text-sm text-[#806234]">Planned for 2028</p>
                  <h3 className="mt-2 text-2xl font-medium leading-tight">{procedure.name}</h3>
                  <p className="mt-3 max-w-[42ch] text-sm leading-relaxed text-[#5d564d]">{procedure.introduction}</p>
                  <Link href={procedure.path} className="mt-5 inline-block text-sm font-medium underline decoration-[#c5a87a] underline-offset-4 hover:text-[#806234]">
                    Read the planned care pathway
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SafetyCallout />
          </div>
        </section>

        <section className="bg-[#e9e0d4] py-16 sm:py-24" aria-labelledby="guides-title">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.45fr_1.55fr] lg:px-10">
            <p className="eyebrow text-[#806234]">Guides</p>
            <div>
              <h2 id="guides-title" className={sectionHeading}>A clearer route after a declined request.</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {SKIN_PROCEDURE_GUIDES.map((guide) => (
                  <Link key={guide.slug} href={guide.path} className="border border-[#c9bcab] bg-[#f8f4ed] p-6 transition hover:border-[#806234]">
                    <h3 className="text-2xl font-medium leading-tight">{guide.name}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-[#5d564d]">{guide.introduction}</p>
                    <span className="mt-5 inline-block text-sm font-medium underline decoration-[#c5a87a] underline-offset-4">Read the guide</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <WaitlistForm context="Skin procedures overview" />
          </div>
        </section>
      </article>
    </>
  );
}

export function SkinProcedurePage({ slug }: { slug: string }) {
  const procedure = getSkinProcedureBySlug(slug);

  if (!procedure) return null;

  return (
    <>
      <PageMetadata page={procedure} />
      <article className={pageShell}>
        <LaunchNotice />
        <header className="border-b border-[#d9d0c4] bg-white pb-14 pt-10 sm:pb-20 sm:pt-14 lg:pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Link href={SKIN_PROCEDURES_HUB.path} className="inline-flex text-sm text-[#6b6258] underline decoration-[#c5a87a] underline-offset-4 hover:text-[#806234]">
              All planned skin procedures
            </Link>
            <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div>
                <p className="eyebrow">{procedure.primaryKeyword}</p>
                <h1 className="mt-5 max-w-[15ch] text-balance font-serif text-[clamp(2.7rem,4.8vw,4.8rem)] font-medium leading-[0.98] tracking-[-0.045em]">
                  {procedure.name}
                </h1>
                <p className="mt-7 max-w-[62ch] text-lg leading-relaxed text-[#585149] sm:text-xl">{procedure.introduction}</p>
                <p className="mt-5 max-w-[60ch] text-sm leading-relaxed text-[#806234]">This service is planned for 2028 and is not currently bookable.</p>
              </div>
              <ImagePlaceholder alt={procedure.imageAlt} />
            </div>
          </div>
        </header>

        <section className="py-16 sm:py-24" aria-labelledby="what-is-it">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.45fr_1.55fr] lg:px-10">
            <p className="eyebrow">Understanding the concern</p>
            <div>
              <h2 id="what-is-it" className={sectionHeading}>What it is.</h2>
              <div className="mt-6 max-w-[70ch] space-y-5 leading-relaxed text-[#554d44]">
                {procedure.whatItIs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
          </div>
        </section>

        {procedure.additionalSection && (
          <section className="bg-white py-16 sm:py-24" aria-labelledby="additional-lesion-guidance">
            <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.45fr_1.55fr] lg:px-10">
              <p className="eyebrow">Diagnosis first</p>
              <div>
                <h2 id="additional-lesion-guidance" className={sectionHeading}>{procedure.additionalSection.title}</h2>
                <div className="mt-6 max-w-[70ch] space-y-5 leading-relaxed text-[#554d44]">
                  {procedure.additionalSection.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </div>
            </div>
          </section>
        )}

        <section className={`${procedure.additionalSection ? "" : "bg-white"} py-16 sm:py-24`} aria-labelledby="nhs-threshold">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.45fr_1.55fr] lg:px-10">
            <p className="eyebrow">Why the NHS may not remove it</p>
            <div>
              <h2 id="nhs-threshold" className={sectionHeading}>Cosmetic thresholds are different from medical need.</h2>
              <div className="mt-6 max-w-[70ch] space-y-5 leading-relaxed text-[#554d44]">
                {procedure.nhsContext.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24" aria-labelledby="methods-title">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <p className="eyebrow">Planned clinical approach</p>
              <h2 id="methods-title" className={sectionHeading}>Removal methods a doctor may use.</h2>
            </div>
            <div className="mt-10 grid gap-x-10 border-t border-[#cfc4b5] md:grid-cols-3">
              {procedure.methods.map((method) => (
                <div key={method.name} className="border-b border-[#cfc4b5] py-7">
                  <h3 className="text-xl font-medium leading-tight">{method.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5d564d]">{method.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#e9e0d4] py-16 sm:py-24" aria-labelledby="journey-title">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.45fr_1.55fr] lg:px-10">
            <p className="eyebrow text-[#806234]">What to expect</p>
            <div>
              <h2 id="journey-title" className={sectionHeading}>Consultation, histology where relevant, and aftercare.</h2>
              <ol className="mt-8 grid gap-6 md:grid-cols-2">
                {procedure.journey.map((step, index) => (
                  <li key={step.title} className="border-t border-[#bcae9d] pt-5">
                    <p className="text-sm font-medium text-[#806234]">0{index + 1}</p>
                    <h3 className="mt-2 text-xl font-medium leading-tight">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#5d564d]">{step.detail}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-8 max-w-[68ch] text-sm leading-relaxed text-[#554d44]">
                If you want guidance on current skin concerns while this service is being developed, you can{" "}
                <a href={SKIN_CONSULTATION_URL} className="font-medium underline decoration-[#806234] underline-offset-4 hover:text-[#806234]">book a skin consultation</a>.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-24" aria-labelledby="procedure-cost">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.45fr_1.55fr] lg:px-10">
            <p className="eyebrow">Costs</p>
            <div>
              <h2 id="procedure-cost" className={sectionHeading}>{procedure.cost.title}</h2>
              <p className="mt-6 max-w-[70ch] leading-relaxed text-[#554d44]">{procedure.cost.marketRange}</p>
              <p className="mt-5 max-w-[70ch] leading-relaxed text-[#554d44]">{procedure.cost.context}</p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SafetyCallout safety={procedure.safety} />
          </div>
        </section>

        <FAQList faqs={procedure.faqs} />

        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <RelatedLinks procedureSlugs={procedure.relatedProcedureSlugs} guideSlugs={procedure.relatedGuideSlugs} />
          </div>
        </section>

        <section className="bg-[#e9e0d4] py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <WaitlistForm context={procedure.name} />
          </div>
        </section>
      </article>
    </>
  );
}

export function SkinProcedureGuidePage({ slug }: { slug: string }) {
  const guide = getSkinProcedureGuideBySlug(slug);

  if (!guide) return null;

  return (
    <>
      <PageMetadata page={guide} />
      <article className={pageShell}>
        <LaunchNotice />
        <header className="border-b border-[#d9d0c4] bg-white pb-14 pt-10 sm:pb-20 sm:pt-14 lg:pt-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
            <div>
              <Link href={SKIN_PROCEDURES_HUB.path} className="inline-flex text-sm text-[#6b6258] underline decoration-[#c5a87a] underline-offset-4 hover:text-[#806234]">
                All planned skin procedures
              </Link>
              <p className="mt-8 eyebrow">Doctor-led guide</p>
              <h1 className="mt-5 max-w-[18ch] text-balance font-serif text-[clamp(2.7rem,4.8vw,4.8rem)] font-medium leading-[0.98] tracking-[-0.045em]">
                {guide.name}
              </h1>
              <p className="mt-7 max-w-[62ch] text-lg leading-relaxed text-[#585149] sm:text-xl">{guide.introduction}</p>
            </div>
            <ImagePlaceholder alt={guide.imageAlt} />
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-4xl space-y-16">
            {guide.sections.map((section) => (
              <section key={section.title}>
                <p className="eyebrow">A clearer decision</p>
                <h2 className={sectionHeading}>{section.title}</h2>
                <div className="mt-6 space-y-5 leading-relaxed text-[#554d44]">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </section>
            ))}
            <SafetyCallout />
            <RelatedLinks procedureSlugs={guide.relatedProcedureSlugs} guideSlugs={[]} />
          </div>
        </div>

        <FAQList faqs={guide.faqs} />

        <section className="bg-[#e9e0d4] py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <WaitlistForm context="Skin procedures overview" />
          </div>
        </section>
      </article>
    </>
  );
}
