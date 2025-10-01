import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BookingButton } from "@/components/BookingButton";
import { CLARITY_STRATEGY_URL, MIND_DISCOVERY_URL, MOMENTUM_SIX_URL, TRANSFORMATION_TWELVE_URL } from "@/lib/bookingUrls";
import { journalUrl } from "@/lib/journal";
import mindHeroImage from "@assets/hero_images/mind-hero-new2.webp";
import mindHeroImage800 from "@assets/hero_images/mind-hero-new2-800w.webp";
import leadershipImage from "@assets/hero_images/mind-leadership-hero2.webp";
import sportsImage from "@assets/hero_images/mind-sports-hero2.webp";
import careerImage from "@assets/hero_images/mind-career-hero3.webp";
import manuPortrait from "@assets/about_pics/manu-pic.webp";
import SEO from "@/components/SEO";

const competitiveEdgeCards = [
  {
    title: "Leadership",
    bullets: [
      "Trust your inner voice",
      "Remove your blockers",
      "Build the stamina to inspire others",
    ],
    image: leadershipImage,
    alt: "A leader reflecting during a coaching session",
  },
  {
    title: "Sports",
    bullets: [
      "Eliminate distractions",
      "Grow through mistakes",
      "Stay composed under pressure",
    ],
    image: sportsImage,
    alt: "An athlete preparing for a performance",
  },
  {
    title: "Career",
    bullets: [
      "Become impossible to ignore",
      "Be recognised for your value",
      "Increase your earning potential",
    ],
    image: careerImage,
    alt: "A professional focused on strategy and growth",
  },
];

const testimonialItems = [
  {
    quote:
      "Manu notices what's telling on the surface and encourages me to think about what's happening deeper - where true transformation is found.",
    name: "Gabriel",
    role: "International Footballer",
  },
  {
    quote: "Every session with Manu refocuses my mind on the most impactful action I can take now.",
    name: "Daniel",
    role: "Head of Product",
  },
  {
    quote: "Manu helps me find the courage to see things how they are, and move towards how I want things to be.",
    name: "Emma",
    role: "CEO of FinTech Startup",
  },
];

const journeySteps = [
  {
    title: "Clarify what matters",
    description: "Prioritise the goals that will take you to the next level.",
  },
  {
    title: "Become aware of what's holding you back",
    description: "Discover what's driving you and decide what you want to do about it.",
  },
  {
    title: "Implement the strategies for sustainable change",
    description:
      "Experiment with peak performance techniques, frameworks, and systems to do what you do best, repeatedly.",
  },
  {
    title: "Translate thinking into action",
    description: "Execute a results-driven plan with accountability to stick to your goals.",
  },
];

const faqs = [
  {
    question: "What is coaching?",
    answer: (
      <>
        Coaching is a thinking partnership that brings about change through self-inquiry, clarity, and accountability. Read the 2-minute article on
        {' '}
        <a
          href={journalUrl('/what-is-coaching')}
          className="text-primary underline underline-offset-4 hover:text-primary/80"
          target="_blank"
          rel="noopener noreferrer"
        >
          What is Coaching?
        </a>
        {' '}here.
      </>
    ),
  },
  {
    question: "Why do I need a coach?",
    answer:
      "Athletes, artists, and high-achievers in all aspects of life have one thing in common: they have coaches. They know that having someone in their corner to constructively challenge them and unleash what makes them great is a competitive advantage. They can course correct more quickly, think more clearly, and re-focus on the actions that will bring them greater results and personal fulfilment.",
  },
  {
    question: "How fast will I see results?",
    answer:
      "Transformative coaching at Aevia Mind is designed to help you create lasting change by generating transformation at your core, which shapes your development and leads to improvements in your outcomes. This type of change is deep, long-term, and sustainable, and therefore takes time and depends upon your commitment. However, many clients report experiencing transformational changes within the first few sessions.",
  },
  {
    question: "How much time does coaching require?",
    answer:
      "Our coaching is designed to fit into your life when it will energise you. Dr Manu Sidhu will work with you to create a schedule that aligns with your goals. Each session you invest in can return more time and energy in the long run by helping you become more efficient and effective.",
  },
  {
    question: "Can I get a preview of what coaching is like before committing?",
    answer:
      "Yes - at Aevia Mind, every first session is free. This gives you the opportunity to experience the value of coaching before making a longer-term commitment.",
  },
  {
    question: "What qualifications do coaches need?",
    answer:
      "Coaching is currently an unregulated industry, which means there are plenty of coaches who lack any formal training. Dr Manu Sidhu has trained as a doctor and worked in mental health services in the UK and Australia, providing a rich understanding into the nature of the mind. He is also training at the Animas Centre for Coaching to finish his Accredited Diploma in Transformative Coaching, a course fully accredited by the International Coaching Federation (ICF), European Mentoring and Coaching Council (EMCC), and Association for Coaching (AC).",
  },
  {
    question: "How can I tell if I need coaching or therapy?",
    answer:
      "Choose coaching when you're functioning day-to-day and want clearer direction, better performance, and future-focused progress. Choose therapy when your mental health, emotional symptoms, or past issues are disrupting daily functioning. If in doubt, consult a licensed psychologist, psychiatrist, or healthcare service. If you're in crisis or struggling to stay safe, seek urgent help now (UK: call 999 for immediate danger, 111 for urgent advice, or Samaritans 116 123).",
  },
  {
    question: "Can I have coaching while I am having therapy?",
    answer:
      "Yes - if you're functioning but psychological blocks slow your coaching progress, therapy can address the underlying issues while coaching continues on agreed goals and habits. Many clients benefit from doing both in parallel with clear boundaries in place from the beginning.",
  },
];

