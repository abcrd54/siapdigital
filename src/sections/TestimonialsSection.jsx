import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import OptimizedImage from "../components/OptimizedImage";
import { desktopTestimonialSlides, testimonials } from "../data/siteData";

function TestimonialsSection() {
  const [desktopTestimonialIndex, setDesktopTestimonialIndex] = useState(0);
  const [mobileTestimonialIndex, setMobileTestimonialIndex] = useState(0);

  return (
    <section className="overflow-hidden bg-surface-mid px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
              className="text-sm font-bold uppercase tracking-[0.24em] text-primary"
            >
              Testimonials
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.08 }}
              className="mt-4 font-display text-3xl font-bold leading-tight tracking-[-0.04em] text-ink sm:text-5xl"
            >
              Feedback yang memperkuat kepercayaan client.
            </motion.h2>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={() =>
                setDesktopTestimonialIndex((current) => Math.max(0, current - 1))
              }
              disabled={desktopTestimonialIndex === 0}
              className="rounded-full bg-white p-3 text-ink shadow-[0_16px_30px_rgba(20,27,43,0.06)] transition disabled:cursor-not-allowed disabled:opacity-35"
              aria-label="Previous testimonials"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() =>
                setDesktopTestimonialIndex((current) =>
                  Math.min(desktopTestimonialSlides.length - 1, current + 1),
                )
              }
              disabled={desktopTestimonialIndex === desktopTestimonialSlides.length - 1}
              className="rounded-full bg-white p-3 text-ink shadow-[0_16px_30px_rgba(20,27,43,0.06)] transition disabled:cursor-not-allowed disabled:opacity-35"
              aria-label="Next testimonials"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="mt-10 hidden overflow-hidden md:block">
          <motion.div
            animate={{ x: `-${desktopTestimonialIndex * 100}%` }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex"
          >
            {desktopTestimonialSlides.map((slide, slideIndex) => (
              <div
                key={`desktop-slide-${slideIndex}`}
                className="grid w-full shrink-0 grid-cols-3 gap-6"
              >
                {slide.map((item) => (
                  <article
                    key={item.name}
                    className="h-full rounded-[2rem] bg-white p-7 shadow-[0_20px_40px_rgba(20,27,43,0.05)]"
                  >
                    <div className="flex items-center gap-3">
                      <OptimizedImage
                        src="/dummy/avatar-founder.svg"
                        alt={item.name}
                        width={56}
                        height={56}
                        className="h-14 w-14 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-display text-lg font-bold tracking-[-0.04em] text-ink">
                          {item.name}
                        </div>
                        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                          {item.role}
                        </div>
                      </div>
                    </div>
                    <p className="mt-6 text-base leading-8 text-muted">{item.quote}</p>
                  </article>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-10 overflow-hidden md:hidden">
          <motion.div
            animate={{ x: `-${mobileTestimonialIndex * 100}%` }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex"
          >
            {testimonials.map((item) => (
              <div key={`mobile-${item.name}`} className="w-full shrink-0">
                <article className="rounded-[2rem] bg-white p-6 shadow-[0_20px_40px_rgba(20,27,43,0.05)]">
                  <div className="flex items-center gap-3">
                    <OptimizedImage
                      src="/dummy/avatar-founder.svg"
                      alt={item.name}
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-display text-lg font-bold tracking-[-0.04em] text-ink">
                        {item.name}
                      </div>
                      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                        {item.role}
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 text-sm leading-7 text-muted">{item.quote}</p>
                </article>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 md:hidden">
          <button
            type="button"
            onClick={() =>
              setMobileTestimonialIndex((current) => Math.max(0, current - 1))
            }
            disabled={mobileTestimonialIndex === 0}
            className="rounded-full bg-white p-3 text-ink shadow-[0_16px_30px_rgba(20,27,43,0.06)] transition disabled:cursor-not-allowed disabled:opacity-35"
            aria-label="Previous testimonials"
          >
            <ArrowLeft size={18} />
          </button>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
            {mobileTestimonialIndex + 1} / {testimonials.length}
          </div>
          <button
            type="button"
            onClick={() =>
              setMobileTestimonialIndex((current) =>
                Math.min(testimonials.length - 1, current + 1),
              )
            }
            disabled={mobileTestimonialIndex === testimonials.length - 1}
            className="rounded-full bg-white p-3 text-ink shadow-[0_16px_30px_rgba(20,27,43,0.06)] transition disabled:cursor-not-allowed disabled:opacity-35"
            aria-label="Next testimonials"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
