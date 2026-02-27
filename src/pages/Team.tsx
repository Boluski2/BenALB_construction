import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { PageTransition } from "@/components/PageTransition";
import { usePageMeta } from "@/hooks/usePageMeta";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportSettings } from "@/lib/animations";
import { Linkedin, Mail } from "lucide-react";
import teamMeeting from "@/assets/team-meeting.jpg";
import teamCeo from "@/assets/team-ceo.jpg";
import teamCto from "@/assets/team-cto.jpg";
import teamPm from "@/assets/team-pm.jpg";
import teamGeo from "@/assets/team-geo.jpg";

const teamMembers = [
  {
    name: "Benjamin Alabi",
    role: "Managing Director / CEO",
    bio: "With over 20 years of experience in engineering and construction, Benjamin leads BenALB's strategic vision and operational excellence across all service verticals.",
    image: teamCeo,
  },
  {
    name: "Adaeze Okonkwo",
    role: "Head of Engineering",
    bio: "A seasoned civil engineer overseeing all construction and EPC projects, ensuring quality delivery and compliance with international standards.",
    image: teamCto,
  },
  {
    name: "Chukwuemeka Nwosu",
    role: "Project Manager",
    bio: "Coordinates multi-disciplinary project teams, managing timelines, budgets, and stakeholder relationships to deliver projects on schedule.",
    image: teamPm,
  },
  {
    name: "Funmilayo Adeyemi",
    role: "Head of Geospatial Services",
    bio: "Leads the geospatial division, providing advanced GIS mapping, land surveying, and spatial analysis solutions for infrastructure development.",
    image: teamGeo,
  },
];

const Team = () => {
  usePageMeta({
    title: "Our Team | BenALB Construction | Leadership & Expertise",
    description: "Meet the experienced leadership team at BenALB Construction. Over 100+ years of combined experience in civil engineering, construction, and geospatial services.",
    keywords: "BenALB team, construction leadership, engineering team, project management, CEO, managing director, construction professionals Nigeria",
    ogTitle: "BenALB Construction Team | Experienced Leadership",
    ogDescription: "Get to know the professionals behind BenALB Construction's success and expertise in engineering and construction services.",
    ogImage: "https://benalb.com/og-image.jpg",
    ogUrl: "https://benalb.com/team",
    canonicalUrl: "https://benalb.com/team",
  });
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero */}
        <section className="relative py-24 bg-primary overflow-hidden">
          <div className="absolute inset-0">
            <img src={teamMeeting} alt="" className="w-full h-full object-cover opacity-30" decoding="async" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              className="max-w-2xl space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-xs font-medium tracking-widest uppercase text-accent">Leadership</span>
              <h1 className="text-4xl md:text-5xl font-heading text-primary-foreground leading-tight">
                Our Team
              </h1>
              <p className="text-primary-foreground/60 text-sm max-w-lg">
                Meet the experienced professionals driving BenALB's commitment to engineering excellence, innovation, and client satisfaction.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={staggerContainer}
            >
              {teamMembers.map((member) => (
                <motion.div
                  key={member.name}
                  className="group"
                  variants={fadeInUp}
                >
                  <div className="aspect-[3/4] overflow-hidden mb-5">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3 className="text-lg font-heading text-foreground">{member.name}</h3>
                  <p className="text-xs font-medium tracking-widest uppercase text-accent mt-1">{member.role}</p>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{member.bio}</p>
                  <div className="flex gap-3 mt-4">
                    <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-6">
            <motion.div
              className="grid md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={staggerContainer}
            >
              <motion.div className="bg-card p-8 space-y-3" variants={fadeInUp}>
                <span className="text-xs font-medium tracking-widest uppercase text-accent">Culture</span>
                <h3 className="text-lg font-heading text-foreground">Collaboration First</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our team thrives on cross-functional collaboration, combining engineering, geospatial, and project management expertise to deliver holistic solutions.
                </p>
              </motion.div>
              <motion.div className="bg-card p-8 space-y-3" variants={fadeInUp}>
                <span className="text-xs font-medium tracking-widest uppercase text-accent">Growth</span>
                <h3 className="text-lg font-heading text-foreground">Continuous Development</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We invest in our people through ongoing training, certifications, and exposure to cutting-edge construction and geospatial technologies.
                </p>
              </motion.div>
              <motion.div className="bg-card p-8 space-y-3" variants={fadeInUp}>
                <span className="text-xs font-medium tracking-widest uppercase text-accent">Values</span>
                <h3 className="text-lg font-heading text-foreground">Integrity & Excellence</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every team member upholds our commitment to ethical practice, quality workmanship, and exceeding client expectations on every project.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <CTASection />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Team;
