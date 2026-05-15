import {
  ArrowUpRight,
  CreditCard,
  LayoutDashboard,
  LayoutPanelTop,
  DollarSign,
  MessageCircle,
  MonitorSmartphone,
  NotebookPen,
  Search,
  ShoppingBag,
  SquarePen,
} from "lucide-react";
import LordIcon from "../components/LordIcon";
import { siteCopy } from "../data/content";
import { trackPackageClick } from "../lib/analytics";

const packageCardThemes = [
  {
    panel: "linear-gradient(180deg, #fff8ef 0%, #fff1dc 100%)",
  },
  {
    panel: "linear-gradient(180deg, #f4f0ff 0%, #ebe3ff 100%)",
  },
  {
    panel: "linear-gradient(180deg, #eefbf6 0%, #ddf4ea 100%)",
  },
  {
    panel: "linear-gradient(180deg, #fff3f5 0%, #ffe3ea 100%)",
  },
  {
    panel: "linear-gradient(180deg, #eef4ff 0%, #dde9ff 100%)",
  },
];

function FeaturedBadge({ label }) {
  return (
    <div className="relative isolate px-1 pt-1">
      <div className="absolute inset-0 rotate-[-6deg] bg-[#ffcf8d]" />
      <div className="absolute inset-0 rotate-[4deg] bg-[#f4a8bc]/80" />
      <div className="relative border border-slate-900/10 bg-[#0f172a] px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow-[0_12px_24px_rgba(15,23,42,0.12)] sm:px-3 sm:py-2 sm:text-[11px] sm:tracking-[0.18em]">
        {label}
      </div>
    </div>
  );
}

function capitalizeFirst(text) {
  const value = text.trim();
  if (!value) {
    return value;
  }

  return value.charAt(0).toUpperCase() + value.slice(1);
}

function getPackageFeatureIcon(feature) {
  const value = feature.toLowerCase();

  if (value.includes("halaman") || value.includes("pages")) {
    return LayoutPanelTop;
  }
  if (value.includes("desain") || value.includes("design")) {
    return NotebookPen;
  }
  if (value.includes("kontak") || value.includes("contact") || value.includes("whatsapp")) {
    return MessageCircle;
  }
  if (value.includes("mobile")) {
    return MonitorSmartphone;
  }
  if (value.includes("seo")) {
    return Search;
  }
  if (value.includes("payment")) {
    return DollarSign;
  }
  if (value.includes("toko") || value.includes("store") || value.includes("midtrans")) {
    return ShoppingBag;
  }
  if (value.includes("sistem") || value.includes("dashboard") || value.includes("login")) {
    return LayoutDashboard;
  }
  if (value.includes("revisi") || value.includes("revision")) {
    return SquarePen;
  }

  return NotebookPen;
}

function PackagesSection({ lang, onOpenTemplateList, page }) {
  const pageCopy = page.sectionOverrides?.[lang]?.packages;
  const copy = {
    ...siteCopy[lang].packages,
    ...pageCopy,
  };

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
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

        <div className="mt-10 grid gap-5 items-start xl:grid-cols-3">
          {copy.items.map((item, index) => {
            const theme = packageCardThemes[index % packageCardThemes.length];

            return (
              <div
                key={item.name}
                data-aos="fade-up"
                data-aos-delay={index * 60}
                className={index < 3 ? "floating-slab relative h-full" : "floating-slab relative h-full"}
              >
                <div
                  className={
                    index < 3
                      ? "floating-slab-panel flex h-full min-h-[330px] flex-col p-4 text-ink sm:p-5"
                      : "floating-slab-panel flex h-full flex-col p-5 text-ink sm:p-6"
                  }
                  style={{ background: theme.panel }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
                        {item.name}
                      </p>
                      <h3 className={index < 3 ? "mt-2 font-display text-[1.9rem] font-bold tracking-[-0.05em] text-ink sm:text-[2.55rem]" : "mt-3 font-display text-[2.05rem] font-bold tracking-[-0.05em] text-ink sm:text-3xl"}>
                        {item.price}
                      </h3>
                    </div>
                    {item.featured ? <FeaturedBadge label={copy.featured} /> : null}
                  </div>

                  <p className={index < 3 ? "mt-2.5 text-sm leading-6 text-muted sm:mt-3" : "mt-4 text-sm leading-7 text-muted sm:mt-5"}>{item.summary}</p>

                  <div
                    className={
                      index < 3
                      ? "mt-2.5 flex flex-1 flex-col border-t border-slate-900/8 pt-2.5 sm:mt-3 sm:pt-3"
                        : "mt-5 flex-1 border-t border-slate-900/8 pt-4 sm:mt-6 sm:pt-5"
                    }
                  >
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
                      {lang === "id" ? "Perbandingan Utama" : "Key Comparison"}
                    </p>
                    <div className={index < 3 ? "mt-2 space-y-1" : "mt-3 space-y-2"}>
                    {item.features.map((feature) => {
                      const FeatureIcon = getPackageFeatureIcon(feature);
                      const [label, ...rest] = feature.split(":");
                      const value = rest.join(":").trim();
                      const displayLabel = capitalizeFirst(label);
                      const displayFeature = capitalizeFirst(feature);

                      return (
                        <div
                          key={feature}
                          className={index < 3 ? "grid grid-cols-[18px_minmax(0,1fr)] items-start gap-3 px-1 py-[2px]" : "grid grid-cols-[18px_minmax(0,1fr)] items-start gap-3 px-1 py-0.5"}
                        >
                          <span className="mt-0.5 inline-flex shrink-0 items-center justify-center">
                            <FeatureIcon className="h-[18px] w-[18px] text-primary" strokeWidth={1.9} />
                          </span>
                          <div className="min-w-0">
                            {value ? (
                              <div className="flex items-baseline justify-between gap-3">
                                <p className="text-[12px] font-medium leading-5 text-slate-600 sm:text-[13px]">
                                  {displayLabel}
                                </p>
                                <p className="shrink-0 text-right text-[12px] font-semibold leading-5 text-ink sm:text-[13px]">
                                  {capitalizeFirst(value)}
                                </p>
                              </div>
                            ) : (
                              <p className="text-[12px] font-medium leading-5 text-slate-700 sm:text-[13px]">
                                {displayFeature}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                    </div>
                  </div>

                  <div className={index === 0 ? "mt-auto grid grid-cols-2 gap-2 sm:mt-4" : index < 3 ? "mt-auto sm:mt-4" : "mt-5 sm:mt-6"}>
                    <a
                      href="#contact"
                      onClick={() =>
                        trackPackageClick(item.name, {
                          package_position: index + 1,
                          package_price: item.price,
                        })
                      }
                      className={index === 0
                        ? "inline-flex items-center justify-center gap-2 bg-ink px-4 py-3 text-[13px] font-semibold text-white transition hover:bg-primary"
                        : "inline-flex w-full items-center justify-center gap-2 bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary sm:w-auto"}
                    >
                      {index === 0 ? "Diskusikan" : copy.cta}
                      <ArrowUpRight size={15} />
                    </a>

                    {index === 0 ? (
                      <button
                        type="button"
                        onClick={onOpenTemplateList}
                        className="inline-flex cursor-pointer items-center justify-center border border-slate-900/10 bg-white px-4 py-3 text-[13px] font-semibold text-ink transition hover:bg-slate-50"
                      >
                        Lihat Paket
                      </button>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
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
