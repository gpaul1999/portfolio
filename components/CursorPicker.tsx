"use client";

import { useEffect, useRef, useState } from "react";

type CursorMode = "native" | "paw" | "neko" | "dino";

const cursorStorageKey = "portfolio-cursor-mode";
const cursorChangeEvent = "portfolio-cursor-mode-change";

const cursorOptions: Array<{
  value: CursorMode;
  label: string;
  previewSrc?: string;
}> = [
  { value: "native", label: "Default" },
  { value: "paw", label: "Paw", previewSrc: "/paw-cursor.png" },
  { value: "neko", label: "Neko", previewSrc: "/neko-cursor.png" },
  { value: "dino", label: "Dino", previewSrc: "/dino-cursor.svg" },
];

function getSavedCursorMode(): CursorMode {
  try {
    const saved = window.localStorage.getItem(cursorStorageKey);
    return cursorOptions.some((option) => option.value === saved)
      ? (saved as CursorMode)
      : "native";
  } catch {
    return "native";
  }
}

function NativeCursorIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5 2l14 12-6.5.9L16 21l-3 1.2-3.4-6.3L5 20V2z" />
    </svg>
  );
}

export default function CursorPicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<CursorMode>("native");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function syncMode() {
      setMode(getSavedCursorMode());
    }

    syncMode();
    window.addEventListener("storage", syncMode);
    window.addEventListener(cursorChangeEvent, syncMode);
    return () => {
      window.removeEventListener("storage", syncMode);
      window.removeEventListener(cursorChangeEvent, syncMode);
    };
  }, []);

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

  function choose(next: CursorMode) {
    setMode(next);
    setIsOpen(false);
    try {
      window.localStorage.setItem(cursorStorageKey, next);
    } catch {
      // Ignore storage failures; the current session still receives the event.
    }
    window.dispatchEvent(
      new CustomEvent(cursorChangeEvent, { detail: { mode: next } }),
    );
  }

  const current = cursorOptions.find((option) => option.value === mode);

  return (
    // The custom cursor only activates on fine pointers ≥768px, so the
    // picker is desktop-only too.
    <div ref={menuRef} className="relative hidden md:block">
      <button
        type="button"
        aria-label="Choose cursor style"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        title="Cursor style"
        onClick={() => setIsOpen((value) => !value)}
        className="flex h-9 w-9 items-center justify-center rounded-xl border border-border-soft bg-surface text-foreground transition hover:-translate-y-0.5 hover:bg-surface-2"
      >
        {current?.previewSrc ? (
          <img src={current.previewSrc} alt="" width={18} height={18} className="h-[18px] w-[18px] object-contain" />
        ) : (
          <NativeCursorIcon />
        )}
      </button>

      <div
        role="listbox"
        aria-label="Cursor style"
        className={`dropdown-panel right-0 top-11 w-36 ${isOpen ? "dropdown-panel-open" : ""}`}
      >
        <div className="grid gap-1 p-1">
          {cursorOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              role="option"
              aria-selected={mode === option.value}
              onClick={() => choose(option.value)}
              className={`flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-medium transition hover:bg-accent-soft hover:text-foreground ${
                mode === option.value ? "bg-accent-soft text-foreground" : "text-muted"
              }`}
            >
              <span className="flex h-5 w-5 items-center justify-center text-accent">
                {option.previewSrc ? (
                  <img src={option.previewSrc} alt="" width={20} height={20} className="h-5 w-5 object-contain" />
                ) : (
                  <NativeCursorIcon />
                )}
              </span>
              {option.label}
              {mode === option.value && (
                <span className="ml-auto text-accent">✓</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
