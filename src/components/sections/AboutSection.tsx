import { memo } from "react";
import { motion } from "framer-motion";
import Overview from "@/assets/Overview.png";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportSettings } from "@/lib/animations";

function AboutSectionComponent() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={staggerContainer}
          >
            <motion.span
              className="text-xs font-medium tracking-widest uppercase text-accent"
              variants={fadeInUp}
            >
              Who We Are
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl font-heading text-foreground leading-snug"
              variants={fadeInUp}
            >
              Company Overview
            </motion.h2>
            <motion.div className="w-10 h-px bg-accent" variants={fadeInUp} />
            <motion.p
              className="text-muted-foreground leading-relaxed"
              variants={fadeInUp}
            >
              BenAlb Integrated Services Ltd is a leader in engineering, design, and geospatial services.
              With years of experience and a commitment to professionalism and quality, we deliver
              integrated solutions from civil construction to advanced GIS mapping and land surveying tailored to Nigeria and the surrounding regions.
            </motion.p>
            <motion.p
              className="text-muted-foreground leading-relaxed"
              variants={fadeInUp}
            >
              We have accumulated skills, know how and experience in delivering at acceptable international
              standards for a wide range of services including Civil/Building Construction,
              Mechanical and Electrical installations, Geospatial surveying, and more.
            </motion.p>
          </motion.div>

          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInRight}
          >
            <img
              src={Overview}
              alt="BenALB Engineer on site"
              className="w-full h-[480px] object-cover object-top"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute -bottom-4 -left-4 w-full h-full border border-accent/20 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export const AboutSection = memo(AboutSectionComponent);
