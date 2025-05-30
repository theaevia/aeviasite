import { Heart, MessageCircle } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  service: string;
  quote: string;
  image: string;
  likes: number;
  comments: number;
}

export default function TestimonialCard({ name, service, quote, image, likes, comments }: TestimonialCardProps) {
  return (
    <div className="bg-secondary rounded-2xl p-6 smooth-transition hover:shadow-lg">
      <div className="flex items-center mb-4">
        <Heart className="h-4 w-4 text-primary mr-2" />
        <MessageCircle className="h-4 w-4 text-primary" />
      </div>
      <p className="text-foreground/80 mb-4 italic">"{quote}"</p>
      <div className="flex items-center space-x-3">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-foreground/70">{service}</p>
        </div>
      </div>
      <div className="flex items-center text-gray-400 text-sm mt-4">
        <Heart className="h-3 w-3 mr-2" />
        <span className="mr-4">{likes}</span>
        <MessageCircle className="h-3 w-3 mr-2" />
        <span>{comments}</span>
      </div>
    </div>
  );
}
