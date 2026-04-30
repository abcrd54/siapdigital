import { MenuIcon } from "../components/AppIcons";
import OptimizedPicture from "../components/OptimizedPicture";

function Header({
  activeSection,
  homeHref,
  isPortfolioPage,
  lang,
  menuOpen,
  navItems,
  setActiveSection,
  setLang,
  setMenuOpen,
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-900/8 bg-white/82 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-4 sm:px-6 lg:grid-cols-[auto_1fr_auto_auto] lg:px-8">
        <a href={homeHref} className="flex items-center justify-self-start">
          <OptimizedPicture
            src="/images/siapdigital-logo-180.webp"
            srcSet="/images/siapdigital-logo-180.webp 180w, /images/siapdigital-logo-360.webp 360w"
            avifSrcSet="/images/siapdigital-logo-180.avif 180w, /images/siapdigital-logo-360.avif 360w"
            sizes="180px"
            alt="siapdigital"
            width={180}
            height={45}
            loading="eager"
            fetchPriority="high"
            className="h-9 w-auto object-contain sm:h-10"
          />
        </a>

        <nav className="hidden items-center justify-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setActiveSection(item.id)}
              className={`text-[14px] font-semibold uppercase tracking-[0.18em] transition lg:text-[15px] ${
                activeSection === item.id ? "text-primary" : "text-muted hover:text-ink"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {isPortfolioPage ? (
            <a
              href="/"
              className="inline-flex items-center justify-center border border-slate-900/10 bg-surface-low px-4 py-2 text-[13px] font-semibold uppercase tracking-[0.16em] text-ink transition hover:bg-white"
            >
              {lang === "id" ? "Kembali ke Home" : "Back to Home"}
            </a>
          ) : null}
          <div className="flex items-center border border-slate-900/8 bg-slate-50">
            <button
              type="button"
              onClick={() => setLang("id")}
              aria-label="Switch language to Indonesian"
              className={`inline-flex items-center justify-center px-3 py-2 transition ${
                lang === "id" ? "bg-[#2563ff] text-white" : "text-muted hover:text-ink"
              }`}
            >
              <span aria-hidden="true" className="fi fi-id text-lg leading-none" />
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-label="Switch language to English"
              className={`inline-flex items-center justify-center px-3 py-2 transition ${
                lang === "en" ? "bg-[#2563ff] text-white" : "text-muted hover:text-ink"
              }`}
            >
              <span aria-hidden="true" className="fi fi-gb text-lg leading-none" />
            </button>
          </div>
        </div>

        <button
          type="button"
          className="justify-self-end p-2 text-ink md:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          <MenuIcon width={20} height={20} />
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-slate-900/8 bg-white px-4 py-5 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:px-6 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold uppercase tracking-[0.18em] text-muted"
                onClick={() => {
                  setActiveSection(item.id);
                  setMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}

            <div className="mt-2 flex items-center gap-2">
              <button
                type="button"
                onClick={() => setLang("id")}
                aria-label="Switch language to Indonesian"
                className={`inline-flex items-center justify-center px-4 py-2 ${
                  lang === "id" ? "bg-[#2563ff] text-white" : "bg-surface-low text-muted"
                }`}
              >
                <span aria-hidden="true" className="fi fi-id text-lg leading-none" />
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                aria-label="Switch language to English"
                className={`inline-flex items-center justify-center px-4 py-2 ${
                  lang === "en" ? "bg-[#2563ff] text-white" : "bg-surface-low text-muted"
                }`}
              >
                <span aria-hidden="true" className="fi fi-gb text-lg leading-none" />
              </button>
            </div>

            <a
              href={isPortfolioPage ? "/" : "#contact"}
              className="mt-2 inline-flex w-full items-center justify-center border border-slate-900/10 bg-surface-low px-5 py-3 text-sm font-semibold text-ink"
              onClick={() => setMenuOpen(false)}
            >
              {isPortfolioPage
                ? lang === "id"
                  ? "Kembali ke Home"
                  : "Back to Home"
                : lang === "id"
                  ? "Ke Kontak"
                  : "Go To Contact"}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Header;
