import { memo } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectInfrastructure from "@/assets/project-infrastructure.jpg";
import projectMall from "@/assets/project-mall.jpg";
import { fadeInUp, staggerContainer, viewportSettings } from "@/lib/animations";

const projects = [
  { title: "Luxury Towers Residence", category: "Residential", location: "Lagos", image: projectResidential },
  { title: "Commercial Plaza Complex", category: "Commercial", location: "Abuja", image: projectCommercial },
  { title: "Highway Bridge Project", category: "Infrastructure", location: "Port Harcourt", image: projectInfrastructure },
  { title: "Premier Shopping Mall", category: "Commercial", location: "Lagos", image: projectMall },
];

const stats = [
  { value: "300+", label: "Projects Completed" },
  { value: "30+", label: "Ongoing Projects" },
  // { value: "15+", label: "Countries" },
  { value: "98%", label: "Client Satisfaction" },
];

function ProjectsSectionComponent() {
  return (
    <section className="py-24 bg-primary">
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
              Our Portfolio
            </motion.span>
            <motion.h2 className="text-3xl md:text-4xl font-heading text-primary-foreground" variants={fadeInUp}>
              Featured Projects
            </motion.h2>
          </div>
          <motion.div variants={fadeInUp}>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/60 hover:text-accent transition-colors group"
            >
              View all projects
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
              variants={fadeInUp}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary bg-accent px-3 py-1 rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-base font-heading text-primary-foreground mt-1">{project.title}</h3>
                <p className="text-xs text-primary-foreground/60 mt-0.5">{project.location}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-primary-foreground/10"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} className="text-center" variants={fadeInUp}>
              <div className="text-2xl md:text-3xl font-heading text-accent">{stat.value}</div>
              <div className="text-xs text-primary-foreground/50 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export const ProjectsSection = memo(ProjectsSectionComponent);



