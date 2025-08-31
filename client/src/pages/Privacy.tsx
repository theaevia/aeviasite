import SEO from "@/components/SEO";
import { Link } from "wouter";

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy & Cookies | The Aevia"
        description="Read The Aevia's Privacy Policy and Cookie Policy. Learn what data we collect, how it's used, and your rights."
        image="/aevia-logo.png"
      />

      <div className="min-h-screen">
        {/* Hero */}
        <section className="bg-secondary py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4">Privacy & Cookies</h1>
            <p className="text-lg text-foreground/70 leading-relaxed">
              How we collect, use and protect your information, and how we use cookies.
            </p>
            <p className="text-sm text-foreground/60 mt-3">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-6">
            <div className="bg-secondary rounded-xl p-4 md:p-6">
              <p className="text-sm text-foreground/60">
                Looking for our terms? <Link href="/terms" className="text-primary underline underline-offset-4">View Terms & Conditions</Link>.
              </p>
            </div>

            <article className="privacy-article privacy-links prose prose-neutral max-w-none prose-sm lg:prose-base prose-p:my-2 prose-ul:my-2 prose-li:my-1 prose-h2:mt-6 prose-h2:mb-2 prose-h3:mt-4 prose-h3:mb-1">
              <h2>1) Who we are and how to contact us</h2>
              <ul>
                <li><strong>Controller:</strong> The Aevia Group LTD ("The Aevia", "we", "us").</li>
                <li><strong>Registered address:</strong> 5 Brayford Square, London E1 0SG, United Kingdom</li>
                <li><strong>Company number:</strong> 16464961</li>
                <li><strong>Email:</strong> <a href="mailto:privacy@theaevia.co.uk">privacy@theaevia.co.uk</a></li>
              </ul>

              <h3>Scope</h3>
              <p>This Notice applies when you:</p>
              <ul>
                <li>
                  Visit <a href="https://www.theaevia.co.uk" target="_blank" rel="noopener noreferrer">theaevia.co.uk</a>,
                  <a href="https://quiz.theaevia.co.uk" target="_blank" rel="noopener noreferrer" className="ml-1">quiz.theaevia.co.uk</a>, or pages that link here
                </li>
                <li>Book, pay for, or receive services from Aevia Skin (doctor‑led medical aesthetics) or Aevia Mind (coaching)</li>
                <li>Engage with us by email, phone, WhatsApp, social media, or at events</li>
              </ul>
              <p>If you do not agree with this Notice, please do not use our services.</p>

              <h2>2) The information we collect</h2>
              <p>We collect information in the following categories:</p>

              <h3>a) Identity & contact</h3>
              <p>Name, email, phone, postal address, marketing preferences, age confirmation (18+).</p>

              <h3>b) Bookings, payments & transactions</h3>
              <p>Appointment history, services booked, payment status and references (we do not store full card numbers). In‑clinic payments may be processed via Square Appointments; online consults may be scheduled via Calendly.</p>

              <h3>c) Communications</h3>
              <p>Emails, contact forms, WhatsApp messages/check‑ins, consultation correspondence, and related metadata.</p>

              <h3>d) Website & app usage (cookies/analytics)</h3>
              <p>IP address, device/browser type, pages viewed, time on site, and similar analytics captured via cookies/pixels and tools such as Google Analytics (non‑essential cookies only with consent). See our Cookie Policy.</p>

              <h3>e) Aevia Skin</h3>
              <p>Medical history, medications, allergies, previous aesthetic procedures, relevant lifestyle information, clinical assessments, treatment plans and consents, batch numbers, aftercare notes, adverse event records, and clinical photographs (retained as part of the medical record). Marketing use of photos (e.g., website/Instagram) is separately consented and optional.</p>

              <h3>f) Aevia Mind</h3>
              <p>Session notes, goals, questionnaires, and any personal information you choose to share. If you disclose health‑related information, we will seek explicit consent to process it.</p>

              <h3>g) Sources of data</h3>
              <ul>
                <li>You (forms, emails, quizzes, during appointments)</li>
                <li>Automated via cookies/analytics (with consent)</li>
                <li>Service providers acting on our behalf (bookings, email, forms)</li>
                <li>Referrers/clinicians: where you explicitly ask us to liaise with a practitioner, we may receive limited information needed for your care.</li>
              </ul>
              <p>We do not intentionally collect data from children. Our services are 18+.</p>

              <h2>3) Why we use your data and the legal bases</h2>
              <p>We only process your data when lawful and necessary. Below are the purposes and legal bases (UK GDPR Articles 6 & 9):</p>
              <div className="not-prose overflow-x-auto border rounded-lg">
                <table className="w-full text-left text-sm">
                  <thead className="bg-secondary/60">
                    <tr>
                      <th className="p-2 border-b">Purpose</th>
                      <th className="p-2 border-b">Examples</th>
                      <th className="p-2 border-b">Legal basis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="align-top">
                      <td className="p-2 border-b">Provide and manage services</td>
                      <td className="p-2 border-b">Bookings, consultations, treatment or coaching delivery, payments, appointment reminders, aftercare messages</td>
                      <td className="p-2 border-b">Contract (Art 6(1)(b)); Legitimate interests (reminders & continuity of care)</td>
                    </tr>
                    <tr className="align-top">
                      <td className="p-2 border-b">Clinical records (Aevia Skin)</td>
                      <td className="p-2 border-b">Assess suitability; record treatments, consents, batch numbers; safety follow‑up</td>
                      <td className="p-2 border-b">Special‑category health data for care: Art 9(2)(h) (healthcare) under professional secrecy; plus Art 6(1)(b)/(f)</td>
                    </tr>
                    <tr className="align-top">
                      <td className="p-2 border-b">Coaching notes (Aevia Mind)</td>
                      <td className="p-2 border-b">Session notes/goals; if health info is disclosed</td>
                      <td className="p-2 border-b">Contract (Art 6(1)(b)); Explicit consent for special‑category data (Art 9(2)(a))</td>
                    </tr>
                    <tr className="align-top">
                      <td className="p-2 border-b">Safety & safeguarding</td>
                      <td className="p-2 border-b">Managing complications; preventing serious harm</td>
                      <td className="p-2 border-b">Vital interests (Art 6(1)(d)); special category: Art 9(2)(c)</td>
                    </tr>
                    <tr className="align-top">
                      <td className="p-2 border-b">Legal & compliance</td>
                      <td className="p-2 border-b">HMRC/company law; handling complaints; regulatory requests; insurance/defence</td>
                      <td className="p-2 border-b">Legal obligation (Art 6(1)(c)); Legitimate interests (defence of claims)</td>
                    </tr>
                    <tr className="align-top">
                      <td className="p-2 border-b">Analytics & site improvement</td>
                      <td className="p-2 border-b">GA4 or similar; performance/security</td>
                      <td className="p-2 border-b">Consent (cookies/PECR) for non‑essential tools</td>
                    </tr>
                    <tr className="align-top">
                      <td className="p-2 border-b">Marketing (email/SMS)</td>
                      <td className="p-2 border-b">News, offers, nurture content, clinic updates</td>
                      <td className="p-2 border-b">Consent (opt‑in), or PECR soft opt‑in for existing customers for similar services; opt‑out anytime</td>
                    </tr>
                    <tr className="align-top">
                      <td className="p-2 border-b">Advertising & audiences</td>
                      <td className="p-2 border-b">Pixels, custom/remarketing audiences</td>
                      <td className="p-2 border-b">Consent for ad cookies; Legitimate interests for minimal audience matching where permitted; opt‑out anytime</td>
                    </tr>
                    <tr className="align-top">
                      <td className="p-2">Quality & training</td>
                      <td className="p-2">Internal audits, protocol improvement</td>
                      <td className="p-2">Legitimate interests</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>We do not make decisions producing legal or similarly significant effects solely by automated means. We may segment audiences for relevance; you can object at any time.</p>

              <h2>4) Who we share data with</h2>
              <p>We use providers under data‑processing agreements. They act on our instructions and implement safeguards. Some also act as independent controllers for their own purposes — see their notices.</p>
              <h3>Core processors</h3>
              <ul>
                <li><strong>Square</strong> – bookings, payments, notifications (clinic)</li>
                <li><strong>Calendly</strong> – scheduling virtual consultations</li>
                <li><strong>Mailchimp (Intuit)</strong> – email marketing & subscriber management</li>
                <li><strong>Jotform</strong> – intake forms and questionnaires</li>
                <li><strong>Google</strong> – Analytics (with consent), reCAPTCHA</li>
                <li><strong>Railway</strong> – for site hosting</li>
                <li><strong>Google Workspace</strong> – business email/document storage</li>
                <li><strong>Xero</strong> – accounting records; <strong>Monzo Business</strong> – banking data</li>
              </ul>
              <p><strong>Other disclosures:</strong> professional advisers (lawyers, accountants), insurers/indemnity providers, prospective buyers in a business reorganisation, authorities where required by law, and third parties with your consent (e.g., sharing information with a GP upon your request).</p>
              <p><strong>We do not sell your personal data.</strong></p>

              <h2>5) International transfers</h2>
              <p>Some providers store/process data outside the UK (e.g., the EEA/US). Where we make a restricted transfer, we use safeguards recognised by UK law (e.g., UK IDTA or EU SCCs with UK Addendum) and assess the recipient jurisdiction’s protections. Details are available on request.</p>

              <h2>6) How long we keep your data</h2>
              <p>We retain data only as long as necessary for the purposes above and to meet legal/insurance requirements. Typical periods are:</p>
              <ul>
                <li><strong>Aevia Skin clinical records:</strong> 8 years after last treatment for adults (longer if required for defence of claims).</li>
                <li><strong>Clinical photography (in record):</strong> retained with the clinical record. <em>Marketing copies</em> are kept until consent is withdrawn or material is retired.</li>
                <li><strong>Aevia Mind coaching notes:</strong> up to 3 years after last session unless longer is required for legal/defence reasons.</li>
                <li><strong>Financial/transaction records:</strong> 6 years (HMRC).</li>
                <li><strong>Marketing preferences & email engagement:</strong> until you unsubscribe or after 24 months of inactivity, whichever is sooner.</li>
              </ul>
              <p>When data is no longer needed, we delete or anonymise it. Backups are segregated until overwritten.</p>

              <h2>7) Cookies and similar technologies</h2>
              <p>We use essential cookies for security and basic functions and, with your consent, non‑essential cookies for analytics/advertising. Manage preferences via our Cookie Banner and Cookie Policy (explains categories, providers, and retention). Browser settings may also block cookies; essential features may be affected.</p>
              <p><strong>Do‑Not‑Track:</strong> there is no common DNT standard; we do not currently respond to DNT signals.</p>

              <h2>8) Your privacy rights</h2>
              <p>Subject to law, you can:</p>
              <ul>
                <li>Access a copy of your data; correct inaccuracies</li>
                <li>Delete data (where no longer needed or where consent is withdrawn)</li>
                <li>Restrict or object to processing (including profiling/marketing)</li>
                <li>Port data you provided in a machine‑readable format</li>
                <li>Withdraw consent where relied upon (does not affect prior processing)</li>
              </ul>
              <p>We respond within one month. We may request identification to verify your request. You can also complain to the ICO at <a href="https://ico.org.uk" target="_blank" rel="noreferrer">ico.org.uk</a> if you are unhappy with our handling.</p>
              <p><strong>How to exercise rights:</strong> email <a href="mailto:privacy@theaevia.co.uk">privacy@theaevia.co.uk</a>.</p>

              <h2>9) Security</h2>
              <p>We apply technical and organisational measures appropriate to the risks, including: access controls, encryption in transit, device management, role‑based access, data minimisation, staff confidentiality, and secure disposal. No system is perfectly secure; if we suspect a personal‑data breach that risks your rights, we will act in line with legal requirements.</p>

              <h2>10) Photography, testimonials & social media</h2>
              <p>Clinical photos are part of your medical record (Aevia Skin). Marketing use of any image/testimonial is optional and subject to separate documented consent; you may withdraw at any time for future use.</p>
              <p>If you message us via WhatsApp/Instagram/other platforms, those services also process your data under their own terms. Avoid sending highly sensitive information over DMs.</p>

              <h2>11) Third‑party links</h2>
              <p>Our website may link to third‑party sites (e.g., articles, partners). We are not responsible for their content or privacy practices. Check their privacy notices.</p>

              <h2>12) Changes to this Notice</h2>
              <p>We may update this Notice from time to time to remain accurate and compliant. The new version will state the effective date; we will provide additional notice of material changes where appropriate.</p>

              <h2>13) Contact us</h2>
              <p>The Aevia Group LTD<br />5 Brayford Square, London E1 0SG, United Kingdom<br />Email: <a href="mailto:privacy@theaevia.co.uk">privacy@theaevia.co.uk</a></p>

              
            </article>
          </div>
        </section>
      </div>
    </>
  );
}
