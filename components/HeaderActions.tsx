"use client";

import { useEffect, useRef, useState } from "react";
import type { Lang } from "@/lib/i18n";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

type NavLink = {
  href: string;
  label: string;
};

export default function HeaderActions({
  lang,
  links,
}: {
  lang: Lang;
  links: NavLink[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (!menuRef.current?.contains(event.target as Node)) setIsOpen(false);
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div ref={menuRef} className="relative flex items-center gap-1 sm:gap-2">
      <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="nav-link">
            {link.label}
          </a>
        ))}
      </nav>

      <LanguageToggle lang={lang} />
      <ThemeToggle />

      <button
        type="button"
        aria-label="Open navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
        className="group flex h-10 w-10 items-center justify-center rounded-xl border border-border-soft bg-surface text-foreground shadow-soft transition hover:-translate-y-0.5 hover:border-accent/60 hover:bg-surface-2 md:hidden"
      >
        <span className="flex h-4 w-4 flex-col justify-center gap-1">
          <span
            className={`h-0.5 rounded-full bg-current transition ${
              isOpen ? "translate-y-1.5 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 rounded-full bg-current transition ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 rounded-full bg-current transition ${
              isOpen ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      <div
        className={`dropdown-panel right-0 top-12 w-[min(18rem,calc(100vw-2rem))] md:hidden ${
          isOpen ? "dropdown-panel-open" : ""
        }`}
      >
        <div className="grid gap-1 p-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-muted transition hover:bg-accent-soft hover:text-foreground"
            >
              {link.label}
              <span className="translate-x-0 text-accent transition group-hover:translate-x-0.5">
                -&gt;
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
