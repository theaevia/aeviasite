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
                <p className="text-foreground/70">Personalized assessment with our regenerative medicine specialists</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Clock className="text-primary mr-3 h-5 w-5" />
                  <span className="text-foreground/70">45-minute virtual consultation</span>
                </div>
                <div className="flex items-center">
                  <PoundSterling className="text-primary mr-3 h-5 w-5" />
                  <span className="text-foreground/70">£50 (fully redeemable against first treatment)</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="text-primary mr-3 h-5 w-5" />
                  <span className="text-foreground/70">Available 7 days a week</span>
                </div>
              </div>
              
              {/* Mock Fresha Integration */}
              <div className="bg-white rounded-xl p-6 border-2 border-primary">
                <h3 className="font-semibold mb-4">Book Your Skin Consultation</h3>
                <div className="space-y-3">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select preferred doctor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dr-terrell">Dr. Terrell</SelectItem>
                      <SelectItem value="dr-renee">Dr. Renee</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input type="date" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9am">9:00 AM</SelectItem>
                      <SelectItem value="11am">11:00 AM</SelectItem>
                      <SelectItem value="2pm">2:00 PM</SelectItem>
                      <SelectItem value="4pm">4:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Book Now via Fresha
                  </Button>
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
                  <span className="text-foreground/70">30-minute discovery call</span>
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
              
              {/* Mock Calendly Integration */}
              <div className="bg-white rounded-xl p-6 border-2 border-primary">
                <h3 className="font-semibold mb-4">Schedule Your Discovery Call</h3>
                <div className="space-y-3">
                  <Input type="text" placeholder="Full Name" />
                  <Input type="email" placeholder="Email Address" />
                  <Input type="tel" placeholder="Phone Number" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select focus area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="performance">Performance Optimization</SelectItem>
                      <SelectItem value="decision">Decision-Making</SelectItem>
                      <SelectItem value="mindset">Mindset Transformation</SelectItem>
                      <SelectItem value="planning">Strategic Planning</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Schedule Call
                  </Button>
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
              <p className="text-foreground/70">+44 20 7946 0958</p>
            </div>
            
            <div>
              <Mail className="text-primary text-2xl mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-foreground/70">hello@theaevia.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
