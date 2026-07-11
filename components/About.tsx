import { about, site } from "@/data/site";
import { t, ui, type Lang } from "@/lib/i18n";
import Section from "./Section";

export default function About({ lang }: { lang: Lang }) {
  return (
    <Section id="about" title={t(ui.sections.about, lang)}>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="surface-lift rounded-2xl border border-border-soft bg-surface p-6 md:col-span-2 sm:p-8">
          {about.paragraphs.map((p, i) => (
            <p
              key={i}
              className="mb-4 text-base leading-relaxed text-muted last:mb-0"
            >
              {t(p, lang)}
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <div className="surface-lift flex-1 rounded-2xl border border-border-soft bg-accent-soft p-6">
            <p className="text-xs font-medium uppercase text-accent-strong">
              {t(ui.about.basedIn, lang)}
            </p>
            <p className="mt-1 font-serif text-lg">{t(site.location, lang)}</p>
          </div>
          <div className="surface-lift flex-1 rounded-2xl border border-border-soft bg-surface p-6">
            <p className="text-xs font-medium uppercase text-muted">
              {t(ui.about.currently, lang)}
            </p>
            <p className="mt-1 font-serif text-lg">{t(site.role, lang)}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
