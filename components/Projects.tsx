import { projects } from "@/data/site";
import { t, ui, type Lang } from "@/lib/i18n";
import Section from "./Section";

export default function Projects({ lang }: { lang: Lang }) {
  return (
    <Section id="projects" title={t(ui.sections.projects, lang)}>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.slug}
            className={`surface-lift group flex flex-col rounded-2xl border border-border-soft bg-surface p-6 hover:border-accent sm:p-8 ${
              project.featured ? "sm:col-span-2 md:col-span-1" : ""
            }`}
          >
            <h3 className="font-serif text-xl font-medium">
              {t(project.title, lang)}
            </h3>
            <p className="mt-1 text-xs font-medium text-accent-strong">
              {t(project.subtitle, lang)}
            </p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
              {t(project.description, lang)}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-accent-soft px-2 py-0.5 font-mono text-xs text-accent-strong"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-5 flex gap-4 text-sm font-medium">
              {project.caseStudy && (
                <a
                  href={`/${lang}/projects/${project.slug}`}
                  className="text-accent underline-offset-4 transition hover:-translate-y-0.5 hover:underline"
                >
                  {t(ui.projects.caseStudy, lang)} →
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline-offset-4 transition hover:-translate-y-0.5 hover:underline"
                >
                  {t(ui.projects.liveDemo, lang)} ↗
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted underline-offset-4 transition hover:-translate-y-0.5 hover:text-foreground hover:underline"
                >
                  {t(ui.projects.sourceCode, lang)} ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
