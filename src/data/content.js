export const navItemsByLang = {
  id: [
    { label: "Home", href: "#home", id: "home" },
    { label: "Paket", href: "#packages", id: "packages" },
    { label: "Layanan", href: "#services", id: "services" },
    { label: "Portfolio", href: "#work", id: "work" },
    { label: "Tentang", href: "#about", id: "about" },
    { label: "FAQ", href: "#faq", id: "faq" },
    { label: "Kontak", href: "#contact", id: "contact" },
  ],
  en: [
    { label: "Home", href: "#home", id: "home" },
    { label: "Packages", href: "#packages", id: "packages" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Portfolio", href: "#work", id: "work" },
    { label: "About", href: "#about", id: "about" },
    { label: "FAQ", href: "#faq", id: "faq" },
    { label: "Contact", href: "#contact", id: "contact" },
  ],
};

export const siteCopy = {
  id: {
    heroStats: [
      { value: "6+", label: "tahun pengalaman di website dan sistem" },
      { value: "27+", label: "project digital pernah dikerjakan" },
      { value: "12+", label: "brand dan bisnis pernah dibantu" },
    ],
    portfolio: {
      eyebrow: "Portfolio",
      title: "Contoh project yang membantu brand tampil lebih profesional dan lebih meyakinkan.",
      body:
        "Project di bawah ini menunjukkan bagaimana website, landing page, dan sistem yang rapi bisa membuat brand lebih mudah dipahami, lebih dipercaya, dan lebih siap dipresentasikan ke customer.",
      demoLabel: "Demo",
      filterAll: "Semua",
      moreLabel: "Lihat Selengkapnya",
    },
    services: {
      eyebrow: "Kenapa Harus SiapDigital",
      title: "Empat alasan kenapa website dan aplikasi yang rapi bisa mengangkat citra brand bisnis kamu.",
      items: [
        {
          title: "Harga Terbaik",
          body:
            "Scope dibuat jelas dari awal supaya kamu tahu apa yang dibangun dan bagaimana hasilnya akan mendukung citra brand secara lebih profesional.",
        },
        {
          title: "Pengerjaan Cepat",
          body:
            "Project dikerjakan dengan alur ringkas agar brand bisa lebih cepat online, lebih cepat terlihat serius, dan lebih cepat dipakai untuk promosi.",
        },
        {
          title: "Konsultasi Gratis",
          body:
            "Kamu bisa diskusi kebutuhan dulu agar website atau aplikasi yang dibuat benar-benar membantu brand terlihat tepat, jelas, dan meyakinkan.",
        },
        {
          title: "Layanan Lengkap",
          body:
            "Mulai dari landing page, company profile, toko online, sampai sistem custom bisa disiapkan bertahap untuk membuat informasi brand lebih mudah diakses siapa pun.",
        },
      ],
    },
    orderFlow: {
      eyebrow: "Alur Pemesanan",
      title: "Proses kerja dibuat ringkas supaya owner bisnis tahu langkah berikutnya tanpa bingung.",
      body:
        "Mulai dari diskusi awal sampai website siap online, setiap tahap dibuat jelas agar keputusan lebih cepat dan revisi tetap terarah.",
      items: [
        {
          step: "1",
          title: "Diskusi Kebutuhan",
          body:
            "Ceritakan bisnis, tujuan website, referensi yang disukai, dan fitur yang dibutuhkan supaya scope awal langsung jelas.",
        },
        {
          step: "2",
          title: "Penawaran & Arah Desain",
          body:
            "Setelah kebutuhan dipahami, SiapDigital siapkan penawaran, struktur halaman, dan arah visual yang paling relevan.",
        },
        {
          step: "3",
          title: "Proses Build & Revisi",
          body:
            "Website atau sistem mulai dikerjakan bertahap, lalu direview bersama agar hasil akhirnya tetap sesuai kebutuhan bisnis.",
        },
        {
          step: "4",
          title: "Launch & Pendampingan",
          body:
            "Setelah final, project dipublish, dites ulang, lalu dibantu sampai siap dipakai untuk promosi atau operasional.",
        },
      ],
    },
    packages: {
      eyebrow: "Paket Website & Digital Solution",
      title: "Paket yang membantu brand terlihat lebih profesional tanpa membuat owner bisnis bingung memilih.",
      body:
        "Paket dibuat sederhana supaya owner bisnis lebih cepat memilih solusi yang tepat untuk membangun trust, memperjelas informasi brand, dan meningkatkan kesan profesional.",
      cta: "Diskusikan Paket Ini",
      featured: "Paling Laris",
      launchLink: "Lihat Template Portfolio",
      addOnEyebrow: "Add-On Maintenance Bulanan",
      addOnTitle: "Mulai Rp150.000 / bulan",
      addOnBody:
        "Untuk owner yang ingin website tetap aman, terpantau, dan tidak repot urus update kecil sendiri.",
      items: [
        {
          name: "Paket Launch",
          price: "Rp500.000",
          summary: "Untuk usaha kecil yang ingin cepat punya website profesional.",
          features: [
            "1 halaman website modern",
            "Tampilan mobile friendly",
            "Tombol WhatsApp",
            "Google Maps lokasi",
            "Form kontak",
            "Hosting gratis via Vercel",
            "Revisi 1x",
          ],
        },
        {
          name: "Paket Growth",
          price: "Rp900.000",
          summary:
            "Untuk bisnis yang ingin terlihat lebih meyakinkan dan siap menerima customer.",
          features: [
            "Hingga 5 halaman",
            "Desain custom ringan",
            "SEO dasar",
            "WhatsApp auto reply basic",
            "Form leads ke WA / Email",
            "Google Maps",
            "Integrasi Instagram",
            "Revisi 3x",
          ],
          featured: true,
        },
        {
          name: "Paket Prime",
          price: "Rp1.500.000",
          summary:
            "Untuk bisnis yang ingin tampil lebih unggul dari kompetitor.",
          features: [
            "Hingga 10 halaman",
            "UI/UX lebih premium",
            "Bantu copywriting",
            "Blog / artikel",
            "Mini menu chatbot WhatsApp",
            "SEO dasar lengkap",
            "Analytics visitor",
            "Speed optimization",
            "Revisi 5x",
          ],
        },
        {
          name: "Paket Commerce",
          price: "Rp2.500.000",
          summary: "Untuk bisnis yang ingin jualan langsung lewat website sendiri.",
          features: [
            "Website toko online",
            "Upload 20 produk awal",
            "Keranjang belanja",
            "Checkout",
            "Midtrans payment gateway",
            "Voucher promo",
            "WhatsApp order bot basic",
            "Mobile friendly",
            "Training admin",
          ],
        },
        {
          name: "Paket System Pro",
          price: "Mulai Rp4.000.000",
          summary:
            "Untuk bisnis yang butuh booking system, dashboard, atau fitur custom.",
          features: [
            "Login user",
            "Dashboard admin",
            "Booking / reservasi",
            "Database customer",
            "Notifikasi WhatsApp",
            "Laporan data",
            "Midtrans payment opsional",
            "AI WhatsApp assistant opsional",
            "Fitur sesuai kebutuhan",
          ],
        },
      ],
      maintenanceFeatures: [
        "Backup rutin",
        "Monitoring website",
        "Update ringan",
        "Fix error ringan",
        "Support WhatsApp tambahan",
      ],
    },
    testimonials: {
      eyebrow: "Testimoni",
      title: "Komentar yang paling sering kami dengar dari client.",
    },
    faqs: [
      {
        q: "Kalau saya belum punya brief lengkap, apakah project tetap bisa dimulai?",
        a: "Bisa. Cukup mulai dari tujuan bisnis, layanan, dan contoh referensi yang kamu suka. Struktur halaman bisa disusun bersama.",
      },
      {
        q: "Apakah SiapDigital hanya membuat website?",
        a: "Tidak. Selain website, SiapDigital juga bisa membantu landing page, toko online, dashboard admin, booking system, dan fitur custom.",
      },
      {
        q: "Apakah website tetap nyaman dibuka di HP?",
        a: "Ya. Tampilan mobile selalu jadi prioritas karena banyak calon customer datang dari WhatsApp, Instagram, atau Facebook.",
      },
      {
        q: "Apakah saya bisa revisi selama proses pengerjaan?",
        a: "Bisa. Jumlah revisi menyesuaikan paket yang dipilih agar proses tetap rapi dan hasil akhirnya sesuai arah bisnis.",
      },
      {
        q: "Apakah bisa dibantu domain, hosting, dan publish?",
        a: "Bisa. SiapDigital bisa bantu dari setup awal sampai website siap online.",
      },
      {
        q: "Apakah website bisa dioptimasi untuk SEO?",
        a: "Bisa. Struktur dasar, heading, kecepatan, dan keterbacaan akan dibuat lebih siap untuk SEO dasar.",
      },
      {
        q: "Kalau nanti butuh fitur baru, apakah bisa dikembangkan lagi?",
        a: "Bisa. Website atau sistem bisa dikembangkan bertahap sesuai kebutuhan bisnis berikutnya.",
      },
      {
        q: "Apakah ada maintenance setelah website selesai?",
        a: "Ada. Tersedia add-on maintenance bulanan untuk backup, monitoring, update ringan, dan support tambahan.",
      },
    ],
    faqIntro: {
      eyebrow: "FAQ",
      title: "Pertanyaan yang paling sering ditanyakan sebelum mulai project.",
      body: "Jawaban singkat supaya owner bisnis lebih cepat paham alur kerja SiapDigital.",
    },
    about: {
      eyebrow: "Tentang SiapDigital",
      title:
        "SiapDigital membantu brand tampil lebih profesional, lebih dipercaya, dan lebih mudah diakses lewat website dan aplikasi.",
      body:
        "Fokus kami bukan hanya desain bagus. Kami membantu menyusun tampilan, alur, dan informasi agar brand lebih mudah dikenalkan, lebih jelas dipahami, dan lebih meyakinkan saat dilihat calon customer.",
      highlights: [
        "Mulai dari kebutuhan sederhana lalu dikembangkan bertahap sesuai pertumbuhan brand",
        "Desain dibuat mengikuti identitas brand dan tujuan bisnis",
        "Fokus pada tampilan rapi, informasi jelas, dan hasil yang siap dipakai untuk meningkatkan trust",
      ],
      mapLoadingTitle: "Memuat lokasi SiapDigital...",
      mapLoadingBody: "Peta akan tampil sebentar lagi.",
      brandStory: "SiapDigital menggabungkan tampilan yang rapi dengan build yang serius untuk kebutuhan bisnis nyata.",
      whatsappLabel: "WhatsApp",
      emailLabel: "Email",
      addressLabel: "Alamat",
      storyLabel: "Cerita Brand",
    },
    contact: {
      eyebrow: "Mulai Project",
      title: "Butuh website atau aplikasi untuk bisnis kamu?",
      body:
        "Ceritakan kebutuhanmu. SiapDigital akan bantu arahkan solusi yang membuat brand terlihat lebih profesional, lebih dipercaya, dan lebih mudah diakses oleh calon customer.",
      cta: "Konsultasi via WhatsApp",
    },
    footer: {
      body:
        "SiapDigital membantu brand dan bisnis membangun website, landing page, toko online, dan sistem custom agar terlihat lebih profesional, lebih dipercaya, dan lebih mudah diakses.",
      cta: "Diskusi project",
      navTitle: "Navigasi",
      seoTitle: "Layanan SEO",
      locationTitle: "Lokasi",
      locationValue: "Indonesia",
    },
    loader: "Menyiapkan landing page SiapDigital...",
  },
  en: {
    heroStats: [
      { value: "6+", label: "years of experience in websites and systems" },
      { value: "27+", label: "digital projects completed" },
      { value: "12+", label: "brands and businesses supported" },
    ],
    portfolio: {
      eyebrow: "Portfolio",
      title: "Selected work that helps brands look more professional and more convincing.",
      body:
        "These projects show how clean websites, landing pages, and systems can make a brand easier to understand, more trustworthy, and more ready to present to customers.",
      demoLabel: "Demo",
      filterAll: "All",
      moreLabel: "See Full Portfolio",
    },
    services: {
      eyebrow: "Why SiapDigital",
      title: "Four reasons why a cleaner website or app can elevate how your brand is perceived.",
      items: [
        {
          title: "Best Pricing",
          body:
            "The scope is clear from the start so you understand what is being built and how it supports a more professional brand presence.",
        },
        {
          title: "Fast Delivery",
          body:
            "Projects move through a lean process so the brand can go online faster and start looking more established sooner.",
        },
        {
          title: "Free Consultation",
          body:
            "You can discuss your needs first so the website or app truly helps the brand feel clear, credible, and aligned.",
        },
        {
          title: "Complete Service",
          body:
            "From landing pages and company profiles to online stores and custom systems, everything can grow step by step while keeping brand information easy to access.",
        },
      ],
    },
    orderFlow: {
      eyebrow: "Order Flow",
      title: "The process stays simple so business owners always know the next step.",
      body:
        "From the first discussion to launch, each stage is kept clear so decisions move faster and revisions stay focused.",
      items: [
        {
          step: "1",
          title: "Discuss The Need",
          body:
            "Share your business context, goals, preferred references, and required features so the initial scope is clear.",
        },
        {
          step: "2",
          title: "Proposal & Direction",
          body:
            "Once the need is understood, SiapDigital prepares the proposal, page structure, and the most relevant visual direction.",
        },
        {
          step: "3",
          title: "Build & Revision",
          body:
            "The website or system is built step by step, then reviewed together so the final result stays aligned with the business need.",
        },
        {
          step: "4",
          title: "Launch & Handover",
          body:
            "After final approval, the project is published, tested again, and guided until it is ready for promotion or operations.",
        },
      ],
    },
    packages: {
      eyebrow: "Website & Digital Solution Packages",
      title: "Packages that help your brand look more professional without making the decision harder.",
      body:
        "The packages are kept simple so business owners can quickly choose the right setup to improve trust, clarify brand information, and strengthen their professional image.",
      cta: "Discuss This Package",
      featured: "Most Chosen",
      launchLink: "View Portfolio Template",
      addOnEyebrow: "Monthly Maintenance Add-On",
      addOnTitle: "Starting from Rp150.000 / month",
      addOnBody:
        "For owners who want their website monitored and updated without handling small fixes themselves.",
      items: [
        {
          name: "Launch Package",
          price: "Rp500.000",
          summary: "For small businesses that want a professional website fast.",
          features: [
            "1 modern landing page",
            "Mobile-friendly layout",
            "WhatsApp button",
            "Google Maps location",
            "Contact form",
            "Free Vercel hosting",
            "1 revision",
          ],
        },
        {
          name: "Growth Package",
          price: "Rp900.000",
          summary:
            "For businesses that want to look more convincing and ready to receive customers.",
          features: [
            "Up to 5 pages",
            "Light custom design",
            "Basic SEO",
            "Basic WhatsApp auto reply",
            "Lead form to WA / Email",
            "Google Maps",
            "Instagram integration",
            "3 revisions",
          ],
          featured: true,
        },
        {
          name: "Prime Package",
          price: "Rp1.500.000",
          summary:
            "For serious businesses that want to stand out from competitors.",
          features: [
            "Up to 10 pages",
            "More premium UI/UX",
            "Copywriting support",
            "Blog / articles",
            "Mini WhatsApp chatbot menu",
            "Full basic SEO",
            "Visitor analytics",
            "Speed optimization",
            "5 revisions",
          ],
        },
        {
          name: "Commerce Package",
          price: "Rp2.500.000",
          summary: "For businesses that want to sell directly through their own website.",
          features: [
            "Online store website",
            "Upload first 20 products",
            "Shopping cart",
            "Checkout",
            "Midtrans payment gateway",
            "Promo vouchers",
            "Basic WhatsApp order bot",
            "Mobile friendly",
            "Admin training",
          ],
        },
        {
          name: "System Pro Package",
          price: "Starting from Rp4.000.000",
          summary:
            "For businesses that need booking systems, dashboards, or custom features.",
          features: [
            "User login",
            "Admin dashboard",
            "Booking / reservation",
            "Customer database",
            "WhatsApp notifications",
            "Data reports",
            "Optional Midtrans payment",
            "Optional AI WhatsApp assistant",
            "Features based on needs",
          ],
        },
      ],
      maintenanceFeatures: [
        "Routine backup",
        "Website monitoring",
        "Light updates",
        "Light bug fixes",
        "Extra WhatsApp support",
      ],
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "What clients usually say after working with SiapDigital.",
    },
    faqs: [
      {
        q: "Can we start if I do not have a complete brief yet?",
        a: "Yes. We can start from your business goal, service list, and a few references you like. The page structure can be arranged together.",
      },
      {
        q: "Does SiapDigital only build websites?",
        a: "No. Besides websites, SiapDigital can also help with landing pages, online stores, admin dashboards, booking systems, and custom features.",
      },
      {
        q: "Will the website work well on mobile?",
        a: "Yes. Mobile is a priority because many visitors come from WhatsApp, Instagram, and Facebook.",
      },
      {
        q: "Can I request revisions during the process?",
        a: "Yes. The number of revisions depends on the package so the process stays clear and organized.",
      },
      {
        q: "Can you help with domain, hosting, and publishing?",
        a: "Yes. SiapDigital can help from initial setup until the website is live.",
      },
      {
        q: "Can the website be optimized for SEO?",
        a: "Yes. The basic structure, headings, speed, and readability will be prepared for basic SEO.",
      },
      {
        q: "Can the project be expanded later if I need new features?",
        a: "Yes. The website or system can be developed step by step as your business grows.",
      },
      {
        q: "Do you offer maintenance after launch?",
        a: "Yes. There is a monthly maintenance add-on for backups, monitoring, light updates, and extra support.",
      },
    ],
    faqIntro: {
      eyebrow: "FAQ",
      title: "Questions people often ask before starting a project.",
      body: "Short answers so business owners can quickly understand how SiapDigital works.",
    },
    about: {
      eyebrow: "About SiapDigital",
      title:
        "SiapDigital helps brands look more professional, more trusted, and easier to access through websites and apps.",
      body:
        "Our focus is not only on polished visuals. We also shape the page flow, structure, and information so the brand is easier to explain, easier to trust, and easier to reach.",
      highlights: [
        "Start from the essential needs and grow step by step with the brand",
        "Design follows the brand identity and business goal",
        "Focus on clean visuals, clear information, and outcomes that strengthen trust",
      ],
      mapLoadingTitle: "Loading SiapDigital location...",
      mapLoadingBody: "The map will appear shortly.",
      brandStory:
        "SiapDigital combines clean visual direction with solid implementation for real business needs.",
      whatsappLabel: "WhatsApp",
      emailLabel: "Email",
      addressLabel: "Address",
      storyLabel: "Brand Story",
    },
    contact: {
      eyebrow: "Start A Project",
      title: "Need a website or app for your business?",
      body:
        "Tell us what you need. SiapDigital will help point you to the solution that makes your brand look more professional, more trusted, and easier for customers to access.",
      cta: "Consult via WhatsApp",
    },
    footer: {
      body:
        "SiapDigital helps brands and businesses build websites, landing pages, online stores, and custom systems that look more professional, build trust, and stay easy to access.",
      cta: "Discuss your project",
      navTitle: "Navigation",
      seoTitle: "SEO Pages",
      locationTitle: "Location",
      locationValue: "Indonesia",
    },
    loader: "Preparing the SiapDigital landing page...",
  },
};

export const sharedProjectData = {
  projects: [
    {
      title: "Landing Page + Sistem Booking Mini Soccer",
      tag: "Next.js",
      year: "2026",
      image: "/images/minsoc.webp",
      link: "https://booking-minsoc-six.vercel.app/",
      summary: {
        id: "Landing page dan sistem booking untuk membantu reservasi jadi lebih cepat dan lebih jelas.",
        en: "Landing page and booking system built to make reservations faster and clearer.",
      },
      description: {
        id: "Project ini menggabungkan halaman promosi dan alur booking agar user lebih cepat paham layanan lalu langsung melakukan reservasi.",
        en: "This project combines a promo page with a booking flow so users can quickly understand the service and make a reservation.",
      },
    },
    {
      title: "Landing Page + Sistem Booking Klinik",
      tag: "Next.js",
      year: "2026",
      image: "/images/klinik.webp",
      link: "https://klinik-taupe.vercel.app/",
      summary: {
        id: "Website profil klinik dengan sistem booking untuk memudahkan pasien melihat layanan dan memilih jadwal.",
        en: "Clinic profile website with a booking system that helps patients view services and choose schedules.",
      },
      description: {
        id: "Landing page klinik dengan tampilan modern dan alur booking yang lebih mudah dipakai oleh calon pasien.",
        en: "A clinic landing page with a modern look and a booking flow that is easier for patients to use.",
      },
    },
    {
      title: "Landing Page + Sistem Ekspedisi Pengiriman",
      tag: "Next.js",
      year: "2026",
      image: "/images/ekspedisi.webp",
      link: "https://ekspedisi-lokal.vercel.app/",
      summary: {
        id: "Website company profile ekspedisi dengan alur pemesanan yang lebih rapi.",
        en: "Logistics company profile website with a clearer ordering flow.",
      },
      description: {
        id: "Landing page dan sistem ekspedisi yang membantu user mengenal layanan dan mengikuti alur pemesanan lebih mudah.",
        en: "Landing page and logistics system that help users understand the service and follow the order flow more easily.",
      },
    },
    {
      title: "Custom Plugin Transaksi Polyline",
      tag: "WordPress",
      year: "2026",
      image: "/images/custom.webp",
      link: "https://polyline.id/",
      summary: {
        id: "Pengembangan plugin WordPress khusus untuk kebutuhan transaksi yang lebih fleksibel.",
        en: "Custom WordPress plugin built for a more flexible transaction flow.",
      },
      description: {
        id: "Plugin custom ini dibuat untuk menyesuaikan kebutuhan transaksi dan membuat proses operasional lebih efisien.",
        en: "This custom plugin was built to match transaction needs and make operations more efficient.",
      },
    },
    {
      title: "Aplikasi Driver Realtime Integrasi Sistem Pengiriman",
      tag: "Flutter",
      year: "2026",
      image: "/images/apps.webp",
      link: "#",
      summary: {
        id: "Aplikasi operasional driver untuk update status tugas secara realtime.",
        en: "Driver operations app for real-time task status updates.",
      },
      description: {
        id: "Aplikasi ini membantu monitoring tugas driver, update status, dan koordinasi distribusi di lapangan.",
        en: "This app helps monitor driver tasks, status updates, and field distribution coordination.",
      },
    },
    {
      title: "Landing Page Website Naturawood",
      tag: "Next.js",
      year: "2026",
      image: "/images/naturawood.webp",
      link: "https://naturawood.vercel.app/",
      summary: {
        id: "Landing page produk kayu dengan tampilan bersih untuk membangun branding.",
        en: "Wood product landing page with a clean look for stronger branding.",
      },
      description: {
        id: "Website ini difokuskan untuk menampilkan produk, membangun kesan brand, dan memudahkan calon customer bertanya.",
        en: "This website is focused on showcasing products, strengthening the brand, and making customer inquiries easier.",
      },
    },
    {
      title: "Website Katalog Furniture Woodenfurn",
      tag: "WordPress",
      year: "2023",
      image: "/images/woodenfurn.webp",
      link: "#",
      summary: {
        id: "Website katalog furniture untuk menampilkan produk dengan lebih profesional.",
        en: "Furniture catalog website built to present products more professionally.",
      },
      description: {
        id: "Project ini membantu brand menampilkan produk dan layanan custom furniture secara lebih rapi.",
        en: "This project helps the brand present its products and custom furniture services more clearly.",
      },
    },
    {
      title: "Website Katalog Kaligrafi Elsurayya Art",
      tag: "WordPress",
      year: "2023",
      image: "/images/elsurayyaart.webp",
      link: "#",
      summary: {
        id: "Website katalog produk kaligrafi premium dengan nuansa lebih elegan.",
        en: "Premium calligraphy catalog website with a more elegant presentation.",
      },
      description: {
        id: "Website ini dibuat untuk meningkatkan branding, menampilkan koleksi karya, dan memudahkan inquiry customer.",
        en: "This website was built to improve branding, showcase collections, and make customer inquiries easier.",
      },
    },
    {
      title: "Inventory Management FIFO",
      tag: "PHP Native",
      year: "2022",
      image: "/images/fifo.webp",
      link: "#",
      summary: {
        id: "Sistem inventory berbasis web untuk membantu pengelolaan stok lebih akurat.",
        en: "Web-based inventory system that helps manage stock more accurately.",
      },
      description: {
        id: "Aplikasi inventory ini menangani stok masuk, stok keluar, laporan, dan perhitungan FIFO.",
        en: "This inventory app handles incoming stock, outgoing stock, reporting, and FIFO calculations.",
      },
    },
    {
      title: "Sistem Pengambil Keputusan Supplier MOORA",
      tag: "CodeIgniter 4",
      year: "2022",
      image: "/images/moora.webp",
      link: "#",
      summary: {
        id: "Sistem pendukung keputusan untuk membantu memilih supplier terbaik.",
        en: "Decision support system that helps choose the best supplier.",
      },
      description: {
        id: "Aplikasi ini membantu proses seleksi supplier berdasarkan beberapa kriteria penting.",
        en: "This app supports supplier selection based on multiple important criteria.",
      },
    },
    {
      title: "Sistem Bimbel Pracalis",
      tag: "CodeIgniter 4",
      year: "2023",
      image: "/images/pracalis.webp",
      link: "#",
      summary: {
        id: "Platform manajemen bimbel untuk peserta, materi, dan monitoring aktivitas.",
        en: "Learning management platform for students, materials, and activity monitoring.",
      },
      description: {
        id: "Sistem ini membantu admin mengelola user, materi, konsultasi, dan aktivitas pembelajaran.",
        en: "This system helps admins manage users, materials, consultations, and learning activity.",
      },
    },
    {
      title: "Sistem Pengelola Air Desa",
      tag: "Laravel",
      year: "2023",
      image: "/images/air-desa.webp",
      link: "#",
      summary: {
        id: "Sistem pengelolaan layanan air desa untuk pelanggan, tagihan, dan petugas.",
        en: "Village water service management system for customers, billing, and field staff.",
      },
      description: {
        id: "Aplikasi ini menangani data pelanggan, petugas, pembayaran, laporan, dan monitoring layanan air desa.",
        en: "This app handles customer data, staff, payments, reports, and water service monitoring.",
      },
    },
  ],
  testimonials: {
    id: [
      {
        name: "Dimas Pratama",
        role: "Founder",
        company: "Studio Meraki",
        location: "Jepara",
        projectType: "Website Studio Kreatif",
        focus: "Company profile dan presentasi layanan",
        outcome: "Brand terasa lebih rapi dan lebih mudah dijelaskan ke calon client.",
        quote:
          "Yang paling terasa, website kami jadi lebih rapi dan lebih gampang dijelaskan ke calon client saat presentasi.",
      },
      {
        name: "Nadia Kurnia",
        role: "Creative Lead",
        company: "Homa",
        location: "Semarang",
        projectType: "Landing Page Brand",
        focus: "Visual brand dan penyederhanaan pesan",
        outcome: "Tampilan terasa khas brand, bukan template yang generik.",
        quote:
          "Tampilannya terasa dibuat khusus untuk brand kami, bukan template biasa. Itu penting karena kami cukup sensitif soal visual.",
      },
      {
        name: "Rizky Ananta",
        role: "Product Designer",
        company: "Konsultan Produk Digital",
        location: "Yogyakarta",
        projectType: "Website Portofolio Profesional",
        focus: "Struktur halaman dan first impression",
        outcome: "Alur terasa jelas sejak layar pertama dibuka.",
        quote:
          "Alurnya jelas dan hasil akhirnya terlihat profesional sejak pertama dibuka. Orang jadi lebih cepat paham kami menawarkan apa.",
      },
      {
        name: "Tasha Livia",
        role: "Brand Strategist",
        company: "Livia Consulting",
        location: "Bandung",
        projectType: "Landing Page Jasa",
        focus: "Optimasi tampilan mobile",
        outcome: "Pengunjung dari WhatsApp tetap nyaman membaca dan lanjut kontak.",
        quote:
          "Versi mobile-nya nyaman. Itu penting karena banyak traffic datang dari WhatsApp, jadi halaman harus tetap enak dibuka di HP.",
      },
      {
        name: "Bayu Mahesa",
        role: "Independent Developer",
        company: "Bayu Build",
        location: "Solo",
        projectType: "Website Service Profile",
        focus: "Penerjemahan kebutuhan ke struktur halaman",
        outcome: "Diskusi lebih efisien dan keputusan desain jadi cepat.",
        quote:
          "Diskusinya enak dan kebutuhan kami cepat diterjemahkan jadi struktur yang rapi. Jadi revisinya tidak muter-muter.",
      },
      {
        name: "Alicia Dewi",
        role: "Marketing Director",
        company: "Arunika Properti",
        location: "Surabaya",
        projectType: "Website Presentasi Bisnis",
        focus: "Kredibilitas brand untuk presentasi dan promosi",
        outcome: "Brand terasa lebih siap dibawa ke meeting dan materi promosi.",
        quote:
          "Kesan brand kami jadi lebih kuat dan lebih siap untuk presentasi bisnis. Secara visual terasa lebih matang dan meyakinkan.",
      },
    ],
    en: [
      {
        name: "Dimas Pratama",
        role: "Founder",
        company: "Studio Meraki",
        location: "Jepara",
        projectType: "Creative Studio Website",
        focus: "Company profile and service presentation",
        outcome: "The brand feels cleaner and easier to explain to prospective clients.",
        quote:
          "The biggest impact was how much clearer and more presentable our website became during client presentations.",
      },
      {
        name: "Nadia Kurnia",
        role: "Creative Lead",
        company: "Homa",
        location: "Semarang",
        projectType: "Brand Landing Page",
        focus: "Brand visual direction and message clarity",
        outcome: "It feels specific to the brand rather than generic.",
        quote:
          "It felt custom-made for our brand, not just another generic template. That matters a lot when the visual direction is part of the product.",
      },
      {
        name: "Rizky Ananta",
        role: "Product Designer",
        company: "Digital Product Consultant",
        location: "Yogyakarta",
        projectType: "Professional Portfolio Website",
        focus: "Page structure and first impression",
        outcome: "Visitors understand the offer faster from the first screen.",
        quote:
          "The flow is clear and the final result looks professional from the first screen. People understand what we do much faster now.",
      },
      {
        name: "Tasha Livia",
        role: "Brand Strategist",
        company: "Livia Consulting",
        location: "Bandung",
        projectType: "Service Landing Page",
        focus: "Mobile-first presentation",
        outcome: "WhatsApp traffic can browse comfortably before reaching out.",
        quote:
          "The mobile version feels smooth, which matters because most of our traffic comes from WhatsApp and people open the site on their phones first.",
      },
      {
        name: "Bayu Mahesa",
        role: "Independent Developer",
        company: "Bayu Build",
        location: "Solo",
        projectType: "Service Profile Website",
        focus: "Translating requirements into page structure",
        outcome: "Discussion stays efficient and revisions do not drift.",
        quote:
          "The discussion was efficient and our needs were translated into a cleaner structure quickly, so revisions did not go in circles.",
      },
      {
        name: "Alicia Dewi",
        role: "Marketing Director",
        company: "Arunika Properti",
        location: "Surabaya",
        projectType: "Business Presentation Website",
        focus: "Brand credibility for meetings and promotion",
        outcome: "The brand feels more ready for meetings and business decks.",
        quote:
          "Our brand feels stronger and more ready for business presentations now. Visually it feels more mature and more convincing.",
      },
    ],
  },
};
