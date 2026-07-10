import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import type { Lang } from "./i18n";

export type PostMeta = {
  slug: string;
  title: string;
  date: string; // ISO date
  excerpt: string;
  tags: string[];
  readingMinutes: number;
};

export type Post = PostMeta & { html: string };

function blogDir(lang: Lang) {
  return path.join(process.cwd(), "content", "blog", lang);
}

function estimateReadingMinutes(text: string): number {
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function getPosts(lang: Lang): PostMeta[] {
  const dir = blogDir(lang);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "1970-01-01",
        excerpt: data.excerpt ?? "",
        tags: data.tags ?? [],
        readingMinutes: estimateReadingMinutes(content),
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(lang: Lang, slug: string): Post | null {
  const file = path.join(blogDir(lang), `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "1970-01-01",
    excerpt: data.excerpt ?? "",
    tags: data.tags ?? [],
    readingMinutes: estimateReadingMinutes(content),
    html: marked.parse(content, { async: false }) as string,
  };
}

export function formatDate(iso: string, lang: Lang): string {
  return new Date(iso).toLocaleDateString(lang === "vi" ? "vi-VN" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
