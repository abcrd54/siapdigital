import {
  ArrowUpRight,
  BadgePercent,
  Bell,
  BookOpen,
  Bot,
  Briefcase,
  CalendarCheck2,
  ChartNoAxesColumn,
  CreditCard,
  Database,
  FileText,
  Gauge,
  Globe,
  GraduationCap,
  Grid2x2,
  HandCoins,
  Images,
  Instagram,
  LayoutPanelTop,
  LayoutDashboard,
  LockKeyhole,
  Mail,
  MapPinned,
  MessageCircle,
  MonitorSmartphone,
  NotebookPen,
  PackagePlus,
  PenTool,
  Search,
  Server,
  ShoppingBag,
  ShoppingCart,
  SlidersHorizontal,
  SquarePen,
  UserRound,
  WalletCards,
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

function getPackageFeatureIcon(feature) {
  const value = feature.toLowerCase();

  if (value.includes("produk")) {
    return PackagePlus;
  }
  if (value.includes("keranjang")) {
    return ShoppingCart;
  }
  if (value.includes("checkout")) {
    return WalletCards;
  }
  if (value.includes("payment") || value.includes("midtrans")) {
    return CreditCard;
  }
  if (value.includes("voucher") || value.includes("promo")) {
    return BadgePercent;
  }
  if (value.includes("training")) {
    return GraduationCap;
  }
  if (value.includes("login user") || value.includes("login")) {
    return LockKeyhole;
  }
  if (value.includes("dashboard")) {
    return LayoutDashboard;
  }
  if (value.includes("booking") || value.includes("reservasi")) {
    return CalendarCheck2;
  }
  if (value.includes("database") || value.includes("customer")) {
    return Database;
  }
  if (value.includes("notifikasi")) {
    return Bell;
  }
  if (value.includes("laporan")) {
    return ChartNoAxesColumn;
  }
  if (value.includes("fitur sesuai kebutuhan") || value.includes("fitur custom")) {
    return SlidersHorizontal;
  }
  if (value.includes("ui/ux")) {
    return Grid2x2;
  }
  if (value.includes("copywriting")) {
    return SquarePen;
  }
  if (value.includes("blog") || value.includes("artikel")) {
    return BookOpen;
  }
  if (value.includes("analytics visitor") || value.includes("analytics")) {
    return ChartNoAxesColumn;
  }
  if (value.includes("speed")) {
    return Gauge;
  }
  if (value.includes("integrasi instagram") || value.includes("instagram")) {
    return Instagram;
  }
  if (value.includes("leads")) {
    return HandCoins;
  }
  if (value.includes("revisi")) {
    return SquarePen;
  }
  if (value.includes("1 halaman") || value.includes("hingga") || value.includes("halaman")) {
    return LayoutPanelTop;
  }
  if (value.includes("mobile")) {
    return MonitorSmartphone;
  }
  if (value.includes("whatsapp")) {
    return value.includes("auto") || value.includes("chatbot") ? Bot : MessageCircle;
  }
  if (value.includes("google maps") || value.includes("maps")) {
    return MapPinned;
  }
  if (value.includes("form") || value.includes("email")) {
    return Mail;
  }
  if (value.includes("hosting")) {
    return Server;
  }
  if (value.includes("desain")) {
    return PenTool;
  }
  if (value.includes("seo")) {
    return Search;
  }
  if (value.includes("menu")) {
    return FileText;
  }
  if (value.includes("jualan")) {
    return ShoppingBag;
  }
  if (value.includes("assistant")) {
    return Bot;
  }
  if (value.includes("admin")) {
    return UserRound;
  }
  if (value.includes("website toko online")) {
    return ShoppingBag;
  }
  if (value.includes("website")) {
    return Globe;
  }
  if (value.includes("custom ringan")) {
    return Images;
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

        <div className="mt-10 grid gap-5 xl:grid-cols-3">
          {copy.items.map((item, index) => {
            const theme = packageCardThemes[index % packageCardThemes.length];

            return (
              <div
                key={item.name}
                data-aos="fade-up"
                data-aos-delay={index * 60}
                className="floating-slab relative self-start"
              >
                <div
                  className="floating-slab-panel p-5 text-ink sm:p-6"
                  style={{ background: theme.panel }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
                        {item.name}
                      </p>
                      <h3 className="mt-3 font-display text-[2.05rem] font-bold tracking-[-0.05em] text-ink sm:text-3xl">
                        {item.price}
                      </h3>
                    </div>
                    {item.featured ? <FeaturedBadge label={copy.featured} /> : null}
                  </div>

                  <p className="mt-4 text-sm leading-7 text-muted sm:mt-5">{item.summary}</p>

                  <div className="mt-5 border-t border-slate-900/8 pt-4 sm:mt-6 sm:pt-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
                      {lang === "id" ? "Perbandingan Utama" : "Key Comparison"}
                    </p>
                    <div className="mt-3 space-y-1.5">
                    {item.features.map((feature) => {
                      const FeatureIcon = getPackageFeatureIcon(feature);

                      return (
                        <div key={feature} className="flex items-start gap-3">
                          <span className="mt-0.5 inline-flex shrink-0 items-center justify-center">
                            <FeatureIcon className="h-[18px] w-[18px] text-primary" strokeWidth={1.9} />
                          </span>
                          <p className="text-[13px] leading-6 text-muted sm:text-sm">{feature}</p>
                        </div>
                      );
                    })}
                    </div>
                  </div>

                  <div className={index === 0 ? "mt-6 grid grid-cols-2 gap-2 sm:mt-7" : "mt-6 sm:mt-7"}>
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
