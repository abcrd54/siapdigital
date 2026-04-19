import { motion } from "framer-motion";
import { services } from "../data/siteData";

function ServicesSection() {
  return (
    <section id="services" className="bg-surface-low px-4 py-24 sm:px-6 lg:px-10">
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
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.65, delay: index * 0.1 }}
                whileHover={{ backgroundColor: "#dce2f7" }}
                className="ghost-border rounded-[1.75rem] bg-white p-7"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-surface-low p-3 text-primary">
                  <service.icon size={20} />
                </div>
                <h3 className="font-display text-2xl font-bold tracking-[-0.04em]">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted">{service.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
