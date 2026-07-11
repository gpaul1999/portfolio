import { site } from "@/data/site";
import { t, ui, type Lang } from "@/lib/i18n";

export default function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="mt-10 border-t border-border-soft">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 px-4 py-8 text-sm text-muted sm:px-6">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>
          {t(ui.footer.builtWith, lang)}{" "}
          <span className="text-accent">Next.js</span> &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
