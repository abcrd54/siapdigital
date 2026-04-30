import { ArrowUpRight } from "lucide-react";
import { XIcon } from "../components/AppIcons";

function TemplateListModal({ isOpen, lang, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[71] flex items-center justify-center bg-[#141b2b]/70 px-4 py-6 backdrop-blur-sm">
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <div className="enter-up relative z-10 w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/50 bg-white shadow-[0_36px_100px_rgba(20,27,43,0.24)]">
        <div className="flex items-start justify-between gap-6 border-b border-slate-900/8 bg-[linear-gradient(180deg,#ffffff_0%,#f6f9ff_100%)] px-6 py-6 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
              {lang === "id" ? "Paket Launch" : "Launch Package"}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.05em] text-ink sm:text-4xl">
              {lang === "id" ? "Pilih template untuk paket ini" : "Choose a template for this package"}
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
              {lang === "id"
                ? "Daftar template masih kosong untuk sementara. Nanti template siap pakai akan muncul di sini agar paket Launch bisa dipilih lebih cepat."
                : "The template list is temporarily empty. Ready-to-use templates will appear here so the Launch package can be selected faster."}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#141b2b] text-white transition hover:bg-primary"
            aria-label={lang === "id" ? "Tutup daftar template" : "Close template list"}
          >
            <XIcon width={18} height={18} />
          </button>
        </div>

        <div className="px-6 py-8 sm:px-8 sm:py-10">
          <div className="grid min-h-[320px] place-items-center border border-dashed border-slate-900/12 bg-[linear-gradient(180deg,#fbfcff_0%,#f3f7ff_100%)] p-8 text-center">
            <div className="max-w-xl">
              <div className="mx-auto flex h-18 w-18 items-center justify-center rounded-full bg-[#2563ff]/10 text-primary">
                <ArrowUpRight size={28} />
              </div>
              <h3 className="mt-6 font-display text-3xl font-bold tracking-[-0.04em] text-ink">
                {lang === "id" ? "Template akan ditambahkan di sini" : "Templates will be added here"}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                {lang === "id"
                  ? "Untuk sementara, user belum memilih template. Ketika daftar sudah siap, modal ini bisa diisi card template, preview, dan tombol pilih."
                  : "For now, users cannot choose a template yet. Once the list is ready, this modal can contain template cards, previews, and selection actions."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateListModal;
