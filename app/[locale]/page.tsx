import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, projects, services, site } from "@/lib/content";
import { ProjectCard } from "@/components/project-card";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const isAr = locale === "ar";
  const featured = projects.filter((project) => project.featured).slice(0, 4);

  return (
    <main>
      <section className="hero section-grid">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="kicker">SOFTWARE STUDIO · YEMEN</span>
            <h1>{isAr ? "نبني أنظمة تجعل الأعمال أوضح وأسرع." : "We build software that makes operations clearer and faster."}</h1>
            <p className="hero-lead">
              {isAr
                ? "الغيث يطور أنظمة أعمال وتطبيقات مخصصة تبدأ من فهم إجراءاتك اليومية، ثم تحولها إلى تجربة رقمية واضحة وقابلة للتوسع."
                : "Alghaith turns real business workflows into custom software, dashboards and connected digital experiences that can evolve with the business."}
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href={`/${locale}#contact`}>{isAr ? "ابدأ مشروعك" : "Start a project"}</Link>
              <Link className="btn btn-ghost" href={`/${locale}/portfolio`}>{isAr ? "استكشف الأعمال" : "Explore work"}</Link>
            </div>
            <div className="proof-row">
              <span>{isAr ? "أنظمة حقيقية" : "Real systems"}</span>
              <span>{isAr ? "واجهات حديثة" : "Modern UI"}</span>
              <span>{isAr ? "عربي + English" : "Arabic + English"}</span>
            </div>
          </div>

          <div className="hero-visual" aria-label={isAr ? "معاينة واجهة نظام" : "System interface preview"}>
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="browser-card">
              <div className="browser-top"><span /><span /><span /><b>ALGHAITH / OPERATIONS</b></div>
              <div className="browser-body">
                <aside><i /><i /><i /><i /></aside>
                <div className="dashboard-demo">
                  <div className="demo-line"><span /><span /></div>
                  <div className="metric-grid"><div /><div /><div /></div>
                  <div className="chart-box"><div className="fake-bars" /></div>
                  <div className="table-box"><span /><span /><span /><span /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marquee-band"><div>{isAr ? "أنظمة أعمال · تطبيقات · Dashboards · API · Web Portals · Reports" : "Business Systems · Mobile Apps · Dashboards · APIs · Web Portals · Reporting"}</div></section>

      <section id="services" className="section">
        <div className="container">
          <div className="section-heading">
            <div><span className="kicker">WHAT WE BUILD</span><h2>{isAr ? "من فكرة عملية إلى نظام واضح." : "From a business need to a clear system."}</h2></div>
            <p>{isAr ? "نبدأ من طريقة العمل الفعلية، لا من قالب جاهز." : "We start from the real workflow—not from a generic template."}</p>
          </div>
          <div className="service-grid">
            {services[locale].map((service, index) => (
              <article className="service-card" key={service.title}>
                <span className="service-index">0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span className="card-arrow">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-heading light">
            <div><span className="kicker">SELECTED WORK</span><h2>{isAr ? "أعمال مبنية على احتياجات حقيقية." : "Software built around real business needs."}</h2></div>
            <Link className="text-link light-link" href={`/${locale}/portfolio`}>{isAr ? "كل المشاريع ←" : "All projects →"}</Link>
          </div>
          <div className="project-grid">{featured.map((project) => <ProjectCard key={project.slug} project={project} locale={locale} />)}</div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="container about-grid">
          <div><span className="kicker">THE AL GHAITH APPROACH</span><h2>{isAr ? "نصمم النظام حول العمل، وليس العكس." : "We design the system around the work—not the other way around."}</h2></div>
          <div className="about-copy">
            <p>{isAr ? "الهدف ليس إضافة برنامج جديد إلى شركتك؛ الهدف هو تقليل الخطوات اليدوية، توحيد البيانات، وإعطاء الإدارة صورة أوضح عن العمل." : "The goal is not to add another app to your company. It is to reduce manual steps, unify data, and give management a clearer view of operations."}</p>
            <div className="process-row">
              {(isAr ? ["فهم العمل", "تصميم التجربة", "التطوير", "الاختبار", "التشغيل"] : ["Understand", "Design", "Build", "Test", "Launch"]).map((step, i) => <span key={step}><b>0{i + 1}</b>{step}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section tech-section">
        <div className="container tech-grid">
          <div><span className="kicker">TECHNOLOGY</span><h2>{isAr ? "بنية حديثة، مع قابلية للتوسع." : "Modern foundations, built to evolve."}</h2></div>
          <div className="tech-cloud">{["Next.js", "TypeScript", "React", "PostgreSQL", "Supabase", "REST API", "Python", "Flask", "Vercel", "Render"].map((x) => <span key={x}>{x}</span>)}</div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container contact-box">
          <div><span className="kicker">LET'S BUILD</span><h2>{isAr ? "لديك إجراء يدوي يستحق نظامًا؟" : "Have a workflow that deserves a system?"}</h2><p>{isAr ? "أرسل الفكرة أو المشكلة وسنحوّلها إلى نطاق عمل واضح." : "Share the workflow or problem. We’ll turn it into a clear project scope."}</p></div>
          <div className="contact-actions">
            <a className="btn btn-primary" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a>
            <a className="btn btn-ghost on-dark" href={`mailto:${site.email}`}>{isAr ? "البريد الإلكتروني" : "Email"}</a>
          </div>
        </div>
      </section>

      <footer className="footer"><div className="container footer-grid"><div><strong>{isAr ? site.nameAr : site.nameEn}</strong><p>{isAr ? "Software Studio — الحديدة، اليمن" : "Software Studio — Hodeidah, Yemen"}</p></div><div className="footer-links"><Link href={`/${locale}/portfolio`}>{isAr ? "الأعمال" : "Work"}</Link><Link href={`/${locale}#services`}>{isAr ? "الخدمات" : "Services"}</Link><Link href={`/${locale}#contact`}>{isAr ? "تواصل" : "Contact"}</Link></div><small>© 2026 {isAr ? "الغيث" : "Alghaith"}</small></div></footer>
    </main>
  );
}
