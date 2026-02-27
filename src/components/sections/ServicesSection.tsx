import { memo } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeInUp, staggerContainer, viewportSettings } from "@/lib/animations";
import Engineering from "@/assets/Engineering.png";
import Design from "@/assets/Design.png";
import Geospatial from "@/assets/Geospatial.png";

const services = [
  {
    title: "Engineering",
    description: "Comprehensive solutions for infrastructure and development projects. From civil engineering to structural design, we deliver excellence in every build.",
    image: Engineering,
  },
  {
    title: "Design",
    description: "Expert technical drawings and innovative architectural designs. We transform concepts into detailed blueprints ready for construction.",
    image: Design,
  },
  {
    title: "Geospatial",
    description: "Advanced mapping and surveying for informed decision-making. Our geospatial services provide accurate data for project planning and execution.",
    image: Geospatial,
  },
];

function ServicesSectionComponent() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
        >
          <div className="space-y-3">
            <motion.span className="text-xs font-medium tracking-widest uppercase text-accent block" variants={fadeInUp}>
              What We Do
            </motion.span>
            <motion.h2 className="text-3xl md:text-4xl font-heading text-foreground" variants={fadeInUp}>
              Our Core Services
            </motion.h2>
          </div>
          <motion.div variants={fadeInUp}>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-accent transition-colors group"
            >
              View all services
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="group bg-card overflow-hidden"
              variants={fadeInUp}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-heading text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent/80 transition-colors group/link"
                >
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export const ServicesSection = memo(ServicesSectionComponent);
