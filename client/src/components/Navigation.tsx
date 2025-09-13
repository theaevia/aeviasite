import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Instagram, Menu, X, User, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuSeparator,
  DropdownMenuLabel,
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
  // Mobile submenu states
  const [isSkinOpen, setIsSkinOpen] = useState(false);
  const [isMindOpen, setIsMindOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  // Mobile Skin sub-sections
  const [isSkinAntiOpen, setIsSkinAntiOpen] = useState(false);
  const [isSkinBoostersHeadOpen, setIsSkinBoostersHeadOpen] = useState(false);
  const [isSkinPnoOpen, setIsSkinPnoOpen] = useState(false);
  const [isSkinBioOpen, setIsSkinBioOpen] = useState(false);
  const [isPoliciesOpen, setIsPoliciesOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  // Disambiguate which top-level menu to highlight when multiple match (e.g. Mind vs Consult)
  const [activeMenu, setActiveMenu] = useState<null | 'skin' | 'mind' | 'consult' | 'about' | 'resources'>(null);
  const matches = (paths: string[]) => paths.some((p) => isActive(p));
  const flags = {
    skin: matches(["/treatments", "/categories/", "/gallery"]),
    mind: matches(["/mind", "/consultations/mind"]),
    consult: matches(["/consultations/skin", "/consultations/mind"]),
    about: matches(["/team", "/clinic"]),
    resources: matches(["/journal", "/privacy", "/terms", "/cancellation"]),
  } as const;
  const keys: Array<keyof typeof flags> = ["skin", "mind", "consult", "about", "resources"];
  const matchingKeys = keys.filter((k) => flags[k]);
  const preferredKey = activeMenu && flags[activeMenu] ? activeMenu : matchingKeys[0] || null;
  const isHighlighted = (key: keyof typeof flags) => flags[key] && preferredKey === key;

  const onNavSelect = (key: 'skin' | 'mind' | 'consult' | 'about' | 'resources') => {
    setActiveMenu(key);
    handleLinkClick();
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
    setIsSkinOpen(false);
    setIsResourcesOpen(false);
    setIsConsultOpen(false);
    setIsSkinAntiOpen(false);
    setIsSkinBoostersHeadOpen(false);
    setIsSkinPnoOpen(false);
    setIsSkinBioOpen(false);
    setIsPoliciesOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  useEffect(() => {
    // simplest & robust enough
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
  }, [isMobileMenuOpen]);

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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <span
                  className={cn(
                    "text-sm font-medium smooth-transition hover:text-primary cursor-pointer flex items-center",
                    isHighlighted('skin') ? "text-primary font-semibold" : "text-foreground"
                  )}
                  onClick={() => setActiveMenu('skin')}
                >
                  Skin <ChevronDown className="ml-1 h-4 w-4" />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <Link href="/skin">
                  <DropdownMenuItem onSelect={() => onNavSelect('skin')} className="hover:bg-primary/10 focus:bg-primary/10 font-semibold hover:text-primary">
                    Overview
                  </DropdownMenuItem>
                </Link>
                <Link href="/treatments">
                  <DropdownMenuItem onSelect={() => onNavSelect('skin')} className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary">
                    All Treatments & Prices
                  </DropdownMenuItem>
                </Link>
                <Link href="/treatments#signature-offers">
                  <DropdownMenuItem onSelect={() => onNavSelect('skin')} className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary">
                    <span>Signature Offers</span>
                    <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary">Featured</span>
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary data-[state=open]:bg-primary/10 data-[state=open]:text-primary">Anti‑Wrinkle</DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <Link href="/treatments/anti-wrinkle">
                      <DropdownMenuItem onSelect={() => onNavSelect('skin')} className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary">Forehead, Frown & Crow's Feet</DropdownMenuItem>
                    </Link>
                    <Link href="/treatments/jawline-slimming">
                      <DropdownMenuItem onSelect={() => onNavSelect('skin')} className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary">Jawline Slimming</DropdownMenuItem>
                    </Link>
                    <Link href="/treatments/smile-lift">
                      <DropdownMenuItem onSelect={() => onNavSelect('skin')} className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary">Smile Lift</DropdownMenuItem>
                    </Link>
                    <Link href="/treatments/neck-lift">
                      <DropdownMenuItem onSelect={() => onNavSelect('skin')} className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary">Neck Lift</DropdownMenuItem>
                    </Link>
                    <Link href="/treatments/sweat-control">
                      <DropdownMenuItem onSelect={() => onNavSelect('skin')} className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary">Sweat Control</DropdownMenuItem>
                    </Link>
                    <Link href="/treatments/lower-face-contour-duo">
                      <DropdownMenuItem onSelect={() => onNavSelect('skin')} className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary">Lower Face Contour Duo</DropdownMenuItem>
                    </Link>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary data-[state=open]:bg-primary/10 data-[state=open]:text-primary">Skin Boosters</DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <Link href="/treatments/profhilo">
                      <DropdownMenuItem onSelect={() => onNavSelect('skin')} className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary">Profhilo®</DropdownMenuItem>
                    </Link>
                    <Link href="/treatments/sunekos">
                      <DropdownMenuItem onSelect={() => onNavSelect('skin')} className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary">Sunekos</DropdownMenuItem>
                    </Link>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary data-[state=open]:bg-primary/10 data-[state=open]:text-primary">Polynucleotides</DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <Link href="/treatments/full-face-regeneration">
                      <DropdownMenuItem onSelect={() => onNavSelect('skin')} className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary">Full Face (Plinest)</DropdownMenuItem>
                    </Link>
                    <Link href="/treatments/eye-rejuvenation">
                      <DropdownMenuItem onSelect={() => onNavSelect('skin')} className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary">Eye (Plinest Eye)</DropdownMenuItem>
                    </Link>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary data-[state=open]:bg-primary/10 data-[state=open]:text-primary">Bio‑Volumisation</DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <Link href="/treatments/sculptra">
                      <DropdownMenuItem onSelect={() => onNavSelect('skin')} className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary">Sculptra</DropdownMenuItem>
                    </Link>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <Link href="/categories/microneedling-peels">
                  <DropdownMenuItem onSelect={() => onNavSelect('skin')} className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary">Microneedling & Peels</DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <Link href="/gallery">
                  <DropdownMenuItem onSelect={() => onNavSelect('skin')} className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary">Results (Gallery)</DropdownMenuItem>
                </Link>
                <DropdownMenuItem disabled>Packages / Memberships (soon)</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <span
                  className={cn(
                    "text-sm font-medium smooth-transition hover:text-primary cursor-pointer flex items-center",
                    isHighlighted('mind') ? "text-primary font-semibold" : "text-foreground"
                  )}
                  onClick={() => setActiveMenu('mind')}
                >
                  Mind <ChevronDown className="ml-1 h-4 w-4" />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <Link href="/mind">
                  <DropdownMenuItem onSelect={() => onNavSelect('mind')} className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary">
                    Overview
                  </DropdownMenuItem>
                </Link>
                <Link href="/consultations/mind">
                  <DropdownMenuItem onSelect={() => onNavSelect('mind')} className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary">
                    Discovery Call
                  </DropdownMenuItem>
                </Link>
                {/* Programmes removed per request */}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <span
                  className={cn(
                    "text-sm font-medium smooth-transition hover:text-primary cursor-pointer flex items-center",
                    isHighlighted('consult') ? "text-primary font-semibold" : "text-foreground"
                  )}
                  onClick={() => setActiveMenu('consult')}
                >
                  Book <ChevronDown className="ml-1 h-4 w-4" />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <a
                  href="https://app.squareup.com/appointments/buyer/widget/flwwunfdy1hm72/L1TKSRMBS3N9H"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <DropdownMenuItem onSelect={() => onNavSelect('consult')} className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary">Skin Consultation</DropdownMenuItem>
                </a>
                <Link href="/consultations/mind">
                  <DropdownMenuItem onSelect={() => onNavSelect('consult')} className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary">Mind Consultation</DropdownMenuItem>
                </Link>
                <a
                  href={"http://the-aevia.square.site/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book a treatment"
                  onClick={() => onNavSelect('consult')}
                  className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary"
                >
                  <DropdownMenuItem onSelect={() => onNavSelect('consult')} className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary">Treatments</DropdownMenuItem>
                </a>
            </DropdownMenuContent>
            </DropdownMenu>
            {/* Top-level Gallery removed on desktop; kept under Skin */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <span
                  className={cn(
                    "text-sm font-medium smooth-transition hover:text-primary cursor-pointer flex items-center",
                    isHighlighted('about') ? "text-primary font-semibold" : "text-foreground"
                  )}
                  onClick={() => setActiveMenu('about')}
                >
                  About <ChevronDown className="ml-1 h-4 w-4" />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                  <Link href="/team">
                  <DropdownMenuItem
                    onSelect={() => onNavSelect('about')}
                    className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary"
                  >
                    Our Team
                  </DropdownMenuItem>
                </Link>
                <Link href="/clinic">
                  <DropdownMenuItem
                    onSelect={() => onNavSelect('about')}
                    className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary"
                  >
                    Our Clinic
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <span
                  className={cn(
                    "text-sm font-medium smooth-transition hover:text-primary cursor-pointer flex items-center",
                    isHighlighted('resources') ? "text-primary font-semibold" : "text-foreground"
                  )}
                  onClick={() => setActiveMenu('resources')}
                >
                  Resources <ChevronDown className="ml-1 h-4 w-4" />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <Link href="/journal">
                  <DropdownMenuItem onSelect={() => onNavSelect('resources')} className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary">Journal</DropdownMenuItem>
                </Link>
                <DropdownMenuItem disabled>FAQs</DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary data-[state=open]:bg-primary/10 data-[state=open]:text-primary">Policies</DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <Link href="/privacy">
                      <DropdownMenuItem onSelect={() => onNavSelect('resources')} className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary">Privacy Policy</DropdownMenuItem>
                    </Link>
                    <Link href="/terms">
                      <DropdownMenuItem onSelect={() => onNavSelect('resources')} className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary">Terms & Conditions</DropdownMenuItem>
                    </Link>
                    <Link href="/cancellation">
                      <DropdownMenuItem onSelect={() => onNavSelect('resources')} className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary">Cancellation Policy</DropdownMenuItem>
                    </Link>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuItem disabled>Aftercare Guides</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
            <a href="https://app.squareup.com/appointments/buyer/widget/flwwunfdy1hm72/L1TKSRMBS3N9H" target="_blank" rel="noopener noreferrer">
              <Button onClick={handleLinkClick} className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm">
                Book Now
              </Button>
            </a>
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
  // Keep page fixed as you already have. This makes ONLY the menu scrollable.
  <div className="nav:hidden mt-4 border-t border-gray-100" id="mobile-menu">
    {/* Constrain height to viewport minus header; adjust 80/88 to your header height */}
    <div className="max-h-[calc(100dvh-88px)] overflow-y-auto">
      <div className="flex flex-col space-y-4 pt-4 px-6 pb-6">
        {/* Home removed; logo links home */}
        <button
          onClick={() => setIsSkinOpen(!isSkinOpen)}
          className={cn(
            "flex items-center justify-between w-full text-left text-sm font-medium smooth-transition hover:text-primary cursor-pointer px-2 py-1",
            isHighlighted('skin') && "text-primary font-semibold"
          )}
        >
          <span>Skin</span>
          <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", isSkinOpen && "rotate-180")} />
        </button>
        {isSkinOpen && (
          <div className="ml-4 flex flex-col space-y-2">
            <Link href="/skin">
              <span
                onClick={() => { setActiveMenu('skin'); handleLinkClick(); }}
                className={cn(
                  "block text-sm font-medium smooth-transition cursor-pointer px-2 py-1 hover:text-primary",
                  isActive("/skin") ? "text-primary font-bold" : "text-foreground font-bold"
                )}
              >
                Overview
              </span>
            </Link>
            <Link href="/treatments">
              <span onClick={() => { setActiveMenu('skin'); handleLinkClick(); }} className="block text-sm font-medium px-2 py-1 hover:text-primary">All Treatments & Prices</span>
            </Link>
            <Link href="/treatments#signature-offers">
              <span onClick={() => { setActiveMenu('skin'); handleLinkClick(); }} className="flex items-center gap-2 justify-between px-2 py-1 text-sm hover:text-primary">
                <span className="font-medium">Signature Offers</span>
                <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary">Featured</span>
              </span>
            </Link>
            {/* Separator 1: after Signature Offers */}
            <div className="my-1 border-t border-muted" />

            {/* Anti‑Wrinkle collapsible */}
            <button
              onClick={() => setIsSkinAntiOpen(!isSkinAntiOpen)}
              className="flex items-center justify-between w-full text-left text-sm font-medium px-2 py-1 hover:text-primary"
            >
              <span>Anti‑Wrinkle</span>
              <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", isSkinAntiOpen && "rotate-180")} />
            </button>
            {isSkinAntiOpen && (
              <div className="ml-4 flex flex-col">
                <Link href="/treatments/anti-wrinkle"><span onClick={handleLinkClick} className="block text-sm px-2 py-1 hover:text-primary">Forehead, Frown & Crow's Feet</span></Link>
                <Link href="/treatments/jawline-slimming"><span onClick={handleLinkClick} className="block text-sm px-2 py-1 hover:text-primary">Jawline Slimming</span></Link>
                <Link href="/treatments/smile-lift"><span onClick={handleLinkClick} className="block text-sm px-2 py-1 hover:text-primary">Smile Lift</span></Link>
                <Link href="/treatments/neck-lift"><span onClick={handleLinkClick} className="block text-sm px-2 py-1 hover:text-primary">Neck Lift</span></Link>
                <Link href="/treatments/sweat-control"><span onClick={handleLinkClick} className="block text-sm px-2 py-1 hover:text-primary">Sweat Control</span></Link>
                <Link href="/treatments/lower-face-contour-duo"><span onClick={handleLinkClick} className="block text-sm px-2 py-1 hover:text-primary">Lower Face Contour Duo</span></Link>
              </div>
            )}

            {/* Skin Boosters collapsible */}
            <button
              onClick={() => setIsSkinBoostersHeadOpen(!isSkinBoostersHeadOpen)}
              className="flex items-center justify-between w-full text-left text-sm font-medium px-2 py-1 hover:text-primary"
            >
              <span>Skin Boosters</span>
              <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", isSkinBoostersHeadOpen && "rotate-180")} />
            </button>
            {isSkinBoostersHeadOpen && (
              <div className="ml-4 flex flex-col">
                <Link href="/treatments/profhilo"><span onClick={handleLinkClick} className="block text-sm px-2 py-1 hover:text-primary">Profhilo®</span></Link>
                <Link href="/treatments/sunekos"><span onClick={handleLinkClick} className="block text-sm px-2 py-1 hover:text-primary">Sunekos</span></Link>
              </div>
            )}

            {/* Polynucleotides collapsible */}
            <button
              onClick={() => setIsSkinPnoOpen(!isSkinPnoOpen)}
              className="flex items-center justify-between w-full text-left text-sm font-medium px-2 py-1 hover:text-primary"
            >
              <span>Polynucleotides</span>
              <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", isSkinPnoOpen && "rotate-180")} />
            </button>
            {isSkinPnoOpen && (
              <div className="ml-4 flex flex-col">
                <Link href="/treatments/full-face-regeneration"><span onClick={handleLinkClick} className="block text-sm px-2 py-1 hover:text-primary">Full Face (Plinest)</span></Link>
                <Link href="/treatments/eye-rejuvenation"><span onClick={handleLinkClick} className="block text-sm px-2 py-1 hover:text-primary">Eye (Plinest Eye)</span></Link>
              </div>
            )}

            {/* Bio‑Volumisation collapsible */}
            <button
              onClick={() => {
                setIsSkinBoostersHeadOpen(false);
                setIsSkinPnoOpen(false);
                setIsSkinAntiOpen(false);
                setIsSkinBioOpen(!isSkinBioOpen);
              }}
              className="flex items-center justify-between w-full text-left text-sm font-medium px-2 py-1 hover:text-primary"
            >
              <span>Bio‑Volumisation</span>
              <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", isSkinBioOpen && "rotate-180")} />
            </button>
            {isSkinBioOpen && (
              <div className="ml-4 flex flex-col">
                <Link href="/treatments/sculptra"><span onClick={handleLinkClick} className="block text-sm px-2 py-1 hover:text-primary">Sculptra</span></Link>
              </div>
            )}

            <Link href="/categories/microneedling-peels">
              <span onClick={handleLinkClick} className="block text-sm px-2 py-1 hover:text-primary">Microneedling & Peels</span>
            </Link>

            {/* Separator 2: before Packages */}
            <div className="my-1 border-t border-muted" />
            <span className="block text-sm text-muted-foreground px-2 py-1">Packages / Memberships (soon)</span>
          </div>
        )}

        <button
          onClick={() => setIsMindOpen(!isMindOpen)}
          className={cn(
            "flex items-center justify-between w-full text-left text-sm font-medium smooth-transition hover:text-primary cursor-pointer px-2 py-1",
            isHighlighted('mind') && "text-primary font-semibold"
          )}
        >
          <span>Mind</span>
          <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", isMindOpen && "rotate-180")} />
        </button>
        {isMindOpen && (
          <div className="ml-4 flex flex-col space-y-2">
            <Link href="/mind">
              <span onClick={() => { setActiveMenu('mind'); handleLinkClick(); }} className="block text-sm font-bold smooth-transition cursor-pointer px-2 py-1 hover:text-primary">Overview</span>
            </Link>
            <Link href="/consultations/mind">
              <span onClick={() => { setActiveMenu('mind'); handleLinkClick(); }} className="block text-sm font-medium smooth-transition cursor-pointer px-2 py-1 hover:text-primary">Discovery Call</span>
            </Link>
            {/* Programmes removed per request */}
          </div>
        )}

        <button
          onClick={() => setIsConsultOpen(!isConsultOpen)}
          className={cn(
            "flex items-center justify-between w-full text-left text-sm font-medium smooth-transition hover:text-primary cursor-pointer px-2 py-1",
            isHighlighted('consult') && "text-primary font-semibold"
          )}
        >
          <span>Book</span>
          <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", isConsultOpen && "rotate-180")} />
        </button>
        {isConsultOpen && (
          <div className="ml-4 flex flex-col space-y-2">
            <a href="https://app.squareup.com/appointments/buyer/widget/flwwunfdy1hm72/L1TKSRMBS3N9H" target="_blank" rel="noopener noreferrer">
              <span onClick={() => { setActiveMenu('consult'); handleLinkClick(); }} className="block text-sm font-medium smooth-transition cursor-pointer px-2 py-1 hover:text-primary">Skin Consultation</span>
            </a>
            <Link href="/consultations/mind">
              <span onClick={() => { setActiveMenu('consult'); handleLinkClick(); }} className="block text-sm font-medium smooth-transition cursor-pointer px-2 py-1 hover:text-primary">Mind Consultation</span>
            </Link>
            <a
                  href={"http://the-aevia.square.site/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book a treatment"
                  onClick={() => onNavSelect('consult')}
                  className="hover:bg-primary/10 focus:bg-primary/10 hover:text-primary"
                >
                   <span onClick={() => { setActiveMenu('consult'); handleLinkClick(); }} className="block text-sm font-medium smooth-transition cursor-pointer px-2 py-1 hover:text-primary">Treatments</span>
                </a>
          </div>
        )}

        <Link href="/gallery">
          <span onClick={handleLinkClick} className={cn(
            "block text-sm font-medium smooth-transition hover:text-primary cursor-pointer px-2 py-1",
            isActive("/gallery") ? "text-primary font-semibold" : "text-foreground"
          )}>
            Gallery
          </span>
        </Link>

        <button
          onClick={() => setIsAboutOpen(!isAboutOpen)}
          className={cn(
            "flex items-center justify-between w-full text-left text-sm font-medium smooth-transition hover:text-primary cursor-pointer px-2 py-1",
            isHighlighted('about') && "text-primary font-semibold"
          )}
        >
          <span>About</span>
          <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", isAboutOpen && "rotate-180")} />
        </button>
        {isAboutOpen && (
          <div className="ml-4 flex flex-col space-y-2">
            <Link href="/team">
              <span
                onClick={() => { setActiveMenu('about'); handleLinkClick(); }}
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
                onClick={() => { setActiveMenu('about'); handleLinkClick(); }}
                className={cn(
                  "block text-sm font-medium smooth-transition cursor-pointer px-2 py-1 hover:text-primary",
                  isActive("/clinic") ? "text-primary font-semibold" : "text-foreground"
                )}
              >
                Our Clinic
              </span>
            </Link>
            {/* Ethos removed per request */}
          </div>
        )}

        <button
          onClick={() => setIsResourcesOpen(!isResourcesOpen)}
          className={cn(
            "flex items-center justify-between w-full text-left text-sm font-medium smooth-transition hover:text-primary cursor-pointer px-2 py-1",
            isHighlighted('resources') && "text-primary font-semibold"
          )}
        >
          <span>Resources</span>
          <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", isResourcesOpen && "rotate-180")} />
        </button>
        {isResourcesOpen && (
          <div className="ml-4 flex flex-col space-y-2">
            <Link href="/journal">
              <span onClick={() => { setActiveMenu('resources'); handleLinkClick(); }} className="block text-sm font-medium smooth-transition cursor-pointer px-2 py-1 hover:text-primary">
                Journal
              </span>
            </Link>
            <span className="block text-sm text-muted-foreground px-2 py-1">FAQs</span>
            <button
              onClick={() => setIsPoliciesOpen(!isPoliciesOpen)}
              className="flex items-center justify-between w-full text-left text-sm font-medium px-2 py-1 hover:text-primary"
            >
              <span>Policies</span>
              <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", isPoliciesOpen && "rotate-180")} />
            </button>
            {isPoliciesOpen && (
              <div className="ml-4 flex flex-col">
                <Link href="/privacy"><span onClick={() => { setActiveMenu('resources'); handleLinkClick(); }} className="block text-sm px-2 py-1 hover:text-primary">Privacy Policy</span></Link>
                <Link href="/terms"><span onClick={() => { setActiveMenu('resources'); handleLinkClick(); }} className="block text-sm px-2 py-1 hover:text-primary">Terms & Conditions</span></Link>
                <Link href="/cancellation"><span onClick={() => { setActiveMenu('resources'); handleLinkClick(); }} className="block text-sm px-2 py-1 hover:text-primary">Cancellation Policy</span></Link>
              </div>
            )}
            <span className="block text-sm text-muted-foreground px-2 py-1">Aftercare Guides</span>
          </div>
        )}

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
          <a href="https://app.squareup.com/appointments/buyer/widget/flwwunfdy1hm72/L1TKSRMBS3N9H" target="_blank" rel="noopener noreferrer">
            <Button onClick={handleLinkClick} className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm">
              Book Now
            </Button>
          </a>
        </div>
      </div>
    </div>
  </div>
)}
      </div>
    </nav>
  );
}
