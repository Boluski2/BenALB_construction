import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { PageTransition } from "@/components/PageTransition";
import { usePageMeta } from "@/hooks/usePageMeta";

const NotFound = () => {
  const location = useLocation();

  usePageMeta({
    title: "Page Not Found | BenALB Construction",
    description: "The page you are looking for does not exist. Return to BenALB Construction homepage.",
    ogTitle: "Page Not Found | BenALB Construction",
    ogDescription: "This page could not be found. Please return to our website.",
  });

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <PageTransition>
      <div className="flex min-h-screen items-center justify-center bg-muted">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
          <Link to="/" className="text-primary underline hover:text-primary/90">
            Return to Home
          </Link>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
