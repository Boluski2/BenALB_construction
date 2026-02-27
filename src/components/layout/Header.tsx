import { useState, useEffect, memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import BenALB from "@/assets/BenALB.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Team", href: "/team" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

function HeaderComponent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 bg-background/95 backdrop-blur-md border-b",
        isScrolled ? "border-border py-3" : "border-transparent py-4"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src={BenALB}
            alt="BenALB"
            className="h-10 w-auto object-contain"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={cn(
                "text-[13px] font-medium tracking-wide uppercase transition-colors",
                isActive(link.href)
                  ? "text-accent"
                  : "text-foreground/70 hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground text-[13px] font-medium tracking-wide uppercase rounded-sm hover:bg-primary/90 transition-colors"
          >
            Get a Quote
          </Link>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5 text-foreground" />
          ) : (
            <Menu className="h-5 w-5 text-foreground" />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={cn(
                  "text-sm font-medium py-2.5 px-3 rounded-sm transition-colors",
                  isActive(link.href)
                    ? "text-accent bg-accent/5"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 inline-flex items-center justify-center px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export const Header = memo(HeaderComponent);
