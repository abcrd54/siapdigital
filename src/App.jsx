import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Clock3,
  Mail,
  Menu,
  MessageCircle,
  MessageCircleMore,
  MonitorSmartphone,
  MapPin,
  Play,
  Sparkles,
  Star,
  Wallet,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function WhatsAppIcon({ className = "", size = 18 }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M19.11 17.2c-.27-.14-1.58-.78-1.82-.87-.24-.09-.42-.14-.59.14-.17.27-.68.87-.83 1.05-.15.18-.31.2-.58.07-.27-.14-1.13-.42-2.15-1.35-.8-.71-1.34-1.59-1.5-1.86-.15-.27-.02-.42.12-.56.12-.12.27-.31.41-.46.14-.15.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.59-1.43-.81-1.96-.21-.51-.42-.44-.58-.45l-.49-.01c-.17 0-.45.06-.68.31-.23.25-.89.87-.89 2.11s.91 2.44 1.03 2.61c.12.16 1.78 2.71 4.31 3.8.6.26 1.07.42 1.44.54.61.19 1.17.16 1.61.1.49-.07 1.58-.65 1.8-1.28.22-.63.22-1.17.15-1.28-.07-.11-.24-.18-.5-.32Z" />
      <path d="M16.01 3.2c-7.06 0-12.78 5.72-12.78 12.78 0 2.26.59 4.47 1.72 6.41L3.2 28.8l6.58-1.72a12.74 12.74 0 0 0 6.23 1.6h.01c7.06 0 12.78-5.72 12.78-12.78S23.07 3.2 16.01 3.2Zm0 23.37h-.01a10.62 10.62 0 0 1-5.42-1.49l-.39-.23-3.9 1.02 1.04-3.8-.25-.39a10.63 10.63 0 1 1 8.93 4.89Z" />
    </svg>
  );
}

const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Work", href: "#work", id: "work" },
  { label: "Services", href: "#services", id: "services" },
  { label: "FAQ", href: "#faq", id: "faq" },
  { label: "About", href: "#about", id: "about" },
];

const highlights = [
  "Owner-led creative direction",
  "Frontend craft and performance",
  "Motion that supports conversion",
];

const projects = [
  {
    title: "Landing Page + Sistem Booking Mini Soccer",
    tag: "Portfolio Project",
    year: "2026",
    image: "/images/minsoc.png",
    link: "https://booking-minsoc-six.vercel.app/",
    summary:
      "Website presentasi dan sistem booking mini soccer dengan alur yang jelas untuk membantu user melakukan reservasi lebih cepat.",
  },
  {
    title: "Atelier Flow",
    tag: "Portfolio Project",
    year: "2025",
    image: "/dummy/project-atelier.svg",
    link: "#",
    summary:
      "Showcase digital dengan komposisi rapi, whitespace luas, dan transisi yang menjaga kesan elegan.",
  },
  {
    title: "Northstar Identity",
    tag: "Portfolio Project",
    year: "2026",
    image: "/dummy/project-northstar.svg",
    link: "#",
    summary:
      "Platform brand untuk studio strategi yang membutuhkan tone modern, tenang, dan terasa presisi.",
  },
];

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

const stats = [
  { value: "08+", label: "years building digital experiences" },
  { value: "27", label: "selected launches and revamps" },
  { value: "12", label: "brands and founders supported" },
];

const faqs = [
  {
    q: "Berapa lama proses pembuatan website di siapdigital?",
    a: "Timeline bergantung pada ruang lingkup project, tetapi landing page atau company profile biasanya dapat disiapkan dalam 1 sampai 3 minggu.",
  },
  {
    q: "Apakah siapdigital hanya mengerjakan landing page?",
    a: "Tidak. Struktur website bisa dikembangkan ke company profile, halaman layanan, portfolio, case study, hingga website multi-page.",
  },
  {
    q: "Apakah website tetap cepat dan nyaman di mobile?",
    a: "Ya. siapdigital mengutamakan animasi yang terukur dan frontend yang rapi supaya website tetap nyaman diakses di desktop maupun mobile.",
  },
  {
    q: "Apakah bisa dibuat sesuai brand dan kebutuhan bisnis saya?",
    a: "Bisa. Setiap project diarahkan mengikuti identitas brand, target audience, dan tujuan bisnis supaya hasilnya terasa relevan dan tidak generik.",
  },
];

