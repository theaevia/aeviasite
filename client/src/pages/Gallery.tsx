import SEO from "@/components/SEO";
import { Link } from "wouter";

// Local before/after assets
import underEyeBeforeAfter from "@assets/before_afters/under-eye-1.png";

interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  src: string;
  kind: "publicWebP" | "imported" | "importedPng";
  href: string;
}

const items: GalleryItem[] = [
  {
    id: "forehead",
    title: "Anti‑Wrinkle — Forehead",
    caption: "Forehead lines softened two weeks after treatment.",
    src: "/assets/before_afters/forehead-640w.webp",
    kind: "publicWebP",
    href: "/treatments/anti-wrinkle",
  },
  {
    id: "frown",
    title: "Anti‑Wrinkle — Frown Lines",
    caption: "Frown lines softened two weeks after treatment.",
    src: "/assets/before_afters/frown-640w.webp",
    kind: "publicWebP",
    href: "/treatments/anti-wrinkle",
  },
  {
    id: "undereye",
    title: "Under‑Eye Polynucleotides",
    caption: "Under‑Eye Polynucleotides - before and after.",
    src: underEyeBeforeAfter,
    kind: "importedPng",
    href: "/treatments/eye-rejuvenation",
  },
  {
    id: "masseter",
    title: "Jawline Slimming",
    caption: "Jawline slimming from masseter reduction treatment.",
    src: "/assets/before_afters/masseter-1.png",
    kind: "importedPng",
    href: "/treatments/jawline-slimming",
  },
];

export default function GalleryPage() {
  return (
    <>
      <SEO title="Before & After Gallery | The Aevia" description="Explore real patient results from our anti‑wrinkle, skin booster, and polynucleotide treatments." />
      <section className="hero-gradient py-12 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl lg:text-5xl font-serif font-bold mb-4 leading-tight">Results Gallery</h1>
          <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
            A selection of before & after results from treatments performed at Aevia Skin. Individual results may vary.
          </p>
        </div>
      </section>
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {items.map((item) => (
              <figure key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative w-full aspect-[4/3]">
                  {item.kind === "publicWebP" ? (
                    <picture>
                      <source
                        type="image/avif"
                        srcSet={`${item.src.replace('-640w.webp','-640w.avif')} 640w, ${item.src.replace('-640w.webp','-1280w.avif')} 1280w`}
                        sizes="(max-width: 640px) 100vw, 640px"
                      />
                      <source
                        type="image/webp"
                        srcSet={`${item.src.replace('-640w.webp','-640w.webp')} 640w, ${item.src.replace('-640w.webp','-1280w.webp')} 1280w`}
                        sizes="(max-width: 640px) 100vw, 640px"
                      />
                      <img
                        src={item.src}
                        alt={`${item.title} before and after`}
                        loading="lazy"
                        width={640}
                        height={480}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </picture>
                  ) : (
                    <picture>
                      <source srcSet={item.src} type={item.kind === 'importedPng' ? 'image/png' : 'image/jpeg'} />
                      <img
                        src={item.src}
                        alt={`${item.title} before and after`}
                        loading="lazy"
                        width={1600}
                        height={1200}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </picture>
                  )}
                </div>
                <figcaption className="p-4">
                  <Link href={item.href}>
                    <span className="block text-base font-serif font-semibold text-center text-primary hover:underline cursor-pointer">
                      {item.title}
                    </span>
                  </Link>
                  <p className="text-sm text-muted-foreground text-center mt-1">{item.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
