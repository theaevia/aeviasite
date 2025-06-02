import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Instagram, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import logoBlack from "@assets/logos/logo-black-transparent.png";
import logoGold from "@assets/logos/logo-gold-transparent.png";
import TikTokIcon from "@assets/svgs/tiktok-fill-svgrepo-com.svg?react";

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
            <div onClick={handleLinkClick} className="cursor-pointer group relative smooth-transition">
              <img 
                src={logoBlack} 
                alt="The Aevia" 
                className="h-16 w-auto group-hover:opacity-0 smooth-transition"
              />
              <img 
                src={logoGold} 
                alt="The Aevia" 
                className="h-16 w-auto absolute top-0 left-0 opacity-0 group-hover:opacity-100 smooth-transition"
              />
            </div>
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
            <Link href="/consultations">
              <span onClick={handleLinkClick} className={cn(
                "text-sm font-medium smooth-transition hover:text-primary cursor-pointer",
                isActive("/consultations") ? "text-primary font-semibold" : "text-foreground"
              )}>
                Consultations
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
          </div>
          
          {/* Right side icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://instagram.com/the.aevia" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary smooth-transition">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.tiktok.com/@the.aevia" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary smooth-transition">
              <TikTokIcon className="h-5 w-5" />
            </a>
            <Link href="/consultations">
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
              <Link href="/consultations">
                <span onClick={handleLinkClick} className={cn(
                  "block text-sm font-medium smooth-transition hover:text-primary cursor-pointer px-2 py-1",
                  isActive("/consultations") ? "text-primary font-semibold" : "text-foreground"
                )}>
                  Consultations
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
              
              <div className="flex items-center space-x-4 pt-4">
                <a href="https://instagram.com/the.aevia" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary smooth-transition">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.tiktok.com/@the.aevia" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary smooth-transition">
                  <TikTokIcon className="h-5 w-5" />
                </a>
                <Link href="/consultations">
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
