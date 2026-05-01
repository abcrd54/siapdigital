import { ArrowUpRightIcon, SparklesIcon } from "../components/AppIcons";
import OptimizedPicture from "../components/OptimizedPicture";
import { siteCopy } from "../data/content";

const highlights = {
  id: [
    "Tampilan lebih profesional dan mudah dipahami",
    "Siap untuk landing page, company profile, atau sistem custom",
    "Nyaman dibuka di mobile dan cepat untuk calon customer",
  ],
  en: [
    "More professional and easier to understand",
    "Ready for landing pages, company profiles, or custom systems",
    "Comfortable on mobile and fast for potential customers",
  ],
};

function HomeHero({ lang, page }) {
  const titleLines = page.heroTitleLines[lang];
  const heroStats = page.heroStats?.[lang] ?? siteCopy[lang].heroStats;
  const items = page.heroHighlights?.[lang] ?? highlights[lang];

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-slate-900/8 bg-white pt-20 lg:pt-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(34,99,255,0.16),transparent_18%),radial-gradient(circle_at_58%_68%,rgba(122,163,255,0.1),transparent_18%),linear-gradient(180deg,#ffffff_0%,#f6f9ff_72%,#f2f6fb_100%)]" />
      <div className="absolute inset-0 opacity-30 [background:linear-gradient(90deg,transparent_0%,rgba(15,23,42,0.03)_18%,transparent_36%,transparent_100%)] [background-size:220px_100%]" />

      <div className="relative mx-auto grid min-h-[calc(100svh-5rem)] max-w-[1680px] items-center gap-8 px-4 pb-12 pt-4 sm:px-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-12 lg:px-10 lg:pb-16 lg:pt-8 2xl:px-0">
        <div data-aos="fade-up" className="max-w-2xl lg:justify-self-start">
          <div className="inline-flex items-center gap-3 border border-slate-900/8 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-ink shadow-[0_14px_30px_rgba(15,23,42,0.05)]">
            <SparklesIcon width={14} height={14} />
            {page.heroBadge[lang]}
          </div>

          <div className="relative mt-6 lg:mt-8">
            <h1 className="max-w-[18ch] font-display text-[2.45rem] font-semibold leading-[1.02] tracking-[-0.045em] text-ink sm:max-w-[19ch] sm:text-[3.35rem] lg:max-w-[17ch] lg:text-[4rem]">
              <span className="block text-balance">{titleLines[0]}</span>
              <span className="mt-1 block text-balance text-primary">{titleLines[1]}</span>
              <span className="mt-2 block max-w-[21ch] text-balance text-slate-800 sm:max-w-[23ch] lg:max-w-[22ch]">
                {titleLines[2]}
              </span>
            </h1>
          </div>

          <p className="mt-5 max-w-lg text-base leading-7 text-muted sm:text-lg sm:leading-8">
            {page.heroDescription[lang]}
          </p>

          <div className="mt-6 space-y-2.5 sm:mt-8 sm:space-y-3">
            {items.map((item, index) => (
              <div
                key={item}
                data-aos="fade-up"
                data-aos-delay={index * 60}
                className="flex items-start gap-3"
              >
                <span className="mt-2 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-[#6f95ff]" />
                <p className="text-sm leading-6 text-muted sm:leading-7">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
            <a
              href={page.heroPrimaryCta.href}
              className="inline-flex items-center gap-2 bg-[#2563ff] px-7 py-4 text-sm font-semibold text-white shadow-[0_26px_60px_rgba(37,99,255,0.26)] transition hover:-translate-y-1 hover:bg-[#1e56ea]"
            >
              {page.heroPrimaryCta.label[lang]}
              <ArrowUpRightIcon width={16} height={16} />
            </a>
            <a
              href={page.heroSecondaryCta.href}
              className="inline-flex items-center gap-2 border border-slate-900/10 bg-white px-7 py-4 text-sm font-semibold text-ink transition hover:bg-surface-low"
            >
              {page.heroSecondaryCta.label[lang]}
            </a>
          </div>

          <div className="mt-9 grid gap-3 sm:mt-12 sm:gap-4 sm:grid-cols-3">
            {heroStats.map((stat, index) => (
              <div
                key={stat.label}
                data-aos="fade-up"
                data-aos-delay={180 + index * 70}
                className="floating-slab relative"
              >
                <div className="floating-slab-panel bg-white p-4 text-ink sm:p-5">
                  <div className="font-display text-3xl font-bold tracking-[-0.05em] text-primary">
                    {stat.value}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          data-aos="fade-left"
          className="relative hidden items-center justify-center lg:flex lg:justify-end"
        >
          <div className="hero-illustration-shell hero-product-frame relative w-full max-w-[1240px] overflow-hidden border border-slate-900/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(241,246,255,0.98)_100%)] p-3 shadow-[0_28px_60px_rgba(15,23,42,0.12)] sm:p-4 lg:overflow-visible lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none">
            <OptimizedPicture
              src="/images/hero-1280.webp"
              srcSet="/images/hero-768.webp 768w, /images/hero-1280.webp 1280w, /images/hero-1536.webp 1536w"
              avifSrcSet="/images/hero-768.avif 768w, /images/hero-1280.avif 1280w, /images/hero-1536.avif 1536w"
              sizes="(min-width: 1024px) 58vw, 100vw"
              alt="Visual hero SiapDigital untuk website dan aplikasi"
              width={1536}
              height={1024}
              loading="eager"
              fetchPriority="high"
              className="relative z-10 h-auto w-full rounded-[1.35rem] object-contain scale-[1.01] sm:scale-[1.03] lg:rounded-none lg:scale-[1.12]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroSection({ lang, page }) {
  return <HomeHero lang={lang} page={page} />;
}

export default HeroSection;
