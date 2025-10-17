import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { asset, DEFAULT_ASSET_FALLBACK_PATH } from "@/lib/assets";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  ctaText: string;
  onCtaClick: () => void;
  backgroundColor?: string;
  imagePositionTop?: boolean;
  objectPosition?: string;
}

export default function ServiceCard({ 
  title, 
  subtitle, 
  description, 
  image, 
  features, 
  ctaText, 
  onCtaClick,
  backgroundColor = "bg-white",
  imagePositionTop = false,
  objectPosition
}: ServiceCardProps) {
  const imageSrc = asset(image, { fallback: DEFAULT_ASSET_FALLBACK_PATH });

  return (
    <div className={`${backgroundColor} card-surface p-8 transition-all duration-200 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]`}>
      <div className="mb-6 space-y-3">
        <p className="eyebrow text-primary/90">{subtitle}</p>
        <h3 className="text-xl uppercase tracking-[0.16em] text-[#111]">{title}</h3>
        <p className="body-copy">{description}</p>
      </div>
      
      <img
        src={imageSrc}
        alt={title}
        width="800"
        height="533"
        loading="lazy"
        className={`mb-6 h-64 w-full border border-[#d9d0c4] object-cover ${imagePositionTop ? "object-top" : ""}`}
        style={objectPosition ? { objectPosition } : undefined}
      />
      
      <ul className="mb-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3 text-sm leading-relaxed text-[#3f3a33]">
            <Check className="h-4 w-4 text-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        onClick={onCtaClick}
        variant="primary"
        className="w-full"
      >
        {ctaText}
      </Button>
    </div>
  );
}
