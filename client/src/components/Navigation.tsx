import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Instagram, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <span onClick={handleLinkClick} className="text-2xl font-serif font-bold text-foreground smooth-transition hover:text-primary cursor-pointer">
              The Aevia
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <span onClick={handleLinkClick} className={cn(
                "text-sm font-medium smooth-transition hover:text-primary cursor-pointer",
                isActive("/") ? "text-primary font-semibold" : "text-foreground"
              )}>
                Home
              </span>
            </Link>
            <Link href="/skin">
              <span onClick={handleLinkClick} className={cn(
                "text-sm font-medium smooth-transition hover:text-primary cursor-pointer",
                isActive("/skin") ? "text-primary font-semibold" : "text-foreground"
              )}>
                Skin
              </span>
            </Link>
            <Link href="/mind">
              <span onClick={handleLinkClick} className={cn(
                "text-sm font-medium smooth-transition hover:text-primary cursor-pointer",
                isActive("/mind") ? "text-primary font-semibold" : "text-foreground"
              )}>
                Mind
              </span>
            </Link>
            <Link href="/about">
              <span onClick={handleLinkClick} className={cn(
                "text-sm font-medium smooth-transition hover:text-primary cursor-pointer",
                isActive("/about") ? "text-primary font-semibold" : "text-foreground"
              )}>
                About
              </span>
            </Link>
            <Link href="/journal">
              <span onClick={handleLinkClick} className={cn(
                "text-sm font-medium smooth-transition hover:text-primary cursor-pointer",
                isActive("/journal") ? "text-primary font-semibold" : "text-foreground"
              )}>
                Journal
              </span>
            </Link>
            <Link href="/contact">
              <span onClick={handleLinkClick} className={cn(
                "text-sm font-medium smooth-transition hover:text-primary cursor-pointer",
                isActive("/contact") ? "text-primary font-semibold" : "text-foreground"
              )}>
                Contact
              </span>
            </Link>
          </div>
          
          {/* Right side icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://instagram.com/theaevia" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary smooth-transition">
              <Instagram className="h-5 w-5" />
            </a>
            <Link href="/contact">
              <Button onClick={handleLinkClick} className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-primary smooth-transition"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4 pt-4">
              <Link href="/">
                <span onClick={handleLinkClick} className={cn(
                  "block text-sm font-medium smooth-transition hover:text-primary cursor-pointer px-2 py-1",
                  isActive("/") ? "text-primary font-semibold" : "text-foreground"
                )}>
                  Home
                </span>
              </Link>
              <Link href="/skin">
                <span onClick={handleLinkClick} className={cn(
                  "block text-sm font-medium smooth-transition hover:text-primary cursor-pointer px-2 py-1",
                  isActive("/skin") ? "text-primary font-semibold" : "text-foreground"
                )}>
                  Skin
                </span>
              </Link>
              <Link href="/mind">
                <span onClick={handleLinkClick} className={cn(
                  "block text-sm font-medium smooth-transition hover:text-primary cursor-pointer px-2 py-1",
                  isActive("/mind") ? "text-primary font-semibold" : "text-foreground"
                )}>
                  Mind
                </span>
              </Link>
              <Link href="/about">
                <span onClick={handleLinkClick} className={cn(
                  "block text-sm font-medium smooth-transition hover:text-primary cursor-pointer px-2 py-1",
                  isActive("/about") ? "text-primary font-semibold" : "text-foreground"
                )}>
                  About
                </span>
              </Link>
              <Link href="/journal">
                <span onClick={handleLinkClick} className={cn(
                  "block text-sm font-medium smooth-transition hover:text-primary cursor-pointer px-2 py-1",
                  isActive("/journal") ? "text-primary font-semibold" : "text-foreground"
                )}>
                  Journal
                </span>
              </Link>
              <Link href="/contact">
                <span onClick={handleLinkClick} className={cn(
                  "block text-sm font-medium smooth-transition hover:text-primary cursor-pointer px-2 py-1",
                  isActive("/contact") ? "text-primary font-semibold" : "text-foreground"
                )}>
                  Contact
                </span>
              </Link>
              
              <div className="flex items-center space-x-4 pt-4">
                <a href="https://instagram.com/theaevia" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary smooth-transition">
                  <Instagram className="h-5 w-5" />
                </a>
                <Link href="/contact">
                  <Button onClick={handleLinkClick} className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
