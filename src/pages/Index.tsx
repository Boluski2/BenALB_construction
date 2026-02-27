import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { CTASection } from "@/components/sections/CTASection";
import { PageTransition } from "@/components/PageTransition";
import { usePageMeta } from "@/hooks/usePageMeta";

const Index = () => {
  usePageMeta({
    title: "BenALB Construction | Leading Construction Company in Nigeria",
    description: "BenALB Construction is Nigeria's premier engineering and construction company with 30+ years of excellence in civil engineering, building construction, infrastructure development, and real estate.",
    keywords: "construction company Nigeria, civil engineering Lagos, building construction, real estate development, infrastructure Nigeria, BenALB",
    ogTitle: "BenALB Construction | Leading Construction Company in Nigeria",
    ogDescription: "Nigeria's premier engineering and construction company with 30+ years of excellence. Building infrastructure that transforms communities.",
    ogImage: "https://benalb.com/og-image.jpg",
    ogUrl: "https://benalb.com/",
    canonicalUrl: "https://benalb.com/",
  });
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ProjectsSection />
          <TestimonialSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
