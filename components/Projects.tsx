import { projects } from "@/data/site";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className={`group flex flex-col rounded-2xl border border-border-soft bg-surface p-6 transition-colors hover:border-accent sm:p-8 ${
              project.featured ? "sm:col-span-2 md:col-span-1" : ""
            }`}
          >
            <h3 className="font-serif text-xl font-medium">{project.title}</h3>
            {project.subtitle && (
              <p className="mt-1 text-xs font-medium text-accent-strong">
                {project.subtitle}
              </p>
            )}
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-accent-soft px-2 py-0.5 font-mono text-xs text-accent-strong"
                >
                  {t}
                </span>
              ))}
            </div>
            {(project.link || project.repo) && (
              <div className="mt-5 flex gap-4 text-sm font-medium">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline-offset-4 hover:underline"
                  >
                    Live demo ↗
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
                  >
                    Source code ↗
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
