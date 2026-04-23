import { Link } from "wouter";
import SEO from "@/components/SEO";
import HomeHero from "@/components/HomeHero";
import heroImageDefault from "@assets/hero_images/homepage/homepage-hero.webp";
import heroImage768 from "@assets/hero_images/homepage/homepage-hero-768w.webp";
import heroImage1280 from "@assets/hero_images/homepage/homepage-hero-1280w.webp";
import heroImage1920 from "@assets/hero_images/homepage/homepage-hero-1920w.webp";
import heroImage2560 from "@assets/hero_images/homepage/homepage-hero-2560w.webp";
import logoGold from "@assets/logos/logo-gold-transparent.webp";
import terrellImage from "@assets/about_pics/terrell-pic3.webp";
import reneeImage from "@assets/about_pics/renee-pic.webp";

export default function Home() {
  const heroImageSources = [
    { src: heroImage768, width: 768 },
    { src: heroImage1280, width: 1280 },
    { src: heroImage1920, width: 1920 },
    { src: heroImage2560, width: 2560 },
    { src: heroImageDefault, width: 4088 },
  ];

  return (
    <>
      <SEO
        title="The Aevia | King's Cross, London"
        description="The Aevia is a doctor-led aesthetics brand based in King's Cross, London. Regenerative treatments designed for natural, lasting results."
        image="/aevia-clinic3.webp"
      />
      <div className="min-h-screen">
        <HomeHero
          backgroundImage={heroImageDefault}
          backgroundSources={heroImageSources}
          logoSrc={logoGold}
          logoWidth={916}
          logoHeight={500}
        />

        <section className="bg-white py-16 sm:py-24 text-[#111]">
          <div className="hero-safe-padding mx-auto max-w-6xl">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-primary/70">LED BY DOCTORS</p>
            <h2 className="mt-6 text-3xl sm:text-4xl font-serif font-normal uppercase tracking-[0.12em]">The team behind The Aevia</h2>
            <p className="mt-4 max-w-3xl text-sm sm:text-base leading-relaxed text-[#3f3a33]">
              Two doctors with complementary specialisms collaborate on every plan. Your treatment mapping, ongoing
              regeneration, and long-term skin health are held by people who understand how biology works.
            </p>
            <div className="mt-12 grid gap-12 lg:grid-cols-2">
              <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
                <div className="overflow-hidden border border-[#d9d0c4]">
                  <img
                    src={terrellImage}
                    alt="Dr. Terrell Okhiria"
                    width={600}
                    height={800}
                    loading="lazy"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-normal uppercase tracking-[0.16em] text-primary">Dr. Terrell Okhiria</h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.28em] text-[#111]">Aesthetic Doctor & GP Trainee</p>
                  <p className="mt-4 text-sm leading-relaxed text-[#4c463d]">
                    MBBS, BSc (Imperial College London). Precision injectables, regenerative protocols, and holistic
                    treatment mapping tailored to your lifestyle.
                  </p>
                </div>
              </div>
              <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
                <div className="overflow-hidden border border-[#d9d0c4]">
                  <img
                    src={reneeImage}
                    alt="Dr. Renée Okhiria"
                    width={600}
                    height={800}
                    loading="lazy"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-normal uppercase tracking-[0.16em] text-primary">Dr. Renée Okhiria</h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.28em] text-[#111]">Aesthetic & Medical Doctor</p>
                  <p className="mt-4 text-sm leading-relaxed text-[#4c463d]">
                    MBBS (Manchester), BSc (Imperial College London). Skin longevity programmes, polynucleotides,
                    and skincare therapeutics rooted in medical expertise.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-16 text-center">
              <Link
                href="/skin"
                className="text-sm tracking-[0.12em] text-primary/80 hover:text-primary transition-colors duration-200"
              >
                Visit Aevia Skin &rarr;
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
