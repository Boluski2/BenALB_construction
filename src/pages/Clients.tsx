import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { PageTransition } from "@/components/PageTransition";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { fadeInUp, staggerContainer, viewportSettings } from "@/lib/animations";
import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectInfrastructure from "@/assets/project-infrastructure.jpg";
import projectMall from "@/assets/project-mall.jpg";
import heroConstruction from "@/assets/hero-construction.jpg";
import engineerPortrait from "@/assets/engineer-portrait.jpg";

const clients = [
  { name: "Federal Inland Revenue Service (FIRS)", image: projectResidential, projects: "12+ Projects" },
  { name: "Lagos State Government", image: projectCommercial, projects: "25+ Projects" },
  { name: "Nigerian Communications Commission (NCC)", image: projectInfrastructure, projects: "8+ Projects" },
  { name: "Nigerian National Petroleum Corporation (NNPC)", image: projectMall, projects: "15+ Projects" },
  { name: "Niger Delta Development Commission (NDDC)", image: heroConstruction, projects: "20+ Projects" },
  { name: "Federal Ministry of Works", image: engineerPortrait, projects: "30+ Projects" },
  { name: "Central Bank of Nigeria (CBN)", image: projectResidential, projects: "5+ Projects" },
  { name: "Nigerian Ports Authority (NPA)", image: projectCommercial, projects: "10+ Projects" },
  { name: "Federal Airport Authority of Nigeria (FAAN)", image: projectInfrastructure, projects: "7+ Projects" },
  { name: "Nigerian Maritime Administration (NIMASA)", image: projectMall, projects: "6+ Projects" },
  { name: "Ogun State Government", image: heroConstruction, projects: "18+ Projects" },
  { name: "Federal Capital Territory Administration (FCTA)", image: engineerPortrait, projects: "22+ Projects" },
];

const stats = [
  { value: "50+", label: "Government Clients" },
  { value: "100+", label: "Corporate Partners" },
  { value: "98%", label: "Client Retention" },
  { value: "20+", label: "Years of Trust" },
];

export default function Clients() {
  usePageMeta({
    title: "Our Clients | BenALB Construction | Government & Corporate Partners",
    description: "BenALB Construction serves 50+ government agencies and 100+ corporate clients across Nigeria. Trusted by Federal and State governments for infrastructure and engineering projects.",
    keywords: "BenALB clients, government construction contracts, corporate construction, Federal government projects, state government works, construction partnerships Nigeria",
    ogTitle: "BenALB Construction Clients | Government & Corporate Partners",
    ogDescription: "Discover the government agencies and corporations that trust BenALB Construction for their infrastructure and engineering needs.",
    ogImage: "https://benalb.com/og-image.jpg",
    ogUrl: "https://benalb.com/clients",
    canonicalUrl: "https://benalb.com/clients",
  });
  useScrollToTop();

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero */}
        <section className="relative py-24 bg-primary overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              className="max-w-2xl space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-xs font-medium tracking-widest uppercase text-accent">Our Partners</span>
              <h1 className="text-4xl md:text-5xl font-heading text-primary-foreground leading-tight">
                Trusted by Leading Organizations
              </h1>
              <p className="text-primary-foreground/60 text-sm max-w-lg">
                We've partnered with government agencies, corporations, and organizations across Nigeria
                to deliver exceptional construction, engineering, and geospatial projects.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-secondary border-b border-border">
          <div className="container mx-auto px-6">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={staggerContainer}
            >
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={fadeInUp}>
                  <div className="text-2xl md:text-3xl font-heading text-accent">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Clients Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={staggerContainer}
            >
              {clients.map((client) => (
                <motion.div
                  key={client.name}
                  className="group relative aspect-[4/3] overflow-hidden"
                  variants={fadeInUp}
                >
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-primary/60" />
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <h3 className="text-sm font-medium text-primary-foreground">{client.name}</h3>
                    <span className="text-xs text-accent mt-1">{client.projects}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <CTASection />
        <Footer />
      </div>
    </PageTransition>
  );
}
