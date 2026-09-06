## 2024-09-06 - Dynamic Menu ARIA States
**Learning:** When a navigation menu is toggled dynamically via JavaScript, simply adding CSS classes is insufficient for accessibility. Screen readers need `aria-expanded` and `aria-label` on the toggle button to be explicitly synchronized with the DOM's state to understand if the menu is open or closed.
**Action:** When working on dynamic JS components (like modals or menus), always ensure that state-toggling logic simultaneously updates relevant ARIA attributes alongside CSS visibility classes.
