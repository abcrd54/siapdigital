import { ArrowUpRight, Mail, MapPin, Sparkles } from "lucide-react";
import OptimizedImage from "../components/OptimizedImage";
import WhatsAppIcon from "../components/WhatsAppIcon";
import { highlights } from "../data/siteData";

function AboutSection() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8">
        <div className="rounded-[2.5rem] bg-surface-deep p-8 text-white sm:p-10 lg:p-12">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/60">
              About siapdigital
            </p>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              siapdigital membantu brand tampil lebih profesional, lebih
              dipercaya, dan lebih siap meyakinkan client.
            </h2>
            <p className="mt-6 text-base leading-8 text-white/70 sm:text-lg">
              siapdigital dibangun untuk menghadirkan website yang tidak
              berhenti di tampilan bagus saja, tetapi benar-benar disusun agar
              brand terlihat lebih serius, lebih rapi, dan lebih relevan dengan
              kebutuhan bisnis.
            </p>

            <div className="mx-auto mt-10 max-w-3xl space-y-4 text-left">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-[1.4rem] bg-white/6 px-5 py-4"
                >
                  <span className="text-sm font-medium text-white/80">{item}</span>
                  <ArrowUpRight size={16} className="text-white/80" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="overflow-hidden rounded-[2rem] bg-surface p-3 shadow-[0_18px_30px_rgba(20,27,43,0.04)]">
            <iframe
              title="Google Maps location"
              src="https://www.google.com/maps?q=-6.633487734087801,110.72275555814396&z=16&output=embed"
              className="h-full min-h-[360px] w-full rounded-[1.4rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="grid gap-4">
            <a
              href="https://wa.me/62895426290208"
              target="_blank"
              rel="noreferrer"
              className="rounded-[1.75rem] bg-surface p-6 shadow-[0_18px_30px_rgba(20,27,43,0.04)] transition hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-[#25D366]/12 p-3 text-[#25D366]">
                <WhatsAppIcon size={18} />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                WhatsApp
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">0895426290208</p>
            </a>

            <a
              href="mailto:siapdigital@gmail.com"
              className="rounded-[1.75rem] bg-surface p-6 shadow-[0_18px_30px_rgba(20,27,43,0.04)] transition hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-surface-low p-3 text-primary">
                <Mail size={18} />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                Email
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">
                siapdigital@gmail.com
              </p>
            </a>

            <a
              href="https://www.google.com/maps?q=-6.633487734087801,110.72275555814396"
              target="_blank"
              rel="noreferrer"
              className="rounded-[1.75rem] bg-surface p-6 shadow-[0_18px_30px_rgba(20,27,43,0.04)] transition hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-surface-low p-3 text-primary">
                <MapPin size={18} />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                Address
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">
                Bawu RT 30 RW 06
                <br />
                Batealit Jepara
              </p>
            </a>

            <div className="rounded-[1.75rem] bg-surface-low p-6">
              <div className="mb-4 inline-flex rounded-2xl bg-white p-3 text-primary shadow-[0_12px_24px_rgba(20,27,43,0.06)]">
                <Sparkles size={18} />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                Brand Story
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">
                siapdigital menggabungkan rasa visual yang tajam dengan eksekusi
                frontend yang serius.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
