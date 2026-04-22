import { lazy, Suspense, useEffect, useState } from "react";
import Header from "./sections/Header";
import HeroSection from "./sections/HeroSection";
import SeoContentSection from "./sections/SeoContentSection";
import ProjectModal from "./sections/ProjectModal";
import Footer from "./sections/Footer";
import DeferredSection from "./components/DeferredSection";
import PageLoader from "./components/PageLoader";
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
  const [pageReady, setPageReady] = useState(false);

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
    const heroImages = Array.from(
      document.querySelectorAll("#home img[loading='eager']"),
    );

    const waitForImage = (image) => {
      if (image.complete) return Promise.resolve();

      return new Promise((resolve) => {
        image.addEventListener("load", resolve, { once: true });
        image.addEventListener("error", resolve, { once: true });
      });
    };

    const minVisibleTime = new Promise((resolve) => {
      window.setTimeout(resolve, 420);
    });

    Promise.all([...heroImages.map(waitForImage), minVisibleTime]).then(() => {
      setPageReady(true);
    });
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
    let ticking = false;

    const updateActiveSection = () => {
      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      if (!sections.length) return;

      const anchorLine = window.scrollY + window.innerHeight * 0.32;
      let currentSection = sections[0].id;

      for (const section of sections) {
        if (section.offsetTop <= anchorLine) {
          currentSection = section.id;
        }
      }

      setActiveSection(currentSection);
    };

    const requestUpdate = () => {
      if (ticking) return;

      ticking = true;
      window.requestAnimationFrame(() => {
        updateActiveSection();
        ticking = false;
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-ink">
      <PageLoader hidden={pageReady} />
      <div className="pointer-events-none fixed inset-0 editorial-grid opacity-60" />

      <Header
        activeSection={activeSection}
        menuOpen={menuOpen}
        setActiveSection={setActiveSection}
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
