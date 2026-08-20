## 2026-10-27 - Synchronizing ARIA with JS-Rendered UI
**Learning:** JS-rendered dynamic UI components (like navigation menus) in this vanilla JS codebase sometimes fail to keep ARIA attributes in sync with visual states or CSS classes, reducing accessibility for screen reader users.
**Action:** When implementing or updating JS-rendered UI components, ensure that ARIA attributes (e.g., `aria-expanded`, `aria-label`, `aria-controls`, `aria-current`) are toggled simultaneously with CSS classes or states in the JavaScript logic.
