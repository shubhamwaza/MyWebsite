## 2024-05-24 - Dynamic Navigation ARIA States
**Learning:** In vanilla JS setups, it's easy to toggle CSS classes for interactive components like mobile menus without updating the corresponding ARIA attributes (e.g., `aria-expanded`), leaving screen reader users unaware of the state change.
**Action:** When implementing or updating JS-rendered dynamic UI components (like navigation menus), ensure that ARIA attributes (e.g., `aria-expanded`, `aria-label`, `aria-controls`, `aria-current`) are toggled simultaneously with CSS classes or states in the JavaScript logic.
