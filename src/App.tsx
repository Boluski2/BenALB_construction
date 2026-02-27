import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { lazy, Suspense } from "react";

// Lazy load pages for code splitting
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const Clients = lazy(() => import("./pages/Clients"));
const Team = lazy(() => import("./pages/Team"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-muted border-t-primary mx-auto mb-4" />
        <p className="text-sm text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}

const queryClient = new QueryClient();

function AnimatedRoutes() {
  const location = useLocation();
  useScrollToTop();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <Index />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/services"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <Services />
            </Suspense>
          }
        />
        <Route
          path="/projects"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <Projects />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/clients"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <Clients />
            </Suspense>
          }
        />
        <Route
          path="/team"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <Team />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
