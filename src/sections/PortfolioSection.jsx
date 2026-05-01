import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import OptimizedImage from "../components/OptimizedImage";
import { sharedProjectData, siteCopy } from "../data/content";
import { trackPortfolioClick } from "../lib/analytics";

const portfolioThemes = [
  "bg-[linear-gradient(180deg,#fffaf4_0%,#ffffff_100%)]",
  "bg-[linear-gradient(180deg,#f6f4ff_0%,#ffffff_100%)]",
  "bg-[linear-gradient(180deg,#f2fbf7_0%,#ffffff_100%)]",
  "bg-[linear-gradient(180deg,#fff3f5_0%,#ffffff_100%)]",
];

function PortfolioSection({ lang, onOpenPortfolioBrowser, setSelectedProject }) {
  const copy = siteCopy[lang].portfolio;
  const allProjects = sharedProjectData.projects;
  const projectTags = [copy.filterAll, ...new Set(allProjects.map((project) => project.tag))];
  const [activeProjectTag, setActiveProjectTag] = useState(copy.filterAll);
  const filteredProjects =
    activeProjectTag === copy.filterAll
      ? allProjects
      : allProjects.filter((project) => project.tag === activeProjectTag);
  const projects = filteredProjects.slice(0, 4);

  useEffect(() => {
    setActiveProjectTag(copy.filterAll);
  }, [copy.filterAll]);

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr]">
          <div data-aos="fade-up">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">
              {copy.eyebrow}
            </p>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-bold tracking-[-0.05em] text-ink sm:text-5xl">
              {copy.title}
            </h2>
          </div>
          <p
            data-aos="fade-up"
            data-aos-delay="80"
            className="max-w-2xl self-end text-base leading-8 text-muted sm:text-lg"
          >
            {copy.body}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {projectTags.map((tag, index) => {
            const isActive = activeProjectTag === tag;

            return (
              <button
                key={tag}
                type="button"
                data-aos="fade-up"
                data-aos-delay={index * 40}
                onClick={() => setActiveProjectTag(tag)}
                className={`border px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition ${
                  isActive
                    ? "border-ink bg-ink text-white"
                    : "border-slate-900/8 bg-white text-muted hover:text-ink"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              data-aos="fade-up"
              data-aos-delay={index * 60}
              onClick={() => {
                trackPortfolioClick(project.title, {
                  portfolio_surface: "homepage_grid",
                  portfolio_position: index + 1,
                  portfolio_tag: project.tag,
                });
                setSelectedProject(project);
              }}
              className={`group overflow-hidden border border-slate-900/8 text-left shadow-[0_18px_40px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 ${portfolioThemes[index % portfolioThemes.length]}`}
            >
              <div className="relative h-[280px] overflow-hidden bg-white/60">
                <div className="flex h-full w-full items-center justify-center p-5">
                  <OptimizedImage
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={900}
                    sizes="(min-width: 1280px) 31vw, (min-width: 768px) 48vw, 100vw"
                    className="block max-h-full max-w-full object-contain transition duration-700 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5">
                  <span className="border border-white/10 bg-white/90 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                    {project.tag}
                  </span>
                  <span className="bg-[#141b2b]/86 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                    {project.year}
                  </span>
                </div>
              </div>

              <div className="px-6 pb-6 pt-6">
                <h3 className="font-display text-2xl font-bold tracking-[-0.04em] text-ink">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted">{project.summary[lang]}</p>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  {copy.demoLabel}
                  <ArrowUpRight size={15} />
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => {
              trackPortfolioClick("portfolio_browser", {
                portfolio_surface: "homepage_grid",
                portfolio_action: "open_browser",
              });
              onOpenPortfolioBrowser();
            }}
            className="inline-flex items-center gap-2 border border-slate-900/10 bg-white px-6 py-4 text-sm font-semibold text-ink transition hover:bg-surface-low"
          >
            {copy.moreLabel}
            <ArrowUpRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
