import { site } from "@/data/site";
import Section from "./Section";

export default function Contact() {
  const socials = [
    { label: "GitHub", url: site.socials.github },
    { label: "LinkedIn", url: site.socials.linkedin },
    { label: "X / Twitter", url: site.socials.x },
  ].filter((s) => s.url);

  return (
    <Section id="contact" title="Contact">
      <div className="rounded-3xl border border-border-soft bg-accent-soft p-8 text-center sm:p-14">
        <h3 className="font-serif text-2xl font-medium sm:text-4xl">
          Let&apos;s build something together.
        </h3>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
          I&apos;m open to interesting projects and opportunities. The fastest
          way to reach me is by email — I usually reply within a day.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="rounded-xl bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
          >
            {site.email}
          </a>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-border-soft bg-background px-5 py-3 text-sm font-medium transition-colors hover:bg-surface-2"
            >
              {s.label} ↗
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
