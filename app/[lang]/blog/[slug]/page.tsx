import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { formatDate, getPost, getPosts } from "@/lib/blog";
import { isLang, langs, t, ui } from "@/lib/i18n";

export function generateStaticParams() {
  return langs.flatMap((lang) =>
    getPosts(lang).map((post) => ({ lang, slug: post.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLang(lang)) return {};
  const post = getPost(lang, slug);
  if (!post) return {};
  return {
    title: `${post.title} — Vo Tan Nguyen`,
    description: post.excerpt,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isLang(lang)) notFound();
  const post = getPost(lang, slug);
  if (!post) notFound();

  return (
    <>
      <Header lang={lang} />
      <main className="flex-1">
        <article className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6">
          <a
            href={`/${lang}/blog`}
            className="text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            ← {t(ui.blog.backToBlog, lang)}
          </a>

          <h1 className="mt-6 font-serif text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 font-mono text-xs text-muted">
            {formatDate(post.date, lang)} · {post.readingMinutes}{" "}
            {t(ui.blog.minRead, lang)}
          </p>
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

          <div
            className="prose prose-neutral dark:prose-invert mt-10 max-w-none prose-headings:font-serif prose-headings:font-medium prose-a:text-accent prose-code:before:content-none prose-code:after:content-none"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </main>
      <Footer lang={lang} />
    </>
  );
}