const marquee = [
  "React",
  "Tailwind CSS",
  "Framer Motion",
  "GSAP",
  "Dummy Lokal",
  "Brand Website",
  "Interactive Storytelling",
];

const testimonials = [
  {
    name: "Dimas Pratama",
    role: "Founder, Studio Meraki",
    quote:
      "Presentasinya terasa matang. Visual, ritme scroll, dan cara project ditampilkan langsung membangun trust untuk brand kami.",
  },
  {
    name: "Nadia Kurnia",
    role: "Creative Lead, Homa",
    quote:
      "Yang paling kuat adalah presentasinya terasa custom, bukan template generik yang hanya dipoles sedikit.",
  },
  {
    name: "Rizky Ananta",
    role: "Product Designer",
    quote:
      "Layout dan motion-nya bikin brand kami terlihat lebih bernilai. Sangat cocok untuk bisnis yang ingin tampil lebih serius.",
  },
  {
    name: "Tasha Livia",
    role: "Brand Strategist",
    quote:
      "Transisinya halus, mobile-nya tetap enak, dan storytelling brand jadi lebih jelas daripada website company profile biasa.",
  },
  {
    name: "Bayu Mahesa",
    role: "Independent Developer",
    quote:
      "Struktur komponennya rapi. Mudah diubah ke konten client tanpa perlu bongkar ulang layout dan flow utama.",
  },
  {
    name: "Alicia Dewi",
    role: "Marketing Director",
    quote:
      "Kesan pertamanya premium. Hero dan testimonial slider-nya langsung memberi kesan brand yang aktif dan meyakinkan.",
  },
];

const desktopTestimonialSlides = [];
for (let i = 0; i < testimonials.length; i += 3) {
  desktopTestimonialSlides.push(testimonials.slice(i, i + 3));
}

const revealUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

