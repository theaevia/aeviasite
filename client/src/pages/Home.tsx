import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Leaf, Brain } from "lucide-react";
import TestimonialCard from "@/components/TestimonialCard";
import ServiceCard from "@/components/ServiceCard";

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
              Regenerative aesthetics and high-agency coaching for professionals who demand excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/skin">
                <Button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium text-lg smooth-transition hover:bg-primary/90 hover:scale-105 shadow-lg min-w-48">
                  Explore Aevia Skin
                </Button>
              </Link>
              <Link href="/mind">
                <Button variant="outline" className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-medium text-lg smooth-transition hover:bg-primary hover:text-primary-foreground hover:scale-105 shadow-lg min-w-48">
                  Explore Aevia Mind
                </Button>
              </Link>
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
              Our unique dual approach combines doctor-led regenerative aesthetics with transformative coaching, 
              creating a comprehensive pathway to both physical and mental excellence.
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
              <h3 className="text-xl font-serif font-semibold mb-2">Dr. Terrell</h3>
              <p className="text-foreground/70">Regenerative Medicine Specialist</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-serif font-semibold mb-2">Dr. Renee</h3>
              <p className="text-foreground/70">Aesthetic Medicine Expert</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-serif font-semibold mb-2">Dr. Manu</h3>
              <p className="text-foreground/70">Performance Psychology Coach</p>
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
              subtitle="Regenerative Aesthetics"
              description="Regenerative aesthetics that enhance your natural beauty without fillers"
              image="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
              features={["Polynucleotides", "Skin boosters", "Botulinum toxin"]}
              ctaText="Learn More About Skin Treatments"
              onCtaClick={() => window.location.href = "/skin"}
            />

            <ServiceCard
              title="Aevia Mind"
              subtitle="High-Agency Coaching"
              description="High-agency coaching for professionals seeking transformation"
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
              quote="The polynucleotide treatment gave me the most natural, glowing skin I've ever had. No downtime, just beautiful results."
              image="https://images.unsplash.com/photo-1594736797933-d0051d8a8fdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
              likes={127}
              comments={8}
            />

            <TestimonialCard
              name="Marcus K."
              service="Aevia Mind"
              quote="Dr. Manu's coaching completely transformed my decision-making. I've never felt more focused and intentional."
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
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium text-lg smooth-transition hover:bg-primary/90 hover:scale-105 shadow-lg">
                Book Skin Consultation
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-medium text-lg smooth-transition hover:bg-primary hover:text-primary-foreground hover:scale-105 shadow-lg">
                Book Mind Discovery Call
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
