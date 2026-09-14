## 2024-05-20 - Add dynamic ARIA attributes to navigation menu
**Learning:** In vanilla JS dynamic UI components like navigation menus, ARIA attributes (e.g., `aria-expanded`, `aria-label`, `aria-controls`, `aria-current`) must be toggled simultaneously with CSS classes or state variables in the JavaScript logic to ensure screen readers stay in sync with the visual state.
**Action:** Always include ARIA attribute updates alongside class toggles and innerHTML updates in event listeners for interactive elements like mobile menus.
