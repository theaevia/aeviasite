import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [location] = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-center">
          {/* Logo */}
          <Link href="/">
            <span className="text-2xl font-serif font-bold text-foreground smooth-transition hover:text-primary cursor-pointer">
              The Aevia
            </span>
          </Link>
          
          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-8 ml-12">
            <Link href="/">
              <span className={cn(
                "text-sm font-medium smooth-transition hover:text-primary cursor-pointer",
                isActive("/") ? "text-primary font-semibold" : "text-foreground"
              )}>
                Home
              </span>
            </Link>
            <Link href="/skin">
              <span className={cn(
                "text-sm font-medium smooth-transition hover:text-primary cursor-pointer",
                isActive("/skin") ? "text-primary font-semibold" : "text-foreground"
              )}>
                Skin
              </span>
            </Link>
            <Link href="/mind">
              <span className={cn(
                "text-sm font-medium smooth-transition hover:text-primary cursor-pointer",
                isActive("/mind") ? "text-primary font-semibold" : "text-foreground"
              )}>
                Mind
              </span>
            </Link>
            <Link href="/about">
              <span className={cn(
                "text-sm font-medium smooth-transition hover:text-primary cursor-pointer",
                isActive("/about") ? "text-primary font-semibold" : "text-foreground"
              )}>
                About
              </span>
            </Link>
            <Link href="/journal">
              <span className={cn(
                "text-sm font-medium smooth-transition hover:text-primary cursor-pointer",
                isActive("/journal") ? "text-primary font-semibold" : "text-foreground"
              )}>
                Journal
              </span>
            </Link>
            <Link href="/contact">
              <span className={cn(
                "text-sm font-medium smooth-transition hover:text-primary cursor-pointer",
                isActive("/contact") ? "text-primary font-semibold" : "text-foreground"
              )}>
                Contact
              </span>
            </Link>
          </div>
          
          {/* Right side icons */}
          <div className="hidden md:flex items-center space-x-4 ml-12">
            <a href="https://instagram.com/theaevia" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary smooth-transition">
              <Instagram className="h-5 w-5" />
            </a>
            <Link href="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
