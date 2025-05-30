import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Dna, Droplet, Sparkles, Clock, Check, Banknote } from "lucide-react";

export default function Skin() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
                Aevia Skin: <span className="text-primary">Regenerative Aesthetics</span>
              </h1>
              <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
                Doctor-led treatments that enhance your natural beauty through regenerative medicine, without the need for fillers.
              </p>
              <Link href="/contact">
                <Button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium text-lg smooth-transition hover:bg-primary/90 shadow-lg">
                  Book The Aevia Skin Consultation
                </Button>
              </Link>
            </div>
            <div className="order-first lg:order-last">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Modern aesthetic treatment room with professional equipment" 
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Our Regenerative Treatments</h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">Science-backed procedures that work with your body's natural healing processes</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg smooth-transition hover:shadow-xl">
              <Dna className="text-primary text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-serif font-semibold mb-3">Polynucleotides</h3>
              <p className="text-foreground/70 text-sm">DNA-based therapy that stimulates natural skin regeneration and hydration</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg smooth-transition hover:shadow-xl">
              <Droplet className="text-primary text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-serif font-semibold mb-3">Skin Boosters</h3>
              <p className="text-foreground/70 text-sm">Hyaluronic acid injections for deep hydration and improved skin quality</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg smooth-transition hover:shadow-xl">
              <Sparkles className="text-primary text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-serif font-semibold mb-3">Anti-Wrinkle Injections</h3>
              <p className="text-foreground/70 text-sm">Precision muscle relaxation for natural-looking wrinkle reduction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">The Aevia Skin Consultation</h2>
            <div className="bg-primary/10 rounded-2xl p-8 max-w-4xl mx-auto mb-8">
              <h3 className="text-2xl font-serif font-semibold mb-4 text-primary">20-Minute Clinical Session</h3>
              <p className="text-lg text-foreground/80 mb-6">
                A comprehensive clinical session including facial mapping, injectable options review, and tailored treatment plan using polynucleotides, boosters or anti-wrinkle injections.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="text-left">
                  <h4 className="font-semibold text-foreground mb-3">Perfect for:</h4>
                  <ul className="space-y-2 text-foreground/70">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-3" />
                      First-time clients
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-3" />
                      Unsure clients seeking guidance
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-3" />
                      Personalized treatment planning
                    </li>
                  </ul>
                </div>
                
                <div className="text-left">
                  <h4 className="font-semibold text-foreground mb-3">Pricing:</h4>
                  <ul className="space-y-2 text-foreground/70">
                    <li className="flex items-center">
                      <Banknote className="h-4 w-4 text-primary mr-3" />
                      £50 (fee fully redeemable)
                    </li>
                    <li className="flex items-center">
                      <Banknote className="h-4 w-4 text-primary mr-3" />
                      £65 with treatment same day
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-12">
            <h3 className="text-2xl font-serif font-bold mb-8">Your Journey to Radiant Skin</h3>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2">Book Consultation</h3>
              <p className="text-sm text-foreground/70">Schedule your Aevia Skin Consultation</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2">Facial Mapping</h3>
              <p className="text-sm text-foreground/70">Comprehensive clinical assessment</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2">Treatment Plan</h3>
              <p className="text-sm text-foreground/70">Tailored recommendations for your goals</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-semibold mb-2">Treatment</h3>
              <p className="text-sm text-foreground/70">Begin your regenerative journey</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">5</div>
              <h3 className="font-semibold mb-2">Results</h3>
              <p className="text-sm text-foreground/70">Experience natural, lasting transformation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Ready to Transform Your Skin?</h2>
          <p className="text-lg text-foreground/70 mb-8">Book The Aevia Skin Consultation - fee fully redeemable against your first treatment</p>
          <Link href="/contact">
            <Button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium text-lg smooth-transition hover:bg-primary/90 shadow-lg">
              Book The Aevia Skin Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
