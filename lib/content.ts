export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const site = {
  nameAr: "ط§ظ„ط؛ظٹط«",
  nameEn: "Alghaith",
  url: "https://alghaithapp.netlify.app",
  locationAr: "ط§ظ„ط­ط¯ظٹط¯ط©طŒ ط§ظ„ظٹظ…ظ†",
  locationEn: "Hodeidah, Yemen",
  email: "alimubark440@gmail.com",
  whatsapp: "967773014017",
  phone: "967711127883",
};

export const services = {
  ar: [
    { title: "ط£ظ†ط¸ظ…ط© ط¥ط¯ط§ط±ط© ط§ظ„ط£ط¹ظ…ط§ظ„", text: "ط£ظ†ط¸ظ…ط© ظ…ط®طµطµط© ظ„ظ„ظ…ظˆط§ط±ط¯ ط§ظ„ط¨ط´ط±ظٹط©طŒ ط§ظ„ظ…ط¨ظٹط¹ط§طھطŒ ط§ظ„ظ…ط®ط²ظˆظ†طŒ ط§ظ„ط³ظƒظ†طŒ ط§ظ„ظ…طھط¹ظ‡ط¯ظٹظ† ظˆط§ظ„طھط´ط؛ظٹظ„." },
    { title: "طھط·ط¨ظٹظ‚ط§طھ ط§ظ„ط¬ظˆط§ظ„", text: "طھط·ط¨ظٹظ‚ط§طھ Android ظˆiOS ظ…ط±طھط¨ط·ط© ط¨ط¨ظٹط§ظ†ط§طھ ظˆط£ظ†ط¸ظ…ط© ط§ظ„ط£ط¹ظ…ط§ظ„ ط¹ظ†ط¯ ط§ظ„ط­ط§ط¬ط©." },
    { title: "ظ„ظˆط­ط§طھ ط§ظ„ظ…ط¹ظ„ظˆظ…ط§طھ", text: "Dashboards ظˆطھظ‚ط§ط±ظٹط± طھط´ط؛ظٹظ„ظٹط© طھط³ط§ط¹ط¯ ط§ظ„ط¥ط¯ط§ط±ط© ط¹ظ„ظ‰ ط§ظ„ظ…طھط§ط¨ط¹ط© ظˆط§طھط®ط§ط° ط§ظ„ظ‚ط±ط§ط±." },
    { title: "طھظƒط§ظ…ظ„ ط§ظ„ط£ظ†ط¸ظ…ط© ظˆظˆط§ط¬ظ‡ط§طھ API", text: "ط±ط¨ط· ط§ظ„ط£ظ†ط¸ظ…ط© ط§ظ„ط¯ط§ط®ظ„ظٹط© ظˆط§ظ„ط®ط¯ظ…ط§طھ ط§ظ„ط®ط§ط±ط¬ظٹط© ظˆطھط¨ط§ط¯ظ„ ط§ظ„ط¨ظٹط§ظ†ط§طھ ط¨ط´ظƒظ„ ظ…ظ†ط¸ظ…." },
    { title: "ط§ظ„ط¨ظˆط§ط¨ط§طھ ظˆط§ظ„ط£ظ†ط¸ظ…ط© ط§ظ„ط¯ط§ط®ظ„ظٹط©", text: "ظˆط§ط¬ظ‡ط§طھ ظˆظٹط¨ ط­ط¯ظٹط«ط© ظ„ظ„ظ…ظˆط¸ظپظٹظ†طŒ ط§ظ„ط¹ظ…ظ„ط§ط،طŒ ط§ظ„ظ…ط´ط±ظپظٹظ† ظˆط§ظ„ط¥ط¯ط§ط±ط©." },
    { title: "ط§ظ„طµظٹط§ظ†ط© ظˆط§ظ„طھط·ظˆظٹط±", text: "طھط­ط³ظٹظ†ط§طھ ظ…ط³طھظ…ط±ط©طŒ ط¥طµظ„ط§ط­ط§طھطŒ طھط­ط¯ظٹط«ط§طھ ظˆط¯ط¹ظ… ظ„ظ…ط§ ط¨ط¹ط¯ ط§ظ„طھط³ظ„ظٹظ…." },
  ],
  en: [
    { title: "Business Systems", text: "Custom systems for HR, sales, inventory, housing, contractors, and operations." },
    { title: "Mobile Apps", text: "Android and iOS apps connected to business data and workflows when needed." },
    { title: "Dashboards & Reporting", text: "Operational dashboards and reports for monitoring and decision support." },
    { title: "API & Integrations", text: "Connect internal systems and external services with structured data exchange." },
    { title: "Web Portals", text: "Modern browser-based portals for employees, customers, supervisors and management." },
    { title: "Maintenance & Evolution", text: "Ongoing fixes, improvements, updates and post-delivery support." },
  ],
} as const;

