import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { formatDate, getPosts } from "@/lib/blog";
import { isLang, t, ui } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return {
    title: `${t(ui.blog.title, lang)} — Vo Tan Nguyen`,
    description: t(ui.blog.intro, lang),
  };
}

export default async function BlogIndex({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const posts = getPosts(lang);

  return (
    <>
      <Header lang={lang} />
      <main className="flex-1">
        <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
          <h1 className="font-serif text-3xl font-medium sm:text-5xl">
            {t(ui.blog.title, lang)}
          </h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            {t(ui.blog.intro, lang)}
          </p>

          <div className="mt-10 flex flex-col gap-4">
            {posts.map((post) => (
              <a
                key={post.slug}
                href={`/${lang}/blog/${post.slug}`}
                className="surface-lift group rounded-2xl border border-border-soft bg-surface p-6 hover:border-accent sm:p-8"
              >
                <p className="font-mono text-xs text-muted">
                  {formatDate(post.date, lang)} · {post.readingMinutes}{" "}
                  {t(ui.blog.minRead, lang)}
                </p>
                <h2 className="mt-2 font-serif text-2xl font-medium leading-snug group-hover:text-accent">
                  {post.title}
                </h2>
                <p className="mt-3 leading-relaxed text-muted">{post.excerpt}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-accent-soft px-2 py-0.5 font-mono text-xs text-accent-strong"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer lang={lang} />
    </>
  );
}
