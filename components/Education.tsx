import { awards, certifications } from "@/data/site";
import { t, ui, type Lang } from "@/lib/i18n";
import Section from "./Section";

export default function Education({ lang }: { lang: Lang }) {
  return (
    <Section id="education" title={t(ui.sections.education, lang)}>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="surface-lift rounded-2xl border border-border-soft bg-surface p-6">
          <p className="text-xs font-medium uppercase text-muted">
            {t(ui.education.certifications, lang)}
          </p>
          <ul className="mt-3 flex flex-col gap-2">
            {certifications.map((cert) => (
              <li key={cert.en} className="flex gap-2 text-sm leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {t(cert, lang)}
              </li>
            ))}
          </ul>
        </div>
        <div className="surface-lift rounded-2xl border border-border-soft bg-accent-soft p-6">
          <p className="text-xs font-medium uppercase text-accent-strong">
            {t(ui.education.awards, lang)}
          </p>
          <ul className="mt-3 flex flex-col gap-2">
            {awards.map((award) => (
              <li key={award.en} className="flex gap-2 text-sm leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {t(award, lang)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
