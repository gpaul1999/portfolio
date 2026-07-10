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
    <div className="flex items-center rounded-xl border border-border-soft bg-surface p-0.5 text-xs font-medium">
      {(["en", "vi"] as Lang[]).map((code) => (
        <button
          key={code}
          onClick={() => switchTo(code)}
          aria-pressed={lang === code}
          className={`rounded-[10px] px-2.5 py-1.5 uppercase transition-colors ${
            lang === code
              ? "bg-accent text-white"
              : "text-muted hover:text-foreground"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
