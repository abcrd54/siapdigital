import { lazy, Suspense, useEffect, useState } from "react";
import Header from "./sections/Header";
import HeroSection from "./sections/HeroSection";
import SeoContentSection from "./sections/SeoContentSection";
import ProjectModal from "./sections/ProjectModal";
import Footer from "./sections/Footer";
import DeferredSection from "./components/DeferredSection";
import { navItems } from "./data/siteData";

const PortfolioSection = lazy(() => import("./sections/PortfolioSection"));
const ServicesSection = lazy(() => import("./sections/ServicesSection"));
const TestimonialsSection = lazy(() => import("./sections/TestimonialsSection"));
const FaqSection = lazy(() => import("./sections/FaqSection"));
const AboutSection = lazy(() => import("./sections/AboutSection"));
const ContactSection = lazy(() => import("./sections/ContactSection"));

function App({ page }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const resetScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    resetScroll();
    const rafId = window.requestAnimationFrame(resetScroll);
    window.addEventListener("pageshow", resetScroll);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("pageshow", resetScroll);
    };
  }, []);

  useEffect(() => {
    if (!selectedProject) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [selectedProject]);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const updateActiveSection = () => {
      const headerOffset = 140;
      const viewportAnchor = window.innerHeight * 0.28;
      const scrollPosition = window.scrollY + headerOffset + viewportAnchor;

      let currentSection = sectionIds[0];

      sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-ink">
      <div className="pointer-events-none fixed inset-0 editorial-grid opacity-60" />

      <Header
        activeSection={activeSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main>
        <HeroSection page={page} />
        <SeoContentSection page={page} />

        <DeferredSection id="work" minHeightClass="min-h-[1200px]">
          <Suspense fallback={null}>
            <PortfolioSection setSelectedProject={setSelectedProject} />
          </Suspense>
        </DeferredSection>

        <DeferredSection id="services" minHeightClass="min-h-[640px] bg-surface-low">
          <Suspense fallback={null}>
            <ServicesSection />
          </Suspense>
        </DeferredSection>

        <DeferredSection minHeightClass="min-h-[640px] bg-surface-mid">
          <Suspense fallback={null}>
            <TestimonialsSection />
          </Suspense>
        </DeferredSection>

        <DeferredSection id="faq" minHeightClass="min-h-[760px]">
          <Suspense fallback={null}>
            <FaqSection />
          </Suspense>
        </DeferredSection>

        <DeferredSection id="about" minHeightClass="min-h-[980px]">
          <Suspense fallback={null}>
            <AboutSection />
          </Suspense>
        </DeferredSection>

        <DeferredSection id="contact" minHeightClass="min-h-[420px]">
          <Suspense fallback={null}>
            <ContactSection />
          </Suspense>
        </DeferredSection>
      </main>

      <Footer />
      <ProjectModal
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
    </div>
  );
}

export default App;
