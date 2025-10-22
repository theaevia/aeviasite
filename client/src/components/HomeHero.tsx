import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { journalUrl } from "@/lib/journal";
import { SQUARE_SITE_URL } from "@/lib/bookingUrls";

type HeroImageSource = {
  src: string;
  width: number;
};

interface HomeHeroProps {
  backgroundImage: string;
  backgroundSources: HeroImageSource[];
  logoSrc: string;
  logoWidth: number;
  logoHeight: number;
  backgroundAlt?: string;
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


export function HomeHero({
  backgroundImage,
  backgroundSources,
  logoSrc,
  logoWidth,
  logoHeight,
  backgroundAlt = "Aerial shoreline photograph with water meeting sand",
}: HomeHeroProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const journalHref = useMemo(() => journalUrl("/"), []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const sortedSources = useMemo(
    () => [...backgroundSources].sort((a, b) => a.width - b.width),
    [backgroundSources],
  );

  const srcSet = useMemo(
    () => sortedSources.map((source) => `${source.src} ${source.width}w`).join(", "),
    [sortedSources],
  );

  const toggleMenu = () => setIsMenuOpen((open) => !open);
  const closeMenu = () => setIsMenuOpen(false);

  const sharedNavLinkClasses =
    "text-xs lg:text-sm font-normal uppercase tracking-[0.1em] hover:opacity-80 transition-opacity duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
  const bookNowButtonClasses =
    "inline-flex items-center justify-center rounded-full border-[1.5px] border-white/80 px-6 py-2 text-xs lg:text-sm uppercase tracking-[0.1em] font-medium transition duration-200 hover:bg-white hover:text-[#111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
  const heroCtaClasses =
    "hero-text-shadow inline-flex h-12 w-full max-w-[210px] min-w-[180px] items-center justify-center rounded-none border-2 border-white bg-transparent px-6 text-xs font-medium uppercase tracking-[0.08em] text-white shadow-lg transition-all duration-300 ease-out sm:bg-white sm:text-[#111] sm:text-sm lg:w-auto lg:max-w-none lg:min-w-[220px] lg:px-8 hover:bg-transparent hover:text-white hover:shadow-xl sm:hover:text-white sm:hover:bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

  return (
    <section className="relative isolate flex min-h-screen flex-col overflow-hidden bg-black text-white font-coco">
      <picture className="absolute inset-0 -z-20 h-full w-full">
        <source srcSet={srcSet} type="image/webp" sizes="100vw" />
        <img
          src={backgroundImage}
          srcSet={srcSet}
          alt={backgroundAlt}
          loading="eager"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </picture>
      <div className="absolute inset-0 -z-10 bg-black/45 transition-colors lg:bg-black/35" aria-hidden />

      <header className="absolute inset-x-0 top-0 z-30">
        <div className="hero-safe-padding">
          <div className="grid h-[84px] w-full grid-cols-[auto_1fr_auto] items-center text-white">
            <div className="flex items-center gap-5 justify-self-start">
              <button
                type="button"
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMenuOpen}
                aria-controls="homepage-hero-drawer"
                className="group relative flex h-12 w-12 items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span
                  className={`absolute h-[2px] w-6 bg-white transition-transform duration-200 ${
                    isMenuOpen ? "translate-y-0 rotate-45" : "-translate-y-2"
                  }`}
                />
                <span
                  className={`absolute h-[2px] w-6 bg-white transition-opacity duration-150 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute h-[2px] w-6 bg-white transition-transform duration-200 ${
                    isMenuOpen ? "translate-y-0 -rotate-45" : "translate-y-2"
                  }`}
                />
              </button>
              <nav className="hidden gap-8 lg:flex">
                {navLinks.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    onClick={closeMenu}
                    className={`${sharedNavLinkClasses} hero-text-shadow`}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
            <Link href="/" onClick={closeMenu} className="inline-flex items-center justify-center justify-self-center">
              <img
                src={logoSrc}
                alt="The Aevia"
                width={logoWidth}
                height={logoHeight}
                className="h-12 w-auto lg:h-16"
                loading="eager"
              />
            </Link>
            <div className="flex items-center gap-5 justify-self-end">
              <a
                href={journalHref}
                className={`${sharedNavLinkClasses} hero-text-shadow hidden sm:inline-flex`}
              >
                JOURNAL
              </a>
              <a
                href={SQUARE_SITE_URL}
                className={`${bookNowButtonClasses} hero-text-shadow`}
                role="button"
                aria-label="Book now"
              >
                BOOK NOW
              </a>
            </div>
          </div>
        </div>
      </header>

      <div
        className="hero-safe-padding relative z-20 flex flex-col justify-center py-12 lg:py-16"
        style={{ minHeight: "calc(100svh - var(--header-h, 0px))" }}
      >
        <div
          className="mx-auto flex w-full max-w-[1100px] flex-col items-center text-center"
        >
          <div className="mx-auto flex w-full max-w-[820px] flex-col items-center gap-10 sm:gap-12 lg:gap-14 lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-12">
            <div className="flex w-full flex-col items-center gap-3 text-center">
              <h1 className="hero-text-shadow font-serif font-normal uppercase tracking-[0.1em] text-[clamp(38px,5.4vw,56px)] leading-[1.14] sm:text-[clamp(32px,3.2vw,56px)]">
                A SPACE DEDICATED TO YOUR
                <br className="hidden lg:block" />
                <span className="lg:inline"> WELLNESS AND LONGEVITY</span>
              </h1>
              <p
                className="hero-text-shadow max-w-[820px] text-white/90"
                style={{ fontSize: "clamp(14px, 1.4vw, 20px)", fontWeight: 300, lineHeight: 1.4 }}
              >
                Caring for both your physical and mental wellbeing
              </p>
            </div>
            <div className="flex w-full flex-col items-center gap-6 sm:gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
              <Link
                href="/skin"
                className={heroCtaClasses}
                role="button"
                aria-label="Go to Skin"
              >
                SKIN
              </Link>
              <Link
                href="/mind"
                className={heroCtaClasses}
                role="button"
                aria-label="Go to Mind"
              >
                MIND
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        id="homepage-hero-drawer"
        className={`fixed inset-0 z-40 transform bg-black/95 text-white transition-opacity duration-200 ${
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="homepage-hero-drawer-title"
      >
        <div className="hero-safe-padding flex h-full flex-col py-8">
          <div className="flex items-center justify-between">
            <img
              src={logoSrc}
              alt="The Aevia"
              width={logoWidth}
              height={logoHeight}
              className="h-10 w-auto"
            />
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close navigation menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span className="sr-only">Close</span>
              <span className="relative block h-5 w-5">
                <span className="absolute left-1/2 top-1/2 h-[2px] w-full -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
                <span className="absolute left-1/2 top-1/2 h-[2px] w-full -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white" />
              </span>
            </button>
          </div>
          <div className="mt-12 flex flex-1 flex-col gap-8 text-left">
            <span
              id="homepage-hero-drawer-title"
              className="text-xs font-medium uppercase tracking-[0.32em] text-white/60"
            >
              Menu
            </span>
            <nav className="flex flex-col gap-6 text-lg uppercase tracking-[0.1em]">
              {mobileNavLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={closeMenu}
                  className="hero-text-shadow"
                >
                  {label}
                </Link>
              ))}
              <a href={journalHref} onClick={closeMenu} className="hero-text-shadow">
                JOURNAL
              </a>
            </nav>
            <div className="mt-auto flex flex-col gap-4">
              <a
                href={SQUARE_SITE_URL}
                className={`${bookNowButtonClasses} hero-text-shadow justify-center`}
                role="button"
                aria-label="Book now"
              >
                BOOK NOW
              </a>
              <p className="text-sm uppercase tracking-[0.1em] text-white/60">
                Crafted for skin + mind
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
