import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 pb-8 pt-16 sm:px-6 sm:pt-24">
      <div className="rounded-3xl border border-border-soft bg-surface p-8 sm:p-14">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent-strong">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Available for new opportunities
        </p>
        <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
          Hi, I&apos;m {site.name}.
          <br />
          <span className="text-accent">{site.role}.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {site.tagline}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="rounded-xl bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-border-soft bg-background px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface-2"
          >
            Get in touch
          </a>
          {site.resumeUrl && (
            <a
              href={site.resumeUrl}
              className="px-2 py-2.5 text-sm font-medium text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              Resume ↗
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
