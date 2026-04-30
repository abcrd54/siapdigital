export const pageConfigs = {
  home: {
    key: "home",
    path: "/",
    title: "Jasa Website dan Aplikasi untuk UMKM, Brand, dan Bisnis",
    heroBadge: {
      id: "SiapDigital | Website & App Development",
      en: "SiapDigital | Website & App Development",
    },
    heroTitleLines: {
      id: [
        "Website dan aplikasi",
        "untuk brand yang ingin",
        "terlihat lebih profesional dan lebih dipercaya",
      ],
      en: [
        "Websites and apps",
        "for brands that want to",
        "look more professional and more trusted",
      ],
    },
    heroDescription: {
      id: "SiapDigital membantu bisnis membangun website dan aplikasi agar brand terlihat lebih rapi, menambah trust calon customer, dan membuat informasi penting lebih mudah diakses siapa pun.",
      en: "SiapDigital helps businesses build websites and apps that make the brand look more polished, build customer trust, and keep important information easy for anyone to access.",
    },
    heroPrimaryCta: {
      href: "#contact",
      label: { id: "Konsultasi Project", en: "Start A Project" },
    },
    heroSecondaryCta: {
      href: "#packages",
      label: { id: "Lihat Paket", en: "See Packages" },
    },
  },
  jasaWebsiteJepara: {
    key: "jasa-website-jepara",
    path: "/jasa-website-jepara/",
    title: "Jasa Pembuatan Website Jepara",
    heroBadge: { id: "Jasa Pembuatan Website Jepara", en: "Website Service Jepara" },
    heroTitleLines: {
      id: ["Bisnis di Jepara", "butuh website?", "Kami bantu buat yang rapi dan mudah dipakai"],
      en: ["Businesses in Jepara", "need a website?", "We build clean sites that are easy to use"],
    },
    heroDescription: {
      id: "SiapDigital membantu bisnis Jepara punya website yang lebih meyakinkan dan lebih mudah dipakai calon customer.",
      en: "SiapDigital helps businesses in Jepara build more convincing websites that are easier for customers to use.",
    },
    heroPrimaryCta: { href: "#contact", label: { id: "Konsultasi Gratis", en: "Free Consultation" } },
    heroSecondaryCta: { href: "#work", label: { id: "Lihat Hasil Kerja", en: "View Work" } },
  },
  customWebsiteMurahJepara: {
    key: "custom-website-murah-jepara",
    path: "/custom-website-murah-jepara/",
    title: "Custom Website Murah Jepara",
    heroBadge: { id: "Custom Website Murah Jepara", en: "Affordable Custom Website Jepara" },
    heroTitleLines: {
      id: ["Butuh website", "yang lebih rapi", "tanpa biaya yang terasa berat?"],
      en: ["Need a website", "that feels more professional", "without a heavy budget?"],
    },
    heroDescription: {
      id: "Mulai dari paket sederhana dulu. SiapDigital bantu bikin website yang tetap enak dilihat dan mudah dipakai.",
      en: "Start with a simple package. SiapDigital helps you build a site that still looks clean and works well.",
    },
    heroPrimaryCta: { href: "#contact", label: { id: "Tanya Estimasi Harga", en: "Ask For Pricing" } },
    heroSecondaryCta: { href: "#packages", label: { id: "Lihat Paket", en: "See Packages" } },
  },
  landingPageJepara: {
    key: "jasa-landing-page-jepara",
    path: "/jasa-landing-page-jepara/",
    title: "Jasa Landing Page Jepara",
    heroBadge: { id: "Jasa Landing Page Jepara", en: "Landing Page Service Jepara" },
    heroTitleLines: {
      id: ["Mau promosi", "lebih jelas?", "Landing page bisa bantu orang cepat paham dan klik"],
      en: ["Want promotion", "to feel clearer?", "A landing page helps people understand and act faster"],
    },
    heroDescription: {
      id: "Landing page cocok untuk penawaran, campaign, atau iklan yang butuh halaman singkat dan fokus.",
      en: "A landing page is ideal for offers, campaigns, or ads that need a short and focused page.",
    },
    heroPrimaryCta: { href: "#contact", label: { id: "Diskusi Landing Page", en: "Discuss A Landing Page" } },
    heroSecondaryCta: { href: "#work", label: { id: "Lihat Portfolio", en: "View Portfolio" } },
  },
  companyProfileJepara: {
    key: "jasa-company-profile-jepara",
    path: "/jasa-company-profile-jepara/",
    title: "Jasa Website Company Profile Jepara",
    heroBadge: { id: "Website Company Profile Jepara", en: "Company Profile Website Jepara" },
    heroTitleLines: {
      id: ["Company profile", "untuk bisnis", "yang ingin terlihat lebih dipercaya"],
      en: ["Company profile", "for businesses", "that want to look more credible"],
    },
    heroDescription: {
      id: "Tampilkan profil usaha, layanan, portfolio, dan kontak dalam satu website yang rapi.",
      en: "Show your business profile, services, portfolio, and contact details in one clean website.",
    },
    heroPrimaryCta: { href: "#contact", label: { id: "Buat Company Profile", en: "Build A Company Profile" } },
    heroSecondaryCta: { href: "#about", label: { id: "Tentang SiapDigital", en: "About SiapDigital" } },
  },
};

export const serviceLandingLinks = [
  { label: "Jasa Website Jepara", href: "/jasa-website-jepara/" },
  { label: "Custom Website Murah Jepara", href: "/custom-website-murah-jepara/" },
  { label: "Landing Page Jepara", href: "/jasa-landing-page-jepara/" },
  { label: "Company Profile Jepara", href: "/jasa-company-profile-jepara/" },
];

export function getPageConfig(pathname) {
  const normalizedPath = pathname.endsWith("/") ? pathname : `${pathname}/`;

  return (
    Object.values(pageConfigs).find((page) => page.path === normalizedPath) ??
    pageConfigs.home
  );
}
