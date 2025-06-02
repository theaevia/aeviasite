import Navigation from "./Navigation";
import Footer from "./Footer";
import { useEffect } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  useEffect(() => {
    const setHeaderHeight = () => {
      const header = document.querySelector('nav.fixed') as HTMLElement;
      if (!header) return;
      document.documentElement.style.setProperty(
        '--header-h',
        `${header.offsetHeight}px`
      );
    };

    // Set initial height
    setHeaderHeight();
    
    // Update on resize
    window.addEventListener('resize', setHeaderHeight);
    
    // Cleanup
    return () => window.removeEventListener('resize', setHeaderHeight);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-[var(--header-h,80px)]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
