import SEO from "@/components/SEO";
import { Link } from "wouter";

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms & Conditions | The Aevia"
        description="Read The Aevia's Terms & Conditions covering bookings, cancellations, pricing, liability, and more."
        image="/aevia-logo.png"
      />

      <div className="min-h-screen">
        {/* Hero */}
        <section className="bg-secondary py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4">Terms & Conditions</h1>
            <p className="text-lg text-foreground/70 leading-relaxed">
              The terms that govern using our website, services and bookings.
            </p>
            <p className="text-sm text-foreground/60 mt-3">Last updated: 27 August 2025</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6 space-y-6">
            <div className="bg-secondary rounded-xl p-4 md:p-6">
              <p className="text-sm text-foreground/60">
                Looking for our privacy policy? <Link href="/privacy" className="text-primary underline underline-offset-4">View Privacy & Cookies</Link>.
              </p>
            </div>

            <article className="privacy-article prose prose-neutral max-w-none prose-sm lg:prose-base prose-p:my-2 prose-ul:my-2 prose-li:my-1 prose-h2:mt-6 prose-h2:mb-2 prose-h3:mt-4 prose-h3:mb-1">
              <h2>Terms of Use & Client Service Terms</h2>
              <p>
                These Terms set out the basis on which The Aevia Group LTD ("The Aevia", "we", "us", "our") provides its services and the terms for using our websites.
                By booking, purchasing, or using any of our services (including Aevia Skin and Aevia Mind) or by accessing
                <a href="https://www.theaevia.co.uk" target="_blank" rel="noopener noreferrer" className="ml-1">theaevia.co.uk</a>
                {" "}or{" "}
                <a href="https://quiz.theaevia.co.uk" target="_blank" rel="noopener noreferrer" className="ml-1">quiz.theaevia.co.uk</a>
                {" "}(together, the "Sites"), you agree to these Terms. If you do not agree, please do not use our services or Sites.
              </p>

              <h2>1) Who we are</h2>
              <ul>
                <li><strong>Legal entity:</strong> The Aevia Group LTD, 5 Brayford Square, London E1 0SG, United Kingdom.</li>
                <li><strong>Trading names:</strong> <Link href="/skin" className="text-primary underline underline-offset-4">Aevia Skin</Link> (medical aesthetics), <Link href="/mind" className="text-primary underline underline-offset-4">Aevia Mind</Link> (coaching).</li>
                <li><strong>Clinic location(s):</strong> Currently operating from <Link href="/clinic" className="text-primary underline underline-offset-4">Minsony, King’s Cross, London</Link> (by appointment only).</li>
                <li><strong>Contact:</strong> <a href="mailto:hello@theaevia.co.uk">hello@theaevia.co.uk</a> • <a href="mailto:privacy@theaevia.co.uk">privacy@theaevia.co.uk</a></li>
              </ul>

              <h2>2) Scope & key definitions</h2>
              <ul>
                <li><strong>Client:</strong> the individual booking or receiving services.</li>
                <li><strong>Services:</strong> consultations, medical aesthetic treatments, coaching, and any related offerings.</li>
                <li><strong>Appointment:</strong> a scheduled time for consultation or treatment, whether in person or virtual.</li>
                <li><strong>Packages/Memberships:</strong> any prepaid bundles, plans, or subscription-style arrangements offered by us.</li>
                <li><strong>Retail Products:</strong> skincare or other physical items sold by us.</li>
              </ul>

              <h2>3) Eligibility & important medical information</h2>
              <ul>
                <li>Services are for adults (18+) only. Photo ID may be required.</li>
                <li>Medical aesthetics are provided by qualified clinicians. Suitability is not guaranteed and depends on clinical assessment at your in-person appointment. We may decline treatment where not medically appropriate or where contra‑indicated (e.g., allergy, pregnancy/breast‑feeding, infection, recent procedures).</li>
                <li>Injectables and certain treatments are Prescription‑Only Medicines (POMs) in the UK and cannot be advertised or provided without appropriate assessment and, where required, prescription by a prescriber.</li>
                <li><strong>Emergencies:</strong> our services are not for medical emergencies. Dial 999 or contact NHS 111 where appropriate.</li>
              </ul>

              <h2>4) Consultations, bookings & deposits</h2>
              <ul>
                <li><strong>Booking system:</strong> Appointments are managed via our scheduling partners (e.g., Fresha for clinic bookings, Calendly for virtual consultations). Separate platform terms may also apply.</li>
                <li><strong>Consultation fees (typical):</strong> free virtual; £50 in‑clinic. If you proceed to treatment within the stated period, we redeem this fee against your first treatment (details confirmed at booking).</li>
                <li><strong>Pre‑treatment review:</strong> We may require forms, photos, ID verification, or additional medical information in advance. Please complete these promptly; failure may lead to rescheduling or cancellation.</li>
                <li><strong>Deposits:</strong> Some services may require a deposit at the time of booking. Deposits are generally applied to your treatment on the day. If you are clinically unsuitable, the consultation fee covers the professional assessment; any separate treatment deposit will be refunded.</li>
                <li><strong>Right to refuse:</strong> We reserve the right to decline bookings or treatment in the interest of safety, professional standards, or where behaviour is abusive or inappropriate.</li>
              </ul>

              <h2>5) Cancellations, late arrivals & no‑shows</h2>
              <ul>
                <li><strong>Cooling‑off for distance purchases:</strong> If you purchase a service package or membership online (not yet performed), you have a 14‑day cooling‑off period under UK consumer law. If you request we begin services within that period, you acknowledge your right to cancel may be lost once the service is fully performed, and we may deduct a proportionate amount for any services already provided.</li>
                <li><strong>Appointment cancellations:</strong> Please give at least 48 hours’ notice to cancel or reschedule. If you cancel or reschedule less than 48 hours before your appointment and we have already incurred non-refundable room/equipment charges that cannot reasonably be recovered, we reserve the right to charge you an amount equal to the actual, reasonable cost incurred (for example: third-party room hire, agency or clinician call-out fee).</li>
                <li><strong>Less than 24 hours’ notice:</strong> we may charge 50% of the appointment fee or retain your deposit.</li>
                <li><strong>No‑show or arrival &gt;15 minutes late</strong> (at clinician’s discretion): we may charge 100% of the appointment fee.</li>
                <li><strong>Extenuating circumstances:</strong> if you experience an emergency, let us know as soon as possible; we’ll act reasonably.</li>
              </ul>

              <h2>6) Prices, payment & VAT</h2>
              <p>Prices for services and products are shown at booking or point of sale and may change from time to time. Quotations are valid at the time given.</p>
              <p><strong>Payment methods:</strong> as stated in our booking system or in clinic (e.g., card payments; we do not accept cash in some settings).</p>
              <p><strong>VAT:</strong> We may or may not be VAT‑registered at any given time; if VAT applies, prices will state whether VAT is included.</p>
              <p><strong>Promotions/introductory offers:</strong> are time‑limited, subject to availability, and cannot be combined unless explicitly stated.</p>

              <h2>7) Results, risks & aftercare (Aevia Skin)</h2>
              <p>Individual results vary. Outcome depends on your anatomy, medical history, and adherence to aftercare.</p>
              <p>Risks & side effects (non‑exhaustive) include redness, swelling, bruising, infection, asymmetry, vascular occlusion (rare), pain, and other complications specific to the chosen treatment. Your clinician will discuss risks, benefits, alternatives, batch numbers (where relevant), and obtain informed consent before proceeding.</p>
              <p><strong>Follow‑up/adjustments:</strong> Some treatments may include a review window; adjustments are at the clinician’s discretion and subject to medical need and the treatment protocol.</p>
              <p>Maintenance intervals are estimates only; we do not guarantee duration.</p>

              <h2>8) Coaching service notes (Aevia Mind)</h2>
              <p>Coaching supports clarity, performance, and wellbeing but is not a substitute for medical or mental‑health care. We do not diagnose conditions or prescribe. If we believe another service is more appropriate, we may signpost you.</p>
              <p>If you disclose health information during coaching, we will handle it per our <Link href="/privacy" className="text-primary underline underline-offset-4">Privacy Policy</Link> and may request explicit consent to process special‑category data.</p>

              <h2>9) Refunds & remedies</h2>
              <p><strong>Services:</strong> Once a service has been performed, refunds are not provided on the basis of dissatisfaction with results alone. We are committed to high standards; if you believe our service has not been delivered with reasonable care and skill, please raise a complaint (Section 15). Where appropriate, we will offer a remedy in line with UK consumer law (e.g., re‑performance or price reduction).</p>
              <p><strong>Retail products:</strong> For faulty or misdescribed items, statutory remedies apply. For unopened, unused items purchased in‑clinic, we usually accept returns within 14 days with proof of purchase; hygiene rules mean we cannot accept returns of opened items unless faulty.</p>
              <p><strong>Gift cards & prepayments:</strong> Non‑transferable, not redeemable for cash, and valid until the printed expiry (typically 12 months). Lost cards are not replaceable except with proof and at our discretion.</p>
              <p><strong>Packages/Memberships:</strong> Unless stated otherwise, packages are non‑transferable, valid for 12 months, and any remaining sessions expire after that date. Cooling‑off rights apply if purchased at a distance and not yet used.</p>

              <h2>10) Photography, testimonials & marketing permissions</h2>
              <p>Clinical photography may be required for your medical record (Aevia Skin). These images are kept confidential as part of your file.</p>
              <p>Marketing use of images/testimonials is separate and optional; we’ll only use them with your documented consent. You can withdraw consent at any time for future use.</p>

              <h2>11) Your information & privacy</h2>
              <p>Your personal data will be processed in accordance with our <Link href="/privacy" className="text-primary underline underline-offset-4">Privacy Policy</Link> (available on our Sites). This explains what we collect, why, how long we keep it, your rights, and who we share it with. Key points include:</p>
              <ul>
                <li>Clinical data is processed under appropriate legal bases and kept for typical retention periods (e.g., 8 years for adult clinical records).</li>
                <li>Marketing is based on your consent (or soft opt‑in for existing customers), and you can unsubscribe at any time.</li>
                <li>Some providers may process data outside the UK with appropriate safeguards.</li>
              </ul>

              <h2>12) Website use, content & IP</h2>
              <h3>Informational only</h3>
              <p>Content on our Sites is provided for general information and does not constitute medical advice. Do not rely on it as a substitute for professional assessment.</p>
              <h3>Intellectual property</h3>
              <p>All content, logos, graphics, and layouts are owned by or licensed to us and are protected by IP laws. You may not copy, reproduce, or distribute our content without prior written permission, except for personal, non‑commercial use.</p>
              <h3>Acceptable use</h3>
              <p>You agree not to misuse the Sites (e.g., introduce malware, attempt unauthorised access, or scrape content). We may suspend access for misuse.</p>
              <h3>Third‑party links</h3>
              <p>We are not responsible for the content or policies of external sites.</p>

              <h2>13) Contraindications & obligations</h2>
              <ul>
                <li>You must disclose relevant medical history, medications, allergies, and recent procedures truthfully and update us of any changes before treatment.</li>
                <li>You must follow pre‑treatment and aftercare instructions. Failure to do so may affect your results and our ability to offer remedies.</li>
                <li>We may postpone or refuse treatment if alcohol/drug use, illness, or other factors could compromise safety or results.</li>
              </ul>

              <h2>14) Liability</h2>
              <p>We do not exclude or limit liability where it would be unlawful, including liability for death or personal injury caused by our negligence, for fraud or fraudulent misrepresentation, or for breach of your statutory rights.</p>
              <p>Subject to the above, and to the maximum extent permitted by law, our liability for losses arising in connection with the services will be limited to the amount you paid for the relevant service.</p>
              <p>We are not liable for loss or damage that is not reasonably foreseeable or for indirect/special losses (e.g., loss of earnings) arising from elective aesthetic treatments or coaching outcomes.</p>
              <p>We are not responsible for delays or failures caused by events outside our reasonable control.</p>

              <h2>15) Complaints</h2>
              <p>We aim to resolve issues quickly and fairly. Please email <a href="mailto:hello@theaevia.co.uk">hello@theaevia.co.uk</a> with details (name, date, service, and outcome sought).</p>
              <p>We’ll acknowledge within 3–5 business days and provide a response or next steps as soon as reasonably possible.</p>
              <p>If your complaint concerns a clinician’s professional conduct, you may also contact their professional body or insurer. This does not affect your statutory rights.</p>

              <h2>16) Changes to these Terms</h2>
              <p>We may update these Terms from time to time. The latest version will be posted on our Sites with the updated date. Material changes may be notified by email or during booking.</p>

              <h2>17) Governing law & jurisdiction</h2>
              <p>These Terms and any non‑contractual obligations are governed by the laws of England &amp; Wales. You and we submit to the exclusive jurisdiction of the courts of England and Wales.</p>

              <h2>18) Contact</h2>
              <p>
                The Aevia Group LTD<br />
                5 Brayford Square, London E1 0SG, United Kingdom<br />
                Clinic: Minsony, King’s Cross, London (by appointment)<br />
                Email: <a href="mailto:hello@theaevia.co.uk">hello@theaevia.co.uk</a> / <a href="mailto:privacy@theaevia.co.uk">privacy@theaevia.co.uk</a>
              </p>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}
