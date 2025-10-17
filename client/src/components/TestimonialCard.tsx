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
    <div className="card-surface relative p-6 transition-all duration-200 hover:shadow-[0_14px_30px_rgba(0,0,0,0.08)]">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 text-primary fill-primary" />
        ))}
      </div>
      <p className="body-copy mb-4 italic text-[#3f3a33]/80">"{quote}"</p>
      <div className="flex items-center space-x-3">
        <div className="flex h-12 w-12 items-center justify-center border border-[#d9d0c4] bg-[#f7f2ea] text-xs font-medium uppercase tracking-[0.24em] text-primary">
          {getInitials(name)}
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.16em] text-[#111]">{name}</p>
          <p className="text-xs uppercase tracking-[0.2em] text-primary/70">{service}</p>
        </div>
      </div>
      {reviewUrl && (
        <a 
          href={reviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 text-[#111]/40 transition-colors duration-150 hover:text-primary"
          aria-label="View on Google Reviews"
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}
