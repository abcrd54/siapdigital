import { ArrowUpRightIcon } from "../components/AppIcons";
import { Facebook, Instagram, MapPin } from "lucide-react";
import OptimizedPicture from "../components/OptimizedPicture";
import WhatsAppIcon from "../components/WhatsAppIcon";
import { serviceLandingLinks } from "../data/pageData";
import { navItemsByLang, siteCopy } from "../data/content";
import { trackWhatsAppClick } from "../lib/analytics";

function Footer({ isPortfolioPage, lang }) {
  const copy = siteCopy[lang].footer;
  const navItems = navItemsByLang[lang];
  const portfolioLinks =
    lang === "id"
      ? [
          { id: "portfolio-home", href: "#home", label: "Hero Portfolio" },
          { id: "portfolio-work", href: "#work", label: "Daftar Project" },
          { id: "portfolio-back", href: "/", label: "Kembali ke Home" },
        ]
      : [
          { id: "portfolio-home", href: "#home", label: "Portfolio Hero" },
          { id: "portfolio-work", href: "#work", label: "Project List" },
          { id: "portfolio-back", href: "/", label: "Back to Home" },
        ];
  const footerBody = isPortfolioPage
    ? lang === "id"
      ? "Halaman ini merangkum project website, landing page, aplikasi, dan sistem yang pernah dikerjakan SiapDigital dalam satu tempat yang mudah dijelajahi."
      : "This page brings together SiapDigital's website, landing page, app, and system projects in one place that is easy to browse."
    : copy.body;
  const footerCta = isPortfolioPage
    ? lang === "id"
      ? "Diskusi project serupa"
      : "Discuss a similar project"
    : copy.cta;
  const socialLinks = [
    {
      href: "https://www.instagram.com/siapdigital_jpr/",
      icon: Instagram,
      label: "Instagram",
      value: "siapdigital_jpr",
    },
    {
      href: "https://www.facebook.com/profile.php?id=61583540537343",
      icon: Facebook,
      label: "Facebook",
      value: "Siap Digital",
    },
  ];
  const sectionLinkClass = "transition hover:text-white";

  return (
    <>
      <footer className="relative overflow-hidden border-t border-white/10 bg-[linear-gradient(180deg,#0d1830_0%,#132447_58%,#11213f_100%)] px-4 pt-10 pb-6 text-white sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 opacity-80">
          <div className="absolute left-[-6%] top-0 h-56 w-56 rounded-full bg-[#1d4ed8]/22 blur-3xl" />
          <div className="absolute bottom-[-4rem] right-[-3%] h-64 w-64 rounded-full bg-[#0ea5a4]/12 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.28fr_0.82fr_0.82fr_1fr]">
            <div>
              <div>
                <OptimizedPicture
                  src="/images/siapdigital-logo-180.webp"
                  srcSet="/images/siapdigital-logo-180.webp 180w, /images/siapdigital-logo-360.webp 360w"
                  avifSrcSet="/images/siapdigital-logo-180.avif 180w, /images/siapdigital-logo-360.avif 360w"
                  sizes="180px"
                  alt="siapdigital"
                  width={180}
                  height={45}
                  className="h-11 w-auto object-contain brightness-[1.06] saturate-0 invert"
                />
              </div>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
                {footerBody}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-3 border border-white/10 bg-white/6 px-4 py-2 text-sm text-white/84 transition hover:-translate-y-0.5 hover:border-white/18 hover:bg-white/10 hover:text-white"
                    >
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition group-hover:bg-white/14">
                        <Icon size={16} />
                      </span>
                      <span>
                        <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-white/54">
                          {item.label}
                        </span>
                        <span className="block font-medium text-white/88">
                          {item.value}
                        </span>
                      </span>
                    </a>
                  );
                })}
              </div>

              <a
                href="https://wa.me/62895426290208"
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  trackWhatsAppClick(
                    isPortfolioPage ? "footer_portfolio_cta" : "footer_cta",
                  )
                }
                className="mt-7 inline-flex items-center gap-2 border border-white/12 bg-white px-5 py-3 text-sm font-semibold text-[#10223e] transition hover:-translate-y-0.5 hover:bg-[#f8fbff]"
              >
                {footerCta}
                <ArrowUpRightIcon width={15} height={15} />
              </a>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-white/46">
                {copy.navTitle}
              </div>
              <div className="mt-4 flex flex-col gap-3 text-sm font-semibold text-white/74">
                {(isPortfolioPage ? portfolioLinks : navItems.slice(1, 6)).map(
                  (item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      className={sectionLinkClass}
                    >
                      {item.label}
                    </a>
                  ),
                )}
              </div>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-white/46">
                {isPortfolioPage
                  ? lang === "id"
                    ? "Layanan Utama"
                    : "Core Services"
                  : copy.seoTitle}
              </div>
              <div className="mt-4 flex flex-col gap-3 text-sm font-semibold text-white/74">
                {serviceLandingLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={sectionLinkClass}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="self-start">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-white/46">
                {isPortfolioPage
                  ? lang === "id"
                    ? "Context"
                    : "Context"
                  : copy.locationTitle}
              </div>
              <div className="mt-4 flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white">
                  <MapPin size={16} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white/92">
                    {isPortfolioPage
                      ? lang === "id"
                        ? "Rangkuman Project & Eksplorasi"
                        : "Projects & Explorations"
                      : copy.locationValue}
                  </p>
                  <p className="mt-2 max-w-xs text-sm leading-7 text-white/66">
                    {isPortfolioPage
                      ? lang === "id"
                        ? "Kumpulan project aktif, eksplorasi visual, dan contoh build yang pernah dikerjakan untuk berbagai kebutuhan bisnis."
                        : "A collection of active projects, visual explorations, and production builds created for different business needs."
                      : "Alamat operasional di Bawu RT 30 RW 06, Batealit. Siap untuk diskusi website, landing page, dan aplikasi custom untuk bisnis di berbagai wilayah."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-7 text-center pb-0">
            <p className="text-lg font-semibold tracking-[0.08em] text-white/72 sm:text-xl">
              © 2026 SiapDigital
            </p>
          </div>
        </div>
      </footer>

      {!isPortfolioPage ? (
        <a
          href="https://wa.me/62895426290208"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat WhatsApp siapdigital"
          onClick={() => trackWhatsAppClick("whatsapp_floater")}
          className="whatsapp-floater fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#128C4A] text-white shadow-[0_20px_40px_rgba(18,140,74,0.32)] transition hover:-translate-y-1 hover:bg-[#0f7a40]"
        >
          <WhatsAppIcon animated size={30} invert />
        </a>
      ) : null}
    </>
  );
}

export default Footer;
