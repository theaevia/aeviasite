import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Instagram, Menu, X, User, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import logoBlack from "@assets/logos/logo-black-transparent.webp";
import logoGold from "@assets/logos/logo-gold-transparent.webp";
import TikTokIcon from "@assets/svgs/tiktok-fill-svgrepo-com.svg?react";
import { FaGoogle } from "react-icons/fa";
import { treatmentCategories, TreatmentCategory, Treatment } from "@/data/treatments";

// Add slugify helper (same as in CategoryPage)
const slugify = (str: string) =>
  str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isConsultationsOpen, setIsConsultationsOpen] = useState(false);
  // Add state for mobile Treatments menu
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsAboutOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsAboutOpen(false);
    setIsConsultationsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="grid grid-cols-3 items-center">
          {/* Logo */}
          <div className="justify-self-start">
            <Link href="/">
              <div onClick={handleLinkClick} className="cursor-pointer group relative smooth-transition flex-shrink-0">
                <img
                  src={logoBlack}
                  alt="The Aevia"
                  width="916"
                  height="500"
                  className="h-16 w-auto group-hover:opacity-0 smooth-transition"
                />
                <img
                  src={logoGold}
                  alt="The Aevia"
                  width="916"
                  height="500"
                  className="h-16 w-auto absolute top-0 left-0 opacity-0 group-hover:opacity-100 smooth-transition"
                />
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden nav:flex items-center space-x-8 justify-self-center">
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <span
                  className={cn(
                    "text-sm font-medium smooth-transition hover:text-primary cursor-pointer flex items-center",
                    isActive("/consultations/skin") || isActive("/consultations/mind")
                      ? "text-primary font-semibold"
                      : "text-foreground"
                  )}
                >
                  Consultation <ChevronDown className="ml-1 h-4 w-4" />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <Link href="/consultations/skin">
                  <DropdownMenuItem onSelect={handleLinkClick} className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary">
                    Skin
                  </DropdownMenuItem>
                </Link>
                <Link href="/consultations/mind">
                  <DropdownMenuItem onSelect={handleLinkClick} className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary">
                    Mind
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <span
                  className={cn(
                    "text-sm font-medium smooth-transition hover:text-primary cursor-pointer flex items-center",
                    isActive("/treatments") ? "text-primary font-semibold" : "text-foreground"
                  )}
                >
                  Treatments <ChevronDown className="ml-1 h-4 w-4" />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <Link href="/treatments">
                  <DropdownMenuItem onSelect={handleLinkClick} className="hover:bg-primary/10 focus:bg-primary/10 font-semibold hover:text-primary">
                    All Treatments
                  </DropdownMenuItem>
                </Link>
                <Link href="/categories/anti-wrinkle">
                  <DropdownMenuItem onSelect={handleLinkClick} className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary">
                    Anti‑Wrinkle
                  </DropdownMenuItem>
                </Link>
                <Link href="/categories/skin-boosters">
                  <DropdownMenuItem onSelect={handleLinkClick} className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary">
                    Skin Boosters
                  </DropdownMenuItem>
                </Link>
                <Link href="/categories/polynucleotides">
                  <DropdownMenuItem onSelect={handleLinkClick} className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary">
                    Polynucleotides
                  </DropdownMenuItem>
                </Link>
                <Link href="/categories/bio-voluminisation">
                  <DropdownMenuItem onSelect={handleLinkClick} className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary">
                    Bio-Volumisation
                  </DropdownMenuItem>
                </Link>
                <Link href="/categories/microneedling-peels">
                  <DropdownMenuItem onSelect={handleLinkClick} className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary">
                    Microneedling & Peels
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <span
                  className={cn(
                    "text-sm font-medium smooth-transition hover:text-primary cursor-pointer flex items-center",
                    isActive("/team") || isActive("/clinic")
                      ? "text-primary font-semibold"
                      : "text-foreground"
                  )}
                >
                  About <ChevronDown className="ml-1 h-4 w-4" />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <Link href="/team">
                  <DropdownMenuItem
                    onSelect={handleLinkClick}
                    className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary"
                  >
                    Our Team
                  </DropdownMenuItem>
                </Link>
                <Link href="/clinic">
                  <DropdownMenuItem
                    onSelect={handleLinkClick}
                    className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary"
                  >
                    Our Clinic
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
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
          <div className="justify-self-end hidden nav:flex items-center space-x-6">
            <a href="https://instagram.com/the.aevia" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary smooth-transition">
              <Instagram className="h-5 w-5" strokeWidth={3} />
            </a>
            <a href="https://www.tiktok.com/@the.aevia" aria-label="TikTok" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary smooth-transition">
              <TikTokIcon className="h-5 w-5" />
            </a>
            <a href="https://maps.app.goo.gl/QBv4AiVSUycnsDJaA" aria-label="Google Reviews" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary smooth-transition">
              <FaGoogle className="h-4 w-4 fill-current" />
            </a>
            <Link href="/consultations/skin">
              <Button onClick={handleLinkClick} className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="nav:hidden col-span-2 justify-self-end">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-primary smooth-transition"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="nav:hidden mt-4 pb-4 border-t border-gray-100">
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
              <button
                onClick={() => setIsConsultationsOpen(!isConsultationsOpen)}
                className={cn(
                  "flex items-center justify-between w-full text-left text-sm font-medium smooth-transition hover:text-primary cursor-pointer px-2 py-1",
                  (isActive("/consultations/skin") || isActive("/consultations/mind")) && "text-primary font-semibold"
                )}
              >
                <span>Consultation</span>
                <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", isConsultationsOpen && "rotate-180")} />
              </button>
              {isConsultationsOpen && (
                <div className="ml-4 flex flex-col space-y-2">
                  <Link href="/consultations/skin">
                    <span onClick={handleLinkClick} className="block text-sm font-medium smooth-transition cursor-pointer px-2 py-1 hover:text-primary">
                      Skin
                    </span>
                  </Link>
                  <Link href="/consultations/mind">
                    <span onClick={handleLinkClick} className="block text-sm font-medium smooth-transition cursor-pointer px-2 py-1 hover:text-primary">
                      Mind
                    </span>
                  </Link>
                </div>
              )}
              <button
                onClick={() => setIsTreatmentsOpen(!isTreatmentsOpen)}
                className={cn(
                  "flex items-center justify-between w-full text-left text-sm font-medium smooth-transition hover:text-primary cursor-pointer px-2 py-1",
                  isActive("/treatments") && "text-primary font-semibold"
                )}
              >
                <span>Treatments</span>
                <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", isTreatmentsOpen && "rotate-180")} />
              </button>
              {isTreatmentsOpen && (
                <div className="ml-4 flex flex-col space-y-2">
                  <Link href="/treatments">
                    <span
                      onClick={handleLinkClick}
                      className={cn(
                        "block text-sm font-medium smooth-transition cursor-pointer px-2 py-1 hover:text-primary",
                        isActive("/treatments") ? "text-primary font-semibold" : "text-foreground"
                      )}
                    >
                      All Treatments
                    </span>
                  </Link>
                  <Link href="/categories/anti-wrinkle">
                    <span onClick={handleLinkClick} className="block text-sm font-medium smooth-transition cursor-pointer px-2 py-1 hover:text-primary">
                      Anti‑Wrinkle
                    </span>
                  </Link>
                  <Link href="/categories/skin-boosters">
                    <span onClick={handleLinkClick} className="block text-sm font-medium smooth-transition cursor-pointer px-2 py-1 hover:text-primary">
                      Skin Boosters
                    </span>
                  </Link>
                  <Link href="/categories/polynucleotides">
                    <span onClick={handleLinkClick} className="block text-sm font-medium smooth-transition cursor-pointer px-2 py-1 hover:text-primary">
                      Polynucleotides
                    </span>
                  </Link>
                  <Link href="/categories/bio-voluminisation">
                    <span onClick={handleLinkClick} className="block text-sm font-medium smooth-transition cursor-pointer px-2 py-1 hover:text-primary">
                      Bio-Volumisation
                    </span>
                  </Link>
                  <Link href="/categories/microneedling-peels">
                    <span onClick={handleLinkClick} className="block text-sm font-medium smooth-transition cursor-pointer px-2 py-1 hover:text-primary">
                      Microneedling & Peels
                    </span>
                  </Link>
                </div>
              )}
              <button
                onClick={() => setIsAboutOpen(!isAboutOpen)}
                className={cn(
                  "flex items-center justify-between w-full text-left text-sm font-medium smooth-transition hover:text-primary cursor-pointer px-2 py-1",
                  (isActive("/team") || isActive("/clinic")) && "text-primary font-semibold"
                )}
              >
                <span>About</span>
                <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", isAboutOpen && "rotate-180")} />
              </button>
              {isAboutOpen && (
                <div className="ml-4 flex flex-col space-y-2">
                  <Link href="/team">
                    <span
                      onClick={handleLinkClick}
                      className={cn(
                        "block text-sm font-medium smooth-transition cursor-pointer px-2 py-1 hover:text-primary",
                        isActive("/team") ? "text-primary font-semibold" : "text-foreground"
                      )}
                    >
                      Our Team
                    </span>
                  </Link>
                  <Link href="/clinic">
                    <span
                      onClick={handleLinkClick}
                      className={cn(
                        "block text-sm font-medium smooth-transition cursor-pointer px-2 py-1 hover:text-primary",
                        isActive("/clinic") ? "text-primary font-semibold" : "text-foreground"
                      )}
                    >
                      Our Clinic
                    </span>
                  </Link>
                </div>
              )}
              <Link href="/journal">
                <span onClick={handleLinkClick} className={cn(
                  "block text-sm font-medium smooth-transition hover:text-primary cursor-pointer px-2 py-1",
                  isActive("/journal") ? "text-primary font-semibold" : "text-foreground"
                )}>
                  Journal
                </span>
              </Link>
              
              <div className="flex items-center space-x-6 pt-4">
                <a href="https://instagram.com/the.aevia" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary smooth-transition">
                  <Instagram className="h-5 w-5" strokeWidth={2.5} />
                </a>
                <a href="https://www.tiktok.com/@the.aevia" aria-label="TikTok" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary smooth-transition">
                  <TikTokIcon className="h-5 w-5" />
                </a>
                <a href="https://g.page/r/CQqjt1Rcym1uQ9ByB6" aria-label="Google Reviews" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary smooth-transition">
                  <FaGoogle className="h-4 w-4 fill-current" />
                </a>
                <Link href="/consultations/skin">
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
