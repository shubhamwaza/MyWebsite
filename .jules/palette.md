## 2026-10-09 - Navigation Menu ARIA state management
**Learning:** In JS-rendered dynamic UI components (like the navigation menu in this vanilla JS codebase), DOM classes and states are often updated in JavaScript without simultaneously updating their equivalent ARIA attributes (e.g., `aria-expanded`, `aria-label`, `aria-controls`), which causes a mismatch for screen readers.
**Action:** When implementing or updating JS-rendered dynamic UI components, ensure that ARIA attributes are toggled simultaneously with CSS classes or visual states in the JavaScript logic.
