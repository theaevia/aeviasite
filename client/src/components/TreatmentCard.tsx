import { Link } from "wouter";

import { cn } from "@/lib/utils";

interface TreatmentCardProps {
  name: string;
  slug: string;
  price: string;
  duration: string;
  subtitle?: string; // Add optional subtitle prop
  image?: string;
  imageClassName?: string; // Add optional imageClassName prop
}

export default function TreatmentCard({ name, slug, price, duration, subtitle, image, imageClassName }: TreatmentCardProps) {
  return (
    <Link href={`/treatments/${slug}`}>
      <a className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group h-full flex flex-col min-h-[350px] min-w-[293.34px]">
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          {image && <img src={image} alt={name} className={cn(
            "object-cover transition-transform duration-300 will-change-transform",
            imageClassName
          )}
          style={{ transformOrigin: "center center" }}
          />}
        </div>
        <div className="p-6 flex-grow flex flex-col items-center justify-center">
          <h3 className="text-lg font-serif font-bold text-primary group-hover:underline text-center">
            {name}
          </h3>
          {subtitle && <p className="text-xs text-primary group-hover:underline text-center">{subtitle}</p>}
          <p className="text-xs text-muted-foreground mt-2 text-center">
            {price} &bull; {duration}
          </p>
        </div>
      </a>
    </Link>
  );
}
