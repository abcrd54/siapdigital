import { ArrowUpRightIcon, XIcon } from "../components/AppIcons";
import OptimizedImage from "../components/OptimizedImage";

function ProjectModal({ selectedProject, setSelectedProject }) {
  const hasProjectLink =
    selectedProject?.link &&
    selectedProject.link.trim() !== "" &&
    selectedProject.link.trim() !== "#";

  if (!selectedProject) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-[#141b2b]/70 px-4 py-8 backdrop-blur-sm">
      <div
        className="absolute inset-0"
        onClick={() => setSelectedProject(null)}
        aria-hidden="true"
      />
      <div className="enter-up relative z-10 w-full max-w-4xl overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_80px_rgba(20,27,43,0.24)]">
        <button
          type="button"
          onClick={() => setSelectedProject(null)}
          className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#141b2b]/82 text-white transition hover:bg-primary"
          aria-label="Close project detail"
        >
          <XIcon width={18} height={18} />
        </button>

        <div className="grid max-h-[85vh] overflow-y-auto lg:grid-cols-[1.1fr_0.9fr]">
          <div className="bg-surface-low">
            <OptimizedImage
              src={selectedProject.image}
              alt={selectedProject.title}
              width={1200}
              height={900}
              loading="eager"
              className="h-full min-h-[280px] w-full object-contain object-center bg-neutral-100"
            />
          </div>

          <div className="flex flex-col justify-between p-6 sm:p-8">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-surface-low px-3 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                  {selectedProject.tag}
                </span>
                <span className="rounded-full bg-[#141b2b] px-3 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                  {selectedProject.year}
                </span>
              </div>

              <h3 className="mt-6 font-display text-3xl font-bold tracking-[-0.04em] text-ink">
                {selectedProject.title}
              </h3>

              <p className="mt-6 text-sm leading-7 text-muted sm:text-base">
                {selectedProject.description}
              </p>
            </div>

            {hasProjectLink ? (
              <div className="mt-8">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#141b2b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary"
                >
                  Direct Link
                  <ArrowUpRightIcon width={15} height={15} />
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