function App() {
  const heroCardRef = useRef(null);
  const sectionRefs = useRef([]);
  const [openFaq, setOpenFaq] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [desktopTestimonialIndex, setDesktopTestimonialIndex] = useState(0);
  const [mobileTestimonialIndex, setMobileTestimonialIndex] = useState(0);

  const showPrevTestimonials = () => {
    setDesktopTestimonialIndex((current) => Math.max(0, current - 1));
  };

  const showNextTestimonials = () => {
    setDesktopTestimonialIndex((current) =>
      Math.min(desktopTestimonialSlides.length - 1, current + 1),
    );
  };

  const showPrevMobileTestimonials = () => {
    setMobileTestimonialIndex((current) => Math.max(0, current - 1));
  };

  const showNextMobileTestimonials = () => {
    setMobileTestimonialIndex((current) =>
      Math.min(testimonials.length - 1, current + 1),
    );
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(heroCardRef.current, {
        yPercent: -8,
        rotation: -2,
        ease: "none",
        scrollTrigger: {
          trigger: heroCardRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      sectionRefs.current.forEach((section) => {
        if (!section) return;

        gsap.fromTo(
          section,
          { opacity: 0, y: 56 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 82%",
            },
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const sectionIds = ["home", "work", "services", "faq", "about"];
    const observers = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-22% 0px -55% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7],
      },
    );

    observers.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-ink">
      <div className="pointer-events-none fixed inset-0 editorial-grid opacity-60" />

      <header className="fixed inset-x-0 top-0 z-50 px-0 py-0">
        <div className="glass-panel ghost-border grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 rounded-none px-5 py-4 shadow-[0_18px_50px_rgba(20,27,43,0.08)] sm:px-6 lg:px-10">
          <a
            href="#home"
            className="ml-2 flex items-center justify-self-start lg:ml-4"
          >
            <img
              src="/images/logo-site.png"
              alt="siapdigital"
              className="h-10 w-auto object-contain sm:h-11"
            />
          </a>

          <nav className="hidden items-center justify-center gap-9 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-[15px] font-semibold tracking-[0.01em] transition lg:text-base ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-muted hover:text-primary"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block" />

          <button
            type="button"
            className="rounded-full p-2 text-ink md:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            <Menu size={20} />
          </button>
        </div>

        {menuOpen ? (
          <div className="w-full bg-surface px-5 py-5 shadow-[var(--shadow-ambient)] sm:px-6 md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-semibold text-muted"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <section
          id="home"
          className="relative min-h-screen overflow-hidden pb-24 pt-24 lg:pb-32 lg:pt-28"
        >
          <div className="absolute inset-0">
            <img
              src="/dummy/hero-editorial.svg"
              alt="Abstract architectural editorial dummy"
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
                Owner-Led Brand Experience
              </motion.div>

              <motion.h1
                initial="hidden"
                animate="show"
                variants={revealUp}
                transition={{ delay: 0.08 }}
                className="max-w-3xl font-display text-5xl font-bold leading-[0.92] tracking-[-0.06em] text-ink sm:text-6xl lg:text-[5.8rem]"
              >
                Crafting
                <span className="block text-primary italic">Brand</span>
                Experiences That Convert
              </motion.h1>

              <motion.p
                initial="hidden"
                animate="show"
                variants={revealUp}
                transition={{ delay: 0.16 }}
                className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg"
              >
                siapdigital membantu brand tampil lebih tajam melalui website
                yang terasa premium, cepat, dan dibuat dengan perhatian penuh
                dari sisi visual hingga frontend execution.
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
                  Explore Work
                  <ArrowUpRight size={16} />
                </a>
                <a
                  href="#services"
                  className="ghost-border inline-flex items-center gap-2 rounded-2xl bg-white/80 px-7 py-4 text-sm font-semibold text-primary transition hover:bg-surface-low"
                >
                  See Process
                  <Play size={16} />
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
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="relative flex min-h-[520px] justify-center lg:justify-end">
              <div className="absolute left-0 top-6 h-64 w-64 rounded-full bg-primary/12 blur-3xl" />
              <div className="absolute bottom-0 right-4 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
              <motion.div
                ref={heroCardRef}
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
                    <img
                      src="/dummy/portrait-owner.svg"
                      alt="Owner portrait placeholder"
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
                    Visual Direction
                  </p>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    Grid longgar, headline besar, dan blok visual yang terasa
                    seperti halaman editorial untuk brand premium.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>

          <div className="mt-0 flex w-full overflow-hidden rounded-none bg-surface-low py-4">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 18,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
              }}
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

        <section
          id="work"
          ref={(el) => {
            sectionRefs.current[0] = el;
          }}
          className="px-4 py-24 sm:px-6 lg:px-10"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">
                  Portfolio
                </p>
                <h2 className="mt-5 font-display text-4xl font-bold tracking-[-0.05em] sm:text-5xl">
                  Selected portfolio from siapdigital.
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                Beberapa contoh arah visual dan presentasi digital yang
                menunjukkan bagaimana siapdigital membantu brand tampil lebih
                kuat, lebih rapi, dan lebih siap meyakinkan client.
              </p>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.7, delay: index * 0.12 }}
                  whileHover={{ y: -10 }}
                  className="group overflow-hidden rounded-[2.2rem] bg-white shadow-[0_24px_50px_rgba(20,27,43,0.08)]"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-[340px] w-full object-cover object-center transition duration-700 group-hover:scale-[1.06] sm:h-[380px]"
                    />
                    <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5">
                      <span className="rounded-full bg-white/86 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary backdrop-blur-sm">
                        {project.tag}
                      </span>
                      <span className="rounded-full bg-[#141b2b]/78 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                        {project.year}
                      </span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#141b2b]/32 to-transparent" />
                  </div>
                  <div className="bg-[linear-gradient(180deg,#ffffff_0%,#f7f8ff_100%)] px-6 pb-6 pt-6">
                    <h3 className="mt-4 font-display text-2xl font-bold tracking-[-0.04em]">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-muted">
                      {project.summary}
                    </p>
                    <a
                      href={project.link}
                      target={
                        project.link.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        project.link.startsWith("http")
                          ? "noreferrer"
                          : undefined
                      }
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#141b2b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary"
                    >
                      View Project
                      <ArrowUpRight
                        size={15}
                        className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="services"
          ref={(el) => {
            sectionRefs.current[1] = el;
          }}
          className="bg-surface-low px-4 py-24 sm:px-6 lg:px-10"
        >
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
                    <p className="mt-4 text-sm leading-7 text-muted">
                      {service.body}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-surface-mid px-4 py-20 sm:px-6 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.7 }}
                  className="text-sm font-bold uppercase tracking-[0.24em] text-primary"
                >
                  Testimonials
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.8, delay: 0.08 }}
                  className="mt-4 font-display text-3xl font-bold leading-tight tracking-[-0.04em] text-ink sm:text-5xl"
                >
                  Feedback yang memperkuat kepercayaan client.
                </motion.h2>
              </div>

              <div className="hidden items-center gap-3 md:flex">
                <button
                  type="button"
                  onClick={showPrevTestimonials}
                  disabled={desktopTestimonialIndex === 0}
                  className="rounded-full bg-white p-3 text-ink shadow-[0_16px_30px_rgba(20,27,43,0.06)] transition disabled:cursor-not-allowed disabled:opacity-35"
                  aria-label="Previous testimonials"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={showNextTestimonials}
                  disabled={
                    desktopTestimonialIndex ===
                    desktopTestimonialSlides.length - 1
                  }
                  className="rounded-full bg-white p-3 text-ink shadow-[0_16px_30px_rgba(20,27,43,0.06)] transition disabled:cursor-not-allowed disabled:opacity-35"
                  aria-label="Next testimonials"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="mt-10 hidden overflow-hidden md:block">
              <motion.div
                animate={{ x: `-${desktopTestimonialIndex * 100}%` }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="flex"
              >
                {desktopTestimonialSlides.map((slide, slideIndex) => (
                  <div
                    key={`desktop-slide-${slideIndex}`}
                    className="grid w-full shrink-0 grid-cols-3 gap-6"
                  >
                    {slide.map((item) => (
                      <article
                        key={item.name}
                        className="h-full rounded-[2rem] bg-white p-7 shadow-[0_20px_40px_rgba(20,27,43,0.05)]"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src="/dummy/avatar-founder.svg"
                            alt={item.name}
                            className="h-14 w-14 rounded-full object-cover"
                          />
                          <div>
                            <div className="font-display text-lg font-bold tracking-[-0.04em] text-ink">
                              {item.name}
                            </div>
                            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                              {item.role}
                            </div>
                          </div>
                        </div>
                        <p className="mt-6 text-base leading-8 text-muted">
                          {item.quote}
                        </p>
                      </article>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="mt-10 overflow-hidden md:hidden">
              <motion.div
                animate={{ x: `-${mobileTestimonialIndex * 100}%` }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="flex"
              >
                {testimonials.map((item) => (
                  <div key={`mobile-${item.name}`} className="w-full shrink-0">
                    <article className="rounded-[2rem] bg-white p-6 shadow-[0_20px_40px_rgba(20,27,43,0.05)]">
                      <div className="flex items-center gap-3">
                        <img
                          src="/dummy/avatar-founder.svg"
                          alt={item.name}
                          className="h-14 w-14 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-display text-lg font-bold tracking-[-0.04em] text-ink">
                            {item.name}
                          </div>
                          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                            {item.role}
                          </div>
                        </div>
                      </div>
                      <p className="mt-6 text-sm leading-7 text-muted">
                        {item.quote}
                      </p>
                    </article>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="mt-6 flex items-center justify-between gap-4 md:hidden">
              <button
                type="button"
                onClick={showPrevMobileTestimonials}
                disabled={mobileTestimonialIndex === 0}
                className="rounded-full bg-white p-3 text-ink shadow-[0_16px_30px_rgba(20,27,43,0.06)] transition disabled:cursor-not-allowed disabled:opacity-35"
                aria-label="Previous testimonials"
              >
                <ArrowLeft size={18} />
              </button>
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                {mobileTestimonialIndex + 1} / {testimonials.length}
              </div>
              <button
                type="button"
                onClick={showNextMobileTestimonials}
                disabled={mobileTestimonialIndex === testimonials.length - 1}
                className="rounded-full bg-white p-3 text-ink shadow-[0_16px_30px_rgba(20,27,43,0.06)] transition disabled:cursor-not-allowed disabled:opacity-35"
                aria-label="Next testimonials"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>

        <section
          id="faq"
          ref={(el) => {
            sectionRefs.current[2] = el;
          }}
          className="px-4 py-24 sm:px-6 lg:px-10"
        >
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">
                FAQ
              </p>
              <h2 className="mt-5 font-display text-4xl font-bold tracking-[-0.05em] sm:text-5xl">
                Pertanyaan yang paling sering client tanyakan
              </h2>
              <p className="mt-6 max-w-md text-base leading-8 text-muted">
                FAQ ini dirancang untuk menjawab pertanyaan umum sebelum client
                memulai diskusi project dengan siapdigital.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const active = openFaq === index;
                return (
                  <motion.button
                    key={faq.q}
                    type="button"
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    onClick={() => setOpenFaq(active ? -1 : index)}
                    className={`w-full rounded-[1.6rem] p-6 text-left transition ${
                      active
                        ? "bg-surface-low shadow-[0_20px_40px_rgba(20,27,43,0.05)]"
                        : "bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span
                        className={`font-display text-xl font-bold tracking-[-0.03em] ${active ? "text-primary" : "text-ink"}`}
                      >
                        {faq.q}
                      </span>
                      <ChevronDown
                        size={20}
                        className={`shrink-0 transition ${active ? "rotate-180 text-primary" : "text-muted"}`}
                      />
                    </div>
                    <div
                      className={`grid transition-all duration-300 ${active ? "mt-4 grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm leading-7 text-muted">{faq.a}</p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="about"
          ref={(el) => {
            sectionRefs.current[3] = el;
          }}
          className="px-4 py-24 sm:px-6 lg:px-10"
        >
          <div className="mx-auto grid max-w-7xl gap-8">
            <div className="grid gap-8 rounded-[2.5rem] bg-surface-deep p-8 text-white sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:p-12">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/60">
                  About siapdigital
                </p>
                <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                  Brand digital yang dibangun untuk membuat website terasa lebih
                  serius.
                </h2>
                <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
                  siapdigital lahir dari kebutuhan untuk menghadirkan website
                  yang tidak hanya terlihat bagus, tetapi juga terasa relevan
                  untuk bisnis. Brand ini dipimpin langsung oleh owner dengan
                  fokus pada visual yang kuat, struktur yang rapi, dan
                  pengalaman digital yang membantu client tampil lebih
                  meyakinkan.
                </p>

                <div className="mt-10 space-y-4">
                  {highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-[1.4rem] bg-white/6 px-5 py-4"
                    >
                      <span className="text-sm font-medium text-white/80">
                        {item}
                      </span>
                      <ArrowUpRight size={16} className="text-white/80" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-start lg:justify-end">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="w-full max-w-[330px] rounded-[2rem] border border-white/14 bg-white/8 p-3 shadow-[0_24px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm"
                >
                  <div className="overflow-hidden rounded-[1.6rem] border border-white/10">
                    <img
                      src="/dummy/portrait-owner.svg"
                      alt="Owner portrait placeholder"
                      className="aspect-[4/5] w-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
              <div className="overflow-hidden rounded-[2rem] bg-surface p-3 shadow-[0_18px_30px_rgba(20,27,43,0.04)]">
                <iframe
                  title="Google Maps location"
                  src="https://www.google.com/maps?q=-6.633487734087801,110.72275555814396&z=16&output=embed"
                  className="h-full min-h-[360px] w-full rounded-[1.4rem]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="grid gap-4">
                <a
                  href="https://wa.me/62895426290208"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[1.75rem] bg-surface p-6 shadow-[0_18px_30px_rgba(20,27,43,0.04)] transition hover:-translate-y-1"
                >
                  <div className="mb-4 inline-flex rounded-2xl bg-[#25D366]/12 p-3 text-[#25D366]">
                    <WhatsAppIcon size={18} />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                    WhatsApp
                  </p>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    0895426290208
                  </p>
                </a>
                <a
                  href="mailto:siapdigital@gmail.com"
                  className="rounded-[1.75rem] bg-surface p-6 shadow-[0_18px_30px_rgba(20,27,43,0.04)] transition hover:-translate-y-1"
                >
                  <div className="mb-4 inline-flex rounded-2xl bg-surface-low p-3 text-primary">
                    <Mail size={18} />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                    Email
                  </p>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    siapdigital@gmail.com
                  </p>
                </a>
                <a
                  href="https://www.google.com/maps?q=-6.633487734087801,110.72275555814396"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[1.75rem] bg-surface p-6 shadow-[0_18px_30px_rgba(20,27,43,0.04)] transition hover:-translate-y-1"
                >
                  <div className="mb-4 inline-flex rounded-2xl bg-surface-low p-3 text-primary">
                    <MapPin size={18} />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                    Address
                  </p>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    Bawu RT 30 RW 06
                    <br />
                    Batealit Jepara
                  </p>
                </a>
                <div className="rounded-[1.75rem] bg-surface-low p-6">
                  <div className="mb-4 inline-flex rounded-2xl bg-white p-3 text-primary shadow-[0_12px_24px_rgba(20,27,43,0.06)]">
                    <Sparkles size={18} />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                    Brand Story
                  </p>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    siapdigital menggabungkan rasa visual yang tajam dengan
                    eksekusi frontend yang serius.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 pb-16 sm:px-6 lg:px-10 lg:pb-24">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.8rem] bg-surface-deep px-6 py-14 text-center text-white sm:px-10 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/60">
                Custom Website
              </p>
              <h2 className="mt-6 font-display text-4xl font-bold tracking-[-0.05em] sm:text-6xl">
                Ready to build your custom website with siapdigital?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/68">
                Jika brand kamu butuh website yang terasa lebih premium, lebih
                rapi, dan lebih relevan untuk client, siapdigital siap membantu
                merancang dan membangunnya secara custom.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/62895426290208"
                  target="_blank"
                  rel="noreferrer"
                  className="liquid-button inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1"
                >
                  Start Your Project
                  <MessageCircle size={16} />
                </a>
                <a
                  href="https://wa.me/62895426290208"
                  target="_blank"
                  rel="noreferrer"
                  className="ghost-border inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-7 py-4 text-sm font-semibold text-white"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="px-0 pb-0 pt-6">
        <div className="grid w-full gap-10 rounded-none bg-surface-low px-5 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] lg:px-10">
          <div>
            <div className="font-display text-2xl font-bold tracking-[-0.05em]">
              siapdigital
            </div>
            <p className="mt-4 max-w-md text-sm leading-7 text-muted">
              Website brand dengan visual editorial, animasi aktif, dan struktur
              yang siap diganti ke konten siapdigital.
            </p>
            <a
              href="mailto:hello@siapdigital.local"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              hello@siapdigital.local
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
            <p className="mt-4 text-sm leading-7 text-muted">
              Jakarta Selatan
              <br />
              Indonesia
            </p>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              Owner-led brand website
            </p>
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
    </div>
  );
}

export default App;
