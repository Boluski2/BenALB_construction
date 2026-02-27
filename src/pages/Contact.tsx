import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { toast } from "sonner";
import { PageTransition } from "@/components/PageTransition";
import { usePageMeta } from "@/hooks/usePageMeta";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportSettings } from "@/lib/animations";
import heroConstruction from "@/assets/hero-construction.jpg";

const contactInfo = [
  { icon: MapPin, title: "Visit Us", details: ["Plot B1919, PEGI Estate, Kuje,", "Abuja, Nigeria"] },
  { icon: Phone, title: "Call Us", details: ["+234 (703) 874 9907"] },
  { icon: Mail, title: "Email Us", details: ["info@benalbservices.com"] },
  { icon: Clock, title: "Working Hours", details: ["Mon – Fri: 9AM – 5PM", "Sat: 9AM – 2PM"] },
];

const Contact = () => {
  usePageMeta({
    title: "Contact BenALB Construction | Get Your Project Quote",
    description: "Contact BenALB Construction for consultation on your construction, engineering, or geospatial project. Located in Abuja, Nigeria. Call us today.",
    keywords: "contact construction company Nigeria, get construction quote, BenALB contact, construction consultation Abuja",
    ogTitle: "Contact BenALB Construction | Professional Engineering Services",
    ogDescription: "Reach out to BenALB Construction for your next project. We're ready to discuss your construction, engineering, and geospatial needs.",
    ogImage: "https://benalb.com/og-image.jpg",
    ogUrl: "https://benalb.com/contact",
    canonicalUrl: "https://benalb.com/contact",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch shortly.");
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero */}
        <section className="relative py-24 bg-primary overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroConstruction} alt="" className="w-full h-full object-cover opacity-30" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              className="max-w-2xl space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-xs font-medium tracking-widest uppercase text-accent">Get In Touch</span>
              <h1 className="text-4xl md:text-5xl font-heading text-primary-foreground leading-tight">
                Let's Discuss Your Project
              </h1>
              <p className="text-primary-foreground/60 text-sm">
                Ready to start your construction, engineering, or geospatial project? Get in touch with our team for consultation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-16">
              {/* Form */}
              <motion.div
                className="lg:col-span-3"
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                variants={staggerContainer}
              >
                <motion.h2 className="text-xl font-heading text-foreground mb-6" variants={fadeInUp}>
                  Send Us a Message
                </motion.h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <motion.div className="grid md:grid-cols-2 gap-4" variants={fadeInUp}>
                    <div>
                      <label className="block text-xs font-medium text-foreground/70 mb-1.5 uppercase tracking-wide">First Name</label>
                      <Input placeholder="John" required className="bg-background" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-foreground/70 mb-1.5 uppercase tracking-wide">Last Name</label>
                      <Input placeholder="Doe" required className="bg-background" />
                    </div>
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <label className="block text-xs font-medium text-foreground/70 mb-1.5 uppercase tracking-wide">Email</label>
                    <Input type="email" placeholder="john@example.com" required className="bg-background" />
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <label className="block text-xs font-medium text-foreground/70 mb-1.5 uppercase tracking-wide">Phone</label>
                    <Input type="tel" placeholder="+234 XXX XXX XXXX" className="bg-background" />
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <label className="block text-xs font-medium text-foreground/70 mb-1.5 uppercase tracking-wide">Project Type</label>
                    <Input placeholder="e.g., Residential, Commercial, Infrastructure" className="bg-background" />
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <label className="block text-xs font-medium text-foreground/70 mb-1.5 uppercase tracking-wide">Message</label>
                    <Textarea placeholder="Tell us about your project..." rows={5} required className="bg-background" />
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-primary-foreground text-sm font-medium tracking-wide rounded-sm hover:bg-primary/90 transition-colors"
                    >
                      Send Message
                      <Send className="h-4 w-4" />
                    </button>
                  </motion.div>
                </form>
              </motion.div>

              {/* Info */}
              <motion.div
                className="lg:col-span-2 space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                variants={staggerContainer}
              >
                <motion.h2 className="text-xl font-heading text-foreground mb-2" variants={fadeInUp}>
                  Contact Information
                </motion.h2>
                {contactInfo.map((item) => (
                  <motion.div
                    key={item.title}
                    className="flex gap-4 p-5 bg-secondary rounded-sm"
                    variants={fadeInUp}
                  >
                    <div className="h-10 w-10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-foreground">{item.title}</h3>
                      {item.details.map((d, i) => (
                        <p key={i} className="text-sm text-muted-foreground">{d}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Contact;
