import { GraduationCap, Award, IdCard } from "lucide-react";
import terrellImage from "@assets/about_pics/terrell-pic3.webp";
import reneeImage from "@assets/about_pics/renee-pic.webp";
import manuImage from "@assets/about_pics/manu-pic.webp";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-secondary py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
            Meet the <span className="text-primary">Aevia Team</span>
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
          A doctor-led team committed to natural results, self-confidence, and science-backed care.
          </p>
        </div>
      </section>

      {/* Doctor Profiles */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-20">
            {/* Dr. Terrell */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={terrellImage}
                  alt="Dr. Terrell - Regenerative Medicine Specialist" 
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl font-serif font-bold mb-4">Dr. Terrell Okhiria</h2>
                <p className="text-lg text-primary mb-4">GP Trainee & Aesthetic Medicine Doctor</p>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Dr. Terrell Okhiria is a medical doctor and aesthetics specialist focused on regenerative, science-led skin treatments. With a background in emergency medicine and GP training, he blends clinical expertise with an eye for natural, understated results.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-foreground/70">
                    <GraduationCap className="text-primary mr-3 h-5 w-5" />
                    MBBS, BSc, Imperial College London
                  </div>
                  <div className="flex items-center text-foreground/70">
                    <IdCard className="text-primary mr-3 h-5 w-5" />
                    GP Trainee, North Central London
                  </div>
                  <div className="flex items-center text-foreground/70">
                    <Award className="text-primary mr-3 h-5 w-5" />
                    Co-founder, The Aevia
                  </div>
                </div>
              </div>
            </div>

            {/* Dr. Renee */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-last lg:order-first">
                <h2 className="text-3xl font-serif font-bold mb-4">Dr. Renee Okhiria</h2>
                <p className="text-lg text-primary mb-4">Medical and Aesthetic Doctor</p>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Dr. Renee combines artistic vision with medical precision to deliver natural-looking aesthetic results. Her philosophy centers on enhancing each patient's unique beauty through minimally invasive, scientifically-proven treatments.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-foreground/70">
                    <GraduationCap className="text-primary mr-3 h-5 w-5" />
                    MBBS, BSc, University of Manchester & Imperial College London
                  </div>
                  <div className="flex items-center text-foreground/70">
                    <IdCard className="text-primary mr-3 h-5 w-5" />
                    Resident Doctor, East of England
                  </div>
                  <div className="flex items-center text-foreground/70">
                    <Award className="text-primary mr-3 h-5 w-5" />
                    Co-founder, The Aevia
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src={reneeImage}
                  alt="Dr. Renee - Aesthetic Medicine Expert" 
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </div>
            </div>

            {/* Dr. Manu */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={manuImage}
                  alt="Dr. Manu - Performance and Transformative Coach" 
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl font-serif font-bold mb-4">Dr. Manu Sidhu</h2>
                <p className="text-lg text-primary mb-4">Medical Doctor & Performance Coach</p>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Dr. Manu bridges the gap between medicine and high-performance coaching, helping executives and professionals unlock their full potential. His evidence-based approach to mindset transformation creates lasting behavioral change.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-foreground/70">
                    <GraduationCap className="text-primary mr-3 h-5 w-5" />
                    MBBS, BSc, Imperial College London
                  </div>
                  <div className="flex items-center text-foreground/70">
                    <IdCard className="text-primary mr-3 h-5 w-5" />
                    Psychiatric Doctor, High-Performance Coach
                  </div>
                  <div className="flex items-center text-foreground/70">
                    <Award className="text-primary mr-3 h-5 w-5" />
                    Co-founder, The Aevia
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-8">Our Philosophy</h2>
          <p className="text-xl text-foreground/70 leading-relaxed mb-8">
            "True transformation happens when we address both the physical and mental aspects of human potential. At The Aevia, we believe that radiant skin and a sharp mind are not separate goals, but complementary pathways to your best self."
          </p>
          <p className="text-lg text-foreground/50 italic">- The Aevia Team</p>
        </div>
      </section>
    </div>
  );
}
