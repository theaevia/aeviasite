import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Rocket, Lightbulb, Brain, Swords, Check } from "lucide-react";
import { BookingButton } from "@/components/BookingButton";
import { IconBadge } from "@/components/IconBadge";
import mindHeroImage from "@assets/hero_images/mind-hero.png";

export default function Mind() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
                Aevia Mind: <span className="text-primary">Performance and Transformative Coaching</span>
              </h1>
              <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
                Transformative coaching for professionals who demand excellence in every aspect of their performance and life.
              </p>
              <BookingButton href="/consultations?type=mind" variant="skin" className="w-full sm:w-auto">
                Book Discovery Call
              </BookingButton>
            </div>
            <div className="order-1 lg:order-2 w-full">
              <div className="relative w-full pb-[75%]">
                <img 
                  src={mindHeroImage}
                  alt="Aevia Mind clinic showcasing desk during a coaching session" 
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg loading:blur-sm loading:animate-pulse"
                  loading="eager"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Transform Your Performance</h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">Evidence-based coaching methodologies designed for high-achieving professionals</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start group">
                <IconBadge className="mr-4">
                  <Rocket className="h-7 w-7 stroke-[1.6]" />
                </IconBadge>
                <div>
                  <h3 className="text-xl font-serif font-semibold mb-2">Performance Optimization</h3>
                  <p className="text-foreground/70">Unlock your peak performance potential through scientifically-backed coaching methodologies.</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <IconBadge className="mr-4">
                  <Lightbulb className="h-7 w-7 stroke-[1.6]" />
                </IconBadge>
                <div>
                  <h3 className="text-xl font-serif font-semibold mb-2">Decision-Making Clarity</h3>
                  <p className="text-foreground/70">Develop frameworks for making high-stakes decisions with confidence and precision in complex environments.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start group">
                <IconBadge className="mr-4">
                  <Brain className="h-7 w-7 stroke-[1.6]" />
                </IconBadge>
                <div>
                  <h3 className="text-xl font-serif font-semibold mb-2">Mindset Transformation</h3>
                  <p className="text-foreground/70">Rewire limiting beliefs and develop a high-agency mindset that drives exceptional results and sustained success.</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <IconBadge className="mr-4">
                  <Swords className="h-7 w-7 stroke-[1.6]" />
                </IconBadge>
                <div>
                  <h3 className="text-xl font-serif font-semibold mb-2">Strategic Life Planning</h3>
                  <p className="text-foreground/70">Create comprehensive life strategies that align your professional ambitions with personal fulfillment and values.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Packages */}
      <section className="py-20 bg-accent/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Coaching Packages</h2>
            <p className="text-lg text-foreground/70">Choose the level of support that matches your transformation goals</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold mb-4">Discovery</h3>
              <p className="text-foreground/70 mb-6">Perfect for professionals seeking clarity on their next steps</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-foreground/70">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  3 one-on-one sessions
                </li>
                <li className="flex items-center text-foreground/70">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Performance assessment
                </li>
                <li className="flex items-center text-foreground/70">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Action plan development
                </li>
              </ul>
              <Link href="/consultations">
                <Button variant="outline" className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Start Discovery
                </Button>
              </Link>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg ring-2 ring-primary">
              <div className="text-center mb-4">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Transformation</h3>
              <p className="text-foreground/70 mb-6">Comprehensive coaching for significant personal and professional growth</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-foreground/70">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  12 one-on-one sessions
                </li>
                <li className="flex items-center text-foreground/70">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Weekly check-ins
                </li>
                <li className="flex items-center text-foreground/70">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Personalized frameworks
                </li>
                <li className="flex items-center text-foreground/70">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Performance tracking
                </li>
              </ul>
              <Link href="/consultations">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Begin Transformation
                </Button>
              </Link>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold mb-4">Mastery</h3>
              <p className="text-foreground/70 mb-6">Elite coaching for executives and high-performers seeking mastery</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-foreground/70">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  24 one-on-one sessions
                </li>
                <li className="flex items-center text-foreground/70">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Unlimited messaging
                </li>
                <li className="flex items-center text-foreground/70">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Emergency sessions
                </li>
                <li className="flex items-center text-foreground/70">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Leadership frameworks
                </li>
              </ul>
              <Link href="/consultations">
                <Button variant="outline" className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Achieve Mastery
                </Button>
              </Link>
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
              <p className="text-foreground/70 mb-6">Start with a discovery call</p>
              <BookingButton href="/consultations?type=mind" variant="skin" className="w-full">
                Book Discovery Call
              </BookingButton>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-serif font-semibold mb-4">Returning Clients</h3>
              <p className="text-foreground/70 mb-6">Book coaching sessions directly</p>
              <BookingButton href="https://www.fresha.com/a/the-aevia-mind-london-260-pentonville-road-pigze91v" variant="skin" className="w-full">
                Book Coaching Sessions
              </BookingButton>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Coaching Fees</h2>
            <p className="text-lg text-foreground/70">Investment in your transformation and high-performance journey</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-serif font-semibold mb-4 text-center">Discovery Call</h3>
              <div className="text-center mb-4">
                <span className="text-3xl font-bold text-primary">Free</span>
                <p className="text-sm text-foreground/70">Complimentary</p>
              </div>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2" />
                  30-minute virtual call
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2" />
                  Goal assessment
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2" />
                  Coaching plan overview
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-serif font-semibold mb-4 text-center">Discovery Package</h3>
              <div className="text-center mb-4">
                <span className="text-2xl font-bold text-primary">£750</span>
                <p className="text-sm text-foreground/70">3 sessions</p>
              </div>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2" />
                  Performance assessment
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2" />
                  Action plan development
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2" />
                  Initial framework setup
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg ring-2 ring-primary">
              <div className="text-center mb-4">
                <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">Popular</span>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-4 text-center">Transformation</h3>
              <div className="text-center mb-4">
                <span className="text-2xl font-bold text-primary">£2,400</span>
                <p className="text-sm text-foreground/70">12 sessions</p>
              </div>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2" />
                  Weekly check-ins
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2" />
                  Personalized frameworks
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2" />
                  Performance tracking
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-serif font-semibold mb-4 text-center">Mastery</h3>
              <div className="text-center mb-4">
                <span className="text-2xl font-bold text-primary">£4,500</span>
                <p className="text-sm text-foreground/70">24 sessions</p>
              </div>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2" />
                  Unlimited messaging
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2" />
                  Emergency sessions
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2" />
                  Leadership frameworks
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-sm text-foreground/60">
              Package selection will be discussed during your discovery call based on your specific goals and timeline.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Ready to Unlock Your Potential?</h2>
          <p className="text-lg text-foreground/70 mb-8">Start with a complimentary discovery call to explore your transformation journey</p>
          <BookingButton href="/consultations?type=mind" variant="skin" className="w-full sm:w-auto">
            Book Your Discovery Call
          </BookingButton>
        </div>
      </section>
    </div>
  );
}
