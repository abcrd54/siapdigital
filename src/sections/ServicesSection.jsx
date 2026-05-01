import LordIcon from "../components/LordIcon";
import { ArrowUpRightIcon } from "../components/AppIcons";
import { siteCopy } from "../data/content";

const icons = [
  {
    src: "/lordicons/coins.json",
    colors: "primary:#e58a1f,secondary:#0f172a",
    state: "hover-spend",
  },
  {
    src: "/lordicons/extension.json",
    colors: "primary:#7c5cff,secondary:#0f172a",
    state: "hover-swirl",
  },
  {
    src: "/lordicons/account.json",
    colors: "primary:#11a67a,secondary:#0f172a",
    state: "hover-1",
  },
  {
    src: "/lordicons/puzzle.json",
    colors: "primary:#ef5d86,secondary:#0f172a",
    state: "hover-rotate",
  },
];
const reasonThemes = [
  {
    card: "bg-[linear-gradient(180deg,#fff6ee_0%,#fffdf9_100%)]",
    panel: "bg-[#ffe5ca]",
    glow: "bg-[#f7b466]",
  },
  {
    card: "bg-[linear-gradient(180deg,#f4f2ff_0%,#fefcff_100%)]",
    panel: "bg-[#e7defe]",
    glow: "bg-[#9e84f6]",
  },
  {
    card: "bg-[linear-gradient(180deg,#eefaf6_0%,#fbfffe_100%)]",
    panel: "bg-[#dbf3e9]",
    glow: "bg-[#4ebe95]",
  },
  {
    card: "bg-[linear-gradient(180deg,#fff2f6_0%,#fffdfd_100%)]",
    panel: "bg-[#ffdce6]",
    glow: "bg-[#ef8ba8]",
  },
];
const flowIcons = [
  {
    src: "/lordicons/account.json",
    colors: "primary:#d97706,secondary:#0f172a",
    state: "hover-1",
  },
  {
    src: "/lordicons/puzzle.json",
    colors: "primary:#7c3aed,secondary:#0f172a",
    state: "hover-rotate",
  },
  {
    src: "/lordicons/extension.json",
    colors: "primary:#059669,secondary:#0f172a",
    state: "hover-swirl",
  },
  {
    src: "/lordicons/select.json",
    colors: "primary:#e11d48,secondary:#0f172a",
    state: "hover-rotate",
  },
];
const flowThemes = [
  "bg-[linear-gradient(180deg,#fff8ef_0%,#ffffff_100%)]",
  "bg-[linear-gradient(180deg,#f6f2ff_0%,#ffffff_100%)]",
  "bg-[linear-gradient(180deg,#eefaf5_0%,#ffffff_100%)]",
  "bg-[linear-gradient(180deg,#fff2f5_0%,#ffffff_100%)]",
];

function ServicesSection({ lang }) {
  const copy = siteCopy[lang].services;
  const orderFlow = siteCopy[lang].orderFlow;

  return (
    <section className="border-y border-slate-900/8 bg-surface-low px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr]">
          <div data-aos="fade-up" className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">
              {copy.eyebrow}
            </p>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-[-0.05em] text-ink sm:text-5xl">
              {copy.title}
            </h2>
          </div>

          <p
            data-aos="fade-up"
            data-aos-delay="80"
            className="max-w-2xl self-end text-base leading-8 text-muted sm:text-lg"
          >
            {lang === "id"
              ? "Section ini saya sederhanakan supaya orang langsung paham value SiapDigital tanpa harus membaca terlalu banyak panel teknis."
              : "This section is simplified so people can understand SiapDigital's value immediately without reading too many technical panels."}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {copy.items.map((item, index) => {
            const icon = icons[index];
            const theme = reasonThemes[index % reasonThemes.length];

            return (
              <article
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={index * 70}
                className={`relative overflow-hidden border border-slate-900/8 p-6 text-center shadow-[0_18px_40px_rgba(15,23,42,0.05)] ${theme.card}`}
              >
                <div
                  className={`reason-glow absolute right-4 top-4 h-18 w-18 rounded-full blur-2xl ${theme.glow}`}
                />
                <div className="relative flex flex-col items-center">
                  <div className="inline-flex items-center justify-center text-ink">
                    <LordIcon
                      src={icon.src}
                      size={78}
                      trigger="in-reveal"
                      colors={icon.colors}
                      state={icon.state}
                    />
                  </div>

                  <h3 className="mt-6 font-display text-[2rem] font-bold tracking-[-0.05em] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    {item.body}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="120"
          className="mt-14 border-t border-slate-900/8 pt-10"
        >
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">
                {orderFlow.eyebrow}
              </p>
              <h3 className="mt-5 font-display text-4xl font-bold tracking-[-0.05em] text-ink sm:text-5xl">
                {orderFlow.title}
              </h3>
            </div>

            <p className="max-w-2xl self-end text-base leading-8 text-muted sm:text-lg">
              {orderFlow.body}
            </p>
          </div>

          <div className="mt-10 grid gap-4 xl:grid-cols-[repeat(4,minmax(0,1fr))]">
            {orderFlow.items.map((item, index) => {
              const icon = flowIcons[index % flowIcons.length];
              const hasNext = index < orderFlow.items.length - 1;

              return (
                <div
                  key={item.step}
                  data-aos="fade-up"
                  data-aos-delay={index * 70}
                  className="relative pt-9"
                  style={{ zIndex: orderFlow.items.length - index }}
                >
                  <article
                    className={`relative z-0 h-full border border-slate-900/8 px-6 pb-6 pt-10 text-center shadow-[0_18px_40px_rgba(15,23,42,0.05)] ${flowThemes[index % flowThemes.length]}`}
                  >
                    <span className="order-flow-badge absolute left-1/2 top-6 z-20 inline-flex h-14 w-14 -translate-x-[48%] -translate-y-1/2 items-center justify-center rounded-full border border-slate-900/8 bg-white text-base font-bold text-primary shadow-[0_12px_24px_rgba(15,23,42,0.08)]">
                      {item.step}
                    </span>

                    <div className="flex justify-center">
                      <div className="inline-flex items-center justify-center text-ink">
                        <LordIcon
                          src={icon.src}
                          size={62}
                          trigger="in-reveal"
                          colors={icon.colors}
                          state={icon.state}
                        />
                      </div>
                    </div>

                    <h4 className="mt-5 font-display text-[2rem] font-bold tracking-[-0.05em] text-ink">
                      {item.title}
                    </h4>
                    <p className="mt-4 text-sm leading-7 text-muted">
                      {item.body}
                    </p>
                  </article>

                  {hasNext ? (
                    <>
                      <div className="pointer-events-none hidden xl:flex absolute right-0 top-[52%] z-50 h-12 w-16 translate-x-[60%] -translate-y-1/2 items-center justify-center text-primary">
                        <ArrowUpRightIcon
                          width={37}
                          height={37}
                          className="rotate-45 stroke-[3]"
                        />
                      </div>
                    </>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
