import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Rocket, Lightbulb, Brain, Swords } from "lucide-react";

export default function Mind() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
                Aevia Mind: <span className="text-primary">High-Agency Coaching</span>
              </h1>
              <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
                Transformative coaching for professionals who demand excellence in every aspect of their performance and life.
              </p>
              <Link href="/contact">
                <Button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium text-lg smooth-transition hover:bg-primary/90 shadow-lg">
                  Book Discovery Call
                </Button>
              </Link>
            </div>
            <div className="order-first lg:order-last">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Professional coaching session in modern, minimalist office setting" 
                className="rounded-2xl shadow-lg w-full h-auto"
              />
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
              <div className="flex items-start">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-xl flex items-center justify-center mr-4 mt-1">
                  <Rocket className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold mb-2">Performance Optimization</h3>
                  <p className="text-foreground/70">Unlock your peak performance potential through scientifically-backed coaching methodologies and personalized strategies.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-xl flex items-center justify-center mr-4 mt-1">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold mb-2">Decision-Making Clarity</h3>
                  <p className="text-foreground/70">Develop frameworks for making high-stakes decisions with confidence and precision in complex environments.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-xl flex items-center justify-center mr-4 mt-1">
                  <Brain className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold mb-2">Mindset Transformation</h3>
                  <p className="text-foreground/70">Rewire limiting beliefs and develop a high-agency mindset that drives exceptional results and sustained success.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-xl flex items-center justify-center mr-4 mt-1">
                  <Swords className="h-6 w-6" />
                </div>
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
              <Link href="/contact">
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
              <Link href="/contact">
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
              <Link href="/contact">
                <Button variant="outline" className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Achieve Mastery
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Ready to Unlock Your Potential?</h2>
          <p className="text-lg text-foreground/70 mb-8">Start with a complimentary discovery call to explore your transformation journey</p>
          <Link href="/contact">
            <Button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium text-lg smooth-transition hover:bg-primary/90 shadow-lg">
              Book Your Discovery Call
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
