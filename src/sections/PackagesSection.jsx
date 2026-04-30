import { ArrowUpRight } from "lucide-react";
import LordIcon from "../components/LordIcon";
import { siteCopy } from "../data/content";

const packageCardThemes = [
  "bg-[linear-gradient(180deg,#fff7ef_0%,#fffdf8_100%)]",
  "bg-[linear-gradient(180deg,#f7f4ff_0%,#fcfbff_100%)]",
  "bg-[linear-gradient(180deg,#edf8f5_0%,#fbfffd_100%)]",
  "bg-[linear-gradient(180deg,#fff2f4_0%,#fffdfd_100%)]",
  "bg-[linear-gradient(180deg,#f2f6ff_0%,#fbfdff_100%)]",
];

function FeaturedBadge({ label }) {
  return (
    <div className="relative isolate px-1 pt-1">
      <div className="absolute inset-0 rotate-[-6deg] bg-[#ffcf8d]" />
      <div className="absolute inset-0 rotate-[4deg] bg-[#f4a8bc]/80" />
      <div className="relative border border-slate-900/10 bg-[#0f172a] px-3 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_12px_24px_rgba(15,23,42,0.12)]">
        {label}
      </div>
    </div>
  );
}

function PackagesSection({ lang, onOpenTemplateList }) {
  const copy = siteCopy[lang].packages;

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div
          data-aos="fade-up"
          className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]"
        >
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">
              {copy.eyebrow}
            </p>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-bold tracking-[-0.05em] text-ink sm:text-5xl">
              {copy.title}
            </h2>
          </div>
          <p className="max-w-2xl self-end text-base leading-8 text-muted sm:text-lg">
            {copy.body}
          </p>
        </div>

        <div className="mt-10 grid gap-5 xl:grid-cols-3">
          {copy.items.map((item, index) => (
            <div
              key={item.name}
              data-aos="fade-up"
              data-aos-delay={index * 60}
              className={`border border-slate-900/8 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] ${packageCardThemes[index % packageCardThemes.length]}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
                    {item.name}
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-bold tracking-[-0.05em] text-ink">
                    {item.price}
                  </h3>
                </div>
                {item.featured ? <FeaturedBadge label={copy.featured} /> : null}
              </div>

              <p className="mt-5 text-sm leading-7 text-muted">{item.summary}</p>

              <div className="mt-6 space-y-1.5">
                {item.features.slice(0, 6).map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex shrink-0 items-center justify-center">
                      <LordIcon
                        src="/lordicons/select.json"
                        size={18}
                        trigger="in-reveal"
                        colors="primary:#2563ff,secondary:#0f172a"
                        state="hover-rotate"
                      />
                    </span>
                    <p className="text-sm leading-6 text-muted">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary"
                >
                  {copy.cta}
                  <ArrowUpRight size={15} />
                </a>

                {index === 0 ? (
                  <button
                    type="button"
                    onClick={onOpenTemplateList}
                    className="inline-flex items-center border border-slate-900/10 bg-white/70 px-5 py-3 text-sm font-semibold text-ink transition hover:bg-white"
                  >
                    {copy.launchLink}
                  </button>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="120"
          className="mt-10 border-t border-slate-900/8 pt-8 lg:grid lg:grid-cols-[0.8fr_1.2fr] lg:gap-10"
        >
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">
              {copy.addOnEyebrow}
            </p>
            <h3 className="mt-4 font-display text-3xl font-bold tracking-[-0.05em] text-ink">
              {copy.addOnTitle}
            </h3>
            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
              {copy.addOnBody}
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:mt-0">
            {copy.maintenanceFeatures.map((feature, index) => (
              <div
                key={feature}
                className="flex items-start gap-3 py-1.5"
              >
                <span className="mt-0.5 inline-flex shrink-0 items-center justify-center">
                  <LordIcon
                    src="/lordicons/select.json"
                    size={18}
                    trigger="in-reveal"
                    colors="primary:#11a67a,secondary:#0f172a"
                    state="hover-rotate"
                  />
                </span>
                <p className="text-sm leading-6 text-muted">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PackagesSection;
