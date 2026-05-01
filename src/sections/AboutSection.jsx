import { AnimatedMailIcon, AnimatedMapPinIcon } from "../components/AppIcons";
import LordIcon from "../components/LordIcon";
import WhatsAppIcon from "../components/WhatsAppIcon";
import { siteCopy } from "../data/content";
import { trackWhatsAppClick } from "../lib/analytics";

function AboutSection({ lang }) {
  const copy = siteCopy[lang].about;

  return (
    <section className="border-y border-slate-900/8 bg-surface px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <div data-aos="fade-up">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">
              {copy.eyebrow}
            </p>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-bold tracking-[-0.05em] text-ink sm:text-5xl">
              {copy.title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
              {copy.body}
            </p>

            <div className="mt-8 grid gap-3">
              {copy.highlights.map((item, index) => (
                <div
                  key={item}
                  data-aos="fade-up"
                  data-aos-delay={index * 60}
                  className="border border-slate-900/8 bg-white px-5 py-4 text-sm leading-7 text-muted shadow-[0_14px_30px_rgba(15,23,42,0.04)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <div className="grid gap-4 sm:grid-cols-3">
              <a
                data-aos="fade-up"
                href="https://wa.me/62895426290208"
                target="_blank"
                rel="noreferrer"
                onClick={() => trackWhatsAppClick("about_section")}
                className="flex flex-col items-center border border-slate-900/8 bg-white p-6 text-center shadow-[0_16px_32px_rgba(15,23,42,0.05)] transition hover:-translate-y-1"
              >
                <div className="mb-5 inline-flex items-center justify-center text-[#25D366]">
                  <WhatsAppIcon animated size={60} />
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                  {copy.whatsappLabel}
                </p>
                <p className="mt-3 text-sm leading-7 text-muted">
                  0895426290208
                </p>
              </a>

              <a
                data-aos="fade-up"
                data-aos-delay="60"
                href="mailto:siapdigital@gmail.com"
                className="flex flex-col items-center border border-slate-900/8 bg-white p-6 text-center shadow-[0_16px_32px_rgba(15,23,42,0.05)] transition hover:-translate-y-1"
              >
                <div className="mb-5 inline-flex items-center justify-center text-primary">
                  <AnimatedMailIcon size={62} className="scale-[1.50]" />
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                  {copy.emailLabel}
                </p>
                <p className="mt-3 text-sm leading-7 text-muted">
                  siapdigital@gmail.com
                </p>
              </a>

              <div
                data-aos="fade-up"
                data-aos-delay="120"
                className="flex flex-col items-center border border-slate-900/8 bg-[#0f172a] p-6 text-center text-white shadow-[0_16px_32px_rgba(15,23,42,0.08)]"
              >
                <div className="mb-5 inline-flex items-center justify-center text-white">
                  <LordIcon
                    src="/lordicons/search-morph.json"
                    size={60}
                    trigger="in-reveal"
                    colors="primary:#ffffff,secondary:#8fb8ff"
                    state="hover-1"
                  />
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/60">
                  {lang === "id" ? "Quick Response" : "Quick Response"}
                </p>
                <div className="mt-3 font-display text-4xl font-bold tracking-[-0.05em]">
                  &lt; 1h
                </div>
                <p className="mt-3 text-sm leading-7 text-white/74">
                  {lang === "id"
                    ? "Untuk diskusi awal dan estimasi project."
                    : "For initial discussion and project estimates."}
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="160"
              className="grid items-stretch gap-5 border border-slate-900/8 bg-white p-5 shadow-[0_20px_48px_rgba(15,23,42,0.06)] lg:grid-cols-[1.08fr_0.92fr]"
            >
              <div className="relative min-h-[320px] overflow-hidden border border-slate-900/8 bg-surface-low lg:min-h-full">
                <iframe
                  title="Google Maps location"
                  src="https://www.google.com/maps?q=SiapDigital&ll=-6.6335129,110.7227586&z=17&output=embed"
                  className="h-full min-h-[320px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="grid gap-4">
                <a
                  href="https://maps.app.goo.gl/vEwvWWXX2wCBtPue7"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col items-center border border-slate-900/8 bg-slate-50 p-5 text-center transition hover:-translate-y-1"
                >
                  <div className="mb-5 inline-flex items-center justify-center text-primary">
                    <AnimatedMapPinIcon
                      size={62}
                      className="group-hover:[animation-play-state:running]"
                    />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                    {copy.addressLabel}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    Bawu RT 30 RW 06
                    <br />
                    Batealit Jepara
                  </p>
                </a>

                <div className="flex flex-col items-center border border-slate-900/8 bg-slate-50 p-5 text-center">
                  <div className="mb-5 inline-flex items-center justify-center text-primary">
                    <LordIcon
                      src="/lordicons/puzzle.json"
                      size={60}
                      trigger="in-reveal"
                      colors="primary:#ef5d86,secondary:#0f172a"
                      state="hover-rotate"
                    />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                    {copy.storyLabel}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {copy.brandStory}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
