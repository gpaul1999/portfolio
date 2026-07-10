"use client";

import { useEffect } from "react";

const STYLE_ID = "portfolio-next-devtools-polish";
const ENHANCED_ATTR = "data-portfolio-select-enhanced";
const SELECT_OPEN_ATTR = "data-portfolio-select-open";

const devtoolsCss = `
  :host {
    --portfolio-bg: #faf9f5;
    --portfolio-surface: #f0eee6;
    --portfolio-surface-2: #e8e5da;
    --portfolio-border: #dcd9cd;
    --portfolio-text: #141413;
    --portfolio-muted: #6e6b5e;
    --portfolio-accent: #d97757;
    --portfolio-accent-soft: #f3e0d8;
    --portfolio-shadow: 0 18px 44px rgba(52, 45, 35, 0.16);
  }

  #nextjs-dev-tools-menu,
  .panel-content-container {
    border: 1px solid color-mix(in srgb, var(--portfolio-border) 88%, transparent) !important;
    border-radius: 16px !important;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.78), rgba(250, 249, 245, 0.94)),
      var(--portfolio-bg) !important;
    box-shadow: var(--portfolio-shadow) !important;
    color: var(--portfolio-text) !important;
    overflow: hidden !important;
    backdrop-filter: blur(18px);
  }

  #nextjs-dev-tools-menu {
    padding: 6px !important;
  }

  .dev-tools-indicator-footer {
    margin: 6px -6px -6px !important;
    padding: 6px !important;
    border-top: 1px solid var(--portfolio-border) !important;
    background: color-mix(in srgb, var(--portfolio-surface) 70%, transparent) !important;
  }

  .dev-tools-indicator-item {
    min-height: 36px !important;
    padding: 0 10px !important;
    border-radius: 10px !important;
    color: var(--portfolio-muted) !important;
    transition:
      background 160ms ease,
      color 160ms ease,
      transform 160ms ease !important;
  }

  .dev-tools-indicator-item:hover,
  .dev-tools-indicator-item[data-selected="true"] {
    background: var(--portfolio-accent-soft) !important;
    color: var(--portfolio-text) !important;
    transform: translateY(-1px);
  }

  .dev-tools-indicator-label,
  .dev-tools-indicator-value,
  .preference-description {
    color: inherit !important;
  }

  .dev-tools-indicator-value {
    color: var(--portfolio-accent) !important;
    font-weight: 600 !important;
  }

  [data-nextjs-dev-tools-button] {
    box-shadow: 0 10px 24px rgba(52, 45, 35, 0.16) !important;
    transition:
      box-shadow 160ms ease,
      transform 160ms ease !important;
  }

  [data-nextjs-dev-tools-button]:hover {
    transform: translateY(-1px);
    box-shadow: 0 14px 32px rgba(52, 45, 35, 0.2) !important;
  }

  .panel-content-container > div:first-child > div:first-child {
    border-bottom: 1px solid var(--portfolio-border) !important;
    background: color-mix(in srgb, var(--portfolio-surface) 76%, transparent) !important;
  }

  .panel-content-container h3,
  .preference-header label,
  .preference-header > label,
  .preference-header label + p {
    color: var(--portfolio-text) !important;
  }

  .preference-section {
    border-bottom: 1px solid color-mix(in srgb, var(--portfolio-border) 72%, transparent) !important;
    padding-block: 14px !important;
  }

  .select-button,
  .action-button,
  .shortcut-recorder-button {
    position: relative !important;
    min-height: 34px !important;
    border: 1px solid var(--portfolio-border) !important;
    border-radius: 10px !important;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.68), rgba(240, 238, 230, 0.9)),
      var(--portfolio-surface) !important;
    color: var(--portfolio-text) !important;
    box-shadow: 0 1px 0 rgba(20, 20, 19, 0.04) !important;
    transition:
      border-color 160ms ease,
      box-shadow 160ms ease,
      transform 160ms ease,
      background 160ms ease !important;
  }

  .select-button:hover,
  .action-button:hover,
  .shortcut-recorder-button:hover {
    border-color: color-mix(in srgb, var(--portfolio-accent) 72%, var(--portfolio-border)) !important;
    background: var(--portfolio-accent-soft) !important;
    box-shadow: 0 10px 24px rgba(52, 45, 35, 0.12) !important;
    transform: translateY(-1px);
  }

  .select-button select {
    pointer-events: none !important;
    position: absolute !important;
    inset: 0 !important;
    width: 100% !important;
    height: 100% !important;
    opacity: 0 !important;
  }

  .select-button:not([${ENHANCED_ATTR}="true"]) svg,
  .action-button svg {
    color: var(--portfolio-accent) !important;
  }

  .dev-tools-info-close-button {
    border-radius: 10px !important;
    transition:
      background 160ms ease,
      transform 160ms ease !important;
  }

  .dev-tools-info-close-button:hover {
    background: var(--portfolio-accent-soft) !important;
    transform: rotate(4deg);
  }

  .select-button[${ENHANCED_ATTR}="true"] {
    min-width: var(--portfolio-select-width, 116px) !important;
    overflow: visible !important;
  }

  .select-button[${SELECT_OPEN_ATTR}="true"] {
    z-index: 1000 !important;
  }

  .select-button[${ENHANCED_ATTR}="true"] > svg {
    display: none !important;
  }

  .portfolio-devtools-select-trigger {
    position: absolute;
    inset: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
    min-width: 100%;
    padding: 0 11px;
    border: 0;
    border-radius: inherit;
    background: transparent;
    color: var(--portfolio-text);
    font: inherit;
    font-weight: 700;
    text-align: left;
    cursor: pointer;
  }

  .portfolio-devtools-select-value {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .portfolio-devtools-select-caret {
    flex: none;
    color: var(--portfolio-accent);
    transition: transform 160ms ease;
  }

  .select-button[${SELECT_OPEN_ATTR}="true"] .portfolio-devtools-select-caret {
    transform: rotate(180deg);
  }

  .portfolio-devtools-select-menu {
    position: absolute;
    z-index: 1001;
    top: calc(100% + 6px);
    right: 0;
    min-width: max(100%, 150px);
    overflow: hidden;
    padding: 5px;
    border: 1px solid var(--portfolio-border);
    border-radius: 12px;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.86), rgba(250, 249, 245, 0.96)),
      var(--portfolio-bg);
    box-shadow: var(--portfolio-shadow);
    opacity: 0;
    pointer-events: none;
    transform: translateY(-4px) scale(0.98);
    transform-origin: top right;
    transition:
      opacity 140ms ease,
      transform 140ms ease;
    backdrop-filter: blur(18px);
  }

  .select-button[${SELECT_OPEN_ATTR}="true"] .portfolio-devtools-select-menu {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0) scale(1);
  }

  .portfolio-devtools-select-option {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 8px 9px;
    border: 0;
    border-radius: 9px;
    background: transparent;
    color: var(--portfolio-muted);
    font: inherit;
    font-weight: 600;
    text-align: left;
    cursor: pointer;
    transition:
      background 140ms ease,
      color 140ms ease,
      transform 140ms ease;
  }

  .portfolio-devtools-select-option:hover,
  .portfolio-devtools-select-option[aria-selected="true"] {
    background: var(--portfolio-accent-soft);
    color: var(--portfolio-text);
    transform: translateX(1px);
  }

  .portfolio-devtools-select-option[aria-selected="true"]::after {
    flex: none;
    color: var(--portfolio-accent);
    content: "✓";
  }
`;

