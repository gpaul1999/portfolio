"use client";

import { useEffect, useState } from "react";

type CursorState = {
  x: number;
  y: number;
  visible: boolean;
  hovering: boolean;
};

const interactiveSelector =
  "a, button, input, textarea, select, summary, [role='button']";
const systemUiSelector =
  "nextjs-portal, [data-nextjs-dev-overlay], [data-nextjs-toast], [data-nextjs-dev-tools-button]";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [cursor, setCursor] = useState<CursorState>({
    x: -100,
    y: -100,
    visible: false,
    hovering: false,
  });

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
    if (!enabled) {
      document.documentElement.classList.remove("custom-cursor-active");
      return;
    }

    document.documentElement.classList.add("custom-cursor-active");

    function onPointerMove(event: PointerEvent) {
      const target = event.target as Element | null;
      const path = event.composedPath();
      const isOverSystemUi =
        Boolean(target?.closest(systemUiSelector)) ||
        path.some(
          (node) =>
            node instanceof Element &&
            (node.matches(systemUiSelector) ||
              node.tagName.toLowerCase() === "nextjs-portal"),
        );

      if (isOverSystemUi) {
        document.documentElement.classList.remove("custom-cursor-active");
        setCursor((value) => ({ ...value, visible: false }));
        return;
      }

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
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className={`lego-cursor ${cursor.visible ? "lego-cursor-visible" : ""} ${
        cursor.hovering ? "lego-cursor-hover" : ""
      }`}
      style={{
        transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)`,
      }}
    >
      <img src="/lego-cursor.svg" alt="" width="38" height="38" />
    </div>
  );
}
