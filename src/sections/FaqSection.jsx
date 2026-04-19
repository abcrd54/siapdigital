import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data/siteData";

function FaqSection() {
  const [openFaq, setOpenFaq] = useState(1);

  return (
    <section className="px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">
            FAQ
          </p>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-[-0.05em] sm:text-5xl">
            Pertanyaan yang paling sering client tanyakan
          </h2>
          <p className="mt-6 max-w-md text-base leading-8 text-muted">
            FAQ ini dirancang untuk menjawab pertanyaan umum sebelum client
            memulai diskusi project dengan siapdigital.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2 lg:items-start">
          {faqs.map((faq, index) => {
            const active = openFaq === index;

            return (
              <motion.button
                key={faq.q}
                type="button"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => setOpenFaq(active ? -1 : index)}
                className={`w-full rounded-[1.6rem] p-6 text-left transition ${
                  active
                    ? "bg-surface-low shadow-[0_20px_40px_rgba(20,27,43,0.05)]"
                    : "bg-white"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span
                    className={`font-display text-xl font-bold tracking-[-0.03em] ${
                      active ? "text-primary" : "text-ink"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 transition ${
                      active ? "rotate-180 text-primary" : "text-muted"
                    }`}
                  />
                </div>
                <div
                  className={`grid transition-all duration-300 ${
                    active ? "mt-4 grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm leading-7 text-muted">{faq.a}</p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
