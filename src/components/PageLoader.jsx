import { siteCopy } from "../data/content";

function PageLoader({ hidden, lang = "id" }) {
  const copy = siteCopy[lang];

  return (
    <div
      className={`page-loader fixed inset-0 z-[100] grid place-items-center bg-[#f9f9ff] transition duration-500 ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-hidden={hidden}
    >
      <div className="relative flex flex-col items-center gap-5 px-6 text-center">
        <div className="loader-mark rounded-[2rem] bg-white p-4 shadow-[0_24px_60px_rgba(20,27,43,0.1)]">
          <img
            src="/images/favicon-192.webp"
            alt=""
            width="72"
            height="72"
            className="h-16 w-16 object-contain"
            decoding="async"
          />
        </div>
        <div>
          <p className="font-display text-2xl font-bold tracking-[-0.05em] text-ink">
            siapdigital
          </p>
          <p className="mt-2 text-sm font-medium text-muted">
            {copy.loader}
          </p>
        </div>
        <div className="loader-bar h-1.5 w-56 overflow-hidden rounded-full bg-surface-mid">
          <span className="block h-full rounded-full bg-primary" />
        </div>
      </div>
    </div>
  );
}

export default PageLoader;
