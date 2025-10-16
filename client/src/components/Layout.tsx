import Navigation from "./Navigation";
import Footer from "./Footer";
import { useEffect } from "react";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import MobileStickyBookingBar from "@/components/MobileStickyBookingBar";
import { useLocation } from "wouter";
import { Helmet } from "react-helmet-async";
import { getSiteOrigin, withSiteUrl } from "@/lib/env";

interface LayoutProps {
  children: React.ReactNode;
}

const createOrganizationSchema = (siteOrigin: string) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "The Aevia",
  "url": siteOrigin,
  "logo": withSiteUrl("/aevia-logo.png"),
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
        "url": withSiteUrl("/team"),
      },
      {
        "@type": "Person",
        "name": "Dr Renée Okhiria",
        "jobTitle": "Co-Founder",
        "url": withSiteUrl("/team"),
      },
      {
        "@type": "Person",
        "name": "Dr Manu Sidhu",
        "jobTitle": "Co-Founder",
        "url": withSiteUrl("/team"),
      }
    ],
    "department": [
      {
        "@type": "MedicalClinic",
        "name": "Aevia Skin",
        "url": withSiteUrl("/skin"),
        "logo": withSiteUrl("/aevia-skin.png"),
        "image": withSiteUrl("/aevia-skin.png"),
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
        "Tu 13:00-18:00",
        "We 10:00-18:00",
        "Sa 10:00-18:00",
        "Su 10:00-18:00"
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
            "url": withSiteUrl("/team"),
          },
          {
            "@type": "Person",
            "name": "Dr Renée Okhiria",
            "jobTitle": "Medical Aesthetic Doctor",
            "url": withSiteUrl("/team"),
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
        "url": withSiteUrl("/mind"),
        "logo": withSiteUrl("/aevia-mind.png"),
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
        "Tu 13:00-18:00",
        "We 10:00-18:00",
        "Sa 10:00-18:00",
        "Su 10:00-18:00"
      ],
        "founder": {
          "@type": "Person",
          "name": "Dr Manu Sidhu",
          "jobTitle": "Medical Doctor, Performance and Transformative Coach",
          "url": withSiteUrl("/team"),
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
});

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const isBioRoute = location.startsWith("/bio") || location.startsWith("/tiktok");
  const isMindExploredRoute = location.startsWith("/themindexplored");
  const hideNavigation = isBioRoute || isMindExploredRoute;
  const showFooter = !isBioRoute;
  const showFooterExtras = showFooter && !isMindExploredRoute;
  useEffect(() => {
    const siteOrigin = getSiteOrigin();
    const organizationSchema = createOrganizationSchema(siteOrigin);
    // Add JSON-LD script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(organizationSchema);
    document.head.appendChild(script);

    // Header/Footer height logic
    const setLayoutHeights = () => {
      const header = document.querySelector('nav.fixed') as HTMLElement | null;
      const footer = document.querySelector('footer') as HTMLElement | null;
      document.documentElement.style.setProperty('--header-h', `${header?.offsetHeight ?? 0}px`);
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

  useEffect(() => {
    if (typeof window === "undefined") return;

    const cleanupMailerlitePopups = () => {
      const popupSelectors = [
        'body > div[id^="mlb2-"]',
        'body > div[id^="ml-"]',
        'body > div[class*="ml-form-popup"]',
        'body > div[class*="ml-iframe-popup"]',
        'body > div[class*="ml-popup"]',
        '.ml-form-overlay',
        '.ml-popup-overlay',
        '.ml-form-popover',
        '.ml-underlay',
        '.ml-iframe-overlay'
      ];

      popupSelectors.forEach((selector) => {
        document.querySelectorAll(selector).forEach((element) => {
          if (element instanceof HTMLElement) {
            element.remove();
          }
        });
      });

      const classesToClear = [
        'ml-open',
        'ml-active',
        'ml-visible',
        'ml-popup-open',
        'ml-no-scroll',
        'ml-body-overflow'
      ];

      classesToClear.forEach((cls) => {
        document.body.classList.remove(cls);
        document.documentElement.classList.remove(cls);
      });

      if (document.body.style.overflow === 'hidden') {
        document.body.style.removeProperty('overflow');
      }
      if (document.documentElement.style.overflow === 'hidden') {
        document.documentElement.style.removeProperty('overflow');
      }
    };

    cleanupMailerlitePopups();

    return () => {
      cleanupMailerlitePopups();
    };
  }, [location]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet prioritizeSeoTags>
        <script>
          {`(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[]).push(arguments);},l=d.createElement(e),l.async=1,l.src=u,n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})(window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');ml('account', '1767273');`}
        </script>
      </Helmet>
      {!hideNavigation && <Navigation />}
      <main className={`${hideNavigation ? '' : 'pt-[var(--header-h,80px)]'} flex-1`}>{children}</main>
      {showFooterExtras && (
        <div className="w-full bg-white border-t border-muted-foreground/10 py-2">
          <div className="max-w-6xl mx-auto px-4 text-center text-sm text-primary font-medium">
            ★★★★★ Google • GMC-registered • Fully insured
          </div>
        </div>
      )}
      {showFooter && <Footer />}
      {showFooterExtras && (
        <>
          <MobileStickyBookingBar />
          <WhatsAppWidget />
        </>
      )}
    </div>
  );
}
