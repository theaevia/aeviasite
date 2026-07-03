export interface Testimonial {
  name: string;
  quote?: string;
  rating: number;
  date: string;
  reviewUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Joan H.",
    quote: "It's been a few weeks since I had my fantastic experience at The Aevia with Dr Renée and Dr Terrell. They addressed the dark circles under my eyes with polynucleotide injections, and the results have been magical.",
    rating: 5,
    date: "2025-06-01",
    reviewUrl: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VOdUhucVhMMEoyemF3EAE!2m1!1s0x0:0x6231887d02d12d6b!3m1!1s2@1:CIHM0ogKENuHnqXL0J2zaw%7C%7C?hl=en",
  },
  {
    name: "Michelle C.",
    quote: "Thank you once again to both Doctors. Really satisfied with everything. I will most definitely highly recommend you to my friends and colleagues. I look forward to my next session with you. Michelle C. Xx",
    rating: 5,
    date: "2025-06-01",
    reviewUrl: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VOV0h1S1hUalBMeGF3EAE!2m1!1s0x0:0x6231887d02d12d6b!3m1!1s2@1:CIHM0ogKENWHuKXTjPLxaw%7C%7C?hl=en",
  },
  {
    name: "Maria A.",
    quote: "A great experience at The Aevia! Dr Terrell is so friendly and explains everything thoroughly! Will definitely be back again!",
    rating: 5,
    date: "2025-06-01",
    reviewUrl: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VQSFd0dWFfcGRHQXFnRRAB!2m1!1s0x0:0x6231887d02d12d6b!3m1!1s2@1:CIHM0ogKEPHWtua_pdGAqgE%7C%7C?hl=en",
  },
  {
    name: "Joanne G.",
    quote: "Really pleased with my treatment the Docters were very knowledgeable & took there time in explaining my treatment and aftercare, no bruising intact I didn’t really feel a thing ( which is a bonus) would highly recommend them both…",
    rating: 5,
    date: "2025-06-01",
    reviewUrl: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VPekk0X1dmcWFxTm5nRRAB!2m1!1s0x0:0x6231887d02d12d6b!3m1!1s2@1:CIHM0ogKEOzI4_WfqaqNngE%7C%7C?hl=en",
  },
  {
    name: "Manu S.",
    quote: "I had dark circles and deep wrinkles around my eyes so I contacted the Aevia Skin doctors, who explained the whole process with professionalism and expertise that gave me full confidence. It is a new type of investment into my skincare, but definitely one I’ll keep coming back for - especially ahead of big events!",
    rating: 5,
    date: "2025-06-02",
    reviewUrl: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VOaTUzZTZQbmVyNXRRRRAB!2m1!1s0x0:0x6231887d02d12d6b!3m1!1s2@1:CIHM0ogKENi53e6Pner5tQE%7C%7C?hl=en",
  },
  {
    name: "Agatha J.",
    rating: 5,
    date: "2025-07-14",
    reviewUrl: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25wNGFXZE5kRk5EVW5CRE5EVnhaR2s1UTBWRlMyYxAB!2m1!1s0x0:0x6231887d02d12d6b!3m1!1s2@1:CAIQACodChtycF9oOnp4aWdNdFNDUnBDNDVxZGk5Q0VFS2c%7C%7C?hl=en",
  },
  {
    name: "Karla W.",
    quote: "Had a great experience with Dr Tyrell. I had a both online and in person consultation to discuss how we were going to treat my asymmetry. Looking forward to seeing the results soon.",
    rating: 5,
    date: "2025-08-01",
    reviewUrl: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21nM2NHWTFiWHBEVjFjNFJEaDRTMkV5UVdsNFNtYxAB!2m1!1s0x0:0x6231887d02d12d6b!3m1!1s2@1:CAIQACodChtycF9oOmg3cGY1bXpDV1c4RDh4S2EyQWl4Smc%7C%7C?hl=en",
  },
];

export const featuredTestimonials = testimonials.slice(0, 3);
