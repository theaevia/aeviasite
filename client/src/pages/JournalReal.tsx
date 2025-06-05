import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Calendar, Clock, Tag } from "lucide-react";
import SEO from "@/components/SEO";
import clinicHeroImage from "@assets/hero_images/aevia-clinic3.webp";

export default function Journal() {
  return (
    <>
      <SEO
        title="The Aevia Journal - Expert Insights on Skin & Mind"
        description="Explore our journal for expert insights on medical aesthetics, performance coaching, and holistic wellness. Stay informed with the latest research and trends from our doctor-led team."
        image={clinicHeroImage}
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-secondary py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              The Aevia <span className="text-primary">Journal</span>
            </h1>
            <p className="text-xl text-foreground/70">
              Insights on regenerative aesthetics, high-performance coaching, and holistic transformation
            </p>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
                alt="Scientific research and regenerative medicine breakthrough"
                width="800"
                height="400"
                loading="lazy"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <span className="text-primary text-sm font-medium">Featured Article</span>
                <h2 className="text-2xl font-serif font-bold mt-2 mb-4">The Science Behind Polynucleotides: Why They're Revolutionizing Skin Regeneration</h2>
                <p className="text-foreground/70 mb-6">Discover how these DNA-based therapies are changing the landscape of aesthetic medicine by working with your body's natural healing mechanisms...</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
                      alt="Dr. Terrell author photo"
                      width="100"
                      height="100"
                      loading="lazy"
                      className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <div>
                      <p className="font-semibold text-sm">Dr. Terrell</p>
                      <p className="text-foreground/50 text-xs">March 15, 2024</p>
                    </div>
                  </div>
                  <button className="text-primary font-medium text-sm hover:underline">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Grid */}
        <section className="py-20 bg-secondary">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Article 1 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg smooth-transition hover:shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200"
                  alt="Executive coaching and high performance strategies"
                  width="400"
                  height="200"
                  loading="lazy"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-primary text-sm font-medium">Mind</span>
                  <h3 className="text-lg font-serif font-bold mt-2 mb-3">5 Decision-Making Frameworks for High-Stakes Situations</h3>
                  <p className="text-foreground/70 text-sm mb-4">Learn the mental models that top executives use to make critical decisions under pressure...</p>
                  <div className="flex items-center">
                    <img
                      src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
                      alt="Dr. Manu author photo"
                      width="100"
                      height="100"
                      loading="lazy"
                      className="w-8 h-8 rounded-full object-cover mr-2"
                    />
                    <div>
                      <p className="font-semibold text-xs">Dr. Manu</p>
                      <p className="text-foreground/50 text-xs">March 10, 2024</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article 2 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg smooth-transition hover:shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1570554886111-e80fcca6a029?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200"
                  alt="Natural skincare products and beauty routine essentials"
                  width="400"
                  height="200"
                  loading="lazy"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-primary text-sm font-medium">Skin</span>
                  <h3 className="text-lg font-serif font-bold mt-2 mb-3">The Complete Guide to Skin Boosters vs. Traditional Fillers</h3>
                  <p className="text-foreground/70 text-sm mb-4">Understanding the difference between enhancement and natural rejuvenation approaches...</p>
                  <div className="flex items-center">
                    <img
                      src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
                      alt="Dr. Renee author photo"
                      width="100"
                      height="100"
                      loading="lazy"
                      className="w-8 h-8 rounded-full object-cover mr-2"
                    />
                    <div>
                      <p className="font-semibold text-xs">Dr. Renee</p>
                      <p className="text-foreground/50 text-xs">March 8, 2024</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article 3 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg smooth-transition hover:shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=200"
                  alt="Holistic wellness lifestyle and mind-body connection"
                  width="400"
                  height="200"
                  loading="lazy"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-primary text-sm font-medium">Lifestyle</span>
                  <h3 className="text-lg font-serif font-bold mt-2 mb-3">The Mind-Skin Connection: How Stress Affects Your Appearance</h3>
                  <p className="text-foreground/70 text-sm mb-4">Exploring the scientific relationship between mental wellbeing and skin health...</p>
                  <div className="flex items-center">
                    <img
                      src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
                      alt="The Aevia Team author photo"
                      width="100"
                      height="100"
                      loading="lazy"
                      className="w-8 h-8 rounded-full object-cover mr-2"
                    />
                    <div>
                      <p className="font-semibold text-xs">The Aevia Team</p>
                      <p className="text-foreground/50 text-xs">March 5, 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
