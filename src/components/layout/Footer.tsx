import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import BenALB from "@/assets/BenALB.png";


const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Our Team", href: "/team" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Civil Engineering",
  "Building Construction",
  "EPC Services",
  "Facility Management",
  "Real Estate",
  "Geospatial Services",
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-5">
            <Link to="/">
              <img
                src={BenALB }
                alt="BenALB"
                className="h-10 w-auto object-contain bg-white rounded p-1.5"
              />
            </Link>
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
              Building Excellence, Delivering Trust. A leader in engineering, construction, and integrated project delivery across Nigeria.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-primary-foreground/40 mb-5">Navigation</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-primary-foreground/40 mb-5">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s} className="text-sm text-primary-foreground/70">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase text-primary-foreground/40 mb-5">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+2347038749907" className="flex items-center gap-2.5 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                  +234 (703) 874 9907
                </a>
              </li>
              <li>
                <a href="mailto:info@benalbservices.com" className="flex items-center gap-2.5 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                  info@benalbservices.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-sm text-primary-foreground/70">
                  <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  Plot B1919, PEGI Estate, Kuje, Abuja, Nigeria.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-primary-foreground/40 text-xs">
            © {new Date().getFullYear()} Ben-ALB Integrated Services Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-primary-foreground/40">
            <a href="#" className="hover:text-primary-foreground/70 transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary-foreground/70 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
