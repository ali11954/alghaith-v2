import type { MetadataRoute } from "next";
import { locales, projects, site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const urls: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    urls.push({
      url: `${site.url}/${locale}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: { ar: `${site.url}/ar`, en: `${site.url}/en` },
      },
    });

    urls.push({
      url: `${site.url}/${locale}/portfolio`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: { ar: `${site.url}/ar/portfolio`, en: `${site.url}/en/portfolio` },
      },
    });

    for (const project of projects) {
      urls.push({
        url: `${site.url}/${locale}/portfolio/${project.slug}`,
        lastModified,
        changeFrequency: project.featured ? "weekly" : "monthly",
        priority: project.featured ? 0.8 : 0.6,
        alternates: {
          languages: {
            ar: `${site.url}/ar/portfolio/${project.slug}`,
            en: `${site.url}/en/portfolio/${project.slug}`,
          },
        },
      });
    }
  }

  return urls;
}