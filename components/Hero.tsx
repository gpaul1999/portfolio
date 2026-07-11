import { site } from "@/data/site";
import { t, ui, type Lang } from "@/lib/i18n";

export default function Hero({ lang }: { lang: Lang }) {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 pb-8 pt-16 sm:px-6 sm:pt-24">
      <div className="surface-lift relative overflow-hidden rounded-3xl border border-border-soft bg-surface p-8 sm:p-14">
        <div className="absolute right-6 top-6 hidden rounded-2xl border border-border-soft bg-background/70 px-3 py-2 font-mono text-xs text-signal shadow-soft sm:block">
          Java / Kafka / Redis
        </div>
        <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent-strong">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {t(ui.hero.available, lang)}
        </p>
        <h1 className="font-serif text-4xl font-medium leading-tight sm:text-6xl">
          {t(ui.hero.greeting, lang)} {site.name}.
          <br />
          <span className="text-accent">{t(site.role, lang)}.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {t(site.tagline, lang)}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`/${lang}#projects`}
            className="action-link rounded-xl bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-strong"
          >
            <span className="relative">{t(ui.hero.viewWork, lang)}</span>
          </a>
          <a
            href={`/${lang}#contact`}
            className="action-link rounded-xl border border-border-soft bg-background px-5 py-2.5 text-sm font-medium hover:bg-surface-2"
          >
            <span className="relative">{t(ui.hero.getInTouch, lang)}</span>
          </a>
          {site.resumeUrl && (
            <a
              href={site.resumeUrl}
              className="px-2 py-2.5 text-sm font-medium text-muted underline-offset-4 transition hover:-translate-y-0.5 hover:text-foreground hover:underline"
            >
              {t(ui.hero.resume, lang)} ↗
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
