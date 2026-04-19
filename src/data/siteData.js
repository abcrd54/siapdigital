import {
  Clock3,
  MessageCircleMore,
  MonitorSmartphone,
  Wallet,
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Work", href: "#work", id: "work" },
  { label: "Services", href: "#services", id: "services" },
  { label: "FAQ", href: "#faq", id: "faq" },
  { label: "About", href: "#about", id: "about" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const highlights = [
  "Arah visual yang terasa custom, bukan template generik",
  "Struktur website rapi untuk presentasi brand dan kebutuhan bisnis",
  "Eksekusi frontend yang cepat, halus, dan nyaman di semua device",
];

export const projects = [
  {
    title: "Landing Page + Sistem Booking Mini Soccer",
    tag: "Next.js",
    year: "2026",
    image: "/images/minsoc.webp",
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
    image: "/images/klinik.webp",
    link: "https://klinik-taupe.vercel.app/",
    summary:
      "Website profil klinik yang dilengkapi sistem booking untuk memudahkan pasien melihat layanan dan melakukan reservasi secara online.",
    description:
      "Landing page klinik dengan tampilan modern dan alur booking yang jelas agar calon pasien bisa mengenal layanan, memilih jadwal, dan melakukan reservasi dengan lebih cepat dan nyaman.",
  },
  {
    title: "Landing Page + Sistem Ekspedisi Pengiriman",
    tag: "Next.js",
    year: "2026",
    image: "/images/ekspedisi.webp",
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
    image: "/images/custom.webp",
    link: "https://polyline.id/",
    summary:
      "Pengembangan plugin WordPress khusus untuk mendukung kebutuhan transaksi dan alur operasional yang lebih fleksibel.",
    description:
      "Custom plugin WordPress yang dirancang untuk menyesuaikan kebutuhan transaksi pada website Polyline, sehingga proses operasional menjadi lebih efisien, terintegrasi, dan mudah dikelola.",
  },
  {
    title: "Aplikasi Driver Realtime Integrasi Sistem Pengiriman",
    tag: "Flutter",
    year: "2026",
    image: "/images/apps.webp",
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
    image: "/images/naturawood.webp",
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
    image: "/images/woodenfurn.webp",
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
    image: "/images/elsurayyaart.webp",
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
    image: "/images/fifo.webp",
    link: "#",
    summary:
      "Sistem inventory management berbasis web dengan metode FIFO untuk membantu pengelolaan stok barang lebih akurat.",
    description:
      "Aplikasi manajemen inventory dengan fitur stok masuk, stok keluar, laporan persediaan, serta perhitungan metode FIFO untuk efisiensi operasional bisnis.",
  },
  {
    title: "Sistem Pengambil Keputusan Supplier MOORA",
    tag: "CodeIgniter 4",
    year: "2022",
    image: "/images/moora.webp",
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
    image: "/images/pracalis.webp",
    link: "#",
    summary:
      "Platform manajemen bimbingan belajar untuk mengelola peserta, materi, konsultasi, dan dashboard admin.",
    description:
      "Sistem informasi bimbingan belajar berbasis web dengan fitur dashboard admin, pengelolaan user, materi pembelajaran, konsultasi, dan monitoring aktivitas.",
  },
  {
    title: "Sistem Pengelola Air Desa",
    tag: "Laravel",
    year: "2023",
    image: "/images/air-desa.webp",
    link: "#",
    summary:
      "Sistem pengelolaan layanan air desa untuk membantu administrasi pelanggan, tagihan, dan operasional petugas.",
    description:
      "Aplikasi manajemen layanan air desa berbasis web dengan fitur data pelanggan, data petugas, pembayaran tagihan, laporan, dan dashboard monitoring.",
  },
];

export const services = [
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

export const stats = [
  { value: "6", label: "years building digital experiences" },
  { value: "27", label: "selected launches and revamps" },
  { value: "12", label: "brands and founders supported" },
];

export const faqs = [
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

export const marquee = [
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

export const testimonials = [
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

export const desktopTestimonialSlides = Array.from(
  { length: Math.ceil(testimonials.length / 3) },
  (_, index) => testimonials.slice(index * 3, index * 3 + 3),
);

export const projectTags = ["Semua", ...new Set(projects.map((project) => project.tag))];

export const techStacks = [
  "WordPress",
  "PHP",
  "Laravel",
  "CodeIgniter",
  "Next.js",
  "React.js",
  "Vue.js",
  "Flutter",
  "Tailwind CSS",
  "Bootstrap",
];

export const revealUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
