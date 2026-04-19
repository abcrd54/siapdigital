import Reveal from "../components/Reveal";
import WhatsAppIcon from "../components/WhatsAppIcon";

function ContactSection() {
  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-10 lg:pb-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.8rem] bg-surface-deep px-6 py-14 text-center text-white sm:px-10 lg:px-16">
        <Reveal className="">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/60">
            Custom Website
          </p>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-[-0.05em] sm:text-6xl">
            Ready to build your custom website with siapdigital?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/68">
            Jika brand kamu butuh website yang terasa lebih premium, lebih rapi,
            dan lebih relevan untuk client, siapdigital siap membantu merancang
            dan membangunnya secara custom.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/62895426290208"
              target="_blank"
              rel="noreferrer"
              className="liquid-button inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1"
            >
              Start Your Project
              <WhatsAppIcon size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default ContactSection;
