import { site } from "@/data/site";
import { t, ui, type Lang } from "@/lib/i18n";
import Section from "./Section";

export default function Contact({ lang }: { lang: Lang }) {
  const socials = [
    { label: "GitHub", url: site.socials.github },
    { label: "LinkedIn", url: site.socials.linkedin },
    { label: "X / Twitter", url: site.socials.x },
  ].filter((s) => s.url);

  return (
    <Section id="contact" title={t(ui.sections.contact, lang)}>
      <div className="surface-lift rounded-3xl border border-border-soft bg-accent-soft p-8 text-center sm:p-14">
        <h3 className="font-serif text-2xl font-medium sm:text-4xl">
          {t(ui.contact.heading, lang)}
        </h3>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
          {t(ui.contact.body, lang)}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="action-link rounded-xl bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-strong"
          >
            {site.email}
          </a>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="action-link rounded-xl border border-border-soft bg-background px-5 py-3 text-sm font-medium hover:bg-surface-2"
            >
              {s.label} ↗
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
