import { skillGroups } from "@/data/site";
import { t, ui, type Lang } from "@/lib/i18n";
import Section from "./Section";

export default function Skills({ lang }: { lang: Lang }) {
  return (
    <Section id="skills" title={t(ui.sections.skills, lang)}>
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title.en}
            className="surface-lift rounded-2xl border border-border-soft bg-surface p-6"
          >
            <h3 className="mb-4 font-serif text-lg font-medium">
              {t(group.title, lang)}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-border-soft bg-background px-3 py-1 text-sm text-muted transition hover:border-accent/60 hover:bg-accent-soft hover:text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
