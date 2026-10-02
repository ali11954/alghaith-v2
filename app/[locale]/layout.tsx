import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales, site } from "@/lib/content";
import { SiteHeader } from "@/components/site-header";

type LocaleParams = Promise<{ locale: string }>;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const isAr = locale === "ar";
  const title = isAr
    ? "الغيث | تصميم وتطوير الأنظمة والتطبيقات حسب الطلب"
    : "Alghaith | Custom Business Systems & Software";
  const description = isAr
    ? "الغيث لتصميم وتطوير الأنظمة والتطبيقات المخصصة للأعمال، لوحات المعلومات، التكاملات والبوابات الإلكترونية."
    : "Alghaith builds custom business systems, dashboards, web portals, integrations and mobile apps.";
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: { ar: "/ar", en: "/en", "x-default": "/ar" },
    },
    openGraph: {
      title,
      description,
      url: `${site.url}/${locale}`,
      siteName: isAr ? site.nameAr : site.nameEn,
      locale: isAr ? "ar_YE" : "en_US",
      alternateLocale: isAr ? "en_US" : "ar_YE",
      type: "website",
      images: [
        {
          url: "/brand/og-default.png",
          width: 1200,
          height: 630,
          alt: isAr ? "الغيث — استوديو برمجيات" : "Alghaith — Software Studio",
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

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: LocaleParams }>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const isAr = locale === "ar";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: isAr ? site.nameAr : site.nameEn,
        alternateName: isAr ? site.nameEn : site.nameAr,
        url: site.url,
        logo: `${site.url}/brand/al-ghayth-mark.png`,
        image: `${site.url}/brand/al-ghayth-logo-dark.png`,
        email: site.email,
        telephone: `+${site.phone}`,
        description: isAr
          ? "استوديو برمجيات في الحديدة، اليمن، يصمم ويطور أنظمة أعمال وتطبيقات مخصصة."
          : "A software studio in Hodeidah, Yemen, designing and building custom business systems and applications.",
        address: {
          "@type": "PostalAddress",
          addressLocality: isAr ? site.locationAr : site.locationEn,
          addressCountry: "YE",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: `+${site.phone}`,
            contactType: "customer service",
            availableLanguage: ["ar", "en"],
          },
          {
            "@type": "ContactPoint",
            telephone: `+${site.whatsapp}`,
            contactType: "sales",
            availableLanguage: ["ar", "en"],
          },
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#service`,
        name: isAr ? site.nameAr : site.nameEn,
        url: site.url,
        image: `${site.url}/brand/al-ghayth-logo-dark.png`,
        parentOrganization: { "@id": `${site.url}/#organization` },
        areaServed: { "@type": "Country", name: "Yemen" },
        availableLanguage: ["ar", "en"],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: `${site.url}/${locale}`,
        name: isAr ? site.nameAr : site.nameEn,
        inLanguage: locale,
        publisher: { "@id": `${site.url}/#organization` },
      },
    ],
  };

  return (
    <div dir={isAr ? "rtl" : "ltr"} lang={locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <a className="skip-link" href="#main">
        {isAr ? "تخطي إلى المحتوى" : "Skip to content"}
      </a>
      <div id="main">
        <SiteHeader locale={locale} />
        {children}
      </div>
    </div>
  );
}