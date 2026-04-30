import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { XIcon } from "../components/AppIcons";
import OptimizedImage from "../components/OptimizedImage";
import { sharedProjectData, siteCopy } from "../data/content";

const portfolioThemes = [
  "bg-[linear-gradient(180deg,#fffaf4_0%,#ffffff_100%)]",
  "bg-[linear-gradient(180deg,#f6f4ff_0%,#ffffff_100%)]",
  "bg-[linear-gradient(180deg,#f2fbf7_0%,#ffffff_100%)]",
  "bg-[linear-gradient(180deg,#fff3f5_0%,#ffffff_100%)]",
];

function PortfolioBrowserModal({
  isOpen,
  lang,
  onClose,
  setSelectedProject,
}) {
  const copy = siteCopy[lang].portfolio;
  const allProjects = sharedProjectData.projects;
  const projectTags = [copy.filterAll, ...new Set(allProjects.map((project) => project.tag))];
  const [activeProjectTag, setActiveProjectTag] = useState(copy.filterAll);

  useEffect(() => {
    if (!isOpen) return;

    setActiveProjectTag(copy.filterAll);
  }, [copy.filterAll, isOpen]);

  if (!isOpen) return null;

  const projects =
    activeProjectTag === copy.filterAll
      ? allProjects
      : allProjects.filter((project) => project.tag === activeProjectTag);

  return (
    <div className="fixed inset-0 z-[72] flex items-center justify-center bg-[#141b2b]/74 px-3 py-4 backdrop-blur-sm sm:px-4 sm:py-6">
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <div className="enter-up relative z-10 flex h-[min(92vh,980px)] w-full max-w-7xl flex-col overflow-hidden rounded-[2rem] border border-white/50 bg-white shadow-[0_36px_100px_rgba(20,27,43,0.26)]">
        <div className="flex items-start justify-between gap-6 border-b border-slate-900/8 bg-[linear-gradient(180deg,#ffffff_0%,#f6f9ff_100%)] px-5 py-5 sm:px-8 sm:py-6">
          <div className="max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
              {copy.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.05em] text-ink sm:text-4xl">
              {lang === "id" ? "Semua Portofolio SiapDigital" : "All SiapDigital Portfolio"}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted sm:text-base">
              {copy.body}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#141b2b] text-white transition hover:bg-primary"
            aria-label={lang === "id" ? "Tutup modal portfolio" : "Close portfolio modal"}
          >
            <XIcon width={18} height={18} />
          </button>
        </div>

        <div className="overflow-y-auto px-5 py-5 sm:px-8 sm:py-6">
          <div className="flex flex-wrap gap-3">
            {projectTags.map((tag) => {
              const isActive = activeProjectTag === tag;

              return (
                <button
                  key={tag}
                  type="button"
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

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <button
                key={project.title}
                type="button"
                onClick={() => setSelectedProject(project)}
                className={`group overflow-hidden border border-slate-900/8 text-left shadow-[0_18px_40px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 ${portfolioThemes[index % portfolioThemes.length]}`}
              >
                <div className="relative h-[280px] overflow-hidden bg-white/60">
                  <div className="flex h-full w-full items-center justify-center p-5">
                    <OptimizedImage
                      src={project.image}
                      alt={project.title}
                      width={1200}
                      height={900}
                      sizes="(min-width: 1280px) 28vw, (min-width: 768px) 44vw, 100vw"
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
        </div>
      </div>
    </div>
  );
}

export default PortfolioBrowserModal;
