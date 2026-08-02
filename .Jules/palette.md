## 2024-05-24 - Semantic Navigation Accessibility
**Learning:** Using `aria-current="page"` for active links and correctly toggling `aria-expanded` and updating `aria-label` for mobile menus significantly improves accessibility for screen readers and keyboard navigation users. Relying purely on CSS classes like `active` or `open` hides structural state from assistive tech.
**Action:** Always add semantic ARIA attributes for state changes in custom components (like mobile menus or tab bars).
