import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Leaf, Brain, Clock, PoundSterling, Calendar, Gift, Target, MapPin, Phone, Mail } from "lucide-react";
import { useEffect } from "react";
import { BookingButton } from "@/components/BookingButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import SEO from "@/components/SEO";

export default function Consultations() {
  const [location, setLocation] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  const type = searchParams.get("type") || "skin";
  const packageType = searchParams.get("package");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Add scroll handler
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    if (type === 'mind' || type === 'skin') {
      const sectionId = type === 'mind' ? 'mind-booking' : 'skin-booking';
      const section = document.getElementById(sectionId);
      if (section) {
        const headerH = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue('--header-h')
        ) || 80; // fallback to 80px if not set
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerH;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }, []);

  return (
    <>
      <SEO 
        title="The Aevia | Book Your Consultation | King's Cross, London"
        description="Book your personalised consultation with our expert doctors. Choose between medical aesthetics and performance coaching consultations at our Kings Cross clinic."
        image="/hero_images/aevia-clinic2.webp"
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-secondary py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Book Your <span className="text-primary">Consultation</span>
            </h1>
            <p className="text-xl text-foreground/70">
              Begin your transformation journey with a personalised consultation
            </p>
          </div>
        </section>

        {/* Consultation Options */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Skin Consultation */}
              <div id="skin-booking" className="bg-accent/30 rounded-2xl p-8">
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
                    <Gift className="text-primary mr-3 h-5 w-5" />
                    <span className="text-foreground/70">Complimentary (no charge)</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="text-primary mr-3 h-5 w-5" />
                    <span className="text-foreground/70">Available 7 days a week</span>
                  </div>
                </div>
                
                {/* Calendly Inline Widget */}
                <div className="bg-white rounded-xl p-6 border-2 border-primary">
                  <h3 className="font-semibold mb-4">Book Your Skin Consultation</h3>
                  <p className="text-sm text-foreground/70 mb-4">
                    Schedule your virtual consultation to discuss your skin goals and receive personalised treatment recommendations.
                  </p>
                  <div className="w-full max-w-full overflow-x-auto">
                    <div
                      className="calendly-inline-widget"
                      data-url="https://calendly.com/theaevia/aevia-skin-consultation?hide_event_type_details=1&hide_gdpr_banner=1&text_color=2d2d2d&primary_color=c5a87a"
                      style={{ minWidth: "0", width: "100%", height: "700px" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Mind Discovery Call */}
              <div id="mind-booking" className="bg-muted rounded-2xl p-8 scroll-margin-top-32">
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
                    <Target className="text-primary mr-3 h-5 w-5" />
                    <span className="text-foreground/70">Personalised coaching strategy discussion</span>
                  </div>
                </div>
                
                {/* Calendly Inline Widget for Mind Discovery Call */}
                <div id="mind-widget" className="bg-white rounded-xl p-6 border-2 border-primary">
                  <h3 className="font-semibold mb-4">Schedule Your Discovery Call</h3>
                  <p className="text-sm text-foreground/70 mb-4">
                    Book your complimentary virtual consultation to explore your transformation journey.
                  </p>
                  <div className="w-full max-w-full overflow-x-auto">
                    <div
                      className="calendly-inline-widget"
                      data-url="https://calendly.com/theaevia/aevia-skin-consultation-clone?hide_event_type_details=1&hide_gdpr_banner=1&text_color=2d2d2d&primary_color=c5a87a"
                      style={{ minWidth: "0", width: "100%", height: "700px" }}
                    ></div>
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
    </>
  );
}
