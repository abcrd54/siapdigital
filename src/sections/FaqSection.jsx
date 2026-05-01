import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { siteCopy } from "../data/content";

function FaqSection({ lang, page }) {
  const [openFaq, setOpenFaq] = useState(0);
  const pageCopy = page.sectionOverrides?.[lang];
  const copy = {
    ...siteCopy[lang],
    faqIntro: pageCopy?.faqIntro ?? siteCopy[lang].faqIntro,
  };
  const faqs = (pageCopy?.faqs ?? siteCopy[lang].faqs).slice(0, 4);

  useEffect(() => {
    setOpenFaq(0);
  }, [lang]);

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <div data-aos="fade-up" className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">
            {copy.faqIntro.eyebrow}
          </p>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-[-0.05em] text-ink sm:text-5xl">
            {copy.faqIntro.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted">
            {copy.faqIntro.body}
          </p>
        </div>

        <div className="mt-10 grid gap-4">
          {faqs.map((faq, index) => {
            const active = openFaq === index;

            return (
              <button
                key={faq.q}
                type="button"
                data-aos="fade-up"
                data-aos-delay={index * 60}
                onClick={() => setOpenFaq(active ? -1 : index)}
                className={`w-full border border-slate-900/8 p-6 text-left transition ${
                  active ? "bg-surface-low shadow-[0_16px_32px_rgba(15,23,42,0.04)]" : "bg-white"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className={`font-display text-xl font-bold tracking-[-0.03em] ${active ? "text-primary" : "text-ink"}`}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 transition ${
                      active ? "rotate-180 text-primary" : "text-muted"
                    }`}
                  />
                </div>
                <div className={`grid transition-all duration-300 ${active ? "mt-4 grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="text-sm leading-7 text-muted">{faq.a}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