export type Project = {
  slug: string;
  icon: string;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  summaryAr: string;
  summaryEn: string;
  statusAr: string;
  statusEn: string;
  images: string[];
  tags: string[];
  liveUrl?: string;
  featured?: boolean;
  mediaFit?: "cover" | "contain";
};

export const projects: Project[] = [
  {
    slug: "earth-aljawhara",
    icon: "01",
    titleAr: "ظ†ط¸ط§ظ… ط£ط±ط¶ ط§ظ„ط¬ظˆظ‡ط±ط©",
    titleEn: "Ard Aljawhara Management System",
    categoryAr: "ط®ط¯ظ…ط§طھ ط§ظ„ظ†ط¸ط§ظپط©",
    categoryEn: "Cleaning Services",
    summaryAr: "ظ†ط¸ط§ظ… ظ…ط®طµطµ ظ„طھظ†ط¸ظٹظ… ط§ظ„ط£ط¹ظ…ط§ظ„ ظˆط§ظ„ظ…ظ‡ط§ظ… ظˆط§ظ„ظ…طھط§ط¨ط¹ط© ط§ظ„طھط´ط؛ظٹظ„ظٹط© ظ„ط®ط¯ظ…ط§طھ ط§ظ„ظ†ط¸ط§ظپط©.",
    summaryEn: "A custom system for organizing operations, tasks, and follow-up for cleaning services.",
    statusAr: "طھظ… ط§ظ„طھط³ظ„ظٹظ…",
    statusEn: "Delivered",
    images: [
      "/projects/earth-aljawhara/earth-aljawhara-01.png",
      "/projects/earth-aljawhara/earth-aljawhara-02.png",
      "/projects/earth-aljawhara/earth-aljawhara-03.png",
      "/projects/earth-aljawhara/earth-aljawhara-04.png",
      "/projects/earth-aljawhara/earth-aljawhara-05.png",
      "/projects/earth-aljawhara/earth-aljawhara-06.png",
      "/projects/earth-aljawhara/earth-aljawhara-07.png",
      "/projects/earth-aljawhara/earth-aljawhara-08.png",
      "/projects/earth-aljawhara/earth-aljawhara-09.png",
    ],
    tags: ["Operations", "Contracts", "Reporting"],
    liveUrl: "https://al-jawhara-app.onrender.com/reports",
    featured: true,
  },
  {
    slug: "talaat-hael",
    icon: "02",
    titleAr: "ظ†ط¸ط§ظ… ط·ظ„ط¹طھ ظ‡ط§ط¦ظ„ ظ„ظ„ط®ط¯ظ…ط§طھ ط§ظ„ط²ط±ط§ط¹ظٹط©",
    titleEn: "Talaat Hael Agricultural Services",
    categoryAr: "ط§ظ„ط§ط³طھط´ط§ط±ط§طھ ط§ظ„ط²ط±ط§ط¹ظٹط©",
    categoryEn: "Agricultural Consulting",
    summaryAr: "ط­ظ„ ط±ظ‚ظ…ظٹ ظ„ظ„ط®ط¯ظ…ط§طھ ظˆط§ظ„ط§ط³طھط´ط§ط±ط§طھ ط§ظ„ط²ط±ط§ط¹ظٹط© ظ…ط¹ طµظپط­ط§طھ طھط´ط؛ظٹظ„ظٹط© ظˆطھط¯ظپظ‚ط§طھ ظ…ط®طµطµط© ظ„ظ„ط¹ظ…ظ„.",
    summaryEn: "A digital solution for agricultural services and consulting with custom operational workflows.",
    statusAr: "طھظ… ط§ظ„طھط³ظ„ظٹظ…",
    statusEn: "Delivered",
    images: [
      "/projects/talaat-hael/talaat-hael-01.png",
      "/projects/talaat-hael/talaat-hael-02.png",
      "/projects/talaat-hael/talaat-hael-03.png",
      "/projects/talaat-hael/talaat-hael-04.png",
      "/projects/talaat-hael/talaat-hael-05.png",
      "/projects/talaat-hael/talaat-hael-06.png",
      "/projects/talaat-hael/talaat-hael-07.png",
      "/projects/talaat-hael/talaat-hael-08.png",
      "/projects/talaat-hael/talaat-hael-09.png",
      "/projects/talaat-hael/talaat-hael-10.png",
      "/projects/talaat-hael/talaat-hael-11.png",
      "/projects/talaat-hael/talaat-hael-12.png",
    ],
    tags: ["Field Services", "Clients", "Operations"],
    liveUrl: "https://ibnhayel-app.onrender.com/",
    featured: true,
  },
  {
    slug: "housing",
    icon: "03",
    titleAr: "ظ…ظ†طµط© ط§ظ„ط؛ظٹط« ظ„ط¥ط¯ط§ط±ط© ط¥ط³ظƒط§ظ† ط§ظ„ظ…ظˆط¸ظپظٹظ†",
    titleEn: "Alghaith Employee Housing Management",
    categoryAr: "ط¥ط¯ط§ط±ط© ط§ظ„ط³ظƒظ† ظˆط§ظ„ط¥ط´ط؛ط§ظ„",
    categoryEn: "Housing & Occupancy",
    summaryAr: "ط¥ط¯ط§ط±ط© ط§ظ„ظ…ظˆط¸ظپظٹظ† ظˆط§ظ„ظ…ط¨ط§ظ†ظٹ ظˆط§ظ„ط؛ط±ظپ ظˆط§ظ„ط£ط³ط±ط© ظˆط·ظ„ط¨ط§طھ ط§ظ„ط³ظƒظ† ظˆط³ط¬ظ„ ط§ظ„ط¥ط´ط؛ط§ظ„طŒ ظ…ط¹ ظˆط­ط¯ط§طھ ظ„ظ„ط£طµظˆظ„ ظˆط§ظ„طµظٹط§ظ†ط© ظˆط§ظ„ظ…طھط§ط¨ط¹ط©.",
    summaryEn: "Manage employees, buildings, rooms, beds, housing requests, occupancy history, assets, maintenance, and follow-up.",
    statusAr: "طھظ… ط§ظ„طھط·ظˆظٹط±",
    statusEn: "Developed",
    images: ["/projects/housing/housing-safe.png"],
    tags: ["HR", "Occupancy", "Assets", "Maintenance"],
    mediaFit: "contain",
  },
  {
    slug: "sewing-workshop",
    icon: "04",
    titleAr: "ظ†ط¸ط§ظ… ط¥ط¯ط§ط±ط© ظ…ط¹ظ…ظ„ ط§ظ„ط®ظٹط§ط·ط§طھ",
    titleEn: "Sewing Workshop Management System",
    categoryAr: "ط¥ط¯ط§ط±ط© ط§ظ„ظ…ط¹ظ…ظ„",
    categoryEn: "Workshop Management",
    summaryAr: "ظ†ط¸ط§ظ… ظ…ط®طµطµ ظ„ظ…ط¹ظ…ظ„ ط§ظ„ط®ظٹط§ط·ط§طھ. طھطھظˆظپط± ط­ط§ظ„ظٹظ‹ط§ ظ„ظ‚ط·ط© ط´ط§ط´ط© ظ…ظˆط«ظ‚ط© ظ„ظˆط§ط¬ظ‡ط© ط§ظ„ط¯ط®ظˆظ„طŒ ظˆطھظڈط¶ط§ظپ ط¨ظ‚ظٹط© ط§ظ„ظ„ظ‚ط·ط§طھ ط¨ط¹ط¯ ط§ظ„ط¥ط°ظ†.",
    summaryEn: "A custom system for a sewing workshop. A verified login screen is available now; additional screenshots will be added after authorization.",
    statusAr: "طھظ… ط§ظ„طھط·ظˆظٹط±",
    statusEn: "Developed",
    images: ["/projects/sewing-workshop/sewing-workshop.png"],
    tags: ["Workshop", "Operations", "Arabic UI"],
    featured: true,
    mediaFit: "contain",
  },
  {
    slug: "workplace-cleanliness",
    icon: "05",
    titleAr: "طھط·ط¨ظٹظ‚ طھظ‚ظٹظٹظ… ط¨ظٹط¦ط© ط§ظ„ط¹ظ…ظ„ ظˆط§ظ„ظ†ط¸ط§ظپط©",
    titleEn: "Workplace Environment & Cleanliness",
    categoryAr: "ط§ظ„طھظ‚ظٹظٹظ… ظˆط§ظ„طھظ‚ط§ط±ظٹط±",
    categoryEn: "Inspection & Reporting",
    summaryAr: "طھط·ط¨ظٹظ‚ ظ„طھظ‚ظٹظٹظ… ط¨ظٹط¦ط© ط§ظ„ط¹ظ…ظ„ ظˆط§ظ„ظ†ط¸ط§ظپط© ط¨ط¯ط±ط¬ط§طھ ظ‚ط§ط¨ظ„ط© ظ„ظ„طھط­ظ„ظٹظ„ ظˆط§ظ„ظ…طھط§ط¨ط¹ط© ظˆط§ظ„طھظ‚ط§ط±ظٹط±.",
    summaryEn: "An inspection workflow for workplace cleanliness and environment scoring, analysis, and reporting.",
    statusAr: "ظ‚ظٹط¯ ط§ظ„طھط·ظˆظٹط±",
    statusEn: "In Development",
    images: [],
    tags: ["Inspections", "Scoring", "Analytics"],
  },
  {
    slug: "ghithops",
    icon: "06",
    titleAr: "طھط·ط¨ظٹظ‚ ط§ظ„ط؛ظٹط« ط§ظ„ط´ط§ظ…ظ„",
    titleEn: "Alghaith Operations Platform",
    categoryAr: "ظ…ظ†طµط© طھط´ط؛ظٹظ„ظٹط© ظ…طھظƒط§ظ…ظ„ط©",
    categoryEn: "Integrated Operations Platform",
    summaryAr: "ظ…ظ†طµط© طھط´ط؛ظٹظ„ظٹط© ظ…ظˆط­ظ‘ط¯ط© ظ„ط¥ط¯ط§ط±ط© ط§ظ„ط´ط±ظƒط© ط¹ط¨ط± ظˆط§ط¬ظ‡ط© API ظˆظ„ظˆط­ط© ظˆظٹط¨ ظˆطھط·ط¨ظٹظ‚ ط¬ظˆط§ظ„طŒ طھط؛ط·ظٹ ط§ظ„ظ…ظˆط§ط±ط¯ ط§ظ„ط¨ط´ط±ظٹط© ظˆط§ظ„ط³ظƒظ† ظˆط§ظ„ط£طµظˆظ„ ظˆط§ظ„ظ†ظ‚ظ„ ظˆط§ظ„ظ†ط¸ط§ظپط© ظˆط§ظ„ط²ط±ط§ط¹ط© ظˆط§ظ„ظ…طھط¹ظ‡ط¯ظٹظ† ظˆط§ظ„طھط£ظ…ظٹظ† ظˆط§ظ„طھظ‚ط§ط±ظٹط±.",
    summaryEn: "A unified operations platform combining an API backend, a web dashboard and a mobile app â€” covering HR, housing, assets, transport, cleaning, agriculture, contractors, insurance and reporting.",
    statusAr: "طھظ… ط§ظ„طھط·ظˆظٹط±",
    statusEn: "Developed",
    images: [
      "/projects/ghithops/ghithops-01.png",
      "/projects/ghithops/ghithops-02.png",
      "/projects/ghithops/ghithops-03.png",
      "/projects/ghithops/ghithops-04.png",
      "/projects/ghithops/ghithops-05.png",
      "/projects/ghithops/ghithops-06.png",
      "/projects/ghithops/ghithops-07.png",
    ],
    tags: ["Django", "Next.js", "Flutter", "REST API"],
    featured: true,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

