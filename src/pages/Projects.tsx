import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { PageTransition } from "@/components/PageTransition";
import { usePageMeta } from "@/hooks/usePageMeta";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer, viewportSettings } from "@/lib/animations";
import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectInfrastructure from "@/assets/project-infrastructure.jpg";
import projectMall from "@/assets/project-mall.jpg";
import heroConstruction from "@/assets/hero-construction.jpg";
import engineerPortrait from "@/assets/engineer-portrait.jpg";
import projectGeospatial from "@/assets/project-geospatial.jpg";

const projects = [
  { title: "Private Residence", images: [projectResidential, projectCommercial, heroConstruction], description: "A premium residential development featuring modern amenities." },
  { title: "Land Survey & Mapping", images: [projectGeospatial, projectInfrastructure, heroConstruction], description: "Topographic survey and GIS mapping for site planning and development." },
  { title: "GIS Data Analysis", images: [projectGeospatial, heroConstruction, projectInfrastructure], description: "Geospatial data collection, analysis, and visualization for infrastructure projects." },
  { title: "Private Residence II", images: [projectCommercial, projectResidential, projectMall], description: "Contemporary home design with state-of-the-art facilities." },
  { title: "Drainage Construction", images: [projectInfrastructure, heroConstruction, engineerPortrait], description: "Major structural drainage system for water management." },
  { title: "Shopping Mall", images: [projectMall, projectCommercial, projectResidential], description: "A world-class shopping destination." },
  { title: "Terrace", images: [projectCommercial, projectMall, projectResidential], description: "Modern terrace housing development." },
  { title: "Warehouse", images: [heroConstruction, projectInfrastructure, projectCommercial], description: "Industrial warehouse facility." },
  { title: "Custom Fittings", images: [projectMall, engineerPortrait, projectCommercial], description: "Bespoke interior fittings and installations." },
  { title: "Facade Installation", images: [projectCommercial, heroConstruction, projectMall], description: "Professional facade installation services." },
  { title: "Housing Complex", images: [projectResidential, projectCommercial, projectMall], description: "Multi-unit housing complex." },
  { title: "Decking Construction", images: [heroConstruction, projectInfrastructure, engineerPortrait], description: "Quality decking construction." },
  { title: "Bungalow", images: [projectResidential, projectCommercial, heroConstruction], description: "Single-story bungalow design." },
  { title: "Duplex", images: [projectCommercial, projectResidential, projectMall], description: "Two-story duplex construction." },
  { title: "Piling Works", images: [projectInfrastructure, heroConstruction, engineerPortrait], description: "Foundation piling works." },
  { title: "Water Proof Wall", images: [heroConstruction, projectInfrastructure, projectCommercial], description: "Specialized waterproofing solutions." },
  { title: "Tile Treatment", images: [projectMall, projectResidential, projectCommercial], description: "Professional tile installation." },
  { title: "Wood Works", images: [engineerPortrait, projectResidential, projectMall], description: "Custom woodworking services." },
  { title: "POP Works", images: [projectMall, projectCommercial, engineerPortrait], description: "Plaster of Paris ceiling designs." },
  { title: "Pillar Construction", images: [projectInfrastructure, heroConstruction, projectCommercial], description: "Structural pillar construction." },
];

const Projects = () => {
  usePageMeta({
    title: "Our Projects | BenALB Construction | Civil Engineering & Building Portfolio",
    description: "Explore BenALB Construction's portfolio of 300+ completed projects including residential, commercial, infrastructure, and geospatial solutions across Nigeria.",
    keywords: "construction projects Nigeria, civil engineering portfolio, building projects, infrastructure works, Nigeria construction company projects, BenALB portfolio",
    ogTitle: "BenALB Construction Projects | Residential, Commercial & Infrastructure",
    ogDescription: "View our impressive portfolio of completed construction and engineering projects across Nigeria.",
    ogImage: "https://benalb.com/og-image.jpg",
    ogUrl: "https://benalb.com/projects",
    canonicalUrl: "https://benalb.com/projects",
  });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero */}
        <section className="relative py-24 bg-primary overflow-hidden">
          <div className="absolute inset-0">
            <img src={projectInfrastructure} alt="" className="w-full h-full object-cover opacity-30" decoding="async" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              className="max-w-2xl space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-xs font-medium tracking-widest uppercase text-accent">Portfolio</span>
              <h1 className="text-4xl md:text-5xl font-heading text-primary-foreground leading-tight">
                Our Projects
              </h1>
              <p className="text-primary-foreground/60 text-sm max-w-lg">
                BenALB Projects represents diversity in the built industry — from construction and engineering to geospatial services — employing adequate expertise in achieving clients' goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={staggerContainer}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="relative group cursor-pointer overflow-hidden aspect-square"
                  onClick={() => openGallery(project)}
                  variants={fadeInUp}
                >
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div>
                      <p className="text-primary-foreground text-sm font-medium">{project.title}</p>
                      <p className="text-primary-foreground/60 text-xs">{project.images.length} photos</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Gallery Modal */}
        <Dialog open={!!selectedProject} onOpenChange={closeGallery}>
          <DialogContent className="max-w-4xl p-0 bg-card border-border overflow-hidden">
            <AnimatePresence mode="wait">
              {selectedProject && (
                <div className="relative">
                  <button
                    onClick={closeGallery}
                    className="absolute top-3 right-3 z-10 p-1.5 bg-foreground/10 rounded-sm text-foreground hover:bg-foreground/20 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImageIndex}
                        src={selectedProject.images[currentImageIndex]}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </AnimatePresence>

                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          onClick={() => setCurrentImageIndex((p) => (p === 0 ? selectedProject.images.length - 1 : p - 1))}
                          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-foreground/10 rounded-sm text-primary-foreground hover:bg-foreground/20 transition-colors"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => setCurrentImageIndex((p) => (p === selectedProject.images.length - 1 ? 0 : p + 1))}
                          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-foreground/10 rounded-sm text-primary-foreground hover:bg-foreground/20 transition-colors"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </>
                    )}
                  </div>

                  <div className="p-5 space-y-3">
                    <h3 className="text-lg font-heading text-foreground">{selectedProject.title}</h3>
                    <p className="text-sm text-muted-foreground">{selectedProject.description}</p>
                    <div className="flex gap-2">
                      {selectedProject.images.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentImageIndex(i)}
                          className={`w-14 h-14 overflow-hidden border transition-colors ${
                            i === currentImageIndex ? "border-accent" : "border-transparent opacity-60 hover:opacity-100"
                          }`}
                        >
                          <img src={img} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </AnimatePresence>
          </DialogContent>
        </Dialog>

        <CTASection />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Projects;
