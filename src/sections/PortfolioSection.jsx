import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import OptimizedImage from "../components/OptimizedImage";
import Reveal from "../components/Reveal";
import { projectTags, projects } from "../data/siteData";

function PortfolioSection({ setSelectedProject }) {
  const [activeProjectTag, setActiveProjectTag] = useState("Semua");
  const filteredProjects =
    activeProjectTag === "Semua"
      ? projects
      : projects.filter((project) => project.tag === activeProjectTag);

  useEffect(() => {
    const activeTab = document.querySelector(
      `[data-project-tag="${CSS.escape(activeProjectTag)}"]`,
    );

    activeTab?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeProjectTag]);

  return (
    <section className="px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">
            Portfolio
          </p>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-[-0.05em] sm:text-5xl">
            Selected portfolio from siapdigital.
          </h2>
          <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
            Beberapa contoh arah visual dan presentasi digital yang menunjukkan
            bagaimana siapdigital membantu brand tampil lebih kuat, lebih rapi,
            dan lebih siap meyakinkan client.
          </p>
        </div>

        <div className="mx-auto mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:flex-wrap md:justify-center md:overflow-visible">
          {projectTags.map((tag) => {
            const isActive = activeProjectTag === tag;

            return (
              <button
                key={tag}
                type="button"
                data-project-tag={tag}
                onClick={() => setActiveProjectTag(tag)}
                className={`shrink-0 snap-start rounded-full px-5 py-3 text-sm font-semibold transition ${
                  isActive
                    ? "bg-[#141b2b] text-white shadow-[0_14px_30px_rgba(20,27,43,0.18)]"
                    : "bg-surface-low text-muted hover:bg-white hover:text-ink"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <Reveal
              as="button"
              key={project.title}
              type="button"
              onClick={() => setSelectedProject(project)}
              delay={index * 80}
              className="group overflow-hidden rounded-[2.2rem] bg-white text-left shadow-[0_24px_50px_rgba(20,27,43,0.08)]"
            >
              <div className="relative h-[340px] overflow-hidden bg-gray-100 sm:h-[380px]">
                <div className="flex h-full w-full items-center justify-center p-4">
                  <OptimizedImage
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={900}
                    sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                    className="block max-h-full max-w-full object-contain transition duration-700 group-hover:scale-[1.06]"
                  />
                </div>

                <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5">
                  <span className="rounded-full bg-white/86 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary backdrop-blur-sm">
                    {project.tag}
                  </span>
                  <span className="rounded-full bg-[#141b2b]/78 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                    {project.year}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#141b2b]/32 to-transparent" />
              </div>

              <div className="bg-[linear-gradient(180deg,#ffffff_0%,#f7f8ff_100%)] px-6 pb-6 pt-6">
                <h3 className="mt-4 font-display text-2xl font-bold tracking-[-0.04em]">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted">{project.summary}</p>

                {project.link && project.link.trim() !== "#" ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#141b2b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary"
                  >
                    Demo
                    <ArrowUpRight
                      size={15}
                      className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
