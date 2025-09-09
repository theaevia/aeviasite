import Navigation from "./Navigation";
import Footer from "./Footer";
import { useEffect } from "react";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import MobileStickyBookingBar from "@/components/MobileStickyBookingBar";
import { useLocation } from "wouter";

interface LayoutProps {
  children: React.ReactNode;
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "The Aevia",
  "url": "https://www.theaevia.co.uk",
  "logo": "/aevia-logo.png",
  "description": "The Aevia is a premium doctor-led brand combining advanced aesthetic treatments with transformative performance coaching.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "260 Pentonville Road, Minsony",
    "addressLocality": "London",
    "addressRegion": "England",
    "postalCode": "N1 9JY",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "51.53095626831055",
    "longitude": "-0.11996394395828247"
  },
  "founder": [
    {
      "@type": "Person",
      "name": "Dr Terrell Okhiria",
      "jobTitle": "Co-Founder",
      "url": "https://www.theaevia.co.uk/team"
    },
    {
      "@type": "Person",
      "name": "Dr Renée Okhiria",
      "jobTitle": "Co-Founder",
      "url": "https://www.theaevia.co.uk/team"
    },
    {
      "@type": "Person",
      "name": "Dr Manu Sidhu",
      "jobTitle": "Co-Founder",
      "url": "https://www.theaevia.co.uk/team"
    }
  ],
  "department": [
    {
      "@type": "MedicalClinic",
      "name": "Aevia Skin",
      "url": "https://www.theaevia.co.uk/skin",
      "logo": "/aevia-skin.png",
      "image": "/aevia-skin.png",
      "description": "Doctor-led clinic offering advanced skin rejuvenation, including polynucleotides, skin boosters, and anti-wrinkle treatments.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "260 Pentonville Road, Minsony",
        "addressLocality": "London",
        "addressRegion": "England",
        "postalCode": "N1 9JY",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "51.53095626831055",
        "longitude": "-0.11996394395828247"
      },
      "openingHours": [
        "Mo,Tu,We,Th,Fr 10:00-18:00"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "10"
      },
      "founder": [
        {
          "@type": "Person",
          "name": "Dr Terrell Okhiria",
          "jobTitle": "Medical Aesthetic Doctor",
          "url": "https://www.theaevia.co.uk/team"
        },
        {
          "@type": "Person",
          "name": "Dr Renée Okhiria",
          "jobTitle": "Medical Aesthetic Doctor",
          "url": "https://www.theaevia.co.uk/team"
        }
      ],
      "service": {
        "@type": "Service",
        "name": "Skin Refresh Package",
        "description": "A signature treatment combining targeted polynucleotides with anti-wrinkle injections to deeply rejuvenate, hydrate, and refine the skin — promoting cellular renewal and a naturally refreshed appearance.",
        "provider": {
          "@type": "MedicalClinic",
          "name": "Aevia Skin"
        }
      }
    },
    {
      "@type": "HealthAndBeautyBusiness",
      "name": "Aevia Mind",
      "url": "https://www.theaevia.co.uk/mind",
      "logo": "/aevia-mind.png",
      "description": "Doctor-led performance and transformative coaching for professionals, led by Dr Manu Sidhu.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "260 Pentonville Road, Minsony",
        "addressLocality": "London",
        "addressRegion": "England",
        "postalCode": "N1 9JY",
        "addressCountry": "GB"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "51.53095626831055",
        "longitude": "-0.11996394395828247"
      },
      "openingHours": [
        "Mo,Tu,We,Th,Fr 10:00-18:00"
      ],
      "founder": {
        "@type": "Person",
        "name": "Dr Manu Sidhu",
        "jobTitle": "Medical Doctor, Performance and Transformative Coach",
        "url": "https://www.theaevia.co.uk/team"
      },
      "service": {
        "@type": "Service",
        "name": "Mind Breakthrough Session",
        "description": "A premium 90-minute session combining mindset clarity with strategic performance coaching.",
        "provider": {
          "@type": "ProfessionalService",
          "name": "Aevia Mind"
        }
      }
    }
  ]
};

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const isBioRoute = location.startsWith("/bio") || location.startsWith("/tiktok");
  useEffect(() => {
    // Add JSON-LD script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(organizationSchema);
    document.head.appendChild(script);

    // Header/Footer height logic
    const setLayoutHeights = () => {
      const header = document.querySelector('nav.fixed') as HTMLElement | null;
      const footer = document.querySelector('footer') as HTMLElement | null;
      if (header) {
        document.documentElement.style.setProperty('--header-h', `${header.offsetHeight}px`);
      }
      if (footer) {
        document.documentElement.style.setProperty('--footer-h', `${footer.offsetHeight}px`);
      }
    };

    setLayoutHeights();
    window.addEventListener('resize', setLayoutHeights);
    
    return () => {
      window.removeEventListener('resize', setLayoutHeights);
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="pt-[var(--header-h,80px)] flex-1">{children}</main>
      {!isBioRoute && (
        <>
          {/* Social proof strip */}
          <div className="w-full bg-white border-t border-muted-foreground/10 py-2">
            <div className="max-w-6xl mx-auto px-4 text-center text-sm text-primary font-medium">
              ★★★★★ Google • GMC-registered • Fully insured
            </div>
          </div>
          <Footer />
          <MobileStickyBookingBar />
          <WhatsAppWidget />
        </>
      )}
    </div>
  );
}
