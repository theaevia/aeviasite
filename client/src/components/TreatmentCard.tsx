import { Link } from "wouter";

import { asset, assetSrcSet, DEFAULT_ASSET_FALLBACK_PATH } from "@/lib/assets";
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
  /** If true, load eagerly with high fetch priority */
  priority?: boolean;
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
  priority = false,
}: TreatmentCardProps) {
  const imageInput = image ?? DEFAULT_ASSET_FALLBACK_PATH;
  const resolvedImage = asset(imageInput, { fallback: DEFAULT_ASSET_FALLBACK_PATH });
  const hasOptimizedVariants =
    typeof image === "string" && /\/assets\/treatment_images\/.+-640w\.webp$/.test(image);

  const avifSrcSet = hasOptimizedVariants
    ? assetSrcSet(
        `${imageInput.replace("-640w.webp", "-320w.avif")} 320w, ${imageInput.replace("-640w.webp", "-640w.avif")} 640w`
      )
    : undefined;

  const webpSrcSet = hasOptimizedVariants
    ? assetSrcSet(
        `${imageInput.replace("-640w.webp", "-320w.webp")} 320w, ${imageInput.replace("-640w.webp", "-640w.webp")} 640w`
      )
    : undefined;

  return (
    <Link href={`/treatments/${slug}`}>
      <a className="card-surface flex h-full min-h-[350px] min-w-[293px] flex-col overflow-hidden transition-shadow duration-200 hover:shadow-[0_16px_34px_rgba(0,0,0,0.08)]">
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          {hasOptimizedVariants ? (
            <picture>
              <source
                type="image/avif"
                srcSet={avifSrcSet}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <source
                type="image/webp"
                srcSet={webpSrcSet}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <img
                src={resolvedImage}
                alt={name}
                loading={priority ? "eager" : "lazy"}
                decoding={priority ? "sync" : "async"}
                width={640}
                height={480}
                className={cn("absolute inset-0 h-full w-full border-b border-[#d9d0c4] object-cover", imageClassName)}
                style={{ objectPosition: imageObjectPosition }}
              />
            </picture>
          ) : (
            <img
              src={resolvedImage}
              alt={name}
              loading={priority ? "eager" : "lazy"}
              decoding={priority ? "sync" : "async"}
              className={cn("absolute inset-0 h-full w-full border-b border-[#d9d0c4] object-cover", imageClassName)}
              style={{ objectPosition: imageObjectPosition }}
            />
          )}
        </div>

        <div className="flex flex-grow flex-col items-center justify-center gap-2 p-6 text-center">
          <h3 className="text-sm uppercase tracking-[0.2em] text-[#111]">
            {name}
          </h3>
          {subtitle && (
            <p className="text-xs uppercase tracking-[0.18em] text-primary/80">
              {subtitle}
            </p>
          )}
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-[#3f3a33]/70">
            {price} • {duration}
          </p>
        </div>
      </a>
    </Link>
  );
}
