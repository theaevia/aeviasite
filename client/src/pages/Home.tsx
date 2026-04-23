import SEO from "@/components/SEO";
import HomeHero from "@/components/HomeHero";
import heroImageDefault from "@assets/hero_images/homepage/homepage-hero.webp";
import heroImage768 from "@assets/hero_images/homepage/homepage-hero-768w.webp";
import heroImage1280 from "@assets/hero_images/homepage/homepage-hero-1280w.webp";
import heroImage1920 from "@assets/hero_images/homepage/homepage-hero-1920w.webp";
import heroImage2560 from "@assets/hero_images/homepage/homepage-hero-2560w.webp";
import logoGold from "@assets/logos/logo-gold-transparent.webp";

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
      </div>
    </>
  );
}
