import { useEffect, useMemo, useState, type CSSProperties } from "react";
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
    "hero-text-shadow inline-flex h-12 w-full min-w-0 items-center justify-center rounded-none border-2 border-white bg-transparent px-6 text-xs font-medium uppercase tracking-[0.08em] text-white shadow-lg transition-all duration-300 ease-out sm:w-auto sm:min-w-[180px] sm:bg-white sm:text-[#111] sm:text-sm lg:min-w-[220px] lg:px-8 hover:bg-transparent hover:text-white hover:shadow-xl sm:hover:text-white sm:hover:bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

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
              <a
                href={journalHref}
                className={`${sharedNavLinkClasses} hero-text-shadow hidden sm:inline-flex`}
              >
                JOURNAL
              </a>
            </div>
            <div />
            <Link
              href="/"
              onClick={closeMenu}
              className="inline-flex items-center justify-center justify-self-end"
            >
              <img
                src={logoSrc}
                alt="The Aevia"
                width={logoWidth}
                height={logoHeight}
                className="h-16 w-auto lg:h-24"
                loading="eager"
              />
            </Link>
          </div>
        </div>
      </header>

      <div
        className="hero-safe-padding hero-mobile-clearance relative z-20 flex flex-1 flex-col justify-end py-12 lg:py-16"
        style={{
          minHeight: "calc(100dvh - var(--header-h, 0px))",
          paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + var(--hero-cta-clearance, 24px))",
        }}
      >
        <div className="mx-auto flex w-full max-w-[1100px] flex-col items-stretch text-left lg:items-center lg:text-center">
          <div className="mx-auto flex w-full max-w-[820px] flex-col items-start gap-8 sm:gap-10 lg:gap-12 lg:items-center">
            <div className="relative w-full">
              <div
                className="pointer-events-none absolute -left-6 -right-6 -top-6 rounded-[32px] rounded-b-none bg-gradient-to-t from-black/80 via-black/55 to-transparent sm:-left-8 sm:-right-8 sm:-top-8 sm:rounded-[40px] sm:rounded-b-none lg:hidden"
                aria-hidden="true"
                style={{ bottom: "calc(-1 * var(--hero-cta-clearance, 24px))" }}
              />
              <div className="relative flex w-full flex-col items-start gap-5 text-left lg:items-center lg:gap-6 lg:text-center">
                <div className="flex flex-col items-start gap-3 lg:items-center lg:gap-4">
                  <h1 className="font-serif font-normal uppercase tracking-[0.1em] text-white text-balance max-w-[22ch] leading-[1.1] text-[clamp(28px,8vw,40px)] sm:text-[clamp(36px,3.2vw,56px)] lg:max-w-none lg:hero-text-shadow">
                    A SPACE DEDICATED TO YOUR
                    <br className="hidden lg:block" />
                    <span className="lg:inline"> WELLNESS AND LONGEVITY</span>
                  </h1>
                  <p
                    className="relative max-w-[32ch] text-balance text-white/95 sm:max-w-[38ch] lg:max-w-[520px] lg:text-white/90 lg:hero-text-shadow"
                    style={{ fontSize: "clamp(16px, 4.2vw, 20px)", fontWeight: 300, lineHeight: 1.5 }}
                  >
                    Caring for both your physical and mental wellbeing
                  </p>
                </div>
                <div className="relative grid w-full max-w-[360px] grid-cols-2 gap-3 self-start sm:flex sm:max-w-none sm:items-center sm:justify-center sm:self-center lg:w-full lg:justify-between lg:gap-4">
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
