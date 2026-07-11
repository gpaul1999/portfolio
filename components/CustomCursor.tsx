"use client";

import { useEffect, useState } from "react";

type CursorMode = "native" | "paw" | "neko" | "dino";

type CursorState = {
  x: number;
  y: number;
  visible: boolean;
  hovering: boolean;
};

const cursorStorageKey = "portfolio-cursor-mode";
const cursorChangeEvent = "portfolio-cursor-mode-change";
const cursorModes: CursorMode[] = ["native", "paw", "neko", "dino"];
const interactiveSelector =
  "a, button, input, textarea, select, summary, [role='button']";
const cursorAssets = {
  paw: { src: "/paw-cursor.png", width: 76, height: 76 },
  neko: { src: "/neko-cursor.png", width: 92, height: 92 },
  dino: { src: "/dino-cursor.svg", width: 56, height: 56 },
} satisfies Record<Exclude<CursorMode, "native">, { src: string; width: number; height: number }>;

function getSavedCursorMode(): CursorMode {
  try {
    const saved = window.localStorage.getItem(cursorStorageKey);
    return cursorModes.includes(saved as CursorMode) ? (saved as CursorMode) : "paw";
  } catch {
    return "paw";
  }
}

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<CursorMode>("paw");
  const [cursor, setCursor] = useState<CursorState>({
    x: -100,
    y: -100,
    visible: false,
    hovering: false,
  });

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
    const pointerMedia = window.matchMedia("(pointer: fine)");
    const widthMedia = window.matchMedia("(min-width: 768px)");

    function syncEnabled() {
      setEnabled(pointerMedia.matches && widthMedia.matches);
    }

    syncEnabled();
    pointerMedia.addEventListener("change", syncEnabled);
    widthMedia.addEventListener("change", syncEnabled);

    return () => {
      pointerMedia.removeEventListener("change", syncEnabled);
      widthMedia.removeEventListener("change", syncEnabled);
    };
  }, []);

  useEffect(() => {
    const isCustomCursor = enabled && mode !== "native";

    function syncPortalCursorState(active = isCustomCursor) {
      document.querySelectorAll<HTMLElement>("nextjs-portal").forEach((portal) => {
        if (active) {
          portal.setAttribute("data-portfolio-custom-cursor", "true");
        } else {
          portal.removeAttribute("data-portfolio-custom-cursor");
        }
      });
    }

    if (!isCustomCursor) {
      document.documentElement.classList.remove("custom-cursor-active");
      syncPortalCursorState();
      return;
    }

    document.documentElement.classList.add("custom-cursor-active");
    syncPortalCursorState();

    const portalObserver = new MutationObserver(() => syncPortalCursorState());
    portalObserver.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });

    function onPointerMove(event: PointerEvent) {
      const xRatio = event.clientX / window.innerWidth - 0.5;
      const yRatio = event.clientY / window.innerHeight - 0.5;
      document.documentElement.style.setProperty("--cursor-spot-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-spot-y", `${event.clientY}px`);
      document.documentElement.style.setProperty("--cursor-bg-x", `${xRatio * 28}px`);
      document.documentElement.style.setProperty("--cursor-bg-y", `${yRatio * 18}px`);

      const target = event.target as Element | null;
      document.documentElement.classList.add("custom-cursor-active");
      setCursor({
        x: event.clientX,
        y: event.clientY,
        visible: true,
        hovering: Boolean(target?.closest(interactiveSelector)),
      });
    }

    function onPointerLeave() {
      setCursor((value) => ({ ...value, visible: false }));
    }

    window.addEventListener("pointermove", onPointerMove);
    document.documentElement.addEventListener("pointerleave", onPointerLeave);

    return () => {
      portalObserver.disconnect();
      document.documentElement.classList.remove("custom-cursor-active");
      document.documentElement.style.removeProperty("--cursor-spot-x");
      document.documentElement.style.removeProperty("--cursor-spot-y");
      document.documentElement.style.removeProperty("--cursor-bg-x");
      document.documentElement.style.removeProperty("--cursor-bg-y");
      syncPortalCursorState(false);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [enabled, mode]);

  if (!enabled || mode === "native") return null;

  const asset = cursorAssets[mode];

  return (
    <>
      <div aria-hidden="true" className="cursor-reactive-bg" />
      <div
        aria-hidden="true"
        className={`custom-cursor custom-cursor-${mode} ${
          cursor.visible ? "custom-cursor-visible" : ""
        } ${
          cursor.hovering ? "custom-cursor-hover" : ""
        }`}
        style={{
          transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)`,
        }}
      >
        <img src={asset.src} alt="" width={asset.width} height={asset.height} />
      </div>
    </>
  );
}
