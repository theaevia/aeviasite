import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Leaf, Brain } from "lucide-react";
import TestimonialCard from "@/components/TestimonialCard";
import ServiceCard from "@/components/ServiceCard";
import { BookingButton } from "@/components/BookingButton";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6 leading-tight text-balance">
              Doctor-Led Transformation for{" "}
              <span className="text-primary">Skin and Mind</span>
            </h1>
            <p className="text-lg lg:text-xl text-foreground/70 mb-12 leading-relaxed max-w-3xl mx-auto">
            Medical aesthetics and performance coaching for professionals who demand excellence.
            </p>
            <div className="flex flex-col items-center sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
              <div className="w-full sm:w-64">
                <BookingButton href="/contact?type=skin" variant="skin" className="w-full">
                  Book Skin Consultation
                </BookingButton>
              </div>
              <div className="w-full sm:w-64">
                <BookingButton href="/contact?type=mind" variant="mind" className="w-full">
                  Book Mind Discovery Call
                </BookingButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Offer Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">The Aevia Difference</h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              The Aevia offers two distinct, doctor-led services:<br />
              <span style={{ fontWeight: 600, color: '#8A7350' }}>Medical Aesthetics</span> for natural, science-backed skin rejuvenation, and <br />
              <span style={{ fontWeight: 600, color: '#8A7350' }}>Performance and Transformative Coaching</span> for professionals seeking clarity, confidence, and agency. Whether you're drawn to one or both, each path is designed to deliver focused, expert-led transformation.
            </p>
          </div>
          
          {/* Doctors Introduction */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-3 flex justify-center mb-12">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Dr. Terrell, Dr. Renee, and Dr. Manu - The Aevia medical team" 
                className="rounded-2xl shadow-lg w-full max-w-2xl h-auto object-cover"
              />
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-serif font-semibold mb-2">Dr. Terrell Okhiria</h3>
              <p className="text-foreground/70">Aesthetic Medicine Doctor & GP Trainee</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-serif font-semibold mb-2">Dr. Renee Okhiria</h3>
              <p className="text-foreground/70">Aesthetic Medicine Doctor</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-serif font-semibold mb-2">Dr. Manu Sidhu</h3>
              <p className="text-foreground/70">Medical Doctor & Performance Coach</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <ServiceCard
              title="Aevia Skin"
              subtitle="Medical Aesthetics"
              description="Science-backed, regenerative approaches that restore your skin's natural quality. Results that feel like you, only fresher."
              image="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
              features={["The Aevia Skin Consultation", "Polynucleotides", "Skin Boosters", "Anti-wrinkle Injections"]}
              ctaText="Learn More About Skin Treatments"
              onCtaClick={() => window.location.href = "/skin"}
            />

            <ServiceCard
              title="Aevia Mind"
              subtitle="Performance & Transformative Coaching"
              description="Coaching designed for professionals ready to think sharper, act with confidence, and create meaningful change."
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
              features={["Performance optimization", "Decision-making clarity", "Transformative mindset shifts", "Strategic life planning"]}
              ctaText="Explore Mind Coaching"
              onCtaClick={() => window.location.href = "/mind"}
            />
          </div>
        </div>
      </section>

      {/* Instagram-Style Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Client Transformations</h2>
            <p className="text-lg text-foreground/70">Real results from our community</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard
              name="Sarah M."
              service="Aevia Skin"
              quote="The polynucleotide treatment gave me the most natural, glowing skin I've ever had. Barely any downtime, just beautiful results."
              image="https://images.unsplash.com/photo-1594736797933-d0051d8a8fdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
              likes={127}
              comments={8}
            />

            <TestimonialCard
              name="Marcus K."
              service="Aevia Mind"
              quote="Dr. Manu's coaching helped me unlock clarity and execute decisions with confidence. I've never felt more aligned or driven."
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
              likes={89}
              comments={12}
            />

            <TestimonialCard
              name="Elena R."
              service="Both Services"
              quote="The combination of skin treatments and coaching created such a holistic transformation. I feel confident inside and out."
              image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
              likes={203}
              comments={24}
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Begin Your Transformation</h2>
          <p className="text-lg text-foreground/70 mb-12">Limited availability for our exclusive, doctor-led approach</p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center items-center">
            <div className="w-full sm:w-64">
              <BookingButton href="/contact?type=skin" variant="skin" className="w-full">
                Book Skin Consultation
              </BookingButton>
            </div>
            <div className="w-full sm:w-64">
              <BookingButton href="/contact?type=mind" variant="mind" className="w-full">
                Book Mind Discovery Call
              </BookingButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
