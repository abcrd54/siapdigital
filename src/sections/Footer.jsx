import { ArrowUpRightIcon } from "../components/AppIcons";
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

  return (
    <>
      <footer className="border-t border-slate-900/8 bg-[#e0e0e0] px-4 py-14 text-[#10223e] sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <OptimizedPicture
              src="/images/siapdigital-logo-180.webp"
              srcSet="/images/siapdigital-logo-180.webp 180w, /images/siapdigital-logo-360.webp 360w"
              avifSrcSet="/images/siapdigital-logo-180.avif 180w, /images/siapdigital-logo-360.avif 360w"
              sizes="180px"
              alt="siapdigital"
              width={180}
              height={45}
              className="h-11 w-auto object-contain"
            />
            <p className="mt-5 max-w-md text-sm leading-7 text-[#10223e]/74">
              {footerBody}
            </p>
            <a
              href="https://wa.me/62895426290208"
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                trackWhatsAppClick(isPortfolioPage ? "footer_portfolio_cta" : "footer_cta")
              }
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#10223e]"
            >
              {footerCta}
              <ArrowUpRightIcon width={15} height={15} />
            </a>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-[#10223e]/58">
              {copy.navTitle}
            </div>
            <div className="mt-4 flex flex-col gap-3 text-sm font-semibold text-[#10223e]/78">
              {(isPortfolioPage ? portfolioLinks : navItems.slice(1, 6)).map(
                (item) => (
                  <a key={item.id} href={item.href}>
                    {item.label}
                  </a>
                ),
              )}
            </div>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-[#10223e]/58">
              {isPortfolioPage
                ? lang === "id"
                  ? "Layanan Utama"
                  : "Core Services"
                : copy.seoTitle}
            </div>
            <div className="mt-4 flex flex-col gap-3 text-sm font-semibold text-[#10223e]/78">
              {serviceLandingLinks.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-[#10223e]/58">
              {isPortfolioPage
                ? lang === "id"
                  ? "Context"
                  : "Context"
                : copy.locationTitle}
            </div>
            <p className="mt-4 text-sm leading-7 text-[#10223e]/78">
              {isPortfolioPage
                ? lang === "id"
                  ? "Kumpulan project aktif, eksplorasi visual, dan contoh build yang pernah dikerjakan untuk berbagai kebutuhan bisnis."
                  : "A collection of active projects, visual explorations, and production builds created for different business needs."
                : copy.locationValue}
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
          <WhatsAppIcon size={30} invert />
        </a>
      ) : null}
    </>
  );
}

export default Footer;
