import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { diagramBySlug } from "@/components/diagrams";
import { projects } from "@/data/site";
import { isLang, langs, t, ui } from "@/lib/i18n";

export function generateStaticParams() {
  return langs.flatMap((lang) =>
    projects
      .filter((p) => p.caseStudy)
      .map((p) => ({ lang, slug: p.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project || !isLang(lang)) return {};
  return {
    title: `${t(project.title, lang)} — Vo Tan Nguyen`,
    description: t(project.description, lang),
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isLang(lang)) notFound();
  const project = projects.find((p) => p.slug === slug);
  if (!project?.caseStudy) notFound();

  const study = project.caseStudy;
  const Diagram = diagramBySlug[slug];

  return (
    <>
      <Header lang={lang} />
      <main className="flex-1">
        <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
          <a
            href={`/${lang}#projects`}
            className="text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            ← {t(ui.projects.backToProjects, lang)}
          </a>

          <h1 className="mt-6 font-serif text-3xl font-medium tracking-tight sm:text-5xl">
            {t(project.title, lang)}
          </h1>
          <p className="mt-3 text-accent-strong">{t(project.subtitle, lang)}</p>

          {/* Meta blocks */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-border-soft bg-surface p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-muted">
                {t(ui.projects.role, lang)}
              </p>
              <p className="mt-1 font-serif">{t(study.role, lang)}</p>
            </div>
            <div className="rounded-2xl border border-border-soft bg-surface p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-muted">
                {t(ui.projects.team, lang)}
              </p>
              <p className="mt-1 font-serif">{t(study.team, lang)}</p>
            </div>
            <div className="rounded-2xl border border-border-soft bg-surface p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-muted">
                {t(ui.projects.techStack, lang)}
              </p>
              <p className="mt-1 font-mono text-xs leading-relaxed text-muted">
                {project.tech.join(" · ")}
              </p>
            </div>
          </div>

          {/* Architecture diagram */}
          {Diagram && (
            <section className="mt-10">
              <h2 className="mb-4 font-serif text-2xl font-medium">
                {t(ui.projects.architecture, lang)}
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-border-soft bg-surface p-4 sm:p-8">
                <Diagram />
              </div>
            </section>
          )}

          <section className="mt-10">
            <h2 className="mb-3 font-serif text-2xl font-medium">
              {t(ui.projects.context, lang)}
            </h2>
            <p className="leading-relaxed text-muted">{t(study.context, lang)}</p>
          </section>

          <section className="mt-10">
            <h2 className="mb-3 font-serif text-2xl font-medium">
              {t(ui.projects.problem, lang)}
            </h2>
            <p className="leading-relaxed text-muted">{t(study.problem, lang)}</p>
          </section>

          <section className="mt-10">
            <h2 className="mb-3 font-serif text-2xl font-medium">
              {t(ui.projects.solution, lang)}
            </h2>
            <ul className="flex flex-col gap-3">
              {study.solution.map((item) => (
                <li key={item.en} className="flex gap-3 leading-relaxed text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {t(item, lang)}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="mb-4 font-serif text-2xl font-medium">
              {t(ui.projects.results, lang)}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {study.results.map((result) => (
                <div
                  key={result.en}
                  className="rounded-2xl border border-border-soft bg-accent-soft p-5 text-sm leading-relaxed"
                >
                  {t(result, lang)}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer lang={lang} />
    </>
  );
}
