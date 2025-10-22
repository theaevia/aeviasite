import { useEffect, useMemo, useRef, useState } from "react";
import { Link as RouterLink, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

import logoGold from "@assets/logos/logo-gold-transparent.webp";
import { cn } from "@/lib/utils";
import { journalUrl } from "@/lib/journal";
import { JOURNAL_URL, SITE_URL } from "@/lib/env";
import { SQUARE_SITE_URL } from "@/lib/bookingUrls";

type NavigationVariant = "solid" | "transparent";

interface NavigationProps {
  variant?: NavigationVariant;
  showShadow?: boolean;
}

const navLinks = [
  { label: "TREATMENTS", href: "/treatments" },
  { label: "ABOUT", href: "/team" },
];

const mobileNavLinks = [
  { label: "SKIN", href: "/skin" },
  { label: "MIND", href: "/mind" },
  ...navLinks,
];

export default function Navigation({ variant = "solid", showShadow = true }: NavigationProps) {
  const [location] = useLocation();
  const journalHref = useMemo(() => journalUrl("/"), []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);
  const hasMenuBeenOpenedRef = useRef(false);
  const isTransparent = variant === "transparent";

  const rawJournalBase = (JOURNAL_URL ?? import.meta.env.BASE_URL ?? "/") as string;
  const journalBase = rawJournalBase === "/" ? "" : rawJournalBase.replace(/\/$/, "");
  const mainSiteFallback = "https://theaevia.co.uk";
  const resolvedMainOrigin = (SITE_URL && SITE_URL.trim()) || mainSiteFallback;
  const mainSiteOrigin = resolvedMainOrigin.replace(/\/$/, "");

  const externalHrefPattern = /^(?:[a-z]+:|#)/i;
  const buildUrl = (origin: string | undefined, path: string) => {
    if (!origin) return path;
    const cleanedOrigin = origin.replace(/\/$/, "");
    const cleanedPath = path.startsWith("/") ? path : `/${path}`;
    return `${cleanedOrigin}${cleanedPath}`;
  };

  const resolveHrefForJournal = (href: string) => {
    if (!href || externalHrefPattern.test(href)) {
      return href;
    }
    if (href.startsWith("/journal")) {
      const suffix = href.slice("/journal".length);
      if (journalBase) {
        return suffix ? `${journalBase}${suffix}` : journalBase;
      }
      return suffix || "/";
    }
    return buildUrl(mainSiteOrigin, href);
  };

  const resolveJournalOriginHref = (href: string) => {
    if (!href) return journalUrl("/");
    return journalUrl(href);
  };

  const Link = (props: { href: string; children: React.ReactNode } & React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const { href, children, ...rest } = props;
    const onJournalHost =
      typeof window !== "undefined" && (window.location.hostname.includes("journal") || location.startsWith("/journal"));

    if (onJournalHost) {
      return (
        <a href={resolveHrefForJournal(href)} {...rest}>
          {children}
        </a>
      );
    }

    if (href.startsWith("/journal")) {
      return (
        <a href={resolveJournalOriginHref(href)} {...rest}>
          {children}
        </a>
      );
    }

    return (
      <RouterLink href={href} {...rest}>
        {children}
      </RouterLink>
    );
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      hasMenuBeenOpenedRef.current = true;
      setIsMenuClosing(false);
      return;
    }

    if (!hasMenuBeenOpenedRef.current) return;

    setIsMenuClosing(true);
    const timeoutId = window.setTimeout(() => setIsMenuClosing(false), 250);
    return () => window.clearTimeout(timeoutId);
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((open) => !open);
  const closeMenu = () => setIsMenuOpen(false);

  const navClasses = cn(
    "fixed top-0 z-50 w-full transition-colors duration-300",
    isTransparent
      ? "border-b border-transparent bg-black/80 text-white"
      : [
          "text-[#111]",
          showShadow
            ? "shadow-[0_12px_24px_rgba(0,0,0,0.05)]"
            : ["shadow-none", "border-b", "border-border/80"],
          isMenuOpen || isMenuClosing
            ? "bg-white"
            : "bg-white/90 supports-[backdrop-filter:blur(0)]:bg-white/80 backdrop-blur"
        ]
  );

  const linkClasses = cn(
    "text-xs lg:text-sm font-normal uppercase tracking-[0.1em] transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    isTransparent
      ? "text-white hero-text-shadow hover:text-primary focus-visible:outline-white"
      : "text-[#111]/80 hover:text-primary focus-visible:outline-primary"
  );

  const journalLinkClasses = linkClasses;

  const ctaClasses = cn(
    "inline-flex items-center justify-center rounded-full border-[1.5px] px-6 py-2 text-xs lg:text-sm font-medium uppercase tracking-[0.1em] transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    isTransparent
      ? "border-white/80 bg-transparent text-white hover:bg-white hover:text-[#111] focus-visible:outline-white"
      : "border-primary bg-transparent text-primary hover:bg-primary hover:text-white focus-visible:outline-primary"
  );

  const mobileMenuClasses = cn(
    "fixed inset-0 z-40 transform transition-opacity duration-200",
    isTransparent ? "bg-black/80 text-white" : "bg-white text-[#111]",
    isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
  );

  const mobileLinkClasses = cn(
    "text-lg uppercase tracking-[0.1em] transition-colors duration-150",
    isTransparent ? "text-white hero-text-shadow hover:text-primary" : "text-[#111] hover:text-primary"
  );

  return (
    <nav
      className={navClasses}
      style={
        isTransparent || (!isMenuOpen && !isMenuClosing)
          ? { backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }
          : undefined
      }
    >
      <div className="hero-safe-padding">
        <div className="grid h-[84px] w-full grid-cols-[auto_1fr_auto] items-center">
          <div className="flex items-center gap-5 justify-self-start">
            <button
              type="button"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="site-nav-drawer"
              className={cn(
                "group relative flex h-12 w-12 items-center justify-center transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                isTransparent ? "text-white focus-visible:outline-white" : "text-[#111] focus-visible:outline-primary"
              )}
            >
              <span
                className={cn(
                  "absolute h-[2px] w-6 transition-transform duration-200",
                  isMenuOpen ? "translate-y-0 rotate-45" : "-translate-y-2",
                  isTransparent ? "bg-white" : "bg-[#111]"
                )}
              />
              <span
                className={cn(
                  "absolute h-[2px] w-6 transition-opacity duration-150",
                  isMenuOpen ? "opacity-0" : "opacity-100",
                  isTransparent ? "bg-white" : "bg-[#111]"
                )}
              />
              <span
                className={cn(
                  "absolute h-[2px] w-6 transition-transform duration-200",
                  isMenuOpen ? "translate-y-0 -rotate-45" : "translate-y-2",
                  isTransparent ? "bg-white" : "bg-[#111]"
                )}
              />
            </button>
            <nav className="hidden gap-8 lg:flex">
              {navLinks.map(({ label, href }) => (
                <Link key={label} href={href} onClick={closeMenu} className={linkClasses}>
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="justify-self-center" />

          <div className="flex items-center gap-5 justify-self-end">
            <a href={journalHref} className={cn(journalLinkClasses, "hidden sm:inline-flex")}>
              JOURNAL
            </a>
            <Link href={SQUARE_SITE_URL} className={ctaClasses} role="button" aria-label="Book now" onClick={closeMenu}>
              BOOK NOW
            </Link>
          </div>
        </div>
      </div>

      <div
        id="site-nav-drawer"
        className={mobileMenuClasses}
        role="dialog"
        aria-modal="true"
        aria-labelledby="site-nav-drawer-title"
      >
        <div className="hero-safe-padding flex h-full flex-col py-8">
          <div className="flex items-center justify-between">
            <Link href="/" onClick={closeMenu} className="inline-flex items-center">
              <img
                src={logoGold}
                alt="The Aevia"
                width={916}
                height={500}
                className="h-10 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close navigation menu"
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full border transition hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                isTransparent ? "border-white/20 bg-white/10 text-white focus-visible:outline-white" : "border-[#d9d0c4] bg-white text-[#111] focus-visible:outline-primary"
              )}
            >
              <span className="sr-only">Close</span>
              <span className="relative block h-5 w-5">
                <span
                  className={cn(
                    "absolute left-1/2 top-1/2 h-[2px] w-full -translate-x-1/2 -translate-y-1/2 rotate-45",
                    isTransparent ? "bg-white" : "bg-[#111]"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-1/2 top-1/2 h-[2px] w-full -translate-x-1/2 -translate-y-1/2 -rotate-45",
                    isTransparent ? "bg-white" : "bg-[#111]"
                  )}
                />
              </span>
            </button>
          </div>

          <div className="mt-12 flex flex-1 flex-col gap-8 text-left">
            <span
              id="site-nav-drawer-title"
              className={cn(
                "text-xs font-medium uppercase tracking-[0.32em]",
                isTransparent ? "text-white/60" : "text-[#111]/60"
              )}
            >
              Menu
            </span>
            <nav className="flex flex-col gap-6 text-lg uppercase tracking-[0.1em]">
              {mobileNavLinks.map(({ label, href }) => (
                <Link key={label} href={href} onClick={closeMenu} className={mobileLinkClasses}>
                  {label}
                </Link>
              ))}
              <a href={journalHref} onClick={closeMenu} className={mobileLinkClasses}>
                JOURNAL
              </a>
            </nav>
            <div className="mt-auto flex flex-col gap-4">
              <Link href={SQUARE_SITE_URL} className={ctaClasses} role="button" aria-label="Book now" onClick={closeMenu}>
                BOOK NOW
              </Link>
              <p className={cn("text-sm uppercase tracking-[0.1em]", isTransparent ? "text-white/60" : "text-primary/80")}>
                Crafted for skin + mind
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
