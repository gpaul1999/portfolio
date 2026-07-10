import { site } from "@/data/site";
import { t, ui, type Lang } from "@/lib/i18n";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

export default function Header({ lang }: { lang: Lang }) {
  const links = [
    { href: `/${lang}#about`, label: t(ui.nav.about, lang) },
    { href: `/${lang}#skills`, label: t(ui.nav.skills, lang) },
    { href: `/${lang}#projects`, label: t(ui.nav.projects, lang) },
    { href: `/${lang}#experience`, label: t(ui.nav.experience, lang) },
    { href: `/${lang}/blog`, label: t(ui.nav.blog, lang) },
    { href: `/${lang}#contact`, label: t(ui.nav.contact, lang) },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border-soft bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href={`/${lang}`} className="font-serif text-lg font-semibold tracking-tight">
          {site.name}
        </a>
        <div className="flex items-center gap-1 sm:gap-2">
          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-1.5 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <LanguageToggle lang={lang} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
