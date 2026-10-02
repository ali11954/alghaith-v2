import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/content";
import { Locale } from "@/lib/content";

export function ProjectCard({ project, locale }: { project: Project; locale: Locale }) {
  const isAr = locale === "ar";
  const title = isAr ? project.titleAr : project.titleEn;
  const hasImage = project.images?.length > 0;
  return (
    <article className="project-card">
      <Link href={`/${locale}/portfolio/${project.slug}`} className={`project-media ${project.mediaFit === "contain" ? "project-media-contain" : ""}`}>
        {hasImage ? (
          <Image src={project.images[0]} alt={title} fill sizes="(max-width: 900px) 100vw, 50vw" />
        ) : (
          <div className="project-pending" aria-label={isAr ? "الصور قيد الإضافة" : "Screenshots pending"}>
            <span className="pending-mark">{project.icon}</span>
            <strong>{isAr ? "اللقطات قيد الإضافة" : "Screenshots pending"}</strong>
            <small>{isAr ? "تُضاف بعد الحصول على الإذن" : "Added after authorization"}</small>
          </div>
        )}
        <span className="media-label">{project.icon}</span>
      </Link>
      <div className="project-body">
        <div className="eyebrow-row">
          <span>{isAr ? project.categoryAr : project.categoryEn}</span>
          <span className="status">{isAr ? project.statusAr : project.statusEn}</span>
        </div>
        <h3>{title}</h3>
        <p>{isAr ? project.summaryAr : project.summaryEn}</p>
        <div className="tag-row">
          {project.tags.map((tag: string) => <span key={tag}>{tag}</span>)}
        </div>
        <div className="project-actions">
          <Link className="text-link" href={`/${locale}/portfolio/${project.slug}`}>
            {isAr ? "دراسة الحالة ←" : "Case study →"}
          </Link>
          {project.liveUrl ? (
            <a className="text-link muted-link" href={project.liveUrl} target="_blank" rel="noreferrer">
              {isAr ? "فتح التطبيق ↗" : "Open app ↗"}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
