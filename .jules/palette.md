## 2026-10-24 - Dynamic ARIA States in JS-rendered UI
**Learning:** JS-rendered interactive components (like mobile menus) often rely solely on CSS classes for state (e.g., `.open`), leaving screen readers unaware of the state change.
**Action:** When implementing or updating JS-rendered dynamic UI components, ensure ARIA attributes (e.g., `aria-expanded`, `aria-label`) are toggled simultaneously with CSS classes or states in the JavaScript logic.
