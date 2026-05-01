import { lazy, Suspense, useEffect, useState } from "react";
import AOS from "aos";
import Header from "./sections/Header";
import HeroSection from "./sections/HeroSection";
import ProjectModal from "./sections/ProjectModal";
import PortfolioBrowserModal from "./sections/PortfolioBrowserModal";
import TemplateListModal from "./sections/TemplateListModal";
import Footer from "./sections/Footer";
import DeferredSection from "./components/DeferredSection";
import PageLoader from "./components/PageLoader";
import { navItemsByLang } from "./data/content";
import { trackPortfolioView } from "./lib/analytics";

const PortfolioSection = lazy(() => import("./sections/PortfolioSection"));
const ServicesSection = lazy(() => import("./sections/ServicesSection"));
const PackagesSection = lazy(() => import("./sections/PackagesSection"));
const TestimonialsSection = lazy(() => import("./sections/TestimonialsSection"));
const FaqSection = lazy(() => import("./sections/FaqSection"));
const AboutSection = lazy(() => import("./sections/AboutSection"));
const ContactSection = lazy(() => import("./sections/ContactSection"));
const HEADER_OFFSET = 112;

function App({ page }) {
  const [lang, setLang] = useState(() => {
    const stored = window.localStorage.getItem("siapdigital-lang");
    if (stored === "id" || stored === "en") return stored;

    return window.navigator.language?.toLowerCase().startsWith("id") ? "id" : "en";
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);
  const [portfolioBrowserOpen, setPortfolioBrowserOpen] = useState(false);
  const [templateListOpen, setTemplateListOpen] = useState(false);
  const [pageReady, setPageReady] = useState(false);
  const navItems = navItemsByLang[lang];

  useEffect(() => {
    window.localStorage.setItem("siapdigital-lang", lang);
  }, [lang]);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 48,
    });
  }, []);

  useEffect(() => {
    AOS.refreshHard();
  }, [lang]);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const hasHash = Boolean(window.location.hash);
    if (hasHash) return undefined;

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

    trackPortfolioView(selectedProject.title, {
      item_brand: selectedProject.tag,
      item_variant: selectedProject.year,
      page_type: page.key,
    });

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
        setPortfolioBrowserOpen(false);
        setTemplateListOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [selectedProject]);

  useEffect(() => {
    let ticking = false;

    const getSections = () =>
      navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

    const updateFromHash = () => {
      const hashId = window.location.hash.replace("#", "");
      if (!hashId) return false;

      const matched = navItems.find((item) => item.id === hashId);
      if (!matched) return false;

      setActiveSection(matched.id);
      return true;
    };

    const updateActiveSection = () => {
      const sections = getSections();
      if (!sections.length) return;

      if (updateFromHash() && window.scrollY <= HEADER_OFFSET) {
        return;
      }

      const anchorLine = HEADER_OFFSET + window.innerHeight * 0.24;
      let currentSection = sections[0].id;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= anchorLine) {
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

    const timeoutIds = [
      window.setTimeout(requestUpdate, 60),
      window.setTimeout(requestUpdate, 220),
      window.setTimeout(requestUpdate, 700),
    ];

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    window.addEventListener("hashchange", requestUpdate);
    window.addEventListener("load", requestUpdate);

    return () => {
      timeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.removeEventListener("hashchange", requestUpdate);
      window.removeEventListener("load", requestUpdate);
    };
  }, [navItems]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-ink">
      <PageLoader hidden={pageReady} lang={lang} />

      <Header
        activeSection={activeSection}
        homeHref="#home"
        isPortfolioPage={false}
        lang={lang}
        menuOpen={menuOpen}
        navItems={navItems}
        setLang={setLang}
        setActiveSection={setActiveSection}
        setMenuOpen={setMenuOpen}
      />

      <main>
        <HeroSection lang={lang} page={page} />

        <DeferredSection id="packages" minHeightClass="min-h-[980px]">
          <Suspense fallback={null}>
            <PackagesSection
              lang={lang}
              page={page}
              onOpenTemplateList={() => setTemplateListOpen(true)}
            />
          </Suspense>
        </DeferredSection>

        <DeferredSection id="services" minHeightClass="min-h-[760px] bg-surface-low">
          <Suspense fallback={null}>
            <ServicesSection lang={lang} page={page} />
          </Suspense>
        </DeferredSection>

        <DeferredSection id="work" minHeightClass="min-h-[980px]">
          <Suspense fallback={null}>
            <PortfolioSection
              lang={lang}
              onOpenPortfolioBrowser={() => setPortfolioBrowserOpen(true)}
              setSelectedProject={setSelectedProject}
            />
          </Suspense>
        </DeferredSection>

        <DeferredSection minHeightClass="min-h-[520px] bg-surface-mid">
          <Suspense fallback={null}>
            <TestimonialsSection lang={lang} />
          </Suspense>
        </DeferredSection>

        <DeferredSection id="faq" minHeightClass="min-h-[620px]">
          <Suspense fallback={null}>
            <FaqSection lang={lang} page={page} />
          </Suspense>
        </DeferredSection>

        <DeferredSection id="about" minHeightClass="min-h-[760px]">
          <Suspense fallback={null}>
            <AboutSection lang={lang} page={page} />
          </Suspense>
        </DeferredSection>

        <DeferredSection id="contact" minHeightClass="min-h-[320px]">
          <Suspense fallback={null}>
            <ContactSection lang={lang} page={page} />
          </Suspense>
        </DeferredSection>
      </main>

      <Footer isPortfolioPage={false} lang={lang} />
      <TemplateListModal
        isOpen={templateListOpen}
        lang={lang}
        onClose={() => setTemplateListOpen(false)}
      />
      <PortfolioBrowserModal
        isOpen={portfolioBrowserOpen}
        lang={lang}
        onClose={() => setPortfolioBrowserOpen(false)}
        setSelectedProject={setSelectedProject}
      />
      <ProjectModal
        lang={lang}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
    </div>
  );
}

export default App;
