import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

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
  return (
    <div className={`${backgroundColor} rounded-2xl p-8 shadow-lg smooth-transition hover:shadow-xl`}>
      <div className="mb-6">
        <h3 className="text-2xl font-serif font-bold mb-2">{title}</h3>
        <p className="text-lg text-primary mb-4">{subtitle}</p>
        <p className="text-foreground/70 mb-6">{description}</p>
      </div>
      
      <img
        src={image}
        alt={title}
        className={`rounded-xl mb-6 w-full h-48 object-cover${imagePositionTop ? ' object-top' : ''}`}
        style={objectPosition ? { objectPosition } : undefined}
      />
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-foreground/70">
            <Check className="h-4 w-4 text-primary mr-3" />
            {feature}
          </li>
        ))}
      </ul>
      
      <Button 
        onClick={onCtaClick}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
      >
        {ctaText}
      </Button>
    </div>
  );
}
