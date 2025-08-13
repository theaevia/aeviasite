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
