import SEO from "@/components/SEO";

export default function CancellationPolicyPage() {
  return (
    <>
      <SEO title="Cancellation Policy | The Aevia" description="Our policy on cancellations, late arrivals, no‑shows, and cooling‑off for distance purchases." />
      <section className="hero-gradient py-12 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl lg:text-5xl font-serif font-bold mb-4 leading-tight">Cancellations, Late Arrivals & No‑Shows</h1>
          <p className="text-lg text-foreground/70 mb-6 leading-relaxed">Please review our policy before booking.</p>
        </div>
      </section>
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 prose prose-neutral">
          <h2>Cooling‑off for distance purchases</h2>
          <p>
            If you purchase a service package or membership online (not yet performed), you have a 14‑day cooling‑off period under UK consumer law.
            If you request we begin services within that period, you acknowledge your right to cancel may be lost once the service is fully performed, and we may deduct a proportionate amount for any services already provided.
          </p>
          <h2>Appointment cancellations</h2>
          <p>
            Please give at least 48 hours’ notice to cancel or reschedule. If you cancel or reschedule less than 48 hours before your appointment and we have already incurred non‑refundable room/equipment charges that cannot reasonably be recovered, we reserve the right to charge you an amount equal to the actual, reasonable cost incurred (for example: third‑party room hire, agency or clinician call‑out fee).
          </p>
          <h2>Less than 24 hours’ notice</h2>
          <p>We may charge 50% of the appointment fee or retain your deposit.</p>
          <h2>No‑show or late arrival</h2>
          <p>
            No‑shows or arrival more than 15 minutes late (at the clinician’s discretion) may be charged 100% of the appointment fee.
          </p>
          <h2>Extenuating circumstances</h2>
          <p>
            If you experience an emergency, please let us know as soon as possible; we will act reasonably.
          </p>
        </div>
      </section>
    </>
  );
}

