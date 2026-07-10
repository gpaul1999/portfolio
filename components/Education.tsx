import { awards, certifications, education } from "@/data/site";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" title="Education & Awards">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-border-soft bg-surface p-6">
          <p className="text-xs font-medium uppercase tracking-wide text-muted">
            Education
          </p>
          {education.map((item) => (
            <div key={item.school} className="mt-3">
              <h3 className="font-serif text-lg font-medium leading-snug">
                {item.school}
              </h3>
              <p className="mt-1 text-sm text-muted">{item.degree}</p>
              <p className="mt-1 font-mono text-xs text-muted">{item.period}</p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-border-soft bg-surface p-6">
          <p className="text-xs font-medium uppercase tracking-wide text-muted">
            Certifications
          </p>
          <ul className="mt-3 flex flex-col gap-2">
            {certifications.map((cert) => (
              <li key={cert} className="flex gap-2 text-sm leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {cert}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-border-soft bg-accent-soft p-6">
          <p className="text-xs font-medium uppercase tracking-wide text-accent-strong">
            Honors & Awards
          </p>
          <ul className="mt-3 flex flex-col gap-2">
            {awards.map((award) => (
              <li key={award} className="flex gap-2 text-sm leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {award}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
