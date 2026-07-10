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
            {job.highlights && (
              <ul className="mt-3 flex flex-col gap-1.5">
                {job.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
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
