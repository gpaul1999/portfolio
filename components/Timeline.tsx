import { timeline } from "@/data/site";
import { t, ui, type Lang } from "@/lib/i18n";
import Section from "./Section";

function TimelineIcon({ type }: { type: "work" | "education" }) {
  return (
    <span className="absolute -left-[9px] top-8 flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-background bg-accent">
      {type === "education" ? (
        <svg width="9" height="9" viewBox="0 0 24 24" fill="white">
          <path d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
        </svg>
      ) : (
        <span className="h-1.5 w-1.5 rounded-full bg-white" />
      )}
    </span>
  );
}

export default function Timeline({ lang }: { lang: Lang }) {
  return (
    <Section id="experience" title={t(ui.sections.experience, lang)}>
      <div className="relative ml-2 flex flex-col gap-6 border-l-2 border-border-soft pl-6 sm:ml-4 sm:pl-8">
        {timeline.map((item) => (
          <article
            key={`${item.company.en}-${item.period.en}`}
            className="surface-lift relative rounded-2xl border border-border-soft bg-surface p-6 sm:p-8"
          >
            <TimelineIcon type={item.type} />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-serif text-lg font-medium">
                {t(item.role, lang)}{" "}
                <span className="text-accent">· {t(item.company, lang)}</span>
              </h3>
              <p className="font-mono text-xs text-muted">{t(item.period, lang)}</p>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {t(item.description, lang)}
            </p>
            {item.highlights && (
              <ul className="mt-3 flex flex-col gap-1.5">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight.en}
                    className="flex gap-2 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {t(highlight, lang)}
                  </li>
                ))}
              </ul>
            )}
            {item.tech && (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border-soft bg-background px-2 py-0.5 font-mono text-xs text-muted"
                  >
                    {tech}
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
