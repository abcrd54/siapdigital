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
  MessageCircleMore,
  MonitorSmartphone,
  MapPin,
  Play,
  Sparkles,
  Star,
  Wallet,
  X,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function WhatsAppIcon({ className = "", size = 18 }) {
  return (
    <img
      src="/images/whatsapp.svg"
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className={`shrink-0 brightness-0 invert ${className}`}
    />
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
    tag: "Next.js",
    year: "2026",
    image: "/images/minsoc.png",
    link: "https://booking-minsoc-six.vercel.app/",
    summary:
      "Website presentasi dan sistem booking mini soccer dengan alur yang jelas untuk membantu user melakukan reservasi lebih cepat.",
    description:
      "Landing page dan sistem booking untuk mini soccer dengan alur reservasi yang lebih jelas, tampilan yang modern, dan CTA yang diarahkan untuk membantu user melakukan booking lebih cepat.",
  },
  {
    title: "Landing Page + Sistem Booking Klinik",
    tag: "Next.js",
    year: "2026",
    image: "/images/klinik.png",
    link: "#",
    summary:
      "Website profil klinik yang dilengkapi sistem booking untuk memudahkan pasien melihat layanan dan melakukan reservasi secara online.",
    description:
      "Landing page klinik dengan tampilan modern dan alur booking yang jelas agar calon pasien bisa mengenal layanan, memilih jadwal, dan melakukan reservasi dengan lebih cepat dan nyaman.",
  },
  {
    title: "Landing Page + Sistem Ekspedisi Pengiriman",
    tag: "Next.js",
    year: "2026",
    image: "/images/ekspedisi.png",
    link: "https://ekspedisi-lokal.vercel.app/",
    summary:
      "Website company profile ekspedisi yang dilengkapi sistem pengiriman untuk mempermudah proses pemesanan dan pelacakan layanan.",
    description:
      "Landing page dan sistem ekspedisi untuk membantu pengguna mengenal layanan pengiriman, melakukan pemesanan, dan mengakses alur pengiriman dengan tampilan yang lebih modern dan terstruktur.",
  },
  {
    title: "Custom Plugin Transaksi Polyline",
    tag: "WordPress",
    year: "2026",
    image: "/images/custom.png",
    link: "https://polyline.id/",
    summary:
      "Pengembangan plugin WordPress khusus untuk mendukung kebutuhan transaksi dan alur operasional yang lebih fleksibel.",
    description:
      "Custom plugin WordPress yang dirancang untuk menyesuaikan kebutuhan transaksi pada website Polyline, sehingga proses operasional menjadi lebih efisien, terintegrasi, dan mudah dikelola.",
  },
  {
    title: "Aplikasi Driver Realtime Integrasi Sistem Pengiriman",
    tag: "Next.js",
    year: "2026",
    image: "/images/apps.jpeg",
    link: "#",
    summary:
      "Aplikasi driver realtime yang terintegrasi dengan sistem pengiriman untuk memantau status tugas dan proses distribusi secara langsung.",
    description:
      "Aplikasi operasional driver yang terhubung dengan sistem pengiriman untuk membantu monitoring tugas, update status secara realtime, dan meningkatkan efisiensi proses distribusi di lapangan.",
  },
  {
    title: "Landing Page Website Naturawood",
    tag: "Next.js",
    year: "2026",
    image: "/images/naturawood.png",
    link: "https://naturawood.vercel.app/",
    summary:
      "Landing page produk kayu dengan tampilan elegan untuk memperkenalkan brand dan menampilkan katalog layanan secara profesional.",
    description:
      "Website landing page untuk Naturawood dengan desain yang bersih dan natural, difokuskan untuk membangun branding, menampilkan produk, dan meningkatkan kepercayaan calon pelanggan.",
  },
  {
    title: "Website Katalog Furniture Woodenfurn",
    tag: "WordPress",
    year: "2023",
    image: "/images/woodenfurn.png",
    link: "#",
    summary:
      "Website katalog furniture untuk menampilkan produk custom furniture dengan tampilan profesional dan mudah diakses calon customer.",
    description:
      "Website company profile dan katalog furniture dengan fokus pada branding, showcase produk, serta memudahkan calon customer melihat layanan dan melakukan konsultasi.",
  },

  {
    title: "Website Katalog Kaligrafi Elsurayya Art",
    tag: "WordPress",
    year: "2023",
    image: "/images/elsurayyaart.png",
    link: "#",
    summary:
      "Website katalog produk kaligrafi premium untuk menampilkan karya seni ukir dengan tampilan elegan dan eksklusif.",
    description:
      "Website portfolio dan katalog produk kaligrafi dengan desain premium untuk meningkatkan branding, menampilkan koleksi karya, dan mempermudah inquiry customer.",
  },

  {
    title: "Inventory Management FIFO",
    tag: "PHP Native",
    year: "2022",
    image: "/images/fifo.png",
    link: "#",
    summary:
      "Sistem inventory management berbasis web dengan metode FIFO untuk membantu pengelolaan stok barang lebih akurat.",
    description:
      "Aplikasi manajemen inventory dengan fitur stok masuk, stok keluar, laporan persediaan, serta perhitungan metode FIFO untuk efisiensi operasional bisnis.",
  },

  {
    title: "Sistem Pengambil Keputusan Supplier MOORA",
    tag: "PHP Native",
    year: "2022",
    image: "/images/moora.png",
    link: "#",
    summary:
      "Sistem pendukung keputusan untuk menentukan supplier terbaik menggunakan metode MOORA berbasis web.",
    description:
      "Aplikasi decision support system untuk membantu proses seleksi supplier berdasarkan beberapa kriteria seperti harga, kualitas, pelayanan, dan pengiriman.",
  },

  {
    title: "Sistem Bimbel Pracalis",
    tag: "CodeIgniter 4",
    year: "2023",
    image: "/images/pracalis.png",
    link: "#",
    summary:
      "Platform manajemen bimbingan belajar untuk mengelola peserta, materi, konsultasi, dan dashboard admin.",
    description:
      "Sistem informasi bimbingan belajar berbasis web dengan fitur dashboard admin, pengelolaan user, materi pembelajaran, konsultasi, dan monitoring aktivitas.",
  },

  {
    title: "Sistem Pengelola Air Desa",
    tag: "CodeIgniter 4",
    year: "2023",
    image: "/images/air-desa.png",
    link: "#",
    summary:
      "Sistem pengelolaan layanan air desa untuk membantu administrasi pelanggan, tagihan, dan operasional petugas.",
    description:
      "Aplikasi manajemen layanan air desa berbasis web dengan fitur data pelanggan, data petugas, pembayaran tagihan, laporan, dan dashboard monitoring.",
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
  { value: "6", label: "years building digital experiences" },
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
  {
    q: "Apakah saya bisa request revisi selama proses pengerjaan?",
    a: "Bisa. Revisi dilakukan di tahap yang sudah disepakati agar hasil akhir tetap sesuai kebutuhan tanpa membuat proses project menjadi berantakan.",
  },
  {
    q: "Apakah siapdigital bisa membantu domain dan hosting?",
    a: "Bisa. Jika dibutuhkan, siapdigital dapat membantu memberi arahan pembelian domain, setup hosting, hingga proses website siap online.",
  },
  {
    q: "Apakah website yang dibuat bisa dioptimasi untuk SEO?",
    a: "Ya. Struktur dasar website akan dibuat rapi, cepat, dan lebih siap untuk SEO on-page seperti heading, meta information, performa, dan keterbacaan konten.",
  },
  {
    q: "Apakah setelah website selesai masih bisa dibantu maintenance?",
    a: "Bisa. Setelah website selesai, support lanjutan atau maintenance tetap bisa dibicarakan sesuai kebutuhan update, perbaikan, atau pengembangan berikutnya.",
  },
  {
    q: "Bagaimana sistem pembayaran project di siapdigital?",
    a: "Pembayaran biasanya dilakukan bertahap sesuai kesepakatan di awal project, sehingga proses kerja lebih jelas untuk kedua belah pihak dan progress tetap terjaga.",
  },
  {
    q: "Kalau saya belum punya konten lengkap, apakah project tetap bisa dimulai?",
    a: "Bisa. Project tetap dapat dimulai dari arah desain, struktur halaman, dan kebutuhan utama terlebih dahulu, lalu konten bisa dilengkapi sambil proses berjalan.",
  },
];

const marquee = [
  "Aplikasi Mobile",
  "English-Indonesia",
  "Landing Page",
  "Company Profile",
  "Mobile-first",
  "SEO-friendly",
  "Fast-loading Frontend",
  "WhatsApp CTA",
  "Motion yang Halus",
  "Visual Brand Premium",
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

const projectTags = [
  "Semua",
  ...new Set(projects.map((project) => project.tag)),
];

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
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeProjectTag, setActiveProjectTag] = useState("Semua");
  const hasProjectLink =
    selectedProject?.link &&
    selectedProject.link.trim() !== "" &&
    selectedProject.link.trim() !== "#";
  const filteredProjects =
    activeProjectTag === "Semua"
      ? projects
      : projects.filter((project) => project.tag === activeProjectTag);

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
    if (!selectedProject) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, [selectedProject]);

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
                aplikasi, dan sistem custom yang tampil meyakinkan, mudah
                dipakai, dan dirancang sesuai kebutuhan operasional maupun
                target penjualan.
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
                      src="/images/owner.png"
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
                    Owner & Founder SIAPDIGITAL
                  </p>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    Fokus pada website, aplikasi, dan sistem custom yang
                    disusun agar bisnis terlihat lebih profesional dan workflow
                    client berjalan lebih efisien.
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
            <div className="mx-auto max-w-3xl text-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">
                  Portfolio
                </p>
                <h2 className="mt-5 font-display text-4xl font-bold tracking-[-0.05em] sm:text-5xl">
                  Selected portfolio from siapdigital.
                </h2>
              </div>
              <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
                Beberapa contoh arah visual dan presentasi digital yang
                menunjukkan bagaimana siapdigital membantu brand tampil lebih
                kuat, lebih rapi, dan lebih siap meyakinkan client.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {projectTags.map((tag) => {
                const isActive = activeProjectTag === tag;

                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setActiveProjectTag(tag)}
                    className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                      isActive
                        ? "bg-[#141b2b] text-white shadow-[0_14px_30px_rgba(20,27,43,0.18)]"
                        : "bg-surface-low text-muted hover:bg-white hover:text-ink"
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <motion.button
                  key={project.title}
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.7, delay: index * 0.12 }}
                  whileHover={{ y: -10 }}
                  className="group overflow-hidden rounded-[2.2rem] bg-white text-left shadow-[0_24px_50px_rgba(20,27,43,0.08)]"
                >
                  <div className="relative h-[340px] overflow-hidden bg-gray-100 sm:h-[380px]">
                    <div className="flex h-full w-full items-center justify-center p-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="block max-h-full max-w-full object-contain transition duration-700 group-hover:scale-[1.06]"
                      />
                    </div>

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

                    {project.link && project.link.trim() !== "#" ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#141b2b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary"
                      >
                        Demo
                        <ArrowUpRight
                          size={15}
                          className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </a>
                    ) : null}
                  </div>
                </motion.button>
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
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
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

            <div className="mt-12 grid gap-4 lg:grid-cols-2 lg:items-start">
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
            <div className="rounded-[2.5rem] bg-surface-deep p-8 text-white sm:p-10 lg:p-12">
              <div className="mx-auto max-w-4xl text-center">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/60">
                  About siapdigital
                </p>
                <h2 className="mt-5 font-display text-4xl font-bold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                  Brand digital yang dibangun untuk membuat website terasa lebih
                  serius.
                </h2>
                <p className="mt-6 text-base leading-8 text-white/70 sm:text-lg">
                  siapdigital lahir dari kebutuhan untuk menghadirkan website
                  yang tidak hanya terlihat bagus, tetapi juga terasa relevan
                  untuk bisnis. Brand ini dipimpin langsung oleh owner dengan
                  fokus pada visual yang kuat, struktur yang rapi, dan
                  pengalaman digital yang membantu client tampil lebih
                  meyakinkan.
                </p>

                <div className="mx-auto mt-10 max-w-3xl space-y-4 text-left">
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
                  <WhatsAppIcon size={16} />
                </a>
                {/* <a
                  href="https://wa.me/62895426290208"
                  target="_blank"
                  rel="noreferrer"
                  className="ghost-border inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-7 py-4 text-sm font-semibold text-white"
                >
                  Chat on WhatsApp
                </a> */}
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

      {selectedProject ? (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-[#141b2b]/70 px-4 py-8 backdrop-blur-sm">
          <div
            className="absolute inset-0"
            onClick={() => setSelectedProject(null)}
            aria-hidden="true"
          />
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-4xl overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_80px_rgba(20,27,43,0.24)]"
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#141b2b]/82 text-white transition hover:bg-primary"
              aria-label="Close project detail"
            >
              <X size={18} />
            </button>

            <div className="grid max-h-[85vh] overflow-y-auto lg:grid-cols-[1.1fr_0.9fr]">
              <div className="bg-surface-low">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-full min-h-[280px] w-full object-contain object-center bg-neutral-100"
                />
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-8">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-surface-low px-3 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                      {selectedProject.tag}
                    </span>
                    <span className="rounded-full bg-[#141b2b] px-3 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                      {selectedProject.year}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-3xl font-bold tracking-[-0.04em] text-ink">
                    {selectedProject.title}
                  </h3>

                  <p className="mt-6 text-sm leading-7 text-muted sm:text-base">
                    {selectedProject.description}
                  </p>
                </div>

                {hasProjectLink ? (
                  <div className="mt-8">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#141b2b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary"
                    >
                      Direct Link
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
