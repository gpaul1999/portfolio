"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Lang } from "@/lib/i18n";

export default function LanguageToggle({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(next: Lang) {
    if (next === lang) return;
    document.cookie = `lang=${next};path=/;max-age=31536000`;
    const rest = pathname.replace(/^\/(en|vi)/, "");
    router.push(`/${next}${rest}`);
  }

  return (
    <div
      className="relative flex h-10 items-center rounded-xl border border-border-soft bg-surface p-1 text-xs font-semibold uppercase text-muted shadow-soft"
      aria-label="Language"
    >
      <span
        aria-hidden="true"
        className={`absolute bottom-1 top-1 w-[calc(50%-0.25rem)] rounded-lg bg-accent shadow-soft transition-transform duration-200 ${
          lang === "vi" ? "translate-x-full" : "translate-x-0"
        }`}
      />
      {(["en", "vi"] as Lang[]).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => switchTo(code)}
          aria-pressed={lang === code}
          className={`relative z-10 grid h-8 min-w-9 place-items-center rounded-lg px-2 transition ${
            lang === code ? "text-white" : "hover:text-foreground"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
