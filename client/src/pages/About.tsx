import { GraduationCap, Award, IdCard } from "lucide-react";

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
            Three world-class doctors united by a shared vision of holistic transformation
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
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600" 
                  alt="Dr. Terrell - Regenerative Medicine Specialist" 
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl font-serif font-bold mb-4">Dr. Terrell</h2>
                <p className="text-lg text-primary mb-4">Regenerative Medicine Specialist</p>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  With over 15 years of experience in regenerative medicine, Dr. Terrell pioneers cutting-edge treatments that harness the body's natural healing capabilities. His expertise in polynucleotides and PRP therapy has transformed thousands of patients' skin health.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-foreground/70">
                    <GraduationCap className="text-primary mr-3 h-5 w-5" />
                    MD, Imperial College London
                  </div>
                  <div className="flex items-center text-foreground/70">
                    <IdCard className="text-primary mr-3 h-5 w-5" />
                    Fellowship in Regenerative Medicine
                  </div>
                  <div className="flex items-center text-foreground/70">
                    <Award className="text-primary mr-3 h-5 w-5" />
                    Leading researcher in aesthetic medicine
                  </div>
                </div>
              </div>
            </div>

            {/* Dr. Renee */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-last lg:order-first">
                <h2 className="text-3xl font-serif font-bold mb-4">Dr. Renee</h2>
                <p className="text-lg text-primary mb-4">Aesthetic Medicine Expert</p>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Dr. Renee combines artistic vision with medical precision to deliver natural-looking aesthetic results. Her philosophy centers on enhancing each patient's unique beauty through minimally invasive, scientifically-proven treatments.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-foreground/70">
                    <GraduationCap className="text-primary mr-3 h-5 w-5" />
                    MD, University of Edinburgh
                  </div>
                  <div className="flex items-center text-foreground/70">
                    <IdCard className="text-primary mr-3 h-5 w-5" />
                    Advanced Aesthetic Medicine Certification
                  </div>
                  <div className="flex items-center text-foreground/70">
                    <Award className="text-primary mr-3 h-5 w-5" />
                    International speaker on non-surgical aesthetics
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600" 
                  alt="Dr. Renee - Aesthetic Medicine Expert" 
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </div>
            </div>

            {/* Dr. Manu */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600" 
                  alt="Dr. Manu - Performance Psychology Coach" 
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl font-serif font-bold mb-4">Dr. Manu</h2>
                <p className="text-lg text-primary mb-4">Performance Psychology Coach</p>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Dr. Manu bridges the gap between medicine and high-performance coaching, helping executives and professionals unlock their full potential. His evidence-based approach to mindset transformation creates lasting behavioral change.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-foreground/70">
                    <GraduationCap className="text-primary mr-3 h-5 w-5" />
                    MD & PhD in Psychology, Oxford University
                  </div>
                  <div className="flex items-center text-foreground/70">
                    <IdCard className="text-primary mr-3 h-5 w-5" />
                    Certified High-Performance Coach
                  </div>
                  <div className="flex items-center text-foreground/70">
                    <Award className="text-primary mr-3 h-5 w-5" />
                    Consultant to Fortune 500 executives
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
