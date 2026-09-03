## 2024-10-24 - Dynamic ARIA synchronization on navigation
**Learning:** For javascript-rendered UI components with togglable visual states (like `.open` or `.active`), static ARIA attributes are insufficient. Screen readers require real-time updates.
**Action:** When creating or modifying dynamic UI components (like navigation menus), ensure that ARIA attributes (e.g., `aria-expanded`, `aria-label`, `aria-controls`, `aria-current`) are toggled simultaneously with CSS classes or states in the JavaScript logic.
