import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, projects, site } from "@/lib/content";
import { ProjectCard } from "@/components/project-card";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const isAr = locale === "ar";
  const title = isAr ? "الأعمال والمشاريع | الغيث" : "Work & Projects | Alghaith";
  const description = isAr
    ? "مشاريع أنظمة أعمال وتسليمها: إدارة سكن الموظفين، معامل الخياطات، الخدمات الزراعية، نظافة وخدمات قوى العاملة."
    : "Delivered business system projects: employee housing, sewing workshops, agricultural consulting, cleaning services and workforce operations.";
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/portfolio`,
      languages: {
        ar: "/ar/portfolio",
        en: "/en/portfolio",
        "x-default": "/ar/portfolio",
      },
    },
    openGraph: {
      title,
      description,
      url: `${site.url}/${locale}/portfolio`,
      siteName: isAr ? site.nameAr : site.nameEn,
      locale: isAr ? "ar_YE" : "en_US",
      alternateLocale: isAr ? "en_US" : "ar_YE",
      type: "website",
      images: [
        {
          url: "/brand/og-default.png",
          width: 1200,
          height: 630,
          alt: isAr ? "أعمال الغيث" : "Alghaith work",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/brand/og-default.png"],
    },
  };
}

export default async function PortfolioPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const isAr = locale === "ar";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isAr ? site.nameAr : site.nameEn,
        item: `${site.url}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: isAr ? "الأعمال" : "Work",
        item: `${site.url}/${locale}/portfolio`,
      },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: isAr ? "الأعمال والمشاريع" : "Work & Projects",
    description: isAr
      ? "قائمة أنظمة الأعمال والتطبيقات التي طوّرها الغيث."
      : "A list of business systems and applications built by Alghaith.",
    url: `${site.url}/${locale}/portfolio`,
    inLanguage: locale,
    isPartOf: { "@id": `${site.url}/#website` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: projects.length,
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: isAr ? project.titleAr : project.titleEn,
        url: `${site.url}/${locale}/portfolio/${project.slug}`,
      })),
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, collectionSchema]) }}
      />
      <section className="page-hero">
        <div className="container">
          <span className="kicker">PORTFOLIO</span>
          <h1>{isAr ? "مشاريع حقيقية، لكل مشروع قصة." : "Real projects, each with a story."}</h1>
          <p>
            {isAr
              ? "اختر مشروعًا للاطلاع على الفكرة والنطاق. نستخدم فقط اللقطات الموثقة والمصرح بنشرها، وتُضاف بقية الصور تدريجيًا بعد الإذن."
              : "Open a project to explore its scope and context. Only verified and authorized screenshots are published, with more added progressively."}
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="project-grid portfolio-grid">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} locale={locale} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}