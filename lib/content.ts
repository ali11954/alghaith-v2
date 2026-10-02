export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const site = {
  nameAr: "الغيث",
  nameEn: "Alghaith",
  url: "https://alghaithapp.netlify.app",
  locationAr: "الحديدة، اليمن",
  locationEn: "Hodeidah, Yemen",
  email: "alimubark440@gmail.com",
  whatsapp: "967773014017",
  phone: "967711127883",
};

export const services = {
  ar: [
    { title: "أنظمة إدارة الأعمال", text: "أنظمة مخصصة للموارد البشرية، المبيعات، المخزون، السكن، المتعهدين والتشغيل." },
    { title: "تطبيقات الجوال", text: "تطبيقات Android وiOS مرتبطة بالبيانات وأنظمة الأعمال عند الحاجة." },
    { title: "لوحات المعلومات والتقارير", text: "لوحات معلومات وتقارير تشغيلية تساعد الإدارة على المتابعة واتخاذ القرار." },
    { title: "تكامل الأنظمة وواجهات API", text: "ربط الأنظمة الداخلية والخدمات الخارجية وتبادل البيانات بشكل منظم." },
    { title: "البوابات والأنظمة الداخلية", text: "واجهات ويب حديثة للموظفين والعملاء والمشرفين والإدارة." },
    { title: "الصيانة والتطوير", text: "تحسينات مستمرة، إصلاحات، تحديثات ودعم ما بعد التسليم." },
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
    titleAr: "نظام أرض الجوهرة",
    titleEn: "Ard Aljawhara Management System",
    categoryAr: "خدمات النظافة",
    categoryEn: "Cleaning Services",
    summaryAr: "نظام مخصص لتنظيم الأعمال والمهام والمتابعة التشغيلية لخدمات النظافة.",
    summaryEn: "A custom system for organizing operations, tasks, and follow-up for cleaning services.",
    statusAr: "تم التسليم",
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
    titleAr: "نظام طلعت هائل للخدمات الزراعية",
    titleEn: "Talaat Hael Agricultural Services",
    categoryAr: "الاستشارات الزراعية",
    categoryEn: "Agricultural Consulting",
    summaryAr: "نظام رقمي للخدمات والاستشارات الزراعية مع صفحات تشغيلية وتدفقات مخصصة للعمل.",
    summaryEn: "A digital solution for agricultural services and consulting with custom operational workflows.",
    statusAr: "تم التسليم",
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
    titleAr: "منصة الغيث لإدارة إسكان الموظفين",
    titleEn: "Alghaith Employee Housing Management",
    categoryAr: "إدارة السكن والإشغال",
    categoryEn: "Housing & Occupancy",
    summaryAr: "إدارة الموظفين والمباني والغرف والأسرة وطلبات السكن وسجل الإشغال، مع وحدات للأصول والصيانة والمتابعة.",
    summaryEn: "Manage employees, buildings, rooms, beds, housing requests, occupancy history, assets, maintenance, and follow-up.",
    statusAr: "تم التطوير",
    statusEn: "Developed",
    images: ["/projects/housing/housing-safe.png"],
    tags: ["HR", "Occupancy", "Assets", "Maintenance"],
    mediaFit: "contain",
  },
  {
    slug: "sewing-workshop",
    icon: "04",
    titleAr: "نظام إدارة معمل الخياطات",
    titleEn: "Sewing Workshop Management System",
    categoryAr: "إدارة المعمل",
    categoryEn: "Workshop Management",
    summaryAr: "نظام مخصص لمعمل الخياطات، يوفر واجهة موثقة لإدارة العمل والمتابعة.",
    summaryEn: "A custom system for a sewing workshop. A verified login screen is available now; additional screenshots will be added after authorization.",
    statusAr: "تم التطوير",
    statusEn: "Developed",
    images: ["/projects/sewing-workshop/sewing-workshop.png"],
    tags: ["Workshop", "Operations", "Arabic UI"],
    featured: true,
    mediaFit: "contain",
  },
  {
    slug: "workplace-cleanliness",
    icon: "05",
    titleAr: "تطبيق تقييم بيئة العمل والنظافة",
    titleEn: "Workplace Environment & Cleanliness",
    categoryAr: "التقييم والتقارير",
    categoryEn: "Inspection & Reporting",
    summaryAr: "تطبيق لتقييم بيئة العمل والنظافة بدرجات قابلة للتحليل والمتابعة والتقارير.",
    summaryEn: "An inspection workflow for workplace cleanliness and environment scoring, analysis, and reporting.",
    statusAr: "قيد التطوير",
    statusEn: "In Development",
    images: [],
    tags: ["Inspections", "Scoring", "Analytics"],
  },
  {
    slug: "ghithops",
    icon: "06",
    titleAr: "تطبيق الغيث الشامل",
    titleEn: "Alghaith Operations Platform",
    categoryAr: "منصة تشغيلية متكاملة",
    categoryEn: "Integrated Operations Platform",
    summaryAr: "منصة تشغيلية موحدة لإدارة الشركة عبر واجهة API ولوحة ويب وتطبيق جوال، تغطي الموارد البشرية والسكن والأصول والنقل والنظافة والزراعة والمتعهدين والتأمين والتقارير.",
    summaryEn: "A unified operations platform combining an API backend, a web dashboard and a mobile app — covering HR, housing, assets, transport, cleaning, agriculture, contractors, insurance and reporting.",
    statusAr: "تم التطوير",
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


