import { GraduationCap, Award, IdCard } from "lucide-react";
import SEO from "@/components/SEO";
import terrellImage from "@assets/about_pics/terrell-pic3.webp";
import reneeImage from "@assets/about_pics/renee-pic.webp";
import manuImage from "@assets/about_pics/manu-pic.webp";

export default function About() {
  return (
    <>
      <SEO
        title="About The Aevia - Meet Our Doctor-Led Team"
        description="Meet the doctor-led team behind The Aevia. Our founders combine medical expertise with a passion for natural results and transformative coaching in Kings Cross, London."
        image={terrellImage}
      />
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
                    width="600"
                    height="800"
                    loading="lazy"
                    className="rounded-2xl shadow-lg w-full h-auto"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-serif font-bold mb-4">Dr. Terrell Okhiria</h2>
                  <p className="text-lg text-primary mb-4">GP Trainee & Aesthetic Doctor</p>
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    Dr. Terrell Okhiria is a medical doctor and GP trainee based in North Central London. He holds an MBBS and intercalated BSc from Imperial College London and is certified in advanced aesthetic medicine. With a strong foundation in clinical medicine and a deep understanding of skin physiology, he specialises in regenerative, science-led treatments that support long-term skin health and natural rejuvenation.
                    <br /><br />
                    Known for his calm hands and precise technique, Dr. Terrell blends medical experience with a refined aesthetic taste, offering treatments that are both effective and understated. His approach is rooted in evidence-based care and tailored to each individual. As a co-founder of The Aevia, he is committed to raising the standard of modern aesthetics through doctor-led, research-driven practice.
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
                  <p className="text-lg text-primary mb-4">Medical & Aesthetic Doctor</p>
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                  Dr. Renée Okhiria is a qualified medical doctor with an MBBS from the University of Manchester and a BSc from Imperial College London. She holds advanced certification in aesthetic medicine, with a focus on non-surgical facial rejuvenation. Known for her artistic eye and meticulous technique, Dr. Renée combines medical precision with creative vision to deliver refined, natural-looking results. Her approach focuses on enhancing each patient’s unique features through evidence-based, minimally invasive treatments, prioritising elegance, harmony, and long-term skin health.
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
                    width="600"
                    height="800"
                    loading="lazy"
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
                    width="480"
                    height="600"
                    loading="lazy"
                    className="rounded-2xl shadow-lg w-full h-auto"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-serif font-bold mb-4">Dr. Manu Sidhu</h2>
                  <p className="text-lg text-primary mb-4">Medical Doctor & Performance Coach</p>
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                  Dr. Manu Okhiria is a medical doctor and certified performance coach with an MBBS and a BSc from Imperial College London. He brings a deep understanding of brain science and human behaviour to his work, helping professionals and high-performers unlock clarity, consistency, and long-term growth. With a special interest in mindset and mental wellbeing, Manu blends clinical insight with evidence-based coaching to guide lasting behavioural transformation. He is the author of The Mind Explored, host of the MindTech podcast, and a clinical advisor to the wellbeing platform Pareful.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-foreground/70">
                      <GraduationCap className="text-primary mr-3 h-5 w-5" />
                      MBBS, BSc, Imperial College London
                    </div>
                    <div className="flex items-center text-foreground/70">
                      <IdCard className="text-primary mr-3 h-5 w-5" />
                      Medical Doctor, High-Performance Coach
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
    </>
  );
}
