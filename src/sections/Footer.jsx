import { ArrowUpRightIcon } from "../components/AppIcons";
import OptimizedPicture from "../components/OptimizedPicture";
import WhatsAppIcon from "../components/WhatsAppIcon";
import { serviceLandingLinks } from "../data/pageData";
import { techStacks } from "../data/siteData";

function Footer() {
  return (
    <>
      <footer className="px-0 pb-0 pt-6">
        <div className="overflow-hidden py-6 lg:py-8">
          <div className="marquee-track marquee-track-slow flex min-w-max items-center gap-4 px-6 lg:gap-6 lg:px-10">
            {[...techStacks, ...techStacks].map((tech, index) => (
              <div
                key={`${tech}-${index}`}
                className="rounded-full border border-[var(--color-outline-soft)] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-muted shadow-[0_12px_24px_rgba(20,27,43,0.04)]"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        <div className="grid w-full gap-10 rounded-none bg-surface-low px-5 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] lg:px-10">
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
            <p className="mt-4 max-w-md text-sm leading-7 text-muted">
              Mau bikin website custom yang lebih rapi, cepat, dan sesuai kebutuhan
              bisnis? Siapdigital bantu dari diskusi awal sampai website siap
              dibagikan ke calon pelanggan.
            </p>
            <a
              href="https://wa.me/62895426290208"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Diskusi custom website
              <ArrowUpRightIcon width={15} height={15} />
            </a>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
              Navigasi
            </div>
            <div className="mt-4 flex flex-col gap-3 text-sm font-semibold text-muted">
              <a href="#work">Work</a>
              <a href="#services">Services</a>
              <a href="#faq">FAQ</a>
              <a href="#about">About</a>
            </div>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
              Layanan SEO
            </div>
            <div className="mt-4 flex flex-col gap-3 text-sm font-semibold text-muted">
              {serviceLandingLinks.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
              Lokasi
            </div>
            <p className="mt-4 text-sm leading-7 text-muted">Jepara</p>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/62895426290208"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat WhatsApp siapdigital"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#128C4A] px-5 py-4 text-sm font-semibold text-white shadow-[0_20px_40px_rgba(18,140,74,0.32)] transition hover:-translate-y-1 hover:bg-[#0f7a40]"
      >
        <WhatsAppIcon size={18} />
        WhatsApp
      </a>
    </>
  );
}

export default Footer;
