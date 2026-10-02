import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, isLocale, locales, projects, site } from "@/lib/content";

export function generateStaticParams() {
  return locales.flatMap((locale) => projects.map((project) => ({ locale, slug: project.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const project = getProject(slug);
  if (!project) return {};
  const isAr = locale === "ar";
  const title = `${isAr ? project.titleAr : project.titleEn} | Alghaith`;
  const description = isAr ? project.summaryAr : project.summaryEn;
  const image = project.images[0] ?? "/brand/og-default.png";
  return {
    title,
    description,
    keywords: project.tags,
    alternates: {
      canonical: `/${locale}/portfolio/${slug}`,
      languages: {
        ar: `/ar/portfolio/${slug}`,
        en: `/en/portfolio/${slug}`,
        "x-default": `/ar/portfolio/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${site.url}/${locale}/portfolio/${slug}`,
      siteName: isAr ? site.nameAr : site.nameEn,
      locale: isAr ? "ar_YE" : "en_US",
      alternateLocale: isAr ? "en_US" : "ar_YE",
      type: "article",
      images: [{ url: image, alt: isAr ? project.titleAr : project.titleEn }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const found = getProject(slug);
  if (!found) notFound();
  const project = found;
  const isAr = locale === "ar";
  const title = isAr ? project.titleAr : project.titleEn;
  const hasImages = project.images.length > 0;
  const image = project.images[0] ?? "/brand/og-default.png";

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
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `${site.url}/${locale}/portfolio/${slug}`,
      },
    ],
  };

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    description: isAr ? project.summaryAr : project.summaryEn,
    url: `${site.url}/${locale}/portfolio/${slug}`,
    inLanguage: locale,
    image: `${site.url}${image}`,
    thumbnailUrl: `${site.url}${image}`,
    genre: isAr ? project.categoryAr : project.categoryEn,
    keywords: project.tags.join(", "),
    abstract: isAr ? project.summaryAr : project.summaryEn,
    creator: { "@id": `${site.url}/#organization` },
    publisher: { "@id": `${site.url}/#organization` },
    ...(project.liveUrl
      ? {
          subjectOf: {
            "@type": "WebApplication",
            url: project.liveUrl,
            applicationCategory: isAr ? project.categoryAr : project.categoryEn,
            operatingSystem: "Web",
            inLanguage: locale,
          },
        }
      : {}),
  };

  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const previousProject = projects[(projectIndex - 1 + projects.length) % projects.length];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, projectSchema]) }}
      />
      <section className="case-hero">
        <div className="container case-grid">
          <div>
            <span className="kicker">{isAr ? project.categoryAr : project.categoryEn}</span>
            <h1>{title}</h1>
            <p>{isAr ? project.summaryAr : project.summaryEn}</p>
            <div className="tag-row case-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="case-actions">
              {project.liveUrl ? (
                <a className="btn btn-primary" href={project.liveUrl} target="_blank" rel="noreferrer">
                  {isAr ? "فتح التطبيق ↗" : "Open app ↗"}
                </a>
              ) : null}
              <Link className="btn btn-ghost" href={`/${locale}/portfolio`}>
                {isAr ? "كل الأعمال" : "All work"}
              </Link>
            </div>
          </div>
          <div className={`case-shot ${project.mediaFit === "contain" ? "case-shot-contain" : ""}`}>
            {hasImages ? (
              <Image src={project.images[0]} alt={title} fill priority sizes="(max-width: 900px) 100vw, 45vw" />
            ) : (
              <div className="project-pending case-pending">
                <span className="pending-mark">{project.icon}</span>
                <strong>{isAr ? "لقطات المشروع ستُضاف هنا" : "Project screenshots will appear here"}</strong>
                <small>{isAr ? "بعد الحصول على الإذن" : "After authorization"}</small>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container case-content">
          <div>
            <span className="kicker">CASE STUDY</span>
            <h2>{isAr ? "المشروع أولًا، ثم التفاصيل." : "Project first, details second."}</h2>
          </div>
          <div className="case-copy">
            <p>
              {isAr
                ? "نعرض المشروع بما يتوفر من مادة موثقة فقط. تُضاف اللقطات والوظائف والتفاصيل التشغيلية تدريجيًا بعد اعتماد استخدامها للنشر."
                : "The portfolio uses only verified material. Screenshots, workflows, and deeper details are added progressively once they are authorized for publication."}
            </p>
            <div className="case-block">
              <h3>{isAr ? "نطاق العرض الحالي" : "Current showcase"}</h3>
              <ul>
                {(isAr
                  ? [
                      hasImages ? "لقطة شاشة موثقة" : "بانتظار لقطات مصرح بنشرها",
                      "اسم المشروع ووصفه",
                      "تصنيف المشروع ووظائفه العامة",
                    ]
                  : [
                      hasImages ? "Verified screenshot" : "Awaiting authorized screenshots",
                      "Project title and summary",
                      "Project category and high-level scope",
                    ]
                ).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="case-block">
              <h3>{isAr ? "الحالة" : "Status"}</h3>
              <p className="status-line">{isAr ? project.statusAr : project.statusEn}</p>
            </div>
            <div className="case-block">
              <h3>{isAr ? "التقنيات" : "Technology"}</h3>
              <ul>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container case-gallery-heading">
          <div>
            <span className="kicker">SCREENSHOTS</span>
            <h2>{isAr ? "معرض الواجهات" : "Interface gallery"}</h2>
          </div>
        </div>
        <div className="container screenshot-grid">
          {project.images.length ? (
            project.images.map((image, index) => (
              <figure
                className={`screenshot-card ${project.mediaFit === "contain" ? "screenshot-card-contain" : ""}`}
                key={image}
              >
                <Image
                  src={image}
                  alt={`${title} ${index + 1}`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </figure>
            ))
          ) : (
            <div className="gallery-pending">
              <strong>{isAr ? "سنضيف هنا اللقطات المعتمدة تباعًا" : "Authorized screenshots will be added here"}</strong>
              <span>
                {isAr
                  ? "لن نستخدم صورًا غير معتمدة في النسخة المنشورة."
                  : "Unapproved images will not be used in the published version."}
              </span>
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container case-nav case-nav-split">
          {previousProject ? (
            <Link className="text-link" href={`/${locale}/portfolio/${previousProject.slug}`}>
              ← {isAr ? previousProject.titleAr : previousProject.titleEn}
            </Link>
          ) : (
            <span />
          )}
          <Link className="btn btn-primary" href={`/${locale}#contact`}>
            {isAr ? "ناقش مشروعًا مشابهًا" : "Discuss a similar project"}
          </Link>
          {nextProject ? (
            <Link className="text-link" href={`/${locale}/portfolio/${nextProject.slug}`}>
              {isAr ? nextProject.titleAr : nextProject.titleEn} →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </section>
    </main>
  );
}