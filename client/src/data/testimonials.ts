export interface Testimonial {
  name: string;
  service: string;
  quote: string;
  image: string;
  likes: number;
  comments: number;
  reviewUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Joan H.",
    service: "Aevia Skin",
    quote: "It's been a few weeks since I had my fantastic experience at The Aevia with Dr Renée and Dr Terrell. They addressed the dark circles under my eyes with polynucleotide injections, and the results have been magical.",
    image: "",
    likes: 127,
    comments: 8,
    reviewUrl: "https://maps.app.goo.gl/jpQNgXg92eiBesPD8"
  },
  {
    name: "Michelle C.",
    service: "Aevia Skin",
    quote: "Thank you once again to both doctors. Really satisfied with everything. I will most definitely highly recommend you to my friends and colleagues. I look forward to my next session with you.",
    image: "",
    likes: 89,
    comments: 12,
    reviewUrl: "https://maps.app.goo.gl/Cqjt1Rcym1uQ9ByB6"
  },
  {
    name: "Maria A.",
    service: "Aevia Skin",
    quote: "A great experience at The Aevia! Dr Terrell is so friendly and explains everything thoroughly! Will definitely be back again!",
    image: "",
    likes: 203,
    comments: 24,
    reviewUrl: "https://maps.app.goo.gl/HVS56S8yDgGuCeqC9"
  }
]; 