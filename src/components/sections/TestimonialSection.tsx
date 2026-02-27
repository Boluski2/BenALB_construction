import { useState, useEffect, memo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, viewportSettings } from "@/lib/animations";

const testimonials = [
  {
    quote: "We are proud that an indigenous construction company, BenALB delivered the project on time and to specification.",
    author: "Engr. Tunde Akintaro, MNSE",
    role: "Managing Partner, Bezal Engineering Limited",
    project: "Dominion Air Hangar Project",
  },
  {
    quote: "BenALB delivered our commercial complex on time and within budget. Their professionalism and attention to detail exceeded our expectations.",
    author: "Chief Mrs. Olayinka Adams",
    role: "CEO, Adams Properties Ltd",
    project: "Victoria Island Commercial Complex",
  },
  {
    quote: "Working with BenALB on our infrastructure project was a seamless experience. Their engineering expertise and project management skills are truly world-class.",
    author: "Alh. Ibrahim Suleiman",
    role: "Project Manager, Federal Ministry of Works",
    project: "Lagos-Ibadan Expressway Section",
  },
];

function TestimonialSectionComponent() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-background">
      <motion.div
        className="container mx-auto px-6 max-w-3xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        variants={fadeInUp}
      >
        <span className="text-xs font-medium tracking-widest uppercase text-accent">Testimonials</span>

        <div className="mt-10 min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <blockquote className="text-xl md:text-2xl font-heading text-foreground leading-relaxed">
                "{testimonials[current].quote}"
              </blockquote>
              <div>
                <p className="text-sm font-medium text-foreground">{testimonials[current].author}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{testimonials[current].role}</p>
                <p className="text-xs text-accent mt-0.5">{testimonials[current].project}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => setCurrent((p) => (p === 0 ? testimonials.length - 1 : p - 1))}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-1.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === current ? "w-6 bg-accent" : "w-1 bg-border"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrent((p) => (p + 1) % testimonials.length)}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export const TestimonialSection = memo(TestimonialSectionComponent);
