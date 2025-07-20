import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Dna, Droplet, Sparkles, Clock, Check, Banknote, Gift, Camera } from "lucide-react";
import { BookingButton } from "@/components/BookingButton";
import skinHeroImage from "@assets/hero_images/royalty-free-skin3.webp";
import skinModelImage from "@assets/hero_images/skin-model.webp";
import skinModelImage800 from "@assets/hero_images/skin-model-800w.webp";
import skinModel2Image from "@assets/hero_images/skin-model-2.webp";
import skinModel2Image800 from "@assets/hero_images/skin-model-2-800w.webp";
import SEO from "@/components/SEO";

export default function Skin() {
  return (
    <>
      <SEO 
        title="Aevia Skin | Medical Aesthetics | King's Cross, London"
        description="Experience regenerative, science-backed skin treatments led by doctors. For those who value natural results and long-term skin health. King's Cross, London."
        image="/hero_images/royalty-free-skin4.webp"
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-white py-20 lg:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
                <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
                  Aevia Skin: <span className="text-primary">Regenerative Aesthetics</span>
                </h1>
                <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
                  Doctor-led treatments that enhance your natural beauty through regenerative medicine, without the need for fillers.
                </p>
                <BookingButton href="/consultations?type=skin" variant="skin" className="w-full sm:w-auto">
                  Book Your Aevia Skin Consultation
                </BookingButton>
              </div>
              <div className="order-1 lg:order-2 w-full">
                <div className="relative w-full pb-[75%]">
                  <picture>
                    <source
                      srcSet={skinHeroImage}
                      type="image/webp"
                    />
                    <img
                      src={skinHeroImage}
                      alt="Aevia Skin clinic showcasing skin treatments"
                      className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg loading:blur-sm loading:animate-pulse"
                      loading="eager"
                      fetchPriority="high"
                      width="1600"
                      height="1200"
                      sizes="(max-width: 1024px) 100vw, 1600px"
                    />
                  </picture>
                </div>
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
                  A comprehensive virtual clinical session including facial mapping, injectable options review, and tailored treatment plan using polynucleotides, boosters or anti-wrinkle injections.
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
                        Personalised treatment planning
                      </li>
                    </ul>
                  </div>
                  
                  <div className="text-left">
                    <h4 className="font-semibold text-foreground mb-3">Pricing:</h4>
                    <ul className="space-y-2 text-foreground/70">
                      <li className="flex items-center">
                        <Gift className="h-4 w-4 text-primary mr-3" />
                        FREE (usually £30, now complimentary for first-time clients)
                      </li>
                      <li className="flex items-center">
                        <Camera className="h-4 w-4 text-primary mr-3" />
                        Virtual consultation
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

        {/* How Booking Works */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-8">How does booking work at The Aevia?</h2>
            <div className="bg-accent/20 rounded-2xl p-8 mb-12">
              <p className="text-lg text-foreground/80 leading-relaxed">
                All new clients start with a virtual consultation, which lets us assess your needs before scheduling treatment. You'll then be invited to book your in-clinic session.
                <br /><br />
                <strong>Already know what you want?</strong> Returning clients can book directly.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-serif font-semibold mb-4">New Clients</h3>
                <p className="text-foreground/70 mb-6">Start with a virtual consultation</p>
                <BookingButton href="/consultations?type=skin" variant="skin" className="w-full">
                  Book Virtual Consultation
                </BookingButton>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-serif font-semibold mb-4">Returning Clients</h3>
                <p className="text-foreground/70 mb-6">Book treatments directly</p>
                <a href="https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&share&pId=2507365" target="_blank" rel="noopener noreferrer" className="w-full block">
                  <BookingButton href="https://www.fresha.com/book-now/aevia-clinic-ma38rc5q/services?lid=2588602&eid=4557161&share&pId=2507365" variant="skin" className="w-full">
                    Book Treatments
                  </BookingButton>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-accent/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Treatment Fees</h2>
              <p className="text-lg text-foreground/70">Transparent pricing for all our regenerative treatments</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-serif font-semibold mb-4 text-center">Consultation</h3>
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-primary">Free</span>
                  <p className="text-sm text-foreground/70">Usually £30</p>
                </div>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    20-minute virtual session
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Facial mapping
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Personalised treatment plan
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-serif font-semibold mb-4 text-center">Polynucleotides</h3>
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-primary">From £250</span>
                  <p className="text-sm text-foreground/70">Per treatment</p>
                </div>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    DNA-based regeneration
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Natural skin healing
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Long-lasting results
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-serif font-semibold mb-4 text-center">Skin Boosters</h3>
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-primary">From £250</span>
                  <p className="text-sm text-foreground/70">Per treatment</p>
                </div>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Deep hydration
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Improved skin quality
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Natural glow
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-serif font-semibold mb-4 text-center">Anti-Wrinkle</h3>
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-primary">From £160</span>
                  <p className="text-sm text-foreground/70">Per treatment area</p>
                </div>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Muscle relaxation
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Natural-looking results
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Quick, minimally invasive
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-sm text-foreground/60">
                Final pricing will be confirmed during your consultation based on your individual treatment plan.
              </p>
              <Button asChild className="mt-6">
                <a href="/treatments">More information</a>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-secondary">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Ready to Transform Your Skin?</h2>
            <p className="text-lg text-foreground/70 mb-8">Book your FREE Aevia Skin Consultation</p>
            <BookingButton href="/consultations?type=skin" variant="skin" className="w-full sm:w-auto">
              Book Your Aevia Skin Consultation
            </BookingButton>
          </div>
        </section>
      </div>
    </>
  );
}
