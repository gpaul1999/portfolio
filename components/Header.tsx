import { site } from "@/data/site";
import { t, ui, type Lang } from "@/lib/i18n";
import HeaderActions from "./HeaderActions";

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
    <header className="sticky top-0 z-50 border-b border-border-soft bg-background/80 shadow-header backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href={`/${lang}`} className="brand-mark font-serif text-lg font-semibold">
          {site.name}
        </a>
        <HeaderActions lang={lang} links={links} />
      </div>
    </header>
  );
}