function closeAllSelects(root: ShadowRoot, except?: HTMLElement) {
  root.querySelectorAll<HTMLElement>(`.select-button[${SELECT_OPEN_ATTR}="true"]`).forEach((host) => {
    if (host !== except) {
      host.removeAttribute(SELECT_OPEN_ATTR);
      host.querySelector<HTMLButtonElement>(".portfolio-devtools-select-trigger")?.setAttribute(
        "aria-expanded",
        "false",
      );
    }
  });
}

function enhanceSelectButtons(root: ShadowRoot) {
  root.querySelectorAll<HTMLElement>(".select-button").forEach((host) => {
    const select = host.querySelector<HTMLSelectElement>("select");
    if (!select || host.getAttribute(ENHANCED_ATTR) === "true") return;
    const selectEl = select;

    host.setAttribute(ENHANCED_ATTR, "true");

    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "portfolio-devtools-select-trigger";
    trigger.setAttribute("aria-haspopup", "listbox");
    trigger.setAttribute("aria-expanded", "false");

    const value = document.createElement("span");
    value.className = "portfolio-devtools-select-value";

    const caret = document.createElement("span");
    caret.className = "portfolio-devtools-select-caret";
    caret.setAttribute("aria-hidden", "true");
    caret.textContent = "⌄";

    const menu = document.createElement("div");
    menu.className = "portfolio-devtools-select-menu";
    menu.setAttribute("role", "listbox");

    trigger.append(value, caret);
    host.append(trigger, menu);

    function syncFromSelect() {
      const maxLabelLength = Math.max(
        ...Array.from(selectEl.options).map(
          (option) => (option.textContent || option.value).trim().length,
        ),
      );
      host.style.setProperty(
        "--portfolio-select-width",
        `${Math.max(104, maxLabelLength * 8 + 46)}px`,
      );
      value.textContent =
        selectEl.selectedOptions[0]?.textContent?.trim() || selectEl.value;
      menu.replaceChildren(
        ...Array.from(selectEl.options).map((option) => {
          const item = document.createElement("button");
          item.type = "button";
          item.className = "portfolio-devtools-select-option";
          item.setAttribute("role", "option");
          item.setAttribute("aria-selected", String(option.value === selectEl.value));
          item.textContent = option.textContent || option.value;
          item.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            selectEl.value = option.value;
            selectEl.dispatchEvent(new Event("input", { bubbles: true }));
            selectEl.dispatchEvent(new Event("change", { bubbles: true }));
            closeAllSelects(root);
            syncFromSelect();
          });
          return item;
        }),
      );
    }

    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      const isOpen = host.getAttribute(SELECT_OPEN_ATTR) === "true";
      closeAllSelects(root, host);

      if (isOpen) {
        host.removeAttribute(SELECT_OPEN_ATTR);
        trigger.setAttribute("aria-expanded", "false");
      } else {
        host.setAttribute(SELECT_OPEN_ATTR, "true");
        trigger.setAttribute("aria-expanded", "true");
      }
    });

    trigger.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeAllSelects(root);
        trigger.focus();
      }
    });

    selectEl.addEventListener("change", syncFromSelect);
    syncFromSelect();
  });
}

function installPolish() {
  const portal = document.querySelector("nextjs-portal");
  const root = portal?.shadowRoot;
  if (!root) return;

  if (!root.getElementById(STYLE_ID)) {
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = devtoolsCss;
    root.appendChild(style);
  }

  enhanceSelectButtons(root);
}

export default function NextDevtoolsPolish() {
  useEffect(() => {
    installPolish();

    const observer = new MutationObserver(installPolish);
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });

    const interval = window.setInterval(installPolish, 250);

    function onPointerDown(event: PointerEvent) {
      const portal = document.querySelector("nextjs-portal");
      const root = portal?.shadowRoot;
      if (!root) return;

      const path = event.composedPath();
      const isInsideEnhancedSelect = path.some(
        (node) =>
          node instanceof HTMLElement &&
          node.getAttribute(ENHANCED_ATTR) === "true",
      );

      if (!isInsideEnhancedSelect) closeAllSelects(root);
    }

    document.addEventListener("pointerdown", onPointerDown);

    return () => {
      observer.disconnect();
      window.clearInterval(interval);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  return null;
}
