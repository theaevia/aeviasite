import { useEffect } from "react";
import { useLocation } from "wouter";

const REVEAL_SELECTOR = [
  "[data-scroll-reveal]",
  "main section",
  "main article",
  "main .grid > div",
  "main .grid > article",
  "main picture",
].join(",");

const EXCLUDED_SELECTOR = [
  "[data-no-scroll-reveal]",
  ".whatsapp-float",
  ".fixed",
  ".sticky",
  "a",
  "button",
  "script",
  "style",
].join(",");

function shouldSkipElement(element: HTMLElement) {
  const isExplicitReveal = element.hasAttribute("data-scroll-reveal");
  if (!isExplicitReveal && element.closest(EXCLUDED_SELECTOR)) return true;
  if (element.closest("[aria-hidden='true']")) return true;
  if (element.offsetParent === null && getComputedStyle(element).position !== "fixed") return true;

  const { width, height } = element.getBoundingClientRect();
  if (width < 24 || height < 24) return true;

  return false;
}

function getRevealType(element: HTMLElement) {
  const tagName = element.tagName.toLowerCase();
  if (tagName === "img" || tagName === "picture") return "media";
  if (tagName === "section") return "section";
  return "item";
}

function resetRevealState() {
  document.querySelectorAll<HTMLElement>(".scroll-reveal").forEach((element) => {
    element.classList.remove("scroll-reveal", "is-visible");
    element.removeAttribute("data-reveal");
    element.style.removeProperty("--scroll-reveal-delay");
  });
}

export default function ScrollRevealObserver() {
  const [location] = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) return;

    let observer: IntersectionObserver | null = null;
    let timeoutId: number | null = null;

    resetRevealState();

    const setup = () => {
      const container = document.querySelector("main");
      if (!container) return;

      const candidates = Array.from(container.querySelectorAll<HTMLElement>(REVEAL_SELECTOR))
        .filter((element, index, list) => !shouldSkipElement(element) && list.indexOf(element) === index);

      candidates.forEach((element) => {
        element.classList.add("scroll-reveal");
        element.dataset.reveal = element.dataset.reveal || getRevealType(element);

        const parent = element.parentElement;
        const siblings = parent
          ? Array.from(parent.children).filter((child) => candidates.includes(child as HTMLElement))
          : [];
        const siblingIndex = Math.max(0, siblings.indexOf(element));
        const delay = Math.min(siblingIndex * 55, 220);
        element.style.setProperty("--scroll-reveal-delay", `${delay}ms`);

        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          element.classList.add("is-visible");
        }
      });

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const element = entry.target as HTMLElement;
            element.classList.add("is-visible");
            observer?.unobserve(element);
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px 12% 0px",
        },
      );

      candidates
        .filter((element) => !element.classList.contains("is-visible"))
        .forEach((element) => observer?.observe(element));
    };

    timeoutId = window.setTimeout(setup, 140);

    return () => {
      if (timeoutId !== null) window.clearTimeout(timeoutId);
      observer?.disconnect();
      resetRevealState();
    };
  }, [location]);

  return null;
}