export default function Mind() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const totalTestimonials = testimonialItems.length;
  const autoplayDelay = 8000;

  const goToNextTestimonial = useCallback(
    () => setActiveTestimonial((prev) => (prev + 1) % totalTestimonials),
    [totalTestimonials],
  );

  const goToPreviousTestimonial = useCallback(
    () => setActiveTestimonial((prev) => (prev - 1 + totalTestimonials) % totalTestimonials),
    [totalTestimonials],
  );

  useEffect(() => {
    const interval = setInterval(goToNextTestimonial, autoplayDelay);

    return () => clearInterval(interval);
  }, [goToNextTestimonial]);

  return (
    <>
      <SEO 
        title="Aevia Mind | Performance Coaching | King's Cross, London"
        description="Doctor-led coaching for professionals seeking clarity, confidence, and agency. For those who wish to transform their mindset and reach their full potential, with Dr. Manu Sidhu."
        image="/hero_images/mind-hero.webp"
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-muted py-20 lg:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
                <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4 leading-tight">
                  <span className="block">Aevia Mind:</span>
                  <span className="text-primary">Performance Coaching for the Ambitious</span>
                </h1>
                <p className="mb-4 text-[clamp(0.95rem,0.85rem+0.3vw,1.125rem)] leading-[1.4] font-sans text-foreground tracking-[0.01em]">
                  <span className="font-semibold text-[#B89A6A]">Think</span> with clarity.
                  <br className="sm:hidden" />
                  <span className="font-semibold text-[#B89A6A]"> Perform</span> with consistency.
                </p>
                <p className="text-xl lg:text-lg text-foreground/70 mb-6 leading-relaxed">
                  Clear the path from where you are to where you want to be - and build the mindset, systems, and support to get there.
                </p>
                <div className="flex flex-col items-stretch gap-3 w-full max-w-md">
                  <span className="text-lg text-foreground/80 text-center lg:text-left italic">
                    Every first session is free.
                  </span>
                  <BookingButton
                    href={MIND_DISCOVERY_URL}
                    variant="primary"
                    className="self-center sm:self-start px-6 py-2 text-base whitespace-nowrap md:min-w-[200px]"
                  >
                    Book Yours
                  </BookingButton>
                </div>
              </div>
              <div className="order-1 lg:order-2 w-full">
                <div className="relative w-full pb-[75%]">
                  <picture>
                    <source
                      srcSet={`${mindHeroImage800} 800w, ${mindHeroImage} 1600w`}
                      type="image/webp"
                    />
                    <img
                      src={mindHeroImage}
                      srcSet={`${mindHeroImage800} 800w, ${mindHeroImage} 1600w`}
                      alt="Aevia Mind clinic showcasing desk during a coaching session"
                      className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg loading:blur-sm loading:animate-pulse"
                      loading="eager"
                     
                      width="1600"
                      height="1200"
                      sizes="(max-width: 1024px) 100vw, 1600px"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Edge */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold">A Competitive Edge in Every Arena</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {competitiveEdgeCards.map((edge) => (
                <article
                  key={edge.title}
                  className="group h-full rounded-3xl overflow-hidden shadow-xl bg-white border border-foreground/10 flex flex-col"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <img
                      src={edge.image}
                      alt={edge.alt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  </div>
                  <div className="p-8 flex flex-col gap-4">
                    <h3 className="text-2xl font-serif font-semibold">{edge.title}</h3>
                    <ul className="list-disc space-y-2 pl-5 text-base text-foreground/70 leading-relaxed marker:text-primary">
                      {edge.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Coach Bio */}
        <section className="py-20 bg-muted">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl shadow-xl">
                <img
                  src={manuPortrait}
                  alt="Dr Manu Sidhu"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-serif font-bold">Led by Dr Manu Sidhu</h2>
                  <p className="text-lg text-primary font-semibold mt-2">Founder, Doctor, and Performance Coach</p>
                </div>
                <div className="space-y-5 text-lg text-foreground/80 leading-relaxed">
                  <p>
                    Manu works across the full spectrum of flourishing: from helping patients recover from mental illness to coaching peak performers striving for mastery.
                  </p>
                  <p>
                    At Aevia Mind, Manu brings together his expertise in mental fitness, peak performance science, and human flourishing to help his clients discover and achieve their most important goals.
                  </p>
                  <p>
                    Trained in Transformative Coaching, Manu catalyses shifts at the level of identity - so new habits are not forced; they become a natural expression of who you are becoming. This leads to improvements in the competencies you need to perform at your best, over and over again.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold">Testimonials</h2>
            </div>
            <div className="relative mx-auto max-w-3xl" aria-live="polite">
              <div className="relative min-h-[240px]">
                {testimonialItems.map((testimonial, index) => {
                  const isActive = index === activeTestimonial;
                  return (
                    <blockquote
                      key={testimonial.name}
                      className={`rounded-3xl bg-muted/50 px-8 py-10 text-center transition-all duration-500 ease-in-out ${
                        isActive
                          ? 'opacity-100 translate-y-0 relative'
                          : 'pointer-events-none opacity-0 absolute inset-0 -translate-y-4'
                      }`}
                    >
                      <p className="text-xl lg:text-2xl font-serif leading-relaxed text-foreground/80">
                        “{testimonial.quote}”
                      </p>
                      <footer className="mt-6 text-sm uppercase tracking-wide text-foreground/60">
                        {testimonial.name} · {testimonial.role}
                      </footer>
                    </blockquote>
                  );
                })}
              </div>
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 pointer-events-none">
                <button
                  type="button"
                  onClick={goToPreviousTestimonial}
                  className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-foreground shadow-lg hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary transition"
                  aria-label="Show previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={goToNextTestimonial}
                  className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-foreground shadow-lg hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary transition"
                  aria-label="Show next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
              <div className="flex justify-center gap-3 mt-8">
                {testimonialItems.map((_, index) => (
                  <button
                    key={`testimonial-${index}`}
                    type="button"
                    className={`h-2 w-8 rounded-full transition-colors duration-300 ${
                      index === activeTestimonial ? 'bg-primary' : 'bg-foreground/20 hover:bg-foreground/40'
                    }`}
                    onClick={() => setActiveTestimonial(index)}
                    aria-label={`Show testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Transformation Journey */}
        <section className="py-20 bg-muted">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold">
                From breakthroughs in thinking to consistency in results
              </h2>
              <p className="text-lg text-foreground/70 mt-4">For you, your family, and the team you lead.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {journeySteps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex h-full flex-col gap-2 rounded-3xl border border-foreground/10 bg-white p-6 shadow-md"
                >
                  <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-4">
                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-primary/30 bg-white text-base font-semibold leading-none text-primary lg:self-center">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-serif text-xl font-semibold leading-[1.3] text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-base leading-[1.5] text-foreground/70 max-w-[65ch]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold">How does booking work at Aevia Mind?</h2>
              <p className="text-lg text-primary font-semibold">Every first session is free.</p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                We'll dive deep into your current challenges and goals, provide actionable strategies to implement straight away, and decide if coaching is the right move.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Experience the value of coaching before making a longer-term commitment to fulfilling your potential.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-3xl border border-foreground/10 bg-muted/40 p-8 text-center space-y-4">
                <h3 className="text-2xl font-serif font-semibold">New Clients</h3>
                <p className="text-foreground/70">Start with your first session free</p>
                <BookingButton href={MIND_DISCOVERY_URL} variant="primary" className="w-full">
                  Book First Session
                </BookingButton>
              </div>
              <div className="rounded-3xl border border-foreground/10 bg-muted/40 p-8 text-center space-y-4">
                <h3 className="text-2xl font-serif font-semibold">Returning Clients</h3>
                <p className="text-foreground/70">Book your next coaching session</p>
                <BookingButton href={CLARITY_STRATEGY_URL} variant="primary" className="w-full">
                  Book Coaching Sessions
                </BookingButton>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-muted">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold">FAQs</h2>
            </div>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-3xl border border-foreground/10 bg-white p-6 shadow-sm"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-lg font-semibold font-serif text-foreground/90">
                    {faq.question}
                    <span className="text-foreground/40 transition-transform duration-300 group-open:rotate-45">+</span>
                  </summary>
                  <div className="mt-4 text-base leading-relaxed text-foreground/70">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="max-w-5xl mx-auto px-6">
            <div className="ml-embedded" data-form="sx5eR7" />
          </div>
        </section>
      </div>
    </>
  );
}
