import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/lib/content";

const links = [
  { href: "", ar: "الرئيسية", en: "Home" },
  { href: "#services", ar: "الخدمات", en: "Services" },
  { href: "/portfolio", ar: "أعمالنا", en: "Work" },
  { href: "#about", ar: "عن الغيث", en: "About" },
  { href: "#contact", ar: "تواصل", en: "Contact" },
];

export function SiteHeader({ locale }: { locale: Locale }) {
  const isAr = locale === "ar";
  const otherLocale = isAr ? "en" : "ar";
  const homeHref = `/${locale}`;
  const otherHref = `/${otherLocale}`;

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link className="brand" href={homeHref} aria-label={isAr ? "الغيث الرئيسية" : "Alghaith home"}>
          <Image
            className="brand-logo"
            src="/brand/al-ghayth-logo-dark.png"
            alt={isAr ? "الغيث لتصميم وتطوير الأنظمة والتطبيقات" : "Al Ghayth — Design & Development of Systems & Applications"}
            width={160}
            height={98}
            priority
          />
        </Link>

        <nav className="desktop-nav" aria-label={isAr ? "التنقل الرئيسي" : "Main navigation"}>
          {links.map((link) => (
            <Link key={link.href} href={`${homeHref}${link.href}`}>
              {isAr ? link.ar : link.en}
            </Link>
          ))}
          <Link
            className="lang-switch"
            href={otherHref}
            hrefLang={otherLocale}
            aria-label={isAr ? "Switch to English" : "التبديل إلى العربية"}
          >
            {isAr ? "English" : "العربية"}
          </Link>
        </nav>

        <details className="mobile-menu">
          <summary aria-label={isAr ? "فتح القائمة" : "Open menu"}>
            <span aria-hidden="true">☰</span>
          </summary>
          <nav className="mobile-nav" aria-label={isAr ? "التنقل للجوال" : "Mobile navigation"}>
            {links.map((link) => (
              <Link key={link.href} href={`${homeHref}${link.href}`}>
                {isAr ? link.ar : link.en}
              </Link>
            ))}
            <Link className="lang-switch" href={otherHref} hrefLang={otherLocale}>
              {isAr ? "English" : "العربية"}
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}