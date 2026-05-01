import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import OptimizedImage from "../components/OptimizedImage";
import { sharedProjectData, siteCopy } from "../data/content";

const ratingStars = Array.from({ length: 5 });

function TestimonialsSection({ lang }) {
  const copy = siteCopy[lang].testimonials;
  const testimonials = sharedProjectData.testimonials[lang];
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  const prev = () =>
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  const next = () =>
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));

  return (
    <section className="border-y border-slate-900/8 bg-surface-mid px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
          <div data-aos="fade-up">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">
              {copy.eyebrow}
            </p>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-bold tracking-[-0.05em] text-ink sm:text-5xl">
              {copy.title}
            </h2>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="80"
            className="overflow-hidden border border-slate-900/8 bg-white p-5 shadow-[0_18px_36px_rgba(15,23,42,0.05)] sm:p-7"
          >
            <div className="min-w-0 overflow-hidden">
              <article className="w-full">
                <div className="flex items-center gap-3">
                  <OptimizedImage
                    src="/dummy/avatar-founder.svg"
                    alt={activeTestimonial.name}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-display text-lg font-bold tracking-[-0.04em] text-ink">
                      {activeTestimonial.name}
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                      {activeTestimonial.company}
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-[#f59e0b]">
                      {ratingStars.map((_, index) => (
                        <span key={index} aria-hidden="true" className="text-sm leading-none">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-6 max-w-2xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  {activeTestimonial.quote}
                </p>
              </article>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-2">
                {testimonials.map((item, index) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 w-8 transition ${
                      activeIndex === index ? "bg-ink" : "bg-slate-200"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-3 self-end sm:self-auto">
                <button
                  type="button"
                  onClick={prev}
                  className="inline-flex border border-slate-900/8 bg-white p-3 text-ink transition hover:bg-slate-50"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="inline-flex border border-slate-900/8 bg-white p-3 text-ink transition hover:bg-slate-50"
                  aria-label="Next testimonial"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
