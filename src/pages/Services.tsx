import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { PageTransition } from "@/components/PageTransition";
import { usePageMeta } from "@/hooks/usePageMeta";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportSettings } from "@/lib/animations";
import heroConstruction from "@/assets/hero-construction.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectInfrastructure from "@/assets/project-infrastructure.jpg";
import projectResidential from "@/assets/project-residential.jpg";
import projectMall from "@/assets/project-mall.jpg";
import projectGeospatial from "@/assets/project-geospatial.jpg";
import Facility_Management  from "@/assets/Facility_Management.png";

const services = [
  {
    title: "Civil Engineering",
    description:
      "As part of the services provided by BenALB, we deal with the design, construction, and maintenance of the physical and naturally built environment, including public works such as roads, bridges, canals, dams, airports, sewerage systems, pipelines, structural components of buildings, and railways.",
    image: heroConstruction,
  },
  {
    title: "Geospatial Services",
    description:
      "BenALB provides advanced geospatial solutions including land surveying, topographic mapping, Geographic Information Systems (GIS), remote sensing, and spatial data analysis. Our geospatial team leverages cutting-edge technology to support accurate site planning, environmental assessments, and infrastructure development across Nigeria.",
    image: projectGeospatial,
  },
  {
    title: "Building Construction",
    description:
      "A specialty of BenALB is the addition of structures to real estate, which considers construction costs, expected lifetime, safety regulations, and potential hazards. Our building construction services include commercial buildings, industrial facilities, and institutional structures.",
    image: projectCommercial,
  },
  {
    title: "Engineering, Procurement and Construction (EPC)",
    description:
      "In our role as an EPC provider, we are responsible for the design, procurement, construction, commissioning, and handover of a project to the project owner. We ensure that the project is completed according to schedule and within budget.",
    image: projectInfrastructure,
  },
  {
    title: "Facility Management",
    description:
      "By integrating people, place, process, and technology, we ensure the built environment is functional, comfortable, safe, and efficient. Our facility management services cover maintenance, operations, safety compliance, and security systems.",
    image: Facility_Management,
  },
  {
    title: "Real Estate",
    description:
      "A specialty of BenALB is building realistically priced real estate in rural and urban areas of Nigeria, which includes acreage, small towns, country homes, recreational cabins, retirement homes, and waterfront properties.",
    image: projectResidential,
  },
];

const Services = () => {
  usePageMeta({
    title: "Services | BenALB Construction | Civil Engineering, Building Construction & Geospatial",
    description: "Explore BenALB Construction's comprehensive services: civil engineering, building construction, geospatial solutions, EPC, facility management, and real estate development across Nigeria.",
    keywords: "construction services Nigeria, civil engineering, building construction, geospatial services, facility management, real estate development, engineering services Lagos",
    ogTitle: "Professional Construction & Engineering Services | BenALB",
    ogDescription: "Discover our full range of construction and engineering services including civil works, building construction, geospatial solutions, and facility management.",
    ogImage: "https://benalb.com/og-image.jpg",
    ogUrl: "https://benalb.com/services",
    canonicalUrl: "https://benalb.com/services",
  });
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero */}
        <section className="relative py-24 bg-primary overflow-hidden">
          <div className="absolute inset-0">
            <img src={projectCommercial} alt="" className="w-full h-full object-cover opacity-30" decoding="async" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              className="max-w-2xl space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-xs font-medium tracking-widest uppercase text-accent">Our Expertise</span>
              <h1 className="text-4xl md:text-5xl font-heading text-primary-foreground leading-tight">
                Services
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section>
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid md:grid-cols-2 ${index % 2 === 1 ? "md:[direction:rtl]" : ""}`}
            >
              <motion.div
                className={`flex flex-col justify-center p-10 md:p-16 ${index % 2 === 1 ? "[direction:ltr]" : ""}`}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                variants={staggerContainer}
              >
                <motion.span className="text-xs font-medium tracking-widest uppercase text-accent mb-3" variants={fadeInUp}>
                  0{index + 1}
                </motion.span>
                <motion.h2 className="text-2xl md:text-3xl font-heading text-foreground mb-4" variants={fadeInUp}>
                  {service.title}
                </motion.h2>
                <motion.p className="text-muted-foreground leading-relaxed text-sm" variants={fadeInUp}>
                  {service.description}
                </motion.p>
              </motion.div>

              <motion.div
                className={`h-64 md:h-auto min-h-[360px] overflow-hidden ${index % 2 === 1 ? "[direction:ltr]" : ""}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={viewportSettings}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
            </div>
          ))}
        </section>

        <CTASection />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Services;
