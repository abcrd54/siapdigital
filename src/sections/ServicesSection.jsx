import {
  Clock3,
  MessageCircleMore,
  MonitorSmartphone,
  Wallet,
} from "lucide-react";
import Reveal from "../components/Reveal";

const services = [
  {
    title: "Bisa Diskusi Dulu",
    body: "Kamu tidak harus datang dengan brief yang sempurna. Ceritakan kebutuhanmu, nanti dibantu susun arah website yang paling masuk akal.",
    icon: Clock3,
  },
  {
    title: "Custom Sesuai Bisnis",
    body: "Struktur, tampilan, dan CTA disesuaikan dengan jenis bisnis, target pelanggan, dan tujuan utama website kamu.",
    icon: MessageCircleMore,
  },
  {
    title: "Harga Fleksibel",
    body: "Scope bisa disesuaikan. Kalau baru mulai, kita bisa fokus dulu ke halaman yang paling penting dan dikembangkan bertahap.",
    icon: Wallet,
  },
  {
    title: "Siap Dipakai",
    body: "Website dibuat mobile friendly, ringan, dan diarahkan ke aksi yang jelas seperti chat WhatsApp, booking, atau inquiry.",
    icon: MonitorSmartphone,
  },
];

function ServicesSection() {
  return (
    <section className="bg-surface-low px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">
              Kenapa custom di siapdigital
            </p>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-[-0.05em] sm:text-5xl">
              Website tidak cuma bagus dilihat, tapi juga jelas arahnya.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service, index) => (
              <Reveal
                key={service.title}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 100}
                className="hover-lift ghost-border rounded-[1.75rem] bg-white p-7"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-surface-low p-3 text-primary">
                  <service.icon size={20} />
                </div>
                <h3 className="font-display text-2xl font-bold tracking-[-0.04em]">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted">{service.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
