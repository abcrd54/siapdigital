import { Menu } from "lucide-react";
import OptimizedImage from "../components/OptimizedImage";
import { navItems } from "../data/siteData";

function Header({ activeSection, menuOpen, setMenuOpen }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-0 py-0">
      <div className="glass-panel ghost-border grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 rounded-none px-5 py-4 shadow-[0_18px_50px_rgba(20,27,43,0.08)] sm:px-6 lg:px-10">
        <a href="#home" className="ml-2 flex items-center justify-self-start lg:ml-4">
          <OptimizedImage
            src="/images/logo-site.png"
            alt="siapdigital"
            width={176}
            height={44}
            loading="eager"
            fetchPriority="high"
            className="h-10 w-auto object-contain sm:h-11"
          />
        </a>

        <nav className="hidden items-center justify-center gap-9 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-[15px] font-semibold tracking-[0.01em] transition lg:text-base ${
                activeSection === item.id
                  ? "text-primary"
                  : "text-muted hover:text-primary"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block" />

        <button
          type="button"
          className="rounded-full p-2 text-ink md:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          <Menu size={20} />
        </button>
      </div>

      {menuOpen ? (
        <div className="w-full bg-surface px-5 py-5 shadow-[var(--shadow-ambient)] sm:px-6 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-muted"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Header;
