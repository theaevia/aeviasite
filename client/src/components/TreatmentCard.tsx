import { Link } from "wouter";

import { cn } from "@/lib/utils";

interface TreatmentCardProps {
  name: string;
  slug: string;
  price: string;
  duration: string;
  subtitle?: string;
  image?: string;
  imageClassName?: string;
  /** e.g. "center", "50% 35%", "top", "center 30%" */
  imageObjectPosition?: string;
}

export default function TreatmentCard({
  name,
  slug,
  price,
  duration,
  subtitle,
  image,
  imageClassName,
  imageObjectPosition = "50% 50%",
}: TreatmentCardProps) {
  return (
    <Link href={`/treatments/${slug}`}>
      <a className="bg-white rounded-2xl shadow-lg transition-shadow overflow-hidden h-full flex flex-col min-h-[350px] min-w-[293.34px]">
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          {image ? (
            // If the provided image follows our optimized public naming, render responsive sources
            /\/assets\/treatment_images\/.+-640w\.webp$/.test(image) ? (
              <picture>
                <source
                  type="image/avif"
                  srcSet={image.replace("-640w.webp", "-320w.avif") + " 320w, " + image.replace("-640w.webp", "-640w.avif") + " 640w"}
                  sizes="(max-width: 768px) 100vw, 320px"
                />
                <source
                  type="image/webp"
                  srcSet={image.replace("-640w.webp", "-320w.webp") + " 320w, " + image.replace("-640w.webp", "-640w.webp") + " 640w"}
                  sizes="(max-width: 768px) 100vw, 320px"
                />
                <img
                  src={image}
                  alt={name}
                  loading="lazy"
                  decoding="async"
                  width={640}
                  height={480}
                  className={cn(
                    "absolute inset-0 w-full h-full object-cover",
                    imageClassName
                  )}
                  style={{ objectPosition: imageObjectPosition }}
                />
              </picture>
            ) : (
              <img
                src={image}
                alt={name}
                loading="lazy"
                decoding="async"
                className={cn(
                  "absolute inset-0 w-full h-full object-cover",
                  imageClassName
                )}
                style={{ objectPosition: imageObjectPosition }}
              />
            )
          ) : (
            <div className="absolute inset-0 bg-muted" />
          )}
        </div>

        <div className="p-6 flex-grow flex flex-col items-center justify-center">
          <h3 className="text-lg font-serif font-bold text-primary text-center">
            {name}
          </h3>
          {subtitle && (
            <p className="text-xs text-primary text-center">
              {subtitle}
            </p>
          )}
          <p className="text-xs text-muted-foreground mt-2 text-center">
            {price} • {duration}
          </p>
        </div>
      </a>
    </Link>
  );
}
