## 2024-10-06 - Dynamic ARIA States in Vanilla JS
**Learning:** In vanilla JS applications without framework state management, visual toggle states (like replacing an SVG icon or adding an "open" class) are frequently updated while corresponding semantic ARIA states (`aria-expanded`, `aria-label`) are left stale, confusing screen reader users.
**Action:** Always ensure event listeners that toggle visual states concurrently update relevant ARIA attributes (`aria-expanded`, `aria-hidden`, `aria-label`) to keep the accessible DOM synchronized with the visual DOM.
