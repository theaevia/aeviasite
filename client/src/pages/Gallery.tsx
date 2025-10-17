import SEO from "@/components/SEO";
import { Link } from "wouter";
import { galleryItems } from "@/data/galleryItems";

export default function GalleryPage() {
  return (
    <>
      <SEO title="Before & After Gallery | The Aevia" description="Explore real patient results from our anti‑wrinkle, skin booster, and polynucleotide treatments." />
      <section className="hero-gradient py-12 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">Results <span className="text-primary">Gallery</span></h1>
          <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
            A selection of before & after results from treatments performed at Aevia Skin. Individual results may vary.
          </p>
        </div>
      </section>
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {galleryItems.map((item) => (
  <Link
    href={item.href}
    key={item.id}
    className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded-2xl"
    aria-label={item.title}
  >
    <figure className="bg-white rounded-2xl shadow-lg overflow-hidden transition-shadow duration-150 group-hover:shadow-xl">
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
        {/* Title is now non-link because the whole card is the link */}
        <span className="block text-base font-serif font-semibold text-center text-primary group-hover:underline">
          {item.title}
        </span>
        <p className="text-sm text-muted-foreground text-center mt-1">{item.caption}</p>
      </figcaption>
    </figure>
  </Link>
))}

          </div>
        </div>
      </section>
    </>
  );
}
