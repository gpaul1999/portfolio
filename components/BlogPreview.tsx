import { formatDate, getPosts } from "@/lib/blog";
import { t, ui, type Lang } from "@/lib/i18n";
import Section from "./Section";

export default function BlogPreview({ lang }: { lang: Lang }) {
  const posts = getPosts(lang).slice(0, 2);
  if (posts.length === 0) return null;

  return (
    <Section id="blog" title={t(ui.sections.blog, lang)}>
      <div className="grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/${lang}/blog/${post.slug}`}
            className="group flex flex-col rounded-2xl border border-border-soft bg-surface p-6 transition-colors hover:border-accent sm:p-8"
          >
            <p className="font-mono text-xs text-muted">
              {formatDate(post.date, lang)} · {post.readingMinutes}{" "}
              {t(ui.blog.minRead, lang)}
            </p>
            <h3 className="mt-2 font-serif text-xl font-medium leading-snug group-hover:text-accent">
              {post.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
              {post.excerpt}
            </p>
            <p className="mt-4 text-sm font-medium text-accent">
              {t(ui.blog.readMore, lang)} →
            </p>
          </a>
        ))}
      </div>
      <div className="mt-6 text-center">
        <a
          href={`/${lang}/blog`}
          className="inline-block rounded-xl border border-border-soft bg-surface px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface-2"
        >
          {t(ui.blog.viewAll, lang)} →
        </a>
      </div>
    </Section>
  );
}
