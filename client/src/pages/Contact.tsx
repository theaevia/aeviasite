import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Leaf, Brain, Clock, PoundSterling, Calendar, Gift, Video, MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-secondary py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-foreground/70">
            Begin your transformation journey with a personalized consultation
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Skin Consultation */}
            <div className="bg-accent/30 rounded-2xl p-8">
              <div className="text-center mb-8">
                <Leaf className="text-primary text-4xl mx-auto mb-4" />
                <h2 className="text-2xl font-serif font-bold mb-4">Aevia Skin Consultation</h2>
                <p className="text-foreground/70">Personalised assessment with Dr. Terrell or Dr. Renee</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Clock className="text-primary mr-3 h-5 w-5" />
                  <span className="text-foreground/70">20-minute virtual consultation</span>
                </div>
                <div className="flex items-center">
                  <PoundSterling className="text-primary mr-3 h-5 w-5" />
                  <span className="text-foreground/70">£30 (fully redeemable against first treatment)</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="text-primary mr-3 h-5 w-5" />
                  <span className="text-foreground/70">Available 7 days a week</span>
                </div>
              </div>
              
              {/* Calendly Integration */}
              <div className="bg-white rounded-xl p-6 border-2 border-primary">
                <h3 className="font-semibold mb-4">Book Your Skin Consultation</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  Schedule your virtual consultation to discuss your skin goals and receive personalized treatment recommendations.
                </p>
                <div className="h-96 w-full">
                  <iframe
                    src="https://calendly.com/your-calendly-link-skin"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Schedule Skin Consultation"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Mind Discovery Call */}
            <div className="bg-muted rounded-2xl p-8">
              <div className="text-center mb-8">
                <Brain className="text-primary text-4xl mx-auto mb-4" />
                <h2 className="text-2xl font-serif font-bold mb-4">Aevia Mind Discovery Call</h2>
                <p className="text-foreground/70">Complimentary strategy session with Dr. Manu</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Clock className="text-primary mr-3 h-5 w-5" />
                  <span className="text-foreground/70">30-minute virtual consultation</span>
                </div>
                <div className="flex items-center">
                  <Gift className="text-primary mr-3 h-5 w-5" />
                  <span className="text-foreground/70">Complimentary (no charge)</span>
                </div>
                <div className="flex items-center">
                  <Video className="text-primary mr-3 h-5 w-5" />
                  <span className="text-foreground/70">Virtual meeting via Zoom</span>
                </div>
              </div>
              
              {/* Calendly Integration */}
              <div className="bg-white rounded-xl p-6 border-2 border-primary">
                <h3 className="font-semibold mb-4">Schedule Your Discovery Call</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  Book your complimentary virtual consultation to explore your transformation journey.
                </p>
                <div className="h-96 w-full">
                  <iframe
                    src="https://calendly.com/your-calendly-link-mind"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Schedule Mind Discovery Call"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-6">Visit Our Clinic</h2>
            <p className="text-lg text-foreground/70">Located in the heart of Kings Cross, London</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <MapPin className="text-primary text-2xl mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-foreground/70">Kings Cross<br />London, UK</p>
            </div>
            
            <div>
              <Phone className="text-primary text-2xl mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <a href="tel:+447448012556" className="text-foreground/70 hover:text-primary smooth-transition">+44 7448 012556</a>
            </div>
            
            <div>
              <Mail className="text-primary text-2xl mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:hello@theaevia.co.uk" className="text-foreground/70 hover:text-primary smooth-transition">hello@theaevia.co.uk</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
