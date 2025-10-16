import { asset } from "@/lib/assets";

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  src: string;
  kind: "publicWebP" | "imported" | "importedPng";
  href: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "forehead",
    title: "Anti‑Wrinkle — Forehead",
    caption: "Forehead lines softened two weeks after treatment.",
    src: asset("/assets/before_afters/forehead-640w.webp"),
    kind: "publicWebP",
    href: "/treatments/anti-wrinkle",
  },
  {
    id: "frown",
    title: "Anti‑Wrinkle — Frown Lines",
    caption: "Frown lines softened two weeks after treatment.",
    src: asset("/assets/before_afters/frown-640w.webp"),
    kind: "publicWebP",
    href: "/treatments/anti-wrinkle",
  },
  {
    id: "undereye",
    title: "Under‑Eye Polynucleotides",
    caption: "Under‑Eye polynucleotide treatment – brighter, smoother under-eyes.",
    src: asset("/assets/before_afters/under-eye-1-640w.webp"),
    kind: "publicWebP",
    href: "/treatments/eye-rejuvenation",
  },
  {
    id: "masseter",
    title: "Masseter Slimming",
    caption: "Jawline treatment to refine the jawline over eight weeks.",
    src: asset("/assets/before_afters/masseter-1-640w.webp"),
    kind: "publicWebP",
    href: "/treatments/jawline-slimming",
  },
];
