import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import WhatsAppIcon from "../components/WhatsAppIcon";
import { techStacks } from "../data/siteData";

function Footer() {
  return (
    <>
      <footer className="px-0 pb-0 pt-6">
        <div className="overflow-hidden py-6 lg:py-8">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
            className="flex min-w-max items-center gap-4 px-6 lg:gap-6 lg:px-10"
          >
            {[...techStacks, ...techStacks].map((tech, index) => (
              <div
                key={`${tech}-${index}`}
                className="rounded-full border border-[var(--color-outline-soft)] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-muted shadow-[0_12px_24px_rgba(20,27,43,0.04)]"
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="grid w-full gap-10 rounded-none bg-surface-low px-5 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] lg:px-10">
          <div>
            <div className="font-display text-2xl font-bold tracking-[-0.05em]">
              siapdigital
            </div>
            <p className="mt-4 max-w-md text-sm leading-7 text-muted">
              Website brand dengan visual editorial, animasi aktif, dan struktur
              yang lebih ringan untuk load awal.
            </p>
            <a
              href="mailto:siapdigital@gmail.com"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              siapdigital@gmail.com
              <ArrowUpRight size={15} />
            </a>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
              Navigation
            </div>
            <div className="mt-4 flex flex-col gap-3 text-sm font-semibold text-muted">
              <a href="#work">Work</a>
              <a href="#services">Services</a>
              <a href="#faq">FAQ</a>
              <a href="#about">About</a>
            </div>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
              Channels
            </div>
            <div className="mt-4 flex flex-col gap-3 text-sm font-semibold text-muted">
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
              <a href="#">Behance</a>
              <a href="#">Dribbble</a>
            </div>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
              Studio Base
            </div>
            <p className="mt-4 text-sm leading-7 text-muted">Jepara</p>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/62895426290208"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat WhatsApp siapdigital"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-4 text-sm font-semibold text-white shadow-[0_20px_40px_rgba(37,211,102,0.35)] transition hover:-translate-y-1"
      >
        <WhatsAppIcon size={18} />
        WhatsApp
      </a>
    </>
  );
}

export default Footer;
