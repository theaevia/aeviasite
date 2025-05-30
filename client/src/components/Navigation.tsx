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
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-1">
            <Link href="/">
              <a className="text-2xl font-serif font-bold text-foreground smooth-transition hover:text-primary">
                The Aevia
              </a>
            </Link>
          </div>
          
          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <a className={cn(
                "text-sm font-medium smooth-transition hover:text-primary",
                isActive("/") ? "text-primary font-semibold" : "text-foreground"
              )}>
                Home
              </a>
            </Link>
            <Link href="/skin">
              <a className={cn(
                "text-sm font-medium smooth-transition hover:text-primary",
                isActive("/skin") ? "text-primary font-semibold" : "text-foreground"
              )}>
                Skin
              </a>
            </Link>
            <Link href="/mind">
              <a className={cn(
                "text-sm font-medium smooth-transition hover:text-primary",
                isActive("/mind") ? "text-primary font-semibold" : "text-foreground"
              )}>
                Mind
              </a>
            </Link>
            <Link href="/about">
              <a className={cn(
                "text-sm font-medium smooth-transition hover:text-primary",
                isActive("/about") ? "text-primary font-semibold" : "text-foreground"
              )}>
                About
              </a>
            </Link>
            <Link href="/journal">
              <a className={cn(
                "text-sm font-medium smooth-transition hover:text-primary",
                isActive("/journal") ? "text-primary font-semibold" : "text-foreground"
              )}>
                Journal
              </a>
            </Link>
            <Link href="/contact">
              <a className={cn(
                "text-sm font-medium smooth-transition hover:text-primary",
                isActive("/contact") ? "text-primary font-semibold" : "text-foreground"
              )}>
                Contact
              </a>
            </Link>
          </div>
          
          {/* Contact Info */}
          <div className="flex-1 flex justify-end items-center space-x-4">
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
