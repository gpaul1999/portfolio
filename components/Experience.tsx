import { experience } from "@/data/site";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="flex flex-col gap-4">
        {experience.map((job) => (
          <article
            key={`${job.company}-${job.period}`}
            className="rounded-2xl border border-border-soft bg-surface p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-serif text-lg font-medium">
                {job.role} <span className="text-accent">· {job.company}</span>
              </h3>
              <p className="font-mono text-xs text-muted">{job.period}</p>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {job.description}
            </p>
            {job.tech && (
              <div className="mt-4 flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border-soft bg-background px-2 py-0.5 font-mono text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
