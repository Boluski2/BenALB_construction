import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { PageTransition } from "@/components/PageTransition";
import { usePageMeta } from "@/hooks/usePageMeta";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportSettings } from "@/lib/animations";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroConstruction from "@/assets/hero-construction.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectInfrastructure from "@/assets/project-infrastructure.jpg";
import teamCeo from "@/assets/team-ceo.jpg";
import teamCto from "@/assets/team-cto.jpg";
import teamPm from "@/assets/team-pm.jpg";
import teamGeo from "@/assets/team-geo.jpg";
import Overview from "@/assets/Overview.png";

const managementProcesses = [
  "Control of Documents",
  "Control of Records",
  "Internal Audits",
  "Control of Non-conformance",
  "Corrective and Preventive action",
  "Management Review",
  "Policy Procedure",
  "Consultation and Communication Procedure",
  "Planning for Legal Requirements Procedure",
  "Planning - QMS, EMS and OHSAS objectives and programmes procedure",
  "Structure Responsibility Procedure",
];

const whyChooseUs = [
  "We exceed our client's expectations.",
  "We help you establish a perfect project.",
  "We deliver on-time and enforce quality control.",
  "We protect your budget in achieving your project desire.",
];

const About = () => {
  usePageMeta({
    title: "About BenALB Construction | Over 30 Years of Excellence",
    description: "Learn about BenALB Construction's journey, mission, and expertise in civil engineering, building construction, and geospatial services across Nigeria.",
    keywords: "about BenALB, construction company history, engineering excellence, Nigeria construction",
    ogTitle: "About BenALB Construction | Leading Construction Firm",
    ogDescription: "Discover how BenALB Construction has delivered excellence in engineering and construction for over 30 years.",
    ogImage: "https://benalb.com/og-image.jpg",
    ogUrl: "https://benalb.com/about",
    canonicalUrl: "https://benalb.com/about",
  });
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero */}
        <section className="relative py-24 bg-primary overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroConstruction} alt="" className="w-full h-full object-cover opacity-30" decoding="async" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              className="max-w-2xl space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-xs font-medium tracking-widest uppercase text-accent">About Us</span>
              <h1 className="text-4xl md:text-5xl font-heading text-primary-foreground leading-tight">
                Building With Purpose Since 2000
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Company Introduction */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                className="space-y-5"
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                variants={staggerContainer}
              >
                <motion.h2 className="text-2xl md:text-3xl font-heading text-foreground" variants={fadeInUp}>
                  Ben-ALB Integrated Services
                </motion.h2>
                <motion.p className="text-muted-foreground leading-relaxed" variants={fadeInUp}>
                 With a track record that spans residential, commercial, and public projects across Nigeria, Ben ALB Integrated Services Ltd.
                combines deep experience with a client-first approach to construction projects and services. Over the years, we have turned ideas into lasting structures, earning trust through attention to detail, timely delivery, and the strong relationships we build along the way.
                </motion.p>
                <motion.p className="text-muted-foreground leading-relaxed" variants={fadeInUp}>
                  We have accumulated skills, know-how and experience in delivering at acceptable international
                  standards for a wide range of engineering services tailored to Civil/Building Construction,
                  Mechanical and Electrical installations, Petroleum Storage Installations (PSI), Heating
                  Ventilation & Air Conditioning Works (HVAC), and Geospatial Services including land surveying,
                  GIS mapping, and spatial data analysis.
                </motion.p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                variants={fadeInRight}
              >
                <img
                  src={Overview}
                  alt="Engineer on site"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-6">
            <motion.div
              className="grid md:grid-cols-2 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={staggerContainer}
            >
              <motion.div className="bg-card p-8 space-y-4" variants={fadeInLeft}>
                <span className="text-xs font-medium tracking-widest uppercase text-accent">Our Vision</span>
                <p className="text-muted-foreground leading-relaxed">
                  To be a leading name in Nigeria's construction industry,
                  recognized as the firm of choice for delivering purpose-driven
                  projects with integrity, innovative thinking, and a strong commitment to sustainability.
                </p>
              </motion.div>
              <motion.div className="bg-card p-8 space-y-4" variants={fadeInRight}>
                <span className="text-xs font-medium tracking-widest uppercase text-accent">Our Mission</span>
                <p className="text-muted-foreground leading-relaxed">
                  We are committed to delivering dependable construction and engineering services
                  shaped by thoughtful design, enduring quality,
                  and a deep understanding of our clients' needs and the communities we operate in.
                  Through every project, we aim to create lasting impact, support local development,
                 minimize environmental footprint, and build with sustainability at the core of our operations
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Strategic Mandate */}
        <section className="py-20">
          <motion.div
            className="container mx-auto px-6 max-w-3xl text-center space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={staggerContainer}
          >
            <motion.span className="text-xs font-medium tracking-widest uppercase text-accent" variants={fadeInUp}>
              Strategic Mandate
            </motion.span>
            <motion.h2 className="text-2xl md:text-3xl font-heading text-foreground" variants={fadeInUp}>
              Our Guiding Purpose
            </motion.h2>
            <motion.div className="w-10 h-px bg-accent mx-auto" variants={fadeInUp} />
            <motion.p className="text-muted-foreground leading-relaxed" variants={fadeInUp}>
              Attain utmost client satisfaction by surpassing expectations through the provision of construction
              solutions that add significant value.
            </motion.p>
          </motion.div>
        </section>

        {/* Guiding Principles */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-6">
            <motion.div
              className="grid md:grid-cols-2 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={staggerContainer}
            >
              <motion.div className="bg-card p-8 space-y-4" variants={fadeInUp}>
                <span className="text-xs font-medium tracking-widest uppercase text-accent">Guiding Principles</span>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  "At Ben ALB Integrated Services, we firmly believe that our clients and affiliates are our most valuable
                  resources, and we treat them as such."
                </p>
              </motion.div>
              <motion.div className="bg-card p-8 space-y-4" variants={fadeInUp}>
                <span className="text-xs font-medium tracking-widest uppercase text-accent">Diversity & Inclusion</span>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Ben ALB Integrated Services characterizes multiformity in the built industry, leveraging on our
                  up-to-date skills, knowledge, and expertise.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Management Processes */}
        <section className="py-20 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src={projectInfrastructure} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                className="space-y-4"
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                variants={fadeInLeft}
              >
                <span className="text-xs font-medium tracking-widest uppercase text-accent">QA/QC</span>
                <h3 className="text-2xl font-heading text-primary-foreground">
                  Quality Control & Assurance
                </h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed">
                  Ben ALB has established an Integrated Management System (IMS) as per requirements of the
                  latest Standards and adopts a process approach in the design and documentation of the IMS.
                </p>
              </motion.div>
              <motion.div
                className="space-y-3"
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                variants={staggerContainer}
              >
                <h4 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">Management Processes</h4>
                {managementProcesses.map((process, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3 text-sm text-primary-foreground/80"
                    variants={fadeInUp}
                  >
                    <span className="text-accent mt-1">—</span>
                    {process}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                variants={fadeInLeft}
              >
                <img src={projectCommercial} alt="" className="w-full h-80 object-cover" loading="lazy" decoding="async" />
              </motion.div>
              <motion.div
                className="space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                variants={staggerContainer}
              >
                <motion.span className="text-xs font-medium tracking-widest uppercase text-accent" variants={fadeInUp}>
                  Why Choose Us
                </motion.span>
                <motion.h2 className="text-2xl md:text-3xl font-heading text-foreground" variants={fadeInUp}>
                  What Sets Us Apart
                </motion.h2>
                <div className="space-y-4">
                  {whyChooseUs.map((item, i) => (
                    <motion.div key={i} className="flex items-start gap-4" variants={fadeInUp}>
                      <span className="text-accent font-heading text-lg">{i + 1}.</span>
                      <span className="text-muted-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Preview */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={staggerContainer}
            >
              <div className="space-y-3">
                <motion.span className="text-xs font-medium tracking-widest uppercase text-accent block" variants={fadeInUp}>
                  Leadership
                </motion.span>
                <motion.h2 className="text-2xl md:text-3xl font-heading text-foreground" variants={fadeInUp}>
                  Meet Our Team
                </motion.h2>
              </div>
              <motion.div variants={fadeInUp}>
                <Link
                  to="/team"
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors group"
                >
                  View full team
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={staggerContainer}
            >
              {[
                { name: "Benjamin Alabi", role: "MD / CEO", image: teamCeo },
                { name: "Adaeze Okonkwo", role: "Head of Engineering", image: teamCto },
                { name: "Chukwuemeka Nwosu", role: "Project Manager", image: teamPm },
                { name: "Funmilayo Adeyemi", role: "Head of Geospatial", image: teamGeo },
              ].map((member) => (
                <motion.div key={member.name} className="group" variants={fadeInUp}>
                  <div className="aspect-[3/4] overflow-hidden mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3 className="text-base font-heading text-foreground">{member.name}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{member.role}</p>
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
};

export default About;
