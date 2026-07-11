import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { StatusBadge } from "@/components/ProductShowcase";
import { products } from "@/data/site";
import { isLang, langs, t, ui } from "@/lib/i18n";

export function generateStaticParams() {
  return langs.flatMap((lang) =>
    products.map((product) => ({ lang, slug: product.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product || !isLang(lang)) return {};
  return {
    title: `${product.name} — Vo Tan Nguyen`,
    description: t(product.tagline, lang),
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isLang(lang)) notFound();
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <>
      <Header lang={lang} />
      <main className="flex-1">
        <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
          <a
            href={`/${lang}#products`}
            className="text-sm font-medium text-muted transition hover:-translate-y-0.5 hover:text-foreground"
          >
            ← {t(ui.products.backToHome, lang)}
          </a>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <h1 className="font-serif text-3xl font-medium sm:text-5xl">
              {product.name}
            </h1>
            <StatusBadge status={product.status} lang={lang} />
          </div>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            {t(product.tagline, lang)}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="action-link rounded-xl bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-strong"
            >
              {t(ui.products.visit, lang)} ↗
            </a>
          </div>

          {product.image && (
            <div className="surface-lift relative mt-10 overflow-hidden rounded-2xl border border-border-soft bg-surface-2">
              <Image
                src={product.image}
                alt={`${product.name} screenshot`}
                width={1376}
                height={768}
                className="h-auto w-full"
                priority
              />
            </div>
          )}

          {/* Meta blocks */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="surface-lift rounded-2xl border border-border-soft bg-surface p-5">
              <p className="text-xs font-medium uppercase text-muted">
                {t(ui.products.role, lang)}
              </p>
              <p className="mt-1 font-serif">{t(product.role, lang)}</p>
            </div>
            <div className="surface-lift rounded-2xl border border-border-soft bg-surface p-5">
              <p className="text-xs font-medium uppercase text-muted">
                {t(ui.products.techStack, lang)}
              </p>
              <p className="mt-1 font-mono text-xs leading-relaxed text-muted">
                {product.tech.join(" · ")}
              </p>
            </div>
          </div>

          <section className="mt-10">
            <p className="leading-relaxed text-muted">{t(product.intro, lang)}</p>
            <p className="mt-4 leading-relaxed text-muted">
              {t(product.description, lang)}
            </p>
          </section>

          <section className="mt-10">
            <h2 className="mb-4 font-serif text-2xl font-medium">
              {t(ui.products.features, lang)}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {product.features.map((feature) => (
                <div
                  key={feature.title.en}
                  className="surface-lift rounded-2xl border border-border-soft bg-surface p-5"
                >
                  <h3 className="font-serif text-lg font-medium">
                    {t(feature.title, lang)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {t(feature.description, lang)}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="mb-4 font-serif text-2xl font-medium">
              {t(ui.products.operations, lang)}
            </h2>
            <ul className="flex flex-col gap-3">
              {product.operations.map((item) => (
                <li key={item.en} className="flex gap-3 leading-relaxed text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {t(item, lang)}
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-12 rounded-3xl border border-border-soft bg-accent-soft p-8 text-center">
            <p className="font-serif text-xl font-medium">{product.name}</p>
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="action-link mt-4 inline-block rounded-xl bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-strong"
            >
              {t(ui.products.visit, lang)} ↗
            </a>
          </div>
        </div>
      </main>
      <Footer lang={lang} />
    </>
  );
}
