import Reveal from "../components/Reveal";
import WhatsAppIcon from "../components/WhatsAppIcon";
import { siteCopy } from "../data/content";

function ContactSection({ lang }) {
  const copy = siteCopy[lang].contact;

  return (
    <section className="px-4 pb-16 pt-10 sm:px-6 lg:px-10 lg:pb-24">
      <div className="mx-auto grid max-w-7xl overflow-hidden border border-slate-900/8 bg-[linear-gradient(135deg,#0f172a_0%,#1648a2_100%)] text-white shadow-[0_32px_80px_rgba(15,23,42,0.18)] lg:grid-cols-[0.95fr_1.05fr]">
        <div className="border-b border-white/10 p-8 lg:border-b-0 lg:border-r lg:p-12">
          <Reveal direction="left">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/60">
              {copy.eyebrow}
            </p>
            <h2 className="mt-6 font-display text-4xl font-bold tracking-[-0.05em] sm:text-6xl">
              {copy.title}
            </h2>
          </Reveal>
        </div>

        <div className="p-8 lg:p-12">
          <Reveal direction="right" delay={120}>
            <p className="max-w-2xl text-base leading-8 text-white/72">
              {copy.body}
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <a
                href="https://wa.me/62895426290208"
                target="_blank"
                rel="noreferrer"
                className="liquid-button shine-sweep inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1"
              >
                {copy.cta}
                <WhatsAppIcon size={24} invert />
              </a>
              <a
                href="#packages"
                className="inline-flex items-center justify-center border border-white/14 bg-white/8 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/12"
              >
                {lang === "id" ? "Lihat Paket Dulu" : "See Packages First"}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
