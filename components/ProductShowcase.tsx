import Image from "next/image";
import { products, type ProductStatus } from "@/data/site";
import { t, ui, type Lang } from "@/lib/i18n";
import Section from "./Section";

export function StatusBadge({ status, lang }: { status: ProductStatus; lang: Lang }) {
  const label =
    status === "live"
      ? t(ui.products.statusLive, lang)
      : status === "beta"
        ? t(ui.products.statusBeta, lang)
        : t(ui.products.statusBuilding, lang);

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-signal-soft px-2.5 py-0.5 text-xs font-medium text-signal">
      <span
        className={`h-1.5 w-1.5 rounded-full bg-signal ${status === "live" ? "animate-pulse" : ""}`}
      />
      {label}
    </span>
  );
}

export default function ProductShowcase({ lang }: { lang: Lang }) {
  if (products.length === 0) return null;

  return (
    <Section id="products" title={t(ui.sections.products, lang)}>
      <p className="-mt-2 mb-6 max-w-2xl text-sm leading-relaxed text-muted">
        {t(ui.products.intro, lang)}
      </p>
      <div className="flex flex-col gap-4">
        {products.map((product) => (
          <article
            key={product.slug}
            className="surface-lift group grid overflow-hidden rounded-2xl border border-border-soft bg-surface hover:border-accent md:grid-cols-2"
          >
            {product.image && (
              <a
                href={`/${lang}/products/${product.slug}`}
                className="relative min-h-56 overflow-hidden bg-surface-2"
              >
                <Image
                  src={product.image}
                  alt={`${product.name} screenshot`}
                  fill
                  sizes="(min-width: 768px) 32rem, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </a>
            )}
            <div className="flex flex-col p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-serif text-2xl font-medium">{product.name}</h3>
                <StatusBadge status={product.status} lang={lang} />
              </div>
              <p className="mt-1 text-xs font-medium text-accent-strong">
                {t(product.role, lang)}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {t(product.tagline, lang)}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {product.tech.slice(0, 6).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-accent-soft px-2 py-0.5 font-mono text-xs text-accent-strong"
                  >
                    {tech}
                  </span>
                ))}
                {product.tech.length > 6 && (
                  <span className="rounded-md px-2 py-0.5 font-mono text-xs text-muted">
                    +{product.tech.length - 6}
                  </span>
                )}
              </div>
              <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
                <a
                  href={`/${lang}/products/${product.slug}`}
                  className="action-link rounded-xl bg-accent px-4 py-2 text-white hover:bg-accent-strong"
                >
                  {t(ui.products.learnMore, lang)} →
                </a>
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-link rounded-xl border border-border-soft bg-background px-4 py-2 hover:bg-surface-2"
                >
                  {t(ui.products.visit, lang)} ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
