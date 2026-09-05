## 2026-09-05 - Navigation ARIA states
**Learning:** In JS-rendered dynamic UI components (like navigation menus), ARIA attributes (`aria-expanded`, `aria-label`, `aria-current`, `aria-controls`) must be kept in sync with visual states in the JavaScript logic, rather than just relying on CSS class changes.
**Action:** Always update ARIA attributes synchronously when toggling states or opening/closing interactive UI elements like menus in JavaScript.
