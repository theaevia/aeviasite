import Navigation from "./Navigation";
import Footer from "./Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { useEffect } from "react";

interface TreatmentLayoutProps {
  children: React.ReactNode;
}

export default function TreatmentLayout({ children }: TreatmentLayoutProps) {
  useEffect(() => {
    // Header height logic
    const setHeaderHeight = () => {
      const header = document.querySelector('nav.fixed') as HTMLElement;
      if (!header) return;
      document.documentElement.style.setProperty(
        '--header-h',
        `${header.offsetHeight}px`
      );
    };
    setHeaderHeight();
    window.addEventListener('resize', setHeaderHeight);
    return () => {
      window.removeEventListener('resize', setHeaderHeight);
    };
  }, []);

  return (
    <div className="min-h-[calc(100vh-var(--header-h))] bg-background">
      <Navigation />
      {children}
    </div>
  );
} 