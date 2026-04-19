function SeoContentSection({ page }) {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">
            {page.seoSectionEyebrow}
          </p>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-[-0.05em] sm:text-5xl">
            {page.seoSectionTitle}
          </h2>
        </div>

        <div>
          <p className="text-base leading-8 text-muted sm:text-lg">
            {page.seoSectionBody}
          </p>
          <div className="mt-8 grid gap-4">
            {page.seoPoints.map((point) => (
              <div
                key={point}
                className="rounded-[1.6rem] bg-white px-6 py-5 shadow-[0_18px_30px_rgba(20,27,43,0.05)]"
              >
                <p className="text-sm leading-7 text-muted">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SeoContentSection;
