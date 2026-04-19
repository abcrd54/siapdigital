import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Star } from "lucide-react";
import OptimizedImage from "../components/OptimizedImage";
import { marquee, revealUp, stats } from "../data/siteData";

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pb-24 pt-24 lg:pb-32 lg:pt-28"
    >
      <div className="absolute inset-0">
        <OptimizedImage
          src="/dummy/hero-editorial.svg"
          alt="Abstract architectural editorial background"
          width={1600}
          height={1200}
          loading="eager"
          fetchPriority="high"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(249,249,255,0.96)_0%,rgba(249,249,255,0.9)_34%,rgba(249,249,255,0.46)_58%,rgba(20,27,43,0.14)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,112,243,0.16),transparent_28%)]" />
      </div>

      <div className="noise-overlay relative grid min-h-screen w-full items-center gap-12 overflow-hidden rounded-none px-5 py-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-10 lg:py-20">
        <div className="relative z-10 max-w-3xl">
          <motion.div
            initial="hidden"
            animate="show"
            variants={revealUp}
            className="mb-8 inline-flex items-center gap-3 rounded-full bg-surface-low px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-primary"
          >
            <Sparkles size={14} />
            Website & System Custom for Business
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={revealUp}
            transition={{ delay: 0.08 }}
            className="max-w-3xl font-display text-5xl font-bold leading-[0.92] tracking-[-0.06em] text-ink sm:text-6xl lg:text-[5.8rem]"
          >
            Butuh Website
            <span className="block text-primary italic">Custom</span>
            yang Terlihat Serius dan Siap Dipakai Bisnis?
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={revealUp}
            transition={{ delay: 0.16 }}
            className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg"
          >
            siapdigital membantu bisnis membangun website, landing page,
            aplikasi, dan sistem custom yang tampil meyakinkan, mudah dipakai,
            dan dirancang sesuai kebutuhan operasional maupun target penjualan.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={revealUp}
            transition={{ delay: 0.24 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#work"
              className="liquid-button inline-flex items-center gap-2 rounded-2xl px-7 py-4 text-sm font-semibold text-white shadow-[0_24px_48px_rgba(0,88,195,0.22)] transition hover:-translate-y-1"
            >
              Lihat Portfolio
              <ArrowUpRight size={16} />
            </a>
            <a
              href="#services"
              className="ghost-border inline-flex items-center gap-2 rounded-2xl bg-white/80 px-7 py-4 text-sm font-semibold text-primary transition hover:bg-surface-low"
            >
              Kenapa siapdigital?
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={revealUp}
            transition={{ delay: 0.32 }}
            className="mt-12 grid gap-4 sm:grid-cols-3"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.75rem] bg-white/80 p-5 shadow-[0_20px_40px_rgba(20,27,43,0.05)]"
              >
                <div className="font-display text-3xl font-bold tracking-[-0.05em] text-ink">
                  {stat.value}
                </div>
                <p className="mt-2 text-sm leading-6 text-muted">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative flex min-h-[520px] justify-center lg:justify-end">
          <div className="absolute left-0 top-6 h-64 w-64 rounded-full bg-primary/12 blur-3xl" />
          <div className="absolute bottom-0 right-4 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: 4 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{
              duration: 1,
              delay: 0.28,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 mt-auto w-full max-w-[420px]"
          >
            <div className="rounded-[2.5rem] bg-surface-high p-4 shadow-[var(--shadow-ambient)]">
              <div className="overflow-hidden rounded-[2rem] bg-surface-deep">
                <OptimizedImage
                  src="/dummy/portrait-owner.svg"
                  alt="Portrait owner siapdigital"
                  width={840}
                  height={1080}
                  loading="eager"
                  fetchPriority="high"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 -left-6 max-w-[220px] rounded-[1.75rem] bg-white p-5 shadow-[var(--shadow-ambient)]"
            >
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                Owner & Founder SIAPDIGITAL
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">
                Fokus pada website, aplikasi, dan sistem custom yang disusun
                agar bisnis terlihat lebih profesional dan workflow client
                berjalan lebih efisien.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="mt-0 flex w-full overflow-hidden rounded-none bg-surface-low py-4">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 18, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
          className="flex min-w-max gap-10 px-8"
        >
          {[...marquee, ...marquee].map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-muted"
            >
              <Star size={14} className="text-primary" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
