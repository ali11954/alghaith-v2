import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";
import { isLocale, projects } from "@/lib/content";

type NotFoundProps = { params?: Promise<{ locale: string }> };

async function resolveLocale(params?: Promise<{ locale: string }>): Promise<string> {
  if (params) {
    const { locale } = await params;
    if (isLocale(locale)) return locale;
  }
  const pathname = (await headers()).get("x-next-url") ?? "";
  const first = pathname.split("?")[0].split("/").filter(Boolean)[0];
  return isLocale(first ?? "") ? first : "ar";
}

export async function generateMetadata({ params }: NotFoundProps): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const isAr = locale === "ar";
  return {
    title: isAr ? "الصفحة غير موجودة | الغيث" : "Page not found | Alghaith",
    robots: { index: false, follow: false },
  };
}

export default async function LocaleNotFound({ params }: NotFoundProps) {
  const locale = await resolveLocale(params);
  const isAr = locale === "ar";
  return (
    <main className="not-found">
      <div>
        <span className="kicker">404</span>
        <h1>{isAr ? "الصفحة غير موجودة" : "Page not found"}</h1>
        <p>
          {isAr
            ? "الرابط الذي طلبته غير صحيح أو تم نقله. يمكنك العودة للرئيسية أو تصفح الأعمال."
            : "The page you requested does not exist or has moved. Return home or browse the work."}
        </p>
        <div className="not-found-actions">
          <Link className="btn btn-primary" href={`/${locale}`}>
            {isAr ? "العودة للرئيسية" : "Back home"}
          </Link>
          <Link className="btn btn-ghost" href={`/${locale}/portfolio`}>
            {isAr ? "تصفح الأعمال" : "Browse work"}
          </Link>
        </div>
        <div className="not-found-links">
          {projects.slice(0, 4).map((project) => (
            <Link key={project.slug} href={`/${locale}/portfolio/${project.slug}`}>
              {isAr ? project.titleAr : project.titleEn}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}