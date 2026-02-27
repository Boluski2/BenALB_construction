import { memo } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportSettings } from "@/lib/animations";

function CTASectionComponent() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
        >
          <motion.div className="space-y-2" variants={fadeInUp}>
            <h2 className="text-2xl md:text-3xl font-heading text-foreground">
              Ready to start your project?
            </h2>
            <p className="text-muted-foreground text-sm">
              Let's discuss how we can bring your vision to life.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-primary-foreground text-sm font-medium tracking-wide rounded-sm hover:bg-primary/90 transition-colors group"
            >
              Contact Us
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export const CTASection = memo(CTASectionComponent);
