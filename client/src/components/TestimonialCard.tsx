import { Star, ExternalLink } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  service: string;
  quote: string;
  image: string;
  likes: number;
  comments: number;
  reviewUrl?: string; // Optional Google review URL
}

export default function TestimonialCard({ name, service, quote, image, likes, comments, reviewUrl }: TestimonialCardProps) {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="bg-secondary rounded-2xl p-6 smooth-transition hover:shadow-lg relative">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 text-primary fill-primary" />
        ))}
      </div>
      <p className="text-foreground/80 mb-4 italic">"{quote}"</p>
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 rounded-full bg-[#F5F1EA] border border-primary/20 shadow-sm flex items-center justify-center">
          <span className="font-serif text-primary text-lg font-medium">{getInitials(name)}</span>
        </div>
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-foreground/70">{service}</p>
        </div>
      </div>
      {reviewUrl && (
        <a 
          href={reviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 text-foreground/50 hover:text-primary smooth-transition"
          aria-label="View on Google Reviews"
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}
