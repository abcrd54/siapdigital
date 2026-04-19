import {
  Clock3,
  MessageCircleMore,
  MonitorSmartphone,
  Wallet,
} from "lucide-react";
import Reveal from "../components/Reveal";

const services = [
  {
    title: "Pengerjaan Cepat",
    body: "Workflow siapdigital dibuat ringkas dan terarah supaya project bisa berjalan cepat tanpa mengorbankan kualitas hasil.",
    icon: Clock3,
  },
  {
    title: "Konsultasi Gratis",
    body: "Client bisa berdiskusi lebih dulu untuk menyamakan kebutuhan, arah desain, dan solusi website yang paling cocok.",
    icon: MessageCircleMore,
  },
  {
    title: "Harga Terbaik",
    body: "siapdigital menjaga penawaran tetap kompetitif dengan hasil yang tetap rapi, modern, dan relevan untuk bisnis.",
    icon: Wallet,
  },
  {
    title: "Website Kekinian",
    body: "Tampilan website dibuat modern, mobile friendly, dan up to date supaya brand terlihat lebih meyakinkan di mata client.",
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
              Why siapdigital
            </p>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-[-0.05em] sm:text-5xl">
              Keunggulan brand yang membuat website terasa lebih bernilai.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service, index) => (
              <Reveal
                key={service.title}
                delay={index * 100}
                className="ghost-border rounded-[1.75rem] bg-white p-7"
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
