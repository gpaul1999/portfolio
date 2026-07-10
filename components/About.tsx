import { about, site } from "@/data/site";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-border-soft bg-surface p-6 md:col-span-2 sm:p-8">
          {about.paragraphs.map((p, i) => (
            <p
              key={i}
              className="mb-4 text-base leading-relaxed text-muted last:mb-0"
            >
              {p}
            </p>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex-1 rounded-2xl border border-border-soft bg-accent-soft p-6">
            <p className="text-xs font-medium uppercase tracking-wide text-accent-strong">
              Based in
            </p>
            <p className="mt-1 font-serif text-lg">{site.location}</p>
          </div>
          <div className="flex-1 rounded-2xl border border-border-soft bg-surface p-6">
            <p className="text-xs font-medium uppercase tracking-wide text-muted">
              Currently
            </p>
            <p className="mt-1 font-serif text-lg">{site.role}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
