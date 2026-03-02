import { useState, useEffect, memo } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "@/assets/hero-construction.jpg";
import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectInfrastructure from "@/assets/project-infrastructure.jpg";

const slides = [
  {
    image: heroImage,
    label: "Engineering Excellence",
    heading: "Quality Infrastructure Development For Over Two Decades",
    link: "/about",
  },
  {
    image: heroImage,
    label: "Geospatial",
    heading: "Precision Surveying & GIS Mapping For Smarter Development",
    link: "/services",
  },
  {
    image: projectResidential,
    label: "Residential",
    heading: "Premium Residential Developments That Stand The Test of Time",
    link: "/services",
  },
  {
    image: projectCommercial,
    label: "Commercial",
    heading: "World-Class Commercial Construction Across Nigeria",
    link: "/projects",
  },
  {
    image: projectInfrastructure,
    label: "Infrastructure",
    heading: "Infrastructure That Connects and Empowers Communities",
    link: "/services",
  },
  
];

function HeroSectionComponent() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={slides[current].image} 
            alt={slides[current].label} 
            className="w-full h-full object-cover" 
            loading="eager"
            decoding="async" 
          />
          <div className="absolute inset-0 bg-primary/70" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex items-end">
        <div className="container mx-auto px-6 pb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="max-w-2xl space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary bg-accent px-3 py-1 rounded-full mb-2">
                {slides[current].label}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-primary-foreground leading-[1.1]">
                {slides[current].heading}
              </h1>
              <Link
                to={slides[current].link}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/90 hover:text-accent transition-colors group"
              >
                Learn More
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* Slide indicators */}
          <div className="flex gap-2 mt-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-0.5 transition-all duration-300 ${
                  i === current ? "w-10 bg-accent" : "w-6 bg-primary-foreground/30"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export const HeroSection = memo(HeroSectionComponent);
